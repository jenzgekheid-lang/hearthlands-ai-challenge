# Tournament: chatgpt

Game version 195. Written for: chatgpt not stated.

- chatgpt: hearthlands-ai-challenge, commit 25c990b

Maps 20261030, 777, 4242, 31, each twice (sides swapped), up to 60 game minutes (1x). 47 s.

Each game ends with the script's own game log: what it may know (its own side, and what happened to it or what it saw). Times are game min:sec.

| Opponent | Won | Lost | Undecided |
|---|---|---|---|
| original game NPC | 0 | 0 | 8 |

## Games

Each row: buildings / military / land tiles / soldiers / people at the minute shown. First: game minute of the first smelter, smith, weaponsmith, barracks, tower, castle (- = never).

### Map 31: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 18/2/1692/10/10 | 31/6/3159/10/50 |
| 30 | 27/2/1735/18/52 | 64/9/5337/16/104 |
| 45 | 34/9/3939/43/27 | 72/16/10497/43/97 |
| 60 | 37/10/4272/46/24 | 79/22/14868/69/91 |
| first | 18 - 20 21 - - | 8 8 22 23 28 31 |

Soldiers every 5 min: 10 10 10 10 10 18 26 39 43 43 46 46 (original game NPC: 10 10 10 10 13 16 24 34 43 52 60 69).

First army orders (game min:sec): 0:00 armyTarget sword=14; 0:00 armyTarget spear=10; 0:00 armyTarget bow=16; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 8 | 0 | 11 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 13 | 1692 | 3539 |
| 30 | 20 | 10 | 9 | 20 | 7 | 0 | 14 | 24 | 14 | 3 | 7 | 10 | 0 | 0 | 0 | 0 | 0 | 26 | 70 | 1735 | 3549 |
| 45 | 22 | 8 | 8 | 19 | 15 | 0 | 14 | 24 | 11 | 8 | 8 | 12 | 0 | 0 | 1 | 1 | 3 | 1 | 93 | 3939 | 6802 |
| 60 | 24 | 8 | 8 | 23 | 15 | 0 | 13 | 24 | 13 | 25 | 13 | 14 | 0 | 0 | 1 | 2 | 6 | 0 | 109 | 4272 | 7166 |

At the end: buildings (built+sites) guard 10, house 5, wood 3, quarry 2, farm 2, coalmine 2, hq 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1, ironmine 1, smelter 1, weaponsmith 1, barracks 1, goldmine 1, goldsmelter 1.
People: soldier 26, worker 17, digger 2, builder 2, carrier 2, geologist 1; beds 50. Soldiers: sword 12, bow 8, spear 6.

Goods produced in the game: coal 129, fish 122, log 114, stone 106, plank 94, grain 93, ironore 72, water 69, flour 69, iron 59, bread 55, bow 21, sword 16, spear 8.
Goods consumed in the game: stone 116, plank 110, fish 105, coal 104, log 94, grain 69, ironore 59, water 56, flour 56, iron 45, bread 40, bow 15, sword 15, spear 6, pick 5, hammer 3, axe 2, scythe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (266 building-min): Idle 99%, Soldiers on the way 1%, Waiting for a swordsman: train one at the barracks 1%, Waiting for a soldier 0%
- wood (166 building-min): Log pile full, waiting for carriers 38%, Waiting for a free settler 24%, Needs a worker with an axe 18%, Felling a tree 14%, Bringing a log to the pile 5%
- quarry (109 building-min): No stone in range inside your border 33%, Stone pile full, waiting for carriers 27%, Cutting stone 18%, Waiting for a free settler 13%, Bringing stone to the pile 9%
- saw (58 building-min): Output pile full, waiting for carriers 43%, Waiting for logs 32%, Sawing planks 21%, Stacking outside 4%, Fetching from the pile 1%
- forest (58 building-min): No free ground to plant in range inside your border 41%, Waiting for a free settler 37%, Planting a sapling 21%, Worker picking up a shovel 0%, Idle 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 42%, Waiting for a free settler 36%, Fishing 12%, Bringing a fish to the pile 9%, Worker picking up a fishing rod 1%
- waterhut (56 building-min): Water pile full, waiting for carriers 51%, Waiting for a free settler 36%, Fetching water 8%, Bringing water to the pile 5%, Worker on the way 0%
- farm (103 building-min): Grain pile full, waiting for carriers 55%, Waiting for a free settler 30%, Sowing a field 7%, Harvesting grain 5%, Bringing grain to the pile 2%
- mill (53 building-min): Output pile full, waiting for carriers 54%, Waiting for a free settler 32%, Grinding flour 7%, Stacking outside 3%, Waiting for grain 2%
- bakery (51 building-min): Output pile full, waiting for carriers 33%, Waiting for a free settler 29%, Baking bread 25%, Waiting for flour 7%, Stacking outside 3%
- coalmine (85 building-min): Needs a worker with a pickaxe 35%, Waiting for a free settler 22%, Deposit thinning: mining coal 16%, Mining coal 15%, Coal pile full, waiting for carriers 6%
- ironmine (45 building-min): Deposit thinning: mining iron ore 25%, Waiting for a free settler 22%, Deposit worn out: finding little iron ore 14%, Iron ore pile full, waiting for carriers 11%, Mining iron ore 11%
- smelter (43 building-min): Output pile full, waiting for carriers 49%, Waiting for a free settler 18%, Smelting iron 17%, Waiting for iron ore 11%, Stacking outside 4%
- weaponsmith (41 building-min): Output pile full, waiting for carriers 34%, Waiting for coal 28%, Waiting for a free settler 14%, Forging bow 7%, Forging sword 5%
- barracks (39 building-min): Waiting for weapons from the weaponsmith 82%, Weapons on the way 15%, Waiting for a free settler to train 2%, Training soldiers 1%, Idle 0%
- house (169 building-min): Idle 100%
- goldmine (14 building-min): Needs a worker with a pickaxe 62%, Waiting for a free settler 36%, Idle 2%
- goldsmelter (13 building-min): Waiting for gold ore 92%, Waiting for coal and gold ore 4%, Worker picking up a hammer 3%, Idle 1%, Working 0%

