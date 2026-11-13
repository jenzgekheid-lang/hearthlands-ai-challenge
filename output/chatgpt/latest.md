# Tournament: chatgpt

Game version 206. Written for: chatgpt 206.

- chatgpt: hearthlands-ai-challenge, commit 34713fa

Maps 20261030, 777, 4242, 31, each twice (sides swapped), up to 60 game minutes (1x). 57 s.

Each game ends with the script's own game log: what it may know (its own side, and what happened to it or what it saw). Times are game min:sec.

| Opponent | Won | Lost | Undecided |
|---|---|---|---|
| original game NPC | 0 | 0 | 8 |

## Games

Each row: buildings / military / land tiles / soldiers / people at the minute shown. First: game minute of the first smelter, smith, weaponsmith, barracks, tower, castle (- = never).

### Map 31: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 20/1/1345/16/44 | 33/6/3182/10/60 |
| 30 | 22/1/1354/34/26 | 63/9/5787/34/86 |
| 45 | 22/1/1354/36/24 | 72/17/10408/55/105 |
| 60 | 22/1/1354/36/24 | 83/23/15552/74/86 |
| first | 5 7 9 9 - - | 8 8 20 20 27 32 |

Soldiers every 5 min: 10 14 16 23 33 34 36 36 36 36 36 36 (original game NPC: 10 10 10 10 11 34 44 52 55 61 67 74).

First army orders (game min:sec): 2:26 sendIn 1 soldiers -> building 90; 8:26 armyTarget sword=5; 8:26 armyTarget spear=3; 8:26 armyReserve; 9:26 armyTarget bow=3; 9:46 armyTarget sword=6; 10:06 armyTarget spear=4; 10:26 armyTarget sword=7; 17:26 armyTarget bow=4; 17:46 armyTarget sword=8; 18:26 armyTarget spear=5; 18:46 armyTarget sword=9.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 25 min, 6–60: stall: fisher: no fish in range inside your border 88% of the last 5 minutes.
- 8 min, 9–16: stall: iron mine: needs meat or fish 100% of the last 5 minutes.
- 10 min, 11–28: stall: barracks: waiting for weapons from the weaponsmith 89% of the last 5 minutes.
- 32 min, 13–52: stall: smelter: waiting for iron ore 94% of the last 5 minutes.
- 9 min, 16–35: stall: weaponsmith: waiting for iron 91% of the last 5 minutes.
- 30 min, 23–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 37 min, 24–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 30–53: stall: quarry: stone pile full, waiting for carriers 100% of the last 5 minutes.
- 8 min, 30–53: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 8 min, 30–53: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 8 min, 30–53: settlers: No free settlers and every bed taken: build houses.
- 19 min, 37–60: stall: barracks: waiting for a free settler to train 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 2 | 8 | 3 | 1 | 0 | 0 | 10 | 6 | 10 | 23 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 20 | 28 | 1345 | 2606 |
| 30 | 24 | 8 | 16 | 4 | 12 | 0 | 14 | 15 | 14 | 26 | 1 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 84 | 1354 | 2640 |
| 45 | 24 | 8 | 16 | 6 | 12 | 0 | 14 | 16 | 14 | 26 | 1 | 14 | 0 | 0 | 1 | 0 | 0 | 1 | 88 | 1354 | 2640 |
| 60 | 24 | 8 | 16 | 4 | 12 | 0 | 14 | 16 | 14 | 26 | 3 | 20 | 0 | 0 | 1 | 0 | 0 | 2 | 93 | 1354 | 2640 |

At the end: buildings (built+sites) quarry 2, wood 2, house 2, hq 1, house2 1, saw 1, guard 1, forest 1, fisher 1, ironmine 1, coalmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, mill 1, bakery 1.
People: soldier 34, worker 16, digger 2, builder 2, carrier 2, geologist 1, explorer 1; beds 40. Soldiers: sword 16, bow 9, spear 9.

Goods produced in the game: fish 124, coal 110, log 75, stone 73, grain 63, plank 55, ironore 55, iron 52, water 47, flour 47, bread 33, sword 12, spear 9, bow 6, saw 1, rod 1, hammer 1, axe 1, pick 1.
Goods consumed in the game: fish 126, coal 84, stone 75, plank 71, log 55, ironore 52, grain 47, water 33, flour 33, iron 32, bread 21, sword 11, spear 9, bow 6, pick 5, hammer 3, axe 2, saw 1, shovel 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (59 building-min): Idle 100%
- quarry (102 building-min): Stone pile full, waiting for carriers 82%, Cutting stone 12%, Bringing stone to the pile 6%, Worker picking up a pickaxe 0%, Working 0%
- wood (103 building-min): Log pile full, waiting for carriers 80%, Felling a tree 15%, Bringing a log to the pile 5%, Worker picking up an axe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 82%, Sawing planks 12%, Waiting for logs 3%, Stacking outside 3%, Fetching from the pile 0%
- guard (58 building-min): Idle 100%, Soldiers on the way 0%
- forest (57 building-min): No free ground to plant in range inside your border 70%, Planting a sapling 30%, Worker picking up a shovel 0%
- fisher (57 building-min): No fish in range inside your border 80%, Fishing 13%, Bringing a fish to the pile 6%, Worker picking up a fishing rod 0%
- ironmine (57 building-min): Needs meat or fish: mining stopped 52%, Deposit worn out: finding little iron ore 32%, Deposit thinning: mining iron ore 6%, Mining iron ore 4%, Bringing iron ore out 3%
- coalmine (56 building-min): Coal pile full, waiting for carriers 53%, Mining coal 25%, Deposit thinning: mining coal 8%, Needs bread or fish: mining stopped 7%, Bringing coal out 5%
- smelter (55 building-min): Waiting for iron ore 69%, Output pile full, waiting for carriers 13%, Smelting iron 12%, Stacking outside 3%, Waiting for coal and iron ore 2%
- house (105 building-min): Idle 100%
- smith (54 building-min): All tool targets met 98%, Worker picking up a hammer 1%, Forging saw 0%, Forging fishing rod 0%, Forging axe 0%
- weaponsmith (52 building-min): All weapon targets met 51%, Waiting for iron 39%, Forging sword 3%, Forging spear 2%, Forging bow 1%
- barracks (51 building-min): Waiting for a free settler to train 54%, Waiting for weapons from the weaponsmith 37%, Soldier targets met 6%, Weapons on the way 3%, Training soldiers 0%
- farm (48 building-min): Grain pile full, waiting for carriers 81%, Sowing a field 9%, Harvesting grain 6%, Bringing grain to the pile 3%, Worker picking up a scythe 0%
- waterhut (47 building-min): Water pile full, waiting for carriers 91%, Fetching water 5%, Bringing water to the pile 4%, Working 0%
- mill (47 building-min): Output pile full, waiting for carriers 91%, Grinding flour 5%, Stacking outside 3%, Waiting for grain 0%, Fetching from the pile 0%
- bakery (45 building-min): Output pile full, waiting for carriers 81%, Baking bread 16%, Stacking outside 2%, Fetching from the pile 0%, Waiting for water 0%

