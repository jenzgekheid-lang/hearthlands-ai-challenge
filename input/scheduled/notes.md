# scheduled: notes

## Safety limits
- Only modify `input/scheduled/script.js` and `input/scheduled/notes.md`.
- If the last 3 genuine reports show no improvement in wins, do not make another small fix: redesign and explain the change here.
- A refused safety-scan run is not a genuine report and cannot count as a win-rate observation.

## Report history and trigger
- **13 Nov 2026 — commit `3bcb5c4`, game v207:** 0 wins / 0 losses / 8 undecided. The side stayed at HQ only with 10 soldiers and 6 carriers; no buildings, mining, barracks or captures. This was the first genuine failed report.
- **14 Nov 2026 — commit `63c6af5`, game v208:** 0/0/8 again. Still HQ only and 10 soldiers; repeated blind corner marches/releases produced no economy or contact. This was the second genuine failed report.
- **14 Nov 2026 — commit `6217b21`:** refused before play because a literal escaped newline caused a JavaScript syntax error. Not a genuine tournament report; excluded from the win trend.
- **15 Nov 2026 — commit `1a73df0`, game v214, written for script v211:** 0 wins / 0 losses / 8 undecided. The early-mining-rush rewrite built only 6–8 buildings in 7 of 8 games, commonly leaving 18–21 idle carriers and never reaching a mine, smelter or barracks. Its first guard was idle for essentially the entire game, so the border did not reach the mountain. One game did reach mines, smelter, smith, weaponsmith and barracks, but its economy/army collapsed to one soldier and it still did not win. Premature attacks also occurred with only 8 soldiers, before a barracks-backed army existed.
- The last **three genuine reports** therefore show no improvement in wins (0/8 each). The safety trigger is met: this run makes a whole-strategy switch, not another incremental tuning pass.

## Kit and report review
- Read the latest scheduled report, `output/results.json`, `kit/AI_SCRIPT_CHALLENGE.md`, `kit/GAME_SUMMARY.md`, `kit/PRODUCTION.md`, `kit/buildings.js` and `kit/items.js`.
- The report is game version 214 while the previous script advertised 211. The new header is aligned to v214.
- The kit says a military building only pushes the border after a soldier is inside; `priority` makes a military building manned first. The old script built a guard but never gave it priority, so it stayed empty and never exposed the nearby mountain.
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
- `node --check input/scheduled/script.js`: passed.
- Forbidden API scan (`Math.random`, timers, network, filesystem, `require`, `process`, `globalThis`, `eval`, dynamic `Function`): clean.
- Local harness checks: opening issues reserve/geologist/ask orders; no attack is issued with 10 soldiers; a barracks-backed force can attack on an `armyOnly` turn.
- Only `input/scheduled/script.js` and this `input/scheduled/notes.md` are to be changed. No files in the actual Hearthlands game repository are touched.
- This rewrite has **not** been tournament-tested. The next genuine report must show: a staffed first guard and border growth; geologist assignment and coal/iron signs; a working quarry/mines and a growing metal chain; houses keeping carriers available; a barracks and a rising soldier curve; and no suicidal attack before the army threshold. Do not claim improvement until the exact new input commit appears in `output/scheduled/latest.md` and `output/results.json`.


## 17 Nov 2026 — full strategy pivot after the v217 report

### Evidence and safety trigger

The latest scheduled report is for game version 217, written for the old script header version 214, input commit `752f921`. `output/results.json` records **0 wins, 0 losses, 8 undecided**. The last three genuine scheduled reports (14, 15 and 16 November) all remained at 0 wins, so the three-report safety rule is met again. The refused/syntax-invalid run is not counted as a tournament result.

The 16 November report shows two distinct failure modes:

- Seven of eight games stalled with one military building, no working mine chain, and no meaningful land expansion. The script's own notes recorded coal and iron signs (`ore CI`) and no unsearched mountain, but those games still did not place mines. Several settlements grew to roughly 60–80 people with a large idle-carrier surplus while the productive chain remained absent.
- The one developed game (Map 777, Blue) reached the smelter, smith, weaponsmith and barracks, and recorded 23 soldiers in its detailed end state. It still made no attack or capture. Its guard buildings spent 100% of their recorded building time idle, with 0% of time showing soldiers on the way. The report's order totals contain no `sendIn` or `attack` orders, and there were no captures or kills.

