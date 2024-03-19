import { MainNavItem, SidebarNavItem } from "types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: MainNavItem[]
  links: {
    twitter: string
    github: string
    docs: string
  }
  sidebarNav?: SidebarNavItem[]
}

export const siteConfig: SiteConfig = {
  name: "TypeRobot",
  description:
    "Empower your business with cutting-edge AI solutions - driving innovation, efficiency, and growth. Unlock the full potential of artificial intelligence for your business today.",
  mainNav: [
    {
      title: "ChatWhiz",
      href: "https://chatwhiz.ai",
    },
  ],
  links: {
    twitter: "https://twitter.com/thattimc",
    github: "https://github.com/typerobot/typerobot",
    docs: "https://typerobot.com",
  },
}
