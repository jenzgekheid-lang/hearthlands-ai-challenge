# Tournament: scheduled

Game version 217. Written for: scheduled 214.

- scheduled: hearthlands-ai-challenge, commit 752f921

Maps 20261030, 777, 4242, 31, each twice (sides swapped), up to 60 game minutes (1x). 39 s.

Switches: vault on, banner off, armor off, vet off.

Each game ends with the script's own game log: what it may know (its own side, and what happened to it or what it saw). Times are game min:sec.

| Opponent | Won | Lost | Undecided |
|---|---|---|---|
| original game NPC | 0 | 0 | 8 |

War and gold over all games (scheduled / opponents): buildings taken 0 / 0, killed 0 / 0, gold at the end (stock + vaults) 0 / 510, stuck towns 7 / 2.

## Games

Each row: buildings / military / land tiles / soldiers / people at the minute shown. First: game minute of the first smelter, smith, weaponsmith, barracks, tower, castle (- = never).

### Map 31: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 9/1/1319/10/80 | 21/6/2898/10/40 |
| 30 | 9/1/1319/10/80 | 29/6/3290/10/50 |
| 45 | 9/1/1319/10/80 | 59/8/4131/13/87 |
| 60 | 9/1/1319/10/80 | 71/11/7186/18/102 |
| first | - - - - - - | 9 9 41 42 51 51 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 65 in vaults.

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 10 10 10 13 17 18 18).

First army orders (game min:sec): 0:00 armyReserve.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 43 min, 10–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (21 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 11 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 72 | 24 | 1319 | 3001 |
| 30 | 16 | 11 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 72 | 24 | 1319 | 3933 |
| 45 | 16 | 11 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 72 | 24 | 1319 | 4635 |
| 60 | 16 | 11 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 72 | 24 | 1319 | 5578 |

At the end: buildings (built+sites) house2 3, hq 1, guard 1, wood 1, saw 1, house 1, quarry 1.
People: carrier 72, soldier 9, worker 3, digger 2, builder 2, explorer 1; beds 70. Soldiers: sword 6, bow 3.

Goods produced in the game: log 27, stone 23, plank 15.
Goods consumed in the game: stone 33, plank 28, log 15, pick 2, axe 1, saw 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (59 building-min): Idle 100%, Soldiers on the way 0%
- wood (59 building-min): Log pile full, nothing needs it right now 88%, Felling a tree 9%, Bringing a log to the pile 3%, Worker picking up an axe 0%, Idle 0%
- saw (58 building-min): Output pile full, nothing needs it right now 96%, Sawing planks 3%, Stacking outside 1%, Worker picking up a saw 0%, Fetching from the pile 0%
- house (58 building-min): Idle 100%
- quarry (54 building-min): Stone pile full, nothing needs it right now 88%, Cutting stone 8%, Bringing stone to the pile 4%, Worker picking up a pickaxe 0%, Working 0%
- house2 (148 building-min): Idle 100%

Building sites, time per state (site-min): Builders at work 2, Leveling the ground 2, Waiting for a digger 1, Waiting for a builder 1.

Build order (placed at min:sec, finished at): guard 0:02→0:46, wood 0:04→1:05, saw 1:06→1:37, house 1:32→1:57, quarry 5:16→5:41, house2 6:44→7:34, house2 9:46→10:51, house2 12:48→13:43.

Orders given: sendUnit 29, place 8, priority 8, profession 3, armyReserve 1. None refused.

People changing jobs: new carrier 70, carrier -> worker 3, carrier -> explorer 1, geologist -> carrier 1.

People's orders (302 in all, 297 done): worker rest wood 28, explorer explore 28, worker gather wood 27, worker rest quarry 24, worker gather quarry 23, carrier haul log wood -> saw 19, worker rest saw 16, worker toCraft saw 15, worker craft saw 15, carrier haul stone quarry -> house2 15, carrier haul plank pile -> house2 10, digger dig house2 6, builder build house2 6, carrier haul plank saw -> house2 5. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Outpost plan: geo 0, unsearched 5, ore --, sites 0, pop 10/10, field 10, posts 0.
- ×5 10:00–50:00 Outpost plan: geo 0, unsearched 0, ore CI, sites 0, pop 80/80, field 9, posts 1.


Script: 1800 turns, 0.0 ms average, worst 3 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 31: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 11/1/1318/10/80 | 38/8/3631/13/57 |
| 30 | 11/1/1318/10/80 | 74/14/7158/45/105 |
| 45 | 11/1/1318/10/80 | 83/21/12003/65/105 |
| 60 | 11/1/1318/10/80 | 93/28/16660/82/108 |
| first | - - - - - - | 8 7 13 13 31 30 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 107 in vaults.

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 13 19 27 45 56 60 65 73 78 82).

