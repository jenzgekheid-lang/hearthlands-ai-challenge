# Tournament: chatgpt

Game version 196. Written for: chatgpt not stated.

- chatgpt: hearthlands-ai-challenge, commit 6471fe6

Maps 20261030, 777, 4242, 31, each twice (sides swapped), up to 60 game minutes (1x). 37 s.

Each game ends with the script's own game log: what it may know (its own side, and what happened to it or what it saw). Times are game min:sec.

| Opponent | Won | Lost | Undecided |
|---|---|---|---|
| original game NPC | 0 | 0 | 8 |

## Games

Each row: buildings / military / land tiles / soldiers / people at the minute shown. First: game minute of the first smelter, smith, weaponsmith, barracks, tower, castle (- = never).

### Map 31: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 20/2/1693/10/40 | 31/6/3159/10/50 |
| 30 | 32/2/1754/10/60 | 65/10/5868/18/92 |
| 45 | 32/2/1754/10/60 | 75/16/10739/45/105 |
| 60 | 32/2/1754/10/60 | 82/22/14977/70/100 |
| first | 23 25 27 - - - | 8 8 20 22 30 30 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 18 24 33 45 53 62 70).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 19 | 12 | 10 | 16 | 4 | 0 | 19 | 0 | 9 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 19 | 17 | 1693 | 3035 |
| 30 | 40 | 16 | 24 | 19 | 23 | 0 | 21 | 29 | 21 | 16 | 7 | 27 | 0 | 0 | 1 | 0 | 0 | 18 | 101 | 1754 | 3049 |
| 45 | 40 | 16 | 24 | 19 | 24 | 0 | 22 | 32 | 22 | 42 | 21 | 28 | 0 | 0 | 4 | 4 | 3 | 34 | 131 | 1754 | 3049 |
| 60 | 40 | 16 | 24 | 20 | 24 | 0 | 22 | 32 | 22 | 42 | 22 | 28 | 0 | 0 | 4 | 4 | 3 | 37 | 133 | 1754 | 3049 |

At the end: buildings (built+sites) store 5, house 5, wood 3, guard 2, quarry 2, farm 2, coalmine 2, hq 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1, ironmine 1, smelter 1, smith 1, weaponsmith 1.
People: carrier 37, worker 19, soldier 6, digger 2, builder 1, geologist 1; beds 50. Soldiers: sword 5, bow 1.

Goods produced in the game: log 122, grain 106, coal 106, fish 103, stone 91, plank 86, water 74, flour 74, ironore 68, bread 52, iron 46, sword 4, spear 4, bow 3, axe 2, pick 2, saw 1, rod 1, scythe 1.
Goods consumed in the game: plank 94, fish 89, log 86, stone 85, grain 74, coal 64, water 52, flour 52, ironore 46, bread 28, iron 18, pick 6, axe 3, hammer 3, scythe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (116 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (155 building-min): Log pile full, waiting for carriers 68%, Felling a tree 16%, Bringing a log to the pile 6%, Waiting for a free settler 5%, Needs a worker with an axe 4%
- quarry (100 building-min): Stone pile full, waiting for carriers 76%, Cutting stone 15%, Bringing stone to the pile 8%, Worker picking up a pickaxe 0%, Working 0%
- saw (56 building-min): Output pile full, waiting for carriers 72%, Sawing planks 19%, Stacking outside 4%, Waiting for logs 4%, Fetching from the pile 1%
- store (239 building-min): Idle 100%
- forest (55 building-min): No free ground to plant in range inside your border 54%, Planting a sapling 33%, Waiting for a free settler 12%, Worker picking up a shovel 0%, Idle 0%
- fisher (54 building-min): Fish pile full, waiting for carriers 73%, Waiting for a free settler 11%, Fishing 9%, Bringing a fish to the pile 6%, Worker picking up a fishing rod 1%
- waterhut (53 building-min): Water pile full, waiting for carriers 81%, Waiting for a free settler 9%, Fetching water 6%, Bringing water to the pile 4%, Worker on the way 0%
- farm (92 building-min): Grain pile full, waiting for carriers 78%, Sowing a field 9%, Harvesting grain 6%, Waiting for a free settler 4%, Bringing grain to the pile 3%
- mill (51 building-min): Output pile full, waiting for carriers 76%, Grinding flour 8%, Waiting for grain 5%, Waiting for a free settler 5%, Stacking outside 4%
- bakery (49 building-min): Output pile full, waiting for carriers 67%, Baking bread 24%, Waiting for flour 3%, Stacking outside 3%, Waiting for a free settler 2%
- house (229 building-min): Idle 100%
- coalmine (72 building-min): Coal pile full, waiting for carriers 72%, Mining coal 22%, Bringing coal out 4%, Worker picking up a pickaxe 1%, Deposit thinning: mining coal 1%
- ironmine (39 building-min): Iron ore pile full, waiting for carriers 37%, Deposit thinning: mining iron ore 24%, Deposit worn out: finding little iron ore 19%, Mining iron ore 11%, Bringing iron ore out 5%
- smelter (38 building-min): Output pile full, waiting for carriers 78%, Smelting iron 15%, Stacking outside 3%, Waiting for coal 1%, Worker picking up a hammer 1%
- smith (36 building-min): All tool targets met 96%, Forging pickaxe 1%, Worker picking up a hammer 1%, Forging axe 1%, Stacking outside 0%
- weaponsmith (34 building-min): All weapon targets met 84%, Waiting for coal 11%, Forging sword 2%, Forging spear 2%, Forging bow 1%

Building sites, time per state (site-min): Builders at work 8, Leveling the ground 7, Waiting for a builder 5, Waiting for a digger 4, Waiting for materials 2.

Build order (placed at min:sec, finished at): guard 0:00→0:51, wood 0:52→1:29, quarry 1:30→2:10, guard 2:10→2:50, saw 2:52→3:36, store 3:36→4:03, wood 4:04→4:31, forest 4:32→5:09, fisher 5:10→6:01, waterhut 6:02→7:00, farm 7:00→8:31, mill 8:32→9:11, bakery 9:12→10:51, house 10:52→11:48, store 11:48→12:22, house 12:22→13:06, store 13:06→13:35, house 13:36→14:15, store 14:16→14:46, house 14:46→15:24, store 15:26→15:53, house 15:54→16:34, quarry 16:36→17:28, wood 17:30→18:33, farm 18:34→19:46, coalmine 19:48→20:40, ironmine 20:40→21:09, smelter 21:10→22:10, smith 22:48→24:19, weaponsmith 24:20→26:04, coalmine 26:06→27:01.

Orders given: archers 3488, place 31, storeSlot 20, armyTarget 3, weaponKeep 3, priority 3, profession 2, armyReserve 1, armyList 1, sendUnit 1. None refused.

People changing jobs: new carrier 48, carrier -> worker 17, new worker 2, carrier -> geologist 1, builder -> carrier 1.

People's orders (4272 in all, 4248 done): worker rest farm 234, worker gather farm 232, worker mine ironmine 144, worker rest forest 126, worker mine coalmine 126, worker rest wood 125, worker gather forest 125, worker gather wood 122, worker rest coalmine 108, worker rest fisher 104, worker gather fisher 103, carrier haul fish fisher -> store 95, worker rest quarry 93, carrier haul fish store -> ironmine 93. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 6 soldiers, 2 guards, 37 carriers; coal signs 22, iron signs 9.


Script: 1800 turns, 0.4 ms average, worst 33 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 31: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 21/2/1691/10/50 | 32/6/2863/10/50 |
| 30 | 27/2/1704/10/60 | 69/14/6316/33/91 |
| 45 | 27/2/1704/10/60 | 80/19/10962/59/111 |
| 60 | 27/2/1704/10/60 | 84/24/14968/72/98 |
| first | - - - - - - | 11 12 13 15 37 35 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 11 16 33 45 56 59 63 69 72).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 9 | 17 | 11 | 16 | 12 | 0 | 22 | 0 | 16 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 34 | 32 | 1691 | 3217 |
| 30 | 32 | 16 | 24 | 16 | 20 | 0 | 22 | 32 | 22 | 16 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 42 | 96 | 1704 | 3221 |
| 45 | 32 | 16 | 24 | 16 | 20 | 0 | 22 | 32 | 22 | 16 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 42 | 96 | 1704 | 3221 |
| 60 | 32 | 16 | 24 | 16 | 20 | 0 | 22 | 32 | 22 | 16 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 42 | 96 | 1704 | 3221 |

