// ChatGPT GPT-6 — full strategic rewrite for Hearthlands game version 204.
// People-first economy, ore/rock-aware expansion, one-swordsman border posts, active scouting and thresholded attacks.
// Adapted from measured v204 tournament evidence: the prior script's 16-soldier target could never satisfy its 18-free-soldier attack gate.
// Keep the barracks supplied: no weapon reserve; keep three idle carriers and scale the field army with the garrison count.
// Game version: 204

// Costs (planks, stone) and tools copied from kit/buildings.js (a script can't read files).
const COST = {
  wood: {plank: 2, stone: 2}, forest: {plank: 3, stone: 1}, saw: {plank: 3, stone: 4}, fisher: {plank: 3, stone: 2},
  waterhut: {plank: 3, stone: 4}, farm: {plank: 6, stone: 6}, mill: {plank: 3, stone: 3}, bakery: {plank: 4, stone: 5},
  pigfarm: {plank: 6, stone: 6}, butcher: {plank: 4, stone: 4}, coalmine: {plank: 4, stone: 1}, ironmine: {plank: 4, stone: 1},
  stonemine: {plank: 5}, goldmine: {plank: 5, stone: 1}, goldsmelter: {plank: 4, stone: 6}, smelter: {plank: 4, stone: 6},
  smith: {plank: 3, stone: 5}, quarry: {plank: 2, stone: 3}, house: {plank: 3, stone: 3}, house2: {plank: 5, stone: 6},
  house3: {plank: 10, stone: 12}, store: {plank: 2}, look: {plank: 2, stone: 4}, guard: {plank: 2, stone: 3},
  tower: {plank: 5, stone: 5}, castle: {plank: 8, stone: 12}, weaponsmith: {plank: 5, stone: 7}, barracks: {plank: 4, stone: 5}
};
const SIZE = {farm: [4, 3], house2: [5, 4], house3: [6, 5], look: [2, 2], tower: [5, 4], castle: [8, 7]};   // others 3x3
const TOOL = {wood: 'axe', butcher: 'axe', forest: 'shovel', saw: 'saw', fisher: 'rod', farm: 'scythe', quarry: 'pick',
  coalmine: 'pick', ironmine: 'pick', stonemine: 'pick', goldmine: 'pick', smelter: 'hammer', smith: 'hammer',
  goldsmelter: 'hammer', weaponsmith: 'hammer'};
const LANDR = {guard: 14, tower: 20, castle: 26};        // land a manned military building adds (tiles)
const MINNEW = {guard: 130, tower: 260, castle: 450};    // a new one must add at least so many tiles nobody owns
const MINE = {coalmine: 'coal', ironmine: 'ironore', stonemine: 'stone', goldmine: 'goldore'};
// a workplace is placed near the middle of these kinds (what it takes from or feeds)
const ANCHOR = {saw: ['wood'], smelter: ['coalmine', 'ironmine'], smith: ['smelter'], weaponsmith: ['smelter'],
  barracks: ['weaponsmith'], goldsmelter: ['goldmine'], mill: ['farm'], bakery: ['mill', 'waterhut'],
  waterhut: ['mill'], pigfarm: ['farm'], butcher: ['pigfarm']};
const NL = 11;            // map layers summed up in the grid below
const SCAN_MAX = 30000;   // canPlace calls a turn at most

let GRID = null;          // kept between turns: summed-area tables over the map
const LOCAL = {};         // stands in when the game gives no memory object

function think(view){
  const M = (typeof memory === 'object' && memory) ? memory : LOCAL;
  if (!view || view.over) return [];
  const C = {cmd: [], notes: []};
  if (view.economy && !view.armyOnly) {
    try { economy(view, C, M); } catch (e) { oops(C, M, view, 'economy', e); }
  }
  try { army(view, C, M); } catch (e) { oops(C, M, view, 'army', e); }
  return C.cmd.slice(0, 45).concat(C.notes.slice(0, 5));
}

function oops(C, M, view, part, e){
  const k = 'err_' + part;
  if ((M[k] === undefined ? -99 : M[k]) > view.t - 60) return;
  M[k] = view.t;
  C.notes.push(['note', {text: ('error in ' + part + ': ' + (e && e.message ? e.message : e)).slice(0, 200)}]);
}
function note(C, text){ if (C.notes.length < 5) C.notes.push(['note', {text: String(text).slice(0, 200)}]); }
function num(v){ return typeof v === 'number' && v === v ? v : 0; }
function isObj(v){ return !!v && typeof v === 'object' && !Array.isArray(v); }

