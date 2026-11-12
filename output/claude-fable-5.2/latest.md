# Tournament: claude-fable-5.2

Game version 201. Written for: claude-fable-5.2 196.

- claude-fable-5.2: hearthlands-ai-challenge, commit 8d015ec

Maps 20261030, 777, 4242, 31, each twice (sides swapped), up to 60 game minutes (1x). 45 s.

Each game ends with the script's own game log: what it may know (its own side, and what happened to it or what it saw). Times are game min:sec.

| Opponent | Won | Lost | Undecided |
|---|---|---|---|
| original game NPC | 5 | 0 | 3 |

## Games

Each row: buildings / military / land tiles / soldiers / people at the minute shown. First: game minute of the first smelter, smith, weaponsmith, barracks, tower, castle (- = never).

### Map 31: claude-fable-5.2 (Gold) vs original game NPC: **won** at 21 min

| min | claude-fable-5.2 | original game NPC |
|---|---|---|
| 15 | 31/5/2678/13/54 | 27/3/2533/3/50 |
| 21 | 41/8/4399/22/53 | 0/0/0/0/0 |
| first | 4 6 7 9 12 - | 8 8 11 13 - - |

Soldiers every 5 min: 10 9 13 21 22 (original game NPC: 10 7 3 2 0).

First army orders (game min:sec): 1:32 sendIn 1 soldiers -> building 79; 7:18 armyTarget sword=9; 7:18 armyTarget spear=6; 7:18 armyTarget bow=4; 8:12 attack 8 soldiers -> building 140; 9:06 armyTarget sword=8; 9:06 armyTarget spear=5; 9:10 sendIn 1 soldiers -> building 161; 9:30 sendIn 1 soldiers -> building 161; 9:50 sendIn 1 soldiers -> building 161; 9:54 armyTarget sword=9; 10:00 armyTarget sword=8.

#### Game log: claude-fable-5.2

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 24 | 8 | 14 | 10 | 0 | 0 | 0 | 3 | 7 | 16 | 1 | 5 | 0 | 0 | 0 | 0 | 0 | 17 | 34 | 2678 | 13341 |
| 21 | 29 | 100 | 92 | 23 | 13 | 0 | 24 | 17 | 23 | 49 | 12 | 17 | 0 | 0 | 1 | 0 | 0 | 12 | 72 | 4399 | 16034 |

At the end: buildings (built+sites) guard 7, house 6, quarry 2+1, wood 3, forest 3, coalmine 3, saw 2, fisher 2, ironmine 2, tower 1+1, hq 1, smelter 1, smith 1, weaponsmith 1, barracks 1, farm 1, mill 1, waterhut 1, bakery 1, house2 0+1, stonemine 1.
People: worker 25, carrier 20, soldier 13, digger 3, builder 3, geologist 1, explorer 1; beds 60. Soldiers: sword 7, bow 3, spear 3.

Goods produced in the game: log 151, plank 126, coal 113, fish 107, stone 97, ironore 41, iron 39, grain 32, flour 21, water 21, sword 14, bread 7, spear 4, pick 4, shovel 3, axe 2, saw 2, hammer 2, rod 2.
Goods consumed in the game: log 126, plank 122, stone 111, fish 94, coal 73, ironore 40, iron 33, grain 21, sword 13, pick 9, water 8, flour 8, shovel 4, hammer 4, spear 4, axe 3, saw 2, rod 2, bread 2, scythe 1.
Goods lost in the game: stone 7, plank 6.
Goods captured in the game: stone 63, plank 50, ironore 11, iron 11, water 11, flour 10, coal 9, bread 8, grain 6, fish 4, axe 1, saw 1, pick 1, shovel 1, hammer 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (21 building-min): Idle 100%
- quarry (32 building-min): Cutting stone 51%, Bringing stone to the pile 26%, No stone in range inside your border 21%, Worker picking up a pickaxe 1%, Stone pile full, waiting for carriers 0%
- house (69 building-min): Idle 100%
- wood (47 building-min): Felling a tree 61%, Log pile full, waiting for carriers 22%, Bringing a log to the pile 16%, Worker picking up an axe 2%, Working 0%
- guard (57 building-min): Idle 95%, Waiting for a swordsman: train one at the barracks 4%, Soldiers on the way 1%, Waiting for a soldier 0%
- saw (23 building-min): Sawing planks 71%, Stacking outside 15%, Output pile full, waiting for carriers 10%, Worker picking up a saw 2%, Fetching from the pile 2%
- fisher (27 building-min): No fish in range inside your border 39%, Fishing 32%, Bringing a fish to the pile 28%, Worker picking up a fishing rod 2%
- forest (39 building-min): Planting a sapling 93%, No free ground to plant in range inside your border 5%, Worker picking up a shovel 2%, Working 0%
- ironmine (23 building-min): Needs meat or fish: mining stopped 61%, Mining iron ore 17%, Deposit thinning: mining iron ore 14%, Bringing iron ore out 5%, Worker picking up a pickaxe 2%
- coalmine (28 building-min): Mining coal 57%, Coal pile full, waiting for carriers 18%, Bringing coal out 11%, Needs bread or fish: mining stopped 9%, Worker picking up a pickaxe 4%
- smelter (17 building-min): Waiting for iron ore 62%, Smelting iron 30%, Stacking outside 6%, Worker picking up a hammer 1%, Fetching from the pile 1%
- smith (16 building-min): All tool targets met 62%, Waiting for coal 13%, Waiting for iron 9%, Forging pickaxe 3%, Forging shovel 2%
- weaponsmith (15 building-min): Waiting for iron 56%, Waiting for coal 23%, Forging sword 12%, Forging spear 4%, Stacking outside 3%
- barracks (13 building-min): Waiting for weapons from the weaponsmith 82%, Weapons on the way 17%, Training soldiers 1%, Soldier targets met 0%
- tower (9 building-min): Idle 86%, Waiting for a swordsman: train one at the barracks 14%, Waiting for a soldier 0%
- farm (8 building-min): Sowing a field 35%, Grain pile full, waiting for carriers 29%, Harvesting grain 22%, Bringing grain to the pile 9%, Worker picking up a scythe 5%
- mill (8 building-min): Output pile full, waiting for carriers 62%, Grinding flour 15%, Waiting for grain 14%, Stacking outside 7%, Fetching from the pile 1%
- waterhut (6 building-min): Water pile full, waiting for carriers 70%, Fetching water 16%, Bringing water to the pile 14%, Idle 0%, Working 0%
- bakery (3 building-min): Baking bread 62%, Waiting for flour 18%, Worker on the way 11%, Stacking outside 6%, Fetching from the pile 1%

Building sites, time per state (site-min): Waiting for a digger 16, Waiting for materials 10, Leveling the ground 10, Waiting for a builder 9, Builders at work 9.

Build order (placed at min:sec, finished at): quarry 0:00→0:23, house 0:02→0:42, wood 0:04→0:56, guard 0:06→1:30, saw 0:42→1:54, fisher 0:44→2:10, forest 0:56→2:25, wood 1:40→2:41, ironmine 1:56→3:06, coalmine 2:14→3:21, smelter 3:00→3:59, house 3:22→4:20, smith 3:50→5:02, weaponsmith 5:20→6:23, house 6:24→6:59, barracks 7:14→8:08, guard 7:56→8:54, quarry 8:38→9:38, forest 8:52→9:54, tower 10:00→11:33, wood 10:02→11:56, forest 10:22→11:49, house 10:36→12:13, fisher 10:40→12:35, farm 11:28→13:03, mill 12:10→13:16, guard 12:34→14:02, coalmine 12:54→14:12, house 13:36→14:35, waterhut 13:40→15:11, guard 14:18→15:37, ironmine 15:06→15:54, coalmine 15:38→17:10, saw 15:54→17:34, guard 16:20→17:43, bakery 16:48→18:10, house 17:26→18:39, tower 17:56→never, quarry 18:04→never, house2 18:58→never, … (41 in all).

Demolished or burned: guard (burned) 9:10, guard (burned) 10:36, guard (burned) 16:39.

Orders given: armyTarget 122, sendUnit 54, place 41, fighters 23, sendIn 12, priority 7, attack 7, profession 5, weaponKeep 3, archers 1, march 1. None refused.

People changing jobs: new carrier 60, carrier -> worker 25, carrier -> soldier 17, new soldier 10, carrier -> explorer 1, carrier -> builder 1, carrier -> digger 1.

People's orders (3885 in all, 3811 done): worker rest forest 275, worker gather forest 274, worker rest wood 153, worker mine coalmine 153, worker gather wood 152, carrier haul log wood -> saw 138, worker rest saw 128, worker toCraft saw 126, worker craft saw 126, worker rest coalmine 118, worker rest fisher 108, worker gather fisher 107, worker rest quarry 99, worker gather quarry 97. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×20; failed: no way (carrier (haul 0) target-off-land) ×11; failed: can't reach that spot ×7.

Failed path searches (who (task) why: times): carrier (haul 0) target-off-land 11, explorer (explore 0) cut-off 7.

Fights and contact: attacked enemy buildings 7 times (first 8:12); took guard 9:09, guard 10:34, guard 11:26, guard 16:38, hq 19:16, guard 20:27; killed bow 3, sword 6; lost people sword 4, spear 1; first saw player 2 at 9:00.

Your notes (126 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text; the last 30 of 45 kinds):
- 3:50 placed smith 53,124 at 230 s
- 4:00 waiting: weaponsmith: materials; tower: materials; forest: materials; coalmine: materials
- 5:00 waiting: weaponsmith: materials; tower: materials; quarry: materials; forest: materials; coalmine: materials
- 5:20 placed weaponsmith 47,108 at 320 s
- ×2 6:00–7:00 waiting: barracks: materials; tower: materials; quarry: materials; forest: materials; coalmine: materials
- 7:14 placed barracks 42,105 at 434 s
- 8:00 waiting: quarry: materials; forest: materials; coalmine: materials
- ×6 8:12–20:28 attack: 11 soldiers on guard 128, needed 7, 1 targets known
- 9:00 waiting: coalmine: materials
- ×5 9:00–16:00 army: outside 8 free 4 attacking 0 | targets 9/5/4 | enemy seen: soldiers 0 buildings 27 military 4 | next guard needs 7 | gold 0.6
- 10:00 placed tower 65,97 at 600 s (land for: room)
- 10:36 defence: 2 soldiers meet 2 enemy soldiers near our buildings
- ×5 11:00–15:00 tools free: axe 1 pick 1 hammer 1 saw 1 shovel 1 rod 1 | ore known: coal 1 iron 1 gold 0 | unsearched 58 | military 6 houses 5 | rocks in reach 36 | mines hungry
- 11:00 waiting: coalmine: materials; farm: materials
- 11:28 placed farm 53,89 at 688 s
- 12:00 waiting: coalmine: materials; waterhut: materials; mill: materials
- 12:10 placed mill 59,91 at 730 s
- 12:34 placed guard 77,112 at 754 s (land for: room)
- 13:00 waiting: waterhut: materials
- 13:40 placed waterhut 73,90 at 820 s
- ×2 14:00–16:00 waiting: bakery: materials
- ×3 14:00–19:00 army: outside 12 free 11 attacking 0 | targets 6/4/2 | enemy seen: soldiers 0 buildings 32 military 3 | next hq needs 12 | gold 0.6
- 15:00 waiting: ironmine: materials; coalmine: materials; saw: materials; bakery: materials
- 16:48 placed bakery 70,85 at 1008 s
- 17:00 waiting: house: materials
- 17:56 placed tower 44,79 at 1076 s
- 18:58 placed house2 77,105 at 1138 s
- 19:10 attack: 12 soldiers on hq 37, needed 12, 3 targets known
- 19:22 placed stonemine 77,131 at 1162 s
- 20:00 tools free: axe 1 pick -1 hammer 1 saw 1 shovel 1 rod 1 | ore known: coal 1 iron 1 gold 0 | unsearched 81 | military 8 houses 7 | rocks in reach 148


