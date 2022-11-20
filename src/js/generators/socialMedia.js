export default function createSocialMediaElement(data, index) {
  const elString = `<a href="${data.url}"  data-tooltip="${data.name}" class="vanisher" >
      ${data.icon}
    </a>`;
  const HtmlEl = document.createElement("li");
  HtmlEl.innerHTML = elString.trim();

  return HtmlEl;
}
