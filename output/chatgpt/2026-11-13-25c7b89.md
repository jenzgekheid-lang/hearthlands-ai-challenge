# Tournament: chatgpt

Game version 207. Written for: chatgpt 207.

- chatgpt: hearthlands-ai-challenge, commit 25c7b89

Maps 20261030, 777, 4242, 31, each twice (sides swapped), up to 60 game minutes (1x). 55 s.

Each game ends with the script's own game log: what it may know (its own side, and what happened to it or what it saw). Times are game min:sec.

| Opponent | Won | Lost | Undecided |
|---|---|---|---|
| original game NPC | 0 | 0 | 8 |

## Games

Each row: buildings / military / land tiles / soldiers / people at the minute shown. First: game minute of the first smelter, smith, weaponsmith, barracks, tower, castle (- = never).

### Map 31: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 20/1/1355/16/54 | 32/6/3151/10/50 |
| 30 | 27/3/2019/38/32 | 68/12/7075/32/98 |
| 45 | 29/4/2744/58/32 | 80/20/13164/59/101 |
| 60 | 30/4/2744/78/32 | 86/25/17067/78/102 |
| first | 5 7 9 9 37 - | 8 9 17 19 24 28 |

Soldiers every 5 min: 10 10 16 17 30 38 46 51 58 63 76 78 (original game NPC: 10 10 10 11 21 32 42 55 59 64 73 78).

First army orders (game min:sec): 2:26 sendIn 1 soldiers -> building 90; 8:26 armyTarget sword=5; 8:26 armyTarget spear=3; 8:26 armyReserve; 14:06 armyTarget sword=6; 14:06 armyTarget bow=3; 14:26 armyTarget spear=4; 14:46 armyTarget sword=7; 15:00 march 5 soldiers -> 62,100; 18:00 march 5 soldiers -> 62,100; 19:46 armyTarget bow=4; 20:06 armyTarget sword=8.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 13 min, 6–24: stall: fisher: no fish in range inside your border 51% of the last 5 minutes.
- 2 min, 9–10: stall: smith: waiting for coal 84% of the last 5 minutes.
- 10 min, 9–18: stall: iron mine: needs meat or fish 99% of the last 5 minutes.
- 17 min, 11–50: stall: barracks: waiting for weapons from the weaponsmith 77% of the last 5 minutes.
- 2 min, 11–12: stall: weaponsmith: waiting for coal 96% of the last 5 minutes.
- 30 min, 13–52: stall: smelter: waiting for iron ore 84% of the last 5 minutes.
- 4 min, 20–42: stall: weaponsmith: waiting for iron 91% of the last 5 minutes.
- 34 min, 25–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 17 min, 27–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 4 min, 28–49: stall: fisher: fish pile full, waiting for carriers 100% of the last 5 minutes.
- 4 min, 28–49: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 5 min, 28–49: settlers: No free settlers and every bed taken: build houses.
- 29 min, 29–60: stall: iron mine: deposit worn out 95% of the last 5 minutes.
- 1 min, 31: stall: mill: output pile full, waiting for carriers 92% of the last 5 minutes.
- 1 min, 47: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 8 min, 53–60: stall: quarry: no stone in range inside your border 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 3 | 8 | 5 | 0 | 0 | 0 | 8 | 9 | 8 | 15 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 23 | 24 | 1355 | 2598 |
| 30 | 24 | 8 | 10 | 11 | 12 | 11 | 20 | 22 | 14 | 25 | 1 | 4 | 0 | 0 | 0 | 0 | 0 | 4 | 100 | 2019 | 3727 |
| 45 | 24 | 8 | 8 | 11 | 12 | 12 | 20 | 22 | 14 | 19 | 2 | 4 | 0 | 0 | 1 | 0 | 0 | 3 | 94 | 2744 | 4753 |
| 60 | 24 | 8 | 4 | 11 | 11 | 12 | 20 | 21 | 14 | 13 | 1 | 4 | 0 | 0 | 1 | 0 | 0 | 4 | 88 | 2744 | 4754 |

At the end: buildings (built+sites) house2 3, guard 3, house 3, quarry 2, wood 2, hq 1, saw 1, forest 1, fisher 1, ironmine 1, coalmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, mill 1, bakery 1, pigfarm 1, butcher 1, tower 1.
People: soldier 69, worker 18, carrier 8, digger 2, builder 2, geologist 1, explorer 1; beds 90. Soldiers: sword 32, bow 20, spear 17.

Goods produced in the game: grain 192, water 177, coal 167, log 107, stone 97, pig 89, plank 87, flour 82, ironore 80, iron 79, meat 75, bread 67, fish 41, sword 35, spear 17, bow 17, axe 2, hammer 1, saw 1, rod 1, pick 1.
Goods consumed in the game: grain 171, water 157, coal 154, stone 111, plank 103, log 87, ironore 79, iron 75, pig 75, flour 68, meat 63, bread 56, fish 36, sword 34, spear 17, bow 17, pick 5, axe 3, hammer 3, saw 1, shovel 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (97 building-min): Idle 100%
- quarry (90 building-min): No stone in range inside your border 43%, Stone pile full, waiting for carriers 25%, Cutting stone 20%, Bringing stone to the pile 11%, Worker picking up a pickaxe 0%
- wood (99 building-min): Log pile full, waiting for carriers 71%, Felling a tree 21%, Bringing a log to the pile 7%, Worker picking up an axe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 73%, Sawing planks 19%, Stacking outside 4%, Waiting for logs 3%, Fetching from the pile 1%
- guard (121 building-min): Idle 100%, Soldiers on the way 0%
- forest (57 building-min): No free ground to plant in range inside your border 61%, Planting a sapling 39%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 66%, No fish in range inside your border 27%, Fishing 4%, Bringing a fish to the pile 2%, Worker picking up a fishing rod 0%
- ironmine (57 building-min): Deposit worn out: finding little iron ore 60%, Needs meat or fish: mining stopped 21%, Deposit thinning: mining iron ore 9%, Mining iron ore 5%, Bringing iron ore out 3%
- coalmine (56 building-min): Deposit thinning: mining coal 42%, Mining coal 26%, Coal pile full, waiting for carriers 11%, Needs bread or fish: mining stopped 10%, Bringing coal out 8%
- smelter (55 building-min): Waiting for iron ore 76%, Smelting iron 18%, Stacking outside 4%, Waiting for coal 1%, Worker picking up a hammer 0%
- house (151 building-min): Idle 100%
- smith (54 building-min): All tool targets met 91%, Waiting for coal 7%, Worker picking up a hammer 1%, Forging axe 0%, Stacking outside 0%
- weaponsmith (52 building-min): Waiting for iron 35%, All weapon targets met 25%, Waiting for coal 13%, Forging sword 9%, Waiting for coal and iron 6%
- barracks (51 building-min): Waiting for weapons from the weaponsmith 73%, Soldier targets met 15%, Weapons on the way 10%, Training soldiers 1%, Idle 0%
- farm (48 building-min): Grain pile full, waiting for carriers 44%, Sowing a field 26%, Harvesting grain 20%, Bringing grain to the pile 10%, Worker picking up a scythe 0%
- waterhut (47 building-min): Water pile full, waiting for carriers 65%, Fetching water 20%, Bringing water to the pile 14%, Working 0%
- mill (47 building-min): Output pile full, waiting for carriers 85%, Grinding flour 10%, Stacking outside 5%, Fetching from the pile 0%, Waiting for grain 0%
- bakery (44 building-min): Output pile full, waiting for carriers 60%, Baking bread 35%, Stacking outside 4%, Fetching from the pile 1%, Waiting for water 0%
- pigfarm (42 building-min): Raising a pig 48%, Output pile full, waiting for carriers 46%, Stacking outside 5%, Fetching from the pile 1%, Waiting for grain and water 0%
- butcher (41 building-min): Output pile full, waiting for carriers 76%, Butchering 14%, Stacking outside 5%, Waiting for pigs 4%, Worker picking up an axe 1%
- tower (24 building-min): Idle 99%, Soldiers on the way 1%, Waiting for a soldier 0%