Building sites, time per state (site-min): Waiting for materials 23, Builders at work 10, Leveling the ground 7, Waiting for a digger 7, Waiting for a builder 2.

Build order (placed at min:sec, finished at): guard 0:00→0:51, wood 0:02→1:10, quarry 0:52→1:29, saw 1:10→1:50, wood 1:30→2:10, forest 1:50→2:30, fisher 2:10→3:07, waterhut 2:30→3:34, farm 3:08→4:54, guard 4:56→6:06, mill 4:58→6:58, bakery 7:06→9:08, quarry 7:08→9:38, wood 9:38→10:35, farm 9:40→12:13, coalmine 10:36→13:14, ironmine 13:22→14:43, smelter 13:24→17:04, weaponsmith 16:46→19:00, barracks 19:18→20:39, coalmine 19:20→21:55, house 22:10→23:44, house 24:08→24:50, house 25:00→26:36, house 26:46→27:30, house 27:40→28:25, guard 29:26→30:21, guard 30:22→31:00, guard 38:28→39:20, guard 39:32→40:11, guard 40:26→41:24, guard 42:06→43:08, guard 43:26→44:22, goldmine 44:58→45:55, goldsmelter 45:00→46:53, guard 54:52→57:28.

Orders given: archers 7968, place 36, priority 10, armyTarget 3, sendUnit 3, armyReserve 1, armyList 1, profession 1. None refused.

People changing jobs: new carrier 43, carrier -> soldier 36, carrier -> worker 10, new worker 7, carrier -> geologist 1.

People's orders (4359 in all, 4319 done): worker rest farm 202, worker gather farm 200, worker mine coalmine 160, worker mine ironmine 146, worker rest coalmine 131, worker rest fisher 123, worker gather fisher 122, worker rest wood 116, worker gather wood 114, worker rest quarry 108, worker gather quarry 106, carrier haul log wood -> saw 98, carrier haul fish fisher -> ironmine 97, worker rest saw 95. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×4.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 25 soldiers, 9 guards, 5 carriers; coal signs 26, iron signs 16.


Script: 1800 turns, 0.2 ms average, worst 140 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 31: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 17/2/1700/10/10 | 31/6/2863/10/50 |
| 30 | 17/2/1700/10/10 | 68/14/6244/32/88 |
| 45 | 17/2/1700/10/10 | 80/20/11742/62/98 |
| 60 | 17/2/1700/10/10 | 88/28/16891/79/101 |
| first | - - - - - - | 11 12 13 15 36 34 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 16 32 47 55 62 66 71 79).

First army orders (game min:sec): 0:00 armyTarget sword=14; 0:00 armyTarget spear=10; 0:00 armyTarget bow=16; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 4 | 8 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 16 | 1700 | 3203 |
| 30 | 4 | 8 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 16 | 1700 | 3203 |
| 45 | 4 | 8 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 16 | 1700 | 3203 |
| 60 | 4 | 8 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 16 | 1700 | 3203 |

At the end: buildings (built+sites) wood 3, guard 2, quarry 2, farm 2, hq 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1, coalmine 1.
People: soldier 6, worker 3, digger 2, builder 2, carrier 2, geologist 1; beds 0. Soldiers: sword 5, bow 1.

Goods produced in the game: stone 40, log 33, plank 33.
Goods consumed in the game: stone 50, plank 49, log 33, pick 2, axe 1, saw 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (112 building-min): Idle 100%, Soldiers on the way 0%
- wood (168 building-min): Waiting for a free settler 65%, No grown trees in range inside your border 28%, Felling a tree 4%, Bringing a log to the pile 1%, Log pile full, waiting for carriers 1%
- quarry (110 building-min): Waiting for a free settler 47%, Stone pile full, waiting for carriers 44%, Cutting stone 6%, Bringing stone to the pile 3%, Idle 0%
- saw (58 building-min): Output pile full, waiting for carriers 80%, Waiting for logs 11%, Sawing planks 7%, Stacking outside 2%, Worker picking up a saw 0%
- forest (58 building-min): Waiting for a free settler 100%, Idle 0%
- fisher (57 building-min): Waiting for a free settler 100%, Idle 0%
- waterhut (56 building-min): Waiting for a free settler 100%, Idle 0%
- farm (104 building-min): Waiting for a free settler 100%, Idle 0%
- mill (54 building-min): Waiting for a free settler 100%, Idle 0%
- bakery (53 building-min): Waiting for a free settler 100%, Idle 0%
- coalmine (48 building-min): Waiting for a free settler 100%, Idle 0%

Building sites, time per state (site-min): Waiting for materials 8, Builders at work 4, Leveling the ground 4, Waiting for a digger 3, Waiting for a builder 1.

Build order (placed at min:sec, finished at): guard 0:00→0:42, wood 0:02→0:56, quarry 0:42→1:14, saw 0:56→1:38, wood 1:16→2:07, forest 1:38→2:30, fisher 2:08→2:52, waterhut 2:30→3:38, farm 2:52→5:18, mill 3:40→5:58, guard 6:02→6:50, bakery 6:04→7:30, quarry 6:50→8:26, wood 8:14→9:10, farm 8:42→10:53, coalmine 9:10→11:45.

