# Tournament: chatgpt

Game version 195. Written for: chatgpt not stated.

- chatgpt: hearthlands-ai-challenge, commit 85454ed

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
| 15 | 23/1/1402/10/51 | 31/6/3159/10/50 |
| 30 | 27/1/1417/10/60 | 64/10/5455/20/90 |
| 45 | 27/1/1417/10/60 | 75/19/11881/52/98 |
| 60 | 27/1/1412/10/60 | 83/27/17999/83/87 |
| first | 17 - 18 - - - | 8 8 19 19 26 33 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 16 20 30 42 52 61 73 83).

First army orders (game min:sec): 0:00 armyTarget sword=14; 0:00 armyTarget spear=10; 0:00 armyTarget bow=16; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 5 | 18 | 20 | 11 | 0 | 21 | 0 | 14 | 8 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 27 | 37 | 1402 | 2791 |
| 30 | 32 | 16 | 19 | 20 | 24 | 0 | 22 | 24 | 22 | 28 | 19 | 22 | 0 | 0 | 1 | 1 | 6 | 40 | 104 | 1417 | 2797 |
| 45 | 32 | 16 | 19 | 20 | 24 | 0 | 22 | 24 | 22 | 28 | 22 | 22 | 0 | 0 | 1 | 1 | 6 | 40 | 107 | 1417 | 2797 |
| 60 | 32 | 16 | 19 | 20 | 24 | 0 | 22 | 24 | 22 | 28 | 22 | 22 | 0 | 0 | 1 | 1 | 6 | 40 | 107 | 1412 | 2797 |

At the end: buildings (built+sites) house 5, wood 3, store 3, quarry 2, coalmine 2, hq 1, guard 1, saw 1, forest 1, fisher 1, waterhut 1, farm 1, mill 1, bakery 1, ironmine 1, smelter 1, weaponsmith 1.
People: carrier 40, worker 15, soldier 8, digger 2, builder 2, geologist 1; beds 50. Soldiers: sword 6, bow 2.

Goods produced in the game: log 99, grain 85, stone 72, plank 71, fish 68, coal 66, water 61, flour 61, ironore 52, bread 39, iron 30, bow 6, spear 1, sword 1.
Goods consumed in the game: plank 79, stone 71, log 71, grain 61, fish 54, water 39, flour 39, coal 38, ironore 30, bread 15, iron 8, pick 5, axe 2, hammer 2, saw 1, shovel 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (59 building-min): Idle 100%, Soldiers on the way 0%
- wood (164 building-min): Log pile full, waiting for carriers 51%, Needs a worker with an axe 29%, Felling a tree 12%, Waiting for a free settler 5%, Bringing a log to the pile 3%
- quarry (108 building-min): Stone pile full, waiting for carriers 42%, No stone in range inside your border 40%, Cutting stone 12%, Bringing stone to the pile 6%, Worker picking up a pickaxe 0%
- saw (58 building-min): Output pile full, waiting for carriers 71%, Sawing planks 15%, Waiting for logs 10%, Stacking outside 3%, Worker picking up a saw 0%
- store (148 building-min): Idle 100%
- forest (57 building-min): No free ground to plant in range inside your border 68%, Planting a sapling 19%, Waiting for a free settler 13%, Worker picking up a shovel 0%, Idle 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 77%, Waiting for a free settler 12%, Fishing 6%, Bringing a fish to the pile 4%, Worker picking up a fishing rod 0%
- waterhut (56 building-min): Water pile full, waiting for carriers 77%, Waiting for a free settler 11%, Fetching water 7%, Bringing water to the pile 5%, Worker on the way 0%
- farm (54 building-min): Grain pile full, waiting for carriers 68%, Sowing a field 12%, Waiting for a free settler 8%, Harvesting grain 8%, Bringing grain to the pile 4%
- mill (53 building-min): Output pile full, waiting for carriers 79%, Grinding flour 6%, Waiting for grain 5%, Waiting for a free settler 5%, Stacking outside 3%
- bakery (51 building-min): Output pile full, waiting for carriers 76%, Baking bread 17%, Stacking outside 2%, Waiting for flour 2%, Waiting for a free settler 1%
- house (240 building-min): Idle 100%
- coalmine (88 building-min): Needs a worker with a pickaxe 47%, Coal pile full, waiting for carriers 40%, Mining coal 10%, Bringing coal out 2%, Worker picking up a pickaxe 0%
- ironmine (46 building-min): Iron ore pile full, waiting for carriers 67%, Deposit thinning: mining iron ore 17%, Mining iron ore 11%, Bringing iron ore out 3%, Worker picking up a pickaxe 1%
- smelter (43 building-min): Output pile full, waiting for carriers 87%, Smelting iron 9%, Stacking outside 2%, Waiting for iron ore 1%, Worker picking up a hammer 0%
- weaponsmith (42 building-min): Output pile full, waiting for carriers 95%, Forging bow 2%, Waiting for coal 1%, Worker picking up a hammer 1%, Stacking outside 1%

Building sites, time per state (site-min): Waiting for materials 8, Builders at work 6, Leveling the ground 5, Waiting for a digger 4, Waiting for a builder 3.

Build order (placed at min:sec, finished at): guard 0:00→0:51, wood 0:02→1:10, quarry 0:52→1:29, saw 1:10→1:50, store 1:30→1:58, wood 1:50→2:19, forest 1:58→2:37, fisher 2:20→3:18, waterhut 2:38→3:43, farm 3:18→5:38, mill 4:54→7:02, bakery 6:32→9:22, house 7:02→9:53, house 10:02→10:40, quarry 10:10→10:59, house 11:08→11:51, store 11:36→12:05, wood 12:00→12:31, house 12:18→12:51, coalmine 12:50→13:26, ironmine 13:30→14:00, house 14:02→14:57, smelter 16:16→16:54, weaponsmith 16:22→17:35, store 16:54→17:46, coalmine 17:40→18:19.

Orders given: archers 1774, place 26, storeSlot 12, armyTarget 3, armyReserve 1, armyList 1, profession 1, priority 1, sendUnit 1. None refused.

