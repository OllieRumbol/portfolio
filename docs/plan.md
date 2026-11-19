# Portfolio Redesign — Plan

> **What this document is for:** It answers *how will we build it?* It turns the approved requirements in spec.md into a design, and it is agreed before any code is written.

Status: Approved (2026-11-18). Review fixes approved with the tasks on 2026-11-19.
Last updated: 2026-11-19

---

## 1. Approach

The site is rebuilt from scratch as a React and TypeScript app that is **pre-rendered at build time into one static HTML file for each page**. GitHub Pages serves those files, with no server (spec section 3, non-goals, and section 5.1). Each page is complete HTML before any script runs, so it has its own address, title and link preview (spec section 6.1.7, item 1), and its text is readable when JavaScript fails (spec section 6.7). React then takes over in the browser for the interactive details (spec section 6.5, item 6). All content lives in typed data files, so adding a project or a role needs content only (spec section 6.1.5, item 5).

The look is the approved design: the four linked page mock-ups and the not-found page mock-up in `docs/design/mockups/` (spec section 6.5, item 5). The work is built on a release branch and goes live in one release, so the current site stays as it is until the new one is complete.

### 1.1 Options considered

**How the pages are built**

| Option | Pros | Cons |
| --- | --- | --- |
| A. React Router 8 framework mode, with `ssr: false` and `prerender` | One HTML file per page at build time, on Vite. Real addresses with their own previews. Keeps React Router, which the owner's other sites use. No server. | Newer than plain Vite. GitHub Pages must serve each page from its own folder, which is proved before any page is built (risk 2). |
| B. Next.js with static export | Mature pre-rendering. Matches "server rendering, SEO" in the owner's React rules. | A second framework for the owner's sites. Heavier than the site needs. Its server features are unused on GitHub Pages. |
| C. Vite single-page app with hash addresses, as on the JWT Validator site | Simplest. Matches the JWT Validator site exactly. | Fails the spec: one shared link preview for every page (spec section 6.1.7, item 1), and nothing readable without JavaScript (spec section 6.7). The JWT Validator decision record accepted those limits as non-goals. This spec does not. |
| D. Hand-written HTML, as in the mock-ups | No build tool. The mock-ups already work. | Repeated markup on four pages, no components and no type checking. The owner's React rules ask for React and TypeScript for new frontend work. |

Chosen: **A**. It is the smallest step from the owner's existing Vite and React Router setup that meets spec sections 6.1.7 and 6.7. React Router's documentation says `ssr: false` with `prerender` writes `build/client/<path>/index.html` for each listed path (checked on 2026-11-18, reactrouter.com, "Pre-Rendering"). Its configuration reference says only that `basename` is the app's basename, with `/` as the default. It does not say that `basename` also sets the address of the built scripts and styles. So Vite's `base` is set as well, as on the JWT Validator site (section 2), and the proof in risk 2 checks that every file loads under `/portfolio/`. A decision record is written for it (section 3.5).

**How the work reaches the live site**

| Option | Pros | Cons |
| --- | --- | --- |
| A. A release branch, `release/redesign`. Tasks merge into it. One merge to `main` releases the site. | The live site never shows half a redesign. Each task still has its own pull request and checks. | A long-lived branch. |
| B. Tasks merge straight to `main` | Simpler branching. | Each merge deploys (spec section 6.1.8, item 5), so the live site would change piece by piece. |

Chosen: **A**, as the owner's GitHub rules allow for a phase released as one piece.

---

## 2. Configuration

The site has no runtime configuration and **no secrets**: nothing is fetched at run time, and the deployment uses GitHub's own Pages identity, not a token (spec section 6.1.8, item 6).

| Setting | Value | Where | Notes |
| --- | --- | --- | --- |
| `basename` | `/portfolio/` | `react-router.config.ts` | The site is served under this path (spec section 5.1). |
| `base` | `/portfolio/` | `vite.config.ts` | The address of the built scripts, styles and fonts. As on the JWT Validator site. |
| `ssr` | `false` | `react-router.config.ts` | No server. Pages are pre-rendered. |
| `prerender` | `/`, `/experience`, `/projects`, `/claude`, `/404` | `react-router.config.ts` | One HTML file for each page. `/404` matches the catch-all route and becomes `404.html` (section 3.5). |
| `appDirectory` | `src` | `react-router.config.ts` | Keeps the owner's React folder structure (section 3.1). |
| Site address | `https://ollierumbol.github.io/portfolio/` | `src/content/site.ts` | Used for link-preview tags, which need full addresses. |
| Node version | `26` | `.nvmrc` | The same as the JWT Validator site and the Draughts web app. The owner's machine has 24.19, so risk 1 in section 9 applies. |
| Content dates | for example `2026-11-18` | `src/content/*.ts` | "Last updated" and "counted on" dates are content, set by hand when the content changes (spec section 6.1.6, item 4). |
| Theme choice | `"light"` or `"dark"` | The reader's browser storage, key `theme` | Remembers the reader's choice on that device (spec section 6.5, item 3). Not a secret, and no personal data. |

