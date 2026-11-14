// ChatGPT GPT-6 — Hearthlands adaptive full-game strategy, rewritten for the advisor-tip system.
// Diagnose economy and military bottlenecks from live tips plus observed state; fix the cause before expanding production.
// Build a reliable resource chain, protect a useful field army, scout reachable frontiers, and attack with a real advantage.
// Game version: 208

const COST={
 wood:[2,2],forest:[3,1],saw:[3,4],fisher:[3,2],waterhut:[3,4],farm:[6,6],mill:[3,3],bakery:[4,5],
 pigfarm:[6,6],butcher:[4,4],coalmine:[4,1],ironmine:[4,1],stonemine:[5,0],goldmine:[5,1],
 goldsmelter:[4,6],smelter:[4,6],smith:[3,5],quarry:[2,3],house:[3,3],house2:[5,6],house3:[10,12],
 guard:[2,3],tower:[5,5],castle:[8,12],weaponsmith:[5,7],barracks:[4,5],look:[2,4]
};
const TOOL={
 wood:'axe',forest:'shovel',saw:'saw',fisher:'rod',farm:'scythe',quarry:'pick',
 coalmine:'pick',ironmine:'pick',stonemine:'pick',goldmine:'pick',
 smelter:'hammer',smith:'hammer',weaponsmith:'hammer',goldsmelter:'hammer'
};
const MIL={guard:14,tower:20,castle:26};
const MINE={coalmine:'coal',ironmine:'ironore',stonemine:'stone',goldmine:'goldore'};
let GRID=null;

function think(view){
 if(!view||view.over)return [];
 const M=typeof memory==='object'&&memory?memory:{};
 const out=[];
 if(view.economy&&!view.armyOnly)runEconomy(view,M,out);
 runArmy(view,M,out);
 return out.slice(0,50);
}

