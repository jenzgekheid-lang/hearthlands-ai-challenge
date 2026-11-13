# Tournament: ollama-qwen2.5-coder-14b

Game version 207. Written for: ollama-qwen2.5-coder-14b 207.

- ollama-qwen2.5-coder-14b: hearthlands-ai-challenge, commit d4a0673

Maps 20261030, 777, 4242, 31, each twice (sides swapped), up to 60 game minutes (1x). 47 s.

Each game ends with the script's own game log: what it may know (its own side, and what happened to it or what it saw). Times are game min:sec.

| Opponent | Won | Lost | Undecided |
|---|---|---|---|
| original game NPC | 0 | 0 | 8 |

## Games

Each row: buildings / military / land tiles / soldiers / people at the minute shown. First: game minute of the first smelter, smith, weaponsmith, barracks, tower, castle (- = never).

### Map 31: ollama-qwen2.5-coder-14b (Gold) vs original game NPC: undecided

| min | ollama-qwen2.5-coder-14b | original game NPC |
|---|---|---|
| 15 | 5/3/1793/10/10 | 31/6/3174/10/50 |
| 30 | 5/3/1793/10/10 | 68/13/7459/24/106 |
| 45 | 5/3/1793/10/10 | 73/18/11699/58/92 |
| 60 | 5/3/1793/10/10 | 85/24/16241/75/105 |
| first | - - - - 3 - | 8 9 13 13 22 32 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 16 20 24 24 41 58 64 69 75).

First army orders (game min:sec): none.

