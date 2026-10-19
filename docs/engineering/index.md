---
canonical_language: ja-JP
publication_batch: 2026-10-19
translation_status: canonical-editorial-projection
---

# FAMから実装へ

FAMは、再参照可能になった意味単位を独立identityで記述し、別Contextへ接続する言語です。JSONという拡張子だけで情報子になるわけではありません。

| 区分 | 原典が区別する責務 |
|---|---|
| OAE | Observer・対象・revision・ruleに拘束された観測記録 |
| FAMLog | 観測・操作・失敗・修正等の時間方向の履歴 |
| FAMJSON | 可搬な意味単位を運ぶwire representation |
| refFAM | 見方・問い方・分類・検証方法等。個別factの正解集とは分ける |

FQueryは問い合わせと経路、IBDは保存・取得側の責務を持ちます。ここでは実装APIを新しく制定せず、原典と実装の対応を読む入口を置きます。

## 独立単位を参照する

共通の意味単位を複数のFoldで使うときは、出典・revision・identityを持つ独立FAMを参照します。表示の合成と、元の境界を壊す結合を区別します。

DeFoldは参照解決とprojection、unFoldは境界を破壊し得る操作です。refFAMに個別factを無条件に正典化せず、通常FAM側で証拠と評価を保持します。

## 最小の実装比較

一つの意味単位を二つのContextから参照し、一方の表示変更が他方の元データを上書きしないか調べる。出典やrevisionが欠けた参照はunknownとして記録し、別Worldの権限を継承しない。

期待する出力、実際の出力、参照したrule、実装commit、未試験を分けて残します。既存関数の有無・signature・実行能力はFQuery／IBDの現行仕様とtestで確かめます。

[English reference manuscript](https://github.com/HIPSTAR-IScompany/fold/blob/main/i18n/en/docusaurus-plugin-content-docs/current/engineering/index.md)。日本語を正本とする編集解説です。原典の契約を変更しません。

著者: 齋藤みつるSaitooMituru-Fusamofu-ふさもふ。原典の個別creditは各出典を参照。文書: CC BY 4.0。

## 出典

- [docs/theory/fam-infoton-reference-boundary.ja.md](https://github.com/saitoomituru/ZeroRoomLab-manifest/blob/139cc619fcdd62f254074e655ad3fb04e190322d/docs/theory/fam-infoton-reference-boundary.ja.md)
