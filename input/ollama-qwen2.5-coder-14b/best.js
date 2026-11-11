// AI script: ollama-qwen2.5-coder-14b
// Model: qwen2.5-coder:14b (local, Ollama)
// Game version: 195
// Plan: the kit's builder example as a start; improved one change per round.
// AI script: builder. Builds a town step by step with the economy view (view.economy) and commands.
function think(view){
  const E = view.economy, out = [];
  const has = t => E.town.filter(b => b.type === t).length;          // built or being built
  const sites = E.town.filter(b => !b.built).length;
  const st = it => E.stock[it] || 0;
  const mil = E.town.filter(b => b.type === 'guard' || b.type === 'tower').length;
  const ore = k => E.ore.some(o => o.ore === k);
  // what it wants next, in order: [condition, building]
  const want = [
    [mil < 1, 'guard'], [mil < 2, 'guard'], [mil < 3, 'tower'], [mil < 4, 'tower'], // Prioritize building military structures
    [has('wood') < 1, 'wood'], [has('quarry') < 1, 'quarry'], [has('saw') < 1, 'saw'], [has('wood') < 2, 'wood'],
    [has('forest') < 1, 'forest'], [(E.people.carrier || 0) < 6 && E.population >= E.beds - 4 && !E.town.some(b => !b.built && /house/.test(b.type)), 'house'], // a house only when few carriers are free
    [has('fisher') < 1, 'fisher'], [has('waterhut') < 1, 'waterhut'], [has('farm') < 1, 'farm'], [has('mill') < 1, 'mill'],
    [has('bakery') < 1, 'bakery'], [has('quarry') < 2, 'quarry'], [has('wood') < 3, 'wood'], [has('forest') < 2, 'forest'],
    [has('coalmine') < 1 && ore('coal'), 'coalmine'], [has('ironmine') < 1 && ore('ironore'), 'ironmine'],
    [has('smelter') < 1 && has('coalmine') && has('ironmine'), 'smelter'], [has('smith') < 1 && has('smelter'), 'smith'],
    [has('pigfarm') < 1 && has('farm'), 'pigfarm'], [has('butcher') < 1 && has('pigfarm'), 'butcher'], [has('farm') < 2 && has('mill'), 'farm'],
    [has('weaponsmith') < 1 && has('smelter'), 'weaponsmith'], [has('barracks') < 1 && has('weaponsmith'), 'barracks'],
    [has('coalmine') < 2 && has('smelter'), 'coalmine'], [has('saw') < 2 && has('wood') >= 3, 'saw'],
  ].filter(w => w[0]).map(w => w[1]);
  // a geologist while there is mountain it hasn't searched
  const geos = E.units.filter(u => u.role === 'geologist');
  if (!geos.length && E.land.unsearched > 20 && has('saw') && st('pick') > 0 && !(memory.geoT > view.t)) { out.push(['profession', {role: 'geologist', d: 1}]); memory.geoT = view.t + 60; } // ask once, then wait (a carrier fetches a pickaxe first)
  for (const g of geos) if (!g.busy && E.unsearched.length) { const s = E.unsearched[(view.t / 2 | 0) % E.unsearched.length]; out.push(['sendUnit', {u: g.id, tx: s.x, ty: s.y}]); }
  // more land: a guard post or tower at the far edge, when what it wants has no room or every few minutes
  const noRoom = want.length && E.spots[want[0]] && !E.spots[want[0]].length;
  const empty = view.buildings.some(b => b.military && b.type !== 'hq' && b.built && !(b.troops && b.troops.length)); // nobody to man it yet
  const milWanted = (noRoom || mil < Math.floor(view.t / 150)) && !empty && !E.town.some(b => !b.built && (b.type === 'guard' || b.type === 'tower'));
  const ask = (milWanted ? ['guard'] : []).concat(want.slice(0, 3));
  out.push(['ask', {spots: ask}]);
  if (sites >= 3 || st('plank') < 2) return out;                     // don't start too much at once
  if (milWanted && E.spots.guard && E.spots.guard.length) { const s = E.spots.guard[0]; out.push(['place', {type: 'guard', x: s.x, y: s.y}]); return out; }
  for (const t of want.slice(0, 3)) { const l = E.spots[t]; if (l && l.length) { out.push(['place', {type: t, x: l[0].x, y: l[0].y}]); break; } }
  return out;
}
