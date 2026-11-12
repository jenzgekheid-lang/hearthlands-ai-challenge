# Tournament: chatgpt

Game version 200. Written for: chatgpt not stated.

- chatgpt: hearthlands-ai-challenge, commit 2b502ca

Maps 20261030, 777, 4242, 31, each twice (sides swapped), up to 60 game minutes (1x). 34 s.

Each game ends with the script's own game log: what it may know (its own side, and what happened to it or what it saw). Times are game min:sec.

| Opponent | Won | Lost | Undecided |
|---|---|---|---|
| original game NPC | 0 | 0 | 8 |

## Games

Each row: buildings / military / land tiles / soldiers / people at the minute shown. First: game minute of the first smelter, smith, weaponsmith, barracks, tower, castle (- = never).

### Map 31: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 19/2/1707/10/30 | 31/6/3159/10/50 |
| 30 | 30/4/2375/23/27 | 66/10/5776/23/97 |
| 45 | 30/4/2375/25/25 | 78/19/11605/48/112 |
| 60 | 30/4/2375/25/25 | 86/27/15957/75/85 |
| first | 15 17 19 20 - - | 8 8 20 20 31 29 |

Soldiers every 5 min: 10 10 10 10 19 23 25 25 25 25 25 25 (original game NPC: 10 10 10 10 12 23 33 44 48 54 66 75).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 19 | 8 | 6 | 20 | 2 | 0 | 13 | 0 | 10 | 8 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 44 | 1707 | 3035 |
| 30 | 40 | 12 | 21 | 21 | 16 | 0 | 14 | 31 | 14 | 34 | 10 | 20 | 0 | 0 | 0 | 1 | 1 | 0 | 127 | 2375 | 4524 |
| 45 | 40 | 16 | 24 | 22 | 16 | 0 | 14 | 32 | 14 | 34 | 14 | 20 | 0 | 0 | 0 | 0 | 0 | 2 | 133 | 2375 | 4524 |
| 60 | 40 | 16 | 24 | 22 | 16 | 0 | 14 | 32 | 14 | 34 | 14 | 20 | 0 | 0 | 0 | 0 | 0 | 2 | 133 | 2375 | 4524 |

At the end: buildings (built+sites) guard 4, wood 3, house 3, quarry 2, store 2, farm 2, coalmine 2, hq 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1.
People: worker 19, soldier 17, digger 2, carrier 2, builder 1, geologist 1; beds 30. Soldiers: sword 9, spear 4, bow 4.

Goods produced in the game: log 118, coal 98, stone 96, grain 87, plank 82, fish 66, ironore 56, water 55, flour 55, iron 42, bread 41, sword 6, bow 5, spear 4, axe 2, pick 2, saw 1, rod 1, scythe 1.
Goods consumed in the game: plank 90, stone 90, log 82, coal 64, grain 55, fish 50, ironore 42, water 41, flour 41, bread 25, iron 22, pick 6, sword 6, bow 5, spear 4, axe 3, hammer 3, scythe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (181 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (152 building-min): Log pile full, waiting for carriers 73%, Felling a tree 16%, Bringing a log to the pile 6%, Waiting for a free settler 5%, Worker picking up an axe 0%
- quarry (97 building-min): Stone pile full, waiting for carriers 74%, Cutting stone 17%, Bringing stone to the pile 9%, Worker picking up a pickaxe 0%, Working 0%
- saw (56 building-min): Output pile full, waiting for carriers 73%, Sawing planks 18%, Waiting for logs 4%, Stacking outside 4%, Fetching from the pile 0%
- store (90 building-min): Idle 100%
- forest (55 building-min): No free ground to plant in range inside your border 57%, Planting a sapling 30%, Waiting for a free settler 12%, Worker picking up a shovel 0%, Idle 0%
- fisher (54 building-min): Fish pile full, waiting for carriers 78%, Waiting for a free settler 11%, Fishing 6%, Bringing a fish to the pile 4%, Worker picking up a fishing rod 1%
- waterhut (53 building-min): Water pile full, waiting for carriers 83%, Waiting for a free settler 9%, Fetching water 4%, Bringing water to the pile 3%, Worker on the way 0%
- farm (88 building-min): Grain pile full, waiting for carriers 80%, Sowing a field 8%, Harvesting grain 5%, Waiting for a free settler 4%, Bringing grain to the pile 2%
- mill (51 building-min): Output pile full, waiting for carriers 81%, Grinding flour 6%, Waiting for a free settler 5%, Waiting for grain 4%, Stacking outside 3%
- bakery (49 building-min): Output pile full, waiting for carriers 69%, Baking bread 19%, Waiting for flour 7%, Stacking outside 2%, Waiting for a free settler 2%
- house (135 building-min): Idle 100%
- coalmine (83 building-min): Coal pile full, waiting for carriers 76%, Mining coal 17%, Bringing coal out 3%, Deposit thinning: mining coal 2%, Needs bread or fish: mining stopped 1%
- ironmine (46 building-min): Iron ore pile full, waiting for carriers 70%, Deposit thinning: mining iron ore 13%, Mining iron ore 10%, Bringing iron ore out 3%, Needs meat or fish: mining stopped 1%
- smelter (45 building-min): Output pile full, waiting for carriers 82%, Smelting iron 12%, Waiting for iron ore 3%, Stacking outside 3%, Waiting for coal and iron ore 0%
- smith (43 building-min): All tool targets met 95%, Waiting for coal 1%, Waiting for coal and iron 1%, Forging axe 1%, Worker picking up a hammer 1%
- weaponsmith (42 building-min): All weapon targets met 79%, Waiting for coal 13%, Forging sword 2%, Waiting for coal and iron 2%, Forging bow 1%
- barracks (41 building-min): Soldier targets met 73%, Waiting for weapons from the weaponsmith 22%, Weapons on the way 4%, Training soldiers 1%, Idle 0%

Building sites, time per state (site-min): Builders at work 10, Leveling the ground 6, Waiting for a digger 4, Waiting for a builder 4, Waiting for materials 2.

Build order (placed at min:sec, finished at): guard 0:00→0:51, wood 0:52→1:29, quarry 1:30→2:10, guard 2:10→2:50, saw 2:52→3:36, store 3:36→4:03, wood 4:04→4:31, forest 4:32→5:09, fisher 5:10→6:01, waterhut 6:02→7:00, farm 7:00→8:31, mill 8:32→9:11, bakery 9:12→10:51, house 10:52→11:48, coalmine 11:48→12:30, house 12:30→13:11, ironmine 13:12→13:56, smelter 13:56→14:47, smith 15:28→16:33, weaponsmith 16:34→18:04, barracks 18:06→19:06, house 19:06→19:57, quarry 19:58→20:58, wood 21:00→22:13, farm 22:14→23:46, coalmine 23:46→24:47, store 24:48→25:40, guard 25:42→26:52, guard 26:52→28:00.

Orders given: archers 5441, place 29, storeSlot 8, priority 5, armyTarget 3, weaponKeep 3, profession 2, armyReserve 1, armyList 1, sendUnit 1. None refused.

People changing jobs: new carrier 28, carrier -> worker 16, carrier -> soldier 15, new worker 2, carrier -> geologist 1, builder -> worker 1.

People's orders (3404 in all, 3376 done): worker rest farm 195, worker gather farm 193, worker rest wood 121, worker gather wood 118, worker rest forest 116, worker gather forest 115, worker mine coalmine 115, worker rest coalmine 100, worker rest quarry 98, worker gather quarry 96, worker mine ironmine 88, carrier haul log wood -> saw 86, worker rest saw 83, worker toCraft saw 82. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×4.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 17 soldiers, 4 guards, 2 carriers; coal signs 21, iron signs 12.


Script: 1800 turns, 0.1 ms average, worst 18 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 31: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 18/2/1694/10/40 | 31/6/2863/10/50 |
| 30 | 18/2/1694/10/40 | 66/13/6432/26/94 |
| 45 | 18/2/1694/10/40 | 78/19/10946/59/101 |
| 60 | 18/2/1694/10/40 | 84/25/15722/75/96 |
| first | - - - - - - | 11 12 13 18 19 35 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 12 17 26 45 52 59 66 71 75).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 15 | 16 | 13 | 12 | 8 | 0 | 14 | 4 | 14 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 22 | 49 | 1694 | 3210 |
| 30 | 32 | 16 | 16 | 12 | 12 | 0 | 14 | 24 | 14 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 24 | 80 | 1694 | 3217 |
| 45 | 32 | 16 | 16 | 12 | 12 | 0 | 14 | 24 | 14 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 24 | 80 | 1694 | 3217 |
| 60 | 32 | 16 | 16 | 12 | 12 | 0 | 14 | 24 | 14 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 24 | 80 | 1694 | 3217 |

