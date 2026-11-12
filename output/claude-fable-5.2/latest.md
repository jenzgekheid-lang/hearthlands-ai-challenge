# Tournament: claude-fable-5.2

Game version 204. Written for: claude-fable-5.2 196.

- claude-fable-5.2: hearthlands-ai-challenge, commit 80cd467

Maps 20261030, 777, 4242, 31, each twice (sides swapped), up to 60 game minutes (1x). 57 s.

Each game ends with the script's own game log: what it may know (its own side, and what happened to it or what it saw). Times are game min:sec.

| Opponent | Won | Lost | Undecided |
|---|---|---|---|
| original game NPC | 3 | 0 | 5 |

## Games

Each row: buildings / military / land tiles / soldiers / people at the minute shown. First: game minute of the first smelter, smith, weaponsmith, barracks, tower, castle (- = never).

### Map 31: claude-fable-5.2 (Gold) vs original game NPC: **won** at 25 min

| min | claude-fable-5.2 | original game NPC |
|---|---|---|
| 15 | 31/5/2723/10/44 | 29/5/2812/6/50 |
| 26 | 40/11/5906/22/63 | 0/0/0/0/0 |
| first | 4 6 7 9 19 - | 8 8 19 19 - - |

Soldiers every 5 min: 10 5 10 20 24 22 (original game NPC: 10 6 6 2 2 0).

First army orders (game min:sec): 1:32 sendIn 1 soldiers -> building 79; 7:18 armyTarget sword=9; 7:18 armyTarget spear=6; 7:18 armyTarget bow=4; 8:12 attack 8 soldiers -> building 140; 9:06 armyTarget sword=8; 9:06 armyTarget spear=5; 9:06 armyTarget bow=3; 9:12 armyTarget sword=7; 9:16 sendIn 1 soldiers -> building 161; 9:18 armyTarget sword=6; 9:18 armyTarget spear=4.

#### Game log: claude-fable-5.2

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 26 | 13 | 10 | 18 | 0 | 0 | 10 | 4 | 8 | 14 | 1 | 10 | 0 | 0 | 0 | 0 | 1 | 0 | 46 | 2723 | 13974 |
| 26 | 81 | 171 | 155 | 46 | 26 | 4 | 27 | 25 | 18 | 29 | 15 | 36 | 0 | 0 | 0 | 0 | 0 | 31 | 98 | 5906 | 17301 |

At the end: buildings (built+sites) guard 10, house 4, quarry 2+1, wood 3, forest 3, saw 2, fisher 2, house2 2, tower 1+1, hq 1, ironmine 1, coalmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, mill 1, bakery 1.
People: carrier 33, worker 21, soldier 10, builder 4, digger 3, geologist 1, explorer 1; beds 80. Soldiers: sword 7, spear 3.

Goods produced in the game: log 144, fish 119, coal 109, plank 108, stone 97, ironore 57, grain 57, iron 56, water 41, flour 41, bread 27, sword 19, spear 5, hammer 3, shovel 3, bow 3, axe 2, saw 2, rod 2, pick 1.
Goods consumed in the game: stone 114, plank 109, log 108, fish 103, coal 96, ironore 56, grain 41, iron 40, water 27, flour 27, sword 19, bread 15, pick 5, hammer 5, spear 5, shovel 4, axe 3, bow 3, saw 2, rod 2, scythe 1.
Goods lost in the game: log 8, plank 3, stone 3.
Goods captured in the game: stone 125, plank 123, log 49, fish 24, iron 20, coal 16, ironore 14, bread 14, water 13, grain 9, flour 4, meat 4, axe 1, saw 1, pick 1, shovel 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (26 building-min): Idle 100%
- quarry (42 building-min): Cutting stone 39%, No stone in range inside your border 39%, Bringing stone to the pile 20%, Worker picking up a pickaxe 1%, Stone pile full, waiting for carriers 0%
- house (80 building-min): Idle 100%
- wood (64 building-min): Felling a tree 43%, Log pile full, waiting for carriers 43%, Bringing a log to the pile 12%, Worker picking up an axe 1%, Working 0%
- guard (120 building-min): Idle 98%, Waiting for a swordsman: train one at the barracks 1%, Soldiers on the way 1%
- saw (33 building-min): Output pile full, waiting for carriers 47%, Sawing planks 41%, Stacking outside 9%, Worker picking up a saw 2%, Fetching from the pile 1%
- fisher (39 building-min): Fish pile full, waiting for carriers 43%, Fishing 21%, Bringing a fish to the pile 18%, No fish in range inside your border 17%, Worker picking up a fishing rod 1%
- forest (55 building-min): Planting a sapling 64%, No free ground to plant in range inside your border 35%, Worker picking up a shovel 1%, Working 0%
- ironmine (23 building-min): Deposit thinning: mining iron ore 38%, Needs meat or fish: mining stopped 20%, Mining iron ore 16%, Deposit worn out: finding little iron ore 14%, Bringing iron ore out 7%
- coalmine (23 building-min): Mining coal 66%, Bringing coal out 13%, Deposit thinning: mining coal 12%, Needs bread or fish: mining stopped 5%, Came back empty-handed 1%
- smelter (22 building-min): Waiting for iron ore 59%, Smelting iron 32%, Stacking outside 7%, Worker picking up a hammer 1%, Fetching from the pile 1%
- smith (21 building-min): All tool targets met 77%, Waiting for coal 10%, Waiting for iron 2%, Forging shovel 2%, Forging hammer 2%
- weaponsmith (20 building-min): Waiting for coal 63%, Forging sword 12%, Waiting for iron 11%, Stacking outside 4%, Forging spear 3%
- barracks (18 building-min): Waiting for weapons from the weaponsmith 77%, Weapons on the way 21%, Training soldiers 1%, Soldier targets met 1%
- farm (14 building-min): Sowing a field 34%, Grain pile full, waiting for carriers 29%, Harvesting grain 23%, Bringing grain to the pile 12%, Worker picking up a scythe 2%
- waterhut (13 building-min): Water pile full, waiting for carriers 80%, Fetching water 12%, Bringing water to the pile 8%, Worker on the way 0%, Working 0%
- mill (12 building-min): Output pile full, waiting for carriers 66%, Grinding flour 19%, Stacking outside 9%, Waiting for grain 6%, Fetching from the pile 1%
- bakery (11 building-min): Baking bread 54%, Output pile full, waiting for carriers 34%, Stacking outside 7%, Waiting for flour 2%, Waiting for flour and water 2%
- house2 (17 building-min): Idle 100%
- tower (8 building-min): Idle 95%, Waiting for a swordsman: train one at the barracks 5%, Soldiers on the way 1%, Waiting for a soldier 0%

Building sites, time per state (site-min): Waiting for materials 20, Waiting for a digger 12, Leveling the ground 9, Builders at work 8, Waiting for a builder 6, Paused 3.

Build order (placed at min:sec, finished at): quarry 0:00→0:23, house 0:02→0:42, wood 0:04→0:56, guard 0:06→1:30, saw 0:42→1:54, fisher 0:44→2:10, forest 0:56→2:25, wood 1:40→2:41, ironmine 1:56→3:06, coalmine 2:14→3:21, smelter 3:00→3:59, house 3:22→4:20, smith 3:50→5:02, weaponsmith 5:20→6:23, house 6:24→6:59, barracks 7:14→8:08, guard 7:56→8:54, quarry 8:38→9:38, forest 8:52→9:55, fisher 9:42→10:38, wood 10:00→10:50, forest 10:02→10:59, guard 10:06→11:24, farm 10:36→12:07, house 11:06→12:22, waterhut 11:20→13:12, guard 11:48→13:51, mill 12:10→14:00, bakery 13:12→14:47, house2 14:00→15:35, guard 14:10→16:36, saw 15:02→16:51, tower 16:58→18:07, house2 17:00→19:01, quarry 18:04→never, tower 18:34→never.

Orders given: armyTarget 134, sendUnit 69, place 36, fighters 18, priority 7, sendIn 7, attack 7, profession 6, weaponKeep 3, pause 2. None refused.

People changing jobs: new carrier 80, carrier -> soldier 27, carrier -> worker 21, new soldier 9, carrier -> builder 2, carrier -> explorer 1, carrier -> digger 1.

People's orders (4267 in all, 4214 done): worker rest forest 266, worker gather forest 263, worker rest wood 147, worker gather wood 144, worker mine coalmine 144, worker rest fisher 121, carrier haul log wood -> saw 120, worker gather fisher 119, worker rest farm 118, worker gather farm 117, worker rest coalmine 113, worker rest saw 110, worker toCraft saw 108, worker craft saw 108. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×21; failed: can't reach that spot ×7.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 7.

Fights and contact: attacked enemy buildings 8 times (first 8:12); took guard 9:15, guard 16:50, guard 17:22, guard 19:20, hq 24:08, guard 25:25; killed bow 3, sword 7; lost people sword 7, bow 6, spear 2; first saw player 2 at 9:00.

Your notes (142 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text; the last 30 of 42 kinds):
- 2:00 waiting: sites at cap
- 2:14 placed coalmine 61,113 at 134 s
- 3:00 placed smelter 52,116 at 180 s
- 3:50 placed smith 53,124 at 230 s
- 4:00 waiting: weaponsmith: materials; tower: materials; forest: materials; coalmine: materials
- 5:00 waiting: weaponsmith: materials; tower: materials; quarry: materials; forest: materials; coalmine: materials
- 5:20 placed weaponsmith 47,108 at 320 s
- ×2 6:00–7:00 waiting: barracks: materials; tower: materials; quarry: materials; forest: materials; coalmine: materials
- 7:14 placed barracks 42,105 at 434 s
- 8:00 waiting: quarry: materials; forest: materials; coalmine: materials
- ×6 8:12–25:26 attack: 9 soldiers on guard 128, needed 7, 1 targets known
- 9:00 waiting: coalmine: materials
- ×8 9:00–19:00 army: outside 10 free 1 attacking 7 | targets 8/5/4 | enemy seen: soldiers 0 buildings 37 military 4 | next guard needs 0 | gold 0.6
- ×3 10:00–12:00 tools free: axe 1 pick 1 hammer 1 saw 1 shovel 1 rod 1 | ore known: coal 1 iron 1 gold 0 | unsearched 9 | military 5 houses 4 | rocks in reach 66 | mines hungry
- 10:00 waiting: coalmine: no spot
- ×3 10:06–14:10 placed guard 90,80 at 850 s (land for: room)
- 10:36 placed farm 46,128 at 636 s
- 11:00 waiting: house: materials; coalmine: materials; waterhut: materials; mill: materials
- 11:20 placed waterhut 62,99 at 680 s
- 12:00 waiting: coalmine: materials; mill: materials
- 12:10 placed mill 25,117 at 730 s
- 13:00 waiting: coalmine: no spot; bakery: materials
- 13:12 placed bakery 45,97 at 792 s
- ×2 14:00–17:00 placed house2 70,84 at 1020 s
- 15:00 waiting: coalmine: no spot; ironmine: no spot; coalmine: no spot; saw: materials
- ×6 16:00–25:00 waiting: coalmine: no spot; ironmine: no spot; coalmine: no spot
- ×2 16:58–18:34 placed tower 109,78 at 1114 s (land for: room)
- ×5 20:00–24:00 army: outside 12 free 11 attacking 0 | targets 10/7/5 | enemy seen: soldiers 0 buildings 42 military 3 | next hq needs 12 | gold 0.6
- ×3 22:00–24:00 waiting: coalmine: materials; ironmine: materials; coalmine: materials
- 24:02 attack: 12 soldiers on hq 37, needed 12, 3 targets known


