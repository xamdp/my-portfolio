document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");

  if (hamburger && header && nav) {
    hamburger.addEventListener("click", () => {
      const isOpen = header.classList.toggle("nav-open");
      const icon = hamburger.querySelector("i");
      if (isOpen) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
        hamburger.setAttribute("aria-expanded", "true");
      } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
        hamburger.setAttribute("aria-expanded", "false");
      }
    });
  }
});
