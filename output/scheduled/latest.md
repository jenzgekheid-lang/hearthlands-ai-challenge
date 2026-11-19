# Tournament: scheduled

Game version 243. Written for: scheduled 240.

- scheduled: hearthlands-ai-challenge, commit b0f4401

Maps 20261030, 777, 4242, 31, each twice (sides swapped), up to 60 game minutes (1x). 67 s.

Switches: vault on, banner off, armor off, vet off, gear off.

Each game ends with the script's own game log: what it may know (its own side, and what happened to it or what it saw). Times are game min:sec.

| Opponent | Won | Lost | Undecided |
|---|---|---|---|
| original game NPC | 0 | 0 | 8 |

War and gold over all games (scheduled / opponents): buildings taken 0 / 0, killed 6 / 4, gold at the end (stock + vaults) 41 / 354, stuck towns 6 / 0.

## Games

Each row: buildings / military / land tiles / soldiers / people at the minute shown. First: game minute of the first smelter, smith, weaponsmith, barracks, tower, castle (- = never).

### Map 31: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 20/1/1605/10/90 | 27/6/2483/10/50 |
| 30 | 20/1/2026/10/90 | 71/14/5869/37/93 |
| 45 | 20/1/2439/10/90 | 83/21/10315/65/105 |
| 60 | 20/1/2570/10/90 | 91/28/14395/84/106 |
| first | 11 13 - - - - | 8 9 21 21 27 35 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 72 in vaults.

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 22 37 48 58 65 73 79 84).

First army orders (game min:sec): 0:00 armyReserve; 0:36 sendIn 1 soldiers -> building 73.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 47 min, 14–60: stall: sawmill: waiting for logs 100% of the last 5 minutes.
- 47 min, 14–60: stall: woodcutter: no grown trees in range inside your border 100% of the last 5 minutes.
- 46 min, 15–60: stall: smith: waiting for coal 100% of the last 5 minutes.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 3 min, 58–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 0 | 1 | 8 | 16 | 0 | 0 | 0 | 0 | 0 | 19 | 0 | 12 | 0 | 0 | 0 | 0 | 0 | 68 | 36 | 1605 | 7275 |
| 30 | 0 | 1 | 11 | 20 | 0 | 0 | 0 | 0 | 0 | 22 | 9 | 14 | 0 | 0 | 0 | 0 | 0 | 72 | 52 | 2026 | 11934 |
| 45 | 0 | 1 | 11 | 20 | 0 | 0 | 0 | 0 | 0 | 22 | 9 | 14 | 0 | 0 | 0 | 0 | 0 | 73 | 52 | 2439 | 16209 |
| 60 | 0 | 1 | 11 | 20 | 0 | 0 | 0 | 0 | 0 | 22 | 9 | 14 | 0 | 0 | 0 | 0 | 0 | 73 | 51 | 2570 | 18196 |

At the end: buildings (built+sites) house 8, guard 1+1, coalmine 2, hq 1, wood 1, quarry 1, saw 1, fisher 1, ironmine 1, smelter 1, look 1, smith 1.
People: carrier 73, worker 10, soldier 8, digger 2, builder 2, explorer 2, pioneer 1; beds 80. Soldiers: sword 5, bow 3.

Goods produced in the game: fish 85, stone 49, coal 46, plank 36, log 32, ironore 28, iron 19, pick 2, saw 1, shovel 1, rod 1.
Goods consumed in the game: fish 71, plank 59, stone 56, log 36, coal 24, ironore 19, pick 6, iron 5, hammer 2, axe 1, saw 1, rod 1, shovel 1.
Goods lost in the game: pick 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (59 building-min): Idle 100%, Soldiers on the way 0%
- wood (59 building-min): No grown trees in range inside your border 82%, Felling a tree 12%, Bringing a log to the pile 5%, Worker picking up an axe 0%, Working 0%
- quarry (59 building-min): Stone pile full, nothing needs it right now 84%, Cutting stone 12%, Bringing stone to the pile 4%, Worker picking up a pickaxe 0%, Working 0%
- saw (59 building-min): Waiting for logs 84%, Sawing planks 8%, Output pile full, nothing needs it right now 6%, Stacking outside 2%, Fetching from the pile 0%
- house (440 building-min): Idle 100%
- fisher (58 building-min): Fish pile full, nothing needs it right now 85%, Fishing 8%, Bringing a fish to the pile 6%, Worker picking up a fishing rod 1%, Working 0%
- coalmine (100 building-min): Coal pile full, nothing needs it right now 91%, Mining coal 6%, Bringing coal out 1%, Worker picking up a pickaxe 1%, Needs bread or fish: mining stopped 0%
- ironmine (50 building-min): Iron ore pile full, nothing needs it right now 75%, Deposit worn out: finding little iron ore 10%, Deposit thinning: mining iron ore 8%, Mining iron ore 4%, Bringing iron ore out 1%
- smelter (49 building-min): Output pile full, nothing needs it right now 89%, Smelting iron 5%, Waiting for iron ore 4%, Stacking outside 1%, Worker picking up a hammer 0%
- look (49 building-min): Scout on watch 100%, Working 0%
- smith (48 building-min): Waiting for coal 98%, Forging pickaxe 1%, Worker picking up a hammer 0%, Stacking outside 0%, Forging shovel 0%

Building sites, time per state (site-min): Waiting for materials 45, Builders at work 5, Leveling the ground 3, Waiting for a builder 3, Waiting for a digger 3.

Build order (placed at min:sec, finished at): guard 0:00→0:36, wood 0:02→0:51, quarry 0:36→1:08, saw 0:52→1:30, house 1:10→1:47, fisher 1:32→2:17, house 2:06→2:48, house 3:08→3:37, house 3:56→4:28, house 4:48→5:25, house 5:44→6:20, house 6:38→7:11, coalmine 6:46→7:37, house 7:30→8:02, ironmine 9:10→9:50, smelter 9:50→11:00, look 10:14→11:30, smith 11:14→12:11, coalmine 12:00→12:43, guard 15:00→never.

Orders given: sendUnit 150, place 20, priority 11, profession 7, toolKeep 2, armyReserve 1, sendIn 1. None refused.

People changing jobs: new carrier 80, carrier -> worker 10, carrier -> explorer 2, carrier -> geologist 2, geologist -> carrier 2, carrier -> pioneer 1.

