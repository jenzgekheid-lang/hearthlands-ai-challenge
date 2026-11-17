# Hearthlands production overview (game version 224)

Generated from the game code by tools/production.js; do not edit by hand. The same overview as a page with the chain
picture: production.html.

- Times are game seconds at normal (1x) speed (the game clock shows them at the default 0.6x pace: divide by 0.6).
- Walking is not counted: it depends on the map and on where buildings stand.
- **Total work** = the work of every worker in the chain added up: the good's own work, plus the total work of each
  input, plus a mine's share of its preferred food (one meal = 10 trips at a normal spot, where 50% of trips
  find ore). Growing time of grain (45 s) and trees (45 s) is not counted.
- Raw goods: what one good comes down to through the workshops (gathered and mined goods count as raw).
- Tools and weapons: one forge makes whichever kind is set; every kind costs the same.
- A worker needs his building's tool before he can start (it is carried to him from stock).

## Every good

| Good | Id | Made by | Worker's tool | Takes in | Time | Raw goods behind 1 | Total work for 1 |
|---|---|---|---|---|---|---|---|
| Logs | `log` | Woodcutter (`wood`) | `axe` | grown trees | 10 s (16.7 s on the clock) work at the spot + 1.2 s rest, plus walking there and back; a planted tree takes 45 s (75 s on the clock) to grow (Forester) |  | 11.2 s |
| Planks | `plank` | Sawmill (`saw`) | `saw` | 1 🪵 Logs | 7.5 s (12.5 s on the clock) per item | 1 🪵 Logs | 18.7 s |
| Stone | `stone` | Stonecutter (`quarry`) | `pick` | rock | 7 s (11.7 s on the clock) work at the spot + 1.2 s rest, plus walking there and back |  | 8.2 s |
|  |  | Stone mine (`stonemine`) | `pick` | 1 Bread = 10 trips, 1 Fish = 4 trips (first one preferred) | 3.6 s per trip; a trip finds ore 40% / 50% / 60% of the time (poor / normal / rich spot) = about 9 s / 7.2 s / 6 s per ore (15 s / 12 s / 10 s on the clock). Slower as the deposit wears out |  |  |
| Fish | `fish` | Fisher (`fisher`) | `rod` | fish in water | 1.5 s (2.5 s on the clock) work at the spot + 0.3 s rest, plus walking there and back |  | 1.8 s |
| Water | `water` | Water hut (`waterhut`) | — | shore water | 2 s (3.3 s on the clock) work at the spot + 1.2 s rest, plus walking there and back |  | 3.2 s |
| Grain | `grain` | Grain farm (`farm`) | `scythe` | open land (+ grows 45 s) | sow 1.5 s, grows 45 s (75 s on the clock), harvest 2 s, rest 0.3 s after each trip |  | 4.1 s |
| Flour | `flour` | Mill (`mill`) | — | 1 🌾 Grain | 4.5 s (7.5 s on the clock) per item | 1 🌾 Grain | 8.6 s |
| Bread | `bread` | Bakery (`bakery`) | — | 1 🥣 Flour + 1 💧 Water | 13.5 s (22.5 s on the clock) per item | 1 🌾 Grain + 1 💧 Water | 25.3 s |
| Pigs | `pig` | Pig farm (`pigfarm`) | — | 1 🌾 Grain + 1 💧 Water | 13.5 s (22.5 s on the clock) per item | 1 🌾 Grain + 1 💧 Water | 20.8 s |
| Meat | `meat` | Slaughterhouse (`butcher`) | `axe` | 1 🐖 Pigs | 4.5 s (7.5 s on the clock) per item | 1 🌾 Grain + 1 💧 Water | 25.3 s |
| Coal | `coal` | Coal mine (`coalmine`) | `pick` | 1 Bread = 10 trips, 1 Fish = 4 trips (first one preferred) | 3.6 s per trip; a trip finds ore 40% / 50% / 60% of the time (poor / normal / rich spot) = about 9 s / 7.2 s / 6 s per ore (15 s / 12 s / 10 s on the clock). Slower as the deposit wears out |  | 12.3 s |
| Iron ore | `ironore` | Iron mine (`ironmine`) | `pick` | 1 Meat = 10 trips, 1 Fish = 4 trips (first one preferred) | 3.6 s per trip; a trip finds ore 40% / 50% / 60% of the time (poor / normal / rich spot) = about 9 s / 7.2 s / 6 s per ore (15 s / 12 s / 10 s on the clock). Slower as the deposit wears out |  | 12.3 s |
| Iron | `iron` | Iron smelter (`smelter`) | `hammer` | 1 ⚫ Coal + 1 🟤 Iron ore | 7.5 s (12.5 s on the clock) per item | 1 ⚫ Coal + 1 🟤 Iron ore | 32 s |
| Gold ore | `goldore` | Gold mine (`goldmine`) | `pick` | 1 Fish = 10 trips, 1 Bread = 4 trips, 1 Meat = 2 trips (first one preferred) | 3.6 s per trip; a trip finds ore 40% / 50% / 60% of the time (poor / normal / rich spot) = about 9 s / 7.2 s / 6 s per ore (15 s / 12 s / 10 s on the clock). Slower as the deposit wears out |  | 7.6 s |
| Gold | `gold` | Gold smelter (`goldsmelter`) | `hammer` | 1 ⚫ Coal + 1 🟡 Gold ore | 7.5 s (12.5 s on the clock) per item | 1 ⚫ Coal + 1 🟡 Gold ore | 27.3 s |
| Axes | `axe` | Toolsmith (`smith`) | `hammer` | 1 ⚫ Coal + 1 🔩 Iron (set which one to make) | 7.5 s (12.5 s on the clock) per item | 2 ⚫ Coal + 1 🟤 Iron ore | 51.8 s |
| Saws | `saw` | Toolsmith (`smith`) | `hammer` | 1 ⚫ Coal + 1 🔩 Iron (set which one to make) | 7.5 s (12.5 s on the clock) per item | 2 ⚫ Coal + 1 🟤 Iron ore | 51.8 s |
| Pickaxes | `pick` | Toolsmith (`smith`) | `hammer` | 1 ⚫ Coal + 1 🔩 Iron (set which one to make) | 7.5 s (12.5 s on the clock) per item | 2 ⚫ Coal + 1 🟤 Iron ore | 51.8 s |
| Shovels | `shovel` | Toolsmith (`smith`) | `hammer` | 1 ⚫ Coal + 1 🔩 Iron (set which one to make) | 7.5 s (12.5 s on the clock) per item | 2 ⚫ Coal + 1 🟤 Iron ore | 51.8 s |
| Hammers | `hammer` | Toolsmith (`smith`) | `hammer` | 1 ⚫ Coal + 1 🔩 Iron (set which one to make) | 7.5 s (12.5 s on the clock) per item | 2 ⚫ Coal + 1 🟤 Iron ore | 51.8 s |
| Fishing rods | `rod` | Toolsmith (`smith`) | `hammer` | 1 ⚫ Coal + 1 🔩 Iron (set which one to make) | 7.5 s (12.5 s on the clock) per item | 2 ⚫ Coal + 1 🟤 Iron ore | 51.8 s |
| Scythes | `scythe` | Toolsmith (`smith`) | `hammer` | 1 ⚫ Coal + 1 🔩 Iron (set which one to make) | 7.5 s (12.5 s on the clock) per item | 2 ⚫ Coal + 1 🟤 Iron ore | 51.8 s |
| Swords | `sword` | Weaponsmith (`weaponsmith`) | `hammer` | 1 ⚫ Coal + 1 🔩 Iron (set which one to make) | 7.5 s (12.5 s on the clock) per item | 2 ⚫ Coal + 1 🟤 Iron ore | 51.8 s |
| Bows | `bow` | Weaponsmith (`weaponsmith`) | `hammer` | 1 ⚫ Coal + 1 🔩 Iron (set which one to make) | 7.5 s (12.5 s on the clock) per item | 2 ⚫ Coal + 1 🟤 Iron ore | 51.8 s |
| Spears | `spear` | Weaponsmith (`weaponsmith`) | `hammer` | 1 ⚫ Coal + 1 🔩 Iron (set which one to make) | 7.5 s (12.5 s on the clock) per item | 2 ⚫ Coal + 1 🟤 Iron ore | 51.8 s |
| Banners | `banner` | Weaponsmith (`weaponsmith`) | `hammer` | 1 🪜 Planks + 1 🪙 Gold (set which one to make) | 7.5 s (12.5 s on the clock) per item | 1 🪵 Logs + 1 ⚫ Coal + 1 🟡 Gold ore | 53.5 s |
| Iron armor | `armor` | Armorer (`armorer`) | `hammer` | 1 🔩 Iron (set which one to make) | 7.5 s (12.5 s on the clock) per item | 1 ⚫ Coal + 1 🟤 Iron ore | 39.5 s |
| Gold plates | `plate` | Armorer (`armorer`) | `hammer` | 2 🪙 Gold (set which one to make) | 7.5 s (12.5 s on the clock) per item | 2 ⚫ Coal + 2 🟡 Gold ore | 62.1 s |
| Broken armor | `brokenarmor` | not made by any building | | | | | |

