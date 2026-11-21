# Tournament: scheduled

Game version 247. Written for: scheduled 247.

- scheduled: hearthlands-ai-challenge, commit 9a795a5

Maps 20261030, 777, 4242, 31, each twice (sides swapped), up to 60 game minutes (1x). 173 s.

Switches: the table defaults (src/data/rules.js).

Each game ends with the script's own game log: what it may know (its own side, and what happened to it or what it saw). Times are game min:sec.

| Opponent | Won | Lost | Undecided |
|---|---|---|---|
| original game NPC | 0 | 0 | 8 |

War and gold over all games (scheduled / opponents): buildings taken 11 / 1, killed 157 / 152, gold at the end (stock + vaults) 70 / 242, stuck towns 6 / 0.

## Games

Each row: buildings / military / land tiles / soldiers / people at the minute shown. First: game minute of the first smelter, smith, weaponsmith, barracks, tower, castle (- = never).

### Map 31: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 25/5/2308/20/37 | 27/6/2508/6/50 |
| 30 | 34/7/3531/44/28 | 63/6/3770/12/103 |
| 45 | 36/9/3672/26/27 | 62/3/4440/3/99 |
| 60 | 35/8/3581/16/27 | 68/5/5797/7/108 |
| first | 6 7 10 11 17 - | 9 10 19 20 55 56 |

War and gold at the end: scheduled: took 3, lost 0, killed 45, fallen 37, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 3, killed 37, fallen 45, gold 0 in stock + 50 in vaults.

Soldiers every 5 min: 10 10 20 19 38 44 34 34 26 22 17 16 (original game NPC: 10 10 6 5 12 12 3 3 3 3 7 7).

First army orders (game min:sec): 0:00 armyReserve; 10:28 armyTarget sword=18; 10:28 armyTarget spear=8; 10:28 armyTarget bow=12; 13:22 march 8 soldiers -> 176,124; 19:46 armyTarget sword=22; 19:46 armyTarget spear=10; 19:46 armyTarget bow=14; 21:48 attack 6 soldiers -> building 142; 22:20 armyReserve; 22:48 attack 11 soldiers -> building 142; 23:48 attack 11 soldiers -> building 142.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 12 min, 1–31: settlers: No free settlers and every bed taken: build houses.
- 14 min, 13–26: stall: barracks: waiting for weapons from the weaponsmith 68% of the last 5 minutes.
- 10 min, 13–22: stall: weaponsmith: waiting for coal 79% of the last 5 minutes.
- 20 min, 18–55: army: Lost 4 soldiers in the last 5 minutes.
- 2 min, 23–24: carriers: weaponsmith: waiting for coal 71% of the last 10 minutes while 13 lie in stock: too few carriers. Build more houses.
- 5 min, 23–29: stall: smith: waiting for coal 100% of the last 5 minutes.
- 1 min, 25: stall: sawmill: waiting for logs 58% of the last 5 minutes.
- 34 min, 26–60: carriers: bakery: waiting for flour 87% of the last 10 minutes while 8 lie in stock: too few carriers. Build more houses.
- 33 min, 27–60: carriers: smith: waiting for coal 100% of the last 10 minutes while 27 lie in stock: too few carriers. Build more houses.
- 1 min, 27: stall: water hut: water pile full, waiting for carriers 79% of the last 5 minutes.
- 16 min, 28–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 1 min, 28: stall: hunter: meat pile full, waiting for carriers 79% of the last 5 minutes.
- 1 min, 29: stall: smelter: waiting for iron ore 89% of the last 5 minutes.
- 1 min, 29: stall: bakery: waiting for flour 82% of the last 5 minutes.
- 31 min, 30–60: stall: quarry: stone pile full, waiting for carriers 100% of the last 5 minutes.
- 1 min, 30: stall: mill: output pile full, waiting for carriers 93% of the last 5 minutes.
- 29 min, 31–60: weapons: 15 weapons lie unused: the barracks needs free settlers (build houses).
- 2 min, 31–32: stall: farm: grain pile full, waiting for carriers 100% of the last 5 minutes.
- 29 min, 32–60: carriers: smelter: waiting for iron ore 90% of the last 10 minutes while 16 lie in stock: too few carriers. Build more houses.
- 29 min, 32–60: settlers: No free settlers: build houses.
- 29 min, 32–60: orders: The order "priority" was sent 30 times this minute: send it only when something changes.
- 28 min, 33–60: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 28 min, 33–60: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 23 min, 34–56: carriers: weaponsmith: waiting for iron 77% of the last 10 minutes while 8 lie in stock: too few carriers. Build more houses.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 0 | 3 | 7 | 19 | 0 | 16 | 8 | 0 | 0 | 5 | 11 | 18 | 0 | 0 | 0 | 0 | 0 | 5 | 37 | 2308 | 8696 |
| 30 | 8 | 8 | 16 | 23 | 0 | 20 | 13 | 10 | 8 | 26 | 15 | 7 | 0 | 0 | 1 | 0 | 3 | 0 | 111 | 3531 | 11485 |
| 45 | 8 | 11 | 23 | 24 | 0 | 20 | 14 | 9 | 8 | 27 | 15 | 6 | 0 | 0 | 7 | 1 | 2 | 0 | 111 | 3672 | 14583 |
| 60 | 8 | 14 | 27 | 23 | 0 | 20 | 14 | 9 | 8 | 27 | 16 | 8 | 0 | 0 | 12 | 1 | 2 | 0 | 119 | 3581 | 14583 |

At the end: buildings (built+sites) guard 6, house 6, quarry 2, coalmine 2, ironmine 2, tower 2, hq 1, wood 1, saw 1, forest 1, hunter 1, waterhut 1, smelter 1, smith 1, weaponsmith 1, barracks 1, fisher 1, armorer 1, farm 1, mill 1, bakery 1.
People: worker 19, soldier 6, digger 2, builder 2, carrier 2, explorer 1, geologist 1; beds 60. Soldiers: sword 1, bow 5.

Goods produced in the game: coal 182, meat 130, fish 127, stone 108, ironore 106, log 97, plank 93, iron 90, sword 40, grain 34, water 31, flour 25, armor 17, bread 17, spear 9, bow 8, pick 4, hammer 2, saw 1, rod 1.
Goods consumed in the game: coal 155, stone 110, fish 110, meat 110, plank 109, log 93, ironore 90, iron 82, sword 28, grain 25, water 17, flour 17, bread 17, armor 10, bow 8, spear 8, pick 7, hammer 4, axe 1, saw 1, shovel 1, rod 1, scythe 1.
Goods captured in the game: stone 7, plank 3.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (60 building-min): Log pile full, waiting for carriers 57%, Felling a tree 33%, Bringing a log to the pile 10%, Worker picking up an axe 0%, Working 0%
- quarry (102 building-min): Stone pile full, waiting for carriers 71%, Cutting stone 17%, Bringing stone to the pile 8%, Stone pile full, nothing needs it right now 3%, Worker picking up a pickaxe 0%
- saw (59 building-min): Output pile full, waiting for carriers 55%, Waiting for logs 20%, Sawing planks 20%, Stacking outside 4%, Fetching from the pile 1%
- forest (59 building-min): No free ground to plant in range inside your border 62%, Planting a sapling 38%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- guard (320 building-min): Idle 97%, Waiting for a swordsman: train one at the barracks 2%, Soldiers on the way 0%, Free soldiers are too far away: bring one onto your land or near this building 0%
- house (297 building-min): Idle 100%
- hunter (58 building-min): Meat pile full, waiting for carriers 59%, Hunting 19%, Bringing meat to the pile 12%, Meat pile full, nothing needs it right now 9%, Worker picking up a bow 0%
- coalmine (97 building-min): Coal pile full, waiting for carriers 49%, Deposit thinning: mining coal 26%, Mining coal 17%, Bringing coal out 5%, Coal pile full, nothing needs it right now 1%
- ironmine (102 building-min): Iron ore pile full, waiting for carriers 51%, Deposit worn out: finding little iron ore 26%, Deposit thinning: mining iron ore 7%, Mining iron ore 6%, Iron ore pile full, nothing needs it right now 5%
- waterhut (56 building-min): Water pile full, waiting for carriers 66%, Water pile full, nothing needs it right now 26%, Fetching water 4%, Bringing water to the pile 4%, Working 0%
- smelter (54 building-min): Waiting for iron ore 61%, Smelting iron 21%, Output pile full, nothing needs it right now 8%, Stacking outside 5%, Waiting for coal 4%
- smith (53 building-min): Waiting for coal 75%, All tool targets met 22%, Forging pickaxe 1%, Worker picking up a hammer 1%, Forging hammer 0%
- weaponsmith (50 building-min): Waiting for iron 51%, Waiting for coal 19%, Output pile full, waiting for carriers 11%, Forging sword 10%, Stacking outside 3%
- barracks (50 building-min): Waiting for a free settler to train 58%, Waiting for weapons from the weaponsmith 26%, Waiting for iron armor for new bowmen 10%, Weapons on the way 4%, Training soldiers 2%
- fisher (48 building-min): Fish pile full, waiting for carriers 70%, Fishing 17%, Fish pile full, nothing needs it right now 8%, Bringing a fish to the pile 3%, Worker picking up a fishing rod 1%
- armorer (45 building-min): All armor targets met 82%, Waiting for iron 11%, Making iron armor 5%, Worker picking up a hammer 1%, Stacking outside 1%
- tower (85 building-min): Idle 99%, Soldiers on the way 1%
- farm (38 building-min): Grain pile full, waiting for carriers 86%, Sowing a field 7%, Harvesting grain 4%, Bringing grain to the pile 2%, Worker picking up a scythe 1%
- mill (37 building-min): Output pile full, waiting for carriers 80%, Waiting for grain 13%, Grinding flour 3%, Stacking outside 2%, Worker on the way 1%
- bakery (36 building-min): Waiting for flour 87%, Baking bread 11%, Stacking outside 1%, Worker on the way 1%, Waiting for flour and water 0%

Building sites, time per state (site-min): Builders at work 9, Leveling the ground 8, Waiting for a builder 6, Waiting for a digger 6, Waiting for materials 1.

Build order (placed at min:sec, finished at): wood 0:02→0:21, quarry 0:06→0:36, saw 0:22→0:58, forest 0:26→1:12, guard 0:58→1:33, house 1:02→1:57, hunter 1:26→2:12, guard 1:58→2:37, house 2:12→3:06, coalmine 2:40→3:26, guard 2:58→3:45, ironmine 3:28→4:02, waterhut 3:52→4:29, smelter 4:50→5:38, smith 5:50→6:44, house 6:46→7:29, house 7:38→8:28, weaponsmith 8:38→9:48, barracks 9:48→10:28, guard 10:48→11:42, fisher 11:16→11:59, guard 12:00→12:36, ironmine 12:44→13:29, armorer 13:56→14:50, tower 15:08→16:27, quarry 16:04→17:13, tower 16:56→18:56, house 17:46→19:20, coalmine 18:34→19:46, farm 20:04→21:36, mill 21:36→22:43, house 21:46→23:11, bakery 22:44→23:44.

