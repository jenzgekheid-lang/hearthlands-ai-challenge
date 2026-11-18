# Tournament: scheduled

Game version 240. Written for: scheduled 224.

- scheduled: hearthlands-ai-challenge, commit be52b9f

Maps 20261030, 777, 4242, 31, each twice (sides swapped), up to 60 game minutes (1x). 44 s.

Switches: vault on, banner off, armor off, vet off, gear off.

Each game ends with the script's own game log: what it may know (its own side, and what happened to it or what it saw). Times are game min:sec.

| Opponent | Won | Lost | Undecided |
|---|---|---|---|
| original game NPC | 0 | 0 | 8 |

War and gold over all games (scheduled / opponents): buildings taken 0 / 1, killed 17 / 38, gold at the end (stock + vaults) 0 / 269, stuck towns 3 / 0.

## Games

Each row: buildings / military / land tiles / soldiers / people at the minute shown. First: game minute of the first smelter, smith, weaponsmith, barracks, tower, castle (- = never).

### Map 31: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 10/2/1867/10/30 | 23/6/2847/10/40 |
| 30 | 14/4/2587/10/30 | 62/8/4486/26/84 |
| 45 | 15/4/2745/10/30 | 79/18/11273/59/101 |
| 60 | 15/4/2745/10/30 | 87/26/16409/80/100 |
| first | - - - - - - | 9 9 21 23 32 37 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 7 in vaults.

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 26 29 48 59 66 74 80).

