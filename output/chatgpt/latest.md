# Tournament: chatgpt

Game version 202. Written for: chatgpt 200.

- chatgpt: hearthlands-ai-challenge, commit 6e7df59

Maps 20261030, 777, 4242, 31, each twice (sides swapped), up to 60 game minutes (1x). 46 s.

Each game ends with the script's own game log: what it may know (its own side, and what happened to it or what it saw). Times are game min:sec.

| Opponent | Won | Lost | Undecided |
|---|---|---|---|
| original game NPC | 0 | 0 | 8 |

## Games

Each row: buildings / military / land tiles / soldiers / people at the minute shown. First: game minute of the first smelter, smith, weaponsmith, barracks, tower, castle (- = never).

### Map 31: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 19/2/1719/10/31 | 32/6/2450/10/51 |
| 30 | 31/4/2401/23/28 | 63/12/5503/30/91 |
| 45 | 31/4/2401/25/26 | 76/18/10112/60/101 |
| 60 | 31/4/2401/25/26 | 85/26/14792/76/105 |
| first | 15 17 19 20 - - | 8 8 18 22 25 38 |

Soldiers every 5 min: 10 10 10 10 16 23 25 25 25 25 25 25 (original game NPC: 10 10 10 10 27 30 39 50 60 65 71 76).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 20 | 10 | 7 | 20 | 3 | 0 | 12 | 2 | 9 | 10 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 41 | 1719 | 3036 |
| 30 | 39 | 14 | 16 | 22 | 11 | 3 | 19 | 30 | 11 | 24 | 11 | 20 | 0 | 0 | 1 | 0 | 1 | 0 | 130 | 2401 | 4563 |
| 45 | 40 | 16 | 24 | 22 | 12 | 12 | 20 | 38 | 14 | 26 | 14 | 20 | 0 | 0 | 0 | 0 | 0 | 2 | 140 | 2401 | 4564 |
| 60 | 40 | 16 | 24 | 22 | 12 | 12 | 20 | 38 | 14 | 26 | 14 | 20 | 0 | 0 | 0 | 0 | 0 | 2 | 140 | 2401 | 4564 |

At the end: buildings (built+sites) guard 4, wood 3, house 3, quarry 2, store 2, farm 2, hq 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1, coalmine 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, pigfarm 1, butcher 1.
People: worker 20, soldier 17, digger 2, carrier 2, builder 1, geologist 1; beds 30. Soldiers: sword 9, spear 4, bow 4.