Script: 670 turns, 0.7 ms average, worst 11 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 31: claude-fable-5.2 (Blue) vs original game NPC: **won** at 25 min

| min | claude-fable-5.2 | original game NPC |
|---|---|---|
| 15 | 30/6/3089/12/44 | 28/5/2722/4/50 |
| 25 | 44/12/6074/27/71 | 0/0/0/0/0 |
| first | 5 7 9 10 14 - | 11 12 21 21 - - |

Soldiers every 5 min: 10 10 12 19 27 (original game NPC: 10 10 4 3 0).

First army orders (game min:sec): 1:18 sendIn 1 soldiers -> building 79; 2:32 sendIn 1 soldiers -> building 102; 8:30 armyTarget sword=9; 8:30 armyTarget spear=5; 8:30 armyTarget bow=4; 9:28 attack 7 soldiers -> building 80; 10:36 armyTarget sword=8; 10:36 armyTarget bow=3; 10:42 sendIn 1 soldiers -> building 173; 10:42 armyTarget sword=7; 10:42 armyTarget spear=4; 10:54 armyTarget sword=3.

#### Game log: claude-fable-5.2

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 24 | 5 | 8 | 7 | 0 | 0 | 0 | 0 | 0 | 11 | 3 | 20 | 0 | 0 | 0 | 0 | 0 | 11 | 35 | 3089 | 15172 |
| 25 | 73 | 149 | 140 | 44 | 13 | 7 | 12 | 27 | 5 | 41 | 11 | 6 | 3 | 8 | 0 | 0 | 0 | 39 | 86 | 6074 | 19904 |

At the end: buildings (built+sites) guard 10, house 6, wood 3, forest 3, coalmine 3, quarry 2, saw 2, fisher 2, ironmine 2, tower 2, hq 1, smelter 1, smith 1, weaponsmith 1, barracks 1, goldmine 1, goldsmelter 1, stonemine 1, house3 1.
People: carrier 40, worker 23, soldier 13, digger 3, builder 3, geologist 1, explorer 1; beds 110. Soldiers: sword 7, bow 2, spear 4.

Goods produced in the game: fish 184, log 158, coal 134, plank 122, stone 115, ironore 47, iron 47, sword 17, goldore 11, gold 8, pick 6, spear 4, hammer 3, shovel 3, axe 2, saw 2, rod 2, bow 2.
Goods consumed in the game: fish 174, plank 130, log 122, stone 117, coal 96, ironore 47, iron 41, sword 17, pick 10, goldore 8, hammer 5, shovel 4, spear 4, axe 3, saw 2, rod 2, bow 2.
Goods captured in the game: plank 117, stone 106, log 33, fish 28, grain 27, bread 13, water 12, ironore 11, meat 7, flour 5, pig 3, coal 3.

What the buildings did (share of their time after being built):
- hq (25 building-min): Idle 100%
- quarry (39 building-min): Cutting stone 52%, Bringing stone to the pile 28%, Stone pile full, waiting for carriers 19%, Worker picking up a pickaxe 1%, Working 0%
- house (92 building-min): Idle 100%
- wood (59 building-min): Felling a tree 51%, Log pile full, waiting for carriers 34%, Bringing a log to the pile 13%, Worker picking up an axe 1%, Working 0%
- guard (112 building-min): Idle 98%, Waiting for a swordsman: train one at the barracks 1%, Soldiers on the way 1%, Waiting for a soldier 0%
- saw (28 building-min): Sawing planks 55%, Output pile full, waiting for carriers 30%, Stacking outside 12%, Fetching from the pile 1%, Worker picking up a saw 1%
- fisher (31 building-min): Bringing a fish to the pile 52%, Fishing 45%, Worker picking up a fishing rod 3%, Working 0%
- forest (50 building-min): Planting a sapling 64%, No free ground to plant in range inside your border 35%, Worker picking up a shovel 1%, Needs a worker with a shovel 0%, Working 0%
- coalmine (37 building-min): Mining coal 49%, Deposit worn out: finding little coal 13%, Needs bread or fish: mining stopped 10%, Bringing coal out 9%, Deposit thinning: mining coal 9%
- ironmine (29 building-min): Needs meat or fish: mining stopped 52%, Deposit thinning: mining iron ore 22%, Mining iron ore 14%, Bringing iron ore out 4%, Deposit worn out: finding little iron ore 3%
- smelter (20 building-min): Output pile full, waiting for carriers 33%, Smelting iron 29%, Waiting for iron ore 29%, Stacking outside 6%, Worker picking up a hammer 1%
- smith (19 building-min): All tool targets met 84%, Forging pickaxe 4%, Stacking outside 3%, Forging hammer 2%, Forging shovel 2%
- weaponsmith (17 building-min): Waiting for coal 69%, Forging sword 13%, Waiting for iron 9%, Stacking outside 4%, Forging spear 3%
- barracks (16 building-min): Waiting for weapons from the weaponsmith 87%, Weapons on the way 11%, Training soldiers 2%, Soldier targets met 0%, Idle 0%
- tower (20 building-min): Idle 99%, Soldiers on the way 1%
- goldmine (11 building-min): Deposit worn out: finding little gold ore 76%, Worker picking up a pickaxe 6%, Mining gold ore 6%, Needs a worker with a pickaxe 5%, Bringing gold ore out 3%
- goldsmelter (10 building-min): Waiting for gold ore 45%, Output pile full, waiting for carriers 29%, Smelting gold 10%, Worker picking up a hammer 7%, Waiting for coal 7%
- stonemine (8 building-min): Needs bread or fish: mining stopped 90%, Worker picking up a pickaxe 9%, Working 0%
- house3 (1 building-min): Idle 100%

Building sites, time per state (site-min): Waiting for a digger 11, Leveling the ground 10, Builders at work 9, Waiting for a builder 9, Waiting for materials 4.

Build order (placed at min:sec, finished at): quarry 0:00→0:28, house 0:02→0:45, wood 0:04→1:00, guard 0:06→1:17, saw 0:50→1:40, fisher 0:52→1:57, forest 1:00→2:14, guard 1:24→2:32, coalmine 1:42→2:47, ironmine 2:02→3:02, wood 2:30→3:19, house 2:50→3:41, smelter 3:32→4:40, house 4:40→5:33, smith 5:28→6:26, weaponsmith 7:10→8:05, barracks 8:26→9:21, guard 9:10→10:06, quarry 9:52→10:48, forest 10:08→11:24, wood 10:36→11:40, forest 10:48→11:50, house 10:52→12:09, guard 11:32→12:32, tower 12:38→13:35, coalmine 12:58→13:49, goldmine 13:06→14:02, goldsmelter 13:54→14:46, house 14:32→15:15, tower 15:00→16:28, stonemine 15:52→16:45, fisher 16:26→17:21, ironmine 17:04→18:21, guard 17:32→19:15, saw 18:08→20:11, house 18:14→20:39, coalmine 19:14→21:04, house3 22:32→24:16.

Orders given: armyTarget 170, sendUnit 70, fighters 45, place 38, sendIn 10, priority 7, attack 7, profession 5, weaponKeep 3. None refused.

People changing jobs: new carrier 84, carrier -> worker 23, carrier -> soldier 23, new soldier 10, carrier -> explorer 1, carrier -> builder 1, carrier -> digger 1.

People's orders (4088 in all, 4033 done): worker rest forest 251, worker gather forest 248, worker mine coalmine 215, worker rest fisher 185, worker gather fisher 184, worker rest wood 161, worker gather wood 158, worker rest coalmine 140, carrier haul log wood -> saw 134, worker rest saw 124, worker toCraft saw 122, worker craft saw 122, worker rest quarry 117, carrier haul fish fisher -> coalmine 116. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×24; failed: can't reach that spot ×4.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 5.

Fights and contact: attacked enemy buildings 8 times (first 9:28); took guard 10:42, guard 19:53, guard 20:02, guard 20:40, guard 21:33, hq 23:48; killed bow 3, sword 6; lost people sword 3, bow 3; first saw player 1 at 10:00.

Your notes (138 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text; the last 30 of 46 kinds):
- 3:00 waiting: smelter: materials
- 3:32 placed smelter 201,136 at 212 s
- 4:00 waiting: smith: materials; forest: materials
- 5:00 waiting: smith: materials; tower: materials; quarry: materials; forest: materials; coalmine: materials
- 5:28 placed smith 197,131 at 328 s
- ×2 6:00–7:00 waiting: weaponsmith: materials; tower: materials; quarry: materials; forest: materials; coalmine: materials
- 7:10 placed weaponsmith 191,131 at 430 s
- 8:00 waiting: barracks: materials; tower: materials; quarry: materials; forest: materials; coalmine: materials
- 8:26 placed barracks 190,125 at 506 s
- 9:00 waiting: tower: materials; quarry: materials; forest: materials; coalmine: materials
- ×5 9:28–24:40 attack: 12 soldiers on guard 141, needed 7, 1 targets known
- 10:00 waiting: forest: materials; coalmine: materials; wood: materials
- ×10 10:00–20:00 army: outside 9 free 1 attacking 5 | targets 9/6/4 | enemy seen: soldiers 0 buildings 42 military 5 | next guard needs 0 | gold 0.7
- 11:00 tools free: axe 0 pick 0 hammer 1 saw 1 shovel -1 rod 1 | ore known: coal 1 iron 1 gold 0 | unsearched 26 | military 4 houses 4 | rocks in reach 136
- 11:00 waiting: coalmine: materials
- ×2 11:00–23:00 army: outside 10 free 9 attacking 0 | targets 5/3/2 | enemy seen: soldiers 0 buildings 40 military 2 | next hq needs 12 | gold 0.7
- ×2 12:00–19:00 waiting: coalmine: no spot
- 12:38 placed tower 184,80 at 758 s (land for: room)
- 13:00 waiting: goldmine: materials
- 13:06 placed goldmine 177,90 at 786 s
- 13:54 placed goldsmelter 172,88 at 834 s
- 14:00 waiting: house: materials; fisher: materials
- 15:00 placed tower 182,62 at 900 s
- 15:52 placed stonemine 198,73 at 952 s
- 16:00 waiting: fisher: materials; ironmine: materials; coalmine: materials; saw: materials
- 17:00 waiting: ironmine: materials; coalmine: materials; saw: materials
- 18:00 waiting: coalmine: materials; saw: materials
- 19:56 attack: 5 soldiers on guard 140 (empty), needed 4, 5 targets known
- 22:32 placed house3 197,98 at 1352 s
- 23:42 attack: 12 soldiers on hq 1, needed 12, 2 targets known


Script: 784 turns, 0.7 ms average, worst 16 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: claude-fable-5.2 (Gold) vs original game NPC: undecided

| min | claude-fable-5.2 | original game NPC |
|---|---|---|
| 15 | 30/7/3778/13/43 | 29/4/2057/4/43 |
| 30 | 48/16/7686/23/89 | 40/5/3614/8/57 |
| 45 | 55/20/10777/46/100 | 63/8/5441/9/101 |
| 60 | 60/23/13591/39/84 | 64/8/9437/18/81 |
| first | 5 6 8 9 12 45 | 10 11 15 16 22 44 |

Soldiers every 5 min: 10 10 13 16 24 23 29 34 46 45 43 39 (original game NPC: 10 10 4 4 5 8 11 11 9 4 7 18).

