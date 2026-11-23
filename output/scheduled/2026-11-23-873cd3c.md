# Tournament: scheduled

Game version 251. Written for: scheduled 251.

- scheduled: hearthlands-ai-challenge, commit 873cd3c

Maps 20261030, 777, 4242, 31, each twice (sides swapped), up to 60 game minutes (1x). 114 s.

Switches: the table defaults (src/data/rules.js).

Each game ends with the script's own game log: what it may know (its own side, and what happened to it or what it saw). Times are game min:sec.

| Opponent | Won | Lost | Undecided |
|---|---|---|---|
| original game NPC | 0 | 0 | 8 |

War and gold over all games (scheduled / opponents): buildings taken 16 / 0, killed 24 / 27, gold at the end (stock + vaults) 0 / 370, stuck towns 8 / 2.

## Games

Each row: buildings / military / land tiles / soldiers / people at the minute shown. First: game minute of the first smelter, smith, weaponsmith, barracks, tower, castle (- = never).

### Map 31: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 13/2/1637/9/30 | 31/6/2429/10/50 |
| 30 | 13/2/1637/9/30 | 60/9/3900/21/69 |
| 45 | 13/2/1637/9/30 | 72/11/5180/21/99 |
| 60 | 13/2/1637/9/30 | 73/11/6252/21/119 |
| first | - - - - - - | 10 11 23 25 29 - |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 1, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 1, fallen 0, gold 0 in stock + 66 in vaults.

At the end (what scheduled could see): enemy buildings known 2 (military 1); soldiers outside buildings 5 (bowmen 0); military sites unfinished 0; posts waiting for a swordsman 0; pioneers 0; without resource: none.

Growth (what scheduled could see): last new building at minute 8; waiting: No free ground to plant in range inside your border x1; spare tools in stock: pick 2, hammer 3, shovel 1, axe 0, saw 0.

Soldiers every 5 min: 10 9 9 9 9 9 9 9 9 9 9 9 (original game NPC: 10 10 10 10 13 21 21 21 21 21 21 21).

First army orders (game min:sec): 0:00 armyReserve; 2:00 march 1 soldiers -> 120,120; 2:16 sendIn 1 soldiers -> building 85; 2:24 free 1 soldiers; 5:00 march 1 soldiers -> 190,120; 7:38 sendIn 1 soldiers -> building 147.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 1 min, 1: settlers: No free settlers and every bed taken: build houses.
- 57 min, 4–60: orders: The order "fighters" was sent 60 times this minute: send it only when something changes.
- 57 min, 4–60: orders: The order "archers" was sent 60 times this minute: send it only when something changes.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (57 mountain tiles).
- 45 min, 16–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 42 min, 19–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 24 | 11 | 24 | 6 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 18 | 56 | 1637 | 5180 |
| 30 | 24 | 11 | 24 | 6 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 18 | 56 | 1637 | 5180 |
| 45 | 24 | 11 | 24 | 6 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 18 | 56 | 1637 | 5180 |
| 60 | 24 | 11 | 24 | 6 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 18 | 56 | 1637 | 5180 |

At the end: buildings (built+sites) quarry 3, wood 2, house 2, guard 2, hq 1, saw 1, forest 1, hunter 1.
People: carrier 18, worker 8, soldier 5, digger 2, builder 2; beds 20. Soldiers: sword 5.

Goods produced in the game: stone 38, log 36, plank 16, meat 8.
Goods consumed in the game: stone 32, plank 29, log 16, pick 3, axe 2, saw 1, shovel 1, bow 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (116 building-min): Log pile full, nothing needs it right now 89%, Felling a tree 7%, Bringing a log to the pile 3%, Worker picking up an axe 0%, Working 0%
- quarry (173 building-min): Stone pile full, nothing needs it right now 96%, Cutting stone 3%, Bringing stone to the pile 1%, Worker picking up a pickaxe 0%, Working 0%
- saw (59 building-min): Output pile full, nothing needs it right now 94%, Sawing planks 3%, Waiting for logs 1%, Stacking outside 1%, Worker picking up a saw 0%
- forest (59 building-min): No free ground to plant in range inside your border 74%, Planting a sapling 26%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- house (116 building-min): Idle 100%
- hunter (58 building-min): Meat pile full, nothing needs it right now 96%, Hunting 2%, Bringing meat to the pile 1%, Worker picking up a bow 0%, Working 0%
- guard (110 building-min): Idle 100%, Soldiers on the way 0%, Waiting for bowmen: train them at the barracks 0%

Building sites, time per state (site-min): Builders at work 3, Leveling the ground 2, Waiting for a digger 1, Waiting for a builder 1, Waiting for materials 0.

Build order (placed at min:sec, finished at): wood 0:02→0:21, quarry 0:04→0:36, saw 0:22→0:56, forest 0:36→1:13, house 0:56→1:33, hunter 1:14→1:54, guard 1:34→2:14, house 1:54→2:35, quarry 2:16→2:57, wood 2:36→3:13, quarry 2:58→3:36, guard 7:00→7:38.

Orders given: fighters 3303, archers 3303, place 12, priority 10, march 2, sendIn 2, armyReserve 1, free 1. None refused.

People changing jobs: new carrier 20, carrier -> worker 8.

People's orders (595 in all, 582 done): worker rest forest 108, worker gather forest 107, worker rest quarry 41, worker rest wood 38, worker gather quarry 38, worker gather wood 36, carrier haul log wood -> saw 20, worker rest saw 17, worker toCraft saw 16, worker craft saw 16, worker rest hunter 11, worker gather hunter 10, carrier haul plank pile -> quarry 6, digger dig quarry 6. None failed.

Fights and contact: lost people bow 1; first saw player 2 at 6:00.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 v251 builder: houses 2, quarry 3, forest 1, guards 2/2, mines 0/0, carriers 18 idle 18, soldiers 9, ore C/I 0/0.


Script: 1802 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 31: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 14/2/1609/9/30 | 29/5/2362/10/50 |
| 30 | 14/2/1609/9/30 | 55/9/3836/24/66 |
| 45 | 14/2/1609/9/30 | 77/16/6801/37/103 |
| 60 | 14/2/1609/9/30 | 89/22/12020/52/108 |
| first | - - - - - - | 11 12 21 22 42 41 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 1, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 1, fallen 0, gold 0 in stock + 56 in vaults.

At the end (what scheduled could see): enemy buildings known 6 (military 1); soldiers outside buildings 5 (bowmen 0); military sites unfinished 0; posts waiting for a swordsman 0; pioneers 0; without resource: none.

Growth (what scheduled could see): last new building at minute 9; waiting: No free ground to plant in range inside your border x1; spare tools in stock: pick 2, hammer 3, shovel 1, axe 0, saw 0.

