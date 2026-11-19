# Leaving Cert Business interactive course

Interactive, visual study pages for Irish Leaving Certificate Business (5th/6th year), one page per
specification topic. Same design and page format as the sister Physics course in
`C:\Users\manos\OneDrive\Vamshileaving-cert-study\physics` (see its CLAUDE.md for the full format rules).

Course progress and build order: `COURSE-PLAN.md`. Update it whenever a topic is built.

Built so far: `s1-1-stakeholders.html` (1.1 Key stakeholders), `s1-2-forms-of-business.html` (1.2 Forms of business,
regulation and governance), `s1-3-economy.html` (1.3 Business and the economy), `s1-4-policy.html` (1.4 National and EU policy), `s1-5-global.html` (1.5 Irish business globally), `s2-1-enterprise.html` (2.1 Enterprise), `s2-2-ideas.html` (2.2 Idea development), `s2-3-planning.html` (2.3 Business planning), `s2-4-target-market.html` (2.4 The target market), `s2-5-operations-finance.html` (2.5 Operations and finance), `s2-6-growth.html` (2.6 Growth, development and expansion), `s2-7-risk.html` (2.7 Managing risk), plus the hub `index.html`. Sidebars have a "Course home" link (`.homelink`).

## Run it locally

```
node server.js
```
Then open http://localhost:5180. `/` serves `index.html` if it exists, otherwise `s1-1-stakeholders.html`.
The preview tool config is named "business" (in this folder's and the Physics folder's `.claude/launch.json`).

## The specification (source of truth)

- NCCA *Leaving Certificate Business Specification*, for introduction to 5th years in September 2025
  (published August 2024). Page: https://www.curriculumonline.ie/senior-cycle/senior-cycle-subjects/business/
  PDF path on that page: `/getmedia/e81ccca9-fdf5-42e9-a291-52e9549820c9/SC-Business-Spec-ENG.pdf`
- Read it the same way as Physics: open the curriculumonline page in the built-in browser, import pdf.js
  4.0.379 from cdnjs in `javascript_tool`, fetch the PDF (same origin), extract text per page.
  Key pages: strands p14–30, assessment p32–37, action verbs p38–39, glossary of terms p40–41.
- Structure: Unifying strand "Investigating Business" + 4 contextual strands. Cross-cutting themes:
  ethics and sustainability, entrepreneurial thinking, business and financial literacy, digital transformation.
  Topics (spec numbering):
  - 1 Exploring the Business Environment: 1 Key stakeholders · 2 Forms of business, regulation and
    governance · 3 Business and the economy · 4 National and EU policy · 5 Irish business globally ·
    6 Applying my learning
  - 2 Understanding Enterprise: 1 Enterprise · 2 Idea development · 3 Business planning · 4 The target
    market · 5 Operations and finance · 6 Growth, development and expansion · 7 Managing risk · 8 Applying
  - 3 Leading in Business: 1 Leading and managing an organisation · 2 Leading and managing people ·
    3 Communication · 4 Planning · 5 Applying
  - 4 Being Informed and Making Informed Decisions: 1 Informed consumer · 2 Informed financial decisions ·
    3 Informed employee (check the spec for any further topic)
- Assessment: written exam 60% (Higher/Ordinary) + Business Alive Investigative Study 40% (common brief,
  set by the SEC). No official papers exist yet: label exam-style questions as practice questions.
- Quote learning outcomes verbatim. Use the spec's action verbs (Appendix 1) for the "Action verbs" panel.

## Page format differences from Physics

- File name `s<strand>-<topic>-<slug>.html`. Head/CSS = lines 1–393 of `../physics/refraction-lenses.html`
  copied verbatim; only the body and script change.
- Last tab is labelled "Cheat sheet" (hash still `#formulae`).
- The "calculation trainer" is a business/financial-literacy numbers trainer (€, %, cent).
- The "predict" drill is topic-specific (1.1 uses "which box on the power–interest grid").
- Labs are interactive business simulations (sorters, scenario choices, negotiation, mapping) with
  canvas `draw*` functions reused in Learn and Infographics. Case studies and euro figures are illustrative
  and labelled as such.
- localStorage keys prefixed per topic (`b11-…`); theme/font keys are `bs-theme` / `bs-font`.

## Quality checks

Same as Physics: `node --check` the script, open the page, no console errors, every tab and lab has
sized canvases, no horizontal scroll at 375 px, check every quiz answer and trainer solution, update
COURSE-PLAN.md and sidebar links.

## Usage budget

The user is on the Pro plan and needs most of the weekly allowance for other work. A full topic page costs
about 9% of the weekly limit. Build only when the user asks, or with credit that would otherwise expire.
