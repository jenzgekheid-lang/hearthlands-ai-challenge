# Tournament: chatgpt

Game version 196. Written for: chatgpt not stated.

- chatgpt: hearthlands-ai-challenge, commit 7131963

Maps 20261030, 777, 4242, 31, each twice (sides swapped), up to 60 game minutes (1x). 32 s.

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
| 30 | 28/1/1430/10/60 | 65/11/6250/23/97 |
| 45 | 28/1/1430/10/60 | 75/18/11142/47/113 |
| 60 | 28/1/1430/10/60 | 84/26/16417/80/100 |
| first | 17 18 19 - - - | 8 8 20 21 29 28 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 14 23 33 43 47 63 72 80).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 5 | 18 | 19 | 11 | 0 | 21 | 0 | 14 | 8 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 23 | 34 | 1402 | 2791 |
| 30 | 32 | 16 | 24 | 20 | 24 | 0 | 22 | 24 | 22 | 34 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 39 | 96 | 1430 | 2795 |
| 45 | 32 | 16 | 24 | 20 | 24 | 0 | 22 | 24 | 22 | 34 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 39 | 96 | 1430 | 2795 |
| 60 | 32 | 16 | 24 | 20 | 24 | 0 | 22 | 24 | 22 | 34 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 39 | 96 | 1430 | 2795 |

At the end: buildings (built+sites) house 5, wood 3, store 3, quarry 2, coalmine 2, hq 1, guard 1, saw 1, forest 1, fisher 1, waterhut 1, farm 1, mill 1, bakery 1, ironmine 1, smelter 1, smith 1, weaponsmith 1.
People: carrier 39, worker 16, soldier 8, digger 2, builder 2, geologist 1; beds 50. Soldiers: sword 6, bow 2.

Goods produced in the game: log 102, stone 82, grain 78, plank 74, water 54, flour 54, coal 34, bread 32, fish 27, ironore 22.
Goods consumed in the game: plank 82, stone 76, log 74, grain 54, water 32, flour 32, fish 13, bread 8, pick 5, hammer 3, axe 2, saw 1, shovel 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (59 building-min): Idle 100%, Soldiers on the way 0%
- wood (164 building-min): Log pile full, waiting for carriers 50%, Needs a worker with an axe 29%, Felling a tree 12%, Waiting for a free settler 5%, Bringing a log to the pile 4%
- quarry (108 building-min): Stone pile full, waiting for carriers 78%, Cutting stone 13%, Bringing stone to the pile 7%, No stone in range inside your border 1%, Worker picking up a pickaxe 0%
- saw (58 building-min): Output pile full, waiting for carriers 70%, Sawing planks 16%, Waiting for logs 10%, Stacking outside 3%, Worker picking up a saw 0%
- store (148 building-min): Idle 100%
- forest (57 building-min): No free ground to plant in range inside your border 67%, Planting a sapling 20%, Waiting for a free settler 13%, Worker picking up a shovel 0%, Idle 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 84%, Waiting for a free settler 12%, Fishing 2%, Bringing a fish to the pile 1%, Worker picking up a fishing rod 0%
- waterhut (56 building-min): Water pile full, waiting for carriers 78%, Waiting for a free settler 11%, Fetching water 6%, Bringing water to the pile 4%, Worker on the way 0%
- farm (54 building-min): Grain pile full, waiting for carriers 71%, Sowing a field 10%, Waiting for a free settler 8%, Harvesting grain 7%, Bringing grain to the pile 3%
- mill (53 building-min): Output pile full, waiting for carriers 80%, Grinding flour 6%, Waiting for grain 5%, Waiting for a free settler 5%, Stacking outside 3%
- bakery (51 building-min): Output pile full, waiting for carriers 79%, Baking bread 14%, Waiting for flour 2%, Stacking outside 2%, Waiting for a free settler 1%
- house (240 building-min): Idle 100%
- coalmine (88 building-min): Needs a worker with a pickaxe 47%, Coal pile full, waiting for carriers 46%, Mining coal 5%, Bringing coal out 1%, Worker picking up a pickaxe 0%
- ironmine (46 building-min): Iron ore pile full, waiting for carriers 91%, Mining iron ore 6%, Bringing iron ore out 1%, Worker picking up a pickaxe 1%, Fetching food 0%
- smelter (43 building-min): Needs a worker with a hammer 100%, Idle 0%
- smith (43 building-min): Needs a worker with a hammer 100%, Idle 0%
- weaponsmith (42 building-min): Needs a worker with a hammer 100%

Building sites, time per state (site-min): Waiting for materials 8, Builders at work 7, Leveling the ground 6, Waiting for a digger 4, Waiting for a builder 3.

Build order (placed at min:sec, finished at): guard 0:00→0:51, wood 0:02→1:10, quarry 0:52→1:29, saw 1:10→1:50, store 1:30→1:58, wood 1:50→2:19, forest 1:58→2:37, fisher 2:20→3:18, waterhut 2:38→3:43, farm 3:18→5:38, mill 4:54→7:02, bakery 6:32→9:22, house 7:02→9:53, house 10:02→10:40, quarry 10:10→10:59, house 11:08→11:51, store 11:36→12:05, wood 12:00→12:31, house 12:18→12:51, coalmine 12:50→13:26, ironmine 13:30→14:00, house 14:02→14:57, smelter 16:16→16:54, smith 16:22→17:26, store 16:54→17:36, weaponsmith 17:28→18:27, coalmine 17:42→18:47.

