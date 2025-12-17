import gsap from "gsap";

const notificationAnimations = () => {
  const notificaions = document.querySelectorAll(".toast");
  notificaions.forEach((notify, i) => {
    gsap.to(notify, {
      y: -150,
      opacity: 1,
      duration: 0.8,
      scale: 1.2,
      rotate: 5,

      delay: i * 1,
      onComplete: () => {
        gsap.to(notify, {
          opacity: 0,
        });
      },
    });
  });
};

notificationAnimations();