Building sites, time per state (site-min): Builders at work 6, Leveling the ground 5, Waiting for a digger 5, Waiting for a builder 3, Waiting for materials 0.

Build order (placed at min:sec, finished at): house2 0:00→0:57, quarry 0:00→1:29, wood 0:02→1:12, saw 1:12→1:58, guard 1:14→2:25, forest 1:44→2:45, fisher 2:06→3:05, ironmine 2:48→3:22, coalmine 3:02→3:37, smelter 3:46→4:41, house 4:28→5:09, smith 5:36→6:24, weaponsmith 7:12→8:06, barracks 8:24→8:58, house 9:10→9:45, farm 10:48→11:47, waterhut 11:52→12:52, mill 12:40→13:18, bakery 14:04→14:41, wood 15:34→16:11, quarry 15:36→16:44.

Orders given: sendUnit 116, armyTarget 32, place 21, priority 5, weaponKeep 3, profession 2, sendIn 1, armyReserve 1. None refused.

People changing jobs: new carrier 40, carrier -> soldier 26, carrier -> worker 16, carrier -> geologist 1, carrier -> explorer 1.

People's orders (3395 in all, 3347 done): worker mine ironmine 139, worker mine coalmine 137, worker rest farm 134, worker gather farm 133, worker rest fisher 125, worker gather fisher 124, worker rest forest 119, worker gather forest 118, worker rest coalmine 114, worker eat ironmine 101, carrier haul fish fisher -> ironmine 97, worker rest ironmine 92, explorer explore 86, worker rest wood 77. Not done (outcome: times): failed: can't reach that spot ×29.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 29.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Adaptive plan: 10 field soldiers, 0 posts, carriers 6 (6 idle), coal/iron 0/0, sites 0, tips none.
- ×2 10:00–20:00 Adaptive plan: 21 field soldiers, 1 posts, carriers 15 (13 idle), coal/iron 1/1, sites 0, tips stall.
- ×2 30:00–40:00 Adaptive plan: 34 field soldiers, 1 posts, carriers 2 (0 idle), coal/iron 1/1, sites 0, tips land/stall/settlers.
- 50:00 Adaptive plan: 34 field soldiers, 1 posts, carriers 2 (2 idle), coal/iron 1/1, sites 0, tips land/stall.


Script: 1800 turns, 1.6 ms average, worst 23 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 31: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 16/1/1343/15/45 | 31/6/2852/10/50 |
| 30 | 20/2/1651/18/62 | 66/13/5902/20/90 |
| 45 | 21/3/1971/24/56 | 76/19/10799/45/85 |
| 60 | 22/4/2731/37/43 | 84/25/15504/73/97 |
| first | 5 7 9 12 51 - | 11 12 13 17 29 34 |

Soldiers every 5 min: 10 10 15 16 16 18 19 21 24 30 34 37 (original game NPC: 10 10 10 15 16 20 24 34 45 58 68 73).

First army orders (game min:sec): 2:20 sendIn 1 soldiers -> building 101; 10:18 armyTarget sword=5; 10:18 armyTarget spear=3; 10:18 armyReserve; 13:58 armyTarget bow=3; 14:18 armyTarget sword=6; 14:58 armyTarget spear=4; 15:00 march 5 soldiers -> 224,136; 15:18 armyTarget sword=7; 18:00 march 5 soldiers -> 214,146; 21:00 march 5 soldiers -> 214,146; 24:00 march 5 soldiers -> 214,146.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 22 min, 11–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 5 min, 11–15: stall: weaponsmith: waiting for coal 74% of the last 5 minutes.
- 36 min, 11–60: stall: smelter: waiting for coal 91% of the last 5 minutes.
- 43 min, 11–60: stall: coal mine: deposit worn out 90% of the last 5 minutes.
- 13 min, 16–38: stall: barracks: waiting for weapons from the weaponsmith 96% of the last 5 minutes.
- 36 min, 24–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 17 min, 24–46: stall: weaponsmith: waiting for iron 92% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 11 | 15 | 13 | 10 | 0 | 0 | 0 | 0 | 0 | 6 | 14 | 6 | 0 | 0 | 0 | 0 | 0 | 28 | 28 | 1343 | 2878 |
| 30 | 24 | 8 | 16 | 15 | 0 | 0 | 0 | 0 | 0 | 12 | 14 | 6 | 0 | 0 | 0 | 0 | 0 | 42 | 60 | 1651 | 3190 |
| 45 | 24 | 8 | 16 | 15 | 0 | 0 | 0 | 0 | 0 | 12 | 14 | 6 | 0 | 0 | 0 | 0 | 0 | 37 | 60 | 1971 | 4061 |
| 60 | 24 | 8 | 16 | 12 | 0 | 0 | 0 | 0 | 0 | 12 | 12 | 6 | 0 | 0 | 0 | 0 | 0 | 23 | 55 | 2731 | 4869 |