First army orders (game min:sec): 1:34 sendIn 1 soldiers -> building 78; 2:48 sendIn 1 soldiers -> building 99; 5:22 sendIn 1 soldiers -> building 127; 8:06 armyTarget sword=5; 8:06 armyTarget spear=3; 8:06 armyTarget bow=3; 8:12 armyTarget sword=7; 8:12 armyTarget spear=5; 8:18 armyTarget sword=8; 8:18 armyTarget bow=4; 9:48 sendIn 1 soldiers -> building 171; 9:48 armyTarget sword=7.

#### Game log: claude-fable-5.2

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 24 | 11 | 18 | 12 | 0 | 0 | 0 | 0 | 0 | 15 | 1 | 8 | 0 | 0 | 1 | 0 | 0 | 1 | 36 | 3778 | 15953 |
| 30 | 40 | 21 | 29 | 24 | 0 | 0 | 0 | 0 | 0 | 54 | 0 | 6 | 14 | 8 | 0 | 0 | 0 | 53 | 114 | 7686 | 21260 |
| 45 | 40 | 19 | 26 | 22 | 0 | 0 | 0 | 0 | 0 | 46 | 0 | 6 | 14 | 8 | 0 | 0 | 0 | 60 | 105 | 10777 | 27165 |
| 60 | 40 | 31 | 44 | 22 | 0 | 0 | 0 | 0 | 0 | 45 | 0 | 6 | 14 | 8 | 0 | 0 | 0 | 43 | 109 | 13591 | 32672 |

At the end: buildings (built+sites) tower 16, guard 7, house 6, quarry 4, coalmine 4, wood 3, ironmine 3, saw 2, fisher 2, forest 2, stonemine 2, house3 2, hq 1, smelter 1, smith 1, weaponsmith 1, barracks 1, goldmine 1, goldsmelter 1.
People: carrier 47, worker 27, digger 4, builder 4, soldier 1, geologist 1, explorer 1; beds 160. Soldiers: sword 1.

Goods produced in the game: fish 595, coal 279, log 252, plank 216, stone 214, ironore 116, iron 116, sword 65, goldore 22, spear 15, pick 11, gold 8, bow 6, hammer 4, shovel 3, axe 2, saw 2, rod 2.
Goods consumed in the game: fish 579, coal 234, plank 224, log 216, stone 206, ironore 116, iron 110, sword 65, pick 15, spear 15, goldore 8, hammer 6, bow 6, shovel 4, axe 3, saw 2, rod 2.
Goods lost in the game: stone 17, plank 12, coal 3, axe 1, saw 1, pick 1, rod 1, scythe 1.
Goods captured in the game: stone 25, plank 18, coal 3, axe 1, saw 1, pick 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- quarry (123 building-min): Stone pile full, waiting for carriers 40%, Cutting stone 28%, Bringing stone to the pile 13%, No stone in range inside your border 13%, Worker picking up a pickaxe 4%
- house (296 building-min): Idle 100%
- wood (163 building-min): Log pile full, waiting for carriers 63%, Felling a tree 29%, Bringing a log to the pile 7%, Worker picking up an axe 1%, Working 0%
- guard (384 building-min): Idle 99%, Waiting for a swordsman: train one at the barracks 1%, Soldiers on the way 0%, Waiting for a soldier 0%
- saw (101 building-min): Output pile full, waiting for carriers 65%, Sawing planks 27%, Stacking outside 6%, Waiting for logs 1%, Fetching from the pile 1%
- fisher (104 building-min): Fishing 43%, Bringing a fish to the pile 39%, No fish in range inside your border 16%, Fish pile full, waiting for carriers 2%, Worker picking up a fishing rod 1%
- ironmine (128 building-min): Needs meat or fish: mining stopped 52%, Deposit worn out: finding little iron ore 27%, Deposit thinning: mining iron ore 10%, Mining iron ore 5%, Bringing iron ore out 2%
- coalmine (181 building-min): Coal pile full, waiting for carriers 45%, Deposit thinning: mining coal 23%, Mining coal 12%, Deposit worn out: finding little coal 10%, Bringing coal out 4%
- smelter (56 building-min): Waiting for iron ore 61%, Smelting iron 26%, Stacking outside 6%, Output pile full, waiting for carriers 5%, Waiting for coal 1%
- smith (54 building-min): All tool targets met 86%, Waiting for coal 7%, Forging pickaxe 3%, Stacking outside 1%, Forging hammer 1%
- forest (102 building-min): No free ground to plant in range inside your border 51%, Planting a sapling 48%, Worker picking up a shovel 1%, Working 0%, Idle 0%
- weaponsmith (53 building-min): Waiting for iron 61%, Forging sword 16%, Waiting for coal 13%, Stacking outside 4%, Forging spear 4%
- barracks (51 building-min): Waiting for weapons from the weaponsmith 81%, Weapons on the way 17%, Training soldiers 2%, Soldier targets met 0%
- tower (438 building-min): Idle 93%, Waiting for a swordsman: train one at the barracks 6%, Soldiers on the way 1%, Waiting for a soldier 0%
- stonemine (63 building-min): Needs bread or fish: mining stopped 94%, Worker picking up a pickaxe 4%, Mining stone 1%, Deposit thinning: mining stone 0%, Bringing stone out 0%
- goldmine (41 building-min): Gold ore pile full, waiting for carriers 79%, Worker picking up a pickaxe 9%, Mining gold ore 6%, Deposit thinning: mining gold ore 3%, Bringing gold ore out 2%
- goldsmelter (39 building-min): Output pile full, waiting for carriers 89%, Waiting for gold ore 4%, Worker picking up a hammer 3%, Smelting gold 3%, Stacking outside 1%
- house3 (54 building-min): Idle 100%
- castle (8 building-min): Waiting for a swordsman: train one at the barracks 66%, Idle 34%, Soldiers on the way 0%

Building sites, time per state (site-min): Waiting for a digger 27, Waiting for materials 20, Leveling the ground 18, Waiting for a builder 14, Builders at work 13.

Build order (placed at min:sec, finished at): quarry 0:00→0:26, house 0:02→0:47, wood 0:04→0:59, guard 0:06→1:32, saw 0:46→1:55, fisher 0:48→2:10, guard 1:38→2:47, wood 1:40→3:12, ironmine 1:56→3:36, coalmine 2:16→4:20, smelter 2:48→4:03, guard 3:14→5:20, house 3:40→4:40, smith 4:26→5:34, forest 4:52→5:50, weaponsmith 6:10→7:17, house 7:18→7:58, barracks 8:04→8:57, guard 8:48→9:46, quarry 9:38→10:29, coalmine 9:44→10:46, tower 10:30→11:32, wood 10:50→12:25, stonemine 11:04→12:09, forest 11:30→12:30, fisher 11:52→13:26, guard 12:10→13:50, house 12:48→14:19, tower 14:22→16:11, house 14:46→16:42, ironmine 15:04→17:06, coalmine 15:24→17:21, saw 15:48→17:34, tower 16:30→18:58, house 17:08→19:54, goldmine 17:34→19:20, goldsmelter 17:36→20:42, tower 19:42→21:11, house3 20:12→22:47, tower 22:18→23:58, … (57 in all).

Demolished or burned: guard (burned) 14:15, guard (burned) 15:44, guard (burned) 20:13, guard (burned) 20:17, guard (burned) 34:30, guard (burned) 43:09, tower (burned) 43:31, guard (burned) 45:34, guard (burned) 45:48, castle (burned) 51:36, guard (burned) 51:59, tower (burned) 55:55.

Orders given: fighters 907, armyTarget 317, sendUnit 214, place 57, sendIn 51, attack 19, archers 17, march 17, priority 9, profession 7, weaponKeep 3. None refused.

People changing jobs: new carrier 160, carrier -> soldier 86, new soldier 67, carrier -> worker 28, carrier -> digger 2, carrier -> builder 2, carrier -> explorer 1, worker -> carrier 1.

People's orders (9417 in all, 8930 done): worker rest fisher 595, worker gather fisher 595, worker mine coalmine 547, carrier haul fish fisher -> coalmine 352, worker rest forest 351, worker gather forest 349, worker eat coalmine 343, worker mine ironmine 317, worker getTool goldmine 305, worker rest coalmine 286, worker rest wood 255, worker gather wood 252, carrier haul log wood -> saw 228, carrier haul fish fisher -> ironmine 227. Not done (outcome: times): failed: no way (worker (work getTool) own-land-split) ×311; ended: the person is gone (became a soldier, defeated or removed) ×91; failed: can't reach that spot ×26; failed: no way (carrier (haul 0) target-off-land) ×8; failed: killed ×2; failed: no way (worker (work getTool) target-off-land) ×2.

Failed path searches (who (task) why: times): worker (work getTool) own-land-split 311, explorer (explore 0) cut-off 28, carrier (haul 0) target-off-land 8, worker (work getTool) target-off-land 2.

Fights and contact: attacked enemy buildings 17 times (first 12:46); took guard 13:52, guard 14:15, guard 15:44, guard 16:45, guard 17:00, guard 17:44, guard 24:15, guard 37:31, tower 43:30, castle 44:02, tower 45:13, guard 45:34, guard 45:48, guard 46:01; killed sword 58, bow 3; lost people spear 15, sword 33, bow 9; first saw player 2 at 9:00.

Warnings: path-fail 6. Last: 19:31 path-fail: worker (work getTool) failed 5 times within a minute to find a way, last to 182,93: own-land-split | 20:07 path-fail: worker (work getTool) failed 5 times within a minute to find a way, last to 182,93: own-land-split | 21:25 path-fail: worker (work getTool) failed 5 times within a minute to find a way, last to 182,93: own-land-split

Your notes (321 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text; the last 30 of 46 kinds):
- 4:26 placed smith 32,131 at 266 s
- ×2 4:52–11:30 placed forest 18,98 at 690 s
- ×2 5:00–6:00 waiting: weaponsmith: materials; quarry: materials; forest: materials; coalmine: materials
- 6:10 placed weaponsmith 54,131 at 370 s
- 7:00 waiting: barracks: materials; quarry: materials; forest: materials; coalmine: materials
- 8:00 waiting: barracks: materials; tower: materials; quarry: materials; forest: materials; coalmine: materials
- 8:04 placed barracks 55,125 at 484 s
- 9:00 waiting: quarry: materials; forest: materials; coalmine: materials
- ×19 9:00–55:00 army: outside 6 free 1 attacking 0 | targets 8/5/3 | enemy seen: soldiers 0 buildings 59 military 4 | next guard needs 4 | gold 0.7
- ×6 10:00–52:00 tools free: axe 1 pick -1 hammer 1 saw 1 shovel 1 rod 1 | ore known: coal 1 iron 1 gold 1 | unsearched 161 | military 23 houses 8 | rocks in reach 344
- 10:00 waiting: tower: materials; tower: materials; stonemine: no pick; forest: materials; wood: materials
- 10:30 placed tower 70,133 at 630 s
- 11:00 waiting: stonemine: materials; forest: materials
- ×2 11:04–43:16 placed stonemine 127,201 at 2596 s
- 12:00 waiting: tower: materials; forest: materials
- ×8 12:46–45:50 attack: 6 soldiers on guard 407, needed 5, 5 targets known
- ×2 13:00–17:00 waiting: forest: materials
- ×4 14:08–36:34 attack: 4 soldiers on guard 262 (empty), needed 4, 8 targets known
- ×15 14:22–52:06 placed tower 41,190 at 3126 s (land for: room)
- 15:00 waiting: forest: materials; ironmine: materials; coalmine: materials; saw: materials
- 17:34 placed goldmine 103,166 at 1054 s
- 17:36 placed goldsmelter 98,167 at 1056 s
- ×10 18:16–54:55 defence: 1 soldiers meet 2 enemy soldiers near our buildings
- ×7 19:00–54:00 army: outside 5 free 2 attacking 0 | targets 8/5/3 | enemy seen: soldiers 0 buildings 59 military 4 | next hq needs 7 | gold 0.7
- ×2 20:12–40:08 placed house3 68,118 at 2408 s
- ×8 38:00–47:00 army: outside 7 free 2 attacking 0 | targets 8/5/3 | enemy seen: soldiers 0 buildings 58 military 4 | next tower needs 7 | gold 0.7
- ×2 42:22–44:58 attack: 11 soldiers on tower 281, needed 11, 8 targets known
- 43:52 attack: 15 soldiers on castle 462 (empty), needed 4, 8 targets known
- 44:00 army: outside 17 free 0 attacking 15 | targets 13/8/6 | enemy seen: soldiers 0 buildings 62 military 8 | next castle needs 0 | gold 0.7
- 55:00 tools free: axe 1 pick -1 hammer 1 saw 1 shovel 1 rod 1 | ore known: coal 1 iron 1 gold 1 | unsearched 161 | military 24 houses 8 | rocks in reach 344 | stone not flowing


