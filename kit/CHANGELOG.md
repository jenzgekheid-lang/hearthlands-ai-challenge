# Kit changelog

Generated with tools/kit-version.js; read VERSION and this file before editing a script.

## v252

v252-9b6f73b92453: kit changed

```diff
Kit v251-85772af1bc4d -> v252-9b6f73b92453: kit changed (challenge brief)

### challenge brief
@@ line 7 @@
  the game version of the latest report.
  
+ ## Changes that can break older scripts
+ 
+ Read kit/CHANGELOG.md for every change per game version. These ones make an older script play worse without an error:
+ - **Vaults start at 0 gold (since game version 248, 22 Nov 2026).** A new vault keeps nothing until you raise its
+   setting: send `vaultKeep {b, d}` (or `set`) for each vault, up to 40. A script that never does gets no vault gold,
+   so its soldiers fight at 60% outside its land.
+ - **Default coal and iron order (since game version 252, 24 Nov 2026).** Coal now goes to the weaponsmith right after
+   the smelter, iron to the armorer right after the smith. A script that moved them up with `distUp` from the old
+   default now moves other entries: start from smelter, weaponsmith, gold smelter, smith (coal) and smith, armorer,
+   weaponsmith (iron).
+ 
  ## The task
  
```

## v251

v251-85772af1bc4d: kit changed

```diff
Kit v250-0e16313ef661 -> v251-85772af1bc4d: kit changed (kit (AI_SCRIPT_CHALLENGE.md), GAME_SUMMARY.md)

### kit (AI_SCRIPT_CHALLENGE.md)
@@ line 293 @@
      {b, d} raises it), so the 3 start bowmen stand idle until you ask; any one soldier inside, a bowman too, makes the
      building push your border out, also while it still waits for its swordsman (status 'Waiting for a swordsman: ...').
+   - The start goods and people (23 Nov): piles around headquarters hold 24 planks, 18 stone, 4 logs, 6 fish and the
+     only tools you get until a toolsmith works: 5 pickaxes, 3 hammers, 2 axes, 2 shovels, 1 saw, 1 fishing rod, 2
+     scythes (plus 2 bows with the hunter's cabin). The people: 2 diggers, 2 builders and 6 carriers. Every worker who
+     needs a tool takes one from these (a geologist or miner a pickaxe, a toolsmith or builder a hammer, a forester or
+     digger a shovel): spend them on extra builders or geologists first and the toolsmith or the first mines can wait for
+     ever ('Needs a worker with ...'). Keep a hammer for the toolsmith and pickaxes for the first coal and iron mines.
+   - Lessons (23 Nov 2026, #96: where towns lock up for good, found by the lab's open player; each is how the game works):
+     1. Workers come from carriers. Staffing stops while you have 2 carriers or fewer (status 'Waiting for a free
+        settler'), so with the 6 start carriers only 4 workplaces get a worker before your first house brings settlers
+        (house 10, house2 20). Food huts (fisher, hunter, waterhut) are workplaces too: place a house before the 5th.
+     2. Until a stonecutter (quarry) works, the 18 start stone is all your stone; until a sawmill works, the 24 start
+        planks are all your planks. Keep 2 planks + 3 stone for the first quarry and 3 planks + 4 stone for the first
+        sawmill; a town that spends them first never gets stone or planks again.
+     3. A forester and a digger each take a shovel, and you start with 2: keep one for the first forester.
+     4. A site whose status starts with 'No way' (no way to the site for diggers or builders) is not built while there
+        is no way; demolish {b} it and place it elsewhere. A site that waits many minutes for one thing is worth the
+        same look.
+     5. A woodcutter with no grown trees in range says 'No grown trees in range' and makes no logs; a quarry with no
+        rocks 'No stone in range'. Replace it where view.economy.spots finds trees or rocks (or plant with a forester).
+     6. A mine where no geologist found its ore mines nothing ('Deposit worn out: finding little ...'). A step of your
+        plan that can't be done yet (no ore known, no room, no tool) should wait without stopping the other steps: a
+        script that stops at such a step builds nothing more.
    - Where the enemy is (two players): the two headquarters stand on the same row, mirrored across the map's middle:
      the enemy's is near (view.map.w - your x, your y). You only see his buildings once your land or a unit sees them:

### GAME_SUMMARY.md
@@ line 1 @@
  # Hearthlands: how the game works (for AI scripts)
  
- **Version this describes:** game version 211 (14 Nov 2026). The tables marked *generated* are written by
+ **Version this describes:** game version 251 (23 Nov 2026), with every switch on (see "Switches" below). The tables marked *generated* are written by
  `node tools/summary.js` from the game's code and checked by the quick checks (`tests/kit.js`); run it after a game change.
  The prose is written by hand, so change it in the same version as the game. The order names, view fields and arguments
@@ line 18 @@
    deposits hold three times as much. A geologist must find ore in a mountain before a mine can work it.
  - Every start gets the same: a forest of 25 trees and a patch of 13 rocks (6 stone each) close by, on land (never
-   lost to a lake), and a mountain with coal and iron about 17 tiles out. Everything else on the map differs.
+   lost to a lake), and a mountain with coal and iron about 17 tiles out. There is room to build at every start: no
+   wild forest within 12 small tiles of it, thinning out up to 18. Everything else on the map differs.
+ - Hill sides that face away from the camera are gentle (at most 1 height step lower per tile towards the back), so
+   nothing hides behind a hilltop. A site on such a far side whose ground rises toward the camera by more than 3 height
+   steps is refused ('Too steep: the far side of a hill'); a site that is too uneven anywhere is refused as before.
+ - Nobody walks or stands where a built building would hide him on the screen: behind each built building (towards
+   smaller x and y) lies a band of tiles that people can't enter (deeper for taller buildings; none for mines and open
+   yards; never over another building, a door or the 2 tiles in front of a door). A site whose door would lie in such a
+   band is refused ('Nobody can walk to the door').
  
  The numbers (*generated*):
@@ line 39 @@
  - Land is one of three kinds: visible now, remembered (seen before), or never seen. Your script only knows what your
    side has seen.
+ - Remembered land keeps what was seen then, its height included: levelling behind the fog stays hidden until someone
+   looks again. Never-seen land has height 0 in a script's map.
  - Enemy buildings show whether they are manned, not who is inside. Scripts never see enemy soldiers that are inside a
    building, only that it is manned.
@@ line 50 @@
    land for the border) and soldier. A profession order changes a person's role.
  - **Tools:** workers take tools from stock. The tools and what makes them are in `src/data/items.js`. A tool shortage
-   stops the work that needs it (for example a woodcutter without an axe).
+   stops the work that needs it (for example a woodcutter without an axe). The toolsmith counts only spare tools (not
+   claimed, in your buildings or lying on your land), not tools in people's hands.
+ - **Carriers** serve the workshops that wait for the same rank of goods by the shortest trip minus the time each has
+   waited (1 minute counts as 10 tiles), so a far workshop still gets its turn.
  - **Everything walks.** People walk the map along paths. Goods lie on visible piles and are carried by carriers. Nothing
    teleports.
@@ line 102 @@
    it needs food to work), smelter (iron or gold), smithy and weaponsmith (tools and weapons), barracks and tower
    (soldiers).
+ - A finished workshop or mine asks for no inputs while its output pile is full, a toolsmith while it has no tool to
+   make, and a weaponsmith gets no coal or iron while no sword, bow or spear is wanted (banners keep their planks and
+   gold). Nothing already delivered is taken back.
  - A building stops when its output pile is full. Carriers only take goods somewhere that needs them, so the game log
    records `pile full, nothing needs it right now` when you have idle carriers (build or feed what uses those goods), and
@@ line 111 @@
  - Water belongs to nobody: only land is claimed, so a border ends at the shore (and may go on across a lake). A fisher
    or water hut uses water within its range that touches your land; two sides may fish the same lake.
- - Two optional mechanics, off by default for now (v243, switches `dock` and `hunter`): with the dock, a fisher needs
-   a 2-tile dock over water out of his south, east or west side and fishes within 6 tiles of its end; with the hunter,
-   game lives in forest (6+ grown trees in the 5x5 around a tile, 2 per tile, slowly coming back, gone where the trees
-   are cut), a hunter's cabin with a bow (hunters before bowmen; 2 bows at the start) brings meat, and meat feeds coal
-   and iron mines but no longer gold mines.
+ - Fisher's dock: a fisher needs a 2-tile dock over water out of his south side (else east, else west; never north),
+   part of the building, and fishes within 6 tiles of its end.
+ - Hunter's cabin: game lives in forest (a tile with 6+ grown trees in the 5x5 around it; 2 animals per tile, slowly
+   coming back, gone where the trees are cut). A hunter needs a bow (hunters get bows before bowmen; every side starts
+   with 2 bows) and brings meat. Meat feeds coal and iron mines, not gold mines (see the buildings table).
  
  ## Military
@@ line 125 @@
  - A side attacks by sending soldiers against an enemy building. The building is captured when the attackers take it
    (game log: `attack` and `capture`).
+ - A tower takes soldiers up to the numbers it wants (its guard plus the fighters and archers to keep, set with + / -).
+   Idle held soldiers within 20 tiles of its door fill those slots; after a Move order the soldiers stay where they were
+   put. Ordered into a full tower, a soldier in better armor swaps with a weaker-armored one at the door.
+ - Hits are fine-grained (four times as many, each a quarter as strong), and every soldier has a strength number with
+   its breakdown (shown in the game).
+ - **Strength away from home:** on your own land a soldier fights at full strength (plus a bannerman's bonus). Away from it his base is 60%, and
+   gold kept in your vaults lifts it by up to 40 points, but only for soldiers covered by a bannerman. Full lift costs
+   4 vault bars per soldier outside towers (5 at rank 1, 6 at rank 2). A bowman away from home never fights below 80%.
+ - **Vault:** holds up to 40 gold bars and starts keeping none: carriers bring gold only once you raise its setting
+   (`vaultKeep`). Gold never comes out again; whoever takes the land takes the vault and its gold.
+ - **Bannermen:** a banner (plank + gold bar) is made at the weaponsmith; a carrier picks it up at the barracks. A
+   bannerman never fights but can be killed. He gives +10 strength to the soldiers of his side closest to him outside
+   buildings: 8 within 5 tiles at rank 0, 10 within 6 at rank 1, 12 within 7 at rank 2. Each soldier counts for one
+   bannerman only.
+ - **Armor:** the armorer makes iron armor (1 iron) and gold plates (2 gold; iron armor + plates = gold armor); the
+   barracks sets none, iron or gold per soldier kind. Armor cuts every blow and arrow its wearer takes by a fixed amount
+   (iron 0.05, gold 0.08 in the fine hit sizes), never below 10% of the blow; it adds no health.
+ - **Veterans:** soldiers gain XP from health dealt plus taken (not as bowmen on a wall): rank 1 at 20, rank 2 at 60. A
+   bannerman's XP is the health dealt by the soldiers he covers (rank 1 at 200, rank 2 at 500). A bowman of rank 1 or
+   more never misses; higher ranks cost more vault gold (above).
+ - **Dropping gear:** a fallen soldier drops something 1 time in 4: half the time his iron armor as broken armor
+   (nothing for gold armor or none), else his weapon (nothing for a banner). The land owner's carriers pick it up
+   (weapons go to the barracks). An armorer with repair on (`armorRepair`) makes 1 broken armor + 1 coal into iron
+   armor, repairs first, and keeps up to 6 broken armor waiting.
  - Soldier and tower numbers, and healing, are in `src/data/combat.js`.
  
+ ## Advice and building status
+ 
+ - The advisor gives tips under Goals (land, ore, weapons, stalls, carriers, army, settlers, orders, timing), for
+   example 'too few carriers: build more houses' when a building type waits for goods that lie in stock while no carrier
+   is idle. A script sees its current tips in `view.economy.tips`, and each of its own buildings' current status text
+   (`view.economy.town`, e.g. 'Waiting for food').
+ 
+ ## Switches
+ 
+ Optional mechanics are switches, fixed for a whole game and shown to scripts in `view.switches`. Today all
+ of them are on everywhere (live game, tester build, arena, lab, tests; Jens, 19 Nov 2026): `vault`, `banner`, `armor`, `vet`, `gear`,
+ `dock`, `hunter`, `carryfair`, `backslope`, `behind`; this summary describes the game with them on. An order for a
+ switched-off mechanic is refused with `switched off: <id>`. One switch starts off: `scriptInfo` (extra per-minute
+ numbers in a script's view; see the kit). What each one does when off: `docs/SWITCHES.md`.
+ 
  ## Winning, losing and time limits
  
@@ line 148 @@
    refusal comes back in `view.refused` with the reason, and it is written in the game log as an `order` event with
    `accepted 0`.
+ - At most 50 orders a turn (`ask` and `note` have their own limits): the rest are skipped, and the next `view.refused`
+   says how many.
  - The kit lists every order and its arguments.
  
```