Orders given: archers 1774, profession 144, place 27, storeSlot 12, armyTarget 3, armyReserve 1, armyList 1, priority 1, sendUnit 1. Refused (order: reason, times): weaponKeep: refused ×3.

People changing jobs: new carrier 46, carrier -> worker 12, new worker 4, carrier -> geologist 1.

People's orders (2523 in all, 2507 done): worker rest farm 163, worker gather farm 162, worker rest wood 104, worker gather wood 102, worker rest forest 98, worker gather forest 97, worker rest quarry 84, worker gather quarry 82, worker rest saw 75, worker toCraft saw 74, worker craft saw 74, carrier haul log wood -> store 61, carrier haul grain farm -> mill 60, worker rest waterhut 55. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 8 soldiers, 1 guards, 39 carriers; coal signs 22, iron signs 21.


Script: 1800 turns, 0.4 ms average, worst 16 ms, 0 over 0.3 s, 0 errors. Orders refused: weaponKeep 3 of 3.

### Map 31: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 24/1/1404/10/60 | 31/6/2862/10/50 |
| 30 | 24/1/1404/10/60 | 67/14/6275/29/91 |
| 45 | 24/1/1404/10/60 | 80/20/11135/61/109 |
| 60 | 24/1/1404/10/60 | 87/27/17253/78/92 |
| first | - - - - - - | 11 12 13 17 36 34 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 19 29 47 58 61 65 72 78).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 12 | 10 | 23 | 16 | 14 | 0 | 21 | 22 | 21 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 35 | 54 | 1404 | 2537 |
| 30 | 32 | 16 | 24 | 16 | 20 | 0 | 22 | 32 | 22 | 16 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 39 | 96 | 1404 | 2537 |
| 45 | 32 | 16 | 24 | 16 | 20 | 0 | 22 | 32 | 22 | 16 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 39 | 96 | 1404 | 2537 |
| 60 | 32 | 16 | 24 | 16 | 20 | 0 | 22 | 32 | 22 | 16 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 39 | 96 | 1404 | 2537 |

At the end: buildings (built+sites) house 5, wood 3, store 3, quarry 2, farm 2, hq 1, guard 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1, coalmine 1.
People: carrier 39, worker 16, soldier 8, digger 2, builder 2, geologist 1; beds 50. Soldiers: sword 6, bow 2.

Goods produced in the game: log 88, grain 78, stone 68, plank 60, water 46, flour 46, bread 24, coal 16, fish 10.
Goods consumed in the game: plank 68, stone 62, log 60, grain 46, water 24, flour 24, pick 4, bread 4, hammer 3, axe 2, scythe 2, saw 1, shovel 1, rod 1.

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
- mill (54 building-min): Output pile full, waiting for carriers 85%, Grinding flour 5%, Waiting for a free settler 4%, Waiting for grain 3%, Stacking outside 2%
- bakery (53 building-min): Output pile full, waiting for carriers 82%, Baking bread 10%, Waiting for flour 3%, Waiting for a free settler 2%, Stacking outside 1%
- house (242 building-min): Idle 100%
- coalmine (47 building-min): Coal pile full, waiting for carriers 94%, Mining coal 4%, Bringing coal out 1%, Worker picking up a pickaxe 1%, Fetching food 0%

Building sites, time per state (site-min): Leveling the ground 6, Builders at work 5, Waiting for materials 5, Waiting for a digger 5, Waiting for a builder 3.

Build order (placed at min:sec, finished at): guard 0:00→0:42, wood 0:02→0:56, quarry 0:42→1:14, saw 0:56→1:38, store 1:16→1:46, wood 1:38→2:29, forest 1:46→2:54, fisher 2:30→3:24, waterhut 2:56→4:09, farm 3:26→5:52, mill 4:10→6:18, bakery 6:26→7:17, house 6:54→8:14, quarry 8:20→9:02, wood 8:22→9:43, house 9:02→10:07, farm 9:58→11:25, house 10:28→11:50, store 11:28→12:00, coalmine 11:52→12:45, house 12:30→13:04, store 13:00→13:36, house 13:16→14:22.

Orders given: archers 1779, profession 143, place 23, storeSlot 12, armyTarget 3, armyReserve 1, armyList 1, priority 1, sendUnit 1. Refused (order: reason, times): weaponKeep: refused ×3.

People changing jobs: new carrier 48, carrier -> worker 14, new worker 2, carrier -> geologist 1.

People's orders (1985 in all, 1969 done): worker rest farm 163, worker gather farm 161, worker rest forest 91, worker rest wood 90, worker gather forest 90, worker gather wood 88, worker rest quarry 70, worker gather quarry 68, worker rest saw 61, worker toCraft saw 60, worker craft saw 60, worker rest waterhut 47, worker rest mill 47, worker gather waterhut 46. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 8 soldiers, 1 guards, 39 carriers; coal signs 10, iron signs 1.


Script: 1800 turns, 0.3 ms average, worst 12 ms, 0 over 0.3 s, 0 errors. Orders refused: weaponKeep 3 of 3.

### Map 777: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 18/1/1371/10/40 | 33/6/2488/10/50 |
| 30 | 27/1/1416/10/60 | 50/7/4023/12/78 |
| 45 | 27/1/1416/10/60 | 72/16/10159/45/85 |
| 60 | 27/1/1416/10/60 | 80/23/14409/65/85 |
| first | 19 20 - - - - | 10 11 15 15 25 37 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 11 12 16 34 45 55 60 65).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 21 | 14 | 7 | 0 | 13 | 4 | 9 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 15 | 30 | 1371 | 2807 |
| 30 | 32 | 16 | 24 | 23 | 20 | 0 | 22 | 32 | 22 | 28 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 37 | 101 | 1416 | 2807 |
| 45 | 32 | 16 | 24 | 24 | 20 | 0 | 22 | 32 | 22 | 28 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 38 | 104 | 1416 | 2807 |
| 60 | 32 | 16 | 24 | 24 | 20 | 0 | 22 | 32 | 22 | 28 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 38 | 104 | 1416 | 2807 |

