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
    title: "Produtos",

    submenu: [
      {
        title: "Sanitário Químico",
        url: "/produtos/quimicos",
        submenu: [
          {
            title: "Modelo Standard",
            url: "/",
          },
          {
            title: "Modelo Luxo",
            url: "/",
          },
          {
            title: "Modelo Extra Luxo",
            url: "/",
          },
          {
            title: "Modelo PNE",
            url: "/",
          },
        ],
      },
      {
        title: "Cabines Hidráulicas",
        url: "/produtos/hidraulicos",
        submenu: [
          { title: "Modelo Convencional", url: "/" },
          { title: "Chuveiro Portátil", url: "/" },
        ],
      },
      {
        title: "Pia Portátil",
        url: "/produto/pia",
      },
      {
        title: "Mictório Kros",
        url: "/",
      },
      {
        title: "Guaritas",
        url: "/",
      },
      {
        title: "Bilheteria Individual",
        url: "/produtos/bilheteria_individual",
      },
      {
        title: "Bilheteria Dupla",
        url: "/produtos/bilheteria_dupla",
      },
    ],
  },
  {
    title: "Contato",
    url: "/",
    submenu: null,
  },
];
