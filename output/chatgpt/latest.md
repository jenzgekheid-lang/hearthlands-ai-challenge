# Tournament: chatgpt

Game version 210. Written for: chatgpt 210.

- chatgpt: hearthlands-ai-challenge, commit 05ce33e

Maps 20261030, 777, 4242, 31, each twice (sides swapped), up to 60 game minutes (1x). 51 s.

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
| 30 | 27/5/3452/25/51 | 8/4/2070/3/40 |
| 45 | 29/7/5386/43/31 | 6/3/1418/2/40 |
| 60 | 30/7/5795/56/38 | 6/3/1418/2/40 |
| first | 11 13 14 15 37 - | 9 9 - - - - |

Soldiers every 5 min: 10 10 14 18 23 25 33 37 43 45 52 56 (original game NPC: 10 10 10 5 4 3 2 2 2 2 2 2).

First army orders (game min:sec): 3:02 sendIn 1 soldiers -> building 95; 13:50 armyReserve; 14:10 armyTarget sword=5; 14:10 armyTarget spear=3; 15:00 march 5 soldiers -> 200,120; 15:10 armyTarget sword=6; 15:10 armyTarget bow=3; 15:30 armyTarget sword=7; 15:30 armyTarget spear=4; 16:10 armyTarget sword=6; 16:10 armyTarget spear=3; 16:30 armyTarget sword=7.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 3 min, 6–8: army: Lost 4 soldiers in the last 5 minutes, and no barracks to train new ones.
- 9 min, 11–51: settlers: No free settlers and every bed taken: build houses.
- 20 min, 14–34: stall: fisher: no fish in range inside your border 57% of the last 5 minutes.
- 3 min, 16–18: stall: smelter: waiting for coal 91% of the last 5 minutes.
- 13 min, 16–51: stall: weaponsmith: waiting for coal 91% of the last 5 minutes.
- 24 min, 17–56: stall: barracks: waiting for weapons from the weaponsmith 75% of the last 5 minutes.
- 6 min, 18–23: stall: iron mine: needs meat or fish 75% of the last 5 minutes.
- 7 min, 23–29: stall: butcher: waiting for pigs 87% of the last 5 minutes.
- 34 min, 26–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 26 min, 35–60: stall: iron mine: deposit worn out 93% of the last 5 minutes.
- 4 min, 57–60: stall: coal mine: deposit worn out 93% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 13 | 8 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 4 | 6 | 0 | 0 | 0 | 0 | 0 | 18 | 23 | 2232 | 4154 |
| 30 | 16 | 43 | 43 | 16 | 12 | 5 | 19 | 10 | 14 | 18 | 9 | 34 | 5 | 0 | 0 | 0 | 0 | 21 | 63 | 3452 | 10499 |
| 45 | 16 | 46 | 55 | 22 | 11 | 12 | 19 | 21 | 13 | 17 | 8 | 34 | 5 | 0 | 0 | 0 | 0 | 5 | 91 | 5386 | 16566 |
| 60 | 16 | 46 | 55 | 22 | 11 | 11 | 20 | 21 | 13 | 17 | 15 | 34 | 5 | 0 | 0 | 0 | 0 | 9 | 91 | 5795 | 16903 |

At the end: buildings (built+sites) guard 6, house2 3, house 2, hq 1, quarry 1, wood 1, saw 1, forest 1, fisher 1, coalmine 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, mill 1, bakery 1, pigfarm 1, butcher 1, tower 1.
People: soldier 46, worker 16, carrier 14, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 80. Soldiers: sword 22, bow 13, spear 11.

Goods produced in the game: grain 190, water 175, coal 145, log 93, stone 93, ironore 86, flour 86, pig 82, plank 81, iron 77, bread 72, meat 68, fish 52, sword 26, spear 13, bow 13, saw 1, shovel 1, rod 1, hammer 1, axe 1.
Goods consumed in the game: grain 169, water 155, coal 134, stone 103, plank 97, log 81, ironore 77, flour 73, pig 69, bread 61, iron 57, meat 57, fish 45, sword 26, spear 13, bow 13, pick 4, hammer 3, axe 2, shovel 2, saw 1, rod 1, scythe 1.
Goods lost in the game: stone 17, plank 13.
Goods captured in the game: stone 31, plank 23, iron 14, fish 9, coal 6, ironore 6, goldore 5, scythe 2, hammer 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (101 building-min): Idle 100%
- quarry (58 building-min): Stone pile full, nothing needs it right now 55%, Cutting stone 26%, Bringing stone to the pile 12%, Stone pile full, waiting for carriers 6%, Worker picking up a pickaxe 0%
- wood (58 building-min): Log pile full, nothing needs it right now 45%, Felling a tree 32%, Log pile full, waiting for carriers 12%, Bringing a log to the pile 11%, Worker picking up an axe 0%
- saw (57 building-min): Output pile full, nothing needs it right now 64%, Sawing planks 18%, Output pile full, waiting for carriers 13%, Stacking outside 4%, Fetching from the pile 0%
- guard (265 building-min): Idle 98%, Waiting for a swordsman: train one at the barracks 2%, Soldiers on the way 1%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 65%, Planting a sapling 34%, Worker picking up a shovel 0%, Working 0%
- fisher (57 building-min): Fish pile full, nothing needs it right now 48%, No fish in range inside your border 33%, Fish pile full, waiting for carriers 8%, Fishing 6%, Bringing a fish to the pile 4%
- coalmine (52 building-min): Deposit thinning: mining coal 45%, Mining coal 23%, Deposit worn out: finding little coal 14%, Bringing coal out 7%, Needs bread or fish: mining stopped 5%
- ironmine (50 building-min): Deposit worn out: finding little iron ore 53%, Needs meat or fish: mining stopped 16%, Deposit thinning: mining iron ore 15%, Mining iron ore 7%, Bringing iron ore out 5%
- smelter (49 building-min): Output pile full, nothing needs it right now 43%, Smelting iron 20%, Waiting for coal 11%, Waiting for iron ore 11%, Output pile full, waiting for carriers 9%
- house (87 building-min): Idle 100%
- smith (48 building-min): All tool targets met 97%, Worker picking up a hammer 1%, Forging saw 0%, Stacking outside 0%, Forging shovel 0%
- weaponsmith (46 building-min): Waiting for coal 60%, Waiting for iron 11%, All weapon targets met 10%, Forging sword 7%, Forging spear 4%
- barracks (46 building-min): Waiting for weapons from the weaponsmith 77%, Weapons on the way 12%, Soldier targets met 9%, Training soldiers 2%
- farm (44 building-min): Sowing a field 39%, Harvesting grain 27%, Bringing grain to the pile 16%, Grain pile full, nothing needs it right now 10%, Grain pile full, waiting for carriers 7%
- waterhut (43 building-min): Water pile full, nothing needs it right now 35%, Bringing water to the pile 27%, Fetching water 21%, Water pile full, waiting for carriers 16%, Worker on the way 0%
- mill (42 building-min): Output pile full, nothing needs it right now 60%, Output pile full, waiting for carriers 19%, Grinding flour 11%, Stacking outside 6%, Waiting for grain 3%
- bakery (42 building-min): Output pile full, nothing needs it right now 41%, Baking bread 40%, Output pile full, waiting for carriers 9%, Waiting for flour 5%, Stacking outside 4%
- pigfarm (40 building-min): Raising a pig 46%, Output pile full, nothing needs it right now 24%, Waiting for grain 12%, Output pile full, waiting for carriers 8%, Stacking outside 6%
- butcher (39 building-min): Output pile full, nothing needs it right now 49%, Waiting for pigs 22%, Butchering 13%, Output pile full, waiting for carriers 9%, Stacking outside 5%
- tower (23 building-min): Idle 94%, Free soldiers are too far away: bring one onto your land or near this building 5%, Waiting for a swordsman: train one at the barracks 0%, Waiting for a soldier 0%

Building sites, time per state (site-min): Builders at work 8, Leveling the ground 8, Waiting for a digger 6, Waiting for a builder 5, Waiting for materials 1.

Build order (placed at min:sec, finished at): house2 0:00→1:36, quarry 0:00→2:05, wood 0:02→1:49, saw 1:50→2:32, guard 1:52→3:00, forest 2:28→3:14, fisher 2:50→3:28, guard 3:24→4:01, guard 4:02→4:46, coalmine 7:02→7:52, ironmine 9:22→9:52, smelter 9:54→10:44, house 10:46→11:14, smith 11:12→12:12, weaponsmith 12:38→13:48, barracks 13:48→14:23, farm 15:00→16:10, waterhut 15:52→17:10, mill 16:32→17:39, bakery 17:40→18:24, pigfarm 19:04→19:56, butcher 20:00→20:58, house 21:00→22:01, house2 26:00→27:10, tower 35:00→36:40, house2 48:00→50:09.

Orders given: sendUnit 135, armyTarget 73, release 45, place 26, march 12, priority 5, profession 4, attack 4, sendIn 3, weaponKeep 3, armyReserve 1. None refused.

People changing jobs: new carrier 80, carrier -> soldier 52, carrier -> worker 16, carrier -> explorer 2, new soldier 2, carrier -> geologist 1, carrier -> pioneer 1.

People's orders (5996 in all, 5960 done): worker rest farm 388, worker gather farm 388, worker mine coalmine 211, worker rest waterhut 176, worker gather waterhut 175, worker rest coalmine 150, worker mine ironmine 149, worker rest forest 137, worker gather forest 136, explorer explore 115, carrier haul grain farm -> mill 95, worker rest wood 94, worker rest quarry 94, worker gather wood 93. None failed.

Fights and contact: attacked enemy buildings 4 times (first 23:24); took hq 23:25, guard 24:39, guard 26:13, guard 32:26; killed bow 3, sword 5; lost people bow 3, spear 2, sword 1; first saw player 2 at 16:00.

