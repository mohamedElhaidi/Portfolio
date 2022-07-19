import ecommerceIMG from "../../assets/img/ecommerce.PNG";
import bugTrackerIMG from "../../assets/img/bugTracker.PNG";
export const projects = [
  {
    id: 0,
    thumbnail: ecommerceIMG,
    title: "ECOMMERCE SHOP",
    description:
      "An ecommerce website made with reactJs, php and mysql as database. simple design using css with responsive layouts. utilise Stripe api for payements.",
    tags: ["ReactJs", "React-Router", "PHP", "MYSQL", "STRIPE"],
    githubURL: "https://google.com",
    liveDemoURL: "https://google.com",
    sections: [
      {
        title: "title",
        description: "something",
        image: ecommerceIMG,
      },
    ],
  },
  {
    id: 1,
    thumbnail: bugTrackerIMG,
    title: "BUGS & TASKS TRACKER",
    description:
      "a simple bug and task tracking app using ReactJS and firebase (authentication, firestore, storage, functions) as backend. provides simple, flexible and secure way to manage projects.",
    tags: ["ReactJs", "React-Router", "Firebase", "MUI"],
    githubURL: "https://google.com",
    liveDemoURL: "https://google.com",
    sections: [
      {
        title: "title",
        description: "something",
        image: bugTrackerIMG,
      },
    ],
  },
];

export const extraProjects = [
  {
    id: 0,
    title: "Masongry",
    description:
      "A library that provides masonry react component, simple and flexible with responsiveness",
    tags: ["JavaScript", "ReactJs"],
    externalLink: "https://google.com",
  },
  {
    id: 1,
    title: "Snake game",
    description: "A simple snake game made using Javascript and canvas",
    tags: ["JavaScript", "HTML", "CSS"],
    externalLink: "https://google.com",
  },
  {
    id: 2,
    title: "Porfilio",
    description:
      "my porftolio made to fit all screens and with a beautiful design wink wink",
    tags: ["Javascript", "SCSS", "HTML"],
    externalLink: "https://google.com",
  },
];
