import gsap from "gsap";

const refresh = document.querySelector(".repeat");
const animation = gsap.from(".card", {
  opacity: 0,
  scale: 0.2,
  duration: 1.5,
  stagger: 0.2,
  ease: "elastic.out",
});

refresh.addEventListener("click", () => {
  animation.restart();
});
