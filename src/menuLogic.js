// selecting elements
const menuBottomWrap = document.getElementsByClassName("menu-Bottom-Wrap")[0];

// gelobal varibales

// array of object data menu
const arrayObjectData = [
  {
    title: "PANCAKES",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Autem qui ullam rerum, perferendis quisquam dignissimos omnis maxime, sequi totam temporibus",
  },
  {
    title: "CUPCAKES",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Autem qui ullam rerum, perferendis quisquam dignissimos omnis maxime, sequi totam temporibus",
  },
  {
    title: "HUMUS",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Autem qui ullam rerum, perferendis quisquam dignissimos omnis maxime, sequi totam temporibus",
  },
  {
    title: "HAMBURGER",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Autem qui ullam rerum, perferendis quisquam dignissimos omnis maxime, sequi totam temporibus",
  },
  {
    title: "SALMON",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Autem qui ullam rerum, perferendis quisquam dignissimos omnis maxime, sequi totam temporibus",
  },
  {
    title: "Vegetables",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Autem qui ullam rerum, perferendis quisquam dignissimos omnis maxime, sequi totam temporibus",
  },
];

// classes

class showData {
  constructeur(title, description) {
    this.title = title;
    this.description = description;
  }

  insertData() {
    const menuCardEl = document.createElement("div");
    menuCardEl.classList.add("menu-Card");

    menuCardEl.innerHTML = `
    <img
    class="menu-Card-Imgs"
    src="./assets/gallery-img-1.jpg"
    alt=""
  />
  <div class="menu-Card-Title-Wrap">
    <h1 class="menu-Card-Text-1">${this.title}</h1>
  </div>
  <div class="menu-Card-Title-Wrap">
    <h1 class="menu-Card-Text-2">${this.description}</h1>
  </div>`;

    menuBottomWrap.appendChild(menuCardEl);
  }
}

// functions

// events
