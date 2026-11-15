# scheduled: notes

## Safety limits
- Only modify `input/scheduled/script.js` and `input/scheduled/notes.md`.
- If the last 3 genuine reports show no improvement in wins, do not make another small fix: redesign and explain the change here.
- A refused safety-scan run is not a genuine report and cannot count as a win-rate observation.

## Report history and diagnosis
- **13 Nov 2026 — commit 3bcb5c4, game v207:** 0 wins / 0 losses / 8 undecided. Every game remained at HQ only, 10 soldiers and 6 carriers. No buildings, mine, barracks or army orders; NPC reached 68–89 buildings and 28–82 soldiers. The script was syntactically safe but its guessed-coordinate placement never found a site.
- **14 Nov 2026 — commit 63c6af5, game v208:** 0/0/8 again. HQ only, no economy, 10 soldiers throughout. The script repeatedly marched six soldiers to blind corners and released them; no sites, no ore, no attacks. This confirmed the failure was structural, not combat tuning.
- **14 Nov 2026 — commit 6217b21:** refused before play because a literal `\\n` escaped into JavaScript (line 22). It is not a third played report; its results are not evidence of strategy performance.
- The previous ask-driven full-chain rewrite never reached the arena because of that syntax error. The two actual reports show no improvement, so this run replaces the whole approach rather than patching a single condition.

## Strategic switch — early mining rush (game version 211)
The new script is deliberately different from the failed blind-march/long-chain plan:

1. **Reliable opening:** request legal sites from `ask`; place a medium house, woodcutter and quarry first, with at most two unfinished sites and explicit material accounting. This establishes carriers/builders and the two raw construction inputs before optional production.
2. **Short metal spine:** geologist searches only actual unsearched mountain tiles; coal/iron mines are placed as soon as ore is known. Both mines can consume the starting/renewed fish as fallback, so the script does not wait for the slow farm–mill–bakery–pig chain. That chain is only a live-advisor fallback if a mine reports starvation.
3. **Earlier army:** smelter → toolsmith → weaponsmith → barracks; keep spare weapon targets at zero and raise the outside mixed army target in stages (20/28/36/42).
4. **Actually man the border:** set `armyReserve=4` rather than 8–10. The old high reserve left small towers idle; the lower reserve allows their three-person garrisons to fill while the barracks replenishes the field target.
5. **Concentrated war:** scout with two explorers, attack one visible enemy military building at a time, prefer empty posts, reinforce a live siege, release stale/captured targets, and take the HQ only after enemy military sites are gone. Defend nearby threats rather than sending the whole army on blind map-corner marches.
6. **Live feedback:** read advisor tips to trigger missing mines, housing or food fallback; keep core workshops/mines prioritized and log concise checkpoints.

## Validation and next evidence
- New source parses as JavaScript; header is game version 211 and required `think(view)` is present.
- No `Math.random`, timers, network, filesystem, dynamic code, or forbidden globals are used.
- Only the two permitted files were changed.
- This commit has **not** been arena-tested. The next genuine report must show sites placed/finished by the opening minutes, ore searched, a barracks and a growing soldier curve, posts manned, and enemy buildings taken. If it again fails, inspect its game log and switch the bottleneck—not claim an improvement from syntax validation.
