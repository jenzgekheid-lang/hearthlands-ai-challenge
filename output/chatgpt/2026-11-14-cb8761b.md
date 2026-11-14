# Tournament: chatgpt

Game version 210. Written for: chatgpt 208.

- chatgpt: hearthlands-ai-challenge, commit cb8761b

Maps 20261030, 777, 4242, 31, each twice (sides swapped), up to 60 game minutes (1x). 49 s.

Each game ends with the script's own game log: what it may know (its own side, and what happened to it or what it saw). Times are game min:sec.

| Opponent | Won | Lost | Undecided |
|---|---|---|---|
| original game NPC | 0 | 0 | 8 |

## Games

Each row: buildings / military / land tiles / soldiers / people at the minute shown. First: game minute of the first smelter, smith, weaponsmith, barracks, tower, castle (- = never).

### Map 31: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 17/3/2232/14/36 | 21/6/2898/10/40 |
| 30 | 26/4/3135/26/49 | 10/4/2146/3/40 |
| 45 | 28/6/5126/42/31 | 6/3/1418/2/40 |
| 60 | 29/6/5494/54/39 | 6/3/1418/2/40 |
| first | 11 13 14 15 37 - | 9 9 - - - - |

Soldiers every 5 min: 10 10 14 18 23 26 31 36 42 47 51 54 (original game NPC: 10 10 10 5 4 3 2 2 2 2 2 2).

First army orders (game min:sec): 3:02 sendIn 1 soldiers -> building 95; 13:50 armyReserve; 14:10 armyTarget sword=5; 14:10 armyTarget spear=3; 15:00 march 5 soldiers -> 200,120; 15:10 armyTarget sword=6; 15:10 armyTarget bow=3; 15:30 armyTarget sword=7; 15:30 armyTarget spear=4; 16:10 armyTarget sword=6; 16:10 armyTarget spear=3; 16:30 armyTarget sword=7.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 3 min, 6–8: army: Lost 4 soldiers in the last 5 minutes, and no barracks to train new ones.
- 8 min, 11–47: settlers: No free settlers and every bed taken: build houses.
- 16 min, 14–30: stall: fisher: no fish in range inside your border 82% of the last 5 minutes.
- 3 min, 16–18: stall: smelter: waiting for coal 91% of the last 5 minutes.
- 12 min, 16–57: stall: weaponsmith: waiting for coal 87% of the last 5 minutes.
- 25 min, 17–58: stall: barracks: waiting for weapons from the weaponsmith 80% of the last 5 minutes.
- 6 min, 18–23: stall: iron mine: needs meat or fish 75% of the last 5 minutes.
- 8 min, 23–30: stall: butcher: waiting for pigs 83% of the last 5 minutes.
- 35 min, 26–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 25 min, 36–60: stall: iron mine: deposit worn out 95% of the last 5 minutes.
- 5 min, 37–41: stall: smelter: waiting for iron ore 87% of the last 5 minutes.
- 2 min, 59–60: stall: coal mine: deposit worn out 92% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 13 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 4 | 6 | 0 | 0 | 0 | 0 | 0 | 18 | 23 | 2232 | 4154 |
| 30 | 16 | 32 | 36 | 10 | 12 | 5 | 19 | 10 | 14 | 18 | 8 | 28 | 0 | 0 | 0 | 0 | 0 | 18 | 66 | 3135 | 10990 |
| 45 | 16 | 39 | 54 | 13 | 11 | 12 | 20 | 21 | 13 | 18 | 7 | 34 | 0 | 0 | 0 | 0 | 0 | 1 | 89 | 5126 | 16633 |
| 60 | 16 | 45 | 56 | 13 | 11 | 12 | 19 | 19 | 14 | 18 | 11 | 34 | 5 | 0 | 0 | 0 | 0 | 9 | 87 | 5494 | 17021 |

At the end: buildings (built+sites) guard 5, house2 3, house 2, hq 1, quarry 1, wood 1, saw 1, forest 1, fisher 1, coalmine 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, mill 1, bakery 1, pigfarm 1, butcher 1, tower 1.
People: soldier 45, worker 16, carrier 15, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 80. Soldiers: sword 21, bow 13, spear 11.

Goods produced in the game: grain 189, water 175, coal 144, log 93, stone 93, flour 87, pig 82, plank 81, ironore 81, iron 76, bread 72, meat 69, fish 52, sword 24, bow 14, spear 13, saw 1, shovel 1, rod 1, hammer 1, axe 1.
Goods consumed in the game: grain 170, water 156, coal 132, stone 103, plank 97, log 81, ironore 76, flour 73, pig 69, bread 61, meat 57, iron 56, fish 45, sword 24, bow 14, spear 13, pick 4, hammer 3, axe 2, shovel 2, saw 1, rod 1, scythe 1.
Goods lost in the game: stone 17, plank 13.
Goods captured in the game: stone 32, plank 22, iron 14, coal 6, ironore 6, goldore 5, scythe 2, hammer 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (104 building-min): Idle 100%
- quarry (58 building-min): Stone pile full, nothing needs it right now 58%, Cutting stone 26%, Bringing stone to the pile 12%, Stone pile full, waiting for carriers 4%, Worker picking up a pickaxe 0%
- wood (58 building-min): Log pile full, nothing needs it right now 48%, Felling a tree 32%, Bringing a log to the pile 11%, Log pile full, waiting for carriers 9%, Worker picking up an axe 0%
- saw (57 building-min): Output pile full, nothing needs it right now 67%, Sawing planks 18%, Output pile full, waiting for carriers 10%, Stacking outside 4%, Fetching from the pile 0%
- guard (226 building-min): Idle 99%, Free soldiers are too far away: bring one onto your land or near this building 1%, Waiting for a swordsman: train one at the barracks 0%, Soldiers on the way 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 65%, Planting a sapling 34%, Worker picking up a shovel 0%, Working 0%
- fisher (57 building-min): Fish pile full, nothing needs it right now 53%, No fish in range inside your border 31%, Fishing 6%, Fish pile full, waiting for carriers 5%, Bringing a fish to the pile 4%
- coalmine (52 building-min): Deposit thinning: mining coal 48%, Mining coal 23%, Deposit worn out: finding little coal 11%, Bringing coal out 7%, Needs bread or fish: mining stopped 5%
- ironmine (50 building-min): Deposit worn out: finding little iron ore 53%, Needs meat or fish: mining stopped 16%, Deposit thinning: mining iron ore 16%, Mining iron ore 7%, Bringing iron ore out 4%
- smelter (49 building-min): Output pile full, nothing needs it right now 31%, Waiting for iron ore 27%, Smelting iron 20%, Waiting for coal 11%, Output pile full, waiting for carriers 5%
- house (87 building-min): Idle 100%
- smith (48 building-min): All tool targets met 97%, Worker picking up a hammer 1%, Forging saw 0%, Stacking outside 0%, Forging shovel 0%
- weaponsmith (46 building-min): Waiting for coal 59%, All weapon targets met 12%, Waiting for iron 11%, Forging sword 7%, Forging bow 4%
- barracks (46 building-min): Waiting for weapons from the weaponsmith 75%, Soldier targets met 12%, Weapons on the way 12%, Training soldiers 1%
- farm (44 building-min): Sowing a field 39%, Harvesting grain 26%, Bringing grain to the pile 16%, Grain pile full, nothing needs it right now 12%, Grain pile full, waiting for carriers 6%
- waterhut (43 building-min): Water pile full, nothing needs it right now 38%, Bringing water to the pile 27%, Fetching water 22%, Water pile full, waiting for carriers 14%, Worker on the way 0%
- mill (42 building-min): Output pile full, nothing needs it right now 62%, Output pile full, waiting for carriers 17%, Grinding flour 11%, Stacking outside 6%, Waiting for grain 3%
- bakery (42 building-min): Output pile full, nothing needs it right now 43%, Baking bread 40%, Output pile full, waiting for carriers 7%, Stacking outside 5%, Waiting for flour 5%
- pigfarm (40 building-min): Raising a pig 47%, Output pile full, nothing needs it right now 27%, Waiting for grain 12%, Stacking outside 6%, Output pile full, waiting for carriers 5%
- butcher (39 building-min): Output pile full, nothing needs it right now 52%, Waiting for pigs 23%, Butchering 13%, Output pile full, waiting for carriers 7%, Stacking outside 5%
- tower (23 building-min): Idle 98%, Soldiers on the way 2%

Building sites, time per state (site-min): Builders at work 8, Leveling the ground 8, Waiting for a digger 6, Waiting for a builder 5, Waiting for materials 0.

Build order (placed at min:sec, finished at): house2 0:00→1:36, quarry 0:00→2:05, wood 0:02→1:49, saw 1:50→2:32, guard 1:52→3:00, forest 2:28→3:14, fisher 2:50→3:28, guard 3:24→4:01, guard 4:02→4:46, coalmine 7:02→7:52, ironmine 9:22→9:52, smelter 9:54→10:44, house 10:46→11:14, smith 11:12→12:12, weaponsmith 12:38→13:48, barracks 13:48→14:23, farm 15:00→16:10, waterhut 15:52→17:10, mill 16:32→17:39, bakery 17:40→18:24, pigfarm 19:04→19:56, butcher 20:00→20:58, house 21:00→22:01, house2 26:00→27:10, tower 35:00→36:40, house2 46:00→47:43.

Demolished or burned: guard (burned) 24:40.

Orders given: sendUnit 136, armyTarget 74, release 42, place 26, march 14, priority 5, profession 4, attack 4, sendIn 3, weaponKeep 3, armyReserve 1. None refused.

People changing jobs: new carrier 80, carrier -> soldier 51, carrier -> worker 16, new soldier 3, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1.

People's orders (5991 in all, 5951 done): worker rest farm 388, worker gather farm 387, worker mine coalmine 212, worker rest waterhut 176, worker gather waterhut 175, worker rest coalmine 149, worker mine ironmine 141, worker rest forest 137, worker gather forest 136, explorer explore 115, carrier haul grain farm -> mill 95, worker rest wood 94, worker rest quarry 94, worker gather wood 93. None failed.

