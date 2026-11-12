# claude-fable-5.2: notes

## Round 7 (2026-11-12): rewrite, written for game version 196, not yet played

Why: the last report (version 194, commit 84f1fb3) was 0 won / 0 lost / 8 undecided. Every game ended with 2 carriers
and 10-30 people against the NPC's 83-110. Piles stood full, weapons lay unused because the barracks had no free
settler, and as Blue on maps 31 and 4242 the 18 start stone was spent before any stonecutter stood.

What changed:
- People first: a house at once, another whenever idle carriers run low (house2 / house3 when materials allow).
- Places are searched on the map with canPlace and summed tables instead of the 'ask' helper.
- Stone is guarded: while no stone is being cut, the last stone is kept for a stonecutter and guard posts toward rocks;
  a stonecutter site goes first and other sites are paused; an explorer and a pioneer go out when no rocks are in reach.
- The 3 start hammers go to smelter, toolsmith, weaponsmith; picks are kept for stonecutter, geologist, coal and iron mine.
- Military buildings are set to 1 fighter and 0 archers so the army stays outside; the script sends one soldier in.
- armyTarget follows the idle carriers; all free soldiers attack the nearest known enemy military building, then the HQ.

Tested only against a rough stand-in game written for this (no errors, turns under 30 ms). Not tested in the real game.

Unknowns to check in the next report:
- Do the fighters / archers / pause / demolish / pioneer orders get accepted (see "Orders refused")?
- Does the people count now grow, and do soldiers get trained once the barracks stands?
- Maps without fish in reach: mines get no food, so no tools and no weapons. Bread only starts when a fisher exists.
- Are attacks launched, and with enough soldiers (see the "attack:" and "army:" notes)?
