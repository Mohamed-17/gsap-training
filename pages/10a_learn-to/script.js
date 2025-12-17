import gsap from "gsap";

const animateToast = () => {
  gsap.to(".toast", {
    y: -140,
    x: 0,
    duration: 0.5,
    ease: "power4.in",
    onComplete: () => {
      gsap.to(".toast", {
        duration: 0.8,
        delay: 2,
        x: 1500,
        ease: "power2.in",
        onComplete: () => {
          gsap.to(".toast", {
            y: -140,
            delay: 2,
            onComplete: () => {
              gsap.to(".toast", {
                x: 0,
                y: -140,
              });
            },
          });
        },
      });
    },
  });
};

animateToast();
