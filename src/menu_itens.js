export const menuItems = [
  {
    title: "Home",
    url: "/",
    submenu: null,
  },
  {
    title: "Quem somos",
    url: "/about",
    submenu: null,
  },
  {
    title: "Orçamento",
    url: "/orcamento",
    submenu: null,
  },
  {
    title: "Produtos",

    submenu: [
      {
        title: "Sanitário Químico",
        url: "/quimicos",
        submenu: [
          {
            title: "Modelo Standard",
            url: "../produtos/quimicos/standard",
          },
          {
            title: "Modelo Luxo",
            url: "../produtos/quimicos/luxo",
          },
          {
            title: "Modelo Extra Luxo",
            url: "../produtos/quimicos/extraluxo",
          },
          {
            title: "Modelo PNE",
            url: "../produtos/quimicos/pne",
          },
        ],
      },
      {
        title: "Cabines Hidráulicas",
        url: "/hidraulicos",
        submenu: [
          {
            title: "Modelo Convencional",
            url: "/produtos/hidraulicos/convencional",
          },

          {
            title: "Chuveiro Portátil",
            url: "/produtos/hidraulicos/chuveiro",
          },
        ],
      },
      {
        title: "Pia Portátil",
        url: "../pia",
        submenu: null,
      },
      {
        title: "Mictório Kros",
        url: "../kros",
        submenu: null,
      },
      {
        title: "Bilheteria Individual",
        url: "../bilheteria_individual",
        submenu: null,
      },
      {
        title: "Bilheteria Dupla",
        url: "../bilheteria_dupla",
        submenu: null,
      },
    ],
  },
  {
    title: "Contato",
    url: "/contato",
    submenu: null,
  },
];
