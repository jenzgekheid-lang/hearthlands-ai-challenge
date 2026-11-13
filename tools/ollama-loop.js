#!/usr/bin/env node
// Lets a local Ollama model improve its Hearthlands AI script, round after round.
//
//   node tools/ollama-loop.js --model qwen2.5-coder:14b --seed      first time: start from the kit's builder example
//   node tools/ollama-loop.js --model qwen2.5-coder:14b             carry on where it stopped
//
// One round: ask the model for one change -> check the answer here (valid JavaScript, safety scan, a trial run
// against a pretend game) -> commit and push input/<name>/script.js to main -> start the arena and wait for the
// report -> keep the change when the report is better, otherwise go back to the best script so far.
// Stop it any time with Ctrl+C; the next start carries on (also when a report was still on its way).
//
// Needs: Node 18+, git, gh (signed in), Ollama running, and this repository checked out on main.
// Options: --rounds 10, --ctx 16384 (context window), --name <script name>, --host http://localhost:11434,
//   --arena jenzgekheid-lang/Hearthlands, --no-dispatch (wait for the arena's own 10 minute check),
//   --wait 30 (minutes to wait for a report), --dry (ask and check once, write nothing, push nothing).
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const arg = (k, d) => { const i = process.argv.indexOf('--' + k); return i < 0 ? d : (process.argv[i + 1] && !process.argv[i + 1].startsWith('--') ? process.argv[i + 1] : true); };
const MODEL = arg('model', 'qwen2.5-coder:14b');
const NAME = arg('name', 'ollama-' + String(MODEL).toLowerCase().replace(/[^a-z0-9.]+/g, '-').replace(/^-+|-+$/g, ''));
const ROUNDS = Number(arg('rounds', 10)), CTX = Number(arg('ctx', 16384)), WAIT_MIN = Number(arg('wait', 30));
const HOST = String(arg('host', process.env.OLLAMA_HOST || 'http://localhost:11434')).replace(/\/$/, '');
const ARENA = arg('arena', 'jenzgekheid-lang/Hearthlands');
const SEED = !!arg('seed', false), DRY = !!arg('dry', false), DISPATCH = !arg('no-dispatch', false);
const TRIES = 4;

const DIR = path.join(ROOT, 'input', NAME), SCRIPT = path.join(DIR, 'script.js'), BEST = path.join(DIR, 'best.js');
const STATE = path.join(DIR, 'loop.json'), NOTES = path.join(DIR, 'notes.md');
const REPORT = path.join(ROOT, 'output', NAME, 'latest.md'), KIT = path.join(ROOT, 'kit', 'AI_SCRIPT_CHALLENGE.md');

const log = (...a) => console.log(new Date().toTimeString().slice(0, 8), ...a);
const sleep = ms => new Promise(r => setTimeout(r, ms));
const read = f => (fs.existsSync(f) ? fs.readFileSync(f, 'utf8').replace(/\r\n/g, '\n') : ''); // a Windows checkout may have CRLF
const run = (cmd, args, opt = {}) => execFileSync(cmd, args, { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], ...opt }).trim();
const git = (...a) => run('git', a);
function stop(msg) { console.error('\nSTOPPED: ' + msg); process.exit(1); }

// ---------------------------------------------------------------- the kit, cut down to what a small model needs
const BUILDINGS = ['wood', 'forest', 'saw', 'fisher', 'waterhut', 'farm', 'mill', 'bakery', 'pigfarm', 'butcher', 'coalmine', 'ironmine', 'stonemine',
  'goldmine', 'goldsmelter', 'smelter', 'smith', 'quarry', 'house', 'house2', 'house3', 'store', 'look', 'guard', 'tower', 'castle', 'weaponsmith', 'barracks'];
const ORDERS = ['place', 'demolish', 'priority', 'pause', 'workArea', 'workRange', 'archers', 'fighters', 'storeSlot', 'profession', 'sendUnit', 'weaponKeep',
  'armyTarget', 'workOrder', 'distUp', 'armyList', 'armyOrder', 'armyReserve', 'march', 'sendIn', 'attack', 'stance', 'free', 'release', 'patrol', 'group', 'ask', 'note'];
// what tools/script-scan.js in the game refuses
const BANNED = ['require', 'process', 'globalThis', 'global', 'window', 'self', 'document', 'eval', 'Function', 'constructor', '__proto__', 'fetch',
  'XMLHttpRequest', 'WebSocket', 'EventSource', 'Worker', 'SharedWorker', 'importScripts', 'navigator', 'Deno', 'Bun', 'Buffer', 'SharedArrayBuffer',
  'Atomics', 'WebAssembly', 'import'];

