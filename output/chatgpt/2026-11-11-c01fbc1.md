# Tournament: chatgpt

Game version 195. Written for: chatgpt not stated.

- chatgpt: hearthlands-ai-challenge, commit c01fbc1

Maps 20261030, 777, 4242, 31, each twice (sides swapped), up to 60 game minutes (1x). 33 s.

Each game ends with the script's own game log: what it may know (its own side, and what happened to it or what it saw). Times are game min:sec.

| Opponent | Won | Lost | Undecided |
|---|---|---|---|
| original game NPC | 0 | 0 | 8 |

## Games

Each row: buildings / military / land tiles / soldiers / people at the minute shown. First: game minute of the first smelter, smith, weaponsmith, barracks, tower, castle (- = never).

### Map 31: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 17/0/1024/10/20 | 31/6/3159/10/50 |
| 30 | 17/0/1024/10/20 | 64/9/5307/14/106 |
| 45 | 17/0/1024/10/20 | 72/17/10874/48/92 |
| 60 | 17/0/1024/10/20 | 80/23/15357/71/89 |
| first | - - - - - - | 8 8 22 23 28 35 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 13 14 23 34 48 58 67 71).

First army orders (game min:sec): 0:00 armyTarget spear=12; 0:00 armyTarget bow=12; 0:00 armyTarget sword=8; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 24 | 8 | 16 | 6 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 80 | 1024 | 2832 |
| 30 | 24 | 8 | 16 | 6 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 80 | 1024 | 2832 |
| 45 | 24 | 8 | 16 | 6 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 80 | 1024 | 2832 |
| 60 | 24 | 8 | 16 | 6 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 80 | 1024 | 2832 |

At the end: buildings (built+sites) wood 4, quarry 2, forest 2, farm 2, hq 1, saw 1, waterhut 1, mill 1, bakery 1, house 1, look 1.
People: worker 13, soldier 10, carrier 3, digger 2, builder 2; beds 10. Soldiers: sword 7, bow 3.

Goods produced in the game: log 52, stone 49, grain 46, plank 32, water 22, flour 22, bread 8.
Goods consumed in the game: stone 51, plank 48, log 32, grain 22, water 8, flour 8, axe 2, pick 2, shovel 2, scythe 2, saw 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (224 building-min): Log pile full, waiting for carriers 46%, Needs a worker with an axe 46%, Felling a tree 5%, Bringing a log to the pile 2%, Waiting for a free settler 1%
- quarry (114 building-min): Stone pile full, waiting for carriers 85%, Cutting stone 7%, Bringing stone to the pile 4%, Waiting for a free settler 3%, Worker picking up a pickaxe 0%
- saw (59 building-min): Output pile full, waiting for carriers 88%, Sawing planks 7%, Waiting for logs 4%, Stacking outside 1%, Worker picking up a saw 0%
- forest (112 building-min): No free ground to plant in range inside your border 79%, Planting a sapling 12%, Waiting for a free settler 8%, Worker picking up a shovel 0%, Idle 0%
- waterhut (58 building-min): Water pile full, waiting for carriers 83%, Waiting for a free settler 11%, Fetching water 3%, Bringing water to the pile 3%, Idle 0%
- farm (109 building-min): Grain pile full, waiting for carriers 86%, Waiting for a free settler 6%, Sowing a field 3%, Harvesting grain 2%, Bringing grain to the pile 1%
- mill (57 building-min): Output pile full, waiting for carriers 85%, Waiting for a free settler 9%, Waiting for grain 2%, Grinding flour 2%, Stacking outside 1%
- bakery (56 building-min): Output pile full, waiting for carriers 84%, Waiting for a free settler 8%, Waiting for flour 4%, Baking bread 3%, Waiting for flour and water 0%
- house (52 building-min): Idle 100%
- look (50 building-min): Scout on watch 100%, Working 0%

Building sites, time per state (site-min): Waiting for materials 7, Builders at work 4, Leveling the ground 3, Waiting for a digger 2, Waiting for a builder 2.

Build order (placed at min:sec, finished at): wood 0:02→0:27, quarry 0:04→0:44, saw 0:28→1:07, wood 0:46→1:22, forest 1:08→1:43, waterhut 1:22→2:03, farm 1:44→2:57, mill 2:04→3:20, bakery 2:58→4:14, quarry 3:20→5:00, wood 4:14→5:33, forest 5:00→5:55, farm 5:34→7:36, house 5:56→8:30, wood 7:38→8:50, look 8:34→9:35.

Orders given: place 16, armyTarget 3, armyReserve 1, armyList 1. None refused.

