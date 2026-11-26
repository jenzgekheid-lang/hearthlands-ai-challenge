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
7. **Use a deliberate assault sequence and defend during sieges.** Attack empty military buildings first, then manned guards/towers with a melee-heavy group sized for the target, and the HQ only after other military objectives are gone. Keep one siege active, but dispatch the free reserve to defend the HQ or a threatened post even while that siege continues. Reinforce only when the remaining free force is sufficient, retreat after sustained losses, then release the returning group and continue to the next target. When no target is visible, send one loose attack-move scouting column; do not launch another probe past a known defended objective that the current force cannot take.
8. **Respect the v248 placement rules.** The script header now matches kit v248. All generated building sites still pass through canPlace, which includes the new far-slope check, and ordinary buildings are spaced farther apart to preserve walking corridors.

### Validation and scope

- JavaScript parse/compile check: passed.
- Nine targeted mock checks passed: opening pioneer recruitment; choosing an adjacent neutral pioneer target; freeing held idle troops; releasing attackers after their target disappears; attacking a manned guard with a sufficient melee force; defending the HQ while a siege is active; issuing military priority only once; using loose:true for an attack-move probe; and refusing to probe past a known defended target.
- Forbidden API scan: clean (no random calls, timers, network, filesystem, Node/process APIs, eval, Function, Math.hypot, Math.sin or Math.cos).
- This is static and mock validation, **not** an arena result. The latest published tournament report still tests the v247 input from 21 November. The v248 rewrite has not yet been tournament-tested; do not claim a win improvement until a report names the new input commit.
- Only input/scheduled/script.js and input/scheduled/notes.md are changed. No kit, output, or actual Hearthlands game files are modified.

Script commits: 5c893a78dfd98707ce06e7d0f5eba7c2659b2cf5 (v248 strategic rewrite), 0ca7e63ddacf7df3edc5bd656505528423b7c4d5 (mine-food, siege sizing, and probe hardening), and 682eaf92bf835c99b95075edc0e6350dbecc3f18 (home defence during active sieges and banner-safe casualty tracking).

## 2026-11-23 — v251 strategic reset: resource-first builder + HQ-mirror scouting

### Trigger and report evidence

The three latest scheduled full-game reports (20, 21 and 22 November) all remained at **0 wins**. The 21 November run did take 11 buildings and record 157 kills, so combat contact improved, but it still did not convert into a win. The 22 November v248 run then regressed to a complete economic and military stall.

The 22 November report (2026-11-22-6ba46c5.md, game version 249) shows the failure clearly across all eight games:

- Scheduled remained at 6–7 buildings and exactly 10 soldiers for the full 60 minutes; the NPC reached 35–55 soldiers and 70–81 buildings on most maps.
- No coal mine, iron mine, smelter, toolsmith, weaponsmith or barracks was completed.
- The build queue placed saw, guard, fisher, hunter and one or two houses before quarry. By minute 15 only 1–2 stone remained, so the quarry's 3-stone cost could no longer be paid. The only renewable stone source was never started.
- The v248 script then placed a lookout site at minute 10; on several maps it remained unfinished for the rest of the game waiting for materials.
- Pioneers repeatedly issued claim orders into cut-off routes (24–36 path failures in the affected games); explorers also path-failed (37 in one game). No useful frontier or resource access resulted.
- The army's no-target scout required at least 10 free fighters. After the first guard's garrison, the script had only 8 free soldiers, so that threshold was unreachable: no scout, no enemy contact, no attack and no capture.

### Strategic switch

This abandons the v248 pioneer-first / forward-lookout plan. The new plan is a compact, economy-first builder based on the challenge kit's own full-game builder pattern, with an early soldier scout:

1. **Opening order is now wood → quarry → saw.** Quarry is second, before optional food, housing or military sites can consume the starting stone. A forester follows the core chain; housing is added one house at a time only when carriers, idle workers or the advisor show a real shortage.
2. **No pioneer, explorer or lookout tower.** The old specialist path loops and the material-starved lookout site are removed. One geologist searches known unsearched mountain tiles only after the quarry is operating. If a sent target remains unsearched after the geologist becomes idle, that coordinate is cooled down for ten minutes and another tile is tried.
3. **Use the v249 start army deliberately.** The HQ starts with six free swordsmen and three free bowmen. Early guards request one bow and zero swords: the v249 rule explicitly allows a bowman alone to push territory while the post waits for its swordsman. This claims land without stripping the six starting swords from the field.
4. **Scout by known map geometry, not by blind frontier search.** One free bowman moves in two stages toward the mirrored enemy HQ (map.w - ownHQ.x), using a loose plain march. This avoids the impossible ten-fighter threshold and avoids another explorer path loop.
5. **Build a real production chain.** Food-backed coal and iron mines lead to smelter, toolsmith, weaponsmith and barracks. Carrier shortages trigger measured housing; worn deposits and low stone/log stocks trigger replacements rather than unconditional expansion.
6. **Raid exposed workshops before defended posts.** Empty enemy guards are eligible for a small, protected capture group; manned guards and towers require larger mixed forces. If no military target is safely attackable, a 6–8 soldier raid may target an exposed barracks, weaponsmith, smelter or mine. HQ remains last. Captured attackers are released; siege losses trigger retreat; four soldiers remain reserved for home defence.

The current kit is version 251. Placement uses ask results plus canPlace rechecks so the v249 behind-bands and backslope rules are respected. The script keeps deterministic, seeded-game-safe behaviour: no random calls, timers, network access or external APIs.

### Validation performed in the script runner

- JavaScript parse: passed.
- Opening-order mock: wood first, quarry second.
- HQ-mirror scout mock: one loose, non-fighting bowman dispatched at the reachable midpoint.
- Empty-guard attack mock: an eligible group is sent while retaining the home reserve.
- Geologist path-recovery mock: after a sent tile remains unsearched and the unit becomes idle, that tile is skipped and the next target is chosen.
- Bow-garrison mock: one starting bow is sent into an empty post while four field soldiers are preserved.
- No pioneer/explorer recruitment remains; command count stays below the 50-command turn limit.
- Forbidden API scan: clean.

### Evaluation status

This is a new v251 strategy, not yet tournament-tested. The next genuine arena report must verify that the quarry finishes, ore is discovered, both mines and the metal chain operate, the barracks grows beyond the 10-soldier starting force, the scout reveals the opponent, and captures turn into wins. Do not make another speculative adjustment before that report.

### 2026-11-23 pre-arena hardening

After the full strategy reset, I tightened three implementation details before the first v251 tournament run:

- A solo scout now makes only the two planned waypoints; it does not keep reissuing the same enemy-side move every three minutes. A larger attack-move column is still allowed later when the field army is strong enough.
- The second waypoint is ten tiles from the mirrored HQ, inside the documented 12-tile soldier sight range.
- Siege retreat now triggers after two losses for a small group (or 35% for larger groups), rather than allowing a four- or five-soldier raid to lose nearly the entire group first.
- If a second geologist is recruited, it skips mountain coordinates already assigned to the first geologist.

The revised script parses cleanly, passes the forbidden-API scan, and a targeted mock confirms that a completed two-stage scout does not issue another solo march. These are safety hardenings to the v251 strategy, not another strategic pivot.



## 2026-11-24 — v253 lean-core and siege-first strategic reset

### Safety trigger

The three latest scheduled tournament reports (21, 22 and 23 November) all remained at **0 wins out of 8 games**. The latest published report tested the v251 script. This crosses the requested three-report threshold, so this is a strategy-level replacement, not another small adjustment.

### What the v251 report actually showed