Orders given: archers 3374, place 16, armyTarget 3, priority 2, armyReserve 1, armyList 1, profession 1, sendUnit 1. None refused.

People changing jobs: carrier -> worker 3, carrier -> geologist 1.

People's orders (529 in all, 521 done): worker rest quarry 41, worker gather quarry 40, builder build farm 36, worker rest wood 34, worker rest saw 34, worker gather wood 33, carrier haul log wood -> saw 33, worker toCraft saw 33, worker craft saw 33, carrier haul stone quarry -> farm 11, builder build wood 10, builder build quarry 8, builder build waterhut 8, carrier haul plank saw -> farm 8. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 6 soldiers, 2 guards, 2 carriers; coal signs 10, iron signs 1.


Script: 1800 turns, 0.6 ms average, worst 143 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 15/1/1372/10/10 | 33/6/2488/10/50 |
| 30 | 21/2/1710/10/10 | 52/8/4195/16/74 |
| 45 | 21/2/1710/10/10 | 72/17/10169/52/98 |
| 60 | 21/2/1710/10/10 | 83/26/15507/79/91 |
| first | 20 - 23 25 - - | 10 11 14 15 33 36 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 16 28 38 52 61 73 79).

First army orders (game min:sec): 0:00 armyTarget sword=14; 0:00 armyTarget spear=10; 0:00 armyTarget bow=16; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 8 | 3 | 9 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 14 | 1372 | 2807 |
| 30 | 8 | 8 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 16 | 1710 | 3044 |
| 45 | 8 | 8 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 16 | 1710 | 3044 |
| 60 | 8 | 8 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 16 | 1710 | 3044 |

At the end: buildings (built+sites) wood 3, guard 2, quarry 2, farm 2, hq 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1, coalmine 1, ironmine 1, smelter 1, weaponsmith 1, barracks 1.
People: soldier 6, worker 3, digger 2, builder 2, carrier 2, geologist 1; beds 0. Soldiers: sword 5, bow 1.