function between(text, from, to) { const a = text.indexOf(from); if (a < 0) return ''; const b = to ? text.indexOf(to, a + from.length) : -1; return text.slice(a, b < 0 ? undefined : b).trim(); }
function kitRules() {
  const kit = read(KIT); if (!kit) stop('kit/AI_SCRIPT_CHALLENGE.md is missing: run this from a checkout of hearthlands-ai-challenge');
  return [between(kit, 'THE VIEW (what your side may know', 'HOW BATTLES WORK'), between(kit, 'HOW BATTLES WORK', 'THE NUMBERS'),
    between(kit, 'IN A FULL GAME (an NPC container', "AN EXAMPLE FOR A FULL GAME")].join('\n\n');
}
function builderExample() {
  const m = read(KIT).match(/\/\/ AI script: builder\.[\s\S]*?\n}\n/); if (!m) stop("the kit's builder example was not found");
  return `// AI script: ${NAME}\n// Model: ${MODEL} (local, Ollama)\n// Game version: ${gameVersion()}\n// Plan: the kit's builder example as a start; improved one change per round.\n` + m[0];
}
// the game version the arena plays now: the newest "Game version N" in any tournament report
function gameVersion() {
  let newest = 0;
  try { for (const d of fs.readdirSync(path.join(ROOT, 'output'))) { const m = read(path.join(ROOT, 'output', d, 'latest.md')).match(/Game version (\d+)/); if (m) newest = Math.max(newest, +m[1]); } } catch (e) { /* no output folder yet */ }
  if (newest) return String(newest);
  const m = read(REPORT).match(/Game version (\d+)/) || read(KIT).match(/New in game version (\d+)/); return m ? m[1] : '195';
}