## v250

v250-0e16313ef661: same

```diff
Kit v249-0e16313ef661 -> v250-0e16313ef661: same
```

## v249

v249-0e16313ef661: kit changed

```diff
Kit v248-0f5895007139 -> v249-0e16313ef661: kit changed (kit (AI_SCRIPT_CHALLENGE.md))

### kit (AI_SCRIPT_CHALLENGE.md)
@@ line 37 @@
                          may be gone, or manned differently, by now ] },
    over: null or {winners},
-   switches: {vault, banner, armor, vet, gear, dock, hunter, carryfair, backslope} true|false, the same every turn: which optional mechanics this game has.
+   switches: {vault, banner, armor, vet, gear, dock, hunter, carryfair, backslope, behind} true|false, the same every turn: which optional mechanics this game has.
              Since version 244 (19 Nov 2026) every switch is on everywhere: the live game, the arena, tournaments and
              the lab all play with all of them on, armor and bannermen included (scripts written before then met
@@ line 53 @@
              2026): hill sides facing away from the camera (toward -x,-y) are gentle on new maps, and a site whose ground
              rises toward +x,+y by more than 3 height steps (more for bigger sites) is refused: 'Too steep: the far side of
-             a hill'. Nothing to order for it.
+             a hill'. Nothing to order for it. behind (22 Nov 2026): a band of tiles up-left of each built
+             building (toward -x,-y; 2-4 deep by type, 0 for mines and yards) can't be walked or stood on, except doors
+             and the 2 tiles in front of a door; a site whose door would lie in a band is refused ('Nobody can walk to the
+             door'). Nothing to order for it.
    gear: [{it, x, y}] weapons ('sword', 'spear', 'bow') and broken armor ('brokenarmor') lying where soldiers fell, on
          tiles you see now (switches.gear; empty while it is off). Once on someone's land they become goods on that
@@ line 285 @@
    - Land: buildings may only stand on your own land. A military building pushes your border out (guard 14, tower 20,
      castle 26 tiles) only once a soldier is inside. A lookout tower (look) uncovers the map 24 tiles around; no land.
+   - The start army (23 Nov): the headquarters holds its guard plus 6 free swordsmen and 3 free bowmen; more come only
+     from the barracks. Small tower, big tower and castle each keep 1, 2 or 3 swordsmen always on guard, so before your
+     barracks trains more, at most 6 small towers get their guard. A new military building wants 0 archers (archers
+     {b, d} raises it), so the 3 start bowmen stand idle until you ask; any one soldier inside, a bowman too, makes the
+     building push your border out, also while it still waits for its swordsman (status 'Waiting for a swordsman: ...').
+   - Where the enemy is (two players): the two headquarters stand on the same row, mirrored across the map's middle:
+     the enemy's is near (view.map.w - your x, your y). You only see his buildings once your land or a unit sees them:
+     send one free soldier (patrol on) or an explorer towards never-seen tiles (view.map.known) to find them.
    - Water is never owned (v241): circles and building rings claim land only, so a border ends at the shore and can
      reach land across a lake. A fisher or water hut uses water within its range that touches (4 sides) land you own;
@@ line 312 @@
  - profession {role, d}: d 1 retrains an idle carrier, d -1 makes one a carrier again. role is one of: explorer (takes 1
    plank; walks where you send him and uncovers the map), geologist (takes a pickaxe; searches the mountain where you
-   send him), pioneer (takes a shovel; claims land nobody owns, tile by tile, where you send him outside your border),
+   send him), pioneer (takes a shovel; claims land nobody owns, tile by tile, where you send him outside your border:
+   1.5 game seconds of work per tile plus a short walk, up to about 40 tiles a game minute, each one a free tile that
+   touches your land within 8 tiles of the spot; then he stands idle (busy false) until you send him again),
    digger (a shovel), builder (a hammer). It needs that tool lying spare, an idle carrier, and more than 2 carriers.
    Careful: a profession order that could not be done is NOT in view.refused, unless the switch scriptInfo is on (then it is,
@@ line 330 @@
    commands above. Instead of a step d, workRange, archers, fighters, weaponKeep, toolKeep, vaultKeep, armyTarget, armyArmor and armyReserve also take
    set: an exact number (kept within the same limits; armyTarget by set has no top of 40).
- - Mines may stand anywhere on the mountain; signs (view.economy.ore) show where the ore is. Signs go after 10 minutes.
+ - Mines may stand anywhere on the mountain; signs (view.economy.ore) show where the ore is. Signs go after 720 game
+   seconds (12 minutes of view.t), but what a geologist found stays known: spots for a mine (ask) still find it.
+   A mine never runs dry at once: as its deposit wears it finds less (status 'Deposit thinning: ...', then 'Deposit worn
+   out: finding little ...'), and a worn-out mine still stands and still counts in your town. A quarry, fisher or water
+   hut with nothing left in its range says 'No stone in range ...' (or fish, shore water). Count only the working ones
+   when you decide whether to build another.
  - THE MAP (full game): view.map = {w, h, known, ter, tree, stone, owner, height, occupied, fish, game, ore, oreNames, grounds, at(x,y)}.
    Each layer is a Uint8Array with one value per tile, index y*w+x, as far as your fog of war allows: known 0 = never
```