First army orders (game min:sec): 0:00 armyReserve.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 1 min, 2: settlers: No free settlers and every bed taken: build houses.
- 6 min, 8–13: stall: woodcutter: no grown trees in range inside your border 54% of the last 5 minutes.
- 51 min, 10–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (3 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 34 min, 27–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 10 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 70 | 26 | 1318 | 3483 |
| 30 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 70 | 32 | 1318 | 4336 |
| 45 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 70 | 32 | 1318 | 5001 |
| 60 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 70 | 32 | 1318 | 5935 |

At the end: buildings (built+sites) house2 3, hq 1, guard 1, wood 1, fisher 1, saw 1, house 1, quarry 1, forest 1.
People: carrier 70, soldier 9, worker 5, digger 2, builder 2, explorer 1; beds 70. Soldiers: sword 6, bow 3.

Goods produced in the game: log 30, stone 26, plank 18, fish 8.
Goods consumed in the game: stone 36, plank 34, log 18, pick 3, axe 1, saw 1, rod 1, shovel 1.
Goods lost in the game: pick 2.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (59 building-min): Idle 100%, Soldiers on the way 0%
- wood (59 building-min): Log pile full, nothing needs it right now 73%, Felling a tree 12%, No grown trees in range inside your border 10%, Bringing a log to the pile 5%, Worker picking up an axe 0%
- fisher (59 building-min): Fish pile full, nothing needs it right now 97%, Bringing a fish to the pile 1%, Fishing 1%, Fish pile full, waiting for carriers 0%, Worker picking up a fishing rod 0%
- saw (59 building-min): Output pile full, nothing needs it right now 95%, Sawing planks 4%, Stacking outside 1%, Worker picking up a saw 0%, Output pile full, waiting for carriers 0%
- house (58 building-min): Idle 100%
- quarry (55 building-min): Stone pile full, nothing needs it right now 90%, Cutting stone 7%, Bringing stone to the pile 3%, Worker picking up a pickaxe 0%, Working 0%
- house2 (148 building-min): Idle 100%
- forest (51 building-min): No free ground to plant in range inside your border 71%, Planting a sapling 29%, Worker picking up a shovel 0%, Working 0%

Building sites, time per state (site-min): Leveling the ground 3, Builders at work 3, Waiting for a digger 1, Waiting for a builder 1.

Build order (placed at min:sec, finished at): guard 0:02→0:33, wood 0:04→0:50, fisher 0:34→1:06, saw 0:50→1:25, house 1:30→1:56, quarry 4:44→5:26, house2 6:28→7:35, forest 8:02→8:35, house2 9:30→10:46, house2 12:32→13:48.

Orders given: sendUnit 30, place 10, priority 10, profession 5, armyReserve 1. None refused.

People changing jobs: new carrier 70, carrier -> worker 5, geologist -> carrier 2, carrier -> geologist 1, carrier -> explorer 1.

People's orders (591 in all, 584 done): worker rest forest 113, worker gather forest 112, worker rest wood 31, worker gather wood 30, explorer explore 28, worker rest quarry 27, worker gather quarry 26, carrier haul log wood -> saw 22, worker rest saw 19, worker toCraft saw 18, worker craft saw 18, carrier haul stone quarry -> house2 17, worker rest fisher 9, carrier haul plank pile -> house2 9. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Outpost plan: geo 0, unsearched 3, ore --, sites 0, pop 10/10, field 10, posts 0.
- ×5 10:00–50:00 Outpost plan: geo 0, unsearched 0, ore C-, sites 0, pop 80/80, field 9, posts 1.


Script: 1800 turns, 0.1 ms average, worst 4 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 10/1/1318/10/80 | 29/6/3137/15/45 |
| 30 | 10/1/1318/10/80 | 66/10/5538/15/95 |
| 45 | 10/1/1318/10/80 | 79/19/11750/42/88 |
| 60 | 10/1/1318/10/80 | 81/22/14427/44/106 |
| first | - - - - - - | 8 8 9 10 23 35 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 58 in vaults.

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 15 15 15 15 25 40 42 44 44 44).

