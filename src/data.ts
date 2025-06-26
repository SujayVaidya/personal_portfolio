import meetups from "./assets/MeetupsBySV.png";
import techies from "./assets/TechiesBySV.png";
import html5 from "./assets/skills/html-5.png";
import css from "./assets/skills/css.png";
import js from "./assets/skills/js.png";
import ts from "./assets/skills/ts.png";
import react from "./assets/skills/react.png";
import redux from "./assets/skills/redux.png";
import mui from "./assets/skills/mui.png";
import tailwindCss from "./assets/skills/tailwind-css.png";
import aws from "./assets/skills/aws.png";
import firebase from "./assets/skills/firebase.png";
// import vscode from "./assets/skills/vscode.png";
import capacitorJs from "./assets/skills/capacitor-js.png";
import nodejs from "./assets/skills/node-js.png";
import mysql from "./assets/skills/mysql.png";
import mongodb from "./assets/skills/mongodb.png";
import express from "./assets/skills/express-js.png";
import angular from "./assets/skills/angular.png";
export interface Experience {
  title: string;
  company: string;
  date: string;
  bullets: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  img: string;
  liveUrl: string;
  repoUrl: string;
}

export const experience: Experience[] = [
  {
    title: "Associate Software Developer",
    company: "ZentrumHub",
    date: " June 2025 - present",
    bullets: [
      "Currently working as Associate Software Developer at ZentrumHub.",
    ],
  },
  {
    title: "Frontend Engineer",
    company: "Anveshak Technology and Knowledge Solutions",
    date: "December 2022 - May 2025",
    bullets: [
      "Delivered 4+ responsive and performant web/mobile apps using React.js and React Native, featuring role-based access control, offline support (AWS DataStore) and chatbot interfaces powered by AWS Amplify, GraphQL, S3, and DynamoDB.",
      "Improved app performance by 40% using Core Web Vitals; implemented code-splitting, lazy loading, and memoization (React.memo, useMemo) to optimize load times and API efficiency.",
      "Integrated biometric authentication, WebView-to-web bridging, and social login (Google/Apple Sign-In), driving a 25% increase in daily active users.",
      "Achieved 95% test coverage with Jest, reducing production bugs by 60%+ and enabling faster, stable releases; followed clean code principles and wrote component-level unit tests.",
      "Diagnosed and resolved high-priority production issues using Redux DevTools, browser debugging, and console tracing — cutting incident resolution time by 60%.",
      "Maintained a scalable and semantic component system in a cross-functional Agile team; used Trello, Git, and Slack for task management and CI workflows.",
      "Collaborated with product owners to translate business requirements into scalable, maintainable frontend features.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Techies Blog Site",
    description:
      "A responsive tech blog frontend showcasing curated blog posts and developer resources. Designed and styled multiple blog card layouts with Bootstrap components. Focused on clean UI and mobile-first design principles.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    img: `${techies}`,
    liveUrl: "https://sujayvaidya.github.io/TechiesbySV/",
    repoUrl: "https://github.com/SujayVaidya/TechiesbySV",
  },
  {
    title: "Meetups Manager",
    description:
      "Built a dynamic form to add new meetups with image URLs, location, and descriptions. Used React Context API for global state management (e.g., favorites list). Styled with custom CSS modules and responsive layout.",
    tech: ["React.js", "React Context API", "CSS Modules"],
    img: `${meetups}`,
    liveUrl: "https://meetupbysv.netlify.app/",
    repoUrl: "https://github.com/SujayVaidya/svmart",
  },
];

export const CONTACT_URLS = {
  email: "mailto:sujayvaidya4@gmail.com",
  linkedin: "https://linkedin.com/in/sujayvaidya",
  github: "https://github.com/SujayVaidya",
  instagram: "https://www.instagram.com/sujayvaidya16",
  x: "https://x.com/sujayvaidya2",
};

interface SkillType {
  name: string;
  src: string;
}
export const skills: SkillType[] = [
  { name: "HTML", src: html5 },
  { name: "CSS", src: css },
  { name: "JavaScript", src: js },
  { name: "TypeScript", src: ts },
  { name: "React", src: react },
  { name: "Redux", src: redux },
  { name: "Material UI", src: mui },
  { name: "Tailwind CSS", src: tailwindCss },
  { name: "AWS", src: aws },
  { name: "Firebase", src: firebase },
  { name: "Angular", src: angular },
  { name: "Capacitor JS", src: capacitorJs },
  { name: "Node JS", src: nodejs },
  { name: "Express JS", src: express },
  { name: "MongoDB", src: mongodb },
  { name: "MySQL", src: mysql },
];
