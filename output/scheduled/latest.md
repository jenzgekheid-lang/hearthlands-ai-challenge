# Tournament: scheduled

Game version 245. Written for: scheduled 245.

- scheduled: hearthlands-ai-challenge, commit d91d2c3

Maps 20261030, 777, 4242, 31, each twice (sides swapped), up to 60 game minutes (1x). 127 s.

Switches: the table defaults (src/data/rules.js).

Each game ends with the script's own game log: what it may know (its own side, and what happened to it or what it saw). Times are game min:sec.

| Opponent | Won | Lost | Undecided |
|---|---|---|---|
| original game NPC | 0 | 0 | 8 |

War and gold over all games (scheduled / opponents): buildings taken 0 / 0, killed 0 / 0, gold at the end (stock + vaults) 0 / 271, stuck towns 8 / 0.

## Games

Each row: buildings / military / land tiles / soldiers / people at the minute shown. First: game minute of the first smelter, smith, weaponsmith, barracks, tower, castle (- = never).

### Map 31: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 18/2/1434/10/40 | 25/6/2529/10/40 |
| 30 | 26/2/1459/18/42 | 57/7/4060/19/81 |
| 45 | 26/2/1459/27/33 | 73/13/8539/30/100 |
| 60 | 26/2/1459/28/32 | 82/20/12913/50/100 |
| first | 11 12 18 19 - - | 9 10 23 24 35 35 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 35 in vaults.

Soldiers every 5 min: 10 10 10 16 16 18 25 27 27 27 27 28 (original game NPC: 10 10 10 10 10 19 19 25 30 36 41 50).

First army orders (game min:sec): 0:00 armyReserve; 2:20 sendIn 1 soldiers -> building 85; 2:22 sendIn 1 soldiers -> building 85; 7:46 sendIn 1 soldiers -> building 142; 7:48 sendIn 1 soldiers -> building 142; 7:50 sendIn 1 soldiers -> building 142; 18:58 armyTarget sword=10; 18:58 armyTarget spear=6; 18:58 armyTarget bow=8; 51:30 armyTarget sword=18; 51:30 armyTarget spear=10; 51:30 armyTarget bow=12.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 1–19: settlers: No free settlers and every bed taken: build houses.
- 57 min, 4–60: orders: The order "fighters" was sent 60 times this minute: send it only when something changes.
- 57 min, 4–60: orders: The order "archers" was sent 60 times this minute: send it only when something changes.
- 5 min, 14–18: stall: smith: waiting for coal 60% of the last 5 minutes.
- 41 min, 19–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 3 min, 22–24: stall: weaponsmith: waiting for coal 59% of the last 5 minutes.
- 17 min, 23–39: stall: barracks: waiting for iron armor for new spearmen 100% of the last 5 minutes.
- 5 min, 24–28: weapons: 11 weapons lie unused: the barracks needs free settlers (build houses).
- 12 min, 25–48: stall: smelter: waiting for iron ore 59% of the last 5 minutes.
- 4 min, 27–30: stall: armorer: waiting for iron 83% of the last 5 minutes.
- 33 min, 28–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 30 min, 31–60: stall: iron mine: deposit worn out 94% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 4 | 11 | 9 | 0 | 0 | 5 | 8 | 5 | 2 | 12 | 10 | 14 | 0 | 0 | 0 | 0 | 1 | 16 | 41 | 1434 | 2660 |
| 30 | 8 | 8 | 16 | 0 | 12 | 24 | 14 | 16 | 14 | 22 | 0 | 6 | 0 | 0 | 1 | 4 | 4 | 15 | 89 | 1459 | 3828 |
| 45 | 8 | 8 | 16 | 0 | 12 | 23 | 14 | 16 | 14 | 24 | 0 | 12 | 0 | 0 | 0 | 0 | 0 | 8 | 96 | 1459 | 3828 |
| 60 | 8 | 8 | 16 | 0 | 11 | 24 | 14 | 16 | 14 | 22 | 5 | 25 | 0 | 0 | 1 | 0 | 0 | 5 | 101 | 1459 | 3828 |

At the end: buildings (built+sites) house 4, quarry 2, hunter 2, guard 2, hq 1, wood 1, saw 1, forest 1, ironmine 1, coalmine 1, smelter 1, waterhut 1, smith 1, farm 1, mill 1, bakery 1, look 1, weaponsmith 1, barracks 1, armorer 1.
People: soldier 26, worker 18, carrier 8, digger 2, builder 2, explorer 1, geologist 1; beds 40. Soldiers: sword 12, bow 8, spear 6.

