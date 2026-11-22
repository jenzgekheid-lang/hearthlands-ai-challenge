# Tournament: scheduled

Game version 249. Written for: scheduled 248.

- scheduled: hearthlands-ai-challenge, commit 6ba46c5

Maps 20261030, 777, 4242, 31, each twice (sides swapped), up to 60 game minutes (1x). 137 s.

Switches: the table defaults (src/data/rules.js).

Each game ends with the script's own game log: what it may know (its own side, and what happened to it or what it saw). Times are game min:sec.

| Opponent | Won | Lost | Undecided |
|---|---|---|---|
| original game NPC | 0 | 0 | 8 |

War and gold over all games (scheduled / opponents): buildings taken 0 / 0, killed 0 / 0, gold at the end (stock + vaults) 0 / 215, stuck towns 8 / 1.

## Games

Each row: buildings / military / land tiles / soldiers / people at the minute shown. First: game minute of the first smelter, smith, weaponsmith, barracks, tower, castle (- = never).

### Map 31: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 7/1/1583/10/30 | 32/6/2225/10/50 |
| 30 | 7/1/1996/10/30 | 62/12/5642/33/97 |
| 45 | 7/1/2397/10/30 | 78/15/7437/34/116 |
| 60 | 7/1/2799/10/30 | 81/19/11195/51/99 |
| first | - - - - - - | 10 11 19 19 23 26 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 2 in stock + 56 in vaults.

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 11 20 33 34 34 34 38 47 51).

First army orders (game min:sec): 0:00 armyReserve; 1:42 armyReserve.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (443 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 8 | 18 | 1 | 6 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 20 | 24 | 1583 | 3849 |
| 30 | 8 | 18 | 1 | 6 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 20 | 24 | 1996 | 4176 |
| 45 | 8 | 18 | 1 | 6 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 20 | 24 | 2397 | 4654 |
| 60 | 8 | 18 | 1 | 6 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 20 | 24 | 2799 | 8565 |

At the end: buildings (built+sites) house 2, hq 1, wood 1, saw 1, guard 1, hunter 1.
People: carrier 20, soldier 8, worker 3, digger 2, builder 2, pioneer 1, geologist 1, explorer 1; beds 20. Soldiers: sword 6, bow 2.

Goods produced in the game: log 15, plank 11, meat 8.
Goods consumed in the game: plank 17, stone 17, log 11, axe 1, saw 1, pick 1, shovel 1, bow 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (60 building-min): Log pile full, nothing needs it right now 91%, Felling a tree 6%, Bringing a log to the pile 3%, Worker picking up an axe 0%, Idle 0%
- saw (59 building-min): Output pile full, nothing needs it right now 96%, Sawing planks 2%, Stacking outside 0%, Worker picking up a saw 0%, Waiting for logs 0%
- guard (58 building-min): Idle 100%, Soldiers on the way 0%
- hunter (58 building-min): Meat pile full, nothing needs it right now 98%, Hunting 1%, Bringing meat to the pile 1%, Worker picking up a bow 0%
- house (115 building-min): Idle 100%

Building sites, time per state (site-min): Builders at work 1, Leveling the ground 1, Waiting for a digger 1, Waiting for a builder 1.

Build order (placed at min:sec, finished at): wood 0:02→0:21, saw 0:22→1:00, guard 1:02→1:36, hunter 1:08→1:58, house 1:36→2:26, house 2:32→3:03.

Orders given: sendUnit 86, place 6, profession 3, armyReserve 2, toolKeep 1, archers 1, priority 1. None refused.

People changing jobs: new carrier 20, carrier -> worker 3, carrier -> geologist 1, carrier -> pioneer 1, carrier -> explorer 1.

People's orders (213 in all, 205 done): explorer explore 27, pioneer claim 19, worker rest wood 16, worker gather wood 15, worker rest saw 12, worker toCraft saw 11, worker craft saw 11, worker rest hunter 10, worker gather hunter 9, carrier haul log wood -> saw 7, carrier haul stone pile -> house 6, carrier haul stone pile -> saw 4, carrier haul log pile -> saw 4, digger dig house 4. Not done (outcome: times): failed: can't reach that spot ×1.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 37.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 v248 pioneer-core: land 2538, pioneers 1, geo 1, posts 1/1, mines 0/0, pop 30/30, carriers 20/20, soldiers 10, enemy 0.


Script: 1800 turns, 0.1 ms average, worst 4 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 31: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 7/1/1587/10/20 | 30/6/2376/10/50 |
| 30 | 7/1/1977/10/20 | 44/6/2884/10/70 |
| 45 | 7/1/2382/10/20 | 68/10/5160/23/97 |
| 60 | 7/1/2791/10/20 | 79/16/10123/55/105 |
| first | - - - - - - | 10 10 21 34 38 49 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 44 in vaults.

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 10 23 23 23 37 48 55).

