# Tournament: chatgpt

Game version 195. Written for: chatgpt not stated.

- chatgpt: hearthlands-ai-challenge, commit 15d503d

Maps 20261030, 777, 4242, 31, each twice (sides swapped), up to 60 game minutes (1x). 38 s.

Each game ends with the script's own game log: what it may know (its own side, and what happened to it or what it saw). Times are game min:sec.

| Opponent | Won | Lost | Undecided |
|---|---|---|---|
| original game NPC | 0 | 0 | 8 |

## Games

Each row: buildings / military / land tiles / soldiers / people at the minute shown. First: game minute of the first smelter, smith, weaponsmith, barracks, tower, castle (- = never).

### Map 31: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 17/0/1013/10/40 | 31/6/3159/10/50 |
| 30 | 17/0/1013/10/40 | 64/9/5307/14/106 |
| 45 | 17/0/1013/10/40 | 72/17/10874/48/92 |
| 60 | 17/0/1013/10/40 | 80/23/15357/71/89 |
| first | - - - - - - | 8 8 22 23 28 35 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 13 14 23 34 48 58 67 71).

First army orders (game min:sec): 0:00 armyTarget sword=12; 0:00 armyTarget spear=12; 0:00 armyTarget bow=16; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 32 | 16 | 16 | 6 | 8 | 0 | 14 | 32 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 72 | 1013 | 1808 |
| 30 | 32 | 16 | 16 | 6 | 8 | 0 | 14 | 32 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 72 | 1013 | 1809 |
| 45 | 32 | 16 | 16 | 6 | 8 | 0 | 14 | 32 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 72 | 1013 | 1809 |
| 60 | 32 | 16 | 16 | 6 | 8 | 0 | 14 | 32 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 72 | 1013 | 1809 |

At the end: buildings (built+sites) house 3, wood 3, forest 2, farm 2, hq 1, store 1, quarry 1, saw 1, waterhut 1, mill 1, bakery 1.
People: carrier 25, worker 11, soldier 10, digger 2, builder 2; beds 30. Soldiers: sword 7, bow 3.

Goods produced in the game: log 70, grain 54, stone 46, plank 42, water 22, flour 22, bread 8.
Goods consumed in the game: plank 50, stone 48, log 42, grain 22, water 8, flour 8, axe 2, shovel 2, scythe 2, pick 1, saw 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- store (60 building-min): Idle 100%
- house (174 building-min): Idle 100%
- wood (165 building-min): Log pile full, waiting for carriers 58%, Needs a worker with an axe 31%, Felling a tree 8%, Bringing a log to the pile 2%, Worker picking up an axe 0%
- quarry (58 building-min): Stone pile full, waiting for carriers 80%, Cutting stone 13%, Bringing stone to the pile 6%, Worker picking up a pickaxe 0%, Working 0%
- saw (56 building-min): Output pile full, waiting for carriers 88%, Sawing planks 9%, Stacking outside 2%, Worker picking up a saw 0%, Fetching from the pile 0%
- forest (107 building-min): No free ground to plant in range inside your border 82%, Planting a sapling 18%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- waterhut (55 building-min): Water pile full, waiting for carriers 96%, Fetching water 2%, Bringing water to the pile 1%, Working 0%
- farm (104 building-min): Grain pile full, waiting for carriers 92%, Sowing a field 4%, Harvesting grain 3%, Bringing grain to the pile 1%, Worker picking up a scythe 0%
- mill (53 building-min): Output pile full, waiting for carriers 94%, Waiting for grain 3%, Grinding flour 2%, Stacking outside 1%, Fetching from the pile 0%
- bakery (52 building-min): Output pile full, waiting for carriers 96%, Baking bread 3%, Stacking outside 0%, Waiting for flour 0%, Working 0%

Building sites, time per state (site-min): Builders at work 4, Leveling the ground 3, Waiting for a builder 2, Waiting for a digger 1.

Build order (placed at min:sec, finished at): store 0:02→0:25, house 0:26→0:52, wood 0:52→1:14, house 1:16→1:48, quarry 1:50→2:17, house 2:18→2:53, saw 2:54→3:34, wood 3:34→4:09, forest 4:10→4:45, waterhut 4:46→5:27, farm 5:28→6:17, mill 6:18→6:57, bakery 6:58→7:50, forest 7:50→8:23, wood 8:24→9:12, farm 9:14→10:10.

Orders given: place 16, storeSlot 4, armyTarget 3, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 30, carrier -> worker 11.