First army orders (game min:sec): 0:00 armyReserve.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 51 min, 10–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (5 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 71 | 32 | 1318 | 3586 |
| 30 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 71 | 32 | 1318 | 4534 |
| 45 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 71 | 32 | 1318 | 5352 |
| 60 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 71 | 32 | 1318 | 6792 |

At the end: buildings (built+sites) house2 3, hq 1, guard 1, wood 1, fisher 1, saw 1, house 1, quarry 1.
People: carrier 71, soldier 9, worker 4, digger 2, builder 2, explorer 1; beds 70. Soldiers: sword 6, bow 3.

Goods produced in the game: log 27, stone 25, plank 15, fish 8.
Goods consumed in the game: stone 35, plank 31, log 15, pick 4, axe 1, saw 1, rod 1.
Goods lost in the game: pick 3.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (59 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (59 building-min): Log pile full, nothing needs it right now 87%, Felling a tree 9%, Bringing a log to the pile 3%, Worker picking up an axe 0%, Working 0%
- fisher (59 building-min): Fish pile full, nothing needs it right now 98%, Fishing 1%, Bringing a fish to the pile 1%, Worker picking up a fishing rod 0%, Fish pile full, waiting for carriers 0%
- saw (58 building-min): Output pile full, nothing needs it right now 96%, Sawing planks 3%, Stacking outside 1%, Worker picking up a saw 0%, Fetching from the pile 0%
- house (58 building-min): Idle 100%
- quarry (55 building-min): Stone pile full, nothing needs it right now 90%, Cutting stone 7%, Bringing stone to the pile 3%, Worker picking up a pickaxe 0%, Idle 0%
- house2 (149 building-min): Idle 100%

Building sites, time per state (site-min): Leveling the ground 3, Builders at work 3, Waiting for a digger 1, Waiting for a builder 1.

Build order (placed at min:sec, finished at): guard 0:02→0:41, wood 0:04→1:02, fisher 0:42→1:16, saw 1:02→1:38, house 1:30→2:01, quarry 4:40→5:05, house2 6:12→7:35, house2 9:14→10:30, house2 12:16→13:15.

Orders given: sendUnit 32, place 9, priority 9, profession 7, armyReserve 1. None refused.

People changing jobs: new carrier 70, carrier -> worker 4, geologist -> carrier 3, carrier -> geologist 2, carrier -> explorer 1.

People's orders (339 in all, 333 done): worker rest wood 28, explorer explore 28, worker gather wood 27, worker rest quarry 26, worker gather quarry 25, carrier haul log wood -> saw 19, carrier haul stone quarry -> house2 17, worker rest saw 16, worker toCraft saw 15, worker craft saw 15, worker rest fisher 9, worker gather fisher 8, carrier haul plank pile -> house2 8, carrier haul plank saw -> house2 7. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Outpost plan: geo 0, unsearched 5, ore --, sites 0, pop 10/10, field 10, posts 0.
- ×5 10:00–50:00 Outpost plan: geo 0, unsearched 0, ore CI, sites 0, pop 80/80, field 9, posts 1.


Script: 1800 turns, 0.1 ms average, worst 4 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 16/1/1338/18/32 | 29/6/2760/10/40 |
| 30 | 21/2/1612/20/30 | 56/7/3529/11/79 |
| 45 | 25/2/1636/25/25 | 69/14/8481/25/85 |
| 60 | 25/2/1636/25/25 | 79/20/13093/39/101 |
| first | 9 10 13 14 - - | 8 9 11 11 40 39 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults. original game NPC: took 0, lost 0, killed 0, fallen 0, gold 1 in stock + 80 in vaults.

Soldiers every 5 min: 10 10 18 18 18 20 21 25 25 25 25 25 (original game NPC: 10 10 10 10 10 11 14 21 25 30 34 39).

First army orders (game min:sec): 0:00 armyReserve; 13:48 armyTarget sword=8; 13:48 armyTarget spear=6; 13:48 armyTarget bow=6; 15:00 armyTarget sword=12; 15:00 armyTarget spear=9; 15:00 armyTarget bow=7; 30:00 armyTarget sword=15; 30:00 armyTarget spear=11; 30:00 armyTarget bow=10; 50:00 armyTarget sword=17; 50:00 armyTarget spear=13.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 34 min, 2–60: settlers: No free settlers and every bed taken: build houses.
- 29 min, 10–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 29 min, 11–47: stall: smelter: waiting for iron ore 100% of the last 5 minutes.
- 1 min, 11: stall: iron mine: iron ore pile full, waiting for carriers 55% of the last 5 minutes.
- 4 min, 13–16: stall: woodcutter: no grown trees in range inside your border 76% of the last 5 minutes.
- 15 min, 15–45: stall: iron mine: needs meat or fish 100% of the last 5 minutes.
- 17 min, 16–38: stall: barracks: waiting for weapons from the weaponsmith 86% of the last 5 minutes.
- 24 min, 19–48: stall: weaponsmith: waiting for iron 100% of the last 5 minutes.
- 1 min, 29: stall: forest: no free ground to plant in range inside your border 87% of the last 5 minutes.
- 18 min, 37–60: stall: quarry: stone pile full, waiting for carriers 100% of the last 5 minutes.
- 3 min, 38–40: stall: water hut: water pile full, waiting for carriers 100% of the last 5 minutes.
- 3 min, 39–41: stall: farm: grain pile full, waiting for carriers 100% of the last 5 minutes.
- 8 min, 46–60: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 7 min, 47–53: stall: barracks: waiting for a free settler to train 100% of the last 5 minutes.
- 13 min, 48–60: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 9 min, 52–60: weapons: 8 weapons lie unused: the barracks needs free settlers (build houses).

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 0 | 2 | 7 | 3 | 0 | 0 | 0 | 0 | 0 | 17 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 15 | 12 | 1338 | 3632 |
| 30 | 24 | 8 | 16 | 7 | 0 | 0 | 0 | 8 | 0 | 28 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 8 | 62 | 1612 | 4653 |
| 45 | 28 | 16 | 16 | 21 | 0 | 0 | 14 | 14 | 0 | 32 | 0 | 6 | 0 | 0 | 0 | 2 | 0 | 0 | 104 | 1636 | 5449 |
| 60 | 32 | 16 | 16 | 16 | 0 | 0 | 14 | 14 | 0 | 33 | 7 | 8 | 0 | 0 | 2 | 4 | 2 | 0 | 115 | 1636 | 6356 |

At the end: buildings (built+sites) guard 2, wood 2, fisher 2, saw 2, quarry 2, coalmine 2, hq 1, ironmine 1, house 1, smelter 1, smith 1, house2 1, weaponsmith 1, barracks 1, forest 1, farm 1, waterhut 1, pigfarm 1, butcher 1.
People: soldier 23, worker 18, digger 2, builder 2, carrier 2, explorer 1; beds 30. Soldiers: sword 12, bow 6, spear 5.

Goods produced in the game: fish 272, log 103, coal 103, stone 82, plank 75, ironore 46, iron 39, grain 22, water 22, spear 9, sword 9, pig 8, bow 5, saw 2, rod 2, pick 2, hammer 1, axe 1.
Goods consumed in the game: fish 262, stone 84, plank 83, log 75, coal 70, ironore 39, iron 31, pick 10, water 8, grain 8, sword 7, spear 5, hammer 3, bow 3, axe 2, saw 2, rod 2, shovel 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (93 building-min): Idle 100%, Soldiers on the way 0%
- wood (104 building-min): Log pile full, waiting for carriers 48%, Felling a tree 23%, Log pile full, nothing needs it right now 14%, Bringing a log to the pile 10%, No grown trees in range inside your border 5%
- fisher (102 building-min): No fish in range inside your border 39%, Bringing a fish to the pile 20%, Fishing 19%, Fish pile full, waiting for carriers 18%, Fish pile full, nothing needs it right now 4%
- saw (86 building-min): Output pile full, waiting for carriers 59%, Output pile full, nothing needs it right now 19%, Sawing planks 11%, Waiting for logs 8%, Stacking outside 2%
- ironmine (58 building-min): Needs meat or fish: mining stopped 52%, Iron ore pile full, waiting for carriers 17%, Deposit thinning: mining iron ore 13%, Mining iron ore 7%, Iron ore pile full, nothing needs it right now 7%
- house (58 building-min): Idle 100%
- quarry (95 building-min): Stone pile full, waiting for carriers 58%, Stone pile full, nothing needs it right now 22%, Cutting stone 13%, Bringing stone to the pile 6%, Worker picking up a pickaxe 0%
- coalmine (105 building-min): Deposit worn out: finding little coal 37%, Coal pile full, waiting for carriers 25%, Needs bread or fish: mining stopped 17%, Deposit thinning: mining coal 7%, Mining coal 5%
- smelter (51 building-min): Waiting for iron ore 88%, Smelting iron 10%, Stacking outside 2%, Worker picking up a hammer 0%, Fetching from the pile 0%
- smith (51 building-min): All tool targets met 94%, Waiting for iron 2%, Forging pickaxe 1%, Forging saw 0%, Forging fishing rod 0%
- house2 (49 building-min): Idle 100%
- weaponsmith (47 building-min): Waiting for iron 91%, Forging spear 2%, Forging sword 2%, Forging bow 1%, Stacking outside 1%
- barracks (46 building-min): Waiting for weapons from the weaponsmith 48%, Waiting for a free settler to train 47%, Weapons on the way 4%, Training soldiers 1%
- forest (46 building-min): No free ground to plant in range inside your border 68%, Planting a sapling 31%, Worker picking up a shovel 0%, Working 0%
- farm (42 building-min): Grain pile full, waiting for carriers 65%, Grain pile full, nothing needs it right now 26%, Sowing a field 4%, Harvesting grain 3%, Bringing grain to the pile 1%
- waterhut (29 building-min): Water pile full, waiting for carriers 93%, Fetching water 3%, Bringing water to the pile 3%, Water pile full, nothing needs it right now 2%, Worker on the way 0%
- pigfarm (28 building-min): Output pile full, waiting for carriers 91%, Raising a pig 6%, Stacking outside 1%, Waiting for grain and water 1%, Worker on the way 0%
- butcher (16 building-min): Waiting for a free settler 99%, Idle 1%

Building sites, time per state (site-min): Builders at work 7, Leveling the ground 5, Waiting for a digger 3, Waiting for a builder 3, Waiting for materials 1.

Build order (placed at min:sec, finished at): guard 0:02→0:35, wood 0:04→0:48, fisher 0:36→1:06, saw 0:50→1:25, ironmine 1:06→1:45, house 1:30→2:10, quarry 5:26→5:56, coalmine 6:14→6:56, coalmine 7:28→8:04, smelter 7:52→8:35, smith 8:48→9:22, house2 10:08→11:08, weaponsmith 11:44→12:33, barracks 13:00→13:48, forest 13:14→14:06, wood 15:00→15:34, fisher 16:18→17:13, farm 17:18→18:28, quarry 17:38→18:47, guard 25:40→26:46, waterhut 30:02→30:48, pigfarm 30:50→32:05, saw 31:12→32:25, butcher 42:02→43:36.

Orders given: sendUnit 32, place 24, priority 24, armyTarget 12, profession 11, weaponKeep 3, armyReserve 1. None refused.

People changing jobs: new carrier 30, carrier -> worker 18, carrier -> soldier 15, geologist -> carrier 5, carrier -> geologist 4, carrier -> explorer 1.

People's orders (3502 in all, 3479 done): worker mine coalmine 291, worker rest fisher 273, worker gather fisher 272, carrier haul fish fisher -> coalmine 220, worker eat coalmine 213, worker rest coalmine 125, worker rest forest 117, worker gather forest 116, worker rest wood 105, worker gather wood 103, carrier haul log wood -> saw 87, worker rest quarry 84, worker mine ironmine 82, worker gather quarry 82. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Outpost plan: geo 0, unsearched 4, ore --, sites 0, pop 10/10, field 10, posts 0.
- ×5 10:00–50:00 Outpost plan: geo 0, unsearched 0, ore CI, sites 0, pop 25/40, field 23, posts 2.


Script: 1800 turns, 0.1 ms average, worst 5 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 10/1/1318/10/80 | 31/6/2704/10/40 |
| 30 | 12/1/1318/10/80 | 35/6/3088/10/50 |
| 45 | 12/1/1318/10/80 | 35/6/3436/10/50 |
| 60 | 12/1/1318/10/80 | 35/6/4048/10/50 |
| first | - - - - - - | 10 11 - - - - |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 59 in vaults, STUCK (town stopped growing).

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 10 10 10 10 10 10 10).

First army orders (game min:sec): 0:00 armyReserve.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 51 min, 10–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (2 mountain tiles).
- 5 min, 16–20: stall: woodcutter: no grown trees in range inside your border 56% of the last 5 minutes.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 38 min, 23–60: stall: sawmill: needs a worker with a saw 50% of the last 5 minutes.
- 29 min, 32–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 15 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 71 | 31 | 1318 | 3729 |
| 30 | 24 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 70 | 32 | 1318 | 4593 |
| 45 | 24 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 70 | 32 | 1318 | 5309 |
| 60 | 24 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 70 | 32 | 1318 | 6402 |

At the end: buildings (built+sites) house2 3, saw 2, hq 1, guard 1, wood 1, fisher 1, house 1, quarry 1, forest 1.
People: carrier 70, soldier 9, worker 5, digger 2, builder 2, explorer 1; beds 70. Soldiers: sword 6, bow 3.

Goods produced in the game: log 41, stone 30, plank 21, fish 8.
Goods consumed in the game: stone 40, plank 37, log 21, pick 2, axe 1, saw 1, rod 1, shovel 1.
Goods lost in the game: pick 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (59 building-min): Idle 100%, Soldiers on the way 0%
- wood (59 building-min): Log pile full, nothing needs it right now 70%, Felling a tree 15%, No grown trees in range inside your border 9%, Bringing a log to the pile 6%, Worker picking up an axe 0%
- fisher (59 building-min): Fish pile full, nothing needs it right now 98%, Bringing a fish to the pile 1%, Fishing 1%, Worker picking up a fishing rod 0%, Fish pile full, waiting for carriers 0%
- saw (101 building-min): Output pile full, nothing needs it right now 54%, Needs a worker with a saw 42%, Sawing planks 3%, Stacking outside 1%, Worker picking up a saw 0%
- house (58 building-min): Idle 100%
- quarry (55 building-min): Stone pile full, nothing needs it right now 88%, Cutting stone 8%, Bringing stone to the pile 4%, Worker picking up a pickaxe 0%, Working 0%
- house2 (149 building-min): Idle 100%
- forest (43 building-min): No free ground to plant in range inside your border 71%, Planting a sapling 28%, Worker picking up a shovel 0%

Building sites, time per state (site-min): Builders at work 3, Leveling the ground 3, Waiting for a digger 2, Waiting for a builder 1.

Build order (placed at min:sec, finished at): guard 0:02→0:49, wood 0:04→1:03, fisher 0:50→1:20, saw 1:04→1:40, house 1:30→2:01, quarry 4:28→5:09, house2 6:12→7:17, house2 9:14→10:09, house2 12:16→13:29, forest 16:02→16:47, saw 16:10→17:14.

Orders given: sendUnit 29, place 11, priority 11, profession 3, armyReserve 1. None refused.

People changing jobs: new carrier 70, carrier -> worker 5, geologist -> carrier 1, carrier -> explorer 1.

People's orders (620 in all, 613 done): worker rest forest 98, worker gather forest 97, worker rest wood 42, worker gather wood 41, carrier haul log wood -> saw 33, worker rest quarry 31, worker gather quarry 30, explorer explore 28, worker rest saw 22, worker toCraft saw 21, worker craft saw 21, carrier haul stone quarry -> house2 17, worker rest fisher 9, worker gather fisher 8. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Outpost plan: geo 0, unsearched 2, ore --, sites 0, pop 10/10, field 10, posts 0.
- ×5 10:00–50:00 Outpost plan: geo 0, unsearched 0, ore -I, sites 0, pop 80/80, field 9, posts 1.


Script: 1800 turns, 0.2 ms average, worst 3 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 10/1/1318/10/80 | 23/6/2564/10/40 |
| 30 | 10/1/1318/10/80 | 25/6/2964/10/40 |
| 45 | 10/1/1318/10/80 | 27/6/3354/10/40 |
| 60 | 10/1/1318/10/80 | 52/9/5305/13/75 |
| first | - - - - - - | 41 44 48 50 - - |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 13 in vaults.

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 10 10 10 10 10 13 13).

