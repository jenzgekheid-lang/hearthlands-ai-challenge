# Tournament: chatgpt

Game version 207. Written for: chatgpt 207.

- chatgpt: hearthlands-ai-challenge, commit 530ca7e

Maps 20261030, 777, 4242, 31, each twice (sides swapped), up to 60 game minutes (1x). 67 s.

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
| 30 | 21/1/2035/24/26 | 64/11/6530/22/98 |
| 45 | 26/3/3581/29/41 | 74/19/11735/45/95 |
| 60 | 27/4/4360/37/33 | 79/24/15263/76/84 |
| first | 5 7 9 9 40 - | 8 9 17 17 22 31 |

Soldiers every 5 min: 10 10 15 21 24 24 26 29 29 30 32 37 (original game NPC: 10 10 10 13 20 22 35 36 45 54 63 76).

First army orders (game min:sec): 2:26 sendIn 1 soldiers -> building 90; 8:26 armyTarget sword=5; 8:26 armyTarget spear=3; 8:26 armyReserve; 10:06 armyTarget sword=4; 10:06 armyTarget spear=2; 10:26 armyTarget sword=5; 10:26 armyTarget spear=3; 14:06 armyTarget bow=3; 14:26 armyTarget sword=6; 14:46 armyTarget spear=4; 15:00 march 5 soldiers -> 60,132.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 19 min, 6–39: stall: fisher: no fish in range inside your border 79% of the last 5 minutes.
- 2 min, 9–10: stall: smith: waiting for coal 84% of the last 5 minutes.
- 12 min, 9–46: stall: iron mine: needs meat or fish 100% of the last 5 minutes.
- 18 min, 11–51: stall: barracks: waiting for weapons from the weaponsmith 97% of the last 5 minutes.
- 2 min, 11–12: stall: weaponsmith: waiting for coal 95% of the last 5 minutes.
- 38 min, 13–60: stall: smelter: waiting for iron ore 87% of the last 5 minutes.
- 29 min, 19–60: stall: weaponsmith: waiting for iron 84% of the last 5 minutes.
- 28 min, 24–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 2 min, 30–31: stall: quarry: stone pile full, waiting for carriers 100% of the last 5 minutes.
- 4 min, 30–33: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 1 min, 30: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 5 min, 30–38: settlers: No free settlers and every bed taken: build houses.
- 2 min, 32–33: stall: barracks: waiting for a free settler to train 100% of the last 5 minutes.
- 1 min, 38: stall: water hut: water pile full, waiting for carriers 96% of the last 5 minutes.
- 1 min, 38: stall: mill: output pile full, waiting for carriers 96% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 5 | 8 | 6 | 3 | 2 | 0 | 14 | 8 | 14 | 18 | 0 | 2 | 0 | 0 | 0 | 1 | 0 | 9 | 34 | 1616 | 2872 |
| 30 | 24 | 8 | 16 | 4 | 12 | 0 | 13 | 16 | 13 | 26 | 0 | 7 | 0 | 0 | 0 | 1 | 0 | 0 | 84 | 2035 | 3637 |
| 45 | 24 | 8 | 16 | 6 | 14 | 0 | 14 | 16 | 14 | 32 | 0 | 4 | 14 | 8 | 0 | 0 | 0 | 14 | 102 | 3581 | 6446 |
| 60 | 24 | 8 | 16 | 9 | 14 | 0 | 14 | 16 | 14 | 32 | 0 | 4 | 14 | 8 | 0 | 0 | 0 | 7 | 102 | 4360 | 8258 |

At the end: buildings (built+sites) guard 3, house2 2, quarry 2, wood 2, hq 1, saw 1, forest 1, fisher 1, ironmine 1, coalmine 1, smelter 1, house 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, mill 1, bakery 1, goldmine 1, goldsmelter 1, tower 1.
People: soldier 31, worker 18, carrier 7, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 50. Soldiers: sword 15, bow 8, spear 8.

Goods produced in the game: coal 114, fish 101, log 96, stone 94, plank 76, grain 74, water 58, flour 58, bread 44, ironore 39, iron 39, goldore 22, sword 14, spear 8, gold 8, bow 5, hammer 2, pick 2, saw 1, shovel 1, rod 1, axe 1.
Goods consumed in the game: fish 98, stone 96, plank 92, coal 82, log 76, grain 58, water 44, flour 44, ironore 39, iron 35, bread 30, sword 14, spear 8, goldore 8, pick 6, bow 5, hammer 4, axe 2, shovel 2, saw 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (86 building-min): Idle 100%
- quarry (102 building-min): Stone pile full, waiting for carriers 75%, Cutting stone 16%, Bringing stone to the pile 8%, Worker picking up a pickaxe 0%, Working 0%
- wood (103 building-min): Log pile full, waiting for carriers 75%, Felling a tree 19%, Bringing a log to the pile 6%, Worker picking up an axe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 75%, Sawing planks 17%, Waiting for logs 4%, Stacking outside 3%, Fetching from the pile 0%
- guard (92 building-min): Idle 99%, Soldiers on the way 1%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 64%, Planting a sapling 35%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- fisher (57 building-min): No fish in range inside your border 83%, Fishing 11%, Bringing a fish to the pile 6%, Worker picking up a fishing rod 0%, Idle 0%
- ironmine (57 building-min): Needs meat or fish: mining stopped 68%, Deposit worn out: finding little iron ore 15%, Deposit thinning: mining iron ore 9%, Mining iron ore 4%, Bringing iron ore out 2%
- coalmine (56 building-min): Coal pile full, waiting for carriers 48%, Mining coal 25%, Deposit thinning: mining coal 12%, Needs bread or fish: mining stopped 7%, Bringing coal out 5%
- smelter (55 building-min): Waiting for iron ore 87%, Smelting iron 9%, Stacking outside 2%, Waiting for coal 1%, Worker picking up a hammer 0%
- house (55 building-min): Idle 100%
- smith (54 building-min): All tool targets met 91%, Waiting for coal 6%, Worker picking up a hammer 1%, Forging pickaxe 0%, Forging hammer 0%
- weaponsmith (52 building-min): Waiting for iron 71%, Waiting for coal 10%, All weapon targets met 10%, Forging sword 3%, Forging spear 2%
- barracks (51 building-min): Waiting for weapons from the weaponsmith 72%, Waiting for a free settler to train 15%, Weapons on the way 6%, Soldier targets met 6%, Training soldiers 1%
- farm (49 building-min): Grain pile full, waiting for carriers 78%, Sowing a field 11%, Harvesting grain 8%, Bringing grain to the pile 4%, Worker picking up a scythe 0%
- waterhut (48 building-min): Water pile full, waiting for carriers 89%, Fetching water 6%, Bringing water to the pile 5%, Working 0%
- mill (47 building-min): Output pile full, waiting for carriers 89%, Grinding flour 7%, Stacking outside 3%, Fetching from the pile 0%, Waiting for grain 0%
- bakery (46 building-min): Output pile full, waiting for carriers 75%, Baking bread 22%, Stacking outside 2%, Fetching from the pile 0%, Waiting for water 0%
- goldmine (24 building-min): Gold ore pile full, waiting for carriers 68%, Deposit thinning: mining gold ore 13%, Mining gold ore 7%, Deposit worn out: finding little gold ore 4%, Worker picking up a pickaxe 4%
- goldsmelter (23 building-min): Output pile full, waiting for carriers 88%, Smelting gold 5%, Worker picking up a hammer 3%, Waiting for coal and gold ore 2%, Waiting for gold ore 1%
- tower (21 building-min): Idle 99%, Soldiers on the way 1%, Waiting for a soldier 0%

Building sites, time per state (site-min): Builders at work 7, Leveling the ground 7, Waiting for a digger 5, Waiting for materials 4, Waiting for a builder 3.

Build order (placed at min:sec, finished at): house2 0:00→0:57, quarry 0:00→1:28, wood 0:02→1:11, saw 1:12→1:58, guard 1:14→2:25, forest 1:44→2:44, fisher 2:06→3:03, ironmine 2:46→3:20, coalmine 3:00→3:35, smelter 3:46→4:41, house 4:42→5:23, smith 5:34→6:21, weaponsmith 7:12→8:05, barracks 8:24→8:59, farm 10:00→10:52, waterhut 11:04→12:06, mill 11:52→12:38, bakery 13:12→13:48, wood 15:00→15:36, quarry 15:02→16:08, house2 30:00→33:28, guard 33:42→34:38, goldmine 35:18→36:18, goldsmelter 36:18→37:27, tower 37:22→39:17, guard 50:00→51:05.

Orders given: sendUnit 137, armyTarget 41, place 26, release 20, march 12, priority 5, profession 4, weaponKeep 3, sendIn 2, armyReserve 1. None refused.

People changing jobs: new carrier 50, carrier -> soldier 27, carrier -> worker 18, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1, new soldier 1.

People's orders (3870 in all, 3842 done): worker rest farm 154, worker gather farm 153, worker mine coalmine 143, worker rest forest 140, worker gather forest 139, worker rest coalmine 116, explorer explore 115, worker rest fisher 102, worker gather fisher 101, worker rest wood 98, worker mine ironmine 97, worker gather wood 96, worker rest quarry 96, worker gather quarry 94. None failed.