People changing jobs: new carrier 46, carrier -> worker 11, new worker 4, carrier -> geologist 1.

People's orders (3133 in all, 3115 done): worker rest farm 184, worker gather farm 183, worker rest wood 101, worker gather wood 99, worker rest forest 95, worker gather forest 94, worker mine ironmine 90, worker rest quarry 74, worker gather quarry 72, worker rest saw 72, worker mine coalmine 72, worker toCraft saw 71, worker craft saw 71, worker rest fisher 69. None failed.

Fights and contact: first saw player 2 at 56:00.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 8 soldiers, 1 guards, 40 carriers; coal signs 22, iron signs 13.


Script: 1800 turns, 0.3 ms average, worst 11 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 31: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 24/1/1404/10/60 | 31/6/2859/10/50 |
| 30 | 24/1/1404/10/60 | 63/10/5511/26/94 |
| 45 | 24/1/1404/10/60 | 74/16/10389/53/107 |
| 60 | 24/1/1404/10/60 | 81/23/14943/71/89 |
| first | - - - - - - | 11 12 13 17 27 33 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 16 26 44 48 53 61 66 71).

First army orders (game min:sec): 0:00 armyTarget sword=14; 0:00 armyTarget spear=10; 0:00 armyTarget bow=16; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 12 | 10 | 23 | 16 | 14 | 0 | 21 | 22 | 21 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 38 | 54 | 1404 | 2539 |
| 30 | 32 | 16 | 24 | 16 | 20 | 0 | 22 | 32 | 22 | 16 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 42 | 96 | 1404 | 2539 |
| 45 | 32 | 16 | 24 | 16 | 20 | 0 | 22 | 32 | 22 | 16 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 42 | 96 | 1404 | 2539 |
| 60 | 32 | 16 | 24 | 16 | 20 | 0 | 22 | 32 | 22 | 16 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 42 | 96 | 1404 | 2539 |

At the end: buildings (built+sites) house 5, wood 3, store 3, quarry 2, farm 2, hq 1, guard 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1, coalmine 1.
People: carrier 42, worker 13, soldier 8, digger 2, builder 2, geologist 1; beds 50. Soldiers: sword 6, bow 2.

Goods produced in the game: log 88, grain 78, stone 68, plank 60, water 46, flour 46, bread 24, coal 16, fish 10.
Goods consumed in the game: plank 68, stone 62, log 60, grain 46, water 24, flour 24, pick 4, bread 4, axe 2, scythe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (59 building-min): Idle 100%, Soldiers on the way 0%
- wood (167 building-min): Log pile full, waiting for carriers 50%, Needs a worker with an axe 30%, Felling a tree 11%, Bringing a log to the pile 4%, Waiting for a free settler 3%
- quarry (110 building-min): Stone pile full, waiting for carriers 84%, Cutting stone 10%, Bringing stone to the pile 5%, Worker picking up a pickaxe 0%, Idle 0%
- saw (58 building-min): Output pile full, waiting for carriers 76%, Sawing planks 13%, Waiting for logs 8%, Stacking outside 3%, Worker picking up a saw 0%
- store (153 building-min): Idle 100%
- forest (57 building-min): No free ground to plant in range inside your border 70%, Planting a sapling 20%, Waiting for a free settler 9%, Worker picking up a shovel 0%, Idle 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 90%, Waiting for a free settler 9%, Fishing 1%, Bringing a fish to the pile 0%, Worker picking up a fishing rod 0%
- waterhut (56 building-min): Water pile full, waiting for carriers 86%, Waiting for a free settler 7%, Fetching water 3%, Bringing water to the pile 3%, Worker on the way 0%
- farm (103 building-min): Grain pile full, waiting for carriers 86%, Sowing a field 5%, Harvesting grain 4%, Waiting for a free settler 2%, Bringing grain to the pile 2%
- mill (54 building-min): Output pile full, waiting for carriers 85%, Grinding flour 5%, Waiting for a free settler 4%, Waiting for grain 3%, Stacking outside 3%
- bakery (53 building-min): Output pile full, waiting for carriers 82%, Baking bread 10%, Waiting for flour 3%, Waiting for a free settler 2%, Stacking outside 1%
- house (242 building-min): Idle 100%
- coalmine (47 building-min): Coal pile full, waiting for carriers 94%, Mining coal 4%, Bringing coal out 1%, Worker picking up a pickaxe 1%, Working 0%

Building sites, time per state (site-min): Leveling the ground 6, Builders at work 5, Waiting for materials 5, Waiting for a digger 5, Waiting for a builder 3.

Build order (placed at min:sec, finished at): guard 0:00→0:42, wood 0:02→0:56, quarry 0:42→1:14, saw 0:56→1:38, store 1:16→1:46, wood 1:38→2:29, forest 1:46→2:54, fisher 2:30→3:24, waterhut 2:56→4:09, farm 3:26→5:52, mill 4:10→6:18, bakery 6:26→7:17, house 6:54→8:14, quarry 8:20→9:02, wood 8:22→9:43, house 9:02→10:07, farm 9:58→11:25, house 10:28→11:50, store 11:28→12:00, coalmine 11:52→12:45, house 12:30→13:04, store 12:58→13:34, house 13:16→14:20.

Orders given: archers 1779, place 23, storeSlot 12, armyTarget 3, armyReserve 1, armyList 1, priority 1, profession 1, sendUnit 1. None refused.

People changing jobs: new carrier 48, carrier -> worker 11, new worker 2, carrier -> geologist 1.

People's orders (1981 in all, 1965 done): worker rest farm 163, worker gather farm 161, worker rest forest 91, worker rest wood 90, worker gather forest 90, worker gather wood 88, worker rest quarry 70, worker gather quarry 68, worker rest saw 61, worker toCraft saw 60, worker craft saw 60, worker rest waterhut 47, worker rest mill 47, worker gather waterhut 46. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 8 soldiers, 1 guards, 42 carriers; coal signs 10, iron signs 1.