---

## 3. Architecture

### 3.1 Components

The folders follow the owner's React rules, with the app in `src/`.

```
src/
  root.tsx                    The HTML shell: head tags, fonts, theme script, top bar, footer
  routes.ts                   Every route, in one place
  pages/
    home/                     HomePage, Bullseye, CareerStrip, ClaudeTeaser, Testimonials
    experience/               ExperiencePage, CareerTimeline, YearView, YearChart, RoleSteps, SkillMap, GradeChart
    projects/                 ProjectsPage, ProjectIndex, CaseStudy, HowItsBuilt, EarlierProjects
    claude/                   ClaudePage, WorkLoop, SetupPart, ResultsGrid
    not-found/                NotFoundPage
  components/
    site/                     TopBar, ThemeToggle, Footer, ContactCta
    drawings/                 JwtChecks, DraughtsCapture, PicktimeBooking, PortfolioBuild, ExpressionTree, VueModal, BullseyeTarget
    ui/                       Card, Tag, Stat, Chip, Section
  content/                    Typed content: site, profile, experience, projects, skills, education, testimonials, claude
  lib/                        Plain functions: dates and months, timeline layout, skill places, draughts rules check, theme
  hooks/                      usePlayOnView, useReducedMotion, useTheme
  styles/                     tokens.css, base.css
  types/                      Shared content types
scripts/
  og-images.mjs               Renders one link-preview image per page (section 3.5)
  serve-pages.mjs             Serves build/client at /portfolio/ with GitHub Pages' rules, for Playwright (section 7.1)
e2e/                          Playwright tests: pages, links, layout, accessibility, release checks
```

Each component keeps its styles next to it in a CSS module, for example `RoleSteps.module.css`. Only `styles/tokens.css` and `styles/base.css` are global. Imports from `src` use the `@/` path alias, as on the JWT Validator site.

### 3.2 Existing code to follow or reuse

* `docs/design/mockups/d-modern-v3.html`, `experience.html`, `projects-v3.html` and `claude.html`: the approved design. Their CSS and scripts are the reference for each component's look and behaviour. Each component is built against its mock-up and measured against it (section 7.2, test 12).
* `docs/design/mockups/not-found.html`: the approved not-found page. It is not linked from the other mock-ups, because the site never links to it.
* `docs/design/mockups/projects.html` and `projects-v2.html`: superseded by `projects-v3.html`. Not built from.
* `docs/design/mockups/hero-options.html`: not used. It is a record of the title options.
* The mock-ups' external links have no `target`. The pages follow spec section 6.1.7, item 3, not the mock-ups (section 6, external links).
* The JWT Validator site, the `OllieRumbol/JWTValidator` repository: copy its `deploy.yml` workflow, `.nvmrc`, ESLint and Prettier setup, `typecheck` script, and its Playwright with axe accessibility tests. Its `scripts/check-size.mjs` shows how it checks bundle size.
* `public/testimonials/*.html` and `src/assets/Testimonials.json`: the six testimonials, with the owner's fix to `testimonial2.html` committed on `main` (spec section 8, assumption 7). The text moves into `src/content/testimonials.ts`, with only the corrections in spec section 6.1.2, rule 5. The original six texts are saved from the git history as a test fixture, `src/content/testimonials.original.ts`, which test 18 compares against.
* The old `src/` and `public/` folders are deleted once their content has moved. No old component is reused: the redesign replaces all of them (spec section 3, goal 1).

### 3.3 Interfaces and contracts

The content types. Components read only these, so the content can change without code changes.

```ts
// src/types/content.ts

export type Link = { label: string; href: string };

export type Place =
  | "Logistics UK" | "PageSuite" | "AXA PPP" | "University of Kent"
  | "JWT Validator" | "Draughts Game" | "Picktime Automation"
  | "Portfolio" | "Tree Calculator" | "Dynamic Vue Modal";

export type Skill = {
  name: string;
  group: "Languages" | "Libraries and frameworks" | "Automated testing"
       | "Cloud and deployment" | "Data and architecture" | "Tools";
  usedAt: Place[];              // empty: shown dashed, not clickable, as in the skill map in experience.html
};

export type Month = `${number}-${"01"|"02"|"03"|"04"|"05"|"06"|"07"|"08"|"09"|"10"|"11"|"12"}`;

export type CareerBlock = {
  title: string; place: string; start: Month; end: Month | "now";
  kind: "work" | "study" | "now"; anchor: string;
};

export type Role = { title: string; shortTitle: string; start: Month; end: Month; text: string };

export type YearProject = {
  name: string; text: string; note?: string;
  months?: { start: number; end: number; ongoing?: boolean; phases?: number };  // 2026 chart only, approximate
};

export type Year = { year: "2026" | "2025" | "2024" | "earlier"; heading: string; aside: string; projects: YearProject[] };

export type CaseStudy = {
  id: "jwt" | "draughts" | "picktime" | "portfolio";
  name: string; kicker: string; summary: string;
  problem: string; note?: string;              // the Draughts sentence about the owner's grandad (spec section 6.1.5)
  parts: [Part, Part];                         // "How it's built": two parts and the two lanes between them
  lanes: { request: string; response: string };
  also?: string;
  results: Stat[]; countedOn: string;          // up to four numbers (spec section 6.1.5, item 2)
  technology: string[]; links: Link[];
  drawing: "jwt" | "draughts" | "picktime" | "portfolio";
};

export type Part = { title: string; text: string; tags: string[]; where?: string; inner?: { title: string; text?: string; steps?: string[] } };

export type Stat = { value: string; label: string };

export type SetupPart = {
  title: string; meta: string; origin?: string;
  decision: string; reason: string;
  drawing?: "trim" | "rules" | "flow-planning" | "flow-task" | "sees" | "terminal" | "retros" | "plugins" | "budgets";
  extract?: { text: string; source: string; approved: boolean };   // spec section 6.1.6, item 6
};

export type Testimonial = { name: string; role: string; company: string; paragraphs: string[]; pullQuote: string };
```

