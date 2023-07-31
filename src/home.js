import musselsImage from "./imgs/mussels.jpeg";
export default function (loadMenuPage) {
  const mainContainer = document.querySelector("#content");
  mainContainer.classList.add("home-page");
  mainContainer.append(createTop(loadMenuPage), createBottom());
}

function createBottom() {
  const bottomContainer = document.createElement("div");
  bottomContainer.classList.add("bottom");
  const aboutUsContainer = document.createElement("div");
  aboutUsContainer.classList.add("about-us");
  const aboutUsHeader = document.createElement("h1");
  aboutUsHeader.textContent = "Why us?";
  const aboutUsText = document.createElement("p");
  aboutUsText.innerHTML =
    "Welcome to [Your Restaurant Name], where culinary artistry meets warm hospitality. <br/> Indulge in our exquisite cuisine meticulously crafted with <br/> the freshest ingredients, offering a delightful symphony of flavors that <br/> cater to every palate. Immerse yourself in the inviting ambiance, <br/> perfect for intimate gatherings or special occasions. Our dedicated <br/> staff ensures impeccable service, going above and beyond to create a <br/> memorable experience. Experience affordable luxury and a passion for <br/> customer satisfaction, making [Your Restaurant Name] the ultimate dining <br/> destination. Come, savor the magic; your taste buds will thank you.";

  aboutUsContainer.append(aboutUsHeader, aboutUsText);
  bottomContainer.append(aboutUsContainer);
  return bottomContainer;
}

function createTop(loadPage) {
  const topContainer = document.createElement("div");
  topContainer.classList.add("top");
  const welcomeContainer = document.createElement("div");
  welcomeContainer.classList.add("welcome");

  const welcomeMessage = document.createElement("h1");
  welcomeMessage.innerHTML =
    "Welcome to our restaurant,<br /> where delight is guaranteed";

  const menuBtn = document.createElement("button");
  menuBtn.textContent = "Menu";
  menuBtn.addEventListener("click", loadPage);

  welcomeContainer.append(welcomeMessage, menuBtn);

  const muussels = new Image();
  muussels.src = musselsImage;
  topContainer.append(welcomeContainer, muussels);
  return topContainer;
}
