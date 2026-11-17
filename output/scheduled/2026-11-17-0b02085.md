# Tournament: scheduled

Game version 224. Written for: scheduled 217.

- scheduled: hearthlands-ai-challenge, commit 0b02085

Maps 20261030, 777, 4242, 31, each twice (sides swapped), up to 60 game minutes (1x). 41 s.

Switches: vault on, banner off, armor off, vet off, gear off.

Each game ends with the script's own game log: what it may know (its own side, and what happened to it or what it saw). Times are game min:sec.

| Opponent | Won | Lost | Undecided |
|---|---|---|---|
| original game NPC | 0 | 0 | 8 |

War and gold over all games (scheduled / opponents): buildings taken 0 / 0, killed 0 / 0, gold at the end (stock + vaults) 0 / 517, stuck towns 7 / 0.

## Games

Each row: buildings / military / land tiles / soldiers / people at the minute shown. First: game minute of the first smelter, smith, weaponsmith, barracks, tower, castle (- = never).

### Map 31: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 13/2/1632/10/30 | 22/6/2898/10/40 |
| 30 | 17/2/1632/23/27 | 25/6/3289/10/40 |
| 45 | 19/3/2274/31/29 | 38/6/3709/10/60 |
| 60 | 19/3/2274/34/26 | 39/6/4124/10/60 |
| first | 13 14 16 17 32 - | 9 10 - - - - |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 31 in vaults.

Soldiers every 5 min: 10 10 10 14 18 23 26 26 31 31 31 34 (original game NPC: 10 10 10 10 10 10 10 10 10 10 10 10).

First army orders (game min:sec): 0:00 armyReserve; 0:36 sendIn 1 soldiers -> building 73; 11:02 sendIn 1 soldiers -> building 142; 16:06 armyTarget sword=7; 16:06 armyTarget spear=5; 16:06 armyTarget bow=4; 18:50 armyTarget sword=6; 18:50 armyTarget bow=3; 25:00 armyTarget sword=8; 25:00 armyTarget spear=6; 25:00 armyTarget bow=4; 25:10 armyTarget sword=6.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 4 min, 1–13: settlers: No free settlers and every bed taken: build houses.
- 34 min, 10–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 7 min, 18–24: stall: weaponsmith: waiting for coal 51% of the last 5 minutes.
- 6 min, 19–24: stall: barracks: waiting for weapons from the weaponsmith 55% of the last 5 minutes.
- 5 min, 29–33: stall: woodcutter: no grown trees in range inside your border 54% of the last 5 minutes.
- 15 min, 46–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 10 | 12 | 10 | 15 | 0 | 0 | 0 | 0 | 0 | 11 | 5 | 6 | 0 | 0 | 0 | 0 | 0 | 14 | 22 | 1632 | 2966 |
| 30 | 10 | 8 | 8 | 16 | 0 | 0 | 0 | 0 | 0 | 26 | 14 | 20 | 0 | 0 | 0 | 0 | 1 | 12 | 54 | 1632 | 2966 |
| 45 | 16 | 8 | 8 | 16 | 0 | 0 | 0 | 0 | 0 | 26 | 14 | 20 | 0 | 0 | 0 | 0 | 0 | 14 | 59 | 2274 | 4130 |
| 60 | 16 | 8 | 8 | 16 | 0 | 0 | 0 | 0 | 0 | 26 | 14 | 20 | 0 | 0 | 0 | 0 | 0 | 11 | 59 | 2274 | 4130 |

At the end: buildings (built+sites) house 4, guard 2, hq 1, wood 1, quarry 1, saw 1, coalmine 1, fisher 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, forest 1, tower 1.
People: soldier 28, carrier 11, worker 10, digger 2, builder 2, explorer 1; beds 40. Soldiers: sword 13, bow 7, spear 8.