People changing jobs: carrier -> worker 9, new carrier 6, new worker 4.

People's orders (1187 in all, 1173 done): worker rest forest 107, worker rest farm 107, worker gather farm 105, worker gather forest 105, worker rest wood 54, worker gather wood 52, worker rest quarry 51, worker gather quarry 49, carrier haul log wood -> saw 36, worker rest saw 33, worker toCraft saw 32, worker craft saw 32, carrier haul grain farm -> mill 30, worker rest waterhut 23. None failed.


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 31: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 20/0/1028/10/30 | 31/6/2858/10/50 |
| 30 | 20/0/1028/10/30 | 66/12/5628/25/95 |
| 45 | 20/0/1028/10/30 | 78/19/10519/60/100 |
| 60 | 20/0/1028/10/30 | 87/27/16482/82/98 |
| first | - - - - - - | 11 12 13 16 27 35 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 15 25 45 54 60 66 73 82).

First army orders (game min:sec): 0:00 armyTarget spear=12; 0:00 armyTarget bow=12; 0:00 armyTarget sword=8; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 21 | 8 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 12 | 85 | 1028 | 3070 |
| 30 | 24 | 8 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 12 | 88 | 1028 | 3070 |
| 45 | 24 | 8 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 12 | 88 | 1028 | 3070 |
| 60 | 24 | 8 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 12 | 88 | 1028 | 3070 |

At the end: buildings (built+sites) wood 3, forest 3, quarry 2, fisher 2, farm 2, house 2, hq 1, saw 1, waterhut 1, mill 1, bakery 1, look 1.
People: worker 14, carrier 12, soldier 10, digger 2, builder 2; beds 20. Soldiers: sword 7, bow 3.

Goods produced in the game: log 62, stone 55, grain 46, plank 42, water 22, flour 22, fish 8, bread 8.
Goods consumed in the game: plank 58, stone 57, log 42, grain 22, water 8, flour 8, axe 2, pick 2, shovel 2, scythe 2, saw 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (173 building-min): Log pile full, waiting for carriers 54%, Needs a worker with an axe 29%, Felling a tree 8%, No grown trees in range inside your border 4%, Bringing a log to the pile 3%
- quarry (114 building-min): Stone pile full, waiting for carriers 85%, Cutting stone 8%, Bringing stone to the pile 4%, Waiting for a free settler 3%, Worker picking up a pickaxe 0%
- saw (59 building-min): Output pile full, waiting for carriers 79%, Waiting for logs 10%, Sawing planks 9%, Stacking outside 2%, Worker picking up a saw 0%
- forest (162 building-min): No free ground to plant in range inside your border 55%, Needs a worker with a shovel 30%, Planting a sapling 8%, Waiting for a free settler 6%, Worker picking up a shovel 0%
- fisher (110 building-min): Needs a worker with a fishing rod 46%, Fish pile full, waiting for carriers 46%, Waiting for a free settler 7%, Bringing a fish to the pile 0%, Fishing 0%
- waterhut (57 building-min): Water pile full, waiting for carriers 84%, Waiting for a free settler 11%, Bringing water to the pile 3%, Fetching water 2%, Idle 0%
- farm (109 building-min): Grain pile full, waiting for carriers 87%, Waiting for a free settler 7%, Sowing a field 3%, Harvesting grain 2%, Bringing grain to the pile 1%
- mill (57 building-min): Output pile full, waiting for carriers 84%, Waiting for a free settler 10%, Waiting for grain 2%, Grinding flour 2%, Stacking outside 1%
- bakery (56 building-min): Output pile full, waiting for carriers 82%, Waiting for a free settler 9%, Waiting for flour 6%, Baking bread 3%, Stacking outside 0%
- house (99 building-min): Idle 100%
- look (47 building-min): Scout on watch 100%, Scout on the way 0%, Working 0%

Building sites, time per state (site-min): Waiting for materials 5, Builders at work 5, Leveling the ground 4, Waiting for a digger 3, Waiting for a builder 2.

Build order (placed at min:sec, finished at): wood 0:02→0:21, quarry 0:04→0:39, saw 0:22→0:59, wood 0:40→1:14, forest 1:00→1:26, fisher 1:16→1:54, waterhut 1:26→2:32, farm 1:56→3:10, mill 2:34→3:28, bakery 3:10→4:10, quarry 4:26→5:03, wood 4:46→5:26, forest 5:04→5:50, farm 5:28→7:32, fisher 5:50→8:12, house 8:12→8:49, forest 8:14→10:34, house 11:40→12:21, look 12:10→12:47.

