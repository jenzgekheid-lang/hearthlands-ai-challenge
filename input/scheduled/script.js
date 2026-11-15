// ChatGPT scheduled — early mining rush, fish-backed food, staffed border posts and concentrated counter-sieges.
// Replace the stalled all-chain economy with a short production spine; keep a real garrison reserve and finish every enemy military site.
// Game version: 211
function think(view){
 if(!view||view.over)return [];
 var E=view.economy;if(!E)return [];
 var M=memory;if(!M.plan)M.plan={};var P=M.plan;
 var out=[],t=view.t||0,me=view.me,map=view.map||{};
 var town=E.town||[],stock=E.stock||{},people=E.people||{},idle=E.idle||{},units=E.units||[];
 var soldiers=view.soldiers||[],foes=view.enemy&&view.enemy.soldiers||[],enemy=view.enemy&&view.enemy.buildings||[];
 var carriers=people.carrier||0,idleC=idle.carrier||0,sites=town.filter(function(b){return !b.built;}),siteN=sites.length;
 function st(k){return stock[k]||0;}
 function cnt(k){return town.filter(function(b){return b.type===k;}).length;}
 function built(k){return town.some(function(b){return b.type===k&&b.built;});}
 function ore(k){return (E.ore||[]).some(function(o){return o.ore===k;});}
 function dist(a,b){return Math.hypot(a.x-b.x,a.y-b.y);}
 var COST={wood:[2,2],quarry:[2,3],saw:[3,4],house:[3,3],house2:[5,6],house3:[10,12],fisher:[3,2],forest:[3,1],guard:[2,3],tower:[5,5],castle:[8,12],farm:[6,6],waterhut:[3,4],mill:[3,3],bakery:[4,5],pigfarm:[6,6],butcher:[4,4],coalmine:[4,1],ironmine:[4,1],smelter:[4,6],smith:[3,5],weaponsmith:[5,7],barracks:[4,5]};
 function freeGoods(it){var n=st(it);for(var b of sites)n-=Math.max(0,(b.cost&&b.cost[it]||0)-(b.delivered&&b.delivered[it]||0));return n;}
 function affordable(k){var c=COST[k]||[0,0];return freeGoods('plank')>=c[0]&&freeGoods('stone')>=c[1];}
 var goals=[];
 function want(k){if(cnt(k)===0&&goals.indexOf(k)<0)goals.push(k);}
 function hasTip(q){return (E.tips||[]).some(function(x){return (x.text||'').toLowerCase().indexOf(q.toLowerCase())>=0;});}
 var hq=town.find(function(b){return b.type==='hq';});
 var home=hq?{x:hq.x+hq.w/2,y:hq.y+hq.h/2}:{x:(map.w||240)/2,y:(map.h||240)/2};
 var guards=cnt('guard'),towers=cnt('tower'),castles=cnt('castle'),milN=guards+towers+castles;
 var geos=units.filter(function(u){return u.role==='geologist';}),exps=units.filter(function(u){return u.role==='explorer';});
 var spots=E.spots||{};

 if(!view.armyOnly){
  // Opening: beds/workforce, wood, stone; no sprawling food chain before metal.
  if(cnt('house')+cnt('house2')+cnt('house3')===0)want('house2');
  if(cnt('wood')===0)want('wood');
  if(cnt('quarry')===0)want('quarry');
  if(built('wood')&&cnt('saw')===0)want('saw');
  var fishSpots=spots.fisher||[];
  if(cnt('fisher')===0&&fishSpots.some(function(s){return (s.n||0)>0;}))want('fisher');

  // Search actual unsearched mountain tiles, never blind map coordinates.
  if(!geos.length&&(E.unsearched||[]).length&&st('pick')>0&&idleC>0&&carriers>4&&t>20&&(P.geoAt||0)<=t){out.push(['profession',{role:'geologist',d:1}]);P.geoAt=t+100;}
  for(var g of geos)if(!g.busy&&!g.moving&&(E.unsearched||[]).length&&(P.geoSend||0)<=t){
   var q=E.unsearched[0],skip=P.geoSkip;
   if(skip){var alt=E.unsearched.find(function(z){return z.x!==skip[0]||z.y!==skip[1];});if(alt)q=alt;}
   var logs=E.log||[],fail=logs.filter(function(e){return e.what==='pathfail'&&e.a===g.id;});
   if(fail.length&&fail[fail.length-1].t>(P.geoFailSeen||-1)){P.geoFailSeen=fail[fail.length-1].t;P.geoSkip=[q.x,q.y];q=E.unsearched.find(function(z){return z.x!==q.x||z.y!==q.y;})||q;}
   out.push(['sendUnit',{u:g.id,tx:q.x,ty:q.y}]);P.geoSend=t+25;
  }

  // Two explorers reveal the enemy approach without tying up the field army.
  if(exps.length<2&&t>240&&carriers>9&&idleC>3&&freeGoods('plank')>=3&&(P.expAt||0)<=t){out.push(['profession',{role:'explorer',d:1}]);P.expAt=t+180;}
  var w=map.w||240,h=map.h||240,scoutPts=me===1?[[w-14,h-14],[w-14,14],[Math.round(w*.72),Math.round(h*.5)]]:[[14,14],[14,h-14],[Math.round(w*.28),Math.round(h*.5)]];
  for(var ei=0;ei<exps.length;ei++){var ex=exps[ei];if(!ex.busy&&!ex.moving&&(P.expSend||0)<=t){var ep=scoutPts[(P.expI||0)%scoutPts.length];out.push(['sendUnit',{u:ex.id,tx:ep[0],ty:ep[1]}]);P.expI=(P.expI||0)+1;P.expSend=t+90;break;}}

  // Mine as soon as ore is revealed; coal and iron mines can both fall back to fish.
  if(ore('coal'))want('coalmine');if(ore('ironore'))want('ironmine');
  if(built('coalmine')&&built('ironmine'))want('smelter');
  if(built('smelter'))want('smith');if(built('smith'))want('weaponsmith');if(built('weaponsmith'))want('barracks');

  // Food fallback only when the live advisor says a mine is starving.
  var coalHungry=hasTip('needs bread or fish'),ironHungry=hasTip('needs meat or fish');
  if((coalHungry||ironHungry)&&st('fish')<3){
   if(cnt('farm')===0)want('farm');
   if(built('farm')&&cnt('waterhut')===0)want('waterhut');
   if(built('farm')&&cnt('mill')===0)want('mill');
   if(built('mill')&&built('waterhut')&&cnt('bakery')===0)want('bakery');
   if(ironHungry&&built('farm')&&built('waterhut')&&cnt('pigfarm')===0)want('pigfarm');
   if(built('pigfarm')&&cnt('butcher')===0)want('butcher');
  }

  var houses=cnt('house')+cnt('house2')+cnt('house3');
  if(houses<3&&t>500&&((E.homeless||0)>0||((E.population||0)>=(E.beds||0)-2&&carriers<12&&idleC<7)))want('house2');

  // First expansion is staffed small towers; add larger posts only with a growing field force.
  if(t>300&&soldiers.length>=8&&milN<1)want('guard');
  if(t>850&&soldiers.length>=13&&milN<2)want('guard');
  if(t>1700&&soldiers.length>=20&&milN<3)want('guard');
  if(t>2800&&soldiers.length>=28&&towers<1)want('tower');
  if(t>4200&&soldiers.length>=36&&towers<2)want('tower');
  if(t>1200&&built('wood')&&cnt('wood')<2&&st('log')<4)want('wood');
  if(t>1200&&built('quarry')&&cnt('quarry')<2&&st('stone')<5)want('quarry');

  // Ask the game for legal sites. Military expansion is explicitly kept in the request window.
  var asks=[];
  for(var urgent of ['guard','tower','castle'])if(goals.indexOf(urgent)>=0&&asks.length<6)asks.push(urgent);
  for(var gt of goals)if(asks.length<6&&asks.indexOf(gt)<0)asks.push(gt);
  for(var extra of ['fisher','coalmine','ironmine','farm','waterhut','house2'])if(asks.length<6&&asks.indexOf(extra)<0)asks.push(extra);
  if(asks.length)out.push(['ask',{spots:asks}]);

  // One new site per turn, max two unfinished; reserve already-promised materials.
  if(siteN<2){for(var type of goals){var list=spots[type]||[];if(!list.length||!affordable(type))continue;var spot=list[0];if(type==='fisher'&&(spot.n||0)<=0)continue;out.push(['place',{type:type,x:spot.x,y:spot.y}]);break;}}
  var firstSite=sites.find(function(b){return !b.prio;});if(firstSite)out.push(['priority',{b:firstSite.id,on:true}]);
  var prioTypes=['wood','quarry','saw','fisher','coalmine','ironmine','smelter','smith','weaponsmith','barracks'];
  for(var b of town)if(b.built&&prioTypes.indexOf(b.type)>=0&&!b.prio)out.push(['priority',{b:b.id,on:true}]);

  if(siteN>0&&carriers>4&&idleC>0){
   if((people.builder||0)<2&&st('hammer')>0&&(P.builderAt||0)<=t){out.push(['profession',{role:'builder',d:1}]);P.builderAt=t+150;}
   if((people.digger||0)<2&&st('shovel')>0&&(P.diggerAt||0)<=t){out.push(['profession',{role:'digger',d:1}]);P.diggerAt=t+150;}
  }

  // A low reserve allows posts to fill; barracks replenish the outside target.
  if(built('barracks')&&built('weaponsmith')){
   var total=t<900?20:t<1800?28:t<3000?36:42,targets={sword:Math.ceil(total*.4),spear:Math.ceil(total*.3)};
   targets.bow=total-targets.sword-targets.spear;var A=E.army||{},old=A.target||{};
   for(var kind of ['sword','spear','bow'])if(old[kind]!==targets[kind])out.push(['armyTarget',{kind:kind,set:targets[kind]}]);
   if(A.reserve!==4)out.push(['armyReserve',{set:4}]);
   if(Array.isArray(A.keep))for(var ki=0;ki<A.keep.length&&ki<3;ki++)if(A.keep[ki]&&A.keep[ki].keep!==0)out.push(['weaponKeep',{k:ki,set:0}]);
  }else if(E.army&&E.army.reserve!==4)out.push(['armyReserve',{set:4}]);
  if(t>0&&t%600<2&&(P.noteAt||-1)!==t){out.push(['note',{text:'Rush: '+goals.slice(0,5).join('/')+'; sites '+siteN+', carriers '+carriers+', idle '+idleC+', field '+soldiers.length+', posts '+milN+', fish '+st('fish')+'.'}]);P.noteAt=t;}
 }

 // One siege at a time: release stale targets, reinforce a live attack, and concentrate the field army.
 var freeSoldiers=soldiers.filter(function(s){return !s.order&&!s.defends&&!s.fighting;}),attackers=soldiers.filter(function(s){return s.order&&s.order.k==='attack';});
 function valid(b){return b&&(b.military||['guard','tower','castle','hq'].indexOf(b.type)>=0)&&!(b.remembered&&t-(b.seenAt||0)>600);}
 function byId(id){return enemy.find(function(b){return b.id===id;});}
 function need(b){var n=b.type==='guard'?(b.manned===false?3:10):b.type==='tower'?(b.manned===false?6:17):b.type==='castle'?(b.manned===false?9:25):(b.manned===false?8:18);if((view.gold||.6)<.8)n=Math.ceil(n*1.2);return n;}
 var active=attackers.length?byId(attackers[0].order.b):null;
 if(attackers.length){
  if(!valid(active))out.push(['release',{ids:attackers.map(function(s){return s.id;}),stop:true}]);
  else if(attackers.length<need(active)&&attackers.length+freeSoldiers.length>=need(active)&&freeSoldiers.length)out.push(['attack',{ids:freeSoldiers.map(function(s){return s.id;}),b:active.id}]);
 }else{
  var targets=enemy.filter(valid),milTargets=targets.filter(function(b){return b.type!=='hq';}),pool=milTargets.length?milTargets:targets,best=null,bestScore=1e9;
  var cx=freeSoldiers.length?freeSoldiers.reduce(function(a,s){return a+s.x;},0)/freeSoldiers.length:home.x,cy=freeSoldiers.length?freeSoldiers.reduce(function(a,s){return a+s.y;},0)/freeSoldiers.length:home.y;
  for(var eb of pool){var door=eb.door||{x:eb.x+eb.w/2,y:eb.y+eb.h/2},score=dist({x:cx,y:cy},door)+(eb.manned===false?-18:0)+(eb.type==='tower'?4:eb.type==='castle'?12:0)+(eb.remembered?Math.min(20,(t-(eb.seenAt||0))/40):0);if(score<bestScore){bestScore=score;best=eb;}}
  if(best&&freeSoldiers.length>=need(best))out.push(['attack',{ids:freeSoldiers.map(function(s){return s.id;}),b:best.id}]);
  else if(foes.length&&freeSoldiers.length>=6){var threat=null,td=1e9;for(var f of foes)for(var own of (view.buildings||[])){var qd=dist(f,{x:own.x+own.w/2,y:own.y+own.h/2});if(qd<td){td=qd;threat=f;}}if(threat&&td<20){var grp=freeSoldiers.slice(0,Math.min(12,freeSoldiers.length));out.push(['march',{ids:grp.map(function(s){return s.id;}),tx:Math.round(threat.x),ty:Math.round(threat.y),form:'block',am:true}]);}}
 }
 return out.slice(0,50);
}