#### Game log: ollama-qwen2.5-coder-14b

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 1 min, 1: settlers: No free settlers and every bed taken: build houses.
- 58 min, 3–60: stall: sawmill: waiting for logs 100% of the last 5 minutes.
- 50 min, 11–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (83 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 0 | 16 | 3 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 2 | 1793 | 3553 |
| 30 | 0 | 16 | 3 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 2 | 1793 | 3553 |
| 45 | 0 | 16 | 3 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 2 | 1793 | 3553 |
| 60 | 0 | 16 | 3 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 2 | 1793 | 3553 |

At the end: buildings (built+sites) guard 2, tower 1+1, hq 1, saw 1, wood 0+1, quarry 0+1.
People: soldier 6, carrier 4, digger 2, builder 2, worker 1, geologist 1; beds 0. Soldiers: sword 3, bow 3.

Goods produced in the game: plank 4.
Goods consumed in the game: stone 15, plank 12, log 4, saw 1, pick 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- saw (60 building-min): Waiting for logs 99%, Sawing planks 1%, Worker picking up a saw 0%, Stacking outside 0%, Working 0%
- guard (118 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- tower (58 building-min): Idle 100%, Soldiers on the way 0%

Building sites, time per state (site-min): Waiting for materials 172, Waiting for a digger 3, Leveling the ground 2, Builders at work 2, Waiting for a builder 1.

Build order (placed at min:sec, finished at): saw 0:02→0:26, guard 0:04→0:53, guard 0:06→1:23, tower 0:28→2:07, tower 0:54→never, wood 1:24→never, quarry 2:08→never.

Orders given: place 7, profession 2, sendUnit 1. None refused.

People changing jobs: carrier -> worker 1, carrier -> geologist 1.

People's orders (93 in all, 87 done): carrier haul plank pile -> tower 8, carrier haul stone pile -> tower 8, carrier haul stone pile -> guard 6, worker rest saw 5, carrier haul stone pile -> saw 4, carrier haul plank pile -> guard 4, digger dig guard 4, carrier haul log pile -> saw 4, worker toCraft saw 4, worker craft saw 4, builder build guard 4, digger dig tower 4, builder build tower 4, carrier haul plank pile -> saw 3. None failed.

Fights and contact: first saw player 2 at 52:00.

Warnings: site-stuck 15. Last: 53:20 site-stuck: Big tower site has not moved for 51 min (Waiting for materials) | 53:30 site-stuck: Woodcutter site has not moved for 51 min (Waiting for materials) | 53:40 site-stuck: Stonecutter site has not moved for 51 min (Waiting for materials)


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 31: ollama-qwen2.5-coder-14b (Blue) vs original game NPC: undecided

| min | ollama-qwen2.5-coder-14b | original game NPC |
|---|---|---|
| 15 | 5/3/1768/10/10 | 35/6/2825/10/60 |
| 30 | 5/3/1768/10/10 | 74/16/7634/47/93 |
| 45 | 5/3/1768/10/10 | 81/22/12816/65/95 |
| 60 | 5/3/1768/10/10 | 89/29/17968/82/98 |
| first | - - - - 2 - | 7 8 14 15 24 33 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 16 27 47 54 59 65 70 77 82).

First army orders (game min:sec): none.

#### Game log: ollama-qwen2.5-coder-14b

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 1 min, 1: settlers: No free settlers and every bed taken: build houses.
- 58 min, 3–60: stall: sawmill: waiting for logs 100% of the last 5 minutes.
- 51 min, 10–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (141 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 0 | 16 | 3 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 1768 | 3839 |
| 30 | 0 | 16 | 3 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 1768 | 3839 |
| 45 | 0 | 16 | 3 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 1768 | 3839 |
| 60 | 0 | 16 | 3 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 1768 | 3839 |

At the end: buildings (built+sites) guard 2, tower 1+1, hq 1, saw 1, wood 0+1, quarry 0+1.
People: soldier 6, carrier 4, digger 2, builder 2, geologist 1, worker 1; beds 0. Soldiers: sword 3, bow 3.

Goods produced in the game: plank 4.
Goods consumed in the game: stone 15, plank 12, log 4, saw 1, pick 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- saw (59 building-min): Waiting for logs 99%, Sawing planks 1%, Worker picking up a saw 0%, Stacking outside 0%, Working 0%
- guard (118 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- tower (58 building-min): Idle 100%, Soldiers on the way 0%

Building sites, time per state (site-min): Waiting for materials 172, Waiting for a digger 3, Leveling the ground 2, Builders at work 2, Waiting for a builder 1.

Build order (placed at min:sec, finished at): saw 0:02→0:34, guard 0:04→0:54, guard 0:06→1:20, tower 0:34→1:56, tower 0:54→never, wood 1:22→never, quarry 1:56→never.

Orders given: place 7, profession 1, sendUnit 1. None refused.

People changing jobs: carrier -> worker 1, carrier -> geologist 1.

People's orders (93 in all, 87 done): carrier haul plank pile -> tower 8, carrier haul stone pile -> tower 8, carrier haul stone pile -> guard 6, worker rest saw 5, carrier haul stone pile -> saw 4, carrier haul plank pile -> guard 4, digger dig guard 4, builder build guard 4, carrier haul log pile -> saw 4, worker toCraft saw 4, worker craft saw 4, digger dig tower 4, builder build tower 4, carrier haul plank pile -> saw 3. None failed.

Warnings: site-stuck 15. Last: 53:20 site-stuck: Big tower site has not moved for 51 min (Waiting for materials) | 53:20 site-stuck: Woodcutter site has not moved for 51 min (Waiting for materials) | 53:30 site-stuck: Stonecutter site has not moved for 51 min (Waiting for materials)


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: ollama-qwen2.5-coder-14b (Gold) vs original game NPC: undecided

| min | ollama-qwen2.5-coder-14b | original game NPC |
|---|---|---|
| 15 | 5/3/1845/10/10 | 29/6/2527/10/40 |
| 30 | 5/3/1845/10/10 | 48/8/3254/12/68 |
| 45 | 5/3/1845/10/10 | 60/12/6046/18/82 |
| 60 | 5/3/1845/10/10 | 68/13/7816/28/92 |
| first | - - - - 2 - | 12 13 14 14 33 37 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 12 12 12 18 18 18 18 19 28).

First army orders (game min:sec): none.

#### Game log: ollama-qwen2.5-coder-14b

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 58 min, 3–60: stall: sawmill: waiting for logs 100% of the last 5 minutes.
- 51 min, 10–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (152 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 0 | 16 | 3 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 2 | 1845 | 3638 |
| 30 | 0 | 16 | 3 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 2 | 1845 | 3638 |
| 45 | 0 | 16 | 3 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 2 | 1845 | 3638 |
| 60 | 0 | 16 | 3 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 2 | 1845 | 3638 |

At the end: buildings (built+sites) guard 2, tower 1+1, hq 1, saw 1, wood 0+1, quarry 0+1.
People: soldier 6, carrier 4, digger 2, builder 2, geologist 1, worker 1; beds 0. Soldiers: sword 3, bow 3.

Goods produced in the game: plank 4.
Goods consumed in the game: stone 15, plank 12, log 4, saw 1, pick 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- saw (60 building-min): Waiting for logs 99%, Sawing planks 1%, Worker picking up a saw 0%, Stacking outside 0%, Working 0%
- guard (118 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- tower (58 building-min): Idle 100%, Waiting for a soldier 0%, Soldiers on the way 0%

Building sites, time per state (site-min): Waiting for materials 172, Waiting for a digger 3, Leveling the ground 2, Builders at work 2, Waiting for a builder 1.

Build order (placed at min:sec, finished at): saw 0:02→0:27, guard 0:04→0:48, guard 0:06→1:08, tower 0:28→1:57, tower 0:50→never, wood 1:08→never, quarry 1:58→never.

Orders given: place 7, profession 2, sendUnit 2. None refused.

People changing jobs: carrier -> worker 1, carrier -> geologist 1.

People's orders (94 in all, 88 done): carrier haul plank pile -> tower 10, carrier haul stone pile -> tower 8, carrier haul stone pile -> guard 6, worker rest saw 5, carrier haul stone pile -> saw 4, carrier haul plank pile -> guard 4, digger dig guard 4, builder build guard 4, carrier haul log pile -> saw 4, worker toCraft saw 4, worker craft saw 4, digger dig tower 4, builder build tower 4, carrier haul plank pile -> saw 3. None failed.

Warnings: site-stuck 15. Last: 53:10 site-stuck: Big tower site has not moved for 51 min (Waiting for materials) | 53:20 site-stuck: Woodcutter site has not moved for 51 min (Waiting for materials) | 53:30 site-stuck: Stonecutter site has not moved for 51 min (Waiting for materials)


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 777: ollama-qwen2.5-coder-14b (Blue) vs original game NPC: undecided

| min | ollama-qwen2.5-coder-14b | original game NPC |
|---|---|---|
| 15 | 5/3/1892/10/10 | 33/6/2720/10/50 |
| 30 | 5/3/1892/10/10 | 57/10/4843/21/69 |
| 45 | 5/3/1892/10/10 | 71/13/8279/50/90 |
| 60 | 5/3/1892/10/10 | 76/20/13433/69/91 |
| first | - - - - 2 - | 8 8 17 17 27 40 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 14 21 34 43 50 55 60 69).

First army orders (game min:sec): none.

#### Game log: ollama-qwen2.5-coder-14b

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 58 min, 3–60: stall: sawmill: waiting for logs 100% of the last 5 minutes.
- 51 min, 10–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (188 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 0 | 16 | 3 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 4 | 1892 | 4406 |
| 30 | 0 | 16 | 3 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 4 | 1892 | 4406 |
| 45 | 0 | 16 | 3 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 4 | 1892 | 4406 |
| 60 | 0 | 16 | 3 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 4 | 1892 | 4406 |

At the end: buildings (built+sites) guard 2, tower 1+1, hq 1, saw 1, wood 0+1, quarry 0+1.
People: soldier 6, carrier 4, digger 2, builder 2, geologist 1, worker 1; beds 0. Soldiers: sword 3, bow 3.

Goods produced in the game: plank 4.
Goods consumed in the game: stone 15, plank 12, log 4, saw 1, pick 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- saw (59 building-min): Waiting for logs 99%, Sawing planks 1%, Worker picking up a saw 0%, Stacking outside 0%, Working 0%
- guard (118 building-min): Idle 100%, Soldiers on the way 0%
- tower (58 building-min): Idle 100%, Soldiers on the way 0%

Building sites, time per state (site-min): Waiting for materials 173, Waiting for a digger 2, Leveling the ground 2, Builders at work 2, Waiting for a builder 1.

Build order (placed at min:sec, finished at): saw 0:02→0:31, guard 0:04→0:50, guard 0:06→1:11, tower 0:32→1:43, tower 0:50→never, wood 1:12→never, quarry 1:44→never.

Orders given: place 7, profession 2, sendUnit 1. None refused.

People changing jobs: carrier -> worker 1, carrier -> geologist 1.

People's orders (93 in all, 87 done): carrier haul plank pile -> tower 10, carrier haul stone pile -> tower 8, carrier haul stone pile -> guard 6, worker rest saw 5, carrier haul stone pile -> saw 4, carrier haul plank pile -> guard 4, digger dig guard 4, builder build guard 4, carrier haul log pile -> saw 4, worker toCraft saw 4, worker craft saw 4, digger dig tower 4, builder build tower 4, carrier haul plank pile -> saw 3. None failed.

Warnings: site-stuck 15. Last: 52:50 site-stuck: Big tower site has not moved for 51 min (Waiting for materials) | 53:00 site-stuck: Woodcutter site has not moved for 51 min (Waiting for materials) | 53:10 site-stuck: Stonecutter site has not moved for 51 min (Waiting for materials)


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: ollama-qwen2.5-coder-14b (Gold) vs original game NPC: undecided

| min | ollama-qwen2.5-coder-14b | original game NPC |
|---|---|---|
| 15 | 5/3/1599/10/10 | 30/6/3056/10/50 |
| 30 | 5/3/1599/10/10 | 54/9/5085/18/72 |
| 45 | 5/3/1599/10/10 | 70/13/8235/52/98 |
| 60 | 5/3/1599/10/10 | 78/20/12976/71/99 |
| first | - - - - 3 - | 9 8 17 17 26 37 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 13 18 23 39 52 58 63 71).

First army orders (game min:sec): none.

#### Game log: ollama-qwen2.5-coder-14b

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 1 min, 1: settlers: No free settlers and every bed taken: build houses.
- 58 min, 3–60: stall: sawmill: waiting for logs 100% of the last 5 minutes.
- 50 min, 11–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (2 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 0 | 16 | 3 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 4 | 1599 | 3307 |
| 30 | 0 | 16 | 3 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 4 | 1599 | 3307 |
| 45 | 0 | 16 | 3 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 4 | 1599 | 3307 |
| 60 | 0 | 16 | 3 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 4 | 1599 | 3307 |

At the end: buildings (built+sites) guard 2, tower 1+1, hq 1, saw 1, wood 0+1, quarry 0+1.
People: soldier 6, carrier 5, digger 2, builder 2, worker 1; beds 0. Soldiers: sword 3, bow 3.

Goods produced in the game: plank 4.
Goods consumed in the game: stone 15, plank 12, log 4, saw 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- saw (60 building-min): Waiting for logs 99%, Sawing planks 1%, Worker picking up a saw 0%, Stacking outside 0%, Working 0%
- guard (118 building-min): Idle 100%, Soldiers on the way 0%
- tower (58 building-min): Idle 100%, Soldiers on the way 0%

Building sites, time per state (site-min): Waiting for materials 171, Waiting for a digger 4, Leveling the ground 2, Builders at work 2, Waiting for a builder 1.

Build order (placed at min:sec, finished at): saw 0:02→0:27, guard 0:04→0:46, guard 0:06→1:09, tower 0:28→2:00, tower 0:46→never, wood 1:10→never, quarry 2:00→never.

Orders given: place 7. None refused.

People changing jobs: carrier -> worker 1.

People's orders (91 in all, 85 done): carrier haul plank pile -> tower 10, carrier haul stone pile -> tower 8, carrier haul stone pile -> guard 6, worker rest saw 5, carrier haul stone pile -> saw 4, carrier haul plank pile -> guard 4, digger dig guard 4, builder build guard 4, carrier haul log pile -> saw 4, worker toCraft saw 4, worker craft saw 4, digger dig tower 4, builder build tower 4, carrier haul plank pile -> saw 3. None failed.

Warnings: site-stuck 15. Last: 53:30 site-stuck: Big tower site has not moved for 51 min (Waiting for materials) | 53:40 site-stuck: Woodcutter site has not moved for 51 min (Waiting for materials) | 54:00 site-stuck: Stonecutter site has not moved for 51 min (Waiting for materials)


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 4242: ollama-qwen2.5-coder-14b (Blue) vs original game NPC: undecided

| min | ollama-qwen2.5-coder-14b | original game NPC |
|---|---|---|
| 15 | 5/3/1819/10/10 | 34/6/2792/10/57 |
| 30 | 5/3/1819/10/10 | 63/10/5392/19/91 |
| 45 | 5/3/1819/10/10 | 72/17/11242/58/72 |
| 60 | 5/3/1819/10/10 | 72/17/12422/58/72 |
| first | - - - - 3 - | 7 8 13 16 27 34 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 13 19 33 42 58 58 58 58).

First army orders (game min:sec): none.

#### Game log: ollama-qwen2.5-coder-14b

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 1 min, 1: settlers: No free settlers and every bed taken: build houses.
- 58 min, 3–60: stall: sawmill: waiting for logs 100% of the last 5 minutes.
- 50 min, 11–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (98 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 0 | 16 | 3 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 4 | 1819 | 4280 |
| 30 | 0 | 16 | 3 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 4 | 1819 | 4280 |
| 45 | 0 | 16 | 3 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 4 | 1819 | 4280 |
| 60 | 0 | 16 | 3 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 4 | 1819 | 4280 |

At the end: buildings (built+sites) guard 2, tower 1+1, hq 1, saw 1, wood 0+1, quarry 0+1.
People: soldier 6, carrier 4, digger 2, builder 2, worker 1, geologist 1; beds 0. Soldiers: sword 3, bow 3.

Goods produced in the game: plank 4.
Goods consumed in the game: stone 15, plank 12, log 4, saw 1, pick 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- saw (59 building-min): Waiting for logs 99%, Sawing planks 1%, Worker picking up a saw 0%, Stacking outside 0%, Working 0%
- guard (118 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- tower (58 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%

Building sites, time per state (site-min): Waiting for materials 170, Waiting for a digger 5, Leveling the ground 3, Builders at work 2, Waiting for a builder 1.

Build order (placed at min:sec, finished at): saw 0:02→0:33, guard 0:04→0:53, guard 0:06→1:31, tower 0:34→2:21, tower 0:54→never, wood 1:32→never, quarry 2:22→never.

Orders given: place 7, profession 2, sendUnit 1. None refused.

People changing jobs: carrier -> worker 1, carrier -> geologist 1.

People's orders (93 in all, 87 done): carrier haul plank pile -> tower 10, carrier haul stone pile -> tower 8, carrier haul stone pile -> guard 6, worker rest saw 5, carrier haul stone pile -> saw 4, carrier haul plank pile -> guard 4, digger dig guard 4, carrier haul log pile -> saw 4, builder build guard 4, worker toCraft saw 4, worker craft saw 4, digger dig tower 4, builder build tower 4, carrier haul plank pile -> saw 3. None failed.

Warnings: site-stuck 15. Last: 53:40 site-stuck: Big tower site has not moved for 51 min (Waiting for materials) | 54:00 site-stuck: Woodcutter site has not moved for 51 min (Waiting for materials) | 54:20 site-stuck: Stonecutter site has not moved for 51 min (Waiting for materials)


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: ollama-qwen2.5-coder-14b (Gold) vs original game NPC: undecided

| min | ollama-qwen2.5-coder-14b | original game NPC |
|---|---|---|
| 15 | 5/3/2064/10/10 | 24/6/2776/10/40 |
| 30 | 5/3/2064/10/10 | 28/6/3174/10/50 |
| 45 | 5/3/2064/10/10 | 42/8/4449/23/57 |
| 60 | 5/3/2064/10/10 | 74/16/8574/49/111 |
| first | - - - - 3 - | 7 9 40 41 - 59 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 10 10 10 10 23 32 42 49).

First army orders (game min:sec): none.

#### Game log: ollama-qwen2.5-coder-14b

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 1 min, 1: settlers: No free settlers and every bed taken: build houses.
- 58 min, 3–60: stall: sawmill: waiting for logs 100% of the last 5 minutes.
- 1 min, 6: army: Lost 4 soldiers in the last 5 minutes, and no barracks to train new ones.
- 50 min, 11–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (195 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 0 | 16 | 3 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 2064 | 3940 |
| 30 | 0 | 16 | 3 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 2064 | 3940 |
| 45 | 0 | 16 | 3 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 2064 | 3940 |
| 60 | 0 | 16 | 3 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 | 2064 | 3940 |

At the end: buildings (built+sites) guard 2, tower 1+1, hq 1, saw 1, wood 0+1, quarry 0+1.
People: soldier 6, carrier 4, digger 2, builder 2, worker 1, geologist 1; beds 0. Soldiers: sword 3, bow 3.

Goods produced in the game: plank 4.
Goods consumed in the game: stone 15, plank 12, log 4, saw 1, pick 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- saw (59 building-min): Waiting for logs 99%, Sawing planks 1%, Worker picking up a saw 0%, Stacking outside 0%, Working 0%
- guard (117 building-min): Idle 100%, Soldiers on the way 0%
- tower (58 building-min): Idle 100%, Soldiers on the way 0%

Building sites, time per state (site-min): Waiting for materials 169, Waiting for a digger 5, Leveling the ground 3, Builders at work 2, Waiting for a builder 1.

Build order (placed at min:sec, finished at): saw 0:02→0:38, guard 0:04→0:56, guard 0:06→1:35, tower 0:38→2:26, tower 0:56→never, wood 1:36→never, quarry 2:26→never.

Orders given: place 7, profession 2, sendUnit 1. None refused.

People changing jobs: carrier -> worker 1, carrier -> geologist 1.

People's orders (93 in all, 87 done): carrier haul plank pile -> tower 8, carrier haul stone pile -> tower 8, carrier haul stone pile -> guard 6, worker rest saw 5, carrier haul stone pile -> saw 4, carrier haul plank pile -> guard 4, digger dig guard 4, builder build guard 4, carrier haul log pile -> saw 4, worker toCraft saw 4, worker craft saw 4, digger dig tower 4, builder build tower 4, carrier haul plank pile -> saw 3. None failed.

Warnings: site-stuck 15. Last: 54:10 site-stuck: Big tower site has not moved for 51 min (Waiting for materials) | 54:20 site-stuck: Woodcutter site has not moved for 51 min (Waiting for materials) | 54:30 site-stuck: Stonecutter site has not moved for 51 min (Waiting for materials)


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.

### Map 20261030: ollama-qwen2.5-coder-14b (Blue) vs original game NPC: undecided

| min | ollama-qwen2.5-coder-14b | original game NPC |
|---|---|---|
| 15 | 5/3/1809/10/10 | 25/6/3049/10/40 |
| 30 | 5/3/1809/10/10 | 59/9/5155/22/88 |
| 45 | 5/3/1809/10/10 | 70/14/8684/37/83 |
| 60 | 5/3/1799/10/10 | 79/22/14520/69/91 |
| first | - - - - 2 - | 14 15 16 24 26 35 |

Soldiers every 5 min: 10 10 10 10 10 10 10 10 10 10 10 10 (original game NPC: 10 10 10 10 11 22 22 30 37 47 56 69).

First army orders (game min:sec): none.

#### Game log: ollama-qwen2.5-coder-14b

Advisor tips (checked every game minute; minutes held, first and last minute, the latest text):
- 58 min, 3–60: stall: sawmill: waiting for logs 100% of the last 5 minutes.
- 1 min, 6: army: Lost 4 soldiers in the last 5 minutes, and no barracks to train new ones.
- 51 min, 10–60: land: Your land hasn't grown for 8 minutes: build a small tower at your border to claim more.
- 8 min, 12–19: timing: No smelter yet: the original game NPC usually has one by minute 8 to 11.
- 46 min, 15–60: ore: No coal or iron mine yet: send a geologist to the mountains on your land (95 mountain tiles).
- 41 min, 20–60: timing: No barracks yet: the original game NPC usually has one by minute 13 to 20.

Every 15 min (stock of the main goods; carriers without a job; goods waiting to be carried; land; tiles seen):

| min | log | plank | stone | fish | bread | meat | water | grain | flour | coal | ironore | iron | goldore | gold | sword | spear | bow | idle carriers | waiting | land | seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | 0 | 16 | 3 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 1 | 1809 | 3852 |
| 30 | 0 | 16 | 3 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 1 | 1809 | 3852 |
| 45 | 0 | 16 | 3 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 1 | 1809 | 3852 |
| 60 | 0 | 16 | 3 | 6 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 1 | 1799 | 3852 |

At the end: buildings (built+sites) guard 2, tower 1+1, hq 1, saw 1, wood 0+1, quarry 0+1.
People: soldier 6, carrier 4, digger 2, builder 2, worker 1, geologist 1; beds 0. Soldiers: sword 3, bow 3.

Goods produced in the game: plank 4.
Goods consumed in the game: stone 15, plank 12, log 4, saw 1, pick 1.

What the buildings did (share of their time after being built):
- hq (60 building-min): Idle 100%
- saw (59 building-min): Waiting for logs 99%, Sawing planks 1%, Worker picking up a saw 0%, Stacking outside 0%, Working 0%
- guard (118 building-min): Idle 100%, Soldiers on the way 0%, Waiting for a soldier 0%
- tower (58 building-min): Idle 100%, Waiting for a soldier 0%, Soldiers on the way 0%

Building sites, time per state (site-min): Waiting for materials 173, Waiting for a digger 3, Leveling the ground 2, Builders at work 2, Waiting for a builder 1.

Build order (placed at min:sec, finished at): saw 0:02→0:39, guard 0:04→1:01, guard 0:06→1:21, tower 0:40→1:50, tower 1:02→never, wood 1:22→never, quarry 1:50→never.

Orders given: place 7, profession 1, sendUnit 1. None refused.

People changing jobs: carrier -> worker 1, carrier -> geologist 1.

People's orders (93 in all, 87 done): carrier haul plank pile -> tower 9, carrier haul stone pile -> tower 8, carrier haul stone pile -> guard 6, worker rest saw 5, carrier haul stone pile -> saw 4, carrier haul plank pile -> guard 4, digger dig guard 4, carrier haul log pile -> saw 4, builder build guard 4, worker toCraft saw 4, worker craft saw 4, digger dig tower 4, builder build tower 4, carrier haul plank pile -> saw 3. Not done (outcome: times): ended: the person is gone (became a soldier, defeated or removed) ×4.

Fights and contact: first saw player 1 at 55:00.

Warnings: site-stuck 15. Last: 53:00 site-stuck: Big tower site has not moved for 51 min (Waiting for materials) | 53:10 site-stuck: Woodcutter site has not moved for 51 min (Waiting for materials) | 53:20 site-stuck: Stonecutter site has not moved for 51 min (Waiting for materials)


Script: 1800 turns, 0.0 ms average, worst 1 ms, 0 over 0.3 s, 0 errors. Orders refused: none.