Goods produced in the game: meat 128, coal 120, stone 85, ironore 79, iron 74, grain 72, log 69, plank 65, water 56, flour 56, bread 41, armor 25, sword 8, spear 6, bow 5, pick 2, hammer 2, saw 1.
Goods consumed in the game: meat 104, coal 98, stone 87, plank 81, ironore 74, log 65, grain 56, iron 49, water 42, flour 42, bread 30, armor 25, bow 7, sword 7, fish 6, spear 6, pick 5, hammer 4, axe 1, saw 1, shovel 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (60 building-min): Log pile full, nothing needs it right now 59%, Felling a tree 28%, Bringing a log to the pile 12%, Log pile full, waiting for carriers 1%, Worker picking up an axe 0%
- quarry (103 building-min): Stone pile full, nothing needs it right now 80%, Cutting stone 12%, Bringing stone to the pile 5%, Stone pile full, waiting for carriers 2%, Worker picking up a pickaxe 0%
- saw (59 building-min): Output pile full, nothing needs it right now 76%, Sawing planks 14%, Waiting for logs 5%, Stacking outside 3%, Output pile full, waiting for carriers 2%
- forest (59 building-min): No free ground to plant in range inside your border 71%, Planting a sapling 29%, Idle 0%, Worker picking up a shovel 0%, Working 0%
- house (205 building-min): Idle 100%
- hunter (103 building-min): Meat pile full, nothing needs it right now 81%, Hunting 10%, Bringing meat to the pile 5%, Meat pile full, waiting for carriers 4%, Worker picking up a bow 0%
- guard (110 building-min): Idle 100%, Soldiers on the way 0%
- ironmine (51 building-min): Deposit worn out: finding little iron ore 61%, Deposit thinning: mining iron ore 19%, Mining iron ore 9%, Bringing iron ore out 4%, Iron ore pile full, nothing needs it right now 3%
- coalmine (51 building-min): Coal pile full, nothing needs it right now 47%, Mining coal 31%, Deposit thinning: mining coal 13%, Bringing coal out 6%, Came back empty-handed 1%
- smelter (50 building-min): Waiting for iron ore 44%, Output pile full, nothing needs it right now 32%, Smelting iron 19%, Stacking outside 4%, Fetching from the pile 1%
- waterhut (50 building-min): Water pile full, nothing needs it right now 83%, Fetching water 8%, Bringing water to the pile 6%, Water pile full, waiting for carriers 3%, Worker on the way 0%
- smith (49 building-min): All tool targets met 89%, Waiting for coal 9%, Worker picking up a hammer 1%, Forging pickaxe 1%, Forging hammer 1%
- farm (47 building-min): Grain pile full, nothing needs it right now 75%, Sowing a field 11%, Harvesting grain 8%, Bringing grain to the pile 4%, Grain pile full, waiting for carriers 2%
- mill (46 building-min): Output pile full, nothing needs it right now 84%, Grinding flour 7%, Stacking outside 3%, Output pile full, waiting for carriers 3%, Waiting for grain 3%
- bakery (45 building-min): Output pile full, nothing needs it right now 74%, Baking bread 21%, Stacking outside 3%, Output pile full, waiting for carriers 2%, Fetching from the pile 0%
- look (43 building-min): Scout on watch 100%, Working 0%
- weaponsmith (42 building-min): All weapon targets met 82%, Waiting for coal 7%, Waiting for iron 3%, Forging sword 2%, Forging spear 2%
- barracks (41 building-min): Soldier targets met 48%, Waiting for iron armor for new spearmen 46%, Weapons on the way 3%, Waiting for weapons from the weaponsmith 2%, Waiting for iron armor for new bowmen 0%
- armorer (40 building-min): All armor targets met 52%, Waiting for iron 37%, Making iron armor 8%, Stacking outside 2%, Worker picking up a hammer 1%

Building sites, time per state (site-min): Builders at work 7, Leveling the ground 4, Waiting for a builder 3, Waiting for a digger 3, Waiting for materials 1.

Build order (placed at min:sec, finished at): wood 0:02→0:21, quarry 0:04→0:36, saw 0:22→0:55, forest 0:36→1:12, house 0:56→1:29, hunter 1:14→1:46, guard 1:30→2:19, house 1:46→2:42, guard 7:00→7:46, ironmine 8:14→8:45, coalmine 8:26→9:00, smelter 9:02→10:06, waterhut 9:38→10:29, smith 10:32→11:17, house 11:18→11:50, farm 12:26→13:22, mill 13:24→14:22, bakery 14:24→15:07, hunter 14:40→15:31, quarry 15:16→15:56, look 16:10→16:46, weaponsmith 16:52→17:59, barracks 18:00→18:56, house 18:26→19:16, armorer 19:16→20:17.

Orders given: fighters 3297, archers 3297, place 25, priority 20, armyTarget 15, sendIn 5, weaponKeep 3, armyArmor 3, profession 2, armyReserve 1, sendUnit 1, toolKeep 1, armorRepair 1. None refused.

People changing jobs: new carrier 40, carrier -> worker 18, carrier -> soldier 18, new soldier 2, carrier -> explorer 1, carrier -> geologist 1.

People's orders (3790 in all, 3764 done): worker mine coalmine 167, worker rest farm 151, worker gather farm 150, worker mine ironmine 145, worker rest forest 137, worker gather forest 136, worker rest hunter 131, worker gather hunter 129, worker rest coalmine 121, worker rest quarry 87, worker gather quarry 85, carrier haul meat hunter -> ironmine 80, worker rest ironmine 80, carrier haul coal coalmine -> smelter 80. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 v245 eco: houses 4, forest 1, guards 2, mines 1/1, carriers 9 idle 9, soldiers 27, ore C/I/G 1/1/0.


Script: 1800 turns, 0.2 ms average, worst 2 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 31: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 12/2/1638/10/40 | 33/6/2678/10/50 |
| 30 | 14/2/1638/10/40 | 53/11/5967/29/71 |
| 45 | 14/2/1638/10/40 | 65/17/10140/50/70 |
| 60 | 14/2/1638/10/40 | 72/23/14404/70/70 |
| first | - - - - - - | 8 13 18 20 22 25 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults.

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 20 29 38 44 50 56 64 70).

First army orders (game min:sec): 0:00 armyReserve; 2:34 sendIn 1 soldiers -> building 103; 2:36 sendIn 1 soldiers -> building 103; 7:42 sendIn 1 soldiers -> building 155; 7:44 sendIn 1 soldiers -> building 155; 7:46 sendIn 1 soldiers -> building 155.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 2–3: settlers: No free settlers and every bed taken: build houses.
- 57 min, 4–60: orders: The order "fighters" was sent 60 times this minute: send it only when something changes.
- 57 min, 4–60: orders: The order "archers" was sent 60 times this minute: send it only when something changes.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (3 mountain tiles).
- 45 min, 16–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 43 min, 18–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 15 | 13 | 8 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 29 | 40 | 1638 | 4997 |
| 30 | 16 | 13 | 16 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 27 | 48 | 1638 | 5336 |
| 45 | 16 | 13 | 16 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 27 | 48 | 1638 | 5336 |
| 60 | 16 | 13 | 16 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 27 | 48 | 1638 | 5336 |

At the end: buildings (built+sites) house 3, quarry 2, guard 2, hq 1, wood 1, saw 1, forest 1, fisher 1, hunter 1, look 1.
People: carrier 27, soldier 8, worker 8, digger 2, builder 2, explorer 1; beds 30. Soldiers: sword 5, bow 3.

