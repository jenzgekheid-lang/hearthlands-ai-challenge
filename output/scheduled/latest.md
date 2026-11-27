# Tournament: scheduled

Game version 253. Written for: scheduled 253.

- scheduled: hearthlands-ai-challenge, commit 3bfb271

Maps 20261030, 777, 4242, 31, each twice (sides swapped), up to 60 game minutes (1x). 145 s.

Switches: the table defaults (src/data/rules.js).

Each game ends with the script's own game log: what it may know (its own side, and what happened to it or what it saw). Times are game min:sec.

| Opponent | Won | Lost | Undecided |
|---|---|---|---|
| original game NPC | 0 | 0 | 8 |

War and gold over all games (scheduled / opponents): buildings taken 1 / 0, killed 16 / 28, gold at the end (stock + vaults) 0 / 221, stuck towns 8 / 1.

## Games

Each row: buildings / military / land tiles / soldiers / people at the minute shown. First: game minute of the first smelter, smith, weaponsmith, barracks, tower, castle (- = never).

### Map 31: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 7/2/1605/9/30 | 32/6/2431/10/50 |
| 30 | 7/2/1605/9/30 | 68/11/4885/21/99 |
| 45 | 7/2/1605/9/30 | 81/17/8646/37/93 |
| 60 | 7/2/1605/9/30 | 88/23/13206/52/98 |
| first | - - - - - - | 10 11 20 20 27 40 |