## v248

v248-0f5895007139: kit changed

```diff
Kit v247-3d2908c247c9 -> v248-0f5895007139: kit changed (kit (AI_SCRIPT_CHALLENGE.md), buildings.js, GAME_SUMMARY.md)

### kit (AI_SCRIPT_CHALLENGE.md)
@@ line 37 @@
                          may be gone, or manned differently, by now ] },
    over: null or {winners},
-   switches: {vault, banner, armor, vet, gear, dock, hunter, carryfair} true|false, the same every turn: which optional mechanics this game has.
+   switches: {vault, banner, armor, vet, gear, dock, hunter, carryfair, backslope} true|false, the same every turn: which optional mechanics this game has.
              Since version 244 (19 Nov 2026) every switch is on everywhere: the live game, the arena, tournaments and
              the lab all play with all of them on, armor and bannermen included (scripts written before then met
@@ line 50 @@
              (map.game all 0), no hunter, meat only from the slaughterhouse, and mine foods as before. carryfair (#41,
              21 Nov 2026): carriers serve workshops waiting for goods of the same delivery rank by the shortest trip
-             minus the time waited (1 minute = 10 tiles); off: in building order. Nothing to order for it.
+             minus the time waited (1 minute = 10 tiles); off: in building order. Nothing to order for it. backslope (22 Nov
+             2026): hill sides facing away from the camera (toward -x,-y) are gentle on new maps, and a site whose ground
+             rises toward +x,+y by more than 3 height steps (more for bigger sites) is refused: 'Too steep: the far side of
+             a hill'. Nothing to order for it.
    gear: [{it, x, y}] weapons ('sword', 'spear', 'bow') and broken armor ('brokenarmor') lying where soldiers fell, on
          tiles you see now (switches.gear; empty while it is off). Once on someone's land they become goods on that
@@ line 303 @@
      kept in your VAULTS (type vault, 3x3, 3 planks + 4 stone) while a bannerman covers him: full strength takes 4 bars
      per soldier outside towers (soldiers in military buildings, bannermen and the headquarters guard don't count). Gold anywhere else does not count. Carriers
-     bring gold to a vault until it holds its 'keep' setting (0-40, at the start 40; your town list shows keep and
+     bring gold to a vault until it holds its 'keep' setting (0-40, at the start 0: raise it yourself; your town list shows keep and
      inputs.gold); gold never comes out of a vault again. vaultKeep {b, d} changes it (or set: an exact number). When an
      enemy takes the land under a finished vault, the vault and its gold become theirs (it is not burned). view.gold is

### buildings.js
@@ line 50 @@
    // (army plan, 14 Nov) the vault: carriers bring gold until it holds the amount set (tap it); gold never comes out
    // again. Only vault gold counts for soldiers' strength outside their land. Taken with the land, not burned.
-   vault: {n:'Vault', s:3, h:3, cost:{plank:3,stone:4}, inputs:{gold:40}, vault:true, rule:'vault' /* (C2) only with this switch on (data/rules.js) */, roof:'#8a7a3a', desc:'Holds up to 40 gold bars; tap it to set how many to keep. Gold in vaults makes soldiers stronger outside your land (4 bars per soldier outside towers for full strength). Gold never comes out again; if the enemy takes the land, the vault and its gold are theirs'},
+   vault: {n:'Vault', s:3, h:3, cost:{plank:3,stone:4}, inputs:{gold:40}, vault:true, rule:'vault' /* (C2) only with this switch on (data/rules.js) */, roof:'#8a7a3a', desc:'Holds up to 40 gold bars; it starts keeping none: tap it to set how many to keep. Gold in vaults makes soldiers stronger outside your land (4 bars per soldier outside towers for full strength). Gold never comes out again; if the enemy takes the land, the vault and its gold are theirs'},
    weaponsmith:{n:'Weaponsmith', s:3, h:3, door:'side', cost:{plank:5,stone:7}, tool:'hammer', inputs:{coal:6,iron:6,plank:2,gold:2}, recipe:{in:{coal:1,iron:1}, out:'weapon', time:7.5, verb:'Forging'}, roof:'#5a4a5e', desc:'Coal + iron make swords, bows and spears; a plank + a gold bar make a banner. Tap it to set what to make'},
    armorer:{n:'Armorer', rule:'armor', s:3, h:3, door:'side', cost:{plank:4,stone:5}, tool:'hammer', inputs:{iron:6,gold:4}, recipe:{in:{iron:1}, out:'armor', time:7.5, verb:'Making'}, roof:'#6a5a3e', desc:'Iron makes iron armor; 2 gold bars make gold plates (iron armor + gold plates = gold armor). Soldiers put armor on at the barracks'},

### GAME_SUMMARY.md
@@ line 92 @@
  | Big tower | `tower` | 5 plank, 5 stone | — | — | — | Room for 3 fighters (2 swordsmen always on guard) and 3 archers. Pushes your border out 20 tiles |
  | Castle | `castle` | 8 plank, 12 stone | — | — | — | Room for 5 fighters (3 swordsmen always on guard) and 5 archers. Pushes your border out 26 tiles |
- | Vault | `vault` | 3 plank, 4 stone | — | gold | — | Holds up to 40 gold bars; tap it to set how many to keep. Gold in vaults makes soldiers stronger outside your land (4 bars per soldier outside towers for full strength). Gold never comes out again; if the enemy takes the land, the vault and its gold are theirs |
+ | Vault | `vault` | 3 plank, 4 stone | — | gold | — | Holds up to 40 gold bars; it starts keeping none: tap it to set how many to keep. Gold in vaults makes soldiers stronger outside your land (4 bars per soldier outside towers for full strength). Gold never comes out again; if the enemy takes the land, the vault and its gold are theirs |
  | Weaponsmith | `weaponsmith` | 5 plank, 7 stone | hammer | coal, iron, plank, gold | weapon (from coal, iron) | Coal + iron make swords, bows and spears; a plank + a gold bar make a banner. Tap it to set what to make |
  | Armorer | `armorer` | 4 plank, 5 stone | hammer | iron, gold | armor (from iron) | Iron makes iron armor; 2 gold bars make gold plates (iron armor + gold plates = gold armor). Soldiers put armor on at the barracks |
```

