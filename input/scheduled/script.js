// ChatGPT scheduled — v254 adaptive full-game builder, resource-first growth, and controlled conquest.
// Rebase the town on the kit's proven builder loop: protect the first stone/plank chain, grow only on real
// carrier pressure, staff border posts before expanding, and keep the army/siege state independent of economy.
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
 function idOrder(a,b){return a.id===b.id?0:(a.id<b.id?-1:1);}
 function power(s){
  var hp=s.hp||s.maxHp||10,str=typeof s.str==='number'?s.str/100:.6;
  return hp*(.6+.2*(s.arm||0))*str;
 }
 var ownHQ=null;
 for(var h of bld)if(h.owner===me&&h.type==='hq'){ownHQ=h;break;}
 var hx=ownHQ?ownHQ.x+(ownHQ.w||5)/2:(map.w||240)/2;
 var hy=ownHQ?ownHQ.y+(ownHQ.h||4)/2:(map.h||240)/2;
 var ownMil=bld.filter(function(b){return b.owner===me&&isMil(b);});
 var free=mine.filter(function(s){return !s.order&&!s.defends&&!s.fighting&&!s.moving&&!s.held;});
 var fighters=free.filter(function(s){return s.kind!=='banner'&&s.hp>=(s.maxHp||10)*.65;});
 var banners=free.filter(function(s){return s.kind==='banner';});
 var refusedAttack=false;
 for(var r of (view.refused||[]))if(r.order==='attack')refusedAttack=true;
 if(refusedAttack){M.attackAfter=t+90;M.siege=null;}
 
 // Release only soldiers from a siege that has ended; never sweep up unrelated held soldiers.
 if(M.releaseIds&&M.releaseIds.length){
  var keepRelease=[],releaseNow=[];
  for(var rid of M.releaseIds){
   var rsold=null;for(var sr of mine)if(sr.id===rid){rsold=sr;break;}
   if(rsold&&!rsold.fighting&&!rsold.defends)releaseNow.push(rid);
   else if(rsold)keepRelease.push(rid);
  }
  if(releaseNow.length)out.push(['free',{ids:releaseNow}]);
  M.releaseIds=keepRelease;
 }
 
 // Protect the HQ and staffed border posts before starting or continuing an offensive.
 var threat=null,threatD=18;
 for(var foe of foes)for(var own of ownMil){
  var od=dist(foe,{x:own.x+(own.w||3)/2,y:own.y+(own.h||3)/2});
  if(od<threatD){threatD=od;threat=foe;}
 }
 if(threat&&fighters.length>=8&&(M.defendAt||0)<=t){
  var homeGroup=fighters.slice().sort(function(a,b){
   return dist(a,threat)-dist(b,threat)||idOrder(a,b);
  }).slice(0,Math.min(6,Math.max(0,fighters.length-4)));
  if(homeGroup.length>=4){
   out.push(['march',{ids:homeGroup.map(function(s){return s.id;}),tx:Math.round(threat.x),ty:Math.round(threat.y),
    form:'block',am:true,loose:true}]);
   M.defendAt=t+35;return;
  }
 }
 
 // Track one siege at a time and release only its own group after capture.
 if(M.siege&&M.siege.ids){
  var live=[];
  for(var sid of M.siege.ids)for(var ss of mine)if(ss.id===sid){live.push(ss);break;}
  var target=null,ours=false;
  for(var x of eb)if(x.id===M.siege.id){target=x;break;}
  for(var ob of bld)if(ob.id===M.siege.id&&ob.owner===me){ours=true;break;}
  if(!target||ours){
   M.releaseIds=M.siege.ids.slice();M.siege=null;M.attackAfter=t+12;return;
  }
  if(target.remembered&&typeof target.seenAt==='number'&&t-target.seenAt>240){
   var stale=[];for(var stl of live)if(!stl.fighting)stale.push(stl.id);
   if(stale.length)out.push(['march',{ids:stale,tx:Math.round(hx),ty:Math.round(hy),form:'block',am:false,loose:true}]);
   M.siege=null;M.attackAfter=t+120;return;
  }
  var alive=0;
  for(var la of live)if(la.kind!=='banner')alive++;
  if(typeof M.siege.last==='number'&&alive<M.siege.last)
   M.siege.losses=(M.siege.losses||0)+M.siege.last-alive;
  M.siege.last=alive;
  var lossLimit=Math.max(2,Math.ceil((M.siege.start||8)*.35));
  if((M.siege.losses||0)>=lossLimit){
   var retreat=[];for(var rs of live)if(!rs.fighting)retreat.push(rs.id);
   if(retreat.length)out.push(['march',{ids:retreat,tx:Math.round(hx),ty:Math.round(hy),form:'block',am:false,loose:true}]);
   M.siege=null;M.attackAfter=t+150;return;
  }
  return;
 }
 
 var targets=eb.filter(function(b){
  return isMil(b)&&b.built!==false&&(!b.remembered||typeof b.seenAt!=='number'||t-b.seenAt<240);
 });
 function targetRank(b){
  if(b.type==='hq')return 5;
  if(b.type==='castle')return b.manned?4:2;
  if(b.type==='tower')return b.manned?3:0;
  return b.manned?3:0;
 }
 targets.sort(function(a,b){
  return targetRank(a)-targetRank(b)||
   dist({x:hx,y:hy},door(a))-dist({x:hx,y:hy},door(b))||idOrder(a,b);
 });
 if(t>=(M.attackAfter||0)&&fighters.length>=15){
  for(var target1 of targets){
   if(target1.type==='hq'&&targets.length>1)continue;
   var d=door(target1),danger=0;
   for(var e of foes)if(dist(e,d)<24)danger+=power(e);
   var guards=target1.type==='castle'?10:target1.type==='tower'?6:target1.type==='hq'?1:3;
   var reserve=fighters.length>=20?6:4;
   var maxGroup=Math.min(24,Math.max(0,fighters.length-reserve));
   var group=fighters.slice().sort(function(a,b){return dist(a,d)-dist(b,d)||idOrder(a,b);}).slice(0,maxGroup);
   var melee=0,strength=0;
   for(var q of group){if(q.kind!=='bow')melee++;strength+=power(q);}
   var minCount=target1.type==='hq'?20:target1.manned?(target1.type==='castle'?20:target1.type==='tower'?14:9):
    (target1.type==='castle'?8:target1.type==='tower'?6:4);
   var minMelee=target1.type==='hq'?12:target1.manned?(target1.type==='castle'?12:target1.type==='tower'?8:5):2;
   var need=1.5*(danger+6*(target1.manned?guards:1))+12;
   if(group.length<minCount||melee<minMelee||strength<need)continue;
   var support=[];
   if(view.switches&&view.switches.banner&&banners.length){
    var wantB=Math.min(banners.length,Math.ceil(group.length/8));
    support=banners.slice().sort(function(a,b){return dist(a,d)-dist(b,d)||idOrder(a,b);}).slice(0,wantB);
   }
   var ids=group.map(function(s){return s.id;}).concat(support.map(function(s){return s.id;}));
   out.push(['attack',{ids:ids,b:target1.id}]);
   M.siege={id:target1.id,ids:ids,start:group.length,last:group.length,losses:0,started:t};
   M.attackAfter=t+30;return;
  }
 }
 
 // A two-stage plain scout reveals the centre and the mirrored enemy HQ without risking the bowmen.
 if(!eb.length&&(M.scoutStage||0)<2&&!M.scoutBusy&&t>=90&&(M.scoutAt||0)<=t&&map.w){
  var scout=null;
  if(M.scoutId)for(var sc0 of free)if(sc0.id===M.scoutId&&sc0.kind==='sword'){scout=sc0;break;}
  if(!scout)for(var sc1 of free)if(sc1.kind==='sword'){scout=sc1;break;}
  if(scout){
   var enemyX=map.w-hx,stage=M.scoutStage||0;
   var tx=stage===0?Math.floor(map.w/2):Math.round(enemyX-(enemyX>hx?10:-10));
   tx=Math.max(2,Math.min(map.w-3,tx));
   out.push(['march',{ids:[scout.id],tx:tx,ty:Math.round(hy),form:'line',am:false,loose:true}]);
   M.scoutId=scout.id;M.scoutStage=stage+1;M.scoutAt=t+180;return;
  }
 }
 
 // If fog still hides every enemy building, send one supported probe rather than repeated solo scouts.
 if(!eb.length&&(M.scoutStage||0)>=2&&fighters.length>=12&&(M.probeAt||0)<=t&&map.w){
  var ex=map.w-hx,probe=fighters.slice().sort(function(a,b){
   return dist(a,{x:ex,y:hy})-dist(b,{x:ex,y:hy})||idOrder(a,b);
  }).slice(0,Math.min(8,fighters.length-4));
  if(probe.length>=8){
   out.push(['march',{ids:probe.map(function(s){return s.id;}),tx:Math.round(ex),ty:Math.round(hy),
    form:'block',am:true,loose:true}]);
   M.probeAt=t+360;return;
  }
 }
 
 // Raid exposed production buildings only when no enemy military target is known.
 var raids=eb.filter(function(b){
  return !isMil(b)&&b.built!==false&&(!b.remembered||typeof b.seenAt!=='number'||t-b.seenAt<180);
 });
 var raidRank={barracks:0,weaponsmith:1,smelter:2,smith:3,coalmine:4,ironmine:5,wood:6,saw:7,quarry:8};
 raids.sort(function(a,b){
  var ar=raidRank[a.type]===undefined?20:raidRank[a.type],br=raidRank[b.type]===undefined?20:raidRank[b.type];
  return ar-br||dist({x:hx,y:hy},door(a))-dist({x:hx,y:hy},door(b))||idOrder(a,b);
 });
 if(!targets.length&&fighters.length>=12&&(M.attackAfter||0)<=t){
  for(var raid of raids){
   var rd=door(raid),raidDanger=0;
   for(var re of foes)if(dist(re,rd)<22)raidDanger+=power(re);
   var raidGroup=fighters.slice().sort(function(a,b){return dist(a,rd)-dist(b,rd)||idOrder(a,b);})
    .slice(0,Math.min(8,Math.max(0,fighters.length-4)));
   var raidPower=0;for(var rq of raidGroup)raidPower+=power(rq);
   if(raidGroup.length>=6&&raidPower>raidDanger*1.4+8){
    var raidIds=raidGroup.map(function(s){return s.id;});
    out.push(['attack',{ids:raidIds,b:raid.id}]);
    M.siege={id:raid.id,ids:raidIds,start:raidIds.length,last:raidIds.length,losses:0,started:t};
    M.attackAfter=t+30;return;
   }
  }
 }
}
function economy(view,M,out){
 var E=view.economy||{},map=view.map||{},S=view.switches||{},t=view.t||0,me=view.me;
 var town=E.town||[],stock=E.stock||{},people=E.people||{},idle=E.idle||{},units=E.units||[];
 var carriers=people.carrier||0,idleC=idle.carrier||0,spots=E.spots||{},land=E.land||{};
 var count={},built={},pendingCost={},siteN=0,bedsComing=0;
 for(var b of town){
  count[b.type]=(count[b.type]||0)+1;
  if(b.built)built[b.type]=(built[b.type]||0)+1;
  else{
   siteN++;
   if(b.cost)for(var it in b.cost)if(Object.prototype.hasOwnProperty.call(b.cost,it))
    pendingCost[it]=(pendingCost[it]||0)+Math.max(0,b.cost[it]-((b.delivered||{})[it]||0));
  }
  bedsComing+=b.coming||0;
 }
 function has(type){return count[type]||0;}
 function done(type){return built[type]||0;}
 function st(it){return stock[it]||0;}
 function tip(k){return (E.tips||[]).some(function(z){return z.k===k;});}
 function ore(kind){for(var o of (E.ore||[]))if(o.ore===kind)return true;return false;}
 function status(type,needle){
  for(var z of town)if(z.type===type&&(z.status||'').toLowerCase().indexOf(needle.toLowerCase())>=0)return true;
  return false;
 }
 function spare(it,n){return st(it)>=(n+(pendingCost[it]||0));}
 M.pendingPlace=M.pendingPlace||{};M.rejected=M.rejected||{};M.spots=M.spots||{};
 M.prioSent=M.prioSent||{};M.garrisonSent=M.garrisonSent||{};M.toolSent=M.toolSent||{};
 M.targetSent=M.targetSent||{};M.vaultSent=M.vaultSent||{};M.geoSent=M.geoSent||{};
 for(var sk in spots)if(Object.prototype.hasOwnProperty.call(spots,sk))M.spots[sk]=spots[sk];
 for(var rr of (view.refused||[])){
  if(rr.order==='place'&&rr.args){
   delete M.pendingPlace[rr.args.type];
   M.rejected[rr.args.type+':'+rr.args.x+':'+rr.args.y]=t+90;
   M.spots[rr.args.type]=[];
  }
  if(rr.args&&rr.order==='priority')delete M.prioSent[rr.args.b];
  if(rr.args&&(rr.order==='fighters'||rr.order==='archers'))delete M.garrisonSent[rr.args.b];
  if(rr.args&&rr.order==='armyTarget')delete M.targetSent[rr.args.kind];
  if(rr.args&&rr.order==='toolKeep')delete M.toolSent[rr.args.k];
  if(rr.order==='vaultKeep'&&rr.args)delete M.vaultSent[rr.args.b];
  if(rr.order==='armyReserve')M.reserveSent=null;
  if(rr.args&&rr.order==='armyArmor')delete M.armorSent[rr.args.kind];
 }
 for(var pp in M.pendingPlace)if(Object.prototype.hasOwnProperty.call(M.pendingPlace,pp)){
  var pend=M.pendingPlace[pp];
  if(typeof pend==='number')pend={at:pend,count:0};
  if(has(pp)>(pend.count||0)||(t-(pend.at||0))>240)delete M.pendingPlace[pp];
  else M.pendingPlace[pp]=pend;
 }
 for(var rk in M.rejected)if(Object.prototype.hasOwnProperty.call(M.rejected,rk)&&M.rejected[rk]<=t)delete M.rejected[rk];
 
 var ownBuildings=(view.buildings||[]).filter(function(x){return x.owner===me;});
 var hq=null;
 for(var hb of ownBuildings)if(hb.type==='hq'){hq=hb;break;}
 var home=hq?{x:hq.x+(hq.w||5)/2,y:hq.y+(hq.h||4)/2}:{x:(map.w||240)/2,y:(map.h||240)/2};
 var totalSoldiers=(view.soldiers||[]).length;
 for(var ob of ownBuildings)if(ob.military||['hq','guard','tower','castle'].indexOf(ob.type)>=0)
  totalSoldiers+=(ob.troops||[]).length;
 
 // Use the kit's canonical unsearched list. A geologist is recruited only after the core house/quarry exists.
 var geos=units.filter(function(u){return u.role==='geologist';});
 var unsearched=Array.isArray(E.unsearched)?E.unsearched:[];
 var maxGeos=done('smith')>0?2:1;
 if(done('quarry')>0&&done('house')>0&&geos.length<maxGeos&&
  ((land.unsearched||0)>12||unsearched.length>0||tip('ore'))&&
  st('pick')>0&&carriers>4&&idleC>0&&(M.geoRecruitAt||0)<=t){
  out.push(['profession',{role:'geologist',d:1}]);M.geoRecruitAt=t+45;
 }
 M.geoBad=M.geoBad||{};
 for(var g of geos){
  var last=M.geoSent[g.id];
  if(last&&!g.busy&&!g.moving&&t-last.at>30){
   var still=unsearched.some(function(u){return u.x===last.x&&u.y===last.y;});
   if(still)M.geoBad[last.x+':'+last.y]=t+300;
   delete M.geoSent[g.id];last=null;
  }
  if(g.busy||g.moving)continue;
  var spot=null;
  for(var u of unsearched){
   var key=u.x+':'+u.y;
   if((M.geoBad[key]||0)>t)continue;
   var idx=u.y*(map.w||240)+u.x,ground=map.grounds&&map.ter?map.grounds[map.ter[idx]]:null;
   if(ground&&ground.mine){spot=u;break;}
  }
  if(spot){
   var duplicate=false;
   for(var other of geos)if(other.id!==g.id&&other.to&&Math.abs(other.to.x-spot.x)+Math.abs(other.to.y-spot.y)<=8)duplicate=true;
   if(!duplicate){
    out.push(['sendUnit',{u:g.id,tx:spot.x,ty:spot.y}]);
    M.geoSent[g.id]={x:spot.x,y:spot.y,at:t};
   }
  }
 }
 
 // Housing follows actual carrier/worker pressure, not a nearly-full bed count.
 var peopleShort=carriers<9||idleC<3||(E.homeless||0)>0||tip('carriers')||tip('settlers')||tip('weapons');
 var houseSite=false;
 for(var hs of town)if(!hs.built&&/^house/.test(hs.type))houseSite=true;
 var homes=peopleShort&&bedsComing<6&&!houseSite;
 var border=ownBuildings.filter(function(x){return x.type!=='hq'&&(x.military||['guard','tower','castle'].indexOf(x.type)>=0);});
 var canExpand=border.every(function(x){return x.built&&x.troops&&x.troops.length>0;});
 var expand=canExpand&&((M.expandAfter||90)<=t||tip('land')||tip('ore'));
 
 // Keep the kit's production dependencies, but allow food and resource work to continue independently.
 var wants=[];
 function add(type,max,plank,stone,ready){
  if(ready&&has(type)<max&&spare('plank',plank)&&spare('stone',stone)&&wants.indexOf(type)<0)wants.push(type);
 }
 add('wood',1,2,2,true);
 add('quarry',1,2,3,done('wood')>0);
 add('saw',1,3,4,done('quarry')>0);
 add('house',1,3,3,homes&&has('saw')>0);
 add('wood',2,2,2,has('saw')>0&&st('log')<12);
 add('forest',1,3,1,has('house')>0&&done('wood')>0);
 add('guard',4,2,3,expand&&has('house')>0);
 add('fisher',1,3,2,has('house')>0&&carriers>=7);
 add('hunter',1,3,2,S.hunter&&has('house')>0&&carriers>=8);
 add('coalmine',1,4,1,ore('coal')&&done('fisher')>0);
 add('ironmine',1,4,1,ore('ironore')&&(done('fisher')>0||done('hunter')>0));
 add('smelter',1,4,6,done('coalmine')>0&&done('ironmine')>0);
 add('smith',1,3,5,done('smelter')>0);
 add('weaponsmith',1,5,7,done('smelter')>0||st('iron')>=4);
 add('barracks',1,4,5,has('weaponsmith')>0||st('sword')>=2);
 add('waterhut',1,3,4,has('house')>0&&carriers>=8);
 add('farm',1,6,6,has('waterhut')>0&&t>600);
 add('mill',1,3,3,has('farm')>0);
 add('bakery',1,4,5,has('mill')>0&&has('waterhut')>0);
 add('pigfarm',1,6,6,has('farm')>0&&has('waterhut')>0);
 add('butcher',1,4,4,has('pigfarm')>0);
 add('house2',2,5,6,homes&&has('house')>0&&t>1200);
 add('house',4,3,3,homes&&has('saw')>0);
 add('house3',1,10,12,homes&&t>2400&&has('saw')>0);
 
 var coalFood=done('fisher')>0||done('bakery')>0;
 var ironFood=done('fisher')>0||done('butcher')>0||(S.hunter&&done('hunter')>0);
 var coalStable=done('coalmine')>=2||st('coal')>=12;
 add('coalmine',2,4,1,ore('coal')&&done('smith')>0&&coalFood&&st('coal')<16&&st('pick')>0);
 add('ironmine',2,4,1,ore('ironore')&&done('smith')>0&&ironFood&&st('ironore')<10&&st('pick')>1);
 add('stonemine',1,5,0,ore('stone')&&done('smith')>0&&coalFood&&st('stone')<15&&st('pick')>1);
 add('goldmine',2,5,1,ore('goldore')&&done('smith')>0&&st('pick')>1&&st('goldore')<8&&
  (done('fisher')>0||done('bakery')>0||done('butcher')>0));
 add('goldsmelter',1,4,6,coalStable&&done('goldmine')>0);
 add('vault',4,3,4,S.vault&&done('goldsmelter')>0&&(has('vault')===0||st('gold')>12));
 add('armorer',1,4,5,S.armor&&done('barracks')>0&&coalStable&&st('iron')>=2&&totalSoldiers>=8);
 add('wood',4,2,2,done('smith')>0&&st('log')<12);
 add('saw',2,3,4,done('smith')>0&&st('plank')<18);
 add('forest',3,3,1,has('wood')>=3||status('wood','no grown trees'));
 add('quarry',3,2,3,done('smith')>0&&st('stone')<14);
 add('fisher',3,3,2,done('smith')>0&&st('fish')<10);
 add('hunter',2,3,2,S.hunter&&done('weaponsmith')>0&&st('meat')<10);
 add('farm',3,6,6,done('pigfarm')>0&&st('grain')<10);
 add('waterhut',2,3,4,done('pigfarm')>0&&st('water')<10);
 add('bakery',2,4,5,done('coalmine')>=2&&done('mill')>0&&st('bread')<8);
 add('tower',2,5,5,expand&&view.soldiers&&view.soldiers.length>=8&&border.length>=2);
 add('castle',1,8,12,expand&&view.soldiers&&view.soldiers.length>=14&&t>1500);
 
 // One-time garrison/priority settings; keep a real swordsman in each guard.
 for(var gb of town)if(gb.type==='guard'&&gb.built){
  var gs=M.garrisonSent[gb.id]||{f:false,a:false};
  if(!gs.f&&gb.fighters>1){out.push(['fighters',{b:gb.id,set:1}]);gs.f=true;}
  if(!gs.a&&!done('barracks')&&gb.archers>0){out.push(['archers',{b:gb.id,set:0}]);gs.a=true;}
  M.garrisonSent[gb.id]=gs;
 }
 var priorityTypes=['guard','quarry','saw','fisher','hunter','coalmine','ironmine','smelter','smith','weaponsmith','barracks','waterhut','farm','mill','bakery','pigfarm','butcher','goldmine','goldsmelter'];
 for(var pb of town)if(pb.built&&priorityTypes.indexOf(pb.type)>=0&&!M.prioSent[pb.id]){
  if(pb.prio!==true)out.push(['priority',{b:pb.id,on:true}]);
  M.prioSent[pb.id]=true;
 }
 
 var A=E.army||{},reserve=totalSoldiers>=20?6:4;
 if(A.reserve!==reserve&&M.reserveSent!==reserve){out.push(['armyReserve',{set:reserve}]);M.reserveSent=reserve;}
 if(done('barracks')>0){
  var stable=done('smelter')>0&&done('weaponsmith')>0&&done('coalmine')>0&&done('ironmine')>0&&carriers>=9;
  var targets=stable?{sword:18,spear:8,bow:12}:{sword:10,spear:4,bow:6};
  var current=A.target||{};
  for(var kind of ['sword','spear','bow'])if(current[kind]!==targets[kind]&&M.targetSent[kind]!==targets[kind]){
   out.push(['armyTarget',{kind:kind,set:targets[kind]}]);M.targetSent[kind]=targets[kind];
  }
  if(S.banner&&done('goldsmelter')>0&&st('gold')>=2){
   var bannerTarget=stable?3:1;
   if(current.banner!==bannerTarget&&M.targetSent.banner!==bannerTarget){
    out.push(['armyTarget',{kind:'banner',set:bannerTarget}]);M.targetSent.banner=bannerTarget;
   }
  }
  if(S.armor&&done('armorer')>0&&A.armor&&A.armor.bow!==1&&M.armorSent.bow!==1){
   out.push(['armyArmor',{kind:'bow',set:1}]);M.armorSent.bow=1;
  }
 }
 for(var vb of town)if(S.vault&&vb.type==='vault'&&vb.built&&vb.keep!==40&&M.vaultSent[vb.id]!==40){
  out.push(['vaultKeep',{b:vb.id,set:40}]);M.vaultSent[vb.id]=40;
 }
 for(var ab of town)if(S.armor&&S.gear&&ab.type==='armorer'&&ab.built&&!ab.repair){
  if(!M.repairSent)M.repairSent={};
  if(!M.repairSent[ab.id]){out.push(['armorRepair',{b:ab.id,on:true}]);M.repairSent[ab.id]=true;}
 }
 for(var tpIndex=0;tpIndex<(E.toolPlan||[]).length;tpIndex++){
  var tp=E.toolPlan[tpIndex],keep=tp.tool==='pick'?2:tp.tool==='hammer'?1:tp.tool==='saw'?1:
   tp.tool==='axe'?1:tp.tool==='rod'?1:tp.tool==='shovel'?1:tp.tool==='scythe'?1:0;
  if(tp.keep!==keep&&M.toolSent[tpIndex]!==keep){
   out.push(['toolKeep',{k:tpIndex,set:keep}]);M.toolSent[tpIndex]=keep;
  }
 }
 
 // Ask for current legal spots, then place only one site at a time from reserved stock.
 var askList=[];
 for(var ai=0;ai<wants.length&&askList.length<6;ai++)if(askList.indexOf(wants[ai])<0)askList.push(wants[ai]);
 if(!askList.length)askList=['wood','quarry','saw','house','guard','fisher'];
 if(t>=(M.askAt||0)){out.push(['ask',{spots:askList}]);M.askAt=t+12;}
 
 function isResource(type){
  return ['wood','forest','quarry','fisher','hunter','waterhut','coalmine','ironmine','goldmine','stonemine'].indexOf(type)>=0;
 }
 function rejected(type,x,y){return (M.rejected[type+':'+x+':'+y]||0)>t;}
 function can(type,x,y){return typeof canPlace==='function'&&canPlace(type,x,y);}
 function militarySpot(type){
  var list=M.spots[type]||[],candidates=[];
  for(var sp of list)if(!rejected(type,sp.x,sp.y)&&can(type,sp.x,sp.y))candidates.push(sp);
  var radius=type==='tower'?20:type==='castle'?26:14,size=type==='tower'?5:type==='castle'?8:3;
  var bases=[home];
  for(var bb of border)bases.push({x:bb.x+(bb.w||3)/2,y:bb.y+(bb.h||3)/2});
  for(var base of bases)for(var dy=-radius;dy<=radius;dy+=4)for(var dx=-radius;dx<=radius;dx+=4){
   if(Math.abs(dx)+Math.abs(dy)<radius-4)continue;
   var x=Math.floor(base.x+dx),y=Math.floor(base.y+dy);
   if(x<1||y<1||x>=(map.w||240)-size-1||y>=(map.h||240)-size-1||rejected(type,x,y))continue;
   if(can(type,x,y))candidates.push({x:x,y:y,n:0});
  }
  var best=null,bestScore=-1e18,enemyX=(map.w||240)-home.x,forward=enemyX>home.x?1:-1;
  for(var cp of candidates){
   var score=(typeof cp.n==='number'?cp.n:0),r=radius;
   for(var sy=-r;sy<=r;sy+=4)for(var sx=-r;sx<=r;sx+=4){
    if(sx*sx+sy*sy>r*r)continue;
    var xx=Math.floor(cp.x+sx+size/2),yy=Math.floor(cp.y+sy+size/2);
    if(xx<0||yy<0||xx>=(map.w||240)||yy>=(map.h||240))continue;
    var idx=yy*(map.w||240)+xx;
    if(map.owner&&map.owner[idx]!==0)continue;
    if(map.known&&map.known[idx]===0){score+=.3;continue;}
    var ground=map.grounds&&map.ter?map.grounds[map.ter[idx]]:null;
    if(ground&&ground.land)score++;
    if(ground&&ground.mine)score+=2;
   }
   score+=(cp.x+size/2-home.x)*forward*.02;
   if(score>bestScore){bestScore=score;best=cp;}
  }
  return bestScore>=5?best:null;
 }
 function findSpot(type){
  if(type==='guard'||type==='tower'||type==='castle')return militarySpot(type);
  var list=M.spots[type]||[];
  for(var p of list)if(!rejected(type,p.x,p.y)&&can(type,p.x,p.y))return p;
  if(isResource(type)||typeof canPlace!=='function')return null;
  var best=null,bestD=1e18;
  for(var dy=-18;dy<=18;dy+=3)for(var dx=-18;dx<=18;dx+=3){
   var x=Math.floor(home.x+dx),y=Math.floor(home.y+dy);
   if(x<1||y<1||x>=(map.w||240)-4||y>=(map.h||240)-4||rejected(type,x,y)||!can(type,x,y))continue;
   var d=Math.abs(dx)+Math.abs(dy);
   if(d<bestD){bestD=d;best={x:x,y:y};}
  }
  return best;
 }
 var siteLimit=t<360?3:5,pendingN=0;
 for(var pn in M.pendingPlace)if(Object.prototype.hasOwnProperty.call(M.pendingPlace,pn))pendingN++;
 if(siteN+pendingN<siteLimit&&(M.lastPlaceAt||0)<=t){
  for(var next of wants){
   if(M.pendingPlace[next])continue;
   var pos=findSpot(next);if(!pos)continue;
   out.push(['place',{type:next,x:pos.x,y:pos.y}]);
   M.pendingPlace[next]={at:t,count:has(next)};
   M.lastPlaceAt=t+12;M.spots[next]=[];
   if(next==='guard'||next==='tower'||next==='castle')M.expandAfter=t+90;
   break;
  }
 }
 if(t-(M.noteAt||0)>=900){
  out.push(['note',{text:'v254 adaptive builder: houses '+has('house')+'/'+has('house2')+', guards '+has('guard')+', mines '+has('coalmine')+'/'+has('ironmine')+', carriers '+carriers+' idle '+idleC+', soldiers '+totalSoldiers+', sites '+siteN+'.'}]);
  M.noteAt=t;
 }
}