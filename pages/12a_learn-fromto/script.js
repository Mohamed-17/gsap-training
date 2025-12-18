import gsap from "gsap";
const bars = document.querySelectorAll(".bar");

bars.forEach((bar, i) => {
  gsap.fromTo(
    bar,
    { y: 20, duration: 0.5 },
    { y: 0, repeat: -1, yoyo: true, delay: 0.1 * i, ease: "elastic.out" }
  );
});