Goods produced in the game: stone 59, log 54, plank 50.
Goods consumed in the game: stone 69, plank 66, log 50, pick 2, axe 1, saw 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (93 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (165 building-min): Waiting for a free settler 64%, No grown trees in range inside your border 19%, Felling a tree 7%, Log pile full, waiting for carriers 6%, Bringing a log to the pile 3%
- quarry (108 building-min): Waiting for a free settler 46%, Stone pile full, waiting for carriers 43%, Cutting stone 8%, Bringing stone to the pile 3%, Worker picking up a pickaxe 0%
- saw (58 building-min): Output pile full, waiting for carriers 56%, Waiting for logs 30%, Sawing planks 11%, Stacking outside 2%, Worker picking up a saw 1%
- forest (57 building-min): Waiting for a free settler 100%, Idle 0%
- fisher (57 building-min): Waiting for a free settler 100%, Idle 0%
- waterhut (56 building-min): Waiting for a free settler 100%, Idle 0%
- farm (100 building-min): Waiting for a free settler 100%, Idle 0%
- mill (52 building-min): Waiting for a free settler 100%, Idle 0%
- bakery (51 building-min): Waiting for a free settler 100%, Idle 0%
- coalmine (44 building-min): Waiting for a free settler 100%, Idle 0%
- ironmine (42 building-min): Waiting for a free settler 100%, Idle 0%
- smelter (40 building-min): Waiting for a free settler 100%, Idle 0%
- weaponsmith (37 building-min): Waiting for a free settler 100%, Idle 0%
- barracks (35 building-min): Waiting for weapons from the weaponsmith 99%, Idle 1%

Building sites, time per state (site-min): Waiting for materials 25, Builders at work 6, Leveling the ground 4, Waiting for a digger 4, Waiting for a builder 1.

Build order (placed at min:sec, finished at): guard 0:00→0:39, wood 0:02→1:00, quarry 0:40→1:24, saw 1:02→2:04, wood 1:24→2:36, forest 2:04→2:49, fisher 2:36→3:22, waterhut 2:50→4:24, farm 3:22→5:49, mill 4:24→7:38, bakery 6:34→9:27, quarry 8:36→10:37, wood 10:16→11:16, farm 10:48→14:26, coalmine 12:22→15:47, ironmine 15:22→17:48, smelter 17:24→19:57, weaponsmith 19:36→22:54, barracks 20:08→24:46, guard 24:48→25:55.

Orders given: archers 2802, place 20, armyTarget 3, priority 2, armyReserve 1, armyList 1, profession 1, sendUnit 1. None refused.

People changing jobs: carrier -> worker 3, carrier -> geologist 1.

People's orders (775 in all, 767 done): worker rest quarry 60, worker gather quarry 59, worker rest wood 55, worker gather wood 54, carrier haul log wood -> saw 54, worker rest saw 51, worker toCraft saw 50, worker craft saw 50, builder build farm 28, builder build smelter 14, builder build weaponsmith 14, builder build barracks 12, carrier haul stone quarry -> farm 11, builder build guard 10. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×4.

Fights and contact: first saw player 2 at 52:00.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 6 soldiers, 2 guards, 2 carriers; coal signs 11, iron signs 3.


Script: 1800 turns, 0.5 ms average, worst 123 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 18/2/1674/10/20 | 31/6/2640/10/50 |
| 30 | 22/2/1689/10/20 | 57/8/3850/13/87 |
| 45 | 29/4/2281/34/36 | 74/21/11451/50/80 |
| 60 | 33/8/3500/42/28 | 80/26/14994/77/93 |
| first | 22 - 27 29 - - | 10 11 13 15 33 36 |

Soldiers every 5 min: 10 10 10 10 10 10 23 27 34 38 40 42 (original game NPC: 10 10 10 10 10 13 24 36 50 66 71 77).

First army orders (game min:sec): 0:00 armyTarget sword=14; 0:00 armyTarget spear=10; 0:00 armyTarget bow=16; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 15 | 0 | 17 | 14 | 0 | 0 | 11 | 14 | 7 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 60 | 1674 | 3666 |
| 30 | 12 | 1 | 19 | 15 | 0 | 0 | 14 | 24 | 8 | 19 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 70 | 1689 | 3666 |
| 45 | 16 | 8 | 16 | 19 | 15 | 0 | 13 | 23 | 14 | 5 | 12 | 14 | 0 | 0 | 0 | 0 | 0 | 8 | 91 | 2281 | 4648 |
| 60 | 16 | 8 | 16 | 20 | 16 | 0 | 14 | 22 | 14 | 6 | 14 | 14 | 0 | 0 | 0 | 0 | 0 | 7 | 94 | 3500 | 6086 |

At the end: buildings (built+sites) guard 8, house 5, wood 3, quarry 2, farm 2, coalmine 2, hq 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1, ironmine 1, smelter 1, weaponsmith 1, barracks 1.
People: soldier 26, worker 16, carrier 7, digger 2, builder 2, geologist 1; beds 50. Soldiers: sword 10, bow 10, spear 6.

Goods produced in the game: stone 101, grain 94, log 93, fish 89, coal 84, plank 81, water 72, flour 72, ironore 60, bread 58, iron 46, bow 15, sword 11, spear 6.
Goods consumed in the game: stone 103, plank 97, log 81, coal 78, fish 75, grain 72, water 58, flour 58, ironore 46, bread 42, iron 32, bow 15, sword 11, spear 6, pick 5, axe 2, scythe 2, hammer 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (188 building-min): Idle 99%, Soldiers on the way 1%, Waiting for a soldier 0%
- wood (167 building-min): No grown trees in range inside your border 28%, Log pile full, waiting for carriers 20%, Waiting for a free settler 18%, Needs a worker with an axe 18%, Felling a tree 12%
- quarry (110 building-min): Stone pile full, waiting for carriers 75%, Cutting stone 14%, Bringing stone to the pile 6%, Waiting for a free settler 4%, Worker picking up a pickaxe 0%
- saw (58 building-min): Output pile full, waiting for carriers 42%, Waiting for logs 36%, Sawing planks 18%, Stacking outside 4%, Worker picking up a saw 1%
- forest (57 building-min): No free ground to plant in range inside your border 52%, Planting a sapling 31%, Waiting for a free settler 17%, Worker picking up a shovel 0%, Idle 0%
- fisher (56 building-min): Fish pile full, waiting for carriers 72%, Waiting for a free settler 16%, Fishing 7%, Bringing a fish to the pile 5%, Worker picking up a fishing rod 0%
- waterhut (56 building-min): Water pile full, waiting for carriers 61%, Waiting for a free settler 15%, Bringing water to the pile 12%, Fetching water 11%, Worker on the way 0%
- farm (102 building-min): Grain pile full, waiting for carriers 78%, Waiting for a free settler 8%, Sowing a field 7%, Harvesting grain 5%, Bringing grain to the pile 2%
- mill (53 building-min): Output pile full, waiting for carriers 74%, Waiting for a free settler 11%, Grinding flour 7%, Stacking outside 4%, Waiting for grain 2%
- bakery (52 building-min): Waiting for flour 34%, Output pile full, waiting for carriers 25%, Baking bread 25%, Waiting for a free settler 10%, Stacking outside 3%
- house (158 building-min): Idle 100%
- coalmine (73 building-min): Needs a worker with a pickaxe 36%, Deposit thinning: mining coal 17%, Coal pile full, waiting for carriers 17%, Deposit worn out: finding little coal 14%, Mining coal 8%
- ironmine (40 building-min): Iron ore pile full, waiting for carriers 29%, Waiting for a free settler 28%, Deposit thinning: mining iron ore 21%, Mining iron ore 17%, Bringing iron ore out 4%
- smelter (39 building-min): Output pile full, waiting for carriers 48%, Waiting for a free settler 25%, Smelting iron 15%, Waiting for iron ore 7%, Stacking outside 3%
- weaponsmith (34 building-min): Waiting for coal 64%, Waiting for a free settler 14%, Waiting for iron 6%, Forging bow 6%, Forging sword 4%
- barracks (32 building-min): Waiting for weapons from the weaponsmith 88%, Weapons on the way 10%, Training soldiers 1%, Idle 0%

Building sites, time per state (site-min): Waiting for materials 30, Builders at work 8, Leveling the ground 8, Waiting for a digger 6, Waiting for a builder 2.

Build order (placed at min:sec, finished at): guard 0:00→0:49, wood 0:02→1:03, quarry 0:50→1:27, saw 1:04→1:56, wood 1:28→3:03, forest 1:56→3:16, fisher 3:04→3:54, waterhut 3:16→4:28, farm 3:54→5:35, mill 4:28→6:51, bakery 5:36→7:50, quarry 7:30→8:31, wood 7:52→9:04, guard 9:14→10:17, farm 9:24→12:04, house 10:18→12:43, coalmine 12:24→13:39, ironmine 12:44→20:00, smelter 19:46→21:27, weaponsmith 20:00→26:21, barracks 26:28→28:21, house 26:30→31:02, house 31:12→31:49, house 32:00→32:39, coalmine 32:46→33:37, house 32:52→33:58, guard 34:02→34:49, guard 34:50→35:36, guard 47:00→47:47, guard 50:00→51:00, guard 51:24→52:24, guard 57:36→58:53.

Orders given: archers 5649, place 32, priority 8, armyTarget 3, sendUnit 2, profession 1, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 42, carrier -> soldier 32, carrier -> worker 8, new worker 8.

People's orders (3909 in all, 3876 done): worker rest farm 206, worker gather farm 205, worker mine coalmine 125, worker rest forest 121, worker gather forest 120, worker rest quarry 103, worker mine ironmine 102, worker gather quarry 101, worker rest wood 95, worker gather wood 93, worker rest fisher 90, worker gather fisher 89, carrier haul log wood -> saw 85, worker rest coalmine 85. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 28 soldiers, 5 guards, 11 carriers; coal signs 20, iron signs 11.


Script: 1800 turns, 0.2 ms average, worst 135 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 20/2/1693/10/43 | 31/6/2812/10/50 |
| 30 | 21/2/1693/10/60 | 58/12/5945/25/69 |
| 45 | 21/2/1693/10/60 | 74/15/9086/52/98 |
| 60 | 21/2/1693/10/60 | 81/22/14196/72/98 |
| first | - - - - - - | 9 10 16 16 25 40 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 17 25 42 45 52 62 68 72).