Soldiers every 5 min: 10 9 9 9 9 9 9 9 9 9 9 9 (original game NPC: 10 10 10 10 10 24 25 27 37 41 49 52).

First army orders (game min:sec): 0:00 armyReserve; 2:00 march 1 soldiers -> 120,120; 2:46 sendIn 1 soldiers -> building 108; 2:48 sendIn 1 soldiers -> building 108; 3:24 free 1 soldiers; 5:00 march 1 soldiers -> 50,120; 8:02 sendIn 1 soldiers -> building 148.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 1 min, 2: settlers: No free settlers and every bed taken: build houses.
- 57 min, 4–60: orders: The order "fighters" was sent 60 times this minute: send it only when something changes.
- 57 min, 4–60: orders: The order "archers" was sent 60 times this minute: send it only when something changes.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (3 mountain tiles).
- 44 min, 17–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 43 min, 18–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 24 | 9 | 24 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 17 | 64 | 1609 | 5113 |
| 30 | 24 | 9 | 24 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 17 | 64 | 1609 | 5113 |
| 45 | 24 | 9 | 24 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 17 | 64 | 1609 | 5113 |
| 60 | 24 | 9 | 24 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 17 | 64 | 1609 | 5113 |

At the end: buildings (built+sites) quarry 3, wood 2, house 2, guard 2, hq 1, saw 1, forest 1, fisher 1, hunter 1.
People: carrier 17, worker 9, soldier 5, digger 2, builder 2; beds 20. Soldiers: sword 5.

Goods produced in the game: stone 40, log 37, plank 17, fish 8, meat 8.
Goods consumed in the game: stone 34, plank 32, log 17, pick 3, axe 2, saw 1, shovel 1, rod 1, bow 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (115 building-min): Log pile full, nothing needs it right now 89%, Felling a tree 7%, Bringing a log to the pile 3%, Worker picking up an axe 0%, Working 0%
- quarry (171 building-min): Stone pile full, nothing needs it right now 95%, Cutting stone 3%, Bringing stone to the pile 2%, Worker picking up a pickaxe 0%, Working 0%
- saw (59 building-min): Output pile full, nothing needs it right now 94%, Sawing planks 4%, Waiting for logs 1%, Stacking outside 1%, Worker picking up a saw 0%
- forest (59 building-min): No free ground to plant in range inside your border 76%, Planting a sapling 23%, Worker picking up a shovel 0%, Working 0%
- house (114 building-min): Idle 100%
- fisher (58 building-min): Fish pile full, nothing needs it right now 98%, Fishing 1%, Worker picking up a fishing rod 0%, Waiting for a free settler 0%, Bringing a fish to the pile 0%
- guard (109 building-min): Idle 100%, Waiting for bowmen: train them at the barracks 0%, Soldiers on the way 0%, Waiting for a soldier 0%
- hunter (57 building-min): Meat pile full, nothing needs it right now 95%, Hunting 3%, Bringing meat to the pile 2%, Worker picking up a bow 0%

Building sites, time per state (site-min): Builders at work 3, Leveling the ground 3, Waiting for a builder 2, Waiting for a digger 2, Waiting for materials 1.

Build order (placed at min:sec, finished at): wood 0:02→0:33, quarry 0:06→0:51, saw 0:34→1:13, forest 0:52→1:28, house 1:14→2:18, fisher 1:28→2:07, guard 2:08→2:46, hunter 2:18→3:08, house 2:46→3:31, quarry 3:08→3:50, quarry 3:32→4:12, wood 3:52→4:47, guard 7:00→8:01.

Orders given: fighters 3276, archers 3276, place 13, priority 11, sendIn 3, march 2, armyReserve 1, free 1. None refused.

People changing jobs: new carrier 20, carrier -> worker 9.

People's orders (587 in all, 573 done): worker rest forest 84, worker gather forest 83, worker rest quarry 43, worker gather quarry 40, worker rest wood 39, worker gather wood 37, carrier haul log wood -> saw 21, worker rest saw 18, worker toCraft saw 17, worker craft saw 17, worker rest hunter 11, worker gather hunter 10, worker rest fisher 9, worker gather fisher 8. None failed.

Fights and contact: lost people bow 1; first saw player 1 at 6:00.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 v251 builder: houses 2, quarry 3, forest 1, guards 2/2, mines 0/0, carriers 17 idle 17, soldiers 9, ore C/I 0/0.


Script: 1803 turns, 0.0 ms average, worst 2 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 23/2/1330/16/30 | 30/5/2463/10/50 |
| 30 | 34/4/1962/23/31 | 42/3/2876/3/74 |
| 45 | 35/6/2250/22/29 | 40/1/3385/0/73 |
| 60 | 35/6/2250/22/29 | 40/1/4211/0/73 |
| first | 6 7 8 9 - - | 9 10 21 22 - - |

War and gold at the end: scheduled: took 16, lost 0, killed 17, fallen 19, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 16, killed 19, fallen 17, gold 0 in stock + 2 in vaults, STUCK (town stopped growing).

At the end (what scheduled could see): enemy buildings known 40 (military 2); soldiers outside buildings 9 (bowmen 1); military sites unfinished 0; posts waiting for a swordsman 0; pioneers 0; without resource: none.

Growth (what scheduled could see): last new building at minute 32; waiting: No free ground to plant in range inside your border x2; Needs bread or fish or meat x1; Waiting for coal x1; spare tools in stock: pick 6, hammer 2, shovel 1, axe 5, saw 1.

Soldiers every 5 min: 10 10 16 19 20 23 22 22 22 22 22 22 (original game NPC: 10 10 10 5 4 3 0 0 0 0 0 0).

