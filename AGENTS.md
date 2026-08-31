# AGENTS.md — Fold documentation site

Scope: this repository and every file below it

本repositoryはFold系documentation projectionでありprotocol／runtimeの実装正本ではありません。変更前に`README.md`、`governance/magi-adoption.yml`、`migration/README.md`、Q Atlantis #19／#27、ZeroRoomLab-manifest公開`main`の`AGENTS.md`、SphereOS-Atlantis公開`main`のMAGI bundleと対象Position Skill、対象component公開`main`を読みます。

人間向け文書、Issue、commit、検証報告は日本語を既定とします。MAGIはSphereOS-Atlantis公開`main`を採用し、`dev`や未merge branchを採用しません。bundleを複製せず、audit時のexact SHAを`docs/operations/provenance/`へ記録します。network access、暗黙scan、Flavor mount、daemon起動は自動実行しません。

`docs projection != implementation canonical`です。未実装は`NOT_IMPLEMENTED`、未試験は`NOT_TESTED`または`UNKNOWN`、過去OAE不明は`historical-oae-unavailable`とします。Q Atlantis #25／#27の承認前に本文やassetを移植しません。secret等をcommitしません。Docusaurus／deploy workflowは#22／#23の実装AI scopeです。

最小検証: `git diff --check`と`git status --short --branch`
