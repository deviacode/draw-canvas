const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return;

  ctx.beginPath();
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.lineWidth = 10;
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if (hue >= 360) {
    hue = 0;
  }

  if (direction) {
    ctx.direction--;
  }
}

canvas.addEventListener("mousemove", e => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

const clearDraw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mouseup", clearDraw);

canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

/*
  
*/

// let initialX;
// let initialY;

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const draw = (cursorX, cursorY) => {
//   ctx.beginPath();
//   ctx.moveTo(initialX, initialY);
//   ctx.lineWidth = 10;
//   ctx.strokeStyle = "#fff";
//   ctx.lineCap = "round";
//   ctx.lineJoin = "round";
//   ctx.lineTo(cursorX, cursorY);
//   ctx.stroke();

//   initialX = cursorX;
//   initialY = cursorY;
// };

// // const clearDraw = () => {
// //   ctx.clearRect(0, 0, canvas.width, canvas.height);
// // };

// const mouseDown = e => {
//   initialX = e.offsetX;
//   initialY = e.offsetY;
//   draw(initialX, initialY);
//   canvas.addEventListener("mousemove", mouseMoving);
// };

// const mouseMoving = e => {
//   draw(e.offsetX, e.offsetY);
// };

// const mouseUp = () => {
//   canvas.removeEventListener("mousemove", mouseMoving);
// };

// canvas.addEventListener("mousemove", draw);
// // canvas.addEventListener("mousedown", mouseDown);
// canvas.addEventListener("mouseup", mouseUp);
// // canvas.addEventListener("mouseup", clearDraw);
