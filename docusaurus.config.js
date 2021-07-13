const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Pixel Ports - curtana',
  tagline: 'Google Pixel betas. On your curtana.',
  url: 'https://pixel-curtana.github.io', // Your website URL
  baseUrl: '/pixel-infra/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'JamieHoSzeYui', // Usually your GitHub org/user name.
  projectName: 'pixel-infra', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Pixel Ports - Curtana',
      // logo: {
      //   alt: 'Pixel Ports Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/JamieHoSzeYui/pixel-infra',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram - Release channel',
              href: 'https://t.me/JamieProjects',
            },
            {
              label: 'Telegram - Support group',
              href: 'https://t.me/pixel_curtana',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Pling',
              href: 'https://www.pling.com/p/1512845/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} j. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/JamieHoSzeYui/pixel-infra/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/JamieHoSzeYui/pixel-infra/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