First army orders (game min:sec): 0:00 armyReserve; 2:06 armyReserve.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 1 min, 2: settlers: No free settlers and every bed taken: build houses.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (187 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 8 | 20 | 2 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 10 | 32 | 1587 | 2871 |
| 30 | 8 | 20 | 2 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 10 | 32 | 1977 | 3358 |
| 45 | 8 | 20 | 2 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 10 | 32 | 2382 | 3853 |
| 60 | 8 | 20 | 2 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 10 | 32 | 2791 | 4359 |

At the end: buildings (built+sites) hq 1, wood 1, saw 1, guard 1, fisher 1, hunter 1, house 1, look 0+1.
People: carrier 10, soldier 8, worker 4, digger 2, builder 2, geologist 1, pioneer 1; beds 10. Soldiers: sword 6, bow 2.

Goods produced in the game: log 16, plank 12, fish 8, meat 8.
Goods consumed in the game: plank 16, stone 16, log 12, axe 1, saw 1, rod 1, bow 1, pick 1, shovel 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (59 building-min): Log pile full, nothing needs it right now 92%, Felling a tree 6%, Bringing a log to the pile 2%, Worker picking up an axe 0%, Working 0%
- saw (59 building-min): Output pile full, nothing needs it right now 97%, Sawing planks 3%, Stacking outside 1%, Worker picking up a saw 0%, Waiting for logs 0%
- guard (58 building-min): Idle 100%, Soldiers on the way 0%
- fisher (58 building-min): Fish pile full, nothing needs it right now 98%, Fishing 1%, Worker picking up a fishing rod 1%, Bringing a fish to the pile 0%
- hunter (57 building-min): Meat pile full, nothing needs it right now 93%, Hunting 4%, Bringing meat to the pile 2%, Worker picking up a bow 0%, Idle 0%
- house (57 building-min): Idle 100%

Building sites, time per state (site-min): Waiting for materials 49, Builders at work 2, Leveling the ground 1, Waiting for a digger 1, Waiting for a builder 1.

Build order (placed at min:sec, finished at): wood 0:02→0:33, saw 0:34→1:13, guard 1:14→1:56, fisher 1:20→2:22, hunter 1:58→2:38, house 2:22→3:05, look 10:00→never.

Orders given: sendUnit 23, place 7, armyReserve 2, profession 2, toolKeep 1, archers 1, priority 1. None refused.

People changing jobs: new carrier 10, carrier -> worker 4, carrier -> geologist 1, carrier -> pioneer 1.

People's orders (224 in all, 216 done): pioneer claim 22, worker rest wood 17, worker gather wood 16, worker rest saw 13, worker rest hunter 13, worker toCraft saw 12, worker craft saw 12, worker gather hunter 12, worker rest fisher 9, carrier haul log wood -> saw 8, worker gather fisher 8, carrier haul stone pile -> saw 4, carrier haul log pile -> saw 4, carrier haul plank pile -> saw 3. None failed.

Warnings: site-stuck 4. Last: 31:00 site-stuck: Lookout tower site has not moved for 20 min (Waiting for materials) | 41:10 site-stuck: Lookout tower site has not moved for 30 min (Waiting for materials) | 51:20 site-stuck: Lookout tower site has not moved for 41 min (Waiting for materials)

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 v248 pioneer-core: land 2514, pioneers 1, geo 1, posts 1/1, mines 0/0, pop 20/20, carriers 10/10, soldiers 10, enemy 0.


Script: 1800 turns, 0.1 ms average, worst 3 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 7/1/1585/10/20 | 31/6/2687/10/50 |
| 30 | 7/1/1588/10/20 | 51/8/4928/16/84 |
| 45 | 7/1/1588/10/20 | 66/13/7743/25/95 |
| 60 | 7/1/1588/10/20 | 77/17/11007/35/85 |
| first | - - - - - - | 8 10 19 19 26 38 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults.

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 12 16 18 21 25 30 30 35).