Script: 835 turns, 0.6 ms average, worst 10 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 31: claude-fable-5.2 (Blue) vs original game NPC: undecided

| min | claude-fable-5.2 | original game NPC |
|---|---|---|
| 15 | 24/4/1967/9/35 | 30/5/2798/6/50 |
| 30 | 43/11/4860/15/99 | 48/3/3538/3/64 |
| 45 | 47/14/6421/29/70 | 58/6/5551/11/83 |
| 60 | 54/18/10037/32/100 | 71/13/10607/38/106 |
| first | 5 7 9 10 16 - | 11 12 21 22 40 53 |

Soldiers every 5 min: 10 10 9 14 17 15 24 20 29 24 26 32 (original game NPC: 10 10 6 4 2 3 3 3 11 21 28 38).

First army orders (game min:sec): 1:18 sendIn 1 soldiers -> building 79; 2:32 sendIn 1 soldiers -> building 102; 8:30 armyTarget sword=9; 8:30 armyTarget spear=5; 8:30 armyTarget bow=4; 9:28 attack 7 soldiers -> building 80; 10:30 armyTarget sword=8; 10:36 armyTarget sword=7; 10:36 armyTarget bow=3; 10:42 armyTarget spear=4; 10:48 armyTarget sword=5; 10:48 armyTarget spear=3.

#### Game log: claude-fable-5.2

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 27 | 16 | 26 | 6 | 0 | 0 | 0 | 0 | 0 | 11 | 2 | 19 | 0 | 0 | 0 | 0 | 0 | 8 | 51 | 1967 | 13253 |
| 30 | 40 | 19 | 19 | 19 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 3 | 5 | 8 | 0 | 0 | 0 | 61 | 96 | 4860 | 18577 |
| 45 | 37 | 19 | 17 | 21 | 0 | 0 | 0 | 0 | 0 | 41 | 2 | 7 | 14 | 8 | 1 | 0 | 0 | 26 | 90 | 6421 | 21330 |
| 60 | 40 | 16 | 11 | 23 | 0 | 0 | 0 | 0 | 0 | 49 | 0 | 5 | 14 | 8 | 0 | 0 | 0 | 58 | 98 | 10037 | 25222 |

At the end: buildings (built+sites) tower 14, house 4, guard 4, coalmine 4, quarry 3, wood 3, forest 3, ironmine 3, saw 2, fisher 2, stonemine 2, house3 2, hq 1, smelter 1, smith 1, weaponsmith 1, barracks 1, house2 1, goldmine 1, goldsmelter 1.
People: carrier 63, worker 27, digger 4, builder 4, soldier 2, geologist 1, explorer 1; beds 160. Soldiers: sword 2.

Goods produced in the game: fish 514, coal 250, log 240, plank 204, stone 184, ironore 99, iron 99, sword 53, goldore 22, spear 12, pick 10, gold 8, bow 5, hammer 4, shovel 4, axe 2, saw 2, rod 2.
Goods consumed in the game: fish 497, plank 212, log 204, coal 201, stone 191, ironore 99, iron 94, sword 53, pick 14, spear 12, goldore 8, hammer 6, shovel 5, bow 5, axe 3, saw 2, rod 2.
Goods lost in the game: stone 7, plank 6.
Goods captured in the game: plank 3, stone 3.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- quarry (110 building-min): Stone pile full, waiting for carriers 49%, Cutting stone 30%, Bringing stone to the pile 17%, No stone in range inside your border 2%, Worker picking up a pickaxe 1%
- house (211 building-min): Idle 100%
- wood (164 building-min): Log pile full, waiting for carriers 65%, Felling a tree 28%, Bringing a log to the pile 7%, Worker picking up an axe 0%, Working 0%
- guard (285 building-min): Idle 94%, Waiting for a swordsman: train one at the barracks 5%, Soldiers on the way 1%, Waiting for a soldier 0%
- saw (102 building-min): Output pile full, waiting for carriers 68%, Sawing planks 25%, Stacking outside 5%, Fetching from the pile 1%, Worker picking up a saw 0%
- fisher (100 building-min): Bringing a fish to the pile 43%, Fishing 40%, No fish in range inside your border 17%, Worker picking up a fishing rod 0%, Working 0%
- forest (155 building-min): No free ground to plant in range inside your border 72%, Planting a sapling 27%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- coalmine (174 building-min): Coal pile full, waiting for carriers 43%, Deposit worn out: finding little coal 16%, Deposit thinning: mining coal 15%, Mining coal 13%, Needs bread or fish: mining stopped 5%
- ironmine (130 building-min): Needs meat or fish: mining stopped 68%, Deposit worn out: finding little iron ore 14%, Deposit thinning: mining iron ore 7%, Mining iron ore 6%, Bringing iron ore out 2%
- smelter (55 building-min): Waiting for iron ore 62%, Smelting iron 23%, Output pile full, waiting for carriers 9%, Stacking outside 5%, Fetching from the pile 1%
- smith (54 building-min): All tool targets met 93%, Forging pickaxe 2%, Stacking outside 1%, Forging hammer 1%, Forging shovel 1%
- weaponsmith (52 building-min): Waiting for iron 55%, Waiting for coal 23%, Forging sword 13%, Stacking outside 4%, Forging spear 3%
- barracks (51 building-min): Waiting for weapons from the weaponsmith 84%, Weapons on the way 15%, Training soldiers 2%, Soldier targets met 0%, Idle 0%
- tower (286 building-min): Idle 94%, Waiting for a swordsman: train one at the barracks 5%, Soldiers on the way 1%, Waiting for a soldier 0%
- house2 (44 building-min): Idle 100%
- stonemine (48 building-min): Needs bread or fish: mining stopped 96%, Worker picking up a pickaxe 3%, Needs a worker with a pickaxe 1%, Working 0%, Idle 0%
- goldmine (40 building-min): Gold ore pile full, waiting for carriers 56%, Deposit worn out: finding little gold ore 38%, Worker picking up a pickaxe 2%, Bringing gold ore out 1%, Mining gold ore 1%
- goldsmelter (40 building-min): Output pile full, waiting for carriers 93%, Smelting gold 3%, Waiting for gold ore 2%, Worker picking up a hammer 2%, Stacking outside 1%
- house3 (46 building-min): Idle 100%

Building sites, time per state (site-min): Waiting for a digger 19, Leveling the ground 17, Builders at work 12, Waiting for a builder 12, Waiting for materials 5.

Build order (placed at min:sec, finished at): quarry 0:00→0:28, house 0:02→0:45, wood 0:04→1:00, guard 0:06→1:17, saw 0:50→1:40, fisher 0:52→1:57, forest 1:00→2:14, guard 1:24→2:32, coalmine 1:42→2:47, ironmine 2:02→3:02, wood 2:30→3:19, house 2:50→3:41, smelter 3:32→4:40, house 4:40→5:33, smith 5:28→6:26, weaponsmith 7:10→8:05, barracks 8:26→9:21, guard 9:10→10:06, quarry 9:52→10:48, forest 10:08→11:24, wood 10:36→11:39, forest 10:48→11:48, tower 13:32→15:20, house2 13:34→15:46, ironmine 15:00→16:09, saw 15:02→16:28, tower 15:32→17:18, coalmine 16:10→17:36, fisher 16:28→18:15, stonemine 16:56→17:54, tower 17:36→18:59, house 17:46→19:21, goldmine 18:24→19:46, goldsmelter 18:26→20:05, coalmine 18:30→20:21, tower 20:00→21:10, house3 20:02→22:24, coalmine 25:00→25:46, tower 28:00→29:29, ironmine 30:00→31:02, … (53 in all).

Demolished or burned: guard (burned) 24:37, guard (burned) 44:22, guard (burned) 45:35, guard (burned) 46:08.

Orders given: fighters 586, armyTarget 261, sendUnit 202, place 53, sendIn 23, priority 9, march 8, profession 7, attack 7, weaponKeep 3, archers 2. None refused.

People changing jobs: new carrier 160, carrier -> soldier 70, new soldier 33, carrier -> worker 27, carrier -> builder 2, carrier -> digger 2, carrier -> explorer 1.

People's orders (7979 in all, 7855 done): worker rest fisher 516, worker gather fisher 514, worker mine coalmine 513, worker rest forest 334, carrier haul fish fisher -> coalmine 334, worker gather forest 331, worker eat coalmine 323, worker rest coalmine 262, worker rest wood 243, worker gather wood 240, worker mine ironmine 219, carrier haul log wood -> saw 216, worker rest saw 206, worker toCraft saw 204. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×43; failed: can't reach that spot ×22.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 26.

Fights and contact: attacked enemy buildings 9 times (first 9:28); was attacked 3 times (first 45:29); took guard 10:46, guard 17:34, guard 23:53, guard 24:37, guard 35:17, guard 45:48; lost guard 48:30, guard 49:00; killed bow 5, sword 30, spear 1; lost people bow 8, sword 28, spear 12; first saw player 1 at 10:00.