Goods produced in the game: log 35, stone 34, plank 23, fish 8, meat 8.
Goods consumed in the game: stone 36, plank 34, log 23, pick 2, axe 1, saw 1, shovel 1, rod 1, bow 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (59 building-min): Log pile full, nothing needs it right now 82%, Felling a tree 13%, Bringing a log to the pile 5%, Worker picking up an axe 0%, Working 0%
- quarry (103 building-min): Stone pile full, nothing needs it right now 92%, Cutting stone 5%, Bringing stone to the pile 2%, Worker picking up a pickaxe 0%, Working 0%
- saw (59 building-min): Output pile full, nothing needs it right now 93%, Sawing planks 5%, Waiting for logs 1%, Stacking outside 1%, Worker picking up a saw 0%
- forest (59 building-min): No free ground to plant in range inside your border 77%, Planting a sapling 22%, Worker picking up a shovel 0%
- fisher (58 building-min): Fish pile full, nothing needs it right now 97%, Waiting for a free settler 2%, Fishing 1%, Worker picking up a fishing rod 0%, Bringing a fish to the pile 0%
- hunter (58 building-min): Meat pile full, nothing needs it right now 95%, Hunting 2%, Waiting for a free settler 1%, Bringing meat to the pile 1%, Worker picking up a bow 0%
- guard (110 building-min): Idle 100%, Soldiers on the way 0%
- house (169 building-min): Idle 100%
- look (44 building-min): Scout on watch 100%, Scout on the way 0%, Working 0%

Building sites, time per state (site-min): Builders at work 3, Leveling the ground 2, Waiting for a digger 2, Waiting for a builder 2.

Build order (placed at min:sec, finished at): wood 0:02→0:32, quarry 0:06→0:48, saw 0:34→1:10, forest 0:48→1:24, fisher 1:10→1:57, hunter 1:24→2:14, guard 1:58→2:33, house 2:14→2:55, house 3:04→3:46, house 3:56→4:22, guard 7:00→7:42, look 15:00→15:32, quarry 15:02→15:59.

Orders given: fighters 3292, archers 3292, sendUnit 16, place 13, priority 9, sendIn 5, armyReserve 1, profession 1. None refused.

People changing jobs: new carrier 29, carrier -> worker 7, new soldier 2, new worker 1, carrier -> explorer 1.

People's orders (638 in all, 625 done): worker rest forest 100, worker gather forest 99, worker rest wood 36, worker rest quarry 36, worker gather wood 35, worker gather quarry 34, carrier haul log wood -> saw 27, worker rest saw 24, worker toCraft saw 23, worker craft saw 23, explorer explore 16, worker rest hunter 11, worker gather hunter 10, worker rest fisher 9. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 v245 eco: houses 3, forest 1, guards 2, mines 0/0, carriers 27 idle 27, soldiers 10, ore C/I/G 0/0/0.


Script: 1800 turns, 0.1 ms average, worst 2 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 22/1/1337/16/44 | 29/6/2875/10/50 |
| 30 | 24/1/1338/26/34 | 68/10/5140/22/98 |
| 45 | 24/1/1338/26/34 | 82/21/11200/46/94 |
| 60 | 24/1/1338/34/26 | 88/26/14999/64/96 |
| first | 5 7 12 14 - - | 9 10 13 24 32 31 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 36 in vaults.

Soldiers every 5 min: 10 10 16 16 17 26 26 26 26 28 31 34 (original game NPC: 10 10 10 10 19 22 34 46 46 54 58 64).

First army orders (game min:sec): 0:00 armyReserve; 2:26 sendIn 1 soldiers -> building 92; 2:28 sendIn 1 soldiers -> building 92; 2:30 sendIn 1 soldiers -> building 92; 13:42 armyTarget sword=10; 13:42 armyTarget spear=6; 13:42 armyTarget bow=8; 39:14 armyTarget sword=18; 39:14 armyTarget spear=10; 39:14 armyTarget bow=12; 39:34 armyTarget sword=10; 39:34 armyTarget spear=6.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 4 min, 2–59: settlers: No free settlers and every bed taken: build houses.
- 57 min, 4–60: orders: The order "fighters" was sent 30 times this minute: send it only when something changes.
- 57 min, 4–60: orders: The order "archers" was sent 30 times this minute: send it only when something changes.
- 6 min, 9–14: stall: smith: waiting for coal 56% of the last 5 minutes.
- 1 min, 11: stall: mill: waiting for grain 53% of the last 5 minutes.
- 6 min, 14–19: stall: weaponsmith: waiting for coal 74% of the last 5 minutes.
- 45 min, 16–60: stall: iron mine: deposit worn out 93% of the last 5 minutes.
- 15 min, 17–31: stall: barracks: waiting for iron armor for new spearmen 75% of the last 5 minutes.
- 5 min, 20–35: stall: smelter: waiting for iron ore 54% of the last 5 minutes.
- 4 min, 21–24: weapons: 10 weapons lie unused: the barracks needs free settlers (build houses).
- 2 min, 21–22: stall: armorer: waiting for iron 88% of the last 5 minutes.
- 38 min, 23–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 37 min, 24–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 9 | 12 | 8 | 11 | 11 | 12 | 14 | 10 | 14 | 7 | 1 | 19 | 0 | 0 | 0 | 0 | 0 | 20 | 65 | 1337 | 2976 |
| 30 | 16 | 8 | 8 | 11 | 12 | 12 | 14 | 16 | 14 | 17 | 0 | 12 | 0 | 0 | 0 | 0 | 0 | 11 | 84 | 1338 | 3942 |
| 45 | 16 | 8 | 8 | 11 | 12 | 11 | 14 | 16 | 14 | 23 | 7 | 25 | 0 | 0 | 1 | 0 | 0 | 10 | 99 | 1338 | 3942 |
| 60 | 16 | 8 | 8 | 11 | 12 | 12 | 14 | 15 | 14 | 21 | 7 | 24 | 0 | 0 | 0 | 1 | 1 | 1 | 97 | 1338 | 3942 |

At the end: buildings (built+sites) house 4, hq 1, wood 1, quarry 1, saw 1, forest 1, fisher 1, hunter 1, guard 1, ironmine 1, coalmine 1, smelter 1, waterhut 1, smith 1, farm 1, mill 1, bakery 1, weaponsmith 1, barracks 1, armorer 1, look 1.
People: soldier 33, worker 17, carrier 3, digger 2, builder 2, geologist 1, explorer 1; beds 40. Soldiers: sword 17, bow 9, spear 7.

