// ═══════════════════════════════════════════════════════════════════════
// CHANEL CLIENTELING APP — Home Page Generator
// ═══════════════════════════════════════════════════════════════════════
// Based on: DESIGN_SYSTEM.md · VOICE.md · HomeView.swift
// Target: Revamp-Clienteling-App — node-id 2301-14930
// Frame: iPhone 15 Pro — 393 × 852
// ═══════════════════════════════════════════════════════════════════════

const PW = 393;
const PH = 852;
const PAD = 20;

// ─── Design tokens ──────────────────────────────────────────────────────

const C = {
  black:        { r: 0,     g: 0,     b: 0     },
  white:        { r: 1,     g: 1,     b: 1     },
  accent:       { r: 0.722, g: 0.588, b: 0.306 }, // #B8964E  gold
  neutralLower: { r: 0.929, g: 0.929, b: 0.929 }, // #EDEDED  page bg
  neutralMid:   { r: 0.831, g: 0.831, b: 0.831 }, // #D4D4D4  borders
  textBody:     { r: 0.2,   g: 0.2,   b: 0.2   }, // #333333
  textMuted:    { r: 0.533, g: 0.533, b: 0.533 }, // #888888
  surface:      { r: 1,     g: 1,     b: 1     }, // #FFFFFF  cards
};

// ─── Resolved fonts (populated in loadFonts) ────────────────────────────

let Fserif    = { family: 'Georgia', style: 'Bold'    };
let FserifReg = { family: 'Georgia', style: 'Regular' };
let Fsans     = { family: 'Inter',   style: 'Regular' };
let FsansBold = { family: 'Inter',   style: 'Bold'    };

async function tryLoad(family, style) {
  try { await figma.loadFontAsync({ family, style }); return true; }
  catch (_) { return false; }
}

async function loadFonts() {
  const brandOk = await tryLoad('ABChanel Corpo 2022', 'SemiBold');
  await tryLoad('ABChanel Corpo 2022', 'Regular');
  await tryLoad('Georgia',   'Bold');
  await tryLoad('Georgia',   'Regular');
  const helvOk = await tryLoad('Helvetica', 'Regular');
  await tryLoad('Helvetica', 'Bold');
  await tryLoad('Inter',     'Regular');
  await tryLoad('Inter',     'Bold');

  Fserif    = brandOk ? { family: 'ABChanel Corpo 2022', style: 'SemiBold' }
                      : { family: 'Georgia', style: 'Bold' };
  FserifReg = brandOk ? { family: 'ABChanel Corpo 2022', style: 'Regular' }
                      : { family: 'Georgia', style: 'Regular' };
  Fsans     = helvOk  ? { family: 'Helvetica', style: 'Regular' }
                      : { family: 'Inter', style: 'Regular' };
  FsansBold = helvOk  ? { family: 'Helvetica', style: 'Bold' }
                      : { family: 'Inter', style: 'Bold' };
}

// ─── Primitive helpers ───────────────────────────────────────────────────

function box(x, y, w, h, color, { a = 1, r = 0, shadow = false } = {}) {
  const node = figma.createRectangle();
  node.x = x; node.y = y;
  node.resize(Math.max(w, 1), Math.max(h, 1));
  node.fills = [{ type: 'SOLID', color, opacity: a }];
  if (r > 0) node.cornerRadius = r;
  if (shadow) node.effects = [{
    type: 'DROP_SHADOW',
    color: { r: 0, g: 0, b: 0, a: 0.07 },
    offset: { x: 0, y: 4 }, radius: 14, spread: 0,
    visible: true, blendMode: 'NORMAL',
  }];
  return node;
}

function dot(x, y, d, color, a = 1) {
  const node = figma.createEllipse();
  node.x = x; node.y = y;
  node.resize(d, d);
  node.fills = [{ type: 'SOLID', color, opacity: a }];
  return node;
}

