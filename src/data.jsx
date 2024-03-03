import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaPython, FaPhp } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiMongodb } from "react-icons/si";
import { TbSql } from "react-icons/tb";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Python",
    icon: <FaPython className="h-16 w-16 text-emerald-500" />,
    text: "Extensive experience in building scalable back-end systems, data analysis, and automation scripts. Emphasis on writing clean, maintainable code following best practices and design patterns.",
  },
  {
    id: nanoid(),
    title: "Next.JS",
    icon: <SiNextdotjs className="h-16 w-16 text-emerald-500" />,
    text: "Creating fast, server-rendered React applications with a focus on SEO optimization and enhanced user experience. Expertise in leveraging Next.js features for static generation and server-side rendering.",
  },
  {
    id: nanoid(),
    title: "PHP",
    icon: <FaPhp className="h-16 w-16 text-emerald-500" />,
    text: "Advanced knowledge of PHP for developing dynamic web applications. Expert in using modern PHP frameworks (such as Laravel and Symfony) to create robust, secure, and scalable server-side applications.",
  },
  {
    id: nanoid(),
    title: "TypeScript",
    icon: <SiTypescript className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in TypeScript, enhancing JavaScript codebases with static type definitions for safer and more predictable code. Experienced in building scalable front-end and back-end applications by leveraging TypeScript’s features for better code quality and maintenance",
  },
  {
    id: nanoid(),
    title: "SQL",
    icon: <TbSql className="h-16 w-16 text-emerald-500" />,
    text: "Strong command of SQL for database management and manipulation. Adept at designing relational database schemas, writing complex queries, and optimizing database performance across multiple SQL-based systems.",
  },
  {
    id: nanoid(),
    title: "mongoDB",
    icon: <SiMongodb className="h-16 w-16 text-emerald-500" />,
    text: "Experienced in MongoDB for designing and implementing NoSQL database architectures. Proficient in data modeling, aggregation framework, and optimizing database performance for large-scale applications.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "/src/assets/auth.png",
    url: "https://parselinho.github.io/ecommerce-small-shop-react/",
    github: "https://github.com/Parselinho/ecommerce-small-shop-react",
    title: "comfy store",
    text: "Developed a user-friendly and visually appealing e-commerce platform, utilizing a robust stack comprising React for the frontend development, React Router for seamless navigation, Redux Toolkit (RTK) and React Query for efficient state management and data fetching, combined with the TailwindCSS for responsive design and DaisyUI for a sleek, modern UI/UX. This combination of technologies enabled the creation of a highly interactive and comfortable shopping experience.",
  },
  {
    id: nanoid(),
    img: "/src/assets/comfy1.png",
    url: "https://weblogal.com",
    github: "https://github.com/Parselinho/BlogWebsite",
    title: "Web Blog",
    text: "my primary focus was to enhance and showcase my JavaScript development skills. This project represents a significant milestone in my journey as a developer, marking my first foray into full-stack development. It was a self-driven initiative, undertaken after an extensive period of self-study and practical experimentation.",
  },
  {
    id: nanoid(),
    img: "/src/assets/comfy2.png",
    url: "https://react2.online/courses",
    github: "https://github.com/Parselinho/project-10",
    title: "React Courses List",
    text: "In this comprehensive web project, my primary focus was on enhancing my React skills, leveraging a robust frontend and backend technology stack to create a dynamic and interactive web application.",
  },
  {
    id: nanoid(),
    img: "/src/assets/comfy3.png",
    url: "https://parselinho.github.io/employees/",
    github: "https://github.com/Parselinho/employees",
    title: "Employees List Copy",
    text: "In this comprehensive web project, my primary focus was on enhancing my React skills, leveraging a robust frontend and backend technology stack to create a dynamic and interactive web application.",
  },
  {
    id: nanoid(),
    img: "/src/assets/comfy4.png",
    url: "https://parselinho.github.io/FSConference/",
    github: "https://github.com/Parselinho/FSConference",
    title: "FS Conference Copy",
    text: "In this comprehensive web project, my primary focus was on enhancing my React skills, leveraging a robust frontend and backend technology stack to create a dynamic and interactive web application.",
  },
  {
    id: nanoid(),
    img: "/src/assets/ecommerce.png",
    url: "https://parselinho.github.io/Phrase-Hunter/",
    github: "https://github.com/Parselinho/Phrase-Hunter",
    title: "Phrase Hunter",
    text: "In this project, I developed an engaging and interactive web game titled 'Phrase Hunter'. The game challenges players to guess a hidden phrase, similar to the classic Hangman game. I implemented the game logic using vanilla JavaScript, focusing on object-oriented programming principles.",
  },
  {
    id: nanoid(),
    img: "/src/assets/matrix.png",
    url: "https://parselinho.github.io/circleProject/",
    github: "https://github.com/Parselinho/circleProject",
    title: "Circles",
    text: "In this project, titled 'Circles UI Kit', I explored and integrated Sass for the first time in my web development studies. The project features a comprehensive UI kit, designed to provide a solid foundation for web design projects. Emphasizing a clean and refreshing aesthetic, the UI kit includes a variety of elements such as typography, buttons, form elements, and a responsive grid system. By employing Sass, I was able to streamline the styling process, making the CSS more maintainable and scalable. This was crucial in handling the kit's diverse components, from basic typography to complex grid layouts.",
  },
  {
    id: nanoid(),
    img: "/src/assets/matrix2.png",
    url: "https://parselinho.github.io/galleryProject/",
    github: "https://github.com/Parselinho/galleryProject",
    title: "Photo Gallery",
    text: "I created 'Gal Photo Gallery', a visually captivating and interactive photo gallery website. The heart of the gallery is a grid layout showcasing a collection of photographs, each accompanied by a descriptive caption. A key feature of this gallery is the custom search functionality implemented in JavaScript, allowing users to filter photos based on keywords found in their captions. The search enhances the user experience by dynamically displaying only those images that match the user's query. The layout was meticulously styled using CSS, with a focus on creating a responsive grid that adapts to different screen sizes. The integration of the 'baguetteBox' library provided a sleek and intuitive lightbox effect for viewing images, elevating the overall aesthetic and functionality of the gallery.",
  },
  {
    id: nanoid(),
    img: "/src/assets/matrix3.png",
    url: "https://parselinho.github.io/webApp/",
    github: "https://github.com/Parselinho/webApp",
    title: "Web App",
    text: "I created 'Gal Photo Gallery', a visually captivating and interactive photo gallery website. The heart of the gallery is a grid layout showcasing a collection of photographs, each accompanied by a descriptive caption. A key feature of this gallery is the custom search functionality implemented in JavaScript, allowing users to filter photos based on keywords found in their captions. The search enhances the user experience by dynamically displaying only those images that match the user's query. The layout was meticulously styled using CSS, with a focus on creating a responsive grid that adapts to different screen sizes. The integration of the 'baguetteBox' library provided a sleek and intuitive lightbox effect for viewing images, elevating the overall aesthetic and functionality of the gallery.",
  },
  {
    id: nanoid(),
    img: "/src/assets/matrix4.png",
    url: "https://www.npmjs.com/package/authenticrealm",
    github: "https://github.com/Parselinho/authenticrealm",
    title: "third project",
    text: "AuthenticRealm is a comprehensive solution for handling user authentication and authorization in Node.js applications. It simplifies the process of implementing user registration, login, email verification, password reset, and role-based access control, making it ideal for rapid development.",
  },
];
