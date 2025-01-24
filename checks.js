
document.addEventListener('DOMContentLoaded', () => {
    console.log("checks.js loaded");

    const form = document.getElementById('signupForm');

    if (form) {
        form.addEventListener('submit', (event) => {
            let isValid = true;

            // Form fields
            const username = document.getElementById("username").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;
            const conPassword = document.getElementById("conPassword").value;

            // Validation logic
            if (username.length < 4 || username.length > 8) {
                alert("Username should be between 4-8 characters.");
                isValid = false;
            }
            if (email.indexOf('@') === -1) {
                alert("Email must include '@'.");
                isValid = false;
            }
            if (password.indexOf('$') === -1 || password.length < 5 || password.length > 10) {
                alert("Password must include '$' and be between 5-10 characters.");
                isValid = false;
            }
            if (conPassword !== password) {
                alert("Confirm password must match the password.");
                isValid = false;
            }

            // Prevent form submission if validation fails
            if (!isValid) {
                event.preventDefault(); // Stops the form from submitting
                console.log("Form submission prevented due to validation errors.");
            } else {
                console.log("Form passed validation and will be submitted.");
            }
        });
    }
});