## v247

v247-3d2908c247c9: kit changed

```diff
Kit v246-74d7534874cf -> v247-3d2908c247c9: kit changed (kit (AI_SCRIPT_CHALLENGE.md))

### kit (AI_SCRIPT_CHALLENGE.md)
@@ line 311 @@
    send him), pioneer (takes a shovel; claims land nobody owns, tile by tile, where you send him outside your border),
    digger (a shovel), builder (a hammer). It needs that tool lying spare, an idle carrier, and more than 2 carriers.
-   Careful: a profession order that could not be done is NOT in view.refused; look at view.economy.people on a later
-   turn. Send no other role names. Explorers, geologists and pioneers are in view.economy.units; move them with sendUnit.
+   Careful: a profession order that could not be done is NOT in view.refused, unless the switch scriptInfo is on (then it is,
+   with the reason, like the other refusals); otherwise look at view.economy.people on a later turn. Send no other role names. Explorers, geologists and pioneers are in view.economy.units; move them with sendUnit.
  - More on some orders: pause {b, on} works on a building site only. workArea {b, x, y} moves the middle of a
    workplace's work area (x: null = back around the building). storeSlot {b, k, it}: a stockpile (store) has 4 slots,
@@ line 366 @@
    gather wood'; b/c building ids or target), 'taskend' (that order ended: a person id, b tenths of a second, s 'done' or
    'failed: why'), 'tip' (every game minute, each of the advisor's tips for your side that holds now: a the game minute,
-   s 'kind: text', kinds land, ore, weapons, stall, army, settlers, orders, timing; the player sees the same tips under
+   s 'kind: text', kinds land, ore, weapons, stall, carriers, army, settlers, orders, timing; the player sees the same tips under
    Goals). The current tips are also in view.economy.tips: [{k, text}] (k: the kind; renewed every game minute).
+   Only when the switch scriptInfo is on (off by default; the game's switches say which): view.economy.logCut: how many of the log events since your last economy turn the 400 cut left out. view.economy.minute: {m, stock, bld, ppl, sol, land, seen, beds, pop, idle, waiting, econ, status}, your side's latest game-minute snapshot (the same fields as the game log's minute snapshot, without its hash), sent once per new game minute; status = {building type: {state: seconds}} gained since your last minute (states as in the game log's status time: working, waiting for ..., no worker, ...). Example: const m = view.economy.minute; if (m && m.waiting > 0 && m.idle > 2) the goods wait while carriers stand idle: the delivery is slow, so add a store near the workshop or a carrier trip, not more production.
+   carriers (21 Nov 2026): a building type waited for goods at least 7 of the last 10 minutes while they lie in
+   stock and no carrier is idle (it replaces that type's stall tip), or no carrier was idle for 10 minutes: build houses.
    Only what your side may know.
  - ["note", {text}]: write your own note into the game log (at most 5 a turn, 200 characters each). After the game the
```

## v246

v246-74d7534874cf: kit changed

```diff
Kit v245-0ead3337d9c8 -> v246-74d7534874cf: kit changed (kit (AI_SCRIPT_CHALLENGE.md))

### kit (AI_SCRIPT_CHALLENGE.md)
@@ line 37 @@
                          may be gone, or manned differently, by now ] },
    over: null or {winners},
-   switches: {vault, banner, armor, vet, gear, dock, hunter} true|false, the same every turn: which optional mechanics this game has.
+   switches: {vault, banner, armor, vet, gear, dock, hunter, carryfair} true|false, the same every turn: which optional mechanics this game has.
              Since version 244 (19 Nov 2026) every switch is on everywhere: the live game, the arena, tournaments and
-             the lab all play with all seven on, armor and bannermen included (scripts written before then met
+             the lab all play with all of them on, armor and bannermen included (scripts written before then met
              banner and armor off in the arena). Still read view.switches: a test game can switch one off.
              Off: the vault (gold in stock counts instead, 1 bar per soldier), bannermen (no banners; gold counts for
@@ line 48 @@
              banner); off: every rank and xp is 0. dock: the fisher's dock (see Water below); off: a fisher stands
              anywhere by water. hunter: the hunter's cabin and game in forest (see Hunting below); off: no game
-             (map.game all 0), no hunter, meat only from the slaughterhouse, and mine foods as before.
+             (map.game all 0), no hunter, meat only from the slaughterhouse, and mine foods as before. carryfair (#41,
+             21 Nov 2026): carriers serve workshops waiting for goods of the same delivery rank by the shortest trip
+             minus the time waited (1 minute = 10 tiles); off: in building order. Nothing to order for it.
    gear: [{it, x, y}] weapons ('sword', 'spear', 'bow') and broken armor ('brokenarmor') lying where soldiers fell, on
          tiles you see now (switches.gear; empty while it is off). Once on someone's land they become goods on that
```

## v245

v245-0ead3337d9c8: same

```diff
Kit v244-0ead3337d9c8 -> v245-0ead3337d9c8: same
```

## v244

v244-0ead3337d9c8: kit changed