// ---------------------------------------------------------------- checking an answer before it is pushed
function extractScript(answer) {
  const blocks = [...answer.matchAll(/```[a-zA-Z]*\s*\n([\s\S]*?)```/g)].map(m => m[1]).filter(b => /think/.test(b));
  let code = blocks.sort((a, b) => b.length - a.length)[0];
  if (!code && /function\s+think\s*\(/.test(answer) && !/```/.test(answer)) code = answer.slice(answer.search(/(\/\/[^\n]*\n)*\s*function\s+think/));
  const change = (answer.match(/^\s*CHANGE:\s*(.+)$/mi) || [])[1];
  return { code: code ? code.trim() + '\n' : '', change: (change || 'no summary given').trim().slice(0, 200) };
}
function check(code, before) {
  if (!code) return 'I found no script in your answer. Answer with one line "CHANGE: ..." and then the COMPLETE script in one ```js block.';
  if (/\/\/\s*\.\.\.|\/\*\s*\.\.\.|rest of (the )?(code|script)|(remains?|stays?) (the same|unchanged)|existing code/i.test(code))
    return 'Your script leaves parts out ("...", "rest of the code"). Send the COMPLETE script, every line, nothing shortened.';
  if (before && code.replace(/\s+/g, '') === before.replace(/\s+/g, '')) return 'Your script is the same as the current one. Make one real change.';
  if (before && code.length < before.length * 0.6) return `Your script is much shorter than the current one (${code.length} against ${before.length} characters): something was dropped. Send the COMPLETE script with only your one change.`;
  try { new vm.Script(code, { filename: 'script.js' }); } catch (e) { return `Not valid JavaScript: ${e.message}${lineOf(e)}.`; }
  const bare = code.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/[^\n]*/g, '');
  const bad = BANNED.filter(w => new RegExp('(^|[^A-Za-z0-9_$])' + w.replace(/[$]/g, '\\$') + '($|[^A-Za-z0-9_$])').test(bare));
  if (bad.length) return `The arena's safety scan refuses these words anywhere in a script (also inside text): ${bad.join(', ')}. Remove them.`;
  if (!/\bthink\b/.test(bare)) return 'There is no think(view) function.';
  return trial(code);
}
function lineOf(e) { const m = String(e && e.stack || '').match(/script\.js:(\d+)/); return m ? ` (line ${m[1]})` : ''; }

// A pretend game: 40 turns of a town that grows as the script places buildings. It can't tell whether a script is
// good, only whether it runs, gives orders the game knows, and builds at all.
function trial(code) {
  let think;
  const box = vm.createContext({ memory: {}, module: { exports: {} }, canPlace: (t, x, y) => BUILDINGS.includes(t) && x >= 2 && y >= 2 && x < 120 && y < 120 });
  try {
    vm.runInContext('"use strict";\n' + code + '\n;this.__t = typeof think === "function" ? think : null;', box, { filename: 'script.js', lineOffset: -1, timeout: 2000 });
    const ex = box.module.exports; think = typeof ex === 'function' ? ex : (ex && typeof ex.think === 'function' ? ex.think.bind(ex) : box.__t);
  } catch (e) { return `The script fails when it is loaded: ${e.message}${lineOf(e)}.`; }
  if (typeof think !== 'function') return 'There is no think(view) function.';
  const W = 128, town = [{ id: 1, type: 'hq', x: 60, y: 60, built: true, worker: true }], placed = [];
  let asked = [], nextId = 10;
  for (let turn = 0; turn < 40; turn++) {
    const late = turn >= 20, layer = v => new Uint8Array(W * W).fill(v), L = { known: layer(2), ter: layer(0), tree: layer(0), stone: layer(0), owner: layer(1), height: layer(0), occupied: layer(0), fish: layer(0), ore: layer(0) };
    const spots = {}; asked.forEach((t, i) => { spots[t] = [{ x: 20 + ((placed.length * 5 + i * 5) % 90), y: 20 + 5 * Math.floor(placed.length / 18), d: 10, n: 12 }]; });
    const mil = town.filter(b => ['hq', 'guard', 'tower', 'castle'].includes(b.type));
    const view = {
      t: turn * 2, me: 1, gold: 0.6, over: null, refused: [], rules: turn ? undefined : {},
      map: { w: W, h: W, ...L, oreNames: ['coal', 'ironore', 'goldore', 'stone'], at: (x, y) => (x < 0 || y < 0 || x >= W || y >= W ? null : { known: 2, ter: 'grass', tree: 0, stone: 0, owner: 1, height: 0, occupied: 0, fish: 0, ore: null }) },
      soldiers: Array.from({ length: late ? 24 : 10 }, (_, i) => ({ id: 500 + i, kind: ['sword', 'spear', 'bow'][i % 3], hp: 10, maxHp: 10, x: 62 + i % 5, y: 64, order: null, fighting: false, stance: 'aggr', defends: false, held: false, moving: false, patrol: false })),
      buildings: mil.map(b => ({ id: b.id, type: b.type, owner: 1, x: b.x, y: b.y, w: 3, h: 3, door: { x: b.x + 1, y: b.y + 3 }, military: true, built: true, troops: ['sword', 'bow'] })),
      enemy: { soldiers: late ? [{ id: 900, owner: 2, kind: 'sword', x: 100, y: 100, hurt: false, hp: 10, maxHp: 10 }] : [],
        buildings: late ? [{ id: 800, type: 'hq', owner: 2, x: 104, y: 104, w: 5, h: 5, door: { x: 106, y: 109 }, military: true, manned: true }, { id: 801, type: 'guard', owner: 2, x: 96, y: 100, w: 3, h: 3, door: { x: 97, y: 103 }, military: true, manned: true }] : [] },
      economy: {
        stock: late ? { log: 30, plank: 70, stone: 70, fish: 20, bread: 10, coal: 40, ironore: 30, iron: 30, gold: 5, sword: 6, spear: 6, bow: 6, pick: 2, axe: 1 } : { log: 4, plank: 24, stone: 18, fish: 6, pick: 1, axe: 1, saw: 1, hammer: 2, shovel: 2 },
        people: { carrier: 6 + turn, worker: placed.length, digger: 2, builder: 2 }, idle: { carrier: 3 }, homeless: 0, beds: 10 + turn, population: 10 + turn,
        units: late ? [{ id: 700, role: 'geologist', x: 50, y: 50, busy: false, moving: false, to: null }] : [],
        town: town.map(b => ({ ...b, paused: undefined, prio: undefined, inputs: {}, outputs: {}, delivered: {}, cost: {}, dug: true, coming: 0, range: 8, area: null, archers: 1, fighters: 2 })),
        land: { tiles: 1000 + 200 * mil.length, grass: 600, trees: 150, rocks: 60, water: 40, mountain: 150, unsearched: late ? 0 : 60 },
        ore: turn >= 6 ? [{ x: 30, y: 30, ore: 'coal' }, { x: 34, y: 30, ore: 'ironore' }, { x: 38, y: 30, ore: 'goldore' }, { x: 42, y: 30, ore: 'stone' }] : [],
        unsearched: late ? [] : [{ x: 28, y: 28, d: 40 }], spots, work: ['staff', 'recruit', 'sites', 'workshops', 'clear', 'surplus'], loose: {}, log: [],
        tips: [{ k: 'stall', text: 'fisher: no fish in range inside your border 100% of the last 5 minutes.' }, { k: 'land', text: "Your land hasn't grown for 8 minutes: build a small tower at your border to claim more." }],
        army: { target: { sword: 4, bow: 2, spear: 2 }, keep: [{ weapon: 'sword', keep: 1 }, { weapon: 'bow', keep: 1 }, { weapon: 'spear', keep: 1 }], reserve: 0, list: null },
      },
    };
    let out;
    try { out = vm.runInContext('__t', box)(view); } catch (e) { return `think(view) throws an error at game second ${view.t} (${late ? 'late game: army, ore and an enemy in sight' : 'early game'}): ${e.message}${lineOf(e)}. Use only the fields the rules list.`; }
    if (!Array.isArray(out)) return `think(view) must return an array of orders; at game second ${view.t} it returned ${out === undefined ? 'nothing' : typeof out}.`;
    asked = [];
    for (const c of out) {
      if (!Array.isArray(c) || typeof c[0] !== 'string' || (c[1] !== undefined && typeof c[1] !== 'object')) return `Every order must look like ['name', {args}]; you returned ${JSON.stringify(c).slice(0, 120)}.`;
      const [k, a = {}] = c;
      if (!ORDERS.includes(k)) return `'${k}' is not an order the game knows. The orders are: ${ORDERS.join(', ')}.`;
      if (k === 'ask') asked = (a.spots || []).filter(t => BUILDINGS.includes(t));
      if (k === 'place') {
        if (!BUILDINGS.includes(a.type)) return `place: '${a.type}' is not a building. The buildings are: ${BUILDINGS.join(', ')}.`;
        if (!Number.isFinite(a.x) || !Number.isFinite(a.y)) return `place needs numbers x and y; you sent ${JSON.stringify(a)}.`;
        const b = { id: nextId++, type: a.type, x: a.x, y: a.y, built: true, worker: true }; town.push(b); placed.push(a.type);
      }
    }
  }
  if (!placed.length) return "In a trial of 40 turns your script never gave a ['place', {type, x, y}] order, so it would build nothing. Remember: E.spots is empty unless you sent ['ask', {spots: [types]}] the turn before; or choose places yourself with canPlace(type, x, y).";
  return '';
}

// ---------------------------------------------------------------- reading a report
function parseReport(text) {
  const made = (text.match(/commit ([0-9a-f]{7,40})/) || [])[1] || '';
  const res = text.match(/\| original game NPC \| (\d+) \| (\d+) \| (\d+) \|/);
  if (!res) return { made, played: false, score: -1, line: /Refused by the safety scan/.test(text) ? 'refused by the safety scan' : 'no games played', games: [] };
  const games = text.split(/\n(?=### )/).slice(1).map(g => {
    const row = g.match(/\| 60 \| ([\d/]+) \| ([\d/]+) \|/) || g.match(/\| 45 \| ([\d/]+) \| ([\d/]+) \|/) || [];
    const me = (row[1] || '0/0/0/0/0').split('/').map(Number);
    return { title: g.split('\n')[0].replace(/^### /, ''), me, them: row[2] || '', text: g };
  });
  const avg = i => games.reduce((s, g) => s + (g.me[i] || 0), 0) / (games.length || 1);
  const won = +res[1], lost = +res[2], undecided = +res[3];
  // wins first; between equal results, the bigger town and army count
  const score = Math.round(won * 1000 - lost * 300 + avg(0) * 10 + avg(3) * 5 + avg(2) / 100);
  return { made, played: true, won, lost, undecided, score, games,
    line: `won ${won}, lost ${lost}, undecided ${undecided}; after an hour on average ${avg(0).toFixed(1)} buildings, ${avg(3).toFixed(1)} soldiers, ${Math.round(avg(2))} land tiles` };
}
function digest(text, limit = 6600) {
  const R = parseReport(text); if (!R.played) return text.slice(0, 1500);
  const pick = (g, re) => (g.text.match(re) || [''])[0].trim();
  const out = [`Result: ${R.line}.`, 'Each game (buildings / military buildings / land tiles / soldiers / people after an hour; you, then the original game NPC):'];
  for (const g of R.games) out.push(`- ${g.title}: you ${g.me.join('/')}, NPC ${g.them}`);
  // the advisor tips of all games together: minutes held summed over the games, longest first, ten lines at most
  const tips = new Map();
  for (const g of R.games) {
    const sec = (g.text.match(/^Advisor tips[^\n]*\n((?:- [^\n]*\n?)+)/m) || [])[1] || '';
    for (const l of sec.split('\n')) {
      const m = l.match(/^- (\d+) min, \S+: (.*)$/); if (!m) continue;
      const key = m[2].replace(/\d+%?/g, '#'), t = tips.get(key) || { min: 0, games: new Set(), text: m[2] };
      t.min += +m[1]; t.games.add(g.title); tips.set(key, t);
    }
  }
  if (tips.size) {
    out.push('', 'Advisor tips over all games (minutes held in total, and in how many games they came up):');
    for (const t of [...tips.values()].sort((a, b) => b.min - a.min).slice(0, 10)) out.push(`- ${t.min} min, ${t.games.size} of ${R.games.length} games: ${t.text}`);
  }
  // two games in detail: the worst and the best town
  const sorted = R.games.slice().sort((a, b) => a.me[0] - b.me[0]), detail = [...new Set([sorted[0], sorted[sorted.length - 1]])].filter(Boolean);
  for (const g of detail) {
    out.push('', `Detail of "${g.title}":`);
    for (const re of [/^At the end:.*$/m, /^People:.*$/m, /^Goods produced in the game:.*$/m, /^Build order.*$/m, /^Orders given:.*$/m, /^Script: .*$/m, /^Soldiers every 5 min:.*$/m])
      { const l = pick(g, re); if (l) out.push(l.length > 420 ? l.slice(0, 420) + ' …' : l); }
    const did = g.text.match(/What the buildings did[^\n]*\n((?:- .*\n)+)/);
    if (did) { out.push('What the buildings spent their time on (top two):'); for (const l of did[1].trim().split('\n').slice(0, 16)) out.push(l.split(', ').slice(0, 2).join(', ')); }
  }
  return out.join('\n').slice(0, limit);
}

// ---------------------------------------------------------------- Ollama
async function ollama(messages) {
  let res;
  try {
    res = await fetch(HOST + '/api/chat', { method: 'POST', headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ model: MODEL, messages, stream: true, options: { num_ctx: CTX, temperature: 0.4, num_predict: Math.floor(CTX / 2) } }) });
  } catch (e) { stop(`Ollama does not answer at ${HOST} (${e.cause && e.cause.code || e.message}). Start it ("ollama serve") and try again.`); }
  if (!res.ok) stop(`Ollama answered ${res.status}: ${(await res.text()).slice(0, 300)}. Is the model there? Try: ollama pull ${MODEL}`);
  let text = '', buf = '', last = {}, shown = 0;
  const dec = new TextDecoder();
  for await (const chunk of res.body) {
    buf += dec.decode(chunk, { stream: true });
    let i; while ((i = buf.indexOf('\n')) >= 0) {
      const line = buf.slice(0, i).trim(); buf = buf.slice(i + 1); if (!line) continue;
      const j = JSON.parse(line); if (j.error) stop('Ollama: ' + j.error);
      if (j.message && j.message.content) text += j.message.content; if (j.done) last = j;
      if (text.length - shown >= 400) { process.stdout.write('.'); shown = text.length; }
    }
  }
  process.stdout.write('\n');
  if (last.prompt_eval_count && last.prompt_eval_count >= CTX - 64) log(`WARNING: the question filled the whole context window (${last.prompt_eval_count} of ${CTX} tokens), so the model did not read all of it. Use a bigger --ctx.`);
  return { text, cut: last.done_reason === 'length', tokens: `${last.prompt_eval_count || '?'} in, ${last.eval_count || '?'} out` };
}

function question(script, S, reportText) {
  const hist = (S.history || []).slice(-6).map(h => `- round ${h.round}: ${h.change} -> ${h.result}${h.kept ? ' (kept)' : ' (worse or no better: undone)'}`).join('\n');
  return [
    'You improve an AI script for Hearthlands, a Settlers-like strategy game. The script plays a whole game against the original game NPC: it must build a town, train soldiers and attack. A game is won when the other side has no soldiers and no military buildings left; after 60 game minutes it is undecided.',
    '== THE RULES (what the script sees and the orders it can give) ==\n' + kitRules(),
    '== ADVISOR TIPS ==\nview.economy.tips exists: [{k, text}], renewed every game minute (k: the kind; kinds: land, ore, weapons, stall, army, settlers, orders, timing). A script may react to the tips while it plays.',
    '== THE CURRENT SCRIPT (the best so far) ==\n```js\n' + script.trim() + '\n```',
    '== WHAT HAPPENED WHEN IT PLAYED (4 maps, each twice) ==\n' + (reportText ? digest(reportText) : 'It has not played yet.'),
    hist ? '== YOUR EARLIER ROUNDS ==\n' + hist + '\nDo not repeat a change that was undone.' : '',
    '== YOUR TASK ==\n' +
    'Find the ONE thing that holds the script back most (look at what the buildings waited for, what was never built, how many soldiers it had against the NPC) and change the script to fix that. One focused change, not a rewrite. Keep everything else exactly as it is.\n' +
    'Rules for the script: plain JavaScript; think(view) returns an array of orders like [\'place\', {type, x, y}]; use only fields and orders named in the rules above; memory is a plain object kept between turns; view.economy.spots only has answers for the types you asked for with [\'ask\', {spots: [types]}] the turn before; never use the words require, process, eval, Function, constructor, fetch, import, global, window, self.\n' +
    'Answer in exactly this form and nothing else:\nCHANGE: <one sentence: what you changed and why>\n```js\n<the COMPLETE new script, every line>\n```',
  ].filter(Boolean).join('\n\n');
}

async function askForScript(script, S, reportText) {
  const ask = question(script, S, reportText);
  let messages = [{ role: 'user', content: ask }];
  for (let n = 1; n <= TRIES; n++) {
    log(`asking ${MODEL} (try ${n} of ${TRIES}, question ${Math.round(ask.length / 1000)} KB)`);
    const a = await ollama(messages), got = extractScript(a.text);
    const why = a.cut && !got.code ? 'Your answer was cut off before the script ended. Make the script shorter (fewer comments) and send it complete.' : check(got.code, script);
    if (!why) { log(`accepted (${a.tokens} tokens): ${got.change}`); return got; }
    log('refused here: ' + why);
    messages = [{ role: 'user', content: ask }, { role: 'assistant', content: a.text.slice(0, 12000) },
      { role: 'user', content: 'That script cannot be used: ' + why + '\nFix it and answer again in the same form: one line "CHANGE: ..." and the COMPLETE script in one ```js block.' }];
  }
  return null;
}

// ---------------------------------------------------------------- git and the arena
const saveState = S => fs.writeFileSync(STATE, JSON.stringify(S, null, 2) + '\n');
function pull() { try { git('pull', '--rebase', '--autostash', 'origin', 'main'); } catch (e) { stop('git pull failed:\n' + (e.stderr || e.message)); } }
function push(message) {
  git('add', '--', path.relative(ROOT, DIR));
  try { git('commit', '-m', message); } catch (e) { if (!/nothing to commit/.test(String(e.stdout) + e.stderr)) stop('git commit failed:\n' + (e.stdout || '') + (e.stderr || '')); }
  for (let n = 0; n < 4; n++) {
    try { git('push', 'origin', 'HEAD:main'); return git('rev-parse', 'HEAD'); }
    catch (e) { log('push refused (main moved?), pulling and trying again'); pull(); }
  }
  stop('could not push to main after 4 tries');
}
// the last commit that changed the script: that is the one the arena reports on
const scriptCommit = () => git('log', '-1', '--format=%H', '--', path.relative(ROOT, SCRIPT).replace(/\\/g, '/'));

function dispatch(sha) {
  const since = Date.now() - 15000;
  try { run('gh', ['workflow', 'run', 'arena.yml', '--repo', ARENA, '-f', 'sha=' + sha, '-f', 'names=' + NAME]); }
  catch (e) { stop(`could not start the arena (gh workflow run):\n${e.stderr || e.message}`); }
  return since;
}
function findRun(since) {
  try {
    const list = JSON.parse(run('gh', ['run', 'list', '--repo', ARENA, '--workflow', 'arena.yml', '--event', 'workflow_dispatch', '--limit', '5', '--json', 'databaseId,status,conclusion,createdAt,url']));
    return list.filter(r => Date.parse(r.createdAt) >= since).sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt))[0] || null;
  } catch (e) { log('could not ask GitHub for the run: ' + String(e.stderr || e.message).split('\n')[0]); return null; }
}
// the report counts when it was made from the script commit, or from a later commit with the very same script
function reportFor(sha) {
  pull(); const t = read(REPORT), made = (t.match(/commit ([0-9a-f]{7,40})/) || [])[1]; if (!made) return '';
  if (sha.startsWith(made)) return t;
  const rel = path.relative(ROOT, SCRIPT).replace(/\\/g, '/');
  try { git('merge-base', '--is-ancestor', sha, made); git('diff', '--quiet', sha, made, '--', rel); return t; } catch (e) { return ''; }
}

