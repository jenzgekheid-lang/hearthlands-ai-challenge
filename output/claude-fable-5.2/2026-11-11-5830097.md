# Tournament: claude-fable-5.2

Game version 191. Written for: claude-fable-5.2 189.

- claude-fable-5.2: hearthlands-ai-challenge, commit 5830097

Maps 20261030, 777, 4242, 31, each twice (sides swapped), up to 60 game minutes (1x). 60 s.

Each game ends with the script's own game log: what it may know (its own side, and what happened to it or what it saw). Times are game min:sec.

| Opponent | Won | Lost | Undecided |
|---|---|---|---|
| original game NPC | 0 | 0 | 8 |

## Games

Each row: buildings / military / land tiles / soldiers / people at the minute shown. First: game minute of the first smelter, smith, weaponsmith, barracks, tower, castle (- = never).

### Map 31: claude-fable-5.2 (Gold) vs original game NPC: undecided

| min | claude-fable-5.2 | original game NPC |
|---|---|---|
| 15 | 15/5/2606/10/10 | 35/6/3214/10/60 |
| 30 | 25/7/2956/10/20 | 64/10/5814/19/101 |
| 45 | 25/7/2956/10/20 | 76/16/10500/53/117 |
| 60 | 25/7/2956/10/20 | 82/22/14969/70/100 |
| first | 10 17 18 20 - - | 8 9 19 20 25 27 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 16 19 30 45 53 62 67 70).

First army orders (game min:sec): 0:04 sendIn 1 soldiers -> building 74; 0:20 sendIn 1 soldiers -> building 74; 0:36 sendIn 1 soldiers -> building 74; 0:52 sendIn 1 soldiers -> building 74; 1:46 sendIn 1 soldiers -> building 92; 2:02 sendIn 1 soldiers -> building 92; 2:18 sendIn 1 soldiers -> building 92; 2:34 sendIn 1 soldiers -> building 92; 4:50 sendIn 1 soldiers -> building 115; 5:06 sendIn 1 soldiers -> building 115; 5:22 sendIn 1 soldiers -> building 115; 5:38 sendIn 1 soldiers -> building 115.

#### Game log: claude-fable-5.2

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 8 | 6 | 10 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 18 | 2606 | 4930 |
| 30 | 16 | 1 | 8 | 9 | 0 | 0 | 0 | 0 | 0 | 5 | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | 28 | 2956 | 5583 |
| 45 | 16 | 1 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 17 | 2 | 0 | 0 | 0 | 7 | 6 | 7 | 0 | 37 | 2956 | 5597 |
| 60 | 16 | 1 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 20 | 1 | 9 | 0 | 0 | 11 | 10 | 11 | 0 | 48 | 2956 | 5597 |

At the end: buildings (built+sites) guard 7, wood 2, ironmine 2, forest 2, barracks 2, hq 1, quarry 1, saw 1, fisher 1, coalmine 1, smelter 1, smith 1, weaponsmith 1, house 1, farm 1.
People: worker 13, digger 2, builder 2, carrier 2, soldier 1, geologist 1; beds 10. Soldiers: sword 1.

Goods produced in the game: fish 100, coal 93, stone 66, log 62, plank 50, ironore 42, iron 41, sword 11, bow 11, spear 10.
Goods consumed in the game: fish 94, stone 76, plank 73, coal 73, log 50, ironore 41, iron 32, pick 5, hammer 3, axe 2, shovel 2, saw 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (351 building-min): Idle 77%, Waiting for a swordsman: train one at the barracks 23%, Soldiers on the way 0%, Waiting for a soldier 0%
- quarry (59 building-min): Stone pile full, waiting for carriers 68%, Cutting stone 20%, Bringing stone to the pile 12%, Worker picking up a pickaxe 0%, Working 0%
- wood (108 building-min): Log pile full, waiting for carriers 72%, Waiting for a free settler 13%, Felling a tree 12%, Bringing a log to the pile 4%, Worker picking up an axe 0%
- saw (58 building-min): Waiting for logs 84%, Sawing planks 11%, Output pile full, waiting for carriers 2%, Stacking outside 2%, Worker picking up a saw 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 38%, Waiting for a free settler 36%, Fishing 14%, Bringing a fish to the pile 12%, Worker picking up a fishing rod 0%
- coalmine (56 building-min): Waiting for a free settler 35%, Mining coal 25%, Needs bread or fish: mining stopped 23%, Coal pile full, waiting for carriers 12%, Bringing coal out 4%
- ironmine (102 building-min): Needs meat or fish: mining stopped 61%, Waiting for a free settler 28%, Deposit thinning: mining iron ore 5%, Mining iron ore 4%, Bringing iron ore out 1%
- smelter (50 building-min): Waiting for iron ore 55%, Waiting for a free settler 27%, Smelting iron 10%, Waiting for coal and iron ore 4%, Stacking outside 2%
- smith (43 building-min): Waiting for coal and iron 82%, Waiting for a free settler 16%, Waiting for coal 1%, Worker picking up a hammer 0%, Idle 0%
- weaponsmith (42 building-min): Waiting for iron 46%, Waiting for a free settler 13%, Waiting for coal and iron 11%, Waiting for coal 9%, Output pile full, waiting for carriers 9%
- forest (80 building-min): No free ground to plant in range inside your border 62%, Planting a sapling 29%, Waiting for a free settler 9%, Worker picking up a shovel 0%, Idle 0%
- barracks (73 building-min): Waiting for a free settler to train 68%, Waiting for weapons from the weaponsmith 32%, Idle 0%, Weapons on the way 0%
- house (37 building-min): Idle 100%
- farm (34 building-min): Waiting for a free settler 100%, Idle 0%

Building sites, time per state (site-min): Waiting for materials 18, Waiting for a digger 8, Builders at work 6, Leveling the ground 5, Waiting for a builder 3.

Build order (placed at min:sec, finished at): guard 0:02→1:00, quarry 0:02→1:19, wood 0:04→1:44, saw 0:04→1:53, guard 1:44→2:31, fisher 1:54→3:19, coalmine 1:54→3:59, ironmine 2:00→4:48, guard 4:48→6:17, guard 7:12→8:46, smelter 8:48→9:46, wood 8:48→10:02, guard 10:02→11:58, ironmine 10:52→13:19, guard 12:00→16:08, smith 13:20→16:41, weaponsmith 17:00→17:52, forest 17:54→18:19, barracks 18:44→19:34, guard 19:36→22:33, forest 19:58→22:09, house 22:34→23:30, farm 23:30→25:47, barracks 25:48→26:58.

Orders given: armyTarget 53, sendIn 35, place 24, priority 4, profession 3, sendUnit 3, armyReserve 1. None refused.

People changing jobs: carrier -> worker 9, new carrier 6, new worker 4, new soldier 2, carrier -> geologist 1.

People's orders (2367 in all, 2340 done): worker rest forest 171, worker gather forest 169, worker mine coalmine 128, worker rest coalmine 102, worker rest fisher 100, worker gather fisher 100, worker mine ironmine 69, worker rest quarry 67, worker gather quarry 66, worker rest wood 64, worker gather wood 62, worker eat coalmine 58, carrier haul fish fisher -> coalmine 58, worker rest saw 51. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×11.

Your notes (270 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text; the last 30 of 34 kinds):
- 0:02 placed guard 53,111, quarry 39,125 at 2 s
- 1:00 waiting: fisher: no spot; wood: materials; forest: materials; waterhut: materials; fisher: no spot
- ×5 1:44–12:00 placed guard 41,57 at 720 s
- 2:00 waiting: sites at cap
- ×2 3:00–4:00 waiting: guard: materials; wood: materials; forest: materials; waterhut: materials; fisher: no free rod
- 5:00 waiting: smelter: materials; wood: materials; forest: materials; house: no spot; farm: no spot; waterhut: materials; saw: no free saw
- 6:00 waiting: smelter: materials; wood: materials; forest: materials; house: materials; farm: materials; waterhut: no spot; saw: no free saw
- 7:00 waiting: guard: materials; smelter: materials; wood: materials; forest: materials; house: materials; farm: no spot; waterhut: no spot
- 8:00 waiting: smelter: materials; wood: materials; forest: materials; house: materials; farm: materials; waterhut: no spot; fisher: no free rod
- 8:48 placed smelter 45,119, wood 29,121 at 528 s
- 9:00 waiting: guard: materials; forest: materials; house: materials; farm: materials; waterhut: materials; fisher: no free rod
- 10:00 waiting: guard: materials; coalmine: no free pick; ironmine: no free pick; smith: materials; weaponsmith: materials; wood: no free axe; forest: no spot
- ×3 11:00–13:00 waiting: coalmine: no free pick; smith: materials; weaponsmith: materials; wood: no free axe; forest: materials; house: no spot; farm: no spot
- 13:20 placed smith 45,111 at 800 s
- ×3 14:00–16:00 waiting: coalmine: no free pick; weaponsmith: materials; wood: no free axe; forest: materials; house: materials; farm: no spot; waterhut: no spot
- ×2 16:14–29:50 starved: stone no (last made 1669 s), wood yes (planks 1447 s); expansion weights rock 3, tree 6
- 17:00 placed weaponsmith 41,131 at 1020 s
- 17:00 waiting: coalmine: no free pick; wood: no free axe; forest: materials; house: materials; farm: no spot; waterhut: no spot; quarry: no free pick
- 18:00 waiting: coalmine: no free pick; barracks: materials; wood: no free axe; forest: materials; house: materials; farm: no spot; waterhut: no spot
- ×2 18:44–25:48 placed barracks 27,129 at 1548 s
- 19:00 waiting: coalmine: no free pick; wood: no free axe; forest: materials; house: materials; farm: materials; waterhut: no spot; quarry: no free pick
- 19:58 placed forest 45,105 at 1198 s
- ×3 20:00–22:00 waiting: coalmine: no free pick; ironmine: no free pick; wood: no free axe; house: materials; farm: materials; waterhut: no spot; quarry: no free pick
- 22:34 placed house 33,109 at 1354 s
- 23:00 waiting: coalmine: no free pick; ironmine: no free pick; wood: no free axe; farm: materials; waterhut: materials; quarry: no free pick; fisher: no free rod
- ×5 24:00–29:00 waiting: coalmine: no free pick; ironmine: no free pick; wood: no free axe; house: materials; waterhut: materials; mill: no spot; quarry: no free pick
- 25:00 waiting: coalmine: no free pick; ironmine: no free pick; barracks: no spot; wood: no free axe; house: materials; waterhut: materials; mill: no spot
- ×2 30:00–31:00 waiting: coalmine: no free pick; ironmine: no free pick; house: materials; waterhut: materials; mill: materials; quarry: no free pick; saw: no free saw
- ×15 31:50–59:50 starved: stone yes (last made 1669 s), wood yes (planks 1447 s); expansion weights rock 10, tree 6
- ×28 32:00–59:00 waiting: coalmine: no free pick; ironmine: no free pick; waterhut: materials; mill: materials; saw: no free saw; fisher: no free rod; coalmine: no free pick


