# Tournament: chatgpt

Game version 207. Written for: chatgpt 207.

- chatgpt: hearthlands-ai-challenge, commit db03d8a

Maps 20261030, 777, 4242, 31, each twice (sides swapped), up to 60 game minutes (1x). 59 s.

Each game ends with the script's own game log: what it may know (its own side, and what happened to it or what it saw). Times are game min:sec.

| Opponent | Won | Lost | Undecided |
|---|---|---|---|
| original game NPC | 1 | 0 | 7 |

## Games

Each row: buildings / military / land tiles / soldiers / people at the minute shown. First: game minute of the first smelter, smith, weaponsmith, barracks, tower, castle (- = never).

### Map 31: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 19/1/1616/15/35 | 31/6/3173/10/50 |
| 30 | 22/1/2051/15/42 | 61/8/4510/14/81 |
| 45 | 25/2/2819/5/41 | 62/9/5786/35/68 |
| 60 | 25/2/3222/9/34 | 62/9/6577/35/66 |
| first | 5 7 9 9 - - | 8 9 17 17 - - |

Soldiers every 5 min: 10 10 15 13 13 15 11 5 5 8 5 9 (original game NPC: 10 10 10 5 8 14 17 23 35 35 35 35).

First army orders (game min:sec): 2:26 sendIn 1 soldiers -> building 90; 8:26 armyTarget sword=5; 8:26 armyTarget spear=3; 8:26 armyReserve; 10:06 armyTarget sword=4; 10:06 armyTarget spear=2; 10:26 armyTarget sword=5; 10:26 armyTarget spear=3; 14:06 armyTarget bow=3; 14:26 armyTarget sword=6; 14:46 armyTarget spear=4; 15:00 march 5 soldiers -> 200,120.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 14 min, 6–27: stall: fisher: no fish in range inside your border 86% of the last 5 minutes.
- 2 min, 9–10: stall: smith: waiting for coal 84% of the last 5 minutes.
- 11 min, 9–44: stall: iron mine: needs meat or fish 100% of the last 5 minutes.
- 34 min, 11–60: stall: barracks: waiting for weapons from the weaponsmith 91% of the last 5 minutes.
- 2 min, 11–12: stall: weaponsmith: waiting for coal 95% of the last 5 minutes.
- 37 min, 13–55: stall: smelter: waiting for iron ore 100% of the last 5 minutes.
- 1 min, 19: stall: sawmill: output pile full, waiting for carriers 87% of the last 5 minutes.
- 2 min, 19–20: settlers: No free settlers and every bed taken: build houses.
- 28 min, 20–60: stall: weaponsmith: waiting for iron 87% of the last 5 minutes.
- 1 min, 20: stall: mill: output pile full, waiting for carriers 75% of the last 5 minutes.
- 29 min, 24–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 7 min, 28–40: army: Lost 6 soldiers in the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 5 | 8 | 6 | 3 | 2 | 0 | 14 | 8 | 14 | 18 | 0 | 2 | 0 | 0 | 0 | 1 | 0 | 9 | 34 | 1616 | 2872 |
| 30 | 25 | 11 | 22 | 5 | 12 | 0 | 14 | 16 | 14 | 26 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 18 | 86 | 2051 | 6843 |
| 45 | 25 | 11 | 22 | 8 | 14 | 0 | 14 | 16 | 14 | 31 | 0 | 4 | 14 | 8 | 0 | 0 | 0 | 14 | 101 | 2819 | 9105 |
| 60 | 23 | 13 | 23 | 8 | 14 | 0 | 14 | 16 | 14 | 31 | 0 | 4 | 14 | 8 | 0 | 0 | 0 | 1 | 96 | 3222 | 9780 |

At the end: buildings (built+sites) guard 2+1, house2 2, quarry 2, wood 2, hq 1, saw 1, forest 1, fisher 1, ironmine 1, coalmine 1, smelter 1, house 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, mill 1, bakery 1, goldmine 1, goldsmelter 1.
People: worker 18, carrier 8, soldier 5, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 50. Soldiers: sword 5.

Goods produced in the game: coal 113, fish 107, log 89, stone 87, plank 71, grain 69, water 53, flour 53, ironore 39, iron 39, bread 39, goldore 22, sword 17, gold 8, spear 7, hammer 2, pick 2, bow 2, saw 1, shovel 1, rod 1, axe 1.
Goods consumed in the game: fish 105, stone 88, plank 85, coal 82, log 71, grain 53, ironore 39, water 39, flour 39, iron 35, bread 25, sword 17, goldore 8, spear 7, pick 6, hammer 4, axe 2, shovel 2, bow 2, saw 1, rod 1, scythe 1.
Goods captured in the game: stone 6, plank 3, log 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (98 building-min): Idle 100%
- quarry (102 building-min): Stone pile full, waiting for carriers 78%, Cutting stone 15%, Bringing stone to the pile 7%, Worker picking up a pickaxe 0%, Working 0%
- wood (103 building-min): Log pile full, waiting for carriers 76%, Felling a tree 17%, Bringing a log to the pile 6%, Worker picking up an axe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 76%, Sawing planks 15%, Waiting for logs 4%, Stacking outside 3%, Fetching from the pile 0%
- guard (85 building-min): Idle 97%, Waiting for a swordsman: train one at the barracks 2%, Soldiers on the way 1%
- forest (57 building-min): No free ground to plant in range inside your border 66%, Planting a sapling 33%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- fisher (57 building-min): No fish in range inside your border 82%, Fishing 11%, Bringing a fish to the pile 6%, Worker picking up a fishing rod 0%, Idle 0%
- ironmine (57 building-min): Needs meat or fish: mining stopped 65%, Deposit worn out: finding little iron ore 21%, Deposit thinning: mining iron ore 7%, Mining iron ore 4%, Bringing iron ore out 2%
- coalmine (56 building-min): Coal pile full, waiting for carriers 53%, Mining coal 24%, Deposit thinning: mining coal 8%, Needs bread or fish: mining stopped 7%, Bringing coal out 5%
- smelter (55 building-min): Waiting for iron ore 87%, Smelting iron 9%, Stacking outside 2%, Waiting for coal 1%, Worker picking up a hammer 0%
- house (55 building-min): Idle 100%
- smith (54 building-min): All tool targets met 90%, Waiting for coal 6%, Worker picking up a hammer 1%, Forging pickaxe 0%, Forging hammer 0%
- weaponsmith (52 building-min): Waiting for iron 80%, Waiting for coal 10%, Forging sword 4%, Forging spear 2%, Stacking outside 1%
- barracks (51 building-min): Waiting for weapons from the weaponsmith 93%, Weapons on the way 5%, Soldier targets met 2%, Training soldiers 1%, Idle 0%
- farm (49 building-min): Grain pile full, waiting for carriers 78%, Sowing a field 11%, Harvesting grain 7%, Bringing grain to the pile 3%, Worker picking up a scythe 0%
- waterhut (48 building-min): Water pile full, waiting for carriers 90%, Fetching water 6%, Bringing water to the pile 4%, Working 0%
- mill (47 building-min): Output pile full, waiting for carriers 90%, Grinding flour 6%, Stacking outside 3%, Fetching from the pile 0%, Waiting for grain 0%
- bakery (46 building-min): Output pile full, waiting for carriers 78%, Baking bread 19%, Stacking outside 2%, Fetching from the pile 0%, Waiting for water 0%
- goldmine (24 building-min): Gold ore pile full, waiting for carriers 70%, Deposit thinning: mining gold ore 14%, Deposit worn out: finding little gold ore 4%, Mining gold ore 4%, Worker picking up a pickaxe 4%
- goldsmelter (23 building-min): Output pile full, waiting for carriers 91%, Smelting gold 4%, Worker picking up a hammer 4%, Stacking outside 1%, Working 0%

Building sites, time per state (site-min): Builders at work 7, Leveling the ground 6, Waiting for a digger 5, Waiting for a builder 3, Waiting for materials 2.

Build order (placed at min:sec, finished at): house2 0:00→0:57, quarry 0:00→1:28, wood 0:02→1:11, saw 1:12→1:58, guard 1:14→2:25, forest 1:44→2:44, fisher 2:06→3:03, ironmine 2:46→3:20, coalmine 3:00→3:35, smelter 3:46→4:41, house 4:42→5:23, smith 5:34→6:21, weaponsmith 7:12→8:05, barracks 8:24→8:59, farm 10:00→10:52, waterhut 11:04→12:06, mill 11:52→12:38, bakery 13:12→13:48, wood 15:00→15:36, quarry 15:02→16:08, house2 19:00→21:07, guard 33:20→34:10, goldmine 34:54→35:56, goldsmelter 35:58→37:08, guard 59:40→never.

Demolished or burned: guard (burned) 16:02, guard (burned) 18:44.