People's orders (1461 in all, 1449 done): worker rest forest 152, worker gather forest 150, worker rest farm 112, worker gather farm 110, worker rest wood 72, worker gather wood 70, worker rest quarry 47, worker gather quarry 46, carrier haul log wood -> store 45, worker rest saw 43, worker toCraft saw 42, worker craft saw 42, carrier haul log store -> saw 41, carrier haul stone quarry -> store 36. None failed.


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 31: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 18/0/1019/10/40 | 31/6/2862/10/50 |
| 30 | 18/0/1019/10/40 | 65/11/6565/20/90 |
| 45 | 18/0/1019/10/40 | 73/17/10579/55/95 |
| 60 | 18/0/1019/10/40 | 82/22/15199/72/118 |
| first | - - - - - - | 11 12 13 15 25 28 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 11 19 20 46 50 55 60 68 72).

First army orders (game min:sec): 0:00 armyTarget sword=12; 0:00 armyTarget spear=12; 0:00 armyTarget bow=16; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 29 | 16 | 16 | 14 | 8 | 0 | 14 | 32 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 24 | 77 | 1019 | 1810 |
| 30 | 32 | 16 | 16 | 14 | 8 | 0 | 14 | 32 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 24 | 80 | 1019 | 1810 |
| 45 | 32 | 16 | 16 | 14 | 8 | 0 | 14 | 32 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 24 | 80 | 1019 | 1810 |
| 60 | 32 | 16 | 16 | 14 | 8 | 0 | 14 | 32 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 24 | 80 | 1019 | 1810 |

At the end: buildings (built+sites) house 3, wood 3, forest 2, farm 2, hq 1, store 1, quarry 1, saw 1, fisher 1, waterhut 1, mill 1, bakery 1.
People: carrier 24, worker 12, soldier 10, digger 2, builder 2; beds 30. Soldiers: sword 7, bow 3.

Goods produced in the game: log 73, grain 54, stone 48, plank 45, water 22, flour 22, fish 8, bread 8.
Goods consumed in the game: plank 53, stone 50, log 45, grain 22, water 8, flour 8, axe 2, shovel 2, scythe 2, pick 1, saw 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- store (60 building-min): Idle 100%
- house (174 building-min): Idle 100%
- wood (165 building-min): Log pile full, waiting for carriers 54%, Needs a worker with an axe 31%, Felling a tree 10%, Bringing a log to the pile 4%, No grown trees in range inside your border 1%
- quarry (58 building-min): Stone pile full, waiting for carriers 79%, Cutting stone 14%, Bringing stone to the pile 7%, Worker picking up a pickaxe 0%, Working 0%
- saw (56 building-min): Output pile full, waiting for carriers 87%, Sawing planks 10%, Stacking outside 2%, Worker picking up a saw 0%, Fetching from the pile 0%
- forest (105 building-min): No free ground to plant in range inside your border 84%, Planting a sapling 15%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- fisher (54 building-min): Fish pile full, waiting for carriers 98%, Bringing a fish to the pile 1%, Fishing 1%, Worker picking up a fishing rod 0%
- waterhut (54 building-min): Water pile full, waiting for carriers 95%, Bringing water to the pile 3%, Fetching water 2%, Working 0%
- farm (101 building-min): Grain pile full, waiting for carriers 91%, Sowing a field 5%, Harvesting grain 3%, Bringing grain to the pile 1%, Worker picking up a scythe 1%
- mill (52 building-min): Output pile full, waiting for carriers 94%, Waiting for grain 3%, Grinding flour 2%, Stacking outside 1%, Fetching from the pile 0%
- bakery (51 building-min): Output pile full, waiting for carriers 96%, Baking bread 4%, Stacking outside 0%, Waiting for flour and water 0%, Waiting for water 0%

Building sites, time per state (site-min): Leveling the ground 4, Builders at work 4, Waiting for a digger 2, Waiting for a builder 1.

Build order (placed at min:sec, finished at): store 0:02→0:24, house 0:24→0:57, wood 0:58→1:19, house 1:20→1:56, quarry 1:58→2:29, house 2:30→3:07, saw 3:08→3:37, wood 3:38→4:08, forest 4:10→4:41, fisher 4:42→5:35, waterhut 5:36→6:22, farm 6:22→7:34, mill 7:34→8:22, bakery 8:22→9:11, wood 9:12→9:43, forest 9:44→10:11, farm 10:12→11:32.

Orders given: place 17, storeSlot 4, armyTarget 3, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 30, carrier -> worker 12.

