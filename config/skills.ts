import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "React Native",
    description:
      "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "Next.js",
    description:
      "Effortlessly build dynamic apps with routing, layouts, loading UI, and API routes.",
    rating: 4,
    icon: Icons.nextjs,
  },
  {
    name: "React",
    description:
      "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    rating: 4,
    icon: Icons.graphql,
  },
  {
    name: "Node.js",
    description:
      "Run JavaScript on the server side, enabling dynamic and responsive applications.",
    rating: 4,
    icon: Icons.nodejs,
  },
  {
    name: "MongoDB",
    description:
      "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
    rating: 4,
    icon: Icons.mongodb,
  },
  {
    name: "Typescript",
    description:
      "Enhance JavaScript with static types, making code more understandable and reliable.",
    rating: 3,
    icon: Icons.typescript,
  },
  {
    name: "Javascript",
    description:
      "Create interactive and dynamic web experiences with the versatile scripting language.",
    rating: 4,
    icon: Icons.javascript,
  },

  {
    name: "Angular",
    description:
      "Build dynamic web apps with a TypeScript-based open-source framework by Google.",
    rating: 3,
    icon: Icons.angular,
  },
  {
    name: "Redux",
    description:
      "Manage app state effectively using a predictable and centralized state container.",
    rating: 4,
    icon: Icons.redux,
  },

  {
    name: "AWS",
    description:
      "Utilize Amazon Web Services to build and deploy scalable, reliable, and secure applications.",
    rating: 3,
    icon: Icons.amazonaws,
  },

  {
    name: "PostgreSQL",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 3,
    icon: Icons.mysql,
  },
  {
    name: "Vercel",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 4,
    icon: Icons.netlify,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