Your notes (263 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text; the last 30 of 46 kinds):
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
- ×6 9:28–44:34 attack: 7 soldiers on guard 371, needed 7, 6 targets known
- 10:00 waiting: forest: materials; coalmine: materials; wood: materials
- ×17 10:00–46:00 army: outside 9 free 1 attacking 0 | targets 9/5/4 | enemy seen: soldiers 4 buildings 58 military 6 | next guard needs 4 | gold 0.7
- 11:00 tools free: axe 0 pick 0 hammer 1 saw 1 shovel -1 rod 1 | ore known: coal 1 iron 1 gold 0 | unsearched 26 | military 4 houses 3 | rocks in reach 136
- ×4 11:00–15:00 waiting: coalmine: no spot
- ×2 13:32–15:32 placed tower 203,83 at 932 s (land for: room)
- ×3 13:34–50:26 placed house3 205,99 at 3026 s
- 14:00 waiting: coalmine: materials
- 16:00 waiting: coalmine: materials; goldmine: materials; coalmine: materials
- ×2 16:56–53:16 placed stonemine 198,71 at 3196 s
- ×3 17:00–19:00 tools free: axe 1 pick -2 hammer 0 saw 1 shovel 1 rod 1 | ore known: coal 1 iron 1 gold 1 | unsearched 98 | military 8 houses 5 | rocks in reach 88
- ×2 17:00–18:00 waiting: goldmine: no pick; coalmine: no pick
- ×5 17:34–45:54 defence: 4 soldiers meet 4 enemy soldiers near our buildings
- ×12 17:36–57:44 placed tower 150,20 at 3464 s
- ×3 18:00–47:00 army: outside 5 free 3 attacking 0 | targets 7/5/3 | enemy seen: soldiers 4 buildings 60 military 6 | next hq needs 7 | gold 0.7
- 18:24 placed goldmine 177,90 at 1104 s
- 18:26 placed goldsmelter 172,88 at 1106 s
- ×4 50:00–57:00 army: outside 6 free 1 attacking 4 | targets 7/5/3 | enemy seen: soldiers 0 buildings 64 military 9 | next castle needs 0 | gold 0.7
- 56:42 attack: 4 soldiers on castle 505 (empty), needed 4, 9 targets known
- 59:00 army: outside 2 free 1 attacking 0 | targets 6/4/2 | enemy seen: soldiers 0 buildings 66 military 10 | next tower needs 7 | gold 0.7


Script: 1988 turns, 0.6 ms average, worst 15 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: claude-fable-5.2 (Gold) vs original game NPC: **won** at 26 min

| min | claude-fable-5.2 | original game NPC |
|---|---|---|
| 15 | 30/7/3700/10/44 | 29/5/2138/5/40 |
| 26 | 48/17/9014/35/97 | 0/0/0/0/0 |
| first | 5 6 8 9 12 - | 10 11 15 16 - - |

Soldiers every 5 min: 10 10 10 19 36 35 (original game NPC: 10 10 5 5 0 0).

First army orders (game min:sec): 1:34 sendIn 1 soldiers -> building 78; 2:48 sendIn 1 soldiers -> building 99; 5:22 sendIn 1 soldiers -> building 127; 8:06 armyTarget sword=5; 8:06 armyTarget spear=3; 8:06 armyTarget bow=3; 8:12 armyTarget sword=7; 8:12 armyTarget spear=5; 8:18 armyTarget sword=8; 8:18 armyTarget bow=4; 9:48 sendIn 1 soldiers -> building 171; 9:48 armyTarget sword=7.

#### Game log: claude-fable-5.2

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 22 | 13 | 18 | 16 | 0 | 0 | 0 | 0 | 0 | 21 | 0 | 8 | 0 | 0 | 2 | 0 | 0 | 0 | 42 | 3700 | 15887 |
| 26 | 51 | 161 | 172 | 46 | 7 | 16 | 0 | 38 | 14 | 59 | 0 | 12 | 18 | 16 | 0 | 0 | 0 | 63 | 87 | 9014 | 19784 |

At the end: buildings (built+sites) guard 12, tower 5+1, house 5, coalmine 3+1, wood 3, quarry 2, saw 2, fisher 2, ironmine 2, forest 2, hq 1, smelter 1, smith 1, weaponsmith 1, barracks 1, stonemine 1, goldmine 1, house2 1, goldsmelter 1, house3 1.
People: carrier 65, worker 22, soldier 13, digger 4, builder 4, geologist 1, explorer 1; beds 120. Soldiers: sword 4, bow 5, spear 4.

Goods produced in the game: fish 203, log 177, coal 160, plank 144, stone 138, ironore 56, iron 56, sword 22, goldore 22, gold 8, pick 6, spear 6, bow 5, hammer 4, axe 2, saw 2, shovel 2, rod 2.
Goods consumed in the game: fish 191, plank 146, log 145, stone 137, coal 116, ironore 56, iron 52, sword 22, pick 10, goldore 8, hammer 6, spear 6, bow 5, shovel 4, axe 3, saw 2, rod 2.
Goods captured in the game: stone 136, plank 124, grain 38, fish 28, meat 16, log 15, coal 15, flour 14, iron 8, gold 8, bread 7, goldore 4, hammer 2, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (26 building-min): Idle 100%
- quarry (41 building-min): Cutting stone 51%, Stone pile full, waiting for carriers 28%, Bringing stone to the pile 20%, Worker picking up a pickaxe 1%, Working 0%
- house (86 building-min): Idle 100%
- wood (61 building-min): Felling a tree 56%, Log pile full, waiting for carriers 27%, Bringing a log to the pile 15%, Worker picking up an axe 1%, Working 0%
- guard (133 building-min): Idle 96%, Waiting for a swordsman: train one at the barracks 4%, Soldiers on the way 0%, Waiting for a soldier 0%
- saw (33 building-min): Sawing planks 56%, Output pile full, waiting for carriers 27%, Stacking outside 12%, Waiting for logs 3%, Fetching from the pile 2%
- fisher (36 building-min): Fishing 39%, Bringing a fish to the pile 33%, No fish in range inside your border 22%, Fish pile full, waiting for carriers 4%, Worker picking up a fishing rod 2%
- ironmine (32 building-min): Needs meat or fish: mining stopped 40%, Deposit thinning: mining iron ore 23%, Deposit worn out: finding little iron ore 14%, Mining iron ore 13%, Bringing iron ore out 4%
- coalmine (46 building-min): Mining coal 40%, Coal pile full, waiting for carriers 21%, Deposit thinning: mining coal 17%, Bringing coal out 9%, Needs bread or fish: mining stopped 7%
- smelter (22 building-min): Waiting for iron ore 44%, Smelting iron 32%, Output pile full, waiting for carriers 12%, Stacking outside 7%, Waiting for coal 3%
- smith (20 building-min): All tool targets met 66%, Waiting for coal 19%, Forging pickaxe 4%, Forging hammer 3%, Stacking outside 2%
- forest (34 building-min): Planting a sapling 98%, Worker picking up a shovel 2%, Working 0%, Idle 0%
- weaponsmith (19 building-min): Waiting for iron 38%, Waiting for coal 33%, Forging sword 15%, Stacking outside 5%, Forging spear 4%
- barracks (17 building-min): Waiting for weapons from the weaponsmith 80%, Weapons on the way 18%, Training soldiers 1%, Soldier targets met 1%
- tower (34 building-min): Idle 93%, Waiting for a swordsman: train one at the barracks 5%, Soldiers on the way 2%, Waiting for a soldier 0%
- stonemine (14 building-min): Needs bread or fish: mining stopped 82%, Deposit thinning: mining stone 7%, Mining stone 4%, Worker picking up a pickaxe 3%, Bringing stone out 1%
- goldmine (8 building-min): Gold ore pile full, waiting for carriers 38%, Mining gold ore 26%, Deposit thinning: mining gold ore 16%, Worker picking up a pickaxe 10%, Bringing gold ore out 8%
- house2 (7 building-min): Idle 100%
- goldsmelter (6 building-min): Output pile full, waiting for carriers 50%, Worker picking up a hammer 19%, Smelting gold 18%, Waiting for gold ore 6%, Stacking outside 4%
- house3 (2 building-min): Idle 100%

Building sites, time per state (site-min): Waiting for a digger 22, Waiting for a builder 13, Leveling the ground 13, Builders at work 10, Waiting for materials 2.

Build order (placed at min:sec, finished at): quarry 0:00→0:26, house 0:02→0:47, wood 0:04→0:59, guard 0:06→1:32, saw 0:46→1:55, fisher 0:48→2:10, guard 1:38→2:47, wood 1:40→3:12, ironmine 1:56→3:36, coalmine 2:16→4:20, smelter 2:48→4:03, guard 3:14→5:20, house 3:40→4:40, smith 4:26→5:34, forest 4:52→5:50, weaponsmith 6:10→7:17, house 7:18→7:58, barracks 8:04→8:57, guard 8:48→9:46, quarry 9:38→10:29, coalmine 9:44→10:46, tower 10:30→11:32, wood 10:50→12:25, stonemine 11:04→12:09, forest 11:30→12:30, fisher 11:52→13:26, guard 12:10→13:50, house 12:48→14:19, tower 14:04→15:53, house 14:38→16:24, ironmine 15:00→16:48, coalmine 15:02→17:03, saw 15:46→17:16, guard 16:12→17:57, goldmine 17:16→18:16, house2 17:18→19:18, goldsmelter 17:58→20:16, tower 18:28→21:15, tower 21:28→22:33, house3 21:30→23:56, … (43 in all).

Orders given: armyTarget 137, sendUnit 76, fighters 75, place 43, sendIn 14, attack 8, profession 7, priority 7, weaponKeep 3, march 3, archers 1. None refused.

People changing jobs: new carrier 120, carrier -> soldier 33, carrier -> worker 22, new soldier 14, carrier -> digger 2, carrier -> builder 2, carrier -> explorer 1.

People's orders (4651 in all, 4570 done): worker rest forest 250, worker gather forest 250, worker mine coalmine 230, worker rest fisher 204, worker gather fisher 203, worker rest wood 180, worker gather wood 178, worker rest coalmine 163, carrier haul log wood -> saw 157, worker rest saw 146, worker toCraft saw 145, worker craft saw 145, worker rest quarry 132, worker gather quarry 131. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×32; failed: can't reach that spot ×10.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 12.

Fights and contact: attacked enemy buildings 8 times (first 12:46); took guard 14:00, guard 21:08, guard 21:58, guard 22:51, guard 23:42, guard 24:35, hq 25:50; killed bow 3, sword 13; lost people bow 3, sword 4, spear 1; first saw player 2 at 9:00.

