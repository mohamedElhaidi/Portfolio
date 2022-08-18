import ecommerceIMG from "../../assets/img/ecommerce.PNG";
import bugTrackerIMG from "../../assets/img/bugTracker.PNG";
import userCartIMG from "../../assets/img/user_cart.PNG";
import selectingProductsIMG from "../../assets/img/selectingProducts.PNG";
import userLoginEcommerceIMG from "../../assets/img/userLoginEcommerce.png";
export const projects = [
  {
    id: 0,
    thumbnail: ecommerceIMG,
    title: "ECOMMERCE SHOP",
    description:
      "An ecommerce website made with reactJs, php and mysql as database. simple design using css with responsive layouts. utilise Stripe api for payements.",
    tags: ["ReactJs", "React-Router", "PHP", "MYSQL", "STRIPE"],
    githubURL: "https://github.com/mohamedElhaidi/eCommerce",
    liveDemoURL: "https://bestshop.hantercodes.com",
    sections: [
      {
        title: "Design",
        description: "a simple clean design using styled components library.",
        image: ecommerceIMG,
      },
      {
        title: "Authentication & Authorization",
        description:
          "user can create an account and enjoy all features of the website.",
        image: userLoginEcommerceIMG,
      },
      {
        title: "Stripe as payement service",
        description: "payement with stripe payement api.",
        image: userCartIMG,
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
    githubURL: "https://github.com/mohamedElhaidi/Todo",
    liveDemoURL: "https://bugtracker.hantercodes.com",
    sections: [
      {
        title: "title",
        description: "something",
        image: bugTrackerIMG,
      },
      {
        title: "title",
        description: "something",
        image: bugTrackerIMG,
      },
      {
        title: "title",
        description: "something",
        image: bugTrackerIMG,
      },
      {
        title: "title",
        description: "something",
        image: bugTrackerIMG,
      },
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
    externalLink: "https://github.com/mohamedElhaidi/masonry-react",
  },
  {
    id: 1,
    title: "Snake game",
    description: "A simple snake game made using Javascript and canvas",
    tags: ["JavaScript", "HTML", "CSS"],
    externalLink: "https://github.com/mohamedElhaidi/snake-game",
  },
  {
    id: 2,
    title: "Porfilio",
    description:
      "my porftolio made to fit all screens and with a beautiful design wink wink",
    tags: ["Javascript", "SCSS", "HTML"],
    externalLink: "https://github.com/mohamedElhaidi/Portfolio",
  },
];