First army orders (game min:sec): 0:00 armyReserve; 1:56 armyReserve.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (193 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 37 min, 24–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 10 | 17 | 2 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 10 | 32 | 1585 | 2846 |
| 30 | 10 | 17 | 2 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 10 | 32 | 1588 | 2848 |
| 45 | 10 | 17 | 2 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 10 | 32 | 1588 | 2848 |
| 60 | 10 | 17 | 2 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 10 | 32 | 1588 | 2848 |

At the end: buildings (built+sites) hq 1, wood 1, saw 1, guard 1, fisher 1, hunter 1, house 1, look 0+1.
People: carrier 10, soldier 8, worker 4, digger 2, builder 2, geologist 1, pioneer 1; beds 10. Soldiers: sword 6, bow 2.

Goods produced in the game: log 15, plank 9, fish 8, meat 8.
Goods consumed in the game: plank 16, stone 16, log 9, axe 1, saw 1, rod 1, bow 1, pick 1, shovel 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (60 building-min): Log pile full, nothing needs it right now 91%, Felling a tree 6%, Bringing a log to the pile 3%, Worker picking up an axe 0%, Working 0%
- saw (59 building-min): Output pile full, nothing needs it right now 97%, Sawing planks 2%, Waiting for logs 1%, Stacking outside 0%, Worker picking up a saw 0%
- guard (58 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- fisher (58 building-min): Fish pile full, nothing needs it right now 99%, Fishing 1%, Worker picking up a fishing rod 0%, Bringing a fish to the pile 0%, Working 0%
- hunter (57 building-min): Meat pile full, nothing needs it right now 97%, Hunting 2%, Bringing meat to the pile 1%, Worker picking up a bow 0%, Working 0%
- house (57 building-min): Idle 100%

Building sites, time per state (site-min): Waiting for materials 49, Builders at work 1, Leveling the ground 1, Waiting for a digger 1, Waiting for a builder 1.

Build order (placed at min:sec, finished at): wood 0:02→0:30, saw 0:32→1:06, guard 1:06→1:47, fisher 1:12→2:09, hunter 1:48→2:33, house 2:10→2:55, look 10:00→never.

Orders given: sendUnit 42, place 7, armyReserve 2, profession 2, toolKeep 1, archers 1, priority 1. None refused.

People changing jobs: new carrier 10, carrier -> worker 4, carrier -> geologist 1, carrier -> pioneer 1.

People's orders (187 in all, 180 done): worker rest wood 16, worker gather wood 15, worker rest saw 10, worker toCraft saw 9, worker craft saw 9, worker rest fisher 9, worker rest hunter 9, worker gather fisher 8, worker gather hunter 8, carrier haul log wood -> saw 7, pioneer claim 5, carrier haul stone pile -> saw 4, carrier haul log pile -> saw 4, carrier haul plank pile -> saw 3. None failed.

Failed path searches (who (task) why: times): pioneer (claim 0) cut-off 36.

Warnings: site-stuck 4. Last: 31:10 site-stuck: Lookout tower site has not moved for 20 min (Waiting for materials) | 41:20 site-stuck: Lookout tower site has not moved for 30 min (Waiting for materials) | 51:30 site-stuck: Lookout tower site has not moved for 41 min (Waiting for materials)

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 v248 pioneer-core: land 1588, pioneers 1, geo 1, posts 1/1, mines 0/0, pop 20/20, carriers 10/10, soldiers 10, enemy 0.


Script: 1800 turns, 0.1 ms average, worst 3 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 7/1/1620/10/20 | 31/6/2574/16/44 |
| 30 | 7/1/1971/10/20 | 40/14/5123/28/32 |
| 45 | 7/1/1971/10/20 | 54/15/6176/42/68 |
| 60 | 7/1/1971/10/20 | 74/15/7010/49/101 |
| first | - - - - - - | 9 9 10 11 - - |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 1 in stock + 42 in vaults.

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 16 26 27 28 33 38 42 42 46 49).

First army orders (game min:sec): 0:00 armyReserve; 2:02 armyReserve.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (372 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 23 min, 38–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 9 | 19 | 2 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 10 | 32 | 1620 | 3036 |
| 30 | 9 | 19 | 2 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 10 | 32 | 1971 | 3520 |
| 45 | 9 | 19 | 2 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 10 | 32 | 1971 | 3520 |
| 60 | 9 | 19 | 2 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 10 | 32 | 1971 | 3520 |

At the end: buildings (built+sites) hq 1, wood 1, saw 1, guard 1, fisher 1, hunter 1, house 1, look 0+1.
People: carrier 10, soldier 8, worker 4, digger 2, builder 2, geologist 1, pioneer 1; beds 10. Soldiers: sword 6, bow 2.

Goods produced in the game: log 16, plank 11, fish 8, meat 8.
Goods consumed in the game: plank 16, stone 16, log 11, axe 1, saw 1, rod 1, bow 1, pick 1, shovel 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (60 building-min): Log pile full, nothing needs it right now 88%, Felling a tree 7%, Bringing a log to the pile 4%, Worker picking up an axe 0%, Working 0%
- saw (59 building-min): Output pile full, nothing needs it right now 95%, Sawing planks 2%, Waiting for logs 1%, Stacking outside 1%, Worker picking up a saw 0%
- guard (58 building-min): Idle 100%, Soldiers on the way 0%
- fisher (58 building-min): Fish pile full, nothing needs it right now 99%, Fishing 1%, Worker picking up a fishing rod 0%, Bringing a fish to the pile 0%, Working 0%
- hunter (57 building-min): Meat pile full, nothing needs it right now 97%, Hunting 2%, Bringing meat to the pile 1%, Worker picking up a bow 0%, Idle 0%
- house (57 building-min): Idle 100%

Building sites, time per state (site-min): Waiting for materials 49, Builders at work 2, Waiting for a digger 1, Leveling the ground 1, Waiting for a builder 1.

Build order (placed at min:sec, finished at): wood 0:02→0:30, saw 0:30→1:08, guard 1:08→1:55, fisher 1:14→2:27, hunter 1:56→2:48, house 2:28→3:08, look 10:00→never.

Orders given: sendUnit 36, place 7, armyReserve 2, profession 2, toolKeep 1, archers 1, priority 1. None refused.

People changing jobs: new carrier 10, carrier -> worker 4, carrier -> geologist 1, carrier -> pioneer 1.

People's orders (202 in all, 195 done): worker rest wood 17, worker gather wood 16, worker rest saw 12, worker toCraft saw 11, worker craft saw 11, pioneer claim 10, worker rest fisher 9, worker rest hunter 9, carrier haul log wood -> saw 8, worker gather fisher 8, worker gather hunter 8, carrier haul stone pile -> saw 4, carrier haul log pile -> saw 4, carrier haul plank pile -> saw 3. None failed.

Failed path searches (who (task) why: times): pioneer (claim 0) cut-off 24.

Warnings: site-stuck 4. Last: 31:00 site-stuck: Lookout tower site has not moved for 20 min (Waiting for materials) | 41:10 site-stuck: Lookout tower site has not moved for 30 min (Waiting for materials) | 51:20 site-stuck: Lookout tower site has not moved for 41 min (Waiting for materials)

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 v248 pioneer-core: land 1971, pioneers 1, geo 1, posts 1/1, mines 0/0, pop 20/20, carriers 10/10, soldiers 10, enemy 0.


Script: 1800 turns, 0.1 ms average, worst 3 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 7/1/1476/10/20 | 32/6/2560/10/50 |
| 30 | 7/1/1573/10/20 | 62/9/4129/20/80 |
| 45 | 7/1/1573/10/20 | 79/13/6300/49/111 |
| 60 | 7/1/1573/10/20 | 78/13/7093/53/107 |
| first | - - - - - - | 10 11 22 21 - 42 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 1 in stock + 69 in vaults.

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 14 20 26 46 49 49 49 53).

First army orders (game min:sec): 0:00 armyReserve; 2:06 armyReserve.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 1 min, 2: settlers: No free settlers and every bed taken: build houses.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (192 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 34 min, 27–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 17 | 2 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 10 | 32 | 1476 | 3228 |
| 30 | 16 | 17 | 2 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 10 | 32 | 1573 | 3368 |
| 45 | 16 | 17 | 2 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 10 | 32 | 1573 | 3368 |
| 60 | 16 | 17 | 2 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 10 | 32 | 1573 | 3368 |

At the end: buildings (built+sites) hq 1, wood 1, saw 1, guard 1, fisher 1, hunter 1, house 1, look 0+1.
People: carrier 10, soldier 8, worker 4, digger 2, builder 2, pioneer 1, geologist 1; beds 10. Soldiers: sword 6, bow 2.

Goods produced in the game: log 21, plank 9, fish 8, meat 8.
Goods consumed in the game: plank 16, stone 16, log 9, axe 1, saw 1, rod 1, bow 1, shovel 1, pick 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (60 building-min): Log pile full, nothing needs it right now 88%, Felling a tree 8%, Bringing a log to the pile 4%, Worker picking up an axe 0%, Log pile full, waiting for carriers 0%
- saw (59 building-min): Output pile full, nothing needs it right now 97%, Sawing planks 2%, Worker picking up a saw 1%, Stacking outside 0%, Output pile full, waiting for carriers 0%
- guard (58 building-min): Idle 100%, Soldiers on the way 0%
- fisher (58 building-min): Fish pile full, nothing needs it right now 98%, Fishing 1%, Worker picking up a fishing rod 1%, Bringing a fish to the pile 0%, Fish pile full, waiting for carriers 0%
- hunter (57 building-min): Meat pile full, nothing needs it right now 97%, Hunting 2%, Bringing meat to the pile 1%, Worker picking up a bow 0%, Meat pile full, waiting for carriers 0%
- house (57 building-min): Idle 100%

Building sites, time per state (site-min): Waiting for materials 50, Builders at work 2, Leveling the ground 1, Waiting for a digger 1, Waiting for a builder 1.

Build order (placed at min:sec, finished at): wood 0:02→0:24, saw 0:26→1:03, guard 1:04→1:57, fisher 1:10→2:20, hunter 1:58→2:39, house 2:22→2:56, look 10:00→never.

Orders given: sendUnit 38, place 7, armyReserve 2, profession 2, toolKeep 1, archers 1, priority 1. None refused.

People changing jobs: new carrier 10, carrier -> worker 4, carrier -> pioneer 1, carrier -> geologist 1.

People's orders (206 in all, 199 done): worker rest wood 22, worker gather wood 21, carrier haul log wood -> saw 13, worker rest saw 10, worker rest hunter 10, worker toCraft saw 9, worker craft saw 9, worker rest fisher 9, worker gather hunter 9, worker gather fisher 8, carrier haul stone pile -> saw 4, carrier haul log pile -> saw 4, pioneer claim 4, carrier haul plank pile -> saw 3. None failed.

Failed path searches (who (task) why: times): pioneer (claim 0) cut-off 33.

Warnings: site-stuck 4. Last: 31:00 site-stuck: Lookout tower site has not moved for 20 min (Waiting for materials) | 41:10 site-stuck: Lookout tower site has not moved for 30 min (Waiting for materials) | 51:20 site-stuck: Lookout tower site has not moved for 41 min (Waiting for materials)

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 v248 pioneer-core: land 1573, pioneers 1, geo 1, posts 1/1, mines 0/0, pop 20/20, carriers 10/10, soldiers 10, enemy 0.


Script: 1800 turns, 0.1 ms average, worst 3 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 7/1/1457/10/20 | 26/6/1759/10/40 |
| 30 | 7/1/1808/10/20 | 26/6/1759/10/40 |
| 45 | 7/1/1808/10/20 | 26/6/1759/10/40 |
| 60 | 7/1/1808/10/20 | 26/6/1759/10/40 |
| first | - - - - - - | - - - - - - |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing).

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 10 10 10 10 10 10 10).