- Across the eight games, the report recorded 16 buildings taken by scheduled, 24 enemy kills against 27 of ours, 0 gold against 370, and 8 stuck scheduled towns against 2 NPC towns.
- On two map-31 starts, scheduled finished with only 5 outside soldiers, no bowmen outside, no coal or iron mine, no smelter and no barracks. The towns stopped building around minutes 8–9.
- On the stronger map-777 Gold start, the economy did reach the industrial chain by about minute 9 and grew to 22 soldiers by minute 30. It captured 16 buildings and killed 17, but lost 19 soldiers and still did not eliminate the remaining military buildings and HQ. By the end it had 6 guards, 3 quarries, 2 woodcutters, 2 sawmills, 2 foresters, 2 iron mines, 2 smelters and many optional food buildings; only 2 carriers remained and 132 goods were waiting to be carried.
- The same map issued 7,240 fighters orders, 7,240 archers orders and 5,399 priority orders. The weaker map-31 runs issued roughly 3,300 each of fighters and archers. The command stream was being flooded with settings that should have been one-time changes.
- Early order logs showed sendIn followed shortly by free. The old army routine swept up every held, idle soldier, so it could cancel a soldier that had just been sent toward a garrison. Its garrison check also required a post to have no troops at all, which missed the archer slot when the permanent swordsman was already inside.

### Root causes and strategic switch

The previous plan tried to solve the problem by adding more guards, producers and expansion steps. The report shows that this created a bloated workforce and, worse, prevented the army code from receiving commands.

This version switches to a **lean-core economy with automatic garrisons and one deliberate siege at a time**:

1. **Controlled opening:** woodcutter → quarry → sawmill → first house. The house is deliberately in place before the fourth workplace, respecting the kit's six-starting-carrier limit and its warning that staffing stops at two carriers or fewer.
2. **One initial forward guard:** set its economy-town garrison settings once to fighters=0, archers=1. The permanent sword remains; the priority order lets the game call a free bowman automatically. The scout uses a sword, so it does not steal the bow needed by the post. No manual sendIn/blanket-free cycle.
3. **Geology after the first house:** recruit one geologist only after the quarry, sawmill and first house exist. Trigger from owned mountain/unsearched counts as well as the coordinate list, and fall back to known mountain tiles when the list is empty. This avoids spending a starting carrier and pick before the first house has begun bringing settlers.
4. **A compact production line:** one fisher feeds the first coal and iron mines; then one smelter, toolsmith, weaponsmith and barracks. No early hunter, forester, second quarry, second woodcutter or duplicate smelter. A second copy is allowed only after an actual depletion/food signal and a carrier surplus.
5. **Strict placement control:** one unfinished site before the first house and at most two afterward; pending placements are remembered so the same type cannot be placed repeatedly while its site is not yet visible. Every candidate is rechecked with canPlace, including the v253 bandpass restriction.
6. **Idempotent settings:** fighters, archers, priority, armyReserve, armyTarget, toolKeep and vaultKeep are remembered per building/setting. Garrison settings are read from view.economy.town, where the kit documents them, not from view.buildings, which only exposes troop kinds.
7. **Army-first command budget:** the army routine runs before economy orders. It tracks only the current siege group, releases those soldiers after their target is captured, retreats after roughly 35% field losses, and never frees every held idle soldier. It keeps a 4–6 soldier reserve, scouts with one loose swordsman, attacks empty military posts first, then defended posts, and the HQ last. Exposed workshops are secondary raids only when no military target is known.
8. **Late gold if the map supports it:** when gold ore is actually discovered and the main barracks chain is working, build one gold mine, gold smelter and vault; set the vault to keep 20. Banners are targeted only when the gold chain is running. This addresses the report's 0-versus-370 gold gap without burdening the opening.
9. **v252 distribution compatibility:** no old distUp coal/iron reordering is used, because the kit changed the default delivery order in v252. The script header is updated to the current kit version, v253.

### Validation performed

- node --check passed for the complete replacement script.
- Custom mock checks passed for: one opening placement with no duplicate on the next turn; geologist waiting until the first house and recruiting after it; garrison and priority settings issued once despite unchanged/missing view fields; no manual sendIn or blanket free; attack of an exposed empty guard; no duplicate attack while a siege is active; release of only the tracked attackers after capture.
- A stress mock with six existing guards produced 39 commands on its first configuration turn and 0 on the next; it stayed below the 50-command limit and did not repeat fighters, archers or priority.
- Static scan found no Math.random, Math.hypot, trigonometric calls, timers, eval, Function constructor or network fetches.

### Scope and test status