People's orders (1331 in all, 1317 done): explorer explore 121, worker rest fisher 86, worker gather fisher 85, worker mine ironmine 64, worker mine coalmine 60, worker rest quarry 50, worker gather quarry 49, carrier haul fish fisher -> ironmine 49, worker rest coalmine 48, worker eat ironmine 45, worker rest saw 37, worker toCraft saw 36, worker craft saw 36, worker rest wood 33. None failed.

Failed path searches (who (task) why: times): pioneer (claim 0) cut-off 14, pioneer (claim 1) cut-off 1.

Fights and contact: first saw player 2 at 49:00.

Warnings: site-stuck 4. Last: 36:00 site-stuck: Small tower site has not moved for 20 min (Waiting for materials) | 46:10 site-stuck: Small tower site has not moved for 30 min (Waiting for materials) | 56:20 site-stuck: Small tower site has not moved for 41 min (Waiting for materials)

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Macro raid: scouts 2, pioneers 1, posts 2 garrison 2, mines 2/1, gold 0, carriers 72 idle 72, field 8, seen 2570.


Script: 1800 turns, 0.2 ms average, worst 6 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 31: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 15/1/1543/10/90 | 31/6/2353/10/50 |
| 30 | 18/2/2209/10/90 | 67/14/5936/41/99 |
| 45 | 18/2/2570/10/90 | 80/23/11887/68/92 |
| 60 | 18/2/2918/10/90 | 90/28/16001/89/91 |
| first | - - - - - - | 12 13 20 21 27 29 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 17 in vaults.

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 18 41 51 60 68 75 84 89).

First army orders (game min:sec): 0:00 armyReserve; 0:44 sendIn 1 soldiers -> building 74; 15:34 sendIn 1 soldiers -> building 242.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 1 min, 1: settlers: No free settlers and every bed taken: build houses.
- 49 min, 12–60: stall: woodcutter: no grown trees in range inside your border 100% of the last 5 minutes.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 5 min, 15–19: ore: No coal or iron mine yet: send a geologist to the mountains on your land (23 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 38 min, 23–60: stall: sawmill: waiting for logs 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 5 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 77 | 24 | 1543 | 7196 |
| 30 | 0 | 3 | 14 | 16 | 0 | 0 | 0 | 0 | 0 | 8 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 75 | 32 | 2209 | 12022 |
| 45 | 0 | 3 | 14 | 16 | 0 | 0 | 0 | 0 | 0 | 8 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 76 | 32 | 2570 | 17805 |
| 60 | 0 | 3 | 14 | 16 | 0 | 0 | 0 | 0 | 0 | 8 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 76 | 32 | 2918 | 17828 |

At the end: buildings (built+sites) house 8, guard 2, hq 1, wood 1, quarry 1, saw 1, fisher 1, look 1, ironmine 1, coalmine 1, smelter 0+1.
People: carrier 76, soldier 7, worker 7, digger 2, builder 2, explorer 2, pioneer 1; beds 80. Soldiers: sword 4, bow 3.

Goods produced in the game: stone 43, plank 29, log 25, fish 19, ironore 8, coal 8.
Goods consumed in the game: plank 50, stone 47, log 29, fish 9, pick 4, axe 1, saw 1, rod 1, shovel 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (104 building-min): Idle 100%, Waiting for a swordsman: train one at the barracks 0%, Soldiers on the way 0%
- wood (59 building-min): No grown trees in range inside your border 86%, Felling a tree 10%, Bringing a log to the pile 4%, Worker picking up an axe 0%, Working 0%
- quarry (59 building-min): Stone pile full, nothing needs it right now 83%, Cutting stone 12%, Bringing stone to the pile 6%, Worker picking up a pickaxe 0%, Working 0%
- saw (58 building-min): Waiting for logs 68%, Output pile full, nothing needs it right now 24%, Sawing planks 6%, Stacking outside 1%, Fetching from the pile 0%
- house (440 building-min): Idle 100%
- fisher (58 building-min): Fish pile full, nothing needs it right now 98%, Fishing 1%, Bringing a fish to the pile 1%, Worker picking up a fishing rod 0%
- look (49 building-min): Scout on watch 100%, Working 0%
- ironmine (39 building-min): Iron ore pile full, nothing needs it right now 96%, Mining iron ore 3%, Worker picking up a pickaxe 1%, Bringing iron ore out 1%, Fetching food 0%
- coalmine (36 building-min): Coal pile full, nothing needs it right now 96%, Mining coal 2%, Worker picking up a pickaxe 1%, Bringing coal out 1%, Working 0%

Building sites, time per state (site-min): Waiting for materials 35, Builders at work 4, Leveling the ground 3, Waiting for a digger 2, Waiting for a builder 2.

Build order (placed at min:sec, finished at): guard 0:00→0:43, wood 0:02→0:56, quarry 0:44→1:17, saw 0:58→1:39, house 1:18→1:58, fisher 1:40→2:20, house 2:16→2:52, house 3:10→3:39, house 3:58→4:31, house 4:50→5:21, house 5:40→6:20, house 6:38→7:05, house 7:24→8:25, look 10:00→10:36, guard 15:00→15:34, ironmine 19:44→20:36, coalmine 23:38→24:06, smelter 24:08→never.

Orders given: sendUnit 168, place 18, priority 9, profession 5, toolKeep 2, sendIn 2, armyReserve 1. None refused.

People changing jobs: new carrier 80, carrier -> worker 7, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1, geologist -> carrier 1.

People's orders (671 in all, 659 done): explorer explore 89, worker rest quarry 44, worker gather quarry 43, worker rest saw 30, worker toCraft saw 29, worker craft saw 29, worker rest wood 26, worker gather wood 25, carrier haul log wood -> saw 25, pioneer claim 25, worker rest fisher 20, worker gather fisher 19, carrier haul stone quarry -> house 18, digger dig house 16. None failed.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 52, pioneer (claim 1) cut-off 3.

Fights and contact: first saw player 1 at 37:00.

Warnings: site-stuck 3. Last: 35:10 site-stuck: Iron smelter site has not moved for 10 min (Waiting for materials) | 45:20 site-stuck: Iron smelter site has not moved for 20 min (Waiting for materials) | 55:30 site-stuck: Iron smelter site has not moved for 30 min (Waiting for materials)

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Macro raid: scouts 2, pioneers 1, posts 2 garrison 3, mines 1/1, gold 0, carriers 76 idle 76, field 7, seen 2684.


Script: 1800 turns, 0.1 ms average, worst 7 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 15/1/1458/10/90 | 32/6/2416/10/50 |
| 30 | 22/2/2223/10/90 | 66/11/4636/22/88 |
| 45 | 27/2/2637/10/90 | 84/21/11999/69/91 |
| 60 | 27/2/2874/10/90 | 93/29/17246/90/90 |
| first | 30 33 35 36 - - | 8 9 10 12 33 38 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 1 in stock + 40 in vaults. original game NPC: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 29 in vaults.

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 22 35 60 69 78 82 90).

