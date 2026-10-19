---
canonical_language: ja-JP
publication_batch: 2026-10-19
translation_status: canonical-editorial-projection
---

# Fold protocolと実装の地図

Foldは情報子全般の解説と、Fold7G／Trion Bond／Fold8G等の研究への入口を担います。世代名を通常の通信Layer番号へ機械的に対応させず、対象・規則・実装を確認します。

| 正本 | 担当 |
|---|---|
| ZeroRoomLab-manifest | FAM一般論、Fold8GのWorld・Authority・claim boundary |
| saitoomituru/fold-nic | parser、resolver、adapter、key境界、receipt、test |
| SphereOS-Atlantis | PLI／CLI、Execution Envelope、MAGI、Sphere-DOSの上流契約 |
| このsite | 研究解説、索引、相互参照 |

Fold8Gの現行候補は、World間でIdentity・Authority・Capability・Provenance・Transportを扱うInter-World Protocolです。Fold IdentityはDNS domain、GNS zone key、GitHub account、transport endpointと同一ではありません。

## 実装状態を調べる

採用したfold-nic責務文書では、control planeやoffline検査と、未実装のparser／resolver／GNS adapter／P2P配布を分けています。新しい実装状況は実装正本のcommitとtestへ戻って確認します。

既存Webは人間・検索・監査の入口として共存します。将来の名前空間構想を、現在のWebや研究文書の公開を待たせる条件にしません。

[English reference manuscript](https://github.com/HIPSTAR-IScompany/fold/blob/main/i18n/en/docusaurus-plugin-content-docs/current/protocols/index.md)。日本語を正本とする編集解説です。原典の契約を変更しません。

著者: 齋藤みつるSaitooMituru-Fusamofu-ふさもふ。原典の個別creditは各出典を参照。文書: CC BY 4.0。

## 出典

- [docs/architecture/repository-boundary.ja.md](https://github.com/saitoomituru/fold-nic/blob/44b5d8bb7525d317def6501cc3a5f0951df2e1bc/docs/architecture/repository-boundary.ja.md)
