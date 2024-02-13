function getCurrentSection() {
  const headerHeight = 200; // Розмір вашого header
  const sections = document.querySelectorAll("section");
  let currentSection = null;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top - headerHeight <= 50 && rect.bottom >= 50) {
      currentSection = section.id;
    }
  });

  return currentSection;
}

function changeMenuBackground() {
  const currentSection = getCurrentSection();
  const headerButtons = document.querySelectorAll(".header-right button");
  const menuButtons = document.querySelectorAll(".menu button");

  const transitionStyle = "background-color 0.3s ease, color 0.3s ease";

  if (window.innerWidth > 900) {
    headerButtons.forEach((button) => {
      const sectionId = button.getAttribute("data-section");
      button.style.transition = transitionStyle;
      if (currentSection === sectionId) {
        button.style.backgroundColor = "#337ab7";
        button.style.color = "#ffffff";
      } else {
        button.style.backgroundColor = "";
        button.style.color = "";
      }
    });
  } else {
    menuButtons.forEach((button) => {
      const sectionId = button.getAttribute("data-section");
      button.style.transition = transitionStyle;
      if (currentSection === sectionId) {
        button.style.backgroundColor = "#337ab7";
        button.style.color = "#ffffff";
      } else {
        button.style.backgroundColor = "";
        button.style.color = "";
      }
    });
  }
}


document.addEventListener("scroll", changeMenuBackground);

function scrollToSection(sectionId) {
  const headerHeight = 150; // Розмір вашого header
  const section = document.getElementById(sectionId);

  if (section) {
    window.scrollTo({
      top: section.offsetTop - headerHeight,
      behavior: "smooth",
    });
  }
}