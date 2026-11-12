# Tournament: chatgpt

Game version 204. Written for: chatgpt 200.

- chatgpt: hearthlands-ai-challenge, commit 9561a5a

Maps 20261030, 777, 4242, 31, each twice (sides swapped), up to 60 game minutes (1x). 43 s.

Each game ends with the script's own game log: what it may know (its own side, and what happened to it or what it saw). Times are game min:sec.

| Opponent | Won | Lost | Undecided |
|---|---|---|---|
| original game NPC | 0 | 0 | 8 |

## Games

Each row: buildings / military / land tiles / soldiers / people at the minute shown. First: game minute of the first smelter, smith, weaponsmith, barracks, tower, castle (- = never).

### Map 31: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 19/2/1723/10/30 | 31/6/3159/10/50 |
| 30 | 31/3/2082/18/32 | 67/11/5752/24/106 |
| 45 | 32/4/2405/23/27 | 73/17/10786/48/99 |
| 60 | 32/4/2405/23/27 | 80/23/15609/70/100 |
| first | 15 17 19 21 - - | 8 8 20 20 32 32 |

Soldiers every 5 min: 10 10 10 10 16 18 23 23 23 23 23 23 (original game NPC: 10 10 10 10 13 24 25 37 48 57 65 70).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 18 | 9 | 6 | 20 | 2 | 0 | 13 | 0 | 10 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 44 | 1723 | 3035 |
| 30 | 38 | 16 | 19 | 22 | 12 | 9 | 19 | 30 | 10 | 19 | 10 | 19 | 0 | 0 | 1 | 2 | 2 | 0 | 134 | 2082 | 3774 |
| 45 | 40 | 16 | 24 | 22 | 16 | 12 | 20 | 38 | 14 | 34 | 14 | 20 | 0 | 0 | 0 | 2 | 0 | 2 | 149 | 2405 | 4563 |
| 60 | 40 | 16 | 24 | 22 | 16 | 12 | 20 | 38 | 14 | 34 | 14 | 20 | 0 | 0 | 0 | 2 | 0 | 2 | 149 | 2405 | 4563 |

At the end: buildings (built+sites) guard 4, wood 3, house 3, quarry 2, store 2, farm 2, coalmine 2, hq 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, pigfarm 1, butcher 1.
People: worker 21, soldier 15, digger 2, carrier 2, builder 1, geologist 1; beds 30. Soldiers: sword 9, spear 2, bow 4.

Goods produced in the game: grain 129, log 128, stone 106, coal 100, water 97, plank 92, ironore 57, flour 55, fish 50, iron 43, bread 41, pig 36, meat 22, sword 6, bow 5, spear 4, axe 3, pick 2, saw 1, rod 1, scythe 1.
Goods consumed in the game: plank 100, stone 100, log 92, grain 91, water 77, coal 66, ironore 43, flour 41, fish 34, bread 25, iron 23, pig 22, meat 10, pick 6, sword 6, bow 5, axe 4, hammer 3, scythe 2, spear 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (190 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (148 building-min): Log pile full, waiting for carriers 70%, Felling a tree 18%, Bringing a log to the pile 6%, Waiting for a free settler 5%, Worker picking up an axe 1%
- quarry (94 building-min): Stone pile full, waiting for carriers 69%, Cutting stone 19%, Bringing stone to the pile 11%, Worker picking up a pickaxe 1%, Working 0%
- saw (56 building-min): Output pile full, waiting for carriers 70%, Sawing planks 21%, Stacking outside 4%, Waiting for logs 4%, Fetching from the pile 1%
- store (88 building-min): Idle 100%
- forest (55 building-min): No free ground to plant in range inside your border 54%, Planting a sapling 34%, Waiting for a free settler 12%, Worker picking up a shovel 0%, Idle 0%
- fisher (54 building-min): Fish pile full, waiting for carriers 81%, Waiting for a free settler 11%, Fishing 5%, Bringing a fish to the pile 3%, Worker picking up a fishing rod 1%
- waterhut (53 building-min): Water pile full, waiting for carriers 77%, Waiting for a free settler 9%, Fetching water 7%, Bringing water to the pile 6%, Worker on the way 0%
- farm (84 building-min): Grain pile full, waiting for carriers 73%, Sowing a field 11%, Harvesting grain 8%, Waiting for a free settler 4%, Bringing grain to the pile 4%
- mill (51 building-min): Output pile full, waiting for carriers 81%, Grinding flour 6%, Waiting for a free settler 5%, Waiting for grain 4%, Stacking outside 3%
- bakery (49 building-min): Output pile full, waiting for carriers 70%, Baking bread 19%, Waiting for flour 5%, Stacking outside 2%, Waiting for a free settler 2%
- house (136 building-min): Idle 100%
- coalmine (79 building-min): Coal pile full, waiting for carriers 74%, Mining coal 19%, Bringing coal out 3%, Deposit thinning: mining coal 2%, Needs bread or fish: mining stopped 1%
- ironmine (46 building-min): Iron ore pile full, waiting for carriers 66%, Deposit thinning: mining iron ore 17%, Mining iron ore 11%, Bringing iron ore out 3%, Needs meat or fish: mining stopped 1%
- smelter (45 building-min): Output pile full, waiting for carriers 81%, Smelting iron 12%, Waiting for iron ore 3%, Stacking outside 3%, Waiting for coal and iron ore 1%
- smith (43 building-min): All tool targets met 95%, Waiting for coal and iron 1%, Forging axe 1%, Waiting for coal 1%, Forging pickaxe 1%
- weaponsmith (42 building-min): All weapon targets met 74%, Waiting for coal 19%, Forging sword 2%, Forging bow 1%, Forging spear 1%
- barracks (39 building-min): Waiting for a free settler to train 67%, Waiting for weapons from the weaponsmith 28%, Weapons on the way 4%, Training soldiers 1%
- pigfarm (38 building-min): Output pile full, waiting for carriers 75%, Raising a pig 21%, Stacking outside 2%, Waiting for water 0%, Worker on the way 0%
- butcher (37 building-min): Output pile full, waiting for carriers 65%, Waiting for pigs 28%, Butchering 4%, Stacking outside 2%, Worker picking up an axe 1%

Building sites, time per state (site-min): Builders at work 12, Leveling the ground 7, Waiting for a digger 4, Waiting for a builder 4, Waiting for materials 2.

Build order (placed at min:sec, finished at): guard 0:00→0:51, wood 0:52→1:29, quarry 1:30→2:10, guard 2:10→2:50, saw 2:52→3:36, store 3:36→4:03, wood 4:04→4:31, forest 4:32→5:09, fisher 5:10→6:01, waterhut 6:02→7:00, farm 7:00→8:31, mill 8:32→9:11, bakery 9:12→10:51, house 10:52→11:48, coalmine 11:48→12:30, house 12:30→13:11, ironmine 13:12→13:56, smelter 13:56→14:47, guard 14:48→15:52, smith 15:54→16:59, weaponsmith 17:00→18:26, house 18:28→19:24, barracks 19:26→20:36, pigfarm 20:36→21:54, butcher 21:56→23:01, quarry 23:02→24:13, wood 24:14→25:35, farm 25:36→27:08, store 27:10→27:45, coalmine 27:46→28:48, guard 28:50→30:02.

Orders given: place 31, storeSlot 8, priority 5, archers 4, armyTarget 3, weaponKeep 3, profession 2, sendUnit 2, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 28, carrier -> worker 18, carrier -> soldier 13, new worker 2, carrier -> geologist 1, builder -> worker 1.

People's orders (4061 in all, 4031 done): worker rest farm 267, worker gather farm 265, worker rest wood 131, worker rest forest 130, worker gather forest 129, worker gather wood 128, worker mine coalmine 117, worker rest quarry 108, worker gather quarry 106, worker rest coalmine 102, worker rest waterhut 98, worker gather waterhut 97, carrier haul log wood -> saw 96, worker rest saw 93. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×4.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 15 soldiers, 4 guards, 2 carriers; coal signs 21, iron signs 17.


Script: 1800 turns, 0.1 ms average, worst 16 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 31: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 18/2/1694/10/40 | 32/6/2862/10/50 |
| 30 | 18/2/1694/10/40 | 68/13/5968/25/95 |
| 45 | 18/2/1694/10/40 | 78/19/11283/61/99 |
| 60 | 18/2/1694/10/40 | 85/25/16070/78/102 |
| first | - - - - - - | 11 12 13 18 19 33 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 12 20 25 47 52 61 65 69 78).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 15 | 16 | 13 | 12 | 10 | 0 | 13 | 3 | 13 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 22 | 51 | 1694 | 3210 |
| 30 | 32 | 16 | 16 | 12 | 12 | 0 | 14 | 24 | 14 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 24 | 80 | 1694 | 3217 |
| 45 | 32 | 16 | 16 | 12 | 12 | 0 | 14 | 24 | 14 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 24 | 80 | 1694 | 3217 |
| 60 | 32 | 16 | 16 | 12 | 12 | 0 | 14 | 24 | 14 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 24 | 80 | 1694 | 3217 |