First army orders (game min:sec): 0:00 armyReserve; 2:00 march 1 soldiers -> 120,120; 2:38 sendIn 1 soldiers -> building 98; 2:40 sendIn 1 soldiers -> building 98; 2:42 sendIn 1 soldiers -> building 98; 2:44 sendIn 1 soldiers -> building 98; 3:06 free 1 soldiers; 5:00 march 1 soldiers -> 190,120; 8:24 armyTarget sword=20; 8:24 armyTarget spear=12; 8:24 armyTarget bow=16; 9:56 armyTarget sword=10.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 2–11: settlers: No free settlers and every bed taken: build houses.
- 57 min, 4–60: orders: The order "fighters" was sent 180 times this minute: send it only when something changes.
- 57 min, 4–60: orders: The order "archers" was sent 180 times this minute: send it only when something changes.
- 11 min, 9–19: stall: smith: waiting for coal 56% of the last 5 minutes.
- 13 min, 10–36: stall: weaponsmith: waiting for coal 90% of the last 5 minutes.
- 37 min, 11–60: carriers: weaponsmith: waiting for coal 94% of the last 10 minutes while 12 lie in stock: too few carriers. Build more houses.
- 18 min, 11–34: stall: barracks: waiting for weapons from the weaponsmith 99% of the last 5 minutes.
- 22 min, 14–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 1 min, 15: stall: hunter: no game in range inside your border 71% of the last 5 minutes.
- 41 min, 20–60: orders: The order "priority" was sent 150 times this minute: send it only when something changes.
- 12 min, 24–36: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 5 min, 24–35: army: Lost 4 soldiers in the last 5 minutes.
- 2 min, 27–28: stall: iron mine: deposit worn out 94% of the last 5 minutes.
- 32 min, 28–60: stall: sawmill: output pile full, waiting for carriers 100% of the last 5 minutes.
- 30 min, 29–60: stall: quarry: stone pile full, waiting for carriers 100% of the last 5 minutes.
- 25 min, 29–60: stall: woodcutter: log pile full, waiting for carriers 100% of the last 5 minutes.
- 25 min, 35–60: settlers: No free settlers: build houses.
- 1 min, 36: stall: coal mine: deposit worn out 94% of the last 5 minutes.
- 20 min, 41–60: carriers: bakery: waiting for flour 74% of the last 10 minutes while 8 lie in stock: too few carriers. Build more houses.
- 18 min, 43–60: weapons: 13 weapons lie unused: the barracks needs free settlers (build houses).

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 27 | 19 | 26 | 15 | 0 | 6 | 0 | 0 | 0 | 0 | 3 | 18 | 0 | 0 | 0 | 1 | 0 | 5 | 71 | 1330 | 5862 |
| 30 | 31 | 27 | 29 | 24 | 14 | 12 | 13 | 11 | 9 | 10 | 11 | 21 | 0 | 0 | 0 | 0 | 0 | 0 | 119 | 1962 | 12738 |
| 45 | 31 | 41 | 44 | 23 | 6 | 18 | 14 | 9 | 9 | 14 | 16 | 20 | 0 | 0 | 3 | 0 | 4 | 0 | 128 | 2250 | 13416 |
| 60 | 31 | 41 | 44 | 23 | 7 | 18 | 14 | 10 | 8 | 12 | 16 | 21 | 0 | 0 | 5 | 2 | 6 | 0 | 132 | 2250 | 13416 |

At the end: buildings (built+sites) guard 6, house 5, quarry 3, wood 2, saw 2, forest 2, ironmine 2, smelter 2, hq 1, fisher 1, hunter 1, coalmine 1, smith 1, weaponsmith 1, barracks 1, waterhut 1, farm 1, mill 1, bakery 1.
People: worker 21, soldier 9, digger 2, builder 2, geologist 2, carrier 2; beds 50. Soldiers: sword 5, bow 1, spear 3.

Goods produced in the game: coal 132, log 110, stone 98, ironore 89, meat 88, fish 84, plank 83, iron 74, grain 63, water 59, flour 53, bread 45, sword 24, bow 13, spear 6, pick 4, saw 2, axe 1, hammer 1, shovel 1, rod 1.
Goods consumed in the game: coal 127, stone 92, plank 91, log 83, fish 75, ironore 74, meat 73, iron 53, grain 53, water 45, flour 45, bread 44, sword 19, bow 9, pick 8, spear 4, hammer 3, axe 2, saw 2, shovel 2, rod 1, scythe 1.
Goods lost in the game: coal 11, fish 8, stone 3, bread 3, plank 2, log 1.
Goods captured in the game: coal 18, fish 16, stone 13, plank 12, bread 9, meat 3, log 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (115 building-min): Log pile full, waiting for carriers 64%, Felling a tree 19%, Log pile full, nothing needs it right now 9%, Bringing a log to the pile 6%, No grown trees in range inside your border 1%
- quarry (171 building-min): Stone pile full, waiting for carriers 66%, Stone pile full, nothing needs it right now 17%, Cutting stone 10%, Bringing stone to the pile 5%, Needs a worker with a pickaxe 2%
- saw (111 building-min): Output pile full, waiting for carriers 67%, Output pile full, nothing needs it right now 18%, Sawing planks 9%, Stacking outside 2%, Needs a worker with a saw 2%
- forest (107 building-min): No free ground to plant in range inside your border 73%, Planting a sapling 27%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- house (250 building-min): Idle 100%
- fisher (58 building-min): Fish pile full, waiting for carriers 65%, Fish pile full, nothing needs it right now 23%, Fishing 9%, Bringing a fish to the pile 2%, Worker picking up a fishing rod 0%
- guard (241 building-min): Idle 100%, Soldiers on the way 0%, Free soldiers are too far away: bring one onto your land or near this building 0%, Waiting for bowmen: train them at the barracks 0%, Waiting for a swordsman: train one at the barracks 0%
- hunter (57 building-min): Meat pile full, waiting for carriers 39%, Hunting 30%, Bringing meat to the pile 22%, No game in range inside your border 6%, Meat pile full, nothing needs it right now 2%
- coalmine (56 building-min): Deposit worn out: finding little coal 41%, Deposit thinning: mining coal 24%, Mining coal 14%, Needs bread or fish or meat: mining stopped 11%, Bringing coal out 7%
- ironmine (97 building-min): Iron ore pile full, waiting for carriers 48%, Deposit worn out: finding little iron ore 28%, Deposit thinning: mining iron ore 12%, Mining iron ore 5%, Bringing iron ore out 3%
- smelter (94 building-min): Waiting for iron ore 49%, Output pile full, waiting for carriers 26%, Smelting iron 10%, Output pile full, nothing needs it right now 6%, Waiting for coal 5%
- smith (53 building-min): All tool targets met 81%, Waiting for coal 16%, Forging pickaxe 1%, Worker picking up a hammer 1%, Stacking outside 1%
- weaponsmith (53 building-min): Waiting for coal 87%, Forging sword 6%, Forging bow 3%, Stacking outside 2%, Forging spear 1%
- barracks (52 building-min): Waiting for a free settler to train 49%, Waiting for weapons from the weaponsmith 46%, Weapons on the way 4%, Training soldiers 1%
- waterhut (44 building-min): Water pile full, waiting for carriers 73%, Water pile full, nothing needs it right now 15%, Fetching water 7%, Bringing water to the pile 6%, Worker on the way 0%
- farm (43 building-min): Grain pile full, waiting for carriers 70%, Sowing a field 10%, Grain pile full, nothing needs it right now 9%, Harvesting grain 7%, Bringing grain to the pile 3%
- mill (40 building-min): Output pile full, waiting for carriers 75%, Waiting for grain 7%, Grinding flour 7%, Idle 5%, Stacking outside 4%
- bakery (37 building-min): Waiting for flour 61%, Baking bread 27%, Output pile full, waiting for carriers 5%, Stacking outside 3%, Idle 1%

Building sites, time per state (site-min): Builders at work 8, Leveling the ground 7, Waiting for a builder 7, Waiting for a digger 4, No way to the site for diggers 2, build 1, No way to the site for builders 0, Waiting for materials 0.

