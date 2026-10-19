# AGENTS.md — Fold documentation site

Scope: this repository and every file below it

本repositoryはFold系documentation projectionでありprotocol／runtimeの実装正本ではありません。変更前に`README.md`、`governance/magi-adoption.yml`、`migration/README.md`、Q Atlantis #19／#27、ZeroRoomLab-manifest公開`main`の`AGENTS.md`、SphereOS-Atlantis公開`main`のMAGI bundleと対象Position Skill、対象component公開`main`を読みます。

人間向け文書、Issue、commit、検証報告は日本語を既定とします。MAGIはSphereOS-Atlantis公開`main`を採用し、`dev`や未merge branchを採用しません。bundleを複製せず、audit時のexact SHAを`docs/operations/provenance/`へ記録します。network access、暗黙scan、Flavor mount、daemon起動は自動実行しません。

`docs projection != implementation canonical`です。未実装は`NOT_IMPLEMENTED`、未試験は`NOT_TESTED`または`UNKNOWN`、過去OAE不明は`historical-oae-unavailable`とします。Q Atlantis #25／#27の承認前に本文やassetを移植しません。secret等をcommitしません。Docusaurus／deploy workflowは#22／#23の実装AI scopeです。

最小検証: `git diff --check`と`git status --short --branch`

## 2026-10-19 承認済み文書batch

UserはManifest由来の必要文書を日本語正本・en-US解説としてmainへ展開することを承認した。Q Atlantis #25／#27の2026-10-19 batchとsources/publication-batch-2026-10-19.jsonを照合する。編集・buildはproduction公開待ちから分離する。元sourceを移動・削除せず、実装正本の所有権を変えない。新規branch／Issueをみだりに増やさず、解けない意味・契約conflictは既存Issueへ追記する。

英語は通常解説の参照写本であり、日本語Kernelの同値実装として実行しない。language policyはManifestのdocs/operations/default-language-and-translation-policy.ja.mdを参照する。CLI／MAGI resolverの未実行を成功表示しない。機械検証は利用できるExecution EnvelopeとCIで行い、結果をreceiptへ記録する。