At the end: buildings (built+sites) house 3, guard 2, wood 2, hq 1, quarry 1, saw 1, store 1, forest 1, fisher 1, waterhut 1, farm 1, mill 1, bakery 1, coalmine 1.
People: carrier 24, worker 11, soldier 6, digger 2, builder 2, geologist 1; beds 30. Soldiers: sword 5, bow 1.

Goods produced in the game: log 70, grain 51, stone 46, plank 42, water 27, flour 27, bread 13, fish 9, coal 8.
Goods consumed in the game: plank 50, stone 48, log 42, grain 27, water 13, flour 13, pick 3, fish 3, axe 2, saw 1, shovel 1, rod 1, scythe 1, bread 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (116 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (114 building-min): Log pile full, waiting for carriers 72%, Felling a tree 14%, Waiting for a free settler 5%, Bringing a log to the pile 5%, No grown trees in range inside your border 4%
- quarry (58 building-min): Stone pile full, waiting for carriers 81%, Cutting stone 13%, Bringing stone to the pile 6%, Worker picking up a pickaxe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 84%, Sawing planks 9%, Waiting for logs 4%, Stacking outside 2%, Worker picking up a saw 0%
- store (56 building-min): Idle 100%
- forest (55 building-min): No free ground to plant in range inside your border 71%, Planting a sapling 19%, Waiting for a free settler 10%, Worker picking up a shovel 0%, Idle 0%
- fisher (54 building-min): Fish pile full, waiting for carriers 90%, Waiting for a free settler 8%, Fishing 1%, Bringing a fish to the pile 0%, Worker picking up a fishing rod 0%
- waterhut (53 building-min): Water pile full, waiting for carriers 89%, Waiting for a free settler 6%, Fetching water 2%, Bringing water to the pile 2%, Idle 0%
- farm (52 building-min): Grain pile full, waiting for carriers 81%, Sowing a field 7%, Harvesting grain 5%, Waiting for a free settler 5%, Bringing grain to the pile 2%
- mill (51 building-min): Output pile full, waiting for carriers 89%, Waiting for grain 3%, Waiting for a free settler 3%, Grinding flour 3%, Stacking outside 1%
- bakery (50 building-min): Output pile full, waiting for carriers 89%, Baking bread 6%, Waiting for flour 2%, Waiting for a free settler 1%, Waiting for flour and water 1%
- house (145 building-min): Idle 100%
- coalmine (49 building-min): Coal pile full, waiting for carriers 95%, Mining coal 3%, Needs bread or fish: mining stopped 1%, Bringing coal out 0%, Worker picking up a pickaxe 0%

Building sites, time per state (site-min): Builders at work 4, Leveling the ground 4, Waiting for a digger 2, Waiting for a builder 2, Waiting for materials 1.

Build order (placed at min:sec, finished at): guard 0:00→0:42, wood 0:42→1:09, quarry 1:10→1:43, saw 1:44→2:20, guard 2:20→3:15, store 3:16→3:40, wood 3:42→4:31, forest 4:32→5:04, fisher 5:06→6:03, waterhut 6:04→7:00, farm 7:02→8:05, mill 8:06→8:56, bakery 8:56→9:45, house 9:46→10:21, coalmine 10:22→11:07, house 11:08→11:51, house 12:00→12:58.

Orders given: place 17, storeSlot 4, armyTarget 3, weaponKeep 3, priority 2, archers 2, armyReserve 1, armyList 1, profession 1, sendUnit 1. None refused.

People changing jobs: new carrier 26, carrier -> worker 7, new worker 4, carrier -> geologist 1.

People's orders (1357 in all, 1341 done): worker rest farm 108, worker gather farm 107, worker rest forest 87, worker gather forest 86, worker rest wood 72, worker gather wood 70, worker rest quarry 47, worker gather quarry 46, worker rest saw 43, worker toCraft saw 42, worker craft saw 42, carrier haul log wood -> saw 37, carrier haul grain farm -> mill 35, worker rest waterhut 28. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 6 soldiers, 2 guards, 24 carriers; coal signs 10, iron signs 1.


Script: 1800 turns, 0.4 ms average, worst 18 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 14/2/1700/10/10 | 33/6/2488/10/50 |
| 30 | 26/3/2057/10/40 | 51/8/3724/12/68 |
| 45 | 26/3/2057/23/27 | 73/17/10110/54/86 |
| 60 | 26/3/2033/22/26 | 82/24/15364/66/96 |
| first | 19 22 24 25 - - | 10 11 14 15 36 44 |

Soldiers every 5 min: 10 10 10 10 10 10 14 23 23 23 23 22 (original game NPC: 10 10 10 10 10 12 27 35 54 63 70 66).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 13 | 10 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 21 | 1700 | 3548 |
| 30 | 0 | 0 | 16 | 16 | 12 | 10 | 20 | 30 | 14 | 26 | 0 | 4 | 0 | 0 | 0 | 0 | 0 | 18 | 65 | 2057 | 3824 |
| 45 | 0 | 0 | 16 | 16 | 12 | 12 | 19 | 29 | 14 | 26 | 1 | 17 | 0 | 0 | 0 | 0 | 0 | 3 | 77 | 2057 | 3824 |
| 60 | 0 | 1 | 23 | 16 | 12 | 11 | 26 | 27 | 14 | 24 | 11 | 20 | 0 | 0 | 2 | 0 | 0 | 0 | 85 | 2033 | 3824 |

At the end: buildings (built+sites) guard 3, house 3, wood 2, hq 1, quarry 1, saw 1, store 1, forest 1, fisher 1, waterhut 1, farm 1, mill 1, bakery 1, coalmine 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, butcher 1, pigfarm 1.
People: worker 17, soldier 16, carrier 5, digger 2, builder 1, geologist 1; beds 30. Soldiers: sword 8, spear 4, bow 4.

Goods produced in the game: grain 150, water 135, stone 89, coal 84, pig 74, meat 60, plank 58, log 54, fish 54, ironore 51, flour 49, iron 40, bread 35, sword 8, bow 4, spear 4, axe 2, saw 1, rod 1.
Goods consumed in the game: grain 123, water 109, stone 91, plank 88, coal 60, pig 60, log 58, meat 49, fish 44, ironore 40, flour 35, bread 23, iron 20, sword 6, pick 4, bow 4, spear 4, axe 3, hammer 3, saw 1, shovel 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (157 building-min): Idle 100%, Soldiers on the way 0%
- wood (114 building-min): No grown trees in range inside your border 71%, Felling a tree 10%, Waiting for a free settler 10%, Log pile full, waiting for carriers 5%, Bringing a log to the pile 4%
- quarry (58 building-min): Stone pile full, waiting for carriers 67%, Cutting stone 24%, Bringing stone to the pile 9%, Worker picking up a pickaxe 0%, Working 0%
- saw (56 building-min): Waiting for logs 67%, Output pile full, waiting for carriers 17%, Sawing planks 13%, Stacking outside 3%, Worker picking up a saw 0%
- store (56 building-min): Idle 100%
- forest (55 building-min): No free ground to plant in range inside your border 61%, Planting a sapling 20%, Waiting for a free settler 18%, Worker picking up a shovel 1%, Idle 0%
- fisher (53 building-min): Fish pile full, waiting for carriers 72%, Waiting for a free settler 16%, Fishing 7%, Bringing a fish to the pile 5%, Worker picking up a fishing rod 1%
- waterhut (51 building-min): Water pile full, waiting for carriers 71%, Waiting for a free settler 12%, Fetching water 9%, Bringing water to the pile 7%, Worker on the way 0%
- farm (48 building-min): Grain pile full, waiting for carriers 47%, Sowing a field 22%, Harvesting grain 16%, Bringing grain to the pile 8%, Waiting for a free settler 6%
- mill (47 building-min): Output pile full, waiting for carriers 80%, Grinding flour 6%, Waiting for grain 5%, Waiting for a free settler 5%, Stacking outside 3%
- bakery (46 building-min): Output pile full, waiting for carriers 71%, Baking bread 17%, Waiting for flour 6%, Waiting for a free settler 3%, Stacking outside 2%
- house (124 building-min): Idle 100%
- coalmine (44 building-min): Coal pile full, waiting for carriers 58%, Mining coal 18%, Deposit thinning: mining coal 17%, Bringing coal out 5%, Needs bread or fish: mining stopped 1%
- ironmine (42 building-min): Deposit worn out: finding little iron ore 91%, Bringing iron ore out 3%, Needs meat or fish: mining stopped 2%, Came back empty-handed 2%, Fetching food 1%
- smelter (41 building-min): Waiting for iron ore 53%, Output pile full, waiting for carriers 31%, Smelting iron 12%, Stacking outside 3%, Waiting for coal and iron ore 1%
- smith (39 building-min): All tool targets met 92%, Waiting for iron 4%, Waiting for coal and iron 1%, Waiting for coal 1%, Forging axe 1%
- weaponsmith (37 building-min): All weapon targets met 57%, Waiting for iron 35%, Forging sword 3%, Forging spear 1%, Forging bow 1%
- barracks (35 building-min): Soldier targets met 53%, Waiting for weapons from the weaponsmith 42%, Weapons on the way 4%, Training soldiers 1%, Idle 0%
- pigfarm (32 building-min): Raising a pig 53%, Output pile full, waiting for carriers 38%, Stacking outside 6%, Waiting for water 1%, Fetching from the pile 1%
- butcher (32 building-min): Output pile full, waiting for carriers 75%, Butchering 14%, Stacking outside 5%, Waiting for pigs 3%, Worker picking up an axe 2%

Building sites, time per state (site-min): Builders at work 10, Waiting for materials 6, Leveling the ground 6, Waiting for a digger 4, Waiting for a builder 3.

Build order (placed at min:sec, finished at): guard 0:00→0:39, wood 0:40→1:19, quarry 1:20→2:02, guard 2:02→2:46, saw 2:46→3:39, store 3:40→4:05, wood 4:06→4:33, forest 4:34→5:29, fisher 5:30→7:12, waterhut 7:14→9:10, farm 9:10→12:28, mill 12:28→13:22, bakery 13:24→14:20, house 14:20→15:27, coalmine 15:28→16:13, house 16:14→16:56, ironmine 16:58→17:35, smelter 17:36→18:41, guard 18:42→20:03, smith 20:04→21:23, weaponsmith 21:24→23:03, house 23:04→23:49, barracks 23:50→24:57, pigfarm 24:58→26:29, butcher 26:30→27:32, pigfarm 54:42→56:21.

Demolished or burned: pigfarm (burned) 54:41.

Orders given: place 26, priority 4, storeSlot 4, armyTarget 3, weaponKeep 3, archers 3, profession 2, armyReserve 1, armyList 1, sendUnit 1. None refused.

People changing jobs: new carrier 28, carrier -> worker 15, carrier -> soldier 14, new soldier 6, new worker 2, carrier -> geologist 1, builder -> worker 1, worker -> carrier 1.

People's orders (4158 in all, 4123 done): worker rest farm 307, worker gather farm 306, worker rest waterhut 136, worker mine ironmine 136, worker gather waterhut 135, worker mine coalmine 100, worker rest quarry 90, worker gather quarry 89, worker eat ironmine 88, carrier haul water waterhut -> pigfarm 86, worker rest coalmine 85, worker rest forest 77, worker gather forest 76, carrier haul grain farm -> pigfarm 76. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×5.

Fights and contact: was attacked 4 times (first 55:38); killed spear 6, sword 10, bow 2; lost people sword 2; first saw player 2 at 55:00.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 17 soldiers, 3 guards, 6 carriers; coal signs 9, iron signs 3.


Script: 1825 turns, 0.1 ms average, worst 17 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 17/3/2016/10/30 | 33/6/2657/10/50 |
| 30 | 18/4/2340/10/30 | 54/7/3848/12/78 |
| 45 | 18/4/2340/10/30 | 77/18/9819/50/90 |
| 60 | 18/4/2340/10/30 | 84/26/15240/67/93 |
| first | - - - - - - | 10 11 13 15 27 40 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 12 21 37 50 54 61 67).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 11 | 10 | 9 | 14 | 1 | 0 | 14 | 5 | 7 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 23 | 2016 | 3417 |
| 30 | 24 | 16 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 15 | 64 | 2340 | 3793 |
| 45 | 24 | 16 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 15 | 64 | 2340 | 3793 |
| 60 | 24 | 16 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 15 | 64 | 2340 | 3793 |