Failed path searches (who (task) why: times): pioneer (claim 1) cut-off 1, soldier (march 0) cut-off 1.

Fights and contact: first saw player 2 at 43:00.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Adaptive plan: 10 field soldiers, 0 posts, carriers 6 (6 idle), coal/iron 0/0, sites 0, tips none.
- ×4 10:00–50:00 Adaptive plan: 25 field soldiers, 3 posts, carriers 14 (14 idle), coal/iron 1/1, sites 0, tips stall.
- 30:00 Adaptive plan: 22 field soldiers, 1 posts, carriers 2 (0 idle), coal/iron 1/1, sites 0, tips stall/settlers.


Script: 1800 turns, 1.2 ms average, worst 20 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 31: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 15/1/1589/25/25 | 33/6/2856/10/60 |
| 30 | 26/1/2007/38/52 | 72/14/6729/36/104 |
| 45 | 29/3/3560/60/50 | 82/23/13526/68/92 |
| 60 | 32/4/4296/70/40 | 89/29/18311/84/96 |
| first | 5 7 9 11 37 - | 7 8 14 16 27 32 |

Soldiers every 5 min: 10 10 25 31 33 38 52 57 60 66 70 70 (original game NPC: 10 10 10 18 21 36 51 62 68 74 79 84).

First army orders (game min:sec): 2:18 sendIn 1 soldiers -> building 90; 9:28 armyTarget sword=5; 9:28 armyTarget spear=3; 9:28 armyReserve; 10:28 armyTarget sword=6; 10:28 armyTarget bow=3; 10:48 armyTarget spear=4; 11:08 armyTarget sword=7; 11:28 armyTarget bow=4; 11:48 armyTarget sword=8; 12:08 armyTarget spear=5; 12:28 armyTarget sword=9.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 5 min, 12–16: stall: smelter: waiting for coal 60% of the last 5 minutes.
- 6 min, 14–43: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 13 min, 14–43: settlers: No free settlers and every bed taken: build houses.
- 13 min, 16–60: stall: barracks: waiting for weapons from the weaponsmith 100% of the last 5 minutes.
- 2 min, 18–19: stall: iron mine: needs meat or fish 58% of the last 5 minutes.
- 4 min, 21–24: stall: water hut: water pile full, waiting for carriers 88% of the last 5 minutes.
- 2 min, 21–22: stall: farm: grain pile full, waiting for carriers 96% of the last 5 minutes.
- 3 min, 23–43: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 28 min, 23–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 27 min, 25–52: stall: smelter: waiting for iron ore 87% of the last 5 minutes.
- 27 min, 27–54: stall: iron mine: deposit worn out 94% of the last 5 minutes.
- 2 min, 28–43: stall: quarry: stone pile full, waiting for carriers 100% of the last 5 minutes.
- 3 min, 50–52: stall: weaponsmith: waiting for iron 90% of the last 5 minutes.
- 7 min, 53–59: stall: goldsmelter: waiting for coal 97% of the last 5 minutes.
- 5 min, 53–57: stall: gold mine: deposit worn out 94% of the last 5 minutes.
- 1 min, 60: stall: weaponsmith: waiting for coal 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 12 | 14 | 12 | 5 | 0 | 0 | 0 | 0 | 0 | 11 | 6 | 10 | 0 | 0 | 1 | 0 | 0 | 0 | 22 | 1589 | 2975 |
| 30 | 24 | 8 | 16 | 16 | 11 | 9 | 19 | 17 | 14 | 22 | 0 | 16 | 0 | 0 | 1 | 0 | 0 | 19 | 91 | 2007 | 3401 |
| 45 | 21 | 8 | 15 | 16 | 11 | 12 | 18 | 18 | 13 | 17 | 0 | 9 | 0 | 0 | 1 | 0 | 0 | 19 | 89 | 3560 | 5681 |
| 60 | 24 | 8 | 16 | 20 | 11 | 12 | 18 | 21 | 13 | 9 | 0 | 18 | 14 | 3 | 0 | 0 | 0 | 7 | 113 | 4296 | 7010 |

At the end: buildings (built+sites) house2 3, guard 3, house 3, quarry 2, wood 2, hq 1, saw 1, forest 1, fisher 1, coalmine 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, mill 1, bakery 1, pigfarm 1, butcher 1, tower 1, goldmine 1, goldsmelter 1.
People: soldier 62, worker 20, carrier 12, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 90. Soldiers: sword 29, bow 18, spear 15.

Goods produced in the game: grain 175, coal 168, water 159, fish 157, log 117, stone 116, plank 97, ironore 87, iron 87, pig 77, flour 76, meat 64, bread 62, sword 30, goldore 17, spear 15, bow 15, gold 3, hammer 2, axe 2, pick 2, saw 1, shovel 1, rod 1.
Goods consumed in the game: coal 159, grain 154, fish 143, water 141, stone 118, plank 113, log 97, ironore 87, iron 69, pig 64, flour 63, meat 52, bread 51, sword 30, spear 15, bow 15, pick 6, hammer 4, axe 3, goldore 3, shovel 2, saw 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (106 building-min): Idle 100%
- quarry (102 building-min): Stone pile full, waiting for carriers 70%, Cutting stone 19%, Bringing stone to the pile 10%, Worker picking up a pickaxe 0%, Idle 0%
- wood (103 building-min): Log pile full, waiting for carriers 70%, Felling a tree 23%, Bringing a log to the pile 7%, Worker picking up an axe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 68%, Sawing planks 21%, Waiting for logs 6%, Stacking outside 4%, Fetching from the pile 1%
- guard (92 building-min): Idle 99%, Soldiers on the way 1%
- forest (57 building-min): No free ground to plant in range inside your border 60%, Planting a sapling 40%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 59%, Fishing 19%, Bringing a fish to the pile 15%, No fish in range inside your border 7%, Worker picking up a fishing rod 0%
- coalmine (56 building-min): Deposit thinning: mining coal 49%, Mining coal 22%, Deposit worn out: finding little coal 10%, Bringing coal out 8%, Coal pile full, waiting for carriers 4%
- ironmine (56 building-min): Deposit worn out: finding little iron ore 66%, Deposit thinning: mining iron ore 10%, Needs meat or fish: mining stopped 9%, Mining iron ore 5%, Bringing iron ore out 4%
- smelter (55 building-min): Waiting for iron ore 62%, Smelting iron 20%, Waiting for coal 8%, Stacking outside 4%, Output pile full, waiting for carriers 2%
- house (135 building-min): Idle 100%
- smith (53 building-min): All tool targets met 97%, Forging hammer 1%, Forging axe 0%, Forging pickaxe 0%, Stacking outside 0%
- weaponsmith (51 building-min): All weapon targets met 33%, Waiting for iron 28%, Waiting for coal 18%, Forging sword 8%, Forging bow 4%
- barracks (50 building-min): Waiting for weapons from the weaponsmith 70%, Soldier targets met 18%, Weapons on the way 11%, Training soldiers 2%
- farm (45 building-min): Grain pile full, waiting for carriers 45%, Sowing a field 26%, Harvesting grain 19%, Bringing grain to the pile 10%, Worker picking up a scythe 0%
- waterhut (45 building-min): Water pile full, waiting for carriers 63%, Fetching water 19%, Bringing water to the pile 18%, Worker on the way 0%, Working 0%
- mill (38 building-min): Output pile full, waiting for carriers 82%, Grinding flour 11%, Stacking outside 5%, Fetching from the pile 0%, Worker on the way 0%
- bakery (38 building-min): Output pile full, waiting for carriers 52%, Baking bread 37%, Waiting for flour 5%, Stacking outside 5%, Waiting for flour and water 1%
- pigfarm (36 building-min): Raising a pig 49%, Output pile full, waiting for carriers 43%, Stacking outside 6%, Waiting for water 1%, Fetching from the pile 1%
- butcher (35 building-min): Output pile full, waiting for carriers 71%, Butchering 14%, Waiting for pigs 8%, Stacking outside 5%, Worker picking up an axe 1%
- tower (23 building-min): Idle 99%, Soldiers on the way 1%, Waiting for a soldier 0%
- goldmine (12 building-min): Deposit worn out: finding little gold ore 76%, Gold ore pile full, waiting for carriers 13%, Bringing gold ore out 4%, Mining gold ore 3%, Worker picking up a pickaxe 2%
- goldsmelter (12 building-min): Waiting for coal 94%, Smelting gold 3%, Worker picking up a hammer 2%, Stacking outside 1%, Working 0%

Building sites, time per state (site-min): Builders at work 9, Leveling the ground 9, Waiting for a digger 8, Waiting for a builder 5, Waiting for materials 0.

Build order (placed at min:sec, finished at): house2 0:00→0:54, quarry 0:00→1:25, wood 0:02→1:09, saw 1:10→1:49, guard 1:12→2:17, forest 1:46→2:33, fisher 2:12→3:01, coalmine 2:24→3:36, ironmine 2:40→3:51, smelter 4:02→4:47, house 4:50→5:23, smith 6:12→6:54, weaponsmith 8:00→8:58, barracks 9:26→10:08, farm 13:52→15:01, waterhut 14:26→15:28, wood 15:00→15:49, quarry 15:44→16:33, house 15:44→17:15, mill 20:48→21:39, bakery 20:50→22:16, house 21:24→22:35, pigfarm 23:02→23:51, butcher 24:16→25:03, house2 27:36→29:01, guard 33:20→34:28, tower 35:00→36:49, house2 43:00→44:11, goldmine 46:54→47:34, goldsmelter 47:34→48:29, guard 50:00→50:50.

