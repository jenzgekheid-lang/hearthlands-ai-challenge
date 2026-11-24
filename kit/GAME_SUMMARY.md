# Hearthlands: how the game works (for AI scripts)

**Version this describes:** game version 251 (23 Nov 2026), with every switch on (see "Switches" below). The tables marked *generated* are written by
`node tools/summary.js` from the game's code and checked by the quick checks (`tests/kit.js`); run it after a game change.
The prose is written by hand, so change it in the same version as the game. The order names, view fields and arguments
are in the kit section of the challenge page (`AI_SCRIPT_CHALLENGE.md`, rebuilt from `src/arena/brainkit.js`).

Hearthlands is a Settlers-style town and war game. Every player, human or script, plays by the same rules: the same
costs, the same workers, the same walking, the same fog of war.

## The map and the players

- A square grid of small tiles. Maps may grow, so do not assume one size.
- Player slots, named Gold, Blue, Purple, Teal, Pink, White, Orange and Lime. Players can form teams.
- The land has grass, water, sand, mountains, forest and rock. Sand lies along the sea and the big lakes (1 tile where
  the shore is steep, 2-3 where it is flat and low; small lakes have grass shores): you can build anything on it, but no fields are sown and no trees
  are planted there. Mountains hold ore: coal, iron ore, gold ore and stone. Coal
  deposits hold three times as much. A geologist must find ore in a mountain before a mine can work it.
- Every start gets the same: a forest of 25 trees and a patch of 13 rocks (6 stone each) close by, on land (never
  lost to a lake), and a mountain with coal and iron about 17 tiles out. There is room to build at every start: no
  wild forest within 12 small tiles of it, thinning out up to 18. Everything else on the map differs.
- Hill sides that face away from the camera are gentle (at most 1 height step lower per tile towards the back), so
  nothing hides behind a hilltop. A site on such a far side whose ground rises toward the camera by more than 3 height
  steps is refused ('Too steep: the far side of a hill'); a site that is too uneven anywhere is refused as before.
- Nobody walks or stands where a built building would hide him on the screen: behind each built building (towards
  smaller x and y) lies a band of tiles that people can't enter (deeper for taller buildings; none for mines and open
  yards; never over another building, a door or the 2 tiles in front of a door). A site whose door would lie in such a
  band is refused ('Nobody can walk to the door').

The numbers (*generated*):

<!-- generated:numbers -->
| Setting | Value |
|---|---|
| Map size, up to four players | 240 × 240 small tiles |
| Map size, more than four players | 320 × 320 small tiles |
| Player slots | 8 |
| Beds in the headquarters | 10 |
| Swordsmen at the start (plus the guard at the headquarters) | 6 |
| Bowmen at the start | 3 |
| Seconds between new settlers from a house (game seconds, normal speed) | 1.8 |
| Game seconds per simulation step | 0.1 |
<!-- /generated:numbers -->

## Fog of war

- Land is one of three kinds: visible now, remembered (seen before), or never seen. Your script only knows what your
  side has seen.
- Remembered land keeps what was seen then, its height included: levelling behind the fog stays hidden until someone
  looks again. Never-seen land has height 0 in a script's map.
- Enemy buildings show whether they are manned, not who is inside. Scripts never see enemy soldiers that are inside a
  building, only that it is manned.
- Fog in the game is handled in `src/world/fog.js`.

## People

- **Houses:** new settlers come from houses at the rate in the numbers table above.
- **Roles:** carrier (moves goods), worker (works a building; needs the tool for its job), builder, digger (levels the
  ground for a site), geologist (searches mountains for ore), explorer (uncovers the map), pioneer (the role that claims
  land for the border) and soldier. A profession order changes a person's role.
- **Tools:** workers take tools from stock. The tools and what makes them are in `src/data/items.js`. A tool shortage
  stops the work that needs it (for example a woodcutter without an axe). The toolsmith counts only spare tools (not
  claimed, in your buildings or lying on your land), not tools in people's hands.
- **Carriers** serve the workshops that wait for the same rank of goods by the shortest trip minus the time each has
  waited (1 minute counts as 10 tiles), so a far workshop still gets its turn.
