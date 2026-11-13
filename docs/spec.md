# Portfolio Redesign — Specification

> **What this document is for:** It answers *what are we building, and why?* It is agreed before any design or code, and it is the source of truth for requirements.

Status: Approved
Last updated: 2026-11-13

---

## 1. Purpose

The portfolio is the public site that represents Oliver Bourne professionally. It expands on the CV (work history, qualifications), shows personal projects and skills, and shows how he works with Claude. Its goal is to help him secure a job. The readers are recruiters, hiring managers and developers who interview him.

---

## 2. Background

* The site is live at `https://ollierumbol.github.io/portfolio`. It is hosted on GitHub Pages.
* The owner's CV uses green as its accent colour. The current site uses the same green (`#198754`).
* The current role, Full Stack Developer at Logistics UK (March 2023 – now), has a heading on the site but no content.
* Recent personal projects use a shared way of working: planning documents, one task per pull request, automated reviews, branch rules and pipelines. The portfolio must follow the same way of working and must describe it.
* The owner does not keep the articles up to date, and has made no progress on the Azure certifications listed on the site.
* The owner's Claude setup is a private repository. Parts of it were written during paid work for an employer.

---

## 3. Goals and non-goals

### Goals

1. A complete visual redesign that is modern, distinctive and personal to the owner.
2. All content is accurate, current and free of spelling and grammar errors.
3. The current role at Logistics UK is described.
4. Every project the owner chooses to show is listed, in a new layout.
5. A new Claude section explains the owner's Claude setup: decisions, reasons and results.
6. The Articles section is removed.
7. All packages, tooling and the deployment pipeline are current and supported.
8. The repository has the same branch rules and pipelines as the owner's other recent repositories.

### Non-goals

* A blog or any content that needs regular updates. The Articles section is removed for this reason.
* A contact form, a backend, a database or user accounts.
* A move away from GitHub Pages.
* Any paid service, including a custom domain. The owner decided against a domain on 2026-11-11. One can be added later.
* An update to the CV. The owner does this after the project, so that the CV matches the new wording and design.
* Changes to the other project repositories. The portfolio links to them only.
* Rewriting the testimonials. They are other people's words and stay as written.

---

## 4. Current state of the code

| Project / Area | Purpose | State |
| --- | --- | --- |
| `src/components/home` | Name, summary, "Current Favourite Technology", testimonials | Works. Wording is dated (lists ".NET 5, 6, 7"). |
| `src/components/aboutMe` | Work history, skills, certification, education | Works. Current role is empty. Several typos. |
| `src/components/projects` | Five project cards | Works. Missing the recent projects. |
| `src/components/articles`, `public/articles`, `src/assets/Articles.json`, `src/backend/ArticleService.ts` | Three articles | To be removed. |
| `src/components/cv` | Route `/cv` that opens the CV PDF | Works. Not linked from the navigation. The CV file dates from January 2022. To be removed. |
| `public/testimonials`, `src/assets/Testimonials.json` | Six testimonials, all from PageSuite colleagues | Works. One uncommitted fix in `testimonial2.html`. |
| `package.json` | React 17, `react-scripts` 4.0.3, TypeScript 4.3, Bootstrap 5.0, React Router 5 | Old versions. |
| `.github/workflows/main_deploy.yml` | Deploys on every push to `main` | Uses Node 12 and `actions/checkout@v1`. No build or test check on pull requests. |
| `src/tests` | One test file | Minimal. |
| `README.md` | Project description | Still the default Create React App text. |
| `docs/` | Planning documents | Did not exist before this document. |

### 4.1 Defects and gaps

1. **Current role has no content.**
   `src/components/aboutMe/AboutMePage.tsx:15` — the Logistics UK entry says "Coming soon ...".
2. **Spelling and grammar errors in work history.**
   `src/components/aboutMe/AboutMePage.tsx` — "Mach 2023" (line 25), "mistakes I had scene" (line 51), "This allowed be to" (line 89), "cermet that knowledge" (line 301), "FrameWork", "the first agile team I join".
