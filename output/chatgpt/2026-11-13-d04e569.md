# Tournament: chatgpt

Game version 207. Written for: chatgpt 206.

- chatgpt: hearthlands-ai-challenge, commit d04e569

Maps 20261030, 777, 4242, 31, each twice (sides swapped), up to 60 game minutes (1x). 64 s.

Each game ends with the script's own game log: what it may know (its own side, and what happened to it or what it saw). Times are game min:sec.

| Opponent | Won | Lost | Undecided |
|---|---|---|---|
| original game NPC | 0 | 0 | 8 |

## Games

Each row: buildings / military / land tiles / soldiers / people at the minute shown. First: game minute of the first smelter, smith, weaponsmith, barracks, tower, castle (- = never).

### Map 31: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 20/1/1355/13/57 | 27/6/3137/10/40 |
| 30 | 25/1/1384/39/41 | 56/12/5624/22/78 |
| 45 | 25/1/1384/55/25 | 76/19/10556/55/95 |
| 60 | 25/1/1384/55/25 | 82/24/14227/68/102 |
| first | 5 7 9 9 - - | 8 9 10 13 40 39 |

Soldiers every 5 min: 10 10 13 17 32 39 46 51 55 55 55 55 (original game NPC: 10 10 10 10 15 22 33 44 55 62 65 68).

First army orders (game min:sec): 2:26 sendIn 1 soldiers -> building 90; 8:26 armyTarget sword=5; 8:26 armyTarget spear=3; 8:26 armyReserve; 10:46 armyTarget bow=3; 15:06 armyTarget sword=7; 15:06 armyTarget spear=4; 15:14 march 5 soldiers -> 66,104; 18:46 march 5 soldiers -> 62,100; 19:46 armyTarget bow=4; 20:06 armyTarget sword=8; 20:26 armyTarget spear=5.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 14 min, 6–28: stall: fisher: no fish in range inside your border 78% of the last 5 minutes.
- 9 min, 9–17: stall: iron mine: needs meat or fish 100% of the last 5 minutes.
- 24 min, 9–36: stall: smelter: waiting for iron ore 87% of the last 5 minutes.
- 13 min, 11–37: stall: barracks: waiting for weapons from the weaponsmith 92% of the last 5 minutes.
- 8 min, 16–41: stall: weaponsmith: waiting for iron 85% of the last 5 minutes.
- 15 min, 26–41: stall: iron mine: deposit worn out 94% of the last 5 minutes.
- 14 min, 27–41: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 33 min, 28–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 20 min, 40–60: stall: quarry: stone pile full, waiting for carriers 100% of the last 5 minutes.
- 20 min, 40–60: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 20 min, 40–60: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 20 min, 40–60: settlers: No free settlers and every bed taken: build houses.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 3 | 8 | 5 | 0 | 0 | 0 | 8 | 9 | 8 | 26 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 29 | 32 | 1355 | 2598 |
| 30 | 24 | 8 | 8 | 12 | 11 | 12 | 20 | 21 | 14 | 21 | 0 | 4 | 0 | 0 | 0 | 1 | 0 | 15 | 93 | 1384 | 2681 |
| 45 | 24 | 8 | 8 | 12 | 11 | 12 | 18 | 22 | 11 | 22 | 0 | 6 | 0 | 0 | 0 | 1 | 0 | 0 | 96 | 1384 | 2687 |
| 60 | 24 | 8 | 8 | 12 | 12 | 1 | 19 | 22 | 14 | 26 | 7 | 20 | 0 | 0 | 0 | 1 | 0 | 0 | 99 | 1384 | 2697 |

At the end: buildings (built+sites) house 4, wood 2, hq 1, house2 1, quarry 1, saw 1, guard 1, forest 1, fisher 1, ironmine 1, coalmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, mill 1, bakery 1, pigfarm 1, butcher 1.
People: soldier 53, worker 17, digger 2, builder 2, carrier 2, geologist 1, explorer 1; beds 60. Soldiers: sword 25, bow 15, spear 13.

Goods produced in the game: grain 158, coal 148, water 141, log 89, stone 78, ironore 78, flour 73, iron 71, fish 70, plank 69, pig 63, bread 59, meat 55, sword 20, spear 14, bow 12, axe 2, saw 1, rod 1, hammer 1.
Goods consumed in the game: grain 136, coal 122, water 122, stone 88, plank 85, ironore 71, log 69, fish 64, flour 59, pig 55, meat 54, iron 51, bread 47, sword 20, spear 13, bow 12, pick 4, axe 3, hammer 3, saw 1, shovel 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (59 building-min): Idle 100%
- quarry (59 building-min): Stone pile full, waiting for carriers 65%, Cutting stone 23%, Bringing stone to the pile 12%, Worker picking up a pickaxe 0%, Working 0%
- wood (98 building-min): Log pile full, waiting for carriers 75%, Felling a tree 18%, Bringing a log to the pile 6%, Worker picking up an axe 0%, Idle 0%
- saw (58 building-min): Output pile full, waiting for carriers 78%, Sawing planks 15%, Stacking outside 3%, Waiting for logs 3%, Fetching from the pile 1%
- guard (58 building-min): Idle 100%, Soldiers on the way 0%
- forest (57 building-min): No free ground to plant in range inside your border 66%, Planting a sapling 34%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 54%, No fish in range inside your border 34%, Fishing 7%, Bringing a fish to the pile 4%, Worker picking up a fishing rod 0%
- ironmine (57 building-min): Deposit worn out: finding little iron ore 62%, Needs meat or fish: mining stopped 21%, Deposit thinning: mining iron ore 6%, Mining iron ore 5%, Bringing iron ore out 4%
- coalmine (56 building-min): Deposit thinning: mining coal 34%, Mining coal 28%, Coal pile full, waiting for carriers 23%, Bringing coal out 7%, Needs bread or fish: mining stopped 5%
- smelter (55 building-min): Waiting for iron ore 72%, Smelting iron 16%, Output pile full, waiting for carriers 7%, Stacking outside 3%, Worker picking up a hammer 0%
- house (192 building-min): Idle 100%
- smith (54 building-min): All tool targets met 97%, Waiting for coal 1%, Worker picking up a hammer 1%, Forging axe 0%, Forging saw 0%
- weaponsmith (52 building-min): Waiting for iron 43%, All weapon targets met 40%, Forging sword 5%, Forging spear 3%, Waiting for coal 3%
- barracks (51 building-min): Waiting for weapons from the weaponsmith 59%, Waiting for a free settler to train 25%, Soldier targets met 10%, Weapons on the way 6%, Training soldiers 1%
- farm (48 building-min): Grain pile full, waiting for carriers 53%, Sowing a field 23%, Harvesting grain 17%, Bringing grain to the pile 8%, Worker picking up a scythe 0%
- waterhut (47 building-min): Water pile full, waiting for carriers 73%, Fetching water 16%, Bringing water to the pile 12%, Working 0%
- mill (47 building-min): Output pile full, waiting for carriers 86%, Grinding flour 9%, Stacking outside 4%, Fetching from the pile 1%, Waiting for grain 0%
- bakery (44 building-min): Output pile full, waiting for carriers 58%, Baking bread 30%, Waiting for flour 7%, Stacking outside 3%, Fetching from the pile 0%
- pigfarm (42 building-min): Output pile full, waiting for carriers 61%, Raising a pig 34%, Stacking outside 4%, Fetching from the pile 0%, Waiting for grain and water 0%
- butcher (40 building-min): Output pile full, waiting for carriers 51%, Waiting for pigs 34%, Butchering 10%, Stacking outside 4%, Worker picking up an axe 1%