Goods produced in the game: log 124, grain 117, stone 105, plank 88, coal 88, water 85, ironore 55, fish 50, flour 45, iron 41, pig 34, bread 31, meat 20, sword 6, bow 5, spear 4, axe 3, saw 1, rod 1, scythe 1.
Goods consumed in the game: stone 99, plank 96, log 88, grain 79, water 65, coal 62, ironore 41, fish 34, flour 31, iron 21, pig 20, bread 19, meat 8, sword 6, bow 5, axe 4, pick 4, spear 4, hammer 3, scythe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (192 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (149 building-min): Log pile full, waiting for carriers 76%, Felling a tree 17%, Bringing a log to the pile 6%, Worker picking up an axe 0%, Idle 0%
- quarry (94 building-min): Stone pile full, waiting for carriers 69%, Cutting stone 19%, Bringing stone to the pile 11%, Worker picking up a pickaxe 1%, Working 0%
- saw (56 building-min): Output pile full, waiting for carriers 75%, Sawing planks 20%, Stacking outside 4%, Fetching from the pile 0%, Worker picking up a saw 0%
- store (88 building-min): Idle 100%
- forest (55 building-min): No free ground to plant in range inside your border 53%, Planting a sapling 34%, Waiting for a free settler 12%, Worker picking up a shovel 0%
- fisher (54 building-min): Fish pile full, waiting for carriers 79%, Waiting for a free settler 11%, Fishing 6%, Bringing a fish to the pile 4%, Worker picking up a fishing rod 1%
- waterhut (53 building-min): Water pile full, waiting for carriers 79%, Waiting for a free settler 9%, Fetching water 7%, Bringing water to the pile 5%, Worker on the way 0%
- farm (85 building-min): Grain pile full, waiting for carriers 75%, Sowing a field 11%, Harvesting grain 7%, Waiting for a free settler 4%, Bringing grain to the pile 3%
- mill (51 building-min): Output pile full, waiting for carriers 83%, Waiting for a free settler 5%, Grinding flour 5%, Waiting for grain 4%, Stacking outside 2%
- bakery (49 building-min): Output pile full, waiting for carriers 77%, Baking bread 14%, Waiting for flour 3%, Waiting for a free settler 2%, Stacking outside 2%
- house (133 building-min): Idle 100%
- coalmine (48 building-min): Coal pile full, waiting for carriers 67%, Mining coal 26%, Bringing coal out 5%, Needs bread or fish: mining stopped 1%, Worker picking up a pickaxe 1%
- ironmine (46 building-min): Iron ore pile full, waiting for carriers 69%, Deposit thinning: mining iron ore 13%, Mining iron ore 12%, Bringing iron ore out 3%, Needs meat or fish: mining stopped 1%
- smelter (46 building-min): Output pile full, waiting for carriers 83%, Smelting iron 11%, Stacking outside 2%, Waiting for iron ore 2%, Worker picking up a hammer 1%
- smith (43 building-min): All tool targets met 96%, Waiting for coal and iron 1%, Forging axe 1%, Waiting for coal 1%, Stacking outside 0%
- weaponsmith (41 building-min): All weapon targets met 82%, Waiting for coal 11%, Forging sword 2%, Forging bow 1%, Forging spear 1%
- barracks (40 building-min): Soldier targets met 76%, Waiting for weapons from the weaponsmith 16%, Weapons on the way 6%, Training soldiers 2%, Idle 0%
- pigfarm (39 building-min): Output pile full, waiting for carriers 76%, Raising a pig 20%, Stacking outside 2%, Waiting for water 1%, Waiting for grain and water 1%
- butcher (37 building-min): Output pile full, waiting for carriers 62%, Waiting for pigs 31%, Butchering 4%, Stacking outside 1%, Worker picking up an axe 1%

Building sites, time per state (site-min): Builders at work 11, Leveling the ground 6, Waiting for a builder 4, Waiting for a digger 4, Waiting for materials 2.

Build order (placed at min:sec, finished at): guard 0:00→0:51, wood 0:52→1:29, quarry 1:30→2:10, guard 2:10→2:49, saw 2:50→3:34, store 3:34→4:01, wood 4:02→4:26, forest 4:28→5:05, fisher 5:06→5:58, waterhut 5:58→6:56, farm 6:56→8:24, mill 8:26→9:06, bakery 9:08→10:43, house 10:44→11:40, coalmine 11:40→12:22, house 12:22→12:59, ironmine 13:00→13:41, smelter 13:42→14:29, guard 14:30→15:35, smith 15:36→16:54, weaponsmith 16:54→18:34, barracks 18:34→19:44, pigfarm 19:46→20:59, house 21:00→21:56, butcher 21:56→22:58, quarry 23:00→23:55, wood 23:56→25:14, farm 25:14→26:46, store 26:46→27:32, guard 27:34→28:53.

Orders given: place 30, storeSlot 8, priority 5, archers 4, armyTarget 3, weaponKeep 3, armyReserve 1, armyList 1, profession 1, sendUnit 1. None refused.

People changing jobs: new carrier 27, carrier -> worker 17, carrier -> soldier 15, new worker 3, builder -> carrier 1.

People's orders (3757 in all, 3728 done): worker rest farm 253, worker gather farm 251, worker rest forest 129, worker gather forest 128, worker rest wood 127, worker gather wood 124, worker rest quarry 107, worker gather quarry 105, worker mine coalmine 102, carrier haul log wood -> saw 92, worker rest saw 89, worker rest coalmine 89, worker toCraft saw 88, worker craft saw 88. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×5.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 17 soldiers, 4 guards, 2 carriers; coal signs 19, iron signs 18.


Script: 1800 turns, 0.1 ms average, worst 16 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 31: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 18/2/1694/10/41 | 36/6/2960/10/61 |
| 30 | 18/2/1694/10/41 | 70/13/6376/43/98 |
| 45 | 18/2/1694/10/41 | 82/21/12760/66/95 |
| 60 | 18/2/1694/10/41 | 89/27/17785/80/101 |
| first | - - - - - - | 7 9 14 15 32 31 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 14 34 43 51 60 66 72 76 80).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 16 | 14 | 12 | 10 | 0 | 14 | 2 | 14 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 23 | 52 | 1694 | 3185 |
| 30 | 32 | 16 | 16 | 12 | 12 | 0 | 14 | 24 | 14 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 80 | 1694 | 3192 |
| 45 | 32 | 16 | 16 | 12 | 12 | 0 | 14 | 24 | 14 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 80 | 1694 | 3192 |
| 60 | 32 | 16 | 16 | 12 | 12 | 0 | 14 | 24 | 14 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 80 | 1694 | 3192 |

At the end: buildings (built+sites) house 3, guard 2, wood 2, hq 1, quarry 1, saw 1, store 1, forest 1, fisher 1, waterhut 1, farm 1, mill 1, bakery 1, coalmine 1.
People: carrier 25, worker 11, soldier 6, digger 2, builder 2, geologist 1; beds 30. Soldiers: sword 5, bow 1.

