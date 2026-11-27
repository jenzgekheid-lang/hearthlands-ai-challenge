# Tournament: scheduled

Game version 253. Written for: scheduled 253.

- scheduled: hearthlands-ai-challenge, commit 70117d2

Maps 20261030, 777, 4242, 31, each twice (sides swapped), up to 60 game minutes (1x). 155 s.

Switches: the table defaults (src/data/rules.js).

Each game ends with the script's own game log: what it may know (its own side, and what happened to it or what it saw). Times are game min:sec.

| Opponent | Won | Lost | Undecided |
|---|---|---|---|
| original game NPC | 1 | 0 | 7 |

War and gold over all games (scheduled / opponents): buildings taken 48 / 0, killed 56 / 57, gold at the end (stock + vaults) 25 / 121, stuck towns 4 / 3.

## Games

Each row: buildings / military / land tiles / soldiers / people at the minute shown. First: game minute of the first smelter, smith, weaponsmith, barracks, tower, castle (- = never).

### Map 31: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 28/4/1975/17/53 | 29/6/2417/10/50 |
| 30 | 38/6/2714/28/38 | 19/4/1869/4/59 |
| 45 | 42/7/3000/32/33 | 14/3/1583/3/59 |
| 60 | 42/7/3000/32/33 | 14/3/1583/3/59 |
| first | 7 9 12 13 - - | 14 15 - - - - |