- **Everything walks.** People walk the map along paths. Goods lie on visible piles and are carried by carriers. Nothing
  teleports.

## Buildings and production

- A site is placed, levelled by a digger, then built by builders from the materials that are delivered to it.
- Every building type with its cost, tool, inputs and output (*generated*, from `src/data/buildings.js`):

<!-- generated:buildings -->
| Building | Id | Cost | Tool | Inputs | Makes | What it does |
|---|---|---|---|---|---|---|
| Headquarters | `hq` | — | — | — | — | — |
| Woodcutter | `wood` | 2 plank, 2 stone | axe | — | — | Fells trees into logs |
| Forester | `forest` | 3 plank, 1 stone | shovel | — | — | Plants new trees nearby |
| Sawmill | `saw` | 3 plank, 4 stone | saw | log | plank (from log) | Turns logs into planks |
| Fisher | `fisher` | 3 plank, 2 stone | rod | — | — | Catches fish in water next to your land, within its range. Fish slowly come back |
| Hunter | `hunter` | 3 plank, 2 stone | bow | — | — | Hunts game where trees stand together (forest), within its range, and brings meat. Needs a bow: hunters get bows before bowmen. Game slowly comes back in forest; where the forest is cut, it is gone |
| Water hut | `waterhut` | 3 plank, 4 stone | — | — | — | Fills buckets at water next to your land, within its range. Water belongs to nobody: build it by a lake or the sea |
| Grain farm | `farm` | 6 plank, 6 stone | scythe | — | — | Sows fields on open green land nearby and harvests the grain |
| Mill | `mill` | 3 plank, 3 stone | — | grain | flour (from grain) | Grinds grain into flour |
| Bakery | `bakery` | 4 plank, 5 stone | — | flour, water | bread (from flour, water) | Flour + water make bread |
| Pig farm | `pigfarm` | 6 plank, 6 stone | — | grain, water | pig (from grain, water) | Grain + water raise pigs |
| Slaughterhouse | `butcher` | 4 plank, 4 stone | axe | pig | meat (from pig) | Turns pigs into meat |
| Coal mine | `coalmine` | 4 plank, 1 stone | pick | bread, fish | — | Build anywhere on the mountain; signs of a geologist show where the coal is. Eats bread; fish only while no bread is in stock. 1 meal = up to 10 trips, not every trip finds ore |
| Iron mine | `ironmine` | 4 plank, 1 stone | pick | meat, fish | — | Build anywhere on the mountain; signs of a geologist show where the iron ore is. Eats meat; fish only while no meat is in stock. 1 meal = up to 10 trips, not every trip finds ore |
| Stone mine | `stonemine` | 5 plank | pick | bread, fish | — | Build anywhere on the mountain; signs of a geologist show where the stone is. Eats bread; fish only while no bread is in stock. 1 meal = up to 10 trips, not every trip finds ore |
| Gold mine | `goldmine` | 5 plank, 1 stone | pick | fish, bread, meat | — | Build anywhere on the mountain; signs of a geologist show where the gold ore is. Eats fish; bread or meat only while no fish is in stock. 1 meal = up to 10 trips, not every trip finds ore |
| Gold smelter | `goldsmelter` | 4 plank, 6 stone | hammer | coal, goldore | gold (from coal, goldore) | Coal + gold ore make gold. Gold kept in a vault makes soldiers stronger outside your land |
| Iron smelter | `smelter` | 4 plank, 6 stone | hammer | coal, ironore | iron (from coal, ironore) | Coal + iron ore make iron |
| Toolsmith | `smith` | 3 plank, 5 stone | hammer | coal, iron | tool (from coal, iron) | Coal + iron make tools. Set what to make by tapping it |
| Stonecutter | `quarry` | 2 plank, 3 stone | pick | — | — | Cuts stone from outcrops |
| Small house | `house` | 3 plank, 3 stone | — | — | — | 10 beds. Brings 10 new settlers, one every few seconds, while beds are free |
| Medium house | `house2` | 5 plank, 6 stone | — | — | — | 20 beds. Brings 20 new settlers, one every few seconds, while beds are free |
| Large house | `house3` | 10 plank, 12 stone | — | — | — | 50 beds. Brings 50 new settlers, one every few seconds, while beds are free |
| Stockpile | `store` | 2 plank | — | — | — | 4 slots. Set each slot to a good or tool; a slot holds a stack of 8 |
| Lookout tower | `look` | 2 plank, 4 stone | — | — | — | A scout moves in and uncovers the fog 24 tiles around. No territory |
| Goods on the ground | `pile` | — | — | — | — | — |
| Rubble | `rubble` | — | — | — | — | — |
| Small tower | `guard` | 2 plank, 3 stone | — | — | — | Room for 2 fighters (1 swordsman always on guard) and 1 archer. Pushes your border out 14 tiles |
| Big tower | `tower` | 5 plank, 5 stone | — | — | — | Room for 3 fighters (2 swordsmen always on guard) and 3 archers. Pushes your border out 20 tiles |
| Castle | `castle` | 8 plank, 12 stone | — | — | — | Room for 5 fighters (3 swordsmen always on guard) and 5 archers. Pushes your border out 26 tiles |
| Vault | `vault` | 3 plank, 4 stone | — | gold | — | Holds up to 40 gold bars; it starts keeping none: tap it to set how many to keep. Gold in vaults makes soldiers stronger outside your land (4 bars per soldier outside towers for full strength). Gold never comes out again; if the enemy takes the land, the vault and its gold are theirs |
| Weaponsmith | `weaponsmith` | 5 plank, 7 stone | hammer | coal, iron, plank, gold | weapon (from coal, iron) | Coal + iron make swords, bows and spears; a plank + a gold bar make a banner. Tap it to set what to make |
| Armorer | `armorer` | 4 plank, 5 stone | hammer | iron, gold | armor (from iron) | Iron makes iron armor; 2 gold bars make gold plates (iron armor + gold plates = gold armor). Soldiers put armor on at the barracks |
| Barracks | `barracks` | 4 plank, 5 stone | — | sword, bow, spear, banner, armor, plate | — | A carrier picks up a weapon (or a banner) here and becomes a soldier (or a bannerman). Set how many of each you want |
<!-- /generated:buildings -->