Building sites, time per state (site-min): Leveling the ground 9, Builders at work 9, Waiting for a digger 5, Waiting for a builder 3, Waiting for materials 1.

Build order (placed at min:sec, finished at): house2 0:00→0:57, quarry 0:00→1:28, wood 0:02→1:11, saw 1:12→1:58, guard 1:14→2:25, forest 1:44→2:44, fisher 2:06→3:03, ironmine 2:46→3:20, coalmine 3:00→3:35, smelter 3:46→4:41, house 4:26→5:07, smith 5:34→6:21, weaponsmith 7:12→8:06, barracks 8:24→8:59, house 9:10→9:45, farm 10:48→11:47, waterhut 11:52→12:51, mill 12:40→13:18, house 13:30→14:05, bakery 14:56→15:32, pigfarm 16:42→17:36, butcher 17:56→18:47, wood 18:32→19:43, guard 27:00→27:45, guard 27:48→28:25, quarry 27:50→28:45, house2 31:00→32:20, tower 35:00→36:06, house2 47:00→49:21.

Orders given: sendUnit 114, armyTarget 94, release 34, place 29, march 15, priority 5, sendIn 4, weaponKeep 3, profession 2, armyReserve 1. None refused.

People changing jobs: new carrier 90, carrier -> soldier 68, carrier -> worker 18, carrier -> geologist 1, carrier -> explorer 1.

People's orders (6177 in all, 6145 done): worker rest farm 389, worker gather farm 388, worker mine coalmine 227, worker rest waterhut 178, worker gather waterhut 177, worker rest coalmine 170, worker rest forest 153, worker gather forest 152, worker mine ironmine 141, explorer explore 113, worker rest wood 109, worker gather wood 107, worker rest quarry 99, worker gather quarry 97. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Adaptive plan: 10 field soldiers, 0 posts, carriers 6 (6 idle), coal/iron 0/0, sites 0, tips none.
- ×4 10:00–40:00 Adaptive plan: 42 field soldiers, 4 posts, carriers 15 (15 idle), coal/iron 1/1, sites 0, tips stall.
- 50:00 Adaptive plan: 54 field soldiers, 4 posts, carriers 23 (2 idle), coal/iron 1/1, sites 0, tips land/stall.


Script: 1800 turns, 1.4 ms average, worst 16 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 31: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 17/2/1644/20/40 | 36/6/2771/10/60 |
| 30 | 23/3/1966/38/42 | 71/16/8352/48/92 |
| 45 | 26/5/2963/62/38 | 82/22/13100/65/115 |
| 60 | 32/5/2969/74/46 | 88/28/17969/81/99 |
| first | 5 7 9 12 37 - | 7 8 15 16 30 28 |

Soldiers every 5 min: 10 10 20 24 35 38 46 56 62 69 71 74 (original game NPC: 10 10 10 15 27 48 54 60 65 70 78 81).

First army orders (game min:sec): 2:18 sendIn 1 soldiers -> building 90; 10:18 armyTarget sword=5; 10:18 armyTarget spear=3; 10:18 armyReserve; 11:38 armyTarget sword=6; 11:38 armyTarget bow=3; 11:48 sendIn 1 soldiers -> building 185; 11:58 armyTarget sword=5; 11:58 armyTarget bow=2; 12:18 armyTarget sword=6; 12:18 armyTarget bow=3; 12:58 armyTarget spear=4.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 11 min, 11–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 4 min, 12–15: stall: smelter: waiting for coal 54% of the last 5 minutes.
- 7 min, 18–55: stall: barracks: waiting for weapons from the weaponsmith 85% of the last 5 minutes.
- 3 min, 18–20: stall: weaponsmith: waiting for coal 56% of the last 5 minutes.
- 28 min, 21–50: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 24 min, 21–60: stall: iron mine: deposit worn out 91% of the last 5 minutes.
- 5 min, 26–41: stall: woodcutter: log pile full, waiting for carriers 94% of the last 5 minutes.
- 1 min, 26: stall: sawmill: output pile full, waiting for carriers 94% of the last 5 minutes.
- 11 min, 26–54: settlers: No free settlers and every bed taken: build houses.
- 1 min, 28: stall: quarry: stone pile full, waiting for carriers 72% of the last 5 minutes.
- 27 min, 29–58: stall: smelter: waiting for iron ore 78% of the last 5 minutes.
- 6 min, 40–53: stall: farm: grain pile full, waiting for carriers 99% of the last 5 minutes.
- 7 min, 40–54: stall: water hut: water pile full, waiting for carriers 92% of the last 5 minutes.
- 7 min, 54–60: stall: butcher: waiting for pigs 92% of the last 5 minutes.
- 2 min, 56–57: stall: weaponsmith: waiting for iron 75% of the last 5 minutes.
- 3 min, 58–60: stall: coal mine: deposit worn out 95% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 7 | 3 | 20 | 0 | 0 | 1 | 0 | 0 | 20 | 41 | 1644 | 3190 |
| 30 | 16 | 7 | 15 | 12 | 0 | 0 | 8 | 8 | 0 | 25 | 0 | 15 | 0 | 0 | 1 | 0 | 0 | 17 | 63 | 1966 | 4053 |
| 45 | 24 | 8 | 16 | 9 | 0 | 0 | 8 | 8 | 0 | 16 | 0 | 10 | 0 | 0 | 0 | 0 | 0 | 14 | 61 | 2963 | 5129 |
| 60 | 24 | 8 | 16 | 24 | 12 | 0 | 19 | 14 | 14 | 7 | 1 | 13 | 0 | 0 | 0 | 0 | 0 | 14 | 85 | 2969 | 5129 |