async function waitForReport(sha) {
  const until = Date.now() + WAIT_MIN * 60000;
  let text = reportFor(sha); if (text) return text;
  for (let start = 1; DISPATCH && start <= 3; start++) {
    const since = dispatch(sha); log(`arena started for ${sha.slice(0, 7)} (start ${start} of 3), waiting`);
    let r = null, seen = false;
    while (Date.now() < until) {
      await sleep(15000); r = findRun(since);
      if (r && !seen) { seen = true; log('arena run: ' + r.url); }
      if (r && r.status === 'completed') break;
    }
    if (!r || r.status !== 'completed') stop(`the arena run did not finish within ${WAIT_MIN} minutes${r ? ' (' + r.url + ', ' + r.status + ')' : ''}. Is the PC's runner on? Start this script again later: it carries on with the same round.`);
    if (r.conclusion === 'success') {
      for (let n = 0; n < 8; n++) { text = reportFor(sha); if (text) return text; await sleep(8000); }
      stop(`the arena run succeeded (${r.url}) but output/${NAME}/latest.md has no report for commit ${sha.slice(0, 7)}.`);
    }
    log(`the arena run ended as "${r.conclusion}" without playing (${r.url})`);
    await sleep(20000);
  }
  if (DISPATCH) stop('the arena did not start 3 times in a row. Open the run page above: the reason is at the top. Nothing is lost; start this script again when it works.');
  log(`waiting for the arena's own check (every 10 minutes) to play ${sha.slice(0, 7)}`);
  while (Date.now() < until) { await sleep(60000); text = reportFor(sha); if (text) return text; }
  stop(`no report for ${sha.slice(0, 7)} after ${WAIT_MIN} minutes. Start this script again later: it carries on with the same round.`);
}

