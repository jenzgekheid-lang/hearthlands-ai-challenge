// Game version: 189
// AI: Claude. Model: unknown (not stated in this file).
// Plan: stone and wood first (quarry, wood, sawmill, the first guard post where the map shows rocks, trees or mountains),
// then the iron chain (geologist, coal and iron mines, smelter, toolsmith, weaponsmith, barracks), fish and food, soldiers.
// From minute 15 towers, lookouts to find the enemy, waves against visible military buildings, defence of our buildings.
// Round 6 changes: 4 of 8 games stopped in the first minutes. The 18 start stone went into a house2 and guard posts before
// any quarry stood, and in one game the trees in reach ran out. Now house2 waits for stone income, 3 stone are held for the
// first quarry, and expansion counts rocks, trees and mountains on the map (weighted up when stone or wood stop).
// Picks are held for the coal and iron mines and the geologist; houses come only when carriers run short.

// Costs (planks, stone) from src/data/buildings.js. The script can't read files, so they are copied here.
const COST = {
  wood: {plank: 2, stone: 2}, forest: {plank: 3, stone: 1}, saw: {plank: 3, stone: 4}, quarry: {plank: 2, stone: 3},
  fisher: {plank: 3, stone: 2}, waterhut: {plank: 3, stone: 4}, farm: {plank: 6, stone: 6}, mill: {plank: 3, stone: 3},
  bakery: {plank: 4, stone: 5}, pigfarm: {plank: 6, stone: 6}, butcher: {plank: 4, stone: 4},
  coalmine: {plank: 4, stone: 1}, ironmine: {plank: 4, stone: 1}, goldmine: {plank: 5, stone: 1}, stonemine: {plank: 5},
  smelter: {plank: 4, stone: 6}, goldsmelter: {plank: 4, stone: 6}, smith: {plank: 3, stone: 5},
  weaponsmith: {plank: 5, stone: 7}, barracks: {plank: 4, stone: 5},
  house: {plank: 3, stone: 3}, house2: {plank: 5, stone: 6},
  guard: {plank: 2, stone: 3}, tower: {plank: 5, stone: 5}, castle: {plank: 8, stone: 12},
  look: {plank: 2, stone: 4}
};
const MIL = ['guard', 'tower', 'castle'];
const RADIUS = {guard: 14, tower: 20, castle: 26};   // territory a military building adds (tiles)
const GARRISON = {guard: 3, tower: 6, castle: 10};   // slots; a manned building holds about 60% of them
// the tool each workplace takes from stock (buildings.js: tool); a worker is a carrier who takes that tool
const TOOL = {wood: 'axe', butcher: 'axe', forest: 'shovel', saw: 'saw', fisher: 'rod', farm: 'scythe', quarry: 'pick',
  coalmine: 'pick', ironmine: 'pick', stonemine: 'pick', goldmine: 'pick', smelter: 'hammer', smith: 'hammer',
  goldsmelter: 'hammer', weaponsmith: 'hammer'};
// a spot must have at least this much in reach (spot field n: trees, rocks, fish water, free grass, ore, new land)
const MIN_N = {wood: 3, forest: 3, farm: 6, quarry: 4, fisher: 3, coalmine: 2, ironmine: 2, goldmine: 2, stonemine: 2,
  guard: 8, tower: 8, castle: 8};
// the same kind of building stands at least this far apart (trees, rocks, fish and ore run out around one building)
const SPREAD = {wood: 4, forest: 3, quarry: 4, fisher: 5, coalmine: 6, ironmine: 6, stonemine: 5, goldmine: 6};
// a workplace is placed near the middle of these kinds (its inputs, or what it feeds)
const ANCHOR = {forest: ['wood'], saw: ['wood'], farm: ['mill'], mill: ['farm'], bakery: ['mill', 'waterhut'],
  waterhut: ['bakery', 'pigfarm'], pigfarm: ['farm', 'waterhut'], butcher: ['pigfarm'],
  smelter: ['coalmine', 'ironmine'], smith: ['smelter'], weaponsmith: ['smelter'], barracks: ['weaponsmith'],
  coalmine: ['smelter'], ironmine: ['smelter'], goldmine: ['goldsmelter', 'coalmine'], goldsmelter: ['goldmine', 'coalmine']};
