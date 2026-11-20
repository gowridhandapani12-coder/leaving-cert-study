# Leaving Cert Applied Maths interactive course

Interactive, visual study pages for Irish Leaving Certificate Applied Mathematics (5th/6th year), one page
per topic. Same design and page format as the sister courses in `C:\Users\manos\OneDrive\Vamshileaving-cert-study\physics`
(see its CLAUDE.md for the full format rules) and `..\business`.

Course progress and build order: `COURSE-PLAN.md`. Update it whenever a topic is built.

Built so far: `s1-1-mathematical-modelling.html` (1.1 The modelling cycle), `s2-1-networks.html` (2.1 Networks &
terminology), `s2-2-adjacency-matrices.html` (2.2 Matrices & adjacency), `s3-2-vectors-projectiles.html` (3.2 Vectors & projectiles). No hub `index.html` yet.

## Run it locally

```
node server.js
```
Then open http://localhost:5182. `/` serves `index.html` if it exists, otherwise `s1-1-mathematical-modelling.html`.
The preview tool config is named "appliedmaths" (in this folder's and the Physics folder's `.claude/launch.json`).

## The specification (source of truth)

- NCCA *Leaving Certificate Applied Mathematics Specification* (© 2019; introduced to 5th years
  September 2021, first examined 2023). As of November 2026 curriculumonline lists no newer spec.
  Page: https://www.curriculumonline.ie/senior-cycle/senior-cycle-subjects/applied-mathematics/
  PDF path: `/getmedia/52c83c72-1089-4a83-8e85-e81b1a1a128e/Leaving-Certificate-Specification-Applied-Mathematics_EN_2.pdf`
  (27 pages). Also on that page: "Guidance to Support the Completion of the Modelling Project".
- Read it the same way as Physics: open the curriculumonline page in the built-in browser, import pdf.js
  4.0.379 from cdnjs in `javascript_tool`, fetch the PDF (same origin), extract text per page.
  Key pages: overview p9–10, strands p16–21, assessment p22–26.
- Structure: 4 strands. Strand 1 Mathematical modelling is the unifying strand (headings: problem-solving
  cycle, formulating, translating, computing, evaluating). Strand 2 Networks and graphs (terminology,
  adjacency matrices, MSTs with Kruskal/Prim, dynamic programming/Bellman, Dijkstra, project scheduling).
  Strand 3 The physical world (1D kinematics with calculus, 2D vectors and projectiles, forces/Newton,
  momentum and collisions, connected masses, friction, drag, work-energy, circular motion, dimensional
  analysis). Strand 4 A changing world (recurrence relations, difference equations, differential equations).
- The spec has no sub-topic numbers. The page/course numbering (1.1, 2.1–2.6, 3.1–3.8, 4.1–4.3) is ours,
  grouped from the spec's "students learn about" headings; say so on pages.
- Assessment: written exam 80% (Higher/Ordinary, 2½ hours) + modelling project 20% (common SEC brief,
  6th year, differentiated marking, written report). Label all exam-style questions as practice questions,
  not official SEC papers. Official past papers for this spec exist on examinations.ie.
- Quote learning outcomes verbatim. The spec has no action-verb appendix; the "Action verbs" panel uses the
  verbs in the learning outcomes with our own plain-English meanings (labelled as such).

## Page format differences from Physics

- File name `s<strand>-<topic>-<slug>.html`. Head/CSS = lines 1–395 of `../physics/refraction-lenses.html`
  (through `</style>`) copied verbatim except the `<title>`; then a small page `<style>`, body and script.
- Last tab is "Formulae". The calculation trainer and the "which stage?" drill are topic-specific.
- Labs are canvas models with live readouts (pure `draw*(ctx,w,h,opts)` functions reused in Learn and
  Infographics). Scenario data are illustrative and labelled as such.
- localStorage keys prefixed per topic (`am11-…`); theme/font keys are `am-theme` / `am-font`.

Pages after 1.1 were built by splicing: shared code and HTML blocks are copied from `s1-1-mathematical-modelling.html`
between fixed markers, then topic data, labs and text are added (keeps every page identical in behaviour).

## Quality checks

Same as Physics: `node --check` the script, open the page, no console errors, every tab and lab has sized
canvases, no horizontal scroll at 375 px, check every quiz answer and trainer solution, update
COURSE-PLAN.md and sidebar links.

## Usage budget

The user is on the Pro plan and needs most of the weekly allowance for other work. Build only when the user
asks, or with credit that would otherwise expire before the weekly reset. Applied Maths is included (since 2026-11-16)
in both scheduled build tasks (`courses-five-hour-build`, `physics-course-weekly-build`), which rotate
Physics, Business and Applied Maths. Skipped 5-hour runs are logged in the Physics COURSE-PLAN.md.