Script: 1800 turns, 0.3 ms average, worst 12 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 18/1/1371/10/40 | 33/6/2488/10/50 |
| 30 | 28/1/1430/16/54 | 45/6/3143/10/53 |
| 45 | 28/1/1430/33/37 | 72/17/8468/48/82 |
| 60 | 28/1/1430/43/27 | 83/25/13669/76/94 |
| first | 19 - 20 21 - - | 10 11 15 15 32 46 |

Soldiers every 5 min: 10 10 10 10 14 16 22 29 33 41 43 43 (original game NPC: 10 10 10 10 10 10 19 29 48 60 71 76).

First army orders (game min:sec): 0:00 armyTarget sword=14; 0:00 armyTarget spear=10; 0:00 armyTarget bow=16; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 21 | 14 | 7 | 0 | 13 | 4 | 9 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 16 | 30 | 1371 | 2807 |
| 30 | 32 | 16 | 24 | 23 | 20 | 0 | 22 | 32 | 22 | 28 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 30 | 95 | 1430 | 2814 |
| 45 | 32 | 16 | 24 | 23 | 19 | 0 | 22 | 32 | 22 | 28 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 12 | 94 | 1430 | 2818 |
| 60 | 32 | 16 | 24 | 22 | 20 | 0 | 22 | 32 | 22 | 16 | 1 | 8 | 0 | 0 | 1 | 1 | 1 | 2 | 89 | 1430 | 2819 |

At the end: buildings (built+sites) house 5, wood 3, store 3, quarry 2, farm 2, hq 1, guard 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1, coalmine 1, ironmine 1, smelter 1, weaponsmith 1, barracks 1.
People: soldier 41, worker 16, carrier 6, digger 2, builder 2, geologist 1; beds 50. Soldiers: sword 15, bow 16, spear 10.

Goods produced in the game: fish 178, grain 115, log 105, coal 96, stone 87, water 83, flour 83, plank 77, bread 61, ironore 45, iron 44, bow 15, spear 11, sword 10.
Goods consumed in the game: fish 162, plank 85, grain 83, stone 81, coal 80, log 77, water 61, flour 61, ironore 44, bread 41, iron 36, bow 14, spear 10, sword 9, pick 5, axe 2, scythe 2, hammer 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (59 building-min): Idle 100%, Soldiers on the way 0%
- wood (162 building-min): Log pile full, waiting for carriers 49%, Needs a worker with an axe 28%, Felling a tree 14%, Waiting for a free settler 5%, Bringing a log to the pile 4%
- quarry (106 building-min): Stone pile full, waiting for carriers 83%, Cutting stone 12%, Bringing stone to the pile 5%, Worker picking up a pickaxe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 65%, Sawing planks 17%, Waiting for logs 13%, Stacking outside 4%, Worker picking up a saw 1%
- store (143 building-min): Idle 100%
- forest (57 building-min): No free ground to plant in range inside your border 61%, Planting a sapling 25%, Waiting for a free settler 14%, Worker picking up a shovel 0%, Idle 0%
- fisher (56 building-min): Fish pile full, waiting for carriers 46%, Fishing 22%, Bringing a fish to the pile 18%, Waiting for a free settler 13%, Worker picking up a fishing rod 1%
- waterhut (55 building-min): Water pile full, waiting for carriers 79%, Waiting for a free settler 12%, Fetching water 5%, Bringing water to the pile 4%, Idle 0%
- farm (98 building-min): Grain pile full, waiting for carriers 73%, Sowing a field 11%, Harvesting grain 7%, Bringing grain to the pile 5%, Waiting for a free settler 4%
- mill (51 building-min): Output pile full, waiting for carriers 77%, Grinding flour 9%, Waiting for a free settler 5%, Stacking outside 4%, Waiting for grain 4%
- bakery (49 building-min): Output pile full, waiting for carriers 64%, Baking bread 28%, Stacking outside 3%, Waiting for flour 3%, Waiting for a free settler 1%
- house (230 building-min): Idle 100%
- coalmine (43 building-min): Deposit thinning: mining coal 39%, Coal pile full, waiting for carriers 34%, Mining coal 18%, Bringing coal out 6%, Came back empty-handed 1%
- ironmine (42 building-min): Deposit worn out: finding little iron ore 92%, Bringing iron ore out 3%, Came back empty-handed 3%, Fetching food 2%, Worker picking up a pickaxe 1%
- smelter (41 building-min): Waiting for iron ore 83%, Smelting iron 14%, Stacking outside 3%, Worker picking up a hammer 1%, Fetching from the pile 0%
- weaponsmith (41 building-min): Waiting for iron 68%, All weapon targets met 17%, Forging bow 5%, Forging spear 3%, Forging sword 3%
- barracks (39 building-min): Waiting for weapons from the weaponsmith 55%, Soldier targets met 23%, Weapons on the way 22%, Training soldiers 1%

Building sites, time per state (site-min): Waiting for materials 12, Builders at work 7, Leveling the ground 6, Waiting for a digger 6, Waiting for a builder 3.

Build order (placed at min:sec, finished at): guard 0:00→0:39, wood 0:02→1:00, quarry 0:40→1:24, saw 1:02→2:04, store 1:24→2:21, wood 2:04→2:52, forest 2:22→3:09, fisher 2:52→3:41, waterhut 3:10→4:42, farm 3:42→7:16, mill 4:42→8:38, bakery 8:12→10:57, house 8:42→11:14, house 11:40→12:31, quarry 11:42→12:52, house 13:18→13:58, wood 13:26→14:16, farm 14:04→15:13, house 14:22→15:33, house 15:46→16:37, store 15:56→16:52, coalmine 16:38→17:10, ironmine 16:54→17:51, store 17:12→17:40, smelter 18:06→18:45, weaponsmith 18:36→19:30, barracks 19:32→20:33.

Orders given: archers 1780, place 27, storeSlot 12, armyTarget 3, armyReserve 1, armyList 1, priority 1, profession 1, sendUnit 1. None refused.

People changing jobs: new carrier 45, carrier -> soldier 33, carrier -> worker 11, new worker 5, carrier -> geologist 1.

