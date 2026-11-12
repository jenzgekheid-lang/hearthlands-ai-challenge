# AI script challenge

**For:** anyone who writes an AI script for Hearthlands: a person, or an AI (ChatGPT, Claude, Jules, ...). Each writes
its own script; don't read the others' scripts while you write yours.
**Rules as of game version 196 (12 Nov 2026).** The game itself is described in [GAME_SUMMARY.md](GAME_SUMMARY.md).
The kit at the end of this page is rebuilt from the game's code (`node tests/kit.js --write`), so it always matches
the game version of the latest report.

## The task

Write one script that plays a whole game of Hearthlands for one player slot: build an economy, train soldiers, and
defeat the other side.

- A side is **defeated** when it has lost its headquarters and every manned military building. Its people are gone
  then. The last side that is not defeated wins.
- Your script plays against the original game NPC and against other scripts, on random maps, each game twice with the
  sides swapped. The arena lets a game run up to 60 game minutes. If both sides are still alive then, the game is
  **undecided**.
- You see only what your side may know (fog of war). You pay the same costs, need the same workers and walk the same
  paths as everyone else. The game refuses an impossible order and says why.

## What to deliver

- **One plain JavaScript file** with a `think(view)` function that returns a list of orders. The kit below lists every
  view field and every order, with its arguments.
- A turn may take at most **0.3 s**. A slower turn is an error and that turn gives no orders; the game goes on.
  `memory` is kept between turns. No network, no storage, no `require`, no `process`.
- **The first lines of the file** are a short comment: your AI and your model, the game version you tested, your plan
  in 2-4 lines, and a line that looks exactly like `// Game version: 196` (the version in your latest report).
- **Public arena** (`hearthlands-ai-challenge`): put the file at `input/<name>/script.js` on `main`, where `<name>` is
  lower case with digits, dots and dashes, for example `chatgpt-gpt-5`. Other files in `input/<name>/` (notes, earlier
  versions) are fine and are never played. Only collaborators can push. The arena checks every 10 minutes while the
  PC is on, then plays the script.
- **Hearthlands repository** (pull requests): one file `ai-scripts/<ai>-<model>.js` in a pull request that changes only
  that file. Pull requests that touch `ai-scripts/*.js` get a tournament on Jens's PC by themselves; see AGENTS.md.

## Reading your report

The report for each game shows:

- a table every 15 game minutes: buildings (built and sites), military buildings, land tiles, soldiers and people,
  for your side and for the original game NPC; and a row `first` with the game minute of the first smelter, smithy,
  weaponsmith, barracks, tower and castle (`-` = never);
- soldiers every 5 game minutes, and your first army orders with their game time;
- **your game log** (your side only, unless the other side was revealed): stock every 15 minutes, what each building
  spent its time on, the build order with finish times, goods made and used, every order you gave and any refused, what
  happened to every order your people got, and job changes. Its meaning is in [GAME_SUMMARY.md](GAME_SUMMARY.md#the-game-log).
- your script's turn times, errors and refused orders.

When a building says `pile full, waiting for carriers`, its goods are not leaving. Look at the carriers' orders in the
game log before you change the building's priorities.

## Improving the script

Read the latest report, find what stopped your economy or your attack, change only your own script, and send it in
again. Each round is played on the newest game version, so a script that worked on an older version can stop working
after an update. Check the version line and the report's game version every time.

## Test on your own machine (Hearthlands repository only)

The public repository has no tournament tool. In the Hearthlands repository you can play your script yourself, without
GitHub Actions:

```sh
npm install
node tools/build.js                                   # once per change of the game (writes tests/build/api.cjs)
node tools/tournament.js ai-scripts/<you>.js --out report.md
```

It plays whole games without a screen against the original game NPC and against every other script in `ai-scripts/`,
on 4 maps with the sides swapped (about 1 minute per opponent). The report has the same sections as the arena's.
Options: `--vs original,ai-scripts/x.js`, `--seeds 1,2,3`, `--min 90`.

## Where to look for more detail (read only, Hearthlands repository)

- [GAME_SUMMARY.md](GAME_SUMMARY.md): how the game works, the rules, the game log.
- `src/cmd/view.js`: how the view is built (`viewOf`, `econOf`, `rulesView`).
- `src/ai/container.js`: how a script is called and which orders are allowed.
- `src/sim/gamelog.js`: the game log's events and how they are stored.
- `src/data/buildings.js`, `src/data/items.js`: buildings, costs, goods (also `kit/buildings.js` and `kit/items.js`).
- `src/ai/rival.js`, `src/ai/war.js`: the original game NPC you will also play against.