At the end: buildings (built+sites) guard 3, house2 2, quarry 2, wood 2, house 2, hq 1, saw 1, forest 1, fisher 1, coalmine 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, tower 1.
People: soldier 30, carrier 25, worker 12, digger 2, builder 2, geologist 1, explorer 1; beds 60. Soldiers: sword 15, bow 8, spear 7.

Goods produced in the game: fish 303, coal 82, log 73, stone 72, plank 53, ironore 50, iron 38, sword 15, spear 7, bow 5, saw 1, rod 1, hammer 1, axe 1, pick 1.
Goods consumed in the game: fish 297, stone 74, coal 70, plank 69, log 53, ironore 38, iron 32, sword 15, spear 7, pick 5, bow 5, hammer 3, axe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (104 building-min): Idle 100%
- quarry (102 building-min): Stone pile full, waiting for carriers 82%, Cutting stone 12%, Bringing stone to the pile 6%, Worker picking up a pickaxe 0%, Working 0%
- wood (103 building-min): Log pile full, waiting for carriers 80%, Felling a tree 15%, Bringing a log to the pile 5%, Worker picking up an axe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 83%, Sawing planks 12%, Waiting for logs 2%, Stacking outside 2%, Fetching from the pile 0%
- guard (125 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 70%, Planting a sapling 29%, Worker picking up a shovel 0%, Working 0%
- fisher (57 building-min): Fishing 36%, Bringing a fish to the pile 31%, Fish pile full, waiting for carriers 28%, No fish in range inside your border 5%, Worker picking up a fishing rod 0%
- coalmine (56 building-min): Deposit worn out: finding little coal 85%, Deposit thinning: mining coal 4%, Bringing coal out 4%, Mining coal 3%, Came back empty-handed 3%
- ironmine (56 building-min): Iron ore pile full, waiting for carriers 61%, Deposit worn out: finding little iron ore 15%, Deposit thinning: mining iron ore 13%, Mining iron ore 7%, Bringing iron ore out 2%
- smelter (55 building-min): Waiting for coal 88%, Smelting iron 9%, Stacking outside 2%, Output pile full, waiting for carriers 1%, Worker picking up a hammer 0%
- house (105 building-min): Idle 100%
- smith (53 building-min): All tool targets met 98%, Waiting for coal 1%, Worker picking up a hammer 0%, Stacking outside 0%, Forging saw 0%
- weaponsmith (51 building-min): Waiting for iron 72%, Waiting for coal 10%, Waiting for coal and iron 7%, Forging sword 4%, All weapon targets met 4%
- barracks (49 building-min): Waiting for weapons from the weaponsmith 82%, Weapons on the way 14%, Soldier targets met 4%, Training soldiers 0%
- tower (9 building-min): Idle 98%, Soldiers on the way 2%, Waiting for a soldier 0%

Building sites, time per state (site-min): Leveling the ground 7, Waiting for a digger 6, Builders at work 6, Waiting for a builder 3.

Build order (placed at min:sec, finished at): house2 0:00→0:55, quarry 0:00→1:26, wood 0:02→1:09, saw 1:10→1:49, guard 1:20→2:19, forest 1:46→2:35, fisher 2:12→3:01, coalmine 2:26→3:34, ironmine 2:40→3:49, smelter 4:02→4:46, house 4:50→5:22, smith 6:12→6:58, weaponsmith 8:02→8:58, house 9:10→9:50, barracks 10:16→11:11, house2 13:30→15:17, guard 13:52→15:43, wood 15:00→15:59, quarry 15:06→16:33, guard 36:28→37:09, tower 49:12→50:37.

Orders given: sendUnit 116, armyTarget 33, release 32, place 21, march 14, priority 5, weaponKeep 3, profession 2, sendIn 2, armyReserve 1. None refused.

People changing jobs: new carrier 60, carrier -> soldier 27, carrier -> worker 12, carrier -> geologist 1, carrier -> explorer 1.

People's orders (3392 in all, 3369 done): worker rest fisher 304, worker gather fisher 303, worker mine coalmine 276, worker eat coalmine 215, carrier haul fish fisher -> coalmine 215, worker rest forest 132, worker gather forest 131, worker mine ironmine 118, explorer explore 114, carrier haul fish fisher -> ironmine 84, worker rest coalmine 83, worker eat ironmine 82, worker rest wood 75, worker rest quarry 74. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 8 field soldiers, 1 posts, carriers 29 (26 idle), coal/iron 1/1, sites 0, tips none.
- ×3 20:00–50:00 Adaptive plan: 26 field soldiers, 4 posts, carriers 32 (29 idle), coal/iron 1/1, sites 1, tips stall.
- 30:00 Adaptive plan: 15 field soldiers, 2 posts, carriers 44 (42 idle), coal/iron 1/1, sites 0, tips land/stall.


Script: 1800 turns, 1.4 ms average, worst 36 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 12/1/1350/10/90 | 30/6/2474/10/50 |
| 30 | 14/1/1350/10/130 | 52/9/4385/23/67 |
| 45 | 14/1/1350/10/130 | 74/15/8124/52/98 |
| 60 | 14/1/1350/10/130 | 83/24/14180/77/93 |
| first | - - - - - - | 10 11 16 16 37 46 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 11 23 26 40 52 63 71 77).

