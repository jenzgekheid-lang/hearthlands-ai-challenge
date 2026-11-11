// ChatGPT GPT-6 — Game version: 195
// Map-aware economic planner: scores legal sites from terrain/resources, uses ore signs and event diagnostics,
// expands only when useful, protects carrier throughput, and commits a concentrated army only at a clear advantage.
function think(view){
 const E=view.economy;
 if(!E||view.over)return [];
 const out=[],town=E.town||[],stock=E.stock||{},units=E.units||[],soldiers=view.soldiers||[];
 const buildings=view.buildings||[],enemy=view.enemy||{},enemyB=enemy.buildings||[],enemyS=enemy.soldiers||[];
 const map=view.map, w=map&&map.w||0,h=map&&map.h||0,owner=map&&map.owner,ter=map&&map.ter;
 const tree=map&&map.tree,stone=map&&map.stone,fish=map&&map.fish,known=map&&map.known,oreLayer=map&&map.ore;
 const n=t=>town.filter(b=>b.type===t).length, built=t=>town.filter(b=>b.type===t&&b.built).length;
 const pending=t=>town.some(b=>b.type===t&&!b.built),s=k=>stock[k]||0;
 const ore=k=>(E.ore||[]).filter(o=>o.ore===k);
 const sites=town.filter(b=>!b.built).length,free=soldiers.filter(u=>!u.order&&!u.defends&&!u.held);
 const ownMil=buildings.filter(b=>b.owner===view.me&&b.military&&b.type!=='hq');
 const hq=buildings.find(b=>b.type==='hq'&&b.owner===view.me);
 const count=(a)=>a.reduce((v,x)=>v+x,0);
 const dist=(x,y,a,b)=>Math.hypot(x-a,y-b);
 const hasMap=!!(map&&owner&&ter&&w&&h&&typeof canPlace==='function');
 const nearBuildings=(x,y,r)=>town.some(b=>dist(x,y,b.x+b.w/2,b.y+b.h/2)<r);
 const tile=(layer,x,y)=>{if(!layer||x<0||y<0||x>=w||y>=h)return 0;return layer[y*w+x]||0;};
 const local=(layer,x,y,r,fn)=>{
  let z=0;
  const x0=Math.max(0,Math.floor(x-r)),x1=Math.min(w-1,Math.ceil(x+r));
  const y0=Math.max(0,Math.floor(y-r)),y1=Math.min(h-1,Math.ceil(y+r));
  for(let yy=y0;yy<=y1;yy++)for(let xx=x0;xx<=x1;xx++){
   const dx=xx-x,dy=yy-y;if(dx*dx+dy*dy<=r*r)z+=fn(tile(layer,xx,yy),xx,yy);
  }
  return z;
 };
 const oreDist=(kind,x,y)=>{
  const a=ore(kind);if(!a.length)return 999;
  let d=999;for(const q of a){const z=dist(x,y,q.x,q.y);if(z<d)d=z;}return d;
 };
 const bestSite=(type)=>{
  if(!hasMap)return null;
  let best=null,bs=-1e9;
  const mine=type==='coalmine'?'coal':type==='ironmine'?'ironore':type==='goldmine'?'goldore':type==='stonemine'?'stone':null;
  for(let y=1;y<h-8;y++)for(let x=1;x<w-8;x++){
   const i=y*w+x;
   if(owner[i]!==view.me||known&&known[i]!==2)continue;
   if(mine&&ter[i]!==2)continue;
   if(!canPlace(type,x,y))continue;
   const cx=x+1.5,cy=y+1.5;
   let score=0;
   if(type==='wood'){
    score=local(tree,cx,cy,14,v=>v===2?3:v===1?0.7:0);
    score-=local(ter,cx,cy,5,v=>v===2?1.5:0);
   }else if(type==='quarry'){
    score=local(stone,cx,cy,16,v=>v>0?Math.min(v,3):0);
   }else if(type==='fisher'){
    score=local(fish,cx,cy,12,v=>v>0?Math.min(v,4):0);
   }else if(type==='waterhut'){
    score=local(ter,cx,cy,10,(v,xx,yy)=>v===1?Math.max(0,10-dist(cx,cy,xx,yy)):0);
   }else if(type==='farm'){
    score=local(ter,cx,cy,8,(v,xx,yy)=>v===0&&tile(tree,xx,yy)===0&&tile(stone,xx,yy)===0?1:0);
   }else if(type==='forest'){
    score=local(ter,cx,cy,10,(v,xx,yy)=>v===0&&tile(tree,xx,yy)===0&&tile(stone,xx,yy)===0?1:0);
    score-=local(tree,cx,cy,10,v=>v===2?0.6:0);
   }else if(mine){
    const d=oreDist(mine,cx,cy);
    score= d<999 ? 40-d*3 : -100;
    score+=local(oreLayer,cx,cy,4,v=>v>1?2:0);
   }else if(type==='guard'||type==='tower'||type==='castle'){
    score=local(owner,cx,cy,14,v=>v===0?1:0);
    let nearest=999;
    for(const b of town.filter(q=>q.type==='guard'||q.type==='tower'||q.type==='castle')){
     const d=dist(cx,cy,b.x+b.w/2,b.y+b.h/2);if(d<nearest)nearest=d;
    }
    score+=Math.min(nearest,24)*1.8;
    if(hq)score+=Math.min(dist(cx,cy,hq.x+2,hq.y+2),35)*0.35;
   }else{
    score=local(ter,cx,cy,7,v=>v===0?1:0);
   }
   if(type!=='guard'&&type!=='tower'&&type!=='castle'){
    const d=hq?dist(cx,cy,hq.x+2,hq.y+2):20;
    score-=Math.max(0,d-30)*0.12;
   }
   if(nearBuildings(cx,cy,7))score-=8;
   // Deterministic tie-break: prefer western/northern positions only slightly.
   score-=((x*17+y*31)%101)*0.0001;
   if(score>bs){bs=score;best={x,y,score};}
  }
  return best;
 };
 // Keep a compact, useful stockpile configuration. Each store gets a distinct set of goods.
 memory.storeSlots=memory.storeSlots||{};
 for(const b of town.filter(q=>q.type==='store')){
  if(!memory.storeSlots[b.id]){
   const sets=[['plank','stone','log','grain'],['coal','ironore','iron','gold'],['sword','spear','bow','bread']];
   const idx=Math.min(sets.length-1,Object.keys(memory.storeSlots).length);
   for(let k=0;k<4;k++)out.push(['storeSlot',{b:b.id,k,it:sets[idx][k]}]);
   memory.storeSlots[b.id]=true;
  }
 }
 // Geology: one geologist, directed to the nearest unsearched mountain tile.
 const geos=units.filter(u=>u.role==='geologist');
 if(!geos.length&&E.land&&E.land.unsearched>8&&s('pick')>0&&view.t>=(memory.geoRetry||0)){
  out.push(['profession',{role:'geologist',d:1}]);memory.geoRetry=view.t+90;
 }
 for(const g of geos)if(!g.busy&&!g.moving&&(E.unsearched||[]).length){
  const q=E.unsearched[0];out.push(['sendUnit',{u:g.id,tx:q.x,ty:q.y}]);
 }
 // Carrier throughput: if goods are accumulating while carriers are idle, move clearing work upward.
 const waiting=(E.loose&&Object.values(E.loose).reduce((a,b)=>a+b,0))||0;
 const idleCarriers=(E.idle&&E.idle.carrier)||0;
 if(waiting>18&&idleCarriers>5&&view.t>=(memory.clearOrderAt||0)){
  out.push(['workOrder',{k:'clear',d:-1}]);memory.clearOrderAt=view.t+180;
 }
 // Army settings: garrisons get priority, but preserve a small mobile reserve.
 if(!memory.armySetup){
  out.push(['armyTarget',{kind:'sword',set:14}],['armyTarget',{kind:'spear',set:10}],
   ['armyTarget',{kind:'bow',set:16}],['armyReserve',{set:4}],['armyList',{on:true}]);
  memory.armySetup=true;
 }
 // Build plan: one deliberate site at a time; avoid spending materials on a long queue.
 const wants=[];
 const add=(ok,t)=>{if(ok&&!pending(t))wants.push(t);};
 add(n('wood')<1,'wood');
 add(n('quarry')<1,'quarry');
 add(n('saw')<1,'saw');
 add(n('wood')<2,'wood');
 add(n('forest')<1,'forest');
 add(n('fisher')<1,'fisher');
 add(n('waterhut')<1,'waterhut');
 add(n('farm')<1,'farm');
 add(n('mill')<1&&n('farm')>0,'mill');
 add(n('bakery')<1&&n('mill')>0,'bakery');
 add(n('quarry')<2&&s('stone')<24,'quarry');
 add(n('wood')<3&&s('log')<30,'wood');
 add(n('farm')<2&&n('mill')>0,'farm');
 // Mines only where the geologist has actually found a matching deposit.
 add(n('coalmine')<1&&ore('coal').length>0,'coalmine');
 add(n('ironmine')<1&&ore('ironore').length>0,'ironmine');
 add(n('smelter')<1&&n('coalmine')&&n('ironmine'),'smelter');
 add(n('weaponsmith')<1&&n('smelter')>0,'weaponsmith');
 add(n('barracks')<1&&n('weaponsmith')>0,'barracks');
 add(n('coalmine')<2&&n('weaponsmith')>0&&s('coal')<12&&ore('coal').length>0,'coalmine');
 add(n('goldmine')<1&&ore('goldore').length>0&&n('smelter')>0,'goldmine');
 add(n('goldsmelter')<1&&n('goldmine')>0&&n('coalmine')>0,'goldsmelter');
 // Houses: add beds only when population is close to capacity; cap at five small houses.
 const houses=n('house')+n('house2')+n('house3');
 add(houses<5&&(E.population||0)>=(E.beds||0)-5,'house');
 // Secure the starting ten soldiers immediately; this first post is the key to claiming room to expand.
 const guards=n('guard'),towers=n('tower');
 if(guards<1&&!pending('guard'))wants.unshift('guard');
 const emptyMil=ownMil.filter(b=>b.built&&!(b.troops||[]).length).length;
 if(guards<2&&view.t>120)add(true,'guard');
 else if(guards<4&&soldiers.length>=18&&emptyMil===0&&view.t>600)add(true,'guard');
 else if(towers<1&&soldiers.length>=28&&guards>=2&&emptyMil===0)add(true,'tower');
 // Don't keep placing military buildings while recruitment is behind.
 const militaryWant=wants.includes('guard')||wants.includes('tower');
 const selected=wants.find(t=>t!=='guard'&&t!=='tower')||null;
 let chosen=null;
 if(sites<2&&s('plank')>=2){
  // If a useful military site is needed, place it only when its position extends the border.
  const type=(wants[0]==='guard'||(militaryWant&&sites===0))?'guard':selected;
  if(type){
   chosen=bestSite(type);
   if(chosen)out.push(['place',{type,x:chosen.x,y:chosen.y}]);
   else if(!hasMap){
    out.push(['ask',{spots:[type]}]);
    const a=(E.spots||{})[type];if(a&&a.length)out.push(['place',{type,x:a[0].x,y:a[0].y}]);
   }
  }
 }
 // If core expansion is blocked, use a legal border guard to open more buildable land.
 if(!chosen&&sites===0&&guards<4&&soldiers.length>=14&&s('plank')>=2){
  const p=bestSite('guard');if(p)out.push(['place',{type:'guard',x:p.x,y:p.y}]);
 }
 // Prioritise an empty military building so it is filled before adding another.
 const empty=ownMil.filter(b=>b.built&&!(b.troops||[]).length);
 if(empty.length&&memory.prio!==empty[0].id){out.push(['priority',{b:empty[0].id,on:true}]);memory.prio=empty[0].id;}
 // Garrison settings: fewer archers in small posts, keep towers balanced.
 for(const b of ownMil)if(b.built&&b.type==='guard'&&b.archers!==1)out.push(['archers',{b:b.id,set:1}]);
 // Attack only with a substantial field advantage. Prefer empty military targets.
 const targets=enemyB.filter(b=>b.military).sort((a,b)=>(a.manned?1:0)-(b.manned?1:0));
 const target=targets[0]||enemyB.find(b=>b.type==='hq');
 const enemyVisible=enemyS.length;
 const attackThreshold=Math.max(18,enemyVisible+14);
 if(target&&free.length>=attackThreshold&&soldiers.length>=enemyVisible+18){
  const ids=free.map(q=>q.id);
  out.push(['attack',{ids,b:target.id}]);
 }else if(!target&&enemyVisible&&free.length>=20&&soldiers.length>=enemyVisible+18){
  const foe=enemyS.slice().sort((a,b)=>dist(hq?hq.x:0,hq?hq.y:0,a.x,a.y)-dist(hq?hq.x:0,hq?hq.y:0,b.x,b.y))[0];
  out.push(['march',{ids:free.map(q=>q.id),tx:foe.x|0,ty:foe.y|0,form:'wedge',am:true,loose:true}]);
 }
 // Strategic diagnostics: annotate only meaningful transitions, never flood the log.
 if(view.t>0&&view.t%600<2&&view.t!==(memory.lastNote||-1)){
  const coal=ore('coal').length,iron=ore('ironore').length;
  out.push(['note',{text:'Plan check: '+soldiers.length+' soldiers, '+guards+' guards, '+(E.people.carrier||0)+' carriers; coal signs '+coal+', iron signs '+iron+'.'}]);
  memory.lastNote=view.t;
 }
 return out.slice(0,50);
}
