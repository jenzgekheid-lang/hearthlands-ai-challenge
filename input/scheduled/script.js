// ChatGPT scheduled — border-first bootstrap, early geology, sustainable mining and a protected field army.
// Staff one outpost before expanding; secure ore before the quarry consumes the pickaxe, then scale housing, food and metal.
// Game version: 214
function think(view){
 if(!view||view.over)return [];
 var E=view.economy,out=[],t=view.t||0,me=view.me,map=view.map||{};
 var P=memory.plan||(memory.plan={}),soldiers=view.soldiers||[],enemy=view.enemy||{},foes=enemy.soldiers||[],enemyBuildings=enemy.buildings||[];
 function d2(a,b){var x=a.x-b.x,y=a.y-b.y;return x*x+y*y;}
 if(E&&!view.armyOnly){
  var town=E.town||[],stock=E.stock||{},people=E.people||{},idle=E.idle||{},units=E.units||[],spots=E.spots||{};
  var carriers=people.carrier||0,idleC=idle.carrier||0,sites=town.filter(function(b){return !b.built;}),siteN=sites.length;
  function st(k){return stock[k]||0;}
  function cnt(k){return town.filter(function(b){return b.type===k;}).length;}
  function built(k){return town.some(function(b){return b.type===k&&b.built;});}
  function hasTip(q){return (E.tips||[]).some(function(x){return (x.text||'').toLowerCase().indexOf(q.toLowerCase())>=0;});}
  var oreList=E.ore||[];
  function hasOre(k){
   if(oreList.some(function(o){return o.ore===k;}))return true;
   if(map.ore&&map.oreNames&&map.owner){var v=map.oreNames.indexOf(k)+1;for(var i=0;i<map.ore.length;i++)if(map.ore[i]===v&&map.owner[i]===me)return true;}
   return false;
  }
  function oreCount(k){var n=oreList.filter(function(o){return o.ore===k;}).length;if(n)return n;if(map.ore&&map.oreNames&&map.owner){var v=map.oreNames.indexOf(k)+1;for(var i=0;i<map.ore.length;i++)if(map.ore[i]===v&&map.owner[i]===me)n++;}return n;}
  var unsearched=(E.unsearched||[]).slice();
  if(!unsearched.length&&map.known&&map.ter&&map.ore&&map.owner&&(P.geoScanAt||0)<=t){
   for(var y=1;y<(map.h||0)-1;y++)for(var x=1;x<(map.w||0)-1;x++){var ix=y*map.w+x;if(map.known[ix]>0&&map.ter[ix]===2&&map.ore[ix]===0&&map.owner[ix]===me)unsearched.push({x:x,y:y});}
   P.geoScanAt=t+20;
  }
  var geos=units.filter(function(u){return u.role==='geologist';}),explorers=units.filter(function(u){return u.role==='explorer';});
  var guards=cnt('guard'),towers=cnt('tower'),castles=cnt('castle'),milN=guards+towers+castles;
  var COST={wood:[2,2],quarry:[2,3],saw:[3,4],house:[3,3],house2:[5,6],fisher:[3,2],forest:[3,1],guard:[2,3],tower:[5,5],castle:[8,12],farm:[6,6],waterhut:[3,4],mill:[3,3],bakery:[4,5],pigfarm:[6,6],butcher:[4,4],coalmine:[4,1],ironmine:[4,1],smelter:[4,6],smith:[3,5],weaponsmith:[5,7],barracks:[4,5]};
  function freeGoods(it){var n=st(it);for(var b of sites)n-=Math.max(0,(b.cost&&b.cost[it]||0)-(b.delivered&&b.delivered[it]||0));return n;}
  function affordable(k){var c=COST[k]||[0,0];return freeGoods('plank')>=c[0]&&freeGoods('stone')>=c[1];}
  var goals=[];
  function want(k,limit){if(cnt(k)<(limit||1)&&goals.indexOf(k)<0)goals.push(k);}

  // Keep a small field reserve, but let the first priority outpost recruit its garrison.
  var reserveTarget=built('barracks')&&soldiers.length>=24?8:4;
  if(E.army&&E.army.reserve!==reserveTarget)out.push(['armyReserve',{set:reserveTarget}]);

  // Geology comes before quarry staffing: the opening pickaxe must not be consumed by the stonecutter first.
  if(unsearched.length&&!geos.length&&st('pick')>0&&idleC>0&&carriers>3&&(P.geoTry||0)<=t&&t<3600){
   out.push(['profession',{role:'geologist',d:1}]);P.geoTry=t+30;
  }
  for(var g of geos)if(!g.busy&&!g.moving&&unsearched.length&&(P.geoSend||0)<=t){
   var q=unsearched[0],best=d2(g,q);for(var uq of unsearched){var dd=d2(g,uq);if(dd<best){q=uq;best=dd;}}
   out.push(['sendUnit',{u:g.id,tx:q.x,ty:q.y}]);P.geoSend=t+25;break;
  }
  if(geos.length&&!unsearched.length&&!geos.some(function(g){return g.busy||g.moving;})&&t>180&&(P.geoRetire||0)<=t){
   out.push(['profession',{role:'geologist',d:-1}]);P.geoRetire=t+90;P.geoRetired=true;
  }

  // New opening: claim a border foothold immediately, then grow a compact economy around it.
  want('guard',1);
  want('wood',1);
  if(built('wood'))want('saw',1);
  var houseCount=cnt('house')+cnt('house2')+cnt('house3');
  if(!houseCount&&t>90)want('house',1);
  if(!geos.length&&(hasOre('coal')||hasOre('ironore'))&&cnt('quarry')<1)want('quarry',1);
  if(t>360&&!unsearched.length&&!geos.length&&!hasOre('coal')&&!hasOre('ironore')&&guards<2)want('guard',2);

  var coal=hasOre('coal'),ironOre=hasOre('ironore'),fishSpots=spots.fisher||[];
  if((coal||ironOre||cnt('coalmine')||cnt('ironmine'))&&cnt('fisher')<1)want('fisher',1);
  if(coal)want('coalmine',Math.min(2,Math.max(1,oreCount('coal'))));
  if(ironOre)want('ironmine',Math.min(2,Math.max(1,oreCount('ironore'))));
  if(built('coalmine')&&built('ironmine'))want('smelter',1);
  if(built('smelter'))want('smith',1);
  if(built('smith'))want('weaponsmith',1);
  if(built('weaponsmith'))want('barracks',1);

  // Food is expanded on actual mine starvation, not built as an idle chain before there is a consumer.
  var coalHungry=hasTip('needs bread or fish'),ironHungry=hasTip('needs meat or fish');
  if(coalHungry||ironHungry)want('farm',1);
  if((coalHungry||ironHungry)&&built('farm'))want('waterhut',1);
  if(coalHungry&&built('farm'))want('mill',1);
  if(coalHungry&&built('mill')&&built('waterhut'))want('bakery',1);
  if(ironHungry&&built('farm')&&built('waterhut'))want('pigfarm',1);
  if(ironHungry&&built('pigfarm'))want('butcher',1);

  if((hasTip('no grown trees')||(E.land&&typeof E.land.trees==='number'&&E.land.trees<12))&&t>240)want('forest',1);
  if(t>900&&st('log')<4&&cnt('wood')<2&&(E.land&&E.land.trees>8))want('wood',2);
  if(t>900&&st('stone')<6&&cnt('quarry')<2&&!geos.length)want('quarry',2);
  if(t>900&&st('plank')<6&&st('log')>4&&cnt('saw')<2)want('saw',2);
  if(t>900&&st('fish')<4&&cnt('fisher')<2)want('fisher',2);

  houseCount=cnt('house')+cnt('house2')+cnt('house3');
  if(t>360&&houseCount<4&&(E.homeless>0||((E.population||0)>=(E.beds||0)-2))&&(P.houseAt||0)<=t)want('house2',4);
  if(t>900&&houseCount<5&&carriers<8&&((E.population||0)>=(E.beds||0)-4)&&(P.houseAt||0)<=t)want('house2',4);

  // Add border buildings only after recruitment can replace their garrisons.
  if(built('barracks')&&soldiers.length>=18&&t>900)want('guard',2);
  if(built('barracks')&&soldiers.length>=28&&t>1800)want('tower',1);
  if(built('barracks')&&soldiers.length>=38&&t>3000)want('tower',2);

  // Ask for legal sites every turn; E.spots answers the previous turn's ask.
  var askTypes=[],rank=['guard','wood','saw','house','quarry','fisher','coalmine','ironmine','smelter','smith','weaponsmith','barracks','farm','waterhut','mill','bakery','pigfarm','butcher','forest','house2','tower','castle'];
  goals.sort(function(a,b){return rank.indexOf(a)-rank.indexOf(b);});
  if(goals.length>6){var start=(P.askI||0)%goals.length;for(var ai=0;ai<6;ai++)askTypes.push(goals[(start+ai)%goals.length]);P.askI=(start+1)%goals.length;}
  else{for(var gt of goals)if(askTypes.length<6&&askTypes.indexOf(gt)<0)askTypes.push(gt);for(var extra of rank)if(askTypes.length<6&&askTypes.indexOf(extra)<0)askTypes.push(extra);}
  out.push(['ask',{spots:askTypes}]);

  // One new site per turn and at most two unfinished; reserve promised materials first.
  if(siteN<2&&Array.isArray(P.asked))for(var type of goals){
   if(P.asked.indexOf(type)<0)continue;
   var list=spots[type]||[];if(!list.length||!affordable(type))continue;
   var spot=list[0];if(type==='fisher'&&(spot.n||0)<=0)continue;
   out.push(['place',{type:type,x:spot.x,y:spot.y}]);if(type==='house2')P.houseAt=t+180;break;
  }
  P.asked=askTypes;

  // Sites and the strategic spine get staffing/material priority; outposts must actually be manned to claim land.
  for(var site of sites)if(!site.prio)out.push(['priority',{b:site.id,on:true}]);
  var prioTypes=['guard','tower','castle','wood','saw','quarry','fisher','coalmine','ironmine','smelter','smith','weaponsmith','barracks','farm','waterhut','mill','bakery','pigfarm','butcher','forest'];
  for(var b of town)if(b.built&&prioTypes.indexOf(b.type)>=0&&!b.prio)out.push(['priority',{b:b.id,on:true}]);
  if(siteN>0&&carriers>4&&idleC>0){
   if((people.builder||0)<2&&st('hammer')>0&&(P.builderAt||0)<=t){out.push(['profession',{role:'builder',d:1}]);P.builderAt=t+90;}
   if((people.digger||0)<2&&st('shovel')>0&&(P.diggerAt||0)<=t){out.push(['profession',{role:'digger',d:1}]);P.diggerAt=t+90;}
  }

  // Housing grows with population pressure; don't create twenty idle carriers at the start.
  if(built('barracks'))P.hasBarracks=true;
  if(built('barracks')&&built('weaponsmith')){
   var total=t<900?20:t<1800?28:t<3000?36:42,targets={sword:Math.ceil(total*.4),spear:Math.ceil(total*.3)};
   targets.bow=total-targets.sword-targets.spear;var A=E.army||{},old=A.target||{};
   for(var kind of ['sword','spear','bow'])if(old[kind]!==targets[kind])out.push(['armyTarget',{kind:kind,set:targets[kind]}]);
   if(Array.isArray(A.keep))for(var ki=0;ki<A.keep.length&&ki<3;ki++)if(A.keep[ki]&&A.keep[ki].keep!==0)out.push(['weaponKeep',{k:ki,set:0}]);
  }

  if(t>300&&explorers.length<1&&carriers>8&&idleC>1&&(P.expAt||0)<=t){out.push(['profession',{role:'explorer',d:1}]);P.expAt=t+180;}
  if(explorers.length){
   var ex=explorers[0];
   if(!ex.busy&&!ex.moving&&(P.expSend||0)<=t&&map.known&&map.ter){
    var w=map.w||0,h=map.h||0,bestSpot=null,bestScore=-1e9;
    for(var yy=2;yy<h-2;yy+=2)for(var xx=2;xx<w-2;xx+=2){var ii=yy*w+xx;if(map.known[ii]===0||map.ter[ii]!==0||(map.occupied&&map.occupied[ii]))continue;
     var edge=0;if(map.known[ii-1]===0)edge++;if(map.known[ii+1]===0)edge++;if(map.known[ii-w]===0)edge++;if(map.known[ii+w]===0)edge++;
     if(!edge)continue;var dd=d2(ex,{x:xx,y:yy}),homeD=d2({x:xx,y:yy},{x:(w/2),y:(h/2)}),score=edge*1000+Math.min(homeD,10000)*.08-dd*.25;
     if(score>bestScore){bestScore=score;bestSpot={x:xx,y:yy};}
    }
    if(bestSpot){out.push(['sendUnit',{u:ex.id,tx:bestSpot.x,ty:bestSpot.y}]);P.expSend=t+120;}
   }
  }

  if(t>0&&t%600<2&&(P.noteAt||-1)!==t){out.push(['note',{text:'Outpost plan: geo '+geos.length+', unsearched '+unsearched.length+', ore '+(coal?'C':'-')+(ironOre?'I':'-')+', sites '+siteN+', pop '+(E.population||0)+'/'+(E.beds||0)+', field '+soldiers.length+', posts '+milN+'.'}]);P.noteAt=t;}
 }

 // Combat is deliberately delayed until a barracks-backed field army exists.
 var freeSoldiers=soldiers.filter(function(s){return !s.order&&!s.defends&&!s.fighting;}),attackers=soldiers.filter(function(s){return s.order&&s.order.k==='attack';});
 function valid(b){return b&&(b.military||['guard','tower','castle','hq'].indexOf(b.type)>=0)&&!(b.remembered&&t-(b.seenAt||0)>600);}
 function byId(id){return enemyBuildings.find(function(b){return b.id===id;});}
 function need(b){
  var n=b.type==='guard'?(b.manned===false?12:18):b.type==='tower'?(b.manned===false?16:23):b.type==='castle'?(b.manned===false?20:26):(b.manned===false?22:27);
  var door=b.door||{x:b.x+b.w/2,y:b.y+b.h/2},near=0;for(var f of foes)if(d2(f,door)<20*20)near++;
  n+=Math.min(4,near);if((view.gold||.6)<.8)n=Math.ceil(n*1.2);return n;
 }
 var active=attackers.length?byId(attackers[0].order.b):null;
 if(attackers.length){
  if(!valid(active))out.push(['release',{ids:attackers.map(function(s){return s.id;}),stop:true}]);
  else if(attackers.length<need(active)&&attackers.length+freeSoldiers.length>=need(active))out.push(['attack',{ids:freeSoldiers.map(function(s){return s.id;}),b:active.id}]);
 }else{
  var threatened=null,threatDist=24*24;
  for(var foe of foes)for(var own of (view.buildings||[])){var qd=d2(foe,{x:own.x+own.w/2,y:own.y+own.h/2});if(qd<threatDist){threatDist=qd;threatened=foe;}}
  if(threatened&&freeSoldiers.length>=6&&(P.defendAt||0)<=t){var defenders=freeSoldiers.slice(0,Math.min(8,freeSoldiers.length));out.push(['march',{ids:defenders.map(function(s){return s.id;}),tx:Math.round(threatened.x),ty:Math.round(threatened.y),form:'block',am:true}]);P.defendAt=t+15;}
  else if(P.hasBarracks&&soldiers.length>=24){
   var targets=enemyBuildings.filter(valid),milTargets=targets.filter(function(b){return b.type!=='hq';}),pool=milTargets.length?milTargets:targets,best=null,bestScore=1e18;
   var cx=freeSoldiers.length?freeSoldiers.reduce(function(a,s){return a+s.x;},0)/freeSoldiers.length:(map.w||240)/2,cy=freeSoldiers.length?freeSoldiers.reduce(function(a,s){return a+s.y;},0)/freeSoldiers.length:(map.h||240)/2;
   for(var eb of pool){var door=eb.door||{x:eb.x+eb.w/2,y:eb.y+eb.h/2},score=d2({x:cx,y:cy},door)+(eb.manned===false?-500:0)+(eb.type==='tower'?300:eb.type==='castle'?900:0)+(eb.remembered?Math.min(400,(t-(eb.seenAt||0))/2):0);if(score<bestScore){bestScore=score;best=eb;}}
   if(best){var threshold=need(best);if(freeSoldiers.length>=threshold+3){var sendN=Math.min(freeSoldiers.length-3,Math.max(threshold,freeSoldiers.length-6));out.push(['attack',{ids:freeSoldiers.slice(0,sendN).map(function(s){return s.id;}),b:best.id}]);}}
  }
 }
 return out.slice(0,50);
}