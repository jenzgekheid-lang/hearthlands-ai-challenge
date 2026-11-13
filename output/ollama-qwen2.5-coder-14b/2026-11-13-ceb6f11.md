# Tournament: ollama-qwen2.5-coder-14b

Game version 207. Written for: ollama-qwen2.5-coder-14b 207.

- ollama-qwen2.5-coder-14b: hearthlands-ai-challenge, commit ceb6f11

Maps 20261030, 777, 4242, 31, each twice (sides swapped), up to 60 game minutes (1x). 56 s.

Each game ends with the script's own game log: what it may know (its own side, and what happened to it or what it saw). Times are game min:sec.

| Opponent | Won | Lost | Undecided |
|---|---|---|---|
| original game NPC | 0 | 0 | 8 |

## Games

Each row: buildings / military / land tiles / soldiers / people at the minute shown. First: game minute of the first smelter, smith, weaponsmith, barracks, tower, castle (- = never).

### Map 31: ollama-qwen2.5-coder-14b (Gold) vs original game NPC: undecided

| min | ollama-qwen2.5-coder-14b | original game NPC |
|---|---|---|
| 15 | 6/4/1851/10/10 | 31/6/3174/10/50 |
| 30 | 6/4/1851/10/10 | 68/13/7459/24/106 |
| 45 | 6/4/1851/10/10 | 73/18/11699/58/92 |
| 60 | 6/4/1851/10/10 | 85/24/16241/75/105 |
| first | - - - - 3 - | 8 9 13 13 22 32 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 16 20 24 24 41 58 64 69 75).

First army orders (game min:sec): none.