Goods produced in the game: coal 138, meat 96, ironore 94, iron 87, grain 79, log 73, stone 71, water 64, flour 64, plank 61, bread 50, armor 33, fish 25, sword 11, spear 8, bow 6, hammer 2, pick 1, saw 1, rod 1.
Goods consumed in the game: coal 117, ironore 87, meat 84, stone 81, plank 77, grain 64, iron 63, log 61, water 50, flour 50, bread 38, armor 32, fish 20, sword 11, bow 7, spear 7, pick 4, hammer 4, axe 1, saw 1, shovel 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (60 building-min): Log pile full, nothing needs it right now 68%, Felling a tree 22%, Bringing a log to the pile 5%, Log pile full, waiting for carriers 5%, Worker picking up an axe 0%
- quarry (59 building-min): Stone pile full, nothing needs it right now 67%, Cutting stone 20%, Bringing stone to the pile 9%, Stone pile full, waiting for carriers 4%, Worker picking up a pickaxe 0%
- saw (59 building-min): Output pile full, nothing needs it right now 76%, Sawing planks 13%, Output pile full, waiting for carriers 5%, Waiting for logs 4%, Stacking outside 3%
- forest (59 building-min): No free ground to plant in range inside your border 71%, Planting a sapling 29%, Worker picking up a shovel 0%, Working 0%
- fisher (58 building-min): Fish pile full, nothing needs it right now 89%, Fish pile full, waiting for carriers 5%, Fishing 3%, Waiting for a free settler 2%, Bringing a fish to the pile 1%
- hunter (58 building-min): Meat pile full, nothing needs it right now 71%, Hunting 14%, Bringing meat to the pile 8%, Meat pile full, waiting for carriers 5%, Waiting for a free settler 1%
- guard (58 building-min): Idle 100%, Soldiers on the way 0%
- house (215 building-min): Idle 100%
- ironmine (56 building-min): Deposit worn out: finding little iron ore 77%, Deposit thinning: mining iron ore 8%, Bringing iron ore out 5%, Mining iron ore 4%, Came back empty-handed 2%
- coalmine (56 building-min): Coal pile full, nothing needs it right now 41%, Mining coal 28%, Deposit thinning: mining coal 21%, Bringing coal out 6%, Came back empty-handed 1%
- smelter (55 building-min): Output pile full, nothing needs it right now 47%, Waiting for iron ore 25%, Smelting iron 20%, Stacking outside 4%, Output pile full, waiting for carriers 2%
- waterhut (55 building-min): Water pile full, nothing needs it right now 84%, Fetching water 6%, Bringing water to the pile 5%, Water pile full, waiting for carriers 5%, Worker on the way 0%
- smith (54 building-min): All tool targets met 89%, Waiting for coal 9%, Worker picking up a hammer 1%, Forging hammer 0%, Forging pickaxe 0%
- farm (52 building-min): Grain pile full, nothing needs it right now 69%, Sowing a field 12%, Harvesting grain 9%, Bringing grain to the pile 5%, Grain pile full, waiting for carriers 5%
- mill (52 building-min): Output pile full, nothing needs it right now 80%, Grinding flour 7%, Output pile full, waiting for carriers 5%, Waiting for grain 4%, Stacking outside 3%
- bakery (50 building-min): Output pile full, nothing needs it right now 70%, Baking bread 22%, Output pile full, waiting for carriers 3%, Stacking outside 3%, Fetching from the pile 0%
- weaponsmith (48 building-min): All weapon targets met 79%, Waiting for coal 12%, Forging sword 3%, Forging spear 2%, Forging bow 2%
- barracks (46 building-min): Soldier targets met 60%, Waiting for iron armor for new spearmen 31%, Weapons on the way 5%, Waiting for weapons from the weaponsmith 3%, Waiting for iron armor for new swordsmen 1%
- armorer (45 building-min): All armor targets met 64%, Waiting for iron 24%, Making iron armor 9%, Stacking outside 2%, Worker picking up a hammer 1%
- look (44 building-min): Scout on watch 100%, Idle 0%, Working 0%

Building sites, time per state (site-min): Builders at work 6, Leveling the ground 5, Waiting for a builder 3, Waiting for a digger 3.

Build order (placed at min:sec, finished at): wood 0:02→0:25, quarry 0:04→0:43, saw 0:26→1:03, forest 0:44→1:17, fisher 1:04→1:40, hunter 1:18→2:04, guard 1:40→2:25, house 2:06→2:45, house 2:56→3:32, ironmine 3:14→3:47, coalmine 3:38→4:05, smelter 4:06→4:58, waterhut 4:26→5:27, smith 4:58→6:11, house 5:32→6:31, farm 6:50→7:48, mill 7:50→8:27, bakery 8:52→9:41, weaponsmith 10:40→11:38, house 11:40→12:26, barracks 12:54→13:41, armorer 14:14→15:08, look 15:18→16:01.

Orders given: fighters 1727, archers 1727, armyTarget 57, place 23, priority 18, sendIn 3, weaponKeep 3, armyArmor 3, profession 2, armyReserve 1, sendUnit 1, toolKeep 1, armorRepair 1. None refused.

People changing jobs: new carrier 39, carrier -> soldier 24, carrier -> worker 16, new soldier 1, new worker 1, carrier -> geologist 1, carrier -> explorer 1.

People's orders (4038 in all, 4016 done): worker mine coalmine 173, worker mine ironmine 164, worker rest farm 160, worker gather farm 159, worker rest coalmine 139, worker rest forest 138, worker gather forest 137, worker rest hunter 97, worker gather hunter 96, worker rest ironmine 95, carrier haul coal coalmine -> smelter 93, carrier haul ironore ironmine -> smelter 91, carrier haul meat hunter -> ironmine 88, worker rest smelter 88. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 v245 eco: houses 4, forest 1, guards 1, mines 1/1, carriers 9 idle 8, soldiers 28, ore C/I/G 1/1/0.