function ring(x, y, d, color, sw = 1.5) {
  const node = figma.createEllipse();
  node.x = x; node.y = y;
  node.resize(d, d);
  node.fills = [];
  node.strokes = [{ type: 'SOLID', color }];
  node.strokeWeight = sw;
  return node;
}

// Returns a text node. Font must be loaded before calling.
function label(str, x, y, { font = Fsans, size = 14, color = C.textBody, a = 1,
  fixW = 0, align = 'LEFT', ls = 0, lh = 0 } = {}) {
  const node = figma.createText();
  node.fontName = font;
  node.fontSize = size;
  node.fills = [{ type: 'SOLID', color, opacity: a }];
  if (ls !== 0) node.letterSpacing = { value: ls, unit: 'PERCENT' };
  if (lh !== 0) node.lineHeight    = { value: lh, unit: 'PERCENT' };
  node.characters = str;
  if (fixW > 0) {
    node.textAutoResize = 'HEIGHT';
    node.resize(fixW, node.height);
    node.textAlignHorizontal = align;
  }
  node.x = x; node.y = y;
  return node;
}

function add(parent, ...nodes) {
  nodes.forEach(n => parent.appendChild(n));
}

// ─── Component: Header ───────────────────────────────────────────────────
// Black nav bar (96pt). Greeting left, search + bell right.

function buildHeader(f) {
  add(f, box(0, 0, PW, 96, C.black));

  // Greeting
  add(f,
    label('BONJOUR', PAD, 50, { font: FsansBold, size: 10, color: C.textMuted, ls: 12 }),
    label('Sophie M.', PAD, 63, { font: Fserif, size: 22, color: C.white, lh: 100 })
  );

  // Search button
  const sX = PW - 92, sY = 56;
  add(f,
    dot(sX, sY, 36, C.white, 0.10),
    ring(sX + 10, sY + 9, 13, C.white),
    box(sX + 22, sY + 21, 2, 7, C.white, { r: 1 })
  );

  // Bell button
  const bX = PW - 48, bY = 56;
  add(f,
    dot(bX, bY, 36, C.white, 0.10),
    box(bX + 11, bY + 9, 14, 12, C.white, { r: 2 }),
    box(bX + 15, bY + 21, 6, 3,  C.white, { r: 1 })
  );

  // Badge "2"
  add(f,
    dot(PW - 36, 55, 14, C.accent),
    label('2', PW - 32, 58, { font: FsansBold, size: 8, color: C.white })
  );
}

// ─── Component: Hero Card ────────────────────────────────────────────────
// Full-width black card. Dashboard summary + quarter title.

function buildHeroCard(f, y) {
  const cW = PW - PAD * 2;
  const cH = 162;

  add(f, box(PAD, y, cW, cH, C.black, { r: 20, shadow: true }));

  // Decorative vertical lines (brand texture)
  add(f,
    box(PAD + cW - 88, y + 12, 1, cH - 24, C.white, { a: 0.04 }),
    box(PAD + cW - 60, y + 12, 1, cH - 24, C.white, { a: 0.02 })
  );

  // Label
  add(f, label('TABLEAU DE BORD', PAD + 20, y + 20,
    { font: FsansBold, size: 10, color: C.accent, ls: 14 }));

  // Quarter title
  add(f, label('Q1 2026', PAD + 20, y + 40,
    { font: Fserif, size: 36, color: C.white, lh: 100 }));

  // Subtitle
  add(f, label('Mis à jour il y a 2h', PAD + 20, y + 90,
    { font: Fsans, size: 13, color: C.textMuted }));

  // Arrow CTA
  add(f,
    dot(PAD + cW - 52, y + cH - 52, 36, C.white, 0.08),
    label('→', PAD + cW - 41, y + cH - 41,
      { font: FsansBold, size: 18, color: C.white })
  );
}

// ─── Component: Section header ───────────────────────────────────────────

function buildSectionLabel(f, x, y, text, withLink = false) {
  add(f, label(text.toUpperCase(), x, y,
    { font: FsansBold, size: 11, color: C.textMuted, ls: 8 }));

  if (withLink) {
    add(f,
      label('TOUT VOIR', PW - PAD - 68, y,
        { font: FsansBold, size: 11, color: C.textMuted, ls: 8 }),
      label('›', PW - PAD - 6, y,
        { font: FsansBold, size: 14, color: C.textMuted })
    );
  }
}

