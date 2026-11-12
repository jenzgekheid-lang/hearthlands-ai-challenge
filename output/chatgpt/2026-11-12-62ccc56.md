# Tournament: chatgpt

Game version 204. Written for: chatgpt 204.

- chatgpt: hearthlands-ai-challenge, commit 62ccc56

Maps 20261030, 777, 4242, 31, each twice (sides swapped), up to 60 game minutes (1x). 37 s.

Each game ends with the script's own game log: what it may know (its own side, and what happened to it or what it saw). Times are game min:sec.

| Opponent | Won | Lost | Undecided |
|---|---|---|---|
| original game NPC | 2 | 0 | 6 |

## Games

Each row: buildings / military / land tiles / soldiers / people at the minute shown. First: game minute of the first smelter, smith, weaponsmith, barracks, tower, castle (- = never).

### Map 31: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 23/1/1392/2/60 | 36/5/2584/6/62 |
| 30 | 24/1/1392/6/42 | 61/8/6107/16/90 |
| 45 | 25/1/1410/7/46 | 71/14/10747/34/104 |
| 60 | 25/1/1410/2/32 | 78/20/14878/55/97 |
| first | 6 7 15 16 - - | 8 8 14 15 30 25 |

Soldiers every 5 min: 9 2 2 6 8 6 3 8 7 3 4 2 (original game NPC: 9 6 6 7 15 16 26 29 34 41 46 55).

First army orders (game min:sec): 4:06 attack 8 soldiers -> building 132; 14:28 armyTarget sword=5; 14:28 armyTarget spear=3; 14:28 armyReserve; 15:08 armyTarget sword=6; 15:08 armyTarget spear=4; 15:44 attack 5 soldiers -> building 136; 16:18 attack 1 soldiers -> building 136; 19:06 march 2 soldiers -> 186,125; 25:04 attack 7 soldiers -> building 132; 25:24 attack 1 soldiers -> building 132; 30:08 armyTarget sword=7.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 15 | 11 | 10 | 15 | 3 | 0 | 13 | 11 | 13 | 17 | 0 | 7 | 0 | 0 | 1 | 0 | 0 | 27 | 50 | 1392 | 17720 |
| 30 | 32 | 8 | 16 | 15 | 12 | 0 | 14 | 16 | 14 | 25 | 0 | 3 | 0 | 0 | 1 | 0 | 0 | 12 | 100 | 1392 | 19056 |
| 45 | 32 | 8 | 16 | 15 | 12 | 0 | 14 | 16 | 14 | 18 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 19 | 93 | 1410 | 19108 |
| 60 | 32 | 8 | 16 | 15 | 11 | 0 | 13 | 15 | 13 | 10 | 2 | 6 | 0 | 0 | 0 | 0 | 0 | 1 | 89 | 1410 | 19134 |

At the end: buildings (built+sites) wood 3, house 3, house2 2, quarry 2, hq 1, guard 1, saw 1, forest 1, fisher 1, coalmine 1, ironmine 1, smelter 1, smith 1, farm 1, mill 1, waterhut 1, bakery 1, weaponsmith 1, barracks 1.
People: worker 17, carrier 7, digger 3, builder 3, soldier 1, geologist 1, explorer 1; beds 70. Soldiers: sword 1.