This is not a reason for another small numerical adjustment. The old plan relied on rotating `ask` queries, expanded housing as beds filled, relied on priority/automatic garrison behaviour, and required a large fixed field-army threshold before attacking. The current kit documents `canPlace` for direct legal-site checks and `sendIn` for explicit garrisoning.

### New strategy: garrison-first, map-scanned economy

The script has been replaced, not incrementally patched. It is now marked **Game version 217**.

1. **Explicit border anchor:** place an early guard, set it to one fighter and zero archers, and explicitly send one swordsman inside. Apply the same one-soldier land-claim rule to later posts. Keep a three-soldier field reserve.
2. **Direct map placement:** scan owned terrain and known ore signs, then call `canPlace` before choosing a site. Mine sites must be on mountain and near the matching coal/iron signs. This removes dependence on the previous rotating `ask`-only placement loop; `ask` remains a fallback if map/canPlace data is unavailable.
3. **Carrier-aware growth:** keep at most two unfinished sites and place one new site per turn. Add housing only when carriers are genuinely scarce (under eight with fewer than four idle), or when homelessness confirms the need. Do not create medium houses merely because beds are filling.
4. **Dependency-led production:** guard, wood, quarry, saw, discovered coal/iron mines, fisher, smelter, smith, weaponsmith and barracks. Add the bread/meat chain only when the advisor actually reports mine food starvation and fish stock is low. Expand to a second guard when ore access is blocked or the advisor reports stalled land growth.
5. **Useful scouting and sieges:** send one explorer beyond the visible neutral frontier, then inspect the perimeter around a discovered enemy HQ. Attack known manned enemy military buildings first; leave HQ until later. Replace the old hard 24-soldier gate with target-specific force thresholds and reinforce an active siege in measured increments.
6. **Recruitment:** target a staged 10–30 outside-building soldiers, but stop increasing the target when carriers or idle carriers collapse. The target is deliberately subordinate to a functioning transport economy.

### Validation performed

- JavaScript syntax check: passed (`node --check`).
- Mock-view smoke checks: passed for a legal opening guard site, geologist recruitment, explicit `sendIn`, direct coal-mine placement, attack dispatch, and an army-only turn.
- Forbidden API scan: clean (no random, timers, network calls, Node/process APIs, eval or dynamic Function).
- These are local static/mock checks, **not** an arena result. The new strategy has not yet been tournament-tested.

### Scope

Only `input/scheduled/script.js` was changed in the script commit, followed by this notes update in `input/scheduled/notes.md`. No other challenge files and no files in the actual Hearthlands game repository were changed.

Script commit: `53868dbae9acddd3a58726eef16f946c7e7149c6`.


## 18 Nov 2026 — expeditionary frontier pivot after the v224 report

### Evidence and safety trigger

The latest genuine report is `output/scheduled/2026-11-17-0b02085.md`: game version 224, written for script version 217, input commit `0b02085`. It recorded **0 wins, 0 losses, 8 undecided**. The previous two genuine reports (15 and 16 November) were also 0/8, so the last three genuine reports (15–17 November) all show no win improvement. The safety trigger is met again; this is a whole-strategy change.

The v224 report is more informative than the previous diagnosis:

- Across all eight games there were **0 buildings taken and 0 kills**; seven towns were marked stuck.
- Several developed games reached 20–34 soldiers and had working mines, smelter, smith, weaponsmith and barracks. The report's notes even recorded three posts with six garrison soldiers in one game. Therefore, the old interpretation of the buildings' “Idle 100%” activity line as proof that the posts were empty was wrong: explicit `sendIn` did work. The missing step was getting the army into contact with a visible enemy target.
- The old scout selector required a neutral tile to be directly adjacent to owned land (`ownNear`). That confines exploration to the immediate home-border ring; it does not advance to the newly revealed fog frontier farther out. The reports show only roughly 3.3k–4.7k tiles seen on a 240×240 map, and no successful attack/capture.
- The old expansion logic also hard-capped the town at two guards plus one big tower. Seven of eight games then stopped growing, with “land has not grown” tips persisting for much of the game.
- In one 4242/Blue game the town stalled at seven buildings without mines. Without a pioneer, mountains outside the initial border could not be claimed and searched. The forester also repeatedly ran out of free ground inside the small border.