People's orders (1511 in all, 1498 done): worker rest forest 148, worker gather forest 146, worker rest farm 122, worker gather farm 120, worker rest wood 75, worker gather wood 73, worker rest quarry 49, worker gather quarry 48, worker rest saw 46, worker toCraft saw 45, worker craft saw 45, carrier haul stone quarry -> store 39, carrier haul log wood -> store 34, carrier haul log store -> saw 30. None failed.


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 19/0/1039/10/40 | 33/6/2488/10/50 |
| 30 | 19/0/1039/10/40 | 55/8/3970/14/76 |
| 45 | 19/0/1039/10/40 | 72/16/9421/43/97 |
| 60 | 19/0/1039/10/40 | 81/24/15239/76/84 |
| first | - - - - - - | 10 11 14 15 24 38 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 11 14 18 32 43 56 70 76).

First army orders (game min:sec): 0:00 armyTarget sword=12; 0:00 armyTarget spear=12; 0:00 armyTarget bow=16; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 32 | 16 | 24 | 14 | 8 | 0 | 14 | 32 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 23 | 88 | 1039 | 1822 |
| 30 | 32 | 16 | 24 | 14 | 8 | 0 | 14 | 32 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 23 | 88 | 1039 | 1823 |
| 45 | 32 | 16 | 24 | 14 | 8 | 0 | 14 | 32 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 23 | 88 | 1039 | 1823 |
| 60 | 32 | 16 | 24 | 14 | 8 | 0 | 14 | 32 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 23 | 88 | 1039 | 1823 |

At the end: buildings (built+sites) house 3, wood 3, quarry 2, forest 2, farm 2, hq 1, store 1, saw 1, fisher 1, mill 1, waterhut 1, bakery 1.
People: carrier 23, worker 13, soldier 10, digger 2, builder 2; beds 30. Soldiers: sword 7, bow 3.

Goods produced in the game: log 75, stone 59, grain 54, plank 47, flour 22, water 22, fish 8, bread 8.
Goods consumed in the game: plank 55, stone 53, log 47, grain 22, water 8, flour 8, axe 2, pick 2, shovel 2, scythe 2, saw 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- store (60 building-min): Idle 100%
- house (174 building-min): Idle 100%
- wood (165 building-min): Log pile full, waiting for carriers 57%, Needs a worker with an axe 31%, Felling a tree 9%, Bringing a log to the pile 3%, Worker picking up an axe 0%
- quarry (107 building-min): Stone pile full, waiting for carriers 90%, Cutting stone 8%, Bringing stone to the pile 2%, Worker picking up a pickaxe 0%, Working 0%
- saw (56 building-min): Output pile full, waiting for carriers 87%, Sawing planks 11%, Stacking outside 2%, Fetching from the pile 0%, Worker picking up a saw 0%
- forest (105 building-min): No free ground to plant in range inside your border 85%, Planting a sapling 15%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- fisher (55 building-min): Fish pile full, waiting for carriers 98%, Fishing 1%, Worker picking up a fishing rod 0%, Bringing a fish to the pile 0%, Working 0%
- farm (102 building-min): Grain pile full, waiting for carriers 91%, Sowing a field 4%, Harvesting grain 3%, Bringing grain to the pile 1%, Worker picking up a scythe 0%
- mill (53 building-min): Output pile full, waiting for carriers 95%, Grinding flour 2%, Waiting for grain 1%, Stacking outside 1%, Fetching from the pile 0%
- waterhut (52 building-min): Water pile full, waiting for carriers 95%, Bringing water to the pile 3%, Fetching water 2%, Idle 0%, Working 0%
- bakery (51 building-min): Output pile full, waiting for carriers 96%, Baking bread 4%, Stacking outside 0%, Waiting for water 0%, Waiting for flour and water 0%

Building sites, time per state (site-min): Builders at work 4, Leveling the ground 4, Waiting for a builder 2, Waiting for a digger 2.

Build order (placed at min:sec, finished at): store 0:02→0:26, house 0:28→0:59, wood 1:00→1:28, house 1:28→2:07, quarry 2:08→2:46, house 2:46→3:16, saw 3:16→3:54, wood 3:54→4:13, forest 4:14→4:38, fisher 4:38→5:23, farm 5:24→6:29, mill 6:30→7:08, waterhut 7:10→8:13, bakery 8:14→9:06, wood 9:08→9:42, quarry 9:42→10:25, forest 10:26→10:53, farm 10:54→11:52.

Orders given: place 18, storeSlot 4, armyTarget 3, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 30, carrier -> worker 13.