Goods produced in the game: log 70, grain 51, stone 46, plank 42, water 27, flour 27, bread 13, fish 10, coal 8.
Goods consumed in the game: plank 50, stone 48, log 42, grain 27, water 13, flour 13, fish 4, axe 2, pick 2, saw 1, shovel 1, rod 1, scythe 1, bread 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (116 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (114 building-min): Log pile full, waiting for carriers 77%, Felling a tree 13%, Bringing a log to the pile 5%, No grown trees in range inside your border 5%, Worker picking up an axe 0%
- quarry (58 building-min): Stone pile full, waiting for carriers 81%, Cutting stone 13%, Bringing stone to the pile 6%, Worker picking up a pickaxe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 88%, Sawing planks 9%, Stacking outside 2%, Worker picking up a saw 0%, Fetching from the pile 0%
- store (56 building-min): Idle 100%
- forest (55 building-min): No free ground to plant in range inside your border 72%, Planting a sapling 19%, Waiting for a free settler 9%, Worker picking up a shovel 0%, Idle 0%
- fisher (54 building-min): Fish pile full, waiting for carriers 91%, Waiting for a free settler 8%, Fishing 1%, Bringing a fish to the pile 0%, Worker picking up a fishing rod 0%
- waterhut (53 building-min): Water pile full, waiting for carriers 90%, Waiting for a free settler 6%, Fetching water 2%, Bringing water to the pile 2%, Idle 0%
- farm (52 building-min): Grain pile full, waiting for carriers 81%, Sowing a field 7%, Harvesting grain 5%, Waiting for a free settler 4%, Bringing grain to the pile 2%
- mill (51 building-min): Output pile full, waiting for carriers 89%, Waiting for grain 3%, Waiting for a free settler 3%, Grinding flour 3%, Stacking outside 1%
- bakery (50 building-min): Output pile full, waiting for carriers 89%, Baking bread 6%, Waiting for flour 3%, Waiting for a free settler 1%, Stacking outside 1%
- house (145 building-min): Idle 100%
- coalmine (49 building-min): Coal pile full, waiting for carriers 95%, Mining coal 3%, Worker picking up a pickaxe 1%, Needs bread or fish: mining stopped 1%, Bringing coal out 0%

Building sites, time per state (site-min): Builders at work 4, Leveling the ground 4, Waiting for a digger 2, Waiting for a builder 2, Waiting for materials 0.

Build order (placed at min:sec, finished at): guard 0:00→0:42, wood 0:42→1:10, quarry 1:10→1:43, saw 1:44→2:20, guard 2:20→3:15, store 3:16→3:40, wood 3:42→4:31, forest 4:32→5:04, fisher 5:06→5:56, waterhut 5:56→6:49, farm 6:50→7:54, mill 7:56→8:44, bakery 8:46→9:35, house 9:36→10:09, coalmine 10:10→10:55, house 10:56→11:39, house 11:48→12:46.

Orders given: place 17, storeSlot 4, armyTarget 3, weaponKeep 3, priority 2, archers 2, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 29, carrier -> worker 10, new worker 1.

People's orders (1360 in all, 1344 done): worker rest farm 108, worker gather farm 107, worker rest forest 87, worker gather forest 86, worker rest wood 72, worker gather wood 70, worker rest quarry 47, worker gather quarry 46, worker rest saw 43, worker toCraft saw 42, worker craft saw 42, carrier haul log wood -> saw 39, carrier haul grain farm -> mill 35, worker rest waterhut 28. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 6 soldiers, 2 guards, 25 carriers; coal signs 13, iron signs 1.


Script: 1800 turns, 0.5 ms average, worst 76 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 15/2/1722/10/21 | 37/6/2276/10/51 |
| 30 | 18/2/1722/10/41 | 54/10/4991/17/64 |
| 45 | 18/2/1722/10/41 | 78/18/9344/60/91 |
| 60 | 18/2/1722/10/41 | 89/28/14545/84/87 |
| first | - - - - - - | 8 8 15 20 39 26 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 14 17 20 36 60 65 76 84).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 24 | 10 | 10 | 6 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 24 | 1722 | 3563 |
| 30 | 16 | 16 | 16 | 12 | 12 | 0 | 14 | 24 | 14 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 64 | 1722 | 3563 |
| 45 | 16 | 16 | 16 | 12 | 12 | 0 | 14 | 24 | 14 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 64 | 1722 | 3563 |
| 60 | 16 | 16 | 16 | 12 | 12 | 0 | 14 | 24 | 14 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 64 | 1722 | 3563 |

At the end: buildings (built+sites) house 3, guard 2, wood 2, hq 1, quarry 1, saw 1, store 1, forest 1, fisher 1, waterhut 1, farm 1, mill 1, bakery 1, coalmine 1.
People: carrier 25, worker 11, soldier 6, digger 2, builder 2, geologist 1; beds 30. Soldiers: sword 5, bow 1.

Goods produced in the game: log 54, grain 50, stone 46, plank 42, water 26, flour 26, bread 12, fish 10, coal 8.
Goods consumed in the game: plank 50, stone 48, log 42, grain 26, water 12, flour 12, fish 4, axe 2, pick 2, saw 1, shovel 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (117 building-min): Idle 100%, Soldiers on the way 0%
- wood (114 building-min): No grown trees in range inside your border 76%, Felling a tree 10%, Log pile full, waiting for carriers 10%, Bringing a log to the pile 4%, Worker picking up an axe 0%
- quarry (58 building-min): Stone pile full, waiting for carriers 84%, Cutting stone 12%, Bringing stone to the pile 4%, Worker picking up a pickaxe 0%, Idle 0%
- saw (56 building-min): Output pile full, waiting for carriers 88%, Sawing planks 9%, Stacking outside 2%, Worker picking up a saw 0%, Fetching from the pile 0%
- store (56 building-min): Idle 100%
- forest (54 building-min): No free ground to plant in range inside your border 61%, Planting a sapling 21%, Waiting for a free settler 16%, Worker picking up a shovel 1%, Idle 0%
- fisher (53 building-min): Fish pile full, waiting for carriers 84%, Waiting for a free settler 14%, Worker picking up a fishing rod 1%, Fishing 1%, Bringing a fish to the pile 0%
- waterhut (52 building-min): Water pile full, waiting for carriers 84%, Waiting for a free settler 12%, Fetching water 2%, Bringing water to the pile 1%, Worker on the way 0%
- farm (49 building-min): Grain pile full, waiting for carriers 77%, Sowing a field 7%, Waiting for a free settler 6%, Harvesting grain 5%, Bringing grain to the pile 3%
- mill (48 building-min): Output pile full, waiting for carriers 85%, Waiting for grain 5%, Waiting for a free settler 5%, Grinding flour 3%, Stacking outside 1%
- bakery (46 building-min): Output pile full, waiting for carriers 86%, Baking bread 6%, Waiting for flour 3%, Waiting for a free settler 2%, Waiting for flour and water 1%
- house (133 building-min): Idle 100%
- coalmine (45 building-min): Coal pile full, waiting for carriers 96%, Mining coal 2%, Needs bread or fish: mining stopped 1%, Worker picking up a pickaxe 1%, Bringing coal out 0%

Building sites, time per state (site-min): Builders at work 4, Waiting for materials 4, Leveling the ground 4, Waiting for a digger 2, Waiting for a builder 2.