Demolished or burned: guard (burned) 31:25, guard (burned) 55:15.

Orders given: priority 1558, sendUnit 34, place 33, march 11, attack 11, fighters 11, armyTarget 9, archers 7, armyReserve 3, weaponKeep 3, profession 2, toolKeep 1, armyArmor 1, armorRepair 1. None refused.

People changing jobs: new carrier 59, carrier -> soldier 43, new soldier 27, carrier -> worker 19, new geologist 1, carrier -> explorer 1.

People's orders (4923 in all, 4863 done): worker mine coalmine 300, worker rest coalmine 184, worker eat coalmine 170, worker rest forest 166, worker gather forest 165, worker mine ironmine 162, worker rest hunter 131, worker gather hunter 130, worker rest fisher 128, worker gather fisher 128, carrier haul fish fisher -> coalmine 112, worker rest quarry 110, worker gather quarry 108, worker rest ironmine 108. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×34; failed: no way (carrier (haul 0) target-off-land) ×1.

Failed path searches (who (task) why: times): carrier (haul 0) target-off-land 1.

Fights and contact: attacked enemy buildings 4 times (first 29:48); took guard 31:03, guard 31:21, guard 32:33; killed sword 31, bow 7, spear 7; lost people spear 8, sword 24, bow 5; first saw player 2 at 14:00.

