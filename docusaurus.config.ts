import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// site identityはconfig直書きにせず、CI/localのenv変数から注入する。
// Q Atlantis Issue #22の実装境界: 旧Q Atlantis domainのhardcodeを持ち込まない。
const SITE_ID = process.env.SITE_ID ?? 'fold-docs';
const PUBLICATION_URL = process.env.PUBLICATION_URL ?? 'https://fold.i-s.dev';

const config: Config = {
  title: 'Fold',
  tagline: 'protocol／情報子研究 documentation projection',
  titleDelimiter: '·',
  favicon: 'img/favicon.svg',

  url: PUBLICATION_URL,
  baseUrl: '/',

  organizationName: 'HIPSTAR-IScompany',
  projectName: 'fold',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  headTags: [
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Fold',
        url: `${PUBLICATION_URL}/`,
        description:
          'Fold／情報子工学のprotocol・研究documentation projectionの入口。実装正本はfold-nic。',
        inLanguage: 'ja',
      }),
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    mermaid: {
      theme: { light: 'neutral', dark: 'forest' },
    },
    htmlLang: 'ja',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    metadata: [
      { name: 'author', content: 'HIPSTAR-IScompany' },
      { property: 'og:site_name', content: 'Fold' },
    ],
    navbar: {
      title: 'Fold',
      items: [
        {
          href: 'https://github.com/HIPSTAR-IScompany/fold',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} HIPSTAR-IScompany. Content not migrated (site_id: ${SITE_ID}).`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