Building sites, time per state (site-min): Builders at work 7, Leveling the ground 6, Waiting for a digger 4, Waiting for a builder 3, Waiting for materials 0.

Build order (placed at min:sec, finished at): house2 0:00→0:57, quarry 0:00→1:28, wood 0:02→1:11, saw 1:12→1:58, guard 1:14→2:25, forest 1:44→2:44, fisher 2:06→3:03, ironmine 2:46→3:20, coalmine 3:00→3:35, smelter 3:46→4:41, house 4:26→5:07, smith 5:34→6:21, weaponsmith 7:12→8:05, barracks 8:24→8:59, house 9:10→9:45, farm 10:48→11:46, waterhut 11:52→12:52, mill 12:40→13:18, house 13:30→14:05, bakery 14:56→15:32, pigfarm 16:42→17:37, house 17:50→18:37, butcher 18:50→19:47, wood 19:28→20:35.

Orders given: sendUnit 66, armyTarget 56, place 24, release 24, march 13, priority 5, weaponKeep 3, profession 2, sendIn 1, armyReserve 1. None refused.

People changing jobs: new carrier 60, carrier -> soldier 45, carrier -> worker 17, carrier -> geologist 1, carrier -> explorer 1.

People's orders (5210 in all, 5172 done): worker rest farm 327, worker gather farm 326, worker mine coalmine 200, worker mine ironmine 154, worker rest coalmine 152, worker rest waterhut 142, worker gather waterhut 141, worker rest forest 135, worker gather forest 134, worker rest wood 91, worker eat ironmine 90, worker gather wood 89, worker rest ironmine 81, carrier haul grain farm -> mill 81. Not done (outcome: times): failed: can't reach that spot ×16.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 17.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Adaptive plan: 10 field soldiers, 0 posts, carriers 6 (6 idle), coal/iron 0/0, sites 0, tips none.
- ×2 10:00–20:00 Adaptive plan: 15 field soldiers, 1 posts, carriers 41 (28 idle), coal/iron 1/1, sites 1, tips stall.
- 30:00 Adaptive plan: 37 field soldiers, 1 posts, carriers 18 (15 idle), coal/iron 1/1, sites 0, tips land/stall.
- ×2 40:00–50:00 Adaptive plan: 53 field soldiers, 1 posts, carriers 2 (1 idle), coal/iron 1/1, sites 0, tips land/stall/settlers.


Script: 1800 turns, 2.0 ms average, worst 23 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 31: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 17/2/1644/20/40 | 36/6/2771/10/60 |
| 30 | 24/2/1658/33/27 | 72/14/7282/41/89 |
| 45 | 24/2/1658/35/25 | 82/21/13463/68/102 |
| 60 | 24/2/1658/35/25 | 90/28/18899/84/106 |
| first | 5 7 9 12 - - | 7 8 15 16 21 28 |

Soldiers every 5 min: 10 10 20 25 32 33 35 35 35 35 35 35 (original game NPC: 10 10 10 13 20 41 53 63 68 72 78 84).

First army orders (game min:sec): 2:18 sendIn 1 soldiers -> building 90; 10:18 armyTarget sword=5; 10:18 armyTarget spear=3; 10:18 armyReserve; 11:38 armyTarget sword=6; 11:38 armyTarget bow=3; 11:48 sendIn 1 soldiers -> building 185; 11:58 armyTarget sword=5; 11:58 armyTarget bow=2; 12:18 armyTarget sword=6; 12:18 armyTarget bow=3; 12:58 armyTarget spear=4.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 30 min, 11–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 4 min, 12–15: stall: smelter: waiting for coal 54% of the last 5 minutes.
- 5 min, 18–29: stall: barracks: waiting for weapons from the weaponsmith 93% of the last 5 minutes.
- 6 min, 20–43: stall: iron mine: deposit worn out 93% of the last 5 minutes.
- 14 min, 21–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 5 min, 24–33: stall: water hut: water pile full, waiting for carriers 99% of the last 5 minutes.
- 19 min, 24–51: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 26 min, 24–51: settlers: No free settlers and every bed taken: build houses.
- 5 min, 25–29: stall: smelter: waiting for iron ore 94% of the last 5 minutes.
- 5 min, 27–47: stall: butcher: waiting for pigs 82% of the last 5 minutes.
- 21 min, 29–51: stall: quarry: stone pile full, waiting for carriers 100% of the last 5 minutes.
- 20 min, 30–51: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 1 min, 34: stall: pig farm: output pile full, waiting for carriers 100% of the last 5 minutes.
- 11 min, 43–60: stall: barracks: waiting for a free settler to train 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 7 | 3 | 20 | 0 | 0 | 1 | 0 | 0 | 20 | 41 | 1644 | 3190 |
| 30 | 24 | 8 | 16 | 17 | 0 | 0 | 14 | 14 | 0 | 23 | 1 | 16 | 0 | 0 | 1 | 1 | 0 | 0 | 90 | 1658 | 3190 |
| 45 | 24 | 8 | 16 | 24 | 0 | 3 | 13 | 13 | 0 | 26 | 14 | 20 | 0 | 0 | 0 | 0 | 1 | 0 | 108 | 1658 | 3190 |
| 60 | 24 | 8 | 16 | 24 | 0 | 12 | 14 | 14 | 0 | 26 | 14 | 20 | 0 | 0 | 0 | 0 | 1 | 2 | 117 | 1658 | 3190 |

At the end: buildings (built+sites) quarry 2, wood 2, guard 2, fisher 2, house 2, hq 1, house2 1, saw 1, forest 1, coalmine 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, pigfarm 1, butcher 1.
People: soldier 31, worker 17, digger 2, builder 2, carrier 2, geologist 1, explorer 1; beds 40. Soldiers: sword 15, bow 8, spear 8.

