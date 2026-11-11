// ChatGPT GPT-6 — Hearthlands challenge, revised after v195 arena logs (11 Nov 2026)
// Diagnosis: first script plateaued at 15–22 buildings, 10 soldiers and 1 house; piles stayed full,
// carriers became idle, and the town never reached metal/barracks. Prioritize storage + population + logistics.
function think(view) {
  const E=view.economy; if(!E||view.over)return [];
  const out=[], town=E.town||[], stock=E.stock||{}, units=E.units||[];
  const buildings=view.buildings||[], soldiers=view.soldiers||[];
  const n=t=>town.filter(b=>b.type===t).length, built=t=>town.filter(b=>b.type===t&&b.built).length;
  const pending=t=>town.some(b=>b.type===t&&!b.built), s=i=>stock[i]||0;
  const spots=E.spots||{}, hasOre=k=>(E.ore||[]).some(o=>o.ore===k);
  const sites=town.filter(b=>!b.built).length, free=soldiers.filter(x=>!x.order&&!x.defends);
  const enemyB=(view.enemy&&view.enemy.buildings)||[], enemyS=(view.enemy&&view.enemy.soldiers)||[];
  const ownMil=buildings.filter(b=>b.owner===view.me&&b.military&&b.type!=='hq');
  const d2=(a,b)=>(a.x-b.x)**2+(a.y-b.y)**2;
  const add=(c,t)=>{if(c&&!pending(t))plan.push(t)};
  const plan=[];

  // First bottleneck: stockpiles. Four configured slots let carriers clear production piles.
  if(!n('store')&&!pending('store')) plan.push('store');
  const stores=town.filter(b=>b.type==='store'&&b.built);
  if(!memory.storeSet) {
    for(const b of stores) for(let k=0;k<4;k++) out.push(['storeSlot',{b:b.id,k,it:['plank','stone','log','grain'][k]}]);
    if(stores.length)memory.storeSet=true;
  }

  // Housing comes early and repeatedly: each completed house supplies beds and recruits settlers.
  const houseCount=n('house')+n('house2')+n('house3');
  if(houseCount<3&&!pending('house')&&(E.population||0)>=(E.beds||0)-2) plan.push('house');

  // Simple but sustainable production. Do not overbuild food chains before workers/carriers exist.
  add(n('wood')<1,'wood'); add(n('quarry')<1,'quarry'); add(n('saw')<1,'saw');
  add(n('wood')<2,'wood'); add(n('forest')<1,'forest');
  add(n('fisher')<1,'fisher'); add(n('waterhut')<1,'waterhut');
  add(n('farm')<1,'farm'); add(n('mill')<1,'mill'); add(n('bakery')<1,'bakery');
  add(n('wood')<3,'wood'); add(n('quarry')<2,'quarry'); add(n('forest')<2,'forest');
  add(n('farm')<2&&n('mill')>0,'farm'); add(n('fisher')<2&&n('waterhut')>0,'fisher');
  add(houseCount<3&&(E.population||0)>=(E.beds||0)-2,'house');

  // Mining and military chain; scout/geologist only if the tools exist.
  if(!units.some(u=>u.role==='geologist')&&E.land&&E.land.unsearched>8&&s('pick')>0&&view.t>(memory.geoAt||0)){
    out.push(['profession',{role:'geologist',d:1}]);memory.geoAt=view.t+100;
  }
  for(const g of units.filter(u=>u.role==='geologist'))if(!g.busy&&!g.moving&&(E.unsearched||[]).length){
    const arr=E.unsearched, target=arr[(Math.floor(view.t/25)+g.id)%arr.length];
    out.push(['sendUnit',{u:g.id,tx:target.x,ty:target.y}]);
  }
  add(hasOre('coal')&&n('coalmine')<1,'coalmine');
  add(hasOre('ironore')&&n('ironmine')<1,'ironmine');
  add(n('coalmine')&&n('ironmine')&&n('smelter')<1,'smelter');
  add(n('smelter')&&n('smith')<1,'smith');
  add(n('smelter')&&n('weaponsmith')<1,'weaponsmith');
  add(n('weaponsmith')&&n('barracks')<1,'barracks');
  add(n('barracks')&&n('guard')<2,'guard');
  add(n('guard')&&n('tower')<1,'tower');

  // Armament: actual kit counters are sword>spear, spear>bow, bow>sword.
  if(!memory.army){
    out.push(['armyTarget',{kind:'sword',set:12}],['armyTarget',{kind:'spear',set:12}],
      ['armyTarget',{kind:'bow',set:16}],['armyReserve',{set:2}],['armyList',{on:true}]);
    memory.army=true;
  }

  // Ask for placements for the next priorities, and don't leave multiple unfinished sites.
  const ask=[...new Set(plan.slice(0,5))]; if(ask.length)out.push(['ask',{spots:ask}]);
  if(sites<1&&(s('plank')>=2||plan[0]==='store')){
    for(const t of plan){
      const l=spots[t]; if(l&&l.length){out.push(['place',{type:t,x:l[0].x,y:l[0].y}]);break;}
    }
  }

  // Man military buildings before leaving troops in the field.
  const empty=ownMil.filter(b=>b.built&&!(b.troops||[]).length);
  if(empty.length&&memory.prio!==empty[0].id){
    out.push(['priority',{b:empty[0].id,on:true}]);memory.prio=empty[0].id;
  }
  // Attack enemy military only with a meaningful group; attack-move if no building is visible.
  const targets=enemyB.filter(b=>b.military).sort((a,b)=>(a.manned?1:0)-(b.manned?1:0));
  const force=free.slice(0,Math.max(0,free.length-2));
  if(force.length>=7&&targets.length){
    out.push(['attack',{ids:force.map(x=>x.id),b:targets[0].id}]);
    if(view.t-(memory.attackNote||-999)>120){out.push(['note',{text:'Committed '+force.length+' field troops to enemy military.'}]);memory.attackNote=view.t;}
  }else if(force.length>=7&&enemyS.length){
    const target=enemyS.slice().sort((a,b)=>d2(a,force[0])-d2(b,force[0]))[0];
    out.push(['march',{ids:force.map(x=>x.id),tx:Math.floor(target.x),ty:Math.floor(target.y),form:'wedge',am:true,loose:true}]);
  }
  return out.slice(0,50);
}
