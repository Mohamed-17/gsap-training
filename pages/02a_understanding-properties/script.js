import gsap from "gsap";

gsap.to(".box", {
  x: 400,
  opacity: 1,
  duration: 2,

  borderRadius: "50%",
  scale: 1.25,
  onComplete: () => {
    gsap.to(".box", {
      x: -450,
      duration: 2,
      repeat: -1,
      yoyo: true,
    });
  },
});