### Kit review: game version 224

Reviewed the current `kit/AI_SCRIPT_CHALLENGE.md`, `kit/CHALLENGE.md`, `kit/GAME_SUMMARY.md`, `kit/PRODUCTION.md`, `kit/buildings.js` and `kit/items.js`.

Relevant supported mechanics are already in the v224 kit: explorers, geologists and pioneers move with `sendUnit`; a pioneer claims neutral land tile by tile along the route; a `look` building reveals fog 24 tiles around it without claiming land; `toolKeep` can retain spare picks and shovels; `canPlace` validates a complete building footprint; and `sendIn` explicitly garrisons a post. The v222 bow rule gives bowmen at least 80% strength outside their own land. The current report has banner, armor and veteran mechanics off, so the script does not spend resources on those systems.

### New strategy: expeditionary corridor

This is a strategic replacement, not another numerical adjustment:

1. **Explore beyond the home ring:** recruit up to three explorers and give them different directional sectors. Choose any currently visible, walkable fog-frontier tile with unknown neighbours—not just a neutral tile touching the home border. Prefer frontier tiles adjacent to enemy-owned land and toward the map centre. This should reveal actual enemy buildings for the attack planner.
2. **Claim a route:** reserve spare shovels with `toolKeep`, recruit a pioneer, and repeatedly send it to the next visible neutral frontier. The pioneer claims the corridor tile by tile, allowing the border and building sites to move toward mountains and the opponent.
3. **Search newly owned mountains:** recruit a geologist early and keep the pick available while the pioneer expands. Send it to each unsearched mountain. Once it has completed the currently available search, return it to the carrier pool and release the pick for quarry/mining work.
4. **Extend vision and territory in parallel:** place up to two `look` towers on the owned fog edge for their 24-tile sight. Build a forward ladder of up to six small guards, one explicit garrison soldier per post, rather than stopping at the previous three-post cap.
5. **Keep the economy compact:** establish wood, quarry, saw and fish; reserve the starting shovel for the pioneer before placing a forester. Add the forester after the pioneer exists (or the toolsmith can supply another shovel), then add food chains only when mine-starvation tips require them. Keep a carrier floor rather than filling every bed.
6. **Attack as soon as contact allows:** grow the barracks target from 8 to 12, 16, 22 and 28 outside soldiers (up to 30 only with a strong carrier surplus). Attack visible empty military buildings first, then manned military buildings, and the HQ when no military target is visible. Reinforce one siege at a time and keep four soldiers outside the attacking group for defence.

The key strategic change is that scouts reveal the route, pioneers turn that route into owned land, and forward outposts follow it. The old plan built a few posts around home and then waited for an enemy building that its scout logic was unlikely to reveal.

### Validation and scope

- `node --check`: passed.
- Mock smoke tests: opening guard, explicit garrison, siege dispatch, explorer frontier dispatch, pioneer recruitment and pioneer frontier claim all passed.
- Forbidden API scan (`Math.random`, timers, network, filesystem, `require`, `process`, `globalThis`, `eval`, dynamic `Function`): clean.
- Script header is aligned to the latest report's game version, **224**.
- This is static/mock validation, not a tournament result. The new strategy has not yet been arena-tested; do not claim a win improvement until the exact new input commit appears in the next scheduled report and `output/results.json`.
- Only `input/scheduled/script.js` and `input/scheduled/notes.md` are to be changed. No other challenge files and no files in the actual Hearthlands game repository are touched.


## 19 Nov 2026 — compact production surge and low-risk raid pivot after the v240 report

### Safety trigger and tournament evidence

The three latest genuine reports (16, 17 and 18 November) all recorded **0 wins out of 8**. All three reports recorded 0 wins, 0 match losses and 8 undecided. The 18 November report's separate war summary says the opponent took one building; that is a building loss, not a lost match. The safety threshold is met, so this is a whole-strategy change, not another small adjustment.

The 18 November report (output/scheduled/2026-11-18-be52b9f.md, game version 240, script input be52b9f) shows why the expeditionary approach did not convert into wins:

- Three of eight towns were still marked stuck. Several games never reached a barracks or a complete iron chain; the strongest games reached 29–38 field soldiers but the NPC reached 73–92.
- The script hired three explorers, one pioneer and one geologist, expanded to as many as six posts, and kept a 28-soldier field target. In the worst battle, carriers fell to 2 with 0 idle, while the army was reduced from 29 to 7. That is too much specialist, garrison and army demand for the transport workforce.
- The pioneer repeatedly received the error "spot not next to the border" (12–39 per game). The selector chose fog-edge tiles, not necessarily neutral tiles directly adjacent to owned land.
- The attack selector had a logic inversion: it chose manned military targets before empty targets. It also ignored all unguarded economic buildings. The single serious battle attacked four times from 37:25, lost 38 soldiers, killed 17, and the opponent captured a guard. The 10–18 soldier thresholds were far too low for a defended position.
- Production was capped at one coal mine and one iron mine. Deposits wore out, weaponsmiths spent most of their time waiting for coal/iron, and barracks often waited for weapons. The forester repeatedly reported no free planting ground while consuming a worker.
- Our side ended the report with zero gold, while opponents collectively held 269 gold. With the vault switch enabled, a discovered gold deposit is worth pursuing for the field-strength bonus.

### Kit v240 review

Reviewed the current kit/AI_SCRIPT_CHALLENGE.md, kit/PRODUCTION.md, kit/buildings.js and kit/items.js. The current view exposes visible and remembered enemy buildings, enemy soldiers currently seen, the grounds metadata (walk, mine, water, land), multiple ore signs, canPlace, sendIn, toolKeep, and the gold/vault state. The script now uses the ground metadata rather than assuming numeric terrain IDs. It does not use optional banner or armor mechanics because the report has those switches off.

### New strategy: compact production surge + low-risk raids

This replaces the wide expeditionary ladder with a smaller economy and a much more selective army:

1. **Keep the transport workforce alive:** limit exploration to two scouts, one pioneer and one geologist; stop building foresters; expand housing toward eight small houses only when beds or carrier availability justify it. Keep a 12-carrier / 5-idle warning floor before increasing army targets.
2. **Claim land correctly:** the pioneer scans every tile and only receives a neutral, walkable, land-counting target with an owned tile directly adjacent. It advances one border tile at a time instead of being sent to a distant fog edge. The explorer still uses fog-edge targets to reveal the opponent.
3. **Build a scalable resource spine:** retain one early coal and iron mine, then add a second mine of each kind only after the first smelter is working and there is a distinct ore cluster at least 12 tiles from an existing mine. Add a second smelter and weaponsmith only after the second deposits are operational and carrier surplus exists. Add a second fisher when mine-food tips and low fish stock show a real shortage.
4. **Use gold when the map offers it:** search gold signs, build a gold mine and gold smelter when found, then a vault when the vault switch is enabled. No gold chain is forced on maps without gold ore.
5. **Limit defensive overhead:** use at most two staffed guard posts, one fighter each, and a four-soldier field reserve. Army targets rise toward 52 only when carrier and idle-carrier counts support it; otherwise recruitment is capped.
6. **Raid instead of suiciding into the army:** attack exposed non-military buildings first, then empty military buildings. Skip targets covered by another enemy military building or surrounded by visible enemy soldiers. Attack manned military buildings only with a much larger field force; attack the HQ last. Track field losses during each siege and retreat to the HQ after four losses or 30% of the starting field force.

### Validation and scope

- JavaScript parser check: passed with a syntax compilation check.
- Mock smoke tests: passed for an adjacent-border pioneer target, an exposed economic-building raid, and withholding an attack on a defended military target with an undersized force.
- Forbidden API scan: clean (no Math.random, timers, network, filesystem, require, process, globalThis, eval or dynamic Function in the submitted script).
- Script header aligned to game version **240**.
- This is static/mock validation only. The v240 tournament report is for the previous input commit be52b9f; the new strategy has not yet been arena-tested. Do not claim a win improvement until the next report names the new input commit.
- Only input/scheduled/script.js and input/scheduled/notes.md were changed. No other challenge files and no files in the actual Hearthlands game repository were modified.


## 20 Nov 2026 — v245 renewable-economy and supported-army reset

### Safety trigger and tournament evidence