Orders given: place 19, armyTarget 3, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 16, carrier -> worker 10, new worker 4.

People's orders (1318 in all, 1303 done): worker rest forest 120, worker gather forest 118, worker rest farm 104, worker gather farm 102, worker rest wood 64, worker gather wood 62, worker rest quarry 57, worker gather quarry 55, carrier haul log wood -> saw 46, worker rest saw 43, worker toCraft saw 42, worker craft saw 42, carrier haul grain farm -> mill 30, worker rest waterhut 23. None failed.


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 20/0/1025/10/30 | 31/6/2477/10/50 |
| 30 | 20/0/1025/10/30 | 56/11/5034/20/70 |
| 45 | 20/0/1025/10/30 | 75/16/7857/51/99 |
| 60 | 20/0/1025/10/30 | 84/24/14140/71/99 |
| first | - - - - - - | 10 11 15 16 24 46 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 12 20 29 47 51 61 66 71).

First army orders (game min:sec): 0:00 armyTarget spear=12; 0:00 armyTarget bow=12; 0:00 armyTarget sword=8; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 24 | 8 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 12 | 88 | 1025 | 2562 |
| 30 | 24 | 8 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 12 | 88 | 1025 | 2562 |
| 45 | 24 | 8 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 12 | 88 | 1025 | 2562 |
| 60 | 24 | 8 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 12 | 88 | 1025 | 2562 |

At the end: buildings (built+sites) wood 4, quarry 2, forest 2, fisher 2, farm 2, house 2, hq 1, saw 1, waterhut 1, mill 1, bakery 1, look 1.
People: worker 14, carrier 12, soldier 10, digger 2, builder 2; beds 20. Soldiers: sword 7, bow 3.

Goods produced in the game: log 61, stone 56, grain 46, plank 41, water 22, flour 22, fish 8, bread 8.
Goods consumed in the game: stone 58, plank 57, log 41, grain 22, water 8, flour 8, axe 2, pick 2, shovel 2, scythe 2, saw 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (222 building-min): Needs a worker with an axe 45%, Log pile full, waiting for carriers 45%, Felling a tree 6%, Bringing a log to the pile 2%, Waiting for a free settler 2%
- quarry (113 building-min): Stone pile full, waiting for carriers 87%, Cutting stone 7%, Bringing stone to the pile 3%, Waiting for a free settler 3%, Worker picking up a pickaxe 0%
- saw (59 building-min): Output pile full, waiting for carriers 81%, Sawing planks 9%, Waiting for logs 8%, Stacking outside 2%, Fetching from the pile 0%
- forest (112 building-min): No free ground to plant in range inside your border 83%, Waiting for a free settler 8%, Planting a sapling 8%, Worker picking up a shovel 0%, Idle 0%
- fisher (108 building-min): Fish pile full, waiting for carriers 47%, Needs a worker with a fishing rod 46%, Waiting for a free settler 7%, Fishing 0%, Worker picking up a fishing rod 0%
- waterhut (57 building-min): Water pile full, waiting for carriers 79%, Waiting for a free settler 10%, Bringing water to the pile 5%, Fetching water 5%, Worker on the way 0%
- farm (108 building-min): Grain pile full, waiting for carriers 88%, Waiting for a free settler 5%, Sowing a field 3%, Harvesting grain 2%, Bringing grain to the pile 1%
- mill (56 building-min): Output pile full, waiting for carriers 85%, Waiting for a free settler 8%, Waiting for grain 3%, Grinding flour 2%, Stacking outside 1%
- bakery (55 building-min): Output pile full, waiting for carriers 85%, Waiting for a free settler 7%, Baking bread 3%, Waiting for flour 3%, Waiting for flour and water 1%
- house (100 building-min): Idle 100%
- look (50 building-min): Scout on watch 100%, Idle 0%, Scout on the way 0%, Working 0%

Building sites, time per state (site-min): Waiting for materials 5, Builders at work 5, Leveling the ground 4, Waiting for a digger 3, Waiting for a builder 2.

Build order (placed at min:sec, finished at): wood 0:02→0:31, quarry 0:04→0:50, saw 0:32→1:10, wood 0:50→1:26, forest 1:12→1:46, fisher 1:26→2:15, waterhut 1:48→2:51, farm 2:16→3:58, mill 2:52→4:25, bakery 3:58→5:09, quarry 5:18→5:53, wood 5:28→6:19, forest 5:56→6:34, farm 6:24→8:14, house 6:42→8:47, wood 8:52→9:19, look 8:54→9:40, fisher 9:30→10:14, house 9:58→10:45.

