function validateForm() {
    const nameInput = document.getElementById('nameInput');
    const surnameInput = document.getElementById('surnameInput');
    const interestInput = document.getElementById('interestInput');
    const phoneInput = document.getElementById('phoneInput');
    const emailInput = document.getElementById('emailInput');
    const privacyCheckbox = document.getElementById('privacyCheckbox');

    const nameRegex = /^[^\d]+$/;
    var isValid = true;

    if (!nameRegex.test(nameInput.value) || nameInput.value == "") {
        nameInput.setCustomValidity("Ім'я може містити тільки літери");
        error(nameInput);
        isValid = false;
    } else {
        clearStyle(nameInput);
    }

    if (!nameRegex.test(surnameInput.value) || surnameInput.value == "") {
        surnameInput.setCustomValidity("Прізвище може містити тільки літери");
        error(surnameInput);
        isValid = false;
    } else {
        clearStyle(surnameInput);
    }

    if(interestInput.value !== "developer" && interestInput.value !== "QA"){
        interestInput.setCustomValidity("Напишіть або developer або QA");
        error(interestInput);
        isValid = false;
    } else {
        clearStyle(interestInput);
    }

    const phoneRegex = /^\+38\d{3}\d{2}\d{2}\d{3}$/;
    if (!phoneRegex.test(phoneInput.value) || phoneInput.value =="") {
        phoneInput.setCustomValidity("Формат телефону: +38xxxxxxxxxx");
        error(phoneInput);
        isValid = false;
    } else {
        clearStyle(phoneInput);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value) || emailInput.value == "") {
        emailInput.setCustomValidity("Некоректний формат Email");
        error(emailInput);
        isValid = false;
    } else {
        clearStyle(emailInput);
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
