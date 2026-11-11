# Tournament: chatgpt

Game version 195. Written for: chatgpt not stated.

- chatgpt: hearthlands-ai-challenge, commit 714a5c1

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
| 15 | 25/4/2398/10/60 | 31/6/3159/10/50 |
| 30 | 33/6/2419/12/58 | 64/10/5373/16/94 |
| 45 | 33/6/2979/20/50 | 72/16/10250/48/102 |
| 60 | 33/6/2979/29/41 | 78/21/14238/69/101 |
| first | 17 - 18 18 13 - | 8 8 21 21 28 30 |

Soldiers every 5 min: 10 10 10 10 10 12 13 16 20 24 25 29 (original game NPC: 10 10 10 10 15 16 22 40 48 59 63 69).

First army orders (game min:sec): 0:00 armyTarget sword=12; 0:00 armyTarget spear=12; 0:00 armyTarget bow=16; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 21 | 17 | 11 | 10 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 28 | 41 | 2398 | 4386 |
| 30 | 48 | 32 | 17 | 4 | 12 | 0 | 14 | 48 | 14 | 4 | 10 | 14 | 0 | 0 | 0 | 0 | 0 | 34 | 76 | 2419 | 4386 |
| 45 | 48 | 32 | 17 | 12 | 12 | 0 | 14 | 48 | 14 | 5 | 14 | 14 | 0 | 0 | 0 | 0 | 0 | 29 | 88 | 2979 | 5422 |
| 60 | 48 | 32 | 17 | 11 | 11 | 0 | 14 | 47 | 14 | 5 | 13 | 14 | 0 | 0 | 0 | 1 | 0 | 13 | 84 | 2979 | 5422 |

At the end: buildings (built+sites) guard 5, house 5, store 3, wood 3, quarry 2, farm 2, hq 1, saw 1, forest 1, waterhut 1, mill 1, bakery 1, tower 1, fisher 1, ironmine 1, coalmine 1, smelter 1, weaponsmith 1, barracks 1.
People: soldier 22, carrier 20, worker 16, digger 2, builder 2, geologist 1; beds 50. Soldiers: sword 7, bow 10, spear 5.

Goods produced in the game: log 150, grain 142, fish 122, plank 106, stone 97, water 95, flour 95, bread 80, coal 59, ironore 47, iron 34, bow 7, sword 7, spear 6.
Goods consumed in the game: fish 117, log 106, plank 98, stone 98, grain 95, water 81, flour 81, bread 69, coal 54, ironore 34, iron 20, bow 7, sword 7, pick 5, spear 5, axe 2, scythe 2, hammer 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (243 building-min): Idle 81%, Waiting for a swordsman: train one at the barracks 18%, Soldiers on the way 0%, Waiting for a soldier 0%
- store (139 building-min): Idle 100%
- house (281 building-min): Idle 100%
- wood (165 building-min): Log pile full, waiting for carriers 42%, Needs a worker with an axe 30%, Felling a tree 20%, Bringing a log to the pile 8%, Worker picking up an axe 0%
- quarry (107 building-min): No stone in range inside your border 75%, Cutting stone 16%, Bringing stone to the pile 9%, Worker picking up a pickaxe 0%, Working 0%
- saw (57 building-min): Output pile full, waiting for carriers 71%, Sawing planks 23%, Stacking outside 5%, Fetching from the pile 1%, Worker picking up a saw 0%
- forest (56 building-min): No free ground to plant in range inside your border 56%, Planting a sapling 43%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- waterhut (56 building-min): Water pile full, waiting for carriers 85%, Fetching water 9%, Bringing water to the pile 7%, Idle 0%, Working 0%
- farm (100 building-min): Grain pile full, waiting for carriers 78%, Sowing a field 10%, Harvesting grain 7%, Bringing grain to the pile 4%, Worker picking up a scythe 1%
- mill (51 building-min): Output pile full, waiting for carriers 84%, Grinding flour 10%, Stacking outside 5%, Fetching from the pile 1%, Waiting for grain 0%
- bakery (50 building-min): Output pile full, waiting for carriers 59%, Baking bread 36%, Stacking outside 4%, Fetching from the pile 1%, Waiting for flour and water 0%
- tower (47 building-min): Waiting for a swordsman: train one at the barracks 54%, Idle 46%, Soldiers on the way 0%
- fisher (46 building-min): Fish pile full, waiting for carriers 45%, No fish in range inside your border 20%, Fishing 18%, Bringing a fish to the pile 15%, Worker picking up a fishing rod 1%
- ironmine (46 building-min): Deposit worn out: finding little iron ore 58%, Iron ore pile full, waiting for carriers 32%, Bringing iron ore out 3%, Deposit thinning: mining iron ore 2%, Came back empty-handed 2%
- coalmine (45 building-min): Deposit worn out: finding little coal 85%, Bringing coal out 4%, Deposit thinning: mining coal 4%, Mining coal 2%, Came back empty-handed 2%
- smelter (44 building-min): Output pile full, waiting for carriers 77%, Smelting iron 10%, Waiting for coal 7%, Waiting for coal and iron ore 2%, Stacking outside 2%
- weaponsmith (43 building-min): Waiting for coal 92%, Forging sword 2%, Forging bow 2%, Forging spear 2%, Stacking outside 1%
- barracks (42 building-min): Waiting for weapons from the weaponsmith 87%, Weapons on the way 13%, Training soldiers 0%

Building sites, time per state (site-min): Builders at work 8, Waiting for materials 8, Leveling the ground 7, Waiting for a builder 6, Waiting for a digger 5.

