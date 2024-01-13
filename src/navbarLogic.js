// selecting elements
const navBtnBox = document.getElementsByClassName("nav-Btn-Box")[0];
const navBtnLine = document.getElementsByClassName("nav-Btn-Line")[0];
const navbarEl = document.getElementsByClassName("navbar")[0];
const liElements = document.querySelectorAll("li");

// gelobal variables

// functions
const openNav = () => {
  navbarEl.classList.contains("active") ? removeClassesNav() : addClassesNav();
};

// remove classes from nabars and elements
const removeClassesNav = () => {
  navbarEl.classList.remove("active");
  navBtnLine.classList.remove("active");
  // addLiElementsClasses();
};

const addClassesNav = () => {
  navbarEl.classList.add("active");
  navBtnLine.classList.add("active");
};

// events
navBtnBox.addEventListener("click", openNav);
