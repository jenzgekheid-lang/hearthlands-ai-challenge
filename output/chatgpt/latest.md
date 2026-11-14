# Tournament: chatgpt

Game version 210. Written for: chatgpt 208.

- chatgpt: hearthlands-ai-challenge, commit 69d7b0b

Maps 20261030, 777, 4242, 31, each twice (sides swapped), up to 60 game minutes (1x). 61 s.

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
| 30 | 30/5/3462/22/52 | 9/4/2216/3/40 |
| 45 | 33/7/5290/48/46 | 6/3/1564/2/40 |
| 60 | 33/7/5677/57/37 | 6/3/1564/2/40 |
| first | 11 13 14 15 37 - | 9 9 - - - - |

Soldiers every 5 min: 10 10 14 18 20 22 35 41 48 53 57 57 (original game NPC: 10 10 10 5 5 3 2 2 2 2 2 2).

First army orders (game min:sec): 3:02 sendIn 1 soldiers -> building 95; 13:50 armyReserve; 14:10 armyTarget sword=5; 14:10 armyTarget spear=3; 15:00 march 5 soldiers -> 200,120; 15:10 armyTarget sword=6; 15:10 armyTarget bow=3; 15:30 armyTarget sword=7; 15:30 armyTarget spear=4; 16:10 armyTarget sword=6; 16:10 armyTarget spear=3; 16:30 armyTarget sword=7.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 3 min, 6–8: army: Lost 4 soldiers in the last 5 minutes, and no barracks to train new ones.
- 11 min, 11–40: settlers: No free settlers and every bed taken: build houses.
- 8 min, 14–22: stall: fisher: no fish in range inside your border 79% of the last 5 minutes.
- 3 min, 16–18: stall: smelter: waiting for coal 91% of the last 5 minutes.
- 2 min, 16–60: stall: weaponsmith: waiting for coal 100% of the last 5 minutes.
- 10 min, 17–59: stall: barracks: waiting for weapons from the weaponsmith 97% of the last 5 minutes.
- 7 min, 18–24: stall: iron mine: needs meat or fish 88% of the last 5 minutes.
- 9 min, 23–32: stall: butcher: waiting for pigs 74% of the last 5 minutes.
- 15 min, 23–41: stall: smelter: waiting for iron ore 84% of the last 5 minutes.
- 3 min, 26–29: stall: mill: output pile full, waiting for carriers 78% of the last 5 minutes.
- 32 min, 27–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 2 min, 28–29: stall: sawmill: output pile full, waiting for carriers 81% of the last 5 minutes.
- 1 min, 30: stall: pig farm: waiting for grain 64% of the last 5 minutes.
- 28 min, 33–60: stall: quarry: no stone in range inside your border 100% of the last 5 minutes.
- 12 min, 42–53: stall: iron mine: deposit worn out 95% of the last 5 minutes.
- 5 min, 54–58: stall: coal mine: deposit worn out 95% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 13 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 4 | 6 | 0 | 0 | 0 | 0 | 0 | 18 | 23 | 2232 | 4154 |
| 30 | 20 | 43 | 47 | 33 | 12 | 4 | 19 | 12 | 12 | 30 | 9 | 23 | 8 | 0 | 2 | 0 | 0 | 6 | 80 | 3462 | 10509 |
| 45 | 32 | 49 | 51 | 33 | 11 | 12 | 19 | 20 | 14 | 19 | 6 | 19 | 8 | 0 | 1 | 0 | 0 | 10 | 90 | 5290 | 14761 |
| 60 | 32 | 49 | 51 | 33 | 12 | 12 | 20 | 20 | 14 | 12 | 7 | 24 | 8 | 0 | 0 | 0 | 0 | 8 | 93 | 5677 | 14997 |

At the end: buildings (built+sites) guard 6, house2 3, quarry 2, wood 2, fisher 2, house 2, hq 1, saw 1, forest 1, coalmine 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, mill 1, bakery 1, pigfarm 1, butcher 1, tower 1.
People: soldier 47, worker 19, carrier 10, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 80. Soldiers: sword 22, bow 13, spear 12.

Goods produced in the game: grain 187, water 173, coal 139, log 108, stone 93, plank 88, flour 85, pig 82, ironore 73, iron 72, bread 71, meat 68, fish 60, sword 27, spear 13, bow 13, rod 2, axe 2, saw 1, shovel 1, hammer 1, pick 1.
Goods consumed in the game: grain 167, water 153, coal 133, stone 110, plank 104, log 88, ironore 72, flour 71, pig 68, iron 61, bread 59, meat 56, fish 42, sword 27, spear 13, bow 13, pick 5, axe 3, hammer 3, shovel 2, rod 2, saw 1, scythe 1.
Goods lost in the game: stone 17, plank 11.
Goods captured in the game: stone 34, plank 24, iron 13, fish 9, goldore 8, log 8, coal 6, ironore 6, scythe 2, axe 1, saw 1, pick 1, hammer 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (108 building-min): Idle 100%
- quarry (96 building-min): No stone in range inside your border 68%, Cutting stone 16%, Bringing stone to the pile 7%, Stone pile full, nothing needs it right now 4%, Stone pile full, waiting for carriers 4%
- wood (97 building-min): Log pile full, nothing needs it right now 49%, Felling a tree 22%, Log pile full, waiting for carriers 21%, Bringing a log to the pile 7%, Worker picking up an axe 1%
- saw (57 building-min): Output pile full, nothing needs it right now 56%, Sawing planks 19%, Output pile full, waiting for carriers 17%, Stacking outside 4%, Waiting for logs 3%
- guard (264 building-min): Idle 99%, Free soldiers are too far away: bring one onto your land or near this building 0%, Waiting for a swordsman: train one at the barracks 0%, Soldiers on the way 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 64%, Planting a sapling 35%, Worker picking up a shovel 0%, Working 0%
- fisher (93 building-min): Fish pile full, nothing needs it right now 59%, Fish pile full, waiting for carriers 18%, No fish in range inside your border 16%, Fishing 4%, Bringing a fish to the pile 3%
- coalmine (52 building-min): Deposit thinning: mining coal 40%, Deposit worn out: finding little coal 21%, Mining coal 19%, Bringing coal out 7%, Needs bread or fish: mining stopped 5%
- ironmine (50 building-min): Deposit worn out: finding little iron ore 43%, Deposit thinning: mining iron ore 22%, Needs meat or fish: mining stopped 19%, Mining iron ore 8%, Bringing iron ore out 4%
- smelter (49 building-min): Waiting for iron ore 66%, Smelting iron 19%, Waiting for coal 9%, Stacking outside 4%, Waiting for coal and iron ore 1%
- house (87 building-min): Idle 100%
- smith (48 building-min): All tool targets met 96%, Worker picking up a hammer 1%, Forging axe 1%, Forging fishing rod 1%, Stacking outside 0%
- weaponsmith (46 building-min): Waiting for iron 46%, All weapon targets met 19%, Waiting for coal 14%, Forging sword 7%, Forging spear 4%
- barracks (46 building-min): Waiting for weapons from the weaponsmith 76%, Weapons on the way 12%, Soldier targets met 11%, Training soldiers 2%
- farm (44 building-min): Sowing a field 38%, Harvesting grain 26%, Grain pile full, nothing needs it right now 16%, Bringing grain to the pile 16%, Grain pile full, waiting for carriers 3%
- waterhut (43 building-min): Water pile full, nothing needs it right now 32%, Bringing water to the pile 26%, Fetching water 22%, Water pile full, waiting for carriers 20%, Worker on the way 0%
- mill (42 building-min): Output pile full, nothing needs it right now 50%, Output pile full, waiting for carriers 30%, Grinding flour 11%, Stacking outside 5%, Waiting for grain 3%
- bakery (42 building-min): Baking bread 39%, Output pile full, nothing needs it right now 36%, Output pile full, waiting for carriers 13%, Waiting for flour 6%, Stacking outside 5%
- pigfarm (40 building-min): Raising a pig 46%, Output pile full, nothing needs it right now 26%, Waiting for grain 12%, Output pile full, waiting for carriers 6%, Stacking outside 6%
- butcher (39 building-min): Output pile full, nothing needs it right now 48%, Waiting for pigs 22%, Butchering 13%, Output pile full, waiting for carriers 11%, Stacking outside 5%
- tower (23 building-min): Idle 98%, Soldiers on the way 2%, Free soldiers are too far away: bring one onto your land or near this building 0%

Building sites, time per state (site-min): Builders at work 9, Leveling the ground 8, Waiting for a digger 7, Waiting for a builder 5, Waiting for materials 1.

Build order (placed at min:sec, finished at): house2 0:00→1:36, quarry 0:00→2:05, wood 0:02→1:49, saw 1:50→2:32, guard 1:52→3:00, forest 2:28→3:14, fisher 2:50→3:28, guard 3:24→4:01, guard 4:02→4:46, coalmine 7:02→7:52, ironmine 9:22→9:52, smelter 9:54→10:44, house 10:46→11:14, smith 11:12→12:12, weaponsmith 12:38→13:48, barracks 13:48→14:23, farm 15:00→16:10, waterhut 15:52→17:10, mill 16:32→17:39, bakery 17:40→18:24, pigfarm 19:04→19:56, butcher 20:00→20:58, wood 20:30→21:16, quarry 21:12→21:39, house 21:12→22:11, fisher 22:30→23:07, house2 28:00→29:27, tower 35:00→36:54, house2 39:00→40:46.

Orders given: sendUnit 138, armyTarget 68, release 42, place 29, march 13, priority 5, profession 4, attack 4, weaponKeep 3, sendIn 2, armyReserve 1. None refused.

People changing jobs: new carrier 80, carrier -> soldier 53, carrier -> worker 19, carrier -> explorer 2, new soldier 2, carrier -> geologist 1, carrier -> pioneer 1.

People's orders (6029 in all, 5994 done): worker rest farm 381, worker gather farm 380, worker mine coalmine 204, worker rest waterhut 174, worker gather waterhut 173, worker rest coalmine 144, worker rest forest 142, worker gather forest 141, worker mine ironmine 134, explorer explore 115, worker rest wood 110, worker gather wood 108, worker rest quarry 95, worker gather quarry 93. None failed.