Build order (placed at min:sec, finished at): guard 0:02→0:46, store 0:04→1:02, house 0:46→1:20, wood 1:02→1:33, quarry 1:20→1:52, house 1:34→2:12, saw 1:54→2:34, wood 2:12→3:01, house 2:34→3:29, forest 3:02→3:45, waterhut 3:30→4:10, house 3:46→4:45, farm 4:12→6:15, guard 5:08→7:11, house 6:16→7:29, mill 7:12→8:39, bakery 7:30→9:36, wood 8:40→10:43, quarry 9:38→11:01, guard 10:44→11:55, tower 11:02→12:53, farm 11:56→13:28, fisher 13:10→13:49, ironmine 13:42→14:25, coalmine 14:38→15:19, smelter 14:42→16:03, guard 15:20→16:30, weaponsmith 16:04→17:02, barracks 16:30→17:34, store 19:00→19:34, store 19:36→20:15, guard 20:02→20:36.

Orders given: place 32, storeSlot 12, priority 6, armyTarget 3, sendUnit 2, profession 1, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 50, carrier -> soldier 19, carrier -> worker 16.

People's orders (4951 in all, 4920 done): worker rest farm 298, worker gather farm 296, worker rest forest 158, worker gather forest 157, worker mine ironmine 153, worker rest wood 152, worker gather wood 150, carrier haul grain farm -> store 124, worker rest fisher 123, worker gather fisher 122, worker mine coalmine 121, worker eat ironmine 117, carrier haul fish fisher -> ironmine 115, worker rest saw 107. None failed.


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 31: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 23/4/2355/10/60 | 31/6/2851/10/50 |
| 30 | 33/6/3003/26/44 | 70/12/5881/24/105 |
| 45 | 33/6/3003/36/34 | 78/18/10663/57/93 |
| 60 | 33/6/3003/41/29 | 86/25/16007/77/93 |
| first | 18 - 19 19 14 - | 11 12 13 17 19 33 |

Soldiers every 5 min: 10 10 10 10 20 26 32 36 36 38 39 41 (original game NPC: 10 10 10 12 18 24 47 51 57 64 69 77).

First army orders (game min:sec): 0:00 armyTarget sword=12; 0:00 armyTarget spear=12; 0:00 armyTarget bow=16; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 21 | 25 | 7 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 41 | 51 | 2355 | 4396 |
| 30 | 48 | 32 | 32 | 11 | 12 | 0 | 14 | 48 | 14 | 12 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 16 | 79 | 3003 | 5424 |
| 45 | 48 | 32 | 32 | 12 | 12 | 0 | 14 | 48 | 14 | 2 | 2 | 12 | 0 | 0 | 0 | 0 | 0 | 11 | 87 | 3003 | 5424 |
| 60 | 48 | 32 | 32 | 12 | 11 | 0 | 13 | 48 | 13 | 5 | 10 | 14 | 0 | 0 | 0 | 1 | 0 | 3 | 89 | 3003 | 5424 |

At the end: buildings (built+sites) guard 5, house 5, store 3, wood 3, quarry 2, farm 2, hq 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1, tower 1, ironmine 1, coalmine 1, smelter 1, weaponsmith 1, barracks 1.
People: soldier 34, worker 16, carrier 8, digger 2, builder 2, geologist 1; beds 50. Soldiers: sword 11, bow 14, spear 9.

Goods produced in the game: fish 175, log 150, grain 139, stone 112, plank 106, water 91, flour 91, coal 83, bread 77, ironore 56, iron 46, bow 11, sword 11, spear 10.
Goods consumed in the game: fish 169, log 106, plank 98, stone 98, grain 91, water 78, flour 78, coal 78, bread 66, ironore 46, iron 32, bow 11, sword 11, spear 9, pick 5, axe 2, scythe 2, hammer 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (242 building-min): Idle 95%, Waiting for a swordsman: train one at the barracks 4%, Soldiers on the way 0%, Waiting for a soldier 0%
- store (133 building-min): Idle 100%
- house (281 building-min): Idle 100%
- wood (165 building-min): Log pile full, waiting for carriers 42%, Needs a worker with an axe 30%, Felling a tree 20%, Bringing a log to the pile 8%, Worker picking up an axe 0%
- quarry (104 building-min): No stone in range inside your border 37%, Stone pile full, waiting for carriers 30%, Cutting stone 20%, Bringing stone to the pile 13%, Worker picking up a pickaxe 0%
- saw (58 building-min): Output pile full, waiting for carriers 71%, Sawing planks 23%, Stacking outside 5%, Fetching from the pile 1%, Worker picking up a saw 0%
- forest (57 building-min): No free ground to plant in range inside your border 59%, Planting a sapling 40%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- fisher (56 building-min): Fish pile full, waiting for carriers 64%, Bringing a fish to the pile 19%, Fishing 17%, Worker picking up a fishing rod 0%, Idle 0%
- waterhut (55 building-min): Water pile full, waiting for carriers 78%, Bringing water to the pile 11%, Fetching water 10%, Idle 0%, Working 0%
- farm (98 building-min): Grain pile full, waiting for carriers 79%, Sowing a field 10%, Harvesting grain 7%, Bringing grain to the pile 3%, Worker picking up a scythe 1%
- mill (51 building-min): Output pile full, waiting for carriers 85%, Grinding flour 10%, Stacking outside 5%, Fetching from the pile 1%, Waiting for grain 0%
- bakery (50 building-min): Output pile full, waiting for carriers 60%, Baking bread 35%, Stacking outside 4%, Fetching from the pile 1%, Waiting for flour and water 0%
- tower (47 building-min): Idle 79%, Waiting for a swordsman: train one at the barracks 21%, Waiting for a soldier 0%
- ironmine (45 building-min): Deposit worn out: finding little iron ore 86%, Deposit thinning: mining iron ore 3%, Bringing iron ore out 3%, Came back empty-handed 2%, Fetching food 2%
- coalmine (43 building-min): Deposit worn out: finding little coal 64%, Deposit thinning: mining coal 15%, Mining coal 11%, Bringing coal out 5%, Came back empty-handed 2%
- smelter (42 building-min): Waiting for iron ore 39%, Output pile full, waiting for carriers 32%, Smelting iron 14%, Waiting for coal and iron ore 7%, Waiting for coal 5%
- weaponsmith (42 building-min): Waiting for coal 60%, Waiting for iron 24%, Waiting for coal and iron 3%, Forging sword 3%, Forging bow 3%
- barracks (41 building-min): Waiting for weapons from the weaponsmith 82%, Weapons on the way 17%, Training soldiers 1%

