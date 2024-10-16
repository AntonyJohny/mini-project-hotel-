// Function to open the specified modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "flex";
}

// Function to close the specified modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Optional: Close the modal if the user clicks outside of it
window.onclick = function(event) {
    var createdModal = document.getElementById("createdModal");
    var changeModal = document.getElementById("changeModal");

    if (event.target == createdModal) {
        createdModal.style.display = "none";
    }

    if (event.target == changeModal) {
        changeModal.style.display = "none";
    }
}
