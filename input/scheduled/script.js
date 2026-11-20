// ChatGPT scheduled — renewable frontier economy, food-backed mining, and banner/armor field army.
// Keep the carrier base small, replant trees before the wood chain stalls, claim the mountain corridor, then fight with quality and numbers.
// Game version: 245
function think(view){
 if(!view||view.over)return [];
 var mem=memory.plan||(memory.plan={}),out=[];
 mem.sentThisTurn={};
 if(view.economy&&!view.armyOnly)economy(view,mem,out);
 army(view,mem,out);
 return out.slice(0,50);
}

function economy(view,M,out){
 var E=view.economy||{},map=view.map||{},S=view.switches||{},t=view.t||0,me=view.me;
 var town=E.town||[],stock=E.stock||{},people=E.people||{},idle=E.idle||{},units=E.units||[];
 var carriers=people.carrier||0,idleC=idle.carrier||0,land=E.land||{},spots=E.spots||{};
 var count={},built={},pendingGoods={},siteN=0,bedsComing=0,pendingHouse=false;
 for(var b of town){
  count[b.type]=(count[b.type]||0)+1;
  if(b.built)built[b.type]=(built[b.type]||0)+1;
  else{
   siteN++;
   if(/^house/.test(b.type))pendingHouse=true;
   for(var it in (b.cost||{}))if(Object.prototype.hasOwnProperty.call(b.cost,it))pendingGoods[it]=(pendingGoods[it]||0)+Math.max(0,(b.cost[it]||0)-((b.delivered||{})[it]||0));
  }
  bedsComing+=b.coming||0;
 }
 function has(type){return count[type]||0;}
 function done(type){return built[type]||0;}
 function st(it){return stock[it]||0;}
 function spare(it){return st(it)-(pendingGoods[it]||0);}
 function ore(kind){for(var o of (E.ore||[]))if(o.ore===kind)return true;return false;}
 function tip(q){for(var z of (E.tips||[]))if((z.k||'')===q||((z.text||'').toLowerCase().indexOf(q.toLowerCase())>=0))return true;return false;}
 function hasStatus(type,needle){for(var z of town)if(z.type===type&&z.built&&(z.status||'').toLowerCase().indexOf(needle.toLowerCase())>=0)return true;return false;}
 var hq=null;for(var hb of (view.buildings||[]))if(hb.owner===me&&hb.type==='hq'){hq=hb;break;}
 var home=hq?{x:hq.x+hq.w/2,y:hq.y+hq.h/2}:{x:(map.w||240)/2,y:(map.h||240)/2};
 var ownPosts=(view.buildings||[]).filter(function(b){return b.owner===me&&b.built!==false&&['guard','tower','castle'].indexOf(b.type)>=0;});
 var allSoldiers=view.soldiers||[];
 var totalSoldiers=allSoldiers.length;
 for(var ob of ownPosts)totalSoldiers+=(ob.troops||[]).length;
 var peopleShort=carriers<9||idleC<3||(E.homeless||0)>0||tip('settlers');
 var homes=peopleShort&&bedsComing<6&&!pendingHouse&&has('house')<4;
 var woodDry=hasStatus('wood','no grown trees')||hasStatus('wood','no free ground to plant')||(t>900&&st('log')<3&&done('forest')===0);
 var coalDry=hasStatus('coalmine','deposit worn out')||hasStatus('coalmine','deposit thinning');
 var ironDry=hasStatus('ironmine','deposit worn out')||hasStatus('ironmine','deposit thinning');
 var coalFoodShort=done('coalmine')>0&&(hasStatus('coalmine','waiting for food')||st('fish')<10&&st('bread')<5);
 var ironFoodShort=done('ironmine')>0&&(hasStatus('ironmine','waiting for food')||st('meat')<4&&st('fish')<6);
 var fishLow=st('fish')<10&&(coalFoodShort||ironFoodShort||done('goldmine')>0);
 var meatLow=st('meat')<5&&ironFoodShort;
 var coalStable=done('coalmine')>=2||st('coal')>=12;

 // Ask for real resource-bearing sites; the v243 dock rule is handled by the current spot helper.
 M.spots=M.spots||{};
 for(var sk in spots)if(Object.prototype.hasOwnProperty.call(spots,sk))M.spots[sk]=spots[sk];
 for(var rr of (view.refused||[]))if(rr.order==='place'&&rr.args)M.rejected={type:rr.args.type,x:rr.args.x,y:rr.args.y,until:t+90};

 // Geologists search only mountains already inside our border. No pioneer: the previous pioneer path claims repeatedly failed.
 var geos=units.filter(function(u){return u.role==='geologist';});
 var maxGeos=done('smith')>0?2:1;
 if((E.unsearched||[]).length>0&&geos.length<maxGeos&&st('pick')>0&&carriers>5&&idleC>2&&(M.geoAt||0)<=t){
  out.push(['profession',{role:'geologist',d:1}]);M.geoAt=t+60;
 }
 for(var g of geos)if(!g.busy&&!g.moving){
  var uq=null,best=1e18;
  for(var u of (E.unsearched||[])){
   var dx=u.x-g.x,dy=u.y-g.y,dd=dx*dx+dy*dy,claimed=false;
   for(var other of geos)if(other.id!==g.id&&other.to){var ax=other.to.x-u.x,ay=other.to.y-u.y;if(ax*ax+ay*ay<8*8)claimed=true;}
   if(!claimed&&dd<best){best=dd;uq=u;}
  }
  if(uq)out.push(['sendUnit',{u:g.id,tx:uq.x,ty:uq.y}]);
 }

 // One local explorer advances along nearby visible fog edges; no long blind jumps or pioneer claims.
 var explorers=units.filter(function(u){return u.role==='explorer';});
 if(explorers.length<1&&t>240&&carriers>10&&idleC>3&&spare('plank')>1&&(M.expAt||0)<=t){
  out.push(['profession',{role:'explorer',d:1}]);M.expAt=t+180;
 }
 function frontier(u){
  if(!map.w||!map.h||!map.known||!map.owner||!map.ter)return null;
  var cx=map.w/2-home.x,cy=map.h/2-home.y,len=Math.sqrt(cx*cx+cy*cy)||1;cx/=len;cy/=len;
  var best=null,bs=-1e18;
  for(var y=1;y<map.h-1;y++)for(var x=1;x<map.w-1;x++){
   var i=y*map.w+x;if(map.known[i]!==2)continue;
   var owner=map.owner[i];if(owner!==0&&owner!==me)continue;
   var gr=map.grounds&&map.grounds[map.ter[i]];
   if(gr&&(!gr.walk||gr.land===false))continue;
   if(map.occupied&&map.occupied[i])continue;
   if((map.tree&&map.tree[i])||(map.stone&&map.stone[i]))continue;
   var edge=(map.known[i-1]===0?1:0)+(map.known[i+1]===0?1:0)+(map.known[i-map.w]===0?1:0)+(map.known[i+map.w]===0?1:0);
   if(!edge)continue;
   var dx=x-u.x,dy=y-u.y,du=Math.abs(dx)+Math.abs(dy);if(du<3||du>20)continue;
   var hx=x-home.x,hy=y-home.y,align=hx*cx+hy*cy;
   var enemyNear=0;if(map.owner[i-1]!==0&&map.owner[i-1]!==me)enemyNear++;if(map.owner[i+1]!==0&&map.owner[i+1]!==me)enemyNear++;if(map.owner[i-map.w]!==0&&map.owner[i-map.w]!==me)enemyNear++;if(map.owner[i+map.w]!==0&&map.owner[i+map.w]!==me)enemyNear++;
   var score=edge*8+enemyNear*5+align*.08-du*1.2+(owner===0?1:0);
   if(score>bs){bs=score;best={x:x,y:y};}
  }
  return best;
 }
 M.unitAt=M.unitAt||{};
 for(var ex of explorers)if(!ex.busy&&!ex.moving&&(M.unitAt[ex.id]||0)<=t){
  var target=frontier(ex);if(target){out.push(['sendUnit',{u:ex.id,tx:target.x,ty:target.y}]);M.unitAt[ex.id]=t+30;}
 }

 // Core economy: one woodcutter, one quarry, one sawmill, and an early forester to prevent the 10-minute tree collapse.
 var want=[],wanted={};
 function add(type,max,plank,stone,ok){
  if(ok&&has(type)<max&&!wanted[type]&&spare('plank')>=plank&&spare('stone')>=stone){want.push(type);wanted[type]=1;}
 }
 add('wood',1,2,2,true);
 add('quarry',1,2,3,true);
 add('saw',1,3,4,done('wood')>0);
 add('forest',1,3,1,done('wood')>0);
 // Staff the border before optional food buildings: the starting mountain is just beyond the first guard's reach.
 var postsStaffed=ownPosts.every(function(p){return (p.troops||[]).length>0;});
 add('guard',1,2,3,t>90);
 add('guard',2,2,3,done('guard')>0&&postsStaffed&&t>420&&(!ore('coal')||!ore('ironore')||tip('land')||tip('ore'))&&carriers>8);
 add('guard',3,2,3,done('guard')>=2&&postsStaffed&&t>1200&&(!ore('coal')||!ore('ironore'))&&totalSoldiers>=14&&carriers>12);
 add('fisher',1,3,2,done('saw')>0);
 add('hunter',1,3,2,S.hunter&&done('forest')>0);
 add('house',4,3,3,homes&&done('saw')>0);
 add('look',1,2,4,t>900&&has('look')<1&&((view.enemy||{}).buildings||[]).length===0);

 // Mines only after a geologist has found signs. Add replacement deposits when a mine reports thinning/worn out.
 var hasMineFood=done('fisher')>0||done('hunter')>0||done('bakery')>0;
 add('coalmine',1,4,1,ore('coal')&&hasMineFood);
 add('ironmine',1,4,1,ore('ironore')&&hasMineFood);
 add('coalmine',2,4,1,ore('coal')&&coalDry&&st('coal')<12);
 add('ironmine',2,4,1,ore('ironore')&&ironDry&&st('ironore')<12);
 var breadNow=done('coalmine')>0&&done('bakery')===0&&(coalFoodShort||st('fish')<14||t>900);
 if(breadNow){add('waterhut',1,3,4,true);add('farm',1,6,6,done('waterhut')>0);add('mill',1,3,3,done('farm')>0);add('bakery',1,4,5,done('mill')>0&&done('waterhut')>0);}
 add('smelter',1,4,6,done('coalmine')>0&&done('ironmine')>0);
 add('smith',1,3,5,done('smelter')>0);
 add('weaponsmith',1,5,7,done('smith')>0);
 add('barracks',1,4,5,done('weaponsmith')>0);

 // Bread is the long-term coal-mine food; hunter meat supports iron mines. Fish remains a useful bridge and gold-mine food.
 add('waterhut',1,3,4,done('coalmine')>0&&done('bakery')===0);
 add('farm',1,6,6,done('waterhut')>0&&done('bakery')===0);
 add('mill',1,3,3,done('farm')>0&&done('bakery')===0);
 add('bakery',1,4,5,done('mill')>0&&done('waterhut')>0);
 if(fishLow)add('fisher',2,3,2,has('fisher')<2);
 if(meatLow)add('hunter',2,3,2,S.hunter&&has('hunter')<2);
 if(woodDry)add('forest',2,3,1,has('forest')<2);
 if(st('stone')<10&&t>900)add('quarry',2,2,3,has('quarry')<2);

 // Gold funds bannermen; a vault is useful only when banners are enabled to carry the gold bonus.
 add('goldmine',1,5,1,ore('goldore')&&done('smith')>0&&hasMineFood&&coalStable);
 add('goldsmelter',1,4,6,done('goldmine')>0&&coalStable);
 add('vault',1,3,4,S.vault&&S.banner&&done('goldsmelter')>0);
 add('armorer',1,4,5,S.armor&&done('barracks')>0&&done('smelter')>0&&st('iron')>=4&&totalSoldiers>=12);

 // Keep the smith supplied with a small, deliberate tool reserve.
 if(done('smith')>0){
  for(var k=0;k<(E.toolPlan||[]).length;k++){
   var tp=E.toolPlan[k],keep=tp.tool==='pick'?2:tp.tool==='shovel'?1:tp.tool==='hammer'?1:0;
   if((tp.keep||0)!==keep&&keep>0)out.push(['toolKeep',{k:k,set:keep}]);
  }
 }

 // Prioritize the renewable core and the production chain; explicit sendIn below handles the border posts.
 var priorityTypes=['wood','quarry','saw','forest','fisher','hunter','waterhut','farm','mill','bakery','coalmine','ironmine','goldmine','smelter','goldsmelter','smith','weaponsmith','barracks','armorer','guard'];
 for(var pb of town)if(priorityTypes.indexOf(pb.type)>=0&&!pb.prio)out.push(['priority',{b:pb.id,on:true}]);
 for(var gb of ownPosts){
  if(gb.type==='guard'){
   if(gb.fighters!==1)out.push(['fighters',{b:gb.id,set:1}]);
   if(gb.archers!==0)out.push(['archers',{b:gb.id,set:0}]);
  }
 }
 var A=E.army||{};if(A.reserve!==4)out.push(['armyReserve',{set:4}]);
 var free=(view.soldiers||[]).filter(function(s){return !s.order&&!s.defends&&!s.fighting&&!s.moving&&!M.sentThisTurn[s.id]&&s.kind!=='banner';});
 for(var post of ownPosts)if(post.type==='guard'&&!(post.troops||[]).length&&free.length>4){
  var ix=-1;for(var fi=0;fi<free.length;fi++)if(free[fi].kind==='sword'){ix=fi;break;}
  if(ix>=0){var soldier=free.splice(ix,1)[0];out.push(['sendIn',{ids:[soldier.id],b:post.id}]);M.sentThisTurn[soldier.id]=1;}
 }

 // Set army composition only after a barracks exists; grow from a viable first force to a 40-soldier field army.
 if(done('barracks')>0){
  var mature=done('smelter')>0&&done('weaponsmith')>0&&(done('coalmine')>=2||st('coal')>=10)&&(done('ironmine')>=2||st('ironore')>=8);
  var targets=mature?{sword:18,spear:10,bow:12}:{sword:10,spear:6,bow:8};
  var at=A.target||{};
  for(var kind of ['sword','spear','bow'])if(at[kind]!==targets[kind])out.push(['armyTarget',{kind:kind,set:targets[kind]}]);
  var bannerTarget=S.banner&&done('goldsmelter')>0?(mature?4:2):0;
  if(S.banner&&at.banner!==bannerTarget)out.push(['armyTarget',{kind:'banner',set:bannerTarget}]);
  var keepList=A.keep||[];
  for(var wi=0;wi<keepList.length&&wi<3;wi++)if(keepList[wi]&&(keepList[wi].keep||0)>0)out.push(['weaponKeep',{k:wi,set:0}]);
  if(S.armor&&done('armorer')>0&&st('iron')>=4){
   var arm=A.armor||{};
   for(var ak of ['sword','spear','bow'])if((arm[ak]||0)<1)out.push(['armyArmor',{kind:ak,set:1}]);
  }
 }
 for(var ab of town){
  if(S.armor&&S.gear&&ab.type==='armorer'&&ab.built&&!ab.repair)out.push(['armorRepair',{b:ab.id,on:true}]);
  if(S.vault&&S.banner&&ab.type==='vault'&&ab.built&&ab.keep!==24)out.push(['vaultKeep',{b:ab.id,set:24}]);
 }

 // Ask for up to six current priorities, rotating through the longer queue so resource spots don't starve.
 var askList=[],seen={};
 for(var ai=0;ai<want.length&&askList.length<6;ai++){
  var typ=want[(Math.floor(t/12)+ai)%Math.max(1,want.length)];
  if(!seen[typ]){askList.push(typ);seen[typ]=1;}
 }
 if(!askList.length)askList=['forest','wood','quarry','guard','fisher','hunter'];
 if(t>=(M.askAt||0)){out.push(['ask',{spots:askList}]);M.askAt=t+12;}

 function isResource(type){return ['wood','forest','quarry','fisher','hunter','waterhut','farm','coalmine','ironmine','goldmine','stonemine'].indexOf(type)>=0;}
 function findSpot(type){
  var list=M.spots[type]||[],p=null;
  for(var sp of list){
   if(M.rejected&&M.rejected.until>t&&M.rejected.type===type&&M.rejected.x===sp.x&&M.rejected.y===sp.y)continue;
   if(typeof sp.n==='number'&&sp.n<=0)continue;
   if(type==='coalmine'||type==='ironmine'||type==='goldmine'){
    var tooNear=false;for(var old of town)if(old.type===type){var mx=sp.x+1.5-(old.x+1.5),my=sp.y+1.5-(old.y+1.5);if(mx*mx+my*my<12*12)tooNear=true;}
    if(tooNear)continue;
   }
   if(typeof canPlace!=='function'||canPlace(type,sp.x,sp.y)){p=sp;break;}
  }
  if(p||isResource(type)||typeof canPlace!=='function')return p;
  var best=null,score=1e18;
  var bases=[home];for(var op of ownPosts)bases.push({x:op.x+op.w/2,y:op.y+op.h/2});
  for(var base of bases){
   var radius=type==='guard'?14:16;
   for(var dy=-radius;dy<=radius;dy+=2)for(var dx=-radius;dx<=radius;dx+=2){
    if(type==='guard'&&Math.abs(dx)+Math.abs(dy)<radius-4)continue;
    var x=Math.floor(base.x+dx),y=Math.floor(base.y+dy);
    if(x<1||y<1||x>=(map.w||240)-8||y>=(map.h||240)-8)continue;
    if(M.rejected&&M.rejected.until>t&&M.rejected.type===type&&M.rejected.x===x&&M.rejected.y===y)continue;
    if(!canPlace(type,x,y))continue;
    var sc=Math.abs(dx)+Math.abs(dy)+(type==='guard'?-Math.max(0,Math.abs(dx)+Math.abs(dy)-8)*.2:0);
    if(sc<score){score=sc;best={x:x,y:y};}
   }
  }
  return best;
 }
 var siteLimit=t<360?2:3;
 if(siteN<siteLimit&&(typeof M.lastPlaceAt!=='number'||t-M.lastPlaceAt>=2)){
  for(var next of want){
   var pos=findSpot(next);if(!pos)continue;
   out.push(['place',{type:next,x:pos.x,y:pos.y}]);M.lastPlaceAt=t;M.spots[next]=[];
   if(next==='guard')M.lastPostAt=t;
   break;
  }
 }

 if(t>0&&t%600<2&&M.noteAt!==t){
  out.push(['note',{text:'v245 eco: houses '+has('house')+', forest '+has('forest')+', guards '+has('guard')+', mines '+has('coalmine')+'/'+has('ironmine')+', carriers '+carriers+' idle '+idleC+', soldiers '+totalSoldiers+', ore C/I/G '+(ore('coal')?1:0)+'/'+(ore('ironore')?1:0)+'/'+(ore('goldore')?1:0)+'.'}]);M.noteAt=t;
 }
}