// take a finished report into the state: keep the change or go back to the best script
function judge(S, reportText) {
  // a baseline re-test (P.rebase) is always kept when played: it is the first score on this game version
  const R = parseReport(reportText), P = S.pending, better = R.played && (P.rebase || !S.best || R.score > S.best.score);
  log(`round ${P.round} result: ${R.line} (score ${R.score}${S.best && !P.rebase ? ', best so far ' + S.best.score : ''}) -> ${better ? 'KEPT' : 'undone'}`);
  S.history = (S.history || []).concat({ round: P.round, sha: P.sha.slice(0, 7), change: P.change, result: R.line, score: R.score, kept: better });
  if (better) { S.best = { score: R.score, sha: P.sha.slice(0, 7), round: P.round, version: gameVersion() }; fs.copyFileSync(SCRIPT, BEST); fs.writeFileSync(path.join(DIR, 'best-report.md'), reportText); }
  const note = better ? (P.rebase ? 'Kept: the baseline for this game version.' : 'Kept: the best so far.')
    : P.rebase ? 'Not played: the best script is re-tested on this game version next start.'
    : 'Not better than round ' + (S.best ? S.best.round : '?') + ': the next round starts from the best script again.';
  fs.appendFileSync(NOTES, `\n## Round ${P.round} (${new Date().toISOString().slice(0, 16).replace('T', ' ')}, commit ${P.sha.slice(0, 7)})\n\n- Change: ${P.change}\n- Result: ${R.line} (score ${R.score})\n- ${note}\n`);
  S.round = P.round; delete S.pending; saveState(S);
}