Building sites, time per state (site-min): Waiting for materials 13, Builders at work 8, Leveling the ground 8, Waiting for a digger 5, Waiting for a builder 5.

Build order (placed at min:sec, finished at): guard 0:02→0:33, store 0:04→0:45, house 0:34→1:07, wood 0:46→1:20, quarry 1:08→1:35, house 1:20→1:54, saw 1:36→2:16, wood 1:54→2:28, house 2:16→3:02, forest 2:30→3:18, fisher 3:04→3:58, house 3:28→4:29, waterhut 4:00→5:18, farm 4:30→6:51, guard 5:20→7:55, house 6:52→8:15, mill 7:56→9:08, bakery 8:16→10:28, wood 9:10→11:07, guard 10:28→11:57, tower 11:08→13:10, quarry 11:58→14:00, farm 13:12→15:37, ironmine 14:22→15:28, guard 15:28→16:21, coalmine 15:38→16:38, smelter 16:22→17:34, weaponsmith 16:38→18:10, barracks 17:34→18:54, guard 20:02→20:58, store 22:02→22:37, store 22:40→23:17.

Orders given: place 32, storeSlot 12, priority 5, armyTarget 3, sendUnit 3, profession 1, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 50, carrier -> soldier 31, carrier -> worker 16.

People's orders (5412 in all, 5383 done): worker rest farm 295, worker gather farm 293, worker mine ironmine 212, worker rest forest 200, worker gather forest 199, worker rest fisher 176, worker gather fisher 175, worker eat ironmine 169, carrier haul fish fisher -> ironmine 167, worker rest wood 152, worker gather wood 150, worker mine coalmine 141, carrier haul grain farm -> store 121, worker rest quarry 114. None failed.


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 28/4/2546/10/60 | 31/6/2477/10/50 |
| 30 | 33/6/2567/14/56 | 59/13/4844/20/70 |
| 45 | 33/6/2987/29/41 | 73/16/7503/52/78 |
| 60 | 33/6/2987/37/33 | 81/23/12315/69/81 |
| first | 15 - 15 16 13 - | 10 11 15 16 45 44 |

Soldiers every 5 min: 10 10 10 11 13 14 18 24 29 31 34 37 (original game NPC: 10 10 10 11 13 20 26 46 52 60 65 69).

First army orders (game min:sec): 0:00 armyTarget sword=12; 0:00 armyTarget spear=12; 0:00 armyTarget bow=16; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 20 | 16 | 13 | 18 | 11 | 0 | 14 | 31 | 14 | 5 | 2 | 3 | 0 | 0 | 0 | 0 | 0 | 30 | 52 | 2546 | 4240 |
| 30 | 48 | 32 | 40 | 17 | 12 | 0 | 14 | 47 | 14 | 6 | 9 | 13 | 0 | 0 | 0 | 1 | 0 | 32 | 96 | 2567 | 4240 |
| 45 | 48 | 32 | 40 | 17 | 12 | 0 | 14 | 47 | 14 | 4 | 10 | 14 | 0 | 0 | 0 | 0 | 0 | 17 | 98 | 2987 | 4782 |
| 60 | 48 | 32 | 40 | 18 | 11 | 0 | 14 | 48 | 14 | 6 | 12 | 14 | 0 | 0 | 0 | 0 | 0 | 11 | 100 | 2987 | 4782 |

At the end: buildings (built+sites) guard 5, house 5, store 3, wood 3, quarry 2, farm 2, hq 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1, tower 1, coalmine 1, ironmine 1, smelter 1, weaponsmith 1, barracks 1.
People: soldier 30, worker 16, carrier 12, digger 2, builder 2, geologist 1; beds 50. Soldiers: sword 10, bow 12, spear 8.

Goods produced in the game: fish 186, log 150, grain 146, stone 120, plank 106, water 98, flour 98, bread 84, coal 74, ironore 53, iron 41, sword 10, bow 9, spear 8.
Goods consumed in the game: fish 174, log 106, plank 98, stone 98, grain 98, water 84, flour 84, bread 73, coal 68, ironore 41, iron 27, sword 10, bow 9, spear 8, pick 5, axe 2, scythe 2, hammer 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (245 building-min): Idle 86%, Waiting for a swordsman: train one at the barracks 13%, Soldiers on the way 0%, Waiting for a soldier 0%
- store (144 building-min): Idle 100%
- house (281 building-min): Idle 100%
- wood (166 building-min): Log pile full, waiting for carriers 46%, Needs a worker with an axe 30%, Felling a tree 18%, Bringing a log to the pile 6%, Worker picking up an axe 0%
- quarry (108 building-min): Stone pile full, waiting for carriers 74%, Cutting stone 18%, Bringing stone to the pile 8%, Worker picking up a pickaxe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 71%, Sawing planks 23%, Stacking outside 5%, Fetching from the pile 1%, Worker picking up a saw 0%
- forest (56 building-min): No free ground to plant in range inside your border 58%, Planting a sapling 41%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- fisher (56 building-min): Fish pile full, waiting for carriers 64%, Fishing 19%, Bringing a fish to the pile 17%, Worker picking up a fishing rod 0%, Idle 0%
- waterhut (54 building-min): Water pile full, waiting for carriers 86%, Fetching water 7%, Bringing water to the pile 7%, Working 0%
- farm (101 building-min): Grain pile full, waiting for carriers 77%, Sowing a field 11%, Harvesting grain 7%, Bringing grain to the pile 4%, Worker picking up a scythe 1%
- mill (51 building-min): Output pile full, waiting for carriers 83%, Grinding flour 11%, Stacking outside 5%, Fetching from the pile 1%, Waiting for grain 0%
- bakery (51 building-min): Output pile full, waiting for carriers 57%, Baking bread 38%, Stacking outside 4%, Fetching from the pile 1%, Waiting for water 0%
- tower (48 building-min): Idle 57%, Waiting for a swordsman: train one at the barracks 43%
- coalmine (47 building-min): Deposit worn out: finding little coal 79%, Deposit thinning: mining coal 10%, Bringing coal out 4%, Mining coal 3%, Came back empty-handed 2%
- ironmine (46 building-min): Deposit worn out: finding little iron ore 88%, Bringing iron ore out 3%, Came back empty-handed 2%, Fetching food 2%, Iron ore pile full, waiting for carriers 2%
- smelter (46 building-min): Output pile full, waiting for carriers 81%, Smelting iron 11%, Waiting for iron ore 4%, Stacking outside 2%, Worker picking up a hammer 1%
- weaponsmith (45 building-min): Waiting for coal 90%, Forging sword 3%, Forging bow 3%, Forging spear 2%, Stacking outside 1%
- barracks (45 building-min): Waiting for weapons from the weaponsmith 91%, Weapons on the way 8%, Training soldiers 1%, Idle 0%

