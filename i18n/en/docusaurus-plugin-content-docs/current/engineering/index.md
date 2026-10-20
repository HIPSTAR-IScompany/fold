---
canonical_language: ja-JP
publication_batch: 2026-10-19
translation_status: reference-manuscript
---

# From FAM to implementation

FAM describes reusable semantic units with independent identities and connects them across contexts. A JSON filename alone does not make a record an infoton.

| Category | Responsibility distinguished by the source |
|---|---|
| OAE | An observation bound to an Observer, subject, revision, and rule |
| FAMLog | Time-ordered observations, actions, failures, and revisions |
| FAMJSON | A wire representation carrying a portable semantic unit |
| refFAM | Ways of seeing, asking, classifying, and testing, distinct from a database of approved facts |

FQuery handles queries and routes; IBD has storage and acquisition responsibilities. This page explains the source-to-implementation relationship without introducing a new API contract.

## Science and engineering optimize in opposite directions

[Infoton Science versus Infoton Engineering](infoton-science-engineering-method.md) explains the scientific distillation of the smallest falsifiable Fit and the engineering accumulation of evidence, exceptions, adapters, and resilience. Weaver B/C, MATCH/FIT, and Fold7G/8G boundary claims remain **pending ASTRO implementation and AAE verification** rather than being promoted to a proven contract.

## Reference independent units

When multiple Folds reuse a semantic unit, reference an independent FAM with provenance, revision, and identity. Distinguish a composed display from a merge that destroys the original boundaries.

DeFold resolves and projects a reference; unFold can break a boundary. Do not canonize individual facts inside refFAM: retain their evidence and evaluations in ordinary FAM units.

## A minimal implementation comparison

Reference one semantic unit from two contexts and check that changing one presentation does not overwrite the other's source. Record unresolved provenance or revisions as unknown; do not inherit another World's permissions.

Keep expected output, actual output, selected rule, implementation commit, and untested scope separate. Verify available functions, signatures, and execution capabilities against current FQuery and IBD specifications and tests.

[Canonical Japanese edition](https://github.com/HIPSTAR-IScompany/fold/blob/main/docs/engineering/index.md). This en-US edition explains the Japanese source. It does not replace the original contracts or constitute an executable Kernel port.

Author: 齋藤みつるSaitooMituru-Fusamofu-ふさもふ. Preserve the individual source credits. Documentation: CC BY 4.0.

## Sources

- [docs/theory/fam-infoton-reference-boundary.ja.md](https://github.com/saitoomituru/ZeroRoomLab-manifest/blob/139cc619fcdd62f254074e655ad3fb04e190322d/docs/theory/fam-infoton-reference-boundary.ja.md)