At the end: buildings (built+sites) guard 4, wood 2, house 2, hq 1, quarry 1, saw 1, store 1, forest 1, fisher 1, waterhut 1, farm 1, mill 1, bakery 1.
People: carrier 15, worker 10, soldier 3, digger 2, builder 2, geologist 1; beds 20. Soldiers: sword 3.

Goods produced in the game: log 59, stone 48, grain 46, plank 39, water 22, flour 22, fish 8, bread 8.
Goods consumed in the game: stone 50, plank 47, log 39, grain 22, water 8, flour 8, pick 2, axe 2, saw 1, shovel 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (206 building-min): Idle 78%, Waiting for bowmen: train them at the barracks 22%, Soldiers on the way 0%
- wood (113 building-min): No grown trees in range inside your border 43%, Log pile full, waiting for carriers 36%, Felling a tree 11%, Waiting for a free settler 6%, Bringing a log to the pile 4%
- quarry (58 building-min): Stone pile full, waiting for carriers 81%, Cutting stone 13%, Bringing stone to the pile 6%, Worker picking up a pickaxe 0%, Working 0%
- saw (57 building-min): Output pile full, waiting for carriers 88%, Sawing planks 9%, Stacking outside 2%, Worker picking up a saw 1%, Waiting for logs 0%
- store (55 building-min): Idle 100%
- forest (54 building-min): No free ground to plant in range inside your border 65%, Planting a sapling 23%, Waiting for a free settler 12%, Worker picking up a shovel 0%, Idle 0%
- fisher (53 building-min): Fish pile full, waiting for carriers 87%, Waiting for a free settler 10%, Fishing 1%, Bringing a fish to the pile 1%, Worker picking up a fishing rod 1%
- waterhut (51 building-min): Water pile full, waiting for carriers 87%, Waiting for a free settler 8%, Fetching water 2%, Bringing water to the pile 2%, Worker on the way 0%
- farm (50 building-min): Grain pile full, waiting for carriers 80%, Sowing a field 7%, Waiting for a free settler 6%, Harvesting grain 4%, Bringing grain to the pile 2%
- mill (49 building-min): Output pile full, waiting for carriers 88%, Waiting for a free settler 4%, Waiting for grain 4%, Grinding flour 2%, Stacking outside 1%
- bakery (48 building-min): Output pile full, waiting for carriers 90%, Baking bread 4%, Waiting for flour 3%, Waiting for a free settler 2%, Waiting for flour and water 1%
- house (93 building-min): Idle 100%