async function main() {
  if (DRY) {
    const script = SEED || !read(SCRIPT) ? builderExample() : read(BEST) || read(SCRIPT);
    const seedWhy = check(script, ''); log('current script: ' + (seedWhy || 'passes the checks here'));
    const got = await askForScript(script, JSON.parse(read(STATE) || '{}'), read(REPORT));
    const f = path.join(require('os').tmpdir(), NAME + '-dry.js'); if (got) fs.writeFileSync(f, got.code);
    log(got ? `dry run: the new script is in ${f}; nothing was pushed` : 'dry run: no usable script'); return;
  }
  if (git('rev-parse', '--abbrev-ref', 'HEAD') !== 'main') stop('check out main first (git checkout main): the arena only plays what is on main');
  pull(); fs.mkdirSync(DIR, { recursive: true });
  let S = JSON.parse(read(STATE) || '{}');
  if (!read(NOTES)) fs.writeFileSync(NOTES, `# ${NAME}: notes\n\nWritten by tools/ollama-loop.js: one change per round, kept only when the arena report is better.\n`);
  log(`script ${NAME}, model ${MODEL}, context ${CTX} tokens, up to ${ROUNDS} rounds`);

  // a start: the kit's builder example (--seed, or nothing there yet), or the script that is there
  if (!S.pending && (SEED || !read(SCRIPT) || !S.best)) {
    if (SEED || !read(SCRIPT)) { const seed = builderExample(), why = check(seed, ''); if (why) stop('the builder example does not pass the checks here: ' + why); fs.writeFileSync(SCRIPT, seed); S = { round: 0, history: [] }; log("starting from the kit's builder example"); }
    else log('first measuring the script that is there');
    S.pending = { round: S.round || 0, change: SEED || !S.history ? "start: the kit's builder example" : 'start: the script as it was', sha: '' };
    saveState(S); S.pending.sha = push(`${NAME}: round ${S.pending.round} (start)`) && scriptCommit(); saveState(S); push(`${NAME}: loop state`);
  }
  // the stored best was scored on an older game version: re-test it on this one first; it becomes the new baseline,
  // the history stays. A round that was still waiting cannot be compared with the old score, so it is noted and dropped.
  const v = gameVersion();
  if (S.best && S.best.version !== v && !(S.pending && S.pending.rebase)) {
    if (S.pending) { S.history = (S.history || []).concat({ round: S.pending.round, sha: (S.pending.sha || '-').slice(0, 7), change: S.pending.change, result: 'not compared: the best script was scored on game version ' + (S.best.version || 'an older one'), score: -1, kept: false }); delete S.pending; }
    fs.writeFileSync(SCRIPT, read(BEST).replace(/^\/\/ Game version:.*$/m, '// Game version: ' + v));
    S.pending = { round: S.round || 0, change: `baseline: the best script (round ${S.best.round}) re-tested on game version ${v}`, sha: '', rebase: true };
    saveState(S); S.pending.sha = push(`${NAME}: baseline on game version ${v}`) && scriptCommit(); saveState(S); push(`${NAME}: loop state`);
    log(`re-testing the best script (round ${S.best.round}) on game version ${v} as the new baseline`);
  }
  for (let done = 0; ; ) {
    if (S.pending) { judge(S, await waitForReport(S.pending.sha)); push(`${NAME}: notes of round ${S.round}`); }
    if (S.best && S.best.version !== gameVersion()) stop(`the best script is not re-tested on game version ${gameVersion()} yet (the re-test was not played). Start this script again: it tries once more.`);
    if (done++ >= ROUNDS) break;
    const base = read(BEST) || read(SCRIPT), round = (S.round || 0) + 1;
    log(`---- round ${round} ----`);
    const got = await askForScript(base, S, read(path.join(DIR, 'best-report.md')) || read(REPORT));
    if (!got) { S.history = (S.history || []).concat({ round, sha: '-', change: 'no usable script in ' + TRIES + ' tries', result: 'not played', score: -1, kept: false }); S.round = round; saveState(S); continue; }
    fs.writeFileSync(SCRIPT, got.code.replace(/^\/\/ Game version:.*$/m, '// Game version: ' + gameVersion()));
    S.pending = { round, change: got.change, sha: '' }; saveState(S);
    push(`${NAME}: round ${round}`); S.pending.sha = scriptCommit(); saveState(S); push(`${NAME}: loop state`);
  }
  if (read(BEST) && read(BEST) !== read(SCRIPT)) { fs.copyFileSync(BEST, SCRIPT); push(`${NAME}: back to the best script (round ${S.best.round})`); log('the last round was not the best: script.js is the best script again'); }
  log(`done: ${ROUNDS} rounds. Best: round ${S.best ? S.best.round : '-'} (score ${S.best ? S.best.score : '-'}). Notes: input/${NAME}/notes.md`);
}

if (require.main === module) main().catch(e => stop(e.stack || String(e)));
module.exports = { check, trial, extractScript, parseReport, digest, question, builderExample };
