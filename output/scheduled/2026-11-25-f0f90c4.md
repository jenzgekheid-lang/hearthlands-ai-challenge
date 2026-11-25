# Tournament: scheduled

Game version 253. Written for: scheduled 253.

- scheduled: hearthlands-ai-challenge, commit f0f90c4

Maps 20261030, 777, 4242, 31, each twice (sides swapped), up to 60 game minutes (1x). 143 s.

Switches: the table defaults (src/data/rules.js).

Each game ends with the script's own game log: what it may know (its own side, and what happened to it or what it saw). Times are game min:sec.

| Opponent | Won | Lost | Undecided |
|---|---|---|---|
| original game NPC | 0 | 0 | 8 |

War and gold over all games (scheduled / opponents): buildings taken 0 / 0, killed 0 / 8, gold at the end (stock + vaults) 0 / 325, stuck towns 8 / 0.

## Games

Each row: buildings / military / land tiles / soldiers / people at the minute shown. First: game minute of the first smelter, smith, weaponsmith, barracks, tower, castle (- = never).

### Map 31: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 21/3/1517/9/40 | 29/6/2417/10/47 |
| 30 | 23/3/1524/9/40 | 64/11/5001/22/90 |
| 45 | 23/3/1524/9/40 | 80/16/8100/33/107 |
| 60 | 23/3/1524/9/40 | 83/19/10523/40/100 |
| first | - - - - - - | 14 15 21 24 27 41 |