Orders given: sendUnit 137, armyTarget 51, place 25, release 24, priority 5, attack 5, profession 4, sendIn 3, weaponKeep 3, march 2, armyReserve 1. None refused.

People changing jobs: new carrier 50, carrier -> soldier 26, carrier -> worker 18, carrier -> explorer 2, new soldier 2, carrier -> geologist 1, carrier -> pioneer 1.

People's orders (3742 in all, 3700 done): worker rest farm 149, worker gather farm 148, worker mine coalmine 139, worker rest forest 133, worker gather forest 132, explorer explore 115, worker rest coalmine 115, worker rest fisher 108, worker gather fisher 107, worker mine ironmine 105, worker rest wood 91, worker gather wood 90, worker rest quarry 88, worker gather quarry 87. Not done (outcome: times): failed: no way (carrier (haul 0) target-off-land) ×9; ended: the person is gone (became a soldier, defeated or removed) ×3.

Failed path searches (who (task) why: times): carrier (haul 0) target-off-land 9, pioneer (claim 1) cut-off 1.

Fights and contact: attacked enemy buildings 4 times (first 15:48); took guard 16:01, guard 16:51; killed sword 14, bow 4, spear 1; lost people sword 15, bow 5, spear 7; first saw player 2 at 16:00.

Your notes (9 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Adaptive plan: 10 field soldiers, 0 posts, carriers 6 (6 idle), coal/iron 0/0, sites 0, tips none.
- ×3 10:00–50:00 Adaptive plan: 4 field soldiers, 2 posts, carriers 12 (8 idle), coal/iron 1/1, sites 0, tips stall.
- ×3 15:48–49:46 Attack: 3 field troops against guard 301; threshold 3.
- 20:00 Adaptive plan: 11 field soldiers, 1 posts, carriers 6 (0 idle), coal/iron 1/1, sites 1, tips stall/settlers.
- 40:00 Adaptive plan: 1 field soldiers, 2 posts, carriers 15 (14 idle), coal/iron 1/1, sites 0, tips stall/army.


Script: 1879 turns, 1.0 ms average, worst 15 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 31: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 15/1/1589/25/25 | 33/6/2856/10/60 |
| 30 | 25/2/2106/12/29 | 49/4/3395/4/65 |
| 45 | 30/5/2672/26/47 | 50/1/4078/1/59 |
| 60 | 29/4/4044/13/29 | 67/8/6815/35/112 |
| first | 5 7 9 11 50 - | 7 8 14 16 54 56 |

Soldiers every 5 min: 10 10 25 21 17 12 12 21 26 31 12 13 (original game NPC: 10 10 10 5 3 4 3 1 1 2 27 35).

First army orders (game min:sec): 2:18 sendIn 1 soldiers -> building 90; 9:28 armyTarget sword=5; 9:28 armyTarget spear=3; 9:28 armyReserve; 10:28 armyTarget sword=6; 10:28 armyTarget bow=3; 10:48 armyTarget spear=4; 11:08 armyTarget sword=7; 11:28 armyTarget bow=4; 11:48 armyTarget sword=8; 12:08 armyTarget spear=5; 12:28 armyTarget sword=9.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 5 min, 12–16: stall: smelter: waiting for coal 57% of the last 5 minutes.
- 6 min, 14–59: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 8 min, 14–26: settlers: No free settlers and every bed taken: build houses.
- 27 min, 16–57: stall: barracks: waiting for weapons from the weaponsmith 84% of the last 5 minutes.
- 3 min, 18–26: stall: iron mine: needs meat or fish 100% of the last 5 minutes.
- 19 min, 20–59: army: Lost 4 soldiers in the last 5 minutes.
- 16 min, 21–51: stall: smelter: waiting for iron ore 85% of the last 5 minutes.
- 3 min, 21–24: stall: weaponsmith: waiting for coal 100% of the last 5 minutes.
- 4 min, 22–34: stall: water hut: water pile full, waiting for carriers 100% of the last 5 minutes.
- 1 min, 22: stall: mill: output pile full, waiting for carriers 79% of the last 5 minutes.
- 9 min, 25–60: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 21 min, 25–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 3 min, 27–29: stall: sawmill: waiting for logs 100% of the last 5 minutes.
- 7 min, 28–59: stall: quarry: stone pile full, waiting for carriers 100% of the last 5 minutes.
- 3 min, 32–34: weapons: 6 weapons lie unused: the barracks needs free settlers (build houses).
- 3 min, 32–34: stall: farm: grain pile full, waiting for carriers 100% of the last 5 minutes.
- 2 min, 35–36: stall: bakery: waiting for flour 72% of the last 5 minutes.
- 2 min, 35–36: stall: butcher: waiting for pigs 73% of the last 5 minutes.
- 20 min, 37–57: stall: iron mine: deposit worn out 96% of the last 5 minutes.
- 2 min, 52–53: stall: weaponsmith: waiting for iron 87% of the last 5 minutes.
- 1 min, 60: stall: fisher: fish pile full, waiting for carriers 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 12 | 14 | 12 | 5 | 0 | 0 | 0 | 0 | 0 | 11 | 6 | 10 | 0 | 0 | 1 | 0 | 0 | 0 | 22 | 1589 | 2975 |
| 30 | 20 | 5 | 19 | 15 | 0 | 0 | 20 | 22 | 8 | 21 | 8 | 5 | 0 | 0 | 4 | 0 | 1 | 0 | 94 | 2106 | 9198 |
| 45 | 29 | 11 | 19 | 16 | 12 | 12 | 20 | 22 | 14 | 26 | 1 | 6 | 0 | 0 | 0 | 0 | 0 | 20 | 110 | 2672 | 13866 |
| 60 | 24 | 16 | 21 | 16 | 10 | 10 | 20 | 21 | 14 | 12 | 4 | 6 | 0 | 0 | 0 | 2 | 1 | 0 | 105 | 4044 | 17818 |

At the end: buildings (built+sites) house2 3+1, guard 3, quarry 2, wood 2, house 2, hq 1, saw 1, forest 1, fisher 1, coalmine 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, mill 1, bakery 1, pigfarm 1, butcher 1, tower 1.
People: worker 18, soldier 7, carrier 3, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 80. Soldiers: sword 6, bow 1.

Goods produced in the game: coal 160, fish 155, grain 144, water 129, stone 108, log 105, plank 90, ironore 81, iron 77, pig 63, flour 60, meat 50, bread 46, sword 36, spear 16, bow 12, axe 2, saw 1, shovel 1, rod 1, hammer 1, pick 1.
Goods consumed in the game: coal 148, fish 145, grain 123, water 109, stone 108, plank 101, log 90, ironore 77, iron 71, pig 50, flour 46, meat 40, sword 36, bread 36, spear 14, bow 11, pick 5, axe 3, hammer 3, shovel 2, saw 1, rod 1, scythe 1.
Goods captured in the game: log 5, plank 3, stone 3.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (105 building-min): Idle 100%
- quarry (102 building-min): Stone pile full, waiting for carriers 72%, Cutting stone 18%, Bringing stone to the pile 9%, Worker picking up a pickaxe 0%, Idle 0%
- wood (103 building-min): Log pile full, waiting for carriers 73%, Felling a tree 20%, Bringing a log to the pile 6%, Worker picking up an axe 0%, Idle 0%
- saw (58 building-min): Output pile full, waiting for carriers 58%, Sawing planks 20%, Waiting for logs 18%, Stacking outside 4%, Fetching from the pile 0%
- guard (145 building-min): Idle 99%, Waiting for a swordsman: train one at the barracks 1%, Soldiers on the way 0%
- forest (57 building-min): No free ground to plant in range inside your border 63%, Planting a sapling 37%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 57%, Fishing 20%, Bringing a fish to the pile 16%, No fish in range inside your border 6%, Worker picking up a fishing rod 0%
- coalmine (56 building-min): Deposit thinning: mining coal 45%, Mining coal 23%, Coal pile full, waiting for carriers 11%, Bringing coal out 8%, Needs bread or fish: mining stopped 6%
- ironmine (56 building-min): Deposit worn out: finding little iron ore 51%, Needs meat or fish: mining stopped 18%, Deposit thinning: mining iron ore 13%, Iron ore pile full, waiting for carriers 7%, Mining iron ore 5%
- smelter (55 building-min): Waiting for iron ore 65%, Smelting iron 17%, Waiting for coal 8%, Stacking outside 4%, Waiting for coal and iron ore 3%
- house (97 building-min): Idle 100%
- smith (53 building-min): All tool targets met 97%, Forging axe 0%, Stacking outside 0%, Worker picking up a hammer 0%, Forging saw 0%
- weaponsmith (51 building-min): Waiting for iron 39%, Waiting for coal 21%, All weapon targets met 20%, Forging sword 9%, Forging spear 4%
- barracks (50 building-min): Waiting for weapons from the weaponsmith 81%, Weapons on the way 10%, Soldier targets met 8%, Training soldiers 1%
- farm (45 building-min): Grain pile full, waiting for carriers 54%, Sowing a field 22%, Harvesting grain 16%, Bringing grain to the pile 8%, Worker picking up a scythe 0%
- waterhut (45 building-min): Water pile full, waiting for carriers 70%, Fetching water 15%, Bringing water to the pile 15%, Worker on the way 0%, Working 0%
- mill (42 building-min): Output pile full, waiting for carriers 88%, Grinding flour 8%, Stacking outside 4%, Fetching from the pile 0%, Working 0%
- bakery (39 building-min): Waiting for flour 35%, Output pile full, waiting for carriers 34%, Baking bread 27%, Stacking outside 3%, Worker on the way 0%
- pigfarm (38 building-min): Output pile full, waiting for carriers 52%, Raising a pig 37%, Stacking outside 5%, Waiting for water 4%, Fetching from the pile 1%
- butcher (38 building-min): Output pile full, waiting for carriers 52%, Waiting for pigs 33%, Butchering 10%, Stacking outside 4%, Worker picking up an axe 1%
- tower (11 building-min): Idle 99%, Soldiers on the way 1%

Building sites, time per state (site-min): Leveling the ground 9, Builders at work 9, Waiting for a digger 7, Waiting for a builder 5, Waiting for materials 1.

Build order (placed at min:sec, finished at): house2 0:00→0:54, quarry 0:00→1:25, wood 0:02→1:09, saw 1:10→1:49, guard 1:12→2:17, forest 1:46→2:33, fisher 2:12→3:01, coalmine 2:24→3:36, ironmine 2:40→3:51, smelter 4:02→4:47, house 4:50→5:23, smith 6:12→6:54, weaponsmith 8:00→8:58, barracks 9:26→10:08, farm 13:52→15:01, waterhut 14:26→15:28, wood 15:00→15:49, quarry 15:44→16:37, house 15:44→17:12, mill 17:36→18:14, bakery 20:14→21:04, pigfarm 20:20→21:45, butcher 21:06→22:08, house2 32:00→33:47, house2 38:00→39:55, tower 47:28→49:10, guard 51:14→51:59, guard 52:12→53:10, house2 59:00→never.

Demolished or burned: guard (burned) 21:32, guard (burned) 50:37, guard (burned) 51:00, guard (burned) 51:13, guard (burned) 51:21.

Orders given: sendUnit 138, armyTarget 91, place 29, attack 6, priority 5, profession 4, weaponKeep 3, release 3, sendIn 2, armyReserve 1, march 1. None refused.

People changing jobs: new carrier 80, carrier -> soldier 61, carrier -> worker 18, new soldier 8, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1.

People's orders (5969 in all, 5929 done): worker rest farm 299, worker gather farm 298, worker mine coalmine 251, worker mine ironmine 168, worker rest coalmine 165, worker rest forest 163, worker gather forest 162, worker rest fisher 156, worker gather fisher 155, worker rest waterhut 130, worker gather waterhut 129, worker eat coalmine 119, explorer explore 114, soldier attack guard 111. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×14.

Failed path searches (who (task) why: times): pioneer (claim 1) cut-off 1.

Fights and contact: attacked enemy buildings 9 times (first 15:48); was attacked 1 times (first 51:08); took guard 17:02, guard 18:35, guard 36:35, guard 39:12, guard 42:19; killed bow 3, sword 35, spear 5; lost people sword 31, bow 13, spear 14; first saw player 1 at 16:00.

Your notes (12 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 8 field soldiers, 1 posts, carriers 22 (17 idle), coal/iron 1/1, sites 1, tips none.
- ×6 15:48–53:56 Attack: 9 field troops against guard 133; threshold 9.
- ×2 20:00–30:00 Adaptive plan: 9 field soldiers, 2 posts, carriers 3 (0 idle), coal/iron 1/1, sites 0, tips stall/army.
- ×2 40:00–50:00 Adaptive plan: 23 field soldiers, 6 posts, carriers 14 (9 idle), coal/iron 1/1, sites 0, tips stall.


Script: 2010 turns, 1.1 ms average, worst 16 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: chatgpt (Gold) vs original game NPC: **won** at 51 min

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 19/2/1975/10/40 | 31/6/2527/10/47 |
| 30 | 30/4/2737/19/37 | 33/5/2332/4/59 |
| 45 | 32/5/3879/27/43 | 11/1/906/1/52 |
| 52 | 32/5/4322/29/41 | 0/0/0/0/0 |
| first | 8 9 11 12 - - | 12 13 14 14 - - |

Soldiers every 5 min: 10 10 10 8 14 19 22 27 27 27 29 (original game NPC: 10 10 10 6 6 4 3 2 1 1 0).

First army orders (game min:sec): 2:22 sendIn 1 soldiers -> building 91; 10:52 armyTarget sword=5; 10:52 armyTarget spear=3; 10:52 armyReserve; 15:00 march 5 soldiers -> 200,120; 15:12 armyTarget sword=4; 15:12 armyTarget spear=2; 15:32 armyTarget sword=7; 15:32 armyTarget spear=4; 15:32 armyTarget bow=3; 15:52 armyTarget sword=6; 15:52 armyTarget spear=3.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 9 min, 5–13: stall: fisher: no fish in range inside your border 93% of the last 5 minutes.
- 10 min, 9–18: stall: iron mine: needs meat or fish 100% of the last 5 minutes.
- 19 min, 10–42: stall: smelter: waiting for iron ore 74% of the last 5 minutes.
- 19 min, 14–50: stall: barracks: waiting for weapons from the weaponsmith 96% of the last 5 minutes.
- 5 min, 15–19: stall: smith: waiting for iron 98% of the last 5 minutes.
- 10 min, 19–39: stall: weaponsmith: waiting for iron 75% of the last 5 minutes.
- 6 min, 20–26: stall: butcher: waiting for pigs 58% of the last 5 minutes.
- 4 min, 23–31: settlers: No free settlers and every bed taken: build houses.
- 6 min, 27–33: stall: goldsmelter: waiting for coal 91% of the last 5 minutes.
- 1 min, 29: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 3 min, 29–31: stall: woodcutter: log pile full, waiting for carriers 99% of the last 5 minutes.
- 2 min, 29–30: stall: quarry: stone pile full, waiting for carriers 93% of the last 5 minutes.
- 18 min, 31–52: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 16 min, 32–52: stall: iron mine: deposit worn out 95% of the last 5 minutes.
- 4 min, 34–37: stall: gold mine: deposit worn out 83% of the last 5 minutes.
- 7 min, 46–52: stall: weaponsmith: waiting for coal 93% of the last 5 minutes.
- 2 min, 50–51: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 15 | 8 | 5 | 1 | 0 | 0 | 8 | 7 | 0 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 11 | 29 | 1975 | 3583 |
| 30 | 35 | 32 | 46 | 15 | 11 | 10 | 15 | 18 | 13 | 13 | 0 | 6 | 9 | 4 | 1 | 0 | 0 | 0 | 100 | 2737 | 8499 |
| 45 | 48 | 85 | 102 | 25 | 12 | 13 | 27 | 36 | 14 | 13 | 0 | 18 | 17 | 8 | 0 | 0 | 0 | 13 | 126 | 3879 | 12118 |
| 52 | 56 | 128 | 137 | 25 | 12 | 14 | 31 | 33 | 19 | 18 | 10 | 21 | 17 | 8 | 0 | 0 | 0 | 10 | 126 | 4322 | 12118 |

At the end: buildings (built+sites) guard 5, house2 2, quarry 2, wood 2, fisher 2, house 2, hq 1, saw 1, forest 1, coalmine 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, mill 1, bakery 1, pigfarm 1, butcher 1, goldmine 1, goldsmelter 1.
People: soldier 23, worker 21, carrier 12, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 60. Soldiers: sword 11, bow 6, spear 6.

Goods produced in the game: grain 173, water 160, coal 113, log 105, stone 101, plank 85, flour 79, pig 75, bread 65, meat 61, fish 54, ironore 54, iron 54, goldore 22, sword 15, gold 8, spear 8, bow 6, axe 2, pick 2, hammer 2, rod 2, saw 1, shovel 1.
Goods consumed in the game: grain 154, water 140, stone 103, plank 101, coal 101, log 85, flour 65, pig 61, ironore 54, bread 53, meat 49, iron 39, fish 36, sword 15, goldore 8, spear 8, pick 6, bow 6, hammer 4, axe 3, shovel 2, rod 2, saw 1, scythe 1.
Goods captured in the game: plank 98, stone 97, log 32, grain 14, water 11, ironore 10, pig 8, coal 6, iron 6, flour 5, goldore 3, meat 2, fish 1, axe 1, saw 1, pick 1, shovel 1, hammer 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (52 building-min): Idle 100%
- house2 (72 building-min): Idle 100%
- quarry (83 building-min): Stone pile full, waiting for carriers 72%, Cutting stone 19%, Bringing stone to the pile 8%, Worker picking up a pickaxe 0%, Working 0%
- wood (84 building-min): Log pile full, waiting for carriers 70%, Felling a tree 23%, Bringing a log to the pile 5%, Worker picking up an axe 1%, Needs a worker with an axe 1%
- saw (50 building-min): Output pile full, waiting for carriers 73%, Sawing planks 22%, Stacking outside 5%, Fetching from the pile 1%, Worker picking up a saw 0%
- guard (149 building-min): Idle 98%, Waiting for a swordsman: train one at the barracks 1%, Soldiers on the way 0%, Waiting for a soldier 0%
- forest (49 building-min): No free ground to plant in range inside your border 52%, Planting a sapling 48%, Worker picking up a shovel 0%, Idle 0%
- fisher (81 building-min): Fish pile full, waiting for carriers 49%, No fish in range inside your border 41%, Bringing a fish to the pile 5%, Fishing 4%, Worker picking up a fishing rod 0%
- coalmine (48 building-min): Deposit thinning: mining coal 39%, Mining coal 20%, Needs bread or fish: mining stopped 15%, Deposit worn out: finding little coal 13%, Bringing coal out 6%
- ironmine (45 building-min): Deposit worn out: finding little iron ore 52%, Needs meat or fish: mining stopped 27%, Deposit thinning: mining iron ore 10%, Mining iron ore 5%, Bringing iron ore out 3%
- smelter (44 building-min): Waiting for iron ore 79%, Smelting iron 15%, Stacking outside 3%, Worker picking up a hammer 1%, Waiting for coal and iron ore 1%
- house (76 building-min): Idle 100%
- smith (43 building-min): All tool targets met 71%, Waiting for iron 24%, Worker picking up a hammer 1%, Stacking outside 1%, Forging pickaxe 1%
- weaponsmith (41 building-min): Waiting for iron 53%, Waiting for coal 28%, Forging sword 5%, All weapon targets met 5%, Forging spear 3%
- barracks (40 building-min): Waiting for weapons from the weaponsmith 84%, Weapons on the way 11%, Soldier targets met 5%, Training soldiers 1%
- farm (39 building-min): Sowing a field 34%, Grain pile full, waiting for carriers 28%, Harvesting grain 24%, Bringing grain to the pile 13%, Worker picking up a scythe 1%
- waterhut (38 building-min): Water pile full, waiting for carriers 74%, Fetching water 15%, Bringing water to the pile 11%, Idle 0%, Working 0%
- mill (37 building-min): Output pile full, waiting for carriers 79%, Grinding flour 11%, Stacking outside 6%, Waiting for grain 3%, Fetching from the pile 1%
- bakery (36 building-min): Output pile full, waiting for carriers 52%, Baking bread 41%, Stacking outside 5%, Waiting for water 1%, Fetching from the pile 1%
- pigfarm (35 building-min): Raising a pig 49%, Output pile full, waiting for carriers 36%, Waiting for grain 7%, Stacking outside 6%, Fetching from the pile 1%
- butcher (34 building-min): Output pile full, waiting for carriers 65%, Waiting for pigs 16%, Butchering 14%, Stacking outside 5%, Fetching from the pile 1%
- goldmine (29 building-min): Gold ore pile full, waiting for carriers 53%, Deposit worn out: finding little gold ore 25%, Deposit thinning: mining gold ore 12%, Mining gold ore 3%, Worker picking up a pickaxe 3%
- goldsmelter (28 building-min): Output pile full, waiting for carriers 67%, Waiting for coal 27%, Smelting gold 4%, Worker picking up a hammer 2%, Stacking outside 1%

Building sites, time per state (site-min): Builders at work 8, Leveling the ground 7, Waiting for a digger 5, Waiting for a builder 4, Waiting for materials 0.

Build order (placed at min:sec, finished at): house2 0:00→1:07, quarry 0:00→1:39, wood 0:02→1:22, saw 1:24→2:00, guard 1:26→2:21, forest 1:58→2:35, fisher 2:20→2:51, guard 2:54→3:55, coalmine 3:10→4:14, ironmine 6:10→6:40, smelter 6:40→7:31, house 7:32→8:07, smith 8:12→8:59, weaponsmith 9:40→10:48, barracks 10:50→11:43, farm 12:14→13:18, waterhut 13:10→14:06, mill 13:52→14:58, bakery 15:02→15:44, pigfarm 16:28→17:25, butcher 17:24→18:00, wood 17:52→18:23, quarry 18:36→19:20, house 19:20→19:54, fisher 19:48→20:33, goldmine 21:42→22:55, goldsmelter 22:56→23:43, house2 29:00→31:06.

Demolished or burned: guard (burned) 30:10, guard (burned) 31:01.

Orders given: sendUnit 127, armyTarget 63, place 28, release 23, attack 8, priority 5, profession 4, weaponKeep 3, march 3, sendIn 1, armyReserve 1. None refused.

People changing jobs: new carrier 60, carrier -> soldier 29, carrier -> worker 21, carrier -> explorer 2, new soldier 2, carrier -> geologist 1, carrier -> pioneer 1.

People's orders (5517 in all, 5470 done): worker rest farm 358, worker gather farm 357, worker rest waterhut 161, worker rest forest 160, worker mine coalmine 160, worker gather waterhut 160, worker gather forest 159, worker rest coalmine 115, worker rest wood 107, worker gather wood 105, worker mine ironmine 104, worker rest quarry 103, worker gather quarry 101, explorer explore 98. Not done (outcome: times): failed: spot not next to the border ×13.

Failed path searches (who (task) why: times): pioneer (claim 1) cut-off 1.

Fights and contact: attacked enemy buildings 8 times (first 27:56); took hq 27:57, guard 29:04, guard 29:09, guard 30:00, guard 36:18, guard 41:14; killed bow 4, sword 12, spear 1; lost people sword 5, spear 2, bow 3; first saw player 2 at 16:00.

Your notes (11 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Adaptive plan: 10 field soldiers, 0 posts, carriers 6 (6 idle), coal/iron 0/0, sites 0, tips none.
- ×3 10:00–40:00 Adaptive plan: 22 field soldiers, 4 posts, carriers 15 (11 idle), coal/iron 1/1, sites 0, tips stall.
- 27:56 Attack: 15 field troops against hq 37; threshold 15.
- ×4 29:50–51:08 Attack: 8 field troops against guard 132; threshold 8.
- 30:00 Adaptive plan: 14 field soldiers, 5 posts, carriers 8 (0 idle), coal/iron 1/1, sites 1, tips stall/settlers.
- 50:00 Adaptive plan: 21 field soldiers, 5 posts, carriers 14 (9 idle), coal/iron 1/1, sites 0, tips land/stall.


Script: 1605 turns, 1.0 ms average, worst 15 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 17/3/2224/15/45 | 31/6/2724/10/44 |
| 30 | 22/3/2868/35/40 | 39/5/3015/13/61 |
| 45 | 27/5/3659/21/29 | 35/2/2498/19/47 |
| 60 | 28/5/3985/21/39 | 35/2/2498/17/44 |
| first | 8 10 12 13 - - | 8 8 9 10 - - |

Soldiers every 5 min: 10 10 15 19 28 35 21 25 21 25 23 21 (original game NPC: 10 10 10 4 13 13 10 11 19 21 20 17).

First army orders (game min:sec): 2:40 sendIn 1 soldiers -> building 101; 11:28 armyTarget sword=5; 11:28 armyTarget spear=3; 11:28 armyReserve; 13:08 armyTarget bow=3; 15:00 march 5 soldiers -> 40,120; 15:08 armyTarget sword=7; 15:08 armyTarget spear=4; 16:12 attack 13 soldiers -> building 130; 19:08 armyTarget bow=4; 20:28 armyTarget sword=8; 20:46 attack 16 soldiers -> building 1.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 6–7: army: Lost 4 soldiers in the last 5 minutes, and no barracks to train new ones.
- 4 min, 8–46: stall: quarry: stone pile full, waiting for carriers 94% of the last 5 minutes.
- 2 min, 8–26: settlers: No free settlers and every bed taken: build houses.
- 30 min, 13–60: stall: smelter: waiting for coal 100% of the last 5 minutes.
- 28 min, 15–60: stall: barracks: waiting for weapons from the weaponsmith 95% of the last 5 minutes.
- 20 min, 15–51: stall: weaponsmith: waiting for iron 89% of the last 5 minutes.
- 24 min, 23–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 17 min, 25–44: stall: iron mine: deposit worn out 95% of the last 5 minutes.
- 3 min, 26–46: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 2 min, 26–45: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 9 min, 32–48: army: Lost 4 soldiers in the last 5 minutes.
- 12 min, 43–59: stall: coal mine: deposit worn out 92% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 10 | 8 | 8 | 15 | 0 | 0 | 0 | 0 | 0 | 13 | 13 | 6 | 0 | 0 | 0 | 0 | 0 | 25 | 36 | 2224 | 4526 |
| 30 | 16 | 31 | 43 | 4 | 0 | 0 | 1 | 0 | 0 | 7 | 7 | 4 | 0 | 0 | 0 | 0 | 1 | 14 | 23 | 2868 | 10574 |
| 45 | 33 | 34 | 54 | 23 | 0 | 12 | 13 | 13 | 0 | 8 | 11 | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 99 | 3659 | 14247 |
| 60 | 33 | 34 | 54 | 23 | 0 | 12 | 14 | 14 | 0 | 7 | 14 | 2 | 0 | 0 | 0 | 0 | 0 | 12 | 101 | 3985 | 14615 |

At the end: buildings (built+sites) guard 5, house2 4, quarry 2, wood 2, fisher 2, hq 1, saw 1, forest 1, ironmine 1, coalmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, pigfarm 1, butcher 1.
People: worker 17, soldier 14, carrier 14, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 80. Soldiers: sword 6, bow 5, spear 3.

Goods produced in the game: fish 283, coal 127, log 95, stone 95, water 77, grain 77, plank 75, ironore 75, pig 63, iron 61, meat 49, sword 30, spear 11, bow 10, rod 2, axe 2, saw 1, shovel 1, hammer 1, pick 1.
Goods consumed in the game: fish 266, coal 120, stone 97, plank 91, log 75, water 63, grain 63, ironore 61, iron 59, pig 49, meat 37, sword 30, spear 11, bow 10, pick 5, axe 3, hammer 3, shovel 2, rod 2, saw 1, scythe 1.
Goods lost in the game: stone 12, plank 3.
Goods captured in the game: stone 27, plank 10, log 9.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (156 building-min): Idle 100%
- quarry (103 building-min): Stone pile full, waiting for carriers 79%, Cutting stone 14%, Bringing stone to the pile 6%, Worker picking up a pickaxe 0%, Working 0%
- wood (103 building-min): Log pile full, waiting for carriers 74%, Felling a tree 19%, Bringing a log to the pile 7%, Worker picking up an axe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 79%, Sawing planks 16%, Stacking outside 3%, Fetching from the pile 0%, Worker picking up a saw 0%
- guard (226 building-min): Idle 96%, Waiting for a swordsman: train one at the barracks 4%, Soldiers on the way 0%, Waiting for a soldier 0%, Free soldiers are too far away: bring one onto your land or near this building 0%
- forest (57 building-min): No free ground to plant in range inside your border 61%, Planting a sapling 39%, Worker picking up a shovel 0%, Working 0%
- fisher (86 building-min): Fish pile full, waiting for carriers 49%, Bringing a fish to the pile 26%, Fishing 23%, No fish in range inside your border 1%, Worker picking up a fishing rod 0%
- ironmine (55 building-min): Deposit worn out: finding little iron ore 55%, Iron ore pile full, waiting for carriers 21%, Deposit thinning: mining iron ore 10%, Mining iron ore 5%, Bringing iron ore out 4%
- coalmine (53 building-min): Deposit worn out: finding little coal 37%, Deposit thinning: mining coal 33%, Mining coal 18%, Bringing coal out 6%, Came back empty-handed 2%
- smelter (52 building-min): Waiting for coal 81%, Smelting iron 15%, Stacking outside 3%, Output pile full, waiting for carriers 0%, Worker picking up a hammer 0%
- smith (51 building-min): All tool targets met 96%, Waiting for coal 1%, Forging fishing rod 1%, Forging axe 0%, Worker picking up a hammer 0%
- weaponsmith (49 building-min): Waiting for iron 76%, Forging sword 8%, All weapon targets met 6%, Forging spear 3%, Stacking outside 3%
- barracks (48 building-min): Waiting for weapons from the weaponsmith 80%, Weapons on the way 12%, Soldier targets met 6%, Training soldiers 1%, Idle 0%
- farm (31 building-min): Grain pile full, waiting for carriers 63%, Sowing a field 17%, Harvesting grain 13%, Bringing grain to the pile 6%, Worker picking up a scythe 1%
- waterhut (30 building-min): Water pile full, waiting for carriers 75%, Bringing water to the pile 13%, Fetching water 12%, Worker on the way 0%, Idle 0%
- pigfarm (30 building-min): Raising a pig 48%, Output pile full, waiting for carriers 44%, Stacking outside 6%, Waiting for grain and water 1%, Fetching from the pile 1%
- butcher (29 building-min): Output pile full, waiting for carriers 73%, Butchering 13%, Waiting for pigs 8%, Stacking outside 5%, Worker picking up an axe 1%

Building sites, time per state (site-min): Waiting for a digger 9, Leveling the ground 8, Builders at work 8, Waiting for a builder 5.

Build order (placed at min:sec, finished at): house2 0:00→0:50, quarry 0:00→1:06, wood 0:02→1:20, saw 1:20→2:02, guard 1:22→2:39, forest 1:24→2:58, fisher 2:02→3:16, guard 2:40→3:35, guard 3:36→4:25, ironmine 3:58→4:48, coalmine 5:58→6:47, smelter 6:48→7:48, house2 7:48→9:02, smith 8:54→9:30, weaponsmith 10:20→11:21, barracks 11:26→12:04, wood 15:00→15:35, quarry 15:02→16:12, house2 26:00→27:43, farm 27:54→29:14, waterhut 27:56→29:45, pigfarm 29:02→30:24, butcher 29:08→31:11, fisher 29:18→30:39, house2 45:00→46:46.

Demolished or burned: guard (burned) 17:20, guard (burned) 31:59.

Orders given: sendUnit 140, armyTarget 57, release 26, place 25, march 7, attack 7, priority 5, profession 4, weaponKeep 3, sendIn 2, armyReserve 1. None refused.

People changing jobs: new carrier 80, carrier -> soldier 51, carrier -> worker 17, new soldier 4, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1.

People's orders (5218 in all, 5187 done): worker mine coalmine 287, worker rest fisher 285, worker gather fisher 283, carrier haul fish fisher -> coalmine 201, worker eat coalmine 197, worker mine ironmine 165, worker rest forest 163, worker gather forest 162, worker rest farm 158, worker gather farm 157, worker rest coalmine 130, explorer explore 115, soldier attack guard 110, worker eat ironmine 106. None failed.

Failed path searches (who (task) why: times): pioneer (claim 0) cut-off 3, pioneer (claim 1) cut-off 2.

Fights and contact: attacked enemy buildings 10 times (first 16:12); took guard 17:19, hq 20:52, guard 31:23, guard 31:32, guard 31:59; killed bow 6, sword 23; lost people bow 8, sword 24, spear 8; first saw player 1 at 16:00.

Your notes (11 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 6 field soldiers, 3 posts, carriers 33 (27 idle), coal/iron 1/1, sites 0, tips none.
- ×4 16:12–43:10 Attack: 7 field troops against guard 146; threshold 7.
- ×4 20:00–50:00 Adaptive plan: 18 field soldiers, 5 posts, carriers 20 (14 idle), coal/iron 1/1, sites 0, tips stall.
- 20:46 Attack: 16 field troops against hq 1; threshold 16.


Script: 1902 turns, 7.6 ms average, worst 18 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 11/3/2086/10/30 | 32/6/3063/10/50 |
| 30 | 19/3/2468/19/36 | 59/9/4508/32/84 |
| 45 | 21/4/3233/12/27 | 61/15/8989/23/89 |
| 60 | 22/4/3572/9/38 | 61/15/8989/43/68 |
| first | 17 20 21 22 - - | 9 8 14 15 32 35 |

Soldiers every 5 min: 10 10 10 8 12 19 12 23 12 15 7 9 (original game NPC: 10 10 10 6 17 32 33 38 23 28 36 43).

First army orders (game min:sec): 2:44 sendIn 1 soldiers -> building 107; 15:00 march 5 soldiers -> 200,120; 20:20 armyTarget sword=7; 20:20 armyTarget spear=4; 20:20 armyTarget bow=3; 20:20 armyReserve; 25:00 armyTarget sword=9; 25:00 armyTarget spear=5; 25:00 armyTarget bow=4; 30:34 attack 16 soldiers -> building 37; 33:00 armyTarget sword=8; 33:00 armyTarget spear=4.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 6–7: army: Lost 4 soldiers in the last 5 minutes, and no barracks to train new ones.
- 39 min, 9–57: stall: iron mine: deposit worn out 92% of the last 5 minutes.
- 4 min, 12–15: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 4 min, 17–49: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 2 min, 17–18: stall: fisher: fish pile full, waiting for carriers 56% of the last 5 minutes.
- 2 min, 17–18: settlers: No free settlers and every bed taken: build houses.
- 1 min, 20: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 12 min, 23–40: stall: smelter: waiting for iron ore 58% of the last 5 minutes.
- 22 min, 23–60: stall: weaponsmith: waiting for iron 94% of the last 5 minutes.
- 33 min, 25–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 14 min, 32–58: army: Lost 9 soldiers in the last 5 minutes.
- 6 min, 35–51: stall: quarry: stone pile full, waiting for carriers 90% of the last 5 minutes.
- 6 min, 35–51: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 1 min, 38: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 4 min, 52–55: stall: barracks: waiting for weapons from the weaponsmith 80% of the last 5 minutes.
- 4 min, 57–60: stall: smelter: waiting for coal 94% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 14 | 10 | 9 | 17 | 0 | 0 | 0 | 0 | 0 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 7 | 33 | 2086 | 3594 |
| 30 | 24 | 8 | 16 | 14 | 0 | 0 | 0 | 0 | 0 | 23 | 0 | 3 | 0 | 0 | 0 | 1 | 0 | 10 | 56 | 2468 | 6560 |
| 45 | 40 | 38 | 38 | 21 | 0 | 0 | 6 | 6 | 0 | 12 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 2 | 51 | 3233 | 9297 |
| 60 | 40 | 38 | 38 | 22 | 0 | 0 | 6 | 6 | 0 | 12 | 5 | 3 | 0 | 0 | 0 | 0 | 0 | 14 | 52 | 3572 | 11024 |

At the end: buildings (built+sites) house2 4, guard 4, quarry 2, wood 2, hq 1, saw 1, forest 1, fisher 1, ironmine 1, coalmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1.
People: carrier 18, worker 12, soldier 3, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 80. Soldiers: sword 3.

Goods produced in the game: fish 356, coal 131, stone 76, log 75, ironore 66, iron 61, plank 55, sword 31, spear 12, bow 9, pick 1, axe 1, saw 1, shovel 1, hammer 1, rod 1.
Goods consumed in the game: fish 348, coal 119, stone 78, plank 71, ironore 61, iron 58, log 55, sword 31, spear 12, bow 9, pick 5, hammer 3, axe 2, shovel 2, saw 1, rod 1.
Goods captured in the game: log 16, plank 8, fish 8, pig 8, water 6, grain 6.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (132 building-min): Idle 100%
- quarry (102 building-min): Stone pile full, waiting for carriers 86%, Cutting stone 11%, Bringing stone to the pile 3%, Worker picking up a pickaxe 0%, Working 0%
- wood (102 building-min): Log pile full, waiting for carriers 81%, Felling a tree 15%, Bringing a log to the pile 4%, Worker picking up an axe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 85%, Sawing planks 12%, Stacking outside 3%, Fetching from the pile 0%, Worker picking up a saw 0%
- guard (190 building-min): Idle 99%, Soldiers on the way 0%, Waiting for a swordsman: train one at the barracks 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 64%, Planting a sapling 36%, Worker picking up a shovel 0%, Working 0%
- fisher (57 building-min): Fishing 36%, Fish pile full, waiting for carriers 33%, Bringing a fish to the pile 32%, Worker picking up a fishing rod 0%
- ironmine (53 building-min): Deposit worn out: finding little iron ore 88%, Needs meat or fish: mining stopped 4%, Bringing iron ore out 3%, Came back empty-handed 2%, Fetching food 2%
- coalmine (44 building-min): Deposit thinning: mining coal 57%, Mining coal 26%, Bringing coal out 8%, Needs bread or fish: mining stopped 3%, Coal pile full, waiting for carriers 2%
- smelter (43 building-min): Waiting for iron ore 43%, Waiting for coal 24%, Smelting iron 18%, Waiting for coal and iron ore 8%, Stacking outside 4%
- smith (41 building-min): All tool targets met 96%, Worker picking up a hammer 1%, Stacking outside 0%, Forging pickaxe 0%, Forging saw 0%
- weaponsmith (40 building-min): Waiting for iron 77%, Forging sword 10%, Forging spear 4%, Stacking outside 4%, Forging bow 3%
- barracks (39 building-min): Waiting for weapons from the weaponsmith 68%, Weapons on the way 29%, Training soldiers 2%, Soldier targets met 1%

Building sites, time per state (site-min): Leveling the ground 7, Waiting for a digger 7, Builders at work 6, Waiting for a builder 4, Waiting for materials 1.

Build order (placed at min:sec, finished at): house2 0:00→1:21, quarry 0:00→1:38, wood 0:02→1:52, saw 1:54→2:28, guard 1:56→2:44, forest 2:08→3:01, fisher 2:30→3:19, guard 2:44→3:45, guard 3:46→4:47, ironmine 6:12→6:48, coalmine 14:36→15:43, wood 15:00→16:09, quarry 15:02→16:27, smelter 15:44→16:58, house2 17:00→18:39, smith 17:40→19:17, weaponsmith 19:18→20:16, barracks 20:18→21:02, house2 35:00→36:57, guard 38:00→39:01, house2 49:00→51:09.

Demolished or burned: guard (burned) 42:48.

Orders given: sendUnit 145, armyTarget 57, place 21, release 18, attack 10, priority 5, profession 4, weaponKeep 3, sendIn 2, march 2, armyReserve 1. None refused.

People changing jobs: new carrier 80, carrier -> soldier 52, carrier -> worker 12, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1, new soldier 1.

People's orders (4161 in all, 4135 done): worker rest fisher 357, worker gather fisher 356, worker mine coalmine 251, worker mine ironmine 244, carrier haul fish fisher -> ironmine 199, worker eat ironmine 195, worker eat coalmine 153, carrier haul fish fisher -> coalmine 151, worker rest forest 137, worker gather forest 136, worker rest coalmine 134, explorer explore 115, worker rest quarry 78, worker rest wood 77. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×4; failed: can't reach that spot ×1.

Failed path searches (who (task) why: times): pioneer (claim 0) cut-off 17, pioneer (claim 1) cut-off 2.

Fights and contact: attacked enemy buildings 7 times (first 30:34); took hq 41:17, guard 42:17; killed bow 10, sword 12, spear 7; lost people bow 12, sword 29, spear 12; first saw player 2 at 16:00.

Your notes (10 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Adaptive plan: 10 field soldiers, 0 posts, carriers 6 (6 idle), coal/iron 0/0, sites 0, tips none.
- ×4 10:00–50:00 Adaptive plan: 9 field soldiers, 4 posts, carriers 4 (0 idle), coal/iron 1/1, sites 1, tips stall.
- 20:00 Adaptive plan: 4 field soldiers, 3 posts, carriers 31 (23 idle), coal/iron 1/1, sites 1, tips stall/timing.
- ×2 30:34–39:50 Attack: 16 field troops against hq 37; threshold 16.
- ×2 41:26–51:58 Attack: 9 field troops against guard 137; threshold 9.


Script: 1897 turns, 1.6 ms average, worst 16 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 17/3/2225/13/47 | 34/6/2795/10/50 |
| 30 | 22/3/2624/24/41 | 56/4/3641/4/83 |
| 45 | 23/4/3638/10/27 | 56/8/6218/22/65 |
| 60 | 24/4/4011/11/40 | 56/8/6271/30/56 |
| first | 10 12 14 15 - - | 7 8 13 14 36 - |

Soldiers every 5 min: 10 10 13 20 25 24 22 19 10 11 8 11 (original game NPC: 10 10 10 6 4 4 7 14 22 30 29 30).

First army orders (game min:sec): 2:46 sendIn 1 soldiers -> building 104; 13:56 armyTarget sword=5; 13:56 armyTarget spear=3; 13:56 armyReserve; 15:00 march 5 soldiers -> 40,120; 15:16 armyTarget sword=7; 15:16 armyTarget spear=4; 15:16 armyTarget bow=3; 15:56 attack 8 soldiers -> building 138; 19:32 attack 10 soldiers -> building 137; 19:36 armyTarget bow=4; 20:36 armyTarget sword=8.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 6–7: army: Lost 4 soldiers in the last 5 minutes, and no barracks to train new ones.
- 2 min, 10–11: stall: fisher: fish pile full, waiting for carriers 83% of the last 5 minutes.
- 3 min, 10–47: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 4 min, 10–47: stall: quarry: stone pile full, waiting for carriers 100% of the last 5 minutes.
- 5 min, 10–28: settlers: No free settlers and every bed taken: build houses.
- 24 min, 16–57: stall: smelter: waiting for coal 97% of the last 5 minutes.
- 8 min, 17–32: stall: barracks: waiting for weapons from the weaponsmith 66% of the last 5 minutes.
- 17 min, 17–58: stall: weaponsmith: waiting for iron 97% of the last 5 minutes.
- 30 min, 21–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 7 min, 26–49: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 2 min, 29–30: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 9 min, 33–41: stall: gold mine: deposit worn out 96% of the last 5 minutes.
- 25 min, 33–60: stall: goldsmelter: waiting for coal 100% of the last 5 minutes.
- 3 min, 34–36: stall: iron mine: deposit worn out 92% of the last 5 minutes.
- 10 min, 35–49: army: Lost 4 soldiers in the last 5 minutes.
- 2 min, 48–49: stall: gold mine: gold ore pile full, waiting for carriers 100% of the last 5 minutes.
- 2 min, 59–60: stall: coal mine: deposit worn out 92% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 8 | 8 | 4 | 15 | 0 | 0 | 0 | 0 | 0 | 7 | 13 | 6 | 0 | 0 | 0 | 1 | 0 | 23 | 29 | 2225 | 4369 |
| 30 | 17 | 10 | 19 | 11 | 0 | 0 | 0 | 0 | 0 | 5 | 3 | 1 | 4 | 0 | 0 | 0 | 1 | 13 | 39 | 2624 | 8712 |
| 45 | 24 | 26 | 58 | 11 | 0 | 0 | 0 | 0 | 0 | 6 | 10 | 1 | 14 | 0 | 0 | 0 | 0 | 3 | 59 | 3638 | 12113 |
| 60 | 24 | 26 | 58 | 19 | 0 | 0 | 0 | 0 | 0 | 6 | 14 | 1 | 14 | 0 | 0 | 0 | 0 | 17 | 69 | 4011 | 12438 |

At the end: buildings (built+sites) house2 4, guard 4, quarry 2, wood 2, hq 1, saw 1, forest 1, fisher 1, ironmine 1, coalmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, goldmine 1, goldsmelter 1.
People: carrier 18, worker 14, soldier 5, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 80. Soldiers: sword 5.

Goods produced in the game: fish 363, coal 123, log 84, stone 83, ironore 73, plank 64, iron 59, sword 30, goldore 14, spear 11, bow 9, hammer 2, pick 2, saw 1, shovel 1, rod 1, axe 1.
Goods consumed in the game: fish 350, coal 117, stone 85, plank 80, log 64, ironore 59, iron 58, sword 30, spear 11, bow 9, pick 6, hammer 4, axe 2, shovel 2, saw 1, rod 1.
Goods lost in the game: plank 12, log 8, stone 5.
Goods captured in the game: stone 20, log 8, plank 8.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (150 building-min): Idle 100%
- quarry (102 building-min): Stone pile full, waiting for carriers 77%, Cutting stone 15%, Bringing stone to the pile 8%, Worker picking up a pickaxe 0%, Working 0%
- wood (102 building-min): Log pile full, waiting for carriers 75%, Felling a tree 18%, Bringing a log to the pile 7%, Worker picking up an axe 1%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 79%, Sawing planks 14%, Waiting for logs 4%, Stacking outside 3%, Fetching from the pile 0%
- guard (217 building-min): Idle 100%, Soldiers on the way 0%
- forest (57 building-min): No free ground to plant in range inside your border 69%, Planting a sapling 30%, Worker picking up a shovel 0%
- fisher (56 building-min): Fishing 36%, Fish pile full, waiting for carriers 34%, Bringing a fish to the pile 29%, Worker picking up a fishing rod 0%
- ironmine (52 building-min): Deposit worn out: finding little iron ore 48%, Deposit thinning: mining iron ore 18%, Iron ore pile full, waiting for carriers 13%, Needs meat or fish: mining stopped 9%, Mining iron ore 5%
- coalmine (51 building-min): Deposit thinning: mining coal 43%, Deposit worn out: finding little coal 22%, Mining coal 17%, Bringing coal out 6%, Needs bread or fish: mining stopped 6%
- smelter (50 building-min): Waiting for coal 79%, Smelting iron 15%, Stacking outside 3%, Output pile full, waiting for carriers 1%, Waiting for coal and iron ore 1%
- smith (48 building-min): All tool targets met 96%, Worker picking up a hammer 1%, Forging hammer 1%, Stacking outside 0%, Forging pickaxe 0%
- weaponsmith (46 building-min): Waiting for iron 78%, Forging sword 8%, All weapon targets met 4%, Forging spear 3%, Stacking outside 3%
- barracks (45 building-min): Waiting for weapons from the weaponsmith 74%, Weapons on the way 21%, Soldier targets met 3%, Training soldiers 1%
- goldmine (34 building-min): Gold ore pile full, waiting for carriers 55%, Deposit worn out: finding little gold ore 34%, Needs fish or bread or meat: mining stopped 6%, Worker picking up a pickaxe 2%, Bringing gold ore out 1%
- goldsmelter (33 building-min): Waiting for coal 93%, Waiting for coal and gold ore 6%, Worker picking up a hammer 1%, Idle 0%, Working 0%

Building sites, time per state (site-min): Leveling the ground 8, Builders at work 7, Waiting for a digger 7, Waiting for a builder 4, Waiting for materials 0.

Build order (placed at min:sec, finished at): house2 0:00→1:06, quarry 0:00→1:22, wood 0:02→1:35, saw 1:36→2:09, guard 1:38→2:45, forest 1:52→3:02, fisher 2:16→3:35, guard 3:02→3:58, guard 3:58→4:38, ironmine 7:28→8:08, coalmine 8:16→8:45, smelter 8:46→9:47, house2 9:48→11:11, smith 10:56→11:57, weaponsmith 12:34→13:50, barracks 13:54→14:34, wood 15:00→15:59, quarry 15:26→16:31, goldmine 25:00→25:52, goldsmelter 25:54→26:48, house2 26:22→28:37, guard 29:10→30:24, house2 47:00→49:03.

Demolished or burned: guard (burned) 28:27, guard (burned) 28:33.

Orders given: sendUnit 137, armyTarget 41, place 23, release 8, attack 8, priority 5, profession 4, march 4, sendIn 3, weaponKeep 3, armyReserve 1. None refused.

People changing jobs: new carrier 80, carrier -> soldier 50, carrier -> worker 14, carrier -> explorer 2, new soldier 2, carrier -> geologist 1, carrier -> pioneer 1.

People's orders (4301 in all, 4275 done): worker rest fisher 364, worker gather fisher 363, worker mine coalmine 266, worker mine ironmine 212, carrier haul fish fisher -> coalmine 182, worker eat coalmine 178, worker eat ironmine 152, carrier haul fish fisher -> ironmine 150, worker rest coalmine 126, worker rest forest 125, worker gather forest 124, explorer explore 115, worker rest wood 86, worker rest quarry 85. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×8.

Fights and contact: attacked enemy buildings 9 times (first 15:56); took guard 16:58, guard 20:54, hq 37:22; killed bow 3, sword 31; lost people sword 26, bow 12, spear 11; first saw player 1 at 16:00.

Your notes (11 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Adaptive plan: 10 field soldiers, 0 posts, carriers 6 (6 idle), coal/iron 0/0, sites 0, tips none.
- 10:00 Adaptive plan: 6 field soldiers, 3 posts, carriers 14 (0 idle), coal/iron 1/1, sites 1, tips stall/settlers.
- ×4 15:56–51:04 Attack: 4 field troops against guard 140; threshold 4.
- ×3 20:00–50:00 Adaptive plan: 5 field soldiers, 4 posts, carriers 22 (20 idle), coal/iron 1/1, sites 0, tips stall.
- 30:00 Adaptive plan: 20 field soldiers, 4 posts, carriers 19 (14 idle), coal/iron 1/1, sites 1, tips land/stall.
- 35:44 Attack: 16 field troops against hq 1; threshold 16.


Script: 1959 turns, 1.1 ms average, worst 17 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

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


Script: 1860 turns, 1.7 ms average, worst 15 ms, 0 over 0.3 s, 0 errors. Orders refused: place 1 of 25.

### Map 20261030: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 19/3/2220/19/31 | 25/6/3049/10/40 |
| 30 | 23/4/2828/19/37 | 55/4/3494/4/82 |
| 45 | 24/4/3494/24/33 | 47/3/3502/3/62 |
| 60 | 24/4/3815/25/44 | 47/3/3502/3/62 |
| first | 7 8 10 12 - - | 14 15 16 22 - - |

Soldiers every 5 min: 10 10 19 18 16 19 24 28 24 25 25 25 (original game NPC: 10 10 10 5 5 4 4 4 3 3 3 3).

First army orders (game min:sec): 2:46 sendIn 1 soldiers -> building 100; 10:04 armyReserve; 10:24 armyTarget sword=5; 10:24 armyTarget spear=3; 11:24 armyTarget sword=4; 11:24 armyTarget spear=2; 11:44 armyTarget sword=5; 11:44 armyTarget spear=3; 12:04 armyTarget bow=3; 12:24 armyTarget sword=6; 13:04 armyTarget spear=4; 13:44 armyTarget sword=7.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 6–7: army: Lost 4 soldiers in the last 5 minutes, and no barracks to train new ones.
- 2 min, 11–12: stall: sawmill: waiting for logs 51% of the last 5 minutes.
- 5 min, 16–20: stall: goldsmelter: waiting for coal 80% of the last 5 minutes.
- 2 min, 17–18: settlers: No free settlers and every bed taken: build houses.
- 2 min, 18–44: stall: gold mine: gold ore pile full, waiting for carriers 100% of the last 5 minutes.
- 36 min, 19–60: stall: weaponsmith: waiting for coal 100% of the last 5 minutes.
- 9 min, 20–51: stall: barracks: waiting for weapons from the weaponsmith 100% of the last 5 minutes.
- 26 min, 21–50: stall: iron mine: deposit worn out 93% of the last 5 minutes.
- 29 min, 26–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 1 min, 43: stall: quarry: stone pile full, waiting for carriers 100% of the last 5 minutes.
- 2 min, 43–44: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 1 min, 43: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 2 min, 45–46: army: Lost 4 soldiers in the last 5 minutes.
- 14 min, 47–60: stall: coal mine: needs bread or fish 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 3 | 8 | 8 | 17 | 0 | 0 | 0 | 0 | 0 | 7 | 5 | 17 | 13 | 0 | 0 | 0 | 1 | 7 | 38 | 2220 | 4422 |
| 30 | 24 | 8 | 16 | 16 | 0 | 0 | 0 | 0 | 0 | 21 | 6 | 20 | 14 | 8 | 0 | 0 | 0 | 10 | 74 | 2828 | 9392 |
| 45 | 35 | 35 | 45 | 15 | 3 | 0 | 1 | 0 | 6 | 17 | 7 | 20 | 14 | 8 | 1 | 0 | 0 | 5 | 71 | 3494 | 12864 |
| 60 | 40 | 44 | 57 | 16 | 3 | 0 | 1 | 0 | 6 | 17 | 14 | 20 | 14 | 8 | 0 | 0 | 0 | 22 | 86 | 3815 | 14494 |

At the end: buildings (built+sites) guard 4, house2 3, quarry 2, wood 2, hq 1, saw 1, forest 1, fisher 1, ironmine 1, coalmine 1, smelter 1, house 1, smith 1, weaponsmith 1, barracks 1, goldmine 1, goldsmelter 1.
People: carrier 22, soldier 19, worker 14, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 70. Soldiers: sword 9, bow 4, spear 6.

Goods produced in the game: fish 322, coal 133, log 80, ironore 78, stone 77, iron 64, plank 60, goldore 22, sword 18, spear 10, bow 8, gold 8, hammer 2, pick 2, saw 1, shovel 1, rod 1, axe 1.
Goods consumed in the game: fish 312, coal 116, stone 79, plank 76, ironore 64, log 60, iron 44, sword 18, spear 10, bow 8, goldore 8, pick 6, hammer 4, axe 2, shovel 2, saw 1, rod 1.
Goods lost in the game: stone 6, flour 6, plank 5, bread 3.
Goods captured in the game: stone 29, plank 26, log 16, flour 12, bread 6, water 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (116 building-min): Idle 100%
- quarry (103 building-min): Stone pile full, waiting for carriers 81%, Cutting stone 12%, Bringing stone to the pile 6%, Worker picking up a pickaxe 0%, Working 0%
- wood (103 building-min): Log pile full, waiting for carriers 78%, Felling a tree 16%, Bringing a log to the pile 5%, Worker picking up an axe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 76%, Sawing planks 13%, Waiting for logs 8%, Stacking outside 3%, Fetching from the pile 0%
- guard (210 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%, Waiting for a swordsman: train one at the barracks 0%
- forest (57 building-min): No free ground to plant in range inside your border 66%, Planting a sapling 33%, Worker picking up a shovel 0%, Working 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 37%, Fishing 33%, Bringing a fish to the pile 30%, Worker picking up a fishing rod 0%, No fish in range inside your border 0%
- ironmine (55 building-min): Deposit worn out: finding little iron ore 57%, Iron ore pile full, waiting for carriers 19%, Deposit thinning: mining iron ore 11%, Mining iron ore 4%, Bringing iron ore out 4%
- coalmine (55 building-min): Deposit thinning: mining coal 40%, Needs bread or fish: mining stopped 32%, Mining coal 18%, Bringing coal out 7%, Came back empty-handed 1%
- smelter (54 building-min): Output pile full, waiting for carriers 75%, Smelting iron 15%, Waiting for coal 6%, Stacking outside 3%, Worker picking up a hammer 0%
- house (53 building-min): Idle 100%
- smith (52 building-min): All tool targets met 95%, Waiting for coal 2%, Forging hammer 1%, Forging pickaxe 1%, Stacking outside 0%
- weaponsmith (50 building-min): Waiting for coal 76%, All weapon targets met 12%, Forging sword 4%, Forging spear 2%, Forging bow 2%
- barracks (49 building-min): Waiting for weapons from the weaponsmith 71%, Weapons on the way 25%, Soldier targets met 3%, Training soldiers 1%
- goldmine (48 building-min): Gold ore pile full, waiting for carriers 84%, Deposit thinning: mining gold ore 6%, Deposit worn out: finding little gold ore 5%, Mining gold ore 3%, Bringing gold ore out 1%
- goldsmelter (47 building-min): Output pile full, waiting for carriers 85%, Waiting for coal 12%, Smelting gold 2%, Stacking outside 0%, Worker picking up a hammer 0%

Building sites, time per state (site-min): Builders at work 6, Waiting for a digger 6, Leveling the ground 5, Waiting for a builder 4.

Build order (placed at min:sec, finished at): house2 0:00→0:55, quarry 0:00→1:14, wood 0:02→1:27, saw 1:28→2:05, guard 1:30→2:45, forest 1:42→3:04, fisher 2:06→3:24, guard 2:46→3:46, guard 3:48→4:32, ironmine 4:10→5:00, coalmine 4:58→5:26, smelter 5:28→6:09, house 6:10→6:46, smith 6:56→7:33, weaponsmith 8:46→9:56, barracks 10:02→11:07, goldmine 11:08→11:47, goldsmelter 12:04→13:05, wood 15:00→15:36, quarry 15:02→15:55, house2 17:00→18:22, house2 43:00→44:45.

Demolished or burned: guard (burned) 23:29, guard (burned) 41:32.

Orders given: sendUnit 136, armyTarget 53, place 22, release 20, march 8, priority 5, profession 4, attack 4, weaponKeep 3, sendIn 2, armyReserve 1. None refused.

People changing jobs: new carrier 70, carrier -> soldier 36, new soldier 21, carrier -> worker 14, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1.

People's orders (4113 in all, 4055 done): worker rest fisher 323, worker gather fisher 322, worker mine coalmine 237, worker mine ironmine 227, worker eat ironmine 167, carrier haul fish fisher -> ironmine 165, worker rest forest 139, worker gather forest 138, worker rest coalmine 135, carrier haul fish fisher -> coalmine 133, worker eat coalmine 133, explorer explore 115, worker rest wood 82, worker rest ironmine 81. Not done (outcome: times): failed: no way (carrier (haul 0) target-off-land) ×14; ended: the person is gone (became a soldier, defeated or removed) ×4.

Failed path searches (who (task) why: times): carrier (haul 0) target-off-land 14.

Fights and contact: attacked enemy buildings 4 times (first 15:48); took guard 16:45, guard 25:20, hq 38:00, guard 41:31; killed bow 22, sword 13; lost people sword 10, bow 7, spear 4; first saw player 1 at 16:00.

Your notes (10 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 6 field soldiers, 3 posts, carriers 22 (11 idle), coal/iron 1/1, sites 0, tips none.
- ×3 15:48–41:16 Attack: 7 field troops against guard 103; threshold 4.
- ×4 20:00–50:00 Adaptive plan: 19 field soldiers, 4 posts, carriers 22 (20 idle), coal/iron 1/1, sites 0, tips stall.
- 37:08 Attack: 15 field troops against hq 1; threshold 15.


Script: 1896 turns, 0.8 ms average, worst 14 ms, 0 over 0.3 s, 0 errors. Orders refused: none.
