---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Surface brief: index.html (portfolio home)

Scope: the one-page portfolio. Visitor mode: Experience (the work leads), read by recruiters, so every fact must be legible in one scroll.
Audience/job: recruiters screening for full-time SWE roles; see shipped work, stack, education, contact fast.
Proof: ScarletParking on the App Store (README figures), Tandem live (Meta AI hackathon), RU Subletting live.
Constraints: gamer feel without gimmick, no generic black-and-neon, light and fast on phones, accessible.
Open: graduation year; hosting; Tandem/ScarletParking are co-built (credit collaborators).
Recorded adaptations: the level-select list lives in the sticky HUD (always reachable, serves the recruiter's minute) instead of on the map's right side; the pixel face also sets short labels (role line, dt labels, pips, hint), never running text.

## Direction contract

THESIS: Scrolling the page is walking one overworld map: START, three project levels on a trail, then the end flag with contact. Refuses the default "hero + grid of project cards" and the black-neon gamer HUD.

OWN-WORLD: A daylight tiled terrain (grass green, sand path, Raritan river blue) drawn in crisp SVG/CSS on a fixed tile unit; level nodes on a dotted trail; content sits on cream "signboard" panels with a dark ink border, one brick-red accent for the active node and primary action; pixel display face for names only, a plain humanist sans for reading, a fixed-width face for real numbers.

STORY: The visitor learns who Eashan is and how to reach him at START, walks three levels (ScarletParking, Tandem, RU Subletting), each showing the real app, what it does, stack, proof and links, and reaches the castle/flag with email, GitHub, LinkedIn.

FIRST VIEWPORT: Full-width map. Left 7 columns: signboard with "Eashan Patel" in pixel type, "Full-stack developer", one line on what he ships, education line, and three contact "path signs" (Email primary, GitHub, LinkedIn). Right: the START node on the trail, the trail running down off-screen toward Level 1, a small level-select list (1 ScarletParking, 2 Tandem, 3 RU Subletting) as the in-page nav.

FORM: Overworld Map, candidate 5 of 7 on the ordered list; seed:8caf4b06314bc94b. Raises: stroke-drawn path state (jackfield), whole-tile recomposition (azulejo), identical level-card anatomy (folio), real numbers as the only score digits (nixie), keyboard level-select mirrors the map (jacquard), terrain unbroken across section seams (itasha). Signature interaction: as each level enters view, a player marker hops along the trail to that node and the cleared trail behind turns solid; under reduced motion the marker sits at the current node without travel.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
