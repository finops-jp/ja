import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type {Options as IdealImageOptions} from '@docusaurus/plugin-ideal-image';
import type {Options as DocsOptions} from '@docusaurus/plugin-content-docs';
import type {Options as BlogOptions} from '@docusaurus/plugin-content-blog';
import type {Options as PageOptions} from '@docusaurus/plugin-content-pages';
import type {Options as ClientRedirectsOptions} from '@docusaurus/plugin-client-redirects';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'FinOps Foundation Japan Chapter Docs',
  tagline: 'Coming soon...',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://finops-jp.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ja',

  // GitHub pages deployment config.
  organizationName: 'finops-jp', // Usually your GitHub org/user name.
  projectName: 'ja', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/finops-jp/ja/tree/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/finops-jp/ja/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      'ideal-image',
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: true,
      } satisfies IdealImageOptions,
    ],
  ],

  themeConfig: {
    announcementBar: {
      id: 'announcementBar-',
      content: '<a target="_blank" href="https://www.finops.org">FinOps Framework and FinOps Content</a> by <a target="_blank" href="https://www.finops.org">FinOps Foundation</a> <b>(CC BY 4.0)</b>',
      textColor: '#FFF',
      backgroundColor: '#4AAD78',
      isCloseable: false,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'FinOps Foundation Japan Chapter',
      items: [
        {
          to: '/',
          label: 'Home',
          position: 'left'
        },
        {
          to: 'https://finops-jp.github.io',
          label: 'Community',
          position: 'left'
        },
        {
          href: 'https://github.com/finops-jp/ja',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '入門',
          items: [
            {
              label: 'FinOpsとは',
              to: '/docs/introduction/what-is-finops',
            },
            {
              label: 'フレームワーク概要',
              to: '/docs/framework',
            },
            {
              label: 'FinOps用語',
              to: '/docs/assets/terminology',
            },
          ],
        },
        {
          title: 'フレームワーク',
          items: [
            {
              label: '原則',
              to: '/docs/framework/principles',
            },
            {
              label: 'ペルソナ',
              to: '/docs/framework/personas',
            },
            {
              label: 'フェーズ',
              to: '/docs/framework/phases',
            },
            {
              label: '成熟度',
              to: '/docs/framework/maturity-model',
            },
            {
              label: 'ドメイン',
              to: '/docs/framework/domains',
            },
            {
              label: 'ケイパビリティ',
              to: '/docs/framework/capabilities',
            },
            {
              label: 'スコープ',
              to: '/docs/framework/scopes',
            },
          ],
        },
        {
          title: 'アセット',
          items: [
            {
              label: 'FinOpsの採用',
              to: '/docs/wg/adopting-finops',
            },
          ],
        },
        {
          title: 'コミュニティー',
          items: [
            {
              label: 'FinOps Foundation',
              href: 'https://www.finops.org',
            },
            {
              label: 'FinOps Foundation Japan Chater',
              href: 'https://finops-jp.github.io',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/finops-jp/ja',
            },
          ],
        },
      ],
      copyright: `© FinOps Foundation Japan Chapter. ${new Date().getFullYear()}. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