At the end: buildings (built+sites) house2 4, guard 4, quarry 2, wood 2, fisher 2, house 2, hq 1, saw 1, forest 1, coalmine 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, tower 1, pigfarm 1, butcher 1, mill 1, bakery 1.
People: soldier 65, carrier 21, worker 19, digger 2, builder 2, geologist 1, explorer 1; beds 100. Soldiers: sword 30, bow 19, spear 16.

Goods produced in the game: fish 352, coal 162, stone 117, log 114, plank 94, ironore 85, iron 84, grain 56, water 47, flour 34, sword 32, bread 20, spear 16, bow 16, pig 8, meat 6, rod 2, axe 2, saw 1, hammer 1, pick 1.
Goods consumed in the game: fish 334, coal 155, stone 119, plank 110, log 94, ironore 84, iron 71, grain 42, sword 32, water 28, flour 20, spear 16, bow 16, bread 8, pig 6, meat 6, pick 5, axe 3, hammer 3, rod 2, saw 1, shovel 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (116 building-min): Idle 100%
- quarry (102 building-min): Stone pile full, waiting for carriers 68%, Cutting stone 21%, Bringing stone to the pile 11%, Worker picking up a pickaxe 0%, Working 0%
- wood (103 building-min): Log pile full, waiting for carriers 71%, Felling a tree 22%, Bringing a log to the pile 7%, Worker picking up an axe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 66%, Sawing planks 20%, Waiting for logs 8%, Stacking outside 4%, Fetching from the pile 0%
- guard (168 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 61%, Planting a sapling 39%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- fisher (65 building-min): Fishing 39%, Bringing a fish to the pile 33%, Fish pile full, waiting for carriers 22%, No fish in range inside your border 5%, Worker picking up a fishing rod 1%
- coalmine (56 building-min): Deposit thinning: mining coal 47%, Mining coal 24%, Deposit worn out: finding little coal 11%, Bringing coal out 8%, Needs bread or fish: mining stopped 5%
- ironmine (56 building-min): Deposit worn out: finding little iron ore 58%, Needs meat or fish: mining stopped 13%, Deposit thinning: mining iron ore 13%, Mining iron ore 4%, Iron ore pile full, waiting for carriers 4%
- smelter (55 building-min): Waiting for iron ore 53%, Smelting iron 19%, Output pile full, waiting for carriers 16%, Waiting for coal 6%, Stacking outside 4%
- house (105 building-min): Idle 100%
- smith (53 building-min): All tool targets met 98%, Forging fishing rod 0%, Forging axe 0%, Stacking outside 0%, Worker picking up a hammer 0%
- weaponsmith (51 building-min): All weapon targets met 55%, Waiting for coal 16%, Waiting for iron 9%, Forging sword 8%, Forging bow 4%
- barracks (49 building-min): Waiting for weapons from the weaponsmith 46%, Weapons on the way 30%, Soldier targets met 22%, Training soldiers 1%
- farm (33 building-min): Grain pile full, waiting for carriers 75%, Sowing a field 11%, Harvesting grain 9%, Bringing grain to the pile 4%, Worker picking up a scythe 1%
- waterhut (32 building-min): Water pile full, waiting for carriers 83%, Fetching water 9%, Bringing water to the pile 7%, Worker on the way 1%, Idle 0%
- tower (24 building-min): Idle 100%, Soldiers on the way 0%
- pigfarm (9 building-min): Waiting for grain 43%, Raising a pig 20%, Waiting for water 20%, Waiting for grain and water 10%, Worker on the way 4%
- butcher (9 building-min): Waiting for pigs 90%, Butchering 5%, Worker picking up an axe 3%, Stacking outside 2%, Idle 1%
- mill (6 building-min): Output pile full, waiting for carriers 31%, Grinding flour 31%, Waiting for grain 18%, Stacking outside 15%, Worker on the way 3%
- bakery (6 building-min): Baking bread 71%, Stacking outside 8%, Waiting for flour and water 7%, Output pile full, waiting for carriers 7%, Worker on the way 5%

Building sites, time per state (site-min): Builders at work 9, Leveling the ground 9, Waiting for a digger 8, Waiting for a builder 5, Waiting for materials 2.

Build order (placed at min:sec, finished at): house2 0:00→0:54, quarry 0:00→1:25, wood 0:02→1:09, saw 1:10→1:49, guard 1:12→2:17, forest 1:46→2:33, fisher 2:12→3:01, coalmine 2:24→3:36, ironmine 2:40→3:51, smelter 4:02→4:47, house 4:50→5:22, smith 6:12→6:57, weaponsmith 8:00→8:57, house 9:10→9:51, barracks 10:16→11:10, guard 11:00→11:47, wood 15:00→15:43, quarry 15:02→16:10, guard 24:00→24:38, farm 25:54→26:58, waterhut 26:16→27:31, house2 27:06→28:45, guard 33:00→33:39, tower 35:00→36:24, house2 40:00→41:29, pigfarm 49:12→50:57, butcher 49:50→50:43, fisher 50:28→51:34, house2 51:02→53:07, mill 52:02→53:56, bakery 52:04→53:33.

Orders given: sendUnit 116, armyTarget 82, place 31, release 31, march 15, priority 5, sendIn 5, weaponKeep 3, profession 2, armyReserve 1. None refused.

People changing jobs: new carrier 100, carrier -> soldier 64, carrier -> worker 19, new soldier 2, carrier -> geologist 1, carrier -> explorer 1.

People's orders (5600 in all, 5561 done): worker rest fisher 353, worker gather fisher 352, worker mine coalmine 306, worker mine ironmine 231, worker eat coalmine 182, carrier haul fish fisher -> coalmine 174, worker rest forest 171, worker gather forest 170, worker rest coalmine 166, worker eat ironmine 166, carrier haul fish fisher -> ironmine 162, worker rest quarry 119, worker gather quarry 117, worker rest wood 116. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 8 field soldiers, 1 posts, carriers 29 (24 idle), coal/iron 1/1, sites 0, tips none.
- ×2 20:00–30:00 Adaptive plan: 33 field soldiers, 3 posts, carriers 21 (16 idle), coal/iron 1/1, sites 0, tips stall.
- 40:00 Adaptive plan: 47 field soldiers, 5 posts, carriers 4 (0 idle), coal/iron 1/1, sites 0, tips stall/settlers.
- 50:00 Adaptive plan: 60 field soldiers, 5 posts, carriers 11 (0 idle), coal/iron 1/1, sites 2, tips land/stall/settlers.


Script: 1800 turns, 1.3 ms average, worst 19 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 13/2/1686/10/89 | 30/6/2521/10/50 |
| 30 | 16/2/1687/10/150 | 49/6/3258/10/70 |
| 45 | 17/2/1688/10/170 | 70/13/7094/42/78 |
| 60 | 17/2/1688/10/170 | 79/20/11557/65/85 |
| first | - - - - - - | 12 13 14 16 44 38 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 10 20 28 42 51 58 65).