Your notes (18 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 v247 frontier: posts 9, staffed 1, mines 2/2, geo 1, carriers 2/0, soldiers 22, enemy 41.
- 13:22 Expedition: 8 fighters toward 176,124 to reveal and engage the enemy.
- ×11 21:48–32:30 Siege: 8 fighters plus 0 banners against guard; estimated power 47 vs 12.


Script: 1965 turns, 0.2 ms average, worst 2 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 31: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 24/6/3057/22/33 | 35/6/2669/7/60 |
| 30 | 27/7/3088/18/34 | 71/11/5267/21/97 |
| 45 | 27/7/3088/25/27 | 80/15/9359/32/106 |
| 60 | 27/7/3088/25/27 | 87/22/14106/45/93 |
| first | 6 7 10 11 15 - | 8 10 17 17 24 39 |

War and gold at the end: scheduled: took 1, lost 1, killed 22, fallen 28, gold 5 in stock + 12 in vaults, STUCK (town stopped growing). original game NPC: took 1, lost 1, killed 28, fallen 22, gold 1 in stock + 86 in vaults.

Soldiers every 5 min: 10 10 22 19 23 18 25 25 25 25 25 25 (original game NPC: 10 10 7 9 25 21 26 27 32 36 40 45).

First army orders (game min:sec): 0:00 armyReserve; 10:54 armyTarget sword=18; 10:54 armyTarget spear=8; 10:54 armyTarget bow=12; 13:40 march 8 soldiers -> 80,120; 15:32 armyReserve; 17:42 attack 10 soldiers -> building 146; 18:36 march 3 soldiers -> 62,130; 19:04 armyReserve; 19:08 march 2 soldiers -> 58,133; 19:14 armyTarget sword=22; 19:14 armyTarget spear=10.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 5 min, 2–29: settlers: No free settlers and every bed taken: build houses.
- 44 min, 12–60: stall: weaponsmith: waiting for coal 100% of the last 5 minutes.
- 37 min, 19–60: stall: barracks: waiting for weapons from the weaponsmith 100% of the last 5 minutes.
- 6 min, 20–30: army: Lost 5 soldiers in the last 5 minutes.
- 1 min, 24: stall: smith: waiting for coal 64% of the last 5 minutes.
- 3 min, 25–29: carriers: weaponsmith: waiting for coal 78% of the last 10 minutes while 10 lie in stock: too few carriers. Build more houses.
- 9 min, 25–33: stall: gold mine: deposit worn out 69% of the last 5 minutes.
- 34 min, 27–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 1 min, 29: stall: armorer: output pile full, waiting for carriers 75% of the last 5 minutes.
- 5 min, 34–38: stall: goldsmelter: waiting for gold ore 100% of the last 5 minutes.
- 4 min, 35–38: stall: bakery: waiting for water 100% of the last 5 minutes.
- 2 min, 37–38: stall: gold mine: needs fish or bread 100% of the last 5 minutes.
- 22 min, 39–60: stall: coal mine: needs bread or fish or meat 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 2 | 7 | 5 | 12 | 0 | 16 | 0 | 0 | 0 | 6 | 15 | 20 | 0 | 0 | 0 | 0 | 0 | 1 | 38 | 3057 | 8283 |
| 30 | 0 | 17 | 24 | 4 | 3 | 4 | 10 | 8 | 13 | 7 | 12 | 21 | 0 | 15 | 0 | 1 | 0 | 2 | 49 | 3088 | 13593 |
| 45 | 0 | 15 | 24 | 1 | 0 | 1 | 8 | 14 | 14 | 10 | 14 | 21 | 0 | 17 | 0 | 1 | 0 | 7 | 60 | 3088 | 13593 |
| 60 | 0 | 15 | 24 | 1 | 0 | 1 | 8 | 14 | 14 | 10 | 14 | 21 | 0 | 17 | 0 | 1 | 0 | 7 | 60 | 3088 | 13593 |

At the end: buildings (built+sites) guard 5, house 4, ironmine 2, coalmine 2, tower 2, smelter 1, smith 1, weaponsmith 1, barracks 1, quarry 1, armorer 1, goldmine 1, goldsmelter 1, farm 1, vault 1, mill 1, bakery 1.
People: soldier 16, worker 14, carrier 7, digger 2, builder 2, explorer 1, geologist 1; beds 40. Soldiers: sword 11, banner 3, bow 2.

Goods produced in the game: coal 168, fish 134, stone 119, log 106, plank 105, ironore 100, iron 86, meat 69, grain 34, sword 33, goldore 21, gold 21, flour 20, armor 14, water 14, bread 6, pick 5, banner 4, hammer 3, bow 3, spear 2, saw 1, rod 1, axe 1, shovel 1, scythe 1.
Goods consumed in the game: coal 158, fish 139, plank 125, stone 121, log 106, ironore 86, iron 65, meat 61, sword 33, goldore 21, grain 20, pick 8, water 6, flour 6, bread 6, bow 5, hammer 5, gold 4, banner 4, spear 2, armor 2, axe 1, saw 1, shovel 1, rod 1, scythe 1.
Goods lost in the game: stone 10, plank 9, meat 7, log 4, coal 2, sword 1, axe 1, shovel 1, scythe 1.
Goods captured in the game: plank 8, stone 6, coal 2, sword 1.

What the buildings did (share of their time after being built):
- hq (28 building-min): Idle 100%
- wood (27 building-min): Felling a tree 77%, Bringing a log to the pile 23%, Worker picking up an axe 0%, Working 0%
- quarry (70 building-min): Stone pile full, nothing needs it right now 46%, Cutting stone 30%, Bringing stone to the pile 17%, Stone pile full, waiting for carriers 7%, Worker picking up a pickaxe 1%
- saw (27 building-min): Sawing planks 50%, Waiting for logs 31%, Stacking outside 11%, Output pile full, nothing needs it right now 6%, Fetching from the pile 1%
- forest (26 building-min): Planting a sapling 96%, No free ground to plant in range inside your border 3%, Worker picking up a shovel 1%, Idle 1%, Working 0%
- guard (266 building-min): Idle 97%, Waiting for a swordsman: train one at the barracks 3%, Soldiers on the way 0%, Waiting for a soldier 0%
- fisher (26 building-min): Fish pile full, nothing needs it right now 41%, Fishing 33%, Fish pile full, waiting for carriers 16%, Bringing a fish to the pile 7%, Waiting for a free settler 1%
- house (227 building-min): Idle 100%
- hunter (25 building-min): Hunting 35%, Bringing meat to the pile 27%, Meat pile full, nothing needs it right now 24%, Meat pile full, waiting for carriers 14%, Worker picking up a bow 0%
- ironmine (107 building-min): Iron ore pile full, nothing needs it right now 32%, Needs meat or fish: mining stopped 28%, Deposit worn out: finding little iron ore 16%, Deposit thinning: mining iron ore 12%, Mining iron ore 6%
- coalmine (97 building-min): Needs bread or fish or meat: mining stopped 59%, Mining coal 20%, Deposit thinning: mining coal 14%, Bringing coal out 5%, Fetching food 1%
- smelter (54 building-min): Output pile full, nothing needs it right now 64%, Smelting iron 20%, Output pile full, waiting for carriers 8%, Stacking outside 4%, Waiting for coal 3%
- smith (53 building-min): Output pile full, nothing needs it right now 57%, All tool targets met 30%, Waiting for coal 7%, Output pile full, waiting for carriers 2%, Forging pickaxe 1%
- weaponsmith (50 building-min): Waiting for coal 86%, Forging sword 8%, Stacking outside 2%, Forging banner 1%, Forging bow 1%
- barracks (49 building-min): Waiting for weapons from the weaponsmith 83%, Weapons on the way 16%, Training soldiers 1%
- tower (89 building-min): Idle 100%, Soldiers on the way 0%
- armorer (42 building-min): Output pile full, nothing needs it right now 82%, Output pile full, waiting for carriers 11%, Making iron armor 4%, Worker picking up a hammer 1%, Stacking outside 1%
- goldmine (40 building-min): Needs fish or bread: mining stopped 72%, Deposit worn out: finding little gold ore 23%, Worker picking up a pickaxe 2%, Bringing gold ore out 1%, Came back empty-handed 1%
- waterhut (7 building-min): Water pile full, waiting for carriers 50%, Water pile full, nothing needs it right now 23%, Bringing water to the pile 13%, Fetching water 11%, Worker on the way 2%
- goldsmelter (38 building-min): Waiting for gold ore 87%, Smelting gold 7%, Worker picking up a hammer 2%, Stacking outside 1%, Waiting for coal and gold ore 1%
- farm (37 building-min): Grain pile full, nothing needs it right now 81%, Sowing a field 7%, Harvesting grain 5%, Grain pile full, waiting for carriers 5%, Bringing grain to the pile 2%
- vault (36 building-min): Idle 100%
- mill (35 building-min): Output pile full, nothing needs it right now 88%, Output pile full, waiting for carriers 6%, Grinding flour 3%, Stacking outside 2%, Worker on the way 1%
- bakery (33 building-min): Waiting for water 90%, Baking bread 4%, Waiting for flour 3%, Worker on the way 1%, Waiting for flour and water 1%

Building sites, time per state (site-min): Builders at work 10, Leveling the ground 9, Waiting for a digger 7, Waiting for a builder 5, Waiting for materials 2.

Build order (placed at min:sec, finished at): wood 0:02→0:32, quarry 0:06→0:48, saw 0:34→1:09, forest 0:38→1:22, guard 1:10→1:51, fisher 1:14→2:31, house 1:24→2:51, hunter 1:52→3:07, guard 2:32→3:31, ironmine 3:28→3:58, coalmine 3:40→4:13, guard 3:44→4:37, house 4:04→4:58, smelter 5:02→5:53, smith 6:12→6:55, house 6:56→7:42, ironmine 8:14→8:44, weaponsmith 8:52→9:43, barracks 10:06→10:54, guard 11:30→12:15, guard 12:30→13:08, tower 13:30→14:19, house 14:06→14:49, tower 14:58→16:13, quarry 15:52→16:34, armorer 17:04→17:57, house 18:00→18:38, coalmine 18:10→19:13, house 18:48→20:04, goldmine 19:28→20:30, waterhut 20:28→21:30, goldsmelter 20:32→22:20, farm 21:40→22:58, vault 22:22→23:40, mill 23:48→24:50, bakery 25:00→27:30.

Demolished or burned: guard (burned) 19:43, hq (burned) 27:47, wood (burned) 27:47, quarry (burned) 27:47, saw (burned) 27:47, forest (burned) 27:47, house (burned) 27:47, hunter (burned) 27:47, house (burned) 27:47, fisher (burned) 28:45, waterhut (burned) 28:45.

Orders given: sendUnit 109, priority 58, place 36, armyTarget 13, march 5, armyReserve 4, weaponKeep 3, profession 2, attack 2, toolKeep 1, armyArmor 1, armorRepair 1, vaultKeep 1. None refused.

People changing jobs: new carrier 58, carrier -> soldier 43, carrier -> worker 19, worker -> carrier 7, new worker 2, carrier -> geologist 1, carrier -> explorer 1, new soldier 1.

People's orders (4817 in all, 4666 done): worker mine coalmine 251, worker rest forest 181, worker gather forest 181, worker rest coalmine 175, worker mine ironmine 152, worker rest fisher 135, worker gather fisher 134, worker eat coalmine 128, worker rest quarry 121, worker gather quarry 119, carrier haul fish fisher -> coalmine 112, worker rest wood 107, worker gather wood 107, worker rest saw 106. Not done (outcome: times): failed: no way (carrier (haul 0) target-off-land) ×91; failed: nothing left to search there ×32; ended: the person is gone (became a soldier, defeated or removed) ×10; failed: gave up: goods put down where he stood ×2.

Failed path searches (who (task) why: times): carrier (haul 0) target-off-land 91, carrier (haul 1) own-land-split 2.

Fights and contact: attacked enemy buildings 2 times (first 17:42); was attacked 1 times (first 27:24); took guard 18:00; lost hq 27:47; killed bow 5, sword 12, spear 5; lost people sword 20, bow 5, spear 2, banner 1; first saw player 1 at 10:00.

Warnings: path-fail 1. Last: 30:17 path-fail: carrier (haul 0) failed 5 times within a minute to find a way, last to 189,116: target-off-land

Your notes (10 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 v247 frontier: posts 7, staffed 1, mines 2/2, geo 1, carriers 7/7, soldiers 25, enemy 28.
- 13:40 Expedition: 8 fighters toward 80,120 to reveal and engage the enemy.
- ×2 17:42–25:00 Siege: 6 fighters plus 1 banners against guard; estimated power 65 vs 12.
- 26:01 Siege aborted after 4 field losses; retreating to HQ.


Script: 1895 turns, 0.2 ms average, worst 4 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 21/4/2167/18/32 | 29/6/2875/10/50 |
| 30 | 35/7/3684/46/34 | 62/12/6611/23/77 |
| 45 | 40/9/4378/43/33 | 81/19/10820/30/95 |
| 60 | 40/9/4378/35/31 | 84/21/12835/34/96 |
| first | 6 7 11 12 20 42 | 9 10 13 22 31 30 |

War and gold at the end: scheduled: took 1, lost 0, killed 30, fallen 14, gold 8 in stock + 4 in vaults. original game NPC: took 0, lost 1, killed 14, fallen 30, gold 1 in stock + 35 in vaults.

Soldiers every 5 min: 10 10 18 30 43 46 46 46 43 41 36 35 (original game NPC: 10 10 10 10 17 23 29 39 30 34 33 34).

First army orders (game min:sec): 0:00 armyReserve; 11:34 armyTarget sword=18; 11:34 armyTarget spear=8; 11:34 armyTarget bow=12; 15:14 march 8 soldiers -> 89,126; 16:50 armyReserve; 20:14 march 12 soldiers -> 111,117; 20:44 armyTarget sword=22; 20:44 armyTarget spear=10; 20:44 armyTarget bow=14; 25:14 march 12 soldiers -> 122,121; 30:14 march 12 soldiers -> 123,103.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 28 min, 2–50: settlers: No free settlers and every bed taken: build houses.
- 6 min, 9–39: stall: smith: waiting for coal 100% of the last 5 minutes.
- 8 min, 10–28: stall: sawmill: waiting for logs 62% of the last 5 minutes.
- 13 min, 13–26: stall: weaponsmith: waiting for coal 54% of the last 5 minutes.
- 6 min, 14–24: stall: barracks: waiting for weapons from the weaponsmith 50% of the last 5 minutes.
- 5 min, 20–27: stall: forest: no free ground to plant in range inside your border 51% of the last 5 minutes.
- 1 min, 21: carriers: weaponsmith: waiting for coal 71% of the last 10 minutes while 4 lie in stock: too few carriers. Build more houses.
- 8 min, 27–41: stall: water hut: water pile full, waiting for carriers 100% of the last 5 minutes.
- 4 min, 28–40: stall: hunter: meat pile full, waiting for carriers 100% of the last 5 minutes.
- 3 min, 29–31: stall: smelter: waiting for iron ore 97% of the last 5 minutes.
- 1 min, 31: stall: armorer: waiting for iron 92% of the last 5 minutes.
- 1 min, 31: stall: weaponsmith: waiting for iron 86% of the last 5 minutes.
- 21 min, 32–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 29 min, 32–60: carriers: armorer: waiting for iron 100% of the last 10 minutes while 4 lie in stock: too few carriers. Build more houses.
- 12 min, 32–49: stall: barracks: waiting for iron armor for new bowmen 100% of the last 5 minutes.
- 27 min, 33–60: weapons: 14 weapons lie unused: the barracks needs free settlers (build houses).
- 28 min, 33–60: carriers: smelter: waiting for iron ore 94% of the last 10 minutes while 14 lie in stock: too few carriers. Build more houses.
- 5 min, 33–37: stall: mill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 6 min, 34–43: carriers: sawmill: waiting for logs 75% of the last 10 minutes while 7 lie in stock: too few carriers. Build more houses.
- 27 min, 34–60: carriers: bakery: waiting for flour 98% of the last 10 minutes while 8 lie in stock: too few carriers. Build more houses.
- 8 min, 34–45: stall: farm: grain pile full, waiting for carriers 100% of the last 5 minutes.
- 11 min, 39–49: carriers: goldsmelter: waiting for gold ore 72% of the last 10 minutes while 5 lie in stock: too few carriers. Build more houses.
- 21 min, 40–60: carriers: smith: waiting for coal 100% of the last 10 minutes while 32 lie in stock: too few carriers. Build more houses.
- 11 min, 42–60: army: Lost 4 soldiers in the last 5 minutes.
- 18 min, 43–60: orders: The order "priority" was sent 30 times this minute: send it only when something changes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 2 | 9 | 9 | 11 | 0 | 15 | 0 | 0 | 0 | 13 | 14 | 19 | 0 | 0 | 1 | 0 | 0 | 5 | 46 | 2167 | 4844 |
| 30 | 5 | 4 | 16 | 17 | 0 | 16 | 8 | 12 | 8 | 21 | 11 | 5 | 4 | 0 | 3 | 0 | 2 | 0 | 82 | 3684 | 7950 |
| 45 | 10 | 10 | 16 | 19 | 0 | 16 | 14 | 11 | 8 | 33 | 16 | 4 | 8 | 5 | 6 | 0 | 2 | 0 | 114 | 4378 | 10087 |
| 60 | 14 | 8 | 16 | 13 | 0 | 15 | 14 | 10 | 8 | 32 | 14 | 4 | 7 | 12 | 11 | 1 | 2 | 0 | 126 | 4378 | 10170 |

At the end: buildings (built+sites) house 6, guard 5, tower 3, quarry 2, ironmine 2, coalmine 2, hq 1, wood 1, saw 1, forest 1, fisher 1, hunter 1, smelter 1, smith 1, weaponsmith 1, barracks 1, look 1, armorer 1, waterhut 1, farm 1, mill 1, goldmine 1, bakery 1, goldsmelter 1, vault 1, castle 1.
People: worker 22, soldier 21, carrier 3, digger 2, builder 2, explorer 1, geologist 1; beds 60. Soldiers: sword 7, bow 6, spear 5, banner 3.

Goods produced in the game: fish 242, coal 191, stone 135, log 128, plank 118, ironore 100, meat 86, iron 86, sword 31, armor 24, goldore 22, grain 21, water 17, gold 15, flour 11, spear 9, bow 8, pick 5, hammer 3, banner 3, bread 3, saw 1, rod 1.
Goods consumed in the game: fish 235, coal 159, stone 137, plank 134, log 118, ironore 86, iron 82, meat 71, armor 24, sword 21, goldore 15, grain 11, pick 8, bow 8, spear 8, hammer 5, gold 3, banner 3, water 3, flour 3, bread 3, axe 1, saw 1, shovel 1, rod 1, scythe 1.
Goods captured in the game: hammer 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (60 building-min): Felling a tree 47%, Log pile full, waiting for carriers 34%, Bringing a log to the pile 19%, Worker picking up an axe 0%, Working 0%
- quarry (102 building-min): Stone pile full, waiting for carriers 60%, Cutting stone 22%, Bringing stone to the pile 11%, Stone pile full, nothing needs it right now 6%, Worker picking up a pickaxe 0%
- saw (59 building-min): Waiting for logs 39%, Output pile full, waiting for carriers 28%, Sawing planks 26%, Stacking outside 5%, Output pile full, nothing needs it right now 1%
- forest (59 building-min): No free ground to plant in range inside your border 56%, Planting a sapling 44%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- guard (262 building-min): Idle 96%, Waiting for a swordsman: train one at the barracks 3%, Soldiers on the way 0%, Waiting for a soldier 0%
- house (292 building-min): Idle 100%
- fisher (58 building-min): Fish pile full, waiting for carriers 46%, Fishing 26%, Fish pile full, nothing needs it right now 22%, Bringing a fish to the pile 6%, Worker picking up a fishing rod 0%
- hunter (57 building-min): Meat pile full, waiting for carriers 63%, Meat pile full, nothing needs it right now 20%, Hunting 12%, Bringing meat to the pile 5%, Worker picking up a bow 0%
- ironmine (108 building-min): Iron ore pile full, waiting for carriers 49%, Deposit worn out: finding little iron ore 24%, Deposit thinning: mining iron ore 10%, Iron ore pile full, nothing needs it right now 7%, Mining iron ore 4%
- coalmine (95 building-min): Coal pile full, waiting for carriers 35%, Deposit worn out: finding little coal 22%, Deposit thinning: mining coal 18%, Mining coal 14%, Bringing coal out 5%
- smelter (55 building-min): Waiting for iron ore 60%, Smelting iron 20%, Output pile full, nothing needs it right now 10%, Stacking outside 4%, Waiting for coal 3%
- smith (54 building-min): Waiting for coal 57%, All tool targets met 40%, Forging pickaxe 1%, Forging hammer 1%, Stacking outside 0%
- weaponsmith (50 building-min): Waiting for iron 33%, Waiting for coal 20%, Waiting for gold 12%, All weapon targets met 11%, Forging sword 8%
- barracks (48 building-min): Waiting for iron armor for new bowmen 67%, Weapons on the way 16%, Waiting for weapons from the weaponsmith 15%, Training soldiers 2%, Waiting for iron armor for new swordsmen 0%
- look (44 building-min): Scout on watch 99%, Scout on the way 1%, Working 0%, Idle 0%
- tower (96 building-min): Idle 99%, Waiting for a swordsman: train one at the barracks 1%, Waiting for a soldier 0%
- armorer (40 building-min): Waiting for iron 87%, Making iron armor 8%, All armor targets met 2%, Stacking outside 2%, Worker picking up a hammer 1%
- waterhut (39 building-min): Water pile full, waiting for carriers 89%, Water pile full, nothing needs it right now 4%, Bringing water to the pile 3%, Fetching water 3%, Worker on the way 1%
- farm (35 building-min): Grain pile full, waiting for carriers 90%, Sowing a field 4%, Harvesting grain 3%, Worker picking up a scythe 1%, Bringing grain to the pile 1%
- mill (33 building-min): Output pile full, waiting for carriers 95%, Grinding flour 2%, Waiting for grain 1%, Worker on the way 1%, Stacking outside 1%
- goldmine (32 building-min): Deposit worn out: finding little gold ore 55%, Gold ore pile full, waiting for carriers 29%, Deposit thinning: mining gold ore 4%, Needs fish or bread: mining stopped 4%, Worker picking up a pickaxe 3%
- bakery (28 building-min): Waiting for flour 96%, Baking bread 2%, Worker on the way 1%, Stacking outside 0%, Working 0%
- goldsmelter (28 building-min): Waiting for gold ore 59%, Output pile full, waiting for carriers 28%, Smelting gold 7%, Worker picking up a hammer 3%, Stacking outside 2%
- vault (25 building-min): Idle 100%
- castle (19 building-min): Waiting for a swordsman: train one at the barracks 100%

Building sites, time per state (site-min): Leveling the ground 11, Builders at work 11, Waiting for a digger 11, Waiting for a builder 10, Waiting for materials 3.

Build order (placed at min:sec, finished at): wood 0:02→0:25, quarry 0:06→0:43, saw 0:26→1:04, forest 0:38→1:18, guard 1:04→1:41, house 1:08→2:02, fisher 1:20→2:21, hunter 1:42→2:42, guard 2:04→3:01, house 2:28→3:29, ironmine 2:46→3:44, guard 3:06→4:02, coalmine 3:42→4:19, smelter 4:22→5:26, smith 5:28→6:17, house 6:18→6:53, ironmine 7:28→8:10, weaponsmith 9:08→10:13, barracks 10:24→11:33, guard 13:08→14:08, guard 14:30→15:31, look 15:00→15:48, house 15:08→16:24, quarry 16:06→16:56, house 16:50→17:39, tower 17:38→19:45, armorer 18:16→20:15, coalmine 18:44→20:43, waterhut 20:06→21:12, house 20:44→21:48, tower 22:02→22:58, farm 24:06→25:05, mill 25:48→26:45, goldmine 26:42→27:45, bakery 29:48→31:33, goldsmelter 30:28→32:27, vault 32:28→35:00, castle 36:28→41:21.

Orders given: priority 559, place 38, march 18, archers 17, armyTarget 11, fighters 11, sendUnit 5, weaponKeep 3, armyReserve 2, profession 2, armyArmor 2, toolKeep 1, armorRepair 1, vaultKeep 1, attack 1. None refused.

People changing jobs: new carrier 59, new soldier 40, carrier -> soldier 39, carrier -> worker 22, new geologist 1, carrier -> explorer 1.

People's orders (5535 in all, 5455 done): worker mine coalmine 350, worker rest fisher 243, worker gather fisher 242, worker eat coalmine 205, worker rest coalmine 201, carrier haul fish fisher -> coalmine 198, worker rest forest 182, worker gather forest 181, soldier march 174, worker mine ironmine 161, worker rest quarry 137, worker gather quarry 135, worker rest wood 129, worker gather wood 128. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×21.

Fights and contact: attacked enemy buildings 1 times (first 41:35); took tower 41:38; killed spear 6, bow 3, sword 21; lost people sword 9, spear 3, bow 2; first saw player 2 at 38:00.

Your notes (16 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 v247 frontier: posts 9, staffed 0, mines 2/2, geo 1, carriers 4/0, soldiers 41, enemy 2.
- ×9 15:14–55:18 Expedition: 8 fighters toward 140,125 to reveal and engage the enemy.
- 41:35 Siege: 22 fighters plus 1 banners against tower; estimated power 136 vs 12.


Script: 1896 turns, 0.2 ms average, worst 3 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 23/6/2471/20/30 | 29/5/2391/10/50 |
| 30 | 35/8/3889/27/33 | 52/6/3186/7/58 |
| 45 | 37/9/3942/25/28 | 53/5/4083/6/53 |
| 60 | 39/9/3937/18/28 | 63/6/5052/11/82 |
| first | 8 8 10 11 16 - | 9 9 21 23 - 60 |

War and gold at the end: scheduled: took 3, lost 0, killed 27, fallen 34, gold 0 in stock + 0 in vaults. original game NPC: took 0, lost 3, killed 34, fallen 27, gold 0 in stock + 7 in vaults.

Soldiers every 5 min: 10 10 20 23 24 27 28 25 25 25 24 18 (original game NPC: 10 10 10 6 7 7 5 6 6 6 6 11).

First army orders (game min:sec): 0:00 armyReserve; 10:48 armyTarget sword=18; 10:48 armyTarget spear=8; 10:48 armyTarget bow=12; 14:00 attack 6 soldiers -> building 133; 14:56 march 4 soldiers -> 48,125; 21:42 armyReserve; 22:38 attack 10 soldiers -> building 128; 23:08 armyTarget sword=22; 23:08 armyTarget spear=10; 23:08 armyTarget bow=14; 23:10 march 2 soldiers -> 41,133.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 6 min, 2–20: settlers: No free settlers and every bed taken: build houses.
- 16 min, 4–32: stall: sawmill: waiting for logs 86% of the last 5 minutes.
- 12 min, 12–26: stall: weaponsmith: waiting for coal 56% of the last 5 minutes.
- 18 min, 13–30: stall: barracks: waiting for weapons from the weaponsmith 70% of the last 5 minutes.
- 45 min, 16–60: orders: The order "priority" was sent 60 times this minute: send it only when something changes.
- 3 min, 18–20: carriers: weaponsmith: waiting for coal 72% of the last 10 minutes while 5 lie in stock: too few carriers. Build more houses.
- 1 min, 20: stall: hunter: meat pile full, waiting for carriers 72% of the last 5 minutes.
- 10 min, 21–50: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 27 min, 30–60: weapons: 17 weapons lie unused: the barracks needs free settlers (build houses).
- 4 min, 30–33: stall: smelter: waiting for iron ore 91% of the last 5 minutes.
- 17 min, 31–60: stall: quarry: stone pile full, waiting for carriers 100% of the last 5 minutes.
- 20 min, 33–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 27 min, 33–60: carriers: sawmill: waiting for logs 92% of the last 10 minutes while 8 lie in stock: too few carriers. Build more houses.
- 27 min, 33–60: carriers: bakery: waiting for flour 88% of the last 10 minutes while 8 lie in stock: too few carriers. Build more houses.
- 5 min, 33–37: stall: mill: output pile full, waiting for carriers 98% of the last 5 minutes.
- 26 min, 34–60: carriers: smelter: waiting for iron ore 92% of the last 10 minutes while 16 lie in stock: too few carriers. Build more houses.
- 12 min, 35–58: stall: farm: grain pile full, waiting for carriers 100% of the last 5 minutes.
- 24 min, 36–60: settlers: No free settlers: build houses.
- 3 min, 37–39: army: Lost 8 soldiers in the last 5 minutes.
- 3 min, 38–55: stall: smith: waiting for coal 100% of the last 5 minutes.
- 20 min, 40–60: carriers: smith: waiting for coal 100% of the last 10 minutes while 33 lie in stock: too few carriers. Build more houses.
- 19 min, 41–60: stall: barracks: waiting for a free settler to train 100% of the last 5 minutes.
- 1 min, 44: stall: water hut: water pile full, waiting for carriers 100% of the last 5 minutes.
- 5 min, 45–49: stall: gold mine: gold ore pile full, waiting for carriers 100% of the last 5 minutes.
- 13 min, 47–60: carriers: weaponsmith: waiting for iron 94% of the last 10 minutes while 6 lie in stock: too few carriers. Build more houses.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 0 | 7 | 11 | 11 | 0 | 16 | 0 | 0 | 0 | 5 | 21 | 19 | 0 | 0 | 1 | 0 | 1 | 4 | 50 | 2471 | 10238 |
| 30 | 8 | 3 | 16 | 13 | 0 | 15 | 13 | 13 | 8 | 22 | 6 | 10 | 0 | 0 | 5 | 0 | 3 | 1 | 94 | 3889 | 13285 |
| 45 | 8 | 4 | 22 | 19 | 2 | 14 | 13 | 12 | 8 | 28 | 16 | 5 | 8 | 0 | 7 | 2 | 3 | 0 | 119 | 3942 | 13726 |
| 60 | 8 | 3 | 16 | 18 | 3 | 14 | 13 | 9 | 8 | 33 | 16 | 6 | 11 | 0 | 9 | 3 | 5 | 0 | 119 | 3937 | 13726 |

At the end: buildings (built+sites) guard 7, house 6, quarry 2, coalmine 2, ironmine 2, tower 2, hq 1, wood 1, saw 1, forest 1, fisher 1, hunter 1, smelter 1, smith 1, weaponsmith 1, barracks 1, armorer 1, waterhut 1, farm 1, mill 1, bakery 1, goldmine 1, goldsmelter 1, vault 1.
People: worker 20, soldier 8, digger 2, builder 2, carrier 2, explorer 1, geologist 1; beds 60. Soldiers: sword 5, bow 2, spear 1.

Goods produced in the game: coal 192, fish 152, stone 119, ironore 108, log 104, plank 100, iron 92, meat 85, sword 38, grain 28, water 24, armor 19, flour 19, bow 13, goldore 11, bread 10, spear 7, pick 5, hammer 2, saw 1, rod 1.
Goods consumed in the game: coal 159, fish 140, plank 121, stone 121, log 100, ironore 92, iron 86, meat 71, sword 29, grain 19, armor 11, water 11, flour 11, bow 10, pick 8, bread 7, hammer 4, spear 4, axe 1, saw 1, shovel 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (59 building-min): Log pile full, waiting for carriers 45%, Felling a tree 39%, Bringing a log to the pile 16%, Worker picking up an axe 0%, Working 0%
- quarry (102 building-min): Stone pile full, waiting for carriers 63%, Cutting stone 19%, Bringing stone to the pile 10%, Stone pile full, nothing needs it right now 7%, Worker picking up a pickaxe 0%
- saw (59 building-min): Waiting for logs 73%, Sawing planks 22%, Stacking outside 5%, Fetching from the pile 1%, Worker picking up a saw 0%
- forest (59 building-min): No free ground to plant in range inside your border 62%, Planting a sapling 38%, Worker picking up a shovel 0%, Idle 0%
- guard (335 building-min): Idle 90%, Waiting for a swordsman: train one at the barracks 10%, Soldiers on the way 0%, Waiting for a soldier 0%
- fisher (58 building-min): Fish pile full, waiting for carriers 57%, Fish pile full, nothing needs it right now 22%, Fishing 17%, Bringing a fish to the pile 3%, Waiting for a free settler 1%
- house (285 building-min): Idle 100%
- hunter (57 building-min): Meat pile full, waiting for carriers 55%, Hunting 18%, Meat pile full, nothing needs it right now 14%, Bringing meat to the pile 13%, Worker picking up a bow 0%
- coalmine (92 building-min): Coal pile full, waiting for carriers 52%, Mining coal 19%, Deposit thinning: mining coal 19%, Bringing coal out 6%, Needs bread or fish or meat: mining stopped 1%
- ironmine (103 building-min): Iron ore pile full, waiting for carriers 52%, Deposit worn out: finding little iron ore 22%, Deposit thinning: mining iron ore 13%, Mining iron ore 6%, Bringing iron ore out 3%
- smelter (53 building-min): Waiting for iron ore 63%, Smelting iron 22%, Output pile full, nothing needs it right now 7%, Stacking outside 5%, Output pile full, waiting for carriers 1%
- smith (52 building-min): Waiting for coal 61%, All tool targets met 36%, Forging pickaxe 1%, Forging hammer 0%, Worker picking up a hammer 0%
- weaponsmith (50 building-min): Waiting for iron 41%, Waiting for coal 24%, Output pile full, waiting for carriers 16%, Forging sword 10%, Forging bow 3%
- barracks (49 building-min): Waiting for a free settler to train 51%, Waiting for weapons from the weaponsmith 34%, Weapons on the way 13%, Training soldiers 2%
- tower (83 building-min): Idle 99%, Soldiers on the way 1%
- armorer (44 building-min): All armor targets met 83%, Making iron armor 5%, Waiting for iron 5%, Output pile full, waiting for carriers 3%, Stacking outside 1%
- waterhut (37 building-min): Water pile full, waiting for carriers 78%, Bringing water to the pile 10%, Fetching water 9%, Water pile full, nothing needs it right now 2%, Worker on the way 0%
- farm (34 building-min): Grain pile full, waiting for carriers 86%, Sowing a field 7%, Harvesting grain 4%, Bringing grain to the pile 2%, Worker picking up a scythe 2%
- mill (34 building-min): Output pile full, waiting for carriers 91%, Waiting for grain 4%, Grinding flour 3%, Stacking outside 2%, Fetching from the pile 0%
- bakery (33 building-min): Waiting for flour 88%, Baking bread 7%, Waiting for flour and water 2%, Worker on the way 1%, Stacking outside 1%
- goldmine (27 building-min): Gold ore pile full, waiting for carriers 82%, Deposit worn out: finding little gold ore 9%, Mining gold ore 4%, Worker picking up a pickaxe 1%, Bringing gold ore out 1%
- goldsmelter (14 building-min): Waiting for a free settler 99%, Idle 1%
- vault (4 building-min): Idle 100%

Building sites, time per state (site-min): Builders at work 10, Waiting for materials 9, Leveling the ground 8, Waiting for a digger 7, Waiting for a builder 6.

Build order (placed at min:sec, finished at): wood 0:02→0:32, quarry 0:06→0:51, saw 0:32→1:10, forest 0:38→1:26, guard 1:10→1:46, fisher 1:14→2:17, house 1:26→2:38, hunter 1:46→2:58, guard 2:18→3:21, guard 3:30→4:05, coalmine 3:52→4:37, house 4:38→5:20, ironmine 4:56→5:36, house 5:30→6:11, smelter 6:02→7:08, smith 7:12→7:57, weaponsmith 8:48→9:59, barracks 10:00→10:48, ironmine 11:08→11:50, guard 11:50→12:46, guard 12:56→13:36, tower 13:56→15:18, armorer 15:08→16:05, quarry 16:04→16:50, house 17:14→18:48, house 19:10→20:00, tower 19:56→21:38, house 20:34→21:59, waterhut 21:04→22:40, coalmine 22:16→23:06, farm 24:04→25:36, mill 25:36→26:12, bakery 26:18→27:09, goldmine 31:00→32:34, goldsmelter 41:54→45:44, vault 52:08→55:42.

Demolished or burned: guard (burned) 29:12.

Orders given: priority 2133, sendUnit 40, place 36, armyTarget 10, march 10, fighters 6, armyReserve 5, attack 4, archers 4, weaponKeep 3, profession 2, toolKeep 1, armyArmor 1, armorRepair 1, vaultKeep 1. None refused.

People changing jobs: new carrier 59, carrier -> soldier 42, carrier -> worker 19, new soldier 16, new worker 1, carrier -> explorer 1, carrier -> geologist 1.

People's orders (4879 in all, 4829 done): worker mine coalmine 283, worker rest coalmine 196, worker rest forest 174, worker gather forest 173, worker mine ironmine 169, worker rest fisher 153, worker gather fisher 152, worker eat coalmine 140, carrier haul fish fisher -> coalmine 134, worker rest quarry 121, worker gather quarry 119, worker rest ironmine 110, worker rest wood 105, worker gather wood 104. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×18.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 5.

Fights and contact: attacked enemy buildings 5 times (first 14:00); took guard 14:53, guard 29:12, guard 34:13; killed bow 8, sword 15, spear 4; lost people sword 21, bow 10, spear 3; first saw player 1 at 13:00.

Your notes (11 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 v247 frontier: posts 9, staffed 1, mines 2/2, geo 1, carriers 2/0, soldiers 25, enemy 28.
- ×4 14:00–33:54 Siege: 10 fighters plus 0 banners against guard; estimated power 80 vs 39.
- 23:49 Siege aborted after 4 field losses; retreating to HQ.


Script: 1924 turns, 0.2 ms average, worst 4 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 12/3/1439/10/30 | 30/6/2570/10/40 |
| 30 | 14/3/1446/10/30 | 65/12/5444/33/77 |
| 45 | 14/3/1446/10/30 | 80/16/8063/47/113 |
| 60 | 14/3/1446/10/30 | 86/21/12565/53/107 |
| first | - - - - - - | 9 9 20 23 36 30 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 3 in stock + 35 in vaults.

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 18 33 42 47 47 47 48 53).

First army orders (game min:sec): 0:00 armyReserve.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 1 min, 2: settlers: No free settlers and every bed taken: build houses.
- 41 min, 12–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (1 mountain tiles).
- 43 min, 18–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 9 | 11 | 8 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 19 | 40 | 1439 | 5810 |
| 30 | 15 | 11 | 16 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 17 | 48 | 1446 | 8811 |
| 45 | 15 | 11 | 16 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 17 | 48 | 1446 | 8811 |
| 60 | 15 | 11 | 16 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 17 | 48 | 1446 | 8811 |

At the end: buildings (built+sites) guard 3, quarry 2, house 2, hq 1, wood 1, saw 1, forest 1, fisher 1, hunter 1, look 1.
People: carrier 17, soldier 8, worker 8, digger 2, builder 2, explorer 1; beds 20. Soldiers: sword 5, bow 3.

Goods produced in the game: stone 34, log 31, plank 20, fish 8, meat 8.
Goods consumed in the game: stone 36, plank 33, log 20, pick 2, axe 1, saw 1, shovel 1, rod 1, bow 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (60 building-min): Log pile full, nothing needs it right now 85%, Felling a tree 10%, Bringing a log to the pile 4%, Worker picking up an axe 0%, Working 0%
- quarry (103 building-min): Stone pile full, nothing needs it right now 91%, Cutting stone 6%, Bringing stone to the pile 3%, Worker picking up a pickaxe 0%, Stone pile full, waiting for carriers 0%
- saw (59 building-min): Output pile full, nothing needs it right now 93%, Sawing planks 4%, Waiting for logs 1%, Stacking outside 1%, Worker picking up a saw 0%
- forest (59 building-min): No free ground to plant in range inside your border 77%, Planting a sapling 23%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- guard (171 building-min): Idle 67%, Waiting for a swordsman: train one at the barracks 33%, Soldiers on the way 0%, Waiting for a soldier 0%
- house (115 building-min): Idle 100%
- fisher (58 building-min): Fish pile full, nothing needs it right now 98%, Fishing 1%, Worker picking up a fishing rod 0%, Fish pile full, waiting for carriers 0%, Bringing a fish to the pile 0%
- hunter (57 building-min): Meat pile full, nothing needs it right now 97%, Hunting 2%, Bringing meat to the pile 1%, Meat pile full, waiting for carriers 0%, Worker picking up a bow 0%
- look (44 building-min): Scout on watch 100%, Working 0%

Building sites, time per state (site-min): Builders at work 3, Leveling the ground 2, Waiting for a digger 2, Waiting for materials 1, Waiting for a builder 1.

Build order (placed at min:sec, finished at): wood 0:02→0:24, quarry 0:06→0:44, saw 0:26→1:03, forest 0:38→1:16, guard 1:04→1:39, house 1:08→2:03, fisher 1:18→2:19, hunter 1:40→2:37, guard 2:08→2:59, house 2:50→3:24, guard 3:40→4:11, look 15:00→15:33, quarry 15:04→15:49.

Orders given: sendUnit 114, place 13, priority 3, armyReserve 1, profession 1. None refused.

People changing jobs: new carrier 20, carrier -> worker 8, carrier -> explorer 1.

People's orders (644 in all, 633 done): worker rest forest 102, worker gather forest 101, explorer explore 46, worker rest quarry 36, worker gather quarry 34, worker rest wood 32, worker gather wood 31, carrier haul log wood -> saw 23, worker rest saw 21, worker toCraft saw 20, worker craft saw 20, worker rest fisher 9, worker rest hunter 9, worker gather fisher 8. None failed.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 68.

Fights and contact: first saw player 2 at 15:00.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 v247 frontier: posts 3, staffed 0, mines 0/0, geo 0, carriers 17/17, soldiers 10, enemy 2.


Script: 1800 turns, 0.1 ms average, worst 3 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 21/4/1710/19/31 | 26/5/1667/10/40 |
| 30 | 32/5/1974/18/47 | 47/7/3392/11/57 |
| 45 | 32/5/2211/31/34 | 51/10/4265/31/53 |
| 60 | 32/5/2211/38/27 | 51/10/4265/34/50 |
| first | 7 8 11 12 - - | 11 11 16 25 - - |

War and gold at the end: scheduled: took 1, lost 0, killed 16, fallen 15, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 1, killed 15, fallen 16, gold 0 in stock + 7 in vaults.

Soldiers every 5 min: 10 10 19 27 20 18 22 26 31 37 38 38 (original game NPC: 10 10 10 10 10 11 9 25 31 34 34 34).

First army orders (game min:sec): 0:00 armyReserve; 11:10 armyTarget sword=18; 11:10 armyTarget spear=8; 11:10 armyTarget bow=12; 14:20 march 8 soldiers -> 64,121; 16:32 armyReserve; 19:20 march 12 soldiers -> 65,125; 20:46 armyReserve; 24:30 armyReserve; 24:54 armyReserve; 33:42 attack 10 soldiers -> building 1; 34:42 march 9 soldiers -> 64,121.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 17 min, 2–60: settlers: No free settlers and every bed taken: build houses.
- 7 min, 4–17: stall: sawmill: waiting for logs 50% of the last 5 minutes.
- 34 min, 13–46: stall: weaponsmith: waiting for coal 81% of the last 5 minutes.
- 3 min, 13–15: stall: hunter: no game in range inside your border 67% of the last 5 minutes.
- 21 min, 15–37: stall: barracks: waiting for weapons from the weaponsmith 85% of the last 5 minutes.
- 31 min, 22–57: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 1 min, 23: stall: smelter: waiting for coal 52% of the last 5 minutes.
- 7 min, 23–29: army: Lost 6 soldiers in the last 5 minutes.
- 20 min, 33–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 16 min, 38–53: stall: coal mine: deposit worn out 94% of the last 5 minutes.
- 14 min, 47–60: carriers: weaponsmith: waiting for coal 97% of the last 10 minutes while 3 lie in stock: too few carriers. Build more houses.
- 7 min, 54–60: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 1 min, 54: stall: hunter: meat pile full, waiting for carriers 97% of the last 5 minutes.
- 6 min, 55–60: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 3 min, 58–60: weapons: 3 weapons lie unused: the barracks needs free settlers (build houses).
- 3 min, 58–60: stall: quarry: stone pile full, waiting for carriers 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 0 | 8 | 11 | 18 | 0 | 13 | 0 | 0 | 0 | 5 | 8 | 19 | 0 | 0 | 1 | 0 | 0 | 6 | 40 | 1710 | 7788 |
| 30 | 9 | 8 | 16 | 18 | 11 | 16 | 12 | 15 | 13 | 3 | 22 | 18 | 0 | 0 | 1 | 0 | 0 | 13 | 104 | 1974 | 10958 |
| 45 | 22 | 17 | 34 | 24 | 12 | 16 | 14 | 15 | 14 | 4 | 21 | 18 | 0 | 0 | 0 | 1 | 0 | 5 | 108 | 2211 | 11197 |
| 60 | 22 | 17 | 34 | 24 | 8 | 15 | 13 | 10 | 8 | 3 | 19 | 19 | 0 | 0 | 0 | 2 | 1 | 0 | 104 | 2211 | 11203 |

At the end: buildings (built+sites) house 6, guard 5, quarry 2, ironmine 2, hq 1, wood 1, saw 1, forest 1, fisher 1, hunter 1, coalmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, look 1, armorer 1, waterhut 1, farm 1, mill 1, bakery 1.
People: soldier 33, worker 19, digger 2, builder 2, carrier 2, explorer 1, geologist 1; beds 60. Soldiers: sword 18, bow 10, spear 5.

Goods produced in the game: coal 137, ironore 102, stone 101, log 86, fish 86, iron 83, plank 81, meat 81, grain 79, water 74, flour 69, bread 61, sword 29, armor 13, spear 8, bow 7, pick 3, hammer 2, saw 1, rod 1.
Goods consumed in the game: coal 134, stone 103, plank 97, ironore 83, log 81, fish 74, grain 69, meat 66, iron 64, water 61, flour 61, bread 53, sword 29, armor 10, bow 8, spear 7, pick 6, hammer 4, axe 1, saw 1, shovel 1, rod 1, scythe 1.
Goods captured in the game: log 13, stone 8, fish 6, spear 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (59 building-min): Log pile full, nothing needs it right now 33%, Felling a tree 32%, Log pile full, waiting for carriers 22%, Bringing a log to the pile 13%, Worker picking up an axe 0%
- quarry (103 building-min): Stone pile full, nothing needs it right now 51%, Stone pile full, waiting for carriers 24%, Cutting stone 17%, Bringing stone to the pile 8%, Worker picking up a pickaxe 0%
- saw (59 building-min): Output pile full, nothing needs it right now 38%, Output pile full, waiting for carriers 21%, Waiting for logs 19%, Sawing planks 18%, Stacking outside 4%
- forest (59 building-min): No free ground to plant in range inside your border 66%, Planting a sapling 34%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- guard (261 building-min): Idle 97%, Waiting for a swordsman: train one at the barracks 3%, Soldiers on the way 0%, Waiting for a soldier 0%
- fisher (58 building-min): Fish pile full, nothing needs it right now 62%, Fish pile full, waiting for carriers 25%, Fishing 9%, Bringing a fish to the pile 2%, Waiting for a free settler 2%
- house (290 building-min): Idle 100%
- hunter (56 building-min): Meat pile full, nothing needs it right now 45%, Meat pile full, waiting for carriers 24%, Hunting 15%, Bringing meat to the pile 9%, No game in range inside your border 6%
- coalmine (55 building-min): Deposit worn out: finding little coal 45%, Deposit thinning: mining coal 31%, Mining coal 13%, Bringing coal out 7%, Came back empty-handed 2%
- ironmine (100 building-min): Iron ore pile full, nothing needs it right now 32%, Iron ore pile full, waiting for carriers 24%, Deposit worn out: finding little iron ore 20%, Deposit thinning: mining iron ore 12%, Mining iron ore 7%
- smelter (53 building-min): Output pile full, nothing needs it right now 32%, Waiting for coal 21%, Output pile full, waiting for carriers 20%, Smelting iron 20%, Stacking outside 4%
- smith (53 building-min): All tool targets met 97%, Forging pickaxe 1%, Forging hammer 0%, Worker picking up a hammer 0%, Stacking outside 0%
- weaponsmith (50 building-min): Waiting for coal 86%, Forging sword 7%, Stacking outside 2%, Forging spear 2%, Forging bow 2%
- barracks (49 building-min): Waiting for weapons from the weaponsmith 64%, Weapons on the way 19%, Waiting for a free settler to train 15%, Training soldiers 2%
- look (44 building-min): Scout on watch 100%, Working 0%
- armorer (42 building-min): All armor targets met 94%, Making iron armor 4%, Worker picking up a hammer 2%, Stacking outside 1%, Fetching from the pile 0%
- waterhut (38 building-min): Water pile full, nothing needs it right now 53%, Water pile full, waiting for carriers 29%, Fetching water 9%, Bringing water to the pile 8%, Worker on the way 0%
- farm (37 building-min): Grain pile full, nothing needs it right now 40%, Grain pile full, waiting for carriers 33%, Sowing a field 13%, Harvesting grain 10%, Bringing grain to the pile 5%
- mill (36 building-min): Output pile full, nothing needs it right now 49%, Output pile full, waiting for carriers 30%, Grinding flour 10%, Stacking outside 5%, Waiting for grain 4%
- bakery (35 building-min): Baking bread 39%, Output pile full, nothing needs it right now 31%, Waiting for flour 11%, Output pile full, waiting for carriers 11%, Stacking outside 4%

Building sites, time per state (site-min): Leveling the ground 8, Builders at work 8, Waiting for a digger 6, Waiting for a builder 5, Waiting for materials 3.

Build order (placed at min:sec, finished at): wood 0:02→0:31, quarry 0:06→0:48, saw 0:32→1:11, forest 0:38→1:26, guard 1:12→1:45, fisher 1:16→2:16, house 1:26→3:25, hunter 1:46→4:07, guard 2:18→3:45, house 3:34→4:32, guard 3:56→4:47, coalmine 4:24→5:04, ironmine 5:02→5:36, smelter 5:40→6:39, smith 6:40→7:26, house 7:28→8:09, weaponsmith 8:58→10:04, barracks 10:14→11:09, guard 12:24→13:11, ironmine 13:16→14:10, guard 13:24→15:08, look 15:00→15:33, house 15:04→15:54, quarry 15:46→16:21, armorer 16:44→17:46, house 17:48→18:29, house 18:40→19:41, waterhut 20:10→21:38, farm 21:46→23:10, mill 23:10→24:02, bakery 24:02→24:56.

Orders given: sendUnit 37, place 31, march 8, armyReserve 6, priority 5, armyTarget 3, weaponKeep 3, profession 2, toolKeep 1, armyArmor 1, armorRepair 1, attack 1. None refused.

People changing jobs: new carrier 59, carrier -> soldier 43, carrier -> worker 18, new worker 1, carrier -> geologist 1, carrier -> explorer 1.

People's orders (4802 in all, 4775 done): worker mine coalmine 239, worker rest farm 162, worker gather farm 161, worker mine ironmine 160, worker rest forest 142, worker gather forest 141, worker rest coalmine 138, worker eat coalmine 127, worker rest ironmine 104, worker rest quarry 103, worker gather quarry 101, soldier march 89, worker rest wood 87, worker rest fisher 87. None failed.

Fights and contact: attacked enemy buildings 1 times (first 33:42); took hq 34:04; killed sword 7, bow 4, spear 5; lost people sword 13, spear 2; first saw player 1 at 15:00.

Your notes (15 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 v247 frontier: posts 5, staffed 1, mines 1/2, geo 1, carriers 3/0, soldiers 37, enemy 6.
- ×8 14:20–59:42 Expedition: 12 fighters toward 64,121 to reveal and engage the enemy.
- 33:42 Siege: 10 fighters plus 0 banners against hq; estimated power 79 vs 21.


Script: 1851 turns, 0.3 ms average, worst 4 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 23/3/1506/10/42 | 30/6/3025/10/50 |
| 30 | 26/3/1518/10/50 | 60/9/6373/17/103 |
| 45 | 26/3/1518/10/50 | 66/13/9320/29/91 |
| 60 | 26/3/1518/10/50 | 73/20/12690/40/100 |
| first | 7 10 20 - - - | 9 10 20 21 24 28 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 8 in stock + 12 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 17 in vaults.

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 16 17 21 24 29 33 37 40).

First army orders (game min:sec): 0:00 armyReserve.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 3 min, 2–7: settlers: No free settlers and every bed taken: build houses.
- 1 min, 4: stall: sawmill: waiting for logs 65% of the last 4 minutes.
- 18 min, 14–31: stall: iron mine: deposit worn out 68% of the last 5 minutes.
- 1 min, 14: stall: mill: waiting for grain 53% of the last 5 minutes.
- 5 min, 15–19: stall: gold mine: needs fish or bread 52% of the last 5 minutes.
- 13 min, 17–29: stall: goldsmelter: waiting for gold ore 84% of the last 5 minutes.
- 14 min, 20–42: stall: gold mine: deposit worn out 62% of the last 5 minutes.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 38 min, 23–60: weapons: 4 weapons lie unused: build a barracks to train soldiers.
- 38 min, 23–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 36 min, 25–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 13 min, 30–42: stall: coal mine: deposit worn out 51% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 1 | 3 | 3 | 0 | 4 | 10 | 14 | 3 | 14 | 19 | 5 | 14 | 0 | 0 | 0 | 0 | 1 | 17 | 37 | 1506 | 5947 |
| 30 | 12 | 8 | 8 | 0 | 5 | 16 | 13 | 15 | 13 | 8 | 11 | 20 | 0 | 18 | 1 | 2 | 1 | 21 | 81 | 1518 | 8448 |
| 45 | 12 | 8 | 8 | 0 | 13 | 16 | 14 | 16 | 14 | 19 | 11 | 20 | 8 | 20 | 1 | 2 | 1 | 27 | 110 | 1518 | 8448 |
| 60 | 12 | 8 | 8 | 0 | 13 | 16 | 14 | 16 | 14 | 19 | 11 | 20 | 8 | 20 | 1 | 2 | 1 | 27 | 110 | 1518 | 8448 |

At the end: buildings (built+sites) house 4, guard 3, hq 1, wood 1, quarry 1, saw 1, forest 1, hunter 1, ironmine 1, coalmine 1, smelter 1, waterhut 1, smith 1, farm 1, mill 1, goldmine 1, bakery 1, goldsmelter 1, look 1, vault 1, weaponsmith 1.
People: carrier 27, worker 17, soldier 8, digger 2, builder 2, explorer 1, geologist 1; beds 40. Soldiers: sword 5, bow 3.

Goods produced in the game: grain 148, water 132, flour 132, bread 118, meat 80, stone 76, coal 75, log 74, plank 66, ironore 39, iron 28, goldore 28, gold 20, pick 2, hammer 2, spear 2, saw 1, sword 1.
Goods consumed in the game: grain 132, water 118, flour 118, bread 105, stone 86, plank 82, log 66, meat 64, coal 56, ironore 28, goldore 20, iron 8, fish 6, pick 5, hammer 4, axe 1, saw 1, shovel 1, bow 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (59 building-min): Log pile full, nothing needs it right now 66%, Felling a tree 25%, Bringing a log to the pile 7%, Log pile full, waiting for carriers 1%, Worker picking up an axe 0%
- quarry (59 building-min): Stone pile full, nothing needs it right now 69%, Cutting stone 21%, Bringing stone to the pile 10%, Worker picking up a pickaxe 0%, Stone pile full, waiting for carriers 0%
- saw (59 building-min): Output pile full, nothing needs it right now 72%, Sawing planks 14%, Waiting for logs 10%, Stacking outside 3%, Fetching from the pile 0%
- forest (59 building-min): No free ground to plant in range inside your border 70%, Planting a sapling 30%, Worker picking up a shovel 0%, Idle 0%
- guard (169 building-min): Idle 67%, Waiting for a swordsman: train one at the barracks 32%, Soldiers on the way 0%, Waiting for a soldier 0%
- house (209 building-min): Idle 100%
- hunter (56 building-min): Meat pile full, nothing needs it right now 71%, Hunting 16%, Bringing meat to the pile 12%, Worker picking up a bow 0%, Meat pile full, waiting for carriers 0%
- ironmine (54 building-min): Iron ore pile full, nothing needs it right now 56%, Deposit worn out: finding little iron ore 33%, Deposit thinning: mining iron ore 5%, Mining iron ore 3%, Bringing iron ore out 2%
- coalmine (54 building-min): Coal pile full, nothing needs it right now 38%, Deposit worn out: finding little coal 26%, Deposit thinning: mining coal 21%, Mining coal 7%, Bringing coal out 3%
- smelter (53 building-min): Output pile full, nothing needs it right now 88%, Smelting iron 7%, Waiting for coal 2%, Stacking outside 1%, Waiting for iron ore 1%
- waterhut (52 building-min): Water pile full, nothing needs it right now 71%, Fetching water 15%, Bringing water to the pile 14%, Water pile full, waiting for carriers 0%, Worker on the way 0%
- smith (51 building-min): All tool targets met 98%, Forging hammer 1%, Worker picking up a hammer 0%, Forging pickaxe 0%, Forging saw 0%
- farm (49 building-min): Grain pile full, nothing needs it right now 59%, Sowing a field 19%, Harvesting grain 14%, Bringing grain to the pile 7%, Worker picking up a scythe 1%
- mill (48 building-min): Output pile full, nothing needs it right now 74%, Grinding flour 15%, Stacking outside 7%, Waiting for grain 3%, Fetching from the pile 1%
- goldmine (48 building-min): Gold ore pile full, nothing needs it right now 38%, Deposit worn out: finding little gold ore 32%, Needs fish or bread: mining stopped 26%, Bringing gold ore out 1%, Came back empty-handed 1%
- bakery (47 building-min): Baking bread 57%, Output pile full, nothing needs it right now 35%, Stacking outside 7%, Waiting for water 1%, Fetching from the pile 1%
- goldsmelter (46 building-min): Output pile full, nothing needs it right now 55%, Waiting for gold ore 31%, Waiting for coal and gold ore 6%, Smelting gold 6%, Stacking outside 1%
- look (44 building-min): Scout on watch 100%, Scout on the way 0%, Working 0%
- vault (43 building-min): Idle 100%
- weaponsmith (41 building-min): All weapon targets met 98%, Forging spear 1%, Worker picking up a hammer 1%, Forging sword 0%, Stacking outside 0%

Building sites, time per state (site-min): Builders at work 7, Leveling the ground 6, Waiting for materials 5, Waiting for a digger 4, Waiting for a builder 3.

Build order (placed at min:sec, finished at): wood 0:02→0:31, quarry 0:06→0:53, saw 0:32→1:14, forest 0:38→1:28, guard 1:16→1:59, house 1:20→3:31, hunter 1:38→4:02, guard 2:16→3:45, house 3:40→4:29, guard 3:58→5:11, ironmine 4:46→5:44, coalmine 5:10→5:59, smelter 6:00→6:53, waterhut 6:46→7:42, house 7:14→8:15, smith 8:20→9:14, farm 9:46→10:49, mill 10:50→11:42, goldmine 11:22→12:06, bakery 11:56→12:46, goldsmelter 13:20→14:09, house 14:14→14:56, look 15:08→15:44, vault 16:14→17:08, weaponsmith 18:12→19:15.

Orders given: sendUnit 36, place 25, priority 3, profession 2, armyReserve 1, toolKeep 1, vaultKeep 1. None refused.

People changing jobs: new carrier 40, carrier -> worker 17, carrier -> explorer 1, carrier -> geologist 1.

People's orders (4523 in all, 4503 done): worker rest farm 305, worker gather farm 304, carrier haul grain farm -> mill 140, worker rest waterhut 133, worker rest mill 133, worker gather waterhut 132, worker toCraft mill 132, worker craft mill 132, worker rest forest 131, worker gather forest 130, worker mine coalmine 128, carrier haul flour mill -> bakery 124, carrier haul water waterhut -> bakery 124, worker rest bakery 119. None failed.

Fights and contact: first saw player 2 at 13:00.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 v247 frontier: posts 3, staffed 0, mines 1/1, geo 1, carriers 27/27, soldiers 10, enemy 0.


Script: 1800 turns, 0.5 ms average, worst 3 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 23/5/2176/16/34 | 31/6/2911/10/50 |
| 30 | 37/8/3575/21/42 | 50/4/3114/5/77 |
| 45 | 37/7/3381/20/45 | 63/7/5674/17/89 |
| 60 | 37/7/3381/23/33 | 67/10/7906/32/91 |
| first | 7 8 11 12 21 - | 9 10 24 24 43 45 |

War and gold at the end: scheduled: took 2, lost 0, killed 17, fallen 24, gold 9 in stock + 12 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 2, killed 24, fallen 17, gold 0 in stock + 0 in vaults.

Soldiers every 5 min: 10 10 16 27 22 21 17 20 20 25 23 23 (original game NPC: 10 10 10 6 3 5 6 9 17 23 24 32).

First army orders (game min:sec): 0:00 armyReserve; 11:56 armyTarget sword=22; 11:56 armyTarget spear=10; 11:56 armyTarget bow=14; 16:28 march 8 soldiers -> 54,149; 16:40 armyTarget sword=18; 16:40 armyTarget spear=8; 16:40 armyTarget bow=12; 16:50 armyTarget sword=22; 16:50 armyTarget spear=10; 16:50 armyTarget bow=14; 17:40 attack 6 soldiers -> building 144.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 3 min, 2–16: settlers: No free settlers and every bed taken: build houses.
- 40 min, 10–59: stall: smith: waiting for coal 100% of the last 5 minutes.
- 30 min, 13–59: stall: weaponsmith: waiting for coal 94% of the last 5 minutes.
- 22 min, 14–52: stall: barracks: waiting for weapons from the weaponsmith 95% of the last 5 minutes.
- 2 min, 16–60: carriers: smith: waiting for coal 100% of the last 10 minutes while 3 lie in stock: too few carriers. Build more houses.
- 2 min, 16–60: carriers: weaponsmith: waiting for coal 88% of the last 10 minutes while 3 lie in stock: too few carriers. Build more houses.
- 13 min, 17–45: stall: gold mine: deposit worn out 90% of the last 5 minutes.
- 25 min, 19–43: orders: The order "priority" was sent 30 times this minute: send it only when something changes.
- 2 min, 23–24: stall: goldsmelter: waiting for coal 92% of the last 5 minutes.
- 7 min, 24–59: army: Lost 7 soldiers in the last 5 minutes.
- 6 min, 25–30: stall: coal mine: needs bread or fish or meat 100% of the last 5 minutes.
- 5 min, 26–30: stall: smelter: waiting for coal 100% of the last 5 minutes.
- 28 min, 33–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 17 min, 44–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 7 min, 53–60: stall: coal mine: deposit worn out 94% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 1 | 2 | 7 | 18 | 0 | 12 | 0 | 0 | 0 | 5 | 14 | 20 | 2 | 0 | 0 | 0 | 0 | 8 | 45 | 2176 | 6572 |
| 30 | 1 | 9 | 23 | 12 | 9 | 16 | 16 | 0 | 18 | 0 | 22 | 12 | 11 | 0 | 0 | 0 | 0 | 7 | 67 | 3575 | 13981 |
| 45 | 16 | 14 | 22 | 12 | 23 | 15 | 18 | 13 | 17 | 4 | 20 | 21 | 9 | 21 | 0 | 0 | 0 | 11 | 120 | 3381 | 14344 |
| 60 | 16 | 9 | 16 | 12 | 15 | 15 | 13 | 15 | 12 | 3 | 20 | 22 | 9 | 21 | 0 | 0 | 0 | 0 | 127 | 3381 | 14722 |

At the end: buildings (built+sites) house 6, guard 5, quarry 2, ironmine 2, coalmine 2, tower 2, hq 1, wood 1, saw 1, forest 1, fisher 1, hunter 1, smelter 1, smith 1, weaponsmith 1, barracks 1, goldmine 1, goldsmelter 1, armorer 1, waterhut 1, vault 1, farm 1, mill 1, bakery 1.
People: worker 21, soldier 14, carrier 6, digger 2, builder 2, geologist 1, explorer 1; beds 60. Soldiers: sword 10, banner 3, bow 1.

Goods produced in the game: coal 153, fish 143, grain 135, log 121, water 121, flour 120, stone 119, plank 109, bread 107, ironore 102, iron 82, meat 76, goldore 33, sword 30, gold 24, armor 16, pick 5, hammer 3, banner 3, bow 2, saw 1, rod 1, spear 1.
Goods consumed in the game: coal 150, fish 137, plank 124, stone 121, grain 120, log 109, water 108, flour 108, bread 92, ironore 82, meat 61, iron 60, sword 30, goldore 24, pick 8, hammer 5, armor 5, bow 4, gold 3, banner 3, axe 1, saw 1, shovel 1, rod 1, spear 1, scythe 1.
Goods lost in the game: bread 9, stone 6, plank 5, water 5, flour 5.
Goods captured in the game: bread 9, stone 6, plank 5, water 5, flour 5.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (59 building-min): Felling a tree 44%, Log pile full, nothing needs it right now 35%, Bringing a log to the pile 18%, Log pile full, waiting for carriers 3%, Worker picking up an axe 0%
- quarry (104 building-min): Stone pile full, nothing needs it right now 72%, Cutting stone 17%, Bringing stone to the pile 7%, Stone pile full, waiting for carriers 4%, Worker picking up a pickaxe 0%
- saw (59 building-min): Output pile full, nothing needs it right now 43%, Waiting for logs 24%, Sawing planks 23%, Stacking outside 5%, Output pile full, waiting for carriers 3%
- forest (59 building-min): Planting a sapling 51%, No free ground to plant in range inside your border 48%, Worker picking up a shovel 0%, Idle 0%
- guard (295 building-min): Idle 97%, Waiting for a swordsman: train one at the barracks 3%, Soldiers on the way 0%
- fisher (58 building-min): Fish pile full, nothing needs it right now 75%, Fishing 16%, Fish pile full, waiting for carriers 5%, Bringing a fish to the pile 3%, Waiting for a free settler 1%
- house (278 building-min): Idle 100%
- hunter (57 building-min): Meat pile full, nothing needs it right now 66%, Hunting 16%, Bringing meat to the pile 12%, Meat pile full, waiting for carriers 6%, Worker picking up a bow 0%
- ironmine (97 building-min): Iron ore pile full, nothing needs it right now 56%, Deposit worn out: finding little iron ore 18%, Deposit thinning: mining iron ore 13%, Mining iron ore 5%, Bringing iron ore out 3%
- coalmine (106 building-min): Deposit worn out: finding little coal 46%, Needs bread or fish or meat: mining stopped 21%, Deposit thinning: mining coal 18%, Mining coal 9%, Bringing coal out 4%
- smelter (53 building-min): Waiting for coal 40%, Output pile full, nothing needs it right now 32%, Smelting iron 19%, Stacking outside 4%, Output pile full, waiting for carriers 3%
- smith (53 building-min): Waiting for coal 87%, All tool targets met 9%, Forging pickaxe 1%, Worker picking up a hammer 1%, Forging hammer 1%
- weaponsmith (50 building-min): Waiting for coal 88%, Forging sword 8%, Stacking outside 2%, Forging banner 1%, Forging bow 1%
- barracks (48 building-min): Waiting for weapons from the weaponsmith 85%, Weapons on the way 14%, Training soldiers 1%
- goldmine (46 building-min): Deposit worn out: finding little gold ore 60%, Gold ore pile full, nothing needs it right now 30%, Gold ore pile full, waiting for carriers 4%, Bringing gold ore out 2%, Came back empty-handed 2%
- tower (75 building-min): Idle 76%, Waiting for a swordsman: train one at the barracks 20%, Free soldiers are too far away: bring one onto your land or near this building 4%, Soldiers on the way 0%, Waiting for a soldier 0%
- goldsmelter (39 building-min): Output pile full, nothing needs it right now 45%, Waiting for coal 38%, Smelting gold 8%, Output pile full, waiting for carriers 4%, Waiting for gold ore 3%
- armorer (38 building-min): All armor targets met 59%, Waiting for iron 23%, Output pile full, nothing needs it right now 9%, Making iron armor 5%, Output pile full, waiting for carriers 2%
- waterhut (37 building-min): Water pile full, nothing needs it right now 55%, Bringing water to the pile 23%, Fetching water 20%, Water pile full, waiting for carriers 3%, Idle 0%
- vault (34 building-min): Idle 100%
- farm (33 building-min): Grain pile full, nothing needs it right now 39%, Sowing a field 27%, Harvesting grain 20%, Bringing grain to the pile 10%, Grain pile full, waiting for carriers 4%
- mill (32 building-min): Output pile full, nothing needs it right now 62%, Grinding flour 21%, Stacking outside 10%, Output pile full, waiting for carriers 4%, Waiting for grain 2%
- bakery (31 building-min): Baking bread 80%, Stacking outside 10%, Output pile full, nothing needs it right now 8%, Fetching from the pile 1%, Waiting for flour and water 1%

Building sites, time per state (site-min): Builders at work 10, Leveling the ground 9, Waiting for materials 9, Waiting for a digger 7, Waiting for a builder 5.

Build order (placed at min:sec, finished at): wood 0:02→0:32, quarry 0:06→0:50, saw 0:34→1:10, forest 0:38→1:25, guard 1:10→1:45, fisher 1:14→2:26, house 1:26→2:44, hunter 1:46→3:02, guard 2:26→3:41, house 2:54→4:01, ironmine 3:30→4:19, guard 3:54→4:45, coalmine 5:18→5:58, smelter 5:58→6:41, smith 6:42→7:23, coalmine 7:36→8:19, weaponsmith 9:02→10:05, house 10:06→10:38, barracks 11:10→11:54, goldmine 12:54→13:41, guard 13:22→14:00, guard 14:22→14:56, quarry 15:06→15:34, house 15:36→16:28, house 16:46→17:24, ironmine 17:26→18:22, tower 18:32→20:06, goldsmelter 19:04→20:59, armorer 20:04→21:53, waterhut 20:54→22:41, vault 21:36→25:42, tower 23:06→24:44, farm 24:54→26:55, mill 26:56→28:02, bakery 28:02→29:28, house 29:30→30:19.

Demolished or burned: guard (burned) 28:41, guard (burned) 43:58.

Orders given: priority 1039, sendUnit 63, place 36, armyTarget 16, armyReserve 7, weaponKeep 3, attack 3, profession 2, march 2, toolKeep 1, armyArmor 1, armorRepair 1, vaultKeep 1, fighters 1. None refused.

People changing jobs: new carrier 60, carrier -> soldier 37, carrier -> worker 21, new soldier 3, carrier -> geologist 1, carrier -> explorer 1.

People's orders (6602 in all, 6562 done): worker mine coalmine 307, worker rest farm 276, worker gather farm 276, worker rest forest 199, worker gather forest 198, worker eat coalmine 181, worker rest coalmine 161, worker mine ironmine 156, worker rest fisher 144, worker gather fisher 143, carrier haul grain farm -> mill 128, worker rest wood 122, worker rest waterhut 122, worker gather wood 121. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×10.

Fights and contact: attacked enemy buildings 3 times (first 17:40); was attacked 1 times (first 43:52); took guard 17:49, guard 20:26; killed bow 12, sword 5; lost people sword 18, bow 5, spear 1; first saw player 1 at 14:00.

Your notes (11 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 v247 frontier: posts 7, staffed 1, mines 2/2, geo 1, carriers 13/8, soldiers 25, enemy 24.
- 16:28 Expedition: 8 fighters toward 54,149 to reveal and engage the enemy.
- ×3 17:40–53:32 Siege: 10 fighters plus 2 banners against guard; estimated power 100 vs 39.
- 54:30 Siege aborted after 4 field losses; retreating to HQ.


Script: 1905 turns, 0.2 ms average, worst 3 ms, 0 over 0.3 s, 0 errors. Orders refused: none.