First army orders (game min:sec): 2:22 sendIn 1 soldiers -> building 99; 15:00 march 5 soldiers -> 70,124.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 7 min, 5–11: stall: fisher: no fish in range inside your border 52% of the last 5 minutes.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 44 min, 17–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 35 min, 26–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 78 | 40 | 1350 | 2807 |
| 30 | 16 | 8 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 118 | 40 | 1350 | 2807 |
| 45 | 16 | 8 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 118 | 40 | 1350 | 2807 |
| 60 | 16 | 8 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 118 | 40 | 1350 | 2807 |

At the end: buildings (built+sites) house2 6, hq 1, quarry 1, wood 1, saw 1, guard 1, forest 1, fisher 1, coalmine 1.
People: carrier 118, soldier 8, worker 6, digger 2, builder 2, geologist 1, explorer 1; beds 120. Soldiers: sword 5, bow 3.

Goods produced in the game: log 46, stone 42, plank 34, fish 9, coal 8.
Goods consumed in the game: stone 52, plank 50, log 34, pick 3, fish 3, axe 1, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (287 building-min): Idle 100%
- quarry (58 building-min): Stone pile full, waiting for carriers 84%, Cutting stone 11%, Bringing stone to the pile 4%, Worker picking up a pickaxe 0%, Idle 0%
- wood (59 building-min): Log pile full, waiting for carriers 82%, Felling a tree 15%, Bringing a log to the pile 3%, Worker picking up an axe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 90%, Sawing planks 7%, Stacking outside 2%, Worker picking up a saw 0%, Fetching from the pile 0%
- guard (58 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 65%, Planting a sapling 35%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 88%, No fish in range inside your border 9%, Bringing a fish to the pile 1%, Fishing 1%, Worker picking up a fishing rod 0%
- coalmine (57 building-min): Coal pile full, waiting for carriers 98%, Mining coal 1%, Worker picking up a pickaxe 1%, Bringing coal out 0%, Idle 0%

Building sites, time per state (site-min): Leveling the ground 6, Builders at work 4, Waiting for a digger 3, Waiting for a builder 2.

Build order (placed at min:sec, finished at): house2 0:00→1:08, quarry 0:00→1:40, wood 0:02→1:23, saw 1:24→2:00, guard 1:34→2:21, forest 1:58→2:37, fisher 2:20→2:52, coalmine 2:44→3:28, house2 4:20→5:47, house2 8:40→10:24, house2 13:00→14:06, house2 17:20→18:39, house2 21:40→23:26.

Orders given: sendUnit 116, place 13, release 3, profession 2, priority 1, sendIn 1, march 1. None refused.

People changing jobs: new carrier 120, carrier -> worker 6, carrier -> geologist 1, carrier -> explorer 1.

People's orders (897 in all, 888 done): worker rest forest 119, worker gather forest 118, explorer explore 115, worker rest wood 47, worker gather wood 46, worker rest quarry 43, worker gather quarry 42, carrier haul log wood -> saw 38, worker rest saw 35, worker toCraft saw 34, worker craft saw 34, carrier haul stone quarry -> house2 30, carrier haul plank saw -> house2 25, digger dig house2 12. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Adaptive plan: 10 field soldiers, 0 posts, carriers 6 (6 idle), coal/iron 0/0, sites 0, tips none.
- 10:00 Adaptive plan: 8 field soldiers, 1 posts, carriers 38 (38 idle), coal/iron 1/1, sites 1, tips stall.
- 20:00 Adaptive plan: 8 field soldiers, 1 posts, carriers 98 (98 idle), coal/iron 1/1, sites 0, tips land/timing.
- ×3 30:00–50:00 Adaptive plan: 8 field soldiers, 1 posts, carriers 118 (118 idle), coal/iron 1/1, sites 0, tips land/stall/timing.


Script: 1800 turns, 2.1 ms average, worst 19 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 11/1/1322/10/76 | 33/6/2657/10/50 |
| 30 | 14/1/1335/10/90 | 51/9/3893/15/65 |
| 45 | 14/1/1335/10/90 | 70/13/7952/48/82 |
| 60 | 14/1/1335/10/90 | 77/20/13304/67/83 |
| first | - - - - - - | 10 11 13 16 30 32 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 15 23 29 48 54 61 67).