const PRODUCERS = ['wood', 'forest', 'quarry', 'saw', 'fisher', 'waterhut', 'farm', 'mill', 'bakery', 'pigfarm', 'butcher',
  'coalmine', 'ironmine', 'stonemine', 'goldmine', 'smelter', 'smith', 'goldsmelter', 'weaponsmith'];
const JAM_OK = ['guard', 'tower', 'castle', 'house', 'house2', 'look', 'barracks'];
const WORKER_NO_TOOL = ['waterhut', 'mill', 'bakery', 'pigfarm'];
const STONE_SRC = ['quarry', 'stonemine'];

function think(view){
  const M = (typeof memory === 'object' && memory) || {};
  const out = [];
  if (view.economy) economy(view, out, M);
  army(view, out, M);
  return out.slice(0, 50);
}

// at most five notes a turn, 200 characters each
function note(out, text){
  if (out.filter(c => c[0] === 'note').length < 5) out.push(['note', {text: String(text).slice(0, 200)}]);
}

function freeSoldiers(view){
  return (view.soldiers || []).filter(s => !s.order && !s.defends && !s.fighting);
}

// how many idle soldiers a wave needs: the enemy's visible soldiers plus a guess for its manned buildings
function needOf(view){
  const en = view.enemy || {};
  let est = (en.soldiers || []).length;
  for (const b of en.buildings || []) {
    if (b.military && b.manned) est += (GARRISON[b.type] || 3) * 0.6;
    if (b.type === 'hq') est += 3;
  }
  let need = Math.ceil(est * 1.3) + 4;
  if (typeof view.gold === 'number' && view.gold < 0.9) need = Math.ceil(need * 1.4);   // weaker outside our land
  return Math.min(40, Math.max(6, need));
}

// the game log since the last turn: last time each good was made, deliveries, first sight, refusals
function readLog(E, M){
  if (!Array.isArray(E.log)) return;
  M.prod = M.prod || {};
  for (const ev of E.log) {
    const t = ev.t || 0;
    if (ev.what === 'econ' && ev.b === 0) {
      M.prod[ev.s] = Math.max(M.prod[ev.s] || 0, t);
      M.lastProd = Math.max(M.lastProd || 0, t);
    }
    else if (ev.what === 'deliver') M.lastDel = Math.max(M.lastDel || 0, t);
    else if (ev.what === 'seen' && M.seenT === undefined) M.seenT = t;
    else if (ev.what === 'capture') M.captures = (M.captures || 0) + 1;
    else if (ev.what === 'order' && ev.a === 0) {
      const why = String(ev.s || '').slice(0, 70);
      M.refuse = M.refuse || [];
      if (why && !M.refuse.includes(why)) { M.refuse.push(why); if (M.refuse.length > 3) M.refuse.shift(); }
    }
  }
}

// the point a workplace is placed near: the middle of its partners, or the HQ; none for military buildings
function anchorOf(ty, byType, hq){
  if (MIL.includes(ty)) return null;
  const kinds = ANCHOR[ty];
  if (kinds) {
    const l = kinds.reduce((a, k) => a.concat(byType[k] || []), []);
    if (l.length) return {x: l.reduce((a, b) => a + b.x, 0) / l.length, y: l.reduce((a, b) => a + b.y, 0) / l.length};
  }
  return hq;
}

