export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Dashboard",
      href: "/",
    },
  ],
  navMenuItems: [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Wallet",
      href: "/",
    },
  ],
  links: {
    github: "https://github.com/refimedellin",
    twitter: "https://twitter.com/refimedellin",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