Build order (placed at min:sec, finished at): wood 0:02→0:30, quarry 0:04→0:49, saw 0:32→1:09, forest 0:50→1:27, house 1:10→1:48, fisher 1:28→2:14, guard 1:48→2:36, house 2:14→2:58, hunter 2:38→3:16, quarry 2:58→3:37, coalmine 3:18→3:57, ironmine 3:38→4:11, quarry 3:58→4:30, wood 4:12→5:00, smelter 4:46→5:36, smith 5:46→6:34, weaponsmith 6:34→7:30, saw 7:10→7:55, barracks 7:38→8:23, forest 10:52→11:34, house 10:54→12:03, guard 14:00→14:57, house 14:16→15:21, waterhut 15:02→16:00, farm 16:02→17:15, ironmine 16:04→19:02, house 16:24→17:53, mill 17:26→20:29, bakery 20:38→22:42.

Demolished or burned: coalmine (burned) 20:55, guard (burned) 21:10, coalmine (burned) 21:17, coalmine (burned) 26:53, coalmine (burned) 27:27, ironmine (burned) 27:40, wood (burned) 28:34, wood (burned) 28:46, wood (burned) 29:23, smelter (burned) 29:46, wood (burned) 30:05.

Orders given: fighters 7240, archers 7240, priority 5399, free 34, place 29, attack 22, armyTarget 18, sendIn 9, sendUnit 6, march 3, weaponKeep 3, profession 2, armyReserve 1, toolKeep 1. None refused.

People changing jobs: new carrier 50, carrier -> soldier 31, carrier -> worker 21, new soldier 13, carrier -> geologist 2.

People's orders (4601 in all, 4529 done): worker mine coalmine 227, worker rest forest 196, worker gather forest 194, worker mine ironmine 150, worker rest coalmine 142, worker rest farm 129, worker gather farm 128, worker eat coalmine 119, worker rest wood 112, worker gather wood 110, worker rest quarry 101, worker gather quarry 98, carrier haul log wood -> saw 94, worker rest hunter 94. Not done (outcome: times): failed: no way (digger (dig 0) cut-off) ×16; failed: no way (builder (build 0) own-land-split) ×5; ended: the person is gone (became a soldier, defeated or removed) ×4.

Failed path searches (who (task) why: times): digger (dig 0) cut-off 16, builder (build 0) own-land-split 5.

Fights and contact: attacked enemy buildings 19 times (first 12:34); took guard 18:13, guard 20:13, smelter 20:44, coalmine 20:55, coalmine 21:17, guard 21:26, coalmine 26:53, coalmine 27:27, ironmine 27:40, wood 28:34, wood 28:46, wood 29:09, wood 29:23, smelter 29:46, guard 30:07, guard 31:13; killed bow 5, sword 12; lost people bow 3, sword 15, spear 1; first saw player 2 at 6:00.

Warnings: econ-balance 4, path-fail 1. Last: 31:31 econ-balance: plank of owner 1: 35 counted, 33 expected from the bookkeeping | 42:31 econ-balance: plank of owner 1: 41 counted, 39 expected from the bookkeeping | 53:31 econ-balance: plank of owner 1: 41 counted, 39 expected from the bookkeeping