Goods produced in the game: fish 218, coal 112, log 83, stone 80, ironore 67, plank 63, iron 53, water 48, grain 48, pig 34, meat 20, sword 12, spear 8, bow 6, rod 2, axe 2, saw 1, hammer 1, pick 1.
Goods consumed in the game: fish 200, coal 86, stone 82, plank 79, log 63, ironore 53, water 34, grain 34, iron 33, pig 20, sword 12, spear 8, meat 8, pick 5, bow 5, axe 3, hammer 3, rod 2, saw 1, shovel 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (59 building-min): Idle 100%
- quarry (102 building-min): Stone pile full, waiting for carriers 79%, Cutting stone 13%, Bringing stone to the pile 7%, Worker picking up a pickaxe 0%, Working 0%
- wood (103 building-min): Log pile full, waiting for carriers 78%, Felling a tree 16%, Bringing a log to the pile 5%, Worker picking up an axe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 80%, Sawing planks 14%, Stacking outside 3%, Waiting for logs 3%, Fetching from the pile 0%
- guard (106 building-min): Idle 100%, Soldiers on the way 0%
- forest (57 building-min): No free ground to plant in range inside your border 68%, Planting a sapling 31%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- fisher (93 building-min): Fish pile full, waiting for carriers 62%, Fishing 19%, Bringing a fish to the pile 17%, No fish in range inside your border 1%, Worker picking up a fishing rod 0%
- coalmine (56 building-min): Coal pile full, waiting for carriers 54%, Mining coal 23%, Deposit thinning: mining coal 16%, Bringing coal out 5%, Fetching food 1%
- ironmine (56 building-min): Deposit worn out: finding little iron ore 38%, Iron ore pile full, waiting for carriers 34%, Deposit thinning: mining iron ore 12%, Needs meat or fish: mining stopped 6%, Mining iron ore 4%
- smelter (55 building-min): Output pile full, waiting for carriers 57%, Waiting for iron ore 21%, Smelting iron 12%, Waiting for coal 6%, Stacking outside 3%
- house (105 building-min): Idle 100%
- smith (53 building-min): All tool targets met 98%, Forging fishing rod 0%, Stacking outside 0%, Forging axe 0%, Worker picking up a hammer 0%
- weaponsmith (51 building-min): All weapon targets met 86%, Waiting for coal 6%, Forging sword 3%, Forging spear 2%, Forging bow 2%
- barracks (49 building-min): Waiting for a free settler to train 47%, Waiting for weapons from the weaponsmith 35%, Weapons on the way 9%, Soldier targets met 9%, Training soldiers 1%
- farm (39 building-min): Grain pile full, waiting for carriers 79%, Sowing a field 10%, Harvesting grain 7%, Bringing grain to the pile 3%, Worker picking up a scythe 1%
- waterhut (39 building-min): Water pile full, waiting for carriers 91%, Fetching water 5%, Bringing water to the pile 4%, Working 0%
- pigfarm (36 building-min): Output pile full, waiting for carriers 73%, Raising a pig 21%, Stacking outside 2%, Waiting for water 2%, Waiting for grain and water 1%
- butcher (36 building-min): Waiting for pigs 62%, Output pile full, waiting for carriers 31%, Butchering 4%, Stacking outside 1%, Worker picking up an axe 1%

Building sites, time per state (site-min): Builders at work 6, Leveling the ground 6, Waiting for a digger 6, Waiting for a builder 4, Waiting for materials 0.

Build order (placed at min:sec, finished at): house2 0:00→0:54, quarry 0:00→1:25, wood 0:02→1:09, saw 1:10→1:49, guard 1:12→2:17, forest 1:46→2:33, fisher 2:12→3:01, coalmine 2:24→3:36, ironmine 2:40→3:51, smelter 4:02→4:47, house 4:50→5:22, smith 6:12→6:57, weaponsmith 8:00→8:57, house 9:10→9:51, barracks 10:16→11:10, guard 11:00→11:47, wood 15:00→15:43, quarry 15:02→16:10, farm 19:32→20:47, waterhut 19:58→21:09, pigfarm 22:24→23:42, butcher 22:52→24:11, fisher 23:38→24:27.

Orders given: sendUnit 115, armyTarget 33, release 30, place 23, march 15, priority 5, weaponKeep 3, profession 2, sendIn 2, armyReserve 1. None refused.

People changing jobs: new carrier 40, carrier -> soldier 25, carrier -> worker 17, carrier -> geologist 1, carrier -> explorer 1.

People's orders (3843 in all, 3820 done): worker rest fisher 220, worker gather fisher 218, worker mine coalmine 176, worker mine ironmine 165, worker rest forest 140, worker gather forest 139, worker eat ironmine 117, explorer explore 114, worker rest coalmine 113, carrier haul fish fisher -> ironmine 111, worker rest farm 104, worker gather farm 103, worker eat coalmine 91, carrier haul fish fisher -> coalmine 91. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 8 field soldiers, 1 posts, carriers 29 (24 idle), coal/iron 1/1, sites 0, tips none.
- 20:00 Adaptive plan: 21 field soldiers, 2 posts, carriers 17 (6 idle), coal/iron 1/1, sites 2, tips stall.
- 30:00 Adaptive plan: 29 field soldiers, 2 posts, carriers 4 (0 idle), coal/iron 1/1, sites 0, tips stall/settlers.
- ×2 40:00–50:00 Adaptive plan: 31 field soldiers, 2 posts, carriers 2 (0 idle), coal/iron 1/1, sites 0, tips land/stall/settlers.


Script: 1800 turns, 1.9 ms average, worst 25 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 13/2/1686/10/89 | 30/6/2521/10/50 |
| 30 | 16/2/1687/10/150 | 49/6/3258/10/70 |
| 45 | 17/2/1688/10/170 | 70/13/7094/42/78 |
| 60 | 17/2/1688/10/170 | 79/20/11557/65/85 |
| first | - - - - - - | 12 13 14 16 44 38 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 10 20 28 42 51 58 65).

First army orders (game min:sec): 2:22 sendIn 1 soldiers -> building 91.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 14 min, 5–18: stall: fisher: no fish in range inside your border 52% of the last 5 minutes.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 32 min, 13–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 35 min, 26–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 10 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 77 | 38 | 1686 | 3350 |
| 30 | 16 | 8 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 138 | 40 | 1687 | 3350 |
| 45 | 16 | 8 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 158 | 40 | 1688 | 3350 |
| 60 | 16 | 8 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 158 | 40 | 1688 | 3350 |

At the end: buildings (built+sites) house2 8, guard 2, hq 1, quarry 1, wood 1, saw 1, forest 1, fisher 1, coalmine 1.
People: carrier 158, soldier 7, worker 6, digger 2, builder 2, geologist 1, explorer 1; beds 160. Soldiers: sword 4, bow 3.

