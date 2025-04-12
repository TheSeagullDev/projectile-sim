import "./styles.css";

let x = 0;
let y = 0;
let initialSpeed = 25;
let xvel = 0;
let yvel = 0;
const updateRate = 25;
let gravity = 9.81;

const point = document.querySelector(".point");
const gravityInput = document.querySelector("#gravity");
const angleInput = document.querySelector("#angle");
const speedInput = document.querySelector("#speed");
initialSpeed = speedInput.value;
let angle = angleInput.value * 0.01745;

point.style.bottom = y + "px";
point.style.left = x + "px";

function update() {
  angle = angleInput.value * 0.01745;
  gravity = gravityInput.value;
  x += xvel;
  yvel -= gravity / updateRate;
  y += yvel;
  if (y < 0) {
    init();
  }
  point.style.bottom = y + "px";
  point.style.left = x + "px";
  console.log(
    `x: ${x}, y: ${y}, xvel: ${xvel}, y: ${yvel}, angle: ${angle / 0.01745} `,
  );
}

function init() {
  initialSpeed = speedInput.value;
  y = 0;
  yvel = initialSpeed * Math.sin(angle);
  xvel = initialSpeed * Math.cos(angle);
  x = 0;
}

setInterval(update, 1000 / updateRate);