First army orders (game min:sec): 2:42 sendIn 1 soldiers -> building 103.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 40 min, 11–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (24 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 40 min, 21–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 65 | 32 | 1322 | 2532 |
| 30 | 24 | 8 | 16 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 76 | 48 | 1335 | 4282 |
| 45 | 24 | 8 | 16 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 76 | 48 | 1335 | 4282 |
| 60 | 24 | 8 | 16 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 76 | 48 | 1335 | 4282 |

At the end: buildings (built+sites) house2 4, quarry 2, wood 2, hq 1, saw 1, guard 1, forest 1, fisher 1, look 1.
People: carrier 76, soldier 8, worker 8, digger 2, builder 2, geologist 1, explorer 1; beds 80. Soldiers: sword 5, bow 3.

Goods produced in the game: log 46, stone 46, plank 26, fish 8.
Goods consumed in the game: stone 48, plank 42, log 26, pick 3, axe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (209 building-min): Idle 100%
- quarry (103 building-min): Stone pile full, waiting for carriers 91%, Cutting stone 6%, Bringing stone to the pile 2%, Worker picking up a pickaxe 0%, Working 0%
- wood (103 building-min): Log pile full, waiting for carriers 87%, Felling a tree 10%, Bringing a log to the pile 3%, Worker picking up an axe 0%, Idle 0%
- saw (58 building-min): Output pile full, waiting for carriers 93%, Sawing planks 6%, Stacking outside 1%, Worker picking up a saw 0%, Fetching from the pile 0%
- guard (57 building-min): Idle 100%, Soldiers on the way 0%
- forest (57 building-min): No free ground to plant in range inside your border 74%, Planting a sapling 26%, Worker picking up a shovel 0%, Idle 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 98%, Bringing a fish to the pile 1%, Fishing 1%, Worker picking up a fishing rod 1%
- look (44 building-min): Scout on watch 100%, Working 0%

Building sites, time per state (site-min): Waiting for a digger 4, Leveling the ground 4, Builders at work 4, Waiting for a builder 2.

Build order (placed at min:sec, finished at): house2 0:00→0:51, quarry 0:00→1:06, wood 0:02→1:20, saw 1:22→2:04, guard 1:24→2:42, forest 1:26→3:01, fisher 2:06→3:20, house2 4:20→5:21, house2 8:40→9:38, house2 13:00→14:47, look 15:00→15:39, wood 15:02→15:52, quarry 15:18→16:09.

Orders given: sendUnit 115, place 13, profession 2, priority 1, sendIn 1. None refused.

People changing jobs: new carrier 80, carrier -> worker 8, carrier -> geologist 1, carrier -> explorer 1.

People's orders (785 in all, 745 done): worker rest forest 110, worker gather forest 109, explorer explore 86, worker rest quarry 48, worker rest wood 48, worker gather quarry 46, worker gather wood 46, carrier haul log wood -> saw 30, worker rest saw 27, worker toCraft saw 26, worker craft saw 26, carrier haul stone quarry -> house2 18, carrier haul plank saw -> house2 12, worker rest fisher 9. Not done (outcome: times): failed: can't reach that spot ×29.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 29.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 8 field soldiers, 1 posts, carriers 51 (51 idle), coal/iron 0/0, sites 0, tips none.
- 20:00 Adaptive plan: 8 field soldiers, 1 posts, carriers 76 (76 idle), coal/iron 0/0, sites 0, tips ore/timing.
- ×3 30:00–50:00 Adaptive plan: 8 field soldiers, 1 posts, carriers 76 (76 idle), coal/iron 0/0, sites 0, tips land/ore/stall/timing.


Script: 1800 turns, 4.5 ms average, worst 18 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 11/1/1324/10/84 | 31/6/2816/10/50 |
| 30 | 14/1/1360/10/90 | 62/12/5963/30/80 |
| 45 | 14/1/1360/10/90 | 73/15/9263/52/98 |
| 60 | 14/1/1360/10/90 | 79/21/13639/68/82 |
| first | - - - - - - | 9 10 16 16 39 37 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 14 19 30 44 48 52 57 63 68).

First army orders (game min:sec): 2:28 sendIn 1 soldiers -> building 89.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (2 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 39 min, 22–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 37 min, 24–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 73 | 32 | 1324 | 2480 |
| 30 | 24 | 8 | 16 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 76 | 48 | 1360 | 3480 |
| 45 | 24 | 8 | 16 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 76 | 48 | 1360 | 3480 |
| 60 | 24 | 8 | 16 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 76 | 48 | 1360 | 3480 |

At the end: buildings (built+sites) house2 4, quarry 2, wood 2, hq 1, saw 1, guard 1, forest 1, fisher 1, look 1.
People: carrier 76, soldier 8, worker 8, digger 2, builder 2, geologist 1, explorer 1; beds 80. Soldiers: sword 5, bow 3.

Goods produced in the game: log 46, stone 46, plank 26, fish 8.
Goods consumed in the game: stone 48, plank 42, log 26, pick 3, axe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (208 building-min): Idle 100%
- quarry (101 building-min): Stone pile full, waiting for carriers 92%, Cutting stone 6%, Bringing stone to the pile 2%, Worker picking up a pickaxe 0%, Working 0%
- wood (102 building-min): Log pile full, waiting for carriers 88%, Felling a tree 9%, Bringing a log to the pile 3%, Worker picking up an axe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 93%, Sawing planks 6%, Stacking outside 1%, Worker picking up a saw 0%, Fetching from the pile 0%
- guard (58 building-min): Idle 100%, Soldiers on the way 0%
- forest (57 building-min): No free ground to plant in range inside your border 72%, Planting a sapling 28%, Worker picking up a shovel 0%, Working 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 98%, Fishing 1%, Bringing a fish to the pile 1%, Worker picking up a fishing rod 0%
- look (44 building-min): Scout on watch 100%, Working 0%

Building sites, time per state (site-min): Waiting for a digger 5, Leveling the ground 5, Builders at work 4, Waiting for a builder 3.

Build order (placed at min:sec, finished at): house2 0:00→1:21, quarry 0:00→1:51, wood 0:02→1:33, saw 1:34→2:11, guard 1:36→2:27, forest 2:06→2:50, fisher 2:24→3:09, house2 4:20→5:40, house2 8:40→10:15, house2 13:00→14:33, look 15:00→15:44, wood 15:02→16:28, quarry 15:16→16:55.

Orders given: sendUnit 115, place 13, profession 2, priority 1, sendIn 1. None refused.

People changing jobs: new carrier 80, carrier -> worker 8, carrier -> geologist 1, carrier -> explorer 1.

People's orders (734 in all, 695 done): worker rest forest 107, worker gather forest 106, worker rest wood 48, worker rest quarry 48, worker gather wood 46, worker gather quarry 46, explorer explore 41, carrier haul log wood -> saw 30, worker rest saw 27, worker toCraft saw 26, worker craft saw 26, carrier haul stone quarry -> house2 18, carrier haul plank saw -> house2 12, worker rest fisher 9. Not done (outcome: times): failed: can't reach that spot ×28.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 74.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 8 field soldiers, 1 posts, carriers 39 (39 idle), coal/iron 0/0, sites 1, tips none.
- 20:00 Adaptive plan: 8 field soldiers, 1 posts, carriers 76 (76 idle), coal/iron 0/0, sites 0, tips ore/timing.
- ×3 30:00–50:00 Adaptive plan: 8 field soldiers, 1 posts, carriers 76 (76 idle), coal/iron 0/0, sites 0, tips land/ore/stall/timing.


Script: 1800 turns, 4.5 ms average, worst 22 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 10/1/1323/10/70 | 28/6/2747/10/40 |
| 30 | 14/1/1328/10/80 | 59/13/6234/39/71 |
| 45 | 14/1/1328/10/80 | 73/17/10020/55/85 |
| 60 | 14/1/1328/10/80 | 82/25/15860/75/85 |
| first | - - - - - - | 7 8 9 10 41 40 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 18 26 39 45 45 55 66 70 75).

