// ChatGPT scheduled — ask-driven expansion, food-backed metal economy and decisive concentrated sieges.
// Abandon blind tile scanning: ask the game for legal sites, build a compact production chain, claim land with staffed posts,
// then maintain a real field reserve and attack one enemy military building at a time.
// Game version: 210
function think(view){
 if(!view||view.over)return [];
 var E=view.economy;if(!E)return [];
 var M=memory;if(!M.plan)M.plan={};var P=M.plan,out=[],t=view.t||0,me=view.me,map=view.map||{};
 var town=E.town||[],stock=E.stock||{},people=E.people||{},idle=E.idle||{},units=E.units||[];
 var soldiers=view.soldiers||[],foes=(view.enemy&&view.enemy.soldiers)||[],enemy=(view.enemy&&view.enemy.buildings)||[];
 var carriers=people.carrier||0,idleC=idle.carrier||0,sites=town.filter(function(b){return !b.built;}),siteN=sites.length;
 function st(k){return stock[k]||0;}
 function cnt(k){return town.filter(function(b){return b.type===k;}).length;}
 function built(k){return town.filter(function(b){return b.type===k&&b.built;}).length;}
 function pending(k){return town.some(function(b){return b.type===k&&!b.built;});}
 function ore(k){return (E.ore||[]).some(function(o){return o.ore===k;});}
 function d(a,b){return Math.hypot(a.x-b.x,a.y-b.y);}
 var hq=town.find(function(b){return b.type==='hq';}),home=hq?{x:hq.x+hq.w/2,y:hq.y+hq.h/2}:{x:(map.w||240)/2,y:(map.h||240)/2};
 var COST={wood:[2,2],quarry:[2,3],saw:[3,4],house:[3,3],house2:[5,6],house3:[10,12],fisher:[3,2],forest:[3,1],guard:[2,3],tower:[5,5],castle:[8,12],farm:[6,6],waterhut:[3,4],mill:[3,3],bakery:[4,5],pigfarm:[6,6],butcher:[4,4],coalmine:[4,1],ironmine:[4,1],goldmine:[5,1],smelter:[4,6],smith:[3,5],weaponsmith:[5,7],barracks:[4,5],goldsmelter:[4,6]};
 function free(it){var n=st(it);for(var b of sites)n-=Math.max(0,(b.cost&&b.cost[it]||0)-(b.delivered&&b.delivered[it]||0));return n;}
 function enough(k){var c=COST[k]||[0,0];return free('plank')>=c[0]&&free('stone')>=c[1];}
 function add(a,k){if(cnt(k)===0&&a.indexOf(k)<0&&!pending(k))a.push(k);}\n function addN(a,k,n){if(cnt(k)<n&&a.indexOf(k)<0&&!pending(k))a.push(k);}
 var mil=town.filter(function(b){return ['guard','tower','castle'].indexOf(b.type)>=0;});
 var unsearched=E.unsearched||[],geos=units.filter(function(u){return u.role==='geologist';}),exps=units.filter(function(u){return u.role==='explorer';});

 // Economy orders run only on ordinary full-game turns; army-only fight turns still reach the combat controller below.
 if(!view.armyOnly){
  // Exploration: geologists search only actual unsearched mountains; explorers reveal the enemy half of the map.
  if(!geos.length&&unsearched.length&&st('pick')>0&&idleC>0&&carriers>4&&t>20&&(P.geoAt||0)<=t){
   out.push(['profession',{role:'geologist',d:1}]);P.geoAt=t+90;
  }
  for(var g of geos)if(!g.busy&&!g.moving&&unsearched.length&&(P.geoSend||0)<=t){
   var q=unsearched[0];
   if(P.geoSkip&&unsearched.length>1){var alt=unsearched.find(function(z){return z.x!==P.geoSkip[0]||z.y!==P.geoSkip[1];});if(alt)q=alt;}
   var logs=E.log||[],fails=logs.filter(function(e){return e.what==='pathfail'&&e.a===g.id;});
   if(fails.length&&fails[fails.length-1].t>(P.geoFailSeen||-1)){P.geoFailSeen=fails[fails.length-1].t;P.geoSkip=[q.x,q.y];q=unsearched.find(function(z){return z.x!==q.x||z.y!==q.y;})||q;}
   out.push(['sendUnit',{u:g.id,tx:q.x,ty:q.y}]);P.geoTarget=[q.x,q.y];P.geoSend=t+20;
  }
  if(exps.length<2&&t>500&&carriers>10&&idleC>4&&st('plank')>=5&&(P.expAt||0)<=t){
   out.push(['profession',{role:'explorer',d:1}]);P.expAt=t+180;
  }
  var w=map.w||240,h=map.h||240,scoutPts=me===1?[[w-12,h-12],[w-12,12]]:[[12,12],[12,h-12]];
  for(var ei=0;ei<exps.length;ei++){var ex=exps[ei];if(!ex.busy&&!ex.moving&&(P.expSend||0)<=t){var ep=scoutPts[ei%scoutPts.length];out.push(['sendUnit',{u:ex.id,tx:ep[0],ty:ep[1]}]);P.expSend=t+70;}}

  // A dependency list, not a clock-only build script. A site appears only after the previous stage is actually present.
  var goals=[];
  add(goals,'wood');add(goals,'quarry');
  if(built('wood'))add(goals,'saw');
  if(built('saw')&&cnt('house')+cnt('house2')+cnt('house3')===0)add(goals,'house2');
  if(built('wood'))add(goals,'fisher');
  if(built('wood')&&t>300)add(goals,'forest');
  if(t>450)add(goals,'farm');
  if(built('farm'))add(goals,'waterhut');
  if(built('farm'))add(goals,'mill');
  if(built('mill')&&built('waterhut'))add(goals,'bakery');
  if(built('farm')&&t>900)add(goals,'pigfarm');
  if(built('pigfarm'))add(goals,'butcher');
  if(ore('coal'))add(goals,'coalmine');
  if(ore('ironore'))add(goals,'ironmine');
  if(built('coalmine')&&built('ironmine'))add(goals,'smelter');
  if(built('smelter'))add(goals,'smith');
  if(built('smith'))add(goals,'weaponsmith');
  if(built('weaponsmith'))add(goals,'barracks');
  if(ore('goldore')&&built('barracks')&&st('coal')>12)add(goals,'goldmine');
  if(built('goldmine')&&st('coal')>15)add(goals,'goldsmelter');

  // Territory posts are placed from the game's own legal-site suggestions, not guessed coordinates.
  if(t>500&&built('saw')&&soldiers.length>=8&&mil.length<1)add(goals,'guard');
  if(t>1500&&soldiers.length>=12&&carriers>10&&mil.length<2)addN(goals,'guard',2);
  if(t>2500&&soldiers.length>=18&&carriers>14&&mil.length<3)add(goals,'tower');
  if(t>3800&&soldiers.length>=26&&carriers>18&&mil.length<4)add(goals,'castle');

  // Add housing only when the workforce/beds actually need it; do not consume carriers with speculative jobs.
  var houses=cnt('house')+cnt('house2')+cnt('house3'),houseSite=town.some(function(b){return /^house/.test(b.type)&&!b.built;});
  if(!houseSite&&houses<3&&((E.homeless||0)>0||(E.population||0)>=((E.beds||0)-2)&&carriers<18&&idleC<7)&&t>900)addN(goals,'house2',2);
  if(!houseSite&&houses===0&&built('wood')&&built('quarry'))add(goals,'house');

  // ask is the authoritative placement API. E.spots contains the previous ask's answers.
  var asks=goals.slice(0,6);
  for(var extra of ['guard','farm','house2','coalmine','ironmine','barracks'])if(asks.length<6&&asks.indexOf(extra)<0)asks.push(extra);
  if(asks.length)out.push(['ask',{spots:asks}]);

  // One affordable site at a time; account for material already promised to every unfinished site.
  if(siteN<2){
   for(var type of goals){var list=E.spots&&E.spots[type];if(!list||!list.length||!enough(type))continue;
    var spot=list[0];out.push(['place',{type:type,x:spot.x,y:spot.y}]);break;
   }
  }
  // A site gets first call on builders and deliveries; production and military buildings get worker priority.
  var site=sites.find(function(b){return !b.prio;});if(site)out.push(['priority',{b:site.id,on:true}]);
  var priorities=['wood','quarry','saw','farm','waterhut','mill','bakery','coalmine','ironmine','smelter','smith','weaponsmith','barracks'];
  for(var b of town)if(b.built&&priorities.indexOf(b.type)>=0&&!b.prio){out.push(['priority',{b:b.id,on:true}]);break;}
  if(siteN>=2&&idleC>6&&carriers>10){
   if((people.builder||0)<3&&st('hammer')>0&&(P.builderAt||0)<=t){out.push(['profession',{role:'builder',d:1}]);P.builderAt=t+180;}
   else if((people.digger||0)<3&&st('shovel')>0&&(P.diggerAt||0)<=t){out.push(['profession',{role:'digger',d:1}]);P.diggerAt=t+180;}
  }

  // Set barracks production once the entire weapon chain exists. Keep a mobile reserve instead of emptying it into posts.
  if(built('barracks')&&built('weaponsmith')){
   var total=t<1500?24:t<3000?34:44,targets={sword:Math.ceil(total*.36),spear:Math.ceil(total*.34)};
   targets.bow=total-targets.sword-targets.spear;
   var A=E.army||{},old=A.target||{};
   for(var kind of ['sword','spear','bow'])if(old[kind]!==targets[kind])out.push(['armyTarget',{kind:kind,set:targets[kind]}]);
   var reserve=t<2400?8:10;if(A.reserve!==reserve)out.push(['armyReserve',{set:reserve}]);
   if(Array.isArray(A.keep))for(var ki=0;ki<A.keep.length&&ki<3;ki++)if(A.keep[ki]&&A.keep[ki].keep!==0)out.push(['weaponKeep',{k:ki,set:0}]);
  }else if(E.army&&E.army.reserve!==8)out.push(['armyReserve',{set:8}]);

  if(t>0&&t%600<2&&t!==(P.noteAt||-1){out.push(['note',{text:'Ask-build: '+goals.slice(0,4).join('/')+'; sites '+siteN+', carriers '+carriers+' idle '+idleC+', soldiers '+soldiers.length+', posts '+mil.length+', ore '+(ore('coal')?'C':'-')+(ore('ironore')?'I':'-')+'.'}]);P.noteAt=t;}
 }

 // Combat: reinforce a live siege, otherwise concentrate the entire free field army on one target.
 var free=soldiers.filter(function(s){return !s.order&&!s.defends&&!s.fighting;});
 var attacking=soldiers.filter(function(s){return s.order&&s.order.k==='attack';});
 var activeId=attacking.length?attacking[0].order.b:null;
 function enemyById(id){return enemy.find(function(b){return b.id===id;});}
 function valid(b){return b&&(b.military||['guard','tower','castle','hq'].indexOf(b.type)>=0)&&!(b.remembered&&Number.isFinite(b.seenAt)&&t-b.seenAt>900);}
 function need(b){var n=b.type==='guard'? (b.manned===false?4:10):b.type==='tower'?(b.manned===false?7:18):b.type==='castle'?(b.manned===false?10:27):(b.manned===false?8:18);if((view.gold||.6)<.8)n=Math.ceil(n*1.25);return n;}
 var targets=enemy.filter(valid),activeTarget=activeId?enemyById(activeId):null;
 if(attacking.length&&activeTarget){
  var reinforcements=free.filter(function(s){return !s.held;});
  if(reinforcements.length&&attacking.length+reinforcements.length>=need(activeTarget))out.push(['attack',{ids:reinforcements.map(function(s){return s.id;}),b:activeTarget.id}]);
 }else if(!attacking.length&&targets.length){
  var cx=free.length?free.reduce(function(a,s){return a+s.x;},0)/free.length:home.x,cy=free.length?free.reduce(function(a,s){return a+s.y;},0)/free.length:home.y;
  var milTargets=targets.filter(function(b){return b.type!=='hq';}),pool=milTargets.length?milTargets:targets,best=null,bs=1e9;
  for(var eb of pool){var door=eb.door||{x:eb.x+eb.w/2,y:eb.y+eb.h/2},score=d({x:cx,y:cy},door)+(eb.manned===false?-8:0)+(eb.type==='tower'?4:eb.type==='castle'?12:0)+(eb.remembered?Math.min(24,(t-(eb.seenAt||0))/35):0);if(score<bs){bs=score;best=eb;}}
  if(best&&free.length>=need(best))out.push(['attack',{ids:free.map(function(s){return s.id;}),b:best.id}]);
 }else if(!attacking.length&&foes.length&&free.length>=6){
  var threat=null,td=1e9;for(var f of foes)for(var own of (view.buildings||[])){var qd=d(f,{x:own.x+own.w/2,y:own.y+own.h/2});if(qd<td){td=qd;threat=f;}}
  if(threat&&td<22){var group=free.slice(0,Math.max(4,free.length-4));out.push(['march',{ids:group.map(function(s){return s.id;}),tx:Math.round(threat.x),ty:Math.round(threat.y),form:'block',am:true}]);}
 }

 // A small map probe is a plain move; release it on arrival so posts can call soldiers back.
 if(!attacking.length&&!foes.length&&(!P.scoutIds||!P.scoutIds.length)&&!targets.length&&free.length>=12&&t>900&&(P.scoutAt||0)<=t){
  var w2=map.w||240,h2=map.h||240,seq=P.scoutI||0,pts=me===1?[[w2-12,h2-12],[w2-12,12],[12,h2-12]]:[[12,12],[12,h2-12],[w2-12,12]],p=pts[seq%pts.length],grp=free.slice(0,5);
  out.push(['march',{ids:grp.map(function(s){return s.id;}),tx:p[0],ty:p[1],form:'block',am:false}]);P.scoutIds=grp.map(function(s){return s.id;});P.scoutStart=t;P.scoutI=seq+1;P.scoutAt=t+150;
 }
 if(Array.isArray(P.scoutIds)&&P.scoutIds.length){var ss=soldiers.filter(function(s){return P.scoutIds.indexOf(s.id)>=0;}),arrived=ss.length&&ss.every(function(s){var o=s.order||{};return o.k!=='move'||d(s,{x:o.x,y:o.y})<7;});if(arrived||!ss.length||t-(P.scoutStart||0)>180){if(ss.length)out.push(['release',{ids:ss.map(function(s){return s.id;}),stop:true}]);P.scoutIds=[];P.scoutStart=0;}}
 return out.slice(0,50);
}