Your notes (19 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 v251 builder: houses 5, quarry 3, forest 2, guards 6/6, mines 1/2, carriers 2 idle 0, soldiers 21, ore C/I 1/1.
- 13:38 v251 siege break: losses 2, retreating to rebuild the field group.
- ×2 20:30–29:44 v251 raid: smelter with 8 field soldiers.
- ×4 20:48–27:24 v251 raid: coalmine with 8 field soldiers.
- 27:36 v251 raid: ironmine with 6 field soldiers.
- ×5 27:44–29:14 v251 raid: wood with 6 field soldiers.


Script: 1888 turns, 0.1 ms average, worst 2 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 15/2/1627/9/30 | 32/6/2667/10/50 |
| 30 | 15/2/1627/9/30 | 63/11/5195/27/93 |
| 45 | 15/2/1627/9/30 | 77/18/10435/40/100 |
| 60 | 15/2/1627/9/30 | 83/25/15777/59/81 |
| first | - - - - - - | 9 10 19 20 22 31 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 1, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 1, fallen 0, gold 0 in stock + 34 in vaults.

At the end (what scheduled could see): enemy buildings known 2 (military 0); soldiers outside buildings 5 (bowmen 0); military sites unfinished 0; posts waiting for a swordsman 0; pioneers 0; without resource: none.

Growth (what scheduled could see): last new building at minute 9; waiting: No free ground to plant in range inside your border x1; spare tools in stock: pick 0, hammer 3, shovel 1, axe 0, saw 0.

Soldiers every 5 min: 10 9 9 9 9 9 9 9 9 9 9 9 (original game NPC: 10 10 10 11 20 27 35 39 40 49 55 59).

First army orders (game min:sec): 0:00 armyReserve; 2:00 march 1 soldiers -> 120,120; 2:38 sendIn 1 soldiers -> building 101; 2:40 sendIn 1 soldiers -> building 101; 2:42 sendIn 1 soldiers -> building 101; 2:44 sendIn 1 soldiers -> building 101; 3:10 free 1 soldiers; 5:00 march 1 soldiers -> 50,120; 7:50 sendIn 1 soldiers -> building 148.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 57 min, 4–60: orders: The order "fighters" was sent 60 times this minute: send it only when something changes.
- 57 min, 4–60: orders: The order "archers" was sent 60 times this minute: send it only when something changes.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 45 min, 16–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.
- 33 min, 28–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 24 | 8 | 24 | 14 | 0 | 12 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 1 | 15 | 72 | 1627 | 6782 |
| 30 | 24 | 8 | 24 | 14 | 0 | 12 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 1 | 15 | 72 | 1627 | 6782 |
| 45 | 24 | 8 | 24 | 14 | 0 | 12 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 1 | 15 | 72 | 1627 | 6782 |
| 60 | 24 | 8 | 24 | 14 | 0 | 12 | 0 | 0 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 1 | 15 | 72 | 1627 | 6782 |

At the end: buildings (built+sites) quarry 3, wood 2, house 2, guard 2, hq 1, saw 1, forest 1, fisher 1, hunter 1, ironmine 1.
People: carrier 15, worker 10, soldier 5, digger 2, builder 2, geologist 1; beds 20. Soldiers: sword 5.

Goods produced in the game: stone 41, log 40, plank 20, meat 14, fish 8, ironore 8.
Goods consumed in the game: plank 36, stone 35, log 20, pick 5, axe 2, meat 2, saw 1, shovel 1, rod 1, bow 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (115 building-min): Log pile full, nothing needs it right now 89%, Felling a tree 8%, Bringing a log to the pile 3%, Worker picking up an axe 0%, Working 0%
- quarry (172 building-min): Stone pile full, nothing needs it right now 95%, Cutting stone 3%, Bringing stone to the pile 1%, Worker picking up a pickaxe 0%, Working 0%
- saw (59 building-min): Output pile full, nothing needs it right now 93%, Sawing planks 4%, Waiting for logs 1%, Stacking outside 1%, Worker picking up a saw 0%
- forest (59 building-min): No free ground to plant in range inside your border 60%, Planting a sapling 39%, Worker picking up a shovel 0%, Idle 0%, Working 0%
- house (114 building-min): Idle 100%
- fisher (58 building-min): Fish pile full, nothing needs it right now 99%, Fishing 1%, Worker picking up a fishing rod 0%, Bringing a fish to the pile 0%
- guard (110 building-min): Idle 100%, Soldiers on the way 0%, Waiting for bowmen: train them at the barracks 0%
- hunter (57 building-min): Meat pile full, nothing needs it right now 94%, Hunting 3%, Bringing meat to the pile 2%, Worker picking up a bow 0%
- ironmine (51 building-min): Iron ore pile full, nothing needs it right now 97%, Mining iron ore 2%, Worker picking up a pickaxe 1%, Bringing iron ore out 0%, Came back empty-handed 0%

Building sites, time per state (site-min): Builders at work 3, Leveling the ground 3, Waiting for a builder 2, Waiting for a digger 2.

Build order (placed at min:sec, finished at): wood 0:02→0:30, quarry 0:06→0:49, saw 0:30→1:11, forest 0:50→1:24, house 1:12→1:47, fisher 1:24→2:06, guard 1:48→2:38, hunter 2:06→2:59, quarry 2:38→3:26, quarry 3:00→3:47, wood 3:26→4:07, house 3:48→4:39, guard 7:00→7:50, ironmine 8:26→8:58.

Orders given: fighters 3286, archers 3286, place 14, priority 12, sendIn 5, march 2, armyReserve 1, free 1, profession 1, sendUnit 1. None refused.

People changing jobs: new carrier 20, carrier -> worker 10, carrier -> geologist 1.

People's orders (703 in all, 688 done): worker rest forest 110, worker gather forest 109, worker rest quarry 44, worker rest wood 42, worker gather quarry 41, worker gather wood 40, carrier haul log wood -> saw 24, worker rest saw 21, worker toCraft saw 20, worker craft saw 20, worker rest hunter 15, worker gather hunter 14, worker rest fisher 9, worker rest ironmine 9. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×4.

Fights and contact: lost people bow 1; first saw player 1 at 6:00.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 v251 builder: houses 2, quarry 3, forest 1, guards 2/2, mines 0/1, carriers 15 idle 15, soldiers 9, ore C/I 0/1.


Script: 1802 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 14/2/1373/9/30 | 31/6/2563/10/50 |
| 30 | 14/2/1373/9/30 | 59/10/4512/25/75 |
| 45 | 14/2/1373/9/30 | 74/18/9521/53/97 |
| 60 | 14/2/1373/9/30 | 82/24/13131/61/89 |
| first | - - - - - - | 9 10 18 20 29 38 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 1, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 1, fallen 0, gold 3 in stock + 69 in vaults.

At the end (what scheduled could see): enemy buildings known 1 (military 1); soldiers outside buildings 5 (bowmen 0); military sites unfinished 0; posts waiting for a swordsman 0; pioneers 0; without resource: none.

Growth (what scheduled could see): last new building at minute 8; waiting: No free ground to plant in range inside your border x1; spare tools in stock: pick 2, hammer 3, shovel 1, axe 0, saw 0.

Soldiers every 5 min: 10 9 9 9 9 9 9 9 9 9 9 9 (original game NPC: 10 10 10 10 16 25 39 52 53 53 59 61).

First army orders (game min:sec): 0:00 armyReserve; 2:00 march 1 soldiers -> 120,120; 2:30 sendIn 1 soldiers -> building 84; 2:32 sendIn 1 soldiers -> building 84; 2:34 sendIn 1 soldiers -> building 84; 2:40 free 1 soldiers; 5:00 march 1 soldiers -> 190,120; 7:44 sendIn 1 soldiers -> building 146.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 1–2: settlers: No free settlers and every bed taken: build houses.
- 57 min, 4–60: orders: The order "fighters" was sent 60 times this minute: send it only when something changes.
- 57 min, 4–60: orders: The order "archers" was sent 60 times this minute: send it only when something changes.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (1 mountain tiles).
- 45 min, 16–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 41 min, 20–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 24 | 8 | 24 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 17 | 64 | 1373 | 5142 |
| 30 | 24 | 8 | 24 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 17 | 64 | 1373 | 5142 |
| 45 | 24 | 8 | 24 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 17 | 64 | 1373 | 5142 |
| 60 | 24 | 8 | 24 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 17 | 64 | 1373 | 5142 |

At the end: buildings (built+sites) quarry 3, wood 2, house 2, guard 2, hq 1, saw 1, forest 1, hunter 1, fisher 1.
People: carrier 17, worker 9, soldier 5, digger 2, builder 2; beds 20. Soldiers: sword 5.

Goods produced in the game: stone 40, log 36, plank 16, fish 8, meat 8.
Goods consumed in the game: stone 34, plank 32, log 16, pick 3, axe 2, saw 1, shovel 1, bow 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (116 building-min): Log pile full, nothing needs it right now 88%, Felling a tree 8%, Bringing a log to the pile 4%, Worker picking up an axe 0%, Working 0%
- quarry (170 building-min): Stone pile full, nothing needs it right now 93%, Cutting stone 4%, Bringing stone to the pile 2%, Worker picking up a pickaxe 1%, Working 0%
- saw (59 building-min): Output pile full, nothing needs it right now 95%, Sawing planks 3%, Stacking outside 1%, Worker picking up a saw 0%, Working 0%
- forest (58 building-min): No free ground to plant in range inside your border 74%, Planting a sapling 26%, Worker picking up a shovel 0%, Working 0%
- house (115 building-min): Idle 100%
- guard (110 building-min): Idle 100%, Waiting for bowmen: train them at the barracks 0%, Soldiers on the way 0%
- hunter (57 building-min): Meat pile full, nothing needs it right now 97%, Hunting 1%, Bringing meat to the pile 1%, Worker picking up a bow 0%
- fisher (56 building-min): Fish pile full, nothing needs it right now 98%, Fishing 1%, Worker picking up a fishing rod 1%, Bringing a fish to the pile 0%, Idle 0%

Building sites, time per state (site-min): Builders at work 3, Leveling the ground 3, Waiting for a builder 2, Waiting for a digger 2, Waiting for materials 0.

Build order (placed at min:sec, finished at): wood 0:02→0:24, quarry 0:04→0:47, saw 0:26→1:13, forest 0:48→1:33, house 1:14→1:56, guard 1:34→2:30, hunter 1:58→2:48, house 2:30→3:13, fisher 2:50→3:32, wood 3:14→3:48, quarry 3:42→4:16, quarry 4:46→5:17, guard 7:00→7:43.

Orders given: fighters 3293, archers 3293, place 13, priority 11, sendIn 4, march 2, armyReserve 1, free 1. None refused.

People changing jobs: new carrier 20, carrier -> worker 9.

People's orders (577 in all, 563 done): worker rest forest 82, worker gather forest 81, worker rest quarry 43, worker gather quarry 40, worker rest wood 38, worker gather wood 36, carrier haul log wood -> saw 20, worker rest saw 17, worker toCraft saw 16, worker craft saw 16, builder build quarry 12, worker rest hunter 9, worker rest fisher 9, worker gather hunter 8. None failed.

Fights and contact: lost people bow 1; first saw player 2 at 6:00.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 v251 builder: houses 2, quarry 3, forest 1, guards 2/2, mines 0/0, carriers 17 idle 17, soldiers 9, ore C/I 0/0.


Script: 1801 turns, 0.0 ms average, worst 2 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 14/2/1406/9/30 | 28/6/2157/10/40 |
| 30 | 14/2/1406/9/30 | 44/7/3103/20/60 |
| 45 | 14/2/1406/9/30 | 65/10/5053/26/84 |
| 60 | 14/2/1406/9/30 | 77/14/9187/48/92 |
| first | - - - - - - | 15 16 17 27 49 58 |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 1, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 1, fallen 0, gold 1 in stock + 28 in vaults.

At the end (what scheduled could see): enemy buildings known 2 (military 0); soldiers outside buildings 5 (bowmen 0); military sites unfinished 0; posts waiting for a swordsman 0; pioneers 0; without resource: none.

Growth (what scheduled could see): last new building at minute 8; waiting: No free ground to plant in range inside your border x1; spare tools in stock: pick 2, hammer 3, shovel 1, axe 0, saw 0.

Soldiers every 5 min: 10 9 9 9 9 9 9 9 9 9 9 9 (original game NPC: 10 10 10 10 10 20 23 26 26 26 29 48).

First army orders (game min:sec): 0:00 armyReserve; 2:00 march 1 soldiers -> 120,120; 2:16 sendIn 1 soldiers -> building 92; 2:26 free 1 soldiers; 5:00 march 1 soldiers -> 50,120; 7:56 sendIn 1 soldiers -> building 146.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 1–2: settlers: No free settlers and every bed taken: build houses.
- 57 min, 4–60: orders: The order "fighters" was sent 60 times this minute: send it only when something changes.
- 57 min, 4–60: orders: The order "archers" was sent 60 times this minute: send it only when something changes.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (28 mountain tiles).
- 44 min, 17–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 41 min, 20–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 24 | 8 | 24 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 17 | 64 | 1406 | 5318 |
| 30 | 24 | 8 | 24 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 17 | 64 | 1406 | 5318 |
| 45 | 24 | 8 | 24 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 17 | 64 | 1406 | 5318 |
| 60 | 24 | 8 | 24 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 17 | 64 | 1406 | 5318 |

At the end: buildings (built+sites) quarry 3, wood 2, house 2, guard 2, hq 1, saw 1, forest 1, fisher 1, hunter 1.
People: carrier 17, worker 9, soldier 5, digger 2, builder 2; beds 20. Soldiers: sword 5.

Goods produced in the game: stone 40, log 36, plank 16, fish 8, meat 8.
Goods consumed in the game: stone 34, plank 32, log 16, pick 3, axe 2, saw 1, shovel 1, rod 1, bow 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (115 building-min): Log pile full, nothing needs it right now 89%, Felling a tree 7%, Bringing a log to the pile 3%, Worker picking up an axe 0%, Working 0%
- quarry (171 building-min): Stone pile full, nothing needs it right now 95%, Cutting stone 3%, Bringing stone to the pile 1%, Worker picking up a pickaxe 0%, Working 0%
- saw (59 building-min): Output pile full, nothing needs it right now 94%, Sawing planks 3%, Waiting for logs 1%, Stacking outside 1%, Worker picking up a saw 0%
- forest (59 building-min): No free ground to plant in range inside your border 73%, Planting a sapling 26%, Worker picking up a shovel 0%, Working 0%
- house (112 building-min): Idle 100%
- guard (110 building-min): Idle 100%, Soldiers on the way 0%, Waiting for bowmen: train them at the barracks 0%, Waiting for a soldier 0%
- fisher (57 building-min): Fish pile full, nothing needs it right now 99%, Fishing 1%, Worker picking up a fishing rod 0%, Bringing a fish to the pile 0%, Idle 0%
- hunter (56 building-min): Meat pile full, nothing needs it right now 97%, Hunting 1%, Bringing meat to the pile 1%, Worker picking up a bow 0%

Building sites, time per state (site-min): Leveling the ground 3, Builders at work 3, Waiting for a digger 3, Waiting for a builder 2, Waiting for materials 1.

Build order (placed at min:sec, finished at): wood 0:02→0:31, quarry 0:06→0:53, saw 0:32→1:15, forest 0:54→1:30, house 1:16→2:25, guard 1:32→2:15, fisher 2:16→3:11, hunter 2:26→3:32, quarry 3:12→3:52, quarry 3:34→4:13, wood 3:52→4:55, house 4:14→5:20, guard 7:00→7:55.

Orders given: fighters 3294, archers 3294, place 13, priority 11, march 2, sendIn 2, armyReserve 1, free 1. None refused.

People changing jobs: new carrier 20, carrier -> worker 9.

People's orders (595 in all, 581 done): worker rest forest 92, worker gather forest 91, worker rest quarry 43, worker gather quarry 40, worker rest wood 38, worker gather wood 36, carrier haul log wood -> saw 20, worker rest saw 17, worker toCraft saw 16, worker craft saw 16, worker rest fisher 9, worker rest hunter 9, worker gather fisher 8, worker gather hunter 8. None failed.

Fights and contact: lost people bow 1; first saw player 1 at 6:00.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 v251 builder: houses 2, quarry 3, forest 1, guards 2/2, mines 0/0, carriers 17 idle 17, soldiers 9, ore C/I 0/0.


Script: 1802 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: scheduled (Gold) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 24/2/1573/10/31 | 24/6/3059/10/40 |
| 30 | 26/2/1574/10/49 | 32/6/3460/19/41 |
| 45 | 26/2/1574/10/49 | 32/6/4044/19/41 |
| 60 | 26/2/1574/10/49 | 32/6/4842/19/41 |
| first | 11 12 14 15 - - | 10 10 23 26 - - |

War and gold at the end: scheduled: took 0, lost 0, killed 0, fallen 1, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 1, fallen 0, gold 0 in stock + 64 in vaults, STUCK (town stopped growing).

At the end (what scheduled could see): enemy buildings known 2 (military 0); soldiers outside buildings 6 (bowmen 1); military sites unfinished 0; posts waiting for a swordsman 0; pioneers 0; without resource: quarry 1.

Growth (what scheduled could see): last new building at minute 17; waiting: Waiting for coal and iron x2; No free ground to plant in range inside your border x1; No stone in range inside your border x1; spare tools in stock: pick 0, hammer 0, shovel 1, axe 0, saw 0.

Soldiers every 5 min: 10 9 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 19 19 19 19 19 19 19).

