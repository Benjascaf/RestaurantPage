import "./style.css";
import navBar from "./navbar.js";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

const mainContainer = document.querySelector("#content");
document.querySelector("body").insertBefore(
  navBar(
    () => {},
    () => {},
    () => {}
  ),
  mainContainer
);
// function loadHomePage() {
//   clearMainContainer();
//   home(loadMenuPage);
// }

// function loadMenuPage() {
//   clearMainContainer();
//   menu();
// }

// function clearMainContainer() {
//   const mainContainer = document.querySelector("#content");
//   mainContainer.replaceChildren();
//   mainContainer.classList.remove(...mainContainer.classList);
// }
// loadHomePage();

contact();