function runEconomy(v,M,out){
 const E=v.economy,t=v.t||0,me=v.me,town=E.town||[],stock=E.stock||{},people=E.people||{},idle=E.idle||{},units=E.units||[];
 const st=k=>stock[k]||0;
 const count=k=>town.filter(b=>b.type===k).length;
 const built=k=>town.filter(b=>b.type===k&&b.built).length;
 const pending=k=>town.some(b=>b.type===k&&!b.built);
 const sites=town.filter(b=>!b.built).length;
 const carriers=people.carrier||0,idleC=idle.carrier||0;
 const pileWaiting=town.reduce((n,b)=>n+Object.values(b.outputs||{}).reduce((a,q)=>a+(typeof q==='number'?q:0),0),0);
 const hq=town.find(b=>b.type==='hq');
 const home=hq?{x:hq.x+2.5,y:hq.y+2}:{x:(v.map.w||240)/2,y:(v.map.h||240)/2};
 const map=v.map,w=map&&map.w||0,h=map&&map.h||0;
 const ok=!!(map&&map.owner&&map.ter&&map.tree&&map.stone&&typeof canPlace==='function');
 M.ore=M.ore||{};M.bad=M.bad||{};M.prio=M.prio||{};M.tipText=M.tipText||{};
 M.lastPlace=M.lastPlace||{};
 for(const o of E.ore||[]){
  const a=M.ore[o.ore]=M.ore[o.ore]||[];
  if(a.length<100&&!a.some(p=>p[0]===o.x&&p[1]===o.y))a.push([o.x,o.y]);
 }
 for(const r of v.refused||[]){
  if(r.order==='place'&&r.args)M.bad[r.args.x+','+r.args.y]=t+300;
 }
 const tips=Array.isArray(E.tips)?E.tips:[];
 const tipKinds={};
 for(const q of tips){
  const k=String(q.k||'').toLowerCase(),s=String(q.text||'');
  if(k){tipKinds[k]=s;M.tipText[k]=s;}
 }
 const tip=(k)=>String(tipKinds[k]||'').toLowerCase();
 const hasTip=k=>!!tipKinds[k];
 const oreKnown=k=>(M.ore[k]||[]).length>0||(ok&&map.ore&&map.oreNames&&map.oreNames.indexOf(k)>=1&&map.ore.some(x=>x===map.oreNames.indexOf(k)+1));
 const ownMil=town.filter(b=>MIL[b.type]);
 const freeSoldiers=(v.soldiers||[]).filter(s=>!s.order&&!s.defends&&!s.fighting&&!s.held);
 const toolWait={};
 for(const b of town)if(TOOL[b.type]&&!b.worker)toolWait[TOOL[b.type]]=(toolWait[TOOL[b.type]]||0)+1;
 const freeTool=k=>Math.max(0,st(k)-(toolWait[k]||0));
 if(ok&&(!GRID||GRID.w!==w||GRID.h!==h||t-GRID.t>=8))GRID=makeGrid(map,w,h,me,t);
 const area=(layer,x,y,r)=>gridArea(GRID,layer,x,y,r);
 const find=(type)=>{
  if(!ok||!GRID)return null;
  const sz=type==='farm'?[4,3]:type==='house2'?[5,4]:type==='house3'?[6,5]:type==='tower'?[5,4]:type==='castle'?[8,7]:type==='look'?[2,2]:[3,3];
  const mine=!!MINE[type],mountain=mine,want=mountain?2:0;
  let best=null,bestScore=-1e9,calls=0;
  for(let y=GRID.y0;y<=GRID.y1;y++)for(let x=GRID.x0;x<=GRID.x1;x++){
   const i=y*w+x;
   if(map.owner[i]!==me||map.ter[i]!==want)continue;
   if(map.tree[i]||map.stone[i]||(map.occupied&&map.occupied[i]))continue;
   if((M.bad[x+','+y]||0)>t)continue;
   const cx=x+sz[0]/2,cy=y+sz[1]/2;
   let score=0;
   if(type==='quarry'){
    score=area(0,cx,cy,13);if(score<5)continue;
   }else if(type==='wood'){
    score=area(1,cx,cy,11);if(score<(count('wood')?9:4))continue;
   }else if(type==='fisher'){
    score=area(2,cx,cy,11);if(score<3)continue;
   }else if(type==='waterhut'){
    score=area(3,cx,cy,9);if(score<2)continue;
   }else if(type==='farm'){
    score=area(4,cx,cy,7);if(score<35)continue;
   }else if(type==='forest'){
    score=area(4,cx,cy,9)-area(1,cx,cy,8)*0.25;if(score<20)continue;
   }else if(mine){
    const val=map.oreNames?map.oreNames.indexOf(MINE[type])+1:0;
    let hits=0;
    if(val>1&&map.ore)for(let yy=Math.max(0,cy-5);yy<=Math.min(h-1,cy+5);yy++)
     for(let xx=Math.max(0,cx-5);xx<=Math.min(w-1,cx+5);xx++)if(map.ore[yy*w+xx]===val)hits++;
    for(const p of M.ore[MINE[type]]||[])if(Math.abs(p[0]-cx)<=6&&Math.abs(p[1]-cy)<=6)hits+=2;
    if(!hits)continue;
    score=hits*10;
   }else if(MIL[type]){
    score=area(5,cx,cy,MIL[type])+area(6,cx,cy,MIL[type])*0.6-area(8,cx,cy,MIL[type])*2;
    if(score<100)continue;
   }else if(type==='look'){
    score=area(5,cx,cy,20)+area(7,cx,cy,20);
   }else score=area(4,cx,cy,6);
   const dist=Math.abs(cx-home.x)+Math.abs(cy-home.y);
   score-=dist*0.18;
   for(const b of town)if(Math.abs(cx-(b.x+b.w/2))<7&&Math.abs(cy-(b.y+b.h/2))<7)score-=8;
   score-=((x*17+y*31)%97)*0.0001;
   if(score<=bestScore)continue;
   if(++calls>35000)return best;
   if(!canPlace(type,x,y))continue;
   bestScore=score;best={x,y,score};
  }
  return best;
 };
 let siteCount=sites;
 const place=(type)=>{
  const siteLimit=t<600?3:(idleC>5?4:3);
  if(siteCount>=siteLimit||pending(type))return false;
  const c=COST[type]||[0,0];
  let owedP=0,owedS=0;
  for(const b of town)if(!b.built){
   const need=b.cost||{},got=b.delivered||{};
   owedP+=Math.max(0,(need.plank||0)-(got.plank||0));
   owedS+=Math.max(0,(need.stone||0)-(got.stone||0));
  }
  if(st('plank')-owedP<c[0]||st('stone')-owedS<c[1])return false;
  const p=find(type);if(!p)return false;
  out.push(['place',{type,x:p.x,y:p.y}]);
  siteCount++;M.lastPlace[type]=t;
  return true;
 };

 // Advisor tips are evidence, not orders: combine them with the actual state before acting.
 const allTip=Object.keys(tipKinds).map(k=>k+' '+tip(k)).join(' ');
 const stallTip=hasTip('stall')||/pile full|waiting for carriers|stuck|output/.test(allTip);
 const outputTip=/pile full|waiting for carriers|output pile|goods.*waiting/.test(allTip);
 const oreTip=hasTip('ore')||/no ore|ore deposit|geologist/.test(allTip);
 const landTip=hasTip('land')||/land.*(grow|expand)|territory/.test(allTip);
 const weaponsTip=hasTip('weapons')||/weapon|weaponsmith|barracks/.test(allTip);
 const settlersTip=hasTip('settlers')||/settler|carrier|homeless|beds/.test(allTip);
 const timingTip=hasTip('timing')||/late|too long|timing|minute/.test(allTip);

 // Process path failures before dispatching another scout on this same economy turn.
 const log=Array.isArray(E.log)?E.log:[];
 const pathFails=log.filter(e=>e.what==='pathfail'&&/explorer|geologist/.test(String(e.s||'')));
 if(pathFails.length&&pathFails[pathFails.length-1].t>(M.pathFailSeen||-1)){
  const e=pathFails[pathFails.length-1];M.pathFailSeen=e.t;
  if(/geologist/.test(e.s||''))M.geoFailAt=t+90;
  if(/explorer/.test(e.s||''))M.scoutFailAt=t+120;
 }

 // Pioneers extend the border toward neutral ground and nearby mountain resources.
 const pioneers=units.filter(u=>u.role==='pioneer');
 if(!pioneers.length&&t>300&&carriers>10&&idleC>5&&freeTool('shovel')>0&&t>=(M.pioneerAt||0)){
  out.push(['profession',{role:'pioneer',d:1}]);M.pioneerAt=t+120;
 }
 for(const p of pioneers)if(!p.busy&&!p.moving&&ok&&t>=(M.pioneerSend||0)){
  const q=findPioneerTarget(map,me,home,M.pioneerI||0);
  if(q){out.push(['sendUnit',{u:p.id,tx:q.x,ty:q.y}]);M.pioneerI=(M.pioneerI||0)+1;M.pioneerSend=t+45;}
 }
 // Send a geologist to the nearest known unsearched mountain, and avoid repeatedly reordering a moving unit.
 const geos=units.filter(u=>u.role==='geologist');
 if(!geos.length&&t>20&&carriers>5&&idleC>1&&freeTool('pick')>0&&(E.land.unsearched||0)>0&&t>=(M.geoAt||0)){
  out.push(['profession',{role:'geologist',d:1}]);M.geoAt=t+75;
 }
 for(const g of geos)if(!g.busy&&!g.moving&&(E.unsearched||[]).length&&t>=(M.geoSend||0)){
  let target=E.unsearched[0];
  if(M.geoTarget&&E.unsearched.length>1){
   const old=E.unsearched.find(p=>p.x===M.geoTarget[0]&&p.y===M.geoTarget[1]);
   if(old)target=old;
  }
  if(M.geoTarget&&M.geoFailAt>t)target=E.unsearched.find(p=>p.x!==M.geoTarget[0]||p.y!==M.geoTarget[1])||target;
  out.push(['sendUnit',{u:g.id,tx:target.x,ty:target.y}]);
  M.geoTarget=[target.x,target.y];M.geoSend=t+12;
 }
 // Explorer waypoints stay on known land near a fog frontier; long blind corner paths failed too often.
 const exps=units.filter(u=>u.role==='explorer');
 if(exps.length<2&&t>150&&carriers>9&&idleC>5&&st('plank')>=5&&t>=(M.expAt||0)){
  out.push(['profession',{role:'explorer',d:1}]);M.expAt=t+120;
 }
 for(const u of exps)if(!u.busy&&!u.moving&&ok&&t>=(M.scoutSend||0)&&t>=(M.scoutFailAt||0)){
  const p=findFrontier(map,me,home,M.scoutI||0);
  if(p){
   out.push(['sendUnit',{u:u.id,tx:p.x,ty:p.y}]);
   M.scoutI=(M.scoutI||0)+1;M.scoutSend=t+30;
  }
 }

 // Housing responds to actual carrier scarcity, not just elapsed time or an unfinished house's presence.
 const houses=count('house')+count('house2')+count('house3');
 const housePending=town.some(b=>/^house/.test(b.type)&&!b.built);
 const population=E.population||0,beds=E.beds||0,homeless=E.homeless||0;
 const needHouse=houses===0||(homeless>0&&idleC<6)||(beds>0&&population>=beds-3&&idleC<6&&carriers<18)||(carriers<8&&idleC<4&&population>=beds-5);
 if(!housePending&&needHouse&&t>=(M.houseAt||0)){
  const type=t>600&&st('plank')>=10&&st('stone')>=12?'house3':
   st('plank')>=5&&st('stone')>=6?'house2':'house';
  if(place(type))M.houseAt=t+260;
 }

 // Build only what the next dependency needs. Avoid filling the map with redundant producers.
 const goals=[];
 const add=(yes,type)=>{if(yes&&!pending(type)&&!goals.includes(type))goals.push(type);};
 add(count('quarry')<1,'quarry');
 add(count('wood')<1,'wood');
 add(count('saw')<1&&built('wood')>0,'saw');
 add(count('guard')<1&&built('wood')>0,'guard');
 add(count('fisher')<1&&built('saw')>0,'fisher');
 add(count('forest')<1&&built('wood')>0,'forest');
 add(count('coalmine')<1&&oreKnown('coal'),'coalmine');
 add(count('ironmine')<1&&oreKnown('ironore'),'ironmine');
 add(count('smelter')<1&&built('coalmine')>0&&built('ironmine')>0,'smelter');
 add(count('smith')<1&&built('smelter')>0&&st('iron')>0,'smith');
 add(count('weaponsmith')<1&&built('smith')>0,'weaponsmith');
 add(count('barracks')<1&&built('weaponsmith')>0,'barracks');

 // Mines have distinct food rules: coal prefers bread, iron prefers meat, both can fall back to fish.
 const mineFoodShort=(type)=>{
  const b=town.find(q=>q.type===type&&q.built);
  if(!b)return false;
  const inp=b.inputs||{};
  if(type==='coalmine')return st('bread')<2&&st('fish')<3&&(inp.bread||0)<1&&(inp.fish||0)<1;
  if(type==='ironmine')return st('meat')<2&&st('fish')<3&&(inp.meat||0)<1&&(inp.fish||0)<1;
  return false;
 };
 const coalHungry=mineFoodShort('coalmine'),ironHungry=mineFoodShort('ironmine');
 const foodTip=/food|hungr|meal|starv/.test(allTip);
 add((coalHungry||ironHungry||foodTip)&&count('farm')<1,'farm');
 add(count('farm')>0&&count('waterhut')<1&&(coalHungry||ironHungry||timingTip),'waterhut');
 add(count('farm')>0&&count('mill')<1&&coalHungry,'mill');
 add(count('mill')>0&&count('waterhut')>0&&count('bakery')<1&&coalHungry,'bakery');
 add(ironHungry&&count('farm')>0&&count('waterhut')>0&&count('pigfarm')<1,'pigfarm');
 add(count('pigfarm')>0&&count('butcher')<1,'butcher');

 // Resource and land tips trigger exploration/expansion only when the map confirms the need.
 const noCoal=!oreKnown('coal'),noIron=!oreKnown('ironore');
 const unsearched=E.unsearched||[];
 const needsOre=(noCoal||noIron)&&(unsearched.length===0||(E.land.unsearched||0)<2||oreTip);
 const soldierN=(v.soldiers||[]).length;
 const garrisoned=(v.buildings||[]).filter(b=>b.owner===me&&MIL[b.type]).reduce((n,b)=>n+((b.troops||[]).length),0);
 const totalSoldiers=soldierN+garrisoned;
 const maxPosts=totalSoldiers>=12&&carriers>=9?4:totalSoldiers>=9&&carriers>=8?3:totalSoldiers>=7&&carriers>=7?2:1;
 const activeSites=town.some(b=>!b.built&&(MIL[b.type]||b.type==='look'));
 const shouldExpand=ownMil.length<maxPosts&&carriers>=7&&idleC>=2&&totalSoldiers>=7&&
  built('quarry')>0&&built('wood')>0&&(landTip||needsOre||t>1500+ownMil.length*500);
 if(shouldExpand&&!activeSites&&!pending('guard')&&!goals.includes('guard'))goals.unshift('guard');
 if(ownMil.length>=2&&soldierN>=25&&count('tower')<1&&carriers>=10&&t>2100&&!pending('tower')&&!activeSites)
  goals.unshift('tower');
 if(needsOre&&!shouldExpand&&count('look')<1&&carriers>10&&idleC>4&&t>900&&!pending('look'))goals.unshift('look');

 // A second mine is justified only by another distinct, known deposit; don't duplicate an exhausted site blindly.
 for(const kind of ['coal','ironore']){
  const type=kind==='coal'?'coalmine':'ironmine',points=M.ore[kind]||[];
  // A second mine is useful only after the core army chain exists and transport can absorb it.
  if(count(type)<2&&points.length>=2&&built('weaponsmith')>0&&idleC>=5&&pileWaiting<35&&
   !town.some(b=>b.type===type&&b.built&&points.some(p=>Math.abs(p[0]-(b.x+1))<7&&Math.abs(p[1]-(b.y+1))<7)))add(true,type);
 }
 // Duplicate raw producers only when stock is genuinely low and carriers are not swamped.
 const transportClear=idleC>=4&&pileWaiting<30;
 add(count('wood')<2&&t>900&&st('plank')<8&&transportClear,'wood');
 add(count('quarry')<2&&t>900&&st('stone')<8&&transportClear,'quarry');
 add(count('fisher')<2&&ironHungry&&t>900&&transportClear,'fisher');
 // Gold is optional: defer it until the iron/weapon pipeline and field army are healthy.
 const goldReady=soldierN>=20&&st('coal')>=14&&st('iron')>=8&&idleC>=7&&pileWaiting<25&&t>3000;
 add(count('goldmine')<1&&oreKnown('goldore')&&built('barracks')>0&&goldReady,'goldmine');
 add(count('goldsmelter')<1&&built('goldmine')>0&&goldReady&&st('coal')>=18,'goldsmelter');

 // The first iron/tool/weapon buildings get staffing priority; never spam unchanged settings.
 for(const type of ['quarry','smelter','smith','weaponsmith','barracks']){
  const b=town.find(q=>q.type===type&&q.built);
  if(b&&!b.prio&&!M.prio[b.id]&&idleC>0){
   out.push(['priority',{b:b.id,on:true}]);M.prio[b.id]=1;break;
  }
 }
 if(sites<(t<600?3:4)){
  let chosen=null;
  for(const type of goals){
   const tool=TOOL[type];if(tool&&freeTool(tool)<1)continue;
   if((type==='smelter'||type==='smith'||type==='weaponsmith'||type==='goldsmelter')&&freeTool('hammer')<1)continue;
   chosen=type;break;
  }
  if(chosen)place(chosen);
 }

 // No speculative builder/digger workforce: recruit them only when sites are actually waiting for labour.
 if(sites>=2&&idleC>5&&carriers>9){
  if((people.builder||0)<2&&freeTool('hammer')>0&&t>=(M.builderAt||0)){
   out.push(['profession',{role:'builder',d:1}]);M.builderAt=t+120;
  }else if((people.digger||0)<2&&freeTool('shovel')>0&&t>=(M.diggerAt||0)){
   out.push(['profession',{role:'digger',d:1}]);M.diggerAt=t+120;
  }
 }

 // If the advisor says settlers are scarce, favour housing and stop starting optional production sites.
 if(settlersTip&&idleC<4&&carriers<9&&!housePending&&houses>0&&t>=(M.houseAt||0)){
  const type=st('plank')>=5&&st('stone')>=6?'house2':'house';
  if(place(type))M.houseAt=t+260;
 }
 if((stallTip&&idleC<4)||(outputTip&&sites===0)){
  // The goods already exist; pause expansion rather than adding another producer into a transport backlog.
  M.transportHoldUntil=t+180;
 }
 if((M.transportHoldUntil||0)>t&&goals.length&&goals[0]!=='guard'){
  // Retain only critical chain steps while carriers clear the existing output piles.
  const critical=new Set(['coalmine','ironmine','smelter','smith','weaponsmith','barracks']);
  for(let i=goals.length-1;i>=0;i--)if(!critical.has(goals[i]))goals.splice(i,1);
 }

 if(t>0&&t%600<2&&t!==(M.noteAt||-1)){
  const kinds=Object.keys(tipKinds).join('/')||'none';
  out.push(['note',{text:'Adaptive plan: '+soldierN+' field soldiers, '+ownMil.length+' posts, carriers '+carriers+' ('+idleC+' idle), coal/iron '+(oreKnown('coal')?1:0)+'/'+(oreKnown('ironore')?1:0)+', sites '+sites+', tips '+kinds+'.'}]);
  M.noteAt=t;
 }
}