Build order (placed at min:sec, finished at): guard 0:00→0:39, wood 0:40→1:19, quarry 1:20→2:02, guard 2:02→2:46, saw 2:46→3:39, store 3:40→4:05, wood 4:06→4:33, forest 4:34→5:31, fisher 5:32→7:11, waterhut 7:12→8:21, farm 8:22→11:26, mill 11:26→12:21, bakery 12:22→13:32, house 13:32→14:32, coalmine 14:34→15:17, house 15:18→15:54, house 16:04→16:33.

Orders given: place 17, storeSlot 4, armyTarget 3, weaponKeep 3, priority 2, archers 2, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 28, carrier -> worker 9, new worker 2.

People's orders (1315 in all, 1299 done): worker rest farm 104, worker gather farm 103, worker rest forest 83, worker gather forest 82, worker rest wood 56, worker gather wood 54, worker rest quarry 47, carrier haul log wood -> saw 47, worker gather quarry 46, worker rest saw 43, worker toCraft saw 42, worker craft saw 42, carrier haul grain farm -> mill 33, worker rest waterhut 27. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 6 soldiers, 2 guards, 25 carriers; coal signs 12, iron signs 2.


Script: 1800 turns, 0.4 ms average, worst 19 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 17/2/1670/10/41 | 37/6/3032/10/54 |
| 30 | 17/2/1670/10/41 | 58/6/3956/10/71 |
| 45 | 17/2/1670/10/41 | 65/11/7848/19/102 |
| 60 | 17/2/1670/10/41 | 74/18/13387/55/86 |
| first | - - - - - - | 7 7 14 14 38 42 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 10 10 17 19 28 38 55).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 5 | 15 | 11 | 14 | 4 | 0 | 14 | 0 | 9 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 33 | 1670 | 3174 |
| 30 | 24 | 16 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 26 | 64 | 1670 | 3174 |
| 45 | 24 | 16 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 26 | 64 | 1670 | 3174 |
| 60 | 24 | 16 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 26 | 64 | 1670 | 3174 |

At the end: buildings (built+sites) house 3, guard 2, wood 2, hq 1, quarry 1, saw 1, store 1, forest 1, fisher 1, waterhut 1, farm 1, mill 1, bakery 1.
People: carrier 26, worker 10, soldier 6, digger 2, builder 2, geologist 1; beds 30. Soldiers: sword 5, bow 1.

Goods produced in the game: log 58, grain 46, stone 45, plank 38, water 22, flour 22, fish 8, bread 8.
Goods consumed in the game: stone 47, plank 46, log 38, grain 22, water 8, flour 8, axe 2, saw 1, pick 1, shovel 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (115 building-min): Idle 100%, Soldiers on the way 0%
- wood (113 building-min): No grown trees in range inside your border 46%, Log pile full, waiting for carriers 39%, Felling a tree 11%, Bringing a log to the pile 4%, Worker picking up an axe 0%
- quarry (58 building-min): Stone pile full, waiting for carriers 83%, Cutting stone 12%, Bringing stone to the pile 5%, Worker picking up a pickaxe 0%, Working 0%
- saw (57 building-min): Output pile full, waiting for carriers 89%, Sawing planks 8%, Stacking outside 2%, Worker picking up a saw 1%, Fetching from the pile 0%
- store (56 building-min): Idle 100%
- forest (54 building-min): No free ground to plant in range inside your border 66%, Planting a sapling 22%, Waiting for a free settler 11%, Worker picking up a shovel 0%, Idle 0%
- fisher (53 building-min): Fish pile full, waiting for carriers 88%, Waiting for a free settler 10%, Fishing 1%, Bringing a fish to the pile 1%, Worker picking up a fishing rod 1%
- waterhut (52 building-min): Water pile full, waiting for carriers 87%, Waiting for a free settler 8%, Fetching water 2%, Bringing water to the pile 2%, Worker on the way 0%
- farm (51 building-min): Grain pile full, waiting for carriers 80%, Sowing a field 7%, Waiting for a free settler 6%, Harvesting grain 5%, Bringing grain to the pile 2%
- mill (50 building-min): Output pile full, waiting for carriers 88%, Waiting for a free settler 4%, Waiting for grain 3%, Grinding flour 2%, Stacking outside 1%
- bakery (49 building-min): Output pile full, waiting for carriers 91%, Baking bread 4%, Waiting for a free settler 2%, Waiting for flour 2%, Waiting for flour and water 1%
- house (140 building-min): Idle 100%

Building sites, time per state (site-min): Leveling the ground 4, Builders at work 4, Waiting for a digger 2, Waiting for a builder 2, Waiting for materials 2.

Build order (placed at min:sec, finished at): guard 0:00→0:49, wood 0:50→1:19, quarry 1:20→1:56, saw 1:56→2:48, guard 2:48→3:42, store 3:42→4:22, wood 4:24→5:14, forest 5:14→5:55, fisher 5:56→6:45, waterhut 6:46→8:16, farm 8:16→9:26, mill 9:28→10:18, bakery 10:18→11:26, house 11:28→12:16, house 12:26→13:25, house 13:34→14:13.

Orders given: place 16, storeSlot 4, armyTarget 3, weaponKeep 3, priority 2, archers 2, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 28, carrier -> worker 8, new worker 2.

People's orders (1236 in all, 1221 done): worker rest farm 103, worker gather farm 102, worker rest forest 95, worker gather forest 94, worker rest wood 60, worker gather wood 58, worker rest quarry 46, worker gather quarry 45, worker rest saw 39, worker toCraft saw 38, worker craft saw 38, carrier haul log wood -> saw 35, carrier haul grain farm -> mill 30, worker rest waterhut 23. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 6 soldiers, 2 guards, 26 carriers; coal signs 1, iron signs 0.


