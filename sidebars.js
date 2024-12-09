// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
 const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro', // Archivo relacionado: /docs/intro.md
      label: 'Introducción a los Patrones de Diseño', // Título personalizado
    },
    {
      type: 'category',
      label: 'Patrones de Diseño',
      items: [
        'patrones-diseño/Observer/Observer', 
        'patrones-diseño/Strategy/Strategy', // Archivo: /docs/patrones-diseño/categoria-2.md
        'patrones-diseño/Visitor/Visitor', 
        'patrones-diseño/State/State', 
        'patrones-diseño/Template Method/Template Method', 
        'patrones-diseño/Command/Command', 
      ],
    },
  ],
};

export default sidebars;