First army orders (game min:sec): 2:22 sendIn 1 soldiers -> building 91.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 14 min, 5–18: stall: fisher: no fish in range inside your border 52% of the last 5 minutes.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 32 min, 13–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 35 min, 26–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 10 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 77 | 38 | 1686 | 3350 |
| 30 | 16 | 8 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 138 | 40 | 1687 | 3350 |
| 45 | 16 | 8 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 158 | 40 | 1688 | 3350 |
| 60 | 16 | 8 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 158 | 40 | 1688 | 3350 |

At the end: buildings (built+sites) house2 8, guard 2, hq 1, quarry 1, wood 1, saw 1, forest 1, fisher 1, coalmine 1.
People: carrier 158, soldier 7, worker 6, digger 2, builder 2, geologist 1, explorer 1; beds 160. Soldiers: sword 4, bow 3.

Goods produced in the game: log 58, stone 57, plank 46, fish 11, coal 8.
Goods consumed in the game: stone 67, plank 62, log 46, fish 5, pick 3, axe 1, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (347 building-min): Idle 100%
- quarry (58 building-min): Stone pile full, waiting for carriers 78%, Cutting stone 15%, Bringing stone to the pile 6%, Worker picking up a pickaxe 0%, Working 0%
- wood (59 building-min): Log pile full, waiting for carriers 77%, Felling a tree 18%, Bringing a log to the pile 4%, Worker picking up an axe 0%, Idle 0%
- saw (58 building-min): Output pile full, waiting for carriers 87%, Sawing planks 10%, Stacking outside 2%, Worker picking up a saw 0%, Fetching from the pile 0%
- guard (114 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 61%, Planting a sapling 39%, Worker picking up a shovel 0%, Idle 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 77%, No fish in range inside your border 20%, Bringing a fish to the pile 2%, Fishing 2%, Worker picking up a fishing rod 0%
- coalmine (56 building-min): Coal pile full, waiting for carriers 97%, Mining coal 2%, Worker picking up a pickaxe 1%, Bringing coal out 0%, Working 0%

Building sites, time per state (site-min): Leveling the ground 8, Builders at work 5, Waiting for a digger 4, Waiting for a builder 3.

Build order (placed at min:sec, finished at): house2 0:00→1:07, quarry 0:00→1:39, wood 0:02→1:22, saw 1:24→2:00, guard 1:26→2:21, forest 1:58→2:35, fisher 2:20→2:51, guard 2:54→3:55, coalmine 3:10→4:14, house2 4:20→5:47, house2 8:40→10:13, house2 13:00→14:25, house2 17:20→19:04, house2 21:40→22:46, house2 26:00→27:19, house2 30:20→32:28.

Orders given: sendUnit 116, place 16, profession 2, priority 1, sendIn 1. None refused.

People changing jobs: new carrier 160, carrier -> worker 6, carrier -> geologist 1, carrier -> explorer 1.

People's orders (1069 in all, 1059 done): worker rest forest 131, worker gather forest 130, explorer explore 115, worker rest wood 59, worker gather wood 58, worker rest quarry 58, worker gather quarry 57, carrier haul log wood -> saw 50, worker rest saw 47, worker toCraft saw 46, worker craft saw 46, carrier haul stone quarry -> house2 42, carrier haul plank saw -> house2 35, digger dig house2 16. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 0:00 Adaptive plan: 10 field soldiers, 0 posts, carriers 6 (6 idle), coal/iron 0/0, sites 0, tips none.
- 10:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 38 (38 idle), coal/iron 1/1, sites 1, tips stall.
- 20:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 98 (98 idle), coal/iron 1/1, sites 0, tips timing.
- ×3 30:00–50:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 158 (158 idle), coal/iron 1/1, sites 0, tips land/stall/timing.


Script: 1800 turns, 2.0 ms average, worst 19 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 13/2/1638/10/90 | 33/6/2715/10/50 |
| 30 | 19/2/1688/10/150 | 62/12/5421/21/79 |
| 45 | 19/2/1707/10/150 | 75/19/10372/50/90 |
| 60 | 19/2/1707/10/150 | 85/26/14825/75/95 |
| first | - - - - - - | 8 8 16 17 40 37 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 15 21 32 47 50 57 71 75).

First army orders (game min:sec): 2:40 sendIn 1 soldiers -> building 101.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 27 min, 12–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 38 min, 23–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 78 | 40 | 1638 | 3373 |
| 30 | 24 | 8 | 16 | 12 | 0 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 135 | 56 | 1688 | 4945 |
| 45 | 24 | 13 | 22 | 12 | 0 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 132 | 56 | 1707 | 4945 |
| 60 | 24 | 13 | 22 | 12 | 0 | 0 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 132 | 56 | 1707 | 4945 |

At the end: buildings (built+sites) house2 7+1, quarry 2, wood 2, guard 2, hq 1, saw 1, forest 1, fisher 1, ironmine 1, look 1.
People: carrier 135, worker 9, soldier 7, digger 2, builder 2, geologist 1, explorer 1; beds 140. Soldiers: sword 4, bow 3.

