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
