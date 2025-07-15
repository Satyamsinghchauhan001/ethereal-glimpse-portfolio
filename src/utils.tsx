export const projects = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 2,
    name: "Task Management App",
    description:
      "A collaborative task management application with real-time updates",
    tech: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 3,
    name: "Weather Dashboard",
    description:
      "A responsive weather application with location-based forecasts",
    tech: ["React", "API Integration", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

export const routes = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];
export const techStack = [
  "React",
  "javascript",
  "TypeScript",
  "Next js",
  "React Native",
  "Node.js",
  "Tailwind CSS",
  "Material UI",
  "MongoDB",
  "firebase",
  "expo",
  "NativeWind",
];

export const titles = [
  "Fronted Heavy Full Stack Developer",
  "Web Designer",
  "Cross Platform Developer",
  "Responsive UI Expert",
  "Modern Design Enthusiast",
];

export const slideInLeft = {
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

export const slideInRight = {
  hidden: { x: 60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const contactItem = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

export const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};
