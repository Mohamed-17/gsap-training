import gsap from "gsap";
const tabs = document.querySelectorAll(".tab");
const tabRow = document.querySelector(".tab-row");
const indicator = document.querySelector(".indicator");

const updateIndicator = (target) => {
  const rowBounds = tabRow.getBoundingClientRect();
  const targetBounds = target.getBoundingClientRect();
  console.log(targetBounds.left);
  console.log(rowBounds.left);

  const offset = Number(targetBounds.left) - rowBounds.left;
  const width = targetBounds.width;

  gsap.to(indicator, {
    x: offset,
    width,
    duration: 0.4,
    ease: "back.out(1)",
  });
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");
    updateIndicator(tab);
  });
});

updateIndicator(document.querySelector(".tab.active"));
