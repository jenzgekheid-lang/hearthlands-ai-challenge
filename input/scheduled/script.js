// ChatGPT scheduled — independent economy-first, adaptive garrison and concentrated field army.
// Build housing and a compact supply chain, unlock ore/tools/weapons, then siege enemy military buildings.
// Game version: 207
function think(view){
 if(!view||view.over)return [];
 var M=memory;if(!M.plan)M.plan={};var P=M.plan,out=[],t=view.t||0,me=view.me,E=view.economy;
 if(!E)return out;
 var town=E.town||[],stock=E.stock||{},people=E.people||{},idle=E.idle||{},map=view.map||{},w=map.w||240,h=map.h||240;
 var units=E.units||[],soldiers=view.soldiers||[],foes=(view.enemy&&view.enemy.soldiers)||[],enemyBuildings=(view.enemy&&view.enemy.buildings)||[];
 var hq=town.find(function(b){return b.type==='hq';}),home=hq?{x:hq.x+hq.w/2,y:hq.y+hq.h/2}:{x:w/2,y:h/2};
 var carriers=people.carrier||0,idleC=idle.carrier||0,siteCount=town.filter(function(b){return !b.built;}).length;
 function st(k){return stock[k]||0;}
 function cnt(k){return town.filter(function(b){return b.type===k;}).length;}
 function built(k){return town.filter(function(b){return b.type===k&&b.built;}).length;}
 function pending(k){return town.some(function(b){return b.type===k&&!b.built;});}
 function dist(a,b){return Math.hypot(a.x-b.x,a.y-b.y);}
 function owed(k){var n=0;for(var i=0;i<town.length;i++){var b=town[i];if(!b.built)n+=Math.max(0,(b.cost&&b.cost[k]||0)-(b.delivered&&b.delivered[k]||0));}return n;}
 function freeStock(k){return st(k)-owed(k);}
 function oreSeen(k){return (E.ore||[]).some(function(o){return o.ore===k;});}
 function ownMil(){return town.filter(function(b){return b.built&&['guard','tower','castle'].indexOf(b.type)>=0;});}
 function mineLow(k){var b=town.find(function(q){return q.type===k&&q.built;});return !!b&&st('fish')<3&&(b.inputs&&b.inputs.fish||0)<2;}

 function scoreSpot(type,x,y){
  var d=Math.hypot(x+1.5-home.x,y+1.5-home.y),s=-Math.abs(d-22)*.22,rr=type==='wood'?12:type==='quarry'?14:type==='fisher'?10:6;
  var tree=0,rock=0,water=0,fish=0,neutral=0,oreD=1e6;
  for(var j=0;j<(E.ore||[]).length;j++){var o=E.ore[j];if((type==='coalmine'&&o.ore==='coal')||(type==='ironmine'&&o.ore==='ironore')||(type==='goldmine'&&o.ore==='goldore'))oreD=Math.min(oreD,Math.hypot(o.x-x-1.5,o.y-y-1.5));}
  if(map.owner&&map.ter)for(var yy=Math.max(0,y-rr);yy<=Math.min(h-1,y+rr);yy+=2)for(var xx=Math.max(0,x-rr);xx<=Math.min(w-1,x+rr);xx+=2){
   var z=yy*w+xx;if(map.owner[z]===me){if(map.tree&&map.tree[z])tree+=map.tree[z]===2?2:1;if(map.stone&&map.stone[z])rock+=Math.min(3,map.stone[z]);if(map.ter[z]===1){water++;if(map.fish)fish+=Math.min(4,map.fish[z]);}}
   else if(map.owner[z]===0)neutral++;
  }
  if(type==='wood')s+=tree*.75;if(type==='quarry')s+=rock*.55;if(type==='fisher')s+=water*.65+fish*.8;
  if(type==='guard')s+=neutral*.8;if(type==='coalmine'||type==='ironmine'||type==='goldmine')s+=oreD<1e5?Math.max(0,18-oreD)*1.4-30: -30;
  return s;
 }
 function spot(type){
  var dim={house2:[5,4],house3:[6,5],tower:[5,4],castle:[8,7]},sz=dim[type]||[3,3],sw=sz[0],sh=sz[1],best=null,bs=-1e9;
  function test(x,y){x=Math.floor(x);y=Math.floor(y);if(x<0||y<0||x+sw>w||y+sh>h)return;if(map.owner&&map.owner[y*w+x]!==me)return;
   if(['coalmine','ironmine','goldmine'].indexOf(type)>=0&&map.ter&&map.ter[y*w+x]!==2)return;
   if(typeof canPlace==='function'&&!canPlace(type,x,y))return;var s=scoreSpot(type,x,y);if(s>bs){bs=s;best={x:x,y:y};}}
  var ls=E.spots&&E.spots[type];if(Array.isArray(ls))for(var q=0;q<ls.length;q++)test(ls[q].x,ls[q].y);
  if(!best&&map.owner){var r=t<1800?58:85,x0=Math.max(0,Math.floor(home.x-r)),x1=Math.min(w-sw,Math.ceil(home.x+r)),y0=Math.max(0,Math.floor(home.y-r)),y1=Math.min(h-sh,Math.ceil(home.y+r));
   for(var y=y0;y<=y1;y++)for(var x=x0;x<=x1;x++)if(map.owner[y*w+x]===me)test(x,y);
  }
  return best;
 }
 var COST={wood:[2,2],forest:[3,1],saw:[3,4],fisher:[3,2],quarry:[2,3],house:[3,3],house2:[5,6],house3:[10,12],guard:[2,3],tower:[5,5],castle:[8,12],coalmine:[4,1],ironmine:[4,1],goldmine:[5,1],smelter:[4,6],smith:[3,5],weaponsmith:[5,7],barracks:[4,5],farm:[6,6],waterhut:[3,4],mill:[3,3],bakery:[4,5]};
 function place(k){if(siteCount>=(t<1500?3:4)||pending(k))return false;var c=COST[k]||[0,0],r=t<500?0:1;if(freeStock('plank')<c[0]+r||freeStock('stone')<c[1]+r)return false;var p=spot(k);if(!p)return false;out.push(['place',{type:k,x:p.x,y:p.y}]);siteCount++;return true;}

 if(!view.armyOnly){
  var geos=units.filter(function(u){return u.role==='geologist';});
  if(!geos.length&&t>90&&carriers>4&&idleC>0&&st('pick')>0&&(E.unsearched||[]).length)out.push(['profession',{role:'geologist',d:1}]);
  for(var g of geos)if(!g.busy&&!g.moving&&(E.unsearched||[]).length&&t>=(P.geoSend||0)){
   var p=E.unsearched[0];if(P.geoTarget&&E.unsearched.length>1){var old=E.unsearched.find(function(q){return q.x===P.geoTarget[0]&&q.y===P.geoTarget[1];});if(old)p=old;}
   var fail=(E.log||[]).filter(function(e){return e.what==='pathfail'&&e.a===g.id;});if(fail.length&&fail[fail.length-1].t>(P.geoFailSeen||-1)){P.geoFailSeen=fail[fail.length-1].t;P.geoSkip=[p.x,p.y];P.geoSkipUntil=t+120;}
   if(P.geoSkip&&P.geoSkipUntil>t&&p.x===P.geoSkip[0]&&p.y===P.geoSkip[1])p=E.unsearched.find(function(q){return q.x!==P.geoSkip[0]||q.y!==P.geoSkip[1];})||p;
   out.push(['sendUnit',{u:g.id,tx:p.x,ty:p.y}]);P.geoTarget=[p.x,p.y];P.geoSend=t+15;
  }

  var goals=[];function add(ok,k){if(ok&&!pending(k)&&goals.indexOf(k)<0)goals.push(k);}
  var houses=cnt('house')+cnt('house2')+cnt('house3');
  add(!houses,'house2');add(!cnt('wood'),'wood');add(!cnt('quarry'),'quarry');add(!cnt('saw')&&built('wood')>0,'saw');add(!cnt('fisher'),'fisher');add(!cnt('forest')&&built('wood')>0&&t>500,'forest');
  if(!pending('house3')&&t>650&&E.beds>0&&E.population>=E.beds-5&&carriers<30)add(true,'house3');
  if(!pending('house2')&&t>1000&&carriers<9&&idleC<4&&houses)add(true,'house2');
  add(t>850&&cnt('wood')<2&&st('log')<5,'wood');add(t>850&&cnt('saw')<2&&st('plank')<12&&st('log')>2,'saw');add(t>850&&cnt('quarry')<2&&st('stone')<12,'quarry');
  add((mineLow('coalmine')||mineLow('ironmine'))&&cnt('fisher')<2,'fisher');
  var coal=oreSeen('coal'),ironOre=oreSeen('ironore'),goldOre=oreSeen('goldore');
  add(coal&&!cnt('coalmine'),'coalmine');add(ironOre&&!cnt('ironmine'),'ironmine');add(goldOre&&!cnt('goldmine')&&built('barracks')>0,'goldmine');
  add(built('coalmine')&&built('ironmine')&&!cnt('smelter'),'smelter');add(built('smelter')&&st('iron')>0&&!cnt('smith'),'smith');
  add(built('smith')&&!cnt('weaponsmith'),'weaponsmith');add(built('weaponsmith')&&!cnt('barracks'),'barracks');
  var mil=ownMil(),fn=soldiers.length;
  add(t>500&&mil.length<1&&built('wood')&&built('quarry'),'guard');add(t>1500&&mil.length<2&&carriers>12&&fn>=8,'guard');
  add(t>2300&&mil.length<3&&carriers>16&&fn>=16,'tower');add(t>3100&&mil.length<4&&carriers>20&&fn>=24,'castle');
  if(siteCount>=2&&idleC>6&&carriers>12){
   if((people.builder||0)<3&&st('hammer')>0&&(P.builderAt||0)<=t){out.push(['profession',{role:'builder',d:1}]);P.builderAt=t+180;}
   else if((people.digger||0)<3&&st('shovel')>0&&(P.diggerAt||0)<=t){out.push(['profession',{role:'digger',d:1}]);P.diggerAt=t+180;}
  }
  if(!siteCount&&carriers>20&&(people.builder||0)>2&&idleC>8&&t>1800)out.push(['profession',{role:'builder',d:-1}]);
  for(var gi=0;gi<goals.length;gi++)if(place(goals[gi]))break;

  var prios=['wood','saw','quarry','fisher','coalmine','ironmine','smelter','smith','weaponsmith','barracks','guard','tower','castle'],sent=0;
  for(var b of town)if(sent<2&&!b.prio&&b.built&&prios.indexOf(b.type)>=0){out.push(['priority',{b:b.id,on:true}]);sent++;}
  for(var s of town)if(sent<3&&!s.built&&!s.prio&&siteCount){out.push(['priority',{b:s.id,on:true}]);sent++;}

  var exps=units.filter(function(u){return u.role==='explorer';});
  if(!exps.length&&t>1200&&carriers>15&&idleC>4&&freeStock('plank')>5&&(P.explorerAt||0)<=t){out.push(['profession',{role:'explorer',d:1}]);P.explorerAt=t+180;}
  for(var ex of exps)if(!ex.busy&&!ex.moving&&(P.exploreSend||0)<=t){var seq=P.exploreI||0,ox=home.x<w/2?w-14:14,oy=home.y<h/2?h-14:14,off=[0,16,-16,30,-30][seq%5];out.push(['sendUnit',{u:ex.id,tx:Math.max(6,Math.min(w-6,ox+off)),ty:Math.max(6,Math.min(h-6,oy-off))}]);P.exploreI=seq+1;P.exploreSend=t+90;}
 }

 if(!view.armyOnly&&built('barracks')&&built('weaponsmith')){
  var A=E.army||{},cur=soldiers.length,total=t<1200?12:t<1800?18:t<2400?24:t<3000?30:t<3500?36:42;
  if(idleC<3||carriers<10)total=Math.min(total,Math.max(12,cur));total=Math.max(total,cur);
  var want={sword:Math.ceil(total*.36),spear:Math.ceil(total*.34)};want.bow=Math.max(0,total-want.sword-want.spear);
  for(var k of ['sword','spear','bow'])if((A.target||{})[k]!==want[k])out.push(['armyTarget',{kind:k,set:want[k]}]);
  var reserve=t<1800?8:t<3000?12:16;if(A.reserve!==reserve)out.push(['armyReserve',{set:reserve}]);
  if(Array.isArray(A.keep))for(var ki=0;ki<A.keep.length&&ki<3;ki++)if(A.keep[ki]&&A.keep[ki].keep!==0)out.push(['weaponKeep',{k:ki,set:0}]);
 }

 var idleField=soldiers.filter(function(s){return !s.order&&!s.defends&&!s.held&&!s.fighting;}),active=soldiers.filter(function(s){return s.order&&s.order.k==='attack';});
 var targetId=active.length?active[0].order.b:null;
 function byId(id){return enemyBuildings.find(function(b){return b.id===id;});}
 function need(b){var n=b.manned===false?5:({guard:10,tower:16,castle:24,hq:16}[b.type]||12);if(b.remembered)n+=3;return Math.max(5,Math.ceil(n*(1.12-.28*(view.gold||.6))));}
 function valid(b){return !!b&&(b.military||['guard','tower','castle','hq'].indexOf(b.type)>=0)&&!(b.remembered&&Number.isFinite(b.seenAt)&&t-b.seenAt>600);}
 var targets=enemyBuildings.filter(valid),at=targetId?byId(targetId):null;
 if(active.length&&(!at||!valid(at))){out.push(['release',{ids:active.map(function(s){return s.id;}),stop:true}]);active=[];at=null;P.attackId=null;}

 if(Array.isArray(P.scoutIds)&&P.scoutIds.length){
  var ss=soldiers.filter(function(s){return P.scoutIds.indexOf(s.id)>=0;}),arr=ss.length&&ss.every(function(s){var o=s.order||{};return o.k!=='move'||dist(s,{x:o.x,y:o.y})<7;});
  if(targets.length||arr||t-(P.scoutStart||0)>150||!ss.length){if(ss.length)out.push(['release',{ids:ss.map(function(s){return s.id;}),stop:true}]);P.scoutIds=[];P.scoutStart=0;}
 }
 if(Array.isArray(P.defendIds)&&P.defendIds.length&&t>(P.defendUntil||0)){var ds=soldiers.filter(function(s){return P.defendIds.indexOf(s.id)>=0;});if(ds.length)out.push(['release',{ids:ds.map(function(s){return s.id;}),stop:true}]);P.defendIds=[];P.defendUntil=0;}

 if(!active.length&&foes.length&&idleField.length>=4){
  var threat=null,td=1e9;for(var f of foes)for(var own of (view.buildings||[])){var d=Math.hypot(f.x-own.x-own.w/2,f.y-own.y-own.h/2);if(d<td){td=d;threat=f;}}
  if(threat&&td<20){var defend=idleField.slice(0,Math.min(8,idleField.length));out.push(['march',{ids:defend.map(function(s){return s.id;}),tx:Math.round(threat.x),ty:Math.round(threat.y),form:'block',am:true}]);P.defendIds=defend.map(function(s){return s.id;});P.defendUntil=t+60;idleField=idleField.filter(function(s){return P.defendIds.indexOf(s.id)<0;});}
 }
 if(active.length&&at){var extra=idleField.slice(0,Math.max(0,need(at)-active.length));if(extra.length){out.push(['attack',{ids:extra.map(function(s){return s.id;}),b:at.id}]);idleField=idleField.filter(function(s){return extra.indexOf(s)<0;});}}
 else if(!active.length&&targets.length){
  var cx=idleField.length?idleField.reduce(function(a,s){return a+s.x;},0)/idleField.length:home.x,cy=idleField.length?idleField.reduce(function(a,s){return a+s.y;},0)/idleField.length:home.y;
  var milTargets=targets.filter(function(b){return b.type!=='hq';}),pool=milTargets.length?milTargets:targets,best=null,bs=1e9;
  for(var b of pool){var d=dist({x:cx,y:cy},b.door||{x:b.x+b.w/2,y:b.y+b.h/2}),pen=b.manned===false?-12:0;if(b.type==='tower')pen+=5;if(b.type==='castle')pen+=14;if(b.remembered)pen+=Math.min(20,(t-(b.seenAt||0))/30);for(var f of foes)if(dist(f,b.door||b)<15)pen+=2;var score=d+pen;if(score<bs){bs=score;best=b;}}
  if(best&&idleField.length>=need(best)){out.push(['attack',{ids:idleField.map(function(s){return s.id;}),b:best.id}]);P.attackId=best.id;P.attackStart=t;}
 }
 if(!active.length&&!targets.length&&(!P.scoutIds||!P.scoutIds.length)&&idleField.length>=9&&t>900){
  var seq=P.scoutI||0,tx=home.x<w/2?w-12:12,ty=home.y<h/2?h-12:12,off=[0,18,-18,34,-34][seq%5];tx=Math.max(8,Math.min(w-8,tx+off));ty=Math.max(8,Math.min(h-8,ty-off));
  var scout=idleField.slice(0,6);out.push(['march',{ids:scout.map(function(s){return s.id;}),tx:Math.round(tx),ty:Math.round(ty),form:'block',am:false}]);P.scoutIds=scout.map(function(s){return s.id;});P.scoutStart=t;P.scoutI=seq+1;
 }
 if(!view.armyOnly&&t-(P.noteAt||-600)>590){out.push(['note',{text:'Plan: '+carriers+' carriers, '+idleC+' idle; sites '+siteCount+', field '+soldiers.length+', posts '+ownMil().length+', coal/iron '+(oreSeen('coal')?1:0)+'/'+(oreSeen('ironore')?1:0)+'.'}]);P.noteAt=t;}
 return out.slice(0,50);
}