First built by scheduled (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, forest 2, house 2, saw 2, forest x2 3, hunter 3, wood x2 3, guard 4, guard x2 4, house x2 4, military 4, military x2 4, coalmine 5, ironmine 6, fisher 7, smelter 7, smith 9, coalmine x2 10, quarry x2 10, saw x2 12, weaponsmith 12, barracks 13, hunter x2 13, soldier 13, house2 15, waterhut 15, farm 16, armorer 17, mill 17, bakery 18, pigfarm 19, butcher 25, waterhut x2 26, pigfarm x2 33, bakery x2 34.

First built by original game NPC (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, house2 2, guard 3, guard x2 3, military 3, military x2 3, forest 4, hunter 4, saw 4, wood x2 4, quarry x2 5, fisher 6, waterhut 7, coalmine 8, hunter x2 8, ironmine 8, farm 9, house 10, mill 10, bakery 11, farm x2 12, pigfarm 13, smelter 14, house x2 15, smith 15, coalmine x2 16, butcher 17.

Stock at minutes 15/30/45 (scheduled): pick 2/4/4, hammer 1/1/1, shovel 1/1/1, plank 7/54/58, stone 5/60/64.

War and gold at the end: scheduled: took 14, lost 0, killed 7, fallen 5, gold 0 in stock + 0 in vaults. original game NPC: took 0, lost 14, killed 5, fallen 7, gold 0 in stock + 0 in vaults, STUCK (town stopped growing).

At the end (what scheduled could see): enemy buildings known 14 (military 3); soldiers outside buildings 20 (bowmen 5); military sites unfinished 0; posts waiting for a swordsman 0; pioneers 0; without resource: coalmine 1, ironmine 1.

Growth (what scheduled could see): last new building at minute 34; waiting: No free ground to plant in range inside your border x2; Waiting for iron ore x1; Waiting for iron x1; spare tools in stock: pick 4, hammer 1, shovel 1, axe 3, saw 1.

Soldiers every 5 min: 10 10 17 25 25 28 31 32 32 32 32 32 (original game NPC: 10 10 10 5 4 4 3 3 3 3 3 3).

First army orders (game min:sec): 10:00 armyTarget sword=18; 10:00 armyTarget spear=8; 10:00 armyTarget bow=12; 16:48 attack 13 soldiers -> building 38; 18:16 attack 10 soldiers -> building 77; 18:46 attack 11 soldiers -> building 80; 19:48 attack 9 soldiers -> building 149; 20:12 attack 10 soldiers -> building 114; 23:48 attack 9 soldiers -> building 87; 24:48 attack 8 soldiers -> building 227; 25:56 attack 8 soldiers -> building 146; 27:56 attack 8 soldiers -> building 193.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 11 min, 1–21: settlers: No free settlers and every bed taken: build houses.
- 2 min, 7–8: army: Lost 4 soldiers in the last 5 minutes, and no barracks to train new ones.
- 9 min, 8–16: stall: hunter: no game in range inside your border 54% of the last 5 minutes.
- 1 min, 12: orders: The order "sendUnit" was sent 40 times this minute: send it only when something changes.
- 7 min, 14–34: stall: smelter: waiting for iron ore 84% of the last 5 minutes.
- 17 min, 14–40: stall: weaponsmith: waiting for iron 97% of the last 5 minutes.
- 1 min, 18: carriers: mill: waiting for grain 73% of the last 10 minutes while 4 lie in stock: too few carriers. Build more houses.
- 12 min, 18–40: stall: barracks: waiting for weapons from the weaponsmith 98% of the last 5 minutes.
- 11 min, 19–35: stall: iron mine: deposit worn out 93% of the last 5 minutes.
- 1 min, 19: stall: mill: waiting for grain 65% of the last 5 minutes.
- 2 min, 20–21: carriers: pig farm: waiting for grain 89% of the last 10 minutes while 1 lie in stock: too few carriers. Build more houses.
- 27 min, 21–60: carriers: smelter: waiting for iron ore 95% of the last 10 minutes while 8 lie in stock: too few carriers. Build more houses.
- 3 min, 23–25: stall: pig farm: waiting for grain 100% of the last 5 minutes.
- 36 min, 25–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 29 min, 30–60: carriers: weaponsmith: waiting for iron 95% of the last 10 minutes while 4 lie in stock: too few carriers. Build more houses.
- 1 min, 35: stall: pig farm: output pile full, waiting for carriers 93% of the last 5 minutes.
- 24 min, 36–60: stall: quarry: stone pile full, waiting for carriers 100% of the last 5 minutes.
- 24 min, 36–60: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 19 min, 42–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 18 min, 43–60: settlers: No free settlers: build houses.
- 17 min, 44–60: weapons: 10 weapons lie unused: the barracks needs free settlers (build houses).

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 10 | 21 | 21 | 18 | 0 | 11 | 0 | 0 | 0 | 28 | 6 | 6 | 0 | 0 | 0 | 0 | 0 | 13 | 44 | 1975 | 5924 |
| 30 | 43 | 53 | 60 | 28 | 13 | 27 | 24 | 7 | 13 | 26 | 1 | 4 | 0 | 0 | 2 | 0 | 1 | 0 | 131 | 2714 | 8722 |
| 45 | 45 | 57 | 64 | 28 | 14 | 35 | 39 | 23 | 22 | 30 | 7 | 4 | 0 | 0 | 2 | 1 | 2 | 0 | 172 | 3000 | 11017 |
| 60 | 45 | 57 | 64 | 24 | 16 | 35 | 38 | 22 | 22 | 33 | 8 | 4 | 0 | 0 | 3 | 3 | 4 | 0 | 176 | 3000 | 11017 |

At the end: buildings (built+sites) guard 7, house 4, wood 3, hunter 3, quarry 2, forest 2, saw 2, coalmine 2, waterhut 2, bakery 2, pigfarm 2, hq 1, ironmine 1, fisher 1, smelter 1, smith 1, weaponsmith 1, barracks 1, house2 1, farm 1, mill 1, armorer 1.
People: worker 24, soldier 20, digger 2, builder 2, geologist 2, carrier 2, explorer 1; beds 60. Soldiers: sword 13, bow 5, spear 2.

Goods produced in the game: coal 144, log 131, stone 108, fish 105, plank 100, water 96, grain 94, meat 83, flour 78, ironore 72, bread 70, iron 64, sword 22, armor 13, pig 8, bow 7, spear 6, pick 4, axe 2, saw 2, hammer 2, shovel 1, rod 1.
Goods consumed in the game: coal 111, stone 110, plank 108, log 100, fish 95, grain 86, water 78, flour 70, meat 64, ironore 64, bread 62, iron 60, sword 20, pick 7, bow 6, armor 6, hammer 4, axe 3, spear 3, shovel 2, saw 2, rod 1, scythe 1.
Goods lost in the game: stone 4, bread 4, log 4, fish 2, coal 2.
Goods captured in the game: stone 31, water 20, plank 19, meat 16, log 14, grain 14, flour 14, bread 12, pig 12, fish 10, coal 2, sword 1, bow 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- quarry (110 building-min): Stone pile full, waiting for carriers 59%, Stone pile full, nothing needs it right now 18%, Cutting stone 16%, Bringing stone to the pile 7%, Worker picking up a pickaxe 0%
- wood (162 building-min): Log pile full, waiting for carriers 60%, Log pile full, nothing needs it right now 18%, Felling a tree 16%, Bringing a log to the pile 5%, Worker picking up an axe 0%
- forest (116 building-min): No free ground to plant in range inside your border 69%, Planting a sapling 30%, Worker picking up a shovel 0%, Working 0%
- saw (107 building-min): Output pile full, waiting for carriers 62%, Output pile full, nothing needs it right now 21%, Sawing planks 12%, Stacking outside 3%, Waiting for logs 2%
- house (199 building-min): Idle 100%
- hunter (134 building-min): Meat pile full, waiting for carriers 63%, Meat pile full, nothing needs it right now 12%, No game in range inside your border 9%, Hunting 8%, Bringing meat to the pile 7%
- guard (329 building-min): Idle 100%, Soldiers on the way 0%
- coalmine (106 building-min): Deposit worn out: finding little coal 37%, Coal pile full, waiting for carriers 30%, Deposit thinning: mining coal 11%, Coal pile full, nothing needs it right now 8%, Mining coal 6%
- ironmine (55 building-min): Deposit worn out: finding little iron ore 54%, Iron ore pile full, waiting for carriers 24%, Deposit thinning: mining iron ore 11%, Mining iron ore 4%, Bringing iron ore out 4%
- fisher (54 building-min): Fish pile full, waiting for carriers 61%, Fish pile full, nothing needs it right now 23%, Fishing 12%, Bringing a fish to the pile 3%, Worker picking up a fishing rod 1%
- smelter (53 building-min): Waiting for iron ore 80%, Smelting iron 15%, Stacking outside 3%, Fetching from the pile 1%, Worker picking up a hammer 0%
- smith (52 building-min): All tool targets met 93%, Waiting for coal 3%, Forging pickaxe 1%, Stacking outside 1%, Forging axe 0%
- weaponsmith (49 building-min): Waiting for iron 88%, Forging sword 6%, Stacking outside 2%, Forging bow 2%, Forging spear 2%
- barracks (48 building-min): Waiting for weapons from the weaponsmith 53%, Waiting for a free settler to train 38%, Weapons on the way 8%, Training soldiers 2%
- house2 (46 building-min): Idle 100%
- waterhut (79 building-min): Water pile full, waiting for carriers 65%, Bringing water to the pile 15%, Fetching water 14%, Water pile full, nothing needs it right now 6%, Worker on the way 0%
- farm (44 building-min): Grain pile full, waiting for carriers 55%, Sowing a field 21%, Harvesting grain 14%, Bringing grain to the pile 9%, Worker picking up a scythe 1%
- mill (44 building-min): Output pile full, waiting for carriers 55%, Waiting for grain 20%, Grinding flour 10%, Output pile full, nothing needs it right now 9%, Stacking outside 5%
- armorer (43 building-min): All armor targets met 72%, Waiting for iron 22%, Making iron armor 4%, Worker picking up a hammer 1%, Stacking outside 1%
- bakery (69 building-min): Output pile full, waiting for carriers 39%, Waiting for flour 30%, Baking bread 23%, Output pile full, nothing needs it right now 5%, Stacking outside 3%
- pigfarm (69 building-min): Output pile full, waiting for carriers 83%, Waiting for grain 11%, Output pile full, nothing needs it right now 3%, Raising a pig 3%, Stacking outside 0%
- butcher (1 building-min): Output pile full, nothing needs it right now 98%, Idle 2%

Building sites, time per state (site-min): Waiting for a digger 11, Waiting for a builder 10, Builders at work 9, Leveling the ground 8, Waiting for materials 1.

Build order (placed at min:sec, finished at): quarry 0:02→0:22, wood 0:26→0:46, forest 0:38→1:11, saw 0:50→1:35, house 1:02→1:57, wood 1:04→2:10, hunter 1:14→2:27, guard 1:36→3:03, forest 1:58→2:44, house 2:50→3:24, guard 3:08→3:54, coalmine 3:38→4:15, guard 4:08→4:50, ironmine 4:46→5:30, guard 5:08→5:50, fisher 5:26→6:14, smelter 5:56→6:52, house 6:54→7:38, smith 7:30→8:26, quarry 8:30→9:15, coalmine 8:56→9:42, weaponsmith 9:58→11:10, saw 10:34→11:37, barracks 11:10→12:16, hunter 11:22→12:38, house2 12:02→14:04, waterhut 12:36→14:37, wood 13:06→15:09, farm 13:30→15:56, mill 13:42→16:22, armorer 14:30→16:57, bakery 15:10→17:41, pigfarm 15:40→18:19.

Demolished or burned: quarry (burned) 18:26, coalmine (burned) 19:50, wood (burned) 20:22, butcher (burned) 25:55, mill (burned) 31:51.

Orders given: sendUnit 209, place 33, attack 14, release 14, profession 3, armyTarget 3, toolKeep 1, armyArmor 1, armorRepair 1. None refused.

People changing jobs: new carrier 49, carrier -> soldier 27, carrier -> worker 23, new soldier 5, new worker 1, carrier -> explorer 1, carrier -> geologist 1.

People's orders (5604 in all, 5480 done): worker mine coalmine 259, worker rest forest 238, worker gather forest 236, geologist geo 207, worker rest farm 194, worker gather farm 193, worker eat coalmine 151, worker rest coalmine 150, worker rest wood 134, worker gather wood 131, worker mine ironmine 130, worker rest quarry 110, worker gather quarry 108, carrier haul log wood -> saw 107. Not done (outcome: times): failed: nothing left to search there ×78.

Fights and contact: attacked enemy buildings 15 times (first 16:48); took hq 17:55, quarry 18:26, guard 18:49, coalmine 19:50, wood 20:22, guard 23:49, butcher 24:59, waterhut 25:58, house 28:01, guard 30:32, hunter 31:17, mill 31:51, pigfarm 32:39, bakery 33:04; killed bow 3, sword 4; lost people sword 3, bow 1, spear 1; first saw player 2 at 7:00.

Your notes (3 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×3 15:00–45:00 v256 builder frontier: posts 7, staffed 7, mines 2/1, barracks 1, soldiers 20, carriers 2, idle 0.


Script: 1832 turns, 0.1 ms average, worst 3 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 31: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 27/4/1988/10/60 | 29/6/2714/10/50 |
| 30 | 38/7/3624/26/35 | 11/3/1303/3/50 |
| 45 | 38/7/3639/28/33 | 11/3/1303/3/50 |
| 60 | 38/7/3639/28/33 | 11/3/1303/3/50 |
| first | 8 10 13 16 18 - | 10 16 - - - - |

First built by scheduled (game minute; x2 = the second one; soldier = first trained): quarry 1, forest 2, saw 2, wood 2, guard 3, house 3, military 3, wood x2 3, fisher 4, forest x2 4, hunter 4, coalmine 5, guard x2 5, house x2 5, military x2 5, ironmine 6, smelter 8, smith 10, coalmine x2 11, quarry x2 11, saw x2 13, weaponsmith 13, house2 14, hunter x2 15, barracks 16, soldier 16, waterhut 16, smelter x2 17, armorer 18, tower 18, tower x2 19, farm 20, mill 21, pigfarm 21, bakery 23.

First built by original game NPC (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, guard 2, house2 2, military 2, coalmine 3, forest 3, guard x2 3, military x2 3, saw 3, quarry x2 4, wood x2 4, hunter 5, waterhut 5, ironmine 6, fisher 8, house 9, hunter x2 9, smelter 10, farm 11, mill 11, bakery 12, house x2 12, farm x2 13, pigfarm 14, smith 16, coalmine x2 18, butcher 19.

Stock at minutes 15/30/45 (scheduled): pick 2/5/5, hammer 1/2/2, shovel 1/1/1, plank 6/42/51, stone 6/73/66.

War and gold at the end: scheduled: took 11, lost 0, killed 7, fallen 9, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 11, killed 9, fallen 7, gold 0 in stock + 0 in vaults, STUCK (town stopped growing).

At the end (what scheduled could see): enemy buildings known 4 (military 2); soldiers outside buildings 19 (bowmen 6); military sites unfinished 1; posts waiting for a swordsman 0; pioneers 0; without resource: ironmine 1, quarry 1.

Growth (what scheduled could see): last new building at minute 22; waiting: No free ground to plant in range inside your border x2; Waiting for iron ore x2; Waiting for materials x2; spare tools in stock: pick 5, hammer 2, shovel 1, axe 2, saw 1.

Soldiers every 5 min: 10 10 10 25 25 26 26 28 28 28 28 28 (original game NPC: 10 10 10 3 3 3 3 3 3 3 3 3).

First army orders (game min:sec): 11:20 armyTarget sword=18; 11:20 armyTarget spear=8; 11:20 armyTarget bow=12; 16:14 attack 14 soldiers -> building 1; 17:52 attack 14 soldiers -> building 79; 18:50 attack 10 soldiers -> building 108; 19:14 attack 12 soldiers -> building 147; 19:22 march 4 soldiers -> 63,134; 20:22 attack 8 soldiers -> building 123; 20:50 attack 8 soldiers -> building 145; 21:18 attack 8 soldiers -> building 125; 22:22 attack 8 soldiers -> building 154.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 43 min, 2–60: settlers: No free settlers and every bed taken: build houses.
- 2 min, 7–8: stall: hunter: no game in range inside your border 53% of the last 5 minutes.
- 1 min, 7: army: Lost 4 soldiers in the last 5 minutes, and no barracks to train new ones.
- 11 min, 10–49: orders: The order "sendUnit" was sent 52 times this minute: send it only when something changes.
- 5 min, 18–22: stall: smelter: waiting for iron ore 95% of the last 5 minutes.
- 29 min, 20–50: carriers: armorer: waiting for iron 79% of the last 10 minutes while 6 lie in stock: too few carriers. Build more houses.
- 13 min, 20–46: stall: hunter: meat pile full, waiting for carriers 100% of the last 5 minutes.
- 22 min, 21–60: weapons: 9 weapons lie unused: the barracks needs free settlers (build houses).
- 4 min, 22–49: stall: barracks: waiting for weapons from the weaponsmith 100% of the last 5 minutes.
- 1 min, 22: stall: armorer: waiting for iron 86% of the last 5 minutes.
- 3 min, 22–24: army: Lost 5 soldiers in the last 5 minutes.
- 37 min, 23–60: carriers: smelter: waiting for iron ore 94% of the last 10 minutes while 12 lie in stock: too few carriers. Build more houses.
- 2 min, 23–24: carriers: mill: waiting for grain 72% of the last 10 minutes while 6 lie in stock: too few carriers. Build more houses.
- 4 min, 23–26: carriers: pig farm: waiting for grain and water 74% of the last 10 minutes while 25 lie in stock: too few carriers. Build more houses.
- 9 min, 23–48: stall: fisher: fish pile full, waiting for carriers 100% of the last 5 minutes.
- 1 min, 24: stall: coal mine: needs bread or fish or meat 100% of the last 5 minutes.
- 2 min, 25–26: stall: sawmill: waiting for logs 100% of the last 5 minutes.
- 34 min, 26–60: carriers: weaponsmith: waiting for iron 91% of the last 10 minutes while 8 lie in stock: too few carriers. Build more houses.
- 8 min, 26–60: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 11 min, 27–37: carriers: sawmill: waiting for logs 72% of the last 10 minutes while 37 lie in stock: too few carriers. Build more houses.
- 1 min, 28: stall: iron mine: iron ore pile full, waiting for carriers 100% of the last 5 minutes.
- 24 min, 29–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 30–54: stall: mill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 5 min, 33–37: stall: barracks: waiting for iron armor for new bowmen 100% of the last 5 minutes.
- 14 min, 33–57: stall: farm: grain pile full, waiting for carriers 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 12 | 16 | 22 | 19 | 0 | 12 | 0 | 0 | 0 | 24 | 5 | 14 | 0 | 0 | 8 | 0 | 0 | 26 | 53 | 1988 | 6431 |
| 30 | 38 | 44 | 83 | 19 | 0 | 21 | 14 | 18 | 8 | 36 | 15 | 5 | 0 | 0 | 0 | 0 | 4 | 0 | 124 | 3624 | 10097 |
| 45 | 42 | 67 | 87 | 19 | 0 | 21 | 14 | 18 | 8 | 35 | 16 | 6 | 0 | 0 | 0 | 0 | 2 | 0 | 131 | 3639 | 10107 |
| 60 | 42 | 74 | 89 | 16 | 0 | 21 | 14 | 18 | 8 | 34 | 12 | 8 | 0 | 0 | 6 | 1 | 2 | 0 | 137 | 3639 | 10107 |

At the end: buildings (built+sites) guard 5, wood 3, house 3, quarry 2, forest 2, saw 2, hunter 2, coalmine 2, smelter 2, house2 1+1, tower 2, hq 1, fisher 1, ironmine 1, smith 1, weaponsmith 1, barracks 1, waterhut 1, armorer 1, farm 1, mill 1, pigfarm 1, bakery 1, butcher 0+1, castle 0+1.
People: worker 24, soldier 19, digger 2, builder 2, geologist 2, carrier 2, explorer 1; beds 50. Soldiers: sword 10, bow 6, spear 3.

Goods produced in the game: log 155, coal 148, stone 138, plank 131, fish 110, ironore 71, iron 67, meat 58, grain 34, water 22, sword 21, armor 12, bow 8, flour 8, pig 8, spear 5, pick 4, hammer 3, axe 2, saw 2, shovel 1, rod 1.
Goods consumed in the game: log 131, stone 126, plank 122, coal 114, fish 100, ironore 67, iron 59, meat 39, grain 16, sword 15, bow 10, water 8, pick 7, armor 6, hammer 5, spear 4, axe 3, shovel 2, saw 2, rod 1, scythe 1.
Goods lost in the game: grain 14, log 8, flour 8, meat 8, pig 8, coal 6, iron 6, water 6, fish 4, bread 2, saw 1, pick 1, shovel 1, hammer 1.
Goods captured in the game: stone 30, log 22, plank 14, grain 14, meat 10, ironore 8, flour 8, pig 8, coal 6, iron 6, water 6, fish 4, bread 2, bow 1, saw 1, pick 1, shovel 1, hammer 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- quarry (110 building-min): Stone pile full, waiting for carriers 36%, No stone in range inside your border 32%, Cutting stone 21%, Bringing stone to the pile 10%, Worker picking up a pickaxe 1%
- wood (165 building-min): Log pile full, waiting for carriers 66%, Felling a tree 23%, Bringing a log to the pile 11%, Worker picking up an axe 0%, Working 0%
- forest (115 building-min): No free ground to plant in range inside your border 65%, Planting a sapling 34%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- saw (106 building-min): Waiting for logs 44%, Output pile full, waiting for carriers 33%, Sawing planks 16%, Stacking outside 3%, Output pile full, nothing needs it right now 3%
- house (165 building-min): Idle 100%
- guard (262 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 74%, Fishing 12%, Fish pile full, nothing needs it right now 11%, Bringing a fish to the pile 3%, Worker picking up a fishing rod 0%
- hunter (102 building-min): Meat pile full, waiting for carriers 83%, Hunting 7%, Bringing meat to the pile 4%, No game in range inside your border 3%, Meat pile full, nothing needs it right now 3%
- coalmine (105 building-min): Coal pile full, waiting for carriers 58%, Mining coal 15%, Needs bread or fish or meat: mining stopped 13%, Deposit thinning: mining coal 8%, Bringing coal out 4%
- ironmine (54 building-min): Iron ore pile full, waiting for carriers 51%, Deposit worn out: finding little iron ore 24%, Deposit thinning: mining iron ore 13%, Mining iron ore 6%, Bringing iron ore out 4%
- smelter (96 building-min): Waiting for iron ore 87%, Smelting iron 9%, Stacking outside 2%, Output pile full, nothing needs it right now 1%, Worker picking up a hammer 0%
- smith (51 building-min): All tool targets met 93%, Waiting for coal 2%, Forging pickaxe 1%, Worker picking up a hammer 1%, Stacking outside 1%
- weaponsmith (48 building-min): Waiting for iron 86%, Forging sword 6%, Forging bow 2%, Stacking outside 2%, Output pile full, nothing needs it right now 2%
- house2 (46 building-min): Idle 100%
- barracks (45 building-min): Waiting for weapons from the weaponsmith 49%, Waiting for a free settler to train 24%, Waiting for iron armor for new bowmen 22%, Weapons on the way 4%, Training soldiers 1%
- waterhut (44 building-min): Water pile full, waiting for carriers 92%, Bringing water to the pile 3%, Fetching water 3%, Water pile full, nothing needs it right now 1%, Worker on the way 1%
- tower (84 building-min): Idle 99%, Soldiers on the way 1%, Waiting for a soldier 0%
- armorer (42 building-min): Waiting for iron 66%, All armor targets met 28%, Making iron armor 4%, Worker picking up a hammer 1%, Stacking outside 1%
- farm (40 building-min): Grain pile full, waiting for carriers 87%, Sowing a field 5%, Harvesting grain 4%, Bringing grain to the pile 2%, Worker picking up a scythe 1%
- mill (40 building-min): Output pile full, waiting for carriers 90%, Waiting for grain 7%, Grinding flour 1%, Worker on the way 1%, Idle 1%
- pigfarm (39 building-min): Output pile full, waiting for carriers 82%, Waiting for grain and water 10%, Raising a pig 5%, Waiting for water 3%, Stacking outside 1%
- bakery (38 building-min): Waiting for a free settler 60%, Idle 40%

Building sites, time per state (site-min): Waiting for materials 81, Waiting for a builder 30, Waiting for a digger 17, Leveling the ground 12, Builders at work 10.

Build order (placed at min:sec, finished at): quarry 0:02→0:32, wood 0:34→1:08, forest 0:46→1:28, saw 1:10→1:49, house 1:22→2:08, wood 1:24→2:25, guard 1:30→2:49, fisher 1:50→3:11, hunter 2:12→3:34, forest 2:50→3:51, guard 3:12→4:10, house 3:36→4:30, coalmine 4:16→4:57, guard 4:40→5:30, ironmine 5:10→5:53, guard 5:40→6:21, smelter 6:20→7:19, house 7:20→8:08, smith 8:22→9:09, quarry 9:12→10:09, coalmine 9:32→10:29, wood 10:54→11:29, weaponsmith 11:18→12:14, saw 11:46→12:39, house2 12:16→13:59, hunter 12:46→14:24, barracks 13:24→15:00, waterhut 14:14→15:33, smelter 14:38→16:15, tower 15:08→17:08, armorer 15:28→17:41, tower 17:34→18:57, farm 17:36→19:47, mill 17:48→20:19, pigfarm 17:50→20:55, bakery 18:00→22:13, butcher 18:02→never, house2 20:02→never, castle 37:06→never.

Demolished or burned: guard (burned) 17:54, coalmine (burned) 18:53, wood (burned) 20:29, quarry (burned) 20:58, quarry (burned) 22:20, hunter (burned) 22:26, mill (burned) 22:51, smith (burned) 23:15, pigfarm (burned) 26:53.

Orders given: sendUnit 838, place 39, attack 11, release 11, profession 3, armyTarget 3, toolKeep 1, armyArmor 1, armorRepair 1, march 1. None refused.

People changing jobs: new carrier 49, carrier -> soldier 27, carrier -> worker 23, new soldier 10, new worker 1, carrier -> explorer 1, carrier -> geologist 1.

People's orders (5251 in all, 4529 done): geologist geo 830, worker rest forest 235, worker gather forest 233, worker mine coalmine 207, worker rest wood 158, worker gather wood 155, worker rest coalmine 155, worker rest quarry 140, worker gather quarry 138, worker rest saw 133, carrier haul log wood -> saw 131, worker toCraft saw 131, worker craft saw 131, worker rest fisher 111. Not done (outcome: times): failed: nothing left to search there ×653; failed: no way (carrier (haul 0) target-off-land) ×19; failed: no way (geologist (geo 2) cut-off) ×1; failed: can't reach that spot ×1.

Failed path searches (who (task) why: times): carrier (haul 0) target-off-land 19, geologist (geo 0) cut-off 6, geologist (geo 2) cut-off 1.

Fights and contact: attacked enemy buildings 12 times (first 16:14); took hq 17:32, guard 17:53, coalmine 18:53, guard 19:15, wood 20:29, quarry 20:58, quarry 21:23, hunter 22:26, mill 22:51, smith 23:15, pigfarm 26:53; killed bow 3, sword 4; lost people bow 5, sword 3, spear 1; first saw player 1 at 7:00.

Warnings: site-stuck 5. Last: 51:20 site-stuck: Slaughterhouse site has not moved for 20 min (Waiting for materials) | 52:30 site-stuck: Medium house site has not moved for 20 min (Waiting for materials) | 55:50 site-stuck: Castle site has not moved for 10 min (Waiting for a builder)

Your notes (3 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×3 15:00–45:02 v256 builder frontier: posts 8, staffed 7, mines 2/1, barracks 1, soldiers 19, carriers 2, idle 0.


Script: 1837 turns, 0.2 ms average, worst 4 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 28/4/2037/10/60 | 29/6/2688/10/40 |
| 30 | 47/9/3853/34/43 | 27/3/2275/3/70 |
| 45 | 51/12/5328/38/37 | 17/1/1625/1/70 |
| 60 | 51/12/5328/38/37 | 17/1/1625/1/70 |
| first | 7 9 15 16 18 31 | 9 10 21 - - - |

First built by scheduled (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, forest 2, saw 2, fisher 3, house 3, wood x2 3, forest x2 4, guard 4, hunter 4, military 4, coalmine 5, guard x2 5, house x2 5, military x2 5, ironmine 7, smelter 7, smith 9, coalmine x2 10, quarry x2 10, ironmine x2 11, house2 13, saw x2 14, smelter x2 14, weaponsmith 15, barracks 16, soldier 17, waterhut 17, farm 18, tower 18, mill 19, house2 x2 21, bakery 22, tower x2 22, fisher x2 23, pigfarm 23, armorer 24, butcher 24, hunter x2 30, castle 31.

First built by original game NPC (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, guard 2, house2 2, military 2, fisher 3, saw 3, wood x2 3, hunter 4, quarry x2 4, guard x2 5, military x2 5, waterhut 5, coalmine 6, ironmine 6, hunter x2 7, house 9, smelter 9, smith 10, farm 11, mill 11, bakery 13, coalmine x2 14, forest 15, house x2 16, forest x2 17, saw x2 17, goldmine 20, ironmine x2 20, smelter x2 20, farm x2 21, weaponsmith 21.

Stock at minutes 15/30/45 (scheduled): pick 2/6/6, hammer 2/1/1, shovel 1/1/1, plank 11/62/79, stone 4/42/62.

War and gold at the end: scheduled: took 13, lost 0, killed 9, fallen 15, gold 0 in stock + 0 in vaults. original game NPC: took 0, lost 13, killed 15, fallen 9, gold 0 in stock + 0 in vaults, STUCK (town stopped growing).

At the end (what scheduled could see): enemy buildings known 13 (military 1); soldiers outside buildings 19 (bowmen 3); military sites unfinished 0; posts waiting for a swordsman 0; pioneers 0; without resource: quarry 1, ironmine 1.

Growth (what scheduled could see): last new building at minute 37; waiting: Needs bread or fish or meat x3; Waiting for coal x3; No free ground to plant in range inside your border x2; spare tools in stock: pick 6, hammer 1, shovel 1, axe 1, saw 1.

Soldiers every 5 min: 10 10 10 22 29 34 38 38 38 38 38 38 (original game NPC: 10 10 10 7 5 3 1 1 1 1 1 1).

First army orders (game min:sec): 13:40 armyTarget sword=18; 13:40 armyTarget spear=8; 13:40 armyTarget bow=12; 18:24 attack 14 soldiers -> building 38; 23:20 attack 9 soldiers -> building 126; 24:24 attack 10 soldiers -> building 129; 25:24 attack 8 soldiers -> building 236; 25:46 attack 10 soldiers -> building 143; 26:26 attack 13 soldiers -> building 141; 27:06 attack 9 soldiers -> building 191; 27:32 attack 12 soldiers -> building 147; 28:06 attack 8 soldiers -> building 154.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 8 min, 2–26: settlers: No free settlers and every bed taken: build houses.
- 2 min, 7–8: army: Lost 4 soldiers in the last 5 minutes, and no barracks to train new ones.
- 2 min, 11–12: stall: smith: waiting for coal 55% of the last 5 minutes.
- 7 min, 11–53: orders: The order "sendUnit" was sent 32 times this minute: send it only when something changes.
- 5 min, 19–37: stall: water hut: water pile full, waiting for carriers 100% of the last 5 minutes.
- 33 min, 21–60: weapons: 17 weapons lie unused: the barracks needs free settlers (build houses).
- 9 min, 21–29: stall: iron mine: deposit worn out 93% of the last 5 minutes.
- 1 min, 22: stall: barracks: waiting for weapons from the weaponsmith 53% of the last 5 minutes.
- 38 min, 23–60: carriers: bakery: waiting for flour 92% of the last 10 minutes while 8 lie in stock: too few carriers. Build more houses.
- 9 min, 23–47: stall: mill: output pile full, waiting for carriers 98% of the last 5 minutes.
- 2 min, 23–24: army: Lost 5 soldiers in the last 5 minutes.
- 10 min, 27–53: carriers: butcher: waiting for pigs 72% of the last 10 minutes while 8 lie in stock: too few carriers. Build more houses.
- 11 min, 29–49: stall: barracks: waiting for iron armor for new bowmen 100% of the last 5 minutes.
- 21 min, 30–50: stall: fisher: fish pile full, waiting for carriers 100% of the last 5 minutes.
- 22 min, 31–60: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 12 min, 32–60: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 13 min, 34–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 24 min, 37–60: settlers: No free settlers: build houses.
- 6 min, 38–43: stall: coal mine: needs bread or fish or meat 100% of the last 5 minutes.
- 19 min, 42–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 3 min, 44–46: stall: farm: grain pile full, waiting for carriers 99% of the last 5 minutes.
- 2 min, 48–49: stall: weaponsmith: waiting for coal 100% of the last 5 minutes.
- 11 min, 50–60: carriers: weaponsmith: waiting for coal 100% of the last 10 minutes while 6 lie in stock: too few carriers. Build more houses.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 11 | 14 | 9 | 18 | 0 | 14 | 0 | 0 | 0 | 31 | 9 | 21 | 0 | 0 | 0 | 0 | 1 | 17 | 49 | 2037 | 6964 |
| 30 | 31 | 69 | 55 | 29 | 6 | 26 | 20 | 16 | 8 | 26 | 10 | 16 | 0 | 0 | 4 | 1 | 6 | 0 | 149 | 3853 | 13249 |
| 45 | 30 | 78 | 62 | 36 | 5 | 29 | 19 | 14 | 8 | 13 | 21 | 20 | 0 | 0 | 8 | 0 | 9 | 0 | 162 | 5328 | 15102 |
| 60 | 30 | 79 | 62 | 36 | 5 | 31 | 19 | 14 | 8 | 6 | 23 | 33 | 0 | 0 | 8 | 0 | 9 | 0 | 166 | 5328 | 15102 |

At the end: buildings (built+sites) guard 9, wood 3, saw 3, house 3, coalmine 3, ironmine 3, smelter 3, quarry 2, forest 2, fisher 2, hunter 2, house2 2, tower 2, hq 1, smith 1, weaponsmith 1, barracks 1, waterhut 1, farm 1, mill 1, bakery 1, pigfarm 1, armorer 1, butcher 1, castle 1.
People: worker 28, soldier 19, digger 2, builder 2, geologist 2, carrier 2, explorer 1; beds 70. Soldiers: sword 10, spear 6, bow 3.

Goods produced in the game: coal 187, log 166, fish 163, meat 146, plank 143, stone 141, ironore 127, iron 110, grain 51, water 48, sword 32, pig 20, flour 17, bow 13, armor 13, spear 10, bread 9, pick 6, axe 3, hammer 3, saw 2, rod 2, shovel 1.
Goods consumed in the game: coal 182, fish 153, plank 151, stone 151, log 143, meat 119, ironore 110, iron 85, grain 37, water 29, sword 25, pig 12, spear 10, bread 10, pick 9, bow 9, flour 9, hammer 5, axe 4, armor 4, shovel 2, saw 2, rod 2, scythe 1.
Goods lost in the game: fish 8, ironore 7, meat 6.
Goods captured in the game: plank 39, stone 32, fish 27, ironore 13, meat 10, iron 8, bread 5, log 3, bow 3, scythe 1, coal 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- quarry (110 building-min): No stone in range inside your border 35%, Stone pile full, waiting for carriers 27%, Cutting stone 24%, Bringing stone to the pile 13%, Needs a worker with a pickaxe 1%
- wood (160 building-min): Log pile full, waiting for carriers 72%, Felling a tree 21%, Bringing a log to the pile 6%, Worker picking up an axe 1%, Log pile full, nothing needs it right now 0%
- forest (115 building-min): No free ground to plant in range inside your border 66%, Planting a sapling 33%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- saw (136 building-min): Output pile full, waiting for carriers 72%, Sawing planks 13%, Waiting for logs 10%, Stacking outside 3%, Output pile full, nothing needs it right now 1%
- house (163 building-min): Idle 100%
- fisher (94 building-min): Fish pile full, waiting for carriers 80%, Fishing 11%, Fish pile full, nothing needs it right now 6%, Bringing a fish to the pile 2%, Worker picking up a fishing rod 1%
- guard (378 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- hunter (87 building-min): No game in range inside your border 35%, Meat pile full, waiting for carriers 31%, Hunting 18%, Bringing meat to the pile 11%, Meat pile full, nothing needs it right now 4%
- coalmine (158 building-min): Needs bread or fish or meat: mining stopped 60%, Deposit thinning: mining coal 16%, Mining coal 9%, Coal pile full, waiting for carriers 6%, Deposit worn out: finding little coal 3%
- ironmine (128 building-min): Deposit worn out: finding little iron ore 46%, Iron ore pile full, waiting for carriers 20%, Waiting for a free settler 18%, Deposit thinning: mining iron ore 6%, Mining iron ore 4%
- smelter (131 building-min): Waiting for iron ore 42%, Output pile full, waiting for carriers 28%, Smelting iron 11%, Waiting for coal 10%, Waiting for coal and iron ore 3%
- smith (52 building-min): All tool targets met 90%, Waiting for coal 4%, Forging pickaxe 1%, Stacking outside 1%, Forging axe 1%
- house2 (87 building-min): Idle 100%
- weaponsmith (45 building-min): Waiting for coal 39%, Output pile full, waiting for carriers 28%, Waiting for iron 12%, Forging sword 9%, Forging bow 4%
- barracks (44 building-min): Waiting for iron armor for new bowmen 58%, Waiting for a free settler to train 23%, Weapons on the way 10%, Waiting for weapons from the weaponsmith 7%, Training soldiers 2%
- waterhut (44 building-min): Water pile full, waiting for carriers 89%, Bringing water to the pile 5%, Fetching water 5%, Worker on the way 0%, Water pile full, nothing needs it right now 0%
- farm (43 building-min): Grain pile full, waiting for carriers 83%, Sowing a field 8%, Harvesting grain 5%, Bringing grain to the pile 3%, Worker picking up a scythe 1%
- tower (81 building-min): Idle 99%, Soldiers on the way 1%
- mill (41 building-min): Output pile full, waiting for carriers 85%, Waiting for grain 11%, Grinding flour 2%, Stacking outside 1%, Worker on the way 1%
- bakery (38 building-min): Waiting for flour 93%, Baking bread 5%, Stacking outside 1%, Worker on the way 0%, Waiting for flour and water 0%
- pigfarm (38 building-min): Output pile full, waiting for carriers 85%, Raising a pig 12%, Stacking outside 1%, Waiting for grain and water 1%, Waiting for water 0%
- armorer (36 building-min): Output pile full, waiting for carriers 62%, All armor targets met 18%, Waiting for iron 13%, Making iron armor 4%, Worker picking up a hammer 2%
- butcher (36 building-min): Output pile full, waiting for carriers 54%, Waiting for pigs 41%, Butchering 2%, Worker picking up an axe 1%, Stacking outside 1%
- castle (30 building-min): Idle 99%, Soldiers on the way 1%

Building sites, time per state (site-min): Leveling the ground 15, Waiting for a digger 13, Builders at work 13, Waiting for a builder 8, Waiting for materials 8.

Build order (placed at min:sec, finished at): quarry 0:02→0:25, wood 0:28→0:58, forest 0:40→1:15, saw 1:02→1:39, house 1:14→2:02, wood 1:16→2:21, fisher 1:26→2:45, guard 1:40→3:06, hunter 2:04→3:29, forest 2:46→3:50, guard 3:12→4:09, house 3:32→4:27, coalmine 4:12→4:44, guard 4:34→5:30, ironmine 5:08→6:01, guard 5:38→6:24, smelter 6:04→6:59, smith 7:20→8:15, coalmine 8:18→9:12, coalmine 8:30→9:27, quarry 9:02→9:47, ironmine 9:14→10:16, house 10:10→10:48, house2 11:34→12:40, smelter 12:08→13:24, saw 12:40→13:58, weaponsmith 13:38→14:46, barracks 14:32→15:40, waterhut 15:08→16:15, wood 15:30→16:28, farm 16:06→17:02, tower 16:36→17:54, mill 17:14→18:58, house2 18:10→20:39, tower 19:44→21:17, bakery 19:52→21:51, pigfarm 20:14→22:25, armorer 20:16→23:38, fisher 20:18→22:52, butcher 20:40→23:48, … (42 in all).

Demolished or burned: coalmine (burned) 25:25, ironmine (burned) 25:26, ironmine (burned) 25:49, coalmine (burned) 27:10.

Orders given: sendUnit 612, place 42, attack 13, release 13, profession 3, armyTarget 3, toolKeep 1, armyArmor 1, armorRepair 1, march 1. None refused.

People changing jobs: new carrier 69, carrier -> soldier 43, carrier -> worker 27, new soldier 5, new worker 1, carrier -> explorer 1, carrier -> geologist 1.

People's orders (6829 in all, 6264 done): geologist geo 610, worker mine coalmine 306, worker rest forest 267, worker gather forest 265, worker mine ironmine 236, worker rest coalmine 199, worker rest wood 169, worker gather wood 166, worker rest fisher 165, worker gather fisher 163, worker eat coalmine 162, carrier haul fish fisher -> coalmine 147, worker rest saw 145, worker rest quarry 143. Not done (outcome: times): failed: nothing left to search there ×508; ended: the person is gone (became a soldier, defeated or removed) ×6.

Fights and contact: attacked enemy buildings 14 times (first 18:24); took hq 20:12, guard 23:40, coalmine 24:28, ironmine 25:26, ironmine 25:49, guard 26:44, coalmine 27:10, guard 27:46, smelter 28:10, saw 28:39, hunter 29:05, guard 31:51, guard 33:17; killed bow 3, sword 6; lost people bow 7, sword 5, spear 3; first saw player 2 at 7:00.

Warnings: econ-balance 4. Last: 36:31 econ-balance: fish of owner 1: 36 counted, 35 expected from the bookkeeping | 47:31 econ-balance: fish of owner 1: 36 counted, 35 expected from the bookkeeping | 58:31 econ-balance: fish of owner 1: 36 counted, 35 expected from the bookkeeping

Your notes (3 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×3 15:00–45:00 v256 builder frontier: posts 12, staffed 12, mines 3/3, barracks 1, soldiers 19, carriers 2, idle 0.


Script: 1854 turns, 0.2 ms average, worst 5 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 29/4/2144/13/37 | 30/6/2697/10/50 |
| 30 | 39/6/3495/20/50 | 65/10/4230/15/95 |
| 45 | 41/7/4200/28/47 | 80/18/8148/33/97 |
| 60 | 41/7/4200/31/59 | 88/25/12370/50/100 |
| first | 8 10 13 14 18 45 | 11 14 22 22 38 35 |

First built by scheduled (game minute; x2 = the second one; soldier = first trained): quarry 1, forest 2, saw 2, wood 2, house 3, wood x2 3, forest x2 4, guard 4, hunter 4, military 4, fisher 5, guard x2 5, house x2 5, military x2 5, coalmine 6, ironmine 7, smelter 8, smith 10, goldmine 11, quarry x2 11, saw x2 12, weaponsmith 13, barracks 14, goldsmelter 14, soldier 15, vault 15, waterhut 15, house2 16, vault x2 17, armorer 18, tower 18, farm 19, mill 19, bakery 20, tower x2 20, butcher 21, pigfarm 21, castle 45, house2 x2 45.

First built by original game NPC (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, guard 2, house2 2, military 2, fisher 3, saw 3, wood x2 3, guard x2 4, hunter 4, military x2 4, quarry x2 4, coalmine 5, waterhut 5, farm 7, ironmine 7, house 9, hunter x2 10, mill 10, bakery 11, smelter 11, farm x2 12, pigfarm 13, smith 14, house x2 15, coalmine x2 16, forest 17, saw x2 18, forest x2 19, butcher 21, ironmine x2 21, barracks 22, weaponsmith 22, pigfarm x2 24, weaponsmith x2 24, fisher x2 25, smelter x2 25, soldier 25, armorer 26, bakery x2 29, mill x2 29, barracks x2 30, castle 35, house2 x2 36, tower 38, tower x2 39, goldmine 40, goldsmelter 40, vault 40, vault x2 41, goldmine x2 58.

Stock at minutes 15/30/45 (scheduled): pick 2/2/2, hammer 0/0/0, shovel 0/0/0, plank 9/18/18, stone 3/16/16.

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 16 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 1 in stock + 18 in vaults.

At the end (what scheduled could see): enemy buildings known 8 (military 2); soldiers outside buildings 20 (bowmen 4); military sites unfinished 0; posts waiting for a swordsman 0; pioneers 0; without resource: goldmine 1.

Growth (what scheduled could see): last new building at minute 45; waiting: No free ground to plant in range inside your border x2; Waiting for coal x2; No grown trees in range inside your border x1; spare tools in stock: pick 2, hammer 0, shovel 0, axe 0, saw 1.

Soldiers every 5 min: 10 10 13 18 20 20 23 25 28 30 31 31 (original game NPC: 10 10 10 10 15 15 27 29 33 40 45 50).

First army orders (game min:sec): 11:30 armyTarget sword=10; 11:30 armyTarget spear=4; 11:30 armyTarget bow=6; 13:10 armyTarget banner=1.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 6 min, 2–42: settlers: No free settlers and every bed taken: build houses.
- 2 min, 7–8: army: Lost 4 soldiers in the last 5 minutes, and no barracks to train new ones.
- 47 min, 12–60: stall: smith: waiting for coal 100% of the last 5 minutes.
- 4 min, 13–16: stall: smelter: waiting for iron ore 75% of the last 5 minutes.
- 2 min, 15–42: carriers: smith: waiting for coal 100% of the last 10 minutes while 4 lie in stock: too few carriers. Build more houses.
- 1 min, 15: carriers: weaponsmith: waiting for iron 70% of the last 10 minutes while 7 lie in stock: too few carriers. Build more houses.
- 2 min, 15–42: carriers: goldsmelter: waiting for coal 100% of the last 10 minutes while 4 lie in stock: too few carriers. Build more houses.
- 33 min, 16–51: stall: goldsmelter: waiting for coal 100% of the last 5 minutes.
- 3 min, 17–19: stall: iron mine: deposit worn out 94% of the last 5 minutes.
- 17 min, 20–59: stall: armorer: needs a worker with a hammer 100% of the last 5 minutes.
- 1 min, 23: stall: weaponsmith: waiting for iron 100% of the last 5 minutes.
- 20 min, 29–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 15 min, 30–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 2 min, 31–32: stall: weaponsmith: waiting for coal 100% of the last 5 minutes.
- 3 min, 34–48: orders: The order "sendUnit" was sent 30 times this minute: send it only when something changes.
- 1 min, 42: carriers: weaponsmith: waiting for coal 89% of the last 10 minutes while 4 lie in stock: too few carriers. Build more houses.
- 17 min, 43–60: stall: barracks: waiting for iron armor for new bowmen 100% of the last 5 minutes.
- 8 min, 47–60: weapons: 4 weapons lie unused: the barracks needs free settlers (build houses).

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 5 | 15 | 12 | 15 | 0 | 12 | 3 | 0 | 0 | 12 | 0 | 7 | 10 | 0 | 0 | 0 | 0 | 0 | 35 | 2144 | 6628 |
| 30 | 22 | 17 | 16 | 16 | 11 | 20 | 17 | 13 | 13 | 0 | 2 | 21 | 14 | 0 | 0 | 0 | 0 | 13 | 110 | 3495 | 8509 |
| 45 | 26 | 17 | 16 | 16 | 11 | 20 | 18 | 22 | 13 | 0 | 7 | 26 | 14 | 0 | 0 | 1 | 2 | 10 | 128 | 4200 | 9046 |
| 60 | 32 | 17 | 16 | 16 | 11 | 20 | 19 | 21 | 13 | 1 | 14 | 26 | 5 | 16 | 1 | 1 | 2 | 23 | 129 | 4200 | 9046 |

At the end: buildings (built+sites) guard 4, wood 3, house 3, quarry 2, forest 2, saw 2, vault 2, house2 2, tower 2, hq 1, hunter 1, fisher 1, coalmine 1, ironmine 1, smelter 1, smith 1, goldmine 1, weaponsmith 1, goldsmelter 1, barracks 1, waterhut 1, armorer 1, farm 1, mill 1, bakery 1, pigfarm 1, butcher 1, castle 1.
People: carrier 28, worker 24, soldier 20, digger 2, builder 2, geologist 2, explorer 1; beds 70. Soldiers: sword 11, bow 4, spear 4, banner 1.

Goods produced in the game: grain 176, log 165, water 160, stone 152, plank 137, coal 108, meat 93, fish 86, flour 86, ironore 72, bread 72, pig 68, iron 58, goldore 22, gold 17, sword 16, spear 5, pick 4, axe 2, saw 2, bow 2, hammer 1, banner 1.
Goods consumed in the game: grain 155, stone 154, plank 144, water 141, log 137, coal 107, fish 76, meat 73, flour 73, bread 61, ironore 58, pig 54, iron 32, goldore 17, sword 15, pick 7, axe 4, hammer 4, spear 4, shovel 2, saw 2, bow 2, rod 1, scythe 1, gold 1, banner 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- quarry (109 building-min): Stone pile full, nothing needs it right now 64%, Cutting stone 23%, Bringing stone to the pile 12%, Stone pile full, waiting for carriers 1%, Worker picking up a pickaxe 0%
- wood (167 building-min): Log pile full, nothing needs it right now 37%, No grown trees in range inside your border 29%, Felling a tree 23%, Bringing a log to the pile 10%, Log pile full, waiting for carriers 1%
- forest (115 building-min): No free ground to plant in range inside your border 70%, Planting a sapling 29%, Worker picking up a shovel 0%, Working 0%
- saw (107 building-min): Output pile full, nothing needs it right now 68%, Sawing planks 16%, Waiting for logs 9%, Stacking outside 3%, Output pile full, waiting for carriers 2%
- house (166 building-min): Idle 100%
- fisher (55 building-min): Fish pile full, nothing needs it right now 79%, Fishing 10%, Fish pile full, waiting for carriers 9%, Bringing a fish to the pile 2%, Worker picking up a fishing rod 0%
- guard (220 building-min): Idle 100%, Soldiers on the way 0%
- hunter (56 building-min): Meat pile full, nothing needs it right now 78%, Meat pile full, waiting for carriers 9%, Hunting 7%, Bringing meat to the pile 5%, Worker picking up a bow 0%
- coalmine (55 building-min): Deposit worn out: finding little coal 74%, Deposit thinning: mining coal 9%, Mining coal 6%, Bringing coal out 5%, Came back empty-handed 2%
- ironmine (54 building-min): Deposit worn out: finding little iron ore 72%, Iron ore pile full, nothing needs it right now 12%, Deposit thinning: mining iron ore 7%, Bringing iron ore out 4%, Mining iron ore 2%
- smelter (53 building-min): Output pile full, nothing needs it right now 36%, Waiting for iron ore 24%, Waiting for coal 19%, Smelting iron 14%, Stacking outside 3%
- smith (51 building-min): Waiting for coal 97%, Forging pickaxe 1%, Forging axe 1%, Worker picking up a hammer 0%, Forging saw 0%
- goldmine (49 building-min): Gold ore pile full, nothing needs it right now 65%, Deposit worn out: finding little gold ore 24%, Gold ore pile full, waiting for carriers 6%, Mining gold ore 1%, Bringing gold ore out 1%
- weaponsmith (48 building-min): Waiting for coal 40%, Waiting for iron 20%, All weapon targets met 16%, Waiting for gold 12%, Forging sword 4%
- goldsmelter (47 building-min): Waiting for coal 94%, Smelting gold 5%, Stacking outside 1%, Worker picking up a hammer 1%, Working 0%
- barracks (46 building-min): Waiting for iron armor for new bowmen 49%, Waiting for weapons from the weaponsmith 44%, Weapons on the way 7%, Training soldiers 0%, Idle 0%
- waterhut (46 building-min): Water pile full, nothing needs it right now 46%, Bringing water to the pile 25%, Fetching water 24%, Water pile full, waiting for carriers 5%, Worker on the way 1%
- vault (89 building-min): Idle 100%
- house2 (59 building-min): Idle 100%
- tower (83 building-min): Idle 100%, Soldiers on the way 0%
- armorer (42 building-min): Needs a worker with a hammer 100%
- farm (42 building-min): Grain pile full, nothing needs it right now 38%, Sowing a field 27%, Harvesting grain 20%, Bringing grain to the pile 10%, Grain pile full, waiting for carriers 4%
- mill (41 building-min): Output pile full, nothing needs it right now 73%, Grinding flour 12%, Stacking outside 5%, Output pile full, waiting for carriers 5%, Waiting for grain 5%
- bakery (40 building-min): Output pile full, nothing needs it right now 49%, Baking bread 41%, Stacking outside 5%, Output pile full, waiting for carriers 3%, Waiting for water 1%
- pigfarm (40 building-min): Output pile full, nothing needs it right now 44%, Raising a pig 39%, Waiting for grain 6%, Stacking outside 5%, Output pile full, waiting for carriers 4%
- butcher (39 building-min): Output pile full, nothing needs it right now 70%, Waiting for pigs 10%, Butchering 10%, Output pile full, waiting for carriers 5%, Stacking outside 4%
- castle (16 building-min): Idle 99%, Soldiers on the way 1%

Building sites, time per state (site-min): Builders at work 13, Leveling the ground 12, Waiting for a digger 12, Waiting for a builder 9, Waiting for materials 0, No way to the site for builders 0.

Build order (placed at min:sec, finished at): quarry 0:02→0:28, wood 0:32→1:01, forest 0:44→1:18, saw 1:04→1:42, house 1:16→2:08, wood 1:18→2:26, fisher 1:28→never, guard 1:42→3:13, hunter 2:08→3:33, forest 2:34→3:47, house 2:58→4:05, guard 3:34→4:24, fisher 3:48→4:42, coalmine 4:24→5:15, guard 4:50→5:42, ironmine 5:20→6:12, guard 5:50→6:48, smelter 6:18→7:28, house 7:30→8:08, smith 8:02→9:02, wood 9:16→9:53, quarry 9:40→10:10, goldmine 10:16→10:58, saw 10:32→11:17, weaponsmith 11:28→12:20, goldsmelter 11:58→13:08, barracks 12:26→13:43, waterhut 13:08→14:15, vault 13:32→14:57, house2 14:14→15:55, vault 14:44→16:22, tower 15:38→17:14, armorer 16:18→17:43, farm 17:06→18:16, mill 17:30→18:43, tower 18:06→19:17, bakery 18:50→19:47, pigfarm 19:28→20:20, butcher 20:10→20:56, castle 40:18→44:04, … (41 in all).

Demolished or burned: fisher 2:28.

Orders given: sendUnit 538, place 41, armyTarget 4, profession 3, vaultKeep 2, demolish 1, toolKeep 1, armorRepair 1, armyArmor 1. None refused.

People changing jobs: new carrier 68, carrier -> worker 22, carrier -> soldier 21, new worker 2, carrier -> explorer 1, carrier -> geologist 1.

People's orders (6973 in all, 6553 done): geologist geo 536, worker rest farm 359, worker gather farm 358, worker rest forest 221, worker gather forest 219, worker mine coalmine 202, worker rest wood 168, worker gather wood 165, worker rest waterhut 161, worker gather waterhut 160, worker rest quarry 154, worker gather quarry 152, carrier haul log wood -> saw 149, worker mine ironmine 142. Not done (outcome: times): failed: nothing left to search there ×376; ended: the person is gone (became a soldier, defeated or removed) ×8; failed: no way (builder (build 0) own-land-split) ×1.

Failed path searches (who (task) why: times): builder (build 0) own-land-split 1.

Fights and contact: first saw player 1 at 7:00.

Your notes (3 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×3 15:00–45:02 v256 builder frontier: posts 7, staffed 7, mines 1/1, barracks 1, soldiers 17, carriers 18, idle 12.


Script: 1800 turns, 0.2 ms average, worst 3 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 21/4/1829/10/40 | 27/6/2813/10/40 |
| 30 | 32/4/1859/16/34 | 55/6/3553/10/90 |
| 45 | 32/4/1859/19/31 | 67/10/6142/27/93 |
| 60 | 32/4/1859/19/31 | 78/16/9962/52/88 |
| first | 8 12 17 18 - - | 9 12 25 25 42 45 |

First built by scheduled (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, forest 2, saw 2, house 3, hunter 3, wood x2 3, forest x2 4, guard 4, guard x2 4, house x2 4, military 4, military x2 4, coalmine 5, fisher 5, ironmine 6, smelter 8, smith 12, quarry x2 14, saw x2 16, weaponsmith 17, barracks 18, fisher x2 18, soldier 18, waterhut 19, farm 20, mill 20, bakery 21, pigfarm 23, butcher 24.

First built by original game NPC (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, house2 2, guard 3, guard x2 3, military 3, military x2 3, saw 3, coalmine 4, quarry x2 4, wood x2 4, fisher 6, hunter 6, ironmine 7, hunter x2 8, house 9, smelter 9, waterhut 9, farm 10, mill 12, smith 12, bakery 13, goldmine 15, forest 17, goldsmelter 18, house x2 18, vault 18, farm x2 20, saw x2 22, coalmine x2 24, forest x2 24, barracks 25, weaponsmith 25, ironmine x2 26, pigfarm 26, butcher 27, house2 x2 27, smelter x2 27, armorer 28, fisher x2 29, barracks x2 30, weaponsmith x2 31, pigfarm x2 32, bakery x2 33, mill x2 34, soldier 38, tower 42, castle 45, tower x2 47, goldmine x2 50, vault x2 50.

Stock at minutes 15/30/45 (scheduled): pick 2/2/2, hammer 1/1/1, shovel 1/1/1, plank 9/15/17, stone 6/16/16.

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 66 in vaults.

At the end (what scheduled could see): enemy buildings known 6 (military 1); soldiers outside buildings 15 (bowmen 5); military sites unfinished 0; posts waiting for a swordsman 0; pioneers 0; without resource: none.

Growth (what scheduled could see): last new building at minute 24; waiting: No free ground to plant in range inside your border x2; Waiting for iron ore x1; Waiting for a free settler to train x1; spare tools in stock: pick 2, hammer 1, shovel 1, axe 1, saw 1.

Soldiers every 5 min: 10 10 10 14 14 16 19 19 19 19 19 19 (original game NPC: 10 10 10 10 10 10 10 15 27 38 46 52).

First army orders (game min:sec): 15:26 armyTarget sword=10; 15:26 armyTarget spear=4; 15:26 armyTarget bow=6.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 42 min, 2–60: settlers: No free settlers and every bed taken: build houses.
- 2 min, 7–8: army: Lost 4 soldiers in the last 5 minutes, and no barracks to train new ones.
- 9 min, 11–19: stall: smelter: waiting for iron ore 76% of the last 5 minutes.
- 14 min, 12–25: stall: iron mine: deposit worn out 94% of the last 5 minutes.
- 1 min, 12: orders: The order "sendUnit" was sent 30 times this minute: send it only when something changes.
- 21 min, 17–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 2 min, 19–20: stall: weaponsmith: waiting for coal 68% of the last 5 minutes.
- 7 min, 20–27: stall: barracks: waiting for weapons from the weaponsmith 97% of the last 5 minutes.
- 9 min, 21–29: carriers: weaponsmith: waiting for coal 78% of the last 10 minutes while 10 lie in stock: too few carriers. Build more houses.
- 2 min, 21–22: carriers: mill: waiting for grain 72% of the last 10 minutes while 5 lie in stock: too few carriers. Build more houses.
- 39 min, 22–60: carriers: bakery: waiting for flour 90% of the last 10 minutes while 8 lie in stock: too few carriers. Build more houses.
- 2 min, 23–24: stall: coal mine: deposit worn out 91% of the last 5 minutes.
- 37 min, 24–60: carriers: smelter: waiting for iron ore 97% of the last 10 minutes while 8 lie in stock: too few carriers. Build more houses.
- 35 min, 26–60: carriers: butcher: waiting for pigs 98% of the last 10 minutes while 8 lie in stock: too few carriers. Build more houses.
- 2 min, 28–29: stall: mill: output pile full, waiting for carriers 98% of the last 5 minutes.
- 24 min, 28–60: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 31 min, 30–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 31 min, 30–60: stall: quarry: stone pile full, waiting for carriers 100% of the last 5 minutes.
- 7 min, 31–45: stall: hunter: meat pile full, waiting for carriers 98% of the last 5 minutes.
- 3 min, 34–36: stall: iron mine: iron ore pile full, waiting for carriers 100% of the last 5 minutes.
- 23 min, 36–58: carriers: weaponsmith: waiting for iron 71% of the last 10 minutes while 4 lie in stock: too few carriers. Build more houses.
- 1 min, 45: stall: water hut: water pile full, waiting for carriers 98% of the last 5 minutes.
- 15 min, 46–60: weapons: 6 weapons lie unused: the barracks needs free settlers (build houses).
- 2 min, 48–49: stall: pig farm: output pile full, waiting for carriers 100% of the last 5 minutes.
- 1 min, 49: stall: barracks: waiting for a free settler to train 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 22 | 11 | 10 | 11 | 0 | 16 | 0 | 0 | 0 | 12 | 1 | 5 | 0 | 0 | 0 | 0 | 1 | 17 | 50 | 1829 | 6376 |
| 30 | 31 | 14 | 16 | 18 | 1 | 13 | 17 | 17 | 8 | 10 | 8 | 3 | 0 | 0 | 3 | 1 | 1 | 0 | 127 | 1859 | 6381 |
| 45 | 31 | 16 | 16 | 18 | 1 | 14 | 15 | 17 | 8 | 21 | 7 | 4 | 0 | 0 | 2 | 1 | 0 | 0 | 138 | 1859 | 6412 |
| 60 | 31 | 16 | 16 | 17 | 3 | 17 | 14 | 18 | 8 | 21 | 8 | 4 | 0 | 0 | 3 | 2 | 1 | 0 | 141 | 1859 | 6413 |

At the end: buildings (built+sites) guard 4, wood 3, house 3, quarry 2, forest 2, saw 2, fisher 2, hq 1, hunter 1, coalmine 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, waterhut 1, farm 1, mill 1, bakery 1, pigfarm 1, butcher 1.
People: worker 23, soldier 15, digger 2, builder 2, carrier 2, geologist 1, explorer 1; beds 30. Soldiers: sword 8, bow 5, spear 2.

Goods produced in the game: fish 140, log 118, stone 100, plank 91, coal 75, meat 61, grain 51, water 39, ironore 37, iron 29, flour 19, pig 13, bread 11, sword 8, spear 4, axe 3, saw 2, pick 2, rod 2, bow 2, shovel 1, hammer 1.
Goods consumed in the game: fish 129, stone 102, plank 99, log 91, coal 54, meat 44, grain 33, ironore 29, iron 25, water 25, flour 11, bread 8, pick 5, sword 5, pig 5, axe 4, bow 3, hammer 3, shovel 2, saw 2, rod 2, spear 2, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- quarry (106 building-min): Stone pile full, waiting for carriers 67%, Cutting stone 20%, Bringing stone to the pile 12%, Worker picking up a pickaxe 0%, Stone pile full, nothing needs it right now 0%
- wood (158 building-min): Log pile full, waiting for carriers 70%, Felling a tree 18%, Bringing a log to the pile 9%, Log pile full, nothing needs it right now 3%, Worker picking up an axe 1%
- forest (115 building-min): No free ground to plant in range inside your border 71%, Planting a sapling 28%, Worker picking up a shovel 0%, Working 0%
- saw (103 building-min): Output pile full, waiting for carriers 56%, Waiting for logs 21%, Sawing planks 11%, Output pile full, nothing needs it right now 9%, Stacking outside 2%
- house (166 building-min): Idle 100%
- hunter (57 building-min): Meat pile full, waiting for carriers 68%, Meat pile full, nothing needs it right now 18%, Hunting 8%, Bringing meat to the pile 5%, Worker picking up a bow 0%
- guard (221 building-min): Idle 100%, Soldiers on the way 0%
- coalmine (56 building-min): Deposit worn out: finding little coal 50%, Coal pile full, waiting for carriers 21%, Deposit thinning: mining coal 10%, Coal pile full, nothing needs it right now 6%, Mining coal 5%
- fisher (97 building-min): Fish pile full, waiting for carriers 77%, Fish pile full, nothing needs it right now 11%, Fishing 9%, Bringing a fish to the pile 2%, Worker picking up a fishing rod 1%
- ironmine (54 building-min): Iron ore pile full, waiting for carriers 52%, Deposit worn out: finding little iron ore 41%, Deposit thinning: mining iron ore 2%, Bringing iron ore out 2%, Mining iron ore 2%
- smelter (52 building-min): Waiting for iron ore 89%, Smelting iron 7%, Waiting for coal and iron ore 2%, Stacking outside 1%, Worker picking up a hammer 0%
- smith (48 building-min): All tool targets met 95%, Forging axe 1%, Worker picking up a hammer 1%, Stacking outside 1%, Forging fishing rod 1%
- weaponsmith (44 building-min): Waiting for iron 61%, Waiting for coal 21%, All weapon targets met 11%, Forging sword 2%, Worker picking up a hammer 1%
- barracks (43 building-min): Waiting for weapons from the weaponsmith 57%, Waiting for a free settler to train 38%, Weapons on the way 3%, Training soldiers 2%
- waterhut (42 building-min): Water pile full, waiting for carriers 92%, Fetching water 4%, Bringing water to the pile 3%, Water pile full, nothing needs it right now 1%, Worker on the way 0%
- farm (41 building-min): Grain pile full, waiting for carriers 74%, Sowing a field 13%, Harvesting grain 8%, Bringing grain to the pile 5%, Worker picking up a scythe 1%
- mill (40 building-min): Output pile full, waiting for carriers 92%, Waiting for grain 4%, Grinding flour 3%, Stacking outside 1%, Idle 0%
- bakery (40 building-min): Waiting for flour 92%, Baking bread 6%, Stacking outside 1%, Worker on the way 1%, Waiting for flour and water 0%
- pigfarm (38 building-min): Output pile full, waiting for carriers 78%, Waiting for water 11%, Raising a pig 8%, Waiting for grain and water 1%, Waiting for grain 1%
- butcher (37 building-min): Waiting for pigs 97%, Worker picking up an axe 1%, Butchering 1%, Idle 0%, Stacking outside 0%

Building sites, time per state (site-min): Builders at work 9, Leveling the ground 7, Waiting for a digger 7, Waiting for a builder 7.

Build order (placed at min:sec, finished at): quarry 0:02→0:31, wood 0:34→0:55, forest 0:46→1:20, saw 0:58→1:46, house 1:10→2:04, wood 1:12→2:20, hunter 1:22→2:38, guard 1:48→3:05, forest 2:06→3:18, house 2:52→3:39, guard 3:10→3:58, coalmine 3:38→4:30, fisher 4:04→4:57, guard 4:22→5:25, ironmine 5:00→5:52, guard 5:32→6:33, smelter 6:54→7:44, house 8:02→8:40, smith 11:04→11:49, quarry 12:40→13:32, saw 14:20→15:08, weaponsmith 15:24→16:27, barracks 16:14→17:04, fisher 16:42→17:44, waterhut 17:14→18:17, wood 17:34→18:45, farm 18:10→19:28, mill 18:50→19:48, bakery 19:26→20:16, pigfarm 20:44→22:08, butcher 21:52→23:01.

Orders given: sendUnit 209, place 31, armyTarget 3, profession 2, toolKeep 1. None refused.

People changing jobs: new carrier 29, carrier -> worker 22, carrier -> soldier 9, new worker 1, carrier -> explorer 1.

People's orders (3780 in all, 3601 done): geologist geo 207, worker mine coalmine 201, worker rest forest 186, worker gather forest 184, worker rest fisher 142, worker eat coalmine 141, worker gather fisher 140, carrier haul fish fisher -> coalmine 124, worker rest wood 121, worker gather wood 118, worker rest farm 112, worker gather farm 111, worker rest quarry 102, worker gather quarry 100. Not done (outcome: times): failed: nothing left to search there ×148.

Fights and contact: first saw player 2 at 7:00.

Your notes (3 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×3 15:00–45:00 v256 builder frontier: posts 4, staffed 4, mines 1/1, barracks 1, soldiers 15, carriers 2, idle 0.


Script: 1800 turns, 0.1 ms average, worst 2 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: scheduled (Blue) vs original game NPC: **won** at 24 min

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 25/4/1710/10/40 | 28/6/2149/10/40 |
| 25 | 33/9/3563/30/27 | 0/0/0/0/0 |
| first | 8 10 14 16 - - | 15 16 - - - - |

First built by scheduled (game minute; x2 = the second one; soldier = first trained): quarry 1, forest 2, saw 2, wood 2, guard 3, house 3, military 3, fisher 4, hunter 4, wood x2 4, forest x2 5, guard x2 5, military x2 5, coalmine 6, house x2 6, ironmine 7, smelter 8, smith 10, saw x2 11, coalmine x2 12, quarry x2 12, weaponsmith 14, barracks 16, house2 16, soldier 16, waterhut 17.

First built by original game NPC (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, guard 2, house2 2, military 2, fisher 3, saw 3, wood x2 3, forest 4, hunter 4, quarry x2 4, guard x2 5, military x2 5, coalmine 6, ironmine 6, hunter x2 7, waterhut 9, farm 10, house 10, mill 11, bakery 12, farm x2 13, pigfarm 14, smelter 15, house x2 16, smith 16, coalmine x2 19, butcher 20.

Stock at minutes 15 (scheduled): pick 2, hammer 1, shovel 1, plank 15, stone 5.

War and gold at the end: scheduled: took 9, lost 0, killed 9, fallen 13, gold 0 in stock + 0 in vaults. original game NPC: took 0, lost 9, killed 13, fallen 9, gold 0 in stock + 0 in vaults.

At the end (what scheduled could see): enemy buildings known 0 (military 0); soldiers outside buildings 21 (bowmen 6); military sites unfinished 0; posts waiting for a swordsman 0; pioneers 0; without resource: none.

Growth (what scheduled could see): last new building at minute 24; waiting: No free ground to plant in range inside your border x2; Waiting for iron ore x1; No grown trees in range inside your border x1; spare tools in stock: pick 3, hammer 2, shovel 2, axe 2, saw 3.

Soldiers every 5 min: 10 10 10 34 30 (original game NPC: 10 10 10 5 0).

First army orders (game min:sec): 12:24 armyTarget sword=18; 12:24 armyTarget spear=8; 12:24 armyTarget bow=12; 16:52 attack 14 soldiers -> building 1; 20:10 attack 23 soldiers -> building 150; 20:36 attack 9 soldiers -> building 85; 21:02 attack 8 soldiers -> building 109; 21:24 attack 10 soldiers -> building 122; 21:54 attack 23 soldiers -> building 151; 22:14 march 4 soldiers -> 46,106; 22:34 attack 18 soldiers -> building 80; 22:56 attack 16 soldiers -> building 130.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 8 min, 2–23: settlers: No free settlers and every bed taken: build houses.
- 5 min, 11–23: orders: The order "sendUnit" was sent 39 times this minute: send it only when something changes.
- 6 min, 18–23: stall: forest: no free ground to plant in range inside your border 91% of the last 5 minutes.
- 1 min, 21: stall: woodcutter: no grown trees in range inside your border 54% of the last 5 minutes.
- 3 min, 21–25: stall: water hut: water pile full, waiting for carriers 100% of the last 5 minutes.
- 4 min, 22–25: stall: quarry: stone pile full, waiting for carriers 100% of the last 5 minutes.
- 4 min, 22–25: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 2 min, 24–25: army: Lost 9 soldiers in the last 5 minutes.
- 1 min, 25: weapons: 3 weapons lie unused: the barracks needs free settlers (build houses).
- 1 min, 25: settlers: No free settlers: build houses.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 15 | 26 | 20 | 19 | 0 | 12 | 0 | 0 | 0 | 15 | 7 | 13 | 0 | 0 | 5 | 0 | 1 | 1 | 67 | 1710 | 6770 |
| 25 | 42 | 118 | 134 | 34 | 4 | 36 | 16 | 29 | 8 | 33 | 11 | 12 | 0 | 0 | 2 | 0 | 1 | 0 | 94 | 3563 | 13192 |

At the end: buildings (built+sites) guard 9, wood 3, house 3, quarry 2, forest 2, saw 2, coalmine 2, hq 1, fisher 1, hunter 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, house2 1, barracks 1, waterhut 1.
People: soldier 21, worker 18, digger 2, builder 2, geologist 2, carrier 2, explorer 1; beds 50. Soldiers: sword 10, bow 6, spear 5.

Goods produced in the game: coal 121, fish 115, log 102, stone 81, plank 74, ironore 55, iron 52, meat 35, sword 19, bow 9, water 8, spear 6, pick 4, axe 2, saw 2, shovel 1, rod 1, hammer 1.
Goods consumed in the game: fish 104, coal 97, stone 83, plank 82, log 74, ironore 52, iron 45, meat 27, sword 17, bow 11, pick 7, spear 6, axe 3, hammer 3, shovel 2, saw 2, rod 1.
Goods lost in the game: fish 8, meat 8.
Goods captured in the game: stone 96, plank 83, meat 36, grain 29, fish 25, log 10, coal 9, water 8, flour 8, ironore 8, pig 6, iron 5, bread 4, axe 1, saw 1, pick 1, shovel 1, hammer 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (25 building-min): Idle 100%
- quarry (38 building-min): Cutting stone 35%, Stone pile full, waiting for carriers 34%, Bringing stone to the pile 17%, Stone pile full, nothing needs it right now 12%, Worker picking up a pickaxe 2%
- wood (59 building-min): Felling a tree 41%, No grown trees in range inside your border 25%, Bringing a log to the pile 18%, Log pile full, waiting for carriers 14%, Worker picking up an axe 2%
- forest (44 building-min): Planting a sapling 54%, No free ground to plant in range inside your border 44%, Worker picking up a shovel 1%, Idle 0%, Working 0%
- saw (38 building-min): Output pile full, waiting for carriers 39%, Sawing planks 25%, Output pile full, nothing needs it right now 23%, Stacking outside 5%, Waiting for logs 4%
- house (59 building-min): Idle 100%
- guard (93 building-min): Idle 100%, Soldiers on the way 0%
- fisher (22 building-min): Fishing 33%, Fish pile full, nothing needs it right now 31%, Fish pile full, waiting for carriers 27%, Bringing a fish to the pile 7%, Worker picking up a fishing rod 1%
- hunter (21 building-min): Meat pile full, nothing needs it right now 27%, Hunting 24%, Bringing meat to the pile 18%, No game in range inside your border 17%, Meat pile full, waiting for carriers 13%
- coalmine (33 building-min): Mining coal 46%, Deposit thinning: mining coal 27%, Bringing coal out 10%, Coal pile full, waiting for carriers 9%, Worker picking up a pickaxe 2%
- ironmine (19 building-min): Deposit thinning: mining iron ore 59%, Mining iron ore 28%, Bringing iron ore out 8%, Worker picking up a pickaxe 2%, Came back empty-handed 2%
- smelter (18 building-min): Waiting for iron ore 48%, Smelting iron 38%, Stacking outside 8%, Output pile full, nothing needs it right now 3%, Output pile full, waiting for carriers 2%
- smith (15 building-min): All tool targets met 75%, Waiting for coal 12%, Forging pickaxe 3%, Stacking outside 2%, Worker picking up a hammer 2%
- weaponsmith (12 building-min): Waiting for iron 42%, Forging sword 20%, Forging bow 10%, Stacking outside 8%, Forging spear 7%
- house2 (10 building-min): Idle 100%
- barracks (9 building-min): Waiting for weapons from the weaponsmith 57%, Weapons on the way 33%, Training soldiers 7%, Waiting for a free settler to train 3%
- waterhut (9 building-min): Water pile full, waiting for carriers 73%, Water pile full, nothing needs it right now 18%, Fetching water 5%, Bringing water to the pile 4%, Worker on the way 1%

Building sites, time per state (site-min): Waiting for a digger 11, Leveling the ground 8, Builders at work 7, Waiting for a builder 5, Waiting for materials 1.

Build order (placed at min:sec, finished at): quarry 0:02→0:35, wood 0:38→1:12, forest 0:50→1:28, saw 1:14→1:48, house 1:26→2:08, wood 1:28→3:04, guard 1:30→2:50, fisher 1:50→3:25, hunter 2:10→3:43, guard 2:54→4:24, forest 3:26→4:43, house 3:46→5:04, coalmine 4:24→5:33, guard 4:44→6:00, ironmine 5:18→6:29, guard 6:06→7:01, smelter 6:32→7:29, house 7:34→8:22, smith 8:22→9:31, saw 9:34→10:37, coalmine 9:50→11:08, quarry 10:32→11:38, wood 11:20→11:56, weaponsmith 12:22→13:17, house2 13:14→15:14, barracks 13:56→15:48, waterhut 14:18→16:10.

Demolished or burned: saw (burned) 20:41, fisher (burned) 21:04, hunter (burned) 21:34.

Orders given: sendUnit 366, place 27, attack 10, release 9, profession 3, armyTarget 3, march 3, toolKeep 1. None refused.

People changing jobs: new carrier 49, carrier -> soldier 33, carrier -> worker 17, new soldier 5, new worker 1, carrier -> explorer 1, carrier -> geologist 1.

People's orders (3676 in all, 3321 done): geologist geo 364, soldier attack guard 237, worker mine coalmine 192, worker rest forest 177, worker gather forest 175, worker rest coalmine 124, worker rest fisher 116, worker gather fisher 115, carrier haul fish fisher -> coalmine 107, worker rest wood 105, worker eat coalmine 104, worker gather wood 102, worker rest quarry 83, worker gather quarry 81. Not done (outcome: times): failed: nothing left to search there ×315; ended: the person is gone (became a soldier, defeated or removed) ×14.

Fights and contact: attacked enemy buildings 11 times (first 16:52); took hq 18:17, guard 20:15, saw 20:41, fisher 21:04, hunter 21:34, guard 22:13, guard 22:35, guard 23:23, guard 23:45; killed bow 3, sword 6; lost people sword 5, bow 7, spear 1; first saw player 1 at 7:00.

Your notes (1 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- 15:00 v256 builder frontier: posts 4, staffed 4, mines 2/1, barracks 1, soldiers 6, carriers 16, idle 0.


Script: 793 turns, 0.2 ms average, worst 4 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 27/4/2084/14/56 | 23/6/2967/10/40 |
| 30 | 47/6/3296/38/52 | 46/12/4979/26/54 |
| 45 | 47/6/3296/47/43 | 77/16/7545/49/101 |
| 60 | 47/6/3296/49/41 | 84/22/11819/67/93 |
| first | 8 9 12 14 16 - | 9 10 19 23 40 49 |

First built by scheduled (game minute; x2 = the second one; soldier = first trained): quarry 1, forest 2, saw 2, wood 2, guard 3, house 3, military 3, wood x2 3, fisher 4, forest x2 4, hunter 4, guard x2 5, house x2 5, military x2 5, coalmine 6, ironmine 6, smelter 8, smith 9, coalmine x2 10, quarry x2 10, saw x2 11, weaponsmith 12, barracks 14, house2 14, soldier 14, armorer 16, tower 16, tower x2 17, house2 x2 18, waterhut 18, farm 19, ironmine x2 19, mill 20, bakery 21, goldmine 21, butcher 22, hunter x2 22, goldmine x2 23, pigfarm 23, smelter x2 24, goldsmelter 25, vault 27, vault x2 29.

First built by original game NPC (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, house2 2, guard 3, guard x2 3, military 3, military x2 3, saw 3, wood x2 3, coalmine 4, quarry x2 4, fisher 5, hunter 7, waterhut 7, hunter x2 8, ironmine 8, house 9, smelter 9, smith 10, goldmine 15, coalmine x2 17, ironmine x2 17, weaponsmith 19, forest 20, barracks 23, house x2 23, saw x2 24, soldier 24, fisher x2 27, goldsmelter 30, vault 30, smelter x2 33, goldmine x2 35, barracks x2 36, farm 36, mill 37, bakery 38, farm x2 38, pigfarm 39, tower 40, butcher 42, tower x2 42, weaponsmith x2 42, house2 x2 43, armorer 44, forest x2 44, pigfarm x2 44, bakery x2 45, mill x2 46, castle 49.

Stock at minutes 15/30/45 (scheduled): pick 2/2/2, hammer 1/1/1, shovel 1/1/1, plank 17/18/18, stone 13/7/7.

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 6 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 0, fallen 0, gold 0 in stock + 36 in vaults.

At the end (what scheduled could see): enemy buildings known 8 (military 3); soldiers outside buildings 41 (bowmen 12); military sites unfinished 0; posts waiting for a swordsman 0; pioneers 0; without resource: quarry 2, ironmine 1.

Growth (what scheduled could see): last new building at minute 29; waiting: No stone in range inside your border x2; No free ground to plant in range inside your border x2; Waiting for iron ore x2; spare tools in stock: pick 2, hammer 1, shovel 1, axe 1, saw 1.

Soldiers every 5 min: 10 10 14 20 24 38 43 45 47 49 49 49 (original game NPC: 10 10 10 10 18 26 38 43 49 52 62 67).

First army orders (game min:sec): 10:44 armyTarget sword=18; 10:44 armyTarget spear=8; 10:44 armyTarget bow=12; 24:42 armyTarget banner=3.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 40 min, 2–60: settlers: No free settlers and every bed taken: build houses.
- 1 min, 7: army: Lost 4 soldiers in the last 5 minutes, and no barracks to train new ones.
- 12 min, 9–42: orders: The order "sendUnit" was sent 31 times this minute: send it only when something changes.
- 8 min, 13–21: stall: iron mine: deposit worn out 60% of the last 5 minutes.
- 4 min, 14–22: stall: weaponsmith: waiting for iron 93% of the last 5 minutes.
- 9 min, 14–36: stall: smelter: waiting for iron ore 95% of the last 5 minutes.
- 3 min, 15–17: stall: smith: waiting for coal 78% of the last 5 minutes.
- 9 min, 19–27: stall: barracks: waiting for weapons from the weaponsmith 65% of the last 5 minutes.
- 5 min, 21–26: carriers: weaponsmith: waiting for iron 72% of the last 10 minutes while 6 lie in stock: too few carriers. Build more houses.
- 1 min, 21: carriers: mill: waiting for grain 85% of the last 10 minutes while 6 lie in stock: too few carriers. Build more houses.
- 2 min, 22–23: stall: mill: waiting for grain 51% of the last 5 minutes.
- 2 min, 24–25: carriers: pig farm: waiting for grain 79% of the last 10 minutes while 12 lie in stock: too few carriers. Build more houses.
- 3 min, 24–58: stall: butcher: waiting for pigs 98% of the last 5 minutes.
- 32 min, 25–60: carriers: butcher: waiting for pigs 98% of the last 10 minutes while 8 lie in stock: too few carriers. Build more houses.
- 5 min, 26–30: stall: sawmill: output pile full, waiting for carriers 89% of the last 5 minutes.
- 2 min, 28–29: stall: gold mine: deposit worn out 83% of the last 5 minutes.
- 6 min, 30–38: carriers: goldsmelter: waiting for coal 73% of the last 10 minutes while 28 lie in stock: too few carriers. Build more houses.
- 27 min, 30–60: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 31 min, 30–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 1 min, 32: stall: goldsmelter: waiting for coal 100% of the last 5 minutes.
- 25 min, 33–60: carriers: smelter: waiting for iron ore 97% of the last 10 minutes while 23 lie in stock: too few carriers. Build more houses.
- 26 min, 35–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 26 min, 35–60: stall: quarry: no stone in range inside your border 100% of the last 5 minutes.
- 22 min, 38–60: carriers: bakery: waiting for flour 95% of the last 10 minutes while 8 lie in stock: too few carriers. Build more houses.
- 18 min, 40–57: carriers: weaponsmith: waiting for gold 77% of the last 10 minutes while 5 lie in stock: too few carriers. Build more houses.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 13 | 25 | 23 | 15 | 0 | 11 | 0 | 0 | 0 | 15 | 0 | 7 | 0 | 0 | 1 | 0 | 0 | 24 | 53 | 2084 | 6171 |
| 30 | 31 | 17 | 7 | 23 | 3 | 30 | 20 | 20 | 8 | 15 | 14 | 7 | 20 | 0 | 1 | 0 | 0 | 0 | 132 | 3296 | 8145 |
| 45 | 30 | 17 | 7 | 23 | 0 | 32 | 20 | 20 | 8 | 50 | 24 | 4 | 16 | 5 | 0 | 1 | 0 | 0 | 175 | 3296 | 8147 |
| 60 | 29 | 16 | 7 | 25 | 0 | 30 | 20 | 19 | 8 | 51 | 23 | 6 | 16 | 6 | 1 | 1 | 1 | 0 | 175 | 3296 | 8154 |

At the end: buildings (built+sites) guard 4, wood 3, house 3, coalmine 3, ironmine 3, quarry 2, forest 2, saw 2, hunter 2, smelter 2, house2 2, tower 2, goldmine 2, vault 2, hq 1, fisher 1, smith 1, weaponsmith 1, barracks 1, armorer 1, waterhut 1, farm 1, mill 1, bakery 1, pigfarm 1, butcher 1, goldsmelter 1.
People: soldier 41, worker 32, digger 2, builder 2, geologist 2, carrier 2, explorer 1; beds 70. Soldiers: sword 19, bow 12, spear 8, banner 2.

Goods produced in the game: fish 357, coal 198, log 183, plank 158, stone 144, meat 106, ironore 101, grain 83, iron 78, water 76, flour 39, bread 31, goldore 25, pig 25, sword 21, armor 12, bow 10, pick 9, spear 9, gold 9, hammer 4, axe 3, banner 3, saw 2, shovel 1, rod 1.
Goods consumed in the game: fish 338, plank 166, log 158, stone 155, coal 147, ironore 78, meat 76, iron 72, grain 64, water 56, flour 31, bread 31, sword 20, pig 17, pick 12, armor 12, bow 11, goldore 9, spear 8, hammer 6, axe 4, gold 3, shovel 2, saw 2, banner 2, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- quarry (110 building-min): No stone in range inside your border 66%, Cutting stone 22%, Bringing stone to the pile 10%, Stone pile full, nothing needs it right now 2%, Worker picking up a pickaxe 0%
- wood (167 building-min): Log pile full, waiting for carriers 63%, Felling a tree 26%, Bringing a log to the pile 11%, Worker picking up an axe 0%, Working 0%
- forest (115 building-min): No free ground to plant in range inside your border 68%, Planting a sapling 32%, Worker picking up a shovel 0%, Working 0%, Idle 0%
- saw (108 building-min): Output pile full, waiting for carriers 69%, Sawing planks 19%, Output pile full, nothing needs it right now 5%, Stacking outside 4%, Waiting for logs 2%
- house (165 building-min): Idle 100%
- guard (221 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 40%, Fishing 39%, Fish pile full, nothing needs it right now 12%, Bringing a fish to the pile 9%, Worker picking up a fishing rod 0%
- hunter (95 building-min): Meat pile full, waiting for carriers 75%, Hunting 9%, Meat pile full, nothing needs it right now 8%, Bringing meat to the pile 6%, Worker picking up a bow 1%
- coalmine (146 building-min): Deposit worn out: finding little coal 42%, Coal pile full, waiting for carriers 27%, Deposit thinning: mining coal 14%, Mining coal 8%, Bringing coal out 4%
- ironmine (135 building-min): Iron ore pile full, waiting for carriers 62%, Deposit worn out: finding little iron ore 25%, Deposit thinning: mining iron ore 5%, Mining iron ore 3%, Bringing iron ore out 2%
- smelter (89 building-min): Waiting for iron ore 85%, Smelting iron 11%, Stacking outside 2%, Worker picking up a hammer 1%, Fetching from the pile 0%
- smith (51 building-min): All tool targets met 83%, Waiting for coal 10%, Forging pickaxe 2%, Stacking outside 1%, Forging hammer 1%
- weaponsmith (48 building-min): Waiting for gold 47%, Waiting for iron 21%, All weapon targets met 9%, Waiting for coal 7%, Forging sword 6%
- house2 (89 building-min): Idle 100%
- barracks (47 building-min): Waiting for weapons from the weaponsmith 79%, Weapons on the way 11%, Waiting for a free settler to train 8%, Training soldiers 2%
- tower (88 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- armorer (44 building-min): All armor targets met 89%, Waiting for iron 6%, Making iron armor 3%, Stacking outside 1%, Worker picking up a hammer 1%
- waterhut (43 building-min): Water pile full, waiting for carriers 83%, Fetching water 6%, Water pile full, nothing needs it right now 5%, Bringing water to the pile 5%, Worker on the way 1%
- farm (41 building-min): Grain pile full, waiting for carriers 71%, Sowing a field 12%, Harvesting grain 9%, Bringing grain to the pile 5%, Worker picking up a scythe 2%
- mill (40 building-min): Output pile full, waiting for carriers 86%, Grinding flour 6%, Waiting for grain 4%, Stacking outside 3%, Worker on the way 0%
- bakery (40 building-min): Waiting for flour 79%, Baking bread 17%, Stacking outside 2%, Waiting for flour and water 1%, Worker on the way 0%
- goldmine (77 building-min): Gold ore pile full, waiting for carriers 77%, Deposit worn out: finding little gold ore 17%, Worker picking up a pickaxe 2%, Deposit thinning: mining gold ore 2%, Bringing gold ore out 1%
- pigfarm (38 building-min): Output pile full, waiting for carriers 76%, Raising a pig 15%, Waiting for grain 6%, Stacking outside 2%, Worker on the way 1%
- butcher (38 building-min): Waiting for pigs 94%, Butchering 3%, Worker picking up an axe 2%, Stacking outside 1%, Fetching from the pile 0%
- goldsmelter (35 building-min): Waiting for gold ore 65%, Waiting for coal 26%, Smelting gold 3%, Waiting for coal and gold ore 2%, Worker picking up a hammer 2%
- vault (66 building-min): Idle 100%

Building sites, time per state (site-min): Waiting for a digger 17, Builders at work 14, Leveling the ground 12, Waiting for a builder 12, Waiting for materials 3.

Build order (placed at min:sec, finished at): quarry 0:02→0:33, wood 0:36→1:04, forest 0:48→1:20, saw 1:06→1:40, house 1:18→2:04, wood 1:20→2:19, guard 1:30→2:50, fisher 1:42→3:09, hunter 2:12→3:35, forest 2:48→3:53, guard 3:10→4:26, house 3:36→4:50, coalmine 4:16→5:09, guard 4:34→5:29, ironmine 5:12→5:48, guard 5:44→6:25, smelter 6:16→7:25, house 7:26→8:10, smith 7:46→8:32, quarry 8:36→9:13, coalmine 8:50→9:35, wood 9:18→9:47, saw 9:50→10:47, weaponsmith 10:42→11:58, house2 11:14→13:00, barracks 11:58→13:30, tower 13:56→15:07, armorer 13:58→15:44, tower 15:18→16:34, waterhut 15:36→17:04, house2 15:48→17:53, ironmine 16:44→18:15, farm 16:46→18:54, coalmine 17:18→19:17, mill 17:30→19:37, bakery 17:42→20:04, goldmine 18:16→20:36, hunter 18:56→21:23, ironmine 19:22→20:51, pigfarm 19:44→22:07, … (46 in all).

Orders given: sendUnit 714, place 46, armyTarget 4, profession 3, vaultKeep 2, toolKeep 1, armorRepair 1, armyArmor 1. None refused.

People changing jobs: new carrier 69, carrier -> soldier 39, carrier -> worker 31, new worker 1, carrier -> explorer 1, carrier -> geologist 1.

People's orders (7879 in all, 7227 done): geologist geo 707, worker mine coalmine 494, worker rest fisher 358, worker gather fisher 357, worker eat coalmine 344, carrier haul fish fisher -> coalmine 316, worker rest forest 243, worker gather forest 241, worker rest coalmine 208, worker rest wood 186, worker gather wood 183, worker rest farm 167, worker gather farm 166, worker mine ironmine 162. Not done (outcome: times): failed: nothing left to search there ×607.

Failed path searches (who (task) why: times): geologist (geo 0) cut-off 5.

Fights and contact: first saw player 2 at 7:00.

Your notes (3 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×3 15:00–45:00 v256 builder frontier: posts 6, staffed 6, mines 3/3, barracks 1, soldiers 39, carriers 4, idle 0.


Script: 1800 turns, 0.2 ms average, worst 3 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 29/4/2195/10/40 | 33/7/3430/14/46 |
| 30 | 43/7/4475/43/47 | 50/16/6819/33/57 |
| 45 | 47/7/4722/33/42 | 53/17/6975/22/64 |
| 60 | 47/7/4722/35/40 | 53/17/6975/22/64 |
| first | 8 9 17 19 22 28 | 8 9 10 11 23 38 |

First built by scheduled (game minute; x2 = the second one; soldier = first trained): quarry 1, forest 2, saw 2, wood 2, guard 3, house 3, military 3, wood x2 3, fisher 4, guard x2 4, hunter 4, military x2 4, forest x2 5, house x2 5, coalmine 6, ironmine 7, smelter 8, smith 9, coalmine x2 10, ironmine x2 10, quarry x2 11, saw x2 12, fisher x2 13, smelter x2 14, house2 16, weaponsmith 17, house2 x2 18, barracks 19, soldier 19, waterhut 19, farm 20, mill 21, bakery 22, tower 22, butcher 23, pigfarm 23, armorer 24, tower x2 25, castle 28, goldmine 32, goldsmelter 34, vault 35, vault x2 36.

First built by original game NPC (game minute; x2 = the second one; soldier = first trained): quarry 1, wood 1, guard 2, house2 2, military 2, coalmine 3, quarry x2 3, saw 3, wood x2 3, fisher 4, guard x2 4, hunter 4, military x2 4, waterhut 7, hunter x2 8, ironmine 8, smelter 8, house 9, smith 9, weaponsmith 10, barracks 11, saw x2 12, house x2 14, soldier 14, farm 15, mill 15, bakery 16, tower 23, tower x2 24, farm x2 25, pigfarm 26, goldmine 29, weaponsmith x2 29, coalmine x2 30, barracks x2 31, butcher 38, castle 38, goldsmelter 39, vault 39, vault x2 40.

Stock at minutes 15/30/45 (scheduled): pick 2/2/2, hammer 1/1/1, shovel 1/1/1, plank 5/14/28, stone 11/16/47.

War and gold at the end: scheduled: took 1, lost 0, killed 24, fallen 15, gold 0 in stock + 3 in vaults. original game NPC: took 0, lost 1, killed 15, fallen 24, gold 0 in stock + 0 in vaults.

At the end (what scheduled could see): enemy buildings known 15 (military 5); soldiers outside buildings 24 (bowmen 6); military sites unfinished 0; posts waiting for a swordsman 0; pioneers 0; without resource: coalmine 1.

Growth (what scheduled could see): last new building at minute 36; waiting: No free ground to plant in range inside your border x2; Waiting for logs x2; Waiting for iron ore x2; spare tools in stock: pick 2, hammer 1, shovel 1, axe 1, saw 1.

Soldiers every 5 min: 10 10 10 28 36 43 46 32 33 35 35 35 (original game NPC: 10 10 14 27 30 33 39 20 22 22 22 22).

First army orders (game min:sec): 14:58 armyTarget sword=18; 14:58 armyTarget spear=8; 14:58 armyTarget bow=12; 33:18 armyTarget banner=3; 37:44 attack 28 soldiers -> building 1.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 22 min, 2–39: settlers: No free settlers and every bed taken: build houses.
- 1 min, 7: army: Lost 4 soldiers in the last 5 minutes, and no barracks to train new ones.
- 2 min, 11–12: stall: smith: waiting for coal 54% of the last 5 minutes.
- 5 min, 16–45: stall: smelter: waiting for iron ore 97% of the last 5 minutes.
- 4 min, 20–49: orders: The order "sendUnit" was sent 52 times this minute: send it only when something changes.
- 1 min, 22: carriers: mill: waiting for grain 76% of the last 10 minutes while 8 lie in stock: too few carriers. Build more houses.
- 1 min, 23: stall: mill: waiting for grain 64% of the last 5 minutes.
- 6 min, 23–28: stall: sawmill: waiting for logs 97% of the last 5 minutes.
- 2 min, 24–28: stall: bakery: waiting for flour 100% of the last 5 minutes.
- 34 min, 25–60: carriers: bakery: waiting for flour 98% of the last 10 minutes while 8 lie in stock: too few carriers. Build more houses.
- 34 min, 25–60: carriers: butcher: waiting for pigs 99% of the last 10 minutes while 8 lie in stock: too few carriers. Build more houses.
- 2 min, 26–27: stall: barracks: waiting for weapons from the weaponsmith 94% of the last 5 minutes.
- 22 min, 27–60: weapons: 11 weapons lie unused: the barracks needs free settlers (build houses).
- 2 min, 28–45: stall: butcher: waiting for pigs 100% of the last 5 minutes.
- 16 min, 29–53: carriers: sawmill: waiting for logs 71% of the last 10 minutes while 25 lie in stock: too few carriers. Build more houses.
- 12 min, 29–51: stall: mill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 7 min, 31–59: stall: armorer: output pile full, waiting for carriers 100% of the last 5 minutes.
- 26 min, 34–60: carriers: smelter: waiting for iron ore 99% of the last 10 minutes while 25 lie in stock: too few carriers. Build more houses.
- 6 min, 36–53: stall: barracks: waiting for iron armor for new bowmen 100% of the last 5 minutes.
- 3 min, 36–52: stall: water hut: water pile full, waiting for carriers 100% of the last 5 minutes.
- 16 min, 37–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 1 min, 37: carriers: goldsmelter: waiting for coal and gold ore 73% of the last 10 minutes while 50 lie in stock: too few carriers. Build more houses.
- 6 min, 38–60: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 8 min, 38–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 5 min, 38–56: stall: hunter: meat pile full, waiting for carriers 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 11 | 9 | 17 | 23 | 0 | 15 | 0 | 0 | 0 | 30 | 16 | 12 | 0 | 0 | 0 | 0 | 1 | 0 | 82 | 2195 | 6664 |
| 30 | 16 | 13 | 16 | 26 | 0 | 20 | 19 | 18 | 8 | 35 | 24 | 15 | 0 | 0 | 5 | 1 | 2 | 0 | 144 | 4475 | 9868 |
| 45 | 25 | 27 | 47 | 31 | 0 | 25 | 27 | 19 | 8 | 52 | 25 | 17 | 8 | 1 | 4 | 2 | 3 | 1 | 185 | 4722 | 11287 |
| 60 | 25 | 30 | 47 | 27 | 0 | 27 | 27 | 18 | 8 | 54 | 25 | 15 | 8 | 3 | 4 | 2 | 5 | 0 | 188 | 4722 | 11287 |

At the end: buildings (built+sites) guard 4, wood 3, house 3, coalmine 3, ironmine 3, quarry 2, forest 2, saw 2, fisher 2, smelter 2, house2 2, tower 2, vault 2, hq 1, hunter 1, smith 1, weaponsmith 1, barracks 1, waterhut 1, farm 1, mill 1, bakery 1, armorer 1, pigfarm 1, butcher 1, castle 1, goldmine 1, goldsmelter 1.
People: worker 31, soldier 24, digger 2, builder 2, geologist 2, carrier 2, explorer 1; beds 70. Soldiers: sword 14, bow 6, spear 4.

Goods produced in the game: fish 316, coal 210, log 173, stone 164, plank 153, ironore 112, meat 102, iron 88, grain 46, water 40, sword 28, pig 17, bow 11, spear 11, flour 11, armor 11, goldore 11, pick 8, hammer 4, axe 3, bread 3, gold 3, saw 2, rod 2, shovel 1.
Goods consumed in the game: fish 295, plank 166, stone 166, coal 161, log 153, ironore 88, iron 81, meat 75, grain 28, sword 24, water 20, pick 11, spear 9, pig 9, bow 8, hammer 6, axe 4, flour 3, armor 3, bread 3, goldore 3, shovel 2, saw 2, rod 2, scythe 1.
Goods lost in the game: stone 5, plank 4.
Goods captured in the game: stone 12, iron 8, water 7, coal 5, plank 4, ironore 1, log 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- quarry (109 building-min): Stone pile full, waiting for carriers 62%, Cutting stone 25%, Bringing stone to the pile 12%, Stone pile full, nothing needs it right now 0%, Worker picking up a pickaxe 0%
- wood (167 building-min): Log pile full, waiting for carriers 57%, Felling a tree 27%, Bringing a log to the pile 15%, Worker picking up an axe 0%, Working 0%
- forest (114 building-min): No free ground to plant in range inside your border 63%, Planting a sapling 37%, Worker picking up a shovel 1%
- saw (106 building-min): Waiting for logs 64%, Sawing planks 18%, Output pile full, waiting for carriers 13%, Stacking outside 4%, Fetching from the pile 0%
- house (165 building-min): Idle 100%
- guard (222 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- fisher (105 building-min): Fish pile full, waiting for carriers 67%, Fishing 20%, Fish pile full, nothing needs it right now 9%, Bringing a fish to the pile 4%, Worker picking up a fishing rod 0%
- hunter (56 building-min): Meat pile full, waiting for carriers 62%, Hunting 20%, Bringing meat to the pile 13%, Meat pile full, nothing needs it right now 5%, Worker picking up a bow 1%
- coalmine (154 building-min): Coal pile full, waiting for carriers 39%, Deposit worn out: finding little coal 18%, Deposit thinning: mining coal 17%, Mining coal 11%, Needs bread or fish or meat: mining stopped 7%
- ironmine (149 building-min): Iron ore pile full, waiting for carriers 66%, Deposit worn out: finding little iron ore 15%, Deposit thinning: mining iron ore 9%, Mining iron ore 5%, Bringing iron ore out 2%
- smelter (100 building-min): Waiting for iron ore 73%, Smelting iron 11%, Output pile full, waiting for carriers 9%, Output pile full, nothing needs it right now 4%, Stacking outside 2%
- smith (52 building-min): All tool targets met 88%, Waiting for coal 5%, Forging pickaxe 2%, Forging hammer 1%, Stacking outside 1%
- house2 (87 building-min): Idle 100%
- weaponsmith (44 building-min): Waiting for planks and gold 30%, Waiting for iron 18%, Output pile full, waiting for carriers 10%, All weapon targets met 10%, Waiting for gold 8%
- barracks (42 building-min): Waiting for iron armor for new bowmen 64%, Waiting for a free settler to train 13%, Waiting for weapons from the weaponsmith 12%, Weapons on the way 10%, Training soldiers 2%
- waterhut (41 building-min): Water pile full, waiting for carriers 84%, Fetching water 7%, Bringing water to the pile 6%, Water pile full, nothing needs it right now 3%, Worker on the way 1%
- farm (40 building-min): Grain pile full, waiting for carriers 78%, Sowing a field 10%, Harvesting grain 6%, Bringing grain to the pile 3%, Worker picking up a scythe 2%
- mill (40 building-min): Output pile full, waiting for carriers 92%, Waiting for grain 4%, Grinding flour 2%, Worker on the way 1%, Stacking outside 1%
- tower (75 building-min): Idle 99%, Soldiers on the way 1%, Waiting for a soldier 0%
- bakery (38 building-min): Waiting for flour 96%, Baking bread 2%, Waiting for flour and water 2%, Worker on the way 1%, Stacking outside 0%
- armorer (37 building-min): Output pile full, waiting for carriers 93%, Making iron armor 4%, Worker picking up a hammer 1%, Stacking outside 1%, Waiting for iron 0%
- pigfarm (38 building-min): Output pile full, waiting for carriers 84%, Raising a pig 10%, Waiting for water 3%, Stacking outside 1%, Waiting for grain and water 1%
- butcher (37 building-min): Waiting for pigs 96%, Butchering 2%, Worker picking up an axe 1%, Stacking outside 1%, Fetching from the pile 0%
- castle (32 building-min): Idle 98%, Soldiers on the way 2%
- goldmine (28 building-min): Gold ore pile full, waiting for carriers 76%, Deposit worn out: finding little gold ore 13%, Needs fish or bread: mining stopped 4%, Worker picking up a pickaxe 3%, Deposit thinning: mining gold ore 1%
- goldsmelter (27 building-min): Waiting for gold ore 83%, Waiting for coal and gold ore 11%, Worker picking up a hammer 2%, Smelting gold 1%, Idle 1%
- vault (49 building-min): Idle 100%

Building sites, time per state (site-min): Waiting for a digger 18, Builders at work 14, Waiting for a builder 14, Leveling the ground 12, Waiting for materials 4.

Build order (placed at min:sec, finished at): quarry 0:02→0:27, wood 0:30→1:05, forest 0:42→1:28, saw 1:08→1:51, house 1:20→2:10, wood 1:22→2:28, guard 1:30→2:50, fisher 1:52→3:09, hunter 2:10→3:36, guard 2:54→3:50, forest 3:16→4:12, house 3:46→4:33, guard 4:08→4:51, coalmine 4:42→5:20, guard 5:14→6:03, ironmine 5:46→6:29, smelter 6:32→7:15, smith 7:22→8:05, house 8:06→8:43, coalmine 8:12→9:25, wood 8:50→9:40, ironmine 9:18→9:58, quarry 9:48→10:22, coalmine 10:14→10:59, saw 10:56→11:46, fisher 11:24→12:11, smelter 12:12→13:06, ironmine 13:14→14:15, house2 14:20→15:14, weaponsmith 14:56→16:18, house2 15:48→17:31, barracks 16:10→18:15, waterhut 16:46→18:39, farm 17:34→19:38, mill 17:58→20:23, tower 18:28→21:16, bakery 18:48→21:49, armorer 19:16→23:28, pigfarm 19:52→22:28, butcher 20:34→22:53, … (46 in all).

Orders given: sendUnit 346, place 46, armyTarget 4, profession 3, vaultKeep 2, toolKeep 1, armyArmor 1, armorRepair 1, attack 1, release 1. None refused.

People changing jobs: new carrier 67, carrier -> soldier 40, carrier -> worker 29, new worker 2, carrier -> explorer 1, new geologist 1.

People's orders (7002 in all, 6705 done): worker mine coalmine 451, geologist geo 344, worker rest fisher 318, worker gather fisher 316, worker eat coalmine 290, carrier haul fish fisher -> coalmine 289, worker rest forest 249, worker gather forest 247, worker rest coalmine 230, soldier attack hq 198, worker rest wood 176, worker gather wood 173, worker mine ironmine 172, worker rest quarry 166. Not done (outcome: times): failed: nothing left to search there ×250; ended: the person is gone (became a soldier, defeated or removed) ×11.

Fights and contact: attacked enemy buildings 2 times (first 37:44); took hq 39:48; killed spear 5, sword 11, bow 8; lost people sword 6, bow 4, spear 5; first saw player 1 at 7:00.

Your notes (3 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×3 15:00–45:02 v256 builder frontier: posts 7, staffed 7, mines 3/3, barracks 1, soldiers 22, carriers 4, idle 0.


Script: 1843 turns, 0.2 ms average, worst 4 ms, 0 over 0.3 s, 0 errors. Orders refused: none.
