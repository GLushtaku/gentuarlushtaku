import { ValidCategory, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets?: string[];
}

export interface ProjectInterface {
  id: string;
  // type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate?: Date;
  endDate?: Date;
  companyLogoImg?: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "skenderajheritage",
    companyName: "Skenderaj Heritage",
    category: ["Web Dev", "Full Stack"],
    shortDescription:
      "Skenderaj Heritage is a website for a heritage organization, showcasing a portfolio of architectural projects and more.",
    websiteLink: "https://skenderaj.vercel.app",
    techStack: ["Next.js", "React", "Typescript"],
    companyLogoImg: "/projects/skenderaj/logo.png",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description:
          "Modern and responsive landing page showcasing Skenderaj Heritage services and portfolio",
        imgArr: ["/projects/skenderaj/1.gif"],
      },
      {
        title: "Projects Page",
        description: "Projects page for the Skenderaj Heritage",
        imgArr: ["/projects/skenderaj/2.png", "/projects/skenderaj/3.gif"],
      },
      {
        title: "Business Page",
        description: "Business page for the Skenderaj Heritage",
        imgArr: [
          "/projects/skenderaj/4.png",
          "/projects/skenderaj/5.png",
          "/projects/skenderaj/6.png",
        ],
      },
      {
        title: "About Page",
        description: "About page for the Skenderaj Heritage",
        imgArr: ["/projects/skenderaj/7.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "During the development of Skenderaj Heritage, I took full ownership of building a comprehensive, bilingual digital platform showcasing historical places and local businesses in Skenderaj using Next.js 16, TypeScript, and PostgreSQL with Drizzle ORM",
        "My focus was on delivering a seamless multilingual experience (Albanian/English) through a modern, responsive web application with interactive maps, image galleries, and a robust admin panel for content management",
      ],
      bullets: [
        "End-to-end application development with Next.js 16 (App Router), TypeScript, and React 19, ensuring type-safe code, server-side rendering, and optimal performance",
        "Bilingual content management system supporting Albanian and English translations throughout the platform, with dynamic language switching and URL-based language persistence",
        "PostgreSQL database architecture using Drizzle ORM for type-safe database queries, migrations, and schema management, ensuring data integrity and scalability",
        "RESTful API routes with comprehensive CRUD operations for places and businesses, supporting FormData for image uploads and JSON for data operations",
        "Cloudinary integration for efficient image upload, storage, and optimization, enabling multiple image galleries per place and business with automatic fallback handling",
        "Interactive mapping functionality using Leaflet and React Leaflet, allowing users to visualize locations and enabling admins to set coordinates via map clicks",
        "Admin panel with intuitive forms for creating and editing places and businesses, featuring image upload, map integration, and bilingual content management",
        "Responsive design implementation with Tailwind CSS 4, ensuring optimal user experience across mobile, tablet, and desktop devices",
        "Server-side rendering and client component architecture, optimizing initial page loads while maintaining interactivity for dynamic features",
        "SEO-friendly implementation with proper metadata, semantic HTML, and dynamic routing for places and businesses detail pages",
      ],
    },
  },
  {
    id: "idfierApp",
    companyName: "IDFier App",
    category: ["Mobile Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Developed and optimized a high-performing IDFier app catering to over 500 users, emphasizing efficiency and maintainability.",
    websiteLink: "https://idfier.com",
    techStack: ["React Native", "Node.js", "PostgreSQL", "Typescript"],
    companyLogoImg: "/projects/idfier/logo.svg",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description:
          "Modern and responsive landing page showcasing IDFier services and portfolio",
        imgArr: ["/projects/idfierApp/1.png"],
      },
      {
        title: "ID Shares",
        description: "Share your ID with others",
        imgArr: ["/projects/idfierApp/2.png"],
      },
      {
        title: "Side Menu",
        description: "Side menu for the app",
        imgArr: ["/projects/idfierApp/3.png"],
      },
      {
        title: "Settings",
        description: "Settings for the app",
        imgArr: ["/projects/idfierApp/4.png"],
      },
      {
        title: "Profile",
        description: "Profile for the app",
        imgArr: ["/projects/idfierApp/5.png"],
      },
      {
        title: "New ID Share",
        description: "New ID share screen",
        imgArr: ["/projects/idfierApp/6.png"],
      },
      {
        title: "Verification",
        description: "Verification for the app",
        imgArr: ["/projects/idfierApp/7.png"],
      },
      {
        title: "ID Details",
        description: "ID details screen",
        imgArr: ["/projects/idfierApp/8.png"],
      },
      {
        title: "Share Details",
        description: "Share details screen",
        imgArr: ["/projects/idfierApp/9.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "During the development of IDfier, I took full ownership of building a secure, scalable and user–friendly identity application using React Native (Expo), TypeScript, and a Node.js backend",
        "My focus was on delivering a modern authentication experience through seamless integrations with trusted third-party identity providers",
      ],
      bullets: [
        "	End-to-end application development with React Native Expo and TypeScript, ensuring a clean architecture and maintainable codebase",
        "Secure API integrations, enabling communication between the mobile app, the backend, and external identity providers",
        "Third-party authentication flows, including BankID and AppCheck, to enhance trust, identity verification, and overall platform security",
        "The flexibility for IDfier to act as a third-party identity provider itself, allowing businesses to integrate IDfier as a federated identity solution",
        "Robust state management using Redux Toolkit, optimizing performance and improving user experience across different authentication stages",
        "A streamlined onboarding and verification flow that ensures a secure and smooth transition for users during registration and login",
      ],
    },
  },
  {
    id: "lostandfound",
    companyName: "Lost and Found ",
    category: ["Web Dev", "Full Stack"],
    shortDescription:
      "Lost & Found is an interactive web platform aimed at helping users quickly locate or report lost items within a community.",
    websiteLink: "https://kerko-gjej.vercel.app",
    techStack: ["React", "Javascript", "Node.js", "express.js"],
    startDate: new Date("2024-06-14"),
    endDate: new Date("2024-07-14"),
    companyLogoImg: "/projects/lostandfound/logo.png",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description: "Landing page for the Lost and Found app",
        imgArr: ["/projects/lostandfound/1.png"],
      },
      {
        title: "Home Page",
        description: "Home page for the Lost and Found app",
        imgArr: ["/projects/lostandfound/5.png"],
      },
      {
        title: "Login Form",
        description: "Login form for the Lost and Found app",
        imgArr: ["/projects/lostandfound/2.png"],
      },
      {
        title: "Register Form",
        description: "Register form for the Lost and Found app",
        imgArr: ["/projects/lostandfound/3.png"],
      },
      {
        title: "Report Lost Item",
        description: "Report lost item form for the Lost and Found app",
        imgArr: ["/projects/lostandfound/4.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Lost & Found is an interactive web platform aimed at helping users quickly locate or report lost items within a community. Designed with a focus on user experience, the platform allows users to register, report lost items, browse available listings, and engage with others through comments. Built using React, Node.js, and MongoDB, it provides a seamless interface and real-time item tracking capabilities. With features like category filtering (e.g., electronics, personal items), notifications, and an approval system, Lost & Found fosters a secure and collaborative environment for users to reconnect with their misplaced belongings.",
      ],
    },
  },
  {
    id: "idfier",
    companyName: "IDFier Website",
    category: ["Web Dev", "Full Stack"],
    shortDescription:
      "Developed and optimized an informational website for IDFier app, showcasing services and features to inform users about the application.",
    websiteLink: "https://idfier.com",
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "Vercel",
      "PostgreSQL",
      "Typescript",
    ],

    companyLogoImg: "/projects/idfier/logo.svg",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description:
          "Modern and responsive landing page showcasing IDFier services and portfolio",
        imgArr: [
          "/projects/idfier/1.png",
          "/projects/idfier/2.png",
          "/projects/idfier/3.png",
          "/projects/idfier/4.png",
          "/projects/idfier/5.png",
          "/projects/idfier/6.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "IDfier is a peer-to-peer identity verification app that helps people confirm who they're really talking to before they meet, send money, or share anything important. Built using the same technology trusted by banks and border control, IDfier uses government-issued ID scanning, biometric face matching, NFC chip reading, and liveness detection to prevent deepfakes. Whether you're meeting a date from a dating app, letting out your flat, buying second-hand, or just chatting with someone new online, IDfier ensures the person is genuine, human, and verified.",
      ],
      bullets: [
        "Developed and optimized a high-performing website catering to over 500 users.",
        "Collaborated closely with the product team to implement cutting-edge features.",
        "Created an intuitive admin dashboard to efficiently manage and announce contest winners.",
        "Leveraged Next.js, React with TypeScript for captivating front-end experiences.",
        "Utilized Node.js, React Native, and PostgreSQL to design and manage databases.",
      ],
    },
  },
  {
    id: "ziggroup",
    companyName: "ZigGroup Architecture ",
    category: ["WordPress", "Full Stack"],
    shortDescription:
      "ZigGroup is a website for an architecture firm, showcasing a portfolio of architectural projects and more.",
    websiteLink: "https://zigarch.com",
    companyLogoImg: "/projects/ziggroup/logo.png",
    techStack: ["WordPress", "PHP"],
    pagesInfoArr: [
      {
        title: "Home Page",
        description: "Home page for the ZigGroup Architecture",
        imgArr: ["/projects/ziggroup/1.gif"],
      },
      {
        title: "Projects Page",
        description: "Projects page for the ZigGroup Architecture",
        imgArr: ["/projects/ziggroup/2.gif"],
      },
      {
        title: "Contact Page",
        description: "Contact page for the ZigGroup Architecture",
        imgArr: ["/projects/ziggroup/3.gif"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Lost & Found is an interactive web platform aimed at helping users quickly locate or report lost items within a community. Designed with a focus on user experience, the platform allows users to register, report lost items, browse available listings, and engage with others through comments. Built using React, Node.js, and MongoDB, it provides a seamless interface and real-time item tracking capabilities. With features like category filtering (e.g., electronics, personal items), notifications, and an approval system, Lost & Found fosters a secure and collaborative environment for users to reconnect with their misplaced belongings.",
      ],
    },
  },
  {
    id: "lifestats",
    companyName: "LifeStats ",
    category: ["Web Dev"],
    shortDescription:
      "LifeStats is a web application that calculates and visualizes interesting life and world statistics based on the user's birth date",
    websiteLink: "https://life-stats-kappa.vercel.app",
    companyLogoImg: "/projects/lifestats/logo.png",
    techStack: ["React", "Javascript"],
    pagesInfoArr: [
      {
        title: "Landing Page",
        description: "Landing page for the LifeStats",
        imgArr: ["/projects/lifestats/1.png", "/projects/lifestats/2.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "LifeStats is a web application that calculates and visualizes interesting life and world statistics based on the user's birth date. Users can discover personal statistics like days lived, heartbeats, and hours slept, as well as global stats such as the increase in global CO2 levels and population changes. Built with React and styled with Tailwind CSS, LifeStats provides an engaging and informative experience for users interested in exploring their life's impact.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