Component props are typed with a `type` and take content objects, for example `type CaseStudyProps = { study: CaseStudy }`.

### 3.4 Data model

There is no database. All content is in `src/content/`, as typed constants, checked by the TypeScript compiler and by content tests (section 7.2, tests 14 to 18) and the release check (test 19).

| File | Holds | Source |
| --- | --- | --- |
| `site.ts` | Site address, page titles and descriptions, LinkedIn and GitHub addresses | Spec section 5.2 |
| `profile.ts` | Name, job title, summary | Spec sections 6.1.1 and 6.1.2 |
| `experience.ts` | Career blocks, Logistics UK years and projects, PageSuite roles, AXA PPP teams | Spec sections 6.1.3 and 6.1.3a, and the old About page |
| `skills.ts` | Skills, groups, where each was used | Spec section 6.1.4, and the skill map in the approved design |
| `education.ts` | Degree, grades by year, modules, school | The old About page |
| `projects.ts` | Four case studies and two earlier projects | Spec section 6.1.5 and each project's repository |
| `claude.ts` | Summary, loop steps, setup parts, extracts, results, dates | Spec section 6.1.6, the owner's setup and the Draughts Game Function |
| `testimonials.ts` | Six testimonials | The old testimonial files, with spec section 6.1.2, rule 5 |

**Missing content.** Content that the owner has not supplied yet is written as `[PLACEHOLDER: what is missing]`. The page shows it as it is, so it is visible in a draft (spec section 6.1.2, rule 4). A release check fails while any placeholder is left (section 7.2, test 19).

**How the Claude results are counted**, so they can be counted again later (spec section 6.1.6, item 3). From the Draughts Game Function repository and GitHub, on the date shown on the page:

1. **Tasks:** the ticked tasks in `docs/tasks.md` on `master`.
2. **Pull requests:** pull requests merged since 2026-10-01. This leaves out #1 to #9, merged in 2021 and 2022 (checked on 2026-11-19).
3. **Review findings:** the rows of every table with a "Finding" and an "Outcome" column under a "Reviews" heading, in those pull requests. "Fixed" when the outcome starts with "Fixed", otherwise declined with a reason.
4. **Mutation probes:** the rows of the "Mutation probes" tables.
5. **Tests:** the "passed" count in the last merged pull request.
6. **Direct pushes:** non-merge commits on `master`'s first-parent history since 2026-10-01. It must be 0. One direct push from 2021 is before that date, and is not counted.

### 3.5 Key decisions