- Production chains: woodcutter (logs), sawmill (planks), quarry (stone), forest (plants trees for the woodcutter),
  farm (grain), mill (flour), bakery (bread), water hut (water), pig farm and butcher (meat), fisher (fish), mine (ore;
  it needs food to work), smelter (iron or gold), smithy and weaponsmith (tools and weapons), barracks and tower
  (soldiers).
- A finished workshop or mine asks for no inputs while its output pile is full, a toolsmith while it has no tool to
  make, and a weaponsmith gets no coal or iron while no sword, bow or spear is wanted (banners keep their planks and
  gold). Nothing already delivered is taken back.
- A building stops when its output pile is full. Carriers only take goods somewhere that needs them, so the game log
  records `pile full, nothing needs it right now` when you have idle carriers (build or feed what uses those goods), and
  `pile full, waiting for carriers` when every carrier is busy (more settlers or houses help).

## Land and territory

- Each building claims land around it. A border separates your land from the enemy's.
- Water belongs to nobody: only land is claimed, so a border ends at the shore (and may go on across a lake). A fisher
  or water hut uses water within its range that touches your land; two sides may fish the same lake.
- Fisher's dock: a fisher needs a 2-tile dock over water out of his south side (else east, else west; never north),
  part of the building, and fishes within 6 tiles of its end.
- Hunter's cabin: game lives in forest (a tile with 6+ grown trees in the 5x5 around it; 2 animals per tile, slowly
  coming back, gone where the trees are cut). A hunter needs a bow (hunters get bows before bowmen; every side starts
  with 2 bows) and brings meat. Meat feeds coal and iron mines, not gold mines (see the buildings table).

## Military

- Soldiers come from barracks. Your army target tells the game how many of each weapon kind to make (`armyTarget` in the
  kit).