First built by scheduled (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, guard 2, military 2, saw 2, guard x2 4, house2 4, military x2 4.

First built by original game NPC (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, house2 2, guard 3, guard x2 3, military 3, military x2 3, forest 4, hunter 4, saw 4, wood x2 4, quarry x2 5, waterhut 6, fisher 7, fisher x2 8, hunter x2 8, coalmine 9, house 9, ironmine 10, smelter 10, farm 11, smith 11, house x2 13, mill 13, bakery 14, coalmine x2 15, saw x2 16, forest x2 19, barracks 20, weaponsmith 20, farm x2 21, soldier 21, butcher 22, ironmine x2 22, pigfarm 22, barracks x2 24, weaponsmith x2 24, smelter x2 25, armorer 27, tower 27, goldmine 28, bakery x2 29, mill x2 29, goldsmelter 30, vault 31, vault x2 31, goldmine x2 33, pigfarm x2 33, tower x2 36, castle 40, house2 x2 46.

Stock at minutes 15/30/45 (scheduled): pick 3/3/3, hammer 3/3/3, shovel 2/2/2, plank 17/17/17, stone 9/9/9.

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 1, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 1, fallen 0, gold 0 in stock + 16 in vaults.

At the end (what scheduled could see): enemy buildings known 2 (military 1); soldiers outside buildings 7 (bowmen 3); military sites unfinished 0; posts waiting for a swordsman 0; pioneers 0; without resource: none.

Growth (what scheduled could see): last new building at minute 4; waiting: No grown trees in range inside your border x1; spare tools in stock: pick 3, hammer 3, shovel 2, axe 1, saw 0.

Soldiers every 5 min: 9 9 9 9 9 9 9 9 9 9 9 9 (original game NPC: 10 10 10 10 21 21 25 27 37 43 49 52).

First army orders (game min:sec): 1:30 march 1 soldiers -> 120,120; 4:00 march 1 soldiers -> 190,120.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 3 min, 1–3: settlers: No free settlers and every bed taken: build houses.
- 51 min, 10–60: stall: woodcutter: no grown trees in range inside your border 100% of the last 5 minutes.
- 49 min, 12–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (141 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 11 | 17 | 9 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 22 | 23 | 1605 | 4972 |
| 30 | 11 | 17 | 9 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 22 | 23 | 1605 | 4972 |
| 45 | 11 | 17 | 9 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 22 | 23 | 1605 | 4972 |
| 60 | 11 | 17 | 9 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 22 | 23 | 1605 | 4972 |

At the end: buildings (built+sites) guard 2, hq 1, quarry 1, wood 1, saw 1, house2 1.
People: carrier 22, soldier 7, worker 3, digger 2, builder 2, geologist 1; beds 20. Soldiers: sword 4, bow 3.

Goods produced in the game: log 16, stone 12, plank 9.
Goods consumed in the game: stone 21, plank 16, log 9, pick 2, axe 1, saw 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- quarry (60 building-min): Stone pile full, nothing needs it right now 95%, Cutting stone 3%, Stone pile full, waiting for carriers 1%, Bringing stone to the pile 1%, Worker picking up a pickaxe 0%
- wood (59 building-min): No grown trees in range inside your border 90%, Felling a tree 6%, Bringing a log to the pile 3%, Worker picking up an axe 0%, Working 0%
- guard (115 building-min): Idle 100%, Soldiers on the way 0%
- saw (58 building-min): Output pile full, nothing needs it right now 96%, Sawing planks 2%, Waiting for logs 2%, Stacking outside 0%, Worker picking up a saw 0%
- house2 (57 building-min): Idle 100%

Building sites, time per state (site-min): Builders at work 2, Leveling the ground 1, Waiting for a digger 1, Waiting for a builder 1, Waiting for materials 0.

Build order (placed at min:sec, finished at): quarry 0:02→0:22, wood 0:22→0:42, guard 0:44→1:21, saw 0:52→1:46, house2 1:48→3:05, guard 2:00→3:34.

Orders given: place 6, priority 5, fighters 2, march 2, profession 1, sendUnit 1. None refused.

People changing jobs: new carrier 20, carrier -> worker 3, carrier -> geologist 1.

People's orders (173 in all, 167 done): worker rest wood 17, worker gather wood 16, worker rest quarry 13, worker gather quarry 12, worker rest saw 10, worker toCraft saw 9, worker craft saw 9, carrier haul log wood -> saw 9, carrier haul stone pile -> house2 6, digger dig guard 4, carrier haul plank pile -> guard 4, carrier haul stone quarry -> guard 4, builder build guard 4, carrier haul stone pile -> saw 4. None failed.

Fights and contact: lost people sword 1; first saw player 2 at 5:00.

Your notes (3 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×3 15:00–45:00 v255 NPC-paced rush: quarry/wood 1/1, guards 2, ore mines 0/0, barracks 0, soldiers 9, carriers 22.


Script: 1802 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 31: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 8/2/1638/9/30 | 34/6/2728/10/56 |
| 30 | 8/2/1638/9/30 | 66/12/4828/28/92 |
| 45 | 8/2/1638/9/30 | 80/16/7792/46/114 |
| 60 | 8/2/1638/9/30 | 88/24/13120/63/97 |
| first | - - - - - - | 10 10 19 20 36 41 |

First built by scheduled (game minute; x2 = the second one; soldier = first trained): quarry 1, guard 2, military 2, wood 2, guard x2 3, military x2 3, saw 3, house2 4, fisher 5.

First built by original game NPC (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, guard 2, house2 2, military 2, coalmine 3, forest 3, guard x2 3, military x2 3, saw 3, quarry x2 4, wood x2 4, hunter 5, waterhut 5, ironmine 6, fisher 8, house 9, hunter x2 9, smelter 10, smith 10, farm 11, coalmine x2 12, mill 12, house x2 13, bakery 15, saw x2 16, ironmine x2 17, smelter x2 17, forest x2 18, weaponsmith 19, armorer 20, barracks 20, farm x2 21, pigfarm 21, soldier 22, goldmine 23, stonemine 26, weaponsmith x2 26, barracks x2 27, butcher 27, house2 x2 28, fisher x2 29, goldsmelter 29, vault 29, vault x2 30, goldmine x2 32, pigfarm x2 33, bakery x2 34, mill x2 34, tower 36, tower x2 37, castle 41.

Stock at minutes 15/30/45 (scheduled): pick 4/4/4, hammer 3/3/3, shovel 2/2/2, plank 13/13/13, stone 8/8/8.

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 1, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 1, fallen 0, gold 1 in stock + 51 in vaults.

At the end (what scheduled could see): enemy buildings known 2 (military 1); soldiers outside buildings 7 (bowmen 3); military sites unfinished 0; posts waiting for a swordsman 0; pioneers 0; without resource: none.

Growth (what scheduled could see): last new building at minute 5; waiting: nothing; spare tools in stock: pick 4, hammer 3, shovel 2, axe 1, saw 0.

Soldiers every 5 min: 9 9 9 9 9 9 9 9 9 9 9 9 (original game NPC: 10 10 10 10 23 28 31 37 46 52 55 63).

First army orders (game min:sec): 1:30 march 1 soldiers -> 120,120; 4:00 march 1 soldiers -> 50,120.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 1 min, 3: settlers: No free settlers and every bed taken: build houses.
- 49 min, 12–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (3 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 15 | 13 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 22 | 32 | 1638 | 5197 |
| 30 | 15 | 13 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 22 | 32 | 1638 | 5197 |
| 45 | 15 | 13 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 22 | 32 | 1638 | 5197 |
| 60 | 15 | 13 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 22 | 32 | 1638 | 5197 |

At the end: buildings (built+sites) guard 2, hq 1, quarry 1, wood 1, saw 1, house2 1, fisher 1.
People: carrier 22, soldier 7, worker 4, digger 2, builder 2; beds 20. Soldiers: sword 4, bow 3.

Goods produced in the game: log 19, stone 13, plank 8, fish 8.
Goods consumed in the game: stone 23, plank 19, log 8, pick 1, axe 1, saw 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- quarry (59 building-min): Stone pile full, nothing needs it right now 94%, Cutting stone 3%, Stone pile full, waiting for carriers 2%, Bringing stone to the pile 1%, Worker picking up a pickaxe 0%
- wood (59 building-min): Log pile full, nothing needs it right now 90%, Felling a tree 7%, Bringing a log to the pile 3%, Log pile full, waiting for carriers 0%, Worker picking up an axe 0%
- guard (115 building-min): Idle 100%, Soldiers on the way 0%
- saw (58 building-min): Output pile full, nothing needs it right now 95%, Waiting for logs 2%, Sawing planks 2%, Worker picking up a saw 0%, Stacking outside 0%
- house2 (56 building-min): Idle 100%
- fisher (55 building-min): Fish pile full, nothing needs it right now 98%, Fishing 1%, Worker picking up a fishing rod 1%, Bringing a fish to the pile 0%, Working 0%

Building sites, time per state (site-min): Leveling the ground 2, Builders at work 2, Waiting for a digger 1, Waiting for a builder 1.

Build order (placed at min:sec, finished at): quarry 0:02→0:32, wood 0:32→1:07, guard 1:08→1:40, saw 1:16→2:05, guard 2:00→2:53, house2 2:08→3:43, fisher 3:46→4:40.

Orders given: place 7, priority 6, march 2, fighters 2. None refused.

People changing jobs: new carrier 20, carrier -> worker 4.

People's orders (206 in all, 199 done): worker rest wood 20, worker gather wood 19, worker rest quarry 14, worker gather quarry 13, carrier haul log wood -> saw 11, worker rest saw 9, worker rest fisher 9, worker toCraft saw 8, worker craft saw 8, worker gather fisher 8, carrier haul stone pile -> guard 6, carrier haul plank pile -> house2 5, digger dig guard 4, carrier haul plank pile -> guard 4. None failed.

Fights and contact: lost people sword 1; first saw player 1 at 5:00.

Your notes (3 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×3 15:00–45:02 v255 NPC-paced rush: quarry/wood 1/1, guards 2, ore mines 0/0, barracks 0, soldiers 9, carriers 22.


Script: 1801 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 16/2/1641/12/19 | 31/6/2593/7/50 |
| 30 | 16/2/1641/13/18 | 59/7/3814/8/89 |
| 45 | 16/2/1641/13/18 | 79/17/8364/35/102 |
| 60 | 16/2/1641/13/18 | 90/27/13364/55/102 |
| first | 7 8 9 10 - - | 9 10 24 25 39 43 |

First built by scheduled (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, guard 2, military 2, guard x2 3, military x2 3, saw 3, house2 4, fisher 5, coalmine 6, ironmine 6, smelter 7, smith 8, quarry x2 9, weaponsmith 9, barracks 10, soldier 11, wood x2 14.

First built by original game NPC (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, guard 2, house2 2, military 2, fisher 3, saw 3, wood x2 3, hunter 4, quarry x2 4, guard x2 5, military x2 5, waterhut 5, coalmine 6, ironmine 6, hunter x2 7, house 9, smelter 9, smith 10, farm 11, mill 13, house x2 14, saw x2 14, bakery 15, coalmine x2 15, ironmine x2 16, forest 17, fisher x2 20, forest x2 20, smelter x2 21, farm x2 22, pigfarm 22, butcher 23, weaponsmith 24, armorer 25, barracks 25, barracks x2 26, weaponsmith x2 27, bakery x2 29, mill x2 29, soldier 31, pigfarm x2 32, goldmine 34, goldsmelter 35, vault 35, goldmine x2 37, tower 39, tower x2 40, castle 43, house2 x2 44.

Stock at minutes 15/30/45 (scheduled): pick 1/1/1, hammer 1/1/1, shovel 2/2/2, plank 8/8/8, stone 16/16/16.

War and gold at the end: scheduled: took 0, lost 0, killed 3, fallen 9, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 9, fallen 3, gold 2 in stock + 10 in vaults.

At the end (what scheduled could see): enemy buildings known 12 (military 4); soldiers outside buildings 11 (bowmen 1); military sites unfinished 0; posts waiting for a swordsman 0; pioneers 0; without resource: ironmine 1.

Growth (what scheduled could see): last new building at minute 14; waiting: No grown trees in range inside your border x1; Waiting for iron ore x1; Waiting for iron x1; spare tools in stock: pick 1, hammer 1, shovel 2, axe 1, saw 1.

Soldiers every 5 min: 9 9 12 13 13 13 13 13 13 13 13 13 (original game NPC: 10 10 7 7 7 8 18 23 35 43 48 55).

First army orders (game min:sec): 1:30 march 1 soldiers -> 120,120; 4:00 march 1 soldiers -> 190,120; 7:38 armyTarget sword=20; 7:38 armyTarget spear=8; 7:38 armyTarget bow=12; 10:00 armyReserve; 12:22 march 8 soldiers -> 200,120.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 49 min, 1–60: settlers: No free settlers and every bed taken: build houses.
- 8 min, 8–15: stall: iron mine: deposit worn out 92% of the last 5 minutes.
- 6 min, 10–20: stall: smelter: waiting for iron ore 87% of the last 5 minutes.
- 4 min, 11–20: stall: weaponsmith: waiting for iron 91% of the last 5 minutes.
- 32 min, 12–51: stall: smith: waiting for iron 100% of the last 5 minutes.
- 18 min, 13–60: carriers: smelter: waiting for iron ore 88% of the last 10 minutes while 1 lie in stock: too few carriers. Build more houses.
- 17 min, 14–60: carriers: smith: waiting for iron 100% of the last 10 minutes while 7 lie in stock: too few carriers. Build more houses.
- 11 min, 14–54: carriers: weaponsmith: waiting for iron 72% of the last 10 minutes while 3 lie in stock: too few carriers. Build more houses.
- 43 min, 18–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 40 min, 18–60: stall: quarry: stone pile full, waiting for carriers 100% of the last 5 minutes.
- 37 min, 18–60: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 1 min, 18: army: Lost 4 soldiers in the last 5 minutes.
- 37 min, 24–60: weapons: 20 weapons lie unused: the barracks needs free settlers (build houses).
- 15 min, 30–50: carriers: No idle carriers for the last 10 minutes: build more houses.
- 6 min, 50–55: stall: barracks: waiting for a free settler to train 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 10 | 8 | 16 | 9 | 0 | 0 | 0 | 0 | 0 | 19 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 47 | 1641 | 7086 |
| 30 | 15 | 8 | 16 | 13 | 0 | 0 | 0 | 0 | 0 | 25 | 0 | 0 | 0 | 0 | 4 | 1 | 4 | 0 | 57 | 1641 | 7086 |
| 45 | 15 | 8 | 16 | 13 | 0 | 0 | 0 | 0 | 0 | 25 | 0 | 0 | 0 | 0 | 7 | 3 | 7 | 0 | 62 | 1641 | 7086 |
| 60 | 15 | 8 | 16 | 10 | 0 | 0 | 0 | 0 | 0 | 23 | 1 | 7 | 0 | 0 | 8 | 4 | 8 | 0 | 72 | 1641 | 7086 |

At the end: buildings (built+sites) quarry 2, wood 2, guard 2, hq 1, saw 1, house2 1, fisher 1, coalmine 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1.
People: soldier 11, worker 11, digger 2, builder 2, carrier 2, geologist 1; beds 20. Soldiers: sword 10, bow 1.

Goods produced in the game: fish 206, coal 100, stone 51, ironore 43, log 42, iron 42, plank 31, sword 18, bow 8, spear 4, saw 1, pick 1, hammer 1, rod 1, axe 1.
Goods consumed in the game: fish 202, coal 77, stone 53, plank 47, ironore 42, iron 35, log 31, sword 10, pick 5, hammer 3, axe 2, bow 2, saw 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- quarry (111 building-min): Stone pile full, waiting for carriers 85%, Cutting stone 7%, Stone pile full, nothing needs it right now 6%, Bringing stone to the pile 2%, Worker picking up a pickaxe 0%
- wood (106 building-min): No grown trees in range inside your border 45%, Log pile full, waiting for carriers 41%, Felling a tree 9%, Bringing a log to the pile 4%, Worker picking up an axe 0%
- guard (116 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- saw (58 building-min): Output pile full, waiting for carriers 80%, Output pile full, nothing needs it right now 9%, Sawing planks 7%, Waiting for logs 2%, Stacking outside 1%
- house2 (56 building-min): Idle 100%
- fisher (55 building-min): Fish pile full, waiting for carriers 65%, Fishing 23%, Fish pile full, nothing needs it right now 6%, Bringing a fish to the pile 5%, Worker picking up a fishing rod 1%
- coalmine (55 building-min): Coal pile full, waiting for carriers 43%, Deposit thinning: mining coal 25%, Mining coal 15%, Needs bread or fish or meat: mining stopped 9%, Bringing coal out 5%
- ironmine (54 building-min): Deposit worn out: finding little iron ore 48%, Needs meat or fish: mining stopped 47%, Bringing iron ore out 2%, Came back empty-handed 1%, Fetching food 1%
- smelter (53 building-min): Waiting for iron ore 87%, Smelting iron 10%, Stacking outside 2%, Worker picking up a hammer 1%, Fetching from the pile 0%
- smith (53 building-min): Waiting for iron 97%, All tool targets met 1%, Worker picking up a hammer 1%, Forging fishing rod 0%, Forging hammer 0%
- weaponsmith (52 building-min): Waiting for iron 74%, Output pile full, waiting for carriers 16%, Forging sword 4%, Forging bow 2%, Stacking outside 2%
- barracks (50 building-min): Waiting for a free settler to train 81%, Waiting for weapons from the weaponsmith 13%, Weapons on the way 4%, Training soldiers 1%

Building sites, time per state (site-min): Builders at work 4, Leveling the ground 3, Waiting for a digger 3, Waiting for a builder 2.

Build order (placed at min:sec, finished at): quarry 0:02→0:25, wood 0:26→0:56, guard 0:58→1:38, saw 1:06→2:02, guard 2:00→2:52, house2 2:08→3:43, fisher 3:48→4:38, coalmine 4:40→5:25, ironmine 4:48→5:40, smelter 5:40→6:40, smith 6:42→7:29, weaponsmith 7:36→8:20, quarry 8:10→8:48, barracks 9:08→9:59, wood 12:50→13:33.

Orders given: place 15, priority 14, march 3, armyTarget 3, fighters 2, profession 1, sendUnit 1, armyReserve 1. None refused.

People changing jobs: new carrier 20, carrier -> soldier 12, carrier -> worker 11, carrier -> geologist 1.

People's orders (2274 in all, 2258 done): worker rest fisher 207, worker gather fisher 207, worker mine coalmine 167, worker mine ironmine 140, worker rest coalmine 111, carrier haul fish fisher -> ironmine 109, worker eat ironmine 109, worker eat coalmine 93, carrier haul fish fisher -> coalmine 91, worker rest ironmine 63, worker rest quarry 53, worker gather quarry 51, carrier haul coal coalmine -> smelter 47, worker rest wood 44. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×2.

Fights and contact: killed bow 3; lost people sword 5, bow 4; first saw player 2 at 5:00.

Your notes (3 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×3 15:00–45:00 v255 NPC-paced rush: quarry/wood 2/2, guards 2, ore mines 1/1, barracks 1, soldiers 13, carriers 2.


Script: 1826 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 9/2/1571/9/30 | 30/6/2752/10/50 |
| 30 | 9/2/1571/9/30 | 59/7/3637/18/82 |
| 45 | 9/2/1571/9/30 | 71/17/8516/43/77 |
| 60 | 9/2/1571/9/30 | 78/23/13141/60/80 |
| first | - - - - - - | 9 9 27 25 31 37 |

First built by scheduled (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, guard 2, military 2, saw 2, guard x2 4, house2 4, military x2 4, fisher 5, ironmine 6.

First built by original game NPC (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, guard 2, house2 2, military 2, fisher 3, saw 3, wood x2 3, guard x2 4, hunter 4, military x2 4, quarry x2 4, coalmine 5, waterhut 5, ironmine 7, house 8, hunter x2 9, smelter 9, smith 9, farm 10, bakery 11, mill 11, farm x2 12, house x2 13, goldmine 15, forest 16, saw x2 16, forest x2 17, goldsmelter 18, vault 18, vault x2 19, pigfarm 21, bakery x2 23, mill x2 23, pigfarm x2 23, house2 x2 24, barracks 25, barracks x2 26, butcher 27, coalmine x2 27, weaponsmith 27, goldmine x2 28, ironmine x2 28, soldier 29, weaponsmith x2 30, tower 31, tower x2 32, fisher x2 34, castle 37.

Stock at minutes 15/30/45 (scheduled): pick 2/2/2, hammer 3/3/3, shovel 2/2/2, plank 12/12/12, stone 11/11/11.

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 1, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 1, fallen 0, gold 0 in stock + 25 in vaults.

At the end (what scheduled could see): enemy buildings known 2 (military 0); soldiers outside buildings 7 (bowmen 3); military sites unfinished 0; posts waiting for a swordsman 0; pioneers 0; without resource: none.

Growth (what scheduled could see): last new building at minute 6; waiting: nothing; spare tools in stock: pick 2, hammer 3, shovel 2, axe 1, saw 0.

Soldiers every 5 min: 9 9 9 9 9 9 9 9 9 9 9 9 (original game NPC: 10 10 10 10 10 18 25 31 43 45 51 60).

First army orders (game min:sec): 1:30 march 1 soldiers -> 120,120; 4:00 march 1 soldiers -> 50,120.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 2–3: settlers: No free settlers and every bed taken: build houses.
- 49 min, 12–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 9 | 12 | 11 | 12 | 0 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 2 | 20 | 40 | 1571 | 5747 |
| 30 | 9 | 12 | 11 | 12 | 0 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 2 | 20 | 40 | 1571 | 5747 |
| 45 | 9 | 12 | 11 | 12 | 0 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 2 | 20 | 40 | 1571 | 5747 |
| 60 | 9 | 12 | 11 | 12 | 0 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 2 | 20 | 40 | 1571 | 5747 |

At the end: buildings (built+sites) guard 2, hq 1, quarry 1, wood 1, saw 1, house2 1, fisher 1, ironmine 1.
People: carrier 20, soldier 7, worker 5, digger 2, builder 2, geologist 1; beds 20. Soldiers: sword 4, bow 3.

Goods produced in the game: stone 17, log 16, fish 12, plank 11, ironore 8.
Goods consumed in the game: stone 24, plank 23, log 11, fish 6, pick 3, axe 1, saw 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- quarry (60 building-min): Stone pile full, nothing needs it right now 94%, Cutting stone 4%, Bringing stone to the pile 2%, Worker picking up a pickaxe 0%, Working 0%
- wood (59 building-min): Log pile full, nothing needs it right now 88%, Felling a tree 7%, Bringing a log to the pile 4%, Worker picking up an axe 0%, Working 0%
- guard (115 building-min): Idle 100%, Soldiers on the way 0%
- saw (58 building-min): Output pile full, nothing needs it right now 96%, Sawing planks 2%, Waiting for logs 1%, Stacking outside 0%, Worker picking up a saw 0%
- house2 (57 building-min): Idle 100%
- fisher (56 building-min): Fish pile full, nothing needs it right now 98%, Fishing 1%, Worker picking up a fishing rod 0%, Bringing a fish to the pile 0%, Idle 0%
- ironmine (55 building-min): Iron ore pile full, nothing needs it right now 97%, Mining iron ore 2%, Worker picking up a pickaxe 1%, Bringing iron ore out 0%, Fetching food 0%

Building sites, time per state (site-min): Leveling the ground 2, Builders at work 2, Waiting for a digger 2, Waiting for a builder 1.

Build order (placed at min:sec, finished at): quarry 0:02→0:28, wood 0:30→0:59, guard 1:00→1:33, saw 1:08→1:57, house2 1:58→3:23, guard 2:06→3:45, fisher 3:26→4:22, ironmine 4:22→5:13.

Orders given: place 8, priority 7, march 2, fighters 2, profession 1, sendUnit 1. None refused.

People changing jobs: new carrier 20, carrier -> worker 5, carrier -> geologist 1.

People's orders (268 in all, 260 done): worker rest quarry 18, worker gather quarry 17, worker rest wood 17, worker gather wood 16, worker rest fisher 13, worker rest saw 12, worker gather fisher 12, worker toCraft saw 11, worker craft saw 11, worker rest ironmine 9, carrier haul log wood -> saw 8, worker mine ironmine 8, carrier haul stone pile -> guard 6, carrier haul stone quarry -> house2 6. None failed.

Fights and contact: lost people sword 1; first saw player 1 at 5:00.

Your notes (3 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×3 15:00–45:02 v255 NPC-paced rush: quarry/wood 1/1, guards 2, ore mines 0/1, barracks 0, soldiers 9, carriers 20.


Script: 1802 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 9/3/1772/9/30 | 30/6/2816/10/50 |
| 30 | 9/3/1772/9/30 | 62/9/4212/14/86 |
| 45 | 9/3/1772/9/30 | 76/12/5652/33/97 |
| 60 | 9/3/1772/9/30 | 83/18/10623/61/89 |
| first | - - - - - - | 10 11 19 19 40 48 |

First built by scheduled (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, guard 2, military 2, guard x2 3, military x2 3, saw 3, house2 4, fisher 5.

First built by original game NPC (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, house2 2, guard 3, guard x2 3, military 3, military x2 3, saw 3, coalmine 4, quarry x2 4, wood x2 4, fisher 6, hunter 6, ironmine 7, house 9, hunter x2 9, smelter 10, waterhut 10, smith 11, farm 13, mill 13, house x2 14, bakery 15, saw x2 16, coalmine x2 17, barracks 19, forest 19, weaponsmith 19, ironmine x2 20, forest x2 21, smelter x2 21, soldier 21, farm x2 22, armorer 24, fisher x2 25, butcher 26, goldmine 26, pigfarm 26, goldsmelter 28, vault 28, vault x2 29, barracks x2 31, weaponsmith x2 31, bakery x2 33, pigfarm x2 33, mill x2 34, tower 40, goldmine x2 44, house2 x2 44, castle 48, tower x2 50.

Stock at minutes 15/30/45 (scheduled): pick 4/4/4, hammer 3/3/3, shovel 2/2/2, plank 14/14/14, stone 8/8/8.

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 1, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 1, fallen 0, gold 0 in stock + 30 in vaults.

At the end (what scheduled could see): enemy buildings known 3 (military 1); soldiers outside buildings 6 (bowmen 3); military sites unfinished 0; posts waiting for a swordsman 0; pioneers 0; without resource: none.

Growth (what scheduled could see): last new building at minute 13; waiting: No grown trees in range inside your border x1; spare tools in stock: pick 4, hammer 3, shovel 2, axe 1, saw 0.

Soldiers every 5 min: 9 9 9 9 9 9 9 9 9 9 9 9 (original game NPC: 10 10 10 10 14 14 14 20 33 39 54 61).

First army orders (game min:sec): 1:30 march 1 soldiers -> 120,120; 4:00 march 1 soldiers -> 190,120.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 1–3: settlers: No free settlers and every bed taken: build houses.
- 51 min, 10–60: stall: woodcutter: no grown trees in range inside your border 100% of the last 5 minutes.
- 40 min, 12–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (1 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 10 | 14 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 22 | 30 | 1772 | 5968 |
| 30 | 10 | 14 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 22 | 30 | 1772 | 5968 |
| 45 | 10 | 14 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 22 | 30 | 1772 | 5968 |
| 60 | 10 | 14 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 22 | 30 | 1772 | 5968 |

At the end: buildings (built+sites) guard 3, hq 1, quarry 1, wood 1, saw 1, house2 1, fisher 1.
People: carrier 22, soldier 6, worker 4, digger 2, builder 2; beds 20. Soldiers: sword 3, bow 3.

Goods produced in the game: log 17, stone 16, plank 11, fish 8.
Goods consumed in the game: stone 26, plank 21, log 11, axe 1, pick 1, saw 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- quarry (59 building-min): Stone pile full, nothing needs it right now 94%, Cutting stone 4%, Bringing stone to the pile 1%, Stone pile full, waiting for carriers 1%, Worker picking up a pickaxe 0%
- wood (59 building-min): No grown trees in range inside your border 90%, Felling a tree 7%, Bringing a log to the pile 3%, Worker picking up an axe 0%, Working 0%
- guard (163 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- saw (58 building-min): Output pile full, nothing needs it right now 95%, Sawing planks 2%, Waiting for logs 1%, Stacking outside 1%, Worker picking up a saw 0%
- house2 (56 building-min): Idle 100%
- fisher (55 building-min): Fish pile full, nothing needs it right now 98%, Fishing 1%, Worker picking up a fishing rod 1%, Bringing a fish to the pile 0%

Building sites, time per state (site-min): Leveling the ground 2, Builders at work 2, Waiting for a digger 2, Waiting for a builder 1.

Build order (placed at min:sec, finished at): quarry 0:02→0:31, wood 0:32→0:53, guard 0:54→1:41, saw 1:02→2:06, guard 2:00→2:57, house2 2:08→3:50, fisher 3:52→4:37, guard 12:00→12:54.

Orders given: place 8, priority 7, fighters 3, march 2. None refused.

People changing jobs: new carrier 20, carrier -> worker 4.

People's orders (227 in all, 219 done): worker rest wood 18, worker rest quarry 17, worker gather wood 17, worker gather quarry 16, worker rest saw 12, worker toCraft saw 11, worker craft saw 11, carrier haul log wood -> saw 11, worker rest fisher 9, carrier haul stone quarry -> guard 8, worker gather fisher 8, digger dig guard 6, carrier haul plank pile -> guard 6, builder build guard 6. None failed.

Fights and contact: lost people sword 1; first saw player 2 at 5:00.

Your notes (3 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×3 15:00–45:00 v255 NPC-paced rush: quarry/wood 1/1, guards 3, ore mines 0/0, barracks 0, soldiers 9, carriers 22.


Script: 1802 turns, 0.0 ms average, worst 2 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 16/2/1307/19/18 | 27/5/2070/5/40 |
| 30 | 16/2/1307/9/18 | 39/7/2662/15/42 |
| 45 | 16/2/1307/9/18 | 64/14/4837/27/80 |
| 60 | 16/2/1307/9/18 | 80/16/7252/35/92 |
| first | 8 8 10 11 - - | 15 16 16 18 25 - |

First built by scheduled (game minute; x2 = the second one; soldier = first trained): quarry 1, guard 2, military 2, wood 2, saw 3, guard x2 4, military x2 4, house2 5, coalmine 6, fisher 6, ironmine 7, smelter 8, smith 8, quarry x2 9, weaponsmith 10, barracks 11, soldier 11, wood x2 11.

First built by original game NPC (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, guard 2, house2 2, military 2, fisher 3, saw 3, wood x2 3, forest 4, hunter 4, quarry x2 4, guard x2 5, military x2 5, coalmine 6, ironmine 6, hunter x2 7, waterhut 9, farm 10, house 10, mill 11, bakery 12, farm x2 13, pigfarm 14, smelter 15, smith 16, weaponsmith 16, house x2 17, barracks 18, coalmine x2 18, ironmine x2 19, tower 25, goldmine 26, soldier 27, butcher 30, goldsmelter 34, vault 36, vault x2 36, fisher x2 39, saw x2 39, forest x2 43, weaponsmith x2 46, barracks x2 47, smelter x2 48, armorer 50, bakery x2 50, mill x2 50, pigfarm x2 53, tower x2 55, goldmine x2 59.

Stock at minutes 15/30/45 (scheduled): pick 1/1/1, hammer 1/1/1, shovel 2/2/2, plank 8/8/8, stone 16/16/16.

War and gold at the end: scheduled: took 1, lost 0, killed 13, fallen 13, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 1, killed 13, fallen 13, gold 1 in stock + 10 in vaults.

At the end (what scheduled could see): enemy buildings known 12 (military 1); soldiers outside buildings 7 (bowmen 2); military sites unfinished 0; posts waiting for a swordsman 0; pioneers 0; without resource: none.

Growth (what scheduled could see): last new building at minute 11; waiting: No grown trees in range inside your border x1; Waiting for coal x1; Waiting for a free settler to train x1; spare tools in stock: pick 1, hammer 1, shovel 2, axe 1, saw 1.

Soldiers every 5 min: 9 9 19 19 9 9 9 9 9 9 9 9 (original game NPC: 10 10 5 7 9 15 19 23 27 31 31 35).

First army orders (game min:sec): 1:30 march 1 soldiers -> 120,120; 4:00 march 1 soldiers -> 50,120; 8:58 armyTarget sword=20; 8:58 armyTarget spear=8; 8:58 armyTarget bow=12; 10:20 armyReserve; 12:24 march 8 soldiers -> 40,120; 13:46 attack 8 soldiers -> building 143.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 42 min, 3–51: settlers: No free settlers and every bed taken: build houses.
- 11 min, 10–60: stall: smith: waiting for coal 100% of the last 5 minutes.
- 49 min, 12–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 40 min, 12–51: carriers: smith: waiting for coal 100% of the last 10 minutes while 19 lie in stock: too few carriers. Build more houses.
- 4 min, 14–17: stall: smelter: waiting for coal 84% of the last 5 minutes.
- 37 min, 15–51: stall: quarry: stone pile full, waiting for carriers 100% of the last 5 minutes.
- 34 min, 18–51: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 16 min, 19–34: carriers: smelter: waiting for coal 71% of the last 10 minutes while 7 lie in stock: too few carriers. Build more houses.
- 40 min, 21–60: weapons: 18 weapons lie unused: the barracks needs free settlers (build houses).
- 5 min, 21–25: army: Lost 10 soldiers in the last 5 minutes.
- 13 min, 22–34: carriers: weaponsmith: waiting for iron 76% of the last 10 minutes while 5 lie in stock: too few carriers. Build more houses.
- 12 min, 25–36: stall: iron mine: needs meat or fish 100% of the last 5 minutes.
- 5 min, 41–50: carriers: smelter: waiting for iron ore 72% of the last 10 minutes while 6 lie in stock: too few carriers. Build more houses.
- 9 min, 52–60: stall: barracks: waiting for a free settler to train 100% of the last 5 minutes.
- 9 min, 52–60: stall: woodcutter: no grown trees in range inside your border 50% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 9 | 8 | 16 | 9 | 0 | 0 | 0 | 0 | 0 | 4 | 12 | 6 | 0 | 0 | 1 | 0 | 0 | 0 | 54 | 1307 | 6911 |
| 30 | 9 | 8 | 16 | 10 | 0 | 0 | 0 | 0 | 0 | 5 | 4 | 5 | 0 | 0 | 10 | 1 | 3 | 0 | 51 | 1307 | 6990 |
| 45 | 9 | 8 | 16 | 14 | 0 | 0 | 0 | 0 | 0 | 19 | 2 | 9 | 0 | 0 | 11 | 2 | 5 | 0 | 65 | 1307 | 6990 |
| 60 | 9 | 8 | 16 | 14 | 0 | 0 | 0 | 0 | 0 | 19 | 9 | 13 | 0 | 0 | 11 | 2 | 5 | 2 | 77 | 1307 | 6990 |

At the end: buildings (built+sites) quarry 2, wood 2, guard 2, hq 1, saw 1, house2 1, fisher 1, coalmine 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1.
People: worker 11, soldier 7, digger 2, builder 2, carrier 2, geologist 1; beds 20. Soldiers: sword 5, bow 2.

Goods produced in the game: fish 176, coal 98, ironore 55, stone 51, iron 46, log 36, plank 31, sword 21, bow 5, spear 2, saw 1, pick 1, hammer 1, rod 1, axe 1.
Goods consumed in the game: fish 168, coal 79, stone 53, plank 47, ironore 46, iron 33, log 31, sword 10, pick 5, hammer 3, axe 2, bow 2, saw 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- quarry (111 building-min): Stone pile full, waiting for carriers 72%, Stone pile full, nothing needs it right now 17%, Cutting stone 7%, Bringing stone to the pile 3%, Worker picking up a pickaxe 0%
- wood (108 building-min): No grown trees in range inside your border 46%, Log pile full, waiting for carriers 34%, Log pile full, nothing needs it right now 8%, Felling a tree 8%, Bringing a log to the pile 3%
- guard (115 building-min): Idle 100%, Soldiers on the way 0%
- saw (57 building-min): Output pile full, waiting for carriers 67%, Output pile full, nothing needs it right now 20%, Sawing planks 7%, Waiting for logs 4%, Stacking outside 1%
- house2 (56 building-min): Idle 100%
- fisher (55 building-min): Fish pile full, waiting for carriers 54%, Fish pile full, nothing needs it right now 20%, Fishing 20%, Bringing a fish to the pile 4%, Worker picking up a fishing rod 0%
- coalmine (54 building-min): Deposit thinning: mining coal 36%, Needs bread or fish or meat: mining stopped 17%, Coal pile full, nothing needs it right now 16%, Mining coal 16%, Coal pile full, waiting for carriers 8%
- ironmine (54 building-min): Needs meat or fish: mining stopped 47%, Iron ore pile full, nothing needs it right now 16%, Deposit thinning: mining iron ore 12%, Mining iron ore 10%, Iron ore pile full, waiting for carriers 10%
- smelter (53 building-min): Waiting for coal 35%, Waiting for iron ore 27%, Output pile full, nothing needs it right now 16%, Smelting iron 11%, Output pile full, waiting for carriers 6%
- smith (52 building-min): Waiting for coal 98%, Worker picking up a hammer 1%, Forging saw 0%, Stacking outside 0%, Forging pickaxe 0%
- weaponsmith (50 building-min): Output pile full, waiting for carriers 36%, Waiting for iron 34%, Output pile full, nothing needs it right now 17%, Forging sword 5%, Waiting for coal 3%
- barracks (50 building-min): Waiting for a free settler to train 90%, Waiting for weapons from the weaponsmith 5%, Weapons on the way 4%, Training soldiers 1%

Building sites, time per state (site-min): Builders at work 4, Leveling the ground 4, Waiting for a digger 2, Waiting for a builder 2.

Build order (placed at min:sec, finished at): quarry 0:02→0:35, wood 0:36→1:11, guard 1:12→1:59, saw 1:20→2:36, guard 2:04→3:00, house2 2:36→4:10, fisher 4:12→5:02, coalmine 5:04→5:48, ironmine 5:12→6:02, smelter 6:04→7:05, smith 7:06→7:45, quarry 7:46→8:34, weaponsmith 8:56→9:48, barracks 9:28→10:19, wood 10:08→10:59.

Demolished or burned: guard (burned) 13:52.

Orders given: place 15, priority 14, march 3, armyTarget 3, fighters 2, profession 1, sendUnit 1, armyReserve 1, attack 1, release 1. None refused.

People changing jobs: new carrier 20, carrier -> soldier 12, carrier -> worker 11, carrier -> geologist 1, new soldier 1.

People's orders (2125 in all, 2110 done): worker mine coalmine 191, worker rest fisher 177, worker gather fisher 176, carrier haul fish fisher -> coalmine 121, worker eat coalmine 118, worker rest coalmine 110, worker mine ironmine 89, worker rest ironmine 68, worker rest quarry 53, carrier haul coal coalmine -> smelter 52, worker gather quarry 51, worker eat ironmine 50, carrier haul fish fisher -> ironmine 47, carrier haul ironore ironmine -> smelter 47. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×3.

Fights and contact: attacked enemy buildings 1 times (first 13:46); took guard 13:51; killed bow 3, sword 10; lost people sword 10, bow 3; first saw player 1 at 5:00.

Your notes (3 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×3 15:00–45:02 v255 NPC-paced rush: quarry/wood 2/2, guards 2, ore mines 1/1, barracks 1, soldiers 9, carriers 2.


Script: 1862 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 7/2/1563/9/30 | 24/6/2971/10/40 |
| 30 | 7/2/1563/9/30 | 26/6/3364/10/40 |
| 45 | 7/2/1563/9/30 | 26/6/3762/10/40 |
| 60 | 7/2/1563/9/30 | 26/6/4165/10/40 |
| first | - - - - - - | 9 10 - - - - |

First built by scheduled (game minute; x2 = the second one; soldier = first trained): quarry 1, guard 2, military 2, wood 2, guard x2 3, military x2 3, saw 3, house2 4.

First built by original game NPC (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, house2 2, guard 3, guard x2 3, military 3, military x2 3, saw 3, wood x2 3, coalmine 4, quarry x2 4, fisher 5, hunter 7, waterhut 7, hunter x2 8, ironmine 8, house 9, smelter 9, smith 10, goldmine 15, goldsmelter 15, vault 16, vault x2 16.

Stock at minutes 15/30/45 (scheduled): pick 4/4/4, hammer 3/3/3, shovel 2/2/2, plank 16/16/16, stone 8/8/8.

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 1, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 1, fallen 0, gold 0 in stock + 44 in vaults, STUCK (town stopped growing).

At the end (what scheduled could see): enemy buildings known 2 (military 1); soldiers outside buildings 7 (bowmen 3); military sites unfinished 0; posts waiting for a swordsman 0; pioneers 0; without resource: none.

Growth (what scheduled could see): last new building at minute 4; waiting: nothing; spare tools in stock: pick 4, hammer 3, shovel 2, axe 1, saw 0.

Soldiers every 5 min: 9 9 9 9 9 9 9 9 9 9 9 9 (original game NPC: 10 10 10 10 10 10 10 10 10 10 10 10).

First army orders (game min:sec): 1:30 march 1 soldiers -> 120,120; 4:00 march 1 soldiers -> 190,120.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 1 min, 3: settlers: No free settlers and every bed taken: build houses.
- 49 min, 12–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (128 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 16 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 23 | 24 | 1563 | 5330 |
| 30 | 16 | 16 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 23 | 24 | 1563 | 5330 |
| 45 | 16 | 16 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 23 | 24 | 1563 | 5330 |
| 60 | 16 | 16 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 23 | 24 | 1563 | 5330 |

At the end: buildings (built+sites) guard 2, hq 1, quarry 1, wood 1, saw 1, house2 1.
People: carrier 23, soldier 7, worker 3, digger 2, builder 2; beds 20. Soldiers: sword 4, bow 3.

Goods produced in the game: log 20, stone 11, plank 8.
Goods consumed in the game: stone 21, plank 16, log 8, pick 1, axe 1, saw 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- quarry (59 building-min): Stone pile full, nothing needs it right now 94%, Cutting stone 3%, Stone pile full, waiting for carriers 2%, Bringing stone to the pile 1%, Worker picking up a pickaxe 0%
- wood (59 building-min): Log pile full, nothing needs it right now 90%, Felling a tree 7%, Bringing a log to the pile 2%, Worker picking up an axe 0%, Working 0%
- guard (116 building-min): Idle 100%, Soldiers on the way 0%
- saw (58 building-min): Output pile full, nothing needs it right now 96%, Sawing planks 2%, Waiting for logs 1%, Worker picking up a saw 1%, Idle 0%
- house2 (56 building-min): Idle 100%

Building sites, time per state (site-min): Builders at work 2, Leveling the ground 2, Waiting for a digger 1, Waiting for a builder 1, Waiting for materials 0.

Build order (placed at min:sec, finished at): quarry 0:02→0:33, wood 0:34→1:02, guard 1:02→1:32, saw 1:10→2:05, guard 2:00→2:52, house2 2:08→3:43.

Orders given: place 6, priority 5, march 2, fighters 2. None refused.

People changing jobs: new carrier 20, carrier -> worker 3.

People's orders (179 in all, 173 done): worker rest wood 21, worker gather wood 20, worker rest quarry 12, carrier haul log wood -> saw 12, worker gather quarry 11, worker rest saw 9, worker toCraft saw 8, worker craft saw 8, builder build guard 6, carrier haul stone pile -> house2 6, carrier haul plank pile -> house2 5, digger dig guard 4, carrier haul plank pile -> guard 4, carrier haul stone pile -> saw 4. None failed.

Fights and contact: lost people sword 1; first saw player 2 at 5:00.

Your notes (3 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×3 15:00–45:00 v255 NPC-paced rush: quarry/wood 1/1, guards 2, ore mines 0/0, barracks 0, soldiers 9, carriers 23.


Script: 1802 turns, 0.0 ms average, worst 2 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 8/2/1531/9/30 | 30/6/3095/10/42 |
| 30 | 8/2/1531/9/30 | 62/8/4139/20/80 |
| 45 | 8/2/1531/9/30 | 72/13/7617/38/92 |
| 60 | 8/2/1531/9/30 | 78/18/11118/60/90 |
| first | - - - - - - | 11 12 23 23 36 41 |

First built by scheduled (game minute; x2 = the second one; soldier = first trained): quarry 1, guard 2, military 2, wood 2, guard x2 3, military x2 3, saw 3, house2 4, fisher 5.

First built by original game NPC (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, guard 2, house2 2, military 2, coalmine 3, quarry x2 3, saw 3, wood x2 3, fisher 4, guard x2 4, hunter 4, military x2 4, waterhut 7, farm 8, hunter x2 8, mill 8, bakery 9, house 9, ironmine 10, smelter 11, smith 12, goldmine 14, forest 15, house x2 15, goldsmelter 16, vault 16, saw x2 17, vault x2 17, coalmine x2 19, forest x2 19, farm x2 21, pigfarm 22, barracks 23, butcher 23, ironmine x2 23, weaponsmith 23, weaponsmith x2 24, barracks x2 25, smelter x2 26, bakery x2 27, soldier 27, mill x2 28, pigfarm x2 30, armorer 32, tower 36, fisher x2 37, house2 x2 39, castle 41, tower x2 43, goldmine x2 54.

Stock at minutes 15/30/45 (scheduled): pick 3/3/3, hammer 3/3/3, shovel 2/2/2, plank 16/16/16, stone 15/15/15.

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 1, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 1, fallen 0, gold 1 in stock + 30 in vaults.

At the end (what scheduled could see): enemy buildings known 2 (military 1); soldiers outside buildings 7 (bowmen 3); military sites unfinished 0; posts waiting for a swordsman 0; pioneers 0; without resource: none.

Growth (what scheduled could see): last new building at minute 5; waiting: nothing; spare tools in stock: pick 3, hammer 3, shovel 2, axe 1, saw 0.

Soldiers every 5 min: 9 9 9 9 9 9 9 9 9 9 9 9 (original game NPC: 10 10 10 10 10 20 23 36 38 47 53 60).

First army orders (game min:sec): 1:30 march 1 soldiers -> 120,120; 4:00 march 1 soldiers -> 50,120.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 1 min, 3: settlers: No free settlers and every bed taken: build houses.
- 50 min, 11–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (60 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 10 | 16 | 15 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 21 | 32 | 1531 | 5119 |
| 30 | 10 | 16 | 15 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 21 | 32 | 1531 | 5119 |
| 45 | 10 | 16 | 15 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 21 | 32 | 1531 | 5119 |
| 60 | 10 | 16 | 15 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 21 | 32 | 1531 | 5119 |

At the end: buildings (built+sites) guard 2, hq 1, quarry 1, wood 1, saw 1, house2 1, fisher 1.
People: carrier 21, soldier 7, worker 4, digger 2, builder 2, geologist 1; beds 20. Soldiers: sword 4, bow 3.

Goods produced in the game: stone 20, log 17, plank 11, fish 8.
Goods consumed in the game: stone 23, plank 19, log 11, pick 2, axe 1, saw 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- quarry (60 building-min): Stone pile full, nothing needs it right now 93%, Cutting stone 5%, Bringing stone to the pile 2%, Worker picking up a pickaxe 0%, Working 0%
- wood (59 building-min): Log pile full, nothing needs it right now 89%, Felling a tree 7%, Bringing a log to the pile 4%, Worker picking up an axe 0%, Working 0%
- guard (116 building-min): Idle 100%, Soldiers on the way 0%
- saw (58 building-min): Output pile full, nothing needs it right now 96%, Sawing planks 2%, Waiting for logs 1%, Stacking outside 0%, Worker picking up a saw 0%
- house2 (56 building-min): Idle 100%
- fisher (55 building-min): Fish pile full, nothing needs it right now 98%, Fishing 1%, Worker picking up a fishing rod 0%, Bringing a fish to the pile 0%, Working 0%

Building sites, time per state (site-min): Leveling the ground 2, Builders at work 2, Waiting for a digger 1, Waiting for a builder 1.

Build order (placed at min:sec, finished at): quarry 0:02→0:27, wood 0:28→1:05, guard 1:06→1:50, saw 1:14→2:17, guard 2:00→2:35, house2 2:18→3:46, fisher 3:48→4:55.

Orders given: place 7, priority 6, march 2, fighters 2, profession 1, sendUnit 1. None refused.

People changing jobs: new carrier 20, carrier -> worker 4, carrier -> geologist 1.

People's orders (225 in all, 218 done): worker rest quarry 21, worker gather quarry 20, worker rest wood 18, worker gather wood 17, worker rest saw 12, worker toCraft saw 11, worker craft saw 11, carrier haul log wood -> saw 9, worker rest fisher 9, worker gather fisher 8, carrier haul stone quarry -> guard 6, carrier haul stone quarry -> house2 6, carrier haul plank pile -> house2 5, digger dig guard 4. None failed.

Fights and contact: lost people sword 1; first saw player 1 at 5:00.

Your notes (3 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×3 15:00–45:02 v255 NPC-paced rush: quarry/wood 1/1, guards 2, ore mines 0/0, barracks 0, soldiers 9, carriers 21.


Script: 1801 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.
