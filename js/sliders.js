let currentIndex = 0;
let intervalId;
//
//
// Слайдер на блок Ментор
//
document.addEventListener("DOMContentLoaded", function () {
    const mentors = document.querySelectorAll(".mentors-elem");
    const MentorsContainer = document.querySelector(".mentors-list");
    const sliderButtonsContainer = document.querySelector(".mentors-buttons");
    const mentorId = 'm';
    var elementOnPage = 1;

    createButtons(mentorId, sliderButtonsContainer, MentorsContainer, mentors, elementOnPage);
    showCourses(MentorsContainer, mentorId, mentors, elementOnPage, sliderButtonsContainer);
    startTimer(MentorsContainer, mentorId, mentors, elementOnPage,sliderButtonsContainer);
    
    MentorsContainer.addEventListener("touchstart", (e) => handleTouchStart(e));
    MentorsContainer.addEventListener("touchend", (e) => handleTouchEnd(e, 
        MentorsContainer, mentorId, mentors, elementOnPage,sliderButtonsContainer));
});
//
//
// Слайдер на блок Відгуків
//
document.addEventListener("DOMContentLoaded", function () {
    const qoutes = document.querySelectorAll(".qoute-elem");
    const QouteContainer = document.querySelector(".qoute-list");
    const sliderButtonsContainer = document.querySelector(".qoute-buttons");
    const qouteId = 'q';
    var elementOnPage = 1;

    createButtons(qouteId, sliderButtonsContainer, QouteContainer, qoutes, elementOnPage);
    showCourses(QouteContainer, qouteId, qoutes, elementOnPage, sliderButtonsContainer);
    startTimer(QouteContainer, qouteId, qoutes, elementOnPage,sliderButtonsContainer);
    
    QouteContainer.addEventListener("touchstart", (e) => handleTouchStart(e));
    QouteContainer.addEventListener("touchend", (e) => handleTouchEnd(e, 
        QouteContainer, qouteId, qoutes, elementOnPage,sliderButtonsContainer));
});
//
//
// Слайдер на блок Курсів
//
document.addEventListener("DOMContentLoaded", function () {
    const courses = document.querySelectorAll(".course");
    const container = document.querySelector(".course-elem");
    const sliderButtonsContainer = document.querySelector(".slider-buttons");
    const courseId = 'c';
    var elementOnPage = 3;

    handleResize();

    function updateCoursesPerPage(){
        var windowWidth = window.innerWidth;
        if(windowWidth > 1220){
            elementOnPage = 3;
        } else if(windowWidth > 601){
            elementOnPage = 2;
        } else {
            elementOnPage = 1;
        }

        if(courses.length > elementOnPage){
            createButtons(courseId, sliderButtonsContainer, container, courses, elementOnPage);
        } else {     
            sliderButtonsContainer.innerHTML = "";
            showCourses(container, courseId, courses, elementOnPage, sliderButtonsContainer);
        }
    }

    function handleResize() {
        updateCoursesPerPage();
        showCourses(container, courseId, courses, elementOnPage, sliderButtonsContainer);
    }
    window.addEventListener("resize", handleResize);
    container.addEventListener("touchstart", (e) => handleTouchStart(e));
    container.addEventListener("touchend", (e) => handleTouchEnd(e, 
        container, courseId, courses, elementOnPage,sliderButtonsContainer));
});  
//
//
//<=================================================================>
//
// Оснвовні функції слайдера
//
//  Створення кнопок на основі кількості елементів в блоці 
function createButtons(nameId, sliderButtonsContainer, container, nameBlock, elementOnPage) {
    sliderButtonsContainer.innerHTML = "";
    if(nameBlock.length>1){
    for (let i = 0; i < nameBlock.length; i++) {
        const button = document.createElement("button");
        button.textContent = "";
        button.id = nameId + i;
        button.addEventListener("click", () => {
            clearInterval(intervalId);
            currentIndex = i;
            container.style.opacity = 0;
            setTimeout(() => showCourses(container, nameId, nameBlock, elementOnPage, sliderButtonsContainer), 500);
        });
        sliderButtonsContainer.appendChild(button);
    }    
    }
}
//
//  Вивід відповідного елемента/елементів
function showCourses(container, nameId, nameBlock, count, sliderButtonsContainer) {
    container.innerHTML = "";
    var coursesPerPage = count;

    const lastIndex = nameBlock.length - 1;

    // Ініціалізуємо currentIndex на початку
    if (typeof currentIndex === 'undefined') {
        currentIndex = 0;
    }

    if(sliderButtonsContainer.children.length > 1) {
        document.getElementById(nameId + `${(currentIndex - 1 + nameBlock.length) % nameBlock.length}`).style.backgroundColor = "grey";
        document.getElementById(nameId + `${currentIndex}`).style.backgroundColor = "#525252";
        document.getElementById(nameId + `${(currentIndex + 1) % nameBlock.length}`).style.backgroundColor = "grey";
    }

    const startIndex = currentIndex;
    const endIndex = (currentIndex + coursesPerPage) % nameBlock.length;

    // Гортання елементів по колу
    if (startIndex < endIndex) {
        const visibleCourses = Array.from(nameBlock).slice(startIndex, endIndex);
        visibleCourses.forEach((course) => {
            const clonedCourse = course.cloneNode(true);
            container.appendChild(clonedCourse);
        });
    } else {
        const visibleCourses = Array.from(nameBlock)
            .slice(startIndex)
            .concat(Array.from(nameBlock).slice(0, endIndex));
        visibleCourses.forEach((course) => {
            const clonedCourse = course.cloneNode(true);
            container.appendChild(clonedCourse);
        });
    }

    container.style.transition = "opacity 0.5s ease-in-out";
    container.style.opacity = 1;
}
//
// Таймер показу елементів
function startTimer(container, nameId, nameBlock, count, sliderButtonsContainer) {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % nameBlock.length;
        container.style.opacity = 0;
        setTimeout(() => showCourses(container, nameId, nameBlock, count, sliderButtonsContainer), 500);
    }, 10000);
}
//
//  Функції для гортання пальцем
function handleTouchStart(e) {
    if (e.touches && e.touches.length > 0) {
        startX = e.touches[0].clientX;
        clearInterval(intervalId);
    }
}
function handleTouchEnd(e, container, nameId, nameBlock, elementOnPage, sliderButtonsContainer) {
    if (e.changedTouches && e.changedTouches.length > 0) {
        const endX = e.changedTouches[0].clientX;
        const diffX = endX - startX;

        if (Math.abs(diffX) > 50) {
            if (diffX > 0) {
                currentIndex = (currentIndex - 1 + nameBlock.length) % nameBlock.length;
            } else {
                currentIndex = (currentIndex + 1) % nameBlock.length;
            }

            container.style.opacity = 0;
            setTimeout(() => showCourses(container, nameId, nameBlock, elementOnPage, sliderButtonsContainer), 500);
        }
    }
}