Your notes (155 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text; the last 30 of 41 kinds):
- ×4 1:38–16:12 placed guard 111,151 at 972 s (land for: room)
- ×2 1:56–15:00 placed ironmine 49,143 at 900 s
- ×3 2:00–4:00 waiting: sites at cap
- ×4 2:16–25:00 placed coalmine 30,96 at 1500 s
- 2:48 placed smelter 41,134 at 168 s
- 4:26 placed smith 32,131 at 266 s
- ×2 4:52–11:30 placed forest 18,98 at 690 s
- ×2 5:00–6:00 waiting: weaponsmith: materials; quarry: materials; forest: materials; coalmine: materials
- 6:10 placed weaponsmith 54,131 at 370 s
- 7:00 waiting: barracks: materials; quarry: materials; forest: materials; coalmine: materials
- 8:00 waiting: barracks: materials; tower: materials; quarry: materials; forest: materials; coalmine: materials
- 8:04 placed barracks 55,125 at 484 s
- 9:00 waiting: quarry: materials; forest: materials; coalmine: materials
- ×12 9:00–21:00 army: outside 10 free 0 attacking 8 | targets 9/6/4 | enemy seen: soldiers 1 buildings 35 military 6 | next guard needs 0 | gold 0.6
- ×3 10:00–17:00 tools free: axe 1 pick -1 hammer 1 saw 0 shovel 1 rod 1 | ore known: coal 1 iron 1 gold 1 | unsearched 135 | military 9 houses 5 | rocks in reach 130
- 10:00 waiting: tower: materials; tower: materials; stonemine: no pick; forest: materials; wood: materials
- 10:30 placed tower 70,133 at 630 s
- 11:00 waiting: stonemine: materials; forest: materials
- 11:04 placed stonemine 35,96 at 664 s
- 12:00 waiting: tower: materials; forest: materials
- ×5 12:46–23:32 attack: 8 soldiers on guard 131, needed 7, 3 targets known
- ×4 13:00–22:00 waiting: forest: materials
- ×2 14:02–25:22 defence: 2 soldiers meet 1 enemy soldiers near our buildings
- ×5 14:04–25:12 placed tower 122,102 at 1512 s (land for: room)
- 17:00 waiting: forest: no spot; goldmine: no pick
- 17:16 placed goldmine 103,166 at 1036 s
- ×2 17:18–21:30 placed house3 60,124 at 1290 s
- 17:58 placed goldsmelter 98,167 at 1078 s
- 24:24 attack: 16 soldiers on guard 133 (empty), needed 4, 2 targets known
- 25:42 attack: 12 soldiers on hq 37, needed 12, 1 targets known


Script: 830 turns, 0.7 ms average, worst 31 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: claude-fable-5.2 (Blue) vs original game NPC: undecided

| min | claude-fable-5.2 | original game NPC |
|---|---|---|
| 15 | 24/3/1679/3/50 | 31/6/2580/7/50 |
| 30 | 43/12/4901/14/74 | 50/5/4232/5/58 |
| 45 | 45/12/7229/30/84 | 67/9/6997/35/89 |
| 60 | 51/16/9405/31/105 | 77/20/14816/46/84 |
| first | 7 6 7 9 20 - | 10 11 14 16 29 46 |

Soldiers every 5 min: 10 3 3 10 14 14 14 18 30 30 27 31 (original game NPC: 10 7 7 7 1 5 10 24 35 39 36 46).

First army orders (game min:sec): 1:24 sendIn 1 soldiers -> building 78; 3:52 sendIn 1 soldiers -> building 122; 7:30 attack 7 soldiers -> building 80; 8:00 armyTarget sword=7; 8:00 armyTarget spear=4; 8:00 armyTarget bow=3; 8:06 armyTarget sword=8; 8:06 armyTarget spear=5; 8:12 armyTarget bow=4; 8:18 armyTarget sword=9; 8:30 armyTarget sword=8; 8:36 armyTarget sword=7.

#### Game log: claude-fable-5.2

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 32 | 8 | 16 | 6 | 0 | 0 | 0 | 0 | 0 | 8 | 9 | 20 | 0 | 0 | 0 | 0 | 0 | 23 | 65 | 1679 | 13275 |
| 30 | 40 | 16 | 16 | 22 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 14 | 8 | 0 | 0 | 0 | 33 | 104 | 4901 | 19222 |
| 45 | 37 | 24 | 23 | 17 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 6 | 14 | 8 | 0 | 1 | 0 | 35 | 81 | 7229 | 21630 |
| 60 | 32 | 24 | 19 | 22 | 0 | 0 | 0 | 0 | 0 | 43 | 4 | 7 | 14 | 8 | 1 | 0 | 0 | 58 | 83 | 9405 | 27129 |

At the end: buildings (built+sites) tower 12+1, house 4, guard 4, coalmine 4, wood 3, forest 3, ironmine 3, house3 3, quarry 2, saw 2, fisher 2, stonemine 2, hq 1, smelter 1, smith 1, weaponsmith 1, barracks 1, goldmine 1, goldsmelter 1.
People: carrier 69, worker 26, digger 4, builder 4, soldier 3, geologist 1, explorer 1; beds 190. Soldiers: sword 2, spear 1.

Goods produced in the game: fish 534, coal 295, log 250, plank 222, stone 201, ironore 130, iron 125, sword 69, goldore 22, spear 18, bow 9, pick 8, gold 8, shovel 4, hammer 4, axe 2, saw 2, rod 2.
Goods consumed in the game: fish 518, coal 252, plank 225, log 222, stone 204, ironore 126, iron 118, sword 68, spear 18, pick 12, bow 9, goldore 8, hammer 6, shovel 5, axe 3, saw 2, rod 2.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- quarry (110 building-min): Stone pile full, waiting for carriers 54%, Cutting stone 30%, Bringing stone to the pile 15%, Worker picking up a pickaxe 0%, Working 0%
- house (217 building-min): Idle 100%
- wood (165 building-min): Log pile full, waiting for carriers 65%, Felling a tree 28%, Bringing a log to the pile 6%, Worker picking up an axe 0%, Working 0%
- guard (250 building-min): Idle 97%, Waiting for a swordsman: train one at the barracks 3%, Soldiers on the way 0%, Waiting for a soldier 0%
- saw (103 building-min): Output pile full, waiting for carriers 66%, Sawing planks 27%, Stacking outside 6%, Fetching from the pile 1%, Worker picking up a saw 1%
- fisher (96 building-min): Fishing 40%, Bringing a fish to the pile 38%, No fish in range inside your border 18%, Fish pile full, waiting for carriers 3%, Worker picking up a fishing rod 1%
- forest (162 building-min): No free ground to plant in range inside your border 66%, Planting a sapling 33%, Needs a worker with a shovel 1%, Worker picking up a shovel 0%, Idle 0%
- ironmine (119 building-min): Needs meat or fish: mining stopped 48%, Deposit worn out: finding little iron ore 30%, Deposit thinning: mining iron ore 8%, Mining iron ore 5%, Bringing iron ore out 3%
- coalmine (163 building-min): Coal pile full, waiting for carriers 45%, Deposit thinning: mining coal 21%, Mining coal 15%, Deposit worn out: finding little coal 6%, Bringing coal out 5%
- smelter (54 building-min): Waiting for iron ore 49%, Smelting iron 30%, Output pile full, waiting for carriers 12%, Stacking outside 6%, Waiting for coal 1%
- smith (54 building-min): All tool targets met 73%, Waiting for coal 12%, Waiting for iron 8%, Forging pickaxe 2%, Stacking outside 1%
- weaponsmith (53 building-min): Waiting for iron 48%, Waiting for coal 20%, Forging sword 16%, Stacking outside 5%, Forging spear 4%
- barracks (51 building-min): Waiting for weapons from the weaponsmith 75%, Weapons on the way 23%, Training soldiers 2%, Soldier targets met 0%
- tower (276 building-min): Idle 82%, Waiting for a swordsman: train one at the barracks 17%, Soldiers on the way 1%, Waiting for a soldier 0%, Free soldiers are too far away: bring one onto your land or near this building 0%
- house3 (61 building-min): Idle 100%
- stonemine (39 building-min): Needs bread or fish: mining stopped 95%, Mining stone 2%, Worker picking up a pickaxe 2%, Deposit thinning: mining stone 1%, Bringing stone out 1%
- goldmine (36 building-min): Gold ore pile full, waiting for carriers 86%, Mining gold ore 6%, Deposit thinning: mining gold ore 4%, Bringing gold ore out 1%, Worker picking up a pickaxe 1%
- goldsmelter (36 building-min): Output pile full, waiting for carriers 94%, Smelting gold 3%, Worker picking up a hammer 1%, Stacking outside 1%, Waiting for coal 0%

Building sites, time per state (site-min): Waiting for a digger 18, Leveling the ground 15, Builders at work 12, Waiting for a builder 12, Waiting for materials 11, No way to the site for builders 1, No way in for carriers 0.

Build order (placed at min:sec, finished at): quarry 0:00→0:32, house 0:02→0:52, wood 0:04→1:04, guard 0:06→1:23, saw 0:54→1:45, fisher 0:56→2:03, forest 1:04→2:19, wood 1:40→2:36, house 1:46→3:03, ironmine 2:06→3:26, guard 2:30→3:52, forest 4:00→4:56, coalmine 4:16→5:22, smelter 4:36→6:14, smith 4:54→5:47, weaponsmith 6:04→6:54, house 6:46→7:35, barracks 7:56→8:48, quarry 8:38→9:29, guard 9:18→10:13, wood 10:00→10:58, forest 10:02→11:15, house 10:10→11:28, saw 15:00→15:27, guard 17:00→17:45, coalmine 17:06→18:09, tower 17:56→19:26, house3 18:02→20:34, tower 19:32→21:23, stonemine 20:06→21:41, fisher 20:08→22:17, tower 21:36→23:14, goldmine 22:28→23:33, goldsmelter 22:30→23:47, tower 23:36→24:36, coalmine 24:52→25:45, ironmine 25:34→26:28, tower 25:42→26:57, coalmine 27:10→28:12, ironmine 30:00→31:10, … (56 in all).

Demolished or burned: guard (burned) 23:29, guard (burned) 24:38, guard (burned) 36:00, guard (burned) 37:29, guard (burned) 38:09.

Orders given: fighters 562, armyTarget 418, sendUnit 223, place 56, sendIn 48, archers 33, attack 14, priority 8, profession 7, weaponKeep 3, march 3. None refused.

People changing jobs: new carrier 190, carrier -> soldier 95, new soldier 54, carrier -> worker 26, carrier -> builder 2, carrier -> digger 2, carrier -> explorer 1.

People's orders (8958 in all, 8767 done): worker rest fisher 536, worker gather fisher 534, worker mine coalmine 503, worker rest forest 396, worker gather forest 393, worker mine ironmine 317, worker rest coalmine 309, carrier haul fish fisher -> coalmine 306, worker eat coalmine 291, worker rest wood 253, worker gather wood 252, carrier haul log wood -> saw 234, worker rest saw 224, worker toCraft saw 222. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×79; failed: can't reach that spot ×35; failed: no way (carrier (haul 0) target-off-land) ×12; failed: killed ×9; failed: no way (builder (build 0) own-land-split) ×4.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 47, carrier (haul 0) target-off-land 12, builder (build 0) own-land-split 4, carrier (haul 1) own-land-split 2.