At the end: buildings (built+sites) store 5, house 5, wood 3, guard 2, quarry 2, farm 2, hq 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1, coalmine 1.
People: carrier 42, worker 13, soldier 6, digger 2, builder 2, geologist 1; beds 50. Soldiers: sword 5, bow 1.

Goods produced in the game: log 94, grain 78, stone 71, plank 66, water 46, flour 46, bread 24, coal 16, fish 10.
Goods consumed in the game: plank 74, log 66, stone 65, grain 46, water 24, flour 24, pick 4, bread 4, axe 2, scythe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (116 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (157 building-min): Log pile full, waiting for carriers 48%, Needs a worker with an axe 27%, Felling a tree 14%, Bringing a log to the pile 5%, Waiting for a free settler 4%
- quarry (102 building-min): Stone pile full, waiting for carriers 82%, Cutting stone 12%, Bringing stone to the pile 6%, Worker picking up a pickaxe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 79%, Sawing planks 15%, Stacking outside 3%, Waiting for logs 3%, Worker picking up a saw 0%
- store (244 building-min): Idle 100%
- forest (55 building-min): No free ground to plant in range inside your border 68%, Planting a sapling 22%, Waiting for a free settler 10%, Worker picking up a shovel 0%, Idle 0%
- fisher (54 building-min): Fish pile full, waiting for carriers 90%, Waiting for a free settler 8%, Fishing 1%, Bringing a fish to the pile 0%, Worker picking up a fishing rod 0%
- waterhut (53 building-min): Water pile full, waiting for carriers 87%, Waiting for a free settler 6%, Fetching water 3%, Bringing water to the pile 3%, Idle 0%
- farm (93 building-min): Grain pile full, waiting for carriers 85%, Sowing a field 6%, Harvesting grain 4%, Waiting for a free settler 3%, Bringing grain to the pile 2%
- mill (51 building-min): Output pile full, waiting for carriers 84%, Grinding flour 5%, Waiting for grain 5%, Waiting for a free settler 3%, Stacking outside 2%
- bakery (50 building-min): Output pile full, waiting for carriers 83%, Baking bread 11%, Waiting for flour 2%, Waiting for a free settler 1%, Stacking outside 1%
- house (234 building-min): Idle 100%
- coalmine (41 building-min): Coal pile full, waiting for carriers 93%, Mining coal 5%, Bringing coal out 1%, Worker picking up a pickaxe 1%, Fetching food 0%

Building sites, time per state (site-min): Leveling the ground 6, Builders at work 6, Waiting for a digger 3, Waiting for a builder 3, Waiting for materials 1.

Build order (placed at min:sec, finished at): guard 0:00→0:42, wood 0:42→1:09, quarry 1:10→1:43, saw 1:44→2:20, guard 2:20→3:15, store 3:16→3:40, wood 3:42→4:31, forest 4:32→5:04, fisher 5:06→6:03, waterhut 6:04→7:00, farm 7:02→8:05, mill 8:06→8:56, bakery 8:56→9:45, house 9:46→10:21, store 10:22→10:49, house 10:50→11:49, store 11:50→12:18, house 12:18→12:57, store 12:58→13:35, house 13:36→14:30, store 14:30→15:12, house 15:12→15:57, quarry 15:58→16:27, wood 16:28→17:32, farm 17:32→18:45, coalmine 18:46→19:22.

Orders given: archers 3481, place 26, storeSlot 20, armyTarget 3, weaponKeep 3, priority 2, armyReserve 1, armyList 1, profession 1, sendUnit 1. None refused.

People changing jobs: new carrier 46, carrier -> worker 9, new worker 4, carrier -> geologist 1.

People's orders (2068 in all, 2050 done): worker rest farm 164, worker gather farm 162, worker rest forest 99, worker gather forest 98, worker rest wood 96, worker gather wood 94, worker rest quarry 73, worker gather quarry 71, worker rest saw 67, worker toCraft saw 66, worker craft saw 66, carrier haul grain farm -> mill 54, worker rest waterhut 47, worker rest mill 47. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 6 soldiers, 2 guards, 42 carriers; coal signs 10, iron signs 1.


Script: 1800 turns, 0.3 ms average, worst 16 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 14/2/1700/10/10 | 33/6/2488/10/50 |
| 30 | 30/2/1765/10/60 | 47/7/3196/11/49 |
| 45 | 34/4/1991/23/47 | 70/14/7620/32/88 |
| 60 | 34/4/1991/25/45 | 80/23/13706/69/91 |
| first | 26 29 31 33 - - | 10 11 14 15 28 46 |

Soldiers every 5 min: 10 10 10 10 10 10 13 19 23 25 25 25 (original game NPC: 10 10 10 10 10 11 11 20 32 50 63 69).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 14 | 10 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 19 | 1700 | 3547 |
| 30 | 2 | 2 | 28 | 19 | 20 | 0 | 22 | 32 | 22 | 19 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 32 | 65 | 1765 | 3552 |
| 45 | 24 | 16 | 24 | 18 | 19 | 0 | 22 | 32 | 22 | 30 | 1 | 7 | 0 | 0 | 0 | 0 | 1 | 17 | 88 | 1991 | 3926 |
| 60 | 24 | 16 | 24 | 19 | 20 | 0 | 22 | 32 | 22 | 34 | 0 | 24 | 0 | 0 | 0 | 0 | 0 | 20 | 96 | 1991 | 3927 |

At the end: buildings (built+sites) store 5, house 5, guard 4, wood 3, quarry 2, farm 2, hq 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1, coalmine 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1.
People: carrier 23, worker 18, soldier 17, digger 2, builder 1, geologist 1; beds 50. Soldiers: sword 9, bow 4, spear 4.

Goods produced in the game: fish 150, log 110, grain 107, stone 101, coal 100, plank 90, water 75, flour 75, bread 53, ironore 45, iron 45, sword 6, bow 5, spear 4, axe 2, saw 1, pick 1, rod 1, scythe 1.
Goods consumed in the game: fish 137, plank 98, stone 95, log 90, grain 75, coal 66, water 53, flour 53, ironore 45, bread 33, iron 21, sword 6, pick 5, bow 5, spear 4, axe 3, hammer 3, scythe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (159 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (152 building-min): No grown trees in range inside your border 53%, Log pile full, waiting for carriers 16%, Felling a tree 15%, Waiting for a free settler 7%, Needs a worker with an axe 5%
- quarry (96 building-min): Stone pile full, waiting for carriers 77%, Cutting stone 16%, Bringing stone to the pile 6%, Worker picking up a pickaxe 0%, Working 0%
- saw (56 building-min): Output pile full, waiting for carriers 60%, Sawing planks 20%, Waiting for logs 14%, Stacking outside 4%, Fetching from the pile 0%
- store (224 building-min): Idle 100%
- forest (54 building-min): No free ground to plant in range inside your border 48%, Planting a sapling 33%, Waiting for a free settler 18%, Worker picking up a shovel 1%, Idle 0%
- fisher (53 building-min): Fish pile full, waiting for carriers 47%, Fishing 20%, Bringing a fish to the pile 16%, Waiting for a free settler 16%, Worker picking up a fishing rod 1%
- waterhut (51 building-min): Water pile full, waiting for carriers 78%, Waiting for a free settler 13%, Fetching water 5%, Bringing water to the pile 4%, Worker on the way 0%
- farm (84 building-min): Grain pile full, waiting for carriers 77%, Sowing a field 9%, Harvesting grain 6%, Waiting for a free settler 4%, Bringing grain to the pile 3%
- mill (47 building-min): Output pile full, waiting for carriers 74%, Grinding flour 9%, Waiting for grain 7%, Waiting for a free settler 5%, Stacking outside 5%
- bakery (46 building-min): Output pile full, waiting for carriers 63%, Baking bread 27%, Waiting for flour 4%, Stacking outside 3%, Waiting for a free settler 3%
- house (210 building-min): Idle 100%
- coalmine (36 building-min): Coal pile full, waiting for carriers 36%, Deposit thinning: mining coal 35%, Mining coal 20%, Bringing coal out 8%, Came back empty-handed 1%
- ironmine (36 building-min): Deposit worn out: finding little iron ore 91%, Bringing iron ore out 3%, Came back empty-handed 3%, Fetching food 2%, Worker picking up a pickaxe 1%
- smelter (34 building-min): Waiting for iron ore 79%, Smelting iron 17%, Stacking outside 3%, Worker picking up a hammer 1%, Fetching from the pile 0%
- smith (31 building-min): All tool targets met 96%, Forging axe 1%, Worker picking up a hammer 1%, Stacking outside 1%, Forging saw 0%
- weaponsmith (29 building-min): All weapon targets met 51%, Waiting for iron 40%, Forging sword 3%, Forging bow 2%, Forging spear 2%
- barracks (28 building-min): Soldier targets met 53%, Waiting for weapons from the weaponsmith 37%, Weapons on the way 9%, Training soldiers 0%

Building sites, time per state (site-min): Builders at work 9, Leveling the ground 8, Waiting for materials 6, Waiting for a digger 4, Waiting for a builder 4.

Build order (placed at min:sec, finished at): guard 0:00→0:39, wood 0:40→1:19, quarry 1:20→2:02, guard 2:02→2:46, saw 2:48→3:41, store 3:42→4:07, wood 4:08→4:35, forest 4:36→5:31, fisher 5:32→7:14, waterhut 7:16→9:12, farm 9:12→12:30, mill 12:32→13:26, bakery 13:28→14:29, house 14:30→15:32, store 15:32→16:01, house 16:02→16:47, store 16:48→17:13, house 17:14→17:56, store 17:58→18:38, house 18:40→19:13, store 19:14→20:01, house 20:02→20:53, quarry 20:54→21:34, wood 21:36→22:05, farm 22:06→23:12, coalmine 23:14→23:45, ironmine 23:46→24:13, smelter 24:14→25:33, smith 27:40→28:48, weaponsmith 28:50→30:51, barracks 31:10→32:26, guard 37:04→38:21, guard 38:22→38:59.

Orders given: archers 4775, place 33, storeSlot 20, priority 6, armyTarget 3, weaponKeep 3, profession 2, armyReserve 1, armyList 1, sendUnit 1. None refused.

People changing jobs: new carrier 48, carrier -> worker 16, carrier -> soldier 15, new worker 2, carrier -> geologist 1, builder -> carrier 1.

People's orders (4627 in all, 4597 done): worker rest farm 226, worker gather farm 224, worker mine ironmine 173, worker rest fisher 150, worker gather fisher 150, carrier haul fish fisher -> store 143, carrier haul fish store -> ironmine 141, worker eat ironmine 137, worker mine coalmine 122, worker rest forest 119, worker gather forest 118, worker rest wood 113, worker gather wood 110, worker rest quarry 103. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 17 soldiers, 4 guards, 23 carriers; coal signs 20, iron signs 15.


Script: 1800 turns, 0.2 ms average, worst 86 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 18/2/1672/10/30 | 33/6/2657/10/50 |
| 30 | 26/2/1703/10/60 | 61/8/4150/17/93 |
| 45 | 26/2/1703/10/60 | 72/20/10842/51/79 |
| 60 | 26/2/1703/10/60 | 81/25/14795/76/94 |
| first | - - - - - - | 10 11 13 15 32 34 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 13 17 24 41 51 60 74 76).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 9 | 10 | 11 | 15 | 2 | 0 | 13 | 3 | 7 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 15 | 1672 | 2932 |
| 30 | 24 | 16 | 24 | 16 | 16 | 0 | 22 | 32 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 43 | 80 | 1703 | 2933 |
| 45 | 24 | 16 | 24 | 16 | 16 | 0 | 22 | 32 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 43 | 80 | 1703 | 2933 |
| 60 | 24 | 16 | 24 | 16 | 16 | 0 | 22 | 32 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 43 | 80 | 1703 | 2933 |

At the end: buildings (built+sites) store 5, house 5, wood 3, guard 2, quarry 2, farm 2, hq 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1.
People: carrier 43, worker 12, soldier 6, digger 2, builder 2, geologist 1; beds 50. Soldiers: sword 5, bow 1.

Goods produced in the game: log 82, stone 70, grain 70, plank 62, water 38, flour 38, bread 16, fish 10.
Goods consumed in the game: plank 70, stone 64, log 62, grain 38, water 16, flour 16, pick 3, axe 2, scythe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (115 building-min): Idle 100%, Soldiers on the way 0%
- wood (154 building-min): No grown trees in range inside your border 31%, Needs a worker with an axe 26%, Log pile full, waiting for carriers 22%, Felling a tree 11%, Waiting for a free settler 4%
- quarry (99 building-min): Stone pile full, waiting for carriers 83%, Cutting stone 11%, Bringing stone to the pile 5%, Worker picking up a pickaxe 0%, Working 0%
- saw (57 building-min): Output pile full, waiting for carriers 78%, Sawing planks 14%, Waiting for logs 4%, Stacking outside 3%, Worker picking up a saw 1%
- store (235 building-min): Idle 100%
- forest (54 building-min): No free ground to plant in range inside your border 61%, Planting a sapling 27%, Waiting for a free settler 12%, Worker picking up a shovel 0%, Idle 0%
- fisher (53 building-min): Fish pile full, waiting for carriers 87%, Waiting for a free settler 10%, Fishing 1%, Bringing a fish to the pile 1%, Worker picking up a fishing rod 1%
- waterhut (51 building-min): Water pile full, waiting for carriers 84%, Waiting for a free settler 8%, Fetching water 4%, Bringing water to the pile 4%, Worker on the way 0%
- farm (90 building-min): Grain pile full, waiting for carriers 85%, Sowing a field 6%, Harvesting grain 4%, Waiting for a free settler 3%, Bringing grain to the pile 2%
- mill (49 building-min): Output pile full, waiting for carriers 84%, Waiting for grain 5%, Grinding flour 4%, Waiting for a free settler 4%, Stacking outside 2%
- bakery (48 building-min): Output pile full, waiting for carriers 86%, Baking bread 8%, Waiting for flour 2%, Waiting for a free settler 2%, Stacking outside 1%
- house (224 building-min): Idle 100%

Building sites, time per state (site-min): Leveling the ground 6, Builders at work 5, Waiting for a digger 3, Waiting for a builder 3, Waiting for materials 2.

Build order (placed at min:sec, finished at): guard 0:00→0:49, wood 0:50→1:19, quarry 1:20→1:56, saw 1:56→2:58, guard 3:00→4:11, store 4:12→4:52, wood 4:54→5:44, forest 5:46→6:27, fisher 6:28→7:17, waterhut 7:18→8:39, farm 8:40→9:48, mill 9:48→10:40, bakery 10:40→11:49, house 11:50→12:36, store 12:38→13:27, house 13:28→14:07, store 14:08→14:36, house 14:36→15:14, store 15:14→15:43, house 15:44→16:19, store 16:20→16:41, house 16:42→17:39, quarry 17:40→18:43, wood 18:44→19:27, farm 19:28→20:38.

Orders given: archers 3449, place 25, storeSlot 20, armyTarget 3, weaponKeep 3, priority 2, profession 1, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 45, carrier -> worker 7, new worker 5.

People's orders (1858 in all, 1841 done): worker rest farm 155, worker gather farm 153, worker rest forest 109, worker gather forest 108, worker rest wood 84, worker gather wood 82, worker rest quarry 72, worker gather quarry 70, worker rest saw 63, carrier haul log wood -> saw 62, worker toCraft saw 62, worker craft saw 62, carrier haul grain farm -> mill 46, worker rest waterhut 39. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 6 soldiers, 2 guards, 43 carriers; coal signs 0, iron signs 0.


Script: 1800 turns, 0.1 ms average, worst 15 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 20/2/1694/10/40 | 32/6/2816/10/50 |
| 30 | 26/2/1708/10/60 | 59/10/5260/22/78 |
| 45 | 26/2/1708/10/60 | 74/16/9859/57/93 |
| 60 | 26/2/1708/10/60 | 83/24/15681/79/91 |
| first | - - - - - - | 9 10 16 18 38 36 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 12 22 40 49 57 67 72 79).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 13 | 10 | 16 | 4 | 0 | 22 | 0 | 9 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 13 | 18 | 1694 | 3239 |
| 30 | 32 | 16 | 24 | 16 | 16 | 0 | 22 | 32 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 43 | 88 | 1708 | 3242 |
| 45 | 32 | 16 | 24 | 16 | 16 | 0 | 22 | 32 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 43 | 88 | 1708 | 3242 |
| 60 | 32 | 16 | 24 | 16 | 16 | 0 | 22 | 32 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 43 | 88 | 1708 | 3242 |

