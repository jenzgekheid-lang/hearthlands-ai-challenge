// ChatGPT scheduled — v253 lean-core economy, automatic garrisons, and siege-first conquest.
// Replace the sprawling multi-guard builder with one reliable production chain, a small workforce,
// a single forward guard, and an army command path that cannot be starved by repeated settings.
// Game version: 253
function think(view){
 if(!view||view.over)return [];
 var M=memory.plan||(memory.plan={}),out=[];
 M.sentThisTurn={};
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
 function power(s){
  var hp=s.hp||s.maxHp||10,str=typeof s.str==='number'?s.str/100:.6;
  var kind=s.kind==='bow'?.55:s.kind==='banner'?0:1;
  return hp*str*kind*(1+.12*(s.arm||0)+.06*(s.rank||0));
 }
 var ownHQ=null;
 for(var h of bld)if(h.owner===me&&h.type==='hq'){ownHQ=h;break;}
 var hx=ownHQ?ownHQ.x+(ownHQ.w||5)/2:(map.w||240)/2;
 var hy=ownHQ?ownHQ.y+(ownHQ.h||4)/2:(map.h||240)/2;
 var ownMil=bld.filter(function(b){return b.owner===me&&isMil(b);});
 var free=mine.filter(function(s){
  return !s.order&&!s.defends&&!s.fighting&&!s.moving&&!s.held;
 });
 var fighters=free.filter(function(s){return s.kind!=='banner'&&s.hp>=(s.maxHp||10)*.6;});
 var melee=fighters.filter(function(s){return s.kind!=='bow';});
 var bows=fighters.filter(function(s){return s.kind==='bow';});
 var refused=false;
 for(var r of (view.refused||[]))if(r.order==='attack')refused=true;
 if(refused){M.attackAfter=t+90;M.siege=null;}

 // Defend the HQ or a nearby military post before continuing a siege or starting another attack.
 var threat=null,threatD=18;
 for(var f of foes)for(var own of ownMil){
  var od=dist(f,{x:own.x+(own.w||3)/2,y:own.y+(own.h||3)/2});
  if(od<threatD){threatD=od;threat=f;}
 }
 if(threat&&fighters.length>=8&&(M.defendAt||0)<=t){
  var defenders=fighters.slice().sort(function(a,b){return dist(a,threat)-dist(b,threat);})
   .slice(0,Math.min(6,Math.max(0,fighters.length-4)));
  if(defenders.length>=4){
   out.push(['march',{ids:defenders.map(function(s){return s.id;}),tx:Math.round(threat.x),ty:Math.round(threat.y),
    form:'block',am:true,loose:true}]);
   M.defendAt=t+45;return;
  }
 }

 // Track only the soldiers assigned to the current siege. Never free every held idle soldier:
 // a soldier may be moving into a garrison, and a blanket free order cancels that.
 if(M.siege&&M.siege.ids){
  var live=[];
  for(var sid of M.siege.ids)for(var ss of mine)if(ss.id===sid){live.push(ss);break;}
  var target=null,ours=false;
  for(var x of eb)if(x.id===M.siege.id){target=x;break;}
  for(var ob of bld)if(ob.id===M.siege.id&&ob.owner===me){ours=true;break;}
  if(!target||ours){
   var release=[];
   for(var ls of live)if(!ls.fighting)release.push(ls.id);
   if(release.length)out.push(['free',{ids:release}]);
   M.siege=null;M.attackAfter=t+8;return;
  }
  if(target.remembered&&typeof target.seenAt==='number'&&t-target.seenAt>240){
   var stale=[];for(var stl of live)if(!stl.fighting)stale.push(stl.id);
   if(stale.length)out.push(['march',{ids:stale,tx:Math.round(hx),ty:Math.round(hy),form:'block',am:false,loose:true}]);
   M.siege=null;M.attackAfter=t+120;return;
  }
  var fightersAlive=0;
  for(var la of live)if(la.kind!=='banner')fightersAlive++;
  if(typeof M.siege.last==='number'&&fightersAlive<M.siege.last)
   M.siege.losses=(M.siege.losses||0)+M.siege.last-fightersAlive;
  M.siege.last=fightersAlive;
  var lossLimit=Math.max(2,Math.ceil((M.siege.start||8)*.35));
  if((M.siege.losses||0)>=lossLimit){
   var retreat=[];
   for(var rs of live)if(!rs.fighting)retreat.push(rs.id);
   if(retreat.length)out.push(['march',{ids:retreat,tx:Math.round(hx),ty:Math.round(hy),
    form:'block',am:false,loose:true}]);
   M.siege=null;M.attackAfter=t+150;
   out.push(['note',{text:'v253 siege break: retreating after '+(M.siege.losses||0)+' field losses.'}]);
   return;
  }
  return;
 }

 var targets=eb.filter(function(b){
  return isMil(b)&&b.built!==false&&(!b.remembered||typeof b.seenAt!=='number'||t-b.seenAt<240);
 });
 targets.sort(function(a,b){
  function rank(x){if(x.type==='hq')return 4;if(x.type==='castle')return x.manned?3:1;
   if(x.type==='tower')return x.manned?2:0;return x.manned?2:0;}
  var ar=rank(a),br=rank(b);
  if(ar!==br)return ar-br;
  return dist({x:hx,y:hy},door(a))-dist({x:hx,y:hy},door(b));
 });
 if(t>=(M.attackAfter||0)){
  for(var target1 of targets){
   if(target1.type==='hq'&&targets.some(function(x){return x.type!=='hq';}))continue;
   var d=door(target1),enemyPower=0;
   for(var e of foes)if(dist(e,d)<24)enemyPower+=power(e);
   var cap=target1.type==='castle'?10:target1.type==='tower'?6:target1.type==='guard'?3:10;
   var need=enemyPower*1.25+(target1.manned?cap*5.5:0)+8;
   var minCount=target1.type==='hq'?(target1.manned?22:16):
    target1.manned?(target1.type==='castle'?20:target1.type==='tower'?14:9):
    (target1.type==='castle'?8:target1.type==='tower'?6:4);
   var minMelee=target1.type==='hq'?12:target1.manned?(target1.type==='castle'?12:target1.type==='tower'?8:5):2;
   var reserve=fighters.length>=20?6:4;
   var maxGroup=Math.min(24,Math.max(0,fighters.length-reserve));
   var group=melee.slice().sort(function(a,b){return dist(a,d)-dist(b,d);}).slice(0,maxGroup);
   if(group.length<maxGroup)
    group=group.concat(bows.slice().sort(function(a,b){return dist(a,d)-dist(b,d);}).slice(0,maxGroup-group.length));
   var meleeN=0,strength=0;
   for(var q of group){if(q.kind!=='bow')meleeN++;strength+=power(q);}
   if(group.length<minCount||meleeN<minMelee||strength<need)continue;
   var ids=group.map(function(s){return s.id;});
   out.push(['attack',{ids:ids,b:target1.id}]);
   M.siege={id:target1.id,ids:ids,start:group.length,last:group.length,losses:0,started:t};
   M.attackAfter=t+30;return;
  }
 }

 // If no military target is currently known, use one loose swordsman for two-stage reconnaissance.
 // A sword is chosen deliberately: the first guard needs a free bowman for its archer slot.
 var scoutBusy=false;
 if(M.scoutId)for(var sc of mine)if(sc.id===M.scoutId&&(sc.order||sc.moving||sc.held))scoutBusy=true;
 if(!targets.length&&(M.scoutStage||0)<2&&!scoutBusy&&t>=90&&(M.scoutAt||0)<=t&&map.w){
  var scout=null;
  for(var reuse of free)if(reuse.id===M.scoutId&&reuse.kind==='sword'){scout=reuse;break;}
  if(!scout)for(var sw of free)if(sw.kind==='sword'){scout=sw;break;}
  if(scout){
   var enemyX=map.w-hx,stage=M.scoutStage||0;
   var tx=stage===0?Math.floor(map.w/2):Math.round(enemyX-(enemyX>hx?10:-10));
   tx=Math.max(2,Math.min(map.w-3,tx));
   out.push(['march',{ids:[scout.id],tx:tx,ty:Math.round(hy),form:'line',am:false,loose:true}]);
   M.scoutId=scout.id;M.scoutStage=stage+1;M.scoutAt=t+180;return;
  }
 }

 // If the enemy's military line is not visible yet, a small loose column probes the mirrored HQ.
 if(!targets.length&&(M.scoutStage||0)>=2&&fighters.length>=12&&(M.probeAt||0)<=t&&map.w){
  var enemyX2=map.w-hx;
  var probe=fighters.slice().sort(function(a,b){return dist(a,{x:enemyX2,y:hy})-dist(b,{x:enemyX2,y:hy});})
   .slice(0,Math.min(10,fighters.length-4));
  if(probe.length>=8){
   out.push(['march',{ids:probe.map(function(s){return s.id;}),tx:Math.round(enemyX2),ty:Math.round(hy),
    form:'block',am:true,loose:true}]);
   M.probeAt=t+360;return;
  }
 }

 // Exposed workshops are secondary targets only when no military building is currently known.
 var raids=eb.filter(function(b){
  return b.type!=='hq'&&!isMil(b)&&b.built!==false&&(!b.remembered||typeof b.seenAt!=='number'||t-b.seenAt<180);
 });
 var raidRank={barracks:0,weaponsmith:1,smelter:2,smith:3,coalmine:4,ironmine:5,wood:6,saw:7,quarry:8};
 raids.sort(function(a,b){
  var ar=raidRank[a.type]===undefined?20:raidRank[a.type],br=raidRank[b.type]===undefined?20:raidRank[b.type];
  return ar-br||dist({x:hx,y:hy},door(a))-dist({x:hx,y:hy},door(b));
 });
 if(!targets.length&&fighters.length>=12&&(M.attackAfter||0)<=t){
  for(var raid of raids){
   var rd=door(raid),danger=0;
   for(var re of foes)if(dist(re,rd)<22)danger+=power(re);
   var raidGroup=fighters.slice().sort(function(a,b){return dist(a,rd)-dist(b,rd);})
    .slice(0,Math.min(8,Math.max(0,fighters.length-4)));
   var raidPower=0;for(var rq of raidGroup)raidPower+=power(rq);
   if(raidGroup.length>=6&&raidPower>danger*1.4+8){
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
 var count={},built={},siteN=0,bedsComing=0;
 for(var b of town){
  count[b.type]=(count[b.type]||0)+1;
  if(b.built)built[b.type]=(built[b.type]||0)+1;
  else siteN++;
  bedsComing+=b.coming||0;
 }
 function has(type){return count[type]||0;}
 function done(type){return built[type]||0;}
 function st(it){return stock[it]||0;}
 function tip(k){return (E.tips||[]).some(function(z){return z.k===k;});}
 function status(type,needle){
  for(var z of town)if(z.type===type&&(z.status||'').toLowerCase().indexOf(needle.toLowerCase())>=0)return true;
  return false;
 }
 function ore(kind){for(var o of (E.ore||[]))if(o.ore===kind)return true;return false;}
 M.spots=M.spots||{};M.pendingPlace=M.pendingPlace||{};M.rejected=M.rejected||{};
 M.prioSent=M.prioSent||{};M.garrisonSent=M.garrisonSent||{};M.toolSent=M.toolSent||{};
 for(var sk in spots)if(Object.prototype.hasOwnProperty.call(spots,sk))M.spots[sk]=spots[sk];
 for(var rr of (view.refused||[])){
  if(rr.order==='place'&&rr.args){
   delete M.pendingPlace[rr.args.type];
   M.rejected[rr.args.type+':'+rr.args.x+':'+rr.args.y]=t+90;
  }
  if(rr.args&&rr.order==='priority')delete M.prioSent[rr.args.b];
  if(rr.args&&(rr.order==='fighters'||rr.order==='archers'))delete M.garrisonSent[rr.args.b];
  if(rr.args&&rr.order==='armyTarget'&&M.targetSent)delete M.targetSent[rr.args.kind];
  if(rr.order==='armyReserve')M.reserveSent=null;
  if(rr.args&&rr.order==='toolKeep')delete M.toolSent[rr.args.k];
  if(rr.order==='vaultKeep')M.vaultSent=null;
 }
 for(var pp in M.pendingPlace)if(Object.prototype.hasOwnProperty.call(M.pendingPlace,pp)){
  if(has(pp)>0||t-M.pendingPlace[pp]>150)delete M.pendingPlace[pp];
 }
 var ownBuildings=(view.buildings||[]).filter(function(x){return x.owner===me;});
 var hq=null;
 for(var hb of ownBuildings)if(hb.type==='hq'){hq=hb;break;}
 var home=hq?{x:hq.x+(hq.w||5)/2,y:hq.y+(hq.h||4)/2}:{x:(map.w||240)/2,y:(map.h||240)/2};
 var totalSoldiers=(view.soldiers||[]).length;
 for(var ob of ownBuildings)if(ob.military||['hq','guard','tower','castle'].indexOf(ob.type)>=0)
  totalSoldiers+=(ob.troops||[]).length;

 // Geology is triggered by owned mountain land, not only by a non-empty unsearched array.
 // Some maps expose the mountain count before the coordinate list is populated.
 var geos=units.filter(function(u){return u.role==='geologist';});
 var unsearched=Array.isArray(E.unsearched)?E.unsearched:[];
 var mountainCount=land.mountain||0,unsearchedCount=land.unsearched||0;
 if(done('quarry')>0&&done('saw')>0&&done('house')>0&&geos.length<1&&
  (unsearched.length>0||mountainCount>0||unsearchedCount>0||tip('ore'))&&
  st('pick')>0&&carriers>3&&idleC>0&&(M.geoRecruitAt||0)<=t){
  out.push(['profession',{role:'geologist',d:1}]);M.geoRecruitAt=t+60;
 }
 M.geoBad=M.geoBad||{};M.geoDone=M.geoDone||{};M.geoTarget=M.geoTarget||{};
 for(var g of geos){
  var sent=M.geoTarget[g.id];
  if(sent&&!g.busy&&!g.moving&&t-sent.at>15){
   var still=unsearched.some(function(u){return u.x===sent.x&&u.y===sent.y;});
   if(still)M.geoBad[sent.x+':'+sent.y]=t+600;
   else M.geoDone[sent.x+':'+sent.y]=true;
   delete M.geoTarget[g.id];sent=null;
  }
  if(g.busy||g.moving||(sent&&t-sent.at<=15))continue;
  var target=null,best=1e18;
  for(var u of unsearched){
   var key=u.x+':'+u.y;if((M.geoBad[key]||0)>t)continue;
   var dx=u.x-g.x,dy=u.y-g.y,dd=typeof u.d==='number'?u.d:dx*dx+dy*dy;
   if(dd<best){best=dd;target=u;}
  }
  if(!target&&(unsearchedCount>0||mountainCount>0)&&map.ter&&map.grounds&&map.w){
   for(var iy=0;iy<(map.h||240);iy+=1)for(var ix=0;ix<map.w;ix+=1){
    var idx=iy*map.w+ix;
    if(map.known&&map.known[idx]===0)continue;
    var ground=map.grounds[map.ter[idx]];
    if(!ground||!ground.mine)continue;
    var key2=ix+':'+iy;if(M.geoDone[key2]||(M.geoBad[key2]||0)>t)continue;
    var gx=ix-g.x,gy=iy-g.y,gd=gx*gx+gy*gy;
    if(gd<best){best=gd;target={x:ix,y:iy};}
   }
  }
  if(target&&(M.geoUnitAt||0)<=t){
   out.push(['sendUnit',{u:g.id,tx:target.x,ty:target.y}]);
   M.geoTarget[g.id]={x:target.x,y:target.y,at:t};M.geoUnitAt=t+20;
  }
 }

 // Strict, lean build plan: one copy of each essential workplace. A house comes before
 // the fourth workplace; no hunter, early forester, second quarry, or second guard sprawl.
 var wants=[];
 function add(type,ok,max){
  max=max||1;
  if(ok&&has(type)<max&&!M.pendingPlace[type]&&wants.indexOf(type)<0)wants.push(type);
 }
 var population=E.population||0,beds=E.beds||0,homeless=E.homeless||0;
 var freeBeds=beds-population;
 var houseNeed=has('house')<4&&!M.pendingPlace.house&&bedsComing<4&&
  (has('house')===0&&done('saw')>0||homeless>0||freeBeds<5||
   (carriers<6&&idleC<2&&freeBeds<10));
 add('wood',true,1);
 add('quarry',done('wood')>0,1);
 add('saw',done('quarry')>0,1);
 add('house',houseNeed,4);
 add('guard',done('house')>0&&has('house')>=1,1);
 add('fisher',done('house')>0&&done('guard')>0&&carriers>=4&&idleC>=1,1);
 add('coalmine',done('fisher')>0&&ore('coal')&&carriers>=4,1);
 add('ironmine',done('fisher')>0&&ore('ironore')&&carriers>=4,1);
 add('smelter',done('coalmine')>0&&done('ironmine')>0&&carriers>=5,1);
 add('smith',done('smelter')>0&&carriers>=5,1);
 add('weaponsmith',done('smith')>0&&carriers>=5,1);
 add('barracks',done('weaponsmith')>0&&carriers>=5,1);
 var mineFoodShort=done('coalmine')>0&&(status('coalmine','waiting for food')||status('coalmine','needs bread')||
  status('coalmine','needs fish')||st('fish')<4);
 var ironFoodShort=done('ironmine')>0&&(status('ironmine','waiting for food')||status('ironmine','needs meat')||
  status('ironmine','needs fish')||st('fish')<4);
 if(mineFoodShort||ironFoodShort)add('fisher',carriers>=8&&st('fish')<5,2);
 if(status('wood','no grown trees in range')&&st('log')<8)add('wood',carriers>=8,2);
 if(status('quarry','no stone in range')&&st('stone')<8)add('quarry',carriers>=8,2);
 if(status('coalmine','deposit worn out')&&st('coal')<10)add('coalmine',carriers>=8,2);
 if(status('ironmine','deposit worn out')&&st('ironore')<10)add('ironmine',carriers>=8,2);
 add('guard',done('guard')>=1&&has('guard')===1&&t>600&&carriers>=8&&
  (tip('land')||tip('ore')||mountainCount<4),2);
 add('goldmine',done('barracks')>0&&ore('goldore')&&done('fisher')>0&&carriers>=9,1);
 add('goldsmelter',done('goldmine')>0&&done('coalmine')>0,1);
 add('vault',S.vault&&done('goldsmelter')>0,1);

 var askList=[];
 for(var ai=0;ai<wants.length&&askList.length<6;ai++)if(askList.indexOf(wants[ai])<0)askList.push(wants[ai]);
 if(!askList.length)askList=['wood','quarry','saw','house','guard','fisher'];
 if(t>=(M.askAt||0)){out.push(['ask',{spots:askList}]);M.askAt=t+20;}

 function isResource(type){
  return ['wood','quarry','fisher','hunter','forest','coalmine','ironmine','goldmine','stonemine'].indexOf(type)>=0;
 }
 function findSpot(type){
  var list=M.spots[type]||[],best=null,bestScore=-1e18;
  for(var sp of list){
   var rk=type+':'+sp.x+':'+sp.y;
   if((M.rejected[rk]||0)>t)continue;
   if(typeof sp.n==='number'&&sp.n<=0)continue;
   if(typeof canPlace==='function'&&!canPlace(type,sp.x,sp.y))continue;
   var score=typeof sp.n==='number'?sp.n:0;
   if(type==='guard'){
    var cx=sp.x+1.5,cy=sp.y+1.5;
    score+=((cx-home.x)*(map.w/2-home.x)+(cy-home.y)*(map.h/2-home.y))*.001;
   }
   if(score>bestScore){bestScore=score;best=sp;}
  }
  if(best||isResource(type)||typeof canPlace!=='function')return best;
  var size=type==='tower'?5:type==='castle'?8:3,bestP=null,bestD=1e18;
  var bases=[home];
  for(var ob2 of ownBuildings)if(ob2.type==='guard'||ob2.type==='tower')
   bases.push({x:ob2.x+(ob2.w||3)/2,y:ob2.y+(ob2.h||3)/2});
  for(var base of bases)for(var dy=-16;dy<=16;dy+=2)for(var dx=-16;dx<=16;dx+=2){
   var x=Math.floor(base.x+dx),y=Math.floor(base.y+dy);
   if(x<1||y<1||x>=(map.w||240)-size-1||y>=(map.h||240)-size-1)continue;
   if((M.rejected[type+':'+x+':'+y]||0)>t)continue;
   if(!canPlace(type,x,y))continue;
   var d=Math.abs(dx)+Math.abs(dy);
   if(d<bestD){bestD=d;bestP={x:x,y:y};}
  }
  return bestP;
 }

 // Keep at most two live sites. Never place the same type twice while its first site is pending.
 var siteLimit=done('house')>0?2:1,pendingN=0;
 for(var pendType in M.pendingPlace)if(Object.prototype.hasOwnProperty.call(M.pendingPlace,pendType))pendingN++;
 if(siteN+pendingN<siteLimit&&(M.lastPlaceAt||0)<=t){
  for(var next of wants){
   if(M.pendingPlace[next])continue;
   var pos=findSpot(next);if(!pos)continue;
   out.push(['place',{type:next,x:pos.x,y:pos.y}]);
   M.pendingPlace[next]=t;M.lastPlaceAt=t+18;M.spots[next]=[];
   break;
  }
 }

 // Use the economy town view for garrison settings; view.buildings does not expose fighters/archers.
 // A guard's permanent sword remains, and one bowman is requested to push territory.
 for(var pb of town)if(pb.type==='guard'&&pb.built){
  var gs=M.garrisonSent[pb.id]||{f:false,a:false};
  if(!gs.f&&pb.fighters!==0){out.push(['fighters',{b:pb.id,set:0}]);gs.f=true;}
  if(!gs.a&&pb.archers!==1){out.push(['archers',{b:pb.id,set:1}]);gs.a=true;}
  M.garrisonSent[pb.id]=gs;
 }

 // Prioritize only the small core, and issue each setting once per building id.
 var priorityTypes=['guard','quarry','saw','fisher','coalmine','ironmine','smelter','smith','weaponsmith','barracks','goldmine','goldsmelter'];
 for(var pb2 of town)if(pb2.built&&priorityTypes.indexOf(pb2.type)>=0&&!M.prioSent[pb2.id]){
  if(pb2.prio!==true)out.push(['priority',{b:pb2.id,on:true}]);
  M.prioSent[pb2.id]=true;
 }

 var A=E.army||{},reserve=totalSoldiers>=20?6:4;
 if(A.reserve!==reserve&&M.reserveSent!==reserve){out.push(['armyReserve',{set:reserve}]);M.reserveSent=reserve;}
 if(done('barracks')>0){
  var stable=done('smelter')>0&&done('weaponsmith')>0&&done('coalmine')>0&&done('ironmine')>0&&carriers>=9;
  var targets=stable?{sword:20,spear:12,bow:10}:{sword:14,spear:6,bow:6};
  var at=A.target||{};
  M.targetSent=M.targetSent||{};
  for(var kind of ['sword','spear','bow'])if(at[kind]!==targets[kind]&&M.targetSent[kind]!==targets[kind]){
   out.push(['armyTarget',{kind:kind,set:targets[kind]}]);M.targetSent[kind]=targets[kind];
  }
  if(S.banner&&done('goldsmelter')>0&&st('gold')>=2&&at.banner!==2&&(!M.targetSent||M.targetSent.banner!==2)){
   out.push(['armyTarget',{kind:'banner',set:2}]);M.targetSent=M.targetSent||{};M.targetSent.banner=2;
  }
 }
 for(var vb of town)if(S.vault&&vb.type==='vault'&&vb.built&&M.vaultSent!==vb.id){
  out.push(['vaultKeep',{b:vb.id,set:20}]);M.vaultSent=vb.id;
 }
 for(var tpIndex=0;tpIndex<(E.toolPlan||[]).length;tpIndex++){
  var tp=(E.toolPlan||[])[tpIndex],keep=tp.tool==='pick'?2:tp.tool==='hammer'?1:tp.tool==='saw'?1:
   tp.tool==='axe'?1:tp.tool==='rod'?1:tp.tool==='shovel'?1:0;
  if(tp.keep!==keep&&M.toolSent[tpIndex]!==keep){
   out.push(['toolKeep',{k:tpIndex,set:keep}]);M.toolSent[tpIndex]=keep;
  }
 }
 if(t>0&&t-(M.noteAt||0)>=600){
  out.push(['note',{text:'v253 lean core: houses '+has('house')+', guard '+has('guard')+
   ', mines '+has('coalmine')+'/'+has('ironmine')+', workers '+(people.worker||0)+
   ', carriers '+carriers+' idle '+idleC+', soldiers '+totalSoldiers+', sites '+siteN+'.'}]);
  M.noteAt=t;
 }
}