function makeGrid(map,w,h,me,t){
 const W=w+1,size=W*(h+1),layers=9,pre=[];
 for(let k=0;k<layers;k++)pre.push(new Int32Array(size));
 let x0=w,y0=h,x1=0,y1=0;
 for(let y=0;y<h;y++){
  const run=new Int32Array(layers);
  for(let x=0;x<w;x++){
   const i=y*w+x,o=map.owner[i],ter=map.ter[i],tr=map.tree[i],stone=map.stone[i];
   if(o===me){
    if(x<x0)x0=x;if(x>x1)x1=x;if(y<y0)y0=y;if(y>y1)y1=y;
    if(stone)run[0]+=stone>4?4:stone;
    if(tr)run[1]+=tr===2?2:1;
    if(ter===1){run[3]++;if(map.fish)run[2]+=map.fish[i]>4?4:map.fish[i];}
    else if(ter===0&&!tr&&!stone&&!(map.occupied&&map.occupied[i]))run[4]++;
   }else if(o===0){
    run[5]++;if(stone)run[6]+=stone>4?4:stone;if(ter===2)run[7]++;
   }else run[8]++;
   const a=(y+1)*W+x+1,b=y*W+x+1;
   for(let k=0;k<layers;k++)pre[k][a]=pre[k][b]+run[k];
  }
 }
 if(x1<x0){x0=0;y0=0;x1=w-1;y1=h-1;}
 return {w,h,W,t,sum:pre,x0,y0,x1,y1};
}
function gridArea(G,k,cx,cy,r){
 if(!G||!G.sum[k])return 0;
 const x0=Math.max(0,Math.floor(cx-r)),x1=Math.min(G.w,Math.ceil(cx+r)+1);
 const y0=Math.max(0,Math.floor(cy-r)),y1=Math.min(G.h,Math.ceil(cy+r)+1),W=G.W,L=G.sum[k];
 if(x1<=x0||y1<=y0)return 0;
 return L[y1*W+x1]-L[y0*W+x1]-L[y1*W+x0]+L[y0*W+x0];
}
function findPioneerTarget(map,me,home,sequence){
 const w=map.w,h=map.h,known=map.known,owner=map.owner,ter=map.ter;
 if(!known||!owner||!ter)return null;
 let best=null,bestScore=-1e9;
 const dirs=[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]];
 const pref=[{x:w-8,y:home.y},{x:home.x,y:h-8},{x:8,y:home.y},{x:home.x,y:8}][sequence%4];
 for(let y=2;y<h-2;y++)for(let x=2;x<w-2;x++){
  const i=y*w+x;
  if(known[i]===0||owner[i]!==0||ter[i]===1||(map.occupied&&map.occupied[i]))continue;
  let ownNear=0,mountainNear=0;
  for(const d of dirs){
   const j=(y+d[1])*w+x+d[0];
   if(owner[j]===me)ownNear++;
   if(ter[j]===2&&known[j]>0)mountainNear++;
  }
  if(!ownNear)continue;
  const dist=Math.abs(x-home.x)+Math.abs(y-home.y);
  const score=ownNear*5+mountainNear*24+(ter[i]===2?35:0)-dist*0.06-
   (Math.abs(x-pref.x)+Math.abs(y-pref.y))*0.012;
  if(score>bestScore){bestScore=score;best={x,y};}
 }
 return best;
}
function findFrontier(map,me,home,sequence){
 const w=map.w,h=map.h,known=map.known,owner=map.owner;
 if(!known||!owner)return null;
 let best=null,scoreBest=-1e9,seen=0;
 const dirs=[[1,0],[-1,0],[0,1],[0,-1]];
 const pref=[{x:w-8,y:home.y},{x:home.x,y:h-8},{x:8,y:home.y},{x:home.x,y:8}][sequence%4];
 scan: for(let y=2;y<h-2;y+=2)for(let x=2;x<w-2;x+=2){
  const i=y*w+x;
  if(owner[i]!==me||known[i]!==2)continue;
  // A frontier waypoint must be a currently visible, open grass tile, not a building,
  // tree, rock or mountain/water tile that can strand the explorer or marching group.
  if(map.ter&&map.ter[i]!==0)continue;
  if(map.occupied&&map.occupied[i])continue;
  if(map.tree&&map.tree[i])continue;
  if(map.stone&&map.stone[i])continue;
  let fog=0,neutral=0;
  for(const d of dirs){
   const j=(y+d[1])*w+x+d[0];
   if(known[j]===0)fog++;
   else if(owner[j]===0)neutral++;
  }
  if(!fog&&!neutral)continue;
  const dist=Math.abs(x-home.x)+Math.abs(y-home.y);
  if(dist<12)continue;
  const toPref=Math.abs(x-pref.x)+Math.abs(y-pref.y);
  const score=fog*8+neutral*2-Math.abs(dist-38)*0.12-toPref*0.025;
  if(score>scoreBest){scoreBest=score;best={x,y};}
  if(++seen>50000)break scan;
 }
 return best;
}

