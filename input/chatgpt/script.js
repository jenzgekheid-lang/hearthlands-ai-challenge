// ChatGPT GPT-6 — independent strategy rewrite for Hearthlands game version 204.
// Grow people and logistics early; discover ore and enemy positions; claim land with one swordsman per post.
// Keep the iron/tool/weapon chain supplied, then train and attack with a real field advantage.
// Game version: 204

const COST={
 wood:[2,2],forest:[3,1],saw:[3,4],fisher:[3,2],waterhut:[3,4],farm:[6,6],mill:[3,3],bakery:[4,5],
 pigfarm:[6,6],butcher:[4,4],coalmine:[4,1],ironmine:[4,1],stonemine:[5,0],goldmine:[5,1],
 goldsmelter:[4,6],smelter:[4,6],smith:[3,5],quarry:[2,3],house:[3,3],house2:[5,6],house3:[10,12],
 guard:[2,3],tower:[5,5],castle:[8,12],weaponsmith:[5,7],barracks:[4,5]
};
const TOOL={wood:'axe',forest:'shovel',saw:'saw',fisher:'rod',farm:'scythe',quarry:'pick',coalmine:'pick',
 ironmine:'pick',stonemine:'pick',goldmine:'pick',smelter:'hammer',smith:'hammer',weaponsmith:'hammer',goldsmelter:'hammer'};
const MIL={guard:14,tower:20,castle:26};
const MINE={coalmine:'coal',ironmine:'ironore',stonemine:'stone',goldmine:'goldore'};
let GRID=null;
const LOCAL={};

