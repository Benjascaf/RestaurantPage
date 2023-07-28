import pancakes from "./imgs/pancakes.jpg";

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
  for (let i = 0; i < 6; i++) {
    const card = document.createElement("div");
    card.classList.add("card");

    const itemImage = new Image();
    itemImage.src = pancakes;

    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("description-container");

    const descriptionHeader = document.createElement("h1");
    descriptionHeader.textContent = "Our food";

    const description = document.createElement("p");
    description.textContent = "jnwofncwebciwbcibwicbwibfowowwbepaunwoen";

    descriptionContainer.append(descriptionHeader, description);
    card.append(itemImage, descriptionContainer);

    container.append(card);
  }
}