People's orders (1489 in all, 1475 done): worker rest farm 120, worker rest forest 118, worker gather farm 118, worker gather forest 116, worker rest wood 77, worker gather wood 75, worker rest quarry 61, worker gather quarry 59, worker rest saw 48, worker toCraft saw 47, worker craft saw 47, carrier haul log wood -> store 45, carrier haul log store -> saw 41, carrier haul grain farm -> mill 30. None failed.


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 19/0/1029/10/40 | 31/6/2648/10/50 |
| 30 | 19/0/1029/10/40 | 51/6/3276/10/60 |
| 45 | 19/0/1029/10/40 | 66/12/7799/41/89 |
| 60 | 19/0/1029/10/40 | 74/20/14000/65/85 |
| first | - - - - - - | 10 11 16 17 41 43 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 10 10 19 41 52 61 65).

First army orders (game min:sec): 0:00 armyTarget sword=12; 0:00 armyTarget spear=12; 0:00 armyTarget bow=16; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 24 | 16 | 24 | 14 | 8 | 0 | 14 | 32 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 22 | 80 | 1029 | 1815 |
| 30 | 32 | 16 | 24 | 14 | 8 | 0 | 14 | 32 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 22 | 88 | 1029 | 1815 |
| 45 | 32 | 16 | 24 | 14 | 8 | 0 | 14 | 32 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 22 | 88 | 1029 | 1815 |
| 60 | 32 | 16 | 24 | 14 | 8 | 0 | 14 | 32 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 22 | 88 | 1029 | 1815 |

At the end: buildings (built+sites) house 3, wood 3, quarry 2, forest 2, farm 2, hq 1, store 1, saw 1, fisher 1, waterhut 1, mill 1, bakery 1.
People: carrier 22, worker 13, soldier 10, digger 2, builder 2, geologist 1; beds 30. Soldiers: sword 7, bow 3.

Goods produced in the game: log 75, stone 59, grain 54, plank 47, water 22, flour 22, fish 8, bread 8.
Goods consumed in the game: plank 55, stone 53, log 47, grain 22, water 8, flour 8, pick 3, axe 2, shovel 2, scythe 2, saw 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- store (60 building-min): Idle 100%
- house (174 building-min): Idle 100%
- wood (164 building-min): Log pile full, waiting for carriers 54%, Needs a worker with an axe 31%, Felling a tree 9%, Bringing a log to the pile 3%, No grown trees in range inside your border 3%
- quarry (107 building-min): Stone pile full, waiting for carriers 89%, Cutting stone 8%, Bringing stone to the pile 3%, Worker picking up a pickaxe 0%, Working 0%
- saw (56 building-min): Output pile full, waiting for carriers 86%, Sawing planks 11%, Stacking outside 2%, Waiting for logs 1%, Fetching from the pile 0%
- forest (104 building-min): No free ground to plant in range inside your border 83%, Planting a sapling 17%, Worker picking up a shovel 0%, Working 0%, Idle 0%
- fisher (55 building-min): Fish pile full, waiting for carriers 98%, Fishing 1%, Bringing a fish to the pile 1%, Worker picking up a fishing rod 0%, Idle 0%
- waterhut (54 building-min): Water pile full, waiting for carriers 89%, Bringing water to the pile 6%, Fetching water 5%, Idle 0%, Working 0%
- farm (101 building-min): Grain pile full, waiting for carriers 91%, Sowing a field 4%, Harvesting grain 3%, Bringing grain to the pile 1%, Worker picking up a scythe 0%
- mill (52 building-min): Output pile full, waiting for carriers 94%, Waiting for grain 2%, Grinding flour 2%, Stacking outside 1%, Fetching from the pile 0%
- bakery (51 building-min): Output pile full, waiting for carriers 96%, Baking bread 4%, Stacking outside 0%, Waiting for flour and water 0%, Waiting for water 0%

Building sites, time per state (site-min): Builders at work 4, Leveling the ground 4, Waiting for a digger 2, Waiting for a builder 2.

Build order (placed at min:sec, finished at): store 0:02→0:27, house 0:28→0:57, wood 0:58→1:39, house 1:40→2:10, quarry 2:12→2:49, house 2:50→3:21, saw 3:22→3:54, wood 3:54→4:20, forest 4:20→4:50, fisher 4:50→5:21, waterhut 5:22→6:16, farm 6:18→7:31, mill 7:32→8:11, bakery 8:12→8:49, wood 8:50→9:39, quarry 9:40→10:22, forest 10:22→10:50, farm 10:50→11:48.

