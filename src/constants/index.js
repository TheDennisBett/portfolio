import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    skytop,
    sybyl,
    dewcis,
    craft,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    }
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Fullstack Developer",
      company_name: "Craft Silicon",
      icon: craft,
      iconBg: "#383E56",
      date: "Aug 2024 - Present",
      points: [
        "Developing and maintaining core banking solution for banks and saccos.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Fullstack Developer",
      company_name: "Skytop technologies",
      icon: skytop,
      iconBg: "#383E56",
      date: "Aug 2022 - July 2023",
      points: [
        "Developing and maintaining web applications using React.js,codeigniter and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Business Intelligence Developer Intern",
      company_name: "Sybyl",
      icon: sybyl,
      iconBg: "#E6DEDD",
      date: "May 2021 - July 2022",
      points: [
        "Developing and maintaining business intelligence models using Qliksense, SQL and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Fullstack Developer Intern",
      company_name: "Dewcis Solutions Limited",
      icon: dewcis,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web and desktop applications using Java, Php and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    //example
    // {
    //   testimonial:
    //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    //   name: "Sara Lee",
    //   designation: "CFO",
    //   company: "Acme Co",
    //   image: "https://randomuser.me/api/portraits/women/4.jpg",
    // },
   
  ];
  
  const projects = [
    {
      name: "Developer Jobs Posting Website",
      description:
        "Web-based platform that allows users to post, search, and apply developer jobs and gigs, providing a convenient and efficient solution for meeting short term needs in development industry.",
      tags: [
        {
          name: "Laravel",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/erickkipkoech/devjobsposting",
    },
    {
      name: "CRUD Rest Apis",
      description:
        "Restful Apis that enable frontend developers to integrate CRUD functionalities to web or mobile applications,perform authentication to users.",
      tags: [
        {
          name: "Laravel",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "postgres",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/erickkipkoech/laravel-api-sanctum-authentication",
    },
    {
      name: "Blog Landing Page",
      description:
        "A comprehensive Blogging platform that allows users to write and view blogs from their favourite bloggers, sharing stories, business recommendations for different places.",
      tags: [
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/erickkipkoech/tailwind-landing-page",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  