Your notes (9 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 6 field soldiers, 3 posts, carriers 15 (3 idle), coal/iron 1/1, sites 1, tips none.
- ×3 20:00–40:00 Adaptive plan: 27 field soldiers, 7 posts, carriers 13 (8 idle), coal/iron 1/1, sites 0, tips stall.
- 23:24 Attack: 16 field troops against hq 37; threshold 16.
- ×2 25:56–32:10 Attack: 10 field troops against guard 134; threshold 10.
- 50:00 Adaptive plan: 35 field soldiers, 7 posts, carriers 5 (0 idle), coal/iron 1/1, sites 1, tips stall/settlers.


Script: 1830 turns, 1.4 ms average, worst 23 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 31: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 15/1/1596/20/30 | 39/6/3020/10/70 |
| 30 | 24/3/2619/19/29 | 60/8/4196/7/84 |
| 45 | 25/3/3106/17/26 | 72/14/9609/35/97 |
| 60 | 27/4/3639/12/35 | 80/21/15409/54/87 |
| first | 5 7 8 10 - - | 7 7 16 18 37 35 |

Soldiers every 5 min: 10 14 20 14 7 19 10 10 17 23 7 12 (original game NPC: 10 10 10 4 7 7 18 25 35 45 47 54).

First army orders (game min:sec): 2:30 sendIn 1 soldiers -> building 111; 8:18 armyTarget sword=5; 8:18 armyTarget spear=3; 8:18 armyReserve; 9:58 armyTarget sword=6; 9:58 armyTarget bow=3; 11:18 armyTarget spear=4; 11:58 armyTarget sword=7; 12:38 armyTarget bow=4; 13:18 armyTarget sword=8; 13:58 armyTarget spear=5; 14:38 armyTarget sword=9.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 10 min, 10–20: stall: smelter: waiting for coal 78% of the last 5 minutes.
- 1 min, 11: stall: weaponsmith: waiting for iron 56% of the last 5 minutes.
- 5 min, 14–20: settlers: No free settlers and every bed taken: build houses.
- 2 min, 18–19: stall: water hut: water pile full, waiting for carriers 66% of the last 5 minutes.
- 3 min, 19–22: stall: iron mine: needs meat or fish 76% of the last 5 minutes.
- 17 min, 19–55: army: Lost 16 soldiers in the last 5 minutes.
- 1 min, 20: stall: pig farm: waiting for grain and water 84% of the last 5 minutes.
- 22 min, 20–58: stall: weaponsmith: waiting for coal 94% of the last 5 minutes.
- 16 min, 21–56: stall: barracks: waiting for weapons from the weaponsmith 96% of the last 5 minutes.
- 2 min, 23–24: stall: butcher: waiting for pigs 72% of the last 5 minutes.
- 28 min, 25–60: stall: iron mine: deposit worn out 91% of the last 5 minutes.
- 31 min, 27–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 9 min, 27–49: stall: smelter: waiting for iron ore 86% of the last 5 minutes.
- 2 min, 28–38: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 4 min, 33–48: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 1 min, 46: stall: sawmill: output pile full, waiting for carriers 89% of the last 5 minutes.
- 2 min, 47–48: stall: farm: grain pile full, waiting for carriers 100% of the last 5 minutes.
- 1 min, 48: stall: pig farm: output pile full, waiting for carriers 100% of the last 5 minutes.
- 3 min, 58–60: stall: coal mine: deposit worn out 91% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 11 | 15 | 12 | 5 | 0 | 0 | 0 | 0 | 0 | 9 | 7 | 14 | 0 | 0 | 1 | 0 | 0 | 6 | 18 | 1596 | 2975 |
| 30 | 24 | 17 | 25 | 23 | 0 | 12 | 18 | 11 | 0 | 13 | 0 | 10 | 0 | 0 | 0 | 1 | 0 | 0 | 80 | 2619 | 8948 |
| 45 | 24 | 15 | 23 | 23 | 0 | 11 | 14 | 14 | 0 | 11 | 4 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 91 | 3106 | 9941 |
| 60 | 24 | 15 | 23 | 24 | 0 | 11 | 14 | 14 | 0 | 11 | 5 | 20 | 0 | 0 | 0 | 0 | 0 | 8 | 92 | 3639 | 11827 |

At the end: buildings (built+sites) house2 4, guard 4, quarry 2, wood 2, hq 1, saw 1, forest 1, fisher 1, coalmine 1, ironmine 1, smelter 1, house 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, pigfarm 1, butcher 1.
People: worker 16, carrier 11, soldier 7, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 90. Soldiers: sword 5, bow 1, spear 1.

Goods produced in the game: fish 243, coal 175, stone 99, log 97, ironore 97, water 97, grain 97, iron 92, pig 83, plank 77, meat 69, sword 39, spear 16, bow 10, axe 2, saw 1, shovel 1, rod 1, hammer 1, pick 1.
Goods consumed in the game: fish 233, coal 164, stone 101, plank 93, ironore 92, water 83, grain 83, log 77, iron 72, pig 70, meat 58, sword 39, spear 16, bow 10, pick 5, axe 3, hammer 3, shovel 2, saw 1, rod 1, scythe 1.
Goods lost in the game: stone 9, plank 8, water 6.
Goods captured in the game: plank 12, stone 12, fish 8, water 6.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (137 building-min): Idle 100%
- quarry (103 building-min): Stone pile full, nothing needs it right now 52%, Stone pile full, waiting for carriers 25%, Cutting stone 15%, Bringing stone to the pile 7%, Worker picking up a pickaxe 0%
- wood (103 building-min): Log pile full, nothing needs it right now 44%, Log pile full, waiting for carriers 30%, Felling a tree 19%, Bringing a log to the pile 6%, Worker picking up an axe 0%
- saw (58 building-min): Output pile full, nothing needs it right now 50%, Output pile full, waiting for carriers 21%, Sawing planks 17%, Waiting for logs 9%, Stacking outside 3%
- guard (139 building-min): Idle 87%, Waiting for a swordsman: train one at the barracks 12%, Soldiers on the way 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 66%, Planting a sapling 34%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- fisher (57 building-min): Bringing a fish to the pile 33%, Fishing 28%, Fish pile full, nothing needs it right now 20%, Fish pile full, waiting for carriers 18%, No fish in range inside your border 1%
- coalmine (56 building-min): Deposit thinning: mining coal 37%, Mining coal 27%, Deposit worn out: finding little coal 17%, Bringing coal out 8%, Needs bread or fish: mining stopped 7%
- ironmine (56 building-min): Deposit worn out: finding little iron ore 61%, Deposit thinning: mining iron ore 12%, Needs meat or fish: mining stopped 9%, Mining iron ore 6%, Bringing iron ore out 5%
- smelter (55 building-min): Waiting for iron ore 40%, Smelting iron 21%, Waiting for coal 19%, Output pile full, nothing needs it right now 13%, Stacking outside 4%
- house (55 building-min): Idle 100%
- smith (54 building-min): All tool targets met 97%, Forging axe 0%, Worker picking up a hammer 0%, Stacking outside 0%, Forging saw 0%
- weaponsmith (52 building-min): Waiting for coal 60%, All weapon targets met 17%, Forging sword 9%, Forging spear 4%, Stacking outside 3%
- barracks (51 building-min): Waiting for weapons from the weaponsmith 70%, Weapons on the way 22%, Soldier targets met 6%, Training soldiers 2%, Idle 0%
- farm (45 building-min): Grain pile full, waiting for carriers 34%, Grain pile full, nothing needs it right now 34%, Sowing a field 15%, Harvesting grain 11%, Bringing grain to the pile 6%
- waterhut (44 building-min): Water pile full, nothing needs it right now 47%, Water pile full, waiting for carriers 36%, Fetching water 9%, Bringing water to the pile 7%, Worker on the way 0%
- pigfarm (42 building-min): Raising a pig 45%, Output pile full, waiting for carriers 24%, Output pile full, nothing needs it right now 18%, Waiting for grain and water 5%, Stacking outside 5%
- butcher (41 building-min): Output pile full, nothing needs it right now 42%, Output pile full, waiting for carriers 27%, Butchering 12%, Waiting for pigs 12%, Stacking outside 5%

Building sites, time per state (site-min): Leveling the ground 9, Builders at work 8, Waiting for a digger 6, Waiting for a builder 3, Waiting for materials 2.

Build order (placed at min:sec, finished at): house2 0:00→1:00, quarry 0:02→1:14, wood 0:04→1:29, saw 1:30→2:08, guard 1:32→2:30, forest 1:48→2:48, fisher 2:08→3:09, coalmine 2:36→3:41, ironmine 3:08→3:57, smelter 3:58→4:48, house 4:48→5:21, smith 5:36→6:07, weaponsmith 7:06→7:50, barracks 8:16→9:23, farm 13:50→15:05, waterhut 14:24→15:40, wood 15:00→15:57, quarry 15:38→16:14, pigfarm 16:52→17:53, butcher 17:04→18:32, house2 17:42→20:07, guard 28:00→29:05, house2 33:00→34:37, guard 38:00→38:36, house2 46:00→47:45, guard 50:00→51:02.

Demolished or burned: guard (burned) 16:43, guard (burned) 19:22, guard (burned) 34:45.

Orders given: sendUnit 137, armyTarget 88, place 26, release 9, attack 8, priority 5, profession 4, sendIn 4, weaponKeep 3, march 2, armyReserve 1. Refused (order: reason, times): place: Too close to another building ×1.

People changing jobs: new carrier 90, carrier -> soldier 65, carrier -> worker 16, new soldier 7, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1.

People's orders (5825 in all, 5789 done): worker mine coalmine 314, worker rest fisher 244, worker gather fisher 243, worker rest farm 199, worker gather farm 198, worker eat coalmine 190, carrier haul fish fisher -> coalmine 190, worker mine ironmine 182, worker rest coalmine 177, worker rest forest 149, worker gather forest 148, soldier attack guard 128, explorer explore 115, worker rest ironmine 102. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×11; failed: killed ×3.

Fights and contact: attacked enemy buildings 8 times (first 15:46); was attacked 1 times (first 27:42); took guard 16:42, guard 16:48, guard 17:10, guard 28:25; lost guard 28:04; killed bow 7, sword 35, spear 7; lost people sword 36, bow 12, spear 15; first saw player 1 at 16:00.

Your notes (10 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Adaptive plan: 10 field soldiers, 0 posts, carriers 6 (6 idle), coal/iron 0/0, sites 0, tips none.
- ×4 10:00–50:00 Adaptive plan: 18 field soldiers, 3 posts, carriers 16 (13 idle), coal/iron 1/1, sites 0, tips stall.
- ×3 15:46–35:14 Attack: 10 field troops against guard 131; threshold 10.
- 20:00 Adaptive plan: 11 field soldiers, 2 posts, carriers 2 (0 idle), coal/iron 1/1, sites 1, tips stall/army/settlers.
- 49:08 Attack: 16 field troops against hq 1; threshold 16.


Script: 1956 turns, 1.1 ms average, worst 19 ms, 0 over 0.3 s, 0 errors. Orders refused: place 1 of 27.

### Map 777: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 19/1/1604/17/33 | 32/6/2828/10/50 |
| 30 | 25/4/3458/23/32 | 17/1/1724/1/65 |
| 45 | 25/4/3789/25/30 | 17/1/1724/1/65 |
| 60 | 25/4/4180/27/28 | 17/1/1724/1/65 |
| first | 5 7 9 10 - - | 7 8 17 17 - - |

Soldiers every 5 min: 10 10 17 14 18 23 25 25 25 25 25 27 (original game NPC: 10 10 10 5 3 1 1 1 1 1 1 1).

First army orders (game min:sec): 2:18 sendIn 1 soldiers -> building 96; 8:52 armyTarget sword=5; 8:52 armyTarget spear=3; 8:52 armyReserve; 10:12 armyTarget bow=3; 10:32 armyTarget sword=6; 11:12 armyTarget spear=4; 11:52 armyTarget sword=7; 12:32 armyTarget bow=4; 15:00 march 5 soldiers -> 200,120; 16:00 attack 10 soldiers -> building 79; 16:32 armyTarget sword=5.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 7 min, 10–26: stall: fisher: no fish in range inside your border 54% of the last 5 minutes.
- 7 min, 11–17: stall: iron mine: needs meat or fish 95% of the last 5 minutes.
- 20 min, 12–33: stall: smelter: waiting for iron ore 90% of the last 5 minutes.
- 32 min, 15–60: stall: barracks: waiting for weapons from the weaponsmith 85% of the last 5 minutes.
- 7 min, 15–22: settlers: No free settlers and every bed taken: build houses.
- 3 min, 16–18: stall: weaponsmith: waiting for iron 93% of the last 5 minutes.
- 2 min, 17–18: army: Lost 5 soldiers in the last 5 minutes.
- 6 min, 19–24: stall: butcher: waiting for pigs 71% of the last 5 minutes.
- 2 min, 21–22: stall: mill: output pile full, waiting for carriers 84% of the last 5 minutes.
- 1 min, 22: stall: sawmill: output pile full, waiting for carriers 84% of the last 5 minutes.
- 38 min, 23–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 32 min, 27–58: stall: iron mine: deposit worn out 57% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 11 | 8 | 6 | 3 | 1 | 0 | 11 | 7 | 11 | 26 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 36 | 1604 | 3138 |
| 30 | 57 | 106 | 123 | 23 | 12 | 12 | 25 | 38 | 27 | 37 | 1 | 7 | 0 | 0 | 1 | 0 | 0 | 8 | 93 | 3458 | 11527 |
| 45 | 57 | 106 | 123 | 23 | 12 | 12 | 24 | 35 | 27 | 37 | 1 | 19 | 0 | 0 | 1 | 0 | 0 | 2 | 94 | 3789 | 12693 |
| 60 | 57 | 106 | 123 | 23 | 12 | 12 | 25 | 38 | 27 | 37 | 15 | 21 | 0 | 0 | 1 | 0 | 0 | 4 | 109 | 4180 | 13476 |

At the end: buildings (built+sites) guard 4, house2 2, hq 1, quarry 1, wood 1, saw 1, forest 1, fisher 1, ironmine 1, coalmine 1, smelter 1, house 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, mill 1, bakery 1, pigfarm 1, butcher 1.
People: soldier 22, worker 16, carrier 4, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 50. Soldiers: sword 10, bow 6, spear 6.

Goods produced in the game: grain 154, water 138, coal 120, pig 80, log 76, stone 73, ironore 71, fish 69, meat 66, plank 64, iron 57, flour 52, bread 38, sword 17, spear 9, bow 6, saw 1, shovel 1, rod 1, hammer 1, axe 1.
Goods consumed in the game: grain 132, water 118, coal 94, stone 83, plank 80, pig 66, log 64, fish 59, ironore 57, meat 54, flour 38, iron 37, bread 26, sword 17, spear 9, bow 6, pick 4, hammer 3, axe 2, shovel 2, saw 1, rod 1, scythe 1.
Goods captured in the game: stone 83, plank 72, log 41, grain 16, flour 13, coal 11, fish 7, water 5, ironore 1, iron 1, sword 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (97 building-min): Idle 100%
- quarry (59 building-min): Stone pile full, nothing needs it right now 62%, Cutting stone 20%, Bringing stone to the pile 11%, Stone pile full, waiting for carriers 7%, Worker picking up a pickaxe 0%
- wood (59 building-min): Log pile full, nothing needs it right now 62%, Felling a tree 24%, Log pile full, waiting for carriers 8%, Bringing a log to the pile 6%, Worker picking up an axe 0%
- saw (58 building-min): Output pile full, nothing needs it right now 69%, Sawing planks 14%, Output pile full, waiting for carriers 12%, Stacking outside 3%, Waiting for logs 2%
- guard (157 building-min): Idle 100%, Free soldiers are too far away: bring one onto your land or near this building 0%, Soldiers on the way 0%, Waiting for a swordsman: train one at the barracks 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 71%, Planting a sapling 28%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- fisher (57 building-min): Fish pile full, nothing needs it right now 57%, No fish in range inside your border 22%, Bringing a fish to the pile 9%, Fishing 9%, Fish pile full, waiting for carriers 3%
- ironmine (57 building-min): Deposit worn out: finding little iron ore 53%, Needs meat or fish: mining stopped 19%, Deposit thinning: mining iron ore 8%, Iron ore pile full, nothing needs it right now 6%, Mining iron ore 6%
- coalmine (56 building-min): Coal pile full, nothing needs it right now 44%, Deposit thinning: mining coal 23%, Mining coal 18%, Coal pile full, waiting for carriers 7%, Bringing coal out 6%
- smelter (55 building-min): Waiting for iron ore 56%, Output pile full, nothing needs it right now 26%, Smelting iron 13%, Stacking outside 3%, Output pile full, waiting for carriers 1%
- house (55 building-min): Idle 100%
- smith (53 building-min): All tool targets met 98%, Worker picking up a hammer 0%, Stacking outside 0%, Forging shovel 0%, Forging hammer 0%
- weaponsmith (51 building-min): All weapon targets met 68%, Waiting for iron 20%, Forging sword 4%, Forging spear 2%, Stacking outside 2%
- barracks (50 building-min): Waiting for weapons from the weaponsmith 81%, Weapons on the way 14%, Soldier targets met 4%, Training soldiers 1%
- farm (48 building-min): Grain pile full, nothing needs it right now 49%, Sowing a field 21%, Harvesting grain 16%, Bringing grain to the pile 8%, Grain pile full, waiting for carriers 5%
- waterhut (48 building-min): Water pile full, nothing needs it right now 59%, Fetching water 17%, Bringing water to the pile 15%, Water pile full, waiting for carriers 9%, Idle 0%
- mill (47 building-min): Output pile full, nothing needs it right now 75%, Output pile full, waiting for carriers 15%, Grinding flour 6%, Stacking outside 3%, Waiting for grain 1%
- bakery (46 building-min): Output pile full, nothing needs it right now 71%, Baking bread 19%, Output pile full, waiting for carriers 8%, Stacking outside 2%, Waiting for flour and water 1%
- pigfarm (44 building-min): Output pile full, nothing needs it right now 44%, Raising a pig 41%, Output pile full, waiting for carriers 8%, Stacking outside 5%, Waiting for grain 1%
- butcher (43 building-min): Output pile full, nothing needs it right now 68%, Waiting for pigs 12%, Butchering 11%, Stacking outside 4%, Output pile full, waiting for carriers 3%

Building sites, time per state (site-min): Builders at work 7, Leveling the ground 6, Waiting for a digger 4, Waiting for a builder 4.

Build order (placed at min:sec, finished at): house2 0:00→0:54, quarry 0:00→1:22, wood 0:02→1:19, saw 1:20→2:00, guard 1:22→2:16, forest 1:46→2:33, fisher 2:12→2:50, ironmine 2:36→3:21, coalmine 2:56→3:36, smelter 4:02→4:47, house 4:48→5:23, smith 5:56→6:39, weaponsmith 7:36→8:44, barracks 8:50→9:48, farm 10:20→11:32, waterhut 11:22→12:20, mill 12:14→12:53, bakery 13:24→14:19, pigfarm 14:56→15:59, butcher 16:02→16:55, house2 19:14→21:44.

Demolished or burned: guard (burned) 16:58.

Orders given: sendUnit 138, armyTarget 49, release 45, place 21, march 11, priority 5, attack 5, profession 4, weaponKeep 3, sendIn 1, armyReserve 1. None refused.

People changing jobs: new carrier 50, carrier -> soldier 32, carrier -> worker 16, new soldier 3, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1.

People's orders (4883 in all, 4857 done): worker rest farm 311, worker gather farm 310, worker mine coalmine 157, worker mine ironmine 142, worker rest waterhut 139, worker gather waterhut 138, worker rest forest 128, worker gather forest 127, worker rest coalmine 123, explorer explore 115, carrier haul water waterhut -> pigfarm 86, carrier haul grain farm -> pigfarm 86, worker eat ironmine 81, worker rest pigfarm 81. None failed.

Failed path searches (who (task) why: times): pioneer (claim 1) cut-off 2.

Fights and contact: attacked enemy buildings 6 times (first 16:00); took guard 16:57, hq 23:25, guard 24:45, guard 27:26, guard 28:31; killed bow 3, sword 11; lost people sword 9, bow 3, spear 3; first saw player 2 at 16:00.

Your notes (10 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Adaptive plan: 10 field soldiers, 0 posts, carriers 6 (6 idle), coal/iron 0/0, sites 0, tips none.
- ×4 10:00–50:00 Adaptive plan: 20 field soldiers, 4 posts, carriers 6 (2 idle), coal/iron 1/1, sites 0, tips stall.
- ×3 16:00–28:12 Attack: 10 field troops against guard 133; threshold 10.
- 20:00 Adaptive plan: 12 field soldiers, 1 posts, carriers 7 (0 idle), coal/iron 1/1, sites 1, tips stall/settlers.
- 23:24 Attack: 16 field troops against hq 37; threshold 16.


Script: 1864 turns, 0.8 ms average, worst 23 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 11/3/2036/10/30 | 37/6/2797/10/60 |
| 30 | 23/3/2463/11/34 | 58/7/3703/13/76 |
| 45 | 24/3/2872/12/43 | 71/14/9669/55/87 |
| 60 | 24/3/2953/11/35 | 81/20/13903/71/94 |
| first | 18 20 23 24 - - | 8 9 15 15 33 39 |

Soldiers every 5 min: 10 10 10 5 8 11 6 9 12 7 11 11 (original game NPC: 10 10 10 9 10 13 16 44 55 59 65 71).

First army orders (game min:sec): 2:42 sendIn 1 soldiers -> building 101; 15:00 march 5 soldiers -> 40,120; 22:26 armyTarget sword=7; 22:26 armyTarget spear=4; 22:26 armyTarget bow=3; 22:26 armyReserve; 25:06 armyTarget sword=9; 25:06 armyTarget spear=5; 25:06 armyTarget bow=4; 27:26 armyTarget sword=4; 27:26 armyTarget spear=2; 27:26 armyTarget bow=2.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 7 min, 6–21: army: Lost 4 soldiers in the last 5 minutes, and no barracks to train new ones.
- 5 min, 12–16: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 5 min, 18–36: settlers: No free settlers and every bed taken: build houses.
- 3 min, 20–22: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 1 min, 22: stall: smith: waiting for coal 59% of the last 5 minutes.
- 2 min, 24–25: stall: weaponsmith: waiting for coal 67% of the last 5 minutes.
- 30 min, 24–60: stall: smelter: waiting for coal 97% of the last 5 minutes.
- 24 min, 25–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 10 min, 26–42: stall: barracks: waiting for weapons from the weaponsmith 90% of the last 5 minutes.
- 4 min, 26–29: stall: iron mine: needs meat or fish 77% of the last 5 minutes.
- 20 min, 30–60: stall: weaponsmith: waiting for iron 97% of the last 5 minutes.
- 8 min, 34–51: army: Lost 4 soldiers in the last 5 minutes.
- 5 min, 37–52: stall: iron mine: deposit worn out 95% of the last 5 minutes.
- 2 min, 37–38: stall: butcher: waiting for pigs 91% of the last 5 minutes.
- 13 min, 46–58: stall: coal mine: deposit worn out 93% of the last 5 minutes.
- 4 min, 57–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 16 | 40 | 2036 | 3865 |
| 30 | 24 | 8 | 4 | 4 | 0 | 2 | 13 | 9 | 0 | 12 | 6 | 5 | 0 | 0 | 2 | 0 | 0 | 2 | 43 | 2463 | 8412 |
| 45 | 24 | 8 | 8 | 14 | 0 | 12 | 14 | 14 | 0 | 12 | 14 | 5 | 0 | 0 | 0 | 0 | 0 | 17 | 83 | 2872 | 9939 |
| 60 | 24 | 8 | 8 | 15 | 0 | 12 | 14 | 14 | 0 | 11 | 14 | 5 | 0 | 0 | 0 | 0 | 1 | 8 | 84 | 2953 | 9973 |

At the end: buildings (built+sites) guard 3, house2 2, wood 2, hq 1, quarry 1, saw 1, forest 1, fisher 1, ironmine 1, look 1, coalmine 1, smelter 1, house 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, pigfarm 1, butcher 1.
People: worker 16, carrier 11, soldier 7, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 50. Soldiers: sword 6, spear 1.

Goods produced in the game: fish 191, log 85, coal 80, stone 77, water 72, grain 72, plank 65, pig 58, ironore 51, meat 44, iron 37, sword 17, spear 5, bow 4, axe 2, saw 1, shovel 1, hammer 1, rod 1.
Goods consumed in the game: fish 182, stone 87, plank 81, coal 69, log 65, water 58, grain 58, pig 44, ironore 37, iron 32, meat 32, sword 17, spear 5, pick 4, axe 3, hammer 3, bow 3, shovel 2, saw 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (82 building-min): Idle 100%
- quarry (59 building-min): Stone pile full, nothing needs it right now 60%, Cutting stone 22%, Bringing stone to the pile 12%, Stone pile full, waiting for carriers 6%, Worker picking up a pickaxe 0%
- wood (101 building-min): Log pile full, nothing needs it right now 67%, Felling a tree 17%, Log pile full, waiting for carriers 12%, Bringing a log to the pile 5%, Worker picking up an axe 0%
- saw (58 building-min): Output pile full, nothing needs it right now 74%, Sawing planks 14%, Output pile full, waiting for carriers 9%, Stacking outside 3%, Fetching from the pile 0%
- guard (170 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 64%, Planting a sapling 36%, Worker picking up a shovel 0%
- fisher (57 building-min): Bringing a fish to the pile 39%, Fishing 33%, Fish pile full, nothing needs it right now 24%, Fish pile full, waiting for carriers 3%, Worker picking up a fishing rod 0%
- ironmine (55 building-min): Iron ore pile full, nothing needs it right now 38%, Deposit worn out: finding little iron ore 31%, Needs meat or fish: mining stopped 11%, Deposit thinning: mining iron ore 10%, Mining iron ore 4%
- look (44 building-min): Scout on watch 100%, Working 0%
- coalmine (43 building-min): Deposit worn out: finding little coal 42%, Deposit thinning: mining coal 30%, Mining coal 15%, Bringing coal out 5%, Needs bread or fish: mining stopped 4%
- smelter (42 building-min): Waiting for coal 85%, Smelting iron 11%, Stacking outside 2%, Worker picking up a hammer 1%, Output pile full, nothing needs it right now 1%
- house (41 building-min): Idle 100%
- smith (40 building-min): All tool targets met 93%, Waiting for coal 3%, Worker picking up a hammer 1%, Forging axe 1%, Forging saw 0%
- weaponsmith (38 building-min): Waiting for iron 83%, Forging sword 6%, Waiting for coal 5%, Stacking outside 2%, Forging spear 2%
- barracks (37 building-min): Waiting for weapons from the weaponsmith 85%, Weapons on the way 13%, Training soldiers 2%
- farm (35 building-min): Grain pile full, nothing needs it right now 52%, Sowing a field 16%, Grain pile full, waiting for carriers 13%, Harvesting grain 12%, Bringing grain to the pile 6%
- waterhut (34 building-min): Water pile full, nothing needs it right now 57%, Bringing water to the pile 17%, Fetching water 13%, Water pile full, waiting for carriers 13%, Worker on the way 0%
- pigfarm (32 building-min): Output pile full, nothing needs it right now 43%, Raising a pig 42%, Output pile full, waiting for carriers 9%, Stacking outside 5%, Waiting for water 1%
- butcher (31 building-min): Output pile full, nothing needs it right now 63%, Waiting for pigs 21%, Butchering 11%, Stacking outside 3%, Fetching from the pile 0%

Building sites, time per state (site-min): Builders at work 7, Leveling the ground 6, Waiting for a digger 6, Waiting for a builder 4.

Build order (placed at min:sec, finished at): house2 0:00→0:50, quarry 0:02→1:11, wood 0:04→1:23, saw 1:24→2:04, guard 1:26→2:41, forest 1:28→2:57, fisher 2:06→3:12, guard 2:42→3:29, guard 3:30→4:04, ironmine 4:28→5:01, look 15:00→15:52, coalmine 16:08→16:42, smelter 16:42→17:52, wood 17:00→18:04, house 17:52→18:40, smith 18:50→19:40, weaponsmith 20:54→22:00, barracks 22:24→23:13, farm 24:14→25:21, waterhut 25:26→26:24, pigfarm 27:20→28:27, butcher 28:30→29:22, house2 34:00→36:46.

Orders given: sendUnit 146, armyTarget 38, place 23, priority 5, profession 4, release 3, weaponKeep 3, attack 3, march 2, sendIn 1, armyReserve 1. Refused (order: reason, times): place: Too close to another building ×1.

People changing jobs: new carrier 50, carrier -> soldier 25, carrier -> worker 16, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1.

People's orders (3970 in all, 3946 done): worker mine coalmine 215, worker rest fisher 191, worker gather fisher 191, carrier haul fish fisher -> coalmine 161, worker eat coalmine 157, worker rest forest 148, worker gather forest 147, worker rest farm 147, worker gather farm 146, explorer explore 115, worker mine ironmine 95, worker rest wood 87, worker gather wood 85, worker rest coalmine 83. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×4.

Failed path searches (who (task) why: times): pioneer (claim 0) cut-off 15, pioneer (claim 1) cut-off 1.

Fights and contact: attacked enemy buildings 2 times (first 31:02); killed bow 4, sword 4; lost people sword 14, bow 6, spear 4; first saw player 1 at 16:00.

Your notes (8 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 6 field soldiers, 3 posts, carriers 16 (16 idle), coal/iron 0/1, sites 0, tips none.
- 20:00 Adaptive plan: 1 field soldiers, 3 posts, carriers 21 (16 idle), coal/iron 1/1, sites 0, tips army/timing.
- ×2 30:00–40:00 Adaptive plan: 5 field soldiers, 3 posts, carriers 22 (18 idle), coal/iron 1/1, sites 0, tips stall.
- 31:02 Attack: 10 field troops against guard 137; threshold 10.
- 46:02 Attack: 8 field troops against tower 268; threshold 8.
- 50:00 Adaptive plan: 3 field soldiers, 3 posts, carriers 15 (11 idle), coal/iron 1/1, sites 0, tips stall/army.


Script: 1852 turns, 1.1 ms average, worst 19 ms, 0 over 0.3 s, 0 errors. Orders refused: place 1 of 24.

### Map 4242: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 11/3/2042/10/30 | 30/6/2691/10/50 |
| 30 | 20/3/2447/13/34 | 44/6/3121/5/60 |
| 45 | 22/4/2806/25/38 | 37/5/3023/4/69 |
| 60 | 27/8/4193/32/48 | 17/1/1562/1/69 |
| first | 22 24 26 27 - - | 10 11 29 34 - - |

Soldiers every 5 min: 10 10 10 7 7 13 21 21 25 29 32 32 (original game NPC: 10 10 10 5 5 5 6 4 4 1 1 1).

First army orders (game min:sec): 2:34 sendIn 1 soldiers -> building 103; 15:00 march 5 soldiers -> 200,120; 25:26 armyTarget sword=8; 25:26 armyTarget spear=4; 25:26 armyTarget bow=4; 25:26 armyReserve; 25:46 armyTarget sword=9; 25:46 armyTarget spear=5; 29:26 armyTarget sword=8; 29:26 armyTarget spear=4; 29:46 armyTarget sword=9; 29:46 armyTarget spear=5.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 6–7: army: Lost 4 soldiers in the last 5 minutes, and no barracks to train new ones.
- 44 min, 9–60: stall: iron mine: deposit worn out 88% of the last 5 minutes.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: stall: forest: no free ground to plant in range inside your border 89% of the last 5 minutes.
- 6 min, 20–25: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 5 min, 22–58: settlers: No free settlers and every bed taken: build houses.
- 23 min, 28–56: stall: smelter: waiting for iron ore 84% of the last 5 minutes.
- 7 min, 33–46: stall: weaponsmith: waiting for iron 84% of the last 5 minutes.
- 3 min, 44–46: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 5 min, 56–60: weapons: 8 weapons lie unused: the barracks needs free settlers (build houses).
- 4 min, 57–60: stall: barracks: waiting for weapons from the weaponsmith 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 17 | 0 | 0 | 0 | 0 | 0 | 0 | 7 | 0 | 0 | 0 | 0 | 0 | 0 | 14 | 38 | 2042 | 3728 |
| 30 | 24 | 8 | 16 | 15 | 0 | 0 | 0 | 0 | 0 | 15 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 8 | 53 | 2447 | 8316 |
| 45 | 40 | 36 | 38 | 14 | 0 | 0 | 0 | 5 | 0 | 25 | 1 | 6 | 0 | 0 | 0 | 0 | 0 | 12 | 59 | 2806 | 12304 |
| 60 | 72 | 120 | 115 | 18 | 0 | 0 | 6 | 18 | 9 | 53 | 1 | 36 | 14 | 8 | 3 | 3 | 2 | 23 | 61 | 4193 | 14591 |

At the end: buildings (built+sites) guard 8, house2 3, quarry 2, wood 2, hq 1, saw 1, forest 1, fisher 1, ironmine 1, look 1, coalmine 1, smelter 1, house 1, smith 1, weaponsmith 1, barracks 1.
People: carrier 27, soldier 23, worker 13, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 70. Soldiers: sword 11, spear 6, bow 6.

Goods produced in the game: fish 302, coal 115, stone 74, log 73, ironore 55, iron 54, plank 53, sword 17, bow 8, spear 7, axe 1, saw 1, pick 1, shovel 1, hammer 1, rod 1.
Goods consumed in the game: fish 294, coal 92, stone 76, plank 69, ironore 54, log 53, iron 38, sword 17, bow 8, spear 7, pick 5, hammer 3, axe 2, shovel 2, saw 1, rod 1.
Goods captured in the game: plank 95, stone 80, log 48, coal 30, iron 20, grain 18, goldore 14, flour 9, pig 8, gold 8, water 6, fish 4, sword 3, spear 3, bow 2, axe 1, saw 1, pick 1, shovel 1, hammer 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (85 building-min): Idle 100%
- quarry (96 building-min): Stone pile full, nothing needs it right now 75%, Cutting stone 13%, Bringing stone to the pile 6%, Stone pile full, waiting for carriers 6%, Worker picking up a pickaxe 0%
- wood (95 building-min): Log pile full, nothing needs it right now 73%, Felling a tree 14%, Log pile full, waiting for carriers 9%, Bringing a log to the pile 3%, Worker picking up an axe 0%
- saw (58 building-min): Output pile full, nothing needs it right now 81%, Sawing planks 12%, Output pile full, waiting for carriers 5%, Stacking outside 3%, Fetching from the pile 0%
- guard (242 building-min): Idle 98%, Waiting for a swordsman: train one at the barracks 1%, Soldiers on the way 0%, Free soldiers are too far away: bring one onto your land or near this building 0%
- forest (57 building-min): No free ground to plant in range inside your border 75%, Planting a sapling 25%, Worker picking up a shovel 0%, Working 0%
- fisher (57 building-min): Fish pile full, nothing needs it right now 39%, Fishing 29%, Bringing a fish to the pile 26%, Fish pile full, waiting for carriers 5%, Worker picking up a fishing rod 0%
- ironmine (53 building-min): Deposit worn out: finding little iron ore 79%, Iron ore pile full, nothing needs it right now 11%, Bringing iron ore out 3%, Came back empty-handed 2%, Fetching food 2%
- look (44 building-min): Scout on watch 100%, Idle 0%, Working 0%
- coalmine (39 building-min): Deposit thinning: mining coal 42%, Mining coal 30%, Coal pile full, nothing needs it right now 14%, Bringing coal out 8%, Coal pile full, waiting for carriers 2%
- smelter (39 building-min): Waiting for iron ore 76%, Smelting iron 18%, Stacking outside 4%, Output pile full, nothing needs it right now 1%, Fetching from the pile 0%
- house (38 building-min): Idle 100%
- smith (36 building-min): All tool targets met 96%, Worker picking up a hammer 2%, Stacking outside 0%, Forging axe 0%, Forging shovel 0%
- weaponsmith (35 building-min): Waiting for iron 54%, All weapon targets met 30%, Forging sword 6%, Forging bow 3%, Stacking outside 3%
- barracks (34 building-min): Waiting for weapons from the weaponsmith 69%, Weapons on the way 27%, Soldier targets met 3%, Training soldiers 1%

Building sites, time per state (site-min): Builders at work 6, Leveling the ground 6, Waiting for a digger 5, Waiting for a builder 4, Waiting for materials 1.

Build order (placed at min:sec, finished at): house2 0:00→1:07, quarry 0:02→1:24, wood 0:04→1:37, saw 1:38→2:12, guard 1:40→2:33, forest 1:52→2:47, fisher 2:12→3:01, guard 2:34→3:20, guard 3:22→4:04, ironmine 6:04→6:45, look 15:00→15:57, coalmine 19:18→20:41, smelter 20:42→21:24, house 21:24→22:20, quarry 21:56→22:36, wood 22:08→22:55, smith 23:06→23:48, weaponsmith 24:10→25:23, barracks 25:24→26:22, house2 34:00→35:27, house2 56:14→58:14.

Orders given: sendUnit 166, armyTarget 38, place 21, release 16, attack 6, priority 5, profession 4, march 4, weaponKeep 3, sendIn 1, armyReserve 1. Refused (order: reason, times): place: Too close to another building ×1.

People changing jobs: new carrier 70, carrier -> soldier 32, carrier -> worker 13, carrier -> explorer 2, new soldier 2, carrier -> geologist 1, carrier -> pioneer 1.

People's orders (3611 in all, 3582 done): worker rest fisher 303, worker gather fisher 303, worker mine ironmine 217, worker mine coalmine 206, carrier haul fish fisher -> ironmine 180, worker eat ironmine 176, worker rest forest 127, worker gather forest 126, worker eat coalmine 118, worker rest coalmine 117, carrier haul fish fisher -> coalmine 116, explorer explore 115, worker rest quarry 76, worker rest wood 75. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×4.

Failed path searches (who (task) why: times): pioneer (claim 0) cut-off 41, pioneer (claim 1) cut-off 2.

Fights and contact: attacked enemy buildings 6 times (first 34:06); took hq 34:07, guard 35:11, guard 46:16, guard 46:56, guard 48:00, guard 52:09; killed bow 3, sword 7; lost people bow 5, sword 4, spear 1; first saw player 2 at 16:00.

Your notes (10 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Adaptive plan: 10 field soldiers, 0 posts, carriers 6 (6 idle), coal/iron 0/0, sites 0, tips none.
- ×4 10:00–50:00 Adaptive plan: 21 field soldiers, 7 posts, carriers 10 (6 idle), coal/iron 1/1, sites 0, tips stall.
- 20:00 Adaptive plan: 3 field soldiers, 3 posts, carriers 15 (14 idle), coal/iron 1/1, sites 1, tips stall/timing.
- 34:06 Attack: 16 field troops against hq 37; threshold 16.
- ×3 46:02–52:08 Attack: 8 field troops against guard 132; threshold 8.


Script: 1849 turns, 1.6 ms average, worst 15 ms, 0 over 0.3 s, 0 errors. Orders refused: place 1 of 22.

### Map 4242: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 17/3/2194/13/37 | 23/6/2564/10/40 |
| 30 | 20/5/3676/26/33 | 8/2/1291/1/40 |
| 45 | 20/5/3996/26/33 | 8/2/1291/1/40 |
| 60 | 20/5/4315/26/33 | 8/2/1291/1/40 |
| first | 8 9 11 12 - - | 26 27 - - - - |

Soldiers every 5 min: 10 10 13 19 26 26 26 26 26 26 26 26 (original game NPC: 10 10 10 3 3 1 1 1 1 1 1 1).

First army orders (game min:sec): 2:50 sendIn 1 soldiers -> building 117; 11:06 armyReserve; 11:26 armyTarget sword=5; 11:26 armyTarget spear=3; 15:00 march 5 soldiers -> 40,120; 15:06 armyTarget sword=7; 15:06 armyTarget spear=4; 15:06 armyTarget bow=3; 16:18 attack 12 soldiers -> building 131; 17:06 armyTarget sword=6; 17:06 armyTarget spear=3; 17:16 attack 1 soldiers -> building 131.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 6–7: army: Lost 4 soldiers in the last 5 minutes, and no barracks to train new ones.
- 5 min, 11–15: stall: smith: waiting for coal 55% of the last 5 minutes.
- 36 min, 13–60: stall: weaponsmith: waiting for coal 100% of the last 5 minutes.
- 18 min, 14–32: stall: barracks: waiting for weapons from the weaponsmith 94% of the last 5 minutes.
- 8 min, 17–24: stall: smelter: waiting for coal 56% of the last 5 minutes.
- 41 min, 20–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 2 min, 21–22: settlers: No free settlers and every bed taken: build houses.
- 7 min, 25–31: stall: iron mine: deposit worn out 93% of the last 5 minutes.
- 2 min, 32–33: army: Lost 5 soldiers in the last 5 minutes.
- 28 min, 33–60: stall: coal mine: needs bread or fish 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 7 | 4 | 17 | 0 | 0 | 0 | 1 | 0 | 12 | 39 | 2194 | 4211 |
| 30 | 16 | 52 | 77 | 11 | 8 | 0 | 14 | 8 | 14 | 12 | 4 | 20 | 0 | 0 | 0 | 0 | 0 | 14 | 43 | 3676 | 10980 |
| 45 | 16 | 52 | 77 | 12 | 8 | 0 | 14 | 8 | 14 | 12 | 14 | 20 | 0 | 0 | 0 | 0 | 0 | 15 | 52 | 3996 | 12519 |
| 60 | 16 | 52 | 77 | 12 | 8 | 0 | 14 | 8 | 14 | 12 | 14 | 20 | 0 | 0 | 0 | 0 | 0 | 15 | 52 | 4315 | 14636 |

At the end: buildings (built+sites) guard 5, house2 2, hq 1, quarry 1, wood 1, saw 1, forest 1, fisher 1, ironmine 1, coalmine 1, smelter 1, house 1, smith 1, weaponsmith 1, barracks 1.
People: soldier 20, carrier 15, worker 10, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 50. Soldiers: sword 9, spear 6, bow 5.

Goods produced in the game: fish 199, coal 94, ironore 65, log 54, stone 51, iron 51, plank 42, sword 13, spear 7, bow 7, hammer 1, saw 1, shovel 1, rod 1.
Goods consumed in the game: fish 193, coal 82, stone 61, plank 58, ironore 51, log 42, iron 31, sword 13, spear 7, bow 7, pick 4, hammer 3, shovel 2, axe 1, saw 1, rod 1.
Goods captured in the game: stone 52, plank 29, water 14, flour 14, grain 8, bread 8, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (96 building-min): Idle 100%
- quarry (59 building-min): Stone pile full, nothing needs it right now 76%, Cutting stone 14%, Bringing stone to the pile 7%, Stone pile full, waiting for carriers 2%, Worker picking up a pickaxe 0%
- wood (58 building-min): Log pile full, nothing needs it right now 72%, Felling a tree 18%, Bringing a log to the pile 5%, Log pile full, waiting for carriers 4%, Worker picking up an axe 0%
- saw (58 building-min): Output pile full, nothing needs it right now 85%, Sawing planks 9%, Output pile full, waiting for carriers 3%, Stacking outside 2%, Waiting for logs 0%
- guard (242 building-min): Idle 99%, Waiting for a swordsman: train one at the barracks 1%, Soldiers on the way 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 74%, Planting a sapling 25%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- fisher (57 building-min): Fish pile full, nothing needs it right now 60%, Fishing 20%, Bringing a fish to the pile 17%, Fish pile full, waiting for carriers 3%, Worker picking up a fishing rod 0%
- ironmine (55 building-min): Iron ore pile full, nothing needs it right now 38%, Deposit worn out: finding little iron ore 30%, Deposit thinning: mining iron ore 16%, Mining iron ore 7%, Bringing iron ore out 3%
- coalmine (53 building-min): Needs bread or fish: mining stopped 61%, Mining coal 28%, Bringing coal out 5%, Deposit thinning: mining coal 4%, Fetching food 1%
- smelter (52 building-min): Output pile full, nothing needs it right now 69%, Waiting for coal 16%, Smelting iron 12%, Stacking outside 3%, Fetching from the pile 0%
- house (51 building-min): Idle 100%
- smith (51 building-min): All tool targets met 91%, Waiting for coal 7%, Worker picking up a hammer 0%, Forging hammer 0%, Forging shovel 0%
- weaponsmith (49 building-min): Waiting for coal 79%, All weapon targets met 8%, Waiting for iron 4%, Forging sword 3%, Forging spear 2%
- barracks (48 building-min): Waiting for weapons from the weaponsmith 90%, Weapons on the way 7%, Soldier targets met 3%, Training soldiers 0%

Building sites, time per state (site-min): Waiting for a digger 5, Builders at work 5, Leveling the ground 4, Waiting for a builder 3.

Build order (placed at min:sec, finished at): house2 0:00→1:06, quarry 0:00→1:22, wood 0:02→1:35, saw 1:36→2:13, guard 1:38→2:50, forest 1:52→3:05, fisher 2:14→3:30, guard 2:52→3:56, guard 3:58→4:50, ironmine 4:16→5:20, coalmine 6:14→6:43, smelter 6:44→7:43, house 7:44→8:33, smith 8:14→8:59, weaponsmith 9:52→10:46, barracks 11:04→11:56, house2 21:24→22:40.

Orders given: sendUnit 136, armyTarget 35, place 17, release 9, priority 5, attack 5, profession 4, weaponKeep 3, march 3, sendIn 1, armyReserve 1. None refused.

People changing jobs: new carrier 50, carrier -> soldier 27, carrier -> worker 10, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1, new soldier 1.

People's orders (2874 in all, 2855 done): worker rest fisher 200, worker gather fisher 199, worker mine ironmine 175, worker mine coalmine 140, worker eat ironmine 122, carrier haul fish fisher -> ironmine 120, soldier attack guard 118, explorer explore 115, worker rest forest 111, worker gather forest 110, worker rest coalmine 97, carrier haul fish fisher -> coalmine 71, worker eat coalmine 71, worker rest ironmine 66. None failed.

Failed path searches (who (task) why: times): pioneer (claim 1) cut-off 1.

Fights and contact: attacked enemy buildings 5 times (first 16:18); took guard 17:32, hq 25:20, guard 29:04; killed bow 3, sword 6; lost people sword 5, bow 5, spear 1; first saw player 1 at 16:00.

Your notes (9 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 6 field soldiers, 3 posts, carriers 23 (14 idle), coal/iron 1/1, sites 1, tips none.
- ×2 16:18–28:32 Attack: 11 field troops against guard 79; threshold 10.
- ×4 20:00–50:00 Adaptive plan: 20 field soldiers, 5 posts, carriers 15 (15 idle), coal/iron 1/1, sites 0, tips stall.
- 25:14 Attack: 16 field troops against hq 1; threshold 16.


Script: 1841 turns, 1.1 ms average, worst 15 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 16/2/1941/27/33 | 22/6/2997/10/40 |
| 30 | 27/4/2966/32/30 | 39/4/2942/4/66 |
| 45 | 28/4/3423/16/45 | 57/4/3711/9/77 |
| 60 | 28/4/3787/17/32 | 69/13/9633/52/87 |
| first | 6 9 10 11 - - | 8 8 23 24 49 53 |

Soldiers every 5 min: 10 10 27 30 28 32 30 30 16 9 12 17 (original game NPC: 10 10 10 6 5 4 4 4 9 23 37 52).

First army orders (game min:sec): 2:40 sendIn 1 soldiers -> building 102; 9:30 armyTarget sword=5; 9:30 armyTarget spear=3; 9:30 armyReserve; 10:50 armyTarget sword=6; 10:50 armyTarget bow=3; 11:10 armyTarget spear=4; 11:30 armyTarget sword=7; 11:50 armyTarget bow=4; 12:10 armyTarget sword=8; 12:30 armyTarget spear=5; 12:50 armyTarget sword=9.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 20 min, 6–42: settlers: No free settlers and every bed taken: build houses.
- 11 min, 14–26: stall: smelter: waiting for coal 94% of the last 5 minutes.
- 9 min, 18–52: stall: barracks: waiting for weapons from the weaponsmith 97% of the last 5 minutes.
- 10 min, 19–60: stall: iron mine: deposit worn out 94% of the last 5 minutes.
- 12 min, 20–31: stall: smith: waiting for coal 100% of the last 5 minutes.
- 8 min, 22–52: stall: weaponsmith: waiting for iron 97% of the last 5 minutes.
- 2 min, 22–23: stall: pig farm: waiting for grain and water 94% of the last 5 minutes.
- 14 min, 24–60: stall: forest: no free ground to plant in range inside your border 94% of the last 5 minutes.
- 3 min, 27–45: stall: iron mine: needs meat or fish 100% of the last 5 minutes.
- 14 min, 28–42: stall: quarry: stone pile full, waiting for carriers 100% of the last 5 minutes.
- 4 min, 28–40: stall: butcher: waiting for pigs 100% of the last 5 minutes.
- 10 min, 31–41: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 2 min, 32–33: stall: pig farm: output pile full, waiting for carriers 100% of the last 5 minutes.
- 10 min, 34–44: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 7 min, 40–50: stall: smelter: waiting for iron ore 94% of the last 5 minutes.
- 3 min, 42–44: weapons: 3 weapons lie unused: the barracks needs free settlers (build houses).
- 1 min, 43: stall: barracks: waiting for a free settler to train 100% of the last 5 minutes.
- 8 min, 43–50: army: Lost 7 soldiers in the last 5 minutes.
- 2 min, 43–44: settlers: No free settlers: build houses.
- 10 min, 46–56: stall: fisher: no fish in range inside your border 94% of the last 5 minutes.
- 6 min, 51–56: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 5 min, 56–60: stall: coal mine: deposit worn out 93% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 9 | 15 | 12 | 5 | 0 | 0 | 0 | 0 | 0 | 11 | 9 | 5 | 0 | 0 | 0 | 0 | 0 | 9 | 16 | 1941 | 3659 |
| 30 | 24 | 8 | 16 | 6 | 7 | 0 | 20 | 21 | 8 | 11 | 1 | 3 | 0 | 0 | 1 | 0 | 0 | 0 | 82 | 2966 | 8827 |
| 45 | 21 | 8 | 10 | 4 | 0 | 0 | 18 | 18 | 11 | 23 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 2 | 58 | 3423 | 10395 |
| 60 | 24 | 8 | 13 | 12 | 12 | 11 | 20 | 21 | 14 | 20 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 1 | 98 | 3787 | 13064 |

At the end: buildings (built+sites) guard 4, house2 3, quarry 2, wood 2, hq 1, saw 1, forest 1, fisher 1, ironmine 1, coalmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, pigfarm 1, mill 1, bakery 1, house 1, butcher 1.
People: worker 18, soldier 11, carrier 6, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 70. Soldiers: sword 7, bow 2, spear 2.

Goods produced in the game: grain 136, fish 133, coal 132, water 121, log 99, stone 98, plank 79, flour 66, ironore 57, iron 57, bread 52, pig 49, meat 35, sword 26, spear 11, bow 11, axe 2, saw 1, shovel 1, hammer 1, rod 1, pick 1.
Goods consumed in the game: fish 127, grain 115, coal 112, stone 103, water 101, plank 95, log 79, ironore 57, iron 55, flour 52, bread 40, pig 36, sword 26, meat 24, spear 11, bow 11, pick 5, axe 3, hammer 3, shovel 2, saw 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (127 building-min): Idle 100%
- quarry (102 building-min): Stone pile full, waiting for carriers 44%, Stone pile full, nothing needs it right now 20%, Cutting stone 15%, No stone in range inside your border 13%, Bringing stone to the pile 7%
- wood (102 building-min): Log pile full, waiting for carriers 46%, Log pile full, nothing needs it right now 28%, Felling a tree 20%, Bringing a log to the pile 6%, Worker picking up an axe 1%
- saw (58 building-min): Output pile full, nothing needs it right now 34%, Output pile full, waiting for carriers 33%, Sawing planks 17%, Waiting for logs 11%, Stacking outside 4%
- guard (183 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a swordsman: train one at the barracks 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 67%, Planting a sapling 33%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- fisher (57 building-min): No fish in range inside your border 60%, Fishing 14%, Bringing a fish to the pile 11%, Fish pile full, nothing needs it right now 7%, No way back to the building 5%
- ironmine (55 building-min): Needs meat or fish: mining stopped 41%, Deposit worn out: finding little iron ore 38%, Deposit thinning: mining iron ore 11%, Mining iron ore 5%, Bringing iron ore out 3%
- coalmine (55 building-min): Deposit thinning: mining coal 36%, Deposit worn out: finding little coal 20%, Needs bread or fish: mining stopped 16%, Mining coal 14%, Bringing coal out 7%
- smelter (54 building-min): Waiting for iron ore 57%, Waiting for coal 24%, Smelting iron 13%, Stacking outside 3%, Output pile full, nothing needs it right now 2%
- smith (52 building-min): All tool targets met 65%, Waiting for coal 32%, Worker picking up a hammer 1%, Forging axe 0%, Stacking outside 0%
- weaponsmith (51 building-min): Waiting for iron 69%, All weapon targets met 16%, Forging sword 7%, Forging bow 3%, Forging spear 3%
- barracks (50 building-min): Waiting for weapons from the weaponsmith 68%, Waiting for a free settler to train 13%, Weapons on the way 10%, Soldier targets met 7%, Training soldiers 3%
- farm (45 building-min): Grain pile full, waiting for carriers 45%, Sowing a field 19%, Harvesting grain 15%, Grain pile full, nothing needs it right now 14%, Bringing grain to the pile 7%
- waterhut (45 building-min): Water pile full, waiting for carriers 52%, Water pile full, nothing needs it right now 21%, No way back to the building 13%, Fetching water 12%, Bringing water to the pile 2%
- pigfarm (41 building-min): Output pile full, waiting for carriers 44%, Raising a pig 27%, Output pile full, nothing needs it right now 11%, Waiting for grain and water 10%, Stacking outside 3%
- mill (40 building-min): Output pile full, waiting for carriers 48%, Output pile full, nothing needs it right now 30%, Grinding flour 9%, Waiting for grain 7%, Stacking outside 5%
- bakery (39 building-min): Waiting for flour 41%, Baking bread 30%, Output pile full, nothing needs it right now 18%, Stacking outside 4%, Waiting for a free settler 3%
- house (38 building-min): Idle 100%
- butcher (34 building-min): Waiting for pigs 56%, Output pile full, nothing needs it right now 31%, Butchering 8%, Stacking outside 3%, Worker picking up an axe 1%

Building sites, time per state (site-min): Waiting for a digger 9, Leveling the ground 8, Builders at work 8, Waiting for a builder 5, Waiting for materials 4.

Build order (placed at min:sec, finished at): house2 0:00→1:09, quarry 0:00→1:25, wood 0:02→1:39, saw 1:40→2:11, guard 1:50→2:39, forest 1:52→2:56, fisher 2:12→3:24, guard 3:02→4:13, ironmine 3:04→4:32, coalmine 3:24→4:48, smelter 4:48→5:57, house2 5:58→7:55, smith 6:46→8:23, weaponsmith 8:24→9:16, barracks 9:28→10:22, farm 13:48→15:02, waterhut 14:26→15:26, wood 15:00→15:58, quarry 15:44→16:12, pigfarm 18:26→19:16, mill 18:40→19:39, bakery 19:18→20:58, house 20:00→22:21, butcher 24:36→25:34, house2 41:00→44:03, guard 52:50→54:04, guard 54:48→55:53.

Demolished or burned: guard (burned) 50:08.

Orders given: sendUnit 137, armyTarget 83, place 27, priority 5, profession 4, attack 4, sendIn 3, weaponKeep 3, release 3, armyReserve 1, march 1. None refused.

People changing jobs: new carrier 69, carrier -> soldier 48, carrier -> worker 17, new soldier 5, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1, new worker 1.

People's orders (5203 in all, 4986 done): worker rest farm 277, worker gather farm 276, worker mine coalmine 193, worker rest coalmine 135, worker rest fisher 134, worker rest forest 133, worker gather fisher 133, worker gather forest 132, worker mine ironmine 130, worker rest waterhut 122, worker gather waterhut 121, explorer explore 115, worker rest wood 101, worker eat coalmine 101. Not done (outcome: times): failed: no way (worker (work gather) own-land-split) ×168; ended: the person is gone (became a soldier, defeated or removed) ×5; failed: spot not next to the border ×1.

Failed path searches (who (task) why: times): worker (work decide) own-land-split 508, worker (work gather) own-land-split 336, pioneer (claim 1) cut-off 2.

Fights and contact: attacked enemy buildings 5 times (first 15:44); was attacked 2 times (first 50:02); took guard 16:23, guard 24:53; lost guard 50:40; killed bow 4, sword 27; lost people sword 20, bow 12, spear 9; first saw player 2 at 16:00.

Warnings: path-fail 29. Last: 54:50 path-fail: worker (work decide) failed 5 times within a minute to find a way, last to 46,105: own-land-split | 55:24 path-fail: worker (work gather) failed 5 times within a minute to find a way, last to 32,112: own-land-split | 58:20 path-fail: worker (work gather) failed 5 times within a minute to find a way, last to 32,112: own-land-split

Your notes (10 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 32 (23 idle), coal/iron 1/1, sites 1, tips none.
- ×4 15:44–59:38 Attack: 10 field troops against guard 133; threshold 10.
- ×2 20:00–30:00 Adaptive plan: 27 field soldiers, 4 posts, carriers 4 (0 idle), coal/iron 1/1, sites 0, tips stall/settlers.
- 40:00 Adaptive plan: 25 field soldiers, 4 posts, carriers 2 (0 idle), coal/iron 1/1, sites 0, tips stall.
- 50:00 Adaptive plan: 3 field soldiers, 4 posts, carriers 17 (16 idle), coal/iron 1/1, sites 0, tips stall/army.


Script: 1936 turns, 1.0 ms average, worst 17 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 17/3/2030/20/30 | 28/6/2628/10/50 |
| 30 | 25/3/2717/28/47 | 31/5/2558/6/74 |
| 45 | 27/5/3231/26/43 | 29/3/2484/9/69 |
| 60 | 28/6/4586/32/35 | 26/1/2137/7/68 |
| first | 7 9 11 12 58 - | 9 10 14 16 - - |

Soldiers every 5 min: 10 10 20 19 20 28 28 28 26 28 31 32 (original game NPC: 10 10 10 5 7 6 4 4 9 7 7 7).

First army orders (game min:sec): 2:54 sendIn 1 soldiers -> building 99; 10:58 armyReserve; 11:18 armyTarget sword=5; 11:18 armyTarget spear=3; 12:58 armyTarget bow=3; 13:18 armyTarget sword=6; 13:38 armyTarget spear=4; 13:58 armyTarget sword=7; 14:18 armyTarget bow=4; 14:38 armyTarget sword=8; 15:00 march 5 soldiers -> 40,120; 15:18 armyTarget spear=5.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 6–7: army: Lost 4 soldiers in the last 5 minutes, and no barracks to train new ones.
- 1 min, 11: stall: smith: waiting for coal 58% of the last 5 minutes.
- 27 min, 13–60: stall: weaponsmith: waiting for coal 97% of the last 5 minutes.
- 18 min, 14–31: stall: smelter: waiting for coal 57% of the last 5 minutes.
- 34 min, 17–60: stall: barracks: waiting for weapons from the weaponsmith 91% of the last 5 minutes.
- 4 min, 18–21: stall: weaponsmith: waiting for iron 53% of the last 5 minutes.
- 6 min, 18–27: settlers: No free settlers and every bed taken: build houses.
- 4 min, 22–25: stall: iron mine: needs meat or fish 66% of the last 5 minutes.
- 6 min, 25–30: stall: butcher: waiting for pigs 56% of the last 5 minutes.
- 30 min, 27–56: stall: forest: no free ground to plant in range inside your border 94% of the last 5 minutes.
- 5 min, 31–35: stall: iron mine: deposit worn out 92% of the last 5 minutes.
- 2 min, 36–37: army: Lost 5 soldiers in the last 5 minutes.
- 7 min, 54–60: stall: coal mine: deposit worn out 94% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 8 | 0 | 0 | 0 | 0 | 0 | 11 | 13 | 6 | 0 | 0 | 1 | 0 | 0 | 10 | 35 | 2030 | 3619 |
| 30 | 22 | 30 | 31 | 15 | 0 | 12 | 14 | 13 | 0 | 7 | 2 | 9 | 0 | 0 | 0 | 0 | 0 | 19 | 61 | 2717 | 9484 |
| 45 | 22 | 30 | 31 | 19 | 0 | 11 | 14 | 14 | 0 | 11 | 13 | 20 | 0 | 0 | 1 | 0 | 0 | 16 | 88 | 3231 | 12033 |
| 60 | 22 | 36 | 39 | 20 | 0 | 12 | 14 | 14 | 0 | 11 | 14 | 20 | 0 | 0 | 0 | 0 | 0 | 12 | 92 | 4586 | 14491 |

At the end: buildings (built+sites) guard 5, house 3, house2 2, quarry 2, hq 1, wood 1, saw 1, forest 1, fisher 1, ironmine 1, coalmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, pigfarm 1, butcher 1, tower 1.
People: soldier 24, worker 15, carrier 12, digger 2, builder 2, explorer 2, geologist 1, pioneer 1; beds 70. Soldiers: sword 11, spear 6, bow 7.

Goods produced in the game: fish 246, coal 133, stone 93, log 86, ironore 85, grain 81, water 81, plank 74, iron 71, pig 67, meat 53, sword 22, bow 12, spear 11, saw 1, shovel 1, hammer 1, rod 1, pick 1, axe 1.
Goods consumed in the game: fish 240, coal 122, stone 95, plank 90, log 74, ironore 71, water 67, grain 67, pig 53, iron 51, meat 41, sword 22, bow 12, spear 11, pick 5, hammer 3, axe 2, shovel 2, saw 1, rod 1, scythe 1.
Goods lost in the game: stone 7, gold 7, plank 5, coal 3.
Goods captured in the game: plank 14, fish 8, stone 7, gold 7, log 6, coal 3.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (90 building-min): Idle 100%
- quarry (98 building-min): Stone pile full, nothing needs it right now 72%, Cutting stone 15%, Bringing stone to the pile 7%, Stone pile full, waiting for carriers 4%, Worker picking up a pickaxe 0%
- wood (58 building-min): Log pile full, nothing needs it right now 59%, Felling a tree 28%, Bringing a log to the pile 7%, Log pile full, waiting for carriers 5%, Worker picking up an axe 0%
- saw (58 building-min): Output pile full, nothing needs it right now 74%, Sawing planks 16%, Stacking outside 4%, Output pile full, waiting for carriers 3%, Waiting for logs 3%
- guard (223 building-min): Idle 99%, Waiting for a swordsman: train one at the barracks 0%, Soldiers on the way 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 64%, Planting a sapling 36%, Worker picking up a shovel 0%, Idle 0%
- fisher (56 building-min): Bringing a fish to the pile 52%, Fishing 45%, Fish pile full, nothing needs it right now 2%, No fish in range inside your border 1%, Worker picking up a fishing rod 0%
- ironmine (55 building-min): Deposit worn out: finding little iron ore 39%, Iron ore pile full, nothing needs it right now 24%, Deposit thinning: mining iron ore 13%, Mining iron ore 9%, Needs meat or fish: mining stopped 8%
- coalmine (54 building-min): Deposit thinning: mining coal 49%, Mining coal 22%, Deposit worn out: finding little coal 18%, Bringing coal out 7%, Fetching food 2%
- smelter (54 building-min): Output pile full, nothing needs it right now 42%, Waiting for coal 27%, Smelting iron 17%, Waiting for iron ore 7%, Stacking outside 4%
- house (130 building-min): Idle 100%
- smith (52 building-min): All tool targets met 95%, Waiting for coal 3%, Worker picking up a hammer 0%, Stacking outside 0%, Forging saw 0%
- weaponsmith (50 building-min): Waiting for coal 59%, All weapon targets met 16%, Waiting for iron 10%, Forging sword 6%, Forging bow 3%
- barracks (48 building-min): Waiting for weapons from the weaponsmith 76%, Weapons on the way 13%, Soldier targets met 10%, Training soldiers 1%, Idle 0%
- farm (42 building-min): Grain pile full, nothing needs it right now 61%, Sowing a field 15%, Harvesting grain 11%, Bringing grain to the pile 6%, Grain pile full, waiting for carriers 5%
- waterhut (40 building-min): Water pile full, nothing needs it right now 76%, Water pile full, waiting for carriers 10%, Fetching water 8%, Bringing water to the pile 6%, Worker on the way 0%
- pigfarm (38 building-min): Output pile full, nothing needs it right now 51%, Raising a pig 40%, Stacking outside 5%, Waiting for water 2%, Output pile full, waiting for carriers 1%
- butcher (37 building-min): Output pile full, nothing needs it right now 73%, Waiting for pigs 11%, Butchering 11%, Stacking outside 4%, Output pile full, waiting for carriers 1%
- tower (3 building-min): Waiting for a swordsman: train one at the barracks 69%, Idle 31%, Waiting for a soldier 1%

Building sites, time per state (site-min): Builders at work 8, Leveling the ground 7, Waiting for a digger 6, Waiting for a builder 3, Waiting for materials 0.

Build order (placed at min:sec, finished at): house2 0:00→1:08, quarry 0:00→1:26, wood 0:02→1:39, saw 1:40→2:13, guard 1:42→2:54, forest 1:56→3:10, fisher 2:14→3:31, guard 2:56→3:50, guard 3:52→4:23, ironmine 4:14→4:50, coalmine 5:02→5:32, smelter 5:38→6:26, house 6:28→7:11, smith 7:46→8:23, weaponsmith 9:36→10:24, barracks 10:56→11:39, farm 17:38→18:25, house 18:14→19:02, waterhut 19:10→20:13, quarry 20:02→20:50, pigfarm 21:30→22:19, butcher 21:54→22:52, house 22:34→23:23, house2 27:00→28:38, tower 54:56→57:00.

Demolished or burned: guard (burned) 16:56, guard (burned) 45:25, guard (burned) 49:18.

Orders given: sendUnit 138, armyTarget 68, place 25, release 15, attack 6, priority 5, march 5, profession 4, weaponKeep 3, sendIn 1, armyReserve 1. None refused.

People changing jobs: new carrier 70, carrier -> soldier 45, carrier -> worker 15, new soldier 3, carrier -> explorer 2, carrier -> geologist 1, carrier -> pioneer 1.

People's orders (5101 in all, 5073 done): worker mine coalmine 305, worker rest fisher 247, worker gather fisher 246, worker eat coalmine 202, carrier haul fish fisher -> coalmine 201, worker rest farm 164, worker gather farm 163, worker mine ironmine 148, worker rest forest 143, worker gather forest 142, worker rest coalmine 134, soldier attack guard 116, explorer explore 115, worker rest quarry 95. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×5.

Fights and contact: attacked enemy buildings 7 times (first 15:48); took guard 16:55, hq 26:15, guard 32:57, guard 33:27, guard 45:25, guard 48:20; killed sword 10, bow 5; lost people bow 8, sword 10, spear 5; first saw player 1 at 16:00.

Your notes (11 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 6 field soldiers, 3 posts, carriers 23 (17 idle), coal/iron 1/1, sites 1, tips none.
- ×4 15:48–48:06 Attack: 10 field troops against guard 143; threshold 10.
- ×4 20:00–50:00 Adaptive plan: 22 field soldiers, 5 posts, carriers 16 (14 idle), coal/iron 1/1, sites 0, tips stall.
- 26:00 Attack: 16 field troops against hq 1; threshold 16.


Script: 1883 turns, 0.8 ms average, worst 15 ms, 0 over 0.3 s, 0 errors. Orders refused: none.