First army orders (game min:sec): 0:00 armyReserve; 1:54 armyReserve.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 1 min, 2: settlers: No free settlers and every bed taken: build houses.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (196 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 25 min, 36–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 9 | 19 | 2 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 10 | 32 | 1457 | 3012 |
| 30 | 9 | 19 | 2 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 10 | 32 | 1808 | 3535 |
| 45 | 9 | 19 | 2 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 10 | 32 | 1808 | 3535 |
| 60 | 9 | 19 | 2 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 10 | 32 | 1808 | 3535 |

At the end: buildings (built+sites) hq 1, wood 1, saw 1, guard 1, fisher 1, hunter 1, house 1, look 0+1.
People: carrier 10, soldier 8, worker 4, digger 2, builder 2, geologist 1, pioneer 1; beds 10. Soldiers: sword 6, bow 2.

Goods produced in the game: log 16, plank 11, fish 8, meat 8.
Goods consumed in the game: plank 16, stone 16, log 11, axe 1, saw 1, rod 1, bow 1, pick 1, shovel 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (59 building-min): Log pile full, nothing needs it right now 91%, Felling a tree 6%, Bringing a log to the pile 2%, Worker picking up an axe 0%, Working 0%
- saw (59 building-min): Output pile full, nothing needs it right now 97%, Sawing planks 2%, Stacking outside 0%, Worker picking up a saw 0%, Waiting for logs 0%
- guard (58 building-min): Idle 100%, Soldiers on the way 0%
- fisher (58 building-min): Fish pile full, nothing needs it right now 99%, Fishing 1%, Worker picking up a fishing rod 0%, Bringing a fish to the pile 0%, Idle 0%
- hunter (57 building-min): Meat pile full, nothing needs it right now 97%, Hunting 2%, Bringing meat to the pile 1%, Worker picking up a bow 0%, Working 0%
- house (57 building-min): Idle 100%

Building sites, time per state (site-min): Waiting for materials 50, Builders at work 1, Leveling the ground 1, Waiting for a digger 1, Waiting for a builder 1.

Build order (placed at min:sec, finished at): wood 0:02→0:31, saw 0:32→1:14, guard 1:16→1:46, fisher 1:22→2:19, hunter 1:48→2:46, house 2:20→3:10, look 10:00→never.

Orders given: sendUnit 35, place 7, armyReserve 2, profession 2, toolKeep 1, archers 1, priority 1. None refused.

People changing jobs: new carrier 10, carrier -> worker 4, carrier -> geologist 1, carrier -> pioneer 1.

People's orders (203 in all, 196 done): worker rest wood 17, worker gather wood 16, worker rest saw 12, worker toCraft saw 11, worker craft saw 11, worker rest hunter 11, worker gather hunter 10, worker rest fisher 9, carrier haul log wood -> saw 8, worker gather fisher 8, pioneer claim 8, carrier haul stone pile -> saw 4, carrier haul log pile -> saw 4, carrier haul plank pile -> saw 3. None failed.

Failed path searches (who (task) why: times): pioneer (claim 0) cut-off 26.

Warnings: site-stuck 4. Last: 31:00 site-stuck: Lookout tower site has not moved for 20 min (Waiting for materials) | 41:10 site-stuck: Lookout tower site has not moved for 30 min (Waiting for materials) | 51:20 site-stuck: Lookout tower site has not moved for 41 min (Waiting for materials)

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 v248 pioneer-core: land 1808, pioneers 1, geo 1, posts 1/1, mines 0/0, pop 20/20, carriers 10/10, soldiers 10, enemy 0.


Script: 1800 turns, 0.0 ms average, worst 3 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 7/1/1546/10/30 | 26/6/3061/10/40 |
| 30 | 7/1/1946/10/30 | 26/6/3452/10/40 |
| 45 | 7/1/2347/10/30 | 34/12/5937/20/40 |
| 60 | 7/1/2749/10/30 | 34/12/6329/26/34 |
| first | - - - - - - | 9 10 11 12 35 - |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults.

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 10 16 19 20 23 24 26).