First army orders (game min:sec): 0:00 armyReserve; 0:40 sendIn 1 soldiers -> building 73; 15:46 sendIn 1 soldiers -> building 242; 35:26 armyTarget sword=20; 35:26 armyTarget spear=15; 35:26 armyTarget bow=13; 45:00 armyTarget sword=23; 45:00 armyTarget spear=17; 45:00 armyTarget bow=16.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 1 min, 2: settlers: No free settlers and every bed taken: build houses.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 7 min, 13–32: stall: woodcutter: no grown trees in range inside your border 54% of the last 5 minutes.
- 5 min, 15–19: ore: No coal or iron mine yet: send a geologist to the mountains on your land (34 mountain tiles).
- 15 min, 20–34: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 7 min, 31–37: stall: iron mine: deposit worn out 84% of the last 5 minutes.
- 8 min, 32–39: stall: gold mine: deposit worn out 94% of the last 5 minutes.
- 5 min, 33–37: stall: goldsmelter: waiting for gold ore 90% of the last 5 minutes.
- 23 min, 38–60: stall: barracks: waiting for weapons from the weaponsmith 100% of the last 5 minutes.
- 23 min, 38–60: stall: smith: waiting for coal 100% of the last 5 minutes.
- 21 min, 40–60: stall: weaponsmith: waiting for coal 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 10 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 78 | 26 | 1458 | 6216 |
| 30 | 4 | 8 | 3 | 16 | 0 | 0 | 0 | 0 | 0 | 8 | 3 | 0 | 0 | 11 | 0 | 0 | 0 | 63 | 14 | 2223 | 11592 |
| 45 | 10 | 8 | 16 | 8 | 0 | 0 | 0 | 0 | 0 | 4 | 1 | 19 | 6 | 23 | 0 | 0 | 0 | 65 | 41 | 2637 | 15505 |
| 60 | 10 | 8 | 16 | 6 | 0 | 0 | 0 | 0 | 0 | 4 | 7 | 20 | 6 | 41 | 0 | 0 | 0 | 66 | 49 | 2874 | 15519 |

At the end: buildings (built+sites) house 8, guard 2, wood 2, quarry 2, hq 1, saw 1, fisher 1, look 1, coalmine 1, goldmine 1, goldsmelter 1, ironmine 1, vault 1, smelter 1, smith 1, weaponsmith 1, barracks 1.
People: carrier 69, worker 14, soldier 7, digger 2, builder 2, explorer 2, pioneer 1; beds 80. Soldiers: sword 4, bow 3.

Goods produced in the game: fish 260, stone 84, coal 73, log 72, plank 66, goldore 47, gold 41, ironore 31, iron 24, pick 3, hammer 1.
Goods consumed in the game: fish 260, stone 86, plank 82, coal 69, log 66, goldore 41, ironore 24, pick 6, hammer 4, iron 4, axe 2, saw 1, rod 1, shovel 1.
Goods lost in the game: pick 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (104 building-min): Idle 100%, Waiting for a swordsman: train one at the barracks 0%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (88 building-min): No grown trees in range inside your border 42%, Log pile full, nothing needs it right now 32%, Felling a tree 19%, Bringing a log to the pile 7%, Worker picking up an axe 1%
- quarry (86 building-min): Stone pile full, nothing needs it right now 76%, Cutting stone 16%, Bringing stone to the pile 7%, Worker picking up a pickaxe 0%, Working 0%
- saw (58 building-min): Output pile full, nothing needs it right now 81%, Sawing planks 14%, Stacking outside 3%, Waiting for logs 1%, Fetching from the pile 0%
- house (439 building-min): Idle 100%
- fisher (57 building-min): Fish pile full, nothing needs it right now 42%, Fishing 31%, Bringing a fish to the pile 27%, Worker picking up a fishing rod 1%
- look (49 building-min): Scout on watch 100%, Idle 0%, Working 0%
- coalmine (39 building-min): Deposit worn out: finding little coal 59%, Coal pile full, nothing needs it right now 15%, Deposit thinning: mining coal 10%, Mining coal 6%, Bringing coal out 5%
- goldmine (33 building-min): Deposit worn out: finding little gold ore 87%, Bringing gold ore out 4%, Deposit thinning: mining gold ore 4%, Came back empty-handed 2%, Mining gold ore 2%
- goldsmelter (32 building-min): Waiting for coal 43%, Waiting for gold ore 36%, Smelting gold 16%, Stacking outside 3%, Waiting for coal and gold ore 1%
- ironmine (32 building-min): Deposit worn out: finding little iron ore 62%, Needs meat or fish: mining stopped 30%, Bringing iron ore out 3%, Came back empty-handed 2%, Fetching food 1%
- vault (32 building-min): Idle 100%
- smelter (30 building-min): Output pile full, nothing needs it right now 50%, Waiting for iron ore 36%, Smelting iron 10%, Stacking outside 2%, Worker picking up a hammer 1%
- smith (28 building-min): Waiting for coal 97%, Forging pickaxe 1%, Worker picking up a hammer 1%, Forging hammer 0%, Stacking outside 0%
- weaponsmith (26 building-min): Waiting for coal 97%, Waiting for coal and iron 2%, Worker picking up a hammer 0%, Working 0%, Idle 0%
- barracks (25 building-min): Waiting for weapons from the weaponsmith 100%

Building sites, time per state (site-min): Builders at work 7, Leveling the ground 6, Waiting for a builder 4, Waiting for a digger 4.

