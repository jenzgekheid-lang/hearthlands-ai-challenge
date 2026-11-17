
export const ITEMS = {
  log:{n:'Logs',c:'#9a6a3c'}, plank:{n:'Planks',c:'#e2c27e'}, stone:{n:'Stone',c:'#b9b8b0'},
  fish:{n:'Fish',c:'#8fb3c4'}, water:{n:'Water',c:'#5b9bd5'}, grain:{n:'Grain',c:'#d9b64a'}, flour:{n:'Flour',c:'#efe9dc'}, bread:{n:'Bread',c:'#b9773a'}, pig:{n:'Pigs',c:'#e6a3a8'}, meat:{n:'Meat',c:'#b8433f'}, coal:{n:'Coal',c:'#2b2b2b'}, ironore:{n:'Iron ore',c:'#a0573a'}, iron:{n:'Iron',c:'#6f7b86'}, goldore:{n:'Gold ore',c:'#a8893a'}, gold:{n:'Gold',c:'#f2c84b'},
  axe:{n:'Axes',c:'#c96f4a',tool:1}, saw:{n:'Saws',c:'#c96f4a',tool:1}, pick:{n:'Pickaxes',c:'#c96f4a',tool:1}, shovel:{n:'Shovels',c:'#c96f4a',tool:1}, hammer:{n:'Hammers',c:'#c96f4a',tool:1}, rod:{n:'Fishing rods',c:'#c96f4a',tool:1}, scythe:{n:'Scythes',c:'#c96f4a',tool:1},
  sword:{n:'Swords',c:'#b9bfc5',weapon:1}, bow:{n:'Bows',c:'#a0703c',weapon:1}, spear:{n:'Spears',c:'#8d9aa3',weapon:1},
  banner:{n:'Banners',c:'#c4463a',weapon:1}, // (army step 3) made from a plank and a gold bar; a carrier takes one at the barracks and becomes a bannerman
  armor:{n:'Iron armor',c:'#8a949c',armor:1}, plate:{n:'Gold plates',c:'#e8b830',armor:1}, // (army step 4) made at the armorer, put on at the barracks
  brokenarmor:{n:'Broken armor',c:'#7d858c'} // (dropping gear, switch gear) iron armor from a fallen soldier; an armorer with repair on makes it iron armor again (1 coal). Last, so the other goods keep their place in the economy counters
};
export const TOOLS = Object.keys(ITEMS).filter(k=>ITEMS[k].tool);
export const TOOL_A = {axe:'an axe', saw:'a saw', pick:'a pickaxe', shovel:'a shovel', hammer:'a hammer', rod:'a fishing rod', scythe:'a scythe'};
// Weapons turn a carrier into a soldier at the barracks. Each kind beats one other kind (used in combat, Phase 3C):
// spears beat swords up close, swords beat bows up close, bows beat spears at range (data/combat.js BONUS, SHOT_BONUS).
export const WEAPONS = Object.keys(ITEMS).filter(k=>ITEMS[k].weapon);
export const WEAPON_A = {sword:'a sword', bow:'a bow', spear:'a spear', banner:'a banner'};
// what the weaponsmith uses for one of each (others: his recipe in data/buildings.js, coal + iron)
export const WEAPON_IN = {banner:{plank:1,gold:1}};
export const SOLDIER_N = {sword:'Swordsmen', bow:'Bowmen', spear:'Spearmen', banner:'Bannermen'};
// (army step 4, Jens 14 Nov 2026) armor tiers: 0 none, 1 iron (iron armor), 2 gold (iron armor + gold plates)
export const ARMORS = Object.keys(ITEMS).filter(k=>ITEMS[k].armor);
export const ARMOR_IN = {armor:{iron:1}, plate:{gold:2}}; // what the armorer uses for one
export const TIER_N = ['No armor','Iron armor','Gold armor'];
// the armor goods a soldier needs to go from tier a to tier t (gold = iron armor + gold plates)
export const armorNeed = (a,t) => ({armor:a<1&&t>=1?1:0, plate:a<2&&t>=2?1:0});
export const BEATS = {spear:'sword', sword:'bow', bow:'spear'};