Orders given: place 19, armyTarget 3, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 17, carrier -> worker 11, new worker 3.

People's orders (1230 in all, 1215 done): worker rest farm 102, worker gather farm 100, worker rest forest 77, worker gather forest 75, worker rest wood 63, worker gather wood 61, worker rest quarry 58, worker gather quarry 56, carrier haul log wood -> saw 45, worker rest saw 42, worker toCraft saw 41, worker craft saw 41, carrier haul grain farm -> mill 30, worker rest mill 23. None failed.


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 15/0/1012/10/10 | 31/6/2640/10/50 |
| 30 | 15/0/1012/10/10 | 53/6/3374/10/70 |
| 45 | 15/0/1012/10/10 | 68/13/8630/36/104 |
| 60 | 15/0/1012/10/10 | 76/20/13954/62/98 |
| first | - - - - - - | 10 11 13 15 36 41 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 10 12 21 36 46 54 62).

First army orders (game min:sec): 0:00 armyTarget spear=12; 0:00 armyTarget bow=12; 0:00 armyTarget sword=8; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 0 | 2 | 11 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 8 | 1012 | 1808 |
| 30 | 0 | 2 | 11 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 8 | 1012 | 1808 |
| 45 | 0 | 2 | 11 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 8 | 1012 | 1808 |
| 60 | 0 | 2 | 11 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 8 | 1012 | 1808 |

At the end: buildings (built+sites) wood 3, quarry 2, forest 2, farm 2, hq 1, saw 1, fisher 1, waterhut 1, mill 1, bakery 1, house 0+1.
People: soldier 10, worker 3, digger 2, builder 2, carrier 2, geologist 1; beds 0. Soldiers: sword 7, bow 3.

Goods produced in the game: stone 37, plank 22, log 18.
Goods consumed in the game: plank 44, stone 44, log 22, pick 2, axe 1, saw 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (172 building-min): Waiting for a free settler 65%, No grown trees in range inside your border 31%, Felling a tree 2%, Bringing a log to the pile 1%, Log pile full, waiting for carriers 0%
- quarry (114 building-min): Waiting for a free settler 48%, Stone pile full, waiting for carriers 46%, Cutting stone 5%, Bringing stone to the pile 2%, Worker picking up a pickaxe 0%
- saw (59 building-min): Waiting for logs 94%, Sawing planks 5%, Stacking outside 1%, Worker picking up a saw 0%, Fetching from the pile 0%
- forest (112 building-min): Waiting for a free settler 100%, Idle 0%
- fisher (58 building-min): Waiting for a free settler 100%, Idle 0%
- waterhut (57 building-min): Waiting for a free settler 100%, Idle 0%
- farm (108 building-min): Waiting for a free settler 100%, Idle 0%
- mill (56 building-min): Waiting for a free settler 100%
- bakery (55 building-min): Waiting for a free settler 100%, Idle 0%

Building sites, time per state (site-min): Waiting for materials 56, Builders at work 4, Leveling the ground 3, Waiting for a digger 2, Waiting for a builder 1.

Build order (placed at min:sec, finished at): wood 0:02→0:41, quarry 0:04→0:59, saw 0:42→1:19, wood 1:00→1:34, forest 1:20→1:46, fisher 1:34→2:08, waterhut 1:48→2:43, farm 2:08→3:33, mill 2:44→3:56, bakery 3:34→4:50, quarry 4:56→5:30, wood 4:58→5:55, forest 5:30→6:36, farm 6:44→8:51, house 6:46→never.

Orders given: place 15, armyTarget 3, profession 1, armyReserve 1, armyList 1. None refused.

People changing jobs: carrier -> worker 3.

People's orders (400 in all, 396 done): worker rest quarry 38, worker gather quarry 37, worker rest saw 23, worker toCraft saw 22, worker craft saw 22, builder build farm 22, worker rest wood 19, worker gather wood 18, carrier haul log wood -> saw 18, carrier haul stone quarry -> farm 12, builder build waterhut 10, builder build wood 8, digger dig wood 6, builder build forest 6. None failed.

Warnings: site-stuck 5. Last: 39:40 site-stuck: Small house site has not moved for 30 min (Waiting for materials) | 49:50 site-stuck: Small house site has not moved for 41 min (Waiting for materials) | 60:00 site-stuck: Small house site has not moved for 51 min (Waiting for materials)


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 18/0/1041/10/20 | 31/6/2822/10/50 |
| 30 | 18/0/1041/10/20 | 54/6/3654/10/70 |
| 45 | 18/0/1041/10/20 | 67/11/7696/45/95 |
| 60 | 18/0/1041/10/20 | 73/17/12142/65/95 |
| first | - - - - - - | 9 10 23 24 33 36 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 10 12 22 45 55 60 65).