Building sites, time per state (site-min): Leveling the ground 4, Builders at work 4, Waiting for a digger 2, Waiting for a builder 2, Waiting for materials 2.

Build order (placed at min:sec, finished at): guard 0:00→0:49, wood 0:50→1:19, quarry 1:20→1:56, saw 1:56→2:58, guard 3:00→4:11, store 4:12→4:52, wood 4:54→5:44, forest 5:46→6:27, fisher 6:28→7:17, waterhut 7:18→8:39, farm 8:40→9:48, mill 9:48→10:39, bakery 10:40→11:49, house 11:50→12:36, guard 12:38→13:47, house 13:48→14:28, guard 14:28→15:07.

Orders given: place 17, priority 4, archers 4, storeSlot 4, armyTarget 3, weaponKeep 3, profession 1, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 15, carrier -> worker 5, new worker 5.

People's orders (1266 in all, 1248 done): worker rest farm 103, worker gather farm 102, worker rest forest 96, worker gather forest 95, worker rest wood 61, worker gather wood 59, worker rest quarry 49, worker gather quarry 48, worker rest saw 40, worker toCraft saw 39, worker craft saw 39, carrier haul log wood -> saw 36, carrier haul grain farm -> mill 30, worker rest waterhut 23. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×6.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 3 soldiers, 4 guards, 15 carriers; coal signs 0, iron signs 0.