The last three genuine scheduled reports (17, 18 and 19 November) each recorded **0 wins, 0 match losses and 8 undecided**. The three-report safety rule is met again, so this is a whole-strategy replacement.

The latest report is `output/scheduled/latest.md`, game version 243, written for input commit `b0f4401`. It records 0 buildings taken, 6 kills against 4, only 41 gold at the end against 354 for the opponents, and 6 stuck towns.

The detailed games expose several concrete failures:

- **Housing runaway:** all eight games built eight small houses. Seven finished with roughly 69–77 carriers and 69–77 idle carriers, while remaining at 7–10 soldiers. Beds filling repeatedly was being mistaken for a need to expand the workforce, even when the carrier pool was already enormous.
- **No renewable timber:** the script never built a forester. Woodcutters spent 51–88% of their working time reporting no grown trees; sawmills then waited for logs. One second-guard site remained unfinished for the rest of a game because its materials could not be sustained.
- **A single developed army still failed to engage:** Map 4242 Blue reached 45 soldiers and completed barracks production, but first saw the opponent only at 55:00 and took no buildings. The attack planner discarded remembered enemy buildings and only considered currently visible targets.
- **The other seven games did not reach a viable army:** several never completed the metal chain; one game reached the barracks only at 59:28 and ended with 3 soldiers.
- **The previous pioneer route was still unreliable:** reports show repeated cut-off claim paths (up to 49 in one game), and explorer path failures also occurred. More pioneer orders were not solving the contact problem.
- **The gold chain did not translate into strength:** one game produced 41 gold, but the script had no banner target, so it did not turn the new gold/banner mechanic into a supported field force.

### Kit changes since the previous script

Reviewed current main after commit `3cf8c87`, the updated `kit/AI_SCRIPT_CHALLENGE.md`, and `kit/PRODUCTION.md` (game version 245).

Important changes and supported fields:

- Since game version 244, all seven optional switches are on in live games, arena, tournaments and the lab: vault, banner, armor, veteran, gear, dock and hunter. The previous script was tested with banner/armor/veteran/gear off.
- `view.economy.town[].status` now exposes the building's current human-readable status, which can identify dry woodcutters and worn-out or food-starved mines.
- `view.economy.spots` is populated by `ask`; the helper returns resource-bearing sites, including legal fisher docks and hunting grounds. `canPlace` checks the building footprint but **does not** check whether nearby resources exist.
- The fisher dock rule and hunter's forest-game requirement are active. The hunter uses one of the two extra starting bows and provides meat for iron mines.
- Banners provide nearby soldiers with a strength bonus; gold in vaults contributes to covered soldiers' strength outside friendly land. Iron armor reduces incoming damage, and gear-enabled armorers can repair broken armor.

### New strategy: renewable economy, forward scouting, and a supported army

This replaces the compact-raid strategy. It deliberately removes the unreliable pioneer expansion loop and addresses the root causes visible in the report:

1. **Stop the housing cascade:** build a small house only when carriers fall below 9, idle carriers fall below 3, homelessness appears, or the advisor confirms a settler shortage. Cap this opening at four small houses; do not build a house just because beds are filling.
2. **Regrow the timber supply early:** build one forester as soon as the woodcutter exists. Add a second forester when the woodcutter's live status reports no grown trees. Keep one woodcutter rather than adding more demand to a depleted forest.
3. **Use one explorer, not a pioneer swarm:** recruit one explorer and choose a nearby, visible, walkable fog-edge tile within a short travel radius, biased toward the map centre. Do not issue pioneer claims; the previous reports repeatedly recorded cut-off claims. Recruit one geologist initially and a second only after the toolsmith is operating; send them to distinct unsearched mountain tiles.
4. **Use the current site helper correctly:** ask for up to six current priorities and rotate through the queue. Use returned spots for wood, forest, quarry, fisher/dock, hunter/game, water and ore mines; revalidate footprints with `canPlace`. For non-resource buildings, use legal `canPlace` fallback scans. Reject mine sites too close to an existing mine so a replacement must use a distinct deposit.
5. **Build a food-backed metal chain:** establish fisher and hunter when legal sites exist. Add water hut → farm → mill → bakery after the first coal mine so coal production has a durable bread source; hunter meat supports iron mining. Replace coal/iron mines when their live status reports thinning or worn-out deposits and a distinct ore site is available.
6. **Staff a short border ladder:** keep up to two guards initially and a third only if ore access remains blocked. Set each guard to one fighter and zero archers, explicitly send one swordsman inside, and keep four soldiers in reserve. No pioneer-driven six-post expansion.
7. **Exploit v244+ army mechanics:** set a 24-soldier outside target after the barracks starts, rising to 40 when the metal chain is stable. Build the gold chain and vault when gold is found; request two to four bannermen when gold production exists. Build an armorer when iron and the barracks are established, request iron armor for the field mix, and enable broken-armor repair.
8. **Attack known targets instead of waiting for perfect visibility:** consider both visible and recently remembered enemy military buildings. Prefer empty posts, then defended posts, with a conservative strength estimate from visible defenders and building type. Keep six fighters out of each attack group, require at least eight fighters for a manned target, reinforce one siege at a time, and retreat after four losses or 30% of the starting siege group.