At the end: buildings (built+sites) house 3, guard 2, wood 2, hq 1, quarry 1, saw 1, store 1, forest 1, fisher 1, waterhut 1, farm 1, mill 1, bakery 1, coalmine 1.
People: carrier 24, worker 11, soldier 6, digger 2, builder 2, geologist 1; beds 30. Soldiers: sword 5, bow 1.

Goods produced in the game: log 70, grain 51, stone 46, plank 42, water 27, flour 27, bread 13, fish 10, coal 8.
Goods consumed in the game: plank 50, stone 48, log 42, grain 27, water 13, flour 13, fish 4, pick 3, axe 2, saw 1, shovel 1, rod 1, scythe 1, bread 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (116 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (114 building-min): Log pile full, waiting for carriers 72%, Felling a tree 14%, Bringing a log to the pile 5%, Waiting for a free settler 5%, No grown trees in range inside your border 4%
- quarry (58 building-min): Stone pile full, waiting for carriers 81%, Cutting stone 13%, Bringing stone to the pile 6%, Worker picking up a pickaxe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 84%, Sawing planks 9%, Waiting for logs 4%, Stacking outside 2%, Worker picking up a saw 0%
- store (56 building-min): Idle 100%
- forest (55 building-min): No free ground to plant in range inside your border 71%, Planting a sapling 19%, Waiting for a free settler 10%, Worker picking up a shovel 0%, Idle 0%
- fisher (54 building-min): Fish pile full, waiting for carriers 90%, Waiting for a free settler 8%, Fishing 1%, Bringing a fish to the pile 0%, Worker picking up a fishing rod 0%
- waterhut (53 building-min): Water pile full, waiting for carriers 90%, Waiting for a free settler 6%, Fetching water 2%, Bringing water to the pile 2%, Idle 0%
- farm (52 building-min): Grain pile full, waiting for carriers 81%, Sowing a field 7%, Harvesting grain 5%, Waiting for a free settler 5%, Bringing grain to the pile 2%
- mill (51 building-min): Output pile full, waiting for carriers 89%, Waiting for grain 3%, Waiting for a free settler 3%, Grinding flour 3%, Stacking outside 1%
- bakery (50 building-min): Output pile full, waiting for carriers 88%, Baking bread 6%, Waiting for flour 3%, Waiting for a free settler 1%, Waiting for flour and water 1%
- house (145 building-min): Idle 100%
- coalmine (49 building-min): Coal pile full, waiting for carriers 95%, Mining coal 2%, Needs bread or fish: mining stopped 1%, Worker picking up a pickaxe 0%, Bringing coal out 0%

Building sites, time per state (site-min): Builders at work 4, Leveling the ground 4, Waiting for a digger 2, Waiting for a builder 2, Waiting for materials 1.

Build order (placed at min:sec, finished at): guard 0:00→0:42, wood 0:42→1:09, quarry 1:10→1:43, saw 1:44→2:20, guard 2:20→3:15, store 3:16→3:40, wood 3:42→4:31, forest 4:32→5:04, fisher 5:06→6:03, waterhut 6:04→7:00, farm 7:02→8:05, mill 8:06→8:56, bakery 8:56→9:45, house 9:46→10:21, coalmine 10:22→11:07, house 11:08→11:51, house 12:00→12:58.

Orders given: archers 3481, place 17, storeSlot 4, armyTarget 3, weaponKeep 3, priority 2, armyReserve 1, armyList 1, profession 1, sendUnit 1. None refused.

People changing jobs: new carrier 26, carrier -> worker 7, new worker 4, carrier -> geologist 1.

People's orders (1361 in all, 1345 done): worker rest farm 108, worker gather farm 107, worker rest forest 87, worker gather forest 86, worker rest wood 72, worker gather wood 70, worker rest quarry 47, worker gather quarry 46, worker rest saw 43, worker toCraft saw 42, worker craft saw 42, carrier haul log wood -> saw 37, carrier haul grain farm -> mill 35, worker rest waterhut 28. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 6 soldiers, 2 guards, 24 carriers; coal signs 10, iron signs 1.


Script: 1800 turns, 0.3 ms average, worst 10 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 14/2/1700/10/10 | 33/6/2488/10/50 |
| 30 | 26/2/1741/12/38 | 46/6/2938/10/50 |
| 45 | 29/4/2167/25/25 | 70/15/7487/35/95 |
| 60 | 29/4/2167/25/25 | 81/24/13176/72/98 |
| first | 19 22 23 25 - - | 10 11 14 15 35 46 |

Soldiers every 5 min: 10 10 10 10 10 12 19 25 25 25 25 25 (original game NPC: 10 10 10 10 10 10 17 29 35 48 62 72).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 14 | 10 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 19 | 1700 | 3547 |
| 30 | 2 | 13 | 24 | 16 | 12 | 0 | 14 | 32 | 14 | 24 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 11 | 79 | 1741 | 3547 |
| 45 | 30 | 16 | 24 | 13 | 12 | 0 | 14 | 26 | 14 | 26 | 0 | 11 | 0 | 0 | 0 | 0 | 0 | 0 | 97 | 2167 | 4234 |
| 60 | 30 | 16 | 24 | 14 | 12 | 0 | 14 | 31 | 14 | 26 | 8 | 20 | 0 | 0 | 0 | 0 | 0 | 1 | 107 | 2167 | 4234 |

At the end: buildings (built+sites) guard 4, wood 3, house 3, quarry 2, store 2, farm 2, hq 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1, coalmine 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1.
People: worker 18, soldier 17, carrier 3, digger 2, builder 1, geologist 1; beds 30. Soldiers: sword 9, bow 4, spear 4.

Goods produced in the game: fish 169, log 104, stone 95, coal 88, grain 87, plank 78, water 56, flour 56, ironore 49, bread 42, iron 41, sword 6, bow 5, spear 4, axe 2, saw 1, rod 1, pick 1, scythe 1.
Goods consumed in the game: fish 161, stone 89, plank 86, log 78, coal 62, grain 56, water 42, flour 42, ironore 41, bread 30, iron 21, sword 6, pick 5, bow 5, spear 4, axe 3, hammer 3, scythe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (165 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (148 building-min): No grown trees in range inside your border 52%, Log pile full, waiting for carriers 20%, Felling a tree 15%, Waiting for a free settler 7%, Bringing a log to the pile 5%
- quarry (93 building-min): Stone pile full, waiting for carriers 77%, Cutting stone 16%, Bringing stone to the pile 6%, Worker picking up a pickaxe 0%, Working 0%
- saw (56 building-min): Output pile full, waiting for carriers 70%, Sawing planks 18%, Waiting for logs 8%, Stacking outside 4%, Fetching from the pile 0%
- store (81 building-min): Idle 100%
- forest (54 building-min): No free ground to plant in range inside your border 49%, Planting a sapling 32%, Waiting for a free settler 18%, Worker picking up a shovel 1%, Idle 0%
- fisher (53 building-min): Fish pile full, waiting for carriers 42%, Fishing 23%, Bringing a fish to the pile 19%, Waiting for a free settler 16%, Worker picking up a fishing rod 1%
- waterhut (51 building-min): Water pile full, waiting for carriers 80%, Waiting for a free settler 13%, Fetching water 4%, Bringing water to the pile 3%, Worker on the way 0%
- farm (80 building-min): Grain pile full, waiting for carriers 79%, Sowing a field 8%, Harvesting grain 5%, Waiting for a free settler 4%, Bringing grain to the pile 3%
- mill (47 building-min): Output pile full, waiting for carriers 79%, Grinding flour 7%, Waiting for grain 5%, Waiting for a free settler 5%, Stacking outside 3%
- bakery (46 building-min): Output pile full, waiting for carriers 67%, Baking bread 21%, Waiting for flour 5%, Waiting for a free settler 3%, Stacking outside 2%
- house (124 building-min): Idle 100%
- coalmine (44 building-min): Coal pile full, waiting for carriers 48%, Deposit thinning: mining coal 23%, Mining coal 21%, Bringing coal out 6%, Needs bread or fish: mining stopped 1%
- ironmine (42 building-min): Deposit worn out: finding little iron ore 88%, Needs meat or fish: mining stopped 4%, Bringing iron ore out 3%, Came back empty-handed 2%, Fetching food 2%
- smelter (41 building-min): Waiting for iron ore 69%, Output pile full, waiting for carriers 15%, Smelting iron 13%, Stacking outside 3%, Waiting for coal and iron ore 1%
- smith (39 building-min): All tool targets met 95%, Waiting for coal and iron 1%, Waiting for coal 1%, Forging axe 1%, Stacking outside 0%
- weaponsmith (37 building-min): All weapon targets met 54%, Waiting for iron 37%, Forging sword 2%, Forging bow 2%, Waiting for coal and iron 2%
- barracks (35 building-min): Soldier targets met 60%, Waiting for weapons from the weaponsmith 34%, Weapons on the way 5%, Training soldiers 1%

Building sites, time per state (site-min): Builders at work 10, Leveling the ground 7, Waiting for materials 6, Waiting for a digger 3, Waiting for a builder 3.

Build order (placed at min:sec, finished at): guard 0:00→0:39, wood 0:40→1:19, quarry 1:20→2:02, guard 2:02→2:46, saw 2:48→3:41, store 3:42→4:07, wood 4:08→4:35, forest 4:36→5:31, fisher 5:32→7:14, waterhut 7:16→9:12, farm 9:12→12:30, mill 12:32→13:26, bakery 13:28→14:29, house 14:30→15:32, coalmine 15:32→16:18, house 16:20→17:04, ironmine 17:06→17:43, smelter 17:44→18:49, smith 20:04→21:03, weaponsmith 21:04→22:43, house 22:44→23:29, barracks 23:30→24:37, quarry 24:38→25:24, wood 25:24→26:19, farm 26:20→27:50, store 33:36→34:33, guard 34:34→35:34, guard 35:36→36:21.

Orders given: archers 4937, place 28, storeSlot 8, priority 5, armyTarget 3, weaponKeep 3, profession 2, armyReserve 1, armyList 1, sendUnit 1. None refused.

People changing jobs: new carrier 28, carrier -> worker 15, carrier -> soldier 15, new worker 2, carrier -> geologist 1, builder -> worker 1.

People's orders (3924 in all, 3895 done): worker mine ironmine 189, worker rest farm 181, worker gather farm 179, worker rest fisher 170, worker gather fisher 169, carrier haul fish fisher -> ironmine 159, worker eat ironmine 155, worker rest forest 118, worker gather forest 117, worker mine coalmine 115, worker rest wood 107, worker gather wood 104, worker rest quarry 97, worker gather quarry 95. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 17 soldiers, 4 guards, 3 carriers; coal signs 7, iron signs 3.


Script: 1800 turns, 0.1 ms average, worst 17 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 17/2/1670/10/40 | 33/6/2657/10/50 |
| 30 | 17/2/1670/10/40 | 54/7/3848/12/78 |
| 45 | 17/2/1670/10/40 | 77/18/9819/50/90 |
| 60 | 17/2/1670/10/40 | 84/26/15240/67/93 |
| first | - - - - - - | 10 11 13 15 27 40 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 12 21 37 50 54 61 67).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 9 | 11 | 10 | 14 | 2 | 0 | 14 | 3 | 7 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 24 | 24 | 1670 | 2932 |
| 30 | 24 | 16 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 64 | 1670 | 2932 |
| 45 | 24 | 16 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 64 | 1670 | 2932 |
| 60 | 24 | 16 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 64 | 1670 | 2932 |

At the end: buildings (built+sites) house 3, guard 2, wood 2, hq 1, quarry 1, saw 1, store 1, forest 1, fisher 1, waterhut 1, farm 1, mill 1, bakery 1.
People: carrier 25, worker 10, soldier 6, digger 2, builder 2, geologist 1; beds 30. Soldiers: sword 5, bow 1.

Goods produced in the game: log 58, grain 46, stone 45, plank 38, water 22, flour 22, fish 8, bread 8.
Goods consumed in the game: stone 47, plank 46, log 38, grain 22, water 8, flour 8, pick 2, axe 2, saw 1, shovel 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (115 building-min): Idle 100%, Soldiers on the way 0%
- wood (113 building-min): No grown trees in range inside your border 43%, Log pile full, waiting for carriers 36%, Felling a tree 11%, Waiting for a free settler 6%, Bringing a log to the pile 4%
- quarry (58 building-min): Stone pile full, waiting for carriers 83%, Cutting stone 12%, Bringing stone to the pile 5%, Worker picking up a pickaxe 0%, Working 0%
- saw (57 building-min): Output pile full, waiting for carriers 88%, Sawing planks 8%, Stacking outside 2%, Worker picking up a saw 1%, Waiting for logs 0%
- store (55 building-min): Idle 100%
- forest (54 building-min): No free ground to plant in range inside your border 65%, Planting a sapling 22%, Waiting for a free settler 12%, Worker picking up a shovel 0%, Idle 0%
- fisher (53 building-min): Fish pile full, waiting for carriers 87%, Waiting for a free settler 10%, Fishing 1%, Bringing a fish to the pile 1%, Worker picking up a fishing rod 1%
- waterhut (51 building-min): Water pile full, waiting for carriers 87%, Waiting for a free settler 8%, Fetching water 2%, Bringing water to the pile 2%, Worker on the way 0%
- farm (50 building-min): Grain pile full, waiting for carriers 80%, Sowing a field 7%, Waiting for a free settler 6%, Harvesting grain 4%, Bringing grain to the pile 2%
- mill (49 building-min): Output pile full, waiting for carriers 88%, Waiting for a free settler 4%, Waiting for grain 4%, Grinding flour 2%, Stacking outside 1%
- bakery (48 building-min): Output pile full, waiting for carriers 91%, Baking bread 4%, Waiting for a free settler 2%, Waiting for flour 2%, Waiting for flour and water 1%
- house (139 building-min): Idle 100%

Building sites, time per state (site-min): Leveling the ground 4, Builders at work 4, Waiting for a digger 2, Waiting for a builder 2, Waiting for materials 2.

Build order (placed at min:sec, finished at): guard 0:00→0:49, wood 0:50→1:19, quarry 1:20→1:56, saw 1:56→2:58, guard 3:00→4:11, store 4:12→4:52, wood 4:54→5:44, forest 5:46→6:27, fisher 6:28→7:17, waterhut 7:18→8:39, farm 8:40→9:48, mill 9:48→10:40, bakery 10:40→11:49, house 11:50→12:36, house 12:46→13:44, house 13:54→14:33.

Orders given: archers 3449, place 16, storeSlot 4, armyTarget 3, weaponKeep 3, priority 2, profession 1, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 25, carrier -> worker 5, new worker 5.

People's orders (1239 in all, 1224 done): worker rest farm 103, worker gather farm 102, worker rest forest 95, worker gather forest 94, worker rest wood 60, worker gather wood 58, worker rest quarry 46, worker gather quarry 45, worker rest saw 39, worker toCraft saw 38, worker craft saw 38, carrier haul log wood -> saw 37, carrier haul grain farm -> mill 30, worker rest waterhut 23. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 6 soldiers, 2 guards, 25 carriers; coal signs 0, iron signs 0.


Script: 1800 turns, 0.1 ms average, worst 73 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 17/2/1683/10/40 | 31/6/2806/10/50 |
| 30 | 17/2/1683/10/40 | 55/8/3988/14/76 |
| 45 | 17/2/1683/10/40 | 70/13/7665/50/90 |
| 60 | 17/2/1683/10/40 | 78/20/12736/66/94 |
| first | - - - - - - | 9 10 18 18 43 40 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 14 26 41 50 55 58 66).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 19 | 16 | 10 | 14 | 5 | 0 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 36 | 1683 | 3239 |
| 30 | 32 | 16 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 72 | 1683 | 3242 |
| 45 | 32 | 16 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 72 | 1683 | 3242 |
| 60 | 32 | 16 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 72 | 1683 | 3242 |

