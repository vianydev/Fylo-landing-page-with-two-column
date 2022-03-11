const email = document.getElementById("email");


email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
    email.setCustomValidity("Please check your email");
    } else {
    email.setCustomValidity("");
    }
});