| Decision | Choice | Why | Alternatives rejected |
| --- | --- | --- | --- |
| Build and routing | React Router 8 framework mode, `ssr: false`, `prerender` | Section 1.1. | Section 1.1. **An ADR records this:** `docs/adr/0001-pre-rendered-pages-on-github-pages.md`. |
| Page addresses | `/portfolio/`, `/portfolio/experience/`, `/portfolio/projects/`, `/portfolio/claude/` | Real addresses, each with its own HTML file, so each has its own preview (spec section 6.1.7, item 1). | Hash addresses (section 1.1, option C). |
| Old addresses | A small script in the home page's HTML reads the old `#/` address and moves the reader: `#/aboutMe` to Experience, `#/projects` to Projects, and `#/articles`, `#/cv` and anything else to the home page | The old site used hash addresses, which always load the home page's file. The browser never sends the part after `#` to the server, so only a script can redirect it (spec section 6.1.7, item 5). | A `404.html` redirect: it cannot see the `#` part either. |
| Unknown addresses | A catch-all route renders the "Page not found" page. It is pre-rendered at `/404` and copied to `404.html` in the build output, with a link home. In the browser, any unknown address matches the same catch-all route, so the page hydrates with no mismatch. The address the reader asked for is shown only after hydration. | GitHub Pages serves a site's `404.html` for an unknown address (spec section 6.1.7, item 4). This is proved under `/portfolio/` before any page is built (risk 2). | A blank page. |
| "Now" on the timelines | The pre-rendered HTML places "Now" at the build date. After hydration, an effect moves it to the reader's date. The date is passed into the timeline functions, so tests can set it. | The site deploys only on a merge (spec section 6.1.8, item 5), so a build can stay live for months. Calculating the date during rendering would show the build date for that time. Calculating it during the first browser render would not match the pre-rendered HTML. | A scheduled rebuild: a workflow that deploys on a timer is a second deploy event, which spec section 6.1.8, item 5 does not allow. |
| Printing | A print stylesheet in `base.css`: light theme colours, no top bar and no theme toggle, every tab panel shown, no animation, and link addresses shown after external links. | Spec section 6.7: a reader can print a page or save it as a PDF. | No print styles, which would print the dark theme and hide panels. |
| Styling | CSS modules next to each component, with design tokens as CSS variables in `tokens.css` | Scoped styles. The mock-ups showed what happens without them: a shared `nav` style and three shared class names broke layouts in places nobody was looking. | One global stylesheet, as in the mock-ups. A UI library: none matches the approved design. |
| Fonts | Geist and Geist Mono, self-hosted with `@fontsource` packages, only the weights the mock-ups use: Geist 400, 500, 600 and 700, Geist Mono 400 and 500 | Same fonts as the approved design. Self-hosting avoids a request to Google, which helps privacy (spec section 6.6) and speed. | Google Fonts, as in the mock-ups. |
| Theme | An inline script in `<head>` sets `data-theme` before the page paints, from the stored choice or the device setting. The toggle stores the choice. | No flash of the wrong theme. The choice is remembered (spec section 6.5, item 3). If storage is blocked, it falls back to the device setting. | Setting the theme after React loads, which flashes. |
| Animations | CSS animations, started by a `play` class that `usePlayOnView` adds when the element is on screen | Without JavaScript, or with reduced motion, every drawing shows its finished state, so no content is hidden (spec sections 6.5 items 9 and 10, and 6.7). | Animation libraries: not needed for this. |
| Interactive details without JavaScript | The pre-rendered HTML shows every year, every PageSuite role and every panel. Only when the script runs does it switch to one-at-a-time tabs. | Spec section 6.7: the text and links must be there without JavaScript. | Hiding panels in the HTML. |
| Drawings | Inline SVG and HTML in components, no images | They animate, follow the theme and stay sharp. They are the "unique details" (spec section 6.5, item 6). | Screenshots or image files. |
| Link previews | Each page sets its own `title`, `description`, `og:title`, `og:description`, `og:image` and `og:url` through its route's `meta` export. One preview image per page, 1200 by 630 PNG, made by `scripts/og-images.mjs` with Playwright from a simple template, and committed. | Spec section 6.6, "search and sharing". The images change only when a page's purpose changes, so they are made by hand with a script, not in every build. | One image for every page. |
| Content | Typed data files in `src/content/` | Adding a project, a role or a skill needs content only (spec section 6.1.5, item 5). Testimonials no longer load at run time (spec section 4.1, defect 10). | Content written into components. |
| CV | No CV file or link at release | Spec section 6.1.7, item 2. The `ContactCta` component has a place for a CV link, so adding it later is one link and one file. | — |
| Analytics | None | Spec section 6.6, privacy. | — |
| Root files | `LICENSE` with the MIT licence, and a line in `README.md` saying it covers the code only. The text, testimonials and design stay all rights reserved. A short `SECURITY.md` says how to report a problem. A short `CONTRIBUTING.md` says this is a personal site and not open to contributions. Owner chose this on 2026-11-18. | The owner's layout rule asks for these three files in a public repository. An open licence for everything would let anyone reuse the owner's words and other people's testimonials. | No licence, which keeps everything all rights reserved but is not open source. Leaving out all three files, as the JWT Validator site does for two of them. |
| TypeScript | 6.0.x, `strict` | `typescript-eslint` 8.73 supports TypeScript only below 6.1 (its `peerDependencies`, checked on 2026-11-18). TypeScript 7.0 is the current release. | TypeScript 7. |
| Light theme badge green | A new token, `--green-on-soft`, `#147a3a`, for green text on the pale green badge background in light theme only. The owner approved this on 2026-11-18 (spec section 6.5, item 2). | The approved green, `#15803d`, on `#e3f3e8` has a contrast ratio of 4.36, under the 4.5 that WCAG AA needs for small text (spec section 6.6). `#147a3a` gives 4.71 and looks almost the same. | Making the badge text bigger, which changes the design. |

### 3.6 Design direction

