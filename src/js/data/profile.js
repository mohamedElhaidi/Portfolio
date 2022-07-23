import portraitIMG from "../../assets/profile/portrait.png";
export const profile = {
  firstName: "Mohamed",
  secondName: "El-haidi",
  dateOfBirth: "1997-03-03",
  bio: `Hi, my name is Mohamed El-haidi from Morocco, web developer. started to learn frontend web developent 5 months ago by learning HTML and CSS/SCSS first, then moved to JavaScript and recently ReactJs.\n
          My ambition is to become a Fullstack web developer in the near future by learning even more technologies.\n
          I choosed to learn Web dev because it's so amazing to be able to create different kind of apps. The challenges I face during this process of learning makes my passion for this grow more and more`,
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
