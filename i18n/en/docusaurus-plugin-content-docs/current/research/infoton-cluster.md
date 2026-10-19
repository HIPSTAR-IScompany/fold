---
canonical_language: ja-JP
publication_batch: 2026-10-19
translation_status: reference-manuscript
---

# Infoton clusters and dynamic graphs

An Infoton Cluster, or Fold Cluster, holds a local structure of observations, interpretations, causal candidates, and contexts, including unresolved relationships. It does not prematurely mean one cause, confirmed multiple causes, an unknowable cause, or merely a candidate list.

## Connecting to dynamic graphs

| View | Graph representation | Context retained by Infoton Engineering |
|---|---|---|
| Nodes | Observations, candidate states, semantic units | Identity, observer, World, revision |
| Edges | Correlation, causal hypotheses, contradiction, reference | Grounds and scope for adopting the relation |
| Updates | Add, reweight, split, reject | Who changed what, when, and on which evidence |
| Unresolved state | Unobserved nodes or edges, pending decisions | Unknown remains distinct from false or absent |
| Sharing | References to independent units | FAM boundaries and provenance |

This is a proposed crosswalk, not a redefinition of every dynamic graph as a Fold Cluster. Test the correspondence in a toy model with explicit update rules, time, and observation scope.

## Example: a response changed

Keep model weights, prompts, runtime, context, and unobserved factors as candidates. A changed output is an observation; it does not identify model weights as the cause.

1. Fix the input, available model and configuration revisions, and observer.
2. Vary one condition at a time and record outputs and routes.
3. Separate evidence that distinguishes candidates from inconclusive results and counterexamples.
4. Update or split the cluster while retaining the original observation.

Numerical probabilities are optional. States such as possible, rejected, and unknown can work when their meanings and update grounds are explicit. This example is an experiment design, not a measured result.

## FAM boundaries

When multiple Folds need the same semantic unit, the source calls for a separate FAM identity referenced by each consumer rather than shared internal nodes in one enormous JSON document. DeFold resolves and projects a reference; unFold can break a semantic boundary.

Retain historical superposition terminology as provenance. The source YAML is a conceptual example, not an adopted implementation ABI.

[Canonical Japanese edition](https://github.com/HIPSTAR-IScompany/fold/blob/main/docs/research/infoton-cluster.md). This en-US edition explains the Japanese source. It does not replace the original contracts or constitute an executable Kernel port.

Author: 齋藤みつるSaitooMituru-Fusamofu-ふさもふ. Preserve the individual source credits. Documentation: CC BY 4.0.

## Sources

- [docs/theory/fold-cluster.ja.md](https://github.com/saitoomituru/ZeroRoomLab-manifest/blob/139cc619fcdd62f254074e655ad3fb04e190322d/docs/theory/fold-cluster.ja.md)
- [docs/theory/fam-infoton-reference-boundary.ja.md](https://github.com/saitoomituru/ZeroRoomLab-manifest/blob/139cc619fcdd62f254074e655ad3fb04e190322d/docs/theory/fam-infoton-reference-boundary.ja.md)
