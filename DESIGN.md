---
name: Eashan Patel
description: A one-page portfolio walked as a daylight pixel overworld, from Start to the flag.
colors:
  grass: "#7cb35a"
  grass-deep: "#5f9a45"
  sand: "#ecd9a2"
  sand-deep: "#c9ad6a"
  stone-edge: "#a88a4c"
  trail-dot: "#fff1c4"
  river: "#4f86c6"
  river-deep: "#2f5f99"
  board: "#fff8e6"
  board-2: "#f4e8c8"
  paper-white: "#ffffff"
  ink: "#1f2328"
  ink-2: "#4a4237"
  scarlet: "#c8102e"
  scarlet-deep: "#9b0c23"
  gold: "#f2c14e"
typography:
  display:
    fontFamily: "Pixelify Sans, ui-monospace, monospace"
    fontSize: "clamp(2.75rem, 6vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "0.01em"
  headline:
    fontFamily: "Pixelify Sans, ui-monospace, monospace"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "0.01em"
  title:
    fontFamily: "Pixelify Sans, ui-monospace, monospace"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.02em"
  label:
    fontFamily: "Pixelify Sans, ui-monospace, monospace"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.5
  lead:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.45
  body:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  button:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.2
  numeral:
    fontFamily: "Atkinson Hyperlegible Mono, ui-monospace, monospace"
    fontWeight: 600
    fontFeature: "tnum"
rounded:
  none: "0px"
spacing:
  pixel: "4px"
  grid: "8px"
  tile: "16px"
  board-gap: "18px"
  board-pad: "40px"
  board-pad-phone: "24px 20px"
  start-gap: "48px"
  phone-gutter: "52px"
  level: "96px"
  content-max: "1080px"
components:
  button:
    backgroundColor: "{colors.board}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 18px"
    height: "48px"
  button-hover:
    backgroundColor: "{colors.paper-white}"
  button-primary:
    backgroundColor: "{colors.scarlet}"
    textColor: "{colors.paper-white}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 18px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "#d9142f"
  node-tile:
    backgroundColor: "{colors.board}"
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
    padding: "0 10px"
    height: "52px"
  node-tile-cleared:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.board}"
  node-tile-current:
    backgroundColor: "{colors.scarlet}"
    textColor: "{colors.paper-white}"
  board:
    backgroundColor: "{colors.board}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.board-pad}"
  board-media:
    backgroundColor: "{colors.board-2}"
    padding: "32px"
  score-chip:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.board}"
    rounded: "{rounded.none}"
    padding: "8px 12px"
  hud:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.board}"
    height: "60px"
  pip:
    backgroundColor: "{colors.board}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    size: "26px"
  pip-current:
    backgroundColor: "{colors.scarlet}"
    textColor: "{colors.board}"
---

# Design System: Eashan Patel

## Overview

**Creative North Star: "The Daylight Overworld"**

The page is one map seen from above in full daylight. Grass is the ground for everything, a river meanders through it, and a trail of stepping stones runs from a Start tile, past three numbered level tiles, to a flag and a castle. Content does not float on the map; it stands on cream signboards with heavy ink borders, the way a sign stands in a field. Scrolling is walking: a small player sprite hops along the trail to whichever level is on screen, and the trail behind him becomes solid stone.

Everything on the map is drawn, never photographed or blurred: crisp-edged SVG rectangles on a 4px and 8px grid, `shape-rendering: crispEdges`, `image-rendering: pixelated`. The pixel character comes from those edges and from one pixel display face used sparingly; the reading layer is a plain, highly legible sans so the facts never compete with the costume. The palette is a daylight one (grass, sand, water, cream, ink) with a single brick-scarlet accent. It is light, square, tactile and quick to read.

The world rejects the black-and-neon gamer HUD. The only dark field is the ink HUD bar and small ink plates; the ground is always grass.

**Key Characteristics:**
- Daylight tiled terrain, unbroken from the top of the page to the bottom.
- Square corners everywhere; ink borders of 3px on every raised object.
- Vertical-only hard offset shadows as a press-depth system.
- Pixel face for names and short labels; humanist sans for every sentence; mono for real numbers only.
- Path state drawn by shape: solid stepping stones behind, small dots ahead.
- One accent, scarlet, for the current node and the primary action.

