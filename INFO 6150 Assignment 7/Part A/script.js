$(document).ready(() => {
    // Initial state: login button is disabled
    $("#loginButton").prop("disabled", true);

    // Validate on input change for each field
    $("#email, #username, #password, #confirmPassword").on("input", () => {
        validateLoginFields();
    });

    $("#loginButton").on("click", () => {
        if (validateLoginFields()) {
            const username = $("#username").val();
            localStorage.setItem('loggedInUser', username);
            window.location.href = "calculator.html";
        }
    });

    function validateLoginFields() {
        const email = $("#email").val();
        const username = $("#username").val();
        const password = $("#password").val();
        const confirmPassword = $("#confirmPassword").val();

        let isFormValid = true;

        // Reset error messages
        $(".error").text("");

        if (!email) {
            $("#emailError").text("Email is required");
            isFormValid = false;
        } else if (!isValidEmail(email)) {
            $("#emailError").text("Invalid email format");
            isFormValid = false;
        }

        if (!username) {
            $("#usernameError").text("Username is required");
            isFormValid = false;
        }

        if (!password) {
            $("#passwordError").text("Password is required");
            isFormValid = false;
        } else if (password.length < 8 || password.length > 20) {
            $("#passwordError").text("Password must be between 8 and 20 characters");
            isFormValid = false;
        }

        if (confirmPassword !== password) {
            $("#confirmPasswordError").text("Passwords do not match");
            isFormValid = false;
        }

        // Enable or disable login button
        $("#loginButton").prop("disabled", !isFormValid);

        return isFormValid;
    }

    function isValidEmail(email) {
        // Implement email validation logic for northeastern email IDs
        return /^\w+@neu\.edu$/.test(email);
    }
});
