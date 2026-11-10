---
name: Eashan Patel
description: A one-page portfolio walked as a daylight pixel overworld, from Start past the flag.
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
  quest-face: "#fffdf5"
  chip-edge: "#d8c79a"
  paper-white: "#ffffff"
  ink: "#1f2328"
  ink-2: "#4a4237"
  scarlet: "#c8102e"
  scarlet-deep: "#9b0c23"
  gold: "#f2c14e"
  legendary: "#c9962c"
  epic: "#6b3fa0"
  rare: "#2f5f99"
  badge-leaf: "#cfe1b8"
  badge-rose: "#f6d2d8"
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
  card-title:
    fontFamily: "Pixelify Sans, ui-monospace, monospace"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0.01em"
  title:
    fontFamily: "Pixelify Sans, ui-monospace, monospace"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.01em"
  nav:
    fontFamily: "Pixelify Sans, ui-monospace, monospace"
    fontSize: "1.0625rem"
    fontWeight: 500
    lineHeight: 1
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
  bio:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  small:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
  button:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.2
  loot:
    fontFamily: "Atkinson Hyperlegible Mono, ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1
rounded:
  none: "0px"
spacing:
  pixel: "4px"
  grid: "8px"
  tile: "16px"
  chip-gap: "6px"
  card-gap: "18px"
  card-pad: "18px 18px 20px"
  board-pad: "40px"
  board-pad-phone: "24px 18px"
  start-gap: "48px"
  phone-gutter: "52px"
  area: "72px"
  node-drop: "96px"
  content-max: "1120px"
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
  button-sm:
    rounded: "{rounded.none}"
    padding: "0 14px"
    height: "44px"
  hud:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.board}"
    height: "60px"
  hud-link:
    textColor: "#e9dfc8"
    typography: "{typography.nav}"
    padding: "0 12px"
    height: "44px"
  hud-link-current:
    textColor: "{colors.paper-white}"
  node-tile:
    backgroundColor: "{colors.board}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    size: "52px"
  node-tile-cleared:
    backgroundColor: "{colors.sand}"
  node-tile-current:
    backgroundColor: "{colors.gold}"
  node-tile-start:
    backgroundColor: "{colors.scarlet}"
  board:
    backgroundColor: "{colors.board}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.board-pad}"
  quest-card:
    backgroundColor: "{colors.quest-face}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.card-pad}"
  loot-chip:
    backgroundColor: "{colors.board-2}"
    textColor: "{colors.ink}"
    typography: "{typography.loot}"
    rounded: "{rounded.none}"
    padding: "6px 8px"
  interest-tag:
    backgroundColor: "{colors.board-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "6px 10px"
  achievement:
    backgroundColor: "{colors.board-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "16px"
  badge:
    backgroundColor: "{colors.gold}"
    rounded: "{rounded.none}"
    size: "60px"
  games-band:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.board}"
  games-toggle:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.board}"
    rounded: "{rounded.none}"
    size: "44px"
---

# Design System: Eashan Patel

## Overview

**Creative North Star: "The Daylight Overworld"**

The page is one map seen from above in full daylight. Grass is the ground for everything, a river meanders through it, and a trail of stepping stones runs from a Start tile through Projects, Experience and Resume to a flag and a castle at Contact, then on past Achievements to a games band at the edge of the map. Content does not float on the map; it stands on cream signboards with heavy ink borders, the way a sign stands in a field. Scrolling is walking: a small player sprite hops along the trail to whichever section is on screen, and the trail behind him becomes solid stone.

Everything on the map is drawn, never photographed or blurred: crisp-edged SVG rectangles on a 4px and 8px grid, `shape-rendering: crispEdges`, `image-rendering: pixelated`. The grass itself is tiled in three layers (grass texture, scattered pebbles and tufts, small flowers), and the gutters fill with drawn landmarks: trees, bushes, rocks, mushrooms, stumps, houses, signposts, fences and ponds. Each section is marked by a node tile carrying a pixel sprite (chest, briefcase, page, flag, trophy, gamepad), and the favicon is the player sprite on grass. The pixel character comes from those edges and from one pixel display face used for names and short labels; the reading layer is a plain, highly legible sans so the facts never compete with the costume. The palette is a daylight one (grass, sand, water, cream, ink) with a brick-scarlet action colour and coin gold for "you are here". It is light, square, tactile and quick to read.

The world rejects the black-and-neon gamer HUD. Dark fields are the ink HUD bar, the games band near the end of the map and small ink plates; the ground is always grass.

