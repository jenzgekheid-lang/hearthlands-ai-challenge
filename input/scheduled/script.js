// ChatGPT scheduled — v251 resource-first builder, HQ-mirror scouting, and measured conquest.
// Abandon the pioneer corridor: secure stone and renewable production first, use the free start army to find the enemy,
// then grow a carrier-supported field army and raid exposed workshops before committing to defended military targets.
// Game version: 251
function think(view){
 if(!view||view.over)return [];
 var M=memory.plan||(memory.plan={}),out=[];
 M.sentThisTurn={};
 if(view.economy&&!view.armyOnly)economy(view,M,out);
 army(view,M,out);
 return out.slice(0,50);
}
function economy(view,M,out){
 var E=view.economy||{},map=view.map||{},S=view.switches||{},t=view.t||0,me=view.me;
 var town=E.town||[],stock=E.stock||{},people=E.people||{},idle=E.idle||{},units=E.units||[];
 var carriers=people.carrier||0,idleC=idle.carrier||0,spots=E.spots||{};
 var count={},built={},pending={},siteN=0,bedsComing=0,pendingHouse=false;
 for(var b of town){
  count[b.type]=(count[b.type]||0)+1;
  if(b.built)built[b.type]=(built[b.type]||0)+1;
  else{
   siteN++;if(/^house/.test(b.type))pendingHouse=true;
   for(var it in (b.cost||{}))if(Object.prototype.hasOwnProperty.call(b.cost,it))
    pending[it]=(pending[it]||0)+Math.max(0,(b.cost[it]||0)-((b.delivered||{})[it]||0));
  }
  bedsComing+=b.coming||0;
 }
 function has(type){return count[type]||0;}
 function done(type){return built[type]||0;}
 function st(it){return stock[it]||0;}
 function spare(it){return st(it)-(pending[it]||0);}
 function tip(k){return (E.tips||[]).some(function(z){return z.k===k;});}
 function hasStatus(type,needle){
  for(var z of town)if(z.type===type&&(z.status||'').toLowerCase().indexOf(needle.toLowerCase())>=0)return true;
  return false;
 }
 function ore(kind){for(var o of (E.ore||[]))if(o.ore===kind)return true;return false;}
 var hq=null;
 for(var hb of (view.buildings||[]))if(hb.owner===me&&hb.type==='hq'){hq=hb;break;}
 var home=hq?{x:hq.x+(hq.w||5)/2,y:hq.y+(hq.h||4)/2}:{x:(map.w||240)/2,y:(map.h||240)/2};
 var ownBuildings=(view.buildings||[]).filter(function(x){return x.owner===me;});
 var border=ownBuildings.filter(function(x){return x.built!==false&&(x.type==='guard'||x.type==='tower'||x.type==='castle');});
 var totalSoldiers=(view.soldiers||[]).length;
 for(var ob of ownBuildings)if(ob.military||['hq','guard','tower','castle'].indexOf(ob.type)>=0)totalSoldiers+=(ob.troops||[]).length;
 var postsStaffed=border.every(function(p){return (p.troops||[]).length>0;});
 M.spots=M.spots||{};M.geoBad=M.geoBad||{};M.geoTarget=M.geoTarget||{};
 for(var sk in spots)if(Object.prototype.hasOwnProperty.call(spots,sk))M.spots[sk]=spots[sk];
 for(var rr of (view.refused||[]))if(rr.order==='place'&&rr.args)
  M.rejected={type:rr.args.type,x:rr.args.x,y:rr.args.y,until:t+90};

 // Five starting picks cover the quarry, geology and first mines. No pioneer or explorer.
 var geos=units.filter(function(u){return u.role==='geologist';}),unsearched=E.unsearched||[];
 var maxGeos=done('smith')>0?2:1;
 if(done('quarry')>0&&unsearched.length>0&&geos.length<maxGeos&&st('pick')>0&&carriers>5&&idleC>2&&(M.geoAt||0)<=t){
  out.push(['profession',{role:'geologist',d:1}]);M.geoAt=t+60;
 }
 for(var g of geos){
  var sent=M.geoTarget[g.id];
  if(sent&&!g.busy&&!g.moving&&t-sent.at>8){
   var still=unsearched.some(function(u){return u.x===sent.x&&u.y===sent.y;});
   if(still)M.geoBad[sent.x+':'+sent.y]=t+600;
   delete M.geoTarget[g.id];sent=null;
  }
  if(g.busy||g.moving||(sent&&t-sent.at<=8))continue;
  var uq=null,best=1e18;
  for(var u of unsearched){
   var key=u.x+':'+u.y;if(M.geoBad[key]>t)continue;
   var reservedGeo=false;
   for(var otherGeo of geos)if(otherGeo.id!==g.id){
    var otherTarget=M.geoTarget[otherGeo.id]||otherGeo.to;
    if(otherTarget){var ox=u.x-otherTarget.x,oy=u.y-otherTarget.y;if(ox*ox+oy*oy<64)reservedGeo=true;}
   }
   if(reservedGeo)continue;
   var ix=u.y*(map.w||240)+u.x;
   if(map.known&&map.known[ix]===0)continue;
   if(map.grounds&&map.ter&&map.grounds[map.ter[ix]]&&!map.grounds[map.ter[ix]].mine)continue;
   if(map.occupied&&map.occupied[ix])continue;
   var dx=u.x-g.x,dy=u.y-g.y,dd=typeof u.d==='number'?u.d:dx*dx+dy*dy;
   if(dd<best){best=dd;uq=u;}
  }
  if(uq&&(M.geoUnitAt||0)<=t){
   out.push(['sendUnit',{u:g.id,tx:uq.x,ty:uq.y}]);
   M.geoTarget[g.id]={x:uq.x,y:uq.y,at:t};M.geoUnitAt=t+20;
  }
 }
 var peopleShort=carriers<9||idleC<3||(E.homeless||0)>0||tip('settlers')||tip('carriers')||tip('weapons');
 var homesNeeded=peopleShort&&bedsComing<6&&!pendingHouse&&has('house')<8;
 var woodDry=hasStatus('wood','no grown trees')||hasStatus('wood','waiting for trees')||
  (t>900&&st('log')<4&&done('forest')===0);
 var coalDry=hasStatus('coalmine','deposit worn out')||hasStatus('coalmine','deposit thinning');
 var ironDry=hasStatus('ironmine','deposit worn out')||hasStatus('ironmine','deposit thinning');
 var coalFoodShort=done('coalmine')>0&&(hasStatus('coalmine','waiting for food')||
  hasStatus('coalmine','needs bread')||hasStatus('coalmine','needs fish')||(st('fish')<5&&st('bread')<4));
 var ironFoodShort=done('ironmine')>0&&(hasStatus('ironmine','waiting for food')||
  hasStatus('ironmine','needs meat')||hasStatus('ironmine','needs fish')||(st('meat')<4&&st('fish')<4));
 var fishLow=st('fish')<10&&(coalFoodShort||ironFoodShort||done('goldmine')>0);
 var meatLow=st('meat')<6&&ironFoodShort;
 var coalStable=done('coalmine')>=2||st('coal')>=12;
 var mineFood=done('fisher')>0||done('hunter')>0||done('bakery')>0;
 var want=[],wanted={};
 function add(type,max,plank,stone,ok){
  if(ok&&has(type)<max&&!wanted[type]&&spare('plank')>=plank&&spare('stone')>=stone){
   want.push(type);wanted[type]=1;
  }
 }
 // New opening: wood -> quarry -> saw. The v248 queue spent the starting stone before the quarry.
 add('wood',1,2,2,true);
 add('quarry',1,2,3,true);
 add('saw',1,3,4,done('wood')>0);
 add('house',8,3,3,homesNeeded&&done('saw')>0);
 add('forest',1,3,1,done('wood')>0);
 add('guard',1,2,3,t>90);
 add('fisher',1,3,2,done('saw')>0&&S.dock);
 add('hunter',1,3,2,done('saw')>0&&S.hunter);
 add('guard',2,2,3,done('guard')>0&&postsStaffed&&t>420&&
  (tip('land')||tip('ore')||!ore('coal')||!ore('ironore'))&&carriers>8);
 add('guard',3,2,3,done('guard')>=2&&postsStaffed&&t>1200&&totalSoldiers>=14&&carriers>12&&
  (tip('land')||!ore('coal')||!ore('ironore')));
 add('coalmine',1,4,1,ore('coal')&&mineFood);
 add('ironmine',1,4,1,ore('ironore')&&mineFood);
 add('smelter',1,4,6,done('coalmine')>0&&done('ironmine')>0);
 add('smith',1,3,5,done('smelter')>0);
 add('weaponsmith',1,5,7,done('smith')>0);
 add('barracks',1,4,5,done('weaponsmith')>0);
 var breadNow=done('coalmine')>0&&done('bakery')===0&&(coalFoodShort||st('fish')<10||t>900);
 if(breadNow){
  add('waterhut',1,3,4,true);add('farm',1,6,6,done('waterhut')>0);
  add('mill',1,3,3,done('farm')>0);add('bakery',1,4,5,done('mill')>0&&done('waterhut')>0);
 }
 add('coalmine',2,4,1,ore('coal')&&coalDry&&st('coal')<12);
 add('ironmine',2,4,1,ore('ironore')&&ironDry&&st('ironore')<12);
 add('quarry',3,2,3,done('quarry')>0&&st('stone')<14&&has('quarry')<3);
 add('wood',2,2,2,done('saw')>0&&done('forest')>0&&st('log')<12&&carriers>=8);
 add('saw',2,3,4,done('smith')>0&&st('plank')<18&&st('log')>4);
 add('forest',2,3,1,woodDry&&has('forest')<2);
 if(fishLow)add('fisher',2,3,2,S.dock&&has('fisher')<2);
 if(meatLow)add('hunter',2,3,2,S.hunter&&has('hunter')<2);
 add('tower',1,5,5,done('barracks')>0&&totalSoldiers>=24&&t>900&&border.length<4&&tip('land'));
 add('goldmine',1,5,1,ore('goldore')&&done('smith')>0&&mineFood&&coalStable);
 add('goldsmelter',1,4,6,done('goldmine')>0&&coalStable);
 add('vault',1,3,4,S.vault&&S.banner&&done('goldsmelter')>0);
 add('armorer',1,4,5,S.armor&&done('barracks')>0&&done('smelter')>0&&st('iron')>=8&&totalSoldiers>=20);
 var askList=[],askSeen={};
 for(var ai=0;ai<want.length&&askList.length<6;ai++){
  var typ=want[(Math.floor(t/12)+ai)%Math.max(1,want.length)];
  if(!askSeen[typ]){askList.push(typ);askSeen[typ]=1;}
 }
 if(!askList.length)askList=['wood','quarry','guard','coalmine','ironmine','forest'];
 if(t>=(M.askAt||0)){out.push(['ask',{spots:askList}]);M.askAt=t+12;}
 function isResource(type){
  return ['wood','forest','quarry','fisher','hunter','waterhut','farm','coalmine','ironmine','goldmine','stonemine'].indexOf(type)>=0;
 }
 function findSpot(type){
  var list=M.spots[type]||[],best=null,bestScore=-1e18;
  for(var sp of list){
   if(M.rejected&&M.rejected.until>t&&M.rejected.type===type&&M.rejected.x===sp.x&&M.rejected.y===sp.y)continue;
   if(typeof sp.n==='number'&&sp.n<=0)continue;
   if(type==='coalmine'||type==='ironmine'||type==='goldmine'){
    var tooNear=false;
    for(var old of town)if(old.type===type){
     var mx=sp.x+1.5-(old.x+1.5),my=sp.y+1.5-(old.y+1.5);
     if(mx*mx+my*my<12*12)tooNear=true;
    }
    if(tooNear)continue;
   }
   if(typeof canPlace==='function'&&!canPlace(type,sp.x,sp.y))continue;
   var score=typeof sp.n==='number'?sp.n:0;
   if(type==='guard'||type==='tower'||type==='castle'){
    var cx=sp.x+1.5,cy=sp.y+1.5;
    score+=((cx-home.x)*(map.w/2-home.x)+(cy-home.y)*(map.h/2-home.y))*.0008;
   }
   if(score>bestScore){bestScore=score;best=sp;}
  }
  if(best||isResource(type)||typeof canPlace!=='function')return best;
  var bases=[home];
  for(var op of border)bases.push({x:op.x+(op.w||3)/2,y:op.y+(op.h||3)/2});
  var size=type==='tower'?5:type==='castle'?8:3,bestP=null,bestD=1e18;
  for(var base of bases){
   for(var dy=-18;dy<=18;dy+=2)for(var dx=-18;dx<=18;dx+=2){
    var x=Math.floor(base.x+dx),y=Math.floor(base.y+dy);
    if(x<1||y<1||x>=(map.w||240)-size-1||y>=(map.h||240)-size-1)continue;
    if(M.rejected&&M.rejected.until>t&&M.rejected.type===type&&M.rejected.x===x&&M.rejected.y===y)continue;
    if(!canPlace(type,x,y))continue;
    var d=Math.abs(dx)+Math.abs(dy);
    if(d<bestD){bestD=d;bestP={x:x,y:y};}
   }
  }
  return bestP;
 }
 var siteLimit=t<360?2:3;
 if(siteN<siteLimit&&(typeof M.lastPlaceAt!=='number'||t-M.lastPlaceAt>=2)){
  for(var next of want){
   var pos=findSpot(next);if(!pos)continue;
   out.push(['place',{type:next,x:pos.x,y:pos.y}]);M.lastPlaceAt=t;M.spots[next]=[];break;
  }
 }
 // Bow-only outposts claim land without spending the six starting swords.
 var afterBarracks=done('barracks')>0;
 for(var gb of border){
  var wf=afterBarracks?(gb.type==='guard'?1:gb.type==='tower'?2:3):0;
  var wa=afterBarracks?(gb.type==='guard'?1:gb.type==='tower'?2:3):1;
  if(gb.fighters!==wf)out.push(['fighters',{b:gb.id,set:wf}]);
  if(gb.archers!==wa)out.push(['archers',{b:gb.id,set:wa}]);
 }
 var priorityTypes=['wood','quarry','saw','forest','fisher','hunter','waterhut','farm','mill','bakery',
  'coalmine','ironmine','goldmine','smelter','goldsmelter','smith','weaponsmith','barracks','armorer','guard','tower','castle'];
 for(var pb of town)if(priorityTypes.indexOf(pb.type)>=0&&!pb.prio)out.push(['priority',{b:pb.id,on:true}]);
 var A=E.army||{},reserve=totalSoldiers>=30&&postsStaffed?6:4;
 if(A.reserve!==reserve)out.push(['armyReserve',{set:reserve}]);
 var freeForPosts=(view.soldiers||[]).filter(function(s){
  return !s.order&&!s.defends&&!s.fighting&&!s.moving&&!s.held&&!M.sentThisTurn[s.id];
 });
 for(var post of border)if(!(post.troops||[]).length&&freeForPosts.length>4){
  var ix=-1;for(var fi=0;fi<freeForPosts.length;fi++)if(freeForPosts[fi].kind==='bow'){ix=fi;break;}
  if(ix>=0){
   var archer=freeForPosts.splice(ix,1)[0];
   out.push(['sendIn',{ids:[archer.id],b:post.id}]);M.sentThisTurn[archer.id]=1;
  }
 }
 if(done('smith')>0){
  for(var k=0;k<(E.toolPlan||[]).length;k++){
   var tp=E.toolPlan[k],keep=tp.tool==='pick'?2:1;
   if((tp.keep||0)!==keep)out.push(['toolKeep',{k:k,set:keep}]);
  }
 }
 if(done('barracks')>0){
  var stable=done('smelter')>0&&done('weaponsmith')>0&&done('coalmine')>0&&done('ironmine')>0&&carriers>=10;
  var targets=stable?{sword:20,spear:12,bow:16}:{sword:10,spear:6,bow:8},at=A.target||{};
  for(var kind of ['sword','spear','bow'])if(at[kind]!==targets[kind])
   out.push(['armyTarget',{kind:kind,set:targets[kind]}]);
  var bannerTarget=S.banner&&done('goldsmelter')>0?(stable?4:2):0;
  if(S.banner&&at.banner!==bannerTarget)out.push(['armyTarget',{kind:'banner',set:bannerTarget}]);
  var keepList=A.keep||[];
  for(var wi=0;wi<keepList.length&&wi<3;wi++)if(keepList[wi]&&(keepList[wi].keep||0)>0)
   out.push(['weaponKeep',{k:wi,set:0}]);
  if(S.armor&&done('armorer')>0){
   var arm=A.armor||{};
   if((arm.bow||0)!==1&&totalSoldiers>=20)out.push(['armyArmor',{kind:'bow',set:1}]);
   if((arm.sword||0)!==1&&totalSoldiers>=42&&st('iron')>=20)out.push(['armyArmor',{kind:'sword',set:1}]);
  }
 }
 for(var ab of town){
  if(S.armor&&S.gear&&ab.type==='armorer'&&ab.built&&!ab.repair)out.push(['armorRepair',{b:ab.id,on:true}]);
  if(S.vault&&ab.type==='vault'&&ab.built&&ab.keep!==24)out.push(['vaultKeep',{b:ab.id,set:24}]);
 }
 if(t>0&&t%600<2&&M.noteAt!==t){
  out.push(['note',{text:'v251 builder: houses '+has('house')+', quarry '+has('quarry')+', forest '+has('forest')+
   ', guards '+border.length+'/'+border.filter(function(p){return (p.troops||[]).length>0;}).length+
   ', mines '+has('coalmine')+'/'+has('ironmine')+', carriers '+carriers+' idle '+idleC+
   ', soldiers '+totalSoldiers+', ore C/I '+(ore('coal')?1:0)+'/'+(ore('ironore')?1:0)+'.'}]);
  M.noteAt=t;
 }
}
function army(view,M,out){
 var t=view.t||0,me=view.me,mine=view.soldiers||[],bld=view.buildings||[],enemy=view.enemy||{},map=view.map||{};
 var foes=enemy.soldiers||[],eb=enemy.buildings||[];
 function dist(a,b){return Math.abs(a.x-b.x)+Math.abs(a.y-b.y);}
 function door(b){return b.door||{x:b.x+(b.w||3)/2,y:b.y+(b.h||3)/2};}
 function power(s){
  var hp=s.hp||s.maxHp||10,str=s.str==null?0.6:s.str/100,kind=s.kind==='bow'?0.5:s.kind==='banner'?0:1;
  return hp*str*kind*(1+0.12*(s.arm||0)+0.06*(s.rank||0));
 }
 function isMil(b){return !!b.military||['guard','tower','castle','hq'].indexOf(b.type)>=0;}
 var free=mine.filter(function(s){
  return !s.order&&!s.defends&&!s.fighting&&!s.moving&&!s.held&&!M.sentThisTurn[s.id];
 });
 var fighters=free.filter(function(s){return s.kind!=='banner'&&s.hp>=(s.maxHp||10)*.65;});
 var melee=fighters.filter(function(s){return s.kind!=='bow';});
 var bows=fighters.filter(function(s){return s.kind==='bow';});
 var banners=free.filter(function(s){return s.kind==='banner';});
 var ownHQ=null;
 for(var h of bld)if(h.owner===me&&h.type==='hq'){ownHQ=h;break;}
 var hx=ownHQ?ownHQ.x+(ownHQ.w||5)/2:(map.w?map.w/2:120);
 var hy=ownHQ?ownHQ.y+(ownHQ.h||4)/2:(map.h?map.h/2:120);
 var refusedAttack=false;
 for(var r of (view.refused||[]))if(r.order==='attack')refusedAttack=true;
 if(refusedAttack)M.attackAfter=t+90;
 var attackUnits=mine.filter(function(s){return s.order&&s.order.k==='attack';});
 var attackers=attackUnits.filter(function(s){return s.kind!=='banner';});
 if(attackUnits.length){
  var heldDuringSiege=mine.filter(function(s){return s.held&&!s.order&&!s.defends&&!s.fighting&&!s.moving;});
  if(heldDuringSiege.length){out.push(['free',{ids:heldDuringSiege.map(function(s){return s.id;})}]);return;}
  var siegeThreat=null,siegeThreatD=22;
  for(var sf of foes)for(var so of bld)if(so.owner===me){
   var sd=dist(sf,{x:so.x+(so.w||3)/2,y:so.y+(so.h||3)/2});
   if(sd<siegeThreatD){siegeThreatD=sd;siegeThreat=sf;}
  }
  if(siegeThreat&&(M.defendAt||0)<=t&&fighters.length>=6){
   var siegeDefenders=fighters.slice().sort(function(a,b){return dist(a,siegeThreat)-dist(b,siegeThreat);})
    .slice(0,Math.max(0,fighters.length-4));
   if(siegeDefenders.length>=4){
    out.push(['march',{ids:siegeDefenders.map(function(s){return s.id;}),tx:Math.round(siegeThreat.x),
     ty:Math.round(siegeThreat.y),form:'block',am:true,loose:true}]);M.defendAt=t+30;return;
   }
  }
  var targetId=attackUnits[0].order.b,target=null;
  for(var eb0 of eb)if(eb0.id===targetId){target=eb0;break;}
  if(!target){
   var release=attackUnits.filter(function(s){return !s.fighting;});
   if(release.length)out.push(['free',{ids:release.map(function(s){return s.id;})}]);
   M.siegeTarget=0;M.siegeLosses=0;M.siegePrev=0;M.siegeStart=0;M.attackAfter=t+3;return;
  }
  if(M.siegeTarget!==targetId){
   M.siegeTarget=targetId;M.siegeStart=attackers.length||attackUnits.length;
   M.siegePrev=attackers.length||attackUnits.length;M.siegeLosses=0;
  }
  var siegeCount=attackers.length||attackUnits.length;
  if(typeof M.siegePrev==='number'&&siegeCount<M.siegePrev)M.siegeLosses=(M.siegeLosses||0)+M.siegePrev-siegeCount;
  M.siegePrev=siegeCount;
  var cap=target.type==='castle'?10:target.type==='tower'?6:target.type==='guard'?3:target.type==='hq'?10:1;
  var danger=0,td=door(target);
  for(var foe of foes)if(dist(foe,td)<24)danger+=power(foe);
  var need=danger*1.4+(target.manned?cap*6*1.25:0)+12;
  var lossLimit=Math.max(2,Math.ceil((M.siegeStart||attackers.length)*.35));
  if((M.siegeLosses||0)>=lossLimit){
   out.push(['march',{ids:attackUnits.map(function(s){return s.id;}),tx:Math.round(hx),ty:Math.round(hy),
    form:'block',am:false,loose:true}]);
   out.push(['note',{text:'v251 siege break: losses '+M.siegeLosses+', retreating to rebuild the field group.'}]);
   M.siegeTarget=0;M.siegeLosses=0;M.siegePrev=0;M.siegeStart=0;M.attackAfter=t+180;return;
  }
  if((M.reinforceAt||0)<=t&&fighters.length>=6){
   var extra=melee.slice().sort(function(a,b){return dist(a,td)-dist(b,td);})
    .slice(0,Math.max(0,fighters.length-4));
   if(extra.length<4)extra=extra.concat(bows.slice(0,Math.max(0,4-extra.length)));
   var ep=0;for(var es of extra)ep+=power(es);
   if(extra.length>=4&&ep>=need*.55){
    out.push(['attack',{ids:extra.map(function(s){return s.id;}),b:targetId}]);M.reinforceAt=t+30;
   }
  }
  return;
 }
 var heldIdle=mine.filter(function(s){return s.held&&!s.order&&!s.defends&&!s.fighting&&!s.moving;});
 if(heldIdle.length){out.push(['free',{ids:heldIdle.map(function(s){return s.id;})}]);return;}
 var reserve=fighters.length>=24?6:4,threat=null,threatD=22;
 for(var f of foes)for(var own of bld)if(own.owner===me){
  var td2=dist(f,{x:own.x+(own.w||3)/2,y:own.y+(own.h||3)/2});
  if(td2<threatD){threatD=td2;threat=f;}
 }
 if(threat&&(M.defendAt||0)<=t&&fighters.length>=8){
  var defenders=fighters.slice().sort(function(a,b){return dist(a,threat)-dist(b,threat);})
   .slice(0,Math.max(0,fighters.length-reserve));
  if(defenders.length>=4){
   out.push(['march',{ids:defenders.map(function(s){return s.id;}),tx:Math.round(threat.x),
    ty:Math.round(threat.y),form:'block',am:true,loose:true}]);M.defendAt=t+30;return;
  }
 }
 var targets=eb.filter(function(b){
  return isMil(b)&&(!b.remembered||typeof b.seenAt!=='number'||t-b.seenAt<600);
 });
 targets.sort(function(a,b){
  var ah=a.type==='hq'?2:a.manned?1:0,bh=b.type==='hq'?2:b.manned?1:0;
  if(ah!==bh)return ah-bh;
  return dist({x:hx,y:hy},door(a))-dist({x:hx,y:hy},door(b));
 });
 var canAttack=t>=(M.attackAfter||0);
 if(canAttack){
  for(var target1 of targets){
   if(target1.type==='hq'&&targets.some(function(x){return x.type!=='hq';}))continue;
   var d=door(target1),enemyPower=0;
   for(var e of foes)if(dist(e,d)<24)enemyPower+=power(e);
   var cap=target1.type==='castle'?10:target1.type==='tower'?6:target1.type==='guard'?3:10;
   var need=enemyPower*1.4+(target1.manned?cap*6*1.25:0)+12;
   var minCount=target1.type==='hq'?24:target1.manned?(target1.type==='castle'?24:target1.type==='tower'?18:12):
    (target1.type==='castle'?8:target1.type==='tower'?6:4);
   var minMelee=target1.type==='hq'?12:target1.manned?(target1.type==='castle'?14:target1.type==='tower'?10:7):
    (target1.type==='castle'?4:target1.type==='tower'?3:2);
   var capGroup=target1.type==='guard'?18:target1.type==='tower'?24:32;
   var maxGroup=Math.min(capGroup,Math.max(0,fighters.length-reserve));
   var group=melee.slice().sort(function(a,b){return dist(a,d)-dist(b,d);}).slice(0,maxGroup);
   if(group.length<maxGroup)
    group=group.concat(bows.slice().sort(function(a,b){return dist(a,d)-dist(b,d);}).slice(0,maxGroup-group.length));
   var meleeN=0,strength=0;
   for(var q of group){if(q.kind!=='bow')meleeN++;strength+=power(q);}
   if(group.length<minCount||meleeN<minMelee||strength<need*1.2)continue;
   var support=banners.slice().sort(function(a,b){return dist(a,d)-dist(b,d);})
    .slice(0,Math.min(banners.length,Math.floor(group.length/10)));
   out.push(['attack',{ids:group.concat(support).map(function(s){return s.id;}),b:target1.id}]);
   M.siegeTarget=target1.id;M.siegeStart=group.length;M.siegePrev=group.length;M.siegeLosses=0;M.reinforceAt=t+30;return;
  }
 }
 var scoutBusy=mine.some(function(s){return s.id===M.scoutId&&(s.order||s.moving);});
 if(!targets.length&&(M.scoutStage||0)<2&&!scoutBusy&&t>=120&&(M.scoutAt||0)<=t&&fighters.length>=6&&map.w){
  var scout=free.find(function(s){return s.id===M.scoutId;})||free.find(function(s){return s.kind==='bow';})||
   free.find(function(s){return s.kind==='sword';});
  if(scout){
   var enemyX=map.w-hx,stage=M.scoutStage||0;
   var tx=stage===0?Math.floor(map.w/2):Math.round(enemyX-(enemyX>hx?10:-10));
   tx=Math.max(2,Math.min(map.w-3,tx));
   out.push(['march',{ids:[scout.id],tx:tx,ty:Math.round(hy),form:'line',am:false,loose:true}]);
   M.scoutId=scout.id;M.scoutStage=Math.min(2,stage+1);M.scoutAt=t+180;return;
  }
 }
 var raids=eb.filter(function(b){
  return b.type!=='hq'&&!isMil(b)&&b.built!==false&&(!b.remembered||typeof b.seenAt!=='number'||t-b.seenAt<600);
 });
 var raidRank={barracks:0,weaponsmith:1,smelter:2,smith:3,coalmine:4,ironmine:5,wood:6,saw:7,quarry:8,house:9};
 raids.sort(function(a,b){
  var ar=raidRank[a.type]===undefined?20:raidRank[a.type],br=raidRank[b.type]===undefined?20:raidRank[b.type];
  return ar-br||dist({x:hx,y:hy},door(a))-dist({x:hx,y:hy},door(b));
 });
 if(canAttack&&fighters.length>=10){
  for(var raid of raids){
   var rd=door(raid),dangerRaid=0;
   for(var re of foes)if(dist(re,rd)<22)dangerRaid+=power(re);
   var raidGroup=fighters.slice().sort(function(a,b){return dist(a,rd)-dist(b,rd);})
    .slice(0,Math.min(8,Math.max(0,fighters.length-reserve)));
   var raidPower=0;for(var rq of raidGroup)raidPower+=power(rq);
   if(raidGroup.length>=6&&raidPower>dangerRaid*1.5+8){
    out.push(['attack',{ids:raidGroup.map(function(s){return s.id;}),b:raid.id}]);
    M.siegeTarget=raid.id;M.siegeStart=raidGroup.length;M.siegePrev=raidGroup.length;M.siegeLosses=0;M.reinforceAt=t+30;
    out.push(['note',{text:'v251 raid: '+raid.type+' with '+raidGroup.length+' field soldiers.'}]);return;
   }
  }
 }
 if(!targets.length&&(M.scoutStage||0)>=2&&fighters.length>=18&&(M.probeAt||0)<=t&&map.w){
  var ex=map.w-hx,probe=fighters.slice().sort(function(a,b){return dist(a,{x:ex,y:hy})-dist(b,{x:ex,y:hy});})
   .slice(0,Math.min(12,fighters.length-reserve));
  if(probe.length>=10){
   out.push(['march',{ids:probe.map(function(s){return s.id;}),tx:Math.round(ex),ty:Math.round(hy),
    form:'block',am:true,loose:true}]);M.probeAt=t+360;
  }
 }
}
