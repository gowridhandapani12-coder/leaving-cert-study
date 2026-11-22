# Applied Maths course plan

One page per topic, built in this order. Numbering is this course's (the spec has no sub-topic numbers).

| # | Topic | File | Status |
|---|-------|------|--------|
| 1.1 | Mathematical modelling: the modelling cycle | `s1-1-mathematical-modelling.html` | Done (2026-11-08) |
| 2.1 | Networks and terminology | `s2-1-networks.html` | Done (2026-11-17) |
| 2.2 | Matrices and adjacency | `s2-2-adjacency-matrices.html` | Done (2026-11-20) |
| 2.3 | Minimum spanning trees (Kruskal, Prim) | `s2-3-minimum-spanning-trees.html` | Done (2026-11-22) |
| 2.4 | Shortest paths and dynamic programming (Dijkstra, Bellman) | | To do |
| 2.5 | Comparing algorithms (greedy vs dynamic programming) | | To do |
| 2.6 | Project scheduling (critical path, floats) | | To do |
| 3.1 | Motion in a straight line (kinematics, calculus) | | To do |
| 3.2 | Vectors and projectiles | `s3-2-vectors-projectiles.html` | Done (2026-11-18, built ahead of order at the user's request) |
| 3.3 | Forces and Newton's laws | | To do |
| 3.4 | Momentum and collisions | | To do |
| 3.5 | Friction, connected masses and drag | | To do |
| 3.6 | Work and energy | | To do |
| 3.7 | Circular motion | | To do |
| 3.8 | Dimensional analysis | | To do |
| 4.1 | Recurrence relations | | To do |
| 4.2 | Difference equations in context | | To do |
| 4.3 | Differential equations | | To do |

Later: a hub `index.html` linking all built pages; then update every page's sidebar to link to it.

## 1.1 contents

Labs: Walk the cycle (3 problems × 5 stages) · Fermi estimate with ±20% tornado chart · Test the assumption
(falling shuttlecock/tennis ball, no drag vs drag ∝ v vs ∝ v², RMS error) · Collect & fit (bounce data,
linear/quadratic/exponential least squares, R²) · Spreadsheet model (canteen queue difference equation,
steady vs rush arrivals, simulated measured count) · Refine & iterate (ticket price: revenue → seat limit →
profit, ±10% sensitivity). 16 learning outcomes, 29 flashcards, 16 quiz questions, 58 glossary terms,
7 trainer types, 14-item stage drill, 3 long questions.

## 2.1 contents

Labs: Build a network (tap to add/remove edges; degrees, components, cycle, handshake check) · Collect & fit
(random networks, Σ degrees vs E, least-squares line → gradient 2) · Route planner (weighted depots A–G; walk/path/cycle,
length, shortest via Dijkstra) · Islands & bridges (close edges; components and bridges) · One-way streets
(directed; in/out degree, reachability, strongly connected) · Same network three ways (diagram, edge list, table;
redraw; directed toggle). 4 learning outcomes, 26 flashcards, 16 quiz questions, 46 glossary terms, 5 trainer types,
random "what kind of network?" drill, 3 long questions. Built from the 1.1 page with a splice script (shared code
copied from 1.1; only data, labs and text are new).

## 3.2 contents

Labs: Drag the vector (i, j, magnitude, direction, polar form) · Add & scale (nose to tail, scalar k) · Dot product
(angle, perpendicular test, projection) · r → v → a (projectile, circle and curve presets; vector derivatives) ·
Launcher (u, θ, animated flight, T/H/R, flag target, velocity components) · Collect & fit (range vs sin 2θ, line through
the origin, launch speed from the gradient). 7 learning outcomes (Particle motion in 2D block; Newton's laws in vector form
only for gravity here, full treatment in 3.3), 26 flashcards, 16 quiz questions, 45 glossary terms, 9 trainer types,
"which goes further?" drill, 3 long questions. g = 9.8 m/s², horizontal planes only, no air resistance.

## 2.2 contents

Labs: Graph → matrix (tap to add/remove edges; matrix with row and column sums, symmetry, total = 2E) · Matrix → graph (edit cells with mirroring, or a challenge: draw the graph of a mystery matrix and check it) · Directed graphs (five-person follow network; row = from, column = to; out/in-degrees as row/column sums) · Multiply by hand (2 × 2 and 3 × 3 step through row × column with working; 5 × 5 by computer with the n³ work count; swap to BA) · Powers count walks (A to A⁴, tap a cell to list the walks and animate one; collect & fit: trace(A²) against E gives gradient 2, trace(A³) = 6 × triangles) · Two-flight planner (illustrative six-airport network; A, A², A³ and A + A² for any pair; cancel routes). 4 learning outcomes (Matrices, matrix algebra and adjacency), 28 flashcards, 19 quiz questions, 41 glossary terms, 8 trainer types, "match the matrix" drill (undirected and directed, with transpose and one-edge distractors), 3 long questions with full matrices in the marking guides. Built from the 2.1 page with a splice script.

## 2.3 contents

Labs: Tree or not? (six vertices, nine possible edges; tap to switch; connected / cycle / tree readouts, cycle edges in red) · Beat the algorithm (seven villages, 12 weighted routes; pick a spanning tree, compare with the 33 km minimum; collect & fit: random networks, tree edges against n → gradient 1, intercept −1) · Kruskal step by step (sorted edge list with accept/reject and the cycle path; components coloured; seven villages or random weights) · Prim step by step (any start vertex; edges leaving the tree, cheapest dashed; random weights) · Prim on a table (distance table with crossed-out rows, numbered columns, circled entries; tap the next entry yourself with feedback on wrong taps; random tables) · Cable planner (cost per km slider, forced route, blocked route, add village H: same 33 km with one more village). 5 learning outcomes (2 MST + 3 from the "Algorithms" block, shared with 2.4/2.5), 28 flashcards, 18 quiz questions, 45 glossary terms, 6 trainer types (tree edges, edges left out, Kruskal MST length from a table, Prim third edge, network cost, forced link), "Which edge next?" drill (Kruskal or Prim part-way, cycle and non-adjacent traps), 3 long questions (Kruskal/Prim/blocked link; Prim on a table with costs; seven villages with forced CF and greedy v DP). Infographics: 5 uses, tree/spanning/minimum comparison, Cayley nⁿ⁻² table (labelled not on the course), history (Borůvka 1926, Kruskal 1956, Prim 1957/Jarník 1930, Spanning Tree Protocol 1985). Built from the 2.2 page with a splice script.

## Run log

| Date | Built | Weekly usage before → after |
|------|-------|-----------------------------|
| 2026-11-08 | 1.1 Mathematical modelling | before not recorded → 19% after (5-hour window 35%) |
| 2026-11-17 | 2.1 Networks and terminology (asked for by the user) | 75% → 76% (5-hour window 6% → 16%) |
| 2026-11-18 | 3.2 Vectors and projectiles (asked for by the user) | 78% → 79% (5-hour window 9% → 16%) |
| 2026-11-18 | Nothing (weekly run skipped: weekly 83%, above the 70% limit; 5-hour 29%) | 83% → 83% |
| 2026-11-20 | 2.2 Matrices and adjacency (5-hour scheduled run, 2nd page after Physics 3.4) | 13% → 18% (5-hour window 21% → 54%: over the 50% goal; the start was below the 40% cap) |
| 2026-11-22 | 2.3 Minimum spanning trees (5-hour scheduled run, 1 page) | 43% → 45% (5-hour window 22% → 36%) |