At the end: buildings (built+sites) store 5, house 5, wood 3, guard 2, quarry 2, farm 2, hq 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1.
People: carrier 43, worker 12, soldier 6, digger 2, builder 2, geologist 1; beds 50. Soldiers: sword 5, bow 1.

Goods produced in the game: log 90, stone 70, grain 70, plank 62, water 38, flour 38, bread 16, fish 10.
Goods consumed in the game: plank 70, stone 64, log 62, grain 38, water 16, flour 16, pick 3, axe 2, scythe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (116 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (154 building-min): Log pile full, waiting for carriers 56%, Needs a worker with an axe 27%, Felling a tree 12%, Bringing a log to the pile 3%, No grown trees in range inside your border 1%
- quarry (100 building-min): Stone pile full, waiting for carriers 83%, Cutting stone 11%, Bringing stone to the pile 5%, Worker picking up a pickaxe 0%, Working 0%
- saw (56 building-min): Output pile full, waiting for carriers 82%, Sawing planks 14%, Stacking outside 3%, Fetching from the pile 0%, Worker picking up a saw 0%
- store (238 building-min): Idle 100%
- forest (53 building-min): No free ground to plant in range inside your border 69%, Planting a sapling 20%, Waiting for a free settler 10%, Worker picking up a shovel 0%, Idle 0%
- fisher (53 building-min): Fish pile full, waiting for carriers 90%, Waiting for a free settler 9%, Fishing 1%, Worker picking up a fishing rod 1%, Bringing a fish to the pile 0%
- waterhut (52 building-min): Water pile full, waiting for carriers 88%, Waiting for a free settler 7%, Fetching water 3%, Bringing water to the pile 2%, Worker on the way 0%
- farm (91 building-min): Grain pile full, waiting for carriers 85%, Sowing a field 6%, Harvesting grain 4%, Waiting for a free settler 2%, Bringing grain to the pile 2%
- mill (50 building-min): Output pile full, waiting for carriers 84%, Waiting for grain 5%, Grinding flour 4%, Waiting for a free settler 3%, Stacking outside 2%
- bakery (49 building-min): Output pile full, waiting for carriers 86%, Baking bread 7%, Waiting for flour 3%, Waiting for a free settler 2%, Stacking outside 1%
- house (228 building-min): Idle 100%

Building sites, time per state (site-min): Leveling the ground 6, Builders at work 5, Waiting for a digger 3, Waiting for a builder 3, Waiting for materials 1.

Build order (placed at min:sec, finished at): guard 0:00→0:42, wood 0:42→1:36, quarry 1:38→2:22, guard 2:22→3:08, saw 3:10→4:09, store 4:10→4:39, wood 4:40→5:29, forest 5:30→6:31, fisher 6:32→7:13, waterhut 7:14→8:21, farm 8:22→9:44, mill 9:46→10:17, bakery 10:18→11:05, house 11:06→11:51, store 11:52→12:30, house 12:32→13:05, store 13:06→13:33, house 13:34→14:16, store 14:18→14:57, house 14:58→15:45, store 15:46→16:14, house 16:14→16:57, quarry 16:58→17:52, wood 17:54→18:32, farm 18:34→19:46.

Orders given: archers 3484, place 25, storeSlot 20, profession 9, armyTarget 3, weaponKeep 3, priority 2, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 48, carrier -> worker 10, new worker 2, carrier -> geologist 1.

People's orders (1861 in all, 1844 done): worker rest farm 156, worker gather farm 154, worker rest forest 93, worker rest wood 92, worker gather forest 92, worker gather wood 90, worker rest quarry 72, worker gather quarry 70, worker rest saw 63, worker toCraft saw 62, worker craft saw 62, carrier haul log wood -> saw 52, carrier haul grain farm -> mill 46, worker rest waterhut 39. None failed.

Fights and contact: first saw player 2 at 59:00.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 6 soldiers, 2 guards, 43 carriers; coal signs 0, iron signs 0.


Script: 1800 turns, 0.2 ms average, worst 119 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 21/2/1685/10/44 | 34/6/2895/10/50 |
| 30 | 25/2/1691/10/60 | 65/13/6825/28/92 |
| 45 | 25/2/1691/10/60 | 76/18/11952/62/98 |
| 60 | 25/2/1691/10/60 | 82/25/16300/76/84 |
| first | - - - - - - | 7 8 9 13 25 31 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 21 21 28 49 54 62 66 72 76).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 12 | 14 | 9 | 16 | 7 | 0 | 22 | 5 | 11 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 19 | 21 | 1685 | 3289 |
| 30 | 24 | 16 | 24 | 16 | 16 | 0 | 22 | 24 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 44 | 72 | 1691 | 3301 |
| 45 | 24 | 16 | 24 | 16 | 16 | 0 | 22 | 24 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 44 | 72 | 1691 | 3301 |
| 60 | 24 | 16 | 24 | 16 | 16 | 0 | 22 | 24 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 44 | 72 | 1691 | 3301 |