| Item | Choice |
| --- | --- |
| References | The four approved page mock-ups and the not-found page mock-up in `docs/design/mockups/` (spec section 6.5, item 5). The owner rejected three earlier directions as basic and untidy. |
| Character | Modern, clean, smart and unique (spec section 6.5, item 1). |
| Signature | Small, accurate, interactive details that come from something real (spec section 6.5, item 6). For each page: **home**, the arrow that lands in the "o" of Bourne and the three project drawings; **Experience**, the career drawn to scale, the 2026 chart, the PageSuite steps, the skill map and the grade chart; **Projects**, the drawings that play on screen and the "How it's built" diagrams; **Claude**, the work loop, the rule that lights for a file, the build hook terminal and the counted results; **not found**, the 0 of 404 drawn as the home page's target, with the arrow landing in the outer ring. |
| Type | Geist for everything, Geist Mono for code, tokens and file names. Sizes from the mock-ups: page titles `clamp(3rem, 9vw, 6.5rem)`, section titles `clamp(1.9rem, 3.6vw, 2.9rem)`, body 1rem with line height 1.6, small labels 0.8 to 0.9rem. |
| Colour | **Light:** background `#f4f6f3`, surface `#ffffff`, raised `#f4f6f3`, line `#e2e6e1`, ink `#0c1410`, muted `#5a665f`, green `#15803d`, pale green `#e3f3e8`, on-green `#ffffff`, green on pale green `#147a3a`. **Dark:** background `#090c0a`, surface `#111512`, raised `#171c18`, line `#232a25`, ink `#eef3ef`, muted `#98a59d`, green `#4ade80`, pale green `#12301f`, on-green `#06240f`. **Both themes also have** the glow, the card shadow and the two draughts board squares, with the values in `d-modern-v3.html`: light board `#15803d` and `#e3f3e8`, dark board `#1c6b3c` and `#1b231e`. **The build hook terminal** on the Claude page is drawn as a terminal in both themes: background `#0b100d`, text `#cfe8d7`, success `#6ee7a0` and error `#ff8f8f`, as in `claude.html`. The red marks the failed build line in that drawing only. It is a terminal's error colour, not an accent. Green is the only accent. Every colour is a token in `tokens.css`, and every text pair meets WCAG AA (section 7.2, test 10). |
| Shape and space | Content width 1136 px with 20 px side padding. Radii: 24 px for large cards, 18 to 22 px for cards, 10 to 14 px for buttons, chips and badges. Buttons never wrap. Short labels never wrap. Rows of cards share one height. |
| Motion | Only where it shows something real: the arrow, the project drawings, the work loop, the timeline and chart bars, the grade bars, the theme icon. Each plays once when on screen, or on hover or focus. None with reduced motion (spec section 6.5, item 9). |
| Avoid | The JWT Validator site's layout of a headline on the left and a card on the right. Staggered rows. Decoration with no job. Long blocks of text, such as the "Key decisions" forks the owner removed. |
| Content | Spec sections 6.1.2 to 6.1.9 and the content files in section 3.4. The wording in the mock-ups is a draft. The final wording is written in the content files and reviewed by the owner (section 3.7). |

### 3.7 How the wording is done

Spec section 6.1.2 lets the owner's text be rewritten, keeps facts and testimonials, and needs the owner's review.

1. Each page's content file is written from the spec and the mock-up's draft wording.
2. Before the reviews, every new or changed sentence is checked for spelling, grammar, unclear words and claims that cannot be checked.
3. The pull request lists each sentence that changed in meaning or that the owner has not seen, as a before and after table, for the owner to approve.
4. Every quoted extract on the Claude page is marked `approved: false` until the owner approves it. The release checks fail while any extract is unapproved (section 7.2, test 19, and section 8.2).
5. A spell check with British English runs in CI (section 7.2, test 20).

---

## 4. Error handling

The site makes no network calls at run time, so most failure kinds do not apply. These are the situations a reader can meet.

| Situation | Behaviour |
| --- | --- |
| JavaScript fails or is turned off | Every page shows all its text, links and finished drawings from the pre-rendered HTML. Tabs show every panel. Only the interactions are lost (spec section 6.7). |
| Fonts fail to load | The system font stack is used: `system-ui` and `ui-monospace`. Layout still fits, because widths do not depend on Geist. |
| Browser storage is blocked or throws | The theme follows the device setting, and the toggle still works for that visit. |
| `IntersectionObserver` is missing | Drawings show their finished state at once. |
| Reduced motion is on | No animations. Drawings show their finished state. |
| Old `#/` address | Redirected as section 3.5 says. |
| Unknown address | The "Page not found" page from `404.html`, with a link home. |
| An external site is down | Not the portfolio's concern. External links open in a new tab (spec section 6.1.7, item 3). |
| A link into the Draughts web app changes in its rebuild | Found by the release link check (section 7.2, test 21), as spec section 6.1.5 requires. |

---

## 5. Observability

There is nothing to observe at run time: no server and no analytics (spec section 6.6). Whether the site works is shown by:

* **CI on every pull request:** the result of each check, a Playwright report and a Lighthouse report, kept as workflow artifacts.
* **The deploy workflow:** its run shows the deployed address. A failed deploy leaves the previous version live.
* **After each release:** test 22 opens every live address and checks the status and the preview tags (section 7.2).

---

## 6. Security