First army orders (game min:sec): 0:00 armyTarget sword=14; 0:00 armyTarget spear=10; 0:00 armyTarget bow=16; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 15 | 8 | 16 | 14 | 5 | 0 | 13 | 9 | 13 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 23 | 58 | 1693 | 3149 |
| 30 | 24 | 8 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 43 | 88 | 1693 | 3149 |
| 45 | 24 | 8 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 43 | 88 | 1693 | 3149 |
| 60 | 24 | 8 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 43 | 88 | 1693 | 3149 |

At the end: buildings (built+sites) house 5, wood 3, guard 2, quarry 2, farm 2, hq 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1.
People: carrier 43, worker 12, soldier 6, digger 2, builder 2, geologist 1; beds 50. Soldiers: sword 5, bow 1.

Goods produced in the game: log 64, stone 62, grain 46, plank 44, water 22, flour 22, fish 8, bread 8.
Goods consumed in the game: stone 64, plank 60, log 44, grain 22, water 8, flour 8, pick 3, axe 2, scythe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (113 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (166 building-min): Log pile full, waiting for carriers 59%, Needs a worker with an axe 29%, Felling a tree 8%, Bringing a log to the pile 3%, Waiting for a free settler 1%
- quarry (109 building-min): Stone pile full, waiting for carriers 84%, Cutting stone 9%, Bringing stone to the pile 4%, Waiting for a free settler 3%, Worker picking up a pickaxe 0%
- saw (58 building-min): Output pile full, waiting for carriers 78%, Sawing planks 10%, Waiting for logs 9%, Stacking outside 2%, Worker picking up a saw 0%
- forest (57 building-min): No free ground to plant in range inside your border 72%, Waiting for a free settler 16%, Planting a sapling 12%, Worker picking up a shovel 0%, Idle 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 84%, Waiting for a free settler 15%, Fishing 0%, Worker picking up a fishing rod 0%, Bringing a fish to the pile 0%
- waterhut (56 building-min): Water pile full, waiting for carriers 83%, Waiting for a free settler 14%, Fetching water 1%, Bringing water to the pile 1%, Idle 0%
- farm (104 building-min): Grain pile full, waiting for carriers 85%, Waiting for a free settler 8%, Sowing a field 3%, Harvesting grain 2%, Bringing grain to the pile 1%
- mill (53 building-min): Output pile full, waiting for carriers 84%, Waiting for a free settler 10%, Grinding flour 2%, Waiting for grain 2%, Stacking outside 1%
- bakery (52 building-min): Output pile full, waiting for carriers 85%, Waiting for a free settler 8%, Baking bread 3%, Waiting for flour 2%, Waiting for flour and water 1%
- house (231 building-min): Idle 100%

Building sites, time per state (site-min): Waiting for materials 6, Builders at work 5, Leveling the ground 5, Waiting for a digger 5, Waiting for a builder 2.

Build order (placed at min:sec, finished at): guard 0:00→0:42, wood 0:02→1:18, quarry 0:42→1:45, saw 1:20→2:10, wood 1:46→2:30, forest 2:10→2:57, fisher 2:30→3:19, waterhut 2:58→4:21, farm 3:20→5:04, guard 5:18→6:20, mill 5:20→6:44, bakery 6:22→7:52, quarry 7:54→9:02, wood 7:56→10:33, farm 9:04→11:07, house 11:14→12:02, house 12:12→12:48, house 12:58→13:47, house 13:56→14:54, house 15:04→15:43.

Orders given: archers 3388, place 20, profession 6, armyTarget 3, priority 2, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 48, carrier -> worker 10, new worker 2, carrier -> geologist 1.

People's orders (1242 in all, 1225 done): worker rest farm 104, worker gather farm 102, worker rest wood 66, worker gather wood 64, worker rest quarry 64, worker gather quarry 62, worker rest forest 58, worker gather forest 57, carrier haul log wood -> saw 48, worker rest saw 45, worker toCraft saw 44, worker craft saw 44, carrier haul grain farm -> mill 30, worker rest waterhut 23. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 6 soldiers, 2 guards, 43 carriers; coal signs 0, iron signs 0.


Script: 1800 turns, 0.2 ms average, worst 108 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 21/2/1686/10/60 | 34/6/2891/10/50 |
| 30 | 21/2/1686/10/60 | 68/15/6872/31/89 |
| 45 | 21/2/1686/10/60 | 79/21/11737/63/97 |
| 60 | 21/2/1686/10/60 | 85/28/18228/80/80 |
| first | - - - - - - | 7 8 9 13 35 32 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 21 22 31 40 56 63 70 74 80).