- Military buildings hold soldiers and guard their land. Soldiers fight when enemies come into reach. In a duel only the
  living soldiers strike.
- A side attacks by sending soldiers against an enemy building. The building is captured when the attackers take it
  (game log: `attack` and `capture`).
- A tower takes soldiers up to the numbers it wants (its guard plus the fighters and archers to keep, set with + / -).
  Idle held soldiers within 20 tiles of its door fill those slots; after a Move order the soldiers stay where they were
  put. Ordered into a full tower, a soldier in better armor swaps with a weaker-armored one at the door.
- Hits are fine-grained (four times as many, each a quarter as strong), and every soldier has a strength number with
  its breakdown (shown in the game).
- **Strength away from home:** on your own land a soldier fights at full strength (plus a bannerman's bonus). Away from it his base is 60%, and
  gold kept in your vaults lifts it by up to 40 points, but only for soldiers covered by a bannerman. Full lift costs
  4 vault bars per soldier outside towers (5 at rank 1, 6 at rank 2). A bowman away from home never fights below 80%.
- **Vault:** holds up to 40 gold bars and starts keeping none: carriers bring gold only once you raise its setting
  (`vaultKeep`). Gold never comes out again; whoever takes the land takes the vault and its gold.
- **Bannermen:** a banner (plank + gold bar) is made at the weaponsmith; a carrier picks it up at the barracks. A
  bannerman never fights but can be killed. He gives +10 strength to the soldiers of his side closest to him outside
  buildings: 8 within 5 tiles at rank 0, 10 within 6 at rank 1, 12 within 7 at rank 2. Each soldier counts for one
  bannerman only.
- **Armor:** the armorer makes iron armor (1 iron) and gold plates (2 gold; iron armor + plates = gold armor); the
  barracks sets none, iron or gold per soldier kind. Armor cuts every blow and arrow its wearer takes by a fixed amount
  (iron 0.05, gold 0.08 in the fine hit sizes), never below 10% of the blow; it adds no health.
- **Veterans:** soldiers gain XP from health dealt plus taken (not as bowmen on a wall): rank 1 at 20, rank 2 at 60. A
  bannerman's XP is the health dealt by the soldiers he covers (rank 1 at 200, rank 2 at 500). A bowman of rank 1 or
  more never misses; higher ranks cost more vault gold (above).
- **Dropping gear:** a fallen soldier drops something 1 time in 4: half the time his iron armor as broken armor
  (nothing for gold armor or none), else his weapon (nothing for a banner). The land owner's carriers pick it up
  (weapons go to the barracks). An armorer with repair on (`armorRepair`) makes 1 broken armor + 1 coal into iron
  armor, repairs first, and keeps up to 6 broken armor waiting.
- Soldier and tower numbers, and healing, are in `src/data/combat.js`.

## Advice and building status

- The advisor gives tips under Goals (land, ore, weapons, stalls, carriers, army, settlers, orders, timing), for
  example 'too few carriers: build more houses' when a building type waits for goods that lie in stock while no carrier
  is idle. A script sees its current tips in `view.economy.tips`, and each of its own buildings' current status text
  (`view.economy.town`, e.g. 'Waiting for food').

## Switches

Optional mechanics are switches, fixed for a whole game and shown to scripts in `view.switches`. Today all
of them are on everywhere (live game, tester build, arena, lab, tests; Jens, 19 Nov 2026): `vault`, `banner`, `armor`, `vet`, `gear`,
`dock`, `hunter`, `carryfair`, `backslope`, `behind`; this summary describes the game with them on. An order for a
switched-off mechanic is refused with `switched off: <id>`. One switch starts off: `scriptInfo` (extra per-minute
numbers in a script's view; see the kit). What each one does when off: `docs/SWITCHES.md`.

## Winning, losing and time limits

- A side is **defeated** when it has lost its headquarters and every manned military building. Its people then leave the
  map (game log: `defeat`).
- The last side not defeated wins. In the arena a game ends after 60 game minutes; if two sides are still alive, the
  game is undecided.

## Game time and turns

- The game moves in steps of 0.1 game seconds, the same at any speed and frame rate. The same orders on the same map
  give the same game.
- An economy turn runs every 2 game seconds. While one of the script's soldiers fights, the turn runs every second.
- A turn may take at most 0.3 s of real time. A slower turn is an error, and that turn gives no orders.

## Orders

- Your script gives orders as a list of commands. Each order goes through the same command code that the player uses,
  and each has the same rules.
- An order can be refused: a building cannot be placed where it stands, a person is not free, or there is no stock. The
  refusal comes back in `view.refused` with the reason, and it is written in the game log as an `order` event with
  `accepted 0`.
- At most 50 orders a turn (`ask` and `note` have their own limits): the rest are skipped, and the next `view.refused`
  says how many.
- The kit lists every order and its arguments.

## The game log

The game log is one record of everything that happens in a game. It is kept in full, the same in every game (your own,
watched, arena, tests and tournaments), and it is saved with the game. It only reads the game: it never changes what
happens, and it is left out of the fingerprint that checks games.

**What a script gets:** its own side (`view.economy.log`), and it can write notes with `["note", {text}]`, at most 5
per turn and 200 characters each. After a game, the tournament report shows the script's own side. The other side is
shown only when the report was started with the reveal option (or the `reveal-log` label on a pull request).

**Event kinds** (*generated* from `src/sim/gamelog.js`; each event has a time, a player, a few numbers and a text):

<!-- generated:events -->
| Event | What its fields hold |
|---|---|
| `place` | building id, x, y; s: type |
| `finish` | building id; s: type |
| `demolish` | building id, burned 1/0; s: type |
| `capture` | building id; s: type; p: who took it, d: who lost it |
| `attack` | building id; s: type; p: attacker, d: defender |
| `kill` | person id; s: kind or role; p: owner of the fallen, d: the killer |
| `defeat` | p: the defeated player |
| `order` | accepted 1/0; s: order name, with the reason when refused |
| `pathfail` | person id, to x, to y; s: role (task) reason |
| `deliver` | building id; s: item |
| `econ` | amount, kind index (ECON_KINDS); s: item |
| `watch` | level 0 error 1 warn 2 info 3 debug; s: code: message |
| `note` | s: the AI script's own note (memory.log) |
| `seen` | first time a player saw another player's land or buildings; d: the other player |
| `ui` | count; s: what the player used (button or panel) |
| `profession` | person id; s: new role |
| `task` | person id; b, c: haul from and to building id, dig/build/work building id (work: c = 1 + target tile index y*w+x), fetch tool: from building id, else target x, y; s: the order (role, what, building types) |
| `taskend` | person id, how long in tenths of a second, the furthest step reached; s: done, or failed and why |
| `tip` | game minute; s: the advisor's tip (sim/advisor.js), every minute while it holds: kind: text |
<!-- /generated:events -->

**Snapshots:** every game minute, for each player: stock of each good, buildings by type (built and sites), people by
role, soldiers by kind, land, seen tiles, beds, idle carriers, goods waiting to be carried, and how much each economy
counter changed in that minute.

**Status time:** every game second, each building's status is counted per player and building type. The statuses are
things like working, waiting for a worker, waiting for an ingredient, no worker, pile full, stacking outside and paused.
The report turns these into percentages of each building's time.

**What the report tables mean:**

- *Stock every 15 minutes:* the goods in stock, the idle carriers, the goods waiting to be carried, your land and the
  tiles you have seen.
- *What the buildings did:* the share of each building's time spent on each status after it was built. A high share of
  `pile full, waiting for carriers` means you are short of carriers; `pile full, nothing needs it right now` means the
  goods have no use yet. Check the `task` and `taskend` events for the carriers.
- *Building sites:* the time each site spent waiting for materials, a digger, a builder, or being levelled.
- *Build order:* when each building was placed and when it was finished.
- *Orders given and refused:* counts per order name, and any refusals with their reasons.
- *People's orders:* the orders your people got, and whether each was done or failed, with the failure reason.

**Who can read what:** a side reads the events of its own side and the events that name it as the other side. The whole
log is read only after a game, when it is revealed.