Script: 2048 turns, 0.7 ms average, worst 18 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: claude-fable-5.2 (Blue) vs original game NPC: **won** at 20 min

| min | claude-fable-5.2 | original game NPC |
|---|---|---|
| 15 | 27/5/3035/9/47 | 29/5/2306/3/40 |
| 21 | 38/9/5359/26/47 | 0/0/0/0/0 |
| first | 7 6 7 9 13 - | 10 14 - - - - |

Soldiers every 5 min: 10 6 9 25 26 (original game NPC: 10 4 3 1 0).

First army orders (game min:sec): 1:24 sendIn 1 soldiers -> building 78; 3:52 sendIn 1 soldiers -> building 122; 7:30 attack 7 soldiers -> building 80; 8:00 armyTarget sword=7; 8:00 armyTarget spear=4; 8:00 armyTarget bow=3; 8:06 armyTarget sword=8; 8:06 armyTarget spear=5; 8:12 armyTarget bow=4; 8:18 armyTarget sword=9; 8:30 armyTarget sword=8; 8:36 armyTarget bow=3.

#### Game log: claude-fable-5.2

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 29 | 9 | 18 | 6 | 0 | 0 | 0 | 0 | 0 | 12 | 5 | 20 | 0 | 0 | 1 | 0 | 0 | 4 | 46 | 3035 | 15936 |
| 21 | 43 | 111 | 121 | 41 | 11 | 3 | 18 | 4 | 6 | 45 | 8 | 6 | 0 | 0 | 1 | 0 | 0 | 13 | 61 | 5359 | 17040 |

At the end: buildings (built+sites) house 6, guard 6, wood 3, forest 3, coalmine 3, tower 3, quarry 2, saw 2, fisher 2, ironmine 2, hq 1, smelter 1, smith 1, weaponsmith 1, barracks 1, stonemine 1, house3 0+1.
People: worker 21, carrier 18, soldier 14, digger 3, builder 3, geologist 1, explorer 1; beds 60. Soldiers: sword 7, bow 3, spear 4.

Goods produced in the game: log 143, fish 122, plank 113, coal 106, stone 102, ironore 54, iron 47, sword 18, pick 5, spear 4, shovel 3, axe 2, saw 2, hammer 2, rod 2, bow 2.
Goods consumed in the game: plank 114, log 114, fish 111, stone 100, coal 89, ironore 48, iron 41, sword 17, pick 9, shovel 4, hammer 4, spear 4, axe 3, saw 2, rod 2, bow 2.
Goods captured in the game: stone 76, plank 67, coal 28, fish 24, water 18, bread 11, log 10, pig 7, flour 6, grain 4, meat 3, ironore 2, hammer 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (21 building-min): Idle 100%
- quarry (32 building-min): Cutting stone 52%, Stone pile full, waiting for carriers 24%, Bringing stone to the pile 23%, Worker picking up a pickaxe 1%, Working 0%
- house (69 building-min): Idle 100%
- wood (48 building-min): Felling a tree 55%, Log pile full, waiting for carriers 29%, Bringing a log to the pile 14%, Worker picking up an axe 2%, Working 0%
- guard (58 building-min): Idle 98%, Waiting for a swordsman: train one at the barracks 2%, Soldiers on the way 1%
- saw (24 building-min): Sawing planks 61%, Output pile full, waiting for carriers 22%, Stacking outside 13%, Worker picking up a saw 2%, Fetching from the pile 2%
- fisher (21 building-min): Bringing a fish to the pile 37%, Fishing 35%, Fish pile full, waiting for carriers 19%, No fish in range inside your border 5%, Worker picking up a fishing rod 4%
- forest (44 building-min): Planting a sapling 92%, No free ground to plant in range inside your border 4%, Needs a worker with a shovel 2%, Worker picking up a shovel 2%, Working 0%
- ironmine (21 building-min): Deposit thinning: mining iron ore 29%, Needs meat or fish: mining stopped 28%, Mining iron ore 22%, Bringing iron ore out 7%, Iron ore pile full, waiting for carriers 7%
- coalmine (26 building-min): Mining coal 57%, Needs bread or fish: mining stopped 22%, Bringing coal out 11%, Worker picking up a pickaxe 5%, Deposit thinning: mining coal 3%
- smelter (15 building-min): Smelting iron 41%, Waiting for iron ore 24%, Output pile full, waiting for carriers 21%, Stacking outside 9%, Waiting for coal 2%
- smith (15 building-min): All tool targets met 43%, Waiting for coal 34%, Waiting for iron 6%, Forging pickaxe 4%, Stacking outside 3%
- weaponsmith (14 building-min): Waiting for coal 45%, Waiting for iron 17%, Forging sword 16%, Waiting for coal and iron 10%, Stacking outside 4%
- barracks (12 building-min): Waiting for weapons from the weaponsmith 77%, Weapons on the way 20%, Soldier targets met 2%, Training soldiers 2%
- tower (21 building-min): Idle 81%, Waiting for a swordsman: train one at the barracks 18%, Soldiers on the way 0%, Waiting for a soldier 0%
- stonemine (2 building-min): Needs bread or fish: mining stopped 79%, Worker picking up a pickaxe 20%, Working 1%

Building sites, time per state (site-min): Waiting for a digger 13, Waiting for a builder 10, Leveling the ground 8, Builders at work 8, Waiting for materials 2.

Build order (placed at min:sec, finished at): quarry 0:00→0:32, house 0:02→0:52, wood 0:04→1:04, guard 0:06→1:23, saw 0:54→1:45, fisher 0:56→2:03, forest 1:04→2:19, wood 1:40→2:36, house 1:46→3:03, ironmine 2:06→3:26, guard 2:30→3:52, forest 4:00→4:56, coalmine 4:16→5:22, smelter 4:36→6:14, smith 4:54→5:47, weaponsmith 6:04→6:54, house 6:46→7:35, barracks 7:56→8:48, quarry 8:38→9:29, guard 9:18→10:13, wood 10:00→10:57, house 10:02→11:19, forest 10:04→11:29, tower 11:14→12:23, coalmine 11:46→12:41, tower 12:30→13:31, tower 14:36→15:57, house 14:40→16:19, saw 15:16→16:40, guard 16:10→17:07, ironmine 16:18→17:28, house 16:40→18:09, stonemine 16:42→18:31, fisher 17:12→18:43, coalmine 17:58→18:58, house3 19:56→never.

Demolished or burned: guard (burned) 8:49, guard (burned) 17:14.

Orders given: armyTarget 152, sendUnit 57, fighters 42, place 36, sendIn 15, archers 9, priority 7, attack 6, profession 5, weaponKeep 3, march 1. None refused.

People changing jobs: new carrier 60, carrier -> soldier 23, carrier -> worker 21, new soldier 13, carrier -> explorer 1, carrier -> builder 1, carrier -> digger 1.

People's orders (3585 in all, 3523 done): worker rest forest 286, worker gather forest 285, worker rest wood 146, worker gather wood 144, worker mine coalmine 140, carrier haul log wood -> saw 126, worker rest fisher 124, worker gather fisher 122, worker rest saw 115, worker toCraft saw 114, worker craft saw 114, worker rest coalmine 111, worker rest quarry 104, worker gather quarry 104. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×27; failed: can't reach that spot ×5.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 8.

Fights and contact: attacked enemy buildings 7 times (first 7:30); took guard 8:45, guard 16:29, guard 17:11, hq 18:05, guard 19:13; killed bow 3, sword 6; lost people sword 5, bow 2; first saw player 1 at 8:00.

Your notes (123 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text; the last 30 of 43 kinds):
- ×3 4:16–17:58 placed coalmine 157,140 at 1078 s
- 4:36 placed smelter 191,114 at 276 s
- 4:54 placed smith 185,114 at 294 s
- ×2 5:00–6:00 waiting: weaponsmith: materials; tower: materials; quarry: materials
- 6:04 placed weaponsmith 187,120 at 364 s
- 7:00 waiting: barracks: materials; tower: materials; quarry: materials; coalmine: materials
- ×4 7:30–20:00 attack: 12 soldiers on guard 146, needed 7, 2 targets known
- 7:56 placed barracks 182,123 at 476 s
- 8:00 waiting: quarry: materials; coalmine: materials; goldmine: materials
- ×7 8:00–20:00 army: outside 13 free 12 attacking 0 | targets 9/6/4 | enemy seen: soldiers 0 buildings 29 military 2 | next guard needs 7 | gold 0.6
- 8:46 defence: 1 soldiers meet 1 enemy soldiers near our buildings
- 9:00 waiting: tower: materials; coalmine: materials; goldmine: materials
- ×4 9:00–18:00 army: outside 13 free 0 attacking 12 | targets 6/4/2 | enemy seen: soldiers 0 buildings 35 military 4 | next hq needs 0 | gold 0.6
- ×2 10:00–11:00 waiting: stonemine: no spot; coalmine: no spot; goldmine: no spot
- ×2 11:00–12:00 tools free: axe 0 pick 0 hammer 0 saw 1 shovel -1 rod 0 | ore known: coal 1 iron 1 gold 1 | unsearched 55 | military 4 houses 4 | rocks in reach 150
- 11:14 placed tower 185,150 at 674 s (land for: room)
- 12:00 waiting: stonemine: materials; goldmine: materials
- ×2 12:30–14:36 placed tower 170,141 at 876 s
- ×2 13:00–14:00 waiting: stonemine: no spot; goldmine: no spot
- 15:00 waiting: stonemine: materials; goldmine: materials; ironmine: materials; coalmine: materials; saw: materials
- 15:36 attack: 4 soldiers on guard 142 (empty), needed 4, 6 targets known
- 16:00 waiting: stonemine: no spot; goldmine: no spot; ironmine: no spot; coalmine: no spot
- 16:10 placed guard 180,99 at 970 s (land for: room)
- 16:42 placed stonemine 162,141 at 1002 s
- ×3 17:00–19:00 tools free: axe 1 pick -1 hammer 1 saw 1 shovel 1 rod 0 | ore known: coal 1 iron 1 gold 1 | unsearched 128 | military 8 houses 6 | rocks in reach 118
- 17:00 waiting: goldmine: no pick; fisher: materials; coalmine: no pick
- 17:58 attack: 12 soldiers on hq 1, needed 12, 4 targets known
- ×2 18:00–19:00 waiting: goldmine: no pick
- 19:56 placed house3 172,95 at 1196 s
- 20:00 waiting: goldmine: no spot


Script: 670 turns, 0.7 ms average, worst 13 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: claude-fable-5.2 (Gold) vs original game NPC: **won** at 21 min

| min | claude-fable-5.2 | original game NPC |
|---|---|---|
| 15 | 27/5/2619/15/49 | 30/5/2549/5/50 |
| 21 | 38/11/6224/30/56 | 0/0/0/0/0 |
| first | 5 6 7 9 13 - | 9 10 12 13 - - |