Script: 1800 turns, 0.2 ms average, worst 134 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 17/3/2027/10/30 | 31/6/2837/10/50 |
| 30 | 19/4/2349/10/30 | 55/7/4690/12/68 |
| 45 | 19/4/2349/10/30 | 69/13/8692/50/90 |
| 60 | 19/4/2349/10/30 | 80/23/13803/76/84 |
| first | - - - - - - | 9 10 19 20 29 40 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 12 25 42 50 58 68 76).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 18 | 16 | 10 | 14 | 5 | 0 | 13 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 13 | 30 | 2027 | 3863 |
| 30 | 32 | 16 | 16 | 12 | 8 | 0 | 14 | 24 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 14 | 80 | 2349 | 4202 |
| 45 | 32 | 16 | 16 | 12 | 8 | 0 | 14 | 24 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 14 | 80 | 2349 | 4202 |
| 60 | 32 | 16 | 16 | 12 | 8 | 0 | 14 | 24 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 14 | 80 | 2349 | 4202 |

At the end: buildings (built+sites) guard 4, wood 2, house 2, hq 1, quarry 1, saw 1, store 1, forest 1, fisher 1, waterhut 1, farm 1, mill 1, bakery 1, ironmine 1.
People: carrier 14, worker 11, soldier 3, digger 2, builder 2, geologist 1; beds 20. Soldiers: sword 3.

Goods produced in the game: log 71, stone 49, grain 46, plank 43, water 22, flour 22, fish 10, bread 8, ironore 8.
Goods consumed in the game: plank 51, stone 51, log 43, grain 22, water 8, flour 8, fish 4, pick 3, axe 2, saw 1, shovel 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (208 building-min): Idle 78%, Waiting for bowmen: train them at the barracks 21%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (113 building-min): Log pile full, waiting for carriers 81%, Felling a tree 13%, Bringing a log to the pile 4%, No grown trees in range inside your border 2%, Worker picking up an axe 1%
- quarry (58 building-min): Stone pile full, waiting for carriers 80%, Cutting stone 14%, Bringing stone to the pile 6%, Worker picking up a pickaxe 0%, Working 0%
- saw (56 building-min): Output pile full, waiting for carriers 87%, Sawing planks 10%, Stacking outside 2%, Fetching from the pile 0%, Worker picking up a saw 0%
- store (55 building-min): Idle 100%
- forest (53 building-min): No free ground to plant in range inside your border 71%, Planting a sapling 19%, Waiting for a free settler 10%, Worker picking up a shovel 0%, Idle 0%
- fisher (53 building-min): Fish pile full, waiting for carriers 90%, Waiting for a free settler 9%, Fishing 1%, Worker picking up a fishing rod 1%, Bringing a fish to the pile 0%
- waterhut (52 building-min): Water pile full, waiting for carriers 90%, Waiting for a free settler 7%, Fetching water 1%, Bringing water to the pile 1%, Worker on the way 0%
- farm (50 building-min): Grain pile full, waiting for carriers 81%, Sowing a field 7%, Harvesting grain 5%, Waiting for a free settler 4%, Bringing grain to the pile 2%
- mill (50 building-min): Output pile full, waiting for carriers 89%, Waiting for grain 4%, Waiting for a free settler 3%, Grinding flour 2%, Stacking outside 1%
- bakery (49 building-min): Output pile full, waiting for carriers 91%, Baking bread 4%, Waiting for a free settler 2%, Waiting for flour 2%, Waiting for flour and water 1%
- house (94 building-min): Idle 100%
- ironmine (43 building-min): Iron ore pile full, waiting for carriers 96%, Mining iron ore 1%, Worker picking up a pickaxe 1%, Deposit thinning: mining iron ore 1%, Bringing iron ore out 0%

Building sites, time per state (site-min): Leveling the ground 5, Builders at work 4, Waiting for a digger 3, Waiting for a builder 2, Waiting for materials 2.

Build order (placed at min:sec, finished at): guard 0:00→0:42, wood 0:42→1:36, quarry 1:38→2:22, guard 2:22→3:08, saw 3:10→4:09, store 4:10→4:39, wood 4:40→5:29, forest 5:30→6:31, fisher 6:32→7:13, waterhut 7:14→8:21, farm 8:22→9:45, mill 9:46→10:17, bakery 10:18→11:05, house 11:06→11:51, guard 11:52→12:39, house 12:40→13:46, guard 13:46→15:22, ironmine 16:44→17:18.

Orders given: place 18, profession 9, priority 4, archers 4, storeSlot 4, armyTarget 3, weaponKeep 3, sendUnit 2, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 16, carrier -> worker 7, new worker 4, carrier -> geologist 1.

People's orders (1321 in all, 1302 done): worker rest farm 103, worker gather farm 102, worker rest forest 83, worker gather forest 82, worker rest wood 73, worker gather wood 71, worker rest quarry 50, worker gather quarry 49, worker rest saw 44, worker toCraft saw 43, worker craft saw 43, carrier haul log wood -> saw 41, carrier haul grain farm -> mill 30, worker rest waterhut 23. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×6.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 3 soldiers, 4 guards, 14 carriers; coal signs 0, iron signs 5.


Script: 1800 turns, 0.1 ms average, worst 11 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 18/4/2306/10/30 | 33/6/2880/10/50 |
| 30 | 18/4/2306/10/30 | 70/15/6764/31/89 |
| 45 | 18/4/2306/10/30 | 80/21/11261/63/97 |
| 60 | 18/4/2306/10/30 | 86/27/16427/79/81 |
| first | - - - - - - | 7 8 9 13 31 38 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 15 20 31 40 56 63 67 72 79).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 19 | 16 | 9 | 14 | 5 | 0 | 14 | 6 | 13 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 11 | 40 | 2306 | 3813 |
| 30 | 32 | 16 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 15 | 72 | 2306 | 3824 |
| 45 | 32 | 16 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 15 | 72 | 2306 | 3824 |
| 60 | 32 | 16 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 15 | 72 | 2306 | 3824 |

At the end: buildings (built+sites) guard 4, wood 2, house 2, hq 1, quarry 1, saw 1, store 1, forest 1, fisher 1, waterhut 1, farm 1, mill 1, bakery 1.
People: carrier 15, worker 10, soldier 3, digger 2, builder 2, geologist 1; beds 20. Soldiers: sword 3.

