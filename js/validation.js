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
        return;
    }

    if (!nameRegex.test(surnameInput.value)) {
        surnameInput.setCustomValidity("Прізвище може містити тільки літери");
        error(surnameInput);
        return;
    }

    if(interestInput.value != "developer" || interestInput.value != "QA"){
        interestInput.setCustomValidity("Напишіть або developer або QA");
        error(interestInput);
        return;
    }

    const phoneRegex = /^\+38\d{3}\d{2}\d{2}\d{3}$/;
    if (!phoneRegex.test(phoneInput.value)) {
        phoneInput.setCustomValidity("Формат телефону: +38xxxxxxxxxx");
        error(phoneInput);
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailInput.setCustomValidity("Некоректний формат Email");
        error(emailInput);
        return;
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

function clear(inputElement){
    inputElement.value = ''
    inputElement.style = ".user-input input";
}

function error(inputElement){
    inputElement.style.color = "red";
    inputElement.style.borderColor = "red";
}

nameInput.addEventListener("focus", function () {
    clearStyle(nameInput);
});

surnameInput.addEventListener("focus", function () {
    clearStyle(surnameInput);
});

interestInput.addEventListener("focus", function () {
    clearStyle(interestInput);
});

phoneInput.addEventListener("focus", function () {
    clearStyle(phoneInput);
});

emailInput.addEventListener("focus", function () {
    clearStyle(emailInput);
});

function clearStyle(inputElement) {
    inputElement.style = ".user-input input";
}