At the end: buildings (built+sites) house 3, guard 2, wood 2, hq 1, quarry 1, saw 1, store 1, forest 1, fisher 1, waterhut 1, farm 1, mill 1, bakery 1.
People: carrier 25, worker 10, soldier 6, digger 2, builder 2, geologist 1; beds 30. Soldiers: sword 5, bow 1.

Goods produced in the game: log 66, grain 46, stone 45, plank 38, water 22, flour 22, fish 8, bread 8.
Goods consumed in the game: stone 47, plank 46, log 38, grain 22, water 8, flour 8, axe 2, pick 2, saw 1, shovel 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (116 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (113 building-min): Log pile full, waiting for carriers 82%, Felling a tree 12%, Bringing a log to the pile 4%, No grown trees in range inside your border 2%, Worker picking up an axe 1%
- quarry (58 building-min): Stone pile full, waiting for carriers 82%, Cutting stone 13%, Bringing stone to the pile 5%, Worker picking up a pickaxe 0%, Working 0%
- saw (56 building-min): Output pile full, waiting for carriers 89%, Sawing planks 9%, Stacking outside 2%, Worker picking up a saw 0%, Fetching from the pile 0%
- store (55 building-min): Idle 100%
- forest (53 building-min): No free ground to plant in range inside your border 72%, Planting a sapling 17%, Waiting for a free settler 10%, Worker picking up a shovel 0%, Idle 0%
- fisher (53 building-min): Fish pile full, waiting for carriers 90%, Waiting for a free settler 9%, Worker picking up a fishing rod 1%, Fishing 0%, Bringing a fish to the pile 0%
- waterhut (52 building-min): Water pile full, waiting for carriers 90%, Waiting for a free settler 7%, Fetching water 1%, Bringing water to the pile 1%, Worker on the way 0%
- farm (50 building-min): Grain pile full, waiting for carriers 81%, Sowing a field 7%, Harvesting grain 5%, Waiting for a free settler 4%, Bringing grain to the pile 2%
- mill (50 building-min): Output pile full, waiting for carriers 88%, Waiting for grain 4%, Waiting for a free settler 3%, Grinding flour 2%, Stacking outside 1%
- bakery (49 building-min): Output pile full, waiting for carriers 91%, Baking bread 4%, Waiting for flour 2%, Waiting for a free settler 2%, Waiting for flour and water 1%
- house (142 building-min): Idle 100%

Building sites, time per state (site-min): Leveling the ground 4, Builders at work 4, Waiting for a digger 2, Waiting for a builder 2, Waiting for materials 1.

Build order (placed at min:sec, finished at): guard 0:00→0:42, wood 0:42→1:36, quarry 1:38→2:22, guard 2:22→3:08, saw 3:10→4:09, store 4:10→4:39, wood 4:40→5:29, forest 5:30→6:31, fisher 6:32→7:13, waterhut 7:14→8:21, farm 8:22→9:44, mill 9:46→10:17, bakery 10:18→11:05, house 11:06→11:51, house 12:02→12:50, house 13:00→13:34.

Orders given: archers 3484, place 16, profession 7, storeSlot 4, armyTarget 3, weaponKeep 3, priority 2, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 28, carrier -> worker 8, new worker 2, carrier -> geologist 1.

People's orders (1209 in all, 1194 done): worker rest farm 103, worker gather farm 102, worker rest forest 76, worker gather forest 75, worker rest wood 68, worker gather wood 66, worker rest quarry 46, worker gather quarry 45, worker rest saw 39, worker toCraft saw 38, worker craft saw 38, carrier haul log wood -> saw 34, carrier haul grain farm -> mill 30, worker rest waterhut 23. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 6 soldiers, 2 guards, 25 carriers; coal signs 0, iron signs 0.


Script: 1800 turns, 0.1 ms average, worst 71 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 17/2/1679/10/40 | 33/6/2880/10/50 |
| 30 | 17/2/1679/10/40 | 70/15/6764/31/89 |
| 45 | 17/2/1679/10/40 | 80/21/11261/63/97 |
| 60 | 17/2/1679/10/40 | 86/27/16427/79/81 |
| first | - - - - - - | 7 8 9 13 31 38 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 15 20 31 40 56 63 67 72 79).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 20 | 16 | 12 | 14 | 8 | 0 | 14 | 6 | 11 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 22 | 46 | 1679 | 3295 |
| 30 | 32 | 16 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 72 | 1679 | 3304 |
| 45 | 32 | 16 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 72 | 1679 | 3304 |
| 60 | 32 | 16 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 72 | 1679 | 3304 |

