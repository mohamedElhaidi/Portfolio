import "./components/sideMenu.js";
import "./components/imagePreview.js";
import "./components/projectModal.js";
import vanishers from "./components/vanisher.js";
// import "./services/visits.js";
// import "./components/underNavBarScrollProgress.js";
// import "./components/spinnableCircle.js";

import { extraProjects, projects } from "./data/projects.js";
import { profile } from "./data/profile.js";

import ResumePDF from "../assets/docs/cv5.pdf";
import { socialMedia } from "./data/social.js";
import createProfileElement from "./generators/aboutMe.js";
import createProjectCardElement from "./generators/featuredProjects.js";
import createExtraCardElement from "./generators/extraProjects.js";
import createSocialMediaElement from "./generators/socialMedia.js";

document.getElementById("ResumeLink").href = ResumePDF;

const projectsHolder = document.querySelector(
  "#featured-projects .section__content"
);
const extraProjectsHolder = document.querySelector(
  "#extra-projects .extra-projects-page__wrap"
);
const profileHolder = document.querySelector("#about-me .about-me-page__wrap");
projects.forEach((project) => {
  projectsHolder.appendChild(createProjectCardElement(project));
});
extraProjects.forEach((extra) => {
  extraProjectsHolder.appendChild(createExtraCardElement(extra));
});

profileHolder.appendChild(createProfileElement(profile));

// social media
const socialMediaFloaterList = document.querySelectorAll(
  ".social-media-list ul"
);

socialMedia.forEach((data) =>
  socialMediaFloaterList.forEach((list, index) =>
    list.appendChild(createSocialMediaElement(data, index))
  )
);

// logo effect
const navBarLogo = document.querySelector("#navBar-logo");
document.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  const scrollPosMax = Math.ceil(
    document.body.offsetHeight - window.innerHeight
  );
  const width = (150 / scrollPosMax) * scrollPos;
  navBarLogo.children[1].style.width = width + "px";
});

// initializing vanishers
vanishers.init();