Build order (placed at min:sec, finished at): guard 0:00→0:39, wood 0:02→1:00, quarry 0:40→1:23, saw 1:00→1:44, house 1:24→2:01, fisher 1:44→2:34, house 2:20→2:54, house 3:14→3:48, house 4:06→4:39, house 4:58→5:33, house 5:52→6:35, house 6:54→7:29, house 7:48→8:21, look 10:00→10:31, guard 15:00→15:45, coalmine 19:52→20:31, goldmine 25:56→26:38, goldsmelter 26:38→27:34, ironmine 26:46→28:01, vault 27:36→28:23, smelter 29:10→29:59, wood 30:00→30:50, smith 31:06→32:05, quarry 32:06→32:55, weaponsmith 33:30→34:29, barracks 34:30→35:26.

Orders given: sendUnit 129, place 26, priority 16, armyTarget 6, profession 5, weaponKeep 3, toolKeep 2, sendIn 2, armyReserve 1. None refused.

People changing jobs: new carrier 80, carrier -> worker 14, carrier -> explorer 2, carrier -> pioneer 1, carrier -> geologist 1, geologist -> carrier 1.

People's orders (3020 in all, 2999 done): worker rest fisher 261, worker gather fisher 260, worker mine coalmine 177, worker eat coalmine 124, carrier haul fish fisher -> coalmine 120, worker mine ironmine 109, explorer explore 98, worker mine goldmine 89, worker rest quarry 86, worker gather quarry 84, carrier haul fish fisher -> ironmine 84, worker eat ironmine 84, worker rest coalmine 76, worker rest wood 74. None failed.

Failed path searches (who (task) why: times): pioneer (claim 0) cut-off 8, pioneer (claim 1) cut-off 4.

Fights and contact: first saw player 2 at 38:00.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Macro raid: scouts 2, pioneers 1, posts 2 garrison 3, mines 1/1, gold 1, carriers 69 idle 67, field 7, seen 2772.


Script: 1800 turns, 0.3 ms average, worst 7 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 15/1/1652/10/90 | 29/6/2450/10/40 |
| 30 | 17/2/2470/10/90 | 53/11/5449/27/63 |
| 45 | 17/2/2896/10/90 | 63/19/10881/48/62 |
| 60 | 23/2/3263/6/90 | 72/27/15441/64/60 |
| first | 57 59 60 - - - | 10 13 21 22 26 28 |

War and gold at the end: scheduled: took 0, lost 0, killed 6, fallen 4, gold 0 in stock + 0 in vaults. original game NPC: took 0, lost 0, killed 4, fallen 6, gold 0 in stock + 18 in vaults.

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 6 (original game NPC: 10 10 10 10 13 27 41 45 48 54 64 64).

First army orders (game min:sec): 0:00 armyReserve; 0:44 sendIn 1 soldiers -> building 74; 15:34 sendIn 1 soldiers -> building 230; 59:00 march 4 soldiers -> 158,97; 59:20 march 2 soldiers -> 178,100.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 1 min, 2: settlers: No free settlers and every bed taken: build houses.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 5 min, 15–19: ore: No coal or iron mine yet: send a geologist to the mountains on your land (103 mountain tiles).
- 40 min, 20–59: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 2 min, 59–60: stall: woodcutter: no grown trees in range inside your border 70% of the last 5 minutes.
- 1 min, 60: army: Lost 4 soldiers in the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 78 | 32 | 1652 | 7092 |
| 30 | 16 | 8 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 76 | 40 | 2470 | 12409 |
| 45 | 16 | 8 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 77 | 40 | 2896 | 17147 |
| 60 | 0 | 9 | 11 | 14 | 0 | 0 | 0 | 0 | 0 | 5 | 4 | 12 | 0 | 0 | 0 | 0 | 0 | 62 | 21 | 3263 | 18315 |

At the end: buildings (built+sites) house 8, guard 2, wood 2, quarry 2, hq 1, saw 1, fisher 1, look 1, ironmine 1, coalmine 1, smelter 1, smith 1, weaponsmith 1, barracks 0+1.
People: carrier 71, worker 12, soldier 3, digger 2, builder 2, explorer 2, pioneer 1; beds 80. Soldiers: sword 1, bow 2.

Goods produced in the game: stone 63, plank 51, log 47, fish 37, coal 26, ironore 21, iron 16, pick 2, saw 1, hammer 1.
Goods consumed in the game: stone 70, plank 66, log 51, fish 29, coal 21, ironore 17, pick 6, iron 4, hammer 3, axe 1, saw 1, rod 1, shovel 1.
Goods lost in the game: pick 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (104 building-min): Idle 99%, Waiting for a swordsman: train one at the barracks 0%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (59 building-min): Log pile full, nothing needs it right now 70%, Felling a tree 17%, Bringing a log to the pile 7%, No grown trees in range inside your border 6%, Worker picking up an axe 1%
- quarry (61 building-min): Stone pile full, nothing needs it right now 72%, Cutting stone 18%, Bringing stone to the pile 9%, Worker picking up a pickaxe 1%, Working 0%
- saw (58 building-min): Output pile full, nothing needs it right now 86%, Sawing planks 11%, Stacking outside 2%, Fetching from the pile 0%, Waiting for logs 0%
- house (438 building-min): Idle 100%
- fisher (57 building-min): Fish pile full, nothing needs it right now 93%, Fishing 4%, Bringing a fish to the pile 3%, Worker picking up a fishing rod 1%
- look (49 building-min): Scout on watch 100%, Working 0%
- ironmine (40 building-min): Iron ore pile full, nothing needs it right now 88%, Mining iron ore 6%, Deposit thinning: mining iron ore 4%, Bringing iron ore out 2%, Worker picking up a pickaxe 1%
- coalmine (4 building-min): Mining coal 69%, Bringing coal out 15%, Worker picking up a pickaxe 12%, Needs bread or fish: mining stopped 2%, Fetching food 1%
- smelter (3 building-min): Smelting iron 70%, Stacking outside 14%, Waiting for coal 7%, Worker picking up a hammer 7%, Fetching from the pile 2%
- smith (1 building-min): Waiting for coal 38%, Forging pickaxe 17%, Worker picking up a hammer 15%, Forging saw 9%, Forging hammer 9%
- weaponsmith (1 building-min): Worker picking up a hammer 47%, Waiting for coal 47%, Working 6%

Building sites, time per state (site-min): Builders at work 5, Leveling the ground 5, Waiting for a digger 4, Waiting for a builder 4.