#### Game log: ollama-qwen2.5-coder-14b

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 6–7: army: Lost 4 soldiers in the last 5 minutes, and no barracks to train new ones.
- 50 min, 11–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (123 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 12 | 8 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 8 | 1851 | 3631 |
| 30 | 12 | 8 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 8 | 1851 | 3631 |
| 45 | 12 | 8 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 8 | 1851 | 3631 |
| 60 | 12 | 8 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 8 | 1851 | 3631 |

At the end: buildings (built+sites) guard 2, tower 2, wood 1+1, hq 1, quarry 0+1, saw 0+1.
People: soldier 4, carrier 4, digger 2, builder 2, worker 1, geologist 1; beds 0. Soldiers: sword 1, bow 3.

Goods produced in the game: log 8.
Goods consumed in the game: stone 18, plank 16, axe 1, pick 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (118 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- tower (116 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (57 building-min): Log pile full, waiting for carriers 97%, Felling a tree 3%, Bringing a log to the pile 1%, Worker picking up an axe 0%, Working 0%

Building sites, time per state (site-min): Waiting for materials 171, Waiting for a digger 4, Leveling the ground 2, Builders at work 2, Waiting for a builder 2.

Build order (placed at min:sec, finished at): guard 0:02→0:46, guard 0:04→1:16, tower 0:06→2:00, tower 0:48→2:28, wood 1:18→2:44, quarry 2:00→never, saw 2:30→never, wood 2:44→never.

Orders given: place 8, profession 1, sendUnit 1. None refused.

People changing jobs: carrier -> geologist 1, carrier -> worker 1.

People's orders (101 in all, 93 done): carrier haul plank pile -> tower 10, carrier haul stone pile -> tower 10, worker rest wood 9, worker gather wood 8, carrier haul stone pile -> guard 6, digger dig guard 4, carrier haul plank pile -> guard 4, builder build guard 4, digger dig tower 4, carrier haul plank pile -> wood 4, builder build tower 4, digger dig wood 4, soldier garrison tower 4, builder build wood 4. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×6.

Fights and contact: first saw player 2 at 52:00.

Warnings: site-stuck 15. Last: 53:40 site-stuck: Sawmill site has not moved for 51 min (Waiting for materials) | 53:50 site-stuck: Stonecutter site has not moved for 51 min (Waiting for materials) | 54:10 site-stuck: Woodcutter site has not moved for 51 min (Waiting for materials)


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 31: ollama-qwen2.5-coder-14b (Blue) vs original game NPC: undecided

| min | ollama-qwen2.5-coder-14b | original game NPC |
|---|---|---|
| 15 | 6/4/2089/10/10 | 35/6/2825/10/60 |
| 30 | 6/4/2089/10/10 | 74/16/7634/47/93 |
| 45 | 6/4/2089/10/10 | 81/22/12816/65/95 |
| 60 | 6/4/2089/10/10 | 89/29/17968/82/98 |
| first | - - - - 2 - | 7 8 14 15 24 33 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 16 27 47 54 59 65 70 77 82).

First army orders (game min:sec): none.

#### Game log: ollama-qwen2.5-coder-14b

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 1 min, 6: army: Lost 5 soldiers in the last 5 minutes, and no barracks to train new ones.
- 50 min, 11–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (141 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 12 | 8 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 8 | 2089 | 3993 |
| 30 | 12 | 8 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 8 | 2089 | 3993 |
| 45 | 12 | 8 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 8 | 2089 | 3993 |
| 60 | 12 | 8 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 8 | 2089 | 3993 |

At the end: buildings (built+sites) guard 2, tower 2, wood 1+1, hq 1, quarry 0+1, saw 0+1.
People: soldier 4, carrier 4, digger 2, builder 2, worker 1, geologist 1; beds 0. Soldiers: sword 1, bow 3.

Goods produced in the game: log 8.
Goods consumed in the game: stone 18, plank 16, axe 1, pick 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (118 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- tower (116 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (57 building-min): Log pile full, waiting for carriers 96%, Felling a tree 3%, Bringing a log to the pile 1%, Worker picking up an axe 0%, Working 0%

Building sites, time per state (site-min): Waiting for materials 171, Waiting for a digger 3, Leveling the ground 2, Builders at work 2, Waiting for a builder 2.

Build order (placed at min:sec, finished at): guard 0:02→0:33, guard 0:04→1:04, tower 0:06→1:40, tower 0:34→2:19, wood 1:06→2:34, quarry 1:40→never, saw 2:20→never, wood 2:34→never.

Orders given: place 8, profession 1, sendUnit 1. None refused.

People changing jobs: carrier -> geologist 1, carrier -> worker 1.

People's orders (100 in all, 92 done): carrier haul plank pile -> tower 10, carrier haul stone pile -> tower 10, worker rest wood 9, worker gather wood 8, carrier haul stone pile -> guard 6, digger dig guard 4, carrier haul plank pile -> guard 4, builder build guard 4, digger dig tower 4, carrier haul plank pile -> wood 4, builder build tower 4, soldier garrison tower 4, digger dig wood 4, builder build wood 4. None failed.

Warnings: site-stuck 15. Last: 53:30 site-stuck: Stonecutter site has not moved for 51 min (Waiting for materials) | 53:40 site-stuck: Sawmill site has not moved for 51 min (Waiting for materials) | 54:10 site-stuck: Woodcutter site has not moved for 51 min (Waiting for materials)


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: ollama-qwen2.5-coder-14b (Gold) vs original game NPC: undecided

| min | ollama-qwen2.5-coder-14b | original game NPC |
|---|---|---|
| 15 | 6/4/2028/10/10 | 29/6/2527/10/40 |
| 30 | 6/4/2028/10/10 | 48/8/3254/12/68 |
| 45 | 6/4/2028/10/10 | 60/12/6046/18/82 |
| 60 | 6/4/2028/10/10 | 68/13/7816/28/92 |
| first | - - - - 2 - | 12 13 14 14 33 37 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 12 12 12 18 18 18 18 19 28).

First army orders (game min:sec): none.

#### Game log: ollama-qwen2.5-coder-14b

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 1 min, 6: army: Lost 5 soldiers in the last 5 minutes, and no barracks to train new ones.
- 50 min, 11–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (196 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 12 | 8 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 8 | 2028 | 3900 |
| 30 | 12 | 8 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 8 | 2028 | 3900 |
| 45 | 12 | 8 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 8 | 2028 | 3900 |
| 60 | 12 | 8 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 8 | 2028 | 3900 |

At the end: buildings (built+sites) guard 2, tower 2, wood 1+1, hq 1, quarry 0+1, saw 0+1.
People: soldier 4, carrier 4, digger 2, builder 2, worker 1, geologist 1; beds 0. Soldiers: sword 1, bow 3.

Goods produced in the game: log 8.
Goods consumed in the game: stone 18, plank 16, axe 1, pick 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (118 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- tower (116 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (57 building-min): Log pile full, waiting for carriers 96%, Felling a tree 3%, Bringing a log to the pile 1%, Worker picking up an axe 0%, Working 0%

Building sites, time per state (site-min): Waiting for materials 171, Waiting for a digger 3, Leveling the ground 2, Builders at work 2, Waiting for a builder 2.

Build order (placed at min:sec, finished at): guard 0:02→0:36, guard 0:04→0:58, tower 0:06→1:48, tower 0:38→2:22, wood 0:58→2:35, quarry 1:50→never, saw 2:22→never, wood 2:36→never.

Orders given: place 8, sendUnit 3, profession 1. None refused.

People changing jobs: carrier -> geologist 1, carrier -> worker 1.

People's orders (103 in all, 95 done): carrier haul plank pile -> tower 10, carrier haul stone pile -> tower 10, worker rest wood 9, worker gather wood 8, carrier haul stone pile -> guard 6, digger dig guard 4, carrier haul plank pile -> guard 4, builder build guard 4, digger dig tower 4, carrier haul plank pile -> wood 4, builder build tower 4, soldier garrison tower 4, digger dig wood 4, builder build wood 4. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×6.

Warnings: site-stuck 15. Last: 53:30 site-stuck: Sawmill site has not moved for 51 min (Waiting for materials) | 53:40 site-stuck: Stonecutter site has not moved for 51 min (Waiting for materials) | 54:00 site-stuck: Woodcutter site has not moved for 51 min (Waiting for materials)


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: ollama-qwen2.5-coder-14b (Blue) vs original game NPC: undecided

| min | ollama-qwen2.5-coder-14b | original game NPC |
|---|---|---|
| 15 | 6/4/1982/10/10 | 33/6/2720/10/50 |
| 30 | 6/4/1982/10/10 | 57/10/4843/21/69 |
| 45 | 6/4/1982/10/10 | 71/13/8279/50/90 |
| 60 | 6/4/1982/10/10 | 76/20/13433/69/91 |
| first | - - - - 2 - | 8 8 17 17 27 40 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 14 21 34 43 50 55 60 69).

First army orders (game min:sec): none.

#### Game log: ollama-qwen2.5-coder-14b

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 1 min, 6: army: Lost 5 soldiers in the last 5 minutes, and no barracks to train new ones.
- 50 min, 11–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (188 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 12 | 8 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 8 | 1982 | 4466 |
| 30 | 12 | 8 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 8 | 1982 | 4466 |
| 45 | 12 | 8 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 8 | 1982 | 4466 |
| 60 | 12 | 8 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 8 | 1982 | 4466 |

At the end: buildings (built+sites) guard 2, tower 2, wood 1+1, hq 1, quarry 0+1, saw 0+1.
People: soldier 4, carrier 4, digger 2, builder 2, worker 1, geologist 1; beds 0. Soldiers: sword 1, bow 3.

Goods produced in the game: log 8.
Goods consumed in the game: stone 18, plank 16, axe 1, pick 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (118 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- tower (116 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- wood (58 building-min): Log pile full, waiting for carriers 96%, Felling a tree 3%, Bringing a log to the pile 1%, Worker picking up an axe 0%, Working 0%

Building sites, time per state (site-min): Waiting for materials 172, Waiting for a digger 3, Leveling the ground 2, Builders at work 2, Waiting for a builder 1.

Build order (placed at min:sec, finished at): guard 0:02→0:35, guard 0:04→1:01, tower 0:06→1:33, tower 0:36→2:04, wood 1:02→2:17, quarry 1:34→never, saw 2:06→never, wood 2:18→never.

Orders given: place 8, profession 1, sendUnit 1. None refused.

People changing jobs: carrier -> geologist 1, carrier -> worker 1.

People's orders (101 in all, 93 done): carrier haul plank pile -> tower 10, carrier haul stone pile -> tower 10, worker rest wood 9, worker gather wood 8, carrier haul stone pile -> guard 6, digger dig guard 4, carrier haul plank pile -> guard 4, builder build guard 4, digger dig tower 4, carrier haul plank pile -> wood 4, builder build tower 4, soldier garrison tower 4, digger dig wood 4, builder build wood 4. None failed.

Warnings: site-stuck 15. Last: 53:10 site-stuck: Stonecutter site has not moved for 51 min (Waiting for materials) | 53:20 site-stuck: Sawmill site has not moved for 51 min (Waiting for materials) | 53:50 site-stuck: Woodcutter site has not moved for 51 min (Waiting for materials)


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: ollama-qwen2.5-coder-14b (Gold) vs original game NPC: undecided

| min | ollama-qwen2.5-coder-14b | original game NPC |
|---|---|---|
| 15 | 6/4/1950/10/10 | 30/6/3056/10/50 |
| 30 | 6/4/1950/10/10 | 54/9/5085/18/72 |
| 45 | 6/4/1950/10/10 | 70/13/8235/52/98 |
| 60 | 6/4/1950/10/10 | 78/20/12976/71/99 |
| first | - - - - 2 - | 9 8 17 17 26 37 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 13 18 23 39 52 58 63 71).

First army orders (game min:sec): none.

#### Game log: ollama-qwen2.5-coder-14b

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 1 min, 6: army: Lost 5 soldiers in the last 5 minutes, and no barracks to train new ones.
- 50 min, 11–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (99 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 12 | 8 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 8 | 1950 | 3644 |
| 30 | 12 | 8 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 8 | 1950 | 3644 |
| 45 | 12 | 8 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 8 | 1950 | 3644 |
| 60 | 12 | 8 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 8 | 1950 | 3644 |

At the end: buildings (built+sites) guard 2, tower 2, wood 1+1, hq 1, quarry 0+1, saw 0+1.
People: soldier 4, carrier 4, digger 2, builder 2, worker 1, geologist 1; beds 0. Soldiers: sword 1, bow 3.

Goods produced in the game: log 8.
Goods consumed in the game: stone 18, plank 16, axe 1, pick 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (118 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- tower (115 building-min): Idle 100%, Soldiers on the way 0%
- wood (57 building-min): Log pile full, waiting for carriers 96%, Felling a tree 3%, Bringing a log to the pile 1%, Worker picking up an axe 0%, Idle 0%

Building sites, time per state (site-min): Waiting for materials 170, Waiting for a digger 5, Leveling the ground 3, Builders at work 2, Waiting for a builder 1.

Build order (placed at min:sec, finished at): guard 0:02→0:33, guard 0:04→1:00, tower 0:06→1:51, tower 0:34→2:42, wood 1:00→2:55, quarry 1:52→never, saw 2:42→never, wood 2:56→never.

Orders given: place 8, profession 1, sendUnit 1. None refused.

People changing jobs: carrier -> geologist 1, carrier -> worker 1.

People's orders (101 in all, 93 done): carrier haul plank pile -> tower 10, carrier haul stone pile -> tower 10, worker rest wood 9, worker gather wood 8, carrier haul stone pile -> guard 6, digger dig guard 4, carrier haul plank pile -> guard 4, builder build guard 4, digger dig tower 4, carrier haul plank pile -> wood 4, builder build tower 4, soldier garrison tower 4, digger dig wood 4, builder build wood 4. None failed.

Warnings: site-stuck 15. Last: 54:00 site-stuck: Stonecutter site has not moved for 51 min (Waiting for materials) | 54:10 site-stuck: Sawmill site has not moved for 51 min (Waiting for materials) | 54:30 site-stuck: Woodcutter site has not moved for 51 min (Waiting for materials)


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: ollama-qwen2.5-coder-14b (Blue) vs original game NPC: undecided

| min | ollama-qwen2.5-coder-14b | original game NPC |
|---|---|---|
| 15 | 6/4/1988/10/10 | 34/6/2792/10/57 |
| 30 | 6/4/1988/10/10 | 63/10/5392/19/91 |
| 45 | 6/4/1988/10/10 | 72/17/11242/58/72 |
| 60 | 6/4/1988/10/10 | 72/17/12422/58/72 |
| first | - - - - 3 - | 7 8 13 16 27 34 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 13 19 33 42 58 58 58 58).

First army orders (game min:sec): none.

#### Game log: ollama-qwen2.5-coder-14b

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 6–7: army: Lost 4 soldiers in the last 5 minutes, and no barracks to train new ones.
- 50 min, 11–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (98 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 12 | 8 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 8 | 1988 | 4480 |
| 30 | 12 | 8 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 8 | 1988 | 4480 |
| 45 | 12 | 8 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 8 | 1988 | 4480 |
| 60 | 12 | 8 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 8 | 1988 | 4480 |

At the end: buildings (built+sites) guard 2, tower 2, wood 1+1, hq 1, quarry 0+1, saw 0+1.
People: soldier 4, carrier 4, digger 2, builder 2, worker 1, geologist 1; beds 0. Soldiers: sword 1, bow 3.

Goods produced in the game: log 8.
Goods consumed in the game: stone 18, plank 16, axe 1, pick 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (118 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- tower (115 building-min): Idle 100%, Soldiers on the way 0%
- wood (57 building-min): Log pile full, waiting for carriers 96%, Felling a tree 3%, Bringing a log to the pile 1%, Worker picking up an axe 0%, Working 0%

Building sites, time per state (site-min): Waiting for materials 169, Waiting for a digger 5, Leveling the ground 3, Builders at work 2, Waiting for a builder 1.

Build order (placed at min:sec, finished at): guard 0:02→0:44, guard 0:04→1:21, tower 0:06→2:12, tower 0:44→2:55, wood 1:22→3:11, quarry 2:12→never, saw 2:56→never, wood 3:12→never.

Orders given: place 8, profession 1, sendUnit 1. None refused.

People changing jobs: carrier -> geologist 1, carrier -> worker 1.

People's orders (101 in all, 93 done): carrier haul plank pile -> tower 10, carrier haul stone pile -> tower 10, worker rest wood 9, worker gather wood 8, carrier haul stone pile -> guard 6, digger dig guard 4, carrier haul plank pile -> guard 4, builder build guard 4, digger dig tower 4, carrier haul plank pile -> wood 4, builder build tower 4, soldier garrison tower 4, digger dig wood 4, builder build wood 4. None failed.

Warnings: site-stuck 15. Last: 54:10 site-stuck: Stonecutter site has not moved for 51 min (Waiting for materials) | 54:20 site-stuck: Sawmill site has not moved for 51 min (Waiting for materials) | 54:40 site-stuck: Woodcutter site has not moved for 51 min (Waiting for materials)


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: ollama-qwen2.5-coder-14b (Gold) vs original game NPC: undecided

| min | ollama-qwen2.5-coder-14b | original game NPC |
|---|---|---|
| 15 | 6/4/2291/10/10 | 24/6/2776/10/40 |
| 30 | 6/4/2291/10/10 | 28/6/3174/10/50 |
| 45 | 6/4/2291/10/10 | 42/8/4449/23/57 |
| 60 | 6/4/2291/10/10 | 74/16/8574/49/111 |
| first | - - - - 3 - | 7 9 40 41 - 59 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 10 10 10 23 32 42 49).

First army orders (game min:sec): none.

#### Game log: ollama-qwen2.5-coder-14b

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 2 min, 6–7: army: Lost 4 soldiers in the last 5 minutes, and no barracks to train new ones.
- 50 min, 11–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (201 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 12 | 8 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 8 | 2291 | 4361 |
| 30 | 12 | 8 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 8 | 2291 | 4361 |
| 45 | 12 | 8 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 8 | 2291 | 4361 |
| 60 | 12 | 8 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 8 | 2291 | 4361 |

At the end: buildings (built+sites) guard 2, tower 2, wood 1+1, hq 1, quarry 0+1, saw 0+1.
People: soldier 4, carrier 4, digger 2, builder 2, geologist 1, worker 1; beds 0. Soldiers: sword 1, bow 3.

Goods produced in the game: log 8.
Goods consumed in the game: stone 18, plank 16, axe 1, pick 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (118 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- tower (115 building-min): Idle 100%, Soldiers on the way 0%
- wood (57 building-min): Log pile full, waiting for carriers 96%, Felling a tree 3%, Bringing a log to the pile 1%, Worker picking up an axe 0%, Idle 0%

Building sites, time per state (site-min): Waiting for materials 169, Waiting for a digger 5, Leveling the ground 3, Builders at work 2, Waiting for a builder 1.

Build order (placed at min:sec, finished at): guard 0:02→0:39, guard 0:04→1:19, tower 0:06→2:10, tower 0:40→2:58, wood 1:20→3:11, quarry 2:10→never, saw 2:58→never, wood 3:12→never.

Orders given: place 8, profession 1, sendUnit 1. None refused.

People changing jobs: carrier -> geologist 1, carrier -> worker 1.

People's orders (101 in all, 93 done): carrier haul plank pile -> tower 10, carrier haul stone pile -> tower 10, worker rest wood 9, worker gather wood 8, carrier haul stone pile -> guard 6, digger dig guard 4, carrier haul plank pile -> guard 4, builder build guard 4, digger dig tower 4, carrier haul plank pile -> wood 4, builder build tower 4, soldier garrison tower 4, digger dig wood 4, builder build wood 4. None failed.

Warnings: site-stuck 15. Last: 54:10 site-stuck: Stonecutter site has not moved for 51 min (Waiting for materials) | 54:20 site-stuck: Sawmill site has not moved for 51 min (Waiting for materials) | 54:40 site-stuck: Woodcutter site has not moved for 51 min (Waiting for materials)


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: ollama-qwen2.5-coder-14b (Blue) vs original game NPC: undecided

| min | ollama-qwen2.5-coder-14b | original game NPC |
|---|---|---|
| 15 | 6/4/2087/10/10 | 25/6/3049/10/40 |
| 30 | 6/4/2087/10/10 | 59/9/5155/22/88 |
| 45 | 6/4/2087/10/10 | 70/14/8684/37/83 |
| 60 | 6/4/2082/10/10 | 79/22/14488/69/91 |
| first | - - - - 2 - | 14 15 16 24 26 35 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 11 22 22 30 37 47 56 69).

First army orders (game min:sec): none.

#### Game log: ollama-qwen2.5-coder-14b

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 1 min, 6: army: Lost 5 soldiers in the last 5 minutes, and no barracks to train new ones.
- 50 min, 11–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (220 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 12 | 8 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 8 | 2087 | 4465 |
| 30 | 12 | 8 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 8 | 2087 | 4465 |
| 45 | 12 | 8 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 8 | 2087 | 4465 |
| 60 | 12 | 8 | 0 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 8 | 2082 | 4465 |

At the end: buildings (built+sites) guard 2, tower 2, wood 1+1, hq 1, quarry 0+1, saw 0+1.
People: soldier 4, carrier 4, digger 2, builder 2, worker 1, geologist 1; beds 0. Soldiers: sword 1, bow 3.

Goods produced in the game: log 8.
Goods consumed in the game: stone 18, plank 16, axe 1, pick 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- guard (118 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- tower (116 building-min): Idle 100%, Waiting for a soldier 0%, Soldiers on the way 0%
- wood (58 building-min): Log pile full, waiting for carriers 96%, Felling a tree 3%, Bringing a log to the pile 1%, Worker picking up an axe 0%, Idle 0%

Building sites, time per state (site-min): Waiting for materials 172, Waiting for a digger 3, Leveling the ground 2, Builders at work 2, Waiting for a builder 1.

Build order (placed at min:sec, finished at): guard 0:02→0:44, guard 0:04→1:03, tower 0:06→1:32, tower 0:46→2:06, wood 1:04→2:29, quarry 1:32→never, saw 2:08→never, wood 2:30→never.

Orders given: place 8, sendUnit 2, profession 1. None refused.

People changing jobs: carrier -> geologist 1, carrier -> worker 1.

People's orders (102 in all, 94 done): carrier haul plank pile -> tower 10, carrier haul stone pile -> tower 10, worker rest wood 9, worker gather wood 8, carrier haul stone pile -> guard 6, digger dig guard 4, carrier haul plank pile -> guard 4, builder build guard 4, digger dig tower 4, builder build tower 4, carrier haul plank pile -> wood 4, soldier garrison tower 4, digger dig wood 4, builder build wood 4. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×6.

Fights and contact: first saw player 1 at 55:00.

Warnings: site-stuck 15. Last: 53:00 site-stuck: Stonecutter site has not moved for 51 min (Waiting for materials) | 53:30 site-stuck: Sawmill site has not moved for 51 min (Waiting for materials) | 54:00 site-stuck: Woodcutter site has not moved for 51 min (Waiting for materials)


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.