At the end: buildings (built+sites) house 5, wood 3, store 3, quarry 2, farm 2, hq 1, guard 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1, coalmine 1, ironmine 1, smelter 1, smith 1.
People: carrier 38, worker 17, soldier 8, digger 2, builder 2, geologist 1; beds 50. Soldiers: sword 6, bow 2.

Goods produced in the game: log 99, grain 81, stone 80, plank 71, fish 69, water 49, flour 49, coal 28, bread 27, ironore 22.
Goods consumed in the game: plank 79, stone 74, log 71, fish 51, grain 49, water 27, flour 27, bread 7, pick 5, hammer 3, axe 2, scythe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (59 building-min): Idle 100%, Soldiers on the way 0%
- wood (162 building-min): Log pile full, waiting for carriers 50%, Needs a worker with an axe 28%, Felling a tree 13%, Waiting for a free settler 5%, Bringing a log to the pile 4%
- quarry (106 building-min): Stone pile full, waiting for carriers 84%, Cutting stone 11%, Bringing stone to the pile 4%, Worker picking up a pickaxe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 67%, Sawing planks 16%, Waiting for logs 13%, Stacking outside 3%, Worker picking up a saw 1%
- store (143 building-min): Idle 100%
- forest (57 building-min): No free ground to plant in range inside your border 61%, Planting a sapling 24%, Waiting for a free settler 14%, Worker picking up a shovel 0%, Idle 0%
- fisher (56 building-min): Fish pile full, waiting for carriers 70%, Waiting for a free settler 13%, Fishing 9%, Bringing a fish to the pile 8%, Worker picking up a fishing rod 1%
- waterhut (55 building-min): Water pile full, waiting for carriers 82%, Waiting for a free settler 12%, Fetching water 3%, Bringing water to the pile 2%, Idle 0%
- farm (98 building-min): Grain pile full, waiting for carriers 80%, Sowing a field 8%, Harvesting grain 5%, Waiting for a free settler 4%, Bringing grain to the pile 3%
- mill (51 building-min): Output pile full, waiting for carriers 82%, Grinding flour 5%, Waiting for a free settler 5%, Waiting for grain 4%, Stacking outside 3%
- bakery (49 building-min): Output pile full, waiting for carriers 82%, Baking bread 12%, Waiting for flour 3%, Stacking outside 1%, Waiting for a free settler 1%
- house (230 building-min): Idle 100%
- coalmine (43 building-min): Coal pile full, waiting for carriers 88%, Mining coal 10%, Bringing coal out 2%, Worker picking up a pickaxe 1%, Came back empty-handed 0%
- ironmine (42 building-min): Iron ore pile full, waiting for carriers 68%, Deposit worn out: finding little iron ore 29%, Bringing iron ore out 1%, Worker picking up a pickaxe 1%, Came back empty-handed 1%
- smelter (41 building-min): Needs a worker with a hammer 100%
- smith (41 building-min): Needs a worker with a hammer 100%

Building sites, time per state (site-min): Waiting for materials 11, Builders at work 6, Leveling the ground 6, Waiting for a digger 5, Waiting for a builder 3.

Build order (placed at min:sec, finished at): guard 0:00→0:39, wood 0:02→1:00, quarry 0:40→1:24, saw 1:02→2:04, store 1:24→2:21, wood 2:04→2:52, forest 2:22→3:09, fisher 2:52→3:41, waterhut 3:10→4:42, farm 3:42→7:16, mill 4:42→8:38, bakery 8:12→10:57, house 8:42→11:14, house 11:40→12:31, quarry 11:42→12:52, house 13:18→13:58, wood 13:26→14:16, farm 14:04→15:13, house 14:22→15:33, house 15:46→16:37, store 15:56→16:52, coalmine 16:38→17:10, ironmine 16:54→17:33, store 17:30→17:58, smelter 18:06→18:51, smith 18:36→19:20.

Orders given: archers 1780, profession 137, place 26, storeSlot 12, armyTarget 3, armyReserve 1, armyList 1, priority 1, sendUnit 1. Refused (order: reason, times): weaponKeep: refused ×3.

People changing jobs: new carrier 45, carrier -> worker 12, new worker 5, carrier -> geologist 1.

People's orders (2705 in all, 2688 done): worker rest farm 179, worker gather farm 177, worker rest forest 109, worker gather forest 108, worker rest wood 101, worker gather wood 99, worker rest quarry 82, worker gather quarry 80, worker rest saw 72, worker toCraft saw 71, worker craft saw 71, worker rest fisher 70, worker gather fisher 69, worker mine ironmine 65. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 8 soldiers, 1 guards, 38 carriers; coal signs 11, iron signs 3.


Script: 1800 turns, 0.3 ms average, worst 14 ms, 0 over 0.3 s, 0 errors. Orders refused: weaponKeep 3 of 3.