Orders given: place 18, storeSlot 4, armyTarget 3, profession 1, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 30, carrier -> worker 13.

People's orders (1570 in all, 1556 done): worker rest forest 158, worker gather forest 156, worker rest farm 125, worker gather farm 123, worker rest wood 77, worker gather wood 75, worker rest quarry 61, worker gather quarry 59, worker rest saw 48, worker toCraft saw 47, worker craft saw 47, carrier haul stone quarry -> store 35, carrier haul log wood -> saw 33, carrier haul grain farm -> mill 30. None failed.


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 16/0/1019/10/40 | 33/6/2844/10/50 |
| 30 | 16/0/1019/10/40 | 64/11/5616/22/78 |
| 45 | 16/0/1019/10/40 | 73/17/10287/56/94 |
| 60 | 16/0/1019/10/40 | 81/24/15604/75/95 |
| first | - - - - - - | 9 10 13 14 23 36 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 12 22 43 49 56 66 70 75).

First army orders (game min:sec): 0:00 armyTarget sword=12; 0:00 armyTarget spear=12; 0:00 armyTarget bow=16; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 29 | 16 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 26 | 69 | 1019 | 1808 |
| 30 | 32 | 16 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 26 | 72 | 1019 | 1808 |
| 45 | 32 | 16 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 26 | 72 | 1019 | 1808 |
| 60 | 32 | 16 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 26 | 72 | 1019 | 1808 |

At the end: buildings (built+sites) house 3, wood 3, hq 1, store 1, quarry 1, saw 1, forest 1, fisher 1, waterhut 1, farm 1, mill 1, bakery 1.
People: carrier 26, soldier 10, worker 10, digger 2, builder 2; beds 30. Soldiers: sword 7, bow 3.

Goods produced in the game: log 64, grain 46, stone 41, plank 36, water 22, flour 22, fish 8, bread 8.
Goods consumed in the game: plank 44, stone 43, log 36, grain 22, water 8, flour 8, axe 2, pick 1, saw 1, shovel 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- store (60 building-min): Idle 100%
- house (174 building-min): Idle 100%
- wood (165 building-min): Log pile full, waiting for carriers 54%, Needs a worker with an axe 31%, Felling a tree 9%, No grown trees in range inside your border 3%, Bringing a log to the pile 3%
- quarry (58 building-min): Stone pile full, waiting for carriers 85%, Cutting stone 11%, Bringing stone to the pile 4%, Worker picking up a pickaxe 0%, Idle 0%
- saw (56 building-min): Output pile full, waiting for carriers 90%, Sawing planks 8%, Stacking outside 2%, Worker picking up a saw 0%, Fetching from the pile 0%
- forest (55 building-min): No free ground to plant in range inside your border 78%, Planting a sapling 21%, Worker picking up a shovel 0%, Working 0%
- fisher (55 building-min): Fish pile full, waiting for carriers 99%, Fishing 1%, Worker picking up a fishing rod 1%, Bringing a fish to the pile 0%
- waterhut (54 building-min): Water pile full, waiting for carriers 94%, Bringing water to the pile 3%, Fetching water 3%, Working 0%
- farm (53 building-min): Grain pile full, waiting for carriers 87%, Sowing a field 7%, Harvesting grain 4%, Bringing grain to the pile 2%, Worker picking up a scythe 0%
- mill (52 building-min): Output pile full, waiting for carriers 94%, Grinding flour 3%, Waiting for grain 2%, Stacking outside 1%, Fetching from the pile 0%
- bakery (51 building-min): Output pile full, waiting for carriers 95%, Baking bread 4%, Waiting for flour and water 0%, Stacking outside 0%, Fetching from the pile 0%

Building sites, time per state (site-min): Builders at work 4, Leveling the ground 3, Waiting for a builder 1, Waiting for a digger 1.

Build order (placed at min:sec, finished at): store 0:02→0:25, house 0:26→0:52, wood 0:52→1:24, house 1:24→1:58, quarry 1:58→2:21, house 2:22→2:53, saw 2:54→3:33, wood 3:34→4:00, forest 4:02→4:45, fisher 4:46→5:29, waterhut 5:30→6:05, farm 6:06→7:13, mill 7:14→7:51, bakery 7:52→8:46, wood 8:48→9:35.

Orders given: place 15, storeSlot 4, armyTarget 3, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 30, carrier -> worker 10.