Goods produced in the game: log 58, stone 57, plank 46, fish 11, coal 8.
Goods consumed in the game: stone 67, plank 62, log 46, fish 5, pick 3, axe 1, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (347 building-min): Idle 100%
- quarry (58 building-min): Stone pile full, waiting for carriers 78%, Cutting stone 15%, Bringing stone to the pile 6%, Worker picking up a pickaxe 0%, Working 0%
- wood (59 building-min): Log pile full, waiting for carriers 77%, Felling a tree 18%, Bringing a log to the pile 4%, Worker picking up an axe 0%, Idle 0%
- saw (58 building-min): Output pile full, waiting for carriers 87%, Sawing planks 10%, Stacking outside 2%, Worker picking up a saw 0%, Fetching from the pile 0%
- guard (114 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 61%, Planting a sapling 39%, Worker picking up a shovel 0%, Idle 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 77%, No fish in range inside your border 20%, Bringing a fish to the pile 2%, Fishing 2%, Worker picking up a fishing rod 0%
- coalmine (56 building-min): Coal pile full, waiting for carriers 97%, Mining coal 2%, Worker picking up a pickaxe 1%, Bringing coal out 0%, Working 0%

Building sites, time per state (site-min): Leveling the ground 8, Builders at work 5, Waiting for a digger 4, Waiting for a builder 3.

Build order (placed at min:sec, finished at): house2 0:00→1:07, quarry 0:00→1:39, wood 0:02→1:22, saw 1:24→2:00, guard 1:26→2:21, forest 1:58→2:35, fisher 2:20→2:51, guard 2:54→3:55, coalmine 3:10→4:14, house2 4:20→5:47, house2 8:40→10:12, house2 13:00→14:25, house2 17:20→19:04, house2 21:40→22:46, house2 26:00→27:19, house2 30:20→32:27.

Orders given: sendUnit 116, place 16, profession 2, priority 1, sendIn 1. None refused.

People changing jobs: new carrier 160, carrier -> worker 6, carrier -> geologist 1, carrier -> explorer 1.

People's orders (1069 in all, 1059 done): worker rest forest 131, worker gather forest 130, explorer explore 115, worker rest wood 59, worker gather wood 58, worker rest quarry 58, worker gather quarry 57, carrier haul log wood -> saw 50, worker rest saw 47, worker toCraft saw 46, worker craft saw 46, carrier haul stone quarry -> house2 42, carrier haul plank saw -> house2 35, digger dig house2 16. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Adaptive plan: 10 field soldiers, 0 posts, carriers 6 (6 idle), coal/iron 0/0, sites 0, tips none.
- 10:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 38 (38 idle), coal/iron 1/1, sites 1, tips stall.
- 20:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 98 (98 idle), coal/iron 1/1, sites 0, tips timing.
- ×3 30:00–50:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 158 (158 idle), coal/iron 1/1, sites 0, tips land/stall/timing.


Script: 1800 turns, 2.5 ms average, worst 21 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 13/2/1638/10/90 | 33/6/2715/10/50 |
| 30 | 19/2/1688/10/150 | 62/12/5421/21/79 |
| 45 | 19/2/1707/10/150 | 75/19/10372/50/90 |
| 60 | 19/2/1707/10/150 | 85/26/14825/75/95 |
| first | - - - - - - | 8 8 16 17 40 37 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 15 21 32 47 50 57 71 75).

First army orders (game min:sec): 2:40 sendIn 1 soldiers -> building 101.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 27 min, 12–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 38 min, 23–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 78 | 40 | 1638 | 3421 |
| 30 | 24 | 8 | 16 | 12 | 0 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 135 | 56 | 1688 | 5031 |
| 45 | 24 | 13 | 22 | 12 | 0 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 129 | 56 | 1707 | 5031 |
| 60 | 24 | 13 | 22 | 12 | 0 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 129 | 56 | 1707 | 5031 |

At the end: buildings (built+sites) house2 7+1, quarry 2, wood 2, guard 2, hq 1, saw 1, forest 1, fisher 1, ironmine 1, look 1.
People: carrier 135, worker 9, soldier 7, digger 2, builder 2, geologist 1, explorer 1; beds 140. Soldiers: sword 4, bow 3.

Goods produced in the game: stone 74, log 72, plank 52, fish 10, ironore 8.
Goods consumed in the game: stone 70, plank 63, log 52, pick 4, fish 4, axe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (319 building-min): Idle 100%
- quarry (103 building-min): Stone pile full, waiting for carriers 84%, Cutting stone 11%, Bringing stone to the pile 5%, Worker picking up a pickaxe 0%, Working 0%
- wood (103 building-min): Log pile full, waiting for carriers 80%, Felling a tree 15%, Bringing a log to the pile 5%, Worker picking up an axe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 84%, Sawing planks 11%, Stacking outside 2%, Waiting for logs 1%, Worker picking up a saw 0%
- guard (114 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 67%, Planting a sapling 33%, Worker picking up a shovel 0%, Working 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 97%, Fishing 1%, Bringing a fish to the pile 1%, Worker picking up a fishing rod 0%
- ironmine (56 building-min): Iron ore pile full, waiting for carriers 97%, Mining iron ore 2%, Worker picking up a pickaxe 0%, Bringing iron ore out 0%, Working 0%
- look (44 building-min): Scout on watch 100%, Working 0%

Building sites, time per state (site-min): Waiting for materials 28, Leveling the ground 8, Builders at work 6, Waiting for a digger 5, Waiting for a builder 3.

Build order (placed at min:sec, finished at): house2 0:00→0:50, quarry 0:00→1:06, wood 0:02→1:20, saw 1:20→2:02, guard 1:22→2:39, forest 1:24→2:58, fisher 2:02→3:16, guard 2:40→3:35, ironmine 3:58→4:29, house2 4:20→5:29, house2 8:40→9:56, house2 13:00→14:03, look 15:00→15:38, wood 15:02→15:50, quarry 15:16→16:17, house2 17:20→19:08, house2 21:40→23:41, house2 26:00→27:30, house2 30:20→never.

Orders given: sendUnit 67, place 19, profession 2, priority 1, sendIn 1. None refused.

People changing jobs: new carrier 140, carrier -> worker 9, carrier -> geologist 1, carrier -> explorer 1.

People's orders (1136 in all, 1101 done): worker rest forest 140, worker gather forest 139, worker rest quarry 76, worker gather quarry 74, worker rest wood 74, worker gather wood 72, carrier haul log wood -> saw 56, worker rest saw 53, worker toCraft saw 52, worker craft saw 52, explorer explore 49, carrier haul stone quarry -> house2 42, carrier haul plank saw -> house2 32, digger dig house2 16. Not done (outcome: times): failed: can't reach that spot ×16.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 17.

Warnings: site-stuck 2. Last: 42:20 site-stuck: Medium house site has not moved for 10 min (Waiting for materials) | 52:30 site-stuck: Medium house site has not moved for 20 min (Waiting for materials)

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 40 (40 idle), coal/iron 0/1, sites 0, tips none.
- 20:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 95 (95 idle), coal/iron 0/1, sites 0, tips timing.
- 30:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 135 (135 idle), coal/iron 0/1, sites 0, tips stall/timing.
- ×2 40:00–50:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 135 (129 idle), coal/iron 0/1, sites 1, tips land/stall/timing.


Script: 1800 turns, 2.4 ms average, worst 33 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 12/2/1531/10/85 | 31/6/3058/10/50 |
| 30 | 17/2/1568/10/130 | 55/8/4114/19/71 |
| 45 | 17/2/1568/10/130 | 69/13/7403/50/90 |
| 60 | 17/2/1568/10/130 | 76/19/12402/65/95 |
| first | - - - - - - | 9 8 17 16 37 42 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 19 24 43 50 55 59 65).

