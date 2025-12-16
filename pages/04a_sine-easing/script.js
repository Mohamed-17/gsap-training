import gsap from "gsap";

const top_btn = document.querySelector(".scroll-to-top");

let isFloating = false;

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 500) {
    top_btn.classList.add("show");
    isFloating = true;
    if (isFloating === true) {
      gsap.to(top_btn, {
        y: -20,
        duration: 1,
        repeat: -1,
        yoyo: true,
      });
    }
  } else {
    top_btn.classList.remove("show");
    isFloating = false;
  }
});

top_btn.addEventListener("mouseenter", () => {
  gsap.to(top_btn, {
    scale: 1.2,
    duration: 1,
  });
});
top_btn.addEventListener("mouseleave", () => {
  gsap.to(top_btn, {
    scale: 1,
    duration: 1,
  });
});
