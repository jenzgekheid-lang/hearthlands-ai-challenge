# Kit changelog

Generated with tools/kit-version.js; read VERSION and this file before editing a script.

## v253

v253-7e5c07cfa2dd: kit changed

```diff
Kit v252-9b6f73b92453 -> v253-7e5c07cfa2dd: kit changed (kit (AI_SCRIPT_CHALLENGE.md))

### kit (AI_SCRIPT_CHALLENGE.md)
@@ line 37 @@
                          may be gone, or manned differently, by now ] },
    over: null or {winners},
-   switches: {vault, banner, armor, vet, gear, dock, hunter, carryfair, backslope, behind} true|false, the same every turn: which optional mechanics this game has.
+   switches: {vault, banner, armor, vet, gear, dock, hunter, carryfair, backslope, behind, bandpass} true|false, the same every turn: which optional mechanics this game has.
              Since version 244 (19 Nov 2026) every switch is on everywhere: the live game, the arena, tournaments and
              the lab all play with all of them on, armor and bannermen included (scripts written before then met
@@ line 56 @@
              building (toward -x,-y; 2-4 deep by type, 0 for mines and yards) can't be walked or stood on, except doors
              and the 2 tiles in front of a door; a site whose door would lie in a band is refused ('Nobody can walk to the
-             door'). Nothing to order for it.
+             door'). Nothing to order for it. bandpass (24 Nov 2026, needs behind): a site is refused when the band
+             its finished building would get would cut the walkable ground around it in two, looked at within 4 tiles of
+             the band ('This would block the way past'): at least one way past every building stays open. Nothing to
+             order for it.
    gear: [{it, x, y}] weapons ('sword', 'spear', 'bow') and broken armor ('brokenarmor') lying where soldiers fell, on
          tiles you see now (switches.gear; empty while it is off). Once on someone's land they become goods on that
```

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

Initial version in this history.

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
