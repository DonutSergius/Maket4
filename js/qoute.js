document.addEventListener("DOMContentLoaded", function () {
    const courses = document.querySelectorAll(".qoute-elem");
    const container = document.querySelector(".qoute-list");
    const sliderButtonsContainer = document.querySelector(".qoute-buttons");
    let currentIndex = 0;
    let coursesPerPage = 1;
    let startX;
    let intervalId; 

    function showCourses() {
        container.innerHTML = "";


        if (currentIndex - 1 < 0) {
            document.getElementById(`q${courses.length - 1}`).style.backgroundColor = "grey";
          } else {
            document.getElementById(`q${currentIndex - 1}`).style.backgroundColor = "grey";
          }
    
          document.getElementById(`q${currentIndex}`).style.backgroundColor = "black";
    
          if (currentIndex + 1 >= courses.length) {
            document.getElementById(`q${0}`).style.backgroundColor = "grey";
          } else {
            document.getElementById(`q${currentIndex + 1}`).style.backgroundColor = "grey";
          }

        const startIndex = currentIndex;
        const endIndex = (currentIndex + coursesPerPage) % courses.length;

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

        container.style.transition = "opacity 0.5s ease-in-out";
        container.style.opacity = 1; 
        startTimer();
    }

    function createButtons() {
        sliderButtonsContainer.innerHTML = "";
        for (let i = 0; i < courses.length; i++) {
          const button = document.createElement("button");
          button.textContent = "";
          button.id = `q${i}`;
          button.addEventListener("click", () => {
            clearInterval(intervalId);
            currentIndex = i;
            console.log("currentIndex:", currentIndex);
      
            if (currentIndex - 1 < 0) {
              document.getElementById(`q${courses.length - 1}`).style.backgroundColor = "grey";
            } else {
              document.getElementById(`q${currentIndex - 1}`).style.backgroundColor = "grey";
            }
      
            document.getElementById(`q${currentIndex}`).style.backgroundColor = "black";
      
            if (currentIndex + 1 >= courses.length) {
              document.getElementById(`q${0}`).style.backgroundColor = "grey";
            } else {
              document.getElementById(`q${currentIndex + 1}`).style.backgroundColor = "grey";
            }
      
            container.style.opacity = 0;
            setTimeout(showCourses, 500);
          });
          sliderButtonsContainer.appendChild(button);
        }
      }
      
      

    function handleTouchStart(e) {
        startX = e.touches[0].clientX;
        clearInterval(intervalId); 
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

            container.style.opacity = 0;
            setTimeout(showCourses, 500);
        }
    }
    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchend", handleTouchEnd);

    function startTimer() {
        clearInterval(intervalId); 
        intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % courses.length;
            container.style.opacity = 0; 
            setTimeout(showCourses, 500);
        }, 10000); 
    }

    createButtons();
    showCourses();
    startTimer(); 
});