Goods produced in the game: fish 247, coal 129, grain 99, log 93, stone 84, flour 84, water 84, bread 70, plank 65, ironore 65, iron 62, sword 34, spear 11, bow 3, axe 2, hammer 2, saw 1, rod 1, pick 1, shovel 1.
Goods consumed in the game: fish 238, coal 119, stone 86, grain 84, plank 81, water 71, flour 71, log 65, ironore 63, bread 59, iron 56, sword 34, spear 11, pick 5, hammer 4, axe 3, bow 3, shovel 2, saw 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (81 building-min): Idle 100%
- quarry (106 building-min): Stone pile full, waiting for carriers 81%, Cutting stone 13%, Bringing stone to the pile 6%, Worker picking up a pickaxe 0%, Working 0%
- wood (155 building-min): Log pile full, waiting for carriers 83%, Felling a tree 12%, Bringing a log to the pile 4%, Worker picking up an axe 1%, Working 0%
- guard (65 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%, Waiting for a swordsman: train one at the barracks 0%
- saw (57 building-min): Output pile full, waiting for carriers 79%, Sawing planks 14%, Stacking outside 3%, Waiting for logs 3%, Fetching from the pile 0%
- forest (57 building-min): No free ground to plant in range inside your border 78%, Planting a sapling 21%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 47%, Fishing 29%, Bringing a fish to the pile 23%, Worker picking up a fishing rod 1%, Idle 0%
- coalmine (56 building-min): Deposit thinning: mining coal 41%, Coal pile full, waiting for carriers 19%, Mining coal 19%, Deposit worn out: finding little coal 12%, Bringing coal out 6%
- ironmine (56 building-min): Deposit worn out: finding little iron ore 89%, Bringing iron ore out 3%, Came back empty-handed 2%, Deposit thinning: mining iron ore 2%, Fetching food 2%
- house (153 building-min): Idle 100%
- smelter (54 building-min): Waiting for iron ore 81%, Smelting iron 14%, Stacking outside 3%, Fetching from the pile 0%, Worker picking up a hammer 0%
- smith (53 building-min): All tool targets met 97%, Forging axe 1%, Forging hammer 0%, Worker picking up a hammer 0%, Stacking outside 0%
- farm (51 building-min): Grain pile full, waiting for carriers 66%, Sowing a field 16%, Harvesting grain 11%, Bringing grain to the pile 6%, Worker picking up a scythe 0%
- mill (50 building-min): Output pile full, waiting for carriers 84%, Grinding flour 11%, Stacking outside 4%, Fetching from the pile 0%, Waiting for grain 0%
- waterhut (49 building-min): Water pile full, waiting for carriers 84%, Fetching water 9%, Bringing water to the pile 7%, Worker on the way 0%, Working 0%
- bakery (46 building-min): Output pile full, waiting for carriers 60%, Baking bread 34%, Stacking outside 4%, Fetching from the pile 1%, Waiting for water 1%
- weaponsmith (46 building-min): Waiting for iron 77%, Forging sword 9%, Waiting for coal 6%, Forging spear 3%, Stacking outside 3%
- barracks (45 building-min): Waiting for weapons from the weaponsmith 81%, Weapons on the way 18%, Training soldiers 1%

Building sites, time per state (site-min): Builders at work 7, Waiting for a digger 6, Leveling the ground 6, Waiting for a builder 5, Waiting for materials 0.

Build order (placed at min:sec, finished at): house2 0:00→1:29, quarry 0:00→2:00, wood 0:02→1:42, guard 0:04→2:17, saw 1:30→2:43, forest 2:14→2:59, fisher 2:38→3:17, coalmine 2:58→3:38, ironmine 3:36→4:05, house 4:04→4:51, smelter 4:54→5:46, smith 6:14→6:57, farm 7:30→8:32, house 8:14→9:03, mill 8:56→9:32, waterhut 9:52→10:56, wood 10:20→11:18, quarry 11:04→11:51, wood 11:40→12:12, house 12:16→13:08, bakery 12:48→13:33, weaponsmith 13:40→14:24, barracks 14:26→15:29, house2 36:08→37:04.

Demolished or burned: guard (burned) 21:42, guard (burned) 28:38.

Orders given: sendUnit 60, release 57, armyTarget 26, place 24, attack 15, profession 5, priority 5, weaponKeep 3, armyReserve 1, march 1. Refused (order: reason, times): place: Another building is in the way ×1.

People changing jobs: new carrier 70, carrier -> soldier 48, carrier -> worker 17, new soldier 2, carrier -> geologist 1, carrier -> explorer 1, carrier -> digger 1, carrier -> builder 1.

People's orders (5003 in all, 4966 done): worker mine ironmine 263, worker rest fisher 248, worker gather fisher 247, carrier haul fish fisher -> ironmine 217, worker eat ironmine 215, worker rest farm 207, worker gather farm 206, worker mine coalmine 194, worker rest coalmine 130, worker rest wood 96, worker gather wood 93, carrier haul grain farm -> mill 92, worker rest quarry 86, worker rest mill 85. Not done (outcome: times): failed: can't reach that spot ×7; ended: the person is gone (became a soldier, defeated or removed) ×3; failed: killed ×2.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 8.

Fights and contact: attacked enemy buildings 11 times (first 4:06); was attacked 1 times (first 21:36); took guard 16:44, guard 26:21; killed sword 13, bow 9, spear 6; lost people bow 6, sword 39, spear 11; first saw player 2 at 4:00.

Your notes (14 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan: 2 field soldiers, 1 posts, carriers 16/12 idle; ore coal/iron/gold 1/1/0, sites 0.
- ×6 4:06–47:48 Attack: 7 field troops against guard 80; need 7.
- ×2 53:20–57:18 Attack: 4 field troops against tower 421; need 4.


Script: 1932 turns, 0.6 ms average, worst 13 ms, 0 over 0.3 s, 0 errors. Orders refused: place 1 of 25.

### Map 31: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 22/1/1381/2/70 | 30/6/2604/7/50 |
| 30 | 24/1/1394/2/59 | 64/11/6513/24/95 |
| 45 | 24/1/1394/6/51 | 76/16/10346/61/91 |
| 60 | 24/1/1394/2/41 | 84/23/15921/74/90 |
| first | 7 8 16 18 - - | 11 12 13 14 20 36 |

Soldiers every 5 min: 10 2 2 3 5 2 3 4 6 4 2 2 (original game NPC: 10 7 7 10 12 24 44 52 61 65 70 74).

First army orders (game min:sec): 5:38 attack 8 soldiers -> building 130; 16:00 armyTarget sword=6; 16:00 armyTarget spear=4; 16:00 armyReserve; 17:20 attack 5 soldiers -> building 138; 17:28 attack 1 soldiers -> building 138; 18:30 march 1 soldiers -> 55,131; 27:40 attack 4 soldiers -> building 302; 27:50 attack 1 soldiers -> building 302; 30:00 armyTarget sword=7; 30:00 armyTarget bow=3; 39:10 attack 4 soldiers -> building 302.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 12 | 9 | 8 | 15 | 0 | 0 | 9 | 2 | 10 | 20 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 28 | 44 | 1381 | 16477 |
| 30 | 32 | 8 | 16 | 15 | 11 | 0 | 13 | 15 | 13 | 12 | 5 | 20 | 0 | 0 | 0 | 0 | 0 | 29 | 97 | 1394 | 17347 |
| 45 | 32 | 8 | 16 | 15 | 12 | 0 | 14 | 16 | 14 | 12 | 10 | 19 | 0 | 0 | 0 | 0 | 0 | 22 | 104 | 1394 | 17413 |
| 60 | 32 | 8 | 16 | 16 | 11 | 0 | 13 | 16 | 13 | 12 | 14 | 20 | 0 | 0 | 0 | 0 | 0 | 12 | 107 | 1394 | 17481 |

At the end: buildings (built+sites) wood 3, house2 2, quarry 2, house 2, hq 1, guard 1, saw 1, forest 1, coalmine 1, fisher 1, ironmine 1, smelter 1, smith 1, farm 1, waterhut 1, mill 1, bakery 1, weaponsmith 1, barracks 1.
People: worker 17, carrier 16, digger 3, builder 3, soldier 1, geologist 1, explorer 1; beds 60. Soldiers: sword 1.

Goods produced in the game: fish 237, grain 110, coal 106, water 94, flour 94, log 90, stone 81, bread 80, ironore 71, plank 62, iron 57, sword 25, spear 4, axe 2, hammer 2, saw 1, rod 1, pick 1, shovel 1.
Goods consumed in the game: fish 227, coal 94, grain 94, stone 83, water 81, flour 81, plank 78, bread 69, log 62, ironore 57, iron 37, sword 25, pick 5, hammer 4, spear 4, axe 3, shovel 2, saw 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (113 building-min): Idle 100%
- quarry (106 building-min): Stone pile full, waiting for carriers 79%, Cutting stone 14%, Bringing stone to the pile 7%, Worker picking up a pickaxe 0%, Working 0%
- wood (155 building-min): Log pile full, waiting for carriers 82%, Felling a tree 13%, Bringing a log to the pile 5%, Worker picking up an axe 0%, Working 0%
- guard (66 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a swordsman: train one at the barracks 0%
- saw (58 building-min): Output pile full, waiting for carriers 76%, Sawing planks 14%, Waiting for logs 7%, Stacking outside 3%, Fetching from the pile 0%
- forest (58 building-min): No free ground to plant in range inside your border 69%, Planting a sapling 31%, Worker picking up a shovel 0%, Working 0%
- coalmine (57 building-min): Deposit worn out: finding little coal 55%, Deposit thinning: mining coal 20%, Mining coal 10%, Coal pile full, waiting for carriers 7%, Bringing coal out 5%
- fisher (57 building-min): Fish pile full, waiting for carriers 64%, Fishing 21%, Bringing a fish to the pile 15%, Worker picking up a fishing rod 0%
- ironmine (56 building-min): Deposit worn out: finding little iron ore 71%, Deposit thinning: mining iron ore 9%, Iron ore pile full, waiting for carriers 9%, Bringing iron ore out 3%, Mining iron ore 3%
- smelter (54 building-min): Output pile full, waiting for carriers 75%, Smelting iron 13%, Waiting for iron ore 6%, Stacking outside 3%, Waiting for coal 2%
- smith (53 building-min): All tool targets met 97%, Forging axe 1%, Forging hammer 1%, Stacking outside 0%, Worker picking up a hammer 0%
- house (98 building-min): Idle 100%
- farm (50 building-min): Grain pile full, waiting for carriers 68%, Sowing a field 15%, Harvesting grain 11%, Bringing grain to the pile 5%, Worker picking up a scythe 0%
- waterhut (49 building-min): Water pile full, waiting for carriers 78%, Fetching water 12%, Bringing water to the pile 10%, Idle 0%, Working 0%
- mill (46 building-min): Output pile full, waiting for carriers 82%, Grinding flour 11%, Stacking outside 5%, Waiting for grain 1%, Fetching from the pile 1%
- bakery (45 building-min): Output pile full, waiting for carriers 54%, Baking bread 40%, Stacking outside 5%, Fetching from the pile 1%, Waiting for flour and water 0%
- weaponsmith (44 building-min): Waiting for coal 89%, Forging sword 7%, Stacking outside 2%, Forging spear 1%, Worker picking up a hammer 1%
- barracks (43 building-min): Waiting for weapons from the weaponsmith 87%, Weapons on the way 13%, Training soldiers 1%, Idle 0%

Building sites, time per state (site-min): Builders at work 6, Leveling the ground 6, Waiting for a digger 5, Waiting for a builder 5.

Build order (placed at min:sec, finished at): house2 0:00→0:55, quarry 0:00→1:25, wood 0:02→1:10, guard 0:04→1:43, saw 0:56→2:08, forest 1:48→2:21, coalmine 2:02→2:51, fisher 2:26→3:28, ironmine 3:04→4:00, house2 4:00→5:45, smelter 5:26→6:15, smith 6:38→7:30, house 8:00→8:34, farm 8:56→9:53, waterhut 9:56→10:46, wood 10:36→11:19, quarry 11:14→12:06, wood 11:54→12:36, house 12:30→13:27, mill 12:58→13:48, bakery 13:36→14:44, weaponsmith 14:50→15:58, barracks 15:58→17:05.

Demolished or burned: guard (burned) 25:55.

Orders given: sendUnit 64, place 23, attack 11, release 10, armyTarget 6, profession 5, priority 5, weaponKeep 3, armyReserve 1, march 1. Refused (order: reason, times): place: Another building is in the way ×2.

People changing jobs: new carrier 60, carrier -> soldier 29, carrier -> worker 17, carrier -> geologist 1, carrier -> explorer 1, carrier -> digger 1, carrier -> builder 1, new soldier 1.

People's orders (4979 in all, 4943 done): worker mine ironmine 248, worker rest fisher 238, worker gather fisher 237, worker rest farm 228, worker gather farm 227, carrier haul fish fisher -> ironmine 199, worker eat ironmine 195, worker mine coalmine 186, worker rest forest 137, worker gather forest 136, worker rest coalmine 107, carrier haul grain farm -> mill 102, worker eat coalmine 101, worker rest waterhut 95. Not done (outcome: times): failed: can't reach that spot ×8.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 16.

Fights and contact: attacked enemy buildings 9 times (first 5:38); took guard 18:29; killed bow 4, sword 10, spear 2; lost people bow 3, sword 30, spear 4; first saw player 1 at 5:00.

Your notes (13 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan: 3 field soldiers, 1 posts, carriers 22/17 idle; ore coal/iron/gold 1/1/0, sites 0.
- ×2 5:38–17:20 Attack: 5 field troops against guard 138; need 4.
- ×5 27:40–58:46 Attack: 4 field troops against tower 392; need 4.


Script: 1894 turns, 0.7 ms average, worst 13 ms, 0 over 0.3 s, 0 errors. Orders refused: place 2 of 25.

### Map 777: chatgpt (Gold) vs original game NPC: **won** at 45 min

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 25/2/1399/3/60 | 30/5/2447/6/50 |
| 30 | 31/7/2467/26/28 | 35/0/2234/0/54 |
| 45 | 31/7/2467/26/28 | 48/0/3208/0/74 |
| 46 | 31/7/3939/26/28 | 0/0/0/0/0 |
| first | 5 6 14 17 - - | 10 11 16 17 - - |

Soldiers every 5 min: 10 3 3 17 24 26 26 26 26 26 (original game NPC: 10 6 6 1 0 0 0 0 0 0).

First army orders (game min:sec): 1:50 sendIn 1 soldiers -> building 78; 7:16 attack 8 soldiers -> building 99; 16:02 armyTarget sword=6; 16:02 armyTarget spear=4; 16:02 armyReserve; 17:20 attack 8 soldiers -> building 133; 17:36 attack 1 soldiers -> building 133; 17:38 attack 1 soldiers -> building 133; 17:46 attack 1 soldiers -> building 133; 17:56 attack 1 soldiers -> building 133; 18:02 armyTarget bow=3; 18:30 attack 1 soldiers -> building 133.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 23 | 8 | 16 | 15 | 10 | 0 | 13 | 12 | 13 | 11 | 9 | 13 | 0 | 0 | 4 | 1 | 1 | 25 | 82 | 1399 | 20652 |
| 30 | 32 | 8 | 16 | 14 | 16 | 0 | 14 | 16 | 14 | 34 | 0 | 13 | 0 | 0 | 0 | 1 | 0 | 1 | 111 | 2467 | 26214 |
| 45 | 32 | 8 | 16 | 15 | 16 | 0 | 14 | 16 | 14 | 34 | 8 | 20 | 0 | 0 | 0 | 1 | 0 | 1 | 119 | 2467 | 26214 |
| 46 | 48 | 134 | 169 | 24 | 16 | 0 | 14 | 46 | 28 | 51 | 10 | 28 | 14 | 8 | 0 | 1 | 0 | 2 | 122 | 3939 | 26229 |

At the end: buildings (built+sites) guard 7, wood 3, house 3, quarry 2, coalmine 2, hq 1, house2 1, saw 1, forest 1, fisher 1, ironmine 1, smelter 1, smith 1, farm 1, mill 1, waterhut 1, bakery 1, weaponsmith 1, barracks 1.
People: soldier 19, worker 18, digger 3, builder 3, carrier 2, geologist 1, explorer 1; beds 50. Soldiers: sword 10, spear 5, bow 4.

Goods produced in the game: fish 185, coal 138, log 92, stone 79, grain 79, ironore 72, plank 64, water 63, flour 63, iron 62, bread 49, sword 16, spear 10, bow 7, axe 2, pick 2, hammer 2, saw 1, rod 1, shovel 1.
Goods consumed in the game: fish 175, coal 104, stone 81, plank 80, log 64, grain 63, ironore 62, water 49, flour 49, iron 42, bread 33, sword 16, spear 9, bow 7, pick 6, hammer 4, axe 3, shovel 2, saw 1, rod 1, scythe 1.
Goods captured in the game: stone 136, plank 111, grain 30, coal 17, log 16, flour 14, goldore 14, fish 8, iron 8, gold 8, axe 1, saw 1, pick 1, shovel 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (46 building-min): Idle 100%
- house2 (45 building-min): Idle 100%
- quarry (79 building-min): Stone pile full, waiting for carriers 79%, Cutting stone 15%, Bringing stone to the pile 6%, Worker picking up a pickaxe 0%, Working 0%
- wood (114 building-min): Log pile full, waiting for carriers 78%, Felling a tree 16%, Bringing a log to the pile 5%, Worker picking up an axe 1%, Working 0%
- guard (212 building-min): Idle 76%, Free soldiers are too far away: bring one onto your land or near this building 18%, Waiting for a swordsman: train one at the barracks 6%, Soldiers on the way 0%
- saw (44 building-min): Output pile full, waiting for carriers 71%, Sawing planks 18%, Waiting for logs 6%, Stacking outside 4%, Fetching from the pile 0%
- forest (44 building-min): No free ground to plant in range inside your border 61%, Planting a sapling 39%, Worker picking up a shovel 1%
- fisher (43 building-min): Fish pile full, waiting for carriers 40%, Fishing 29%, Bringing a fish to the pile 25%, No fish in range inside your border 5%, Worker picking up a fishing rod 1%
- ironmine (43 building-min): Deposit worn out: finding little iron ore 59%, Deposit thinning: mining iron ore 15%, Mining iron ore 8%, Iron ore pile full, waiting for carriers 8%, Bringing iron ore out 5%
- coalmine (74 building-min): Coal pile full, waiting for carriers 59%, Mining coal 25%, Deposit thinning: mining coal 10%, Bringing coal out 5%, Worker picking up a pickaxe 1%
- smelter (41 building-min): Output pile full, waiting for carriers 44%, Waiting for iron ore 32%, Smelting iron 19%, Stacking outside 4%, Worker picking up a hammer 1%
- house (110 building-min): Idle 100%
- smith (40 building-min): All tool targets met 90%, Waiting for coal 6%, Worker picking up a hammer 1%, Stacking outside 1%, Forging axe 1%
- farm (39 building-min): Grain pile full, waiting for carriers 71%, Sowing a field 14%, Harvesting grain 10%, Bringing grain to the pile 5%, Worker picking up a scythe 0%
- mill (38 building-min): Output pile full, waiting for carriers 84%, Grinding flour 9%, Stacking outside 4%, Waiting for grain 2%, Fetching from the pile 1%
- waterhut (38 building-min): Water pile full, waiting for carriers 86%, Fetching water 7%, Bringing water to the pile 7%, Working 0%
- bakery (35 building-min): Output pile full, waiting for carriers 64%, Baking bread 31%, Stacking outside 4%, Waiting for flour and water 1%, Fetching from the pile 1%
- weaponsmith (33 building-min): All weapon targets met 77%, Forging sword 6%, Waiting for coal 4%, Forging spear 4%, Stacking outside 3%
- barracks (29 building-min): Waiting for a free settler to train 52%, Waiting for weapons from the weaponsmith 25%, Weapons on the way 20%, Soldier targets met 2%, Training soldiers 1%

Building sites, time per state (site-min): Builders at work 7, Waiting for a digger 6, Waiting for a builder 5, Leveling the ground 5, Waiting for materials 0.

Build order (placed at min:sec, finished at): house2 0:00→0:56, quarry 0:00→1:15, wood 0:02→1:29, guard 0:04→1:50, saw 0:56→2:13, forest 1:34→2:30, fisher 1:56→2:47, ironmine 2:10→3:08, coalmine 3:04→3:34, smelter 3:42→4:35, house 4:10→4:56, smith 5:04→5:51, farm 6:18→7:22, mill 6:58→7:43, waterhut 7:50→8:24, house 8:36→9:21, bakery 9:48→10:33, wood 10:14→10:55, quarry 10:54→11:33, wood 11:22→11:59, weaponsmith 12:18→13:25, house 12:36→13:46, coalmine 13:30→14:02, barracks 16:00→16:59.

Orders given: sendUnit 40, release 35, place 24, attack 15, armyTarget 15, march 6, profession 5, priority 5, weaponKeep 3, sendIn 1, armyReserve 1. None refused.

People changing jobs: new carrier 50, carrier -> soldier 32, carrier -> worker 18, carrier -> geologist 1, new soldier 1, carrier -> explorer 1, carrier -> digger 1, carrier -> builder 1.

People's orders (4287 in all, 4250 done): worker mine ironmine 206, worker rest fisher 186, worker gather fisher 185, worker mine coalmine 174, worker rest farm 164, worker gather farm 163, carrier haul fish fisher -> ironmine 150, worker eat ironmine 149, worker rest coalmine 140, worker rest forest 116, worker gather forest 115, worker rest wood 95, worker gather wood 92, soldier attack guard 90. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×8.

Fights and contact: attacked enemy buildings 9 times (first 7:16); took guard 8:39, guard 18:38, guard 18:43, guard 19:38, guard 20:47, guard 21:22, hq 45:13; killed bow 3, sword 13; lost people sword 8, bow 6, spear 2; first saw player 2 at 8:00.

Your notes (11 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×5 0:00–40:00 Plan: 19 field soldiers, 7 posts, carriers 2/1 idle; ore coal/iron/gold 1/1/0, sites 0.
- ×5 7:16–21:09 Attack: 4 field troops against guard 139; need 4.
- 45:00 Attack: 11 field troops against hq 37; need 11.


Script: 1447 turns, 1.0 ms average, worst 14 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 18/1/1365/2/50 | 32/6/2585/5/50 |
| 30 | 18/1/1365/2/50 | 62/13/5515/16/79 |
| 45 | 18/1/1365/2/50 | 67/15/6828/41/54 |
| 60 | 18/1/1365/2/50 | 67/15/7641/42/53 |
| first | - - - - - - | 10 11 14 16 - - |

Soldiers every 5 min: 10 2 2 2 2 2 2 2 2 2 2 2 (original game NPC: 10 5 5 5 12 16 21 37 41 41 42 42).

First army orders (game min:sec): 6:04 attack 8 soldiers -> building 130.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 24 | 8 | 16 | 12 | 8 | 0 | 14 | 16 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 32 | 88 | 1365 | 22580 |
| 30 | 24 | 8 | 16 | 12 | 8 | 0 | 14 | 16 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 32 | 88 | 1365 | 23051 |
| 45 | 24 | 8 | 16 | 12 | 8 | 0 | 14 | 16 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 32 | 88 | 1365 | 23180 |
| 60 | 24 | 8 | 16 | 12 | 8 | 0 | 14 | 16 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 32 | 88 | 1365 | 23239 |

At the end: buildings (built+sites) wood 3, quarry 2, house 2, hq 1, house2 1, guard 1, saw 1, forest 1, fisher 1, ironmine 1, farm 1, mill 1, waterhut 1, bakery 1.
People: carrier 32, worker 12, digger 2, builder 2, soldier 1, geologist 1, explorer 1; beds 40. Soldiers: sword 1.

Goods produced in the game: log 57, stone 51, grain 38, plank 37, water 22, flour 22, fish 10, ironore 8, bread 8.
Goods consumed in the game: plank 53, stone 53, log 37, grain 22, water 8, flour 8, pick 4, fish 4, axe 2, saw 1, shovel 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (59 building-min): Idle 100%
- quarry (108 building-min): Stone pile full, waiting for carriers 91%, Cutting stone 6%, Bringing stone to the pile 2%, Worker picking up a pickaxe 0%, Working 0%
- wood (157 building-min): Log pile full, waiting for carriers 58%, Needs a worker with an axe 31%, Felling a tree 8%, Bringing a log to the pile 3%, Worker picking up an axe 0%
- guard (58 building-min): Idle 100%, Soldiers on the way 0%
- saw (58 building-min): Output pile full, waiting for carriers 85%, Sawing planks 8%, Waiting for logs 4%, Stacking outside 2%, Worker picking up a saw 0%
- forest (58 building-min): No free ground to plant in range inside your border 76%, Planting a sapling 24%, Worker picking up a shovel 0%, Idle 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 98%, Bringing a fish to the pile 1%, Fishing 1%, Worker picking up a fishing rod 0%, Idle 0%
- ironmine (57 building-min): Iron ore pile full, waiting for carriers 97%, Mining iron ore 2%, Worker picking up a pickaxe 0%, Bringing iron ore out 0%, Working 0%
- farm (56 building-min): Grain pile full, waiting for carriers 90%, Sowing a field 5%, Harvesting grain 3%, Bringing grain to the pile 1%, Worker picking up a scythe 0%
- mill (55 building-min): Output pile full, waiting for carriers 95%, Grinding flour 2%, Waiting for grain 2%, Stacking outside 1%, Fetching from the pile 0%
- house (104 building-min): Idle 100%
- waterhut (54 building-min): Water pile full, waiting for carriers 96%, Fetching water 2%, Bringing water to the pile 2%, Idle 0%, Working 0%
- bakery (53 building-min): Output pile full, waiting for carriers 96%, Baking bread 3%, Stacking outside 0%, Waiting for flour and water 0%, Waiting for flour 0%

Building sites, time per state (site-min): Builders at work 5, Waiting for a digger 4, Leveling the ground 3, Waiting for a builder 3.

Build order (placed at min:sec, finished at): house2 0:00→0:47, quarry 0:00→1:16, wood 0:02→1:10, guard 0:04→1:35, saw 0:48→1:55, forest 1:38→2:09, fisher 1:58→2:36, ironmine 2:18→3:04, farm 3:14→4:17, mill 3:42→4:39, house 4:10→5:05, waterhut 4:54→5:46, bakery 6:16→7:05, wood 10:00→10:33, quarry 10:02→10:48, house 10:18→11:23, wood 10:34→11:40.

Orders given: sendUnit 58, place 17, profession 2, priority 1, attack 1. None refused.

People changing jobs: new carrier 40, carrier -> worker 12, carrier -> geologist 1, carrier -> explorer 1.

People's orders (1285 in all, 1270 done): worker rest forest 116, worker gather forest 115, worker rest farm 81, worker gather farm 80, worker rest wood 59, worker gather wood 57, explorer explore 57, worker rest quarry 53, worker gather quarry 51, carrier haul log wood -> saw 41, worker rest saw 38, worker toCraft saw 37, worker craft saw 37, carrier haul grain farm -> mill 30. None failed.

Fights and contact: attacked enemy buildings 2 times (first 6:04); killed bow 3, sword 2; lost people bow 3, sword 5; first saw player 1 at 6:00.

Your notes (7 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan: 1 field soldiers, 1 posts, carriers 32/32 idle; ore coal/iron/gold 0/1/1, sites 0.
- 6:04 Attack: 8 field troops against guard 130; need 7.


Script: 1822 turns, 0.8 ms average, worst 12 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 20/1/1394/2/50 | 28/3/2281/4/50 |
| 30 | 21/1/1394/2/50 | 51/7/4320/11/73 |
| 45 | 21/1/1394/2/50 | 68/13/8487/48/96 |
| 60 | 21/1/1394/2/50 | 74/19/13260/68/96 |
| first | 9 11 15 - - - | 8 9 21 23 36 40 |

Soldiers every 5 min: 5 2 2 2 2 2 2 2 2 2 2 2 (original game NPC: 4 4 4 4 8 11 23 38 48 59 63 68).

First army orders (game min:sec): 3:32 attack 8 soldiers -> building 96.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 13 | 10 | 15 | 15 | 0 | 0 | 8 | 16 | 8 | 14 | 11 | 13 | 0 | 0 | 1 | 0 | 0 | 16 | 69 | 1394 | 19454 |
| 30 | 24 | 8 | 16 | 20 | 0 | 0 | 8 | 16 | 8 | 34 | 14 | 20 | 0 | 0 | 4 | 2 | 2 | 26 | 118 | 1394 | 20045 |
| 45 | 24 | 8 | 16 | 20 | 0 | 0 | 8 | 16 | 8 | 34 | 14 | 20 | 0 | 0 | 4 | 2 | 2 | 26 | 118 | 1394 | 20046 |
| 60 | 24 | 8 | 16 | 20 | 0 | 0 | 8 | 16 | 8 | 34 | 14 | 20 | 0 | 0 | 4 | 2 | 2 | 26 | 118 | 1394 | 20046 |

At the end: buildings (built+sites) quarry 2, wood 2, house 2, coalmine 2, hq 1, house2 1, guard 1, saw 1, forest 1, fisher 1, ironmine 1, farm 1, waterhut 1, mill 1, smelter 1, smith 1, weaponsmith 1.
People: carrier 26, worker 16, digger 3, builder 3, soldier 1, geologist 1, explorer 1; beds 40. Soldiers: sword 1.

Goods produced in the game: fish 123, coal 86, log 71, stone 64, plank 51, ironore 50, iron 36, grain 24, water 8, flour 8, sword 4, pick 2, hammer 2, bow 2, spear 2, axe 1, saw 1, rod 1, shovel 1.
Goods consumed in the game: fish 109, plank 67, stone 66, coal 52, log 51, ironore 36, iron 16, grain 8, pick 6, hammer 4, axe 2, shovel 2, saw 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (59 building-min): Idle 100%
- quarry (107 building-min): Stone pile full, waiting for carriers 87%, Cutting stone 9%, Bringing stone to the pile 4%, Worker picking up a pickaxe 0%, Working 0%
- wood (108 building-min): Log pile full, waiting for carriers 81%, Felling a tree 14%, Bringing a log to the pile 5%, Worker picking up an axe 0%, Working 0%
- guard (58 building-min): Idle 100%, Soldiers on the way 0%
- saw (57 building-min): Output pile full, waiting for carriers 81%, Sawing planks 11%, Waiting for logs 5%, Stacking outside 2%, Worker picking up a saw 0%
- forest (57 building-min): No free ground to plant in range inside your border 78%, Planting a sapling 22%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 81%, Fishing 11%, Bringing a fish to the pile 8%, Worker picking up a fishing rod 0%, Working 0%
- ironmine (56 building-min): Iron ore pile full, waiting for carriers 74%, Deposit thinning: mining iron ore 13%, Mining iron ore 5%, Deposit worn out: finding little iron ore 5%, Bringing iron ore out 3%
- farm (55 building-min): Grain pile full, waiting for carriers 90%, Sowing a field 5%, Harvesting grain 3%, Bringing grain to the pile 2%, Worker picking up a scythe 0%
- house (106 building-min): Idle 100%
- waterhut (54 building-min): Water pile full, waiting for carriers 98%, Bringing water to the pile 1%, Fetching water 1%, Idle 0%, Working 0%
- mill (54 building-min): Output pile full, waiting for carriers 98%, Waiting for grain 1%, Grinding flour 1%, Stacking outside 0%, Idle 0%
- coalmine (97 building-min): Coal pile full, waiting for carriers 82%, Mining coal 14%, Bringing coal out 2%, Worker picking up a pickaxe 1%, Fetching food 0%
- smelter (52 building-min): Output pile full, waiting for carriers 87%, Smelting iron 9%, Stacking outside 2%, Waiting for coal 1%, Waiting for iron ore 0%
- smith (49 building-min): All tool targets met 97%, Worker picking up a hammer 1%, Stacking outside 1%, Forging hammer 1%, Forging pickaxe 0%
- weaponsmith (46 building-min): Output pile full, waiting for carriers 94%, Waiting for coal 2%, Forging sword 1%, Worker picking up a hammer 1%, Forging bow 1%

Building sites, time per state (site-min): Waiting for a digger 7, Leveling the ground 5, Builders at work 5, Waiting for a builder 4.

Build order (placed at min:sec, finished at): house2 0:00→1:21, quarry 0:00→1:52, wood 0:02→1:34, guard 0:04→2:12, saw 1:22→2:38, forest 2:06→2:53, fisher 2:22→3:08, ironmine 3:02→3:45, farm 3:58→4:59, house 4:26→5:17, waterhut 4:26→5:44, mill 5:24→6:03, coalmine 6:20→7:09, smelter 7:30→8:14, house 8:26→9:11, smith 9:10→10:32, wood 10:00→10:53, quarry 10:24→11:29, weaponsmith 13:22→14:25, coalmine 14:34→15:28.

Orders given: sendUnit 65, place 20, profession 5, priority 4, attack 1. None refused.

People changing jobs: new carrier 40, carrier -> worker 16, carrier -> geologist 1, carrier -> explorer 1, carrier -> digger 1, carrier -> builder 1.

People's orders (2299 in all, 2272 done): worker mine coalmine 125, worker rest fisher 124, worker gather fisher 123, worker rest forest 99, worker gather forest 98, worker rest coalmine 88, worker mine ironmine 86, worker rest wood 73, worker gather wood 71, worker rest quarry 66, carrier haul fish fisher -> coalmine 65, worker gather quarry 64, worker rest farm 59, worker gather farm 58. Not done (outcome: times): failed: can't reach that spot ×8.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 8.

Fights and contact: attacked enemy buildings 1 times (first 3:32); killed sword 3, bow 3; lost people sword 5, bow 3; first saw player 2 at 4:00.

Your notes (7 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan: 1 field soldiers, 1 posts, carriers 26/26 idle; ore coal/iron/gold 1/1/0, sites 0.
- 3:32 Attack: 8 field troops against guard 96; need 7.


Script: 1817 turns, 1.3 ms average, worst 11 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: chatgpt (Blue) vs original game NPC: **won** at 22 min

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 20/2/1663/14/37 | 28/5/2834/5/50 |
| 22 | 22/4/2757/16/27 | 0/0/0/0/0 |
| first | 5 7 9 10 - - | 7 8 9 11 - - |

Soldiers every 5 min: 10 2 14 14 16 (original game NPC: 10 6 5 2 0).

First army orders (game min:sec): 6:14 attack 8 soldiers -> building 151; 8:18 armyTarget sword=5; 8:18 armyTarget spear=3; 8:18 armyReserve; 12:18 attack 4 soldiers -> building 138; 12:46 attack 1 soldiers -> building 138; 12:58 attack 1 soldiers -> building 138; 13:12 attack 1 soldiers -> building 138; 13:22 attack 1 soldiers -> building 138; 14:28 armyTarget bow=3; 14:58 armyTarget sword=6; 14:58 armyTarget spear=4.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 32 | 16 | 25 | 19 | 0 | 0 | 0 | 0 | 0 | 9 | 14 | 6 | 0 | 0 | 0 | 0 | 0 | 16 | 70 | 1663 | 20340 |
| 22 | 62 | 84 | 120 | 22 | 0 | 0 | 7 | 8 | 8 | 26 | 14 | 18 | 0 | 0 | 2 | 0 | 0 | 3 | 68 | 2757 | 21917 |

At the end: buildings (built+sites) guard 4, wood 3, quarry 2, house 2, hq 1, house2 1, saw 1, forest 1, fisher 1, ironmine 1, coalmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1.
People: soldier 13, worker 13, carrier 6, digger 3, builder 3, geologist 1, explorer 1; beds 40. Soldiers: sword 7, bow 2, spear 4.

Goods produced in the game: fish 128, coal 80, log 69, stone 57, ironore 51, plank 41, iron 38, sword 12, bow 6, spear 6, axe 2, hammer 2, saw 1, shovel 1, rod 1, pick 1.
Goods consumed in the game: fish 116, coal 70, stone 59, plank 57, log 41, ironore 38, iron 32, sword 11, bow 6, spear 6, pick 5, hammer 4, axe 3, shovel 2, saw 1, rod 1.
Goods captured in the game: stone 81, plank 57, log 30, coal 16, iron 12, grain 8, flour 8, water 7, fish 4, saw 1, scythe 1, ironore 1, sword 1.

What the buildings did (share of their time after being built):
- hq (22 building-min): Idle 100%
- house2 (21 building-min): Idle 100%
- quarry (32 building-min): Stone pile full, waiting for carriers 57%, Cutting stone 28%, Bringing stone to the pile 12%, Worker picking up a pickaxe 2%, Working 0%
- wood (42 building-min): Log pile full, waiting for carriers 52%, Felling a tree 35%, Bringing a log to the pile 12%, Worker picking up an axe 1%, Working 0%
- guard (34 building-min): Idle 93%, Waiting for a swordsman: train one at the barracks 6%, Soldiers on the way 0%
- saw (20 building-min): Output pile full, waiting for carriers 49%, Sawing planks 26%, Waiting for logs 17%, Stacking outside 6%, Worker picking up a saw 1%
- forest (19 building-min): Planting a sapling 75%, No free ground to plant in range inside your border 24%, Worker picking up a shovel 1%, Idle 0%
- fisher (19 building-min): Bringing a fish to the pile 44%, Fishing 39%, Fish pile full, waiting for carriers 16%, Worker picking up a fishing rod 1%, No fish in range inside your border 1%
- ironmine (19 building-min): Deposit thinning: mining iron ore 41%, Mining iron ore 26%, Iron ore pile full, waiting for carriers 21%, Bringing iron ore out 7%, Worker picking up a pickaxe 2%
- coalmine (18 building-min): Mining coal 48%, Deposit thinning: mining coal 35%, Bringing coal out 11%, Came back empty-handed 2%, Fetching food 2%
- smelter (17 building-min): Waiting for coal 51%, Smelting iron 28%, Output pile full, waiting for carriers 13%, Stacking outside 6%, Worker picking up a hammer 1%
- house (29 building-min): Idle 100%
- smith (15 building-min): All tool targets met 71%, Waiting for coal 20%, Worker picking up a hammer 2%, Forging hammer 2%, Forging axe 2%
- weaponsmith (14 building-min): Waiting for iron 34%, Waiting for coal 29%, Forging sword 11%, All weapon targets met 9%, Forging spear 6%
- barracks (13 building-min): Waiting for weapons from the weaponsmith 58%, Weapons on the way 36%, Soldier targets met 4%, Training soldiers 2%

Building sites, time per state (site-min): Waiting for a digger 5, Leveling the ground 5, Builders at work 5, Waiting for a builder 4.

Build order (placed at min:sec, finished at): house2 0:00→1:06, quarry 0:00→1:22, wood 0:02→1:36, guard 0:04→1:58, saw 1:06→2:22, forest 1:46→2:38, fisher 2:08→2:54, ironmine 2:42→3:22, coalmine 3:18→3:46, smelter 3:56→4:56, house 4:24→5:15, smith 5:26→6:31, weaponsmith 7:02→8:09, barracks 8:16→9:17, house 9:04→9:51, wood 10:00→10:34, quarry 10:26→11:02, wood 11:00→11:34.

Demolished or burned: guard (burned) 19:40.

Orders given: sendUnit 23, armyTarget 20, place 18, attack 13, priority 5, release 5, profession 4, weaponKeep 3, armyReserve 1. None refused.

People changing jobs: new carrier 40, carrier -> soldier 23, carrier -> worker 13, new soldier 2, carrier -> geologist 1, carrier -> explorer 1, carrier -> digger 1, carrier -> builder 1.

People's orders (2242 in all, 2214 done): worker rest fisher 128, worker gather fisher 128, worker mine coalmine 121, worker rest forest 103, worker gather forest 102, worker mine ironmine 89, soldier attack guard 87, worker rest coalmine 81, worker rest wood 72, worker gather wood 69, carrier haul fish fisher -> coalmine 67, worker eat coalmine 64, worker rest quarry 59, worker gather quarry 57. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×5; failed: can't reach that spot ×3.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 3.

Fights and contact: attacked enemy buildings 10 times (first 6:14); took guard 13:23, hq 17:12, guard 18:50, guard 19:39, guard 19:48; killed bow 3, sword 5; lost people sword 8, bow 7, spear 2; first saw player 1 at 7:00.

Your notes (8 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×3 0:00–20:00 Plan: 11 field soldiers, 4 posts, carriers 9/8 idle; ore coal/iron/gold 1/1/0, sites 0.
- ×4 6:14–21:42 Attack: 7 field troops against guard 152; need 7.
- 17:06 Attack: 12 field troops against hq 1; need 12.


Script: 705 turns, 0.9 ms average, worst 10 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 19/1/1377/10/50 | 25/6/2758/10/40 |
| 30 | 20/1/1377/10/50 | 59/6/3735/10/89 |
| 45 | 20/1/1377/10/50 | 71/15/9935/54/95 |
| 60 | 20/1/1377/10/50 | 77/20/14568/67/102 |
| first | 7 8 15 - - - | 8 9 26 26 32 39 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 9 10 19 48 54 58 63 67).

First army orders (game min:sec): 18:24 march 6 soldiers -> 230,10; 20:24 march 6 soldiers -> 230,230; 22:24 march 6 soldiers -> 10,230; 24:24 march 6 soldiers -> 10,10.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 28 | 9 | 4 | 14 | 0 | 0 | 0 | 16 | 8 | 17 | 12 | 13 | 0 | 0 | 0 | 0 | 0 | 13 | 62 | 1377 | 19829 |
| 30 | 32 | 8 | 8 | 20 | 0 | 0 | 0 | 16 | 8 | 34 | 14 | 20 | 0 | 0 | 1 | 2 | 1 | 27 | 106 | 1377 | 23131 |
| 45 | 32 | 8 | 8 | 20 | 0 | 0 | 0 | 16 | 8 | 34 | 14 | 20 | 0 | 0 | 1 | 2 | 1 | 27 | 106 | 1377 | 23131 |
| 60 | 32 | 8 | 8 | 20 | 0 | 0 | 0 | 16 | 8 | 34 | 14 | 20 | 0 | 0 | 1 | 2 | 1 | 27 | 106 | 1377 | 23176 |

At the end: buildings (built+sites) wood 3, coalmine 2, house 2, hq 1, house2 1, quarry 1, guard 1, saw 1, forest 1, fisher 1, ironmine 1, smelter 1, smith 1, farm 1, mill 1, weaponsmith 1.
People: carrier 27, worker 15, soldier 9, digger 3, builder 3, explorer 1, geologist 1; beds 40. Soldiers: sword 6, bow 3.

Goods produced in the game: fish 108, coal 78, log 76, stone 51, plank 48, ironore 46, iron 32, grain 24, flour 8, axe 2, hammer 2, spear 2, saw 1, rod 1, shovel 1, sword 1, bow 1, pick 1.
Goods consumed in the game: fish 94, plank 64, stone 61, log 48, coal 44, ironore 32, iron 12, grain 8, pick 5, hammer 4, axe 3, shovel 2, saw 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (59 building-min): Idle 100%
- quarry (59 building-min): Stone pile full, waiting for carriers 74%, Cutting stone 16%, Bringing stone to the pile 9%, Worker picking up a pickaxe 0%, Idle 0%
- wood (155 building-min): Log pile full, waiting for carriers 87%, Felling a tree 10%, Bringing a log to the pile 3%, Worker picking up an axe 0%, Working 0%
- guard (58 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- saw (57 building-min): Output pile full, waiting for carriers 86%, Sawing planks 11%, Stacking outside 2%, Worker picking up a saw 0%, Waiting for logs 0%
- forest (57 building-min): No free ground to plant in range inside your border 75%, Planting a sapling 25%, Worker picking up a shovel 0%, Working 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 67%, Fishing 17%, Bringing a fish to the pile 16%, Worker picking up a fishing rod 0%, Idle 0%
- coalmine (101 building-min): Coal pile full, waiting for carriers 84%, Mining coal 12%, Bringing coal out 2%, Worker picking up a pickaxe 1%, Needs bread or fish: mining stopped 0%
- ironmine (56 building-min): Iron ore pile full, waiting for carriers 72%, Mining iron ore 10%, Deposit thinning: mining iron ore 7%, Needs meat or fish: mining stopped 6%, Bringing iron ore out 2%
- house (106 building-min): Idle 100%
- smelter (54 building-min): Output pile full, waiting for carriers 90%, Smelting iron 8%, Stacking outside 2%, Worker picking up a hammer 1%, Fetching from the pile 0%
- smith (52 building-min): All tool targets met 97%, Forging axe 0%, Forging hammer 0%, Stacking outside 0%, Worker picking up a hammer 0%
- farm (49 building-min): Grain pile full, waiting for carriers 92%, Sowing a field 4%, Harvesting grain 2%, Bringing grain to the pile 1%, Worker picking up a scythe 1%
- mill (48 building-min): Output pile full, waiting for carriers 98%, Grinding flour 1%, Waiting for grain 1%, Stacking outside 0%, Worker on the way 0%
- weaponsmith (45 building-min): All weapon targets met 98%, Forging spear 1%, Worker picking up a hammer 1%, Forging sword 0%, Forging bow 0%

Building sites, time per state (site-min): Waiting for a digger 6, Builders at work 5, Leveling the ground 5, Waiting for a builder 3.

Build order (placed at min:sec, finished at): house2 0:00→1:09, quarry 0:02→1:25, wood 0:04→1:39, guard 0:06→2:06, saw 1:10→2:33, forest 1:50→2:49, fisher 2:22→3:09, coalmine 2:50→3:44, ironmine 3:28→4:00, house 4:00→4:50, smelter 5:22→6:19, smith 6:50→7:33, house 8:00→8:51, farm 9:24→10:40, wood 10:00→10:57, mill 10:52→11:38, wood 11:28→12:04, weaponsmith 13:40→14:37, coalmine 14:44→15:26.

Orders given: sendUnit 60, place 19, profession 5, release 5, priority 4, march 4. Refused (order: reason, times): place: Another building is in the way ×1.

People changing jobs: new carrier 40, carrier -> worker 15, carrier -> geologist 1, carrier -> explorer 1, carrier -> digger 1, carrier -> builder 1.

People's orders (2098 in all, 2073 done): worker rest fisher 109, worker gather fisher 108, worker mine coalmine 101, worker rest forest 97, worker gather forest 96, worker rest coalmine 81, worker mine ironmine 81, worker rest wood 79, worker gather wood 76, carrier haul fish fisher -> coalmine 57, worker rest farm 53, worker rest quarry 52, explorer explore 52, carrier haul log wood -> saw 52. Not done (outcome: times): failed: can't reach that spot ×7.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 7, soldier (march 0) cut-off 6.

Fights and contact: killed sword 1; first saw player 2 at 4:00.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan: 9 field soldiers, 1 posts, carriers 27/27 idle; ore coal/iron/gold 1/1/0, sites 0.


Script: 1804 turns, 1.2 ms average, worst 10 ms, 0 over 0.3 s, 0 errors. Orders refused: place 1 of 20.

### Map 20261030: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 22/1/1361/2/60 | 23/3/1968/2/40 |
| 30 | 22/1/1361/2/60 | 37/3/2765/2/60 |
| 45 | 22/1/1361/2/60 | 55/3/3649/2/80 |
| 60 | 22/1/1361/2/60 | 68/12/9362/45/87 |
| first | 9 11 - - - - | 14 15 16 19 49 52 |

Soldiers every 5 min: 10 2 2 2 2 2 2 2 2 2 2 2 (original game NPC: 10 2 2 2 2 2 2 2 2 18 38 45).

First army orders (game min:sec): 6:32 attack 8 soldiers -> building 147.

#### Game log: chatgpt

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 19 | 8 | 16 | 16 | 4 | 0 | 14 | 16 | 14 | 2 | 14 | 9 | 0 | 0 | 0 | 0 | 0 | 33 | 82 | 1361 | 19138 |
| 30 | 32 | 8 | 16 | 16 | 11 | 0 | 13 | 15 | 14 | 13 | 14 | 14 | 0 | 0 | 0 | 0 | 0 | 34 | 106 | 1361 | 19149 |
| 45 | 32 | 8 | 16 | 16 | 12 | 0 | 14 | 16 | 14 | 20 | 14 | 14 | 0 | 0 | 0 | 0 | 0 | 38 | 116 | 1361 | 19816 |
| 60 | 32 | 8 | 16 | 16 | 12 | 0 | 14 | 16 | 14 | 20 | 14 | 14 | 0 | 0 | 0 | 0 | 0 | 38 | 116 | 1361 | 19842 |

At the end: buildings (built+sites) wood 3, house 3, quarry 2, hq 1, house2 1, guard 1, saw 1, forest 1, fisher 1, ironmine 1, farm 1, coalmine 1, waterhut 1, mill 1, smelter 1, smith 1, bakery 1.
People: carrier 38, worker 16, digger 2, builder 2, soldier 1, explorer 1, geologist 1; beds 50. Soldiers: sword 1.

Goods produced in the game: log 79, grain 76, stone 66, water 60, flour 60, fish 57, plank 51, bread 46, coal 44, ironore 33, iron 19, axe 2, saw 1, rod 1, pick 1.
Goods consumed in the game: stone 68, plank 67, grain 60, log 51, fish 47, water 46, flour 46, bread 34, coal 24, ironore 19, pick 5, iron 5, axe 3, hammer 2, saw 1, shovel 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (59 building-min): Idle 100%
- quarry (107 building-min): Stone pile full, waiting for carriers 86%, Cutting stone 10%, Bringing stone to the pile 4%, Worker picking up a pickaxe 0%, Working 0%
- wood (155 building-min): Log pile full, waiting for carriers 85%, Felling a tree 11%, Bringing a log to the pile 4%, Worker picking up an axe 0%, Working 0%
- guard (58 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- saw (58 building-min): Output pile full, waiting for carriers 80%, Sawing planks 11%, Waiting for logs 7%, Stacking outside 2%, Fetching from the pile 0%
- forest (58 building-min): No free ground to plant in range inside your border 73%, Planting a sapling 27%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 91%, Fishing 5%, Bringing a fish to the pile 4%, Worker picking up a fishing rod 0%, No fish in range inside your border 0%
- ironmine (56 building-min): Iron ore pile full, waiting for carriers 88%, Mining iron ore 9%, Bringing iron ore out 2%, Deposit thinning: mining iron ore 1%, Worker picking up a pickaxe 1%
- farm (55 building-min): Grain pile full, waiting for carriers 80%, Sowing a field 10%, Harvesting grain 7%, Bringing grain to the pile 3%, Worker picking up a scythe 0%
- house (152 building-min): Idle 100%
- coalmine (54 building-min): Coal pile full, waiting for carriers 48%, Deposit worn out: finding little coal 44%, Bringing coal out 2%, Deposit thinning: mining coal 2%, Mining coal 2%
- waterhut (53 building-min): Water pile full, waiting for carriers 88%, Fetching water 6%, Bringing water to the pile 5%, Worker on the way 0%, Working 0%
- mill (53 building-min): Output pile full, waiting for carriers 88%, Grinding flour 8%, Stacking outside 3%, Fetching from the pile 1%, Waiting for grain 0%
- smelter (51 building-min): Output pile full, waiting for carriers 70%, Waiting for coal 24%, Smelting iron 5%, Stacking outside 1%, Worker picking up a hammer 0%
- smith (50 building-min): All tool targets met 94%, Waiting for coal 4%, Forging axe 1%, Worker picking up a hammer 0%, Forging fishing rod 0%
- bakery (47 building-min): Output pile full, waiting for carriers 74%, Baking bread 22%, Stacking outside 3%, Waiting for flour and water 1%, Fetching from the pile 0%

Building sites, time per state (site-min): Builders at work 6, Waiting for a digger 5, Leveling the ground 5, Waiting for a builder 4.

Build order (placed at min:sec, finished at): house2 0:00→0:57, quarry 0:00→1:15, wood 0:02→1:28, guard 0:04→2:27, saw 0:58→1:52, forest 1:38→2:04, fisher 2:04→2:48, ironmine 2:50→3:35, farm 3:36→4:36, house 4:16→4:57, coalmine 4:56→5:46, waterhut 5:28→6:37, mill 6:28→7:14, smelter 7:44→8:31, house 8:42→9:30, smith 9:42→10:28, wood 10:22→10:57, quarry 11:04→11:30, wood 11:40→12:26, bakery 12:14→12:55, house 12:42→13:54.

Orders given: sendUnit 67, place 21, priority 3, profession 2, attack 1. Refused (order: reason, times): place: Another building is in the way ×1.

People changing jobs: new carrier 50, carrier -> worker 16, carrier -> geologist 1, carrier -> explorer 1.

People's orders (2662 in all, 2635 done): worker rest farm 161, worker gather farm 160, worker rest forest 122, worker gather forest 121, worker mine coalmine 96, worker rest wood 82, worker gather wood 79, worker rest quarry 68, carrier haul grain farm -> mill 68, worker gather quarry 66, worker rest waterhut 61, worker rest mill 61, worker gather waterhut 60, worker toCraft mill 60. Not done (outcome: times): failed: can't reach that spot ×8.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 8.

Fights and contact: attacked enemy buildings 2 times (first 6:32); killed sword 5, bow 3; lost people bow 3, sword 5; first saw player 1 at 7:00.

Your notes (7 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Plan: 1 field soldiers, 1 posts, carriers 38/38 idle; ore coal/iron/gold 1/1/1, sites 0.
- 6:32 Attack: 8 field troops against guard 147; need 4.


Script: 1825 turns, 1.0 ms average, worst 12 ms, 0 over 0.3 s, 0 errors. Orders refused: place 1 of 22.
