# Tournament: claude-fable-5.2

Game version 196. Written for: claude-fable-5.2 196.

- claude-fable-5.2: hearthlands-ai-challenge, commit 6471fe6

Maps 20261030, 777, 4242, 31, each twice (sides swapped), up to 60 game minutes (1x). 38 s.

Each game ends with the script's own game log: what it may know (its own side, and what happened to it or what it saw). Times are game min:sec.

| Opponent | Won | Lost | Undecided |
|---|---|---|---|
| original game NPC | 0 | 0 | 8 |

## Games

Each row: buildings / military / land tiles / soldiers / people at the minute shown. First: game minute of the first smelter, smith, weaponsmith, barracks, tower, castle (- = never).

### Map 31: claude-fable-5.2 (Gold) vs original game NPC: undecided

| min | claude-fable-5.2 | original game NPC |
|---|---|---|
| 15 | 2/1/1553/5/10 | 27/4/2521/4/50 |
| 30 | 1/0/1012/1/10 | 68/14/6596/21/93 |
| 45 | 1/0/1012/1/10 | 75/16/9348/30/112 |
| 60 | 1/0/1012/1/10 | 82/23/14588/56/98 |
| first | - - - - - - | 8 8 9 12 45 43 |

Soldiers every 5 min: 10 5 5 2 1 1 1 1 1 1 1 1 (original game NPC: 10 5 4 7 19 21 21 23 30 39 48 56).

First army orders (game min:sec): 5:22 attack 9 soldiers -> building 106; 6:22 sendIn 1 soldiers -> building 106; 6:22 march 2 soldiers -> 184,123; 6:26 march 5 soldiers -> 184,123; 6:30 march 3 soldiers -> 184,123; 6:33 attack 6 soldiers -> building 103; 6:42 sendIn 1 soldiers -> building 106.

#### Game log: claude-fable-5.2

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 4 | 23 | 18 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 1553 | 13198 |
| 30 | 4 | 23 | 18 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 1012 | 13588 |
| 45 | 4 | 23 | 18 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 1012 | 13732 |
| 60 | 4 | 23 | 18 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 1012 | 13732 |

At the end: buildings (built+sites) hq 1.
People: carrier 4, digger 2, builder 2, soldier 1, geologist 1, explorer 1; beds 0. Soldiers: sword 1.

Goods consumed in the game: pick 1, plank 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (19 building-min): Idle 97%, Waiting for a swordsman: train one at the barracks 3%

Demolished or burned: guard (burned) 6:37.

Orders given: sendUnit 204, march 3, profession 2, attack 2, sendIn 2, archers 1. None refused.

People changing jobs: new soldier 3, carrier -> explorer 1.

People's orders (221 in all, 188 done): explorer explore 177, soldier attack guard 26, soldier march 11, soldier garrison guard 2, soldier defend guard 2, soldier post 1, geologist fetch pick 1, explorer fetchPlank 1. Not done (outcome: times): failed: can't reach that spot ×26; ended: the person is gone (became a soldier, defeated or removed) ×4.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 27.

Fights and contact: attacked enemy buildings 2 times (first 5:22); was attacked 1 times (first 24:38); took guard 6:22, guard 6:36; lost guard 24:54; killed bow 3, sword 5; lost people sword 6, bow 3; first saw player 2 at 6:00.