### Map 777: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 24/2/1687/10/50 | 33/6/2646/10/53 |
| 30 | 30/2/1709/10/60 | 51/6/3537/10/60 |
| 45 | 30/2/1709/10/60 | 64/9/5913/37/83 |
| 60 | 30/2/1709/10/60 | 70/16/11076/55/85 |
| first | 17 17 19 20 - - | 10 11 13 16 41 47 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 10 10 18 37 44 52 55).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 2 | 7 | 28 | 16 | 14 | 0 | 17 | 13 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 35 | 1687 | 3666 |
| 30 | 19 | 16 | 24 | 20 | 20 | 0 | 22 | 32 | 22 | 34 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 38 | 90 | 1709 | 3666 |
| 45 | 24 | 16 | 24 | 20 | 20 | 0 | 22 | 32 | 22 | 34 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 38 | 96 | 1709 | 3666 |
| 60 | 24 | 16 | 24 | 20 | 20 | 0 | 22 | 32 | 22 | 34 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 38 | 96 | 1709 | 3666 |

At the end: buildings (built+sites) house 5, wood 3, store 3, guard 2, quarry 2, farm 2, hq 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1, coalmine 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1.
People: carrier 38, worker 17, soldier 6, digger 2, builder 2, geologist 1; beds 50. Soldiers: sword 5, bow 1.

Goods produced in the game: log 102, stone 95, plank 82, grain 82, water 50, flour 50, coal 34, fish 30, bread 28, ironore 22.
Goods consumed in the game: plank 90, stone 89, log 82, grain 50, water 28, flour 28, fish 16, bread 8, pick 5, hammer 3, axe 2, scythe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (106 building-min): Idle 100%, Soldiers on the way 0%
- wood (166 building-min): Needs a worker with an axe 30%, No grown trees in range inside your border 29%, Log pile full, waiting for carriers 19%, Felling a tree 13%, Bringing a log to the pile 5%
- quarry (109 building-min): Stone pile full, waiting for carriers 80%, Cutting stone 13%, Bringing stone to the pile 6%, Worker picking up a pickaxe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 61%, Sawing planks 18%, Waiting for logs 16%, Stacking outside 4%, Worker picking up a saw 1%
- store (151 building-min): Idle 100%
- forest (57 building-min): No free ground to plant in range inside your border 59%, Planting a sapling 31%, Waiting for a free settler 10%, Worker picking up a shovel 0%, Idle 0%
- fisher (56 building-min): Fish pile full, waiting for carriers 84%, Waiting for a free settler 9%, Fishing 3%, Bringing a fish to the pile 3%, Worker picking up a fishing rod 0%
- waterhut (56 building-min): Water pile full, waiting for carriers 75%, Bringing water to the pile 9%, Waiting for a free settler 8%, Fetching water 8%, Idle 0%
- farm (102 building-min): Grain pile full, waiting for carriers 85%, Sowing a field 6%, Harvesting grain 4%, Waiting for a free settler 3%, Bringing grain to the pile 2%
- mill (53 building-min): Output pile full, waiting for carriers 82%, Grinding flour 6%, Waiting for a free settler 4%, Waiting for grain 4%, Stacking outside 3%
- bakery (52 building-min): Output pile full, waiting for carriers 80%, Baking bread 12%, Waiting for flour 3%, Waiting for a free settler 2%, Stacking outside 2%
- house (239 building-min): Idle 100%
- coalmine (45 building-min): Coal pile full, waiting for carriers 87%, Mining coal 10%, Bringing coal out 2%, Worker picking up a pickaxe 1%, Fetching food 0%
- ironmine (45 building-min): Iron ore pile full, waiting for carriers 89%, Mining iron ore 8%, Bringing iron ore out 1%, Worker picking up a pickaxe 1%, Fetching food 0%
- smelter (44 building-min): Needs a worker with a hammer 100%
- smith (43 building-min): Needs a worker with a hammer 100%
- weaponsmith (42 building-min): Needs a worker with a hammer 100%, Idle 0%
- barracks (40 building-min): Waiting for weapons from the weaponsmith 100%

Building sites, time per state (site-min): Waiting for materials 9, Builders at work 7, Leveling the ground 7, Waiting for a digger 5, Waiting for a builder 3.

Build order (placed at min:sec, finished at): guard 0:00→0:49, wood 0:02→1:03, quarry 0:50→1:27, saw 1:04→1:56, store 1:28→2:10, wood 1:56→2:58, forest 2:12→3:28, fisher 2:58→3:51, waterhut 3:28→4:25, farm 3:52→6:14, mill 5:44→6:50, bakery 6:14→8:11, house 7:50→9:00, quarry 8:12→9:38, wood 9:00→10:06, house 10:16→10:52, farm 10:18→12:08, house 11:22→12:22, store 12:16→12:59, guard 12:28→13:33, house 13:00→13:53, store 13:42→14:04, coalmine 13:58→14:44, house 14:12→15:07, ironmine 14:46→15:28, smelter 15:24→16:25, smith 16:06→16:52, weaponsmith 16:58→18:25, barracks 18:40→19:44.

Orders given: archers 3168, profession 142, place 29, storeSlot 12, armyTarget 3, priority 2, armyReserve 1, armyList 1, sendUnit 1. Refused (order: reason, times): weaponKeep: refused ×3.

People changing jobs: new carrier 48, carrier -> worker 15, new worker 2.

People's orders (2617 in all, 2598 done): worker rest farm 181, worker gather farm 179, worker rest forest 126, worker gather forest 125, worker rest wood 104, worker gather wood 102, worker rest quarry 97, worker gather quarry 95, worker rest saw 83, worker toCraft saw 82, worker craft saw 82, carrier haul log wood -> saw 78, worker rest waterhut 51, worker rest mill 51. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 6 soldiers, 2 guards, 38 carriers; coal signs 19, iron signs 9.


