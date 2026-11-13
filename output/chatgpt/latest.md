# Tournament: chatgpt

Game version 206. Written for: chatgpt 206.

- chatgpt: hearthlands-ai-challenge, commit a096797

Maps 20261030, 777, 4242, 31, each twice (sides swapped), up to 60 game minutes (1x). 60 s.

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


Script: 1800 turns, 1.6 ms average, worst 22 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 31: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 17/2/1644/15/45 | 31/6/2852/10/50 |
| 30 | 21/3/1661/17/63 | 68/12/6045/29/101 |
| 45 | 22/4/2307/26/54 | 79/19/10831/60/90 |
| 60 | 23/5/2964/33/47 | 85/24/15553/75/95 |
| first | 5 7 9 12 57 - | 11 12 13 17 20 32 |

Soldiers every 5 min: 10 10 15 16 16 17 20 23 26 27 31 33 (original game NPC: 10 10 10 14 20 29 49 55 60 64 69 75).

First army orders (game min:sec): 2:20 sendIn 1 soldiers -> building 101; 10:18 armyTarget sword=5; 10:18 armyTarget spear=3; 10:18 armyReserve; 14:18 armyTarget sword=6; 14:18 armyTarget bow=3; 15:00 march 5 soldiers -> 234,128; 15:18 armyTarget sword=7; 15:18 armyTarget spear=4; 18:00 march 5 soldiers -> 214,146; 21:00 march 5 soldiers -> 214,146; 25:18 armyTarget sword=9.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 15 min, 11–54: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 5 min, 11–15: stall: weaponsmith: waiting for coal 84% of the last 5 minutes.
- 33 min, 11–60: stall: smelter: waiting for coal 91% of the last 5 minutes.
- 35 min, 11–60: stall: coal mine: deposit worn out 91% of the last 5 minutes.
- 15 min, 16–53: stall: barracks: waiting for weapons from the weaponsmith 92% of the last 5 minutes.
- 28 min, 21–60: stall: weaponsmith: waiting for iron 90% of the last 5 minutes.
- 34 min, 24–58: stall: forest: no free ground to plant in range inside your border 82% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 11 | 13 | 13 | 10 | 0 | 0 | 0 | 0 | 0 | 6 | 14 | 6 | 0 | 0 | 0 | 0 | 0 | 28 | 31 | 1644 | 3190 |
| 30 | 23 | 8 | 15 | 15 | 0 | 0 | 0 | 0 | 0 | 12 | 14 | 6 | 0 | 0 | 0 | 0 | 0 | 42 | 58 | 1661 | 3193 |
| 45 | 24 | 8 | 16 | 15 | 0 | 0 | 0 | 0 | 0 | 11 | 14 | 6 | 0 | 0 | 0 | 0 | 0 | 34 | 60 | 2307 | 4380 |
| 60 | 24 | 8 | 16 | 12 | 0 | 0 | 0 | 0 | 0 | 12 | 13 | 6 | 0 | 0 | 1 | 0 | 0 | 24 | 57 | 2964 | 5129 |

At the end: buildings (built+sites) guard 4, house2 2, quarry 2, wood 2, house 2, hq 1, saw 1, forest 1, fisher 1, coalmine 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, tower 1.
People: carrier 29, soldier 24, worker 12, digger 2, builder 2, geologist 1, explorer 1; beds 60. Soldiers: sword 11, bow 7, spear 6.

