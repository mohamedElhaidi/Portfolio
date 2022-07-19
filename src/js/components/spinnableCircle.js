const spinnableCircleElement = document.getElementById("circle");
const spinnableCircleOverlayElement =
  spinnableCircleElement.getElementsByClassName("spinnable-circle__overlay")[0];
const spinnableCircleItemsElement =
  spinnableCircleElement.getElementsByClassName(
    "spinnable-circle__container__items"
  )[0];

let currentAngle = 0;

let spinTimer = null;
const spin = (time = 20) => {
  stopSpin();
  spinTimer = setInterval(() => {
    spinnableCircleItemsElement.style.transform = `rotate(${currentAngle}deg)`;
    ++currentAngle;
    // console.log(currentAngle);
  }, time);
};

const stopSpin = () => {
  clearInterval(spinTimer);
  spinTimer = null;
};

spin();

spinnableCircleElement.addEventListener("mouseenter", (event) => {
  stopSpin();
});
spinnableCircleElement.addEventListener("mouseleave", (event) => {
  spin(20);
});

// test

// let selectedChild = false;
// [...spinnableCircleItemsElement.children].forEach((child) => {
//   child.addEventListener("mousedown", () => {
//     selectedChild = true;
//   });
//   child.addEventListener("mouseup", () => {
//     selectedChild = false;
//   });
//   child.addEventListener("mousemove", (event) => {
//     if (selectedChild) {
//       const child = event.currentTarget;
//       child.style.position = "fixed";
//       child.style.top = event.clientX;
//       child.style.left = event.clientY;
//       console.dir(child);
//     }
//   });
// });

// console.dir(spinnableCircleItemsElement);

// spinnableCircleOverlayElement.addEventListener("mousemove", (event) => {
//   const overlay = spinnableCircleOverlayElement.getBoundingClientRect();
//   const circle = spinnableCircleElement.getBoundingClientRect();

//   const boX = (overlay.x + overlay.right) / 2;
//   const boY = (overlay.y + overlay.bottom) / 2;

//   const coX = (circle.x + circle.right) / 2;
//   const coY = (circle.y + circle.bottom) / 2;

//   // const cursorX = event.touches[0].clientX;
//   // const cursorY = event.touches[0].clientY;
//   const cursorX = event.clientX;
//   const cursorY = event.clientY;

//   const d = Math.sqrt(Math.pow(cursorX - coX, 2) + Math.pow(cursorY - coY, 2));

//   const xp =
//     coX -
//     Math.sqrt(
//       Math.pow(2 * coY + Math.sqrt(4 * (3 * Math.pow(coY, 2))), 2) / 4 -
//         Math.pow(d, 2)
//     );
//   // console.log(xp);
// });

// if (module.hot) {
//   module.hot.accept();
// }