// ─── Component: Stat card ────────────────────────────────────────────────
// Small metric card: icon + value + label.

function buildStatCard(f, x, y, w, value, lbl) {
  const cH = 80;
  add(f, box(x, y, w, cH, C.surface, { r: 16, shadow: true }));

  // Icon placeholder circle
  add(f, dot(x + w / 2 - 14, y + 10, 28, C.neutralLower));

  // Value
  const v = label(value, x, y + 42,
    { font: Fserif, size: 17, color: C.textBody, fixW: w, align: 'CENTER' });
  add(f, v);

  // Label
  const l = label(lbl.toUpperCase(), x, y + 63,
    { font: FsansBold, size: 9, color: C.textMuted, ls: 5, fixW: w, align: 'CENTER' });
  add(f, l);
}

// ─── Component: Action card ──────────────────────────────────────────────
// Quick-action card, 2-column grid. First card is dark (primary CTA).

function buildActionCard(f, x, y, w, iconLetter, title, subtitle, dark = false) {
  const cH = 90;
  const tc = dark ? C.white : C.textBody;
  const sc = dark ? { r: 0.55, g: 0.55, b: 0.55 } : C.textMuted;

  add(f, box(x, y, w, cH, dark ? C.black : C.surface,
    { r: 16, shadow: !dark }));

  // Icon circle
  add(f, dot(x + 14, y + 14, 34,
    dark ? C.white : C.neutralLower, dark ? 0.09 : 1));

  // Icon letter placeholder
  add(f, label(iconLetter, x + 22, y + 20,
    { font: FsansBold, size: 16, color: dark ? C.white : C.textMuted }));

  add(f,
    label(title,    x + 14, y + 56, { font: Fserif,    size: 13, color: tc }),
    label(subtitle, x + 14, y + 72, { font: Fsans,     size: 11, color: sc })
  );
}

// ─── Component: Activity item ────────────────────────────────────────────
// White card row: avatar + name + description + timestamp + optional badge.

function buildActivityItem(f, y, initials, name, desc, time, badgeLabel = null) {
  const cW = PW - PAD * 2;
  const cH = 62;

  add(f, box(PAD, y, cW, cH, C.surface, { r: 12, shadow: true }));

  // Avatar
  add(f, dot(PAD + 12, y + 13, 36, C.neutralLower));
  add(f, label(initials, PAD + 12, y + 22,
    { font: FsansBold, size: 12, color: C.textBody, fixW: 36, align: 'CENTER' }));

  // Name + description
  add(f,
    label(name, PAD + 56, y + 13, { font: Fserif, size: 13, color: C.textBody }),
    label(desc, PAD + 56, y + 30, { font: Fsans,  size: 11, color: C.textMuted,
      fixW: cW - 110 })
  );

  // Time
  add(f, label(time, PW - PAD - 32, y + 13,
    { font: Fsans, size: 11, color: C.textMuted }));

  // Badge
  if (badgeLabel) {
    add(f,
      box(PAD + 56, y + 44, 32, 14, C.accent, { r: 7 }),
      label(badgeLabel, PAD + 60, y + 46,
        { font: FsansBold, size: 8, color: C.white })
    );
  }

  // Bottom divider
  add(f, box(PAD + 56, y + cH - 1, cW - 56, 1, C.neutralMid, { a: 0.5 }));
}

// ─── Component: Tab bar ──────────────────────────────────────────────────
// 4 tabs. Accueil is active (filled icon, black label).