Building sites, time per state (site-min): Builders at work 8, Leveling the ground 7, Waiting for materials 6, Waiting for a builder 5, Waiting for a digger 5.

Build order (placed at min:sec, finished at): guard 0:02→0:37, store 0:04→0:48, house 0:38→1:09, wood 0:48→1:24, quarry 1:10→1:42, house 1:24→2:02, saw 1:44→2:23, wood 2:02→2:38, house 2:24→3:17, forest 2:38→3:33, fisher 3:18→3:53, house 3:34→4:17, waterhut 4:04→5:38, farm 4:26→6:24, guard 5:38→7:27, house 6:24→7:49, mill 7:28→8:32, bakery 7:50→9:22, wood 8:32→10:04, quarry 9:24→10:25, guard 10:06→11:08, tower 10:26→12:10, farm 11:10→12:43, coalmine 12:10→13:01, ironmine 12:54→13:33, smelter 13:02→14:04, weaponsmith 13:34→14:42, barracks 14:06→15:12, guard 15:02→15:37, store 16:04→17:03, store 17:06→17:53, guard 20:02→20:39.

Orders given: place 32, storeSlot 12, priority 6, armyTarget 3, sendUnit 2, profession 1, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 50, carrier -> soldier 27, carrier -> worker 16.

People's orders (5529 in all, 5504 done): worker rest farm 305, worker gather farm 303, worker mine ironmine 215, worker rest forest 191, worker gather forest 190, worker rest fisher 186, worker gather fisher 186, carrier haul fish fisher -> ironmine 178, worker eat ironmine 174, worker rest wood 152, worker gather wood 150, worker mine coalmine 139, worker rest quarry 122, worker gather quarry 120. None failed.


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 25/4/2690/10/60 | 33/6/2641/10/50 |
| 30 | 28/6/2711/10/60 | 58/11/4815/23/77 |
| 45 | 28/6/2711/10/60 | 76/21/11099/56/94 |
| 60 | 28/6/2711/10/60 | 88/28/16453/80/110 |
| first | - - - - 13 - | 10 11 13 16 27 36 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 15 23 33 46 56 61 75 80).

First army orders (game min:sec): 0:00 armyTarget sword=12; 0:00 armyTarget spear=12; 0:00 armyTarget bow=16; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 0 | 17 | 26 | 14 | 8 | 0 | 14 | 39 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 42 | 57 | 2690 | 4878 |
| 30 | 43 | 32 | 40 | 14 | 8 | 0 | 14 | 48 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 43 | 83 | 2711 | 4878 |
| 45 | 48 | 32 | 40 | 14 | 8 | 0 | 14 | 48 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 43 | 88 | 2711 | 4878 |
| 60 | 48 | 32 | 40 | 14 | 8 | 0 | 14 | 48 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 43 | 88 | 2711 | 4878 |

At the end: buildings (built+sites) guard 5, house 5, store 3, wood 3, quarry 2, farm 2, hq 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1, tower 1.
People: carrier 43, worker 12, soldier 6, digger 2, builder 2, geologist 1; beds 50. Soldiers: sword 3, bow 3.

Goods produced in the game: log 129, stone 100, plank 85, grain 70, water 22, flour 22, fish 8, bread 8.
Goods consumed in the game: log 85, stone 78, plank 77, grain 22, water 8, flour 8, pick 3, axe 2, scythe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (244 building-min): Idle 66%, Waiting for a swordsman: train one at the barracks 34%, Soldiers on the way 0%, Waiting for a soldier 0%
- store (150 building-min): Idle 100%
- house (284 building-min): Idle 100%
- wood (167 building-min): Log pile full, waiting for carriers 33%, Needs a worker with an axe 30%, Felling a tree 17%, No grown trees in range inside your border 13%, Bringing a log to the pile 7%
- quarry (108 building-min): Stone pile full, waiting for carriers 79%, Cutting stone 14%, Bringing stone to the pile 6%, Worker picking up a pickaxe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 70%, Sawing planks 19%, Waiting for logs 6%, Stacking outside 4%, Fetching from the pile 1%
- forest (57 building-min): No free ground to plant in range inside your border 68%, Planting a sapling 32%, Worker picking up a shovel 0%, Working 0%
- fisher (56 building-min): Fish pile full, waiting for carriers 98%, Fishing 1%, Bringing a fish to the pile 1%, Worker picking up a fishing rod 0%, Idle 0%
- waterhut (55 building-min): Water pile full, waiting for carriers 93%, Bringing water to the pile 3%, Fetching water 3%, Working 0%
- farm (103 building-min): Grain pile full, waiting for carriers 89%, Sowing a field 5%, Harvesting grain 3%, Bringing grain to the pile 2%, Worker picking up a scythe 0%
- mill (52 building-min): Output pile full, waiting for carriers 96%, Grinding flour 2%, Stacking outside 1%, Waiting for grain 1%, Fetching from the pile 0%
- bakery (51 building-min): Output pile full, waiting for carriers 95%, Baking bread 4%, Stacking outside 0%, Waiting for flour and water 0%, Waiting for water 0%
- tower (47 building-min): Waiting for a swordsman: train one at the barracks 100%