Script: 1800 turns, 0.4 ms average, worst 16 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 17/2/1683/10/41 | 31/5/2289/10/41 |
| 30 | 17/2/1683/10/41 | 50/7/3991/17/64 |
| 45 | 17/2/1683/10/41 | 72/15/8845/52/99 |
| 60 | 17/2/1683/10/41 | 76/21/13540/68/83 |
| first | - - - - - - | 9 13 16 26 40 34 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 17 17 42 52 57 65 68).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 20 | 16 | 10 | 14 | 5 | 0 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 36 | 1683 | 3445 |
| 30 | 32 | 16 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 26 | 72 | 1683 | 3448 |
| 45 | 32 | 16 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 26 | 72 | 1683 | 3448 |
| 60 | 32 | 16 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 26 | 72 | 1683 | 3448 |

At the end: buildings (built+sites) house 3, guard 2, wood 2, hq 1, quarry 1, saw 1, store 1, forest 1, fisher 1, waterhut 1, farm 1, mill 1, bakery 1.
People: carrier 26, worker 10, soldier 6, digger 2, builder 2, geologist 1; beds 30. Soldiers: sword 5, bow 1.

Goods produced in the game: log 66, grain 46, stone 45, plank 38, water 22, flour 22, fish 8, bread 8.
Goods consumed in the game: stone 47, plank 46, log 38, grain 22, water 8, flour 8, axe 2, pick 1, saw 1, shovel 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (116 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (113 building-min): Log pile full, waiting for carriers 82%, Felling a tree 12%, Bringing a log to the pile 4%, No grown trees in range inside your border 2%, Worker picking up an axe 1%
- quarry (58 building-min): Stone pile full, waiting for carriers 82%, Cutting stone 13%, Bringing stone to the pile 5%, Worker picking up a pickaxe 0%, Working 0%
- saw (56 building-min): Output pile full, waiting for carriers 89%, Sawing planks 9%, Stacking outside 2%, Worker picking up a saw 0%, Fetching from the pile 0%
- store (55 building-min): Idle 100%
- forest (53 building-min): No free ground to plant in range inside your border 72%, Planting a sapling 17%, Waiting for a free settler 10%, Worker picking up a shovel 0%, Idle 0%
- fisher (53 building-min): Fish pile full, waiting for carriers 90%, Waiting for a free settler 9%, Worker picking up a fishing rod 1%, Fishing 0%, Bringing a fish to the pile 0%
- waterhut (52 building-min): Water pile full, waiting for carriers 90%, Waiting for a free settler 7%, Fetching water 2%, Bringing water to the pile 1%, Worker on the way 0%
- farm (50 building-min): Grain pile full, waiting for carriers 81%, Sowing a field 7%, Harvesting grain 5%, Waiting for a free settler 4%, Bringing grain to the pile 2%
- mill (50 building-min): Output pile full, waiting for carriers 89%, Waiting for grain 4%, Waiting for a free settler 3%, Grinding flour 2%, Stacking outside 1%
- bakery (49 building-min): Output pile full, waiting for carriers 91%, Baking bread 4%, Waiting for flour 2%, Waiting for a free settler 2%, Waiting for flour and water 1%
- house (142 building-min): Idle 100%

Building sites, time per state (site-min): Leveling the ground 4, Builders at work 4, Waiting for a digger 2, Waiting for a builder 2, Waiting for materials 1.

Build order (placed at min:sec, finished at): guard 0:00→0:42, wood 0:42→1:36, quarry 1:38→2:22, guard 2:22→3:08, saw 3:10→4:09, store 4:10→4:39, wood 4:40→5:29, forest 5:30→6:31, fisher 6:32→7:13, waterhut 7:14→8:21, farm 8:22→9:44, mill 9:46→10:17, bakery 10:18→11:05, house 11:06→11:51, house 12:02→12:50, house 13:00→13:34.

Orders given: place 16, storeSlot 4, armyTarget 3, weaponKeep 3, priority 2, archers 2, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 28, carrier -> worker 8, new worker 2.

People's orders (1210 in all, 1195 done): worker rest farm 103, worker gather farm 102, worker rest forest 76, worker gather forest 75, worker rest wood 68, worker gather wood 66, worker rest quarry 46, worker gather quarry 45, worker rest saw 39, worker toCraft saw 38, worker craft saw 38, carrier haul log wood -> saw 33, carrier haul grain farm -> mill 30, worker rest waterhut 23. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 6 soldiers, 2 guards, 26 carriers; coal signs 0, iron signs 2.


Script: 1800 turns, 0.5 ms average, worst 31 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 18/2/1690/10/41 | 28/6/2620/10/41 |
| 30 | 18/2/1690/10/41 | 53/6/3921/10/81 |
| 45 | 18/2/1690/10/41 | 65/9/6915/41/80 |
| 60 | 18/2/1690/10/41 | 70/16/12425/57/84 |
| first | - - - - - - | 10 11 25 25 40 47 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 10 10 22 41 48 53 57).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 17 | 16 | 11 | 18 | 5 | 0 | 13 | 5 | 11 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 17 | 39 | 1690 | 3362 |
| 30 | 32 | 16 | 16 | 18 | 12 | 0 | 14 | 24 | 14 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 80 | 1690 | 3372 |
| 45 | 32 | 16 | 16 | 18 | 12 | 0 | 14 | 24 | 14 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 80 | 1690 | 3372 |
| 60 | 32 | 16 | 16 | 18 | 12 | 0 | 14 | 24 | 14 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 80 | 1690 | 3372 |

