# Course plan and progress

Build order (Strand 2 first because 2.3 is done, then the other strands). One page per section.
Status: done / in progress / todo. Add the date and file name when a section is finished.

| # | Section | File | Status |
|---|---------|------|--------|
| 1 | 2.3 Wave behaviour: refraction & lenses | refraction-lenses.html | done (2026-11-01) |
| 2 | 2.4 Electromagnetic energy | s2-4-electromagnetic-energy.html | done (2026-11-04) |
| 3 | 2.5 Sound energy | s2-5-sound-energy.html | done (2026-11-04) |
| 4 | 2.6 Principle of superposition | s2-6-superposition.html | done (2026-11-08) |
| 5 | 2.7 Wave effects (Doppler) | s2-7-doppler.html | done (2026-11-01, built on request) |
| 6 | 2.1 Heat energy & temperature | s2-1-heat.html | done (2026-11-09) |
| 7 | 2.2 Travelling waves | s2-2-travelling-waves.html | done (2026-11-09) |
| 8 | 1.1 Particle motion in a straight line | s1-1-motion.html | done (2026-11-10) |
| 9 | 1.2 Forces acting on a particle | s1-2-forces.html | done (2026-11-10) |
| 10 | 1.3 Stretching & compressing | s1-3-hookes-law.html | done (2026-11-11) |
| 11 | 1.4 Work-energy model | s1-4-work-energy.html | done (2026-11-11) |
| 12 | 1.5 Gravitational fields | s1-5-gravity.html | done (2026-11-12) |
| 13 | 1.6 Uniform circular motion | s1-6-circular-motion.html | done (2026-11-12) |
| 14 | 3.1 Charge interactions | s3-1-charge.html | done (2026-11-13) |
| 15 | 3.2 Modelling electric fields | s3-2-electric-fields.html | done (2026-11-13) |
| 16 | 3.3 Electric circuits | s3-3-circuits.html | done (2026-11-14) |
| 17 | 3.4 Magnetic fields | s3-4-magnetic-fields.html | done (2026-11-20) |
| 18 | 3.5 Force on a current-carrying conductor | s3-5-motor-effect.html | done (2026-11-22) |
| 19 | 3.6 Induction & the generator | s3-6-induction.html | todo (next) |
| 20 | 4.1 The electron | s4-1-electron.html | todo |
| 21 | 4.2 Photoelectric effect & X-rays | s4-2-photoelectric.html | todo |
| 22 | 4.3 Early models of the atom | s4-3-atom.html | todo |
| 23 | 4.4 Radioactivity | s4-4-radioactivity.html | todo |
| 24 | 4.5 Mass-energy equivalence | s4-5-mass-energy.html | todo |
| 25 | 4.6 Nuclear energy | s4-6-nuclear-energy.html | todo |

`index.html` is the course hub (built 2026-11-04). When a section is built, add its file and a
one-line summary to the `STRANDS` array in index.html's script.

## Credit policy for automatic build runs

- Plan: Claude Pro. Weekly limit resets Thursdays around 09:00 (Irish time, GMT in winter). Check the
  live reset time with the usage tool; it can move.
- Build only when the weekly reset is less than 24 hours away (credit would otherwise expire unused)
  and weekly usage is at or below 70%.
- Re-check usage after each section. Stop when weekly usage reaches 85%, the 5-hour window reaches 80%,
  or 2 sections have been built in this run.
- Never build after the reset has passed (that is new credit the user needs for other work).
- A rough cost observed: building 2.3 with several rounds of changes took about 8% of the weekly limit.
  A new section from the template is expected to take about 3-5%.

## Run log

- 2026-11-01: 2.3 finished (Overview, Learn, 6 labs, mind map, infographics, 29 flashcards, 16 quiz
  questions, exam prep, 61-term glossary, formulae). Weekly usage after this: about 8%.
- 2026-11-01: 2.7 Doppler built on the user's request (6 topics/labs incl. siren sound via Web Audio,
  hidden-value experiment finding f and c from 1/f′ vs u, red shift, speed gun; 29 flashcards,
  16 quiz questions, 7 trainer types, "higher/lower/same" drill, 3 long questions, 50-term glossary).
  Sidebar link added to the 2.3 page. Template notes: the head/CSS (lines 1-393 of refraction-lenses.html)
  is copied verbatim; only the body and script change. Sidebar links use `<li class="link"><a …>`.
  Cost: weekly usage went from about 8% to 17%, so about 9% for one full section (more than the 3-5%
  first estimated). Budget runs with that figure.
