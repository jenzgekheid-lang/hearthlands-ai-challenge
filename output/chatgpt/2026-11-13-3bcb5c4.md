# Tournament: chatgpt

Game version 207. Written for: chatgpt 207.

- chatgpt: hearthlands-ai-challenge, commit 3bcb5c4

Maps 20261030, 777, 4242, 31, each twice (sides swapped), up to 60 game minutes (1x). 66 s.

Each game ends with the script's own game log: what it may know (its own side, and what happened to it or what it saw). Times are game min:sec.

| Opponent | Won | Lost | Undecided |
|---|---|---|---|
| original game NPC | 0 | 0 | 8 |

## Games

Each row: buildings / military / land tiles / soldiers / people at the minute shown. First: game minute of the first smelter, smith, weaponsmith, barracks, tower, castle (- = never).

### Map 31: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 19/1/1616/15/35 | 31/6/3173/10/50 |
| 30 | 21/1/2046/10/26 | 61/8/4897/10/83 |
| 45 | 26/3/2839/5/37 | 62/10/6190/31/68 |
| 60 | 27/3/3595/12/45 | 62/10/6969/35/64 |
| first | 5 7 9 9 - - | 8 9 17 17 - - |

Soldiers every 5 min: 10 10 15 12 11 10 18 19 5 10 12 12 (original game NPC: 10 10 10 5 5 10 13 22 31 35 35 35).

First army orders (game min:sec): 2:26 sendIn 1 soldiers -> building 90; 8:26 armyTarget sword=5; 8:26 armyTarget spear=3; 8:26 armyReserve; 10:06 armyTarget sword=4; 10:06 armyTarget spear=2; 10:26 armyTarget sword=5; 10:26 armyTarget spear=3; 14:06 armyTarget bow=3; 14:26 armyTarget sword=6; 14:46 armyTarget spear=4; 15:00 march 5 soldiers -> 200,120.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 19 min, 6–60: stall: fisher: no fish in range inside your border 81% of the last 5 minutes.
- 2 min, 9–10: stall: smith: waiting for coal 84% of the last 5 minutes.
- 14 min, 9–46: stall: iron mine: needs meat or fish 100% of the last 5 minutes.
- 32 min, 11–60: stall: barracks: waiting for weapons from the weaponsmith 91% of the last 5 minutes.
- 2 min, 11–12: stall: weaponsmith: waiting for coal 95% of the last 5 minutes.
- 33 min, 13–60: stall: smelter: waiting for iron ore 85% of the last 5 minutes.
- 21 min, 20–49: stall: weaponsmith: waiting for iron 85% of the last 5 minutes.
- 18 min, 24–59: stall: forest: no free ground to plant in range inside your border 91% of the last 5 minutes.
- 3 min, 27–56: stall: quarry: stone pile full, waiting for carriers 100% of the last 5 minutes.
- 7 min, 27–58: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 2 min, 27–56: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 5 min, 27–36: settlers: No free settlers and every bed taken: build houses.
- 2 min, 29–30: stall: farm: grain pile full, waiting for carriers 99% of the last 5 minutes.
- 1 min, 36: stall: water hut: water pile full, waiting for carriers 93% of the last 5 minutes.
- 1 min, 36: stall: mill: output pile full, waiting for carriers 90% of the last 5 minutes.
- 6 min, 42–47: army: Lost 9 soldiers in the last 5 minutes.
- 2 min, 57–58: stall: gold mine: gold ore pile full, waiting for carriers 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 5 | 8 | 6 | 3 | 2 | 0 | 14 | 8 | 14 | 18 | 0 | 2 | 0 | 0 | 0 | 1 | 0 | 9 | 34 | 1616 | 2872 |
| 30 | 19 | 13 | 22 | 11 | 11 | 0 | 14 | 16 | 13 | 26 | 0 | 6 | 0 | 0 | 0 | 0 | 2 | 0 | 93 | 2046 | 6888 |
| 45 | 24 | 8 | 19 | 8 | 14 | 0 | 13 | 15 | 13 | 32 | 0 | 4 | 14 | 8 | 0 | 0 | 0 | 3 | 99 | 2839 | 9161 |
| 60 | 24 | 10 | 21 | 9 | 14 | 0 | 14 | 16 | 14 | 30 | 0 | 4 | 14 | 8 | 0 | 0 | 0 | 18 | 99 | 3595 | 10092 |

At the end: buildings (built+sites) guard 3+1, house2 3, quarry 2, wood 2, hq 1, saw 1, forest 1, fisher 1, ironmine 1, coalmine 1, smelter 1, house 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, mill 1, bakery 1, goldmine 1, goldsmelter 1.
People: carrier 19, worker 18, soldier 7, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 70. Soldiers: sword 5, bow 1, spear 1.

Goods produced in the game: coal 128, fish 111, log 98, stone 97, plank 78, grain 76, water 60, flour 60, ironore 47, iron 47, bread 46, goldore 22, sword 20, spear 10, gold 8, bow 5, hammer 2, pick 2, saw 1, shovel 1, rod 1, axe 1.
Goods consumed in the game: fish 108, coal 98, stone 97, plank 92, log 78, grain 60, ironore 47, water 46, flour 46, iron 43, bread 32, sword 20, spear 10, goldore 8, pick 6, bow 5, hammer 4, axe 2, shovel 2, saw 1, rod 1, scythe 1.
Goods captured in the game: stone 3.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (90 building-min): Idle 100%
- quarry (102 building-min): Stone pile full, waiting for carriers 74%, Cutting stone 17%, Bringing stone to the pile 9%, Worker picking up a pickaxe 0%, Working 0%
- wood (103 building-min): Log pile full, waiting for carriers 74%, Felling a tree 19%, Bringing a log to the pile 6%, Worker picking up an axe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 74%, Sawing planks 17%, Waiting for logs 4%, Stacking outside 4%, Fetching from the pile 1%
- guard (102 building-min): Idle 92%, Waiting for a swordsman: train one at the barracks 7%, Soldiers on the way 1%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 64%, Planting a sapling 36%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- fisher (57 building-min): No fish in range inside your border 82%, Fishing 12%, Bringing a fish to the pile 6%, Fish pile full, waiting for carriers 0%, Worker picking up a fishing rod 0%
- ironmine (57 building-min): Needs meat or fish: mining stopped 65%, Deposit worn out: finding little iron ore 16%, Deposit thinning: mining iron ore 11%, Mining iron ore 4%, Bringing iron ore out 2%
- coalmine (56 building-min): Coal pile full, waiting for carriers 44%, Mining coal 24%, Deposit thinning: mining coal 16%, Needs bread or fish: mining stopped 7%, Bringing coal out 6%
- smelter (55 building-min): Waiting for iron ore 85%, Smelting iron 11%, Stacking outside 2%, Waiting for coal 1%, Worker picking up a hammer 0%
- house (55 building-min): Idle 100%
- smith (54 building-min): All tool targets met 90%, Waiting for coal 6%, Worker picking up a hammer 1%, Forging pickaxe 0%, Forging hammer 0%
- weaponsmith (52 building-min): Waiting for iron 74%, Waiting for coal 10%, All weapon targets met 5%, Forging sword 5%, Forging spear 2%
- barracks (51 building-min): Waiting for weapons from the weaponsmith 91%, Weapons on the way 7%, Training soldiers 1%, Soldier targets met 1%, Idle 0%
- farm (49 building-min): Grain pile full, waiting for carriers 77%, Sowing a field 11%, Harvesting grain 8%, Bringing grain to the pile 4%, Worker picking up a scythe 0%
- waterhut (48 building-min): Water pile full, waiting for carriers 89%, Fetching water 7%, Bringing water to the pile 5%, Working 0%
- mill (47 building-min): Output pile full, waiting for carriers 89%, Grinding flour 7%, Stacking outside 3%, Fetching from the pile 0%, Waiting for grain 0%
- bakery (46 building-min): Output pile full, waiting for carriers 74%, Baking bread 23%, Stacking outside 3%, Fetching from the pile 0%, Waiting for water 0%
- goldmine (24 building-min): Gold ore pile full, waiting for carriers 62%, Deposit thinning: mining gold ore 15%, Deposit worn out: finding little gold ore 8%, Mining gold ore 7%, Worker picking up a pickaxe 4%
- goldsmelter (23 building-min): Output pile full, waiting for carriers 91%, Smelting gold 4%, Worker picking up a hammer 2%, Stacking outside 1%, Waiting for gold ore 1%

Building sites, time per state (site-min): Builders at work 8, Leveling the ground 7, Waiting for a digger 6, Waiting for materials 5, Waiting for a builder 3.

Build order (placed at min:sec, finished at): house2 0:00→0:57, quarry 0:00→1:28, wood 0:02→1:11, saw 1:12→1:58, guard 1:14→2:25, forest 1:44→2:44, fisher 2:06→3:03, ironmine 2:46→3:20, coalmine 3:00→3:35, smelter 3:46→4:41, house 4:42→5:23, smith 5:34→6:21, weaponsmith 7:12→8:05, barracks 8:24→8:59, farm 10:00→10:52, waterhut 11:04→12:06, mill 11:52→12:38, bakery 13:12→13:48, wood 15:00→15:36, quarry 15:02→16:08, house2 27:00→30:43, guard 33:20→34:09, goldmine 34:54→35:52, goldsmelter 35:54→37:00, guard 41:40→42:26, house2 56:00→57:57, guard 59:14→never.

Demolished or burned: guard (burned) 16:02, guard (burned) 18:56.

Orders given: sendUnit 137, armyTarget 57, release 29, place 27, priority 5, profession 4, march 4, sendIn 3, weaponKeep 3, attack 3, armyReserve 1. None refused.

People changing jobs: new carrier 70, carrier -> soldier 35, carrier -> worker 18, carrier -> explorer 2, new soldier 2, carrier -> geologist 1, carrier -> pioneer 1.

