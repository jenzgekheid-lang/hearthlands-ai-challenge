> In hearthlands-ai-challenge, send your script in as README.md says (input/<name>/script.js); the
> sections below about pull requests and running tools/tournament.js yourself are for the private repository.

# AI script challenge: Jules against ChatGPT

**For:** Jules and ChatGPT (each writes its own script; don't look at the other's).
**From:** Jens, 7 Nov 2026 (game version 181).

**New in game version 188 (10 Nov):** the game log. During the game your script gets its own side of it
(`view.economy.log`) and can write notes into it (`["note", {text}]`). After the games your tournament report ends each
game with your side of the log: stock every 15 minutes, what every building type spent its time on (working, waiting
for what, no worker, pile full), the build order with finish times, goods made and used, every order and why one was
refused, every order your people got and whether it was done or why not, failed paths, people changing jobs, fights, first contact, warnings and your notes. Details in the kit below.

## The task

**New in game version 182 (7 Nov):** your script gets the whole map as far as its fog of war allows (`view.map`),
`canPlace(type, x, y)`, the orders the game refused and why (`view.refused`), and its army settings. Since 183 enemy buildings show only whether they are manned (`manned`), not who is inside. And the fog is now
fair in watched games: before 182 every side (scripts and the original game NPC) saw the whole map there, so round 1
and 2 scripts may count on things they can no longer see. Details in the kit below.

Write one **AI script** that plays a **whole game** of Hearthlands for one player slot: build an economy, train
soldiers, and beat the other side. Your script will play against the other AI's script, and against the original game
NPC, on several random maps with both sides swapped. Jens watches the games in the game itself (New map > Watch only,
each slot filled with "Paste an AI script…").

- Goal: win. The last side with a headquarters or a manned military building wins.
- Strong economy first, then attack when you are stronger, is a good plan; any plan is allowed.
- Your script sees only what its side may know (fog of war) and pays the same costs as everyone: no cheating is
  possible, the game refuses impossible commands.

## What to deliver

- **One JavaScript file**, plain JavaScript, following the rules in the kit below exactly (a `think(view)` function
  that returns a list of commands; at most 0.3 s per turn; no internet or storage; `memory` is kept between turns).
- **File name: your AI and your model**, lower case with dashes: `ai-scripts/<ai>-<model>.js`, for example
  `ai-scripts/claude-opus-5.5.js`, `ai-scripts/chatgpt-gpt-5.js`, `ai-scripts/jules-gemini-2.5-pro.js`. Use the exact
  model you run on; if you don't know it, say so in the pull request and use `-unknown`. A new model = a new file
  (the old one stays in the tournament).