Goods produced in the game: log 67, stone 48, grain 46, plank 39, water 22, flour 22, fish 8, bread 8.
Goods consumed in the game: stone 50, plank 47, log 39, grain 22, water 8, flour 8, pick 2, axe 2, saw 1, shovel 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (210 building-min): Idle 78%, Waiting for bowmen: train them at the barracks 22%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (113 building-min): Log pile full, waiting for carriers 77%, Felling a tree 13%, Waiting for a free settler 5%, Bringing a log to the pile 5%, Worker picking up an axe 0%
- quarry (58 building-min): Stone pile full, waiting for carriers 80%, Cutting stone 14%, Bringing stone to the pile 6%, Worker picking up a pickaxe 0%, Working 0%
- saw (56 building-min): Output pile full, waiting for carriers 88%, Sawing planks 9%, Stacking outside 2%, Waiting for logs 1%, Worker picking up a saw 0%
- store (56 building-min): Idle 100%
- forest (54 building-min): No free ground to plant in range inside your border 74%, Planting a sapling 16%, Waiting for a free settler 10%, Worker picking up a shovel 0%, Idle 0%
- fisher (53 building-min): Fish pile full, waiting for carriers 90%, Waiting for a free settler 8%, Fishing 1%, Worker picking up a fishing rod 0%, Bringing a fish to the pile 0%
- waterhut (52 building-min): Water pile full, waiting for carriers 90%, Waiting for a free settler 7%, Fetching water 2%, Bringing water to the pile 1%, Idle 0%
- farm (51 building-min): Grain pile full, waiting for carriers 81%, Sowing a field 7%, Waiting for a free settler 5%, Harvesting grain 4%, Bringing grain to the pile 2%
- mill (51 building-min): Output pile full, waiting for carriers 89%, Waiting for grain 4%, Waiting for a free settler 4%, Grinding flour 2%, Stacking outside 1%
- bakery (49 building-min): Output pile full, waiting for carriers 90%, Baking bread 4%, Waiting for flour 3%, Waiting for a free settler 2%, Waiting for flour and water 1%
- house (96 building-min): Idle 100%

Building sites, time per state (site-min): Leveling the ground 5, Builders at work 4, Waiting for a digger 2, Waiting for a builder 2, Waiting for materials 0.

Build order (placed at min:sec, finished at): guard 0:00→0:55, wood 0:56→1:35, quarry 1:36→2:10, guard 2:10→2:57, saw 2:58→3:52, store 3:52→4:23, wood 4:24→5:06, forest 5:06→5:51, fisher 5:52→6:46, waterhut 6:46→7:35, farm 7:36→8:36, mill 8:36→9:25, bakery 9:26→10:32, house 10:34→11:10, guard 11:12→12:04, house 12:04→13:02, guard 13:04→13:55.

Orders given: place 17, priority 4, archers 4, storeSlot 4, armyTarget 3, weaponKeep 3, profession 1, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 15, carrier -> worker 5, new worker 5.

People's orders (1205 in all, 1187 done): worker rest farm 103, worker gather farm 102, worker rest wood 69, worker rest forest 69, worker gather forest 68, worker gather wood 67, worker rest quarry 49, worker gather quarry 48, worker rest saw 40, worker toCraft saw 39, worker craft saw 39, carrier haul log wood -> saw 34, carrier haul grain farm -> mill 30, worker rest waterhut 23. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 3 soldiers, 4 guards, 15 carriers; coal signs 0, iron signs 0.


Script: 1800 turns, 0.1 ms average, worst 14 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 16/2/1704/10/20 | 24/6/2773/10/40 |
| 30 | 28/3/2053/21/29 | 39/6/3374/10/70 |
| 45 | 33/4/2403/21/29 | 70/14/8382/42/83 |
| 60 | 32/3/1927/5/28 | 78/21/13352/58/72 |
| first | 17 20 22 23 - - | 7 9 28 32 35 44 |

Soldiers every 5 min: 10 10 10 10 15 21 21 21 21 21 21 5 (original game NPC: 10 10 10 10 10 10 20 20 42 53 58 58).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 14 | 10 | 8 | 11 | 0 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 27 | 1704 | 3279 |
| 30 | 28 | 14 | 18 | 8 | 11 | 3 | 15 | 22 | 12 | 25 | 1 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 96 | 2053 | 3878 |
| 45 | 35 | 8 | 16 | 9 | 14 | 0 | 20 | 30 | 13 | 31 | 8 | 6 | 8 | 0 | 1 | 1 | 1 | 0 | 126 | 2403 | 4777 |
| 60 | 35 | 11 | 20 | 10 | 14 | 0 | 19 | 30 | 12 | 25 | 6 | 19 | 8 | 0 | 5 | 1 | 4 | 0 | 142 | 1927 | 4991 |

At the end: buildings (built+sites) guard 3, wood 3, house 3, quarry 2, store 2, farm 2, hq 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1, coalmine 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, pigfarm 1, butcher 1, goldmine 1, goldsmelter 1.
People: worker 22, digger 2, carrier 2, soldier 1, builder 1, geologist 1; beds 30. Soldiers: sword 1.