People's orders (4135 in all, 4101 done): worker mine coalmine 161, worker rest farm 156, worker gather farm 155, worker rest forest 141, worker gather forest 140, worker rest coalmine 130, explorer explore 115, worker rest fisher 112, worker gather fisher 111, worker mine ironmine 110, worker rest wood 100, worker rest quarry 99, worker gather wood 98, worker gather quarry 97. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×4; failed: no way (carrier (haul 0) target-off-land) ×4.

Failed path searches (who (task) why: times): carrier (haul 0) target-off-land 4, pioneer (claim 1) cut-off 1.

Fights and contact: attacked enemy buildings 3 times (first 15:48); took guard 16:01, guard 18:10; killed sword 17, bow 3, spear 1; lost people sword 17, bow 7, spear 9; first saw player 2 at 16:00.

Your notes (9 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Adaptive plan: 10 field soldiers, 0 posts, carriers 6 (6 idle), coal/iron 0/0, sites 0, tips none.
- ×4 10:00–50:00 Adaptive plan: 5 field soldiers, 3 posts, carriers 6 (5 idle), coal/iron 1/1, sites 0, tips stall.
- ×3 15:48–41:16 Attack: 9 field troops against guard 280; threshold 8.
- 30:00 Adaptive plan: 8 field soldiers, 1 posts, carriers 2 (0 idle), coal/iron 1/1, sites 1, tips stall/settlers.


Script: 1896 turns, 1.1 ms average, worst 19 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 31: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 15/1/1589/25/25 | 33/6/2856/10/60 |
| 30 | 28/3/2227/23/47 | 48/3/3325/2/62 |
| 45 | 33/7/3141/36/49 | 48/0/3743/0/58 |
| 60 | 31/5/4571/13/35 | 60/3/6012/10/100 |
| first | 5 7 9 11 43 - | 7 8 14 16 53 59 |

Soldiers every 5 min: 10 10 25 21 19 23 32 34 36 39 12 13 (original game NPC: 10 10 10 4 3 2 1 1 0 0 2 10).

First army orders (game min:sec): 2:18 sendIn 1 soldiers -> building 90; 9:28 armyTarget sword=5; 9:28 armyTarget spear=3; 9:28 armyReserve; 10:28 armyTarget sword=6; 10:28 armyTarget bow=3; 10:48 armyTarget spear=4; 11:08 armyTarget sword=7; 11:28 armyTarget bow=4; 11:48 armyTarget sword=8; 12:08 armyTarget spear=5; 12:28 armyTarget sword=9.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 5 min, 12–16: stall: smelter: waiting for coal 57% of the last 5 minutes.
- 4 min, 14–39: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 10 min, 14–27: settlers: No free settlers and every bed taken: build houses.
- 24 min, 16–56: stall: barracks: waiting for weapons from the weaponsmith 89% of the last 5 minutes.
- 2 min, 18–19: stall: iron mine: needs meat or fish 57% of the last 5 minutes.
- 9 min, 20–57: army: Lost 11 soldiers in the last 5 minutes.
- 2 min, 21–22: stall: water hut: water pile full, waiting for carriers 96% of the last 5 minutes.
- 5 min, 21–27: stall: mill: output pile full, waiting for carriers 71% of the last 5 minutes.
- 17 min, 23–54: stall: weaponsmith: waiting for coal 83% of the last 5 minutes.
- 10 min, 25–38: stall: smelter: waiting for iron ore 70% of the last 5 minutes.
- 31 min, 28–60: stall: iron mine: deposit worn out 91% of the last 5 minutes.
- 1 min, 28: stall: butcher: waiting for pigs 79% of the last 5 minutes.
- 24 min, 30–60: stall: forest: no free ground to plant in range inside your border 92% of the last 5 minutes.
- 1 min, 39: stall: quarry: stone pile full, waiting for carriers 100% of the last 5 minutes.
- 2 min, 39–40: stall: woodcutter: log pile full, waiting for carriers 98% of the last 5 minutes.
- 1 min, 40: stall: fisher: fish pile full, waiting for carriers 100% of the last 5 minutes.
- 2 min, 54–55: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 6 min, 55–60: stall: coal mine: deposit worn out 92% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 12 | 14 | 12 | 5 | 0 | 0 | 0 | 0 | 0 | 11 | 6 | 10 | 0 | 0 | 1 | 0 | 0 | 0 | 22 | 1589 | 2975 |
| 30 | 29 | 11 | 19 | 16 | 12 | 12 | 19 | 14 | 14 | 12 | 0 | 14 | 0 | 0 | 0 | 1 | 1 | 15 | 89 | 2227 | 9513 |
| 45 | 29 | 15 | 22 | 24 | 12 | 12 | 20 | 22 | 14 | 8 | 1 | 19 | 0 | 0 | 0 | 0 | 0 | 22 | 108 | 3141 | 14444 |
| 60 | 27 | 17 | 24 | 16 | 11 | 11 | 20 | 20 | 14 | 12 | 9 | 19 | 0 | 0 | 0 | 0 | 0 | 5 | 104 | 4571 | 18094 |

At the end: buildings (built+sites) house2 3, guard 3, house 3, quarry 2, wood 2, tower 2, hq 1, saw 1, forest 1, fisher 1, coalmine 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, mill 1, bakery 1, pigfarm 1, butcher 1, goldmine 0+1.
People: worker 18, carrier 9, soldier 5, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 90. Soldiers: sword 4, bow 1.

Goods produced in the game: grain 180, coal 177, water 166, fish 121, stone 110, log 109, ironore 101, iron 92, plank 91, flour 80, pig 80, bread 66, meat 66, sword 39, spear 18, bow 8, axe 2, saw 1, shovel 1, rod 1, hammer 1, pick 1.
Goods consumed in the game: coal 165, grain 160, water 146, stone 111, fish 111, plank 104, ironore 92, log 91, iron 73, flour 66, pig 66, bread 55, meat 55, sword 39, spear 18, bow 8, pick 5, axe 3, hammer 3, shovel 2, saw 1, rod 1, scythe 1.
Goods lost in the game: fish 8, plank 7, stone 7.
Goods captured in the game: fish 8, plank 7, stone 6, log 5, hammer 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (110 building-min): Idle 100%
- quarry (102 building-min): Stone pile full, waiting for carriers 72%, Cutting stone 18%, Bringing stone to the pile 9%, Worker picking up a pickaxe 0%, Idle 0%
- wood (103 building-min): Log pile full, waiting for carriers 72%, Felling a tree 21%, Bringing a log to the pile 7%, Worker picking up an axe 0%, Idle 0%
- saw (58 building-min): Output pile full, waiting for carriers 70%, Sawing planks 20%, Waiting for logs 6%, Stacking outside 4%, Fetching from the pile 1%
- guard (177 building-min): Idle 96%, Waiting for a swordsman: train one at the barracks 3%, Soldiers on the way 1%, Free soldiers are too far away: bring one onto your land or near this building 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 61%, Planting a sapling 38%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 64%, Fishing 16%, Bringing a fish to the pile 13%, No fish in range inside your border 6%, Worker picking up a fishing rod 0%
- coalmine (56 building-min): Deposit thinning: mining coal 43%, Mining coal 24%, Deposit worn out: finding little coal 17%, Bringing coal out 8%, Needs bread or fish: mining stopped 5%
- ironmine (56 building-min): Deposit worn out: finding little iron ore 61%, Deposit thinning: mining iron ore 13%, Needs meat or fish: mining stopped 10%, Bringing iron ore out 5%, Mining iron ore 5%
- smelter (55 building-min): Waiting for iron ore 38%, Output pile full, waiting for carriers 25%, Smelting iron 21%, Waiting for coal 8%, Stacking outside 4%
- house (135 building-min): Idle 100%
- smith (53 building-min): All tool targets met 97%, Forging axe 0%, Stacking outside 0%, Worker picking up a hammer 0%, Forging saw 0%
- weaponsmith (51 building-min): Waiting for coal 63%, All weapon targets met 15%, Forging sword 10%, Forging spear 4%, Stacking outside 3%
- barracks (50 building-min): Waiting for weapons from the weaponsmith 77%, Weapons on the way 11%, Soldier targets met 10%, Training soldiers 2%
- farm (45 building-min): Grain pile full, waiting for carriers 43%, Sowing a field 27%, Harvesting grain 20%, Bringing grain to the pile 10%, Worker picking up a scythe 0%
- waterhut (45 building-min): Water pile full, waiting for carriers 61%, Fetching water 19%, Bringing water to the pile 19%, Worker on the way 0%, Working 0%
- mill (42 building-min): Output pile full, waiting for carriers 84%, Grinding flour 11%, Stacking outside 5%, Fetching from the pile 0%, Working 0%
- bakery (39 building-min): Output pile full, waiting for carriers 50%, Baking bread 38%, Waiting for flour 5%, Stacking outside 5%, Waiting for flour and water 1%
- pigfarm (38 building-min): Raising a pig 48%, Output pile full, waiting for carriers 44%, Stacking outside 6%, Waiting for grain and water 2%, Worker on the way 1%
- butcher (37 building-min): Output pile full, waiting for carriers 70%, Butchering 13%, Waiting for pigs 11%, Stacking outside 5%, Worker picking up an axe 1%
- tower (22 building-min): Idle 65%, Waiting for a swordsman: train one at the barracks 35%, Free soldiers are too far away: bring one onto your land or near this building 0%

Building sites, time per state (site-min): Leveling the ground 9, Builders at work 9, Waiting for a digger 7, Waiting for a builder 5, Waiting for materials 1.

Build order (placed at min:sec, finished at): house2 0:00→0:54, quarry 0:00→1:25, wood 0:02→1:09, saw 1:10→1:49, guard 1:12→2:17, forest 1:46→2:33, fisher 2:12→3:01, coalmine 2:24→3:36, ironmine 2:40→3:51, smelter 4:02→4:47, house 4:50→5:23, smith 6:12→6:54, weaponsmith 8:00→8:58, barracks 9:26→10:08, farm 13:52→15:01, waterhut 14:26→15:28, wood 15:00→15:49, quarry 15:44→16:37, house 15:44→17:12, mill 17:36→18:14, bakery 20:14→21:04, pigfarm 20:40→21:48, house 21:12→22:05, butcher 21:42→22:37, house2 26:12→27:44, house2 39:00→40:58, tower 41:08→42:25, guard 53:38→54:51, guard 54:52→55:58, goldmine 59:24→never.

Demolished or burned: guard (burned) 25:57, guard (burned) 51:11, guard (burned) 51:42, guard (burned) 52:08, guard (burned) 53:38, guard (burned) 53:38.

Orders given: sendUnit 140, armyTarget 97, place 30, release 11, attack 8, priority 5, march 5, profession 4, sendIn 3, weaponKeep 3, armyReserve 1. None refused.

People changing jobs: new carrier 90, carrier -> soldier 65, carrier -> worker 18, new soldier 14, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1.

People's orders (6717 in all, 6666 done): worker rest farm 374, worker gather farm 373, worker mine coalmine 266, worker mine ironmine 190, worker rest coalmine 179, worker rest waterhut 167, worker rest forest 166, worker gather forest 166, worker gather waterhut 166, worker rest fisher 122, worker gather fisher 121, soldier attack guard 119, worker eat coalmine 116, explorer explore 114. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×18; failed: spot not next to the border ×1; failed: killed ×1.

Failed path searches (who (task) why: times): pioneer (claim 1) cut-off 2.

Fights and contact: attacked enemy buildings 9 times (first 15:48); was attacked 3 times (first 51:36); took guard 17:02, guard 25:51, guard 27:09, guard 31:08, guard 34:04, guard 42:37, tower 55:50; killed bow 9, sword 45, spear 5; lost people sword 35, bow 10, spear 18; first saw player 1 at 16:00.

Your notes (12 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 8 field soldiers, 1 posts, carriers 22 (17 idle), coal/iron 1/1, sites 1, tips none.
- ×5 15:48–41:32 Attack: 9 field troops against guard 133; threshold 9.
- 20:00 Adaptive plan: 18 field soldiers, 2 posts, carriers 6 (5 idle), coal/iron 1/1, sites 0, tips stall/army.
- ×3 30:00–50:00 Adaptive plan: 30 field soldiers, 7 posts, carriers 19 (18 idle), coal/iron 1/1, sites 0, tips stall.
- 55:38 Attack: 8 field troops against tower 401; threshold 8.


Script: 2016 turns, 1.1 ms average, worst 18 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 19/2/1975/10/40 | 31/6/2527/10/47 |
| 30 | 29/3/2708/19/37 | 34/6/2361/4/59 |
| 45 | 31/4/3412/28/42 | 11/1/831/1/58 |
| 60 | 32/5/4179/33/37 | 11/1/831/1/58 |
| first | 8 9 11 12 54 - | 12 13 14 14 - - |

Soldiers every 5 min: 10 10 10 8 14 19 22 27 28 29 30 33 (original game NPC: 10 10 10 6 6 4 2 1 1 1 1 1).

First army orders (game min:sec): 2:22 sendIn 1 soldiers -> building 91; 10:52 armyTarget sword=5; 10:52 armyTarget spear=3; 10:52 armyReserve; 15:00 march 5 soldiers -> 200,120; 15:12 armyTarget sword=4; 15:12 armyTarget spear=2; 15:32 armyTarget sword=7; 15:32 armyTarget spear=4; 15:32 armyTarget bow=3; 15:52 armyTarget sword=6; 15:52 armyTarget spear=3.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 9 min, 5–13: stall: fisher: no fish in range inside your border 93% of the last 5 minutes.
- 10 min, 9–18: stall: iron mine: needs meat or fish 100% of the last 5 minutes.
- 11 min, 10–28: stall: smelter: waiting for iron ore 65% of the last 5 minutes.
- 14 min, 14–56: stall: barracks: waiting for weapons from the weaponsmith 97% of the last 5 minutes.
- 5 min, 15–19: stall: smith: waiting for iron 98% of the last 5 minutes.
- 9 min, 19–27: stall: weaponsmith: waiting for iron 75% of the last 5 minutes.
- 6 min, 20–26: stall: butcher: waiting for pigs 58% of the last 5 minutes.
- 3 min, 23–30: settlers: No free settlers and every bed taken: build houses.
- 32 min, 27–60: stall: goldsmelter: waiting for coal 100% of the last 5 minutes.
- 1 min, 29: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 2 min, 29–30: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 2 min, 29–30: stall: quarry: stone pile full, waiting for carriers 93% of the last 5 minutes.
- 22 min, 31–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 16 min, 31–58: stall: iron mine: deposit worn out 94% of the last 5 minutes.
- 5 min, 34–38: stall: gold mine: deposit worn out 96% of the last 5 minutes.
- 11 min, 43–57: stall: weaponsmith: waiting for coal 97% of the last 5 minutes.
- 1 min, 50: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 4 min, 53–60: stall: coal mine: deposit worn out 94% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 15 | 8 | 5 | 1 | 0 | 0 | 8 | 7 | 0 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 11 | 29 | 1975 | 3583 |
| 30 | 35 | 32 | 46 | 15 | 11 | 10 | 15 | 18 | 13 | 13 | 0 | 6 | 9 | 4 | 1 | 0 | 0 | 0 | 100 | 2708 | 8119 |
| 45 | 40 | 32 | 45 | 27 | 12 | 13 | 20 | 20 | 14 | 10 | 8 | 15 | 14 | 5 | 0 | 0 | 0 | 12 | 122 | 3412 | 11348 |
| 60 | 40 | 32 | 45 | 28 | 11 | 12 | 19 | 18 | 14 | 10 | 12 | 20 | 14 | 5 | 0 | 0 | 0 | 2 | 124 | 4179 | 13400 |

At the end: buildings (built+sites) guard 4, house2 2, quarry 2, wood 2, fisher 2, house 2, hq 1, saw 1, forest 1, coalmine 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, mill 1, bakery 1, pigfarm 1, butcher 1, goldmine 1, goldsmelter 1, tower 1.
People: soldier 27, worker 21, carrier 8, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 60. Soldiers: sword 13, bow 7, spear 7.

Goods produced in the game: grain 198, water 184, coal 121, log 110, stone 106, flour 92, plank 90, pig 87, bread 77, meat 73, ironore 67, iron 63, fish 57, goldore 19, sword 19, spear 7, bow 7, gold 5, axe 2, pick 2, hammer 2, rod 2, saw 1, shovel 1.
Goods consumed in the game: grain 180, water 166, coal 111, stone 108, plank 106, log 90, flour 78, pig 74, bread 66, ironore 63, meat 62, iron 43, fish 39, sword 19, spear 7, bow 7, pick 6, goldore 5, hammer 4, axe 3, shovel 2, rod 2, saw 1, scythe 1.
Goods captured in the game: log 16, stone 13, plank 8, ironore 8, fish 4, water 1, meat 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (88 building-min): Idle 100%
- quarry (99 building-min): Stone pile full, waiting for carriers 75%, Cutting stone 17%, Bringing stone to the pile 7%, Worker picking up a pickaxe 0%, Working 0%
- wood (100 building-min): Log pile full, waiting for carriers 74%, Felling a tree 20%, Bringing a log to the pile 4%, Worker picking up an axe 1%, Needs a worker with an axe 1%
- saw (58 building-min): Output pile full, waiting for carriers 75%, Sawing planks 20%, Stacking outside 4%, Fetching from the pile 1%, Worker picking up a saw 0%
- guard (164 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%, Waiting for a swordsman: train one at the barracks 0%
- forest (57 building-min): No free ground to plant in range inside your border 57%, Planting a sapling 42%, Worker picking up a shovel 0%, Idle 0%
- fisher (97 building-min): Fish pile full, waiting for carriers 53%, No fish in range inside your border 39%, Bringing a fish to the pile 4%, Fishing 4%, Worker picking up a fishing rod 0%
- coalmine (56 building-min): Deposit worn out: finding little coal 30%, Deposit thinning: mining coal 29%, Mining coal 17%, Needs bread or fish: mining stopped 13%, Bringing coal out 6%
- ironmine (53 building-min): Deposit worn out: finding little iron ore 58%, Needs meat or fish: mining stopped 23%, Deposit thinning: mining iron ore 8%, Mining iron ore 4%, Bringing iron ore out 3%
- smelter (52 building-min): Waiting for iron ore 63%, Output pile full, waiting for carriers 17%, Smelting iron 15%, Stacking outside 3%, Worker picking up a hammer 1%
- house (92 building-min): Idle 100%
- smith (51 building-min): All tool targets met 75%, Waiting for iron 20%, Worker picking up a hammer 1%, Stacking outside 1%, Forging pickaxe 1%
- weaponsmith (49 building-min): Waiting for coal 45%, Waiting for iron 38%, All weapon targets met 6%, Forging sword 5%, Stacking outside 2%
- barracks (48 building-min): Waiting for weapons from the weaponsmith 84%, Weapons on the way 10%, Soldier targets met 5%, Training soldiers 1%
- farm (47 building-min): Sowing a field 32%, Grain pile full, waiting for carriers 32%, Harvesting grain 23%, Bringing grain to the pile 13%, Worker picking up a scythe 1%
- waterhut (46 building-min): Water pile full, waiting for carriers 75%, Fetching water 14%, Bringing water to the pile 10%, Idle 0%, Working 0%
- mill (45 building-min): Output pile full, waiting for carriers 80%, Grinding flour 11%, Stacking outside 6%, Waiting for grain 2%, Fetching from the pile 1%
- bakery (44 building-min): Output pile full, waiting for carriers 54%, Baking bread 40%, Stacking outside 5%, Waiting for water 1%, Fetching from the pile 0%
- pigfarm (43 building-min): Raising a pig 46%, Output pile full, waiting for carriers 40%, Waiting for grain 6%, Stacking outside 6%, Fetching from the pile 1%
- butcher (42 building-min): Output pile full, waiting for carriers 68%, Butchering 13%, Waiting for pigs 13%, Stacking outside 5%, Fetching from the pile 1%
- goldmine (37 building-min): Gold ore pile full, waiting for carriers 59%, Deposit worn out: finding little gold ore 24%, Deposit thinning: mining gold ore 10%, Mining gold ore 2%, Worker picking up a pickaxe 2%
- goldsmelter (36 building-min): Waiting for coal 96%, Smelting gold 2%, Worker picking up a hammer 2%, Stacking outside 0%, Idle 0%
- tower (7 building-min): Waiting for a swordsman: train one at the barracks 100%, Idle 0%

Building sites, time per state (site-min): Leveling the ground 9, Builders at work 9, Waiting for a digger 6, Waiting for a builder 5, Waiting for materials 0.

Build order (placed at min:sec, finished at): house2 0:00→1:07, quarry 0:00→1:39, wood 0:02→1:22, saw 1:24→2:00, guard 1:26→2:21, forest 1:58→2:35, fisher 2:20→2:51, guard 2:54→3:55, coalmine 3:10→4:14, ironmine 6:10→6:40, smelter 6:40→7:31, house 7:32→8:07, smith 8:12→8:59, weaponsmith 9:40→10:48, barracks 10:50→11:43, farm 12:14→13:18, waterhut 13:10→14:06, mill 13:52→14:58, bakery 15:02→15:44, pigfarm 16:28→17:25, butcher 17:24→18:00, wood 17:52→18:23, quarry 18:36→19:20, house 19:20→19:54, fisher 19:48→20:33, goldmine 21:42→22:55, goldsmelter 22:56→23:43, house2 29:00→31:06, tower 50:28→53:04.

Demolished or burned: guard (burned) 31:50.

Orders given: sendUnit 154, armyTarget 72, place 29, release 8, priority 5, profession 4, attack 4, weaponKeep 3, march 3, sendIn 1, armyReserve 1. None refused.

People changing jobs: new carrier 60, carrier -> soldier 33, carrier -> worker 21, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1, new soldier 1.

People's orders (6145 in all, 6086 done): worker rest farm 406, worker gather farm 406, worker rest waterhut 185, worker gather waterhut 185, worker mine coalmine 180, worker rest forest 165, worker gather forest 164, worker mine ironmine 128, worker rest coalmine 123, explorer explore 115, worker rest wood 112, worker gather wood 110, worker rest quarry 108, worker gather quarry 106. Not done (outcome: times): failed: spot not next to the border ×22.

Failed path searches (who (task) why: times): pioneer (claim 1) cut-off 1.

Fights and contact: attacked enemy buildings 4 times (first 27:56); took hq 27:57, guard 29:04, guard 33:46, guard 39:14; killed bow 3, sword 8; lost people sword 7, bow 3; first saw player 2 at 16:00.

Your notes (9 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Adaptive plan: 10 field soldiers, 0 posts, carriers 6 (6 idle), coal/iron 0/0, sites 0, tips none.
- ×3 10:00–40:00 Adaptive plan: 22 field soldiers, 4 posts, carriers 14 (10 idle), coal/iron 1/1, sites 0, tips stall.
- 27:56 Attack: 15 field troops against hq 37; threshold 15.
- 30:00 Adaptive plan: 15 field soldiers, 3 posts, carriers 8 (0 idle), coal/iron 1/1, sites 1, tips stall/settlers.
- ×2 32:48–38:14 Attack: 8 field troops against guard 133; threshold 8.
- 50:00 Adaptive plan: 24 field soldiers, 4 posts, carriers 12 (7 idle), coal/iron 1/1, sites 0, tips land/stall.


Script: 1842 turns, 1.0 ms average, worst 20 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 17/3/2224/15/45 | 31/6/2724/10/44 |
| 30 | 22/3/2868/35/40 | 39/5/3015/13/61 |
| 45 | 28/5/3659/27/46 | 35/2/2498/22/47 |
| 60 | 28/5/3985/27/32 | 35/2/2498/19/45 |
| first | 8 10 12 13 - - | 8 8 9 10 - - |

Soldiers every 5 min: 10 10 15 19 28 35 26 22 27 28 28 27 (original game NPC: 10 10 10 4 13 13 9 22 22 19 21 19).

First army orders (game min:sec): 2:40 sendIn 1 soldiers -> building 101; 11:28 armyTarget sword=5; 11:28 armyTarget spear=3; 11:28 armyReserve; 13:08 armyTarget bow=3; 15:00 march 5 soldiers -> 40,120; 15:08 armyTarget sword=7; 15:08 armyTarget spear=4; 16:12 attack 13 soldiers -> building 130; 19:08 armyTarget bow=4; 20:28 armyTarget sword=8; 20:46 attack 16 soldiers -> building 1.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 6–7: army: Lost 4 soldiers in the last 5 minutes, and no barracks to train new ones.
- 3 min, 8–38: stall: quarry: stone pile full, waiting for carriers 100% of the last 5 minutes.
- 2 min, 8–26: settlers: No free settlers and every bed taken: build houses.
- 29 min, 13–60: stall: smelter: waiting for coal 90% of the last 5 minutes.
- 25 min, 15–60: stall: barracks: waiting for weapons from the weaponsmith 89% of the last 5 minutes.
- 13 min, 15–35: stall: weaponsmith: waiting for iron 84% of the last 5 minutes.
- 25 min, 23–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 21 min, 25–54: stall: iron mine: deposit worn out 94% of the last 5 minutes.
- 3 min, 26–39: stall: woodcutter: log pile full, waiting for carriers 98% of the last 5 minutes.
- 2 min, 26–38: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 9 min, 32–52: army: Lost 4 soldiers in the last 5 minutes.
- 19 min, 41–59: stall: coal mine: deposit worn out 90% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 10 | 8 | 8 | 15 | 0 | 0 | 0 | 0 | 0 | 13 | 13 | 6 | 0 | 0 | 0 | 0 | 0 | 25 | 36 | 2224 | 4526 |
| 30 | 16 | 31 | 43 | 4 | 0 | 0 | 1 | 0 | 0 | 7 | 7 | 4 | 0 | 0 | 0 | 0 | 1 | 14 | 23 | 2868 | 10574 |
| 45 | 33 | 34 | 54 | 23 | 0 | 12 | 14 | 14 | 0 | 8 | 14 | 2 | 0 | 0 | 0 | 0 | 1 | 20 | 102 | 3659 | 14250 |
| 60 | 33 | 34 | 54 | 23 | 0 | 12 | 14 | 14 | 0 | 9 | 14 | 2 | 0 | 0 | 0 | 0 | 0 | 5 | 101 | 3985 | 14860 |

At the end: buildings (built+sites) guard 5, house2 4, quarry 2, wood 2, fisher 2, hq 1, saw 1, forest 1, ironmine 1, coalmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, pigfarm 1, butcher 1.
People: soldier 20, worker 17, carrier 7, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 80. Soldiers: sword 10, bow 6, spear 4.

Goods produced in the game: fish 282, coal 143, log 95, stone 95, ironore 82, water 78, grain 78, plank 75, iron 68, pig 64, meat 50, sword 32, spear 15, bow 11, rod 2, axe 2, saw 1, shovel 1, hammer 1, pick 1.
Goods consumed in the game: fish 265, coal 134, stone 97, plank 91, log 75, ironore 68, iron 66, water 64, grain 64, pig 50, meat 38, sword 32, spear 15, bow 11, pick 5, axe 3, hammer 3, shovel 2, rod 2, saw 1, scythe 1.
Goods lost in the game: stone 12, plank 3.
Goods captured in the game: stone 27, plank 10, log 9.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (163 building-min): Idle 100%
- quarry (103 building-min): Stone pile full, waiting for carriers 79%, Cutting stone 14%, Bringing stone to the pile 6%, Worker picking up a pickaxe 0%, Working 0%
- wood (103 building-min): Log pile full, waiting for carriers 74%, Felling a tree 19%, Bringing a log to the pile 7%, Worker picking up an axe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 79%, Sawing planks 16%, Stacking outside 3%, Fetching from the pile 0%, Worker picking up a saw 0%
- guard (226 building-min): Idle 98%, Waiting for a swordsman: train one at the barracks 2%, Soldiers on the way 0%, Waiting for a soldier 0%, Free soldiers are too far away: bring one onto your land or near this building 0%
- forest (57 building-min): No free ground to plant in range inside your border 61%, Planting a sapling 39%, Worker picking up a shovel 0%, Working 0%
- fisher (86 building-min): Fish pile full, waiting for carriers 49%, Bringing a fish to the pile 26%, Fishing 24%, No fish in range inside your border 1%, Worker picking up a fishing rod 0%
- ironmine (55 building-min): Deposit worn out: finding little iron ore 57%, Iron ore pile full, waiting for carriers 19%, Deposit thinning: mining iron ore 10%, Mining iron ore 5%, Bringing iron ore out 4%
- coalmine (53 building-min): Deposit worn out: finding little coal 41%, Deposit thinning: mining coal 29%, Mining coal 18%, Bringing coal out 7%, Came back empty-handed 2%
- smelter (52 building-min): Waiting for coal 79%, Smelting iron 17%, Stacking outside 3%, Output pile full, waiting for carriers 0%, Worker picking up a hammer 0%
- smith (51 building-min): All tool targets met 96%, Waiting for coal 1%, Forging fishing rod 1%, Forging axe 0%, Worker picking up a hammer 0%
- weaponsmith (49 building-min): Waiting for iron 72%, Forging sword 8%, All weapon targets met 8%, Forging spear 4%, Stacking outside 3%
- barracks (48 building-min): Waiting for weapons from the weaponsmith 78%, Weapons on the way 13%, Soldier targets met 8%, Training soldiers 1%, Idle 0%
- farm (31 building-min): Grain pile full, waiting for carriers 63%, Sowing a field 17%, Harvesting grain 13%, Bringing grain to the pile 6%, Worker picking up a scythe 1%
- waterhut (30 building-min): Water pile full, waiting for carriers 74%, Bringing water to the pile 13%, Fetching water 12%, Worker on the way 0%, Idle 0%
- pigfarm (30 building-min): Raising a pig 49%, Output pile full, waiting for carriers 43%, Stacking outside 6%, Waiting for grain and water 1%, Fetching from the pile 1%
- butcher (29 building-min): Output pile full, waiting for carriers 73%, Butchering 13%, Waiting for pigs 8%, Stacking outside 4%, Worker picking up an axe 1%

Building sites, time per state (site-min): Waiting for a digger 9, Leveling the ground 8, Builders at work 8, Waiting for a builder 5.

Build order (placed at min:sec, finished at): house2 0:00→0:50, quarry 0:00→1:06, wood 0:02→1:20, saw 1:20→2:02, guard 1:22→2:39, forest 1:24→2:58, fisher 2:02→3:16, guard 2:40→3:35, guard 3:36→4:25, ironmine 3:58→4:48, coalmine 5:58→6:47, smelter 6:48→7:48, house2 7:48→9:02, smith 8:54→9:30, weaponsmith 10:20→11:21, barracks 11:26→12:04, wood 15:00→15:35, quarry 15:02→16:12, house2 26:00→27:43, farm 27:54→29:14, waterhut 27:56→29:45, pigfarm 29:02→30:24, butcher 29:08→31:11, fisher 29:18→30:39, house2 38:00→39:46.

Demolished or burned: guard (burned) 17:20, guard (burned) 31:59.

Orders given: sendUnit 140, armyTarget 76, place 25, release 25, march 11, attack 6, priority 5, profession 4, weaponKeep 3, sendIn 2, armyReserve 1. None refused.

People changing jobs: new carrier 80, carrier -> soldier 58, carrier -> worker 17, new soldier 4, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1.

People's orders (5373 in all, 5337 done): worker mine coalmine 303, worker rest fisher 284, worker gather fisher 283, carrier haul fish fisher -> coalmine 200, worker eat coalmine 196, worker mine ironmine 174, worker rest forest 163, worker gather forest 162, worker rest farm 159, worker gather farm 158, worker rest coalmine 145, explorer explore 115, worker eat ironmine 107, soldier attack guard 106. None failed.

Failed path searches (who (task) why: times): pioneer (claim 0) cut-off 3, pioneer (claim 1) cut-off 2.

Fights and contact: attacked enemy buildings 8 times (first 16:12); took guard 17:19, hq 20:52, guard 31:23, guard 31:32, guard 31:59; killed bow 4, sword 22; lost people bow 8, sword 22, spear 11; first saw player 1 at 16:00.

Your notes (10 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 6 field soldiers, 3 posts, carriers 33 (27 idle), coal/iron 1/1, sites 0, tips none.
- ×3 16:12–38:02 Attack: 8 field troops against guard 146; threshold 8.
- ×3 20:00–50:00 Adaptive plan: 21 field soldiers, 5 posts, carriers 15 (10 idle), coal/iron 1/1, sites 0, tips stall.
- 20:46 Attack: 16 field troops against hq 1; threshold 16.
- 40:00 Adaptive plan: 15 field soldiers, 5 posts, carriers 13 (7 idle), coal/iron 1/1, sites 0, tips stall/army.


Script: 1889 turns, 8.4 ms average, worst 20 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 11/3/2086/10/30 | 32/6/3063/10/50 |
| 30 | 19/3/2468/19/36 | 59/9/4508/32/84 |
| 45 | 21/4/3233/10/29 | 61/15/8989/21/91 |
| 60 | 22/4/3572/13/35 | 61/15/8989/36/72 |
| first | 17 20 21 22 - - | 9 8 14 15 32 35 |

Soldiers every 5 min: 10 10 10 8 12 19 12 23 10 17 9 13 (original game NPC: 10 10 10 6 17 32 33 38 21 29 33 36).

First army orders (game min:sec): 2:44 sendIn 1 soldiers -> building 107; 15:00 march 5 soldiers -> 200,120; 20:20 armyTarget sword=7; 20:20 armyTarget spear=4; 20:20 armyTarget bow=3; 20:20 armyReserve; 25:00 armyTarget sword=9; 25:00 armyTarget spear=5; 25:00 armyTarget bow=4; 30:34 attack 16 soldiers -> building 37; 33:00 armyTarget sword=8; 33:00 armyTarget spear=4.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 6–7: army: Lost 4 soldiers in the last 5 minutes, and no barracks to train new ones.
- 41 min, 9–60: stall: iron mine: deposit worn out 92% of the last 5 minutes.
- 4 min, 12–15: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 4 min, 17–47: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 2 min, 17–18: stall: fisher: fish pile full, waiting for carriers 56% of the last 5 minutes.
- 2 min, 17–18: settlers: No free settlers and every bed taken: build houses.
- 1 min, 20: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 12 min, 23–40: stall: smelter: waiting for iron ore 58% of the last 5 minutes.
- 15 min, 23–56: stall: weaponsmith: waiting for iron 84% of the last 5 minutes.
- 34 min, 25–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 14 min, 32–56: army: Lost 6 soldiers in the last 5 minutes.
- 5 min, 35–48: stall: quarry: stone pile full, waiting for carriers 96% of the last 5 minutes.
- 5 min, 35–48: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 1 min, 38: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 12 min, 44–60: stall: smelter: waiting for coal 87% of the last 5 minutes.
- 2 min, 49–51: stall: barracks: waiting for weapons from the weaponsmith 77% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 14 | 10 | 9 | 17 | 0 | 0 | 0 | 0 | 0 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 7 | 33 | 2086 | 3594 |
| 30 | 24 | 8 | 16 | 14 | 0 | 0 | 0 | 0 | 0 | 23 | 0 | 3 | 0 | 0 | 0 | 1 | 0 | 10 | 56 | 2468 | 6560 |
| 45 | 40 | 38 | 38 | 22 | 0 | 0 | 6 | 6 | 0 | 13 | 4 | 3 | 0 | 0 | 1 | 0 | 0 | 3 | 52 | 3233 | 9286 |
| 60 | 40 | 38 | 38 | 22 | 0 | 0 | 6 | 6 | 0 | 12 | 10 | 3 | 0 | 0 | 0 | 0 | 0 | 10 | 56 | 3572 | 11024 |

At the end: buildings (built+sites) house2 4, guard 4, quarry 2, wood 2, hq 1, saw 1, forest 1, fisher 1, ironmine 1, coalmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1.
People: carrier 15, worker 12, soldier 7, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 80. Soldiers: sword 6, bow 1.

Goods produced in the game: fish 356, coal 137, stone 76, log 75, ironore 74, iron 64, plank 55, sword 34, spear 11, bow 10, pick 1, axe 1, saw 1, shovel 1, hammer 1, rod 1.
Goods consumed in the game: fish 348, coal 125, stone 78, plank 71, ironore 64, iron 61, log 55, sword 34, spear 11, bow 10, pick 5, hammer 3, axe 2, shovel 2, saw 1, rod 1.
Goods captured in the game: log 16, plank 8, fish 8, pig 8, water 6, grain 6.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (134 building-min): Idle 100%
- quarry (102 building-min): Stone pile full, waiting for carriers 86%, Cutting stone 11%, Bringing stone to the pile 3%, Worker picking up a pickaxe 0%, Working 0%
- wood (102 building-min): Log pile full, waiting for carriers 81%, Felling a tree 15%, Bringing a log to the pile 4%, Worker picking up an axe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 85%, Sawing planks 12%, Stacking outside 3%, Fetching from the pile 0%, Worker picking up a saw 0%
- guard (190 building-min): Idle 99%, Soldiers on the way 0%, Waiting for a swordsman: train one at the barracks 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 64%, Planting a sapling 36%, Worker picking up a shovel 0%, Working 0%
- fisher (57 building-min): Fishing 36%, Fish pile full, waiting for carriers 33%, Bringing a fish to the pile 32%, Worker picking up a fishing rod 0%
- ironmine (53 building-min): Deposit worn out: finding little iron ore 88%, Bringing iron ore out 4%, Needs meat or fish: mining stopped 3%, Came back empty-handed 2%, Fetching food 2%
- coalmine (44 building-min): Deposit thinning: mining coal 49%, Mining coal 26%, Bringing coal out 8%, Deposit worn out: finding little coal 8%, Needs bread or fish: mining stopped 3%
- smelter (43 building-min): Waiting for coal 39%, Waiting for iron ore 34%, Smelting iron 19%, Stacking outside 4%, Waiting for coal and iron ore 1%
- smith (41 building-min): All tool targets met 96%, Worker picking up a hammer 1%, Stacking outside 0%, Forging pickaxe 0%, Forging saw 0%
- weaponsmith (40 building-min): Waiting for iron 75%, Forging sword 11%, Stacking outside 4%, Forging spear 4%, Forging bow 3%
- barracks (39 building-min): Waiting for weapons from the weaponsmith 66%, Weapons on the way 31%, Training soldiers 2%, Soldier targets met 1%

Building sites, time per state (site-min): Leveling the ground 7, Waiting for a digger 7, Builders at work 6, Waiting for a builder 4, Waiting for materials 1.

Build order (placed at min:sec, finished at): house2 0:00→1:21, quarry 0:00→1:38, wood 0:02→1:52, saw 1:54→2:28, guard 1:56→2:44, forest 2:08→3:01, fisher 2:30→3:19, guard 2:44→3:45, guard 3:46→4:47, ironmine 6:12→6:48, coalmine 14:36→15:43, wood 15:00→16:09, quarry 15:02→16:27, smelter 15:44→16:58, house2 17:00→18:39, smith 17:40→19:17, weaponsmith 19:18→20:16, barracks 20:18→21:02, house2 35:00→36:57, guard 38:00→39:01, house2 47:00→48:49.

Demolished or burned: guard (burned) 42:55.

Orders given: sendUnit 145, armyTarget 52, place 21, release 18, attack 9, priority 5, profession 4, weaponKeep 3, sendIn 2, march 2, armyReserve 1. None refused.

People changing jobs: new carrier 80, carrier -> soldier 55, carrier -> worker 12, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1, new soldier 1.

People's orders (4215 in all, 4188 done): worker rest fisher 357, worker gather fisher 356, worker mine coalmine 253, worker mine ironmine 250, carrier haul fish fisher -> ironmine 199, worker eat ironmine 195, worker eat coalmine 153, carrier haul fish fisher -> coalmine 151, worker rest coalmine 140, worker rest forest 137, worker gather forest 136, explorer explore 115, worker rest quarry 78, worker rest wood 77. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×4; failed: can't reach that spot ×1.

Failed path searches (who (task) why: times): pioneer (claim 0) cut-off 17, pioneer (claim 1) cut-off 2.

Fights and contact: attacked enemy buildings 7 times (first 30:34); took hq 41:17, guard 42:17; killed bow 10, sword 15, spear 7; lost people bow 12, sword 29, spear 11; first saw player 2 at 16:00.

Your notes (10 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Adaptive plan: 10 field soldiers, 0 posts, carriers 6 (6 idle), coal/iron 0/0, sites 0, tips none.
- ×4 10:00–50:00 Adaptive plan: 11 field soldiers, 4 posts, carriers 22 (19 idle), coal/iron 1/1, sites 0, tips stall.
- 20:00 Adaptive plan: 4 field soldiers, 3 posts, carriers 31 (23 idle), coal/iron 1/1, sites 1, tips stall/timing.
- ×2 30:34–39:50 Attack: 16 field troops against hq 37; threshold 16.
- ×2 41:29–49:48 Attack: 9 field troops against guard 137; threshold 9.


Script: 1897 turns, 1.8 ms average, worst 16 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 17/3/2225/13/47 | 34/6/2795/10/50 |
| 30 | 22/3/2624/24/41 | 56/4/3641/4/83 |
| 45 | 23/4/3638/13/28 | 56/8/6271/24/65 |
| 60 | 24/4/4011/11/42 | 56/8/6271/31/56 |
| first | 10 12 14 15 - - | 7 8 13 14 36 - |

Soldiers every 5 min: 10 10 13 20 25 24 22 19 13 14 9 11 (original game NPC: 10 10 10 6 4 4 7 14 24 30 31 31).

First army orders (game min:sec): 2:46 sendIn 1 soldiers -> building 104; 13:56 armyTarget sword=5; 13:56 armyTarget spear=3; 13:56 armyReserve; 15:00 march 5 soldiers -> 40,120; 15:16 armyTarget sword=7; 15:16 armyTarget spear=4; 15:16 armyTarget bow=3; 15:56 attack 8 soldiers -> building 138; 19:32 attack 10 soldiers -> building 137; 19:36 armyTarget bow=4; 20:36 armyTarget sword=8.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 6–7: army: Lost 4 soldiers in the last 5 minutes, and no barracks to train new ones.
- 2 min, 10–11: stall: fisher: fish pile full, waiting for carriers 83% of the last 5 minutes.
- 3 min, 10–49: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 5 min, 10–50: stall: quarry: stone pile full, waiting for carriers 100% of the last 5 minutes.
- 5 min, 10–28: settlers: No free settlers and every bed taken: build houses.
- 22 min, 16–56: stall: smelter: waiting for coal 97% of the last 5 minutes.
- 9 min, 17–57: stall: barracks: waiting for weapons from the weaponsmith 96% of the last 5 minutes.
- 15 min, 17–57: stall: weaponsmith: waiting for iron 95% of the last 5 minutes.
- 30 min, 21–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 7 min, 26–51: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 2 min, 29–30: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 9 min, 33–41: stall: gold mine: deposit worn out 96% of the last 5 minutes.
- 25 min, 33–60: stall: goldsmelter: waiting for coal 100% of the last 5 minutes.
- 5 min, 34–48: stall: iron mine: deposit worn out 94% of the last 5 minutes.
- 12 min, 35–55: army: Lost 5 soldiers in the last 5 minutes.
- 1 min, 51: stall: gold mine: gold ore pile full, waiting for carriers 100% of the last 5 minutes.
- 3 min, 58–60: stall: coal mine: deposit worn out 93% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 8 | 8 | 4 | 15 | 0 | 0 | 0 | 0 | 0 | 7 | 13 | 6 | 0 | 0 | 0 | 1 | 0 | 23 | 29 | 2225 | 4369 |
| 30 | 17 | 10 | 19 | 11 | 0 | 0 | 0 | 0 | 0 | 5 | 3 | 1 | 4 | 0 | 0 | 0 | 1 | 13 | 39 | 2624 | 8712 |
| 45 | 24 | 26 | 58 | 11 | 0 | 0 | 0 | 0 | 0 | 6 | 9 | 1 | 14 | 0 | 0 | 0 | 0 | 4 | 57 | 3638 | 12788 |
| 60 | 24 | 26 | 58 | 18 | 0 | 0 | 0 | 0 | 0 | 6 | 12 | 2 | 14 | 0 | 1 | 0 | 0 | 14 | 65 | 4011 | 13217 |

At the end: buildings (built+sites) house2 4, guard 4, quarry 2, wood 2, hq 1, saw 1, forest 1, fisher 1, ironmine 1, coalmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, goldmine 1, goldsmelter 1.
People: carrier 20, worker 14, soldier 5, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 80. Soldiers: sword 5.

Goods produced in the game: fish 364, coal 122, log 84, stone 83, ironore 71, plank 64, iron 59, sword 27, goldore 14, spear 13, bow 9, hammer 2, pick 2, saw 1, shovel 1, rod 1, axe 1.
Goods consumed in the game: fish 352, coal 116, stone 85, plank 80, log 64, ironore 59, iron 57, sword 26, spear 13, bow 9, pick 6, hammer 4, axe 2, shovel 2, saw 1, rod 1.
Goods lost in the game: plank 12, log 8, stone 5.
Goods captured in the game: stone 20, log 8, plank 8.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (147 building-min): Idle 100%
- quarry (102 building-min): Stone pile full, waiting for carriers 77%, Cutting stone 15%, Bringing stone to the pile 8%, Worker picking up a pickaxe 0%, Working 0%
- wood (102 building-min): Log pile full, waiting for carriers 75%, Felling a tree 18%, Bringing a log to the pile 7%, Worker picking up an axe 1%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 79%, Sawing planks 14%, Waiting for logs 4%, Stacking outside 3%, Fetching from the pile 0%
- guard (217 building-min): Idle 100%, Soldiers on the way 0%
- forest (57 building-min): No free ground to plant in range inside your border 69%, Planting a sapling 30%, Worker picking up a shovel 0%
- fisher (56 building-min): Fishing 36%, Fish pile full, waiting for carriers 34%, Bringing a fish to the pile 29%, Worker picking up a fishing rod 0%
- ironmine (52 building-min): Deposit worn out: finding little iron ore 49%, Deposit thinning: mining iron ore 18%, Iron ore pile full, waiting for carriers 11%, Needs meat or fish: mining stopped 10%, Mining iron ore 5%
- coalmine (51 building-min): Deposit thinning: mining coal 48%, Deposit worn out: finding little coal 17%, Mining coal 17%, Needs bread or fish: mining stopped 7%, Bringing coal out 6%
- smelter (50 building-min): Waiting for coal 79%, Smelting iron 15%, Stacking outside 3%, Output pile full, waiting for carriers 1%, Waiting for coal and iron ore 1%
- smith (48 building-min): All tool targets met 96%, Worker picking up a hammer 1%, Forging hammer 1%, Stacking outside 0%, Forging pickaxe 0%
- weaponsmith (46 building-min): Waiting for iron 78%, Forging sword 7%, All weapon targets met 4%, Forging spear 4%, Stacking outside 3%
- barracks (45 building-min): Waiting for weapons from the weaponsmith 75%, Weapons on the way 20%, Soldier targets met 3%, Training soldiers 1%
- goldmine (34 building-min): Gold ore pile full, waiting for carriers 55%, Deposit worn out: finding little gold ore 34%, Needs fish or bread or meat: mining stopped 6%, Worker picking up a pickaxe 2%, Bringing gold ore out 1%
- goldsmelter (33 building-min): Waiting for coal 93%, Waiting for coal and gold ore 6%, Worker picking up a hammer 1%, Idle 0%, Working 0%

Building sites, time per state (site-min): Leveling the ground 8, Builders at work 7, Waiting for a digger 7, Waiting for a builder 4, Waiting for materials 1.

Build order (placed at min:sec, finished at): house2 0:00→1:06, quarry 0:00→1:22, wood 0:02→1:35, saw 1:36→2:09, guard 1:38→2:45, forest 1:52→3:02, fisher 2:16→3:35, guard 3:02→3:58, guard 3:58→4:38, ironmine 7:28→8:08, coalmine 8:16→8:45, smelter 8:46→9:47, house2 9:48→11:11, smith 10:56→11:57, weaponsmith 12:34→13:50, barracks 13:54→14:34, wood 15:00→15:59, quarry 15:26→16:31, goldmine 25:00→25:52, goldsmelter 25:54→26:48, house2 26:22→28:37, guard 29:10→30:24, house2 49:00→51:39.

Demolished or burned: guard (burned) 28:27, guard (burned) 28:33.

Orders given: sendUnit 137, armyTarget 53, place 23, release 8, priority 5, attack 5, profession 4, march 4, sendIn 3, weaponKeep 3, armyReserve 1. None refused.

People changing jobs: new carrier 80, carrier -> soldier 48, carrier -> worker 14, carrier -> explorer 2, new soldier 2, carrier -> geologist 1, carrier -> pioneer 1.

People's orders (4297 in all, 4267 done): worker rest fisher 364, worker gather fisher 364, worker mine coalmine 267, worker mine ironmine 210, carrier haul fish fisher -> coalmine 181, worker eat coalmine 177, worker eat ironmine 155, carrier haul fish fisher -> ironmine 153, worker rest coalmine 126, worker rest forest 125, worker gather forest 124, explorer explore 115, worker rest wood 86, worker rest quarry 85. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×8.

Fights and contact: attacked enemy buildings 7 times (first 15:56); took guard 16:58, guard 20:54, hq 37:22; killed bow 3, sword 30; lost people sword 22, bow 12, spear 13; first saw player 1 at 16:00.

Your notes (10 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Adaptive plan: 10 field soldiers, 0 posts, carriers 6 (6 idle), coal/iron 0/0, sites 0, tips none.
- 10:00 Adaptive plan: 6 field soldiers, 3 posts, carriers 14 (0 idle), coal/iron 1/1, sites 1, tips stall/settlers.
- ×3 15:56–49:18 Attack: 8 field troops against guard 79; threshold 8.
- ×3 20:00–50:00 Adaptive plan: 8 field soldiers, 4 posts, carriers 3 (0 idle), coal/iron 1/1, sites 1, tips stall.
- 30:00 Adaptive plan: 20 field soldiers, 4 posts, carriers 19 (14 idle), coal/iron 1/1, sites 1, tips land/stall.
- 35:44 Attack: 16 field troops against hq 1; threshold 16.


Script: 1946 turns, 1.2 ms average, worst 16 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 16/1/1624/18/32 | 24/6/2776/10/40 |
| 30 | 24/2/2336/13/50 | 30/5/2893/5/50 |
| 45 | 25/3/2706/13/50 | 41/5/3414/5/69 |
| 60 | 26/4/3085/5/50 | 63/6/4534/11/92 |
| first | 6 8 11 12 - - | 7 9 23 25 - - |

Soldiers every 5 min: 10 10 18 13 13 13 13 13 13 12 5 5 (original game NPC: 10 10 10 5 5 5 5 5 5 5 6 11).

First army orders (game min:sec): 2:40 sendIn 1 soldiers -> building 100; 10:44 armyTarget sword=5; 10:44 armyTarget spear=3; 10:44 armyReserve; 12:24 armyTarget sword=6; 12:24 armyTarget bow=3; 13:04 armyTarget spear=4; 13:44 armyTarget sword=7; 14:24 armyTarget bow=4; 15:00 march 5 soldiers -> 200,120; 15:04 armyTarget sword=8; 15:44 armyTarget spear=5.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 1 min, 17: stall: sawmill: output pile full, waiting for carriers 59% of the last 5 minutes.
- 4 min, 17–20: settlers: No free settlers and every bed taken: build houses.
- 35 min, 18–55: stall: barracks: waiting for weapons from the weaponsmith 100% of the last 5 minutes.
- 2 min, 18–19: stall: water hut: water pile full, waiting for carriers 61% of the last 5 minutes.
- 42 min, 19–60: stall: weaponsmith: waiting for coal 100% of the last 5 minutes.
- 8 min, 19–55: army: Lost 7 soldiers in the last 5 minutes.
- 1 min, 20: stall: iron mine: needs meat or fish 60% of the last 5 minutes.
- 1 min, 21: stall: butcher: waiting for pigs 77% of the last 5 minutes.
- 39 min, 22–60: stall: coal mine: needs bread or fish 100% of the last 5 minutes.
- 8 min, 34–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 11 | 11 | 7 | 4 | 0 | 0 | 0 | 0 | 0 | 6 | 0 | 18 | 0 | 0 | 0 | 0 | 0 | 10 | 24 | 1624 | 2956 |
| 30 | 24 | 16 | 18 | 16 | 8 | 12 | 19 | 13 | 6 | 7 | 11 | 20 | 7 | 0 | 0 | 0 | 0 | 21 | 89 | 2336 | 6776 |
| 45 | 24 | 16 | 18 | 16 | 8 | 12 | 20 | 14 | 6 | 7 | 14 | 20 | 14 | 0 | 0 | 0 | 0 | 25 | 102 | 2706 | 7882 |
| 60 | 24 | 16 | 18 | 16 | 8 | 12 | 20 | 14 | 6 | 7 | 14 | 20 | 14 | 0 | 0 | 0 | 0 | 25 | 102 | 3085 | 8316 |

At the end: buildings (built+sites) guard 4, house2 2, wood 2, hq 1, quarry 1, saw 1, forest 1, fisher 1, coalmine 1, ironmine 1, smelter 1, house 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, pigfarm 1, butcher 1, goldmine 1, goldsmelter 1.
People: carrier 25, worker 17, soldier 2, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 50. Soldiers: sword 1, spear 1.

Goods produced in the game: fish 117, log 92, stone 80, plank 72, coal 63, water 55, grain 55, ironore 52, pig 41, iron 38, meat 27, goldore 14, spear 5, sword 4, hammer 2, axe 2, saw 1, shovel 1, rod 1, bow 1, pick 1.
Goods consumed in the game: fish 107, stone 90, plank 88, log 72, coal 56, water 41, grain 41, ironore 38, pig 27, iron 18, meat 15, pick 5, spear 5, hammer 4, sword 4, axe 3, shovel 2, saw 1, rod 1, scythe 1, bow 1.
Goods captured in the game: stone 10, plank 8, bread 8, water 6, flour 6.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (99 building-min): Idle 100%
- quarry (59 building-min): Stone pile full, waiting for carriers 56%, Cutting stone 27%, Bringing stone to the pile 17%, Worker picking up a pickaxe 0%, Working 0%
- wood (102 building-min): Log pile full, waiting for carriers 76%, Felling a tree 18%, Bringing a log to the pile 5%, Worker picking up an axe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 77%, Sawing planks 16%, Stacking outside 3%, Waiting for logs 3%, Fetching from the pile 0%
- guard (127 building-min): Waiting for a swordsman: train one at the barracks 55%, Idle 45%, Soldiers on the way 0%
- forest (57 building-min): No free ground to plant in range inside your border 60%, Planting a sapling 39%, Worker picking up a shovel 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 64%, Fishing 18%, Bringing a fish to the pile 18%, Worker picking up a fishing rod 0%, Working 0%
- coalmine (56 building-min): Needs bread or fish: mining stopped 73%, Mining coal 14%, Deposit thinning: mining coal 9%, Bringing coal out 3%, Worker picking up a pickaxe 0%
- ironmine (56 building-min): Iron ore pile full, waiting for carriers 52%, Deposit worn out: finding little iron ore 14%, Deposit thinning: mining iron ore 13%, Needs meat or fish: mining stopped 10%, Mining iron ore 6%
- smelter (54 building-min): Output pile full, waiting for carriers 76%, Smelting iron 9%, Waiting for iron ore 7%, Waiting for coal 4%, Stacking outside 2%
- house (54 building-min): Idle 100%
- smith (52 building-min): All tool targets met 97%, Forging hammer 1%, Forging axe 1%, Stacking outside 0%, Forging saw 0%
- weaponsmith (50 building-min): Waiting for coal 89%, All weapon targets met 7%, Forging spear 1%, Forging sword 1%, Worker picking up a hammer 1%
- barracks (48 building-min): Waiting for weapons from the weaponsmith 93%, Weapons on the way 4%, Soldier targets met 2%, Training soldiers 0%, Idle 0%
- farm (46 building-min): Grain pile full, waiting for carriers 78%, Sowing a field 10%, Harvesting grain 7%, Bringing grain to the pile 4%, Worker picking up a scythe 1%
- waterhut (45 building-min): Water pile full, waiting for carriers 84%, Bringing water to the pile 9%, Fetching water 7%, Worker on the way 0%, Working 0%
- pigfarm (42 building-min): Output pile full, waiting for carriers 73%, Raising a pig 22%, Stacking outside 3%, Waiting for water 1%, Waiting for grain and water 1%
- butcher (41 building-min): Output pile full, waiting for carriers 87%, Waiting for pigs 5%, Butchering 5%, Stacking outside 2%, Worker picking up an axe 1%
- goldmine (32 building-min): Gold ore pile full, waiting for carriers 74%, Deposit worn out: finding little gold ore 19%, Deposit thinning: mining gold ore 2%, Mining gold ore 2%, Worker picking up a pickaxe 1%
- goldsmelter (32 building-min): Waiting for coal 99%, Worker picking up a hammer 1%, Working 0%

Building sites, time per state (site-min): Waiting for a digger 7, Builders at work 7, Leveling the ground 7, Waiting for a builder 5.

Build order (placed at min:sec, finished at): house2 0:00→1:09, quarry 0:02→1:26, wood 0:04→1:39, saw 1:40→2:11, guard 1:42→2:39, forest 1:56→2:57, fisher 2:26→3:24, coalmine 3:08→3:49, ironmine 3:10→4:05, smelter 4:42→5:45, house 5:46→6:26, smith 7:04→7:53, weaponsmith 9:10→10:13, barracks 10:42→11:54, farm 13:04→14:31, waterhut 14:08→15:12, wood 15:00→15:59, pigfarm 16:40→17:47, butcher 17:48→18:52, house2 17:48→20:21, goldmine 26:20→27:32, goldsmelter 27:32→28:12, guard 41:40→42:45, guard 50:00→51:07.

Orders given: sendUnit 136, armyTarget 30, place 24, priority 5, profession 4, weaponKeep 3, release 2, sendIn 1, armyReserve 1, march 1, attack 1. Refused (order: reason, times): place: Another building is in the way ×1.

People changing jobs: new carrier 50, carrier -> worker 17, carrier -> soldier 10, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1.

People's orders (3254 in all, 3231 done): worker rest forest 130, worker gather forest 129, worker rest fisher 118, worker gather fisher 117, worker rest farm 116, explorer explore 115, worker gather farm 115, worker mine coalmine 104, worker mine ironmine 97, worker rest wood 94, worker gather wood 92, worker rest quarry 81, worker gather quarry 80, carrier haul log wood -> saw 76. None failed.

Failed path searches (who (task) why: times): pioneer (claim 1) cut-off 1.

Fights and contact: attacked enemy buildings 2 times (first 15:52); took guard 16:54; killed bow 4, sword 12, spear 1; lost people sword 8, bow 4, spear 3; first saw player 2 at 16:00.

Your notes (7 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 8 field soldiers, 1 posts, carriers 23 (19 idle), coal/iron 1/1, sites 1, tips none.
- 15:52 Attack: 11 field troops against guard 134; threshold 9.
- 20:00 Adaptive plan: 10 field soldiers, 2 posts, carriers 7 (0 idle), coal/iron 1/1, sites 1, tips stall/army/settlers.
- ×3 30:00–50:00 Adaptive plan: 9 field soldiers, 3 posts, carriers 25 (25 idle), coal/iron 1/1, sites 0, tips stall.


Script: 1860 turns, 1.9 ms average, worst 19 ms, 0 over 0.3 s, 0 errors. Orders refused: place 1 of 25.

### Map 20261030: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 19/3/2220/19/31 | 25/6/3049/10/40 |
| 30 | 23/4/2828/19/37 | 55/4/3494/4/82 |
| 45 | 24/5/3588/25/25 | 47/3/3493/3/64 |
| 60 | 24/5/3909/24/25 | 47/3/3493/3/60 |
| first | 7 8 10 12 - - | 14 15 16 22 - - |

Soldiers every 5 min: 10 10 19 18 16 19 24 28 25 24 24 24 (original game NPC: 10 10 10 5 5 4 4 4 3 3 3 3).

First army orders (game min:sec): 2:46 sendIn 1 soldiers -> building 100; 10:04 armyReserve; 10:24 armyTarget sword=5; 10:24 armyTarget spear=3; 11:24 armyTarget sword=4; 11:24 armyTarget spear=2; 11:44 armyTarget sword=5; 11:44 armyTarget spear=3; 12:04 armyTarget bow=3; 12:24 armyTarget sword=6; 13:04 armyTarget spear=4; 13:44 armyTarget sword=7.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 6–7: army: Lost 4 soldiers in the last 5 minutes, and no barracks to train new ones.
- 2 min, 11–12: stall: sawmill: waiting for logs 51% of the last 5 minutes.
- 5 min, 16–20: stall: goldsmelter: waiting for coal 80% of the last 5 minutes.
- 2 min, 17–18: settlers: No free settlers and every bed taken: build houses.
- 1 min, 18: stall: gold mine: gold ore pile full, waiting for carriers 59% of the last 5 minutes.
- 38 min, 19–60: stall: weaponsmith: waiting for coal 100% of the last 5 minutes.
- 7 min, 20–47: stall: barracks: waiting for weapons from the weaponsmith 94% of the last 5 minutes.
- 26 min, 21–46: stall: iron mine: deposit worn out 93% of the last 5 minutes.
- 35 min, 26–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 2 min, 45–46: army: Lost 5 soldiers in the last 5 minutes.
- 13 min, 48–60: stall: coal mine: needs bread or fish 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 3 | 8 | 8 | 17 | 0 | 0 | 0 | 0 | 0 | 7 | 5 | 17 | 13 | 0 | 0 | 0 | 1 | 7 | 38 | 2220 | 4422 |
| 30 | 24 | 8 | 16 | 16 | 0 | 0 | 0 | 0 | 0 | 21 | 6 | 20 | 14 | 8 | 0 | 0 | 0 | 10 | 74 | 2828 | 9392 |
| 45 | 40 | 35 | 47 | 16 | 3 | 0 | 1 | 0 | 6 | 18 | 9 | 20 | 14 | 8 | 0 | 0 | 0 | 2 | 81 | 3588 | 11380 |
| 60 | 40 | 44 | 57 | 16 | 3 | 0 | 1 | 0 | 6 | 18 | 14 | 20 | 14 | 8 | 0 | 0 | 0 | 3 | 86 | 3909 | 13010 |

At the end: buildings (built+sites) guard 5, house2 2, quarry 2, wood 2, hq 1, saw 1, forest 1, fisher 1, ironmine 1, coalmine 1, smelter 1, house 1, smith 1, weaponsmith 1, barracks 1, goldmine 1, goldsmelter 1.
People: soldier 17, worker 14, carrier 3, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 50. Soldiers: sword 8, bow 4, spear 5.

Goods produced in the game: fish 309, coal 132, ironore 77, log 75, stone 71, iron 63, plank 55, goldore 22, sword 17, spear 10, bow 8, gold 8, hammer 2, pick 2, saw 1, shovel 1, rod 1, axe 1.
Goods consumed in the game: fish 299, coal 114, stone 73, plank 71, ironore 63, log 55, iron 43, sword 17, spear 10, bow 8, goldore 8, pick 6, hammer 4, axe 2, shovel 2, saw 1, rod 1.
Goods lost in the game: stone 6, flour 6, plank 5, bread 3.
Goods captured in the game: stone 29, plank 26, log 16, flour 12, bread 6, water 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (101 building-min): Idle 100%
- quarry (103 building-min): Stone pile full, waiting for carriers 83%, Cutting stone 11%, Bringing stone to the pile 5%, Worker picking up a pickaxe 0%, Working 0%
- wood (103 building-min): Log pile full, waiting for carriers 80%, Felling a tree 15%, Bringing a log to the pile 5%, Worker picking up an axe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 77%, Sawing planks 12%, Waiting for logs 8%, Stacking outside 3%, Fetching from the pile 0%
- guard (229 building-min): Idle 92%, Waiting for a swordsman: train one at the barracks 8%, Soldiers on the way 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 68%, Planting a sapling 32%, Worker picking up a shovel 0%, Working 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 38%, Fishing 32%, Bringing a fish to the pile 29%, Worker picking up a fishing rod 0%, No fish in range inside your border 0%
- ironmine (55 building-min): Deposit worn out: finding little iron ore 51%, Iron ore pile full, waiting for carriers 26%, Deposit thinning: mining iron ore 11%, Mining iron ore 4%, Bringing iron ore out 4%
- coalmine (55 building-min): Deposit thinning: mining coal 40%, Needs bread or fish: mining stopped 32%, Mining coal 18%, Bringing coal out 7%, Came back empty-handed 1%
- smelter (54 building-min): Output pile full, waiting for carriers 75%, Smelting iron 15%, Waiting for coal 6%, Stacking outside 3%, Worker picking up a hammer 0%
- house (53 building-min): Idle 100%
- smith (52 building-min): All tool targets met 95%, Waiting for coal 2%, Forging hammer 1%, Forging pickaxe 1%, Stacking outside 0%
- weaponsmith (50 building-min): Waiting for coal 76%, All weapon targets met 12%, Forging sword 4%, Forging spear 2%, Forging bow 2%
- barracks (49 building-min): Waiting for weapons from the weaponsmith 71%, Weapons on the way 24%, Soldier targets met 4%, Training soldiers 1%
- goldmine (48 building-min): Gold ore pile full, waiting for carriers 84%, Deposit thinning: mining gold ore 6%, Deposit worn out: finding little gold ore 5%, Mining gold ore 3%, Bringing gold ore out 1%
- goldsmelter (47 building-min): Output pile full, waiting for carriers 85%, Waiting for coal 12%, Smelting gold 2%, Stacking outside 0%, Worker picking up a hammer 0%

Building sites, time per state (site-min): Builders at work 6, Waiting for a digger 6, Leveling the ground 4, Waiting for a builder 4.

Build order (placed at min:sec, finished at): house2 0:00→0:55, quarry 0:00→1:14, wood 0:02→1:27, saw 1:28→2:05, guard 1:30→2:45, forest 1:42→3:04, fisher 2:06→3:24, guard 2:46→3:46, guard 3:48→4:32, ironmine 4:10→5:00, coalmine 4:58→5:26, smelter 5:28→6:09, house 6:10→6:46, smith 6:56→7:33, weaponsmith 8:46→9:56, barracks 10:02→11:07, goldmine 11:08→11:47, goldsmelter 12:04→13:05, wood 15:00→15:36, quarry 15:02→15:55, house2 17:00→18:22.

Demolished or burned: guard (burned) 23:29.

Orders given: sendUnit 136, armyTarget 49, place 21, release 17, march 7, priority 5, profession 4, attack 4, weaponKeep 3, sendIn 2, armyReserve 1. None refused.

People changing jobs: new carrier 50, carrier -> soldier 35, new soldier 22, carrier -> worker 14, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1.

People's orders (3953 in all, 3907 done): worker rest fisher 310, worker gather fisher 309, worker mine coalmine 235, worker mine ironmine 213, worker eat ironmine 154, carrier haul fish fisher -> ironmine 152, worker rest forest 133, carrier haul fish fisher -> coalmine 133, worker rest coalmine 133, worker eat coalmine 133, worker gather forest 132, explorer explore 115, worker rest ironmine 79, worker rest wood 77. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×4.

Fights and contact: attacked enemy buildings 4 times (first 15:48); took guard 16:45, guard 25:20, hq 38:00, guard 41:31; killed bow 25, sword 12; lost people sword 10, bow 7, spear 4; first saw player 1 at 16:00.

Your notes (10 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 6 field soldiers, 3 posts, carriers 22 (11 idle), coal/iron 1/1, sites 0, tips none.
- ×3 15:48–41:17 Attack: 10 field troops against guard 103; threshold 8.
- ×4 20:00–50:00 Adaptive plan: 17 field soldiers, 5 posts, carriers 3 (3 idle), coal/iron 1/1, sites 0, tips stall.
- 37:08 Attack: 15 field troops against hq 1; threshold 15.


Script: 1896 turns, 0.9 ms average, worst 21 ms, 0 over 0.3 s, 0 errors. Orders refused: none.
