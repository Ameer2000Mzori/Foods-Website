// selecting elements
const menuBottomWrap = document.getElementsByClassName("menu-Bottom-Wrap")[0];

// gelobal varibales

// array of object data menu
const arrayObjectData = [
  {
    title: "PANCAKES",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Autem qui ullam rerum, perferendis quisquam dignissimos omnis maxime, sequi totam temporibus",
    img: "./assets/gallery-img-1.jpg",
  },
  {
    title: "CUPCAKES",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Autem qui ullam rerum, perferendis quisquam dignissimos omnis maxime, sequi totam temporibus",
    img: "./assets/gallery-img-2.jpg",
  },
  {
    title: "HUMUS",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Autem qui ullam rerum, perferendis quisquam dignissimos omnis maxime, sequi totam temporibus",
    img: "./assets/gallery-img-3.jpg",
  },
  {
    title: "HAMBURGER",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Autem qui ullam rerum, perferendis quisquam dignissimos omnis maxime, sequi totam temporibus",
    img: "./assets/gallery-img-4.jpg",
  },
  {
    title: "SALMON",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Autem qui ullam rerum, perferendis quisquam dignissimos omnis maxime, sequi totam temporibus",
    img: "./assets/gallery-img-5.jpg",
  },
  {
    title: "Vegetables",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Autem qui ullam rerum, perferendis quisquam dignissimos omnis maxime, sequi totam temporibus",
    img: "./assets/gallery-img-6.jpg",
  },
];

// classes

class showData {
  constructeur(title, description, img) {
    this.title = title;
    this.description = description;
    this.img = img;
  }

  insertData() {
    const menuCardEl = document.createElement("div");
    menuCardEl.classList.add("menu-Card");

    menuCardEl.innerHTML = `
    <img
    class="menu-Card-Imgs"
    src="${this.img}"
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
arrayObjectData.forEach((menu) => {
  let newShowData = new showData(menu.title, menu.description, menu.img);
  newShowData.insertData();
});
// events