At the end: buildings (built+sites) house 3, guard 2, wood 2, hq 1, quarry 1, saw 1, store 1, forest 1, fisher 1, waterhut 1, farm 1, mill 1, bakery 1.
People: carrier 25, worker 10, soldier 6, digger 2, builder 2, geologist 1; beds 30. Soldiers: sword 5, bow 1.

Goods produced in the game: log 66, grain 46, stone 45, plank 38, water 22, flour 22, fish 8, bread 8.
Goods consumed in the game: stone 47, plank 46, log 38, grain 22, water 8, flour 8, pick 2, axe 2, saw 1, shovel 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (116 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (113 building-min): Log pile full, waiting for carriers 77%, Felling a tree 12%, Waiting for a free settler 5%, Bringing a log to the pile 5%, Worker picking up an axe 0%
- quarry (58 building-min): Stone pile full, waiting for carriers 81%, Cutting stone 13%, Bringing stone to the pile 6%, Worker picking up a pickaxe 0%, Working 0%
- saw (56 building-min): Output pile full, waiting for carriers 88%, Sawing planks 9%, Stacking outside 2%, Waiting for logs 1%, Worker picking up a saw 0%
- store (56 building-min): Idle 100%
- forest (54 building-min): No free ground to plant in range inside your border 76%, Planting a sapling 14%, Waiting for a free settler 10%, Worker picking up a shovel 0%, Idle 0%
- fisher (53 building-min): Fish pile full, waiting for carriers 90%, Waiting for a free settler 8%, Fishing 1%, Worker picking up a fishing rod 0%, Bringing a fish to the pile 0%
- waterhut (52 building-min): Water pile full, waiting for carriers 90%, Waiting for a free settler 7%, Fetching water 2%, Bringing water to the pile 1%, Idle 0%
- farm (51 building-min): Grain pile full, waiting for carriers 81%, Sowing a field 7%, Waiting for a free settler 5%, Harvesting grain 4%, Bringing grain to the pile 2%
- mill (51 building-min): Output pile full, waiting for carriers 88%, Waiting for grain 4%, Waiting for a free settler 4%, Grinding flour 2%, Stacking outside 1%
- bakery (49 building-min): Output pile full, waiting for carriers 91%, Baking bread 4%, Waiting for flour 2%, Waiting for a free settler 2%, Waiting for flour and water 1%
- house (144 building-min): Idle 100%

Building sites, time per state (site-min): Leveling the ground 4, Builders at work 4, Waiting for a digger 2, Waiting for a builder 2, Waiting for materials 0.

Build order (placed at min:sec, finished at): guard 0:00→0:55, wood 0:56→1:35, quarry 1:36→2:10, guard 2:10→2:57, saw 2:58→3:52, store 3:52→4:23, wood 4:24→5:06, forest 5:06→5:51, fisher 5:52→6:46, waterhut 6:46→7:35, farm 7:36→8:36, mill 8:36→9:25, bakery 9:26→10:32, house 10:34→11:10, house 11:20→12:07, house 12:18→12:52.

Orders given: archers 3483, place 16, storeSlot 4, armyTarget 3, weaponKeep 3, priority 2, profession 1, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 25, carrier -> worker 5, new worker 5.

People's orders (1168 in all, 1153 done): worker rest farm 103, worker gather farm 102, worker rest wood 68, worker gather wood 66, worker rest forest 61, worker gather forest 60, worker rest quarry 46, worker gather quarry 45, worker rest saw 39, worker toCraft saw 38, worker craft saw 38, carrier haul log wood -> saw 32, carrier haul grain farm -> mill 30, worker rest waterhut 23. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 6 soldiers, 2 guards, 25 carriers; coal signs 0, iron signs 0.


Script: 1800 turns, 0.1 ms average, worst 12 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 16/2/1704/10/20 | 24/6/2773/10/40 |
| 30 | 26/2/1728/16/34 | 36/6/3354/12/58 |
| 45 | 31/4/2364/22/28 | 74/16/8545/33/117 |
| 60 | 31/4/2364/24/26 | 79/23/13452/64/86 |
| first | 17 19 21 24 - - | 7 9 29 30 41 41 |

Soldiers every 5 min: 10 10 10 10 13 16 21 22 22 24 24 24 (original game NPC: 10 10 10 10 10 12 27 27 33 37 49 64).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 14 | 10 | 8 | 11 | 0 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 28 | 1704 | 3279 |
| 30 | 40 | 16 | 22 | 4 | 11 | 0 | 13 | 31 | 14 | 25 | 0 | 7 | 0 | 0 | 0 | 0 | 0 | 7 | 96 | 1728 | 3279 |
| 45 | 33 | 14 | 16 | 7 | 14 | 0 | 14 | 20 | 14 | 32 | 0 | 4 | 7 | 0 | 1 | 0 | 1 | 0 | 99 | 2364 | 4501 |
| 60 | 33 | 14 | 16 | 6 | 13 | 0 | 13 | 24 | 8 | 32 | 0 | 4 | 8 | 8 | 0 | 0 | 0 | 0 | 108 | 2364 | 4501 |

At the end: buildings (built+sites) guard 4, wood 3, house 3, quarry 2, store 2, farm 2, hq 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1, coalmine 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, goldmine 1, goldsmelter 1.
People: worker 20, soldier 16, digger 2, carrier 2, builder 1, geologist 1; beds 30. Soldiers: sword 9, bow 3, spear 4.

Goods produced in the game: log 114, stone 94, grain 92, coal 88, plank 85, water 73, flour 68, bread 60, fish 42, ironore 26, iron 26, goldore 16, gold 8, sword 6, spear 4, bow 4, axe 2, pick 2, saw 1, rod 1, scythe 1, hammer 1.
Goods consumed in the game: stone 96, plank 95, log 85, grain 68, water 60, flour 60, coal 56, bread 47, fish 42, ironore 26, iron 22, goldore 8, pick 6, sword 6, hammer 4, spear 4, bow 4, axe 3, scythe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (166 building-min): Idle 99%, Soldiers on the way 1%, Waiting for a soldier 0%
- wood (149 building-min): Log pile full, waiting for carriers 72%, Felling a tree 16%, Waiting for a free settler 6%, Bringing a log to the pile 5%, Worker picking up an axe 0%
- quarry (94 building-min): Stone pile full, waiting for carriers 36%, No stone in range inside your border 34%, Cutting stone 19%, Bringing stone to the pile 10%, Worker picking up a pickaxe 1%
- saw (56 building-min): Output pile full, waiting for carriers 76%, Sawing planks 19%, Stacking outside 4%, Fetching from the pile 1%, Worker picking up a saw 0%
- store (83 building-min): Idle 100%
- forest (55 building-min): No free ground to plant in range inside your border 52%, Planting a sapling 33%, Waiting for a free settler 15%, Worker picking up a shovel 0%, Idle 0%
- fisher (54 building-min): No fish in range inside your border 81%, Waiting for a free settler 14%, Fishing 3%, Bringing a fish to the pile 2%, Worker picking up a fishing rod 0%
- waterhut (52 building-min): Water pile full, waiting for carriers 63%, Bringing water to the pile 13%, Fetching water 12%, Waiting for a free settler 12%, Idle 0%
- farm (83 building-min): Grain pile full, waiting for carriers 78%, Sowing a field 9%, Harvesting grain 5%, Waiting for a free settler 5%, Bringing grain to the pile 3%
- mill (49 building-min): Output pile full, waiting for carriers 77%, Grinding flour 8%, Waiting for a free settler 6%, Waiting for grain 6%, Stacking outside 4%
- bakery (47 building-min): Output pile full, waiting for carriers 54%, Baking bread 29%, Waiting for flour 10%, Stacking outside 3%, Waiting for a free settler 2%
- house (129 building-min): Idle 100%
- coalmine (46 building-min): Coal pile full, waiting for carriers 52%, Mining coal 27%, Deposit thinning: mining coal 13%, Bringing coal out 5%, Needs bread or fish: mining stopped 2%
- ironmine (44 building-min): Needs meat or fish: mining stopped 87%, Mining iron ore 10%, Bringing iron ore out 2%, Worker picking up a pickaxe 1%, Fetching food 0%
- smelter (43 building-min): Waiting for iron ore 90%, Smelting iron 8%, Stacking outside 2%, Worker picking up a hammer 0%, Waiting for coal and iron ore 0%
- smith (41 building-min): All tool targets met 94%, Waiting for coal 2%, Forging axe 1%, Forging pickaxe 1%, Stacking outside 1%
- weaponsmith (40 building-min): Waiting for iron 88%, All weapon targets met 5%, Forging sword 2%, Forging spear 1%, Forging bow 1%
- barracks (37 building-min): Waiting for weapons from the weaponsmith 84%, Weapons on the way 12%, Soldier targets met 4%, Training soldiers 0%, Idle 0%
- goldmine (23 building-min): Deposit worn out: finding little gold ore 69%, Gold ore pile full, waiting for carriers 14%, Needs fish or bread or meat: mining stopped 9%, Worker picking up a pickaxe 2%, Came back empty-handed 2%
- goldsmelter (22 building-min): Waiting for gold ore 66%, Output pile full, waiting for carriers 25%, Smelting gold 5%, Worker picking up a hammer 3%, Stacking outside 1%

Building sites, time per state (site-min): Builders at work 11, Leveling the ground 8, Waiting for a digger 5, Waiting for a builder 5, Waiting for materials 3.

Build order (placed at min:sec, finished at): guard 0:00→0:42, wood 0:42→1:22, quarry 1:22→2:11, guard 2:12→3:01, saw 3:02→3:47, store 3:48→4:09, wood 4:10→4:43, forest 4:44→5:17, fisher 5:18→6:03, waterhut 6:04→7:36, farm 7:38→9:39, mill 9:40→11:05, bakery 11:06→12:44, house 12:46→13:45, coalmine 13:46→14:29, house 14:30→15:18, ironmine 15:20→16:01, smelter 16:02→16:55, smith 17:32→18:37, weaponsmith 18:38→20:30, house 20:32→21:32, barracks 21:32→23:01, quarry 23:02→24:18, wood 24:18→25:21, farm 25:22→27:01, store 32:02→33:08, guard 33:08→34:19, guard 34:36→35:35, goldmine 35:56→36:45, goldsmelter 36:46→38:03.

Orders given: archers 4990, place 30, storeSlot 8, priority 6, armyTarget 3, weaponKeep 3, sendUnit 3, profession 2, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 26, carrier -> worker 16, carrier -> soldier 14, new worker 4, carrier -> geologist 1, builder -> carrier 1.

People's orders (3638 in all, 3607 done): worker rest farm 205, worker gather farm 203, worker rest forest 132, worker gather forest 131, worker rest wood 117, worker gather wood 114, worker mine coalmine 108, worker rest quarry 96, worker gather quarry 94, worker rest coalmine 89, worker rest saw 86, worker toCraft saw 85, worker craft saw 85, worker rest waterhut 74. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 16 soldiers, 4 guards, 2 carriers; coal signs 22, iron signs 30.


Script: 1800 turns, 0.1 ms average, worst 8 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 17/2/1672/10/40 | 25/6/3049/10/40 |
| 30 | 17/2/1672/10/40 | 54/6/3509/10/90 |
| 45 | 17/2/1672/10/40 | 69/13/8581/44/86 |
| 60 | 17/2/1672/10/40 | 77/20/14265/66/84 |
| first | - - - - - - | 14 15 16 20 39 38 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 10 13 31 44 53 59 66).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 10 | 14 | 12 | 14 | 3 | 0 | 13 | 1 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 22 | 30 | 1672 | 3178 |
| 30 | 32 | 16 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 72 | 1672 | 3180 |
| 45 | 32 | 16 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 72 | 1672 | 3180 |
| 60 | 32 | 16 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 72 | 1672 | 3180 |