At the end: buildings (built+sites) store 5, house 5, wood 3, guard 2, quarry 2, hq 1, saw 1, forest 1, fisher 1, waterhut 1, farm 1, mill 1, bakery 1.
People: carrier 44, worker 11, soldier 6, digger 2, builder 2, geologist 1; beds 50. Soldiers: sword 5, bow 1.

Goods produced in the game: log 76, stone 64, grain 62, plank 56, water 38, flour 38, bread 16, fish 10.
Goods consumed in the game: plank 64, stone 58, log 56, grain 38, water 16, flour 16, pick 3, axe 2, saw 1, shovel 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (116 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (155 building-min): No grown trees in range inside your border 28%, Needs a worker with an axe 27%, Log pile full, waiting for carriers 26%, Felling a tree 11%, Bringing a log to the pile 4%
- quarry (101 building-min): Stone pile full, waiting for carriers 84%, Cutting stone 11%, Bringing stone to the pile 5%, Worker picking up a pickaxe 0%, Working 0%
- saw (56 building-min): Output pile full, waiting for carriers 83%, Sawing planks 13%, Stacking outside 3%, Waiting for logs 1%, Worker picking up a saw 0%
- store (241 building-min): Idle 100%
- forest (54 building-min): No free ground to plant in range inside your border 76%, Planting a sapling 13%, Waiting for a free settler 10%, Worker picking up a shovel 0%, Idle 0%
- fisher (53 building-min): Fish pile full, waiting for carriers 90%, Waiting for a free settler 8%, Fishing 1%, Worker picking up a fishing rod 0%, Bringing a fish to the pile 0%
- waterhut (52 building-min): Water pile full, waiting for carriers 88%, Waiting for a free settler 7%, Fetching water 3%, Bringing water to the pile 2%, Idle 0%
- farm (51 building-min): Grain pile full, waiting for carriers 77%, Sowing a field 9%, Harvesting grain 6%, Waiting for a free settler 5%, Bringing grain to the pile 3%
- mill (51 building-min): Output pile full, waiting for carriers 84%, Waiting for grain 5%, Grinding flour 4%, Waiting for a free settler 4%, Stacking outside 2%
- bakery (49 building-min): Output pile full, waiting for carriers 87%, Baking bread 7%, Waiting for flour 3%, Waiting for a free settler 2%, Stacking outside 1%
- house (232 building-min): Idle 100%

Building sites, time per state (site-min): Leveling the ground 7, Builders at work 5, Waiting for a digger 3, Waiting for a builder 3, Waiting for materials 0.

Build order (placed at min:sec, finished at): guard 0:00→0:55, wood 0:56→1:35, quarry 1:36→2:10, guard 2:10→2:57, saw 2:58→3:52, store 3:52→4:23, wood 4:24→5:06, forest 5:06→5:51, fisher 5:52→6:46, waterhut 6:46→7:35, farm 7:36→8:36, mill 8:36→9:25, bakery 9:26→10:32, house 10:34→11:10, store 11:12→11:50, house 11:50→12:23, store 12:24→13:04, house 13:04→13:37, store 13:38→14:09, house 14:10→14:51, store 14:52→15:31, house 15:32→16:24, quarry 16:26→17:14, wood 17:14→18:18.

Orders given: archers 3483, place 24, storeSlot 20, armyTarget 3, weaponKeep 3, priority 2, profession 1, armyReserve 1, armyList 1. None refused.

People changing jobs: new carrier 45, carrier -> worker 6, new worker 5.

People's orders (1623 in all, 1607 done): worker rest farm 133, worker gather farm 132, worker rest wood 78, worker gather wood 76, worker rest quarry 66, worker gather quarry 64, worker rest saw 57, worker rest forest 57, worker toCraft saw 56, worker craft saw 56, worker gather forest 56, carrier haul grain farm -> mill 46, worker rest waterhut 39, worker rest mill 39. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 6 soldiers, 2 guards, 44 carriers; coal signs 0, iron signs 0.


Script: 1800 turns, 0.4 ms average, worst 62 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 16/2/1703/10/20 | 24/6/2773/10/40 |
| 30 | 28/2/1750/10/60 | 30/6/3176/10/50 |
| 45 | 28/2/1750/10/60 | 40/6/3590/10/70 |
| 60 | 28/2/1750/10/60 | 70/13/7534/33/97 |
| first | 26 - - - - - | 7 9 47 47 57 57 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 10 10 10 10 11 16 33).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 17 | 9 | 9 | 11 | 0 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 21 | 1703 | 3279 |
| 30 | 32 | 16 | 24 | 4 | 20 | 0 | 22 | 24 | 22 | 16 | 13 | 16 | 0 | 0 | 0 | 0 | 0 | 40 | 82 | 1750 | 3284 |
| 45 | 32 | 16 | 24 | 14 | 20 | 0 | 22 | 24 | 22 | 22 | 22 | 16 | 0 | 0 | 0 | 0 | 0 | 42 | 98 | 1750 | 3285 |
| 60 | 32 | 16 | 24 | 20 | 20 | 0 | 22 | 24 | 22 | 22 | 22 | 16 | 0 | 0 | 0 | 0 | 0 | 42 | 104 | 1750 | 3285 |