Script: 1800 turns, 0.2 ms average, worst 2 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 13/2/1564/10/40 | 30/6/2415/10/50 |
| 30 | 15/2/1564/10/40 | 65/13/5328/36/84 |
| 45 | 15/2/1564/10/40 | 81/20/9342/39/111 |
| 60 | 15/2/1564/10/40 | 86/25/12910/52/98 |
| first | - - - - - - | 9 9 17 18 38 36 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 65 in vaults.

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 19 27 36 37 37 39 42 46 52).

First army orders (game min:sec): 0:00 armyReserve; 2:40 sendIn 1 soldiers -> building 108; 2:42 sendIn 1 soldiers -> building 108; 2:44 sendIn 1 soldiers -> building 108; 7:28 sendIn 1 soldiers -> building 156; 7:30 sendIn 1 soldiers -> building 156; 7:32 sendIn 1 soldiers -> building 156.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 2–3: settlers: No free settlers and every bed taken: build houses.
- 57 min, 4–60: orders: The order "fighters" was sent 60 times this minute: send it only when something changes.
- 57 min, 4–60: orders: The order "archers" was sent 60 times this minute: send it only when something changes.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 45 min, 16–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 40 min, 21–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 14 | 0 | 12 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 1 | 27 | 48 | 1564 | 3642 |
| 30 | 16 | 8 | 16 | 14 | 0 | 12 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 1 | 25 | 56 | 1564 | 3685 |
| 45 | 16 | 8 | 16 | 14 | 0 | 12 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 1 | 25 | 56 | 1564 | 3685 |
| 60 | 16 | 8 | 16 | 14 | 0 | 12 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 1 | 25 | 56 | 1564 | 3685 |

At the end: buildings (built+sites) house 3, quarry 2, guard 2, hq 1, wood 1, saw 1, forest 1, fisher 1, hunter 1, ironmine 1, look 1.
People: carrier 25, worker 9, soldier 8, digger 2, builder 2, geologist 1, explorer 1; beds 30. Soldiers: sword 5, bow 3.

Goods produced in the game: stone 35, log 34, plank 22, meat 13, fish 8, ironore 8.
Goods consumed in the game: plank 38, stone 37, log 22, pick 4, axe 1, saw 1, shovel 1, rod 1, bow 1, meat 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (59 building-min): Log pile full, nothing needs it right now 84%, Felling a tree 12%, Bringing a log to the pile 4%, Worker picking up an axe 0%, Working 0%
- quarry (103 building-min): Stone pile full, nothing needs it right now 92%, Cutting stone 5%, Bringing stone to the pile 2%, Worker picking up a pickaxe 0%, Working 0%
- saw (59 building-min): Output pile full, nothing needs it right now 93%, Sawing planks 5%, Waiting for logs 1%, Stacking outside 1%, Fetching from the pile 0%
- forest (59 building-min): No free ground to plant in range inside your border 72%, Planting a sapling 28%, Worker picking up a shovel 0%
- fisher (58 building-min): Fish pile full, nothing needs it right now 97%, Waiting for a free settler 2%, Fishing 1%, Worker picking up a fishing rod 0%, Bringing a fish to the pile 0%
- hunter (58 building-min): Meat pile full, nothing needs it right now 94%, Hunting 3%, Bringing meat to the pile 2%, Waiting for a free settler 1%, Worker picking up a bow 0%
- guard (110 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- house (169 building-min): Idle 100%
- ironmine (51 building-min): Iron ore pile full, nothing needs it right now 98%, Mining iron ore 1%, Worker picking up a pickaxe 1%, Bringing iron ore out 0%, Working 0%
- look (44 building-min): Scout on watch 100%, Scout on the way 0%, Working 0%

Building sites, time per state (site-min): Builders at work 3, Leveling the ground 2, Waiting for a digger 2, Waiting for a builder 2, Waiting for materials 0.

Build order (placed at min:sec, finished at): wood 0:02→0:32, quarry 0:06→0:49, saw 0:32→1:11, forest 0:50→1:22, fisher 1:12→2:00, hunter 1:22→2:18, guard 2:00→2:39, house 2:18→2:59, house 3:08→3:37, house 3:48→4:22, guard 7:00→7:27, ironmine 8:02→8:33, look 15:00→15:34, quarry 15:02→15:51.

Orders given: fighters 3296, archers 3296, place 14, priority 10, sendIn 6, profession 2, armyReserve 1, sendUnit 1. None refused.

People changing jobs: new carrier 28, carrier -> worker 7, new soldier 2, new worker 2, carrier -> explorer 1, carrier -> geologist 1.

People's orders (708 in all, 694 done): worker rest forest 123, worker gather forest 122, worker rest quarry 37, worker rest wood 35, worker gather quarry 35, worker gather wood 34, carrier haul log wood -> saw 26, worker rest saw 23, worker toCraft saw 22, worker craft saw 22, worker rest hunter 14, worker gather hunter 13, worker rest fisher 9, worker rest ironmine 9. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 v245 eco: houses 3, forest 1, guards 2, mines 0/1, carriers 25 idle 25, soldiers 10, ore C/I/G 0/1/1.


Script: 1800 turns, 0.2 ms average, worst 2 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 11/2/1439/10/30 | 29/6/2570/10/40 |
| 30 | 13/2/1439/10/30 | 65/10/5088/23/87 |
| 45 | 13/2/1439/10/30 | 79/18/10077/45/105 |
| 60 | 13/2/1439/10/30 | 86/23/14132/55/95 |
| first | - - - - - - | 9 9 19 20 27 34 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 2 in stock + 58 in vaults.

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 16 23 37 43 45 48 48 55).

First army orders (game min:sec): 0:00 armyReserve; 2:34 sendIn 1 soldiers -> building 99; 2:36 sendIn 1 soldiers -> building 99; 7:40 sendIn 1 soldiers -> building 145; 7:42 sendIn 1 soldiers -> building 145; 7:44 sendIn 1 soldiers -> building 145.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 1 min, 2: settlers: No free settlers and every bed taken: build houses.
- 1 min, 4: stall: fisher: waiting for a free settler 51% of the last 4 minutes.
- 57 min, 4–60: orders: The order "fighters" was sent 60 times this minute: send it only when something changes.
- 57 min, 4–60: orders: The order "archers" was sent 60 times this minute: send it only when something changes.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (1 mountain tiles).
- 45 min, 16–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 43 min, 18–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 19 | 40 | 1439 | 5548 |
| 30 | 16 | 8 | 16 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 17 | 48 | 1439 | 5988 |
| 45 | 16 | 8 | 16 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 17 | 48 | 1439 | 5988 |
| 60 | 16 | 8 | 16 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 17 | 48 | 1439 | 5988 |