Fights and contact: attacked enemy buildings 12 times (first 7:30); was attacked 5 times (first 36:28); took guard 21:02, guard 22:15, guard 23:28, guard 24:09, guard 24:36; lost guard 36:48, tower 51:44, tower 52:24, tower 54:03, tower 58:00; killed bow 6, sword 32, spear 2; lost people sword 46, bow 12, spear 16; first saw player 1 at 8:00.

Your notes (270 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text; the last 30 of 42 kinds):
- ×3 2:06–30:00 placed ironmine 135,69 at 1800 s
- ×4 4:16–27:10 placed coalmine 134,75 at 1630 s
- 4:36 placed smelter 191,114 at 276 s
- 4:54 placed smith 185,114 at 294 s
- ×2 5:00–6:00 waiting: weaponsmith: materials; tower: materials; quarry: materials
- 6:04 placed weaponsmith 187,120 at 364 s
- 7:00 waiting: barracks: materials; tower: materials; quarry: materials; coalmine: materials
- ×7 7:30–49:20 attack: 4 soldiers on guard 328, needed 4, 7 targets known
- 7:56 placed barracks 182,123 at 476 s
- 8:00 waiting: quarry: materials; coalmine: materials; goldmine: materials
- ×17 8:00–51:00 army: outside 2 free 1 attacking 0 | targets 6/4/2 | enemy seen: soldiers 0 buildings 59 military 7 | next guard needs 4 | gold 0.7
- 9:00 waiting: tower: materials; coalmine: materials; goldmine: materials
- ×5 10:00–14:00 waiting: stonemine: no spot; coalmine: no spot; goldmine: no spot
- ×2 11:00–12:00 tools free: axe 0 pick 0 hammer 0 saw 1 shovel -1 rod 0 | ore known: coal 1 iron 1 gold 1 | unsearched 55 | military 3 houses 4 | rocks in reach 150
- ×2 15:00–16:00 waiting: stonemine: no spot; coalmine: no spot; goldmine: no spot; ironmine: no spot; coalmine: no spot
- 17:00 placed guard 180,99 at 1020 s (land for: room)
- ×5 17:56–25:42 placed tower 128,64 at 1542 s (land for: room)
- ×3 18:00–20:00 waiting: stonemine: no spot; goldmine: no spot; ironmine: no spot; coalmine: no spot
- ×3 18:02–56:02 placed house3 204,91 at 3362 s
- ×2 20:02–24:06 attack: 9 soldiers on guard 148 (empty), needed 4, 4 targets known
- ×2 20:06–58:22 placed stonemine 160,41 at 3502 s
- ×2 21:00–22:00 waiting: goldmine: no spot; ironmine: no spot; coalmine: no spot
- ×2 21:02–36:00 defence: 1 soldiers meet 7 enemy soldiers near our buildings
- 22:28 placed goldmine 162,88 at 1348 s
- 22:30 placed goldsmelter 167,85 at 1350 s
- ×2 23:00–24:00 waiting: ironmine: no spot; coalmine: no spot
- 25:00 waiting: ironmine: no spot
- ×2 26:00–27:00 waiting: coalmine: no spot
- ×12 38:34–59:02 placed tower 217,39 at 3542 s
- ×3 39:00–56:00 army: outside 2 free 1 attacking 0 | targets 5/3/1 | enemy seen: soldiers 1 buildings 61 military 10 | next tower needs 7 | gold 0.7


Script: 1980 turns, 0.7 ms average, worst 16 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: claude-fable-5.2 (Gold) vs original game NPC: **won** at 23 min

| min | claude-fable-5.2 | original game NPC |
|---|---|---|
| 15 | 26/4/2619/17/75 | 28/6/3130/7/40 |
| 23 | 37/14/7961/33/55 | 0/0/0/0/0 |
| first | 5 6 7 9 15 - | 9 10 13 13 - - |

Soldiers every 5 min: 10 3 17 29 33 (original game NPC: 10 7 7 1 0).

First army orders (game min:sec): 1:30 sendIn 1 soldiers -> building 78; 3:46 sendIn 1 soldiers -> building 121; 7:12 armyTarget sword=5; 7:12 armyTarget spear=3; 7:18 armyTarget sword=4; 7:18 armyTarget spear=2; 7:42 armyTarget sword=5; 7:42 armyTarget spear=3; 7:42 armyTarget bow=1; 7:48 armyTarget sword=4; 7:48 armyTarget spear=2; 7:48 armyTarget bow=2.

#### Game log: claude-fable-5.2

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 26 | 10 | 16 | 15 | 0 | 0 | 0 | 0 | 0 | 18 | 0 | 9 | 0 | 0 | 0 | 0 | 0 | 44 | 43 | 2619 | 15350 |
| 23 | 65 | 136 | 138 | 33 | 10 | 0 | 11 | 15 | 8 | 48 | 1 | 15 | 8 | 4 | 5 | 1 | 1 | 28 | 81 | 7961 | 21319 |

At the end: buildings (built+sites) guard 8, tower 6, house 3, wood 3, forest 3, quarry 2, saw 2, coalmine 2, hq 1, fisher 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, house3 1.
People: carrier 30, worker 17, soldier 14, digger 3, builder 3, geologist 1, explorer 1; beds 80. Soldiers: sword 7, spear 4, bow 3.

Goods produced in the game: fish 174, log 140, coal 130, stone 109, plank 104, ironore 53, iron 53, sword 25, spear 7, shovel 3, bow 3, pick 2, hammer 2, axe 2, saw 2, rod 1.
Goods consumed in the game: fish 163, plank 112, stone 111, log 104, coal 100, ironore 53, iron 47, sword 25, spear 7, pick 6, shovel 4, hammer 4, axe 3, bow 3, saw 2, rod 1.
Goods lost in the game: pick 1.
Goods captured in the game: plank 103, stone 103, log 25, coal 18, fish 16, grain 15, water 11, bread 10, iron 9, flour 8, goldore 8, sword 5, gold 4, pick 1, scythe 1, ironore 1, bow 1, spear 1.

What the buildings did (share of their time after being built):
- hq (23 building-min): Idle 100%
- quarry (36 building-min): Cutting stone 50%, Stone pile full, waiting for carriers 28%, Bringing stone to the pile 21%, Worker picking up a pickaxe 1%, Working 0%
- house (57 building-min): Idle 100%
- wood (55 building-min): Felling a tree 49%, Log pile full, waiting for carriers 36%, Bringing a log to the pile 13%, Worker picking up an axe 2%, Needs a worker with an axe 1%
- guard (82 building-min): Idle 94%, Waiting for a swordsman: train one at the barracks 5%, Soldiers on the way 1%
- saw (28 building-min): Sawing planks 47%, Output pile full, waiting for carriers 39%, Stacking outside 10%, Worker picking up a saw 3%, Fetching from the pile 1%
- fisher (21 building-min): Fishing 42%, Bringing a fish to the pile 34%, Fish pile full, waiting for carriers 23%, Worker picking up a fishing rod 1%
- forest (46 building-min): Planting a sapling 67%, No free ground to plant in range inside your border 29%, Needs a worker with a shovel 3%, Worker picking up a shovel 1%, Idle 0%
- ironmine (20 building-min): Deposit thinning: mining iron ore 49%, Mining iron ore 25%, Deposit worn out: finding little iron ore 12%, Bringing iron ore out 7%, Worker picking up a pickaxe 2%
- coalmine (32 building-min): Mining coal 51%, Deposit thinning: mining coal 17%, Coal pile full, waiting for carriers 12%, Bringing coal out 11%, Needs a worker with a pickaxe 2%
- smelter (18 building-min): Smelting iron 37%, Waiting for iron ore 37%, Output pile full, waiting for carriers 10%, Stacking outside 8%, Waiting for coal 5%
- smith (18 building-min): All tool targets met 58%, Waiting for coal 28%, Worker picking up a hammer 3%, Forging shovel 2%, Stacking outside 2%
- weaponsmith (16 building-min): Waiting for coal 33%, Waiting for iron 30%, Forging sword 19%, Stacking outside 6%, Forging spear 5%
- barracks (15 building-min): Waiting for weapons from the weaponsmith 82%, Weapons on the way 17%, Training soldiers 2%
- house3 (10 building-min): Idle 100%
- tower (30 building-min): Idle 86%, Waiting for a swordsman: train one at the barracks 10%, Soldiers on the way 3%, Waiting for a soldier 0%

Building sites, time per state (site-min): Leveling the ground 9, Waiting for a digger 8, Builders at work 8, Waiting for a builder 5, Waiting for materials 3.

Build order (placed at min:sec, finished at): quarry 0:00→0:26, house 0:02→0:45, wood 0:04→0:57, guard 0:06→1:29, saw 0:44→1:51, fisher 0:46→2:09, forest 0:58→2:26, wood 1:40→2:40, house 1:52→3:06, ironmine 2:10→3:31, guard 2:30→3:45, coalmine 3:56→4:29, smelter 3:58→4:57, smith 4:30→5:19, weaponsmith 5:22→6:35, barracks 6:30→8:26, house 7:16→8:03, guard 7:40→9:01, quarry 8:16→9:15, forest 8:30→9:33, coalmine 8:42→9:52, wood 10:00→10:46, forest 10:30→11:01, house3 11:26→12:51, tower 13:08→14:15, tower 14:36→15:50, saw 15:00→16:10, tower 16:16→17:27, tower 18:08→18:56, tower 19:30→20:21, tower 20:30→21:36.

Orders given: armyTarget 117, sendUnit 64, fighters 61, place 31, sendIn 14, attack 9, priority 6, profession 4, archers 4, march 4, weaponKeep 3. None refused.

People changing jobs: new carrier 80, carrier -> soldier 35, carrier -> worker 17, new soldier 12, carrier -> explorer 1, carrier -> digger 1, carrier -> builder 1.

People's orders (3864 in all, 3801 done): worker rest forest 252, worker gather forest 249, worker mine coalmine 187, worker rest fisher 175, worker gather fisher 174, worker rest wood 143, worker gather wood 140, worker rest coalmine 132, soldier attack guard 117, carrier haul log wood -> saw 116, worker rest quarry 111, worker gather quarry 109, worker mine ironmine 108, worker rest saw 106. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×29; failed: can't reach that spot ×10.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 12.