First army orders (game min:sec): 0:00 armyTarget spear=12; 0:00 armyTarget bow=12; 0:00 armyTarget sword=8; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 22 | 8 | 16 | 14 | 8 | 0 | 14 | 21 | 11 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 83 | 1041 | 2424 |
| 30 | 24 | 8 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 88 | 1041 | 2424 |
| 45 | 24 | 8 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 88 | 1041 | 2424 |
| 60 | 24 | 8 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 88 | 1041 | 2424 |

At the end: buildings (built+sites) wood 3, forest 3, quarry 2, farm 2, hq 1, saw 1, fisher 1, waterhut 1, mill 1, bakery 1, house 1, look 1.
People: worker 14, soldier 10, digger 2, builder 2, carrier 2; beds 10. Soldiers: sword 7, bow 3.

Goods produced in the game: log 56, stone 50, grain 46, plank 36, water 22, flour 22, fish 8, bread 8.
Goods consumed in the game: plank 52, stone 52, log 36, grain 22, water 8, flour 8, axe 2, pick 2, shovel 2, scythe 2, saw 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (172 building-min): Log pile full, waiting for carriers 53%, Waiting for a free settler 31%, Felling a tree 7%, No grown trees in range inside your border 5%, Bringing a log to the pile 3%
- quarry (114 building-min): Stone pile full, waiting for carriers 86%, Cutting stone 7%, Bringing stone to the pile 4%, Waiting for a free settler 3%, Worker picking up a pickaxe 0%
- saw (59 building-min): Output pile full, waiting for carriers 82%, Waiting for logs 8%, Sawing planks 8%, Stacking outside 2%, Worker picking up a saw 0%
- forest (163 building-min): No free ground to plant in range inside your border 54%, Waiting for a free settler 37%, Planting a sapling 8%, Needs a worker with a shovel 1%, Worker picking up a shovel 0%
- fisher (58 building-min): Fish pile full, waiting for carriers 87%, Waiting for a free settler 11%, Bringing a fish to the pile 1%, Fishing 1%, Worker picking up a fishing rod 0%
- waterhut (57 building-min): Water pile full, waiting for carriers 86%, Waiting for a free settler 11%, Fetching water 2%, Bringing water to the pile 1%, Worker on the way 0%
- farm (108 building-min): Grain pile full, waiting for carriers 88%, Waiting for a free settler 5%, Sowing a field 3%, Harvesting grain 2%, Bringing grain to the pile 1%
- mill (56 building-min): Output pile full, waiting for carriers 85%, Waiting for a free settler 9%, Grinding flour 2%, Waiting for grain 2%, Stacking outside 1%
- bakery (55 building-min): Output pile full, waiting for carriers 82%, Waiting for a free settler 8%, Waiting for flour 6%, Baking bread 3%, Waiting for flour and water 1%
- house (51 building-min): Idle 100%
- look (50 building-min): Scout on watch 99%, Idle 0%, Scout on the way 0%, Working 0%

Building sites, time per state (site-min): Builders at work 4, Waiting for materials 4, Leveling the ground 4, Waiting for a digger 2, Waiting for a builder 2.

Build order (placed at min:sec, finished at): wood 0:02→0:31, quarry 0:04→0:48, saw 0:32→1:10, wood 0:50→1:22, forest 1:10→1:46, fisher 1:22→2:05, waterhut 1:48→2:31, farm 2:06→3:46, mill 2:32→3:38, bakery 3:38→4:38, quarry 4:50→5:22, wood 4:52→6:05, forest 5:22→6:22, farm 6:18→7:58, house 7:14→8:42, forest 7:58→8:54, look 8:44→9:45.

Orders given: place 17, armyTarget 3, armyReserve 1, armyList 1. None refused.

People changing jobs: carrier -> worker 9, new worker 5, new carrier 5.

People's orders (1219 in all, 1204 done): worker rest forest 107, worker gather forest 105, worker rest farm 101, worker gather farm 99, worker rest wood 58, worker gather wood 56, worker rest quarry 52, worker gather quarry 50, carrier haul log wood -> saw 40, worker rest saw 37, worker toCraft saw 36, worker craft saw 36, carrier haul grain farm -> mill 30, worker rest waterhut 23. None failed.


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 19/0/1042/10/30 | 32/6/2893/10/50 |
| 30 | 19/0/1042/10/30 | 60/9/5893/25/85 |
| 45 | 19/0/1042/10/30 | 73/17/12535/61/89 |
| 60 | 19/0/1042/10/30 | 81/24/17863/79/91 |
| first | - - - - - - | 7 8 9 11 28 33 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 25 48 54 61 67 75 79).

