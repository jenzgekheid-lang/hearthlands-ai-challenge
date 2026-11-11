// AI script: Hearthlands AI
// Model: ChatGPT
// Game version: 195
// Plan: Build a strong economy first, then train soldiers and expand. Attack when stronger than the opponent.

function think(view) {
  const E = view.economy;
  const out = [];

  // Helper functions
  const hasBuilding = type => E.town.filter(b => b.type === type).length;
  const stockCount = item => E.stock[item] || 0;
  const canPlaceBuilding = (type, x, y) => view.canPlace(type, x, y);
  const getNearestBuilding = (type, x, y) => {
    return E.town.filter(b => b.type === type).reduce((nearest, b) => {
      const distance = Math.hypot(b.x - x, b.y - y);
      if (!nearest || distance < nearest.distance) {
        return { building: b, distance };
      }
      return nearest;
    }, null);
  };

  // Economic planning
  const economyBuildOrder = [
    'wood', 'quarry', 'saw', 'forest', 'store',
    'house', 'house2', 'house3',
    'fisher', 'waterhut', 'farm', 'mill', 'bakery', 'pigfarm', 'butcher',
    'coalmine', 'ironmine', 'stonemine', 'goldmine',
    'goldsmelter', 'smelter', 'smith',
    'guard', 'tower', 'castle',
    'weaponsmith', 'barracks'
  ];

  const desiredStock = {
    plank: 20, stone: 20, log: 10, grain: 10, flour: 5, bread: 5,
    coal: 10, ironore: 10, goldore: 5, iron: 5, gold: 5,
    sword: 10, spear: 10, bow: 10
  };

  // Build economy
  for (const type of economyBuildOrder) {
    if (hasBuilding(type) >= desiredStock[type]) continue;

    const spot = E.spots[type];
    if (spot && spot.length) {
      const { x, y } = spot[0];
      if (canPlaceBuilding(type, x, y)) {
        out.push(['place', { type, x, y }]);
        break;
      }
    }
  }

  // Manage population
  const neededCarriers = Math.max(10, hasBuilding('house') * 10);
  if (E.people.carrier < neededCarriers && E.population < E.beds) {
    out.push(['profession', { role: 'carrier', d: 1 }]);
  }

  // Military planning
  const desiredMilitary = {
    guard: 2, tower: 1, castle: 1
  };

  for (const type of ['guard', 'tower', 'castle']) {
    if (hasBuilding(type) >= desiredMilitary[type]) continue;

    const spot = E.spots[type];
    if (spot && spot.length) {
      const { x, y } = spot[0];
      if (canPlaceBuilding(type, x, y)) {
        out.push(['place', { type, x, y }]);
        break;
      }
    }
  }

  // Train soldiers
  if (stockCount('iron') > 10 && stockCount('coal') > 10) {
    out.push(['weaponKeep', { k: 0, d: 10 }]); // Train swords
    out.push(['weaponKeep', { k: 1, d: 10 }]); // Train bows
    out.push(['weaponKeep', { k: 2, d: 10 }]); // Train spears
  }

  // Attack strategy
  if (E.population > 50 && hasBuilding('castle') >= 1) {
    const enemyHQ = view.enemy.buildings.find(b => b.type === 'hq');
    if (enemyHQ) {
      const idleSoldiers = view.soldiers.filter(s => !s.order);
      if (idleSoldiers.length > 0) {
        out.push(['march', {
          ids: idleSoldiers.map(s => s.id),
          tx: enemyHQ.x,
          ty: enemyHQ.y,
          form: 'block',
          am: true,
          loose: true
        }]);
      }
    }
  }

  // Expand and defend
  const idleDiggers = E.units.filter(u => u.role === 'digger' && !u.busy);
  if (idleDiggers.length > 0) {
    const unexplored = view.map.unsearched.filter(tile => tile.owner === view.me);
    if (unexplored.length > 0) {
      const { x, y } = unexplored[0];
      out.push(['sendUnit', { u: idleDiggers[0].id, tx: x, ty: y }]);
    }
  }

  // Improve resource management
  const excessPlank = Math.max(0, stockCount('plank') - 30);
  if (excessPlank > 0) {
    out.push(['storeSlot', { b: E.town.find(b => b.type === 'store').id, k: 'plank', it: 'plank' }]);
  }

  const excessStone = Math.max(0, stockCount('stone') - 30);
  if (excessStone > 0) {
    out.push(['storeSlot', { b: E.town.find(b => b.type === 'store').id, k: 'stone', it: 'stone' }]);
  }

  return out;
}