At the end: buildings (built+sites) quarry 2, guard 2, house 2, hq 1, wood 1, saw 1, forest 1, fisher 1, hunter 1, look 1.
People: carrier 17, soldier 8, worker 8, digger 2, builder 2, explorer 1; beds 20. Soldiers: sword 5, bow 3.

Goods produced in the game: stone 31, log 27, plank 15, fish 8, meat 8.
Goods consumed in the game: stone 33, plank 31, log 15, pick 2, axe 1, saw 1, shovel 1, rod 1, bow 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (60 building-min): Log pile full, nothing needs it right now 86%, Felling a tree 10%, Bringing a log to the pile 4%, Worker picking up an axe 0%, Working 0%
- quarry (103 building-min): Stone pile full, nothing needs it right now 92%, Cutting stone 5%, Bringing stone to the pile 2%, Worker picking up a pickaxe 0%, Working 0%
- saw (59 building-min): Output pile full, nothing needs it right now 95%, Sawing planks 3%, Waiting for logs 1%, Stacking outside 1%, Worker picking up a saw 0%
- forest (59 building-min): No free ground to plant in range inside your border 77%, Planting a sapling 22%, Worker picking up a shovel 0%, Idle 0%
- fisher (58 building-min): Fish pile full, nothing needs it right now 97%, Waiting for a free settler 2%, Fishing 1%, Worker picking up a fishing rod 0%, Bringing a fish to the pile 0%
- hunter (58 building-min): Meat pile full, nothing needs it right now 96%, Waiting for a free settler 1%, Hunting 1%, Bringing meat to the pile 1%, Worker picking up a bow 0%
- guard (110 building-min): Idle 100%, Soldiers on the way 0%
- house (113 building-min): Idle 100%
- look (44 building-min): Scout on watch 100%, Idle 0%, Working 0%

Building sites, time per state (site-min): Builders at work 3, Leveling the ground 2, Waiting for a digger 2, Waiting for a builder 1.

Build order (placed at min:sec, finished at): wood 0:02→0:24, quarry 0:04→0:44, saw 0:26→1:06, forest 0:46→1:21, fisher 1:08→1:46, hunter 1:22→2:05, guard 1:48→2:32, house 2:06→2:55, house 3:06→3:51, guard 7:00→7:39, look 15:00→15:31, quarry 15:02→15:54.

Orders given: fighters 3293, archers 3293, sendUnit 21, place 12, priority 9, sendIn 5, armyReserve 1, profession 1. None refused.

People changing jobs: new carrier 19, carrier -> worker 7, new soldier 2, new worker 1, carrier -> explorer 1.

People's orders (569 in all, 556 done): worker rest forest 97, worker gather forest 96, worker rest quarry 33, worker gather quarry 31, worker rest wood 28, worker gather wood 27, explorer explore 21, carrier haul log wood -> saw 19, worker rest saw 16, worker toCraft saw 15, worker craft saw 15, worker rest hunter 9, worker rest fisher 9, worker gather fisher 8. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 v245 eco: houses 2, forest 1, guards 2, mines 0/0, carriers 17 idle 17, soldiers 10, ore C/I/G 0/0/0.


Script: 1800 turns, 0.2 ms average, worst 2 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 11/2/1380/10/30 | 26/5/1670/10/40 |
| 30 | 13/2/1380/10/30 | 49/10/4500/24/73 |
| 45 | 13/2/1380/10/30 | 75/13/7433/36/94 |
| 60 | 13/2/1380/10/30 | 83/19/12527/59/91 |
| first | - - - - - - | 11 11 16 20 23 52 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 16 in vaults.

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 19 24 24 24 36 43 50 59).

First army orders (game min:sec): 0:00 armyReserve; 2:50 sendIn 1 soldiers -> building 108; 2:52 sendIn 1 soldiers -> building 108; 2:54 sendIn 1 soldiers -> building 108; 2:56 sendIn 1 soldiers -> building 108; 7:48 sendIn 1 soldiers -> building 145; 7:50 sendIn 1 soldiers -> building 145.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 2–3: settlers: No free settlers and every bed taken: build houses.
- 57 min, 4–60: orders: The order "fighters" was sent 60 times this minute: send it only when something changes.
- 57 min, 4–60: orders: The order "archers" was sent 60 times this minute: send it only when something changes.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (28 mountain tiles).
- 45 min, 16–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 43 min, 18–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 19 | 40 | 1380 | 3305 |
| 30 | 16 | 8 | 16 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 17 | 48 | 1380 | 3600 |
| 45 | 16 | 8 | 16 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 17 | 48 | 1380 | 3600 |
| 60 | 16 | 8 | 16 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 17 | 48 | 1380 | 3600 |

At the end: buildings (built+sites) quarry 2, guard 2, house 2, hq 1, wood 1, saw 1, forest 1, fisher 1, hunter 1, look 1.
People: carrier 17, soldier 8, worker 8, digger 2, builder 2, explorer 1; beds 20. Soldiers: sword 5, bow 3.

