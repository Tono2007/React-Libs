// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const constants = require('./src/constants');

const lightCodeTheme = require('prism-react-renderer/themes/nightOwl');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'React-Libs',
  tagline:
    'Encuentra informacion util, datos, herramientas, bibliotecas, consejos, guias y mas.',
  url: constants.siteData.siteUrl,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'React-Libs', // Usually your GitHub org/user name.
  projectName: 'React-Libs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          blogSidebarTitle: 'Todas las publicaciones',
          blogSidebarCount: 'ALL',
          blogDescription: 'Blog: recursos React',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
      },
      navbar: {
        title: 'React Libs',
        logo: {
          alt: 'React Libs',
          src: 'img/LogoFiles/color-logo.png',
          srcDark: 'img/LogoFiles/color-logo.png',
          height: 100,
        },
        hideOnScroll: false,
        items: [
          /* {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          }, */
          {
            type: 'dropdown',
            label: 'Docs',
            position: 'left',
            to: '/docs/',
            items: [
              { to: '/docs/category/react', label: 'React' },
              { to: '/docs/category/javascript', label: 'Javascript' },
              { to: '/docs/category/css', label: 'CSS' },
              /* { to: '/docs/category/html', label: 'HTML' }, */
            ],
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/contributors', label: 'Contribuidores', position: 'left' },

          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [
              {
                to: constants.siteData.siteRepo,
                label: 'Help us translate',
              },
            ],
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            href: constants.siteData.siteRepo,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      announcementBar: {
        content:
          '⭐️ Si te gusta y apoyas React Libs, dale una ⭐️ en <a target="_blank" rel="noopener noreferrer" href="https://github.com/Tono2007/React-Libs">GitHub</a>! ⭐️',
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              { to: '/docs/category/react', label: 'React' },
              { to: '/docs/category/javascript', label: 'Javascript' },
              { to: '/docs/category/html', label: 'HTML' },
              { to: '/docs/category/css', label: 'CSS' },
            ],
          },
          {
            title: 'Comunidad',
            items: [
              {
                label: 'Ayudanos',
                href: constants.siteData.siteRepo,
              },
              {
                label: 'Contribuidores',
                to: '/contributors',
              },
              {
                label: 'Issues',
                href: constants.siteData.repoIssues,
              },
              /* {
                  html: `
                      <a href="/" target="_blank" rel="noreferrer noopener" aria-label="React Libs">
                        <img src="/img/logo.svg" alt="React Libs" width="204" height="auto" />
                      </a>
                    `,
                }, */
            ],
          },
          {
            title: 'Mas',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: constants.siteData.siteRepo,
              },
              {
                html: `
                    <a href="https://www.vercel.com" target="_blank" rel="noreferrer noopener" aria-label="Vercel">
                    <img src="https://camo.githubusercontent.com/add2c9721e333f0043ac938f3dadbc26a282776e01b95b308fcaba5afaf74ae3/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313538383830353835382f7265706f7369746f726965732f76657263656c2f6c6f676f2e706e67"
                    alt="Vercel" width="35" height="auto" />
                    <div>Deploys by Vercel</div>
                    </a>
                  `,
              },
            ],
          },
        ],
        logo: {
          alt: 'React Libs',
          src: 'img/logo.svg',
          srcDark: 'img/LogoFiles/logo-white-no-background.png',
          height: 200,
        },
        copyright: `React Libs • Open Source • ${new Date().getFullYear()}, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
    }),
};

module.exports = config;