Fights and contact: attacked enemy buildings 9 times (first 8:22); took guard 15:16, guard 16:09, guard 17:53, guard 18:49, guard 19:55, hq 21:18; killed bow 3, sword 6; lost people sword 6, bow 3, spear 3; first saw player 2 at 7:00.

Your notes (124 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text; the last 30 of 37 kinds):
- ×2 0:44–15:00 placed saw 47,102 at 900 s
- 0:46 placed fisher 32,126 at 46 s
- ×3 0:58–10:30 placed forest 40,100 at 630 s
- ×19 1:00–22:00 tools free: axe 1 pick 1 hammer 1 saw 1 shovel 1 rod 1 | ore known: coal 1 iron 1 gold 1 | unsearched 35 | military 14 houses 4 | rocks in reach 30
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
- ×5 8:22–22:30 attack: 10 soldiers on guard 143, needed 7, 1 targets known
- ×2 9:00–10:00 tools free: axe 0 pick -1 hammer 0 saw 0 shovel -1 rod 0 | ore known: coal 1 iron 1 gold 0 | unsearched 27 | military 3 houses 3 | rocks in reach 86
- ×3 9:00–15:00 army: outside 13 free 1 attacking 10 | targets 11/7/5 | enemy seen: soldiers 0 buildings 27 military 7 | next guard needs 0 | gold 0.6
- 11:00 tools free: axe -1 pick 0 hammer 1 saw 0 shovel -1 rod 0 | ore known: coal 1 iron 1 gold 0 | unsearched 27 | military 3 houses 3 | rocks in reach 72
- 11:26 placed house3 50,118 at 686 s
- ×2 13:08–14:36 placed tower 63,116 at 876 s
- ×3 15:00–17:00 waiting: ironmine: no spot; coalmine: no spot
- ×2 16:04–18:56 defence: 8 soldiers meet 1 enemy soldiers near our buildings
- ×2 16:08–19:54 attack: 11 soldiers on guard 96 (empty), needed 4, 3 targets known
- ×4 16:16–20:30 placed tower 17,170 at 1230 s (land for: room)
- 18:00 waiting: goldmine: no spot; ironmine: no spot; coalmine: no spot
- ×4 19:00–22:00 waiting: stonemine: no spot; goldmine: no spot; ironmine: no spot; coalmine: no spot
- 21:12 attack: 13 soldiers on hq 37, needed 12, 2 targets known


Script: 736 turns, 0.7 ms average, worst 10 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: claude-fable-5.2 (Blue) vs original game NPC: undecided

| min | claude-fable-5.2 | original game NPC |
|---|---|---|
| 15 | 14/3/1645/3/40 | 35/6/2762/6/60 |
| 30 | 14/3/1645/3/40 | 60/9/5663/25/81 |
| 45 | 14/3/1645/3/40 | 72/16/11289/57/89 |
| 60 | 14/3/1645/3/40 | 79/21/15613/71/95 |
| first | - - - - 7 - | 7 8 17 18 24 31 |

Soldiers every 5 min: 10 3 3 3 3 3 3 3 3 3 3 3 (original game NPC: 10 6 6 6 11 25 33 41 57 60 67 71).

First army orders (game min:sec): 1:46 sendIn 1 soldiers -> building 78; 3:54 sendIn 1 soldiers -> building 120; 6:14 attack 7 soldiers -> building 132.

#### Game log: claude-fable-5.2

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 24 | 8 | 16 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 26 | 48 | 1645 | 12508 |
| 30 | 24 | 8 | 16 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 26 | 48 | 1645 | 13888 |
| 45 | 24 | 8 | 16 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 26 | 48 | 1645 | 14039 |
| 60 | 24 | 8 | 16 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 26 | 48 | 1645 | 14165 |

At the end: buildings (built+sites) quarry 2, wood 2, guard 2, forest 2, hq 1, house 1, saw 1, fisher 1, house2 1, tower 1.
People: carrier 26, worker 8, digger 2, builder 2, soldier 1, geologist 1, explorer 1; beds 30. Soldiers: sword 1.

Goods produced in the game: log 42, stone 36, plank 22, fish 8.
Goods consumed in the game: plank 38, stone 38, log 22, pick 3, axe 2, shovel 2, saw 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- quarry (113 building-min): Stone pile full, waiting for carriers 92%, Cutting stone 5%, Bringing stone to the pile 2%, Worker picking up a pickaxe 0%, Working 0%
- house (59 building-min): Idle 100%
- wood (116 building-min): Log pile full, waiting for carriers 90%, Felling a tree 7%, Bringing a log to the pile 2%, Worker picking up an axe 0%, Working 0%
- guard (114 building-min): Idle 100%, Soldiers on the way 0%
- saw (58 building-min): Output pile full, waiting for carriers 94%, Sawing planks 5%, Stacking outside 1%, Worker picking up a saw 0%, Fetching from the pile 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 99%, Fishing 1%, Worker picking up a fishing rod 0%, Bringing a fish to the pile 0%, Idle 0%
- forest (113 building-min): No free ground to plant in range inside your border 87%, Planting a sapling 13%, Worker picking up a shovel 0%, Working 0%
- house2 (55 building-min): Idle 100%
- tower (53 building-min): Waiting for a swordsman: train one at the barracks 100%, Waiting for a soldier 0%

Building sites, time per state (site-min): Waiting for a digger 8, Leveling the ground 4, Builders at work 3, Waiting for a builder 2.

Build order (placed at min:sec, finished at): quarry 0:00→0:30, house 0:02→0:49, wood 0:04→1:02, guard 0:06→1:46, saw 0:52→2:19, fisher 0:54→2:39, forest 1:02→2:55, wood 1:46→3:24, guard 2:30→3:53, forest 4:00→4:30, house2 4:04→5:18, tower 5:00→6:32, quarry 5:02→6:58.

Orders given: sendUnit 206, fighters 107, place 13, profession 2, priority 2, sendIn 2, attack 1. None refused.

People changing jobs: new carrier 30, carrier -> worker 8, new soldier 2, carrier -> explorer 1.

People's orders (827 in all, 779 done): explorer explore 171, worker rest forest 112, worker gather forest 110, worker rest wood 44, worker gather wood 42, worker rest quarry 38, worker gather quarry 36, carrier haul log wood -> saw 26, worker rest saw 23, worker toCraft saw 22, worker craft saw 22, soldier attack guard 10, worker rest fisher 9, worker gather fisher 8. Not done (outcome: times): failed: can't reach that spot ×34.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 35.

Fights and contact: attacked enemy buildings 2 times (first 6:14); killed bow 3, sword 1; lost people bow 3, sword 4; first saw player 1 at 7:00.