People's orders (4793 in all, 4770 done): worker rest farm 238, worker gather farm 237, worker mine ironmine 194, worker rest fisher 179, worker gather fisher 178, carrier haul fish fisher -> store 172, carrier haul fish store -> ironmine 166, worker eat ironmine 162, worker mine coalmine 124, worker rest forest 112, worker gather forest 111, worker rest wood 107, worker gather wood 105, worker rest coalmine 97. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 39 soldiers, 1 guards, 8 carriers; coal signs 8, iron signs 3.


Script: 1800 turns, 0.5 ms average, worst 9 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 24/2/1687/10/50 | 33/6/2646/10/53 |
| 30 | 32/4/2279/31/39 | 56/11/4647/16/74 |
| 45 | 32/4/2279/47/23 | 72/16/8216/48/82 |
| 60 | 32/4/2279/47/23 | 78/22/13185/68/82 |
| first | 17 - 18 19 - - | 10 11 13 16 42 41 |

Soldiers every 5 min: 10 10 10 13 20 31 42 45 47 47 47 47 (original game NPC: 10 10 10 10 14 16 22 39 48 59 64 68).

First army orders (game min:sec): 0:00 armyTarget sword=14; 0:00 armyTarget spear=10; 0:00 armyTarget bow=16; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 2 | 7 | 27 | 16 | 14 | 0 | 17 | 13 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 35 | 1687 | 3666 |
| 30 | 13 | 16 | 24 | 19 | 24 | 0 | 22 | 32 | 22 | 6 | 7 | 21 | 0 | 0 | 0 | 0 | 0 | 15 | 78 | 2279 | 4579 |
| 45 | 24 | 16 | 24 | 18 | 24 | 0 | 14 | 32 | 22 | 18 | 12 | 20 | 0 | 0 | 1 | 2 | 1 | 0 | 103 | 2279 | 4579 |
| 60 | 24 | 16 | 24 | 19 | 24 | 0 | 22 | 32 | 22 | 28 | 20 | 22 | 0 | 0 | 1 | 2 | 1 | 0 | 104 | 2279 | 4579 |

At the end: buildings (built+sites) house 5, guard 4, wood 3, store 3, quarry 2, farm 2, coalmine 2, hq 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1, ironmine 1, smelter 1, weaponsmith 1, barracks 1.
People: soldier 39, worker 16, digger 2, builder 2, carrier 2, geologist 1; beds 50. Soldiers: sword 15, bow 16, spear 8.

Goods produced in the game: fish 147, coal 132, grain 125, log 107, stone 97, water 93, flour 93, plank 87, ironore 83, bread 71, iron 63, bow 18, sword 13, spear 10.
Goods consumed in the game: fish 134, coal 104, plank 95, grain 93, stone 91, log 87, water 71, flour 71, ironore 63, bread 47, iron 41, bow 17, sword 12, spear 8, pick 5, axe 2, scythe 2, hammer 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (178 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (166 building-min): No grown trees in range inside your border 29%, Needs a worker with an axe 21%, Log pile full, waiting for carriers 18%, Felling a tree 14%, Waiting for a free settler 13%
- quarry (109 building-min): Stone pile full, waiting for carriers 80%, Cutting stone 14%, Bringing stone to the pile 6%, Worker picking up a pickaxe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 59%, Sawing planks 19%, Waiting for logs 17%, Stacking outside 4%, Worker picking up a saw 1%
- store (151 building-min): Idle 100%
- forest (57 building-min): No free ground to plant in range inside your border 58%, Planting a sapling 32%, Waiting for a free settler 10%, Worker picking up a shovel 0%, Idle 0%
- fisher (56 building-min): Fish pile full, waiting for carriers 49%, Fishing 22%, Bringing a fish to the pile 20%, Waiting for a free settler 9%, Worker picking up a fishing rod 0%
- waterhut (56 building-min): Water pile full, waiting for carriers 61%, Bringing water to the pile 16%, Fetching water 15%, Waiting for a free settler 8%, Idle 0%
- farm (102 building-min): Grain pile full, waiting for carriers 79%, Sowing a field 9%, Harvesting grain 6%, Bringing grain to the pile 3%, Waiting for a free settler 3%
- mill (53 building-min): Output pile full, waiting for carriers 75%, Grinding flour 11%, Stacking outside 5%, Waiting for a free settler 4%, Waiting for grain 4%
- bakery (52 building-min): Output pile full, waiting for carriers 59%, Baking bread 31%, Stacking outside 4%, Waiting for flour 3%, Waiting for a free settler 2%
- house (239 building-min): Idle 100%
- coalmine (85 building-min): Needs a worker with a pickaxe 29%, Mining coal 18%, Waiting for a free settler 18%, Deposit thinning: mining coal 15%, Coal pile full, waiting for carriers 15%
- ironmine (45 building-min): Deposit worn out: finding little iron ore 46%, Iron ore pile full, waiting for carriers 19%, Deposit thinning: mining iron ore 18%, Mining iron ore 8%, Bringing iron ore out 5%
- smelter (44 building-min): Output pile full, waiting for carriers 76%, Smelting iron 18%, Stacking outside 4%, Waiting for coal 1%, Fetching from the pile 1%
- weaponsmith (43 building-min): All weapon targets met 43%, Waiting for coal 42%, Forging bow 5%, Forging sword 4%, Forging spear 3%
- barracks (41 building-min): Waiting for weapons from the weaponsmith 46%, Waiting for a free settler to train 37%, Weapons on the way 16%, Training soldiers 2%, Idle 0%

Building sites, time per state (site-min): Waiting for materials 9, Builders at work 8, Leveling the ground 7, Waiting for a digger 5, Waiting for a builder 3.

Build order (placed at min:sec, finished at): guard 0:00→0:49, wood 0:02→1:03, quarry 0:50→1:27, saw 1:04→1:56, store 1:28→2:10, wood 1:56→2:58, forest 2:12→3:28, fisher 2:58→3:51, waterhut 3:28→4:25, farm 3:52→6:14, mill 5:44→6:50, bakery 6:14→8:11, house 7:50→9:00, quarry 8:12→9:38, wood 9:00→10:06, house 10:16→10:52, farm 10:18→12:08, house 11:22→12:22, store 12:16→12:59, guard 12:28→13:33, house 13:00→13:53, store 13:42→14:04, coalmine 14:00→14:47, house 14:12→15:09, ironmine 14:48→15:28, smelter 15:24→16:24, weaponsmith 16:06→17:10, barracks 17:36→18:39, coalmine 18:54→20:04, guard 22:44→23:24, guard 23:24→24:16.

Orders given: archers 5338, place 31, storeSlot 12, priority 4, armyTarget 3, profession 1, armyReserve 1, armyList 1, sendUnit 1. None refused.

People changing jobs: new carrier 48, carrier -> soldier 37, carrier -> worker 14, new worker 2.

People's orders (5002 in all, 4975 done): worker rest farm 266, worker gather farm 264, worker mine ironmine 201, worker mine coalmine 165, worker rest fisher 147, worker gather fisher 147, carrier haul fish fisher -> ironmine 137, worker eat ironmine 134, worker rest coalmine 133, worker rest forest 130, worker gather forest 129, worker rest wood 109, worker gather wood 107, worker rest quarry 99. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 39 soldiers, 4 guards, 2 carriers; coal signs 23, iron signs 1.


Script: 1800 turns, 0.1 ms average, worst 15 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 24/2/1692/10/60 | 30/6/2809/10/50 |
| 30 | 24/2/1692/10/60 | 50/6/3778/11/59 |
| 45 | 24/2/1692/10/60 | 66/9/6323/41/89 |
| 60 | 24/2/1692/10/60 | 75/17/11889/61/89 |
| first | - - - - - - | 9 10 14 16 32 47 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 11 16 22 41 50 56 61).

