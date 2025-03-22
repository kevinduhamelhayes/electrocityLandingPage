export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Electricista Rosario",
  description: "Servicios profesionales de electricidad en Rosario y alrededores. Instalaciones, reparaciones y mantenimiento eléctrico para hogares, comercios e industrias.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Galeria",
      href: "/galery",
    },
    {
      label: "Titulos",
      href: "/titles",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Galeria",
      href: "/galery",
    },
    {
      label: "Titulos",
      href: "/titles",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  links: {
    whatsapp: "https://api.whatsapp.com/send?phone=5493415883040&text=Hola%20quiero%20mas%20informacion",
    email: "mailto:info@electricistarosario.com",
    tel: "tel:+5493415883040"
  },
};