People's orders (1249 in all, 1238 done): worker rest farm 99, worker gather farm 98, worker rest forest 96, worker gather forest 95, worker rest wood 66, worker gather wood 64, carrier haul log wood -> store 42, worker rest quarry 42, worker gather quarry 41, carrier haul log store -> saw 38, worker rest saw 37, worker toCraft saw 36, worker craft saw 36, carrier haul grain farm -> mill 30. None failed.


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 18/0/1026/10/40 | 34/6/2922/10/60 |
| 30 | 18/0/1026/10/40 | 68/14/6978/29/91 |
| 45 | 18/0/1026/10/40 | 77/20/12449/61/99 |
| 60 | 18/0/1026/10/40 | 85/27/17487/81/99 |
| first | - - - - - - | 7 8 9 12 21 33 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 15 17 29 40 50 61 69 76 81).

First army orders (game min:sec): 0:00 armyTarget sword=12; 0:00 armyTarget spear=12; 0:00 armyTarget bow=16; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 31 | 16 | 14 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 23 | 68 | 1026 | 1809 |
| 30 | 32 | 16 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 23 | 72 | 1026 | 1809 |
| 45 | 32 | 16 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 23 | 72 | 1026 | 1809 |
| 60 | 32 | 16 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 23 | 72 | 1026 | 1809 |

At the end: buildings (built+sites) house 3, wood 3, quarry 2, forest 2, hq 1, store 1, saw 1, fisher 1, waterhut 1, farm 1, mill 1, bakery 1.
People: carrier 23, worker 12, soldier 10, digger 2, builder 2, geologist 1; beds 30. Soldiers: sword 7, bow 3.

Goods produced in the game: log 69, grain 46, stone 45, plank 41, water 22, flour 22, fish 8, bread 8.
Goods consumed in the game: plank 49, stone 47, log 41, grain 22, water 8, flour 8, pick 3, axe 2, shovel 2, saw 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- store (60 building-min): Idle 100%
- house (174 building-min): Idle 100%
- wood (163 building-min): Log pile full, waiting for carriers 56%, Needs a worker with an axe 30%, Felling a tree 9%, Bringing a log to the pile 4%, No grown trees in range inside your border 1%
- quarry (106 building-min): No stone in range inside your border 44%, Stone pile full, waiting for carriers 42%, Cutting stone 8%, Bringing stone to the pile 5%, Worker picking up a pickaxe 0%
- saw (56 building-min): Output pile full, waiting for carriers 88%, Sawing planks 9%, Stacking outside 2%, Worker picking up a saw 0%, Fetching from the pile 0%
- forest (100 building-min): No free ground to plant in range inside your border 86%, Planting a sapling 14%, Worker picking up a shovel 0%, Working 0%, Idle 0%
- fisher (54 building-min): Fish pile full, waiting for carriers 98%, Fishing 1%, Bringing a fish to the pile 0%, Worker picking up a fishing rod 0%, Idle 0%
- waterhut (53 building-min): Water pile full, waiting for carriers 97%, Fetching water 2%, Bringing water to the pile 1%, Idle 0%, Working 0%
- farm (52 building-min): Grain pile full, waiting for carriers 86%, Sowing a field 7%, Harvesting grain 4%, Bringing grain to the pile 2%, Worker picking up a scythe 1%
- mill (52 building-min): Output pile full, waiting for carriers 94%, Waiting for grain 2%, Grinding flour 2%, Stacking outside 1%, Working 0%
- bakery (50 building-min): Output pile full, waiting for carriers 95%, Baking bread 4%, Stacking outside 0%, Waiting for water 0%, Idle 0%

Building sites, time per state (site-min): Leveling the ground 4, Builders at work 4, Waiting for a digger 2, Waiting for a builder 2, Waiting for materials 1.

Build order (placed at min:sec, finished at): store 0:02→0:25, house 0:26→0:57, wood 0:58→1:34, house 1:34→2:05, quarry 2:06→2:42, house 2:42→3:24, saw 3:24→4:02, wood 4:02→4:33, forest 4:34→5:05, fisher 5:06→5:59, waterhut 6:00→6:54, farm 6:54→7:38, mill 7:38→8:16, bakery 8:18→9:56, wood 9:58→10:45, quarry 10:46→11:37, forest 14:10→14:49.

Orders given: place 17, storeSlot 4, armyTarget 3, profession 1, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 30, carrier -> worker 12.