Building sites, time per state (site-min): Builders at work 6, Leveling the ground 6, Waiting for materials 4, Waiting for a digger 4, Waiting for a builder 4.

Build order (placed at min:sec, finished at): guard 0:02→0:36, store 0:04→0:45, house 0:36→1:05, wood 0:46→1:29, quarry 1:06→1:46, house 1:30→2:07, saw 1:48→2:28, wood 2:08→2:41, house 2:28→3:03, forest 2:42→3:17, fisher 3:06→3:37, house 3:34→4:14, waterhut 4:02→4:55, house 4:30→5:24, farm 4:58→6:24, guard 6:00→7:20, mill 6:24→7:38, bakery 7:20→8:57, wood 7:40→9:16, quarry 8:58→10:08, farm 9:18→10:52, guard 10:08→11:14, tower 11:26→12:38, store 13:46→14:22, store 14:24→15:16, guard 15:02→16:23, guard 20:02→20:48.

Orders given: place 27, storeSlot 12, priority 5, armyTarget 3, profession 1, armyReserve 1, armyList 1, sendUnit 1. None refused.

People changing jobs: new carrier 50, carrier -> worker 12.

People's orders (2149 in all, 2132 done): worker rest forest 159, worker gather forest 158, worker rest farm 155, worker gather farm 153, worker rest wood 131, worker gather wood 129, worker rest quarry 102, worker gather quarry 100, worker rest saw 86, carrier haul log wood -> saw 86, worker toCraft saw 85, worker craft saw 85, carrier haul plank saw -> store 64, carrier haul stone quarry -> store 32. None failed.


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 23/4/2398/10/60 | 32/6/2813/10/50 |
| 30 | 29/6/2410/10/60 | 61/11/5634/29/71 |
| 45 | 29/6/2410/10/60 | 72/16/9248/54/86 |
| 60 | 29/6/2410/10/60 | 80/22/13762/72/88 |
| first | - - - - 14 - | 9 10 14 15 24 38 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 19 29 44 47 54 59 67 72).

First army orders (game min:sec): 0:00 armyTarget sword=12; 0:00 armyTarget spear=12; 0:00 armyTarget bow=16; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 6 | 22 | 2 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 43 | 48 | 2398 | 4079 |
| 30 | 37 | 32 | 40 | 18 | 8 | 0 | 14 | 48 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 42 | 85 | 2410 | 4101 |
| 45 | 48 | 32 | 40 | 18 | 8 | 0 | 14 | 48 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 42 | 96 | 2410 | 4101 |
| 60 | 48 | 32 | 40 | 18 | 8 | 0 | 14 | 48 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 42 | 96 | 2410 | 4101 |

At the end: buildings (built+sites) guard 5, house 5, store 3, wood 3, quarry 2, farm 2, hq 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1, tower 1, ironmine 1.
People: carrier 42, worker 13, soldier 6, digger 2, builder 2, geologist 1; beds 50. Soldiers: sword 3, bow 3.

Goods produced in the game: log 133, stone 101, plank 89, grain 70, fish 25, water 22, flour 22, bread 8, ironore 8.
Goods consumed in the game: log 89, plank 81, stone 79, grain 22, fish 13, water 8, flour 8, pick 4, axe 2, scythe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (242 building-min): Idle 65%, Waiting for a swordsman: train one at the barracks 34%, Soldiers on the way 0%, Waiting for a soldier 0%
- store (142 building-min): Idle 100%
- house (280 building-min): Idle 100%
- wood (164 building-min): Log pile full, waiting for carriers 31%, Needs a worker with an axe 29%, Felling a tree 19%, No grown trees in range inside your border 14%, Bringing a log to the pile 7%
- quarry (103 building-min): Stone pile full, waiting for carriers 75%, Cutting stone 17%, Bringing stone to the pile 8%, Worker picking up a pickaxe 0%, Working 0%
- saw (57 building-min): Output pile full, waiting for carriers 75%, Sawing planks 20%, Stacking outside 4%, Fetching from the pile 0%, Worker picking up a saw 0%
- forest (56 building-min): No free ground to plant in range inside your border 54%, Planting a sapling 46%, Worker picking up a shovel 0%, Working 0%
- fisher (56 building-min): Fish pile full, waiting for carriers 95%, Fishing 2%, Bringing a fish to the pile 2%, Worker picking up a fishing rod 1%, Idle 0%
- waterhut (54 building-min): Water pile full, waiting for carriers 93%, Fetching water 4%, Bringing water to the pile 4%, Working 0%, Idle 0%
- farm (97 building-min): Grain pile full, waiting for carriers 89%, Sowing a field 6%, Harvesting grain 4%, Bringing grain to the pile 2%, Worker picking up a scythe 0%
- mill (50 building-min): Output pile full, waiting for carriers 96%, Grinding flour 3%, Stacking outside 1%, Waiting for grain 0%, Worker on the way 0%
- bakery (49 building-min): Output pile full, waiting for carriers 95%, Baking bread 4%, Stacking outside 0%, Waiting for water 0%, Waiting for flour and water 0%
- tower (46 building-min): Waiting for a swordsman: train one at the barracks 100%
- ironmine (43 building-min): Iron ore pile full, waiting for carriers 91%, Deposit thinning: mining iron ore 5%, Mining iron ore 2%, Worker picking up a pickaxe 1%, Bringing iron ore out 1%

Building sites, time per state (site-min): Waiting for materials 13, Builders at work 7, Leveling the ground 6, Waiting for a digger 4, Waiting for a builder 4.

Build order (placed at min:sec, finished at): guard 0:02→0:34, store 0:04→0:46, house 0:34→1:04, wood 0:48→1:20, quarry 1:04→1:56, house 1:20→2:16, saw 1:56→2:36, wood 2:18→3:01, house 2:36→3:26, forest 3:02→3:52, fisher 3:26→4:16, house 3:52→4:35, waterhut 4:16→5:37, farm 4:38→6:59, guard 5:42→8:00, house 7:00→8:56, mill 8:00→9:35, bakery 8:58→10:57, wood 9:36→11:52, guard 10:58→12:23, tower 11:52→13:51, quarry 12:24→14:36, farm 13:52→15:36, guard 15:02→16:10, ironmine 15:50→16:37, store 17:36→18:04, store 18:08→18:45, guard 20:02→20:47.