function runArmy(v,M,out){
 const t=v.t||0,mine=v.soldiers||[],bld=v.buildings||[],enemy=v.enemy||{},foes=enemy.soldiers||[],eb=enemy.buildings||[];
 const E=v.economy,cmd=c=>out.push(c),dist=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y),door=b=>b.door||{x:b.x+b.w/2,y:b.y+b.h/2};
 M.sent=M.sent||{};M.badTarget=M.badTarget||{};
 const free=mine.filter(s=>!s.order&&!s.defends&&!s.fighting&&!s.held);
 const moving=mine.filter(s=>s.order&&(s.order.k==='move'||s.order.k==='attack-move'));
 const active=mine.filter(s=>s.order&&s.order.k==='attack');
 const used={};
 const available=()=>free.filter(s=>!used[s.id]);
 const ownMil=bld.filter(b=>b.owner===v.me&&MIL[b.type]&&b.built!==false);
 const targets=eb.filter(b=>(b.military||MIL[b.type]||b.type==='hq')&&
  !(M.badTarget[b.id]>t)&&!(b.remembered&&Number.isFinite(b.seenAt)&&t-b.seenAt>900));
 const targetById=id=>targets.find(b=>b.id===id);
 // Release completed scout/defence moves; otherwise a held march permanently consumes the field force.
 const arrived=moving.filter(s=>{
  const o=s.order||{};
  return Number.isFinite(o.x)&&Number.isFinite(o.y)&&dist(s,{x:o.x,y:o.y})<5;
 });
 if(arrived.length)cmd(['release',{ids:arrived.map(s=>s.id),stop:true}]);
 if(moving.length&&t>=(M.moveDeadline||1e9))cmd(['release',{ids:moving.map(s=>s.id),stop:true}]);
 if(targets.length&&moving.length&&M.movePurpose==='scout'){
  cmd(['release',{ids:moving.map(s=>s.id),stop:true}]);M.moveDeadline=t+999999;
 }

 // Keep one low-cost garrison per guard. Do not take the last mobile soldiers to fill a post.
 for(const b of ownMil){
  if((b.troops||[]).length||(M.sent[b.id]||0)>t)continue;
  const candidates=available().slice().sort((a,b)=>
   (a.kind==='sword'?0:a.kind==='spear'?1:2)-(b.kind==='sword'?0:b.kind==='spear'?1:2)||a.id-b.id);
  if(candidates.length>6){
   const s=candidates[0];cmd(['sendIn',{ids:[s.id],b:b.id}]);
   used[s.id]=1;M.sent[b.id]=t+45;break;
  }
 }

 // Defend only when an enemy is close to an owned building; don't chase a distant scout.
 let threat=null,threatDist=1e9;
 for(const f of foes)for(const b of bld)if(b.owner===v.me){
  const q=Math.hypot(f.x-(b.x+b.w/2),f.y-(b.y+b.h/2));
  if(q<threatDist){threatDist=q;threat=f;}
 }
 if(threat&&threatDist<18&&available().length&&t>=(M.defendAt||0)){
  const ids=available().filter(s=>dist(s,threat)<48).map(s=>s.id);
  if(ids.length>=2){
   cmd(['march',{ids,tx:Math.round(threat.x),ty:Math.round(threat.y),form:'line',am:true}]);
   M.moveDeadline=t+90;M.movePurpose='defend';M.defendAt=t+20;
   for(const id of ids)used[id]=1;
  }
 }

 // Continue a valid attack and reinforce it only in measured increments.
 if(active.length){
  const targetId=active[0].order.b,target=targetById(targetId);
  if(!target){
   cmd(['release',{ids:active.map(s=>s.id),stop:true}]);
  }else if(t>=(M.reinforceAt||0)){
   const needed=target.manned===false?3:({guard:8,tower:13,castle:18,hq:15}[target.type]||10);
   const add=available().slice(0,Math.max(0,needed-active.length));
   if(add.length){cmd(['attack',{ids:add.map(s=>s.id),b:target.id}]);M.reinforceAt=t+12;}
  }
 }else if(targets.length){
  const ready=available();
  const cx=ready.length?ready.reduce((a,s)=>a+s.x,0)/ready.length:0;
  const cy=ready.length?ready.reduce((a,s)=>a+s.y,0)/ready.length:0;
  const rank={guard:0,tower:7,castle:16,hq:11};
  let target=null,best=1e9;
  for(const b of targets){
   const p=door(b);
   let q=(ready.length?Math.hypot(p.x-cx,p.y-cy):1e6)+(rank[b.type]||0)-(b.manned===false?9:0);
   for(const f of foes)if(dist(f,p)<16)q+=1.5;
   if(q<best){best=q;target=b;}
  }
  if(target&&ready.length){
   let need=target.manned===false?3:({guard:8,tower:13,castle:18,hq:15}[target.type]||10);
   for(const f of foes)if(dist(f,door(target))<16)need++;
   const gold=typeof v.gold==='number'?v.gold:0.6;
   // Avoid tiny 2–3 soldier raids: reports showed repeated low-threshold
   // attacks followed by losses and a depleted field army. Commit a real force.
   need=Math.max(8,Math.ceil(need*(1.28-0.42*gold)));
   if(t>3000)need=Math.max(8,Math.ceil(need*0.92));
   if(ready.length>=need){
    cmd(['attack',{ids:ready.map(s=>s.id),b:target.id}]);
    M.attackAt=t;M.attackId=target.id;M.reinforceAt=t+15;
    if(t>=(M.attackNote||0)){
     out.push(['note',{text:'Attack: '+ready.length+' field troops against '+target.type+' '+target.id+'; threshold '+need+'.'}]);
     M.attackNote=t+90;
    }
   }
  }
 }else if(!active.length&&available().length>=5&&t>900&&t>=(M.searchAt||0)&&t>=(M.scoutFailAt||0)){
  const map=v.map,w=map&&map.w||240,h=map&&map.h||240;
  const hq=E&&E.town&&E.town.find(b=>b.type==='hq');
  const home=hq?{x:hq.x+2,y:hq.y+2}:{x:w/2,y:h/2};
  // Scout toward the likely opposing start, not another waypoint on our own frontier.
  // On these maps the starts are diagonally opposed; alternating small offsets avoids
  // repeatedly marching into the same blocked corner while revealing the approach.
  const seq=M.searchI||0,offset=[0,18,-18,36,-36][seq%5];
  const tx=Math.max(8,Math.min(w-8,w-home.x+offset));
  const ty=Math.max(8,Math.min(h-8,h-home.y-offset));
  const ready=available(),scouts=ready.slice(0,Math.min(5,ready.length));
  if(scouts.length>=5){
   cmd(['march',{ids:scouts.map(s=>s.id),tx:Math.round(tx),ty:Math.round(ty),form:'block',am:false}]);
   M.searchI=seq+1;M.searchAt=t+180;M.moveDeadline=t+120;M.movePurpose='scout';
  }
 }

 // Army target means soldiers outside buildings. A small reserve is enough; the old eight-man reserve starved garrisons.
 if(E&&!v.armyOnly&&E.town&&E.town.some(b=>b.type==='barracks')&&t>=(M.targetAt||0)){
  M.targetAt=t+20;
  const A=E.army||{},idleC=(E.idle&&E.idle.carrier)||0,carriers=(E.people&&E.people.carrier)||0;
  const current=mine.length;
  let desired=t<900?8:t<1500?12:t<2400?16:t<3300?19:t<4200?22:24;
  if(idleC<2||carriers<6)desired=Math.min(desired,Math.max(8,current));
  else if(idleC>=7&&carriers>=12)desired=Math.min(26,desired+2);
  desired=Math.max(current,desired);
  const want={sword:Math.ceil(desired*0.45),spear:Math.ceil(desired*0.25)};
  want.bow=Math.max(0,desired-want.sword-want.spear);
  for(const k of ['sword','spear','bow'])if((A.target||{})[k]!==want[k])cmd(['armyTarget',{kind:k,set:want[k]}]);
  if(Array.isArray(A.keep))for(let i=0;i<3;i++)if(A.keep[i]&&A.keep[i].keep!==0)cmd(['weaponKeep',{k:i,set:0}]);
  if(A.reserve!==3)cmd(['armyReserve',{set:3}]);
 }
}
