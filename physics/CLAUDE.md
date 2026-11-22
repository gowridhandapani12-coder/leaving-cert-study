# Leaving Cert Physics interactive course

Interactive, visual study pages for Irish Leaving Certificate Physics (5th/6th year), one page per
specification section. Audience: students revising on laptops and phones. The finished reference page
is `refraction-lenses.html` (section 2.3). Every new section must look and work the same way.

Course progress and the build order live in `COURSE-PLAN.md`. Update it whenever a section is built.

Built so far: `s1-1-motion.html` (1.1), `s1-2-forces.html` (1.2), `s1-3-hookes-law.html` (1.3), `s1-4-work-energy.html` (1.4), `s1-5-gravity.html` (1.5), `s1-6-circular-motion.html` (1.6), `s2-1-heat.html` (2.1), `s2-2-travelling-waves.html` (2.2), `refraction-lenses.html` (2.3), `s2-4-electromagnetic-energy.html` (2.4),
`s2-5-sound-energy.html` (2.5), `s2-6-superposition.html` (2.6), `s2-7-doppler.html` (2.7), `s3-1-charge.html` (3.1), `s3-2-electric-fields.html` (3.2), `s3-3-circuits.html` (3.3), `s3-4-magnetic-fields.html` (3.4), `s3-5-motor-effect.html` (3.5), plus the hub `index.html`.

## Run it locally

```
node server.js
```
Then open http://localhost:5179. `server.js` serves this folder (no dependencies). `/` serves
`index.html` if it exists, otherwise `refraction-lenses.html`.

## The specification (source of truth)

- NCCA *Leaving Certificate Physics Specification*, for introduction to 5th years in September 2025,
  first written exam June 2027. Page: https://www.curriculumonline.ie/senior-cycle/senior-cycle-subjects/physics/
  PDF link on that page: `/getmedia/aec702a9-4818-45f1-917e-497c3a9a2466/SC-PHYSICS-Spec-EN.pdf`
- WebFetch can't read it (403 or compressed PDF). What works: open the curriculumonline page in the
  built-in browser, then in `javascript_tool` dynamically import pdf.js from cdnjs
  (`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.min.mjs`, worker `pdf.worker.min.mjs`),
  `fetch()` the PDF path above (same origin), extract text per page, keep it in `window.__spec`,
  then slice out the section you need. The PDF contains a lot of duplicated equation junk; ignore it.
- Structure: Unifying strand (Nature of Science) + 4 strands. Each section has "Students learn about"
  (content bullets) and "Students should be able to" (learning outcomes). Quote learning outcomes
  verbatim on the page.
- Assessment: written exam 60% (Higher or Ordinary level) + Physics in Practice Investigation 40%
  (common level, brief issued by the SEC, done in 6th year). Source: AAC guidelines
  https://curriculumonline.ie/getmedia/661fe09e-2b93-4f55-b548-ff87d7e38331/AAC_Guidelines_Physics_Final.pdf
- No official SEC papers exist yet for the new spec: label all exam-style questions as practice
  questions, not official ones.

Section titles (from the spec):
- 1 Forces and Motion: 1.1 Particle motion in a straight line · 1.2 Forces acting on a particle ·
  1.3 Stretching and compressing objects · 1.4 A work-energy model · 1.5 Forces in a gravitational
  field · 1.6 Uniform circular motion
- 2 Wave Motion and Energy Transfer: 2.1 Heat energy and temperature change · 2.2 Travelling waves ·
  2.3 Wave behaviour (reflection, refraction, lenses) · 2.4 Electromagnetic energy · 2.5 Sound energy ·
  2.6 Principle of superposition · 2.7 Wave effects (Doppler)
- 3 Electric and Magnetic Fields: 3.1 Charge interactions · 3.2 Modelling electric fields ·
  3.3 Electric circuits · 3.4 Magnetic fields · 3.5 Force on a current-carrying conductor ·
  3.6 Induced potential difference and the generator
