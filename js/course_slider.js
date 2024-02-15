document.addEventListener("DOMContentLoaded", function () {
  const courses = document.querySelectorAll(".course");
  const container = document.querySelector(".course-elem");
  const sliderButtonsContainer = document.querySelector(".slider-buttons");
  let currentIndex = 0;
  let coursesPerPage = 3;
  let minCount = 3;
  let startX;

  function updateCoursesPerPage() {
    const windowWidth = window.innerWidth;

    if (windowWidth > 1220) {
      minCount = 3;
      coursesPerPage = 3;
    }

    if (windowWidth <= 1220) {
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
          console.log("currentIndex:", currentIndex);
          if (currentIndex - 1 < 0) {
            document.getElementById('c' + (courses.length - 1)).style.backgroundColor = "grey";
          } else {
            document.getElementById('c' + (currentIndex - 1)).style.backgroundColor = "grey";
          }
          
          document.getElementById('c' + currentIndex).style.backgroundColor = "black";
          
          if (currentIndex + 1 >= courses.length) {
            document.getElementById('c' + 0).style.backgroundColor = "grey";
          } else {
            document.getElementById('c' + (currentIndex + 1)).style.backgroundColor = "grey";
          }
          showCourses();
        });
        button.id = `c${i}`;
        sliderButtonsContainer.appendChild(button);
      }
    } else {
      sliderButtonsContainer.innerHTML = "";
    }
}    

  function showCourses() {
    container.innerHTML = "";
    const startIndex = currentIndex;
    const endIndex = (currentIndex + coursesPerPage) % courses.length;

    if (currentIndex - 1 < 0) {
      document.getElementById('c' + (courses.length - 1)).style.backgroundColor = "grey";
    } else {
      document.getElementById('c' + (currentIndex - 1)).style.backgroundColor = "grey";
    }
    
    document.getElementById('c' + currentIndex).style.backgroundColor = "black";
    
    if (currentIndex + 1 >= courses.length) {
      document.getElementById('c' + 0).style.backgroundColor = "grey";
    } else {
      document.getElementById('c' + (currentIndex + 1)).style.backgroundColor = "grey";
    }

    if (startIndex < endIndex) {
      const visibleCourses = Array.from(courses).slice(startIndex, endIndex);
      visibleCourses.forEach((course) => {
        const clonedCourse = course.cloneNode(true);
        container.appendChild(clonedCourse);
      });
    } else {
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

  function handleTouchStart(e) {
    startX = e.touches[0].clientX;
  }

  function handleTouchEnd(e) {
    const endX = e.changedTouches[0].clientX;
    const diffX = endX - startX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        currentIndex = (currentIndex - 1 + courses.length) % courses.length;
      } else {
        currentIndex = (currentIndex + 1) % courses.length;
      }

      showCourses();
    }
  }

  window.addEventListener("resize", handleResize);
  container.addEventListener("touchstart", handleTouchStart);
  container.addEventListener("touchend", handleTouchEnd);

  handleResize();

  if (courses.length > minCount) {
    createButtons();
    showCourses();
  }
});