3. **Spelling and grammar errors in projects.**
   `src/components/projects/ProjectsPage.tsx` — "the first project I release" (line 52), "The are a variety", "whos turn it is" (line 93), a stray `"` after "MS unit tests." (line 174), "when can use it".
4. **Certification section shows no progress.**
   `src/components/aboutMe/AboutMePage.tsx:311` — Azure Fundamentals is marked "In Progress". The text says the plan was made in 2023.
5. **Skills list is dated.**
   It lists ".NET 5" and tools such as Net Beans, and does not show which skills are current.
6. **Recent projects are missing.**
   Picktime Automation, the JWT Validator site and the Draughts Game function are not listed.
7. **Deployment has no checks.**
   `.github/workflows/main_deploy.yml:11` — Node 12, and a push to `main` deploys with no build or test gate on pull requests.
8. **Deployment uses a personal access token.**
   `.github/workflows/main_deploy.yml` — the token, user name and email are repository secrets used to push the built site.
9. **The CV is out of date.**
   `src/assets/Oliver Bourne CV.pdf` was last changed in January 2022, before the Logistics UK role. `/cv` still serves it, although no link points to it.
10. **Testimonials load from separate HTML files at run time.**
    A testimonial can fail to load after the page shows.

---

## 5. External interfaces

### 5.1 GitHub Pages

The site is served as static files from `https://ollierumbol.github.io/portfolio`. There is no server-side code. The site address includes the `/portfolio` path.

### 5.2 Outbound links

The site links to, and does not call, these addresses:

| Link | Address |
| --- | --- |
| GitHub profile | `https://github.com/OllieRumbol` |
| LinkedIn profile | `https://www.linkedin.com/in/oliver-bourne-a17aa91a3/` |
| JWT Validator NuGet package | `https://www.nuget.org/packages/JWTValidator/` |
| JWT Validator site | `https://ollierumbol.github.io/JWTValidator` |
| Draughts Game site | `https://ollierumbol.github.io/draughtsgame/#/` |
| Project repositories | `https://github.com/OllieRumbol/<repository>`, for each repository in 6.1.5 |

---

## 6. Functional specification

### 6.1 Behaviour

#### 6.1.1 Sections

The site SHALL have these sections. The order and the split into pages are design decisions.

| Section | Content | Source |
| --- | --- | --- |
| Introduction | Name, job title, short summary, links to GitHub and LinkedIn | Rewritten. See 6.1.2 and the notes below this table. |
| Experience | Logistics UK, PageSuite, AXA PPP | Existing text, reviewed. Logistics UK is new. See 6.1.3. |
| Skills | Current skills, grouped | Reviewed. See 6.1.4. |
| Education | University of Kent, John Wallis Academy | Existing text, reviewed. |
| Projects | All chosen projects | See 6.1.5. |
| Claude | How the owner works with Claude | New. See 6.1.6. |
| Testimonials | Six existing testimonials | Unchanged wording. |

The Introduction:

* The "Current Favourite Technology" text is removed. The owner agreed this on 2026-11-11.
* In its place is a short summary of three or four sentences. It says what the owner does and how he works: full stack, .NET and React, small teams, project delivery, and his use of Claude. It leads the reader to Experience, Projects and Claude.
* The paragraph under the owner's name is rewritten. It no longer says ".NET Developer", and it matches the job title "Full Stack Developer".
* The summary states no opinion about one technology against another, because such text dates quickly.

The site SHALL NOT have an Articles section. Its files, data and route are deleted.

The site SHALL NOT have a Certification section. The owner can add one back when a certification is passed.

#### 6.1.2 Wording

