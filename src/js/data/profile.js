import portraitIMG from "../../assets/profile/portrait.png";
export const profile = {
  firstName: "Mohamed",
  secondName: "El-haidi",
  dateOfBirth: "1997",
  bio: `Hi, my name is Mohamed El-haidi from Morocco,A self-taught web developer. Coding is my love of life since I was little and always had a dream of making amazing Apps. I started learing to code by watching and reading online courses.\n
          My ambition is to become a Fullstack web developer in the near future by learning even more technologies.\n
          `,
  imageProfileURL: portraitIMG,
  frontEndSkills: {
    name: "Front-end",
    tags: [
      { name: "HTML", progress: 95, color: "white" },
      { name: "CSS/SCSS", progress: 65, color: "white" },
      { name: "JavaScript", progress: 60, color: "white" },
      { name: "ReactJs", progress: 80, color: "white" },
    ],
  },

  backendEndSkills: {
    name: "Back-end",
    tags: [
      { name: "MYSQL", progress: 35, color: "white" },
      { name: "NodeJs", progress: 50, color: "white" },
      { name: "Firebase", progress: 60, color: "white" },
    ],
  },
};
