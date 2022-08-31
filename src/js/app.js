import "./components/sideMenu.js";
import "./components/imagePreview.js";
import "./components/projectModal.js";
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

// social mde
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
const vanishers = document.querySelectorAll(".vanisher");

vanishers.forEach((vanisher) => {
  const delay = vanisher.dataset["delay"] || 0;
  // vanisher.style.transitionDuration = "0.3s";
  // vanisher.style.transitionDelay = delay + "ms";
});
document.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  const scrollPosMax = Math.ceil(
    document.body.offsetHeight - window.innerHeight
  );
  const width = (150 / scrollPosMax) * scrollPos;
  navBarLogo.children[1].style.width = width + "px";

  //

  vanishers.forEach((vanisher) => {
    const { y, height } = vanisher.getClientRects()[0];
    const start = y + height * 0.2;
    const end = y + height * 0.8;
    const screenHeight = window.innerHeight;

    if (
      (start > 0 && start < screenHeight) ||
      (end > 0 && end < screenHeight)
    ) {
      vanisher.classList.add("--unvanish");
    } else {
      vanisher.classList.remove("--unvanish");
    }
  });
});