First army orders (game min:sec): 2:44 sendIn 1 soldiers -> building 107.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (2 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 39 min, 22–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 31 min, 30–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 74 | 32 | 1531 | 2817 |
| 30 | 24 | 8 | 16 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 116 | 48 | 1568 | 3821 |
| 45 | 24 | 8 | 16 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 116 | 48 | 1568 | 3821 |
| 60 | 24 | 8 | 16 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 116 | 48 | 1568 | 3821 |

At the end: buildings (built+sites) house2 6, quarry 2, wood 2, guard 2, hq 1, saw 1, forest 1, fisher 1, look 1.
People: carrier 116, worker 8, soldier 7, digger 2, builder 2, geologist 1, explorer 1; beds 120. Soldiers: sword 4, bow 3.

Goods produced in the game: stone 61, log 58, plank 38, fish 8.
Goods consumed in the game: stone 63, plank 54, log 38, pick 3, axe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (286 building-min): Idle 100%
- quarry (102 building-min): Stone pile full, waiting for carriers 88%, Cutting stone 9%, Bringing stone to the pile 3%, Worker picking up a pickaxe 0%, Working 0%
- wood (102 building-min): Log pile full, waiting for carriers 85%, Felling a tree 11%, Bringing a log to the pile 3%, Worker picking up an axe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 89%, Sawing planks 8%, Stacking outside 2%, Fetching from the pile 0%, Worker picking up a saw 0%
- guard (114 building-min): Idle 100%, Soldiers on the way 0%
- forest (57 building-min): No free ground to plant in range inside your border 71%, Planting a sapling 29%, Worker picking up a shovel 0%, Working 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 98%, Fishing 1%, Bringing a fish to the pile 1%, Worker picking up a fishing rod 0%
- look (44 building-min): Scout on watch 100%, Working 0%

Building sites, time per state (site-min): Leveling the ground 7, Waiting for a digger 5, Builders at work 5, Waiting for a builder 3.

Build order (placed at min:sec, finished at): house2 0:00→1:21, quarry 0:00→1:38, wood 0:02→1:52, saw 1:54→2:28, guard 1:56→2:44, forest 2:08→3:01, fisher 2:30→3:19, guard 2:44→3:45, house2 4:20→5:26, house2 8:40→10:13, house2 13:00→14:32, look 15:00→15:48, wood 15:02→16:00, quarry 15:16→16:44, house2 17:20→18:35, house2 21:40→23:36.

Orders given: sendUnit 112, place 16, profession 2, priority 1, sendIn 1. None refused.

People changing jobs: new carrier 120, carrier -> worker 8, carrier -> geologist 1, carrier -> explorer 1.

People's orders (964 in all, 951 done): worker rest forest 116, worker gather forest 115, explorer explore 111, worker rest quarry 63, worker gather quarry 61, worker rest wood 60, worker gather wood 58, carrier haul log wood -> saw 42, worker rest saw 39, worker toCraft saw 38, worker craft saw 38, carrier haul stone quarry -> house2 30, carrier haul plank saw -> house2 24, digger dig house2 12. Not done (outcome: times): failed: can't reach that spot ×1.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 1.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 39 (39 idle), coal/iron 0/0, sites 1, tips none.
- 20:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 96 (96 idle), coal/iron 0/0, sites 0, tips ore/timing.
- ×3 30:00–50:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 116 (116 idle), coal/iron 0/0, sites 0, tips land/ore/stall/timing.


Script: 1800 turns, 4.9 ms average, worst 25 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 12/2/1643/10/71 | 35/6/2806/10/57 |
| 30 | 15/2/1648/10/80 | 64/10/6171/17/93 |
| 45 | 15/2/1648/10/80 | 77/20/13219/62/88 |
| 60 | 15/2/1648/10/80 | 83/26/18028/82/88 |
| first | - - - - - - | 7 8 13 14 31 30 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 11 17 34 48 62 71 78 82).

First army orders (game min:sec): 2:46 sendIn 1 soldiers -> building 104.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 40 min, 13–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (93 mountain tiles).
- 42 min, 19–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 60 | 32 | 1643 | 3084 |
| 30 | 24 | 8 | 16 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 66 | 48 | 1648 | 4653 |
| 45 | 24 | 8 | 16 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 66 | 48 | 1648 | 4653 |
| 60 | 24 | 8 | 16 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 66 | 48 | 1648 | 4653 |

At the end: buildings (built+sites) house2 3, quarry 2, wood 2, guard 2, hq 1, saw 1, forest 1, fisher 1, house 1, look 1.
People: carrier 66, worker 8, soldier 7, digger 2, builder 2, geologist 1, explorer 1; beds 70. Soldiers: sword 4, bow 3.

Goods produced in the game: log 46, stone 46, plank 26, fish 8.
Goods consumed in the game: stone 48, plank 42, log 26, pick 3, axe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (154 building-min): Idle 100%
- quarry (102 building-min): Stone pile full, waiting for carriers 89%, Cutting stone 7%, Bringing stone to the pile 3%, Worker picking up a pickaxe 0%, Working 0%
- wood (102 building-min): Log pile full, waiting for carriers 86%, Felling a tree 10%, Bringing a log to the pile 4%, Worker picking up an axe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 93%, Sawing planks 6%, Stacking outside 1%, Worker picking up a saw 0%, Fetching from the pile 0%
- guard (113 building-min): Idle 100%, Soldiers on the way 0%
- forest (57 building-min): No free ground to plant in range inside your border 77%, Planting a sapling 23%, Worker picking up a shovel 0%
- fisher (56 building-min): Fish pile full, waiting for carriers 99%, Worker picking up a fishing rod 0%, Fishing 0%, Bringing a fish to the pile 0%
- house (55 building-min): Idle 100%
- look (44 building-min): Scout on watch 100%, Idle 0%, Working 0%

