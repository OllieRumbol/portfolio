# Portfolio Redesign — Tasks

> **What this document is for:** It answers *what do we do next?* It splits the approved design into small, verifiable steps and tracks progress against them.

Last updated: 2026-11-26

Tests are numbered as in plan section 7.2. A task that adds a test makes it pass for the pages that exist at that point. Later tasks keep it passing.

**The page checks** are tests 2, 3, 7, 8, 9, 11, 12 and 27 to 30. From T10 on, each task makes them pass for its part of the site, in every state that part has.

## Phase 1 — Foundation

Goal: The old app is gone. A skeleton of every page builds into its own HTML file under `/portfolio/`. CI checks every pull request, and the repository rules require those checks.
Base branch: release/redesign

`release/redesign` is created from `main` after the pull request for this file merges (plan section 1.1, option A).

- [ ] **T1 — Replace the old app with the new toolchain**
  - Refs: spec 3, spec 4.1 defects 7 and 9, spec 6.1.1, spec 6.1.8 item 7, spec 8 assumption 7; plan 2, plan 3.1, plan 3.2, plan 3.5 (TypeScript), plan 6 (dependencies), plan 8.2, plan 9 risk 1
  - Depends on: —
  - Done when:
    - `node -v` is checked against `.nvmrc`, as plan risk 1 says.
    - The old app is deleted: `src/`, `public/`, the Create React App setup, Bootstrap, React Router 5, the `gh-pages` package, `Articles.json`, the CV file and `.github/workflows/main_deploy.yml`. The original testimonials stay readable in the git history, with the owner's committed fix.
    - `package.json` has React 19, React Router 8 framework mode, Vite 8, the React Compiler, TypeScript 6.0 with `strict` (plan 3.5), ESLint, Prettier and Vitest. Every other package is on its current version.
    - Imports from `src` use the `@/` path alias.
    - The scripts `dev`, `build`, `typecheck`, `lint`, `format`, `format:check` and `test` work, as on the JWT Validator site.
    - One page renders "Oliver Bourne" from `src/`, and one unit test passes.
    - The local `.claude/launch.json` runs `npm run dev` on the new port.
  - Verify: `npm ci && npm run typecheck && npm run lint && npm run format:check && npm test && npm run build && npm outdated`
  - Notes:

- [ ] **T2 — Pre-render every page under /portfolio/ and prove it**
  - Refs: spec 4.1 defect 4, spec 5.1, spec 6.1.7 items 1, 2, 4 and 5, spec 6.2, spec 6.7; plan 1.1, plan 2, plan 3.5 (build and routing, page addresses, old addresses, unknown addresses), plan 7.1, plan 9 risks 2 and 9
  - Depends on: T1
  - Done when:
    - `basename` and Vite `base` are both `/portfolio/` (plan 2).
    - The build writes one HTML file for `/`, `/experience/`, `/projects/` and `/claude/`, and a `404.html` from the catch-all route, under `build/client`. The pages hold placeholder text.
    - Each page has its own `title` and `description` from `src/content/site.ts`.
    - The old-address script sends `#/aboutMe`, `#/projects`, `#/articles`, `#/cv` and any other `#/` address to the page plan section 3.5 names.
    - `scripts/serve-pages.mjs` serves `build/client` at `/portfolio/` with GitHub Pages' rules (plan 7.1). Playwright runs against it, and `npx playwright install` is part of the setup.
    - At every page and at an unknown address, every script, style and font loads under `/portfolio/`, and the console shows no error.
    - Tests 1 (title and description only), 4, 5 and 25 pass.
    - `docs/adr/0001-pre-rendered-pages-on-github-pages.md` records the decision in plan section 1.1.
  - Verify: `npm run typecheck && npm run lint && npm test && npm run build && npm run e2e && npm outdated`
  - Notes:

- [ ] **T3 — Add the CI and deploy workflows and the Dependabot settings**
  - Refs: spec 4.1 defects 7 and 8, spec 6.1.2 rule 3, spec 6.1.8 items 2, 5, 6 and 7, spec 6.6 (performance); plan 6 (workflows, dependencies), plan 7.1, plan 8.2
  - Depends on: T2
  - Done when:
    - `ci.yml` runs on pull requests into `main` and `release/**`, and on pushes to them, with the jobs `checks`, `e2e`, `lighthouse` and `release-check` (plan 8.2). `release-check` runs only on pull requests into `main`.
    - `checks` runs the type check, lint, format check, spell check, unit tests, build and `npm audit --audit-level=high`.
    - The scripts `spell`, `lighthouse` and `release-check` work locally. `lighthouse` runs test 13 on every page: mobile profile, median of 3 runs, performance at least 90.
    - The spell check uses `cspell` with `@cspell/dict-en-gb` (plan 7.1).
    - Tests 13, 20 and 26 pass.
    - `deploy.yml` builds and deploys on push to `main` only, with `pages: write` and `id-token: write` on the deploy job only, and no personal access token. It is copied from the JWT Validator site.
    - Every action is first-party, at its current major version. Checkout has `persist-credentials: false`.
    - `.github/dependabot.yml` sets the version updates and the security update group exactly as plan 6 (dependencies) says: npm and GitHub Actions, Monday 07:00 `Europe/London`, a 7-day cooldown, the groups, and the `typescript` and `@types/node` ignore rules. Each setting has a comment that says why.
    - `checks`, `e2e` and `lighthouse` pass on this task's pull request.
  - Verify: `npm run spell && npm run lighthouse && npm outdated`, then `gh pr checks <this pull request>`
  - Notes:

- [ ] **T4 — Write the README and the root files**
  - Refs: spec 6.1.8 item 8; plan 3.5 (root files)
  - Depends on: T3
  - Done when:
    - `README.md` says what the site is, how to run it, how to test it and how it deploys, and that the licence covers the code only.
    - `LICENSE` holds the MIT licence.
    - `SECURITY.md` says how to report a problem.
    - `CONTRIBUTING.md` says this is a personal site and not open to contributions.
    - Every command in the README runs as written.
  - Verify: `npm run format:check && npm run spell`, then run each command in the README.
  - Notes:

- [ ] **T5 — Protect `main` and `release/**` and turn on Dependabot alerts**
  - Refs: spec 6.1.8 items 1 to 4, spec 9; plan 6 (dependencies), plan 8.2, plan 8.3
  - Depends on: T3
  - Done when:
    - The owner has turned on a ruleset for `main`: pull request required with 0 approvals, `checks`, `e2e`, `lighthouse` and `release-check` required, no bypass, no force push, no deletion.
    - The owner has turned on a ruleset for `release/**`: the same rules, with `checks`, `e2e` and `lighthouse` required, and deletion allowed.
    - The owner has turned on Dependabot alerts and "Automatically delete head branches". Security updates stay off until the release (plan 6).
    - A test pull request into `release/redesign` with a failing check cannot merge. It is closed afterwards.
  - Verify: `gh api repos/OllieRumbol/portfolio/rulesets`, then `gh api repos/OllieRumbol/portfolio/rulesets/<id>` for each ruleset, `gh api repos/OllieRumbol/portfolio/vulnerability-alerts`, `gh api repos/OllieRumbol/portfolio --jq .delete_branch_on_merge`, and the test pull request's merge state.
  - Notes: The owner makes these changes in the repository settings. This task gives the steps one part at a time and checks the result.

## Phase 2 — Shared parts

Goal: Every page shares one set of content types, one look, one top bar, one footer, one theme and one set of checks, before any page is built.
Base branch: release/redesign