Fights and contact: attacked enemy buildings 4 times (first 25:14); took hq 25:15, guard 26:28, guard 27:15, guard 30:28; killed bow 3, sword 5; lost people bow 3, sword 2, spear 1; first saw player 2 at 16:00.

Your notes (9 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 6 field soldiers, 3 posts, carriers 15 (3 idle), coal/iron 1/1, sites 1, tips none.
- ×3 20:00–50:00 Adaptive plan: 43 field soldiers, 7 posts, carriers 14 (8 idle), coal/iron 1/1, sites 0, tips stall.
- 25:14 Attack: 16 field troops against hq 37; threshold 16.
- ×2 27:14–30:10 Attack: 9 field troops against guard 134; threshold 9.
- 40:00 Adaptive plan: 31 field soldiers, 7 posts, carriers 6 (0 idle), coal/iron 1/1, sites 1, tips stall/settlers.


Script: 1827 turns, 7.3 ms average, worst 23 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 31: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 15/1/1596/20/30 | 39/6/3020/10/70 |
| 30 | 25/4/2268/15/31 | 59/7/4186/5/84 |
| 45 | 27/4/3305/10/48 | 71/14/10255/48/88 |
| 60 | 29/4/3699/11/42 | 80/20/14972/69/105 |
| first | 5 7 8 10 - - | 7 7 16 18 38 36 |

Soldiers every 5 min: 10 14 20 14 7 15 8 19 10 10 11 11 (original game NPC: 10 10 10 4 7 5 16 38 48 56 64 69).

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
- 21 min, 20–60: stall: weaponsmith: waiting for coal 100% of the last 5 minutes.
- 16 min, 21–60: stall: barracks: waiting for weapons from the weaponsmith 100% of the last 5 minutes.
- 2 min, 23–24: stall: butcher: waiting for pigs 72% of the last 5 minutes.
- 31 min, 25–60: stall: iron mine: deposit worn out 95% of the last 5 minutes.
- 30 min, 27–56: stall: forest: no free ground to plant in range inside your border 94% of the last 5 minutes.
- 15 min, 27–43: stall: smelter: waiting for iron ore 71% of the last 5 minutes.
- 4 min, 28–41: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 4 min, 34–41: settlers: No free settlers: build houses.
- 2 min, 35–36: weapons: 4 weapons lie unused: the barracks needs free settlers (build houses).
- 1 min, 35: stall: woodcutter: log pile full, waiting for carriers 99% of the last 5 minutes.
- 1 min, 35: stall: quarry: stone pile full, waiting for carriers 94% of the last 5 minutes.
- 1 min, 58: stall: coal mine: deposit worn out 92% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 11 | 15 | 12 | 5 | 0 | 0 | 0 | 0 | 0 | 9 | 7 | 14 | 0 | 0 | 1 | 0 | 0 | 6 | 18 | 1596 | 2975 |
| 30 | 24 | 17 | 25 | 22 | 0 | 12 | 19 | 11 | 0 | 13 | 0 | 9 | 0 | 0 | 1 | 1 | 0 | 0 | 77 | 2268 | 9348 |
| 45 | 24 | 8 | 16 | 15 | 0 | 12 | 14 | 12 | 0 | 8 | 0 | 14 | 0 | 0 | 0 | 0 | 0 | 21 | 85 | 3305 | 11374 |
| 60 | 24 | 8 | 16 | 18 | 0 | 11 | 14 | 14 | 0 | 11 | 3 | 20 | 2 | 3 | 0 | 0 | 0 | 12 | 94 | 3699 | 13368 |

At the end: buildings (built+sites) house2 4, guard 4, quarry 2, wood 2, hq 1, saw 1, forest 1, fisher 1, coalmine 1, ironmine 1, smelter 1, house 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, pigfarm 1, butcher 1, goldmine 1, goldsmelter 1.
People: worker 18, carrier 16, soldier 6, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 90. Soldiers: sword 6.

Goods produced in the game: fish 252, coal 168, log 106, stone 106, water 100, grain 100, ironore 90, iron 87, plank 86, pig 86, meat 72, sword 35, spear 13, bow 10, goldore 5, gold 3, hammer 2, axe 2, pick 2, saw 1, shovel 1, rod 1.
Goods consumed in the game: fish 240, coal 157, stone 108, plank 102, ironore 87, log 86, water 86, grain 86, pig 72, iron 67, meat 61, sword 35, spear 13, bow 10, pick 6, hammer 4, axe 3, goldore 3, shovel 2, saw 1, rod 1, scythe 1.
Goods lost in the game: plank 12, stone 12, fish 7, water 6.
Goods captured in the game: plank 12, stone 12, fish 7, water 6.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (140 building-min): Idle 100%
- quarry (103 building-min): Stone pile full, nothing needs it right now 57%, Stone pile full, waiting for carriers 19%, Cutting stone 16%, Bringing stone to the pile 8%, Worker picking up a pickaxe 0%
- wood (103 building-min): Log pile full, nothing needs it right now 48%, Log pile full, waiting for carriers 24%, Felling a tree 21%, Bringing a log to the pile 6%, Worker picking up an axe 0%
- saw (58 building-min): Output pile full, nothing needs it right now 53%, Sawing planks 19%, Output pile full, waiting for carriers 15%, Waiting for logs 9%, Stacking outside 4%
- guard (150 building-min): Idle 93%, Waiting for a swordsman: train one at the barracks 6%, Soldiers on the way 1%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 64%, Planting a sapling 36%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- fisher (57 building-min): Bringing a fish to the pile 34%, Fishing 30%, Fish pile full, nothing needs it right now 20%, Fish pile full, waiting for carriers 15%, No fish in range inside your border 1%
- coalmine (56 building-min): Deposit thinning: mining coal 42%, Mining coal 27%, Deposit worn out: finding little coal 12%, Bringing coal out 8%, Needs bread or fish: mining stopped 7%
- ironmine (56 building-min): Deposit worn out: finding little iron ore 64%, Deposit thinning: mining iron ore 12%, Needs meat or fish: mining stopped 9%, Mining iron ore 6%, Bringing iron ore out 4%
- smelter (55 building-min): Waiting for iron ore 39%, Smelting iron 20%, Output pile full, nothing needs it right now 18%, Waiting for coal 17%, Stacking outside 4%
- house (55 building-min): Idle 100%
- smith (54 building-min): All tool targets met 97%, Forging axe 0%, Forging pickaxe 0%, Worker picking up a hammer 0%, Forging hammer 0%
- weaponsmith (52 building-min): Waiting for coal 56%, Waiting for iron 13%, All weapon targets met 11%, Forging sword 8%, Forging spear 3%
- barracks (51 building-min): Waiting for weapons from the weaponsmith 65%, Weapons on the way 22%, Soldier targets met 6%, Waiting for a free settler to train 6%, Training soldiers 2%
- farm (45 building-min): Grain pile full, nothing needs it right now 39%, Grain pile full, waiting for carriers 27%, Sowing a field 16%, Harvesting grain 11%, Bringing grain to the pile 6%
- waterhut (44 building-min): Water pile full, nothing needs it right now 53%, Water pile full, waiting for carriers 30%, Fetching water 9%, Bringing water to the pile 7%, Worker on the way 0%
- pigfarm (42 building-min): Raising a pig 46%, Output pile full, nothing needs it right now 23%, Output pile full, waiting for carriers 18%, Waiting for grain and water 5%, Stacking outside 5%
- butcher (41 building-min): Output pile full, nothing needs it right now 47%, Output pile full, waiting for carriers 19%, Waiting for pigs 14%, Butchering 13%, Stacking outside 5%
- goldmine (4 building-min): Deposit worn out: finding little gold ore 76%, Worker picking up a pickaxe 12%, Mining gold ore 5%, Came back empty-handed 3%, Bringing gold ore out 2%
- goldsmelter (3 building-min): Waiting for coal 75%, Smelting gold 15%, Worker picking up a hammer 4%, Waiting for coal and gold ore 3%, Stacking outside 2%

Building sites, time per state (site-min): Leveling the ground 9, Builders at work 9, Waiting for a digger 7, Waiting for a builder 4, Waiting for materials 2.

Build order (placed at min:sec, finished at): house2 0:00→1:00, quarry 0:02→1:14, wood 0:04→1:29, saw 1:30→2:08, guard 1:32→2:30, forest 1:48→2:48, fisher 2:08→3:09, coalmine 2:36→3:41, ironmine 3:08→3:57, smelter 3:58→4:48, house 4:48→5:21, smith 5:36→6:07, weaponsmith 7:06→7:50, barracks 8:16→9:23, farm 13:50→15:05, waterhut 14:24→15:40, wood 15:00→15:57, quarry 15:38→16:14, pigfarm 16:52→17:53, butcher 17:04→18:32, house2 17:42→20:07, guard 28:00→29:05, house2 34:00→36:06, guard 39:00→39:34, guard 39:34→40:31, house2 40:40→42:29, goldmine 54:58→56:15, goldsmelter 56:16→57:19.

Demolished or burned: guard (burned) 16:43, guard (burned) 19:22, guard (burned) 31:56.

Orders given: sendUnit 136, armyTarget 75, release 30, place 28, attack 6, priority 5, profession 4, march 4, weaponKeep 3, sendIn 2, armyReserve 1. Refused (order: reason, times): place: Too close to another building ×1.

People changing jobs: new carrier 90, carrier -> soldier 58, carrier -> worker 18, new soldier 7, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1.

People's orders (5976 in all, 5936 done): worker mine coalmine 314, worker rest fisher 253, worker gather fisher 253, worker rest farm 204, worker gather farm 203, worker eat coalmine 191, carrier haul fish fisher -> coalmine 191, worker mine ironmine 178, worker rest coalmine 172, worker rest forest 158, worker gather forest 157, soldier attack guard 124, explorer explore 115, worker rest quarry 108. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×10; failed: killed ×3.

Fights and contact: attacked enemy buildings 7 times (first 15:46); was attacked 2 times (first 27:42); took guard 16:42, guard 16:48, guard 17:10, guard 28:21, guard 29:24; lost guard 28:02, guard 34:07; killed bow 7, sword 23, spear 6; lost people sword 31, bow 13, spear 13; first saw player 1 at 16:00.

Your notes (10 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Adaptive plan: 10 field soldiers, 0 posts, carriers 6 (6 idle), coal/iron 0/0, sites 0, tips none.
- ×3 10:00–50:00 Adaptive plan: 5 field soldiers, 4 posts, carriers 24 (20 idle), coal/iron 1/1, sites 0, tips stall.
- ×3 15:46–29:04 Attack: 11 field troops against guard 131; threshold 9.
- 20:00 Adaptive plan: 11 field soldiers, 2 posts, carriers 2 (0 idle), coal/iron 1/1, sites 1, tips stall/army/settlers.
- 39:12 Attack: 16 field troops against hq 1; threshold 16.
- 40:00 Adaptive plan: 16 field soldiers, 4 posts, carriers 10 (1 idle), coal/iron 1/1, sites 1, tips land/stall/settlers.


Script: 1937 turns, 1.9 ms average, worst 21 ms, 0 over 0.3 s, 0 errors. Orders refused: place 1 of 29.

### Map 777: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 19/1/1604/17/33 | 32/6/2828/10/50 |
| 30 | 30/4/2807/16/46 | 35/2/2654/2/62 |
| 45 | 31/5/3913/25/34 | 17/1/1864/1/60 |
| 60 | 31/5/4302/28/31 | 17/1/1864/1/60 |
| first | 5 7 9 10 - - | 7 8 17 17 - - |

Soldiers every 5 min: 10 10 17 13 16 16 18 22 25 25 25 28 (original game NPC: 10 10 10 5 5 2 1 1 1 1 1 1).

First army orders (game min:sec): 2:18 sendIn 1 soldiers -> building 96; 8:52 armyTarget sword=5; 8:52 armyTarget spear=3; 8:52 armyReserve; 10:12 armyTarget bow=3; 10:32 armyTarget sword=6; 11:12 armyTarget spear=4; 11:52 armyTarget sword=7; 12:32 armyTarget bow=4; 15:00 march 5 soldiers -> 200,120; 16:00 attack 10 soldiers -> building 79; 16:32 armyTarget sword=5.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 5 min, 10–14: stall: fisher: no fish in range inside your border 60% of the last 5 minutes.
- 7 min, 11–17: stall: iron mine: needs meat or fish 95% of the last 5 minutes.
- 16 min, 12–54: stall: smelter: waiting for iron ore 97% of the last 5 minutes.
- 21 min, 15–55: stall: barracks: waiting for weapons from the weaponsmith 100% of the last 5 minutes.
- 10 min, 15–26: settlers: No free settlers and every bed taken: build houses.
- 5 min, 16–20: stall: weaponsmith: waiting for iron 95% of the last 5 minutes.
- 7 min, 17–33: army: Lost 6 soldiers in the last 5 minutes.
- 5 min, 21–25: stall: butcher: waiting for pigs 65% of the last 5 minutes.
- 5 min, 21–26: stall: mill: output pile full, waiting for carriers 84% of the last 5 minutes.
- 1 min, 23: stall: water hut: water pile full, waiting for carriers 60% of the last 5 minutes.
- 4 min, 24–60: stall: sawmill: output pile full, waiting for carriers 90% of the last 5 minutes.
- 35 min, 25–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 1 min, 25: stall: goldsmelter: waiting for gold ore 60% of the last 5 minutes.
- 2 min, 26–27: stall: woodcutter: log pile full, waiting for carriers 88% of the last 5 minutes.
- 29 min, 28–60: stall: iron mine: deposit worn out 94% of the last 5 minutes.
- 7 min, 32–38: stall: gold mine: deposit worn out 83% of the last 5 minutes.
- 7 min, 50–59: stall: coal mine: deposit worn out 93% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 11 | 8 | 6 | 3 | 1 | 0 | 11 | 7 | 11 | 26 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 36 | 1604 | 3138 |
| 30 | 30 | 43 | 68 | 19 | 15 | 12 | 24 | 21 | 17 | 29 | 1 | 7 | 7 | 8 | 0 | 0 | 0 | 15 | 105 | 2807 | 11716 |
| 45 | 70 | 109 | 127 | 19 | 15 | 12 | 24 | 37 | 25 | 42 | 2 | 10 | 14 | 8 | 1 | 0 | 0 | 0 | 122 | 3913 | 13385 |
| 60 | 70 | 109 | 127 | 19 | 15 | 12 | 25 | 37 | 23 | 43 | 2 | 20 | 14 | 8 | 1 | 0 | 0 | 0 | 131 | 4302 | 13811 |

At the end: buildings (built+sites) guard 5, house2 2, quarry 2, wood 2, house 2, hq 1, saw 1, forest 1, fisher 1, ironmine 1, coalmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, mill 1, bakery 1, pigfarm 1, butcher 1, goldmine 1, goldsmelter 1.
People: soldier 22, worker 20, carrier 3, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 60. Soldiers: sword 10, bow 6, spear 6.

Goods produced in the game: grain 193, water 179, coal 156, log 100, stone 96, fish 92, flour 86, pig 85, plank 80, bread 74, meat 73, ironore 69, iron 68, goldore 22, sword 19, spear 10, bow 10, gold 8, hammer 2, axe 2, pick 2, saw 1, shovel 1, rod 1.
Goods consumed in the game: grain 172, water 159, coal 124, stone 98, plank 96, log 80, fish 79, flour 74, pig 73, ironore 68, meat 61, bread 60, iron 48, sword 19, spear 10, bow 10, goldore 8, pick 6, hammer 4, axe 3, shovel 2, saw 1, rod 1, scythe 1.
Goods captured in the game: stone 79, plank 75, log 46, grain 16, flour 11, coal 11, water 5, bread 1, ironore 1, sword 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (92 building-min): Idle 100%
- quarry (100 building-min): Stone pile full, nothing needs it right now 55%, Stone pile full, waiting for carriers 20%, Cutting stone 16%, Bringing stone to the pile 9%, Worker picking up a pickaxe 0%
- wood (101 building-min): Log pile full, nothing needs it right now 54%, Log pile full, waiting for carriers 22%, Felling a tree 18%, Bringing a log to the pile 4%, Worker picking up an axe 0%
- saw (58 building-min): Output pile full, nothing needs it right now 54%, Output pile full, waiting for carriers 22%, Sawing planks 17%, Stacking outside 4%, Waiting for logs 3%
- guard (180 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 67%, Planting a sapling 33%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- fisher (57 building-min): Fish pile full, nothing needs it right now 45%, No fish in range inside your border 19%, Bringing a fish to the pile 13%, Fish pile full, waiting for carriers 12%, Fishing 12%
- ironmine (57 building-min): Deposit worn out: finding little iron ore 62%, Needs meat or fish: mining stopped 18%, Deposit thinning: mining iron ore 8%, Mining iron ore 6%, Bringing iron ore out 3%
- coalmine (56 building-min): Deposit thinning: mining coal 33%, Deposit worn out: finding little coal 27%, Mining coal 17%, Coal pile full, waiting for carriers 8%, Bringing coal out 7%
- smelter (55 building-min): Waiting for iron ore 73%, Smelting iron 16%, Output pile full, waiting for carriers 6%, Stacking outside 3%, Output pile full, nothing needs it right now 2%
- house (95 building-min): Idle 100%
- smith (53 building-min): All tool targets met 97%, Stacking outside 0%, Forging axe 0%, Forging hammer 0%, Forging pickaxe 0%
- weaponsmith (51 building-min): All weapon targets met 55%, Waiting for iron 29%, Forging sword 5%, Waiting for coal 4%, Forging bow 2%
- barracks (50 building-min): Waiting for weapons from the weaponsmith 76%, Weapons on the way 18%, Soldier targets met 4%, Training soldiers 2%
- farm (48 building-min): Grain pile full, nothing needs it right now 30%, Sowing a field 27%, Harvesting grain 20%, Grain pile full, waiting for carriers 13%, Bringing grain to the pile 10%
- waterhut (48 building-min): Water pile full, nothing needs it right now 38%, Fetching water 21%, Water pile full, waiting for carriers 21%, Bringing water to the pile 20%, Idle 0%
- mill (47 building-min): Output pile full, nothing needs it right now 53%, Output pile full, waiting for carriers 31%, Grinding flour 10%, Stacking outside 5%, Fetching from the pile 1%
- bakery (46 building-min): Output pile full, nothing needs it right now 38%, Baking bread 37%, Output pile full, waiting for carriers 17%, Stacking outside 4%, Waiting for flour 3%
- pigfarm (44 building-min): Raising a pig 44%, Output pile full, nothing needs it right now 32%, Output pile full, waiting for carriers 16%, Stacking outside 5%, Waiting for grain 1%
- butcher (43 building-min): Output pile full, nothing needs it right now 53%, Waiting for pigs 19%, Butchering 13%, Output pile full, waiting for carriers 10%, Stacking outside 4%
- goldmine (40 building-min): Gold ore pile full, nothing needs it right now 44%, Deposit worn out: finding little gold ore 24%, Gold ore pile full, waiting for carriers 23%, Deposit thinning: mining gold ore 4%, Mining gold ore 2%
- goldsmelter (39 building-min): Output pile full, nothing needs it right now 69%, Output pile full, waiting for carriers 13%, Waiting for gold ore 12%, Smelting gold 3%, Waiting for coal and gold ore 1%

Building sites, time per state (site-min): Builders at work 8, Leveling the ground 7, Waiting for a digger 5, Waiting for a builder 5.

Build order (placed at min:sec, finished at): house2 0:00→0:54, quarry 0:00→1:22, wood 0:02→1:19, saw 1:20→2:00, guard 1:22→2:16, forest 1:46→2:33, fisher 2:12→2:50, ironmine 2:36→3:21, coalmine 2:56→3:36, smelter 4:02→4:47, house 4:48→5:23, smith 5:56→6:39, weaponsmith 7:36→8:44, barracks 8:50→9:48, farm 10:20→11:32, waterhut 11:22→12:20, mill 12:14→12:53, bakery 13:24→14:19, pigfarm 14:56→15:59, butcher 16:02→16:55, wood 16:40→17:29, quarry 17:18→18:11, house 18:04→19:30, goldmine 18:36→20:05, goldsmelter 20:06→21:02, house2 24:42→26:51.

Demolished or burned: guard (burned) 16:58.

Orders given: sendUnit 140, armyTarget 64, release 45, place 26, march 13, attack 6, priority 5, profession 4, weaponKeep 3, sendIn 1, armyReserve 1. None refused.

People changing jobs: new carrier 60, carrier -> soldier 39, carrier -> worker 20, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1, new soldier 1.

People's orders (6253 in all, 6219 done): worker rest farm 389, worker gather farm 388, worker mine coalmine 226, worker rest waterhut 180, worker gather waterhut 179, worker rest coalmine 159, worker rest forest 147, worker gather forest 146, worker mine ironmine 146, explorer explore 115, worker rest wood 102, worker gather wood 100, worker rest quarry 98, worker gather quarry 96. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×2.

Failed path searches (who (task) why: times): pioneer (claim 1) cut-off 2.

Fights and contact: attacked enemy buildings 6 times (first 16:00); took guard 16:57, hq 24:09, guard 27:47, guard 28:16, guard 29:12, guard 32:26; killed bow 3, sword 16; lost people sword 10, bow 7, spear 4; first saw player 2 at 16:00.

Your notes (10 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Adaptive plan: 10 field soldiers, 0 posts, carriers 6 (6 idle), coal/iron 0/0, sites 0, tips none.
- ×4 10:00–50:00 Adaptive plan: 19 field soldiers, 5 posts, carriers 6 (4 idle), coal/iron 1/1, sites 0, tips stall.
- ×3 16:00–32:04 Attack: 8 field troops against guard 149; threshold 8.
- 20:00 Adaptive plan: 11 field soldiers, 1 posts, carriers 16 (0 idle), coal/iron 1/1, sites 1, tips stall/army/settlers.
- 24:08 Attack: 15 field troops against hq 37; threshold 15.


Script: 1881 turns, 0.9 ms average, worst 18 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 11/3/2036/10/30 | 37/6/2797/10/60 |
| 30 | 20/3/2463/9/40 | 64/10/4636/17/78 |
| 45 | 25/3/2857/5/28 | 75/17/10315/61/96 |
| 60 | 26/3/2938/9/36 | 82/23/14768/74/99 |
| first | 18 20 21 22 - - | 8 9 15 15 22 33 |

Soldiers every 5 min: 10 10 10 5 11 9 8 13 5 5 6 9 (original game NPC: 10 10 10 10 11 17 28 46 61 67 72 74).

First army orders (game min:sec): 2:42 sendIn 1 soldiers -> building 101; 15:00 march 5 soldiers -> 40,120; 20:48 armyTarget sword=7; 20:48 armyTarget spear=4; 20:48 armyTarget bow=3; 20:48 armyReserve; 25:08 armyTarget sword=9; 25:08 armyTarget spear=5; 25:08 armyTarget bow=4; 28:58 attack 9 soldiers -> building 137; 29:55 attack 1 soldiers -> building 137; 30:36 attack 1 soldiers -> building 137.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 6 min, 6–20: army: Lost 5 soldiers in the last 5 minutes, and no barracks to train new ones.
- 6 min, 12–17: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 1 min, 18: settlers: No free settlers and every bed taken: build houses.
- 1 min, 20: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 11 min, 21–53: army: Lost 8 soldiers in the last 5 minutes.
- 2 min, 23–24: stall: weaponsmith: waiting for coal 83% of the last 5 minutes.
- 11 min, 24–54: stall: barracks: waiting for weapons from the weaponsmith 100% of the last 5 minutes.
- 20 min, 24–60: stall: smelter: waiting for coal 88% of the last 5 minutes.
- 28 min, 25–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 20 min, 29–58: stall: weaponsmith: waiting for iron 88% of the last 5 minutes.
- 5 min, 31–52: stall: iron mine: deposit worn out 94% of the last 5 minutes.
- 18 min, 36–60: stall: coal mine: deposit worn out 91% of the last 5 minutes.
- 2 min, 44–45: stall: quarry: stone pile full, waiting for carriers 100% of the last 5 minutes.
- 3 min, 44–46: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 1 min, 44: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 3 min, 44–46: settlers: No free settlers: build houses.
- 1 min, 46: weapons: 4 weapons lie unused: the barracks needs free settlers (build houses).
- 1 min, 46: stall: iron mine: iron ore pile full, waiting for carriers 100% of the last 5 minutes.
- 1 min, 47: stall: smelter: waiting for coal and iron ore 69% of the last 5 minutes.
- 4 min, 57–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 16 | 40 | 2036 | 3865 |
| 30 | 22 | 10 | 18 | 4 | 0 | 0 | 0 | 0 | 0 | 12 | 10 | 6 | 0 | 0 | 0 | 0 | 0 | 12 | 33 | 2463 | 8516 |
| 45 | 20 | 12 | 16 | 20 | 0 | 12 | 14 | 14 | 0 | 11 | 8 | 4 | 0 | 0 | 3 | 0 | 1 | 0 | 103 | 2857 | 8811 |
| 60 | 24 | 8 | 16 | 24 | 0 | 12 | 14 | 14 | 0 | 10 | 13 | 4 | 0 | 0 | 1 | 0 | 0 | 7 | 100 | 2938 | 8847 |

At the end: buildings (built+sites) house2 3, guard 3, quarry 2, wood 2, fisher 2, hq 1, saw 1, forest 1, ironmine 1, look 1, coalmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, pigfarm 1, butcher 1.
People: worker 18, carrier 10, soldier 5, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 60. Soldiers: sword 5.

Goods produced in the game: fish 207, coal 100, stone 93, log 92, plank 72, water 69, grain 69, ironore 60, pig 55, iron 47, meat 41, sword 25, spear 6, bow 4, axe 2, rod 2, pick 1, saw 1, shovel 1, hammer 1.
Goods consumed in the game: fish 189, stone 95, coal 90, plank 88, log 72, water 55, grain 55, ironore 47, iron 43, pig 41, meat 29, sword 24, spear 6, pick 5, bow 4, axe 3, hammer 3, shovel 2, rod 2, saw 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (114 building-min): Idle 100%
- quarry (102 building-min): Stone pile full, nothing needs it right now 62%, Cutting stone 15%, Stone pile full, waiting for carriers 15%, Bringing stone to the pile 8%, Worker picking up a pickaxe 0%
- wood (102 building-min): Log pile full, nothing needs it right now 61%, Felling a tree 18%, Log pile full, waiting for carriers 16%, Bringing a log to the pile 5%, Worker picking up an axe 0%
- saw (58 building-min): Output pile full, nothing needs it right now 67%, Sawing planks 16%, Output pile full, waiting for carriers 13%, Stacking outside 3%, Fetching from the pile 0%
- guard (170 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 62%, Planting a sapling 37%, Worker picking up a shovel 0%
- fisher (84 building-min): Fish pile full, nothing needs it right now 47%, Bringing a fish to the pile 19%, Fish pile full, waiting for carriers 17%, Fishing 17%, Worker picking up a fishing rod 1%
- ironmine (55 building-min): Deposit worn out: finding little iron ore 39%, Iron ore pile full, nothing needs it right now 31%, Iron ore pile full, waiting for carriers 12%, Needs meat or fish: mining stopped 4%, Deposit thinning: mining iron ore 4%
- look (44 building-min): Scout on watch 100%, Idle 0%, Working 0%
- coalmine (43 building-min): Deposit worn out: finding little coal 58%, Deposit thinning: mining coal 15%, Mining coal 12%, Bringing coal out 6%, Needs bread or fish: mining stopped 3%
- smelter (42 building-min): Waiting for coal 70%, Smelting iron 14%, Waiting for coal and iron ore 8%, Stacking outside 3%, Waiting for iron ore 2%
- smith (40 building-min): All tool targets met 95%, Waiting for coal 2%, Stacking outside 1%, Forging axe 1%, Forging fishing rod 1%
- weaponsmith (39 building-min): Waiting for iron 78%, Forging sword 8%, Waiting for coal 7%, Stacking outside 2%, Forging spear 2%
- barracks (38 building-min): Waiting for weapons from the weaponsmith 72%, Weapons on the way 18%, Waiting for a free settler to train 8%, Training soldiers 2%
- farm (30 building-min): Grain pile full, nothing needs it right now 46%, Grain pile full, waiting for carriers 23%, Sowing a field 15%, Harvesting grain 11%, Bringing grain to the pile 6%
- waterhut (29 building-min): Water pile full, nothing needs it right now 43%, Water pile full, waiting for carriers 24%, Bringing water to the pile 18%, Fetching water 15%, Worker on the way 0%
- pigfarm (29 building-min): Raising a pig 44%, Output pile full, nothing needs it right now 29%, Output pile full, waiting for carriers 21%, Stacking outside 5%, Fetching from the pile 1%
- butcher (28 building-min): Output pile full, nothing needs it right now 46%, Output pile full, waiting for carriers 28%, Butchering 11%, Waiting for pigs 10%, Stacking outside 4%

Building sites, time per state (site-min): Builders at work 7, Waiting for a digger 7, Leveling the ground 7, Waiting for a builder 5.

Build order (placed at min:sec, finished at): house2 0:00→0:50, quarry 0:02→1:11, wood 0:04→1:23, saw 1:24→2:04, guard 1:26→2:41, forest 1:28→2:57, fisher 2:06→3:12, guard 2:42→3:29, guard 3:30→4:04, ironmine 4:28→5:01, look 15:00→15:52, wood 15:02→16:18, quarry 15:22→16:34, coalmine 16:08→17:04, smelter 17:06→17:46, house2 17:46→19:21, smith 18:20→19:52, weaponsmith 19:52→20:45, barracks 20:46→21:45, farm 29:28→30:29, waterhut 29:46→30:57, pigfarm 30:38→31:28, butcher 31:16→32:10, fisher 31:44→32:36, house2 44:00→46:07.

Orders given: sendUnit 146, armyTarget 42, place 25, attack 8, priority 5, profession 4, weaponKeep 3, release 2, sendIn 1, march 1, armyReserve 1. Refused (order: reason, times): place: Too close to another building ×1.

People changing jobs: new carrier 60, carrier -> soldier 34, carrier -> worker 18, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1.

People's orders (4262 in all, 4235 done): worker mine coalmine 226, worker rest fisher 208, worker gather fisher 207, carrier haul fish fisher -> coalmine 158, worker rest forest 155, worker gather forest 154, worker eat coalmine 154, worker rest farm 141, worker gather farm 140, explorer explore 115, worker mine ironmine 112, worker rest coalmine 102, worker rest quarry 95, worker rest wood 94. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×4; failed: killed ×1.

Failed path searches (who (task) why: times): pioneer (claim 0) cut-off 15, pioneer (claim 1) cut-off 1.

Fights and contact: attacked enemy buildings 5 times (first 28:58); killed bow 3, sword 10, spear 4; lost people sword 22, bow 7, spear 6; first saw player 1 at 16:00.

Your notes (9 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 6 field soldiers, 3 posts, carriers 16 (16 idle), coal/iron 0/1, sites 0, tips none.
- 20:00 Adaptive plan: 1 field soldiers, 3 posts, carriers 30 (13 idle), coal/iron 1/1, sites 1, tips army/timing.
- ×2 28:58–39:26 Attack: 8 field troops against guard 286; threshold 8.
- ×3 30:00–50:00 Adaptive plan: 1 field soldiers, 3 posts, carriers 14 (12 idle), coal/iron 1/1, sites 0, tips stall.
- 47:54 Attack: 8 field troops against tower 353; threshold 8.


Script: 1868 turns, 5.6 ms average, worst 25 ms, 0 over 0.3 s, 0 errors. Orders refused: place 1 of 26.

### Map 4242: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 11/3/2042/10/30 | 30/6/2691/10/50 |
| 30 | 20/3/2447/14/43 | 44/6/3129/5/60 |
| 45 | 22/5/3064/23/31 | 36/4/2652/3/60 |
| 60 | 22/5/3064/24/30 | 36/4/2652/3/60 |
| first | 21 23 24 25 - - | 10 11 27 31 - - |

Soldiers every 5 min: 10 10 10 7 7 14 21 21 23 23 23 24 (original game NPC: 10 10 10 5 5 5 5 3 3 3 3 3).

First army orders (game min:sec): 2:34 sendIn 1 soldiers -> building 103; 15:00 march 5 soldiers -> 200,120; 23:16 armyTarget sword=7; 23:16 armyTarget spear=4; 23:16 armyTarget bow=3; 23:16 armyReserve; 25:16 armyTarget sword=9; 25:16 armyTarget spear=5; 25:16 armyTarget bow=4; 34:52 attack 16 soldiers -> building 37; 34:56 march 5 soldiers -> 218,102; 35:46 attack 10 soldiers -> building 140.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 6–7: army: Lost 4 soldiers in the last 5 minutes, and no barracks to train new ones.
- 46 min, 9–60: stall: iron mine: deposit worn out 83% of the last 5 minutes.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 43 min, 15–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 2 min, 20–21: settlers: No free settlers and every bed taken: build houses.
- 4 min, 20–23: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 1 min, 26: stall: weaponsmith: waiting for coal 76% of the last 5 minutes.
- 13 min, 26–40: stall: smelter: waiting for iron ore 81% of the last 5 minutes.
- 21 min, 27–60: stall: barracks: waiting for weapons from the weaponsmith 93% of the last 5 minutes.
- 2 min, 34–36: stall: weaponsmith: waiting for iron 85% of the last 5 minutes.
- 15 min, 40–60: weapons: 8 weapons lie unused: the barracks needs free settlers (build houses).
- 12 min, 49–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 17 | 0 | 0 | 0 | 0 | 0 | 0 | 7 | 0 | 0 | 0 | 0 | 0 | 0 | 14 | 38 | 2042 | 3728 |
| 30 | 24 | 8 | 16 | 13 | 0 | 0 | 0 | 0 | 0 | 21 | 2 | 8 | 0 | 0 | 0 | 0 | 0 | 13 | 54 | 2447 | 8316 |
| 45 | 40 | 54 | 55 | 14 | 0 | 0 | 0 | 1 | 0 | 31 | 1 | 20 | 0 | 0 | 6 | 1 | 1 | 6 | 61 | 3064 | 12236 |
| 60 | 40 | 54 | 55 | 16 | 0 | 0 | 0 | 1 | 0 | 32 | 14 | 26 | 0 | 0 | 6 | 1 | 1 | 8 | 78 | 3064 | 12236 |

At the end: buildings (built+sites) guard 5, house2 2, quarry 2, wood 2, hq 1, saw 1, forest 1, fisher 1, ironmine 1, look 1, coalmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1.
People: soldier 18, worker 13, carrier 9, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 40. Soldiers: sword 8, bow 5, spear 5.

Goods produced in the game: fish 273, coal 98, log 65, stone 65, ironore 60, iron 46, plank 45, sword 8, spear 6, bow 6, pick 1, axe 1, saw 1, hammer 1, shovel 1, rod 1.
Goods consumed in the game: fish 263, coal 72, stone 67, plank 61, ironore 46, log 45, iron 26, sword 8, bow 6, spear 6, pick 5, hammer 3, axe 2, shovel 2, saw 1, rod 1.
Goods captured in the game: plank 29, stone 20, log 16, coal 6, iron 6, sword 6, grain 1, bow 1, spear 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (97 building-min): Idle 100%
- quarry (102 building-min): Stone pile full, nothing needs it right now 82%, Cutting stone 11%, Bringing stone to the pile 6%, Stone pile full, waiting for carriers 1%, Worker picking up a pickaxe 0%
- wood (102 building-min): Log pile full, nothing needs it right now 83%, Felling a tree 12%, Bringing a log to the pile 3%, Log pile full, waiting for carriers 2%, Worker picking up an axe 0%
- saw (58 building-min): Output pile full, nothing needs it right now 87%, Sawing planks 10%, Stacking outside 2%, Fetching from the pile 0%, Worker picking up a saw 0%
- guard (213 building-min): Idle 100%, Soldiers on the way 0%
- forest (57 building-min): No free ground to plant in range inside your border 75%, Planting a sapling 25%, Worker picking up a shovel 0%, Working 0%
- fisher (57 building-min): Fish pile full, nothing needs it right now 49%, Fishing 26%, Bringing a fish to the pile 22%, Fish pile full, waiting for carriers 2%, Worker picking up a fishing rod 0%
- ironmine (53 building-min): Deposit worn out: finding little iron ore 82%, Iron ore pile full, nothing needs it right now 9%, Bringing iron ore out 3%, Came back empty-handed 2%, Fetching food 2%
- look (44 building-min): Scout on watch 100%, Working 0%
- coalmine (40 building-min): Coal pile full, nothing needs it right now 43%, Mining coal 24%, Deposit thinning: mining coal 24%, Bringing coal out 7%, Fetching food 1%
- smelter (39 building-min): Waiting for iron ore 51%, Output pile full, nothing needs it right now 30%, Smelting iron 15%, Stacking outside 3%, Worker picking up a hammer 1%
- smith (38 building-min): All tool targets met 95%, Waiting for coal 2%, Worker picking up a hammer 1%, Stacking outside 0%, Forging axe 0%
- weaponsmith (37 building-min): All weapon targets met 59%, Waiting for iron 24%, Waiting for coal 7%, Forging sword 3%, Forging bow 2%
- barracks (36 building-min): Waiting for weapons from the weaponsmith 84%, Weapons on the way 15%, Training soldiers 0%, Soldier targets met 0%, Idle 0%

Building sites, time per state (site-min): Builders at work 5, Leveling the ground 4, Waiting for a digger 4, Waiting for a builder 4, Waiting for materials 1.

Build order (placed at min:sec, finished at): house2 0:00→1:07, quarry 0:02→1:24, wood 0:04→1:37, saw 1:38→2:12, guard 1:40→2:33, forest 1:52→2:47, fisher 2:12→3:01, guard 2:34→3:20, guard 3:22→4:04, ironmine 6:04→6:45, look 15:00→15:58, wood 15:02→16:25, quarry 15:38→16:41, coalmine 19:08→19:53, smelter 19:54→20:36, house2 20:08→21:51, smith 21:16→22:15, weaponsmith 22:16→23:13, barracks 23:14→24:21.

Orders given: sendUnit 165, armyTarget 22, place 19, release 14, priority 5, profession 4, march 3, weaponKeep 3, attack 3, sendIn 1, armyReserve 1. Refused (order: reason, times): place: Too close to another building ×1.

People changing jobs: new carrier 40, carrier -> soldier 20, carrier -> worker 13, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1.

People's orders (3168 in all, 3147 done): worker rest fisher 274, worker gather fisher 273, worker mine ironmine 228, carrier haul fish fisher -> ironmine 186, worker eat ironmine 182, worker mine coalmine 151, worker rest forest 123, worker gather forest 122, explorer explore 115, worker rest coalmine 99, worker eat coalmine 81, carrier haul fish fisher -> coalmine 79, worker rest quarry 67, worker rest wood 67. None failed.

Failed path searches (who (task) why: times): pioneer (claim 0) cut-off 41, pioneer (claim 1) cut-off 2.

Fights and contact: attacked enemy buildings 3 times (first 34:52); took hq 34:53, guard 36:00, guard 40:54; killed bow 3, sword 4; lost people bow 4, sword 1, spear 1; first saw player 2 at 16:00.

Your notes (8 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Adaptive plan: 10 field soldiers, 0 posts, carriers 6 (6 idle), coal/iron 0/0, sites 0, tips none.
- ×2 10:00–30:00 Adaptive plan: 10 field soldiers, 3 posts, carriers 22 (13 idle), coal/iron 1/1, sites 0, tips stall.
- 20:00 Adaptive plan: 3 field soldiers, 3 posts, carriers 12 (0 idle), coal/iron 1/1, sites 1, tips stall/settlers/timing.
- 34:52 Attack: 16 field troops against hq 37; threshold 16.
- 40:00 Adaptive plan: 16 field soldiers, 4 posts, carriers 12 (8 idle), coal/iron 1/1, sites 0, tips weapons/stall.
- 40:54 Attack: 8 field troops against guard 135; threshold 8.
- 50:00 Adaptive plan: 17 field soldiers, 5 posts, carriers 10 (7 idle), coal/iron 1/1, sites 0, tips land/weapons/stall.


Script: 1830 turns, 4.2 ms average, worst 15 ms, 0 over 0.3 s, 0 errors. Orders refused: place 1 of 20.

### Map 4242: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 17/3/2194/13/37 | 23/6/2564/10/40 |
| 30 | 23/4/2906/29/37 | 22/4/2363/3/40 |
| 45 | 23/4/3779/26/37 | 9/3/1599/1/40 |
| 60 | 23/4/4168/26/37 | 9/3/1599/1/40 |
| first | 8 9 11 12 - - | 34 34 - - - - |

Soldiers every 5 min: 10 10 13 22 22 29 29 26 26 26 26 26 (original game NPC: 10 10 10 3 3 3 3 1 1 1 1 1).

First army orders (game min:sec): 2:50 sendIn 1 soldiers -> building 117; 11:06 armyReserve; 11:26 armyTarget sword=5; 11:26 armyTarget spear=3; 15:00 march 5 soldiers -> 40,120; 15:06 armyTarget sword=6; 15:06 armyTarget bow=3; 15:26 armyTarget sword=7; 15:26 armyTarget spear=4; 16:06 armyTarget bow=4; 16:14 attack 9 soldiers -> building 131; 16:26 armyTarget sword=6.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 6–7: army: Lost 4 soldiers in the last 5 minutes, and no barracks to train new ones.
- 5 min, 11–15: stall: smith: waiting for coal 55% of the last 5 minutes.
- 32 min, 13–60: stall: weaponsmith: waiting for coal 100% of the last 5 minutes.
- 22 min, 14–39: stall: barracks: waiting for weapons from the weaponsmith 100% of the last 5 minutes.
- 6 min, 17–22: stall: smelter: waiting for coal 81% of the last 5 minutes.
- 37 min, 20–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 7 min, 20–26: settlers: No free settlers and every bed taken: build houses.
- 1 min, 23: stall: gold mine: needs fish or bread or meat 81% of the last 5 minutes.
- 3 min, 24–26: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 1 min, 26: stall: iron mine: iron ore pile full, waiting for carriers 100% of the last 5 minutes.
- 1 min, 27: stall: sawmill: waiting for logs 96% of the last 5 minutes.
- 22 min, 27–60: stall: coal mine: needs bread or fish 100% of the last 5 minutes.
- 1 min, 28: stall: goldsmelter: waiting for coal and gold ore 81% of the last 5 minutes.
- 5 min, 29–33: stall: gold mine: deposit worn out 92% of the last 5 minutes.
- 3 min, 31–33: stall: goldsmelter: waiting for coal 87% of the last 5 minutes.
- 3 min, 31–33: stall: iron mine: deposit worn out 93% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 7 | 4 | 17 | 0 | 0 | 0 | 1 | 0 | 12 | 39 | 2194 | 4211 |
| 30 | 24 | 11 | 20 | 15 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 13 | 9 | 0 | 0 | 0 | 0 | 11 | 53 | 2906 | 9972 |
| 45 | 24 | 48 | 80 | 15 | 8 | 0 | 6 | 8 | 14 | 12 | 9 | 20 | 14 | 8 | 0 | 0 | 0 | 13 | 80 | 3779 | 10542 |
| 60 | 24 | 48 | 80 | 16 | 8 | 0 | 6 | 8 | 14 | 12 | 14 | 20 | 14 | 8 | 0 | 0 | 0 | 15 | 86 | 4168 | 10876 |

At the end: buildings (built+sites) guard 4, house2 2, quarry 2, wood 2, hq 1, saw 1, forest 1, fisher 1, ironmine 1, coalmine 1, smelter 1, house 1, smith 1, weaponsmith 1, barracks 1, goldmine 1, goldsmelter 1.
People: soldier 21, carrier 15, worker 14, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 50. Soldiers: sword 11, bow 4, spear 6.

Goods produced in the game: fish 240, coal 102, log 75, stone 71, ironore 65, plank 55, iron 51, goldore 22, sword 14, gold 8, spear 6, bow 3, hammer 2, pick 2, saw 1, shovel 1, rod 1, axe 1.
Goods consumed in the game: fish 230, coal 90, stone 73, plank 71, log 55, ironore 51, iron 31, sword 14, goldore 8, pick 6, spear 6, hammer 4, bow 3, axe 2, shovel 2, saw 1, rod 1.
Goods captured in the game: stone 47, plank 25, flour 14, grain 8, bread 8, water 6, hammer 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (93 building-min): Idle 100%
- quarry (103 building-min): Stone pile full, nothing needs it right now 72%, Stone pile full, waiting for carriers 11%, Cutting stone 11%, Bringing stone to the pile 5%, Worker picking up a pickaxe 0%
- wood (103 building-min): Log pile full, nothing needs it right now 67%, Log pile full, waiting for carriers 15%, Felling a tree 14%, Bringing a log to the pile 4%, Worker picking up an axe 0%
- saw (58 building-min): Output pile full, nothing needs it right now 73%, Sawing planks 12%, Waiting for logs 9%, Stacking outside 3%, Output pile full, waiting for carriers 2%
- guard (211 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 72%, Planting a sapling 28%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- fisher (57 building-min): Fish pile full, nothing needs it right now 41%, Fishing 25%, Bringing a fish to the pile 22%, Fish pile full, waiting for carriers 12%, Worker picking up a fishing rod 0%
- ironmine (55 building-min): Deposit worn out: finding little iron ore 36%, Iron ore pile full, nothing needs it right now 25%, Deposit thinning: mining iron ore 14%, Iron ore pile full, waiting for carriers 12%, Mining iron ore 7%
- coalmine (53 building-min): Needs bread or fish: mining stopped 58%, Mining coal 29%, Deposit thinning: mining coal 6%, Bringing coal out 5%, Fetching food 1%
- smelter (52 building-min): Output pile full, nothing needs it right now 53%, Waiting for coal 18%, Smelting iron 12%, Waiting for coal and iron ore 8%, Waiting for iron ore 6%
- house (51 building-min): Idle 100%
- smith (51 building-min): All tool targets met 90%, Waiting for coal 7%, Forging hammer 0%, Forging pickaxe 0%, Stacking outside 0%
- weaponsmith (49 building-min): Waiting for coal 72%, All weapon targets met 15%, Waiting for iron 5%, Forging sword 4%, Forging spear 2%
- barracks (48 building-min): Waiting for weapons from the weaponsmith 92%, Weapons on the way 6%, Soldier targets met 1%, Training soldiers 1%
- goldmine (39 building-min): Gold ore pile full, nothing needs it right now 53%, Deposit worn out: finding little gold ore 36%, Needs fish or bread or meat: mining stopped 8%, Bringing gold ore out 1%, Came back empty-handed 1%
- goldsmelter (37 building-min): Output pile full, nothing needs it right now 68%, Waiting for coal 16%, Waiting for coal and gold ore 11%, Smelting gold 3%, Idle 1%

Building sites, time per state (site-min): Waiting for a digger 6, Builders at work 6, Leveling the ground 5, Waiting for a builder 4, Waiting for materials 2.

Build order (placed at min:sec, finished at): house2 0:00→1:06, quarry 0:00→1:22, wood 0:02→1:35, saw 1:36→2:13, guard 1:38→2:50, forest 1:52→3:05, fisher 2:14→3:30, guard 2:52→3:56, guard 3:58→4:50, ironmine 4:16→5:20, coalmine 6:14→6:43, smelter 6:44→7:43, house 7:44→8:33, smith 8:14→8:59, weaponsmith 9:52→10:46, barracks 11:04→11:56, wood 15:00→15:34, quarry 15:02→16:01, goldmine 19:52→20:50, goldsmelter 20:50→22:31, house2 23:26→26:17.

Orders given: sendUnit 136, armyTarget 29, place 21, release 8, priority 5, attack 5, profession 4, weaponKeep 3, march 3, sendIn 1, armyReserve 1. None refused.

People changing jobs: new carrier 50, carrier -> soldier 23, carrier -> worker 14, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1, new soldier 1.

People's orders (3339 in all, 3317 done): worker rest fisher 241, worker gather fisher 240, worker mine ironmine 178, worker mine coalmine 151, worker eat ironmine 128, carrier haul fish fisher -> ironmine 126, worker rest forest 122, worker gather forest 121, explorer explore 115, worker rest coalmine 105, carrier haul fish fisher -> coalmine 78, worker eat coalmine 78, worker rest wood 77, worker gather wood 75. None failed.

Failed path searches (who (task) why: times): pioneer (claim 1) cut-off 1.

Fights and contact: attacked enemy buildings 5 times (first 16:14); took guard 17:30, hq 32:51; killed bow 3, sword 6; lost people sword 5, bow 2; first saw player 1 at 16:00.

Your notes (10 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 6 field soldiers, 3 posts, carriers 23 (14 idle), coal/iron 1/1, sites 1, tips none.
- ×3 16:14–36:03 Attack: 13 field troops against guard 79; threshold 8.
- 20:00 Adaptive plan: 17 field soldiers, 4 posts, carriers 4 (0 idle), coal/iron 1/1, sites 1, tips stall/settlers.
- ×3 30:00–50:00 Adaptive plan: 21 field soldiers, 4 posts, carriers 15 (15 idle), coal/iron 1/1, sites 0, tips stall.
- 32:44 Attack: 15 field troops against hq 1; threshold 15.


Script: 1836 turns, 1.1 ms average, worst 16 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 16/2/1941/27/33 | 22/6/2997/10/40 |
| 30 | 29/4/3113/27/33 | 39/4/2716/5/67 |
| 45 | 28/2/2644/10/48 | 64/8/5943/17/106 |
| 60 | 30/4/3693/12/37 | 73/16/10572/60/101 |
| first | 6 9 10 11 - - | 8 8 22 23 44 43 |

Soldiers every 5 min: 10 10 27 27 28 27 24 16 10 14 8 12 (original game NPC: 10 10 10 5 5 5 3 7 17 38 45 60).

First army orders (game min:sec): 2:40 sendIn 1 soldiers -> building 102; 9:30 armyTarget sword=5; 9:30 armyTarget spear=3; 9:30 armyReserve; 10:50 armyTarget sword=6; 10:50 armyTarget bow=3; 11:10 armyTarget spear=4; 11:30 armyTarget sword=7; 11:50 armyTarget bow=4; 12:10 armyTarget sword=8; 12:30 armyTarget spear=5; 12:50 armyTarget sword=9.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 14 min, 6–32: settlers: No free settlers and every bed taken: build houses.
- 9 min, 14–24: stall: smelter: waiting for coal 100% of the last 5 minutes.
- 7 min, 18–26: stall: barracks: waiting for weapons from the weaponsmith 94% of the last 5 minutes.
- 5 min, 19–58: stall: iron mine: deposit worn out 93% of the last 5 minutes.
- 14 min, 20–33: stall: smith: waiting for coal 100% of the last 5 minutes.
- 5 min, 22–49: stall: weaponsmith: waiting for iron 94% of the last 5 minutes.
- 2 min, 22–23: stall: pig farm: waiting for grain and water 94% of the last 5 minutes.
- 17 min, 24–45: stall: iron mine: needs meat or fish 100% of the last 5 minutes.
- 6 min, 27–55: stall: fisher: no fish in range inside your border 93% of the last 5 minutes.
- 2 min, 30–31: stall: butcher: waiting for pigs 100% of the last 5 minutes.
- 8 min, 32–48: stall: smelter: waiting for iron ore 97% of the last 5 minutes.
- 13 min, 33–55: army: Lost 6 soldiers in the last 5 minutes.
- 12 min, 33–44: settlers: No free settlers: build houses.
- 8 min, 34–41: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 9 min, 36–44: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 17 min, 37–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 8 min, 42–49: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 16 min, 45–60: stall: smith: waiting for iron 100% of the last 5 minutes.
- 7 min, 50–60: stall: coal mine: deposit worn out 94% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 9 | 15 | 12 | 5 | 0 | 0 | 0 | 0 | 0 | 11 | 9 | 5 | 0 | 0 | 0 | 0 | 0 | 9 | 16 | 1941 | 3659 |
| 30 | 20 | 8 | 9 | 4 | 4 | 0 | 20 | 22 | 8 | 10 | 0 | 3 | 1 | 0 | 2 | 1 | 1 | 0 | 69 | 3113 | 8623 |
| 45 | 20 | 14 | 22 | 7 | 0 | 0 | 19 | 19 | 10 | 30 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 1 | 66 | 2644 | 10302 |
| 60 | 24 | 14 | 28 | 14 | 13 | 14 | 19 | 21 | 14 | 17 | 11 | 1 | 14 | 8 | 0 | 0 | 0 | 0 | 117 | 3693 | 12315 |

At the end: buildings (built+sites) guard 4, house2 3, quarry 2, wood 2, hq 1, saw 1, forest 1, fisher 1, ironmine 1, coalmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, pigfarm 1, mill 1, bakery 1, house 1, butcher 1, goldmine 1, goldsmelter 1.
People: worker 20, carrier 9, soldier 7, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 70. Soldiers: sword 6, bow 1.

Goods produced in the game: grain 140, fish 133, coal 130, water 124, log 108, stone 106, plank 88, flour 68, ironore 64, iron 53, bread 53, pig 50, meat 37, sword 26, goldore 22, bow 10, gold 8, spear 7, hammer 2, axe 2, pick 2, saw 1, shovel 1, rod 1.
Goods consumed in the game: fish 125, grain 119, coal 113, stone 110, water 105, plank 104, log 88, flour 54, ironore 53, iron 52, bread 40, pig 37, sword 26, meat 23, bow 10, goldore 8, spear 7, pick 6, hammer 4, axe 3, shovel 2, saw 1, rod 1, scythe 1.
Goods captured in the game: stone 10, plank 3.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (127 building-min): Idle 100%
- quarry (102 building-min): No stone in range inside your border 30%, Stone pile full, waiting for carriers 29%, Cutting stone 17%, Stone pile full, nothing needs it right now 16%, Bringing stone to the pile 8%
- wood (102 building-min): Log pile full, waiting for carriers 46%, Log pile full, nothing needs it right now 26%, Felling a tree 21%, Bringing a log to the pile 6%, Worker picking up an axe 1%
- saw (58 building-min): Output pile full, nothing needs it right now 33%, Output pile full, waiting for carriers 32%, Sawing planks 19%, Waiting for logs 12%, Stacking outside 4%
- guard (185 building-min): Idle 96%, Waiting for a swordsman: train one at the barracks 3%, Soldiers on the way 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 65%, Planting a sapling 35%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- fisher (57 building-min): No fish in range inside your border 67%, Fishing 14%, Bringing a fish to the pile 11%, No way back to the building 5%, Fish pile full, nothing needs it right now 1%
- ironmine (55 building-min): Needs meat or fish: mining stopped 50%, Deposit worn out: finding little iron ore 30%, Deposit thinning: mining iron ore 11%, Mining iron ore 5%, Bringing iron ore out 3%
- coalmine (55 building-min): Deposit thinning: mining coal 31%, Deposit worn out: finding little coal 26%, Needs bread or fish: mining stopped 17%, Mining coal 14%, Bringing coal out 6%
- smelter (54 building-min): Waiting for iron ore 45%, Waiting for coal 36%, Smelting iron 13%, Stacking outside 2%, Waiting for coal and iron ore 2%
- smith (52 building-min): Waiting for iron 45%, Waiting for coal 38%, All tool targets met 14%, Worker picking up a hammer 1%, Forging hammer 1%
- weaponsmith (51 building-min): Waiting for iron 68%, All weapon targets met 18%, Forging sword 7%, Forging bow 2%, Stacking outside 2%
- barracks (50 building-min): Waiting for weapons from the weaponsmith 56%, Waiting for a free settler to train 28%, Weapons on the way 10%, Soldier targets met 4%, Training soldiers 2%
- farm (45 building-min): Grain pile full, waiting for carriers 47%, Sowing a field 19%, Harvesting grain 15%, Grain pile full, nothing needs it right now 10%, Bringing grain to the pile 8%
- waterhut (45 building-min): Water pile full, waiting for carriers 54%, Water pile full, nothing needs it right now 18%, No way back to the building 14%, Fetching water 12%, Bringing water to the pile 2%
- pigfarm (41 building-min): Output pile full, waiting for carriers 43%, Raising a pig 28%, Waiting for grain and water 10%, Output pile full, nothing needs it right now 10%, Waiting for grain 4%
- mill (40 building-min): Output pile full, waiting for carriers 51%, Output pile full, nothing needs it right now 27%, Grinding flour 9%, Waiting for grain 7%, Stacking outside 5%
- bakery (39 building-min): Waiting for flour 45%, Baking bread 31%, Output pile full, nothing needs it right now 14%, Stacking outside 4%, Waiting for a free settler 3%
- house (38 building-min): Idle 100%
- butcher (35 building-min): Waiting for pigs 59%, Output pile full, nothing needs it right now 29%, Butchering 8%, Stacking outside 3%, Worker picking up an axe 1%
- goldmine (32 building-min): Gold ore pile full, waiting for carriers 42%, Gold ore pile full, nothing needs it right now 27%, Deposit thinning: mining gold ore 13%, Needs fish or bread or meat: mining stopped 9%, Mining gold ore 5%
- goldsmelter (31 building-min): Output pile full, nothing needs it right now 42%, Waiting for gold ore 38%, Waiting for coal and gold ore 14%, Smelting gold 3%, Worker picking up a hammer 1%

Building sites, time per state (site-min): Waiting for a digger 9, Builders at work 9, Leveling the ground 8, Waiting for materials 6, Waiting for a builder 5.

Build order (placed at min:sec, finished at): house2 0:00→1:09, quarry 0:00→1:25, wood 0:02→1:39, saw 1:40→2:11, guard 1:50→2:39, forest 1:52→2:56, fisher 2:12→3:24, guard 3:02→4:13, ironmine 3:04→4:32, coalmine 3:24→4:48, smelter 4:48→5:57, house2 5:58→7:55, smith 6:46→8:23, weaponsmith 8:24→9:16, barracks 9:28→10:22, farm 13:48→15:02, waterhut 14:26→15:26, wood 15:00→15:58, quarry 15:44→16:12, pigfarm 18:26→19:16, mill 18:40→19:39, bakery 19:18→20:58, house 20:00→22:21, butcher 24:24→25:15, goldmine 26:34→27:51, goldsmelter 27:52→28:53, house2 40:32→44:25, guard 44:56→46:15, guard 49:00→49:43.

Demolished or burned: guard (burned) 41:30, guard (burned) 42:35.

Orders given: sendUnit 136, armyTarget 91, place 29, priority 5, attack 5, profession 4, weaponKeep 3, release 3, sendIn 1, armyReserve 1, march 1. None refused.

People changing jobs: new carrier 69, carrier -> soldier 43, carrier -> worker 19, new soldier 3, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1, new worker 1.

People's orders (5447 in all, 5234 done): worker rest farm 281, worker gather farm 280, worker mine coalmine 206, worker rest forest 142, worker gather forest 141, worker rest coalmine 137, worker rest fisher 134, worker gather fisher 133, worker rest waterhut 125, worker gather waterhut 124, worker mine ironmine 119, explorer explore 115, worker rest wood 110, worker rest quarry 108. Not done (outcome: times): failed: no way (worker (work gather) own-land-split) ×171; ended: the person is gone (became a soldier, defeated or removed) ×8; failed: killed ×2.

Failed path searches (who (task) why: times): worker (work decide) own-land-split 586, worker (work gather) own-land-split 342, pioneer (claim 1) cut-off 3.

Fights and contact: attacked enemy buildings 4 times (first 15:44); took guard 16:23, guard 19:25; killed bow 3, sword 16; lost people sword 22, bow 12, spear 7; first saw player 2 at 16:00.

Warnings: path-fail 31. Last: 56:44 path-fail: worker (work gather) failed 5 times within a minute to find a way, last to 31,112: own-land-split | 57:35 path-fail: worker (work decide) failed 5 times within a minute to find a way, last to 32,107: own-land-split | 58:46 path-fail: worker (work gather) failed 5 times within a minute to find a way, last to 31,112: own-land-split

Your notes (9 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 32 (23 idle), coal/iron 1/1, sites 1, tips none.
- ×3 15:44–49:26 Attack: 8 field troops against guard 306; threshold 8.
- ×2 20:00–30:00 Adaptive plan: 22 field soldiers, 4 posts, carriers 5 (0 idle), coal/iron 1/1, sites 0, tips stall/settlers.
- 40:00 Adaptive plan: 11 field soldiers, 4 posts, carriers 2 (0 idle), coal/iron 1/1, sites 0, tips stall/army/settlers.
- 50:00 Adaptive plan: 9 field soldiers, 4 posts, carriers 17 (10 idle), coal/iron 1/1, sites 0, tips stall.


Script: 1928 turns, 1.1 ms average, worst 16 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 19/3/2030/20/30 | 29/6/2635/10/50 |
| 30 | 23/4/3194/31/30 | 30/5/2714/5/68 |
| 45 | 25/6/3715/26/30 | 28/3/2584/3/66 |
| 60 | 25/6/4121/25/30 | 28/3/2584/3/64 |
| first | 7 9 11 12 - - | 9 10 14 15 - - |

Soldiers every 5 min: 10 10 20 17 29 31 27 26 26 26 26 25 (original game NPC: 10 10 10 4 5 5 3 3 3 3 3 3).

First army orders (game min:sec): 2:54 sendIn 1 soldiers -> building 99; 10:58 armyReserve; 11:18 armyTarget sword=5; 11:18 armyTarget spear=3; 12:58 armyTarget bow=3; 13:18 armyTarget sword=6; 13:38 armyTarget spear=4; 13:58 armyTarget sword=7; 14:18 armyTarget bow=4; 14:38 armyTarget sword=8; 15:00 march 5 soldiers -> 40,120; 15:50 attack 11 soldiers -> building 79.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 6–7: army: Lost 4 soldiers in the last 5 minutes, and no barracks to train new ones.
- 1 min, 11: stall: smith: waiting for coal 58% of the last 5 minutes.
- 1 min, 13: stall: weaponsmith: waiting for coal 56% of the last 5 minutes.
- 3 min, 13–21: settlers: No free settlers and every bed taken: build houses.
- 42 min, 14–60: stall: smelter: waiting for coal 100% of the last 5 minutes.
- 16 min, 16–31: stall: goldsmelter: waiting for coal 100% of the last 5 minutes.
- 6 min, 16–29: stall: barracks: waiting for weapons from the weaponsmith 81% of the last 5 minutes.
- 7 min, 20–26: stall: iron mine: needs meat or fish 53% of the last 5 minutes.
- 6 min, 20–39: army: Lost 4 soldiers in the last 5 minutes.
- 36 min, 25–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 30 min, 31–60: stall: coal mine: needs bread or fish 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 11 | 8 | 7 | 7 | 0 | 0 | 0 | 0 | 0 | 10 | 14 | 4 | 13 | 0 | 0 | 0 | 0 | 9 | 38 | 2030 | 3619 |
| 30 | 31 | 51 | 51 | 28 | 2 | 0 | 0 | 0 | 0 | 12 | 20 | 10 | 14 | 0 | 0 | 0 | 0 | 7 | 59 | 3194 | 8612 |
| 45 | 31 | 51 | 51 | 35 | 2 | 0 | 0 | 0 | 0 | 12 | 24 | 10 | 14 | 0 | 0 | 0 | 0 | 8 | 70 | 3715 | 11120 |
| 60 | 31 | 51 | 51 | 35 | 2 | 0 | 0 | 0 | 0 | 12 | 24 | 10 | 14 | 0 | 0 | 0 | 0 | 8 | 70 | 4121 | 11554 |

At the end: buildings (built+sites) guard 6, house2 2, quarry 2, wood 2, hq 1, saw 1, forest 1, fisher 1, ironmine 1, coalmine 1, smelter 1, house 1, smith 1, weaponsmith 1, barracks 1, goldmine 1, goldsmelter 1.
People: soldier 18, worker 14, carrier 8, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 50. Soldiers: sword 9, bow 5, spear 4.

Goods produced in the game: fish 146, coal 84, log 75, stone 71, plank 55, ironore 54, iron 40, sword 14, goldore 14, spear 8, bow 8, hammer 2, pick 2, saw 1, shovel 1, rod 1, axe 1.
Goods consumed in the game: fish 136, coal 78, stone 73, plank 71, log 55, ironore 40, iron 38, sword 14, spear 8, bow 8, pick 6, hammer 4, axe 2, shovel 2, saw 1, rod 1.
Goods lost in the game: plank 4, stone 4.
Goods captured in the game: plank 36, stone 27, fish 19, ironore 10, iron 8, log 7, coal 6, bread 2, pick 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (98 building-min): Idle 100%
- quarry (103 building-min): Stone pile full, nothing needs it right now 78%, Cutting stone 11%, Bringing stone to the pile 6%, Stone pile full, waiting for carriers 4%, Worker picking up a pickaxe 0%
- wood (103 building-min): Log pile full, nothing needs it right now 77%, Felling a tree 14%, Log pile full, waiting for carriers 5%, Bringing a log to the pile 4%, Worker picking up an axe 0%
- saw (58 building-min): Output pile full, nothing needs it right now 79%, Sawing planks 12%, Output pile full, waiting for carriers 3%, Waiting for logs 3%, Stacking outside 3%
- guard (264 building-min): Idle 100%, Waiting for a swordsman: train one at the barracks 0%, Soldiers on the way 0%, Waiting for a soldier 0%, Free soldiers are too far away: bring one onto your land or near this building 0%
- forest (57 building-min): No free ground to plant in range inside your border 68%, Planting a sapling 32%, Worker picking up a shovel 0%, Idle 0%
- fisher (56 building-min): Fish pile full, nothing needs it right now 45%, Bringing a fish to the pile 29%, Fishing 25%, Worker picking up a fishing rod 0%, Working 0%
- ironmine (55 building-min): Iron ore pile full, nothing needs it right now 53%, Needs meat or fish: mining stopped 14%, Deposit thinning: mining iron ore 10%, Mining iron ore 9%, Deposit worn out: finding little iron ore 9%
- coalmine (54 building-min): Needs bread or fish: mining stopped 64%, Mining coal 23%, Deposit thinning: mining coal 8%, Bringing coal out 4%, Came back empty-handed 1%
- smelter (54 building-min): Waiting for coal 84%, Smelting iron 9%, Output pile full, nothing needs it right now 2%, Stacking outside 2%, Waiting for coal and iron ore 1%
- house (53 building-min): Idle 100%
- smith (52 building-min): All tool targets met 94%, Waiting for coal 3%, Forging hammer 0%, Forging pickaxe 0%, Stacking outside 0%
- weaponsmith (50 building-min): Waiting for iron 80%, All weapon targets met 7%, Forging sword 4%, Waiting for coal 3%, Forging spear 2%
- barracks (48 building-min): Waiting for weapons from the weaponsmith 83%, Weapons on the way 8%, Waiting for a free settler to train 4%, Soldier targets met 4%, Training soldiers 1%
- goldmine (48 building-min): Gold ore pile full, nothing needs it right now 88%, Gold ore pile full, waiting for carriers 6%, Mining gold ore 4%, Worker picking up a pickaxe 1%, Bringing gold ore out 1%
- goldsmelter (46 building-min): Waiting for coal 99%, Worker picking up a hammer 1%, Working 0%

Building sites, time per state (site-min): Builders at work 6, Waiting for a digger 5, Leveling the ground 5, Waiting for a builder 3, Waiting for materials 0.

Build order (placed at min:sec, finished at): house2 0:00→1:08, quarry 0:00→1:26, wood 0:02→1:39, saw 1:40→2:13, guard 1:42→2:54, forest 1:56→3:10, fisher 2:14→3:31, guard 2:56→3:50, guard 3:52→4:23, ironmine 4:14→4:50, coalmine 5:02→5:32, smelter 5:38→6:26, house 6:28→7:11, smith 7:46→8:23, weaponsmith 9:36→10:24, barracks 10:56→11:39, goldmine 11:40→12:18, goldsmelter 12:52→13:42, wood 15:00→15:30, quarry 15:02→16:00, house2 20:00→21:03.

Orders given: sendUnit 138, armyTarget 44, release 25, place 21, march 6, priority 5, profession 4, attack 4, weaponKeep 3, sendIn 1, armyReserve 1. None refused.

People changing jobs: new carrier 50, carrier -> soldier 30, carrier -> worker 14, carrier -> explorer 2, new soldier 2, carrier -> geologist 1, carrier -> pioneer 1.

People's orders (2759 in all, 2733 done): worker rest fisher 147, worker gather fisher 146, worker mine coalmine 131, worker rest forest 126, worker gather forest 125, explorer explore 115, worker mine ironmine 105, worker rest coalmine 88, worker rest wood 77, worker gather wood 75, worker rest quarry 73, worker gather quarry 71, worker eat coalmine 68, carrier haul fish fisher -> ironmine 67. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×5.

Fights and contact: attacked enemy buildings 5 times (first 15:50); took guard 16:54, hq 24:01, guard 33:43, guard 34:15; killed sword 8, bow 5; lost people bow 6, sword 5, spear 4; first saw player 1 at 16:00.

Your notes (9 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 6 field soldiers, 3 posts, carriers 23 (17 idle), coal/iron 1/1, sites 1, tips none.
- ×2 15:50–33:22 Attack: 10 field troops against guard 103; threshold 9.
- 20:00 Adaptive plan: 12 field soldiers, 4 posts, carriers 2 (0 idle), coal/iron 1/1, sites 0, tips stall/army/settlers.
- 23:56 Attack: 16 field troops against hq 1; threshold 16.
- ×3 30:00–50:00 Adaptive plan: 19 field soldiers, 6 posts, carriers 8 (8 idle), coal/iron 1/1, sites 0, tips stall.


Script: 1856 turns, 0.9 ms average, worst 17 ms, 0 over 0.3 s, 0 errors. Orders refused: none.