1. All of the owner's text may be rewritten where that makes it clearer, shorter or more professional. The review is not limited to spelling and grammar. The owner agreed this on 2026-11-11. The rewrite keeps the owner's facts and his meaning (rule 4), and it does not touch the testimonials (rule 5).
2. The owner reviews the final wording of every section before it goes live. The review is for facts and for whether the text sounds like him, not for each word.
3. All text uses British English spelling.
4. Facts are not invented. Names, dates, employers, grades, numbers and quotes come from the owner or the existing site. Missing content shows a visible placeholder in a draft and blocks release.
5. All six testimonials stay. They are quoted exactly, except for the corrections in the table below, which the owner approved on 2026-11-11. No other word changes. The layout allows a testimonial to be added later.

   | Testimonial | As written | Correction |
   | --- | --- | --- |
   | 2 | "wether" (twice) | "whether" |
   | 2 | "his teams well-being" | "his team's well-being" |
   | 2 | "in anyway he can" | "in any way he can" |
   | 3 | "finds away" | "finds a way" |
   | 3 | "his up most" | "his utmost" |
   | 3 | "nuget", "react" | "NuGet", "React" |
   | 5 | "highly intelligence" | "highly intelligent" |
   | 5 | ".Net", "vue.js" | ".NET", "Vue.js" |
6. The site is the source of truth for dates, job titles and qualifications. The CV in the repository dates from January 2022 and is out of date. The owner updates the CV after this project, from the wording and the design agreed here.
7. Every defect in section 4.1, items 2 and 3, is corrected.

#### 6.1.3 Experience: Logistics UK

The Experience section SHALL describe the role "Full Stack Developer at Logistics UK", March 2023 – now, at the same level of detail as the PageSuite entry. The entry is written from these facts, which the owner supplied on 2026-11-11:

* Logistics UK is a trade association that represents and supports the UK logistics and freight sector.
* The business has several small teams. Each team normally has two developers.
* From the owner's LinkedIn profile, supplied on 2026-11-12: the role is full-time and hybrid, based in Royal Tunbridge Wells. He designs, develops and maintains the Vision product and other core products across the business.
* Most of the owner's time is project work: migrations of older systems, and new products that bring new revenue to the business.
* Technology: Azure, YAML pipelines, C# microservices, older C# Web Forms projects, SQL Server, React websites, React Native apps, older Angular frontends.
* Projects, in order:
  1. A new brochureware site, built from scratch, that had to sit on top of an old Web Forms project. It is public at `https://vision.logistics.org.uk/`. Vision is Logistics UK's platform for driver and fleet compliance.
  2. A new licence check and grey fleet check product. About one year of work.
  3. A new Penalty Charge Notice (PCN) microservice. Start of 2026.
* The owner introduced Dapper to Logistics UK, to replace manual mapping of data.
* Wider duties: scrum master, mentoring new starters, and writing new setup guides, for example how to run IIS locally.

The owner confirmed that these projects can be named, because they are public on the Vision site. The entry SHALL contain nothing else that is confidential to Logistics UK: no code, internal system names, client names or figures.

The owner supplied no measured results. The entry states none.

#### 6.1.3a Experience: PageSuite

The PageSuite entry SHALL show the owner's progression inside the business. The owner asked for this on 2026-11-12.

* PageSuite is one entry, June 2020 – March 2023. Inside it, the four roles appear in the order he held them: Junior Backend Developer, Backend Developer, Backend Technical Lead, Backend Team Lead.
* Each role has a short description, rewritten from the existing site text.
* Where the home page shows the career at a glance, PageSuite stays one item, and that item shows that it covers four roles.
* The dates of each role come from the owner's LinkedIn profile, which he supplied on 2026-11-12:

  | Role | Dates | Length |
  | --- | --- | --- |
  | Junior Backend Developer | June 2020 – May 2021 | 1 year |
  | Backend Developer | June 2021 – December 2021 | 7 months |
  | Backend Technical Lead | January 2022 – April 2022 | 4 months |
  | Backend Team Lead | May 2022 – March 2023 | 11 months |

  The four roles add up to 2 years 10 months, which matches the dates for PageSuite as a whole.

#### 6.1.4 Skills

1. The section shows the skills the owner uses now, ahead of older ones.
2. Version-specific entries that date the page, such as ".NET 5", are removed or made general.
3. The list is the one below, which the owner agreed on 2026-11-11. The grouping and order are design decisions.

