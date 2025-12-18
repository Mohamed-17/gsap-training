import gsap from "gsap";
const btns = document.querySelectorAll(".reactions button");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    gsap.fromTo(
      btn,
      { y: 0, rotate: 0, opacity: 1 },
      {
        y: -70,
        rotate: 50,
        ease: "bounce.in",
        duration: 0.5,

        onComplete: () => {
          gsap.to(btn, {
            opacity: 0,
          });
        },
      }
    );
  });
});