## Every building

| Building | Id | Group | Cost | Build time (1 builder) | Worker's tool | Makes |
|---|---|---|---|---|---|---|
| Woodcutter | `wood` | Basics | 2 🪜 Planks + 2 🪨 Stone | 19.2 s | `axe` | Logs |
| Stonecutter | `quarry` | Basics | 2 🪜 Planks + 3 🪨 Stone | 24 s | `pick` | Stone |
| Sawmill | `saw` | Basics | 3 🪜 Planks + 4 🪨 Stone | 33.6 s | `saw` | Planks |
| Forester | `forest` | Basics | 3 🪜 Planks + 1 🪨 Stone | 19.2 s | `shovel` | trees |
| Stockpile | `store` | Basics | 2 🪜 Planks | 9.6 s | — | — |
| Small house | `house` | Houses | 3 🪜 Planks + 3 🪨 Stone | 28.8 s | — | 10 settlers |
| Medium house | `house2` | Houses | 5 🪜 Planks + 6 🪨 Stone | 52.8 s | — | 20 settlers |
| Large house | `house3` | Houses | 10 🪜 Planks + 12 🪨 Stone | 105.6 s | — | 50 settlers |
| Lookout tower | `look` | Land | 2 🪜 Planks + 4 🪨 Stone | 28.8 s | — | — |
| Fisher | `fisher` | Food | 3 🪜 Planks + 2 🪨 Stone | 24 s | `rod` | Fish |
| Water hut | `waterhut` | Food | 3 🪜 Planks + 4 🪨 Stone | 33.6 s | none | Water |
| Grain farm | `farm` | Food | 6 🪜 Planks + 6 🪨 Stone | 57.6 s | `scythe` | Grain |
| Mill | `mill` | Food | 3 🪜 Planks + 3 🪨 Stone | 28.8 s | none | Flour |
| Bakery | `bakery` | Food | 4 🪜 Planks + 5 🪨 Stone | 43.2 s | none | Bread |
| Pig farm | `pigfarm` | Food | 6 🪜 Planks + 6 🪨 Stone | 57.6 s | none | Pigs |
| Slaughterhouse | `butcher` | Food | 4 🪜 Planks + 4 🪨 Stone | 38.4 s | `axe` | Meat |
| Stone mine | `stonemine` | Mining and metal | 5 🪜 Planks | 24 s | `pick` | Stone |
| Coal mine | `coalmine` | Mining and metal | 4 🪜 Planks + 1 🪨 Stone | 24 s | `pick` | Coal |
| Iron mine | `ironmine` | Mining and metal | 4 🪜 Planks + 1 🪨 Stone | 24 s | `pick` | Iron ore |
| Iron smelter | `smelter` | Mining and metal | 4 🪜 Planks + 6 🪨 Stone | 48 s | `hammer` | Iron |
| Toolsmith | `smith` | Mining and metal | 3 🪜 Planks + 5 🪨 Stone | 38.4 s | `hammer` | tools |
| Gold mine | `goldmine` | Mining and metal | 5 🪜 Planks + 1 🪨 Stone | 28.8 s | `pick` | Gold ore |
| Gold smelter | `goldsmelter` | Mining and metal | 4 🪜 Planks + 6 🪨 Stone | 48 s | `hammer` | Gold |
| Vault | `vault` | Mining and metal | 3 🪜 Planks + 4 🪨 Stone | 33.6 s | — | — |
| Small tower | `guard` | Army | 2 🪜 Planks + 3 🪨 Stone | 24 s | — | border +14, 3 soldiers |
| Big tower | `tower` | Army | 5 🪜 Planks + 5 🪨 Stone | 48 s | — | border +20, 6 soldiers |
| Castle | `castle` | Army | 8 🪜 Planks + 12 🪨 Stone | 96 s | — | border +26, 10 soldiers |
| Weaponsmith | `weaponsmith` | Army | 5 🪜 Planks + 7 🪨 Stone | 57.6 s | `hammer` | weapons |
| Armorer | `armorer` | Army | 4 🪜 Planks + 5 🪨 Stone | 43.2 s | `hammer` | Iron armor |
| Barracks | `barracks` | Army | 4 🪜 Planks + 5 🪨 Stone | 43.2 s | — | soldiers |