## Colors

A daylight field palette (grass, sand, water, cream paper, ink) with one brick-scarlet accent and a gold that appears only against ink.

### Primary
- **Brick Scarlet** (scarlet): the current level node, the current HUD pip, the primary (email) button, the player's cap and the flag cloth, and the focus outline. Its rarity is how the eye finds "you are here" and "do this".
- **Deep Scarlet** (scarlet-deep): scarlet as text on cream: the role line under the name, numbers inside the lead, the big contact email.

### Secondary
- **Field Grass** (grass): the ground of the whole page, carried as a 64px repeating tile of 4px pixels (two pixel tints darker and lighter for texture). Also the flag pip's ground.
- **Shade Grass** (grass-deep): scrollbar track; the darker grass step.
- **River Blue** (river) and **Deep Water** (river-deep): the river body and its 4px outer bank edge. A pale glint (#a9cbef) breaks the water every few rows.

### Tertiary
- **Path Sand** (sand): the fill of a cleared stepping stone.
- **Stone Edge** (stone-edge): the 2px stroke of a cleared stepping stone.
- **Trail Dot** (trail-dot): the small dots that mark the trail ahead.
- **Dune Sand** (sand-deep): the ledge under every board, the dotted row dividers inside boards, and the resting underline colour of text links.
- **Coin Gold** (gold): numbers inside ink score chips, the current pip's border, the focus outline inside the HUD, and text selection. Gold only ever sits on ink (or is ink-on-gold for selection).

### Neutral
- **Signboard Cream** (board): the face of every board, button and node tile; text on ink.
- **Weathered Cream** (board-2): the media panel inside a level board, behind captures.
- **Paper White** (paper-white): button hover face, text on scarlet, the backing of screen captures.
- **Ink** (ink): all body text, all borders, all press shadows, the HUD bar, score chips and the hint plate.
- **Faded Ink** (ink-2): secondary paragraphs and the pixel labels in fact lists.

### Named Rules
**The One Accent Rule.** Scarlet marks the current position and the primary action only. Nothing decorative is scarlet except the pixel sprites' own cloth.

**The Gold On Ink Rule.** Gold is a highlight on dark plates, never a text colour on cream.

**The Daylight Rule.** The ground is grass. Dark fields are limited to the HUD bar and small ink plates; the page never goes dark-mode-neon.

## Typography

**Display Font:** Pixelify Sans (with ui-monospace, monospace)
**Body Font:** Atkinson Hyperlegible Next (with system-ui, sans-serif)
**Label/Mono Font:** Atkinson Hyperlegible Mono (with ui-monospace, monospace), numbers only

**Character:** A chunky pixel face gives names the feel of a game title card, while Atkinson carries every sentence at an accessible size and weight. The two never share a role.

### Hierarchy
- **Display** (700, clamp(2.75rem, 6vw, 4.5rem), 1.05): the name on the Start board. One per page.
- **Headline** (700, clamp(2rem, 4vw, 3rem), 1.05): project names and "Contact". Node tile numerals use the same face at 1.5rem.
- **Title** (700, 1.375rem, 1): the name in the HUD; the role line under the name uses 500 at the same size in deep scarlet.
- **Label** (500, 1rem, 1.5): short pixel labels only: fact-list terms ("Education", "Stack"), HUD pips, the "Three levels below" hint (1.0625rem).
- **Lead** (600, 1.25rem, 1.45): the one-line "what it is" sentence on each board. The Start lead runs 400 at 1.1875rem/1.55, max 60ch.
- **Body** (400, 1.0625rem, 1.6; 1rem on phones): all running text, max 62ch inside boards.
- **Button** (600, 1rem, 1.2): button labels and HUD links.
- **Numeral** (Mono 600, tabular figures): real figures only (1,500+, Top 100, 5.0).

### Named Rules
**The Names Not Sentences Rule.** Pixelify Sans sets names, numerals on tiles and labels of a few words. Any sentence, paragraph, button label or link is Atkinson Hyperlegible Next.

**The Real Numbers Rule.** The mono face appears only on true figures from the record. No invented scores, levels-as-stats or decorative digits.

## Layout

The page is a single column of map regions on a continuous grass field: Start, three level sections, Finish. Content width is capped at 1080px through a side gutter of `max(20px, (100vw - 1080px) / 2)`; the gutters are where the trail turns and trees grow. A sticky 60px HUD (56px on phones) sits above everything, and anchors scroll with the HUD height plus 16px of clearance.

- **Start** fills the first viewport: a board of at most 640px on the left, the Start node and hint on the right, 48px apart.
- **Levels** are 96px of vertical air top and bottom. Each level board is two columns (media 1.08fr, text 1fr). Level nodes alternate sides (left, right, left) at half the gutter, 96px from the top of the section, so the trail swings across the map.
- **Finish** centres a board of at most 760px under the flag node, with a credits plate below.

**Grids.** The world draws on two grids: an 8px grid for river rows (each row of water is one 8px band, with a 4px bank on every side) and a 4px grid for trail tiles, the bridge planks and the player marker's position. The grass tile is 16 units drawn at 4px per pixel. Spacing inside boards is not on the drawing grid; it uses 18px text gaps, 40px board padding (48px on Finish), 32px media padding.

**Responsive.** At 1040px and below, levels stack media above text, Start stacks to one column and HUD pip names collapse to numbers. At 720px and below the world reduces to the trail alone, drawn in a 52px left gutter: nodes shrink to 40px tiles centred 26px from the edge, Start shows a play-arrow sprite in place of its label, every section takes `padding-left: 52px` and 16px on the right, fact lists stack term over value, and action buttons go full width.

**Known limit.** The river, trees and castle are desktop-only (drawn only when the map is at least 720px wide). On phones the overworld is the trail and the nodes, nothing more.

### Named Rules
**The Unbroken Terrain Rule.** The grass tile and the world layer span the whole of the main element; no section paints its own background, so there is no seam between regions.

**The Grid Snap Rule.** Anything drawn on the map snaps to the 8px grid (water) or the 4px grid (trail, planks, marker). Nothing on the map sits at a fractional position.

## Elevation & Depth

Depth is physical and flat-lit: objects are slabs with a hard ink edge underneath, as if pressed into or lifted off the ground. There are no ambient glows. Interactive slabs use a vertical-only hard offset shadow that behaves like a key: it deepens on hover as the slab rises, and collapses on press as the slab sinks. This press-depth system is native to the world, not a costume.

### Shadow Vocabulary
- **Press rest** (`box-shadow: 0 4px 0 var(--ink)`): buttons and node tiles at rest.
- **Press lift** (`box-shadow: 0 6px 0 var(--ink)` with `translateY(-2px)`): button hover.
- **Press down** (`box-shadow: 0 1px 0 var(--ink)` with `translateY(3px)`): button active.
- **HUD press** (`0 3px 0 #000`, hover `0 5px 0 #000`): buttons on the ink HUD bar, which take a cream border.
- **Board ledge** (`box-shadow: 0 10px 0 -3px var(--sand-deep), 0 18px 30px -12px rgba(31, 35, 40, .45)`): every signboard; a sand ledge under the ink border plus a cast shadow onto the grass. Boards are static and do not press.
- **Marker shadow** (`filter: drop-shadow(0 3px 0 rgba(31, 35, 40, .35))`): the player sprite.

### Named Rules
**The Vertical Press Rule.** Hard shadows fall straight down (x offset 0) and change only with state: deeper on hover, collapsed on active. Never offset sideways, never as decoration on non-interactive text.

## Shapes

Square, always. Every radius is 0: boards, buttons, node tiles, pips, chips, the portrait frame. Raised objects carry a 3px ink border (2px on pips, 3px on the portrait and on screen captures). Dividers inside fact lists are a 2px solid ink rule on top and 2px dotted sand rules between rows. The map's own forms are pixel rectangles: stepping stones 14px with a 2px stroke, dots 6px, planks 36 by 14px, river rows 8px tall.

### Named Rules
**The Square Pixel Rule.** No rounded corners anywhere, including focus outlines and images.

**The Stone And Dot Rule.** Trail state is drawn by shape: a cleared stretch is solid 14px stones with an edge, the stretch ahead is small 6px dots. Colour alone never carries path state.

## Components

### Buttons
Tactile slabs that sink when pressed.
- **Shape:** square (0px), 3px ink border, 48px tall, 18px side padding, 10px gap to a 20px icon.
- **Default:** cream face, ink text, press-rest shadow.
- **Primary:** scarlet face, white text. One primary per region, always email.
- **Hover / Focus:** lifts 2px, shadow deepens to 6px, face goes white (primary goes a brighter scarlet, #d9142f); 0.12s on the world's ease-out. Focus is a 3px scarlet outline offset 3px (gold inside the HUD).
- **Active:** sinks 3px, shadow collapses to 1px.
- **In the HUD:** 40px tall, cream border, black press shadow; label hidden below 720px, leaving the mail icon.

### Text links
- Bold Atkinson, 2px underline offset 5px in dune sand, turning scarlet on hover; a trailing arrow nudges 4px right. Minimum 44px hit height. Used for "Open", "Get it on the App Store", "Read the code".
- The contact email is the large variant: 700 at clamp(1.375rem, 3.4vw, 2.25rem), deep scarlet, 3px sand underline offset 8px, with a 32px mail icon.

### Signboards (cards)
- **Corner Style:** square.
- **Background:** signboard cream; level boards split into a weathered-cream media panel (ink rule between) and a text panel.
- **Shadow Strategy:** board ledge (see Elevation).
- **Border:** 3px ink.
- **Internal Padding:** 40px (48px Finish; 24px by 20px on phones), 18px between text blocks.
- **Anatomy (identical for every level):** capture(s), name, one-line lead, a sentence of detail, optional score chips, a fact list (Built with, Stack), then two text links.

### Score chips
- Ink plate, cream text, 8px by 12px padding, square; the figure in mono gold at 1.125rem. Used only where real figures exist.

### Fact lists
- Pixel term (faded ink) beside an Atkinson value in a fixed term column (9.5rem on Start, 7.5rem on levels), 2px ink top rule, dotted sand row dividers; stacked on phones.

### Navigation (HUD)
- Sticky ink bar, 60px, 3px near-black bottom rule. Name in pixel title type on the left; a level-select of numbered pips (1, 2, 3, flag) with names; the email button on the right.
- **Pips:** 26px cream squares with pixel numerals. The current pip (aria-current="step") goes scarlet with a gold border; the flag pip keeps its grass ground.
- **Mobile:** pip names hide at 1040px, leaving numbered squares as the level select.

### Trail nodes (signature)
- 52px square tiles (40px on phones), pixel numerals, cream face, 3px ink border, press-rest shadow.
- **States:** ahead = cream; cleared = ink face, cream numeral; current = scarlet face, white numeral, plus a 3px ink outline offset 4px so "current" also reads by shape. Colour changes over 0.3s.
- Start reads "Start" (a play-arrow sprite on phones); Finish shows the flag sprite.

### Player marker (signature)
- A 12 by 14 pixel sprite drawn at 36 by 42px, positioned on the 4px grid. As a level crosses the middle of the viewport, the marker walks the trail to that node with an ease-out-quart curve (380ms plus distance, capped at 1.4s) and a small sine hop; stones behind it turn solid. Under reduced motion it sits at the current node with no travel.

## Do's and Don'ts

### Do:
- **Do** keep every corner square (0px) and every raised object on a 3px ink border.
- **Do** use the press-depth shadow (0 4px 0 ink at rest, deeper on hover, collapsed on active) for buttons and node tiles.
- **Do** snap anything drawn on the map to the 8px grid (water) or 4px grid (trail, planks, marker), with crisp edges.
- **Do** set running text, buttons and links in Atkinson Hyperlegible Next; keep Pixelify Sans to names and labels of a few words.
- **Do** draw path and node state with shape (stone vs dot, outline on the current tile) as well as colour.
- **Do** reserve scarlet for the current position and the primary action.
- **Do** keep the grass ground continuous behind every section.

### Don't:
- **Don't** set a sentence, paragraph or button label in the pixel face.
- **Don't** use the mono face on anything but real figures.
- **Don't** round corners, or blur or offset press shadows sideways.
- **Don't** turn the page into a dark, black-and-neon gamer HUD; the ground stays daylight grass.
- **Don't** carry path state by colour alone.
- **Don't** put gold text on cream.
- **Don't** copy a specific game's art, names or look; sprites are drawn for this world.