// best spot from the last answer: enough in reach, apart from its own kind, close to its partners
// (far = the spot furthest from the anchor, for lookouts)
function pickSpot(ty, list, anchor, town, far){
  if (!list || !list.length) return null;
  const minN = MIN_N[ty] || 0, R = SPREAD[ty] || 0;
  const good = list.filter(s => s.n === undefined || s.n >= minN);
  if (!good.length) return null;
  const same = R ? town.filter(b => b.type === ty) : [];
  const apart = good.filter(s => !same.some(b => Math.hypot(s.x - b.x, s.y - b.y) < R));
  const pool = apart.length ? apart : good;
  let best = null, bs = -Infinity;
  for (const s of pool) {
    const dist = anchor ? Math.hypot(s.x - anchor.x, s.y - anchor.y) : 0;
    const sc = far ? dist : (s.n === undefined ? 1 : s.n) - 0.2 * dist;
    if (sc > bs) { bs = sc; best = s; }
  }
  return best;
}

// what a military building at (sx, sy) with radius R would add: tiles nobody owns, and what they hold
function landScore(map, sx, sy, R){
  const r = {land: 0, rock: 0, tree: 0, mount: 0, water: 0};
  const x0 = Math.max(0, sx - R), x1 = Math.min(map.w - 1, sx + R);
  const y0 = Math.max(0, sy - R), y1 = Math.min(map.h - 1, sy + R);
  for (let y = y0; y <= y1; y++) {
    for (let x = x0; x <= x1; x++) {
      if ((x - sx) * (x - sx) + (y - sy) * (y - sy) > R * R) continue;
      const i = y * map.w + x;
      if (!map.known[i] || map.owner[i] !== 0) continue;
      r.land++;
      if (map.stone[i]) r.rock++;
      if (map.tree[i]) r.tree++;
      if (map.ter[i] === 2) r.mount++;
      if (map.ter[i] === 1 && map.fish[i]) r.water++;
    }
  }
  return r;
}

// the expansion spot: most new land with what we need (weights w), a little closer to the HQ
function bestExpansion(list, view, ty, w, hq){
  if (!list || !list.length) return null;
  const map = view.map;
  const R = RADIUS[ty] || 14;
  const useMap = !!(map && map.w && map.h && map.known && map.owner && map.stone && map.tree && map.ter && map.fish);
  let best = null, bs = -Infinity;
  if (useMap) {
    for (const s of list) {
      if (s.n !== undefined && s.n < 8) continue;
      const r = landScore(map, s.x, s.y, R);
      if (r.land < 10) continue;
      let sc = r.land * w.land + r.rock * w.rock + r.tree * w.tree + r.mount * w.mount + r.water * w.water;
      if (hq) sc -= 0.15 * Math.hypot(s.x - hq.x, s.y - hq.y);
      if (sc > bs) { bs = sc; best = s; }
    }
  }
  if (best) return best;
  // no map (or no spot with enough new land on it): the engine's count of new land
  for (const s of list) {
    if (s.n !== undefined && s.n < 8) continue;
    const sc = (s.n || 0) - (hq ? 0.15 * Math.hypot(s.x - hq.x, s.y - hq.y) : 0);
    if (sc > bs) { bs = sc; best = s; }
  }
  return best;
}