First army orders (game min:sec): 2:46 sendIn 1 soldiers -> building 103.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 42 min, 11–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (79 mountain tiles).
- 41 min, 19–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 59 | 32 | 1323 | 2319 |
| 30 | 24 | 8 | 16 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 66 | 48 | 1328 | 3896 |
| 45 | 24 | 8 | 16 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 66 | 48 | 1328 | 3896 |
| 60 | 24 | 8 | 16 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 66 | 48 | 1328 | 3896 |

At the end: buildings (built+sites) house2 3, quarry 2, wood 2, hq 1, saw 1, guard 1, forest 1, fisher 1, look 1, house 1.
People: carrier 66, soldier 8, worker 8, digger 2, builder 2, geologist 1, explorer 1; beds 70. Soldiers: sword 5, bow 3.

Goods produced in the game: log 44, stone 43, plank 24, fish 8.
Goods consumed in the game: stone 45, plank 40, log 24, pick 3, axe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (163 building-min): Idle 100%
- quarry (101 building-min): Stone pile full, waiting for carriers 90%, Cutting stone 7%, Bringing stone to the pile 3%, Worker picking up a pickaxe 0%, Working 0%
- wood (102 building-min): Log pile full, waiting for carriers 87%, Felling a tree 9%, Bringing a log to the pile 3%, Worker picking up an axe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 93%, Sawing planks 5%, Stacking outside 1%, Worker picking up a saw 0%, Fetching from the pile 0%
- guard (57 building-min): Idle 100%, Soldiers on the way 0%
- forest (57 building-min): No free ground to plant in range inside your border 77%, Planting a sapling 23%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- fisher (56 building-min): Fish pile full, waiting for carriers 99%, Fishing 0%, Worker picking up a fishing rod 0%, Bringing a fish to the pile 0%, Idle 0%
- look (44 building-min): Scout on watch 100%, Working 0%
- house (43 building-min): Idle 100%

Building sites, time per state (site-min): Waiting for a digger 6, Leveling the ground 5, Builders at work 3, Waiting for a builder 2.

Build order (placed at min:sec, finished at): house2 0:00→1:06, quarry 0:00→1:22, wood 0:02→1:35, saw 1:36→2:09, guard 1:38→2:45, forest 1:52→3:02, fisher 2:16→3:35, house2 4:20→5:42, house2 8:40→10:13, look 15:00→15:54, wood 15:02→16:27, house 15:22→16:51, quarry 15:22→17:09.

Orders given: sendUnit 115, place 13, profession 2, priority 1, sendIn 1. None refused.

People changing jobs: new carrier 70, carrier -> worker 8, carrier -> geologist 1, carrier -> explorer 1.

People's orders (673 in all, 633 done): worker rest forest 94, worker gather forest 93, worker rest wood 46, worker rest quarry 45, worker gather wood 44, worker gather quarry 43, explorer explore 29, carrier haul log wood -> saw 28, worker rest saw 25, worker toCraft saw 24, worker craft saw 24, carrier haul stone quarry -> house2 12, carrier haul plank pile -> house2 9, worker rest fisher 9. Not done (outcome: times): failed: can't reach that spot ×29.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 86.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 8 field soldiers, 1 posts, carriers 39 (39 idle), coal/iron 0/0, sites 1, tips none.
- 20:00 Adaptive plan: 8 field soldiers, 1 posts, carriers 66 (66 idle), coal/iron 0/0, sites 0, tips ore/timing.
- ×3 30:00–50:00 Adaptive plan: 8 field soldiers, 1 posts, carriers 66 (66 idle), coal/iron 0/0, sites 0, tips land/ore/stall/timing.


Script: 1800 turns, 4.2 ms average, worst 16 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 17/2/1660/18/42 | 24/6/2758/10/40 |
| 30 | 23/2/1682/35/25 | 29/6/3151/10/50 |
| 45 | 23/2/1682/36/24 | 50/12/5911/28/62 |
| 60 | 23/2/1682/36/24 | 74/16/8933/51/99 |
| first | 7 8 12 13 - - | 8 9 37 38 58 55 |

Soldiers every 5 min: 10 10 18 22 31 35 36 36 36 36 36 36 (original game NPC: 10 10 10 10 10 10 10 18 28 28 44 51).