First army orders (game min:sec): 0:00 armyReserve; 2:00 march 1 soldiers -> 120,120; 2:52 sendIn 1 soldiers -> building 99; 2:54 sendIn 1 soldiers -> building 99; 2:56 sendIn 1 soldiers -> building 99; 2:58 sendIn 1 soldiers -> building 99; 3:30 free 1 soldiers; 5:00 march 1 soldiers -> 190,120; 7:56 sendIn 1 soldiers -> building 145; 14:30 armyTarget sword=20; 14:30 armyTarget spear=12; 14:30 armyTarget bow=16.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 3 min, 1–14: settlers: No free settlers and every bed taken: build houses.
- 57 min, 4–60: orders: The order "fighters" was sent 60 times this minute: send it only when something changes.
- 57 min, 4–60: orders: The order "archers" was sent 60 times this minute: send it only when something changes.
- 49 min, 12–60: stall: coal mine: needs a worker with a pickaxe 100% of the last 5 minutes.
- 48 min, 13–60: stall: smelter: waiting for coal 100% of the last 5 minutes.
- 17 min, 14–30: stall: smith: waiting for coal and iron 100% of the last 5 minutes.
- 37 min, 24–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 30 min, 31–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 14 | 8 | 22 | 6 | 0 | 12 | 8 | 2 | 8 | 0 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 9 | 53 | 1573 | 6104 |
| 30 | 31 | 8 | 18 | 6 | 12 | 12 | 14 | 12 | 14 | 0 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 28 | 90 | 1574 | 6104 |
| 45 | 31 | 8 | 18 | 6 | 12 | 12 | 14 | 12 | 14 | 0 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 28 | 90 | 1574 | 6104 |
| 60 | 31 | 8 | 18 | 6 | 12 | 12 | 14 | 12 | 14 | 0 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 28 | 90 | 1574 | 6104 |

