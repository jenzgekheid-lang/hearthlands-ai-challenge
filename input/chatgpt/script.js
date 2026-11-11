// ChatGPT GPT-6 — Hearthlands AI challenge (game version 194, kit read 11 Nov 2026)
// Economy-first: grow reliable timber, stone and food; establish iron/coal and tools/weapons;
// keep military buildings staffed, then commit a concentrated army against exposed enemy positions.
// All decisions use only this player's current view and remembered intentions.
function think(view) {
  const E = view.economy;
  if (!E || view.over) return [];
  const out = [];
  const town = E.town || [], stock = E.stock || {}, units = E.units || [], buildings = view.buildings || [];
  const enemyBuildings = (view.enemy && view.enemy.buildings) || [], enemySoldiers = (view.enemy && view.enemy.soldiers) || [];
  const n = type => town.filter(b => b.type === type).length, s = item => stock[item] || 0;
  const hasOre = item => (E.ore || []).some(o => o.ore === item);
  const siteCount = town.filter(b => !b.built).length, pending = type => town.some(b => b.type === type && !b.built);
  const ownMil = buildings.filter(b => b.military && b.type !== 'hq' && b.owner === view.me);
  const emptyMil = ownMil.filter(b => b.built && !(b.troops || []).length);
  const soldiers = view.soldiers || [], freeSoldiers = soldiers.filter(u => !u.order && !u.defends);
  const d2 = (a,b) => (a.x-b.x)*(a.x-b.x)+(a.y-b.y)*(a.y-b.y);
  const note = text => out.push(['note',{text:String(text).slice(0,200)}]);

  const housingNeeded = (E.population || 0) >= Math.max(1,(E.beds || 0)-3) &&
    !town.some(b => /^house/.test(b.type) && !b.built && (b.coming || 0) > 0);
  const wants = [], add = (condition,type) => { if(condition && !pending(type)) wants.push(type); };

  // Core production, then food and housing.
  add(n('wood') < 1,'wood'); add(n('quarry') < 1,'quarry'); add(n('saw') < 1,'saw');
  add(n('wood') < 2,'wood'); add(n('forest') < 1,'forest');
  add(n('fisher') < 1,'fisher'); add(n('waterhut') < 1,'waterhut');
  add(n('farm') < 1,'farm'); add(n('mill') < 1,'mill'); add(n('bakery') < 1,'bakery');
  add(n('quarry') < 2,'quarry'); add(n('wood') < 3,'wood'); add(n('forest') < 2,'forest');
  add(n('farm') < 2 && n('mill') > 0,'farm'); add(n('fisher') < 2 && n('waterhut') > 0,'fisher');
  add(housingNeeded && n('house') + n('house2') + n('house3') < 4,'house');

  // Explore and unlock metal production.
  const geos = units.filter(u => u.role === 'geologist');
  if (!geos.length && E.land && E.land.unsearched > 8 && s('pick') > 0 && view.t > (memory.geoCooldown || 0)) {
    out.push(['profession',{role:'geologist',d:1}]); memory.geoCooldown = view.t + 90;
  }
  for (const g of geos) if (!g.busy && !g.moving && (E.unsearched || []).length) {
    const spots = E.unsearched, target = spots[(Math.floor(view.t/20)+g.id) % spots.length];
    out.push(['sendUnit',{u:g.id,tx:target.x,ty:target.y}]);
  }
  add(hasOre('coal') && n('coalmine') < 1,'coalmine');
  add(hasOre('ironore') && n('ironmine') < 1,'ironmine');
  add(n('coalmine') > 0 && n('ironmine') > 0 && n('smelter') < 1,'smelter');
  add(n('smelter') > 0 && n('smith') < 1,'smith');
  add(n('smelter') > 0 && n('weaponsmith') < 1,'weaponsmith');
  add(n('weaponsmith') > 0 && n('barracks') < 1,'barracks');
  add(n('coalmine') > 0 && n('ironmine') > 0 && n('smelter') > 0 && n('goldmine') < 1 && hasOre('goldore'),'goldmine');
  add(n('goldmine') > 0 && n('goldsmelter') < 1,'goldsmelter');
  add(n('coalmine') > 0 && n('smelter') > 0 && n('weaponsmith') > 0 && n('barracks') > 0 && n('guard') < 2,'guard');
  add(n('guard') >= 1 && n('barracks') > 0 && n('tower') < 1,'tower');
  add(n('tower') > 0 && n('castle') < 1 && (E.population || 0) > 35,'castle');
  add(n('wood') < 4 && n('saw') > 0,'wood'); add(n('forest') < 3 && n('wood') >= 2,'forest');
  add(n('quarry') < 3 && n('wood') >= 2,'quarry');

  if (!memory.armyConfigured) {
    out.push(['armyTarget',{kind:'spear',set:12}],['armyTarget',{kind:'bow',set:12}],
      ['armyTarget',{kind:'sword',set:8}],['armyReserve',{set:3}],['armyList',{on:true}]);
    memory.armyConfigured = true;
  }

  // Ask for valid positions; E.spots answers on a later economy turn.
  const candidates = wants.slice(0,4);
  if (n('guard') < 2 && n('barracks') > 0 && n('weaponsmith') > 0) candidates.unshift('guard');
  if (candidates.length) out.push(['ask',{spots:[...new Set(candidates)]}]);

  // Only one new construction per turn; cap the queue so carriers can finish.
  if (siteCount < 2 && s('plank') >= 2) {
    let chosen = null;
    for (const type of wants) {
      const list = E.spots && E.spots[type];
      if (list && list.length) { chosen = {type,spot:list[0]}; break; }
    }
    if (!chosen && n('barracks') > 0 && n('weaponsmith') > 0 && n('guard') < 2) {
      const list = E.spots && E.spots.guard;
      if (list && list.length) chosen = {type:'guard',spot:list[0]};
    }
    if (chosen) out.push(['place',{type:chosen.type,x:chosen.spot.x,y:chosen.spot.y}]);
  }

  // Prioritize recruitment into empty military buildings.
  for (const b of ownMil) if (b.built && !(b.troops || []).length && memory.prioMil !== b.id) {
    out.push(['priority',{b:b.id,on:true}]); memory.prioMil = b.id; break;
  }
  if (emptyMil.length && memory.prioMil !== emptyMil[0].id) {
    out.push(['priority',{b:emptyMil[0].id,on:true}]); memory.prioMil = emptyMil[0].id;
  }

  // Launch a substantial force, preferring visible unmanned enemy military buildings.
  const attackable = enemyBuildings.filter(b => b.military).sort((a,b) => {
    const am = a.manned ? 1 : 0, bm = b.manned ? 1 : 0;
    if (am !== bm) return am-bm;
    return (a.id||0)-(b.id||0);
  });
  const reserve = Math.min(3,freeSoldiers.length), field = freeSoldiers.slice(0,Math.max(0,freeSoldiers.length-reserve));
  if (field.length >= 8 && attackable.length) {
    const target = attackable[0];
    out.push(['attack',{ids:field.map(u=>u.id),b:target.id}]); memory.lastAttack = view.t;
    note('Committed '+field.length+' available troops against '+(target.type||'enemy military')+'; reserve '+reserve+'.');
  } else if (field.length >= 8 && enemySoldiers.length) {
    const foe = enemySoldiers.slice().sort((a,b)=>d2(a,field[0])-d2(b,field[0]))[0];
    out.push(['march',{ids:field.map(u=>u.id),tx:Math.floor(foe.x),ty:Math.floor(foe.y),form:'wedge',am:true,loose:true}]);
    memory.lastAttack = view.t;
  }

  // Scout farther after establishing a residence.
  if (n('look') < 1 && n('house') > 0 && s('plank') >= 2 && siteCount < 2) {
    const l = E.spots && E.spots.look;
    if (l && l.length) out.push(['place',{type:'look',x:l[0].x,y:l[0].y}]);
    else out.push(['ask',{spots:['look']}]);
  }
  return out.slice(0,50);
}
