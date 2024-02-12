 document.addEventListener("DOMContentLoaded", function () {
      const slider = document.querySelector(".slider-1");
      const courses = document.querySelectorAll(".course");
      const container = document.querySelector(".course-elem");
      var windowWidth = window.innerWidth;

      if (windowWidth < 850) {
        minCount = 2;
      }

      if (windowWidth < 600) {
        minCount = 1;
      }

      let currentIndex = 0;
      const coursesPerPage = 3;

      function showCourses() {
        // Очистимо вміст контейнера перед вставкою нових елементів
        container.innerHTML = "";

        // Визначимо, які елементи слід вивести
        const startIndex = currentIndex;
        const endIndex = (currentIndex + coursesPerPage) % courses.length;

        if (startIndex < endIndex) {
          // Вивести елементи від startIndex до endIndex
          const visibleCourses = Array.from(courses).slice(
            startIndex,
            endIndex
          );
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

        const totalWidth = slider.clientWidth;
        const itemWidth = totalWidth / coursesPerPage;

        slider.style.transition = "transform 0.5s ease-in-out";
      }

      function nextSlide() {
        currentIndex = (currentIndex + 1) % courses.length;
        showCourses();
      }

      function prevSlide() {
        currentIndex = (currentIndex - 1 + courses.length) % courses.length;
        showCourses();
      }

      // Включення слайдера тільки якщо елементів більше 3
      if (courses.length > minCount) {
        setInterval(nextSlide, 5000);
        showCourses(); // Відображення першого слайду
      }
    });