| Group | Skills |
| --- | --- |
| Languages | C#, TypeScript, JavaScript, HTML, CSS, SQL, Java, Python |
| Libraries and frameworks | React, React Native, Angular, Vue, .NET, ASP.NET Core, .NET Framework (MVC and Web Forms), Entity Framework, Bootstrap |
| Automated testing | MS Test, xUnit, NUnit, Selenium, SpecFlow, Playwright |
| Data | SQL Server, MongoDB |
| Cloud and deployment | Azure, Azure Functions, AWS, YAML pipelines, GitHub Actions, GitHub Pages, IIS |
| Architecture | Microservices |
| Tools | Visual Studio, VS Code, Git, Fork, Postman, LINQPad, Chocolatey, Claude Code |

Removed from the current list: Go, Erlang, NetBeans, IntelliJ, LINQ, Newtonsoft and the version-specific ".NET 5".

#### 6.1.5 Projects

1. The section lists the projects in the table below. A featured project has a full write-up and appears first. A smaller entry has a short description and its links.
2. Each featured project is written as a short case study, with the same five parts. The owner agreed this on 2026-11-11.

   | Part | What it answers | Length |
   | --- | --- | --- |
   | Problem | Why the project exists | 1 to 2 sentences |
   | What I built | What it does, in plain words | 2 to 3 sentences |
   | Key decisions | Two or three choices, each with its reason | 1 sentence each |
   | Result | What is true now | 1 to 2 sentences |
   | Technology and links | The technology, and links to the live site, package and repository where they exist | A short list |

   The decisions and results come from each project's own planning documents and repository, and the owner approves them. A smaller entry shows its name, a short description, the technology and its links.
3. Each project shows an image or diagram where one exists. A project without an image still looks complete.
4. Related projects are shown as related. Examples: the JWT Validator package and its site; the Draughts Game site and its function.
5. The layout scales. Adding a project needs new content only, not a layout change.
6. The most relevant projects for a job application appear first.

The owner agreed this list on 2026-11-11. All listed repositories are public.

| Project | Level | Repository | Live |
| --- | --- | --- | --- |
| JWT Validator: NuGet package and its site, shown as a pair | Featured | `ID_Token-JWT_Validator`, `JWTValidator` | NuGet, GitHub Pages |
| Draughts Game: site and Azure Function, shown as a pair | Featured | `draughtsgame`, `DraughtsGameFunction` | GitHub Pages |
| Picktime Automation | Featured | `PicktimeAutomation` | None |
| Portfolio (this site) | Featured | `portfolio` | GitHub Pages |
| Tree Calculator | Smaller entry | `TreeCalculator` | None |
| Dynamic Vue Modal | Smaller entry | `Dynamic-Vue` | None |

Not on the site:

* Early Projects. The entry is removed.
* Trackpad Whiteboard, Sudoku Solver, Trading Visualizer. Not built or not finished. The owner adds each one when it works.
* Minimal Driver API, Advent of Code 2023, the technical challenge repositories, the 2020 learning repositories and all private repositories.

#### 6.1.6 Claude section

The section explains how the owner set up Claude for development work, and why.

1. **Two layers.** The top of the section has one diagram and a short summary. A reader who stops there understands the approach. The details are below.
2. **Decisions and reasons.** Each detail item states a decision and the reason for it. The section is not a list of files.
3. **Results.** The section shows measured results from the Draughts Game function project. The numbers describe the way of working, not the product:
   * Each number is counted from the project's repository and its GitHub pull requests. The site states what was counted and the date of the count.
   * The numbers measure quality and control. Examples: tasks completed, pull requests merged, review findings raised and how many were fixed before merge, tests written.
   * The section SHALL NOT measure speed, such as days to finish. The owner sets the pace on purpose, so elapsed time says nothing about the process.
   * The owner approves each number, and how it was counted, before release.
   * The final set of numbers is chosen at the design step, from what can be counted reliably.
