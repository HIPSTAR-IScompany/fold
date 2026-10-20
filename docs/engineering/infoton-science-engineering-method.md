---
canonical_language: ja-JP
publication_batch: 2026-10-20
translation_status: canonical-editorial-projection
---

# 情報子科学と情報子工学は逆方向に進む

本ページは[Manifestの日本語原典](https://github.com/saitoomituru/ZeroRoomLab-manifest/blob/54bfe487cd28420caa1589ba64824102dab83f16/docs/theory/infoton-science-engineering-fit-distillation.ja.md)に基づく**研究手法の公開解説**です。実装Kernel、FAM API、OAE runtimeの正本ではありません。

## 蒸留炉と実装炉

情報子科学は、異分野の既存一般命題をFitしてM次元の関係構造を組み、**成立に必要な最小の構造**へ蒸留します。「最も尤もらしいFit」という主張であって普遍真理の宣言ではありません。数値的な尤度が算出済みという意味でもありません。

情報子工学は、目的を現実のシステムで履行するため、**例外、Evidence、計測、変換、冗長性、復旧手段**を積み増します。科学で削ったものを、工学では動かすために足す。最適化方向は逆ですが、実装で見えた失敗は次の科学Fitを再蒸留する材料になります。

| 科学の側 | 工学の側 |
|---|---|
| Fitを最短に蒸留する | 実行条件を詳細に拘束する |
| 既知へ解けた命題を既存学問へ返す | solver、adapter、fixture、fallbackを利用する |
| 必要な接続の破綻でFitを撤回する | 要件未達なら改善・再試験する |
| 説明範囲と反証射程を保つ | 可用性・回復性・運用証跡を保つ |

## 二方向から壊せる構造

**外部の机**：専門家は自分の学術領域だけで、Fitが必要条件として採用する命題を否定できます。必要命題 `A∧B∧C` に対し一つでも有効な反証が成立すれば、依存Fitを引っ込めます。代替条件 `A∨B` やscope外の否定を混同しません。

**こちらの机**：Fitで結合された命題に意味、因果、World、観測者、変換、権限の**型不一致**があれば、指定した関係が成立しないという形でも反証できます。飛躍そのものは許容し、飛躍先の型を無検証で接続可能としない。未検査、unknown、接続不能の証明は別々に扱います。

通常の数学・自然科学・社会科学・工学のsolverへ十分に還元できた部分は、情報子科学の独自命題から外して当該分野へ返します。本解説でいう**UnFold（学術還元）**は研究上の呼称であり、FAM実装の破壊的`unFold`とも、非破壊参照展開`DeFold`とも同じ命令ではありません。source、identity、revision、否定依存は維持します。

## 【再蒸留待ち】Weaver B/C、MATCH/FIT、Fold7G/8G

現行の[Evidence説明](../research/evidence-and-oae.md)は、学派のcrosswalkとして `Weaver B ↔ MATCH（文脈Evidence）`、`Weaver C ↔ FIT（構造Evidence）` を示しています。**局所的なMATCH/FITで十分な例**と、**Fold7G/8Gの境界契約を要する例**では、反証の型と依存対象が異なります。片方だけでB/C全体の境界を実証したとは扱いません。

Fold7Gは七段のnested Foldの研究候補であり、Weaver B/Cの別名でも七物理次元でもありません。Fold8Gの独立契約・link-up・World越境条件は未確定です。詳しくは[公開研究地図](https://github.com/HIPSTAR-IScompany/quantaril_cloud_QAtlantis/blob/main/docs/engineering/q-atlantis/fold7g-fold8g-research-map.md)と[Manifestの検証待ち仕様](https://github.com/saitoomituru/ZeroRoomLab-manifest/blob/54bfe487cd28420caa1589ba64824102dab83f16/docs/theory/infoton-science-engineering-fit-distillation.ja.md)を参照します。

**コンフリクトの解除順序**：

1. [SphereASTRO](https://github.com/saitoomituru/SphereASTRO) のASTRO Runner／意味とContext投影の実装・比較fixture。
2. [Sphere-aae](https://github.com/saitoomituru/Sphere-aae) のsystem-call分岐・FAM/Q/Last Orderを使った、B/Cの効果検証と接続失敗の観測。製品名の**AAE（Astro Agent Edge）**と**OAE（Observer Agential Effect）**を混同しません。
3. 局所MATCH/FITで十分な正例、7G/8G Gateの欠落で失敗する負例、World／Causality／Authorityの境界例を比較し、必要な型を同定。
4. 判定結果を再Fitして、不要な高G拘束を削り、必要な境界のみ残す。

現時点の判定は **UNKNOWN / EXPERIMENT REQUIRED / BACK TO DISTILLATION**。ASTROとAAEの実装／実験を完了済みとせず、未完了をもって研究仮説を否定したとも扱いません。数学的な適用問題は[Manifest Issue #42](https://github.com/saitoomituru/ZeroRoomLab-manifest/issues/42)に残します。

## OAE・動的グラフによる継続的な反証

現在のOAEにsource revision、Observer、評価rule、適用scope、判定、型不一致、unknownを残し、Cron等による**将来の**グラフ再トレースで、外部論文の訂正・内部型検査結果を必要条件へ伝播させる運用案です。動作済みの自動監査を宣言していません。過去OAEが存在しなければ `historical-oae-unavailable` を維持します。

### 物理カゴ落ちという小さな検証例

金と商品があっても持ち帰る最後の輸送経路がないと、購買目的を達成できないことがあります。科学はECのカゴ落ちと実店舗の輸送不能を**同じ成立条件の型**へFitする。工学は欠品通知、予備箱、運搬機構、返品フローと測定を設計する。どの必要条件が崩れるとこのFitが成立しなくなるかも、テスト項目です。

[English reference manuscript](https://github.com/HIPSTAR-IScompany/fold/blob/main/i18n/en/docusaurus-plugin-content-docs/current/engineering/infoton-science-engineering-method.md)。日本語正本に基づく編集解説であり、同一の実行Kernelではありません。

著者: 齋藤みつるSaitooMituru-Fusamofu-ふさもふ。文書: CC BY 4.0。