function think(view){
 if(!view||view.over)return [];
 const M=typeof memory==='object'&&memory?memory:LOCAL, out=[];
 if(view.economy&&!view.armyOnly)runEconomy(view,M,out);
 runArmy(view,M,out);
 return out.slice(0,50);
}
function runEconomy(v,M,out){
 const E=v.economy,t=v.t||0,me=v.me, town=E.town||[],stock=E.stock||{},people=E.people||{},idle=E.idle||{},units=E.units||[];
 const st=k=>stock[k]||0, count=k=>town.filter(b=>b.type===k).length, built=k=>town.filter(b=>b.type===k&&b.built).length;
 const pending=k=>town.some(b=>b.type===k&&!b.built),sites=town.filter(b=>!b.built).length;
 const carriers=people.carrier||0,idleC=idle.carrier||0, persons=Object.values(people).reduce((a,b)=>a+(b||0),0);
 const hq=town.find(b=>b.type==='hq'), home=hq?{x:hq.x+2,y:hq.y+2}:{x:120,y:120};
 M.ore=M.ore||{};M.bad=M.bad||{};M.once=M.once||{};M.lastPlace=M.lastPlace||{};
 for(const o of E.ore||[]){const a=M.ore[o.ore]=M.ore[o.ore]||[];if(a.length<50&&!a.some(p=>p[0]===o.x&&p[1]===o.y))a.push([o.x,o.y]);}
 for(const r of v.refused||[])if(r.order==='place'&&r.args)M.bad[r.args.x+','+r.args.y]=t+240;
 const geos=units.filter(u=>u.role==='geologist'),exps=units.filter(u=>u.role==='explorer');
 const map=v.map,w=map&&map.w||0,h=map&&map.h||0,ok=!!(map&&map.owner&&map.ter&&map.tree&&map.stone&&typeof canPlace==='function');
 if(ok&&(!GRID||GRID.w!==w||GRID.h!==h||t-GRID.t>=6))GRID=makeGrid(map,w,h,me,t);
 const oreKnown=k=>(M.ore[k]||[]).length>0||(ok&&oreValue(map,k)>1&&GRID.ore[oreValue(map,k)]>0);
 const ownMil=town.filter(b=>MIL[b.type]),milN=ownMil.length;
 const liveQuarry=town.some(b=>b.type==='quarry'&&b.built&&ok&&area(GRID.sum[0],b.x+1,b.y+1,15)>0);
 const free=(v.soldiers||[]).filter(s=>!s.order&&!s.defends&&!s.fighting&&!s.held);
 const toolWait={};for(const b of town)if(TOOL[b.type]&&!b.worker)toolWait[TOOL[b.type]]=(toolWait[TOOL[b.type]]||0)+1;
 const freeTool=k=>st(k)-(toolWait[k]||0);
 const find=(type)=>{
  if(!ok)return null;
  const sz=type==='farm'?[4,3]:type==='house2'?[5,4]:type==='house3'?[6,5]:type==='tower'?[5,4]:type==='castle'?[8,7]:[3,3];
  const mountain=!!MINE[type],want=mountain?2:0,layer=GRID.sum;
  let best=null,bs=-1e9,calls=0;
  for(let y=GRID.y0;y<=GRID.y1;y++)for(let x=GRID.x0;x<=GRID.x1;x++){
   const i=y*w+x;if(map.owner[i]!==me||map.ter[i]!==want)continue;
   if(map.tree[i]||map.stone[i]||map.occupied&&map.occupied[i])continue;
   if(M.bad[x+','+y]>t)continue;
   const cx=x+(sz[0]>>1),cy=y+(sz[1]>>1);
   let score=0;
   if(type==='quarry'){score=area(layer[0],cx,cy,13);if(score<5)continue;}
   else if(type==='wood'){score=area(layer[1],cx,cy,11);if(score<(count('wood')?10:5))continue;}
   else if(type==='fisher'){score=area(layer[2],cx,cy,10);if(score<3)continue;}
   else if(type==='waterhut'){score=area(layer[3],cx,cy,8);if(score<2)continue;}
   else if(type==='farm'){score=area(layer[4],cx,cy,7);if(score<45)continue;}
   else if(type==='forest'){score=area(layer[4],cx,cy,9)-area(layer[1],cx,cy,8)*0.3;if(score<25)continue;}
   else if(mountain){
    const val=oreValue(map,MINE[type]);let hits=0;
    for(let yy=Math.max(0,cy-4);yy<=Math.min(h-1,cy+4);yy++)for(let xx=Math.max(0,cx-4);xx<=Math.min(w-1,cx+4);xx++)if(map.ore[yy*w+xx]===val)hits++;
    for(const p of M.ore[MINE[type]]||[])if(Math.abs(p[0]-cx)<=5&&Math.abs(p[1]-cy)<=5)hits+=2;
    if(!hits)continue;score=hits*8;
   }else if(MIL[type]){
    const r=MIL[type];score=area(layer[5],cx,cy,r)+area(layer[6],cx,cy,r)*0.8+area(layer[7],cx,cy,r)*0.6-area(layer[8],cx,cy,r)*2;
    if(score<130)continue;
   }else score=area(layer[4],cx,cy,6);
   const d=Math.abs(cx-home.x)+Math.abs(cy-home.y);score-=d*0.22;
   for(const b of town)if(Math.abs(cx-(b.x+1))<7&&Math.abs(cy-(b.y+1))<7)score-=10;
   score-=((x*17+y*31)%97)*0.0001;
   if(score<=bs)continue;
   if(++calls>30000)return best;
   if(!canPlace(type,x,y))continue;
   bs=score;best={x,y,score};
  }
  return best;
 };
 let siteCount=sites;
 const place=(type)=>{
  if(siteCount>=4+(t>600?1:0))return false;
  const c=COST[type]||[0,0],ow=town.filter(b=>!b.built).reduce((a,b)=>{const need=b.cost||{},got=b.delivered||{};a[0]+=Math.max(0,(need.plank||0)-(got.plank||0));a[1]+=Math.max(0,(need.stone||0)-(got.stone||0));return a;},[0,0]);
  if(st('plank')-ow[0]<c[0]||st('stone')-ow[1]<c[1])return false;
  const p=find(type);if(!p)return false;
  out.push(['place',{type,x:p.x,y:p.y}]);siteCount++;M.lastPlace[type]=t;return true;
 };
 // A geologist searches the mountain; an explorer reveals the enemy and distant resources.
 if(!geos.length&&t>20&&carriers>5&&idleC>1&&freeTool('pick')>0&&(E.land.unsearched||0)>0&&t>=(M.geoAt||0)){
  out.push(['profession',{role:'geologist',d:1}]);M.geoAt=t+50;
 }
 for(const g of geos)if(!g.busy&&!g.moving&&(E.unsearched||[]).length&&t>=(M.geoSend||0)){
  const q=E.unsearched[0];out.push(['sendUnit',{u:g.id,tx:q.x,ty:q.y}]);M.geoSend=t+8;
 }
 if(!exps.length&&t>120&&carriers>8&&idleC>2&&st('plank')>=6&&t>=(M.expAt||0)){
  out.push(['profession',{role:'explorer',d:1}]);M.expAt=t+90;
 }
 if(exps.length){
  const pts=M.scoutPts||(M.scoutPts=[[w-8,home.y],[w-8,h-8],[home.x,h-8],[8,h-8],[8,home.y],[8,8],[home.x,8],[w-8,8]]);
  for(const u of exps)if(!u.busy&&!u.moving&&t>=(M.scoutSend||0)){
   const p=pts[(M.scoutI||0)%pts.length];out.push(['sendUnit',{u:u.id,tx:p[0],ty:p[1]}]);M.scoutI=(M.scoutI||0)+1;M.scoutSend=t+10;
  }
 }
 // Set the minimum garrison: one swordsman claims each post; archers stay with the mobile force.
 for(const b of town)if(MIL[b.type]&&b.built){
  if(b.fighters!==1)out.push(['fighters',{b:b.id,set:1}]);
  if(b.archers!==0)out.push(['archers',{b:b.id,set:0}]);
 }
 // The first house is immediate: more settlers are the engine for every later building and soldier.
 const houses=count('house')+count('house2')+count('house3');
 const housePending=town.some(b=>/^house/.test(b.type)&&(!b.built||(b.coming||0)>0));
 if(!housePending&&persons<125&&(houses===0||idleC<=(built('barracks')?8:5))){
  if(!place(t>480&&st('plank')>=10&&st('stone')>=12?'house3':t>180&&st('plank')>=5&&st('stone')>=6?'house2':'house')){}
 }
 // Keep the opening compact and reach the iron chain early.
 const goals=[];
 const add=(yes,ty)=>{if(yes&&!pending(ty)&&!goals.includes(ty))goals.push(ty);};
 add(count('quarry')<1||(!liveQuarry&&count('stonemine')<1&&oreKnown('stone')),'quarry');
 add(!liveQuarry&&oreKnown('stone')&&count('stonemine')<1,'stonemine');
 add(count('wood')<1,'wood');
 add(count('guard')<1,'guard');
 add(count('saw')<1,'saw');
 add(count('fisher')<1,'fisher');
 add(count('forest')<1&&count('wood')>0,'forest');
 add(count('coalmine')<1&&oreKnown('coal'),'coalmine');
 add(count('ironmine')<1&&oreKnown('ironore'),'ironmine');
 add(count('smelter')<1&&built('coalmine')>0&&built('ironmine')>0,'smelter');
 add(count('smith')<1&&built('smelter')>0&&st('iron')>0,'smith');
 add(count('weaponsmith')<1&&built('smith')>0,'weaponsmith');
 add(count('barracks')<1&&built('weaponsmith')>0,'barracks');
 add(count('farm')<1&&(count('fisher')>0||((count('coalmine')+count('ironmine'))>0&&st('fish')<4)),'farm');
 add(count('waterhut')<1&&count('farm')>0,'waterhut');
 add(count('mill')<1&&count('farm')>0,'mill');
 add(count('bakery')<1&&count('mill')>0&&count('waterhut')>0,'bakery');
 // If the map is short of deposits, extend the border toward unowned mountain/rocks instead of waiting.
 const noOre=!oreKnown('coal')||!oreKnown('ironore');
 const needsLand=(noOre&&(E.land.unsearched||0)<5)||(!liveQuarry&&t>150);
 const scheduleMil=milN<Math.min(12,1+Math.floor(t/180));
 if(scheduleMil&&free.length>=2&&!pending('guard')&&!goals.includes('guard'))goals.unshift('guard');
 if(count('guard')>=2&&count('tower')<1&&free.length>=7&&t>900&&!pending('tower'))goals.unshift('tower');
 if(count('guard')<4&&free.length>=3&&needsLand&&!pending('guard')&&!goals.includes('guard'))goals.unshift('guard');
 // Food for mines: a second fisher is cheaper than letting iron production stop for lack of meals.
 const hungry=town.filter(b=>(b.type==='coalmine'||b.type==='ironmine')&&b.built&&b.worker&&
  !((b.inputs&&b.inputs.fish)||(b.inputs&&b.inputs.bread)||(b.inputs&&b.inputs.meat))).length;
 add(hungry>0&&count('fisher')<2,'fisher');
 add(count('coalmine')<2&&built('weaponsmith')>0&&oreKnown('coal')&&st('coal')<15,'coalmine');
 add(count('ironmine')<2&&built('weaponsmith')>0&&oreKnown('ironore')&&t>900,'ironmine');
 add(count('wood')<3&&t>600,'wood');
 add(count('quarry')<2&&t>600,'quarry');
 add(count('pigfarm')<1&&count('ironmine')>0&&hungry>0&&count('farm')>0&&count('waterhut')>0,'pigfarm');
 add(count('butcher')<1&&built('pigfarm')>0,'butcher');
 add(count('goldmine')<1&&oreKnown('goldore')&&built('barracks')>0,'goldmine');
 add(count('goldsmelter')<1&&built('goldmine')>0,'goldsmelter');
 // Prioritise the production chain and any stonecutter site that unlocks further building.
 M.prio=M.prio||{};
 for(const ty of ['quarry','smelter','smith','weaponsmith','barracks']){
  const b=town.find(q=>q.type===ty&&q.built);
  if(b&&!b.prio&&!M.prio[b.id]){out.push(['priority',{b:b.id,on:true}]);M.prio[b.id]=1;break;}
 }
 if(!pending('quarry')&&count('quarry')===0&&goals[0]!=='quarry')goals.unshift('quarry');
 if(sites<4+(t>600?1:0)){
  for(const ty of goals){
   const tool=TOOL[ty];if(tool&&freeTool(tool)<1)continue;
   if(ty==='smelter'||ty==='smith'||ty==='weaponsmith'){
    const hammers=st('hammer')-(toolWait.hammer||0);if(hammers<1)continue;
   }
   if(place(ty))break;
  }
 }
 // Expand workforce gently once the iron chain is staffed.
 if(built('smelter')&&built('smith')&&built('weaponsmith')&&idleC>5&&carriers>10&&t>600){
  if((people.builder||0)<3&&freeTool('hammer')>0&&t>=(M.builderAt||0)){out.push(['profession',{role:'builder',d:1}]);M.builderAt=t+60;}
  else if((people.digger||0)<3&&freeTool('shovel')>0&&t>=(M.diggerAt||0)){out.push(['profession',{role:'digger',d:1}]);M.diggerAt=t+60;}
 }
 if(t>0&&t%600<2&&t!==(M.noteAt||-1)){
  out.push(['note',{text:'Plan: '+(v.soldiers||[]).length+' field soldiers, '+milN+' posts, carriers '+carriers+'/'+idleC+' idle; ore coal/iron/gold '+(oreKnown('coal')?1:0)+'/'+(oreKnown('ironore')?1:0)+'/'+(oreKnown('goldore')?1:0)+', sites '+sites+'.'}]);M.noteAt=t;
 }
}
function makeGrid(map,w,h,me,t){
 const W=w+1,size=W*(h+1),layers=9,pre=[];
 for(let k=0;k<layers;k++)pre.push(new Int32Array(size));
 let x0=w,y0=h,x1=0,y1=0,ore=new Int32Array(16);
 for(let y=0;y<h;y++){
  const run=new Int32Array(layers);
  for(let x=0;x<w;x++){
   const i=y*w+x,o=map.owner[i],ter=map.ter[i],tr=map.tree[i],st=map.stone[i];
   if(o===me){
    if(x<x0)x0=x;if(x>x1)x1=x;if(y<y0)y0=y;if(y>y1)y1=y;
    if(st)run[0]+=st>4?4:st;
    if(tr)run[1]+=tr===2?2:1;
    if(ter===1){run[3]++;if(map.fish)run[2]+=map.fish[i]>4?4:map.fish[i];}
    else if(ter===0&&!tr&&!st&&!(map.occupied&&map.occupied[i]))run[4]++;
    if(ter===2&&map.ore&&map.ore[i]<16)ore[map.ore[i]]++;
   }else if(o===0){run[5]++;if(st)run[6]+=st>4?4:st;if(ter===2)run[7]++;}
   else run[8]++;
   const a=(y+1)*W+x+1,b=y*W+x+1;
   for(let k=0;k<layers;k++)pre[k][a]=pre[k][b]+run[k];
  }
 }
 return {w,h,W,t,sum:pre,ore,x0,y0,x1,y1};
}
function area(L,cx,cy,r){
 const G=GRID;if(!G||!L)return 0;
 const x0=Math.max(0,Math.floor(cx-r)),x1=Math.min(G.w,Math.ceil(cx+r)+1);
 const y0=Math.max(0,Math.floor(cy-r)),y1=Math.min(G.h,Math.ceil(cy+r)+1),W=G.W;
 if(x1<=x0||y1<=y0)return 0;
 return L[y1*W+x1]-L[y0*W+x1]-L[y1*W+x0]+L[y0*W+x0];
}
function oreValue(map,k){return map&&map.oreNames?map.oreNames.indexOf(k)+1:0;}
function runArmy(v,M,out){
 const t=v.t||0,mine=v.soldiers||[],bld=v.buildings||[],enemy=v.enemy||{},foes=enemy.soldiers||[],eb=enemy.buildings||[];
 const E=v.economy,cmd=c=>out.push(c),d=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y),door=b=>b.door||b;
 M.sent=M.sent||{};M.badTarget=M.badTarget||{};
 const free=mine.filter(s=>!s.order&&!s.defends&&!s.fighting&&!s.held);
 const moving=mine.filter(s=>s.order&&(s.order.k==='move'||s.order.k==='attack-move'));
 const active=mine.filter(s=>s.order&&s.order.k==='attack');
 const used={};
 const available=()=>free.filter(s=>!used[s.id]);
 const ownMil=bld.filter(b=>b.owner===v.me&&MIL[b.type]&&b.built!==false);
 // Release completed scouting/defence moves. March orders hold soldiers until explicitly released.
 const arrived=moving.filter(s=>{
  const o=s.order||{},p={x:o.x,y:o.y};
  return Number.isFinite(p.x)&&Number.isFinite(p.y)&&(d(s,p)<5||t>=(M.moveReleaseAt||1e9));
 });
 if(arrived.length){
  cmd(['release',{ids:arrived.map(s=>s.id),stop:true}]);
  M.moveReleaseAt=t+999999;
 }
 // An enemy sighting takes priority over the current scouting route.
 const visibleTargets=eb.filter(b=>(b.military||MIL[b.type]||b.type==='hq')&&
  !(M.badTarget[b.id]>t)&&!(b.remembered&&Number.isFinite(b.seenAt)&&t-b.seenAt>900));
 const targets=visibleTargets;
 if(targets.length&&moving.length){
  cmd(['release',{ids:moving.map(s=>s.id),stop:true}]);
  M.moveReleaseAt=t+999999;
 }
 // Keep one swordsman in each active post, but never strip the mobile reserve to do it.
 for(const b of ownMil){
  if((b.troops||[]).length)continue;
  if((M.sent[b.id]||0)>t)continue;
  const candidates=available().slice().sort((a,b)=>
   (a.kind==='sword'?0:a.kind==='spear'?1:2)-(b.kind==='sword'?0:b.kind==='spear'?1:2));
  if(candidates.length>8){
   const s=candidates[0];
   cmd(['sendIn',{ids:[s.id],b:b.id}]);used[s.id]=1;M.sent[b.id]=t+30;
   break;
  }
 }
 // Defend buildings only when an enemy is actually close; do not chase distant sightings.
 let threat=null,threatDist=1e9;
 for(const f of foes)for(const b of bld)if(b.owner===v.me){
  const q=Math.abs(f.x-(b.x+b.w/2))+Math.abs(f.y-(b.y+b.h/2));
  if(q<threatDist){threatDist=q;threat=f;}
 }
 if(threat&&threatDist<20&&available().length&&t>=(M.defendAt||0)){
  const ids=available().filter(s=>d(s,threat)<55).map(s=>s.id);
  if(ids.length){
   cmd(['march',{ids,tx:Math.round(threat.x),ty:Math.round(threat.y),form:'line',am:true}]);
   M.moveReleaseAt=t+90;M.defendAt=t+12;
   for(const id of ids)used[id]=1;
  }
 }
 // Reissue reinforcements to a live attack. Do not strand additional idle soldiers.
 if(active.length){
  const targetId=active[0].order.b,target=targets.find(b=>b.id===targetId);
  if(!target){
   cmd(['release',{ids:active.map(s=>s.id),stop:true}]);
  }else{
   const ids=available().map(s=>s.id);
   if(ids.length)cmd(['attack',{ids,b:target.id}]);
  }
 }else if(targets.length){
  const ready=available();
  const cx=ready.length?ready.reduce((a,s)=>a+s.x,0)/ready.length:0;
  const cy=ready.length?ready.reduce((a,s)=>a+s.y,0)/ready.length:0;
  const rank={guard:0,tower:6,castle:14,hq:10};
  let target=null,best=1e9;
  for(const b of targets){
   const q=(ready.length?Math.hypot(door(b).x-cx,door(b).y-cy):1e6)+(rank[b.type]||0)-(b.manned===false?6:0);
   if(q<best){best=q;target=b;}
  }
  if(target&&ready.length){
   let need=target.manned===false?4:({guard:7,tower:11,castle:15,hq:12}[target.type]||8);
   for(const f of foes)if(d(f,door(target))<16)need++;
   const gold=typeof v.gold==='number'?v.gold:.6;
   need=Math.max(4,Math.ceil(need*(1.45-.75*gold)));
   if(t>2700)need=Math.max(4,Math.ceil(need*.9));
   if(ready.length>=need){
    cmd(['attack',{ids:ready.map(s=>s.id),b:target.id}]);
    M.attackAt=t;M.attackId=target.id;
    if(t>=(M.attackNote||0)){
     out.push(['note',{text:'Attack: '+ready.length+' field troops against '+target.type+' '+target.id+'; need '+need+'.'}]);
     M.attackNote=t+60;
    }
   }
  }
 }else if(!active.length&&available().length>=8&&t>900&&t>=(M.searchAt||0)){
  const map=v.map,w=map&&map.w||240,h=map&&map.h||240;
  const pts=[[w-10,10],[w-10,h-10],[10,h-10],[10,10],[Math.floor(w/2),10],[Math.floor(w/2),h-10]];
  const p=pts[(M.searchI||0)%pts.length],ready=available();
  const scouts=ready.slice(0,Math.min(6,ready.length));
  if(scouts.length>=6){
   cmd(['march',{ids:scouts.map(s=>s.id),tx:p[0],ty:p[1],form:'block',am:true}]);
   M.searchI=(M.searchI||0)+1;M.searchAt=t+120;M.moveReleaseAt=t+180;
  }
 }
 // Army targets count soldiers OUTSIDE buildings only. Garrison troops are deliberately not added.
 if(E&&!v.armyOnly&&E.town&&E.town.some(b=>b.type==='barracks')&&t>=(M.targetAt||0)){
  M.targetAt=t+10;
  const A=E.army||{},idleC=(E.idle&&E.idle.carrier)||0,carriers=(E.people&&E.people.carrier)||0;
  const current=mine.length;
  let desired=8;
  if(t>900)desired=10;
  if(t>1800)desired=12;
  if(t>2700)desired=14;
  if(t>3600)desired=16;
  if(idleC>=4&&carriers>=8)desired=Math.min(20,desired+2);
  desired=Math.max(current,Math.min(20,desired));
  const want={sword:Math.ceil(desired*.45),spear:Math.round(desired*.30)};
  want.bow=Math.max(0,desired-want.sword-want.spear);
  for(const k of ['sword','spear','bow'])if((A.target||{})[k]!==want[k])cmd(['armyTarget',{kind:k,set:want[k]}]);
  if(Array.isArray(A.keep))for(let i=0;i<3;i++)if(A.keep[i]&&A.keep[i].keep!==0)cmd(['weaponKeep',{k:i,set:0}]);
  if(A.reserve!==8)cmd(['armyReserve',{set:8}]);
 }
}