Goods produced in the game: fish 289, coal 76, log 75, stone 75, plank 55, ironore 48, iron 35, sword 14, spear 6, bow 4, saw 1, rod 1, hammer 1, axe 1, pick 1.
Goods consumed in the game: fish 283, stone 77, plank 71, coal 64, log 55, ironore 35, iron 29, sword 13, spear 6, pick 5, bow 4, hammer 3, axe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (104 building-min): Idle 100%
- quarry (102 building-min): Stone pile full, waiting for carriers 81%, Cutting stone 13%, Bringing stone to the pile 6%, Worker picking up a pickaxe 0%, Working 0%
- wood (103 building-min): Log pile full, waiting for carriers 80%, Felling a tree 15%, Bringing a log to the pile 5%, Worker picking up an axe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 82%, Sawing planks 12%, Waiting for logs 2%, Stacking outside 2%, Fetching from the pile 0%
- guard (151 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 68%, Planting a sapling 31%, Worker picking up a shovel 0%, Working 0%
- fisher (57 building-min): Fishing 36%, Bringing a fish to the pile 30%, Fish pile full, waiting for carriers 29%, No fish in range inside your border 4%, Worker picking up a fishing rod 0%
- coalmine (56 building-min): Deposit worn out: finding little coal 85%, Deposit thinning: mining coal 4%, Bringing coal out 4%, Mining coal 3%, Came back empty-handed 2%
- ironmine (56 building-min): Iron ore pile full, waiting for carriers 68%, Deposit worn out: finding little iron ore 11%, Deposit thinning: mining iron ore 11%, Mining iron ore 7%, Bringing iron ore out 2%
- smelter (55 building-min): Waiting for coal 88%, Smelting iron 8%, Stacking outside 2%, Output pile full, waiting for carriers 1%, Worker picking up a hammer 0%
- house (105 building-min): Idle 100%
- smith (53 building-min): All tool targets met 98%, Waiting for coal 1%, Stacking outside 0%, Worker picking up a hammer 0%, Forging saw 0%
- weaponsmith (51 building-min): Waiting for iron 78%, Waiting for coal 10%, Forging sword 3%, All weapon targets met 3%, Forging spear 2%
- barracks (49 building-min): Waiting for weapons from the weaponsmith 84%, Weapons on the way 12%, Soldier targets met 4%, Training soldiers 0%
- tower (4 building-min): Idle 99%, Soldiers on the way 1%

Building sites, time per state (site-min): Leveling the ground 7, Builders at work 6, Waiting for a digger 5, Waiting for a builder 3.

Build order (placed at min:sec, finished at): house2 0:00→0:55, quarry 0:00→1:26, wood 0:02→1:09, saw 1:10→1:49, guard 1:20→2:19, forest 1:46→2:35, fisher 2:12→3:01, coalmine 2:26→3:34, ironmine 2:40→3:49, smelter 4:02→4:46, house 4:50→5:22, smith 6:12→6:58, weaponsmith 8:02→8:58, house 9:10→9:50, barracks 10:16→11:11, guard 11:00→11:47, house2 13:30→15:12, wood 15:00→15:55, quarry 15:02→16:27, guard 29:16→29:55, guard 44:02→44:44, tower 54:52→56:16.

Orders given: sendUnit 116, release 26, armyTarget 23, place 22, march 14, priority 5, sendIn 3, weaponKeep 3, profession 2, armyReserve 1. None refused.

People changing jobs: new carrier 60, carrier -> soldier 23, carrier -> worker 12, carrier -> geologist 1, carrier -> explorer 1.

People's orders (3304 in all, 3276 done): worker rest fisher 290, worker gather fisher 289, worker mine coalmine 273, worker eat coalmine 216, carrier haul fish fisher -> coalmine 216, worker rest forest 135, worker gather forest 134, explorer explore 114, worker mine ironmine 100, worker rest wood 77, worker rest quarry 77, worker rest coalmine 77, worker gather wood 75, worker gather quarry 75. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 8 field soldiers, 1 posts, carriers 29 (26 idle), coal/iron 1/1, sites 0, tips none.
- ×3 20:00–50:00 Adaptive plan: 21 field soldiers, 4 posts, carriers 35 (33 idle), coal/iron 1/1, sites 0, tips stall.
- 40:00 Adaptive plan: 19 field soldiers, 3 posts, carriers 39 (37 idle), coal/iron 1/1, sites 0, tips land/stall.


Script: 1800 turns, 1.5 ms average, worst 26 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 13/2/1686/10/89 | 30/6/2479/10/40 |
| 30 | 16/2/1687/10/150 | 56/10/4704/18/82 |
| 45 | 17/2/1688/10/170 | 74/18/10294/48/92 |
| 60 | 17/2/1688/10/170 | 83/26/14823/77/83 |
| first | - - - - - - | 10 11 14 14 29 32 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 12 13 18 26 35 48 64 73 77).

First army orders (game min:sec): 2:22 sendIn 1 soldiers -> building 99.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 10 min, 5–14: stall: fisher: no fish in range inside your border 53% of the last 5 minutes.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 32 min, 13–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 35 min, 26–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 77 | 40 | 1686 | 3351 |
| 30 | 16 | 8 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 138 | 40 | 1687 | 3351 |
| 45 | 16 | 8 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 158 | 40 | 1688 | 3351 |
| 60 | 16 | 8 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 158 | 40 | 1688 | 3351 |

At the end: buildings (built+sites) house2 8, guard 2, hq 1, quarry 1, wood 1, saw 1, forest 1, fisher 1, coalmine 1.
People: carrier 158, soldier 7, worker 6, digger 2, builder 2, geologist 1, explorer 1; beds 160. Soldiers: sword 4, bow 3.