First army orders (game min:sec): 0:00 armyTarget sword=14; 0:00 armyTarget spear=10; 0:00 armyTarget bow=16; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 9 | 14 | 24 | 16 | 16 | 0 | 22 | 26 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 43 | 64 | 1692 | 3061 |
| 30 | 24 | 16 | 24 | 16 | 16 | 0 | 22 | 32 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 44 | 80 | 1692 | 3061 |
| 45 | 24 | 16 | 24 | 16 | 16 | 0 | 22 | 32 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 44 | 80 | 1692 | 3061 |
| 60 | 24 | 16 | 24 | 16 | 16 | 0 | 22 | 32 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 44 | 80 | 1692 | 3061 |

At the end: buildings (built+sites) house 5, wood 3, store 3, guard 2, quarry 2, farm 2, hq 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1.
People: carrier 44, worker 12, soldier 6, digger 2, builder 2; beds 50. Soldiers: sword 5, bow 1.

Goods produced in the game: log 78, stone 70, grain 70, plank 58, water 38, flour 38, bread 16, fish 10.
Goods consumed in the game: plank 66, stone 64, log 58, grain 38, water 16, flour 16, axe 2, pick 2, scythe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (107 building-min): Idle 100%, Soldiers on the way 0%
- wood (167 building-min): Needs a worker with an axe 30%, Log pile full, waiting for carriers 29%, No grown trees in range inside your border 28%, Felling a tree 10%, Bringing a log to the pile 3%
- quarry (110 building-min): Stone pile full, waiting for carriers 86%, Cutting stone 10%, Bringing stone to the pile 4%, Worker picking up a pickaxe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 77%, Sawing planks 13%, Waiting for logs 7%, Stacking outside 3%, Fetching from the pile 0%
- store (153 building-min): Idle 100%
- forest (57 building-min): No free ground to plant in range inside your border 74%, Planting a sapling 17%, Waiting for a free settler 8%, Worker picking up a shovel 0%, Idle 0%
- fisher (56 building-min): Fish pile full, waiting for carriers 91%, Waiting for a free settler 8%, Fishing 1%, Worker picking up a fishing rod 0%, Bringing a fish to the pile 0%
- waterhut (56 building-min): Water pile full, waiting for carriers 89%, Waiting for a free settler 7%, Fetching water 2%, Bringing water to the pile 2%, Worker on the way 0%
- farm (104 building-min): Grain pile full, waiting for carriers 87%, Sowing a field 5%, Harvesting grain 3%, Waiting for a free settler 2%, Bringing grain to the pile 2%
- mill (54 building-min): Output pile full, waiting for carriers 87%, Grinding flour 4%, Waiting for a free settler 3%, Waiting for grain 3%, Stacking outside 2%
- bakery (53 building-min): Output pile full, waiting for carriers 86%, Baking bread 7%, Waiting for flour 3%, Waiting for a free settler 2%, Stacking outside 1%
- house (243 building-min): Idle 100%

Building sites, time per state (site-min): Leveling the ground 6, Builders at work 5, Waiting for a digger 5, Waiting for materials 3, Waiting for a builder 3.

Build order (placed at min:sec, finished at): guard 0:00→0:42, wood 0:02→1:18, quarry 0:42→1:45, saw 1:20→2:10, store 1:46→2:21, wood 2:10→2:47, forest 2:22→3:15, fisher 2:48→3:37, waterhut 3:16→4:25, farm 3:38→5:32, mill 5:44→6:18, bakery 5:46→6:59, house 7:12→8:03, quarry 7:14→8:36, wood 8:04→9:20, house 9:20→10:05, farm 9:22→10:55, house 10:48→11:39, store 11:20→11:54, guard 11:40→12:40, house 11:58→13:00, store 12:40→13:15, house 13:10→14:14.

Orders given: archers 3199, place 23, storeSlot 12, armyTarget 3, priority 2, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 46, carrier -> worker 8, new worker 4.

People's orders (1770 in all, 1753 done): worker rest farm 156, worker gather farm 154, worker rest wood 80, worker rest forest 79, worker gather wood 78, worker gather forest 78, worker rest quarry 72, worker gather quarry 70, worker rest saw 59, worker toCraft saw 58, worker craft saw 58, carrier haul grain farm -> mill 44, worker rest waterhut 39, worker rest mill 39. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 6 soldiers, 2 guards, 44 carriers; coal signs 0, iron signs 0.


