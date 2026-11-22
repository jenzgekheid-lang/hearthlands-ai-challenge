// ChatGPT scheduled — v248 pioneer corridor, staffed defence, and continuous conquest.
// Replace the overbuilt guard-ring plan with a compact resource corridor, recover population losses,
// keep real bow-and-melee garrisons, and release assault troops after each capture.
// Game version: 248
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
 function ore(kind){
  for(var o of (E.ore||[]))if(o.ore===kind)return true;
  return false;
 }
 var hq=null;
 for(var hb of (view.buildings||[]))if(hb.owner===me&&hb.type==='hq'){hq=hb;break;}
 var home=hq?{x:hq.x+(hq.w||5)/2,y:hq.y+(hq.h||4)/2}:{x:(map.w||240)/2,y:(map.h||240)/2};
 var ownBuildings=(view.buildings||[]).filter(function(x){return x.owner===me;});
 var border=ownBuildings.filter(function(x){return x.type==='guard'||x.type==='tower'||x.type==='castle';});
 var totalSoldiers=(view.soldiers||[]).length;
 for(var ob of ownBuildings)if(ob.military)totalSoldiers+=(ob.troops||[]).length;
 var troopsByKind=function(b,k){var n=0;for(var q of (b.troops||[]))if(q===k)n++;return n;};
 function staffed(b){
  var f=0,a=0;for(var q of (b.troops||[])){if(q==='bow')a++;else f++;}
  var wantF=b.type==='guard'?1:b.type==='tower'?2:3;
  var wantA=b.type==='guard'?1:b.type==='tower'?2:3;
  return f>=wantF&&a>=wantA;
 }
 var staffedPosts=border.filter(function(b){return b.built&&staffed(b);}).length;

 M.spots=M.spots||{};M.bad=M.bad||{};M.hot=M.hot||{};
 for(var sk in spots)if(Object.prototype.hasOwnProperty.call(spots,sk))M.spots[sk]=spots[sk];
 for(var rr of (view.refused||[]))if(rr.order==='place'&&rr.args)
  M.bad[rr.args.type+':'+rr.args.x+':'+rr.args.y]=t+180;

 var geos=units.filter(function(u){return u.role==='geologist';});
 var pioneers=units.filter(function(u){return u.role==='pioneer';});
 var explorers=units.filter(function(u){return u.role==='explorer';});
 var unsearched=E.unsearched||[];

 // First shovel belongs to a pioneer, not to an early forester. The pioneer claims a short,
 // reachable corridor one border tile at a time; it is never sent to a distant guessed coordinate.
 if(!pioneers.length&&t>45&&st('shovel')>0&&carriers>5&&idleC>1&&(M.pioneerAt||0)<=t){
  out.push(['profession',{role:'pioneer',d:1}]);M.pioneerAt=t+90;
 }
 function pioneerTarget(u){
  if(!map.w||!map.h||!map.known||!map.owner||!map.ter)return null;
  var grounds=map.grounds||[],goal=null,gd=1e18;
  for(var gy=1;gy<map.h-1;gy++)for(var gx=1;gx<map.w-1;gx++){
   var gi=gy*map.w+gx;if(!map.known[gi])continue;
   var gg=grounds[map.ter[gi]];
   if(!gg||!gg.mine||map.owner[gi]!==0&&map.owner[gi]!==me)continue;
   var gdx=gx-home.x,gdy=gy-home.y,gdist=gdx*gdx+gdy*gdy;
   if(gdist<gd){gd=gdist;goal={x:gx,y:gy};}
  }
  if(!goal)goal={x:(map.w-1)/2,y:(map.h-1)/2};
  var vx=goal.x-home.x,vy=goal.y-home.y,vlen=Math.sqrt(vx*vx+vy*vy)||1;vx/=vlen;vy/=vlen;
  var best=null,bestScore=-1e18;
  for(var y=1;y<map.h-1;y++)for(var x=1;x<map.w-1;x++){
   var i=y*map.w+x;if(!map.known[i]||map.owner[i]!==0)continue;
   var gr=grounds[map.ter[i]];
   if(!gr||gr.land===false||gr.walk===false)continue;
   if(map.occupied&&map.occupied[i])continue;
   if((map.tree&&map.tree[i])||(map.stone&&map.stone[i]))continue;
   var adj=false,enemyAdj=0;
   if(map.owner[i-1]===me||map.owner[i+1]===me||map.owner[i-map.w]===me||map.owner[i+map.w]===me)adj=true;
   if(!adj)continue;
   if(map.owner[i-1]&&map.owner[i-1]!==me)enemyAdj++;
   if(map.owner[i+1]&&map.owner[i+1]!==me)enemyAdj++;
   if(map.owner[i-map.w]&&map.owner[i-map.w]!==me)enemyAdj++;
   if(map.owner[i+map.w]&&map.owner[i+map.w]!==me)enemyAdj++;
   var toGoal=Math.abs(x-goal.x)+Math.abs(y-goal.y);
   var toUnit=Math.abs(x-u.x)+Math.abs(y-u.y);
   var forward=(x-home.x)*vx+(y-home.y)*vy;
   var score=-toGoal*1.25-toUnit*.35+forward*.12-enemyAdj*8+(gr.mine?14:0);
   if(score>bestScore){bestScore=score;best={x:x,y:y};}
  }
  return best;
 }
 for(var pio of pioneers)if(!pio.busy&&!pio.moving&&(M.pioneerMoveAt||0)<=t){
  var pt=pioneerTarget(pio);
  if(pt){out.push(['sendUnit',{u:pio.id,tx:pt.x,ty:pt.y}]);M.pioneerMoveAt=t+75;}
 }

 // Recruit the geologist as soon as the pioneer has put mountain tiles on our land.
 if(geos.length)M.geoPendingUntil=0;
 if(unsearched.length&&!geos.length&&st('pick')>0&&carriers>4&&idleC>1&&(M.geoAt||0)<=t){
  out.push(['profession',{role:'geologist',d:1}]);M.geoAt=t+60;M.geoPendingUntil=t+60;
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
 var geoPending=!geos.length&&(M.geoPendingUntil||0)>t;

 // One explorer is a secondary scout, not a substitute for the pioneer corridor.
 if(!explorers.length&&t>600&&carriers>10&&idleC>3&&spare('plank')>2&&(M.expAt||0)<=t){
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
  var ep=frontier(ex);
  if(ep){out.push(['sendUnit',{u:ex.id,tx:ep.x,ty:ep.y}]);M.exploreAt=t+45;}
 }

 function isResource(type){
  return ['wood','forest','quarry','fisher','hunter','waterhut','farm','coalmine','ironmine','goldmine','stonemine'].indexOf(type)>=0;
 }
 function legalSpot(type,p){
  if(!p||M.bad[type+':'+p.x+':'+p.y]>t)return false;
  if(typeof canPlace==='function'&&!canPlace(type,p.x,p.y))return false;
  return true;
 }
 function separated(type,x,y,size){
  var min=type==='guard'?11:type==='tower'?16:type==='look'?10:5;
  var cx=x+size/2,cy=y+size/2;
  for(var b of town){
   if(b.type==='hq')continue;
   var bw=b.w||3,bh=b.h||3,dx=cx-(b.x+bw/2),dy=cy-(b.y+bh/2);
   if(Math.sqrt(dx*dx+dy*dy)<min)return false;
  }
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
   for(var dy=-br;dy<=br;dy+=4)for(var dx=-br;dx<=br;dx+=4){
    if(dx*dx+dy*dy<(br-4)*(br-4))continue;
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
   if(!legalSpot(type,cp)||!separated(type,cp.x,cp.y,size))continue;
   var cx=cp.x+size/2,cy=cp.y+size/2,neutral=0,mountain=0,enemy=0,unknown=0;
   if(map.w&&map.h&&map.known&&map.owner&&map.ter){
    for(var sy=-reach;sy<=reach;sy+=4)for(var sx=-reach;sx<=reach;sx+=4){
     if(sx*sx+sy*sy>reach*reach)continue;
     var xx=Math.floor(cx+sx),yy=Math.floor(cy+sy);if(xx<0||yy<0||xx>=map.w||yy>=map.h)continue;
     var ii=yy*map.w+xx,kn=map.known[ii],ow=map.owner[ii];
     if(kn===0){unknown+=.35;continue;}
     if(ow!==0&&ow!==me){enemy++;continue;}
     if(ow!==0)continue;
     var gr=grounds[map.ter[ii]];
     if(!gr||gr.land!==false)neutral++;
     if(gr&&gr.mine)mountain++;
    }
   }
   var forward=(cx-home.x)*vx+(cy-home.y)*vy;
   var score=neutral+unknown+(seekOre?3.5:.8)*mountain+enemy*2+forward*.06+(typeof cp.n==='number'?cp.n*.12:0);
   if(type==='look')score=unknown*1.8+neutral*.7+enemy*2+forward*.08;
   if(score>bestScore){bestScore=score;bestP=cp;}
  }
  return bestP;
 }
 function ordinarySpot(type){
  var list=M.spots[type]||[];
  for(var p of list)if(legalSpot(type,p)&&(typeof p.n!=='number'||p.n>0)&&separated(type,p.x,p.y,3))return p;
  if(isResource(type)||typeof canPlace!=='function')return null;
  var bases=[];if(hq)bases.push(hq);for(var bp of border)if(bp.built)bases.push(bp);
  var best=null,score=1e18,size=type==='house2'?5:type==='house3'?6:3;
  for(var base of bases){
   for(var dy=-18;dy<=18;dy+=2)for(var dx=-18;dx<=18;dx+=2){
    var x=Math.floor(base.x+dx),y=Math.floor(base.y+dy);
    if(x<1||y<1||x>=(map.w||240)-size-1||y>=(map.h||240)-size-1)continue;
    if(!legalSpot(type,{x:x,y:y})||!separated(type,x,y,size))continue;
    var sc=Math.abs(dx)+Math.abs(dy);
    if(sc<score){score=sc;best={x:x,y:y};}
   }
  }
  return best;
 }

 // Recover settlers after battle losses: bedsComing prevents a house for every temporary gap.
 var population=typeof E.population==='number'?E.population:0,beds=typeof E.beds==='number'?E.beds:0;
 var populationGap=Math.max(0,beds-population-bedsComing);
 var peopleShort=carriers<7||idleC<3||tip('carriers')||tip('settlers')||tip('weapons');
 var homesNeeded=done('saw')>0&&!pendingHouse&&bedsComing<8&&has('house')<10&&(populationGap>=8||peopleShort);
 var mineFood=done('fisher')>0||done('hunter')>0||done('bakery')>0||st('fish')>3||st('meat')>3;
 var coalFoodShort=hasStatus('coalmine','needs bread')||hasStatus('coalmine','needs fish')||
  hasStatus('coalmine','waiting for food')||(done('coalmine')>0&&st('fish')<5&&st('bread')<4);
 var ironFoodShort=hasStatus('ironmine','needs meat')||hasStatus('ironmine','needs fish')||
  hasStatus('ironmine','waiting for food')||(done('ironmine')>0&&st('meat')<4&&st('fish')<4);
 var woodDry=hasStatus('wood','no grown trees')||hasStatus('wood','waiting for trees')||
  (t>900&&st('log')<4&&done('forest')===0);
 var want=[];
 function add(type,max,plank,stone,ok){
  if(!ok||has(type)>=max||spare('plank')<plank||spare('stone')<stone)return;
  if(want.indexOf(type)<0)want.push(type);
 }
 add('wood',1,2,2,true);
 add('saw',1,3,2,done('wood')>0);
 add('guard',1,2,3,done('saw')>0);
 add('fisher',1,3,3,done('saw')>0&&S.dock);
 add('hunter',1,3,3,done('saw')>0&&S.hunter);
 add('house',10,3,3,homesNeeded);
 add('guard',2,2,3,done('guard')>0&&staffedPosts>=1&&t>180);
 add('coalmine',1,3,5,ore('coal')&&mineFood);
 add('ironmine',1,3,5,ore('ironore')&&(done('hunter')>0||done('fisher')>0||done('bakery')>0||st('meat')>3||st('fish')>3));
 add('quarry',1,3,3,geos.length>0&&spare('pick')>0&&(st('stone')<24||t>600));
 add('smelter',1,4,5,done('coalmine')>0&&done('ironmine')>0);
 add('smith',1,4,5,done('smelter')>0);
 add('weaponsmith',1,5,7,done('smith')>0);
 add('barracks',1,5,7,done('weaponsmith')>0);
 add('forest',1,3,3,done('smith')>0&&spare('shovel')>0&&(woodDry||t>1200));
 add('waterhut',1,3,3,done('coalmine')>0&&coalFoodShort&&done('bakery')===0);
 add('farm',1,3,3,done('waterhut')>0&&done('farm')===0);
 add('mill',1,3,3,done('farm')>0&&done('mill')===0);
 add('bakery',1,3,3,done('mill')>0&&done('bakery')===0);
 add('look',1,2,2,done('guard')>0&&t>600&&((view.enemy&&view.enemy.buildings)||[]).length<3);
 add('look',2,2,2,done('guard')>0&&t>1800&&((view.enemy&&view.enemy.buildings)||[]).length<3);
 add('tower',1,5,5,done('barracks')>0&&totalSoldiers>=30&&border.length<3&&t>900);
 add('goldmine',1,4,5,done('barracks')>0&&done('smith')>0&&carriers>=10&&idleC>=3&&ore('goldore'));
 add('goldsmelter',1,4,5,done('goldmine')>0);
 add('vault',1,3,4,done('goldsmelter')>0&&S.vault);
 add('armorer',1,4,5,done('barracks')>0&&totalSoldiers>=24&&st('iron')>=10&&S.armor);

 // Ask only for sites the compact plan can actually use. Results are cached in memory by the engine.
 var askPool=want.slice();
 for(var extra of ['guard','look','coalmine','ironmine','fisher','hunter','wood','quarry','waterhut','farm','goldmine'])
  if(askPool.indexOf(extra)<0)askPool.push(extra);
 var askList=[],askSeen={};
 if(askPool.length){
  var start=Math.floor(t/12)%askPool.length;
  for(var ai=0;ai<askPool.length&&askList.length<6;ai++){
   var typ=askPool[(start+ai)%askPool.length];
   if(!askSeen[typ]){askSeen[typ]=1;askList.push(typ);}
  }
 }
 if(t>=(M.askAt||0)&&askList.length){out.push(['ask',{spots:askList}]);M.askAt=t+12;}

 // One build site at a time early; three later. This avoids scattering scarce goods across a dozen unfinished sites.
 var siteLimit=t<600?2:3;
 if(siteN<siteLimit&&(typeof M.lastPlaceAt!=='number'||t-M.lastPlaceAt>=5)){
  for(var next of want){
   var pos=(next==='guard'||next==='tower'||next==='castle'||next==='look')?militarySpot(next):ordinarySpot(next);
   if(!pos)continue;
   out.push(['place',{type:next,x:pos.x,y:pos.y}]);M.lastPlaceAt=t;M.spots[next]=[];
   break;
  }
 }

 // Configure actual garrisons: every guard has a melee defender and an archer; towers get a larger mixed garrison.
 for(var tb of town)if(tb.built&&(tb.type==='guard'||tb.type==='tower'||tb.type==='castle')){
  var wf=tb.type==='guard'?1:tb.type==='tower'?2:3;
  var wa=tb.type==='guard'?1:tb.type==='tower'?2:3;
  if(tb.fighters!==wf)out.push(['fighters',{b:tb.id,set:wf}]);
  if(tb.archers!==wa)out.push(['archers',{b:tb.id,set:wa}]);
  // priority on a built military building is stored as "hot", not town.prio. Track it ourselves to avoid 1,500+ repeats.
  if(!M.hot[tb.id]){out.push(['priority',{b:tb.id,on:true}]);M.hot[tb.id]=1;}
 }
 var A=E.army||{},reserve=staffedPosts>=Math.min(2,border.length)&&border.length>0?8:2;
 if(totalSoldiers>=36&&staffedPosts>=2)reserve=10;
 if(A.reserve!==reserve)out.push(['armyReserve',{set:reserve}]);
 if(done('barracks')>0){
  var stable=done('coalmine')>0&&done('ironmine')>0&&done('smelter')>0&&done('weaponsmith')>0&&carriers>=8;
  var targets={sword:stable?26:18,spear:stable?12:8,bow:stable?18:12,banner:S.banner&&done('goldsmelter')>0&&st('gold')>=4?3:0};
  var current=A.target||{};
  for(var kind in targets)if(current[kind]!==targets[kind])out.push(['armyTarget',{kind:kind,set:targets[kind]}]);
  var arm=A.armor||{};
  if(S.armor&&done('armorer')>0){
   var armorWant={sword:totalSoldiers>=42&&st('iron')>=20?1:0,spear:0,bow:1,banner:0};
   for(var ak in armorWant)if(arm[ak]!==armorWant[ak])out.push(['armyArmor',{kind:ak,set:armorWant[ak]}]);
  }
  var keep=A.keep||[];
  for(var ki=0;ki<keep.length;ki++)if(keep[ki].keep!==0)out.push(['weaponKeep',{k:ki,set:0}]);
 }
 var tp=E.toolPlan||[];
 for(var ti=0;ti<tp.length;ti++){
  var tool=tp[ti].tool,tk=tool==='pick'?2:tool==='shovel'?1:tool==='hammer'?1:1;
  if(tp[ti].keep!==tk)out.push(['toolKeep',{k:ti,set:tk}]);
 }
 for(var vb of town)if(vb.type==='vault'&&vb.keep!==12)out.push(['vaultKeep',{b:vb.id,set:12}]);
 for(var ab of town)if(ab.type==='armorer'&&!ab.repair)out.push(['armorRepair',{b:ab.id,on:true}]);

 if(t>0&&t%600<2&&M.noteAt!==t){
  out.push(['note',{text:'v248 pioneer-core: land '+(land.tiles||0)+', pioneers '+pioneers.length+', geo '+geos.length+', posts '+border.length+'/'+staffedPosts+', mines '+has('coalmine')+'/'+has('ironmine')+', pop '+population+'/'+beds+', carriers '+carriers+'/'+idleC+', soldiers '+totalSoldiers+', enemy '+((view.enemy&&view.enemy.buildings)||[]).length+'.'}]);
  M.noteAt=t;
 }
}

