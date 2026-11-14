# scheduled: notes

## Safety limits
- Only modify `input/scheduled/script.js` and `input/scheduled/notes.md`.
- If the last 3 real reports show no improvement in wins, stop incremental tuning: redesign the strategy and document the change here.
- The empty placeholder is not a real report. One full-strategy report exists so far; the three-report trigger has not formally elapsed.

## Report review — 14 Nov 2026 (game version 208, tested commit 63c6af5)
- Result: 0 wins / 0 losses / 8 undecided. This is a genuine failed strategy run, not the placeholder.
- In every game the scheduled side stayed at exactly 1 building (HQ), 10 soldiers and 6 carriers for the full 60 minutes. It never placed a site, staffed a production building, searched ore, trained troops or captured anything.
- The script did not crash, exceed 0.3 s or receive refused orders. Its only orders were hundreds of repeated `march`/`release` cycles to blind corner coordinates. That is a logic/placement failure, not a runtime problem.
- The old economy's guessed-coordinate `spot()` search never returned a place. It also did not issue the kit's `ask` command, which returns authoritative legal building sites in `economy.spots`. The field army therefore had no economy behind it and the blind scout loop consumed turns without creating contact.
- Opponent scale at minute 60: roughly 69–87 buildings, 13–28 military buildings and 50–82 soldiers depending on map/side. A static 10-soldier force cannot win.

## Strategic switch — commits 2482c1d → 00b1630 → a21b751 (Game version 210)
This is a full change of approach, not a small balance tweak:
1. **Ask-driven placement:** request up to six candidate types from the game and build only from returned `E.spots`; remove guessed tile scanning and use site/material accounting. Keep at most two unfinished sites.
2. **Dependency economy:** wood + quarry → saw → housing and food; add farm/water/mill/bakery and pigfarm/butcher so coal and iron mines have food; geologist searches only actual unsearched mountains; metal → smith → weaponsmith → barracks.
3. **Territory and workforce:** add staffed guard posts early and expand toward towers/castles only as soldiers/carriers permit; use housing when beds or idle carriers become scarce; prioritize sites and essential production rather than filling the map with optional buildings.
4. **Army:** set a stable mixed outside target (24→34→44), retain 8–10 free field soldiers, zero unnecessary spare weapons, and reinforce one live siege. Attack the nearest accessible enemy military building with a type/manning-aware force threshold; HQ only after military targets are gone. Use limited probes only when there is no contact, not perpetual corner marches.
5. **Version alignment:** update the header to game version 210 and guard log reads on `armyOnly` turns.

## Validation / open risks
- Latest source readback: 11,590 characters (the ask-priority commit adds a small amount); `think(view)`, Game version 210, and the required ask/place/armyTarget/attack paths are present.
- Forbidden API scan: clean (`require`, `process`, `globalThis`, `eval`, `Function`, `constructor`, `fetch`, random/timer APIs absent).
- No arena run has yet tested commits 2482c1d/00b1630. Do not claim a win-rate improvement until the exact commit appears in a new report.
- First things to inspect in the next report: any buildings/sites by minute 5–10; `ask` candidate availability and refused place orders; carrier/idle-carrier trend; farm/food inputs; first geologist/mines; barracks and soldier curve; whether enemy buildings become visible and a siege is actually launched.
