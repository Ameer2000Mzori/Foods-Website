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
  //   navBtnLine.classList.remove("active");
  addLiElementsClasses();
};

// add classes from nabars and elements
const addClassesNav = () => {
  navbarEl.classList.add("active");
  //   navBtnLine.classList.add("active");
  liElements.forEach((liElement) => {
    liElement.classList.remove("active");
  });
};

// show navLinks slowly one by each
const addLiElementsClasses = () => {
  let liElementsCount = 0;
  let liElementInterval = setInterval(() => {
    if (liElements.length > liElementsCount) {
      liElements[liElementsCount].classList.add("active");
      liElementsCount++;
    } else {
      clearInterval(liElementInterval);
      liElementsCount = 0;
    }
  }, 200);
};

// events
navBtnBox.addEventListener("click", openNav);