// Summed-area tables: how much of something lies in a square around a tile, in constant time.
// Layers: 0 rocks on our land, 1 trees on our land (grown count double), 2 fish in our water, 3 our water tiles,
// 4 our free grass, 5 tiles nobody owns, 6 rocks there, 7 trees there, 8 mountain there, 9 water there, 10 enemy land.
function makeGrid(view){
  const map = view.map, w = map.w, h = map.h, me = view.me, W1 = w + 1, size = W1 * (h + 1);
  if (!GRID || GRID.size !== size) {
    GRID = {size, L: []};
    for (let k = 0; k < NL; k++) GRID.L.push(new Int32Array(size));
  }
  const G = GRID, L = G.L;
  const own = map.owner, ter = map.ter, tree = map.tree, stone = map.stone, fish = map.fish, occ = map.occupied, oreL = map.ore;
  const run = new Int32Array(NL), oreCnt = new Int32Array(16);
  let x0 = w, y0 = h, x1 = -1, y1 = -1, tiles = 0;
  for (let y = 0; y < h; y++) {
    run.fill(0);
    const rowA = (y + 1) * W1, rowB = y * W1;
    for (let x = 0; x < w; x++) {
      const i = y * w + x, o = own[i], tr = ter[i];
      if (o === me) {
        tiles++;
        if (x < x0) x0 = x;
        if (x > x1) x1 = x;
        if (y < y0) y0 = y;
        if (y > y1) y1 = y;
        if (stone[i]) run[0] += stone[i] > 4 ? 4 : stone[i];
        if (tree[i]) run[1] += tree[i] === 2 ? 2 : 1;
        if (tr === 1) { run[3]++; if (fish && fish[i]) run[2] += fish[i] > 4 ? 4 : fish[i]; }
        else if (tr === 0) { if (!tree[i] && !stone[i] && !(occ && occ[i])) run[4]++; }
        else if (oreL) { const v = oreL[i]; if (v < 16) oreCnt[v]++; }
      } else if (o === 0) {
        run[5]++;
        if (stone[i]) run[6]++;
        if (tree[i]) run[7]++;
        if (tr === 2) run[8]++; else if (tr === 1) run[9]++;
      } else run[10]++;
      const a = rowA + x + 1, b = rowB + x + 1;
      for (let k = 0; k < NL; k++) L[k][a] = L[k][b] + run[k];
    }
  }
  G.t = view.t; G.w = w; G.h = h; G.W1 = W1; G.x0 = x0; G.y0 = y0; G.x1 = x1; G.y1 = y1; G.tiles = tiles; G.oreCnt = oreCnt;
  return G;
}
// the sum of layer k in the square of half-width r around (cx, cy)
function box(G, k, cx, cy, r){
  let xa = cx - r, xb = cx + r + 1, ya = cy - r, yb = cy + r + 1;
  if (xa < 0) xa = 0;
  if (ya < 0) ya = 0;
  if (xb > G.w) xb = G.w;
  if (yb > G.h) yb = G.h;
  if (xb <= xa || yb <= ya) return 0;
  const L = G.L[k], W1 = G.W1;
  return L[yb * W1 + xb] - L[ya * W1 + xb] - L[yb * W1 + xa] + L[ya * W1 + xa];
}

// The best place for a building: every tile of our land where it may stand, the one with the highest score.
// score(cx, cy) gets the middle of the building and gives a number, or null for "not here".
function scan(S, ty, onMountain, score){
  const G = S.G, map = S.map, w = map.w, me = S.me;
  const own = map.owner, ter = map.ter, tree = map.tree, stone = map.stone, occ = map.occupied;
  const sz = SIZE[ty] || [3, 3], hx = sz[0] >> 1, hy = sz[1] >> 1, want = onMountain ? 2 : 0;
  let best = null, bs = -1e9;
  for (let y = G.y0; y <= G.y1; y++) {
    for (let x = G.x0; x <= G.x1; x++) {
      const i = y * w + x;
      if (own[i] !== me || ter[i] !== want) continue;
      if ((occ && occ[i]) || tree[i] || stone[i]) continue;
      const sc = score(x + hx, y + hy);
      if (sc === null || sc <= bs) continue;
      if (S.bad[x + ',' + y] > S.t) continue;
      if (S.calls++ > SCAN_MAX) return best;
      if (!canPlace(ty, x, y)) continue;
      bs = sc;
      best = {x, y, sc};
    }
  }
  return best;
}