At the end: buildings (built+sites) store 5, house 5, wood 3, guard 2, quarry 2, hq 1, saw 1, forest 1, fisher 1, waterhut 1, farm 1, mill 1, bakery 1, coalmine 1, ironmine 1, smelter 1.
People: carrier 42, worker 14, soldier 6, digger 2, builder 1, geologist 1; beds 50. Soldiers: sword 5, bow 1.

Goods produced in the game: log 96, grain 77, stone 72, plank 68, water 53, flour 53, fish 42, coal 38, ironore 38, bread 31, iron 16.
Goods consumed in the game: plank 76, log 68, stone 66, grain 53, water 31, flour 31, fish 28, coal 16, ironore 16, bread 11, pick 5, axe 2, saw 1, shovel 1, rod 1, scythe 1, hammer 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (116 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (151 building-min): Log pile full, waiting for carriers 51%, Needs a worker with an axe 25%, Felling a tree 14%, Waiting for a free settler 6%, Bringing a log to the pile 4%
- quarry (96 building-min): Stone pile full, waiting for carriers 80%, Cutting stone 13%, Bringing stone to the pile 7%, Worker picking up a pickaxe 0%, Working 0%
- saw (56 building-min): Output pile full, waiting for carriers 81%, Sawing planks 15%, Stacking outside 3%, Fetching from the pile 0%, Worker picking up a saw 0%
- store (226 building-min): Idle 100%
- forest (55 building-min): No free ground to plant in range inside your border 56%, Planting a sapling 28%, Waiting for a free settler 15%, Worker picking up a shovel 0%, Idle 0%
- fisher (54 building-min): No fish in range inside your border 61%, Fish pile full, waiting for carriers 20%, Waiting for a free settler 14%, Fishing 3%, Bringing a fish to the pile 2%
- waterhut (52 building-min): Water pile full, waiting for carriers 70%, Waiting for a free settler 12%, Bringing water to the pile 9%, Fetching water 9%, Idle 0%
- farm (50 building-min): Grain pile full, waiting for carriers 67%, Sowing a field 12%, Waiting for a free settler 8%, Harvesting grain 8%, Bringing grain to the pile 4%
- mill (49 building-min): Output pile full, waiting for carriers 78%, Waiting for grain 7%, Grinding flour 6%, Waiting for a free settler 6%, Stacking outside 3%
- bakery (47 building-min): Output pile full, waiting for carriers 76%, Baking bread 15%, Waiting for flour 3%, Waiting for a free settler 2%, Stacking outside 2%
- house (212 building-min): Idle 100%
- coalmine (37 building-min): Coal pile full, waiting for carriers 79%, Mining coal 17%, Bringing coal out 3%, Worker picking up a pickaxe 1%, Came back empty-handed 0%
- ironmine (36 building-min): Iron ore pile full, waiting for carriers 73%, Mining iron ore 15%, Needs meat or fish: mining stopped 4%, Deposit thinning: mining iron ore 3%, Bringing iron ore out 3%
- smelter (34 building-min): Output pile full, waiting for carriers 92%, Smelting iron 6%, Stacking outside 1%, Worker picking up a hammer 0%, Waiting for coal and iron ore 0%

Building sites, time per state (site-min): Leveling the ground 7, Builders at work 6, Waiting for a digger 5, Waiting for a builder 5, Waiting for materials 2.

Build order (placed at min:sec, finished at): guard 0:00→0:42, wood 0:42→1:22, quarry 1:22→2:11, guard 2:12→3:01, saw 3:02→3:47, store 3:48→4:09, wood 4:10→4:43, forest 4:44→5:17, fisher 5:18→6:03, waterhut 6:04→7:36, farm 7:38→9:39, mill 9:40→11:05, bakery 11:06→12:44, house 12:46→13:45, store 13:46→14:40, house 14:40→15:33, store 15:34→16:17, house 16:18→17:15, store 17:16→18:15, house 18:16→19:29, store 19:30→20:28, house 20:30→21:30, quarry 21:30→22:16, wood 22:16→22:55, coalmine 22:58→23:29, ironmine 23:32→24:03, smelter 24:06→25:38.

Orders given: archers 3488, place 27, storeSlot 20, armyTarget 3, weaponKeep 3, priority 3, profession 2, armyReserve 1, armyList 1, sendUnit 1. None refused.

People changing jobs: new carrier 46, carrier -> worker 10, new worker 4, carrier -> geologist 1, builder -> carrier 1.

People's orders (2713 in all, 2694 done): worker rest farm 168, worker gather farm 167, worker rest forest 117, worker gather forest 116, worker rest wood 98, worker gather wood 96, worker rest quarry 74, worker gather quarry 72, worker rest saw 69, worker toCraft saw 68, worker craft saw 68, worker mine ironmine 60, worker rest waterhut 54, worker rest mill 54. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 6 soldiers, 2 guards, 42 carriers; coal signs 12, iron signs 21.


Script: 1800 turns, 0.5 ms average, worst 129 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 19/2/1672/10/39 | 25/6/3049/10/40 |
| 30 | 26/2/1694/10/60 | 43/6/3474/10/60 |
| 45 | 26/2/1694/10/60 | 64/9/6324/25/105 |
| 60 | 26/2/1694/10/60 | 71/16/12016/55/95 |
| first | - - - - - - | 14 15 16 20 39 46 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 10 10 13 25 34 45 55).

