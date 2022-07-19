export class ProjectModal {
  #projectModalElement;
  #projectModalElDimensions;

  #project;
  #visible = false;
  constructor(project) {
    // stop scrolling
    document.body.style.overflow = "hidden";
    // init
    this.#project = project;
    this.#projectModalElement = this.createModal();
    document.body.appendChild(this.#projectModalElement);
    this.#projectModalElDimensions =
      this.#projectModalElement.getBoundingClientRect();

    const sectionsWindow = this.#projectModalElement.querySelector(
      ".project-modal__window"
    );
    const sectionsWrapper = this.#projectModalElement.querySelector(
      ".project-modal__window__section-wrapper"
    );
    const sectionsEls = [];

    project.sections.forEach((section) => {
      const sectionEl = this.createSection(section);
      sectionsEls[sectionsEls.length] = sectionEl;
      sectionsWrapper.appendChild(sectionEl);
    });

    this.checkVisibilityOfSections(sectionsEls);
    sectionsWindow.addEventListener("scroll", (e) => {
      this.checkVisibilityOfSections(sectionsEls);
    });
  }

  createModal() {
    const elString = `
    <div id="project-modal" class="project-modal">
      <div class="project-modal__cover"></div>
      <div class="project-modal__window">
        <header class="project-modal__window__header">
          <h2>${this.#project.title}</h2>
          <div class="project-modal__window__header__options">
            <a
              href="${this.#project.githubURL}"
              class="project-modal__window__header__options__link"
              >GitHub</a
            >
            <a
              href="${this.#project.liveDemoURL}"
              class="project-modal__window__header__options__link"
              >Live Demo</a
            >
          </div>
        </header>

        <div class="project-modal__window__section-wrapper">
          <!-- sections here -->
        </div>
      </div>
    </div>
    `;

    const el = document.createElement("div");
    el.innerHTML = elString.trim();
    el.firstChild
      .querySelector(".project-modal__cover")
      .addEventListener("click", (e) => {
        document.body.removeChild(this.#projectModalElement);
        document.body.style.overflow = "auto";
      });
    return el.firstChild;
  }
  createSection(section) {
    const { title, description, image } = section;
    const elString = `
    <div class="project-modal-section">
      <div class="project-modal-section__text-holder">
        <h2>${title}</h2>
        <p>${description}</p>
      </div>
      <div class="project-modal-section__image-holder">
        <img
          src=${image}
          alt=""
          class="project-modal-section__image-holder__image"
        />
      </div>
    </div>
    `;

    const el = document.createElement("div");
    el.innerHTML = elString.trim();
    return el.firstChild;
  }

  checkVisibilityOfSections(sectionsEls) {
    const proximity = 0.95;
    sectionsEls.forEach((section) => {
      const dim = section.getBoundingClientRect();
      if (
        dim.y < this.#projectModalElDimensions.height * proximity &&
        dim.y + dim.height > this.#projectModalElDimensions.x
      )
        section.classList.add("visible");
      else section.classList.remove("visible");
    });
  }
}