Goods produced in the game: stone 74, log 72, plank 52, fish 10, ironore 8.
Goods consumed in the game: stone 70, plank 63, log 52, pick 4, fish 4, axe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (319 building-min): Idle 100%
- quarry (103 building-min): Stone pile full, waiting for carriers 84%, Cutting stone 11%, Bringing stone to the pile 5%, Worker picking up a pickaxe 0%, Working 0%
- wood (103 building-min): Log pile full, waiting for carriers 80%, Felling a tree 15%, Bringing a log to the pile 5%, Worker picking up an axe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 84%, Sawing planks 11%, Stacking outside 2%, Waiting for logs 1%, Worker picking up a saw 0%
- guard (114 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 67%, Planting a sapling 33%, Worker picking up a shovel 0%, Working 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 97%, Fishing 1%, Bringing a fish to the pile 1%, Worker picking up a fishing rod 0%
- ironmine (56 building-min): Iron ore pile full, waiting for carriers 97%, Mining iron ore 2%, Worker picking up a pickaxe 0%, Bringing iron ore out 0%, Working 0%
- look (44 building-min): Scout on watch 100%, Working 0%

Building sites, time per state (site-min): Waiting for materials 28, Leveling the ground 8, Builders at work 6, Waiting for a digger 5, Waiting for a builder 3.

Build order (placed at min:sec, finished at): house2 0:00→0:50, quarry 0:00→1:06, wood 0:02→1:20, saw 1:20→2:02, guard 1:22→2:39, forest 1:24→2:58, fisher 2:02→3:16, guard 2:40→3:35, ironmine 3:58→4:29, house2 4:20→5:29, house2 8:40→9:56, house2 13:00→14:03, look 15:00→15:38, wood 15:02→15:50, quarry 15:16→16:17, house2 17:20→19:08, house2 21:40→23:41, house2 26:00→27:30, house2 30:20→never.

Orders given: sendUnit 116, place 19, profession 2, priority 1, sendIn 1. None refused.

People changing jobs: new carrier 140, carrier -> worker 9, carrier -> geologist 1, carrier -> explorer 1.

People's orders (1202 in all, 1186 done): worker rest forest 140, worker gather forest 139, explorer explore 115, worker rest quarry 76, worker gather quarry 74, worker rest wood 74, worker gather wood 72, carrier haul log wood -> saw 56, worker rest saw 53, worker toCraft saw 52, worker craft saw 52, carrier haul stone quarry -> house2 42, carrier haul plank saw -> house2 32, digger dig house2 16. None failed.

Warnings: site-stuck 2. Last: 42:20 site-stuck: Medium house site has not moved for 10 min (Waiting for materials) | 52:30 site-stuck: Medium house site has not moved for 20 min (Waiting for materials)

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 40 (40 idle), coal/iron 0/1, sites 0, tips none.
- 20:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 95 (95 idle), coal/iron 0/1, sites 0, tips timing.
- 30:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 135 (135 idle), coal/iron 0/1, sites 0, tips stall/timing.
- ×2 40:00–50:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 135 (132 idle), coal/iron 0/1, sites 1, tips land/stall/timing.


Script: 1800 turns, 1.9 ms average, worst 19 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 12/2/1531/10/85 | 31/6/3058/10/50 |
| 30 | 17/2/1568/10/130 | 55/8/4114/19/71 |
| 45 | 17/2/1568/10/130 | 69/13/7403/50/90 |
| 60 | 17/2/1568/10/130 | 76/19/12402/65/95 |
| first | - - - - - - | 9 8 17 16 37 42 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 19 24 43 50 55 59 65).

First army orders (game min:sec): 2:44 sendIn 1 soldiers -> building 107.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (2 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 39 min, 22–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 31 min, 30–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 74 | 32 | 1531 | 2817 |
| 30 | 24 | 8 | 16 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 116 | 48 | 1568 | 3821 |
| 45 | 24 | 8 | 16 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 116 | 48 | 1568 | 3821 |
| 60 | 24 | 8 | 16 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 116 | 48 | 1568 | 3821 |

At the end: buildings (built+sites) house2 6, quarry 2, wood 2, guard 2, hq 1, saw 1, forest 1, fisher 1, look 1.
People: carrier 116, worker 8, soldier 7, digger 2, builder 2, geologist 1, explorer 1; beds 120. Soldiers: sword 4, bow 3.

Goods produced in the game: stone 61, log 58, plank 38, fish 8.
Goods consumed in the game: stone 63, plank 54, log 38, pick 3, axe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (286 building-min): Idle 100%
- quarry (102 building-min): Stone pile full, waiting for carriers 88%, Cutting stone 9%, Bringing stone to the pile 3%, Worker picking up a pickaxe 0%, Working 0%
- wood (102 building-min): Log pile full, waiting for carriers 85%, Felling a tree 11%, Bringing a log to the pile 3%, Worker picking up an axe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 89%, Sawing planks 8%, Stacking outside 2%, Fetching from the pile 0%, Worker picking up a saw 0%
- guard (114 building-min): Idle 100%, Soldiers on the way 0%
- forest (57 building-min): No free ground to plant in range inside your border 71%, Planting a sapling 29%, Worker picking up a shovel 0%, Working 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 98%, Fishing 1%, Bringing a fish to the pile 1%, Worker picking up a fishing rod 0%
- look (44 building-min): Scout on watch 100%, Working 0%

Building sites, time per state (site-min): Leveling the ground 7, Waiting for a digger 5, Builders at work 5, Waiting for a builder 3.

Build order (placed at min:sec, finished at): house2 0:00→1:21, quarry 0:00→1:38, wood 0:02→1:52, saw 1:54→2:28, guard 1:56→2:44, forest 2:08→3:01, fisher 2:30→3:19, guard 2:44→3:45, house2 4:20→5:26, house2 8:40→10:13, house2 13:00→14:32, look 15:00→15:48, wood 15:02→16:00, quarry 15:16→16:44, house2 17:20→18:35, house2 21:40→23:36.

Orders given: sendUnit 115, place 16, profession 2, priority 1, sendIn 1. None refused.

People changing jobs: new carrier 120, carrier -> worker 8, carrier -> geologist 1, carrier -> explorer 1.

People's orders (968 in all, 956 done): worker rest forest 116, explorer explore 115, worker gather forest 115, worker rest quarry 63, worker gather quarry 61, worker rest wood 60, worker gather wood 58, carrier haul log wood -> saw 42, worker rest saw 39, worker toCraft saw 38, worker craft saw 38, carrier haul stone quarry -> house2 30, carrier haul plank saw -> house2 24, digger dig house2 12. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 39 (39 idle), coal/iron 0/0, sites 1, tips none.
- 20:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 96 (96 idle), coal/iron 0/0, sites 0, tips ore/timing.
- ×3 30:00–50:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 116 (116 idle), coal/iron 0/0, sites 0, tips land/ore/stall/timing.


Script: 1800 turns, 3.9 ms average, worst 15 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 12/2/1643/10/71 | 35/6/2806/10/57 |
| 30 | 15/2/1648/10/80 | 64/10/6171/17/93 |
| 45 | 15/2/1648/10/80 | 77/20/13219/62/88 |
| 60 | 15/2/1648/10/80 | 83/26/18028/82/88 |
| first | - - - - - - | 7 8 13 14 31 30 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 11 17 34 48 62 71 78 82).

First army orders (game min:sec): 2:46 sendIn 1 soldiers -> building 104.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 40 min, 13–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (93 mountain tiles).
- 42 min, 19–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 8 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 60 | 32 | 1643 | 3114 |
| 30 | 24 | 8 | 16 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 66 | 48 | 1648 | 4662 |
| 45 | 24 | 8 | 16 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 66 | 48 | 1648 | 4662 |
| 60 | 24 | 8 | 16 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 66 | 48 | 1648 | 4662 |

At the end: buildings (built+sites) house2 3, quarry 2, wood 2, guard 2, hq 1, saw 1, forest 1, fisher 1, house 1, look 1.
People: carrier 66, worker 8, soldier 7, digger 2, builder 2, geologist 1, explorer 1; beds 70. Soldiers: sword 4, bow 3.