function economy(view, C, M){
  const E = view.economy, t = view.t, me = view.me;
  const town = E.town || [], stock = E.stock || {}, people = E.people || {}, idle = E.idle || {}, land = E.land || {};
  const units = E.units || [];
  const cmd = c => C.cmd.push(c);
  const st = k => stock[k] || 0;
  M.noSpot = M.noSpot || {};
  M.bad = M.bad || {};
  M.prod = M.prod || {};
  M.ore = M.ore || {};
  M.once = M.once || {};
  M.ms = M.ms || {};
  M.uT = M.uT || {};

  // the town: counts, sites, materials still owed to sites, tools workplaces are waiting for
  const cnt = {}, cntB = {}, lists = {}, toolWait = {};
  const owe = {plank: 0, stone: 0};
  let sites = 0, hq = null;
  for (const b of town) {
    const ty = b.type;
    cnt[ty] = (cnt[ty] || 0) + 1;
    (lists[ty] = lists[ty] || []).push(b);
    if (ty === 'hq') hq = b;
    if (b.built) cntB[ty] = (cntB[ty] || 0) + 1;
    else {
      sites++;
      const full = COST[ty] || {};
      const need = isObj(b.cost) && (num(b.cost.plank) + num(b.cost.stone) > 0) ? b.cost : full;
      const got = isObj(b.delivered) ? b.delivered : {};
      owe.plank += Math.max(0, num(need.plank) - num(got.plank));
      owe.stone += Math.max(0, num(need.stone) - num(got.stone));
    }
    if (TOOL[ty] && !b.worker) toolWait[TOOL[ty]] = (toolWait[TOOL[ty]] || 0) + 1;
  }
  if (hq) M.home = {x: hq.x + 2, y: hq.y + 2};
  else if (!M.home && town.length) M.home = {x: town[0].x + 1, y: town[0].y + 1};
  const home = M.home || {x: 0, y: 0};
  const n = ty => cnt[ty] || 0, nb = ty => cntB[ty] || 0;
  const staffed = ty => (lists[ty] || []).filter(b => b.built && b.worker).length;
  const siteOf = ty => (lists[ty] || []).some(b => !b.built);
  const carriers = people.carrier || 0, idleC = idle.carrier || 0;
  let persons = 0;
  for (const k in people) persons += num(people[k]);

  // what happened: last time each good was made, places the game refused
  if (Array.isArray(E.log)) for (const ev of E.log) if (ev && ev.what === 'econ' && ev.b === 0) M.prod[ev.s] = ev.t;
  for (const r of view.refused || []) {
    if (r && r.order === 'place' && r.args) {
      M.bad[r.args.x + ',' + r.args.y] = t + 300;
      M.refWhy = String(r.args.type) + ': ' + String(r.why || '').slice(0, 50);
    }
  }
  // ore signs go after 10 minutes; the script remembers where they were
  for (const o of E.ore || []) {
    const l = M.ore[o.ore] = M.ore[o.ore] || [];
    if (l.length < 40 && !l.some(p => p[0] === o.x && p[1] === o.y)) l.push([o.x, o.y]);
  }

  // the map: summed tables, made again every 6 seconds
  const map = view.map;
  const mapOK = typeof canPlace === 'function' && !!(map && map.w && map.h && map.owner && map.ter && map.tree && map.stone);
  let G = null;
  if (mapOK) G = (GRID && GRID.w === map.w && GRID.h === map.h && GRID.t <= t && t - GRID.t < 6) ? GRID : makeGrid(view);
  if (mapOK && !M.guess) {
    const c = [[map.w - 1 - home.x, home.y], [map.w - 1 - home.x, map.h - 1 - home.y], [home.x, map.h - 1 - home.y]];
    M.guess = c.filter(p => Math.hypot(p[0] - home.x, p[1] - home.y) > 45);
    if (!M.guess.length) M.guess = [[map.w >> 1, map.h >> 1]];
    M.mw = map.w;
    M.mh = map.h;
  }
  const oreVal = kind => (map && map.oreNames) ? map.oreNames.indexOf(kind) + 1 : 0;
  const ore = kind => (M.ore[kind] || []).length > 0 || (!!G && oreVal(kind) >= 2 && G.oreCnt[oreVal(kind)] > 0);

  // tools: free = in stock and not waited for. The first 3 hammers are for smelter, toolsmith and weaponsmith;
  // picks are kept for the first coal and iron mine and the geologist until the toolsmith works.
  const geos = units.filter(u => u.role === 'geologist');
  const smithOn = staffed('smith') > 0;
  const freeTool = k => st(k) - (toolWait[k] || 0);
  const chainMissing = ['smelter', 'smith', 'weaponsmith'].filter(ty => !cnt[ty]).length;
  const pickHold = smithOn ? 0 : ((cnt.quarry ? 0 : 1) + (cnt.coalmine ? 0 : 1) + (cnt.ironmine ? 0 : 1) +
    ((geos.length || !(land.unsearched > 0)) ? 0 : 1));
  const toolOK = ty => {
    const k = TOOL[ty];
    if (!k) return true;
    const f = freeTool(k), forge = smithOn && f >= 0;       // the toolsmith makes a tool that ran out
    if (k === 'hammer') {
      if (!cnt[ty] && (ty === 'smelter' || ty === 'smith' || ty === 'weaponsmith')) return f >= 1 || forge;
      return f - chainMissing >= 1 || (forge && chainMissing === 0);
    }
    if (k === 'pick') {
      if (!cnt[ty] && (ty === 'quarry' || ty === 'coalmine' || ty === 'ironmine')) return f >= 1 || forge;
      return f - pickHold >= 1 || forge;
    }
    return f >= 1 || forge;
  };

  // stone and wood: does it still come in? (stoneFlow: stone was cut in the last 200 s)
  const stoneMen = staffed('quarry') + staffed('stonemine'), woodMen = staffed('wood');
  if (stoneMen > (M.stN || 0)) M.stT0 = t;
  M.stN = stoneMen;
  if (woodMen > (M.wdN || 0)) M.wdT0 = t;
  M.wdN = woodMen;
  const lastP = k => (M.prod[k] === undefined ? -999 : M.prod[k]);
  const since = v => t - (v === undefined ? -999 : v);
  const stoneFlow = since(M.prod.stone) < 200;
  const stoneComing = siteOf('quarry') || siteOf('stonemine') || (lists.quarry || []).some(b => b.built && !b.worker) || since(M.stT0) < 150;
  const stoneStarved = !stoneFlow && !stoneComing && st('stone') < 10;      // no stone and none on its way
  // rocks our stonecutters can still reach; a stonecutter without rocks is no source any more
  let rockLeft = 0, liveQ = 0;
  for (const b of lists.quarry || []) {
    const r = G ? box(G, 0, b.x + 1, b.y + 1, 15) : 99;
    if (r > 0) liveQ++;
    else if (b.built && b.worker && stoneStarved && since(M.stT0) > 200 && G.t === t) {
      cmd(['demolish', {b: b.id}]);                          // frees its worker for a new one elsewhere
      note(C, 'stonecutter ' + b.id + ' has no rocks left in reach: demolished');
    }
    rockLeft += r;
  }
  const stoneGood = stoneFlow && (rockLeft >= 12 || staffed('stonemine') > 0);
  const woodStarved = woodMen > 0 && st('log') < 3 && st('plank') < 6 && t - Math.max(lastP('log'), M.wdT0 || 0) > 150;
  const recent = ty => (M.noSpot[ty] === undefined ? -999 : M.noSpot[ty]) > t - 40;
  const milCount = (cnt.guard || 0) + (cnt.tower || 0) + (cnt.castle || 0);
  const needRock = liveQ < 1 && recent('quarry');

  // materials: stock minus what open sites still get, plus a little for each working source
  const slack = {plank: 3 * staffed('saw'), stone: stoneGood ? 3 * stoneMen : 0};
  const kept = {plank: 0, stone: 0};
  const av = k => st(k) - owe[k] + slack[k] - kept[k];
  // While stone is not coming in safely, the last stone is kept: 3 for a stonecutter and more for guard posts
  // that reach rocks. Land for anything but rocks waits for stone too.
  const holdS = ty => {
    if (stoneGood || ty === 'quarry' || ty === 'stonemine') return 0;
    if (LANDR[ty]) return (needRock || milCount < 1) ? 3 : 9;
    return liveQ < 1 ? 12 : 6;
  };
  const holdP = ty => (n('saw') < 1 && ty !== 'saw' && ty !== 'wood') ? (n('wood') < 1 ? 5 : 3) : 0;
  const canPay = ty => {
    const c = COST[ty] || {};
    return av('plank') >= num(c.plank) + holdP(ty) && av('stone') >= num(c.stone) + holdS(ty);
  };

  // people: geologist, explorer, more builders and diggers
  const unsearched = E.unsearched || [];
  const profOK = carriers > 2 && idleC >= 1;
  if (profOK && geos.length < 1 && (land.unsearched || 0) > 0 && freeTool('pick') >= 1 && t >= (M.geoT || 0)) {
    cmd(['profession', {role: 'geologist', d: 1}]);
    M.geoT = t + 40;
  }
  geos.forEach((g, gi) => {
    if (g.busy || g.moving || !unsearched.length || (M.uT[g.id] || 0) > t) return;
    const s = unsearched[Math.min(unsearched.length - 1, gi * 6)];
    cmd(['sendUnit', {u: g.id, tx: s.x, ty: s.y}]);
    M.uT[g.id] = t + 6;
  });
  const exps = units.filter(u => u.role === 'explorer');
  if (exps.length) M.exHad = true;
  else if (M.exHad) { M.exHad = false; M.exLost = (M.exLost || 0) + 1; }
  const lost = liveQ < 1 && recent('quarry');               // no place for a stonecutter: look around at once
  if (!exps.length && (t >= 150 || lost) && carriers >= (lost ? 4 : 5) && idleC >= 2 && st('plank') >= 6 && (M.exLost || 0) < 3 && t >= (M.exT || 0)) {
    cmd(['profession', {role: 'explorer', d: 1}]);
    M.exT = t + 60;
  }
  for (const u of exps) {
    if (u.busy || u.moving || (M.uT[u.id] || 0) > t) continue;
    const p = waypoint(M, home);
    cmd(['sendUnit', {u: u.id, tx: p[0], ty: p[1]}]);
    M.uT[u.id] = t + 8;
  }
  // no rocks on our land: a pioneer claims land, tile by tile, toward the nearest rocks seen (it costs no stone)
  const pios = units.filter(u => u.role === 'pioneer');
  if (lost && mapOK && t >= (M.rockT || 0)) {
    M.rockT = t + 10;
    const own = map.owner, stn = map.stone, kn = map.known, w = map.w;
    let bd = 1e9, bi = -1;
    for (let i = 0; i < stn.length; i++) {
      if (!stn[i] || own[i] !== 0 || (kn && !kn[i])) continue;
      const d = Math.abs(i % w - home.x) + Math.abs(Math.floor(i / w) - home.y);
      if (d < bd) { bd = d; bi = i; }
    }
    M.rockAt = bi < 0 ? null : [bi % w, Math.floor(bi / w)];
  }
  if (lost && M.rockAt && !pios.length && profOK && freeTool('shovel') >= 1 && t >= (M.pioT || 0)) {
    cmd(['profession', {role: 'pioneer', d: 1}]);
    M.pioT = t + 60;
    note(C, 'no rocks on our land: a pioneer goes to claim the rocks at ' + M.rockAt[0] + ',' + M.rockAt[1]);
  }
  for (const u of pios) {
    if (!lost && liveQ > 0 && t >= (M.pioT || 0)) { cmd(['profession', {role: 'pioneer', d: -1}]); M.pioT = t + 60; break; }
    if (!M.rockAt || u.busy || u.moving || (M.uT[u.id] || 0) > t) continue;
    cmd(['sendUnit', {u: u.id, tx: M.rockAt[0], ty: M.rockAt[1]}]);
    M.uT[u.id] = t + 8;
  }
  if (staffed('smelter') > 0 && smithOn && staffed('weaponsmith') > 0 && carriers > 4 && idleC >= 3 && t >= (M.profT || 0)) {
    const goal = t > 1500 ? 4 : 3;
    if ((people.builder || 0) < goal && freeTool('hammer') >= 1) { cmd(['profession', {role: 'builder', d: 1}]); M.profT = t + 45; }
    else if ((people.digger || 0) < goal && freeTool('shovel') >= 1) { cmd(['profession', {role: 'digger', d: 1}]); M.profT = t + 45; }
  }

  // military buildings: one swordsman each holds the land, the others stay outside as the army
  for (const b of town) {
    if (!LANDR[b.type] || !b.built || (M.ms[b.id] || 0) > t) continue;
    const fOff = b.fighters === undefined ? !M.once['f' + b.id] : b.fighters > 1;
    const aOff = b.archers === undefined ? !M.once['a' + b.id] : b.archers > 0;
    if (fOff) { cmd(['fighters', {b: b.id, set: 1}]); M.once['f' + b.id] = 1; M.ms[b.id] = t + 30; }
    if (aOff) { cmd(['archers', {b: b.id, set: 0}]); M.once['a' + b.id] = 1; M.ms[b.id] = t + 30; }
  }
  // the weapon chain first for workers and goods (once each)
  for (const b of town) {
    if (!M.once['p' + b.id] && (b.type === 'smelter' || b.type === 'smith' || b.type === 'weaponsmith' || b.type === 'barracks')) {
      M.once['p' + b.id] = 1;
      cmd(['priority', {b: b.id, on: true}]);
      break;
    }
  }

  // a stonecutter being built while stone is short: it goes first, the other sites wait
  const srcSite = town.find(b => !b.built && (b.type === 'quarry' || b.type === 'stonemine'));
  const squeeze = !!srcSite && !stoneFlow && st('stone') < owe.stone;
  if (srcSite && !M.once['p' + srcSite.id]) { M.once['p' + srcSite.id] = 1; cmd(['priority', {b: srcSite.id, on: true}]); }
  for (const b of town) {
    if (b.built || b === srcSite || !!b.paused === squeeze || (M.ms['z' + b.id] || 0) > t) continue;
    cmd(['pause', {b: b.id, on: squeeze}]);
    M.ms['z' + b.id] = t + 10;
  }

  // houses: whenever idle carriers run low and no house is still on its way
  const houses = n('house') + n('house2') + n('house3');
  const housePending = town.some(b => /^house/.test(b.type) && (!b.built || num(b.coming) > 0));
  const lowIdle = nb('barracks') > 0 ? 8 : (t < 300 ? 3 : 5);
  const wantHouse = !housePending && persons < 130 && (houses === 0 || idleC <= lowIdle);
  const houseTys = (t > 480 && av('stone') >= 12 && av('plank') >= 10) ? ['house3', 'house2', 'house']
    : (t > 150 && av('stone') >= 6 && av('plank') >= 5) ? ['house2', 'house'] : ['house'];

  // food for the mines: fish; bread only when fish runs short for long
  const mines = n('coalmine') + n('ironmine') + n('goldmine') + n('stonemine');
  let hungry = 0;
  for (const ty of ['coalmine', 'ironmine', 'goldmine', 'stonemine']) for (const b of lists[ty] || []) {
    if (b.built && b.worker && isObj(b.inputs) && num(b.inputs.fish) + num(b.inputs.bread) + num(b.inputs.meat) === 0) hungry++;
  }
  if (hungry > 0 && st('fish') < 2 && nb('fisher') > 0) M.foodLow = (M.foodLow || 0) + 1; else M.foodLow = Math.max(0, (M.foodLow || 0) - 1);
  const foodShort = (M.foodLow || 0) > 45;

  // land: when something has no place, when ore is missing, and on a schedule
  const milList = town.filter(b => LANDR[b.type]);
  const milN = milList.length;
  const milSite = milList.some(b => !b.built);
  const emptyMil = (view.buildings || []).filter(b => LANDR[b.type] && b.built !== false && !(b.troops && b.troops.length)).length;
  const freeSold = (view.soldiers || []).filter(s => !s.order && !s.defends).length;
  const milOK = !milSite && emptyMil === 0 && (freeSold >= 1 || nb('barracks') > 0);
  const needWood = (n('wood') < 1 || woodStarved) && recent('wood');
  const needMount = t > 30 && (!ore('coal') || !ore('ironore')) && (land.unsearched || 0) < 4;
  const needFish = n('fisher') < 1 && recent('fisher');
  const crowded = ['house', 'saw', 'smelter', 'smith', 'weaponsmith', 'barracks', 'forest', 'goldsmelter', 'coalmine', 'ironmine'].some(recent);
  const urgent = needRock || needWood || needMount || needFish || crowded;
  const sched = milN < Math.min(18, t < 1200 ? 1 + Math.floor(t / 150) : 9 + Math.floor((t - 1200) / 240));
  const wts = {rock: needRock ? 25 : (rockLeft < 40 ? 8 : 1), tree: needWood ? 4 : 0.3, mount: needMount ? 3 : 0.4, water: needFish ? 2 : 0.1};
  const milTys = (t > 200 && stoneFlow) ? ['tower', 'guard'] : ['guard'];

  // the plan, most wanted first; each entry lists types, the first that fits is placed
  const wants = [];
  const W = (tys, cond) => { if (cond) wants.push(tys); };
  W(['quarry'], liveQ < 1);
  W(['stonemine'], (needRock || rockLeft < 20) && ore('stone') && n('stonemine') < 2 && !siteOf('stonemine'));
  W(houseTys, wantHouse);
  W(['wood'], n('wood') < 1);
  W(milTys, milOK && (urgent || milN < 1));
  W(['saw'], n('saw') < 1);
  W(['fisher'], n('fisher') < 1);
  W(['coalmine'], n('coalmine') < 1 && ore('coal'));
  W(['ironmine'], n('ironmine') < 1 && ore('ironore'));
  W(['forest'], n('forest') < 1 && nb('wood') > 0);
  W(['wood'], n('wood') < 2 && t > 100);
  W(['smelter'], n('smelter') < 1 && n('coalmine') > 0 && n('ironmine') > 0);
  W(['smith'], n('smith') < 1 && n('smelter') > 0);
  W(['weaponsmith'], n('weaponsmith') < 1 && n('smith') > 0);
  W(['barracks'], n('barracks') < 1 && n('weaponsmith') > 0);
  W(milTys, milOK && sched && (freeSold >= 3 || nb('barracks') > 0));   // the last two soldiers are kept for land that is needed
  W(['quarry'], liveQ < 2 && t > 300 && stoneFlow);
  W(['stonemine'], ore('stone') && n('stonemine') < 1 && n('fisher') > 0 && (rockLeft < 60 || t > 600));
  W(['wood'], woodStarved && !siteOf('wood') && n('wood') < 6);
  W(['forest'], n('forest') < Math.min(n('wood'), 3) && nb('wood') > 0 && t > 240);
  W(['coalmine'], n('coalmine') < 2 && nb('smelter') > 0 && ore('coal'));
  W(['goldmine'], n('goldmine') < 1 && ore('goldore') && n('barracks') > 0);
  W(['goldsmelter'], n('goldsmelter') < 1 && n('goldmine') > 0);
  W(['fisher'], n('fisher') < 2 && (foodShort || mines >= 4));
  W(['ironmine'], n('ironmine') < 2 && nb('weaponsmith') > 0 && t > 900 && ore('ironore'));
  W(['coalmine'], n('coalmine') < 3 && nb('weaponsmith') > 0 && t > 900 && ore('coal'));
  W(['wood'], n('wood') < 3 && t > 600);
  W(['saw'], n('saw') < 2 && st('log') >= 10 && t > 900);
  W(['coalmine'], n('coalmine') < 4 && n('ironmine') >= 2 && t > 1500 && ore('coal'));
  W(['ironmine'], n('ironmine') < 3 && t > 1800 && ore('ironore'));
  W(['farm'], foodShort && t > 600 && n('farm') < 1);
  W(['waterhut'], n('farm') > 0 && n('waterhut') < 1);
  W(['mill'], n('farm') > 0 && n('mill') < 1);
  W(['bakery'], n('mill') > 0 && n('waterhut') > 0 && n('bakery') < 1);

  // where: a score for each kind of building
  const S = {G, map, me, t, bad: M.bad, calls: 0};
  const dH = (cx, cy) => Math.hypot(cx - home.x, cy - home.y);
  const cnear = (ty2, cx, cy, r) => {
    let c = 0;
    for (const b of lists[ty2] || []) if (Math.abs(b.x + 1 - cx) <= r && Math.abs(b.y + 1 - cy) <= r) c++;
    return c;
  };
  const anchorOf = ty => {
    const l = (ANCHOR[ty] || []).reduce((a, k) => a.concat(lists[k] || []), []);
    if (!l.length) return home;
    return {x: l.reduce((a, b) => a + b.x + 1, 0) / l.length, y: l.reduce((a, b) => a + b.y + 1, 0) / l.length};
  };
  const spotOn = ty => {
    if (ty === 'quarry') return scan(S, ty, false, (cx, cy) => {
      const s = box(G, 0, cx, cy, 13);
      return s < 5 ? null : s - 0.3 * dH(cx, cy) - 12 * cnear('quarry', cx, cy, 12);
    });
    if (ty === 'wood') {
      const min = n('wood') ? 14 : 6;
      return scan(S, ty, false, (cx, cy) => {
        const s = box(G, 1, cx, cy, 11);
        return s < min ? null : s - 0.25 * dH(cx, cy) - 20 * cnear('wood', cx, cy, 9);
      });
    }
    if (ty === 'forest') {
      let a = null, an = 99;                                   // next to the woodcutter with the fewest foresters
      for (const b of lists.wood || []) { const c = cnear('forest', b.x + 1, b.y + 1, 8); if (c < an) { an = c; a = b; } }
      if (!a) return null;
      return scan(S, ty, false, (cx, cy) => {
        const d = Math.hypot(cx - a.x - 1, cy - a.y - 1);
        if (d > 8) return null;
        const g = box(G, 4, cx, cy, 8);
        return g < 25 ? null : g - 3 * d - 15 * cnear('forest', cx, cy, 6);
      });
    }
    if (ty === 'fisher') return scan(S, ty, false, (cx, cy) => {
      const s = box(G, 2, cx, cy, 10);
      return s < 4 ? null : s - 0.25 * dH(cx, cy) - 25 * cnear('fisher', cx, cy, 10);
    });
    if (ty === 'waterhut') {
      const a = anchorOf(ty);
      return scan(S, ty, false, (cx, cy) => {
        const s = box(G, 3, cx, cy, 6);
        return s < 2 ? null : Math.min(s, 30) - 0.4 * Math.hypot(cx - a.x, cy - a.y);
      });
    }
    if (ty === 'farm') return scan(S, ty, false, (cx, cy) => {
      const g = box(G, 4, cx, cy, 6);
      return g < 70 ? null : g - 0.4 * dH(cx, cy) - 25 * cnear('farm', cx, cy, 9) - 25 * cnear('forest', cx, cy, 12);
    });
    if (LANDR[ty]) {
      const r = LANDR[ty], min = MINNEW[ty];
      return scan(S, ty, false, (cx, cy) => {
        const u = box(G, 5, cx, cy, r);
        if (u < min) return null;
        return u + wts.rock * box(G, 6, cx, cy, r) + wts.tree * box(G, 7, cx, cy, r) + wts.mount * box(G, 8, cx, cy, r) +
          wts.water * box(G, 9, cx, cy, r) - 2 * box(G, 10, cx, cy, r) - dH(cx, cy);
      });
    }
    if (MINE[ty]) {
      const v = oreVal(MINE[ty]), oreL = map.ore, w = map.w, h = map.h, sg = M.ore[MINE[ty]] || [];
      return scan(S, ty, true, (cx, cy) => {
        let c = 0, near = 0;
        if (oreL && v >= 2) {
          for (let y = cy - 3; y <= cy + 3; y++) {
            if (y < 0 || y >= h) continue;
            for (let x = cx - 3; x <= cx + 3; x++) if (x >= 0 && x < w && oreL[y * w + x] === v) c++;
          }
        }
        for (const p of sg) if (Math.abs(p[0] - cx) <= 4 && Math.abs(p[1] - cy) <= 4) near++;
        if (!c && !near) return null;
        return 2 * c + 3 * near - 25 * cnear(ty, cx, cy, 5) - 0.1 * dH(cx, cy);
      });
    }
    const a = anchorOf(ty);
    return scan(S, ty, false, (cx, cy) => -Math.hypot(cx - a.x, cy - a.y));
  };
  const spot = ty => {
    if ((M.noSpot[ty] === undefined ? -999 : M.noSpot[ty]) > t - 14) return null;   // looked a moment ago: nothing
    let s = null;
    if (mapOK) s = spotOn(ty);
    else { const l = (E.spots || {})[ty]; if (l && l.length) s = l[0]; }
    if (!s) M.noSpot[ty] = t;
    return s;
  };
  if (!mapOK) {                                             // no map in the view: the 'ask' helper, as a fallback
    const ask = [];
    for (const tys of wants) for (const ty of tys) if (ask.length < 6 && !ask.includes(ty)) ask.push(ty);
    if (ask.length) cmd(['ask', {spots: ask}]);
  }

  // place: one new site a turn; the first entry that can't be paid keeps its materials
  const cap = 4 + (t > 600 ? 1 : 0) + ((people.builder || 0) >= 3 ? 1 : 0);
  const waits = [];
  let placed = null, saving = false;
  for (const tys of wants) {
    if (placed) break;
    if (sites >= cap) { waits.push('sites at cap'); break; }
    let why = null;
    for (const ty of tys) {
      if (!toolOK(ty)) { why = why || ('no ' + TOOL[ty]); continue; }
      if (!canPay(ty)) { why = why || 'materials'; continue; }
      const s = spot(ty);
      if (!s) { why = why || 'no spot'; continue; }
      cmd(['place', {type: ty, x: s.x, y: s.y}]);
      placed = ty + ' ' + s.x + ',' + s.y;
      why = null;
      break;
    }
    if (why) {
      waits.push(tys[0] + ': ' + why);
      if (why === 'materials' && !saving) {
        saving = true;
        const c = COST[tys[tys.length - 1]] || {};
        kept.plank += num(c.plank);
        kept.stone += num(c.stone);
      }
    }
  }

  // notes for the report: what was placed and, once a minute, what the decisions were based on
  if (placed) note(C, 'placed ' + placed + ' at ' + Math.floor(t) + ' s' + ((urgent && LANDR[placed.split(' ')[0]]) ? ' (land for: ' +
    (needRock ? 'rock ' : '') + (needWood ? 'wood ' : '') + (needMount ? 'mountain ' : '') + (needFish ? 'fish ' : '') + (crowded ? 'room' : '') + ')' : ''));
  if (t >= (M.stT || 0)) {
    M.stT = t + 60;
    note(C, Math.floor(t / 60) + ' min: people ' + persons + ' carriers ' + carriers + ' idle ' + idleC + ' | plank ' + st('plank') +
      ' stone ' + st('stone') + ' log ' + st('log') + ' fish ' + st('fish') + ' coal ' + st('coal') + ' ore ' + st('ironore') +
      ' iron ' + st('iron') + ' gold ' + st('gold') + ' | owed ' + owe.plank + '/' + owe.stone + ' sites ' + sites);
    note(C, 'tools free: axe ' + freeTool('axe') + ' pick ' + freeTool('pick') + ' hammer ' + freeTool('hammer') + ' saw ' +
      freeTool('saw') + ' shovel ' + freeTool('shovel') + ' rod ' + freeTool('rod') + ' | ore known: coal ' + (ore('coal') ? 1 : 0) +
      ' iron ' + (ore('ironore') ? 1 : 0) + ' gold ' + (ore('goldore') ? 1 : 0) + ' | unsearched ' + (land.unsearched || 0) +
      ' | military ' + milN + ' houses ' + houses + ' | rocks in reach ' + rockLeft + (stoneFlow ? '' : (stoneStarved ? ' | NO STONE' : ' | stone not flowing')) + (woodStarved ? ' | wood stopped' : '') +
      (foodShort ? ' | mines hungry' : ''));
    if (waits.length) note(C, 'waiting: ' + waits.slice(0, 7).join('; ') + (M.refWhy ? ' | refused ' + M.refWhy : ''));
  }
  if (t - (M.cleanT || 0) > 300) {                          // forget old refused places
    M.cleanT = t;
    for (const k in M.bad) if (!(M.bad[k] > t)) delete M.bad[k];
  }
}

