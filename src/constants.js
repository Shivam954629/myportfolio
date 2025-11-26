// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import vercelLogo from './assets/tech_logo/vercel.png';



// Experience Section Logo's
import cromaCampusLogo from './assets/company_logo/cromacampus_logo.png';


// Education Section Logo's
import iimtLogo from './assets/education_logo/iimt.jpg';
import digdarshanLogo from './assets/education_logo/digdarshan_logo.jpg';
import ccdsLogo from './assets/education_logo/school_logo.png';


// Project Section Logo's
import cinehubLogo from './assets/work_logo/cinehub_logo.png';
import clothingLogo from './assets/work_logo/clothing_logo.png';
import bmiCalculatorLogo from './assets/work_logo/bmicalculator_logo.png';
import colorSwitcherLogo from './assets/work_logo/colorswitcher_logo.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
     
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: cromaCampusLogo,
      role: "Frontend Developer",
      company: "Croma Campus",
      date: "June 2025 - August 2025",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling  frontend. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
       
      ],
    },
    
  ];
  
  export const education = [
    {
      id: 0,
      img: iimtLogo ,
      school: "IIMT COLLEGE OF ENGINEERING, GR NOIDA",
      date: "Sept 2022 - July 2026",
      grade: "7.01 CGPA",
      desc: "I have completed my Bachelors's degree (BTECH) in Computer Science from IIMT College of Engineering, Gr.Noida. During my time at IIMT, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at IIMT College has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor of Technology - BTECH (Computer Science",
    },
    {
      id: 1,
      img: digdarshanLogo,
      school: "Digdarshan Academy, Patna",
      date: "Sept 2019 - Aug 2021",
      grade: "67.7%",
      desc: "I completed my class 12 education from Digdarshan Academy, Patna, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: ccdsLogo,
      school: "Christ Church Diocesan School, Patna",
      date: "Apr 2017 - March 2018",
      grade: "73%",
      desc: "I completed my class 10 education from Christ Church Diocesan School, Patna, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
   
  ];
  
  export const projects = [
    {
      id: 0,
      title: "CineHub",
      description:
        "CineHub is a modern React-based movie discovery application that allows users to search, explore, and get details of movies in real time. It uses a clean UI and API-powered data to provide a smooth browsing experience. Users can view movie posters, ratings, summaries, and release details with an intuitive and responsive interface.",
      image: cinehubLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "TMDB API"],
      github: "https://github.com/Shivam954629/CineHub_Clone",
      webapp: "https://cine-hub-clone.vercel.app/",
    },
    {
      id: 1,
      title: "Clothing-Landing-Page",
      description:
        "A clean and modern landing page for a clothing brand. It displays featured products, categories, and promotional banners in an attractive layout. The page is easy to navigate and designed to give users a smooth shopping experience.",
      image: clothingLogo,
      tags: ["React JS", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Shivam954629/clothing-landing-page",
      webapp: "https://clothing-landing-page-pi.vercel.app/",
    },
    {
      id: 2,
      title: "BMI Calculator",
      description:
        "A basic BMI Calculator that allows users to enter their height and weight to instantly check their Body Mass Index. It shows whether the user is underweight, normal, overweight, or obese with clear and easy-to-understand results.",
      image: bmiCalculatorLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Shivam954629/bmicalclator_project",
      webapp:"http://bmicalclator-project.vercel.app/",
    },
    {
      id: 3,
      title: "Color Switcher",
      description:
        "A small interactive tool that allows users to change the background color of the webpage with one click. It provides multiple color options and updates the screen instantly.",
      image: colorSwitcherLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Shivam954629/colorchange_project",
      webapp: "https://colorchange-project.vercel.app/",
    },
    
  ];  