Goods produced in the game: log 58, stone 57, plank 46, fish 10, coal 8.
Goods consumed in the game: stone 67, plank 62, log 46, fish 4, pick 3, axe 1, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (347 building-min): Idle 100%
- quarry (58 building-min): Stone pile full, waiting for carriers 78%, Cutting stone 15%, Bringing stone to the pile 6%, Worker picking up a pickaxe 0%, Idle 0%
- wood (59 building-min): Log pile full, waiting for carriers 77%, Felling a tree 18%, Bringing a log to the pile 4%, Worker picking up an axe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 87%, Sawing planks 10%, Stacking outside 2%, Worker picking up a saw 0%, Fetching from the pile 0%
- guard (114 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 60%, Planting a sapling 40%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 83%, No fish in range inside your border 14%, Bringing a fish to the pile 2%, Fishing 1%, Worker picking up a fishing rod 0%
- coalmine (56 building-min): Coal pile full, waiting for carriers 97%, Mining coal 2%, Worker picking up a pickaxe 1%, Bringing coal out 0%, Working 0%

Building sites, time per state (site-min): Leveling the ground 8, Builders at work 5, Waiting for a digger 4, Waiting for a builder 3.

Build order (placed at min:sec, finished at): house2 0:00→1:08, quarry 0:00→1:40, wood 0:02→1:23, saw 1:24→2:00, guard 1:34→2:21, forest 1:58→2:37, fisher 2:20→2:52, guard 2:54→3:56, coalmine 3:10→4:15, house2 4:20→5:47, house2 8:40→10:13, house2 13:00→14:25, house2 17:20→19:06, house2 21:40→22:46, house2 26:00→27:19, house2 30:20→32:30.

Orders given: sendUnit 116, place 16, profession 2, priority 1, sendIn 1. None refused.

People changing jobs: new carrier 160, carrier -> worker 6, carrier -> geologist 1, carrier -> explorer 1.

People's orders (1064 in all, 1054 done): worker rest forest 131, worker gather forest 130, explorer explore 115, worker rest wood 59, worker gather wood 58, worker rest quarry 58, worker gather quarry 57, carrier haul log wood -> saw 50, worker rest saw 47, worker toCraft saw 46, worker craft saw 46, carrier haul stone quarry -> house2 42, carrier haul plank saw -> house2 35, digger dig house2 16. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Adaptive plan: 10 field soldiers, 0 posts, carriers 6 (6 idle), coal/iron 0/0, sites 0, tips none.
- 10:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 38 (38 idle), coal/iron 1/1, sites 1, tips stall.
- 20:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 98 (98 idle), coal/iron 1/1, sites 0, tips timing.
- ×3 30:00–50:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 158 (158 idle), coal/iron 1/1, sites 0, tips land/stall/timing.


Script: 1800 turns, 2.4 ms average, worst 26 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 13/2/1638/10/90 | 33/6/2656/10/50 |
| 30 | 19/2/1688/10/150 | 65/11/5057/25/85 |
| 45 | 20/2/1707/10/170 | 76/20/11138/41/89 |
| 60 | 20/2/1707/10/170 | 81/26/16119/71/79 |
| first | - - - - - - | 10 11 19 21 31 35 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 13 25 34 34 41 52 60 71).

First army orders (game min:sec): 2:42 sendIn 1 soldiers -> building 103.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 27 min, 12–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 38 min, 23–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 78 | 40 | 1638 | 3419 |
| 30 | 24 | 8 | 16 | 12 | 0 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 135 | 56 | 1688 | 5029 |
| 45 | 24 | 8 | 16 | 12 | 0 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 155 | 56 | 1707 | 5029 |
| 60 | 24 | 8 | 16 | 12 | 0 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 155 | 56 | 1707 | 5029 |

At the end: buildings (built+sites) house2 8, quarry 2, wood 2, guard 2, hq 1, saw 1, forest 1, fisher 1, ironmine 1, look 1.
People: carrier 155, worker 9, soldier 7, digger 2, builder 2, geologist 1, explorer 1; beds 160. Soldiers: sword 4, bow 3.

Goods produced in the game: stone 74, log 72, plank 52, fish 10, ironore 8.
Goods consumed in the game: stone 76, plank 68, log 52, pick 4, fish 4, axe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (347 building-min): Idle 100%
- quarry (103 building-min): Stone pile full, waiting for carriers 84%, Cutting stone 11%, Bringing stone to the pile 5%, Worker picking up a pickaxe 0%, Working 0%
- wood (103 building-min): Log pile full, waiting for carriers 79%, Felling a tree 15%, Bringing a log to the pile 5%, Worker picking up an axe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 84%, Sawing planks 11%, Stacking outside 2%, Waiting for logs 1%, Worker picking up a saw 0%
- guard (114 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 67%, Planting a sapling 33%, Worker picking up a shovel 0%, Idle 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 97%, Bringing a fish to the pile 1%, Fishing 1%, Worker picking up a fishing rod 0%, Working 0%
- ironmine (55 building-min): Iron ore pile full, waiting for carriers 98%, Mining iron ore 2%, Worker picking up a pickaxe 0%, Bringing iron ore out 0%, Working 0%
- look (44 building-min): Scout on watch 100%, Idle 0%, Working 0%

Building sites, time per state (site-min): Leveling the ground 8, Builders at work 6, Waiting for a digger 5, Waiting for a builder 3.

Build order (placed at min:sec, finished at): house2 0:00→0:51, quarry 0:00→1:06, wood 0:02→1:20, saw 1:22→2:04, guard 1:24→2:42, forest 1:26→3:01, fisher 2:06→3:20, guard 2:42→3:40, ironmine 4:02→4:34, house2 4:20→5:29, house2 8:40→9:56, house2 13:00→14:03, look 15:00→15:39, wood 15:02→15:51, quarry 15:18→16:17, house2 17:20→19:09, house2 21:40→23:41, house2 26:00→27:30, house2 30:20→32:16.

Orders given: sendUnit 116, place 19, profession 2, priority 1, sendIn 1. None refused.

People changing jobs: new carrier 160, carrier -> worker 9, carrier -> geologist 1, carrier -> explorer 1.

People's orders (1173 in all, 1131 done): worker rest forest 140, worker gather forest 139, explorer explore 86, worker rest quarry 76, worker gather quarry 74, worker rest wood 74, worker gather wood 72, carrier haul log wood -> saw 56, worker rest saw 53, worker toCraft saw 52, worker craft saw 52, carrier haul stone quarry -> house2 42, carrier haul plank saw -> house2 32, digger dig house2 16. Not done (outcome: times): failed: can't reach that spot ×29.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 29.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 40 (40 idle), coal/iron 0/1, sites 0, tips none.
- 20:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 95 (95 idle), coal/iron 0/1, sites 0, tips timing.
- 30:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 135 (135 idle), coal/iron 0/1, sites 0, tips stall/timing.
- ×2 40:00–50:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 155 (155 idle), coal/iron 0/1, sites 0, tips land/stall/timing.


Script: 1800 turns, 2.4 ms average, worst 26 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 13/2/1677/10/76 | 32/6/2818/10/50 |
| 30 | 19/2/1716/10/150 | 58/10/5116/15/85 |
| 45 | 19/2/1716/10/150 | 68/13/8511/52/88 |
| 60 | 19/2/1716/10/150 | 75/19/12890/65/95 |
| first | - - - - - - | 9 10 18 19 27 40 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 15 15 25 42 52 58 62 65).

