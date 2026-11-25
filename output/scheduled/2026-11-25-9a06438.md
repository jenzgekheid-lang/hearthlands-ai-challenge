# Tournament: scheduled

Game version 253. Written for: scheduled 253.

- scheduled: hearthlands-ai-challenge, commit 9a06438

Maps 20261030, 777, 4242, 31, each twice (sides swapped), up to 60 game minutes (1x). 151 s.

Switches: the table defaults (src/data/rules.js).

Each game ends with the script's own game log: what it may know (its own side, and what happened to it or what it saw). Times are game min:sec.

| Opponent | Won | Lost | Undecided |
|---|---|---|---|
| original game NPC | 0 | 0 | 8 |

War and gold over all games (scheduled / opponents): buildings taken 7 / 0, killed 32 / 61, gold at the end (stock + vaults) 0 / 192, stuck towns 7 / 1.

## Games

Each row: buildings / military / land tiles / soldiers / people at the minute shown. First: game minute of the first smelter, smith, weaponsmith, barracks, tower, castle (- = never).

### Map 31: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 10/2/1363/9/50 | 29/6/2417/10/50 |
| 30 | 10/2/1363/9/50 | 55/9/4076/21/69 |
| 45 | 10/2/1363/9/50 | 67/10/6042/21/69 |
| 60 | 10/2/1363/9/50 | 67/10/6825/29/61 |
| first | - - - - - - | 14 15 22 25 30 31 |

First built by scheduled (game minute; x2 = the second one; soldier = first trained): house 1, wood 1, guard 2, house x2 2, military 2, quarry 2, saw 3, guard x2 12, military x2 12.