First army orders (game min:sec): 2:40 sendIn 1 soldiers -> building 100; 11:40 armyTarget sword=5; 11:40 armyTarget spear=3; 11:40 armyReserve; 13:00 armyTarget sword=6; 13:00 armyTarget bow=3; 13:20 armyTarget spear=4; 14:00 sendIn 1 soldiers -> building 182; 14:00 armyTarget sword=7; 14:20 armyTarget sword=6; 14:20 armyTarget spear=3; 14:40 armyTarget sword=7.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 35 min, 12–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 1 min, 14: stall: smelter: waiting for coal 52% of the last 5 minutes.
- 5 min, 18–22: stall: barracks: waiting for weapons from the weaponsmith 57% of the last 5 minutes.
- 5 min, 18–22: stall: weaponsmith: waiting for coal 56% of the last 5 minutes.
- 8 min, 20–37: stall: smelter: waiting for iron ore 96% of the last 5 minutes.
- 6 min, 23–57: stall: butcher: waiting for pigs 92% of the last 5 minutes.
- 3 min, 24–31: stall: iron mine: deposit worn out 92% of the last 5 minutes.
- 31 min, 25–60: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 31 min, 25–60: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 31 min, 25–60: settlers: No free settlers and every bed taken: build houses.
- 30 min, 26–60: stall: quarry: stone pile full, waiting for carriers 100% of the last 5 minutes.
- 5 min, 30–57: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 2 min, 51–57: stall: barracks: waiting for a free settler to train 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 13 | 10 | 7 | 4 | 0 | 0 | 0 | 0 | 0 | 7 | 2 | 15 | 0 | 0 | 1 | 0 | 0 | 14 | 16 | 1660 | 3349 |
| 30 | 24 | 8 | 16 | 14 | 0 | 6 | 14 | 14 | 0 | 18 | 3 | 12 | 0 | 0 | 0 | 0 | 1 | 1 | 83 | 1682 | 3352 |
| 45 | 24 | 8 | 16 | 15 | 0 | 0 | 14 | 14 | 0 | 26 | 4 | 20 | 0 | 0 | 1 | 0 | 0 | 0 | 91 | 1682 | 3352 |
| 60 | 24 | 8 | 16 | 16 | 0 | 5 | 12 | 12 | 0 | 26 | 14 | 20 | 0 | 0 | 1 | 0 | 0 | 0 | 101 | 1682 | 3352 |

At the end: buildings (built+sites) quarry 2, wood 2, guard 2, house 2, hq 1, house2 1, saw 1, forest 1, fisher 1, ironmine 1, coalmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, pigfarm 1, butcher 1.
People: soldier 32, worker 16, digger 2, builder 2, carrier 2, geologist 1, explorer 1; beds 40. Soldiers: sword 15, bow 9, spear 8.

Goods produced in the game: fish 238, coal 112, log 80, stone 78, ironore 67, plank 60, grain 55, water 55, iron 53, pig 43, meat 35, sword 13, spear 8, bow 6, axe 2, saw 1, rod 1, hammer 1, pick 1.
Goods consumed in the game: fish 228, coal 86, stone 80, plank 76, log 60, ironore 53, water 43, grain 43, pig 35, iron 33, meat 30, sword 12, spear 8, bow 6, pick 5, axe 3, hammer 3, saw 1, shovel 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (59 building-min): Idle 100%
- quarry (102 building-min): Stone pile full, waiting for carriers 77%, Cutting stone 14%, Bringing stone to the pile 9%, Worker picking up a pickaxe 1%, Working 0%
- wood (102 building-min): Log pile full, waiting for carriers 79%, Felling a tree 16%, Bringing a log to the pile 5%, Worker picking up an axe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 83%, Sawing planks 13%, Stacking outside 3%, Fetching from the pile 0%, Worker picking up a saw 0%
- guard (103 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 66%, Planting a sapling 33%, Worker picking up a shovel 0%, Idle 0%
- fisher (57 building-min): Fishing 37%, Bringing a fish to the pile 36%, Fish pile full, waiting for carriers 26%, Worker picking up a fishing rod 0%, Working 0%
- ironmine (56 building-min): Deposit worn out: finding little iron ore 56%, Needs meat or fish: mining stopped 13%, Deposit thinning: mining iron ore 13%, Iron ore pile full, waiting for carriers 7%, Mining iron ore 5%
- coalmine (56 building-min): Coal pile full, waiting for carriers 36%, Deposit thinning: mining coal 36%, Mining coal 20%, Bringing coal out 6%, Came back empty-handed 1%
- house (105 building-min): Idle 100%
- smelter (54 building-min): Waiting for iron ore 40%, Output pile full, waiting for carriers 37%, Smelting iron 12%, Waiting for coal 6%, Stacking outside 3%
- smith (52 building-min): All tool targets met 98%, Forging axe 1%, Stacking outside 0%, Worker picking up a hammer 0%, Forging saw 0%
- weaponsmith (49 building-min): All weapon targets met 81%, Waiting for coal 10%, Forging sword 3%, Forging spear 2%, Forging bow 2%
- barracks (47 building-min): Waiting for weapons from the weaponsmith 50%, Waiting for a free settler to train 33%, Weapons on the way 9%, Soldier targets met 7%, Training soldiers 2%
- farm (44 building-min): Grain pile full, waiting for carriers 81%, Sowing a field 8%, Harvesting grain 7%, Bringing grain to the pile 3%, Worker picking up a scythe 1%
- waterhut (41 building-min): Water pile full, waiting for carriers 82%, Bringing water to the pile 9%, Fetching water 8%, Worker on the way 1%, Working 0%
- pigfarm (40 building-min): Output pile full, waiting for carriers 71%, Raising a pig 24%, Stacking outside 3%, Waiting for water 1%, Fetching from the pile 0%
- butcher (40 building-min): Waiting for pigs 88%, Butchering 7%, Stacking outside 2%, Output pile full, waiting for carriers 2%, Worker picking up an axe 1%

Building sites, time per state (site-min): Leveling the ground 6, Builders at work 6, Waiting for a digger 6, Waiting for a builder 4.

Build order (placed at min:sec, finished at): house2 0:00→1:09, quarry 0:02→1:26, wood 0:04→1:39, saw 1:40→2:11, guard 1:42→2:39, forest 1:58→2:57, fisher 2:26→3:25, ironmine 3:02→3:49, coalmine 3:16→4:04, house 4:20→5:13, smelter 5:36→6:26, smith 7:06→7:55, house 8:40→9:30, weaponsmith 10:06→11:00, barracks 11:38→12:42, guard 12:54→13:59, farm 14:40→15:43, wood 15:12→16:00, quarry 16:12→16:59, waterhut 17:46→18:53, pigfarm 18:18→19:48, butcher 18:50→20:26.

Orders given: sendUnit 117, armyTarget 34, release 26, place 22, march 15, priority 5, weaponKeep 3, profession 2, sendIn 2, armyReserve 1. Refused (order: reason, times): place: Another building is in the way ×1.

People changing jobs: new carrier 40, carrier -> soldier 26, carrier -> worker 16, carrier -> geologist 1, carrier -> explorer 1.

People's orders (4095 in all, 4072 done): worker rest fisher 239, worker gather fisher 238, worker mine coalmine 213, worker mine ironmine 185, carrier haul fish fisher -> coalmine 130, worker eat ironmine 129, worker eat coalmine 129, explorer explore 115, worker rest coalmine 113, worker rest farm 112, worker rest forest 111, worker gather farm 111, worker gather forest 110, carrier haul fish fisher -> ironmine 100. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 8 field soldiers, 1 posts, carriers 35 (31 idle), coal/iron 1/1, sites 0, tips none.
- 20:00 Adaptive plan: 18 field soldiers, 2 posts, carriers 17 (7 idle), coal/iron 1/1, sites 1, tips stall.
- 30:00 Adaptive plan: 31 field soldiers, 2 posts, carriers 3 (0 idle), coal/iron 1/1, sites 0, tips land/stall.
- ×2 40:00–50:00 Adaptive plan: 32 field soldiers, 2 posts, carriers 2 (0 idle), coal/iron 1/1, sites 0, tips land/stall/settlers.


Script: 1800 turns, 1.7 ms average, worst 14 ms, 0 over 0.3 s, 0 errors. Orders refused: place 1 of 23.

### Map 20261030: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 11/1/1318/10/90 | 25/6/3049/10/40 |
| 30 | 14/1/1339/10/90 | 58/11/5340/24/86 |
| 45 | 14/1/1339/10/90 | 75/16/10218/46/94 |
| 60 | 14/1/1339/10/90 | 81/23/14839/70/90 |
| first | - - - - - - | 14 15 16 20 28 37 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 16 24 27 35 46 60 64 70).

