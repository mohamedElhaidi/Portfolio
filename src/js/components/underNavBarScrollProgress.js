const underNavBarScrollProgressElement =
  document.getElementById("scrollProgressBar");
const underNavBarScrollProgress_innerProgressElement =
  underNavBarScrollProgressElement.querySelector(
    ".scrollProgressBar__innerProgress"
  );

document.addEventListener("scroll", (event) => {
  const pagePosition = Math.abs(document.body.getClientRects()[0].y);
  const windowHeight = window.innerHeight;
  var limit =
    Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    ) - windowHeight;
  const progressWidth = (pagePosition / limit) * 100;
  console.log(progressWidth);

  underNavBarScrollProgress_innerProgressElement.style.width =
    progressWidth + "%";
});
