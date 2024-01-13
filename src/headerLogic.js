// selecting elements
const headerIcons = document.querySelectorAll("#header-Icons");

// gelobal variables
let iconCountChange = 0;

console.log(headerIcons);
// functions
const changeIcons = () => {
  let iconChangeInterval = setInterval(() => {
    if (headerIcons.length > iconCountChange) {
      removeClasses();
      headerIcons[iconCountChange].classList.add("active");
      iconCountChange++;
    } else {
      iconCountChange = 0;
    }
  }, 2000);
};

// removing all active classes from the icons
const removeClasses = () => {
  headerIcons.forEach((headerIcon) => {
    headerIcon.classList.remove("active");
  });
};
// events
window.addEventListener("load", changeIcons);