Goods produced in the game: log 120, stone 107, coal 106, grain 100, plank 89, water 77, flour 58, fish 57, ironore 56, iron 50, bread 46, pig 12, sword 11, goldore 8, bow 7, spear 4, meat 4, axe 3, pick 2, saw 1, rod 1, scythe 1, hammer 1.
Goods consumed in the game: stone 109, plank 107, log 89, coal 81, grain 70, water 58, fish 53, ironore 50, flour 46, bread 32, iron 31, pick 6, sword 6, axe 4, hammer 4, pig 4, meat 4, bow 3, spear 3, scythe 2, saw 1, shovel 1, rod 1.
Goods lost in the game: stone 4, plank 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (180 building-min): Idle 99%, Soldiers on the way 1%, Waiting for a swordsman: train one at the barracks 0%, Waiting for bowmen: train them at the barracks 0%, Waiting for a soldier 0%
- wood (145 building-min): Log pile full, waiting for carriers 70%, Felling a tree 17%, Waiting for a free settler 6%, Bringing a log to the pile 5%, Worker picking up an axe 0%
- quarry (90 building-min): Stone pile full, waiting for carriers 66%, Cutting stone 22%, Bringing stone to the pile 12%, Worker picking up a pickaxe 1%, Working 0%
- saw (56 building-min): Output pile full, waiting for carriers 75%, Sawing planks 20%, Stacking outside 4%, Fetching from the pile 1%, Worker picking up a saw 0%
- store (84 building-min): Idle 100%
- forest (55 building-min): No free ground to plant in range inside your border 50%, Planting a sapling 34%, Waiting for a free settler 15%, Worker picking up a shovel 0%, Idle 0%
- fisher (54 building-min): No fish in range inside your border 77%, Waiting for a free settler 14%, Fishing 4%, Bringing a fish to the pile 2%, Fish pile full, waiting for carriers 2%
- waterhut (52 building-min): Water pile full, waiting for carriers 61%, Bringing water to the pile 14%, Fetching water 13%, Waiting for a free settler 12%, Idle 0%
- farm (80 building-min): Grain pile full, waiting for carriers 74%, Sowing a field 10%, Harvesting grain 6%, Waiting for a free settler 5%, Bringing grain to the pile 3%
- mill (49 building-min): Output pile full, waiting for carriers 80%, Grinding flour 7%, Waiting for a free settler 6%, Waiting for grain 4%, Stacking outside 3%
- bakery (47 building-min): Output pile full, waiting for carriers 65%, Baking bread 22%, Waiting for flour 6%, Stacking outside 3%, Waiting for a free settler 2%
- house (127 building-min): Idle 100%
- coalmine (46 building-min): Coal pile full, waiting for carriers 45%, Mining coal 30%, Deposit thinning: mining coal 15%, Bringing coal out 6%, Needs bread or fish: mining stopped 2%
- ironmine (44 building-min): Iron ore pile full, waiting for carriers 40%, Needs meat or fish: mining stopped 29%, Deposit thinning: mining iron ore 13%, Mining iron ore 12%, Bringing iron ore out 4%
- smelter (43 building-min): Waiting for iron ore 66%, Output pile full, waiting for carriers 15%, Smelting iron 14%, Stacking outside 3%, Waiting for coal and iron ore 1%
- smith (40 building-min): All tool targets met 93%, Waiting for coal and iron 2%, Waiting for coal 1%, Forging axe 1%, Forging pickaxe 1%
- weaponsmith (39 building-min): Waiting for iron 55%, All weapon targets met 28%, Output pile full, waiting for carriers 4%, Forging sword 4%, Forging bow 2%
- barracks (37 building-min): Waiting for weapons from the weaponsmith 81%, Waiting for a free settler to train 12%, Weapons on the way 5%, Training soldiers 1%, Idle 0%
- pigfarm (35 building-min): Output pile full, waiting for carriers 89%, Raising a pig 8%, Stacking outside 1%, Waiting for water 1%, Waiting for grain and water 1%
- butcher (33 building-min): Waiting for pigs 98%, Butchering 1%, Worker picking up an axe 0%, Stacking outside 0%, Idle 0%
- goldmine (27 building-min): Gold ore pile full, waiting for carriers 66%, Deposit worn out: finding little gold ore 24%, Needs fish or bread or meat: mining stopped 5%, Worker picking up a pickaxe 3%, Came back empty-handed 1%
- goldsmelter (25 building-min): Waiting for gold ore 87%, Waiting for coal and gold ore 10%, Worker picking up a hammer 2%, Idle 0%, Working 0%

Building sites, time per state (site-min): Builders at work 13, Leveling the ground 9, Waiting for a digger 6, Waiting for a builder 5, Waiting for materials 4.

Build order (placed at min:sec, finished at): guard 0:00→0:42, wood 0:42→1:22, quarry 1:22→2:11, guard 2:12→3:01, saw 3:02→3:47, store 3:48→4:09, wood 4:10→4:43, forest 4:44→5:17, fisher 5:18→6:03, waterhut 6:04→7:36, farm 7:38→9:39, mill 9:40→11:05, bakery 11:06→12:44, house 12:46→13:45, coalmine 13:46→14:29, house 14:30→15:18, ironmine 15:20→16:01, smelter 16:02→16:55, guard 16:56→18:06, smith 18:06→19:34, weaponsmith 19:36→21:26, barracks 21:28→22:43, house 22:44→23:44, pigfarm 23:46→25:14, butcher 25:14→26:37, quarry 26:38→27:45, wood 27:46→28:32, farm 28:34→30:31, store 30:32→32:05, goldmine 32:06→33:28, goldsmelter 33:30→34:55, guard 34:56→36:28, guard 57:58→59:25.

Orders given: place 33, priority 8, storeSlot 8, archers 5, armyTarget 3, weaponKeep 3, sendUnit 3, profession 2, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 26, carrier -> worker 18, carrier -> soldier 12, new soldier 11, new worker 4, carrier -> geologist 1, builder -> carrier 1.

People's orders (3977 in all, 3934 done): worker rest farm 221, worker gather farm 219, worker rest forest 137, worker gather forest 136, worker mine coalmine 133, worker rest wood 123, worker gather wood 120, worker rest quarry 109, worker rest coalmine 108, worker gather quarry 107, worker rest saw 90, worker toCraft saw 89, worker craft saw 89, worker mine ironmine 80. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×12.

Fights and contact: was attacked 4 times (first 55:38); lost guard 57:56, guard 59:16; killed spear 11, sword 16, bow 3; lost people sword 10, bow 4, spear 3; first saw player 2 at 51:00.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 13 soldiers, 4 guards, 3 carriers; coal signs 28, iron signs 33.


Script: 1852 turns, 0.1 ms average, worst 9 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 17/3/2003/10/30 | 25/6/3049/10/40 |
| 30 | 28/4/2354/16/34 | 59/12/5381/21/79 |
| 45 | 32/4/2365/21/29 | 74/17/10359/49/101 |
| 60 | 32/4/2315/21/29 | 83/24/15483/70/81 |
| first | 21 23 24 27 - - | 14 15 16 20 40 38 |

Soldiers every 5 min: 10 10 10 10 10 16 18 21 21 21 21 21 (original game NPC: 10 10 10 10 15 21 24 42 49 56 63 70).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 14 | 11 | 9 | 14 | 0 | 0 | 13 | 4 | 9 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 31 | 2003 | 3783 |
| 30 | 26 | 17 | 16 | 16 | 11 | 5 | 18 | 28 | 14 | 13 | 0 | 10 | 0 | 0 | 1 | 0 | 0 | 0 | 71 | 2354 | 4311 |
| 45 | 36 | 8 | 24 | 13 | 12 | 0 | 20 | 30 | 8 | 30 | 0 | 9 | 0 | 0 | 0 | 3 | 1 | 0 | 122 | 2365 | 4311 |
| 60 | 36 | 8 | 24 | 16 | 16 | 0 | 20 | 29 | 13 | 34 | 6 | 20 | 0 | 0 | 0 | 3 | 1 | 0 | 134 | 2315 | 4311 |