Goods produced in the game: stone 31, log 27, plank 15, fish 8, meat 8.
Goods consumed in the game: stone 33, plank 31, log 15, pick 2, axe 1, saw 1, shovel 1, rod 1, bow 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (59 building-min): Log pile full, nothing needs it right now 85%, Felling a tree 10%, Bringing a log to the pile 4%, Worker picking up an axe 0%, Working 0%
- quarry (103 building-min): Stone pile full, nothing needs it right now 93%, Cutting stone 5%, Bringing stone to the pile 2%, Worker picking up a pickaxe 0%, Working 0%
- saw (59 building-min): Output pile full, nothing needs it right now 94%, Sawing planks 3%, Waiting for logs 2%, Stacking outside 1%, Worker picking up a saw 0%
- forest (59 building-min): No free ground to plant in range inside your border 76%, Planting a sapling 23%, Worker picking up a shovel 0%, Idle 0%
- fisher (58 building-min): Fish pile full, nothing needs it right now 97%, Waiting for a free settler 2%, Fishing 1%, Worker picking up a fishing rod 0%, Bringing a fish to the pile 0%
- hunter (58 building-min): Meat pile full, nothing needs it right now 96%, Hunting 1%, Waiting for a free settler 1%, Bringing meat to the pile 1%, Worker picking up a bow 0%
- guard (109 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- house (113 building-min): Idle 100%
- look (45 building-min): Scout on watch 100%, Idle 0%, Working 0%

Building sites, time per state (site-min): Leveling the ground 3, Builders at work 3, Waiting for a digger 2, Waiting for a builder 1, Waiting for materials 0.

Build order (placed at min:sec, finished at): wood 0:02→0:31, quarry 0:06→0:48, saw 0:32→1:11, forest 0:48→1:26, fisher 1:12→2:02, hunter 1:26→2:24, guard 2:02→2:50, house 2:24→3:10, house 3:20→3:56, guard 7:00→7:47, look 15:00→15:29, quarry 15:02→16:05.

Orders given: fighters 3281, archers 3281, place 12, priority 9, sendIn 6, armyReserve 1, profession 1. None refused.

People changing jobs: new carrier 20, carrier -> worker 8, new soldier 2, carrier -> explorer 1.

People's orders (550 in all, 537 done): worker rest forest 98, worker gather forest 97, worker rest quarry 33, worker gather quarry 31, worker rest wood 28, worker gather wood 27, carrier haul log wood -> saw 19, worker rest saw 16, worker toCraft saw 15, worker craft saw 15, worker rest fisher 9, worker rest hunter 9, worker gather fisher 8, worker gather hunter 8. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 v245 eco: houses 2, forest 1, guards 2, mines 0/0, carriers 17 idle 17, soldiers 10, ore C/I/G 0/0/0.


Script: 1800 turns, 0.2 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 11/2/1547/10/30 | 29/6/3028/10/50 |
| 30 | 13/2/1547/10/30 | 66/8/4802/13/117 |
| 45 | 13/2/1547/10/30 | 74/16/9601/39/91 |
| 60 | 13/2/1547/10/30 | 84/22/13643/57/93 |
| first | - - - - - - | 9 10 19 19 25 34 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 1 in stock + 57 in vaults.

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 11 12 13 30 34 39 43 51 57).

First army orders (game min:sec): 0:00 armyReserve; 2:40 sendIn 1 soldiers -> building 89; 2:42 sendIn 1 soldiers -> building 89; 2:44 sendIn 1 soldiers -> building 89; 2:46 sendIn 1 soldiers -> building 89; 2:48 sendIn 1 soldiers -> building 89; 7:36 sendIn 1 soldiers -> building 144; 7:38 sendIn 1 soldiers -> building 144; 7:40 sendIn 1 soldiers -> building 144.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 3 min, 1–3: settlers: No free settlers and every bed taken: build houses.
- 1 min, 4: stall: fisher: waiting for a free settler 59% of the last 4 minutes.
- 57 min, 4–60: orders: The order "fighters" was sent 60 times this minute: send it only when something changes.
- 57 min, 4–60: orders: The order "archers" was sent 60 times this minute: send it only when something changes.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (128 mountain tiles).
- 46 min, 15–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 45 min, 16–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 12 | 9 | 8 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 19 | 40 | 1547 | 6163 |
| 30 | 16 | 8 | 16 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 17 | 48 | 1547 | 7926 |
| 45 | 16 | 8 | 16 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 17 | 48 | 1547 | 7926 |
| 60 | 16 | 8 | 16 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 17 | 48 | 1547 | 7926 |

At the end: buildings (built+sites) quarry 2, guard 2, house 2, hq 1, wood 1, saw 1, forest 1, fisher 1, hunter 1, look 1.
People: carrier 17, soldier 8, worker 8, digger 2, builder 2, explorer 1; beds 20. Soldiers: sword 5, bow 3.

Goods produced in the game: stone 31, log 27, plank 15, fish 8, meat 8.
Goods consumed in the game: stone 33, plank 31, log 15, pick 2, axe 1, saw 1, shovel 1, rod 1, bow 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (59 building-min): Log pile full, nothing needs it right now 87%, Felling a tree 9%, Bringing a log to the pile 3%, Log pile full, waiting for carriers 0%, Worker picking up an axe 0%
- quarry (103 building-min): Stone pile full, nothing needs it right now 94%, Cutting stone 4%, Bringing stone to the pile 2%, Worker picking up a pickaxe 0%, Working 0%
- saw (59 building-min): Output pile full, nothing needs it right now 94%, Sawing planks 3%, Waiting for logs 2%, Stacking outside 1%, Worker picking up a saw 0%
- forest (59 building-min): No free ground to plant in range inside your border 81%, Planting a sapling 19%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- fisher (58 building-min): Fish pile full, nothing needs it right now 96%, Waiting for a free settler 2%, Fishing 1%, Worker picking up a fishing rod 0%, Bringing a fish to the pile 0%
- hunter (58 building-min): Meat pile full, nothing needs it right now 96%, Hunting 1%, Waiting for a free settler 1%, Bringing meat to the pile 1%, Worker picking up a bow 0%
- guard (110 building-min): Idle 100%, Soldiers on the way 0%
- house (113 building-min): Idle 100%
- look (45 building-min): Scout on watch 100%, Working 0%

Building sites, time per state (site-min): Builders at work 3, Leveling the ground 2, Waiting for a digger 2, Waiting for a builder 1, Waiting for materials 0.

Build order (placed at min:sec, finished at): wood 0:02→0:31, quarry 0:04→0:52, saw 0:32→1:13, forest 0:54→1:27, fisher 1:14→1:52, hunter 1:28→2:19, guard 1:52→2:40, house 2:20→3:06, house 3:16→4:00, guard 7:00→7:36, look 15:00→15:29, quarry 15:02→15:47.

