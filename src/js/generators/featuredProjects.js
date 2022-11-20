import { ProjectModal } from "../components/projectModal.js";
import { projects } from "../data/projects.js";
export default function createProjectCardElement(project) {
  const { thumbnail, title, description, tags, githubURL, liveDemoURL } =
    project;
  const elString = `
    <div data-project-id="${
      project.id
    }" class="project-card --scall-on-hover vanisher --darkCard --rounded-mid" data-delay="100">
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
          <a href="${githubURL}" target="_blank" class="project-card__options__link " >GitHub</a>
          <a href="${liveDemoURL}" target="_blank" class="project-card__options__link " >Live Demo</a>
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
