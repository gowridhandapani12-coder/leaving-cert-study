# Leaving Cert Irish (Gaeilge) interactive course

Interactive, visual study pages for Leaving Certificate Irish, one page per syllabus topic (plus oral and paper
components). Same design and format as the other subjects (see `..\physics\CLAUDE.md` and the root `CLAUDE.md`).

Course progress and build order: `COURSE-PLAN.md`. Update it whenever a page is built.

Built so far: `t1-an-scolaire-fein.html` (Topaic 1: An Scoláire Féin agus a Thimpeallacht).

## The syllabus (source of truth)

- *Siollabais Nuashonraithe na hArdteistiméireachta* (Gaeilge, Gnáthleibhéal agus Ardleibhéal, revised; Foundation
  Level is a separate PDF). Page: https://www.curriculumonline.ie/senior-cycle/senior-cycle-subjects/gaeilge/
  PDF path: `/getmedia/c794666b-8ca5-4f78-8160-809e296d19d2/Siollabais-Nuashonraithe-na-hArdteistimeireachta_1.pdf`
  (65 pages). Read it with the pdf.js-in-the-browser method from the Physics notes.
- Structure: Ordinary Level topics with Spriocanna (goals), Feidhmeanna (functions) and example phrases (pp. 11–27
  printed); Higher Level works on the same topics in more depth (topic list printed p. 43–48). Topic 1 is
  "An Scoláire Féin agus a T(h)impeallacht" (1.1 An Teaghlach, 1.2 Áit Chónaithe, 1.3 Cairde, 1.4 Caitheamh Aimsire,
  1.5 Airgead). Quote Spriocanna verbatim in Irish with an English summary; mark syllabus example phrases "(siollabas)".
- Assessment (printed p. 53–54): total 600. Béaltriail (oral) 240 = 40%, common to HL and OL, around Easter.
  Páipéar 1 160 = 27% (cluastuiscint 60 + ceapadóireacht 100). Páipéar 2 200 = 33% (HL: léamhthuiscint 50 + 50,
  prós 30, filíocht 30, litríocht bhreise 40; OL: léamhthuiscint 50 + 50, prós 50, filíocht 50).
  The split of oral marks (fáiltiú, léamh filíochta, sraith pictiúr, comhrá) comes from the SEC, not the syllabus.
- Prescribed prose and poetry change by exam year: confirm from the SEC/Department before building those pages.

## Page format

- File name `t<topic>-<slug>.html` for topics; later `beal-sraith-pictiur.html`, `p2-pros-<title>.html` etc.
- Body/script spliced from `..\applied-maths\s1-1-mathematical-modelling.html` (shared code between fixed markers)
  plus page data and labs. Bilingual: Irish phrases with English glosses (`.ga` / `.en` classes).
- Last tab is "Phrase bank" (hash `#formulae`). Trainer = multiple-choice numbers and grammar (ages, personal numbers,
  an- + séimhiú); drill = "Cén cheist?" (match an answer to its oral question).
- localStorage prefix `ga1-` (topic 1); theme/font keys `ga-theme` / `ga-font`.
- Irish accuracy matters most: use standard forms, prefer syllabus examples, and double-check numbers, séimhiú and urú.

## Quality checks

Same as Physics. Topic 1 was built on 2026-11-18. It passed `node --check`; the browser checks were run after the
merge into this project (see the run log).