function economy(view, out, M){
  const E = view.economy, t = view.t;
  const town = E.town || [], stock = E.stock || {}, land = E.land || {};
  const people = E.people || {}, units = E.units || [], unsearched = E.unsearched || [];
  const spots = E.spots || {};
  const carriers = people.carrier || 0;
  const st = it => stock[it] || 0;
  const count = {}, byType = {}, builtIds = new Set(), demand = {}, owed = {}, spent = {};
  let sites = 0, producersBuilt = 0, unstaffedNoTool = 0, hq = null;
  for (const b of town) {
    count[b.type] = (count[b.type] || 0) + 1;
    (byType[b.type] = byType[b.type] || []).push(b);
    if (b.type === 'hq') hq = {x: b.x, y: b.y};
    if (b.built) {
      builtIds.add(b.id);
      if (PRODUCERS.includes(b.type)) producersBuilt++;
      if (WORKER_NO_TOOL.includes(b.type) && !b.worker) unstaffedNoTool++;
    } else {
      sites++;
      for (const k of Object.keys(COST[b.type] || {})) owed[k] = (owed[k] || 0) + COST[b.type][k];
    }
    if (TOOL[b.type] && !b.worker) demand[TOOL[b.type]] = (demand[TOOL[b.type]] || 0) + 1;   // waiting for a tool
  }
  const has = ty => count[ty] || 0;                       // built or being built
  const built = ty => (byType[ty] || []).filter(b => b.built).length;
  if (M.geoT > t) demand.pick = (demand.pick || 0) + 1;   // a geologist is on his way to take a pick
  const freeTool = tool => st(tool) - (demand[tool] || 0);
  const avail = k => st(k) - (owed[k] || 0) - (spent[k] || 0);
  const commit = (ty, sign) => { for (const k of Object.keys(COST[ty] || {})) spent[k] = (spent[k] || 0) + sign * COST[ty][k]; };

  readLog(E, M);
  const prodT = it => (M.prod && M.prod[it]) || 0;
  const lastFlow = Math.max(M.lastProd || 0, M.lastDel || 0);
  const jam = Array.isArray(E.log) && t > 420 && producersBuilt >= 2 && t - lastFlow > 240;
  // starvation: a good that no building makes any more (no rocks or trees in reach, no quarry or stone mine)
  const stoneStarved = t > 200 && t - prodT('stone') > 240;
  const woodStarved = t > 200 && t - Math.max(prodT('plank'), prodT('log')) > 240;
  const stoneSrc = has('quarry') + has('stonemine') > 0;
  const stoneHold = stoneSrc ? 0 : 3;                     // keep 3 stone for the first quarry until one is placed

  const signs = k => (E.ore || []).some(o => o.ore === k);
  const coalS = signs('coal'), ironS = signs('ironore'), goldS = signs('goldore'), stoneS = signs('stone');
  const geos = units.filter(u => u.role === 'geologist');
  const geoWanted = (land.unsearched || 0) > (geos.length ? 60 : 20) && geos.length < (t >= 300 ? 2 : 1);
  // picks held back for the coal and iron mines (and the geologist) until the smith makes more
  const smithUp = built('smith') > 0;
  const missingChain = smithUp ? 0 : (((coalS && has('coalmine') < 1) ? 1 : 0) + ((ironS && has('ironmine') < 1) ? 1 : 0));
  const missingGeo = ((land.unsearched || 0) > 20 && geos.length < 1) ? 1 : 0;
  const pickHold = missingChain + missingGeo;
  const toolOK = ty => {
    const tool = TOOL[ty];
    if (!tool) return true;
    const free = freeTool(tool);
    if (free < 1) return false;
    if (tool === 'pick' && has(ty) >= 1) return free - pickHold >= 1;   // the first of each kind ignores the hold
    return true;
  };
  const affordable = ty => Object.keys(COST[ty] || {}).every(k => {
    const hold = (k === 'stone' && !STONE_SRC.includes(ty) && !MIL.includes(ty)) ? stoneHold : 0;
    return avail(k) - hold >= COST[ty][k];
  });

  // geologist (one pick): searches the mountain for ore signs
  if (geoWanted && freeTool('pick') >= 1 && !(M.geoT > t)) {
    out.push(['profession', {role: 'geologist', d: 1}]);
    M.geoT = t + 60;
  }
  geos.forEach((g, i) => {
    if (!g.busy && unsearched.length) {
      const s = unsearched[(Math.floor(t / 2) + 7 * i) % unsearched.length];
      out.push(['sendUnit', {u: g.id, tx: s.x, ty: s.y}]);
    }
  });

  // wanted counts by now
  const rocks = land.rocks || 0;
  const wts = {land: 1, rock: stoneStarved ? 10 : 3, tree: woodStarved ? 6 : 1,
    mount: (land.mountain || 0) < 30 ? 3 : 1, water: 1};
  const popFull = (E.population || 0) >= (E.beds || 0) - 3;
  const houseCount = has('house') + has('house2') + has('house3');
  const houseSite = town.some(b => !b.built && /house/.test(b.type));
  const wantHouse = t >= 300 && !stoneStarved && !houseSite && houseCount < Math.min(10, 2 + Math.floor(t / 300)) &&
    popFull && (carriers < 6 || unstaffedNoTool > 0);
  const houseTys = (t >= 600 && st('stone') >= 15 && st('plank') >= 10 && !stoneStarved) ? ['house2', 'house'] : ['house'];
  const wCoal = coalS ? (built('smelter') > 0 ? (t >= 900 ? 3 : 2) : 1) : 0;
  const wIron = ironS ? (built('smelter') > 0 ? (t >= 1200 ? 3 : 2) : 1) : 0;
  const wSmelter = (built('coalmine') > 0 && built('ironmine') > 0) ? ((st('ironore') >= 8 && t >= 1200) ? 2 : 1) : 0;
  const wSmith = built('smelter') > 0 ? 1 : 0;
  const wWeapon = built('smelter') > 0 ? 1 : 0;
  const wBarr = built('weaponsmith') > 0 ? (t >= 1500 ? 2 : 1) : 0;
  const wQuarry = stoneStarved ? 1 : (t >= 600 ? 2 : 1);
  const wStone = stoneS ? ((stoneStarved || has('quarry') === 0) ? 1 : ((st('stone') < 8 && t >= 900) ? 1 : 0)) : 0;
  const wWood = woodStarved ? 2 : (t >= 600 ? 3 : 2);
  const wForest = Math.min(has('wood'), 3);
  const wSaw = (st('log') >= 12 && t >= 300) ? 2 : 1;
  const wFisher = (has('coalmine') + has('ironmine') >= 2 || t >= 900) ? 2 : 1;
  const wFarm = (!stoneStarved && t >= 300 && built('fisher') > 0) ? (has('mill') > 0 ? 2 : 1) : 0;
  const wWater = t >= 900 ? 2 : 1;
  const wPig = (built('farm') > 0 && built('waterhut') > 0 && t >= 900 && !stoneStarved) ? 1 : 0;
  const wButcher = built('pigfarm') > 0 ? 1 : 0;
  const wTower = (built('barracks') > 0 && t >= 900) ? (t >= 1800 ? 4 : 2) : 0;
  const wGold = (goldS && built('coalmine') > 0 && smithUp && t >= 1200) ? 1 : 0;
  const wGoldSm = (built('goldmine') > 0 && built('coalmine') > 0 && t >= 1200) ? 1 : 0;
  const enemySeen = M.seenT !== undefined || ((view.enemy && view.enemy.buildings) || []).length > 0;
  const wLook = (t >= 900 && !enemySeen) ? (t >= 1500 ? 2 : 1) : 0;

  // land: guard posts (towers, castles later) where the map shows the most new land with rocks, trees, mountains
  const milBuilt = town.filter(b => MIL.includes(b.type) && b.built).length;
  const milSite = town.some(b => MIL.includes(b.type) && !b.built);
  const builtIds2 = builtIds;
  const emptyMil = (view.buildings || []).filter(b => MIL.includes(b.type) && builtIds2.has(b.id) && !(b.troops && b.troops.length));
  const expandWanted = !milSite && emptyMil.length === 0 && milBuilt < 16 && milBuilt < 2 + Math.floor(t / 100) &&
    (freeSoldiers(view).length >= 1 || built('barracks') > 0);
  const expandTys = t >= 1200 ? ['guard', 'tower', 'castle'] : ['guard', 'tower'];

  // the plan in priority order: each entry is a list of types (the first that fits is placed)
  const plan = [];
  const P = (tys, cond) => { if (cond) plan.push(tys); };
  P(expandTys, expandWanted);
  P(['quarry'], has('quarry') < 1);
  P(['wood'], has('wood') < 1);
  P(['saw'], has('saw') < 1);
  P(['fisher'], has('fisher') < 1);
  P(['coalmine'], has('coalmine') < wCoal);
  P(['ironmine'], has('ironmine') < wIron);
  P(['smelter'], has('smelter') < wSmelter);
  P(['smith'], has('smith') < wSmith);
  P(['weaponsmith'], has('weaponsmith') < wWeapon);
  P(['barracks'], has('barracks') < wBarr);
  P(['stonemine'], has('stonemine') < wStone);
  P(['wood'], has('wood') < wWood);
  P(['forest'], has('forest') < wForest);
  P(houseTys, wantHouse);
  P(['farm'], has('farm') < wFarm);
  P(['waterhut'], has('waterhut') < wWater);
  P(['mill'], has('mill') < 1 && has('farm') > 0);
  P(['bakery'], has('bakery') < 1 && has('mill') > 0 && has('waterhut') > 0);
  P(['quarry'], has('quarry') < wQuarry);
  P(['saw'], has('saw') < wSaw);
  P(['fisher'], has('fisher') < wFisher);
  P(['coalmine'], has('coalmine') < wCoal + 1 && smithUp && has('coalmine') < 4 && built('smelter') > 0 && t >= 900);
  P(['pigfarm'], has('pigfarm') < wPig);
  P(['butcher'], has('butcher') < wButcher);
  P(['tower'], has('tower') < wTower);
  P(['goldmine'], has('goldmine') < wGold);
  P(['goldsmelter'], has('goldsmelter') < wGoldSm);
  P(['look'], has('look') < wLook);

  // ask for places; the answers come with the next view, so this turn places from last turn's answers
  const askTypes = ['guard'];
  for (const tys of plan) for (const ty of tys) if (!askTypes.includes(ty)) askTypes.push(ty);
  out.push(['ask', {spots: askTypes}]);

  // at most two new sites a turn and a cap on sites under way; the first item that can't be paid keeps its cost
  const used = new Set(), placedNow = [], skipped = [];
  let saving = false;
  const cap = t < 600 ? 4 : 6;
  for (const tys of plan) {
    if (placedNow.length >= 2) break;
    if (sites + placedNow.length >= cap) { skipped.push('sites at cap'); break; }
    let why = null;
    for (const ty of tys) {
      if (used.has(ty)) { why = why || 'done'; continue; }
      if (jam && !JAM_OK.includes(ty)) { why = why || 'jam'; continue; }
      if (!toolOK(ty)) { why = why || 'no free ' + TOOL[ty]; continue; }
      let s;
      if (MIL.includes(ty)) s = bestExpansion(spots[ty], view, ty, wts, hq);
      else if (ty === 'look') s = pickSpot(ty, spots[ty], hq, town, true);
      else s = pickSpot(ty, spots[ty], anchorOf(ty, byType, hq), town, false);
      if (!s) { why = why || 'no spot'; continue; }
      if (!affordable(ty)) {
        why = 'materials';
        if (!saving) { saving = true; commit(ty, 1); }
        break;
      }
      out.push(['place', {type: ty, x: s.x, y: s.y}]);
      used.add(ty);
      placedNow.push(ty + ' ' + s.x + ',' + s.y);
      commit(ty, 1);
      if (TOOL[ty]) demand[TOOL[ty]] = (demand[TOOL[ty]] || 0) + 1;
      why = null;
      break;
    }
    if (why) skipped.push(tys[0] + ': ' + why);
  }
  if (placedNow.length && t >= (M.plT || 0)) {
    M.plT = t + 60;
    note(out, `placed ${placedNow.join(', ')} at ${Math.floor(t)} s`);
  }

  // notes: once a minute what the decisions were based on
  if (t >= (M.stT || 0)) {
    M.stT = t + 60;
    const ft = k => freeTool(k);
    note(out, `${Math.floor(t / 60)} min: plank ${st('plank')} stone ${st('stone')} log ${st('log')} coal ${st('coal')} ` +
      `iron ${st('iron')} ironore ${st('ironore')} | free: axe ${ft('axe')} pick ${ft('pick')} hammer ${ft('hammer')} ` +
      `saw ${ft('saw')} shovel ${ft('shovel')} scythe ${ft('scythe')} rod ${ft('rod')} | pick hold ${pickHold}`);
    const ok = (l, m) => (l || []).filter(s => (s.n === undefined ? 1 : s.n) >= m).length;
    note(out, `built: quarry ${built('quarry')} wood ${built('wood')} coal ${built('coalmine')} iron ${built('ironmine')} ` +
      `smelter ${built('smelter')} smith ${built('smith')} weapons ${built('weaponsmith')} barracks ${built('barracks')} | ` +
      `houses ${houseCount} carriers ${carriers} beds ${E.beds || 0} pop ${E.population || 0} | guard spots ${ok(spots.guard, 8)} ` +
      `quarry spots ${ok(spots.quarry, 4)} | sites ${sites}`);
    if (skipped.length) note(out, `waiting: ${skipped.slice(0, 7).join('; ')}`);
  }
  if ((stoneStarved || woodStarved) && t >= (M.stvT || 0)) {
    M.stvT = t + 120;
    note(out, `starved: stone ${stoneStarved ? 'yes' : 'no'} (last made ${Math.floor(prodT('stone'))} s), wood ` +
      `${woodStarved ? 'yes' : 'no'} (planks ${Math.floor(prodT('plank'))} s); expansion weights rock ${wts.rock}, tree ${wts.tree}`);
  }
  if (jam && t >= (M.jamT || 0)) {
    M.jamT = t + 60;
    note(out, `jam: nothing made or delivered for ${Math.floor(t - lastFlow)} s; refused: ${(M.refuse || []).join(' | ')}`);
  }
}

