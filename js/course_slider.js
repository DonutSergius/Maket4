document.addEventListener("DOMContentLoaded", function () {
  const courses = document.querySelectorAll(".course");
  const container = document.querySelector(".course-elem");
  const sliderButtonsContainer = document.querySelector(".slider-buttons");
  let currentIndex = 0;
  let coursesPerPage = 3;
  let minCount = 3;

  function updateCoursesPerPage() {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1250) {
      minCount = 3;
      coursesPerPage = 3;
    }

    if (windowWidth < 1250) {
      minCount = 2;
      coursesPerPage = 2;
    }

    if (windowWidth < 601) {
      minCount = 1;
      coursesPerPage = 1;
    }
    if (courses.length > minCount) {
      sliderButtonsContainer.innerHTML = "";
      for (let i = 0; i < courses.length; i++) {
        const button = document.createElement("button");
        button.textContent = "";
        button.addEventListener("click", () => {
          currentIndex = i;
          showCourses();
        });
        sliderButtonsContainer.appendChild(button);
      }
    } else {
      sliderButtonsContainer.innerHTML = "";
    }
  }

  function showCourses() {
    // Очистимо вміст контейнера перед вставкою нових елементів
    container.innerHTML = "";

    // Визначимо, які елементи слід вивести
    const startIndex = currentIndex;
    const endIndex = (currentIndex + coursesPerPage) % courses.length;

    if (startIndex < endIndex) {
      // Вивести елементи від startIndex до endIndex
      const visibleCourses = Array.from(courses).slice(startIndex, endIndex);
      visibleCourses.forEach((course) => {
        const clonedCourse = course.cloneNode(true);
        container.appendChild(clonedCourse);
      });
    } else {
      // Вивести елементи від startIndex до кінця і з початку до endIndex
      const visibleCourses = Array.from(courses)
        .slice(startIndex)
        .concat(Array.from(courses).slice(0, endIndex));
      visibleCourses.forEach((course) => {
        const clonedCourse = course.cloneNode(true);
        container.appendChild(clonedCourse);
      });
    }

    container.style.transition = "transform 0.5s ease-in-out";
  }

  function handleResize() {
    updateCoursesPerPage();
    showCourses();
  }

  // Додаємо обробник подій для зміни розміру вікна
  window.addEventListener("resize", handleResize);

  handleResize();

  if (courses.length > minCount) {
    showCourses(); // Відображення першого слайду
  }
});