Build order (placed at min:sec, finished at): guard 0:00→0:44, wood 0:02→1:03, quarry 0:44→1:24, saw 1:04→1:46, house 1:24→2:04, fisher 1:46→2:38, house 2:22→2:58, house 3:16→3:50, house 4:08→4:42, house 5:02→5:37, house 5:56→6:40, house 6:58→7:43, house 8:02→8:33, look 10:00→10:43, guard 15:00→15:34, ironmine 19:22→20:05, coalmine 54:32→55:33, smelter 55:34→56:58, quarry 55:54→57:22, smith 57:26→58:34, weaponsmith 58:36→59:28, wood 58:58→59:55, barracks 59:28→never.

Orders given: sendUnit 132, place 23, priority 14, profession 7, toolKeep 2, sendIn 2, march 2, armyReserve 1. None refused.

People changing jobs: new carrier 80, carrier -> worker 12, carrier -> explorer 2, carrier -> geologist 2, geologist -> carrier 2, carrier -> pioneer 1, new soldier 1.

People's orders (1219 in all, 1189 done): explorer explore 108, worker rest quarry 65, worker gather quarry 64, worker rest saw 52, worker toCraft saw 51, worker craft saw 51, worker rest wood 48, worker gather wood 47, carrier haul log wood -> saw 47, worker rest fisher 38, worker gather fisher 37, worker mine coalmine 32, worker mine ironmine 31, worker rest coalmine 27. Not done (outcome: times): failed: can't reach that spot ×1.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 2.

Fights and contact: was attacked 1 times (first 59:04); killed spear 4, sword 2; lost people sword 3, bow 1; first saw player 1 at 22:00.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Macro raid: scouts 2, pioneers 1, posts 2 garrison 3, mines 0/1, gold 0, carriers 77 idle 77, field 7, seen 3040.


Script: 1812 turns, 0.3 ms average, worst 8 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 15/1/1311/10/90 | 35/10/3821/21/39 |
| 30 | 16/2/1940/10/90 | 69/14/5819/28/82 |
| 45 | 17/2/2362/10/90 | 72/14/6628/45/65 |
| 60 | 17/2/2783/10/90 | 72/14/7418/47/63 |
| first | - - - - - - | 7 8 10 11 - - |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 6 in stock + 30 in vaults.

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 21 22 26 28 31 35 45 47 47 47).