Soldiers every 5 min: 10 4 15 26 30 (original game NPC: 10 5 5 0 0).

First army orders (game min:sec): 1:30 sendIn 1 soldiers -> building 78; 3:46 sendIn 1 soldiers -> building 121; 7:12 armyTarget sword=5; 7:12 armyTarget spear=3; 7:18 armyTarget sword=4; 7:18 armyTarget spear=2; 7:42 armyTarget sword=5; 7:42 armyTarget spear=3; 7:42 armyTarget bow=1; 7:48 armyTarget sword=4; 7:48 armyTarget spear=2; 7:48 armyTarget bow=2.

#### Game log: claude-fable-5.2

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 30 | 8 | 16 | 13 | 0 | 0 | 0 | 0 | 0 | 15 | 2 | 19 | 0 | 0 | 0 | 0 | 0 | 19 | 59 | 2619 | 16008 |
| 21 | 53 | 145 | 157 | 21 | 11 | 0 | 19 | 29 | 13 | 38 | 5 | 19 | 6 | 8 | 0 | 0 | 0 | 24 | 57 | 6224 | 19234 |

At the end: buildings (built+sites) guard 7, tower 4+1, house 4, quarry 2+1, wood 3, forest 3, saw 2, fisher 2, coalmine 2, hq 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, house2 1, house3 1, stonemine 1.
People: carrier 29, worker 19, soldier 15, digger 3, builder 3, geologist 1, explorer 1; beds 110. Soldiers: sword 6, bow 5, spear 4.

Goods produced in the game: fish 156, log 145, coal 125, plank 117, stone 112, ironore 52, iron 52, sword 23, spear 5, bow 5, pick 3, shovel 3, axe 2, saw 2, hammer 2, rod 2.
Goods consumed in the game: fish 148, plank 118, log 117, stone 112, coal 99, ironore 52, iron 47, sword 23, pick 7, spear 5, bow 5, shovel 4, hammer 4, axe 3, saw 2, rod 2.
Goods captured in the game: stone 120, plank 105, grain 29, log 21, water 19, iron 14, flour 13, coal 12, bread 11, pig 8, gold 8, fish 7, goldore 6, ironore 5, axe 2, pick 1, hammer 1.

What the buildings did (share of their time after being built):
- hq (21 building-min): Idle 100%
- quarry (32 building-min): Cutting stone 57%, Bringing stone to the pile 24%, Stone pile full, waiting for carriers 16%, No stone in range inside your border 2%, Worker picking up a pickaxe 1%
- house (55 building-min): Idle 100%
- wood (49 building-min): Felling a tree 57%, Log pile full, waiting for carriers 26%, Bringing a log to the pile 15%, Worker picking up an axe 2%, Needs a worker with an axe 1%
- guard (63 building-min): Idle 92%, Waiting for a swordsman: train one at the barracks 7%, Soldiers on the way 0%
- saw (24 building-min): Sawing planks 61%, Output pile full, waiting for carriers 21%, Stacking outside 13%, Worker picking up a saw 4%, Fetching from the pile 2%
- fisher (20 building-min): Fishing 41%, Bringing a fish to the pile 33%, Fish pile full, waiting for carriers 19%, Worker picking up a fishing rod 7%, Idle 0%
- forest (39 building-min): Planting a sapling 79%, No free ground to plant in range inside your border 17%, Worker picking up a shovel 2%, Needs a worker with a shovel 2%, Idle 0%
- ironmine (18 building-min): Deposit thinning: mining iron ore 43%, Mining iron ore 27%, Needs meat or fish: mining stopped 9%, Bringing iron ore out 8%, Deposit worn out: finding little iron ore 7%
- coalmine (28 building-min): Mining coal 62%, Deposit thinning: mining coal 17%, Bringing coal out 12%, Worker picking up a pickaxe 2%, Coal pile full, waiting for carriers 2%
- smelter (16 building-min): Smelting iron 41%, Waiting for iron ore 28%, Output pile full, waiting for carriers 13%, Stacking outside 9%, Waiting for coal 5%
- smith (16 building-min): All tool targets met 54%, Waiting for coal 29%, Worker picking up a hammer 3%, Forging pickaxe 3%, Forging shovel 2%
- weaponsmith (14 building-min): Waiting for coal 49%, Forging sword 20%, Waiting for iron 11%, Stacking outside 6%, Forging spear 5%
- barracks (13 building-min): Waiting for weapons from the weaponsmith 68%, Weapons on the way 29%, Training soldiers 3%
- house2 (10 building-min): Idle 100%
- tower (21 building-min): Idle 84%, Waiting for a swordsman: train one at the barracks 13%, Soldiers on the way 2%, Waiting for a soldier 0%
- house3 (1 building-min): Idle 100%
- stonemine (2 building-min): Needs bread or fish: mining stopped 70%, Worker picking up a pickaxe 29%, Working 1%

Building sites, time per state (site-min): Waiting for a digger 12, Leveling the ground 12, Builders at work 8, Waiting for a builder 7, Waiting for materials 4.

Build order (placed at min:sec, finished at): quarry 0:00→0:26, house 0:02→0:45, wood 0:04→0:57, guard 0:06→1:29, saw 0:44→1:51, fisher 0:46→2:09, forest 0:58→2:26, wood 1:40→2:40, house 1:52→3:06, ironmine 2:10→3:31, guard 2:30→3:45, coalmine 3:56→4:29, smelter 3:58→4:57, smith 4:30→5:19, weaponsmith 5:22→6:35, barracks 6:30→8:26, house 7:16→8:03, guard 7:40→9:01, quarry 8:16→9:15, forest 8:30→9:33, coalmine 8:42→9:52, wood 10:00→10:46, house2 10:02→11:30, forest 10:08→11:46, tower 11:00→12:19, tower 13:42→14:56, saw 15:00→15:42, tower 15:22→16:52, house 15:24→17:12, tower 17:00→18:26, house3 17:30→20:24, stonemine 17:34→18:45, fisher 17:42→19:30, tower 19:02→never, quarry 20:22→never.

Demolished or burned: guard (burned) 9:57.

Orders given: armyTarget 140, sendUnit 59, fighters 46, place 35, sendIn 15, priority 8, archers 7, attack 6, profession 4, weaponKeep 3, march 1. None refused.

People changing jobs: new carrier 79, carrier -> soldier 33, carrier -> worker 19, new soldier 18, carrier -> explorer 1, carrier -> digger 1, carrier -> builder 1.

People's orders (3801 in all, 3724 done): worker rest forest 255, worker gather forest 252, worker mine coalmine 187, worker rest fisher 158, worker gather fisher 157, worker rest wood 148, worker gather wood 147, carrier haul log wood -> saw 129, worker rest coalmine 127, worker rest saw 119, worker toCraft saw 117, worker craft saw 117, worker rest quarry 113, worker gather quarry 112. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×33; failed: can't reach that spot ×9.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 10.

Fights and contact: attacked enemy buildings 8 times (first 8:22); took guard 9:56, guard 15:47, guard 16:40, guard 17:49, guard 19:08, hq 20:55; killed bow 3, sword 7; lost people sword 9, bow 3, spear 1; first saw player 2 at 7:00.

Your notes (116 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text; the last 30 of 37 kinds):
- ×2 0:44–15:00 placed saw 47,105 at 900 s
- ×2 0:46–17:42 placed fisher 79,108 at 1062 s
- ×3 0:58–10:08 placed forest 40,101 at 608 s
- ×17 1:00–20:00 tools free: axe 1 pick 1 hammer 1 saw 1 shovel 1 rod 1 | ore known: coal 1 iron 1 gold 1 | unsearched 210 | military 12 houses 6 | rocks in reach 28
- 2:00 waiting: sites at cap
- 2:10 placed ironmine 23,104 at 130 s
- ×2 3:56–8:42 placed coalmine 20,110 at 522 s
- 3:58 placed smelter 15,97 at 238 s
- 4:00 waiting: house: materials; smith: materials; forest: materials
- 4:30 placed smith 15,92 at 270 s
- 5:00 waiting: house: materials; weaponsmith: materials; tower: materials; quarry: materials; forest: materials; coalmine: materials
- 5:22 placed weaponsmith 9,97 at 322 s
- 6:00 waiting: house: materials; barracks: materials; tower: materials; quarry: materials; forest: materials; coalmine: materials
- 6:30 placed barracks 15,86 at 390 s
- 7:00 waiting: house: materials; tower: materials; quarry: materials; forest: materials; coalmine: materials
- ×2 7:00–8:00 army: outside 8 free 7 attacking 0 | targets 5/3/3 | enemy seen: soldiers 0 buildings 8 military 1 | next hq needs 12 | gold 0.6
- 8:00 waiting: quarry: materials; forest: materials; coalmine: materials
- ×5 8:22–18:56 attack: 7 soldiers on guard 139, needed 7, 3 targets known
- ×2 9:00–10:00 tools free: axe 0 pick -1 hammer 0 saw 0 shovel -1 rod 0 | ore known: coal 1 iron 1 gold 0 | unsearched 27 | military 3 houses 3 | rocks in reach 86
- ×5 9:00–19:00 army: outside 14 free 1 attacking 7 | targets 8/5/4 | enemy seen: soldiers 1 buildings 32 military 3 | next guard needs 0 | gold 0.6
- ×2 10:02–17:30 placed house3 45,138 at 1050 s
- ×2 11:00–13:42 placed tower 63,116 at 822 s
- 11:00 tools free: axe -1 pick 1 hammer 0 saw 0 shovel -1 rod 0 | ore known: coal 1 iron 1 gold 0 | unsearched 27 | military 3 houses 4 | rocks in reach 72
- ×2 15:00–16:00 waiting: ironmine: no spot; coalmine: no spot
- ×3 15:22–19:02 placed tower 105,125 at 1142 s (land for: room)
- 17:34 placed stonemine 70,143 at 1054 s
- 18:00 waiting: goldmine: materials; ironmine: materials; coalmine: materials
- ×2 19:00–20:00 waiting: goldmine: no spot; ironmine: no spot; coalmine: no spot
- 19:06 defence: 1 soldiers meet 1 enemy soldiers near our buildings
- 20:44 attack: 12 soldiers on hq 37, needed 12, 1 targets known


Script: 678 turns, 0.7 ms average, worst 15 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: claude-fable-5.2 (Blue) vs original game NPC: undecided

| min | claude-fable-5.2 | original game NPC |
|---|---|---|
| 15 | 21/5/3246/8/40 | 33/4/2211/4/51 |
| 30 | 39/10/5805/25/50 | 59/4/4275/6/91 |
| 45 | 50/14/7879/25/68 | 70/12/11048/47/94 |
| 60 | 53/16/8481/28/95 | 80/23/18254/60/85 |
| first | 14 15 15 16 7 - | 7 8 15 17 20 36 |

Soldiers every 5 min: 10 8 8 9 14 25 25 31 25 31 28 28 (original game NPC: 10 4 4 9 8 6 15 35 47 56 60 60).

First army orders (game min:sec): 1:46 sendIn 1 soldiers -> building 78; 3:54 sendIn 1 soldiers -> building 120; 6:14 attack 7 soldiers -> building 132; 7:28 sendIn 1 soldiers -> building 130; 7:28 sendIn 1 soldiers -> building 132; 7:48 sendIn 1 soldiers -> building 130; 8:08 sendIn 1 soldiers -> building 130; 8:28 sendIn 1 soldiers -> building 130; 10:12 attack 4 soldiers -> building 156; 11:20 sendIn 1 soldiers -> building 179; 11:40 sendIn 1 soldiers -> building 179; 12:00 sendIn 1 soldiers -> building 179.