- Open a pull request that adds only that file (if you can't open one, answer with the script only). Don't push to
  `main` and don't read the other AIs' scripts or branches.
- Put a short comment at the top: your AI, your model, the game version you wrote and tested it for, and the plan in
  2-4 lines. The version line must look exactly like `// Game version: 183` (the number is GAME_VERSION in
  `src/core/version.js` after you merged main). The tournament report shows it next to the version it ran on.

## Rounds: read your report and improve

Claude runs every official round and saves the reports in `ai-scripts/reports/` (`<you>-round<N>.md`): who won, how
both towns grew, the soldiers every 5 minutes, the first army orders with their game time, turn times, errors and
refused orders. Read your latest report, find why you lost, improve your script and push it to your pull request.

## Test and improve it yourself (do this before your pull request)

You can play your script against the others on your own machine; no GitHub Actions needed:

```sh
npm install
node tools/build.js                                   # once per change of the game (writes tests/build/api.cjs)
node tools/tournament.js ai-scripts/<you>.js --out report.md
```

It plays whole games without a screen against the original game NPC and every other script in `ai-scripts/`, on 4
maps with the sides swapped (about 1 minute per opponent), and reports per game: won/lost, buildings / military /
land / soldiers / people every 15 game minutes, when the first smelter, smith, weaponsmith, barracks, tower and castle
stood, the script's turn times and errors, and which orders the game refused. Options: `--vs original,ai-scripts/x.js`,
`--seeds 1,2,3`, `--min 90`.

Run it, read the report, improve the script, and repeat (a few rounds). Put your last report in the pull request
description. Change only your own script file; Claude runs the final tournament for the result.

## Where to look for more detail (read only)

- `src/cmd/view.js`: how the view is built (`viewOf`, `econOf`, `rulesView`).
- `src/ai/container.js`: how a script is called and which commands are allowed (`ALLOWED`).
- `src/arena/builder.js`: the example full-game script 'AI script: builder' (also printed in the kit below).
- `src/data/buildings.js`, `src/data/items.js`: buildings, costs, goods.
- `src/ai/rival.js`, `src/ai/war.js`: the original game NPC you will also play against.

## The AI script kit

This is the same text as the game's Goals > AI script kit (made from `src/arena/brainkit.js`). The "PLAYER'S WISHES"
at the end are filled in.

```text
You are writing an "AI script" for the arena of Hearthlands, a Settlers-like strategy game. An AI script is a short
JavaScript program that fills one player slot's NPC container and commands that side's soldiers in a small battle. Write ONE script, following these rules exactly.

THE SCRIPT
- Define a function think(view) that returns a list of commands (an array, maybe empty).
  Also allowed: module.exports = { think(view){...} } or module.exports = function(view){...}.
- think is called about once per game second with the current view. It must answer within 0.3 seconds.
- Plain JavaScript only. No internet, no storage, no other scripts: they are switched off. A plain object called
  memory is kept between turns if you want to remember things (memory.plan = ...).
- Don't wait for anything: compute and return.

THE VIEW (what your side may know; positions in map tiles, x to the east, y to the south)
{ t: game seconds, me: your side (1 = Gold, 2 = Blue), map: {w, h}, gold: your strength outside your land (0.6-1),
  soldiers: [ {id, kind: "sword"|"spear"|"bow", hp, maxHp, x, y, order: null or {k: "attack"|"move"|"attack-move", ...},
               fighting, stance: "aggr"|"hold", defends, held, moving} ],
  buildings: [ your buildings: {id, type, owner, x, y, w, h, door: {x, y}, military, troops: ["sword","bow",...]} ],
  enemy: { soldiers: [ {id, owner, kind, x, y, hurt} ], buildings: [ like yours, but instead of troops only manned: true|false ] },
  over: null or {winners},
  rules: (first turn only) the numbers below }
Soldiers with an order are busy; give orders to the ones whose order is null (and leave "defends" alone).
held: your military buildings won't call him in (see march); moving: still walking.

THE COMMANDS (each command is [name, args])
- ["attack", {ids: [soldier ids], b: enemy building id}]   walk to its door and take it
- ["march", {ids: [...], tx, ty, form: "block"|"line"|"wedge", am: false|true, loose: true}]   move there; am: true =
  attack-move (fight anyone met on the way); a plain move walks around known arrow range and doesn't stop to fight.
  An order (march, attack) holds the soldiers: your military buildings don't call held soldiers in, and a held soldier
  who ends a plain move within 10 tiles of a military building of yours with room goes inside. loose: true = don't hold
  them (buildings may still call them; for a field army that should fill buildings that lose soldiers)
- ["stance", {ids: [...], st: "aggr"|"hold"}]   aggr: attack every enemy in sight; hold: stay, fight back when attacked
- ["free", {ids: [...]}]   drop their orders and let go of them (not held, no hold spot)
- ["release", {ids: [...], stop: true}]   let go of them (not held) but keep their hold spot; stop: true also ends their
  march or attack
- ["sendIn", {ids: [...], b: your military building id}]   go inside as garrison
- ["group", {ids: [...], g: 1-5, replace: true}]   remember a group (for yourself)
At most 50 commands per turn. Wrong or impossible commands are refused and counted.

HOW BATTLES WORK
- Defenders step out one per attacker at the door, fighters first; bowmen inside shoot, and come down one at a time when no fighter is left.
- The attacker closest to the door takes a building once nobody defends it. A taken building only gets land no other enemy building still covers.
- Outside its own land a soldier fights at its side's gold strength (60% with no gold, 100% with a gold bar per soldier).
- Soldiers without an order step back out of arrow range; move routes around known arrow range; attack-move fights on the way.
- Kinds: spearmen beat swordsmen up close, swordsmen beat bowmen up close, bowmen beat spearmen at range (bowmen shoot
  from about 10 tiles). Blows of one moment are dealt together.
- Military buildings shoot with the bowmen inside at enemies within about 14 tiles of their centre.
- You win when the other side has no soldiers and no military buildings left.

THE NUMBERS
{
 "units": "positions and distances are in map tiles (x, y as in the view)",
 "kinds": {
  "sword": {
   "hp": 10,
   "melee": 2,
   "rate": 1.2
  },
  "spear": {
   "hp": 10,
   "melee": 2,
   "rate": 1.2
  },
  "bow": {
   "hp": 7,
   "melee": 0.8,
   "rate": 1.4,
   "shot": 1.5,
   "shotRate": 1.3,
   "range": 10
  }
 },
 "bonus": {
  "spear": {
   "sword": 1.5
  },
  "sword": {
   "bow": 1.5
  }
 },
 "shotBonus": {
  "spear": 6
 },
 "melee": 1.6,
 "sight": 12,
 "arrowZone": 10,
 "wallRange": 14,
 "heal": 0.05,
 "military": {
  "guard": {
   "name": "Guard post",
   "w": 3,
   "h": 3,
   "land": 14,
   "fighters": 2,
   "archers": 1,
   "guards": 1
  },
  "tower": {
   "name": "Tower",
   "w": 5,
   "h": 4,
   "land": 20,
   "fighters": 3,
   "archers": 3,
   "guards": 2
  },
  "castle": {
   "name": "Castle",
   "w": 8,
   "h": 7,
   "land": 26,
   "fighters": 5,
   "archers": 5,
   "guards": 3
  }
 },
 "notes": [
  "Defenders step out one per attacker at the door, fighters first; bowmen inside shoot, and come down one at a time when no fighter is left.",
  "The attacker closest to the door takes a building once nobody defends it. A taken building only gets land no other enemy building still covers.",
  "Outside its own land a soldier fights at its side's gold strength (60% with no gold, 100% with a gold bar per soldier).",
  "Soldiers without an order step back out of arrow range; move routes around known arrow range; attack-move fights on the way."
 ],
 "commands": {
  "march": "{ids:[...], tx, ty, form:\"block\"|\"line\"|\"wedge\", am:false|true, loose:true}",
  "attack": "{ids:[...], b:buildingId}",
  "stance": "{ids:[...], st:\"aggr\"|\"hold\"}",
  "free": "{ids:[...]}",
  "release": "{ids:[...], stop:true}",
  "sendIn": "{ids:[...], b:ownBuildingId}",
  "group": "{ids:[...], g:1-5, replace:true}"
 }
}

AN EXAMPLE AI SCRIPT (simple; do better)
// Example AI script: everyone without an order attacks the enemy building nearest to them;
// when no enemy building is left, they go for the nearest enemy soldier (attack-move).
function think(view){
  const idle = view.soldiers.filter(s => !s.order && !s.defends);
  if (!idle.length) return [];
  const cx = idle.reduce((a,s)=>a+s.x,0)/idle.length, cy = idle.reduce((a,s)=>a+s.y,0)/idle.length;
  const d = (x,y) => Math.hypot(x-cx, y-cy);
  const targets = view.enemy.buildings.filter(b => b.military).sort((a,b)=>d(a.door.x,a.door.y)-d(b.door.x,b.door.y));
  if (targets.length) return [['attack', {ids: idle.map(s=>s.id), b: targets[0].id}]];
  const foes = view.enemy.soldiers.slice().sort((a,b)=>d(a.x,a.y)-d(b.x,b.y));
  if (foes.length) return [['march', {ids: idle.map(s=>s.id), tx: Math.floor(foes[0].x), ty: Math.floor(foes[0].y), form: 'block', am: true}]];
  return [];
}

IN A FULL GAME (an NPC container playing a whole town; the arena has no economy)
- think(view) is called every 2 game seconds, every second while your soldiers fight. The view then also has
  view.economy: { stock: {item: count}, people: {role: count}, idle: {role: count with no task},
    homeless (people without a bed: more settlers than beds; carriers lose theirs first), beds, population,
    units: [ {id, role: "explorer"|"geologist"|"pioneer", x, y, busy, moving (still walking), to: {x, y} where sent} ],
    town: [ your buildings: {id, type, x, y, built, worker, paused, prio, inputs, outputs, delivered, cost,
      dug (a site: levelled, ready for builders), coming (a house: settlers it still brings),
      range, area (workplaces with a work area), archers, fighters (military buildings: their setting)} ],
    land: {tiles, grass, trees, rocks, water, mountain, unsearched}, ore: [ {x, y, ore} ore you have seen signs of ],
    unsearched: [ {x, y, d} mountain on your land no geologist has searched, nearest first ],
    spots: { type: [ {x, y, d, n} ] } answers to last turn's ['ask', {spots: [types]}]: places where that building
      may stand now, best first (n = trees/rocks/fish water/free grass/known ore in reach, or new land for military) }
- Economy commands: place {type, x, y}, demolish {b}, priority {b, on}, pause {b, on}, workArea {b, x, y},
  workRange {b, d}, storeSlot {b, k, it}, profession {role, d: 1|-1}, sendUnit {u, tx, ty}, weaponKeep {k, d},
  armyTarget {kind, d}, archers {b, d}, fighters {b, d}, workOrder {k, d: -1|1} (move a job in your carriers' work list,
  view.economy.work: staff, recruit, sites, workshops, clear, surplus), priority {b, on} (a site, or a finished
  workplace: first for a worker and goods until it has them; a military building: manned first until full), distUp
  {it, k}, armyList {on} (military buildings call soldiers by your list instead of oldest first), armyOrder {k, d}
  (steps guards, border, rest), armyReserve {d or set} (free soldiers the buildings leave in the field); plus the army
  commands above. Instead of a step d, workRange, archers, fighters, weaponKeep, armyTarget and armyReserve also take
  set: an exact number (kept within the same limits; armyTarget by set has no top of 40).
- Mines may stand anywhere on the mountain; signs (view.economy.ore) show where the ore is. Signs go after 10 minutes.
- THE MAP (full game): view.map = {w, h, known, ter, tree, stone, owner, height, occupied, fish, ore, oreNames, at(x,y)}.
  Each layer is a Uint8Array with one value per tile, index y*w+x, as far as your fog of war allows: known 0 = never
  seen (all other layers 0 there), 1 = seen before (as it was then), 2 = seen now (your own land always). ter 0 grass,
  1 water, 2 mountain; tree 2 grown, 1 young; stone = rocks left; owner = side (0 nobody); occupied 1 = something
  stands there (seen now only); fish = fish left in that water (seen now only); ore 0 not searched by a geologist,
  1 searched: nothing, 2+ = oreNames[ore-1] ('coal', 'ironore', 'goldore', 'stone'). map.at(x,y) gives one tile as an
  object. Decide yourself where to build and where to expand: the map is all you need.
- canPlace(type, x, y): true when a building of that type may stand with its top-left corner on tile x, y right now
  (whole tiles; the game's own rules: on your land, flat enough, free of trees, rocks and other buildings, room around
  it, a free tile in front of the door, mines fully on the mountain, military buildings out of enemy arrow range).
  Instant and free: call it as often as you like. Sizes (w x h tiles, door side): wood 3x3, forest 3x3, saw 3x3 east, fisher 3x3, waterhut 3x3, farm 4x3, mill 3x3, bakery 3x3 east, pigfarm 3x3, butcher 3x3, coalmine 3x3, ironmine 3x3, stonemine 3x3, goldmine 3x3, goldsmelter 3x3, smelter 3x3, smith 3x3 east, quarry 3x3, house 3x3, house2 5x4, house3 6x5, store 3x3, look 2x2, guard 3x3, tower 5x4, castle 8x7, weaponsmith 3x3 east, barracks 3x3 (door south unless east).
  x grows to the east, y to the south.
- view.refused: last turn's orders the game refused, as {order, args, why} (for place: the reason, like 'Too steep').
- view.economy.loose: goods lying loose on your land {item: count}. view.economy.army: your army settings: target
  {sword, spear, bow}, keep [{weapon, keep}] (weaponKeep's k is the position in this list, 0 first), reserve, list.
- view.economy.spots (the 'ask' helper) still works, but you don't need it.
- THE GAME LOG (full game): view.economy.log = everything that happened to your side since your last economy turn
  (newest last, at most 400): {t, p, what, a, b, c, s, other}. what: 'place' (a building id, b/c x/y, s type), 'finish',
  'demolish' (b 1 = burned), 'order' (a 1 accepted / 0 refused; s the order, with the reason when refused), 'deliver'
  (a building id, s item), 'econ' (a amount, s item, b kind: 0 produced 1 consumed 2 lost 3 captured), 'profession'
  (s 'carrier -> worker'), 'pathfail' (someone found no way: s who, task and why), 'attack' / 'capture' (other = the other
  side), 'kill' (p whose person fell, other the killer), 'seen' (first sight of another side's land), 'watch' (a warning),
  'note', 'task' (one of your people starts a new order: a person id, s like 'carrier haul log wood -> saw' or 'worker
  gather wood'; b/c building ids or target), 'taskend' (that order ended: a person id, b tenths of a second, s 'done' or
  'failed: why'). Only what your side may know.
- ["note", {text}]: write your own note into the game log (at most 5 a turn, 200 characters each). After the game the
  tournament report shows your last notes next to what happened, so write down why you did something or why you wait.

AN EXAMPLE FOR A FULL GAME: 'AI script: builder'
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

Now write the AI script the player asks for below. Answer with the script only.
PLAYER'S WISHES:
Play a whole game (IN A FULL GAME above) and win against another AI script and the original game NPC: build a strong economy and an army, then attack when you are stronger. Keep each turn fast.
```