**Key Characteristics:**
- Daylight tiled terrain with drawn landmarks, unbroken from the top of the page to the bottom.
- Square corners everywhere; ink borders of 3px on every raised object.
- Vertical-only hard offset shadows as a press-depth system.
- Pixel face for names, nav words and short labels; humanist sans for every sentence; mono only for loot (stack) chips.
- Path state drawn by shape: solid stepping stones behind, small dots ahead; the current node adds an outline.
- Scarlet for the primary action, gold for the current position.

## Colors

A daylight field palette (grass, sand, water, cream paper, ink) with a brick-scarlet action colour, a coin gold for position and reward, and three rarity colours that only tag project cards.

### Primary
- **Brick Scarlet** (scarlet): primary buttons (the HUD Resume download, the About email, each quest card's Play live or App Store, Download PDF), the Start tile, the square bullets of the experience log, the player's cap, flag cloth, house roofs and mushroom caps, and the focus outline on cream.
- **Deep Scarlet** (scarlet-deep): scarlet as text on cream: the role line under the name, bold highlighted names in the bio, quest taglines, the big contact email.

### Secondary
- **Field Grass** (grass): the ground of the whole page, carried as a 64px repeating tile of 4px pixels with lighter and darker tufts, under a 212px pebble-and-tuft layer and a 148px flower layer (cream petals, gold centres, pink #e0556b). The favicon's ground.
- **Shade Grass** (grass-deep): scrollbar track; the darker grass step.
- **River Blue** (river) and **Deep Water** (river-deep): the river body and its 4px outer bank, and the gutter ponds. A pale glint (#a9cbef) breaks the water every few rows.

### Tertiary
- **Coin Gold** (gold): the current node tile, the HUD's current-section underline, the default achievement badge, the square separators in the games band, the focus outline on ink, and text selection.
- **Path Sand** (sand): the fill of a cleared stepping stone and of a cleared node tile; the second badge colour.
- **Stone Edge** (stone-edge): the 2px stroke of a cleared stepping stone.
- **Trail Dot** (trail-dot): the small dots that mark the trail ahead.
- **Dune Sand** (sand-deep): the ledge under every board, the dotted row dividers in fact lists and the log, and the resting underline of text links.
- **Rarity colours** (legendary, epic, rare): the 8px top bar and the label diamond of a quest card; epic and rare also colour the label text. Legendary is a darker gold that also rims the games-band separators; epic is a royal purple chosen by the owner; rare shares deep water's value.
- **Badge tints** (badge-leaf, badge-rose): the third and fourth achievement badge faces, after gold and sand.

### Neutral
- **Signboard Cream** (board): the face of every board, button and resting node tile; text on ink.
- **Weathered Cream** (board-2): fills behind captures, achievement tiles, loot chips and interest tags.
- **Card Cream** (quest-face): the face of a quest card, one step whiter than the board it sits on.
- **Chip Edge** (chip-edge): the 2px border of loot chips and interest tags.
- **Paper White** (paper-white): button hover face, text on scarlet, the current HUD word.
- **Ink** (ink): all body text, all borders, all press shadows, the HUD bar, the games band and the hint plate.
- **Faded Ink** (ink-2): secondary paragraphs, card descriptions, achievement detail, and the pixel labels in fact lists, log dates and rarity rows.

### Named Rules
**The Scarlet Action Rule.** Scarlet fills only primary actions (one per board or card) and the Start tile; deep scarlet carries emphasis in text. Beyond sprites and the log's square bullets, nothing decorative is scarlet.

**The Gold Position Rule.** Gold marks where you are and what you earned (the current node, the current HUD word's underline, badges, selection). It is a fill or a rule, never a text colour on cream.

**The Daylight Rule.** The ground is grass. Dark fields are limited to the HUD bar, the one games band and small ink plates; the page never goes dark-mode-neon.

## Typography

**Display Font:** Pixelify Sans (with ui-monospace, monospace)
**Body Font:** Atkinson Hyperlegible Next (with system-ui, sans-serif)
**Label/Mono Font:** Atkinson Hyperlegible Mono (with ui-monospace, monospace), loot chips only

**Character:** A chunky pixel face gives names the feel of a game title card, while Atkinson carries every sentence at an accessible size and weight. The two never share a role.

### Hierarchy
- **Display** (700, clamp(2.75rem, 6vw, 4.5rem), 1.05): the name on the Start board. One per page.
- **Headline** (700, clamp(2rem, 4vw, 3rem), 1.05): section names (Projects, Experience, Resume, Contact, Achievements unlocked). The games band heading runs smaller, clamp(1.5rem, 3vw, 2rem).
- **Card title** (700, 1.5rem, 1.1): quest card names.
- **Title** (700, 1.375rem, 1.2): the HUD name and experience role headings; the role line under the name uses 500 at the same size in deep scarlet. Achievement titles run 1.25rem.
- **Nav** (500, 1.0625rem, 1): HUD section words and the Start hint plate; 0.875rem on phones.
- **Label** (500, 1rem, 1.5): fact-list terms ("Education", "Languages"), log dates; the group label and rarity row use 1.125rem and 0.9375rem.
- **Lead** (600, 1.25rem, 1.45): the one-line sentence on the Contact board.
- **Bio** (400, 1.125rem, 1.6, max 66ch): the About paragraphs; key names are 700 in deep scarlet, upright.
- **Body** (400, 1.0625rem, 1.6; 1rem on phones): all running text.
- **Small** (400, 0.9375rem, 1.5): card descriptions, achievement detail, interest tags, credits.
- **Button** (600, 1rem, 1.2; 0.9375rem on small buttons): button labels and text links (700).
- **Loot** (Mono 600, 0.8125rem, 1): stack names inside loot chips.
- **Marquee** (700, clamp(1.5rem, 3vw, 2.25rem), 1): game names in the games band, Pixelify Sans.

### Named Rules
**The Names Not Sentences Rule.** Pixelify Sans sets names, single-word nav items, game names and labels of a few words. Any sentence, paragraph, button label or inline link is Atkinson Hyperlegible Next.

**The Loot Rule.** The mono face appears only on loot chips, as item tags for a project's stack. Figures in copy (1,500+, 3.9 GPA) stay in the text face; no invented scores, levels-as-stats or decorative digits.

## Layout

The page is a single column of map regions on a continuous grass field: About (Start), Projects, Experience, Resume, Contact (flag and castle), Achievements, a full-width games band, then a credits plate. Content width is capped at 1120px through a side gutter of `max(20px, (100vw - 1120px) / 2)`; the gutters are where the trail turns and landmarks stand. A sticky 60px HUD (56px on phones) sits above everything, and anchors scroll with the HUD height plus 16px of clearance.

- **Start** fills the first viewport: a board of at most 760px on the left, the Start node and the "Begin the run" hint on the right, 48px apart.
- **Areas** (every section after Start) take 72px of vertical padding. Their nodes alternate sides (right, left, right) at half the gutter, 96px from the top of the section, so the trail swings across the map.
- **Projects** sets three quest cards across, 18px apart, under a group row that pairs the group label with the GitHub link.
- **Experience** and **Resume** split into two columns (1fr and 1.4fr).
- **Contact** centres a board of at most 760px under the flag node (120px of air above), with the castle drawn beside the flag.
- **Achievements** sets four badge tiles across, 16px apart.
- **Games** runs edge to edge: the band ignores the gutter, its head and the reduced-motion list respect it.

**Grids.** The world draws on two grids: an 8px grid for water (river rows, ponds) and a 4px grid for trail tiles, bridge planks, landmarks and the player marker. The grass tile is 16 units drawn at 4px per pixel. Spacing inside boards is not on the drawing grid.

**Responsive.** At 1040px and below, Start stacks to one column, quest cards stack one per row with capture beside text, achievements go two across, and Experience and Resume go single column. At 720px and below the HUD drops the name and the Resume button and spreads the five section words across the bar; the trail runs in a 52px left gutter with 40px node tiles centred 26px from the edge; every area takes `padding: 40px 16px 40px 52px`; captures return above text; achievements go one across with 52px badges; fact lists stack term over value; Start action buttons go full width; the hint and the games node are hidden.

**Known limit.** The river, trees, houses, signposts, fences, ponds and castle are drawn only when the map is wider than 720px. On phones the overworld is the tiled grass, the trail, the nodes and sparse bushes, rocks and mushrooms along the edges.

### Named Rules
**The Unbroken Terrain Rule.** The grass tile and the world layer span the whole of the main element; no section paints its own background. The games band is the single exception: an object laid across the map, with grass visible above and below it.

**The Grid Snap Rule.** Anything drawn on the map snaps to the 8px grid (water) or the 4px grid (trail, planks, landmarks, marker). Nothing on the map sits at a fractional position.

## Elevation & Depth

Depth is physical and flat-lit: objects are slabs with a hard ink edge underneath, as if pressed into or lifted off the ground. There are no ambient glows. Interactive slabs use a vertical-only hard offset shadow that behaves like a key: it deepens on hover as the slab rises, and collapses on press as the slab sinks. Static tiles (node tiles, achievement badges) keep the resting edge and never move. This press-depth system is native to the world, not a costume.

### Shadow Vocabulary
- **Press rest** (`box-shadow: 0 4px 0 var(--ink)`): buttons at rest; node tiles and badges always.
- **Press lift** (`box-shadow: 0 6px 0 var(--ink)` with `translateY(-2px)`): button hover.
- **Press down** (`box-shadow: 0 1px 0 var(--ink)` with `translateY(3px)`): button active.
- **Ink press** (`0 3px 0 #000`, hover `0 5px 0 #000`): buttons on ink fields (the HUD button, the games toggle), which take a cream border.
- **Board ledge** (`box-shadow: 0 10px 0 -3px var(--sand-deep), 0 18px 30px -12px rgba(31, 35, 40, .45)`): every top-level signboard; a sand ledge under the ink border plus a cast shadow onto the grass. Boards are static and do not press.
- **Marker shadow** (`filter: drop-shadow(0 3px 0 rgba(31, 35, 40, .35))`): the player sprite.

### Named Rules
**The Vertical Press Rule.** Hard shadows fall straight down (x offset 0) and change only with state: deeper on hover, collapsed on active. Never offset sideways, never on text.

**The One Ledge Rule.** Only top-level boards carry the ledge. Anything inside a board (quest cards, achievement tiles, chips) is flat, separated by its ink or chip-edge border.

## Shapes

Square, always. Every radius is 0: boards, cards, buttons, node tiles, badges, chips, the portrait frame. Raised objects carry a 3px ink border; chips and tags carry a 2px chip-edge border. A quest card swaps its top border for an 8px rarity bar. Dividers in fact lists and the log are a 2px solid ink rule on top and 2px dotted sand rules between rows. The rarity label leads with an 8px square turned 45 degrees; the games band separates names with 14px gold squares rimmed in legendary. The map's own forms are pixel rectangles: stepping stones 14px with a 2px stroke, dots 6px, planks 36 by 14px, river rows 8px tall, ponds 80 by 40px with stepped corners, and sprites drawn from 1-unit cells.

### Named Rules
**The Square Pixel Rule.** No rounded corners anywhere, including focus outlines and images.

**The Stone And Dot Rule.** Trail state is drawn by shape: a cleared stretch is solid 14px stones with an edge, the stretch ahead is small 6px dots. Colour alone never carries path state.

## Components

### Buttons
Tactile slabs that sink when pressed.
- **Shape:** square (0px), 3px ink border, 48px tall, 18px side padding, 10px gap to a 20px icon.
- **Default:** cream face, ink text, press-rest shadow.
- **Primary:** scarlet face, white text. One primary per board or card.
- **Small:** 44px tall, 14px side padding, 0.9375rem label, 18px icon; the quest card actions.
- **Hover / Focus:** lifts 2px, shadow deepens to 6px, face goes white (primary goes a brighter scarlet, #d9142f); 0.12s on the world's ease-out. Focus is a 3px scarlet outline offset 3px (gold on ink).
- **Active:** sinks 3px, shadow collapses to 1px.
- **On ink:** 40px tall in the HUD, cream border, ink press shadow.

### Text links
- Bold Atkinson, 2px underline offset 5px in dune sand, turning scarlet on hover; a trailing arrow nudges 4px right. Minimum 44px hit height. Used for "See all my projects on GitHub", with a leading GitHub mark.
- The contact email is the large variant: 700 at clamp(1.375rem, 3.4vw, 2.25rem), deep scarlet, 3px sand underline offset 8px, with a 32px mail icon.

### Signboards (cards)
- **Corner Style:** square.
- **Background:** signboard cream.
- **Shadow Strategy:** board ledge (see Elevation).
- **Border:** 3px ink.
- **Internal Padding:** 40px (48px on Contact; 24px by 18px on phones), section heading 28px above content.
- **About board:** a 112px square portrait (76px on phones) in a 3px ink frame beside the name and role line, the bio, a fact list (Education, Interests as tags), then the action row (email primary, Resume, GitHub, LinkedIn).

### Quest cards (signature)
- Card cream face, 3px ink border, 8px rarity bar on top. Flat; they sit inside the Projects board.
- **Anatomy (identical for every project):** a 16:10 capture over a 3px ink rule (two phone screens side by side for a mobile app), then a rarity row in pixel label type, the name, a deep-scarlet tagline, a short description in faded ink, loot chips, and two small buttons pinned to the bottom (primary Play live or App Store, default Source).
- **Rarity:** legendary, epic or rare, carried by the bar and the diamond and named by the label. Label text takes the rarity colour only where it holds 4.5:1 on card cream (epic, rare); legendary gold does not, so its label stays faded ink.
- **Hover:** the capture scales to 1.03 over 0.4s; the card itself does not move.

### Chips
- **Loot chips:** mono 600 at 0.8125rem, weathered-cream fill, 2px chip-edge border, 6px by 8px; one per stack item, 6px apart.
- **Interest tags:** Atkinson at 0.9375rem, the same fill and border, 6px by 10px.

### Fact lists and the quest log
- Pixel term (faded ink) beside an Atkinson value in a fixed term column (8.5rem in About, 8rem in Resume skills), 2px ink top rule, dotted sand row dividers; stacked on phones.
- The experience log uses the same rules: a role title and pixel date on the left, bullets on the right, each bullet a small scarlet square.

### Achievement badges
- Weathered-cream tiles with a 3px ink border and 16px padding: a 60px badge square (3px ink border, press-rest edge, 32px sprite) beside a pixel title and a faded-ink line.
- Badge faces rotate gold, sand, badge-leaf, badge-rose across each row of four.

### Navigation (HUD)
- Sticky ink bar, 60px, 3px near-black bottom rule. Name in pixel title type on the left; five pixel section words (About, Projects, Experience, Resume, Contact); a primary Resume download button on the right.
- **Current section:** the word goes white and a 3px gold underline grows from the left (0.25s); hover shows the same underline. Marked with `aria-current="location"`; Contact stays current through Achievements and the games band.
- **Phones (720px and below):** the name is visually hidden, the Resume button is removed, and the five words spread across the bar at 0.875rem.

### Trail nodes (signature)
- 52px square tiles (40px on phones), 3px ink border, press-rest edge, each carrying a 28px pixel sprite for its section.
- **States:** ahead = cream; cleared = sand; current = gold plus a 3px ink outline offset 4px so "current" also reads by shape. Colour changes over 0.3s.
- The Start tile is always scarlet with a play-arrow sprite (it keeps scarlet when current or cleared; the gold ink outline still marks it as current); Contact shows the flag sprite with the castle drawn beside it.

### Player marker (signature)
- A 12 by 14 pixel sprite drawn at 36 by 42px, positioned on the 4px grid. As a section crosses the middle of the viewport, the marker walks the trail to that node with an ease-out-quart curve (380ms plus distance, capped at 1.4s) and a small sine hop; stones behind it turn solid. Under reduced motion it sits at the current node with no travel.

### Games band
- A full-width ink band with 3px near-black rules above and below, a pixel heading and a 44px square pause/play toggle (cream border, ink press).
- Game names scroll as a seamless marquee at about 60px per second, separated by gold squares and faded at both edges; it pauses on hover or with the toggle. Under reduced motion the list is static and wraps inside the gutter, and the toggle is removed.

## Do's and Don'ts

### Do:
- **Do** keep every corner square (0px) and every raised object on a 3px ink border.
- **Do** use the press-depth shadow (0 4px 0 ink at rest, deeper on hover, collapsed on active) for buttons, and the resting edge for node tiles and badges.
- **Do** snap anything drawn on the map to the 8px grid (water) or 4px grid (trail, planks, landmarks, marker), with crisp edges.
- **Do** set running text, buttons and links in Atkinson Hyperlegible Next; keep Pixelify Sans to names, nav words and labels of a few words.
- **Do** draw path and node state with shape (stone vs dot, outline on the current tile) as well as colour.
- **Do** keep scarlet for primary actions and the Start tile, gold for the current position and rewards.
- **Do** give every quest card the same anatomy, with its rarity on the bar and the diamond, named by the pixel label.
- **Do** keep the grass ground continuous behind every section.

### Don't:
- **Don't** set a sentence, paragraph or button label in the pixel face.
- **Don't** use the mono face on anything but loot chips.
- **Don't** round corners, or blur or offset press shadows sideways.
- **Don't** put a ledge on anything inside a board.
- **Don't** turn the page into a dark, black-and-neon gamer HUD; the ground stays daylight grass and the games band is the only full-width dark field.
- **Don't** carry path state by colour alone.
- **Don't** put gold or legendary text on cream.
- **Don't** copy a specific game's art, names or look; sprites are drawn for this world.