4. **Last updated.** The section shows the date its content was last updated. The date changes only when the Claude content changes.
5. **Nothing confidential.** The section contains nothing from the owner's employer: no code, client names, internal systems, tickets or process documents. The owner checks the final text against this rule before release.
6. **Selected extracts.** The section quotes a few short, real pieces of the setup, to support the decisions it describes. The setup repository stays private, and the site does not link to it or publish any file in full. The owner approves each extract, and checks each one against rule 5, before release.

The details SHALL cover every part of the setup, so that the section shows the full extent of the owner's knowledge. Rule 2 still applies: each part appears as a decision with a reason, and with what it adds. A part is not listed only because it exists. The owner agreed this scope on 2026-11-11.

| Part of the setup | Decisions to explain |
| --- | --- |
| Global instructions | They are kept short and precise. What belongs there, and what is moved out. |
| Rules for each technology | Separate rules for C#, React and GitHub. Each loads only when matching files are in use. |
| Planning skills | Specification, plan and tasks are written and approved before code. A separate review checks the three documents together. |
| Task skill | One task at a time, each on its own branch and pull request. This skill came from a retrospective. |
| Retrospective skill | The setup changes after each project, from evidence. This is the part that improved the process most. |
| Agents | Independent reviews that do not see the working conversation: a task review, a code review and a design review. |
| Hooks | A build check for .NET that runs automatically. |
| Plugins | Which plugins are installed, and why each one was chosen. |
| Templates | One fixed shape for the specification, the plan and the tasks. |
| Cost rule | Free tiers only. |
| Pace | With an approved specification, the build is not the slow part. The owner chooses to spend the time on the next specification. |

The exact content of each row is checked against the setup at the design step.

#### 6.1.7 Navigation

1. The site has several pages: a short home page that introduces the owner and leads to the rest, and separate pages for at least Experience, Projects and Claude. The owner agreed this on 2026-11-11. Where the other sections in 6.1.1 sit is a design decision.
   * Each page has its own address. The address works when it is opened directly or shared.
   * Each page has its own title, description and link preview.
   * Every page is reachable from the navigation in one action.
2. The site launches with no CV download, because the only CV is out of date (6.1.2, rule 6). The owner agreed this on 2026-11-11.
   * The out-of-date CV file and its `/cv` page are removed.
   * When the owner supplies a new CV, the download is added to the navigation and the Introduction. This needs the file and one link, not a layout change.
3. External links open in a new tab.
4. An address that does not match a page shows the Introduction or a "not found" page with a link home. It does not show a blank page.
5. Old addresses for removed content (`/articles`, `/cv`) do not show a blank page.

#### 6.1.8 Repository and delivery

1. A change reaches `main` only through a pull request. No approval from a second person is needed, so that the owner can merge his own work.
2. A pull request cannot merge until the build, the tests, and the accessibility and performance checks in 6.6 pass.
3. Nobody can bypass rules 1 and 2, including the owner. `main` cannot be force pushed or deleted.
4. These rules match the owner's standard for a public repository with CI, which the JWT Validator and Picktime Automation repositories already use.
5. The site deploys automatically when a change merges to `main`. No other event deploys it.
6. The deployment does not use a personal access token.
7. All packages are on a current, supported version. No package has a known high or critical vulnerability at release.
8. `README.md` describes this project: what it is, how to run it, how to test it and how it deploys.

#### 6.1.9 Other content

1. **Contact.** The Introduction and the footer of every page have a "Message me on LinkedIn" action that opens the owner's LinkedIn profile. The site shows no email address and no phone number.
2. **Education.** The degree, the grade and the university come first. The lists of modules are collapsed or removed. Which one is a design decision.

### 6.2 Worked examples

| Input | Expected result | Notes |
| --- | --- | --- |
| A recruiter opens the site on a phone | Name, job title, summary and the links to GitHub and LinkedIn are visible without sideways scrolling | |
| A reader opens `/#/cv` from an old link | They see a page with working navigation, not a blank page and not the old CV | |
| A reader opens the Claude section and reads only the top | They see one diagram and a summary of fewer than 100 words | |
| A reader opens `/#/articles` from an old link | They see a page with working navigation, not a blank page | |
| The owner adds a new project | They add content for one project. The layout does not change. | |
| A pull request has a failing test | It cannot merge | |
| A commit merges to `main` | The live site shows the change with no manual step | |