```diff
Kit v243-16d36a9732c0 -> v244-0ead3337d9c8: kit changed (kit (AI_SCRIPT_CHALLENGE.md))

### kit (AI_SCRIPT_CHALLENGE.md)
@@ line 38 @@
    over: null or {winners},
    switches: {vault, banner, armor, vet, gear, dock, hunter} true|false, the same every turn: which optional mechanics this game has.
+             Since version 244 (19 Nov 2026) every switch is on everywhere: the live game, the arena, tournaments and
+             the lab all play with all seven on, armor and bannermen included (scripts written before then met
+             banner and armor off in the arena). Still read view.switches: a test game can switch one off.
              Off: the vault (gold in stock counts instead, 1 bar per soldier), bannermen (no banners; gold counts for
              every soldier away from home) or armor (no armorer; everyone's arm stays 0). Fields keep their shape.
@@ line 208 @@
      units: [ {id, role: "explorer"|"geologist"|"pioneer", x, y, busy, moving (still walking), to: {x, y} where sent} ],
      town: [ your buildings, the headquarters ('hq') too: {id, type, x, y, built, worker, paused, prio,
+       status: the building's current human-readable status, e.g. "Waiting for food"; omitted when unset,
        inputs, outputs (goods lying at the building, each an object {item: count}, never a list: inputs = brought in
        and waiting to be used, outputs = made or stored there and waiting to be carried off; test with
@@ line 218 @@
      spots: { type: [ {x, y, d, n} ] } answers to last turn's ['ask', {spots: [types]}]: places where that building
        may stand now, best first (n = trees/rocks/fish water/game/free grass/known ore in reach, or new land for military).
+       spotsFor samples every other tile, so it can miss valid sites; use canPlace to scan all tiles for building types
+       that do not need nearby resources.
        Ask for at most 6 types a turn; you get at most 8 places for each, all on your own land }
  - HOW A TOWN WORKS. The data files buildings.js and items.js that come with this kit (in the AI challenge they lie
@@ line 227 @@
      makes tools from coal and iron.
    - A building site is levelled by diggers and then built by builders, with planks and stone carried to it.
-   - Mines only work while they get food (buildings.js: foods); ore lies where a geologist found signs of it.
+   - Mines mine nothing without food; which foods, in which order, is in src/data/buildings.js `foods` (and `foodsH`
+     while the hunter switch is on); fish is the fallback for coal, iron and stone. Ore lies where a geologist found
+     signs of it.
    - Soldiers: the weaponsmith makes weapons from coal and iron; at the barracks an idle carrier picks up a weapon and
      becomes a soldier. armyTarget {kind, d} is how many soldiers of that kind you want OUTSIDE buildings (at the start
@@ line 335 @@
    Decide yourself where to build and where to expand: the map is all you need.
  - canPlace(type, x, y): true when a building of that type may stand with its top-left corner on tile x, y right now
-   (whole tiles; the game's own rules: on your land, flat enough, free of trees, rocks and other buildings, room around
-   it, a free tile in front of the door, mines fully on the mountain, military buildings out of enemy arrow range).
+   (whole tiles; the game's placement rules: on your land, flat enough, free of trees, rocks and other buildings, room
+   around it, a free tile in front of the door, mines fully on the mountain, military buildings out of enemy arrow
+   range). It does NOT check whether the needed resources are nearby. For wood, forest, quarry, fisher, waterhut and
+   every mine type, use view.economy.spots to find places with trees, rocks, fish/water or the right known ore in reach.
    Instant and free: call it as often as you like. Sizes (w x h tiles, door side): wood 3x3, forest 3x3, saw 3x3 east, fisher 3x3, hunter 3x3, waterhut 3x3, farm 4x3, mill 3x3, bakery 3x3 east, pigfarm 3x3, butcher 3x3, coalmine 3x3, ironmine 3x3, stonemine 3x3, goldmine 3x3, goldsmelter 3x3, smelter 3x3, smith 3x3 east, quarry 3x3, house 3x3, house2 5x4, house3 6x5, store 3x3, look 2x2, guard 3x3, tower 5x4, castle 8x7, vault 3x3, weaponsmith 3x3 east, armorer 3x3 east, barracks 3x3 (door south unless east).
    x grows to the east, y to the south.
- - view.refused: last turn's orders the game refused, as {order, args, why} (for place: the reason, like 'Too steep';
+ - view.refused: last turn's orders the game refused, as {order, args, why}, with a short reason in view.refused[].why (for place, e.g. 'Too steep';
    'switched off: <id>' for a mechanic this game has switched off, see view.switches); at most 30.
  - view.economy.loose: goods lying loose on your land {item: count}. view.economy.army: your army settings: target
    {sword, spear, bow, banner}, armor {sword, spear, bow, banner} (0-2, armyArmor), keep [{weapon, keep}] (weaponKeep's k is the position in this list, 0 first), reserve, list.
    view.economy.toolPlan (v209): the spare tools your smith keeps, in order [{tool, keep}] (toolKeep's k is the position).
- - view.economy.spots (the 'ask' helper) still works, but you don't need it.
+ - view.economy.spots is filled by the 'ask' helper.
  - THE GAME LOG (full game): view.economy.log = everything that happened to your side since your last economy turn
    (newest last, at most 400): {t, p, what, a, b, c, s, other}. what: 'place' (a building id, b/c x/y, s type), 'finish',
@@ line 361 @@
  
  AN EXAMPLE FOR A FULL GAME: 'AI script: builder'
- // AI script: builder. Builds a town step by step with the economy view (view.economy) and commands.
+ // AI script: builder. Grow a town, defend its border, and attack with a supported army.
  function think(view){
-   const E = view.economy, out = [];
-   const has = t => E.town.filter(b => b.type === t).length;          // built or being built
-   const sites = E.town.filter(b => !b.built).length;
-   const st = it => E.stock[it] || 0;
-   const mil = E.town.filter(b => b.type === 'guard' || b.type === 'tower').length;
-   const ore = k => E.ore.some(o => o.ore === k);
-   // what it wants next, in order: [condition, building]
-   const want = [
-     [has('wood') < 1, 'wood'], [has('quarry') < 1, 'quarry'], [has('saw') < 1, 'saw'], [has('wood') < 2, 'wood'],
-     [has('forest') < 1, 'forest'], [(E.people.carrier || 0) < 6 && E.population >= E.beds - 4 && !E.town.some(b => !b.built && /house/.test(b.type)), 'house'], // a house only when few carriers are free
-     [has('fisher') < 1, 'fisher'], [has('waterhut') < 1, 'waterhut'], [has('farm') < 1, 'farm'], [has('mill') < 1, 'mill'],
-     [has('bakery') < 1, 'bakery'], [has('quarry') < 2, 'quarry'], [has('wood') < 3, 'wood'], [has('forest') < 2, 'forest'],
-     [has('coalmine') < 1 && ore('coal'), 'coalmine'], [has('ironmine') < 1 && ore('ironore'), 'ironmine'],
-     [has('smelter') < 1 && has('coalmine') && has('ironmine'), 'smelter'], [has('smith') < 1 && has('smelter'), 'smith'],
-     [has('pigfarm') < 1 && has('farm'), 'pigfarm'], [has('butcher') < 1 && has('pigfarm'), 'butcher'], [has('farm') < 2 && has('mill'), 'farm'],
-     [has('weaponsmith') < 1 && has('smelter'), 'weaponsmith'], [has('barracks') < 1 && has('weaponsmith'), 'barracks'],
-     [has('coalmine') < 2 && has('smelter'), 'coalmine'], [has('saw') < 2 && has('wood') >= 3, 'saw'],
-   ].filter(w => w[0]).map(w => w[1]);
-   // a geologist while there is mountain it hasn't searched
-   const geos = E.units.filter(u => u.role === 'geologist');
-   if (!geos.length && E.land.unsearched > 20 && has('saw') && st('pick') > 0 && !(memory.geoT > view.t)) { out.push(['profession', {role: 'geologist', d: 1}]); memory.geoT = view.t + 60; } // ask once, then wait (a carrier fetches a pickaxe first)
-   for (const g of geos) if (!g.busy && E.unsearched.length) { const s = E.unsearched[(view.t / 2 | 0) % E.unsearched.length]; out.push(['sendUnit', {u: g.id, tx: s.x, ty: s.y}]); }
-   // more land: a guard post or tower at the far edge, when what it wants has no room or every few minutes
-   const noRoom = want.length && E.spots[want[0]] && !E.spots[want[0]].length;
-   const empty = view.buildings.some(b => b.military && b.type !== 'hq' && b.built && !(b.troops && b.troops.length)); // nobody to man it yet
-   const milWanted = (noRoom || mil < Math.floor(view.t / 150)) && !empty && !E.town.some(b => !b.built && (b.type === 'guard' || b.type === 'tower'));
-   const ask = (milWanted ? ['guard'] : []).concat(want.slice(0, 3));
-   out.push(['ask', {spots: ask}]);
-   if (sites >= 3 || st('plank') < 2) return out;                     // don't start too much at once
-   if (milWanted && E.spots.guard && E.spots.guard.length) { const s = E.spots.guard[0]; out.push(['place', {type: 'guard', x: s.x, y: s.y}]); return out; }
-   for (const t of want.slice(0, 3)) { const l = E.spots[t]; if (l && l.length) { out.push(['place', {type: t, x: l[0].x, y: l[0].y}]); break; } }
+   const E = view.economy, M = view.map, S = view.switches, out = [];
+   if (!E || !M || view.over) return out;
+   const order = (name, args) => out.push([name, args]);
+   const dist = (a, b) => Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
+   const stock = it => E.stock[it] || 0;
+   const hq = view.buildings.find(b => b.type === 'hq');
+   if (!hq) return out;
+   const time = view.t;
+   let {attackAfter = 0, rejected = null, expandAfter = 90, askAfter = 0, spots: cached = {}} = memory;
+ 
+   // Keep a home reserve. Estimate enemy strength from visible fighters and the target's garrison.
+   for (const r of view.refused) {
+     if (r.order === 'attack') attackAfter = time + 60;
+     if (r.order === 'place') rejected = {...r.args, until: time + 60};
+   }
+   const free = view.soldiers.filter(s => !s.order && !s.defends && !s.fighting && !s.moving);
+   const fighters = free.filter(s => s.kind !== 'banner' && s.hp >= s.maxHp * 0.75);
+   const banners = free.filter(s => s.kind === 'banner');
+   const power = s => s.hp * (0.6 + 0.2 * s.arm) * s.str / 100;
+   if (fighters.length >= 15 && time >= attackAfter) {
+     const targets = view.enemy.buildings.filter(b => b.built && b.military);
+     targets.sort((a, b) => dist(hq, a) - dist(hq, b) + 20 * (Number(!!a.manned) - Number(!!b.manned)));
+     for (const target of targets.slice(0, 4)) {
+       const group = fighters.slice().sort((a, b) => dist(a, target) - dist(b, target)).slice(0, -6);
+       const guards = {hq: 1, guard: 3, tower: 6, castle: 10};
+       const danger = view.enemy.soldiers.filter(s => dist(s, target) < 24).reduce((sum, s) => sum + power(s), 0);
+       const support = S.banner ? banners.slice().sort((a, b) => dist(a, target) - dist(b, target)).slice(0, Math.ceil(group.length / 8)) : [];
+       const strength = group.reduce((sum, s) => sum + power(s), 0) * (support.length ? view.gold : 0.65);
+       if (strength < 1.5 * (danger + 6 * (target.manned ? guards[target.type] || 3 : 1)) + 12) continue;
+       order('attack', {ids: group.concat(support).map(s => s.id), b: target.id});
+       attackAfter = time + 60;
+       break;
+     }
+   }
+ 
+   Object.assign(memory, {attackAfter, rejected});
+   if (view.armyOnly) return out;
+ 
+   // Gather the town counts and the materials still needed by sites.
+   const count = {}, built = {}, pending = {};
+   let sites = 0, bedsComing = 0;
+   for (const b of E.town) {
+     count[b.type] = (count[b.type] || 0) + 1;
+     if (b.built) built[b.type] = (built[b.type] || 0) + 1;
+     else {
+       sites++;
+       for (const it of Object.keys(b.cost)) pending[it] = (pending[it] || 0) + Math.max(0, b.cost[it] - (b.delivered[it] || 0));
+     }
+     bedsComing += b.coming || 0;
+   }
+   const has = t => count[t] || 0;
+   const tip = k => E.tips.some(t => t.k === k);
+   const spare = (it, n) => stock(it) >= n + (pending[it] || 0);
+   const ore = kind => E.ore.some(o => o.ore === kind);
+ 
+   // Search mountain on our land. Give recruit orders time to fetch their tools.
+   {
+     const geos = E.units.filter(u => u.role === 'geologist');
+     if (E.land.unsearched > 12 && geos.length < (built.smith ? 2 : 1) && stock('pick') && (E.people.carrier || 0) > 4 && time >= (memory.geoT || 0)) {
+       order('profession', {role: 'geologist', d: 1});
+       memory.geoT = time + 45;
+     }
+     for (const g of geos) {
+       if (g.busy || g.moving) continue;
+       const spot = E.unsearched.find(p => M.grounds[M.ter[p.y * M.w + p.x]].mine &&
+         geos.every(other => other.id === g.id || !other.to || dist(other.to, p) > 8));
+       if (spot) order('sendUnit', {u: g.id, tx: spot.x, ty: spot.y});
+     }
+   }
+ 
+   // Set exact reserves once a forge exists. Arm only part of the mix so weapons can still train immediately.
+   if (built.smith) E.toolPlan.forEach(({tool, keep}, k) => {
+     const set = tool === 'pick' ? 2 : 1;
+     if (keep !== set) order('toolKeep', {k, set});
+   });
+   if (has('barracks')) {
+     const trained = built.smelter && (built.coalmine || 0) >= 2;
+     const targets = {sword: trained ? 18 : 10, spear: trained ? 8 : 4, bow: trained ? 12 : 6};
+     if (S.banner && built.goldsmelter && E.army.target.banner !== (trained ? 3 : 1)) {
+       order('armyTarget', {kind: 'banner', set: trained ? 3 : 1});
+     }
+     for (const [kind, set] of Object.entries(targets)) {
+       if (E.army.target[kind] !== set) order('armyTarget', {kind, set});
+     }
+     if (S.armor && built.armorer && !E.army.armor.bow) order('armyArmor', {kind: 'bow', set: 1});
+   }
+   for (const b of E.town) {
+     if (S.armor && S.gear && b.type === 'armorer' && b.built && !b.repair) order('armorRepair', {b: b.id, on: true});
+     if (S.vault && b.type === 'vault' && b.built && b.keep !== 24) order('vaultKeep', {b: b.id, set: 24});
+   }
+ 
+   // Keep enough workers and carriers ahead of recruitment. Fund construction from uncommitted stock.
+   const want = [];
+   const add = (type, n, plank, stone, ready = true) => {
+     if (ready && has(type) < n && spare('plank', plank) && spare('stone', stone) && !want.includes(type)) want.push(type);
+   };
+   const peopleShort = (E.people.carrier || 0) < 9 || (E.idle.carrier || 0) < 3 || tip('settlers') || tip('weapons');
+   const homes = peopleShort && bedsComing < 6 && !E.town.some(b => !b.built && /^house/.test(b.type));
+   const border = view.buildings.filter(b => b.military && b.type !== 'hq');
+   // A small post needs one swordsman. Keep the starting bows in the field until recruitment starts.
+   for (const b of E.town) if (b.type === 'guard' && b.built) {
+     if (b.fighters > 1) order('fighters', {b: b.id, set: 1});
+     if (!built.barracks && b.archers) order('archers', {b: b.id, set: 0});
+   }
+   const canExpand = border.every(b => b.built && b.troops && b.troops.length);
+   const expand = canExpand && (time >= expandAfter || tip('land') || tip('ore'));
+   add('wood', 1, 2, 2);
+   add('quarry', 1, 2, 3);
+   add('saw', 1, 3, 4);
+   add('house', 1, 3, 3, homes && !!has('saw'));
+   add('wood', 2, 2, 2, !!has('saw'));
+   add('forest', 1, 3, 1, !!has('wood'));
+   add('guard', 1, 2, 3, expand);
+   add('house3', 20, 10, 12, homes && time > 1200);
+   add('house2', 20, 5, 6, homes && !!has('house'));
+   add('house', 20, 3, 3, homes);
+   /* The spot helper checks dock placement when dock is on. */ add('fisher', 1, 3, 2);
+   add('hunter', 1, 3, 2, S.hunter);
+   add('quarry', built.smith && stock('pick') > 1 ? 4 : 2, 2, 3, stock('stone') < 14);
+   add('castle', 3, 8, 12, expand && view.soldiers.length >= 14 && time > 1500);
+   add('tower', 10, 5, 5, expand && view.soldiers.length >= 8 && border.length >= 3);
+   add('guard', 30, 2, 3, expand);
+   const coalFood = built.fisher || built.bakery || (S.hunter && (built.hunter || built.butcher));
+   const coalStable = (built.coalmine || 0) >= 2 || stock('coal') >= 12;
+   add('coalmine', 1, 4, 1, ore('coal') && !!coalFood);
+   add('ironmine', 1, 4, 1, ore('ironore') && !!(built.fisher || built.butcher || built.hunter));
+   add('smelter', 1, 4, 6, !!(built.coalmine && built.ironmine));
+   add('smith', 1, 3, 5, !!built.smelter);
+   add('weaponsmith', 1, 5, 7, !!built.smelter || stock('iron') >= 4);
+   add('barracks', 1, 4, 5, !!has('weaponsmith') || stock('sword') >= 2);
+   add('waterhut', 1, 3, 4);
+   add('farm', 1, 6, 6, !!has('waterhut'));
+   add('mill', 1, 3, 3, !!has('farm'));
+   add('bakery', 1, 4, 5, !!(has('mill') && has('waterhut')));
+   add('pigfarm', 1, 6, 6, !!(has('farm') && has('waterhut')));
+   add('butcher', 1, 4, 4, !!has('pigfarm'));
+   add('coalmine', 6, 4, 1, ore('coal') && !!(built.smith && coalFood) && stock('pick') > 0 && stock('coal') < 16);
+   add('ironmine', 3, 4, 1, ore('ironore') && !!built.smith && stock('pick') > 1 && stock('ironore') < 10);
+   add('stonemine', 2, 5, 0, !!built.smith && stock('pick') > 1 && ore('stone') && !!(built.bakery || built.fisher) && stock('stone') < 15);
+   add('goldmine', 2, 5, 1, coalStable && !!built.smith && stock('pick') > 1 && stock('goldore') < 5 && ore('goldore') && !!(built.fisher || built.bakery));
+   add('goldsmelter', 1, 4, 6, coalStable && !!built.goldmine);
+   add('vault', 3, 3, 4, S.vault && !!built.goldsmelter && (has('vault') === 0 || stock('gold') > 12));
+   add('armorer', 1, 4, 5, S.armor && !!built.barracks && coalStable && stock('iron') >= 2 && view.soldiers.length >= 6);
+   add('wood', 4, 2, 2, !!built.smith && stock('log') < 12);
+   add('saw', 2, 3, 4, !!built.smith && stock('plank') < 18);
+   add('forest', 3, 3, 1, has('wood') >= 3 || E.town.some(b => b.type === 'wood' && /^No grown trees/.test(b.status || '')));
+   add('farm', 3, 6, 6, !!built.pigfarm && stock('grain') < 10);
+   add('waterhut', 2, 3, 4, !!built.pigfarm && stock('water') < 10);
+   add('bakery', 2, 4, 5, (built.coalmine || 0) >= 2 && !!built.mill && stock('bread') < 8);
+   add('fisher', 3, 3, 2, !!built.smith && stock('fish') < 10);
+   add('hunter', 2, 3, 2, S.hunter && !!built.weaponsmith && stock('meat') < 10);
+ 
+   // Reuse the spot answers briefly. Recheck each footprint and spread military sites toward new land.
+   if (sites < (time < 360 ? 3 : 5)) {
+     const answered = Object.keys(E.spots);
+     if (answered.length) cached = {...cached, ...E.spots};
+     const best = want.filter(t => cached[t] === undefined || cached[t].length).slice(0, 6);
+     if (best.length < 6 && want.length) {
+       const retry = want.filter(t => cached[t] && !cached[t].length);
+       if (retry.length) best.push(retry[Math.floor(time / 12) % retry.length]);
+     }
+     if (best.length && time >= askAfter) {
+       order('ask', {spots: best});
+       askAfter = time + 12;
+     }
+     for (const type of want) {
+       let spots = cached[type] || [];
+       const military = type === 'guard' || type === 'tower' || type === 'castle';
+       if (military && Object.hasOwn(E.spots, type)) {
+         // Look around existing posts for a route toward visible mountain and room for the town.
+         const reach = {guard: 14, tower: 20, castle: 26};
+         const seekOre = !has('ironmine') || !has('coalmine');
+         const candidates = spots.slice();
+         for (const b of [hq, ...border]) {
+           const radius = reach[b.type] || 14;
+           for (let dx = -radius; dx <= radius; dx += 4) for (let dy = -radius; dy <= radius; dy += 4) {
+             if (Math.abs(dx) + Math.abs(dy) < radius) continue;
+             const x = Math.floor(b.x) + dx, y = Math.floor(b.y) + dy;
+             if (canPlace(type, x, y)) candidates.push({x, y});
+           }
+         }
+         spots = candidates.map(p => {
+           let land = 0, mountain = 0;
+           const r = reach[type];
+           for (let dx = -r; dx <= r; dx += 4) for (let dy = -r; dy <= r; dy += 4) {
+             if (dx * dx + dy * dy > r * r) continue;
+             const x = p.x + dx + 2, y = p.y + dy + 2, i = y * M.w + x;
+             if (x < 0 || x >= M.w || y < 0 || y >= M.h || M.owner[i]) continue;
+             if (!M.known[i]) { land += 0.4; continue; }
+             const g = M.grounds[M.ter[i]];
+             if (g.land) land++;
+             if (g.mine) mountain++;
+           }
+           return {...p, score: land + (seekOre ? 2 : 0.3) * mountain};
+         }).filter(p => p.score >= 5).sort((a, b) => b.score - a.score);
+         cached[type] = spots.slice(0, 8);
+       }
+       const spot = spots.find(p => canPlace(type, p.x, p.y) &&
+         (!rejected || rejected.until <= time || rejected.type !== type || p.x !== rejected.x || p.y !== rejected.y));
+       if (!spot) { if (spots.length) cached[type] = []; continue; }
+       order('place', {type, x: spot.x, y: spot.y});
+       cached[type] = [];
+       if (military) expandAfter = time + (border.length < 5 ? 60 : 100);
+       break;
+     }
+   }
+   Object.assign(memory, {expandAfter, askAfter, spots: cached});
    return out;
  }
```