Script: 1800 turns, 0.1 ms average, worst 10 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 24/2/1665/10/56 | 34/6/2894/10/50 |
| 30 | 24/2/1665/10/60 | 65/12/5518/25/85 |
| 45 | 24/2/1665/10/60 | 78/20/11527/65/85 |
| 60 | 24/2/1665/10/60 | 88/29/17614/88/82 |
| first | - - - - - - | 7 8 9 12 34 30 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 12 25 38 54 65 70 80 88).

First army orders (game min:sec): 0:00 armyTarget sword=14; 0:00 armyTarget spear=10; 0:00 armyTarget bow=16; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 2 | 16 | 24 | 16 | 16 | 0 | 22 | 32 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 39 | 72 | 1665 | 2823 |
| 30 | 9 | 16 | 24 | 16 | 16 | 0 | 22 | 32 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 43 | 72 | 1665 | 2823 |
| 45 | 9 | 16 | 24 | 16 | 16 | 0 | 22 | 32 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 43 | 72 | 1665 | 2823 |
| 60 | 9 | 16 | 24 | 16 | 16 | 0 | 22 | 32 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 43 | 72 | 1665 | 2823 |

At the end: buildings (built+sites) house 5, wood 3, store 3, guard 2, quarry 2, farm 2, hq 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1.
People: carrier 43, worker 12, soldier 6, digger 2, builder 2, geologist 1; beds 50. Soldiers: sword 5, bow 1.

Goods produced in the game: stone 70, grain 70, log 63, plank 58, water 38, flour 38, bread 16, fish 10.
Goods consumed in the game: plank 66, stone 64, log 58, grain 38, water 16, flour 16, pick 3, axe 2, scythe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (107 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (168 building-min): No grown trees in range inside your border 53%, Needs a worker with an axe 31%, Felling a tree 8%, Bringing a log to the pile 4%, Waiting for a free settler 3%
- quarry (110 building-min): Stone pile full, waiting for carriers 86%, Cutting stone 10%, Bringing stone to the pile 4%, Worker picking up a pickaxe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 78%, Sawing planks 13%, Waiting for logs 6%, Stacking outside 3%, Fetching from the pile 0%
- store (154 building-min): Idle 100%
- forest (57 building-min): No free ground to plant in range inside your border 82%, Planting a sapling 9%, Waiting for a free settler 8%, Worker picking up a shovel 0%, Idle 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 91%, Waiting for a free settler 7%, Fishing 1%, Worker picking up a fishing rod 0%, Bringing a fish to the pile 0%
- waterhut (56 building-min): Water pile full, waiting for carriers 82%, Waiting for a free settler 7%, Bringing water to the pile 6%, Fetching water 5%, Idle 0%
- farm (105 building-min): Grain pile full, waiting for carriers 87%, Sowing a field 5%, Harvesting grain 3%, Waiting for a free settler 3%, Bringing grain to the pile 1%
- mill (54 building-min): Output pile full, waiting for carriers 87%, Grinding flour 4%, Waiting for a free settler 4%, Waiting for grain 3%, Stacking outside 2%
- bakery (53 building-min): Output pile full, waiting for carriers 87%, Baking bread 7%, Waiting for flour 3%, Waiting for a free settler 2%, Stacking outside 1%
- house (244 building-min): Idle 100%

Building sites, time per state (site-min): Leveling the ground 7, Builders at work 5, Waiting for a digger 5, Waiting for a builder 2, Waiting for materials 2.

Build order (placed at min:sec, finished at): guard 0:00→0:55, wood 0:02→1:18, quarry 0:56→1:36, saw 1:18→1:56, store 1:36→2:07, wood 1:56→2:37, forest 2:08→3:00, fisher 2:38→3:30, waterhut 3:00→3:51, farm 3:30→5:01, mill 5:10→5:54, bakery 5:12→6:50, house 6:56→7:42, quarry 7:06→8:05, wood 7:44→8:28, house 8:36→9:17, farm 9:04→9:59, house 10:06→10:48, store 10:28→11:11, guard 10:54→11:56, store 12:02→12:43, house 12:04→13:44, house 13:54→14:48.

Orders given: archers 3213, place 23, storeSlot 12, armyTarget 3, priority 2, profession 1, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 47, carrier -> worker 9, new worker 3.

People's orders (1624 in all, 1606 done): worker rest farm 156, worker gather farm 154, worker rest quarry 72, worker gather quarry 70, worker rest wood 65, worker gather wood 63, carrier haul log wood -> saw 62, worker rest saw 59, worker toCraft saw 58, worker craft saw 58, worker rest forest 42, worker gather forest 41, worker rest waterhut 39, worker rest mill 39. Not done (outcome: times): failed: no way (digger (no task) own-land-split) ×1.

Failed path searches (who (task) why: times): digger (no task) own-land-split 81.

Fights and contact: first saw player 1 at 54:00.

Warnings: path-fail 1. Last: 13:21 path-fail: digger (no task) failed 5 times within a minute to find a way, last to 180,119: own-land-split

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 6 soldiers, 2 guards, 43 carriers; coal signs 0, iron signs 0.


Script: 1800 turns, 0.1 ms average, worst 10 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 23/1/1387/10/50 | 24/6/2773/10/40 |
| 30 | 26/1/1397/10/50 | 33/6/3319/10/60 |
| 45 | 26/1/1397/10/50 | 64/12/6416/30/90 |
| 60 | 26/1/1397/10/50 | 75/18/12014/58/102 |
| first | 17 - 18 - - - | 7 9 32 33 51 50 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 10 21 22 30 36 52 58).