Goods produced in the game: fish 154, coal 100, ironore 61, log 55, stone 50, iron 47, plank 43, sword 12, spear 8, bow 4, saw 1, rod 1, hammer 1.
Goods consumed in the game: fish 144, coal 74, stone 60, plank 59, ironore 47, log 43, iron 27, sword 12, spear 8, pick 5, bow 4, hammer 3, axe 1, saw 1, rod 1, shovel 1.
Goods lost in the game: pick 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (108 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (59 building-min): Log pile full, nothing needs it right now 63%, Felling a tree 20%, No grown trees in range inside your border 9%, Bringing a log to the pile 7%, Log pile full, waiting for carriers 2%
- quarry (59 building-min): Stone pile full, nothing needs it right now 82%, Cutting stone 12%, Bringing stone to the pile 4%, Stone pile full, waiting for carriers 1%, Worker picking up a pickaxe 0%
- saw (58 building-min): Output pile full, nothing needs it right now 85%, Sawing planks 9%, Stacking outside 2%, Waiting for logs 1%, Output pile full, waiting for carriers 1%
- coalmine (58 building-min): Coal pile full, nothing needs it right now 62%, Mining coal 20%, Deposit thinning: mining coal 10%, Bringing coal out 5%, Coal pile full, waiting for carriers 1%
- house (157 building-min): Idle 100%
- fisher (57 building-min): Fish pile full, nothing needs it right now 68%, Fishing 17%, Bringing a fish to the pile 12%, Fish pile full, waiting for carriers 2%, Worker picking up a fishing rod 1%
- ironmine (48 building-min): Iron ore pile full, nothing needs it right now 59%, Deposit thinning: mining iron ore 20%, Mining iron ore 11%, Deposit worn out: finding little iron ore 4%, Bringing iron ore out 3%
- smelter (47 building-min): Output pile full, nothing needs it right now 81%, Smelting iron 13%, Stacking outside 3%, Waiting for iron ore 2%, Output pile full, waiting for carriers 2%
- smith (47 building-min): All tool targets met 98%, Waiting for iron 1%, Worker picking up a hammer 0%, Forging fishing rod 0%, Forging hammer 0%
- weaponsmith (45 building-min): All weapon targets met 79%, Waiting for coal 13%, Forging sword 3%, Forging spear 2%, Stacking outside 1%
- barracks (44 building-min): Soldier targets met 78%, Waiting for weapons from the weaponsmith 15%, Weapons on the way 6%, Training soldiers 1%, Idle 0%
- forest (30 building-min): No free ground to plant in range inside your border 56%, Planting a sapling 44%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- tower (29 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%

Building sites, time per state (site-min): Builders at work 5, Leveling the ground 4, Waiting for a digger 2, Waiting for a builder 2, Waiting for materials 0.

Build order (placed at min:sec, finished at): guard 0:00→0:35, wood 0:02→0:54, quarry 0:36→1:14, saw 0:56→1:36, coalmine 1:14→1:56, house 1:36→2:20, fisher 1:58→2:48, guard 10:00→11:00, ironmine 11:14→11:50, smelter 11:50→12:32, smith 12:34→13:10, house 13:12→13:43, weaponsmith 14:20→15:10, barracks 15:18→16:05, house 25:20→25:53, forest 29:00→29:42, tower 30:00→31:17, house 40:20→41:02.

Orders given: sendUnit 44, armyTarget 33, place 18, priority 12, profession 5, sendIn 3, weaponKeep 3, armyReserve 1, fighters 1. None refused.

People changing jobs: new carrier 40, carrier -> soldier 24, carrier -> worker 10, carrier -> geologist 2, geologist -> carrier 2, carrier -> explorer 1, new soldier 1.

People's orders (2358 in all, 2340 done): worker rest fisher 155, worker mine coalmine 154, worker gather fisher 154, worker mine ironmine 120, worker rest coalmine 101, worker rest forest 101, worker gather forest 100, worker eat coalmine 74, carrier haul fish fisher -> ironmine 74, carrier haul fish fisher -> coalmine 72, worker eat ironmine 70, worker rest ironmine 62, worker rest wood 56, worker gather wood 55. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Garrison-first: posts 0 garrison 0, mines 0/0, ore --, carriers 6 idle 6, field 10, sites 1.
- ×5 10:00–50:00 Garrison-first: posts 3 garrison 6, mines 1/1, ore CI, carriers 14 idle 14, field 25, sites 0.


Script: 1800 turns, 0.1 ms average, worst 5 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 31: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 16/2/1624/15/25 | 40/6/3070/11/69 |
| 30 | 17/2/1624/24/26 | 75/13/7681/40/97 |
| 45 | 19/3/2344/31/29 | 84/21/13783/65/105 |
| 60 | 19/3/2344/34/26 | 91/27/18112/82/108 |
| first | 4 5 8 9 32 - | 8 7 12 14 30 28 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 95 in vaults.

Soldiers every 5 min: 10 14 15 20 20 24 27 27 31 31 31 34 (original game NPC: 10 10 11 12 16 40 53 60 65 73 78 82).

First army orders (game min:sec): 0:00 armyReserve; 0:34 sendIn 1 soldiers -> building 74; 8:38 armyTarget sword=5; 8:38 armyTarget spear=4; 8:38 armyTarget bow=3; 9:38 armyTarget sword=4; 9:38 armyTarget spear=3; 11:08 sendIn 1 soldiers -> building 165; 15:00 armyTarget sword=6; 15:00 armyTarget spear=5; 15:28 armyTarget spear=4; 15:30 armyTarget spear=5.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 4 min, 2–16: settlers: No free settlers and every bed taken: build houses.
- 32 min, 10–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 16 min, 10–25: stall: smelter: waiting for iron ore 55% of the last 5 minutes.
- 3 min, 10–12: stall: woodcutter: no grown trees in range inside your border 80% of the last 5 minutes.
- 1 min, 10: stall: weaponsmith: waiting for coal 55% of the last 5 minutes.
- 40 min, 11–60: stall: iron mine: deposit worn out 92% of the last 5 minutes.
- 2 min, 13–14: stall: sawmill: waiting for logs 64% of the last 5 minutes.
- 27 min, 23–60: stall: coal mine: deposit worn out 89% of the last 5 minutes.
- 32 min, 26–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 7 | 8 | 8 | 11 | 0 | 0 | 0 | 0 | 0 | 17 | 0 | 15 | 0 | 0 | 0 | 0 | 0 | 6 | 24 | 1624 | 3492 |
| 30 | 16 | 8 | 8 | 9 | 0 | 0 | 0 | 0 | 0 | 20 | 6 | 20 | 0 | 0 | 0 | 0 | 0 | 9 | 38 | 1624 | 3492 |
| 45 | 16 | 8 | 8 | 7 | 0 | 0 | 0 | 0 | 0 | 26 | 12 | 20 | 0 | 0 | 0 | 0 | 0 | 11 | 49 | 2344 | 4735 |
| 60 | 16 | 8 | 8 | 15 | 0 | 0 | 0 | 0 | 0 | 26 | 13 | 20 | 0 | 0 | 0 | 0 | 0 | 9 | 57 | 2344 | 4735 |

At the end: buildings (built+sites) house 4, guard 2, hq 1, wood 1, quarry 1, saw 1, coalmine 1, ironmine 1, fisher 1, smelter 1, smith 1, weaponsmith 1, barracks 1, forest 1, tower 1.
People: soldier 28, carrier 11, worker 10, digger 2, builder 2, explorer 1; beds 40. Soldiers: sword 13, bow 7, spear 8.

Goods produced in the game: fish 361, coal 100, ironore 60, log 55, stone 50, iron 47, plank 43, sword 12, spear 8, bow 4, saw 1, rod 1, hammer 1.
Goods consumed in the game: fish 352, coal 74, stone 60, plank 59, ironore 47, log 43, iron 27, sword 12, spear 8, pick 5, bow 4, hammer 3, axe 1, saw 1, rod 1, shovel 1.
Goods lost in the game: pick 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (108 building-min): Idle 100%, Soldiers on the way 0%
- wood (59 building-min): Log pile full, nothing needs it right now 67%, Felling a tree 19%, No grown trees in range inside your border 7%, Bringing a log to the pile 6%, Log pile full, waiting for carriers 1%
- quarry (59 building-min): Stone pile full, nothing needs it right now 78%, Cutting stone 14%, Bringing stone to the pile 7%, Stone pile full, waiting for carriers 1%, Worker picking up a pickaxe 0%
- saw (58 building-min): Output pile full, nothing needs it right now 79%, Sawing planks 9%, Waiting for logs 7%, Stacking outside 2%, Output pile full, waiting for carriers 2%
- house (175 building-min): Idle 100%
- coalmine (58 building-min): Deposit worn out: finding little coal 48%, Coal pile full, nothing needs it right now 19%, Deposit thinning: mining coal 17%, Mining coal 8%, Bringing coal out 4%
- ironmine (58 building-min): Deposit worn out: finding little iron ore 67%, Iron ore pile full, nothing needs it right now 17%, Deposit thinning: mining iron ore 4%, Needs meat or fish: mining stopped 3%, Bringing iron ore out 3%
- fisher (57 building-min): Bringing a fish to the pile 43%, Fishing 39%, Fish pile full, nothing needs it right now 17%, No fish in range inside your border 0%, Worker picking up a fishing rod 0%
- smelter (56 building-min): Output pile full, nothing needs it right now 60%, Waiting for iron ore 25%, Smelting iron 11%, Stacking outside 2%, Output pile full, waiting for carriers 1%
- smith (56 building-min): All tool targets met 99%, Worker picking up a hammer 0%, Forging saw 0%, Forging hammer 0%, Forging fishing rod 0%
- weaponsmith (53 building-min): All weapon targets met 89%, Waiting for coal 3%, Forging sword 3%, Forging spear 2%, Stacking outside 1%
- barracks (51 building-min): Soldier targets met 88%, Weapons on the way 8%, Waiting for weapons from the weaponsmith 4%, Training soldiers 1%, Idle 0%
- forest (49 building-min): No free ground to plant in range inside your border 68%, Planting a sapling 32%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- tower (28 building-min): Idle 99%, Soldiers on the way 1%, Waiting for a soldier 0%

Building sites, time per state (site-min): Builders at work 5, Leveling the ground 5, Waiting for a digger 3, Waiting for a builder 2, Waiting for materials 0.

Build order (placed at min:sec, finished at): guard 0:00→0:34, wood 0:02→0:52, quarry 0:34→1:10, saw 0:52→1:32, house 1:10→1:50, coalmine 1:32→2:13, ironmine 1:50→2:28, fisher 2:14→3:11, smelter 2:44→3:42, smith 3:54→4:28, house 4:36→5:10, weaponsmith 6:20→7:07, barracks 7:34→8:37, forest 10:00→10:31, guard 10:02→11:07, house 15:56→16:48, tower 30:00→31:50, house 40:24→41:29.

Orders given: sendUnit 43, armyTarget 27, place 18, priority 12, profession 5, sendIn 3, weaponKeep 3, armyReserve 1, fighters 1. None refused.

People changing jobs: new carrier 40, carrier -> soldier 24, carrier -> worker 10, carrier -> geologist 2, geologist -> carrier 2, new soldier 1, carrier -> explorer 1.

People's orders (3433 in all, 3413 done): worker rest fisher 362, worker gather fisher 361, worker mine coalmine 246, worker mine ironmine 220, carrier haul fish fisher -> ironmine 178, worker eat coalmine 176, worker eat ironmine 176, carrier haul fish fisher -> coalmine 176, worker rest forest 127, worker gather forest 126, worker rest coalmine 101, worker rest ironmine 64, worker rest wood 56, worker gather wood 55. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Garrison-first: posts 0 garrison 0, mines 0/0, ore --, carriers 6 idle 6, field 10, sites 1.
- ×5 10:00–50:00 Garrison-first: posts 3 garrison 6, mines 1/1, ore CI, carriers 14 idle 14, field 25, sites 0.


Script: 1800 turns, 0.1 ms average, worst 6 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 19/2/1655/13/27 | 34/6/2847/10/60 |
| 30 | 20/2/1655/21/29 | 58/8/4979/20/80 |
| 45 | 20/2/1655/25/25 | 79/19/11133/54/86 |
| 60 | 20/2/1655/29/21 | 89/28/16327/77/103 |
| first | 4 5 8 9 - - | 7 8 17 17 27 36 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 1 in stock + 56 in vaults.

Soldiers every 5 min: 10 13 13 19 19 21 21 21 25 25 25 29 (original game NPC: 10 10 10 10 13 20 32 42 54 67 74 77).

First army orders (game min:sec): 0:00 armyReserve; 0:30 sendIn 1 soldiers -> building 73; 8:02 armyTarget sword=5; 8:02 armyTarget spear=4; 8:02 armyTarget bow=3; 8:48 armyTarget sword=4; 8:48 armyTarget spear=3; 8:52 armyTarget sword=5; 8:52 armyTarget spear=4; 9:46 armyTarget sword=4; 9:46 armyTarget spear=3; 11:34 sendIn 1 soldiers -> building 169.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 6 min, 2–59: settlers: No free settlers and every bed taken: build houses.
- 7 min, 8–14: stall: iron mine: needs meat or fish 69% of the last 5 minutes.
- 9 min, 8–16: stall: smelter: waiting for iron ore 72% of the last 5 minutes.
- 3 min, 9–11: stall: weaponsmith: waiting for coal 52% of the last 5 minutes.
- 42 min, 11–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 48 min, 13–60: stall: water hut: no shore water in range inside your border 100% of the last 5 minutes.
- 42 min, 15–60: stall: sawmill: waiting for logs 100% of the last 5 minutes.
- 4 min, 16–19: stall: pig farm: waiting for water 97% of the last 5 minutes.
- 3 min, 17–19: stall: butcher: waiting for pigs 96% of the last 5 minutes.
- 41 min, 20–60: stall: woodcutter: no grown trees in range inside your border 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 0 | 3 | 5 | 5 | 0 | 0 | 0 | 14 | 0 | 22 | 0 | 19 | 0 | 0 | 0 | 1 | 0 | 8 | 31 | 1655 | 4031 |
| 30 | 0 | 0 | 8 | 16 | 0 | 0 | 0 | 14 | 0 | 26 | 14 | 20 | 0 | 0 | 0 | 0 | 0 | 11 | 52 | 1655 | 4031 |
| 45 | 0 | 0 | 8 | 11 | 0 | 0 | 0 | 14 | 0 | 24 | 14 | 20 | 0 | 0 | 0 | 0 | 0 | 6 | 45 | 1655 | 4031 |
| 60 | 0 | 0 | 8 | 5 | 0 | 0 | 0 | 14 | 0 | 20 | 14 | 20 | 0 | 0 | 0 | 0 | 0 | 1 | 38 | 1655 | 4031 |

At the end: buildings (built+sites) house 3, guard 2, hq 1, wood 1, quarry 1, saw 1, coalmine 1, ironmine 1, fisher 1, smelter 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, pigfarm 1, butcher 1.
People: soldier 27, worker 13, carrier 3, digger 2, builder 2, explorer 1; beds 30. Soldiers: sword 12, bow 7, spear 8.

Goods produced in the game: fish 197, coal 86, stone 61, ironore 57, plank 43, iron 43, log 39, grain 14, spear 8, sword 7, bow 4, saw 1, rod 1, hammer 1, axe 1.
Goods consumed in the game: fish 198, stone 71, plank 67, coal 66, log 43, ironore 43, iron 23, spear 8, sword 7, pick 5, bow 4, hammer 3, axe 2, saw 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (108 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (59 building-min): No grown trees in range inside your border 80%, Felling a tree 14%, Bringing a log to the pile 5%, Worker picking up an axe 0%, Working 0%
- quarry (59 building-min): Stone pile full, nothing needs it right now 69%, Cutting stone 17%, Bringing stone to the pile 8%, Stone pile full, waiting for carriers 5%, Worker picking up a pickaxe 0%
- saw (59 building-min): Waiting for logs 83%, Sawing planks 9%, Output pile full, nothing needs it right now 5%, Stacking outside 2%, Output pile full, waiting for carriers 1%
- house (157 building-min): Idle 100%
- coalmine (58 building-min): Coal pile full, nothing needs it right now 38%, Deposit thinning: mining coal 25%, Deposit worn out: finding little coal 18%, Mining coal 12%, Bringing coal out 4%
- ironmine (58 building-min): Iron ore pile full, nothing needs it right now 46%, Needs meat or fish: mining stopped 23%, Deposit thinning: mining iron ore 12%, Deposit worn out: finding little iron ore 9%, Mining iron ore 7%
- fisher (57 building-min): Fish pile full, nothing needs it right now 34%, Fishing 33%, Bringing a fish to the pile 32%, No fish in range inside your border 1%, Worker picking up a fishing rod 0%
- smelter (57 building-min): Output pile full, nothing needs it right now 59%, Waiting for iron ore 24%, Smelting iron 10%, Output pile full, waiting for carriers 5%, Stacking outside 2%
- smith (55 building-min): All tool targets met 98%, Waiting for coal 1%, Worker picking up a hammer 0%, Forging saw 0%, Forging hammer 0%
- weaponsmith (53 building-min): All weapon targets met 90%, Waiting for coal 4%, Forging spear 2%, Forging sword 2%, Stacking outside 1%
- barracks (52 building-min): Soldier targets met 88%, Waiting for weapons from the weaponsmith 6%, Weapons on the way 5%, Training soldiers 0%
- farm (50 building-min): Grain pile full, nothing needs it right now 89%, Grain pile full, waiting for carriers 7%, Sowing a field 2%, Harvesting grain 1%, Bringing grain to the pile 1%
- waterhut (49 building-min): No shore water in range inside your border 100%, Working 0%
- pigfarm (46 building-min): Waiting for water 100%, Waiting for grain and water 0%, Working 0%
- butcher (45 building-min): Waiting for pigs 100%, Worker picking up an axe 0%, Working 0%

Building sites, time per state (site-min): Builders at work 6, Leveling the ground 4, Waiting for a builder 2, Waiting for a digger 2, Waiting for materials 0.

Build order (placed at min:sec, finished at): guard 0:00→0:29, wood 0:02→0:50, quarry 0:30→1:07, saw 0:52→1:27, house 1:08→1:45, coalmine 1:28→2:07, ironmine 1:46→2:22, fisher 2:08→2:55, smelter 2:44→3:26, smith 3:52→4:33, house 4:34→5:12, weaponsmith 6:08→7:00, barracks 7:18→8:01, farm 8:46→9:45, waterhut 10:00→10:36, guard 11:00→11:34, pigfarm 12:58→13:59, butcher 14:10→14:51, house 15:22→15:53.

Orders given: sendUnit 43, armyTarget 39, place 19, priority 12, profession 5, weaponKeep 3, sendIn 2, armyReserve 1. None refused.

People changing jobs: new carrier 30, carrier -> soldier 19, carrier -> worker 13, carrier -> geologist 2, new soldier 2, geologist -> carrier 2, carrier -> explorer 1.

People's orders (2394 in all, 2374 done): worker rest fisher 198, worker mine coalmine 197, worker gather fisher 197, worker eat coalmine 133, carrier haul fish fisher -> coalmine 133, worker mine ironmine 106, worker rest coalmine 87, worker rest ironmine 70, worker eat ironmine 65, carrier haul fish fisher -> ironmine 64, worker rest quarry 62, worker gather quarry 61, carrier haul coal coalmine -> smelter 49, carrier haul ironore ironmine -> smelter 49. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Garrison-first: posts 0 garrison 0, mines 0/0, ore --, carriers 6 idle 6, field 10, sites 1.
- ×5 10:00–50:00 Garrison-first: posts 2 garrison 2, mines 1/1, ore CI, carriers 7 idle 7, field 23, sites 0.


Script: 1800 turns, 0.1 ms average, worst 6 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 11/2/1657/10/20 | 37/6/2795/10/52 |
| 30 | 16/2/1660/10/30 | 69/12/5597/21/89 |
| 45 | 16/2/1660/13/27 | 80/20/11754/67/103 |
| 60 | 18/3/2354/21/29 | 88/28/16714/70/100 |
| first | 15 17 19 20 58 - | 8 9 16 16 26 31 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 1 in stock + 70 in vaults.

Soldiers every 5 min: 10 10 10 10 10 10 10 10 13 17 19 21 (original game NPC: 10 10 10 10 15 21 43 62 67 67 70 70).

First army orders (game min:sec): 0:00 armyReserve; 0:34 sendIn 1 soldiers -> building 74; 10:42 sendIn 1 soldiers -> building 143; 19:32 armyTarget sword=7; 19:32 armyTarget spear=5; 19:32 armyTarget bow=4; 25:00 armyTarget sword=8; 25:00 armyTarget spear=6; 25:00 armyTarget bow=6; 40:00 armyTarget sword=10; 40:00 armyTarget spear=8; 40:38 armyTarget sword=9.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 31 min, 10–56: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 3 min, 12–14: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 1 min, 15: settlers: No free settlers and every bed taken: build houses.
- 28 min, 17–60: stall: coal mine: deposit worn out 93% of the last 5 minutes.
- 3 min, 18–20: stall: smelter: waiting for coal 67% of the last 5 minutes.
- 15 min, 19–33: stall: smith: waiting for coal 94% of the last 5 minutes.
- 38 min, 21–60: stall: weaponsmith: waiting for coal 93% of the last 5 minutes.
- 27 min, 22–60: stall: barracks: waiting for weapons from the weaponsmith 93% of the last 5 minutes.
- 4 min, 25–28: stall: woodcutter: no grown trees in range inside your border 100% of the last 5 minutes.
- 14 min, 40–57: stall: forest: no free ground to plant in range inside your border 96% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 15 | 8 | 5 | 16 | 0 | 0 | 0 | 0 | 0 | 1 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 30 | 1657 | 3577 |
| 30 | 13 | 8 | 8 | 15 | 0 | 0 | 0 | 0 | 0 | 4 | 14 | 20 | 0 | 0 | 0 | 0 | 0 | 14 | 43 | 1660 | 3577 |
| 45 | 16 | 8 | 8 | 16 | 0 | 0 | 0 | 0 | 0 | 12 | 13 | 20 | 0 | 0 | 1 | 0 | 0 | 9 | 50 | 1660 | 3577 |
| 60 | 16 | 8 | 8 | 16 | 0 | 0 | 0 | 0 | 0 | 12 | 13 | 20 | 0 | 0 | 1 | 0 | 0 | 11 | 50 | 2354 | 4808 |

At the end: buildings (built+sites) house 3, guard 2, hq 1, wood 1, quarry 1, saw 1, ironmine 1, fisher 1, coalmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, forest 1, tower 1.
People: soldier 16, carrier 14, worker 10, digger 2, builder 2, explorer 1; beds 30. Soldiers: sword 7, bow 4, spear 5.

Goods produced in the game: fish 230, coal 62, log 52, ironore 48, stone 47, plank 40, iron 35, sword 6, spear 5, hammer 1, saw 1, rod 1, bow 1.
Goods consumed in the game: fish 220, stone 57, plank 56, coal 50, log 40, ironore 35, iron 15, sword 5, spear 5, pick 4, hammer 3, axe 1, saw 1, rod 1, shovel 1, bow 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (109 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (59 building-min): Log pile full, nothing needs it right now 57%, Felling a tree 19%, No grown trees in range inside your border 16%, Bringing a log to the pile 7%, Log pile full, waiting for carriers 1%
- quarry (59 building-min): Stone pile full, nothing needs it right now 79%, Cutting stone 13%, Bringing stone to the pile 7%, Stone pile full, waiting for carriers 0%, Worker picking up a pickaxe 0%
- saw (59 building-min): Output pile full, nothing needs it right now 88%, Sawing planks 9%, Stacking outside 2%, Output pile full, waiting for carriers 1%, Fetching from the pile 0%
- house (112 building-min): Idle 100%
- ironmine (48 building-min): Iron ore pile full, nothing needs it right now 73%, Deposit thinning: mining iron ore 13%, Mining iron ore 7%, Bringing iron ore out 3%, Deposit worn out: finding little iron ore 1%
- fisher (48 building-min): Fish pile full, nothing needs it right now 47%, Fishing 27%, Bringing a fish to the pile 24%, Fish pile full, waiting for carriers 1%, Worker picking up a fishing rod 1%
- coalmine (46 building-min): Deposit worn out: finding little coal 92%, Bringing coal out 3%, Came back empty-handed 2%, Fetching food 2%, Worker picking up a pickaxe 1%
- smelter (45 building-min): Output pile full, nothing needs it right now 64%, Waiting for coal 22%, Smelting iron 10%, Stacking outside 2%, Output pile full, waiting for carriers 1%
- smith (44 building-min): All tool targets met 60%, Waiting for coal 38%, Worker picking up a hammer 0%, Forging saw 0%, Forging fishing rod 0%
- weaponsmith (42 building-min): Waiting for coal 95%, Forging sword 2%, Forging spear 1%, Stacking outside 1%, Worker picking up a hammer 0%
- barracks (40 building-min): Waiting for weapons from the weaponsmith 95%, Weapons on the way 4%, Training soldiers 0%
- forest (34 building-min): No free ground to plant in range inside your border 69%, Planting a sapling 31%, Worker picking up a shovel 0%, Working 0%
- tower (2 building-min): Idle 97%, Soldiers on the way 3%

Building sites, time per state (site-min): Builders at work 5, Leveling the ground 4, Waiting for a digger 2, Waiting for a builder 2, Waiting for materials 0.

Build order (placed at min:sec, finished at): guard 0:00→0:33, wood 0:02→0:47, quarry 0:34→1:09, saw 0:48→1:30, house 1:30→2:03, guard 10:00→10:40, ironmine 11:16→11:47, fisher 11:18→12:17, coalmine 13:26→14:04, smelter 14:04→14:55, house 14:56→15:35, smith 15:42→16:27, weaponsmith 17:30→18:21, barracks 18:50→19:31, forest 25:00→25:40, house 50:06→50:44, tower 56:18→57:36.

Orders given: sendUnit 42, armyTarget 29, place 17, priority 12, sendIn 3, profession 3, weaponKeep 3, armyReserve 1, fighters 1. None refused.

People changing jobs: new carrier 30, carrier -> soldier 11, carrier -> worker 10, new soldier 2, carrier -> explorer 1, carrier -> geologist 1, geologist -> carrier 1.

People's orders (2410 in all, 2389 done): worker rest fisher 231, worker gather fisher 230, worker mine coalmine 222, carrier haul fish fisher -> coalmine 179, worker eat coalmine 175, worker mine ironmine 81, worker rest forest 80, worker gather forest 79, worker rest coalmine 63, worker rest wood 53, worker gather wood 52, worker rest ironmine 49, worker rest quarry 48, worker gather quarry 47. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Garrison-first: posts 1 garrison 2, mines 0/0, ore --, carriers 12 idle 12, field 8, sites 1.
- ×4 20:00–50:00 Garrison-first: posts 2 garrison 3, mines 1/1, ore CI, carriers 8 idle 5, field 14, sites 0.


Script: 1800 turns, 0.1 ms average, worst 7 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 16/2/1677/15/25 | 31/6/2732/10/50 |
| 30 | 17/2/1677/24/26 | 38/6/3118/10/60 |
| 45 | 19/3/2393/31/29 | 51/6/3920/12/68 |
| 60 | 19/3/2393/34/26 | 69/10/5984/43/77 |
| first | 6 7 8 10 32 - | 10 11 13 13 46 - |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 4 in stock + 68 in vaults.

Soldiers every 5 min: 10 10 15 21 21 24 26 26 31 31 31 34 (original game NPC: 10 10 10 10 10 10 10 10 12 23 29 43).

First army orders (game min:sec): 0:00 armyReserve; 0:58 sendIn 1 soldiers -> building 73; 9:30 armyTarget sword=5; 9:30 armyTarget spear=4; 9:30 armyTarget bow=3; 12:44 armyTarget sword=4; 12:44 armyTarget spear=3; 14:10 sendIn 1 soldiers -> building 165; 15:00 armyTarget sword=6; 15:00 armyTarget spear=5; 15:20 armyTarget sword=5; 15:20 armyTarget spear=4.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 5 min, 2–17: settlers: No free settlers and every bed taken: build houses.
- 4 min, 9–12: stall: smith: waiting for coal 69% of the last 5 minutes.
- 5 min, 10–14: stall: weaponsmith: waiting for coal 62% of the last 5 minutes.
- 2 min, 12–13: stall: barracks: waiting for weapons from the weaponsmith 79% of the last 5 minutes.
- 30 min, 13–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 13–20: stall: sawmill: waiting for logs 61% of the last 5 minutes.
- 5 min, 14–18: stall: woodcutter: no grown trees in range inside your border 61% of the last 5 minutes.
- 31 min, 30–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 3 min, 58–60: stall: iron mine: deposit worn out 52% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 0 | 2 | 8 | 15 | 0 | 0 | 0 | 0 | 0 | 21 | 14 | 20 | 0 | 0 | 0 | 0 | 0 | 9 | 39 | 1677 | 3237 |
| 30 | 16 | 8 | 8 | 16 | 0 | 0 | 0 | 0 | 0 | 26 | 14 | 20 | 0 | 0 | 0 | 0 | 1 | 11 | 60 | 1677 | 3253 |
| 45 | 16 | 8 | 8 | 16 | 0 | 0 | 0 | 0 | 0 | 26 | 14 | 20 | 0 | 0 | 0 | 0 | 0 | 14 | 59 | 2393 | 4027 |
| 60 | 16 | 8 | 8 | 16 | 0 | 0 | 0 | 0 | 0 | 26 | 14 | 20 | 0 | 0 | 0 | 0 | 0 | 11 | 59 | 2393 | 4027 |

At the end: buildings (built+sites) house 4, guard 2, hq 1, wood 1, quarry 1, saw 1, ironmine 1, fisher 1, coalmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, forest 1, tower 1.
People: soldier 28, carrier 11, worker 10, digger 2, builder 2, explorer 1; beds 40. Soldiers: sword 13, bow 7, spear 8.

Goods produced in the game: fish 141, coal 100, ironore 61, log 55, stone 50, iron 47, plank 43, sword 12, spear 8, bow 4, hammer 1, saw 1, rod 1.
Goods consumed in the game: fish 131, coal 74, stone 60, plank 59, ironore 47, log 43, iron 27, sword 12, spear 8, pick 5, bow 4, hammer 3, axe 1, saw 1, rod 1, shovel 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (105 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (59 building-min): Log pile full, nothing needs it right now 56%, Felling a tree 22%, No grown trees in range inside your border 11%, Bringing a log to the pile 10%, Log pile full, waiting for carriers 1%
- quarry (58 building-min): Stone pile full, nothing needs it right now 78%, Cutting stone 15%, Bringing stone to the pile 6%, Stone pile full, waiting for carriers 1%, Worker picking up a pickaxe 0%
- saw (58 building-min): Output pile full, nothing needs it right now 69%, Waiting for logs 16%, Sawing planks 9%, Output pile full, waiting for carriers 3%, Stacking outside 2%
- house (170 building-min): Idle 100%
- ironmine (57 building-min): Iron ore pile full, nothing needs it right now 66%, Deposit thinning: mining iron ore 14%, Mining iron ore 8%, Deposit worn out: finding little iron ore 6%, Bringing iron ore out 3%
- fisher (57 building-min): Fish pile full, nothing needs it right now 75%, Fishing 12%, Bringing a fish to the pile 8%, Fish pile full, waiting for carriers 5%, Worker picking up a fishing rod 0%
- coalmine (55 building-min): Coal pile full, nothing needs it right now 65%, Mining coal 24%, Bringing coal out 5%, Deposit thinning: mining coal 4%, Coal pile full, waiting for carriers 1%
- smelter (54 building-min): Output pile full, nothing needs it right now 83%, Smelting iron 11%, Stacking outside 2%, Output pile full, waiting for carriers 2%, Waiting for iron ore 1%
- smith (54 building-min): All tool targets met 91%, Waiting for coal 7%, Worker picking up a hammer 0%, Waiting for coal and iron 0%, Forging hammer 0%
- weaponsmith (52 building-min): All weapon targets met 84%, Waiting for coal 8%, Forging sword 3%, Forging spear 2%, Stacking outside 1%
- barracks (51 building-min): Soldier targets met 83%, Waiting for weapons from the weaponsmith 9%, Weapons on the way 7%, Training soldiers 1%
- forest (45 building-min): No free ground to plant in range inside your border 71%, Planting a sapling 28%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- tower (29 building-min): Idle 99%, Soldiers on the way 1%

Building sites, time per state (site-min): Builders at work 5, Leveling the ground 4, Waiting for a digger 3, Waiting for a builder 3, Waiting for materials 1.

Build order (placed at min:sec, finished at): guard 0:00→0:58, wood 0:02→1:19, quarry 0:58→1:35, saw 1:20→1:58, house 1:36→2:15, ironmine 1:58→3:13, fisher 2:16→2:57, coalmine 4:00→4:34, smelter 4:34→5:32, smith 5:32→6:16, weaponsmith 6:48→7:38, house 7:44→8:21, barracks 8:46→9:29, guard 13:00→14:09, forest 14:00→14:59, house 16:44→17:26, tower 30:00→31:04, house 40:26→41:34.

Orders given: armyTarget 51, sendUnit 44, place 18, priority 12, profession 5, sendIn 3, weaponKeep 3, armyReserve 1, fighters 1. None refused.

People changing jobs: new carrier 40, carrier -> soldier 24, carrier -> worker 10, carrier -> geologist 2, geologist -> carrier 2, carrier -> explorer 1, new soldier 1.

People's orders (2283 in all, 2265 done): worker rest fisher 142, worker gather fisher 141, worker mine coalmine 139, worker mine ironmine 110, worker rest coalmine 101, worker rest forest 100, worker gather forest 99, carrier haul fish fisher -> coalmine 68, worker eat ironmine 67, carrier haul fish fisher -> ironmine 65, worker eat coalmine 64, worker rest ironmine 62, worker rest wood 56, worker gather wood 55. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Garrison-first: posts 0 garrison 0, mines 0/0, ore --, carriers 6 idle 6, field 10, sites 1.
- ×5 10:00–50:00 Garrison-first: posts 3 garrison 6, mines 1/1, ore CI, carriers 14 idle 14, field 25, sites 0.


Script: 1800 turns, 0.1 ms average, worst 6 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 7/2/1622/10/20 | 23/6/2564/10/40 |
| 30 | 7/2/1622/10/20 | 25/6/2964/10/40 |
| 45 | 7/2/1622/10/20 | 27/6/3353/10/40 |
| 60 | 7/2/1622/10/20 | 52/11/6099/20/70 |
| first | - - - - - - | 42 44 48 50 - - |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 9 in vaults.

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 10 10 10 10 10 13 20).

First army orders (game min:sec): 0:00 armyReserve; 0:40 sendIn 1 soldiers -> building 74; 10:58 sendIn 1 soldiers -> building 142.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 1 min, 1: settlers: No free settlers and every bed taken: build houses.
- 42 min, 10–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (90 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 19 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 12 | 24 | 1622 | 3329 |
| 30 | 16 | 19 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 12 | 24 | 1622 | 3329 |
| 45 | 16 | 19 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 12 | 24 | 1622 | 3329 |
| 60 | 16 | 19 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 12 | 24 | 1622 | 3329 |

At the end: buildings (built+sites) guard 2, hq 1, wood 1, quarry 1, saw 1, house 1.
People: carrier 12, soldier 7, worker 3, digger 2, builder 2, explorer 1; beds 10. Soldiers: sword 4, bow 3.

Goods produced in the game: log 22, plank 10, stone 8.
Goods consumed in the game: stone 18, plank 15, log 10, axe 1, saw 1, pick 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (108 building-min): Idle 100%, Soldiers on the way 0%
- wood (59 building-min): Log pile full, nothing needs it right now 90%, Felling a tree 7%, Bringing a log to the pile 2%, Worker picking up an axe 0%, Working 0%
- quarry (59 building-min): Stone pile full, nothing needs it right now 97%, Cutting stone 2%, Bringing stone to the pile 1%, Worker picking up a pickaxe 0%, Working 0%
- saw (58 building-min): Output pile full, nothing needs it right now 97%, Sawing planks 2%, Stacking outside 0%, Worker picking up a saw 0%, Fetching from the pile 0%
- house (58 building-min): Idle 100%

Building sites, time per state (site-min): Leveling the ground 1, Builders at work 1, Waiting for a digger 1, Waiting for a builder 1.

Build order (placed at min:sec, finished at): guard 0:00→0:39, wood 0:02→0:57, quarry 0:40→1:18, saw 0:58→1:38, house 1:38→2:09, guard 10:00→10:58.

Orders given: sendUnit 42, place 6, priority 5, sendIn 2, armyReserve 1, profession 1. None refused.

People changing jobs: new carrier 10, carrier -> worker 3, carrier -> explorer 1, new soldier 1.

People's orders (221 in all, 213 done): explorer explore 42, worker rest wood 23, worker gather wood 22, carrier haul log wood -> saw 14, worker rest saw 11, worker toCraft saw 10, worker craft saw 10, worker rest quarry 9, worker gather quarry 8, carrier haul stone pile -> guard 6, digger dig guard 4, builder build guard 4, soldier garrison guard 4, carrier haul stone pile -> saw 4. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Garrison-first: posts 2 garrison 3, mines 0/0, ore --, carriers 12 idle 12, field 7, sites 0.


Script: 1800 turns, 0.1 ms average, worst 5 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 18/2/1677/11/29 | 21/6/2997/10/40 |
| 30 | 21/2/1696/17/43 | 41/6/3429/10/60 |
| 45 | 22/3/2409/24/36 | 54/6/3905/10/80 |
| 60 | 22/3/2409/26/34 | 65/8/5078/14/104 |
| first | 5 5 8 9 41 - | 8 8 26 27 60 60 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 119 in vaults.

Soldiers every 5 min: 10 10 11 17 17 17 19 21 24 25 25 26 (original game NPC: 10 10 10 10 10 10 10 10 10 10 10 14).

First army orders (game min:sec): 0:00 armyReserve; 0:42 sendIn 1 soldiers -> building 73; 9:00 armyTarget sword=5; 9:00 armyTarget spear=4; 9:00 armyTarget bow=3; 9:50 armyTarget sword=4; 9:50 armyTarget spear=3; 9:56 armyTarget sword=5; 9:56 armyTarget spear=4; 12:46 sendIn 1 soldiers -> building 161; 13:42 armyTarget sword=4; 13:42 armyTarget spear=3.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 7 min, 2–23: settlers: No free settlers and every bed taken: build houses.
- 27 min, 6–46: stall: fisher: no fish in range inside your border 88% of the last 5 minutes.
- 11 min, 7–17: stall: iron mine: needs meat or fish 88% of the last 5 minutes.
- 8 min, 9–18: stall: smelter: waiting for iron ore 81% of the last 5 minutes.
- 38 min, 10–60: stall: weaponsmith: waiting for coal 97% of the last 5 minutes.
- 23 min, 11–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 42 min, 11–60: stall: barracks: waiting for weapons from the weaponsmith 96% of the last 5 minutes.
- 3 min, 18–20: stall: woodcutter: no grown trees in range inside your border 98% of the last 5 minutes.
- 5 min, 19–23: stall: sawmill: waiting for logs 84% of the last 5 minutes.
- 27 min, 31–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 0 | 8 | 4 | 0 | 0 | 0 | 8 | 9 | 0 | 15 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 1 | 20 | 1677 | 3274 |
| 30 | 16 | 8 | 8 | 3 | 0 | 12 | 14 | 14 | 0 | 10 | 14 | 20 | 0 | 0 | 0 | 0 | 0 | 20 | 76 | 1696 | 3280 |
| 45 | 16 | 8 | 8 | 2 | 0 | 12 | 14 | 14 | 0 | 11 | 13 | 20 | 0 | 0 | 0 | 0 | 0 | 15 | 75 | 2409 | 4269 |
| 60 | 16 | 8 | 8 | 0 | 0 | 12 | 14 | 14 | 0 | 13 | 14 | 20 | 0 | 0 | 0 | 0 | 0 | 14 | 76 | 2409 | 4269 |

At the end: buildings (built+sites) guard 2, house 2, hq 1, wood 1, quarry 1, saw 1, coalmine 1, ironmine 1, fisher 1, smelter 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, pigfarm 1, butcher 1, forest 1, house2 1, tower 1.
People: soldier 20, carrier 15, worker 14, digger 2, builder 2, explorer 1; beds 40. Soldiers: sword 10, bow 5, spear 5.

Goods produced in the game: fish 87, log 73, coal 73, water 71, grain 71, stone 70, plank 61, pig 57, ironore 54, meat 43, iron 40, sword 9, spear 5, bow 2, saw 1, rod 1, hammer 1, axe 1.
Goods consumed in the game: fish 93, stone 80, plank 77, log 61, coal 60, water 57, grain 57, pig 43, ironore 40, meat 31, iron 20, sword 9, pick 5, spear 5, hammer 3, axe 2, bow 2, saw 1, rod 1, scythe 1, shovel 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (107 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (59 building-min): Log pile full, nothing needs it right now 55%, Felling a tree 25%, No grown trees in range inside your border 12%, Bringing a log to the pile 8%, Worker picking up an axe 0%
- quarry (59 building-min): Stone pile full, nothing needs it right now 60%, Cutting stone 22%, Bringing stone to the pile 11%, Stone pile full, waiting for carriers 7%, Worker picking up a pickaxe 0%
- saw (58 building-min): Output pile full, nothing needs it right now 69%, Sawing planks 13%, Waiting for logs 13%, Stacking outside 3%, Output pile full, waiting for carriers 1%
- house (112 building-min): Idle 100%
- coalmine (58 building-min): Needs bread or fish: mining stopped 58%, Deposit thinning: mining coal 21%, Deposit worn out: finding little coal 8%, Mining coal 7%, Bringing coal out 3%
- ironmine (57 building-min): Iron ore pile full, nothing needs it right now 37%, Needs meat or fish: mining stopped 20%, Deposit worn out: finding little iron ore 19%, Deposit thinning: mining iron ore 9%, Mining iron ore 6%
- fisher (57 building-min): No fish in range inside your border 91%, Fishing 5%, Bringing a fish to the pile 3%, Worker picking up a fishing rod 0%, Working 0%
- smelter (56 building-min): Output pile full, nothing needs it right now 59%, Waiting for iron ore 28%, Smelting iron 9%, Stacking outside 2%, Waiting for coal 1%
- smith (55 building-min): All tool targets met 98%, Waiting for coal 0%, Worker picking up a hammer 0%, Forging fishing rod 0%, Forging hammer 0%
- weaponsmith (52 building-min): Waiting for coal 89%, Waiting for iron 3%, All weapon targets met 3%, Forging sword 2%, Forging spear 1%
- barracks (51 building-min): Waiting for weapons from the weaponsmith 93%, Weapons on the way 6%, Training soldiers 0%, Soldier targets met 0%, Idle 0%
- farm (49 building-min): Grain pile full, nothing needs it right now 72%, Sowing a field 11%, Harvesting grain 7%, Grain pile full, waiting for carriers 6%, Bringing grain to the pile 4%
- waterhut (48 building-min): Water pile full, nothing needs it right now 66%, Bringing water to the pile 17%, Fetching water 14%, Water pile full, waiting for carriers 3%, Idle 0%
- pigfarm (45 building-min): Output pile full, nothing needs it right now 66%, Raising a pig 29%, Stacking outside 3%, Output pile full, waiting for carriers 1%, Fetching from the pile 0%
- butcher (44 building-min): Output pile full, nothing needs it right now 77%, Butchering 7%, Output pile full, waiting for carriers 7%, Waiting for pigs 5%, Stacking outside 3%
- forest (41 building-min): No free ground to plant in range inside your border 81%, Planting a sapling 18%, Worker picking up a shovel 1%, Idle 0%, Working 0%
- house2 (37 building-min): Idle 100%
- tower (20 building-min): Idle 99%, Soldiers on the way 1%

Building sites, time per state (site-min): Builders at work 6, Leveling the ground 6, Waiting for a builder 3, Waiting for a digger 3.

Build order (placed at min:sec, finished at): guard 0:00→0:41, wood 0:02→0:59, quarry 0:42→1:22, saw 1:00→1:43, house 1:22→1:59, coalmine 1:44→2:26, ironmine 2:00→2:41, fisher 2:26→3:29, smelter 3:12→4:02, smith 4:24→4:59, house 5:08→5:39, weaponsmith 6:54→7:50, barracks 8:12→8:59, farm 9:48→10:55, waterhut 10:56→11:39, guard 11:52→12:44, pigfarm 13:40→14:50, butcher 14:50→15:46, forest 18:00→18:45, house2 21:18→22:50, tower 39:26→40:26.

Orders given: armyTarget 79, sendUnit 45, place 21, priority 12, profession 5, sendIn 3, weaponKeep 3, armyReserve 1, fighters 1. None refused.

People changing jobs: new carrier 40, carrier -> soldier 16, carrier -> worker 14, carrier -> geologist 2, geologist -> carrier 2, new soldier 1, carrier -> explorer 1.

People's orders (3084 in all, 3061 done): worker rest farm 151, worker gather farm 150, worker mine coalmine 146, worker rest coalmine 105, worker rest fisher 88, worker eat coalmine 87, worker gather fisher 87, carrier haul fish fisher -> coalmine 83, worker mine ironmine 79, worker rest wood 74, worker gather wood 73, worker rest waterhut 72, worker rest quarry 71, worker gather waterhut 71. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Garrison-first: posts 0 garrison 0, mines 0/0, ore --, carriers 6 idle 6, field 10, sites 1.
- ×5 10:00–50:00 Garrison-first: posts 3 garrison 6, mines 1/1, ore CI, carriers 16 idle 14, field 19, sites 0.


Script: 1800 turns, 0.1 ms average, worst 6 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 13/2/1657/10/30 | 29/6/2647/10/47 |
| 30 | 19/2/1660/12/28 | 53/7/3608/11/79 |
| 45 | 21/2/1660/19/31 | 53/7/4404/11/79 |
| 60 | 23/3/2429/25/35 | 63/8/6088/16/94 |
| first | 13 14 16 18 54 - | 9 10 15 17 - 56 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults. original game NPC: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 63 in vaults.

Soldiers every 5 min: 10 10 10 10 11 12 13 18 19 20 24 25 (original game NPC: 10 10 10 11 11 11 11 11 11 11 14 16).

First army orders (game min:sec): 0:00 armyReserve; 0:36 sendIn 1 soldiers -> building 74; 10:56 sendIn 1 soldiers -> building 144; 17:44 armyTarget sword=7; 17:44 armyTarget spear=5; 17:44 armyTarget bow=4; 25:00 armyTarget sword=8; 25:00 armyTarget spear=6; 25:00 armyTarget bow=6; 25:16 armyTarget bow=4; 26:02 armyTarget sword=4; 26:02 armyTarget spear=3.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 5 min, 1–53: settlers: No free settlers and every bed taken: build houses.
- 21 min, 14–58: stall: iron mine: deposit worn out 94% of the last 5 minutes.
- 19 min, 15–56: stall: smelter: waiting for iron ore 87% of the last 5 minutes.
- 5 min, 16–20: stall: woodcutter: no grown trees in range inside your border 86% of the last 5 minutes.
- 2 min, 18–19: stall: weaponsmith: waiting for coal and iron 82% of the last 5 minutes.
- 26 min, 20–60: stall: barracks: waiting for weapons from the weaponsmith 97% of the last 5 minutes.
- 23 min, 20–60: stall: coal mine: deposit worn out 94% of the last 5 minutes.
- 14 min, 24–60: stall: weaponsmith: waiting for coal 97% of the last 5 minutes.
- 28 min, 25–52: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 5 min, 26–30: stall: iron mine: needs meat or fish 100% of the last 5 minutes.
- 5 min, 31–35: stall: weaponsmith: waiting for iron 92% of the last 5 minutes.
- 1 min, 31: orders: The order "armyTarget" was sent 36 times this minute: send it only when something changes.
- 18 min, 37–54: stall: forest: no free ground to plant in range inside your border 92% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 7 | 8 | 7 | 11 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 14 | 19 | 1657 | 3392 |
| 30 | 11 | 8 | 4 | 4 | 0 | 0 | 10 | 12 | 0 | 17 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 1 | 26 | 1660 | 3392 |
| 45 | 16 | 8 | 8 | 8 | 0 | 12 | 13 | 14 | 0 | 11 | 1 | 10 | 0 | 0 | 0 | 1 | 0 | 6 | 62 | 1660 | 3392 |
| 60 | 16 | 8 | 8 | 13 | 0 | 12 | 14 | 14 | 0 | 12 | 3 | 20 | 0 | 0 | 0 | 0 | 0 | 14 | 76 | 2429 | 4295 |

At the end: buildings (built+sites) house 4, guard 2, hq 1, wood 1, quarry 1, saw 1, coalmine 1, fisher 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, forest 1, barracks 1, farm 1, waterhut 1, pigfarm 1, butcher 1, tower 1.
People: soldier 20, carrier 16, worker 14, digger 2, builder 2, explorer 1; beds 40. Soldiers: sword 9, bow 5, spear 6.

Goods produced in the game: fish 220, water 85, grain 85, log 74, pig 71, stone 70, coal 70, plank 62, meat 57, ironore 42, iron 39, sword 7, spear 6, bow 2, saw 1, rod 1, hammer 1, axe 1.
Goods consumed in the game: fish 213, stone 80, plank 78, water 71, grain 71, log 62, coal 58, pig 57, meat 45, ironore 39, iron 19, sword 7, spear 6, pick 5, hammer 3, axe 2, bow 2, saw 1, rod 1, shovel 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (109 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (59 building-min): Log pile full, nothing needs it right now 46%, Felling a tree 28%, No grown trees in range inside your border 12%, Bringing a log to the pile 11%, Log pile full, waiting for carriers 3%
- quarry (59 building-min): Stone pile full, nothing needs it right now 63%, Cutting stone 22%, Bringing stone to the pile 13%, Stone pile full, waiting for carriers 2%, Worker picking up a pickaxe 0%
- saw (58 building-min): Output pile full, nothing needs it right now 72%, Sawing planks 13%, Waiting for logs 8%, Output pile full, waiting for carriers 4%, Stacking outside 3%
- house (133 building-min): Idle 100%
- coalmine (56 building-min): Deposit worn out: finding little coal 74%, Coal pile full, nothing needs it right now 12%, Bringing coal out 3%, Deposit thinning: mining coal 3%, Mining coal 2%
- fisher (55 building-min): Fishing 33%, Bringing a fish to the pile 33%, Fish pile full, nothing needs it right now 17%, No fish in range inside your border 13%, Fish pile full, waiting for carriers 3%
- ironmine (48 building-min): Deposit worn out: finding little iron ore 71%, Needs meat or fish: mining stopped 24%, Bringing iron ore out 2%, Came back empty-handed 2%, Fetching food 1%
- smelter (47 building-min): Waiting for iron ore 79%, Smelting iron 10%, Output pile full, nothing needs it right now 7%, Stacking outside 2%, Fetching from the pile 0%
- smith (46 building-min): All tool targets met 97%, Waiting for coal 1%, Worker picking up a hammer 1%, Forging saw 0%, Forging fishing rod 0%
- weaponsmith (44 building-min): Waiting for coal 63%, Waiting for iron 21%, Waiting for coal and iron 8%, All weapon targets met 2%, Forging sword 2%
- forest (43 building-min): No free ground to plant in range inside your border 67%, Planting a sapling 32%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- barracks (42 building-min): Waiting for weapons from the weaponsmith 93%, Weapons on the way 6%, Training soldiers 1%, Soldier targets met 0%, Idle 0%
- farm (33 building-min): Grain pile full, nothing needs it right now 59%, Sowing a field 16%, Harvesting grain 12%, Grain pile full, waiting for carriers 6%, Bringing grain to the pile 5%
- waterhut (32 building-min): Water pile full, nothing needs it right now 64%, Fetching water 15%, Bringing water to the pile 13%, Water pile full, waiting for carriers 8%, Idle 0%
- pigfarm (31 building-min): Raising a pig 53%, Output pile full, nothing needs it right now 35%, Stacking outside 6%, Output pile full, waiting for carriers 4%, Fetching from the pile 1%
- butcher (29 building-min): Output pile full, nothing needs it right now 64%, Butchering 15%, Output pile full, waiting for carriers 9%, Waiting for pigs 6%, Stacking outside 5%
- tower (6 building-min): Idle 99%, Soldiers on the way 1%

Building sites, time per state (site-min): Builders at work 6, Leveling the ground 4, Waiting for a digger 4, Waiting for a builder 3, Waiting for materials 0.

Build order (placed at min:sec, finished at): guard 0:00→0:35, wood 0:02→0:55, quarry 0:36→1:15, saw 0:56→1:37, house 1:16→1:54, coalmine 3:36→4:16, fisher 3:38→4:53, guard 10:00→10:56, ironmine 11:08→11:43, smelter 11:44→12:52, smith 12:54→13:39, house 13:40→14:13, weaponsmith 15:04→15:45, forest 16:00→16:31, barracks 16:44→17:42, farm 26:00→26:48, waterhut 26:48→27:34, pigfarm 28:36→29:27, butcher 29:50→30:35, house 35:12→35:52, tower 52:10→53:31, house 53:48→54:51.

Orders given: armyTarget 139, sendUnit 43, place 22, priority 12, profession 5, sendIn 3, weaponKeep 3, armyReserve 1, fighters 1. None refused.

People changing jobs: new carrier 40, carrier -> soldier 15, carrier -> worker 14, carrier -> geologist 2, geologist -> carrier 2, new soldier 2, carrier -> explorer 1.

People's orders (3991 in all, 3967 done): worker mine coalmine 235, worker rest fisher 221, worker gather fisher 220, worker eat coalmine 183, carrier haul fish fisher -> coalmine 181, worker rest farm 175, worker gather farm 174, worker mine ironmine 113, worker rest forest 105, worker gather forest 104, worker rest waterhut 86, worker gather waterhut 85, carrier haul water waterhut -> pigfarm 77, carrier haul grain farm -> pigfarm 77. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Garrison-first: posts 0 garrison 0, mines 0/0, ore --, carriers 6 idle 6, field 10, sites 1.
- ×5 10:00–50:00 Garrison-first: posts 2 garrison 3, mines 1/1, ore CI, carriers 11 idle 4, field 17, sites 0.


Script: 1800 turns, 0.1 ms average, worst 7 ms, 0 over 0.3 s, 0 errors. Orders refused: none.
