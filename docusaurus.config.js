// docusaurus.config.js
const config = {
  title: 'Patrones de Diseño',
  tagline: 'Explora patrones de comportamiento',
  url: 'https://tusitio.com', 
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // Configuración del preset
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
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
      navbar: {
        title: 'Patrones de Diseño',
        logo: {
          alt: 'Logo de Patrones',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/', // Ruta para el inicio
            label: 'Inicio', // Texto visible
            position: 'left',
          },
          {
            to: '/integrantes', // Ruta para la página "Integrantes"
            label: 'Integrantes', // Texto visible
            position: 'left',
          },
          {
            href: 'https://github.com/tu-repositorio', // Link externo a GitHub
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
                label: 'Introducción',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Comunidad',
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
            title: 'Más',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/tu-repositorio',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Tu Proyecto. Hecho con Docusaurus.`,
      },
    }),
};

module.exports = config;
