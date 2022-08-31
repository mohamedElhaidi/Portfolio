class Vanisher {
  constructor(el) {
    this.el = el;

    document.addEventListener("scroll", () => {
      const { y, height } = this.el.getClientRects()[0];
      const h = y + height;
      const start = h * 0.2;
      const end = h * 0.8;
      const screenHeight = window.innerHeight;

      if (end > 0 && end < screenHeight) {
        this.el.classList.add("--unvanish");
      } else {
        this.el.classList.remove("--unvanish");
      }
    });
  }
}

module.exports.init = function () {
  const vanishers = document.querySelectorAll(".vanisher");
  vanishers.forEach((vanisher) => {
    const delay = vanisher.dataset["delay"] || 0;
    vanisher.style.transitionDuration = "0.3s";
    vanisher.style.transitionDelay = delay + "ms";
    new Vanisher(vanisher);
  });
};
