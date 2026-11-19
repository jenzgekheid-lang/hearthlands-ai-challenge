// ChatGPT scheduled — compact production surge and low-risk raids.
// Keep carriers working, multiply distinct ore deposits, claim border tiles one step at a time, and raid exposed enemy economy.
// Game version: 240
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
 var COST={guard:[2,3],wood:[2,2],quarry:[2,3],saw:[3,4],house:[3,3],fisher:[3,2],look:[2,4],coalmine:[4,1],ironmine:[4,1],goldmine:[5,1],smelter:[4,6],goldsmelter:[4,6],smith:[3,5],weaponsmith:[5,7],barracks:[4,5],vault:[3,4]};
 var TOOL={wood:'axe',quarry:'pick',saw:'saw',fisher:'rod',coalmine:'pick',ironmine:'pick',goldmine:'pick',smelter:'hammer',goldsmelter:'hammer',smith:'hammer',weaponsmith:'hammer'};
 var mapOK=!!(map.w&&map.h&&map.owner&&map.ter&&map.tree&&map.stone&&map.known&&typeof canPlace==='function');
 function st(k){return stock[k]||0;}
 function cnt(k){var n=0;for(var b of town)if(b.type===k)n++;return n;}
 function built(k){var n=0;for(var b of town)if(b.type===k&&b.built)n++;return n;}
 function pending(k){for(var b of town)if(b.type===k&&!b.built)return true;return false;}
 function hasTip(q){for(var z of (E.tips||[]))if((z.text||'').toLowerCase().indexOf(q.toLowerCase())>=0)return true;return false;}
 function freeGoods(k){var n=st(k);for(var b of sites)n-=Math.max(0,(b.cost&&b.cost[k]||0)-(b.delivered&&b.delivered[k]||0));return n;}
 function freeTool(k){var n=st(k);for(var b of town)if(b.built&&TOOL[b.type]===k&&!b.worker)n--;return Math.max(0,n);}
 function oreKnown(k){for(var o of (E.ore||[]))if(o.ore===k)return true;return false;}
 function ground(i){return map.grounds&&map.grounds[map.ter[i]]||null;}
 function walkable(i){var g=ground(i);return g?!!g.walk:map.ter[i]!==1;}
 function mineable(i){var g=ground(i);return g?!!g.mine:map.ter[i]===2;}
 function water(i){var g=ground(i);return g?!!g.water:map.ter[i]===1;}
 function home(){for(var b of town)if(b.type==='hq')return {x:b.x+2,y:b.y+2};return {x:(map.w||240)/2,y:(map.h||240)/2};}
 var H=home(),oreList=E.ore||[],bad=M.badSites||(M.badSites={}),cache=M.siteCache||(M.siteCache={});
 for(var r of (view.refused||[]))if(r.order==='place'&&r.args)bad[r.args.x+','+r.args.y]=t+300;
 if(!mapOK)out.push(['ask',{spots:['guard','wood','quarry','saw','fisher','look']}]);
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
  var mine=type==='coalmine'||type==='ironmine'||type==='goldmine',kind=type==='coalmine'?'coal':type==='ironmine'?'ironore':'goldore';
  var size=type==='look'?[2,2]:[3,3],best=null,bestScore=-1e9;
  var ownMil=town.filter(function(b){return b.built&&['guard','tower','castle'].indexOf(b.type)>=0;});
  for(var y=1;y<map.h-size[1];y++)for(var x=1;x<map.w-size[0];x++){
   var i=y*map.w+x;
   if(map.owner[i]!==me||map.known[i]===0||(map.occupied&&map.occupied[i]))continue;
   if(mine&&!mineable(i))continue;
   if((bad[x+','+y]||0)>t)continue;
   var cx=x+size[0]/2,cy=y+size[1]/2,dx=cx-H.x,dy=cy-H.y,dist=Math.sqrt(dx*dx+dy*dy),score=-dist*.1;
   if(mine){
    var tooNear=false;
    for(var oldMine of town)if(oldMine.type===type){var ox=oldMine.x+1.5,oy=oldMine.y+1.5,mdx=cx-ox,mdy=cy-oy;if(mdx*mdx+mdy*mdy<12*12){tooNear=true;break;}}
    if(tooNear)continue;
    var hits=mineHits(kind,cx,cy);if(!hits)continue;score=hits*14-dist*.08;
   }else if(type==='guard'){
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
    var fish=countArea(cx,cy,12,function(j){return water(j)&&(!map.fish||map.fish[j]>0);},2);if(fish<2)continue;score=fish*4-dist*.08;
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
 if(!geos.length&&unsearched.length&&freeTool('pick')>0&&carriers>10&&idleC>3&&t>30&&(M.geoAt||0)<=t){out.push(['profession',{role:'geologist',d:1}]);M.geoAt=t+90;}
 for(var g of geos)if(!g.busy&&!g.moving&&unsearched.length&&(M.geoSend||0)<=t){
  var q=unsearched[0],bestD=(q.x-g.x)*(q.x-g.x)+(q.y-g.y)*(q.y-g.y);
  for(var uq of unsearched){var dd=(uq.x-g.x)*(uq.x-g.x)+(uq.y-g.y)*(uq.y-g.y);if(dd<bestD){q=uq;bestD=dd;}}
  out.push(['sendUnit',{u:g.id,tx:q.x,ty:q.y}]);M.geoSend=t+30;M.geoWorked=1;break;
 }
 if(geos.length&&!unsearched.length&&!geos.some(function(u){return u.busy||u.moving;})&&M.geoWorked&&t>2400&&(M.geoRetire||0)<=t){out.push(['profession',{role:'geologist',d:-1}]);M.geoRetire=t+300;M.geoWorked=0;}

 function direction(sector){
  var dx=(map.w||240)/2-H.x,dy=(map.h||240)/2-H.y,len=Math.sqrt(dx*dx+dy*dy);if(len<1){dx=1;dy=0;len=1;}dx/=len;dy/=len;
  if(sector===1){var a=dx;dx=-dy;dy=a;}else if(sector===2){var b=dx;dx=dy;dy=-b;}
  return {x:dx,y:dy};
 }
 function frontier(unit,role,sector,avoid){
  if(!mapOK)return null;
  var dir=direction(sector),best=null,bs=-1e9,step=role==='pioneer'?1:2;
  for(var yy=1;yy<map.h-1;yy+=step)for(var xx=1;xx<map.w-1;xx+=step){
   var ii=yy*map.w+xx,owner=map.owner[ii],g=ground(ii);
   if(map.known[ii]!==2||!walkable(ii)||(g&&g.land===false)||(map.occupied&&map.occupied[ii])||map.tree[ii]||map.stone[ii])continue;
   if(role==='pioneer'&&owner!==0)continue;
   if(role==='explorer'&&owner!==0&&owner!==me)continue;
   var ownAdj=(map.owner[ii-1]===me?1:0)+(map.owner[ii+1]===me?1:0)+(map.owner[ii-map.w]===me?1:0)+(map.owner[ii+map.w]===me?1:0);
   var edge=edgeCount(xx,yy);
   if(role==='explorer'&&!edge)continue;
   if(role==='pioneer'&&!ownAdj)continue;
   var enemyNear=0;if(map.owner[ii-1]!==0&&map.owner[ii-1]!==me)enemyNear++;if(map.owner[ii+1]!==0&&map.owner[ii+1]!==me)enemyNear++;if(map.owner[ii-map.w]!==0&&map.owner[ii-map.w]!==me)enemyNear++;if(map.owner[ii+map.w]!==0&&map.owner[ii+map.w]!==me)enemyNear++;
   var vx=xx-H.x,vy=yy-H.y,align=vx*dir.x+vy*dir.y,dh=Math.sqrt(vx*vx+vy*vy),ux=xx-unit.x,uy=yy-unit.y,du=Math.sqrt(ux*ux+uy*uy);
   if(du<1)continue;
   var score=role==='pioneer'?ownAdj*130+enemyNear*35+align*.55-du*.85:edge*70+enemyNear*85+align*.42+dh*.08-du*.58+(owner===0?18:0);
   for(var av of avoid||[]){var ax=xx-av.x,ay=yy-av.y;if(ax*ax+ay*ay<14*14)score-=100;}
   if(score>bs){bs=score;best={x:xx,y:yy};}
  }
  return best;
 }
 var explorers=units.filter(function(u){return u.role==='explorer';}).sort(function(a,b){return a.id-b.id;});
 var pioneers=units.filter(function(u){return u.role==='pioneer';});
 if(explorers.length<2&&t>120+explorers.length*360&&carriers>14&&idleC>5&&st('plank')>1&&(M.expAt||0)<=t){out.push(['profession',{role:'explorer',d:1}]);M.expAt=t+180;}
 if(!pioneers.length&&t>180&&carriers>12&&idleC>4&&freeTool('shovel')>0&&(M.pioneerAt||0)<=t){out.push(['profession',{role:'pioneer',d:1}]);M.pioneerAt=t+180;}
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
 var coal=oreKnown('coal'),ironOre=oreKnown('ironore'),goldOre=oreKnown('goldore');
 var milN=cnt('guard')+cnt('tower')+cnt('castle'),soldierN=(view.soldiers||[]).length;
 var totalSoldiers=soldierN;for(var vb of (view.buildings||[]))if(vb.owner===me&&['guard','tower','castle'].indexOf(vb.type)>=0)totalSoldiers+=(vb.troops||[]).length;
 var houseCount=cnt('house')+cnt('house2')+cnt('house3'),housePending=town.some(function(b){return /^house/.test(b.type)&&(!b.built||(b.coming||0)>0);});
 var bedGap=(E.beds||0)-(E.population||0);
 var needHouse=!housePending&&houseCount<8&&((E.homeless||0)>0||(E.beds>0&&bedGap<6)||(carriers<12&&idleC<5));
 var goals=[];
 want(goals,'guard',milN<1);
 want(goals,'wood',cnt('wood')<1);
 want(goals,'quarry',cnt('quarry')<1);
 want(goals,'saw',built('wood')>0&&cnt('saw')<1);
 want(goals,'fisher',built('saw')>0&&cnt('fisher')<1);
 want(goals,'house',needHouse);
 want(goals,'coalmine',coal&&cnt('coalmine')<1);
 want(goals,'ironmine',ironOre&&cnt('ironmine')<1);
 want(goals,'goldmine',goldOre&&cnt('goldmine')<1);
 want(goals,'smelter',built('coalmine')>0&&built('ironmine')>0&&cnt('smelter')<1);
 want(goals,'goldsmelter',built('goldmine')>0&&cnt('goldsmelter')<1);
 want(goals,'smith',built('smelter')>0&&cnt('smith')<1);
 want(goals,'weaponsmith',built('smith')>0&&cnt('weaponsmith')<1);
 want(goals,'barracks',built('weaponsmith')>0&&cnt('barracks')<1);
 if((coalHungry||ironHungry)&&st('fish')<8)want(goals,'fisher',cnt('fisher')<2);
 if(built('smelter')>0&&carriers>=14&&idleC>=5){
  want(goals,'coalmine',coal&&cnt('coalmine')<2);
  want(goals,'ironmine',ironOre&&cnt('ironmine')<2);
 }
 want(goals,'smelter',built('coalmine')>=2&&built('ironmine')>=2&&cnt('smelter')<2);
 if(built('smelter')>=2&&carriers>=16&&idleC>=6)want(goals,'weaponsmith',cnt('weaponsmith')<2);
 if(view.switches&&view.switches.vault)want(goals,'vault',built('goldsmelter')>0&&cnt('vault')<1);
 if(cnt('look')<1&&milN>=1&&t>600&&carriers>12&&idleC>4&&(M.lastLookAt===undefined?-900:M.lastLookAt)<=t-900)want(goals,'look',true);
 var desiredPosts=Math.min(2,1+Math.floor(t/900));
 if(milN<desiredPosts&&t-(M.lastPostAt||0)>=420&&carriers>12&&idleC>4&&totalSoldiers>=milN+9)want(goals,'guard',true);
 if(st('stone')<6&&t>1800&&cnt('quarry')<2&&carriers>14&&idleC>5)want(goals,'quarry',true);
 if(st('log')<6&&t>1800&&cnt('wood')<2&&carriers>14&&idleC>5)want(goals,'wood',true);

 // Keep the production spine and every new outpost ahead of optional work.
 var prioTypes=['guard','wood','quarry','saw','fisher','coalmine','ironmine','goldmine','smelter','goldsmelter','smith','weaponsmith','barracks'];
 M.prio=M.prio||{};
 for(var b of town)if(prioTypes.indexOf(b.type)>=0&&!b.prio&&!M.prio[b.id]){out.push(['priority',{b:b.id,on:true}]);M.prio[b.id]=1;}
 M.gcfg=M.gcfg||{};
 for(var b2 of town)if(b2.built&&['guard','tower','castle'].indexOf(b2.type)>=0&&!M.gcfg[b2.id]){
  if(b2.fighters!==1)out.push(['fighters',{b:b2.id,set:1}]);
  if(b2.archers!==0)out.push(['archers',{b:b2.id,set:0}]);
  M.gcfg[b2.id]=1;
 }
 if(siteN<2)for(var ty of goals)if(place(ty))break;

 var A=E.army||{};if(A.reserve!==4)out.push(['armyReserve',{set:4}]);
 if(built('barracks')){
  var desired=t<600?12:t<1200?22:t<1800?32:t<2700?44:52;
  if(carriers<8||idleC<2)desired=soldierN;
  else if(carriers<12||idleC<5)desired=Math.max(soldierN,Math.min(desired,12));
  else if(carriers<16||idleC<7)desired=Math.max(soldierN,Math.min(desired,20));
  else if(carriers>=18&&idleC>=7)desired=Math.min(58,desired+4);
  var targets={sword:Math.ceil(desired*.4),spear:Math.ceil(desired*.3)};targets.bow=desired-targets.sword-targets.spear;
  for(var kind of ['sword','spear','bow'])if((A.target||{})[kind]!==targets[kind])out.push(['armyTarget',{kind:kind,set:targets[kind]}]);
  if(Array.isArray(A.keep))for(var ki=0;ki<A.keep.length&&ki<3;ki++)if(A.keep[ki]&&A.keep[ki].keep!==0)out.push(['weaponKeep',{k:ki,set:0}]);
 }
 if(t>0&&t%600<2&&(M.noteAt||-1)!==t){
  var ownMil=(view.buildings||[]).filter(function(b){return b.owner===me&&['guard','tower','castle'].indexOf(b.type)>=0;}),garrison=ownMil.reduce(function(n,b){return n+((b.troops||[]).length);},0);
  out.push(['note',{text:'Macro raid: scouts '+explorers.length+', pioneers '+pioneers.length+', posts '+ownMil.length+' garrison '+garrison+', mines '+cnt('coalmine')+'/'+cnt('ironmine')+', gold '+cnt('goldmine')+', carriers '+carriers+' idle '+idleC+', field '+soldierN+', seen '+(E.land&&E.land.tiles||0)+'.'}]);M.noteAt=t;
 }
}

function army(view,M,out){
 var t=view.t||0,me=view.me,mine=view.soldiers||[],bld=view.buildings||[],enemy=view.enemy||{};
 var foes=enemy.soldiers||[],eb=enemy.buildings||[];
 function d2(a,b){var x=a.x-b.x,y=a.y-b.y;return x*x+y*y;}
 function door(b){return b.door||{x:b.x+b.w/2,y:b.y+b.h/2};}
 function isMil(b){return !!b.military||['guard','tower','castle'].indexOf(b.type)>=0;}
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
 var allTargets=eb.filter(function(b){return b.built!==false&&!(b.remembered&&t-(b.seenAt||0)>600);});
 function byId(id){for(var b of allTargets)if(b.id===id)return b;return null;}
 function localFoes(b){var p=door(b),n=0;for(var f of foes)if(d2(f,p)<20*20)n++;return n;}
 function protectedByMil(b,list){var p=door(b);for(var e of list)if(e.id!==b.id&&isMil(e)&&d2(p,door(e))<18*18)return true;return false;}
 function need(b,near){
  var n=b.type==='hq'?36:!isMil(b)?6:b.type==='guard'?(b.manned===false?8:24):b.type==='tower'?(b.manned===false?10:32):b.type==='castle'?(b.manned===false?14:40):(b.manned===false?8:28);
  n+=Math.min(12,near*3);if((view.gold===undefined?0.6:view.gold)<0.8)n=Math.ceil(n*1.2);return Math.max(6,n);
 }
 var attackers=mine.filter(function(s){return s.order&&s.order.k==='attack';}),active=attackers.length?byId(attackers[0].order.b):null;
 if(attackers.length){
  if(!active){out.push(['release',{ids:attackers.map(function(s){return s.id;}),stop:true}]);M.siegeTarget=0;M.siegeLosses=0;M.siegeCooldown=t+120;}
  else{
   if(M.siegeTarget!==active.id){M.siegeTarget=active.id;M.siegeStart=mine.length;M.siegePrev=mine.length;M.siegeLosses=0;}
   if(typeof M.siegePrev==='number'&&mine.length<M.siegePrev)M.siegeLosses=(M.siegeLosses||0)+M.siegePrev-mine.length;
   M.siegePrev=mine.length;
   var lossLimit=Math.max(4,Math.ceil((M.siegeStart||mine.length)*.3));
   if(M.siegeLosses>=lossLimit){
    var hx=120,hy=120;for(var hb of bld)if(hb.owner===me&&hb.type==='hq'){hx=hb.x+hb.w/2;hy=hb.y+hb.h/2;break;}
    out.push(['march',{ids:attackers.map(function(s){return s.id;}),tx:Math.round(hx),ty:Math.round(hy),form:'block',am:false}]);
    M.siegeCooldown=t+600;M.reinforceAt=t+600;M.siegeTarget=0;M.siegeLosses=0;
    out.push(['note',{text:'Siege aborted after '+lossLimit+' field losses; retreating to HQ.'}]);
   }else if((M.reinforceAt||0)<=t){
    var req=need(active,localFoes(active)),add=available().slice(0,Math.max(0,req+2-attackers.length));
    if(add.length){out.push(['attack',{ids:add.map(function(s){return s.id;}),b:active.id}]);M.reinforceAt=t+25;}
   }
  }
 }else{
  M.siegeTarget=0;M.siegeLosses=0;
  var visible=allTargets.filter(function(b){return !b.remembered;});
  var visibleMil=visible.filter(isMil),ready=available();
  var raids=visible.filter(function(b){return b.type!=='hq'&&!isMil(b)&&!protectedByMil(b,visibleMil)&&localFoes(b)<=2;});
  var emptyMil=visible.filter(function(b){return isMil(b)&&b.manned===false&&!protectedByMil(b,visibleMil)&&localFoes(b)<=3;});
  var manned=visible.filter(function(b){return isMil(b)&&b.manned===true&&!protectedByMil(b,visibleMil)&&localFoes(b)<=3;});
  var hqTargets=visible.filter(function(b){return b.type==='hq'&&!protectedByMil(b,visibleMil)&&localFoes(b)<=2;});
  var pool=raids.length?raids:emptyMil.length?emptyMil:(ready.length>=36&&manned.length?manned:(ready.length>=44?hqTargets:[]));
  var cx=ready.length?ready.reduce(function(a,s){return a+s.x;},0)/ready.length:(view.map&&view.map.w||240)/2;
  var cy=ready.length?ready.reduce(function(a,s){return a+s.y;},0)/ready.length:(view.map&&view.map.h||240)/2;
  var best=null,bestScore=1e18;
  for(var target of pool){var p=door(target),near=localFoes(target),score=d2({x:cx,y:cy},p)+near*500+(target.remembered?500:0);if(score<bestScore){bestScore=score;best=target;}}
  if(best&&(M.siegeCooldown||0)<=t){
   var req2=need(best,localFoes(best)),send=Math.min(ready.length-4,req2+2);
   if(ready.length>=req2+4&&send>=req2){
    var squad=ready.slice(0,send);out.push(['attack',{ids:squad.map(function(s){return s.id;}),b:best.id}]);
    M.reinforceAt=t+25;M.siegeTarget=best.id;M.siegeStart=mine.length;M.siegePrev=mine.length;M.siegeLosses=0;
    M.attackNoteAt=M.attackNoteAt||0;if(t>=M.attackNoteAt){out.push(['note',{text:'Raid: '+squad.length+' field soldiers against exposed '+best.type+' '+best.id+'; threshold '+req2+'.'}]);M.attackNoteAt=t+90;}
   }
  }
 }
}