At the end: buildings (built+sites) house 3, guard 2, wood 2, hq 1, quarry 1, saw 1, store 1, forest 1, fisher 1, waterhut 1, farm 1, mill 1, bakery 1.
People: carrier 25, worker 10, soldier 6, digger 2, builder 2, geologist 1; beds 30. Soldiers: sword 5, bow 1.

Goods produced in the game: log 66, grain 46, stone 45, plank 38, water 22, flour 22, fish 8, bread 8.
Goods consumed in the game: stone 47, plank 46, log 38, grain 22, water 8, flour 8, axe 2, pick 2, saw 1, shovel 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (116 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (114 building-min): Log pile full, waiting for carriers 75%, Felling a tree 13%, Waiting for a free settler 7%, Bringing a log to the pile 5%, Worker picking up an axe 0%
- quarry (58 building-min): Stone pile full, waiting for carriers 84%, Cutting stone 11%, Bringing stone to the pile 4%, Worker picking up a pickaxe 0%, Idle 0%
- saw (57 building-min): Output pile full, waiting for carriers 85%, Sawing planks 9%, Waiting for logs 4%, Stacking outside 2%, Worker picking up a saw 0%
- store (56 building-min): Idle 100%
- forest (55 building-min): No free ground to plant in range inside your border 62%, Planting a sapling 24%, Waiting for a free settler 13%, Idle 0%, Worker picking up a shovel 0%
- fisher (54 building-min): Fish pile full, waiting for carriers 87%, Waiting for a free settler 11%, Worker picking up a fishing rod 1%, Idle 0%, Fishing 0%
- waterhut (52 building-min): Water pile full, waiting for carriers 88%, Waiting for a free settler 9%, Fetching water 2%, Bringing water to the pile 1%, Worker on the way 0%
- farm (50 building-min): Grain pile full, waiting for carriers 80%, Sowing a field 7%, Waiting for a free settler 5%, Harvesting grain 5%, Bringing grain to the pile 2%
- mill (50 building-min): Output pile full, waiting for carriers 88%, Waiting for grain 4%, Waiting for a free settler 4%, Grinding flour 2%, Stacking outside 1%
- bakery (49 building-min): Output pile full, waiting for carriers 90%, Baking bread 4%, Waiting for flour 2%, Waiting for a free settler 2%, Waiting for flour and water 1%
- house (140 building-min): Idle 100%

Building sites, time per state (site-min): Leveling the ground 4, Builders at work 4, Waiting for materials 2, Waiting for a digger 2, Waiting for a builder 2.

Build order (placed at min:sec, finished at): guard 0:00→0:54, wood 0:54→1:27, quarry 1:28→2:08, guard 2:10→2:42, saw 2:44→3:23, store 3:24→3:52, wood 3:52→4:32, forest 4:32→5:03, fisher 5:04→6:17, waterhut 6:18→7:43, farm 7:44→9:38, mill 9:38→10:30, bakery 10:30→11:30, house 11:30→12:19, house 12:28→13:07, house 13:16→14:07.

Orders given: archers 3491, place 16, storeSlot 4, armyTarget 3, weaponKeep 3, priority 2, armyReserve 1, armyList 1, profession 1. None refused.

People changing jobs: new carrier 28, carrier -> worker 8, new worker 2, carrier -> geologist 1.

People's orders (1257 in all, 1242 done): worker rest farm 103, worker gather farm 102, worker rest forest 99, worker gather forest 98, worker rest wood 68, worker gather wood 66, worker rest quarry 46, worker gather quarry 45, worker rest saw 39, worker toCraft saw 38, worker craft saw 38, carrier haul log wood -> saw 33, carrier haul grain farm -> mill 30, worker rest waterhut 23. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 6 soldiers, 2 guards, 25 carriers; coal signs 0, iron signs 0.


Script: 1800 turns, 0.1 ms average, worst 34 ms, 0 over 0.3 s, 0 errors. Orders refused: none.