Your notes (123 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×60 0:00–59:04 error in economy: map.oreNames.indexOf is not a function
- ×48 0:00–59:00 army: outside 1 free 0 attacking 0 | targets 4/2/2 | enemy seen: soldiers 2 buildings 66 military 12 | gold 0.6
- ×2 5:22–6:33 attack: 6 soldiers on guard 103 (empty), needed 4, 4 targets known
- ×12 6:00–17:00 army: outside 4 free 3 attacking 0 | targets 4/2/2 | enemy seen: soldiers 0 buildings 30 military 5 | next guard needs 7 | gold 0.6
- 6:22 defence: 2 soldiers meet 1 enemy soldiers near our buildings


Script: 1838 turns, 0.7 ms average, worst 16 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 31: claude-fable-5.2 (Blue) vs original game NPC: undecided

| min | claude-fable-5.2 | original game NPC |
|---|---|---|
| 15 | 2/1/1104/7/10 | 31/4/2715/4/59 |
| 30 | 1/0/1012/1/10 | 63/9/6934/22/96 |
| 45 | 1/0/1012/1/10 | 77/18/13443/61/97 |
| 60 | 1/0/1012/1/10 | 83/23/17194/74/104 |
| first | - - - - - - | 9 10 13 15 27 29 |

Soldiers every 5 min: 10 7 7 7 1 1 1 1 1 1 1 1 (original game NPC: 10 4 4 5 7 22 37 54 61 66 70 74).

First army orders (game min:sec): 6:00 attack 9 soldiers -> building 76; 7:16 attack 6 soldiers -> building 105.

#### Game log: claude-fable-5.2

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 4 | 23 | 18 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 1104 | 13464 |
| 30 | 4 | 23 | 18 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 1012 | 13704 |
| 45 | 4 | 23 | 18 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 1012 | 13706 |
| 60 | 4 | 23 | 18 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 1012 | 13741 |

At the end: buildings (built+sites) hq 1.
People: carrier 4, digger 2, builder 2, soldier 1, geologist 1, explorer 1; beds 0. Soldiers: sword 1.

Goods consumed in the game: pick 1, plank 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (15 building-min): Idle 100%

Demolished or burned: guard (burned) 7:12, guard (burned) 22:40.

Orders given: sendUnit 209, profession 2, attack 2. None refused.

People changing jobs: new soldier 3, carrier -> explorer 1.

People's orders (222 in all, 191 done): explorer explore 182, soldier attack guard 34, soldier defend guard 2, soldier post 1, geologist fetch pick 1, explorer fetchPlank 1, soldier garrison guard 1. Not done (outcome: times): failed: can't reach that spot ×26; ended: the person is gone (became a soldier, defeated or removed) ×3.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 27.

Fights and contact: attacked enemy buildings 3 times (first 6:00); took guard 7:12, guard 7:23; killed bow 3, sword 9; lost people sword 6, bow 3; first saw player 1 at 6:00.

Your notes (122 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×60 0:00–59:04 error in economy: map.oreNames.indexOf is not a function
- ×43 0:00–59:00 army: outside 1 free 0 attacking 0 | targets 4/2/2 | enemy seen: soldiers 0 buildings 53 military 5 | gold 0.6
- 6:00 attack: 9 soldiers on guard 76, needed 9, 1 targets known
- ×17 6:00–22:00 army: outside 4 free 3 attacking 0 | targets 4/2/2 | enemy seen: soldiers 0 buildings 46 military 5 | next guard needs 7 | gold 0.6
- 7:16 attack: 6 soldiers on guard 105 (empty), needed 4, 6 targets known


Script: 1842 turns, 0.7 ms average, worst 15 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: claude-fable-5.2 (Gold) vs original game NPC: undecided

| min | claude-fable-5.2 | original game NPC |
|---|---|---|
| 15 | 3/2/1288/6/10 | 31/4/2310/3/50 |
| 30 | 3/2/1288/6/10 | 39/4/3150/3/60 |
| 45 | 3/2/1288/6/10 | 58/4/4061/3/90 |
| 60 | 3/2/1288/3/10 | 65/10/9071/26/86 |
| first | - - - - - - | 10 11 15 16 51 56 |

Soldiers every 5 min: 10 7 6 6 6 6 6 6 6 3 3 3 (original game NPC: 10 5 3 3 3 3 3 3 3 5 19 26).

First army orders (game min:sec): 6:02 attack 9 soldiers -> building 76; 7:18 attack 5 soldiers -> building 104; 14:44 march 4 soldiers -> 195,116.

#### Game log: claude-fable-5.2

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 4 | 23 | 18 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 1288 | 13694 |
| 30 | 4 | 23 | 18 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 1288 | 14120 |
| 45 | 4 | 23 | 18 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 1288 | 14218 |
| 60 | 4 | 23 | 18 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 1288 | 14470 |

At the end: buildings (built+sites) guard 2, hq 1.
People: carrier 4, digger 2, builder 2, soldier 1, geologist 1, explorer 1; beds 0. Soldiers: sword 1.

Goods consumed in the game: pick 1, plank 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (105 building-min): Idle 100%

Orders given: sendUnit 222, profession 2, attack 2, march 1. None refused.

People changing jobs: carrier -> explorer 1.

People's orders (205 in all, 169 done): explorer explore 171, soldier attack guard 24, soldier march 7, soldier post 1, geologist fetch pick 1, explorer fetchPlank 1. Not done (outcome: times): failed: can't reach that spot ×32; ended: the person is gone (became a soldier, defeated or removed) ×2.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 51.

Fights and contact: attacked enemy buildings 3 times (first 6:02); took guard 7:12, guard 7:19; killed bow 3, sword 5; lost people sword 4, bow 3; first saw player 2 at 6:00.

Your notes (123 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×60 0:00–59:04 error in economy: map.oreNames.indexOf is not a function
- ×16 0:00–59:00 army: outside 1 free 0 attacking 0 | targets 4/2/2 | enemy seen: soldiers 7 buildings 59 military 6 | gold 0.6
- ×44 6:00–49:00 army: outside 3 free 2 attacking 0 | targets 4/2/2 | enemy seen: soldiers 0 buildings 57 military 5 | next guard needs 5 | gold 0.6
- 6:02 attack: 9 soldiers on guard 76, needed 7, 3 targets known
- 7:18 attack: 5 soldiers on guard 104 (empty), needed 4, 5 targets known
- 14:44 defence: 4 soldiers meet 2 enemy soldiers near our buildings


Script: 1825 turns, 0.7 ms average, worst 16 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: claude-fable-5.2 (Blue) vs original game NPC: undecided

| min | claude-fable-5.2 | original game NPC |
|---|---|---|
| 15 | 1/0/1012/7/10 | 32/5/2590/4/50 |
| 30 | 2/1/1284/7/10 | 50/5/3799/5/58 |
| 45 | 1/0/1012/1/10 | 69/13/8000/26/91 |
| 60 | 1/0/1012/1/10 | 76/20/12945/53/84 |
| first | - - - - - - | 10 10 13 14 30 40 |

Soldiers every 5 min: 10 7 7 7 7 7 7 1 1 1 1 1 (original game NPC: 10 4 4 3 4 5 11 16 26 37 46 53).

First army orders (game min:sec): 6:12 attack 9 soldiers -> building 76; 15:06 attack 6 soldiers -> building 106; 15:16 sendIn 1 soldiers -> building 106; 15:36 sendIn 1 soldiers -> building 106; 35:00 attack 5 soldiers -> building 232; 35:50 march 4 soldiers -> 51,153; 36:20 march 4 soldiers -> 41,130; 37:50 march 1 soldiers -> 41,130.

#### Game log: claude-fable-5.2

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 4 | 23 | 18 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 1012 | 12979 |
| 30 | 4 | 23 | 18 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 1284 | 13365 |
| 45 | 4 | 23 | 18 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 1012 | 14479 |
| 60 | 4 | 23 | 18 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 1012 | 14479 |

At the end: buildings (built+sites) hq 1.
People: carrier 4, digger 2, builder 2, soldier 1, geologist 1, explorer 1; beds 0. Soldiers: sword 1.

Goods consumed in the game: pick 1, plank 1.
Goods lost in the game: stone 3, plank 2.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (24 building-min): Idle 97%, Waiting for a swordsman: train one at the barracks 3%

Building sites, time per state (site-min): Leveling the ground 0, Waiting for a builder 0, No way to the site for diggers 0.

Demolished or burned: guard (burned) 7:26, guard (burned) 36:33.

Orders given: sendUnit 210, attack 3, march 3, profession 2, sendIn 2, archers 1. None refused.

People changing jobs: new soldier 6, carrier -> explorer 1.

People's orders (245 in all, 205 done): explorer explore 169, soldier attack guard 42, soldier march 17, soldier defend guard 4, digger dig guard 4, soldier attack gone 3, soldier garrison guard 3, soldier post 1, geologist fetch pick 1, explorer fetchPlank 1. Not done (outcome: times): failed: can't reach that spot ×27; ended: the person is gone (became a soldier, defeated or removed) ×6; failed: no way (digger (dig 0) own-land-split) ×4; failed: killed ×1.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 41, digger (dig 0) own-land-split 4.

Fights and contact: attacked enemy buildings 4 times (first 6:12); was attacked 1 times (first 39:22); took guard 7:26, guard 15:15, guard 35:36; lost guard 39:39; killed bow 4, sword 8, spear 1; lost people sword 6, bow 3; first saw player 1 at 7:00.

Warnings: econ-balance 3. Last: 36:31 econ-balance: plank of owner 2: 25 counted, 23 expected from the bookkeeping | 47:31 econ-balance: plank of owner 2: 23 counted, 21 expected from the bookkeeping | 58:31 econ-balance: plank of owner 2: 23 counted, 21 expected from the bookkeeping

Your notes (125 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×60 0:00–59:04 error in economy: map.oreNames.indexOf is not a function
- ×30 0:00–59:00 army: outside 1 free 0 attacking 0 | targets 4/2/2 | enemy seen: soldiers 0 buildings 62 military 9 | gold 0.6
- 6:12 attack: 9 soldiers on guard 76, needed 7, 1 targets known
- ×28 7:00–37:00 army: outside 6 free 5 attacking 0 | targets 4/2/2 | enemy seen: soldiers 0 buildings 60 military 7 | next guard needs 7 | gold 0.6
- ×2 8:00–9:00 army: outside 7 free 6 attacking 0 | targets 4/2/2 | enemy seen: soldiers 0 buildings 18 military 4 | next hq needs 12 | gold 0.6
- ×2 15:06–35:00 attack: 5 soldiers on guard 232 (empty), needed 4, 7 targets known
- ×2 35:50–37:50 defence: 1 soldiers meet 2 enemy soldiers near our buildings


Script: 1842 turns, 0.7 ms average, worst 18 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: claude-fable-5.2 (Gold) vs original game NPC: undecided

| min | claude-fable-5.2 | original game NPC |
|---|---|---|
| 15 | 1/0/1012/4/10 | 32/5/2566/5/50 |
| 30 | 1/0/1012/1/10 | 55/7/4057/23/71 |
| 45 | 1/0/1012/1/10 | 66/11/7559/44/90 |
| 60 | 1/0/1012/1/10 | 73/17/13051/60/94 |
| first | - - - - - - | 9 10 20 23 31 37 |

Soldiers every 5 min: 10 4 4 4 4 1 1 1 1 1 1 1 (original game NPC: 10 5 5 5 5 23 24 41 44 51 56 60).

First army orders (game min:sec): 7:04 attack 9 soldiers -> building 105.

#### Game log: claude-fable-5.2

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 4 | 23 | 18 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 1012 | 13450 |
| 30 | 4 | 23 | 18 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 1012 | 14306 |
| 45 | 4 | 23 | 18 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 1012 | 14636 |
| 60 | 4 | 23 | 18 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 1012 | 14648 |

At the end: buildings (built+sites) hq 1.
People: carrier 4, digger 2, builder 2, soldier 1, geologist 1, explorer 1; beds 0. Soldiers: sword 1.

Goods consumed in the game: pick 1, plank 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%

Demolished or burned: guard (burned) 8:43.

Orders given: sendUnit 207, profession 2, attack 1. None refused.

People changing jobs: carrier -> explorer 1, new soldier 1.

People's orders (194 in all, 160 done): explorer explore 175, soldier attack guard 16, soldier post 1, geologist fetch pick 1, explorer fetchPlank 1. Not done (outcome: times): failed: can't reach that spot ×31; ended: the person is gone (became a soldier, defeated or removed) ×1.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 32.

Fights and contact: attacked enemy buildings 2 times (first 7:04); took guard 8:42; killed bow 3, sword 3; lost people sword 6, bow 3; first saw player 2 at 6:00.

Your notes (121 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×60 0:00–59:04 error in economy: map.oreNames.indexOf is not a function
- ×38 0:00–59:00 army: outside 1 free 0 attacking 0 | targets 4/2/2 | enemy seen: soldiers 0 buildings 59 military 8 | gold 0.6
- ×2 6:00–7:00 army: outside 10 free 9 attacking 0 | targets 4/2/2 | enemy seen: soldiers 0 buildings 8 military 1 | next hq needs 12 | gold 0.6
- 7:04 attack: 9 soldiers on guard 105, needed 7, 2 targets known
- ×20 8:00–27:00 army: outside 2 free 1 attacking 0 | targets 4/2/2 | enemy seen: soldiers 0 buildings 49 military 6 | next guard needs 7 | gold 0.6


Script: 1825 turns, 0.7 ms average, worst 13 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: claude-fable-5.2 (Blue) vs original game NPC: undecided

| min | claude-fable-5.2 | original game NPC |
|---|---|---|
| 15 | 1/0/1012/8/10 | 31/5/2286/3/50 |
| 30 | 1/0/1012/1/10 | 64/9/5184/17/94 |
| 45 | 1/0/1012/1/10 | 74/17/10900/58/93 |
| 60 | 1/0/1012/1/10 | 82/25/17145/77/94 |
| first | - - - - - - | 7 8 21 22 31 26 |

Soldiers every 5 min: 10 8 8 8 1 1 1 1 1 1 1 1 (original game NPC: 10 3 3 3 12 17 24 42 58 65 71 77).

First army orders (game min:sec): 5:38 attack 9 soldiers -> building 107; 6:52 sendIn 1 soldiers -> building 107; 6:52 march 1 soldiers -> 40,121.

#### Game log: claude-fable-5.2

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 4 | 23 | 18 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 1012 | 12146 |
| 30 | 4 | 23 | 18 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 1012 | 12995 |
| 45 | 4 | 23 | 18 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 1012 | 13373 |
| 60 | 4 | 23 | 18 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 1012 | 13379 |

At the end: buildings (built+sites) hq 1.
People: carrier 4, digger 2, builder 2, soldier 1, geologist 1, explorer 1; beds 0. Soldiers: sword 1.

Goods consumed in the game: pick 1, plank 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%

Demolished or burned: guard (burned) 6:55.

Orders given: sendUnit 208, profession 2, attack 1, sendIn 1, march 1, archers 1. None refused.

People changing jobs: carrier -> explorer 1, new soldier 1.

People's orders (204 in all, 162 done): explorer explore 169, soldier attack guard 25, soldier attack gone 4, soldier march 2, soldier post 1, geologist fetch pick 1, explorer fetchPlank 1, soldier garrison guard 1. Not done (outcome: times): failed: can't reach that spot ×38; ended: the person is gone (became a soldier, defeated or removed) ×2.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 39.

Fights and contact: attacked enemy buildings 2 times (first 5:38); took guard 6:52; killed sword 6, bow 3; lost people sword 6, bow 3; first saw player 1 at 6:00.

Your notes (122 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×60 0:00–59:04 error in economy: map.oreNames.indexOf is not a function
- ×44 0:00–59:00 army: outside 1 free 0 attacking 0 | targets 4/2/2 | enemy seen: soldiers 31 buildings 63 military 11 | gold 0.6
- 5:38 attack: 9 soldiers on guard 107 (empty), needed 4, 1 targets known
- 6:00 army: outside 10 free 0 attacking 9 | targets 4/2/2 | enemy seen: soldiers 0 buildings 7 military 2 | next guard needs 0 | gold 0.6
- 6:52 defence: 1 soldiers meet 1 enemy soldiers near our buildings
- ×15 8:00–22:00 army: outside 8 free 7 attacking 0 | targets 4/2/2 | enemy seen: soldiers 0 buildings 42 military 6 | next hq needs 12 | gold 0.6


Script: 1835 turns, 0.7 ms average, worst 31 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: claude-fable-5.2 (Gold) vs original game NPC: undecided

| min | claude-fable-5.2 | original game NPC |
|---|---|---|
| 15 | 1/0/1012/6/10 | 26/5/2490/4/50 |
| 30 | 1/0/1012/6/10 | 33/5/3298/4/60 |
| 45 | 1/0/1012/6/10 | 38/5/4120/4/60 |
| 60 | 1/0/1012/1/10 | 66/9/7522/28/83 |
| first | - - - - - - | 13 9 25 26 57 - |

Soldiers every 5 min: 10 6 6 6 6 6 6 6 6 4 1 1 (original game NPC: 10 4 4 4 4 4 4 4 4 3 9 28).

First army orders (game min:sec): 5:28 attack 9 soldiers -> building 105; 45:00 attack 5 soldiers -> building 76.

#### Game log: claude-fable-5.2

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 4 | 23 | 18 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 1012 | 12371 |
| 30 | 4 | 23 | 18 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 1012 | 12400 |
| 45 | 4 | 23 | 18 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 1012 | 12551 |
| 60 | 4 | 23 | 18 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 1012 | 13238 |

At the end: buildings (built+sites) hq 1.
People: carrier 4, digger 2, builder 2, soldier 1, geologist 1, explorer 1; beds 0. Soldiers: sword 1.

Goods consumed in the game: pick 1, plank 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%

Demolished or burned: guard (burned) 6:36, guard (burned) 45:15.

Orders given: sendUnit 229, profession 2, attack 2. None refused.

People changing jobs: new soldier 2, carrier -> explorer 1.

People's orders (257 in all, 236 done): explorer explore 212, soldier attack guard 40, soldier attack gone 2, soldier post 1, geologist fetch pick 1, explorer fetchPlank 1. Not done (outcome: times): failed: can't reach that spot ×17; ended: the person is gone (became a soldier, defeated or removed) ×1.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 17.

Fights and contact: attacked enemy buildings 3 times (first 5:28); took guard 6:35, guard 45:15; killed bow 3, sword 6; lost people sword 6, bow 3; first saw player 2 at 6:00.

Your notes (122 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×60 0:00–59:04 error in economy: map.oreNames.indexOf is not a function
- ×13 0:00–59:00 army: outside 1 free 0 attacking 0 | targets 4/2/2 | enemy seen: soldiers 0 buildings 62 military 8 | gold 0.6
- ×2 5:28–45:00 attack: 5 soldiers on guard 76, needed 5, 6 targets known
- ×47 6:00–53:00 army: outside 4 free 3 attacking 0 | targets 4/2/2 | enemy seen: soldiers 0 buildings 47 military 5 | next guard needs 5 | gold 0.6


Script: 1844 turns, 0.6 ms average, worst 11 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: claude-fable-5.2 (Blue) vs original game NPC: undecided

| min | claude-fable-5.2 | original game NPC |
|---|---|---|
| 15 | 1/0/1012/3/10 | 23/2/1692/2/40 |
| 30 | 1/0/1012/1/10 | 43/3/3118/12/60 |
| 45 | 1/0/1012/1/10 | 68/8/5640/37/95 |
| 60 | 1/0/1012/1/10 | 77/16/10984/60/92 |
| first | - - - - - - | 13 14 15 16 25 50 |

Soldiers every 5 min: 10 3 3 3 1 1 1 1 1 1 1 1 (original game NPC: 10 2 2 2 7 12 15 24 37 44 53 60).

First army orders (game min:sec): 5:40 attack 9 soldiers -> building 76.

#### Game log: claude-fable-5.2

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 4 | 23 | 18 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 1012 | 12466 |
| 30 | 4 | 23 | 18 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 1012 | 12555 |
| 45 | 4 | 23 | 18 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 1012 | 12693 |
| 60 | 4 | 23 | 18 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 1012 | 12883 |

At the end: buildings (built+sites) hq 1.
People: carrier 4, digger 2, builder 2, soldier 1, geologist 1, explorer 1; beds 0. Soldiers: sword 1.

Goods consumed in the game: pick 1, plank 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%

Demolished or burned: guard (burned) 7:05.

Orders given: sendUnit 218, profession 2, attack 1. None refused.

People changing jobs: carrier -> explorer 1, new soldier 1.

People's orders (213 in all, 191 done): explorer explore 199, soldier attack guard 11, soldier post 1, geologist fetch pick 1, explorer fetchPlank 1. Not done (outcome: times): failed: can't reach that spot ×19.

Failed path searches (who (task) why: times): explorer (explore 0) cut-off 19.

Fights and contact: attacked enemy buildings 2 times (first 5:40); took guard 7:05; killed sword 5, bow 3; lost people sword 6, bow 3; first saw player 1 at 6:00.

Your notes (121 in all; notes that differ only in their numbers are grouped: times, first and last time, the latest text):
- ×60 0:00–59:04 error in economy: map.oreNames.indexOf is not a function
- ×43 0:00–59:00 army: outside 1 free 0 attacking 0 | targets 4/2/2 | enemy seen: soldiers 0 buildings 69 military 11 | gold 0.6
- 5:40 attack: 9 soldiers on guard 76, needed 7, 1 targets known
- ×2 6:00–7:00 army: outside 3 free 0 attacking 2 | targets 4/2/2 | enemy seen: soldiers 1 buildings 8 military 2 | next guard needs 0 | gold 0.6
- ×15 8:00–22:00 army: outside 3 free 2 attacking 0 | targets 4/2/2 | enemy seen: soldiers 0 buildings 32 military 3 | next hq needs 12 | gold 0.6


Script: 1821 turns, 0.7 ms average, worst 16 ms, 0 over 0.3 s, 0 errors. Orders refused: none.