### 6.5 User interface

1. **Look.** Modern, clean, smart and unique. It must not look like a default template or component library.
2. **Colour.** Green stays as the accent colour, to match the CV, unless the design review shows that it does not work. The shade may change so that it meets the contrast requirement in 6.6. The owner approves the shade.
3. **Theme.** The site has a light theme and a dark theme.
   * On the first visit, the site follows the reader's device setting.
   * A switch, reachable from every page, changes the theme.
   * The site remembers the reader's choice on that device.
   * Every section meets the requirements in 6.6 in both themes.
4. **Photo.** The site has no photo of the owner. The owner decided this on 2026-11-11.
5. **Visual direction.** On 2026-11-11 the owner compared four rendered mock-ups of the home page and chose direction D. On 2026-11-12 he approved its third version. The reference is `docs/design/mockups/d-modern-v3.html`.
   * Every page follows its look: one typeface, rounded cards, generous space, and green as the only accent.
   * Each featured project has a small drawing that reacts to the reader. The reaction comes from what the project does, and it is drawn and animated with care. It is not decoration.
   * The title of the home page is the owner's name, very large and centred. The "o" in Bourne is the centre of a target, and an arrow lands in it when the page loads. The owner chose this on 2026-11-12 from three rendered options, in `docs/design/mockups/hero-options.html`. Because the title uses the arrow, the Picktime Automation card shows the booking itself, not an arrow.
   * Elements in a row line up: the same top, the same height, and titles on one line.
   * The home page does not use the layout of the JWT Validator site: a headline on the left with a card on the right.
   * The home page runs in this order, which the owner agreed on 2026-11-12: the owner's name and one sentence; the featured projects; how he works with Claude; experience, drawn to scale; testimonials; the LinkedIn action. The first two after the name show the work. The next two show the career.
   * The owner rejected the first three mock-ups as basic and untidy.
   * The mock-up shows the look. Its wording is a draft, and the final content and length of each page are design decisions.
6. **Unique details.** Small, unique details bring the site to life, and the owner considers them essential (2026-11-12). They are a requirement on every page, not only the home page.
   * Every page has at least one such detail.
   * Each detail comes from something real: the owner, a project, or a fact. Examples the owner approved: the arrow that lands in his name, a legal draughts capture, the real checks of the JWT library, the 00:05 booking with its fallback, and his four roles at PageSuite drawn to scale.
   * Each detail is accurate. A draughts move is legal. A date is to scale. A method name is the real one.
   * Each detail is finished to a high standard. An object is drawn properly, and its movement has physical detail. The owner rejected an arrow drawn as a plain line.
   * A detail that is only decoration, or that has no job on the page, is left out. The owner rejected a banner for this reason.
   * A reader who has turned motion off, or who uses a keyboard or a touch screen, still gets the information.
7. **Design sign-off.** The owner signs off the final look of every page before release.
8. **Phone, tablet, desktop.** Every section is readable and usable from 360 px wide upward, with no sideways scrolling.
9. **Motion.** Any animation respects the reader's reduced-motion setting.
10. **States.** No section depends on content that loads after the page. If something cannot load, the reader sees a message, not an empty space.

### 6.6 Non-functional requirements

| Area | Requirement |
| --- | --- |
| Cost | Zero. GitHub Pages and the free allowance of GitHub Actions only. |
| Accessibility | Text contrast meets WCAG 2.2 AA. All content is reachable by keyboard. Images have text alternatives. Headings are in order. |
| Performance | Lighthouse performance score of 90 or more on a phone profile. |
| Search and sharing | Each page has a title and a description. A shared link shows a title, description and image. |
| Privacy | No tracking cookies. No personal data is collected. |
| Confidentiality | Nothing confidential from any employer, in any section. |
| Browsers | Current versions of Chrome, Edge, Firefox and Safari. |

