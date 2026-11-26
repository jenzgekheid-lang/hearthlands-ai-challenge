// ChatGPT scheduled — v255 NPC-paced resource rush with one-sword border anchors and a staged industrial army.
// Follow the opponent's proven opening tempo, but keep housing and optional production demand-led.
// Game version: 253
function think(view){
 if(!view||view.over)return [];
 var M=memory.plan||(memory.plan={}),out=[];
 army(view,M,out);
 if(view.economy&&!view.armyOnly)economy(view,M,out);
 return out.slice(0,50);
}
function army(view,M,out){
 var t=view.t||0,mine=view.soldiers||[],enemy=view.enemy||{},eb=enemy.buildings||[],foes=enemy.soldiers||[];
 var map=view.map||{},me=view.me,bld=view.buildings||[];
 function dist(a,b){return Math.abs(a.x-b.x)+Math.abs(a.y-b.y);}
 function door(b){return b.door||{x:b.x+(b.w||3)/2,y:b.y+(b.h||3)/2};}
 function isMil(b){return !!b.military||b.type==='hq'||b.type==='guard'||b.type==='tower'||b.type==='castle';}
 function power(s){return (s.hp||s.maxHp||10)*(typeof s.str==='number'?s.str/100:.6);}
 function idOrder(a,b){return a.id===b.id?0:(a.id<b.id?-1:1);}
 var ownHQ=null;
 for(var h of bld)if(h.owner===me&&h.type==='hq'){ownHQ=h;break;}
 var hx=ownHQ?ownHQ.x+(ownHQ.w||5)/2:(map.w||240)/2;
 var hy=ownHQ?ownHQ.y+(ownHQ.h||4)/2:(map.h||240)/2;
 var ownMil=bld.filter(function(b){return b.owner===me&&isMil(b);});
 var free=mine.filter(function(s){return !s.order&&!s.defends&&!s.fighting&&!s.moving&&!s.held;});
 var fighters=free.filter(function(s){return s.kind!=='banner'&&s.hp>=(s.maxHp||10)*.6;});
 var banners=free.filter(function(s){return s.kind==='banner';});

 // Protect home first, even while a separate siege is active.
 var threat=null,threatD=20;
 for(var foe of foes)for(var own of ownMil){
  var od=dist(foe,door(own));
  if(od<threatD){threatD=od;threat=foe;}
 }
 if(threat&&fighters.length>=6&&(M.defendAt||0)<=t){
  var homeGroup=fighters.slice().sort(function(a,b){return dist(a,threat)-dist(b,threat)||idOrder(a,b);})
   .slice(0,Math.min(5,fighters.length-2));
  if(homeGroup.length>=4){
   out.push(['march',{ids:homeGroup.map(function(s){return s.id;}),tx:Math.round(threat.x),ty:Math.round(threat.y),form:'block',am:true,loose:true}]);
   M.defendAt=t+25;return;
  }
 }

 // A captured target releases only the soldiers committed to that siege.
 if(M.siege&&M.siege.ids){
  var target=null,ours=false;
  for(var x of eb)if(x.id===M.siege.id){target=x;break;}
  for(var ob of bld)if(ob.id===M.siege.id&&ob.owner===me){ours=true;break;}
  if(!target||ours){
   var doneIds=M.siege.ids.filter(function(id){return mine.some(function(s){return s.id===id;});});
   if(doneIds.length)out.push(['release',{ids:doneIds,stop:true}]);
   M.siege=null;M.attackAfter=t+24;return;
  }
  var live=[];
  for(var sid of M.siege.ids)for(var ss of mine)if(ss.id===sid){live.push(ss);break;}
  var alive=0;for(var la of live)if(la.kind!=='banner')alive++;
  if(typeof M.siege.last==='number'&&alive<M.siege.last)M.siege.losses=(M.siege.losses||0)+M.siege.last-alive;
  M.siege.last=alive;
  var limit=Math.max(2,Math.ceil((M.siege.start||8)*.35));
  if((M.siege.losses||0)>=limit||(target.remembered&&typeof target.seenAt==='number'&&t-target.seenAt>240)){
   var retreatIds=M.siege.ids.filter(function(id){return mine.some(function(s){return s.id===id;});});
   if(retreatIds.length)out.push(['release',{ids:retreatIds,stop:true}]);
   M.retreatIds=retreatIds;M.siege=null;M.attackAfter=t+120;return;
  }
  return;
 }

 // After a failed siege, walk the released survivors back toward the HQ before regrouping.
 if(M.retreatIds&&M.retreatIds.length){
  var retreat=free.filter(function(s){return M.retreatIds.indexOf(s.id)>=0;});
  if(retreat.length){
   out.push(['march',{ids:retreat.map(function(s){return s.id;}),tx:Math.round(hx),ty:Math.round(hy),form:'block',am:false,loose:true}]);
   M.retreatIds=M.retreatIds.filter(function(id){return !retreat.some(function(s){return s.id===id;});});
   return;
  }
  M.retreatIds=[];
 }

 var targets=eb.filter(function(b){
  return isMil(b)&&b.built!==false&&(!b.remembered||typeof b.seenAt!=='number'||t-b.seenAt<240);
 });
 function rank(b){
  if(b.type==='hq')return 6;
  if(b.type==='castle')return b.manned?5:3;
  if(b.type==='tower')return b.manned?4:1;
  return b.manned?2:0;
 }
 targets.sort(function(a,b){
  return rank(a)-rank(b)||dist({x:hx,y:hy},door(a))-dist({x:hx,y:hy},door(b))||idOrder(a,b);
 });
 if(t>=(M.attackAfter||0)&&fighters.length>=8){
  for(var target1 of targets){
   if(target1.type==='hq'&&targets.length>1)continue;
   var d=door(target1),danger=0;
   for(var e of foes)if(dist(e,d)<24)danger+=power(e);
   var guardBase=target1.type==='castle'?10:target1.type==='tower'?6:target1.type==='hq'?8:3;
   var minCount=target1.type==='hq'?32:target1.manned?(target1.type==='castle'?30:target1.type==='tower'?22:16):
    (target1.type==='castle'?14:target1.type==='tower'?10:7);
   var minMelee=target1.type==='hq'?20:target1.manned?(target1.type==='castle'?18:target1.type==='tower'?12:8):
    (target1.type==='castle'?8:target1.type==='tower'?5:3);
   var group=fighters.slice().sort(function(a,b){return dist(a,d)-dist(b,d)||idOrder(a,b);})
    .slice(0,Math.min(32,Math.max(0,fighters.length-4)));
   var melee=0,strength=0;
   for(var q of group){if(q.kind!=='bow')melee++;strength+=power(q);}
   var need=(target1.manned?1.15:1.0)*(danger+guardBase*6)+8;
   if(group.length<minCount||melee<minMelee||strength<need)continue;
   var support=[];
   if(view.switches&&view.switches.banner&&banners.length){
    support=banners.slice().sort(function(a,b){return dist(a,d)-dist(b,d)||idOrder(a,b);})
     .slice(0,Math.min(banners.length,Math.ceil(group.length/8)));
   }
   var ids=group.map(function(s){return s.id;}).concat(support.map(function(s){return s.id;}));
   out.push(['attack',{ids:ids,b:target1.id}]);
   M.siege={id:target1.id,ids:ids,start:group.length,last:group.length,losses:0,started:t};
   M.attackAfter=t+30;return;
  }
 }

 // Raid a genuinely exposed production building only when no current military objective is known.
 var raids=eb.filter(function(b){return !isMil(b)&&b.built!==false&&(!b.remembered||typeof b.seenAt!=='number'||t-b.seenAt<180);});
 var raidRank={barracks:0,weaponsmith:1,smelter:2,smith:3,coalmine:4,ironmine:5,wood:6,saw:7,quarry:8};
 raids.sort(function(a,b){
  var ar=raidRank[a.type]===undefined?20:raidRank[a.type],br=raidRank[b.type]===undefined?20:raidRank[b.type];
  return ar-br||dist({x:hx,y:hy},door(a))-dist({x:hx,y:hy},door(b))||idOrder(a,b);
 });
 if(!targets.length&&raids.length&&fighters.length>=12&&(M.attackAfter||0)<=t){
  for(var raid of raids){
   var rd=door(raid),raidDanger=0;
   for(var re of foes)if(dist(re,rd)<22)raidDanger+=power(re);
   var raidGroup=fighters.slice().sort(function(a,b){return dist(a,rd)-dist(b,rd)||idOrder(a,b);})
    .slice(0,Math.min(10,Math.max(0,fighters.length-4)));
   var raidPower=0;for(var rq of raidGroup)raidPower+=power(rq);
   if(raidGroup.length>=8&&raidPower>raidDanger*1.35+10){
    var raidIds=raidGroup.map(function(s){return s.id;});
    out.push(['attack',{ids:raidIds,b:raid.id}]);
    M.siege={id:raid.id,ids:raidIds,start:raidIds.length,last:raidIds.length,losses:0,started:t};
    M.attackAfter=t+30;return;
   }
  }
 }

 // Two deterministic waypoints reveal the centre and the mirrored enemy HQ without a specialist loop.
 var freshEnemy=eb.some(function(b){return !b.remembered||typeof b.seenAt!=='number'||t-b.seenAt<240;});
 if(!freshEnemy&&(M.scoutStage||0)<2&&t>=90&&(M.scoutAt||0)<=t&&map.w){
  var scout=null;
  if(M.scoutId)for(var sc0 of free)if(sc0.id===M.scoutId){scout=sc0;break;}
  if(!scout)for(var sc1 of free)if(sc1.kind==='sword'){scout=sc1;break;}
  if(!scout)for(var sc2 of free)if(sc2.kind==='bow'){scout=sc2;break;}
  if(scout){
   var enemyX=map.w-hx,stage=M.scoutStage||0;
   var tx=stage===0?Math.floor(map.w/2):Math.round(enemyX-(enemyX>hx?10:-10));
   tx=Math.max(2,Math.min(map.w-3,tx));
   out.push(['march',{ids:[scout.id],tx:tx,ty:Math.round(hy),form:'line',am:false,loose:true}]);
   M.scoutId=scout.id;M.scoutStage=stage+1;M.scoutAt=t+150;return;
  }
 }
 if(!freshEnemy&&(M.scoutStage||0)>=2&&fighters.length>=14&&(M.probeAt||0)<=t&&map.w){
  var ex=map.w-hx,probe=fighters.slice().sort(function(a,b){
   return dist(a,{x:ex,y:hy})-dist(b,{x:ex,y:hy})||idOrder(a,b);
  }).slice(0,Math.min(8,fighters.length-4));
  if(probe.length>=8){
   out.push(['march',{ids:probe.map(function(s){return s.id;}),tx:Math.round(ex),ty:Math.round(hy),form:'block',am:true,loose:true}]);
   M.probeAt=t+300;return;
  }
 }
}
function economy(view,M,out){
 var E=view.economy||{},map=view.map||{},S=view.switches||{},t=view.t||0,me=view.me;
 var town=E.town||[],stock=E.stock||{},people=E.people||{},idle=E.idle||{},units=E.units||[];
 var carriers=people.carrier||0,idleC=idle.carrier||0,land=E.land||{},unsearched=Array.isArray(E.unsearched)?E.unsearched:[];
 var count={},built={},pendingCost={},siteN=0;
 for(var b of town){
  count[b.type]=(count[b.type]||0)+1;
  if(b.built)built[b.type]=(built[b.type]||0)+1;
  else{
   siteN++;
   if(b.cost)for(var it in b.cost)if(Object.prototype.hasOwnProperty.call(b.cost,it))
    pendingCost[it]=(pendingCost[it]||0)+Math.max(0,b.cost[it]-((b.delivered||{})[it]||0));
  }
 }
 function has(type){return count[type]||0;}
 function done(type){return built[type]||0;}
 function st(it){return stock[it]||0;}
 function tip(k){return (E.tips||[]).some(function(z){return z.k===k;});}
 function status(type,needle){
  needle=needle.toLowerCase();
  for(var z of town)if(z.type===type&&(z.status||'').toLowerCase().indexOf(needle)>=0)return true;
  return false;
 }
 function ore(kind){for(var o of (E.ore||[]))if(o.ore===kind)return true;return false;}
 function spare(it,n){return st(it)>=(n+(pendingCost[it]||0));}
 M.pendingPlace=M.pendingPlace||{};M.rejected=M.rejected||{};M.spots=M.spots||{};
 M.prioSent=M.prioSent||{};M.fighterSent=M.fighterSent||{};M.archerSent=M.archerSent||{};
 M.targetSent=M.targetSent||{};M.vaultSent=M.vaultSent||{};M.armorSent=M.armorSent||{};
 M.geoSent=M.geoSent||{};M.geoBad=M.geoBad||{};
 for(var sk in (E.spots||{}))if(Object.prototype.hasOwnProperty.call(E.spots,sk))M.spots[sk]=E.spots[sk];
 for(var rr of (view.refused||[])){
  if(rr.order==='place'&&rr.args){
   delete M.pendingPlace[rr.args.type];
   M.rejected[rr.args.type+':'+rr.args.x+':'+rr.args.y]=t+180;
   M.spots[rr.args.type]=[];
  }
  if(rr.args&&rr.order==='priority')delete M.prioSent[rr.args.b];
  if(rr.args&&rr.order==='fighters')delete M.fighterSent[rr.args.b];
  if(rr.args&&rr.order==='archers')delete M.archerSent[rr.args.b];
  if(rr.args&&rr.order==='armyTarget')delete M.targetSent[rr.args.kind];
  if(rr.args&&rr.order==='vaultKeep')delete M.vaultSent[rr.args.b];
  if(rr.args&&rr.order==='armyArmor')delete M.armorSent[rr.args.kind];
  if(rr.order==='armyReserve')M.reserveSent=null;
 }
 for(var pp in M.pendingPlace)if(Object.prototype.hasOwnProperty.call(M.pendingPlace,pp)){
  var pend=M.pendingPlace[pp];
  if(has(pp)>(pend.count||0)||(t-(pend.at||0))>240)delete M.pendingPlace[pp];
 }
 for(var rk in M.rejected)if(Object.prototype.hasOwnProperty.call(M.rejected,rk)&&M.rejected[rk]<=t)delete M.rejected[rk];

 var ownBuildings=(view.buildings||[]).filter(function(x){return x.owner===me;});
 var hq=null;
 for(var hb of ownBuildings)if(hb.type==='hq'){hq=hb;break;}
 var home=hq?{x:hq.x+(hq.w||5)/2,y:hq.y+(hq.h||4)/2}:{x:(map.w||240)/2,y:(map.h||240)/2};
 var totalSoldiers=(view.soldiers||[]).length;
 for(var ob of ownBuildings)if(ob.military||['hq','guard','tower','castle'].indexOf(ob.type)>=0)totalSoldiers+=(ob.troops||[]).length;
 var guards=ownBuildings.filter(function(x){return x.type==='guard'&&x.built;});
 var firstGuardStaffed=guards.some(function(x){return (x.troops||[]).length>0;});

 // A geologist follows the kit's nearest-first list. No custom terrain filter or rapid retry loop.
 var geos=units.filter(function(u){return u.role==='geologist';});
 if(done('quarry')>0&&done('guard')>0&&unsearched.length>0&&geos.length<1&&st('pick')>1&&carriers>3&&idleC>0&&(M.geoRecruitAt||0)<=t){
  out.push(['profession',{role:'geologist',d:1}]);M.geoRecruitAt=t+90;
 }
 for(var g of geos){
  var last=M.geoSent[g.id],remains=false;
  if(last)remains=unsearched.some(function(u){return u.x===last.x&&u.y===last.y;});
  if(last&&!remains){delete M.geoSent[g.id];last=null;}
  if(last&&remains){
   if(g.busy||g.moving||t-last.at<=240)continue;
   M.geoBad[last.x+':'+last.y]=t+300;delete M.geoSent[g.id];last=null;
  }
  if(g.busy||g.moving)continue;
  var spot=null;
  for(var u of unsearched){
   var key=u.x+':'+u.y;
   if((M.geoBad[key]||0)>t)continue;
   var assigned=false;
   for(var other of geos)if(other.id!==g.id&&other.to&&other.to.x===u.x&&other.to.y===u.y)assigned=true;
   if(!assigned){spot=u;break;}
  }
  if(spot){out.push(['sendUnit',{u:g.id,tx:spot.x,ty:spot.y}]);M.geoSent[g.id]={x:spot.x,y:spot.y,at:t};}
 }

 // One medium house replaces the old cascade of small houses; later housing requires a real people shortage.
 var houseNeed=(E.homeless||0)>0||((typeof E.population==='number'&&typeof E.beds==='number'&&E.population>=E.beds-2)&&
  (carriers<=5||idleC<=2||tip('carriers')));

 var coalHungry=status('coalmine','needs')||status('coalmine','waiting for food');
 var ironHungry=status('ironmine','needs')||status('ironmine','waiting for food');
 var wants=[];
 function add(type,max,plank,stone,ready){
  if(ready&&has(type)<max&&spare('plank',plank)&&spare('stone',stone)&&wants.indexOf(type)<0)wants.push(type);
 }
 // The opening follows the opponent's productive tempo: stone, timber, one staffed border anchor, saw, then population.
 add('quarry',1,2,3,true);
 add('wood',1,2,2,done('quarry')>0);
 add('guard',1,2,3,done('quarry')>0&&done('wood')>0);
 add('saw',1,3,4,done('quarry')>0&&done('wood')>0);
 add('house2',1,5,6,done('saw')>0);
 add('fisher',1,3,2,done('house2')>0&&carriers>=4);
 add('guard',2,2,3,firstGuardStaffed&&has('guard')<2&&t>120);
 add('coalmine',1,4,1,ore('coal')&&done('fisher')>0);
 add('ironmine',1,4,1,ore('ironore')&&(done('fisher')>0||done('hunter')>0));
 add('smelter',1,4,6,done('coalmine')>0&&done('ironmine')>0);
 add('smith',1,3,5,done('smelter')>0);
 add('weaponsmith',1,5,7,done('smith')>0&&st('iron')>=1);
 add('barracks',1,4,5,has('weaponsmith')>0);
 add('goldmine',1,5,1,S.vault&&ore('goldore')&&done('smelter')>0&&done('fisher')>0);
 add('goldsmelter',1,4,6,done('goldmine')>0&&st('coal')>=2);
 add('vault',1,3,4,S.vault&&done('goldsmelter')>0);
 add('armorer',1,4,5,S.armor&&done('barracks')>0&&st('iron')>=3&&totalSoldiers>=20);

 // Expand one more post only if the first is staffed; a third is a fallback if owned mountains are still absent.
 var allPostsStaffed=guards.length>0&&guards.length===has('guard')&&guards.every(function(x){return (x.troops||[]).length>0;});
 if(has('guard')>=2&&allPostsStaffed&&has('guard')<3&&(land.mountain||0)<2&&tip('land')&&t>600)
  add('guard',3,2,3,true);

 // Optional producers are strictly shortage-driven and never precede the first weapons chain.
 var fishLow=st('fish')<4;
 if(ironHungry&&fishLow&&S.hunter)add('hunter',1,3,2,true);
 if((coalHungry||ironHungry)&&fishLow&&done('fisher')>0)add('fisher',2,3,2,true);
 if(status('wood','no grown trees')&&done('smith')>0){
  add('wood',2,2,2,(M.spots.wood||[]).length>0);
  add('forest',1,3,1,st('shovel')>1&&(M.spots.forest||[]).length>0);
 }
 if((status('quarry','no stone')||st('stone')<5)&&done('smith')>0)add('quarry',2,2,3,(M.spots.quarry||[]).length>0);
 if(coalHungry&&fishLow&&done('waterhut')===0)add('waterhut',1,3,4,true);
 if(coalHungry&&fishLow&&done('waterhut')>0)add('farm',1,6,6,true);
 if(coalHungry&&fishLow&&done('farm')>0)add('mill',1,3,3,true);
 if(coalHungry&&fishLow&&done('mill')>0&&done('waterhut')>0)add('bakery',1,4,5,true);
 if(houseNeed&&done('house2')>0)add('house2',2,5,6,true);

 // Idempotent guard settings: one permanent swordsman is enough to claim land; no spare fighter/archer slot.
 for(var gb of town)if(gb.type==='guard'&&gb.built){
  if(typeof gb.fighters==='number'&&gb.fighters>0&&M.fighterSent[gb.id]!==0){
   out.push(['fighters',{b:gb.id,set:0}]);M.fighterSent[gb.id]=0;
  }
  if(typeof gb.archers==='number'&&gb.archers>0&&M.archerSent[gb.id]!==0){
   out.push(['archers',{b:gb.id,set:0}]);M.archerSent[gb.id]=0;
  }
 }
 var priorityTypes=['guard','quarry','wood','saw','fisher','coalmine','ironmine','smelter','smith','weaponsmith','barracks'];
 for(var pb of town)if(pb.built&&priorityTypes.indexOf(pb.type)>=0&&!pb.prio&&!M.prioSent[pb.id]){
  out.push(['priority',{b:pb.id,on:true}]);M.prioSent[pb.id]=true;
 }
 var A=E.army||{},reserve=done('barracks')>0&&allPostsStaffed?4:0;
 if(A.reserve!==reserve&&M.reserveSent!==reserve){out.push(['armyReserve',{set:reserve}]);M.reserveSent=reserve;}
 if(has('weaponsmith')>0){
  var targets={sword:20,spear:8,bow:12},current=A.target||{};
  for(var kind of ['sword','spear','bow'])if(current[kind]!==targets[kind]&&M.targetSent[kind]!==targets[kind]){
   out.push(['armyTarget',{kind:kind,set:targets[kind]}]);M.targetSent[kind]=targets[kind];
  }
  if(S.banner&&done('goldsmelter')>0&&st('gold')>=2&&current.banner!==2&&M.targetSent.banner!==2){
   out.push(['armyTarget',{kind:'banner',set:2}]);M.targetSent.banner=2;
  }
  if(S.armor&&done('armorer')>0&&totalSoldiers>=20){
   for(var ak of ['sword','spear','bow'])if((A.armor||{})[ak]!==1&&M.armorSent[ak]!==1){
    out.push(['armyArmor',{kind:ak,set:1}]);M.armorSent[ak]=1;
   }
  }
 }
 for(var vb of town)if(S.vault&&vb.type==='vault'&&vb.built&&vb.keep!==40&&M.vaultSent[vb.id]!==40){
  out.push(['vaultKeep',{b:vb.id,set:40}]);M.vaultSent[vb.id]=40;
 }

 // Ask for the next six queue items; resource sites come from the kit, ordinary sites are rechecked with canPlace.
 var askList=[];
 for(var ai=0;ai<wants.length&&askList.length<6;ai++)if(askList.indexOf(wants[ai])<0)askList.push(wants[ai]);
 var extras=[];
 if(ironHungry&&fishLow&&S.hunter)extras.push('hunter');
 if((coalHungry||ironHungry)&&fishLow)extras.push('fisher');
 if(coalHungry&&fishLow&&done('waterhut')===0)extras.push('waterhut');
 if(coalHungry&&fishLow&&done('waterhut')>0&&done('farm')===0)extras.push('farm');
 for(var exi of extras)if(askList.length<6&&askList.indexOf(exi)<0)askList.push(exi);
 if(!askList.length)askList=['guard','coalmine','ironmine','fisher','wood','quarry'];
 if(t>=(M.askAt||0)){out.push(['ask',{spots:askList}]);M.askAt=t+10;}
 function isResource(type){return ['wood','forest','quarry','fisher','hunter','waterhut','farm','coalmine','ironmine','goldmine','stonemine'].indexOf(type)>=0;}
 function rejected(type,x,y){return (M.rejected[type+':'+x+':'+y]||0)>t;}
 function can(type,x,y){return typeof canPlace==='function'&&canPlace(type,x,y);}
 function findSpot(type){
  var list=M.spots[type]||[];
  for(var p of list)if(!rejected(type,p.x,p.y)&&can(type,p.x,p.y))return p;
  if(isResource(type)||typeof canPlace!=='function')return null;
  var bases=[home];
  for(var bb of guards)bases.push({x:bb.x+(bb.w||3)/2,y:bb.y+(bb.h||3)/2});
  var radius=(type==='guard'?16:24),step=2;
  for(var base of bases)for(var dy=-radius;dy<=radius;dy+=step)for(var dx=-radius;dx<=radius;dx+=step){
   var x=Math.floor(base.x+dx),y=Math.floor(base.y+dy);
   if(x<1||y<1||x>=(map.w||240)-4||y>=(map.h||240)-4||rejected(type,x,y))continue;
   var idx=y*(map.w||240)+x;
   if(map.owner&&map.owner[idx]!==me)continue;
   if(can(type,x,y))return {x:x,y:y};
  }
  return null;
 }
 var pendingN=0;for(var pn in M.pendingPlace)if(Object.prototype.hasOwnProperty.call(M.pendingPlace,pn))pendingN++;
 if(siteN+pendingN<2&&(M.lastPlaceAt||0)<=t){
  for(var next of wants){
   if(M.pendingPlace[next])continue;
   var pos=findSpot(next);if(!pos)continue;
   out.push(['place',{type:next,x:pos.x,y:pos.y}]);
   M.pendingPlace[next]={at:t,count:has(next)};M.lastPlaceAt=t+8;M.spots[next]=[];break;
  }
 }
 if(t-(M.noteAt||0)>=900){
  out.push(['note',{text:'v255 NPC-paced rush: quarry/wood '+has('quarry')+'/'+has('wood')+', guards '+has('guard')+', ore mines '+has('coalmine')+'/'+has('ironmine')+', barracks '+has('barracks')+', soldiers '+totalSoldiers+', carriers '+carriers+'.'}]);
  M.noteAt=t;
 }
}