First army orders (game min:sec): 0:00 armyTarget sword=14; 0:00 armyTarget spear=10; 0:00 armyTarget bow=16; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 17 | 6 | 24 | 12 | 11 | 0 | 16 | 24 | 21 | 7 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 23 | 43 | 1387 | 2900 |
| 30 | 32 | 16 | 24 | 5 | 24 | 0 | 22 | 32 | 22 | 20 | 14 | 14 | 0 | 0 | 1 | 1 | 6 | 29 | 112 | 1397 | 2900 |
| 45 | 32 | 16 | 24 | 20 | 24 | 0 | 22 | 32 | 22 | 20 | 14 | 14 | 0 | 0 | 1 | 1 | 6 | 29 | 120 | 1397 | 2900 |
| 60 | 32 | 16 | 24 | 20 | 24 | 0 | 22 | 32 | 22 | 20 | 14 | 14 | 0 | 0 | 1 | 1 | 6 | 29 | 120 | 1397 | 2900 |

At the end: buildings (built+sites) house 4, wood 3, quarry 2, store 2, farm 2, coalmine 2, hq 1, guard 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1, ironmine 1, smelter 1, weaponsmith 1.
People: carrier 29, worker 16, soldier 8, digger 2, builder 2, geologist 1; beds 40. Soldiers: sword 6, bow 2.

Goods produced in the game: log 100, grain 92, stone 80, plank 72, water 60, flour 60, coal 50, bread 38, fish 37, ironore 36, iron 22, bow 6, spear 1, sword 1.
Goods consumed in the game: plank 80, stone 74, log 72, grain 60, water 38, flour 38, coal 30, fish 23, ironore 22, bread 14, iron 8, pick 5, axe 2, scythe 2, hammer 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (59 building-min): Idle 100%, Soldiers on the way 0%
- wood (166 building-min): Log pile full, waiting for carriers 50%, Needs a worker with an axe 30%, Felling a tree 12%, Waiting for a free settler 4%, Bringing a log to the pile 4%
- quarry (109 building-min): Stone pile full, waiting for carriers 85%, Cutting stone 11%, Bringing stone to the pile 4%, Worker picking up a pickaxe 0%, Idle 0%
- saw (58 building-min): Output pile full, waiting for carriers 71%, Sawing planks 16%, Waiting for logs 9%, Stacking outside 3%, Fetching from the pile 0%
- store (105 building-min): Idle 100%
- forest (57 building-min): No free ground to plant in range inside your border 65%, Planting a sapling 23%, Waiting for a free settler 11%, Worker picking up a shovel 1%, Idle 0%
- fisher (57 building-min): No fish in range inside your border 56%, Fish pile full, waiting for carriers 30%, Waiting for a free settler 10%, Fishing 2%, Bringing a fish to the pile 1%
- waterhut (56 building-min): Water pile full, waiting for carriers 71%, Bringing water to the pile 10%, Fetching water 10%, Waiting for a free settler 9%, Worker on the way 0%
- farm (103 building-min): Grain pile full, waiting for carriers 84%, Sowing a field 6%, Harvesting grain 4%, Waiting for a free settler 3%, Bringing grain to the pile 2%
- mill (54 building-min): Output pile full, waiting for carriers 82%, Grinding flour 6%, Waiting for a free settler 5%, Waiting for grain 4%, Stacking outside 3%
- bakery (53 building-min): Output pile full, waiting for carriers 74%, Baking bread 16%, Waiting for flour 4%, Waiting for a free settler 3%, Stacking outside 2%
- house (195 building-min): Idle 100%
- coalmine (89 building-min): Needs a worker with a pickaxe 48%, Coal pile full, waiting for carriers 41%, Mining coal 9%, Bringing coal out 2%, Worker picking up a pickaxe 0%
- ironmine (46 building-min): Iron ore pile full, waiting for carriers 73%, Needs meat or fish: mining stopped 12%, Mining iron ore 11%, Bringing iron ore out 2%, Deposit thinning: mining iron ore 1%
- smelter (44 building-min): Output pile full, waiting for carriers 91%, Smelting iron 6%, Stacking outside 1%, Waiting for iron ore 0%, Worker picking up a hammer 0%
- weaponsmith (43 building-min): Output pile full, waiting for carriers 89%, Waiting for coal 7%, Forging bow 2%, Stacking outside 1%, Worker picking up a hammer 0%

Building sites, time per state (site-min): Builders at work 6, Leveling the ground 6, Waiting for a digger 6, Waiting for materials 5, Waiting for a builder 4.

Build order (placed at min:sec, finished at): guard 0:00→0:42, wood 0:02→1:04, quarry 0:42→1:25, saw 1:04→1:44, store 1:26→1:56, wood 1:46→2:12, forest 1:58→2:32, fisher 2:14→3:04, waterhut 2:34→3:59, farm 3:06→5:11, mill 4:00→6:29, bakery 6:26→7:26, house 6:36→8:45, quarry 8:32→9:09, house 9:38→10:39, wood 9:40→11:05, farm 10:40→12:05, house 11:46→12:23, store 12:16→12:50, house 12:34→13:22, coalmine 13:04→13:41, ironmine 13:54→14:25, smelter 15:02→16:25, weaponsmith 15:08→17:00, coalmine 16:32→17:26.

Orders given: archers 1779, place 25, storeSlot 8, armyTarget 3, armyReserve 1, armyList 1, priority 1, profession 1, sendUnit 1. None refused.

People changing jobs: new carrier 37, carrier -> worker 13, new worker 3, carrier -> geologist 1.

People's orders (2918 in all, 2899 done): worker rest farm 193, worker gather farm 191, worker rest forest 106, worker gather forest 105, worker rest wood 102, worker gather wood 100, worker rest quarry 82, worker gather quarry 80, worker rest saw 73, worker toCraft saw 72, worker craft saw 72, carrier haul log wood -> saw 63, worker rest waterhut 61, worker rest mill 61. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 8 soldiers, 1 guards, 29 carriers; coal signs 12, iron signs 18.


Script: 1800 turns, 0.3 ms average, worst 12 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 23/2/1640/10/50 | 25/6/3049/10/40 |
| 30 | 29/2/1665/10/60 | 47/6/3643/10/70 |
| 45 | 29/2/1665/10/60 | 73/14/8590/46/91 |
| 60 | 29/2/1665/10/60 | 82/22/14422/69/91 |
| first | 19 - 20 - - - | 14 15 16 19 38 45 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 10 18 42 46 57 64 69).