### Validation and scope

- `node --check`: passed.
- Mock tests passed for the opening woodcutter, early forester placement, geologist recruitment and dispatch, explicit guard garrison, attack on a recently remembered empty enemy post, withholding an attack on a manned post with an undersized force, housing restraint with a large carrier surplus, retreat after siege losses, and the early bread-chain response when coal-mine food is short.
- Follow-up hardening also keeps remembered enemy buildings eligible when the kit does not supply a `seenAt` timestamp, and moves the bread chain ahead of the smelter when fish/coal-mine food is short or the first coal mine has been running for 15 minutes.
- Forbidden API scan: clean (no random calls, timers, network, filesystem, Node/process APIs, eval or dynamic Function).
- Script header aligned to game version **245**.
- The new script has **not** been tournament-tested. As of this update, `output/results.json` still records the 19 November run for `b0f4401`; the 20 November kit/docs commit did not add a newer scheduled arena result. Do not claim improvement until a report names the new input commit.
- Only `input/scheduled/script.js` and `input/scheduled/notes.md` were changed. No other challenge files and no files in the actual Hearthlands game repository were modified.

Script commits: `3d57f035ac671b4a637e25c52a14b13a89af33d5` (full rewrite) and `662f0ac9cdd29238203c22b57c0b154cc0361672` (early bread-chain and remembered-target hardening).


## 21 Nov 2026 — v247 forward-corridor and expeditionary-army reset

### Safety trigger and report evidence

The three latest genuine scheduled tournament reports (18, 19 and 20 November) all recorded **0 wins, 0 losses and 8 undecided**. The three-report safety condition is met, so this is a strategy-level change, not another incremental tweak.

