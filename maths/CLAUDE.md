# Leaving Cert Maths interactive course

Interactive, visual study pages for Leaving Certificate Mathematics (Higher and Ordinary Level), one page per
syllabus topic. Same design and format as the other subjects (see `..\physics\CLAUDE.md` and the root `CLAUDE.md`).

Course progress and build order: `COURSE-PLAN.md`. Update it whenever a page is built.

Built so far: `s1-1-counting.html` (1.1 Counting), `s1-2-probability.html` (1.2 Concepts of probability).

## The syllabus (source of truth)

- *Leaving Certificate Mathematics Syllabus, for examination from 2015* (Foundation, Ordinary and Higher Level).
  As of November 2026 this is the only senior-cycle Maths document on curriculumonline (no newer specification).
  Page: https://www.curriculumonline.ie/senior-cycle/senior-cycle-subjects/mathematics/
  PDF path: `/getmedia/f6f2e822-2b0c-461e-bcd4-dfcde6decc0c/SCSEC25_Maths_syllabus_examination-2015_English.pdf`
  (96 pages; Section A syllabus pp. 3–45, Section B "Geometry for Post-primary School Mathematics" pp. 47–94).
  Read it with the pdf.js-in-the-browser method from the Physics notes. The text layer splits some words
  ("s trand", "t rigonometry"): tidy them when quoting.
- Structure: five strands. 1 Statistics and Probability (1.1 Counting, 1.2 Concepts of probability, 1.3 Outcomes of
  random processes, 1.4 Statistical reasoning, 1.5 Finding, collecting and organising data, 1.6 Representing data
  graphically and numerically, 1.7 Analysing, interpreting and drawing inferences from data) · 2 Geometry and
  Trigonometry (2.1 Synthetic geometry, 2.2 Co-ordinate geometry, 2.3 Trigonometry, 2.4 Transformation geometry,
  enlargements) · 3 Number (3.1 Number systems, 3.2 Indices, 3.3 Arithmetic, 3.4 Length, area and volume) ·
  4 Algebra (4.1 Expressions, 4.2 Solving equations, 4.3 Inequalities, 4.4 Complex numbers) · 5 Functions
  (5.1 Functions, 5.2 Calculus).
- Each topic has three columns: "Students learn about", "Students working at OL should be able to" and
  "In addition, students working at HL should be able to". Quote the outcomes verbatim and label OL/HL.
  Strand 1 outcomes are on printed pp. 17, 19, 21. The trigonometric formulae appendix is p. 45 (useful for the
  formula sheet; the SEC's Formulae and Tables booklet is what students use in the exam).
- Assessment (printed p. 44): HL and OL have two papers, Paper 1 and Paper 2, each with Section A (core concepts and
  skills) and Section B (context-based applications). Foundation Level has one paper. The syllabus doesn't give marks;
  SEC papers are 300 marks each at HL and OL (check a recent paper before quoting). Label practice questions as not
  official SEC papers.

## Page format

- File name `s<strand>-<topic>-<slug>.html` (1.1 → `s1-1-counting.html`).
- Head/CSS = `..\physics\refraction-lenses.html` through its first `</style>`; body/script spliced from
  `..\applied-maths\s1-1-mathematical-modelling.html` (shared code between fixed markers) plus page data and labs,
  as in the other subjects. Last tab "Formulae". The calculation trainer fits Maths naturally (random questions with
  worked steps; check every generator's answers by hand).
- Labs should be genuinely mathematical: simulations (e.g. dice and coin experiments that collect data and compare
  with theory), dynamic graphs and constructions.
- localStorage prefix `m<strand><topic>-` (e.g. `m11-`); theme/font keys `ma-theme` / `ma-font`.

## Quality checks

Same as Physics, plus: verify every worked solution and every probability or statistic by hand.