Script: 1800 turns, 0.1 ms average, worst 2 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 31: claude-fable-5.2 (Blue) vs original game NPC: undecided

| min | claude-fable-5.2 | original game NPC |
|---|---|---|
| 15 | 8/3/1904/10/10 | 32/6/2863/10/50 |
| 30 | 8/3/1904/10/10 | 59/7/4115/16/84 |
| 45 | 8/3/1904/10/10 | 72/15/10123/53/107 |
| 60 | 8/3/1904/10/10 | 79/21/14929/69/91 |
| first | - - - - - - | 11 12 13 20 31 35 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 11 16 39 49 53 60 64 69).

First army orders (game min:sec): 0:04 sendIn 1 soldiers -> building 75; 0:20 sendIn 1 soldiers -> building 75; 0:36 sendIn 1 soldiers -> building 75; 1:18 sendIn 1 soldiers -> building 84; 1:34 sendIn 1 soldiers -> building 84; 1:50 sendIn 1 soldiers -> building 84; 2:06 sendIn 1 soldiers -> building 84; 2:22 sendIn 1 soldiers -> building 84; 2:56 sendIn 1 soldiers -> building 109; 3:12 sendIn 1 soldiers -> building 109; 3:28 sendIn 1 soldiers -> building 109; 3:44 sendIn 1 soldiers -> building 109.

#### Game log: claude-fable-5.2

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 14 | 20 | 0 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 22 | 1904 | 3748 |
| 30 | 14 | 20 | 0 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 22 | 1904 | 3748 |
| 45 | 14 | 20 | 0 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 22 | 1904 | 3748 |
| 60 | 14 | 20 | 0 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 22 | 1904 | 3748 |

At the end: buildings (built+sites) guard 3, hq 1, wood 1, saw 1, fisher 1, coalmine 1.
People: soldier 6, worker 3, digger 2, builder 2, carrier 2, geologist 1; beds 0. Soldiers: sword 3, bow 3.

