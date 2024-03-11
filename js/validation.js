function validateForm() {
    const nameInput = document.getElementById('nameInput');
    const surnameInput = document.getElementById('surnameInput');
    const interestInput = document.getElementById('interestInput');
    const phoneInput = document.getElementById('phoneInput');
    const emailInput = document.getElementById('emailInput');
    const privacyCheckbox = document.getElementById('privacyCheckbox');

    const nameError = document.getElementById("nameError");
const surnameError = document.getElementById("surnameError");
const intError = document.getElementById("intError");
const telError = document.getElementById("telError");
const emailError = document.getElementById("emailError");

    const nameRegex = /^[^\d]+$/;
    var isValid = true;

    if (!nameRegex.test(nameInput.value) || nameInput.value == "") {
        nameInput.setCustomValidity("Ім'я може містити тільки літери");
        error(nameInput);
        nameError.textContent = "Ім'я може містити тільки літери";
        isValid = false;
    } else {
        clearStyle(nameInput);
        nameError.textContent = "";
    }
    
    if (!nameRegex.test(surnameInput.value) || surnameInput.value == "") {
        surnameInput.setCustomValidity("Прізвище може містити тільки літери");
        error(surnameInput);
        surnameError.textContent = "Прізвище може містити тільки літери";
        isValid = false;
    } else {
        clearStyle(surnameInput);
        surnameError.textContent = "";
    }
    
    if (interestInput.value !== "developer" && interestInput.value !== "QA"){
        interestInput.setCustomValidity("Напишіть або developer або QA");
        error(interestInput);
        intError.textContent = "Напишіть або developer або QA";
        isValid = false;
    } else {
        clearStyle(interestInput);
        intError.textContent = "";
    }
    
    const phoneRegex = /^\+38\d{3}\d{2}\d{2}\d{3}$/;
    if (!phoneRegex.test(phoneInput.value) || phoneInput.value =="") {
        phoneInput.setCustomValidity("Формат телефону: +38xxxxxxxxxx");
        error(phoneInput);
        telError.textContent = "Формат телефону: +38xxxxxxxxxx";
        isValid = false;
    } else {
        clearStyle(phoneInput);
        telError.textContent = "";
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value) || emailInput.value == "") {
        emailInput.setCustomValidity("Некоректний формат Email");
        error(emailInput);
        emailError.textContent = "Некоректний формат Email";
        isValid = false;
    } else {
        clearStyle(emailInput);
        emailError.textContent = "";
    }

    if (!privacyCheckbox.checked) {
        alert('Будь ласка, погодьтеся з політикою конфіденційності');
        return;
    }


    if( isValid ) {
        alert('Форма успішно відправлена!');
        clear(nameInput);
        clear(surnameInput);
        clear(interestInput);
        clear(phoneInput);
        clear(emailInput);
        privacyCheckbox.checked = false;
    }
}

function clear(inputElement){
    inputElement.value = "";
    inputElement.style = ".user-input input"
}

function clearStyle(inputElement) {
    inputElement.style = ".user-input input"
    isValid = true;
}

function error(inputElement){
    inputElement.style.color = "red";
    inputElement.style.borderColor = "red";
    isValid = false;
}

document.getElementById("nameInput").addEventListener("focus", function () {
    clearStyle(nameInput);
});

document.getElementById("surnameInput").addEventListener("focus", function () {
    clearStyle(surnameInput);
});

document.getElementById("interestInput").addEventListener("focus", function () {
    clearStyle(interestInput);
});

document.getElementById("phoneInput").addEventListener("focus", function () {
    clearStyle(phoneInput);
});

document.getElementById("emailInput").addEventListener("focus", function () {
    clearStyle(emailInput);
});
