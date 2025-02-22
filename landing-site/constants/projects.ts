interface Project {
  id: string;
  screenshot: string;
  title: string;
  subTitle: string;
  stack: string[];
  description: string;
  date: string;
  github: string;
  live: string;
  color: string;
  btnBg: string;
  btnBgHover: string;
  cardBg: string;
}

export const projects: Project[] = [
  {
    id: "1",
    screenshot: "/images/events/inter-college-hackthon.JPG",
    title: "Inter College Hackathon",
    subTitle: "Technical fest/academic fests",
    stack: ["next.js", "typescript", "clerck", "tailwindcss", "mongodb", "mongoose", "clerck webhooks"],
    description: `Inter College Hackathon is a competitive event where students from various colleges come together to solve real-world problems using technology. This project showcases a platform built to manage and display the hackathon details, participants, and their projects. The application leverages modern web technologies to provide a seamless and interactive experience for users.`,
    date: "Sep 29, 2023",
    github: "",
    live: "",
    color: "rgba(249,115,22)",
    btnBg: "rgba(154,52,18,0.5)",
    btnBgHover: "rgba(67,20,7)",
    cardBg: "rgba(154,52,18,0.05)",
  },
  {
    id: "2",
    screenshot: "/images/events/code-carnival.jpg",
    title: "Code Carnival - The Open Hackathon",
    subTitle: "Technical fest/academic fests",
    stack: ["react", "typescript", "tailwindcss", "nx", "rollup", "Module Federation", "vitest", "playwright", "storybook", "svgr", "lint-staged", "husky", "ci/cd", "aws"],
    description: "Code Carnival - The Open Hackathon is an inclusive event designed to bring together developers, designers, and tech enthusiasts from all backgrounds to collaborate on innovative projects. Participants are encouraged to push the boundaries of technology and creativity, working on projects that range from web applications to AI-driven solutions. This hackathon emphasizes learning, networking, and the spirit of open-source collaboration, providing a platform for individuals to showcase their skills and make meaningful contributions to the tech community.",
    date: "Feb 03, 2024",
    github: "",
    live: "",
    color: "rgba(139,92,246)",
    btnBg: "rgba(91,33,182,0.5)",
    btnBgHover: "rgba(46,16,101)",
    cardBg: "rgba(91,33,182,0.05)",
  },
  {
    id: "3",
    screenshot: "/images/events/orientenation-session.jpg",
    title: "ADSC - Orientenation Session",
    subTitle: "Orientation and introductory session",
    stack: ["typescript", "tailwindcss", "tamagui", "nextjs", "clerk", "convex", "vercel"],
    description: " The ADSC - Orientation Session is an event designed to introduce new members to the ADSC community and provide an overview of the club's activities, initiatives, and opportunities. The session covers topics such as the club's mission, vision, and values, as well as the various projects, workshops, and events that members can participate in. The goal of the orientation session is to welcome new members, help them get acquainted with the club, and inspire them to get involved and make a positive impact in the tech community.",
    date: "Feb 01, 2025",
    github: "",
    live: "https://www.youtube.com/live/7gSnJTBxVjc?si=pIaO7ygLLaQGprul",
    color: "rgba(0,206,201)",
    btnBg: "rgba(0,139,136,0.5)",
    btnBgHover: "rgba(0,99,97)",
    cardBg: "rgba(0,139,136,0.05)",
  },
];