Goods produced in the game: log 46, stone 46, plank 26, fish 8.
Goods consumed in the game: stone 48, plank 42, log 26, pick 3, axe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (154 building-min): Idle 100%
- quarry (102 building-min): Stone pile full, waiting for carriers 89%, Cutting stone 7%, Bringing stone to the pile 3%, Worker picking up a pickaxe 0%, Working 0%
- wood (102 building-min): Log pile full, waiting for carriers 86%, Felling a tree 10%, Bringing a log to the pile 4%, Worker picking up an axe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 93%, Sawing planks 6%, Stacking outside 1%, Worker picking up a saw 0%, Fetching from the pile 0%
- guard (113 building-min): Idle 100%, Soldiers on the way 0%
- forest (57 building-min): No free ground to plant in range inside your border 77%, Planting a sapling 23%, Worker picking up a shovel 0%
- fisher (56 building-min): Fish pile full, waiting for carriers 99%, Worker picking up a fishing rod 0%, Fishing 0%, Bringing a fish to the pile 0%
- house (55 building-min): Idle 100%
- look (44 building-min): Scout on watch 100%, Working 0%

Building sites, time per state (site-min): Waiting for a digger 6, Leveling the ground 5, Builders at work 4, Waiting for a builder 2.

Build order (placed at min:sec, finished at): house2 0:00→1:06, quarry 0:00→1:22, wood 0:02→1:35, saw 1:36→2:09, guard 1:38→2:45, forest 1:52→3:02, fisher 2:16→3:35, guard 3:02→3:58, house 4:20→4:57, house2 8:40→9:47, house2 13:00→14:40, look 15:00→15:53, wood 15:02→16:26, quarry 15:20→16:46.

Orders given: sendUnit 115, place 14, profession 2, priority 1, sendIn 1. None refused.

People changing jobs: new carrier 70, carrier -> worker 8, carrier -> geologist 1, carrier -> explorer 1.

People's orders (787 in all, 775 done): explorer explore 115, worker rest forest 94, worker gather forest 93, worker rest quarry 48, worker rest wood 48, worker gather quarry 46, worker gather wood 46, carrier haul log wood -> saw 30, worker rest saw 27, worker toCraft saw 26, worker craft saw 26, carrier haul stone quarry -> house2 12, carrier haul plank pile -> house2 9, worker rest fisher 9. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 36 (36 idle), coal/iron 0/0, sites 0, tips none.
- 20:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 66 (66 idle), coal/iron 0/0, sites 0, tips ore/stall/timing.
- ×3 30:00–50:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 66 (66 idle), coal/iron 0/0, sites 0, tips land/ore/stall/timing.


Script: 1800 turns, 3.9 ms average, worst 20 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: chatgpt (Gold) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 17/2/1660/19/41 | 25/6/2776/10/40 |
| 30 | 25/4/2331/30/30 | 39/6/3666/22/58 |
| 45 | 29/5/3093/37/43 | 77/18/9072/50/90 |
| 60 | 29/5/3093/38/42 | 81/23/13172/63/97 |
| first | 7 8 11 13 40 - | 7 9 26 27 48 45 |

Soldiers every 5 min: 10 10 19 21 24 30 33 34 37 37 37 38 (original game NPC: 10 10 10 10 10 22 30 30 50 55 60 63).

First army orders (game min:sec): 2:40 sendIn 1 soldiers -> building 100; 11:40 armyTarget sword=5; 11:40 armyTarget spear=3; 11:40 armyReserve; 13:00 armyTarget sword=6; 13:00 armyTarget bow=3; 13:38 sendIn 1 soldiers -> building 182; 13:40 armyTarget spear=4; 14:00 armyTarget spear=3; 14:20 armyTarget sword=7; 14:20 armyTarget spear=4; 15:00 march 5 soldiers -> 70,128.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 15 min, 12–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 4 min, 13–16: stall: smelter: waiting for coal 55% of the last 5 minutes.
- 29 min, 18–57: stall: barracks: waiting for weapons from the weaponsmith 100% of the last 5 minutes.
- 38 min, 18–60: stall: weaponsmith: waiting for coal 94% of the last 5 minutes.
- 22 min, 22–45: stall: iron mine: deposit worn out 92% of the last 5 minutes.
- 20 min, 27–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 1 min, 37: stall: quarry: stone pile full, waiting for carriers 100% of the last 5 minutes.
- 2 min, 37–38: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 1 min, 37: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 2 min, 37–38: settlers: No free settlers and every bed taken: build houses.
- 9 min, 39–60: stall: coal mine: deposit worn out 93% of the last 5 minutes.
- 2 min, 46–47: stall: gold mine: deposit worn out 92% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 8 | 7 | 6 | 0 | 0 | 0 | 0 | 0 | 7 | 10 | 13 | 0 | 0 | 0 | 0 | 0 | 20 | 31 | 1660 | 3349 |
| 30 | 24 | 8 | 16 | 15 | 0 | 11 | 13 | 13 | 0 | 12 | 5 | 20 | 0 | 0 | 0 | 0 | 0 | 1 | 86 | 2331 | 4698 |
| 45 | 24 | 8 | 16 | 18 | 0 | 12 | 14 | 14 | 0 | 11 | 13 | 20 | 4 | 2 | 0 | 0 | 0 | 15 | 98 | 3093 | 6358 |
| 60 | 24 | 8 | 16 | 19 | 0 | 12 | 14 | 14 | 0 | 18 | 14 | 19 | 14 | 8 | 0 | 0 | 1 | 16 | 116 | 3093 | 6358 |

At the end: buildings (built+sites) guard 4, house2 2, quarry 2, wood 2, house 2, hq 1, saw 1, forest 1, fisher 1, coalmine 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, farm 1, waterhut 1, pigfarm 1, butcher 1, tower 1, goldmine 1, goldsmelter 1.
People: soldier 28, carrier 18, worker 18, digger 2, builder 2, explorer 1, geologist 1; beds 60. Soldiers: sword 14, bow 7, spear 7.