First army orders (game min:sec): 2:28 sendIn 1 soldiers -> building 89.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 9–10: stall: iron mine: deposit worn out 54% of the last 5 minutes.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 38 min, 23–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 26 min, 35–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 18 | 0 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 64 | 40 | 1677 | 2968 |
| 30 | 24 | 8 | 16 | 18 | 0 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 135 | 56 | 1716 | 4110 |
| 45 | 24 | 8 | 16 | 18 | 0 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 135 | 56 | 1716 | 4110 |
| 60 | 24 | 8 | 16 | 18 | 0 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 135 | 56 | 1716 | 4110 |

At the end: buildings (built+sites) house2 7, quarry 2, wood 2, guard 2, hq 1, saw 1, forest 1, fisher 1, ironmine 1, look 1.
People: carrier 135, worker 9, soldier 7, digger 2, builder 2, geologist 1, explorer 1; beds 140. Soldiers: sword 4, bow 3.

Goods produced in the game: stone 68, log 67, plank 47, fish 21, ironore 8.
Goods consumed in the game: stone 70, plank 63, log 47, fish 9, pick 4, axe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (318 building-min): Idle 100%
- quarry (101 building-min): Stone pile full, waiting for carriers 87%, Cutting stone 9%, Bringing stone to the pile 3%, Worker picking up a pickaxe 0%, Working 0%
- wood (102 building-min): Log pile full, waiting for carriers 83%, Felling a tree 13%, Bringing a log to the pile 4%, Worker picking up an axe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 87%, Sawing planks 10%, Stacking outside 2%, Fetching from the pile 0%, Worker picking up a saw 0%
- guard (114 building-min): Idle 100%, Soldiers on the way 0%
- forest (57 building-min): No free ground to plant in range inside your border 67%, Planting a sapling 32%, Worker picking up a shovel 0%, Working 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 96%, Fishing 2%, Bringing a fish to the pile 2%, Worker picking up a fishing rod 0%
- ironmine (54 building-min): Iron ore pile full, waiting for carriers 94%, Deposit worn out: finding little iron ore 4%, Worker picking up a pickaxe 1%, Bringing iron ore out 0%, Mining iron ore 0%
- look (44 building-min): Scout on watch 100%, Working 0%

Building sites, time per state (site-min): Leveling the ground 8, Builders at work 5, Waiting for a digger 5, Waiting for a builder 4.

Build order (placed at min:sec, finished at): house2 0:00→1:21, quarry 0:00→1:51, wood 0:02→1:33, saw 1:34→2:11, guard 1:36→2:27, forest 2:06→2:50, fisher 2:24→3:09, guard 2:52→4:02, house2 4:20→5:45, ironmine 5:36→6:24, house2 8:40→9:48, house2 13:00→14:48, look 15:00→16:01, wood 15:02→16:25, quarry 15:28→16:41, house2 17:20→18:41, house2 21:40→23:22, house2 26:00→28:11.

Orders given: sendUnit 116, place 18, profession 2, priority 1, sendIn 1. None refused.

People changing jobs: new carrier 140, carrier -> worker 9, carrier -> geologist 1, carrier -> explorer 1.

People's orders (1150 in all, 1136 done): worker rest forest 125, worker gather forest 124, explorer explore 112, worker rest quarry 70, worker rest wood 69, worker gather quarry 68, worker gather wood 67, carrier haul log wood -> saw 51, worker rest saw 48, worker toCraft saw 47, worker craft saw 47, carrier haul stone quarry -> house2 36, carrier haul plank saw -> house2 27, worker rest fisher 22. Not done (outcome: times): failed: can't reach that spot ×1.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 3.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Adaptive plan: 10 field soldiers, 0 posts, carriers 6 (6 idle), coal/iron 0/0, sites 0, tips none.
- 10:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 44 (44 idle), coal/iron 0/1, sites 0, tips stall.
- 20:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 95 (95 idle), coal/iron 0/1, sites 0, tips timing.
- 30:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 135 (135 idle), coal/iron 0/1, sites 0, tips stall/timing.
- ×2 40:00–50:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 135 (135 idle), coal/iron 0/1, sites 0, tips land/stall/timing.


