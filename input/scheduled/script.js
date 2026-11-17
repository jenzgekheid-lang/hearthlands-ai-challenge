// ChatGPT scheduled — garrison-first expansion, map-scanned resource sites, and a carrier-aware war economy.
// Staff one border anchor explicitly, find legal mine sites from the live map, and grow the army without drowning transport.
// Game version: 217
function think(view){
 if(!view||view.over)return [];
 var M=memory.plan||(memory.plan={}),out=[];
 if(view.economy&&!view.armyOnly)economy(view,M,out);
 army(view,M,out);
 return out.slice(0,50);
}

function economy(view,M,out){
 var E=view.economy,t=view.t||0,me=view.me,map=view.map||{};
 var town=E.town||[],stock=E.stock||{},people=E.people||{},idle=E.idle||{},units=E.units||[];
 var carriers=people.carrier||0,idleC=idle.carrier||0,sites=town.filter(function(b){return !b.built;}),siteN=sites.length;
 var COST={wood:[2,2],quarry:[2,3],saw:[3,4],forest:[3,1],house:[3,3],house2:[5,6],fisher:[3,2],guard:[2,3],tower:[5,5],castle:[8,12],coalmine:[4,1],ironmine:[4,1],smelter:[4,6],smith:[3,5],weaponsmith:[5,7],barracks:[4,5],farm:[6,6],waterhut:[3,4],mill:[3,3],bakery:[4,5],pigfarm:[6,6],butcher:[4,4],goldmine:[5,1],goldsmelter:[4,6],vault:[3,4]};
 var TOOL={wood:'axe',quarry:'pick',saw:'saw',forest:'shovel',fisher:'rod',coalmine:'pick',ironmine:'pick',smelter:'hammer',smith:'hammer',weaponsmith:'hammer',farm:'scythe',butcher:'axe',goldmine:'pick',goldsmelter:'hammer'};
 var mapOK=!!(map.w&&map.h&&map.owner&&map.ter&&map.tree&&map.stone&&typeof canPlace==='function');
 function st(k){return stock[k]||0;}
 function cnt(k){var n=0;for(var b of town)if(b.type===k)n++;return n;}
 function built(k){var n=0;for(var b of town)if(b.type===k&&b.built)n++;return n;}
 function pending(k){for(var b of town)if(b.type===k&&!b.built)return true;return false;}
 function hasTip(q){for(var z of (E.tips||[]))if((z.text||'').toLowerCase().indexOf(q.toLowerCase())>=0)return true;return false;}
 function freeGoods(k){var n=st(k);for(var b of sites)n-=Math.max(0,(b.cost&&b.cost[k]||0)-(b.delivered&&b.delivered[k]||0));return n;}
 function freeTool(k){var n=st(k);for(var b of town)if(b.built&&TOOL[b.type]===k&&!b.worker)n--;return Math.max(0,n);}
 function oreKnown(k){for(var o of (E.ore||[]))if(o.ore===k)return true;return false;}
 function oreCount(k){var n=0;for(var o of (E.ore||[]))if(o.ore===k)n++;return n;}
 if(!mapOK)out.push(['ask',{spots:['guard','wood','quarry','saw',oreKnown('coal')?'coalmine':'house',oreKnown('ironore')?'ironmine':'fisher']}]);
 function home(){for(var b of town)if(b.type==='hq')return {x:b.x+2,y:b.y+2};return {x:(map.w||240)/2,y:(map.h||240)/2};}
 var H=home(),oreList=E.ore||[],bad=M.badSites||(M.badSites={}),cache=M.siteCache||(M.siteCache={});
 for(var r of (view.refused||[]))if(r.order==='place'&&r.args)bad[r.args.x+','+r.args.y]=t+300;
 var tips=(E.tips||[]).map(function(z){return (z.k||'')+' '+(z.text||'');}).join(' ').toLowerCase();
 var coalHungry=hasTip('needs bread or fish'),ironHungry=hasTip('needs meat or fish');
 var landTip=hasTip('land has not grown')||hasTip('build a small tower');
 var noTrees=hasTip('no grown trees')||hasTip('no free ground to plant');

 function countArea(cx,cy,r,fn,step){
  var n=0,stp=step||2,x0=Math.max(0,Math.floor(cx-r)),x1=Math.min(map.w-1,Math.ceil(cx+r)),y0=Math.max(0,Math.floor(cy-r)),y1=Math.min(map.h-1,Math.ceil(cy+r));
  for(var yy=y0;yy<=y1;yy+=stp)for(var xx=x0;xx<=x1;xx+=stp)if(fn(yy*map.w+xx,xx,yy))n++;
  return n;
 }
 function mineHits(kind,cx,cy){
  var hits=0,val=map.oreNames&&map.oreNames.indexOf(kind)>=0?map.oreNames.indexOf(kind)+1:0;
  if(map.ore&&val>1)hits+=countArea(cx,cy,5,function(i){return map.ore[i]===val;},1);
  for(var o of oreList)if(o.ore===kind&&Math.abs(o.x-cx)<=5&&Math.abs(o.y-cy)<=5)hits+=2;
  return hits;
 }
 function findSite(type){
  if(!mapOK){var l=(E.spots||{})[type]||[];return l.length?l[0]:null;}
  var old=cache[type];
  if(old&&old.until>t&&canPlace(type,old.x,old.y))return old;
  if(old)delete cache[type];
  if((M.noSpot||{})[type]>t)return null;
  var mine=type==='coalmine'||type==='ironmine'||type==='goldmine',kind=type==='coalmine'?'coal':type==='ironmine'?'ironore':'goldore';
  var size=type==='house2'?[5,4]:type==='house3'?[6,5]:type==='farm'?[4,3]:type==='tower'?[5,4]:type==='castle'?[8,7]:[3,3];
  var terrain=mine?2:0,best=null,bestScore=-1e9;
  for(var y=1;y<map.h-size[1];y++)for(var x=1;x<map.w-size[0];x++){
   var i=y*map.w+x;
   if(map.owner[i]!==me||map.ter[i]!==terrain||(map.known&&map.known[i]===0))continue;
   if((bad[x+','+y]||0)>t)continue;
   var cx=x+size[0]/2,cy=y+size[1]/2,dx=cx-H.x,dy=cy-H.y,dist=Math.sqrt(dx*dx+dy*dy),score=-dist*.12;
   if(mine){var hits=mineHits(kind,cx,cy);if(!hits)continue;score=hits*12-dist*.08;}
   else if(type==='guard'||type==='tower'||type==='castle'){
    var neutral=countArea(cx,cy,type==='guard'?12:type==='tower'?18:23,function(j){return map.owner[j]===0;},3);
    if(neutral<2)continue;score=neutral*3-dist*.08;
    var mountains=countArea(cx,cy,16,function(j){return map.ter[j]===2&&map.owner[j]===0;},3);score+=mountains*2;
   }else if(type==='wood'){
    var trees=countArea(cx,cy,10,function(j){return map.tree&&map.tree[j]===2;},2);if(trees<2)continue;score=trees*4-dist*.1;
   }else if(type==='quarry'){
    var rocks=countArea(cx,cy,13,function(j){return map.stone&&map.stone[j]>0;},2);if(rocks<2)continue;score=rocks*3-dist*.1;
   }else if(type==='fisher'){
    var fish=countArea(cx,cy,11,function(j){return map.ter[j]===1&&(!map.fish||map.fish[j]>0);},2);if(fish<2)continue;score=fish*4-dist*.08;
   }else if(type==='forest'){
    var green=countArea(cx,cy,9,function(j){return map.ter[j]===0&&!map.tree[j]&&!map.stone[j];},2);if(green<10)continue;score=green-dist*.15;
   }else{
    score=-dist;
    if(type==='saw'&&cnt('wood'))score-=Math.abs(cx-(town.find(function(b){return b.type==='wood';}).x+1))*0.15;
   }
   if(score<=bestScore)continue;
   if(!canPlace(type,x,y))continue;
   bestScore=score;best={x:x,y:y,until:t+20};
  }
  if(!best){M.noSpot=M.noSpot||{};M.noSpot[type]=t+20;return null;}
  cache[type]=best;return best;
 }
 function canPay(type){var c=COST[type]||[0,0];return freeGoods('plank')>=c[0]&&freeGoods('stone')>=c[1];}
 function place(type){
  if(siteN>=2||pending(type)||!canPay(type))return false;
  var tool=TOOL[type];if(tool&&st(tool)<=0&&built('smith')===0)return false;
  var p=findSite(type);if(!p)return false;
  out.push(['place',{type:type,x:p.x,y:p.y}]);siteN++;delete cache[type];return true;
 }

 // Geology starts only when the staffed border exposes searchable mountain and a pick is genuinely free.
 var geos=units.filter(function(u){return u.role==='geologist';}),unsearched=E.unsearched||[];
 if(unsearched.length&&!geos.length&&freeTool('pick')>0&&idleC>0&&carriers>4&&t>20&&(M.geoAt||0)<=t){
  out.push(['profession',{role:'geologist',d:1}]);M.geoAt=t+45;
 }
 for(var g of geos)if(!g.busy&&!g.moving&&unsearched.length&&(M.geoSend||0)<=t){
  var q=unsearched[0],bestD=(q.x-g.x)*(q.x-g.x)+(q.y-g.y)*(q.y-g.y);
  for(var uq of unsearched){var dd=(uq.x-g.x)*(uq.x-g.x)+(uq.y-g.y)*(uq.y-g.y);if(dd<bestD){q=uq;bestD=dd;}}
  out.push(['sendUnit',{u:g.id,tx:q.x,ty:q.y}]);M.geoSend=t+20;break;
 }
 if(geos.length&&!unsearched.length&&!geos.some(function(u){return u.busy||u.moving;})&&(M.geoRetire||0)<=t&&t>180){
  out.push(['profession',{role:'geologist',d:-1}]);M.geoRetire=t+90;
 }

 // One explorer follows a walkable frontier, biased toward the map centre and the opposing half.
 var explorers=units.filter(function(u){return u.role==='explorer';});
 function frontier(){
  if(!mapOK||!map.known)return null;
  var best=null,bs=-1e9,dx0=map.w/2-H.x,dy0=map.h/2-H.y,dl=Math.sqrt(dx0*dx0+dy0*dy0)||1;
  // Prefer visible neutral grass just beyond our border, so the explorer actually leaves home territory.
  for(var yy=2;yy<map.h-2;yy+=2)for(var xx=2;xx<map.w-2;xx+=2){
   var ii=yy*map.w+xx;if(map.owner[ii]!==0||map.known[ii]===0||map.ter[ii]!==0||(map.occupied&&map.occupied[ii])||map.tree[ii]||map.stone[ii])continue;
   var ownNear=0,edge=0;if(map.owner[ii-1]===me)ownNear++;if(map.owner[ii+1]===me)ownNear++;if(map.owner[ii-map.w]===me)ownNear++;if(map.owner[ii+map.w]===me)ownNear++;
   if(map.known[ii-1]===0)edge++;if(map.known[ii+1]===0)edge++;if(map.known[ii-map.w]===0)edge++;if(map.known[ii+map.w]===0)edge++;
   if(!ownNear)continue;var vx=xx-H.x,vy=yy-H.y,align=(vx*dx0+vy*dy0)/dl,dist=Math.abs(vx)+Math.abs(vy),score=ownNear*45+edge*90+(map.known[ii]===2?15:0)+align*.25-dist*.08;
   if(score>bs){bs=score;best={x:xx,y:yy};}
  }
  if(best)return best;
  // Fallback to a walkable tile on the visible edge of our own land.
  for(var y2=2;y2<map.h-2;y2+=2)for(var x2=2;x2<map.w-2;x2+=2){
   var j=y2*map.w+x2;if(map.owner[j]!==me||map.known[j]!==2||map.ter[j]!==0||(map.occupied&&map.occupied[j])||map.tree[j]||map.stone[j])continue;
   var e=0;if(map.known[j-1]===0)e++;if(map.known[j+1]===0)e++;if(map.known[j-map.w]===0)e++;if(map.known[j+map.w]===0)e++;
   if(!e)continue;var vx2=x2-H.x,vy2=y2-H.y,sc=e*100+(vx2*dx0+vy2*dy0)/dl*.25-(Math.abs(vx2)+Math.abs(vy2))*.08;
   if(sc>bs){bs=sc;best={x:x2,y:y2};}
  }
  return best;
 }
 var enemyBuildings=(view.enemy&&view.enemy.buildings)||[],enemyHQ=null;
 for(var eb of enemyBuildings)if(eb.type==='hq')enemyHQ=eb;
 if(!explorers.length&&t>480&&carriers>9&&idleC>3&&st('plank')>0&&(M.expAt||0)<=t){out.push(['profession',{role:'explorer',d:1}]);M.expAt=t+120;}
 for(var ex of explorers)if(!ex.busy&&!ex.moving&&(M.expSend||0)<=t){
  var target=null;
  if(enemyHQ&&map.w&&map.h){
   var offsets=[[-10,-10],[10,-10],[10,10],[-10,10],[0,-16],[16,0],[0,16],[-16,0]],start=M.enemyScoutI||0;
   for(var oi=0;oi<offsets.length;oi++){
    var off=offsets[(start+oi)%offsets.length],tx=Math.max(2,Math.min(map.w-3,Math.round(enemyHQ.x+off[0]))),ty=Math.max(2,Math.min(map.h-3,Math.round(enemyHQ.y+off[1]))),idx=ty*map.w+tx;
    if(map.known&&map.known[idx]===0)continue;if(map.ter&&map.ter[idx]!==0)continue;if(map.occupied&&map.occupied[idx])continue;if(map.tree&&map.tree[idx])continue;if(map.stone&&map.stone[idx])continue;
    target={x:tx,y:ty};M.enemyScoutI=(start+oi+1)%offsets.length;break;
   }
  }
  if(!target)target=frontier();
  if(target){out.push(['sendUnit',{u:ex.id,tx:target.x,ty:target.y}]);M.expSend=t+75;}
 }

 // Only grow housing when carriers are genuinely scarce; beds filling is not a reason to create another 20 settlers.
 var houseCount=cnt('house')+cnt('house2')+cnt('house3');
 var housePending=town.some(function(b){return /^house/.test(b.type)&&(!b.built||(b.coming||0)>0);});
 var homeless=E.homeless||0,needHouse=!housePending&&houseCount<5&&((carriers<8&&idleC<4)||(homeless>0&&carriers<14));

 // Core opening: one border anchor, then only the materials and people needed for the ore chain.
 var goals=[];
 function want(type,yes){if(yes&&!pending(type)&&goals.indexOf(type)<0)goals.push(type);}
 want('guard',cnt('guard')<1);
 want('wood',cnt('wood')<1);
 want('quarry',cnt('quarry')<1);
 want('saw',built('wood')>0&&cnt('saw')<1);
 want('house',needHouse&&houseCount===0);
 want('house2',needHouse&&houseCount>0&&carriers<5&&st('plank')>=5&&st('stone')>=6);
 want('house',needHouse&&houseCount>0&&carriers>=5);
 var coal=oreKnown('coal'),ironOre=oreKnown('ironore');
 want('coalmine',coal&&cnt('coalmine')<1);
 want('ironmine',ironOre&&cnt('ironmine')<1);
 if((coal||ironOre)&&cnt('fisher')<1&&(cnt('coalmine')||cnt('ironmine')))want('fisher',true);
 want('smelter',built('coalmine')>0&&built('ironmine')>0&&cnt('smelter')<1);
 want('smith',built('smelter')>0&&cnt('smith')<1);
 want('weaponsmith',built('smith')>0&&cnt('weaponsmith')<1);
 want('barracks',built('weaponsmith')>0&&cnt('barracks')<1);
 if(coalHungry&&st('fish')<3){want('farm',cnt('farm')<1);if(built('farm')){want('waterhut',cnt('waterhut')<1);want('mill',cnt('mill')<1);if(built('mill')&&built('waterhut'))want('bakery',cnt('bakery')<1);}}
 if(ironHungry&&st('fish')<3){want('farm',cnt('farm')<1);if(built('farm')){want('waterhut',cnt('waterhut')<1);want('pigfarm',cnt('pigfarm')<1);if(built('pigfarm'))want('butcher',cnt('butcher')<1);}}
 if(noTrees&&t>600&&cnt('forest')<1)want('forest',true);
 var mineBlocked=((coal&&cnt('coalmine')===0&&(M.noSpot||{}).coalmine>t)||(ironOre&&cnt('ironmine')===0&&(M.noSpot||{}).ironmine>t));
 var staffedPost=(view.buildings||[]).some(function(b){return b.owner===me&&['guard','tower','castle'].indexOf(b.type)>=0&&(b.troops||[]).length>0;});
 if((landTip||mineBlocked||(!coal&&!ironOre&&!unsearched.length))&&t>600&&cnt('guard')<2&&built('guard')>0&&staffedPost)want('guard',true);
 var milN=cnt('guard')+cnt('tower')+cnt('castle'),soldierN=(view.soldiers||[]).length;
 if(built('barracks')&&soldierN>=18&&t>1800&&milN<3&&landTip)want('tower',true);

 // Prioritize the border anchor and the actual production spine; do not spray priority across every building.
 var prioTypes=['guard','wood','quarry','saw','coalmine','ironmine','fisher','smelter','smith','weaponsmith','barracks'];
 for(var b of town){
  if(!b.prio&&prioTypes.indexOf(b.type)>=0&&(b.built||!b.built)&&!(M.prio&&M.prio[b.id])){
   out.push(['priority',{b:b.id,on:true}]);M.prio=M.prio||{};M.prio[b.id]=1;
  }
 }
 // Set one-soldier garrisons: a staffed post claims land; extra archers do not help the opening.
 for(var b2 of town)if(b2.built&&['guard','tower','castle'].indexOf(b2.type)>=0){
  M.gcfg=M.gcfg||{};if(!M.gcfg[b2.id]){
   if(b2.fighters!==1)out.push(['fighters',{b:b2.id,set:1}]);
   if(b2.archers!==0)out.push(['archers',{b:b2.id,set:0}]);
   M.gcfg[b2.id]=1;
  }
 }

 // Place at most one new site per turn and keep no more than two unfinished sites.
 if(siteN<2){
  for(var ty of goals){if(place(ty))break;}
 }
 if(siteN>0&&carriers>5&&idleC>1){
  if((people.builder||0)<2&&freeTool('hammer')>0&&(M.builderAt||0)<=t){out.push(['profession',{role:'builder',d:1}]);M.builderAt=t+90;}
  if((people.digger||0)<2&&freeTool('shovel')>0&&(M.diggerAt||0)<=t){out.push(['profession',{role:'digger',d:1}]);M.diggerAt=t+90;}
 }

 // Military buildings may take free soldiers; leave three in the field while the posts are staffed.
 var A=E.army||{};if(A.reserve!==3)out.push(['armyReserve',{set:3}]);
 // Military targets are outside-building counts. Stop recruiting when carriers collapse.
 if(built('barracks')){
  var desired=t<900?10:t<1500?14:t<2400?18:t<3300?22:t<4200?26:30;
  if(carriers<8||idleC<3)desired=Math.min(desired,Math.max(10,(view.soldiers||[]).length));
  else if(carriers>=14&&idleC>=6)desired=Math.min(32,desired+2);
  var targets={sword:Math.ceil(desired*.4),spear:Math.ceil(desired*.3)};targets.bow=desired-targets.sword-targets.spear;
  for(var kind of ['sword','spear','bow'])if((A.target||{})[kind]!==targets[kind])out.push(['armyTarget',{kind:kind,set:targets[kind]}]);
  if(Array.isArray(A.keep))for(var ki=0;ki<A.keep.length&&ki<3;ki++)if(A.keep[ki]&&A.keep[ki].keep!==0)out.push(['weaponKeep',{k:ki,set:0}]);
 }

 if(t>0&&t%600<2&&(M.noteAt||-1)!==t){
  var ownMil=(view.buildings||[]).filter(function(b){return b.owner===me&&['guard','tower','castle'].indexOf(b.type)>=0;}),garrison=ownMil.reduce(function(n,b){return n+((b.troops||[]).length);},0);
  out.push(['note',{text:'Garrison-first: posts '+ownMil.length+' garrison '+garrison+', mines '+cnt('coalmine')+'/'+cnt('ironmine')+', ore '+(coal?'C':'-')+(ironOre?'I':'-')+', carriers '+carriers+' idle '+idleC+', field '+soldierN+', sites '+siteN+'.'}]);M.noteAt=t;
 }
}