First built by scheduled (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, house 2, saw 2, wood x2 2, forest 3, guard 3, military 3, hunter 4, ironmine 4, waterhut 4, guard x2 5, house x2 5, military x2 5, forest x2 9, farm 12, mill 12, bakery 13, butcher 15, pigfarm 15, farm x2 18.

First built by original game NPC (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, house2 2, guard 3, guard x2 3, military 3, military x2 3, forest 4, hunter 4, saw 4, wood x2 4, quarry x2 5, fisher 6, waterhut 7, coalmine 8, hunter x2 8, ironmine 8, farm 9, house 10, mill 10, bakery 11, farm x2 12, pigfarm 13, smelter 14, house x2 15, smith 15, coalmine x2 16, saw x2 18, fisher x2 19, weaponsmith 21, butcher 23, forest x2 23, barracks 24, ironmine x2 24, soldier 24, smelter x2 26, barracks x2 27, tower 27, house2 x2 28, weaponsmith x2 28, goldmine 29, tower x2 29, bakery x2 30, goldsmelter 31, mill x2 31, vault 31, goldmine x2 32, vault x2 32, armorer 34, stonemine 35, pigfarm x2 36, castle 41.

Stock at minutes 15/30/45 (scheduled): pick 2/2/2, hammer 3/3/3, shovel 0/0/0, plank 8/8/8, stone 5/8/8.

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 1, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 1, fallen 0, gold 1 in stock + 72 in vaults.

At the end (what scheduled could see): enemy buildings known 2 (military 1); soldiers outside buildings 7 (bowmen 3); military sites unfinished 0; posts waiting for a swordsman 1; pioneers 0; without resource: none.

Growth (what scheduled could see): last new building at minute 20; waiting: No free ground to plant in range inside your border x2; Waiting for a swordsman x1; Needs a worker with an axe x1; spare tools in stock: pick 2, hammer 3, shovel 0, axe 0, saw 0.

Soldiers every 5 min: 9 9 9 9 9 9 9 9 9 9 9 9 (original game NPC: 10 10 10 10 17 22 24 30 33 36 36 40).

First army orders (game min:sec): 0:00 armyReserve; 1:30 march 1 soldiers -> 120,120; 4:30 march 1 soldiers -> 190,120.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 1–4: settlers: No free settlers and every bed taken: build houses.
- 20 min, 6–25: stall: hunter: no game in range inside your border 62% of the last 5 minutes.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 4 min, 14–17: stall: mill: waiting for grain 59% of the last 5 minutes.
- 44 min, 17–60: stall: butcher: needs a worker with an axe 100% of the last 5 minutes.
- 41 min, 20–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 37 min, 24–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 19 | 8 | 5 | 6 | 7 | 1 | 12 | 6 | 4 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 1 | 19 | 40 | 1517 | 4822 |
| 30 | 24 | 8 | 8 | 6 | 8 | 8 | 20 | 27 | 12 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 1 | 21 | 96 | 1524 | 4822 |
| 45 | 24 | 8 | 8 | 6 | 8 | 8 | 20 | 27 | 12 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 1 | 21 | 96 | 1524 | 4822 |
| 60 | 24 | 8 | 8 | 6 | 8 | 8 | 20 | 27 | 12 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 1 | 21 | 96 | 1524 | 4822 |

At the end: buildings (built+sites) house 3, guard 3, farm 3, wood 2, forest 2, hq 1, quarry 1, saw 1, hunter 1, waterhut 1, ironmine 1, mill 1, bakery 1, pigfarm 1, butcher 1.
People: carrier 21, worker 14, soldier 7, digger 2, builder 2, geologist 1; beds 30. Soldiers: sword 4, bow 3.

Goods produced in the game: log 79, stone 64, grain 61, plank 59, water 42, flour 20, pig 14, meat 11, ironore 8, bread 8.
Goods consumed in the game: plank 75, stone 74, log 59, grain 34, water 22, flour 8, pick 3, meat 3, axe 2, shovel 2, scythe 2, saw 1, bow 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (118 building-min): Log pile full, nothing needs it right now 80%, Felling a tree 15%, Bringing a log to the pile 5%, Worker picking up an axe 0%, No grown trees in range inside your border 0%
- quarry (59 building-min): Stone pile full, nothing needs it right now 75%, Cutting stone 17%, Bringing stone to the pile 8%, Worker picking up a pickaxe 0%, Idle 0%
- saw (59 building-min): Output pile full, nothing needs it right now 84%, Sawing planks 13%, Stacking outside 3%, Fetching from the pile 0%, Worker picking up a saw 0%
- house (168 building-min): Idle 100%
- forest (109 building-min): No free ground to plant in range inside your border 76%, Planting a sapling 23%, Worker picking up a shovel 0%, Working 0%
- guard (167 building-min): Idle 68%, Waiting for a swordsman: train one at the barracks 32%, Soldiers on the way 0%, Waiting for a soldier 0%
- hunter (57 building-min): Meat pile full, nothing needs it right now 62%, No game in range inside your border 33%, Hunting 3%, Bringing meat to the pile 2%, Worker picking up a bow 0%
- waterhut (57 building-min): Water pile full, nothing needs it right now 86%, Fetching water 7%, Bringing water to the pile 7%, Worker on the way 0%, Working 0%
- ironmine (56 building-min): Iron ore pile full, nothing needs it right now 96%, Mining iron ore 3%, Worker picking up a pickaxe 0%, Bringing iron ore out 0%, Needs meat or fish: mining stopped 0%
- farm (132 building-min): Grain pile full, nothing needs it right now 61%, Needs a worker with a scythe 31%, Sowing a field 4%, Harvesting grain 2%, Bringing grain to the pile 1%
- mill (48 building-min): Output pile full, nothing needs it right now 90%, Waiting for grain 7%, Grinding flour 3%, Stacking outside 1%, Fetching from the pile 0%
- bakery (48 building-min): Output pile full, nothing needs it right now 94%, Baking bread 4%, Waiting for flour 1%, Waiting for flour and water 0%, Stacking outside 0%
- pigfarm (46 building-min): Output pile full, nothing needs it right now 90%, Raising a pig 7%, Waiting for grain 2%, Stacking outside 1%, Worker on the way 0%
- butcher (45 building-min): Needs a worker with an axe 100%, Idle 0%

Building sites, time per state (site-min): Leveling the ground 8, Builders at work 6, Waiting for a digger 5, Waiting for a builder 4.

Build order (placed at min:sec, finished at): wood 0:02→0:21, quarry 0:22→0:43, saw 0:44→1:23, house 0:56→1:45, wood 1:08→1:58, forest 1:24→2:16, guard 1:46→2:43, hunter 2:02→3:07, waterhut 2:16→3:30, ironmine 3:14→3:49, guard 3:26→4:09, house 3:48→4:35, house 4:44→5:23, guard 4:56→5:56, forest 7:20→8:24, farm 10:00→11:14, mill 10:14→11:44, bakery 11:20→12:10, pigfarm 12:38→14:08, butcher 13:32→14:43, farm 15:16→17:19, farm 17:14→19:21.

Orders given: place 22, priority 15, march 2, armyReserve 1, toolKeep 1, profession 1, sendUnit 1. None refused.

People changing jobs: new carrier 30, carrier -> worker 14, carrier -> geologist 1.

People's orders (1737 in all, 1720 done): worker rest forest 159, worker gather forest 157, worker rest farm 133, worker gather farm 131, worker rest wood 81, worker gather wood 79, worker rest quarry 65, worker gather quarry 64, carrier haul log wood -> saw 63, worker rest saw 60, worker toCraft saw 59, worker craft saw 59, worker rest waterhut 43, worker gather waterhut 42. None failed.

Fights and contact: lost people sword 1; first saw player 2 at 5:00.

Your notes (3 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×3 15:00–45:00 v254 adaptive builder: houses 3/0, guards 3, mines 0/1, carriers 21 idle 21, soldiers 9, sites 0.


Script: 1802 turns, 0.1 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 31: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 19/2/1277/9/30 | 29/6/2483/10/50 |
| 30 | 21/2/1277/9/50 | 53/8/3859/20/70 |
| 45 | 21/2/1277/9/50 | 78/13/7092/41/109 |
| 60 | 21/2/1277/9/50 | 85/19/12039/53/97 |
| first | - - - - - - | 12 16 22 28 31 40 |

First built by scheduled (game minute; x2 = the second one; soldier = first trained): wood 1, quarry 2, saw 2, forest 3, house 3, wood x2 3, fisher 4, guard 4, hunter 4, military 4, guard x2 5, military x2 5, waterhut 5, house x2 6, forest x2 7, farm 12, mill 12, bakery 13, pigfarm 15.

First built by original game NPC (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, guard 2, house2 2, military 2, coalmine 3, forest 3, guard x2 3, military x2 3, saw 3, quarry x2 4, wood x2 4, hunter 5, waterhut 5, farm 7, mill 7, hunter x2 8, fisher 9, house 9, ironmine 10, bakery 11, smelter 12, farm x2 13, house x2 13, pigfarm 14, smith 16, coalmine x2 17, butcher 18, ironmine x2 18, saw x2 20, smelter x2 21, weaponsmith 22, stonemine 23, weaponsmith x2 24, stonemine x2 25, forest x2 27, barracks 28, soldier 28, armorer 29, barracks x2 30, tower 31, house2 x2 32, tower x2 32, goldmine 33, goldsmelter 34, vault 34, vault x2 35, bakery x2 36, mill x2 36, pigfarm x2 36, castle 40, fisher x2 43, goldmine x2 43.

Stock at minutes 15/30/45 (scheduled): pick 4/3/3, hammer 3/3/3, shovel 0/0/0, plank 6/8/8, stone 1/8/8.

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 1, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 1, fallen 0, gold 1 in stock + 49 in vaults.

At the end (what scheduled could see): enemy buildings known 2 (military 1); soldiers outside buildings 8 (bowmen 3); military sites unfinished 0; posts waiting for a swordsman 1; pioneers 0; without resource: none.

Growth (what scheduled could see): last new building at minute 18; waiting: No free ground to plant in range inside your border x2; Waiting for a swordsman x1; Needs a worker with a shovel x1; spare tools in stock: pick 3, hammer 3, shovel 0, axe 0, saw 0.

Soldiers every 5 min: 9 9 9 9 9 9 9 9 9 9 9 9 (original game NPC: 10 10 10 10 10 20 20 30 41 41 49 53).

First army orders (game min:sec): 0:00 armyReserve; 1:30 march 1 soldiers -> 120,120; 4:30 march 1 soldiers -> 50,120.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 2–15: settlers: No free settlers and every bed taken: build houses.
- 25 min, 6–30: stall: hunter: no game in range inside your border 59% of the last 5 minutes.
- 1 min, 11: orders: 1 order refused this minute: place: This would block the way past.
- 41 min, 12–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 2 min, 14–15: stall: mill: waiting for grain 60% of the last 5 minutes.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (3 mountain tiles).
- 1 min, 17: stall: pig farm: waiting for grain 64% of the last 5 minutes.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 37 min, 24–60: stall: forest: no free ground to plant in range inside your border 67% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 17 | 9 | 4 | 14 | 7 | 1 | 15 | 6 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 36 | 1277 | 4342 |
| 30 | 24 | 8 | 8 | 14 | 8 | 8 | 20 | 17 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 32 | 88 | 1277 | 4349 |
| 45 | 24 | 8 | 8 | 14 | 8 | 8 | 20 | 17 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 32 | 88 | 1277 | 4349 |
| 60 | 24 | 8 | 8 | 14 | 8 | 8 | 20 | 17 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 32 | 88 | 1277 | 4349 |

At the end: buildings (built+sites) house 4, forest 3, wood 2, guard 2, hq 1, quarry 1, saw 1, fisher 1, hunter 1, waterhut 1, farm 1, mill 1, bakery 1, pigfarm 1.
People: carrier 32, worker 13, soldier 8, digger 2, builder 2, geologist 1; beds 40. Soldiers: sword 5, bow 3.

Goods produced in the game: log 66, stone 50, grain 47, plank 46, water 36, flour 22, fish 8, bread 8, meat 8, pig 8.
Goods consumed in the game: plank 62, stone 60, log 46, grain 30, water 16, flour 8, axe 2, pick 2, shovel 2, saw 1, rod 1, bow 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (117 building-min): Log pile full, nothing needs it right now 74%, Felling a tree 14%, Bringing a log to the pile 7%, No grown trees in range inside your border 4%, Log pile full, waiting for carriers 1%
- quarry (59 building-min): Stone pile full, nothing needs it right now 74%, Cutting stone 16%, Bringing stone to the pile 10%, Worker picking up a pickaxe 0%, Working 0%
- saw (58 building-min): Output pile full, nothing needs it right now 87%, Sawing planks 10%, Stacking outside 2%, Output pile full, waiting for carriers 0%, Worker picking up a saw 0%
- house (200 building-min): Idle 100%
- forest (163 building-min): No free ground to plant in range inside your border 50%, Needs a worker with a shovel 32%, Planting a sapling 17%, Worker picking up a shovel 1%, Idle 0%
- guard (112 building-min): Idle 50%, Waiting for a swordsman: train one at the barracks 49%, Soldiers on the way 0%
- fisher (57 building-min): Fish pile full, nothing needs it right now 96%, Fish pile full, waiting for carriers 2%, Fishing 1%, Worker picking up a fishing rod 1%, Bringing a fish to the pile 0%
- hunter (56 building-min): Meat pile full, nothing needs it right now 56%, No game in range inside your border 40%, Hunting 3%, Bringing meat to the pile 1%, Worker picking up a bow 1%
- waterhut (56 building-min): Water pile full, nothing needs it right now 90%, Bringing water to the pile 5%, Fetching water 4%, Idle 0%, Worker on the way 0%
- farm (49 building-min): Grain pile full, nothing needs it right now 84%, Sowing a field 8%, Harvesting grain 5%, Bringing grain to the pile 3%, Worker picking up a scythe 1%
- mill (48 building-min): Output pile full, nothing needs it right now 92%, Waiting for grain 5%, Grinding flour 3%, Stacking outside 1%, Fetching from the pile 0%
- bakery (47 building-min): Output pile full, nothing needs it right now 95%, Baking bread 4%, Waiting for flour and water 1%, Stacking outside 0%, Waiting for flour 0%
- pigfarm (46 building-min): Output pile full, nothing needs it right now 91%, Raising a pig 4%, Waiting for grain 4%, Waiting for grain and water 1%, Stacking outside 1%

Building sites, time per state (site-min): Builders at work 5, Leveling the ground 5, Waiting for a digger 4, Waiting for a builder 3, Waiting for materials 0.

Build order (placed at min:sec, finished at): wood 0:02→0:33, quarry 0:34→1:09, saw 1:10→1:48, house 1:22→2:06, wood 1:34→2:24, forest 1:48→2:43, guard 2:06→3:04, fisher 2:24→3:21, hunter 2:44→3:44, waterhut 3:04→4:09, guard 3:38→4:37, house 4:18→5:05, forest 6:02→6:45, forest 6:26→7:18, farm 10:00→11:09, mill 10:30→11:35, bakery 11:36→12:31, pigfarm 13:14→14:14, house 14:32→15:28, house 15:48→17:02.

Orders given: place 20, priority 11, march 2, armyReserve 1, toolKeep 1, profession 1. Refused (order: reason, times): place: This would block the way past ×1.

People changing jobs: new carrier 40, carrier -> worker 13, carrier -> geologist 1.

People's orders (1515 in all, 1500 done): worker rest forest 176, worker gather forest 174, worker rest farm 100, worker gather farm 99, worker rest wood 68, worker gather wood 66, worker rest quarry 51, worker gather quarry 50, carrier haul log wood -> saw 50, worker rest saw 47, worker toCraft saw 46, worker craft saw 46, worker rest waterhut 37, worker gather waterhut 36. None failed.

Fights and contact: lost people sword 1; first saw player 1 at 5:00.

Your notes (3 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×3 15:00–45:02 v254 adaptive builder: houses 4/0, guards 2, mines 0/0, carriers 32 idle 32, soldiers 9, sites 0.


Script: 1801 turns, 0.1 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 19/2/1365/9/40 | 29/6/2585/10/40 |
| 30 | 21/2/1371/9/40 | 48/13/6517/33/57 |
| 45 | 21/2/1371/9/40 | 59/22/12303/48/62 |
| 60 | 21/2/1371/9/40 | 66/28/16437/69/61 |
| first | - - - - - - | 10 10 18 21 25 31 |

First built by scheduled (game minute; x2 = the second one; soldier = first trained): wood 1, quarry 2, saw 2, forest 3, guard 3, house 3, military 3, wood x2 3, fisher 4, hunter 4, guard x2 5, military x2 5, waterhut 5, coalmine 6, house x2 6, farm 11, mill 12, bakery 13, pigfarm 15, butcher 16, farm x2 19.

First built by original game NPC (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, guard 2, house2 2, military 2, fisher 3, saw 3, wood x2 3, hunter 4, quarry x2 4, guard x2 5, military x2 5, waterhut 5, coalmine 6, ironmine 6, hunter x2 7, house 9, smelter 10, smith 10, farm 11, mill 11, bakery 12, goldmine 14, forest 15, house x2 16, farm x2 17, pigfarm 17, weaponsmith 18, barracks 21, saw x2 21, coalmine x2 22, soldier 22, tower 25, tower x2 26, castle 31, barracks x2 34, house2 x2 36.

Stock at minutes 15/30/45 (scheduled): pick 2/2/2, hammer 3/3/3, shovel 1/1/1, plank 8/8/8, stone 4/8/8.

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 1, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 1, fallen 0, gold 0 in stock + 0 in vaults.

At the end (what scheduled could see): enemy buildings known 4 (military 2); soldiers outside buildings 8 (bowmen 3); military sites unfinished 0; posts waiting for a swordsman 1; pioneers 0; without resource: none.

Growth (what scheduled could see): last new building at minute 19; waiting: No free ground to plant in range inside your border x1; Waiting for a swordsman x1; Needs a worker with an axe x1; spare tools in stock: pick 2, hammer 3, shovel 1, axe 0, saw 0.

Soldiers every 5 min: 10 9 9 9 9 9 9 9 9 9 9 9 (original game NPC: 10 10 10 10 26 33 39 46 48 55 62 69).

First army orders (game min:sec): 0:00 armyReserve; 1:30 march 1 soldiers -> 120,120; 4:30 march 1 soldiers -> 190,120.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 1 min, 14: stall: mill: waiting for grain 62% of the last 5 minutes.
- 43 min, 18–60: stall: butcher: needs a worker with an axe 100% of the last 5 minutes.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 37 min, 24–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 34 min, 27–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 22 | 8 | 4 | 12 | 8 | 8 | 15 | 2 | 13 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 17 | 68 | 1365 | 5008 |
| 30 | 24 | 8 | 8 | 12 | 8 | 8 | 20 | 24 | 14 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 21 | 104 | 1371 | 5008 |
| 45 | 24 | 8 | 8 | 12 | 8 | 8 | 20 | 24 | 14 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 21 | 104 | 1371 | 5008 |
| 60 | 24 | 8 | 8 | 12 | 8 | 8 | 20 | 24 | 14 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 21 | 104 | 1371 | 5008 |

At the end: buildings (built+sites) house 3, wood 2, guard 2, farm 2, hq 1, quarry 1, saw 1, forest 1, fisher 1, hunter 1, waterhut 1, coalmine 1, mill 1, bakery 1, pigfarm 1, butcher 1.
People: carrier 21, worker 14, soldier 8, digger 2, builder 2, geologist 1; beds 30. Soldiers: sword 5, bow 3.

Goods produced in the game: log 71, grain 60, stone 56, plank 51, water 42, flour 22, pig 14, fish 9, meat 8, coal 8, bread 8.
Goods consumed in the game: plank 67, stone 66, log 51, grain 36, water 22, flour 8, pick 3, fish 3, axe 2, scythe 2, saw 1, shovel 1, rod 1, bow 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (117 building-min): Log pile full, nothing needs it right now 84%, Felling a tree 12%, Bringing a log to the pile 4%, Worker picking up an axe 0%, Log pile full, waiting for carriers 0%
- quarry (59 building-min): Stone pile full, nothing needs it right now 77%, Cutting stone 16%, Bringing stone to the pile 7%, Worker picking up a pickaxe 0%, Working 0%
- saw (58 building-min): Output pile full, nothing needs it right now 86%, Sawing planks 11%, Stacking outside 2%, Fetching from the pile 0%, Worker picking up a saw 0%
- house (159 building-min): Idle 100%
- forest (57 building-min): No free ground to plant in range inside your border 63%, Planting a sapling 37%, Worker picking up a shovel 0%, Working 0%
- guard (112 building-min): Idle 51%, Waiting for a swordsman: train one at the barracks 49%, Soldiers on the way 0%
- fisher (57 building-min): Fish pile full, nothing needs it right now 98%, Fishing 1%, Worker picking up a fishing rod 1%, Fish pile full, waiting for carriers 0%, Bringing a fish to the pile 0%
- hunter (56 building-min): Meat pile full, nothing needs it right now 96%, Hunting 2%, Bringing meat to the pile 1%, Worker picking up a bow 0%, Meat pile full, waiting for carriers 0%
- waterhut (56 building-min): Water pile full, nothing needs it right now 88%, Bringing water to the pile 6%, Fetching water 5%, Worker on the way 0%, Working 0%
- coalmine (55 building-min): Coal pile full, nothing needs it right now 97%, Mining coal 1%, Worker picking up a pickaxe 1%, Bringing coal out 0%, Coal pile full, waiting for carriers 0%
- farm (91 building-min): Grain pile full, nothing needs it right now 89%, Sowing a field 6%, Harvesting grain 3%, Bringing grain to the pile 2%, Worker picking up a scythe 1%
- mill (49 building-min): Output pile full, nothing needs it right now 92%, Waiting for grain 4%, Grinding flour 3%, Stacking outside 1%, Fetching from the pile 0%
- bakery (48 building-min): Output pile full, nothing needs it right now 95%, Baking bread 4%, Stacking outside 0%, Waiting for flour and water 0%, Waiting for flour 0%
- pigfarm (45 building-min): Output pile full, nothing needs it right now 90%, Raising a pig 7%, Waiting for grain 1%, Stacking outside 1%, Waiting for grain and water 0%
- butcher (44 building-min): Needs a worker with an axe 100%

Building sites, time per state (site-min): Builders at work 6, Waiting for a digger 5, Leveling the ground 5, Waiting for a builder 4.

Build order (placed at min:sec, finished at): wood 0:02→0:30, quarry 0:32→1:06, saw 1:06→1:45, house 1:18→2:07, wood 1:30→2:23, forest 1:46→2:37, guard 2:08→2:54, fisher 2:24→3:25, hunter 2:38→3:54, waterhut 2:56→4:22, guard 3:38→4:47, coalmine 3:56→5:05, house 4:22→5:26, farm 10:00→10:56, mill 10:20→11:23, bakery 11:20→12:21, house 12:30→13:12, pigfarm 13:50→14:46, butcher 15:00→15:59, farm 16:44→18:05.

Orders given: place 20, priority 14, march 2, armyReserve 1, toolKeep 1, profession 1, sendUnit 1. None refused.

People changing jobs: new carrier 30, carrier -> worker 14, carrier -> geologist 1.

People's orders (1612 in all, 1596 done): worker rest farm 138, worker gather farm 136, worker rest forest 122, worker gather forest 121, worker rest wood 73, worker gather wood 71, worker rest quarry 57, worker gather quarry 56, carrier haul log wood -> saw 55, worker rest saw 52, worker toCraft saw 51, worker craft saw 51, worker rest waterhut 43, worker gather waterhut 42. None failed.

Fights and contact: lost people sword 1; first saw player 2 at 5:00.

Your notes (3 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×3 15:00–45:00 v254 adaptive builder: houses 3/0, guards 2, mines 1/0, carriers 21 idle 21, soldiers 9, sites 0.


Script: 1803 turns, 0.0 ms average, worst 2 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 23/2/1356/9/40 | 29/6/2705/10/50 |
| 30 | 23/2/1356/9/40 | 50/8/4291/14/66 |
| 45 | 23/2/1356/9/40 | 60/14/8754/27/73 |
| 60 | 23/2/1356/9/40 | 65/18/11942/38/82 |
| first | 7 9 - - - - | 11 15 23 24 27 32 |

First built by scheduled (game minute; x2 = the second one; soldier = first trained): wood 1, house 2, quarry 2, saw 2, forest 3, wood x2 3, fisher 4, guard 4, military 4, guard x2 5, hunter 5, military x2 5, waterhut 5, coalmine 6, house x2 6, ironmine 6, smelter 7, smith 9, coalmine x2 11, forest x2 11.

First built by original game NPC (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, guard 2, house2 2, military 2, fisher 3, saw 3, wood x2 3, guard x2 4, hunter 4, military x2 4, quarry x2 4, coalmine 5, waterhut 5, farm 7, ironmine 7, house 9, mill 9, hunter x2 10, bakery 11, smelter 11, farm x2 12, pigfarm 12, house x2 13, smith 15, forest 17, goldmine 17, saw x2 18, goldsmelter 19, butcher 20, vault 20, vault x2 21, weaponsmith 23, barracks 24, forest x2 25, soldier 26, tower 27, weaponsmith x2 27, tower x2 28, castle 32, barracks x2 33, fisher x2 33, house2 x2 34.

Stock at minutes 15/30/45 (scheduled): pick 2/2/2, hammer 1/1/1, shovel 1/1/1, plank 8/8/8, stone 8/8/8.

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 1, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 1, fallen 0, gold 0 in stock + 16 in vaults.

At the end (what scheduled could see): enemy buildings known 2 (military 0); soldiers outside buildings 8 (bowmen 3); military sites unfinished 0; posts waiting for a swordsman 1; pioneers 0; without resource: none.

Growth (what scheduled could see): last new building at minute 12; waiting: No free ground to plant in range inside your border x3; Waiting for a swordsman x1; spare tools in stock: pick 2, hammer 1, shovel 1, axe 1, saw 1.

Soldiers every 5 min: 9 9 9 9 9 9 9 9 9 9 9 9 (original game NPC: 10 10 10 10 10 14 21 25 27 32 35 38).

First army orders (game min:sec): 0:00 armyReserve; 1:30 march 1 soldiers -> 120,120; 4:30 march 1 soldiers -> 50,120.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 1 min, 2: settlers: No free settlers and every bed taken: build houses.
- 42 min, 19–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 41 min, 20–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 40 | 8 | 8 | 16 | 0 | 12 | 8 | 0 | 0 | 24 | 14 | 14 | 0 | 0 | 0 | 0 | 1 | 17 | 110 | 1356 | 4956 |
| 30 | 40 | 8 | 8 | 16 | 0 | 12 | 8 | 0 | 0 | 24 | 14 | 14 | 0 | 0 | 0 | 0 | 1 | 17 | 110 | 1356 | 4956 |
| 45 | 40 | 8 | 8 | 16 | 0 | 12 | 8 | 0 | 0 | 24 | 14 | 14 | 0 | 0 | 0 | 0 | 1 | 17 | 110 | 1356 | 4956 |
| 60 | 40 | 8 | 8 | 16 | 0 | 12 | 8 | 0 | 0 | 24 | 14 | 14 | 0 | 0 | 0 | 0 | 1 | 17 | 110 | 1356 | 4956 |

At the end: buildings (built+sites) wood 4, house 3, forest 3, guard 2, coalmine 2, hq 1, quarry 1, saw 1, fisher 1, hunter 1, waterhut 1, ironmine 1, smelter 1, smith 1.
People: worker 17, carrier 17, soldier 8, digger 2, builder 2, geologist 2; beds 30. Soldiers: sword 5, bow 3.

Goods produced in the game: log 83, coal 58, fish 48, plank 47, stone 45, ironore 38, meat 24, iron 24, water 8, axe 3, pick 3, shovel 2, saw 1, rod 1.
Goods consumed in the game: plank 63, stone 55, log 47, fish 38, coal 34, ironore 24, meat 12, iron 10, pick 6, axe 4, shovel 3, hammer 2, saw 1, rod 1, bow 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (217 building-min): Log pile full, nothing needs it right now 86%, Felling a tree 9%, Bringing a log to the pile 4%, Worker picking up an axe 0%, Working 0%
- quarry (59 building-min): Stone pile full, nothing needs it right now 82%, Cutting stone 12%, Bringing stone to the pile 6%, Worker picking up a pickaxe 0%, Working 0%
- saw (58 building-min): Output pile full, nothing needs it right now 87%, Sawing planks 10%, Stacking outside 2%, Output pile full, waiting for carriers 0%, Fetching from the pile 0%
- house (165 building-min): Idle 100%
- forest (155 building-min): No free ground to plant in range inside your border 82%, Planting a sapling 17%, Worker picking up a shovel 1%, Needs a worker with a shovel 0%, Working 0%
- guard (112 building-min): Idle 51%, Waiting for a swordsman: train one at the barracks 49%, Soldiers on the way 0%, Waiting for a soldier 0%
- fisher (56 building-min): Fish pile full, nothing needs it right now 91%, Fishing 5%, Fish pile full, waiting for carriers 2%, Bringing a fish to the pile 1%, Worker picking up a fishing rod 0%
- hunter (56 building-min): Meat pile full, nothing needs it right now 93%, Hunting 4%, Bringing meat to the pile 2%, Meat pile full, waiting for carriers 0%, Worker picking up a bow 0%
- waterhut (56 building-min): Water pile full, nothing needs it right now 97%, Bringing water to the pile 1%, Fetching water 1%, Water pile full, waiting for carriers 0%, Worker on the way 0%
- coalmine (104 building-min): Coal pile full, nothing needs it right now 89%, Mining coal 8%, Bringing coal out 2%, Worker picking up a pickaxe 1%, Fetching food 0%
- ironmine (55 building-min): Iron ore pile full, nothing needs it right now 85%, Mining iron ore 7%, Deposit thinning: mining iron ore 5%, Bringing iron ore out 2%, Worker picking up a pickaxe 1%
- smelter (53 building-min): Output pile full, nothing needs it right now 90%, Smelting iron 6%, Waiting for coal 3%, Stacking outside 1%, Worker picking up a hammer 0%
- smith (51 building-min): All tool targets met 95%, Waiting for coal 1%, Forging axe 1%, Forging pickaxe 1%, Stacking outside 1%

Building sites, time per state (site-min): Waiting for a digger 5, Builders at work 5, Waiting for a builder 5, Leveling the ground 4, Waiting for materials 0, No way to the site for builders 0.

Build order (placed at min:sec, finished at): wood 0:02→0:30, quarry 0:30→1:07, saw 1:08→1:42, house 1:20→2:00, wood 1:32→2:17, forest 1:44→2:41, guard 2:00→3:15, fisher 2:18→3:37, hunter 2:42→4:00, waterhut 3:16→4:25, guard 3:38→4:50, coalmine 4:02→5:23, ironmine 4:26→5:07, house 4:52→5:42, smelter 6:10→6:53, house 7:00→7:41, smith 8:10→8:54, wood 8:54→9:45, wood 9:08→10:01, coalmine 9:26→10:35, forest 9:46→10:51, forest 10:02→11:05.

Orders given: place 22, priority 12, march 2, profession 2, armyReserve 1, toolKeep 1, sendUnit 1. None refused.

People changing jobs: new carrier 29, carrier -> worker 17, new geologist 1, carrier -> geologist 1.

People's orders (1731 in all, 1711 done): worker rest forest 168, worker gather forest 165, worker rest wood 87, worker gather wood 83, worker mine coalmine 83, worker rest coalmine 60, carrier haul log wood -> saw 51, worker rest fisher 49, worker rest saw 48, worker gather fisher 48, worker toCraft saw 47, worker craft saw 47, worker rest quarry 46, worker gather quarry 45. Not done (outcome: times): failed: no way (builder (build 0) own-land-split) ×1.

Failed path searches (who (task) why: times): builder (build 0) own-land-split 1.

Fights and contact: lost people sword 1; first saw player 1 at 5:00.

Your notes (3 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×3 15:00–45:02 v254 adaptive builder: houses 3/0, guards 2, mines 2/1, carriers 17 idle 17, soldiers 9, sites 0.


Script: 1802 turns, 0.1 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 16/2/1183/9/30 | 27/6/2813/10/40 |
| 30 | 18/2/1187/9/30 | 57/7/3905/11/79 |
| 45 | 18/2/1187/9/30 | 67/8/5128/15/85 |
| 60 | 18/2/1187/9/30 | 76/13/9058/50/90 |
| first | - - - - - - | 9 12 25 25 43 50 |

First built by scheduled (game minute; x2 = the second one; soldier = first trained): wood 1, quarry 2, saw 2, wood x2 2, forest 3, guard 3, house 3, military 3, fisher 4, house x2 4, hunter 4, guard x2 5, military x2 5, waterhut 7, farm 11, mill 12, bakery 14, pigfarm 17, butcher 18.

First built by original game NPC (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, house2 2, guard 3, guard x2 3, military 3, military x2 3, saw 3, coalmine 4, quarry x2 4, wood x2 4, fisher 6, hunter 6, ironmine 7, hunter x2 8, house 9, smelter 9, waterhut 9, farm 10, mill 12, smith 12, bakery 13, goldmine 15, forest 17, house x2 17, farm x2 18, forest x2 21, saw x2 21, goldsmelter 22, vault 23, vault x2 23, butcher 24, pigfarm 24, barracks 25, coalmine x2 25, weaponsmith 25, ironmine x2 26, smelter x2 27, soldier 28, armorer 29, barracks x2 30, bakery x2 32, mill x2 33, weaponsmith x2 33, pigfarm x2 34, goldmine x2 39, tower 43, fisher x2 45, house2 x2 46, tower x2 46, castle 50.

Stock at minutes 15/30/45 (scheduled): pick 4/3/3, hammer 3/3/3, shovel 1/1/1, plank 7/8/8, stone 5/8/8.

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 1, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 1, fallen 0, gold 2 in stock + 69 in vaults.

At the end (what scheduled could see): enemy buildings known 1 (military 1); soldiers outside buildings 8 (bowmen 3); military sites unfinished 0; posts waiting for a swordsman 1; pioneers 0; without resource: none.

Growth (what scheduled could see): last new building at minute 18; waiting: No free ground to plant in range inside your border x1; Waiting for a swordsman x1; Needs a worker with an axe x1; spare tools in stock: pick 3, hammer 3, shovel 1, axe 0, saw 0.

Soldiers every 5 min: 10 9 9 9 9 9 9 9 9 9 9 9 (original game NPC: 10 10 10 10 10 11 11 11 15 24 35 50).

First army orders (game min:sec): 0:00 armyReserve; 1:30 march 1 soldiers -> 120,120; 4:30 march 1 soldiers -> 190,120.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 2–15: settlers: No free settlers and every bed taken: build houses.
- 37 min, 12–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 1 min, 14: stall: mill: waiting for grain 55% of the last 5 minutes.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (1 mountain tiles).
- 41 min, 20–60: stall: butcher: needs a worker with an axe 100% of the last 5 minutes.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 39 min, 22–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 23 | 8 | 6 | 14 | 4 | 8 | 13 | 3 | 13 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 53 | 1183 | 4747 |
| 30 | 24 | 8 | 8 | 14 | 8 | 8 | 20 | 19 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 13 | 88 | 1187 | 4747 |
| 45 | 24 | 8 | 8 | 14 | 8 | 8 | 20 | 19 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 13 | 88 | 1187 | 4747 |
| 60 | 24 | 8 | 8 | 14 | 8 | 8 | 20 | 19 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 13 | 88 | 1187 | 4747 |

At the end: buildings (built+sites) wood 2, house 2, guard 2, hq 1, quarry 1, saw 1, forest 1, hunter 1, fisher 1, waterhut 1, farm 1, mill 1, bakery 1, pigfarm 1, butcher 1.
People: carrier 13, worker 12, soldier 8, digger 2, builder 2, geologist 1; beds 20. Soldiers: sword 5, bow 3.

Goods produced in the game: log 58, grain 55, stone 46, water 42, plank 38, flour 22, pig 14, meat 8, fish 8, bread 8.
Goods consumed in the game: stone 56, plank 54, log 38, grain 36, water 22, flour 8, axe 2, pick 2, saw 1, shovel 1, bow 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (118 building-min): Log pile full, nothing needs it right now 81%, Felling a tree 12%, Bringing a log to the pile 6%, Log pile full, waiting for carriers 0%, Worker picking up an axe 0%
- quarry (59 building-min): Stone pile full, nothing needs it right now 70%, Cutting stone 17%, Bringing stone to the pile 12%, Worker picking up a pickaxe 0%, Working 0%
- saw (58 building-min): Output pile full, nothing needs it right now 88%, Sawing planks 8%, Stacking outside 2%, Waiting for logs 1%, Fetching from the pile 0%
- house (115 building-min): Idle 100%
- forest (58 building-min): No free ground to plant in range inside your border 71%, Planting a sapling 29%, Worker picking up a shovel 0%, Working 0%
- guard (113 building-min): Idle 51%, Waiting for a swordsman: train one at the barracks 49%, Soldiers on the way 0%
- hunter (57 building-min): Meat pile full, nothing needs it right now 97%, Hunting 1%, Bringing meat to the pile 1%, Meat pile full, waiting for carriers 0%, Worker picking up a bow 0%
- fisher (56 building-min): Fish pile full, nothing needs it right now 98%, Fishing 1%, Worker picking up a fishing rod 1%, Fish pile full, waiting for carriers 0%, Bringing a fish to the pile 0%
- waterhut (54 building-min): Water pile full, nothing needs it right now 94%, Fetching water 3%, Bringing water to the pile 3%, Water pile full, waiting for carriers 0%, Working 0%
- farm (49 building-min): Grain pile full, nothing needs it right now 80%, Sowing a field 10%, Harvesting grain 7%, Bringing grain to the pile 3%, Worker picking up a scythe 1%
- mill (49 building-min): Output pile full, nothing needs it right now 92%, Waiting for grain 4%, Grinding flour 3%, Stacking outside 1%, Output pile full, waiting for carriers 0%
- bakery (47 building-min): Output pile full, nothing needs it right now 95%, Baking bread 4%, Waiting for flour and water 1%, Stacking outside 0%, Waiting for water 0%
- pigfarm (44 building-min): Output pile full, nothing needs it right now 91%, Raising a pig 7%, Stacking outside 1%, Waiting for grain 1%, Worker on the way 0%
- butcher (42 building-min): Needs a worker with an axe 100%

Building sites, time per state (site-min): Builders at work 5, Leveling the ground 4, Waiting for a builder 3, Waiting for a digger 2.

Build order (placed at min:sec, finished at): wood 0:02→0:24, quarry 0:26→1:00, saw 1:00→1:36, house 1:12→2:08, wood 1:24→1:48, forest 1:36→2:25, guard 1:50→2:49, house 2:24→3:12, hunter 2:46→3:27, fisher 3:02→3:49, guard 3:54→4:37, waterhut 5:24→6:10, farm 10:00→10:58, mill 10:28→11:22, bakery 12:22→13:22, pigfarm 14:52→16:00, butcher 16:38→17:47.

Orders given: place 17, priority 12, march 2, armyReserve 1, toolKeep 1, profession 1. None refused.

People changing jobs: new carrier 20, carrier -> worker 12, carrier -> geologist 1.

People's orders (1374 in all, 1360 done): worker rest farm 117, worker gather farm 116, worker rest forest 105, worker gather forest 104, worker rest wood 60, worker gather wood 58, worker rest quarry 47, worker gather quarry 46, worker rest waterhut 43, carrier haul log wood -> saw 42, worker gather waterhut 42, worker rest saw 39, worker toCraft saw 38, worker craft saw 38. None failed.

Fights and contact: lost people sword 1; first saw player 2 at 5:00.

Your notes (3 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×3 15:00–45:00 v254 adaptive builder: houses 2/0, guards 2, mines 0/0, carriers 13 idle 13, soldiers 9, sites 0.


Script: 1803 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 20/2/1173/9/40 | 28/6/2139/10/40 |
| 30 | 20/2/1173/9/40 | 35/8/2711/24/36 |
| 45 | 20/2/1173/9/40 | 59/11/4537/35/75 |
| 60 | 20/2/1173/9/40 | 80/15/8176/37/93 |
| first | - - - - - - | 15 16 17 19 51 56 |

First built by scheduled (game minute; x2 = the second one; soldier = first trained): wood 1, quarry 2, saw 2, forest 3, house 3, wood x2 3, fisher 4, guard 4, hunter 4, military 4, guard x2 5, ironmine 5, military x2 5, waterhut 5, house x2 6, forest x2 7, farm 12, mill 12, bakery 13.

First built by original game NPC (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, guard 2, house2 2, military 2, fisher 3, saw 3, wood x2 3, forest 4, hunter 4, quarry x2 4, guard x2 5, military x2 5, coalmine 6, ironmine 6, hunter x2 7, waterhut 9, farm 10, house 11, mill 11, bakery 12, farm x2 13, pigfarm 14, smelter 15, smith 16, weaponsmith 17, house x2 18, barracks 19, coalmine x2 19, soldier 20, ironmine x2 40, saw x2 40, butcher 42, goldmine 43, goldsmelter 43, vault 44, vault x2 44, weaponsmith x2 46, bakery x2 47, mill x2 47, barracks x2 49, forest x2 49, pigfarm x2 49, tower 51, armorer 52, smelter x2 52, goldmine x2 53, castle 56, tower x2 57, fisher x2 58.

Stock at minutes 15/30/45 (scheduled): pick 2/2/2, hammer 3/3/3, shovel 0/0/0, plank 8/8/8, stone 8/8/8.

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 1, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 1, fallen 0, gold 0 in stock + 6 in vaults.

At the end (what scheduled could see): enemy buildings known 2 (military 0); soldiers outside buildings 8 (bowmen 3); military sites unfinished 0; posts waiting for a swordsman 1; pioneers 0; without resource: none.

Growth (what scheduled could see): last new building at minute 13; waiting: No free ground to plant in range inside your border x2; Waiting for a swordsman x1; Needs a worker with a shovel x1; spare tools in stock: pick 2, hammer 3, shovel 0, axe 0, saw 0.

Soldiers every 5 min: 10 9 9 9 9 9 9 9 9 9 9 9 (original game NPC: 10 10 10 16 22 24 25 32 35 37 37 37).

First army orders (game min:sec): 0:00 armyReserve; 1:30 march 1 soldiers -> 120,120; 4:30 march 1 soldiers -> 50,120.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 2–5: settlers: No free settlers and every bed taken: build houses.
- 21 min, 7–27: stall: hunter: no game in range inside your border 63% of the last 5 minutes.
- 4 min, 11–14: stall: woodcutter: no grown trees in range inside your border 50% of the last 5 minutes.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 2 min, 14–15: stall: mill: waiting for grain 50% of the last 5 minutes.
- 41 min, 20–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 41 min, 20–60: stall: forest: no free ground to plant in range inside your border 67% of the last 5 minutes.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 10 | 8 | 8 | 13 | 8 | 9 | 14 | 6 | 11 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 1 | 18 | 64 | 1173 | 5137 |
| 30 | 18 | 8 | 8 | 13 | 8 | 12 | 14 | 12 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 1 | 22 | 88 | 1173 | 5137 |
| 45 | 18 | 8 | 8 | 13 | 8 | 12 | 14 | 12 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 1 | 22 | 88 | 1173 | 5137 |
| 60 | 18 | 8 | 8 | 13 | 8 | 12 | 14 | 12 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 1 | 22 | 88 | 1173 | 5137 |

At the end: buildings (built+sites) house 3, forest 3, wood 2, guard 2, hq 1, quarry 1, saw 1, fisher 1, hunter 1, waterhut 1, ironmine 1, farm 1, mill 1, bakery 1.
People: carrier 22, worker 13, soldier 8, digger 2, builder 2, geologist 1; beds 30. Soldiers: sword 5, bow 3.

Goods produced in the game: log 55, stone 42, plank 41, grain 34, water 22, flour 22, meat 14, fish 8, ironore 8, bread 8.
Goods consumed in the game: plank 57, stone 52, log 41, grain 22, water 8, flour 8, pick 3, axe 2, shovel 2, meat 2, saw 1, rod 1, bow 1, fish 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (117 building-min): Log pile full, nothing needs it right now 72%, Felling a tree 13%, No grown trees in range inside your border 8%, Bringing a log to the pile 7%, Worker picking up an axe 0%
- quarry (59 building-min): Stone pile full, nothing needs it right now 81%, Cutting stone 12%, Bringing stone to the pile 7%, Worker picking up a pickaxe 0%, Working 0%
- saw (58 building-min): Output pile full, nothing needs it right now 88%, Sawing planks 9%, Stacking outside 2%, Output pile full, waiting for carriers 1%, Worker picking up a saw 0%
- house (166 building-min): Idle 100%
- forest (164 building-min): No free ground to plant in range inside your border 54%, Needs a worker with a shovel 32%, Planting a sapling 13%, Worker picking up a shovel 0%, Idle 0%
- guard (112 building-min): Idle 51%, Waiting for a swordsman: train one at the barracks 49%, Soldiers on the way 0%, Waiting for a soldier 0%
- fisher (57 building-min): Fish pile full, nothing needs it right now 97%, Fish pile full, waiting for carriers 2%, Fishing 1%, Worker picking up a fishing rod 0%, Bringing a fish to the pile 0%
- hunter (56 building-min): Meat pile full, nothing needs it right now 62%, No game in range inside your border 33%, Hunting 3%, Bringing meat to the pile 2%, Worker picking up a bow 0%
- waterhut (56 building-min): Water pile full, nothing needs it right now 93%, Bringing water to the pile 3%, Fetching water 3%, Worker on the way 0%, Water pile full, waiting for carriers 0%
- ironmine (56 building-min): Iron ore pile full, nothing needs it right now 97%, Mining iron ore 2%, Worker picking up a pickaxe 1%, Bringing iron ore out 0%, Working 0%
- farm (49 building-min): Grain pile full, nothing needs it right now 90%, Sowing a field 5%, Harvesting grain 3%, Bringing grain to the pile 1%, Worker picking up a scythe 1%
- mill (48 building-min): Output pile full, nothing needs it right now 93%, Waiting for grain 4%, Grinding flour 2%, Stacking outside 1%, Fetching from the pile 0%
- bakery (47 building-min): Output pile full, nothing needs it right now 95%, Baking bread 4%, Stacking outside 0%, Waiting for flour and water 0%, Waiting for water 0%

Building sites, time per state (site-min): Builders at work 5, Leveling the ground 5, Waiting for a digger 3, Waiting for a builder 3.

Build order (placed at min:sec, finished at): wood 0:02→0:31, quarry 0:32→1:10, saw 1:10→1:49, house 1:22→2:08, wood 1:34→2:26, forest 1:50→2:45, guard 2:08→3:00, fisher 2:26→3:21, hunter 2:46→3:43, waterhut 3:08→4:04, ironmine 3:38→4:29, guard 4:04→4:48, house 4:42→5:30, forest 5:26→6:00, house 5:46→6:27, forest 6:14→6:52, farm 10:00→11:11, mill 10:20→11:38, bakery 11:42→12:37.

Orders given: place 19, priority 11, march 2, armyReserve 1, toolKeep 1, profession 1, sendUnit 1. None refused.

People changing jobs: new carrier 30, carrier -> worker 13, carrier -> geologist 1.

People's orders (1258 in all, 1243 done): worker rest forest 135, worker gather forest 133, worker rest farm 74, worker gather farm 73, worker rest wood 57, worker gather wood 55, worker rest quarry 43, worker gather quarry 42, worker rest saw 42, worker toCraft saw 41, worker craft saw 41, carrier haul log wood -> saw 39, carrier haul grain farm -> mill 26, worker rest waterhut 23. None failed.

Fights and contact: lost people sword 1; first saw player 1 at 5:00.

Your notes (3 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×3 15:00–45:02 v254 adaptive builder: houses 3/0, guards 2, mines 0/1, carriers 22 idle 22, soldiers 9, sites 0.


Script: 1803 turns, 0.1 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 24/2/1289/9/50 | 24/6/2970/10/40 |
| 30 | 24/2/1289/9/50 | 49/6/3598/10/80 |
| 45 | 24/2/1289/9/50 | 67/12/7889/42/88 |
| 60 | 24/2/1289/9/50 | 74/19/12436/60/90 |
| first | 7 10 13 - - - | 9 10 29 29 38 41 |

First built by scheduled (game minute; x2 = the second one; soldier = first trained): wood 1, quarry 2, saw 2, forest 3, guard 3, house 3, military 3, wood x2 3, fisher 4, hunter 4, guard x2 5, house x2 5, ironmine 5, military x2 5, coalmine 6, waterhut 6, smelter 7, forest x2 8, smith 10, saw x2 11, weaponsmith 13.

First built by original game NPC (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, house2 2, guard 3, guard x2 3, military 3, military x2 3, saw 3, wood x2 3, coalmine 4, quarry x2 4, fisher 5, hunter 7, waterhut 7, hunter x2 8, ironmine 8, house 9, smelter 9, smith 10, goldmine 13, coalmine x2 15, ironmine x2 16, goldsmelter 17, forest 21, house x2 23, vault 25, saw x2 26, vault x2 26, fisher x2 28, smelter x2 28, barracks 29, weaponsmith 29, armorer 30, bakery 31, farm 31, forest x2 31, house2 x2 31, mill 31, barracks x2 32, farm x2 32, butcher 33, pigfarm 33, soldier 36, weaponsmith x2 36, tower 38, tower x2 38, castle 41, goldmine x2 51.

Stock at minutes 15/30/45 (scheduled): pick 2/2/2, hammer 0/1/1, shovel 0/1/1, plank 16/16/16, stone 8/8/8.

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 1, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 1, fallen 0, gold 0 in stock + 63 in vaults.

At the end (what scheduled could see): enemy buildings known 2 (military 1); soldiers outside buildings 8 (bowmen 3); military sites unfinished 0; posts waiting for a swordsman 1; pioneers 0; without resource: none.

Growth (what scheduled could see): last new building at minute 13; waiting: No free ground to plant in range inside your border x3; Waiting for a swordsman x1; Waiting for coal x1; spare tools in stock: pick 2, hammer 1, shovel 1, axe 1, saw 1.

Soldiers every 5 min: 9 9 9 9 9 9 9 9 9 9 9 9 (original game NPC: 10 10 10 10 10 10 10 33 42 52 55 60).

First army orders (game min:sec): 0:00 armyReserve; 1:30 march 1 soldiers -> 120,120; 4:30 march 1 soldiers -> 190,120.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 3 min, 2–8: settlers: No free settlers and every bed taken: build houses.
- 48 min, 13–60: stall: smith: waiting for coal 100% of the last 5 minutes.
- 2 min, 14–15: stall: smelter: waiting for coal 54% of the last 5 minutes.
- 45 min, 16–60: weapons: 4 weapons lie unused: build a barracks to train soldiers.
- 41 min, 20–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 40 min, 21–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 6 min, 24–29: stall: coal mine: deposit worn out 66% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 19 | 16 | 8 | 21 | 0 | 12 | 8 | 0 | 0 | 2 | 10 | 18 | 0 | 0 | 1 | 2 | 1 | 21 | 74 | 1289 | 4600 |
| 30 | 30 | 16 | 8 | 22 | 0 | 12 | 8 | 0 | 0 | 11 | 14 | 20 | 0 | 0 | 1 | 2 | 1 | 27 | 106 | 1289 | 4602 |
| 45 | 30 | 16 | 8 | 22 | 0 | 12 | 8 | 0 | 0 | 11 | 14 | 20 | 0 | 0 | 1 | 2 | 1 | 27 | 106 | 1289 | 4602 |
| 60 | 30 | 16 | 8 | 22 | 0 | 12 | 8 | 0 | 0 | 11 | 14 | 20 | 0 | 0 | 1 | 2 | 1 | 27 | 106 | 1289 | 4602 |

At the end: buildings (built+sites) house 4, wood 3, forest 3, saw 2, guard 2, hq 1, quarry 1, fisher 1, hunter 1, ironmine 1, coalmine 1, waterhut 1, smelter 1, smith 1, weaponsmith 1.
People: carrier 27, worker 17, soldier 8, digger 2, builder 2, geologist 2; beds 40. Soldiers: sword 5, bow 3.

Goods produced in the game: fish 99, log 86, plank 60, coal 57, stone 56, ironore 47, iron 33, meat 30, water 8, pick 2, shovel 2, axe 2, saw 2, spear 2, sword 1, hammer 1, rod 1.
Goods consumed in the game: fish 83, plank 68, stone 66, log 60, coal 46, ironore 33, meat 18, iron 13, pick 5, axe 3, shovel 3, hammer 3, saw 2, rod 1, bow 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (165 building-min): Log pile full, nothing needs it right now 80%, Felling a tree 13%, Bringing a log to the pile 6%, No grown trees in range inside your border 1%, Worker picking up an axe 1%
- quarry (59 building-min): Stone pile full, nothing needs it right now 79%, Cutting stone 15%, Bringing stone to the pile 6%, Worker picking up a pickaxe 0%, Working 0%
- saw (108 building-min): Output pile full, nothing needs it right now 89%, Sawing planks 7%, Waiting for logs 2%, Stacking outside 1%, Worker picking up a saw 1%
- house (216 building-min): Idle 100%
- forest (162 building-min): No free ground to plant in range inside your border 78%, Planting a sapling 20%, Needs a worker with a shovel 1%, Worker picking up a shovel 1%, Working 0%
- guard (112 building-min): Idle 51%, Waiting for a swordsman: train one at the barracks 49%, Soldiers on the way 0%
- fisher (57 building-min): Fish pile full, nothing needs it right now 85%, Fishing 11%, Bringing a fish to the pile 2%, Fish pile full, waiting for carriers 1%, Worker picking up a fishing rod 0%
- hunter (56 building-min): Meat pile full, nothing needs it right now 87%, Hunting 7%, Bringing meat to the pile 5%, No game in range inside your border 0%, Meat pile full, waiting for carriers 0%
- ironmine (55 building-min): Iron ore pile full, nothing needs it right now 77%, Deposit thinning: mining iron ore 13%, Mining iron ore 6%, Bringing iron ore out 3%, Worker picking up a pickaxe 0%
- coalmine (55 building-min): Coal pile full, nothing needs it right now 59%, Deposit thinning: mining coal 16%, Deposit worn out: finding little coal 11%, Mining coal 9%, Bringing coal out 3%
- waterhut (54 building-min): Water pile full, nothing needs it right now 96%, Water pile full, waiting for carriers 1%, Bringing water to the pile 1%, Fetching water 1%, Worker on the way 0%
- smelter (53 building-min): Output pile full, nothing needs it right now 83%, Smelting iron 8%, Waiting for coal 6%, Stacking outside 2%, Worker picking up a hammer 0%
- smith (51 building-min): Waiting for coal 96%, Worker picking up a hammer 1%, Forging shovel 1%, Forging saw 1%, Forging pickaxe 0%
- weaponsmith (48 building-min): All weapon targets met 98%, Worker picking up a hammer 1%, Forging spear 1%, Forging sword 0%, Stacking outside 0%

Building sites, time per state (site-min): Builders at work 6, Waiting for a digger 6, Leveling the ground 5, Waiting for a builder 4.

Build order (placed at min:sec, finished at): wood 0:02→0:31, quarry 0:32→1:10, saw 1:10→1:45, house 1:22→2:04, wood 1:34→2:20, forest 1:46→2:42, guard 2:04→2:58, fisher 2:22→3:24, hunter 2:42→3:54, house 2:58→4:17, guard 3:34→4:39, ironmine 3:54→4:59, coalmine 4:18→5:15, waterhut 4:50→5:39, smelter 5:42→6:39, forest 6:38→7:14, house 6:50→7:54, forest 7:34→8:11, smith 7:50→9:08, house 8:30→9:32, saw 9:22→10:01, weaponsmith 11:04→12:08, wood 11:38→12:34.

Orders given: place 23, priority 13, march 2, profession 2, armyReserve 1, toolKeep 1, sendUnit 1. None refused.

People changing jobs: new carrier 40, carrier -> worker 17, carrier -> geologist 2.

People's orders (2266 in all, 2247 done): worker rest forest 213, worker gather forest 210, worker mine coalmine 126, worker rest fisher 100, worker gather fisher 99, worker rest wood 89, worker gather wood 86, carrier haul fish fisher -> coalmine 86, worker eat coalmine 82, worker rest saw 62, carrier haul log wood -> saw 62, worker mine ironmine 62, worker toCraft saw 60, worker craft saw 60. None failed.

Fights and contact: lost people sword 1; first saw player 2 at 5:00.

Your notes (3 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×3 15:00–45:00 v254 adaptive builder: houses 4/0, guards 2, mines 1/1, carriers 27 idle 27, soldiers 9, sites 0.


Script: 1802 turns, 0.1 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 20/2/1344/9/40 | 31/8/3277/16/44 |
| 30 | 22/2/1345/9/40 | 56/16/6694/38/62 |
| 45 | 22/2/1345/9/40 | 76/16/7552/52/98 |
| 60 | 22/2/1345/9/40 | 85/21/11663/56/94 |
| first | - - - - - - | 9 10 11 11 15 48 |

First built by scheduled (game minute; x2 = the second one; soldier = first trained): wood 1, quarry 2, saw 2, forest 3, house 3, wood x2 3, fisher 4, guard 4, military 4, hunter 5, waterhut 5, guard x2 6, house x2 6, military x2 6, forest x2 7, farm 12, mill 12, bakery 13, pigfarm 14, butcher 16, farm x2 18.

First built by original game NPC (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, guard 2, house2 2, military 2, coalmine 3, quarry x2 3, saw 3, wood x2 3, fisher 4, guard x2 4, hunter 4, military x2 4, waterhut 7, hunter x2 8, ironmine 8, house 9, smelter 9, smith 10, barracks 11, weaponsmith 11, coalmine x2 12, house x2 13, soldier 13, tower 15, goldmine 17, forest 19, saw x2 21, goldsmelter 24, vault 24, farm 25, bakery 26, mill 26, farm x2 27, pigfarm 27, fisher x2 32, forest x2 33, butcher 34, ironmine x2 34, smelter x2 36, barracks x2 40, goldmine x2 40, bakery x2 41, house2 x2 42, mill x2 42, pigfarm x2 43, weaponsmith x2 45, armorer 47, castle 48, tower x2 51, vault x2 56.

Stock at minutes 15/30/45 (scheduled): pick 4/3/3, hammer 3/3/3, shovel 0/0/0, plank 7/8/8, stone 2/8/8.

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 1, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 1, fallen 0, gold 0 in stock + 46 in vaults.

At the end (what scheduled could see): enemy buildings known 2 (military 1); soldiers outside buildings 8 (bowmen 3); military sites unfinished 0; posts waiting for a swordsman 1; pioneers 0; without resource: none.

Growth (what scheduled could see): last new building at minute 18; waiting: No free ground to plant in range inside your border x2; Waiting for a swordsman x1; Needs a worker with a shovel x1; spare tools in stock: pick 3, hammer 3, shovel 0, axe 0, saw 0.

Soldiers every 5 min: 9 9 9 9 9 9 9 9 9 9 9 9 (original game NPC: 10 10 16 27 33 38 44 46 52 52 52 56).

First army orders (game min:sec): 0:00 armyReserve; 1:30 march 1 soldiers -> 120,120; 4:30 march 1 soldiers -> 50,120.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 2–13: settlers: No free settlers and every bed taken: build houses.
- 38 min, 12–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 1 min, 13: carriers: mill: waiting for grain 78% of the last 10 minutes while 5 lie in stock: too few carriers. Build more houses.
- 1 min, 13: carriers: bakery: waiting for flour 79% of the last 10 minutes while 2 lie in stock: too few carriers. Build more houses.
- 4 min, 14–17: stall: mill: waiting for grain 57% of the last 5 minutes.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (4 mountain tiles).
- 43 min, 18–60: stall: butcher: needs a worker with an axe 100% of the last 5 minutes.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 38 min, 23–60: stall: forest: no free ground to plant in range inside your border 67% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 13 | 11 | 7 | 14 | 7 | 8 | 19 | 9 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 15 | 46 | 1344 | 4645 |
| 30 | 24 | 8 | 8 | 14 | 8 | 8 | 20 | 29 | 12 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 21 | 96 | 1345 | 4645 |
| 45 | 24 | 8 | 8 | 14 | 8 | 8 | 20 | 29 | 12 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 21 | 96 | 1345 | 4645 |
| 60 | 24 | 8 | 8 | 14 | 8 | 8 | 20 | 29 | 12 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 21 | 96 | 1345 | 4645 |

At the end: buildings (built+sites) house 3, forest 3, wood 2, guard 2, farm 2, hq 1, quarry 1, saw 1, fisher 1, hunter 1, waterhut 1, mill 1, bakery 1, pigfarm 1, butcher 1.
People: carrier 21, worker 14, soldier 8, digger 2, builder 2, geologist 1; beds 30. Soldiers: sword 5, bow 3.

Goods produced in the game: log 73, grain 63, stone 57, plank 53, water 42, flour 20, pig 14, fish 8, meat 8, bread 8.
Goods consumed in the game: plank 69, stone 67, log 53, grain 34, water 22, flour 8, axe 2, pick 2, shovel 2, scythe 2, saw 1, rod 1, bow 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (117 building-min): Log pile full, nothing needs it right now 71%, Felling a tree 17%, Bringing a log to the pile 10%, No grown trees in range inside your border 1%, Worker picking up an axe 0%
- quarry (59 building-min): Stone pile full, nothing needs it right now 79%, Cutting stone 15%, Bringing stone to the pile 6%, Worker picking up a pickaxe 0%, Working 0%
- saw (58 building-min): Output pile full, nothing needs it right now 86%, Sawing planks 12%, Stacking outside 2%, Fetching from the pile 0%, Worker picking up a saw 0%
- house (158 building-min): Idle 100%
- forest (163 building-min): No free ground to plant in range inside your border 52%, Needs a worker with a shovel 32%, Planting a sapling 16%, Worker picking up a shovel 0%, Working 0%
- guard (112 building-min): Idle 51%, Waiting for a swordsman: train one at the barracks 49%, Soldiers on the way 0%, Waiting for a soldier 0%
- fisher (56 building-min): Fish pile full, nothing needs it right now 96%, Fish pile full, waiting for carriers 2%, Fishing 1%, Worker picking up a fishing rod 1%, Bringing a fish to the pile 0%
- hunter (56 building-min): Meat pile full, nothing needs it right now 94%, Hunting 2%, Meat pile full, waiting for carriers 2%, Bringing meat to the pile 1%, Worker picking up a bow 0%
- waterhut (55 building-min): Water pile full, nothing needs it right now 92%, Fetching water 4%, Bringing water to the pile 3%, Water pile full, waiting for carriers 1%, Worker on the way 0%
- farm (92 building-min): Grain pile full, nothing needs it right now 89%, Sowing a field 5%, Harvesting grain 3%, Bringing grain to the pile 2%, Worker picking up a scythe 1%
- mill (48 building-min): Output pile full, nothing needs it right now 90%, Waiting for grain 6%, Grinding flour 2%, Stacking outside 1%, Fetching from the pile 0%
- bakery (48 building-min): Output pile full, nothing needs it right now 94%, Baking bread 4%, Waiting for flour 1%, Stacking outside 0%, Waiting for flour and water 0%
- pigfarm (47 building-min): Output pile full, nothing needs it right now 89%, Raising a pig 7%, Waiting for grain 2%, Stacking outside 1%, Waiting for grain and water 0%
- butcher (44 building-min): Needs a worker with an axe 100%

Building sites, time per state (site-min): Builders at work 6, Waiting for a digger 6, Leveling the ground 4, Waiting for a builder 4, Waiting for materials 0.

Build order (placed at min:sec, finished at): wood 0:02→0:32, quarry 0:34→1:06, saw 1:06→1:50, house 1:18→2:08, wood 1:30→2:24, forest 1:50→2:43, guard 2:08→3:01, fisher 2:26→3:45, hunter 2:44→4:09, waterhut 3:02→4:35, guard 3:46→5:06, house 4:36→5:35, forest 6:14→6:58, forest 6:26→7:12, farm 10:00→11:11, mill 10:16→11:44, bakery 11:22→12:08, pigfarm 12:40→13:27, house 13:20→14:07, butcher 14:22→15:36, farm 15:50→17:07.

Orders given: place 21, priority 13, march 2, armyReserve 1, toolKeep 1, profession 1. None refused.

People changing jobs: new carrier 30, carrier -> worker 14, carrier -> geologist 1.

People's orders (1738 in all, 1722 done): worker rest forest 188, worker gather forest 186, worker rest farm 144, worker gather farm 142, worker rest wood 75, worker gather wood 73, worker rest quarry 58, worker gather quarry 57, carrier haul log wood -> saw 57, worker rest saw 54, worker toCraft saw 53, worker craft saw 53, worker rest waterhut 43, worker gather waterhut 42. None failed.

Fights and contact: lost people sword 1; first saw player 1 at 5:00.

Your notes (3 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×3 15:00–45:02 v254 adaptive builder: houses 3/0, guards 2, mines 0/0, carriers 21 idle 21, soldiers 9, sites 0.


Script: 1801 turns, 0.1 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.