function army(view, out, M){
  const t = view.t, E = view.economy || {};
  const A = E.army || {};
  const mine = view.soldiers || [];
  const freeList = freeSoldiers(view);
  const freeIds = freeList.map(s => s.id);
  const bld = view.buildings || [];
  const mil = bld.filter(b => MIL.includes(b.type));
  const hqB = bld.filter(b => b.type === 'hq');
  const built = ty => (E.town || []).some(b => b.type === ty && b.built);
  const need = needOf(view);
  const en = view.enemy || {};
  const foes = en.soldiers || [], eb = en.buildings || [];
  M.sIn = M.sIn || {};
  M.pri = M.pri || {};
  M.bad = M.bad || {};

  // 1) every empty military building gets one free soldier (a border grows once someone is inside)
  let sent = 0;
  for (const b of mil) {
    if (sent >= 2 || freeIds.length === 0) break;
    if ((b.troops && b.troops.length) || (M.sIn[b.id] || 0) > t) continue;
    M.sIn[b.id] = t + 15;
    out.push(['sendIn', {ids: [freeIds.shift()], b: b.id}]);
    sent++;
  }
  // 2) late game: thin garrisons get a second soldier while free soldiers are spare
  if (t >= 1200 && freeIds.length > 5) {
    const thin = mil.find(b => (b.troops || []).length < 2 && (M.sIn[b.id] || 0) <= t);
    if (thin) { M.sIn[thin.id] = t + 15; out.push(['sendIn', {ids: [freeIds.shift()], b: thin.id}]); }
  }
  // 3) the chain's workplaces first for goods and workers (once each)
  for (const b of E.town || []) {
    if (b.built && !M.pri[b.id] && ['smelter', 'weaponsmith', 'barracks'].includes(b.type)) {
      M.pri[b.id] = true;
      out.push(['priority', {b: b.id, on: true}]);
      break;
    }
  }
  // 4) soldier targets per kind (spears beat swords, swords beat bows, bows beat spears) and the reserve in the field
  if (A.target && built('barracks') && t >= (M.atT || 0)) {
    M.atT = t + 4;
    const n = {sword: 0, spear: 0, bow: 0};
    for (const f of foes) if (n[f.kind] !== undefined) n[f.kind]++;
    const w = {sword: 1 + n.bow, spear: 1 + n.sword, bow: 1 + n.spear};
    const sum = w.sword + w.spear + w.bow;
    const total = Math.min(80, 20 + Math.floor(t / 40));
    for (const k of ['sword', 'spear', 'bow']) {
      const d = Math.max(-2, Math.min(2, Math.round(total * w[k] / sum) - (A.target[k] || 0)));
      if (d) out.push(['armyTarget', {kind: k, d}]);
    }
  }
  if (built('barracks') && t >= (M.resT || 0)) {
    M.resT = t + 20;
    if (A.reserve !== need + 2) out.push(['armyReserve', {set: need + 2}]);
  }
  if (t >= (M.arT || 0)) {
    M.arT = t + 60;
    const empty = mil.filter(b => !(b.troops && b.troops.length)).length;
    note(out, `army: soldiers ${mine.length}, free ${freeList.length}, military ${mil.length} (empty ${empty}), ` +
      `need ${need}, enemy soldiers ${foes.length}, enemy buildings ${eb.length}`);
  }

  // 5) defence: enemy soldiers near our military buildings or HQ; the free soldiers go out to meet them
  for (const r of view.refused || []) {
    if (r.order === 'attack' && r.args && r.args.b !== undefined) M.bad[r.args.b] = t + 60;
  }
  let threat = null;
  for (const f of foes) for (const b of mil.concat(hqB)) {
    const d = Math.hypot(f.x - b.x, f.y - b.y);
    if (d < 14 && (!threat || d < threat.d)) threat = {f, d};
  }
  if (threat && freeIds.length >= 2) {
    out.push(['march', {ids: freeIds.slice(), tx: Math.floor(threat.f.x), ty: Math.floor(threat.f.y), form: 'block', am: true}]);
    note(out, `defence: ${freeIds.length} soldiers march on an enemy soldier ${Math.round(threat.d)} tiles from our buildings`);
    return;
  }

  // 6) attack: a wave of free soldiers at a visible enemy military building (empty ones first), the HQ last
  if (freeIds.length < need) return;
  const open = b => !(M.bad[b.id] > t);
  let cands = eb.filter(b => b.military && open(b));
  if (!cands.length) cands = eb.filter(b => b.type === 'hq' && open(b));
  const ids = freeIds.slice();
  const pts = freeList.filter(s => ids.includes(s.id));
  const cx = pts.reduce((a, s) => a + s.x, 0) / pts.length;
  const cy = pts.reduce((a, s) => a + s.y, 0) / pts.length;
  if (cands.length) {
    let best = cands[0], bs = Infinity;
    for (const b of cands) {
      const p = b.door || b;
      const sc = Math.hypot(p.x - cx, p.y - cy) + (b.manned ? 15 : 0);
      if (sc < bs) { bs = sc; best = b; }
    }
    out.push(['attack', {ids, b: best.id}]);
    note(out, `attack: ${ids.length} soldiers on ${best.type} ${best.id} (${best.manned ? 'manned' : 'empty'}), need ${need}`);
  } else if (foes.length) {
    let f = foes[0], fd = Infinity;
    for (const g of foes) {
      const d = Math.hypot(g.x - cx, g.y - cy);
      if (d < fd) { fd = d; f = g; }
    }
    out.push(['march', {ids, tx: Math.floor(f.x), ty: Math.floor(f.y), form: 'block', am: true}]);
  }
}