First army orders (game min:sec): 0:00 armyReserve; 0:30 sendIn 1 soldiers -> building 73; 15:42 sendIn 1 soldiers -> building 245.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 1 min, 2: settlers: No free settlers and every bed taken: build houses.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 25 min, 15–39: ore: No coal or iron mine yet: send a geologist to the mountains on your land (54 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 18 min, 43–60: stall: woodcutter: no grown trees in range inside your border 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 15 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 78 | 31 | 1311 | 6736 |
| 30 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 78 | 32 | 1940 | 10735 |
| 45 | 13 | 8 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 77 | 37 | 2362 | 13837 |
| 60 | 13 | 8 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 77 | 37 | 2783 | 13848 |

At the end: buildings (built+sites) house 8, guard 2, hq 1, wood 1, quarry 1, saw 1, fisher 1, look 1, ironmine 1.
People: carrier 77, soldier 7, worker 6, digger 2, builder 2, explorer 2, pioneer 1; beds 80. Soldiers: sword 4, bow 3.

Goods produced in the game: log 39, stone 36, plank 30, fish 15, ironore 8.
Goods consumed in the game: plank 46, stone 46, log 30, fish 9, pick 4, axe 1, saw 1, rod 1, shovel 1.
Goods lost in the game: pick 2.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (104 building-min): Idle 100%, Waiting for a swordsman: train one at the barracks 0%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (59 building-min): Log pile full, nothing needs it right now 39%, No grown trees in range inside your border 39%, Felling a tree 15%, Bringing a log to the pile 7%, Worker picking up an axe 0%
- quarry (59 building-min): Stone pile full, nothing needs it right now 81%, Cutting stone 12%, Bringing stone to the pile 6%, Worker picking up a pickaxe 0%, Working 0%
- saw (58 building-min): Output pile full, nothing needs it right now 92%, Sawing planks 7%, Stacking outside 1%, Worker picking up a saw 0%, Fetching from the pile 0%
- house (442 building-min): Idle 100%
- fisher (58 building-min): Fish pile full, nothing needs it right now 98%, Fishing 1%, Bringing a fish to the pile 1%, Worker picking up a fishing rod 0%
- look (49 building-min): Scout on watch 100%, Working 0%
- ironmine (20 building-min): Iron ore pile full, nothing needs it right now 85%, Mining iron ore 10%, Worker picking up a pickaxe 4%, Bringing iron ore out 1%, Fetching food 0%

Building sites, time per state (site-min): Builders at work 4, Leveling the ground 3, Waiting for a digger 2, Waiting for a builder 1, Waiting for materials 0.

Build order (placed at min:sec, finished at): guard 0:00→0:29, wood 0:02→0:59, quarry 0:30→1:17, saw 1:00→1:37, house 1:18→1:55, fisher 1:38→2:12, house 2:14→2:40, house 3:00→3:26, house 3:44→4:07, house 4:26→4:58, house 5:16→5:57, house 6:16→6:52, house 7:12→7:58, look 10:00→10:43, guard 15:00→15:40, ironmine 39:04→39:52.

Orders given: sendUnit 109, place 16, priority 7, profession 7, toolKeep 2, sendIn 2, armyReserve 1. None refused.

People changing jobs: new carrier 80, carrier -> worker 6, carrier -> explorer 2, carrier -> geologist 2, geologist -> carrier 2, carrier -> pioneer 1.

People's orders (641 in all, 630 done): explorer explore 89, worker rest wood 40, worker gather wood 39, worker rest quarry 37, worker gather quarry 36, carrier haul log wood -> saw 34, worker rest saw 31, worker toCraft saw 30, worker craft saw 30, carrier haul stone quarry -> house 19, pioneer claim 18, digger dig house 16, builder build house 16, worker rest fisher 16. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Macro raid: scouts 2, pioneers 1, posts 2 garrison 3, mines 0/1, gold 0, carriers 77 idle 77, field 7, seen 2504.


Script: 1800 turns, 0.4 ms average, worst 7 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 16/1/1543/10/90 | 27/6/2414/10/40 |
| 30 | 22/2/2262/25/75 | 54/7/3611/11/79 |
| 45 | 23/2/2676/39/61 | 71/11/7882/31/79 |
| 60 | 23/2/2782/48/52 | 82/20/13335/66/84 |
| first | 17 18 20 21 - - | 11 11 22 24 36 27 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 41 in vaults.

Soldiers every 5 min: 10 10 10 10 17 25 30 34 39 42 45 48 (original game NPC: 10 10 10 10 11 11 12 18 31 43 57 66).

First army orders (game min:sec): 0:00 armyReserve; 0:44 sendIn 1 soldiers -> building 74; 16:02 sendIn 1 soldiers -> building 227; 20:20 armyTarget sword=15; 20:20 armyTarget spear=11; 20:20 armyTarget bow=10; 30:00 armyTarget sword=20; 30:00 armyTarget spear=15; 30:00 armyTarget bow=13; 45:00 armyTarget sword=23; 45:00 armyTarget spear=17; 45:00 armyTarget bow=16.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 1 min, 2: settlers: No free settlers and every bed taken: build houses.
- 4 min, 12–15: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 15 min, 18–32: stall: woodcutter: no grown trees in range inside your border 82% of the last 5 minutes.
- 29 min, 20–60: stall: smith: waiting for coal 100% of the last 5 minutes.
- 34 min, 22–60: stall: weaponsmith: waiting for coal 93% of the last 5 minutes.
- 9 min, 23–53: stall: barracks: waiting for weapons from the weaponsmith 94% of the last 5 minutes.
- 10 min, 24–33: stall: sawmill: waiting for logs 87% of the last 5 minutes.
- 4 min, 34–56: stall: iron mine: deposit worn out 87% of the last 5 minutes.
- 22 min, 38–60: stall: coal mine: deposit worn out 92% of the last 5 minutes.
- 3 min, 58–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 14 | 10 | 9 | 17 | 0 | 0 | 0 | 0 | 0 | 0 | 7 | 0 | 0 | 0 | 0 | 0 | 0 | 75 | 34 | 1543 | 7335 |
| 30 | 0 | 4 | 8 | 21 | 0 | 0 | 0 | 0 | 0 | 2 | 12 | 20 | 0 | 0 | 0 | 0 | 0 | 54 | 38 | 2262 | 12886 |
| 45 | 10 | 8 | 8 | 21 | 0 | 0 | 0 | 0 | 0 | 0 | 14 | 19 | 0 | 0 | 0 | 0 | 0 | 42 | 52 | 2676 | 14963 |
| 60 | 10 | 8 | 8 | 21 | 0 | 0 | 0 | 0 | 0 | 0 | 13 | 20 | 0 | 0 | 0 | 0 | 0 | 32 | 52 | 2782 | 14963 |

At the end: buildings (built+sites) house 8, guard 2, wood 2, hq 1, quarry 1, saw 1, fisher 1, look 1, ironmine 1, coalmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1.
People: soldier 45, carrier 34, worker 11, digger 2, builder 2, explorer 2, pioneer 1; beds 80. Soldiers: sword 20, bow 12, spear 13.

Goods produced in the game: fish 299, coal 108, ironore 77, iron 64, stone 62, log 58, plank 52, sword 16, spear 13, bow 9, pick 1, saw 1, hammer 1, shovel 1, rod 1, axe 1.
Goods consumed in the game: fish 284, coal 108, stone 72, plank 68, ironore 64, log 52, iron 44, sword 16, spear 13, bow 9, pick 4, hammer 3, axe 2, saw 1, rod 1, shovel 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (103 building-min): Idle 100%, Waiting for a swordsman: train one at the barracks 0%, Soldiers on the way 0%
- wood (88 building-min): No grown trees in range inside your border 51%, Log pile full, nothing needs it right now 31%, Felling a tree 13%, Bringing a log to the pile 4%, Worker picking up an axe 1%
- quarry (59 building-min): Stone pile full, nothing needs it right now 75%, Cutting stone 17%, Bringing stone to the pile 8%, Worker picking up a pickaxe 0%, Working 0%
- saw (58 building-min): Output pile full, nothing needs it right now 63%, Waiting for logs 22%, Sawing planks 11%, Stacking outside 2%, Fetching from the pile 0%
- house (438 building-min): Idle 100%
- fisher (58 building-min): Fish pile full, nothing needs it right now 51%, Fishing 28%, Bringing a fish to the pile 20%, Worker picking up a fishing rod 0%, Idle 0%
- look (49 building-min): Scout on watch 100%, Scout on the way 0%, Working 0%
- ironmine (47 building-min): Deposit worn out: finding little iron ore 36%, Iron ore pile full, nothing needs it right now 32%, Deposit thinning: mining iron ore 17%, Mining iron ore 7%, Bringing iron ore out 4%
- coalmine (45 building-min): Deposit worn out: finding little coal 55%, Deposit thinning: mining coal 22%, Mining coal 11%, Bringing coal out 6%, Came back empty-handed 2%
- smelter (43 building-min): Output pile full, nothing needs it right now 43%, Waiting for coal 33%, Smelting iron 18%, Stacking outside 4%, Fetching from the pile 1%
- smith (42 building-min): Waiting for coal 76%, All tool targets met 21%, Worker picking up a hammer 1%, Stacking outside 0%, Forging hammer 0%
- weaponsmith (41 building-min): Waiting for coal 85%, Forging sword 5%, Forging spear 4%, Forging bow 3%, Stacking outside 2%
- barracks (40 building-min): Waiting for weapons from the weaponsmith 79%, Weapons on the way 20%, Training soldiers 1%

Building sites, time per state (site-min): Builders at work 6, Leveling the ground 5, Waiting for a digger 3, Waiting for a builder 3.

Build order (placed at min:sec, finished at): guard 0:00→0:44, wood 0:02→1:00, quarry 0:44→1:21, saw 1:02→1:41, house 1:22→1:59, fisher 1:42→2:27, house 2:18→2:51, house 3:10→3:46, house 4:04→4:39, house 4:58→5:39, house 5:58→6:32, house 6:50→7:36, house 7:54→8:47, look 10:00→10:50, ironmine 12:40→13:23, coalmine 14:40→15:09, guard 15:00→16:00, smelter 15:20→16:40, smith 16:40→17:32, weaponsmith 18:04→19:01, barracks 19:14→20:19, wood 30:00→30:52.

Orders given: sendUnit 108, place 22, priority 13, armyTarget 9, profession 5, weaponKeep 3, toolKeep 2, sendIn 2, armyReserve 1. None refused.

People changing jobs: new carrier 80, carrier -> soldier 38, carrier -> worker 11, carrier -> explorer 2, carrier -> pioneer 1, carrier -> geologist 1, geologist -> carrier 1.

People's orders (3221 in all, 3204 done): worker rest fisher 300, worker gather fisher 299, worker mine coalmine 246, worker mine ironmine 172, carrier haul fish fisher -> coalmine 170, worker eat coalmine 166, carrier haul fish fisher -> ironmine 122, worker eat ironmine 118, worker rest coalmine 109, explorer explore 78, worker rest ironmine 78, carrier haul ironore ironmine -> smelter 70, worker rest smelter 65, carrier haul coal coalmine -> smelter 64. None failed.

Failed path searches (who (task) why: times): pioneer (claim 0) cut-off 14, pioneer (claim 1) cut-off 3.

Fights and contact: first saw player 1 at 55:00.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Macro raid: scouts 2, pioneers 1, posts 2 garrison 3, mines 1/1, gold 0, carriers 40 idle 36, field 39, seen 2782.


Script: 1800 turns, 0.4 ms average, worst 6 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 18/1/1562/10/90 | 21/6/2986/10/40 |
| 30 | 18/1/1986/10/90 | 33/7/3408/17/43 |
| 45 | 18/1/2146/10/90 | 51/17/8543/33/57 |
| 60 | 18/1/2146/10/90 | 51/17/8929/33/57 |
| first | 14 - - - - - | 8 9 27 28 30 - |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 97 in vaults.

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 17 31 33 33 33 33 33).

