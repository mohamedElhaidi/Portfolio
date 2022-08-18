import portraitIMG from "../../assets/profile/portrait.png";
export const profile = {
  firstName: "Mohamed",
  secondName: "El-haidi",
  dateOfBirth: "1997-03-03",
  bio: `Hi, my name is Mohamed El-haidi from Morocco,A self-taught web developer. Coding is my love of life since I was little and I always had that vision of making amazing Apps. I started learing to code by myself by watching and reading online courses and I feel that I have enough tech knowledge to begin my career.\n
          My ambition is to become a Fullstack web developer in the near future by learning even more technologies from web to mobile and others.\n
          `,
  imageProfileURL: portraitIMG,
  frontEndSkills: {
    name: "Front-end",
    tags: [
      { name: "HTML", progress: 95 },
      { name: "CSS/SCSS", progress: 65 },
      { name: "JavaScript", progress: 60 },
      { name: "ReactJs", progress: 80 },
      //   { name: "Stripe", progress: 50 },
      //   { name: "MUI", progress: 50 },
      //   { name: "Joi", progress: 50 },
      //   { name: "JSAP", progress: 50 },
    ],
  },

  backendEndSkills: {
    name: "Back-end",
    tags: [
      { name: "MYSQL", progress: 44 },
      { name: "NodeJs", progress: 55 },
      { name: "PHP", progress: 35 },
      { name: "Firebase", progress: 40 },
    ],
  },
};