Script: 1800 turns, 0.1 ms average, worst 13 ms, 0 over 0.3 s, 0 errors. Orders refused: weaponKeep 3 of 3.

### Map 4242: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 24/2/1692/10/60 | 30/6/2809/10/50 |
| 30 | 24/2/1692/10/60 | 50/6/3778/11/59 |
| 45 | 24/2/1692/10/60 | 66/9/6323/41/89 |
| 60 | 24/2/1692/10/60 | 75/17/11889/61/89 |
| first | - - - - - - | 9 10 14 16 32 47 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 11 16 22 41 50 56 61).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 9 | 14 | 24 | 16 | 16 | 0 | 22 | 26 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 40 | 64 | 1692 | 3061 |
| 30 | 24 | 16 | 24 | 16 | 16 | 0 | 22 | 32 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 41 | 80 | 1692 | 3061 |
| 45 | 24 | 16 | 24 | 16 | 16 | 0 | 22 | 32 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 41 | 80 | 1692 | 3061 |
| 60 | 24 | 16 | 24 | 16 | 16 | 0 | 22 | 32 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 41 | 80 | 1692 | 3061 |

At the end: buildings (built+sites) house 5, wood 3, store 3, guard 2, quarry 2, farm 2, hq 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1.
People: carrier 41, worker 15, soldier 6, digger 2, builder 2; beds 50. Soldiers: sword 5, bow 1.

Goods produced in the game: log 78, stone 70, grain 70, plank 58, water 38, flour 38, bread 16, fish 10.
Goods consumed in the game: plank 66, stone 64, log 58, grain 38, water 16, flour 16, hammer 3, axe 2, pick 2, scythe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (107 building-min): Idle 100%, Soldiers on the way 0%
- wood (167 building-min): Needs a worker with an axe 30%, Log pile full, waiting for carriers 29%, No grown trees in range inside your border 28%, Felling a tree 10%, Bringing a log to the pile 3%
- quarry (110 building-min): Stone pile full, waiting for carriers 86%, Cutting stone 10%, Bringing stone to the pile 4%, Worker picking up a pickaxe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 77%, Sawing planks 13%, Waiting for logs 7%, Stacking outside 3%, Fetching from the pile 0%
- store (153 building-min): Idle 100%
- forest (57 building-min): No free ground to plant in range inside your border 75%, Planting a sapling 17%, Waiting for a free settler 8%, Worker picking up a shovel 0%, Idle 0%
- fisher (56 building-min): Fish pile full, waiting for carriers 91%, Waiting for a free settler 8%, Fishing 1%, Worker picking up a fishing rod 0%, Bringing a fish to the pile 0%
- waterhut (56 building-min): Water pile full, waiting for carriers 89%, Waiting for a free settler 7%, Fetching water 2%, Bringing water to the pile 2%, Worker on the way 0%
- farm (104 building-min): Grain pile full, waiting for carriers 87%, Sowing a field 5%, Harvesting grain 3%, Waiting for a free settler 2%, Bringing grain to the pile 2%
- mill (54 building-min): Output pile full, waiting for carriers 87%, Grinding flour 4%, Waiting for a free settler 3%, Waiting for grain 3%, Stacking outside 2%
- bakery (53 building-min): Output pile full, waiting for carriers 86%, Baking bread 7%, Waiting for flour 3%, Waiting for a free settler 2%, Stacking outside 1%
- house (243 building-min): Idle 100%

Building sites, time per state (site-min): Leveling the ground 6, Builders at work 5, Waiting for a digger 5, Waiting for materials 3, Waiting for a builder 3.

Build order (placed at min:sec, finished at): guard 0:00→0:42, wood 0:02→1:18, quarry 0:42→1:45, saw 1:20→2:10, store 1:46→2:21, wood 2:10→2:47, forest 2:22→3:15, fisher 2:48→3:37, waterhut 3:16→4:25, farm 3:38→5:32, mill 5:44→6:18, bakery 5:46→6:59, house 7:12→8:03, quarry 7:14→8:36, wood 8:04→9:20, house 9:20→10:05, farm 9:22→10:55, house 10:48→11:39, store 11:20→11:54, guard 11:40→12:40, house 11:58→13:00, store 12:40→13:15, house 13:10→14:14.

Orders given: archers 3199, profession 144, place 23, storeSlot 12, armyTarget 3, priority 2, armyReserve 1, armyList 1. Refused (order: reason, times): weaponKeep: refused ×3.

People changing jobs: new carrier 46, carrier -> worker 11, new worker 4.

People's orders (1773 in all, 1756 done): worker rest farm 156, worker gather farm 154, worker rest wood 80, worker rest forest 79, worker gather wood 78, worker gather forest 78, worker rest quarry 72, worker gather quarry 70, worker rest saw 59, worker toCraft saw 58, worker craft saw 58, carrier haul grain farm -> mill 44, worker rest waterhut 39, worker rest mill 39. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 6 soldiers, 2 guards, 41 carriers; coal signs 0, iron signs 0.


Script: 1800 turns, 0.1 ms average, worst 8 ms, 0 over 0.3 s, 0 errors. Orders refused: weaponKeep 3 of 3.

