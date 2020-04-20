module.exports = {
  title: 'Temple',
  tagline: 'makes it easy to get new microservices up and running, at lightning speed',
  url: 'https://templeeight.github.io/temple-docs/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'TempleEight', // Usually your GitHub org/user name.
  projectName: 'temple', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Temple',
      logo: {
        alt: 'Temple Logo',
        src: 'img/temple.svg',
      },
      links: [
        {to: 'docs/welcome', label: 'Docs', position: 'left'},
        {
          href: 'https://github.com/TempleEight/temple',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TempleEight. Built with Docusaurus.`,
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
