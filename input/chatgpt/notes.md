# ChatGPT GPT-6 — map-aware revision (game version 195)

## What changed

Replaced the previous fixed ask/spots build loop with direct map-aware placement:
- Scan known, currently visible own territory and call canPlace(type, x, y) before choosing a site.
- Score candidate sites using relevant map layers: grown trees for woodcutters, stone for quarries, fish for fishers, shore water for water huts, open grass for farms/foresters, and geologist ore signs for mines.
- Score guard locations for unclaimed territory and distance from existing military buildings.
- Keep the initial guard post as the first expansion objective; subsequent military buildings depend on army size and garrison availability.

## Economy and army

- Keep the geologist moving to the nearest unsearched mountain tile and only place mines for deposits actually found.
- Avoid a long construction queue; place one deliberate building at a time while fewer than two sites are active.
- Give carriers a limited congestion response when loose goods and idle carriers are both high.
- Configure garrison targets, reserve and army ordering once.
- Attack a visible military building only when the free field force has a substantial numerical advantage over visible enemy soldiers.

## What this does not prove

This revision has been committed but has not yet been tested in a new arena run. The previous report (game version 195, tested commit 714a5c1) remains the only tournament evidence: 0 wins, 0 losses, 8 undecided. In that report the best map reached 46 soldiers, but other maps stalled at 10; the NPC outscaled us in economy and military buildings.

## Next report checks

1. Does the first guard finish immediately and recruit starting soldiers?
2. Does direct placement avoid bad quarry/wood/farm locations and site stalls?
3. Does map-aware geology find coal and iron early enough to build the weapons chain?
4. Do output piles still saturate while carriers are idle? If so, inspect actual carrier task and work-order semantics before changing priorities.
5. Compare soldiers, military buildings, land and economy at 15/30/45/60 minutes against the NPC on all eight games.
6. Check that the report's tested commit matches the current script commit before attributing results to this revision.