#### Game log: claude-fable-5.2

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 17 | 2 | 10 | 16 | 0 | 0 | 0 | 0 | 0 | 11 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 17 | 19 | 3246 | 16567 |
| 30 | 30 | 31 | 27 | 18 | 0 | 0 | 0 | 0 | 0 | 20 | 7 | 18 | 14 | 8 | 1 | 1 | 0 | 5 | 69 | 5805 | 20937 |
| 45 | 32 | 22 | 27 | 24 | 0 | 0 | 0 | 0 | 0 | 55 | 1 | 4 | 14 | 8 | 0 | 0 | 0 | 7 | 86 | 7879 | 25523 |
| 60 | 38 | 21 | 19 | 24 | 0 | 0 | 0 | 0 | 0 | 48 | 0 | 6 | 14 | 8 | 0 | 0 | 0 | 55 | 98 | 8481 | 27923 |

At the end: buildings (built+sites) tower 10+1, guard 6, quarry 4, house 4, coalmine 4, wood 3, forest 3, ironmine 3, saw 2, fisher 2, stonemine 2, house3 2, hq 1, house2 1, smelter 1, smith 1, weaponsmith 1, barracks 1, goldmine 1, goldsmelter 1.
People: carrier 57, worker 28, digger 4, builder 4, soldier 2, geologist 1, explorer 1; beds 160. Soldiers: sword 2.

Goods produced in the game: fish 519, coal 262, log 249, plank 215, stone 201, ironore 106, iron 106, sword 62, goldore 22, pick 11, spear 10, gold 8, hammer 4, shovel 4, bow 3, axe 2, saw 2, rod 2.
Goods consumed in the game: fish 501, plank 218, log 215, coal 214, stone 200, ironore 106, iron 100, sword 62, pick 15, spear 10, goldore 8, hammer 6, shovel 5, axe 3, bow 3, saw 2, rod 2.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- quarry (157 building-min): Stone pile full, waiting for carriers 34%, No stone in range inside your border 30%, Cutting stone 22%, Bringing stone to the pile 12%, Needs a worker with a pickaxe 1%
- house (178 building-min): Idle 100%
- wood (157 building-min): Log pile full, waiting for carriers 61%, Felling a tree 30%, Bringing a log to the pile 8%, Worker picking up an axe 1%, Working 0%
- guard (248 building-min): Idle 97%, Waiting for a swordsman: train one at the barracks 3%, Soldiers on the way 0%, Waiting for a soldier 0%
- saw (98 building-min): Output pile full, waiting for carriers 65%, Sawing planks 28%, Stacking outside 6%, Worker picking up a saw 1%, Fetching from the pile 1%
- fisher (100 building-min): Fishing 44%, Bringing a fish to the pile 39%, Fish pile full, waiting for carriers 12%, No fish in range inside your border 4%, Worker picking up a fishing rod 0%
- forest (153 building-min): No free ground to plant in range inside your border 66%, Planting a sapling 33%, Worker picking up a shovel 1%, Working 0%
- house2 (55 building-min): Idle 100%
- tower (320 building-min): Idle 90%, Waiting for a swordsman: train one at the barracks 9%, Soldiers on the way 1%, Free soldiers are too far away: bring one onto your land or near this building 0%, Waiting for a soldier 0%
- coalmine (139 building-min): Coal pile full, waiting for carriers 27%, Deposit thinning: mining coal 24%, Deposit worn out: finding little coal 20%, Mining coal 14%, Bringing coal out 5%
- ironmine (115 building-min): Needs meat or fish: mining stopped 60%, Deposit worn out: finding little iron ore 15%, Deposit thinning: mining iron ore 11%, Mining iron ore 5%, Iron ore pile full, waiting for carriers 3%
- smelter (46 building-min): Waiting for iron ore 44%, Smelting iron 29%, Output pile full, waiting for carriers 19%, Stacking outside 6%, Fetching from the pile 1%
- smith (46 building-min): All tool targets met 88%, Forging pickaxe 3%, Waiting for iron 2%, Stacking outside 1%, Forging hammer 1%
- weaponsmith (45 building-min): Waiting for iron 37%, Waiting for coal 29%, Forging sword 17%, Waiting for coal and iron 7%, Stacking outside 4%
- barracks (44 building-min): Waiting for weapons from the weaponsmith 77%, Weapons on the way 22%, Training soldiers 1%
- stonemine (64 building-min): Needs bread or fish: mining stopped 90%, Stone pile full, waiting for carriers 4%, Worker picking up a pickaxe 3%, Mining stone 2%, Deposit thinning: mining stone 0%
- goldmine (38 building-min): Gold ore pile full, waiting for carriers 84%, Mining gold ore 7%, Deposit thinning: mining gold ore 4%, Worker picking up a pickaxe 2%, Bringing gold ore out 2%
- goldsmelter (38 building-min): Output pile full, waiting for carriers 92%, Smelting gold 3%, Waiting for gold ore 2%, Worker picking up a hammer 2%, Waiting for coal and gold ore 1%
- house3 (42 building-min): Idle 100%

Building sites, time per state (site-min): Waiting for a digger 21, Leveling the ground 17, Builders at work 13, Waiting for a builder 10, Waiting for materials 7, No way to the site for diggers 3, No way in for carriers 1.

Build order (placed at min:sec, finished at): quarry 0:00→0:30, house 0:02→0:49, wood 0:04→1:02, guard 0:06→1:46, saw 0:52→2:19, fisher 0:54→2:39, forest 1:02→2:55, wood 1:46→3:24, guard 2:30→3:53, forest 4:00→4:30, house2 4:04→5:18, tower 5:00→6:32, quarry 5:02→6:58, tower 9:36→10:44, coalmine 12:42→13:19, ironmine 13:02→14:26, smelter 13:06→13:52, smith 13:34→14:14, weaponsmith 14:08→15:00, barracks 14:46→15:36, coalmine 15:32→16:18, guard 15:54→16:45, ironmine 16:26→17:13, fisher 17:04→17:51, house 17:26→18:04, guard 17:34→18:37, wood 18:14→18:56, forest 18:28→19:14, guard 18:58→23:12, saw 19:18→19:51, house 19:46→20:46, stonemine 20:04→21:21, goldmine 20:42→21:53, goldsmelter 21:04→21:50, house 21:24→22:37, tower 24:16→25:41, tower 25:48→27:16, tower 27:40→28:34, house3 27:42→30:37, tower 28:44→31:29, … (57 in all).

Demolished or burned: guard (burned) 7:28, guard (burned) 17:04, guard (burned) 22:29, guard (burned) 26:39, guard (burned) 28:59.

Orders given: fighters 645, armyTarget 280, sendUnit 220, sendIn 59, place 57, archers 38, attack 11, priority 10, profession 7, weaponKeep 3, march 2. None refused.

People changing jobs: new carrier 160, carrier -> soldier 75, new soldier 62, carrier -> worker 28, carrier -> builder 2, carrier -> digger 2, carrier -> explorer 1.

People's orders (8352 in all, 8179 done): worker mine coalmine 522, worker rest fisher 520, worker gather fisher 519, worker rest forest 373, worker gather forest 370, carrier haul fish fisher -> coalmine 351, worker eat coalmine 336, worker rest coalmine 271, worker rest wood 252, worker gather wood 250, worker mine ironmine 233, carrier haul log wood -> saw 227, worker rest saw 217, worker toCraft saw 215. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×90; failed: can't reach that spot ×34; failed: killed ×9; failed: no way (digger (dig 0) own-land-split) ×3.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 36, digger (dig 0) own-land-split 3, carrier (haul 1) own-land-split 2.

Fights and contact: attacked enemy buildings 11 times (first 6:14); was attacked 5 times (first 53:42); took guard 7:27, guard 11:13, guard 22:26, guard 26:36, guard 27:44; lost tower 54:08, tower 54:45, tower 55:27, tower 56:07; killed sword 33, bow 6, spear 6; lost people sword 41, bow 6, spear 10; first saw player 1 at 7:00.

Your notes (276 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text; the last 30 of 50 kinds):
- 13:06 placed smelter 196,134 at 786 s
- 13:34 placed smith 201,134 at 814 s
- 14:00 waiting: weaponsmith: materials; coalmine: no pick; wood: no axe
- 14:08 placed weaponsmith 192,125 at 848 s
- 14:46 placed barracks 184,125 at 886 s
- 15:00 waiting: coalmine: materials; ironmine: materials; coalmine: materials; wood: materials; saw: materials
- 16:00 waiting: ironmine: materials; coalmine: materials; wood: materials; saw: materials
- 17:00 waiting: house: materials; fisher: materials; coalmine: materials; wood: materials; saw: materials
- 18:00 waiting: coalmine: materials; wood: materials; saw: materials
- 19:00 waiting: coalmine: materials; saw: materials
- 20:00 waiting: stonemine: materials; coalmine: materials
- ×2 20:04–33:40 placed stonemine 207,38 at 2020 s
- 20:42 placed goldmine 193,83 at 1242 s
- ×7 21:00–39:00 tools free: axe 1 pick -1 hammer 1 saw 1 shovel 1 rod 1 | ore known: coal 1 iron 1 gold 1 | unsearched 93 | military 14 houses 6 | rocks in reach 208
- 21:00 waiting: goldsmelter: materials; coalmine: no pick
- 21:04 placed goldsmelter 199,83 at 1264 s
- 22:00 waiting: coalmine: no pick
- ×3 23:00–35:00 waiting: coalmine: no spot
- ×7 24:16–35:32 placed tower 184,29 at 2132 s (land for: room)
- ×4 25:00–29:00 waiting: coalmine: no spot; coalmine: no spot
- 28:00 waiting: coalmine: materials; coalmine: materials
- ×2 28:56–59:16 defence: 1 soldiers meet 9 enemy soldiers near our buildings
- 30:00 waiting: coalmine: no spot; coalmine: no spot; ironmine: no spot
- ×2 31:00–32:00 waiting: stonemine: no spot; coalmine: no spot; coalmine: no spot; ironmine: no spot
- 31:28 attack: 12 soldiers on hq 1, needed 12, 5 targets known
- 33:00 waiting: stonemine: no spot; coalmine: no spot; coalmine: no spot
- 34:00 waiting: coalmine: no pick; coalmine: no pick
- ×20 34:00–59:02 army: outside 2 free 1 attacking 0 | targets 6/4/2 | enemy seen: soldiers 8 buildings 71 military 17 | next tower needs 8 | gold 0.7
- ×4 34:14–47:24 attack: 4 soldiers on tower 398 (empty), needed 4, 7 targets known
- 36:00 waiting: quarry: no pick


Script: 1950 turns, 0.7 ms average, worst 18 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: claude-fable-5.2 (Gold) vs original game NPC: undecided

| min | claude-fable-5.2 | original game NPC |
|---|---|---|
| 15 | 26/5/3028/10/50 | 24/6/2773/10/40 |
| 30 | 47/15/7286/27/89 | 25/0/2085/0/50 |
| 45 | 55/22/10946/27/89 | 25/0/2897/0/50 |
| 60 | 55/22/10946/27/89 | 25/0/3687/0/50 |
| first | 8 8 10 11 6 - | 7 9 - - - - |

Soldiers every 5 min: 10 10 10 10 27 27 27 27 27 27 27 27 (original game NPC: 10 10 10 10 1 0 0 0 0 0 0 0).

First army orders (game min:sec): 1:44 sendIn 1 soldiers -> building 79; 3:56 sendIn 1 soldiers -> building 122; 5:32 sendIn 1 soldiers -> building 127; 9:30 armyTarget sword=8; 9:30 armyTarget spear=5; 9:30 armyTarget bow=3; 9:42 armyTarget sword=6; 9:42 armyTarget spear=4; 9:48 armyTarget sword=7; 9:54 armyTarget sword=5; 9:54 armyTarget spear=3; 10:00 armyTarget sword=6.