### Map 4242: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 24/2/1656/10/60 | 32/6/2744/10/50 |
| 30 | 24/2/1656/10/60 | 66/15/6438/26/84 |
| 45 | 24/2/1656/10/60 | 76/18/9337/55/95 |
| 60 | 24/2/1656/10/60 | 83/24/15085/72/98 |
| first | - - - - - - | 7 8 9 12 44 42 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 13 20 26 44 48 55 60 68 72).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 1 | 16 | 24 | 16 | 16 | 0 | 22 | 31 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 40 | 72 | 1656 | 2960 |
| 30 | 2 | 16 | 24 | 16 | 16 | 0 | 22 | 32 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 40 | 72 | 1656 | 2960 |
| 45 | 2 | 16 | 24 | 16 | 16 | 0 | 22 | 32 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 40 | 72 | 1656 | 2960 |
| 60 | 2 | 16 | 24 | 16 | 16 | 0 | 22 | 32 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 40 | 72 | 1656 | 2960 |

At the end: buildings (built+sites) house 5, wood 3, store 3, guard 2, quarry 2, farm 2, hq 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1.
People: carrier 40, worker 15, soldier 6, digger 2, builder 2, geologist 1; beds 50. Soldiers: sword 5, bow 1.

Goods produced in the game: stone 70, grain 70, plank 58, log 56, water 38, flour 38, bread 16, fish 10.
Goods consumed in the game: plank 66, stone 64, log 58, grain 38, water 16, flour 16, pick 3, hammer 3, axe 2, scythe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (108 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (168 building-min): No grown trees in range inside your border 55%, Needs a worker with an axe 31%, Felling a tree 7%, Waiting for a free settler 3%, Bringing a log to the pile 3%
- quarry (110 building-min): Stone pile full, waiting for carriers 86%, Cutting stone 10%, Bringing stone to the pile 4%, Worker picking up a pickaxe 0%, Idle 0%
- saw (58 building-min): Output pile full, waiting for carriers 78%, Sawing planks 13%, Waiting for logs 6%, Stacking outside 3%, Fetching from the pile 0%
- store (152 building-min): Idle 100%
- forest (57 building-min): No free ground to plant in range inside your border 82%, Planting a sapling 9%, Waiting for a free settler 8%, Worker picking up a shovel 0%, Idle 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 91%, Waiting for a free settler 8%, Fishing 1%, Worker picking up a fishing rod 0%, Bringing a fish to the pile 0%
- waterhut (56 building-min): Water pile full, waiting for carriers 82%, Waiting for a free settler 7%, Bringing water to the pile 6%, Fetching water 5%, Idle 0%
- farm (105 building-min): Grain pile full, waiting for carriers 87%, Sowing a field 5%, Harvesting grain 3%, Waiting for a free settler 3%, Bringing grain to the pile 1%
- mill (54 building-min): Output pile full, waiting for carriers 87%, Grinding flour 4%, Waiting for a free settler 4%, Waiting for grain 3%, Stacking outside 2%
- bakery (53 building-min): Output pile full, waiting for carriers 86%, Baking bread 7%, Waiting for flour 3%, Waiting for a free settler 2%, Stacking outside 1%
- house (247 building-min): Idle 100%

Building sites, time per state (site-min): Leveling the ground 6, Builders at work 5, Waiting for a digger 5, Waiting for a builder 2, Waiting for materials 2.

Build order (placed at min:sec, finished at): guard 0:00→0:55, wood 0:02→1:18, quarry 0:56→1:36, saw 1:18→1:56, store 1:36→2:07, wood 1:56→2:37, forest 2:08→3:00, fisher 2:38→3:30, waterhut 3:00→3:51, farm 3:30→5:03, mill 5:12→5:56, bakery 5:14→6:51, house 6:58→7:47, quarry 7:00→8:15, wood 7:48→8:29, house 8:38→9:18, farm 8:40→9:57, house 10:02→10:43, guard 10:04→11:14, house 10:56→11:58, store 11:20→12:26, house 12:08→12:48, store 12:46→13:15.

Orders given: archers 3235, profession 148, place 23, storeSlot 12, armyTarget 3, priority 2, armyReserve 1, armyList 1. Refused (order: reason, times): weaponKeep: refused ×3.

People changing jobs: new carrier 45, carrier -> worker 10, new worker 5.

People's orders (1589 in all, 1572 done): worker rest farm 156, worker gather farm 154, worker rest quarry 72, worker gather quarry 70, worker rest saw 59, worker rest wood 58, worker toCraft saw 58, worker craft saw 58, worker gather wood 56, carrier haul log wood -> saw 56, worker rest forest 42, worker gather forest 41, worker rest waterhut 39, worker rest mill 39. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 6 soldiers, 2 guards, 40 carriers; coal signs 0, iron signs 0.


Script: 1800 turns, 0.1 ms average, worst 80 ms, 0 over 0.3 s, 0 errors. Orders refused: weaponKeep 3 of 3.

### Map 20261030: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 23/1/1387/10/50 | 24/6/2773/10/40 |
| 30 | 24/1/1397/10/60 | 39/6/3316/10/70 |
| 45 | 24/1/1397/10/60 | 69/12/7158/45/85 |
| 60 | 24/1/1397/10/60 | 76/20/12801/63/87 |
| first | - - - - - - | 7 9 31 33 39 44 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 10 13 16 45 51 57 63).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 17 | 6 | 24 | 14 | 11 | 0 | 16 | 25 | 21 | 4 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 22 | 42 | 1387 | 2896 |
| 30 | 32 | 16 | 24 | 20 | 20 | 0 | 22 | 32 | 22 | 8 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 38 | 104 | 1397 | 2896 |
| 45 | 32 | 16 | 24 | 20 | 20 | 0 | 22 | 32 | 22 | 8 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 38 | 104 | 1397 | 2896 |
| 60 | 32 | 16 | 24 | 20 | 20 | 0 | 22 | 32 | 22 | 8 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 38 | 104 | 1397 | 2896 |

