document.getElementById('hotel-image').addEventListener('change', function (event) {
    const reader = new FileReader();
    reader.onload = function () {
        document.getElementById('hotel-image-preview').src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
});

document.getElementById('save-btn').addEventListener('click', function () {
    // Get input values
    const hotelName = document.getElementById('hotel-name').value;
    const hotelLocation = document.getElementById('hotel-location').value;
    const hotelEmail = document.getElementById('hotel-email').value;
    const hotelPhone = document.getElementById('hotel-phone').value;
    const hotelWebsite = document.getElementById('hotel-website').value;
    const hotelDescription = document.getElementById('hotel-description').value;
    const hotelType = document.getElementById('hotel-type').value;
    const hotelManager = document.getElementById('hotel-manager').value;
    const hotelTimings = document.getElementById('hotel-timings').value;

    // Display confirmation or any necessary logic to save the changes
    alert('Changes Saved Successfully!\n\n' +
        'Hotel Name: ' + hotelName + '\n' +
        'Location: ' + hotelLocation + '\n' +
        'Email: ' + hotelEmail + '\n' +
        'Phone: ' + hotelPhone + '\n' +
        'Website: ' + hotelWebsite + '\n' +
        'Description: ' + hotelDescription + '\n' +
        'Type of Hotel: ' + hotelType + '\n' +
        'Manager: ' + hotelManager + '\n' +
        'Timings: ' + hotelTimings
    );
});

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

