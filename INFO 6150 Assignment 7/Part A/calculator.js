$(document).ready(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        $('#loggedInUser').text(loggedInUser);
    } else {
        window.location.href = 'index.html';
    }

    $("#number1, #number2").on("input", () => {
        validateCalcFields();
    });

    $("#add, #subtract, #multiply, #divide").on("click", function() {
        const num1 = parseFloat($("#number1").val());
        const num2 = parseFloat($("#number2").val());

        if (!isNaN(num1) && !isNaN(num2)) {
            const operation = $(this).attr("id");
            const result = calculate(num1, num2, operation);
            $("#calcResult").text(result);
        }
    });

    function validateCalcFields() {
        // Implement calculator field validation logic here
        // Show error messages below the fields
    }

    const calculate = (num1, num2, operation) => {
        switch (operation) {
            case "add":
                return num1 + num2;
            case "subtract":
                return num1 - num2;
            case "multiply":
                return num1 * num2;
            case "divide":
                if (num2 !== 0) {
                    return num1 / num2;
                }
                return "Infinity";
            default:
                return "Invalid operation";
        }
    };
});