Orders given: place 28, storeSlot 12, priority 5, armyTarget 3, sendUnit 2, profession 1, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 50, carrier -> worker 13.

People's orders (2306 in all, 2288 done): worker rest farm 155, worker gather farm 153, worker rest forest 150, worker gather forest 149, worker rest wood 135, worker gather wood 133, worker rest quarry 103, worker gather quarry 101, worker rest saw 90, worker toCraft saw 89, worker craft saw 89, carrier haul log wood -> saw 70, carrier haul plank saw -> store 49, carrier haul log wood -> store 47. None failed.


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 19/3/1970/10/60 | 29/6/2774/10/40 |
| 30 | 19/3/1970/10/60 | 57/16/7172/37/71 |
| 45 | 19/3/1970/10/60 | 76/18/9308/52/88 |
| 60 | 19/3/1970/10/60 | 85/26/15450/74/86 |
| first | - - - - - - | 7 8 9 10 45 44 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 12 26 37 39 39 52 62 67 74).

First army orders (game min:sec): 0:00 armyTarget sword=12; 0:00 armyTarget spear=12; 0:00 armyTarget bow=16; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 29 | 25 | 0 | 14 | 0 | 0 | 8 | 20 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 46 | 49 | 1970 | 4326 |
| 30 | 32 | 25 | 0 | 14 | 0 | 0 | 8 | 24 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 46 | 56 | 1970 | 4326 |
| 45 | 32 | 25 | 0 | 14 | 0 | 0 | 8 | 24 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 46 | 56 | 1970 | 4326 |
| 60 | 32 | 25 | 0 | 14 | 0 | 0 | 8 | 24 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 46 | 56 | 1970 | 4326 |

At the end: buildings (built+sites) house 5, guard 3, wood 2, hq 1, store 1, quarry 1, saw 1, forest 1, fisher 1, waterhut 1, farm 1, mill 1, tower 0+1, bakery 0+1.
People: carrier 46, worker 9, soldier 7, digger 2, builder 2, geologist 1; beds 50. Soldiers: sword 4, bow 3.