function army(view,M,out){
 var t=view.t||0,me=view.me,mine=view.soldiers||[],bld=view.buildings||[],enemy=view.enemy||{};
 var foes=enemy.soldiers||[],eb=enemy.buildings||[];
 function manhattan(a,b){return Math.abs(a.x-b.x)+Math.abs(a.y-b.y);}
 function door(b){return b.door||{x:b.x+(b.w||3)/2,y:b.y+(b.h||3)/2};}
 function power(s){return (s.hp||s.maxHp||10)*(s.str===undefined?1:s.str/100)*(1+0.15*(s.arm||0));}
 function isMil(b){return !!b.military||['guard','tower','castle','hq'].indexOf(b.type)>=0;}
 var free=mine.filter(function(s){return !s.order&&!s.defends&&!s.fighting&&!s.moving&&!M.sentThisTurn[s.id];});
 var fighters=free.filter(function(s){return s.kind!=='banner'&&s.hp>=(s.maxHp||10)*0.7;});
 var banners=free.filter(function(s){return s.kind==='banner';});
 var ownHQ=null;for(var h of bld)if(h.owner===me&&h.type==='hq'){ownHQ=h;break;}
 var refusedAttack=false;for(var r of (view.refused||[]))if(r.order==='attack')refusedAttack=true;
 if(refusedAttack)M.attackAfter=t+90;

 // Protect the town before committing the field army to a siege.
 var threat=null,threatD=18;
 for(var f of foes)for(var own of bld)if(own.owner===me){
  var d=manhattan(f,{x:own.x+(own.w||3)/2,y:own.y+(own.h||3)/2});
  if(d<threatD){threatD=d;threat=f;}
 }
 if(threat&&(M.defendAt||0)<=t&&fighters.length>=8){
  var defenders=fighters.slice().sort(function(a,b){return manhattan(a,threat)-manhattan(b,threat);}).slice(0,Math.min(4,fighters.length-6));
  if(defenders.length>=2){out.push(['march',{ids:defenders.map(function(s){return s.id;}),tx:Math.round(threat.x),ty:Math.round(threat.y),form:'block',am:true}]);M.defendAt=t+30;return;}
 }

 var attackers=mine.filter(function(s){return s.order&&s.order.k==='attack';});
 if(attackers.length){
  if(typeof M.siegePrev==='number'&&attackers.length<M.siegePrev)M.siegeLosses=(M.siegeLosses||0)+M.siegePrev-attackers.length;
  M.siegePrev=attackers.length;
  var lossLimit=Math.max(4,Math.ceil((M.siegeStart||attackers.length)*0.3));
  if((M.siegeLosses||0)>=lossLimit){
   var hx=ownHQ?ownHQ.x+ownHQ.w/2:(view.map&&view.map.w?view.map.w/2:120);
   var hy=ownHQ?ownHQ.y+ownHQ.h/2:(view.map&&view.map.h?view.map.h/2:120);
   out.push(['march',{ids:attackers.map(function(s){return s.id;}),tx:Math.round(hx),ty:Math.round(hy),form:'block',am:false}]);
   out.push(['note',{text:'Siege aborted after '+lossLimit+' field losses; retreating to HQ.'}]);
   M.attackAfter=t+300;M.reinforceAt=t+300;M.siegeTarget=0;M.siegeLosses=0;M.siegePrev=0;
   return;
  }
  var targetId=attackers[0].order.b,target=null;
  for(var eb0 of eb)if(eb0.id===targetId){target=eb0;break;}
  if(target&&(M.reinforceAt||0)<=t&&fighters.length>6){
   var d0=door(target),danger0=0;for(var ef of foes)if(manhattan(ef,d0)<24)danger0+=power(ef);
   var base0=target.manned===false?4:(target.type==='castle'?52:target.type==='tower'?36:target.type==='guard'?24:20);
   var need0=base0+danger0*1.5+8;
   var add0=fighters.slice().sort(function(a,b){return manhattan(a,d0)-manhattan(b,d0);}).slice(0,Math.max(0,fighters.length-6));
   var pow0=0;for(var q0 of add0)pow0+=power(q0);
   if(add0.length>=2&&pow0<need0){}else if(add0.length>=2){out.push(['attack',{ids:add0.map(function(s){return s.id;}),b:target.id}]);M.reinforceAt=t+30;}
  }
  return;
 }

 if(fighters.length<10||(M.attackAfter||0)>t)return;
 var targets=eb.filter(function(b){return b.built!==false&&isMil(b)&&!(b.remembered&&typeof b.seenAt==='number'&&t-b.seenAt>1200);});
 targets.sort(function(a,b){
  var am=a.manned===false?0:1,bm=b.manned===false?0:1;
  var ar=a.remembered?1:0,br=b.remembered?1:0;
  var ad=ownHQ?manhattan(door(a),{x:ownHQ.x+ownHQ.w/2,y:ownHQ.y+ownHQ.h/2}):0;
  var bd=ownHQ?manhattan(door(b),{x:ownHQ.x+ownHQ.w/2,y:ownHQ.y+ownHQ.h/2}):0;
  return am-bm||ar-br||ad-bd||(a.id-b.id);
 });
 for(var target1 of targets){
  var p=door(target1),danger=0;
  for(var foe of foes)if(manhattan(foe,p)<24)danger+=power(foe);
  var manned=target1.manned!==false,base=manned?(target1.type==='castle'?52:target1.type==='tower'?36:target1.type==='guard'?24:20):4;
  var required=base+danger*1.5+8;
  var squad=fighters.slice().sort(function(a,b){return manhattan(a,p)-manhattan(b,p)||a.id-b.id;}).slice(0,Math.max(0,fighters.length-6));
  if((manned&&squad.length<8)||(!manned&&squad.length<4))continue;
  var strength=0;for(var fs of squad)strength+=power(fs);
  if(strength<required)continue;
  var support=banners.slice().sort(function(a,b){return manhattan(a,p)-manhattan(b,p)||a.id-b.id;}).slice(0,Math.min(banners.length,Math.ceil(squad.length/8)));
  out.push(['attack',{ids:squad.concat(support).map(function(s){return s.id;}),b:target1.id}]);
  M.attackAfter=t+60;M.reinforceAt=t+30;M.siegeTarget=target1.id;M.siegeStart=squad.length;M.siegePrev=squad.length+support.length;M.siegeLosses=0;
  out.push(['note',{text:'Siege: '+squad.length+' fighters plus '+support.length+' banners against '+target1.type+' '+target1.id+'; estimated power '+Math.round(strength)+' vs '+Math.round(required)+'.'}]);
  return;
 }
}