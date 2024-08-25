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

// Check required fields
const checkRequired = inputArray => {
    inputArray.forEach(input => {
        if (input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is required.`)
        } else {
            showSuccess(input);
        }
    });
}

// Check input length
const checkLength = (input, minLength, maxLength) => {
    if (input.value < minLength) {
        showError(input, `${getFieldName(input)} must be at least ${minLength} characters!`)
    } else if (input.value > maxLength) {
        showError(input, `${getFieldName(input)} must be less than ${maxLength} characters!`)
    } else {
        showSuccess(input);
    }
}

// Get fieldname
const getFieldName = input => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listeners
form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkRequired([username, email, password, password2])
    checkLength(username, 7, 26);
    checkLength(password, 5, 21);
})
