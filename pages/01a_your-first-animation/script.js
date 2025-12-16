gsap.to(".card", {
  scale: 1,
  opacity: 1,
  duration: 3,
  onComplete: () => {
    gsap.to(".card", {
      y: -20,
      yoyo: true,
      repeat: -1,
      duration: 0.5,
    });
    gsap.to(".demo", {
      scale: 0.8,
      duration: 1,
    });
  },
});
