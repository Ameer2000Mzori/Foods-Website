// selecting elements
const headerIcons = document.querySelectorAll("#header-Icons");

// gelobal variables
let iconCountChange = 0;

console.log(headerIcons);
// functions
const changeIcons = () => {
  let iconChangeInterval = setInterval(() => {
    if (headerIcons.length > iconCountChange) {
      headerIcons[iconCountChange].classList.add("active");
      iconCountChange++;
    } else {
      iconCountChange = 0;
    }
  }, 1000);
};

// events
window.addEventListener("load", changeIcons);