First army orders (game min:sec): 0:00 armyTarget spear=12; 0:00 armyTarget bow=12; 0:00 armyTarget sword=8; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 24 | 8 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 11 | 87 | 1042 | 2678 |
| 30 | 24 | 8 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 11 | 88 | 1042 | 2678 |
| 45 | 24 | 8 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 11 | 88 | 1042 | 2678 |
| 60 | 24 | 8 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 11 | 88 | 1042 | 2678 |

At the end: buildings (built+sites) wood 3, quarry 2, forest 2, fisher 2, farm 2, house 2, hq 1, saw 1, waterhut 1, mill 1, bakery 1, look 1.
People: worker 14, carrier 11, soldier 10, digger 2, builder 2, geologist 1; beds 20. Soldiers: sword 7, bow 3.

Goods produced in the game: log 59, stone 54, grain 46, plank 39, water 22, flour 22, fish 8, bread 8.
Goods consumed in the game: stone 56, plank 55, log 39, grain 22, water 8, flour 8, pick 3, axe 2, shovel 2, scythe 2, saw 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (172 building-min): Log pile full, waiting for carriers 53%, Needs a worker with an axe 28%, Waiting for a free settler 8%, Felling a tree 8%, Bringing a log to the pile 3%
- quarry (114 building-min): Stone pile full, waiting for carriers 85%, Cutting stone 8%, Waiting for a free settler 4%, Bringing stone to the pile 3%, Worker picking up a pickaxe 0%
- saw (59 building-min): Output pile full, waiting for carriers 80%, Waiting for logs 9%, Sawing planks 8%, Stacking outside 2%, Fetching from the pile 0%
- forest (112 building-min): No free ground to plant in range inside your border 83%, Waiting for a free settler 9%, Planting a sapling 7%, Worker picking up a shovel 0%, Idle 0%
- fisher (109 building-min): Fish pile full, waiting for carriers 46%, Needs a worker with a fishing rod 45%, Waiting for a free settler 9%, Fishing 0%, Bringing a fish to the pile 0%
- waterhut (57 building-min): Water pile full, waiting for carriers 83%, Waiting for a free settler 11%, Bringing water to the pile 3%, Fetching water 3%, Worker on the way 0%
- farm (109 building-min): Grain pile full, waiting for carriers 86%, Waiting for a free settler 7%, Sowing a field 3%, Harvesting grain 2%, Bringing grain to the pile 1%
- mill (56 building-min): Output pile full, waiting for carriers 83%, Waiting for a free settler 10%, Waiting for grain 4%, Grinding flour 2%, Stacking outside 1%
- bakery (56 building-min): Output pile full, waiting for carriers 83%, Waiting for a free settler 9%, Waiting for flour 4%, Baking bread 3%, Waiting for flour and water 1%
- house (100 building-min): Idle 100%
- look (50 building-min): Scout on watch 97%, Waiting for a free settler 3%, Scout on the way 0%, Idle 0%, Working 0%

Building sites, time per state (site-min): Builders at work 5, Leveling the ground 4, Waiting for a digger 3, Waiting for a builder 2, Waiting for materials 2.

Build order (placed at min:sec, finished at): wood 0:02→0:37, quarry 0:04→0:54, saw 0:38→1:14, wood 0:54→1:31, forest 1:14→1:54, fisher 1:32→2:18, waterhut 1:54→2:39, farm 2:20→3:27, mill 2:40→3:49, bakery 3:28→4:27, quarry 4:34→5:10, wood 4:36→5:38, forest 5:12→6:05, farm 5:40→7:44, fisher 7:46→8:44, house 7:48→9:06, look 9:18→9:53, house 10:38→11:23.

Orders given: place 18, armyTarget 3, profession 1, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 15, carrier -> worker 9, new worker 5.

People's orders (1191 in all, 1176 done): worker rest farm 104, worker gather farm 102, worker rest forest 73, worker gather forest 71, worker rest wood 61, worker gather wood 59, worker rest quarry 56, worker gather quarry 54, carrier haul log wood -> saw 43, worker rest saw 40, worker toCraft saw 39, worker craft saw 39, carrier haul grain farm -> mill 30, worker rest mill 23. None failed.


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 18/0/1034/10/20 | 24/6/2773/10/40 |
| 30 | 18/0/1034/10/20 | 27/6/3175/10/50 |
| 45 | 18/0/1034/10/20 | 30/6/3594/10/50 |
| 60 | 18/0/1034/10/20 | 55/13/6915/29/71 |
| first | - - - - - - | 7 9 51 52 - - |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 10 10 10 10 10 22 29).