Goods produced in the game: log 24, plank 14, fish 8.
Goods consumed in the game: plank 18, stone 18, log 14, axe 1, pick 1, saw 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (173 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (59 building-min): No grown trees in range inside your border 87%, Felling a tree 9%, Bringing a log to the pile 4%, Worker picking up an axe 0%, Working 0%
- saw (59 building-min): Output pile full, waiting for carriers 94%, Sawing planks 3%, Waiting for logs 2%, Stacking outside 1%, Worker picking up a saw 0%
- fisher (58 building-min): Fish pile full, waiting for carriers 97%, Bringing a fish to the pile 1%, Fishing 1%, Worker picking up a fishing rod 0%, Idle 0%
- coalmine (57 building-min): Waiting for a free settler 100%, Idle 0%

Building sites, time per state (site-min): Waiting for a digger 2, Leveling the ground 2, Builders at work 1, Waiting for a builder 1, Waiting for materials 0.

Build order (placed at min:sec, finished at): guard 0:02→0:42, wood 0:02→0:56, saw 0:04→1:15, fisher 0:04→1:32, guard 1:16→2:16, coalmine 2:18→2:52, guard 2:54→3:52.

Orders given: sendIn 12, place 7, profession 1, sendUnit 1. None refused.

People changing jobs: carrier -> worker 3, carrier -> geologist 1, new soldier 1.

People's orders (243 in all, 234 done): worker rest wood 25, worker gather wood 24, carrier haul log wood -> saw 18, soldier garrison guard 15, worker rest saw 15, worker toCraft saw 14, worker craft saw 14, builder build guard 12, soldier return 10, carrier haul stone pile -> guard 9, worker rest fisher 9, worker gather fisher 8, digger dig guard 6, builder build coalmine 6. None failed.

Your notes (319 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×60 0:00–59:00 59 min: plank 20 stone 0 log 14 coal 0 iron 0 ironore 0 | free: axe 1 pick 3 hammer 3 saw 0 shovel 2 scythe 2 rod 0 | pick hold 1
- ×60 0:00–59:00 built: quarry 0 wood 1 coal 1 iron 0 smelter 0 smith 0 weapons 0 barracks 0 | houses 0 carriers 2 beds 10 pop 10 | guard spots 8 quarry spots 0 | sites 0
- 0:00 waiting: guard: no spot; quarry: no spot; wood: no spot; saw: no spot; fisher: no spot; wood: no spot; waterhut: no spot
- ×60 0:00–59:00 army: soldiers 6, free 5, military 3 (empty 0), need 6, enemy soldiers 0, enemy buildings 0
- 0:02 placed guard 207,131, wood 205,119 at 2 s
- 1:00 waiting: guard: materials; quarry: no spot; wood: materials; forest: materials; waterhut: materials; quarry: no spot
- 1:16 placed guard 219,131 at 76 s
- 2:00 waiting: quarry: no spot; coalmine: materials; ironmine: materials; wood: materials; forest: materials; waterhut: no spot; quarry: no spot
- 2:18 placed coalmine 213,135 at 138 s
- 3:00 waiting: quarry: no spot; ironmine: materials; wood: materials; forest: materials; waterhut: materials; quarry: no spot
- ×9 4:00–12:00 waiting: guard: materials; quarry: no spot; ironmine: materials; wood: materials; forest: materials; waterhut: no spot; quarry: no spot
- ×5 4:00–12:00 starved: stone yes (last made 0 s), wood no (planks 294 s); expansion weights rock 10, tree 1
- ×48 12:26–59:26 jam: nothing made or delivered for 3060 s; refused: 
- ×47 13:00–59:00 waiting: guard: materials; quarry: jam; ironmine: jam; wood: jam; forest: jam; waterhut: jam; quarry: jam
- ×23 14:00–58:00 starved: stone yes (last made 0 s), wood yes (planks 294 s); expansion weights rock 10, tree 6


Script: 1800 turns, 0.1 ms average, worst 2 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: claude-fable-5.2 (Gold) vs original game NPC: undecided

| min | claude-fable-5.2 | original game NPC |
|---|---|---|
| 15 | 16/6/2901/10/10 | 35/6/2751/10/50 |
| 30 | 29/8/3532/17/23 | 47/9/3775/14/56 |
| 45 | 29/8/3532/18/22 | 74/17/9676/35/95 |
| 60 | 29/8/3446/18/22 | 81/24/14263/61/83 |
| first | 12 19 20 22 - - | 8 8 15 16 31 30 |

Soldiers every 5 min: 10 10 10 10 10 17 18 18 18 18 18 18 (original game NPC: 10 10 10 10 11 14 18 25 35 42 50 61).

First army orders (game min:sec): 0:04 sendIn 1 soldiers -> building 74; 0:20 sendIn 1 soldiers -> building 74; 0:36 sendIn 1 soldiers -> building 74; 1:16 sendIn 1 soldiers -> building 81; 1:32 sendIn 1 soldiers -> building 81; 1:48 sendIn 1 soldiers -> building 81; 2:04 sendIn 1 soldiers -> building 81; 2:20 sendIn 1 soldiers -> building 81; 3:56 sendIn 1 soldiers -> building 114; 4:12 sendIn 1 soldiers -> building 114; 4:28 sendIn 1 soldiers -> building 114; 4:44 sendIn 1 soldiers -> building 114.

#### Game log: claude-fable-5.2

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 8 | 6 | 10 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 18 | 2901 | 5561 |
| 30 | 0 | 1 | 6 | 8 | 0 | 0 | 0 | 6 | 0 | 7 | 1 | 5 | 0 | 0 | 1 | 2 | 0 | 0 | 22 | 3532 | 6914 |
| 45 | 0 | 1 | 8 | 14 | 0 | 0 | 8 | 8 | 0 | 28 | 0 | 3 | 0 | 0 | 8 | 8 | 8 | 0 | 51 | 3532 | 6914 |
| 60 | 0 | 1 | 8 | 16 | 0 | 0 | 8 | 8 | 0 | 28 | 0 | 12 | 0 | 0 | 11 | 11 | 10 | 0 | 59 | 3446 | 6914 |

At the end: buildings (built+sites) guard 8, wood 3, coalmine 2, forest 2, barracks 2, house 2, hq 1, quarry 1, saw 1, ironmine 1, fisher 1, smelter 1, smith 1, weaponsmith 1, farm 1, waterhut 1.
People: worker 15, soldier 6, digger 2, builder 2, carrier 2, geologist 1; beds 20. Soldiers: sword 3, bow 2, spear 1.

Goods produced in the game: fish 175, coal 132, stone 78, plank 60, ironore 58, iron 58, log 56, sword 14, bow 13, spear 13, grain 8, water 8, axe 1, pick 1, hammer 1, saw 1, shovel 1, rod 1.
Goods consumed in the game: fish 165, coal 104, stone 88, plank 83, log 60, ironore 58, iron 46, pick 5, hammer 3, sword 3, bow 3, axe 2, shovel 2, spear 2, saw 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (401 building-min): Idle 76%, Waiting for a swordsman: train one at the barracks 24%, Soldiers on the way 0%, Waiting for a soldier 0%
- quarry (59 building-min): Stone pile full, waiting for carriers 70%, Cutting stone 21%, Bringing stone to the pile 9%, Worker picking up a pickaxe 0%, Idle 0%
- wood (149 building-min): No grown trees in range inside your border 45%, Waiting for a free settler 35%, Felling a tree 9%, Log pile full, waiting for carriers 5%, Bringing a log to the pile 3%
- saw (58 building-min): Waiting for logs 82%, Sawing planks 13%, Stacking outside 3%, Output pile full, waiting for carriers 1%, Worker picking up a saw 0%
- ironmine (57 building-min): Waiting for a free settler 39%, Needs meat or fish: mining stopped 30%, Deposit thinning: mining iron ore 16%, Mining iron ore 7%, Deposit worn out: finding little iron ore 4%
- coalmine (99 building-min): Coal pile full, waiting for carriers 32%, Waiting for a free settler 29%, Mining coal 15%, Needs bread or fish: mining stopped 10%, Deposit thinning: mining coal 9%
- fisher (52 building-min): Waiting for a free settler 32%, Fishing 24%, Bringing a fish to the pile 22%, Fish pile full, waiting for carriers 21%, Worker picking up a fishing rod 1%
- smelter (49 building-min): Waiting for iron ore 51%, Waiting for a free settler 28%, Smelting iron 15%, Stacking outside 3%, Waiting for coal and iron ore 2%
- forest (85 building-min): No free ground to plant in range inside your border 52%, Planting a sapling 28%, Waiting for a free settler 19%, Worker picking up a shovel 1%, Idle 0%
- smith (42 building-min): Waiting for coal and iron 39%, Waiting for iron 30%, Waiting for a free settler 17%, Waiting for coal 11%, All tool targets met 1%
- weaponsmith (40 building-min): Waiting for iron 36%, Output pile full, waiting for carriers 23%, Waiting for a free settler 13%, Waiting for coal 6%, Waiting for coal and iron 5%
- barracks (73 building-min): Waiting for a free settler to train 79%, Waiting for weapons from the weaponsmith 19%, Weapons on the way 2%, Training soldiers 1%, Idle 0%
- house (68 building-min): Idle 100%
- farm (31 building-min): Grain pile full, waiting for carriers 95%, Sowing a field 3%, Harvesting grain 1%, Bringing grain to the pile 1%, Worker picking up a scythe 0%
- waterhut (30 building-min): Water pile full, waiting for carriers 97%, Fetching water 1%, Worker on the way 1%, Bringing water to the pile 1%, Working 0%

Building sites, time per state (site-min): Waiting for materials 12, Waiting for a digger 11, Builders at work 7, Leveling the ground 7, Waiting for a builder 5.

Build order (placed at min:sec, finished at): guard 0:02→0:42, quarry 0:02→0:58, wood 0:04→1:12, saw 0:04→1:33, guard 1:14→2:21, ironmine 1:34→3:09, wood 1:34→3:23, coalmine 1:52→3:53, guard 3:54→4:56, guard 5:50→7:05, fisher 7:06→8:28, guard 7:32→9:50, smelter 10:16→11:23, guard 11:24→13:40, forest 11:24→14:09, guard 13:56→16:22, coalmine 16:22→17:37, smith 17:38→18:22, weaponsmith 18:42→19:40, forest 19:40→20:22, barracks 20:24→21:33, guard 21:34→24:16, house 21:38→25:01, barracks 25:02→25:56, wood 25:10→26:13, house 26:14→26:55, farm 27:42→28:33, waterhut 28:34→29:47.

Orders given: armyTarget 396, sendIn 46, place 28, armyReserve 22, profession 7, priority 4, sendUnit 3, march 1. None refused.

People changing jobs: new carrier 16, carrier -> worker 11, carrier -> soldier 8, new worker 4, new soldier 3, carrier -> geologist 1.

People's orders (3180 in all, 3147 done): worker mine coalmine 200, worker rest forest 176, worker rest fisher 175, worker gather fisher 175, worker gather forest 174, worker rest coalmine 138, worker mine ironmine 115, carrier haul fish fisher -> coalmine 104, worker eat coalmine 100, worker rest quarry 79, worker gather quarry 78, worker rest ironmine 69, worker eat ironmine 65, carrier haul fish fisher -> ironmine 65. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×15.

Fights and contact: was attacked 1 times (first 47:02); killed sword 6; first saw player 2 at 43:00.

Your notes (271 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text; the last 30 of 43 kinds):
- 8:00 waiting: smelter: materials; forest: materials; house: materials; waterhut: materials; fisher: no free rod
- 9:00 waiting: smelter: materials; forest: materials; house: materials; farm: materials; waterhut: materials; fisher: no free rod
- 10:00 waiting: smelter: materials; wood: no free axe; forest: materials; house: materials; farm: materials; waterhut: materials; quarry: no spot
- 10:16 placed smelter 41,127 at 616 s
- 11:00 waiting: guard: materials; wood: no free axe; forest: materials; house: materials; farm: materials; waterhut: no spot; quarry: no spot
- 11:24 placed guard 93,101, forest 75,125 at 684 s
- ×5 12:00–16:00 waiting: coalmine: materials; ironmine: materials; smith: materials; weaponsmith: materials; wood: no free axe; forest: no spot; house: no spot
- 16:22 placed coalmine 55,143 at 982 s
- 17:00 waiting: coalmine: no free pick; ironmine: no free pick; smith: materials; weaponsmith: materials; wood: no free axe; forest: no spot; house: no spot
- 17:38 placed smith 35,127 at 1058 s
- 18:00 waiting: coalmine: no free pick; ironmine: no free pick; weaponsmith: materials; wood: no free axe; forest: materials; house: no spot; farm: no spot
- 18:42 placed weaponsmith 47,125 at 1122 s
- 19:00 waiting: coalmine: no free pick; ironmine: no free pick; wood: no free axe; forest: materials; house: materials; farm: no spot; waterhut: no spot
- 20:00 waiting: coalmine: no free pick; ironmine: no free pick; barracks: materials; stonemine: no free pick; wood: no free axe; house: no spot; farm: no spot
- ×2 20:24–25:02 placed barracks 51,119 at 1502 s
- 21:00 waiting: coalmine: no free pick; ironmine: no free pick; stonemine: no free pick; wood: no free axe; house: materials; farm: no spot; waterhut: no spot
- ×3 22:00–24:00 waiting: coalmine: no free pick; ironmine: no free pick; stonemine: no free pick; wood: no free axe; farm: materials; waterhut: no spot; quarry: no free pick
- 25:00 waiting: coalmine: no free pick; ironmine: no free pick; barracks: no spot; wood: no free axe; farm: materials; waterhut: materials; quarry: no free pick
- ×28 26:00–53:00 53 min: plank 1 stone 8 log 0 coal 29 iron 6 ironore 0 | free: axe -1 pick 0 hammer 0 saw 0 shovel 0 scythe 1 rod 0 | pick hold 0
- 26:00 waiting: coalmine: no free pick; ironmine: no free pick; stonemine: no free pick; forest: no free shovel; house: materials; farm: no spot; waterhut: no spot
- 26:14 placed house 45,113 at 1574 s
- 27:00 waiting: coalmine: no free pick; ironmine: no free pick; stonemine: no free pick; forest: no free shovel; farm: materials; waterhut: no spot; quarry: no free pick
- 27:42 placed farm 37,107 at 1662 s
- 28:00 waiting: coalmine: no free pick; ironmine: no free pick; stonemine: no free pick; forest: no free shovel; waterhut: materials; mill: no spot; quarry: no free pick
- ×26 29:00–58:00 waiting: guard: materials; coalmine: no free pick; ironmine: no free pick; stonemine: no free pick; forest: no free shovel; waterhut: no spot; mill: no spot
- ×4 31:00–34:00 waiting: guard: materials; coalmine: no free pick; ironmine: no free pick; forest: no free shovel; waterhut: no spot; mill: no spot; quarry: no free pick
- ×2 32:18–34:18 starved: stone no (last made 1823 s), wood yes (planks 1698 s); expansion weights rock 3, tree 6
- ×12 36:18–58:18 starved: stone yes (last made 1823 s), wood yes (planks 1698 s); expansion weights rock 10, tree 6
- 47:08 defence: 5 soldiers march on an enemy soldier 9 tiles from our buildings
- 59:00 waiting: guard: materials; coalmine: no free pick; ironmine: no free pick; stonemine: no free pick; forest: no spot; waterhut: no spot; mill: no spot


Script: 1807 turns, 0.2 ms average, worst 3 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: claude-fable-5.2 (Blue) vs original game NPC: undecided

| min | claude-fable-5.2 | original game NPC |
|---|---|---|
| 15 | 19/6/2866/10/20 | 32/6/2922/10/50 |
| 30 | 23/7/2879/10/20 | 63/12/5651/29/81 |
| 45 | 26/7/2898/10/20 | 76/21/12211/70/80 |
| 60 | 32/8/3504/15/25 | 82/27/16229/82/88 |
| first | 14 20 22 23 - - | 10 11 13 15 27 30 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 15 15 15 (original game NPC: 10 10 10 10 16 29 43 51 70 73 77 82).

First army orders (game min:sec): 0:04 sendIn 1 soldiers -> building 75; 0:20 sendIn 1 soldiers -> building 75; 0:36 sendIn 1 soldiers -> building 75; 1:14 sendIn 1 soldiers -> building 81; 1:30 sendIn 1 soldiers -> building 81; 1:46 sendIn 1 soldiers -> building 81; 2:54 sendIn 1 soldiers -> building 112; 3:10 sendIn 1 soldiers -> building 112; 3:26 sendIn 1 soldiers -> building 112; 3:36 sendIn 1 soldiers -> building 114; 3:52 sendIn 1 soldiers -> building 114; 4:08 sendIn 1 soldiers -> building 114.

#### Game log: claude-fable-5.2

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 7 | 2 | 8 | 12 | 0 | 0 | 8 | 0 | 0 | 7 | 8 | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 41 | 2866 | 5964 |
| 30 | 16 | 0 | 8 | 15 | 0 | 0 | 8 | 0 | 0 | 19 | 8 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 55 | 2879 | 5964 |
| 45 | 14 | 6 | 8 | 20 | 0 | 0 | 8 | 0 | 0 | 26 | 8 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 57 | 2898 | 5964 |
| 60 | 24 | 1 | 8 | 12 | 0 | 0 | 8 | 16 | 0 | 31 | 8 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 78 | 3504 | 7063 |

At the end: buildings (built+sites) guard 8, wood 3, forest 3, ironmine 2, coalmine 2, house 2, barracks 2, hq 1, quarry 1, saw 1, fisher 1, waterhut 1, smelter 1, smith 1, weaponsmith 1, farm 1, mill 1.
People: worker 17, soldier 2, digger 2, builder 2, carrier 2, geologist 2; beds 20. Soldiers: sword 1, bow 1.

Goods produced in the game: fish 114, log 90, stone 83, plank 70, coal 53, ironore 19, grain 16, iron 11, water 8, sword 3, bow 2, pick 1, axe 1, saw 1, shovel 1, rod 1, spear 1.
Goods consumed in the game: fish 108, plank 93, stone 93, log 70, coal 22, ironore 11, iron 11, pick 6, axe 3, shovel 3, hammer 3, sword 2, bow 2, saw 1, rod 1, scythe 1, spear 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (373 building-min): Idle 81%, Waiting for a swordsman: train one at the barracks 19%, Soldiers on the way 0%, Waiting for a soldier 0%
- quarry (59 building-min): Stone pile full, waiting for carriers 69%, Cutting stone 22%, Bringing stone to the pile 9%, Worker picking up a pickaxe 0%, Working 0%
- wood (133 building-min): Log pile full, waiting for carriers 58%, Felling a tree 15%, No grown trees in range inside your border 12%, Waiting for a free settler 8%, Bringing a log to the pile 6%
- saw (59 building-min): Waiting for logs 80%, Sawing planks 15%, Stacking outside 3%, Output pile full, waiting for carriers 1%, Fetching from the pile 0%
- fisher (58 building-min): Fish pile full, waiting for carriers 56%, Waiting for a free settler 16%, Bringing a fish to the pile 15%, Fishing 13%, Worker picking up a fishing rod 0%
- forest (129 building-min): No free ground to plant in range inside your border 57%, Planting a sapling 28%, Waiting for a free settler 14%, Worker picking up a shovel 1%, Idle 0%
- ironmine (68 building-min): Iron ore pile full, waiting for carriers 63%, Waiting for a free settler 26%, Mining iron ore 5%, Needs a worker with a pickaxe 3%, Needs meat or fish: mining stopped 1%
- waterhut (54 building-min): Water pile full, waiting for carriers 88%, Waiting for a free settler 10%, Bringing water to the pile 1%, Fetching water 1%, Worker on the way 0%
- coalmine (69 building-min): Needs bread or fish: mining stopped 29%, Coal pile full, waiting for carriers 24%, Deposit worn out: finding little coal 22%, Waiting for a free settler 9%, Deposit thinning: mining coal 6%
- house (62 building-min): Idle 100%
- smelter (46 building-min): Waiting for iron ore 87%, Output pile full, waiting for carriers 8%, Smelting iron 3%, Stacking outside 1%, Idle 0%
- smith (41 building-min): Waiting for iron 64%, Waiting for coal 32%, Waiting for coal and iron 2%, Worker picking up a hammer 0%, Forging axe 0%
- weaponsmith (39 building-min): Waiting for a free settler 64%, Waiting for iron 33%, Forging sword 1%, Forging bow 1%, Worker picking up a hammer 1%
- barracks (55 building-min): Waiting for weapons from the weaponsmith 81%, Waiting for a free settler to train 16%, Idle 1%, Weapons on the way 1%, Training soldiers 0%
- farm (12 building-min): Grain pile full, waiting for carriers 67%, Sowing a field 16%, Harvesting grain 7%, Bringing grain to the pile 4%, Worker picking up a scythe 4%
- mill (7 building-min): Waiting for a free settler 96%, Idle 4%

Building sites, time per state (site-min): Waiting for materials 16, Builders at work 8, Waiting for a digger 8, Leveling the ground 7, Waiting for a builder 3.

Build order (placed at min:sec, finished at): guard 0:02→0:36, quarry 0:02→0:52, wood 0:04→1:11, saw 0:04→1:31, guard 1:12→1:53, fisher 1:32→2:16, wood 1:32→2:37, forest 1:46→2:38, forest 1:54→2:51, guard 2:52→3:33, guard 3:34→4:32, ironmine 3:58→5:14, waterhut 4:34→6:23, guard 7:08→8:28, coalmine 8:28→9:35, guard 8:32→11:44, house 9:36→11:27, smelter 12:38→13:38, smith 18:30→19:14, weaponsmith 19:38→21:29, barracks 21:32→22:38, guard 22:38→25:01, coalmine 39:08→41:45, barracks 40:24→42:17, wood 42:18→43:31, forest 44:32→45:18, house 45:18→46:12, ironmine 46:16→46:48, farm 47:00→48:17, guard 48:18→51:15, mill 51:16→52:55.

Orders given: armyTarget 197, sendIn 37, place 31, profession 10, sendUnit 9, armyReserve 9, priority 4. None refused.

People changing jobs: new carrier 16, carrier -> worker 13, carrier -> soldier 5, new worker 4, carrier -> geologist 2, new soldier 2.

People's orders (2596 in all, 2561 done): worker rest forest 252, worker gather forest 250, worker mine coalmine 133, worker rest fisher 115, worker gather fisher 114, carrier haul fish fisher -> coalmine 94, worker rest wood 93, worker eat coalmine 93, worker gather wood 90, worker rest quarry 84, worker gather quarry 83, worker rest saw 71, worker toCraft saw 70, worker craft saw 70. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×14.

Fights and contact: first saw player 1 at 52:00.

Your notes (270 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text; the last 30 of 56 kinds):
- 19:38 placed weaponsmith 211,121 at 1178 s
- 20:00 waiting: coalmine: no free pick; ironmine: no free pick; smelter: no free hammer; wood: no free axe; house: materials; farm: materials; waterhut: no spot
- ×4 21:00–24:00 waiting: coalmine: no free pick; ironmine: no free pick; smelter: no free hammer; stonemine: no free pick; wood: no free axe; house: no spot; farm: no spot
- ×2 21:32–40:24 placed barracks 205,101 at 2424 s
- 25:00 waiting: coalmine: no free pick; ironmine: no free pick; smelter: no free hammer; barracks: no spot; wood: no free axe; house: materials; farm: no spot
- ×2 26:00–27:00 waiting: coalmine: no free pick; ironmine: no free pick; smelter: no free hammer; barracks: materials; wood: no free axe; house: no spot; farm: no spot
- ×3 27:32–56:52 starved: stone no (last made 3179 s), wood yes (planks 2875 s); expansion weights rock 3, tree 6
- 28:00 waiting: coalmine: no free pick; ironmine: no free pick; smelter: no free hammer; barracks: materials; house: materials; farm: no spot; waterhut: no spot
- 29:00 waiting: coalmine: no free pick; ironmine: no free pick; smelter: no free hammer; barracks: materials; stonemine: no free pick; waterhut: no spot; saw: no free saw
- ×6 29:32–58:52 starved: stone yes (last made 3179 s), wood yes (planks 2875 s); expansion weights rock 10, tree 6
- 30:00 waiting: coalmine: materials; ironmine: materials; smelter: no free hammer; barracks: materials; stonemine: materials; waterhut: no spot; saw: no free saw
- ×7 31:00–37:00 waiting: coalmine: materials; ironmine: materials; smelter: no free hammer; barracks: materials; stonemine: materials; waterhut: no spot; saw: no spot
- ×2 38:00–39:00 waiting: coalmine: materials; ironmine: materials; smelter: no free hammer; barracks: materials; stonemine: materials; wood: no spot; waterhut: no spot
- 40:00 waiting: coalmine: no free pick; ironmine: no free pick; smelter: no free hammer; barracks: materials; stonemine: no free pick; wood: no spot; waterhut: no spot
- 41:00 waiting: coalmine: no free pick; ironmine: no free pick; smelter: no free hammer; wood: materials; house: materials; farm: no spot; waterhut: no spot
- 42:00 waiting: coalmine: no free pick; ironmine: no free pick; smelter: no free hammer; stonemine: no free pick; wood: materials; house: no spot; farm: no spot
- 42:18 placed wood 185,101 at 2538 s
- ×2 43:00–44:00 waiting: coalmine: no free pick; ironmine: no free pick; smelter: no free hammer; forest: materials; house: materials; farm: no spot; waterhut: no spot
- 44:32 placed forest 189,89 at 2672 s
- 45:00 waiting: coalmine: no free pick; ironmine: no free pick; smelter: no free hammer; house: materials; farm: materials; waterhut: no spot; quarry: no free pick
- 46:00 waiting: coalmine: no free pick; ironmine: no free pick; smelter: no free hammer; stonemine: no free pick; farm: materials; waterhut: no spot; quarry: no free pick
- ×13 47:00–59:00 59 min: plank 1 stone 8 log 24 coal 31 iron 0 ironore 8 | free: axe 0 pick -1 hammer 0 saw 1 shovel 0 scythe 1 rod 1 | pick hold 0
- 47:00 waiting: coalmine: no free pick; ironmine: no free pick; waterhut: no spot; quarry: no free pick; fisher: no spot; coalmine: no free pick; tower: no spot
- 48:00 waiting: guard: materials; coalmine: no free pick; ironmine: no free pick; smelter: no free hammer; stonemine: no free pick; waterhut: no spot; mill: no spot
- ×2 49:00–50:00 waiting: coalmine: no free pick; ironmine: no free pick; smelter: no free hammer; stonemine: no free pick; waterhut: no spot; mill: no spot; quarry: no free pick
- 51:00 waiting: coalmine: no free pick; ironmine: no free pick; smelter: no free hammer; waterhut: no spot; mill: materials; quarry: no free pick; saw: no spot
- 51:16 placed mill 203,91 at 3076 s
- ×4 52:00–56:00 waiting: guard: materials; coalmine: no free pick; ironmine: no free pick; smelter: no free hammer; farm: no spot; waterhut: no spot; bakery: no spot
- 53:00 waiting: guard: materials; coalmine: no free pick; ironmine: no free pick; smelter: no free hammer; stonemine: no free pick; farm: no spot; waterhut: no spot
- ×3 57:00–59:00 waiting: guard: materials; coalmine: no free pick; ironmine: no free pick; smelter: no free hammer; stonemine: no free pick; waterhut: no spot; bakery: no spot


Script: 1800 turns, 0.1 ms average, worst 2 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: claude-fable-5.2 (Gold) vs original game NPC: undecided

| min | claude-fable-5.2 | original game NPC |
|---|---|---|
| 15 | 20/6/2963/10/30 | 32/6/3154/10/50 |
| 30 | 27/6/2995/10/30 | 62/14/6099/31/69 |
| 45 | 27/6/2995/10/30 | 76/17/8095/53/97 |
| 60 | 27/6/2995/10/30 | 84/24/13286/71/99 |
| first | - - - - - - | 9 10 13 14 43 41 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 11 19 31 44 47 53 62 64 71).

First army orders (game min:sec): 0:04 sendIn 1 soldiers -> building 74; 0:20 sendIn 1 soldiers -> building 74; 0:36 sendIn 1 soldiers -> building 74; 1:14 sendIn 1 soldiers -> building 81; 1:30 sendIn 1 soldiers -> building 81; 1:46 sendIn 1 soldiers -> building 81; 2:02 sendIn 1 soldiers -> building 81; 2:18 sendIn 1 soldiers -> building 81; 3:42 sendIn 1 soldiers -> building 110; 3:58 sendIn 1 soldiers -> building 110; 4:14 sendIn 1 soldiers -> building 110; 4:30 sendIn 1 soldiers -> building 110.

#### Game log: claude-fable-5.2

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 17 | 12 | 8 | 12 | 0 | 0 | 8 | 6 | 8 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 12 | 49 | 2963 | 5525 |
| 30 | 24 | 8 | 16 | 12 | 12 | 0 | 28 | 30 | 14 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 6 | 112 | 2995 | 7235 |
| 45 | 24 | 8 | 16 | 12 | 12 | 0 | 28 | 30 | 14 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 6 | 112 | 2995 | 7235 |
| 60 | 24 | 8 | 16 | 12 | 12 | 0 | 28 | 30 | 14 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 6 | 112 | 2995 | 7235 |

At the end: buildings (built+sites) guard 6, wood 2, quarry 2, forest 2, house 2, farm 2, waterhut 2, look 2, hq 1, saw 1, fisher 1, coalmine 1, mill 1, bakery 1, pigfarm 1.
People: worker 18, carrier 6, digger 2, builder 2, geologist 2, soldier 1; beds 20. Soldiers: sword 1.

Goods produced in the game: stone 83, log 81, grain 64, plank 61, water 48, flour 26, bread 12, fish 11, coal 8, pig 8.
Goods consumed in the game: stone 85, plank 77, log 61, grain 34, water 20, flour 12, pick 5, fish 5, axe 2, shovel 2, scythe 2, saw 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (323 building-min): Idle 69%, Waiting for a swordsman: train one at the barracks 31%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (114 building-min): Log pile full, waiting for carriers 75%, Felling a tree 16%, Bringing a log to the pile 6%, Waiting for a free settler 3%, Worker picking up an axe 0%
- saw (59 building-min): Output pile full, waiting for carriers 80%, Sawing planks 13%, Waiting for logs 3%, Stacking outside 3%, Fetching from the pile 0%
- fisher (59 building-min): Fish pile full, waiting for carriers 98%, Fishing 1%, Bringing a fish to the pile 1%, Worker picking up a fishing rod 0%, Idle 0%
- quarry (98 building-min): Stone pile full, waiting for carriers 80%, Cutting stone 13%, Bringing stone to the pile 6%, Worker picking up a pickaxe 0%, Working 0%
- forest (109 building-min): No free ground to plant in range inside your border 70%, Planting a sapling 25%, Waiting for a free settler 4%, Worker picking up a shovel 0%, Idle 0%
- house (98 building-min): Idle 100%
- farm (94 building-min): Grain pile full, waiting for carriers 90%, Sowing a field 5%, Harvesting grain 3%, Bringing grain to the pile 2%, Worker picking up a scythe 1%
- coalmine (47 building-min): Coal pile full, waiting for carriers 96%, Mining coal 2%, Worker picking up a pickaxe 1%, Bringing coal out 0%, Working 0%
- waterhut (90 building-min): Water pile full, waiting for carriers 95%, Fetching water 3%, Bringing water to the pile 2%, Worker on the way 0%, Idle 0%
- mill (46 building-min): Output pile full, waiting for carriers 95%, Grinding flour 3%, Stacking outside 1%, Fetching from the pile 0%, Waiting for grain 0%
- bakery (42 building-min): Output pile full, waiting for carriers 92%, Baking bread 6%, Stacking outside 1%, Waiting for flour 0%, Waiting for flour and water 0%
- pigfarm (40 building-min): Output pile full, waiting for carriers 94%, Raising a pig 5%, Waiting for water 1%, Worker on the way 1%, Stacking outside 1%
- look (73 building-min): Scout on watch 99%, Scout on the way 0%, Working 0%, Idle 0%

Building sites, time per state (site-min): Waiting for a digger 9, Leveling the ground 7, Builders at work 7, Waiting for a builder 5, Waiting for materials 4.

Build order (placed at min:sec, finished at): guard 0:02→0:34, wood 0:02→0:51, saw 0:04→1:10, fisher 0:04→1:28, guard 1:12→2:20, quarry 2:20→3:14, guard 3:40→4:47, wood 4:08→5:11, forest 4:28→5:32, forest 4:48→5:52, guard 4:52→7:44, house 5:20→8:09, guard 7:54→9:07, farm 9:08→10:34, guard 10:36→12:11, coalmine 10:36→12:32, waterhut 11:08→13:02, house 12:36→13:30, mill 13:04→14:02, farm 14:18→15:55, waterhut 15:56→16:55, bakery 16:56→18:00, quarry 18:02→18:44, pigfarm 19:10→20:09, look 20:10→21:09, look 25:02→25:35.

Orders given: sendIn 34, place 26, profession 6, sendUnit 2. None refused.

People changing jobs: new carrier 18, carrier -> worker 16, new worker 2, carrier -> geologist 2, new soldier 1.

People's orders (2005 in all, 1976 done): worker rest forest 192, worker gather forest 190, worker rest farm 136, worker gather farm 134, worker rest quarry 85, worker rest wood 83, worker gather quarry 83, worker gather wood 81, carrier haul log wood -> saw 65, worker rest saw 62, worker toCraft saw 61, worker craft saw 61, worker rest waterhut 50, worker gather waterhut 48. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×6.

Your notes (302 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text; the last 30 of 37 kinds):
- 2:00 waiting: quarry: materials; wood: materials; forest: materials; waterhut: materials; quarry: materials
- ×2 2:20–18:02 placed quarry 49,131 at 1082 s
- 3:00 waiting: guard: materials; wood: materials; forest: materials; waterhut: materials
- 4:00 waiting: wood: materials; forest: materials; waterhut: materials
- 4:48 placed forest 45,109 at 288 s
- 5:00 waiting: sites at cap
- ×4 6:00–9:00 waiting: farm: materials; waterhut: materials
- ×2 9:08–14:18 placed farm 69,125 at 858 s
- 10:00 waiting: guard: materials; coalmine: no spot; wood: no free axe; waterhut: materials; mill: materials; quarry: no free pick
- 10:36 placed guard 111,129, coalmine 93,119 at 636 s
- 11:00 waiting: wood: no free axe; waterhut: materials; mill: materials; quarry: materials; saw: no free saw
- ×2 12:00–13:00 waiting: wood: no free axe; mill: materials; quarry: materials; saw: no free saw
- 12:36 placed house 45,125 at 756 s
- 14:00 waiting: wood: no free axe; farm: materials; bakery: materials; quarry: materials; saw: no free saw
- 15:00 waiting: stonemine: no spot; wood: no free axe; waterhut: no spot; bakery: materials; quarry: materials; saw: no free saw; fisher: no free rod
- 15:56 placed waterhut 41,131 at 956 s
- 16:00 waiting: stonemine: no spot; wood: no free axe; bakery: materials; quarry: materials; saw: no free saw; fisher: no free rod; pigfarm: no spot
- 16:56 placed bakery 53,109 at 1016 s
- ×2 17:00–18:00 waiting: stonemine: no spot; wood: no free axe; quarry: materials; saw: no free saw; fisher: no free rod; pigfarm: no spot; look: no spot
- 19:00 waiting: stonemine: no free pick; wood: no free axe; saw: no free saw; fisher: no free rod; pigfarm: materials; look: no spot
- 19:10 placed pigfarm 61,125 at 1150 s
- 20:00 waiting: stonemine: no free pick; wood: no free axe; saw: no free saw; fisher: no free rod; look: materials
- ×2 20:10–25:02 placed look 35,103 at 1502 s
- ×8 21:00–29:00 waiting: wood: no free axe; saw: no free saw; fisher: no free rod; butcher: no free axe
- 25:00 waiting: wood: no free axe; saw: no free saw; fisher: no free rod; butcher: no free axe; look: no spot
- 29:50 starved: stone no (last made 1569 s), wood yes (planks 1525 s); expansion weights rock 3, tree 6
- 30:00 waiting: saw: no free saw; fisher: no free rod; butcher: no free axe
- ×30 30:10–59:10 jam: nothing made or delivered for 1980 s; refused: 
- ×29 31:00–59:00 waiting: stonemine: jam; saw: jam; fisher: jam; butcher: jam
- ×15 31:50–59:50 starved: stone yes (last made 1569 s), wood yes (planks 1525 s); expansion weights rock 10, tree 6


Script: 1800 turns, 0.1 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: claude-fable-5.2 (Blue) vs original game NPC: undecided

| min | claude-fable-5.2 | original game NPC |
|---|---|---|
| 15 | 8/3/1914/10/10 | 30/6/3047/10/40 |
| 30 | 8/3/1914/10/10 | 63/16/6823/29/81 |
| 45 | 8/3/1914/10/10 | 78/20/11173/59/81 |
| 60 | 8/3/1914/10/10 | 82/25/14904/70/90 |
| first | - - - - - - | 7 8 9 11 38 36 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 15 27 29 30 44 59 63 66 70).

