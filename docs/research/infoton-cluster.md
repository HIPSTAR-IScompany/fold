---
canonical_language: ja-JP
publication_batch: 2026-10-19
translation_status: canonical-editorial-projection
---

# 情報子クラスターと動的グラフ

情報子クラスター／Fold Clusterは、一つの対象に関係する観測・解釈・因果候補・Contextを、未収束の部分も含めて保持する局所的な関係構造です。「単一原因」「複合原因が確定」「原因不明」「単なる候補一覧」のどれかへ先に固定しません。

## 動的グラフとの接続

| 観点 | グラフとして記述できる部分 | 情報子側で保持する文脈 |
|---|---|---|
| node | 観測、候補状態、意味単位 | identity、観測者、World、revision |
| edge | 相関、因果仮説、矛盾、参照 | relationを採用した根拠と適用範囲 |
| 更新 | 追加、重み変更、分割、棄却 | いつ、誰が、何を根拠に変更したか |
| 未解決 | 未観測node／edge、保留 | unknownと偽・不存在を区別 |
| 共有 | 独立した単位の参照 | FAM境界と出典を維持 |

これは接続のための整理であり、すべての動的グラフがFold Clusterであるという定義変更ではありません。更新規則・時間・観測範囲を指定したtoy modelで対応を検証します。

## 例：応答が変わった

モデル重み、Prompt、runtime、context、未観測要因を候補として保ちます。「出力が変わった」は観測であり、その時点でモデル重みが原因と決まるわけではありません。

1. 入力、モデル・設定の取得可能なrevision、観測者を固定する。
2. 一条件ずつ変え、出力と経路を記録する。
3. 候補を絞れる結果、絞れない結果、反例を分離する。
4. 原観測を残したまま、clusterを更新・分割する。

数値確率は必須ではありません。possible、rejected、unknown等でも、状態の意味と更新根拠を残せます。例を実測結果としては扱いません。

## FAM境界

複数のFoldから同じ意味単位を参照する場合、巨大な一枚JSONへ共有nodeを押し込む代わりに、独立FAM identityへ切り出して参照するのが原典の方針です。DeFoldは参照先の表示・展開、unFoldは境界を壊し得る操作として区別します。

旧い量子重ね合わせ系の呼称は来歴として保存します。原典の概念YAMLは例であり、実装ABIの制定ではありません。

[English reference manuscript](https://github.com/HIPSTAR-IScompany/fold/blob/main/i18n/en/docusaurus-plugin-content-docs/current/research/infoton-cluster.md)。日本語を正本とする編集解説です。原典の契約を変更しません。

著者: 齋藤みつるSaitooMituru-Fusamofu-ふさもふ。原典の個別creditは各出典を参照。文書: CC BY 4.0。

## 出典

- [docs/theory/fold-cluster.ja.md](https://github.com/saitoomituru/ZeroRoomLab-manifest/blob/139cc619fcdd62f254074e655ad3fb04e190322d/docs/theory/fold-cluster.ja.md)
- [docs/theory/fam-infoton-reference-boundary.ja.md](https://github.com/saitoomituru/ZeroRoomLab-manifest/blob/139cc619fcdd62f254074e655ad3fb04e190322d/docs/theory/fam-infoton-reference-boundary.ja.md)
