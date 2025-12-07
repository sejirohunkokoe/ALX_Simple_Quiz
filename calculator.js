// --- Arithmetic Functions ---

function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    // Handle division by zero
    if (number2 === 0) {
        return "Error: Division by zero";
    }
    return number1 / number2;
}

// --- Main Calculation and Display Logic ---

/**
 * Reads inputs, performs the calculation using the provided function,
 * and updates the result span.
 * @param {function} operationFunction - The arithmetic function to execute (add, subtract, etc.).
 */
function calculateAndDisplay(operationFunction) {
    // Retrieve input values and convert them to floating-point numbers.
    // Use the || 0 safeguard to default to zero if the input field is empty or invalid.
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    
    // Perform the calculation
    const result = operationFunction(number1, number2);
    
    // Display the result in the dedicated span
    document.getElementById('calculation-result').textContent = result;
}

// --- Attach Event Listeners ---

// Addition
document.getElementById('add').addEventListener('click', function() {
    calculateAndDisplay(add);
});

// Subtraction
document.getElementById('subtract').addEventListener('click', function() {
    calculateAndDisplay(subtract);
});

// Multiplication
document.getElementById('multiply').addEventListener('click', function() {
    calculateAndDisplay(multiply);
});

// Division
document.getElementById('divide').addEventListener('click', function() {
    calculateAndDisplay(divide);
});