First army orders (game min:sec): 0:00 armyTarget spear=12; 0:00 armyTarget bow=12; 0:00 armyTarget sword=8; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 27 | 8 | 16 | 14 | 7 | 0 | 12 | 23 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 85 | 1034 | 2881 |
| 30 | 27 | 8 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 88 | 1034 | 2881 |
| 45 | 27 | 8 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 88 | 1034 | 2881 |
| 60 | 27 | 8 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 88 | 1034 | 2881 |

At the end: buildings (built+sites) wood 3, quarry 2, forest 2, fisher 2, farm 2, hq 1, saw 1, waterhut 1, mill 1, bakery 1, house 1, look 1.
People: worker 14, soldier 10, digger 2, builder 2, carrier 2; beds 10. Soldiers: sword 7, bow 3.

Goods produced in the game: log 59, stone 51, grain 46, plank 36, water 22, flour 22, fish 8, bread 8.
Goods consumed in the game: stone 53, plank 52, log 36, grain 22, water 8, flour 8, axe 2, pick 2, shovel 2, scythe 2, saw 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (171 building-min): Log pile full, waiting for carriers 59%, Waiting for a free settler 31%, Felling a tree 8%, Bringing a log to the pile 3%, Needs a worker with an axe 0%
- quarry (113 building-min): Stone pile full, waiting for carriers 83%, Cutting stone 8%, Bringing stone to the pile 5%, Waiting for a free settler 4%, Worker picking up a pickaxe 0%
- saw (59 building-min): Output pile full, waiting for carriers 84%, Sawing planks 8%, Waiting for logs 6%, Stacking outside 2%, Worker picking up a saw 0%
- forest (111 building-min): No free ground to plant in range inside your border 80%, Waiting for a free settler 10%, Planting a sapling 9%, Worker picking up a shovel 0%, Idle 0%
- fisher (110 building-min): Waiting for a free settler 54%, Fish pile full, waiting for carriers 44%, Needs a worker with a fishing rod 1%, Fishing 0%, Bringing a fish to the pile 0%
- waterhut (57 building-min): Water pile full, waiting for carriers 80%, Waiting for a free settler 13%, Fetching water 3%, Bringing water to the pile 3%, Worker on the way 0%
- farm (107 building-min): Grain pile full, waiting for carriers 85%, Waiting for a free settler 7%, Sowing a field 4%, Harvesting grain 2%, Bringing grain to the pile 1%
- mill (56 building-min): Output pile full, waiting for carriers 83%, Waiting for a free settler 11%, Grinding flour 2%, Waiting for grain 2%, Stacking outside 1%
- bakery (55 building-min): Output pile full, waiting for carriers 82%, Waiting for a free settler 9%, Waiting for flour 4%, Baking bread 3%, Waiting for flour and water 1%
- house (50 building-min): Idle 100%
- look (49 building-min): Scout on watch 100%, Idle 0%, Scout on the way 0%, Working 0%

Building sites, time per state (site-min): Waiting for materials 5, Leveling the ground 4, Builders at work 4, Waiting for a digger 3, Waiting for a builder 2.

Build order (placed at min:sec, finished at): wood 0:02→0:36, quarry 0:04→1:01, saw 0:38→1:22, wood 1:02→1:35, forest 1:24→1:56, fisher 1:36→2:11, waterhut 1:56→2:55, farm 2:12→3:51, mill 2:56→4:19, bakery 3:52→5:21, quarry 4:54→6:23, wood 5:54→7:02, forest 6:24→7:29, fisher 7:04→8:12, farm 8:12→9:25, house 9:36→10:18, look 9:40→11:07.

Orders given: place 17, armyTarget 3, armyReserve 1, armyList 1. None refused.

People changing jobs: carrier -> worker 10, new carrier 6, new worker 4.

People's orders (1194 in all, 1179 done): worker rest farm 110, worker gather farm 108, worker rest forest 73, worker gather forest 71, worker rest wood 61, worker gather wood 59, worker rest quarry 53, worker gather quarry 51, carrier haul log wood -> saw 43, worker rest saw 37, worker toCraft saw 36, worker craft saw 36, carrier haul grain farm -> mill 30, worker rest waterhut 23. None failed.


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 22/0/1046/10/40 | 25/6/3049/10/40 |
| 30 | 22/0/1046/10/40 | 54/8/4435/14/76 |
| 45 | 22/0/1046/10/40 | 68/13/9359/35/95 |
| 60 | 22/0/1046/10/40 | 76/20/14743/63/87 |
| first | - - - - - - | 14 15 16 25 29 36 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 14 23 23 35 45 60 63).

