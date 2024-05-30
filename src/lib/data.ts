import React from "react";
import {
  School,
  LibraryIcon,
  University,
  Code,
  GraduationCap,
} from "lucide-react";

// For links between pages
export const links = [
  {
    name: "About",
    link: "/",
  },
  {
    name: "Blog",
    link: "/blogs",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Contact",
    link: "/contact",
  },
] as const;

// For linking inside about page
export const aboutPageLinks = [
  {
    name: "About",
    hash: "#about",
    link: "/about",
  },
  {
    name: "Projects",
    hash: "#projects",
    link: "/projects",
  },
  {
    name: "Skills",
    hash: "#skills",
    link: "/Skills",
  },
  {
    name: "Experience",
    hash: "#experience",
    link: "/experience",
  },
  {
    name: "Contact",
    hash: "#contact",
    link: "/contact",
  },
] as const;

// Skills

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js/Express",
  "Git",
  "TailwindCSS",
  "Prisma",
  "MongoDB/Mongoose",
  "GraphQL",
  "Apollo",
  "PostgreSQL",
  "WordPress",
  "Sanity.io",
  "Socket.io",
  "Framer Motion",
  "Figma",
  "UX/UI",
] as const;

export const experienceData = [
  {
    title: "Internship - GOOZO",
    location: "Gothenburg - Remote",
    description:
      "Internship that spanned over two periods, 10 and 15 weeks repectively, where I had the opportunity to...",
    icon: React.createElement(Code),
    date: "2023 - 2024",
  },
  {
    title: "Medieinstitutet - Full-stack web development",
    location: "Stockholm - Remote",
    description:
      "Two year long vocational program in full-stack webdevelopment.",
    icon: React.createElement(GraduationCap),
    date: "2022 - 2024",
  },
  {
    title: "Strängnäs Communal Library",
    location: "Strängnäs",
    description: "Library assistant ...",
    icon: React.createElement(LibraryIcon),
    date: "2018 - 2021",
  },
  {
    title: "Mälardalen University - English and communication program",
    location: "Eskilstuna",
    description:
      "Liberaral arts degree in language and communication studies ...",
    icon: React.createElement(University),
    date: "2016 - 2018",
  },
] as const;