Only input/scheduled/script.js and this input/scheduled/notes.md file may be changed. No challenge-kit, tournament-output or actual Hearthlands game files were changed.

The v253 replacement has passed syntax and mock validation only. It has **not** yet played a new arena tournament; no win improvement is claimed until a genuine report evaluates this commit.


## 2026-11-25 — v254 adaptive builder strategy reset

### Safety trigger and latest evidence

The 21–23 November reports recorded 0 wins out of 8 and triggered the v253 lean-core reset. The first published evaluation of v253 (25 November, game version 253; input commit 9a06438) also recorded **0 wins, 0 losses and 8 undecided**. The latest sequence therefore remains flat at zero wins, so this is another strategy-level change rather than a small tuning pass.

The 25 November report is `output/scheduled/2026-11-25-9a06438.md`. Its aggregate results:

- Scheduled took 7 buildings, killed 32 enemy soldiers and finished with 0 gold; the NPC killed 61 and finished with 192 gold.
- 7 of 8 scheduled towns were marked STUCK, compared with 1 NPC town.
- Seven games never completed the mine → smelter → smith → weaponsmith → barracks chain. They generally stopped at 9 soldiers and 10–11 buildings.
- The exception was Map 777 (Gold): it completed coal and iron mines by minutes 5–6, smelter and smith by minute 7, and barracks/weaponsmith by minute 9. It reached 22 soldiers and took 6 buildings, but still ended undecided after 24 of its soldiers fell and with no gold.
- The opposite side on Map 777 reached its first coal mine only at minute 32 and its barracks at minute 36; it ended with 14 soldiers and 31 fallen.
- Most failed games had 41–42 idle carriers and 24–32 goods waiting. They had already built four small houses by about minute 4, despite having no carrier shortage.
- Geologists were repeatedly sent to search, with 13–37 `failed: nothing left to search there` outcomes in the examples. No coal or iron sign was found in the seven stalled towns.
- The two-stage scout did make contact at about minute 5. Scouting was not the primary bottleneck; the town failed to turn that early contact into a working army.

### Root causes

1. **Housing was not actually shortage-driven.** The v253 `freeBeds < 5` condition treated a nearly full bed count as a reason to add another house, even while carriers were plentiful. This produced 40 extra settlers, 41–42 idle carriers and more goods waiting than the workforce could usefully convert.
2. **The garrison setting was backwards for the opening.** v253 requested `fighters=0, archers=1`. The game log still showed a post waiting for a swordsman and no soldier on the way. The new plan keeps one fighter in each small guard and leaves the starting bowmen available until the barracks exists.
3. **The industrial plan was too brittle.** After one fisher, every useful production step depended on the geologist revealing the exact coal and iron signs. If geology stalled, the script had almost nothing else to build. The full-game builder example in the current kit has a wider, conditional production plan and keeps other steps progressing.
4. **Geology used unnecessary custom target recovery.** The previous script mixed the canonical `E.unsearched` list with a manual map scan and its own target cooldowns. The new version follows the kit's canonical nearest-first unsearched list, sends only an idle geologist, avoids overlapping destinations, and cools down a tile only when it remains unsearched after the unit becomes idle.
5. **Military placement could fall back to the nearest legal tile.** That did not guarantee useful new territory or mountain access. The new military placement scorer weighs unowned land and mountain tiles around each candidate, and additional posts are gated on existing posts being staffed.
6. **The lean-core plan stopped too early.** It intentionally omitted several food and renewable-resource branches, then waited indefinitely when ore was not known. The new plan is based on the kit's full-game builder pattern, with measured food, water, forestry, quarry, mine, metal, weapon and housing branches.

### Strategic switch

This abandons the v253 **lean-core / one-fisher / ore-gated** plan. The new strategy is an **adaptive full-game builder with a controlled military frontier**:

1. **Protect the starting materials:** woodcutter → quarry → sawmill → first small house. The first house is gated behind the sawmill, so it cannot consume the stone and planks reserved for the renewable core.
2. **Grow only when people are needed:** add housing when carriers fall below 9, idle carriers below 3, settlers/carrier/weapon advisor tips appear, or people are homeless. A nearly full bed count by itself no longer causes a house.
3. **Use the kit's geologist loop:** recruit after quarry and first house, use only `E.unsearched` mountain coordinates that the map marks mineable, and send only idle geologists. A second geologist is allowed after the toolsmith exists.
4. **Build an adaptive production chain:** fisher and hunter support the first coal/iron mines; smelter, toolsmith, weaponsmith and barracks follow when their dependencies exist. Water, farm, mill, bakery, pigfarm and butcher remain available as conditional branches rather than being omitted from the strategy. Additional producers are built only for actual stock, food or depletion pressure.
5. **Expand with purpose:** retain one swordsman in each guard, keep archers out of guards before the barracks, and build new guards/towers only after existing posts are staffed. Candidate sites are scored for unowned land and mountain access; the nearest-legal-site fallback is removed for military buildings.
6. **Adopt the kit builder's mature military progression:** initial targets 10 swords / 4 spears / 6 bows, then 18 / 8 / 12 when the production chain is stable; reserve 4–6 soldiers; attack one target at a time, empty military posts first, HQ last; use banners and vault gold when available, and add bow armor only after the armorer works.
7. **Keep command state idempotent:** garrison, priority, army target, reserve, tool, armor and vault settings are remembered. Pending placements store the pre-placement count, so an existing building of the same type cannot clear a new placement reservation.
8. **Keep siege release narrow:** only the tracked siege group is released after capture, batched into one command. Unrelated held soldiers and garrison movements are left alone.

The script keeps deterministic behavior: no random calls, no trigonometry, no timers, no network access and no generated randomness. The header remains game version 253 because that is the current kit version; v254 is the strategy revision, not a game-version claim.

### Validation performed

- JavaScript source compiled successfully in an isolated V8 parser.
- Static forbidden-API scan: clean (no `Math.random`, `Math.hypot`, trigonometric calls, timers, `eval`, `Function` constructor or network fetch).
- Opening mock: wood → quarry → saw → house, with no house placed before the sawmill.
- Pending-placement mock: no duplicate placement while a site is still arriving in the town view.
- Geologist mocks: recruitment waits for quarry + house; an idle geologist is sent to the canonical mineable unsearched coordinate; a moving geologist receives no duplicate send.
- Garrison mock: one fighter and zero early archers are configured once; unchanged next-turn state produces no duplicate settings.
- Combat mock: an eligible group attacks an empty guard; after capture, only the tracked siege group is released in one batched `free` command.
- Refused armor/repair setting mock: no memory-state exception.
- No full tournament has yet tested v254. Do not claim a win improvement until a new arena report evaluates this commit.

### Scope

Only `input/scheduled/script.js` and `input/scheduled/notes.md` may be changed. No kit, report, results, challenge-runner or actual Hearthlands game files are to be edited.


## 26 Nov 2026 — v255 NPC-paced resource rush and one-sword border anchors

### Safety trigger and authoritative result