// where the explorer goes next: a ring around home, then where the enemy should be, then around what was seen of it
function waypoint(M, home){
  const i = M.exI = (M.exI || 0) + 1;
  const w = M.mw || 200, h = M.mh || 200;
  const pts = [];
  const ring = (c, r, k) => { for (let a = 0; a < k; a++) pts.push([c.x + r * Math.cos(a * 6.2832 / k), c.y + r * Math.sin(a * 6.2832 / k)]); };
  if (M.foe) { ring(M.foe, 20, 6); ring(M.foe, 40, 8); }
  else { ring(home, 34, 6); for (const g of M.guess || []) pts.push(g); ring(home, 60, 8); }
  const p = pts[(i - 1) % pts.length];
  return [Math.max(2, Math.min(w - 3, Math.round(p[0]))), Math.max(2, Math.min(h - 3, Math.round(p[1])))];
}

function army(view, C, M){
  const t = view.t, E = view.economy;
  const cmd = c => C.cmd.push(c);
  const mine = view.soldiers || [], bld = view.buildings || [];
  const en = view.enemy || {}, foes = en.soldiers || [], eb = en.buildings || [];
  M.sIn = M.sIn || {};
  M.busy = M.busy || {};
  M.badT = M.badT || {};
  const home = M.home || (bld.length ? {x: bld[0].x, y: bld[0].y} : {x: 0, y: 0});
  const used = {};
  const isFree = s => !s.order && !s.defends && !s.fighting && !(M.busy[s.id] > t) && !used[s.id];
  const take = ids => { for (const id of ids) used[id] = 1; };
  const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
  const door = b => b.door || b;

  // 1) every empty military building of ours gets one soldier, a swordsman when one is near
  let sent = 0;
  for (const b of bld) {
    if (sent >= 3) break;
    if (!LANDR[b.type] || b.built === false || (b.troops && b.troops.length) || (M.sIn[b.id] || 0) > t) continue;
    let best = null, bs = 1e9;
    for (const s of mine) {
      if (!isFree(s)) continue;
      const d = dist(s, door(b)) + (s.kind === 'sword' ? 0 : s.kind === 'spear' ? 12 : 25);
      if (d < bs) { bs = d; best = s; }
    }
    if (!best) break;
    cmd(['sendIn', {ids: [best.id], b: b.id}]);
    M.sIn[b.id] = t + 20;
    M.busy[best.id] = t + 20;
    used[best.id] = 1;
    sent++;
  }

  // 2) defence: enemy soldiers close to one of our buildings; the free soldiers around go to meet them
  if (foes.length && t >= (M.defT || 0)) {
    let thr = null, td = 1e9;
    for (const f of foes) for (const b of bld) {
      const d = Math.abs(f.x - b.x) + Math.abs(f.y - b.y);
      if (d < 18 && d < td) { td = d; thr = f; }
    }
    if (thr) {
      const ids = mine.filter(s => isFree(s) && dist(s, thr) < 60).map(s => s.id);
      if (ids.length) {
        cmd(['march', {ids, tx: Math.floor(thr.x), ty: Math.floor(thr.y), form: 'line', am: true}]);
        take(ids);
        M.defT = t + 4;
        if (t >= (M.defN || 0)) { M.defN = t + 60; note(C, 'defence: ' + ids.length + ' soldiers meet ' + foes.length + ' enemy soldiers near our buildings'); }
      }
    }
  }

  // 3) attack: all free soldiers on the nearest enemy military building; the HQ counts as one
  for (const r of view.refused || []) if (r && r.order === 'attack' && r.args) M.badT[r.args.b] = t + 90;
  const targets = eb.filter(b => (b.military || b.type === 'hq' || LANDR[b.type]) && !(M.badT[b.id] > t));
  if (eb.length) M.foe = {x: Math.round(eb.reduce((a, b) => a + b.x, 0) / eb.length), y: Math.round(eb.reduce((a, b) => a + b.y, 0) / eb.length)};
  const free = mine.filter(isFree);
  const active = mine.filter(s => s.order && s.order.k === 'attack');
  let tgt = null, need = 0;
  if (active.length) {
    const tally = {};
    let top = null;
    for (const s of active) { const k = s.order.b; tally[k] = (tally[k] || 0) + 1; if (top === null || tally[k] > tally[top]) top = k; }
    tgt = targets.find(b => String(b.id) === String(top)) || null;
    if (tgt) {
      if (M.tgtId !== tgt.id) { M.tgtId = tgt.id; M.tgtT = t; }
      else if (t - (M.tgtT || 0) > 300) {                   // five minutes on one building: leave it for a while
        M.badT[tgt.id] = t + 150;
        cmd(['release', {ids: active.map(s => s.id), stop: true}]);
        note(C, 'attack on ' + tgt.type + ' ' + tgt.id + ' given up after 5 min');
        tgt = null;
      }
    }
    if (tgt && free.length) {                               // others join: those near at once, those at home in fours
      const nearT = free.filter(s => dist(s, door(tgt)) < 70), far = free.filter(s => dist(s, door(tgt)) >= 70);
      const ids = nearT.concat(far.length >= 4 ? far : []).map(s => s.id);
      if (ids.length) { cmd(['attack', {ids, b: tgt.id}]); take(ids); }
    }
  } else if (free.length) {
    const cx = free.reduce((a, s) => a + s.x, 0) / free.length, cy = free.reduce((a, s) => a + s.y, 0) / free.length;
    if (targets.length) {
      const pen = {guard: 0, tower: 6, castle: 15, hq: 10};
      let bs = 1e9;
      for (const b of targets) {
        const sc = Math.hypot(door(b).x - cx, door(b).y - cy) + (pen[b.type] || 0) - (b.manned === false ? 5 : 0);
        if (sc < bs) { bs = sc; tgt = b; }
      }
      const base = {guard: 7, tower: 11, castle: 16, hq: 12};
      need = tgt.manned === false ? 4 : (base[tgt.type] || 8);
      for (const f of foes) if (dist(f, door(tgt)) < 16) need += 1.2;
      const g = typeof view.gold === 'number' ? view.gold : 0.6;
      need *= 1.45 - 0.75 * g;                              // gold makes soldiers stronger outside our land
      if (t > 2700) need *= 0.6;                            // the last quarter: go with what there is
      need = Math.max(4, Math.ceil(need));
      if (free.length >= need) {
        const ids = free.map(s => s.id);
        cmd(['attack', {ids, b: tgt.id}]);
        take(ids);
        M.tgtId = tgt.id;
        M.tgtT = t;
        note(C, 'attack: ' + ids.length + ' soldiers on ' + tgt.type + ' ' + tgt.id + (tgt.manned === false ? ' (empty)' : '') +
          ', needed ' + need + ', ' + targets.length + ' targets known');
      }
    } else if (t > 900 && free.length >= 12 && (M.guess || []).length && t >= (M.seekT || 0)) {
      // nothing of the enemy seen yet: the army goes looking where its town should be
      const gi = (M.gi || 0) % M.guess.length, g = M.guess[gi];
      if (Math.hypot(g[0] - cx, g[1] - cy) < 12) M.gi = gi + 1;
      else {
        const ids = free.map(s => s.id);
        cmd(['march', {ids, tx: Math.round(g[0]), ty: Math.round(g[1]), form: 'block', am: true}]);
        take(ids);
        note(C, 'search: ' + ids.length + ' soldiers march to ' + Math.round(g[0]) + ',' + Math.round(g[1]) + ' to find the enemy');
      }
      M.seekT = t + 30;
    }
  }

  // 4) how many soldiers to train: as many as idle carriers can be spared; spears beat swords, swords bows, bows spears
  if (E && !view.armyOnly && t >= (M.atT || 0)) {
    M.atT = t + 6;
    const A = E.army || {};
    if ((E.town || []).some(b => b.type === 'barracks')) {
      const idleC = (E.idle && E.idle.carrier) || 0, carr = (E.people && E.people.carrier) || 0;
      const allow = Math.max(0, Math.min(12, idleC - 3, carr - 6));
      let garrisoned = 0;
      for (const b of bld) if (b.owner === view.me && LANDR[b.type] && b.built !== false) garrisoned += (b.troops || []).length;
      const total = Math.min(90, mine.length + garrisoned + allow);
      const want = {sword: Math.ceil(total * 0.45), spear: Math.round(total * 0.3)};
      want.bow = Math.max(0, total - want.sword - want.spear);
      const cur = A.target || {};
      for (const k of ['sword', 'spear', 'bow']) if (cur[k] !== want[k]) cmd(['armyTarget', {kind: k, set: want[k]}]);
      if (Array.isArray(A.keep) && t >= (M.wkT || 0)) {     // a few weapons ahead, ready for the next carriers
        M.wkT = t + 60;
        A.keep.forEach((e, i) => { if (i < 3 && e && e.keep !== 0) cmd(['weaponKeep', {k: i, set: 0}]); });
      }
    }
    if (t >= (M.arT || 0)) {
      M.arT = t + 60;
      const tg = A.target || {};
      note(C, 'army: outside ' + mine.length + ' free ' + free.length + ' attacking ' + active.length + ' | targets ' +
        num(tg.sword) + '/' + num(tg.spear) + '/' + num(tg.bow) + ' | enemy seen: soldiers ' + foes.length + ' buildings ' + eb.length +
        ' military ' + targets.length + (tgt ? ' | next ' + tgt.type + ' needs ' + need : '') + ' | gold ' + num(view.gold));
    }
  }
}
