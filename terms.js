var modal = document.getElementById("termsModal-terms");


/*Terms and condtions*/
        // Open the modal
function openModal() {
    modal.style.display = "block";
}

// Close the modal
function closeModal() {
    modal.style.display = "none";
}
// Enable next button if checkbox is checked
document.getElementById('agreeCheckbox').addEventListener('change', function() {
    document.getElementById('next-btn-term').disabled = !this.checked;
});
// Function for the next step
function nextStep() {
    alert("You have agreed to the terms and conditions. Proceeding to the next step.");
    // You can implement further navigation or logic here
    closeModal(); // Optional: close the modal
}
// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}