Fights and contact: attacked enemy buildings 4 times (first 23:24); took hq 23:25, guard 24:39, guard 29:49, guard 32:15; killed bow 3, sword 5; lost people bow 4, spear 2, sword 1; first saw player 2 at 16:00.

Your notes (9 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 6 field soldiers, 3 posts, carriers 15 (3 idle), coal/iron 1/1, sites 1, tips none.
- ×4 20:00–50:00 Adaptive plan: 38 field soldiers, 6 posts, carriers 22 (20 idle), coal/iron 1/1, sites 0, tips stall.
- 23:24 Attack: 16 field troops against hq 37; threshold 16.
- ×2 29:34–31:58 Attack: 9 field troops against guard 134; threshold 9.


Script: 1831 turns, 1.4 ms average, worst 15 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 31: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 15/1/1596/20/30 | 39/6/3020/10/70 |
| 30 | 25/4/2268/15/31 | 59/7/4186/5/84 |
| 45 | 27/4/3305/10/48 | 71/14/10255/48/88 |
| 60 | 27/4/3699/15/38 | 81/21/14252/69/105 |
| first | 5 7 8 10 - - | 7 7 16 18 38 36 |

Soldiers every 5 min: 10 14 20 14 7 15 8 19 10 10 11 15 (original game NPC: 10 10 10 4 7 5 16 38 48 56 64 69).

First army orders (game min:sec): 2:30 sendIn 1 soldiers -> building 111; 8:18 armyTarget sword=5; 8:18 armyTarget spear=3; 8:18 armyReserve; 9:58 armyTarget sword=6; 9:58 armyTarget bow=3; 11:18 armyTarget spear=4; 11:58 armyTarget sword=7; 12:38 armyTarget bow=4; 13:18 armyTarget sword=8; 13:58 armyTarget spear=5; 14:38 armyTarget sword=9.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 10 min, 10–20: stall: smelter: waiting for coal 78% of the last 5 minutes.
- 2 min, 11–37: stall: weaponsmith: waiting for iron 90% of the last 5 minutes.
- 5 min, 14–20: settlers: No free settlers and every bed taken: build houses.
- 2 min, 18–19: stall: water hut: water pile full, waiting for carriers 66% of the last 5 minutes.
- 3 min, 19–22: stall: iron mine: needs meat or fish 76% of the last 5 minutes.
- 14 min, 19–45: army: Lost 11 soldiers in the last 5 minutes.
- 1 min, 20: stall: pig farm: waiting for grain and water 84% of the last 5 minutes.
- 18 min, 20–57: stall: weaponsmith: waiting for coal 81% of the last 5 minutes.
- 13 min, 21–51: stall: barracks: waiting for weapons from the weaponsmith 100% of the last 5 minutes.
- 2 min, 23–24: stall: butcher: waiting for pigs 72% of the last 5 minutes.
- 31 min, 25–60: stall: iron mine: deposit worn out 95% of the last 5 minutes.
- 34 min, 27–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 15 min, 27–43: stall: smelter: waiting for iron ore 71% of the last 5 minutes.
- 4 min, 28–41: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 4 min, 34–41: settlers: No free settlers: build houses.
- 2 min, 35–36: weapons: 4 weapons lie unused: the barracks needs free settlers (build houses).
- 1 min, 35: stall: woodcutter: log pile full, waiting for carriers 99% of the last 5 minutes.
- 1 min, 35: stall: quarry: stone pile full, waiting for carriers 94% of the last 5 minutes.
- 3 min, 58–60: stall: coal mine: deposit worn out 91% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 11 | 15 | 12 | 5 | 0 | 0 | 0 | 0 | 0 | 9 | 7 | 14 | 0 | 0 | 1 | 0 | 0 | 6 | 18 | 1596 | 2975 |
| 30 | 24 | 17 | 25 | 22 | 0 | 12 | 19 | 11 | 0 | 13 | 0 | 9 | 0 | 0 | 1 | 1 | 0 | 0 | 77 | 2268 | 9348 |
| 45 | 24 | 8 | 16 | 15 | 0 | 12 | 14 | 12 | 0 | 8 | 0 | 14 | 0 | 0 | 0 | 0 | 0 | 21 | 85 | 3305 | 11374 |
| 60 | 24 | 8 | 16 | 15 | 0 | 11 | 14 | 14 | 0 | 12 | 2 | 20 | 0 | 0 | 0 | 0 | 0 | 12 | 93 | 3699 | 13421 |

At the end: buildings (built+sites) house2 4, guard 4, quarry 2, wood 2, hq 1, saw 1, forest 1, fisher 1, coalmine 1, ironmine 1, smelter 1, house 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, pigfarm 1, butcher 1.
People: worker 16, carrier 14, soldier 10, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 90. Soldiers: sword 7, bow 2, spear 1.

Goods produced in the game: fish 243, coal 170, water 100, grain 100, stone 99, log 97, ironore 91, iron 89, pig 86, plank 77, meat 72, sword 36, spear 14, bow 12, axe 2, saw 1, shovel 1, rod 1, hammer 1, pick 1.
Goods consumed in the game: fish 234, coal 158, stone 101, plank 93, ironore 89, water 86, grain 86, log 77, pig 72, iron 69, meat 61, sword 36, spear 14, bow 12, pick 5, axe 3, hammer 3, shovel 2, saw 1, rod 1, scythe 1.
Goods lost in the game: plank 12, stone 12, fish 7, water 6.
Goods captured in the game: plank 12, stone 12, fish 7, water 6.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (140 building-min): Idle 100%
- quarry (103 building-min): Stone pile full, nothing needs it right now 59%, Stone pile full, waiting for carriers 18%, Cutting stone 15%, Bringing stone to the pile 7%, Worker picking up a pickaxe 0%
- wood (103 building-min): Log pile full, nothing needs it right now 51%, Log pile full, waiting for carriers 24%, Felling a tree 19%, Bringing a log to the pile 6%, Worker picking up an axe 0%
- saw (58 building-min): Output pile full, nothing needs it right now 55%, Sawing planks 17%, Output pile full, waiting for carriers 15%, Waiting for logs 9%, Stacking outside 3%
- guard (150 building-min): Idle 93%, Waiting for a swordsman: train one at the barracks 6%, Soldiers on the way 1%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 66%, Planting a sapling 34%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- fisher (57 building-min): Bringing a fish to the pile 33%, Fishing 28%, Fish pile full, nothing needs it right now 23%, Fish pile full, waiting for carriers 15%, No fish in range inside your border 1%
- coalmine (56 building-min): Deposit thinning: mining coal 42%, Mining coal 27%, Deposit worn out: finding little coal 12%, Bringing coal out 8%, Needs bread or fish: mining stopped 7%
- ironmine (56 building-min): Deposit worn out: finding little iron ore 64%, Deposit thinning: mining iron ore 12%, Needs meat or fish: mining stopped 9%, Mining iron ore 6%, Bringing iron ore out 4%
- smelter (55 building-min): Waiting for iron ore 39%, Smelting iron 20%, Output pile full, nothing needs it right now 18%, Waiting for coal 17%, Stacking outside 4%
- house (55 building-min): Idle 100%
- smith (54 building-min): All tool targets met 97%, Forging axe 0%, Worker picking up a hammer 0%, Stacking outside 0%, Forging saw 0%
- weaponsmith (52 building-min): Waiting for coal 54%, Waiting for iron 13%, All weapon targets met 11%, Forging sword 9%, Forging spear 3%
- barracks (51 building-min): Waiting for weapons from the weaponsmith 63%, Weapons on the way 23%, Soldier targets met 6%, Waiting for a free settler to train 6%, Training soldiers 2%
- farm (45 building-min): Grain pile full, nothing needs it right now 39%, Grain pile full, waiting for carriers 27%, Sowing a field 16%, Harvesting grain 11%, Bringing grain to the pile 6%
- waterhut (44 building-min): Water pile full, nothing needs it right now 53%, Water pile full, waiting for carriers 30%, Fetching water 9%, Bringing water to the pile 7%, Worker on the way 0%
- pigfarm (42 building-min): Raising a pig 46%, Output pile full, nothing needs it right now 23%, Output pile full, waiting for carriers 17%, Stacking outside 6%, Waiting for grain and water 5%
- butcher (41 building-min): Output pile full, nothing needs it right now 47%, Output pile full, waiting for carriers 19%, Waiting for pigs 14%, Butchering 13%, Stacking outside 5%

Building sites, time per state (site-min): Leveling the ground 9, Builders at work 8, Waiting for a digger 6, Waiting for a builder 4, Waiting for materials 2.

Build order (placed at min:sec, finished at): house2 0:00→1:00, quarry 0:02→1:14, wood 0:04→1:29, saw 1:30→2:08, guard 1:32→2:30, forest 1:48→2:48, fisher 2:08→3:09, coalmine 2:36→3:41, ironmine 3:08→3:57, smelter 3:58→4:48, house 4:48→5:21, smith 5:36→6:07, weaponsmith 7:06→7:50, barracks 8:16→9:23, farm 13:50→15:05, waterhut 14:24→15:40, wood 15:00→15:57, quarry 15:38→16:14, pigfarm 16:52→17:53, butcher 17:04→18:32, house2 17:42→20:07, guard 28:00→29:05, house2 34:00→36:06, guard 39:00→39:34, guard 39:34→40:31, house2 40:40→42:29.

Demolished or burned: guard (burned) 16:43, guard (burned) 19:22, guard (burned) 31:56.

Orders given: sendUnit 136, armyTarget 69, release 30, place 26, attack 8, priority 5, profession 4, march 4, weaponKeep 3, sendIn 2, armyReserve 1. Refused (order: reason, times): place: Too close to another building ×1.

People changing jobs: new carrier 90, carrier -> soldier 62, carrier -> worker 16, new soldier 7, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1.

People's orders (5843 in all, 5800 done): worker mine coalmine 319, worker rest fisher 244, worker gather fisher 243, worker rest farm 204, worker gather farm 203, worker eat coalmine 191, carrier haul fish fisher -> coalmine 191, worker mine ironmine 178, worker rest coalmine 174, worker rest forest 149, worker gather forest 148, soldier attack guard 124, explorer explore 115, worker eat ironmine 104. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×10; failed: killed ×3.

Fights and contact: attacked enemy buildings 8 times (first 15:46); was attacked 2 times (first 27:42); took guard 16:42, guard 16:48, guard 17:10, guard 28:21, guard 29:24; lost guard 28:02, guard 34:07; killed bow 7, sword 23, spear 6; lost people sword 31, bow 13, spear 13; first saw player 1 at 16:00.

Your notes (11 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Adaptive plan: 10 field soldiers, 0 posts, carriers 6 (6 idle), coal/iron 0/0, sites 0, tips none.
- ×3 10:00–50:00 Adaptive plan: 5 field soldiers, 4 posts, carriers 24 (20 idle), coal/iron 1/1, sites 0, tips stall.
- ×3 15:46–29:04 Attack: 11 field troops against guard 131; threshold 9.
- 20:00 Adaptive plan: 11 field soldiers, 2 posts, carriers 2 (0 idle), coal/iron 1/1, sites 1, tips stall/army/settlers.
- 39:12 Attack: 16 field troops against hq 1; threshold 16.
- 40:00 Adaptive plan: 16 field soldiers, 4 posts, carriers 10 (1 idle), coal/iron 1/1, sites 1, tips land/stall/settlers.
- 59:20 Attack: 8 field troops against tower 495; threshold 8.


Script: 1940 turns, 1.0 ms average, worst 23 ms, 0 over 0.3 s, 0 errors. Orders refused: place 1 of 27.

### Map 777: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 19/1/1604/17/33 | 32/6/2828/10/50 |
| 30 | 25/4/3458/22/33 | 17/1/1724/1/67 |
| 45 | 25/4/3789/24/31 | 17/1/1724/1/67 |
| 60 | 26/4/4180/27/48 | 17/1/1724/1/67 |
| first | 5 7 9 10 - - | 7 8 17 17 - - |

Soldiers every 5 min: 10 10 17 14 18 22 22 22 24 24 24 27 (original game NPC: 10 10 10 5 3 1 1 1 1 1 1 1).

First army orders (game min:sec): 2:18 sendIn 1 soldiers -> building 96; 8:52 armyTarget sword=5; 8:52 armyTarget spear=3; 8:52 armyReserve; 10:12 armyTarget bow=3; 10:32 armyTarget sword=6; 11:12 armyTarget spear=4; 11:52 armyTarget sword=7; 12:32 armyTarget bow=4; 15:00 march 5 soldiers -> 200,120; 16:00 attack 10 soldiers -> building 79; 16:32 armyTarget sword=5.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 7 min, 10–26: stall: fisher: no fish in range inside your border 54% of the last 5 minutes.
- 7 min, 11–17: stall: iron mine: needs meat or fish 95% of the last 5 minutes.
- 18 min, 12–31: stall: smelter: waiting for iron ore 80% of the last 5 minutes.
- 34 min, 15–60: stall: barracks: waiting for weapons from the weaponsmith 79% of the last 5 minutes.
- 10 min, 15–59: settlers: No free settlers and every bed taken: build houses.
- 3 min, 16–18: stall: weaponsmith: waiting for iron 93% of the last 5 minutes.
- 2 min, 17–18: army: Lost 5 soldiers in the last 5 minutes.
- 6 min, 19–24: stall: butcher: waiting for pigs 71% of the last 5 minutes.
- 2 min, 21–22: stall: mill: output pile full, waiting for carriers 84% of the last 5 minutes.
- 1 min, 22: stall: sawmill: output pile full, waiting for carriers 84% of the last 5 minutes.
- 38 min, 23–60: stall: forest: no free ground to plant in range inside your border 89% of the last 5 minutes.
- 27 min, 27–53: stall: iron mine: deposit worn out 54% of the last 5 minutes.
- 1 min, 59: stall: fisher: fish pile full, waiting for carriers 55% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 11 | 8 | 6 | 3 | 1 | 0 | 11 | 7 | 11 | 26 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 36 | 1604 | 3138 |
| 30 | 50 | 104 | 123 | 24 | 12 | 12 | 25 | 38 | 27 | 34 | 1 | 10 | 0 | 0 | 1 | 0 | 0 | 9 | 90 | 3458 | 11582 |
| 45 | 50 | 104 | 123 | 24 | 12 | 11 | 25 | 38 | 27 | 37 | 8 | 21 | 0 | 0 | 1 | 0 | 0 | 6 | 101 | 3789 | 12773 |
| 60 | 50 | 104 | 123 | 24 | 11 | 12 | 24 | 38 | 26 | 34 | 13 | 21 | 0 | 0 | 2 | 0 | 1 | 17 | 101 | 4180 | 13402 |

At the end: buildings (built+sites) guard 4, house2 3, hq 1, quarry 1, wood 1, saw 1, forest 1, fisher 1, ironmine 1, coalmine 1, smelter 1, house 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, mill 1, bakery 1, pigfarm 1, butcher 1.
People: carrier 24, soldier 22, worker 16, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 70. Soldiers: sword 10, spear 6, bow 6.

Goods produced in the game: grain 152, water 136, coal 121, log 81, stone 79, pig 74, ironore 71, plank 69, fish 69, meat 60, iron 59, flour 56, bread 42, sword 19, bow 8, spear 7, saw 1, shovel 1, rod 1, hammer 1, axe 1.
Goods consumed in the game: grain 130, water 117, coal 98, stone 89, plank 85, log 69, pig 60, fish 59, ironore 59, meat 48, flour 43, iron 39, bread 31, sword 18, spear 7, bow 7, pick 4, hammer 3, axe 2, shovel 2, saw 1, rod 1, scythe 1.
Goods captured in the game: stone 83, plank 70, log 34, grain 16, flour 13, coal 11, fish 8, water 5, ironore 1, iron 1, sword 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (98 building-min): Idle 100%
- quarry (59 building-min): Stone pile full, nothing needs it right now 60%, Cutting stone 22%, Bringing stone to the pile 12%, Stone pile full, waiting for carriers 6%, Worker picking up a pickaxe 0%
- wood (59 building-min): Log pile full, nothing needs it right now 58%, Felling a tree 26%, Log pile full, waiting for carriers 9%, Bringing a log to the pile 6%, Worker picking up an axe 0%
- saw (58 building-min): Output pile full, nothing needs it right now 67%, Sawing planks 15%, Output pile full, waiting for carriers 13%, Stacking outside 3%, Waiting for logs 2%
- guard (159 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 70%, Planting a sapling 29%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- fisher (57 building-min): Fish pile full, nothing needs it right now 55%, No fish in range inside your border 22%, Bringing a fish to the pile 9%, Fishing 9%, Fish pile full, waiting for carriers 5%
- ironmine (57 building-min): Deposit worn out: finding little iron ore 47%, Needs meat or fish: mining stopped 19%, Iron ore pile full, nothing needs it right now 9%, Deposit thinning: mining iron ore 8%, Mining iron ore 6%
- coalmine (56 building-min): Coal pile full, nothing needs it right now 38%, Deposit thinning: mining coal 28%, Mining coal 18%, Coal pile full, waiting for carriers 7%, Bringing coal out 6%
- smelter (55 building-min): Waiting for iron ore 42%, Output pile full, nothing needs it right now 35%, Smelting iron 13%, Output pile full, waiting for carriers 5%, Stacking outside 3%
- house (55 building-min): Idle 100%
- smith (53 building-min): All tool targets met 98%, Worker picking up a hammer 0%, Stacking outside 0%, Forging shovel 0%, Forging hammer 0%
- weaponsmith (51 building-min): All weapon targets met 73%, Waiting for iron 15%, Forging sword 5%, Forging bow 2%, Stacking outside 2%
- barracks (50 building-min): Waiting for weapons from the weaponsmith 82%, Weapons on the way 14%, Soldier targets met 3%, Training soldiers 1%
- farm (48 building-min): Grain pile full, nothing needs it right now 46%, Sowing a field 21%, Harvesting grain 15%, Grain pile full, waiting for carriers 9%, Bringing grain to the pile 8%
- waterhut (48 building-min): Water pile full, nothing needs it right now 56%, Fetching water 17%, Bringing water to the pile 15%, Water pile full, waiting for carriers 13%, Idle 0%
- mill (47 building-min): Output pile full, nothing needs it right now 71%, Output pile full, waiting for carriers 18%, Grinding flour 7%, Stacking outside 3%, Waiting for grain 1%
- bakery (46 building-min): Output pile full, nothing needs it right now 65%, Baking bread 21%, Output pile full, waiting for carriers 11%, Stacking outside 2%, Waiting for flour and water 1%
- pigfarm (44 building-min): Output pile full, nothing needs it right now 43%, Raising a pig 38%, Output pile full, waiting for carriers 12%, Stacking outside 4%, Waiting for grain 1%
- butcher (43 building-min): Output pile full, nothing needs it right now 66%, Waiting for pigs 12%, Butchering 10%, Output pile full, waiting for carriers 7%, Stacking outside 4%

Building sites, time per state (site-min): Builders at work 7, Leveling the ground 7, Waiting for a digger 4, Waiting for a builder 4.

Build order (placed at min:sec, finished at): house2 0:00→0:54, quarry 0:00→1:22, wood 0:02→1:19, saw 1:20→2:00, guard 1:22→2:16, forest 1:46→2:33, fisher 2:12→2:50, ironmine 2:36→3:21, coalmine 2:56→3:36, smelter 4:02→4:47, house 4:48→5:23, smith 5:56→6:39, weaponsmith 7:36→8:44, barracks 8:50→9:48, farm 10:20→11:32, waterhut 11:22→12:20, mill 12:14→12:53, bakery 13:24→14:19, pigfarm 14:56→15:59, butcher 16:02→16:55, house2 19:14→21:44, house2 57:00→59:11.

Demolished or burned: guard (burned) 16:58.

Orders given: sendUnit 138, armyTarget 42, release 42, place 22, march 9, priority 5, attack 5, profession 4, weaponKeep 3, sendIn 1, armyReserve 1. None refused.

People changing jobs: new carrier 70, carrier -> soldier 32, carrier -> worker 16, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1, new soldier 1.

People's orders (4936 in all, 4905 done): worker rest farm 309, worker gather farm 308, worker mine coalmine 166, worker mine ironmine 137, worker rest waterhut 137, worker gather waterhut 136, worker rest forest 132, worker gather forest 132, worker rest coalmine 124, explorer explore 115, worker rest wood 82, worker gather wood 81, worker rest quarry 80, carrier haul water waterhut -> pigfarm 80. None failed.

Failed path searches (who (task) why: times): pioneer (claim 1) cut-off 2.

Fights and contact: attacked enemy buildings 6 times (first 16:00); took guard 16:57, hq 23:25, guard 24:45, guard 26:56, guard 27:24; killed bow 3, sword 9; lost people sword 10, bow 4, spear 1; first saw player 2 at 16:00.

Your notes (9 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Adaptive plan: 10 field soldiers, 0 posts, carriers 6 (6 idle), coal/iron 0/0, sites 0, tips none.
- ×4 10:00–50:00 Adaptive plan: 19 field soldiers, 4 posts, carriers 7 (7 idle), coal/iron 1/1, sites 0, tips stall.
- ×2 16:00–25:50 Attack: 9 field troops against guard 135; threshold 9.
- 20:00 Adaptive plan: 12 field soldiers, 1 posts, carriers 7 (0 idle), coal/iron 1/1, sites 1, tips stall/settlers.
- 23:24 Attack: 16 field troops against hq 37; threshold 16.


Script: 1864 turns, 0.8 ms average, worst 15 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 11/3/2036/10/30 | 37/6/2797/10/60 |
| 30 | 23/3/2463/11/34 | 58/7/3703/13/76 |
| 45 | 24/3/2862/6/41 | 70/13/8951/53/90 |
| 60 | 25/4/2951/7/31 | 76/20/14331/72/90 |
| first | 18 20 23 24 - - | 8 9 15 15 33 39 |

Soldiers every 5 min: 10 10 10 5 8 11 10 12 6 8 12 7 (original game NPC: 10 10 10 9 10 13 15 48 53 59 63 72).

First army orders (game min:sec): 2:42 sendIn 1 soldiers -> building 101; 15:00 march 5 soldiers -> 40,120; 22:26 armyTarget sword=7; 22:26 armyTarget spear=4; 22:26 armyTarget bow=3; 22:26 armyReserve; 25:06 armyTarget sword=9; 25:06 armyTarget spear=5; 25:06 armyTarget bow=4; 27:26 armyTarget sword=4; 27:26 armyTarget spear=2; 27:26 armyTarget bow=2.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 7 min, 6–21: army: Lost 4 soldiers in the last 5 minutes, and no barracks to train new ones.
- 5 min, 12–16: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 4 min, 18–33: settlers: No free settlers and every bed taken: build houses.
- 3 min, 20–22: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 1 min, 22: stall: smith: waiting for coal 59% of the last 5 minutes.
- 2 min, 24–25: stall: weaponsmith: waiting for coal 67% of the last 5 minutes.
- 23 min, 24–60: stall: smelter: waiting for coal 94% of the last 5 minutes.
- 25 min, 25–60: stall: forest: no free ground to plant in range inside your border 98% of the last 5 minutes.
- 9 min, 26–34: stall: barracks: waiting for weapons from the weaponsmith 79% of the last 5 minutes.
- 4 min, 26–29: stall: iron mine: needs meat or fish 77% of the last 5 minutes.
- 21 min, 30–57: stall: weaponsmith: waiting for iron 82% of the last 5 minutes.
- 9 min, 34–60: army: Lost 5 soldiers in the last 5 minutes.
- 12 min, 37–50: stall: iron mine: deposit worn out 92% of the last 5 minutes.
- 14 min, 42–60: stall: coal mine: deposit worn out 93% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 16 | 40 | 2036 | 3865 |
| 30 | 24 | 8 | 4 | 4 | 0 | 2 | 13 | 9 | 0 | 12 | 6 | 5 | 0 | 0 | 2 | 0 | 0 | 2 | 43 | 2463 | 8412 |
| 45 | 24 | 8 | 8 | 15 | 0 | 12 | 14 | 14 | 0 | 10 | 12 | 5 | 0 | 0 | 0 | 0 | 0 | 16 | 82 | 2862 | 9954 |
| 60 | 24 | 8 | 8 | 15 | 0 | 12 | 13 | 13 | 0 | 10 | 13 | 5 | 0 | 0 | 0 | 0 | 0 | 3 | 80 | 2951 | 9987 |

At the end: buildings (built+sites) guard 4, house2 2, wood 2, hq 1, quarry 1, saw 1, forest 1, fisher 1, ironmine 1, look 1, coalmine 1, smelter 1, house 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, pigfarm 1, butcher 1.
People: worker 16, carrier 7, soldier 3, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 50. Soldiers: sword 2, spear 1.

Goods produced in the game: fish 195, log 87, coal 87, stone 80, water 80, grain 80, plank 67, pig 66, ironore 54, meat 53, iron 41, sword 19, spear 5, bow 5, axe 2, saw 1, shovel 1, hammer 1, rod 1.
Goods consumed in the game: fish 186, stone 90, plank 83, coal 77, log 67, water 67, grain 67, pig 53, ironore 41, meat 41, iron 36, sword 19, spear 5, bow 5, pick 4, axe 3, hammer 3, shovel 2, saw 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (85 building-min): Idle 100%
- quarry (59 building-min): Stone pile full, nothing needs it right now 62%, Cutting stone 23%, Bringing stone to the pile 13%, Stone pile full, waiting for carriers 2%, Worker picking up a pickaxe 0%
- wood (101 building-min): Log pile full, nothing needs it right now 70%, Felling a tree 17%, Log pile full, waiting for carriers 8%, Bringing a log to the pile 5%, Worker picking up an axe 0%
- saw (58 building-min): Output pile full, nothing needs it right now 77%, Sawing planks 15%, Output pile full, waiting for carriers 5%, Stacking outside 3%, Fetching from the pile 0%
- guard (175 building-min): Idle 97%, Waiting for a swordsman: train one at the barracks 3%, Soldiers on the way 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 64%, Planting a sapling 36%, Worker picking up a shovel 0%
- fisher (57 building-min): Bringing a fish to the pile 38%, Fishing 33%, Fish pile full, nothing needs it right now 28%, Fish pile full, waiting for carriers 1%, Worker picking up a fishing rod 0%
- ironmine (55 building-min): Deposit worn out: finding little iron ore 40%, Iron ore pile full, nothing needs it right now 28%, Needs meat or fish: mining stopped 11%, Deposit thinning: mining iron ore 11%, Mining iron ore 4%
- look (44 building-min): Scout on watch 100%, Working 0%
- coalmine (43 building-min): Deposit worn out: finding little coal 51%, Deposit thinning: mining coal 23%, Mining coal 15%, Bringing coal out 5%, Came back empty-handed 2%
- smelter (42 building-min): Waiting for coal 83%, Smelting iron 12%, Stacking outside 3%, Worker picking up a hammer 1%, Output pile full, nothing needs it right now 1%
- house (41 building-min): Idle 100%
- smith (40 building-min): All tool targets met 93%, Waiting for coal 3%, Worker picking up a hammer 1%, Forging axe 1%, Forging saw 0%
- weaponsmith (38 building-min): Waiting for iron 82%, Forging sword 6%, Waiting for coal 5%, Stacking outside 2%, Forging spear 2%
- barracks (37 building-min): Waiting for weapons from the weaponsmith 83%, Weapons on the way 16%, Training soldiers 1%
- farm (35 building-min): Grain pile full, nothing needs it right now 53%, Sowing a field 19%, Harvesting grain 13%, Bringing grain to the pile 7%, Grain pile full, waiting for carriers 7%
- waterhut (34 building-min): Water pile full, nothing needs it right now 59%, Bringing water to the pile 19%, Fetching water 15%, Water pile full, waiting for carriers 8%, Worker on the way 0%
- pigfarm (32 building-min): Raising a pig 48%, Output pile full, nothing needs it right now 42%, Stacking outside 6%, Waiting for grain and water 2%, Output pile full, waiting for carriers 1%
- butcher (31 building-min): Output pile full, nothing needs it right now 68%, Butchering 13%, Waiting for pigs 13%, Stacking outside 4%, Output pile full, waiting for carriers 1%

Building sites, time per state (site-min): Builders at work 7, Waiting for a digger 6, Leveling the ground 6, Waiting for a builder 4.

Build order (placed at min:sec, finished at): house2 0:00→0:50, quarry 0:02→1:11, wood 0:04→1:23, saw 1:24→2:04, guard 1:26→2:41, forest 1:28→2:57, fisher 2:06→3:12, guard 2:42→3:29, guard 3:30→4:04, ironmine 4:28→5:01, look 15:00→15:52, coalmine 16:08→16:42, smelter 16:42→17:52, wood 17:00→18:04, house 17:52→18:40, smith 18:50→19:40, weaponsmith 20:54→22:00, barracks 22:24→23:13, farm 24:14→25:21, waterhut 25:26→26:24, pigfarm 27:20→28:27, butcher 28:30→29:22, house2 32:00→33:53, guard 54:22→55:08.

Orders given: sendUnit 147, armyTarget 39, place 24, priority 5, attack 5, profession 4, release 4, weaponKeep 3, march 2, sendIn 1, armyReserve 1. Refused (order: reason, times): place: Too close to another building ×1.

People changing jobs: new carrier 50, carrier -> soldier 29, carrier -> worker 16, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1.

People's orders (4245 in all, 4220 done): worker mine coalmine 215, worker rest fisher 195, worker gather fisher 195, worker rest farm 167, worker gather farm 166, carrier haul fish fisher -> coalmine 165, worker eat coalmine 161, worker rest forest 150, worker gather forest 149, explorer explore 115, worker mine ironmine 107, worker rest wood 89, worker rest coalmine 89, worker gather wood 87. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×4.

Failed path searches (who (task) why: times): pioneer (claim 0) cut-off 16, pioneer (claim 1) cut-off 1.

Fights and contact: attacked enemy buildings 3 times (first 30:48); killed bow 3, sword 4, spear 1; lost people sword 20, bow 8, spear 4; first saw player 1 at 16:00.

Your notes (9 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 6 field soldiers, 3 posts, carriers 16 (16 idle), coal/iron 0/1, sites 0, tips none.
- 20:00 Adaptive plan: 1 field soldiers, 3 posts, carriers 21 (16 idle), coal/iron 1/1, sites 0, tips army/timing.
- ×3 30:00–50:00 Adaptive plan: 4 field soldiers, 3 posts, carriers 15 (9 idle), coal/iron 1/1, sites 0, tips stall.
- 30:48 Attack: 9 field troops against guard 137; threshold 9.
- ×2 40:02–55:00 Attack: 8 field troops against tower 339; threshold 8.


Script: 1857 turns, 1.0 ms average, worst 17 ms, 0 over 0.3 s, 0 errors. Orders refused: place 1 of 25.

### Map 4242: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 11/3/2042/10/30 | 30/6/2691/10/50 |
| 30 | 20/3/2447/13/34 | 44/6/3121/5/60 |
| 45 | 23/5/3030/25/38 | 36/4/2750/4/69 |
| 60 | 27/8/4193/32/46 | 17/1/1562/1/69 |
| first | 22 24 26 27 - - | 10 11 29 34 - - |

Soldiers every 5 min: 10 10 10 7 7 13 21 21 25 29 32 32 (original game NPC: 10 10 10 5 5 5 6 4 4 2 1 1).

First army orders (game min:sec): 2:34 sendIn 1 soldiers -> building 103; 15:00 march 5 soldiers -> 200,120; 25:26 armyTarget sword=8; 25:26 armyTarget spear=4; 25:26 armyTarget bow=4; 25:26 armyReserve; 25:46 armyTarget sword=9; 25:46 armyTarget spear=5; 29:26 armyTarget sword=8; 29:26 armyTarget spear=4; 29:46 armyTarget sword=9; 29:46 armyTarget spear=5.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 6–7: army: Lost 4 soldiers in the last 5 minutes, and no barracks to train new ones.
- 43 min, 9–60: stall: iron mine: deposit worn out 76% of the last 5 minutes.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: stall: forest: no free ground to plant in range inside your border 88% of the last 5 minutes.
- 6 min, 20–25: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 3 min, 22–35: settlers: No free settlers and every bed taken: build houses.
- 22 min, 28–58: stall: smelter: waiting for iron ore 81% of the last 5 minutes.
- 8 min, 33–47: stall: weaponsmith: waiting for iron 83% of the last 5 minutes.
- 5 min, 56–60: weapons: 8 weapons lie unused: the barracks needs free settlers (build houses).
- 5 min, 56–60: stall: barracks: waiting for weapons from the weaponsmith 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 17 | 0 | 0 | 0 | 0 | 0 | 0 | 7 | 0 | 0 | 0 | 0 | 0 | 0 | 14 | 38 | 2042 | 3728 |
| 30 | 24 | 8 | 16 | 15 | 0 | 0 | 0 | 0 | 0 | 15 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 8 | 53 | 2447 | 8316 |
| 45 | 48 | 61 | 52 | 14 | 0 | 0 | 0 | 5 | 0 | 25 | 1 | 6 | 0 | 0 | 0 | 0 | 0 | 12 | 59 | 3030 | 12756 |
| 60 | 72 | 120 | 115 | 19 | 0 | 0 | 6 | 18 | 8 | 52 | 0 | 37 | 14 | 8 | 3 | 3 | 2 | 23 | 61 | 4193 | 14591 |

At the end: buildings (built+sites) guard 8, house2 3, quarry 2, wood 2, hq 1, saw 1, forest 1, fisher 1, ironmine 1, look 1, coalmine 1, smelter 1, house 1, smith 1, weaponsmith 1, barracks 1.
People: carrier 25, soldier 23, worker 13, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 70. Soldiers: sword 11, bow 6, spear 6.

Goods produced in the game: fish 299, coal 119, stone 74, log 73, ironore 57, iron 57, plank 53, sword 18, bow 9, spear 7, axe 1, saw 1, pick 1, shovel 1, hammer 1, rod 1.
Goods consumed in the game: fish 290, coal 97, stone 76, plank 69, ironore 57, log 53, iron 40, sword 18, bow 9, spear 7, pick 5, hammer 3, axe 2, shovel 2, saw 1, rod 1.
Goods captured in the game: plank 95, stone 80, log 48, coal 30, iron 20, grain 18, goldore 14, flour 8, pig 8, gold 8, water 6, fish 4, sword 3, spear 3, bow 2, axe 1, saw 1, pick 1, shovel 1, hammer 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (85 building-min): Idle 100%
- quarry (96 building-min): Stone pile full, nothing needs it right now 69%, Cutting stone 13%, Stone pile full, waiting for carriers 12%, Bringing stone to the pile 6%, Worker picking up a pickaxe 0%
- wood (95 building-min): Log pile full, nothing needs it right now 67%, Log pile full, waiting for carriers 15%, Felling a tree 14%, Bringing a log to the pile 3%, Worker picking up an axe 0%
- saw (58 building-min): Output pile full, nothing needs it right now 76%, Sawing planks 12%, Output pile full, waiting for carriers 10%, Stacking outside 3%, Fetching from the pile 0%
- guard (243 building-min): Idle 99%, Waiting for a swordsman: train one at the barracks 1%, Soldiers on the way 0%
- forest (57 building-min): No free ground to plant in range inside your border 75%, Planting a sapling 25%, Worker picking up a shovel 0%, Working 0%
- fisher (57 building-min): Fish pile full, nothing needs it right now 38%, Fishing 29%, Bringing a fish to the pile 26%, Fish pile full, waiting for carriers 7%, Worker picking up a fishing rod 0%
- ironmine (53 building-min): Deposit worn out: finding little iron ore 77%, Iron ore pile full, nothing needs it right now 11%, Needs meat or fish: mining stopped 3%, Bringing iron ore out 3%, Came back empty-handed 2%
- look (44 building-min): Scout on watch 100%, Idle 0%, Working 0%
- coalmine (39 building-min): Deposit thinning: mining coal 42%, Mining coal 30%, Coal pile full, nothing needs it right now 12%, Bringing coal out 8%, Coal pile full, waiting for carriers 4%
- smelter (39 building-min): Waiting for iron ore 75%, Smelting iron 19%, Stacking outside 4%, Output pile full, nothing needs it right now 1%, Fetching from the pile 1%
- house (38 building-min): Idle 100%
- smith (36 building-min): All tool targets met 96%, Worker picking up a hammer 2%, Stacking outside 0%, Forging axe 0%, Forging shovel 0%
- weaponsmith (35 building-min): Waiting for iron 48%, All weapon targets met 34%, Forging sword 6%, Forging bow 3%, Stacking outside 3%
- barracks (34 building-min): Waiting for weapons from the weaponsmith 69%, Weapons on the way 27%, Soldier targets met 3%, Training soldiers 1%

Building sites, time per state (site-min): Builders at work 6, Leveling the ground 6, Waiting for a digger 5, Waiting for a builder 4, Waiting for materials 1.

Build order (placed at min:sec, finished at): house2 0:00→1:07, quarry 0:02→1:24, wood 0:04→1:37, saw 1:38→2:12, guard 1:40→2:33, forest 1:52→2:47, fisher 2:12→3:01, guard 2:34→3:20, guard 3:22→4:04, ironmine 6:04→6:45, look 15:00→15:57, coalmine 19:18→20:41, smelter 20:42→21:24, house 21:24→22:20, quarry 21:56→22:36, wood 22:08→22:55, smith 23:06→23:48, weaponsmith 24:10→25:23, barracks 25:24→26:22, house2 34:00→35:27, house2 56:00→58:00.

Orders given: sendUnit 166, armyTarget 41, place 21, release 17, attack 6, priority 5, profession 4, march 4, weaponKeep 3, sendIn 1, armyReserve 1. Refused (order: reason, times): place: Too close to another building ×1.

People changing jobs: new carrier 70, carrier -> soldier 34, carrier -> worker 13, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1, new soldier 1.

People's orders (3634 in all, 3608 done): worker rest fisher 299, worker gather fisher 299, worker mine coalmine 213, worker mine ironmine 211, carrier haul fish fisher -> ironmine 177, worker eat ironmine 173, worker rest forest 127, worker gather forest 126, worker rest coalmine 121, worker eat coalmine 117, explorer explore 115, carrier haul fish fisher -> coalmine 115, worker rest quarry 76, worker rest wood 75. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×4.

Failed path searches (who (task) why: times): pioneer (claim 0) cut-off 41, pioneer (claim 1) cut-off 2.

Fights and contact: attacked enemy buildings 6 times (first 34:06); took hq 34:07, guard 35:11, guard 43:52, guard 46:44, guard 49:32, guard 51:41; killed bow 3, sword 7; lost people bow 6, sword 5, spear 1; first saw player 2 at 16:00.

Your notes (11 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Adaptive plan: 10 field soldiers, 0 posts, carriers 6 (6 idle), coal/iron 0/0, sites 0, tips none.
- ×4 10:00–50:00 Adaptive plan: 21 field soldiers, 7 posts, carriers 10 (3 idle), coal/iron 1/1, sites 0, tips stall.
- 20:00 Adaptive plan: 3 field soldiers, 3 posts, carriers 15 (14 idle), coal/iron 1/1, sites 1, tips stall/timing.
- 34:06 Attack: 16 field troops against hq 37; threshold 16.
- ×4 43:50–51:24 Attack: 9 field troops against guard 132; threshold 9.


Script: 1853 turns, 1.5 ms average, worst 15 ms, 0 over 0.3 s, 0 errors. Orders refused: place 1 of 22.

### Map 4242: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 17/3/2194/13/37 | 23/6/2564/10/40 |
| 30 | 21/6/3984/25/36 | 6/2/1110/1/40 |
| 45 | 21/6/4305/25/36 | 6/2/1110/1/40 |
| 60 | 21/6/4627/25/36 | 6/2/1110/1/40 |
| first | 8 9 11 12 - - | - - - - - - |

Soldiers every 5 min: 10 10 13 22 25 25 25 25 25 25 25 25 (original game NPC: 10 10 10 3 1 1 1 1 1 1 1 1).

First army orders (game min:sec): 2:50 sendIn 1 soldiers -> building 117; 11:06 armyReserve; 11:26 armyTarget sword=5; 11:26 armyTarget spear=3; 15:00 march 5 soldiers -> 40,120; 15:06 armyTarget sword=7; 15:06 armyTarget spear=4; 15:06 armyTarget bow=3; 16:14 attack 9 soldiers -> building 131; 17:06 armyTarget bow=4; 17:23 march 3 soldiers -> 66,132; 17:25 attack 8 soldiers -> building 139.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 6–7: army: Lost 4 soldiers in the last 5 minutes, and no barracks to train new ones.
- 5 min, 11–15: stall: smith: waiting for coal 55% of the last 5 minutes.
- 5 min, 13–17: stall: weaponsmith: waiting for coal 63% of the last 5 minutes.
- 11 min, 14–24: stall: barracks: waiting for weapons from the weaponsmith 76% of the last 5 minutes.
- 44 min, 17–60: stall: smelter: waiting for coal 100% of the last 5 minutes.
- 40 min, 20–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 3 min, 20–22: settlers: No free settlers and every bed taken: build houses.
- 1 min, 25: stall: iron mine: deposit worn out 70% of the last 5 minutes.
- 35 min, 26–60: stall: coal mine: needs bread or fish 100% of the last 5 minutes.
- 1 min, 29: stall: weaponsmith: waiting for iron 96% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 7 | 4 | 17 | 0 | 0 | 0 | 1 | 0 | 12 | 39 | 2194 | 4211 |
| 30 | 17 | 57 | 80 | 12 | 8 | 0 | 14 | 16 | 14 | 8 | 14 | 6 | 0 | 0 | 0 | 0 | 0 | 18 | 44 | 3984 | 12019 |
| 45 | 17 | 57 | 80 | 12 | 8 | 0 | 14 | 16 | 14 | 8 | 14 | 6 | 0 | 0 | 0 | 0 | 0 | 18 | 44 | 4305 | 13999 |
| 60 | 17 | 57 | 80 | 12 | 8 | 0 | 14 | 16 | 14 | 8 | 14 | 6 | 0 | 0 | 0 | 0 | 0 | 18 | 44 | 4627 | 15979 |

At the end: buildings (built+sites) guard 6, house2 2, hq 1, quarry 1, wood 1, saw 1, forest 1, fisher 1, ironmine 1, coalmine 1, smelter 1, house 1, smith 1, weaponsmith 1, barracks 1.
People: soldier 18, carrier 18, worker 10, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 50. Soldiers: sword 10, spear 4, bow 4.

Goods produced in the game: fish 121, coal 70, log 54, stone 51, ironore 48, plank 42, iron 34, sword 12, spear 7, bow 5, hammer 1, saw 1, shovel 1, rod 1.
Goods consumed in the game: fish 115, coal 62, stone 61, plank 58, log 42, ironore 34, iron 28, sword 12, spear 7, bow 5, pick 4, hammer 3, shovel 2, axe 1, saw 1, rod 1.
Goods captured in the game: stone 55, plank 34, grain 16, water 14, flour 14, bread 8, hammer 2, log 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (96 building-min): Idle 100%
- quarry (59 building-min): Stone pile full, nothing needs it right now 75%, Cutting stone 14%, Bringing stone to the pile 7%, Stone pile full, waiting for carriers 4%, Worker picking up a pickaxe 0%
- wood (58 building-min): Log pile full, nothing needs it right now 71%, Felling a tree 18%, Log pile full, waiting for carriers 6%, Bringing a log to the pile 5%, Worker picking up an axe 0%
- saw (58 building-min): Output pile full, nothing needs it right now 83%, Sawing planks 9%, Output pile full, waiting for carriers 5%, Stacking outside 2%, Waiting for logs 0%
- guard (290 building-min): Idle 87%, Waiting for a swordsman: train one at the barracks 12%, Soldiers on the way 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 74%, Planting a sapling 25%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- fisher (57 building-min): Fish pile full, nothing needs it right now 72%, Fishing 13%, Bringing a fish to the pile 11%, Fish pile full, waiting for carriers 4%, Worker picking up a fishing rod 0%
- ironmine (55 building-min): Iron ore pile full, nothing needs it right now 67%, Deposit thinning: mining iron ore 13%, Deposit worn out: finding little iron ore 7%, Mining iron ore 7%, Bringing iron ore out 2%
- coalmine (53 building-min): Needs bread or fish: mining stopped 71%, Mining coal 24%, Bringing coal out 4%, Worker picking up a pickaxe 1%, Came back empty-handed 1%
- smelter (52 building-min): Waiting for coal 86%, Smelting iron 8%, Output pile full, nothing needs it right now 4%, Stacking outside 2%, Fetching from the pile 0%
- house (51 building-min): Idle 100%
- smith (51 building-min): All tool targets met 91%, Waiting for coal 7%, Worker picking up a hammer 0%, Forging hammer 0%, Forging shovel 0%
- weaponsmith (49 building-min): Waiting for iron 76%, Waiting for coal 9%, All weapon targets met 7%, Forging sword 3%, Forging spear 2%
- barracks (48 building-min): Waiting for weapons from the weaponsmith 92%, Weapons on the way 6%, Soldier targets met 1%, Training soldiers 1%

Building sites, time per state (site-min): Waiting for a digger 5, Builders at work 5, Leveling the ground 4, Waiting for a builder 3, Waiting for materials 0.

Build order (placed at min:sec, finished at): house2 0:00→1:06, quarry 0:00→1:22, wood 0:02→1:35, saw 1:36→2:13, guard 1:38→2:50, forest 1:52→3:05, fisher 2:14→3:30, guard 2:52→3:56, guard 3:58→4:50, ironmine 4:16→5:20, coalmine 6:14→6:43, smelter 6:44→7:43, house 7:44→8:33, smith 8:14→8:59, weaponsmith 9:52→10:46, barracks 11:04→11:56, house2 21:24→23:04.

Orders given: sendUnit 136, armyTarget 26, place 17, release 11, priority 5, profession 4, march 4, attack 4, weaponKeep 3, sendIn 1, armyReserve 1. None refused.

People changing jobs: new carrier 50, carrier -> soldier 24, carrier -> worker 10, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1, new soldier 1.

People's orders (2245 in all, 2225 done): worker rest fisher 122, worker gather fisher 121, explorer explore 115, worker rest forest 111, worker gather forest 110, worker mine coalmine 104, worker mine ironmine 100, worker rest coalmine 71, soldier attack guard 63, worker eat ironmine 62, carrier haul fish fisher -> ironmine 60, worker rest wood 55, worker gather wood 54, carrier haul fish fisher -> coalmine 53. None failed.

Failed path searches (who (task) why: times): pioneer (claim 1) cut-off 1.

Fights and contact: attacked enemy buildings 5 times (first 16:14); took guard 17:23, guard 17:25, hq 20:08, guard 23:49; killed bow 3, sword 6; lost people sword 3, spear 2, bow 4; first saw player 1 at 16:00.

Your notes (9 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 6 field soldiers, 3 posts, carriers 23 (14 idle), coal/iron 1/1, sites 1, tips none.
- ×2 16:14–23:27 Attack: 13 field troops against guard 135; threshold 8.
- 20:00 Adaptive plan: 16 field soldiers, 5 posts, carriers 6 (0 idle), coal/iron 1/1, sites 0, tips stall/settlers.
- 20:02 Attack: 16 field troops against hq 1; threshold 16.
- ×3 30:00–50:00 Adaptive plan: 18 field soldiers, 6 posts, carriers 18 (18 idle), coal/iron 1/1, sites 0, tips stall.


Script: 1834 turns, 1.0 ms average, worst 17 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 16/2/1941/27/33 | 22/6/2997/10/40 |
| 30 | 28/5/3155/33/29 | 38/3/2703/4/68 |
| 45 | 28/4/3544/16/43 | 56/5/3811/7/62 |
| 60 | 29/5/4025/16/31 | 69/9/6944/18/103 |
| first | 6 9 10 11 - - | 8 8 22 23 51 47 |

Soldiers every 5 min: 10 10 27 27 28 33 31 15 16 20 18 16 (original game NPC: 10 10 10 5 5 4 3 3 7 14 18 18).

First army orders (game min:sec): 2:40 sendIn 1 soldiers -> building 102; 9:30 armyTarget sword=5; 9:30 armyTarget spear=3; 9:30 armyReserve; 10:50 armyTarget sword=6; 10:50 armyTarget bow=3; 11:10 armyTarget spear=4; 11:30 armyTarget sword=7; 11:50 armyTarget bow=4; 12:10 armyTarget sword=8; 12:30 armyTarget spear=5; 12:50 armyTarget sword=9.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 18 min, 6–36: settlers: No free settlers and every bed taken: build houses.
- 9 min, 14–24: stall: smelter: waiting for coal 100% of the last 5 minutes.
- 10 min, 18–60: stall: barracks: waiting for weapons from the weaponsmith 94% of the last 5 minutes.
- 9 min, 19–58: stall: iron mine: deposit worn out 92% of the last 5 minutes.
- 12 min, 20–31: stall: smith: waiting for coal 100% of the last 5 minutes.
- 8 min, 22–60: stall: weaponsmith: waiting for iron 94% of the last 5 minutes.
- 2 min, 22–23: stall: pig farm: waiting for grain and water 94% of the last 5 minutes.
- 5 min, 24–28: stall: iron mine: needs meat or fish 91% of the last 5 minutes.
- 13 min, 27–54: stall: fisher: no fish in range inside your border 95% of the last 5 minutes.
- 14 min, 28–41: stall: quarry: stone pile full, waiting for carriers 100% of the last 5 minutes.
- 8 min, 31–49: stall: smelter: waiting for iron ore 87% of the last 5 minutes.
- 9 min, 32–40: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 10 min, 34–43: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 8 min, 37–44: army: Lost 4 soldiers in the last 5 minutes.
- 8 min, 37–44: settlers: No free settlers: build houses.
- 12 min, 41–55: stall: forest: no free ground to plant in range inside your border 89% of the last 5 minutes.
- 2 min, 42–43: stall: barracks: waiting for a free settler to train 100% of the last 5 minutes.
- 2 min, 43–44: weapons: 3 weapons lie unused: the barracks needs free settlers (build houses).
- 1 min, 44: stall: farm: grain pile full, waiting for carriers 100% of the last 5 minutes.
- 1 min, 44: stall: water hut: water pile full, waiting for carriers 100% of the last 5 minutes.
- 5 min, 46–50: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 7 min, 53–60: stall: coal mine: deposit worn out 94% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 9 | 15 | 12 | 5 | 0 | 0 | 0 | 0 | 0 | 11 | 9 | 5 | 0 | 0 | 0 | 0 | 0 | 9 | 16 | 1941 | 3659 |
| 30 | 24 | 8 | 16 | 4 | 6 | 0 | 20 | 22 | 8 | 10 | 2 | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 80 | 3155 | 9012 |
| 45 | 23 | 14 | 25 | 0 | 2 | 4 | 18 | 20 | 13 | 20 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 4 | 59 | 3544 | 10701 |
| 60 | 24 | 11 | 27 | 8 | 11 | 12 | 13 | 20 | 13 | 11 | 11 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 95 | 4025 | 11889 |

At the end: buildings (built+sites) guard 5, house2 3, quarry 2, wood 2, hq 1, saw 1, forest 1, fisher 1, ironmine 1, coalmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, pigfarm 1, mill 1, bakery 1, house 1, butcher 1.
People: worker 18, soldier 9, carrier 5, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 70. Soldiers: sword 6, spear 1, bow 2.

Goods produced in the game: grain 140, coal 125, fish 124, water 120, log 95, stone 95, plank 75, flour 70, ironore 69, iron 58, bread 56, pig 50, meat 37, sword 27, bow 14, spear 8, axe 2, saw 1, shovel 1, hammer 1, rod 1, pick 1.
Goods consumed in the game: fish 122, grain 120, coal 114, water 107, stone 97, plank 91, log 75, ironore 58, flour 57, iron 56, bread 45, pig 37, sword 27, meat 25, bow 14, spear 8, pick 5, axe 3, hammer 3, shovel 2, saw 1, rod 1, scythe 1.
Goods lost in the game: stone 4, plank 3.
Goods captured in the game: stone 11, plank 3.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (127 building-min): Idle 100%
- quarry (102 building-min): Stone pile full, waiting for carriers 48%, Stone pile full, nothing needs it right now 26%, Cutting stone 15%, Bringing stone to the pile 7%, No stone in range inside your border 4%
- wood (102 building-min): Log pile full, waiting for carriers 49%, Log pile full, nothing needs it right now 26%, Felling a tree 19%, Bringing a log to the pile 6%, Worker picking up an axe 1%
- saw (58 building-min): Output pile full, waiting for carriers 35%, Output pile full, nothing needs it right now 33%, Sawing planks 16%, Waiting for logs 12%, Stacking outside 3%
- guard (221 building-min): Idle 98%, Waiting for a swordsman: train one at the barracks 1%, Soldiers on the way 1%, Waiting for fighters: train swordsmen or spearmen 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 66%, Planting a sapling 34%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- fisher (57 building-min): No fish in range inside your border 60%, Fishing 14%, Bringing a fish to the pile 12%, Fish pile full, waiting for carriers 5%, Fish pile full, nothing needs it right now 5%
- ironmine (55 building-min): Needs meat or fish: mining stopped 42%, Deposit worn out: finding little iron ore 37%, Deposit thinning: mining iron ore 11%, Mining iron ore 5%, Bringing iron ore out 3%
- coalmine (55 building-min): Deposit thinning: mining coal 37%, Deposit worn out: finding little coal 25%, Needs bread or fish: mining stopped 15%, Mining coal 14%, Bringing coal out 6%
- smelter (54 building-min): Waiting for iron ore 46%, Waiting for coal 31%, Smelting iron 14%, Waiting for coal and iron ore 5%, Stacking outside 3%
- smith (52 building-min): All tool targets met 67%, Waiting for coal 30%, Worker picking up a hammer 1%, Forging axe 0%, Stacking outside 0%
- weaponsmith (51 building-min): Waiting for iron 67%, All weapon targets met 17%, Forging sword 7%, Forging bow 4%, Stacking outside 3%
- barracks (50 building-min): Waiting for weapons from the weaponsmith 65%, Waiting for a free settler to train 16%, Weapons on the way 11%, Soldier targets met 5%, Training soldiers 2%
- farm (45 building-min): Grain pile full, waiting for carriers 45%, Sowing a field 21%, Harvesting grain 15%, Grain pile full, nothing needs it right now 11%, Bringing grain to the pile 8%
- waterhut (45 building-min): Water pile full, waiting for carriers 50%, Fetching water 16%, Water pile full, nothing needs it right now 13%, No way back to the building 12%, Bringing water to the pile 8%
- pigfarm (41 building-min): Output pile full, waiting for carriers 44%, Raising a pig 28%, Output pile full, nothing needs it right now 10%, Waiting for grain and water 10%, Waiting for grain 4%
- mill (40 building-min): Output pile full, waiting for carriers 51%, Output pile full, nothing needs it right now 26%, Grinding flour 10%, Waiting for grain 7%, Stacking outside 5%
- bakery (39 building-min): Waiting for flour 41%, Baking bread 33%, Output pile full, nothing needs it right now 14%, Stacking outside 4%, Output pile full, waiting for carriers 3%
- house (38 building-min): Idle 100%
- butcher (35 building-min): Waiting for pigs 55%, Output pile full, nothing needs it right now 28%, Butchering 8%, Output pile full, waiting for carriers 5%, Stacking outside 3%

Building sites, time per state (site-min): Waiting for a digger 8, Leveling the ground 8, Builders at work 8, Waiting for a builder 5, Waiting for materials 4.

Build order (placed at min:sec, finished at): house2 0:00→1:09, quarry 0:00→1:25, wood 0:02→1:39, saw 1:40→2:11, guard 1:50→2:39, forest 1:52→2:56, fisher 2:12→3:24, guard 3:02→4:13, ironmine 3:04→4:32, coalmine 3:24→4:48, smelter 4:48→5:57, house2 5:58→7:55, smith 6:46→8:23, weaponsmith 8:24→9:16, barracks 9:28→10:22, farm 13:48→15:02, waterhut 14:26→15:26, wood 15:00→15:58, quarry 15:44→16:12, pigfarm 18:26→19:16, mill 18:40→19:39, bakery 19:18→20:58, house 20:00→22:21, butcher 24:24→25:15, house2 40:34→43:33.

Demolished or burned: guard (burned) 44:45.

Orders given: sendUnit 139, armyTarget 121, place 25, release 24, priority 5, march 5, profession 4, attack 4, weaponKeep 3, sendIn 2, armyReserve 1. None refused.

People changing jobs: new carrier 69, carrier -> soldier 49, carrier -> worker 17, new soldier 9, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1, new worker 1.

People's orders (5300 in all, 5105 done): worker rest farm 291, worker gather farm 290, worker mine coalmine 201, worker mine ironmine 138, worker rest forest 133, worker gather forest 132, worker rest coalmine 128, worker rest fisher 125, worker gather fisher 124, worker rest waterhut 120, worker gather waterhut 120, explorer explore 115, worker eat coalmine 108, worker rest quarry 97. Not done (outcome: times): failed: no way (worker (work gather) own-land-split) ×146; ended: the person is gone (became a soldier, defeated or removed) ×14; failed: spot not next to the border ×1; failed: killed ×1.

Failed path searches (who (task) why: times): worker (work decide) own-land-split 496, worker (work gather) own-land-split 292, pioneer (claim 1) cut-off 2.

Fights and contact: attacked enemy buildings 4 times (first 15:44); took guard 16:23, guard 19:25, guard 29:58, guard 50:48; killed bow 3, sword 43, spear 1; lost people sword 21, bow 15, spear 7; first saw player 2 at 16:00.

Warnings: path-fail 29. Last: 51:31 path-fail: worker (work gather) failed 5 times within a minute to find a way, last to 44,104: own-land-split | 53:38 path-fail: worker (work gather) failed 5 times within a minute to find a way, last to 32,112: own-land-split | 53:45 path-fail: worker (work decide) failed 5 times within a minute to find a way, last to 32,106: own-land-split

Your notes (10 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 32 (23 idle), coal/iron 1/1, sites 1, tips none.
- ×4 15:44–49:52 Attack: 9 field troops against guard 300; threshold 9.
- ×2 20:00–30:00 Adaptive plan: 27 field soldiers, 5 posts, carriers 3 (0 idle), coal/iron 1/1, sites 0, tips stall/settlers.
- 40:00 Adaptive plan: 9 field soldiers, 5 posts, carriers 2 (0 idle), coal/iron 1/1, sites 0, tips stall/army/settlers.
- 50:00 Adaptive plan: 14 field soldiers, 4 posts, carriers 12 (4 idle), coal/iron 1/1, sites 0, tips land/stall.


Script: 1987 turns, 0.9 ms average, worst 16 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 17/3/2030/20/30 | 28/6/2628/10/50 |
| 30 | 25/3/2717/28/47 | 31/5/2558/6/74 |
| 45 | 28/6/3305/24/43 | 28/2/2410/7/70 |
| 60 | 29/7/3926/31/35 | 27/1/2186/7/68 |
| first | 7 9 11 12 - - | 9 10 14 16 - - |

Soldiers every 5 min: 10 10 20 19 20 28 28 28 24 27 28 31 (original game NPC: 10 10 10 5 7 6 4 4 7 9 9 7).

First army orders (game min:sec): 2:54 sendIn 1 soldiers -> building 99; 10:58 armyReserve; 11:18 armyTarget sword=5; 11:18 armyTarget spear=3; 12:58 armyTarget bow=3; 13:18 armyTarget sword=6; 13:38 armyTarget spear=4; 13:58 armyTarget sword=7; 14:18 armyTarget bow=4; 14:38 armyTarget sword=8; 15:00 march 5 soldiers -> 40,120; 15:18 armyTarget spear=5.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 6–7: army: Lost 4 soldiers in the last 5 minutes, and no barracks to train new ones.
- 1 min, 11: stall: smith: waiting for coal 58% of the last 5 minutes.
- 27 min, 13–60: stall: weaponsmith: waiting for coal 87% of the last 5 minutes.
- 18 min, 14–31: stall: smelter: waiting for coal 57% of the last 5 minutes.
- 35 min, 17–58: stall: barracks: waiting for weapons from the weaponsmith 90% of the last 5 minutes.
- 4 min, 18–21: stall: weaponsmith: waiting for iron 53% of the last 5 minutes.
- 6 min, 18–27: settlers: No free settlers and every bed taken: build houses.
- 4 min, 22–25: stall: iron mine: needs meat or fish 66% of the last 5 minutes.
- 6 min, 25–30: stall: butcher: waiting for pigs 56% of the last 5 minutes.
- 34 min, 27–60: stall: forest: no free ground to plant in range inside your border 95% of the last 5 minutes.
- 5 min, 31–35: stall: iron mine: deposit worn out 92% of the last 5 minutes.
- 5 min, 36–47: army: Lost 4 soldiers in the last 5 minutes.
- 2 min, 59–60: stall: coal mine: deposit worn out 90% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 8 | 0 | 0 | 0 | 0 | 0 | 11 | 13 | 6 | 0 | 0 | 1 | 0 | 0 | 10 | 35 | 2030 | 3619 |
| 30 | 22 | 30 | 31 | 15 | 0 | 12 | 14 | 13 | 0 | 7 | 2 | 9 | 0 | 0 | 0 | 0 | 0 | 19 | 61 | 2717 | 9484 |
| 45 | 22 | 30 | 31 | 19 | 0 | 12 | 14 | 14 | 0 | 12 | 14 | 19 | 0 | 0 | 0 | 0 | 0 | 18 | 89 | 3305 | 12500 |
| 60 | 19 | 35 | 36 | 21 | 0 | 12 | 14 | 14 | 0 | 12 | 14 | 20 | 0 | 0 | 0 | 0 | 0 | 11 | 89 | 3926 | 14044 |

At the end: buildings (built+sites) guard 7, house 3, house2 2, quarry 2, hq 1, wood 1, saw 1, forest 1, fisher 1, ironmine 1, coalmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, pigfarm 1, butcher 1, tower 0+1.
People: soldier 23, worker 15, carrier 12, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 70. Soldiers: sword 11, spear 5, bow 7.

Goods produced in the game: fish 247, coal 134, stone 93, ironore 85, log 83, grain 81, water 81, plank 74, iron 71, pig 67, meat 53, sword 22, bow 12, spear 11, saw 1, shovel 1, hammer 1, rod 1, pick 1, axe 1.
Goods consumed in the game: fish 240, coal 122, stone 90, plank 85, log 74, ironore 71, water 67, grain 67, pig 53, iron 51, meat 41, sword 22, bow 12, spear 11, pick 5, hammer 3, axe 2, shovel 2, saw 1, rod 1, scythe 1.
Goods lost in the game: stone 7, gold 7, plank 5, coal 3.
Goods captured in the game: plank 11, fish 8, gold 7, log 6, stone 3, coal 3.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (90 building-min): Idle 100%
- quarry (98 building-min): Stone pile full, nothing needs it right now 72%, Cutting stone 15%, Bringing stone to the pile 7%, Stone pile full, waiting for carriers 4%, Worker picking up a pickaxe 0%
- wood (58 building-min): Log pile full, nothing needs it right now 60%, Felling a tree 27%, Bringing a log to the pile 7%, Log pile full, waiting for carriers 5%, Worker picking up an axe 0%
- saw (58 building-min): Output pile full, nothing needs it right now 74%, Sawing planks 16%, Stacking outside 4%, Output pile full, waiting for carriers 3%, Waiting for logs 3%
- guard (239 building-min): Idle 97%, Waiting for a swordsman: train one at the barracks 2%, Free soldiers are too far away: bring one onto your land or near this building 0%, Soldiers on the way 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 65%, Planting a sapling 35%, Worker picking up a shovel 0%, Idle 0%
- fisher (56 building-min): Bringing a fish to the pile 51%, Fishing 45%, Fish pile full, nothing needs it right now 2%, No fish in range inside your border 1%, Worker picking up a fishing rod 0%
- ironmine (55 building-min): Deposit worn out: finding little iron ore 39%, Iron ore pile full, nothing needs it right now 23%, Deposit thinning: mining iron ore 13%, Mining iron ore 9%, Needs meat or fish: mining stopped 8%
- coalmine (54 building-min): Deposit thinning: mining coal 57%, Mining coal 22%, Deposit worn out: finding little coal 11%, Bringing coal out 7%, Came back empty-handed 2%
- smelter (54 building-min): Output pile full, nothing needs it right now 42%, Waiting for coal 27%, Smelting iron 17%, Waiting for iron ore 7%, Stacking outside 4%
- house (130 building-min): Idle 100%
- smith (52 building-min): All tool targets met 95%, Waiting for coal 3%, Worker picking up a hammer 0%, Stacking outside 0%, Forging saw 0%
- weaponsmith (50 building-min): Waiting for coal 59%, All weapon targets met 16%, Waiting for iron 10%, Forging sword 6%, Forging bow 3%
- barracks (48 building-min): Waiting for weapons from the weaponsmith 78%, Weapons on the way 13%, Soldier targets met 8%, Training soldiers 1%, Idle 0%
- farm (42 building-min): Grain pile full, nothing needs it right now 61%, Sowing a field 15%, Harvesting grain 11%, Bringing grain to the pile 6%, Grain pile full, waiting for carriers 5%
- waterhut (40 building-min): Water pile full, nothing needs it right now 76%, Water pile full, waiting for carriers 9%, Fetching water 8%, Bringing water to the pile 6%, Worker on the way 0%
- pigfarm (38 building-min): Output pile full, nothing needs it right now 51%, Raising a pig 40%, Stacking outside 5%, Waiting for water 2%, Output pile full, waiting for carriers 1%
- butcher (37 building-min): Output pile full, nothing needs it right now 72%, Waiting for pigs 11%, Butchering 11%, Stacking outside 4%, Output pile full, waiting for carriers 1%

Building sites, time per state (site-min): Builders at work 7, Leveling the ground 7, Waiting for a digger 6, Waiting for a builder 3, Waiting for materials 0.

Build order (placed at min:sec, finished at): house2 0:00→1:08, quarry 0:00→1:26, wood 0:02→1:39, saw 1:40→2:13, guard 1:42→2:54, forest 1:56→3:10, fisher 2:14→3:31, guard 2:56→3:50, guard 3:52→4:23, ironmine 4:14→4:50, coalmine 5:02→5:32, smelter 5:38→6:26, house 6:28→7:11, smith 7:46→8:23, weaponsmith 9:36→10:24, barracks 10:56→11:39, farm 17:38→18:25, house 18:14→19:02, waterhut 19:10→20:13, quarry 20:02→20:50, pigfarm 21:30→22:19, butcher 21:54→22:52, house 22:34→23:23, house2 27:00→28:38, tower 58:56→never.

Demolished or burned: guard (burned) 16:56.

Orders given: sendUnit 138, armyTarget 61, place 25, release 15, attack 6, priority 5, march 5, profession 4, weaponKeep 3, sendIn 2, armyReserve 1. None refused.

People changing jobs: new carrier 70, carrier -> soldier 45, carrier -> worker 15, new soldier 4, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1.

People's orders (5076 in all, 5043 done): worker mine coalmine 303, worker rest fisher 247, worker gather fisher 247, worker eat coalmine 202, carrier haul fish fisher -> coalmine 201, worker rest farm 165, worker gather farm 164, worker mine ironmine 149, worker rest forest 139, worker gather forest 139, worker rest coalmine 135, explorer explore 115, soldier attack guard 100, worker rest quarry 95. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×5.

Fights and contact: attacked enemy buildings 7 times (first 15:48); took guard 16:55, hq 26:15, guard 32:57, guard 33:27, guard 44:03, guard 59:09; killed sword 10, bow 5; lost people bow 8, sword 10, spear 6; first saw player 1 at 16:00.

Your notes (11 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 6 field soldiers, 3 posts, carriers 23 (17 idle), coal/iron 1/1, sites 1, tips none.
- ×4 15:48–58:56 Attack: 9 field troops against guard 143; threshold 9.
- ×4 20:00–50:00 Adaptive plan: 20 field soldiers, 6 posts, carriers 17 (14 idle), coal/iron 1/1, sites 0, tips stall.
- 26:00 Attack: 16 field troops against hq 1; threshold 16.


Script: 1884 turns, 0.8 ms average, worst 17 ms, 0 over 0.3 s, 0 errors. Orders refused: none.
