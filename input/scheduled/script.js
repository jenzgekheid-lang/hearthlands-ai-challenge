// ChatGPT scheduled — v247 forward-corridor economy and expeditionary army.
// Expand toward mountain resources and the map centre, keep workshops supplied, then make contact with an attack-move column.
// Game version: 247
function think(view){
 if(!view||view.over)return [];
 var mem=memory.plan||(memory.plan={}),out=[];
 if(view.economy&&!view.armyOnly)economy(view,mem,out);
 army(view,mem,out);
 return out.slice(0,50);
}

function economy(view,M,out){
 var E=view.economy||{},map=view.map||{},S=view.switches||{},t=view.t||0,me=view.me;
 var town=E.town||[],stock=E.stock||{},people=E.people||{},idle=E.idle||{},units=E.units||[];
 var carriers=people.carrier||0,idleC=idle.carrier||0,land=E.land||{},spots=E.spots||{};
 var count={},built={},pending={},siteN=0,bedsComing=0,pendingHouse=false;
 for(var b of town){
  count[b.type]=(count[b.type]||0)+1;
  if(b.built)built[b.type]=(built[b.type]||0)+1;
  else{
   siteN++;
   if(/^house/.test(b.type))pendingHouse=true;
   for(var it in (b.cost||{}))if(Object.prototype.hasOwnProperty.call(b.cost,it))pending[it]=(pending[it]||0)+Math.max(0,(b.cost[it]||0)-((b.delivered||{})[it]||0));
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
 function ore(kind){
  for(var o of (E.ore||[]))if(o.ore===kind)return true;
  if(map.ore&&map.oreNames){
   var v=map.oreNames.indexOf(kind)+1;
   if(v>1)for(var i=0;i<map.ore.length;i++)if(map.ore[i]===v)return true;
  }
  return false;
 }
 var hq=null;
 for(var hb of (view.buildings||[]))if(hb.owner===me&&hb.type==='hq'){hq=hb;break;}
 var home=hq?{x:hq.x+(hq.w||5)/2,y:hq.y+(hq.h||4)/2}:{x:(map.w||240)/2,y:(map.h||240)/2};
 var allOwnMilitary=(view.buildings||[]).filter(function(x){return x.owner===me&&x.military&&x.type!=='hq';});
 var border=allOwnMilitary.filter(function(x){return x.type==='guard'||x.type==='tower'||x.type==='castle';});
 var totalSoldiers=(view.soldiers||[]).length;
 for(var ob of (view.buildings||[]))if(ob.owner===me&&ob.military)totalSoldiers+=(ob.troops||[]).length;

 // Remember rejected placements and current spot answers.
 M.spots=M.spots||{};M.bad=M.bad||{};
 for(var sk in spots)if(Object.prototype.hasOwnProperty.call(spots,sk))M.spots[sk]=spots[sk];
 for(var rr of (view.refused||[]))if(rr.order==='place'&&rr.args)M.bad[rr.args.type+':'+rr.args.x+':'+rr.args.y]=t+180;

 var geos=units.filter(function(u){return u.role==='geologist';});
 var unsearched=E.unsearched||[];
 if(geos.length)M.geoPendingUntil=0;
 // Reserve the first available pick for geology before a quarry can claim it.
 if(unsearched.length&&geos.length<1&&st('pick')>0&&carriers>4&&idleC>1&&(M.geoAt||0)<=t){
  out.push(['profession',{role:'geologist',d:1}]);M.geoAt=t+45;M.geoPendingUntil=t+45;
 }
 for(var g of geos)if(!g.busy&&!g.moving){
  var uq=null,best=1e18;
  for(var u of unsearched){
   var dx=u.x-g.x,dy=u.y-g.y,dd=dx*dx+dy*dy,claimed=false;
   for(var other of geos)if(other.id!==g.id&&other.to){
    var ax=other.to.x-u.x,ay=other.to.y-u.y;if(ax*ax+ay*ay<9*9)claimed=true;
   }
   if(!claimed&&dd<best){best=dd;uq=u;}
  }
  if(uq&&(M.geoUnitAt||0)<=t){out.push(['sendUnit',{u:g.id,tx:uq.x,ty:uq.y}]);M.geoUnitAt=t+30;}
 }
 var geoPending=geos.length===0&&(M.geoPendingUntil||0)>t;

 // One explorer follows the visible fog edge toward the map centre.
 var explorers=units.filter(function(u){return u.role==='explorer';});
 if(explorers.length<1&&t>180&&carriers>7&&idleC>2&&spare('plank')>2&&(M.expAt||0)<=t){
  out.push(['profession',{role:'explorer',d:1}]);M.expAt=t+120;
 }
 function frontier(u){
  if(!map.w||!map.h||!map.known||!map.owner||!map.ter)return null;
  var vx=map.w/2-home.x,vy=map.h/2-home.y,vlen=Math.sqrt(vx*vx+vy*vy)||1;vx/=vlen;vy/=vlen;
  var bestP=null,bestS=-1e18,grounds=map.grounds||[];
  for(var y=1;y<map.h-1;y++)for(var x=1;x<map.w-1;x++){
   var i=y*map.w+x;if(map.known[i]!==2)continue;
   var owner=map.owner[i];if(owner!==0&&owner!==me)continue;
   var gr=grounds[map.ter[i]];if(gr&&gr.walk===false)continue;
   if(map.occupied&&map.occupied[i])continue;
   if((map.tree&&map.tree[i])||(map.stone&&map.stone[i]))continue;
   var edge=(map.known[i-1]===0?1:0)+(map.known[i+1]===0?1:0)+(map.known[i-map.w]===0?1:0)+(map.known[i+map.w]===0?1:0);
   if(!edge)continue;
   var dx=x-u.x,dy=y-u.y,d=Math.abs(dx)+Math.abs(dy);if(d<3||d>24)continue;
   var hx=x-home.x,hy=y-home.y,forward=hx*vx+hy*vy,enemyNear=0;
   for(var ni of [i-1,i+1,i-map.w,i+map.w])if(map.owner[ni]!==0&&map.owner[ni]!==me)enemyNear++;
   var score=edge*7+enemyNear*10+forward*.22-d*.55+(owner===0?1:0);
   if(score>bestS){bestS=score;bestP={x:x,y:y};}
  }
  return bestP;
 }
 for(var ex of explorers)if(!ex.busy&&!ex.moving&&(M.exploreAt||0)<=t){
  var target=frontier(ex);
  if(target){out.push(['sendUnit',{u:ex.id,tx:target.x,ty:target.y}]);M.exploreAt=t+30;}
 }

 // Wait until every existing post is actually staffed before extending the frontier again.
 var minGarrison={guard:1,tower:2,castle:3};
 var canExpand=border.every(function(p){
  return p.built&&(p.troops||[]).length>=(minGarrison[p.type]||1);
 });
 var expand=(border.length===0||canExpand)&&(border.length===0||t>=(M.expandAfter||90)||tip('land')||tip('ore'));

 // The v247 carrier tip is more reliable than counting beds: carryfair now balances deliveries by wait time.
 var peopleShort=carriers<8||idleC<2||(E.homeless||0)>0||tip('carriers')||tip('settlers')||tip('weapons');
 var homes=peopleShort&&bedsComing<6&&!pendingHouse&&has('house')<6;
 var coalDry=hasStatus('coalmine','deposit worn out')||hasStatus('coalmine','deposit thinning');
 var ironDry=hasStatus('ironmine','deposit worn out')||hasStatus('ironmine','deposit thinning');
 var coalFoodShort=hasStatus('coalmine','waiting for food')||(done('coalmine')>0&&st('fish')<5&&st('bread')<4);
 var ironFoodShort=hasStatus('ironmine','waiting for food')||(done('ironmine')>0&&st('meat')<4&&st('fish')<4);
 var fishLow=st('fish')<8&&(coalFoodShort||ironFoodShort||done('goldmine')>0);
 var meatLow=st('meat')<5&&ironFoodShort;
 var coalStable=done('coalmine')>=2||st('coal')>=12;
 var mineFood=done('fisher')>0||done('bakery')>0||(S.hunter&&done('hunter')>0);
 var woodDry=hasStatus('wood','no grown trees')||(t>900&&st('log')<3&&done('forest')===0);
 var forestBlocked=hasStatus('forest','no free ground');

 // Set only the actual building settings exposed by economy.town (not view.buildings).
 for(var tb of town){
  if(tb.type==='guard'){
   if(tb.fighters!==1)out.push(['fighters',{b:tb.id,set:1}]);
   if(tb.archers!==0)out.push(['archers',{b:tb.id,set:0}]);
  }else if(tb.type==='tower'){
   if(tb.fighters!==2)out.push(['fighters',{b:tb.id,set:2}]);
   if(tb.archers!==0)out.push(['archers',{b:tb.id,set:0}]);
  }else if(tb.type==='castle'){
   if(tb.fighters!==3)out.push(['fighters',{b:tb.id,set:3}]);
   if(tb.archers!==0)out.push(['archers',{b:tb.id,set:0}]);
  }
  if((tb.type==='guard'||tb.type==='tower'||tb.type==='castle')&&!tb.prio)out.push(['priority',{b:tb.id,on:true}]);
 }

 // Keep a small permanent garrison, but retain a real field army as the town grows.
 var A=E.army||{},reserve=totalSoldiers>=24?8:4;
 if(A.reserve!==reserve)out.push(['armyReserve',{set:reserve}]);

 // Build priorities: renewable basics, one forward post, food, then mines and the metal chain.
 var want=[],wanted={};
 function add(type,max,plank,stone,ok){
  if(ok&&has(type)<max&&!wanted[type]&&spare('plank')>=plank&&spare('stone')>=stone){
   want.push(type);wanted[type]=1;
  }
 }
 add('wood',1,2,2,true);
 add('saw',1,3,4,done('wood')>0);
 add('forest',1,3,1,done('wood')>0);
 add('guard',5,2,3,done('saw')>0&&(border.length===0||expand));
 // The quarry is deliberately after the first border post and first geologist attempt.
 add('quarry',1,2,3,!geoPending);
 add('fisher',1,3,2,done('saw')>0);
 add('hunter',1,3,2,S.hunter&&done('forest')>0);
 add('house',6,3,3,homes&&done('saw')>0);
 add('tower',2,5,5,expand&&border.length>=2&&totalSoldiers>=14);
 add('look',1,2,4,border.length>=2&&t>900&&(view.enemy&&view.enemy.buildings||[]).length===0);
 add('coalmine',1,4,1,ore('coal')&&mineFood);
 add('ironmine',1,4,1,ore('ironore')&&(done('hunter')>0||done('fisher')>0||done('bakery')>0));
 add('smelter',1,4,6,done('coalmine')>0&&done('ironmine')>0);
 add('smith',1,3,5,done('smelter')>0);
 add('weaponsmith',1,5,7,done('smith')>0);
 add('barracks',1,4,5,done('weaponsmith')>0);
 var breadNow=done('coalmine')>0&&done('bakery')===0&&(coalFoodShort||st('fish')<6||t>1200);
 if(breadNow){
  add('waterhut',1,3,4,true);
  add('farm',1,6,6,done('waterhut')>0);
  add('mill',1,3,3,done('farm')>0);
  add('bakery',1,4,5,done('mill')>0&&done('waterhut')>0);
 }
 if(fishLow)add('fisher',2,3,2,has('fisher')<2);
 if(meatLow)add('hunter',2,3,2,S.hunter&&has('hunter')<2);
 if(woodDry&&!forestBlocked)add('forest',2,3,1,has('forest')<2);
 if(st('stone')<10&&t>900&&land.rocks>0)add('quarry',2,2,3,has('quarry')<2);
 add('coalmine',2,4,1,ore('coal')&&coalDry&&st('coal')<12&&has('coalmine')<2&&mineFood);
 add('ironmine',2,4,1,ore('ironore')&&ironDry&&st('ironore')<12&&has('ironmine')<2&&(done('hunter')>0||done('fisher')>0));
 add('goldmine',1,5,1,ore('goldore')&&done('smith')>0&&mineFood&&coalStable);
 add('goldsmelter',1,4,6,done('goldmine')>0&&coalStable);
 add('vault',1,3,4,S.vault&&S.banner&&done('goldsmelter')>0);
 add('castle',1,8,12,expand&&border.length>=4&&totalSoldiers>=40);
 add('armorer',1,4,5,S.armor&&done('barracks')>0&&done('smelter')>0&&st('iron')>=8&&totalSoldiers>=20);

 // Tool reserves let the smith replace picks and hammers; geology gets first claim on an opening pick.
 if(done('smith')>0)for(var k=0;k<(E.toolPlan||[]).length;k++){
  var tp=E.toolPlan[k],keep=tp.tool==='pick'?2:1;
  if((tp.keep||0)!==keep)out.push(['toolKeep',{k:k,set:keep}]);
 }
 if(done('barracks')>0){
  var trained=done('smelter')>0&&done('coalmine')>0&&done('ironmine')>0;
  var strong=trained&&(done('coalmine')>=2||st('coal')>=14)&&(done('ironmine')>=2||st('ironore')>=10)&&carriers>=8;
  var targets=strong?{sword:22,spear:10,bow:14}:trained?{sword:18,spear:8,bow:12}:{sword:12,spear:6,bow:8};
  var at=A.target||{};
  for(var kind of ['sword','spear','bow'])if(at[kind]!==targets[kind])out.push(['armyTarget',{kind:kind,set:targets[kind]}]);
  var bannerTarget=S.banner&&done('goldsmelter')>0?(st('gold')>=4?3:1):0;
  if(S.banner&&at.banner!==bannerTarget)out.push(['armyTarget',{kind:'banner',set:bannerTarget}]);
  var keepList=A.keep||[];
  for(var wi=0;wi<keepList.length&&wi<3;wi++)if(keepList[wi]&&(keepList[wi].keep||0)>0)out.push(['weaponKeep',{k:wi,set:0}]);
  // Armor only the bow line initially; all-three armor targets stalled the barracks in the last report.
  if(S.armor&&done('armorer')>0&&st('iron')>=4){
   var arm=A.armor||{};if((arm.bow||0)<1)out.push(['armyArmor',{kind:'bow',set:1}]);
   if(totalSoldiers>=40&&st('iron')>=16&&(arm.sword||0)<1)out.push(['armyArmor',{kind:'sword',set:1}]);
  }
 }
 for(var ab of town){
  if(S.armor&&S.gear&&ab.type==='armorer'&&ab.built&&!ab.repair)out.push(['armorRepair',{b:ab.id,on:true}]);
  if(S.vault&&S.banner&&ab.type==='vault'&&ab.built&&ab.keep!==12)out.push(['vaultKeep',{b:ab.id,set:12}]);
 }

 // Ask for current sites, rotating through the queue while always keeping frontier posts in the search.
 var askPool=want.slice();
 if(expand){askPool.unshift('guard');if(totalSoldiers>=14)askPool.unshift('tower');}
 if(ore('coal'))askPool.push('coalmine');
 if(ore('ironore'))askPool.push('ironmine');
 var askList=[],askSeen={};
 if(askPool.length){
  var start=Math.floor(t/12)%askPool.length;
  for(var ai=0;ai<askPool.length&&askList.length<6;ai++){
   var typ=askPool[(start+ai)%askPool.length];
   if(!askSeen[typ]){askSeen[typ]=1;askList.push(typ);}
  }
 }
 if(t>=(M.askAt||0)&&askList.length){out.push(['ask',{spots:askList}]);M.askAt=t+12;}

 function isResource(type){
  return ['wood','forest','quarry','fisher','hunter','waterhut','farm','coalmine','ironmine','goldmine','stonemine'].indexOf(type)>=0;
 }
 function legalSpot(type,p){
  if(!p||M.bad[type+':'+p.x+':'+p.y]>t)return false;
  if(typeof canPlace==='function'&&!canPlace(type,p.x,p.y))return false;
  return true;
 }
 function militarySpot(type){
  var size=type==='tower'?5:type==='castle'?8:type==='look'?2:3;
  var reach=type==='look'?24:type==='tower'?20:type==='castle'?26:14;
  var candidates=(M.spots[type]||[]).slice(),seen={};
  var bases=[];if(hq)bases.push(hq);
  for(var p0 of border)if(p0.built)bases.push(p0);
  for(var base of bases){
   var br=base.type==='tower'?20:base.type==='castle'?26:14;
   var step=4,rad=br;
   for(var dy=-rad;dy<=rad;dy+=step)for(var dx=-rad;dx<=rad;dx+=step){
    if(dx*dx+dy*dy<(rad-4)*(rad-4))continue;
    var x=Math.floor(base.x+(base.w||3)/2+dx-size/2),y=Math.floor(base.y+(base.h||3)/2+dy-size/2);
    if(x<1||y<1||x>=(map.w||240)-size-1||y>=(map.h||240)-size-1)continue;
    var key=x+':'+y;if(seen[key])continue;seen[key]=1;
    if(typeof canPlace==='function'&&canPlace(type,x,y))candidates.push({x:x,y:y});
   }
  }
  var vx=(map.w||240)/2-home.x,vy=(map.h||240)/2-home.y,vlen=Math.sqrt(vx*vx+vy*vy)||1;vx/=vlen;vy/=vlen;
  var grounds=map.grounds||[],seekOre=!done('coalmine')||!done('ironmine');
  var bestP=null,bestScore=-1e18;
  for(var cp of candidates){
   if(!legalSpot(type,cp))continue;
   var cx=cp.x+size/2,cy=cp.y+size/2,neutral=0,mountain=0,enemy=0,unknown=0;
   if(map.w&&map.h&&map.known&&map.owner&&map.ter){
    for(var sy=-reach;sy<=reach;sy+=4)for(var sx=-reach;sx<=reach;sx+=4){
     if(sx*sx+sy*sy>reach*reach)continue;
     var xx=Math.floor(cx+sx),yy=Math.floor(cy+sy);if(xx<0||yy<0||xx>=map.w||yy>=map.h)continue;
     var ii=yy*map.w+xx,kn=map.known[ii],ow=map.owner[ii];
     if(kn===0){unknown+=0.35;continue;}
     if(ow!==0&&ow!==me){enemy++;continue;}
     if(ow!==0)continue;
     var gr=grounds[map.ter[ii]];
     if(!gr||gr.land!==false)neutral++;
     if(gr&&gr.mine)mountain++;
    }
   }
   var forward=(cx-home.x)*vx+(cy-home.y)*vy;
   var score=neutral+unknown+(seekOre?3.5:0.8)*mountain+enemy*2+forward*.06+(typeof cp.n==='number'?cp.n*.12:0);
   if(type==='look')score=unknown*1.8+neutral*.7+enemy*2+forward*.08;
   if(score>bestScore){bestScore=score;bestP=cp;}
  }
  return bestP;
 }
 function ordinarySpot(type){
  var list=M.spots[type]||[];
  for(var p of list)if(legalSpot(type,p)&&(typeof p.n!=='number'||p.n>0))return p;
  if(isResource(type)||typeof canPlace!=='function')return null;
  var bases=[];if(hq)bases.push(hq);for(var bp of border)if(bp.built)bases.push(bp);
  var best=null,score=1e18;
  var size=type==='house2'?5:type==='house3'?6:3;
  for(var base of bases){
   for(var dy=-16;dy<=16;dy+=2)for(var dx=-16;dx<=16;dx+=2){
    var x=Math.floor(base.x+dx),y=Math.floor(base.y+dy);
    if(x<1||y<1||x>=(map.w||240)-size-1||y>=(map.h||240)-size-1)continue;
    if(!legalSpot(type,{x:x,y:y}))continue;
    var sc=Math.abs(dx)+Math.abs(dy);
    if(sc<score){score=sc;best={x:x,y:y};}
   }
  }
  return best;
 }

 var siteLimit=t<360?3:5;
 if(siteN<siteLimit&&(typeof M.lastPlaceAt!=='number'||t-M.lastPlaceAt>=3)){
  for(var next of want){
   var pos=(next==='guard'||next==='tower'||next==='castle'||next==='look')?militarySpot(next):ordinarySpot(next);
   if(!pos)continue;
   out.push(['place',{type:next,x:pos.x,y:pos.y}]);M.lastPlaceAt=t;M.spots[next]=[];
   if(next==='guard'||next==='tower'||next==='castle')M.expandAfter=t+60;
   break;
  }
 }
 if(t>0&&t%600<2&&M.noteAt!==t){
  out.push(['note',{text:'v247 frontier: posts '+border.length+', staffed '+(canExpand?1:0)+', mines '+has('coalmine')+'/'+has('ironmine')+', geo '+geos.length+', carriers '+carriers+'/'+idleC+', soldiers '+totalSoldiers+', enemy '+((view.enemy&&view.enemy.buildings)||[]).length+'.'}]);
  M.noteAt=t;
 }
}

function army(view,M,out){
 var t=view.t||0,me=view.me,mine=view.soldiers||[],bld=view.buildings||[],enemy=view.enemy||{};
 var foes=enemy.soldiers||[],eb=enemy.buildings||[];
 function dist(a,b){return Math.abs(a.x-b.x)+Math.abs(a.y-b.y);}
 function door(b){return b.door||{x:b.x+(b.w||3)/2,y:b.y+(b.h||3)/2};}
 function power(s){return (s.hp||s.maxHp||10)*(s.str===undefined?1:s.str/100)*(1+0.1*(s.arm||0));}
 function isMil(b){return !!b.military||['guard','tower','castle','hq'].indexOf(b.type)>=0;}
 var free=mine.filter(function(s){return !s.order&&!s.defends&&!s.fighting&&!s.moving;});
 var fighters=free.filter(function(s){return s.kind!=='banner'&&s.hp>=(s.maxHp||10)*0.7;});
 var banners=free.filter(function(s){return s.kind==='banner';});
 var ownHQ=null;for(var h of bld)if(h.owner===me&&h.type==='hq'){ownHQ=h;break;}
 var hx=ownHQ?ownHQ.x+(ownHQ.w||5)/2:(view.map&&view.map.w?view.map.w/2:120);
 var hy=ownHQ?ownHQ.y+(ownHQ.h||4)/2:(view.map&&view.map.h?view.map.h/2:120);
 var refusedAttack=false;for(var r of (view.refused||[]))if(r.order==='attack')refusedAttack=true;
 if(refusedAttack)M.attackAfter=t+90;

 // Defend a threatened building before committing another column.
 var threat=null,threatD=18;
 for(var f of foes)for(var own of bld)if(own.owner===me){
  var td=dist(f,{x:own.x+(own.w||3)/2,y:own.y+(own.h||3)/2});
  if(td<threatD){threatD=td;threat=f;}
 }
 if(threat&&(M.defendAt||0)<=t&&fighters.length>=8){
  var defenders=fighters.slice().sort(function(a,b){return dist(a,threat)-dist(b,threat);}).slice(0,Math.min(4,fighters.length-6));
  if(defenders.length>=2){
   out.push(['march',{ids:defenders.map(function(s){return s.id;}),tx:Math.round(threat.x),ty:Math.round(threat.y),form:'block',am:true}]);
   M.defendAt=t+30;return;
  }
 }

 // Continue one siege at a time; retreat only when the attacking column is actually being depleted.
 var attackers=mine.filter(function(s){return s.order&&s.order.k==='attack';});
 if(attackers.length){
  if(typeof M.siegePrev==='number'&&attackers.length<M.siegePrev)M.siegeLosses=(M.siegeLosses||0)+M.siegePrev-attackers.length;
  M.siegePrev=attackers.length;
  var targetId=attackers[0].order.b,target=null;
  for(var eb0 of eb)if(eb0.id===targetId){target=eb0;break;}
  if(!target){M.siegeTarget=0;M.siegeLosses=0;M.siegePrev=0;return;}
  var lossLimit=Math.max(4,Math.ceil((M.siegeStart||attackers.length)*0.3));
  if((M.siegeLosses||0)>=lossLimit){
   out.push(['march',{ids:attackers.map(function(s){return s.id;}),tx:Math.round(hx),ty:Math.round(hy),form:'block',am:false}]);
   out.push(['note',{text:'Siege aborted after '+lossLimit+' field losses; retreating to HQ.'}]);
   M.attackAfter=t+240;M.siegeTarget=0;M.siegeLosses=0;M.siegePrev=0;return;
  }
  if((M.reinforceAt||0)<=t&&fighters.length>8){
   var d0=door(target),danger0=0;for(var ef of foes)if(dist(ef,d0)<24)danger0+=power(ef);
   var guards0={hq:1,guard:3,tower:6,castle:10};
   var need0=1.5*(danger0+6*(target.manned?guards0[target.type]||3:1))+12;
   var add0=fighters.slice().sort(function(a,b){return dist(a,d0)-dist(b,d0);}).slice(0,Math.max(0,fighters.length-6));
   var pow0=0;for(var q0 of add0)pow0+=power(q0);
   if(add0.length>=2&&pow0>=need0){out.push(['attack',{ids:add0.map(function(s){return s.id;}),b:target.id}]);M.reinforceAt=t+30;}
  }
  return;
 }

 if(fighters.length<10||(M.attackAfter||0)>t)return;
 var guards={hq:1,guard:3,tower:6,castle:10};
 var targets=eb.filter(function(b){
  return b.built!==false&&isMil(b)&&!(b.remembered&&typeof b.seenAt==='number'&&t-b.seenAt>900);
 });
 targets.sort(function(a,b){
  var ah=a.type==='hq'?1:0,bh=b.type==='hq'?1:0;
  var am=a.manned===false?0:1,bm=b.manned===false?0:1;
  var ar=a.remembered?1:0,br=b.remembered?1:0;
  return ah-bh||am-bm||ar-br||dist(door(a),{x:hx,y:hy})-dist(door(b),{x:hx,y:hy})||(a.id-b.id);
 });
 for(var target1 of targets){
  var p=door(target1),danger=0;
  for(var foe of foes)if(dist(foe,p)<24)danger+=power(foe);
  var manned=target1.manned!==false;
  var need=manned?1.5*(danger+6*(guards[target1.type]||3))+12:danger*1.2+12;
  var keep=6,squad=fighters.slice().sort(function(a,b){return dist(a,p)-dist(b,p)||a.id-b.id;}).slice(0,Math.max(0,fighters.length-keep));
  if((manned&&squad.length<10)||(!manned&&squad.length<6))continue;
  var strength=0;for(var fs of squad)strength+=power(fs);
  if(strength<need)continue;
  var support=banners.slice().sort(function(a,b){return dist(a,p)-dist(b,p)||a.id-b.id;}).slice(0,Math.min(banners.length,Math.ceil(squad.length/8)));
  out.push(['attack',{ids:squad.concat(support).map(function(s){return s.id;}),b:target1.id}]);
  M.attackAfter=t+60;M.reinforceAt=t+30;M.siegeTarget=target1.id;M.siegeStart=squad.length;M.siegePrev=squad.length+support.length;M.siegeLosses=0;
  out.push(['note',{text:'Siege: '+squad.length+' fighters plus '+support.length+' banners against '+target1.type+'; estimated power '+Math.round(strength)+' vs '+Math.round(need)+'.'}]);
  return;
 }

 // No target is visible: send a supported attack-move column toward enemy land or the central frontier.
 var activeProbe=mine.some(function(s){return s.order&&s.order.k==='attack-move';});
 if(activeProbe||fighters.length<14||(M.probeAt||0)>t)return;
 var map=view.map||{},probe=null,probeD=1e18;
 if(map.w&&map.h&&map.known&&map.owner){
  for(var y=0;y<map.h;y++)for(var x=0;x<map.w;x++){
   var i=y*map.w+x;if(!map.known[i]||map.owner[i]===0||map.owner[i]===me)continue;
   var d=dist({x:x,y:y},{x:hx,y:hy});if(d<probeD){probeD=d;probe={x:x,y:y};}
  }
 }
 if(!probe&&map.w&&map.h&&map.known&&map.owner&&map.ter){
  var grounds=map.grounds||[],vx=map.w/2-hx,vy=map.h/2-hy,vlen=Math.sqrt(vx*vx+vy*vy)||1;vx/=vlen;vy/=vlen;
  var bestS=-1e18;
  for(var yy=1;yy<map.h-1;yy++)for(var xx=1;xx<map.w-1;xx++){
   var ii=yy*map.w+xx;if(map.known[ii]!==2||map.owner[ii]!==0)continue;
   var gr=grounds[map.ter[ii]];if(gr&&gr.walk===false)continue;
   var edge=(map.known[ii-1]===0?1:0)+(map.known[ii+1]===0?1:0)+(map.known[ii-map.w]===0?1:0)+(map.known[ii+map.w]===0?1:0);
   if(!edge)continue;
   var forward=(xx-hx)*vx+(yy-hy)*vy,dd=dist({x:xx,y:yy},{x:hx,y:hy});
   var sc=edge*6+forward*.25-dd*.15;
   if(sc>bestS){bestS=sc;probe={x:xx,y:yy};}
  }
 }
 if(!probe)probe={x:Math.round(map.w/2),y:Math.round(map.h/2)};
 var groupSize=Math.min(12,fighters.length-6);
 if(groupSize>=8){
  var group=fighters.slice().sort(function(a,b){return power(b)-power(a)||a.id-b.id;}).slice(0,groupSize);
  var supportProbe=banners.slice().sort(function(a,b){return dist(a,probe)-dist(b,probe);}).slice(0,Math.min(banners.length,Math.ceil(group.length/8)));
  out.push(['march',{ids:group.concat(supportProbe).map(function(s){return s.id;}),tx:Math.round(probe.x),ty:Math.round(probe.y),form:'wedge',am:true}]);
  out.push(['note',{text:'Expedition: '+group.length+' fighters toward '+Math.round(probe.x)+','+Math.round(probe.y)+' to reveal and engage the enemy.'}]);
  M.probeAt=t+300;
 }
}