Orders given: sendUnit 139, armyTarget 76, place 31, release 30, march 15, priority 5, profession 4, sendIn 4, weaponKeep 3, armyReserve 1. None refused.

People changing jobs: new carrier 90, carrier -> soldier 60, carrier -> worker 20, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1, new soldier 1.

People's orders (6704 in all, 6667 done): worker rest farm 358, worker gather farm 358, worker mine coalmine 253, worker mine ironmine 185, worker rest forest 176, worker gather forest 175, worker rest coalmine 172, worker rest waterhut 160, worker gather waterhut 159, worker rest fisher 158, worker gather fisher 157, worker rest wood 119, worker rest quarry 118, worker gather wood 117. None failed.

Failed path searches (who (task) why: times): pioneer (claim 1) cut-off 1.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 8 field soldiers, 1 posts, carriers 22 (17 idle), coal/iron 1/1, sites 1, tips none.
- ×4 20:00–50:00 Adaptive plan: 60 field soldiers, 3 posts, carriers 16 (14 idle), coal/iron 1/1, sites 0, tips stall.


Script: 1800 turns, 1.2 ms average, worst 18 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 19/2/1975/10/40 | 31/6/2527/10/47 |
| 30 | 28/2/2383/26/54 | 49/7/3468/11/69 |
| 45 | 29/3/3502/38/42 | 70/15/7111/50/80 |
| 60 | 31/4/4242/53/47 | 81/23/13457/72/98 |
| first | 8 9 11 12 38 - | 12 13 14 14 26 46 |

Soldiers every 5 min: 10 10 10 10 18 26 37 37 38 42 49 53 (original game NPC: 10 10 10 10 11 11 18 40 50 58 65 72).

First army orders (game min:sec): 2:22 sendIn 1 soldiers -> building 91; 10:52 armyTarget sword=5; 10:52 armyTarget spear=3; 10:52 armyReserve; 15:00 march 5 soldiers -> 76,120; 15:12 armyTarget sword=4; 15:12 armyTarget spear=2; 15:32 armyTarget sword=7; 15:32 armyTarget spear=4; 15:32 armyTarget bow=3; 15:52 armyTarget sword=6; 15:52 armyTarget spear=3.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 24 min, 5–38: stall: fisher: no fish in range inside your border 89% of the last 5 minutes.
- 10 min, 9–18: stall: iron mine: needs meat or fish 100% of the last 5 minutes.
- 11 min, 10–28: stall: smelter: waiting for iron ore 63% of the last 5 minutes.
- 16 min, 14–47: stall: barracks: waiting for weapons from the weaponsmith 96% of the last 5 minutes.
- 6 min, 15–20: stall: smith: waiting for iron 91% of the last 5 minutes.
- 6 min, 19–24: stall: weaponsmith: waiting for iron 78% of the last 5 minutes.
- 2 min, 25–26: stall: butcher: waiting for pigs 56% of the last 5 minutes.
- 2 min, 27–57: stall: quarry: stone pile full, waiting for carriers 100% of the last 5 minutes.
- 4 min, 27–57: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 2 min, 27–29: stall: mill: output pile full, waiting for carriers 88% of the last 5 minutes.
- 5 min, 27–58: settlers: No free settlers and every bed taken: build houses.
- 12 min, 28–54: stall: iron mine: deposit worn out 93% of the last 5 minutes.
- 19 min, 30–58: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 25 min, 31–60: stall: goldsmelter: waiting for coal 100% of the last 5 minutes.
- 1 min, 35: stall: gold mine: deposit worn out 94% of the last 5 minutes.
- 5 min, 40–44: stall: weaponsmith: waiting for coal 100% of the last 5 minutes.
- 9 min, 48–60: stall: coal mine: deposit worn out 91% of the last 5 minutes.
- 1 min, 57: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 1 min, 58: stall: fisher: fish pile full, waiting for carriers 100% of the last 5 minutes.
- 3 min, 58–60: stall: smelter: waiting for coal 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 15 | 8 | 5 | 1 | 0 | 0 | 8 | 7 | 0 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 11 | 29 | 1975 | 3583 |
| 30 | 22 | 8 | 16 | 1 | 10 | 12 | 18 | 16 | 13 | 14 | 1 | 8 | 6 | 6 | 0 | 0 | 0 | 7 | 79 | 2383 | 4199 |
| 45 | 24 | 8 | 16 | 8 | 14 | 12 | 20 | 22 | 14 | 10 | 5 | 20 | 14 | 6 | 0 | 0 | 0 | 11 | 119 | 3502 | 6239 |
| 60 | 24 | 8 | 16 | 13 | 14 | 12 | 20 | 22 | 14 | 9 | 14 | 10 | 14 | 6 | 0 | 1 | 0 | 17 | 124 | 4242 | 7301 |

At the end: buildings (built+sites) house2 3, guard 3, quarry 2, wood 2, house 2, hq 1, saw 1, forest 1, fisher 1, coalmine 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, mill 1, bakery 1, pigfarm 1, butcher 1, goldmine 1, goldsmelter 1, tower 1.
People: soldier 46, worker 20, carrier 19, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 80. Soldiers: sword 22, bow 13, spear 11.

