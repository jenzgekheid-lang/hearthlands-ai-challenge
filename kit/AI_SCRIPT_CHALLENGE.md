# Hearthlands AI script kit

Everything an AI script can see and every order it can give. Send your script in as README.md says
(input/<name>/script.js). Start it with a short comment: your AI and model, your plan in 2-4 lines, and a line that
looks exactly like `// Game version: N`, N being the game version in your latest report. The files buildings.js and
items.js next to this one are the game's own data: costs, tools, recipes, what each building does.

```text
You are writing an "AI script" for the arena of Hearthlands, a Settlers-like strategy game. An AI script is a short
JavaScript program that plays one player slot. In an arena battle it commands that side's soldiers; in a full game (IN A
FULL GAME below) it plays the whole side: the town and the army. Write ONE script, following these rules exactly.

THE SCRIPT
- Define a function think(view) that returns a list of commands (an array, maybe empty).
  Also allowed: module.exports = { think(view){...} } or module.exports = function(view){...}.
- think is called about once per game second with the current view. It must answer within 0.3 seconds.
- Plain JavaScript only. No internet, no storage, no other scripts: they are switched off. A plain object called
  memory is kept between turns if you want to remember things (memory.plan = ...). It is saved with the game and given back after loading when it holds only plain data (numbers, text, true/false, null, arrays, plain objects, Set, Map, typed arrays; at most 256 KB as text); with anything else in it (functions, your own classes) it starts empty after loading.
- Don't wait for anything: compute and return.

THE VIEW (what your side may know; positions in map tiles, x to the east, y to the south)
{ t: game seconds, step: the game's step counter, me: your side (1 = Gold, 2 = Blue), map: {w, h},
  gold: what gold in your vaults gives a soldier outside your land who stands near a bannerman (0.6-1),
  soldiers: [ only your soldiers OUTSIDE buildings (the ones inside a building are in buildings[].troops; they have no
               id here and take no orders until they are out):
              {id, kind: "sword"|"spear"|"bow"|"banner", arm, rank, xp, hp, maxHp, str, x, y,
               (arm: his armor, 0 none, 1 iron, 2 gold; armor cuts every blow he takes, it adds no health: maxHp is his kind's. rank: his veteran rank 0, 1 or 2 and
               xp: his experience (both 0 while switches.vet is off; see Veterans below). str: his strength now, 100 = full:
               100 on your own land; elsewhere 60, plus up to 40 for gold in your vaults (the 'gold' line above x 100)
               only while a bannerman covers him; a bowman ("bow") there never below 80 (his base is the higher of 80 and
               what gold gives him); plus the bannerman's bonus while one covers him (anywhere). His blows do str/100 of their damage. The player sees it as a bar under each
               soldier. A "banner" is a bannerman: he never fights, takes no building and never goes into one, but
               he can be killed)
               order: null, or {k: "attack", b: building id}, or {k: "move"|"attack-move", x, y},
               fighting, stance: "aggr"|"hold", defends (the id of your building he stepped out of to defend it),
               held, moving, patrol} ],
  buildings: [ your buildings: {id, type, owner, x, y, w, h, door: {x, y}, built (false: still a building site), military,
               troops: ["sword","bow",...] (the soldiers inside, kinds only), troopArm: [0,2,...] (their armor, same
               order; only when one of them wears armor), troopRank: [0,1,...] (their veteran ranks, same order; only
               when one of them has a rank), taken (true: you captured it)} ],
  enemy: { soldiers: [ {id, owner, kind, arm, rank, x, y, hurt, hp, maxHp, str} only the ones you see now (str: as
                       yours, from his side's land, gold and bannermen; rank: as yours, his xp is not shown) ],
           buildings: [ like yours, but instead of troops only manned: true|false. A building you don't see right now
                        is given as you last saw it, with remembered: true and seenAt (the game second you saw it): it
                        may be gone, or manned differently, by now ] },
  over: null or {winners},
  switches: {vault, banner, armor, vet, gear} true|false, the same every turn: which optional mechanics this game has.
            Off: the vault (gold in stock counts instead, 1 bar per soldier), bannermen (no banners; gold counts for
            every soldier away from home) or armor (no armorer; everyone's arm stays 0). Fields keep their shape.
            gear: dropping gear (see Dropping gear below); off: nothing drops.
            Orders for a switched-off mechanic (placing its building, vaultKeep, armyArmor, a banner armyTarget or
            weaponKeep, armorRepair) are refused with why 'switched off: <id>'. vet: veterans (ranks and xp; needs
            banner); off: every rank and xp is 0.
  gear: [{it, x, y}] weapons ('sword', 'spear', 'bow') and broken armor ('brokenarmor') lying where soldiers fell, on
        tiles you see now (switches.gear; empty while it is off). Once on someone's land they become goods on that
        land owner's pile (a pile is not in this list).
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
- ["patrol", {ids: [...], on: true|false}]   mark them as on patrol or scouting: while on, a held soldier who ends a
  plain move does not go into a military building nearby. It stays on until you switch it off (view: patrol)
- ["sendIn", {ids: [...], b: your military building id}]   go inside as garrison
- ["group", {ids: [...], g: 1-5, replace: true}]   remember a group (for yourself)
At most 50 commands per turn ('ask' and 'note' don't count): the game carries out the first 50 and skips the rest, and
view.refused on your next turn says how many were skipped. Wrong or impossible commands are refused and counted.

HOW BATTLES WORK
- Defenders step out one per attacker at the door, fighters first; bowmen inside shoot while a fighter is left, then stop and come down one at a time. A defender at the door cannot be shot from afar: bowmen must duel him.
- The attacker closest to the door takes a building once nobody defends it. A taken building only gets land no other enemy building still covers.
- Outside its own land a soldier fights at its side's gold strength (60% with no gold, 100% with a gold bar per soldier); a bowman there never below 80% (v222).
- Soldiers without an order step back out of arrow range; move routes around known arrow range; attack-move fights on the way.
- A military building calls in the nearest free soldier (no order, not held) standing on your own land; if there is none, the nearest within 20 tiles of its door; otherwise it stays empty, and an empty building can be taken.
- Kinds: spearmen beat swordsmen up close, swordsmen beat bowmen up close, bowmen beat spearmen at range (bowmen shoot
  from about 10 tiles). Blows of one moment are dealt together.
- Military buildings shoot with the bowmen inside at enemies within about 14 tiles of their centre, but only while a
  swordsman or spearman of theirs is left (inside, or out at the door). For each attacker at the door one defender
  steps out and duels him, swordsmen and spearmen first; when none is left the bowmen stop shooting and come down one
  at a time to duel (since 204).
- A defender at a door can't be shot from afar: your bowmen walk up to the door and duel him there (since 204).
- An arena battle: you win when the other side has no soldiers and no military buildings left.
- A full game: a side is out when it has lost its headquarters AND every manned military building; its people are gone
  at once. The last side left wins. So take or empty every military building, and the headquarters.

THE NUMBERS
{
 "units": "positions and distances are in map tiles (x, y as in the view)",
 "kinds": {
  "sword": {
   "hp": 10,
   "melee": 0.5,
   "rate": 0.3
  },
  "spear": {
   "hp": 10,
   "melee": 0.5,
   "rate": 0.3
  },
  "bow": {
   "hp": 7,
   "melee": 0.2,
   "rate": 0.35,
   "shot": 0.375,
   "shotRate": 0.325,
   "range": 10
  },
  "banner": {
   "hp": 10,
   "melee": 0,
   "rate": 0.3
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
   "name": "Small tower",
   "w": 3,
   "h": 3,
   "land": 14,
   "fighters": 2,
   "archers": 1,
   "guards": 1
  },
  "tower": {
   "name": "Big tower",
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
  "Defenders step out one per attacker at the door, fighters first; bowmen inside shoot while a fighter is left, then stop and come down one at a time. A defender at the door cannot be shot from afar: bowmen must duel him.",
  "The attacker closest to the door takes a building once nobody defends it. A taken building only gets land no other enemy building still covers.",
  "Outside its own land a soldier fights at its side's gold strength (60% with no gold, 100% with a gold bar per soldier); a bowman there never below 80% (v222).",
  "Soldiers without an order step back out of arrow range; move routes around known arrow range; attack-move fights on the way.",
  "A military building calls in the nearest free soldier (no order, not held) standing on your own land; if there is none, the nearest within 20 tiles of its door; otherwise it stays empty, and an empty building can be taken."
 ],
 "commands": {
  "march": "{ids:[...], tx, ty, form:\"block\"|\"line\"|\"wedge\", am:false|true, loose:true}",
  "attack": "{ids:[...], b:buildingId}",
  "stance": "{ids:[...], st:\"aggr\"|\"hold\"}",
  "free": "{ids:[...]}",
  "release": "{ids:[...], stop:true}",
  "patrol": "{ids:[...], on:true|false}",
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
- think(view) is called every 2 game seconds, and every second while your soldiers fight. On those extra fight turns
  view.armyOnly is true and view.economy.log is undefined: check before you read the log. If think throws an error,
  that turn gives no orders and the game goes on. Slow turns (over 0.3 s): in the game in the browser such a turn is
  cut off (no orders) and the script is started again, the second time with an empty memory; the third time it is
  switched off for the rest of the game. The arena and tournaments let slow turns through but count them, and the
  report warns when the browser would have switched your script off (and at which game minute).
- The view then also has
  view.economy: { stock: {item: count}, people: {role: count} (carrier, worker, digger, builder, geologist, explorer,
    pioneer; soldiers are not counted here), idle: {role: count with no task},
    homeless (people without a bed: more settlers than beds; carriers lose theirs first), beds, population,
    units: [ {id, role: "explorer"|"geologist"|"pioneer", x, y, busy, moving (still walking), to: {x, y} where sent} ],
    town: [ your buildings, the headquarters ('hq') too: {id, type, x, y, built, worker, paused, prio,
      inputs, outputs (goods lying at the building, each an object {item: count}, never a list: inputs = brought in
      and waiting to be used, outputs = made or stored there and waiting to be carried off; test with
      (b.outputs.plank || 0) > 0), delivered, cost (a site only, {item: count}: goods brought so far, goods needed in all),
      dug (a site: levelled, ready for builders), coming (a house: settlers it still brings),
      range, area (workplaces with a work area), archers, fighters (military buildings: their setting),
      repair (an armorer only: true|false, its repair tick-box, see Dropping gear; false while switches.gear is off)} ],
    land: {tiles, grass, trees, rocks, water, mountain, unsearched}, ore: [ {x, y, ore} ore you have seen signs of ],
    unsearched: [ {x, y, d} mountain on your land no geologist has searched, nearest first ],
    spots: { type: [ {x, y, d, n} ] } answers to last turn's ['ask', {spots: [types]}]: places where that building
      may stand now, best first (n = trees/rocks/fish water/free grass/known ore in reach, or new land for military).
      Ask for at most 6 types a turn; you get at most 8 places for each, all on your own land }
- HOW A TOWN WORKS. The data files buildings.js and items.js that come with this kit (in the AI challenge they lie
  next to it) give every building's cost, tool, inputs, recipe, range, food and a line on what it does. In short:
  - Settlers come from houses (house 10, house2 20, house3 50, each with as many beds) and start as carriers. Carriers
    carry every good and all building materials, and every other job is filled from the idle carriers.
  - A workplace needs one settler: an idle carrier becomes its worker and, for most workplaces, first fetches the tool it
    needs (buildings.js: tool). No idle carrier or no spare tool: the workplace stands still. The toolsmith (smith)
    makes tools from coal and iron.
  - A building site is levelled by diggers and then built by builders, with planks and stone carried to it.
  - Mines only work while they get food (buildings.js: foods); ore lies where a geologist found signs of it.
  - Soldiers: the weaponsmith makes weapons from coal and iron; at the barracks an idle carrier picks up a weapon and
    becomes a soldier. armyTarget {kind, d} is how many soldiers of that kind you want OUTSIDE buildings (at the start
    sword 4, bow 2, spear 2, banner 0): military buildings call free soldiers in, and the barracks trains again up to the
    target. weaponKeep {k, d} is how many spare weapons of a kind to keep in stock (0-9, at the start 1; banner 0).
  - Bannermen (army test version): the weaponsmith makes a banner from 1 plank + 1 gold bar (he asks for planks and
    gold only while banners are wanted: armyTarget banner or weaponKeep); at the barracks an idle carrier picks it up
    and becomes a bannerman (kind "banner"). He gives +10 strength to the soldiers of your side closest to him (outside
    buildings); his veteran rank sets how many and how far: rank 0 8 within 5 tiles, rank 1 10 within 6, rank 2 12
    within 7 (rank 0 while switches.vet is off; his armor only protects him). Anywhere. One bannerman per soldier: a
    soldier goes to the nearest bannerman whose ring reaches him and who still has room (else the next nearest) and
    gets his bonus once; only covered soldiers get the gold bonus outside your land.
    He never fights, never takes a building and never goes into one (soldiers in towers get no banner bonus); enemies
    can kill him like any soldier. A bannerman ordered to attack keeps just behind the soldiers attacking with him.
  - Armor (army test version): the armorer (type armorer) makes iron armor from 1 iron and gold plates from 2 gold;
    it asks for iron and gold only while armor is wanted. armyArmor {kind, d} (or set: 0 none, 1 iron, 2 gold, at the
    start 0 for every kind; view.economy.army.armor) says what a kind should wear: the barracks trains new soldiers of
    that kind in it (iron armor, plus gold plates for gold; it waits for them), and first sends free soldiers of that
    kind outside towers who wear less to its pile to put it on (gold = iron armor + gold plates). Armor adds no health
    (maxHp stays 10 for a swordsman): every blow and arrow its wearer takes is cut by a fixed amount, iron 0.05, gold
    0.08 (a swordsman's blow is 0.5 at full strength, 0.3 away from home; hp counts in the same sizes), and a blow
    keeps at least 10% of itself. It is never taken off; soldiers keep it inside buildings. A full building: a soldier sent in who wears better armor than one of his slot type inside swaps with the
    weakest (guard swordsmen only for another swordsman), who walks out.
  - Dropping gear (switches.gear; army test version): a soldier who falls drops, 1 time in 4, either (half and half)
    his iron armor as broken armor or his weapon, usable as it is. Gold armor and a bannerman's banner never drop (that
    half gives nothing; so does the armor half for a soldier without armor). It lies on his tile (view.gear); whoever
    owns that land gets it: within a second it becomes goods on his pile, and his carriers take it on like any goods
    (a weapon to the barracks, broken armor to a store slot set to it or to an armorer with repair on). On no one's
    land it keeps lying; it never vanishes. Broken armor ('brokenarmor') is a stock good (view.economy.stock).
    armorRepair {b, on} turns an armorer's repair on or off (off at the start; your town list shows repair true|false
    on an armorer): with it on he asks for broken armor and one coal for each, repairs first (1 broken armor + 1 coal
    = 1 iron armor), then makes new armor as before.
  - Veterans (switches.vet; army test version): a soldier's xp is the health he deals plus the health he takes, in
    every fight (a bowman on a tower wall earns none): rank 1 at 20 xp, rank 2 at 60 (health as hp in the view: a
    swordsman has 10). A bannerman's xp is the health dealt by the soldiers he covers: rank 1 at 200, rank 2 at 500. Ranks
    are kept inside buildings (troopRank) and seen on enemy soldiers (a stripe on the helmet). The only perk so far: a
    bowman of rank 1 or 2 never misses. Gold: with veterans on, the full gold bonus outside your land needs 4 / 5 / 6
    vault bars per soldier outside towers by rank 0 / 1 / 2 (view.gold already counts it). A full building's armor
    swap ignores rank.
    toolKeep {k, d} (since v209) is how many spare tools of a kind the smith keeps in stock (0-9, at the start 1 each;
    k is the position in view.economy.toolPlan, d 'up' moves it one place up the order). The smith first makes tools
    for finished buildings that wait for a worker with one, then fills these spares in order.
  - Land: buildings may only stand on your own land. A military building pushes your border out (guard 14, tower 20,
    castle 26 tiles) only once a soldier is inside. A lookout tower (look) uncovers the map 24 tiles around; no land.
  - Gold (army plan, test version): outside your land a soldier fights at 60% strength (a bowman at 80% at least: the
    higher of 80% and what the gold gives him), plus up to 40% from the gold
    kept in your VAULTS (type vault, 3x3, 3 planks + 4 stone) while a bannerman covers him: full strength takes 4 bars
    per soldier outside towers (soldiers in military buildings, bannermen and the headquarters guard don't count). Gold anywhere else does not count. Carriers
    bring gold to a vault until it holds its 'keep' setting (0-40, at the start 40; your town list shows keep and
    inputs.gold); gold never comes out of a vault again. vaultKeep {b, d} changes it (or set: an exact number). When an
    enemy takes the land under a finished vault, the vault and its gold become theirs (it is not burned). view.gold is
    what the vault gold gives a covered soldier outside your land now (0.6-1).
- profession {role, d}: d 1 retrains an idle carrier, d -1 makes one a carrier again. role is one of: explorer (takes 1
  plank; walks where you send him and uncovers the map), geologist (takes a pickaxe; searches the mountain where you
  send him), pioneer (takes a shovel; claims land nobody owns, tile by tile, where you send him outside your border),
  digger (a shovel), builder (a hammer). It needs that tool lying spare, an idle carrier, and more than 2 carriers.
  Careful: a profession order that could not be done is NOT in view.refused; look at view.economy.people on a later
  turn. Send no other role names. Explorers, geologists and pioneers are in view.economy.units; move them with sendUnit.
- More on some orders: pause {b, on} works on a building site only. workArea {b, x, y} moves the middle of a
  workplace's work area (x: null = back around the building). storeSlot {b, k, it}: a stockpile (store) has 4 slots,
  k 0-3; set a slot to an item (it) and carriers bring up to 8 of it there (it: null clears the slot); the view does
  not show the slots. distUp {it, k}: for every good the game keeps a list of building types in the order they get it
  first; this moves entry k of the list for good it one place up; the view does not show these lists.
- Economy commands: place {type, x, y}, demolish {b}, priority {b, on}, pause {b, on}, workArea {b, x, y},
  workRange {b, d}, storeSlot {b, k, it}, profession {role, d: 1|-1}, sendUnit {u, tx, ty}, weaponKeep {k, d}, toolKeep {k, d},
  vaultKeep {b, d}, armorRepair {b, on}, armyTarget {kind, d}, armyArmor {kind, d}, archers {b, d}, fighters {b, d}, workOrder {k, d: -1|1} (move a job in your carriers' work list,
  view.economy.work: staff, recruit, sites, workshops, clear, surplus), priority {b, on} (a site, or a finished
  workplace: first for a worker and goods until it has them; a military building: manned first until full), distUp
  {it, k}, armyList {on} (military buildings call soldiers by your list instead of oldest first), armyOrder {k, d}
  (steps guards, border, rest), armyReserve {d or set} (free soldiers the buildings leave in the field); plus the army
  commands above. Instead of a step d, workRange, archers, fighters, weaponKeep, toolKeep, vaultKeep, armyTarget, armyArmor and armyReserve also take
  set: an exact number (kept within the same limits; armyTarget by set has no top of 40).
- Mines may stand anywhere on the mountain; signs (view.economy.ore) show where the ore is. Signs go after 10 minutes.
- THE MAP (full game): view.map = {w, h, known, ter, tree, stone, owner, height, occupied, fish, ore, oreNames, at(x,y)}.
  Each layer is a Uint8Array with one value per tile, index y*w+x, as far as your fog of war allows: known 0 = never
  seen (all other layers 0 there), 1 = seen before (as it was then, height included), 2 = seen now (your own land always). ter 0 grass,
  1 water, 2 mountain; tree 2 grown, 1 young; stone = rocks left; owner = side (0 nobody); occupied 1 = something
  stands there (seen now only); fish = fish left in that water (seen now only); ore 0 not searched by a geologist,
  1 searched: nothing, 2+ = oreNames[ore-1]. oreNames is a plain list (since 201), the same for every value of ore:
  ['none', 'coal', 'ironore', 'goldore', 'stone'], so oreNames.indexOf(kind) + 1 gives the ore value. map.at(x,y) gives one tile as an
  object with the same names, but two of them in words: {known, ter: 'grass'|'water'|'mountain', tree, stone, owner,
  height, occupied, fish, ore: an ore name, 'none' (searched: nothing) or null (not searched)}; null outside the map.
  Decide yourself where to build and where to expand: the map is all you need.
- canPlace(type, x, y): true when a building of that type may stand with its top-left corner on tile x, y right now
  (whole tiles; the game's own rules: on your land, flat enough, free of trees, rocks and other buildings, room around
  it, a free tile in front of the door, mines fully on the mountain, military buildings out of enemy arrow range).
  Instant and free: call it as often as you like. Sizes (w x h tiles, door side): wood 3x3, forest 3x3, saw 3x3 east, fisher 3x3, waterhut 3x3, farm 4x3, mill 3x3, bakery 3x3 east, pigfarm 3x3, butcher 3x3, coalmine 3x3, ironmine 3x3, stonemine 3x3, goldmine 3x3, goldsmelter 3x3, smelter 3x3, smith 3x3 east, quarry 3x3, house 3x3, house2 5x4, house3 6x5, store 3x3, look 2x2, guard 3x3, tower 5x4, castle 8x7, vault 3x3, weaponsmith 3x3 east, armorer 3x3 east, barracks 3x3 (door south unless east).
  x grows to the east, y to the south.
- view.refused: last turn's orders the game refused, as {order, args, why} (for place: the reason, like 'Too steep';
  'switched off: <id>' for a mechanic this game has switched off, see view.switches); at most 30.
- view.economy.loose: goods lying loose on your land {item: count}. view.economy.army: your army settings: target
  {sword, spear, bow, banner}, armor {sword, spear, bow, banner} (0-2, armyArmor), keep [{weapon, keep}] (weaponKeep's k is the position in this list, 0 first), reserve, list.
  view.economy.toolPlan (v209): the spare tools your smith keeps, in order [{tool, keep}] (toolKeep's k is the position).
- view.economy.spots (the 'ask' helper) still works, but you don't need it.
- THE GAME LOG (full game): view.economy.log = everything that happened to your side since your last economy turn
  (newest last, at most 400): {t, p, what, a, b, c, s, other}. what: 'place' (a building id, b/c x/y, s type), 'finish',
  'demolish' (b 1 = burned), 'order' (a 1 accepted / 0 refused; s the order, with the reason when refused), 'deliver'
  (a building id, s item), 'econ' (a amount, s item, b kind: 0 produced 1 consumed 2 lost 3 captured), 'profession'
  (s 'carrier -> worker'), 'pathfail' (someone found no way: s who, task and why), 'attack' / 'capture' (other = the other
  side), 'kill' (p whose person fell, other the killer), 'seen' (first sight of another side's land), 'watch' (a warning),
  'note', 'task' (one of your people starts a new order: a person id, s like 'carrier haul log wood -> saw' or 'worker
  gather wood'; b/c building ids or target), 'taskend' (that order ended: a person id, b tenths of a second, s 'done' or
  'failed: why'), 'tip' (every game minute, each of the advisor's tips for your side that holds now: a the game minute,
  s 'kind: text', kinds land, ore, weapons, stall, army, settlers, orders, timing; the player sees the same tips under
  Goals). The current tips are also in view.economy.tips: [{k, text}] (k: the kind; renewed every game minute).
  Only what your side may know.
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
