# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary: recruiters and hiring managers screening for full-time software engineering roles.** They arrive from a résumé, LinkedIn or an application, often on a phone, and spend a minute or two deciding whether Eashan is worth an interview. They want to see what he has built, what stack he works in, his education, and how to reach him.
- Other visitors (peers, hackathon judges, engineers at the hiring company) may look at the code links, but the site is not written for them first.

## Product Purpose

A one-page personal portfolio for Eashan Patel, a full-stack developer. It shows his real projects with captures and links, the tools he ships with, his education, and the ways to contact him. Success: a recruiter understands within the first screen that he is a full-stack developer with shipped work, and reaches a contact link without hunting.

## Positioning

The proof is shipped, inspectable work used by real people: ScarletParking is live on the App Store (1,500+ downloads, Top 100 in Navigation, per its README), Tandem and RU Subletting are live on Vercel, and the code is public on GitHub. The projects solve problems around him (Rutgers parking permits, Rutgers sublets, coordinating several coding agents on one repo), not tutorial clones.

## Operating Context

- Visitors come from a résumé link, LinkedIn or a job application; mobile and desktop both matter. A recruiter should get the gist in one scroll.
- Links out must work: live apps, App Store, GitHub repos, LinkedIn.
- Contact channels shown on the site:
  - Email: eashanpatel@gmail.com (confirmed by Eashan for listing on the site)
  - LinkedIn: https://www.linkedin.com/in/eashanpatel
  - GitHub: https://github.com/eashanpatel

## Capabilities and Constraints

- Static one-page site (plain HTML, CSS and JS, no build step). The earlier attempt in this folder (`assets/`, the old `index.html`) is abandoned and is not design authority. Hosting target not yet decided.
- Featured projects, chosen by Eashan (verified Nov 2026):
  - **ScarletParking** (with Krishanth Babu): iOS app that shows Rutgers students exactly which parking lots their permit is valid in right now. Interactive map, time-aware filtering, list view, a "Set Time" planning mode, marker clustering, one-tap directions; 30+ permit types across New Brunswick, Newark, Camden and Rutgers Health. React Native + Expo. App Store: https://apps.apple.com/us/app/scarletparking/id6744491108 · repo https://github.com/krishb2306/ScarletParking. README impact: Top 100 in Navigation, 12,000+ impressions, 1,500+ downloads, 5-star average. Not affiliated with Rutgers.
  - **Tandem** (with Arnav Mabrukar, built for the Meta AI hackathon): a hosted mediator that lets independent coding agents (Claude Code, Codex, any MCP agent) work on one GitHub repo without colliding: task claims, file claims, human-approved plans and contracts, a shared dashboard; planning by Meta's Muse Spark. Python + TypeScript, PostgreSQL. Live https://agentictandem.vercel.app · repo https://github.com/arnavmabrukar/Tandem.
  - **RU Subletting**: a Next.js, Supabase and Mapbox marketplace for short-term housing around Rutgers, filtered by campus, dates, price and room. Live https://ru-subletting.vercel.app (its listings feed was failing to load when captured) · repo https://github.com/eashanpatel/ru-subletting.
- Not featured unless asked: Wrapped Anytime, RudCo.
- Terminology: project names as written above; "MCP", "file claim", "permit".

## Brand Commitments

- Gaming theme, requested by Eashan: the site should feel like a game (FPS / HUD direction was floated; a Minecraft look was considered). Use a genre feel, never copy a specific game's art, names or look.
- Gamer feel that reflects Eashan's personality, but easily readable, accessible and scrollable: a recruiter gets the gist in one scroll. Must not feel gimmicky, must not be the generic black-and-neon 'gamer' look, must not be slow or heavy on a phone.
- Name as written: Eashan Patel. Location: Randolph, New Jersey.

## Evidence on Hand

- Portrait: GitHub avatar, 460x460, saved as `assets/img/eashan-patel.webp`.
- ScarletParking screenshots (list, map, settings) from its repo; a capture of Tandem's live landing page; a capture of RU Subletting's map.
- Education: B.S. Computer Science and B.A. Data Science, Rutgers University, graduated. Graduation year: **open**, not yet given.
- The only metrics on hand are ScarletParking's README figures (above). No testimonials, employers, internships or awards have been provided; do not invent any.

## Product Principles

1. Real work first: every project claim links to a live app or its code.
2. A recruiter's minute: role, stack, education and contact readable without scrolling far.
3. The gaming theme flavours the presentation; it never hides the facts a recruiter needs.
4. State only what is true and confirmed; leave gaps visible to Eashan, not filled with invention.