- 2026-11-04 (scheduled run): 2.4 built as s2-4-electromagnetic-energy.html (6 topics/labs: spectrum
  explorer, sorting challenge, photon-vs-atom ionising sim, prism dispersion with Cauchy n(λ), lamp
  inverse-square experiment fitting I vs 1/d² to find P, Sun/seasons clear-sky irradiance model; 33
  flashcards, 18 quiz questions, 8 trainer types, "ionising or not?" drill, 3 long questions, 58-term
  glossary). Also built index.html (course hub) and added 2.4 + "Course home" links to the 2.3 and 2.7
  sidebars. Weekly usage 48% → 53%; 5-hour window 1% → 43%. Note: preview_start "page" was declined
  in the unattended run, so checks ran by opening the files directly (file://) in the browser pane.
- 2026-11-04 (same run): 2.5 built as s2-5-sound-energy.html (6 topics/labs: bell jar with pump and
  fading bell sound, longitudinal particle model with pressure graph, two-speaker interference with
  sound, echo experiment fitting 2d vs t with stopwatch vs datalogger, oscilloscope with Web Audio tone,
  ultrasound pulse-echo scanner and sonar with depth cursor; 30 flashcards, 18 quiz questions, 9
  trainer types, random "read the traces" drill, 3 long questions, 54-term glossary). Sidebar links
  added to every page and the hub. Weekly usage 53% → 56%; 5-hour window 43% → 59%. Stopped: two
  sections built this run. Cost per section this run: about 3-5% weekly, but about 16-42% of a
  5-hour window, so the 5-hour limit is the tighter constraint.

## Second automatic task (added 2026-11-08)

"courses-five-hour-build" runs every 5 hours (01:00, 06:00, 11:00, 16:00, 21:00) for both Physics and
Business. It starts a page only while the 5-hour window is below 40% (a page costs about 10-12% of it, so
runs end around the user's 50% limit) and weekly usage is below 60% (user's choice). Max 2 pages per run,
alternating subjects; rows being built are marked "in progress"; it skips Wednesday 21:00, which belongs
to the weekly "physics-course-weekly-build" task. Skipped runs add one line to the run log below.
- 2026-11-08 22:35-22:48 (5-hour run): 2.6 built as s2-6-superposition.html (6 topics/labs: two pulses
  superposing, two opposite travelling waves building a stationary wave, node/antinode finder with
  marker, harmonics with Web Audio, sonometer model with L/T/μ and driving-frequency resonance + paper
  rider, tuning-fork experiment fitting f vs 1/L to find a hidden μ; guitar-fret secondary data
  infographic; 31 flashcards, 19 quiz questions, 9 trainer types, "count the loops" drill, 3 long
  questions, 51-term glossary). Sidebar links added to every page and the hub. 5-hour 37% → 50%;
  weekly 19% → 21%. Stopped after one page (5-hour window above 40%). preview_start "page" was declined
  again; checks ran via file:// in the browser pane (375 px check in a 375 px iframe, pane was hidden).
- 2026-11-09 08:13-09:10 (5-hour run, 2 pages): first Business 1.2 (s1-2-forms-of-business.html + Business index.html
  hub; see the Business run log), then Physics 2.1 built as s2-1-heat.html (6 topics/labs: four thermometers
  calibrated at the fixed points with a straight-line scale (thermistor reads ~91 °C at a true 50 °C), heating
  materials with heat-loss toggle, find-c experiment on a hidden metal block with θ–t slope fit, heating curve of
  0.50 kg ice → steam with particle inset, particle models (conduction / convection / changes of state), house
  U-value calculator with boiler vs heat pump; 29 flashcards, 17 quiz questions, 11 trainer types, "read the
  heating curve" drill, 3 long questions, 50-term glossary). Sidebar links added to every page and the hub.
  5-hour 3% → 16% (after 1.2) → 27% (after 2.1); weekly 22% → 24% → 26%. Stopped: two pages built this run.
  preview_start was declined again; checks ran with headless Edge (injected probe script in a 375 px iframe,
  screenshots of each lab).
- 2026-11-09 12:11-13:25 (5-hour run, 2 pages): first Business 1.3 (s1-3-economy.html; see the Business run log), then
  Physics 2.2 built as s2-2-travelling-waves.html (6 topics/labs: bead rope / slinky / light with a marked particle
  showing energy not matter, transverse v longitudinal particle model with C/R + 10-wave sorter, wave anatomy with
  displacement–distance and displacement–time graphs, ripple-tank experiment with strobe, 5λ ruler and f v 1/λ fit
  for a hidden speed, amplitude-energy buoy lighting A² bulbs, Barton's pendulums with light/heavy damping and
  resonance curves; 6 real-life resonance cases for LO 2.2.2 incl. a "check the source" Tacoma Narrows card;
  28 flashcards, 17 quiz questions, 10 trainer types, "read the wave" drill, 3 long questions, 46-term glossary).
  Sidebar links added to every page and the hub. localStorage prefix s22-. 5-hour 0% → 13% (after 1.3) → 25%
  (after 2.2); weekly 26% → 27% → 29%. Stopped: two pages built this run. preview_start was declined again; checks
  ran with headless Edge (probe script, 375 px iframe: scrollWidth ≤ 370, no errors; canvas images reviewed).
- 2026-11-09 16:10 (5-hour run): 5-hour 45%, weekly 32%. 5-hour run skipped: 5-hour window not below 40%.
- 2026-11-10 07:56-08:31 (5-hour run, 2 pages): first Business 1.4 (s1-4-policy.html; see the Business run log), then Physics 1.1
  built as s1-1-motion.html (6 topics/labs: ticker-tape trolley with 4 motions incl. "there and back" (distance v displacement),
  three-stage graph builder with v–t area shading, s–t graph and random target to match, derive-the-equations graph for all three
  equations with live numbers, light-gate experiment (constant velocity or from rest, hidden v or a, fit s v t or s v t²), vector
  resolver + scalar/vector sorter, force-table experiment verifying vector addition (1D presets, F₃ v R graph); Bolt 2009 10 m splits
  as secondary data; 29 flashcards, 19 quiz questions, 12 trainer types, "read the graph" drill, 3 long questions, 47-term glossary).
  Sidebar links added to every page and the hub. localStorage prefix s11-. 5-hour 3% → 19% (after 1.4) → 33% (after 1.1); weekly
  32% → 34% → 36%. Stopped: two pages built this run. preview_start declined again; checks ran with headless Edge (probe script,
  375 px iframe: no horizontal scroll, no errors; canvas montages reviewed in light and dark).
- 2026-11-10 11:09-11:27 (5-hour run, 1 page): Business 1.5 built as s1-5-global.html (see the Business run log). 5-hour 34% → 48%;
  weekly 36% → 38%. Stopped: 5-hour window above 40% after the page. Next: Physics 1.2 (s1-2-forces.html).
- 2026-11-10 16:09-16:45 (5-hour run): Physics 1.2 built as s1-2-forces.html (6 topics/labs: box pulled by a rope with
  weight/normal/friction/tension and resultant (static v sliding friction, rope angle) + "name that force" sorter; F = ma
  experiment moving 20 g discs trolley→hanger with light gates, fit a v F, slope = 1/m, hidden trolley mass; lift model with
  7 stages incl. cable snaps (R − mg = ma, then suvat); pressure on brick faces, P = hρg tank with 4 liquids and an aluminium
  block on a spring balance (upthrust); density by displacement for a hidden material, fit m v V; air-track collisions
  (stick / partly bouncy / elastic, record p before v after) + 2D glancing collision with components; secondary data: two
  force-sensor traces (N3, impulse) and a 4-run air-track table; 30 flashcards, 19 quiz questions, 13 trainer types,
  "find the resultant" drill, 3 long questions, 57-term glossary). Sidebar links added to every page and the hub.
  localStorage prefix s12-. 5-hour 17% → 33%; weekly 40% → 42%. preview_start declined again; checks ran with headless Edge
  (probe script in a 375 px iframe: scrollWidth 360/375 on every view and lab, no errors, no zero-size canvases; lab
  screenshots reviewed). Probe/screenshot files kept in the session scratchpad, not the project.
- 2026-11-10 16:47-17:15 (same run, 2nd page): Business 2.1 built as s2-1-enterprise.html (see the Business run log).
  5-hour 33% → 44%; weekly 42% → 44%. Stopped: two pages built this run. Next: Business 2.2 (s2-2-ideas.html), then
  Physics 1.3 (s1-3-hookes-law.html).
- 2026-11-11 19:25-19:42 (5-hour run, 1 page): Physics 1.3 built as s1-3-hookes-law.html (6 topics/labs: stretch-or-compress
  spring with soft/medium/stiff k and coil-touching limit + "stretched, compressed or both?" sorter; Hooke's law experiment with
  pointer, metre stick, magnified scale, 100 g masses, hidden k and no-load reading, F v s fit; F = −ks horizontal spring with
  live F–s graph and "let go" oscillation; elastic limits for steel spring / copper wire / polythene / rubber band with P, E,
  unloading path and permanent extension; springs single / series / parallel; secondary data (car coil spring, bungee cord,
  copper wire, rubber band) fitting the first N points and locating the limit of proportionality; 6 solved spring cases,
  sample school results table; 28 flashcards, 17 quiz questions, 10 trainer types, "which spring is stiffer?" drill,
  3 long questions, 50-term glossary). Built from the 1.2 page's engine. Sidebar links added to every page and the hub.
  localStorage prefix s13-. 5-hour 1% → 17%; weekly 45% → 47%. Checks with headless Edge (probe: no errors, no zero-size
  canvases on any view or lab, scrollWidth 360 in a 375 px iframe; canvas montage reviewed; trainer answers checked).
  Stopped after one page although budget allowed a second: it was 19:42 on Wednesday, and a second page would have run into
  the 20:00-23:59 slot kept clear for the weekly task. Next: Business 2.2 (s2-2-ideas.html), then Physics 1.4.
- 2026-11-11 21:00-21:25 (weekly task, Wednesday): reset 11.9 h away, weekly 47%, 5-hour 18%, so built. Physics 1.4 built as
  s1-4-work-energy.html (6 topics/labs: crate pulled by a rope at an angle with friction, F cos θ and a "where the work goes" bar
  chart + "work done or not?" sorter; E_P/E_K explorer for a tennis ball / student / car + "which energy store?" sorter; spring
  launcher with shaded ½ks² triangle on the F–s graph and launch animation; stair-climb power experiment with timed trials table;
  conservation-of-energy experiment (dropped ball / trolley on a ramp with hidden friction / secondary-data table) fitting v² v h
  against 2g; roller coaster model with two hills, resistance slider and E_P/E_K/heat/total bars; 6 solved energy stories,
  trolley secondary data table; 28 flashcards, 19 quiz questions, 12 trainer types, "which has more kinetic energy?" drill,
  3 long questions, 54-term glossary). Spec text read with pdf.js (1.4 content bullets are mostly equations: W = Fs, E_P = mgh,
  E_K = ½mv², P = W/t, E_P = ½ks², conservation of energy; LO 1.4.3 repeats 1.3.3's wording in the spec). Sidebar links added
  to every page and the hub. localStorage prefix s14-. Also fixed s1-3-hookes-law.html, whose overview "Six topics" cards
  never rendered (missing topicCards line). 5-hour 18% → 35%; weekly 47% → 50%. preview_start declined again; checks ran with
  headless Edge (375 px iframe probe: scrollWidth 360/375, no errors, no zero-size canvases; lab/infographic screenshots reviewed).
- 2026-11-11 21:27-21:55 (same weekly run, 2nd page): Business 2.2 built as s2-2-ideas.html (see the Business run log).
  5-hour 35% → 47%; weekly 50% → 51%. Stopped: two pages built this run. Next: Physics 1.5 (s1-5-gravity.html), then
  Business 2.3 (s2-3-planning.html).
- 2026-11-12 01:10 (5-hour run): 5-hour 4%, weekly 59%. 5-hour run skipped: weekly usage 59% is just under the 60% start limit, but one page (recently 1-3% weekly) would take it past 60%, which the task forbids. Weekly resets 2026-11-12 09:00. Next: Physics 1.5 (s1-5-gravity.html).
- 2026-11-12 06:10 (5-hour run): 5-hour 5%, weekly 68%. 5-hour run skipped: weekly usage not below 60%. Weekly resets 2026-11-12 09:00. Next: Physics 1.5 (s1-5-gravity.html).
- 2026-11-12 11:10-11:32 (5-hour run, 1st page; weekly limit had reset at 09:00): Physics 1.5 built as s1-5-gravity.html (6 topics/labs:
  free-fall experiment with electromagnet/trapdoor timer on Earth/Moon/Mars/mystery world, fitting s v t² (slope ½g); pendulum
  experiment timing 20 swings with reaction-time error, fitting T² v l (g = 4π²/slope); newton balance on four worlds with "your
  weight" bars + "mass or weight?" sorter; universal gravitation with 4 pairs and m₁/m₂/d multipliers plus F v d curve; g at any point
  around Moon/Mars/Earth/Jupiter up to r = 7R with ISS/GPS/geostationary presets and g v r graph; escape-velocity launcher (10-130% of
  vₑ, energy-based max height); secondary data for all four models of g (free fall, pendulum, F/m, g v 1/r² giving M of the Earth)
  for LO 1.5.1; worlds table; 28 flashcards, 18 quiz questions, 11 trainer types, "what happens to the force?" drill, 3 long
  questions, 50-term glossary). Spec read with pdf.js: content "mathematical models for g" and "Newton's law of Universal Gravitation
  as an inverse square law"; LOs 1.5.1-1.5.3; equations g = 4π²l/T², 2s/t², GM/R², F/m (garbled in the PDF, read as F/m),
  F = Gm₁m₂/d², vₑ = √(2GM/r). Sidebar links added to every page and the hub. localStorage prefix s15-. 5-hour 0% → 16%;
  weekly 3% → 5%. preview_start declined again; checks ran with headless Edge (probe: no errors; scrollWidth 360 in a 375 px iframe
  on every view and lab; no zero-size canvases; canvas montage with reduced motion reviewed; trainer solutions printed and checked).
  Test files moved to the session scratchpad.
- 2026-11-12 11:34-12:00 (same 5-hour run, 2nd page): Business 2.3 built as s2-3-planning.html (see the Business run log).
  5-hour 16% → 28%; weekly 5% → 7%. Stopped: two pages built this run. Next: Business 2.4 (s2-4-target-market.html), then
  Physics 1.6 (s1-6-circular-motion.html).
- 2026-11-12 16:11 (5-hour run): 5-hour ?%, weekly ?%. 5-hour run skipped: usage tool returned "unavailable" (asked twice). Next is still
  Business 2.4 (s2-4-target-market.html), then Physics 1.6 (s1-6-circular-motion.html).
- 2026-11-12 21:12-21:25 (5-hour run, 1st page): Business 2.4 built as s2-4-target-market.html (see the Business run log).
  5-hour 1% -> 14%; weekly 26% -> 28%. Budget still allows a second page: Physics 1.6 (s1-6-circular-motion.html) started.
- 2026-11-12 21:26-21:39 (same 5-hour run, 2nd page): Physics 1.6 built as s1-6-circular-motion.html (6 topics/labs: top-view ball on a
  string with m/v/r sliders, v and F arrows, "cut the string" tangent motion and a 60 N snapping limit + "what provides the centripetal
  force?" sorter (tension / friction / gravity / normal reaction); spinning disc with ω slider, angle in radians and degrees, inner and
  outer points (v = ωr, F = mω²r); whirling-bung experiment with hanging masses 50-300 g, reaction-time error on 10T, hidden bung mass,
  F v v² fit (slope m/r); Kepler's third law from real secondary data (6 planets, Jupiter's 4 large moons, 5 Earth satellites) with
  T²/R³ column, T² v R³ fit and central mass (Sun 2.0 × 10³⁰, Jupiter 1.90 × 10²⁷, Earth 5.98 × 10²⁴ kg); Newton's cannon from 400 km
  (step-by-step gravity paths: falls back / circle / ellipse / escapes, gravity v mv²/r readouts); satellite orbits beside the spinning
  Earth (ISS, polar, GPS, geostationary presets, v, T, g) + "which orbit suits the job?" sorter; infographics: three Kepler data sets
  with graphs, orbit table incl. the Moon test (2.0 × 10²⁰ N needed v 1.98 × 10²⁰ N from gravity); 28 flashcards, 19 quiz questions,
  11 trainer types, "what happens to the force?" drill (F ∝ mv²/r), 3 long questions, 52-term glossary). Spec read with pdf.js
  (content: centripetal force, gravity meets the centripetal requirement for planetary motion, satellite orbits and uses; LOs 1.6.1-1.6.4;
  equations F = mv²/r, T² = 4π²R³/GM). Built from the 1.5 page's engine; fixed in the new page only: duplicated <main> and the Labs tab
  opening with no lab shown. Sidebar links added to every page and the hub. localStorage prefix s16-. 5-hour 14% -> 34%;
  weekly 28% -> 30%. preview_start declined; checks ran with headless Edge (375 px iframe probe: scrollWidth 360/375 on every view and
  lab, no errors, no zero-size canvases; bung experiment run with reduced motion recovered the hidden 40 g mass; orbit, Kepler and trainer
  values checked by hand; screenshots reviewed, cannon path labels replaced by a legend and the ellipse/circle classification fixed).
  Stopped: two pages built this run. Next: Business 2.5 (s2-5-operations-finance.html), then Physics 3.1 (s3-1-charge.html).
- 2026-11-13 11:10-11:50 (5-hour run, 1 page): Business 2.5 was "in progress" (started 09:37 by another run), so Physics 3.1 was built as
  s3-1-charge.html (6 topics/labs: atom/ion builder Z 1-20 with shells and net charge in e and C + free/bound sorter; charging by
  friction with a 12-material triboelectric series, simulated coulombmeter readings (±5%) for 1-20 strokes, fit of |Q| v strokes ->
  nC per stroke and electrons per stroke, rod + cloth totals ≈ 0 (conservation); two hanging conducting balls with charges −30..+30 nC,
  polarisation of a neutral ball, auto-sharing when they swing into contact, "touch" and "earth B" buttons + attract/repel/no-force
  sorter; gold-leaf electroscope earthed through 12 materials (leak time constants) + conductor/insulator sorter; single-sphere
  induction in 4 steps for a − or + rod with electron flow along the earth wire + step-order sorter; charge distribution on a sphere,
  egg, pointed and hollow-can conductor or a rubbed insulator, proof-plane readings A-E with a bar chart). 30 flashcards, 18 quiz
  questions, 6 trainer types (Q = ne, n = Q/e, two spheres touch, sharing in turn, mass of electrons, ion charge), "attract, repel or
  no force?" drill, 3 long questions, 54-term glossary, fact sheet (spec lists no 3.1 equations). Spec read with pdf.js (3.1 content
  bullets and LOs 3.1.1-3.1.4 quoted verbatim). Built from the 1.6 page's engine; localStorage prefix s31-. Sidebar links added to
  every page and the hub. preview_start declined; checks ran in the built-in browser on the file at 375 px: no console errors, all 10
  views and 6 labs render, no zero-size canvases, scrollWidth 375/375; friction fit (3.22 v 3.15 nC/stroke), electroscope, induction,
  ball sharing and probe readings exercised; quiz answers and all trainer types checked by hand; screenshots reviewed (fixed rod
  symbol crowding, ball labels and hero text overlap on phones). 5-hour 23% -> 41%; weekly 37% -> 39%. Stopped: 5-hour window ≥ 40%.
  Next: Business 2.5 (if the other run left it unfinished) or Business 2.6, then Physics 3.2 (s3-2-electric-fields.html).
- 2026-11-13 16:12-16:40 (5-hour run, 2 pages): first Business 2.5 (s2-5-operations-finance.html; took over a row left "in progress" since 09:37, see the Business run log), then Physics 3.2 built as s3-2-electric-fields.html (6 topics/labs: Coulomb's law experiment with simulated balance readings ±3% at chosen distances, table, F v 1/d² fit through the origin -> 1/4πε₀ and ε₀; probe a point charge's field with a test charge showing E = F/q is independent of q; field lines traced from the computed field for six arrangements (single +, single −, dipole, + +, +2 −1, parallel plates as rows of point charges with edge effect) with tap-to-probe strength/direction + true/false sorter on field-line rules; vector addition of the fields of two charges at a movable point P with presets (midpoints, perpendicular bisector, outside); work and potential between parallel plates (F = qE, W = Fs, V = W/q, potential graph); ink-jet drop deflection game (F = qE, a = F/m, landing point, random reachable targets)). 30 flashcards, 18 quiz questions, 10 trainer types (Coulomb force, distance, charge, inverse-square ratio, E = F/q, point-charge field, F = qE, V = W/q, W = qV, field at a midpoint), "what happens to the force?" drill (14 scenarios), 3 long questions, 42-term glossary, formula sheet. Spec read with pdf.js (3.2 content bullets, LOs 3.2.1-3.2.4 verbatim, equations F = Q₁Q₂/4πε₀d², V = W/q, E = F/q, F = qE). Built from the 3.1 page's engine; localStorage prefix s32-. Sidebar links added to every page and the hub. 5-hour 1% -> 35% for both pages (Business took 1% -> 14%); weekly 40% -> 44%. preview_start declined; checks ran with headless Edge (probe in a 375 px iframe: scrollWidth 360/375 on every view and lab, no errors, no zero-size canvases; Coulomb fit gave ε₀ ≈ 9.0 × 10⁻¹²; all trainer types and quiz answers checked by hand; canvas montage reviewed, infographic labels fixed). An assembly slip (missing closing script tag) was caught by the headless test and fixed before publishing. Stopped: two pages built this run. Next: Business 2.6 (s2-6-growth.html), then Physics 3.3 (s3-3-circuits.html).
- 2026-11-14 22:07-23:05 (5-hour run, 2 pages): first Business 2.6 (s2-6-growth.html; see the Business run log; 5-hour 1% -> 20%, weekly 45% -> 47%), then Physics 3.3 built as s3-3-circuits.html (6 topics/labs: charge loop with moving charges, conventional current v electron flow, I = Q/t, W = QV and electron count; I–V experiment for a 10 Ω wire, a 6 V 0.3 A filament bulb and a silicon diode (circuit with voltmeter, ammeter, reversible variable supply; simulated readings ±2%, table, graph, fit through the origin -> R for the wire); R = ρL/A wire explorer (copper, constantan, nichrome) + water-bath experiment for a copper coil (linear fit -> R0 and α) and an NTC thermistor; series / parallel / R1 + (R2 ∥ R3) circuit with per-resistor current and pd, charge and energy conservation checks and a simulated ohmmeter table v formula; mains appliance lab (current, fuse, V²/P, kWh cost) with fault / earth / RCD / person toggles and outcomes; p-n junction with bias slider and depletion layer + LDR-transistor night light with switching point). 30 flashcards, 20 quiz questions, 12 trainer types (I = Q/t, electrons, V = W/Q, V = IR, R = ρL/A, resistivity, series, parallel, mixed circuit, P = VI with fuse, W = I²Rt, kWh cost), "name that symbol" drill (15 circuit symbols drawn on canvas), 3 long questions, 56-term glossary, formula sheet. Spec read with pdf.js (pp. 23-24: LOs 3.3.1-3.3.8 verbatim, all content bullets, equations I = Q/t, V = W/Q, W = I²Rt, P = I²R, P = VI, V = IR, R = ρL/A, series and parallel). Built from the 3.2 page engine; localStorage prefix s33-. Sidebar links added to every page and the hub. 5-hour 20% -> 38%; weekly 47% -> 50%. preview_start declined; checks ran with headless Edge (page in a 375 px srcdoc iframe: no errors, no zero-size canvases, scrollWidth 360/375 on every view and lab; all lab readouts and every trainer type checked by hand; canvas montage reviewed). Fixed during checks: a 3000 W heater (13.04 A, over a 13 A fuse) changed to 2500 W; overlapping infographic labels; hidden person in the mains fault picture. Stopped: two pages built this run. Next: Business 2.7 (s2-7-risk.html), then Physics 3.4 (s3-4-magnetic-fields.html).
- 2026-11-15 01:10 (5-hour run): 5-hour 74%, weekly 54%. 5-hour run skipped: 5-hour window at or above 40%.
- 2026-11-15 06:10 (5-hour run): 5-hour 43%, weekly 60%. 5-hour run skipped: 5-hour window at or above 40% and weekly at or above 60%.
- 2026-11-15 12:58 (5-hour run): 5-hour 1%, weekly 61%. 5-hour run skipped: weekly at or above 60%.
- 2026-11-15 16:09 (5-hour run): 5-hour 17%, weekly 63%. 5-hour run skipped: weekly at or above 60%.
- 2026-11-15 21:09 (5-hour run): 5-hour 2%, weekly 66%. 5-hour run skipped: weekly at or above 60%.
- 2026-11-16 10:34 (5-hour run): 5-hour 3%, weekly 66%. 5-hour run skipped: weekly at or above 60%. Weekly resets 2026-11-19 09:00. Next: Business 2.7 (s2-7-risk.html), then Physics 3.4 (s3-4-magnetic-fields.html).
- 2026-11-16 11:10 (5-hour 11%, weekly 67%): 5-hour run skipped: weekly usage is above the 60% limit.
- 2026-11-16 21:48 (5-hour run): 5-hour 1%, weekly 68%. 5-hour run skipped: weekly usage is above the 60% cap. Next still: Business 2.7 (s2-7-risk.html), then Physics 3.4 (s3-4-magnetic-fields.html).
- 2026-11-17 03:43 (5-hour run): 5-hour 1%, weekly 73%. 5-hour run skipped: weekly usage is above the 60% cap. Weekly resets 2026-11-19 09:00. Next still: Business 2.7 (s2-7-risk.html), then Physics 3.4 (s3-4-magnetic-fields.html).
- 2026-11-17 06:32 (5-hour run): 5-hour 2%, weekly 73%. 5-hour run skipped: weekly usage is above the 60% cap. Weekly resets 2026-11-19 09:00.
- 2026-11-17 19:44: 5-hour 1%, weekly 74%. 5-hour run skipped: weekly usage is above the 60% limit.
- 2026-11-17 21:10 (5-hour run): 5-hour 19%, weekly 77%. 5-hour run skipped: weekly usage is above 60%.
- 2026-11-18 01:10 (5-hour run): 5-hour 1%, weekly 77%. 5-hour run skipped: weekly usage is above the 60% cap. Weekly resets 2026-11-19 09:00.
- 2026-11-18 06:10 (5-hour run): 5-hour 1%, weekly 77%. 5-hour run skipped: weekly usage is above the 60% cap. Weekly resets 2026-11-19 09:00.
- 2026-11-18 17:17 (5-hour run): 5-hour 1%, weekly 79%. 5-hour run skipped: weekly usage is above the 60% cap. Weekly resets 2026-11-19 09:00.
- 2026-11-18 21:02 (weekly run): 5-hour 29%, weekly 83%. Weekly build skipped: weekly usage is above the 70% limit. Weekly resets 2026-11-19 09:00.
- 2026-11-19 01:09 (5-hour run): 5-hour 2%, weekly 89%. 5-hour run skipped: weekly usage is above the 60% cap. Weekly resets 2026-11-19 09:00.
- 2026-11-19 06:09 (5-hour run): 5-hour 2%, weekly 89%. 5-hour run skipped: weekly usage is above the 60% cap. Weekly resets 2026-11-19 09:00.
- 2026-11-19 11:09-11:45 (5-hour run, 1 page): 5-hour 30%, weekly 3% at start. Business 2.7 built as s2-7-risk.html (see the Business run log). 5-hour 30% -> 51%; weekly 3% -> 6%. Stopped: 5-hour window above 40%. Next: Physics 3.4 (s3-4-magnetic-fields.html), then Business 3.1 (s3-1-leading.html).
- 2026-11-20 18:46-19:10 (5-hour run, page 1): 5-hour 1%, weekly 11% at start. Physics 3.4 built as s3-4-magnetic-fields.html (6 topics/labs: field lines for a bar magnet, unlike poles, like poles (neutral point) and a horseshoe magnet from a point-pole model, with a compass-grid view, tap-to-place compass with relative strength, and a 10-item true/false sorter; Hall probe experiment round a long straight wire (current, direction, distance; simulated readings ±3%, table, B against 1/r fit through the origin -> μ₀ ≈ 1.27 × 10⁻⁶); solenoid cross-section with field lines drawn as contours, current, turns, direction, air or soft iron core (×200 then saturation near 1.6 T), paper clips held, B–I experiment (air: fit -> μ₀; iron: saturation curve); two parallel currents with combined field, neutral point, attract/repel and F/L; electron, proton and alpha in a uniform field with F = Bqv, r = mv/Bq and an animated circular path; scrapyard crane with soft iron v steel core (steel keeps its magnetism) + 12-device permanent/electromagnet sorter). 31 flashcards, 19 quiz questions, 9 trainer types (F = Bqv, find v, find B, radius, acceleration, wire ratios, B = μ₀I/2πr, B = μ₀nI, iron core), "Which way?" drill (grip rule for a wire, N end of a solenoid, Fleming's left-hand rule for protons and electrons), 3 long questions, 47-term glossary, formula sheet, field-strength table and 8 real-life cards for LO 3.4.2. Spec read with pdf.js (3.4 content bullets and LOs 3.4.1-3.4.2 verbatim; equation F = Bqv). Built from the 3.3 page engine with a small assembly script; localStorage prefix s34-. Sidebar links added to every page and the hub; `node tools/site.js` run. preview_start "studysite" declined (unattended); checks ran with headless Edge (375 px iframe: scrollWidth 360/375 on every view and lab, no errors, no zero-size canvases; all trainer types, drill answers, quiz answers and lab readouts checked by hand; screenshots of every lab reviewed; magnet field-line tracing extended so lines loop back). 5-hour 1% -> 21%; weekly 11% -> 13%. Next: Physics 3.5 (s3-5-motor-effect.html); for the rotation, Business 3.1 is next.
- 2026-11-20 21:09 (5-hour run): 5-hour 75%, weekly 21%. 5-hour run skipped: 5-hour usage is above the 40% cap. 5-hour window resets 2026-11-20 23:40.
- 2026-11-21 11:10 (5-hour run): 5-hour 81%, weekly 31%. 5-hour run skipped: 5-hour usage is above the 40% cap. 5-hour window resets 2026-11-21 11:40.
- 2026-11-21 16:10-16:30 (5-hour run, page 1): 5-hour 6%, weekly 32% at start. Irish Topic 2 built as irish/t2-cursai-scoile-oibre.html (see the Irish course plan; Irish was the oldest subject in the rotation). Syllabus 2.1-2.4 read with pdf.js. preview_start "studysite" declined (unattended); checks ran with headless Edge (375 px iframe: scrollWidth 360/375 on every view and lab, no errors, no zero-size canvases; all 24 voicemail/reported-speech outputs, trainer samples, CAO totals and quiz answers checked by hand; canvas montage reviewed). Topic 1 sidebar corrected to the syllabus topic names and linked. 5-hour 6% -> 18%; weekly 32% -> 34%.
- 2026-11-21 16:33-16:50 (5-hour run, page 2): Business 3.1 built as business/s3-1-leading.html (see the Business run log; Business and Maths were tied as oldest, Business first in subject order). Spec read with pdf.js; headless Edge checks passed. 5-hour 18% -> 30%; weekly 34% -> 35%. Stopped: two pages built this run (5-hour 6% -> 30%, weekly 32% -> 35% for the whole run). Next in the rotation: Maths (1.2), then Physics 3.5, Applied Maths.
- 2026-11-22 10:02-10:20 (5-hour run, 1 page): 5-hour 4%, weekly 36% at start. Maths was the oldest subject (last Done 2026-11-19), so Maths 1.2 was built as maths/s1-2-probability.html (see the Maths course plan). Spec read with pdf.js (printed p. 17 OL/HL outcomes for 1.2, p. 16 FL description). Template: head/CSS and shared body/script from maths/s1-1-counting.html, page data and 6 labs new; localStorage prefix m12-. preview_start "studysite" was declined, so checks ran with headless Edge (375 px and 1280 px iframes: every view and lab, scrollWidth 360/375, no zero-size canvases, no errors; all 9 trainer types printed and checked by hand; quiz and long-question answers checked by hand; canvas montage reviewed, label overlaps fixed). Sidebar link added to 1.1; tools/site.js run. 5-hour 4% -> 24%; weekly 36% -> 39%. Second page not started: the first took about 20% of the 5-hour window, so another would likely pass the 50% ceiling. Next in rotation: Physics, Applied Maths or Maths Enrichment (all last Done 2026-11-20).
- 2026-11-22 11:10-21:35 (5-hour run, 1 page): 5-hour 30%, weekly 39% at start. Physics was the oldest subject (last Done 2026-11-20 19:08), so Physics 3.5 was built as s3-5-motor-effect.html (6 topics/labs: current balance with a U-magnet on a top-pan balance, wire end on (vary I or B, simulated readings ±3% to 0.01 g, table, F against I or B fit through the origin -> B from slope = BL, or slope = IL); catapult field drawn as contours of the magnet's uniform field plus the wire's field (magnet only / wire only / combined, current and magnet reversible) + 10-item true/false sorter; top view of a wire at any angle θ to the field with the force into or out of the page and an F against θ curve (F = BIL sin θ, labelled as an extension of F = BIL); end view of a coil with forces F = NBIL, turning effect F × width × cos(angle), graph, and "let go" so it rocks and settles across the field; DC motor with split-ring commutator and brushes v slip rings (current in side A shown, model rpm, reverse supply); moving-coil loudspeaker with ac / dc / off, slowed frequency, cone motion and sound wavefronts + 12-device "motor effect or not?" sorter). 31 flashcards, 20 quiz questions, 10 trainer types (F = BIL, find I, B, L, balance reading, F = NBIL, couple on a coil, ratio changes, rod on rails, F = BIL sin θ), "Which way?" drill (end-on wire, top view, coil rotation), 3 long questions, 48-term glossary, formula sheet, F = BIL table and 8 uses cards. Spec read with pdf.js (3.5 content bullets and LOs 3.5.1-3.5.3 verbatim; equation F = BIL). Built from the 3.4 page engine with an assembly script; localStorage prefix s35-. Sidebar links added to every page and the hub; `node tools/site.js` run. preview_start "studysite" declined (unattended); checks ran with headless Edge (375 px and 1280 px iframes: scrollWidth 360/375 and 1265/1280 on every view and lab, no errors, no zero-size canvases; all trainer types, drill answers, quiz answers and long-question numbers checked by hand; coil and motor dynamics checked in node because headless animation barely runs; screenshots of every canvas reviewed). Fixed during checks: the reaction-force arrow on the magnet pointed the wrong way; overlapping labels on the balance, angle, motor and infographic pictures. The machine paused during the run, so it ended in a later 5-hour window: 5-hour 20% (new window), weekly 39% -> 43%. Second page not started: the run already spanned the 5-hour windows and used about 4% of the weekly limit. Next: Physics 3.6 (s3-6-induction.html); for the rotation, Applied Maths or Maths Enrichment (last Done 2026-11-20).
- 2026-11-22 21:37-21:55 (5-hour run, 1 page): 5-hour 22%, weekly 43% at start. Applied Maths was the oldest subject in the rotation (last Done 2026-11-20; Maths Enrichment is not in the scheduled tasks), so Applied Maths 2.3 was built as applied-maths/s2-3-minimum-spanning-trees.html (see the Applied Maths course plan). Spec read with pdf.js (p17: both MST outcomes and the Algorithms block, quoted verbatim). preview_start "studysite" declined (unattended); checks ran with headless Edge (375 px iframe: scrollWidth 360/375 on every view and lab; 1280 px; no errors, no zero-size canvases; trainer solutions, drill feedback, table-click feedback, quiz answers and long-question numbers checked by hand; canvas montage reviewed). 5-hour 22% -> 36%; weekly 43% -> 45%. Second page not started: another page (~14 points) would take the 5-hour window past the 50% goal.
