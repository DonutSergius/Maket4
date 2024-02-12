function validateForm() {
    const nameInput = document.getElementById('nameInput');
    const surnameInput = document.getElementById('surnameInput');
    const interestInput = document.getElementById('interestInput');
    const phoneInput = document.getElementById('phoneInput');
    const emailInput = document.getElementById('emailInput');
    const privacyCheckbox = document.getElementById('privacyCheckbox');

    const nameRegex = /^[^\d]+$/;
    if (!nameRegex.test(nameInput.value)) {
        nameInput.setCustomValidity("Ім'я може містити тільки літери");
        error(nameInput);
    } else {
        clearStyle(nameInput);
    }

    if (!nameRegex.test(surnameInput.value)) {
        surnameInput.setCustomValidity("Прізвище може містити тільки літери");
        error(surnameInput);
    } else {
        clearStyle(surnameInput);
    }

    if(interestInput.value !== "developer" && interestInput.value !== "QA"){
        interestInput.setCustomValidity("Напишіть або developer або QA");
        error(interestInput);
    } else {
        clearStyle(interestInput);
    }

    const phoneRegex = /^\+38\d{3}\d{2}\d{2}\d{3}$/;
    if (!phoneRegex.test(phoneInput.value)) {
        phoneInput.setCustomValidity("Формат телефону: +38xxxxxxxxxx");
        error(phoneInput);
    } else {
        clearStyle(phoneInput);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailInput.setCustomValidity("Некоректний формат Email");
        error(emailInput);
    } else {
        clearStyle(emailInput);
    }

    if (!privacyCheckbox.checked) {
        alert('Будь ласка, погодьтеся з політикою конфіденційності');
        return;
    }

    clear(nameInput);
    clear(surnameInput);
    clear(interestInput);
    clear(phoneInput);
    clear(emailInput);
    privacyCheckbox.checked = false;

    alert('Форма успішно відправлена!');
}

function clearStyle(inputElement) {
    inputElement.style.color = "black";
    inputElement.style.borderColor = "black";
}

function error(inputElement){
    inputElement.style.color = "red";
    inputElement.style.borderColor = "red";
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