#### Game log: claude-fable-5.2

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 22 | 15 | 14 | 4 | 0 | 0 | 0 | 0 | 0 | 8 | 9 | 20 | 0 | 0 | 0 | 0 | 0 | 21 | 39 | 3028 | 13846 |
| 30 | 35 | 30 | 25 | 27 | 8 | 0 | 6 | 0 | 6 | 6 | 20 | 14 | 14 | 8 | 0 | 0 | 0 | 52 | 89 | 7286 | 19949 |
| 45 | 40 | 25 | 35 | 32 | 8 | 0 | 6 | 0 | 6 | 6 | 30 | 14 | 14 | 8 | 0 | 0 | 0 | 53 | 119 | 10946 | 23769 |
| 60 | 40 | 25 | 35 | 32 | 8 | 0 | 6 | 0 | 6 | 6 | 30 | 14 | 14 | 8 | 0 | 0 | 0 | 53 | 119 | 10946 | 23806 |

At the end: buildings (built+sites) tower 12, guard 10, coalmine 4, quarry 3, house 3, wood 3, ironmine 3, saw 2, fisher 2, forest 2, stonemine 2, hq 1, house2 1, smelter 1, smith 1, weaponsmith 1, barracks 1, goldmine 1, goldsmelter 1, house3 1.
People: carrier 53, worker 26, digger 4, builder 4, soldier 1, geologist 1, explorer 1; beds 100. Soldiers: sword 1.

Goods produced in the game: fish 243, log 216, plank 180, stone 166, coal 114, ironore 87, iron 57, goldore 22, sword 14, pick 9, gold 8, hammer 4, spear 4, shovel 3, bow 3, axe 2, saw 2, rod 2.
Goods consumed in the game: fish 217, plank 188, log 180, stone 168, coal 108, ironore 57, iron 43, pick 14, sword 14, goldore 8, hammer 6, shovel 4, spear 4, axe 3, bow 3, saw 2, rod 2.
Goods captured in the game: stone 19, plank 9, bread 8, water 6, flour 6.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- quarry (139 building-min): Stone pile full, waiting for carriers 36%, No stone in range inside your border 34%, Cutting stone 20%, Bringing stone to the pile 9%, Worker picking up a pickaxe 1%
- house (146 building-min): Idle 100%
- wood (163 building-min): Log pile full, waiting for carriers 70%, Felling a tree 24%, Bringing a log to the pile 5%, Worker picking up an axe 0%, Working 0%
- guard (436 building-min): Idle 99%, Waiting for a swordsman: train one at the barracks 1%, Soldiers on the way 0%, Waiting for a soldier 0%
- saw (101 building-min): Output pile full, waiting for carriers 71%, Sawing planks 22%, Stacking outside 5%, Worker picking up a saw 1%, Fetching from the pile 1%
- fisher (102 building-min): Fish pile full, waiting for carriers 61%, Fishing 19%, Bringing a fish to the pile 19%, Worker picking up a fishing rod 1%, Idle 0%
- forest (111 building-min): No free ground to plant in range inside your border 63%, Planting a sapling 37%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- ironmine (128 building-min): Iron ore pile full, waiting for carriers 68%, Needs meat or fish: mining stopped 10%, Deposit worn out: finding little iron ore 7%, Deposit thinning: mining iron ore 6%, Mining iron ore 6%
- house2 (55 building-min): Idle 100%
- tower (354 building-min): Waiting for a swordsman: train one at the barracks 74%, Idle 26%, Soldiers on the way 0%, Waiting for a soldier 0%
- coalmine (178 building-min): Needs bread or fish: mining stopped 82%, Deposit thinning: mining coal 7%, Mining coal 7%, Bringing coal out 2%, Worker picking up a pickaxe 1%
- smelter (53 building-min): Waiting for coal 66%, Output pile full, waiting for carriers 16%, Smelting iron 14%, Stacking outside 3%, Worker picking up a hammer 1%
- smith (52 building-min): Waiting for coal 71%, All tool targets met 21%, Forging pickaxe 2%, Worker picking up a hammer 1%, Stacking outside 1%
- weaponsmith (51 building-min): Waiting for coal 92%, Forging sword 4%, Worker picking up a hammer 1%, Stacking outside 1%, Forging spear 1%
- barracks (49 building-min): Waiting for weapons from the weaponsmith 97%, Weapons on the way 2%, Training soldiers 1%, Soldier targets met 0%, Idle 0%
- goldmine (46 building-min): Gold ore pile full, waiting for carriers 81%, Deposit thinning: mining gold ore 6%, Mining gold ore 5%, Deposit worn out: finding little gold ore 4%, Bringing gold ore out 1%
- goldsmelter (45 building-min): Output pile full, waiting for carriers 92%, Waiting for coal 5%, Smelting gold 2%, Worker picking up a hammer 0%, Stacking outside 0%
- house3 (36 building-min): Idle 100%
- stonemine (69 building-min): Needs bread or fish: mining stopped 98%, Worker picking up a pickaxe 1%, Needs a worker with a pickaxe 1%, Working 0%, Idle 0%

Building sites, time per state (site-min): Waiting for a digger 21, Leveling the ground 15, Waiting for a builder 12, Builders at work 11, Waiting for materials 6, No way in for carriers 6, No way to the site for diggers 2.

Build order (placed at min:sec, finished at): quarry 0:00→0:29, house 0:02→0:52, wood 0:04→1:06, guard 0:06→1:44, saw 0:48→2:09, fisher 0:52→2:25, forest 1:06→2:42, wood 1:44→2:59, ironmine 2:10→3:36, guard 2:30→3:54, house2 3:38→4:56, tower 4:00→5:32, forest 4:36→6:00, coalmine 5:34→6:30, smelter 6:18→7:04, smith 6:50→7:40, weaponsmith 8:12→9:21, barracks 9:24→10:34, guard 10:24→11:39, quarry 10:56→12:00, coalmine 11:12→12:17, wood 11:40→12:41, guard 12:00→13:15, goldmine 12:08→14:11, house 12:48→14:35, goldsmelter 13:20→15:07, guard 13:44→15:20, fisher 14:12→15:49, ironmine 15:00→16:10, saw 15:02→16:38, tower 15:46→22:45, coalmine 16:32→17:48, house 16:42→18:19, house3 21:28→24:21, stonemine 22:56→25:04, tower 22:58→25:32, coalmine 25:00→25:49, stonemine 25:06→26:02, tower 25:50→26:57, tower 27:24→28:29, … (49 in all).

Demolished or burned: guard (burned) 23:24.

Orders given: fighters 713, armyTarget 386, sendUnit 230, sendIn 224, archers 203, place 49, priority 9, profession 7, attack 7, weaponKeep 3, march 1. None refused.

People changing jobs: new soldier 215, new carrier 100, carrier -> worker 26, carrier -> soldier 21, carrier -> builder 2, carrier -> digger 2, carrier -> explorer 1.

People's orders (5588 in all, 5296 done): worker rest forest 310, worker gather forest 308, worker rest fisher 245, worker gather fisher 243, worker rest wood 219, worker gather wood 216, soldier garrison tower 209, explorer explore 201, carrier haul log wood -> saw 192, worker mine coalmine 192, worker rest saw 182, worker toCraft saw 180, worker craft saw 180, worker rest quarry 169. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×208; failed: can't reach that spot ×19; failed: no way (digger (dig 0) own-land-split) ×4.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 20, carrier (haul 1) own-land-split 8, digger (dig 0) own-land-split 4.

Fights and contact: attacked enemy buildings 6 times (first 20:48); took guard 21:46, guard 22:40, guard 23:24, guard 24:19, guard 24:24, guard 25:05; killed bow 3, sword 7; lost people sword 2, bow 2; first saw player 2 at 7:00.

Your notes (291 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text; the last 30 of 42 kinds):
- 3:00 waiting: coalmine: no spot
- ×2 3:38–21:28 placed house3 11,131 at 1288 s
- ×12 4:00–40:34 placed tower 60,195 at 2434 s (land for: room)
- 5:00 waiting: coalmine: materials; quarry: materials
- ×4 5:34–25:00 placed coalmine 100,145 at 1500 s
- 6:00 waiting: smelter: materials; quarry: materials
- 6:18 placed smelter 72,123 at 378 s
- 6:50 placed smith 77,122 at 410 s
- 7:00 waiting: weaponsmith: materials; quarry: materials
- ×17 7:00–25:00 army: outside 14 free 2 attacking 10 | targets 11/7/6 | enemy seen: soldiers 1 buildings 24 military 2 | next guard needs 0 | gold 0.7
- 8:00 waiting: weaponsmith: materials; tower: materials; quarry: materials; coalmine: materials
- 8:12 placed weaponsmith 76,131 at 492 s
- 9:00 waiting: barracks: materials; tower: materials; quarry: materials; coalmine: materials
- 9:24 placed barracks 76,136 at 564 s
- 10:00 waiting: tower: materials; quarry: materials; coalmine: materials; wood: materials
- 11:00 waiting: coalmine: materials; wood: materials
- 12:00 tools free: axe -1 pick 0 hammer 1 saw 0 shovel 0 rod 0 | ore known: coal 1 iron 1 gold 1 | unsearched 43 | military 4 houses 2 | rocks in reach 88
- 12:08 placed goldmine 86,136 at 728 s
- 13:00 tools free: axe 0 pick -1 hammer 1 saw 0 shovel 0 rod 0 | ore known: coal 1 iron 1 gold 1 | unsearched 43 | military 5 houses 3 | rocks in reach 84
- 13:00 waiting: forest: materials; goldsmelter: materials; fisher: materials
- 13:20 placed goldsmelter 81,136 at 800 s
- 13:44 placed guard 86,147 at 824 s (land for: room)
- 14:00 waiting: forest: materials; fisher: materials
- ×44 15:00–59:00 waiting: forest: no spot
- 16:00 waiting: forest: no spot; coalmine: materials
- ×5 20:48–24:30 attack: 8 soldiers on guard 94, needed 7, 2 targets known
- 21:54 defence: 3 soldiers meet 2 enemy soldiers near our buildings
- ×2 22:56–25:06 placed stonemine 108,139 at 1506 s
- 24:20 attack: 6 soldiers on guard 134 (empty), needed 4, 3 targets known
- ×13 26:00–40:00 army: outside 2 free 1 attacking 0 | targets 6/4/2 | enemy seen: soldiers 0 buildings 25 military 1 | next hq needs 12 | gold 0.7


Script: 1836 turns, 0.8 ms average, worst 11 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: claude-fable-5.2 (Blue) vs original game NPC: **won** at 36 min

| min | claude-fable-5.2 | original game NPC |
|---|---|---|
| 15 | 25/4/2321/6/45 | 23/2/1984/3/40 |
| 30 | 35/6/2428/6/100 | 44/2/2742/3/60 |
| 36 | 38/7/4469/26/80 | 0/0/0/0/0 |
| first | 5 6 8 10 21 - | 13 14 15 20 - - |

Soldiers every 5 min: 10 6 6 6 6 6 26 26 (original game NPC: 10 3 3 3 3 3 1 0).

First army orders (game min:sec): 1:26 sendIn 1 soldiers -> building 78; 3:20 sendIn 1 soldiers -> building 111; 6:54 attack 7 soldiers -> building 88; 8:24 armyTarget sword=6; 8:24 armyTarget spear=4; 8:24 armyTarget bow=3; 8:30 armyTarget sword=7; 10:06 sendIn 1 soldiers -> building 163; 10:06 armyTarget sword=5; 10:06 armyTarget spear=3; 10:12 armyTarget sword=7; 10:12 armyTarget spear=4.