- [ ] **T6 — Add the content types and the shared content**
  - Refs: spec 5.2, spec 6.1.1, spec 6.1.2 rule 4, spec 6.1.5 item 5; plan 3.3, plan 3.4
  - Depends on: T2
  - Done when:
    - `src/types/content.ts` holds the types in plan section 3.3.
    - `site.ts`, which T2 started, gains the site address and the LinkedIn and GitHub addresses. `profile.ts` holds the name, the job title and the summary.
    - The UI parts in plan section 3.1 (`Card`, `Tag`, `Stat`, `Chip`, `Section`) exist, with component tests.
    - Missing content uses the placeholder form in plan section 3.4.
  - Verify: `npm run typecheck && npm run lint && npm test`
  - Notes:

- [ ] **T7 — Add the design tokens, theme, print styles, top bar and footer**
  - Refs: spec 6.1.9 item 1, spec 6.5 items 1, 2, 3, 8 and 9, spec 6.6 (accessibility, privacy), spec 6.7; plan 3.5 (styling, fonts, theme, printing, light theme badge green), plan 3.6, plan 4
  - Depends on: T6
  - Done when:
    - `tokens.css` holds every colour in plan section 3.6, for both themes, including `--green-on-soft`, the board squares, the glow, the shadow and the terminal colours. `base.css` holds the type sizes, content width, radii and print styles.
    - Geist and Geist Mono are self-hosted, with only the weights plan section 3.5 names.
    - The theme script in `<head>` sets the theme before the page paints. The toggle switches the theme, the icon and the label, and the choice holds across pages and reloads. If storage is blocked, the theme follows the device.
    - The top bar and the footer match the approved mock-ups at 375 px and 1280 px, in both themes. Both have "Message me on LinkedIn".
    - Tests 6, 10 and 30 pass.
  - Verify: `npm run typecheck && npm run lint && npm test && npm run build && npm run e2e && npm run lighthouse && npm outdated`
  - Notes:

- [ ] **T8 — Add the page checks for content, motion, accessibility and links**
  - Refs: spec 6.1.7 item 3, spec 6.5 items 9 and 10, spec 6.6 (accessibility, privacy, browsers), spec 6.7; plan 3.5 (animations, interactive details without JavaScript), plan 4, plan 7.1, plan 7.2
  - Depends on: T7
  - Done when:
    - `usePlayOnView` and `useReducedMotion` exist and are tested. Without JavaScript, without `IntersectionObserver`, or with reduced motion, an element shows its finished state.
    - Tests 2, 3, 7, 9, 11, 27, 28 and 29 run on every page, in both themes. Test 27 runs in Chromium, Firefox and WebKit.
  - Verify: `npm run typecheck && npm run lint && npm test && npm run build && npm run e2e && npm outdated`
  - Notes:

- [ ] **T9 — Add the layout check and the mock-up comparison**
  - Refs: spec 6.5 items 1, 5 and 8; plan 7.1 (the layout check), plan 7.2 tests 8 and 12
  - Depends on: T8
  - Done when:
    - Test 8 runs at the ten widths in plan section 7.2, on every page, in both themes. It reports every fault plan section 7.1 lists.
    - Each fault kind has a small fixture page that the check catches, so a check that finds nothing is known to work.
    - Test 12 has a helper that compares a page's content width, title sizes, card radii and grid columns with its mock-up, at 1280 px and 375 px.
  - Verify: `npm run typecheck && npm run lint && npm test && npm run build && npm run e2e`
  - Notes:

## Phase 3 — Pages

Goal: Each page is built from its approved mock-up, with its content, its unique details and the page checks. Each page's pull request has a wording table for the owner (plan section 3.7).
Base branch: release/redesign

- [ ] **T10 — Build the home page title and career strip**
  - Refs: spec 6.1.1 (Introduction), spec 6.1.2, spec 6.1.9 item 1, spec 6.2, spec 6.5 items 5 and 6; plan 3.1 (home), plan 3.6, plan 3.7
  - Depends on: T6, T7, T8, T9
  - Done when:
    - The title draws the target on the centre of the "o" in Bourne, and the arrow lands in it, as in `d-modern-v3.html`. Hovering over the name shoots again.
    - The job title, the summary, the GitHub link and "Message me on LinkedIn" are visible at 375 px with no sideways scroll.
    - The career strip shows each block to scale and links to its part of the Experience page.
    - The page checks pass for this part of the page.
    - The pull request has the wording table.
  - Verify: `npm run typecheck && npm run lint && npm test && npm run build && npm run e2e && npm run lighthouse`
  - Notes:

- [ ] **T11 — Build the home page project cards and their drawings**
  - Refs: spec 6.1.5, spec 6.5 items 4, 6 and 9; plan 3.1 (`components/drawings`), plan 3.5 (drawings, animations), plan 3.6
  - Depends on: T10
  - Done when:
    - The three cards show the JWT Validator checks, the Draughts capture and the Picktime booking, as in `d-modern-v3.html`. Each plays on hover or focus and shows its finished state with reduced motion.
    - The cards in a row share one height, and their titles and tags line up.
    - The drawing components are shared, so the Projects page can use them.
    - Test 17 passes, and the page checks pass for the cards.
  - Verify: `npm run typecheck && npm run lint && npm test && npm run build && npm run e2e && npm run lighthouse`
  - Notes:

- [ ] **T12 — Build the testimonials, the Claude teaser and the closing contact**
  - Refs: spec 4.1 defect 10, spec 6.1.1 (Testimonials), spec 6.1.2 rule 5, spec 6.1.9 item 1; plan 3.2 (testimonials), plan 3.4 (`testimonials.ts`)
  - Depends on: T10
  - Done when:
    - `testimonials.original.ts` holds the six original texts, taken from the git history of `main`, including the owner's fix.
    - `testimonials.ts` holds the six testimonials. Each matches its original, except for the corrections in spec section 6.1.2, rule 5.
    - The testimonials are in the pre-rendered HTML. Nothing loads at run time.
    - The Claude teaser and the closing contact match `d-modern-v3.html`.
    - Test 18 passes, and the page checks pass for the rest of the home page.
    - The pull request has the wording table.
  - Verify: `npm run typecheck && npm run lint && npm test && npm run build && npm run e2e && npm run lighthouse`
  - Notes:

- [ ] **T13 — Build the Experience career timeline and Logistics UK years**
  - Refs: spec 4.1 defects 1 and 2, spec 6.1.3, spec 6.1.3a, spec 6.5 item 6; plan 3.1 (experience), plan 3.3 (`CareerBlock`, `Year`, `YearProject`), plan 3.4 (`experience.ts`), plan 3.5 ("Now" on the timelines)
  - Depends on: T6, T7, T8, T9
  - Done when:
    - The career timeline is drawn to scale, as in `experience.html`. "Now" follows plan section 3.5: the build date in the HTML, the reader's date after hydration.
    - The Logistics UK section has the year tabs, the 2026 chart and the project cards. Without JavaScript, every year shows.
    - The entry names projects in general terms only, as spec section 6.1.3 allows.
    - Tests 15, 16 and 23 pass, and the page checks pass for this part of the page, in every tab state.
    - The pull request has the wording table.
  - Verify: `npm run typecheck && npm run lint && npm test && npm run build && npm run e2e && npm run lighthouse`
  - Notes:

- [ ] **T14 — Build the PageSuite steps, AXA PPP, skills and education**
  - Refs: spec 4.1 defects 2 and 5, spec 6.1.1 (Skills, Education), spec 6.1.3a, spec 6.1.4, spec 6.1.9 item 2; plan 3.3 (`Role`, `Skill`, `Place`), plan 3.4 (`experience.ts`, `skills.ts`, `education.ts`)
  - Depends on: T13
  - Done when:
    - The PageSuite steps show one role at a time, with its dates. Without JavaScript, every role shows.
    - The skill map lights only the places where a skill was used. Only lit places are links.
    - The education section puts the degree, the grade and the university first, with the grade chart.
    - Tests 14 and 24 pass, and the page checks pass for the rest of the page, in every step and skill state.
    - The pull request has the wording table.
  - Verify: `npm run typecheck && npm run lint && npm test && npm run build && npm run e2e && npm run lighthouse`
  - Notes:

- [ ] **T15 — Build the Projects page with the JWT Validator and Draughts Game case studies**
  - Refs: spec 4.1 defects 3 and 6, spec 6.1.5, spec 6.5 item 6; plan 3.1 (projects), plan 3.2, plan 3.3 (`CaseStudy`, `Part`, `Stat`), plan 3.4 (`projects.ts`)
  - Depends on: T11
  - Done when:
    - The project index and the case study layout match `projects-v3.html`: problem, "How it's built", result, technology and links.
    - The JWT Validator and Draughts Game case studies are complete. The Draughts case study has the sentence about the owner's grandad, with the link to the game's About page.
    - Each result number says what was counted and when.
    - The page checks pass for this part of the page.
    - The pull request has the wording table.
  - Verify: `npm run typecheck && npm run lint && npm test && npm run build && npm run e2e && npm run lighthouse`
  - Notes:

- [ ] **T16 — Add the Picktime and Portfolio case studies and the earlier projects**
  - Refs: spec 6.1.5; plan 3.1 (`EarlierProjects`, `PortfolioBuild`, `ExpressionTree`, `VueModal`), plan 3.4 (`projects.ts`, missing content)
  - Depends on: T15
  - Done when:
    - The Picktime Automation and Portfolio case studies are complete, as in `projects-v3.html`, with the Portfolio drawing.
    - The Tree Calculator and Dynamic Vue Modal show as earlier projects, with their drawings.
    - Adding a project needs content only (spec section 6.1.5, item 5). A component test shows it.
    - The page checks pass for the whole page.
    - The pull request has the wording table, and lists each placeholder still waiting for the owner.
  - Verify: `npm run typecheck && npm run lint && npm test && npm run build && npm run e2e && npm run lighthouse`
  - Notes:

- [ ] **T17 — Build the Claude page loop and setup parts**
  - Refs: spec 6.1.6, spec 6.2, spec 6.5 item 6; plan 3.1 (claude), plan 3.3 (`SetupPart`), plan 3.4 (`claude.ts`), plan 3.6 (terminal colours)
  - Depends on: T6, T7, T8, T9
  - Done when:
    - The top of the page has the work loop diagram and a summary of fewer than 100 words, as in `claude.html`.
    - Each setup part shows its decision and its reason, with its drawing.
    - Every extract is marked `approved: false` until the owner approves it.
    - The page checks pass for this part of the page.
    - The pull request has the wording table, and lists each extract for the owner to check.
  - Verify: `npm run typecheck && npm run lint && npm test && npm run build && npm run e2e && npm run lighthouse`
  - Notes:

- [ ] **T18 — Count and add the Claude results**
  - Refs: spec 6.1.6 items 3, 4 and 6; plan 3.4 (how the Claude results are counted), plan 7.2 test 19, plan 8.2
  - Depends on: T17
  - Done when:
    - Each number is counted from the Draughts Game Function repository and GitHub, with the method in plan section 3.4. The pull request shows each count and the command that produced it.
    - The page shows each number with what was counted and when, and a "Last updated" date.
    - Test 19 runs in `npm run release-check`, not in `npm test`. It fails while any extract is unapproved or any placeholder is left.
    - The page checks pass for the whole page.
  - Verify: `npm run typecheck && npm run lint && npm test && npm run build && npm run e2e && npm run lighthouse`, and `npm run release-check` reports each unapproved extract.
  - Notes:

- [ ] **T19 — Build the not-found page**
  - Refs: spec 6.1.7 item 4, spec 6.5 items 5 and 6; plan 3.5 (unknown addresses), plan 3.6
  - Depends on: T10
  - Done when:
    - The page matches `not-found.html`: the 0 of 404 is the target, and the arrow lands in the outer ring, clear of the menu bar and both 4s at every width.
    - After hydration, the page shows the address the reader asked for. It links to the home page and the three other pages.
    - Test 5 passes, and the page checks pass for this page.
  - Verify: `npm run typecheck && npm run lint && npm test && npm run build && npm run e2e && npm run lighthouse`
  - Notes:

