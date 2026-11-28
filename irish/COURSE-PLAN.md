# Irish course plan

Build in this order. Topic numbers follow the syllabus's Ordinary Level grouping (HL adds depth).

| # | Page | File | Status |
|---|------|------|--------|
| 1 | Topaic 1: An Scoláire Féin agus a Thimpeallacht (family, home area, friends, hobbies, money) | `t1-an-scolaire-fein.html` | Done (2026-11-18) |
| 2 | Topaic 2: Cúrsaí Scoile agus Oibre (school and work) | `t2-cursai-scoile-oibre.html` | Done (2026-11-21) |
| 3 | Topaic 3: An Ghaeilge Timpeall Orainn (Irish around us) | `t3-an-ghaeilge-timpeall-orainn.html` | Done (2026-11-28) |
| 4 | Topaic 4: Saol an Duine Óig (young people's lives) | | To do |
| 5 | Topaic 5: Na Meáin Chumarsáide (the media) | | To do |
| 6 | Béaltriail: An tSraith Pictiúr (picture sequences) | | To do |
| 7 | Béaltriail: Léamh filíochta agus fáiltiú | | To do |
| 8 | Páipéar 1: Cluastuiscint | | To do |
| 9 | Páipéar 1: Ceapadóireacht (aiste, scéal, alt, díospóireacht) | | To do |
| 10 | Páipéar 2: Léamhthuiscint | | To do |
| 11 | Páipéar 2: Prós (prescribed texts: confirm list for the exam year) | | To do |
| 12 | Páipéar 2: Filíocht (prescribed poems: confirm list) | | To do |
| 13 | Páipéar 2: Litríocht bhreise (HL) | | To do |

## Topic 1 contents

Labs: Mo theaghlach (family builder with personal numbers, ages, jobs and é/í) · Treoracha (town map with
step-by-step directions) · Tréithe (sort qualities, an- + séimhiú sentence) · Suirbhé (simulated class survey,
percentages settling with sample size) · Buiséad (part-time job budget, tuillim/caithim/coiglím) · An comhrá (build an
oral answer from phrases; meters for length, tenses, linking). 3 syllabus goals, 26 flashcards, 16 quiz questions,
50 glossary terms, phrase bank, numbers and grammar trainer, "Cén cheist?" drill, 3 practice tasks.

## Topic 2 contents

Syllabus 2.1-2.4 read with pdf.js (pp. 15-18 printed; Spriocanna quoted verbatim). Labs: Suirbhé ábhar (simulated
favourite-subject survey settling with sample size + number of subjects with séimhiú/urú + níos … ná comparisons) ·
Rialacha na scoile (12 rules sorted into Níl cead agat / Caithfidh tú, opinion toggle) · Pointí CAO (7 grades, best six,
+25 HL Maths at H6+, illustrative course points) · Slite beatha (4 preference sliders rank 14 jobs; i mo + séimhiú) ·
An guthphost (4 callers × 6 voicemails → reported speech with go/nach + urú, changed words highlighted) · An comhrá
(5 school/work questions). 3 goals, 29 flashcards, 17 quiz questions, 55 glossary terms, phrase bank, trainer (number +
noun, comparatives, i mo + job, dúirt sé go/nach), "Cén cheist?" drill, 3 practice tasks. localStorage prefix `ga2-`.

## Topic 3 contents

Syllabus 3.1-3.5 read with pdf.js (printed pp. 19-21; Spriocanna and the intro sentence quoted verbatim; HL topic 8
"An Ghaeilge" list from p. 44). Labs: Comharthaí (20 bilingual signs, pick the meaning, read signs line up on a street) ·
Na meáin (hours a week of TG4 / RnaG / Raidió na Life & Rí-Rá / podcasts with uair + h/urú, programme type + opinion
phrases, simulated class survey of hours v confidence with a least-squares line) · Díospóireacht (12 arguments sorted
for/against compulsory Irish, stance slider writes the opening of a debate speech) · An Ghaeltacht (sketch map of 10
Gaeltacht areas by dialect, i + urú place forms, booking with personal numbers: don triúr againn, oíche counts) ·
Teangacha eile (Celtic family tree with 10 words in Irish, Scottish Gaelic, Welsh, Breton; Q/P-Celtic; comparisons
níos fusa / níos deacra ná, aspect sentences) · An comhrá (5 questions). 3 goals, 31 flashcards, 19 quiz questions,
67 glossary terms, phrase bank, trainer (uair times/hours, personal numbers, níos … ná with languages, i + urú places),
"Cén cheist?" drill, 3 practice tasks. localStorage prefix `ga3-`. Built by splicing the Topic 2 page's shared code
with new data and labs.

## Run log

| Date | Built | Weekly usage before → after |
|------|-------|-----------------------------|
| 2026-11-18 | Topic 1 (asked for by the user) | 83% → about 85% |
| 2026-11-21 | Topic 2 Cúrsaí Scoile agus Oibre (5-hour scheduled run) | 32% → 34% (5-hour window 6% → 18%) |
| 2026-11-26 | Nothing (weekly run 2026-11-25/26: not reached. The run started at 21:44 (weekly 62%), spent its time on Physics 3.6 (left as a draft), and the computer slept past the weekly reset (2026-11-26 09:00), so it stopped without building.) | 62% → 3% (new week) |
| 2026-11-28 | Topic 3 An Ghaeilge Timpeall Orainn (5-hour scheduled run, started 12:25). preview_start "studysite" declined (unattended), so checks ran with headless Edge (375 px and 1280 px iframes, dark and light: every view and lab, scrollWidth 360-375/375 and 1265/1280, no errors, no zero-size canvases; 40 trainer questions per type checked for 4 distinct options with the answer present; canvas montage reviewed; fixed: tree letter highlight invisible in dark mode, An Rinn dot off the coastline, place-name trainer with only 3 options). Also fixed Topic 2: its Labs tab opened blank (default lab id was Topic 1's). Second page not started: 5-hour window at 42% after this page. | 5% → 11% (5-hour window 1% → 42%) |
