# Fold documentation site

状態: `DOCUSAURUS BUILD READY / NOT DEPLOYED / CONTENT NOT MIGRATED`

Fold、Infoton、protocol研究と実装境界を公開するdocumentation siteです。Target URL: `https://fold.i-s.dev/`

## 責務境界

- World／authority／横断protocol規約正本: [ZeroRoomLab-manifest](https://github.com/saitoomituru/ZeroRoomLab-manifest)
- parser／resolver／adapter／key／receipt／testの実装正本: [fold-nic](https://github.com/HIPSTAR-IScompany/fold-nic)
- SphereOS PLI／CLI envelope正本: [SphereOS-Atlantis](https://github.com/saitoomituru/SphereOS-Atlantis)
- 本repository: 上記を吸収しないdocs projection

MAGIは公開`main`採用。Docusaurusは実装済み（`npm ci && npm run build`が独立repositoryで再現可能）。Sakura deployは未実装（Q Atlantis #23、CIはbuild jobのみ）、content migrationは未着手（#27）です。

code等はApache-2.0、一般文書・図・FlavorはCC BY 4.0を既定候補とし、個別表示と第三者licenseを優先します。

## local preview

```console
npm ci
npm start
```

`http://localhost:3000/` でplaceholder siteを確認できます。

## build と検査

```console
npm ci
npm run typecheck
npm run check:domain-hardcode
SITE_ID=fold-docs PUBLICATION_URL=https://fold.i-s.dev npm run build
SITE_ID=fold-docs PUBLICATION_URL=https://fold.i-s.dev npm run check:seo
SITE_ID=fold-docs npm run receipt:build
```

`SITE_ID` / `PUBLICATION_URL` は`.github/workflows/build.yml`のCI既定値と一致させる。config直書きにせず、常にenv経由で注入する。