Building sites, time per state (site-min): Waiting for a digger 6, Leveling the ground 5, Builders at work 4, Waiting for a builder 2.

Build order (placed at min:sec, finished at): house2 0:00→1:06, quarry 0:00→1:22, wood 0:02→1:35, saw 1:36→2:09, guard 1:38→2:45, forest 1:52→3:02, fisher 2:16→3:35, guard 3:02→3:58, house 4:20→4:57, house2 8:40→9:46, house2 13:00→14:39, look 15:00→15:53, wood 15:02→16:26, quarry 15:20→16:46.

Orders given: sendUnit 36, place 14, profession 2, priority 1, sendIn 1. None refused.

People changing jobs: new carrier 70, carrier -> worker 8, carrier -> geologist 1, carrier -> explorer 1.

People's orders (681 in all, 660 done): worker rest forest 94, worker gather forest 93, worker rest quarry 48, worker rest wood 48, worker gather quarry 46, worker gather wood 46, carrier haul log wood -> saw 30, worker rest saw 27, worker toCraft saw 26, worker craft saw 26, carrier haul stone quarry -> house2 12, carrier haul plank pile -> house2 9, worker rest fisher 9, explorer explore 9. Not done (outcome: times): failed: can't reach that spot ×9.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 27.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 36 (36 idle), coal/iron 0/0, sites 0, tips none.
- 20:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 66 (66 idle), coal/iron 0/0, sites 0, tips ore/stall/timing.
- ×3 30:00–50:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 66 (66 idle), coal/iron 0/0, sites 0, tips land/ore/stall/timing.


Script: 1800 turns, 4.9 ms average, worst 20 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 17/2/1660/18/42 | 25/6/2776/10/40 |
| 30 | 23/2/1682/33/27 | 35/6/3352/10/60 |
| 45 | 23/2/1682/36/24 | 68/15/7790/32/88 |
| 60 | 23/2/1682/36/24 | 82/23/14129/65/95 |
| first | 7 8 11 13 - - | 7 9 30 31 44 48 |

Soldiers every 5 min: 10 10 18 22 28 33 35 36 36 36 36 36 (original game NPC: 10 10 10 10 10 10 21 27 32 41 60 65).

First army orders (game min:sec): 2:40 sendIn 1 soldiers -> building 100; 11:38 armyTarget sword=5; 11:38 armyTarget spear=3; 11:38 armyReserve; 12:58 armyTarget sword=6; 12:58 armyTarget bow=3; 13:38 sendIn 1 soldiers -> building 182; 13:38 armyTarget spear=4; 13:58 armyTarget sword=5; 13:58 armyTarget spear=3; 14:18 armyTarget sword=6; 14:18 armyTarget spear=4.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 33 min, 12–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 2 min, 16–17: stall: smelter: waiting for coal 56% of the last 5 minutes.
- 6 min, 19–24: stall: barracks: waiting for weapons from the weaponsmith 58% of the last 5 minutes.
- 6 min, 20–25: stall: weaponsmith: waiting for coal 62% of the last 5 minutes.
- 3 min, 23–25: stall: iron mine: deposit worn out 70% of the last 5 minutes.
- 5 min, 25–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 31 min, 26–57: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 31 min, 26–57: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 31 min, 26–57: stall: quarry: stone pile full, waiting for carriers 100% of the last 5 minutes.
- 31 min, 26–57: settlers: No free settlers and every bed taken: build houses.
- 1 min, 45: stall: butcher: waiting for pigs 100% of the last 5 minutes.
- 1 min, 45: stall: coal mine: deposit worn out 93% of the last 5 minutes.
- 3 min, 58–60: stall: barracks: waiting for a free settler to train 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 15 | 8 | 7 | 5 | 0 | 0 | 0 | 0 | 0 | 8 | 7 | 15 | 0 | 0 | 0 | 0 | 0 | 10 | 18 | 1660 | 3349 |
| 30 | 24 | 8 | 16 | 12 | 0 | 12 | 12 | 12 | 0 | 13 | 3 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 91 | 1682 | 3351 |
| 45 | 24 | 8 | 16 | 15 | 0 | 3 | 13 | 13 | 0 | 21 | 14 | 20 | 0 | 0 | 1 | 0 | 0 | 1 | 95 | 1682 | 3351 |
| 60 | 24 | 8 | 16 | 16 | 0 | 12 | 14 | 14 | 0 | 26 | 14 | 20 | 0 | 0 | 1 | 0 | 0 | 2 | 109 | 1682 | 3351 |

At the end: buildings (built+sites) quarry 2, wood 2, guard 2, house 2, hq 1, house2 1, saw 1, forest 1, fisher 1, coalmine 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, pigfarm 1, butcher 1.
People: soldier 32, worker 16, digger 2, builder 2, carrier 2, explorer 1, geologist 1; beds 40. Soldiers: sword 15, bow 9, spear 8.

