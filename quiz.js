/**
 * Function to check the user's selected answer against the correct answer
 * and provide visual feedback.
 */
function checkAnswer() {
    // 1. Identify the Correct Answer
    const correctAnswer = "4";

    // 2. Retrieve the User’s Answer
    // Use querySelector to find the radio button that is currently checked
    const selectedInput = document.querySelector('input[name="quiz"]:checked');
    
    // Check if an answer was actually selected
    if (!selectedInput) {
        // Optional: Provide feedback if no answer is selected
        document.getElementById("feedback").textContent = "Please select an answer before submitting.";
        return; 
    }
    
    // Access the value of the selected input
    const userAnswer = selectedInput.value;

    // 3. Compare the User’s Answer with the Correct Answer
    const feedbackElement = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        // Correct answer logic
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        // Incorrect answer logic
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

// 4. Add an Event Listener to the Submit Button
const submitButton = document.getElementById("submit-answer");

// Add a click listener, passing the checkAnswer function as the callback
submitButton.addEventListener('click', checkAnswer);