At the end: buildings (built+sites) house 4, quarry 3, wood 2, saw 2, guard 2, hq 1, forest 1, hunter 1, ironmine 1, coalmine 1, smelter 1, waterhut 1, smith 1, farm 1, weaponsmith 1, mill 1, barracks 1, bakery 1.
People: carrier 28, worker 16, soldier 6, digger 2, builder 2, geologist 1; beds 40. Soldiers: sword 5, bow 1.

Goods produced in the game: log 89, stone 85, plank 62, grain 38, water 26, flour 26, meat 15, ironore 14, bread 12.
Goods consumed in the game: stone 85, plank 78, log 62, grain 26, water 12, flour 12, pick 5, meat 3, hammer 3, axe 2, bow 2, saw 1, shovel 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (115 building-min): Log pile full, nothing needs it right now 75%, Felling a tree 17%, Bringing a log to the pile 7%, Worker picking up an axe 0%, Log pile full, waiting for carriers 0%
- quarry (172 building-min): Stone pile full, nothing needs it right now 61%, No stone in range inside your border 26%, Cutting stone 8%, Bringing stone to the pile 4%, Stone pile full, waiting for carriers 2%
- saw (106 building-min): Output pile full, nothing needs it right now 46%, Needs a worker with a saw 45%, Sawing planks 7%, Stacking outside 2%, Waiting for logs 0%
- forest (59 building-min): No free ground to plant in range inside your border 66%, Planting a sapling 34%, Worker picking up a shovel 0%, Working 0%
- house (203 building-min): Idle 100%
- hunter (58 building-min): Meat pile full, nothing needs it right now 91%, Meat pile full, waiting for carriers 3%, Hunting 3%, Bringing meat to the pile 2%, Worker picking up a bow 0%
- guard (109 building-min): Idle 100%, Soldiers on the way 0%, Waiting for bowmen: train them at the barracks 0%
- ironmine (51 building-min): Iron ore pile full, nothing needs it right now 92%, Iron ore pile full, waiting for carriers 3%, Mining iron ore 3%, Bringing iron ore out 1%, Worker picking up a pickaxe 1%
- coalmine (51 building-min): Needs a worker with a pickaxe 100%
- smelter (50 building-min): Waiting for coal 99%, Worker picking up a hammer 1%, Working 0%
- waterhut (49 building-min): Water pile full, nothing needs it right now 88%, Bringing water to the pile 4%, Fetching water 4%, Water pile full, waiting for carriers 3%, Worker on the way 0%
- smith (49 building-min): Waiting for coal and iron 99%, Worker picking up a hammer 1%, Working 0%
- farm (48 building-min): Grain pile full, nothing needs it right now 85%, Sowing a field 7%, Harvesting grain 5%, Bringing grain to the pile 3%, Worker picking up a scythe 0%
- weaponsmith (46 building-min): Waiting for coal and iron 99%, Worker picking up a hammer 1%, Working 0%
- mill (46 building-min): Output pile full, nothing needs it right now 94%, Grinding flour 3%, Stacking outside 1%, Waiting for grain 1%, Worker on the way 0%
- barracks (46 building-min): Waiting for weapons from the weaponsmith 99%, Weapons on the way 1%
- bakery (45 building-min): Output pile full, nothing needs it right now 92%, Baking bread 6%, Stacking outside 1%, Waiting for water 1%, Waiting for flour and water 0%

Building sites, time per state (site-min): Builders at work 7, Leveling the ground 6, Waiting for a builder 5, Waiting for a digger 4, Waiting for materials 1.

Build order (placed at min:sec, finished at): wood 0:02→0:31, quarry 0:04→0:52, saw 0:32→1:12, forest 0:54→1:28, house 1:14→2:19, hunter 1:28→2:09, guard 2:10→2:51, quarry 2:20→3:13, house 2:52→3:33, quarry 3:14→4:00, wood 3:34→4:25, guard 7:00→7:55, ironmine 8:38→9:08, coalmine 8:50→9:24, smelter 9:24→10:04, waterhut 9:36→10:41, smith 10:06→11:27, farm 11:02→12:09, saw 11:28→12:34, weaponsmith 12:04→13:35, mill 12:34→13:56, barracks 13:36→14:30, house 13:56→14:54, bakery 14:32→15:20, house 15:26→16:29.

