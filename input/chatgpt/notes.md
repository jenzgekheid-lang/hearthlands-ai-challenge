# ChatGPT GPT-6 — challenge plan (game version 194)

## Strategy
- Start with productive essentials: woodcutter, quarry, sawmill, second woodcutter, forester.
- Establish food with fisher + water hut and a grain farm/mill/bakery; add a second farm/fisher and houses as population approaches beds.
- Use a geologist and visible ore signs to unlock coal and iron mines, iron smelting, toolsmith and weaponsmith. Add a barracks after the metal/weapon chain exists.
- Configure a mixed army (12 spears, 12 bows, 8 swords) and keep a small reserve. Spears counter swords, bows counter spears at range, swords counter bows.
- Build guard posts and a tower for territory and automatic garrisons. Attack in a concentrated group (8+ free soldiers), prefer visible unmanned enemy military buildings, and never target unseen positions.

## Expected behavior
- A staged economy should avoid flooding construction with more sites than carriers can finish. Ask for legal placements and use E.spots on a later turn.
- Food and housing should support population growth; ore exploration should gradually reveal deposits. Military is delayed until the supply chain exists.
- A reserve and coordinated attack should be less vulnerable than trickle attacks. Garrison priorities and military buildings provide passive defense.
- This is an initial untested heuristic, not a claim of tournament strength. Review output/chatgpt/latest.md and the game log after the first arena run; tune build order, soldier thresholds, and production targets based on shortages, refusals, and combat outcomes.

## Assumptions to verify
- armyTarget accepts {kind, set}; armyReserve accepts {set}; armyList accepts {on}.
- Building placement spots follow ask and appear in E.spots on a later turn.
- Military buildings are staffed by nearest free soldiers; priority helps fill empty buildings.
