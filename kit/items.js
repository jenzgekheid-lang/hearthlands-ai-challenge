
export const ITEMS = {
  log:{n:'Logs',c:'#9a6a3c'}, plank:{n:'Planks',c:'#e2c27e'}, stone:{n:'Stone',c:'#b9b8b0'},
  fish:{n:'Fish',c:'#8fb3c4'}, water:{n:'Water',c:'#5b9bd5'}, grain:{n:'Grain',c:'#d9b64a'}, flour:{n:'Flour',c:'#efe9dc'}, bread:{n:'Bread',c:'#b9773a'}, pig:{n:'Pigs',c:'#e6a3a8'}, meat:{n:'Meat',c:'#b8433f'}, coal:{n:'Coal',c:'#2b2b2b'}, ironore:{n:'Iron ore',c:'#a0573a'}, iron:{n:'Iron',c:'#6f7b86'}, goldore:{n:'Gold ore',c:'#a8893a'}, gold:{n:'Gold',c:'#f2c84b'},
  axe:{n:'Axes',c:'#c96f4a',tool:1}, saw:{n:'Saws',c:'#c96f4a',tool:1}, pick:{n:'Pickaxes',c:'#c96f4a',tool:1}, shovel:{n:'Shovels',c:'#c96f4a',tool:1}, hammer:{n:'Hammers',c:'#c96f4a',tool:1}, rod:{n:'Fishing rods',c:'#c96f4a',tool:1}, scythe:{n:'Scythes',c:'#c96f4a',tool:1},
  sword:{n:'Swords',c:'#b9bfc5',weapon:1}, bow:{n:'Bows',c:'#a0703c',weapon:1}, spear:{n:'Spears',c:'#8d9aa3',weapon:1}
};
export const TOOLS = Object.keys(ITEMS).filter(k=>ITEMS[k].tool);
export const TOOL_A = {axe:'an axe', saw:'a saw', pick:'a pickaxe', shovel:'a shovel', hammer:'a hammer', rod:'a fishing rod', scythe:'a scythe'};
// Weapons turn a carrier into a soldier at the barracks. Each kind beats one other kind (used in combat, Phase 3C):
// swords beat spears, spears beat bows, bows beat swords.
export const WEAPONS = Object.keys(ITEMS).filter(k=>ITEMS[k].weapon);
export const WEAPON_A = {sword:'a sword', bow:'a bow', spear:'a spear'};
export const SOLDIER_N = {sword:'Swordsmen', bow:'Bowmen', spear:'Spearmen'};
export const BEATS = {sword:'spear', spear:'bow', bow:'sword'};