First army orders (game min:sec): 0:00 armyReserve.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 1 min, 2: settlers: No free settlers and every bed taken: build houses.
- 51 min, 10–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (27 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 11 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 71 | 32 | 1318 | 3565 |
| 30 | 16 | 11 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 71 | 32 | 1318 | 4729 |
| 45 | 16 | 11 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 71 | 32 | 1318 | 5471 |
| 60 | 16 | 11 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 71 | 32 | 1318 | 6261 |

At the end: buildings (built+sites) house2 3, hq 1, guard 1, wood 1, fisher 1, saw 1, house 1, quarry 1.
People: carrier 71, soldier 9, worker 4, digger 2, builder 2, explorer 1; beds 70. Soldiers: sword 6, bow 3.

Goods produced in the game: log 30, stone 25, plank 18, fish 8.
Goods consumed in the game: stone 35, plank 31, log 18, pick 5, axe 1, saw 1, rod 1.
Goods lost in the game: pick 3.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (59 building-min): Idle 100%, Soldiers on the way 0%
- wood (59 building-min): Log pile full, nothing needs it right now 85%, Felling a tree 11%, Bringing a log to the pile 4%, Worker picking up an axe 0%, Log pile full, waiting for carriers 0%
- fisher (59 building-min): Fish pile full, nothing needs it right now 99%, Fishing 1%, Bringing a fish to the pile 0%, Worker picking up a fishing rod 0%, Fish pile full, waiting for carriers 0%
- saw (58 building-min): Output pile full, nothing needs it right now 95%, Sawing planks 4%, Stacking outside 1%, Output pile full, waiting for carriers 0%, Fetching from the pile 0%
- house (58 building-min): Idle 100%
- quarry (55 building-min): Stone pile full, nothing needs it right now 91%, Cutting stone 7%, Bringing stone to the pile 2%, Worker picking up a pickaxe 0%, Working 0%
- house2 (147 building-min): Idle 100%

Building sites, time per state (site-min): Leveling the ground 3, Builders at work 3, Waiting for a digger 1, Waiting for a builder 1.

Build order (placed at min:sec, finished at): guard 0:02→0:41, wood 0:04→1:04, fisher 0:42→1:27, saw 1:04→1:49, house 1:30→2:06, quarry 4:48→5:27, house2 6:44→8:11, house2 9:46→11:27, house2 12:48→13:34.

Orders given: sendUnit 33, profession 9, place 9, priority 9, armyReserve 1. None refused.

People changing jobs: new carrier 70, carrier -> worker 4, geologist -> carrier 4, carrier -> geologist 3, carrier -> explorer 1.

People's orders (359 in all, 353 done): worker rest wood 31, worker gather wood 30, explorer explore 28, worker rest quarry 26, worker gather quarry 25, carrier haul log wood -> saw 22, worker rest saw 19, worker toCraft saw 18, worker craft saw 18, carrier haul stone quarry -> house2 17, carrier haul plank saw -> house2 10, worker rest fisher 9, worker gather fisher 8, digger dig house2 6. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Outpost plan: geo 0, unsearched 3, ore --, sites 0, pop 10/10, field 10, posts 0.
- ×5 10:00–50:00 Outpost plan: geo 0, unsearched 0, ore CI, sites 0, pop 80/80, field 9, posts 1.


Script: 1800 turns, 0.0 ms average, worst 4 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 11/1/1349/10/60 | 21/6/2997/10/40 |
| 30 | 11/1/1349/10/60 | 27/6/3417/10/50 |
| 45 | 11/1/1349/10/60 | 27/6/3822/10/50 |
| 60 | 11/1/1349/10/60 | 27/6/4225/10/50 |
| first | - - - - - - | 8 8 - - - - |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 35 in vaults, STUCK (town stopped growing).

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 10 10 10 10 10 10 10).