- 4 Modern Physics: 4.1 The electron · 4.2 Photoelectric emission and X-ray production ·
  4.3 Early models of the atom · 4.4 Radioactivity · 4.5 Mass-energy equivalence ·
  4.6 Harnessing energy from nuclear processes

Known 2.4 content (to confirm against the spec): electromagnetic spectrum and sources, ionising
radiation, dispersion, solar irradiance (power per unit area). Outcomes: categorise EM waves by
wavelength, frequency, ionising ability and everyday use; demonstrate dispersion and explain it;
investigate solar irradiance and its impact on life on Earth using secondary sources.
Dispersion is already taught in the 2.3 page; link to it rather than rebuilding it.

## Page format (copy `refraction-lenses.html` as the template)

Single self-contained HTML file per section, no build step. Name: `s<strand>-<section>-<slug>.html`
(e.g. `s2-4-electromagnetic-energy.html`). The 2.3 page keeps its current name.

- Sticky top bar: brand + font picker + theme button, then view tabs:
  Overview · Learn · Labs · Mind map · Infographics · Flashcards · Quiz · Exam prep · Glossary · Formulae.
  Hash routing (`#learn`, `#labs` …).
- Left sidebar: "This chapter" topics (clicking one goes to that topic inside the current tab), then
  the full course list. Sections that exist are links to their page; the current one is highlighted;
  the rest say "coming soon". On phones the sidebar is a drawer (☰).
- Content is driven by data arrays in the script: `TOPICS`, `LEARN`, `MM` (mind map), `CASES` /
  `AROUND` (infographics), `CARDS` (flashcards, ~25-30), `QUIZ` (~15, with explanations), `GLOSS`
  (~40-60 terms incl. abbreviations and symbols), `GL_LINKS` (terms auto-linked in Learn notes),
  `CMDS`, `PTYPES` (random calculation trainer with worked steps), `LONGQ` (2-3 long questions with
  marking guides), `RAG` (revision checklist), `SKILLS` (investigation skills).
- Labs: 4-6 canvas simulations per section, built as pure `draw*(ctx,w,h,opts)` functions so the same
  drawing is reused in Learn cards and infographics. Every lab has live readouts and "try this" prompts;
  at least one lab collects simulated primary data and fits a graph.
- Visual first: a picture, three key ideas, one common mistake per Learn card. Keep text short.
- localStorage keys must be prefixed per section (2.3 uses `rl-…`; use e.g. `s24-…`) and wrapped in try/catch.

Design tokens (keep identical across pages):
- Palette from the user's swatches: terracotta `#b4673f`, blush `#dfc0aa`, apricot `#d4956a`,
  cream `#f2e3d2`, sage `#cacbbc`, olive `#9d9a80`; light bg `#f7efe5`, ink `#3b2b21`.
  Dark mode is defined too (see `:root` blocks in the template). Never hard-code colours in components.
- Fonts (switchable, default Playful): Playful = Fredoka + Nunito · Easy-read = Lexend ·
  Clear = Bricolage Grotesque + Atkinson Hyperlegible · Notebook = Caveat + Nunito. Data in JetBrains Mono.
- Writing: plain, short sentences, second person, Irish/UK spelling (colour, metre), SI units with a
  space before the unit.

## Quality checks before calling a section done

1. Extract the script and run `node --check` on it.
2. Run `node server.js` (or preview_start "page"), open the page, read console errors.
3. In the browser, switch to every tab and every lab; check all canvases have a non-zero size and that
   `document.documentElement.scrollWidth <= innerWidth` at 375 px wide.
4. Check every quiz answer and calculation-trainer solution by hand.
5. Update `COURSE-PLAN.md` and the sidebar links in every existing page (and `index.html`).

## Usage budget rule (user's request)

The user is on the Pro plan and needs most of the weekly allowance for other work. Only build new
sections with credit that would otherwise expire before the weekly reset. See COURSE-PLAN.md.
