import "./components/sideMenu.js";
import "./components/imagePreview.js";
import "./components/projectModal.js";
import vanishers from "./components/vanisher.js";
import "./services/visits.js";
// import "./components/underNavBarScrollProgress.js";
// import "./components/spinnableCircle.js";

import { extraProjects, projects } from "./data/projects.js";
import { profile } from "./data/profile.js";

import ResumePDF from "../assets/docs/CV_final_2022_9_26.pdf";
import { socialMedia } from "./data/social.js";
import createProfileElement from "./generators/aboutMe.js";
import createProjectCardElement from "./generators/featuredProjects.js";
import createExtraCardElement from "./generators/extraProjects.js";
import createSocialMediaElement from "./generators/socialMedia.js";

document.getElementById("ResumeLink").href = ResumePDF;

// populate projects
const projectsHolder = document.querySelector(
  "#featured-projects .section__content"
);
projects.forEach((project) => {
  projectsHolder.appendChild(createProjectCardElement(project));
});

// populate mini projects
const extraProjectsHolder = document.querySelector(
  "#extra-projects .extra-projects-page__wrap"
);
extraProjects.forEach((extra) => {
  extraProjectsHolder.appendChild(createExtraCardElement(extra));
});

// populate profile
const profileHolder = document.querySelector("#about-me .about-me-page__wrap");
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

// contact

const contatMeForm = document.querySelector("#contatMe-form");

contatMeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const { value: contactName } = document.querySelector("#contact-name");
  const { value: contactEmail } = document.querySelector("#contact-email");
  const { value: contactMessage } = document.querySelector("#contact-message");

  const data = {
    contactName,
    contactEmail,
    contactMessage,
  };

  // const contactDoc
});
