const form = document.querySelector("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show input error message
const showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small")
    small.innerText = message;
}

// Show success input outline

const showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

// Create email is valid
const isValidEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const checkRequired = inputArray => {
    inputArray.forEach(input => {
        if (input.value.trim() === "") {
            showError(input, "Is required.")
        } else {
            showSuccess(input);
        }
    });
}

// Event Listeners
form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkRequired([username, email, password, password2])
})