First army orders (game min:sec): 0:00 armyReserve; 2:08 armyReserve.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (300 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 11 | 15 | 1 | 6 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 20 | 24 | 1546 | 2860 |
| 30 | 11 | 15 | 1 | 6 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 20 | 24 | 1946 | 3305 |
| 45 | 11 | 15 | 1 | 6 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 20 | 24 | 2347 | 3980 |
| 60 | 11 | 15 | 1 | 6 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 20 | 24 | 2749 | 4357 |

At the end: buildings (built+sites) house 2, hq 1, wood 1, saw 1, guard 1, hunter 1.
People: carrier 20, soldier 8, worker 3, digger 2, builder 2, geologist 1, pioneer 1, explorer 1; beds 20. Soldiers: sword 6, bow 2.

Goods produced in the game: log 15, plank 8, meat 8.
Goods consumed in the game: plank 17, stone 17, log 8, axe 1, saw 1, shovel 1, bow 1, pick 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (59 building-min): Log pile full, nothing needs it right now 93%, Felling a tree 5%, Bringing a log to the pile 2%, Worker picking up an axe 0%, Working 0%
- saw (59 building-min): Output pile full, nothing needs it right now 97%, Sawing planks 2%, Stacking outside 0%, Worker picking up a saw 0%, Fetching from the pile 0%
- guard (58 building-min): Idle 100%, Soldiers on the way 0%
- hunter (58 building-min): Meat pile full, nothing needs it right now 95%, Hunting 3%, Bringing meat to the pile 1%, Worker picking up a bow 0%
- house (114 building-min): Idle 100%

Building sites, time per state (site-min): Builders at work 1, Leveling the ground 1, Waiting for a digger 1, Waiting for a builder 1.

Build order (placed at min:sec, finished at): wood 0:02→0:31, saw 0:32→1:13, guard 1:14→1:58, hunter 1:20→2:17, house 2:00→2:34, house 2:40→3:13.

Orders given: sendUnit 22, place 6, profession 3, armyReserve 2, toolKeep 1, archers 1, priority 1. None refused.

People changing jobs: new carrier 20, carrier -> worker 3, carrier -> pioneer 1, carrier -> geologist 1, carrier -> explorer 1.

People's orders (183 in all, 176 done): pioneer claim 19, worker rest wood 16, worker gather wood 15, worker rest hunter 13, worker gather hunter 12, worker rest saw 9, worker toCraft saw 8, worker craft saw 8, carrier haul log wood -> saw 7, carrier haul plank pile -> house 6, carrier haul stone pile -> house 6, carrier haul stone pile -> saw 4, carrier haul log pile -> saw 4, digger dig house 4. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 v248 pioneer-core: land 2475, pioneers 1, geo 1, posts 1/1, mines 0/0, pop 30/30, carriers 20/20, soldiers 10, enemy 0.


Script: 1800 turns, 0.2 ms average, worst 3 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 7/1/1567/10/20 | 36/6/3102/10/60 |
| 30 | 7/1/1970/10/20 | 59/12/7057/28/82 |
| 45 | 7/1/2383/10/20 | 64/17/11009/42/68 |
| 60 | 7/1/2794/10/20 | 70/23/14532/59/71 |
| first | - - - - - - | 9 9 17 17 21 28 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults.

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 11 21 28 31 35 42 46 54 59).

