module.exports = {
  title: 'Temple',
  tagline: 'Generate microservice systems at lightning speed',
  url: 'https://templeeight.github.io/temple-docs/',
  baseUrl: '/temple-docs/',
  favicon: 'img/favicon.ico',
  organizationName: 'TempleEight',  // Usually your GitHub org/user name.
  projectName: 'temple-docs',       // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Temple',
      logo: {
        alt: 'Temple Logo',
        src: 'img/temple.svg',
      },
      links: [
        {to: 'docs/introduction', label: 'Docs', position: 'left'},
        {
          href: 'https://github.com/TempleEight/temple',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${
          new Date().getFullYear()} TempleEight. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
              'https://github.com/TempleEight/temple-docs/edit/master/TempleEight',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