People's orders (1365 in all, 1352 done): worker rest forest 109, worker gather forest 107, worker rest farm 102, worker gather farm 101, worker rest wood 71, worker gather wood 69, carrier haul log wood -> store 53, carrier haul log store -> saw 49, worker rest quarry 47, worker gather quarry 45, worker rest saw 42, worker toCraft saw 41, worker craft saw 41, carrier haul grain farm -> mill 30. None failed.


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 17/0/1056/10/40 | 24/6/2773/10/40 |
| 30 | 17/0/1056/10/40 | 49/6/3737/20/79 |
| 45 | 17/0/1056/10/40 | 74/18/10198/56/94 |
| 60 | 17/0/1056/10/40 | 82/24/15669/71/99 |
| first | - - - - - - | 7 9 20 29 31 39 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 20 26 40 56 63 67 71).

First army orders (game min:sec): 0:00 armyTarget sword=12; 0:00 armyTarget spear=12; 0:00 armyTarget bow=16; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 32 | 16 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 72 | 1056 | 1841 |
| 30 | 32 | 16 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 72 | 1056 | 1845 |
| 45 | 32 | 16 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 72 | 1056 | 1845 |
| 60 | 32 | 16 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 72 | 1056 | 1845 |

At the end: buildings (built+sites) house 3, wood 3, forest 2, hq 1, store 1, quarry 1, saw 1, fisher 1, waterhut 1, farm 1, mill 1, bakery 1.
People: carrier 25, worker 11, soldier 10, digger 2, builder 2; beds 30. Soldiers: sword 7, bow 3.

Goods produced in the game: log 67, grain 46, stone 42, plank 39, water 22, flour 22, fish 8, bread 8.
Goods consumed in the game: plank 47, stone 44, log 39, grain 22, water 8, flour 8, axe 2, shovel 2, pick 1, saw 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- store (60 building-min): Idle 100%
- house (173 building-min): Idle 100%
- wood (162 building-min): Log pile full, waiting for carriers 58%, Needs a worker with an axe 30%, Felling a tree 9%, Bringing a log to the pile 3%, Worker picking up an axe 0%
- quarry (57 building-min): Stone pile full, waiting for carriers 84%, Cutting stone 11%, Bringing stone to the pile 4%, Worker picking up a pickaxe 0%, Idle 0%
- saw (56 building-min): Output pile full, waiting for carriers 89%, Sawing planks 9%, Stacking outside 2%, Fetching from the pile 0%, Worker picking up a saw 0%
- forest (103 building-min): No free ground to plant in range inside your border 86%, Planting a sapling 14%, Worker picking up a shovel 1%, Idle 0%, Working 0%
- fisher (54 building-min): Fish pile full, waiting for carriers 97%, Fishing 1%, Bringing a fish to the pile 1%, Worker picking up a fishing rod 0%, Idle 0%
- waterhut (53 building-min): Water pile full, waiting for carriers 97%, Fetching water 2%, Bringing water to the pile 1%, Working 0%
- farm (52 building-min): Grain pile full, waiting for carriers 87%, Sowing a field 6%, Harvesting grain 5%, Bringing grain to the pile 2%, Worker picking up a scythe 0%
- mill (51 building-min): Output pile full, waiting for carriers 95%, Grinding flour 2%, Stacking outside 1%, Waiting for grain 1%, Fetching from the pile 0%
- bakery (50 building-min): Output pile full, waiting for carriers 95%, Baking bread 4%, Stacking outside 0%, Waiting for flour and water 0%, Worker on the way 0%

Building sites, time per state (site-min): Leveling the ground 5, Builders at work 4, Waiting for a builder 2, Waiting for a digger 2.

Build order (placed at min:sec, finished at): store 0:02→0:26, house 0:28→1:00, wood 1:02→1:37, house 1:38→2:19, quarry 2:20→2:48, house 2:48→3:24, saw 3:26→4:09, wood 4:10→4:42, forest 4:44→5:20, fisher 5:22→6:22, waterhut 6:24→7:13, farm 7:14→8:15, mill 8:16→9:11, bakery 9:12→10:30, wood 10:30→11:20, forest 11:22→12:06.

Orders given: place 16, storeSlot 4, armyTarget 3, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 30, carrier -> worker 11.

People's orders (1308 in all, 1296 done): worker rest forest 105, worker gather forest 103, worker rest farm 102, worker gather farm 101, worker rest wood 69, worker gather wood 67, carrier haul log wood -> store 46, worker rest quarry 43, worker gather quarry 42, carrier haul log store -> saw 42, worker rest saw 40, worker toCraft saw 39, worker craft saw 39, carrier haul stone quarry -> store 31. None failed.


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 19/0/1036/10/40 | 25/6/3049/10/40 |
| 30 | 19/0/1036/10/40 | 57/7/3779/13/77 |
| 45 | 19/0/1036/10/40 | 72/15/9866/42/88 |
| 60 | 19/0/1036/10/40 | 81/22/14961/68/102 |
| first | - - - - - - | 14 15 16 25 32 39 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 13 23 31 42 51 63 68).

