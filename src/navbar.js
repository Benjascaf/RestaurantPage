export default function (loadHomePage, loadMenuPage, loadContactPage) {
  const navBar = document.createElement("div");
  navBar.classList.add("header");

  const myIcon = document.createElement("i");
  myIcon.classList.add("fa-solid", "fa-bowl-food");

  const buttonList = document.createElement("ul");

  const homeButton = document.createElement("button");
  homeButton.textContent = "Home";
  homeButton.addEventListener("click", loadHomePage);
  buttonList.appendChild(document.createElement("li").appendChild(homeButton));

  const menuButton = document.createElement("button");
  menuButton.textContent = "Our Menu";
  menuButton.addEventListener("click", loadMenuPage);
  buttonList.appendChild(document.createElement("li").appendChild(menuButton));

  const contactButton = document.createElement("button");
  contactButton.textContent = "Contact Us";
  contactButton.addEventListener("click", loadContactPage);
  buttonList.appendChild(
    document.createElement("li").appendChild(contactButton)
  );

  navBar.append(myIcon, buttonList);

  return navBar;
}
