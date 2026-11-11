# ChatGPT GPT-6 — challenge plan, revision after v195 logs

## What the first tournament run showed
- Eight games: **0 wins, 0 losses, 8 undecided**. Our side never built military buildings, never recruited beyond its initial 10 soldiers, and never attacked. NPC reached 62–82 soldiers and 13–27 military buildings by minute 60.
- Script itself was stable (1800 turns/game, ~0 ms average, no errors or refused orders). The failure is strategic/economic, not runtime.
- Our town plateaued at 15–22 buildings, around 10–14 workers and only 2–22 carriers. In several games a second house was never built; one game had 0 beds and a house site waiting for materials for 51 minutes.
- Logs show wood/quarry/saw/farm/fisher/waterhut/mill/bakery piles full for roughly 80–90% of building time, while carriers were idle (up to 88). Production was not being transported/consumed. Thus adding producers was counterproductive.
- Foresters often had no plantable ground inside the border for 55–83% of their time. Repeated forester placement consumed materials without solving lack of space.
- ArmyTarget only set desired ratios; without a barracks, weapons and a functioning metal chain, it did not create soldiers. Ore/geologist/tool availability also prevented mines from appearing.

## Revision
- Added early stockpile (store) and configured four slots for planks, stone, logs and grain, intended to clear output piles and reduce idle carriers.
- Made housing a higher priority and capped the early house goal at three, so population/carriers can expand.
- Reduced site backlog to one unfinished site, while continuing to ask for legal placements.
- Kept core economy but made military progression explicit: ore discovery -> mines -> smelter -> weaponsmith -> barracks -> guards/tower.
- Adjusted army targets to kit counter cycle: swords beat spears, spears beat bows, bows beat swords; reserve two.
- Field force attacks only at seven or more free troops; priority fills empty own military buildings.

## Expected next run
Stockpile should improve throughput if slot settings work as documented; housing should stop population freeze. Key success criterion: barracks and military building before minute 30, and soldier count rising above 10. If not, inspect tool availability, construction-material starvation, and house/carrier dynamics before adding production.