First army orders (game min:sec): 0:04 sendIn 1 soldiers -> building 75; 0:20 sendIn 1 soldiers -> building 75; 1:16 sendIn 1 soldiers -> building 81; 1:32 sendIn 1 soldiers -> building 81; 1:48 sendIn 1 soldiers -> building 81; 2:04 sendIn 1 soldiers -> building 81; 2:20 sendIn 1 soldiers -> building 81; 2:30 sendIn 1 soldiers -> building 107; 2:46 sendIn 1 soldiers -> building 107; 3:02 sendIn 1 soldiers -> building 107; 3:18 sendIn 1 soldiers -> building 107; 3:34 sendIn 1 soldiers -> building 107.

#### Game log: claude-fable-5.2

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 16 | 14 | 0 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 24 | 1914 | 3756 |
| 30 | 16 | 14 | 0 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 24 | 1914 | 3756 |
| 45 | 16 | 14 | 0 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 24 | 1914 | 3756 |
| 60 | 16 | 14 | 0 | 14 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 24 | 1914 | 3756 |

At the end: buildings (built+sites) guard 3, hq 1, wood 1, saw 1, fisher 1, coalmine 1.
People: soldier 6, worker 3, digger 2, builder 2, carrier 2, geologist 1; beds 0. Soldiers: sword 3, bow 3.