First built by original game NPC (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, house2 2, guard 3, guard x2 3, military 3, military x2 3, forest 4, hunter 4, saw 4, wood x2 4, quarry x2 5, fisher 6, waterhut 7, coalmine 8, hunter x2 8, ironmine 8, farm 9, house 10, mill 10, bakery 11, farm x2 12, pigfarm 13, smelter 14, house x2 15, smith 15, coalmine x2 16, saw x2 18, fisher x2 20, butcher 22, ironmine x2 22, weaponsmith 22, weaponsmith x2 23, forest x2 24, barracks 25, soldier 25, smelter x2 26, armorer 27, barracks x2 28, tower 30, castle 31, bakery x2 32, pigfarm x2 32, mill x2 35, goldmine 37, goldsmelter 37, vault 37, vault x2 38, goldmine x2 39.

Stock at minutes 15/30/45 (scheduled): pick 3/3/3, hammer 3/3/3, shovel 2/2/2, plank 11/11/11, stone 8/8/8.

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 1, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 1, fallen 0, gold 0 in stock + 4 in vaults.

At the end (what scheduled could see): enemy buildings known 2 (military 1); soldiers outside buildings 6 (bowmen 1); military sites unfinished 0; posts waiting for a swordsman 1; pioneers 0; without resource: none.

Growth (what scheduled could see): last new building at minute 12; waiting: Waiting for a swordsman x1; spare tools in stock: pick 3, hammer 3, shovel 2, axe 1, saw 0.

Soldiers every 5 min: 9 9 9 9 9 9 9 9 9 9 9 9 (original game NPC: 10 10 10 10 11 21 21 21 21 23 25 29).

First army orders (game min:sec): 0:00 armyReserve; 1:30 march 1 soldiers -> 120,120; 4:30 march 1 soldiers -> 190,120.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 42 min, 11–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (53 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 11 | 11 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 42 | 24 | 1363 | 4925 |
| 30 | 11 | 11 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 42 | 24 | 1363 | 5038 |
| 45 | 11 | 11 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 42 | 24 | 1363 | 5045 |
| 60 | 11 | 11 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 42 | 24 | 1363 | 5051 |

At the end: buildings (built+sites) house 4, guard 2, hq 1, wood 1, quarry 1, saw 1.
People: carrier 42, soldier 6, worker 3, digger 2, builder 2, geologist 1; beds 40. Soldiers: sword 5, bow 1.

Goods produced in the game: log 17, stone 17, plank 10.
Goods consumed in the game: stone 27, plank 23, log 10, pick 2, axe 1, saw 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house (232 building-min): Idle 100%
- wood (59 building-min): Log pile full, nothing needs it right now 90%, Felling a tree 7%, Bringing a log to the pile 3%, Worker picking up an axe 0%, Working 0%
- quarry (58 building-min): Stone pile full, nothing needs it right now 94%, Cutting stone 4%, Bringing stone to the pile 1%, Worker picking up a pickaxe 0%, Working 0%
- guard (106 building-min): Idle 55%, Waiting for a swordsman: train one at the barracks 45%, Soldiers on the way 0%
- saw (58 building-min): Output pile full, nothing needs it right now 97%, Sawing planks 2%, Stacking outside 0%, Worker picking up a saw 0%, Working 0%

Building sites, time per state (site-min): Builders at work 2, Leveling the ground 2, Waiting for a builder 1, Waiting for a digger 1.

Build order (placed at min:sec, finished at): house 0:00→0:29, wood 0:30→0:54, house 0:48→1:18, quarry 1:06→1:34, guard 1:24→1:56, saw 1:42→2:26, house 2:00→2:44, house 2:58→3:36, guard 11:00→11:50.

Orders given: sendUnit 77, place 9, priority 4, toolKeep 2, march 2, fighters 2, archers 2, armyReserve 1, profession 1. None refused.

People changing jobs: new carrier 40, carrier -> worker 3, carrier -> geologist 1.

People's orders (290 in all, 245 done): geologist geo 77, worker rest wood 18, worker rest quarry 18, worker gather wood 17, worker gather quarry 17, worker rest saw 11, carrier haul plank pile -> house 10, worker toCraft saw 10, worker craft saw 10, carrier haul log wood -> saw 9, digger dig house 8, builder build house 8, carrier haul stone pile -> house 6, carrier haul stone quarry -> house 6. Not done (outcome: times): failed: nothing left to search there ×37.

Fights and contact: lost people sword 1; first saw player 2 at 5:00.

Your notes (5 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×5 10:00–50:00 v253 lean core: houses 4, guard 2, mines 0/0, workers 3, carriers 42 idle 42, soldiers 9, sites 0.


Script: 1802 turns, 0.1 ms average, worst 2 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 31: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 11/2/1609/9/50 | 29/6/2483/10/50 |
| 30 | 11/2/1609/9/50 | 58/11/4436/30/80 |
| 45 | 11/2/1609/9/50 | 83/17/7208/46/94 |
| 60 | 11/2/1609/9/50 | 90/22/11040/67/93 |
| first | - - - - - - | 12 16 24 24 39 43 |

First built by scheduled (game minute; x2 = the second one; soldier = first trained): house 1, guard 2, house x2 2, military 2, wood 2, quarry 3, fisher 4, saw 4, guard x2 11, military x2 11.

First built by original game NPC (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, guard 2, house2 2, military 2, coalmine 3, forest 3, guard x2 3, military x2 3, saw 3, quarry x2 4, wood x2 4, hunter 5, waterhut 5, farm 7, mill 7, hunter x2 8, fisher 9, house 9, ironmine 10, bakery 11, smelter 12, farm x2 13, house x2 13, pigfarm 14, smith 16, coalmine x2 17, butcher 18, ironmine x2 18, saw x2 20, smelter x2 21, stonemine 22, barracks 24, soldier 24, weaponsmith 24, stonemine x2 26, forest x2 27, goldmine 30, armorer 32, barracks x2 32, goldsmelter 34, house2 x2 34, goldmine x2 35, vault 35, vault x2 35, weaponsmith x2 36, bakery x2 37, pigfarm x2 37, mill x2 38, tower 39, tower x2 41, castle 43, fisher x2 44.

Stock at minutes 15/30/45 (scheduled): pick 3/3/3, hammer 3/3/3, shovel 2/2/2, plank 8/8/8, stone 8/8/8.

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 1, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 1, fallen 0, gold 0 in stock + 35 in vaults.

At the end (what scheduled could see): enemy buildings known 2 (military 1); soldiers outside buildings 6 (bowmen 1); military sites unfinished 0; posts waiting for a swordsman 1; pioneers 0; without resource: none.

Growth (what scheduled could see): last new building at minute 11; waiting: Waiting for a swordsman x1; spare tools in stock: pick 3, hammer 3, shovel 2, axe 1, saw 0.

Soldiers every 5 min: 9 9 9 9 9 9 9 9 9 9 9 9 (original game NPC: 10 10 10 10 19 30 31 34 46 52 60 67).

First army orders (game min:sec): 0:00 armyReserve; 1:30 march 1 soldiers -> 120,120; 4:30 march 1 soldiers -> 50,120.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 42 min, 10–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (3 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 41 | 32 | 1609 | 5278 |
| 30 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 41 | 32 | 1609 | 5278 |
| 45 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 41 | 32 | 1609 | 5284 |
| 60 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 41 | 32 | 1609 | 5288 |

At the end: buildings (built+sites) house 4, guard 2, hq 1, wood 1, quarry 1, saw 1, fisher 1.
People: carrier 41, soldier 6, worker 4, digger 2, builder 2, geologist 1; beds 40. Soldiers: sword 5, bow 1.

Goods produced in the game: log 22, stone 19, plank 10, fish 8.
Goods consumed in the game: stone 29, plank 26, log 10, pick 2, axe 1, saw 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house (231 building-min): Idle 100%
- wood (59 building-min): Log pile full, nothing needs it right now 88%, Felling a tree 9%, Bringing a log to the pile 3%, Worker picking up an axe 0%, Working 0%
- guard (107 building-min): Idle 54%, Waiting for a swordsman: train one at the barracks 46%, Soldiers on the way 0%
- quarry (58 building-min): Stone pile full, nothing needs it right now 92%, Cutting stone 5%, Bringing stone to the pile 2%, Worker picking up a pickaxe 0%, Working 0%
- saw (56 building-min): Output pile full, nothing needs it right now 97%, Sawing planks 2%, Worker picking up a saw 1%, Stacking outside 0%, Fetching from the pile 0%
- fisher (56 building-min): Fish pile full, nothing needs it right now 98%, Fishing 1%, Worker picking up a fishing rod 1%, Bringing a fish to the pile 0%

Building sites, time per state (site-min): Builders at work 2, Leveling the ground 2, Waiting for a builder 2, Waiting for materials 1, Waiting for a digger 1.

Build order (placed at min:sec, finished at): house 0:00→0:30, wood 0:30→1:03, house 0:48→1:24, guard 1:06→1:45, quarry 1:24→2:06, house 1:46→2:25, saw 2:06→3:33, fisher 2:26→3:51, house 3:34→4:15, guard 10:00→10:50.

Orders given: sendUnit 86, place 10, priority 5, toolKeep 2, march 2, fighters 2, archers 2, armyReserve 1, profession 1. None refused.

People changing jobs: new carrier 40, carrier -> worker 4, carrier -> geologist 1.

People's orders (352 in all, 323 done): geologist geo 86, worker rest wood 23, worker gather wood 22, worker rest quarry 20, worker gather quarry 19, carrier haul log wood -> saw 14, carrier haul plank pile -> house 12, worker rest saw 11, worker toCraft saw 10, worker craft saw 10, carrier haul stone pile -> house 9, worker rest fisher 9, digger dig house 8, builder build house 8. Not done (outcome: times): failed: nothing left to search there ×20.

Fights and contact: lost people sword 1; first saw player 1 at 5:00.

Your notes (5 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×5 10:00–50:02 v253 lean core: houses 4, guard 2, mines 0/0, workers 4, carriers 41 idle 41, soldiers 9, sites 0.


Script: 1801 turns, 0.1 ms average, worst 2 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 18/3/1452/22/34 | 27/4/2464/4/40 |
| 30 | 22/7/2202/26/16 | 32/0/2132/1/48 |
| 45 | 22/7/2202/20/16 | 32/0/2547/2/43 |
| 60 | 22/7/2202/20/16 | 32/0/2952/2/43 |
| first | 7 7 9 9 - - | 9 10 19 19 - - |

First built by scheduled (game minute; x2 = the second one; soldier = first trained): house 1, guard 2, house x2 2, military 2, wood 2, quarry 3, fisher 4, saw 4, coalmine 5, ironmine 6, smelter 7, smith 7, barracks 9, weaponsmith 9, soldier 10, guard x2 13, military x2 13.

First built by original game NPC (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, guard 2, house2 2, military 2, fisher 3, saw 3, wood x2 3, hunter 4, quarry x2 4, guard x2 5, military x2 5, waterhut 5, coalmine 6, ironmine 6, hunter x2 7, house 9, smelter 9, smith 10, farm 11, mill 11, bakery 13, forest 16, house x2 16, forest x2 17, saw x2 17, barracks 19, weaponsmith 19.

Stock at minutes 15/30/45 (scheduled): pick 2/2/2, hammer 1/1/1, shovel 2/2/2, plank 8/14/14, stone 8/9/9.

War and gold at the end: scheduled: took 6, lost 0, killed 25, fallen 24, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 6, killed 24, fallen 25, gold 0 in stock + 0 in vaults, STUCK (town stopped growing).

At the end (what scheduled could see): enemy buildings known 33 (military 1); soldiers outside buildings 9 (bowmen 2); military sites unfinished 0; posts waiting for a swordsman 0; pioneers 0; without resource: coalmine 1.

Growth (what scheduled could see): last new building at minute 20; waiting: Waiting for bowmen x3; No grown trees in range inside your border x1; Needs meat or fish x1; spare tools in stock: pick 2, hammer 1, shovel 2, axe 1, saw 1.

Soldiers every 5 min: 10 13 22 25 28 26 20 20 20 20 20 20 (original game NPC: 10 10 4 1 0 1 2 2 2 2 2 2).

First army orders (game min:sec): 0:00 armyReserve; 1:30 march 1 soldiers -> 120,120; 4:30 march 1 soldiers -> 190,120; 8:52 armyTarget sword=20; 8:52 armyTarget spear=12; 8:52 armyTarget bow=10; 10:24 march 8 soldiers -> 200,120; 11:55 attack 4 soldiers -> building 91; 12:02 free 3 soldiers; 12:53 march 4 soldiers -> 186,137; 13:04 attack 4 soldiers -> building 143; 13:06 free 3 soldiers.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 19 min, 10–54: stall: smith: waiting for coal 100% of the last 5 minutes.
- 13 min, 11–29: stall: weaponsmith: waiting for coal 87% of the last 5 minutes.
- 1 min, 12: stall: barracks: waiting for weapons from the weaponsmith 51% of the last 5 minutes.
- 48 min, 13–60: stall: woodcutter: no grown trees in range inside your border 100% of the last 5 minutes.
- 6 min, 23–28: stall: iron mine: deposit worn out 88% of the last 5 minutes.
- 26 min, 25–60: carriers: smith: waiting for coal 100% of the last 10 minutes while 13 lie in stock: too few carriers. Build more houses.
- 24 min, 25–58: carriers: weaponsmith: waiting for coal 71% of the last 10 minutes while 8 lie in stock: too few carriers. Build more houses.
- 4 min, 28–36: army: Lost 4 soldiers in the last 5 minutes.
- 31 min, 28–60: settlers: No free settlers: build houses.
- 32 min, 29–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 30 min, 30–60: stall: quarry: stone pile full, waiting for carriers 100% of the last 5 minutes.
- 28 min, 32–60: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 28 min, 33–60: weapons: 18 weapons lie unused: the barracks needs free settlers (build houses).
- 3 min, 39–42: carriers: No idle carriers for the last 10 minutes: build more houses.
- 1 min, 54: stall: smelter: waiting for iron ore 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 1 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 3 | 5 | 19 | 0 | 0 | 0 | 0 | 0 | 16 | 35 | 1452 | 10053 |
| 30 | 1 | 14 | 9 | 9 | 0 | 0 | 0 | 0 | 0 | 1 | 4 | 19 | 0 | 0 | 2 | 1 | 0 | 0 | 35 | 2202 | 12248 |
| 45 | 1 | 14 | 9 | 9 | 0 | 0 | 0 | 0 | 0 | 2 | 1 | 18 | 0 | 0 | 6 | 3 | 1 | 0 | 36 | 2202 | 12248 |
| 60 | 1 | 14 | 9 | 11 | 0 | 0 | 0 | 0 | 0 | 13 | 0 | 13 | 0 | 0 | 8 | 6 | 4 | 0 | 43 | 2202 | 12248 |

At the end: buildings (built+sites) guard 7, house 4, hq 1, wood 1, quarry 1, saw 1, fisher 1, coalmine 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1.
People: soldier 9, worker 9, digger 2, builder 2, carrier 2, geologist 1; beds 40. Soldiers: sword 7, bow 2.

Goods produced in the game: fish 312, coal 132, ironore 66, iron 66, stone 41, plank 32, sword 30, log 29, spear 12, bow 7, saw 1, pick 1, rod 1, hammer 1.
Goods consumed in the game: fish 307, coal 119, ironore 66, iron 53, stone 51, plank 48, log 32, sword 23, spear 6, bow 5, pick 4, hammer 3, axe 1, saw 1, rod 1.
Goods captured in the game: plank 6, sword 1, stone 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house (232 building-min): Idle 100%
- wood (59 building-min): No grown trees in range inside your border 84%, Felling a tree 11%, Bringing a log to the pile 4%, Worker picking up an axe 0%, Log pile full, nothing needs it right now 0%
- guard (325 building-min): Idle 59%, Waiting for bowmen: train them at the barracks 41%, Soldiers on the way 0%, Waiting for a soldier 0%
- quarry (58 building-min): Stone pile full, waiting for carriers 61%, Stone pile full, nothing needs it right now 23%, Cutting stone 11%, Bringing stone to the pile 5%, Worker picking up a pickaxe 0%
- saw (57 building-min): Output pile full, waiting for carriers 62%, Output pile full, nothing needs it right now 25%, Sawing planks 7%, Waiting for logs 3%, Stacking outside 2%
- fisher (56 building-min): Fish pile full, waiting for carriers 41%, Fishing 35%, Fish pile full, nothing needs it right now 16%, Bringing a fish to the pile 7%, Worker picking up a fishing rod 1%
- coalmine (55 building-min): Deposit worn out: finding little coal 41%, Deposit thinning: mining coal 32%, Mining coal 12%, Bringing coal out 7%, Needs bread or fish or meat: mining stopped 3%
- ironmine (55 building-min): Needs meat or fish: mining stopped 46%, Deposit worn out: finding little iron ore 27%, Deposit thinning: mining iron ore 13%, Mining iron ore 7%, Bringing iron ore out 3%
- smelter (54 building-min): Waiting for iron ore 30%, Output pile full, waiting for carriers 23%, Smelting iron 16%, Waiting for coal 15%, Output pile full, nothing needs it right now 11%
- smith (53 building-min): Waiting for coal 98%, Worker picking up a hammer 1%, Forging saw 0%, Forging pickaxe 0%, Stacking outside 0%
- weaponsmith (52 building-min): Waiting for coal 77%, All weapon targets met 8%, Forging sword 7%, Forging spear 3%, Stacking outside 2%
- barracks (51 building-min): Waiting for a free settler to train 63%, Waiting for weapons from the weaponsmith 23%, Weapons on the way 14%, Training soldiers 1%

Building sites, time per state (site-min): Builders at work 4, Leveling the ground 3, Waiting for a builder 2, Waiting for a digger 2, Waiting for materials 1.

Build order (placed at min:sec, finished at): house 0:00→0:31, wood 0:32→1:01, house 0:50→1:24, guard 1:08→1:45, quarry 1:26→2:01, house 1:46→2:17, saw 2:04→3:24, fisher 2:22→3:38, house 3:26→4:03, coalmine 4:02→4:48, ironmine 4:22→5:09, smelter 5:10→6:03, smith 6:04→6:59, weaponsmith 7:00→8:03, barracks 8:04→8:51.

Orders given: sendUnit 76, priority 16, place 15, fighters 7, archers 7, march 6, armyTarget 6, attack 6, free 6, armyReserve 2, toolKeep 2, profession 1. None refused.

People changing jobs: new carrier 40, carrier -> soldier 34, carrier -> worker 9, new soldier 3, carrier -> geologist 1.

People's orders (3290 in all, 3245 done): worker rest fisher 313, worker gather fisher 312, worker mine coalmine 296, worker eat coalmine 198, carrier haul fish fisher -> coalmine 197, worker mine ironmine 163, worker rest coalmine 139, worker eat ironmine 109, carrier haul fish fisher -> ironmine 108, worker rest ironmine 93, geologist geo 76, soldier attack guard 73, carrier haul coal coalmine -> smelter 72, worker rest smelter 67. Not done (outcome: times): failed: nothing left to search there ×18; ended: the person is gone (became a soldier, defeated or removed) ×11.

Fights and contact: attacked enemy buildings 6 times (first 11:55); took guard 12:01, guard 13:05, guard 15:17, guard 16:09, guard 17:21, guard 19:06; killed bow 4, sword 21; lost people sword 16, bow 2, spear 6; first saw player 2 at 5:00.

Your notes (5 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×5 10:00–50:00 v253 lean core: houses 4, guard 7, mines 1/1, workers 9, carriers 2 idle 0, soldiers 20, sites 0.


Script: 1939 turns, 0.1 ms average, worst 3 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 12/2/1564/9/50 | 29/6/2703/10/50 |
| 30 | 12/2/1564/9/50 | 49/8/4644/15/65 |
| 45 | 20/2/1571/13/38 | 57/14/9516/30/68 |
| 60 | 20/2/1571/10/19 | 64/20/13227/39/74 |
| first | 33 34 35 36 52 - | 11 15 23 24 27 33 |

First built by scheduled (game minute; x2 = the second one; soldier = first trained): house 1, house x2 2, quarry 2, wood 2, guard 3, military 3, saw 3, fisher 4, guard x2 12, military x2 12, ironmine 13, coalmine 32, smelter 33, wood x2 33, smith 34, weaponsmith 35, barracks 36, soldier 37, ironmine x2 39, coalmine x2 45, tower 52.

First built by original game NPC (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, guard 2, house2 2, military 2, fisher 3, saw 3, wood x2 3, guard x2 4, hunter 4, military x2 4, quarry x2 4, coalmine 5, waterhut 5, farm 7, ironmine 7, house 9, mill 9, hunter x2 10, bakery 11, smelter 11, farm x2 12, pigfarm 12, house x2 13, smith 15, forest 17, goldmine 17, saw x2 18, forest x2 19, goldsmelter 20, vault 21, vault x2 21, weaponsmith 23, barracks 24, soldier 26, weaponsmith x2 26, tower 27, tower x2 28, castle 33, barracks x2 34, house2 x2 37.

Stock at minutes 15/30/45 (scheduled): pick 2/2/2, hammer 3/3/1, shovel 2/2/2, plank 8/8/7, stone 8/8/8.

War and gold at the end: scheduled: took 1, lost 0, killed 7, fallen 31, gold 0 in stock + 0 in vaults. original game NPC: took 0, lost 1, killed 31, fallen 7, gold 0 in stock + 15 in vaults.

At the end (what scheduled could see): enemy buildings known 9 (military 3); soldiers outside buildings 6 (bowmen 2); military sites unfinished 0; posts waiting for a swordsman 0; pioneers 0; without resource: coalmine 1.

Growth (what scheduled could see): last new building at minute 52; waiting: No grown trees in range inside your border x2; Waiting for coal x2; Needs meat or fish x1; spare tools in stock: pick 2, hammer 1, shovel 2, axe 1, saw 1.

Soldiers every 5 min: 9 9 9 9 9 9 9 10 13 10 14 10 (original game NPC: 10 10 10 10 10 15 21 28 30 33 36 39).

First army orders (game min:sec): 0:00 armyReserve; 1:30 march 1 soldiers -> 120,120; 4:30 march 1 soldiers -> 50,120; 35:54 armyTarget sword=20; 35:54 armyTarget spear=12; 35:54 armyTarget bow=10; 38:30 march 8 soldiers -> 40,120; 48:30 march 8 soldiers -> 40,120; 51:10 attack 6 soldiers -> building 281; 51:47 free 3 soldiers; 53:50 armyTarget sword=14; 53:50 armyTarget spear=6.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 33 min, 11–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 37 min, 19–60: stall: woodcutter: no grown trees in range inside your border 100% of the last 5 minutes.
- 15 min, 20–34: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 21 min, 36–59: stall: smith: waiting for coal 100% of the last 5 minutes.
- 12 min, 37–49: stall: weaponsmith: waiting for coal 88% of the last 5 minutes.
- 5 min, 38–42: stall: barracks: waiting for weapons from the weaponsmith 78% of the last 5 minutes.
- 4 min, 44–60: army: Lost 4 soldiers in the last 5 minutes.
- 3 min, 47–51: stall: smelter: waiting for coal 85% of the last 5 minutes.
- 7 min, 52–58: stall: coal mine: deposit worn out 92% of the last 5 minutes.
- 4 min, 56–60: carriers: smelter: waiting for coal 81% of the last 10 minutes while 1 lie in stock: too few carriers. Build more houses.
- 4 min, 56–60: carriers: smith: waiting for coal 100% of the last 10 minutes while 1 lie in stock: too few carriers. Build more houses.
- 1 min, 56: carriers: weaponsmith: waiting for coal 71% of the last 10 minutes while 1 lie in stock: too few carriers. Build more houses.
- 2 min, 59–60: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 2 min, 59–60: settlers: No free settlers: build houses.
- 1 min, 60: stall: quarry: stone pile full, waiting for carriers 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 14 | 8 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 2 | 40 | 37 | 1564 | 6030 |
| 30 | 15 | 8 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 2 | 40 | 39 | 1564 | 6033 |
| 45 | 4 | 7 | 8 | 18 | 0 | 0 | 0 | 0 | 0 | 1 | 21 | 10 | 0 | 0 | 0 | 0 | 0 | 12 | 37 | 1571 | 7716 |
| 60 | 4 | 8 | 8 | 13 | 0 | 0 | 0 | 0 | 0 | 1 | 19 | 5 | 0 | 0 | 1 | 0 | 0 | 0 | 45 | 1571 | 9008 |

At the end: buildings (built+sites) house 4, wood 2, guard 2, ironmine 2, coalmine 2, hq 1, quarry 1, saw 1, fisher 1, smelter 1, smith 1, weaponsmith 1, barracks 1.
People: worker 12, soldier 6, digger 2, builder 2, carrier 2, geologist 1; beds 40. Soldiers: sword 4, bow 2.

Goods produced in the game: fish 253, coal 80, ironore 61, stone 48, log 44, plank 44, iron 42, sword 25, spear 4, pick 3, axe 1, saw 1, hammer 1, rod 1, bow 1.
Goods consumed in the game: fish 246, coal 79, plank 60, stone 58, log 44, ironore 42, iron 37, sword 24, pick 6, spear 4, hammer 3, bow 3, axe 2, saw 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house (232 building-min): Idle 100%
- wood (86 building-min): No grown trees in range inside your border 76%, Felling a tree 13%, Bringing a log to the pile 6%, Log pile full, nothing needs it right now 4%, Worker picking up an axe 1%
- quarry (58 building-min): Stone pile full, nothing needs it right now 70%, Cutting stone 13%, Stone pile full, waiting for carriers 9%, Bringing stone to the pile 7%, Worker picking up a pickaxe 0%
- guard (106 building-min): Idle 77%, Waiting for a swordsman: train one at the barracks 23%, Soldiers on the way 0%, Waiting for a soldier 0%
- saw (58 building-min): Output pile full, nothing needs it right now 78%, Sawing planks 10%, Output pile full, waiting for carriers 10%, Stacking outside 2%, Waiting for logs 0%
- fisher (57 building-min): Fish pile full, nothing needs it right now 61%, Fishing 28%, Bringing a fish to the pile 6%, Fish pile full, waiting for carriers 5%, Worker picking up a fishing rod 0%
- ironmine (69 building-min): Iron ore pile full, nothing needs it right now 51%, Deposit worn out: finding little iron ore 23%, Iron ore pile full, waiting for carriers 9%, Mining iron ore 6%, Needs meat or fish: mining stopped 3%
- coalmine (44 building-min): Deposit worn out: finding little coal 54%, Deposit thinning: mining coal 21%, Mining coal 9%, Bringing coal out 5%, Needs bread or fish or meat: mining stopped 4%
- smelter (28 building-min): Waiting for coal 75%, Smelting iron 19%, Stacking outside 4%, Worker picking up a hammer 1%, Fetching from the pile 1%
- smith (27 building-min): Waiting for coal 94%, Worker picking up a hammer 2%, Forging pickaxe 1%, Stacking outside 1%, Forging axe 1%
- weaponsmith (25 building-min): Waiting for coal 65%, Forging sword 13%, Waiting for coal and iron 10%, Waiting for iron 5%, Stacking outside 3%
- barracks (24 building-min): Waiting for weapons from the weaponsmith 71%, Weapons on the way 21%, Waiting for a free settler to train 5%, Training soldiers 3%

Building sites, time per state (site-min): Builders at work 5, Leveling the ground 3, Waiting for a builder 2, Waiting for a digger 2, Waiting for materials 1.

Build order (placed at min:sec, finished at): house 0:00→0:28, wood 0:30→1:00, house 0:48→1:24, quarry 1:06→1:41, guard 1:24→2:05, saw 1:42→2:25, house 2:06→2:43, fisher 2:26→3:14, house 2:56→3:44, guard 11:00→11:39, ironmine 12:02→12:33, coalmine 31:02→31:40, smelter 31:40→32:20, wood 32:04→32:50, smith 32:22→33:20, weaponsmith 33:20→34:36, barracks 34:36→35:53, ironmine 37:42→38:26, coalmine 44:22→44:49.

Demolished or burned: tower (burned) 52:05.

Orders given: sendUnit 106, place 19, priority 13, armyTarget 6, march 5, toolKeep 2, fighters 2, archers 2, armyReserve 1, profession 1, attack 1, free 1. None refused.

People changing jobs: new carrier 40, carrier -> soldier 31, carrier -> worker 12, new soldier 2, carrier -> geologist 1.

People's orders (2744 in all, 2661 done): worker rest fisher 254, worker gather fisher 253, worker mine coalmine 215, carrier haul fish fisher -> coalmine 155, worker eat coalmine 154, worker mine ironmine 133, geologist geo 106, worker eat ironmine 92, carrier haul fish fisher -> ironmine 90, worker rest coalmine 87, worker rest ironmine 63, worker rest quarry 49, worker gather quarry 48, carrier haul ironore ironmine -> smelter 47. Not done (outcome: times): failed: nothing left to search there ×61; ended: the person is gone (became a soldier, defeated or removed) ×4.

Fights and contact: attacked enemy buildings 1 times (first 51:10); took tower 51:47; killed spear 1, bow 1, sword 5; lost people sword 25, spear 4, bow 2; first saw player 1 at 5:00.

Your notes (5 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×5 10:00–50:02 v253 lean core: houses 4, guard 2, mines 2/2, workers 12, carriers 16 idle 9, soldiers 10, sites 0.


Script: 1865 turns, 0.1 ms average, worst 2 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 11/2/1439/9/50 | 27/6/2813/10/40 |
| 30 | 11/2/1439/9/50 | 56/6/3578/10/90 |
| 45 | 11/2/1439/9/50 | 70/9/5461/32/98 |
| 60 | 11/2/1439/9/50 | 77/15/9672/55/95 |
| first | - - - - - - | 9 12 28 29 43 46 |

First built by scheduled (game minute; x2 = the second one; soldier = first trained): house 1, wood 1, house x2 2, guard 3, military 3, quarry 3, saw 4, fisher 5, guard x2 11, military x2 11.

First built by original game NPC (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, house2 2, guard 3, guard x2 3, military 3, military x2 3, saw 3, coalmine 4, quarry x2 4, wood x2 4, fisher 6, hunter 6, ironmine 7, hunter x2 8, house 9, smelter 9, waterhut 9, farm 10, mill 12, smith 12, bakery 13, goldmine 15, forest 17, house x2 17, farm x2 18, pigfarm 19, goldsmelter 21, vault 22, saw x2 23, vault x2 23, forest x2 25, butcher 26, coalmine x2 26, ironmine x2 26, smelter x2 27, house2 x2 28, weaponsmith 28, barracks 29, barracks x2 29, fisher x2 29, soldier 31, armorer 32, bakery x2 33, mill x2 33, weaponsmith x2 34, pigfarm x2 37, goldmine x2 39, tower 43, castle 46, tower x2 49.

Stock at minutes 15/30/45 (scheduled): pick 3/3/3, hammer 3/3/3, shovel 2/2/2, plank 8/8/8, stone 8/8/8.

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 1, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 1, fallen 0, gold 0 in stock + 62 in vaults.

At the end (what scheduled could see): enemy buildings known 1 (military 1); soldiers outside buildings 6 (bowmen 1); military sites unfinished 0; posts waiting for a swordsman 1; pioneers 0; without resource: none.

Growth (what scheduled could see): last new building at minute 11; waiting: Waiting for a swordsman x1; spare tools in stock: pick 3, hammer 3, shovel 2, axe 1, saw 0.

Soldiers every 5 min: 10 9 9 9 9 9 9 9 9 9 9 9 (original game NPC: 10 10 10 10 10 10 13 13 32 44 50 55).

First army orders (game min:sec): 0:00 armyReserve; 1:30 march 1 soldiers -> 120,120; 4:30 march 1 soldiers -> 190,120.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (1 mountain tiles).
- 42 min, 19–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 41 | 32 | 1439 | 5556 |
| 30 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 41 | 32 | 1439 | 5852 |
| 45 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 41 | 32 | 1439 | 5867 |
| 60 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 41 | 32 | 1439 | 5881 |

At the end: buildings (built+sites) house 4, guard 2, hq 1, wood 1, quarry 1, saw 1, fisher 1.
People: carrier 41, soldier 6, worker 4, digger 2, builder 2, geologist 1; beds 40. Soldiers: sword 5, bow 1.

Goods produced in the game: log 22, stone 19, plank 10, fish 8.
Goods consumed in the game: stone 29, plank 26, log 10, pick 2, axe 1, saw 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house (231 building-min): Idle 100%
- wood (59 building-min): Log pile full, nothing needs it right now 87%, Felling a tree 8%, Bringing a log to the pile 4%, Worker picking up an axe 0%, Idle 0%
- guard (107 building-min): Idle 54%, Waiting for a swordsman: train one at the barracks 46%, Soldiers on the way 0%, Waiting for a soldier 0%
- quarry (58 building-min): Stone pile full, nothing needs it right now 92%, Cutting stone 6%, Bringing stone to the pile 2%, Worker picking up a pickaxe 1%, Working 0%
- saw (56 building-min): Output pile full, nothing needs it right now 97%, Sawing planks 2%, Stacking outside 0%, Worker picking up a saw 0%, Working 0%
- fisher (56 building-min): Fish pile full, nothing needs it right now 98%, Fishing 1%, Worker picking up a fishing rod 1%, Bringing a fish to the pile 0%, Working 0%

Building sites, time per state (site-min): Builders at work 2, Leveling the ground 2, Waiting for materials 2, Waiting for a builder 2, Waiting for a digger 1.

Build order (placed at min:sec, finished at): house 0:00→0:22, wood 0:24→0:49, house 0:42→1:18, guard 1:00→2:05, quarry 1:18→2:22, house 2:06→2:46, saw 2:24→3:39, fisher 2:48→4:29, house 3:40→4:42, guard 10:00→10:42.

Orders given: sendUnit 85, place 10, priority 5, toolKeep 2, march 2, fighters 2, archers 2, armyReserve 1, profession 1. None refused.

People changing jobs: new carrier 40, carrier -> worker 4, carrier -> geologist 1.

People's orders (357 in all, 314 done): geologist geo 85, worker rest wood 23, worker gather wood 22, worker rest quarry 20, worker gather quarry 19, carrier haul log wood -> saw 14, carrier haul plank pile -> house 12, builder build house 12, worker rest saw 11, worker toCraft saw 10, worker craft saw 10, carrier haul stone pile -> house 9, worker rest fisher 9, digger dig house 8. Not done (outcome: times): failed: nothing left to search there ×34.

Fights and contact: lost people sword 1; first saw player 2 at 5:00.

Your notes (5 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×5 10:00–50:00 v253 lean core: houses 4, guard 2, mines 0/0, workers 4, carriers 41 idle 41, soldiers 9, sites 0.


Script: 1803 turns, 0.1 ms average, worst 2 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 11/2/1380/9/50 | 28/6/2149/10/40 |
| 30 | 11/2/1380/9/50 | 46/10/3923/20/60 |
| 45 | 11/2/1380/9/50 | 71/13/5887/29/91 |
| 60 | 11/2/1380/9/50 | 81/18/9675/59/101 |
| first | - - - - - - | 15 16 21 25 47 51 |

First built by scheduled (game minute; x2 = the second one; soldier = first trained): house 1, house x2 2, quarry 2, wood 2, guard 3, military 3, saw 3, fisher 4, guard x2 12, military x2 12.

First built by original game NPC (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, guard 2, house2 2, military 2, fisher 3, saw 3, wood x2 3, forest 4, hunter 4, quarry x2 4, guard x2 5, military x2 5, coalmine 6, ironmine 6, hunter x2 7, waterhut 9, farm 10, house 10, mill 11, bakery 12, farm x2 13, pigfarm 14, smelter 15, house x2 16, smith 16, coalmine x2 19, butcher 20, ironmine x2 20, weaponsmith 21, barracks 25, soldier 25, smelter x2 26, goldmine 27, saw x2 28, goldsmelter 31, vault 35, vault x2 36, fisher x2 37, armorer 38, barracks x2 39, weaponsmith x2 40, pigfarm x2 42, bakery x2 43, mill x2 43, tower 47, castle 51, house2 x2 52, tower x2 55, goldmine x2 59.

Stock at minutes 15/30/45 (scheduled): pick 3/3/3, hammer 3/3/3, shovel 2/2/2, plank 8/8/8, stone 8/8/8.

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 1, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 1, fallen 0, gold 2 in stock + 13 in vaults.

At the end (what scheduled could see): enemy buildings known 2 (military 0); soldiers outside buildings 6 (bowmen 1); military sites unfinished 0; posts waiting for a swordsman 1; pioneers 0; without resource: none.

Growth (what scheduled could see): last new building at minute 12; waiting: Waiting for a swordsman x1; spare tools in stock: pick 3, hammer 3, shovel 2, axe 1, saw 0.

Soldiers every 5 min: 10 9 9 9 9 9 9 9 9 9 9 9 (original game NPC: 10 10 10 10 13 20 26 29 29 39 52 59).

First army orders (game min:sec): 0:00 armyReserve; 1:30 march 1 soldiers -> 120,120; 4:30 march 1 soldiers -> 50,120.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 41 min, 11–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (28 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 41 | 32 | 1380 | 5410 |
| 30 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 41 | 32 | 1380 | 5412 |
| 45 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 41 | 32 | 1380 | 5414 |
| 60 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 41 | 32 | 1380 | 5419 |

At the end: buildings (built+sites) house 4, guard 2, hq 1, wood 1, quarry 1, saw 1, fisher 1.
People: carrier 41, soldier 6, worker 4, digger 2, builder 2, geologist 1; beds 40. Soldiers: sword 5, bow 1.

Goods produced in the game: log 22, stone 19, plank 10, fish 8.
Goods consumed in the game: stone 29, plank 26, log 10, pick 2, axe 1, saw 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house (231 building-min): Idle 100%
- wood (59 building-min): Log pile full, nothing needs it right now 88%, Felling a tree 9%, Bringing a log to the pile 4%, Worker picking up an axe 0%, Working 0%
- quarry (58 building-min): Stone pile full, nothing needs it right now 93%, Cutting stone 5%, Bringing stone to the pile 1%, Worker picking up a pickaxe 0%, Working 0%
- guard (106 building-min): Idle 54%, Waiting for a swordsman: train one at the barracks 45%, Soldiers on the way 0%, Waiting for a soldier 0%
- saw (57 building-min): Output pile full, nothing needs it right now 97%, Sawing planks 2%, Stacking outside 0%, Worker picking up a saw 0%, Fetching from the pile 0%
- fisher (57 building-min): Fish pile full, nothing needs it right now 98%, Fishing 1%, Worker picking up a fishing rod 0%, Bringing a fish to the pile 0%, Working 0%

Building sites, time per state (site-min): Leveling the ground 2, Builders at work 2, Waiting for a builder 1, Waiting for a digger 1.

Build order (placed at min:sec, finished at): house 0:00→0:31, wood 0:32→1:00, house 0:50→1:32, quarry 1:08→1:47, guard 1:34→2:09, saw 1:52→2:31, house 2:10→2:55, fisher 2:32→3:29, house 3:08→3:49, guard 11:00→11:52.

Orders given: sendUnit 70, place 10, priority 5, toolKeep 2, march 2, fighters 2, archers 2, armyReserve 1, profession 1. None refused.

People changing jobs: new carrier 40, carrier -> worker 4, carrier -> geologist 1.

People's orders (330 in all, 308 done): geologist geo 70, worker rest wood 23, worker gather wood 22, worker rest quarry 20, worker gather quarry 19, carrier haul log wood -> saw 14, carrier haul plank pile -> house 12, worker rest saw 11, worker toCraft saw 10, worker craft saw 10, worker rest fisher 9, digger dig house 8, builder build house 8, worker gather fisher 8. Not done (outcome: times): failed: nothing left to search there ×13.

Fights and contact: lost people sword 1; first saw player 1 at 5:00.

Your notes (5 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×5 10:00–50:02 v253 lean core: houses 4, guard 2, mines 0/0, workers 4, carriers 41 idle 41, soldiers 9, sites 0.


Script: 1803 turns, 0.1 ms average, worst 2 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 10/2/1507/9/50 | 23/6/2967/10/40 |
| 30 | 10/2/1507/9/50 | 34/6/3612/10/60 |
| 45 | 10/2/1507/9/50 | 63/12/6326/33/87 |
| 60 | 10/2/1507/9/50 | 77/17/9907/56/104 |
| first | - - - - - - | 9 10 33 34 53 50 |

First built by scheduled (game minute; x2 = the second one; soldier = first trained): house 1, wood 1, guard 2, house x2 2, military 2, quarry 3, saw 4, guard x2 11, military x2 11.

First built by original game NPC (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, house2 2, guard 3, guard x2 3, military 3, military x2 3, saw 3, wood x2 3, coalmine 4, quarry x2 4, fisher 5, hunter 7, waterhut 7, hunter x2 8, ironmine 8, house 9, smelter 9, smith 10, goldmine 15, coalmine x2 16, goldsmelter 17, house x2 18, forest 22, farm 25, mill 26, bakery 27, farm x2 29, butcher 31, pigfarm 31, weaponsmith 33, barracks 34, soldier 34, vault 40, saw x2 41, fisher x2 42, ironmine x2 43, armorer 45, barracks x2 45, smelter x2 45, goldmine x2 46, house2 x2 46, pigfarm x2 47, bakery x2 48, forest x2 48, mill x2 48, castle 50, weaponsmith x2 51, tower 53, tower x2 54.

Stock at minutes 15/30/45 (scheduled): pick 3/3/3, hammer 3/3/3, shovel 2/2/2, plank 9/9/9, stone 8/8/8.

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 1, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 1, fallen 0, gold 1 in stock + 33 in vaults.

At the end (what scheduled could see): enemy buildings known 2 (military 1); soldiers outside buildings 6 (bowmen 1); military sites unfinished 0; posts waiting for a swordsman 1; pioneers 0; without resource: none.

Growth (what scheduled could see): last new building at minute 11; waiting: Waiting for a swordsman x1; spare tools in stock: pick 3, hammer 3, shovel 2, axe 1, saw 0.

Soldiers every 5 min: 9 9 9 9 9 9 9 9 9 9 9 9 (original game NPC: 10 10 10 10 10 10 17 29 33 33 45 56).

First army orders (game min:sec): 0:00 armyReserve; 1:30 march 1 soldiers -> 120,120; 4:30 march 1 soldiers -> 190,120.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 43 min, 10–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (261 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 9 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 42 | 24 | 1507 | 6084 |
| 30 | 16 | 9 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 42 | 24 | 1507 | 6685 |
| 45 | 16 | 9 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 42 | 24 | 1507 | 6690 |
| 60 | 16 | 9 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 42 | 24 | 1507 | 6698 |

At the end: buildings (built+sites) house 4, guard 2, hq 1, wood 1, quarry 1, saw 1.
People: carrier 42, soldier 6, worker 3, digger 2, builder 2, geologist 1; beds 40. Soldiers: sword 5, bow 1.

Goods produced in the game: log 20, stone 17, plank 8.
Goods consumed in the game: stone 27, plank 23, log 8, pick 2, axe 1, saw 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house (232 building-min): Idle 100%
- wood (59 building-min): Log pile full, nothing needs it right now 90%, Felling a tree 7%, Bringing a log to the pile 3%, Worker picking up an axe 0%, Working 0%
- guard (108 building-min): Idle 54%, Waiting for a swordsman: train one at the barracks 46%, Soldiers on the way 0%
- quarry (58 building-min): Stone pile full, nothing needs it right now 93%, Cutting stone 5%, Bringing stone to the pile 2%, Worker picking up a pickaxe 0%, Working 0%
- saw (57 building-min): Output pile full, nothing needs it right now 97%, Sawing planks 2%, Worker picking up a saw 0%, Stacking outside 0%, Fetching from the pile 0%

Building sites, time per state (site-min): Builders at work 2, Leveling the ground 2, Waiting for a builder 1, Waiting for a digger 1, Waiting for materials 1.

Build order (placed at min:sec, finished at): house 0:00→0:24, wood 0:24→0:57, house 0:42→1:18, guard 1:00→1:41, quarry 1:20→2:05, house 1:42→2:27, saw 2:06→3:12, house 2:40→3:48, guard 10:00→10:35.

Orders given: sendUnit 56, place 9, priority 4, toolKeep 2, march 2, fighters 2, archers 2, armyReserve 1, profession 1. None refused.

People changing jobs: new carrier 40, carrier -> worker 3, carrier -> geologist 1.

People's orders (280 in all, 255 done): geologist geo 56, worker rest wood 21, worker gather wood 20, worker rest quarry 18, worker gather quarry 17, builder build house 14, carrier haul plank pile -> house 12, carrier haul log wood -> saw 12, carrier haul stone pile -> house 9, worker rest saw 9, digger dig house 8, worker toCraft saw 8, worker craft saw 8, carrier haul plank pile -> guard 4. Not done (outcome: times): failed: nothing left to search there ×17.

Fights and contact: lost people sword 1; first saw player 2 at 5:00.

Your notes (5 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×5 10:00–50:00 v253 lean core: houses 4, guard 2, mines 0/0, workers 3, carriers 42 idle 42, soldiers 9, sites 0.


Script: 1802 turns, 0.1 ms average, worst 2 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 11/2/1654/9/50 | 29/6/3102/11/39 |
| 30 | 11/2/1654/9/50 | 47/13/5777/32/58 |
| 45 | 11/2/1654/9/50 | 74/13/6659/41/89 |
| 60 | 11/2/1654/9/50 | 85/19/10887/58/102 |
| first | - - - - - - | 9 10 11 11 54 46 |

First built by scheduled (game minute; x2 = the second one; soldier = first trained): house 1, guard 2, house x2 2, military 2, wood 2, quarry 3, fisher 4, saw 4, guard x2 11, military x2 11.

First built by original game NPC (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, guard 2, house2 2, military 2, coalmine 3, quarry x2 3, saw 3, wood x2 3, fisher 4, guard x2 4, hunter 4, military x2 4, waterhut 7, hunter x2 8, ironmine 8, house 9, smelter 9, smith 10, barracks 11, weaponsmith 11, coalmine x2 12, ironmine x2 13, smelter x2 13, soldier 15, house x2 16, forest 20, saw x2 28, forest x2 31, armorer 32, goldmine 32, farm 33, mill 33, bakery 34, goldsmelter 35, vault 36, vault x2 36, stonemine 37, barracks x2 38, farm x2 39, weaponsmith x2 39, butcher 40, pigfarm 42, pigfarm x2 43, bakery x2 44, mill x2 44, castle 46, fisher x2 48, goldmine x2 54, tower 54, house2 x2 55, tower x2 56.

Stock at minutes 15/30/45 (scheduled): pick 3/3/3, hammer 3/3/3, shovel 2/2/2, plank 8/8/8, stone 8/8/8.

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 1, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 1, fallen 0, gold 0 in stock + 27 in vaults.

At the end (what scheduled could see): enemy buildings known 2 (military 1); soldiers outside buildings 6 (bowmen 1); military sites unfinished 0; posts waiting for a swordsman 1; pioneers 0; without resource: none.

Growth (what scheduled could see): last new building at minute 11; waiting: Waiting for a swordsman x1; spare tools in stock: pick 3, hammer 3, shovel 2, axe 1, saw 0.

Soldiers every 5 min: 9 9 9 9 9 9 9 9 9 9 9 9 (original game NPC: 10 10 11 19 24 32 33 36 41 46 52 58).

First army orders (game min:sec): 0:00 armyReserve; 1:30 march 1 soldiers -> 120,120; 4:30 march 1 soldiers -> 50,120.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 43 min, 10–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (23 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 41 | 32 | 1654 | 5399 |
| 30 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 41 | 32 | 1654 | 5589 |
| 45 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 41 | 32 | 1654 | 5606 |
| 60 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 41 | 32 | 1654 | 5613 |

At the end: buildings (built+sites) house 4, guard 2, hq 1, wood 1, quarry 1, saw 1, fisher 1.
People: carrier 41, soldier 6, worker 4, digger 2, builder 2, geologist 1; beds 40. Soldiers: sword 5, bow 1.

Goods produced in the game: log 22, stone 19, plank 10, fish 8.
Goods consumed in the game: stone 29, plank 26, log 10, pick 2, axe 1, saw 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house (231 building-min): Idle 100%
- wood (59 building-min): Log pile full, nothing needs it right now 86%, Felling a tree 9%, Bringing a log to the pile 5%, Worker picking up an axe 0%, Working 0%
- guard (107 building-min): Idle 54%, Waiting for a swordsman: train one at the barracks 46%, Soldiers on the way 0%
- quarry (58 building-min): Stone pile full, nothing needs it right now 91%, Cutting stone 6%, Bringing stone to the pile 3%, Worker picking up a pickaxe 0%, Working 0%
- saw (56 building-min): Output pile full, nothing needs it right now 97%, Sawing planks 2%, Worker picking up a saw 1%, Stacking outside 0%, Fetching from the pile 0%
- fisher (56 building-min): Fish pile full, nothing needs it right now 98%, Fishing 1%, Worker picking up a fishing rod 1%, Bringing a fish to the pile 0%, Working 0%

Building sites, time per state (site-min): Builders at work 2, Leveling the ground 2, Waiting for materials 1, Waiting for a builder 1, Waiting for a digger 1.

Build order (placed at min:sec, finished at): house 0:00→0:33, wood 0:34→1:07, house 0:52→1:28, guard 1:10→1:47, quarry 1:30→2:11, house 1:48→2:32, saw 2:12→3:37, fisher 2:34→3:51, house 3:38→4:36, guard 10:00→10:44.

Orders given: sendUnit 59, place 10, priority 5, toolKeep 2, march 2, fighters 2, archers 2, armyReserve 1, profession 1. None refused.

People changing jobs: new carrier 40, carrier -> worker 4, carrier -> geologist 1.

People's orders (331 in all, 299 done): geologist geo 59, worker rest wood 23, worker gather wood 22, worker rest quarry 20, worker gather quarry 19, carrier haul log wood -> saw 14, carrier haul plank pile -> house 12, builder build house 12, worker rest saw 11, worker toCraft saw 10, worker craft saw 10, carrier haul stone pile -> house 9, worker rest fisher 9, digger dig house 8. Not done (outcome: times): failed: nothing left to search there ×23.

Fights and contact: lost people sword 1; first saw player 1 at 5:00.

Your notes (5 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×5 10:00–50:02 v253 lean core: houses 4, guard 2, mines 0/0, workers 4, carriers 41 idle 41, soldiers 9, sites 0.


Script: 1801 turns, 0.1 ms average, worst 2 ms, 0 over 0.3 s, 0 errors. Orders refused: none.
