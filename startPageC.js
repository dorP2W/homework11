document.getElementById("startButton").addEventListener("click", function () {
    const fullName = document.getElementById("fullName").value
    if (fullName.length > 1) {
        // Navigate to the signup page if the condition is met
        window.location.href = "signupPage.html";
    } else {
        // Show an alert if the condition is not met
        alert("Please enter your full name before proceeding.(more then 2 letters)");
    }
});