Goods produced in the game: grain 220, water 204, coal 131, flour 120, log 114, stone 113, bread 106, plank 94, pig 78, ironore 77, meat 64, iron 63, fish 34, sword 22, goldore 20, spear 12, bow 10, gold 6, axe 2, pick 2, hammer 2, saw 1, shovel 1, rod 1.
Goods consumed in the game: grain 198, water 184, coal 122, stone 115, plank 110, flour 106, log 94, bread 92, pig 64, ironore 63, iron 53, meat 52, fish 27, sword 22, spear 11, bow 10, pick 6, goldore 6, hammer 4, axe 3, shovel 2, saw 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (91 building-min): Idle 100%
- quarry (99 building-min): Stone pile full, waiting for carriers 75%, Cutting stone 18%, Bringing stone to the pile 7%, Worker picking up a pickaxe 0%, Working 0%
- wood (100 building-min): Log pile full, waiting for carriers 73%, Felling a tree 21%, Bringing a log to the pile 4%, Needs a worker with an axe 1%, Worker picking up an axe 1%
- saw (58 building-min): Output pile full, waiting for carriers 74%, Sawing planks 21%, Stacking outside 4%, Fetching from the pile 1%, Worker picking up a saw 0%
- guard (122 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 56%, Planting a sapling 43%, Worker picking up a shovel 0%, Idle 0%
- fisher (57 building-min): No fish in range inside your border 68%, Fish pile full, waiting for carriers 21%, Bringing a fish to the pile 6%, Fishing 5%, Worker picking up a fishing rod 0%
- coalmine (56 building-min): Deposit worn out: finding little coal 40%, Deposit thinning: mining coal 21%, Needs bread or fish: mining stopped 13%, Mining coal 12%, Bringing coal out 6%
- ironmine (53 building-min): Deposit worn out: finding little iron ore 52%, Needs meat or fish: mining stopped 22%, Iron ore pile full, waiting for carriers 11%, Deposit thinning: mining iron ore 6%, Bringing iron ore out 4%
- smelter (52 building-min): Waiting for iron ore 45%, Output pile full, waiting for carriers 20%, Waiting for coal 16%, Smelting iron 15%, Stacking outside 3%
- house (92 building-min): Idle 100%
- smith (51 building-min): All tool targets met 77%, Waiting for iron 19%, Worker picking up a hammer 1%, Forging axe 1%, Forging hammer 1%
- weaponsmith (49 building-min): Waiting for coal 43%, Waiting for iron 24%, All weapon targets met 18%, Forging sword 6%, Forging spear 3%
- barracks (48 building-min): Waiting for weapons from the weaponsmith 75%, Weapons on the way 13%, Soldier targets met 11%, Training soldiers 1%
- farm (47 building-min): Sowing a field 34%, Grain pile full, waiting for carriers 27%, Harvesting grain 25%, Bringing grain to the pile 13%, Worker picking up a scythe 1%
- waterhut (46 building-min): Water pile full, waiting for carriers 73%, Fetching water 16%, Bringing water to the pile 12%, Idle 0%, Working 0%
- mill (45 building-min): Output pile full, waiting for carriers 75%, Grinding flour 14%, Stacking outside 7%, Waiting for grain 2%, Fetching from the pile 1%
- bakery (44 building-min): Baking bread 54%, Output pile full, waiting for carriers 37%, Stacking outside 6%, Waiting for water 1%, Fetching from the pile 1%
- pigfarm (43 building-min): Output pile full, waiting for carriers 47%, Raising a pig 41%, Waiting for grain 5%, Stacking outside 5%, Fetching from the pile 1%
- butcher (42 building-min): Output pile full, waiting for carriers 69%, Waiting for pigs 14%, Butchering 12%, Stacking outside 4%, Worker picking up an axe 0%
- goldmine (37 building-min): Gold ore pile full, waiting for carriers 56%, Deposit worn out: finding little gold ore 24%, Deposit thinning: mining gold ore 6%, Needs fish or bread or meat: mining stopped 5%, Mining gold ore 4%
- goldsmelter (36 building-min): Waiting for coal 94%, Smelting gold 2%, Waiting for gold ore 2%, Worker picking up a hammer 1%, Stacking outside 0%
- tower (23 building-min): Idle 99%, Soldiers on the way 1%

Building sites, time per state (site-min): Builders at work 9, Leveling the ground 9, Waiting for a digger 6, Waiting for a builder 5, Waiting for materials 0.

Build order (placed at min:sec, finished at): house2 0:00→1:07, quarry 0:00→1:39, wood 0:02→1:22, saw 1:24→2:00, guard 1:26→2:21, forest 1:58→2:35, fisher 2:20→2:51, guard 2:54→3:55, coalmine 3:10→4:14, ironmine 6:10→6:40, smelter 6:40→7:31, house 7:32→8:07, smith 8:12→8:59, weaponsmith 9:40→10:48, barracks 10:50→11:43, farm 12:14→13:18, waterhut 13:10→14:06, mill 13:52→14:58, bakery 15:02→15:44, pigfarm 16:28→17:25, butcher 17:24→18:00, wood 17:52→18:24, quarry 18:36→19:19, house 19:20→19:55, goldmine 21:42→22:47, goldsmelter 22:48→23:35, house2 27:26→29:15, tower 35:00→37:12, guard 50:00→51:18, house2 57:00→58:22.

Orders given: sendUnit 136, armyTarget 86, release 33, place 30, march 15, priority 5, profession 4, sendIn 3, weaponKeep 3, armyReserve 1. None refused.

People changing jobs: new carrier 80, carrier -> soldier 43, carrier -> worker 20, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1, new soldier 1.

People's orders (6536 in all, 6503 done): worker rest farm 444, worker gather farm 443, worker rest waterhut 205, worker gather waterhut 204, worker mine coalmine 185, worker rest forest 169, worker gather forest 168, worker rest coalmine 133, carrier haul grain farm -> mill 128, worker mine ironmine 127, worker rest mill 121, worker toCraft mill 120, worker craft mill 120, worker rest wood 116. None failed.

Failed path searches (who (task) why: times): pioneer (claim 1) cut-off 3.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Adaptive plan: 10 field soldiers, 0 posts, carriers 6 (6 idle), coal/iron 0/0, sites 0, tips none.
- ×5 10:00–50:00 Adaptive plan: 36 field soldiers, 3 posts, carriers 10 (5 idle), coal/iron 1/1, sites 0, tips stall.


Script: 1800 turns, 1.0 ms average, worst 19 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 17/3/2224/15/45 | 31/6/2724/10/44 |
| 30 | 22/3/2623/40/40 | 56/7/4034/17/73 |
| 45 | 25/3/2976/50/30 | 74/16/9530/50/90 |
| 60 | 27/4/3724/56/44 | 79/21/13557/62/98 |
| first | 8 10 12 13 57 - | 8 8 9 10 32 37 |

Soldiers every 5 min: 10 10 15 25 36 40 47 48 50 52 53 56 (original game NPC: 10 10 10 10 10 17 23 35 50 60 61 62).

First army orders (game min:sec): 2:40 sendIn 1 soldiers -> building 101; 11:28 armyTarget sword=5; 11:28 armyTarget spear=3; 11:28 armyReserve; 13:08 armyTarget bow=3; 15:00 march 5 soldiers -> 220,98; 15:08 armyTarget sword=7; 15:08 armyTarget spear=4; 17:08 armyTarget bow=4; 17:28 armyTarget sword=8; 18:00 march 5 soldiers -> 184,142; 18:08 armyTarget spear=5.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 6–7: army: Lost 4 soldiers in the last 5 minutes, and no barracks to train new ones.
- 5 min, 8–53: stall: quarry: stone pile full, waiting for carriers 99% of the last 5 minutes.
- 7 min, 8–54: settlers: No free settlers and every bed taken: build houses.
- 41 min, 13–59: stall: smelter: waiting for coal 93% of the last 5 minutes.
- 22 min, 15–60: stall: barracks: waiting for weapons from the weaponsmith 93% of the last 5 minutes.
- 15 min, 15–60: stall: weaponsmith: waiting for iron 89% of the last 5 minutes.
- 16 min, 23–46: stall: iron mine: deposit worn out 94% of the last 5 minutes.
- 23 min, 23–55: stall: forest: no free ground to plant in range inside your border 97% of the last 5 minutes.
- 5 min, 26–54: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 2 min, 33–54: stall: farm: grain pile full, waiting for carriers 100% of the last 5 minutes.
- 1 min, 33: stall: water hut: water pile full, waiting for carriers 100% of the last 5 minutes.
- 5 min, 48–60: stall: coal mine: deposit worn out 92% of the last 5 minutes.
- 1 min, 52: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 1 min, 52: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 10 | 8 | 8 | 15 | 0 | 0 | 0 | 0 | 0 | 13 | 13 | 6 | 0 | 0 | 0 | 0 | 0 | 25 | 36 | 2224 | 4526 |
| 30 | 19 | 8 | 16 | 9 | 0 | 0 | 8 | 8 | 0 | 9 | 2 | 5 | 0 | 0 | 1 | 0 | 0 | 14 | 57 | 2623 | 5019 |
| 45 | 24 | 8 | 16 | 24 | 0 | 12 | 13 | 13 | 0 | 8 | 10 | 2 | 0 | 0 | 0 | 0 | 0 | 1 | 95 | 2976 | 5250 |
| 60 | 24 | 8 | 16 | 23 | 0 | 12 | 13 | 14 | 0 | 6 | 12 | 2 | 0 | 0 | 0 | 0 | 0 | 16 | 97 | 3724 | 6471 |

At the end: buildings (built+sites) house2 4, guard 3, quarry 2, wood 2, fisher 2, hq 1, saw 1, forest 1, ironmine 1, coalmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, pigfarm 1, butcher 1, tower 1.
People: soldier 49, carrier 19, worker 17, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 80. Soldiers: sword 22, bow 14, spear 13.

Goods produced in the game: fish 277, coal 118, log 100, stone 100, plank 80, ironore 69, grain 69, water 68, iron 57, pig 54, meat 41, sword 22, spear 13, bow 11, rod 2, axe 2, saw 1, shovel 1, hammer 1, pick 1.
Goods consumed in the game: fish 260, coal 112, stone 102, plank 96, log 80, ironore 57, iron 55, water 55, grain 55, pig 41, meat 29, sword 22, spear 13, bow 11, pick 5, axe 3, hammer 3, shovel 2, rod 2, saw 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (148 building-min): Idle 100%
- quarry (103 building-min): Stone pile full, waiting for carriers 77%, Cutting stone 15%, Bringing stone to the pile 7%, Worker picking up a pickaxe 0%, Working 0%
- wood (103 building-min): Log pile full, waiting for carriers 72%, Felling a tree 21%, Bringing a log to the pile 7%, Worker picking up an axe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 74%, Sawing planks 18%, Waiting for logs 4%, Stacking outside 4%, Fetching from the pile 0%
- guard (169 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 60%, Planting a sapling 40%, Worker picking up a shovel 0%, Working 0%
- fisher (83 building-min): Fish pile full, waiting for carriers 49%, Bringing a fish to the pile 27%, Fishing 24%, Worker picking up a fishing rod 0%, Idle 0%
- ironmine (55 building-min): Deposit worn out: finding little iron ore 49%, Iron ore pile full, waiting for carriers 24%, Deposit thinning: mining iron ore 9%, Needs meat or fish: mining stopped 7%, Mining iron ore 5%
- coalmine (53 building-min): Deposit worn out: finding little coal 40%, Deposit thinning: mining coal 27%, Mining coal 17%, Bringing coal out 6%, Needs bread or fish: mining stopped 6%
- smelter (52 building-min): Waiting for coal 82%, Smelting iron 14%, Stacking outside 3%, Output pile full, waiting for carriers 0%, Worker picking up a hammer 0%
- smith (51 building-min): All tool targets met 96%, Waiting for coal 1%, Forging fishing rod 1%, Forging axe 0%, Worker picking up a hammer 0%
- weaponsmith (49 building-min): Waiting for iron 63%, All weapon targets met 20%, Forging sword 6%, Forging spear 3%, Forging bow 3%
- barracks (48 building-min): Waiting for weapons from the weaponsmith 76%, Weapons on the way 12%, Soldier targets met 10%, Training soldiers 1%, Idle 0%
- farm (34 building-min): Grain pile full, waiting for carriers 68%, Sowing a field 15%, Harvesting grain 10%, Bringing grain to the pile 5%, Worker picking up a scythe 1%
- waterhut (33 building-min): Water pile full, waiting for carriers 79%, Bringing water to the pile 10%, Fetching water 10%, Worker on the way 0%, Idle 0%
- pigfarm (27 building-min): Output pile full, waiting for carriers 47%, Raising a pig 46%, Stacking outside 5%, Waiting for water 1%, Fetching from the pile 1%
- butcher (27 building-min): Output pile full, waiting for carriers 72%, Butchering 11%, Waiting for pigs 11%, Stacking outside 4%, Worker picking up an axe 1%
- tower (4 building-min): Idle 94%, Soldiers on the way 6%, Waiting for a soldier 0%

Building sites, time per state (site-min): Leveling the ground 8, Builders at work 8, Waiting for a digger 7, Waiting for a builder 5, Waiting for materials 1.

Build order (placed at min:sec, finished at): house2 0:00→0:50, quarry 0:00→1:06, wood 0:02→1:20, saw 1:20→2:02, guard 1:22→2:39, forest 1:24→2:58, fisher 2:02→3:16, guard 2:40→3:35, guard 3:36→4:25, ironmine 3:58→4:48, coalmine 5:58→6:47, smelter 6:48→7:48, house2 7:48→9:02, smith 8:54→9:30, weaponsmith 10:20→11:21, barracks 11:26→12:04, wood 15:00→15:35, quarry 15:02→16:12, farm 24:52→26:22, waterhut 25:10→26:52, house2 26:00→27:52, pigfarm 31:58→32:55, butcher 32:20→33:25, fisher 32:58→33:48, house2 52:00→54:10, tower 54:24→56:05.

Orders given: sendUnit 151, armyTarget 58, release 33, place 26, march 15, priority 5, profession 4, weaponKeep 3, sendIn 2, armyReserve 1. None refused.

People changing jobs: new carrier 80, carrier -> soldier 46, carrier -> worker 17, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1.

People's orders (4970 in all, 4941 done): worker rest fisher 279, worker gather fisher 277, worker mine coalmine 272, carrier haul fish fisher -> coalmine 191, worker eat coalmine 187, worker rest forest 168, worker gather forest 167, worker mine ironmine 159, worker rest farm 149, worker gather farm 148, worker rest coalmine 122, explorer explore 115, worker rest quarry 102, worker rest wood 102. None failed.

Failed path searches (who (task) why: times): pioneer (claim 0) cut-off 17, pioneer (claim 1) cut-off 1.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 6 field soldiers, 3 posts, carriers 33 (27 idle), coal/iron 1/1, sites 0, tips none.
- ×4 20:00–50:00 Adaptive plan: 48 field soldiers, 3 posts, carriers 3 (2 idle), coal/iron 1/1, sites 0, tips stall.


Script: 1800 turns, 7.0 ms average, worst 21 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 11/3/2086/10/30 | 32/6/3063/10/50 |
| 30 | 19/3/2468/18/42 | 53/7/3812/29/61 |
| 45 | 21/5/3678/32/28 | 67/13/7765/45/80 |
| 60 | 22/5/3904/54/26 | 77/19/12505/66/94 |
| first | 17 20 21 21 43 - | 9 8 14 15 34 42 |

Soldiers every 5 min: 10 10 10 10 14 18 21 26 32 40 47 54 (original game NPC: 10 10 10 10 21 29 29 41 45 54 59 66).

First army orders (game min:sec): 2:44 sendIn 1 soldiers -> building 107; 15:00 march 5 soldiers -> 70,124; 18:00 march 5 soldiers -> 70,124; 20:14 armyTarget sword=7; 20:14 armyTarget spear=4; 20:14 armyTarget bow=3; 20:14 armyReserve; 24:58 march 5 soldiers -> 8,110; 25:14 armyTarget sword=9; 25:14 armyTarget spear=5; 25:14 armyTarget bow=4; 27:58 march 5 soldiers -> 8,110.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 6–7: army: Lost 4 soldiers in the last 5 minutes, and no barracks to train new ones.
- 51 min, 9–60: stall: iron mine: deposit worn out 93% of the last 5 minutes.
- 4 min, 12–15: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 2 min, 17–18: stall: sawmill: output pile full, waiting for carriers 51% of the last 5 minutes.
- 2 min, 17–18: stall: fisher: fish pile full, waiting for carriers 61% of the last 5 minutes.
- 5 min, 17–45: settlers: No free settlers and every bed taken: build houses.
- 1 min, 20: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 28 min, 22–60: stall: smelter: waiting for iron ore 85% of the last 5 minutes.
- 3 min, 23–25: stall: barracks: waiting for weapons from the weaponsmith 80% of the last 5 minutes.
- 9 min, 23–39: stall: weaponsmith: waiting for iron 82% of the last 5 minutes.
- 34 min, 27–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 1 min, 38: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 3 min, 42–45: stall: woodcutter: log pile full, waiting for carriers 88% of the last 5 minutes.
- 1 min, 42: stall: quarry: stone pile full, waiting for carriers 92% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 14 | 10 | 9 | 17 | 0 | 0 | 0 | 0 | 0 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 7 | 33 | 2086 | 3594 |
| 30 | 24 | 8 | 16 | 13 | 0 | 0 | 0 | 0 | 0 | 23 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 18 | 56 | 2468 | 4204 |
| 45 | 19 | 13 | 20 | 9 | 0 | 0 | 0 | 0 | 0 | 23 | 2 | 7 | 0 | 0 | 1 | 1 | 0 | 0 | 57 | 3678 | 6374 |
| 60 | 24 | 8 | 16 | 14 | 0 | 0 | 0 | 0 | 0 | 17 | 0 | 7 | 0 | 0 | 1 | 0 | 0 | 1 | 52 | 3904 | 6615 |

At the end: buildings (built+sites) guard 4, house2 3, quarry 2, wood 2, hq 1, saw 1, forest 1, fisher 1, ironmine 1, coalmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, tower 1.
People: soldier 47, worker 12, carrier 6, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 60. Soldiers: sword 22, bow 13, spear 12.

Goods produced in the game: fish 324, coal 126, stone 75, log 75, ironore 58, iron 58, plank 55, sword 23, spear 12, bow 10, pick 1, axe 1, saw 1, shovel 1, hammer 1, rod 1.
Goods consumed in the game: fish 316, coal 109, stone 77, plank 71, ironore 58, log 55, iron 51, sword 22, spear 12, bow 10, pick 5, hammer 3, axe 2, shovel 2, saw 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (115 building-min): Idle 100%
- quarry (102 building-min): Stone pile full, waiting for carriers 86%, Cutting stone 10%, Bringing stone to the pile 3%, Worker picking up a pickaxe 0%, Working 0%
- wood (102 building-min): Log pile full, waiting for carriers 81%, Felling a tree 15%, Bringing a log to the pile 4%, Worker picking up an axe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 85%, Sawing planks 12%, Stacking outside 3%, Fetching from the pile 0%, Worker picking up a saw 0%
- guard (189 building-min): Idle 99%, Free soldiers are too far away: bring one onto your land or near this building 0%, Soldiers on the way 0%, Waiting for a swordsman: train one at the barracks 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 64%, Planting a sapling 36%, Worker picking up a shovel 0%, Working 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 40%, Fishing 31%, Bringing a fish to the pile 28%, Worker picking up a fishing rod 0%
- ironmine (53 building-min): Deposit worn out: finding little iron ore 90%, Bringing iron ore out 3%, Came back empty-handed 2%, Fetching food 2%, Needs meat or fish: mining stopped 2%
- coalmine (44 building-min): Deposit thinning: mining coal 38%, Coal pile full, waiting for carriers 27%, Mining coal 25%, Bringing coal out 7%, Fetching food 1%
- smelter (43 building-min): Waiting for iron ore 76%, Smelting iron 17%, Stacking outside 3%, Output pile full, waiting for carriers 2%, Worker picking up a hammer 1%
- smith (41 building-min): All tool targets met 96%, Worker picking up a hammer 1%, Stacking outside 0%, Forging axe 0%, Forging saw 0%
- weaponsmith (40 building-min): Waiting for iron 48%, All weapon targets met 34%, Forging sword 7%, Forging spear 4%, Forging bow 3%
- barracks (39 building-min): Waiting for weapons from the weaponsmith 54%, Weapons on the way 32%, Soldier targets met 13%, Training soldiers 1%
- tower (17 building-min): Idle 98%, Soldiers on the way 2%

Building sites, time per state (site-min): Leveling the ground 7, Waiting for a digger 7, Builders at work 6, Waiting for a builder 4, Waiting for materials 0.

Build order (placed at min:sec, finished at): house2 0:00→1:21, quarry 0:00→1:38, wood 0:02→1:52, saw 1:54→2:28, guard 1:56→2:44, forest 2:08→3:01, fisher 2:30→3:19, guard 2:44→3:45, guard 3:46→4:47, ironmine 6:12→6:48, coalmine 14:36→15:43, wood 15:00→16:09, quarry 15:02→16:27, smelter 15:44→16:58, house2 17:00→18:39, smith 17:32→19:17, weaponsmith 19:18→20:11, barracks 20:12→20:56, guard 38:00→39:26, tower 41:38→42:35, house2 43:38→45:14.

Orders given: sendUnit 151, armyTarget 50, release 30, place 21, march 14, priority 5, profession 4, sendIn 3, weaponKeep 3, armyReserve 1. None refused.

People changing jobs: new carrier 60, carrier -> soldier 44, carrier -> worker 12, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1, new soldier 1.

People's orders (3866 in all, 3838 done): worker rest fisher 325, worker gather fisher 325, worker mine ironmine 241, worker mine coalmine 215, carrier haul fish fisher -> ironmine 204, worker eat ironmine 200, worker rest forest 137, worker gather forest 136, worker rest coalmine 127, worker eat coalmine 116, explorer explore 115, carrier haul fish fisher -> coalmine 114, worker rest quarry 77, worker rest wood 77. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×4; failed: can't reach that spot ×1.

Failed path searches (who (task) why: times): pioneer (claim 0) cut-off 23, pioneer (claim 1) cut-off 2.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Adaptive plan: 10 field soldiers, 0 posts, carriers 6 (6 idle), coal/iron 0/0, sites 0, tips none.
- ×4 10:00–50:00 Adaptive plan: 33 field soldiers, 5 posts, carriers 20 (15 idle), coal/iron 1/1, sites 0, tips stall.
- 20:00 Adaptive plan: 6 field soldiers, 3 posts, carriers 31 (26 idle), coal/iron 1/1, sites 1, tips stall/timing.


Script: 1800 turns, 1.8 ms average, worst 23 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 17/3/2225/13/47 | 34/6/2795/10/50 |
| 30 | 22/3/2607/35/45 | 47/6/3545/10/70 |
| 45 | 23/4/3821/39/41 | 65/10/6345/20/100 |
| 60 | 23/4/4222/45/35 | 70/16/11887/56/84 |
| first | 10 12 14 15 38 - | 7 8 13 14 43 48 |

Soldiers every 5 min: 10 10 13 21 30 35 39 39 39 41 43 45 (original game NPC: 10 10 10 10 10 10 10 10 20 33 48 56).

First army orders (game min:sec): 2:46 sendIn 1 soldiers -> building 104; 13:56 armyTarget sword=5; 13:56 armyTarget spear=3; 13:56 armyReserve; 15:00 march 5 soldiers -> 210,148; 15:16 armyTarget sword=7; 15:16 armyTarget spear=4; 15:16 armyTarget bow=3; 17:56 armyTarget bow=4; 18:00 march 5 soldiers -> 186,142; 18:36 armyTarget sword=8; 19:56 armyTarget spear=5.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 6–7: army: Lost 4 soldiers in the last 5 minutes, and no barracks to train new ones.
- 2 min, 10–11: stall: fisher: fish pile full, waiting for carriers 83% of the last 5 minutes.
- 2 min, 10–11: stall: sawmill: output pile full, waiting for carriers 53% of the last 5 minutes.
- 4 min, 10–28: stall: quarry: stone pile full, waiting for carriers 74% of the last 5 minutes.
- 5 min, 10–28: settlers: No free settlers and every bed taken: build houses.
- 10 min, 16–25: stall: smelter: waiting for coal 65% of the last 5 minutes.
- 18 min, 17–47: stall: barracks: waiting for weapons from the weaponsmith 100% of the last 5 minutes.
- 3 min, 17–20: stall: weaponsmith: waiting for iron 67% of the last 5 minutes.
- 33 min, 21–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 3 min, 26–28: stall: woodcutter: log pile full, waiting for carriers 85% of the last 5 minutes.
- 2 min, 29–30: stall: goldsmelter: waiting for coal and gold ore 61% of the last 5 minutes.
- 17 min, 31–55: stall: iron mine: deposit worn out 91% of the last 5 minutes.
- 7 min, 32–40: stall: gold mine: deposit worn out 95% of the last 5 minutes.
- 3 min, 32–34: stall: smelter: waiting for iron ore 82% of the last 5 minutes.
- 16 min, 37–60: stall: weaponsmith: waiting for coal 93% of the last 5 minutes.
- 13 min, 48–60: stall: coal mine: deposit worn out 94% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 8 | 8 | 4 | 15 | 0 | 0 | 0 | 0 | 0 | 7 | 13 | 6 | 0 | 0 | 0 | 1 | 0 | 23 | 29 | 2225 | 4369 |
| 30 | 20 | 8 | 16 | 11 | 0 | 0 | 0 | 0 | 0 | 12 | 0 | 7 | 3 | 0 | 0 | 0 | 0 | 18 | 43 | 2607 | 4791 |
| 45 | 24 | 8 | 16 | 13 | 0 | 0 | 0 | 0 | 0 | 15 | 3 | 20 | 14 | 8 | 0 | 0 | 0 | 16 | 71 | 3821 | 6848 |
| 60 | 24 | 8 | 16 | 20 | 0 | 0 | 0 | 0 | 0 | 17 | 14 | 20 | 14 | 8 | 0 | 0 | 0 | 12 | 86 | 4222 | 7558 |

At the end: buildings (built+sites) house2 3, guard 3, quarry 2, wood 2, hq 1, saw 1, forest 1, fisher 1, ironmine 1, coalmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, goldmine 1, goldsmelter 1, tower 1.
People: soldier 39, worker 14, carrier 13, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 60. Soldiers: sword 19, bow 10, spear 10.

Goods produced in the game: fish 385, coal 131, log 82, stone 79, ironore 77, iron 63, plank 62, goldore 22, sword 18, spear 10, gold 8, bow 7, hammer 2, pick 2, saw 1, shovel 1, rod 1, axe 1.
Goods consumed in the game: fish 371, coal 114, stone 81, plank 78, ironore 63, log 62, iron 43, sword 18, spear 10, goldore 8, bow 7, pick 6, hammer 4, axe 2, shovel 2, saw 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (139 building-min): Idle 100%
- quarry (102 building-min): Stone pile full, waiting for carriers 79%, Cutting stone 14%, Bringing stone to the pile 7%, Worker picking up a pickaxe 0%, Working 0%
- wood (102 building-min): Log pile full, waiting for carriers 75%, Felling a tree 17%, Bringing a log to the pile 7%, Worker picking up an axe 1%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 80%, Sawing planks 14%, Stacking outside 3%, Waiting for logs 3%, Fetching from the pile 0%
- guard (169 building-min): Idle 100%, Soldiers on the way 0%
- forest (57 building-min): No free ground to plant in range inside your border 70%, Planting a sapling 30%, Worker picking up a shovel 0%
- fisher (56 building-min): Fishing 38%, Bringing a fish to the pile 31%, Fish pile full, waiting for carriers 30%, Worker picking up a fishing rod 0%
- ironmine (52 building-min): Deposit worn out: finding little iron ore 54%, Deposit thinning: mining iron ore 16%, Iron ore pile full, waiting for carriers 13%, Mining iron ore 5%, Bringing iron ore out 4%
- coalmine (51 building-min): Deposit worn out: finding little coal 34%, Deposit thinning: mining coal 31%, Mining coal 21%, Bringing coal out 7%, Came back empty-handed 2%
- smelter (50 building-min): Output pile full, waiting for carriers 34%, Waiting for iron ore 24%, Waiting for coal 22%, Smelting iron 16%, Stacking outside 3%
- smith (48 building-min): All tool targets met 96%, Worker picking up a hammer 1%, Forging pickaxe 1%, Stacking outside 0%, Forging hammer 0%
- weaponsmith (46 building-min): Waiting for coal 57%, All weapon targets met 23%, Waiting for iron 7%, Forging sword 5%, Forging spear 3%
- barracks (45 building-min): Waiting for weapons from the weaponsmith 71%, Weapons on the way 16%, Soldier targets met 12%, Training soldiers 1%
- goldmine (34 building-min): Gold ore pile full, waiting for carriers 50%, Deposit worn out: finding little gold ore 41%, Needs fish or bread or meat: mining stopped 4%, Bringing gold ore out 2%, Worker picking up a pickaxe 2%
- goldsmelter (33 building-min): Output pile full, waiting for carriers 76%, Waiting for gold ore 10%, Waiting for coal and gold ore 7%, Waiting for coal 3%, Smelting gold 3%
- tower (23 building-min): Idle 100%, Soldiers on the way 0%

Building sites, time per state (site-min): Leveling the ground 8, Builders at work 6, Waiting for a digger 6, Waiting for a builder 4, Waiting for materials 0.

Build order (placed at min:sec, finished at): house2 0:00→1:06, quarry 0:00→1:22, wood 0:02→1:35, saw 1:36→2:09, guard 1:38→2:45, forest 1:52→3:02, fisher 2:16→3:35, guard 3:02→3:58, guard 3:58→4:38, ironmine 7:28→8:08, coalmine 8:16→8:45, smelter 8:46→9:47, house2 9:48→11:11, smith 10:56→11:57, weaponsmith 12:34→13:50, barracks 13:54→14:34, wood 15:00→15:59, quarry 15:26→16:31, goldmine 25:00→25:52, goldsmelter 25:54→26:38, house2 26:16→28:31, tower 35:00→37:17.

Orders given: sendUnit 136, armyTarget 39, release 31, place 22, march 15, priority 5, profession 4, weaponKeep 3, sendIn 2, armyReserve 1. None refused.

People changing jobs: new carrier 60, carrier -> soldier 35, carrier -> worker 14, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1, new soldier 1.

People's orders (4325 in all, 4300 done): worker rest fisher 386, worker gather fisher 385, worker mine coalmine 285, worker mine ironmine 225, carrier haul fish fisher -> coalmine 189, worker eat coalmine 185, worker eat ironmine 162, carrier haul fish fisher -> ironmine 160, worker rest coalmine 133, worker rest forest 123, worker gather forest 122, explorer explore 115, worker rest wood 84, worker gather wood 82. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Adaptive plan: 10 field soldiers, 0 posts, carriers 6 (6 idle), coal/iron 0/0, sites 0, tips none.
- 10:00 Adaptive plan: 6 field soldiers, 3 posts, carriers 14 (0 idle), coal/iron 1/1, sites 1, tips stall/settlers.
- ×4 20:00–50:00 Adaptive plan: 35 field soldiers, 4 posts, carriers 17 (15 idle), coal/iron 1/1, sites 0, tips stall.


Script: 1800 turns, 1.3 ms average, worst 19 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 16/1/1624/18/32 | 24/6/2776/10/40 |
| 30 | 25/1/2077/30/40 | 27/6/3167/10/50 |
| 45 | 27/3/3460/31/39 | 56/9/5038/18/82 |
| 60 | 28/4/4252/40/30 | 77/21/11756/59/91 |
| first | 6 8 11 12 37 - | 7 9 41 41 50 53 |

Soldiers every 5 min: 10 10 18 20 29 30 30 30 31 34 38 40 (original game NPC: 10 10 10 10 10 10 10 10 18 31 46 59).

First army orders (game min:sec): 2:40 sendIn 1 soldiers -> building 100; 10:44 armyTarget sword=5; 10:44 armyTarget spear=3; 10:44 armyReserve; 12:24 armyTarget sword=6; 12:24 armyTarget bow=3; 13:04 armyTarget spear=4; 13:44 armyTarget sword=7; 14:24 armyTarget bow=4; 15:00 march 5 soldiers -> 76,120; 15:04 armyTarget sword=8; 15:44 armyTarget spear=5.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 9 min, 18–28: stall: smelter: waiting for iron ore 85% of the last 5 minutes.
- 1 min, 18: stall: water hut: water pile full, waiting for carriers 52% of the last 5 minutes.
- 2 min, 18–19: stall: iron mine: needs meat or fish 64% of the last 5 minutes.
- 6 min, 18–59: settlers: No free settlers and every bed taken: build houses.
- 35 min, 19–60: stall: weaponsmith: waiting for coal 90% of the last 5 minutes.
- 23 min, 20–47: stall: barracks: waiting for weapons from the weaponsmith 91% of the last 5 minutes.
- 18 min, 24–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 3 min, 26–59: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 3 min, 26–59: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 1 min, 26: stall: quarry: stone pile full, waiting for carriers 86% of the last 5 minutes.
- 12 min, 28–43: stall: iron mine: deposit worn out 92% of the last 5 minutes.
- 3 min, 35–37: stall: goldsmelter: waiting for coal 97% of the last 5 minutes.
- 2 min, 38–39: army: Lost 4 soldiers in the last 5 minutes.
- 16 min, 44–60: stall: coal mine: deposit worn out 93% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 11 | 11 | 7 | 4 | 0 | 0 | 0 | 0 | 0 | 6 | 0 | 18 | 0 | 0 | 0 | 0 | 0 | 10 | 24 | 1624 | 2956 |
| 30 | 22 | 8 | 7 | 17 | 0 | 12 | 14 | 14 | 0 | 9 | 2 | 18 | 6 | 0 | 0 | 0 | 0 | 2 | 76 | 2077 | 3740 |
| 45 | 24 | 8 | 8 | 19 | 0 | 12 | 14 | 14 | 0 | 18 | 14 | 20 | 14 | 8 | 0 | 0 | 0 | 12 | 110 | 3460 | 5610 |
| 60 | 19 | 13 | 8 | 16 | 0 | 11 | 13 | 13 | 0 | 18 | 14 | 19 | 14 | 8 | 0 | 1 | 0 | 1 | 107 | 4252 | 7046 |

At the end: buildings (built+sites) guard 3, house 3, house2 1+1, quarry 2, wood 2, hq 1, saw 1, forest 1, fisher 1, coalmine 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, pigfarm 1, butcher 1, goldmine 1, goldsmelter 1, tower 1.
People: soldier 33, worker 18, carrier 4, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 50. Soldiers: sword 16, bow 9, spear 8.

Goods produced in the game: fish 276, coal 125, log 100, stone 88, plank 85, water 84, grain 84, ironore 73, pig 71, iron 59, meat 57, goldore 22, sword 16, spear 9, gold 8, bow 6, hammer 2, axe 2, pick 2, saw 1, shovel 1, rod 1.
Goods consumed in the game: fish 266, coal 107, stone 98, plank 96, log 85, water 71, grain 71, ironore 59, pig 57, meat 46, iron 40, sword 16, spear 8, goldore 8, pick 6, bow 6, hammer 4, axe 3, shovel 2, saw 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (59 building-min): Idle 100%
- quarry (92 building-min): No stone in range inside your border 36%, Stone pile full, waiting for carriers 33%, Cutting stone 19%, Bringing stone to the pile 12%, Worker picking up a pickaxe 1%
- wood (102 building-min): Log pile full, waiting for carriers 74%, Felling a tree 20%, Bringing a log to the pile 6%, Worker picking up an axe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 76%, Sawing planks 19%, Stacking outside 4%, Waiting for logs 1%, Fetching from the pile 0%
- guard (92 building-min): Idle 99%, Waiting for a swordsman: train one at the barracks 1%, Soldiers on the way 1%
- forest (57 building-min): No free ground to plant in range inside your border 58%, Planting a sapling 42%, Worker picking up a shovel 0%
- fisher (57 building-min): Fishing 43%, Bringing a fish to the pile 42%, Fish pile full, waiting for carriers 15%, Worker picking up a fishing rod 0%, Working 0%
- coalmine (56 building-min): Deposit worn out: finding little coal 49%, Deposit thinning: mining coal 26%, Mining coal 14%, Bringing coal out 6%, Fetching food 2%
- ironmine (56 building-min): Deposit worn out: finding little iron ore 45%, Iron ore pile full, waiting for carriers 18%, Deposit thinning: mining iron ore 13%, Needs meat or fish: mining stopped 12%, Mining iron ore 6%
- smelter (54 building-min): Output pile full, waiting for carriers 54%, Waiting for iron ore 23%, Smelting iron 14%, Waiting for coal 4%, Stacking outside 3%
- house (126 building-min): Idle 100%
- smith (52 building-min): All tool targets met 97%, Forging hammer 1%, Forging axe 0%, Forging pickaxe 0%, Stacking outside 0%
- weaponsmith (50 building-min): Waiting for coal 76%, All weapon targets met 13%, Forging sword 4%, Forging spear 2%, Stacking outside 2%
- barracks (48 building-min): Waiting for weapons from the weaponsmith 78%, Weapons on the way 14%, Soldier targets met 7%, Training soldiers 1%, Idle 0%
- farm (46 building-min): Grain pile full, waiting for carriers 67%, Sowing a field 16%, Harvesting grain 10%, Bringing grain to the pile 6%, Worker picking up a scythe 1%
- waterhut (45 building-min): Water pile full, waiting for carriers 76%, Bringing water to the pile 13%, Fetching water 11%, Worker on the way 0%, Working 0%
- pigfarm (42 building-min): Output pile full, waiting for carriers 56%, Raising a pig 38%, Stacking outside 4%, Waiting for grain and water 1%, Fetching from the pile 1%
- butcher (41 building-min): Output pile full, waiting for carriers 81%, Butchering 10%, Waiting for pigs 4%, Stacking outside 4%, Fetching from the pile 0%
- goldmine (32 building-min): Gold ore pile full, waiting for carriers 60%, Deposit worn out: finding little gold ore 31%, Deposit thinning: mining gold ore 4%, Mining gold ore 2%, Bringing gold ore out 2%
- goldsmelter (31 building-min): Output pile full, waiting for carriers 68%, Waiting for coal 26%, Smelting gold 3%, Worker picking up a hammer 1%, Stacking outside 1%
- tower (23 building-min): Idle 99%, Waiting for a swordsman: train one at the barracks 1%, Waiting for a soldier 0%

Building sites, time per state (site-min): Leveling the ground 9, Waiting for a digger 8, Builders at work 8, Waiting for a builder 6, Waiting for materials 0.

Build order (placed at min:sec, finished at): house2 0:00→1:09, quarry 0:02→1:26, wood 0:04→1:39, saw 1:40→2:11, guard 1:42→2:39, forest 1:56→2:57, fisher 2:26→3:24, coalmine 3:08→3:49, ironmine 3:10→4:05, smelter 4:42→5:45, house 5:46→6:26, smith 7:04→7:53, weaponsmith 9:10→10:13, barracks 10:42→11:54, farm 13:04→14:31, waterhut 14:08→15:12, wood 15:00→15:59, pigfarm 16:40→17:47, butcher 17:52→18:56, house 18:50→19:57, quarry 25:40→26:45, house 26:00→27:21, goldmine 26:46→27:59, goldsmelter 28:00→29:28, guard 33:20→34:43, tower 35:00→36:49, guard 50:00→50:57, house2 59:00→never.

Orders given: sendUnit 138, armyTarget 47, place 28, release 25, march 14, priority 5, profession 4, sendIn 3, weaponKeep 3, armyReserve 1. Refused (order: reason, times): place: Another building is in the way ×1.

People changing jobs: new carrier 50, carrier -> soldier 30, carrier -> worker 18, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1.

People's orders (5242 in all, 5209 done): worker mine coalmine 308, worker rest fisher 277, worker gather fisher 276, worker eat coalmine 209, carrier haul fish fisher -> coalmine 206, worker rest farm 179, worker gather farm 178, worker mine ironmine 140, worker rest forest 136, worker gather forest 135, worker rest coalmine 126, explorer explore 115, worker rest wood 102, worker gather wood 100. None failed.

Failed path searches (who (task) why: times): pioneer (claim 1) cut-off 1.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 8 field soldiers, 1 posts, carriers 23 (19 idle), coal/iron 1/1, sites 1, tips none.
- 20:00 Adaptive plan: 18 field soldiers, 1 posts, carriers 8 (0 idle), coal/iron 1/1, sites 0, tips stall/settlers.
- ×3 30:00–50:00 Adaptive plan: 28 field soldiers, 3 posts, carriers 10 (5 idle), coal/iron 1/1, sites 0, tips stall.


Script: 1800 turns, 1.1 ms average, worst 17 ms, 0 over 0.3 s, 0 errors. Orders refused: place 1 of 29.

### Map 20261030: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 19/3/2220/19/31 | 25/6/3049/10/40 |
| 30 | 22/3/2647/33/37 | 58/7/4173/12/88 |
| 45 | 24/4/3781/50/40 | 69/12/7549/28/82 |
| 60 | 24/4/4192/58/32 | 78/20/13226/64/86 |
| first | 7 8 10 12 44 - | 14 15 16 21 39 38 |

Soldiers every 5 min: 10 10 19 24 25 33 39 43 50 50 55 58 (original game NPC: 10 10 10 10 10 12 12 18 28 41 51 64).

First army orders (game min:sec): 2:46 sendIn 1 soldiers -> building 100; 10:04 armyReserve; 10:24 armyTarget sword=5; 10:24 armyTarget spear=3; 11:24 armyTarget sword=4; 11:24 armyTarget spear=2; 11:44 armyTarget sword=5; 11:44 armyTarget spear=3; 12:04 armyTarget bow=3; 12:24 armyTarget sword=6; 13:04 armyTarget spear=4; 13:44 armyTarget sword=7.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 6–7: army: Lost 4 soldiers in the last 5 minutes, and no barracks to train new ones.
- 2 min, 11–12: stall: sawmill: waiting for logs 51% of the last 5 minutes.
- 6 min, 16–21: stall: goldsmelter: waiting for coal 84% of the last 5 minutes.
- 3 min, 19–39: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 3 min, 19–40: stall: gold mine: gold ore pile full, waiting for carriers 100% of the last 5 minutes.
- 4 min, 19–40: settlers: No free settlers and every bed taken: build houses.
- 29 min, 21–60: stall: iron mine: deposit worn out 95% of the last 5 minutes.
- 11 min, 21–54: stall: weaponsmith: waiting for coal 57% of the last 5 minutes.
- 10 min, 22–52: stall: barracks: waiting for weapons from the weaponsmith 78% of the last 5 minutes.
- 34 min, 26–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 3 min, 27–29: stall: gold mine: deposit worn out 50% of the last 5 minutes.
- 1 min, 39: stall: quarry: stone pile full, waiting for carriers 100% of the last 5 minutes.
- 2 min, 39–40: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 13 min, 46–60: stall: coal mine: deposit worn out 94% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 3 | 8 | 8 | 17 | 0 | 0 | 0 | 0 | 0 | 7 | 5 | 17 | 13 | 0 | 0 | 0 | 1 | 7 | 38 | 2220 | 4422 |
| 30 | 24 | 8 | 16 | 13 | 0 | 0 | 0 | 0 | 0 | 20 | 7 | 20 | 14 | 8 | 0 | 0 | 0 | 13 | 72 | 2647 | 4911 |
| 45 | 24 | 8 | 16 | 18 | 0 | 0 | 0 | 0 | 0 | 16 | 11 | 20 | 14 | 8 | 0 | 0 | 0 | 15 | 80 | 3781 | 6816 |
| 60 | 24 | 8 | 16 | 18 | 0 | 0 | 0 | 0 | 0 | 18 | 10 | 20 | 14 | 8 | 0 | 0 | 0 | 7 | 80 | 4192 | 6988 |

At the end: buildings (built+sites) house2 3, guard 3, quarry 2, wood 2, hq 1, saw 1, forest 1, fisher 1, ironmine 1, coalmine 1, smelter 1, house 1, smith 1, weaponsmith 1, barracks 1, goldmine 1, goldsmelter 1, tower 1.
People: soldier 51, worker 14, carrier 10, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 70. Soldiers: sword 24, bow 14, spear 13.

Goods produced in the game: fish 400, coal 158, ironore 86, log 85, stone 82, iron 76, plank 65, sword 24, goldore 22, spear 13, bow 11, gold 8, hammer 2, pick 2, saw 1, shovel 1, rod 1, axe 1.
Goods consumed in the game: fish 388, coal 140, stone 84, plank 81, ironore 76, log 65, iron 56, sword 24, spear 13, bow 11, goldore 8, pick 6, hammer 4, axe 2, shovel 2, saw 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (118 building-min): Idle 100%
- quarry (103 building-min): Stone pile full, waiting for carriers 80%, Cutting stone 13%, Bringing stone to the pile 6%, Worker picking up a pickaxe 0%, Working 0%
- wood (103 building-min): Log pile full, waiting for carriers 77%, Felling a tree 17%, Bringing a log to the pile 5%, Worker picking up an axe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 75%, Sawing planks 14%, Waiting for logs 8%, Stacking outside 3%, Fetching from the pile 0%
- guard (169 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 65%, Planting a sapling 35%, Worker picking up a shovel 0%, Working 0%
- fisher (57 building-min): Fishing 42%, Bringing a fish to the pile 38%, Fish pile full, waiting for carriers 18%, No fish in range inside your border 1%, Worker picking up a fishing rod 0%
- ironmine (55 building-min): Deposit worn out: finding little iron ore 59%, Iron ore pile full, waiting for carriers 15%, Deposit thinning: mining iron ore 12%, Mining iron ore 4%, Bringing iron ore out 4%
- coalmine (55 building-min): Deposit thinning: mining coal 40%, Deposit worn out: finding little coal 29%, Mining coal 19%, Bringing coal out 8%, Came back empty-handed 2%
- smelter (54 building-min): Output pile full, waiting for carriers 71%, Smelting iron 18%, Waiting for coal 6%, Stacking outside 4%, Fetching from the pile 0%
- house (53 building-min): Idle 100%
- smith (52 building-min): All tool targets met 95%, Waiting for coal 2%, Forging hammer 1%, Forging pickaxe 1%, Stacking outside 0%
- weaponsmith (50 building-min): Waiting for coal 46%, All weapon targets met 38%, Forging sword 6%, Forging spear 3%, Forging bow 3%
- barracks (49 building-min): Waiting for weapons from the weaponsmith 47%, Weapons on the way 39%, Soldier targets met 13%, Training soldiers 1%
- goldmine (48 building-min): Gold ore pile full, waiting for carriers 80%, Deposit worn out: finding little gold ore 8%, Deposit thinning: mining gold ore 6%, Mining gold ore 3%, Bringing gold ore out 1%
- goldsmelter (47 building-min): Output pile full, waiting for carriers 82%, Waiting for coal 15%, Smelting gold 2%, Stacking outside 0%, Worker picking up a hammer 0%
- tower (17 building-min): Idle 99%, Soldiers on the way 1%

Building sites, time per state (site-min): Builders at work 7, Leveling the ground 6, Waiting for a digger 6, Waiting for a builder 4.

Build order (placed at min:sec, finished at): house2 0:00→0:55, quarry 0:00→1:14, wood 0:02→1:27, saw 1:28→2:05, guard 1:30→2:45, forest 1:42→3:04, fisher 2:06→3:24, guard 2:46→3:46, guard 3:48→4:32, ironmine 4:10→5:00, coalmine 4:58→5:26, smelter 5:28→6:09, house 6:10→6:46, smith 6:56→7:33, weaponsmith 8:46→9:56, barracks 10:02→11:07, goldmine 11:08→11:47, goldsmelter 12:04→13:05, wood 15:00→15:36, quarry 15:02→15:55, house2 19:00→20:20, house2 39:00→40:45, tower 40:54→43:05.

Orders given: sendUnit 137, armyTarget 62, release 30, place 23, march 15, priority 5, profession 4, weaponKeep 3, sendIn 2, armyReserve 1. None refused.

People changing jobs: new carrier 70, carrier -> soldier 48, carrier -> worker 14, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1.

People's orders (4688 in all, 4662 done): worker rest fisher 401, worker gather fisher 400, worker mine coalmine 319, worker mine ironmine 234, carrier haul fish fisher -> coalmine 204, worker eat coalmine 200, worker eat ironmine 174, carrier haul fish fisher -> ironmine 172, worker rest coalmine 159, worker rest forest 144, worker gather forest 143, explorer explore 115, worker rest ironmine 90, worker rest wood 87. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 6 field soldiers, 3 posts, carriers 22 (11 idle), coal/iron 1/1, sites 0, tips none.
- ×2 20:00–40:00 Adaptive plan: 39 field soldiers, 3 posts, carriers 5 (0 idle), coal/iron 1/1, sites 1, tips stall/settlers.
- ×2 30:00–50:00 Adaptive plan: 43 field soldiers, 4 posts, carriers 18 (17 idle), coal/iron 1/1, sites 0, tips stall.


Script: 1800 turns, 0.9 ms average, worst 16 ms, 0 over 0.3 s, 0 errors. Orders refused: none.