Orders given: fighters 3292, archers 3292, sendUnit 37, place 12, priority 9, sendIn 8, armyReserve 1, profession 1. None refused.

People changing jobs: new carrier 18, carrier -> worker 6, new soldier 2, new worker 2, carrier -> explorer 1.

People's orders (571 in all, 558 done): worker rest forest 89, worker gather forest 88, explorer explore 37, worker rest quarry 33, worker gather quarry 31, worker rest wood 28, worker gather wood 27, carrier haul log wood -> saw 19, worker rest saw 16, worker toCraft saw 15, worker craft saw 15, worker rest hunter 9, worker rest fisher 9, worker gather fisher 8. None failed.

Fights and contact: first saw player 2 at 57:00.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 v245 eco: houses 2, forest 1, guards 2, mines 0/0, carriers 17 idle 17, soldiers 10, ore C/I/G 0/0/0.


Script: 1800 turns, 0.1 ms average, worst 2 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 12/2/1654/10/30 | 31/6/2911/10/50 |
| 30 | 14/2/1654/10/30 | 63/8/4317/15/86 |
| 45 | 14/2/1654/10/30 | 73/15/8227/42/78 |
| 60 | 14/2/1654/10/30 | 81/22/12780/70/90 |
| first | - - - - - - | 9 10 23 24 31 33 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 1 in vaults.

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 15 22 26 42 52 66 70).

First army orders (game min:sec): 0:00 armyReserve; 2:54 sendIn 1 soldiers -> building 108; 2:56 sendIn 1 soldiers -> building 108; 2:58 sendIn 1 soldiers -> building 108; 7:34 sendIn 1 soldiers -> building 146; 7:36 sendIn 1 soldiers -> building 146; 7:38 sendIn 1 soldiers -> building 146.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 2–3: settlers: No free settlers and every bed taken: build houses.
- 57 min, 4–60: orders: The order "fighters" was sent 60 times this minute: send it only when something changes.
- 57 min, 4–60: orders: The order "archers" was sent 60 times this minute: send it only when something changes.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 45 min, 16–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 45 min, 16–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 9 | 14 | 0 | 12 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 1 | 17 | 48 | 1654 | 5588 |
| 30 | 16 | 8 | 17 | 14 | 0 | 12 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 1 | 15 | 56 | 1654 | 5764 |
| 45 | 16 | 8 | 17 | 14 | 0 | 12 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 1 | 15 | 56 | 1654 | 5764 |
| 60 | 16 | 8 | 17 | 14 | 0 | 12 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 1 | 15 | 56 | 1654 | 5764 |

At the end: buildings (built+sites) quarry 2, guard 2, house 2, hq 1, wood 1, saw 1, forest 1, fisher 1, hunter 1, ironmine 1, look 1.
People: carrier 15, worker 9, soldier 8, digger 2, builder 2, geologist 1, explorer 1; beds 20. Soldiers: sword 5, bow 3.

Goods produced in the game: stone 33, log 31, plank 19, meat 14, fish 8, ironore 8.
Goods consumed in the game: plank 35, stone 34, log 19, pick 4, meat 2, axe 1, saw 1, shovel 1, rod 1, bow 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (59 building-min): Log pile full, nothing needs it right now 86%, Felling a tree 10%, Bringing a log to the pile 4%, Worker picking up an axe 0%, Working 0%
- quarry (103 building-min): Stone pile full, nothing needs it right now 92%, Cutting stone 5%, Bringing stone to the pile 2%, Stone pile full, waiting for carriers 0%, Worker picking up a pickaxe 0%
- saw (59 building-min): Output pile full, nothing needs it right now 94%, Sawing planks 4%, Waiting for logs 1%, Stacking outside 1%, Worker picking up a saw 0%
- forest (59 building-min): No free ground to plant in range inside your border 79%, Planting a sapling 20%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- fisher (58 building-min): Fish pile full, nothing needs it right now 96%, Waiting for a free settler 2%, Fishing 1%, Worker picking up a fishing rod 0%, Bringing a fish to the pile 0%
- hunter (58 building-min): Meat pile full, nothing needs it right now 95%, Hunting 2%, Waiting for a free settler 2%, Bringing meat to the pile 1%, Worker picking up a bow 0%
- guard (110 building-min): Idle 100%, Soldiers on the way 0%
- house (113 building-min): Idle 100%
- ironmine (51 building-min): Iron ore pile full, nothing needs it right now 96%, Mining iron ore 2%, Worker picking up a pickaxe 1%, Bringing iron ore out 0%, Working 0%
- look (44 building-min): Scout on watch 100%, Scout on the way 0%, Working 0%

Building sites, time per state (site-min): Builders at work 3, Leveling the ground 3, Waiting for a digger 2, Waiting for a builder 1, Waiting for materials 0.

Build order (placed at min:sec, finished at): wood 0:02→0:32, quarry 0:06→0:50, saw 0:34→1:13, forest 0:50→1:28, fisher 1:14→2:08, hunter 1:28→2:28, guard 2:10→2:53, house 2:30→3:20, house 3:30→4:05, guard 7:00→7:34, ironmine 8:38→9:13, look 15:00→15:31, quarry 15:02→15:55.

Orders given: fighters 3286, archers 3286, sendUnit 22, place 13, priority 10, sendIn 6, profession 2, armyReserve 1. None refused.

People changing jobs: new carrier 19, carrier -> worker 8, new soldier 2, new worker 1, carrier -> explorer 1, carrier -> geologist 1.

People's orders (647 in all, 633 done): worker rest forest 97, worker gather forest 96, worker rest quarry 35, worker gather quarry 33, worker rest wood 32, worker gather wood 31, carrier haul log wood -> saw 23, explorer explore 21, worker rest saw 20, worker toCraft saw 19, worker craft saw 19, worker rest hunter 15, worker gather hunter 14, worker rest fisher 9. None failed.

Fights and contact: first saw player 1 at 48:00.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 v245 eco: houses 2, forest 1, guards 2, mines 0/1, carriers 15 idle 15, soldiers 10, ore C/I/G 0/1/1.


Script: 1800 turns, 0.1 ms average, worst 2 ms, 0 over 0.3 s, 0 errors. Orders refused: none.
