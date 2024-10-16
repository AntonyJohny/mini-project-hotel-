const inputs = document.querySelectorAll('.code-input input');
const resendBtn = document.getElementById('resendBtn');
const timerDisplay = document.getElementById('timer');

let timeLeft = 30; // Initialize countdown time
let countdownInterval; // For storing the interval ID

// Function to start or restart the countdown
function startCountdown() {
    // Clear any existing countdown to avoid conflicts
    clearInterval(countdownInterval);
    
    timeLeft = 30; // Reset to 30 seconds
    resendBtn.disabled = true; // Disable the button while waiting
    resendBtn.classList.add('disabled'); // Optional: add a disabled class for styling

    // Start the countdown
    countdownInterval = setInterval(() => {
        // Format seconds to always show two digits
        let seconds = timeLeft < 10 ? `0${timeLeft}` : timeLeft;

        // Update the timer display
        timerDisplay.textContent = `00:${seconds}`;

        // Decrease the timer
        timeLeft--;

        // When timeLeft reaches -1, enable the button and stop the countdown
        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            resendBtn.disabled = false; // Enable the resend button
            resendBtn.classList.remove('disabled'); // Optional: remove disabled class
            timerDisplay.textContent = ''; // Clear timer display when finished
        }
    }, 1000);
}

// Start the countdown when the page loads
startCountdown();

// OTP input navigation (for moving between inputs)
inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        if (e.target.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus(); // Move to the next input if digit is entered
        }
        if (e.inputType === 'deleteContentBackward' && index > 0) {
            inputs[index - 1].focus(); // Move to the previous input if backspace is pressed
        }
    });
});

// Event listener for "Didn't receive?" button to reset the countdown
resendBtn.addEventListener('click', () => {
    startCountdown(); // Restart the countdown when the button is clicked
});