## v243

v243-16d36a9732c0: kit changed

Initial version in this history.

## v242

v242-dacc13112912: same

Initial version in this history.







## v241

v241-dacc13112912: kit changed

```diff
Kit v240-df98a7fbbb8c -> v241-dacc13112912: kit changed (kit (AI_SCRIPT_CHALLENGE.md), buildings.js, GAME_SUMMARY.md)

### kit (AI_SCRIPT_CHALLENGE.md)
@@ line 212 @@
        range, area (workplaces with a work area), archers, fighters (military buildings: their setting),
        repair (an armorer only: true|false, its repair tick-box, see Dropping gear; false while switches.gear is off)} ],
-     land: {tiles, grass, trees, rocks, water, mountain, unsearched}, ore: [ {x, y, ore} ore you have seen signs of ],
+     land: {tiles, grass, trees, rocks, water (water tiles next to your land: water is never owned), mountain, unsearched}, ore: [ {x, y, ore} ore you have seen signs of ],
      unsearched: [ {x, y, d} mountain on your land no geologist has searched, nearest first ],
      spots: { type: [ {x, y, d, n} ] } answers to last turn's ['ask', {spots: [types]}]: places where that building
@@ line 270 @@
    - Land: buildings may only stand on your own land. A military building pushes your border out (guard 14, tower 20,
      castle 26 tiles) only once a soldier is inside. A lookout tower (look) uncovers the map 24 tiles around; no land.
+   - Water is never owned (v241): circles and building rings claim land only, so a border ends at the shore and can
+     reach land across a lake. A fisher or water hut uses water within its range that touches (4 sides) land you own;
+     two sides may fish the same lake.
    - Gold (army plan, test version): outside your land a soldier fights at 60% strength (a bowman at 80% at least: the
      higher of 80% and what the gold gives him), plus up to 40% from the gold
@@ line 302 @@
    Each layer is a Uint8Array with one value per tile, index y*w+x, as far as your fog of war allows: known 0 = never
    seen (all other layers 0 there), 1 = seen before (as it was then, height included), 2 = seen now (your own land always). ter = the
-   kind of ground, an index into grounds (today 0 grass, 1 water, 2 mountain, 3 sand; unseen tiles read 0); tree 2 grown, 1 young; stone = rocks left; owner = side (0 nobody); occupied 1 = something
+   kind of ground, an index into grounds (today 0 grass, 1 water, 2 mountain, 3 sand; unseen tiles read 0); tree 2 grown, 1 young; stone = rocks left; owner = side (0 nobody; always 0 on water: water is never owned, v241); occupied 1 = something
    stands there (seen now only); fish = fish left in that water (seen now only); ore 0 not searched by a geologist,
    1 searched: nothing, 2+ = oreNames[ore-1]. oreNames is a plain list (since 201), the same for every value of ore:

### buildings.js
@@ line 8 @@
    forest:{n:'Forester', s:3, h:3, cost:{plank:3,stone:1}, tool:'shovel', range:10, roof:'#4f7a36', desc:'Plants new trees nearby'},
    saw:   {n:'Sawmill', s:3, h:3, door:'side', cost:{plank:3,stone:4}, tool:'saw', inputs:{log:8}, recipe:{in:{log:1}, out:'plank', time:7.5, verb:'Sawing planks'}, roof:'#a5562f', desc:'Turns logs into planks'},
-   fisher:{n:'Fisher', s:3, h:3, cost:{plank:3,stone:2}, tool:'rod', range:12, roof:'#4d6f86', desc:'Catches fish in nearby water. Fish slowly come back'},
-   waterhut:{n:'Water hut', s:3, h:3, cost:{plank:3,stone:4}, worker:true, water:true, range:10, roof:'#3f6f99', desc:'Fills buckets at shore water inside your border. Like every building it claims 1 tile of land around it, so building right next to a lake gives it water'},
+   fisher:{n:'Fisher', s:3, h:3, cost:{plank:3,stone:2}, tool:'rod', range:12, roof:'#4d6f86', desc:'Catches fish in water next to your land, within its range. Fish slowly come back'},
+   waterhut:{n:'Water hut', s:3, h:3, cost:{plank:3,stone:4}, worker:true, water:true, range:10, roof:'#3f6f99', desc:'Fills buckets at water next to your land, within its range. Water belongs to nobody: build it by a lake or the sea'},
    farm:  {n:'Grain farm', s:4, h:3, cost:{plank:6,stone:6}, tool:'scythe', range:8, roof:'#b8963e', desc:'Sows fields on open green land nearby and harvests the grain'},
    mill:  {n:'Mill', s:3, h:3, cost:{plank:3,stone:3}, worker:true, inputs:{grain:8}, recipe:{in:{grain:1}, out:'flour', time:4.5, verb:'Grinding flour'}, roof:'#c9b48a', desc:'Grinds grain into flour'},

### GAME_SUMMARY.md
@@ line 66 @@
  | Forester | `forest` | 3 plank, 1 stone | shovel | — | — | Plants new trees nearby |
  | Sawmill | `saw` | 3 plank, 4 stone | saw | log | plank (from log) | Turns logs into planks |
- | Fisher | `fisher` | 3 plank, 2 stone | rod | — | — | Catches fish in nearby water. Fish slowly come back |
- | Water hut | `waterhut` | 3 plank, 4 stone | — | — | — | Fills buckets at shore water inside your border. Like every building it claims 1 tile of land around it, so building right next to a lake gives it water |
+ | Fisher | `fisher` | 3 plank, 2 stone | rod | — | — | Catches fish in water next to your land, within its range. Fish slowly come back |
+ | Water hut | `waterhut` | 3 plank, 4 stone | — | — | — | Fills buckets at water next to your land, within its range. Water belongs to nobody: build it by a lake or the sea |
  | Grain farm | `farm` | 6 plank, 6 stone | scythe | — | — | Sows fields on open green land nearby and harvests the grain |
  | Mill | `mill` | 3 plank, 3 stone | — | grain | flour (from grain) | Grinds grain into flour |
@@ line 108 @@
  
  - Each building claims land around it. A border separates your land from the enemy's.
+ - Water belongs to nobody: only land is claimed, so a border ends at the shore (and may go on across a lake). A fisher
+   or water hut uses water within its range that touches your land; two sides may fish the same lake.
  
  ## Military
```











## v240

v240-df98a7fbbb8c: same

Initial version in this history.











## v239

v239-df98a7fbbb8c: kit changed

Initial version in this history.



























## v238

v238-931dca2c2334: kit changed

Initial version in this history.




































## v237

v237-cfe0e812b6af: same

Initial version in this history.




























































## v236

v236-cfe0e812b6af: same

Initial version in this history.
