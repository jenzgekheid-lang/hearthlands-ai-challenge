
// Sizes, ranges and radii are in small tiles (G = 2 small tiles per old tile).
// Footprints since version 147 (art plan step 2b): about 70% of the old area (most 4x3 -> 3x3). door:'side' = the house
// is turned a quarter and its door is on the east edge (state.js doorAt); otherwise the door faces the camera (south).
export const DEF = {
  hq:    {n:'Headquarters', s:5, h:4, cost:{}, r:18, roof:'#8a3b2e'},
  wood:  {n:'Woodcutter', s:3, h:3, cost:{plank:2,stone:2}, tool:'axe', range:14, roof:'#7a4f2c', desc:'Fells trees into logs'},
  forest:{n:'Forester', s:3, h:3, cost:{plank:3,stone:1}, tool:'shovel', range:10, roof:'#4f7a36', desc:'Plants new trees nearby'},
  saw:   {n:'Sawmill', s:3, h:3, door:'side', cost:{plank:3,stone:4}, tool:'saw', inputs:{log:8}, recipe:{in:{log:1}, out:'plank', time:7.5, verb:'Sawing planks'}, roof:'#a5562f', desc:'Turns logs into planks'},
  fisher:{n:'Fisher', s:3, h:3, cost:{plank:3,stone:2}, tool:'rod', range:12, roof:'#4d6f86', desc:'Catches fish in nearby water. Fish slowly come back'},
  waterhut:{n:'Water hut', s:3, h:3, cost:{plank:3,stone:4}, worker:true, water:true, range:10, roof:'#3f6f99', desc:'Fills buckets at shore water inside your border. Like every building it claims 1 tile of land around it, so building right next to a lake gives it water'},
  farm:  {n:'Grain farm', s:4, h:3, cost:{plank:6,stone:6}, tool:'scythe', range:8, roof:'#b8963e', desc:'Sows fields on open green land nearby and harvests the grain'},
  mill:  {n:'Mill', s:3, h:3, cost:{plank:3,stone:3}, worker:true, inputs:{grain:8}, recipe:{in:{grain:1}, out:'flour', time:4.5, verb:'Grinding flour'}, roof:'#c9b48a', desc:'Grinds grain into flour'},
  bakery:{n:'Bakery', s:3, h:3, door:'side', cost:{plank:4,stone:5}, worker:true, inputs:{flour:6,water:6}, recipe:{in:{flour:1,water:1}, out:'bread', time:13.5, verb:'Baking bread'}, roof:'#a0522d', desc:'Flour + water make bread'},
  pigfarm:{n:'Pig farm', s:3, h:3, cost:{plank:6,stone:6}, worker:true, inputs:{grain:6,water:6}, recipe:{in:{grain:1,water:1}, out:'pig', time:13.5, verb:'Raising a pig'}, roof:'#c98a7a', desc:'Grain + water raise pigs'},
  butcher:{n:'Slaughterhouse', s:3, h:3, cost:{plank:4,stone:4}, tool:'axe', inputs:{pig:6}, recipe:{in:{pig:1}, out:'meat', time:4.5, verb:'Butchering'}, roof:'#8e3b36', desc:'Turns pigs into meat'},
  coalmine:{n:'Coal mine', s:3, h:3, cost:{plank:4,stone:1}, tool:'pick', mine:'coal', foods:['bread','fish'], inputs:{bread:4,fish:4}, roof:'#3a3633', desc:'Build anywhere on the mountain; signs of a geologist show where the coal is. Eats bread; fish only while no bread is in stock. 1 meal = up to 10 trips, not every trip finds ore'},
  ironmine:{n:'Iron mine', s:3, h:3, cost:{plank:4,stone:1}, tool:'pick', mine:'ironore', foods:['meat','fish'], inputs:{meat:4,fish:4}, roof:'#7a4632', desc:'Build anywhere on the mountain; signs of a geologist show where the iron ore is. Eats meat; fish only while no meat is in stock. 1 meal = up to 10 trips, not every trip finds ore'},
  stonemine:{n:'Stone mine', s:3, h:3, cost:{plank:5}, tool:'pick', mine:'stone', foods:['bread','fish'], inputs:{bread:4,fish:4}, roof:'#77736a', desc:'Build anywhere on the mountain; signs of a geologist show where the stone is. Eats bread; fish only while no bread is in stock. 1 meal = up to 10 trips, not every trip finds ore'},
  goldmine:{n:'Gold mine', s:3, h:3, cost:{plank:5,stone:1}, tool:'pick', mine:'goldore', foods:['fish','bread','meat'], inputs:{fish:4,bread:2,meat:2}, roof:'#8a7130', desc:'Build anywhere on the mountain; signs of a geologist show where the gold ore is. Eats fish; bread or meat only while no fish is in stock. 1 meal = up to 10 trips, not every trip finds ore'},
  goldsmelter:{n:'Gold smelter', s:3, h:3, cost:{plank:4,stone:6}, tool:'hammer', inputs:{coal:6,goldore:6}, recipe:{in:{coal:1,goldore:1}, out:'gold', time:7.5, verb:'Smelting gold'}, roof:'#7a5a22', desc:'Coal + gold ore make gold. Gold in stock makes soldiers stronger outside your land'},
  smelter:{n:'Iron smelter', s:3, h:3, cost:{plank:4,stone:6}, tool:'hammer', inputs:{coal:6,ironore:6}, recipe:{in:{coal:1,ironore:1}, out:'iron', time:7.5, verb:'Smelting iron'}, roof:'#6b3a2a', desc:'Coal + iron ore make iron'},
  smith: {n:'Toolsmith', s:3, h:3, door:'side', cost:{plank:3,stone:5}, tool:'hammer', inputs:{coal:6,iron:6}, recipe:{in:{coal:1,iron:1}, out:'tool', time:7.5, verb:'Forging'}, roof:'#5c5a6e', desc:'Coal + iron make tools. Set what to make by tapping it'},
  quarry:{n:'Stonecutter', s:3, h:3, cost:{plank:2,stone:3}, tool:'pick', range:16, roof:'#5d6670', desc:'Cuts stone from outcrops'},
  // houses (Settlers IV sizes and Roman costs): each brings its settlers one by one and gives them beds
  house: {n:'Small house', s:3, h:3, cost:{plank:3,stone:3}, settlers:10, roof:'#b0663f', desc:'10 beds. Brings 10 new settlers, one every few seconds, while beds are free'},
  house2:{n:'Medium house', s:5, h:4, cost:{plank:5,stone:6}, settlers:20, roof:'#a85a36', desc:'20 beds. Brings 20 new settlers, one every few seconds, while beds are free'},
  house3:{n:'Large house', s:6, h:5, cost:{plank:10,stone:12}, settlers:50, roof:'#9b4f30', desc:'50 beds. Brings 50 new settlers, one every few seconds, while beds are free'},
  store: {n:'Stockpile', s:3, h:3, cost:{plank:2}, noYard:true, roof:'#7a5c38', desc:'4 slots. Set each slot to a good or tool; a slot holds a stack of 8'},
  look:  {n:'Lookout tower', s:2, h:2, cost:{plank:2,stone:4}, scout:true, see:24, roof:'#7a5a36', desc:'A scout moves in and uncovers the fog 24 tiles around. No territory'},
  pile:  {n:'Goods on the ground', s:1, h:1, cost:{}, noYard:true, roof:'#6b5a44'},
  rubble:{n:'Rubble', s:4, h:3, cost:{}, noYard:true, roof:'#6b5a44'},
  // Production times follow The Settlers IV's proportions (1x speed is about 3x faster than Settlers IV; 0.3x is about its pace).
  // Costs follow The Settlers III (Romans); residence, stockpile and stone mine have no counterpart there.
  // military buildings: `fight` slots for swordsmen/spearmen (they step out to meet attackers; the first `guards` are
  // swordsmen who never leave) and `arch` slots for bowmen (they shoot from inside). cap = fight + arch. The border
  // reaches r tiles once anyone is inside
  guard: {n:'Small tower', s:3, h:3, cost:{plank:2,stone:3}, r:14, mil:true, cap:3, fight:2, arch:1, guards:1, roof:'#6b6f6a', desc:'Room for 2 fighters (1 swordsman always on guard) and 1 archer. Pushes your border out 14 tiles'},
  tower: {n:'Big tower', s:5, h:4, cost:{plank:5,stone:5}, r:20, mil:true, cap:6, fight:3, arch:3, guards:2, roof:'#5f6460', desc:'Room for 3 fighters (2 swordsmen always on guard) and 3 archers. Pushes your border out 20 tiles'},
  castle:{n:'Castle', s:8, h:7, cost:{plank:8,stone:12}, r:26, mil:true, cap:10, fight:5, arch:5, guards:3, roof:'#555a56', desc:'Room for 5 fighters (3 swordsmen always on guard) and 5 archers. Pushes your border out 26 tiles'},
  weaponsmith:{n:'Weaponsmith', s:3, h:3, door:'side', cost:{plank:5,stone:7}, tool:'hammer', inputs:{coal:6,iron:6}, recipe:{in:{coal:1,iron:1}, out:'weapon', time:7.5, verb:'Forging'}, roof:'#5a4a5e', desc:'Coal + iron make swords, bows and spears. Tap it to set what to make'},
  barracks:{n:'Barracks', s:3, h:3, cost:{plank:4,stone:5}, inputs:{sword:4,bow:4,spear:4}, roof:'#7a3a32', desc:'A carrier picks up a weapon here and becomes a soldier. Set how many of each you want'}
};
// Room around buildings (version 145, Jens: like the protected area of Settlers / JSettlers): every building keeps
// `side` tiles free on its sides and back and `front` tiles in front (door, piles, work spot, later yards and
// animations). Two buildings' rooms may not overlap; people walk through them; diggers level them as a ramp.
export const YARD = { side:1, front:2 };
// Tilted-view look (version 148, art plan step 2c; drawing only): [width, depth, height] of the house body relative to
// its footprint's standard box, fixed per type (Jens: varied sizes look natural; height 1.7 = two storeys)
export const LOOK = { wood:[1,.9,1], forest:[.9,.88,1], saw:[1.1,.95,1], fisher:[.85,.85,.95], waterhut:[.8,.85,.95],
  farm:[1.15,.9,1], mill:[.78,.8,1.7], bakery:[1,.95,1.05], pigfarm:[1.15,.88,.9], butcher:[.95,.9,1], goldsmelter:[1,1,1.1],
  smelter:[1,1,1.1], smith:[1,.9,1], quarry:[.9,.9,1], house:[.9,.88,1], house2:[1,.95,1.7], house3:[1.05,1,1.7],
  weaponsmith:[1.05,.9,1], barracks:[1.1,1,1.05], look:[1,1,1] };