First army orders (game min:sec): 0:00 armyTarget sword=14; 0:00 armyTarget spear=10; 0:00 armyTarget bow=16; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 12 | 8 | 7 | 14 | 8 | 0 | 14 | 23 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 43 | 66 | 1686 | 3299 |
| 30 | 24 | 8 | 8 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 43 | 80 | 1686 | 3299 |
| 45 | 24 | 8 | 8 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 43 | 80 | 1686 | 3299 |
| 60 | 24 | 8 | 8 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 43 | 80 | 1686 | 3299 |

At the end: buildings (built+sites) house 5, wood 3, guard 2, quarry 2, farm 2, hq 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1.
People: carrier 43, worker 12, soldier 6, digger 2, builder 2, geologist 1; beds 50. Soldiers: sword 5, bow 1.

Goods produced in the game: log 64, stone 54, grain 46, plank 44, water 22, flour 22, fish 8, bread 8.
Goods consumed in the game: stone 64, plank 60, log 44, grain 22, water 8, flour 8, pick 3, axe 2, scythe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (113 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (167 building-min): Log pile full, waiting for carriers 53%, Needs a worker with an axe 29%, Felling a tree 8%, Waiting for a free settler 6%, Bringing a log to the pile 3%
- quarry (110 building-min): No stone in range inside your border 44%, Stone pile full, waiting for carriers 41%, Cutting stone 8%, Bringing stone to the pile 4%, Waiting for a free settler 3%
- saw (58 building-min): Output pile full, waiting for carriers 80%, Sawing planks 10%, Waiting for logs 8%, Stacking outside 2%, Worker picking up a saw 0%
- forest (57 building-min): No free ground to plant in range inside your border 69%, Planting a sapling 17%, Waiting for a free settler 14%, Worker picking up a shovel 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 85%, Waiting for a free settler 14%, Fishing 0%, Worker picking up a fishing rod 0%, Bringing a fish to the pile 0%
- waterhut (57 building-min): Water pile full, waiting for carriers 81%, Waiting for a free settler 13%, Bringing water to the pile 3%, Fetching water 3%, Idle 0%
- farm (106 building-min): Grain pile full, waiting for carriers 85%, Waiting for a free settler 7%, Sowing a field 3%, Harvesting grain 2%, Bringing grain to the pile 1%
- mill (55 building-min): Output pile full, waiting for carriers 84%, Waiting for a free settler 10%, Grinding flour 2%, Waiting for grain 2%, Stacking outside 1%
- bakery (53 building-min): Output pile full, waiting for carriers 86%, Waiting for a free settler 7%, Baking bread 3%, Waiting for flour 2%, Waiting for flour and water 1%
- house (238 building-min): Idle 100%

Building sites, time per state (site-min): Builders at work 5, Leveling the ground 5, Waiting for materials 5, Waiting for a digger 4, Waiting for a builder 2.

Build order (placed at min:sec, finished at): guard 0:00→0:55, wood 0:02→1:18, quarry 0:56→1:36, saw 1:18→1:56, wood 1:36→2:14, forest 1:56→2:34, fisher 2:14→3:00, waterhut 2:34→3:27, farm 3:02→4:08, mill 3:28→5:03, guard 5:12→6:07, bakery 5:14→6:53, quarry 7:02→8:10, wood 7:04→9:29, farm 8:10→10:09, house 10:00→10:43, house 10:54→11:28, house 11:38→12:10, house 12:20→13:11, house 13:22→14:03.

Orders given: archers 3388, place 20, armyTarget 3, priority 2, profession 1, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 46, carrier -> worker 8, new worker 4.

People's orders (1255 in all, 1238 done): worker rest farm 108, worker gather farm 106, worker rest forest 74, worker gather forest 73, worker rest wood 66, worker gather wood 64, worker rest quarry 56, worker gather quarry 54, carrier haul log wood -> saw 48, worker rest saw 45, worker toCraft saw 44, worker craft saw 44, carrier haul grain farm -> mill 30, worker rest waterhut 23. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 6 soldiers, 2 guards, 43 carriers; coal signs 0, iron signs 0.


Script: 1800 turns, 0.1 ms average, worst 22 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 18/2/1707/10/10 | 24/6/2773/10/40 |
| 30 | 27/2/1723/14/56 | 40/6/3293/10/61 |
| 45 | 29/4/2109/34/36 | 67/10/7494/34/97 |
| 60 | 33/6/2753/21/24 | 72/17/12583/58/94 |
| first | 17 - 19 21 - - | 7 9 33 32 40 44 |

Soldiers every 5 min: 10 10 10 10 10 14 27 34 34 38 18 21 (original game NPC: 10 10 10 10 10 10 10 18 34 43 43 58).

First army orders (game min:sec): 0:00 armyTarget sword=14; 0:00 armyTarget spear=10; 0:00 armyTarget bow=16; 0:00 armyReserve; 50:02 attack 25 soldiers -> building 359.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 8 | 1 | 13 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 15 | 1707 | 3272 |
| 30 | 24 | 8 | 16 | 8 | 14 | 0 | 14 | 21 | 14 | 18 | 2 | 0 | 0 | 0 | 0 | 0 | 1 | 29 | 81 | 1723 | 3277 |
| 45 | 24 | 8 | 16 | 6 | 16 | 0 | 14 | 24 | 14 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 15 | 88 | 2109 | 4203 |
| 60 | 24 | 8 | 16 | 11 | 17 | 0 | 13 | 24 | 13 | 24 | 0 | 0 | 0 | 0 | 1 | 0 | 2 | 0 | 89 | 2753 | 6588 |

At the end: buildings (built+sites) guard 6, house 5, wood 3, quarry 2, farm 2, coalmine 2, hq 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1, ironmine 1, smelter 1, weaponsmith 1, barracks 1, goldmine 1, goldsmelter 1.
People: worker 17, soldier 9, digger 2, builder 2, carrier 2, geologist 1; beds 50. Soldiers: sword 5, bow 4.

Goods produced in the game: log 106, stone 102, coal 102, plank 86, grain 85, water 61, flour 61, bread 47, fish 41, ironore 39, iron 39, bow 19, sword 14, spear 6.
Goods consumed in the game: stone 104, plank 102, log 86, coal 78, grain 61, water 48, flour 48, ironore 39, iron 39, fish 36, bread 30, bow 17, sword 13, spear 6, pick 5, hammer 3, axe 2, scythe 2, saw 1, shovel 1, rod 1.
Goods lost in the game: plank 5, stone 5.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (187 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (167 building-min): Log pile full, waiting for carriers 39%, Waiting for a free settler 21%, Needs a worker with an axe 21%, Felling a tree 14%, Bringing a log to the pile 5%
- quarry (110 building-min): Stone pile full, waiting for carriers 67%, Cutting stone 14%, Waiting for a free settler 12%, Bringing stone to the pile 6%, Worker picking up a pickaxe 1%
- saw (58 building-min): Output pile full, waiting for carriers 52%, Waiting for logs 25%, Sawing planks 19%, Stacking outside 4%, Fetching from the pile 0%
- forest (58 building-min): No free ground to plant in range inside your border 42%, Waiting for a free settler 34%, Planting a sapling 23%, Worker picking up a shovel 1%, Idle 0%
- fisher (57 building-min): No fish in range inside your border 61%, Waiting for a free settler 34%, Fishing 3%, Bringing a fish to the pile 2%, Worker picking up a fishing rod 1%
- waterhut (56 building-min): Water pile full, waiting for carriers 47%, Waiting for a free settler 33%, Bringing water to the pile 10%, Fetching water 10%, Worker on the way 1%
- farm (103 building-min): Grain pile full, waiting for carriers 60%, Waiting for a free settler 26%, Sowing a field 6%, Harvesting grain 4%, Bringing grain to the pile 2%
- mill (54 building-min): Output pile full, waiting for carriers 58%, Waiting for a free settler 30%, Grinding flour 6%, Stacking outside 3%, Waiting for grain 2%
- bakery (53 building-min): Output pile full, waiting for carriers 44%, Waiting for a free settler 28%, Baking bread 20%, Waiting for flour 3%, Stacking outside 2%
- coalmine (86 building-min): Needs a worker with a pickaxe 40%, Coal pile full, waiting for carriers 17%, Waiting for a free settler 16%, Mining coal 14%, Deposit thinning: mining coal 9%
- ironmine (46 building-min): Needs meat or fish: mining stopped 61%, Waiting for a free settler 20%, Mining iron ore 13%, Bringing iron ore out 2%, Deposit thinning: mining iron ore 1%
- smelter (43 building-min): Waiting for iron ore 70%, Waiting for a free settler 15%, Smelting iron 11%, Stacking outside 2%, Worker picking up a hammer 0%
- weaponsmith (42 building-min): Waiting for iron 69%, Waiting for a free settler 12%, Forging bow 6%, Forging sword 4%, Waiting for coal and iron 4%
- barracks (40 building-min): Waiting for weapons from the weaponsmith 77%, Weapons on the way 19%, Waiting for a free settler to train 3%, Training soldiers 1%, Idle 0%
- house (176 building-min): Idle 100%
- goldmine (10 building-min): Needs a worker with a pickaxe 78%, Waiting for a free settler 21%, Idle 1%
- goldsmelter (9 building-min): Waiting for gold ore 95%, Worker picking up a hammer 4%, Idle 1%, Working 0%

Building sites, time per state (site-min): Waiting for materials 14, Builders at work 9, Leveling the ground 8, Waiting for a digger 8, Waiting for a builder 4, No way to the site for builders 1, dig 0.

Build order (placed at min:sec, finished at): guard 0:00→0:42, wood 0:02→1:04, quarry 0:42→1:25, saw 1:04→1:44, wood 1:26→2:01, forest 1:46→2:22, fisher 2:02→2:51, waterhut 2:22→3:46, farm 2:52→4:58, mill 3:48→6:14, bakery 6:00→7:20, guard 7:30→8:32, quarry 7:32→8:49, wood 8:32→9:40, farm 9:28→11:50, coalmine 9:48→13:05, ironmine 13:06→13:57, smelter 13:08→16:43, weaponsmith 16:46→18:08, barracks 16:48→20:04, coalmine 19:24→20:35, house 20:42→22:05, house 22:14→23:21, house 24:24→25:31, house 25:40→26:15, house 26:24→27:03, guard 31:24→32:08, guard 32:08→32:58, guard 47:40→48:55, guard 49:02→49:49, goldmine 49:04→50:11, goldsmelter 49:50→50:42.

Demolished or burned: tower (burned) 51:15.

Orders given: archers 5756, place 32, priority 6, sendUnit 4, armyTarget 3, armyReserve 1, armyList 1, profession 1, attack 1. None refused.

People changing jobs: new carrier 41, carrier -> soldier 36, new worker 9, carrier -> worker 8, carrier -> geologist 1, new soldier 1.

People's orders (3531 in all, 3494 done): worker rest farm 186, worker gather farm 184, worker mine coalmine 129, worker rest wood 108, worker gather wood 106, worker rest quarry 104, worker rest coalmine 104, worker gather quarry 102, worker rest forest 101, worker gather forest 100, carrier haul log wood -> saw 90, worker rest saw 87, worker toCraft saw 86, worker craft saw 86. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×13; failed: no way (builder (build 0) own-land-split) ×4.

Failed path searches (who (task) why: times): builder (build 0) own-land-split 4.

Fights and contact: attacked enemy buildings 1 times (first 50:02); took tower 50:18; killed spear 3, sword 4, bow 1; lost people spear 6, sword 9, bow 10; first saw player 2 at 50:00.

Warnings: econ-balance 1. Last: 51:31 econ-balance: plank of owner 1: 8 counted, 3 expected from the bookkeeping

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 28 soldiers, 6 guards, 11 carriers; coal signs 23, iron signs 31.


Script: 1825 turns, 0.1 ms average, worst 13 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 20/2/1653/10/47 | 25/6/3049/10/40 |
| 30 | 21/2/1653/10/60 | 58/9/4692/16/84 |
| 45 | 21/2/1653/10/60 | 73/17/10050/45/95 |
| 60 | 21/2/1653/10/60 | 81/24/14458/70/90 |
| first | - - - - - - | 14 15 16 20 34 38 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 13 16 18 31 45 56 66 70).

First army orders (game min:sec): 0:00 armyTarget sword=14; 0:00 armyTarget spear=10; 0:00 armyTarget bow=16; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 5 | 7 | 16 | 14 | 5 | 0 | 6 | 12 | 10 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 19 | 37 | 1653 | 3355 |
| 30 | 17 | 8 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 43 | 81 | 1653 | 3358 |
| 45 | 17 | 8 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 43 | 81 | 1653 | 3358 |
| 60 | 17 | 8 | 16 | 14 | 8 | 0 | 14 | 24 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 43 | 81 | 1653 | 3358 |

At the end: buildings (built+sites) house 5, wood 3, guard 2, quarry 2, farm 2, hq 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1.
People: carrier 43, worker 12, soldier 6, digger 2, builder 2, geologist 1; beds 50. Soldiers: sword 5, bow 1.

Goods produced in the game: stone 62, log 57, grain 46, plank 44, water 22, flour 22, fish 8, bread 8.
Goods consumed in the game: stone 64, plank 60, log 44, grain 22, water 8, flour 8, pick 3, axe 2, scythe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (112 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (167 building-min): No grown trees in range inside your border 50%, Needs a worker with an axe 28%, Felling a tree 8%, Waiting for a free settler 8%, Bringing a log to the pile 4%
- quarry (110 building-min): Stone pile full, waiting for carriers 85%, Cutting stone 8%, Bringing stone to the pile 3%, Waiting for a free settler 3%, Worker picking up a pickaxe 0%
- saw (58 building-min): Output pile full, waiting for carriers 77%, Waiting for logs 11%, Sawing planks 10%, Stacking outside 2%, Worker picking up a saw 0%
- forest (57 building-min): No free ground to plant in range inside your border 70%, Waiting for a free settler 17%, Planting a sapling 14%, Worker picking up a shovel 0%, Idle 0%
- fisher (56 building-min): Fish pile full, waiting for carriers 83%, Waiting for a free settler 15%, Worker picking up a fishing rod 1%, Idle 0%, Fishing 0%
- waterhut (56 building-min): Water pile full, waiting for carriers 77%, Waiting for a free settler 14%, Bringing water to the pile 5%, Fetching water 4%, Worker on the way 0%
- farm (103 building-min): Grain pile full, waiting for carriers 86%, Waiting for a free settler 7%, Sowing a field 3%, Harvesting grain 2%, Bringing grain to the pile 1%
- mill (54 building-min): Output pile full, waiting for carriers 83%, Waiting for a free settler 11%, Grinding flour 3%, Waiting for grain 2%, Stacking outside 1%
- bakery (52 building-min): Output pile full, waiting for carriers 86%, Waiting for a free settler 8%, Baking bread 4%, Waiting for flour 1%, Waiting for flour and water 1%
- house (231 building-min): Idle 100%

Building sites, time per state (site-min): Waiting for materials 7, Builders at work 5, Leveling the ground 5, Waiting for a digger 4, Waiting for a builder 2.

Build order (placed at min:sec, finished at): guard 0:00→0:54, wood 0:02→1:09, quarry 0:54→1:34, saw 1:10→1:57, wood 1:36→2:17, forest 1:58→2:42, fisher 2:18→3:35, waterhut 2:44→4:25, farm 3:36→5:47, mill 4:26→6:21, guard 6:22→7:30, bakery 6:24→8:15, quarry 8:20→8:47, wood 8:22→9:18, farm 9:42→11:43, house 9:44→12:08, house 12:26→13:05, house 13:14→13:56, house 14:06→14:45, house 14:56→15:24.

Orders given: archers 3347, place 20, armyTarget 3, priority 2, armyReserve 1, armyList 1, profession 1, sendUnit 1. None refused.

People changing jobs: new carrier 44, carrier -> worker 6, new worker 6, carrier -> geologist 1.

People's orders (1228 in all, 1211 done): worker rest farm 104, worker gather farm 102, worker rest quarry 64, worker gather quarry 62, worker rest wood 59, worker rest forest 59, worker gather forest 58, worker gather wood 57, carrier haul log wood -> saw 48, worker rest saw 45, worker toCraft saw 44, worker craft saw 44, carrier haul grain farm -> mill 30, worker rest mill 23. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 6 soldiers, 2 guards, 43 carriers; coal signs 0, iron signs 0.


Script: 1800 turns, 0.1 ms average, worst 61 ms, 0 over 0.3 s, 0 errors. Orders refused: none.
