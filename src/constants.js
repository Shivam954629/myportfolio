// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import javaLogo from "./assets/tech_logo/java.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import groqLogo from "./assets/tech_logo/groq.png";
import huggingfaceLogo from "./assets/tech_logo/huggingface.png";

// Experience Section Logo's
import cromaCampusLogo from "./assets/company_logo/cromacampus_logo.png";

// Education Section Logo's
import iimtLogo from "./assets/education_logo/iimt.jpg";
import digdarshanLogo from "./assets/education_logo/digdarshan_logo.jpg";
import ccdsLogo from "./assets/education_logo/school_logo.png";

// Project Section Logo's
import cinehubLogo from "./assets/work_logo/cinehub_logo.png";
import clothingLogo from "./assets/work_logo/clothing_logo.png";
import bmiCalculatorLogo from "./assets/work_logo/bmicalculator_logo.png";
import colorSwitcherLogo from "./assets/work_logo/colorswitcher_logo.png";
import weatherAppLogo from "./assets/work_logo/weather-app_logo.png";
import todoListLogo from "./assets/work_logo/todo-list_logo.png";
import expenseTrackerLogo from "./assets/work_logo/expense-tracker_logo.png";
import quizLogo from "./assets/work_logo/quiz_logo.png";
import vibeCodeLogo from "./assets/work_logo/vibe-code_logo.png";
import aiThumbnailLogo from "./assets/work_logo/ai-thumbnail-generator_logo.png";
import aiNgfwLogo from "./assets/work_logo/ai-ngfw_logo.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Groq AI", logo: groqLogo },
      { name: "Hugging Face", logo: huggingfaceLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: cromaCampusLogo,
    role: "Frontend Developer Intern",
    company: "Croma Campus",
    date: "June 2025 - August 2025",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend modules. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Express JS",
      "MongoDB",
      "Tailwind CSS",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: iimtLogo,
    school: "IIMT College of Engineering, Greater Noida",
    date: "Sept 2022 - July 2026",
    grade: "7.01 CGPA",
    desc: "Pursuing Bachelor of Technology in Computer Science. Gained a strong foundation in Data Structures, Algorithms, OOP, DBMS, Web Development, and Software Engineering. Actively participated in workshops, hackathons, and technical events that strengthened both technical and problem-solving skills.",
    degree: "Bachelor of Technology - B.Tech (Computer Science)",
  },
  {
    id: 1,
    img: digdarshanLogo,
    school: "Digdarshan Academy, Patna",
    date: "Sept 2019 - Aug 2021",
    grade: "67.7%",
    desc: "Completed Class 12 under CBSE board with Physics, Chemistry, Mathematics (PCM) and Computer Science.",
    degree: "CBSE (XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: ccdsLogo,
    school: "Christ Church Diocesan School, Patna",
    date: "Apr 2017 - March 2018",
    grade: "73%",
    desc: "Completed Class 10 under CBSE board with Science and Computer Application.",
    degree: "CBSE (X) - Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "Vibe Code — AI Code Editor",
    description:
      "Vibe Code is a blazing-fast AI-powered web IDE built with Next.js 15 App Router and WebContainers — runs full frontend/backend apps directly in the browser. Features Monaco Editor with AI code suggestions powered by Groq API (llama-3.3-70b), embedded terminal via xterm.js, custom file explorer, and OAuth login (Google + GitHub) via NextAuth. User data stored in MongoDB.",
    image: vibeCodeLogo,
    tags: [
      "Next JS",
      "TypeScript",
      "Groq AI",
      "MongoDB",
      "NextAuth",
      "Monaco Editor",
      "WebContainers",
      "Tailwind CSS",
      "ShadCN UI",
    ],
    category: "fullstack",
    github: "https://github.com/Shivam954629/building-vibe-code-editor",
    webapp: "https://building-vibe-code-editor.vercel.app/",
  },
  {
    id: 1,
    title: "Thumblify — AI Thumbnail Generator",
    description:
      "Thumblify is a full-stack AI-powered thumbnail generator for YouTube creators. Users enter a video title, choose a style (Bold, Futuristic, Minimalist, etc.) and color scheme, and the app generates a professional thumbnail using Hugging Face's Stable Diffusion XL model. Features include user authentication with session-based login (Bcrypt + Express Session), automatic image upload to Cloudinary, and a personal thumbnail history saved in MongoDB.",
    image: aiThumbnailLogo,
    tags: [
      "React JS",
      "TypeScript",
      "Node JS",
      "Express JS",
      "MongoDB",
      "Hugging Face API",
      "Cloudinary",
      "Mongoose",
    ],
    category: "fullstack",
    github: "https://github.com/Shivam954629/AI-thumbnail-generator",
    webapp: "https://ai-thumbnail-generator-server-sepia.vercel.app/",
  },
  {
    id: 2,
    title: "AI Next-Gen Firewall (NGFW)",
    description:
      "An AI-powered Next-Generation Firewall system built as a final year academic project based on IJRIAS research. Uses Random Forest for known attack detection and Autoencoder + IsolationForest for zero-day anomaly detection with a Zero Trust policy engine. The backend is built in Python with FastAPI, exposing REST endpoints for real-time traffic analysis. A React dashboard displays live stats, model metrics, threat alerts, and supports CSV export and demo mode. Containerized using Docker.",
    image: aiNgfwLogo,
    tags: [
      "Python",
      "FastAPI",
      "Machine Learning",
      "React JS",
      "Docker",
      "Random Forest",
      "REST API",
    ],
    category: "ai",
    github: "https://github.com/Shivam954629/ai-ngfw",
    webapp: "https://ai-ngfw-qgxn.vercel.app/",
  },
  {
    id: 3,
    title: "Expense Tracker",
    description:
      "A full-stack expense tracker that helps users manage income and expenses with real-time balance calculation. Features include add/delete transactions, category-wise breakdown, and persistent data storage. Built with React, Node.js, Express, and MongoDB.",
    image: expenseTrackerLogo,
    tags: ["React JS", "Node JS", "Express JS", "MongoDB", "Tailwind CSS"],
    category: "fullstack",
    github: "https://github.com/Shivam954629/expense-tracker",
    webapp: "https://expense-tracker-roan-eta.vercel.app/",
  },
  {
    id: 4,
    title: "Todo List App",
    description:
      "A feature-rich Todo List app with Google authentication and real-time cloud sync using Firebase Firestore. Users can create, update, delete, and mark tasks complete. Data persists across sessions and devices.",
    image: todoListLogo,
    tags: ["React JS", "Firebase Auth", "Firestore", "JavaScript", "CSS"],
    category: "fullstack",
    github: "https://github.com/Shivam954629/todo-list",
    webapp: "https://todo-list-eight-peach-24.vercel.app/",
  },
  {
    id: 5,
    title: "CineHub — Netflix Clone",
    description:
      "CineHub is a full-stack Netflix-inspired streaming platform built with React and Firebase. Features include Google and Email authentication, real-time watchlist with Firestore sync, live search with debounce, genre filters for movies and TV shows, movie detail pages with trailers, bell notifications, and user settings. Data is fetched from the TMDB API and persisted in Firebase Firestore across sessions and devices.",
    image: cinehubLogo,
    tags: [
      "React JS",
      "Firebase Auth",
      "Firebase Firestore",
      "TMDB API",
      "React Router",
      "CSS3",
    ],
    category: "fullstack",
    github: "https://github.com/Shivam954629/CineHub_Clone",
    webapp: "https://cine-hub-clone.vercel.app/",
  },
  {
    id: 6,
    title: "Weather App",
    description:
      "A real-time weather application using OpenWeatherMap API. Search any city to view live temperature, humidity, wind speed, and conditions in a clean responsive interface.",
    image: weatherAppLogo,
    tags: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    category: "frontend",
    github: "https://github.com/Shivam954629/weather-app",
    webapp: "https://weather-app-sigma-nine-86.vercel.app/",
  },
  {
    id: 7,
    title: "Quiz App",
    description:
      "An interactive Quiz App with multiple-choice questions, per-question timer, score tracking, and result summary. Clean animated UI with smooth transitions.",
    image: quizLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    github: "https://github.com/Shivam954629/quiz-app",
    webapp: "https://quiz-app-lemon-sigma-25.vercel.app/",
  },
  {
    id: 8,
    title: "Clothing Landing Page",
    description:
      "A modern landing page for a clothing brand with product categories, promotional banners, and a smooth browsing experience. Fully responsive and built with React.",
    image: clothingLogo,
    tags: ["React JS", "HTML", "CSS", "JavaScript"],
    category: "frontend",
    github: "https://github.com/Shivam954629/clothing-landing-page",
    webapp: "https://clothing-landing-page-pi.vercel.app/",
  },
  {
    id: 9,
    title: "BMI Calculator",
    description:
      "A clean BMI Calculator where users input height and weight to instantly see their Body Mass Index and health category — underweight, normal, overweight, or obese.",
    image: bmiCalculatorLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    github: "https://github.com/Shivam954629/bmicalclator_project",
    webapp: "http://bmicalclator-project.vercel.app/",
  },
  {
    id: 10,
    title: "Color Switcher",
    description:
      "A small interactive tool to change the webpage background color on button click, with multiple color options and instant visual feedback.",
    image: colorSwitcherLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    github: "https://github.com/Shivam954629/colorchange_project",
    webapp: "https://colorchange-project.vercel.app/",
  },
];