Goods produced in the game: log 79, plank 51, stone 33, grain 32, fish 8, water 8, flour 8.
Goods consumed in the game: stone 51, log 51, plank 50, grain 8, pick 2, axe 2, saw 1, shovel 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (159 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- store (59 building-min): Idle 100%
- house (279 building-min): Idle 100%
- wood (116 building-min): Log pile full, waiting for carriers 78%, Felling a tree 16%, Bringing a log to the pile 6%, Worker picking up an axe 0%, Working 0%
- quarry (58 building-min): No stone in range inside your border 82%, Cutting stone 11%, Bringing stone to the pile 7%, Worker picking up a pickaxe 0%, Working 0%
- saw (57 building-min): Output pile full, waiting for carriers 86%, Sawing planks 11%, Stacking outside 2%, Fetching from the pile 0%, Worker picking up a saw 0%
- forest (56 building-min): No free ground to plant in range inside your border 81%, Planting a sapling 19%, Worker picking up a shovel 0%, Working 0%
- fisher (56 building-min): Fish pile full, waiting for carriers 99%, Fishing 1%, Bringing a fish to the pile 0%, Worker picking up a fishing rod 0%, Idle 0%
- waterhut (53 building-min): Water pile full, waiting for carriers 98%, Bringing water to the pile 1%, Fetching water 1%, Idle 0%, Working 0%
- farm (50 building-min): Grain pile full, waiting for carriers 90%, Sowing a field 5%, Harvesting grain 3%, Bringing grain to the pile 2%, Worker picking up a scythe 0%
- mill (48 building-min): Output pile full, waiting for carriers 98%, Grinding flour 1%, Waiting for grain 1%, Stacking outside 0%, Working 0%

Building sites, time per state (site-min): Waiting for materials 103, Leveling the ground 6, Builders at work 5, Waiting for a digger 3, Waiting for a builder 3.

Build order (placed at min:sec, finished at): guard 0:02→0:44, store 0:04→0:54, house 0:44→1:15, wood 0:54→1:33, quarry 1:16→1:51, house 1:34→2:09, saw 1:52→2:33, wood 2:10→2:53, house 2:34→3:39, forest 2:54→3:59, fisher 3:40→4:31, house 4:00→5:23, waterhut 4:32→6:37, guard 5:24→7:36, house 6:38→8:25, farm 7:36→10:29, mill 8:26→11:35, guard 10:30→12:31, tower 11:36→never, bakery 12:32→never.

Orders given: place 20, storeSlot 4, armyTarget 3, priority 3, profession 1, armyReserve 1, armyList 1, sendUnit 1. None refused.

People changing jobs: new carrier 50, carrier -> worker 9.

People's orders (1165 in all, 1152 done): worker rest wood 81, worker gather wood 79, worker rest forest 76, worker gather forest 75, worker rest farm 75, worker gather farm 74, worker rest saw 52, worker toCraft saw 51, worker craft saw 51, carrier haul log wood -> saw 41, carrier haul plank saw -> store 40, worker rest quarry 34, worker gather quarry 33, builder build house 22. None failed.

Fights and contact: first saw player 1 at 59:00.

Warnings: site-stuck 8. Last: 44:20 site-stuck: Bakery site has not moved for 30 min (Waiting for materials) | 54:00 site-stuck: Tower site has not moved for 41 min (Waiting for materials) | 54:30 site-stuck: Bakery site has not moved for 41 min (Waiting for materials)


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 24/2/1681/10/60 | 24/6/2773/10/40 |
| 30 | 33/6/3086/30/40 | 32/6/3302/10/60 |
| 45 | 33/6/3086/42/28 | 59/14/6958/33/77 |
| 60 | 33/6/3086/46/24 | 78/20/11611/58/102 |
| first | 20 - 21 21 19 - | 8 9 33 34 54 52 |

Soldiers every 5 min: 10 10 10 10 21 30 39 42 42 42 44 46 (original game NPC: 10 10 10 10 10 10 21 28 33 38 50 58).

First army orders (game min:sec): 0:00 armyTarget sword=12; 0:00 armyTarget spear=12; 0:00 armyTarget bow=16; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 21 | 17 | 24 | 12 | 12 | 0 | 14 | 32 | 14 | 8 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 35 | 89 | 1681 | 3163 |
| 30 | 48 | 32 | 40 | 12 | 11 | 0 | 13 | 48 | 13 | 5 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 14 | 84 | 3086 | 5445 |
| 45 | 48 | 32 | 40 | 11 | 11 | 0 | 14 | 47 | 14 | 3 | 0 | 12 | 0 | 0 | 0 | 0 | 0 | 2 | 91 | 3086 | 5445 |
| 60 | 48 | 32 | 40 | 10 | 12 | 0 | 13 | 42 | 11 | 9 | 7 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 100 | 3086 | 5445 |

At the end: buildings (built+sites) guard 5, house 5, store 3, wood 3, quarry 2, farm 2, hq 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1, coalmine 1, ironmine 1, tower 1, smelter 1, weaponsmith 1, barracks 1.
People: soldier 39, worker 16, carrier 3, digger 2, builder 2, geologist 1; beds 50. Soldiers: sword 13, bow 15, spear 11.

Goods produced in the game: fish 168, log 150, grain 128, stone 120, plank 106, coal 95, water 88, flour 86, bread 75, ironore 57, iron 50, sword 13, bow 12, spear 11.
Goods consumed in the game: fish 164, log 106, plank 98, stone 98, grain 86, coal 86, water 75, flour 75, bread 63, ironore 50, iron 36, sword 13, bow 12, spear 11, pick 5, axe 2, scythe 2, hammer 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (238 building-min): Idle 96%, Waiting for a swordsman: train one at the barracks 3%, Soldiers on the way 0%, Waiting for a soldier 0%
- store (143 building-min): Idle 100%
- house (281 building-min): Idle 100%
- wood (166 building-min): Log pile full, waiting for carriers 40%, Needs a worker with an axe 31%, Felling a tree 21%, Bringing a log to the pile 8%, Worker picking up an axe 0%
- quarry (108 building-min): Stone pile full, waiting for carriers 70%, Cutting stone 18%, Bringing stone to the pile 8%, No stone in range inside your border 3%, Worker picking up a pickaxe 1%
- saw (57 building-min): Output pile full, waiting for carriers 71%, Sawing planks 23%, Stacking outside 5%, Fetching from the pile 1%, Worker picking up a saw 0%
- forest (56 building-min): No free ground to plant in range inside your border 58%, Planting a sapling 42%, Worker picking up a shovel 1%, Working 0%
- fisher (55 building-min): Fish pile full, waiting for carriers 52%, Bringing a fish to the pile 24%, Fishing 24%, Worker picking up a fishing rod 0%, Idle 0%
- waterhut (54 building-min): Water pile full, waiting for carriers 88%, Fetching water 6%, Bringing water to the pile 5%, Idle 0%, Working 0%
- farm (101 building-min): Grain pile full, waiting for carriers 80%, Sowing a field 10%, Harvesting grain 7%, Bringing grain to the pile 3%, Worker picking up a scythe 1%
- mill (52 building-min): Output pile full, waiting for carriers 81%, Grinding flour 11%, Stacking outside 4%, Waiting for grain 3%, Fetching from the pile 1%
- bakery (51 building-min): Output pile full, waiting for carriers 62%, Baking bread 33%, Stacking outside 4%, Waiting for flour and water 1%, Fetching from the pile 0%
- coalmine (48 building-min): Deposit worn out: finding little coal 52%, Deposit thinning: mining coal 18%, Coal pile full, waiting for carriers 14%, Mining coal 8%, Bringing coal out 5%
- ironmine (48 building-min): Deposit worn out: finding little iron ore 77%, Iron ore pile full, waiting for carriers 11%, Bringing iron ore out 3%, Mining iron ore 3%, Deposit thinning: mining iron ore 3%
- tower (42 building-min): Idle 89%, Waiting for a swordsman: train one at the barracks 11%
- smelter (40 building-min): Waiting for iron ore 41%, Output pile full, waiting for carriers 32%, Smelting iron 16%, Waiting for coal 3%, Stacking outside 3%
- weaponsmith (40 building-min): Waiting for coal 81%, Forging sword 4%, Forging bow 4%, Forging spear 3%, Stacking outside 2%
- barracks (39 building-min): Waiting for weapons from the weaponsmith 86%, Weapons on the way 12%, Training soldiers 1%, Idle 0%

Building sites, time per state (site-min): Leveling the ground 10, Builders at work 8, Waiting for a digger 6, Waiting for a builder 5, Waiting for materials 3.

Build order (placed at min:sec, finished at): guard 0:02→0:40, store 0:04→0:53, house 0:40→1:15, wood 0:54→1:32, quarry 1:16→1:56, house 1:34→2:17, saw 1:58→2:43, wood 2:18→3:01, house 2:44→3:28, forest 3:02→3:52, fisher 3:28→4:33, house 3:54→5:07, waterhut 4:34→5:47, guard 5:08→6:11, house 5:48→6:41, farm 6:12→7:34, mill 6:42→7:52, bakery 7:36→8:49, wood 7:54→9:09, quarry 8:50→10:15, farm 9:10→11:17, coalmine 10:16→11:31, ironmine 11:18→11:50, guard 14:48→15:27, store 15:26→16:32, tower 15:38→18:04, guard 17:56→18:49, store 18:18→19:09, smelter 18:50→19:37, weaponsmith 19:10→20:28, barracks 19:38→20:54, guard 20:28→21:10.

Orders given: place 32, storeSlot 12, priority 6, armyTarget 3, sendUnit 2, profession 1, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 50, carrier -> soldier 36, carrier -> worker 16.

People's orders (5312 in all, 5285 done): worker rest farm 267, worker gather farm 265, worker mine ironmine 204, worker rest fisher 168, worker gather fisher 168, worker eat ironmine 164, carrier haul fish fisher -> ironmine 161, worker rest forest 154, worker gather forest 153, worker rest wood 152, worker gather wood 150, worker mine coalmine 150, worker rest quarry 122, worker gather quarry 120. None failed.


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 25/4/2669/10/60 | 25/6/3049/10/40 |
| 30 | 29/6/2696/10/60 | 64/11/5873/17/93 |
| 45 | 29/6/2696/10/60 | 73/17/10464/38/92 |
| 60 | 29/6/2696/10/60 | 83/24/14949/64/96 |
| first | - - - - 13 - | 14 15 16 23 30 35 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 13 17 24 31 38 49 53 64).