Goods produced in the game: fish 230, coal 112, log 80, stone 78, water 69, grain 69, ironore 67, plank 60, pig 55, iron 53, meat 41, sword 13, spear 8, bow 6, axe 2, saw 1, rod 1, hammer 1, pick 1.
Goods consumed in the game: fish 220, coal 86, stone 80, plank 76, log 60, water 55, grain 55, ironore 53, pig 41, iron 33, meat 29, sword 12, spear 8, bow 6, pick 5, axe 3, hammer 3, saw 1, shovel 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (59 building-min): Idle 100%
- quarry (100 building-min): Stone pile full, waiting for carriers 76%, Cutting stone 15%, Bringing stone to the pile 9%, Worker picking up a pickaxe 1%, Working 0%
- wood (102 building-min): Log pile full, waiting for carriers 79%, Felling a tree 16%, Bringing a log to the pile 5%, Worker picking up an axe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 83%, Sawing planks 13%, Stacking outside 3%, Fetching from the pile 0%, Waiting for logs 0%
- guard (104 building-min): Idle 100%, Soldiers on the way 0%
- forest (57 building-min): No free ground to plant in range inside your border 67%, Planting a sapling 33%, Worker picking up a shovel 0%
- fisher (57 building-min): Fishing 35%, Bringing a fish to the pile 35%, Fish pile full, waiting for carriers 30%, Worker picking up a fishing rod 0%
- coalmine (56 building-min): Deposit worn out: finding little coal 38%, Deposit thinning: mining coal 21%, Coal pile full, waiting for carriers 18%, Mining coal 14%, Bringing coal out 5%
- ironmine (56 building-min): Iron ore pile full, waiting for carriers 35%, Deposit worn out: finding little iron ore 34%, Deposit thinning: mining iron ore 10%, Needs meat or fish: mining stopped 8%, Mining iron ore 7%
- house (105 building-min): Idle 100%
- smelter (54 building-min): Output pile full, waiting for carriers 78%, Smelting iron 13%, Waiting for coal 6%, Stacking outside 3%, Fetching from the pile 0%
- smith (52 building-min): All tool targets met 98%, Forging axe 1%, Stacking outside 0%, Forging fishing rod 0%, Forging pickaxe 0%
- weaponsmith (49 building-min): All weapon targets met 51%, Waiting for coal 40%, Forging sword 3%, Forging spear 2%, Stacking outside 1%
- barracks (47 building-min): Waiting for weapons from the weaponsmith 49%, Waiting for a free settler to train 32%, Weapons on the way 9%, Soldier targets met 7%, Training soldiers 2%
- farm (44 building-min): Grain pile full, waiting for carriers 76%, Sowing a field 11%, Harvesting grain 8%, Bringing grain to the pile 4%, Worker picking up a scythe 1%
- waterhut (42 building-min): Water pile full, waiting for carriers 79%, Bringing water to the pile 11%, Fetching water 9%, Idle 0%, Worker on the way 0%
- pigfarm (39 building-min): Output pile full, waiting for carriers 63%, Raising a pig 32%, Stacking outside 4%, Waiting for water 1%, Fetching from the pile 1%
- butcher (38 building-min): Waiting for pigs 52%, Output pile full, waiting for carriers 36%, Butchering 8%, Stacking outside 3%, Fetching from the pile 1%

Building sites, time per state (site-min): Leveling the ground 6, Builders at work 6, Waiting for a digger 6, Waiting for a builder 4.

Build order (placed at min:sec, finished at): house2 0:00→1:09, quarry 0:02→1:26, wood 0:04→1:39, saw 1:40→2:11, guard 1:42→2:39, forest 1:56→2:57, fisher 2:26→3:24, coalmine 3:08→3:49, ironmine 3:10→4:05, house 4:20→5:13, smelter 5:34→6:24, smith 7:04→7:54, house 8:40→9:29, weaponsmith 10:04→10:57, barracks 11:36→12:39, guard 12:34→13:37, farm 14:52→15:55, wood 15:12→16:12, waterhut 16:30→17:32, quarry 17:30→18:37, pigfarm 19:36→20:35, butcher 20:08→21:33.

Orders given: sendUnit 117, armyTarget 34, release 31, place 22, march 15, priority 5, weaponKeep 3, profession 2, sendIn 2, armyReserve 1. Refused (order: reason, times): place: Another building is in the way ×1.

People changing jobs: new carrier 40, carrier -> soldier 26, carrier -> worker 16, carrier -> geologist 1, carrier -> explorer 1.

People's orders (4211 in all, 4190 done): worker mine coalmine 248, worker rest fisher 231, worker gather fisher 230, carrier haul fish fisher -> coalmine 172, worker eat coalmine 171, worker rest farm 140, worker gather farm 139, worker mine ironmine 132, explorer explore 115, worker rest coalmine 113, worker rest forest 111, worker gather forest 110, worker rest ironmine 86, worker rest wood 82. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 8 field soldiers, 1 posts, carriers 35 (33 idle), coal/iron 1/1, sites 0, tips none.
- 20:00 Adaptive plan: 18 field soldiers, 2 posts, carriers 18 (6 idle), coal/iron 1/1, sites 1, tips stall.
- ×3 30:00–50:00 Adaptive plan: 32 field soldiers, 2 posts, carriers 2 (0 idle), coal/iron 1/1, sites 0, tips land/stall/settlers.


Script: 1800 turns, 1.9 ms average, worst 24 ms, 0 over 0.3 s, 0 errors. Orders refused: place 1 of 23.

### Map 20261030: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 19/2/1629/18/52 | 25/6/3049/10/40 |
| 30 | 22/3/1937/31/39 | 54/8/4408/12/78 |
| 45 | 25/5/3027/49/41 | 74/16/9725/54/86 |
| 60 | 22/3/1678/24/35 | 82/24/15720/65/90 |
| first | 8 9 12 13 37 - | 14 15 16 19 39 41 |

Soldiers every 5 min: 10 10 18 22 22 31 39 45 49 31 24 24 (original game NPC: 10 10 10 10 10 12 20 38 54 58 51 65).

First army orders (game min:sec): 2:46 sendIn 1 soldiers -> building 100; 11:36 armyTarget sword=5; 11:36 armyTarget spear=3; 11:36 armyReserve; 12:36 armyTarget bow=3; 12:56 armyTarget sword=6; 13:36 armyTarget spear=4; 14:16 armyTarget sword=7; 14:56 armyTarget bow=4; 15:00 march 5 soldiers -> 226,130; 15:36 armyTarget sword=8; 16:16 armyTarget spear=5.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 5 min, 17–21: stall: goldsmelter: waiting for coal 83% of the last 5 minutes.
- 15 min, 20–59: stall: barracks: waiting for weapons from the weaponsmith 96% of the last 5 minutes.
- 23 min, 20–60: stall: weaponsmith: waiting for coal 87% of the last 5 minutes.
- 7 min, 22–28: stall: gold mine: deposit worn out 59% of the last 5 minutes.
- 18 min, 24–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 34 min, 26–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 21 min, 28–50: stall: iron mine: deposit worn out 92% of the last 5 minutes.
- 1 min, 42: stall: quarry: stone pile full, waiting for carriers 100% of the last 5 minutes.
- 2 min, 42–43: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 1 min, 42: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 2 min, 42–43: settlers: No free settlers and every bed taken: build houses.
- 1 min, 43: stall: gold mine: gold ore pile full, waiting for carriers 100% of the last 5 minutes.
- 9 min, 48–60: stall: coal mine: deposit worn out 94% of the last 5 minutes.
- 5 min, 49–53: army: Lost 17 soldiers in the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 1 | 8 | 6 | 14 | 0 | 0 | 0 | 0 | 0 | 9 | 0 | 14 | 8 | 0 | 0 | 0 | 0 | 28 | 23 | 1629 | 3503 |
| 30 | 24 | 8 | 16 | 15 | 0 | 0 | 0 | 0 | 0 | 20 | 2 | 19 | 14 | 8 | 0 | 1 | 0 | 14 | 70 | 1937 | 4007 |
| 45 | 24 | 8 | 16 | 18 | 0 | 0 | 0 | 0 | 0 | 16 | 4 | 19 | 14 | 8 | 0 | 0 | 0 | 17 | 74 | 3027 | 5639 |
| 60 | 23 | 8 | 16 | 19 | 0 | 0 | 0 | 0 | 0 | 15 | 12 | 20 | 14 | 8 | 1 | 0 | 1 | 5 | 77 | 1678 | 5734 |

