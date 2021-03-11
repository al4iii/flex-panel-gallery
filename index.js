const panels = document.querySelectorAll(".panel");

const toggleActive = (e) => {
  if (e.propertyName.includes("flex")) {
    e.target.classList.toggle("open-active");
  }
};

panels.forEach((panel) => panel.addEventListener("click", () => panel.classList.toggle("open")));
panels.forEach((panel) => panel.addEventListener("transitionend", toggleActive));
