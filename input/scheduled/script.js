// ChatGPT scheduled — v256 builder-derived frontier: staffed posts, adaptive housing, persistent geology and replacement mines.
// Replace the brittle two-post rush with the kit's proven full-game builder structure and a supported, patient army.
// Game version: 253
function think(view){
 if(!view||view.over)return [];
 var P=memory.plan||(memory.plan={}),out=[],t=view.t||0,map=view.map||{},E=view.economy||null,S=view.switches||{};
 var soldiers=view.soldiers||[],buildings=view.buildings||[],enemy=view.enemy||{},enemyBuildings=enemy.buildings||[],enemySoldiers=enemy.soldiers||[];
 function push(n,a){if(out.length<48)out.push([n,a]);}
 function dist(a,b){return Math.abs((a.x||0)-(b.x||0))+Math.abs((a.y||0)-(b.y||0));}
 function door(b){return b.door||{x:b.x+(b.w||3)/2,y:b.y+(b.h||3)/2};}
 function military(b){return !!b.military||b.type==='hq'||b.type==='guard'||b.type==='tower'||b.type==='castle';}
 function fresh(b,age){return !b.remembered||typeof b.seenAt!=='number'||t-b.seenAt<(age||240);}
 function power(s){return (s.hp||s.maxHp||10)*(0.6+0.2*(s.arm||0))*(typeof s.str==='number'?s.str/100:0.6);}
 var hq=null;
 for(var hb of buildings)if(hb.type==='hq'){hq=hb;break;}
 var hx=hq?hq.x+(hq.w||5)/2:(map.w||240)/2,hy=hq?hq.y+(hq.h||4)/2:(map.h||240)/2;
 var free=soldiers.filter(function(s){return !s.order&&!s.defends&&!s.fighting&&!s.moving&&!s.held;});
 var fighters=free.filter(function(s){return s.kind!=='banner'&&s.hp>=(s.maxHp||10)*0.75;});
 var banners=free.filter(function(s){return s.kind==='banner';});

 // Protect the settlement without abandoning an active siege.
 var threat=null,threatD=18;
 for(var foe of enemySoldiers)for(var own of buildings)if(military(own)){
  var td=dist(foe,door(own));
  if(td<threatD){threatD=td;threat=foe;}
 }
 if(threat&&fighters.length>=7&&(P.defendAt||0)<=t){
  var homeGroup=fighters.slice().sort(function(a,b){return dist(a,threat)-dist(b,threat)||(a.id-b.id);})
   .slice(0,Math.min(4,fighters.length-2));
  if(homeGroup.length>=4){
   push('march',{ids:homeGroup.map(function(s){return s.id;}),tx:Math.round(threat.x),ty:Math.round(threat.y),form:'block',am:true,loose:true});
   P.defendAt=t+30;
   return out.slice(0,50);
  }
 }

 // Release only the soldiers committed to a siege after capture, disappearance or unacceptable losses.
 if(P.siege&&P.siege.ids){
  var target=null,captured=false;
  for(var eb of enemyBuildings)if(eb.id===P.siege.id){target=eb;break;}
  for(var ob of buildings)if(ob.id===P.siege.id){captured=true;break;}
  var live=[];
  for(var sid of P.siege.ids)for(var ss of soldiers)if(ss.id===sid){live.push(ss);break;}
  var alive=live.filter(function(s){return s.kind!=='banner';}).length;
  if(typeof P.siege.last==='number'&&alive<P.siege.last)P.siege.losses=(P.siege.losses||0)+P.siege.last-alive;
  P.siege.last=alive;
  var limit=Math.max(2,Math.ceil((P.siege.start||8)*0.35));
  if(captured||!target||(target.remembered&&typeof target.seenAt==='number'&&t-target.seenAt>300)||(P.siege.losses||0)>=limit){
   var releaseIds=live.map(function(s){return s.id;});
   if(releaseIds.length)push('release',{ids:releaseIds,stop:true});
   P.retreatIds=(P.siege.losses||0)>=limit?releaseIds:[];
   P.siege=null;
   P.attackAfter=t+((P.retreatIds&&P.retreatIds.length)?120:20);
   return out.slice(0,50);
  }
  return out.slice(0,50);
 }
 if(P.retreatIds&&P.retreatIds.length){
  var retreat=free.filter(function(s){return P.retreatIds.indexOf(s.id)>=0;});
  if(retreat.length)push('march',{ids:retreat.map(function(s){return s.id;}),tx:Math.round(hx),ty:Math.round(hy),form:'block',am:false,loose:true});
  P.retreatIds=[];
  if(retreat.length)return out.slice(0,50);
 }

 // Prefer empty military buildings; attack the HQ only after other military objectives.
 var targets=enemyBuildings.filter(function(b){return b.built!==false&&military(b)&&fresh(b,240);});
 function targetRank(b){if(b.type==='hq')return 6;if(b.type==='castle')return b.manned?5:3;if(b.type==='tower')return b.manned?4:1;return b.manned?2:0;}
 targets.sort(function(a,b){
  return targetRank(a)-targetRank(b)||dist({x:hx,y:hy},door(a))-dist({x:hx,y:hy},door(b))||(a.id-b.id);
 });
 var attacked=false;
 if(t>=(P.attackAfter||0)&&fighters.length>=15){
  for(var target1 of targets){
   if(target1.type==='hq'&&targets.length>1)continue;
   var d=door(target1),danger=0;
   for(var e of enemySoldiers)if(dist(e,d)<24)danger+=power(e);
   var guardCount=target1.type==='castle'?10:target1.type==='tower'?6:target1.type==='hq'?1:3;
   var group=fighters.slice().sort(function(a,b){return dist(a,d)-dist(b,d)||(a.id-b.id);})
    .slice(0,Math.max(0,fighters.length-6));
   if(group.length<(target1.manned?10:8))continue;
   var support=[];
   if(S.banner&&banners.length)support=banners.slice().sort(function(a,b){return dist(a,d)-dist(b,d)||(a.id-b.id);})
    .slice(0,Math.min(banners.length,Math.ceil(group.length/8)));
   var raw=0;for(var q of group)raw+=power(q);
   var strength=raw*(support.length?(view.gold||0.6):0.65);
   var required=1.35*(danger+(target1.manned?guardCount:1)*6)+12;
   if(strength<required)continue;
   var ids=group.map(function(s){return s.id;}).concat(support.map(function(s){return s.id;}));
   push('attack',{ids:ids,b:target1.id});
   P.siege={id:target1.id,ids:ids,start:group.length,last:group.length,losses:0,started:t};
   P.attackAfter=t+60;attacked=true;break;
  }
 }

 // If every known military target is too strong, raid exposed production instead of waiting forever.
 if(!attacked&&t>=(P.attackAfter||0)&&fighters.length>=13){
  var raids=enemyBuildings.filter(function(b){return !military(b)&&b.built!==false&&fresh(b,180);});
  var raidRank={barracks:0,weaponsmith:1,smelter:2,smith:3,coalmine:4,ironmine:5,wood:6,saw:7,quarry:8,fisher:9,hunter:10};
  raids.sort(function(a,b){
   var ar=raidRank[a.type]===undefined?20:raidRank[a.type],br=raidRank[b.type]===undefined?20:raidRank[b.type];
   return ar-br||dist({x:hx,y:hy},door(a))-dist({x:hx,y:hy},door(b))||(a.id-b.id);
  });
  for(var raid of raids){
   var rd=door(raid),covered=false,raidDanger=0;
   for(var m of targets)if(dist(door(m),rd)<18)covered=true;
   for(var re of enemySoldiers)if(dist(re,rd)<20)raidDanger+=power(re);
   if(covered)continue;
   var raidGroup=fighters.slice().sort(function(a,b){return dist(a,rd)-dist(b,rd)||(a.id-b.id);})
    .slice(0,Math.min(10,Math.max(0,fighters.length-6)));
   var raidPower=0;for(var rq of raidGroup)raidPower+=power(rq);
   if(raidGroup.length>=8&&raidPower*0.65>raidDanger*1.25+10){
    var raidIds=raidGroup.map(function(s){return s.id;});
    push('attack',{ids:raidIds,b:raid.id});
    P.siege={id:raid.id,ids:raidIds,start:raidIds.length,last:raidIds.length,losses:0,started:t};
    P.attackAfter=t+60;attacked=true;break;
   }
  }
 }

 if(!E||view.armyOnly)return out.slice(0,50);

 var town=E.town||[],stock=E.stock||{},people=E.people||{},idle=E.idle||{},units=E.units||[],tips=E.tips||[];
 var carriers=people.carrier||0,idleC=idle.carrier||0,land=E.land||{},oreList=E.ore||[],unsearched=Array.isArray(E.unsearched)?E.unsearched:[];
 function st(it){return stock[it]||0;}
 function tip(k){return tips.some(function(z){return z.k===k;});}
 function ore(kind){return oreList.some(function(o){return o.ore===kind;});}
 function status(type,needle){
  needle=needle.toLowerCase();
  for(var z of town)if(z.type===type&&(z.status||'').toLowerCase().indexOf(needle)>=0)return true;
  return false;
 }
 var count={},built={},pending={},sites=0,bedsComing=0;
 for(var b of town){
  count[b.type]=(count[b.type]||0)+1;
  if(b.built)built[b.type]=(built[b.type]||0)+1;
  else{
   sites++;
   if(b.cost)for(var it in b.cost)if(Object.prototype.hasOwnProperty.call(b.cost,it))
    pending[it]=(pending[it]||0)+Math.max(0,b.cost[it]-((b.delivered||{})[it]||0));
  }
  bedsComing+=b.coming||0;
 }
 function has(type){return count[type]||0;}
 function done(type){return built[type]||0;}
 function spare(it,n){return st(it)>=(n+(pending[it]||0));}

 // Demolish only sites the kit explicitly identifies as having no path.
 for(var site of town)if(!site.built&&/^No way/i.test(site.status||'')){
  push('demolish',{b:site.id});
  break;
 }

 // The canonical geology counter is land.unsearched; use its coordinate list, then a deterministic map scan fallback.
 var geos=units.filter(function(u){return u.role==='geologist';});
 var unsearchedCount=typeof land.unsearched==='number'?Math.max(land.unsearched,unsearched.length):unsearched.length;
 var geoLimit=done('smith')>0?2:1;
 var needGeo=unsearchedCount>0||((land.mountain||0)>0&&!ore('coal')&&!ore('ironore')&&geos.length===0);
 if(needGeo&&geos.length<geoLimit&&st('pick')>(geos.length?1:0)&&carriers>4&&idleC>0&&(P.geoT||0)<=t){
  push('profession',{role:'geologist',d:1});
  P.geoT=t+60;
 }
 var visited=P.geoVisited||[];
 function geoKey(p){return p.x+':'+p.y;}
 function mineable(p){
  var idx=p.y*(map.w||240)+p.x;
  if(map.grounds&&map.ter){
   var gnd=map.grounds[map.ter[idx]];
   return !!(gnd&&gnd.mine);
  }
  return true;
 }
 for(var g of geos){
  if(g.busy||g.moving)continue;
  var spot=null;
  for(var u of unsearched){
   var key=geoKey(u);
   if(visited.indexOf(key)>=0||!mineable(u))continue;
   var assigned=false;
   for(var other of geos)if(other.id!==g.id&&other.to&&dist(other.to,u)<=8)assigned=true;
   if(!assigned){spot=u;break;}
  }
  if(!spot&&map.ter&&map.grounds&&map.owner&&map.w){
   var candidates=[];
   for(var idx=0;idx<map.ter.length;idx++){
    if(map.owner[idx]!==view.me)continue;
    var ground=map.grounds[map.ter[idx]];
    if(!ground||!ground.mine)continue;
    var p={x:idx%map.w,y:Math.floor(idx/map.w)},key2=geoKey(p);
    if(visited.indexOf(key2)>=0)continue;
    var knownOre=oreList.some(function(o){return o.x===p.x&&o.y===p.y;});
    if(knownOre)continue;
    var occupied=false;
    for(var og of geos)if(og.id!==g.id&&og.to&&dist(og.to,p)<=8)occupied=true;
    if(!occupied)candidates.push(p);
   }
   candidates.sort(function(a,b){return dist(a,g)-dist(b,g)||a.y-b.y||a.x-b.x;});
   if(candidates.length)spot=candidates[0];
  }
  if(spot){
   push('sendUnit',{u:g.id,tx:spot.x,ty:spot.y});
   visited.push(geoKey(spot));
   if(visited.length>64)visited=visited.slice(-64);
   P.geoLast=P.geoLast||{};
   P.geoLast[g.id]={x:spot.x,y:spot.y,at:t};
  }
 }
 P.geoVisited=visited;

 // One explorer reveals the enemy without sacrificing a starting soldier.
 var explorers=units.filter(function(u){return u.role==='explorer';});
 var freshEnemy=enemyBuildings.some(function(b){return fresh(b,240);});
 var geoPending=(P.geoT||0)>t&&geos.length<geoLimit;
 if(!freshEnemy&&!geoPending&&t>180){
  if(!explorers.length&&carriers>7&&idleC>2&&st('plank')>2&&(P.exploreRecruitAt||0)<=t){
   push('profession',{role:'explorer',d:1});
   P.exploreRecruitAt=t+90;
  }else if(explorers.length){
   var scout=explorers[0];
   if(!scout.busy&&!scout.moving&&(P.exploreAt||0)<=t&&(P.exploreStage||0)<3){
    var stage=P.exploreStage||0,tx=stage===0?Math.floor((map.w||240)/2):Math.round((map.w||240)-hx);
    var ty=stage===2?Math.max(2,Math.min((map.h||240)-3,Math.round(hy+18))):Math.round(hy);
    tx=Math.max(2,Math.min((map.w||240)-3,tx));
    push('sendUnit',{u:scout.id,tx:tx,ty:ty});
    P.exploreStage=stage+1;P.exploreAt=t+150;
   }
  }
 }

 // Tool reserves prevent geologists, mines and the toolsmith from consuming the last useful tools.
 if(done('smith')>0&&Array.isArray(E.toolPlan))E.toolPlan.forEach(function(tp,k){
  var set=tp.tool==='pick'?2:1;
  if(tp.keep!==set)push('toolKeep',{k:k,set:set});
 });

 var A=E.army||{},armyTargets=A.target||{},armorTargets=A.armor||{};
 if(has('weaponsmith')||has('barracks')){
  var trained=done('smelter')>0&&(done('coalmine')||0)>=2;
  var targetsArmy={sword:trained?18:10,spear:trained?8:4,bow:trained?12:6};
  for(var kind of ['sword','spear','bow'])if(armyTargets[kind]!==targetsArmy[kind])push('armyTarget',{kind:kind,set:targetsArmy[kind]});
  if(S.banner&&done('goldsmelter')>0&&armyTargets.banner!==(trained?3:1))push('armyTarget',{kind:'banner',set:trained?3:1});
  if(S.armor&&done('armorer')>0&&view.soldiers.length>=12&&!armorTargets.bow)push('armyArmor',{kind:'bow',set:1});
 }
 for(var vb of town)if(S.vault&&vb.type==='vault'&&vb.built&&vb.keep!==40)push('vaultKeep',{b:vb.id,set:40});
 for(var ab of town)if(S.armor&&S.gear&&ab.type==='armorer'&&ab.built&&!ab.repair)push('armorRepair',{b:ab.id,on:true});

 // Restore the permanent melee garrisons: one swordsman in a guard, two in a tower, three in a castle.
 for(var gb of town)if(gb.built&&(gb.type==='guard'||gb.type==='tower'||gb.type==='castle')){
  var desired=gb.type==='castle'?3:gb.type==='tower'?2:1;
  if(gb.fighters!==desired)push('fighters',{b:gb.id,set:desired});
  if(gb.archers!==0)push('archers',{b:gb.id,set:0});
 }

 // Expand only after every existing post has its permanent swordsmen.
 var border=buildings.filter(function(b){return b.type!=='hq'&&military(b);});
 function requiredGarrison(b){return b.type==='castle'?3:b.type==='tower'?2:1;}
 var allStaffed=border.every(function(b){return b.built&&Array.isArray(b.troops)&&b.troops.length>=requiredGarrison(b);});
 var expand=allStaffed&&((P.expandAfter||90)<=t||tip('land')||tip('ore'));

 // Housing responds to actual workforce/carrier pressure, not simply a nearly full bed count.
 var peopleShort=carriers<9||idleC<3||(E.homeless||0)>0||tip('settlers')||tip('weapons')||tip('carriers');
 var houseSite=town.some(function(b){return !b.built&&/^house/.test(b.type);});
 var homes=peopleShort&&bedsComing<6&&!houseSite;

 var wants=[],want=wants;
 function add(type,max,plank,stone,ready){
  if(ready!==false&&has(type)<max&&spare('plank',plank)&&spare('stone',stone)&&want.indexOf(type)<0)want.push(type);
 }
 add('quarry',1,2,3,true);
 add('wood',1,2,2,done('quarry')>0);
 add('saw',1,3,4,done('quarry')>0&&done('wood')>0);
 add('house',1,3,3,homes&&has('saw')>0);
 add('house2',2,5,6,homes&&has('house')>0);
 add('house',3,3,3,homes&&has('saw')>0);
 add('wood',2,2,2,has('saw')>0);
 add('forest',1,3,1,has('wood')>0&&st('shovel')>0);
 add('guard',2,2,3,expand);
 add('tower',2,5,5,expand&&view.soldiers.length>=8&&border.length>=2);
 add('guard',4,2,3,expand);
 add('fisher',1,3,2,has('house')>0||has('guard')>0);
 add('hunter',1,3,2,S.hunter&&has('house')>0);
 add('quarry',2,2,3,done('smith')>0&&st('stone')<14);
 add('castle',1,8,12,expand&&view.soldiers.length>=18&&t>1500&&border.length>=4);

 var coalFood=done('fisher')>0||done('bakery')>0||(S.hunter&&(done('hunter')>0||done('butcher')>0));
 var ironFood=done('fisher')>0||done('butcher')>0||done('hunter')>0;
 var coalDepleted=status('coalmine','deposit worn out')||status('coalmine','deposit thinning');
 var ironDepleted=status('ironmine','deposit worn out')||status('ironmine','deposit thinning');
 add('coalmine',1,4,1,ore('coal')&&coalFood);
 add('ironmine',1,4,1,ore('ironore')&&ironFood);
 add('smelter',1,4,6,done('coalmine')>0&&done('ironmine')>0);
 add('smith',1,3,5,done('smelter')>0);
 add('weaponsmith',1,5,7,done('smelter')>0||st('iron')>=4);
 add('barracks',1,4,5,has('weaponsmith')>0||st('sword')>=2);
 add('coalmine',3,4,1,done('smith')>0&&coalFood&&st('pick')>0&&(st('coal')<16||coalDepleted));
 add('ironmine',3,4,1,done('smith')>0&&ironFood&&st('pick')>1&&(st('ironore')<10||ironDepleted));
 add('smelter',2,4,6,done('smelter')>0&&st('coal')>5&&st('ironore')>5);
 add('waterhut',1,3,4,has('barracks')>0);
 add('farm',1,6,6,has('waterhut')>0);
 add('mill',1,3,3,has('farm')>0);
 add('bakery',1,4,5,has('mill')>0&&has('waterhut')>0);
 add('pigfarm',1,6,6,has('farm')>0&&has('waterhut')>0);
 add('butcher',1,4,4,has('pigfarm')>0);
 add('goldmine',2,5,1,done('smith')>0&&ore('goldore')&&st('pick')>1&&coalFood);
 add('goldsmelter',1,4,6,done('goldmine')>0&&st('coal')>=6);
 add('vault',2,3,4,S.vault&&done('goldsmelter')>0);
 add('armorer',1,4,5,S.armor&&done('barracks')>0&&st('iron')>=2&&view.soldiers.length>=8);
 add('wood',3,2,2,done('smith')>0&&st('log')<12);
 add('forest',2,3,1,(has('wood')>=2||status('wood','no grown trees'))&&st('shovel')>0);
 add('saw',2,3,4,done('smith')>0&&st('plank')<18);
 add('fisher',2,3,2,done('smith')>0&&st('fish')<10);
 add('hunter',2,3,2,S.hunter&&done('weaponsmith')>0&&st('meat')<10);

 // Reuse spot answers briefly. Military candidates are scored toward unclaimed land and mineable mountains.
 var cached=P.spots||{},incoming=E.spots||{},rejected=P.rejected||null;
 for(var sk in incoming)if(Object.prototype.hasOwnProperty.call(incoming,sk))cached[sk]=incoming[sk];
 var askList=wants.filter(function(type){return cached[type]===undefined||cached[type].length>0;}).slice(0,6);
 if(askList.length<6){
  var retry=wants.filter(function(type){return cached[type]&&cached[type].length===0;});
  if(retry.length){
   var retryType=retry[Math.floor(t/12)%retry.length];
   if(askList.indexOf(retryType)<0)askList.push(retryType);
  }
 }
 if(askList.length&&(P.askAfter||0)<=t){push('ask',{spots:askList});P.askAfter=t+12;}

 var maxSites=t<360?3:5;
 if(peopleShort)maxSites++;
 if(sites<maxSites){
  for(var type of wants){
   var spots=cached[type]||[];
   var isMil=type==='guard'||type==='tower'||type==='castle';
   if(isMil){
    var reach={guard:14,tower:20,castle:26},radius=reach[type],seekOre=!ore('ironore')||!ore('coal');
    var candidates=spots.slice(),bases=[hq].concat(border);
    if(typeof canPlace==='function')for(var base of bases){
     if(!base)continue;
     for(var dx=-radius;dx<=radius;dx+=4)for(var dy=-radius;dy<=radius;dy+=4){
      if(Math.abs(dx)+Math.abs(dy)<radius)continue;
      var cx=Math.floor(base.x)+dx,cy=Math.floor(base.y)+dy;
      if(cx<1||cy<1||cx>=(map.w||240)-4||cy>=(map.h||240)-4)continue;
      if(canPlace(type,cx,cy))candidates.push({x:cx,y:cy});
     }
    }
    var unique={},scored=[];
    for(var cp of candidates){
     var key=cp.x+':'+cp.y;
     if(unique[key])continue;
     unique[key]=true;
     var scoreLand=0,scoreMountain=0,r=radius;
     for(var sx=-r;sx<=r;sx+=4)for(var sy=-r;sy<=r;sy+=4){
      if(sx*sx+sy*sy>r*r)continue;
      var xx=cp.x+sx+2,yy=cp.y+sy+2;
      if(xx<0||xx>=(map.w||240)||yy<0||yy>=(map.h||240))continue;
      var idx=yy*(map.w||240)+xx;
      if(map.owner&&map.owner[idx])continue;
      if(map.known&&!map.known[idx]){scoreLand+=0.4;continue;}
      if(map.grounds&&map.ter){
       var gr=map.grounds[map.ter[idx]];
       if(gr&&gr.land)scoreLand++;
       if(gr&&gr.mine)scoreMountain++;
      }
     }
     cp.score=scoreLand+(seekOre?2:0.3)*scoreMountain;
     scored.push(cp);
    }
    scored.sort(function(a,b){return b.score-a.score||dist(a,hq)-dist(b,hq)||a.y-b.y||a.x-b.x;});
    if(scored.length)spots=scored.filter(function(p){return p.score>=4;});
    if(!spots.length)spots=candidates;
    cached[type]=spots.slice(0,8);
   }
   var spot=null;
   for(var candidate of spots){
    if(rejected&&rejected.until>t&&rejected.type===type&&candidate.x===rejected.x&&candidate.y===rejected.y)continue;
    if(typeof canPlace!=='function'||canPlace(type,candidate.x,candidate.y)){spot=candidate;break;}
   }
   if(!spot)continue;
   push('place',{type:type,x:spot.x,y:spot.y});
   cached[type]=[];
   if(isMil)P.expandAfter=t+(border.length<5?60:100);
   break;
  }
 }

 for(var rr of (view.refused||[])){
  if(rr.order==='place'&&rr.args)P.rejected={type:rr.args.type,x:rr.args.x,y:rr.args.y,until:t+60};
  if(rr.order==='attack')P.attackAfter=t+60;
 }
 P.spots=cached;
 if(t-(P.noteAt||0)>=900){
  push('note',{text:'v256 builder frontier: posts '+border.length+', staffed '+border.filter(function(b){return b.built&&b.troops&&b.troops.length>=requiredGarrison(b);}).length+', mines '+has('coalmine')+'/'+has('ironmine')+', barracks '+has('barracks')+', soldiers '+soldiers.length+', carriers '+carriers+', idle '+idleC+'.'});
  P.noteAt=t;
 }
 return out.slice(0,50);
}