First army orders (game min:sec): 0:00 armyReserve; 0:56 sendIn 1 soldiers -> building 73.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 1 min, 2: settlers: No free settlers and every bed taken: build houses.
- 50 min, 11–60: stall: woodcutter: no grown trees in range inside your border 100% of the last 5 minutes.
- 1 min, 12: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: stall: sawmill: waiting for logs 100% of the last 5 minutes.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 17 min, 44–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 0 | 0 | 8 | 21 | 0 | 0 | 0 | 0 | 0 | 10 | 8 | 8 | 0 | 0 | 0 | 0 | 0 | 72 | 29 | 1562 | 6346 |
| 30 | 0 | 0 | 11 | 22 | 0 | 0 | 0 | 0 | 0 | 14 | 13 | 8 | 0 | 0 | 0 | 0 | 0 | 74 | 40 | 1986 | 12264 |
| 45 | 0 | 0 | 11 | 22 | 0 | 0 | 0 | 0 | 0 | 14 | 13 | 8 | 0 | 0 | 0 | 0 | 0 | 75 | 40 | 2146 | 18299 |
| 60 | 0 | 0 | 11 | 22 | 0 | 0 | 0 | 0 | 0 | 14 | 13 | 8 | 0 | 0 | 0 | 0 | 0 | 75 | 40 | 2146 | 23157 |

At the end: buildings (built+sites) house 8, guard 1+1, hq 1, wood 1, quarry 1, saw 1, fisher 1, look 1, coalmine 1, ironmine 1, smelter 1.
People: carrier 75, soldier 8, worker 8, digger 2, builder 2, explorer 2, pioneer 1; beds 80. Soldiers: sword 5, bow 3.

Goods produced in the game: stone 43, fish 40, plank 28, log 24, coal 22, ironore 21, iron 8.
Goods consumed in the game: plank 52, stone 50, log 28, fish 24, coal 8, ironore 8, pick 4, axe 1, saw 1, rod 1, shovel 1, hammer 1.
Goods lost in the game: pick 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (59 building-min): Idle 100%, Soldiers on the way 0%
- wood (59 building-min): No grown trees in range inside your border 88%, Felling a tree 9%, Bringing a log to the pile 3%, Worker picking up an axe 0%, Working 0%
- quarry (58 building-min): Stone pile full, nothing needs it right now 81%, Cutting stone 13%, Bringing stone to the pile 6%, Worker picking up a pickaxe 0%, Working 0%
- saw (58 building-min): Waiting for logs 83%, Output pile full, nothing needs it right now 9%, Sawing planks 6%, Stacking outside 1%, Worker picking up a saw 0%
- house (434 building-min): Idle 100%
- fisher (57 building-min): Fish pile full, nothing needs it right now 95%, Fishing 3%, Bringing a fish to the pile 2%, Worker picking up a fishing rod 1%
- look (49 building-min): Scout on watch 100%, Working 0%
- coalmine (49 building-min): Coal pile full, nothing needs it right now 91%, Mining coal 6%, Bringing coal out 1%, Worker picking up a pickaxe 1%, Fetching food 0%
- ironmine (48 building-min): Iron ore pile full, nothing needs it right now 93%, Mining iron ore 4%, Deposit thinning: mining iron ore 2%, Bringing iron ore out 1%, Worker picking up a pickaxe 1%
- smelter (47 building-min): Output pile full, nothing needs it right now 97%, Smelting iron 2%, Stacking outside 0%, Worker picking up a hammer 0%, Working 0%

Building sites, time per state (site-min): Waiting for materials 44, Builders at work 4, Leveling the ground 4, Waiting for a digger 3, Waiting for a builder 2.

Build order (placed at min:sec, finished at): guard 0:00→0:54, wood 0:02→1:14, quarry 0:56→1:34, saw 1:14→1:55, house 1:36→2:12, fisher 1:56→2:46, house 2:32→3:31, house 3:50→4:19, house 4:38→5:15, house 5:34→6:12, house 6:30→7:16, house 7:34→8:11, house 8:30→9:06, look 10:00→10:42, coalmine 10:24→10:56, ironmine 11:40→12:08, smelter 12:08→13:08, guard 15:00→never.

Orders given: sendUnit 182, place 18, priority 9, profession 5, toolKeep 2, armyReserve 1, sendIn 1. None refused.

People changing jobs: new carrier 80, carrier -> worker 8, carrier -> explorer 2, carrier -> pioneer 1, carrier -> geologist 1, geologist -> carrier 1.

People's orders (881 in all, 869 done): explorer explore 138, worker rest quarry 44, worker gather quarry 43, worker rest fisher 41, worker gather fisher 40, worker rest saw 29, worker toCraft saw 28, worker craft saw 28, worker mine coalmine 26, worker rest wood 25, worker gather wood 24, carrier haul log wood -> saw 24, worker mine ironmine 24, worker rest coalmine 23. None failed.