First army orders (game min:sec): 0:00 armyTarget sword=14; 0:00 armyTarget spear=10; 0:00 armyTarget bow=16; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 13 | 8 | 27 | 16 | 12 | 0 | 21 | 9 | 21 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 41 | 1640 | 3234 |
| 30 | 32 | 16 | 24 | 20 | 24 | 0 | 22 | 32 | 22 | 28 | 22 | 22 | 0 | 0 | 1 | 1 | 6 | 39 | 120 | 1665 | 3247 |
| 45 | 32 | 16 | 24 | 20 | 24 | 0 | 22 | 32 | 22 | 28 | 22 | 22 | 0 | 0 | 1 | 1 | 6 | 39 | 120 | 1665 | 3247 |
| 60 | 32 | 16 | 24 | 20 | 24 | 0 | 22 | 32 | 22 | 28 | 22 | 22 | 0 | 0 | 1 | 1 | 6 | 39 | 120 | 1665 | 3247 |

At the end: buildings (built+sites) house 5, wood 3, store 3, guard 2, quarry 2, farm 2, coalmine 2, hq 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1, ironmine 1, smelter 1, weaponsmith 1.
People: carrier 39, worker 16, soldier 6, digger 2, builder 2, geologist 1; beds 50. Soldiers: sword 5, bow 1.

Goods produced in the game: log 107, grain 94, stone 86, plank 79, coal 66, water 62, flour 62, fish 59, ironore 52, bread 40, iron 30, bow 6, sword 1, spear 1.
Goods consumed in the game: plank 87, stone 80, log 79, grain 62, fish 45, water 40, flour 40, coal 38, ironore 30, bread 16, iron 8, pick 5, axe 2, scythe 2, hammer 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (105 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (165 building-min): Log pile full, waiting for carriers 47%, Needs a worker with an axe 30%, Felling a tree 14%, Bringing a log to the pile 5%, Waiting for a free settler 4%
- quarry (108 building-min): Stone pile full, waiting for carriers 83%, Cutting stone 12%, Bringing stone to the pile 5%, Worker picking up a pickaxe 0%, Idle 0%
- saw (58 building-min): Output pile full, waiting for carriers 69%, Sawing planks 17%, Waiting for logs 9%, Stacking outside 4%, Fetching from the pile 1%
- store (149 building-min): Idle 100%
- forest (57 building-min): No free ground to plant in range inside your border 60%, Planting a sapling 28%, Waiting for a free settler 11%, Worker picking up a shovel 0%, Idle 0%
- fisher (56 building-min): Fish pile full, waiting for carriers 80%, Waiting for a free settler 10%, Fishing 5%, Bringing a fish to the pile 4%, Worker picking up a fishing rod 1%
- waterhut (55 building-min): Water pile full, waiting for carriers 83%, Waiting for a free settler 8%, Fetching water 5%, Bringing water to the pile 4%, Worker on the way 0%
- farm (101 building-min): Grain pile full, waiting for carriers 80%, Sowing a field 8%, Harvesting grain 5%, Bringing grain to the pile 3%, Waiting for a free settler 3%
- mill (53 building-min): Output pile full, waiting for carriers 81%, Grinding flour 7%, Waiting for grain 4%, Waiting for a free settler 4%, Stacking outside 3%
- bakery (52 building-min): Output pile full, waiting for carriers 74%, Baking bread 18%, Waiting for flour 2%, Stacking outside 2%, Waiting for a free settler 2%
- house (239 building-min): Idle 100%
- coalmine (85 building-min): Needs a worker with a pickaxe 47%, Coal pile full, waiting for carriers 39%, Mining coal 11%, Bringing coal out 2%, Worker picking up a pickaxe 0%
- ironmine (44 building-min): Iron ore pile full, waiting for carriers 71%, Deposit thinning: mining iron ore 14%, Mining iron ore 9%, Bringing iron ore out 3%, Came back empty-handed 1%
- smelter (41 building-min): Output pile full, waiting for carriers 88%, Smelting iron 9%, Stacking outside 2%, Worker picking up a hammer 0%, Fetching from the pile 0%
- weaponsmith (41 building-min): Output pile full, waiting for carriers 96%, Forging bow 2%, Worker picking up a hammer 1%, Stacking outside 1%, Forging sword 0%

Building sites, time per state (site-min): Waiting for materials 8, Builders at work 7, Leveling the ground 6, Waiting for a digger 6, Waiting for a builder 3.

Build order (placed at min:sec, finished at): guard 0:00→0:54, wood 0:02→1:09, quarry 0:54→1:34, saw 1:10→1:57, store 1:36→2:05, wood 1:58→2:34, forest 2:06→2:47, fisher 2:34→3:44, waterhut 2:48→4:41, farm 3:44→6:39, mill 4:42→7:29, bakery 6:46→8:25, house 8:28→9:18, quarry 8:30→10:21, house 10:20→10:57, wood 10:22→11:15, house 11:06→11:49, farm 11:40→12:40, house 12:36→13:32, store 13:04→13:48, guard 13:32→14:05, store 14:16→14:47, house 14:18→15:09, coalmine 14:48→15:25, ironmine 15:10→15:40, smelter 17:50→18:38, weaponsmith 17:52→19:21, coalmine 18:46→19:49.

Orders given: archers 3150, place 28, storeSlot 12, armyTarget 3, priority 2, armyReserve 1, armyList 1, profession 1, sendUnit 1. None refused.

People changing jobs: new carrier 48, carrier -> worker 14, new worker 2, carrier -> geologist 1.

People's orders (3435 in all, 3414 done): worker rest farm 200, worker gather farm 198, worker rest forest 127, worker gather forest 126, worker rest wood 109, worker gather wood 107, worker rest quarry 88, worker mine ironmine 88, worker gather quarry 86, worker rest saw 80, worker toCraft saw 79, worker craft saw 79, worker mine coalmine 74, worker rest coalmine 67. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 6 soldiers, 2 guards, 39 carriers; coal signs 26, iron signs 8.


Script: 1800 turns, 0.3 ms average, worst 16 ms, 0 over 0.3 s, 0 errors. Orders refused: none.
