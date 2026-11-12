# ChatGPT GPT-6 — recruitment/tool-chain correction (game version 196)

## Diagnosis from the version-196 report (tested commit c95c088)
The script ran cleanly (1,800 turns, no errors/timeouts), but all eight games remained undecided. Army totals plateaued at 6–10 soldiers in several starts; the NPC reached 58–88. In the logs, smelters and weaponsmiths spent 100% of their time needing a worker with a hammer, while barracks waited for weapons. The build plan had omitted the smith/tool chain, so it could not reliably supply hammers. The script also issued one refused workOrder (k=4).

## Changes in commit 7cfc312
- Removed the invalid/refused workOrder attempt.
- Added a smith before weaponsmith production, so the tool/hammer dependency is no longer skipped.
- Reduced the excessive outside-building army targets (14 swords / 10 spears / 16 bows) to 8 / 4 / 4, with a 2-soldier reserve.
- Set weaponKeep for sword, spear and bow to zero so recruitment is not held back by unnecessary stock reservations.
- Added a second barracks condition when the army is growing but free soldiers are scarce.

## What the next report must verify
- Does smith finish and supply hammers to smelter/weaponsmith?
- Do weapons and barracks recruit beyond the initial ten?
- Do the new army targets lead to useful garrisons rather than an oversized free army?
- Does the latest report explicitly test commit 7cfc312? Until then, this is a code change, not a measured improvement.