First army orders (game min:sec): 0:00 armyTarget sword=12; 0:00 armyTarget spear=12; 0:00 armyTarget bow=16; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 26 | 16 | 24 | 14 | 8 | 0 | 14 | 32 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 23 | 81 | 1036 | 1811 |
| 30 | 32 | 16 | 24 | 14 | 8 | 0 | 14 | 32 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 23 | 88 | 1036 | 1811 |
| 45 | 32 | 16 | 24 | 14 | 8 | 0 | 14 | 32 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 23 | 88 | 1036 | 1811 |
| 60 | 32 | 16 | 24 | 14 | 8 | 0 | 14 | 32 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 23 | 88 | 1036 | 1811 |

At the end: buildings (built+sites) house 3, wood 3, quarry 2, forest 2, farm 2, hq 1, store 1, saw 1, fisher 1, waterhut 1, mill 1, bakery 1.
People: carrier 23, worker 13, soldier 10, digger 2, builder 2; beds 30. Soldiers: sword 7, bow 3.

Goods produced in the game: log 75, stone 59, grain 54, plank 47, water 22, flour 22, fish 8, bread 8.
Goods consumed in the game: plank 55, stone 53, log 47, grain 22, water 8, flour 8, axe 2, pick 2, shovel 2, scythe 2, saw 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- store (60 building-min): Idle 100%
- house (174 building-min): Idle 100%
- wood (165 building-min): Log pile full, waiting for carriers 54%, Needs a worker with an axe 31%, Felling a tree 11%, Bringing a log to the pile 5%, No grown trees in range inside your border 1%
- quarry (107 building-min): Stone pile full, waiting for carriers 86%, Cutting stone 9%, Bringing stone to the pile 4%, Worker picking up a pickaxe 0%, Working 0%
- saw (56 building-min): Output pile full, waiting for carriers 87%, Sawing planks 11%, Stacking outside 2%, Fetching from the pile 0%, Worker picking up a saw 0%
- forest (104 building-min): No free ground to plant in range inside your border 86%, Planting a sapling 14%, Worker picking up a shovel 0%, Idle 0%
- fisher (54 building-min): Fish pile full, waiting for carriers 97%, Bringing a fish to the pile 1%, Fishing 1%, Worker picking up a fishing rod 0%, Working 0%
- waterhut (53 building-min): Water pile full, waiting for carriers 97%, Fetching water 2%, Bringing water to the pile 1%, Working 0%
- farm (100 building-min): Grain pile full, waiting for carriers 91%, Sowing a field 4%, Harvesting grain 3%, Bringing grain to the pile 1%, Worker picking up a scythe 0%
- mill (52 building-min): Output pile full, waiting for carriers 93%, Grinding flour 3%, Waiting for grain 3%, Stacking outside 1%, Fetching from the pile 0%
- bakery (51 building-min): Output pile full, waiting for carriers 95%, Baking bread 4%, Stacking outside 0%, Waiting for flour and water 0%, Waiting for water 0%

Building sites, time per state (site-min): Builders at work 4, Leveling the ground 4, Waiting for a digger 2, Waiting for a builder 2.

Build order (placed at min:sec, finished at): store 0:02→0:21, house 0:22→1:01, wood 1:02→1:31, house 1:32→2:09, quarry 2:10→2:34, house 2:34→3:12, saw 3:12→3:38, wood 3:40→4:24, forest 4:26→5:01, fisher 5:02→5:39, waterhut 5:40→6:36, farm 6:36→7:40, mill 7:40→8:13, bakery 8:14→8:59, wood 9:00→9:34, quarry 9:34→10:23, forest 10:24→11:07, farm 11:08→12:12.

Orders given: place 18, storeSlot 4, armyTarget 3, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 30, carrier -> worker 13.

People's orders (1522 in all, 1508 done): worker rest forest 125, worker rest farm 124, worker gather forest 123, worker gather farm 122, worker rest wood 77, worker gather wood 75, worker rest quarry 61, worker gather quarry 59, worker rest saw 48, worker toCraft saw 47, worker craft saw 47, carrier haul log wood -> store 43, carrier haul stone quarry -> store 41, carrier haul log store -> saw 39. None failed.


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.