### 6.7 Edge cases

* JavaScript is slow or fails: the reader still sees the text and links of the page they opened.
* A project has no live site, or no image.
* A linked project site is offline: the portfolio is not affected.
* Very long testimonial text on a phone.
* A reader prints the page or saves it as a PDF.

---

## 7. Open questions

All 15 questions were resolved with the owner on 2026-11-11. The list is kept as a record of each decision and where it is written.

1. Resolved 2026-11-11. **Logistics UK content.** See 6.1.3.
2. Resolved 2026-11-11. **Certification.** Removed fully. See 6.1.1.
3. Resolved 2026-11-11. **Skills.** See 6.1.4.
4. Resolved 2026-11-11. **Project list.** See 6.1.5.
5. Resolved 2026-11-11. **Draughts numbers.** Numbers about the way of working, counted from the repository and GitHub. No speed measures. See 6.1.6, item 3.
6. Resolved 2026-11-11. **Claude section scope.** Every part of the setup, with selected extracts. See 6.1.6.
7. Resolved 2026-11-11. **Colour and theme.** Light and dark, with a switch. See 6.5.
8. Resolved 2026-11-11. **One page or several.** Several pages. See 6.1.7.
9. Resolved 2026-11-11. **Testimonials.** Keep all six, with the approved corrections. None newer. See 6.1.2.
10. Resolved 2026-11-11. **Home page essays.** Replaced with a short summary. See 6.1.1.
11. Resolved 2026-11-11. **Branch rules.** The owner's existing standard, read from his other repositories. See 6.1.8.
12. Resolved 2026-11-11. **Custom domain.** None. See section 3.
13. Resolved 2026-11-11. **CV file.** Out of date. No download at launch. The CV is updated after this project. See 6.1.2 and 6.1.7.
14. Resolved 2026-11-11. **Photo.** None. See 6.5.
15. Resolved 2026-11-11. **Suggested additions.**

| Suggestion | Decision | Where |
| --- | --- | --- |
| A "Message me on LinkedIn" action | Accepted. LinkedIn only, no email address. | 6.1.9 |
| A "what I am looking for" line | Rejected for now | — |
| A "how this site was built" note | Accepted on 2026-11-11, then dropped on 2026-11-12. The home page section on the way of working, and the Portfolio case study, already cover it. | — |
| An accessibility and performance check on every pull request | Accepted | 6.1.8 |
| Education shortened | Accepted | 6.1.9 |
| Search and sharing metadata | Already a requirement | 6.1.7, 6.6 |
| A "Download CV" action | On hold until the new CV exists | 6.1.7 |
| Featured projects written as short case studies | Accepted | 6.1.5 |

---

## 8. Assumptions

1. The site stays on GitHub Pages at the same address.
2. The site stays a static site with no backend.
3. The repository stays public, so the planning documents are public too.
4. The owner supplies the Logistics UK content and approves all wording.
5. Green stays as the accent colour unless the owner decides otherwise.
6. The owner supplies a new CV after this project. Until then, the site offers none.
7. The uncommitted change to `public/testimonials/testimonial2.html` is the owner's and is kept.
8. The work is done as several pull requests, not one.

---

## 9. Definition of done

* The live site has the sections in 6.1.1 and no Articles section.
* The Logistics UK role is described, and the owner has approved the text.
* Every project in the agreed list is shown, with working links.
* The Claude section has a diagram and summary at the top, decisions with reasons below, the Draughts results, and a "last updated" date.
* The owner has confirmed that no section contains confidential employer information.
* The owner has approved the wording of every section, and no defect from section 4.1 remains.
* The owner has signed off the visual design.
* Every requirement in 6.6 is met and has a check or a recorded test.
* `main` is protected, and a pull request with a failing check cannot merge.
* A merge to `main` deploys the site with no manual step and no personal access token.
* No package has a known high or critical vulnerability.
* `README.md` describes this project.
* No open question remains in section 7.
