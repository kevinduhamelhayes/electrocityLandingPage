export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Electricista rosario",
  description: "Site of electrician",
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
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },

  ],
  links: {
    docs: "https://api.whatsapp.com/send?phone=5493415883040&text=Hola%20quiero%20mas%20informacion"
  
    
  },
};
