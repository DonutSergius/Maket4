function getCurrentSection() {
    const headerHeight = 150; // Розмір вашого header
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
    const menuButtons = document.querySelectorAll(".header-right button");

    menuButtons.forEach((button) => {
      const sectionId = button.getAttribute("data-section");

      if (currentSection === sectionId) {
        button.style.backgroundColor = "#68b7fd";
        button.style.color = "#ffffff";
      } else {
        button.style = ".header-right button";
      }
    });
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