At the end: buildings (built+sites) guard 4, wood 3, house 3, quarry 2, store 2, farm 2, coalmine 2, hq 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, pigfarm 1, butcher 1.
People: worker 21, soldier 13, carrier 4, digger 2, builder 1, geologist 1; beds 30. Soldiers: sword 9, spear 1, bow 3.

Goods produced in the game: grain 129, fish 121, log 116, water 107, stone 106, coal 100, plank 84, flour 80, bread 67, ironore 49, iron 43, pig 20, meat 12, sword 6, bow 5, spear 4, axe 3, pick 2, saw 1, rod 1, scythe 1.
Goods consumed in the game: fish 111, plank 100, stone 100, grain 100, water 87, log 84, flour 67, coal 66, bread 51, ironore 43, iron 23, pig 12, meat 12, pick 6, sword 6, axe 4, bow 4, hammer 3, scythe 2, saw 1, shovel 1, rod 1, spear 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (207 building-min): Idle 94%, Waiting for bowmen: train them at the barracks 6%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (143 building-min): Log pile full, waiting for carriers 68%, Felling a tree 18%, Bringing a log to the pile 8%, Waiting for a free settler 5%, Worker picking up an axe 1%
- quarry (88 building-min): Stone pile full, waiting for carriers 74%, Cutting stone 18%, Bringing stone to the pile 7%, Worker picking up a pickaxe 1%, Idle 0%
- saw (57 building-min): Output pile full, waiting for carriers 71%, Sawing planks 19%, Waiting for logs 5%, Stacking outside 4%, Fetching from the pile 0%
- store (83 building-min): Idle 100%
- forest (55 building-min): No free ground to plant in range inside your border 51%, Planting a sapling 35%, Waiting for a free settler 13%, Worker picking up a shovel 0%, Idle 0%
- fisher (54 building-min): Fish pile full, waiting for carriers 68%, Fishing 12%, Waiting for a free settler 11%, Bringing a fish to the pile 8%, Worker picking up a fishing rod 1%
- waterhut (52 building-min): Water pile full, waiting for carriers 75%, Waiting for a free settler 9%, Fetching water 8%, Bringing water to the pile 7%, Worker on the way 0%
- farm (78 building-min): Grain pile full, waiting for carriers 72%, Sowing a field 12%, Harvesting grain 8%, Bringing grain to the pile 4%, Waiting for a free settler 4%
- mill (49 building-min): Output pile full, waiting for carriers 77%, Grinding flour 9%, Stacking outside 4%, Waiting for grain 4%, Waiting for a free settler 4%
- bakery (48 building-min): Output pile full, waiting for carriers 34%, Baking bread 31%, Waiting for flour 27%, Stacking outside 4%, Waiting for a free settler 2%
- house (128 building-min): Idle 100%
- coalmine (70 building-min): Coal pile full, waiting for carriers 51%, Deposit worn out: finding little coal 17%, Mining coal 13%, Deposit thinning: mining coal 12%, Bringing coal out 4%
- ironmine (40 building-min): Deposit worn out: finding little iron ore 78%, Needs meat or fish: mining stopped 7%, Deposit thinning: mining iron ore 4%, Bringing iron ore out 3%, Mining iron ore 3%
- smelter (39 building-min): Waiting for iron ore 70%, Smelting iron 14%, Output pile full, waiting for carriers 13%, Stacking outside 3%, Worker picking up a hammer 0%
- smith (38 building-min): All tool targets met 91%, Waiting for coal 5%, Forging axe 1%, Forging pickaxe 1%, Stacking outside 1%
- weaponsmith (36 building-min): All weapon targets met 52%, Waiting for coal 27%, Waiting for iron 14%, Forging sword 2%, Forging bow 2%
- barracks (34 building-min): Waiting for weapons from the weaponsmith 95%, Weapons on the way 4%, Training soldiers 1%
- pigfarm (33 building-min): Output pile full, waiting for carriers 83%, Raising a pig 14%, Stacking outside 2%, Waiting for water 1%, Waiting for grain and water 1%
- butcher (31 building-min): Waiting for pigs 95%, Butchering 3%, Worker picking up an axe 1%, Stacking outside 1%, Fetching from the pile 0%

Building sites, time per state (site-min): Builders at work 11, Leveling the ground 7, Waiting for a digger 5, Waiting for a builder 4, Waiting for materials 3.

Build order (placed at min:sec, finished at): guard 0:00→0:54, wood 0:54→1:27, quarry 1:28→2:08, guard 2:10→2:43, saw 2:44→3:23, store 3:24→3:52, wood 3:54→4:34, forest 4:34→5:04, fisher 5:04→6:17, waterhut 6:18→7:44, farm 7:44→9:38, mill 9:40→10:32, bakery 10:32→11:31, house 11:32→12:25, guard 12:26→13:18, house 13:18→14:23, coalmine 14:24→15:26, guard 15:28→16:10, ironmine 19:12→19:46, smelter 19:46→20:47, smith 21:24→22:26, weaponsmith 22:26→23:49, house 23:50→24:51, barracks 24:52→26:05, pigfarm 26:06→27:19, butcher 27:20→28:39, quarry 28:40→29:40, wood 29:42→30:54, farm 30:56→32:47, store 32:48→33:24, coalmine 33:24→34:17.

Orders given: place 31, storeSlot 8, priority 5, archers 4, armyTarget 3, weaponKeep 3, profession 2, sendUnit 2, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 26, carrier -> worker 17, carrier -> soldier 11, new worker 4, carrier -> geologist 1, builder -> carrier 1.

People's orders (4678 in all, 4644 done): worker rest farm 271, worker gather farm 269, worker mine ironmine 160, worker rest forest 143, worker gather forest 142, worker mine coalmine 141, worker eat ironmine 124, worker rest fisher 122, worker gather fisher 121, worker rest wood 119, worker gather wood 116, carrier haul fish fisher -> ironmine 113, worker rest quarry 108, worker rest waterhut 108. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×8.

Fights and contact: first saw player 1 at 60:00.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 13 soldiers, 4 guards, 4 carriers; coal signs 16, iron signs 4.


Script: 1800 turns, 0.1 ms average, worst 21 ms, 0 over 0.3 s, 0 errors. Orders refused: none.
