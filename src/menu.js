import pancakes from "./imgs/pancakes.jpg";
import frenchToast from "./imgs/french-toast.jpg";
import grill from "./imgs/grill.jpg";
import pizza from "./imgs/pizza.jpg";
import salad from "./imgs/salad.jpg";
import salmon from "./imgs/salmon.jpg";

export default function () {
  const mainContainer = document.querySelector("#content");
  mainContainer.classList.add("menu-page");

  const menuHeader = document.createElement("h1");
  menuHeader.textContent = "Our Menu";

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  fillContainer(menuContainer);

  mainContainer.append(menuHeader, menuContainer);
}

function fillContainer(container) {
  const imageSrcs = [pancakes, frenchToast, grill, pizza, salad, salmon];
  for (let i = 0; i < 6; i++) {
    const card = document.createElement("div");
    card.classList.add("card");

    const itemImage = new Image();
    itemImage.src = imageSrcs[i];

    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("description-container");

    const descriptionHeader = document.createElement("h1");
    descriptionHeader.textContent = "Our food";

    const description = document.createElement("p");
    description.textContent =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod elit id bibendum placerat. Ut euismod aliquam nunc. Quisque ac velit ut nisi finibus tincidunt. In tempus neque eu dolor euismod facilisis. Sed bibendum risus et odio consequat, eget consectetur elit dictum. Aenean a metus eget orci ultricies finibus nec a odio";

    descriptionContainer.append(descriptionHeader, description);
    card.append(itemImage, descriptionContainer);

    container.append(card);
  }
}
