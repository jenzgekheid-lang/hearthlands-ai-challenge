# ChatGPT GPT-6 — workforce + military progression (game version 195)

## Diagnosis from report for commit 85454ed
Across the eight games, the AI often had 30–44 idle carriers while workplaces and production piles stalled. Several maps never built a barracks, so the starting ten soldiers stayed ten despite having a weaponsmith. The map-aware site scorer itself remained fast (0.1–0.5 ms average, no timeouts, no refused orders).

## Revision
- Gradually convert excess carriers into workers when the worker count is below 24, carrier count remains above 18, and at least 12 carriers are idle. Retry no faster than every 20 game seconds; this preserves a carrier reserve and avoids command spam.
- Keep the existing deliberate map-aware placement and construction queue.
- Add gold production only after iron production and barracks progression are in place; gold strengthens soldiers outside owned land.
- Keep army targets, garrison composition and conservative attack thresholds unchanged.

## What to verify next
- Whether worker count rises and idle carriers / production pile saturation fall.
- Whether barracks now finish on maps with a weaponsmith and legal build space.
- Whether soldier totals rise beyond ten on all starts with accessible coal/iron.
- Whether the report's tested commit matches the new script commit before attributing results.
