# Tournament: scheduled

Game version 214. Written for: scheduled 211.

- scheduled: hearthlands-ai-challenge, commit 1a73df0

Maps 20261030, 777, 4242, 31, each twice (sides swapped), up to 60 game minutes (1x). 39 s.

Each game ends with the script's own game log: what it may know (its own side, and what happened to it or what it saw). Times are game min:sec.

| Opponent | Won | Lost | Undecided |
|---|---|---|---|
| original game NPC | 0 | 0 | 8 |

## Games

Each row: buildings / military / land tiles / soldiers / people at the minute shown. First: game minute of the first smelter, smith, weaponsmith, barracks, tower, castle (- = never).

### Map 31: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 6/1/1318/10/30 | 21/6/2898/10/40 |
| 30 | 6/1/1318/10/30 | 28/6/3290/10/50 |
| 45 | 6/1/1318/10/30 | 55/9/5277/19/81 |
| 60 | 6/1/1318/10/30 | 77/19/10717/47/103 |
| first | - - - - - - | 9 9 35 36 52 52 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 10 10 10 19 23 39 47).

First army orders (game min:sec): 0:00 armyReserve.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (21 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 18 | 11 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 21 | 24 | 1318 | 9211 |
| 30 | 16 | 18 | 11 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 21 | 24 | 1318 | 9213 |
| 45 | 16 | 18 | 11 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 21 | 24 | 1318 | 9267 |
| 60 | 16 | 18 | 11 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 21 | 24 | 1318 | 9271 |

At the end: buildings (built+sites) hq 1, house2 1, wood 1, quarry 1, saw 1, guard 1.
People: carrier 21, soldier 9, worker 3, digger 2, builder 2, explorer 2; beds 20. Soldiers: sword 6, bow 3.

Goods produced in the game: log 22, stone 11, plank 10.
Goods consumed in the game: stone 18, plank 16, log 10, axe 1, saw 1, pick 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (59 building-min): Idle 100%
- wood (59 building-min): Log pile full, nothing needs it right now 91%, Felling a tree 7%, Bringing a log to the pile 2%, Worker picking up an axe 0%, Working 0%
- quarry (59 building-min): Stone pile full, nothing needs it right now 95%, Cutting stone 3%, Bringing stone to the pile 1%, Worker picking up a pickaxe 0%, Working 0%
- saw (58 building-min): Output pile full, nothing needs it right now 97%, Sawing planks 2%, Stacking outside 0%, Worker picking up a saw 0%, Idle 0%
- guard (54 building-min): Idle 100%, Soldiers on the way 0%

Building sites, time per state (site-min): Builders at work 1, Leveling the ground 1, Waiting for a digger 1, Waiting for a builder 1.

Build order (placed at min:sec, finished at): house2 0:02→0:48, wood 0:04→1:02, quarry 0:48→1:24, saw 1:04→1:44, guard 5:02→5:54.

Orders given: sendUnit 38, place 5, priority 5, profession 2, armyReserve 1. None refused.

People changing jobs: new carrier 20, carrier -> worker 3, carrier -> explorer 2.

People's orders (204 in all, 186 done): explorer explore 25, worker rest wood 23, worker gather wood 22, carrier haul log wood -> saw 14, worker rest quarry 12, worker gather quarry 11, worker rest saw 11, worker toCraft saw 10, worker craft saw 10, carrier haul stone pile -> house2 6, carrier haul plank pile -> house2 5, carrier haul stone pile -> saw 4, carrier haul log pile -> saw 4, carrier haul stone pile -> quarry 3. Not done (outcome: times): failed: can't reach that spot ×12.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 13.

Fights and contact: first saw player 2 at 11:00.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Rush: house2/wood/quarry; sites 0, carriers 6, idle 6, field 10, posts 0, fish 6.
- ×5 10:00–50:00 Rush: ; sites 0, carriers 21, idle 21, field 9, posts 1, fish 6.


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 31: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 7/1/1333/10/30 | 39/6/3055/10/70 |
| 30 | 7/1/1333/2/30 | 70/13/7075/48/92 |
| 45 | 7/1/1333/2/30 | 77/19/11480/64/96 |
| 60 | 7/1/1333/2/30 | 84/25/15691/76/104 |
| first | - - - - - - | 8 7 17 17 22 29 |

Soldiers every 5 min: 10 10 10 10 2 2 2 2 2 2 2 2 (original game NPC: 10 10 10 11 26 48 53 57 64 67 71 76).

First army orders (game min:sec): 0:00 armyReserve; 21:26 attack 8 soldiers -> building 243.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 53 min, 8–60: stall: woodcutter: no grown trees in range inside your border 100% of the last 5 minutes.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 47 min, 14–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (8 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 5 min, 23–27: army: Lost 8 soldiers in the last 5 minutes, and no barracks to train new ones.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 3 | 17 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 19 | 24 | 1333 | 7485 |
| 30 | 3 | 17 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 19 | 24 | 1333 | 10036 |
| 45 | 3 | 17 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 19 | 24 | 1333 | 10164 |
| 60 | 3 | 17 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 19 | 24 | 1333 | 10166 |

At the end: buildings (built+sites) hq 1, house2 1, wood 1, quarry 1, fisher 1, saw 1, guard 1.
People: carrier 19, worker 4, digger 2, builder 2, explorer 2, soldier 1, geologist 1; beds 20. Soldiers: sword 1.

Goods produced in the game: plank 12, log 11, stone 10, fish 8.
Goods consumed in the game: stone 20, plank 19, log 12, pick 2, axe 1, rod 1, saw 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (59 building-min): Idle 100%
- wood (59 building-min): No grown trees in range inside your border 94%, Felling a tree 4%, Bringing a log to the pile 2%, Worker picking up an axe 0%, Idle 0%
- quarry (58 building-min): Stone pile full, nothing needs it right now 97%, Cutting stone 2%, Bringing stone to the pile 1%, Worker picking up a pickaxe 0%, Working 0%
- fisher (58 building-min): Fish pile full, nothing needs it right now 98%, Bringing a fish to the pile 1%, Fishing 1%, Worker picking up a fishing rod 0%, Working 0%
- saw (58 building-min): Output pile full, nothing needs it right now 96%, Sawing planks 3%, Stacking outside 1%, Worker picking up a saw 0%, Fetching from the pile 0%
- guard (54 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%

Building sites, time per state (site-min): Builders at work 1, Leveling the ground 1, Waiting for a digger 1, Waiting for a builder 1.

Build order (placed at min:sec, finished at): house2 0:02→1:05, wood 0:04→1:17, quarry 1:06→1:35, fisher 1:18→1:52, saw 1:36→2:11, guard 5:02→5:32.

Orders given: sendUnit 39, place 6, priority 6, profession 3, armyReserve 1, attack 1. None refused.

People changing jobs: new carrier 20, carrier -> worker 4, carrier -> explorer 2, carrier -> geologist 1.

People's orders (221 in all, 203 done): explorer explore 25, worker rest saw 13, worker rest wood 12, worker toCraft saw 12, worker craft saw 12, worker gather wood 11, worker rest quarry 11, carrier haul log wood -> saw 11, worker gather quarry 10, worker rest fisher 9, worker gather fisher 8, soldier attack tower 8, carrier haul stone pile -> house2 6, carrier haul plank pile -> house2 5. Not done (outcome: times): failed: can't reach that spot ×12.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 13.

Fights and contact: attacked enemy buildings 1 times (first 21:26); lost people sword 5, bow 3; first saw player 1 at 8:00.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Rush: house2/wood/quarry; sites 0, carriers 6, idle 6, field 10, posts 0, fish 6.
- ×5 10:00–50:00 Rush: ironmine; sites 0, carriers 19, idle 19, field 1, posts 1, fish 14.


Script: 1808 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 8/1/1361/10/30 | 32/6/2810/10/50 |
| 30 | 8/1/1361/2/30 | 57/10/4549/17/71 |
| 45 | 8/1/1361/2/30 | 74/19/10406/53/95 |
| 60 | 8/1/1361/2/30 | 84/28/16158/82/86 |
| first | - - - - - - | 7 8 16 16 34 39 |

Soldiers every 5 min: 10 10 10 10 10 2 2 2 2 2 2 2 (original game NPC: 10 10 10 10 12 17 29 47 53 60 69 82).

First army orders (game min:sec): 0:00 armyReserve; 26:54 attack 8 soldiers -> building 226.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 49 min, 12–60: stall: woodcutter: no grown trees in range inside your border 100% of the last 5 minutes.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 5 min, 29–33: army: Lost 7 soldiers in the last 5 minutes, and no barracks to train new ones.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 12 | 16 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 18 | 36 | 1361 | 13359 |
| 30 | 12 | 16 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 18 | 36 | 1361 | 15168 |
| 45 | 12 | 16 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 18 | 36 | 1361 | 15224 |
| 60 | 12 | 16 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 18 | 36 | 1361 | 15317 |

At the end: buildings (built+sites) hq 1, house2 1, wood 1, quarry 1, fisher 1, saw 1, guard 1, coalmine 1.
People: carrier 18, worker 5, digger 2, builder 2, explorer 2, soldier 1, geologist 1; beds 20. Soldiers: sword 1.

Goods produced in the game: log 23, plank 15, fish 13, stone 11, coal 8.
Goods consumed in the game: plank 23, stone 21, log 15, fish 7, pick 3, axe 1, saw 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (59 building-min): Idle 100%
- wood (59 building-min): No grown trees in range inside your border 88%, Felling a tree 9%, Bringing a log to the pile 4%, Worker picking up an axe 0%, Working 0%
- quarry (58 building-min): Stone pile full, nothing needs it right now 96%, Cutting stone 3%, Bringing stone to the pile 1%, Worker picking up a pickaxe 0%, Working 0%
- fisher (58 building-min): Fish pile full, nothing needs it right now 98%, Fishing 1%, Bringing a fish to the pile 1%, Worker picking up a fishing rod 0%, Working 0%
- saw (58 building-min): Output pile full, nothing needs it right now 96%, Sawing planks 3%, Stacking outside 1%, Worker picking up a saw 0%, Fetching from the pile 0%
- guard (54 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- coalmine (53 building-min): Coal pile full, nothing needs it right now 96%, Mining coal 3%, Worker picking up a pickaxe 1%, Bringing coal out 0%, Working 0%

Building sites, time per state (site-min): Builders at work 2, Leveling the ground 2, Waiting for a digger 1, Waiting for a builder 1.

Build order (placed at min:sec, finished at): house2 0:02→1:03, wood 0:04→1:17, quarry 1:04→1:35, fisher 1:18→2:02, saw 1:36→2:27, guard 5:02→5:40, coalmine 6:10→6:44.

Orders given: sendUnit 39, place 7, priority 7, profession 3, armyReserve 1, attack 1. None refused.

People changing jobs: new carrier 20, carrier -> worker 5, carrier -> explorer 2, carrier -> geologist 1.

People's orders (350 in all, 341 done): explorer explore 38, worker rest wood 24, worker gather wood 23, soldier attack guard 21, carrier haul log wood -> saw 19, worker rest saw 16, worker toCraft saw 15, worker craft saw 15, worker rest fisher 14, worker gather fisher 13, worker rest quarry 12, worker mine coalmine 12, worker gather quarry 11, worker rest coalmine 9. None failed.

Fights and contact: attacked enemy buildings 1 times (first 26:54); killed bow 2; lost people bow 3, sword 5; first saw player 2 at 7:00.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Rush: house2/wood/quarry; sites 0, carriers 6, idle 6, field 10, posts 0, fish 6.
- ×5 10:00–50:00 Rush: ironmine; sites 0, carriers 18, idle 18, field 1, posts 1, fish 12.


Script: 1816 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 7/1/1331/10/30 | 32/6/2766/10/50 |
| 30 | 7/1/1331/2/30 | 69/13/5719/22/95 |
| 45 | 7/1/1331/2/30 | 77/21/11907/46/91 |
| 60 | 7/1/1331/2/30 | 86/26/15973/71/86 |
| first | - - - - - - | 8 9 11 11 23 32 |

Soldiers every 5 min: 10 10 10 10 9 2 2 2 2 2 2 2 (original game NPC: 10 10 10 10 20 22 36 39 46 54 66 71).

First army orders (game min:sec): 0:00 armyReserve; 23:52 attack 8 soldiers -> building 224.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 47 min, 14–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (128 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 5 min, 26–30: army: Lost 7 soldiers in the last 5 minutes, and no barracks to train new ones.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 14 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 32 | 1331 | 9565 |
| 30 | 16 | 14 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 32 | 1331 | 10761 |
| 45 | 16 | 14 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 32 | 1331 | 10765 |
| 60 | 16 | 14 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 32 | 1331 | 10765 |

At the end: buildings (built+sites) hq 1, house2 1, wood 1, quarry 1, fisher 1, saw 1, guard 1.
People: carrier 20, worker 4, digger 2, builder 2, explorer 2, soldier 1; beds 20. Soldiers: sword 1.

Goods produced in the game: log 21, stone 10, plank 9, fish 8.
Goods consumed in the game: stone 20, plank 19, log 9, axe 1, pick 1, rod 1, saw 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (59 building-min): Idle 100%
- wood (59 building-min): Log pile full, nothing needs it right now 88%, Felling a tree 8%, Bringing a log to the pile 3%, Worker picking up an axe 0%, Working 0%
- quarry (59 building-min): Stone pile full, nothing needs it right now 96%, Cutting stone 3%, Bringing stone to the pile 1%, Worker picking up a pickaxe 0%, Working 0%
- fisher (58 building-min): Fish pile full, nothing needs it right now 98%, Bringing a fish to the pile 1%, Fishing 1%, Worker picking up a fishing rod 0%, Idle 0%
- saw (58 building-min): Output pile full, nothing needs it right now 97%, Sawing planks 2%, Stacking outside 0%, Worker picking up a saw 0%, Idle 0%
- guard (54 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%

Building sites, time per state (site-min): Builders at work 1, Leveling the ground 1, Waiting for a digger 1, Waiting for a builder 1.

Build order (placed at min:sec, finished at): house2 0:02→0:56, wood 0:04→1:10, quarry 0:56→1:27, fisher 1:10→1:42, saw 1:28→2:03, guard 5:02→5:35.

Orders given: sendUnit 38, place 6, priority 6, profession 2, armyReserve 1, attack 1. None refused.

People changing jobs: new carrier 20, carrier -> worker 4, carrier -> explorer 2.

People's orders (241 in all, 221 done): explorer explore 25, worker rest wood 22, worker gather wood 21, soldier attack guard 17, carrier haul log wood -> saw 13, worker rest quarry 11, worker gather quarry 10, worker rest saw 10, worker rest fisher 9, worker toCraft saw 9, worker craft saw 9, worker gather fisher 8, carrier haul stone pile -> house2 6, carrier haul plank pile -> house2 5. Not done (outcome: times): failed: can't reach that spot ×12.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 13.

Fights and contact: attacked enemy buildings 2 times (first 23:52); killed sword 2, spear 1; lost people sword 5, bow 3; first saw player 1 at 9:00.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Rush: house2/wood/quarry; sites 0, carriers 6, idle 6, field 10, posts 0, fish 6.
- ×5 10:00–50:00 Rush: ; sites 0, carriers 20, idle 20, field 1, posts 1, fish 14.


Script: 1812 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 7/1/1318/10/30 | 32/6/2712/10/50 |
| 30 | 7/1/1318/10/30 | 52/6/3477/10/60 |
| 45 | 7/1/1318/10/30 | 59/7/5071/13/87 |
| 60 | 7/1/1318/10/30 | 72/16/10760/61/89 |
| first | - - - - - - | 10 11 23 28 45 48 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 10 10 10 13 40 53 61).

First army orders (game min:sec): 0:00 armyReserve.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 47 min, 14–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (2 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 16 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 32 | 1318 | 7880 |
| 30 | 16 | 16 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 32 | 1318 | 9484 |
| 45 | 16 | 16 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 32 | 1318 | 9762 |
| 60 | 16 | 16 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 32 | 1318 | 9791 |

At the end: buildings (built+sites) hq 1, house2 1, wood 1, quarry 1, fisher 1, saw 1, guard 1.
People: carrier 20, soldier 9, worker 4, digger 2, builder 2, explorer 2; beds 20. Soldiers: sword 6, bow 3.

Goods produced in the game: log 23, plank 11, stone 10, fish 8.
Goods consumed in the game: stone 20, plank 19, log 11, axe 1, pick 1, rod 1, saw 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (59 building-min): Idle 100%
- wood (59 building-min): Log pile full, nothing needs it right now 87%, Felling a tree 9%, Bringing a log to the pile 4%, Worker picking up an axe 0%, Idle 0%
- quarry (58 building-min): Stone pile full, nothing needs it right now 95%, Cutting stone 3%, Bringing stone to the pile 2%, Worker picking up a pickaxe 0%, Working 0%
- fisher (58 building-min): Fish pile full, nothing needs it right now 99%, Fishing 1%, Bringing a fish to the pile 0%, Worker picking up a fishing rod 0%, Working 0%
- saw (58 building-min): Output pile full, nothing needs it right now 97%, Sawing planks 2%, Stacking outside 0%, Worker picking up a saw 0%, Fetching from the pile 0%
- guard (54 building-min): Idle 100%, Soldiers on the way 0%

Building sites, time per state (site-min): Builders at work 2, Leveling the ground 1, Waiting for a digger 1, Waiting for a builder 1.

Build order (placed at min:sec, finished at): house2 0:02→1:01, wood 0:04→1:14, quarry 1:02→1:31, fisher 1:16→1:46, saw 1:32→2:09, guard 5:02→5:47.

Orders given: sendUnit 38, place 6, priority 6, profession 2, armyReserve 1. None refused.

People changing jobs: new carrier 20, carrier -> worker 4, carrier -> explorer 2.

People's orders (236 in all, 217 done): explorer explore 25, worker rest wood 24, worker gather wood 23, carrier haul log wood -> saw 15, worker rest saw 12, worker rest quarry 11, worker toCraft saw 11, worker craft saw 11, worker gather quarry 10, worker rest fisher 9, worker gather fisher 8, carrier haul stone pile -> house2 6, carrier haul plank pile -> house2 5, carrier haul stone pile -> saw 4. Not done (outcome: times): failed: can't reach that spot ×12.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 13.

Fights and contact: first saw player 2 at 9:00.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Rush: house2/wood/quarry; sites 0, carriers 6, idle 6, field 10, posts 0, fish 6.
- ×5 10:00–50:00 Rush: ; sites 0, carriers 20, idle 20, field 9, posts 1, fish 14.


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 7/1/1333/10/30 | 23/6/2529/10/40 |
| 30 | 7/1/1333/10/30 | 23/6/2916/10/40 |
| 45 | 7/1/1333/10/30 | 31/6/3591/10/50 |
| 60 | 7/1/1333/10/30 | 63/10/6400/22/98 |
| first | - - - - - - | 39 40 42 45 58 60 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 10 10 10 10 10 11 22).

First army orders (game min:sec): 0:00 armyReserve.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 47 min, 14–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (12 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 16 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 32 | 1333 | 14077 |
| 30 | 16 | 16 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 32 | 1333 | 14244 |
| 45 | 16 | 16 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 32 | 1333 | 14499 |
| 60 | 16 | 16 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 32 | 1333 | 14697 |

At the end: buildings (built+sites) hq 1, house2 1, wood 1, quarry 1, fisher 1, saw 1, guard 1.
People: carrier 20, soldier 9, worker 4, digger 2, builder 2, explorer 2; beds 20. Soldiers: sword 6, bow 3.

Goods produced in the game: log 23, plank 11, stone 10, fish 8.
Goods consumed in the game: stone 20, plank 19, log 11, axe 1, pick 1, saw 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (59 building-min): Idle 100%
- wood (59 building-min): Log pile full, nothing needs it right now 89%, Felling a tree 8%, Bringing a log to the pile 3%, Worker picking up an axe 0%, Working 0%
- quarry (58 building-min): Stone pile full, nothing needs it right now 96%, Cutting stone 3%, Bringing stone to the pile 1%, Worker picking up a pickaxe 0%, Idle 0%
- fisher (58 building-min): Fish pile full, nothing needs it right now 99%, Fishing 1%, Bringing a fish to the pile 0%, Worker picking up a fishing rod 0%
- saw (58 building-min): Output pile full, nothing needs it right now 97%, Sawing planks 2%, Stacking outside 1%, Worker picking up a saw 0%, Fetching from the pile 0%
- guard (54 building-min): Idle 100%, Soldiers on the way 0%

Building sites, time per state (site-min): Leveling the ground 2, Builders at work 2, Waiting for a digger 1, Waiting for a builder 1.

Build order (placed at min:sec, finished at): house2 0:02→1:03, wood 0:04→1:17, quarry 1:04→1:34, fisher 1:18→2:01, saw 1:36→2:21, guard 5:02→5:41.

Orders given: sendUnit 38, place 6, priority 6, profession 2, armyReserve 1. None refused.

People changing jobs: new carrier 20, carrier -> worker 4, carrier -> explorer 2.

People's orders (249 in all, 241 done): explorer explore 38, worker rest wood 24, worker gather wood 23, carrier haul log wood -> saw 15, worker rest saw 12, worker rest quarry 11, worker toCraft saw 11, worker craft saw 11, worker gather quarry 10, worker rest fisher 9, worker gather fisher 8, carrier haul stone pile -> house2 6, carrier haul plank pile -> house2 5, carrier haul stone pile -> saw 4. None failed.

Fights and contact: first saw player 1 at 7:00.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Rush: house2/wood/quarry; sites 0, carriers 6, idle 6, field 10, posts 0, fish 6.
- ×5 10:00–50:00 Rush: ; sites 0, carriers 20, idle 20, field 9, posts 1, fish 14.


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 13/1/1322/10/30 | 24/6/2998/10/40 |
| 30 | 15/3/1932/12/20 | 23/4/2793/5/40 |
| 45 | 15/3/1932/10/18 | 43/4/3265/6/65 |
| 60 | 13/1/1322/2/18 | 72/12/7736/35/102 |
| first | 9 9 11 12 - - | 8 8 10 11 57 58 |

Soldiers every 5 min: 10 10 10 7 11 12 14 14 10 4 4 2 (original game NPC: 10 10 10 5 5 5 5 5 6 7 12 35).

First army orders (game min:sec): 0:00 armyReserve; 11:48 armyTarget sword=8; 11:48 armyTarget spear=6; 11:48 armyTarget bow=6; 15:00 armyTarget sword=12; 15:00 armyTarget spear=9; 15:00 armyTarget bow=7; 17:36 attack 12 soldiers -> building 133; 19:54 attack 4 soldiers -> building 129; 30:00 armyTarget sword=15; 30:00 armyTarget spear=11; 30:00 armyTarget bow=10.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 6 min, 11–16: stall: smith: waiting for coal 58% of the last 5 minutes.
- 16 min, 11–48: settlers: No free settlers and every bed taken: build houses.
- 27 min, 13–39: stall: weaponsmith: waiting for coal 91% of the last 5 minutes.
- 29 min, 14–47: stall: barracks: waiting for weapons from the weaponsmith 100% of the last 5 minutes.
- 38 min, 15–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 10 min, 20–50: army: Lost 6 soldiers in the last 5 minutes.
- 16 min, 25–47: stall: coal mine: deposit worn out 91% of the last 5 minutes.
- 20 min, 40–60: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 20 min, 40–60: stall: quarry: stone pile full, waiting for carriers 100% of the last 5 minutes.
- 19 min, 42–60: weapons: 15 weapons lie unused: the barracks needs free settlers (build houses).
- 18 min, 42–60: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 10 min, 51–60: settlers: No free settlers: build houses.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 13 | 0 | 0 | 0 | 0 | 0 | 12 | 14 | 20 | 0 | 0 | 0 | 0 | 0 | 11 | 45 | 1322 | 13086 |
| 30 | 16 | 8 | 8 | 18 | 0 | 0 | 0 | 0 | 0 | 12 | 14 | 20 | 0 | 0 | 0 | 0 | 0 | 2 | 50 | 1932 | 15002 |
| 45 | 16 | 8 | 8 | 15 | 0 | 0 | 0 | 0 | 0 | 18 | 8 | 19 | 0 | 0 | 2 | 3 | 3 | 0 | 60 | 1932 | 15298 |
| 60 | 16 | 8 | 8 | 11 | 0 | 0 | 0 | 0 | 0 | 22 | 13 | 20 | 0 | 0 | 8 | 4 | 3 | 0 | 62 | 1322 | 15643 |

At the end: buildings (built+sites) hq 1, house2 1, wood 1, quarry 1, fisher 1, saw 1, guard 1, ironmine 1, coalmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1.
People: worker 9, digger 2, builder 2, explorer 2, carrier 2, soldier 1, geologist 1; beds 20. Soldiers: sword 1.

Goods produced in the game: fish 286, coal 102, ironore 63, iron 50, log 39, stone 35, plank 27, sword 16, spear 7, bow 4, saw 1, rod 1, hammer 1.
Goods consumed in the game: fish 281, coal 80, ironore 50, stone 45, plank 43, iron 30, log 27, sword 8, pick 4, hammer 3, spear 3, axe 1, saw 1, rod 1, bow 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (59 building-min): Idle 100%
- wood (58 building-min): Log pile full, waiting for carriers 46%, Log pile full, nothing needs it right now 34%, Felling a tree 14%, Bringing a log to the pile 5%, Worker picking up an axe 0%
- quarry (58 building-min): Stone pile full, waiting for carriers 47%, Stone pile full, nothing needs it right now 38%, Cutting stone 11%, Bringing stone to the pile 5%, Worker picking up a pickaxe 0%
- fisher (58 building-min): Fishing 43%, Bringing a fish to the pile 37%, Fish pile full, nothing needs it right now 12%, Fish pile full, waiting for carriers 7%, Worker picking up a fishing rod 0%
- saw (57 building-min): Output pile full, waiting for carriers 47%, Output pile full, nothing needs it right now 45%, Sawing planks 6%, Stacking outside 1%, Worker picking up a saw 0%
- guard (133 building-min): Idle 97%, Waiting for a swordsman: train one at the barracks 3%, Soldiers on the way 0%, Waiting for a soldier 0%
- ironmine (53 building-min): Iron ore pile full, waiting for carriers 30%, Iron ore pile full, nothing needs it right now 26%, Deposit worn out: finding little iron ore 21%, Deposit thinning: mining iron ore 11%, Mining iron ore 6%
- coalmine (53 building-min): Deposit worn out: finding little coal 65%, Deposit thinning: mining coal 15%, Mining coal 8%, Bringing coal out 5%, Came back empty-handed 2%
- smelter (52 building-min): Output pile full, waiting for carriers 42%, Output pile full, nothing needs it right now 37%, Smelting iron 12%, Waiting for iron ore 5%, Stacking outside 3%
- smith (51 building-min): All tool targets met 90%, Waiting for coal 9%, Worker picking up a hammer 0%, Forging saw 0%, Forging fishing rod 0%
- weaponsmith (49 building-min): Waiting for coal 60%, Output pile full, waiting for carriers 31%, Forging sword 4%, Forging spear 2%, Stacking outside 1%
- barracks (48 building-min): Waiting for weapons from the weaponsmith 75%, Waiting for a free settler to train 21%, Weapons on the way 3%, Training soldiers 1%, Idle 0%

Building sites, time per state (site-min): Builders at work 3, Leveling the ground 3, Waiting for a digger 2, Waiting for a builder 1.

Build order (placed at min:sec, finished at): house2 0:02→1:18, wood 0:04→1:31, quarry 1:20→2:00, fisher 1:32→2:16, saw 2:02→2:37, guard 5:02→5:51, ironmine 6:20→6:50, coalmine 6:28→7:07, smelter 7:10→8:10, smith 8:14→8:55, weaponsmith 9:30→10:32, barracks 10:52→11:47.

Demolished or burned: guard (burned) 59:07, guard (burned) 59:28.

Orders given: sendUnit 40, place 12, priority 12, armyTarget 12, profession 3, weaponKeep 3, attack 2, armyReserve 1, release 1, march 1. None refused.

People changing jobs: new carrier 20, carrier -> soldier 12, carrier -> worker 9, new soldier 3, carrier -> explorer 2, carrier -> geologist 1.

People's orders (2701 in all, 2682 done): worker rest fisher 287, worker gather fisher 286, worker mine coalmine 273, carrier haul fish fisher -> coalmine 196, worker eat coalmine 196, worker mine ironmine 128, worker rest coalmine 103, worker eat ironmine 85, carrier haul fish fisher -> ironmine 84, worker rest ironmine 64, carrier haul coal coalmine -> smelter 56, carrier haul ironore ironmine -> smelter 55, worker rest smelter 51, worker toCraft smelter 50. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×4.

Fights and contact: attacked enemy buildings 3 times (first 17:36); was attacked 2 times (first 59:00); took guard 19:24, guard 20:00; killed bow 4, sword 9; lost people sword 13, bow 4, spear 3; first saw player 2 at 7:00.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Rush: house2/wood/quarry; sites 0, carriers 6, idle 6, field 10, posts 0, fish 6.
- ×5 10:00–50:00 Rush: ; sites 0, carriers 2, idle 0, field 1, posts 3, fish 13.


Script: 1884 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 7/1/1331/10/30 | 30/6/2644/10/50 |
| 30 | 7/1/1331/10/30 | 62/10/4730/14/96 |
| 45 | 7/1/1331/10/30 | 75/17/10780/59/91 |
| 60 | 7/1/1331/10/30 | 84/25/16230/76/94 |
| first | - - - - - - | 9 10 19 19 29 34 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 11 14 24 52 59 66 71 76).

First army orders (game min:sec): 0:00 armyReserve.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 47 min, 14–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (4 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 15 | 9 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 32 | 1331 | 8762 |
| 30 | 16 | 15 | 9 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 32 | 1331 | 8767 |
| 45 | 16 | 15 | 9 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 32 | 1331 | 8793 |
| 60 | 16 | 15 | 9 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 32 | 1331 | 8795 |

At the end: buildings (built+sites) hq 1, house2 1, wood 1, quarry 1, fisher 1, saw 1, guard 1.
People: carrier 20, soldier 9, worker 4, digger 2, builder 2, explorer 2; beds 20. Soldiers: sword 6, bow 3.

Goods produced in the game: log 22, stone 11, plank 10, fish 8.
Goods consumed in the game: stone 20, plank 19, log 10, axe 1, pick 1, saw 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (59 building-min): Idle 100%
- wood (58 building-min): Log pile full, nothing needs it right now 88%, Felling a tree 9%, Bringing a log to the pile 4%, Worker picking up an axe 0%, Working 0%
- quarry (58 building-min): Stone pile full, nothing needs it right now 96%, Cutting stone 3%, Bringing stone to the pile 1%, Worker picking up a pickaxe 0%, Working 0%
- fisher (58 building-min): Fish pile full, nothing needs it right now 97%, Bringing a fish to the pile 1%, Fishing 1%, Worker picking up a fishing rod 0%, Working 0%
- saw (57 building-min): Output pile full, nothing needs it right now 97%, Sawing planks 2%, Stacking outside 0%, Worker picking up a saw 0%, Fetching from the pile 0%
- guard (54 building-min): Idle 100%, Soldiers on the way 0%

Building sites, time per state (site-min): Leveling the ground 2, Builders at work 2, Waiting for a digger 1, Waiting for a builder 1.

Build order (placed at min:sec, finished at): house2 0:02→1:23, wood 0:04→1:36, quarry 1:24→1:53, fisher 1:36→2:16, saw 1:54→2:38, guard 5:02→5:41.

Orders given: sendUnit 38, place 6, priority 6, profession 2, armyReserve 1. None refused.

People changing jobs: new carrier 20, carrier -> worker 4, carrier -> explorer 2.

People's orders (232 in all, 213 done): explorer explore 25, worker rest wood 23, worker gather wood 22, carrier haul log wood -> saw 14, worker rest quarry 12, worker gather quarry 11, worker rest saw 11, worker toCraft saw 10, worker craft saw 10, worker rest fisher 9, worker gather fisher 8, carrier haul stone pile -> house2 6, carrier haul plank pile -> house2 5, carrier haul stone pile -> saw 4. Not done (outcome: times): failed: can't reach that spot ×12.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 13.

Fights and contact: first saw player 1 at 8:00.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Rush: house2/wood/quarry; sites 0, carriers 6, idle 6, field 10, posts 0, fish 6.
- ×5 10:00–50:00 Rush: ; sites 0, carriers 20, idle 20, field 9, posts 1, fish 14.


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.