At the end: buildings (built+sites) house 5, wood 3, quarry 2, store 2, farm 2, hq 1, guard 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1, coalmine 1, ironmine 1.
People: carrier 38, worker 17, soldier 8, digger 2, builder 2, geologist 1; beds 50. Soldiers: sword 6, bow 2.

Goods produced in the game: log 90, grain 76, stone 69, plank 62, water 44, flour 44, bread 22, fish 18, coal 8, ironore 8.
Goods consumed in the game: plank 70, stone 63, log 62, grain 44, water 22, flour 22, pick 5, fish 4, hammer 3, axe 2, scythe 2, bread 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (59 building-min): Idle 100%, Soldiers on the way 0%
- wood (166 building-min): Log pile full, waiting for carriers 52%, Needs a worker with an axe 30%, Felling a tree 11%, Waiting for a free settler 4%, Bringing a log to the pile 3%
- quarry (109 building-min): Stone pile full, waiting for carriers 87%, Cutting stone 9%, Bringing stone to the pile 3%, Worker picking up a pickaxe 0%, Idle 0%
- saw (58 building-min): Output pile full, waiting for carriers 74%, Sawing planks 14%, Waiting for logs 9%, Stacking outside 3%, Fetching from the pile 0%
- store (105 building-min): Idle 100%
- forest (57 building-min): No free ground to plant in range inside your border 67%, Planting a sapling 21%, Waiting for a free settler 11%, Worker picking up a shovel 1%, Idle 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 54%, No fish in range inside your border 33%, Waiting for a free settler 10%, Fishing 1%, Bringing a fish to the pile 1%
- waterhut (56 building-min): Water pile full, waiting for carriers 77%, Waiting for a free settler 9%, Bringing water to the pile 7%, Fetching water 7%, Worker on the way 0%
- farm (103 building-min): Grain pile full, waiting for carriers 86%, Sowing a field 5%, Harvesting grain 4%, Waiting for a free settler 3%, Bringing grain to the pile 2%
- mill (54 building-min): Output pile full, waiting for carriers 84%, Waiting for a free settler 5%, Grinding flour 4%, Waiting for grain 4%, Stacking outside 2%
- bakery (53 building-min): Output pile full, waiting for carriers 81%, Baking bread 10%, Waiting for flour 4%, Waiting for a free settler 3%, Stacking outside 1%
- house (239 building-min): Idle 100%
- coalmine (46 building-min): Coal pile full, waiting for carriers 96%, Mining coal 2%, Worker picking up a pickaxe 1%, Bringing coal out 0%, Came back empty-handed 0%
- ironmine (46 building-min): Iron ore pile full, waiting for carriers 97%, Mining iron ore 2%, Worker picking up a pickaxe 1%, Bringing iron ore out 0%, Fetching food 0%

Building sites, time per state (site-min): Leveling the ground 6, Builders at work 5, Waiting for materials 5, Waiting for a digger 5, Waiting for a builder 3.

Build order (placed at min:sec, finished at): guard 0:00→0:42, wood 0:02→1:04, quarry 0:42→1:25, saw 1:04→1:44, store 1:26→1:56, wood 1:46→2:12, forest 1:58→2:32, fisher 2:14→3:04, waterhut 2:34→3:59, farm 3:06→5:11, mill 4:00→6:29, bakery 6:26→7:26, house 6:36→8:45, quarry 8:32→9:09, house 9:38→10:39, wood 9:40→11:05, farm 10:40→12:05, house 11:46→12:23, store 12:16→12:50, house 12:34→13:22, coalmine 13:04→13:41, ironmine 13:52→14:24, house 15:02→16:15.

Orders given: archers 1779, profession 142, place 23, storeSlot 8, armyTarget 3, armyReserve 1, armyList 1, priority 1, sendUnit 1. Refused (order: reason, times): weaponKeep: refused ×3.

People changing jobs: new carrier 47, carrier -> worker 14, new worker 3, carrier -> geologist 1.

People's orders (2036 in all, 2019 done): worker rest farm 162, worker gather farm 160, worker rest forest 97, worker gather forest 96, worker rest wood 92, worker gather wood 90, worker rest quarry 71, worker gather quarry 69, worker rest saw 63, worker toCraft saw 62, worker craft saw 62, carrier haul log wood -> saw 53, worker rest waterhut 45, worker rest mill 45. None failed.

Fights and contact: first saw player 2 at 58:00.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 8 soldiers, 1 guards, 38 carriers; coal signs 12, iron signs 20.


Script: 1800 turns, 0.4 ms average, worst 11 ms, 0 over 0.3 s, 0 errors. Orders refused: weaponKeep 3 of 3.

### Map 20261030: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 24/2/1640/10/54 | 25/6/3049/10/40 |
| 30 | 30/2/1659/10/60 | 52/6/3631/10/90 |
| 45 | 30/2/1659/10/60 | 69/13/9581/41/99 |
| 60 | 30/2/1659/10/60 | 75/19/13974/64/96 |
| first | 18 18 19 - - - | 14 15 16 19 35 40 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 10 14 27 41 52 58 64).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 13 | 5 | 24 | 16 | 12 | 0 | 21 | 9 | 21 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 19 | 41 | 1640 | 3234 |
| 30 | 32 | 16 | 24 | 20 | 24 | 0 | 22 | 32 | 22 | 34 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 38 | 104 | 1659 | 3234 |
| 45 | 32 | 16 | 24 | 20 | 24 | 0 | 22 | 32 | 22 | 34 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 38 | 104 | 1659 | 3234 |
| 60 | 32 | 16 | 24 | 20 | 24 | 0 | 22 | 32 | 22 | 34 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 38 | 104 | 1659 | 3234 |

