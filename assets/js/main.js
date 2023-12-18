/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

//   Addind show-menu class
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
//   Hide
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID--templateID--#from--publicKey look it up in emailjs/docs site
  emailjs
    .sendForm(
      "service_vehumrc",
      "template_crfnbtb",
      "#contact-form",
      "cBqMrH-ep9S8WQLvA"
    )
    .then(
      () => {
        // show message sent successfully
        contactMessage.textContent = "Message sent successfully ✅";
        // remove message sent successfully after 5 sec
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);
        // clearing the input fields after sending message
        contactForm.reset();
      },
      () => {
        // show error message
        contactMessage.textContent =
          "Email not sent to Er. Paudel (service error)❌";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // when we scroll higher then 350 vh add the scroll up button
  this.scrollY >= 450
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "ri-sun-foggy-fill";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "light" : "dark";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme)
    ? "ri-sun-foggy-fill"
    : "ri-moon-clear-line";

if (selectedTheme) {
  document.body.classList[selectedTheme === "light" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[
    selectedIcon === "ri-sun-foggy-fill" ? "add" : "remove"
  ](iconTheme);
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: "top",
  distance: "180px",
  duration: 2500,
  delay: 300,
  // reset: true // Animations repeat again
});

sr.reveal(`.home__profile, .about__image .contact__mail`, { origin: "right" });
sr.reveal(
  `.home__info,
.about__container, .section__title-1, .about__info
.contact__social, .contact__data`,
  { origin: "left" }
);
sr.reveal(`.contact__social-data`, { origin: "bottom" });

sr.reveal(`.services__card, .projects__card, .home__name`, { interval: 100 });