- [ ] **T20 — Add the link-preview images**
  - Refs: spec 6.6 (search and sharing); plan 3.5 (link previews)
  - Depends on: T12, T14, T16, T18
  - Done when:
    - `scripts/og-images.mjs` makes one 1200 by 630 PNG for each page. The images are committed.
    - Each page has `og:title`, `og:description`, `og:image` and `og:url`, with full addresses.
    - Test 1 passes in full.
  - Verify: `node scripts/og-images.mjs && npm run build && npm run e2e && npm run lighthouse`
  - Notes:

## Phase 4 — Release check

Goal: The release branch is complete, current and signed off by the owner.
Base branch: release/redesign

- [ ] **T21 — Check the release**
  - Refs: spec 6.1.2 rule 4, spec 6.1.5 items 2 and 5, spec 6.1.6 items 3, 5 and 6, spec 6.1.8 item 7, spec 6.5 item 7, spec 9; plan 3.7, plan 6, plan 8.2, plan 8.4 steps 1 and 2
  - Depends on: T4, T5, T19, T20
  - Done when:
    - Every package is on its current version, apart from TypeScript (plan 3.5), and `npm audit` finds no high or critical vulnerability.
    - The owner has signed off the look and the wording of every page, approved every extract, approved the case-study results and the Claude numbers with how each was counted, and confirmed that no page holds confidential employer information.
    - `npm run release-check` passes: tests 19 and 21. LinkedIn is checked by hand.
    - The README matches the finished site.
    - The `e2e:live` script runs test 22 against the live address, ready for T22.
    - Every test in plan section 7.2, except 22, passes on the release branch.
  - Verify: `npm ci && npm run typecheck && npm run lint && npm run format:check && npm run spell && npm test && npm run build && npm run e2e && npm run lighthouse && npm run release-check && npm outdated`
  - Notes:

## Phase 5 — Release

Goal: The new site is live, and the old deployment is gone.

- [ ] **T22 — Release the new site**
  - Refs: spec 6.1.7 item 5, spec 6.1.8 item 5, spec 6.2, spec 9; plan 8.4 steps 3 to 5
  - Depends on: T21
  - Done when:
    - The owner has changed the Pages source to "GitHub Actions", and the release pull request has merged straight after, as plan section 8.4 says.
    - `release-check` passed on the release pull request, and `deploy.yml` has published the site.
    - Test 22 passes against the live site.
  - Verify: `npm run e2e:live` (test 22)
  - Notes: This task's pull request is the release pull request itself, from `release/redesign` into `main`. Test 22 can pass only after the merge, so a small follow-up pull request into `main` ticks the task.

- [ ] **T23 — Remove the old deployment**
  - Refs: spec 4.1 defect 8, spec 6.1.8 item 6; plan 6 (deployment, dependencies), plan 8.4 step 6
  - Depends on: T22, and a few days with no problem on the live site
  - Done when:
    - With the owner's approval, the `gh-pages` branch is deleted.
    - The owner has deleted the old `TOKEN`, `USERNAME` and `EMAIL` repository secrets, and turned on Dependabot security updates and grouped security updates.
    - Dependabot opened no pull request into `main` before the release merged.
    - The live site still works.
  - Verify: `git ls-remote --heads origin gh-pages` prints nothing, `gh secret list` shows none of the three secrets, `gh api repos/OllieRumbol/portfolio/automated-security-fixes` shows `enabled: true`, `gh pr list --author app/dependabot --state all` shows no pull request created before the release merge, and `npm run e2e:live` passes.
  - Notes:

---

## Blocked

- Phase 1 waits for `release/redesign`, which is created from `main` after the pull request for this file merges.