Script: 1800 turns, 3.3 ms average, worst 23 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 12/2/1643/10/70 | 28/6/2747/10/40 |
| 30 | 15/2/1648/10/80 | 59/13/6234/39/71 |
| 45 | 15/2/1648/10/80 | 73/17/10020/55/85 |
| 60 | 15/2/1648/10/80 | 82/25/15860/75/85 |
| first | - - - - - - | 7 8 9 10 41 40 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 18 26 39 45 45 55 66 70 75).

First army orders (game min:sec): 2:46 sendIn 1 soldiers -> building 103.

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
| 15 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 59 | 32 | 1643 | 3084 |
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
- quarry (102 building-min): Stone pile full, waiting for carriers 89%, Cutting stone 7%, Bringing stone to the pile 4%, Worker picking up a pickaxe 0%, Working 0%
- wood (102 building-min): Log pile full, waiting for carriers 86%, Felling a tree 10%, Bringing a log to the pile 4%, Worker picking up an axe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 93%, Sawing planks 6%, Stacking outside 1%, Worker picking up a saw 0%, Fetching from the pile 0%
- guard (113 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 77%, Planting a sapling 23%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- fisher (56 building-min): Fish pile full, waiting for carriers 99%, Fishing 0%, Worker picking up a fishing rod 0%, Bringing a fish to the pile 0%, Idle 0%
- house (55 building-min): Idle 100%
- look (44 building-min): Scout on watch 100%, Working 0%

Building sites, time per state (site-min): Waiting for a digger 6, Leveling the ground 5, Builders at work 4, Waiting for a builder 2.

Build order (placed at min:sec, finished at): house2 0:00→1:06, quarry 0:00→1:22, wood 0:02→1:35, saw 1:36→2:09, guard 1:38→2:45, forest 1:52→3:02, fisher 2:16→3:35, guard 3:02→3:58, house 4:20→4:57, house2 8:40→9:47, house2 13:00→14:41, look 15:00→15:54, wood 15:02→16:27, quarry 15:18→16:48.

Orders given: sendUnit 115, place 14, profession 2, priority 1, sendIn 1. None refused.

People changing jobs: new carrier 70, carrier -> worker 8, carrier -> geologist 1, carrier -> explorer 1.

People's orders (701 in all, 660 done): worker rest forest 94, worker gather forest 93, worker rest quarry 48, worker rest wood 48, worker gather quarry 46, worker gather wood 46, carrier haul log wood -> saw 30, explorer explore 29, worker rest saw 27, worker toCraft saw 26, worker craft saw 26, carrier haul stone quarry -> house2 12, carrier haul plank pile -> house2 9, worker rest fisher 9. Not done (outcome: times): failed: can't reach that spot ×29.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 86.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 36 (36 idle), coal/iron 0/0, sites 0, tips none.
- 20:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 66 (66 idle), coal/iron 0/0, sites 0, tips ore/stall/timing.
- ×3 30:00–50:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 66 (66 idle), coal/iron 0/0, sites 0, tips land/ore/stall/timing.


Script: 1800 turns, 4.4 ms average, worst 25 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 17/2/1660/18/42 | 24/6/2758/10/40 |
| 30 | 23/2/1682/34/26 | 34/6/3268/10/60 |
| 45 | 23/2/1682/36/24 | 64/12/6206/32/98 |
| 60 | 23/2/1682/36/24 | 73/17/10918/53/97 |
| first | 7 8 12 13 - - | 8 9 31 32 53 51 |

Soldiers every 5 min: 10 10 18 21 30 34 35 35 36 36 36 36 (original game NPC: 10 10 10 10 10 10 22 28 32 40 48 53).

First army orders (game min:sec): 2:40 sendIn 1 soldiers -> building 100; 11:42 armyTarget sword=5; 11:42 armyTarget spear=3; 11:42 armyReserve; 13:02 armyTarget sword=6; 13:02 armyTarget bow=3; 13:22 armyTarget spear=4; 13:40 sendIn 1 soldiers -> building 182; 14:22 armyTarget sword=7; 15:00 march 5 soldiers -> 70,128; 15:02 armyTarget bow=4; 15:42 armyTarget sword=8.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 33 min, 12–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 7 min, 18–53: stall: barracks: waiting for weapons from the weaponsmith 100% of the last 5 minutes.
- 3 min, 19–21: stall: weaponsmith: waiting for coal 64% of the last 5 minutes.
- 4 min, 24–27: stall: smelter: waiting for iron ore 97% of the last 5 minutes.
- 5 min, 24–53: stall: butcher: waiting for pigs 100% of the last 5 minutes.
- 30 min, 25–60: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 32 min, 25–60: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 32 min, 25–60: settlers: No free settlers and every bed taken: build houses.
- 31 min, 26–60: stall: quarry: stone pile full, waiting for carriers 100% of the last 5 minutes.
- 1 min, 33: stall: iron mine: deposit worn out 93% of the last 5 minutes.
- 4 min, 33–53: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 1 min, 45: stall: coal mine: deposit worn out 91% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 12 | 10 | 7 | 5 | 0 | 0 | 0 | 0 | 0 | 9 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 20 | 20 | 1660 | 3349 |
| 30 | 24 | 8 | 16 | 15 | 0 | 5 | 14 | 14 | 0 | 11 | 5 | 11 | 0 | 0 | 0 | 0 | 1 | 0 | 83 | 1682 | 3357 |
| 45 | 24 | 8 | 16 | 13 | 0 | 1 | 14 | 14 | 0 | 14 | 10 | 19 | 0 | 0 | 0 | 1 | 0 | 1 | 95 | 1682 | 3357 |
| 60 | 24 | 8 | 16 | 16 | 0 | 5 | 13 | 13 | 0 | 26 | 14 | 20 | 0 | 0 | 0 | 1 | 0 | 0 | 101 | 1682 | 3357 |

At the end: buildings (built+sites) quarry 2, wood 2, guard 2, house 2, hq 1, house2 1, saw 1, forest 1, fisher 1, coalmine 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, pigfarm 1, butcher 1.
People: soldier 33, worker 16, digger 2, builder 2, carrier 2, geologist 1, explorer 1; beds 40. Soldiers: sword 16, bow 9, spear 8.

Goods produced in the game: fish 279, coal 112, log 80, stone 78, ironore 67, plank 60, iron 53, grain 53, water 53, pig 39, meat 31, sword 12, spear 9, bow 6, axe 2, saw 1, rod 1, hammer 1, pick 1.
Goods consumed in the game: fish 269, coal 86, stone 80, plank 76, log 60, ironore 53, water 40, grain 40, iron 33, pig 31, meat 26, sword 12, spear 8, bow 6, pick 5, axe 3, hammer 3, saw 1, shovel 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (59 building-min): Idle 100%
- quarry (102 building-min): Stone pile full, waiting for carriers 77%, Cutting stone 14%, Bringing stone to the pile 9%, Worker picking up a pickaxe 1%, Working 0%
- wood (102 building-min): Log pile full, waiting for carriers 79%, Felling a tree 16%, Bringing a log to the pile 5%, Worker picking up an axe 1%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 83%, Sawing planks 13%, Stacking outside 3%, Fetching from the pile 0%, Waiting for logs 0%
- guard (104 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 66%, Planting a sapling 34%, Worker picking up a shovel 0%, Idle 0%
- fisher (57 building-min): Fishing 43%, Bringing a fish to the pile 42%, Fish pile full, waiting for carriers 15%, Worker picking up a fishing rod 0%
- coalmine (56 building-min): Deposit worn out: finding little coal 40%, Deposit thinning: mining coal 30%, Mining coal 12%, Coal pile full, waiting for carriers 9%, Bringing coal out 5%
- ironmine (56 building-min): Deposit worn out: finding little iron ore 37%, Iron ore pile full, waiting for carriers 22%, Deposit thinning: mining iron ore 17%, Needs meat or fish: mining stopped 10%, Mining iron ore 7%
- house (105 building-min): Idle 100%
- smelter (54 building-min): Output pile full, waiting for carriers 53%, Waiting for iron ore 28%, Smelting iron 13%, Waiting for coal 3%, Stacking outside 3%
- smith (52 building-min): All tool targets met 98%, Forging axe 0%, Waiting for coal 0%, Stacking outside 0%, Forging fishing rod 0%
- weaponsmith (49 building-min): All weapon targets met 49%, Waiting for coal 42%, Forging sword 3%, Forging spear 2%, Forging bow 2%
- barracks (47 building-min): Waiting for weapons from the weaponsmith 70%, Waiting for a free settler to train 11%, Weapons on the way 10%, Soldier targets met 9%, Training soldiers 2%
- farm (44 building-min): Grain pile full, waiting for carriers 81%, Sowing a field 8%, Harvesting grain 6%, Bringing grain to the pile 3%, Worker picking up a scythe 1%
- waterhut (41 building-min): Water pile full, waiting for carriers 84%, Bringing water to the pile 9%, Fetching water 7%, Idle 0%, Working 0%
- pigfarm (39 building-min): Output pile full, waiting for carriers 73%, Raising a pig 23%, Stacking outside 2%, Waiting for water 1%, Fetching from the pile 0%
- butcher (38 building-min): Waiting for pigs 91%, Butchering 6%, Stacking outside 2%, Worker picking up an axe 1%, Fetching from the pile 0%

Building sites, time per state (site-min): Builders at work 6, Leveling the ground 6, Waiting for a digger 6, Waiting for a builder 4.

Build order (placed at min:sec, finished at): house2 0:00→1:09, quarry 0:02→1:26, wood 0:04→1:39, saw 1:40→2:11, guard 1:42→2:39, forest 1:58→2:57, fisher 2:26→3:25, coalmine 3:08→3:50, ironmine 3:10→4:06, house 4:20→5:14, smelter 5:36→6:26, smith 7:06→7:56, house 8:40→9:29, weaponsmith 10:08→11:02, barracks 11:40→12:44, guard 12:36→13:40, farm 14:36→15:40, wood 15:12→15:56, quarry 16:12→16:59, waterhut 17:38→18:44, pigfarm 19:48→21:16, butcher 20:20→21:54.

Orders given: sendUnit 117, armyTarget 31, release 27, place 22, march 15, priority 5, weaponKeep 3, profession 2, sendIn 2, armyReserve 1. Refused (order: reason, times): place: Another building is in the way ×1.

People changing jobs: new carrier 40, carrier -> soldier 26, carrier -> worker 16, carrier -> geologist 1, carrier -> explorer 1, new soldier 1.

People's orders (4242 in all, 4219 done): worker rest fisher 280, worker gather fisher 279, worker mine coalmine 272, carrier haul fish fisher -> coalmine 192, worker eat coalmine 191, worker mine ironmine 157, explorer explore 115, worker rest coalmine 113, worker rest forest 111, worker gather forest 110, worker rest farm 110, worker gather farm 109, worker eat ironmine 104, worker rest ironmine 93. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 8 field soldiers, 1 posts, carriers 35 (30 idle), coal/iron 1/1, sites 0, tips none.
- 20:00 Adaptive plan: 18 field soldiers, 2 posts, carriers 19 (8 idle), coal/iron 1/1, sites 1, tips stall.
- ×3 30:00–50:00 Adaptive plan: 33 field soldiers, 2 posts, carriers 2 (0 idle), coal/iron 1/1, sites 0, tips land/stall/settlers.


Script: 1800 turns, 1.9 ms average, worst 24 ms, 0 over 0.3 s, 0 errors. Orders refused: place 1 of 23.

### Map 20261030: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 19/2/1638/10/69 | 25/6/3049/10/40 |
| 30 | 24/3/1902/19/81 | 63/10/5081/15/85 |
| 45 | 25/4/2234/30/70 | 71/14/8482/46/84 |
| 60 | 26/5/2872/36/64 | 78/21/14614/67/83 |
| first | 8 9 12 13 53 - | 14 15 16 24 42 39 |

Soldiers every 5 min: 10 10 10 10 12 19 23 26 30 31 33 36 (original game NPC: 10 10 10 10 15 15 15 33 46 52 59 67).

First army orders (game min:sec): 2:48 sendIn 1 soldiers -> building 100; 11:18 armyTarget sword=5; 11:18 armyTarget spear=3; 11:18 armyReserve; 15:18 armyTarget sword=7; 15:18 armyTarget spear=4; 15:18 armyTarget bow=3; 24:18 march 5 soldiers -> 226,130; 25:18 armyTarget sword=9; 25:18 armyTarget spear=5; 25:18 armyTarget bow=4; 27:18 march 5 soldiers -> 212,144.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 7 min, 11–17: stall: smith: waiting for coal 88% of the last 5 minutes.
- 12 min, 14–25: stall: weaponsmith: waiting for coal 94% of the last 5 minutes.
- 11 min, 15–38: stall: barracks: waiting for weapons from the weaponsmith 100% of the last 5 minutes.
- 42 min, 18–60: stall: goldsmelter: waiting for coal 100% of the last 5 minutes.
- 20 min, 25–58: stall: smelter: waiting for coal 97% of the last 5 minutes.
- 10 min, 26–43: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 21 min, 26–60: stall: coal mine: deposit worn out 92% of the last 5 minutes.
- 23 min, 27–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 7 min, 38–59: stall: weaponsmith: waiting for iron 94% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 1 | 7 | 7 | 19 | 0 | 0 | 0 | 0 | 0 | 5 | 13 | 20 | 8 | 0 | 0 | 0 | 0 | 37 | 36 | 1638 | 3507 |
| 30 | 24 | 8 | 16 | 20 | 0 | 0 | 0 | 0 | 0 | 6 | 14 | 10 | 14 | 0 | 0 | 0 | 0 | 60 | 69 | 1902 | 3810 |
| 45 | 24 | 8 | 16 | 18 | 0 | 0 | 0 | 0 | 0 | 8 | 13 | 6 | 14 | 0 | 0 | 0 | 0 | 47 | 66 | 2234 | 4267 |
| 60 | 24 | 8 | 16 | 19 | 0 | 0 | 0 | 0 | 0 | 12 | 14 | 6 | 14 | 0 | 0 | 0 | 0 | 42 | 69 | 2872 | 5073 |

At the end: buildings (built+sites) guard 4, house2 3, quarry 2, wood 2, house 2, hq 1, saw 1, forest 1, fisher 1, ironmine 1, coalmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, goldmine 1, goldsmelter 1, tower 1.
People: carrier 44, soldier 27, worker 14, digger 2, builder 2, geologist 1, explorer 1; beds 80. Soldiers: sword 13, bow 7, spear 7.

Goods produced in the game: fish 283, log 89, stone 88, coal 84, plank 69, ironore 53, iron 39, goldore 14, sword 14, spear 7, bow 5, pick 2, hammer 2, saw 1, axe 1, rod 1.
Goods consumed in the game: fish 270, stone 90, plank 85, coal 72, log 69, ironore 39, iron 33, sword 14, spear 7, pick 6, bow 5, hammer 4, axe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (159 building-min): Idle 100%
- quarry (102 building-min): Stone pile full, waiting for carriers 78%, Cutting stone 14%, Bringing stone to the pile 7%, Worker picking up a pickaxe 1%, Working 0%
- wood (102 building-min): Log pile full, waiting for carriers 76%, Felling a tree 18%, Bringing a log to the pile 5%, Worker picking up an axe 0%, Idle 0%
- saw (58 building-min): Output pile full, waiting for carriers 75%, Sawing planks 15%, Waiting for logs 6%, Stacking outside 3%, Fetching from the pile 1%
- guard (160 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 63%, Planting a sapling 36%, Worker picking up a shovel 0%, Idle 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 54%, Fishing 25%, Bringing a fish to the pile 21%, Worker picking up a fishing rod 0%, Idle 0%
- ironmine (55 building-min): Iron ore pile full, waiting for carriers 69%, Deposit worn out: finding little iron ore 11%, Deposit thinning: mining iron ore 10%, Mining iron ore 6%, Bringing iron ore out 3%
- coalmine (53 building-min): Deposit worn out: finding little coal 76%, Deposit thinning: mining coal 9%, Mining coal 6%, Bringing coal out 4%, Came back empty-handed 2%
- smelter (52 building-min): Waiting for coal 76%, Output pile full, waiting for carriers 12%, Smelting iron 10%, Stacking outside 2%, Worker picking up a hammer 0%
- smith (51 building-min): All tool targets met 78%, Waiting for coal 19%, Forging hammer 1%, Worker picking up a hammer 0%, Forging pickaxe 0%
- house (92 building-min): Idle 100%
- weaponsmith (49 building-min): Waiting for iron 48%, Waiting for coal 38%, Forging sword 4%, All weapon targets met 3%, Forging spear 2%
- barracks (48 building-min): Waiting for weapons from the weaponsmith 84%, Weapons on the way 12%, Soldier targets met 3%, Training soldiers 0%
- goldmine (47 building-min): Gold ore pile full, waiting for carriers 93%, Mining gold ore 3%, Deposit thinning: mining gold ore 1%, Worker picking up a pickaxe 1%, Bringing gold ore out 1%
- goldsmelter (44 building-min): Waiting for coal 99%, Waiting for coal and gold ore 0%, Worker picking up a hammer 0%, Working 0%, Idle 0%
- tower (7 building-min): Waiting for a swordsman: train one at the barracks 72%, Idle 28%, Waiting for a soldier 0%

Building sites, time per state (site-min): Builders at work 7, Leveling the ground 7, Waiting for a digger 6, Waiting for a builder 5.

Build order (placed at min:sec, finished at): house2 0:00→0:57, quarry 0:00→1:15, wood 0:02→1:28, saw 1:30→2:07, guard 1:32→2:47, forest 1:44→3:06, fisher 2:08→3:26, guard 2:48→3:49, ironmine 4:12→4:42, house2 4:26→5:47, coalmine 5:56→6:35, smelter 6:36→7:43, smith 8:06→8:42, house 8:46→9:34, weaponsmith 9:56→11:03, barracks 11:16→12:04, goldmine 12:04→12:54, house2 13:06→14:42, goldsmelter 14:56→15:55, wood 15:14→16:13, quarry 16:06→16:42, house 17:26→18:23, guard 29:00→29:42, guard 43:04→44:00, tower 51:36→52:53.

Orders given: sendUnit 117, place 25, armyTarget 25, release 15, march 10, priority 5, sendIn 3, weaponKeep 3, profession 2, armyReserve 1. None refused.

People changing jobs: new carrier 80, carrier -> soldier 26, carrier -> worker 14, carrier -> geologist 1, carrier -> explorer 1, new soldier 1.

People's orders (3525 in all, 3493 done): worker rest fisher 284, worker gather fisher 283, worker mine coalmine 263, carrier haul fish fisher -> coalmine 207, worker eat coalmine 203, worker rest forest 150, worker gather forest 149, explorer explore 115, worker mine ironmine 104, worker rest wood 91, worker rest quarry 90, worker gather wood 89, worker gather quarry 88, worker rest coalmine 85. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 45 (28 idle), coal/iron 1/1, sites 1, tips none.
- ×3 20:00–50:00 Adaptive plan: 24 field soldiers, 4 posts, carriers 49 (47 idle), coal/iron 1/1, sites 0, tips stall.
- 40:00 Adaptive plan: 21 field soldiers, 3 posts, carriers 54 (53 idle), coal/iron 1/1, sites 0, tips land/stall.


Script: 1800 turns, 1.2 ms average, worst 25 ms, 0 over 0.3 s, 0 errors. Orders refused: none.