At the end: buildings (built+sites) house 3, guard 2, wood 2, hq 1, quarry 1, saw 1, store 1, forest 1, fisher 1, waterhut 1, farm 1, mill 1, bakery 1, coalmine 1.
People: carrier 25, worker 11, soldier 6, digger 2, builder 2, geologist 1; beds 30. Soldiers: sword 5, bow 1.

Goods produced in the game: log 70, grain 51, stone 46, plank 42, water 27, flour 27, fish 17, bread 13, coal 8.
Goods consumed in the game: plank 50, stone 48, log 42, grain 27, water 13, flour 13, fish 5, axe 2, pick 2, saw 1, shovel 1, rod 1, scythe 1, bread 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (116 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (113 building-min): Log pile full, waiting for carriers 81%, Felling a tree 13%, Bringing a log to the pile 5%, Worker picking up an axe 0%, Idle 0%
- quarry (58 building-min): Stone pile full, waiting for carriers 81%, Cutting stone 13%, Bringing stone to the pile 6%, Worker picking up a pickaxe 0%, Working 0%
- saw (56 building-min): Output pile full, waiting for carriers 88%, Sawing planks 9%, Stacking outside 2%, Worker picking up a saw 0%, Fetching from the pile 0%
- store (56 building-min): Idle 100%
- forest (54 building-min): No free ground to plant in range inside your border 76%, Planting a sapling 14%, Waiting for a free settler 10%, Worker picking up a shovel 0%, Idle 0%
- fisher (53 building-min): Fish pile full, waiting for carriers 89%, Waiting for a free settler 8%, Fishing 1%, Bringing a fish to the pile 1%, Worker picking up a fishing rod 0%
- waterhut (52 building-min): Water pile full, waiting for carriers 89%, Waiting for a free settler 7%, Fetching water 2%, Bringing water to the pile 2%, Idle 0%
- farm (51 building-min): Grain pile full, waiting for carriers 80%, Sowing a field 7%, Waiting for a free settler 5%, Harvesting grain 5%, Bringing grain to the pile 2%
- mill (50 building-min): Output pile full, waiting for carriers 88%, Waiting for grain 4%, Waiting for a free settler 4%, Grinding flour 3%, Stacking outside 1%
- bakery (49 building-min): Output pile full, waiting for carriers 88%, Baking bread 6%, Waiting for flour 4%, Waiting for a free settler 2%, Stacking outside 1%
- house (142 building-min): Idle 100%
- coalmine (48 building-min): Coal pile full, waiting for carriers 95%, Mining coal 3%, Worker picking up a pickaxe 1%, Bringing coal out 0%, Needs bread or fish: mining stopped 0%

Building sites, time per state (site-min): Leveling the ground 5, Builders at work 4, Waiting for a digger 2, Waiting for a builder 2, Waiting for materials 1.

Build order (placed at min:sec, finished at): guard 0:00→0:55, wood 0:56→1:36, quarry 1:36→2:10, guard 2:10→2:57, saw 2:58→3:52, store 3:52→4:23, wood 4:24→5:06, forest 5:06→5:57, fisher 5:58→6:52, waterhut 6:52→7:41, farm 7:42→8:45, mill 8:46→9:36, bakery 9:36→10:37, house 10:38→11:17, coalmine 11:18→11:59, house 12:00→12:56, house 13:06→13:40.

Orders given: place 17, storeSlot 4, armyTarget 3, weaponKeep 3, priority 2, archers 2, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 26, carrier -> worker 7, new worker 4.

People's orders (1335 in all, 1319 done): worker rest farm 108, worker gather farm 107, worker rest wood 72, worker gather wood 70, worker rest forest 61, worker gather forest 60, worker rest quarry 47, worker gather quarry 46, worker rest saw 43, worker toCraft saw 42, worker craft saw 42, carrier haul log wood -> saw 35, carrier haul grain farm -> mill 35, worker rest waterhut 28. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 6 soldiers, 2 guards, 25 carriers; coal signs 18, iron signs 6.


Script: 1800 turns, 0.5 ms average, worst 33 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 16/2/1697/10/21 | 42/8/3772/16/65 |
| 30 | 29/3/2052/18/33 | 73/15/7407/48/93 |
| 45 | 33/4/2393/22/29 | 79/21/11919/64/97 |
| 60 | 33/4/2393/23/28 | 86/28/16840/81/100 |
| first | 17 20 21 22 - - | 7 8 10 12 32 28 |

Soldiers every 5 min: 10 10 10 10 10 18 22 22 22 23 23 23 (original game NPC: 10 10 16 22 24 48 52 60 64 68 75 81).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 23 | 11 | 10 | 9 | 0 | 0 | 8 | 4 | 2 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 34 | 1697 | 3279 |
| 30 | 35 | 11 | 14 | 11 | 11 | 7 | 16 | 22 | 11 | 19 | 6 | 14 | 0 | 0 | 0 | 0 | 1 | 0 | 99 | 2052 | 3878 |
| 45 | 37 | 8 | 16 | 11 | 13 | 0 | 20 | 28 | 14 | 30 | 8 | 20 | 8 | 0 | 1 | 1 | 1 | 0 | 133 | 2393 | 4456 |
| 60 | 37 | 8 | 16 | 16 | 14 | 12 | 20 | 30 | 14 | 31 | 14 | 20 | 8 | 1 | 1 | 1 | 0 | 0 | 150 | 2393 | 4456 |

At the end: buildings (built+sites) guard 4, wood 3, house 3, quarry 2, store 2, farm 2, hq 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1, coalmine 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, pigfarm 1, butcher 1, goldmine 1, goldsmelter 1.
People: worker 22, soldier 15, digger 2, carrier 2, builder 1, geologist 1; beds 30. Soldiers: sword 8, spear 3, bow 4.

Goods produced in the game: grain 131, log 122, water 107, stone 104, coal 98, plank 89, flour 57, ironore 57, pig 44, fish 43, bread 43, iron 43, meat 30, goldore 9, sword 6, bow 5, spear 4, axe 3, saw 1, rod 1, scythe 1, pick 1, hammer 1, gold 1.
Goods consumed in the game: stone 106, plank 105, grain 101, log 89, water 87, coal 67, flour 43, ironore 43, fish 33, pig 30, bread 29, iron 23, meat 18, pick 5, sword 5, bow 5, axe 4, hammer 4, spear 3, scythe 2, saw 1, shovel 1, rod 1, goldore 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (183 building-min): Idle 100%, Soldiers on the way 0%
- wood (146 building-min): Log pile full, waiting for carriers 76%, Felling a tree 18%, Bringing a log to the pile 6%, Worker picking up an axe 0%, Idle 0%
- quarry (91 building-min): Stone pile full, waiting for carriers 67%, Cutting stone 21%, Bringing stone to the pile 11%, Worker picking up a pickaxe 1%, Idle 0%
- saw (56 building-min): Output pile full, waiting for carriers 75%, Sawing planks 20%, Stacking outside 4%, Fetching from the pile 0%, Worker picking up a saw 0%
- store (85 building-min): Idle 100%
- forest (55 building-min): No free ground to plant in range inside your border 59%, Planting a sapling 26%, Waiting for a free settler 15%, Worker picking up a shovel 0%, Idle 0%
- fisher (54 building-min): No fish in range inside your border 77%, Waiting for a free settler 13%, Fish pile full, waiting for carriers 4%, Fishing 3%, Bringing a fish to the pile 2%
- waterhut (52 building-min): Water pile full, waiting for carriers 51%, Bringing water to the pile 19%, Fetching water 18%, Waiting for a free settler 11%, Worker on the way 0%
- farm (81 building-min): Grain pile full, waiting for carriers 70%, Sowing a field 12%, Harvesting grain 8%, Waiting for a free settler 5%, Bringing grain to the pile 3%
- mill (49 building-min): Output pile full, waiting for carriers 80%, Grinding flour 7%, Waiting for a free settler 6%, Waiting for grain 4%, Stacking outside 3%
- bakery (48 building-min): Output pile full, waiting for carriers 66%, Baking bread 20%, Waiting for flour 7%, Waiting for a free settler 3%, Stacking outside 2%
- house (126 building-min): Idle 100%
- coalmine (46 building-min): Coal pile full, waiting for carriers 52%, Mining coal 25%, Deposit thinning: mining coal 15%, Bringing coal out 5%, Needs bread or fish: mining stopped 1%
- ironmine (44 building-min): Iron ore pile full, waiting for carriers 44%, Deposit thinning: mining iron ore 21%, Needs meat or fish: mining stopped 17%, Mining iron ore 12%, Bringing iron ore out 3%
- smelter (43 building-min): Waiting for iron ore 47%, Output pile full, waiting for carriers 36%, Smelting iron 12%, Stacking outside 3%, Worker picking up a hammer 1%
- smith (41 building-min): All tool targets met 96%, Forging axe 1%, Waiting for coal and iron 1%, Stacking outside 1%, Waiting for coal 0%
- weaponsmith (39 building-min): All weapon targets met 74%, Waiting for iron 20%, Forging sword 2%, Forging bow 2%, Forging spear 1%
- barracks (38 building-min): Waiting for weapons from the weaponsmith 58%, Waiting for a free settler to train 36%, Weapons on the way 4%, Training soldiers 1%, Idle 0%
- pigfarm (37 building-min): Output pile full, waiting for carriers 68%, Raising a pig 27%, Stacking outside 3%, Waiting for grain and water 1%, Waiting for water 1%
- butcher (36 building-min): Waiting for pigs 79%, Output pile full, waiting for carriers 12%, Butchering 6%, Stacking outside 2%, Worker picking up an axe 1%
- goldmine (28 building-min): Gold ore pile full, waiting for carriers 65%, Deposit worn out: finding little gold ore 24%, Needs fish or bread or meat: mining stopped 8%, Worker picking up a pickaxe 2%, Bringing gold ore out 1%
- goldsmelter (26 building-min): Waiting for gold ore 86%, Waiting for coal and gold ore 11%, Worker picking up a hammer 2%, Idle 0%, Smelting gold 0%

Building sites, time per state (site-min): Builders at work 13, Leveling the ground 8, Waiting for a digger 5, Waiting for a builder 5, Waiting for materials 4.

Build order (placed at min:sec, finished at): guard 0:00→0:42, wood 0:44→1:24, quarry 1:24→2:14, guard 2:14→3:03, saw 3:04→3:50, store 3:50→4:11, wood 4:12→4:46, forest 4:46→5:19, fisher 5:20→6:05, waterhut 6:06→7:39, farm 7:40→9:37, mill 9:38→10:38, bakery 10:40→12:05, house 12:06→13:20, coalmine 13:22→14:12, house 14:12→15:08, ironmine 15:10→16:03, smelter 16:04→16:54, guard 16:56→17:43, smith 17:44→19:00, weaponsmith 19:00→20:39, barracks 20:40→21:47, pigfarm 21:48→23:04, butcher 23:04→24:15, house 24:16→25:25, quarry 25:26→26:48, wood 26:50→27:33, farm 27:34→29:31, store 29:32→30:55, goldmine 30:56→32:20, goldsmelter 32:20→33:57, guard 33:58→35:24.

Orders given: place 32, storeSlot 8, priority 6, archers 4, armyTarget 3, weaponKeep 3, sendUnit 2, armyReserve 1, armyList 1, profession 1. None refused.

People changing jobs: new carrier 26, carrier -> worker 18, carrier -> soldier 13, new worker 4, builder -> carrier 1.

People's orders (4295 in all, 4262 done): worker rest farm 287, worker gather farm 285, worker rest wood 125, worker gather wood 122, worker mine coalmine 118, worker rest forest 117, worker gather forest 116, worker rest waterhut 108, worker gather waterhut 107, worker rest quarry 106, worker gather quarry 104, worker rest coalmine 99, worker rest saw 90, worker toCraft saw 89. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×4.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 15 soldiers, 4 guards, 2 carriers; coal signs 12, iron signs 20.


Script: 1800 turns, 0.1 ms average, worst 13 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 17/2/1672/10/41 | 32/6/2937/10/51 |
| 30 | 17/2/1672/10/41 | 51/6/3792/10/71 |
| 45 | 17/2/1672/10/41 | 67/10/7552/39/102 |
| 60 | 17/2/1672/10/41 | 76/19/13495/63/98 |
| first | - - - - - - | 10 10 12 13 40 39 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 10 10 25 39 45 54 63).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 18 | 15 | 13 | 14 | 4 | 0 | 13 | 0 | 9 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 23 | 36 | 1672 | 3267 |
| 30 | 32 | 16 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 26 | 72 | 1672 | 3267 |
| 45 | 32 | 16 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 26 | 72 | 1672 | 3267 |
| 60 | 32 | 16 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 26 | 72 | 1672 | 3267 |