Goods produced in the game: fish 288, coal 119, log 103, stone 102, plank 83, water 79, grain 79, ironore 70, pig 65, iron 56, meat 51, goldore 22, sword 17, gold 8, spear 7, bow 5, hammer 2, axe 2, pick 2, saw 1, rod 1.
Goods consumed in the game: fish 275, stone 104, coal 101, plank 99, log 83, water 65, grain 65, ironore 56, pig 51, meat 39, iron 37, sword 17, goldore 8, spear 7, pick 6, hammer 4, bow 4, axe 3, saw 1, shovel 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (81 building-min): Idle 100%
- quarry (102 building-min): Stone pile full, waiting for carriers 69%, Cutting stone 19%, Bringing stone to the pile 11%, Worker picking up a pickaxe 1%, Working 0%
- wood (103 building-min): Log pile full, waiting for carriers 73%, Felling a tree 20%, Bringing a log to the pile 6%, Worker picking up an axe 1%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 77%, Sawing planks 18%, Stacking outside 4%, Fetching from the pile 1%, Waiting for logs 0%
- guard (167 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 56%, Planting a sapling 44%, Worker picking up a shovel 0%
- fisher (57 building-min): Fishing 43%, Bringing a fish to the pile 43%, Fish pile full, waiting for carriers 14%, Worker picking up a fishing rod 0%, Working 0%
- coalmine (56 building-min): Deposit worn out: finding little coal 47%, Deposit thinning: mining coal 26%, Mining coal 16%, Bringing coal out 6%, Came back empty-handed 2%
- ironmine (56 building-min): Deposit worn out: finding little iron ore 45%, Iron ore pile full, waiting for carriers 27%, Deposit thinning: mining iron ore 10%, Mining iron ore 6%, Needs meat or fish: mining stopped 6%
- house (105 building-min): Idle 100%
- smelter (54 building-min): Output pile full, waiting for carriers 76%, Smelting iron 13%, Waiting for coal 7%, Stacking outside 3%, Worker picking up a hammer 0%
- smith (52 building-min): All tool targets met 97%, Forging pickaxe 1%, Forging hammer 0%, Forging axe 0%, Stacking outside 0%
- weaponsmith (49 building-min): Waiting for coal 82%, All weapon targets met 9%, Forging sword 4%, Forging spear 2%, Stacking outside 2%
- barracks (47 building-min): Waiting for weapons from the weaponsmith 80%, Weapons on the way 12%, Soldier targets met 7%, Training soldiers 1%, Idle 0%
- farm (42 building-min): Grain pile full, waiting for carriers 71%, Sowing a field 13%, Harvesting grain 10%, Bringing grain to the pile 5%, Worker picking up a scythe 1%
- waterhut (41 building-min): Water pile full, waiting for carriers 75%, Bringing water to the pile 13%, Fetching water 11%, Worker on the way 1%, Working 0%
- pigfarm (40 building-min): Output pile full, waiting for carriers 57%, Raising a pig 37%, Stacking outside 4%, Waiting for water 1%, Fetching from the pile 1%
- butcher (39 building-min): Output pile full, waiting for carriers 78%, Butchering 10%, Waiting for pigs 8%, Stacking outside 3%, Worker picking up an axe 0%
- tower (20 building-min): Idle 92%, Waiting for a swordsman: train one at the barracks 8%
- goldmine (19 building-min): Deposit worn out: finding little gold ore 65%, Gold ore pile full, waiting for carriers 26%, Worker picking up a pickaxe 4%, Bringing gold ore out 3%, Came back empty-handed 2%
- goldsmelter (18 building-min): Output pile full, waiting for carriers 69%, Waiting for coal 19%, Smelting gold 5%, Worker picking up a hammer 5%, Stacking outside 1%

Building sites, time per state (site-min): Builders at work 8, Leveling the ground 8, Waiting for a digger 8, Waiting for a builder 5, Waiting for materials 0.

Build order (placed at min:sec, finished at): house2 0:00→1:09, quarry 0:02→1:26, wood 0:04→1:39, saw 1:40→2:11, guard 1:42→2:39, forest 1:56→2:57, fisher 2:26→3:24, coalmine 3:08→3:49, ironmine 3:10→4:05, house 4:20→5:13, smelter 5:34→6:24, smith 7:04→7:54, house 8:40→9:29, weaponsmith 10:06→10:59, barracks 11:38→12:41, guard 12:34→13:37, wood 15:00→15:40, quarry 15:02→16:12, farm 17:06→18:11, waterhut 18:00→19:09, pigfarm 18:26→20:01, butcher 18:56→20:39, guard 27:00→27:57, guard 27:58→29:03, house2 37:00→38:05, tower 38:14→39:48, goldmine 40:14→40:52, goldsmelter 40:52→41:43.

Orders given: sendUnit 118, armyTarget 34, place 28, release 18, march 10, priority 5, sendIn 4, weaponKeep 3, profession 2, armyReserve 1. Refused (order: reason, times): place: Another building is in the way ×1.

People changing jobs: new carrier 60, carrier -> soldier 28, carrier -> worker 18, carrier -> geologist 1, carrier -> explorer 1.

People's orders (5128 in all, 5096 done): worker mine coalmine 291, worker rest fisher 289, worker gather fisher 288, carrier haul fish fisher -> coalmine 209, worker eat coalmine 208, worker rest farm 164, worker gather farm 163, worker rest forest 142, worker gather forest 141, worker mine ironmine 133, worker rest coalmine 121, explorer explore 114, worker rest wood 105, worker rest quarry 104. None failed.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 8 field soldiers, 1 posts, carriers 35 (32 idle), coal/iron 1/1, sites 0, tips none.
- ×3 20:00–40:00 Adaptive plan: 26 field soldiers, 5 posts, carriers 24 (21 idle), coal/iron 1/1, sites 0, tips stall.
- 50:00 Adaptive plan: 27 field soldiers, 5 posts, carriers 19 (16 idle), coal/iron 1/1, sites 0, tips land/stall.


Script: 1800 turns, 2.0 ms average, worst 18 ms, 0 over 0.3 s, 0 errors. Orders refused: place 1 of 29.

### Map 20261030: chatgpt (Blue) vs original game NPC: undecided

| min | chatgpt | original game NPC |
|---|---|---|
| 15 | 19/2/1629/18/52 | 25/6/3049/10/40 |
| 30 | 22/3/1937/30/40 | 54/8/4408/12/78 |
| 45 | 25/5/3027/45/26 | 71/13/7493/43/97 |
| 60 | 25/5/3027/56/34 | 78/19/12464/64/96 |
| first | 8 9 12 13 37 - | 14 15 16 19 42 49 |

Soldiers every 5 min: 10 10 18 22 22 30 38 42 45 52 53 56 (original game NPC: 10 10 10 10 10 12 16 38 43 50 57 64).

First army orders (game min:sec): 2:46 sendIn 1 soldiers -> building 100; 11:36 armyTarget sword=5; 11:36 armyTarget spear=3; 11:36 armyReserve; 12:36 armyTarget bow=3; 12:56 armyTarget sword=6; 13:36 armyTarget spear=4; 14:16 armyTarget sword=7; 14:56 armyTarget bow=4; 15:00 march 5 soldiers -> 226,130; 15:36 armyTarget sword=8; 16:16 armyTarget spear=5.

#### Game log: chatgpt

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 5 min, 17–21: stall: goldsmelter: waiting for coal 83% of the last 5 minutes.
- 13 min, 20–48: stall: barracks: waiting for weapons from the weaponsmith 52% of the last 5 minutes.
- 13 min, 20–60: stall: weaponsmith: waiting for coal 93% of the last 5 minutes.
- 7 min, 22–28: stall: gold mine: deposit worn out 59% of the last 5 minutes.
- 18 min, 24–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 34 min, 26–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 31 min, 27–59: stall: iron mine: deposit worn out 93% of the last 5 minutes.
- 1 min, 44: stall: quarry: stone pile full, waiting for carriers 100% of the last 5 minutes.
- 1 min, 44: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 1 min, 44: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 1 min, 44: settlers: No free settlers and every bed taken: build houses.
- 11 min, 50–60: stall: coal mine: deposit worn out 92% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 1 | 8 | 6 | 14 | 0 | 0 | 0 | 0 | 0 | 9 | 0 | 14 | 8 | 0 | 0 | 0 | 0 | 28 | 23 | 1629 | 3473 |
| 30 | 24 | 8 | 16 | 12 | 0 | 0 | 0 | 0 | 0 | 17 | 6 | 20 | 14 | 8 | 0 | 0 | 0 | 18 | 69 | 1937 | 4060 |
| 45 | 19 | 8 | 13 | 13 | 0 | 0 | 0 | 0 | 0 | 21 | 4 | 19 | 14 | 8 | 1 | 0 | 0 | 1 | 72 | 3027 | 5688 |
| 60 | 24 | 8 | 16 | 16 | 0 | 0 | 0 | 0 | 0 | 18 | 9 | 20 | 14 | 8 | 0 | 0 | 0 | 12 | 76 | 3027 | 5694 |

At the end: buildings (built+sites) guard 4, house2 3, quarry 2, wood 2, hq 1, saw 1, forest 1, fisher 1, ironmine 1, coalmine 1, smelter 1, smith 1, house 1, weaponsmith 1, barracks 1, goldmine 1, goldsmelter 1, tower 1.
People: soldier 47, worker 14, carrier 14, digger 2, builder 2, geologist 1, explorer 1; beds 70. Soldiers: sword 22, bow 13, spear 12.

Goods produced in the game: fish 421, coal 152, log 86, stone 85, ironore 82, iron 73, plank 66, sword 24, goldore 22, spear 12, bow 10, gold 8, hammer 2, pick 2, saw 1, rod 1, axe 1.
Goods consumed in the game: fish 411, coal 134, stone 87, plank 82, ironore 73, log 66, iron 53, sword 24, spear 12, bow 10, goldore 8, pick 6, hammer 4, axe 2, saw 1, shovel 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- house2 (128 building-min): Idle 100%
- quarry (103 building-min): Stone pile full, waiting for carriers 80%, Cutting stone 13%, Bringing stone to the pile 6%, Worker picking up a pickaxe 1%, Working 0%
- wood (103 building-min): Log pile full, waiting for carriers 77%, Felling a tree 17%, Bringing a log to the pile 5%, Worker picking up an axe 0%, Working 0%
- saw (58 building-min): Output pile full, waiting for carriers 79%, Sawing planks 14%, Waiting for logs 3%, Stacking outside 3%, Fetching from the pile 0%
- guard (175 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- forest (57 building-min): No free ground to plant in range inside your border 65%, Planting a sapling 35%, Worker picking up a shovel 0%, Working 0%
- fisher (57 building-min): Fishing 44%, Bringing a fish to the pile 39%, Fish pile full, waiting for carriers 16%, Worker picking up a fishing rod 0%, No fish in range inside your border 0%
- ironmine (55 building-min): Deposit worn out: finding little iron ore 64%, Deposit thinning: mining iron ore 12%, Mining iron ore 10%, Bringing iron ore out 4%, Needs meat or fish: mining stopped 3%
- coalmine (53 building-min): Deposit thinning: mining coal 44%, Deposit worn out: finding little coal 23%, Mining coal 21%, Bringing coal out 8%, Came back empty-handed 2%
- smelter (52 building-min): Output pile full, waiting for carriers 70%, Smelting iron 18%, Waiting for iron ore 4%, Stacking outside 4%, Waiting for coal 2%
- smith (51 building-min): All tool targets met 97%, Worker picking up a hammer 0%, Forging hammer 0%, Forging pickaxe 0%, Stacking outside 0%
- house (50 building-min): Idle 100%
- weaponsmith (49 building-min): Waiting for coal 58%, All weapon targets met 27%, Forging sword 6%, Forging spear 3%, Forging bow 3%
- barracks (48 building-min): Waiting for weapons from the weaponsmith 60%, Weapons on the way 22%, Soldier targets met 17%, Training soldiers 1%, Idle 0%
- goldmine (47 building-min): Gold ore pile full, waiting for carriers 74%, Deposit worn out: finding little gold ore 17%, Deposit thinning: mining gold ore 4%, Mining gold ore 2%, Bringing gold ore out 1%
- goldsmelter (46 building-min): Output pile full, waiting for carriers 84%, Waiting for coal 12%, Smelting gold 2%, Worker picking up a hammer 1%, Stacking outside 1%
- tower (24 building-min): Idle 99%, Soldiers on the way 1%

Building sites, time per state (site-min): Builders at work 7, Leveling the ground 6, Waiting for a digger 6, Waiting for a builder 4.

Build order (placed at min:sec, finished at): house2 0:00→0:55, quarry 0:00→1:14, wood 0:02→1:27, saw 1:28→2:05, guard 1:30→2:45, forest 1:42→3:04, fisher 2:06→3:24, guard 2:46→3:46, ironmine 4:10→4:40, house2 4:24→5:44, coalmine 6:26→6:57, smelter 6:58→7:56, smith 8:20→8:56, house 8:44→9:32, weaponsmith 10:16→11:23, barracks 11:34→12:23, goldmine 12:24→13:15, goldsmelter 13:22→14:16, wood 15:00→15:44, quarry 15:02→16:04, guard 24:00→24:40, guard 33:00→33:31, tower 35:00→36:12, house2 44:00→44:57.

Orders given: sendUnit 118, armyTarget 59, place 24, release 24, march 15, priority 5, sendIn 4, weaponKeep 3, profession 2, armyReserve 1. None refused.

People changing jobs: new carrier 70, carrier -> soldier 46, carrier -> worker 14, carrier -> geologist 1, carrier -> explorer 1, new soldier 1.

People's orders (4763 in all, 4736 done): worker rest fisher 422, worker gather fisher 422, worker mine coalmine 307, worker mine ironmine 261, carrier haul fish fisher -> coalmine 199, worker eat ironmine 197, carrier haul fish fisher -> ironmine 195, worker eat coalmine 195, worker rest coalmine 153, worker rest forest 144, worker gather forest 143, explorer explore 115, worker rest ironmine 90, worker rest wood 88. None failed.

Fights and contact: first saw player 1 at 57:00.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×2 0:00–10:00 Adaptive plan: 7 field soldiers, 2 posts, carriers 45 (39 idle), coal/iron 1/1, sites 0, tips none.
- ×3 20:00–40:00 Adaptive plan: 33 field soldiers, 5 posts, carriers 8 (4 idle), coal/iron 1/1, sites 0, tips stall.
- 50:00 Adaptive plan: 43 field soldiers, 5 posts, carriers 18 (15 idle), coal/iron 1/1, sites 0, tips land/stall.


Script: 1800 turns, 0.9 ms average, worst 15 ms, 0 over 0.3 s, 0 errors. Orders refused: none.