Orders given: fighters 3276, archers 3276, place 25, priority 21, armyTarget 9, sendIn 5, weaponKeep 3, march 2, armyReserve 1, free 1, profession 1, sendUnit 1, toolKeep 1. None refused.

People changing jobs: new carrier 40, carrier -> worker 16, carrier -> geologist 1, carrier -> soldier 1.

People's orders (1680 in all, 1659 done): worker rest forest 139, worker gather forest 138, worker rest wood 91, worker gather wood 89, worker rest quarry 88, worker gather quarry 85, worker rest farm 79, worker gather farm 78, carrier haul log wood -> saw 73, worker rest saw 63, worker toCraft saw 62, worker craft saw 62, carrier haul grain farm -> mill 30, worker rest waterhut 27. None failed.

Fights and contact: lost people bow 1; first saw player 2 at 6:00.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 v251 builder: houses 4, quarry 3, forest 1, guards 2/2, mines 1/1, carriers 28 idle 28, soldiers 10, ore C/I 1/1.


Script: 1800 turns, 0.0 ms average, worst 2 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: scheduled (Blue) vs original game NPC: undecided

| min | scheduled | original game NPC |
|---|---|---|
| 15 | 14/2/1655/9/30 | 33/6/3079/10/50 |
| 30 | 14/2/1655/9/30 | 63/12/6745/35/85 |
| 45 | 14/2/1655/9/30 | 72/17/10600/58/82 |
| 60 | 14/2/1410/8/30 | 80/23/14757/77/76 |
| first | - - - - - - | 9 9 22 22 27 35 |

War and gold at the end: scheduled: took 0, lost 0, killed 7, fallen 2, gold 0 in stock + 0 in vaults, STUCK (town stopped growing). original game NPC: took 0, lost 0, killed 2, fallen 7, gold 0 in stock + 47 in vaults.

At the end (what scheduled could see): enemy buildings known 4 (military 3); soldiers outside buildings 5 (bowmen 0); military sites unfinished 0; posts waiting for a swordsman 1; pioneers 0; without resource: none.

Growth (what scheduled could see): last new building at minute 8; waiting: No free ground to plant in range inside your border x1; Waiting for a swordsman x1; spare tools in stock: pick 2, hammer 3, shovel 1, axe 0, saw 0.

Soldiers every 5 min: 10 9 9 9 9 9 9 9 9 9 9 8 (original game NPC: 10 10 10 10 15 35 44 51 58 67 73 77).

First army orders (game min:sec): 0:00 armyReserve; 2:00 march 1 soldiers -> 120,120; 2:20 sendIn 1 soldiers -> building 85; 2:30 free 1 soldiers; 5:00 march 1 soldiers -> 50,120; 7:34 sendIn 1 soldiers -> building 148.

#### Game log: scheduled

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 1 min, 1: settlers: No free settlers and every bed taken: build houses.
- 57 min, 4–60: orders: The order "fighters" was sent 60 times this minute: send it only when something changes.
- 57 min, 4–60: orders: The order "archers" was sent 60 times this minute: send it only when something changes.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (5 mountain tiles).
- 45 min, 16–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 41 min, 20–60: stall: forest: no free ground to plant in range inside your border 100% of the last 5 minutes.
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 24 | 8 | 24 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 17 | 64 | 1655 | 4927 |
| 30 | 24 | 8 | 24 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 17 | 64 | 1655 | 4927 |
| 45 | 24 | 8 | 24 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 17 | 64 | 1655 | 4927 |
| 60 | 24 | 8 | 24 | 14 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 17 | 64 | 1410 | 4927 |

At the end: buildings (built+sites) quarry 3, wood 2, house 2, guard 2, hq 1, saw 1, forest 1, fisher 1, hunter 1.
People: carrier 17, worker 9, soldier 5, digger 2, builder 2; beds 20. Soldiers: sword 5.

Goods produced in the game: stone 40, log 36, plank 16, fish 8, meat 8.
Goods consumed in the game: stone 34, plank 32, log 16, pick 3, axe 2, saw 1, shovel 1, rod 1, bow 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- wood (115 building-min): Log pile full, nothing needs it right now 91%, Felling a tree 7%, Bringing a log to the pile 2%, Worker picking up an axe 0%, Working 0%
- quarry (171 building-min): Stone pile full, nothing needs it right now 94%, Cutting stone 4%, Bringing stone to the pile 2%, Worker picking up a pickaxe 0%, Working 0%
- saw (59 building-min): Output pile full, nothing needs it right now 95%, Sawing planks 3%, Waiting for logs 1%, Stacking outside 1%, Worker picking up a saw 0%
- forest (59 building-min): No free ground to plant in range inside your border 73%, Planting a sapling 27%, Worker picking up a shovel 0%, Working 0%
- house (113 building-min): Idle 100%
- guard (110 building-min): Idle 95%, Waiting for a swordsman: train one at the barracks 4%, Soldiers on the way 0%, Waiting for bowmen: train them at the barracks 0%
- fisher (57 building-min): Fish pile full, nothing needs it right now 98%, Fishing 1%, Worker picking up a fishing rod 0%, Bringing a fish to the pile 0%
- hunter (57 building-min): Meat pile full, nothing needs it right now 96%, Hunting 2%, Bringing meat to the pile 2%, Worker picking up a bow 1%, Working 0%

Building sites, time per state (site-min): Builders at work 3, Leveling the ground 3, Waiting for a digger 2, Waiting for a builder 2.

Build order (placed at min:sec, finished at): wood 0:02→0:32, quarry 0:06→0:51, saw 0:34→1:12, forest 0:52→1:30, house 1:12→1:52, guard 1:30→2:18, fisher 1:54→3:00, hunter 2:20→3:28, quarry 3:02→3:49, quarry 3:30→4:04, wood 3:50→4:35, house 4:06→5:01, guard 7:00→7:33.

Orders given: fighters 3303, archers 3303, place 13, priority 11, march 2, sendIn 2, armyReserve 1, free 1. None refused.

People changing jobs: new carrier 20, carrier -> worker 9, new soldier 2.

People's orders (594 in all, 578 done): worker rest forest 91, worker gather forest 90, worker rest quarry 43, worker gather quarry 40, worker rest wood 38, worker gather wood 36, carrier haul log wood -> saw 20, worker rest saw 17, worker toCraft saw 16, worker craft saw 16, worker rest fisher 9, worker rest hunter 9, worker gather fisher 8, worker gather hunter 8. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×5; failed: killed ×1.

Fights and contact: was attacked 1 times (first 55:04); killed spear 3, sword 3, bow 1; lost people bow 1, sword 1; first saw player 1 at 6:00.

Your notes (6 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×6 0:00–50:00 v251 builder: houses 2, quarry 3, forest 1, guards 2/2, mines 0/0, carriers 17 idle 17, soldiers 9, ore C/I 0/0.


Script: 1809 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.