Failed path searches (who (task) why: times): pioneer (claim 0) cut-off 32, pioneer (claim 1) cut-off 1.

Fights and contact: first saw player 2 at 19:00.

Warnings: site-stuck 4. Last: 36:20 site-stuck: Small tower site has not moved for 20 min (Waiting for materials) | 46:30 site-stuck: Small tower site has not moved for 30 min (Waiting for materials) | 56:40 site-stuck: Small tower site has not moved for 41 min (Waiting for materials)

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Macro raid: scouts 2, pioneers 1, posts 2 garrison 2, mines 1/1, gold 0, carriers 75 idle 75, field 8, seen 2146.


Script: 1800 turns, 0.1 ms average, worst 7 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 15/1/1650/10/90 | 32/6/2731/10/50 |
| 30 | 18/2/2236/10/90 | 63/11/6027/28/82 |
| 45 | 18/2/2239/10/90 | 76/15/8886/55/95 |
| 60 | 18/2/2239/10/90 | 83/21/13418/73/97 |
| first | - - - - - - | 8 9 18 19 25 37 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 44 in vaults.

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 27 28 36 51 55 61 66 73).

First army orders (game min:sec): 0:00 armyReserve; 0:40 sendIn 1 soldiers -> building 74; 15:34 sendIn 1 soldiers -> building 243.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 1–2: settlers: No free settlers and every bed taken: build houses.
- 49 min, 12–60: stall: woodcutter: no grown trees in range inside your border 100% of the last 5 minutes.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (119 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 37 min, 24–60: stall: sawmill: waiting for logs 100% of the last 5 minutes.
- 36 min, 25–60: stall: goldsmelter: waiting for coal 100% of the last 5 minutes.
- 22 min, 39–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 3 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 77 | 24 | 1650 | 7081 |
| 30 | 0 | 0 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 14 | 0 | 0 | 0 | 0 | 75 | 24 | 2236 | 11480 |
| 45 | 0 | 0 | 10 | 12 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 14 | 0 | 0 | 0 | 0 | 76 | 24 | 2239 | 11480 |
| 60 | 0 | 0 | 10 | 12 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 14 | 0 | 0 | 0 | 0 | 76 | 24 | 2239 | 11480 |

At the end: buildings (built+sites) house 8, guard 2, wood 1+1, hq 1, quarry 1, saw 1, fisher 1, look 1, goldmine 1, goldsmelter 1.
People: carrier 76, soldier 7, worker 7, digger 2, builder 2, explorer 2, pioneer 1; beds 80. Soldiers: sword 4, bow 3.

Goods produced in the game: stone 44, plank 27, log 23, goldore 14, fish 10.
Goods consumed in the game: stone 52, plank 51, log 27, fish 4, pick 3, axe 1, saw 1, rod 1, shovel 1, hammer 1.
Goods lost in the game: pick 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (104 building-min): Idle 100%, Waiting for a swordsman: train one at the barracks 0%, Soldiers on the way 0%
- wood (59 building-min): No grown trees in range inside your border 87%, Felling a tree 9%, Bringing a log to the pile 4%, Worker picking up an axe 0%, Working 0%
- quarry (59 building-min): Stone pile full, nothing needs it right now 79%, Cutting stone 13%, Bringing stone to the pile 8%, Worker picking up a pickaxe 0%, Working 0%
- saw (58 building-min): Waiting for logs 67%, Output pile full, nothing needs it right now 25%, Sawing planks 6%, Stacking outside 1%, Worker picking up a saw 0%
- house (438 building-min): Idle 100%
- fisher (58 building-min): Fish pile full, nothing needs it right now 98%, Bringing a fish to the pile 1%, Fishing 1%, Worker picking up a fishing rod 0%
- look (49 building-min): Scout on watch 100%, Idle 0%, Working 0%
- goldmine (39 building-min): Gold ore pile full, nothing needs it right now 92%, Mining gold ore 5%, Worker picking up a pickaxe 2%, Bringing gold ore out 1%, Came back empty-handed 0%
- goldsmelter (38 building-min): Waiting for coal 99%, Worker picking up a hammer 0%, Waiting for coal and gold ore 0%, Working 0%

Building sites, time per state (site-min): Waiting for materials 30, Builders at work 4, Leveling the ground 3, Waiting for a digger 2, Waiting for a builder 2.

Build order (placed at min:sec, finished at): guard 0:00→0:40, wood 0:02→0:57, quarry 0:40→1:20, saw 0:58→1:42, house 1:20→1:59, fisher 1:42→2:27, house 2:18→2:54, house 3:12→3:51, house 4:10→4:43, house 5:02→5:44, house 6:02→6:33, house 6:52→7:28, house 7:48→8:24, look 10:00→10:56, guard 15:00→15:34, goldmine 20:30→21:11, goldsmelter 21:12→22:08, wood 30:00→never.

Orders given: sendUnit 115, place 18, priority 9, profession 5, toolKeep 2, sendIn 2, armyReserve 1. None refused.

People changing jobs: new carrier 80, carrier -> worker 7, carrier -> explorer 2, carrier -> pioneer 1, carrier -> geologist 1, geologist -> carrier 1.

People's orders (580 in all, 569 done): explorer explore 58, worker rest quarry 45, worker gather quarry 44, worker rest saw 28, worker toCraft saw 27, worker craft saw 27, worker rest wood 24, worker gather wood 23, carrier haul log wood -> saw 23, carrier haul stone quarry -> house 20, worker mine goldmine 17, digger dig house 16, builder build house 16, worker rest goldmine 15. None failed.

Failed path searches (who (task) why: times): pioneer (claim 0) cut-off 49, pioneer (claim 1) cut-off 1.

Fights and contact: first saw player 1 at 22:00.

Warnings: site-stuck 2. Last: 40:50 site-stuck: Woodcutter site has not moved for 10 min (Waiting for materials) | 51:00 site-stuck: Woodcutter site has not moved for 20 min (Waiting for materials)

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 Macro raid: scouts 2, pioneers 1, posts 2 garrison 3, mines 0/0, gold 1, carriers 76 idle 76, field 7, seen 2239.


Script: 1800 turns, 0.5 ms average, worst 7 ms, 0 over 0.3 s, 0 errors. Orders refused: none.