At the end: buildings (built+sites) guard 3+1, house2 2, quarry 2, wood 2, hq 1, saw 1, forest 1, fisher 1, ironmine 1, coalmine 1, smelter 1, smith 1, house 1, weaponsmith 1, barracks 1, goldmine 1, goldsmelter 1.
People: soldier 20, carrier 15, worker 14, digger 2, builder 2, geologist 1, explorer 1; beds 50. Soldiers: sword 11, bow 6, spear 3.

Goods produced in the game: fish 396, coal 151, log 88, stone 88, ironore 86, iron 74, plank 68, sword 23, goldore 22, spear 14, bow 10, gold 8, hammer 2, pick 2, saw 1, rod 1, axe 1.
Goods consumed in the game: fish 383, coal 136, stone 90, plank 84, ironore 74, log 69, iron 54, sword 22, spear 14, bow 9, goldore 8, pick 6, hammer 4, axe 2, saw 1, shovel 1, rod 1.
Goods lost in the game: stone 11, plank 9.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (123 building-min): Idle 100%
- quarry (103 building-min): Stone pile full, waiting for carriers 79%, Cutting stone 14%, Bringing stone to the pile 6%, Worker picking up a pickaxe 1%, Working 0%
- wood (103 building-min): Log pile full, waiting for carriers 77%, Felling a tree 17%, Bringing a log to the pile 5%, Worker picking up an axe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 78%, Sawing planks 15%, Waiting for logs 3%, Stacking outside 3%, Fetching from the pile 0%
- guard (165 building-min): Idle 97%, Waiting for a swordsman: train one at the barracks 3%, Soldiers on the way 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 64%, Planting a sapling 35%, Worker picking up a shovel 0%, Working 0%
- fisher (57 building-min): Fishing 41%, Bringing a fish to the pile 36%, Fish pile full, waiting for carriers 22%, Worker picking up a fishing rod 0%, Working 0%
- ironmine (55 building-min): Deposit worn out: finding little iron ore 53%, Iron ore pile full, waiting for carriers 13%, Deposit thinning: mining iron ore 12%, Mining iron ore 10%, Needs meat or fish: mining stopped 5%
- coalmine (53 building-min): Deposit thinning: mining coal 38%, Deposit worn out: finding little coal 28%, Mining coal 21%, Bringing coal out 7%, Fetching food 2%
- smelter (52 building-min): Output pile full, waiting for carriers 71%, Smelting iron 18%, Stacking outside 4%, Waiting for iron ore 3%, Waiting for coal 2%
- smith (51 building-min): All tool targets met 97%, Worker picking up a hammer 0%, Forging hammer 0%, Forging pickaxe 0%, Stacking outside 0%
- house (50 building-min): Idle 100%
- weaponsmith (49 building-min): Waiting for coal 63%, All weapon targets met 21%, Forging sword 6%, Forging spear 4%, Stacking outside 3%
- barracks (48 building-min): Waiting for weapons from the weaponsmith 64%, Weapons on the way 20%, Soldier targets met 14%, Training soldiers 1%, Idle 0%
- goldmine (47 building-min): Gold ore pile full, waiting for carriers 74%, Deposit worn out: finding little gold ore 17%, Deposit thinning: mining gold ore 4%, Mining gold ore 2%, Bringing gold ore out 1%
- goldsmelter (46 building-min): Output pile full, waiting for carriers 84%, Waiting for coal 12%, Smelting gold 2%, Worker picking up a hammer 1%, Stacking outside 1%
- tower (15 building-min): Idle 91%, Waiting for a swordsman: train one at the barracks 7%, Soldiers on the way 2%

Building sites, time per state (site-min): Builders at work 7, Leveling the ground 6, Waiting for a digger 6, Waiting for a builder 4, No way to the site for diggers 2, Waiting for materials 0.

Build order (placed at min:sec, finished at): house2 0:00→0:55, quarry 0:00→1:14, wood 0:02→1:27, saw 1:28→2:05, guard 1:30→2:45, forest 1:42→3:04, fisher 2:06→3:24, guard 2:46→3:46, ironmine 4:10→4:40, house2 4:24→5:44, coalmine 6:26→6:57, smelter 6:58→7:56, smith 8:20→8:56, house 8:44→9:32, weaponsmith 10:16→11:23, barracks 11:34→12:23, goldmine 12:24→13:15, goldsmelter 13:22→14:16, wood 15:00→15:44, quarry 15:02→16:04, guard 24:00→24:40, guard 33:00→33:31, tower 35:00→36:12, house2 42:00→43:20, guard 52:46→55:30, guard 59:50→never.

Demolished or burned: house2 (burned) 53:22.

Orders given: sendUnit 118, armyTarget 75, place 26, release 26, march 14, priority 5, sendIn 4, weaponKeep 3, profession 2, attack 2, armyReserve 1. None refused.

People changing jobs: new carrier 70, carrier -> soldier 45, carrier -> worker 14, new soldier 8, carrier -> geologist 1, carrier -> explorer 1.

People's orders (4725 in all, 4677 done): worker rest fisher 397, worker gather fisher 396, worker mine coalmine 304, worker mine ironmine 240, carrier haul fish fisher -> coalmine 197, worker eat coalmine 193, worker eat ironmine 171, carrier haul fish fisher -> ironmine 169, worker rest coalmine 153, worker rest forest 146, worker gather forest 145, explorer explore 115, worker rest ironmine 94, worker rest quarry 90. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×12; failed: no way (digger (dig 0) own-land-split) ×4; failed: killed ×3.

Failed path searches (who (task) why: times): digger (dig 0) own-land-split 4.

Fights and contact: attacked enemy buildings 1 times (first 48:18); was attacked 4 times (first 50:22); lost tower 51:40, guard 52:22, guard 53:05; killed spear 6, sword 10, bow 9; lost people spear 11, sword 15, bow 5; first saw player 1 at 47:00.

Your notes (7 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 45 (39 idle), coal/iron 1/1, sites 0, tips none.
- ×3 20:00–40:00 Adaptive plan: 35 field soldiers, 5 posts, carriers 5 (0 idle), coal/iron 1/1, sites 0, tips stall.
- 48:18 Attack: 19 field troops against tower 401; threshold 3.
- 50:00 Adaptive plan: 20 field soldiers, 5 posts, carriers 19 (16 idle), coal/iron 1/1, sites 0, tips land/stall/army.


Script: 1844 turns, 1.1 ms average, worst 28 ms, 0 over 0.3 s, 0 errors. Orders refused: none.