function army(view,M,out){
 var t=view.t||0,me=view.me,mine=view.soldiers||[],bld=view.buildings||[],enemy=view.enemy||{};
 var foes=enemy.soldiers||[],eb=enemy.buildings||[];
 function d2(a,b){var x=a.x-b.x,y=a.y-b.y;return x*x+y*y;}
 function dist(a,b){return Math.sqrt(d2(a,b));}
 function door(b){return b.door||{x:b.x+b.w/2,y:b.y+b.h/2};}
 var free=mine.filter(function(s){return !s.order&&!s.defends&&!s.fighting;}),used={};
 function available(){return free.filter(function(s){return !used[s.id];});}
 var ownMil=bld.filter(function(b){return b.owner===me&&['guard','tower','castle'].indexOf(b.type)>=0&&b.built!==false;});
 M.sent=M.sent||{};
 // Explicitly put one swordsman in each empty post; priority alone left the previous guard empty.
 for(var b of ownMil){
  if((b.troops||[]).length||(M.sent[b.id]||0)>t)continue;
  var candidates=available().slice().sort(function(a,b){var aa=a.kind==='sword'?0:a.kind==='spear'?1:2,bb=b.kind==='sword'?0:b.kind==='spear'?1:2;return aa-bb||a.id-b.id;});
  if(candidates.length>3){var s=candidates[0];out.push(['sendIn',{ids:[s.id],b:b.id}]);used[s.id]=1;M.sent[b.id]=t+30;}
 }

 // Defend only a real nearby threat; keep the response small enough to preserve the main force.
 var threat=null,threatD=18*18;
 for(var f of foes)for(var own of bld)if(own.owner===me){var dd=d2(f,{x:own.x+own.w/2,y:own.y+own.h/2});if(dd<threatD){threatD=dd;threat=f;}}
 if(threat&&(M.defendAt||0)<=t){var defenders=available().slice(0,Math.min(5,available().length));if(defenders.length>=2){out.push(['march',{ids:defenders.map(function(s){return s.id;}),tx:Math.round(threat.x),ty:Math.round(threat.y),form:'block',am:true}]);M.defendAt=t+20;for(var ds of defenders)used[ds.id]=1;}}

 var targets=eb.filter(function(b){return b.type==='hq'||b.military||['guard','tower','castle'].indexOf(b.type)>=0;}).filter(function(b){return !(b.remembered&&t-(b.seenAt||0)>600);});
 function byId(id){for(var b of targets)if(b.id===id)return b;return null;}
 var attackers=mine.filter(function(s){return s.order&&s.order.k==='attack';});
 var active=attackers.length?byId(attackers[0].order.b):null;
 function need(b){
  var n=b.type==='guard'?(b.manned===false?6:10):b.type==='tower'?(b.manned===false?8:14):b.type==='castle'?(b.manned===false?10:18):(b.manned===false?12:18);
  var p=door(b),near=0;for(var f of foes)if(d2(f,p)<18*18)near++;
  n+=Math.min(6,near);if((view.gold||.6)<.8)n=Math.ceil(n*1.18);return Math.max(8,n);
 }
 if(attackers.length){
  if(!active)out.push(['release',{ids:attackers.map(function(s){return s.id;}),stop:true}]);
  else if((M.reinforceAt||0)<=t){var n=need(active),add=available().slice(0,Math.max(0,n-attackers.length));if(add.length){out.push(['attack',{ids:add.map(function(s){return s.id;}),b:active.id}]);M.reinforceAt=t+15;}}
 }else{
  var milTargets=targets.filter(function(b){return b.type!=='hq';}),mannedTargets=milTargets.filter(function(b){return b.manned!==false;}),hqTargets=targets.filter(function(b){return b.type==='hq';}),pool=mannedTargets.length?mannedTargets:(hqTargets.length&&t>3000?hqTargets:milTargets),best=null,bestScore=1e18;
  var ready=available(),cx=ready.length?ready.reduce(function(a,s){return a+s.x;},0)/ready.length:(view.map&&view.map.w||240)/2,cy=ready.length?ready.reduce(function(a,s){return a+s.y;},0)/ready.length:(view.map&&view.map.h||240)/2;
  for(var eb2 of pool){var p=door(eb2),score=d2({x:cx,y:cy},p)+(eb2.type==='tower'?250:eb2.type==='castle'?700:0)+(eb2.type==='hq'?100000:0)+(eb2.remembered?Math.min(500,(t-(eb2.seenAt||0))*.2):0);if(score<bestScore){bestScore=score;best=eb2;}}
  if(best){var req=need(best),send=ready.length-3;if(ready.length>=req+3){var squad=ready.slice(0,send);out.push(['attack',{ids:squad.map(function(s){return s.id;}),b:best.id}]);M.reinforceAt=t+15;M.attackNoteAt=M.attackNoteAt||0;if(t>=M.attackNoteAt){out.push(['note',{text:'Siege: '+squad.length+' field soldiers against '+best.type+' '+best.id+'; threshold '+req+'.'}]);M.attackNoteAt=t+90;}}}
 }
}