First army orders (game min:sec): 0:00 armyTarget sword=12; 0:00 armyTarget spear=12; 0:00 armyTarget bow=16; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 1 | 7 | 24 | 12 | 8 | 0 | 14 | 32 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 42 | 72 | 2669 | 5025 |
| 30 | 1 | 24 | 40 | 12 | 8 | 0 | 14 | 48 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 42 | 72 | 2696 | 5025 |
| 45 | 18 | 32 | 40 | 12 | 8 | 0 | 14 | 48 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 42 | 80 | 2696 | 5025 |
| 60 | 40 | 32 | 40 | 12 | 8 | 0 | 14 | 48 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 42 | 88 | 2696 | 5025 |

At the end: buildings (built+sites) guard 5, house 5, store 3, wood 3, quarry 2, farm 2, hq 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1, ironmine 1, tower 1.
People: carrier 42, worker 13, soldier 6, digger 2, builder 2, geologist 1; beds 50. Soldiers: sword 3, bow 3.

Goods produced in the game: log 125, stone 101, plank 89, grain 70, water 22, flour 22, fish 10, bread 8, ironore 8.
Goods consumed in the game: log 89, plank 81, stone 79, grain 22, water 8, flour 8, pick 4, fish 4, axe 2, scythe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (245 building-min): Idle 66%, Waiting for a swordsman: train one at the barracks 34%, Soldiers on the way 0%, Waiting for a soldier 0%
- store (133 building-min): Idle 100%
- house (281 building-min): Idle 100%
- wood (166 building-min): No grown trees in range inside your border 42%, Needs a worker with an axe 31%, Felling a tree 18%, Bringing a log to the pile 8%, Log pile full, waiting for carriers 1%
- quarry (109 building-min): Stone pile full, waiting for carriers 81%, Cutting stone 13%, Bringing stone to the pile 5%, Worker picking up a pickaxe 0%, Working 0%
- saw (57 building-min): Output pile full, waiting for carriers 45%, Waiting for logs 31%, Sawing planks 20%, Stacking outside 4%, Fetching from the pile 1%
- forest (56 building-min): No free ground to plant in range inside your border 61%, Planting a sapling 39%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- fisher (56 building-min): Fish pile full, waiting for carriers 97%, Bringing a fish to the pile 1%, Fishing 1%, Worker picking up a fishing rod 0%
- farm (104 building-min): Grain pile full, waiting for carriers 89%, Sowing a field 5%, Harvesting grain 3%, Bringing grain to the pile 2%, Worker picking up a scythe 0%
- waterhut (52 building-min): Water pile full, waiting for carriers 96%, Bringing water to the pile 2%, Fetching water 2%, Worker on the way 0%, Working 0%
- mill (52 building-min): Output pile full, waiting for carriers 96%, Grinding flour 3%, Stacking outside 1%, Fetching from the pile 0%, Working 0%
- bakery (51 building-min): Output pile full, waiting for carriers 95%, Baking bread 4%, Waiting for water 0%, Stacking outside 0%, Waiting for flour and water 0%
- ironmine (49 building-min): Iron ore pile full, waiting for carriers 97%, Mining iron ore 2%, Worker picking up a pickaxe 1%, Bringing iron ore out 0%, Fetching food 0%
- tower (48 building-min): Waiting for a swordsman: train one at the barracks 100%, Waiting for a soldier 0%, Idle 0%

Building sites, time per state (site-min): Builders at work 7, Leveling the ground 5, Waiting for a builder 5, Waiting for a digger 5, Waiting for materials 4.

Build order (placed at min:sec, finished at): guard 0:02→0:45, store 0:04→0:54, house 0:46→1:24, wood 0:54→1:36, quarry 1:24→1:55, house 1:38→2:16, saw 1:56→2:35, wood 2:16→3:07, house 2:36→3:31, forest 3:08→3:43, fisher 3:32→4:14, house 3:46→4:33, farm 4:14→6:00, guard 5:10→6:15, house 6:00→6:47, waterhut 6:16→7:40, mill 6:48→7:56, bakery 7:40→8:57, wood 7:56→9:13, quarry 8:58→9:34, farm 9:14→10:26, ironmine 9:34→10:48, guard 10:26→11:06, tower 10:48→12:10, guard 15:02→16:02, guard 20:02→20:49, store 21:26→22:14, store 22:58→23:33.

Orders given: place 28, storeSlot 12, priority 5, armyTarget 3, profession 1, armyReserve 1, armyList 1, sendUnit 1. None refused.

People changing jobs: new carrier 50, carrier -> worker 13.

People's orders (2209 in all, 2191 done): worker rest farm 156, worker gather farm 154, worker rest forest 153, worker gather forest 152, worker rest wood 127, worker gather wood 125, worker rest quarry 103, worker gather quarry 101, carrier haul log wood -> saw 90, worker rest saw 90, worker toCraft saw 89, worker craft saw 89, carrier haul plank saw -> store 76, carrier haul grain farm -> store 41. None failed.


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.
