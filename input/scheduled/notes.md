# scheduled: notes

## Safety limits
- Only modify \`input/scheduled/script.js\` and \`input/scheduled/notes.md\`.
- If the last 3 genuine reports show no improvement in wins, do not make another small fix: redesign and explain the change here.
- A refused safety-scan run is not a genuine report and cannot count as a win-rate observation.

## Report history and trigger
- **13 Nov 2026 — commit \`3bcb5c4\`, game v207:** 0 wins / 0 losses / 8 undecided. The side stayed at HQ only with 10 soldiers and 6 carriers; no buildings, mining, barracks or captures. This was the first genuine failed report.
- **14 Nov 2026 — commit \`63c6af5\`, game v208:** 0/0/8 again. Still HQ only and 10 soldiers; repeated blind corner marches/releases produced no economy or contact. This was the second genuine failed report.
- **14 Nov 2026 — commit \`6217b21\`:** refused before play because a literal escaped newline caused a JavaScript syntax error. Not a genuine tournament report; excluded from the win trend.
- **15 Nov 2026 — commit \`1a73df0\`, game v214, written for script v211:** 0 wins / 0 losses / 8 undecided. The early-mining-rush rewrite built only 6–8 buildings in 7 of 8 games, commonly leaving 18–21 idle carriers and never reaching a mine, smelter or barracks. Its first guard was idle for essentially the entire game, so the border did not reach the mountain. One game did reach mines, smelter, smith, weaponsmith and barracks, but its economy/army collapsed to one soldier and it still did not win. Premature attacks also occurred with only 8 soldiers, before a barracks-backed army existed.
- The last **three genuine reports** therefore show no improvement in wins (0/8 each). The safety trigger is met: this run makes a whole-strategy switch, not another incremental tuning pass.

## Kit and report review
- Read the latest scheduled report, \`output/results.json\`, \`kit/AI_SCRIPT_CHALLENGE.md\`, \`kit/GAME_SUMMARY.md\`, \`kit/PRODUCTION.md\`, \`kit/buildings.js\` and \`kit/items.js\`.
- The report is game version 214 while the previous script advertised 211. The new header is aligned to v214.
- The kit says a military building only pushes the border after a soldier is inside; \`priority\` makes a military building manned first. The old script built a guard but never gave it priority, so it stayed empty and never exposed the nearby mountain.
- A geologist needs a spare pickaxe. The old script delayed geology until after opening sites could consume that tool, and it waited for ore that could not be revealed until the mountain was on owned land.
- The production overview (v214) confirms fish is only a short bridge for mines (4 trips per fish); bread/meat support 10 trips. The new plan uses fish early but reacts to actual mine starvation by building the appropriate food chain.
- The summary describes a start with 25 trees, 13 rock outcrops and coal/iron mountains roughly 17 tiles out. A staffed border foothold is therefore the first strategic prerequisite, not an optional midgame building.

## Strategic reset — border-first bootstrap (game version 214)
This replaces the failed economy-first/early-mining rush with a different opening and army policy:

1. **Claim land first:** place a small guard immediately, set its priority and leave only four soldiers in the field so it can fill. If no mountain becomes available after the first outpost, build a second guard before attempting the metal chain. A guard that is not manned does not expand the border.
2. **Geologist before quarry:** as soon as unsearched mountain is on owned land, assign the geologist while the pickaxe is still spare and send it to actual unsearched mountain tiles. Retire it when the search is exhausted, returning the tool before staffing the quarry.
3. **Smaller population opening:** use a small house rather than an immediate 20-settler house. Add medium houses only as beds fill or settlers become homeless, so the opening does not strand a large idle-carrier pool.
4. **Demand-led production:** after ore is found, build the matching mine(s), fisher if a legal fish site exists, then smelter → toolsmith → weaponsmith → barracks. Build farm/water/mill/bakery and/or pigfarm/butcher only when the corresponding mine reports food starvation. Add a forester when trees are running out.
5. **Staffed expansion and protected army:** prioritize every outpost as well as the core production chain. Increase the outside army target only after the barracks exists. Do not start a siege before a barracks-backed force of at least 24 soldiers; use larger target-specific thresholds, account for visible defenders and low gold strength, and reinforce one siege at a time.
6. **Useful scouting:** use one explorer and choose a known walkable frontier tile instead of repeatedly marching explorers to fixed map corners that often fail pathfinding.

## Validation and next evidence
- \`node --check input/scheduled/script.js\`: passed.
- Forbidden API scan (\`Math.random\`, timers, network, filesystem, \`require\`, \`process\`, \`globalThis\`, \`eval\`, dynamic \`Function\`): clean.
- Local harness checks: opening issues reserve/geologist/ask orders; no attack is issued with 10 soldiers; a barracks-backed force can attack on an \`armyOnly\` turn.
- Only \`input/scheduled/script.js\` and this \`input/scheduled/notes.md\` are to be changed. No files in the actual Hearthlands game repository are touched.
- This rewrite has **not** been tournament-tested. The next genuine report must show: a staffed first guard and border growth; geologist assignment and coal/iron signs; a working quarry/mines and a growing metal chain; houses keeping carriers available; a barracks and a rising soldier curve; and no suicidal attack before the army threshold. Do not claim improvement until the exact new input commit appears in \`output/scheduled/latest.md\` and \`output/results.json\`.