At the end: buildings (built+sites) house 3, guard 2, wood 2, hq 1, quarry 1, saw 1, store 1, forest 1, fisher 1, waterhut 1, farm 1, mill 1, bakery 1.
People: carrier 26, worker 10, soldier 6, digger 2, builder 2, geologist 1; beds 30. Soldiers: sword 5, bow 1.

Goods produced in the game: log 66, grain 46, stone 45, plank 38, water 22, flour 22, fish 8, bread 8.
Goods consumed in the game: stone 47, plank 46, log 38, grain 22, water 8, flour 8, axe 2, pick 1, saw 1, shovel 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (116 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (114 building-min): Log pile full, waiting for carriers 82%, Felling a tree 12%, Bringing a log to the pile 4%, No grown trees in range inside your border 1%, Worker picking up an axe 0%
- quarry (58 building-min): Stone pile full, waiting for carriers 84%, Cutting stone 12%, Bringing stone to the pile 4%, Worker picking up a pickaxe 0%, Working 0%
- saw (57 building-min): Output pile full, waiting for carriers 89%, Sawing planks 9%, Stacking outside 2%, Worker picking up a saw 0%, Fetching from the pile 0%
- store (56 building-min): Idle 100%
- forest (55 building-min): No free ground to plant in range inside your border 63%, Planting a sapling 24%, Waiting for a free settler 13%, Worker picking up a shovel 0%, Idle 0%
- fisher (54 building-min): Fish pile full, waiting for carriers 88%, Waiting for a free settler 11%, Worker picking up a fishing rod 1%, Fishing 0%, Bringing a fish to the pile 0%
- waterhut (52 building-min): Water pile full, waiting for carriers 88%, Waiting for a free settler 8%, Fetching water 2%, Bringing water to the pile 1%, Worker on the way 0%
- farm (51 building-min): Grain pile full, waiting for carriers 80%, Sowing a field 7%, Waiting for a free settler 5%, Harvesting grain 5%, Bringing grain to the pile 2%
- mill (50 building-min): Output pile full, waiting for carriers 88%, Waiting for grain 4%, Waiting for a free settler 4%, Grinding flour 2%, Stacking outside 1%
- bakery (49 building-min): Output pile full, waiting for carriers 90%, Baking bread 4%, Waiting for flour 2%, Waiting for a free settler 2%, Waiting for flour and water 1%
- house (141 building-min): Idle 100%

Building sites, time per state (site-min): Leveling the ground 4, Builders at work 4, Waiting for a digger 2, Waiting for a builder 2, Waiting for materials 2.

Build order (placed at min:sec, finished at): guard 0:00→0:54, wood 0:54→1:27, quarry 1:28→2:08, guard 2:10→2:39, saw 2:40→3:19, store 3:20→3:48, wood 3:50→4:30, forest 4:30→4:58, fisher 5:00→6:11, waterhut 6:12→7:32, farm 7:34→9:22, mill 9:24→10:16, bakery 10:16→11:14, house 11:16→12:01, house 12:10→13:03, house 13:12→14:00.

Orders given: place 16, storeSlot 4, armyTarget 3, weaponKeep 3, priority 2, archers 2, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 26, carrier -> worker 6, new worker 4.

People's orders (1249 in all, 1234 done): worker rest farm 103, worker gather farm 102, worker rest forest 97, worker gather forest 96, worker rest wood 68, worker gather wood 66, worker rest quarry 46, worker gather quarry 45, worker rest saw 39, worker toCraft saw 38, worker craft saw 38, carrier haul log wood -> saw 31, carrier haul grain farm -> mill 30, worker rest waterhut 23. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 6 soldiers, 2 guards, 26 carriers; coal signs 7, iron signs 2.


Script: 1800 turns, 0.4 ms average, worst 17 ms, 0 over 0.3 s, 0 errors. Orders refused: none.
