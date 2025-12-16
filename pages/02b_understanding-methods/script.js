import gsap from "gsap";

const playBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");
const resumeBtn = document.querySelector(".resume");
const restartBtn = document.querySelector(".restart");
const reverseBtn = document.querySelector(".reverse");
const killBtn = document.querySelector(".kill");
const yoyoBtn = document.querySelector(".yoyo");
const repeatBtn = document.querySelector(".repeat");

const animate = gsap.to(".box", {
  opacity: 1,
  duration: 2,
  scale: 1.2,
  borderRadius: "50%",
});

playBtn.addEventListener("click", () => {
  animate.play();
});
pauseBtn.addEventListener("click", () => {
  animate.pause();
});
resumeBtn.addEventListener("click", () => {
  animate.resume();
});
restartBtn.addEventListener("click", () => {
  animate.restart();
});
reverseBtn.addEventListener("click", () => {
  animate.reverse();
});
killBtn.addEventListener("click", () => {
  animate.kill();
});
yoyoBtn.addEventListener("click", () => {
  animate.yoyo(true);
});
repeatBtn.addEventListener("click", () => {
  animate.repeat(5);
});
