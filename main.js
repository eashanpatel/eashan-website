// Overworld map: draws the river, trees and trail behind the page, and walks the player
// marker to whichever level is on screen. Without this script the page reads as plain boards.
(() => {
  const main = document.getElementById('main');
  const svg = main.querySelector('.world__svg');
  const marker = main.querySelector('.marker');
  const nodes = [...main.querySelectorAll('[data-node]')];
  const hudLinks = [...document.querySelectorAll('.hud__nav a')];
  const sections = nodes.map((n) => n.closest('section'));
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const NS = 'http://www.w3.org/2000/svg';
  let stops = [];      // trail length at each visible node
  let stopOf = new Map(); // node -> trail length
  let trail = null;    // the full trail path, for getPointAtLength
  let current = 0, pos = 0, anim = 0;
  const scratch = document.createElementNS(NS, 'svg');
  scratch.style.cssText = 'position:absolute;width:0;height:0;visibility:hidden';
  document.body.append(scratch);

  const el = (name, attrs) => { const e = document.createElementNS(NS, name); for (const k in attrs) e.setAttribute(k, attrs[k]); return e; };
  const centre = (n) => {
    const r = n.getBoundingClientRect(), m = main.getBoundingClientRect();
    return { x: r.left - m.left + r.width / 2, y: r.top - m.top + r.height / 2 };
  };

  const G = 8;               // the world's pixel grid
  const snap = (v, g = G) => Math.round(v / g) * g;
  let tiles = [];            // trail stepping tiles: { rect, len }

  function draw() {
    const W = main.clientWidth, H = main.scrollHeight;
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    svg.replaceChildren();
    const narrow = W <= 720;
    const vis = nodes.filter((n) => n.offsetParent !== null);   // a node a layout hides is skipped
    const pts = vis.map(centre);

    // the river: a meander sampled along its curve and laid down as whole 8px rows
    const rows = new Map();   // row y -> [minX, maxX]
    if (!narrow) {
      const amp = Math.min(W * 0.36, 520), mid = W / 2, step = 520;
      let rd = `M ${mid - amp * 0.9} -40`;
      for (let y = -40, i = 0; y < H + step; y += step, i++) {
        const s = i % 2 ? -1 : 1;
        rd += ` C ${mid + s * amp} ${y + step * 0.35}, ${mid + s * amp} ${y + step * 0.65}, ${mid - s * amp * 0.9} ${y + step}`;
      }
      const rp = el('path', { d: rd }); scratch.append(rp);
      const L = rp.getTotalLength();
      for (let l = 0; l <= L; l += 4) {
        const p = rp.getPointAtLength(l), y = snap(p.y), x = p.x;
        const r = rows.get(y); if (r) { r[0] = Math.min(r[0], x); r[1] = Math.max(r[1], x); } else rows.set(y, [x, x]);
      }
      rp.remove();
      const edge = el('g', { fill: '#2f5f99' }), water = el('g', { fill: '#4f86c6' }), glint = el('g', { fill: '#a9cbef' });
      let k = 0;
      for (const [y, [x0, x1]] of rows) {
        if (y < -G || y > H + G) continue;
        const l = snap(x0) - 32, r = snap(x1) + 32;
        edge.append(el('rect', { x: l - 4, y: y - 4, width: r - l + 8, height: G + 8 }));
        water.append(el('rect', { x: l, y, width: r - l, height: G }));
        k++;
        if (k % 7 === 0) glint.append(el('rect', { x: l + 8 + ((k * 13) % 24), y: y + 2, width: 12, height: 4 }));
        if (k % 11 === 0) glint.append(el('rect', { x: r - 24 - ((k * 7) % 16), y: y + 2, width: 8, height: 4 }));
      }
      svg.append(edge, water, glint);
    }
    const onRiver = (x, y) => { const r = rows.get(snap(y)); return r && x > snap(r[0]) - 40 && x < snap(r[1]) + 40; };

    // the trail: a hidden smooth path for walking, drawn as stepping tiles on a 4px grid
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
      const a = pts[i - 1], b = pts[i], dy = (b.y - a.y) * 0.5;
      d += ` C ${a.x} ${a.y + dy}, ${b.x} ${b.y - dy}, ${b.x} ${b.y}`;
    }
    trail = el('path', { d, fill: 'none', stroke: 'none' });
    svg.append(trail);
    stops = [0];
    let seg = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
      const a = pts[i - 1], b = pts[i], dy = (b.y - a.y) * 0.5;
      seg += ` C ${a.x} ${a.y + dy}, ${b.x} ${b.y - dy}, ${b.x} ${b.y}`;
      stops.push(measure(seg));
    }
    stopOf = new Map(vis.map((n, i) => [n, stops[i]]));
    const total = trail.getTotalLength();
    const planks = el('g'), steps = el('g');
    tiles = [];
    for (let l = 0; l <= total; l += 16) {
      const p = trail.getPointAtLength(l), x = snap(p.x, 4), y = snap(p.y, 4);
      if (onRiver(x, y)) {   // a plank bridge where the trail crosses water
        planks.append(el('rect', { x: x - 18, y: y - 7, width: 36, height: 14, fill: '#4b3220' }));
        planks.append(el('rect', { x: x - 16, y: y - 5, width: 32, height: 10, fill: '#9a6a3f' }));
        planks.append(el('rect', { x: x - 16, y: y - 1, width: 32, height: 2, fill: '#7a5232' }));
      }
      const r = el('rect', {});
      steps.append(r);
      tiles.push({ r, x, y, len: l, state: '' });
    }
    svg.append(planks, steps);

    // decor in the gutters: trees, bushes, rocks, houses, signs, fences, ponds; off the trail, the water and the boards
    const boards = [...main.querySelectorAll('.board, .games')].map((b) => { const r = b.getBoundingClientRect(), m = main.getBoundingClientRect(); return { l: r.left - m.left - 16, r: r.right - m.left + 16, t: r.top - m.top - 16, b: r.bottom - m.top + 24 }; });
    const placed = [];
    const free = (x, y, w, h) => {
      if (x < 4 || x + w > W - 4) return false;
      if (boards.some((q) => x < q.r && x + w > q.l && y < q.b && y + h > q.t)) return false;
      if (pts.some((p) => Math.hypot(p.x - (x + w / 2), p.y - (y + h / 2)) < 70)) return false;
      if (tiles.some((t) => t.x > x - 16 && t.x < x + w + 16 && t.y > y - 16 && t.y < y + h + 16)) return false;
      for (let yy = y - 8; yy <= y + h + 8; yy += G) if (onRiver(x, yy) || onRiver(x + w, yy)) return false;
      if (placed.some((q) => x < q.x + q.w + 12 && x + w + 12 > q.x && y < q.y + q.h + 12 && y + h + 12 > q.y)) return false;
      return true;
    };
    const put = (id, x, y, w, h) => { x = snap(x, 4); y = snap(y, 4); if (!free(x, y, w, h)) return false; placed.push({ x, y, w, h }); svg.append(el('use', { href: id, x, y, width: w, height: h })); return true; };
    const kinds = narrow
      ? [['#sprite-bush', 28, 20], ['#sprite-rock', 24, 16], ['#sprite-mushroom', 18, 15]]
      : [['#sprite-tree', 40, 44], ['#sprite-tree', 40, 44], ['#sprite-bush', 36, 24], ['#sprite-rock', 32, 20], ['#sprite-mushroom', 24, 20], ['#sprite-stump', 24, 16], ['#sprite-bush', 36, 24], ['#sprite-tree', 40, 44]];
    let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    // landmarks first: a house, a signpost, a fence and a pond on wide screens
    if (!narrow) {
      const spots = [[0.12, 0.18, '#sprite-house', 60, 55], [0.86, 0.30, '#sprite-sign', 32, 28], [0.10, 0.52, '#sprite-fence', 60, 30], [0.88, 0.64, '#sprite-house', 60, 55], [0.12, 0.80, '#sprite-sign', 32, 28], [0.85, 0.90, '#sprite-fence', 60, 30]];
      for (const [fx, fy, id, w, h] of spots) for (let k = 0; k < 12 && !put(id, W * fx - w / 2 + (rnd() - 0.5) * 60, H * fy + (rnd() - 0.5) * 300, w, h); k++);
      for (const fy of [0.36, 0.72]) for (let k = 0; k < 16; k++) {   // ponds
        const x = snap(W * (k % 2 ? 0.9 : 0.08) - 40 + (rnd() - 0.5) * 60), y = snap(H * fy + (rnd() - 0.5) * 400), w = 80, h = 40;
        if (!free(x, y, w, h)) continue;
        placed.push({ x, y, w, h });
        svg.append(el('rect', { x: x + 8, y, width: w - 16, height: h, fill: '#2f5f99' }), el('rect', { x, y: y + 8, width: w, height: h - 16, fill: '#2f5f99' }),
          el('rect', { x: x + 12, y: y + 4, width: w - 24, height: h - 8, fill: '#4f86c6' }), el('rect', { x: x + 4, y: y + 12, width: w - 8, height: h - 24, fill: '#4f86c6' }),
          el('rect', { x: x + 20, y: y + 14, width: 12, height: 4, fill: '#a9cbef' }));
        break;
      }
    }
    const count = Math.round(H / (narrow ? 90 : 46));
    for (let n = 0, tries = 0; n < count && tries < count * 12; tries++) {
      const [id, w, h] = kinds[Math.floor(rnd() * kinds.length)];
      const x = narrow ? (rnd() < 0.8 ? 8 + rnd() * 10 : W - 20 - w * 0.2) : rnd() * W, y = rnd() * (H - 120) + 40;
      if (put(id, x, y, w, h)) n++;
    }
    // the castle beside the Contact flag
    const flag = main.querySelector('.node--flag');
    if (flag && !narrow) { const f = centre(flag); svg.append(el('use', { href: '#sprite-castle', x: snap(f.x + 56), y: snap(f.y - 48), width: 64, height: 52 })); }
    paint(pos, true);
  }

  function measure(d) { const p = el('path', { d }); scratch.append(p); const l = p.getTotalLength(); p.remove(); return l; }

  function paint(len, still) {
    if (!trail) return;
    for (const t of tiles) {   // cleared trail: solid stepping stones; ahead: small dots
      const st = t.len <= len + 1 ? 'done' : 'ahead';
      if (st === t.state) continue;
      t.state = st;
      if (st === 'done') { t.r.setAttribute('x', t.x - 7); t.r.setAttribute('y', t.y - 7); t.r.setAttribute('width', 14); t.r.setAttribute('height', 14); t.r.setAttribute('fill', '#ecd9a2'); t.r.setAttribute('stroke', '#a88a4c'); t.r.setAttribute('stroke-width', 2); }
      else { t.r.setAttribute('x', t.x - 3); t.r.setAttribute('y', t.y - 3); t.r.setAttribute('width', 6); t.r.setAttribute('height', 6); t.r.setAttribute('fill', '#fff1c4'); t.r.removeAttribute('stroke'); }
    }
    const total = trail.getTotalLength();
    const p = trail.getPointAtLength(Math.max(0, Math.min(total, len)));
    const hop = still ? 0 : Math.abs(Math.sin(len / 26)) * 9;
    marker.style.transform = `translate(${snap(p.x, 4) - 18}px, ${snap(p.y - hop, 4) - 58}px)`;
    marker.classList.add('is-ready');
  }

  // the trail length for section i, or the last visible node before it
  function stopAt(i) { for (let k = i; k >= 0; k--) if (stopOf.has(nodes[k])) return stopOf.get(nodes[k]); return 0; }

  function go(i) {
    current = i;
    nodes.forEach((n, k) => { n.classList.toggle('is-cleared', k < i); n.classList.toggle('is-current', k === i); });
    const id = sections[i].id;
    hudLinks.forEach((a) => { if (a.dataset.for.split(' ').includes(id)) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current'); });
    const to = stopAt(i), from = pos;
    cancelAnimationFrame(anim);
    if (reduced.matches || !trail) { pos = to; paint(pos, true); return; }
    const dur = Math.min(1400, 380 + Math.abs(to - from) * 0.45), t0 = performance.now();
    const tick = (t) => {
      const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 4);
      pos = from + (to - from) * e;
      paint(pos, k === 1);
      if (k < 1) anim = requestAnimationFrame(tick);
    };
    anim = requestAnimationFrame(tick);
  }

  // which level is on screen: the section crossing the middle of the viewport
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) go(sections.indexOf(e.target));
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach((s) => io.observe(s));

  let raf = 0;
  const redraw = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => { draw(); pos = stopAt(current); paint(pos, true); }); };
  new ResizeObserver(redraw).observe(main);
  document.fonts?.ready.then(redraw);
  addEventListener('load', redraw);
  draw();
  go(0);

  // the games carousel: a seamless loop with a square pause button (and a pause under the pointer); still under reduced motion
  const mq = document.querySelector('[data-marquee]');
  if (mq && !reduced.matches) {
    const track = mq.querySelector('.marquee__track');
    for (const li of [...track.children]) { const c = li.cloneNode(true); c.setAttribute('aria-hidden', 'true'); track.append(c); }
    mq.style.setProperty('--marquee-time', `${Math.round(track.scrollWidth / 2 / 60)}s`);
    mq.classList.add('is-running');
    const toggle = document.querySelector('.games__toggle');
    toggle?.addEventListener('click', () => {
      const paused = mq.classList.toggle('is-paused');
      toggle.setAttribute('aria-label', paused ? 'Play the games list' : 'Pause the games list');
      toggle.querySelector('use').setAttribute('href', paused ? '#i-play' : '#i-pause');
    });
  }
})();
