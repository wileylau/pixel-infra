const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Henlo's Pixel Kingdom",
  tagline: 'Google Pixel betas. On your cozy potato device.',
  url: 'https://pixel-infra.github.io', // Your website URL
  baseUrl: '/pixel-infra/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'JamieHoSzeYui', // Usually your GitHub org/user name.
  projectName: 'pixel-infra', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Henlo's Pixel Kingdom",
      // logo: {
      //   alt: 'Pixel Ports Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        {
          type: 'doc',
          docId: 'discover/overview',
          position: 'left',
          label: 'Overview',
        },
        {
          type: 'doc',
          docId: 'download/devices',
          position: 'left',
          label: 'Downloads',
        },
        {
          href: 'https://paypal.me/JamieHoSzeYui/',
          label: 'Donate (PayPal)',
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
              href: 'https://t.me/ppkingdom',
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
            {
              label: 'GitHub',
              href: 'https://www.github.com/JamieHoSzeYui/pixel-infra/',
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
            'https://github.com/JamieHoSzeYui/pixel-infra/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/JamieHoSzeYui/pixel-infra/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