The three-report no-improvement condition is met: the three most recent published full-game scheduled results remain at **0 wins**. The newest available result is the 25 November run. The authoritative \`output/scheduled/latest.md\` and \`output/scheduled/2026-11-25-f0f90c4.md\` both identify input commit \`f0f90c4\`, game version 253, and **0 wins, 0 losses, 8 undecided**. Its aggregate war summary is **0 buildings taken, 0 kills, 8 stuck towns**, with 0 gold for scheduled against 325 for the NPC.

Correction to the preceding v254 notes: the earlier \`9a06438\` / 7-building / 32-kill figures are not the result for the latest v254 input commit. Do not use those figures to assess v254. The latest \`f0f90c4\` report is the relevant evaluation.

### What the v254 report actually showed

- Seven games never reached a working mine-to-barracks chain. The one stronger map reached coal and iron mines, smelter and toolsmith by about minute 9, but still never placed a weaponsmith or barracks.
- The stronger map ended with 17 idle carriers and 110 goods waiting to be carried, while it had built four woodcutters and three foresters. The foresters spent most of their time reporting no free ground to plant.
- Other games added water, farm, mill, bakery, pig farm and butcher before any weapons chain existed. The butcher then waited for an axe for the rest of the game.
- Guards repeatedly reported “Waiting for a swordsman”; the latest report still showed a post waiting for a swordsman. The script had set a four-soldier field reserve from the opening and left the guard's extra fighter setting at its default.
- The geologist loop used a custom terrain filter and a short target cooldown. Logs showed repeated “nothing left to search there” failures, while some maps had only one to three mountain tiles inside the border.
- The non-resource placement fallback searched only a small radius around the HQ. The expanding collection of optional buildings crowded that area before the weaponsmith and barracks were placed.
- Army targets were not raised until a barracks was already built, so the weaponsmith had no early demand to prepare the weapon stock while the barracks site was being completed.

### Strategic switch: NPC-paced military rush

This abandons the v254 adaptive-builder / broad optional-production approach. The new plan follows the opponent's observed opening tempo, but uses a deliberately small production footprint and explicit garrison policy:

1. **Opening order:** quarry → woodcutter → first guard → sawmill → one medium house → fisher. The quarry is first so the renewable stone supply starts immediately. The first guard claims land before optional food and forestry branches.
2. **Single-swordsman border anchors:** each small guard is configured for zero additional fighters and zero archers, leaving its permanent guard swordsman as the only required garrison. Guard priority is enabled. The second guard is not placed until the first is staffed.
3. **No early field reserve:** set \`armyReserve\` to 0 until the barracks is built and every existing guard is staffed. Only then raise the field reserve to 4. This prevents the script from reserving the very swordsmen that the guards need to claim land.
4. **One medium house, not a house cascade:** build one \`house2\` after the sawmill. Further housing is allowed only when population is at bed capacity and carriers are genuinely scarce or settlers are homeless. A persistent generic settlers tip alone no longer creates another house.
5. **Canonical geology:** recruit one geologist after quarry and guard are operating, then use the kit's nearest-first \`E.unsearched\` list without a second terrain filter. An outstanding target is not resent every turn; only an idle target that remains unsearched after four minutes is cooled down before trying another tile.
6. **A strict industrial queue:** first coal and iron mines → smelter → toolsmith → weaponsmith → barracks. No second woodcutter, forester, hunter, farm or water chain may jump ahead of the first weapons chain. Optional producers are added only when a building's status or actual food/stock shortage calls for them.
7. **Weapons demand begins before the barracks finishes:** as soon as the weaponsmith site exists, set targets to 20 swords, 8 spears and 12 bows. The weaponsmith can therefore build stock while the barracks is being completed, rather than waiting for a later settings command.
8. **Late upgrades only:** gold mine, gold smelter and vault follow the core army; the vault is set to keep 40. Two bannermen and iron armor are requested only when their production chains can support them.
9. **Conquest remains deliberate:** scout the centre and mirrored HQ, keep one siege active, capture empty military posts first, require larger mixed forces for defended posts, reserve the HQ for last, and release only the group committed to a completed or abandoned siege.

### Validation performed

- \`node --check\` passed for the complete v255 script.
- Mock opening check: quarry is the first placement.
- Mock guard check: the extra fighter slot is set to zero and guard priority is issued once; the unchanged next turn does not repeat either command.
- Mock geology check: recruit from the canonical unsearched list; an outstanding target is not resent on the next turn.
- Mock weapons check: sword/spear/bow targets are set when the weaponsmith site exists, before the barracks is built, and are not repeated.
- Mock combat check: a sufficiently large mixed force attacks an exposed empty guard.
- Army-only mock check: no economy data is required on army-only turns.
- Static forbidden-API scan is clean: no random calls, trigonometry, timers, network access, eval or dynamic Function use.
- These are syntax and targeted mock checks, **not** an arena result. v255 has not yet been tournament-tested.

### Scope and commits

Only \`input/scheduled/script.js\` and \`input/scheduled/notes.md\` are changed. No challenge-kit files, tournament outputs, results, runner files or actual Hearthlands game files are modified.

- Script commit: b4670ab82ea60e6e27583bc81bb4aa51a2c75c32