function buildTabBar(f) {
  const tabY = PH - 83;
  add(f,
    box(0, tabY, PW, 83, C.surface),
    box(0, tabY, PW, 1,  C.neutralMid)
  );

  const tabs = [
    { label: 'Accueil', active: true  },
    { label: 'Clients', active: false },
    { label: 'Agenda',  active: false },
    { label: 'Profil',  active: false },
  ];
  const tabW = PW / 4;

  tabs.forEach(({ label: lbl, active }, i) => {
    const tx = i * tabW;
    const color = active ? C.black : C.textMuted;
    const iconX = tx + tabW / 2 - 11;
    const iconY = tabY + 10;

    if (active) {
      // House icon simplified: roof triangle via rotated rect + body
      add(f, box(iconX + 3, iconY + 6, 16, 12, C.black, { r: 2 }));
      add(f, box(iconX,     iconY + 2, 22, 2,  C.black, { r: 1 }));
    } else {
      add(f, dot(iconX + 3, iconY + 3, 16, C.textMuted, 0.25));
    }

    add(f, label(lbl.toUpperCase(), tx, tabY + 34,
      { font: FsansBold, size: 9, color, ls: 3, fixW: tabW, align: 'CENTER' }));
  });

  // Home indicator bar
  add(f, box(PW / 2 - 60, tabY + 68, 120, 5, C.black, { a: 0.18, r: 2.5 }));
}

// ─── Main ────────────────────────────────────────────────────────────────

async function main() {
  await loadFonts();

  // Create phone frame
  const f = figma.createFrame();
  f.name = 'Accueil — Home';
  f.resize(PW, PH);
  f.fills = [{ type: 'SOLID', color: C.neutralLower }];
  f.clipsContent = true;
  figma.currentPage.appendChild(f);

  // Page background (below header)
  add(f, box(0, 96, PW, PH - 96, C.neutralLower));

  // ── Header ──────────────────────────────────────────────────────────
  buildHeader(f);

  let y = 96 + PAD; // 116

  // ── Hero card ────────────────────────────────────────────────────────
  buildHeroCard(f, y);
  y += 162 + 24; // → 302

  // ── Aperçu ───────────────────────────────────────────────────────────
  buildSectionLabel(f, PAD, y, 'Aperçu');
  y += 20 + 8; // → 330

  const sW = Math.floor((PW - PAD * 2 - 24) / 3); // 109
  buildStatCard(f, PAD,                    y, sW, '247', 'Tâches');
  buildStatCard(f, PAD + sW + 12,          y, sW, '18',  'Équipe');
  buildStatCard(f, PAD + (sW + 12) * 2,   y, sW, '94%', 'Score');
  y += 80 + 24; // → 434

  // ── Actions rapides ───────────────────────────────────────────────────
  buildSectionLabel(f, PAD, y, 'Actions rapides');
  y += 20 + 8; // → 462

  const aW = Math.floor((PW - PAD * 2 - 12) / 2); // 170
  buildActionCard(f, PAD,          y, aW, '+', 'Nouvelle tâche', 'Créer & assigner', true);
  buildActionCard(f, PAD + aW + 12, y, aW, '▢', 'Planifier',     '3 événements ce soir');
  y += 90 + 12; // → 564

  buildActionCard(f, PAD,          y, aW, '✉', 'Messages', '5 non lus');
  buildActionCard(f, PAD + aW + 12, y, aW, '≡', 'Rapports',  'Exporter les données');
  y += 90 + 20; // → 674

  // ── Activité récente ──────────────────────────────────────────────────
  buildSectionLabel(f, PAD, y, 'Activité récente', true);
  y += 20 + 8; // → 702

  buildActivityItem(f, y, 'AL', 'Alice Laurent',
    'A validé le rapport mensuel', '09:14', 'New');
  y += 62 + 8; // → 772 (tab bar starts at 769 — this item partially peeks)

  buildActivityItem(f, y, 'TM', 'Thomas M.',
    'A mis à jour le projet Q1', '08:52');

  // ── Tab bar ───────────────────────────────────────────────────────────
  buildTabBar(f);

  figma.viewport.scrollAndZoomIntoView([f]);
  figma.closePlugin('Accueil créé avec succès ✓');
}

main().catch(err => figma.closePlugin(`Erreur : ${err.message}`));
