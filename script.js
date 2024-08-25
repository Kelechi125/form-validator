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

// Event Listeners
form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (username.value === "") {
        showError(username, "Username is required!");
    } else {
        showSuccess(username);
    }
})