First army orders (game min:sec): 0:00 armyReserve.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 43 min, 18–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 16 | 0 | 0 | 0 | 0 | 0 | 0 | 16 | 0 | 0 | 0 | 0 | 0 | 0 | 49 | 48 | 1349 | 3713 |
| 30 | 16 | 8 | 8 | 16 | 0 | 0 | 0 | 0 | 0 | 0 | 16 | 0 | 0 | 0 | 0 | 0 | 0 | 49 | 48 | 1349 | 4606 |
| 45 | 16 | 8 | 8 | 16 | 0 | 0 | 0 | 0 | 0 | 0 | 16 | 0 | 0 | 0 | 0 | 0 | 0 | 49 | 48 | 1349 | 5460 |
| 60 | 16 | 8 | 8 | 16 | 0 | 0 | 0 | 0 | 0 | 0 | 16 | 0 | 0 | 0 | 0 | 0 | 0 | 49 | 48 | 1349 | 6428 |

At the end: buildings (built+sites) house2 2, ironmine 2, hq 1, guard 1, wood 1, fisher 1, saw 1, house 1, quarry 1.
People: carrier 49, soldier 9, worker 6, digger 2, builder 2, explorer 1; beds 50. Soldiers: sword 6, bow 3.

Goods produced in the game: log 30, fish 26, stone 21, plank 18, ironore 16.
Goods consumed in the game: plank 34, stone 31, log 18, fish 16, pick 6, axe 1, saw 1, rod 1.
Goods lost in the game: pick 2.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (59 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (59 building-min): Log pile full, nothing needs it right now 85%, Felling a tree 11%, Bringing a log to the pile 3%, Worker picking up an axe 0%, Log pile full, waiting for carriers 0%
- fisher (59 building-min): Fish pile full, nothing needs it right now 93%, Fishing 4%, Bringing a fish to the pile 3%, Worker picking up a fishing rod 0%, Fish pile full, waiting for carriers 0%
- saw (58 building-min): Output pile full, nothing needs it right now 95%, Sawing planks 4%, Stacking outside 1%, Fetching from the pile 0%, Worker picking up a saw 0%
- house (58 building-min): Idle 100%
- quarry (55 building-min): Stone pile full, nothing needs it right now 89%, Cutting stone 7%, Bringing stone to the pile 4%, Worker picking up a pickaxe 0%, Working 0%
- house2 (100 building-min): Idle 100%
- ironmine (100 building-min): Iron ore pile full, nothing needs it right now 95%, Mining iron ore 1%, Deposit thinning: mining iron ore 1%, Deposit worn out: finding little iron ore 1%, Worker picking up a pickaxe 1%

Building sites, time per state (site-min): Leveling the ground 3, Builders at work 3, Waiting for a digger 1, Waiting for a builder 1.

Build order (placed at min:sec, finished at): guard 0:02→0:34, wood 0:04→0:53, fisher 0:36→1:13, saw 0:54→1:40, house 1:30→2:00, quarry 4:50→5:22, house2 7:00→8:30, ironmine 9:06→9:55, ironmine 9:08→10:09, house2 10:02→11:12.

Orders given: sendUnit 31, place 10, priority 10, profession 7, armyReserve 1. None refused.

People changing jobs: new carrier 50, carrier -> worker 6, geologist -> carrier 3, carrier -> geologist 2, carrier -> explorer 1.

People's orders (477 in all, 469 done): worker rest wood 31, worker gather wood 30, explorer explore 28, worker mine ironmine 28, worker rest fisher 27, worker gather fisher 26, carrier haul log wood -> saw 22, worker rest quarry 22, worker gather quarry 21, worker rest saw 19, worker toCraft saw 18, worker craft saw 18, carrier haul fish fisher -> ironmine 18, worker rest ironmine 18. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Outpost plan: geo 0, unsearched 6, ore --, sites 0, pop 10/10, field 10, posts 0.
- ×5 10:00–50:00 Outpost plan: geo 0, unsearched 45, ore CI, sites 0, pop 60/60, field 9, posts 1.


Script: 1800 turns, 0.1 ms average, worst 5 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 11/1/1331/10/80 | 31/6/2640/10/50 |
| 30 | 11/1/1331/10/80 | 54/6/3262/10/80 |
| 45 | 11/1/1331/10/80 | 59/6/4105/10/80 |
| 60 | 11/1/1331/10/80 | 65/6/4923/10/100 |
| first | - - - - - - | 9 10 16 17 - - |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 92 in vaults.

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 10 10 10 10 10 10 10).