First army orders (game min:sec): 2:48 sendIn 1 soldiers -> building 100; 15:00 march 5 soldiers -> 226,130; 18:00 march 5 soldiers -> 226,130.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 42 min, 11–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (20 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 40 min, 21–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 79 | 32 | 1318 | 2496 |
| 30 | 24 | 8 | 16 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 76 | 48 | 1339 | 3416 |
| 45 | 24 | 8 | 16 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 76 | 48 | 1339 | 3416 |
| 60 | 24 | 8 | 16 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 76 | 48 | 1339 | 3416 |

At the end: buildings (built+sites) house2 4, quarry 2, wood 2, hq 1, saw 1, guard 1, forest 1, fisher 1, look 1.
People: carrier 76, soldier 8, worker 8, digger 2, builder 2, geologist 1, explorer 1; beds 80. Soldiers: sword 5, bow 3.

Goods produced in the game: log 46, stone 46, plank 26, fish 8.
Goods consumed in the game: stone 48, plank 42, log 26, pick 3, axe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (209 building-min): Idle 100%
- quarry (102 building-min): Stone pile full, waiting for carriers 89%, Cutting stone 7%, Bringing stone to the pile 4%, Worker picking up a pickaxe 0%, Working 0%
- wood (102 building-min): Log pile full, waiting for carriers 87%, Felling a tree 9%, Bringing a log to the pile 3%, Worker picking up an axe 0%, Idle 0%
- saw (58 building-min): Output pile full, waiting for carriers 93%, Sawing planks 6%, Stacking outside 1%, Worker picking up a saw 0%, Fetching from the pile 0%
- guard (57 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 74%, Planting a sapling 26%, Worker picking up a shovel 0%, Idle 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 99%, Fishing 1%, Worker picking up a fishing rod 0%, Bringing a fish to the pile 0%, Idle 0%
- look (44 building-min): Scout on watch 100%, Scout on the way 0%, Working 0%

Building sites, time per state (site-min): Waiting for a digger 5, Leveling the ground 4, Builders at work 4, Waiting for a builder 3.

Build order (placed at min:sec, finished at): house2 0:00→0:57, quarry 0:00→1:15, wood 0:02→1:28, saw 1:30→2:07, guard 1:32→2:47, forest 1:44→3:06, fisher 2:08→3:26, house2 4:20→5:45, house2 8:40→9:49, house2 13:00→14:01, look 15:00→15:50, wood 15:02→16:15, quarry 15:20→16:38.

Orders given: sendUnit 115, place 13, profession 2, march 2, release 2, priority 1, sendIn 1. None refused.

People changing jobs: new carrier 80, carrier -> worker 8, carrier -> geologist 1, carrier -> explorer 1.

People's orders (816 in all, 805 done): explorer explore 115, worker rest forest 106, worker gather forest 105, worker rest quarry 48, worker rest wood 48, worker gather quarry 46, worker gather wood 46, carrier haul log wood -> saw 30, worker rest saw 27, worker toCraft saw 26, worker craft saw 26, carrier haul stone quarry -> house2 18, carrier haul plank saw -> house2 11, soldier march 10. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 8 field soldiers, 1 posts, carriers 45 (45 idle), coal/iron 0/0, sites 0, tips none.
- 20:00 Adaptive plan: 8 field soldiers, 1 posts, carriers 76 (76 idle), coal/iron 0/0, sites 0, tips ore/timing.
- ×3 30:00–50:00 Adaptive plan: 8 field soldiers, 1 posts, carriers 76 (76 idle), coal/iron 0/0, sites 0, tips land/ore/stall/timing.


Script: 1800 turns, 4.7 ms average, worst 14 ms, 0 over 0.3 s, 0 errors. Orders refused: none.
