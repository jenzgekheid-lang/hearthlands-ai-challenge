// ChatGPT scheduled — expeditionary frontier strategy: scouts reveal the map, pioneers claim corridors, and staffed posts follow.
// Replace the capped home ring with forward land claims, lookout vision, and a compact economy that can sustain an attack.
// Game version: 224
function think(view){
 if(!view||view.over)return [];
 var M=memory.plan||(memory.plan={}),out=[];
 if(view.economy&&!view.armyOnly)economy(view,M,out);
 army(view,M,out);
 return out.slice(0,50);
}

function economy(view,M,out){
 var E=view.economy||{},t=view.t||0,me=view.me,map=view.map||{};
 var town=E.town||[],stock=E.stock||{},people=E.people||{},idle=E.idle||{},units=E.units||[];
 var carriers=people.carrier||0,idleC=idle.carrier||0,sites=town.filter(function(b){return !b.built;}),siteN=sites.length;
 var COST={guard:[2,3],wood:[2,2],quarry:[2,3],saw:[3,4],forest:[3,1],house:[3,3],fisher:[3,2],look:[2,4],coalmine:[4,1],ironmine:[4,1],smelter:[4,6],smith:[3,5],weaponsmith:[5,7],barracks:[4,5],farm:[6,6],waterhut:[3,4],mill:[3,3],bakery:[4,5],pigfarm:[6,6],butcher:[4,4]};
 var TOOL={wood:'axe',quarry:'pick',saw:'saw',forest:'shovel',fisher:'rod',coalmine:'pick',ironmine:'pick',smelter:'hammer',smith:'hammer',weaponsmith:'hammer',farm:'scythe',butcher:'axe'};
 var mapOK=!!(map.w&&map.h&&map.owner&&map.ter&&map.tree&&map.stone&&map.known&&typeof canPlace==='function');
 function st(k){return stock[k]||0;}
 function cnt(k){var n=0;for(var b of town)if(b.type===k)n++;return n;}
 function built(k){var n=0;for(var b of town)if(b.type===k&&b.built)n++;return n;}
 function pending(k){for(var b of town)if(b.type===k&&!b.built)return true;return false;}
 function hasTip(q){for(var z of (E.tips||[]))if((z.text||'').toLowerCase().indexOf(q.toLowerCase())>=0)return true;return false;}
 function freeGoods(k){var n=st(k);for(var b of sites)n-=Math.max(0,(b.cost&&b.cost[k]||0)-(b.delivered&&b.delivered[k]||0));return n;}
 function freeTool(k){var n=st(k);for(var b of town)if(b.built&&TOOL[b.type]===k&&!b.worker)n--;return Math.max(0,n);}
 function oreKnown(k){for(var o of (E.ore||[]))if(o.ore===k)return true;return false;}
 function home(){for(var b of town)if(b.type==='hq')return {x:b.x+2,y:b.y+2};return {x:(map.w||240)/2,y:(map.h||240)/2};}
 var H=home(),oreList=E.ore||[],bad=M.badSites||(M.badSites={}),cache=M.siteCache||(M.siteCache={});
 for(var r of (view.refused||[]))if(r.order==='place'&&r.args)bad[r.args.x+','+r.args.y]=t+300;
 if(!mapOK)out.push(['ask',{spots:['guard','wood','quarry','saw','forest','look']}]);
 function countArea(cx,cy,r,fn,step){
  var n=0,stp=step||2,x0=Math.max(0,Math.floor(cx-r)),x1=Math.min((map.w||240)-1,Math.ceil(cx+r)),y0=Math.max(0,Math.floor(cy-r)),y1=Math.min((map.h||240)-1,Math.ceil(cy+r));
  for(var yy=y0;yy<=y1;yy+=stp)for(var xx=x0;xx<=x1;xx+=stp)if(fn(yy*map.w+xx,xx,yy))n++;
  return n;
 }
 function edgeCount(x,y){
  var i=y*map.w+x,n=0;
  if(map.known[i-1]===0)n++;if(map.known[i+1]===0)n++;
  if(map.known[i-map.w]===0)n++;if(map.known[i+map.w]===0)n++;
  return n;
 }
 function mineHits(kind,cx,cy){
  var hits=0,val=map.oreNames&&map.oreNames.indexOf(kind)>=0?map.oreNames.indexOf(kind)+1:0;
  if(map.ore&&val>1)hits+=countArea(cx,cy,5,function(i){return map.ore[i]===val;},1);
  for(var o of oreList)if(o.ore===kind&&Math.abs(o.x-cx)<=5&&Math.abs(o.y-cy)<=5)hits+=2;
  return hits;
 }
 function findSite(type){
  if(!mapOK){var spots=(E.spots||{})[type]||[];return spots.length?spots[0]:null;}
  var old=cache[type];if(old&&old.until>t&&canPlace(type,old.x,old.y))return old;if(old)delete cache[type];
  if((M.noSpot||{})[type]>t)return null;
  var mine=type==='coalmine'||type==='ironmine',kind=type==='coalmine'?'coal':'ironore';
  var size=type==='look'?[2,2]:[3,3],terrain=mine?2:0,best=null,bestScore=-1e9;
  var ownMil=town.filter(function(b){return b.built&&['guard','tower','castle'].indexOf(b.type)>=0;});
  for(var y=1;y<map.h-size[1];y++)for(var x=1;x<map.w-size[0];x++){
   var i=y*map.w+x;
   if(map.owner[i]!==me||map.ter[i]!==terrain||map.known[i]===0||(map.occupied&&map.occupied[i]))continue;
   if((bad[x+','+y]||0)>t)continue;
   var cx=x+size[0]/2,cy=y+size[1]/2,dx=cx-H.x,dy=cy-H.y,dist=Math.sqrt(dx*dx+dy*dy),score=-dist*.1;
   if(mine){var hits=mineHits(kind,cx,cy);if(!hits)continue;score=hits*14-dist*.08;}
   else if(type==='guard'){
    var neutral=countArea(cx,cy,14,function(j){return map.owner[j]===0;},3);if(neutral<3)continue;
    var near=99;for(var mb of ownMil){var mw=mb.w||(mb.type==='tower'?5:mb.type==='castle'?8:3),mh=mb.h||(mb.type==='tower'?4:mb.type==='castle'?7:3),mdx=cx-(mb.x+mw/2),mdy=cy-(mb.y+mh/2),md=Math.sqrt(mdx*mdx+mdy*mdy);if(md<near)near=md;}
    score=neutral*3+Math.min(28,near)*.9-dist*.04;if(near<9)score-=18;
   }else if(type==='look'){
    var edge=countArea(cx,cy,7,function(j){return map.known[j]===0;},2);if(edge<3)continue;score=edge*18+dist*.18;
   }else if(type==='wood'){
    var trees=countArea(cx,cy,11,function(j){return map.tree&&map.tree[j]===2;},2);if(trees<2)continue;score=trees*4-dist*.1;
   }else if(type==='quarry'){
    var rocks=countArea(cx,cy,13,function(j){return map.stone&&map.stone[j]>0;},2);if(rocks<2)continue;score=rocks*3-dist*.1;
   }else if(type==='fisher'){
    var fish=countArea(cx,cy,12,function(j){return map.ter[j]===1&&(!map.fish||map.fish[j]>0);},2);if(fish<2)continue;score=fish*4-dist*.08;
   }else if(type==='forest'){
    var green=countArea(cx,cy,10,function(j){return map.ter[j]===0&&!map.tree[j]&&!map.stone[j];},2);if(green<10)continue;score=green-dist*.12;
   }else score=-dist;
   if(score<=bestScore||!canPlace(type,x,y))continue;
   bestScore=score;best={x:x,y:y,until:t+30};
  }
  if(!best){M.noSpot=M.noSpot||{};M.noSpot[type]=t+30;return null;}
  cache[type]=best;return best;
 }
 function canPay(type){var c=COST[type]||[0,0];return freeGoods('plank')>=c[0]&&freeGoods('stone')>=c[1];}
 function place(type){
  if(siteN>=2||pending(type)||!canPay(type))return false;
  var tool=TOOL[type];if(tool&&st(tool)<=0&&built('smith')===0)return false;
  var p=findSite(type);if(!p)return false;
  out.push(['place',{type:type,x:p.x,y:p.y}]);siteN++;delete cache[type];
  if(type==='guard')M.lastPostAt=t;if(type==='look')M.lastLookAt=t;
  return true;
 }
 function want(list,type,yes){if(yes&&!pending(type)&&list.indexOf(type)<0)list.push(type);}

 // Keep one extra pick and shovel available for exploration/claiming, not just building workers.
 M.toolKeepAt=M.toolKeepAt||{};
 for(var ti=0;ti<(E.toolPlan||[]).length;ti++){
  var tp=E.toolPlan[ti];if((tp.tool==='pick'||tp.tool==='shovel')&&(tp.keep||0)<2&&(M.toolKeepAt[tp.tool]||0)<=t){
   out.push(['toolKeep',{k:ti,set:2}]);M.toolKeepAt[tp.tool]=t+90;
  }
 }

 var unsearched=E.unsearched||[],geos=units.filter(function(u){return u.role==='geologist';});
 if(!geos.length&&freeTool('pick')>0&&carriers>5&&idleC>2&&t>60&&(M.geoAt||0)<=t){out.push(['profession',{role:'geologist',d:1}]);M.geoAt=t+90;}
 for(var g of geos)if(!g.busy&&!g.moving&&unsearched.length&&(M.geoSend||0)<=t){
  var q=unsearched[0],bestD=(q.x-g.x)*(q.x-g.x)+(q.y-g.y)*(q.y-g.y);
  for(var uq of unsearched){var dd=(uq.x-g.x)*(uq.x-g.x)+(uq.y-g.y)*(uq.y-g.y);if(dd<bestD){q=uq;bestD=dd;}}
  out.push(['sendUnit',{u:g.id,tx:q.x,ty:q.y}]);M.geoSend=t+30;M.geoWorked=1;break;
 }
 if(geos.length&&!unsearched.length&&!geos.some(function(u){return u.busy||u.moving;})&&M.geoWorked&&(M.geoRetire||0)<=t){out.push(['profession',{role:'geologist',d:-1}]);M.geoRetire=t+300;M.geoWorked=0;}

 function direction(sector){
  var dx=(map.w||240)/2-H.x,dy=(map.h||240)/2-H.y,len=Math.sqrt(dx*dx+dy*dy);if(len<1){dx=1;dy=0;len=1;}dx/=len;dy/=len;
  if(sector===1){var a=dx;dx=-dy;dy=a;}else if(sector===2){var b=dx;dx=dy;dy=-b;}
  return {x:dx,y:dy};
 }
 function frontier(unit,role,sector,avoid){
  if(!mapOK)return null;
  var dir=direction(sector),best=null,bs=-1e9;
  for(var yy=2;yy<map.h-2;yy+=2)for(var xx=2;xx<map.w-2;xx+=2){
   var ii=yy*map.w+xx,owner=map.owner[ii];
   if(map.known[ii]!==2||map.ter[ii]!==0||(map.occupied&&map.occupied[ii])||map.tree[ii]||map.stone[ii])continue;
   if(role==='pioneer'&&owner!==0)continue;
   if(role==='explorer'&&owner!==0&&owner!==me)continue;
   var edge=edgeCount(xx,yy);if(!edge)continue;
   var enemyNear=0;if(map.owner[ii-1]!==0&&map.owner[ii-1]!==me)enemyNear++;if(map.owner[ii+1]!==0&&map.owner[ii+1]!==me)enemyNear++;if(map.owner[ii-map.w]!==0&&map.owner[ii-map.w]!==me)enemyNear++;if(map.owner[ii+map.w]!==0&&map.owner[ii+map.w]!==me)enemyNear++;
   var vx=xx-H.x,vy=yy-H.y,align=vx*dir.x+vy*dir.y,dh=Math.sqrt(vx*vx+vy*vy),ux=xx-unit.x,uy=yy-unit.y,du=Math.sqrt(ux*ux+uy*uy);
   if(du<4)continue;
   var score=edge*70+enemyNear*85+align*.42+dh*.08-du*.58+(owner===0?18:0);
   for(var av of avoid||[]){var ax=xx-av.x,ay=yy-av.y;if(ax*ax+ay*ay<14*14)score-=100;}
   if(score>bs){bs=score;best={x:xx,y:yy};}
  }
  return best;
 }
 var explorers=units.filter(function(u){return u.role==='explorer';}).sort(function(a,b){return a.id-b.id;});
 var pioneers=units.filter(function(u){return u.role==='pioneer';});
 if(explorers.length<3&&t>120+explorers.length*180&&carriers>8&&idleC>3&&st('plank')>1&&(M.expAt||0)<=t){out.push(['profession',{role:'explorer',d:1}]);M.expAt=t+120;}
 if(!pioneers.length&&t>360&&carriers>8&&idleC>3&&freeTool('shovel')>0&&(M.pioneerAt||0)<=t){out.push(['profession',{role:'pioneer',d:1}]);M.pioneerAt=t+120;}
 M.unitAt=M.unitAt||{};
 var reserved=[];
 for(var ei=0;ei<explorers.length;ei++){
  var ex=explorers[ei];if(ex.busy||ex.moving||(M.unitAt[ex.id]||0)>t)continue;
  var avoid=reserved.slice();for(var other of explorers)if(other.id!==ex.id&&other.to)avoid.push(other.to);
  var target=frontier(ex,'explorer',ei%3,avoid)||frontier(ex,'explorer',0,avoid);
  if(target){out.push(['sendUnit',{u:ex.id,tx:target.x,ty:target.y}]);reserved.push(target);M.unitAt[ex.id]=t+45;}
 }
 for(var pio of pioneers)if(!pio.busy&&!pio.moving&&(M.unitAt[pio.id]||0)<=t){
  var ptarget=frontier(pio,'pioneer',0,reserved)||frontier(pio,'pioneer',1,reserved)||frontier(pio,'pioneer',2,reserved);if(ptarget){out.push(['sendUnit',{u:pio.id,tx:ptarget.x,ty:ptarget.y}]);M.unitAt[pio.id]=t+45;}
 }

 var tips=(E.tips||[]).map(function(z){return (z.k||'')+' '+(z.text||'');}).join(' ').toLowerCase();
 var coalHungry=tips.indexOf('needs bread or fish')>=0,ironHungry=tips.indexOf('needs meat or fish')>=0;
 var noTrees=tips.indexOf('no grown trees')>=0||tips.indexOf('no free ground to plant')>=0;
 var landTip=tips.indexOf('land has not grown')>=0||tips.indexOf('build a small tower')>=0;
 var coal=oreKnown('coal'),ironOre=oreKnown('ironore');
 var milN=cnt('guard')+cnt('tower')+cnt('castle'),soldierN=(view.soldiers||[]).length;
 var totalSoldiers=soldierN;for(var vb of (view.buildings||[]))if(vb.owner===me&&['guard','tower','castle'].indexOf(vb.type)>=0)totalSoldiers+=(vb.troops||[]).length;
 var houseCount=cnt('house')+cnt('house2')+cnt('house3'),housePending=town.some(function(b){return /^house/.test(b.type)&&(!b.built||(b.coming||0)>0);});
 var needHouse=!housePending&&houseCount<5&&((carriers<8&&idleC<4)||((E.homeless||0)>0&&carriers<13));
 var goals=[];
 want(goals,'guard',milN<1);
 want(goals,'wood',cnt('wood')<1);
 want(goals,'quarry',cnt('quarry')<1);
 want(goals,'saw',built('wood')>0&&cnt('saw')<1);
 want(goals,'forest',built('wood')>0&&t>240&&cnt('forest')<1&&(pioneers.length>0||built('smith')>0));
 want(goals,'fisher',built('saw')>0&&cnt('fisher')<1);
 want(goals,'house',needHouse);
 want(goals,'coalmine',coal&&cnt('coalmine')<1);
 want(goals,'ironmine',ironOre&&cnt('ironmine')<1);
 want(goals,'smelter',built('coalmine')>0&&built('ironmine')>0&&cnt('smelter')<1);
 want(goals,'smith',built('smelter')>0&&cnt('smith')<1);
 want(goals,'weaponsmith',built('smith')>0&&cnt('weaponsmith')<1);
 want(goals,'barracks',built('weaponsmith')>0&&cnt('barracks')<1);
 if((coalHungry||ironHungry)&&st('fish')<3){
  want(goals,'farm',cnt('farm')<1);
  if(built('farm'))want(goals,'waterhut',cnt('waterhut')<1);
  if(built('farm')&&built('waterhut'))want(goals,'mill',cnt('mill')<1);
  if(built('mill'))want(goals,'bakery',coalHungry&&cnt('bakery')<1);
  if(built('farm')&&built('waterhut'))want(goals,'pigfarm',ironHungry&&cnt('pigfarm')<1);
  if(built('pigfarm'))want(goals,'butcher',ironHungry&&cnt('butcher')<1);
 }
 if(noTrees&&t>900){want(goals,'forest',cnt('forest')<2&&(pioneers.length>0||built('smith')>0));want(goals,'wood',cnt('wood')<2);}
 if(cnt('look')<2&&milN>=2&&t>600&&carriers>8&&(M.lastLookAt===undefined?-900:M.lastLookAt)<=t-900)want(goals,'look',true);
 var desiredPosts=Math.min(6,1+Math.floor(t/540));
 if(milN<desiredPosts&&t-(M.lastPostAt||0)>=420&&carriers>6&&idleC>1&&totalSoldiers>=milN+7)want(goals,'guard',true);
 if(st('stone')<6&&t>1800&&cnt('quarry')<2)want(goals,'quarry',true);

 // Keep the production spine and every new outpost ahead of optional work.
 var prioTypes=['guard','wood','quarry','saw','forest','fisher','coalmine','ironmine','smelter','smith','weaponsmith','barracks'];
 M.prio=M.prio||{};
 for(var b of town)if(prioTypes.indexOf(b.type)>=0&&!b.prio&&!M.prio[b.id]){out.push(['priority',{b:b.id,on:true}]);M.prio[b.id]=1;}
 M.gcfg=M.gcfg||{};
 for(var b2 of town)if(b2.built&&['guard','tower','castle'].indexOf(b2.type)>=0&&!M.gcfg[b2.id]){
  if(b2.fighters!==1)out.push(['fighters',{b:b2.id,set:1}]);
  if(b2.archers!==0)out.push(['archers',{b:b2.id,set:0}]);
  M.gcfg[b2.id]=1;
 }
 if(siteN<2)for(var ty of goals)if(place(ty))break;

 var A=E.army||{};if(A.reserve!==5)out.push(['armyReserve',{set:5}]);
 if(built('barracks')){
  var desired=t<600?8:t<1200?12:t<1800?16:t<2700?22:28;
  if(carriers<7||idleC<2)desired=Math.min(desired,Math.max(8,soldierN));
  else if(carriers>=15&&idleC>=7)desired=Math.min(30,desired+2);
  var targets={sword:Math.ceil(desired*.4),spear:Math.ceil(desired*.3)};targets.bow=desired-targets.sword-targets.spear;
  for(var kind of ['sword','spear','bow'])if((A.target||{})[kind]!==targets[kind])out.push(['armyTarget',{kind:kind,set:targets[kind]}]);
  if(Array.isArray(A.keep))for(var ki=0;ki<A.keep.length&&ki<3;ki++)if(A.keep[ki]&&A.keep[ki].keep!==0)out.push(['weaponKeep',{k:ki,set:0}]);
 }
 if(t>0&&t%600<2&&(M.noteAt||-1)!==t){
  var ownMil=(view.buildings||[]).filter(function(b){return b.owner===me&&['guard','tower','castle'].indexOf(b.type)>=0;}),garrison=ownMil.reduce(function(n,b){return n+((b.troops||[]).length);},0);
  out.push(['note',{text:'Expedition: scouts '+explorers.length+', pioneers '+pioneers.length+', posts '+ownMil.length+' garrison '+garrison+', mines '+cnt('coalmine')+'/'+cnt('ironmine')+', carriers '+carriers+' idle '+idleC+', field '+soldierN+', seen '+(E.land&&E.land.tiles||0)+'.'}]);M.noteAt=t;
 }
}