| Item | Decision |
| --- | --- |
| Secrets | None. The site has no secret, and no setting is secret (section 2). |
| Deployment | GitHub's Pages actions with the job's own identity: `pages: write` and `id-token: write`, on the deploy job only. No personal access token (spec section 6.1.8, item 6). The old `TOKEN`, `USERNAME` and `EMAIL` repository secrets are deleted after the release. The owner does that in the repository settings. |
| Workflows | First-party actions only, at their current major version, as in the JWT Validator site. `contents: read` by default. `persist-credentials: false` on checkout. |
| Personal data | None collected. No cookies, no analytics, no forms. The only contact route is a link to LinkedIn (spec section 6.1.9, item 1). No email address or phone number on the site. |
| Confidential content | Only the facts in the spec, which the owner approved for publishing. Logistics UK projects are named and described in general terms only (spec section 6.1.3). The owner checks every page before release (spec section 6.1.6, item 5). |
| External links | Open in a new tab with `rel="noopener noreferrer"`. |
| Untrusted HTML | None. All content is typed text in the repository. No `dangerouslySetInnerHTML`. |
| Dependencies | `npm audit --audit-level=high` runs in CI and fails the build on a high or critical finding (spec section 6.1.8, item 7). When a package is added or upgraded, `npm outdated` lists no direct dependency, apart from TypeScript (section 3.5). All packages are brought up to date again before the release. Dependabot security updates open a pull request when a package in use has a known vulnerability. No version updates and no `dependabot.yml`. Owner chose this on 2026-11-18. On 2026-11-18, Dependabot alerts and security updates were both off. The owner turns alerts on during the foundation work, and security updates on after the release: until then, `main` holds the old app, and its security pull requests could never pass the required checks. Both are checked with `gh api` (`vulnerability-alerts` and `automated-security-fixes`). |
| Content Security Policy | Not set at release. The JWT Validator site sets one as a `<meta>` tag with `script-src 'self'`. That policy would block this site's inline scripts: the theme script, the old-address script and the data script that React Router writes into each pre-rendered page. Allowing them needs a hash for each script on each page. The site takes no input and loads nothing from other origins, so the risk is low. Accepted as a gap, to revisit after the release. Owner chose this on 2026-11-18. |

---

## 7. Testing

### 7.1 Principles

* **Vitest, React Testing Library and `user-event`** for plain functions and components, as the owner's React rules set out. Components are found by role and accessible name.
* **Playwright** for the built site, served from `build/client` at `/portfolio/` by `scripts/serve-pages.mjs`. It is a small Node script with no dependency that copies GitHub Pages' rules: a folder serves its `index.html`, an address without its trailing slash redirects to the folder, and an unknown address serves `404.html` with status 404. `vite preview` does not do this. **`@axe-core/playwright`** for accessibility, as on the JWT Validator site.
* **Browsers:** the full suite runs in Chromium, which covers Chrome and Edge. Test 27 runs in Firefox and WebKit, which stands for Safari (spec section 6.6).
* **Spell check:** `cspell` with the `@cspell/dict-en-gb` dictionary, run through npm.
* **Lighthouse CI** for the performance score.
* **The layout check** is written new as a Playwright test, with the method used in the design work. The design work's script was not kept in the repository. It walks every element and reports overlapping neighbours, text that overflows its box, rows of cards with different heights, wrapped buttons and short labels, a missing side margin, and sideways scroll. It runs at the ten widths in test 8 and in every tab state.
* Content is tested as data: the files are checked against the facts the spec records.
* What is not tested automatically: whether a sentence sounds like the owner, and whether the look is right. The owner signs these off (spec section 6.5, item 7).

### 7.2 Tests

