var modal = document.getElementById("imageModal");

// Open the modal
function openModal() {
      modal.style.display = "flex";
}

// Close the modal
function closeModal() {
    modal.style.display = "none";
}

// Logout function
function logout() {
    alert('Logging out...');
    // Add your logout logic here
}
// Optional: Close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function changeColor(filter, button) {
    // Get the icon elements in the nav
    const icons = document.querySelectorAll('.nav-btn .icon');

    // Reset the icon color to default
    icons.forEach(icon => {
        icon.style.filter = ''; // Reset filter for icons
        icon.parentElement.classList.remove('active'); // Remove active class
    });

    // Set the filter for the selected button
    switch (filter) {
        case 'filter1':
            button.querySelector('.icon').style.filter = 'invert(27%) sepia(91%) saturate(7481%) hue-rotate(359deg) brightness(102%) contrast(117%)';
            break;
        case 'filter2':
            button.querySelector('.icon').style.filter = 'invert(27%) sepia(91%) saturate(7481%) hue-rotate(359deg) brightness(102%) contrast(117%)';
            break;
        case 'filter3':
            button.querySelector('.icon').style.filter = 'invert(27%) sepia(91%) saturate(7481%) hue-rotate(359deg) brightness(102%) contrast(117%)';
            break;
        case 'filter4':
            button.querySelector('.icon').style.filter = 'invert(27%) sepia(91%) saturate(7481%) hue-rotate(359deg) brightness(102%) contrast(117%)';
            break;
        case 'filter5':
            button.querySelector('.icon').style.filter = 'invert(27%) sepia(91%) saturate(7481%) hue-rotate(359deg) brightness(102%) contrast(117%)';
            break;
    }

    // Add active class to the clicked button
    button.classList.add('active');
}

