import cookImage from "./imgs/cook.jpg";
import managerImage from "./imgs/manager.jpg";
import outsideView from "./imgs/restaurant-outside.jpg";

const ContactInfo = [
  {
    header: "find Us At:",
    info: "Our Location 123",
  },
  {
    header: "Email Us:",
    info: "ourMail@imaginary.com",
  },
  {
    header: "Call Us:",
    info: "1120334456",
  },
];

const Icons = [
  "fa-brands fa-twitter",
  "fa-brands fa-facebook",
  "fa-brands fa-instagram",
];
export default function () {
  const mainContainer = document.querySelector("#content");
  mainContainer.classList.add("contact-page");

  mainContainer.append(
    createStaffCard(cookImage, "Javierr Sanchez", "Cook"),
    createStaffCard(managerImage, "John Smith", "Manager")
  );

  mainContainer.append(createContactCard());
}

function createStaffCard(srcImage, name, occupation) {
  const container = document.createElement("div");
  container.classList.add("staff-info-container", "card");

  const staffImage = new Image();
  staffImage.src = srcImage;

  const infoContainer = document.createElement("div");
  infoContainer.classList.add("info");
  const staffName = document.createElement("h1");
  staffName.textContent = name;
  const staffOcuppation = document.createElement("h2");
  staffOcuppation.textContent = `Our ${occupation}`;
  const staffDescription = document.createElement("p");
  staffDescription.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod elit id bibendum placerat. Ut euismod aliquam nunc. Quisque";
  infoContainer.append(staffName, staffOcuppation, staffDescription);

  container.append(staffImage, infoContainer);

  return container;
}

function createContactCard() {
  const container = document.createElement("div");
  container.classList.add("location-info-container", "card");

  const contactImage = new Image();
  contactImage.src = outsideView;

  const mainHeader = document.createElement("h1");
  mainHeader.textContent = "Get In Touch";

  const contactInfoContainer = document.createElement("div");
  contactInfoContainer.classList.add("contact-info");
  for (let i = 0; i < ContactInfo.length; i++) {
    const contactContainer = document.createElement("div");
    const contactMethod = document.createElement("h1");
    contactMethod.textContent = ContactInfo[i].header;
    const info = document.createElement("p");
    info.textContent = ContactInfo[i].info;

    contactContainer.append(contactMethod, info);
    contactInfoContainer.append(contactContainer);
  }

  const socialIconsContainer = document.createElement("div");
  socialIconsContainer.classList.add("social-icons");
  for (let i = 0; i < Icons.length; i++) {
    const icon = document.createElement("i");
    icon.classList.add(...Icons[i].split(" "));
    socialIconsContainer.append(icon);
  }

  container.append(
    contactImage,
    mainHeader,
    contactInfoContainer,
    socialIconsContainer
  );

  return container;
}