Goods produced in the game: log 20, plank 8, fish 8.
Goods consumed in the game: plank 18, stone 18, log 8, axe 1, pick 1, saw 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (173 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (59 building-min): Log pile full, waiting for carriers 90%, Felling a tree 7%, Bringing a log to the pile 3%, Worker picking up an axe 0%, Working 0%
- saw (59 building-min): Output pile full, waiting for carriers 97%, Sawing planks 2%, Waiting for logs 1%, Stacking outside 0%, Worker picking up a saw 0%
- fisher (59 building-min): Fish pile full, waiting for carriers 98%, Bringing a fish to the pile 1%, Worker picking up a fishing rod 0%, Fishing 0%, Idle 0%
- coalmine (57 building-min): Waiting for a free settler 100%, Idle 0%

Building sites, time per state (site-min): Waiting for a digger 2, Leveling the ground 2, Builders at work 2, Waiting for materials 1, Waiting for a builder 1.

Build order (placed at min:sec, finished at): guard 0:02→0:31, wood 0:02→0:53, saw 0:04→1:14, fisher 0:06→1:28, guard 1:14→2:18, coalmine 2:20→3:15, guard 2:28→4:05.

Orders given: sendIn 14, place 7, profession 1, sendUnit 1. Refused (order: reason, times): place: Too close to another building ×1.

People changing jobs: carrier -> worker 3, carrier -> geologist 1, new soldier 1.

People's orders (215 in all, 206 done): worker rest wood 21, worker gather wood 20, soldier garrison guard 17, builder build guard 14, soldier return 12, carrier haul log wood -> saw 12, carrier haul stone pile -> guard 9, worker rest saw 9, worker rest fisher 9, worker toCraft saw 8, worker craft saw 8, worker gather fisher 8, digger dig guard 6, carrier haul plank pile -> guard 6. None failed.

Your notes (321 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×60 0:00–59:00 59 min: plank 14 stone 0 log 16 coal 0 iron 0 ironore 0 | free: axe 1 pick 3 hammer 3 saw 0 shovel 2 scythe 2 rod 0 | pick hold 1
- ×60 0:00–59:00 built: quarry 0 wood 1 coal 1 iron 0 smelter 0 smith 0 weapons 0 barracks 0 | houses 0 carriers 2 beds 10 pop 10 | guard spots 8 quarry spots 0 | sites 0
- 0:00 waiting: guard: no spot; quarry: no spot; wood: no spot; saw: no spot; fisher: no spot; wood: no spot; waterhut: no spot
- ×60 0:00–59:00 army: soldiers 6, free 5, military 3 (empty 0), need 6, enemy soldiers 0, enemy buildings 0
- 0:02 placed guard 195,133, wood 199,111 at 2 s
- 1:00 waiting: guard: materials; quarry: no spot; coalmine: materials; wood: materials; forest: materials; waterhut: no spot; quarry: no spot
- 1:14 placed guard 183,131 at 74 s
- 2:00 waiting: quarry: no spot; coalmine: materials; ironmine: materials; wood: materials; forest: materials; waterhut: no spot; quarry: no spot
- 2:20 placed coalmine 199,139 at 140 s
- ×2 3:00–4:00 waiting: quarry: no spot; ironmine: materials; wood: materials; forest: materials; waterhut: materials; quarry: no spot
- ×4 4:00–10:00 starved: stone yes (last made 0 s), wood no (planks 176 s); expansion weights rock 10, tree 1
- ×6 5:00–10:00 waiting: guard: materials; quarry: no spot; ironmine: materials; wood: materials; forest: materials; waterhut: no spot; quarry: no spot
- ×50 10:54–59:54 jam: nothing made or delivered for 3181 s; refused: place: Too close to another building
- ×49 11:00–59:00 waiting: guard: materials; quarry: jam; ironmine: jam; wood: jam; forest: jam; waterhut: jam; quarry: jam
- ×24 12:00–58:00 starved: stone yes (last made 0 s), wood yes (planks 176 s); expansion weights rock 10, tree 6


Script: 1800 turns, 0.1 ms average, worst 2 ms, 0 over 0.3 s, 0 errors. Orders refused: place 1 of 8.

### Map 20261030: claude-fable-5.2 (Gold) vs original game NPC: undecided

| min | claude-fable-5.2 | original game NPC |
|---|---|---|
| 15 | 16/6/2785/10/10 | 24/6/3070/10/40 |
| 30 | 28/9/3715/16/24 | 32/6/3529/10/55 |
| 45 | 31/11/4359/18/22 | 59/13/6392/20/90 |
| 60 | 31/11/4359/18/22 | 75/18/10835/55/95 |
| first | 9 14 16 20 - - | 7 9 34 35 53 51 |

Soldiers every 5 min: 10 10 10 10 10 16 18 18 18 18 18 18 (original game NPC: 10 10 10 10 10 10 16 16 20 22 48 55).

First army orders (game min:sec): 0:04 sendIn 1 soldiers -> building 74; 0:20 sendIn 1 soldiers -> building 74; 1:18 sendIn 1 soldiers -> building 81; 1:34 sendIn 1 soldiers -> building 81; 1:50 sendIn 1 soldiers -> building 81; 2:14 sendIn 1 soldiers -> building 101; 2:30 sendIn 1 soldiers -> building 101; 2:46 sendIn 1 soldiers -> building 101; 3:02 sendIn 1 soldiers -> building 101; 3:18 sendIn 1 soldiers -> building 101; 3:34 sendIn 1 soldiers -> building 101; 5:48 sendIn 1 soldiers -> building 120.

#### Game log: claude-fable-5.2

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 4 | 13 | 10 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 10 | 2785 | 4792 |
| 30 | 16 | 7 | 8 | 12 | 0 | 0 | 0 | 8 | 0 | 16 | 4 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 48 | 3715 | 5612 |
| 45 | 16 | 0 | 8 | 12 | 0 | 0 | 8 | 8 | 0 | 11 | 0 | 0 | 0 | 0 | 5 | 6 | 5 | 0 | 48 | 4359 | 6726 |
| 60 | 16 | 0 | 8 | 13 | 0 | 0 | 8 | 8 | 0 | 17 | 0 | 3 | 0 | 0 | 9 | 10 | 10 | 0 | 61 | 4359 | 6726 |

At the end: buildings (built+sites) guard 11, wood 2, coalmine 2, barracks 2, forest 2, house 2, hq 1, quarry 1, saw 1, fisher 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, farm 1, waterhut 1.
People: worker 14, soldier 4, digger 2, builder 2, carrier 2, geologist 2; beds 20. Soldiers: sword 3, bow 1.

Goods produced in the game: fish 109, coal 94, stone 85, log 75, plank 63, ironore 40, iron 40, sword 13, bow 12, spear 12, grain 8, water 8.
Goods consumed in the game: fish 102, stone 95, plank 87, coal 77, log 63, ironore 40, iron 37, pick 5, sword 4, hammer 3, axe 2, shovel 2, bow 2, spear 2, saw 1, rod 1, scythe 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (491 building-min): Idle 69%, Waiting for a swordsman: train one at the barracks 31%, Soldiers on the way 0%, Waiting for a soldier 0%
- quarry (59 building-min): Stone pile full, waiting for carriers 54%, Cutting stone 28%, Bringing stone to the pile 18%, Worker picking up a pickaxe 0%, Working 0%
- wood (99 building-min): Log pile full, waiting for carriers 75%, Felling a tree 16%, Bringing a log to the pile 5%, Waiting for a free settler 3%, Worker picking up an axe 1%
- saw (59 building-min): Waiting for logs 74%, Sawing planks 14%, Output pile full, waiting for carriers 9%, Stacking outside 3%, Fetching from the pile 0%
- fisher (58 building-min): Waiting for a free settler 35%, Fish pile full, waiting for carriers 34%, Bringing a fish to the pile 16%, Fishing 15%, Idle 0%
- coalmine (106 building-min): Waiting for a free settler 58%, Mining coal 15%, Needs bread or fish: mining stopped 12%, Needs a worker with a pickaxe 7%, Coal pile full, waiting for carriers 4%
- ironmine (55 building-min): Needs meat or fish: mining stopped 51%, Waiting for a free settler 33%, Mining iron ore 11%, Deposit thinning: mining iron ore 2%, Bringing iron ore out 2%
- smelter (52 building-min): Waiting for iron ore 52%, Waiting for a free settler 28%, Smelting iron 10%, Waiting for coal and iron ore 5%, Output pile full, waiting for carriers 3%
- smith (47 building-min): Waiting for iron 48%, Waiting for coal and iron 31%, Waiting for a free settler 20%, Worker picking up a hammer 0%, Idle 0%
- weaponsmith (45 building-min): Waiting for iron 58%, Waiting for a free settler 17%, Waiting for coal and iron 9%, Forging sword 4%, Forging bow 3%
- barracks (72 building-min): Waiting for a free settler to train 61%, Waiting for weapons from the weaponsmith 37%, Weapons on the way 2%, Training soldiers 1%, Idle 0%
- forest (77 building-min): No free ground to plant in range inside your border 64%, Planting a sapling 32%, Waiting for a free settler 4%, Worker picking up a shovel 1%, Idle 0%
- house (71 building-min): Idle 100%
- farm (35 building-min): Grain pile full, waiting for carriers 92%, Waiting for a free settler 3%, Sowing a field 2%, Idle 1%, Harvesting grain 1%
- waterhut (30 building-min): Water pile full, waiting for carriers 96%, Worker on the way 1%, Fetching water 1%, Bringing water to the pile 1%, Idle 0%

Building sites, time per state (site-min): Waiting for materials 13, Waiting for a digger 10, Leveling the ground 8, Builders at work 8, Waiting for a builder 5.

Build order (placed at min:sec, finished at): guard 0:02→0:30, quarry 0:02→0:53, wood 0:04→1:09, saw 0:04→1:29, guard 1:16→1:51, fisher 1:30→2:12, coalmine 1:52→2:51, guard 2:12→3:36, ironmine 2:52→4:31, guard 5:46→7:03, smelter 7:04→8:11, guard 8:12→10:05, coalmine 9:00→10:53, guard 10:06→13:47, smith 10:54→13:22, weaponsmith 14:06→15:06, guard 15:08→17:32, barracks 17:32→19:01, wood 17:32→19:47, guard 19:16→20:29, forest 19:48→21:22, forest 19:54→21:34, house 21:36→22:33, farm 22:34→24:48, house 24:50→26:02, barracks 27:10→28:32, guard 28:34→29:39, waterhut 28:42→30:25, guard 30:26→31:36, guard 31:46→32:58.

Orders given: sendIn 60, armyTarget 53, place 30, profession 7, sendUnit 7, priority 4, armyReserve 1. None refused.

People changing jobs: new carrier 15, carrier -> worker 10, carrier -> soldier 8, new worker 4, new soldier 2, carrier -> geologist 1, new geologist 1.

People's orders (2685 in all, 2652 done): worker rest forest 166, worker gather forest 164, worker mine coalmine 147, worker rest fisher 110, worker gather fisher 109, worker rest coalmine 100, worker rest quarry 86, worker gather quarry 85, worker rest wood 77, worker gather wood 75, carrier haul fish fisher -> coalmine 73, worker eat coalmine 72, worker rest saw 64, worker toCraft saw 63. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×16.

Your notes (271 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text; the last 30 of 39 kinds):
- 3:00 waiting: wood: materials; forest: materials; waterhut: materials; fisher: no free rod
- 4:00 waiting: guard: materials; wood: materials; forest: materials; waterhut: materials; fisher: no free rod
- 5:00 waiting: guard: materials; smelter: materials; wood: materials; forest: materials; house: no spot; farm: no spot; waterhut: materials
- ×2 6:00–7:00 waiting: smelter: materials; wood: materials; forest: materials; house: materials; farm: materials; waterhut: no spot; fisher: no free rod
- 7:04 placed smelter 47,125 at 424 s
- 8:00 waiting: guard: materials; wood: materials; forest: materials; house: materials; farm: materials; waterhut: no spot; fisher: no free rod
- 9:00 waiting: ironmine: no free pick; smith: materials; weaponsmith: materials; wood: materials; forest: no spot; house: no spot; farm: no spot
- 10:00 waiting: ironmine: no free pick; smith: materials; weaponsmith: materials; wood: materials; forest: materials; house: no spot; farm: no spot
- ×4 11:00–14:00 waiting: ironmine: no free pick; weaponsmith: materials; wood: materials; forest: materials; house: materials; farm: no spot; waterhut: no spot
- 14:06 placed weaponsmith 31,123 at 846 s
- 15:00 waiting: guard: materials; coalmine: no free pick; ironmine: no free pick; stonemine: no free pick; wood: materials; forest: materials; house: materials
- ×2 16:00–17:00 waiting: coalmine: no free pick; ironmine: no free pick; barracks: materials; stonemine: no free pick; wood: materials; forest: no spot; house: no spot
- 17:32 placed barracks 31,129, wood 19,83 at 1052 s
- 18:00 waiting: coalmine: no free pick; ironmine: no free pick; wood: no free axe; forest: materials; house: materials; farm: no spot; waterhut: no spot
- 19:00 waiting: coalmine: no free pick; ironmine: no free pick; stonemine: no free pick; wood: no free axe; forest: materials; house: no spot; farm: no spot
- ×2 20:00–21:00 waiting: coalmine: no free pick; ironmine: no free pick; stonemine: no free pick; wood: no free axe; house: materials; farm: no spot; waterhut: no spot
- ×2 21:36–24:50 placed house 41,103 at 1490 s
- 22:00 waiting: coalmine: no free pick; ironmine: no free pick; stonemine: no free pick; wood: no free axe; farm: materials; waterhut: no spot; quarry: no free pick
- ×37 23:00–59:00 59 min: plank 0 stone 8 log 16 coal 20 iron 0 ironore 1 | free: axe 0 pick -1 hammer 0 saw 0 shovel 0 scythe 1 rod 0 | pick hold 0
- ×2 23:00–24:00 waiting: coalmine: no free pick; ironmine: no free pick; stonemine: no free pick; wood: no free axe; house: materials; waterhut: no spot; mill: no spot
- 25:00 waiting: coalmine: no free pick; ironmine: no free pick; barracks: no spot; stonemine: no free pick; wood: no free axe; waterhut: materials; mill: no spot
- 26:00 waiting: coalmine: no free pick; ironmine: no free pick; barracks: materials; stonemine: no free pick; wood: no free axe; waterhut: no spot; mill: no spot
- 27:00 waiting: coalmine: no free pick; ironmine: no free pick; barracks: materials; wood: no free axe; waterhut: materials; mill: no spot; quarry: no free pick
- 27:10 placed barracks 5,123 at 1630 s
- ×2 28:00–30:00 waiting: guard: materials; coalmine: no free pick; ironmine: no free pick; stonemine: no free pick; wood: no free axe; waterhut: no spot; mill: no spot
- ×4 29:00–33:00 waiting: coalmine: no free pick; ironmine: no free pick; stonemine: no free pick; wood: no free axe; waterhut: materials; mill: no spot; quarry: no free pick
- ×3 33:16–37:16 starved: stone no (last made 2003 s), wood yes (planks 1735 s); expansion weights rock 3, tree 6
- ×4 34:00–37:00 waiting: guard: materials; coalmine: no free pick; ironmine: no free pick; waterhut: materials; mill: no spot; quarry: no free pick; saw: no free saw
- ×22 38:00–59:00 waiting: guard: materials; coalmine: no free pick; ironmine: no free pick; stonemine: no free pick; waterhut: no spot; mill: no spot; saw: no free saw
- ×11 39:16–59:16 starved: stone yes (last made 2003 s), wood yes (planks 1735 s); expansion weights rock 10, tree 6


Script: 1800 turns, 0.2 ms average, worst 2 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: claude-fable-5.2 (Blue) vs original game NPC: undecided

| min | claude-fable-5.2 | original game NPC |
|---|---|---|
| 15 | 18/8/3440/10/10 | 25/6/3049/10/40 |
| 30 | 26/9/3456/10/20 | 52/6/3492/10/80 |
| 45 | 26/9/3456/10/20 | 68/12/7618/47/83 |
| 60 | 26/9/3456/10/20 | 74/20/13414/65/85 |
| first | 14 15 18 19 - - | 14 15 16 19 40 40 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 10 16 39 47 53 59 65).

First army orders (game min:sec): 0:04 sendIn 1 soldiers -> building 75; 0:20 sendIn 1 soldiers -> building 75; 0:36 sendIn 1 soldiers -> building 75; 1:18 sendIn 1 soldiers -> building 81; 1:34 sendIn 1 soldiers -> building 81; 1:50 sendIn 1 soldiers -> building 81; 2:06 sendIn 1 soldiers -> building 81; 3:26 sendIn 1 soldiers -> building 110; 3:42 sendIn 1 soldiers -> building 110; 3:58 sendIn 1 soldiers -> building 110; 4:14 sendIn 1 soldiers -> building 110; 4:30 sendIn 1 soldiers -> building 110.

#### Game log: claude-fable-5.2

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 5 | 4 | 4 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 9 | 3440 | 5901 |
| 30 | 16 | 1 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 22 | 0 | 0 | 0 | 0 | 2 | 1 | 1 | 0 | 42 | 3456 | 5901 |
| 45 | 16 | 1 | 8 | 12 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 7 | 0 | 0 | 4 | 4 | 4 | 0 | 48 | 3456 | 5901 |
| 60 | 16 | 1 | 8 | 11 | 0 | 0 | 0 | 0 | 0 | 24 | 2 | 4 | 0 | 0 | 7 | 6 | 7 | 0 | 54 | 3456 | 5901 |

At the end: buildings (built+sites) guard 9, wood 3, coalmine 2, forest 2, hq 1, quarry 1, saw 1, fisher 1, ironmine 1, smelter 1, smith 1, weaponsmith 1, barracks 1, house 1.
People: worker 13, digger 2, builder 2, carrier 2, soldier 1, geologist 1; beds 10. Soldiers: sword 1.

Goods produced in the game: fish 142, coal 69, stone 63, log 58, plank 46, ironore 27, iron 24, sword 7, bow 7, spear 6.
Goods consumed in the game: fish 137, stone 73, plank 69, log 46, coal 45, ironore 25, iron 20, pick 5, hammer 3, axe 2, shovel 2, saw 1, rod 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (464 building-min): Idle 60%, Waiting for a swordsman: train one at the barracks 40%, Soldiers on the way 0%, Waiting for a soldier 0%
- quarry (59 building-min): Stone pile full, waiting for carriers 76%, Cutting stone 17%, Bringing stone to the pile 7%, Worker picking up a pickaxe 0%, Working 0%
- wood (153 building-min): Log pile full, waiting for carriers 50%, Waiting for a free settler 36%, Felling a tree 9%, Bringing a log to the pile 4%, No grown trees in range inside your border 1%
- saw (58 building-min): Waiting for logs 87%, Sawing planks 10%, Stacking outside 2%, Worker picking up a saw 0%, Fetching from the pile 0%
- fisher (57 building-min): Fish pile full, waiting for carriers 35%, Waiting for a free settler 32%, Fishing 14%, Bringing a fish to the pile 12%, No fish in range inside your border 7%
- coalmine (100 building-min): Coal pile full, waiting for carriers 32%, Waiting for a free settler 22%, Needs bread or fish: mining stopped 13%, Deposit worn out: finding little coal 13%, Deposit thinning: mining coal 10%
- ironmine (51 building-min): Needs meat or fish: mining stopped 67%, Waiting for a free settler 23%, Mining iron ore 8%, Bringing iron ore out 1%, Worker picking up a pickaxe 0%
- smelter (46 building-min): Waiting for iron ore 72%, Waiting for a free settler 15%, Smelting iron 7%, Waiting for coal and iron ore 2%, Waiting for coal 2%
- smith (45 building-min): Waiting for coal and iron 85%, Waiting for a free settler 14%, Worker picking up a hammer 0%, Idle 0%, Working 0%
- weaponsmith (43 building-min): Waiting for iron 42%, Output pile full, waiting for carriers 31%, Waiting for a free settler 9%, Waiting for coal 6%, Waiting for coal and iron 4%
- forest (82 building-min): No free ground to plant in range inside your border 72%, Planting a sapling 22%, Waiting for a free settler 5%, Worker picking up a shovel 0%, Idle 0%
- barracks (41 building-min): Waiting for a free settler to train 84%, Waiting for weapons from the weaponsmith 16%, Idle 0%
- house (39 building-min): Idle 100%

Building sites, time per state (site-min): Waiting for a digger 8, Builders at work 6, Leveling the ground 5, Waiting for materials 4, Waiting for a builder 4.

Build order (placed at min:sec, finished at): guard 0:02→0:43, quarry 0:02→1:00, wood 0:04→1:14, saw 0:04→1:35, guard 1:16→2:15, fisher 1:36→2:57, coalmine 1:36→3:22, wood 1:38→3:43, guard 3:24→4:41, guard 4:44→6:06, guard 6:54→8:03, ironmine 8:04→9:06, guard 9:06→10:17, guard 10:24→11:32, guard 11:42→12:50, smelter 12:54→13:57, smith 14:02→14:41, coalmine 15:00→16:17, weaponsmith 16:18→17:11, forest 17:12→17:45, barracks 18:00→18:39, guard 18:46→19:51, forest 19:52→20:24, house 20:24→20:53, wood 21:04→21:55.

Orders given: armyTarget 53, sendIn 37, place 25, profession 13, sendUnit 4, priority 3, armyReserve 1. None refused.

People changing jobs: carrier -> worker 9, new carrier 6, new worker 4, new soldier 2, carrier -> geologist 1.

People's orders (2233 in all, 2206 done): worker mine coalmine 170, worker rest forest 144, worker rest fisher 142, worker gather fisher 142, worker gather forest 142, carrier haul fish fisher -> coalmine 122, worker eat coalmine 121, worker rest coalmine 76, worker rest quarry 64, worker gather quarry 63, worker rest wood 60, worker gather wood 58, builder build guard 50, worker rest saw 47. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×10.

Your notes (272 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text; the last 30 of 39 kinds):
- 4:00 waiting: forest: materials; waterhut: materials
- 5:00 waiting: ironmine: materials; forest: materials; house: no spot; farm: no spot; waterhut: materials; saw: no free saw
- 6:00 waiting: ironmine: materials; forest: materials; house: materials; farm: materials; waterhut: materials; saw: no free saw
- ×2 7:00–8:00 waiting: ironmine: materials; forest: materials; house: materials; farm: materials; waterhut: materials
- 8:04 placed ironmine 193,141 at 484 s
- 9:00 waiting: guard: materials; forest: materials; house: materials; farm: materials; waterhut: materials; fisher: no free rod
- 10:00 waiting: smelter: materials; wood: no free axe; forest: materials; house: materials; farm: materials; waterhut: materials; quarry: no spot
- ×2 11:00–12:00 waiting: smelter: materials; wood: no free axe; forest: materials; house: materials; farm: materials; waterhut: no spot; quarry: no spot
- 12:54 placed smelter 195,127 at 774 s
- 13:00 waiting: wood: no free axe; forest: materials; house: materials; farm: materials; waterhut: materials; quarry: no spot; fisher: no free rod
- 14:00 waiting: coalmine: materials; ironmine: materials; smith: materials; weaponsmith: materials; wood: no free axe; forest: no spot; house: no spot
- 14:02 placed smith 201,127 at 842 s
- 15:00 waiting: ironmine: no free pick; weaponsmith: materials; stonemine: no free pick; wood: no free axe; forest: materials; house: no spot; farm: no spot
- 16:00 waiting: coalmine: no free pick; ironmine: no free pick; weaponsmith: materials; wood: no free axe; forest: materials; house: no spot; farm: no spot
- 16:18 placed weaponsmith 189,125 at 978 s
- ×2 17:00–19:00 waiting: coalmine: no free pick; ironmine: no free pick; stonemine: no free pick; wood: no free axe; forest: materials; house: no spot; farm: no spot
- 18:00 placed barracks 187,119 at 1080 s
- 18:00 waiting: coalmine: no free pick; ironmine: no free pick; stonemine: no free pick; wood: no free axe; forest: no spot; house: no spot; farm: no spot
- 19:52 placed forest 195,107 at 1192 s
- 20:00 waiting: coalmine: no free pick; ironmine: no free pick; stonemine: no free pick; wood: no free axe; house: materials; farm: no spot; waterhut: no spot
- 21:00 waiting: coalmine: materials; ironmine: materials; stonemine: materials; wood: no free axe; farm: materials; waterhut: no spot; quarry: no spot
- 21:04 placed wood 171,99 at 1264 s
- ×38 22:00–59:00 59 min: plank 1 stone 8 log 16 coal 27 iron 1 ironore 1 | free: axe -1 pick 0 hammer 0 saw 0 shovel 0 scythe 2 rod 0 | pick hold 0
- 22:00 waiting: coalmine: no free pick; ironmine: no free pick; stonemine: no free pick; forest: no free shovel; house: materials; farm: no spot; waterhut: no spot
- ×2 23:00–24:00 waiting: coalmine: no free pick; ironmine: no free pick; forest: no free shovel; house: materials; farm: materials; waterhut: no spot; quarry: no free pick
- 25:00 waiting: coalmine: no free pick; ironmine: no free pick; barracks: no spot; forest: no free shovel; house: materials; farm: materials; waterhut: no spot
- 26:00 waiting: coalmine: no free pick; ironmine: no free pick; barracks: materials; forest: no free shovel; house: materials; farm: no spot; waterhut: no spot
- ×2 26:18–28:18 starved: stone yes (last made 1338 s), wood no (planks 1272 s); expansion weights rock 10, tree 1
- ×33 27:00–59:00 waiting: coalmine: no free pick; ironmine: no free pick; barracks: materials; stonemine: no free pick; forest: no free shovel; waterhut: no spot; saw: no free saw
- ×15 30:18–58:18 starved: stone yes (last made 1338 s), wood yes (planks 1272 s); expansion weights rock 10, tree 6


Script: 1800 turns, 0.1 ms average, worst 2 ms, 0 over 0.3 s, 0 errors. Orders refused: none.