First army orders (game min:sec): 0:00 armyReserve.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 1 min, 2: settlers: No free settlers and every bed taken: build houses.
- 51 min, 10–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 50 min, 11–60: stall: woodcutter: no grown trees in range inside your border 100% of the last 5 minutes.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (4 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 34 min, 27–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 4 | 12 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 70 | 24 | 1331 | 3574 |
| 30 | 4 | 12 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 70 | 24 | 1331 | 4346 |
| 45 | 4 | 12 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 70 | 24 | 1331 | 5080 |
| 60 | 4 | 12 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 70 | 24 | 1331 | 6355 |

At the end: buildings (built+sites) house2 3, hq 1, guard 1, wood 1, fisher 1, saw 1, house 1, quarry 1, forest 1.
People: carrier 70, soldier 9, worker 5, digger 2, builder 2, explorer 1; beds 70. Soldiers: sword 6, bow 3.

Goods produced in the game: stone 26, log 22, plank 22, fish 8.
Goods consumed in the game: stone 36, plank 34, log 22, pick 3, axe 1, saw 1, rod 1, shovel 1.
Goods lost in the game: pick 2.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (59 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (59 building-min): No grown trees in range inside your border 89%, Felling a tree 8%, Bringing a log to the pile 3%, Worker picking up an axe 0%, Log pile full, waiting for carriers 0%
- fisher (59 building-min): Fish pile full, nothing needs it right now 98%, Bringing a fish to the pile 1%, Fishing 1%, Worker picking up a fishing rod 0%, Fish pile full, waiting for carriers 0%
- saw (58 building-min): Output pile full, nothing needs it right now 94%, Sawing planks 5%, Stacking outside 1%, Worker picking up a saw 0%, Fetching from the pile 0%
- house (58 building-min): Idle 100%
- quarry (54 building-min): Stone pile full, nothing needs it right now 87%, Cutting stone 8%, Bringing stone to the pile 4%, Worker picking up a pickaxe 0%, Idle 0%
- house2 (146 building-min): Idle 100%
- forest (48 building-min): No free ground to plant in range inside your border 74%, Planting a sapling 25%, Worker picking up a shovel 1%, Idle 0%, Working 0%

Building sites, time per state (site-min): Builders at work 3, Leveling the ground 3, Waiting for a digger 1, Waiting for a builder 1.

Build order (placed at min:sec, finished at): guard 0:02→0:44, wood 0:04→1:04, fisher 0:46→1:19, saw 1:06→1:41, house 1:30→1:59, quarry 5:08→5:42, house2 7:08→8:11, house2 10:10→11:20, forest 11:02→11:43, house2 13:12→14:11.

Orders given: sendUnit 30, place 10, priority 10, profession 5, armyReserve 1. None refused.

People changing jobs: new carrier 70, carrier -> worker 5, geologist -> carrier 2, carrier -> explorer 1, carrier -> geologist 1.

People's orders (541 in all, 534 done): worker rest forest 90, worker gather forest 89, explorer explore 28, worker rest quarry 27, worker gather quarry 26, worker rest wood 23, worker rest saw 23, worker gather wood 22, worker toCraft saw 22, worker craft saw 22, carrier haul log wood -> saw 22, carrier haul stone quarry -> house2 17, carrier haul plank saw -> house2 10, worker rest fisher 9. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Outpost plan: geo 0, unsearched 4, ore --, sites 0, pop 10/10, field 10, posts 0.
- ×5 10:00–50:00 Outpost plan: geo 0, unsearched 0, ore CI, sites 0, pop 80/80, field 9, posts 1.


Script: 1800 turns, 0.1 ms average, worst 4 ms, 0 over 0.3 s, 0 errors. Orders refused: none.