| # | Test | Spec | Defect it catches |
| --- | --- | --- | --- |
| 1 | Each of the four pages is its own HTML file, returns status 200 at its address, and has its own `title`, `description` and Open Graph tags with a full image address | 6.1.7 item 1, 6.6 | A page that shares the home page's preview, or a missing page |
| 2 | With JavaScript turned off, each page shows its headings, every project, every year's projects, every PageSuite role and every link | 6.7, 6.5 item 10 | Content that only appears after the script runs |
| 3 | Every internal link on every page leads to a page or section that exists | 6.1.7 items 1 and 4 | A broken link between pages |
| 4 | Old addresses: `#/aboutMe` opens Experience, `#/projects` opens Projects, `#/articles`, `#/cv` and an unknown `#/` address open the home page | 6.1.7 item 5, 6.2 | A blank page for an old shared link |
| 5 | An unknown address under `/portfolio/` shows "Page not found" with a link home | 6.1.7 item 4 | A blank or default GitHub page |
| 6 | The theme follows the device setting on the first visit. The toggle switches it, changes the icon and label, and the choice holds on the next page and after a reload. No flash of the other theme. | 6.5 item 3 | A forgotten choice, a flash, or the wrong icon |
| 7 | With reduced motion, no element is animating, and every drawing shows its finished state | 6.5 item 9 | Motion for a reader who turned it off |
| 8 | The layout check, at 360, 375, 600, 760, 840, 900, 1024, 1100, 1280 and 1600 px, on every page, in both themes and in every tab state | 6.5 items 1 and 8 | Overlaps, overflowing text, squashed buttons, uneven rows, a missing side margin, sideways scroll |
| 9 | axe finds no serious or critical issue on any page, in either theme | 6.6 accessibility | Missing labels, wrong roles, heading order, contrast |
| 10 | Every text and background pair in `tokens.css` has a contrast ratio of at least 4.5, in both themes. The pairs are listed in the test: ink and muted on background, surface and raised; green on background and surface; green on pale green (light theme: `--green-on-soft`); ink and muted on pale green; on-green on green; and the terminal colours on the terminal background. | 6.6, 6.5 item 2 | A colour change that drops below AA |
| 11 | Keyboard only: every link, tab, step, skill and toggle can be reached and used, and focus is visible | 6.6 accessibility | Interactions that need a mouse |
| 12 | Each page's main measurements match its mock-up at 1280 px and 375 px: content width, title sizes, card radii and the grid columns | 6.5 item 5 | Drift from the approved design |
| 13 | Lighthouse, mobile profile, performance at least 90, on each page. **Measured as the median of 3 runs** on the production build served locally, in CI on every pull request. | 6.6 performance | A heavy font, image or script |
| 14 | Content: every place in the skill map exists. Every skill in the spec's list is present once. No skill from the removed list appears. | 6.1.4 | A skill linked to the wrong place, or a removed skill |
| 15 | Content: the career blocks and PageSuite roles have the spec's dates, in order, with no gap or overlap, and the roles add up to June 2020 to March 2023 | 6.1.3a | A wrong or overlapping date |
| 16 | Content: the 2026 projects have the approved approximate months, and the Logistics UK years match spec section 6.1.3 | 6.1.3 | A project in the wrong year or months |
| 17 | Content: the Draughts card position is legal under the house rules: pieces on dark squares, light pieces at the bottom moving up, a light man jumping a dark man to an empty square | 6.5 item 6, 6.1.5 | An illegal move, as the first mock-up had |
| 18 | Content: each testimonial matches its original text in `testimonials.original.ts` exactly, apart from the corrections in spec section 6.1.2, rule 5 | 6.1.2 rule 5 | An unapproved change to someone else's words |
| 19 | Release check: no Claude extract is unapproved, no `[PLACEHOLDER` is left in the content, and the Claude page shows a "Last updated" date. Runs in `npm run release-check`, not in `npm test` (section 8.2). | 6.1.2 rule 4, 6.1.6 items 4 and 6 | Publishing an extract the owner has not approved, or a placeholder |
| 20 | Spell check, British English, on the content files | 6.1.2 rule 3 | American spelling or a typo |
| 21 | Release check: every external link responds. Runs in `npm run release-check`. LinkedIn is checked by hand, because it blocks automated requests. | 6.1.5, 5.2 | A dead link, or a Draughts link that moved in its rebuild |
| 22 | After release: each live address returns 200 with its own preview tags, and the old live address `#/projects` still works | 6.1.8 item 5, 6.1.7 | A deploy that does not match the build |
| 23 | Unit: the timeline functions place each month to scale inside its block, place "Now" at the date passed in, and never let two labels touch. Component: after hydration, "Now" moves from the build date to the reader's date. | 6.5 item 6 | A year mark in the wrong place, as in the first Experience mock-up, or a "Now" stuck at the build date |
| 24 | Component: choosing a skill lights only its places, and only lit places are links that can be focused | 6.1.4 | A link to a place where the skill was not used |
| 25 | No Articles, Certification or CV content or route exists | 6.1.1, 6.1.7 item 2 | Removed content coming back |
| 26 | `npm audit --audit-level=high` passes | 6.1.8 item 7 | A known high or critical vulnerability |
| 27 | In Firefox and WebKit as well as Chromium: each page loads with no console error, and tests 1 to 6 pass | 6.6 browsers | A page that breaks in Safari or Firefox |
| 28 | On every page, no cookie is set, and no request goes to another origin | 6.6 privacy | A tracker, or a font or script loaded from another site |
| 29 | Every external link opens in a new tab with `rel="noopener noreferrer"`. No internal link does. | 6.1.7 item 3 | A link copied from the mock-ups without a new tab |
| 30 | Print: with print media, each page has no top bar, shows every tab panel in light theme colours, and nothing overflows the page width | 6.7 | A page that prints dark, or with hidden panels |

---

## 8. Infrastructure and deployment

### 8.1 Hosting and cost

