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

// Event Listeners
form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (username.value === "") {
        showError(username, "Username is required!");
    } else {
        showSuccess(username);
    }

    if (email.value === "") {
        showError(email, "Where is your email address!?");
    } else if (!isValidEmail(email.value)) {
        showError(email, "This email address is not valid. Try again.")
    } else {
        showSuccess(email);
    }

    if (password.value === "") {
        showError(password, "Please enter a password right now!");
    } else {
        showSuccess(password);
    }

    if (password2.value === "") {
        showError(password2, "Password needs to match!");
    } else {
        showSuccess(password2);
    }
})
