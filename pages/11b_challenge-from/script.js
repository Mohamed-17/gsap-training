import gsap from "gsap";

const card = document.querySelector("#card");
card.addEventListener("mouseover", () => {
  gsap.to(".card-face", {
    backfaceVisibility: "visible",
    onStart: () => {
      gsap.to(".card-front", {
        opacity: 0,
        scale: 0.2,
      });
    },
    onUpdate: () => {
      gsap.to(".card-back", {
        rotateY: 0,
      });
    },
  });
});