function army(view,M,out){
 var t=view.t||0,me=view.me,mine=view.soldiers||[],bld=view.buildings||[],enemy=view.enemy||{};
 var foes=enemy.soldiers||[],eb=enemy.buildings||[];
 function d2(a,b){var x=a.x-b.x,y=a.y-b.y;return x*x+y*y;}
 function door(b){return b.door||{x:b.x+b.w/2,y:b.y+b.h/2};}
 var free=mine.filter(function(s){return !s.order&&!s.defends&&!s.fighting;}),used={};
 function available(){return free.filter(function(s){return !used[s.id];});}
 var ownMil=bld.filter(function(b){return b.owner===me&&['guard','tower','castle'].indexOf(b.type)>=0&&b.built!==false;});
 M.sent=M.sent||{};
 for(var b of ownMil){
  if((b.troops||[]).length||(M.sent[b.id]||0)>t)continue;
  var candidates=available().slice().sort(function(a,b){var aa=a.kind==='sword'?0:a.kind==='spear'?1:2,bb=b.kind==='sword'?0:b.kind==='spear'?1:2;return aa-bb||a.id-b.id;});
  if(candidates.length>4){var s=candidates[0];out.push(['sendIn',{ids:[s.id],b:b.id}]);used[s.id]=1;M.sent[b.id]=t+30;}
 }
 var threat=null,threatD=18*18;
 for(var f of foes)for(var own of bld)if(own.owner===me){var dd=d2(f,{x:own.x+own.w/2,y:own.y+own.h/2});if(dd<threatD){threatD=dd;threat=f;}}
 if(threat&&(M.defendAt||0)<=t){var defenders=available().slice(0,Math.min(4,available().length));if(defenders.length>=2){out.push(['march',{ids:defenders.map(function(s){return s.id;}),tx:Math.round(threat.x),ty:Math.round(threat.y),form:'block',am:true}]);M.defendAt=t+20;for(var ds of defenders)used[ds.id]=1;}}
 var targets=eb.filter(function(b){return b.built!==false&&(b.type==='hq'||b.military||['guard','tower','castle'].indexOf(b.type)>=0);}).filter(function(b){return !(b.remembered&&t-(b.seenAt||0)>600);});
 function byId(id){for(var b of targets)if(b.id===id)return b;return null;}
 var attackers=mine.filter(function(s){return s.order&&s.order.k==='attack';}),active=attackers.length?byId(attackers[0].order.b):null;
 function need(b){
  var n=b.type==='guard'?(b.manned===false?6:10):b.type==='tower'?(b.manned===false?8:14):b.type==='castle'?(b.manned===false?10:18):(b.type==='hq'?14:12);
  var p=door(b),near=0;for(var f of foes)if(d2(f,p)<18*18)near++;
  n+=Math.min(5,near);if((view.gold===undefined?0.6:view.gold)<0.8)n=Math.ceil(n*1.15);return Math.max(8,n);
 }
 if(attackers.length){
  if(!active)out.push(['release',{ids:attackers.map(function(s){return s.id;}),stop:true}]);
  else if((M.reinforceAt||0)<=t){var req=need(active),add=available().slice(0,Math.max(0,req+2-attackers.length));if(add.length){out.push(['attack',{ids:add.map(function(s){return s.id;}),b:active.id}]);M.reinforceAt=t+15;}}
 }else{
  var milTargets=targets.filter(function(b){return b.type!=='hq';}),manned=milTargets.filter(function(b){return b.manned!==false;}),hqTargets=targets.filter(function(b){return b.type==='hq';});
  var pool=manned.length?manned:(milTargets.length?milTargets:hqTargets),ready=available(),cx=ready.length?ready.reduce(function(a,s){return a+s.x;},0)/ready.length:(view.map&&view.map.w||240)/2,cy=ready.length?ready.reduce(function(a,s){return a+s.y;},0)/ready.length:(view.map&&view.map.h||240)/2;
  var best=null,bestScore=1e18;
  for(var eb2 of pool){var p=door(eb2),score=d2({x:cx,y:cy},p)+(eb2.remembered?Math.min(500,(t-(eb2.seenAt||0))*.2):0);if(score<bestScore){bestScore=score;best=eb2;}}
  if(best){var req2=need(best),send=Math.min(ready.length-4,req2+2);if(ready.length>=req2+4&&send>=req2){var squad=ready.slice(0,send);out.push(['attack',{ids:squad.map(function(s){return s.id;}),b:best.id}]);M.reinforceAt=t+15;M.attackNoteAt=M.attackNoteAt||0;if(t>=M.attackNoteAt){out.push(['note',{text:'Expedition siege: '+squad.length+' field soldiers against '+best.type+' '+best.id+'; threshold '+req2+'.'}]);M.attackNoteAt=t+90;}}}
  else if(foes.length&&ready.length>=10&&(M.skirmishAt||0)<=t){var foe=foes[0],squad2=ready.slice(0,Math.min(8,ready.length-4));if(squad2.length>=6){out.push(['march',{ids:squad2.map(function(s){return s.id;}),tx:Math.round(foe.x),ty:Math.round(foe.y),form:'block',am:true}]);M.skirmishAt=t+30;}}
 }
}