At the end: buildings (built+sites) house 5, wood 3, store 3, guard 2, quarry 2, farm 2, coalmine 2, hq 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1, ironmine 1, smelter 1, smith 1, weaponsmith 1.
People: carrier 38, worker 17, soldier 6, digger 2, builder 2, geologist 1; beds 50. Soldiers: sword 5, bow 1.

Goods produced in the game: log 110, stone 91, grain 85, plank 82, water 53, flour 53, coal 34, bread 31, fish 24, ironore 22.
Goods consumed in the game: plank 90, stone 85, log 82, grain 53, water 31, flour 31, fish 10, bread 7, pick 5, hammer 3, axe 2, scythe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (105 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (165 building-min): Log pile full, waiting for carriers 47%, Needs a worker with an axe 30%, Felling a tree 14%, Bringing a log to the pile 5%, Waiting for a free settler 4%
- quarry (108 building-min): Stone pile full, waiting for carriers 82%, Cutting stone 13%, Bringing stone to the pile 5%, Worker picking up a pickaxe 0%, Idle 0%
- saw (58 building-min): Output pile full, waiting for carriers 68%, Sawing planks 18%, Waiting for logs 9%, Stacking outside 4%, Fetching from the pile 1%
- store (149 building-min): Idle 100%
- forest (57 building-min): No free ground to plant in range inside your border 59%, Planting a sapling 29%, Waiting for a free settler 11%, Worker picking up a shovel 0%, Idle 0%
- fisher (56 building-min): Fish pile full, waiting for carriers 86%, Waiting for a free settler 10%, Fishing 2%, Bringing a fish to the pile 1%, Worker picking up a fishing rod 1%
- waterhut (55 building-min): Water pile full, waiting for carriers 84%, Waiting for a free settler 8%, Fetching water 4%, Bringing water to the pile 3%, Worker on the way 0%
- farm (101 building-min): Grain pile full, waiting for carriers 82%, Sowing a field 7%, Harvesting grain 5%, Waiting for a free settler 3%, Bringing grain to the pile 2%
- mill (53 building-min): Output pile full, waiting for carriers 83%, Grinding flour 6%, Waiting for grain 4%, Waiting for a free settler 4%, Stacking outside 3%
- bakery (52 building-min): Output pile full, waiting for carriers 79%, Baking bread 14%, Waiting for flour 2%, Waiting for a free settler 2%, Stacking outside 2%
- house (240 building-min): Idle 100%
- coalmine (86 building-min): Needs a worker with a pickaxe 48%, Coal pile full, waiting for carriers 46%, Mining coal 5%, Bringing coal out 1%, Worker picking up a pickaxe 0%
- ironmine (44 building-min): Iron ore pile full, waiting for carriers 92%, Mining iron ore 5%, Bringing iron ore out 1%, Worker picking up a pickaxe 1%, Fetching food 0%
- smelter (43 building-min): Needs a worker with a hammer 100%
- smith (42 building-min): Needs a worker with a hammer 100%, Idle 0%
- weaponsmith (41 building-min): Needs a worker with a hammer 100%

Building sites, time per state (site-min): Waiting for materials 8, Builders at work 7, Leveling the ground 7, Waiting for a digger 6, Waiting for a builder 3.

Build order (placed at min:sec, finished at): guard 0:00→0:54, wood 0:02→1:09, quarry 0:54→1:34, saw 1:10→1:57, store 1:36→2:05, wood 1:58→2:34, forest 2:06→2:47, fisher 2:34→3:44, waterhut 2:48→4:41, farm 3:44→6:39, mill 4:42→7:29, bakery 6:46→8:25, house 8:28→9:18, quarry 8:30→10:21, house 10:20→10:57, wood 10:22→11:15, house 11:06→11:49, farm 11:40→12:40, house 12:36→13:32, store 13:04→13:48, guard 13:32→14:05, house 14:14→14:51, store 14:16→14:59, coalmine 14:52→15:25, ironmine 15:02→15:41, smelter 16:38→17:28, smith 16:40→17:58, weaponsmith 17:28→18:46, coalmine 18:04→19:00.

Orders given: archers 3150, profession 144, place 29, storeSlot 12, armyTarget 3, priority 2, armyReserve 1, armyList 1, sendUnit 1. Refused (order: reason, times): weaponKeep: refused ×3.

People changing jobs: new carrier 48, carrier -> worker 15, new worker 2, carrier -> geologist 1.

People's orders (2761 in all, 2742 done): worker rest farm 182, worker gather farm 180, worker rest forest 132, worker gather forest 131, worker rest wood 112, worker gather wood 110, worker rest quarry 93, worker gather quarry 91, worker rest saw 83, worker toCraft saw 82, worker craft saw 82, carrier haul log wood -> store 64, carrier haul grain farm -> mill 56, carrier haul log store -> saw 56. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 6 soldiers, 2 guards, 38 carriers; coal signs 25, iron signs 16.


Script: 1800 turns, 0.3 ms average, worst 11 ms, 0 over 0.3 s, 0 errors. Orders refused: weaponKeep 3 of 3.