| Resource | Plan | Free allowance | Expected use |
| --- | --- | --- | --- |
| GitHub Pages | Free, public repository | Included for public repositories | One site of a few hundred kilobytes |
| GitHub Actions | Standard GitHub-hosted runners | Free for public repositories: "Standard GitHub-hosted runners in public repositories" (GitHub's Actions billing page, checked on 2026-11-18) | A few runs a day while the work is in progress |

No Azure resource is used. The total cost is zero (spec section 6.6).

### 8.2 Workflows

| Workflow | Runs on | Jobs |
| --- | --- | --- |
| `ci.yml` | Every pull request into `main` or `release/**`, and every push to them | `checks`: type check, lint, format check, spell check, unit and component tests, build, `npm audit`. `e2e`: Playwright with axe and the layout check. `lighthouse`: test 13. `release-check`: tests 19 and 21, only on pull requests into `main`. Job names stay stable, because the rulesets require them. The ruleset for `main` requires all four. The ruleset for `release/**` requires the first three, so unapproved extracts and placeholders do not block the tasks. |
| `deploy.yml` | Push to `main` only | `build`, then `deploy` with `actions/upload-pages-artifact` and `actions/deploy-pages`, copied from the JWT Validator site. No manual trigger, as spec section 6.1.8, item 5 requires. |

The old `main_deploy.yml` is deleted before any new code is built. It already fails on every run, because its token no longer works, and it is the only thing that pushes to the `gh-pages` branch. The live site keeps serving the old `gh-pages` content until the release.

The npm scripts the checks use: `typecheck`, `lint`, `format:check`, `spell`, `test`, `build`, `e2e`, `lighthouse` (test 13), `release-check` (tests 19 and 21) and `e2e:live` (test 22). Each task's `Verify` runs them locally.

### 8.3 Branches and protection

* `main` and `release/**` get rulesets as the owner's GitHub rules set out: pull request required with 0 approvals, the CI jobs required, no bypass, no force push. Deletion is blocked on `main` and allowed on `release/**`. The owner turns each ruleset on in the repository settings, after the CI workflow has run once. The owner also turns on "Automatically delete head branches", as the owner's GitHub rules set out. The result is checked with `gh api`.
* Tasks merge into `release/redesign`. The release is one pull request from `release/redesign` into `main`.
* A spec or plan change during the work goes into `release/redesign`, with the task that needs it, and reaches `main` with the release.

### 8.4 Release

1. The owner signs off every page's look and wording on the release branch (spec section 6.5, item 7).
2. The release checks pass (tests 19 and 21).
3. The owner changes **Settings, Pages, Source** from "Deploy from a branch" to "GitHub Actions". GitHub's documentation does not say what the site serves after this change and before the first deployment, so steps 3 and 4 run one straight after the other, and the live site is checked between them.
4. The release pull request merges into `main`, and `deploy.yml` publishes the site.
5. Test 22 runs against the live site.
6. After a few days with no problem, the `gh-pages` branch and the three old repository secrets are deleted, with the owner's approval. The owner then turns on Dependabot security updates (section 6).

**Rolling back:** a fault after the release is fixed forward: a pull request into `main` reverts or fixes the faulty change, and `deploy.yml` publishes it. Reverting the whole release merge is not a rollback, because it would also remove `deploy.yml`. For a full rollback before step 6, the owner switches the Pages source back to the `gh-pages` branch. GitHub's documentation does not say that this rebuilds the site at once, so the live site is checked after the switch.

---

## 9. Risks

| # | Risk | Likelihood | Mitigation |
| --- | --- | --- | --- |
| 1 | The owner's machine has Node 24.19, and the project uses Node 26 | High | Before any code is written, `node -v` is checked. If it is not 26, the owner installs Node 26, or `.nvmrc` stays on 24 with the owner's approval. CI uses `.nvmrc`. |
| 2 | Pre-rendered folders, the `404.html` copy and the `basename` do not behave on GitHub Pages as the documentation says | Medium | Before any page is built, a skeleton of every page is built and proved with `scripts/serve-pages.mjs`, which copies GitHub Pages' rules: every page, `404.html` and every script, style and font loads under `/portfolio/`, with no console error. The live behaviour is checked at the release (test 22). |
| 3 | The animations and fonts push the mobile Lighthouse score under 90 | Medium | Test 13 runs on every pull request, so the task that causes a drop is the one that fixes it. Fonts are limited to the weights used. |
| 4 | Content shows unstyled or in the wrong theme before the script runs | Medium | The theme script runs in `<head>` before paint (section 3.5). Test 6 checks for a flash. |
| 5 | The owner's review of the wording and extracts takes longer than the build | Medium | Each page's pull request carries its own wording table, so the review is in small parts. Unapproved extracts and placeholders fail only the release checks, which run only on pull requests into `main` (section 8.2). |
| 6 | The counted numbers and "Last updated" dates go out of date | High, over time | Each number shows what was counted and when. Section 3.4 records how to count them again. |
| 7 | A link into the Draughts web app moves in its rebuild | Low | Test 21 before the release (spec section 6.1.5). |
| 8 | The release branch drifts from `main` while it is open | Low | Nothing merges into `main` while the release branch is open. Planning changes go into `release/redesign` with the task that needs them (section 8.3). |
| 9 | React Router 8's framework mode is newer than the plain Vite setup on the owner's other sites | Low | Its pre-rendering is documented. The proof in risk 2 checks it. The ADR records how to move to option D in section 1.1 if needed. |
