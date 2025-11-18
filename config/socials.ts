import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@itslushtaK",
    icon: Icons.gitHub,
    link: "https://github.com/itslushtaK",
  },
  {
    name: "LinkedIn",
    username: "Gentuar Lushtaku",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/gentuar-lushtaku-02b06323b/",
  },

  {
    name: "Gmail",
    username: "gentuarlushtaku2002@gmail.com",
    icon: Icons.gmail,
    link: "mailto:gentuarlushtaku2002@gmail.com",
  },
];
