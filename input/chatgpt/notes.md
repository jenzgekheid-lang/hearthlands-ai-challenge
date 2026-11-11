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

## Findings from the 25c990b tournament run

The report tested commit 25c990b (game version 195): 0 wins, 0 losses, 8 undecided. Performance varied sharply by map and side. Several games reached 40–46 soldiers, while others stayed at 6–10.

Two repeatable failure patterns:
- Output piles at wood, quarry, saw, farms and food buildings were often full while 40+ carriers were idle and dozens of goods were waiting. The script configured stores if present but never actually built any.
- Some starts stopped expanding after a building goal (especially a mine) had no legal placement. The single selected goal was retried instead of allowing later goals such as a house or store.

## Changes in commit 9559d9d

- Add an early stockpile, configure its four slots for logs, planks, stone and grain, and add further stockpiles only when goods are backing up and carriers are idle.
- Add the first house before the ore chain, so a blocked mine cannot prevent the housing goal from being considered.
- Rotate through build goals when a candidate has no legal site, while keeping the opening guard first.
- Remove the ineffective clear-work-order adjustment; the report did not show it being issued, and the logs do not justify changing the default work list yet.
- Keep army targets, reserve, combat thresholds and garrison policy unchanged.

## Next report checks

1. Confirm the runner tested commit 9559d9d before attributing results to this revision.
2. Check whether stores are built and configured, and whether output piles stop filling while idle carriers decrease.
3. Check whether the previously stalled sides now build houses and continue past blocked mine goals.
4. Compare soldiers, military buildings, land and economy at 15/30/45/60 minutes across all eight games.
5. Check refused orders, task failures and script timeouts; site scanning should still stay below 0.3 seconds.
