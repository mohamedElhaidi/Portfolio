window.addEventListener("DOMContentLoaded", function () {
  const imgs = document.querySelectorAll(".zoomable");
  imgs.forEach((img) => {
    const imgDimensions = img.getBoundingClientRect();
    console.log(imgDimensions);

    // listen to mouse movements
    img.addEventListener("mousemove", function (event) {
      const { layerX, layerY } = event;
      const zoomLevel = 1.5;
      const proximityX = layerX / imgDimensions.width;
      const proximityY = layerY / imgDimensions.width;
      img.style.backgroundPositionX = `calc(100% *${proximityX})`;
      img.style.backgroundPositionY = `calc(100% *${proximityY})`;
      img.style.backgroundSize = +(zoomLevel * 100) + "%";
    });
    // listen to mouse movements
    img.addEventListener("mouseleave", function (event) {
      img.style.backgroundPositionX = "initial";
      img.style.backgroundPositionY = "initial";
      img.style.backgroundSize = "100%";
    });
  });
});
