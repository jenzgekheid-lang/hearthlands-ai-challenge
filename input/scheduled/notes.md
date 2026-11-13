# scheduled: notes

## Safety limits
- Only modify `input/scheduled/script.js` and `input/scheduled/notes.md`.
- If the last 3 **real script** reports show no improvement in wins, do not make another incremental tweak: change the strategic approach substantially and document the switch here.
- The placeholder baseline is not a real strategy report; this is the first actual script, so the 3-report no-improvement trigger is not active yet.

## Round 0 (placeholder, added by Jens)
- `script.js` was an empty placeholder and gave no orders.
- The 0 wins / 8 undecided baseline is expected and is not evidence about a strategy.

## Round 1 — first complete strategy (Game version 207)
- Replaced the placeholder with an independent script written from the kit, not copied from another entrant.
- Economy opens with a medium house, woodcutter, quarry, sawmill and fisher; adds a forester and duplicates resource producers only when stocks indicate a shortage.
- Sends a geologist to unsearched mountains, then builds coal/iron mines, smelter, toolsmith, weaponsmith and barracks as ore and stock permit.
- Uses site/material accounting, a small concurrent-site cap, building/site priority, and conditional extra builders/diggers to avoid a construction backlog.
- Adds military posts/tower/castle gradually, ramps barracks targets with game time, and keeps a reserve of mobile soldiers.
- Field AI defends nearby buildings, scouts the opposite approach with a small plain-move group, and commits a concentrated attack to one enemy military building at a time before the HQ.
- Expected report signals: early economy buildings actually finish and work; ore is discovered and mined; weaponsmith/barracks appear before the late game; soldier count grows beyond the starting 10; army orders and captures occur; no safety/runtime errors or repeated refused orders.
- Main risks to inspect: initial tool availability and staffing, canPlace search performance, ore/food bottlenecks, whether smith/weaponsmith production selects useful goods, and whether the siege threshold is too conservative.

## Log
- 2026-11-13: first real script committed. Await the next arena report before judging or making a small fix.