Your notes (244 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–5:02 placed quarry 188,119 at 302 s
- ×60 0:00–59:00 59 min: people 40 carriers 26 idle 26 | plank 8 stone 16 log 24 fish 14 coal 0 ore 0 iron 0 gold 0 | owed 0/0 sites 0
- ×48 0:00–59:00 tools free: axe 0 pick 2 hammer 3 saw 0 shovel 0 rod 0 | ore known: coal 0 iron 0 gold 0 | unsearched 93 | military 3 houses 2 | rocks in reach 110 | stone not flowing
- ×59 0:00–59:00 army: outside 1 free 0 attacking 0 | targets 4/2/2 | enemy seen: soldiers 0 buildings 59 military 8 | gold 0.6
- 0:02 placed house 205,119 at 2 s
- ×2 0:04–1:46 placed wood 190,113 at 106 s
- ×2 0:06–2:30 placed guard 207,104 at 150 s
- 0:52 placed saw 201,107 at 52 s
- 0:54 placed fisher 210,120 at 54 s
- ×12 1:00–12:00 tools free: axe 0 pick 2 hammer 3 saw 0 shovel 0 rod 0 | ore known: coal 0 iron 0 gold 0 | unsearched 93 | military 3 houses 2 | rocks in reach 110
- ×2 1:02–4:00 placed forest 196,112 at 240 s
- 4:04 placed house2 198,125 at 244 s
- 5:00 placed tower 215,100 at 300 s
- 6:14 attack: 7 soldiers on guard 132, needed 7, 1 targets known
- 7:00 army: outside 8 free 0 attacking 7 | targets 4/2/2 | enemy seen: soldiers 0 buildings 8 military 2 | next guard needs 0 | gold 0.6
- ×5 10:00–14:00 waiting: wood: no axe
- ×45 15:00–59:00 waiting: wood: no axe; saw: no saw


Script: 1814 turns, 0.6 ms average, worst 12 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: claude-fable-5.2 (Gold) vs original game NPC: undecided

| min | claude-fable-5.2 | original game NPC |
|---|---|---|
| 15 | 26/5/3028/10/50 | 24/6/2773/10/40 |
| 30 | 45/13/6301/23/91 | 27/3/2638/2/50 |
| 45 | 47/14/7684/19/91 | 54/9/5085/18/78 |
| 60 | 45/12/6928/19/90 | 80/19/11001/55/107 |
| first | 8 8 10 11 6 - | 7 9 32 35 56 55 |

Soldiers every 5 min: 10 10 10 10 23 23 23 21 19 19 18 19 (original game NPC: 10 10 10 10 2 2 2 6 18 27 45 55).

First army orders (game min:sec): 1:44 sendIn 1 soldiers -> building 79; 3:56 sendIn 1 soldiers -> building 122; 5:32 sendIn 1 soldiers -> building 127; 9:30 armyTarget sword=8; 9:30 armyTarget spear=5; 9:30 armyTarget bow=3; 9:42 armyTarget sword=6; 9:42 armyTarget spear=4; 9:48 armyTarget sword=7; 9:54 armyTarget sword=5; 9:54 armyTarget spear=3; 10:00 armyTarget sword=6.

#### Game log: claude-fable-5.2

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 22 | 15 | 14 | 4 | 0 | 0 | 0 | 0 | 0 | 8 | 9 | 20 | 0 | 0 | 0 | 0 | 0 | 21 | 39 | 3028 | 13846 |
| 30 | 36 | 27 | 23 | 26 | 8 | 0 | 6 | 0 | 6 | 6 | 15 | 16 | 14 | 8 | 0 | 0 | 0 | 43 | 82 | 6301 | 18824 |
| 45 | 40 | 24 | 26 | 32 | 8 | 0 | 6 | 0 | 6 | 6 | 30 | 16 | 14 | 8 | 0 | 0 | 0 | 55 | 113 | 7684 | 20725 |
| 60 | 39 | 21 | 18 | 41 | 0 | 0 | 6 | 0 | 6 | 19 | 25 | 19 | 14 | 8 | 1 | 0 | 0 | 33 | 90 | 6928 | 20901 |

At the end: buildings (built+sites) tower 7+1, guard 5, coalmine 4, quarry 3, house 3, wood 3, ironmine 3, saw 2, fisher 2, forest 2, stonemine 2, hq 1, house2 1, smelter 1, smith 1, weaponsmith 1, barracks 1, goldmine 1, goldsmelter 1, house3 1.
People: carrier 54, worker 26, digger 4, builder 4, soldier 2, geologist 1, explorer 1; beds 100. Soldiers: sword 2.

Goods produced in the game: fish 296, log 201, plank 165, stone 147, coal 135, ironore 89, iron 63, goldore 22, sword 15, pick 10, gold 8, hammer 4, bow 4, shovel 3, axe 2, saw 2, rod 2, spear 2.
Goods consumed in the game: fish 261, plank 173, log 166, stone 153, coal 116, ironore 64, iron 44, pick 14, sword 14, goldore 8, bread 8, hammer 6, shovel 4, bow 4, axe 3, saw 2, rod 2, spear 2.
Goods lost in the game: pick 25, stone 18, plank 9.
Goods captured in the game: pick 25, stone 18, plank 8, bread 8, water 6, flour 6.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- quarry (138 building-min): No stone in range inside your border 50%, Stone pile full, waiting for carriers 24%, Cutting stone 17%, Bringing stone to the pile 7%, Worker picking up a pickaxe 1%
- house (146 building-min): Idle 100%
- wood (163 building-min): Log pile full, waiting for carriers 72%, Felling a tree 23%, Bringing a log to the pile 5%, Worker picking up an axe 0%, Working 0%
- guard (304 building-min): Idle 97%, Waiting for a swordsman: train one at the barracks 3%, Soldiers on the way 0%, Waiting for a soldier 0%
- saw (101 building-min): Output pile full, waiting for carriers 73%, Sawing planks 21%, Stacking outside 4%, Worker picking up a saw 1%, Waiting for logs 1%
- fisher (102 building-min): Fish pile full, waiting for carriers 53%, Fishing 24%, Bringing a fish to the pile 23%, Worker picking up a fishing rod 1%, Idle 0%
- forest (111 building-min): No free ground to plant in range inside your border 65%, Planting a sapling 35%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- ironmine (129 building-min): Iron ore pile full, waiting for carriers 63%, Deposit worn out: finding little iron ore 13%, Needs meat or fish: mining stopped 10%, Deposit thinning: mining iron ore 5%, Mining iron ore 5%
- house2 (55 building-min): Idle 100%
- tower (291 building-min): Idle 53%, Waiting for a swordsman: train one at the barracks 47%, Soldiers on the way 0%, Waiting for a soldier 0%
- coalmine (178 building-min): Needs bread or fish: mining stopped 79%, Deposit thinning: mining coal 8%, Mining coal 8%, Bringing coal out 2%, Worker picking up a pickaxe 1%
- smelter (53 building-min): Waiting for coal 62%, Output pile full, waiting for carriers 18%, Smelting iron 15%, Stacking outside 3%, Worker picking up a hammer 1%
- smith (52 building-min): Waiting for coal 69%, All tool targets met 23%, Forging pickaxe 2%, Worker picking up a hammer 1%, Stacking outside 1%
- weaponsmith (51 building-min): Waiting for coal 92%, Forging sword 4%, Worker picking up a hammer 1%, Stacking outside 1%, Forging bow 1%
- barracks (49 building-min): Waiting for weapons from the weaponsmith 96%, Weapons on the way 3%, Training soldiers 1%, Soldier targets met 0%, Idle 0%
- goldmine (46 building-min): Gold ore pile full, waiting for carriers 75%, Deposit worn out: finding little gold ore 10%, Deposit thinning: mining gold ore 6%, Mining gold ore 5%, Bringing gold ore out 1%
- goldsmelter (45 building-min): Output pile full, waiting for carriers 92%, Waiting for coal 5%, Smelting gold 2%, Worker picking up a hammer 0%, Stacking outside 0%
- house3 (36 building-min): Idle 100%
- stonemine (69 building-min): Needs bread or fish: mining stopped 97%, Mining stone 1%, Worker picking up a pickaxe 1%, Needs a worker with a pickaxe 1%, Bringing stone out 0%

Building sites, time per state (site-min): Waiting for a digger 21, Leveling the ground 13, Waiting for a builder 12, Builders at work 10, No way in for carriers 6, Waiting for materials 5.

Build order (placed at min:sec, finished at): quarry 0:00→0:29, house 0:02→0:52, wood 0:04→1:06, guard 0:06→1:44, saw 0:48→2:09, fisher 0:52→2:25, forest 1:06→2:42, wood 1:44→2:59, ironmine 2:10→3:36, guard 2:30→3:54, house2 3:38→4:56, tower 4:00→5:32, forest 4:36→6:00, coalmine 5:34→6:30, smelter 6:18→7:04, smith 6:50→7:40, weaponsmith 8:12→9:21, barracks 9:24→10:34, guard 10:24→11:39, quarry 10:56→12:00, coalmine 11:12→12:17, wood 11:40→12:41, guard 12:00→13:15, goldmine 12:08→14:11, house 12:48→14:35, goldsmelter 13:20→15:07, guard 13:44→15:20, fisher 14:12→15:49, ironmine 15:00→16:10, saw 15:02→16:38, tower 15:46→22:45, coalmine 16:32→17:48, house 16:42→18:19, house3 21:28→24:21, stonemine 22:56→25:04, tower 22:58→25:31, coalmine 25:00→25:48, stonemine 25:06→26:01, tower 25:48→26:54, tower 27:38→28:43, … (47 in all).

Demolished or burned: guard (burned) 35:24, guard (burned) 41:45, guard (burned) 42:10, tower (burned) 55:40, tower (burned) 59:41.

Orders given: fighters 587, armyTarget 450, sendUnit 230, sendIn 189, archers 175, place 47, priority 9, profession 7, attack 4, weaponKeep 3, march 2. None refused.

People changing jobs: new soldier 187, new carrier 100, carrier -> worker 26, carrier -> soldier 20, carrier -> builder 2, carrier -> digger 2, carrier -> explorer 1.

People's orders (5719 in all, 5411 done): worker rest fisher 298, worker gather fisher 296, worker rest forest 295, worker gather forest 293, worker mine coalmine 229, worker rest wood 204, worker gather wood 201, explorer explore 193, worker mine ironmine 189, carrier haul log wood -> saw 178, soldier garrison tower 177, worker rest saw 167, worker toCraft saw 166, worker craft saw 166. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×159; failed: can't reach that spot ×26; failed: no way (carrier (haul 0) target-off-land) ×24.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 29, carrier (haul 0) target-off-land 24, carrier (haul 1) own-land-split 9.

Fights and contact: attacked enemy buildings 3 times (first 20:48); was attacked 2 times (first 41:40); took guard 21:46, guard 23:16, guard 24:50; killed bow 3, sword 5; lost people sword 6, bow 5; first saw player 2 at 7:00.

Your notes (287 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text; the last 30 of 41 kinds):
- ×3 2:10–30:00 placed ironmine 92,145 at 1800 s
- 3:00 waiting: coalmine: no spot
- ×2 3:38–21:28 placed house3 11,131 at 1288 s
- ×10 4:00–59:44 placed tower 60,152 at 3584 s (land for: room)
- 5:00 waiting: coalmine: materials; quarry: materials
- ×4 5:34–25:00 placed coalmine 100,145 at 1500 s
- 6:00 waiting: smelter: materials; quarry: materials
- 6:18 placed smelter 72,123 at 378 s
- 6:50 placed smith 77,122 at 410 s
- 7:00 waiting: weaponsmith: materials; quarry: materials
- ×19 7:00–34:00 army: outside 3 free 2 attacking 0 | targets 6/4/3 | enemy seen: soldiers 0 buildings 33 military 4 | next guard needs 7 | gold 0.7
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
- ×3 20:48–24:34 attack: 6 soldiers on guard 94, needed 6, 5 targets known
- ×2 21:54–35:20 defence: 1 soldiers meet 1 enemy soldiers near our buildings
- ×2 22:56–25:06 placed stonemine 108,139 at 1506 s
- ×9 26:00–35:00 army: outside 2 free 1 attacking 0 | targets 6/4/2 | enemy seen: soldiers 0 buildings 34 military 4 | next hq needs 12 | gold 0.7


Script: 1848 turns, 0.7 ms average, worst 11 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: claude-fable-5.2 (Blue) vs original game NPC: undecided

| min | claude-fable-5.2 | original game NPC |
|---|---|---|
| 15 | 23/3/1662/3/40 | 24/4/2424/5/40 |
| 30 | 31/3/1692/3/60 | 53/6/4835/10/75 |
| 45 | 38/7/4282/15/98 | 71/13/9688/46/89 |
| 60 | 48/16/9499/31/75 | 78/19/14365/68/93 |
| first | 5 6 8 10 42 - | 14 15 16 19 35 30 |

Soldiers every 5 min: 10 3 3 3 3 3 3 3 15 26 26 31 (original game NPC: 10 5 5 5 8 10 14 27 46 52 56 68).

First army orders (game min:sec): 1:26 sendIn 1 soldiers -> building 78; 3:20 sendIn 1 soldiers -> building 111; 6:54 attack 7 soldiers -> building 88; 8:24 armyTarget sword=5; 8:24 armyTarget spear=3; 8:24 armyTarget bow=3; 10:06 armyTarget sword=3; 10:06 armyTarget spear=2; 10:06 armyTarget bow=1; 10:12 armyTarget sword=4; 10:18 armyTarget sword=5; 10:18 armyTarget spear=3.

#### Game log: claude-fable-5.2

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 24 | 8 | 16 | 19 | 0 | 0 | 0 | 0 | 0 | 0 | 14 | 19 | 0 | 0 | 0 | 0 | 0 | 19 | 62 | 1662 | 12875 |
| 30 | 36 | 16 | 24 | 12 | 0 | 0 | 0 | 0 | 0 | 11 | 9 | 20 | 4 | 8 | 0 | 0 | 0 | 27 | 79 | 1692 | 13315 |
| 45 | 29 | 20 | 19 | 19 | 0 | 0 | 0 | 0 | 0 | 43 | 0 | 5 | 14 | 8 | 0 | 0 | 0 | 57 | 83 | 4282 | 16545 |
| 60 | 37 | 19 | 18 | 22 | 0 | 0 | 0 | 0 | 0 | 44 | 0 | 6 | 14 | 8 | 1 | 0 | 0 | 25 | 91 | 9499 | 22189 |

At the end: buildings (built+sites) tower 12+1, guard 4, coalmine 4, house 3, wood 3, forest 3, ironmine 3, quarry 2, saw 2, fisher 2, hq 1, smelter 1, smith 1, weaponsmith 1, barracks 1, stonemine 1, goldmine 1, goldsmelter 1, house2 1, house3 1.
People: carrier 40, worker 25, digger 4, builder 4, soldier 3, geologist 1, explorer 1; beds 100. Soldiers: sword 2, spear 1.

Goods produced in the game: fish 382, log 211, plank 177, coal 174, stone 163, ironore 64, iron 64, sword 31, goldore 22, pick 8, gold 8, shovel 4, hammer 4, spear 4, axe 2, saw 2, rod 2, bow 1.
Goods consumed in the game: fish 366, plank 182, log 178, stone 163, coal 130, ironore 64, iron 58, sword 30, pick 12, goldore 8, hammer 6, shovel 5, spear 4, axe 3, saw 2, rod 2, bow 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- quarry (109 building-min): Stone pile full, waiting for carriers 70%, Cutting stone 21%, Bringing stone to the pile 9%, Worker picking up a pickaxe 1%, Working 0%
- house (167 building-min): Idle 100%
- wood (165 building-min): Log pile full, waiting for carriers 58%, Felling a tree 25%, Needs a worker with an axe 10%, Bringing a log to the pile 7%, Worker picking up an axe 0%
- guard (183 building-min): Idle 84%, Waiting for a swordsman: train one at the barracks 16%, Soldiers on the way 0%
- saw (102 building-min): Output pile full, waiting for carriers 61%, Sawing planks 22%, Needs a worker with a saw 12%, Stacking outside 5%, Worker picking up a saw 1%
- fisher (77 building-min): Fishing 32%, No fish in range inside your border 31%, Bringing a fish to the pile 29%, Fish pile full, waiting for carriers 7%, Worker picking up a fishing rod 1%
- forest (109 building-min): No free ground to plant in range inside your border 54%, Planting a sapling 37%, Needs a worker with a shovel 8%, Worker picking up a shovel 1%, Working 0%
- ironmine (107 building-min): Needs meat or fish: mining stopped 67%, Iron ore pile full, waiting for carriers 16%, Deposit thinning: mining iron ore 7%, Mining iron ore 6%, Bringing iron ore out 2%
- coalmine (160 building-min): Deposit worn out: finding little coal 30%, Coal pile full, waiting for carriers 23%, Needs bread or fish: mining stopped 21%, Mining coal 9%, Needs a worker with a pickaxe 8%
- smelter (55 building-min): Waiting for iron ore 39%, Output pile full, waiting for carriers 30%, Smelting iron 15%, Waiting for coal 13%, Stacking outside 3%
- smith (54 building-min): Waiting for coal 48%, All tool targets met 45%, Forging pickaxe 2%, Stacking outside 1%, Forging shovel 1%
- weaponsmith (53 building-min): Waiting for coal 64%, Waiting for iron 26%, Forging sword 7%, Stacking outside 2%, Forging spear 1%
- barracks (51 building-min): Waiting for weapons from the weaponsmith 92%, Weapons on the way 8%, Training soldiers 1%, Soldier targets met 0%, Idle 0%
- stonemine (49 building-min): Stone pile full, waiting for carriers 40%, Needs bread or fish: mining stopped 36%, Needs a worker with a pickaxe 15%, Mining stone 7%, Bringing stone out 1%
- goldmine (40 building-min): Gold ore pile full, waiting for carriers 68%, Needs a worker with a pickaxe 19%, Mining gold ore 7%, Deposit thinning: mining gold ore 5%, Bringing gold ore out 1%
- goldsmelter (40 building-min): Output pile full, waiting for carriers 76%, Needs a worker with a hammer 19%, Smelting gold 2%, Stacking outside 1%, Waiting for gold ore 1%
- house2 (39 building-min): Idle 100%
- tower (129 building-min): Idle 89%, Waiting for a swordsman: train one at the barracks 10%, Soldiers on the way 1%, Waiting for a soldier 0%
- house3 (18 building-min): Idle 100%

Building sites, time per state (site-min): Builders at work 12, Waiting for a digger 11, Leveling the ground 10, Waiting for a builder 8, Waiting for materials 8.

Build order (placed at min:sec, finished at): quarry 0:00→0:34, house 0:02→0:51, wood 0:04→1:05, guard 0:06→1:25, saw 0:58→1:50, fisher 1:00→2:06, forest 1:06→2:21, wood 1:40→2:37, ironmine 1:50→3:02, guard 2:30→3:20, house 2:44→3:46, coalmine 3:44→4:29, smelter 3:46→4:57, smith 4:44→5:37, weaponsmith 6:18→7:09, house 7:10→7:58, barracks 8:18→9:10, quarry 9:02→10:01, guard 9:46→10:54, stonemine 10:00→10:46, forest 10:02→11:20, wood 10:30→11:40, saw 15:00→15:42, coalmine 18:08→19:06, goldmine 18:10→19:37, goldsmelter 18:46→19:50, house2 19:38→20:39, ironmine 26:16→26:58, coalmine 27:12→27:56, coalmine 27:50→28:29, guard 40:26→40:59, fisher 40:36→41:09, tower 41:08→41:52, house3 41:16→42:24, tower 41:58→42:52, ironmine 42:02→43:11, tower 43:06→44:06, tower 44:14→45:04, tower 45:10→45:58, tower 46:22→47:17, … (48 in all).

Orders given: fighters 267, sendUnit 224, armyTarget 159, place 48, sendIn 18, profession 8, priority 7, archers 5, weaponKeep 3, attack 2. None refused.

People changing jobs: new carrier 100, carrier -> soldier 35, carrier -> worker 25, new soldier 18, carrier -> digger 2, carrier -> builder 2, carrier -> explorer 1.

People's orders (6231 in all, 6120 done): worker mine coalmine 406, worker rest fisher 383, worker gather fisher 382, worker rest forest 312, worker gather forest 310, carrier haul fish fisher -> coalmine 301, worker eat coalmine 286, worker rest wood 214, worker gather wood 212, explorer explore 201, worker rest coalmine 190, carrier haul log wood -> saw 189, worker rest saw 179, worker toCraft saw 178. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×34; failed: can't reach that spot ×16; failed: killed ×3.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 16.

Fights and contact: attacked enemy buildings 3 times (first 6:54); killed bow 3, sword 2; lost people sword 7, bow 4, spear 3; first saw player 1 at 7:00.

Your notes (282 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text; the last 30 of 50 kinds):
- ×2 7:00–8:00 waiting: barracks: materials; quarry: materials; forest: materials; coalmine: materials
- ×2 7:00–8:00 army: outside 5 free 0 attacking 4 | targets 4/2/2 | enemy seen: soldiers 2 buildings 8 military 2 | next guard needs 0 | gold 0.6
- 8:18 placed barracks 188,121 at 498 s
- 9:00 waiting: quarry: materials; forest: materials; coalmine: materials; goldmine: materials
- 10:00 placed stonemine 174,139 at 600 s
- ×5 11:00–15:00 tools free: axe -1 pick -1 hammer 0 saw 0 shovel -1 rod 0 | ore known: coal 1 iron 1 gold 1 | unsearched 35 | military 3 houses 3 | rocks in reach 162
- ×4 11:00–14:00 waiting: forest: no shovel; coalmine: no pick; goldmine: no pick
- ×4 15:00–18:00 waiting: forest: no shovel; coalmine: no pick; goldmine: no pick; ironmine: no pick; coalmine: no pick
- ×3 16:00–18:00 tools free: axe -1 pick -1 hammer 0 saw -1 shovel -1 rod 0 | ore known: coal 1 iron 1 gold 1 | unsearched 35 | military 3 houses 3 | rocks in reach 160
- 18:10 placed goldmine 184,144 at 1090 s
- 18:46 placed goldsmelter 184,138 at 1126 s
- 19:00 tools free: axe -1 pick -2 hammer -1 saw -1 shovel -1 rod 0 | ore known: coal 1 iron 1 gold 1 | unsearched 35 | military 3 houses 3 | rocks in reach 156
- 19:00 waiting: house: materials; forest: no shovel; fisher: materials; ironmine: no pick; coalmine: no pick
- ×2 19:38–41:16 placed house3 174,118 at 2476 s
- ×6 20:00–27:00 tools free: axe -1 pick -2 hammer -1 saw -1 shovel 0 rod 0 | ore known: coal 1 iron 1 gold 1 | unsearched 40 | military 3 houses 4 | rocks in reach 138
- 20:00 waiting: forest: materials; fisher: materials; ironmine: no pick; coalmine: no pick
- ×6 21:00–26:00 waiting: forest: no spot; fisher: no spot; ironmine: no pick; coalmine: no pick
- ×2 25:00–26:00 tools free: axe -1 pick -2 hammer -1 saw -1 shovel 0 rod 0 | ore known: coal 1 iron 1 gold 1 | unsearched 35 | military 3 houses 4 | rocks in reach 140 | stone not flowing
- 27:00 waiting: forest: no spot; fisher: no spot; coalmine: no pick; coalmine: no pick
- ×4 28:00–31:00 tools free: axe 0 pick -1 hammer 1 saw 0 shovel 0 rod 0 | ore known: coal 1 iron 1 gold 1 | unsearched 46 | military 3 houses 4 | rocks in reach 138
- ×2 28:00–29:00 waiting: forest: no spot; fisher: no spot
- ×2 30:00–31:00 waiting: forest: no spot; fisher: no spot; ironmine: no pick
- ×9 32:00–40:00 waiting: forest: no spot; fisher: no spot; ironmine: no spot
- 40:26 placed guard 165,119 at 2426 s (land for: room)
- ×2 41:00–42:00 waiting: forest: no spot; ironmine: no spot
- ×13 41:00–58:00 army: outside 3 free 2 attacking 0 | targets 6/4/3 | enemy seen: soldiers 0 buildings 62 military 10 | next tower needs 7 | gold 0.7
- ×11 41:08–56:18 placed tower 224,145 at 3378 s (land for: room)
- ×14 43:00–56:00 waiting: forest: no spot
- 49:52 attack: 7 soldiers on tower 318, needed 7, 8 targets known
- ×2 57:20–59:24 placed tower 147,176 at 3564 s


Script: 1825 turns, 0.7 ms average, worst 15 ms, 0 over 0.3 s, 0 errors. Orders refused: none.
