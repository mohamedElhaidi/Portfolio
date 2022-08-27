import "./components/sideMenu.js";
import "./components/imagePreview.js";
import "./components/projectModal.js";
import "./services/visits.js";
// import "./components/underNavBarScrollProgress.js";
// import "./components/spinnableCircle.js";

import svgfile from "../assets/svg/icons8-react-native-50.svg";

import { extraProjects, projects } from "./data/projects.js";
import { profile } from "./data/profile.js";
import { ProjectModal } from "./components/projectModal.js";

import ResumePDF from "../assets/docs/cv5.pdf";

document.getElementById("ResumeLink").href = ResumePDF;

function createProjectCardElement(project) {
  const { thumbnail, title, description, tags, githubURL, liveDemoURL } =
    project;
  const elString = `
  <div data-project-id="${project.id}" class="project-card --scall-on-hover">
    <div class="project-card__preview zoomable" style="background-image:url(${thumbnail})">
    </div>
    <div class="project-card__info">
      <h2>${title}</h2>
      <p>${description}</p>
      <div class="project-card__tags">
      ${tags.reduce(
        (prev, currentTag) => prev + `<span>${currentTag}</span>`,
        ""
      )}
      </div>
      <div class="project-card__options">
        <a href="${githubURL}" target="_blank" class="project-card__options__link">GitHub</a>
        <a href="${liveDemoURL}" target="_blank" class="project-card__options__link">Live Demo</a>
      </div>
    </div>
  </div>`;
  const HtmlEl = document.createElement("div");
  HtmlEl.innerHTML = elString.trim();
  HtmlEl.querySelectorAll("a").forEach((link) => {
    link.onclick = (e) => {
      e.cancelBubble = true;
    };
  });
  HtmlEl.firstChild.addEventListener(
    "click",
    (e) => {
      new ProjectModal(projects[e.currentTarget.dataset.projectId]);
    },
    false
  );

  return HtmlEl.firstChild;
}
function createExtraCardElement(extra) {
  const { title, description, tags, externalLink } = extra;
  const elString = `<div class="extra-project-card --scall-on-hover">
  <div class="extra-project-card__header">
    <div class="extra-project-card__header__folder">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 64 64"
        enable-background="new 0 0 64 64"
        xml:space="preserve"
      >
        <polygon
          stroke-miterlimit="10"
          points="63,18 63,54 1,54 1,10 22,10 30,18 "
        />
      </svg>
    </div>
    <a
      href="${externalLink}"
      target="_blank"
      class="extra-project-card__header__externalLink"
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 64 64"
        enable-background="new 0 0 64 64"
        xml:space="preserve"
      >
        <path
          stroke-miterlimit="10"
          d="M37.004,32.166c1.224,0.533,2.576,0.829,3.997,0.828
                 c3.271-0.003,6.175-1.576,7.998-4.006L60.99,16.98c1.255-1.673,1.998-3.751,1.996-6.002c-0.003-5.522-4.484-9.997-10.007-9.993
                 c-2.251,0.002-4.327,0.747-5.999,2.004L33.989,15.998c-1.768,1.805-2.997,4.277-2.996,7.003c0.001,1.424,0.3,2.778,0.837,4.003"
        />
        <path stroke-miterlimit="10" d="M37.004,32.166" />
        <path
          stroke-miterlimit="10"
          d="M31.831,27.004c0.053,0.121,0.107,0.24,0.166,0.358"
        />
        <path
          stroke-miterlimit="10"
          d="M26.997,31.836c-1.225-0.535-2.577-0.831-3.998-0.83
                 c-2.251,0.002-4.328,0.747-5.999,2.004L4.01,46.02c-1.768,1.804-2.997,4.276-2.995,7.002c0.003,5.522,4.484,9.997,10.007,9.993
                 c3.271-0.003,6.174-1.576,7.997-4.006L31.01,47.001c1.255-1.673,1.998-3.751,1.996-6.002c-0.001-1.422-0.299-2.774-0.835-3.998"
        />
        <line
          stroke-miterlimit="10"
          x1="23.006"
          y1="41.006"
          x2="40.994"
          y2="22.994"
        />
      </svg>
    </a>
  </div>
  <div class="extra-project-card__info">
    <h2>${title}</h2>
    <p>${description}</p>
    <div class="extra-project-card__tags">
    ${tags.reduce(
      (prev, currentTag) => prev + `<span>${currentTag}</span>`,
      ""
    )}
    </div>
  </div>
</div>`;
  const HtmlEl = document.createElement("div");
  HtmlEl.innerHTML = elString.trim();
  return HtmlEl.firstChild;
}

function createProfileElement(profile) {
  const {
    firstName,
    secondName,
    dateOfBirth,
    bio,
    imageProfileURL,
    frontEndSkills,
    backendEndSkills,
  } = profile;
  const elString = `<div class="myPicture" style=" background-image:url(${imageProfileURL})"></div>
    <div class="text">
      <h2>${firstName + " " + secondName}</h2>
      <h4 class="--dim-text"> born in ${dateOfBirth}</h4>
      ${bio
        .split("\n")
        .reduce((prev, current) => prev + `<p>${current}</p>`, "")}
        <div class="skills-container">
        <h4 style="margin-top:2em">Frond-end</h4>
        ${frontEndSkills.tags.reduce(
          (prev, tag) =>
            prev +
            `<div class="skill">
              <div class="skill__icon"></div>
              <div class="skill__title">${tag.name}</div>
              <div class="skill__progress">
                <div class="skill__progress__bar" style="width:${tag.progress}%"></div>
              </div>
            </div>`,
          ""
        )}
        <h4 style="margin-top:2em">Back-end</h4>
        ${backendEndSkills.tags.reduce(
          (prev, tag) =>
            prev +
            `<div class="skill">
              <div class="skill__icon"></div>
              <div class="skill__title">${tag.name}</div>
              <div class="skill__progress">
                <div class="skill__progress__bar" style="width:${tag.progress}%"></div>
              </div>
            </div>`,
          ""
        )}
      </div>
    </div>`;
  const HtmlEl = document.createElement("div");
  HtmlEl.innerHTML = elString.trim();
  HtmlEl.classList.add("profileHolder");
  return HtmlEl;
}
const projectsHolder = document.querySelector(
  "#featured-projects-page .page__wrap"
);
const extraProjectsHolder = document.querySelector(
  "#extra-projects-page .extra-projects-page__wrap"
);
const profileHolder = document.querySelector(
  "#about-me-page .about-me-page__wrap"
);

projects.forEach((project) => {
  projectsHolder.appendChild(createProjectCardElement(project));
});
extraProjects.forEach((extra) => {
  extraProjectsHolder.appendChild(createExtraCardElement(extra));
});

profileHolder.appendChild(createProfileElement(profile));