function army(view,M,out){
 var t=view.t||0,me=view.me,mine=view.soldiers||[],bld=view.buildings||[],enemy=view.enemy||{},map=view.map||{};
 var foes=enemy.soldiers||[],eb=enemy.buildings||[];
 function dist(a,b){return Math.abs(a.x-b.x)+Math.abs(a.y-b.y);}
 function door(b){return b.door||{x:b.x+(b.w||3)/2,y:b.y+(b.h||3)/2};}
 function power(s){
  var hp=s.hp||s.maxHp||10,str=s.str==null?60:s.str/100;
  var melee=s.kind==='bow'?.42:s.kind==='banner'?0:1;
  return hp*str*melee*(1+.12*(s.arm||0)+.06*(s.rank||0));
 }
 function isMil(b){return !!b.military||['guard','tower','castle','hq'].indexOf(b.type)>=0;}
 var free=mine.filter(function(s){return !s.order&&!s.defends&&!s.fighting&&!s.moving&&!s.held;});
 var fighters=free.filter(function(s){return s.kind!=='banner'&&s.hp>=(s.maxHp||10)*.65;});
 var melee=fighters.filter(function(s){return s.kind!=='bow';});
 var bows=fighters.filter(function(s){return s.kind==='bow';});
 var banners=free.filter(function(s){return s.kind==='banner';});
 var ownHQ=null;for(var h of bld)if(h.owner===me&&h.type==='hq'){ownHQ=h;break;}
 var hx=ownHQ?ownHQ.x+(ownHQ.w||5)/2:(map.w?map.w/2:120);
 var hy=ownHQ?ownHQ.y+(ownHQ.h||4)/2:(map.h?map.h/2:120);
 var refusedAttack=false;for(var r of (view.refused||[]))if(r.order==='attack')refusedAttack=true;
 if(refusedAttack)M.attackAfter=t+90;

 // Keep one assault active. Once its target disappears from the enemy list, free the held attackers;
 // otherwise the army stays held forever and the border buildings cannot call replacements.
 var attackers=mine.filter(function(s){return s.order&&s.order.k==='attack';});
 if(attackers.length){
  var targetId=attackers[0].order.b,target=null;
  for(var eb0 of eb)if(eb0.id===targetId){target=eb0;break;}
  if(!target){
   out.push(['free',{ids:attackers.map(function(s){return s.id;})}]);
   M.siegeTarget=0;M.siegeLosses=0;M.siegePrev=0;M.siegeStart=0;M.attackAfter=t+3;
   return;
  }
  if(M.siegeTarget!==targetId){M.siegeTarget=targetId;M.siegeStart=attackers.length;M.siegePrev=attackers.length;M.siegeLosses=0;}
  if(typeof M.siegePrev==='number'&&attackers.length<M.siegePrev)M.siegeLosses=(M.siegeLosses||0)+M.siegePrev-attackers.length;
  M.siegePrev=attackers.length;
  var cap=target.type==='castle'?10:target.type==='tower'?6:target.type==='guard'?3:1;
  var danger=0,td=door(target);
  for(var foe of foes)if(dist(foe,td)<24)danger+=power(foe);
  var need=danger*1.4+(target.manned?cap*6*1.25:0)+12;
  var lossLimit=Math.max(4,Math.ceil((M.siegeStart||attackers.length)*.35));
  if((M.siegeLosses||0)>=lossLimit){
   out.push(['march',{ids:attackers.map(function(s){return s.id;}),tx:Math.round(hx),ty:Math.round(hy),form:'block',am:false,loose:true}]);
   out.push(['note',{text:'v248 siege break: losses '+M.siegeLosses+', retreating to rebuild the field group.'}]);
   M.siegeTarget=0;M.siegeLosses=0;M.siegePrev=0;M.siegeStart=0;M.attackAfter=t+180;
   return;
  }
  if((M.reinforceAt||0)<=t&&fighters.length>=4){
   var extra=melee.slice().sort(function(a,b){return dist(a,td)-dist(b,td);}).slice(0,Math.max(0,fighters.length-2));
   if(extra.length<4)extra=extra.concat(bows.slice(0,Math.max(0,4-extra.length)));
   var ep=0;for(var es of extra)ep+=power(es);
   if(extra.length>=4&&ep>=need*.55){
    out.push(['attack',{ids:extra.map(function(s){return s.id;}),b:targetId}]);M.reinforceAt=t+30;
   }
  }
  return;
 }

 // Captured attackers are idle but still held. Free them before planning another attack.
 var heldIdle=mine.filter(function(s){return s.held&&!s.order&&!s.defends&&!s.fighting&&!s.moving;});
 if(heldIdle.length){out.push(['free',{ids:heldIdle.map(function(s){return s.id;})}]);return;}

 // Defend the HQ and the forward posts before beginning another siege.
 var threat=null,threatD=22;
 for(var f of foes)for(var own of bld)if(own.owner===me){
  var td2=dist(f,{x:own.x+(own.w||3)/2,y:own.y+(own.h||3)/2});
  if(td2<threatD){threatD=td2;threat=f;}
 }
 if(threat&&(M.defendAt||0)<=t&&fighters.length>=4){
  var defenders=fighters.slice().sort(function(a,b){return dist(a,threat)-dist(b,threat);}).slice(0,Math.max(0,fighters.length-2));
  if(defenders.length>=4){
   out.push(['march',{ids:defenders.map(function(s){return s.id;}),tx:Math.round(threat.x),ty:Math.round(threat.y),form:'block',am:true}]);
   M.defendAt=t+30;return;
  }
 }

 if(t<(M.attackAfter||0))return;
 var centre={x:hx,y:hy};
 if(fighters.length){
  for(var s0 of fighters){centre.x+=s0.x;centre.y+=s0.y;}
  centre.x/=fighters.length+1;centre.y/=fighters.length+1;
 }
 var targets=eb.filter(function(b){return isMil(b)&&(!b.remembered||t-(b.seenAt||0)<1200);});
 targets.sort(function(a,b){
  var ah=a.type==='hq'?2:a.manned?1:0,bh=b.type==='hq'?2:b.manned?1:0;
  if(ah!==bh)return ah-bh;
  var ad=dist(centre,door(a)),bd=dist(centre,door(b));
  return ad-bd;
 });
 for(var target of targets){
  if(target.type==='hq'&&targets.some(function(x){return x.type!=='hq';}))continue;
  var d=door(target),near=0,enemyPower=0;
  for(var e of foes)if(dist(e,d)<24){near++;enemyPower+=power(e);}
  var cap=target.type==='castle'?10:target.type==='tower'?6:target.type==='guard'?3:1;
  var need=enemyPower*1.4+(target.manned?cap*6*1.25:0)+12;
  var minCount=target.type==='hq'?16:target.manned?(target.type==='castle'?24:target.type==='tower'?16:12):8;
  var minMelee=target.type==='hq'?8:target.manned?(target.type==='castle'?16:target.type==='tower'?10:7):4;
  var maxGroup=Math.min(32,Math.max(0,fighters.length-2));
  var group=melee.slice().sort(function(a,b){return dist(a,d)-dist(b,d);}).slice(0,maxGroup);
  if(group.length<maxGroup)group=group.concat(bows.slice().sort(function(a,b){return dist(a,d)-dist(b,d);}).slice(0,maxGroup-group.length));
  var meleeN=0,strength=0;
  for(var q of group){if(q.kind!=='bow')meleeN++;strength+=power(q);}
  if(group.length<minCount||meleeN<minMelee||strength<need*1.2)continue;
  var support=banners.slice().sort(function(a,b){return dist(a,d)-dist(b,d);}).slice(0,Math.min(banners.length,Math.floor(group.length/10)));
  var ids=group.concat(support).map(function(s){return s.id;});
  out.push(['attack',{ids:ids,b:target.id}]);
  M.siegeTarget=target.id;M.siegeStart=group.length;M.siegePrev=group.length+support.length;M.siegeLosses=0;M.reinforceAt=t+30;
  return;
 }

 // No visible military objective: send one loose attack-move column to find the opponent.
 // loose:true is deliberate: after the march, posts may call these soldiers if they need garrisons.
 var activeProbe=mine.some(function(s){return s.order&&s.order.k==='attack-move';});
 if(!activeProbe&&fighters.length>=10&&(M.probeAt||0)<=t){
  var targetP=null,best=1e18;
  if(map.w&&map.h&&map.known&&map.owner){
   for(var y=0;y<map.h;y++)for(var x=0;x<map.w;x++){
    var i=y*map.w+x;if(!map.known[i])continue;
    var ow=map.owner[i];if(ow===0||ow===me)continue;
    var d0=Math.abs(x-centre.x)+Math.abs(y-centre.y);
    if(d0<best){best=d0;targetP={x:x,y:y};}
   }
   if(!targetP){
    var vx=map.w/2-hx,vy=map.h/2-hy,vlen=Math.sqrt(vx*vx+vy*vy)||1;vx/=vlen;vy/=vlen;
    var bestScore=-1e18,grounds=map.grounds||[];
    for(var yy=1;yy<map.h-1;yy++)for(var xx=1;xx<map.w-1;xx++){
     var ii=yy*map.w+xx;if(map.known[ii]!==2||map.owner[ii]!==0)continue;
     var gr=grounds[map.ter[ii]];if(gr&&gr.walk===false)continue;
     var edge=(map.known[ii-1]===0?1:0)+(map.known[ii+1]===0?1:0)+(map.known[ii-map.w]===0?1:0)+(map.known[ii+map.w]===0?1:0);
     if(!edge)continue;
     var forward=(xx-hx)*vx+(yy-hy)*vy,dd=Math.abs(xx-centre.x)+Math.abs(yy-centre.y);
     var score=edge*8+forward*.25-dd*.35;
     if(score>bestScore){bestScore=score;targetP={x:xx,y:yy};}
    }
   }
  }
  if(targetP){
   var count=Math.min(12,Math.max(0,fighters.length-2));
   var probe=melee.slice().sort(function(a,b){return dist(a,targetP)-dist(b,targetP);}).slice(0,count);
   if(probe.length<count)probe=probe.concat(bows.slice(0,count-probe.length));
   var support=banners.slice(0,Math.min(banners.length,Math.floor(probe.length/10)));
   if(probe.length>=8){
    out.push(['march',{ids:probe.concat(support).map(function(s){return s.id;}),tx:targetP.x,ty:targetP.y,form:'block',am:true,loose:true}]);
    M.probeAt=t+240;
   }
  }
 }
}
