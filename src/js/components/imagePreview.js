window.addEventListener("DOMContentLoaded", function () {
  const imgs = document.querySelectorAll(".zoomable");
  imgs.forEach((img) => {
    // listen to mouse movements
    img.addEventListener("mousemove", function (event) {
      const imgDimensions = img.getBoundingClientRect();
      const { layerX, layerY } = event;
      const zoomLevel = 1.2;
      const proximityX = layerX / imgDimensions.width;
      const proximityY = layerY / imgDimensions.height;
      img.style.backgroundPositionX = `calc(100% * ${proximityX})`;
      img.style.backgroundPositionY = `calc(100% * ${proximityY})`;
      img.style.backgroundSize = +(zoomLevel * 100) + "%";
    });
    // listen to mouse movements
    img.addEventListener("mouseleave", function (event) {
      img.style.backgroundPositionX = "initial";
      img.style.backgroundPositionY = "initial";
      img.style.backgroundSize = "cover";
    });
  });
});
