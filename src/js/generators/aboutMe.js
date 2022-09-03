export default function createProfileElement(profile) {
  const {
    firstName,
    secondName,
    dateOfBirth,
    bio,
    imageProfileURL,
    frontEndSkills,
    backendEndSkills,
  } = profile;
  const skills = [...frontEndSkills.tags, ...backendEndSkills.tags];
  const elString = `
    <div class="myPicture vanisher" style=" background-image:url(${imageProfileURL})"></div>
      <div class="text vanisher">
        <h2>${firstName + " " + secondName}</h2>
        <h4 class="--dim-text"> born in ${dateOfBirth}</h4>
        ${bio
          .split("\n")
          .reduce((prev, current) => prev + `<p>${current}</p>`, "")}
      </div>
      <div class="skills" >
        <h1>Skills</h1>
          <div class="skills__items">
              ${skills.reduce(
                (prev, tag, index) =>
                  prev +
                  `<div class="skill vanisher" data-delay="${index * 100}">
                  <span>${tag.name}</span>
                  <svg>
                  <circle cx="50%" cy="50%" r="40%" stroke-width="3" stroke-dashoffset="0"
                      stroke="#fff" fill="none" />
                    <circle class="path" cx="50%" cy="50%" r="40%" stroke-dashoffset="calc(2 * 40% * 3.14 * ${
                      tag.progress / 100 + 1
                    })"
                      stroke="${tag.color}" fill="none" />
                    
                  </svg>
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