The latest report is \`output/scheduled/latest.md\`, game version 245, written for input commit \`d91d2c3\`. It recorded 0 buildings taken, 0 kills, 0 gold against 271 for the NPC, and all eight towns marked stuck. The report shows two different failure modes:

- Some games reached 26 buildings and 28 soldiers, but land stopped growing at 1,459 tiles after the second guard. The script had no next territorial objective and never attacked or captured anything.
- Other sides stalled at 14 buildings and 10 soldiers, with no mines or smelter. Three mountain tiles were on the land, but no geologist was recruited.
- The gold-side games had 5–8 idle carriers and roughly 90–101 goods waiting to be carried. The script kept sending two garrison-setting orders every turn: 3,297 \`fighters\` and 3,297 \`archers\` commands in one game.
- The previous army waited for a visible military building before acting. It had no attack-move expedition, so the enemy was discovered too late or not at all.
- The barracks spent up to 100% of its time waiting for iron armor for new spearmen. The previous script requested armor for swords, spears and bows at once, delaying basic recruitment.

### Kit v247 changes

Reviewed the current main branch and the v246/v247 kit changes. v247 adds the \`carryfair\` carrier allocation rule and a new \`carriers\` advisor tip. The tip identifies a workshop that has waited for goods while those goods are in stock and no carrier is idle, or a prolonged absence of idle carriers. The script uses that signal to request housing only when delivery capacity is genuinely short. The optional \`scriptInfo\` minute snapshot is off by default, so the strategy does not depend on it.

### New strategy: forward corridor plus expeditionary contact

This replaces the previous two-post, wait-for-visibility plan:

1. **Build the first border post early, then keep expanding.** Use the kit's military spot answers plus bounded \`canPlace\` candidates around the HQ and existing posts. Score each candidate by neutral land, unexplored area, mountain tiles and direction toward the map centre. Keep up to five small guards, add up to two big towers after the frontier is established, and add a castle only after the army is large enough. This replaces the old arbitrary placement near the home ring and the hard stop at two guards.
2. **Staff posts through priority and the game's automatic garrison system.** Set minimum fighter counts (guard 1, tower 2, castle 3), zero archers, and turn on military-building priority. Stop issuing manual \`sendIn\` orders. Read the actual fighter/archer settings from \`view.economy.town\`; \`view.buildings\` exposes troops, not those settings. This also removes the thousands of duplicate garrison-setting commands.
3. **Secure geology before the quarry takes the opening pick.** Attempt geologist recruitment as soon as an unsearched mountain is inside our border and a pick is free. Delay the first quarry until the first post is staffed (and, if needed, a second post has pushed the border onto mountain), so the quarry does not take the opening pick before geology can start. Briefly defer it while recruitment is pending, then keep the geologist moving across distinct unsearched tiles. Continue the food-backed coal/iron chain once ore is identified.
4. **Keep the renewable economy, but respond to the v247 carrier signal.** Retain one woodcutter, sawmill and early forester. Do not add a second forester when the existing one says there is no free ground to plant; expand the border instead. Use the new \`carriers\` tip along with settler/weapons tips to decide when another house is warranted. v247's carryfair handles fairer delivery allocation without extra script commands.
5. **Recruit an unarmored field army first.** Set staged targets up to 44–46 soldiers when both mines and the metal chain are stable. Request bow armor only at first; do not armor all three weapon classes before the barracks has recruited. Add sword armor only after a large force and surplus iron exist. Keep a small reserve for home defence.
6. **Make contact proactively.** Keep one explorer moving along the visible fog edge toward the map centre. When no enemy building is visible and at least 14 healthy field fighters are available, send a supported 8–12 soldier attack-move expedition toward known enemy land or the central frontier. This is designed to discover and engage the opponent instead of waiting indefinitely for a lookout to reveal a target.
7. **Attack military objectives once contact is made.** Prefer empty posts, then defended posts, and the HQ last. Estimate nearby visible enemy strength and garrison size, keep six fighters back, reinforce one siege at a time, and retreat after sustained field losses. If a known defended target is too strong, wait for reinforcement rather than sending an attack-move column into its range.

### Validation and scope

- JavaScript syntax compilation: passed.
- Static forbidden-API scan: clean (no random calls, timers, network, filesystem, Node/process APIs, eval, dynamic Function, Math.hypot, Math.sin or Math.cos).
- The script header is aligned to game version **247**.
- This is static validation, not a tournament result. The latest published scheduled report still tests input commit \`d91d2c3\` on game version 245. Do not claim a win improvement until a later report names this new input commit.
- Only \`input/scheduled/script.js\` and \`input/scheduled/notes.md\` are intended to change. No challenge kit, output, or actual Hearthlands game files are modified.



## 22 Nov 2026 — v248 pioneer-first economy and release-after-capture warfare

### Safety trigger and corrected report reading

The last three genuine scheduled reports (19, 20 and 21 November) all recorded **0 wins out of 8**. The three-report safety threshold is met, so the previous v247 plan has been replaced at the strategy level.

The 21 November v247 report is more nuanced than the pre-report notes above: it recorded **11 buildings taken and 157 kills against 152**, but still no wins. The main problem was not an inability to fight at all; it was failing to turn local captures into elimination before the 60-minute limit.

The report exposed several distinct failures:

- **Resource deadlock:** on the 4242 Gold map the AI finished with only 10 soldiers, no coal or iron mines, and no geologist. Three guards did not reach a mountain. Removing the pioneer had removed the only reliable way to claim a short neutral corridor when the mountain was outside the initial military border.
- **Population and logistics collapse:** on 31 Gold the army peaked at 44 soldiers around minute 30, then fell to 16 by minute 60 after 37 losses. Carriers fell to 2 and 119 goods were waiting. Six houses were not enough to replace the population lost in battle.
- **Poor conversion of captures:** on 777 Gold the army reached 46 soldiers, but first saw the opponent only around minute 38 and took one tower. Other games took several guards but did not continue through the remaining military buildings and HQ.
- **Weak home defence:** on 31 Blue the HQ fell at 27:47 while the opponent still had military buildings, so the game did not end in our favour.
- **Garrisons could not recover:** the previous script set archers to zero in every guard and tower. It also treated held soldiers as available field troops. The game rules say that soldiers with an attack or march order are held, and military buildings only call free, unheld soldiers.
- **A real command/view mismatch:** the old script checked town.prio to decide whether to issue military priority. For a finished military building the command sets its internal hot flag; town.prio is not that flag. This caused repeated priority orders (1,558 in one reported game) instead of a one-time setting.

### New strategy: pioneer corridor, compact garrisons, and a repeatable conquest cycle

This replaces the v247 forward-post/large-expedition plan:

1. **Use the starting shovel for a pioneer first.** Delay the forester until the toolsmith can supply another shovel. Choose a visible, walkable neutral land tile directly adjacent to our owned border and point the pioneer toward the nearest known mountain (or the map centre until one is known). This keeps each claim reachable and avoids the old long-distance claims that failed because they were not next to our border.
2. **Recruit geology as soon as the corridor reaches mountain.** Send one geologist to the nearest unsearched patch. Do not let the quarry take the opening pick before the geologist has it. Build one quarry when there is a spare pick and stone is running low; start with one coal mine and one iron mine on distinct valid sites.
3. **Keep the military footprint small and actually staffed.** Use two guards as the core, with a single tower only after the barracks and army are established. A guard wants one melee fighter and one archer; a tower wants two of each. The script now sets those mixed garrisons instead of zero archers, and turns priority on once per building using memory rather than checking the unrelated town.prio field.
4. **Release troops after an operation.** Attack orders hold soldiers. When the target disappears from the enemy list (capture or destruction), send free to the held attackers. Also free held, idle soldiers before forming the next group. Reconnaissance and retreat marches use loose:true, so completed scouts can be called into nearby posts instead of remaining permanently held.
5. **Replace casualties instead of capping housing at six.** Build a small house when the bed/population gap remains after subtracting settlers already on the way, or when the carrier/settler/weapons advisor signals a real shortage. Allow up to ten small houses, one at a time, so deaths do not permanently shrink the workforce.
6. **Reduce economic sprawl.** Keep one woodcutter, sawmill, fisher and hunter; add forestry after a replacement shovel exists. Build the metal chain before gold or armor. Bread production is conditional on coal-mine food shortage. Keep the number of unfinished sites to two early and three later, so goods are not scattered across many incomplete buildings.
7. **Use a deliberate assault sequence.** Attack empty military buildings first, then manned guards/towers with a melee-heavy group sized for the target, and the HQ only after other military objectives are gone. Keep one siege active, reinforce only when the remaining free force is sufficient, retreat after sustained losses, then release the returning group and continue to the next target. When no target is visible, send one loose attack-move scouting column; do not launch another probe past a known defended objective that the current force cannot take.
8. **Respect the v248 placement rules.** The script header now matches kit v248. All generated building sites still pass through canPlace, which includes the new far-slope check, and ordinary buildings are spaced farther apart to preserve walking corridors.

### Validation and scope

- JavaScript parse/compile check: passed.
- Seven targeted mock checks passed across the validation runs: opening pioneer recruitment; choosing an adjacent neutral pioneer target; freeing held idle troops; attacking a manned guard with a sufficient melee force; issuing military priority only once; using loose:true for an attack-move probe; and refusing to probe past a known defended target.
- Forbidden API scan: clean (no random calls, timers, network, filesystem, Node/process APIs, eval, Function, Math.hypot, Math.sin or Math.cos).
- This is static and mock validation, **not** an arena result. The latest published tournament report still tests the v247 input from 21 November. The v248 rewrite has not yet been tournament-tested; do not claim a win improvement until a report names the new input commit.
- Only input/scheduled/script.js and input/scheduled/notes.md are changed. No kit, output, or actual Hearthlands game files are modified.

Script commits: 5c893a78dfd98707ce06e7d0f5eba7c2659b2cf5 (v248 strategic rewrite) and 0ca7e63ddacf7df3edc5bd656505528423b7c4d5 (mine-food, siege sizing, and probe hardening).