export const BUILD_GROUPS = [['Basics',['wood','quarry','saw','forest','store']],['Houses',['house','house2','house3']],['Land',['look']],['Food',['fisher','waterhut','farm','mill','bakery','pigfarm','butcher']],['Mining and metal',['stonemine','coalmine','ironmine','smelter','smith','goldmine','goldsmelter']],['Army',['guard','tower','castle','weaponsmith','barracks']]];
export const BUILD_ORDER = BUILD_GROUPS.flatMap(g=>g[1]);
// Short texts for the Build tab (Jens, 12 Nov: 'way smaller and simple'). The full desc above stays for the game summary
// and the AI script kit (tools/summary.js).
export const SHORT = {
  wood:'Fells trees for logs', quarry:'Cuts stone', saw:'Logs into planks', forest:'Plants trees', store:'Stores goods',
  house:'10 settlers', house2:'20 settlers', house3:'50 settlers', look:'Uncovers the fog',
  fisher:'Catches fish', waterhut:'Gathers water', farm:'Grows grain', mill:'Grain into flour', bakery:'Bakes bread',
  pigfarm:'Raises pigs', butcher:'Pigs into meat',
  stonemine:'Mines stone', coalmine:'Mines coal', ironmine:'Mines iron ore', smelter:'Makes iron', smith:'Makes tools',
  goldmine:'Mines gold ore', goldsmelter:'Makes gold',
  guard:'Border +14, 3 soldiers', tower:'Border +20, 6 soldiers', castle:'Border +26, 10 soldiers',
  weaponsmith:'Makes weapons', barracks:'Trains soldiers',
};