#### Game log: claude-fable-5.2

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 17 | 13 | 9 | 9 | 0 | 0 | 0 | 0 | 0 | 0 | 14 | 20 | 0 | 0 | 0 | 0 | 0 | 20 | 37 | 2321 | 13337 |
| 30 | 38 | 18 | 17 | 19 | 0 | 0 | 0 | 0 | 0 | 16 | 10 | 19 | 9 | 8 | 0 | 0 | 0 | 60 | 78 | 2428 | 14170 |
| 36 | 72 | 85 | 81 | 22 | 0 | 0 | 3 | 22 | 0 | 45 | 0 | 6 | 14 | 8 | 0 | 0 | 0 | 45 | 99 | 4469 | 16439 |

At the end: buildings (built+sites) guard 5, house 4, coalmine 4, wood 3, ironmine 3, tower 2+1, quarry 2, saw 2, fisher 2, forest 2, hq 1, smelter 1, smith 1, weaponsmith 1, barracks 1, stonemine 1, goldmine 1, goldsmelter 1, house3 1.
People: carrier 46, worker 24, soldier 17, digger 4, builder 4, geologist 1, explorer 1; beds 90. Soldiers: sword 10, spear 4, bow 3.

Goods produced in the game: fish 238, log 160, coal 141, plank 124, stone 112, ironore 47, iron 47, goldore 22, sword 15, pick 8, gold 8, spear 5, hammer 4, shovel 3, axe 2, saw 2, rod 2.
Goods consumed in the game: fish 229, plank 127, log 124, stone 109, coal 96, ironore 47, iron 41, sword 15, pick 12, goldore 8, hammer 6, spear 5, shovel 4, axe 3, saw 2, rod 2.
Goods lost in the game: fish 8, plank 4, stone 3.
Goods captured in the game: plank 50, stone 45, log 32, grain 22, fish 15, pig 6, water 3, pick 2, hammer 1.

What the buildings did (share of their time after being built):
- hq (36 building-min): Idle 100%
- quarry (60 building-min): Stone pile full, waiting for carriers 49%, Cutting stone 24%, Needs a worker with a pickaxe 15%, Bringing stone to the pile 11%, Worker picking up a pickaxe 0%
- house (117 building-min): Idle 100%
- wood (93 building-min): Log pile full, waiting for carriers 40%, Felling a tree 36%, Bringing a log to the pile 12%, Needs a worker with an axe 12%, Worker picking up an axe 1%
- guard (118 building-min): Idle 65%, Waiting for a swordsman: train one at the barracks 35%, Soldiers on the way 0%, Waiting for a soldier 0%
- saw (54 building-min): Output pile full, waiting for carriers 49%, Sawing planks 29%, Needs a worker with a saw 15%, Stacking outside 6%, Worker picking up a saw 1%
- fisher (49 building-min): Fishing 33%, Bringing a fish to the pile 29%, No fish in range inside your border 21%, Needs a worker with a fishing rod 10%, Fish pile full, waiting for carriers 6%
- forest (58 building-min): Planting a sapling 55%, No free ground to plant in range inside your border 25%, Needs a worker with a shovel 19%, Worker picking up a shovel 1%, Working 0%
- ironmine (46 building-min): Needs meat or fish: mining stopped 41%, Iron ore pile full, waiting for carriers 35%, Mining iron ore 10%, Deposit thinning: mining iron ore 9%, Bringing iron ore out 3%
- coalmine (59 building-min): Deposit worn out: finding little coal 44%, Mining coal 23%, Needs bread or fish: mining stopped 11%, Needs a worker with a pickaxe 7%, Bringing coal out 6%
- smelter (31 building-min): Output pile full, waiting for carriers 43%, Waiting for coal 20%, Smelting iron 19%, Waiting for iron ore 13%, Stacking outside 4%
- smith (30 building-min): Waiting for coal 71%, All tool targets met 17%, Forging pickaxe 3%, Stacking outside 2%, Forging hammer 2%
- weaponsmith (29 building-min): Waiting for coal 82%, Waiting for iron 7%, Forging sword 7%, Forging spear 2%, Stacking outside 2%
- barracks (27 building-min): Waiting for weapons from the weaponsmith 96%, Weapons on the way 4%, Training soldiers 1%, Idle 0%
- stonemine (25 building-min): Needs bread or fish: mining stopped 64%, Stone pile full, waiting for carriers 16%, Mining stone 15%, Worker picking up a pickaxe 2%, Bringing stone out 2%
- tower (28 building-min): Waiting for a swordsman: train one at the barracks 69%, Idle 31%, Waiting for a soldier 0%, Soldiers on the way 0%
- goldmine (10 building-min): Gold ore pile full, waiting for carriers 55%, Mining gold ore 33%, Bringing gold ore out 6%, Worker picking up a pickaxe 5%, Needs fish or bread or meat: mining stopped 1%
- goldsmelter (9 building-min): Output pile full, waiting for carriers 78%, Smelting gold 11%, Worker picking up a hammer 5%, Stacking outside 2%, Waiting for coal 2%
- house3 (8 building-min): Idle 100%

Building sites, time per state (site-min): Waiting for a digger 12, Waiting for a builder 10, Builders at work 10, Leveling the ground 8, Waiting for materials 7, No way to the site for builders 6, No way in for carriers 0.

Build order (placed at min:sec, finished at): quarry 0:00→0:34, house 0:02→0:51, wood 0:04→1:05, guard 0:06→1:25, saw 0:58→1:50, fisher 1:00→2:06, forest 1:06→2:21, wood 1:40→2:37, ironmine 1:50→3:02, guard 2:30→3:20, house 2:44→3:46, coalmine 3:44→4:29, smelter 3:46→4:57, smith 4:44→5:37, weaponsmith 6:18→7:09, house 7:10→7:58, barracks 8:18→9:10, guard 9:02→10:04, quarry 9:48→11:00, stonemine 10:00→10:48, forest 10:28→11:19, wood 10:32→11:40, guard 10:50→12:18, tower 13:14→20:56, house 13:16→14:50, saw 15:00→15:46, coalmine 20:04→21:38, fisher 20:06→21:13, tower 21:42→23:04, goldmine 25:04→26:22, goldsmelter 25:06→26:49, house3 25:08→27:55, ironmine 26:20→28:21, coalmine 26:22→28:39, coalmine 29:26→30:05, ironmine 30:00→30:42, tower 31:32→never.

Demolished or burned: guard (burned) 8:09.

Orders given: armyTarget 156, sendUnit 125, sendIn 108, archers 102, fighters 58, place 37, profession 8, priority 6, attack 5, weaponKeep 3. None refused.

People changing jobs: new soldier 105, new carrier 90, carrier -> worker 24, carrier -> soldier 20, carrier -> digger 2, carrier -> builder 2, carrier -> explorer 1.

People's orders (4526 in all, 4375 done): worker mine coalmine 277, worker rest forest 250, worker gather forest 248, worker rest fisher 240, worker gather fisher 239, carrier haul fish fisher -> coalmine 182, worker eat coalmine 171, worker rest wood 163, worker gather wood 160, worker rest coalmine 150, carrier haul log wood -> saw 136, worker rest saw 126, worker toCraft saw 124, worker craft saw 124. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×114; failed: can't reach that spot ×9; failed: no way (builder (build 0) own-land-split) ×2.

Failed path searches (who (task) why: times): carrier (haul 1) own-land-split 14, explorer (explore 0) cut-off 9, builder (build 0) own-land-split 2.

Fights and contact: attacked enemy buildings 5 times (first 6:54); took guard 8:09, hq 34:03, guard 34:58; killed bow 3, sword 6; lost people sword 4; first saw player 1 at 7:00.

Your notes (180 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text; the last 30 of 48 kinds):
- 6:18 placed weaponsmith 190,127 at 378 s
- ×3 6:54–35:42 attack: 16 soldiers on guard 141, needed 7, 1 targets known
- ×2 7:00–8:00 waiting: barracks: materials; quarry: materials; forest: materials; coalmine: materials
- ×2 7:00–8:00 army: outside 5 free 0 attacking 4 | targets 4/2/2 | enemy seen: soldiers 2 buildings 8 military 2 | next guard needs 0 | gold 0.6
- 8:18 placed barracks 188,121 at 498 s
- 9:00 waiting: tower: materials; quarry: materials; forest: materials; coalmine: materials; goldmine: materials
- ×14 9:00–34:00 army: outside 17 free 1 attacking 15 | targets 13/8/6 | enemy seen: soldiers 1 buildings 47 military 3 | next hq needs 0 | gold 0.7
- 10:00 placed stonemine 174,139 at 600 s
- 11:00 tools free: axe -1 pick 0 hammer 0 saw 0 shovel -1 rod 0 | ore known: coal 1 iron 1 gold 1 | unsearched 89 | military 4 houses 3 | rocks in reach 186
- 11:00 waiting: forest: no shovel; coalmine: materials; goldmine: materials
- ×4 12:00–15:00 tools free: axe -1 pick -1 hammer 0 saw 0 shovel -1 rod 0 | ore known: coal 1 iron 1 gold 1 | unsearched 125 | military 5 houses 4 | rocks in reach 168
- ×3 12:00–14:00 waiting: forest: no shovel; coalmine: no pick; goldmine: no pick
- ×2 13:14–21:42 placed tower 153,147 at 1302 s
- ×6 15:00–20:00 waiting: forest: no shovel; coalmine: no pick; goldmine: no pick; ironmine: no pick; coalmine: no pick
- ×5 16:00–20:00 tools free: axe -1 pick -1 hammer 0 saw -1 shovel -1 rod 0 | ore known: coal 1 iron 1 gold 1 | unsearched 70 | military 5 houses 4 | rocks in reach 160
- ×2 21:00–22:00 tools free: axe -1 pick -1 hammer 0 saw -1 shovel -1 rod -1 | ore known: coal 1 iron 1 gold 1 | unsearched 81 | military 6 houses 4 | rocks in reach 152
- ×2 21:00–22:00 waiting: forest: no shovel; goldmine: no pick; ironmine: no pick; coalmine: no pick
- 23:00 tools free: axe 0 pick -1 hammer 0 saw -1 shovel 0 rod -1 | ore known: coal 1 iron 1 gold 1 | unsearched 81 | military 6 houses 4 | rocks in reach 152
- ×3 23:00–25:00 waiting: forest: no spot; goldmine: no pick; ironmine: no pick; coalmine: no pick
- ×2 24:00–25:00 tools free: axe 0 pick -1 hammer 0 saw 0 shovel 0 rod -1 | ore known: coal 1 iron 1 gold 1 | unsearched 81 | military 6 houses 4 | rocks in reach 152
- 25:04 placed goldmine 195,95 at 1504 s
- 25:06 placed goldsmelter 189,98 at 1506 s
- 25:08 placed house3 168,119 at 1508 s
- 26:00 tools free: axe 0 pick -1 hammer -1 saw 0 shovel 0 rod -1 | ore known: coal 1 iron 1 gold 1 | unsearched 81 | military 6 houses 5 | rocks in reach 142
- 26:00 waiting: forest: no spot; ironmine: no pick; coalmine: no pick
- ×3 27:00–29:00 tools free: axe 1 pick -1 hammer 0 saw 1 shovel 0 rod 0 | ore known: coal 1 iron 1 gold 1 | unsearched 50 | military 6 houses 5 | rocks in reach 132
- ×3 27:00–29:00 waiting: forest: no spot; coalmine: no pick
- ×6 30:00–35:00 waiting: forest: no spot
- 31:32 placed tower 138,152 at 1892 s (land for: room)
- 33:08 attack: 11 soldiers on hq 1, needed 11, 3 targets known


Script: 1108 turns, 0.8 ms average, worst 15 ms, 0 over 0.3 s, 0 errors. Orders refused: none.