First army orders (game min:sec): 0:00 armyTarget sword=8; 0:00 armyTarget spear=4; 0:00 armyTarget bow=4; 0:00 armyReserve.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 9 | 11 | 10 | 16 | 2 | 0 | 21 | 2 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 17 | 18 | 1672 | 3178 |
| 30 | 32 | 16 | 24 | 16 | 16 | 0 | 22 | 32 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 43 | 88 | 1694 | 3180 |
| 45 | 32 | 16 | 24 | 16 | 16 | 0 | 22 | 32 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 43 | 88 | 1694 | 3180 |
| 60 | 32 | 16 | 24 | 16 | 16 | 0 | 22 | 32 | 22 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 43 | 88 | 1694 | 3180 |

At the end: buildings (built+sites) store 5, house 5, wood 3, guard 2, quarry 2, farm 2, hq 1, saw 1, forest 1, fisher 1, waterhut 1, mill 1, bakery 1.
People: carrier 43, worker 12, soldier 6, digger 2, builder 2, geologist 1; beds 50. Soldiers: sword 5, bow 1.

Goods produced in the game: log 90, stone 70, grain 70, plank 62, water 38, flour 38, bread 16, fish 10.
Goods consumed in the game: plank 70, stone 64, log 62, grain 38, water 16, flour 16, pick 3, axe 2, scythe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (116 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (155 building-min): Log pile full, waiting for carriers 50%, Needs a worker with an axe 27%, Felling a tree 13%, Bringing a log to the pile 5%, Waiting for a free settler 5%
- quarry (100 building-min): Stone pile full, waiting for carriers 85%, Cutting stone 10%, Bringing stone to the pile 4%, Worker picking up a pickaxe 1%, Working 0%
- saw (57 building-min): Output pile full, waiting for carriers 78%, Sawing planks 14%, Waiting for logs 4%, Stacking outside 3%, Worker picking up a saw 0%
- store (237 building-min): Idle 100%
- forest (55 building-min): No free ground to plant in range inside your border 63%, Planting a sapling 23%, Waiting for a free settler 13%, Idle 0%, Worker picking up a shovel 0%
- fisher (54 building-min): Fish pile full, waiting for carriers 87%, Waiting for a free settler 11%, Worker picking up a fishing rod 1%, Fishing 1%, Idle 0%
- waterhut (52 building-min): Water pile full, waiting for carriers 85%, Waiting for a free settler 9%, Fetching water 3%, Bringing water to the pile 2%, Worker on the way 0%
- farm (91 building-min): Grain pile full, waiting for carriers 85%, Sowing a field 6%, Harvesting grain 4%, Waiting for a free settler 3%, Bringing grain to the pile 2%
- mill (50 building-min): Output pile full, waiting for carriers 84%, Waiting for grain 6%, Grinding flour 4%, Waiting for a free settler 4%, Stacking outside 2%
- bakery (49 building-min): Output pile full, waiting for carriers 85%, Baking bread 7%, Waiting for flour 3%, Waiting for a free settler 2%, Waiting for flour and water 1%
- house (226 building-min): Idle 100%

Building sites, time per state (site-min): Leveling the ground 6, Builders at work 5, Waiting for a digger 3, Waiting for a builder 3, Waiting for materials 2.

Build order (placed at min:sec, finished at): guard 0:00→0:54, wood 0:54→1:27, quarry 1:28→2:08, guard 2:10→2:42, saw 2:44→3:23, store 3:24→3:52, wood 3:52→4:32, forest 4:32→5:03, fisher 5:04→6:17, waterhut 6:18→7:43, farm 7:44→9:38, mill 9:38→10:30, bakery 10:30→11:30, house 11:30→12:19, store 12:20→12:51, house 12:52→13:28, store 13:30→14:04, house 14:04→14:43, store 14:44→15:19, house 15:20→15:56, store 15:58→16:28, house 16:28→17:10, quarry 17:10→18:05, wood 18:06→18:49, farm 18:50→19:46.

Orders given: archers 3491, place 25, storeSlot 20, armyTarget 3, weaponKeep 3, priority 2, armyReserve 1, armyList 1, profession 1. None refused.

People changing jobs: new carrier 48, carrier -> worker 10, new worker 2, carrier -> geologist 1.

People's orders (1861 in all, 1844 done): worker rest farm 156, worker gather farm 154, worker rest forest 100, worker gather forest 99, worker rest wood 92, worker gather wood 90, worker rest quarry 72, worker gather quarry 70, worker rest saw 63, worker toCraft saw 62, worker craft saw 62, carrier haul grain farm -> mill 46, carrier haul log wood -> saw 41, worker rest waterhut 39. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan check: 6 soldiers, 2 guards, 43 carriers; coal signs 0, iron signs 0.


Script: 1800 turns, 0.1 ms average, worst 14 ms, 0 over 0.3 s, 0 errors. Orders refused: none.