First army orders (game min:sec): 0:00 armyReserve; 1:52 armyReserve.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (511 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 8 | 19 | 2 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 10 | 32 | 1567 | 2951 |
| 30 | 8 | 19 | 2 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 10 | 32 | 1970 | 3295 |
| 45 | 8 | 19 | 2 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 10 | 32 | 2383 | 3771 |
| 60 | 8 | 19 | 2 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 10 | 32 | 2794 | 4391 |

At the end: buildings (built+sites) hq 1, wood 1, saw 1, guard 1, fisher 1, hunter 1, house 1, look 0+1.
People: carrier 10, soldier 8, worker 4, digger 2, builder 2, geologist 1, pioneer 1; beds 10. Soldiers: sword 6, bow 2.

Goods produced in the game: log 15, plank 11, fish 8, meat 8.
Goods consumed in the game: plank 16, stone 16, log 11, axe 1, saw 1, rod 1, bow 1, pick 1, shovel 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (59 building-min): Log pile full, nothing needs it right now 91%, Felling a tree 6%, Bringing a log to the pile 3%, Worker picking up an axe 0%, Working 0%
- saw (59 building-min): Output pile full, nothing needs it right now 96%, Sawing planks 2%, Waiting for logs 1%, Stacking outside 0%, Worker picking up a saw 0%
- guard (58 building-min): Idle 100%, Soldiers on the way 0%
- fisher (58 building-min): Fish pile full, nothing needs it right now 99%, Fishing 1%, Worker picking up a fishing rod 0%, Bringing a fish to the pile 0%, Idle 0%
- hunter (57 building-min): Meat pile full, nothing needs it right now 96%, Hunting 2%, Bringing meat to the pile 2%, Worker picking up a bow 0%
- house (57 building-min): Idle 100%

Building sites, time per state (site-min): Waiting for materials 50, Builders at work 2, Leveling the ground 1, Waiting for a digger 1, Waiting for a builder 1.

Build order (placed at min:sec, finished at): wood 0:02→0:32, saw 0:34→1:07, guard 1:08→1:43, fisher 1:14→2:13, hunter 1:44→2:41, house 2:14→3:01, look 10:00→never.

Orders given: sendUnit 23, place 7, armyReserve 2, profession 2, toolKeep 1, archers 1, priority 1. None refused.

People changing jobs: new carrier 10, carrier -> worker 4, carrier -> geologist 1, carrier -> pioneer 1.

People's orders (210 in all, 202 done): pioneer claim 19, worker rest wood 16, worker gather wood 15, worker rest saw 12, worker toCraft saw 11, worker craft saw 11, worker rest fisher 9, worker rest hunter 9, worker gather fisher 8, worker gather hunter 8, carrier haul log wood -> saw 7, carrier haul stone pile -> saw 4, carrier haul log pile -> saw 4, geologist geo 4. None failed.

Warnings: site-stuck 4. Last: 30:50 site-stuck: Lookout tower site has not moved for 20 min (Waiting for materials) | 41:00 site-stuck: Lookout tower site has not moved for 30 min (Waiting for materials) | 51:10 site-stuck: Lookout tower site has not moved for 41 min (Waiting for materials)

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 v248 pioneer-core: land 2517, pioneers 1, geo 1, posts 1/1, mines 0/0, pop 20/20, carriers 10/10, soldiers 10, enemy 0.


Script: 1800 turns, 0.1 ms average, worst 3 ms, 0 over 0.3 s, 0 errors. Orders refused: none.