First army orders (game min:sec): 0:00 armyTarget spear=12; 0:00 armyTarget bow=12; 0:00 armyTarget sword=8; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 24 | 8 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 22 | 88 | 1046 | 3065 |
| 30 | 24 | 8 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 22 | 88 | 1046 | 3070 |
| 45 | 24 | 8 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 22 | 88 | 1046 | 3070 |
| 60 | 24 | 8 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 22 | 88 | 1046 | 3070 |

At the end: buildings (built+sites) wood 4, forest 3, house 3, quarry 2, farm 2, fisher 2, hq 1, saw 1, mill 1, bakery 1, waterhut 1, look 1.
People: carrier 22, worker 14, soldier 10, digger 2, builder 2; beds 30. Soldiers: sword 7, bow 3.

Goods produced in the game: log 67, stone 60, plank 47, grain 46, water 22, flour 22, fish 8, bread 8.
Goods consumed in the game: plank 63, stone 62, log 47, grain 22, water 8, flour 8, axe 2, pick 2, shovel 2, scythe 2, saw 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (223 building-min): Needs a worker with an axe 46%, Log pile full, waiting for carriers 43%, Felling a tree 7%, Bringing a log to the pile 3%, Waiting for a free settler 1%
- quarry (114 building-min): Stone pile full, waiting for carriers 85%, Cutting stone 8%, Bringing stone to the pile 3%, Waiting for a free settler 3%, Worker picking up a pickaxe 0%
- saw (59 building-min): Output pile full, waiting for carriers 81%, Sawing planks 10%, Waiting for logs 6%, Stacking outside 2%, Fetching from the pile 0%
- forest (161 building-min): No free ground to plant in range inside your border 56%, Needs a worker with a shovel 30%, Planting a sapling 9%, Waiting for a free settler 5%, Idle 0%
- farm (110 building-min): Grain pile full, waiting for carriers 88%, Waiting for a free settler 6%, Sowing a field 3%, Harvesting grain 2%, Bringing grain to the pile 1%
- fisher (108 building-min): Needs a worker with a fishing rod 47%, Fish pile full, waiting for carriers 47%, Waiting for a free settler 5%, Bringing a fish to the pile 1%, Fishing 0%
- mill (57 building-min): Output pile full, waiting for carriers 86%, Waiting for a free settler 9%, Grinding flour 2%, Waiting for grain 2%, Stacking outside 1%
- bakery (56 building-min): Output pile full, waiting for carriers 85%, Waiting for a free settler 8%, Baking bread 3%, Waiting for flour 2%, Waiting for flour and water 1%
- waterhut (56 building-min): Water pile full, waiting for carriers 89%, Waiting for a free settler 7%, Fetching water 2%, Bringing water to the pile 2%, Worker on the way 0%
- house (151 building-min): Idle 100%
- look (48 building-min): Scout on watch 100%, Working 0%

Building sites, time per state (site-min): Builders at work 5, Waiting for materials 5, Leveling the ground 4, Waiting for a digger 3, Waiting for a builder 2.

Build order (placed at min:sec, finished at): wood 0:02→0:28, quarry 0:04→0:45, saw 0:30→1:10, wood 0:46→1:36, forest 1:12→1:56, farm 1:38→2:28, fisher 1:56→2:51, mill 2:28→3:10, bakery 2:52→3:45, waterhut 3:12→4:25, quarry 3:46→5:06, wood 5:16→5:56, forest 5:34→6:12, farm 5:56→7:27, house 6:12→8:01, fisher 8:00→8:47, wood 8:10→9:11, house 8:48→9:48, house 10:18→11:00, forest 10:46→11:18, look 11:16→11:54.

Orders given: place 21, armyTarget 3, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 27, carrier -> worker 11, new worker 3.

People's orders (1342 in all, 1327 done): worker rest forest 110, worker gather forest 108, worker rest farm 102, worker gather farm 100, worker rest wood 69, worker gather wood 67, worker rest quarry 62, worker gather quarry 60, carrier haul log wood -> saw 51, worker rest saw 48, worker toCraft saw 47, worker craft saw 47, carrier haul grain farm -> mill 30, worker rest mill 23. None failed.


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.