First army orders (game min:sec): 0:00 armyReserve; 0:36 sendIn 1 soldiers -> building 73; 9:54 sendIn 1 soldiers -> building 139; 18:50 sendIn 1 soldiers -> building 171; 27:54 sendIn 1 soldiers -> building 232.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 1 min, 2: settlers: No free settlers and every bed taken: build houses.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 20 min, 15–34: ore: No coal or iron mine yet: send a geologist to the mountains on your land (22 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 38 min, 23–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 17 min, 44–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 11 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 16 | 32 | 1867 | 7452 |
| 30 | 24 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 14 | 40 | 2587 | 11296 |
| 45 | 24 | 8 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 13 | 48 | 2745 | 11296 |
| 60 | 24 | 8 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 13 | 48 | 2745 | 11296 |

At the end: buildings (built+sites) guard 4, wood 2, house 2, hq 1, quarry 1, saw 1, fisher 1, forest 1, look 1, coalmine 1.
People: carrier 13, worker 8, soldier 6, explorer 3, digger 2, builder 2, pioneer 1, geologist 1; beds 20. Soldiers: sword 3, bow 3.

Goods produced in the game: log 42, stone 27, plank 22, fish 11, coal 8.
Goods consumed in the game: plank 38, stone 37, log 22, fish 5, pick 4, axe 2, shovel 2, saw 1, rod 1.
Goods lost in the game: pick 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (183 building-min): Idle 100%, Waiting for a swordsman: train one at the barracks 0%, Waiting for a soldier 0%
- wood (95 building-min): Log pile full, nothing needs it right now 87%, Felling a tree 9%, Bringing a log to the pile 3%, Worker picking up an axe 1%, Log pile full, waiting for carriers 0%
- quarry (59 building-min): Stone pile full, nothing needs it right now 91%, Cutting stone 6%, Bringing stone to the pile 2%, Stone pile full, waiting for carriers 0%, Worker picking up a pickaxe 0%
- saw (59 building-min): Output pile full, nothing needs it right now 93%, Sawing planks 5%, Stacking outside 1%, Waiting for logs 1%, Output pile full, waiting for carriers 0%
- fisher (58 building-min): Fish pile full, nothing needs it right now 97%, Fishing 1%, Bringing a fish to the pile 1%, Worker picking up a fishing rod 0%, Fish pile full, waiting for carriers 0%
- house (107 building-min): Idle 100%
- forest (53 building-min): No free ground to plant in range inside your border 70%, Planting a sapling 29%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- look (31 building-min): Scout on watch 100%, Working 0%
- coalmine (24 building-min): Coal pile full, nothing needs it right now 91%, Mining coal 4%, Worker picking up a pickaxe 4%, Bringing coal out 1%, Fetching food 0%

Building sites, time per state (site-min): Builders at work 3, Waiting for a digger 3, Waiting for a builder 2, Leveling the ground 2, Waiting for materials 1.

Build order (placed at min:sec, finished at): guard 0:00→0:36, wood 0:02→0:51, quarry 0:36→1:08, saw 0:52→1:30, fisher 1:32→2:17, house 1:34→2:41, forest 6:02→6:33, guard 9:00→9:54, house 9:02→10:18, guard 18:00→18:49, wood 23:00→23:40, guard 27:00→27:54, look 28:22→29:04, coalmine 34:44→35:38.

Orders given: sendUnit 76, place 14, priority 11, profession 7, sendIn 4, toolKeep 2, armyReserve 1. None refused.

People changing jobs: new carrier 20, carrier -> worker 8, carrier -> explorer 3, carrier -> geologist 2, carrier -> pioneer 1, geologist -> carrier 1.

People's orders (738 in all, 712 done): worker rest forest 106, worker gather forest 105, explorer explore 60, worker rest wood 44, worker gather wood 42, worker rest quarry 28, worker gather quarry 27, carrier haul log wood -> saw 26, worker rest saw 23, worker toCraft saw 22, worker craft saw 22, pioneer claim 15, worker rest fisher 12, worker gather fisher 11. Not done (outcome: times): failed: spot not next to the border ×13.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Expedition: scouts 3, pioneers 1, posts 4 garrison 4, mines 1/0, carriers 13 idle 13, field 6, seen 2745.


Script: 1800 turns, 0.3 ms average, worst 4 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 31: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 15/2/1663/10/30 | 31/6/2534/10/50 |
| 30 | 20/4/2349/10/30 | 64/14/7190/43/96 |
| 45 | 21/5/2689/12/28 | 79/18/10659/62/98 |
| 60 | 24/6/3012/22/28 | 88/25/15521/76/104 |
| first | 13 14 15 16 - - | 12 13 15 18 26 29 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults. original game NPC: took 0, lost 0, killed 0, fallen 0, gold 1 in stock + 41 in vaults.

Soldiers every 5 min: 10 10 10 10 10 10 10 10 12 15 17 22 (original game NPC: 10 10 10 11 30 43 50 57 62 66 71 76).

First army orders (game min:sec): 0:00 armyReserve; 0:52 sendIn 1 soldiers -> building 74; 10:08 sendIn 1 soldiers -> building 144; 15:46 armyTarget sword=5; 15:46 armyTarget spear=4; 15:46 armyTarget bow=3; 18:12 armyTarget sword=4; 18:12 armyTarget spear=3; 18:12 armyTarget bow=1; 18:20 armyTarget sword=5; 18:20 armyTarget spear=4; 18:20 armyTarget bow=3.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 3 min, 2–60: settlers: No free settlers and every bed taken: build houses.
- 15 min, 14–60: stall: iron mine: deposit worn out 88% of the last 5 minutes.
- 2 min, 15–16: stall: smelter: waiting for iron ore 74% of the last 5 minutes.
- 17 min, 15–60: stall: coal mine: deposit worn out 91% of the last 5 minutes.
- 15 min, 16–38: stall: smith: waiting for coal 98% of the last 5 minutes.
- 7 min, 17–23: stall: weaponsmith: waiting for coal and iron 100% of the last 5 minutes.
- 39 min, 18–56: stall: barracks: waiting for weapons from the weaponsmith 91% of the last 5 minutes.
- 23 min, 25–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 21 min, 29–59: stall: weaponsmith: waiting for coal 91% of the last 5 minutes.
- 8 min, 37–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 11 | 8 | 4 | 21 | 0 | 0 | 0 | 0 | 0 | 5 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 8 | 24 | 1663 | 8336 |
| 30 | 24 | 8 | 8 | 21 | 0 | 0 | 0 | 0 | 0 | 5 | 0 | 16 | 0 | 0 | 0 | 0 | 0 | 6 | 48 | 2349 | 16895 |
| 45 | 24 | 8 | 8 | 21 | 0 | 0 | 0 | 0 | 0 | 12 | 13 | 20 | 0 | 0 | 0 | 0 | 0 | 5 | 60 | 2689 | 17884 |
| 60 | 21 | 10 | 17 | 19 | 0 | 0 | 0 | 0 | 0 | 11 | 13 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 65 | 3012 | 18347 |

At the end: buildings (built+sites) guard 6, house 3+1, wood 2, quarry 2, forest 2, hq 1, saw 1, fisher 1, coalmine 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1.
People: soldier 14, worker 13, carrier 6, explorer 3, digger 2, builder 2, geologist 1, pioneer 1; beds 30. Soldiers: sword 8, bow 3, spear 3.

Goods produced in the game: fish 361, coal 73, log 72, stone 69, plank 54, ironore 54, iron 41, sword 9, shovel 3, spear 3, pick 2, saw 1, hammer 1, rod 1, axe 1.
Goods consumed in the game: fish 348, stone 70, plank 68, coal 62, log 55, ironore 41, iron 21, sword 9, pick 7, shovel 3, hammer 3, spear 3, axe 2, saw 1, rod 1.
Goods lost in the game: pick 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (210 building-min): Idle 99%, Waiting for a swordsman: train one at the barracks 1%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (93 building-min): Log pile full, nothing needs it right now 73%, Felling a tree 16%, Bringing a log to the pile 5%, Log pile full, waiting for carriers 5%, Worker picking up an axe 0%
- quarry (72 building-min): Stone pile full, nothing needs it right now 75%, Cutting stone 15%, Bringing stone to the pile 7%, Stone pile full, waiting for carriers 2%, Worker picking up a pickaxe 1%
- saw (58 building-min): Output pile full, nothing needs it right now 83%, Sawing planks 12%, Stacking outside 2%, Output pile full, waiting for carriers 2%, Fetching from the pile 0%
- house (121 building-min): Idle 100%
- fisher (58 building-min): Fish pile full, nothing needs it right now 43%, Fishing 31%, Bringing a fish to the pile 22%, Fish pile full, waiting for carriers 4%, Worker picking up a fishing rod 0%
- forest (88 building-min): No free ground to plant in range inside your border 72%, Planting a sapling 28%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- coalmine (49 building-min): Deposit worn out: finding little coal 90%, Bringing coal out 4%, Fetching food 2%, Came back empty-handed 2%, Deposit thinning: mining coal 1%
- ironmine (49 building-min): Deposit worn out: finding little iron ore 79%, Iron ore pile full, nothing needs it right now 12%, Bringing iron ore out 3%, Came back empty-handed 2%, Fetching food 2%
- smelter (48 building-min): Output pile full, nothing needs it right now 47%, Waiting for iron ore 35%, Smelting iron 11%, Output pile full, waiting for carriers 4%, Stacking outside 2%
- smith (47 building-min): Waiting for coal 50%, All tool targets met 47%, Forging shovel 1%, Forging pickaxe 1%, Stacking outside 0%
- weaponsmith (45 building-min): Waiting for coal 77%, Waiting for coal and iron 18%, Forging sword 3%, Forging spear 1%, Stacking outside 1%
- barracks (44 building-min): Waiting for weapons from the weaponsmith 96%, Weapons on the way 3%, Training soldiers 0%

Building sites, time per state (site-min): Waiting for a digger 6, Leveling the ground 6, Builders at work 6, Waiting for a builder 4, Waiting for materials 0.

Build order (placed at min:sec, finished at): guard 0:00→0:51, wood 0:02→1:05, quarry 0:52→1:26, saw 1:06→1:48, house 1:26→2:06, fisher 1:48→2:28, forest 6:02→6:33, guard 9:00→10:08, house 9:02→10:34, coalmine 10:22→11:11, ironmine 10:38→11:25, smelter 11:26→12:19, smith 12:24→13:04, weaponsmith 14:02→14:54, barracks 15:14→15:46, guard 18:00→19:04, forest 25:00→25:37, wood 25:02→26:02, guard 27:00→28:23, guard 41:18→42:07, house 45:02→46:29, quarry 45:34→46:56, guard 48:18→49:27, house 59:28→never.

Orders given: sendUnit 155, armyTarget 60, place 24, priority 20, profession 9, sendIn 6, weaponKeep 3, toolKeep 2, armyReserve 1. None refused.

People changing jobs: new carrier 30, carrier -> worker 13, carrier -> soldier 12, carrier -> geologist 3, carrier -> explorer 3, geologist -> carrier 2, carrier -> pioneer 1.

People's orders (3660 in all, 3591 done): worker rest fisher 362, worker gather fisher 361, worker mine coalmine 238, worker mine ironmine 203, carrier haul fish fisher -> coalmine 190, worker eat coalmine 186, worker rest forest 178, worker gather forest 176, carrier haul fish fisher -> ironmine 165, worker eat ironmine 162, explorer explore 114, worker rest wood 74, worker rest coalmine 74, worker gather wood 72. Not done (outcome: times): failed: spot not next to the border ×39.

Fights and contact: first saw player 1 at 22:00.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Expedition: scouts 3, pioneers 1, posts 6 garrison 8, mines 1/1, carriers 13 idle 9, field 7, seen 3012.


Script: 1800 turns, 0.3 ms average, worst 5 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 15/2/1671/10/30 | 34/6/2855/10/50 |
| 30 | 20/4/2271/10/30 | 76/15/7972/32/89 |
| 45 | 24/4/2271/10/40 | 86/23/13443/73/87 |
| 60 | 27/5/2616/12/38 | 94/30/18981/92/88 |
| first | 13 15 17 18 - - | 7 8 14 14 22 35 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults. original game NPC: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 56 in vaults.

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 12 (original game NPC: 10 10 10 12 20 32 54 64 73 79 85 92).

First army orders (game min:sec): 0:00 armyReserve; 0:42 sendIn 1 soldiers -> building 73; 9:40 sendIn 1 soldiers -> building 136; 17:22 armyTarget sword=5; 17:22 armyTarget spear=4; 17:22 armyTarget bow=3; 18:06 armyTarget sword=4; 18:06 armyTarget spear=3; 18:06 armyTarget bow=1; 18:08 armyTarget sword=5; 18:08 armyTarget spear=4; 18:08 armyTarget bow=3.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 5 min, 1–32: settlers: No free settlers and every bed taken: build houses.
- 4 min, 14–17: stall: iron mine: deposit worn out 58% of the last 5 minutes.
- 22 min, 15–60: stall: smelter: waiting for iron ore 94% of the last 5 minutes.
- 3 min, 17–19: stall: smith: waiting for coal 84% of the last 5 minutes.
- 1 min, 18: stall: coal mine: deposit worn out 58% of the last 5 minutes.
- 7 min, 19–26: stall: weaponsmith: waiting for coal and iron 100% of the last 5 minutes.
- 33 min, 20–59: stall: barracks: waiting for weapons from the weaponsmith 95% of the last 5 minutes.
- 3 min, 21–31: stall: iron mine: needs meat or fish 100% of the last 5 minutes.
- 11 min, 26–41: stall: smith: waiting for iron 100% of the last 5 minutes.
- 15 min, 27–57: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 29 min, 32–60: stall: weaponsmith: waiting for iron 94% of the last 5 minutes.
- 23 min, 35–60: stall: water hut: no shore water in range inside your border 100% of the last 5 minutes.
- 1 min, 47: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 6 | 3 | 0 | 0 | 0 | 0 | 0 | 5 | 1 | 4 | 0 | 0 | 0 | 0 | 0 | 10 | 23 | 1671 | 8344 |
| 30 | 16 | 8 | 8 | 3 | 0 | 0 | 0 | 8 | 0 | 17 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 8 | 37 | 2271 | 8644 |
| 45 | 16 | 8 | 16 | 7 | 0 | 0 | 0 | 16 | 8 | 26 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 13 | 62 | 2271 | 8644 |
| 60 | 24 | 8 | 16 | 3 | 0 | 0 | 0 | 16 | 8 | 26 | 1 | 6 | 0 | 0 | 0 | 0 | 0 | 12 | 71 | 2616 | 8679 |

At the end: buildings (built+sites) guard 5, house 3, wood 2, quarry 2, forest 2, hq 1, saw 1, fisher 1, coalmine 1, ironmine 1, smelter 1, look 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, mill 1.
People: worker 17, carrier 12, soldier 6, explorer 3, digger 2, builder 2, geologist 1, pioneer 1; beds 30. Soldiers: sword 3, bow 3.

Goods produced in the game: fish 203, log 84, stone 82, plank 64, coal 54, grain 24, ironore 18, iron 17, flour 8, shovel 3, pick 2, sword 2, hammer 1, saw 1, rod 1, axe 1.
Goods consumed in the game: fish 206, stone 84, plank 80, log 64, coal 28, ironore 17, iron 11, pick 8, grain 8, shovel 3, hammer 3, axe 2, sword 2, saw 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (184 building-min): Idle 100%, Waiting for a swordsman: train one at the barracks 0%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (71 building-min): Log pile full, nothing needs it right now 39%, Felling a tree 27%, No grown trees in range inside your border 22%, Bringing a log to the pile 11%, Worker picking up an axe 1%
- quarry (88 building-min): Stone pile full, nothing needs it right now 75%, Cutting stone 16%, Bringing stone to the pile 7%, Worker picking up a pickaxe 0%, Stone pile full, waiting for carriers 0%
- saw (58 building-min): Output pile full, nothing needs it right now 81%, Sawing planks 14%, Stacking outside 3%, Output pile full, waiting for carriers 1%, Waiting for logs 1%
- fisher (58 building-min): No fish in range inside your border 33%, Bringing a fish to the pile 28%, Fishing 25%, Fish pile full, nothing needs it right now 13%, Fish pile full, waiting for carriers 0%
- house (133 building-min): Idle 100%
- coalmine (56 building-min): Deposit worn out: finding little coal 56%, Coal pile full, nothing needs it right now 29%, Needs bread or fish: mining stopped 5%, Deposit thinning: mining coal 4%, Bringing coal out 3%
- ironmine (49 building-min): Needs meat or fish: mining stopped 65%, Deposit worn out: finding little iron ore 31%, Mining iron ore 1%, Bringing iron ore out 1%, Fetching food 1%
- smelter (48 building-min): Waiting for iron ore 94%, Smelting iron 5%, Stacking outside 1%, Worker picking up a hammer 0%, Waiting for coal and iron ore 0%
- forest (60 building-min): Planting a sapling 50%, No free ground to plant in range inside your border 49%, Worker picking up a shovel 1%, Working 0%
- look (47 building-min): Scout on watch 100%, Scout on the way 0%, Working 0%
- smith (46 building-min): Waiting for iron 45%, All tool targets met 40%, Waiting for coal 11%, Waiting for coal and iron 2%, Forging shovel 1%
- weaponsmith (44 building-min): Waiting for iron 75%, Waiting for coal and iron 24%, Forging sword 1%, Worker picking up a hammer 0%, Working 0%
- barracks (43 building-min): Waiting for weapons from the weaponsmith 99%, Weapons on the way 1%, Training soldiers 0%, Idle 0%
- farm (38 building-min): Grain pile full, nothing needs it right now 90%, Sowing a field 4%, Harvesting grain 3%, Bringing grain to the pile 1%, Grain pile full, waiting for carriers 1%
- waterhut (29 building-min): No shore water in range inside your border 100%, Worker on the way 0%, Working 0%
- mill (28 building-min): Output pile full, nothing needs it right now 97%, Grinding flour 1%, Waiting for grain 1%, Stacking outside 1%, Working 0%

Building sites, time per state (site-min): Builders at work 7, Leveling the ground 6, Waiting for a digger 4, Waiting for a builder 3, Waiting for materials 0.

Build order (placed at min:sec, finished at): guard 0:00→0:40, wood 0:02→0:53, quarry 0:42→1:23, saw 0:54→1:44, fisher 1:44→2:27, house 1:46→2:46, coalmine 3:24→4:03, guard 9:00→9:40, ironmine 10:26→10:57, house 10:58→11:36, smelter 11:22→12:06, forest 11:42→12:20, look 12:26→13:02, smith 13:34→14:11, weaponsmith 15:16→16:06, barracks 16:30→17:21, guard 18:00→18:43, farm 21:10→22:15, guard 27:00→27:44, waterhut 30:00→30:34, quarry 30:16→30:51, mill 30:50→31:37, house 31:38→32:21, forest 47:00→47:48, wood 47:02→48:20, guard 57:54→59:01.

Orders given: sendUnit 276, armyTarget 59, place 26, priority 19, profession 11, sendIn 5, weaponKeep 3, toolKeep 2, armyReserve 1. None refused.

People changing jobs: new carrier 30, carrier -> worker 17, carrier -> geologist 4, carrier -> explorer 3, geologist -> carrier 3, carrier -> soldier 2, carrier -> pioneer 1.

People's orders (2823 in all, 2795 done): worker rest fisher 204, worker gather fisher 203, worker rest forest 183, worker mine coalmine 182, worker gather forest 182, worker eat coalmine 140, carrier haul fish fisher -> coalmine 137, worker rest wood 86, worker gather wood 84, worker rest quarry 84, worker gather quarry 82, worker mine ironmine 80, carrier haul log wood -> saw 68, carrier haul fish fisher -> ironmine 66. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×6; failed: spot not next to the border ×3; failed: can't reach that spot ×1.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 179, pioneer (claim 0) cut-off 60.

Fights and contact: first saw player 2 at 29:00.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Expedition: scouts 3, pioneers 1, posts 4 garrison 5, mines 1/1, carriers 14 idle 10, field 5, seen 2299.


Script: 1800 turns, 0.1 ms average, worst 5 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 14/2/1624/10/30 | 33/6/2675/10/50 |
| 30 | 20/4/2328/23/27 | 69/12/5308/23/87 |
| 45 | 26/5/2898/9/26 | 76/20/11213/61/78 |
| 60 | 25/4/2473/7/25 | 85/28/16449/78/75 |
| first | 13 14 16 17 - - | 8 9 14 18 29 32 |

War and gold at the end: scheduled: took 0, lost 1, killed 17, fallen 38, gold 0 in stock + 0 in vaults. original game NPC: took 1, lost 0, killed 38, fallen 17, gold 0 in stock + 47 in vaults.

Soldiers every 5 min: 10 10 10 11 21 23 29 13 9 10 7 7 (original game NPC: 10 10 10 13 13 23 38 48 61 69 74 78).

First army orders (game min:sec): 0:00 armyReserve; 0:36 sendIn 1 soldiers -> building 74; 10:02 sendIn 1 soldiers -> building 144; 16:50 armyTarget sword=5; 16:50 armyTarget spear=4; 16:50 armyTarget bow=3; 18:02 armyTarget sword=4; 18:02 armyTarget spear=3; 18:02 armyTarget bow=1; 18:16 armyTarget sword=5; 18:16 armyTarget spear=4; 18:16 armyTarget bow=3.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 4 min, 2–31: settlers: No free settlers and every bed taken: build houses.
- 4 min, 16–19: stall: smith: waiting for coal 64% of the last 5 minutes.
- 6 min, 18–23: stall: weaponsmith: waiting for coal 67% of the last 5 minutes.
- 8 min, 19–47: stall: barracks: waiting for weapons from the weaponsmith 93% of the last 5 minutes.
- 17 min, 20–43: stall: iron mine: deposit worn out 73% of the last 5 minutes.
- 16 min, 27–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 6 min, 29–51: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 1 min, 30: stall: iron mine: needs meat or fish 51% of the last 5 minutes.
- 18 min, 34–51: stall: smelter: waiting for iron ore 100% of the last 5 minutes.
- 8 min, 38–45: army: Lost 4 soldiers in the last 5 minutes.
- 8 min, 41–49: stall: coal mine: deposit worn out 93% of the last 5 minutes.
- 7 min, 44–51: stall: weaponsmith: waiting for iron 100% of the last 5 minutes.
- 9 min, 52–60: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 9 min, 52–60: stall: quarry: stone pile full, waiting for carriers 100% of the last 5 minutes.
- 9 min, 52–60: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 6 | 9 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 8 | 6 | 14 | 0 | 0 | 0 | 0 | 0 | 8 | 20 | 1624 | 5313 |
| 30 | 11 | 12 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 24 | 1 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 38 | 2328 | 11435 |
| 45 | 24 | 8 | 16 | 5 | 0 | 0 | 0 | 0 | 0 | 12 | 0 | 6 | 0 | 0 | 1 | 0 | 0 | 1 | 47 | 2898 | 20550 |
| 60 | 24 | 8 | 16 | 15 | 0 | 0 | 0 | 0 | 0 | 22 | 5 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 67 | 2473 | 21773 |

At the end: buildings (built+sites) house 5, guard 4, wood 2, quarry 2, forest 2, hq 1, saw 1, fisher 1, ironmine 1, coalmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, look 1.
People: worker 14, explorer 3, digger 2, builder 2, carrier 2, soldier 1, pioneer 1, geologist 1; beds 50. Soldiers: sword 1.

Goods produced in the game: fish 293, coal 116, log 78, stone 75, plank 58, ironore 55, iron 50, sword 20, spear 10, bow 5, shovel 3, pick 2, saw 1, hammer 1, rod 1, axe 1.
Goods consumed in the game: fish 284, coal 94, stone 77, plank 74, log 58, ironore 50, iron 44, sword 20, spear 10, pick 9, bow 5, shovel 3, hammer 3, axe 2, saw 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (197 building-min): Idle 99%, Waiting for a swordsman: train one at the barracks 1%, Soldiers on the way 0%
- wood (89 building-min): Log pile full, waiting for carriers 40%, Log pile full, nothing needs it right now 26%, Felling a tree 21%, Bringing a log to the pile 10%, No grown trees in range inside your border 2%
- quarry (87 building-min): Stone pile full, waiting for carriers 39%, Stone pile full, nothing needs it right now 36%, Cutting stone 16%, Bringing stone to the pile 9%, Worker picking up a pickaxe 1%
- saw (58 building-min): Output pile full, nothing needs it right now 52%, Output pile full, waiting for carriers 32%, Sawing planks 13%, Stacking outside 3%, Fetching from the pile 0%
- fisher (58 building-min): Bringing a fish to the pile 37%, Fishing 37%, Fish pile full, nothing needs it right now 15%, Fish pile full, waiting for carriers 7%, No fish in range inside your border 4%
- house (194 building-min): Idle 100%
- ironmine (56 building-min): Deposit worn out: finding little iron ore 44%, Needs meat or fish: mining stopped 30%, Iron ore pile full, nothing needs it right now 10%, Mining iron ore 6%, Deposit thinning: mining iron ore 4%
- coalmine (49 building-min): Deposit worn out: finding little coal 33%, Deposit thinning: mining coal 29%, Mining coal 15%, Coal pile full, waiting for carriers 10%, Bringing coal out 6%
- smelter (48 building-min): Waiting for iron ore 61%, Output pile full, nothing needs it right now 18%, Smelting iron 13%, Output pile full, waiting for carriers 4%, Stacking outside 3%
- forest (78 building-min): No free ground to plant in range inside your border 61%, Planting a sapling 38%, Worker picking up a shovel 1%, Idle 0%, Working 0%
- smith (47 building-min): All tool targets met 89%, Waiting for coal 8%, Forging shovel 1%, Forging pickaxe 1%, Stacking outside 1%
- weaponsmith (45 building-min): Waiting for iron 44%, All weapon targets met 30%, Waiting for coal 13%, Forging sword 6%, Forging spear 3%
- barracks (43 building-min): Waiting for weapons from the weaponsmith 65%, Soldier targets met 25%, Weapons on the way 8%, Training soldiers 2%
- look (31 building-min): Scout on watch 99%, Scout on the way 1%, Idle 0%, Working 0%

Building sites, time per state (site-min): Builders at work 6, Leveling the ground 5, Waiting for a digger 5, Waiting for a builder 4, Waiting for materials 1.

Build order (placed at min:sec, finished at): guard 0:00→0:36, wood 0:02→0:49, quarry 0:36→1:11, saw 0:50→1:33, fisher 1:34→2:28, house 1:36→2:50, ironmine 3:18→4:00, guard 9:00→10:01, coalmine 10:30→11:00, house 11:00→11:37, smelter 11:02→12:04, forest 11:44→12:21, smith 12:44→13:25, weaponsmith 14:38→15:28, barracks 16:06→16:48, guard 18:00→18:43, house 20:54→21:53, guard 27:00→28:07, look 28:34→29:22, forest 29:00→30:09, wood 29:22→30:21, house 30:10→30:59, quarry 30:32→31:35, guard 36:00→36:58, house 37:42→38:44.

Orders given: sendUnit 168, armyTarget 55, place 25, priority 19, profession 13, attack 12, sendIn 5, march 4, weaponKeep 3, toolKeep 2, armyReserve 1. None refused.

People changing jobs: new carrier 50, carrier -> soldier 35, carrier -> worker 14, carrier -> geologist 5, geologist -> carrier 4, carrier -> explorer 3, new soldier 2, carrier -> pioneer 1.

People's orders (3902 in all, 3846 done): worker rest fisher 293, worker gather fisher 293, worker mine coalmine 244, worker rest forest 227, worker gather forest 225, worker mine ironmine 173, carrier haul fish fisher -> coalmine 162, worker eat coalmine 158, explorer explore 132, worker eat ironmine 126, carrier haul fish fisher -> ironmine 124, worker rest coalmine 117, worker rest ironmine 92, worker rest wood 80. Not done (outcome: times): failed: spot not next to the border ×31; ended: the person is gone (became a soldier, defeated or removed) ×6.

Failed path searches (who (task) why: times): pioneer (claim 1) cut-off 1.

Fights and contact: attacked enemy buildings 4 times (first 37:25); was attacked 2 times (first 49:56); lost guard 51:17; killed sword 11, bow 6; lost people spear 10, sword 20, bow 8; first saw player 1 at 36:00.

Your notes (7 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Expedition: scouts 3, pioneers 1, posts 5 garrison 7, mines 1/1, carriers 2 idle 0, field 3, seen 2807.
- 37:25 Expedition siege: 13 field soldiers against guard 205; threshold 13.


Script: 1893 turns, 0.2 ms average, worst 5 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 15/2/1892/10/30 | 27/8/4007/18/32 |
| 30 | 21/4/2543/22/28 | 56/13/6097/38/72 |
| 45 | 26/5/2901/31/39 | 74/13/6893/48/92 |
| 60 | 27/6/3217/38/32 | 85/24/13897/73/87 |
| first | 12 14 16 18 - - | 8 8 9 9 15 46 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults. original game NPC: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 12 in vaults.

Soldiers every 5 min: 10 10 10 10 17 22 24 28 31 35 36 38 (original game NPC: 10 10 18 22 32 38 43 47 48 57 64 73).

First army orders (game min:sec): 0:00 armyReserve; 0:40 sendIn 1 soldiers -> building 73; 9:56 sendIn 1 soldiers -> building 156; 17:28 armyTarget sword=5; 17:28 armyTarget spear=4; 17:28 armyTarget bow=3; 18:04 armyTarget sword=4; 18:04 armyTarget spear=3; 18:04 armyTarget bow=1; 18:16 armyTarget sword=5; 18:16 armyTarget spear=4; 18:16 armyTarget bow=3.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 5 min, 2–43: settlers: No free settlers and every bed taken: build houses.
- 6 min, 16–21: stall: smith: waiting for coal 63% of the last 5 minutes.
- 36 min, 18–57: stall: weaponsmith: waiting for coal 97% of the last 5 minutes.
- 37 min, 20–60: stall: barracks: waiting for weapons from the weaponsmith 55% of the last 5 minutes.
- 16 min, 25–40: stall: iron mine: deposit worn out 64% of the last 5 minutes.
- 7 min, 27–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 23 min, 29–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 8 min, 50–60: stall: coal mine: deposit worn out 93% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 7 | 15 | 0 | 0 | 0 | 0 | 0 | 8 | 8 | 13 | 0 | 0 | 0 | 0 | 0 | 0 | 37 | 1892 | 7172 |
| 30 | 14 | 10 | 10 | 13 | 0 | 0 | 0 | 0 | 0 | 11 | 12 | 18 | 0 | 0 | 0 | 0 | 0 | 2 | 43 | 2543 | 15984 |
| 45 | 24 | 8 | 12 | 15 | 0 | 0 | 0 | 0 | 0 | 11 | 13 | 20 | 0 | 0 | 0 | 0 | 0 | 13 | 65 | 2901 | 18842 |
| 60 | 24 | 8 | 12 | 14 | 0 | 0 | 0 | 0 | 0 | 14 | 13 | 20 | 0 | 0 | 0 | 0 | 0 | 6 | 63 | 3217 | 18842 |

At the end: buildings (built+sites) guard 6, house 5, wood 2, quarry 2, forest 2, hq 1, saw 1, fisher 1, ironmine 1, look 1, coalmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1.
People: soldier 29, worker 14, carrier 9, explorer 3, digger 2, builder 2, pioneer 1, geologist 1; beds 50. Soldiers: sword 13, bow 7, spear 9.

Goods produced in the game: fish 328, coal 110, log 80, stone 74, ironore 71, plank 60, iron 58, sword 15, spear 9, bow 4, pick 3, shovel 3, saw 1, hammer 1, rod 1, axe 1.
Goods consumed in the game: fish 320, coal 96, stone 80, plank 76, log 60, ironore 58, iron 38, sword 15, pick 9, spear 9, bow 4, shovel 3, hammer 3, axe 2, saw 1, rod 1.
Goods lost in the game: pick 3.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (219 building-min): Idle 99%, Soldiers on the way 0%, Waiting for a swordsman: train one at the barracks 0%
- wood (89 building-min): Log pile full, nothing needs it right now 73%, Felling a tree 17%, Bringing a log to the pile 5%, Log pile full, waiting for carriers 3%, No grown trees in range inside your border 2%
- quarry (87 building-min): Stone pile full, nothing needs it right now 46%, No stone in range inside your border 27%, Cutting stone 16%, Bringing stone to the pile 9%, Stone pile full, waiting for carriers 1%
- saw (58 building-min): Output pile full, nothing needs it right now 81%, Sawing planks 13%, Output pile full, waiting for carriers 3%, Stacking outside 3%, Fetching from the pile 0%
- fisher (58 building-min): Fish pile full, nothing needs it right now 49%, Fishing 26%, Bringing a fish to the pile 21%, Fish pile full, waiting for carriers 3%, Worker picking up a fishing rod 0%
- house (191 building-min): Idle 100%
- ironmine (56 building-min): Deposit worn out: finding little iron ore 43%, Iron ore pile full, nothing needs it right now 34%, Deposit thinning: mining iron ore 10%, Mining iron ore 4%, Bringing iron ore out 3%
- forest (82 building-min): No free ground to plant in range inside your border 63%, Planting a sapling 37%, Worker picking up a shovel 1%, Idle 0%, Working 0%
- look (49 building-min): Scout on watch 100%, Scout on the way 0%, Working 0%
- coalmine (49 building-min): Deposit thinning: mining coal 41%, Deposit worn out: finding little coal 29%, Mining coal 20%, Bringing coal out 6%, Came back empty-handed 2%
- smelter (48 building-min): Output pile full, nothing needs it right now 75%, Smelting iron 15%, Output pile full, waiting for carriers 6%, Stacking outside 3%, Fetching from the pile 0%
- smith (47 building-min): All tool targets met 85%, Waiting for coal 11%, Forging shovel 1%, Forging pickaxe 1%, Stacking outside 1%
- weaponsmith (44 building-min): Waiting for coal 78%, All weapon targets met 12%, Forging sword 4%, Forging spear 3%, Stacking outside 2%
- barracks (43 building-min): Waiting for weapons from the weaponsmith 85%, Soldier targets met 9%, Weapons on the way 6%, Training soldiers 1%

Building sites, time per state (site-min): Builders at work 6, Leveling the ground 6, Waiting for a digger 6, Waiting for a builder 4, Waiting for materials 0.

Build order (placed at min:sec, finished at): guard 0:00→0:38, wood 0:02→0:59, quarry 0:40→1:16, saw 1:00→1:37, fisher 1:38→2:08, house 1:40→2:29, ironmine 2:58→3:41, forest 7:24→8:11, house 7:26→8:31, guard 9:00→9:55, look 10:00→10:34, coalmine 10:22→10:54, smelter 11:00→11:53, smith 12:38→13:17, weaponsmith 14:58→15:39, barracks 16:40→17:27, guard 18:00→18:43, house 23:20→23:54, guard 27:00→28:04, forest 29:00→29:57, wood 29:02→30:19, house 30:00→31:13, quarry 30:20→31:36, guard 36:00→37:25, house 42:36→43:23, guard 45:00→46:17.

Orders given: sendUnit 171, armyTarget 64, place 26, priority 20, profession 13, sendIn 6, weaponKeep 3, toolKeep 2, armyReserve 1. None refused.

People changing jobs: new carrier 50, carrier -> soldier 28, carrier -> worker 14, carrier -> geologist 5, geologist -> carrier 4, carrier -> explorer 3, carrier -> pioneer 1, new soldier 1.

People's orders (3946 in all, 3881 done): worker rest fisher 329, worker gather fisher 328, worker mine coalmine 267, worker rest forest 199, worker gather forest 197, worker mine ironmine 187, carrier haul fish fisher -> coalmine 187, worker eat coalmine 183, worker eat ironmine 137, carrier haul fish fisher -> ironmine 135, explorer explore 129, worker rest coalmine 111, worker rest wood 82, worker gather wood 80. Not done (outcome: times): failed: spot not next to the border ×37.

Fights and contact: first saw player 2 at 25:00.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Expedition: scouts 3, pioneers 1, posts 6 garrison 9, mines 1/1, carriers 12 idle 7, field 26, seen 3217.


Script: 1800 turns, 0.3 ms average, worst 4 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 11/2/2031/10/30 | 31/6/2597/10/44 |
| 30 | 15/4/2806/10/30 | 50/9/4156/14/56 |
| 45 | 15/4/2806/10/30 | 66/10/6721/25/95 |
| 60 | 15/4/2806/10/30 | 75/18/12177/63/97 |
| first | - - - - - - | 11 11 14 16 23 29 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 44 in vaults.

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 14 14 14 14 25 40 56 63).

First army orders (game min:sec): 0:00 armyReserve; 0:34 sendIn 1 soldiers -> building 74; 9:54 sendIn 1 soldiers -> building 133; 18:42 sendIn 1 soldiers -> building 185; 28:20 sendIn 1 soldiers -> building 207.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 1–2: settlers: No free settlers and every bed taken: build houses.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 2 min, 15–16: ore: No coal or iron mine yet: send a geologist to the mountains on your land (40 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 37 min, 24–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 25 min, 27–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 12 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 15 | 32 | 2031 | 8497 |
| 30 | 24 | 10 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 13 | 48 | 2806 | 13786 |
| 45 | 24 | 10 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 13 | 48 | 2806 | 13786 |
| 60 | 24 | 10 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 13 | 48 | 2806 | 13786 |

At the end: buildings (built+sites) guard 4, wood 2, house 2, hq 1, quarry 1, saw 1, fisher 1, forest 1, look 1, coalmine 1.
People: carrier 13, worker 8, soldier 5, explorer 3, digger 2, builder 2, pioneer 1, geologist 1; beds 20. Soldiers: sword 2, bow 3.

Goods produced in the game: log 44, stone 27, plank 24, fish 12, coal 8.
Goods consumed in the game: plank 38, stone 37, log 24, fish 6, pick 4, axe 2, shovel 2, saw 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (183 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a swordsman: train one at the barracks 0%, Waiting for a soldier 0%
- wood (94 building-min): Log pile full, nothing needs it right now 86%, Felling a tree 10%, Bringing a log to the pile 3%, No grown trees in range inside your border 1%, Worker picking up an axe 1%
- quarry (59 building-min): Stone pile full, nothing needs it right now 90%, Cutting stone 7%, Bringing stone to the pile 3%, Worker picking up a pickaxe 0%, Stone pile full, waiting for carriers 0%
- saw (58 building-min): Output pile full, nothing needs it right now 93%, Sawing planks 5%, Stacking outside 1%, Waiting for logs 0%, Worker picking up a saw 0%
- fisher (58 building-min): Fish pile full, nothing needs it right now 98%, Fishing 1%, Bringing a fish to the pile 1%, Worker picking up a fishing rod 0%, Fish pile full, waiting for carriers 0%
- house (107 building-min): Idle 100%
- forest (54 building-min): No free ground to plant in range inside your border 71%, Planting a sapling 28%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- look (48 building-min): Scout on watch 100%, Working 0%
- coalmine (43 building-min): Coal pile full, nothing needs it right now 95%, Mining coal 3%, Bringing coal out 1%, Worker picking up a pickaxe 0%, Needs bread or fish: mining stopped 0%

Building sites, time per state (site-min): Waiting for a digger 3, Builders at work 3, Leveling the ground 3, Waiting for a builder 2, Waiting for materials 0.

Build order (placed at min:sec, finished at): guard 0:00→0:33, wood 0:02→0:53, quarry 0:34→1:11, saw 0:54→1:31, fisher 1:32→2:23, house 1:34→2:51, forest 6:02→6:30, guard 9:00→9:52, house 9:02→10:20, look 10:54→11:42, coalmine 16:18→16:50, guard 18:00→18:42, wood 24:00→25:07, guard 27:00→28:19.

Orders given: sendUnit 91, place 14, priority 11, profession 7, sendIn 4, toolKeep 2, armyReserve 1. None refused.

People changing jobs: new carrier 20, carrier -> worker 8, carrier -> explorer 3, new soldier 2, carrier -> geologist 2, carrier -> pioneer 1, geologist -> carrier 1.

People's orders (770 in all, 742 done): worker rest forest 105, worker gather forest 104, explorer explore 76, worker rest wood 46, worker gather wood 44, worker rest quarry 28, carrier haul log wood -> saw 28, worker gather quarry 27, worker rest saw 25, worker toCraft saw 24, worker craft saw 24, pioneer claim 14, worker rest fisher 13, worker gather fisher 12. Not done (outcome: times): failed: spot not next to the border ×12.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Expedition: scouts 3, pioneers 1, posts 4 garrison 5, mines 1/0, carriers 13 idle 13, field 5, seen 2806.


Script: 1800 turns, 0.4 ms average, worst 13 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 11/2/1650/10/30 | 25/6/2727/10/40 |
| 30 | 14/4/2330/10/30 | 40/11/5485/29/51 |
| 45 | 14/4/2330/10/30 | 66/17/8344/48/82 |
| 60 | 14/4/2330/10/30 | 77/22/12951/67/83 |
| first | - - - - - - | 8 17 19 21 27 44 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 1 in stock + 60 in vaults.

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 12 29 38 44 48 55 60 67).

First army orders (game min:sec): 0:00 armyReserve; 1:08 sendIn 1 soldiers -> building 73; 9:56 sendIn 1 soldiers -> building 156; 18:38 sendIn 1 soldiers -> building 174; 27:44 sendIn 1 soldiers -> building 196.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 39 min, 22–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 25 min, 36–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 15 | 40 | 1650 | 8798 |
| 30 | 24 | 8 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 14 | 48 | 2330 | 14992 |
| 45 | 24 | 8 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 14 | 48 | 2330 | 14992 |
| 60 | 24 | 8 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 14 | 48 | 2330 | 14992 |

At the end: buildings (built+sites) guard 4, wood 2, house 2, hq 1, quarry 1, saw 1, fisher 1, ironmine 1, forest 1.
People: carrier 14, worker 7, soldier 6, explorer 3, digger 2, builder 2, pioneer 1, geologist 1; beds 20. Soldiers: sword 3, bow 3.

Goods produced in the game: log 40, stone 23, plank 20, fish 9, ironore 8.
Goods consumed in the game: plank 36, stone 33, log 20, pick 5, fish 3, axe 2, shovel 2, saw 1, rod 1.
Goods lost in the game: pick 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (183 building-min): Idle 100%, Waiting for a swordsman: train one at the barracks 0%
- wood (96 building-min): Log pile full, nothing needs it right now 88%, Felling a tree 8%, Bringing a log to the pile 3%, Worker picking up an axe 1%, Working 0%
- quarry (58 building-min): Stone pile full, nothing needs it right now 89%, Cutting stone 7%, Bringing stone to the pile 3%, Stone pile full, waiting for carriers 0%, Worker picking up a pickaxe 0%
- saw (58 building-min): Output pile full, nothing needs it right now 94%, Sawing planks 4%, Stacking outside 1%, Output pile full, waiting for carriers 0%, Waiting for logs 0%
- house (110 building-min): Idle 100%
- fisher (57 building-min): Fish pile full, nothing needs it right now 99%, Fishing 1%, Bringing a fish to the pile 0%, Fish pile full, waiting for carriers 0%, Worker picking up a fishing rod 0%
- ironmine (57 building-min): Iron ore pile full, nothing needs it right now 97%, Mining iron ore 1%, Worker picking up a pickaxe 1%, Bringing iron ore out 0%, Iron ore pile full, waiting for carriers 0%
- forest (53 building-min): No free ground to plant in range inside your border 77%, Planting a sapling 23%, Worker picking up a shovel 0%, Working 0%

Building sites, time per state (site-min): Leveling the ground 3, Builders at work 3, Waiting for a digger 3, Waiting for a builder 2, Waiting for materials 0.

Build order (placed at min:sec, finished at): guard 0:00→1:08, wood 0:02→1:26, quarry 1:08→1:46, saw 1:26→2:07, house 1:48→2:24, fisher 2:08→2:50, ironmine 2:26→3:20, forest 6:26→7:13, house 6:28→7:31, guard 9:00→9:55, guard 18:00→18:38, wood 22:00→22:29, guard 27:00→27:44.

Orders given: sendUnit 125, place 13, priority 11, profession 9, sendIn 4, toolKeep 2, armyReserve 1. None refused.

People changing jobs: new carrier 20, carrier -> worker 7, carrier -> geologist 3, carrier -> explorer 3, geologist -> carrier 2, carrier -> pioneer 1.

People's orders (726 in all, 684 done): worker rest forest 96, worker gather forest 95, explorer explore 93, worker rest wood 42, worker gather wood 40, pioneer claim 30, worker rest quarry 24, carrier haul log wood -> saw 24, worker gather quarry 23, worker rest saw 21, worker toCraft saw 20, worker craft saw 20, builder build guard 10, worker rest fisher 10. Not done (outcome: times): failed: spot not next to the border ×30.

Fights and contact: first saw player 2 at 35:00.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Expedition: scouts 3, pioneers 1, posts 4 garrison 4, mines 0/1, carriers 14 idle 14, field 6, seen 2330.


Script: 1800 turns, 0.3 ms average, worst 5 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 14/2/1863/10/30 | 32/6/2913/10/50 |
| 30 | 20/4/2527/10/30 | 55/11/7402/23/77 |
| 45 | 23/5/2867/14/36 | 60/15/10608/36/84 |
| 60 | 25/6/3207/29/31 | 67/22/15230/58/62 |
| first | 15 15 17 19 - - | 8 9 18 18 21 25 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults. original game NPC: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults.

Soldiers every 5 min: 10 10 10 10 10 10 11 14 14 18 24 29 (original game NPC: 10 10 10 11 19 23 26 31 36 41 48 58).

First army orders (game min:sec): 0:00 armyReserve; 0:40 sendIn 1 soldiers -> building 74; 9:52 sendIn 1 soldiers -> building 144; 18:06 armyTarget sword=5; 18:06 armyTarget spear=4; 18:06 armyTarget bow=3; 18:16 armyTarget sword=4; 18:16 armyTarget spear=3; 18:16 armyTarget bow=1; 18:20 armyTarget sword=5; 18:20 armyTarget spear=4; 18:20 armyTarget bow=3.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 5 min, 1–53: settlers: No free settlers and every bed taken: build houses.
- 2 min, 12–13: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 26 min, 16–60: stall: iron mine: deposit worn out 92% of the last 5 minutes.
- 15 min, 17–49: stall: smelter: waiting for iron ore 88% of the last 5 minutes.
- 2 min, 17–18: stall: smith: waiting for iron 75% of the last 5 minutes.
- 32 min, 19–51: stall: weaponsmith: waiting for iron 85% of the last 5 minutes.
- 24 min, 21–45: stall: barracks: waiting for weapons from the weaponsmith 99% of the last 5 minutes.
- 18 min, 24–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 16 min, 28–60: stall: coal mine: deposit worn out 90% of the last 5 minutes.
- 7 min, 45–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 10 | 8 | 3 | 16 | 0 | 0 | 0 | 0 | 0 | 12 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 20 | 1863 | 7042 |
| 30 | 24 | 8 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 21 | 0 | 4 | 0 | 0 | 0 | 0 | 0 | 4 | 41 | 2527 | 9776 |
| 45 | 24 | 8 | 16 | 13 | 0 | 0 | 0 | 0 | 0 | 25 | 0 | 6 | 0 | 0 | 1 | 0 | 0 | 7 | 59 | 2867 | 12908 |
| 60 | 24 | 8 | 16 | 12 | 0 | 0 | 0 | 0 | 0 | 11 | 0 | 9 | 0 | 0 | 0 | 0 | 0 | 4 | 51 | 3207 | 15287 |

At the end: buildings (built+sites) guard 6, house 4, wood 2, quarry 2, forest 2, hq 1, saw 1, fisher 1, coalmine 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1.
People: soldier 22, worker 13, carrier 9, explorer 3, digger 2, builder 2, pioneer 1, geologist 1; beds 40. Soldiers: sword 11, bow 5, spear 6.

Goods produced in the game: fish 330, coal 76, log 75, stone 71, plank 55, ironore 37, iron 37, sword 11, spear 6, shovel 3, pick 2, bow 2, saw 1, hammer 1, rod 1, axe 1.
Goods consumed in the game: fish 324, stone 73, plank 71, coal 65, log 55, ironore 37, iron 28, sword 11, pick 7, spear 6, shovel 3, hammer 3, axe 2, bow 2, saw 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (220 building-min): Idle 100%, Waiting for a swordsman: train one at the barracks 0%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (94 building-min): Log pile full, nothing needs it right now 66%, Felling a tree 19%, Bringing a log to the pile 8%, Log pile full, waiting for carriers 6%, Worker picking up an axe 1%
- quarry (80 building-min): Stone pile full, nothing needs it right now 73%, Cutting stone 15%, Bringing stone to the pile 9%, Stone pile full, waiting for carriers 2%, Worker picking up a pickaxe 0%
- saw (58 building-min): Output pile full, nothing needs it right now 81%, Sawing planks 12%, Output pile full, waiting for carriers 4%, Stacking outside 3%, Fetching from the pile 0%
- fisher (58 building-min): Bringing a fish to the pile 36%, Fishing 36%, Fish pile full, nothing needs it right now 21%, No fish in range inside your border 6%, Fish pile full, waiting for carriers 1%
- house (135 building-min): Idle 100%
- forest (89 building-min): No free ground to plant in range inside your border 68%, Planting a sapling 31%, Worker picking up a shovel 1%, Working 0%, Idle 0%
- coalmine (49 building-min): Deposit worn out: finding little coal 61%, Deposit thinning: mining coal 12%, Coal pile full, nothing needs it right now 10%, Mining coal 6%, Bringing coal out 4%
- ironmine (47 building-min): Deposit worn out: finding little iron ore 83%, Needs meat or fish: mining stopped 10%, Bringing iron ore out 2%, Came back empty-handed 2%, Fetching food 2%
- smelter (46 building-min): Waiting for iron ore 87%, Smelting iron 10%, Stacking outside 2%, Waiting for coal and iron ore 0%, Fetching from the pile 0%
- smith (45 building-min): All tool targets met 81%, Waiting for iron 15%, Forging shovel 1%, Forging pickaxe 1%, Stacking outside 1%
- weaponsmith (43 building-min): Waiting for iron 86%, Forging sword 3%, Waiting for coal 3%, Waiting for coal and iron 3%, Forging spear 2%
- barracks (42 building-min): Waiting for weapons from the weaponsmith 85%, Weapons on the way 15%, Training soldiers 0%

Building sites, time per state (site-min): Builders at work 6, Waiting for a digger 5, Leveling the ground 4, Waiting for a builder 4, Waiting for materials 1.

Build order (placed at min:sec, finished at): guard 0:00→0:40, wood 0:02→0:57, quarry 0:40→1:20, saw 0:58→1:42, fisher 1:42→2:25, house 1:44→2:46, forest 6:02→6:33, guard 9:00→9:52, house 9:02→10:24, coalmine 10:00→10:56, ironmine 12:36→13:12, smelter 13:14→14:11, smith 14:12→14:46, weaponsmith 16:00→16:50, barracks 17:22→18:05, guard 18:12→18:55, forest 24:00→24:41, wood 24:02→25:00, guard 27:00→27:53, guard 36:00→36:45, house 37:34→38:36, quarry 37:58→38:51, guard 45:00→46:08, house 52:20→53:11.

Orders given: sendUnit 164, armyTarget 114, place 24, priority 20, profession 9, sendIn 6, weaponKeep 3, toolKeep 2, armyReserve 1. None refused.

People changing jobs: new carrier 40, carrier -> soldier 19, carrier -> worker 13, carrier -> geologist 3, carrier -> explorer 3, geologist -> carrier 2, carrier -> pioneer 1, new soldier 1.

People's orders (3622 in all, 3559 done): worker rest fisher 331, worker gather fisher 330, worker mine coalmine 226, worker rest forest 207, worker gather forest 205, worker mine ironmine 186, carrier haul fish fisher -> ironmine 165, worker eat coalmine 163, carrier haul fish fisher -> coalmine 161, worker eat ironmine 161, explorer explore 124, worker rest wood 77, worker rest coalmine 77, worker gather wood 75. Not done (outcome: times): failed: spot not next to the border ×36.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Expedition: scouts 3, pioneers 1, posts 6 garrison 7, mines 1/1, carriers 10 idle 4, field 11, seen 3207.


Script: 1800 turns, 0.3 ms average, worst 5 ms, 0 over 0.3 s, 0 errors. Orders refused: none.
