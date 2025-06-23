import {
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "ReactJs & NextJs Frontend Developer",
    icon: web,
  },
  {
    title: "Node Js & ExpressJs Backend Developer",
    icon: backend,
  },
  {
    title: "Language : Java",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
];

const experiences = [
  {
    title: "Frontend Web Developer Intern",
    company_name: "ReviveEcoTech",
    icon: shopify,
    iconBg: "#383E56",
    date: "May 11- July 11, 2025",
    points: [
      "Developing responsive and user-friendly web Page  using NextJs and TailwindCSS",
      "Engaging With Team Members for Support and Assist for Project Development",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const projects = [
  {
    name: "Movie_list",
    description:
      "A simple movie list website with the help API all movies are available on the website with simple search functionality.With Add or Drop Favorites ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      "https://github.com/kedhar123/MovieListWithAddOrDropFavorites",
  },
  {
    name: "Calorie Tracker",
    description:
      " Engineered a system calculating daily caloric needs and macros and activity multipliers. calorie and macro calculations. Integrated exercise recommendations, defining 30–90 min/day workout plans to achieve 500–1000 kcal deficit or surplus. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/kedhar123/Calorie-Tracker",
  },
  {
    name: "Personal Portfolio",
    description:
      "A personnel portfolio created using ThreeJs and ReactJs with Tailwind css for Styling the website and giving it a dynamic look this website shows my skills and project what I have done and Learned till now.With dynamic animations and smooth transitions",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJs",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/kedhar123/kedhar-portfolio",
  },
];

export { services, technologies, experiences, projects };
