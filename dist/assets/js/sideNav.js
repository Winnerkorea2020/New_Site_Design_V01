const sideNav = document.querySelector(".side-nav");
const navToggle = document.querySelector(".nav-toggle");
const navClose = document.querySelector(".nav-close");

function navShow() {
  sideNav.classList.add("left-0");
  sideNav.classList.remove("-left-full");
}

function navHidden() {
  sideNav.classList.remove("left-0");
  sideNav.classList.add("-left-full");
}

if (navToggle) {
  navToggle.addEventListener("click", navShow);
}

if (navClose) {
  navClose.addEventListener("click", navHidden);
}
