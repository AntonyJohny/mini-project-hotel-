const addCardBtn = document.getElementById('add-card-btn');
const updateCardBtn = document.getElementById('update-card-btn');
const cardContainer = document.getElementById('menu-card-container');

const dishImageInput = document.getElementById('dish-image');
const dishNameInput = document.getElementById('dish-name');
const dishPriceInput = document.getElementById('dish-price');
const dishDescriptionInput = document.getElementById('dish-description');
const extrasInput = document.getElementById('extras-input'); // Input for extras
const extrasList = document.getElementById('extras-list'); // List of extras

let cardBeingEdited = null; // Keep track of the card currently being edited

// Function to add extra to the list
function addExtra() {
    const extraValue = extrasInput.value.trim();
    if (extraValue) {
        const extraItem = document.createElement('div');
        extraItem.classList.add('extra-item');
        extraItem.innerHTML = `
        <div class="extra">
            <span>${extraValue}</span>
            <button class="remove-extra-btn circular-btn">x</button>
            </div>
        `;
        extrasList.appendChild(extraItem);
        extrasInput.value = ''; // Clear the input

        // Add event listener to remove extra
        extraItem.querySelector('.remove-extra-btn').addEventListener('click', () => {
            extrasList.removeChild(extraItem);
        });
    }
}


// Add event listener to the extras input field to add extra on pressing Enter
extrasInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addExtra();
        e.preventDefault(); // Prevent form submission
    }
});

// Add new dish card
addCardBtn.addEventListener('click', () => {
    const card = document.createElement('div');
    card.classList.add('menu-card');

    card.innerHTML = `
    <div class="content">
        <div class="box1">
            <img src="default-dish.jpg" alt="Dish Image">
            <div class="box2">
                <h3 class="dish-name" placeholder="Dish name"></h3>
                <p class="price"></p>
            </div>
        </div>
        <div class="box3">
            <p class="description"></p>
        </div>
        <div class="extras-container">
            <!-- Extras section will be populated dynamically -->
        </div>
        <button class="delete-btn">x</button>
        <button class="edit-btn">Edit</button>
    </div>
    `;
    cardContainer.appendChild(card);

    // Delete functionality
    card.querySelector('.delete-btn').addEventListener('click', () => {
        card.remove();
    });

    // Edit functionality
    card.querySelector('.edit-btn').addEventListener('click', () => {
        // Populate form fields with card's current data
        dishImageInput.value = card.querySelector('img').src;
        dishNameInput.value = card.querySelector('h3').textContent;
        dishPriceInput.value = card.querySelector('.price').textContent.replace('₹', '');
        dishDescriptionInput.value = card.querySelector('.description').textContent;

        // Load existing extras into extrasList
        const extrasContainer = card.querySelector('.extras-container');
        extrasList.innerHTML = ''; // Clear existing extras in the input area

        // Fetch and display existing extras
        const existingExtras = extrasContainer.querySelectorAll('.extras');
        existingExtras.forEach(extra => {
            const extraValue = extra.textContent;
            extrasInput.value = extraValue; // Set existing extra for reference
            addExtra(); // Add to list
        });

        // Update cardBeingEdited
        cardBeingEdited = card;
    });
});

// Update the card with dish details
updateCardBtn.addEventListener('click', () => {
    const dishImage = dishImageInput.value.trim();
    const dishName = dishNameInput.value.trim();
    const dishPrice = dishPriceInput.value.trim();
    const dishDescription = dishDescriptionInput.value.trim();

    if (dishImage && dishName && dishPrice && dishDescription) {
        if (cardBeingEdited) {
            // Update the card with new information
            cardBeingEdited.querySelector('img').src = dishImage || 'default-dish.jpg'; // Default image if none provided
            cardBeingEdited.querySelector('h3').textContent = dishName;
            cardBeingEdited.querySelector('.price').textContent = `₹${dishPrice}`;
            cardBeingEdited.querySelector('.description').textContent = dishDescription;

            // Dynamically add extras based on input
            const extrasContainer = cardBeingEdited.querySelector('.extras-container');
            extrasContainer.innerHTML = ''; // Clear existing extras

            const extraItems = extrasList.querySelectorAll('.extra-item span');
            extraItems.forEach(extraItem => {
                const extraDiv = document.createElement('div');
                extraDiv.classList.add('extras');
                extraDiv.textContent = extraItem.textContent; // Set text to extra value
                extrasContainer.appendChild(extraDiv);
            });

            // Clear form fields and reset cardBeingEdited
            dishNameInput.value = '';
            dishDescriptionInput.value = '';
            dishPriceInput.value = '';
            dishImageInput.value = '';
            extrasList.innerHTML = ''; // Clear extras list
            cardBeingEdited = null; // Reset the edited card
        } else {
            alert('No card selected for editing.');
        }
    } else {
        alert('Please fill in all fields.');
    }
});

// Search functionality
const searchBar = document.getElementById('search-bar');
const searchBtn = document.getElementById('search-btn');

function filterCards() {
    const searchTerm = searchBar.value.trim().toLowerCase(); // Get the search term in lowercase
    const cards = cardContainer.querySelectorAll('.menu-card'); // Get all the cards

    cards.forEach(card => {
        const dishName = card.querySelector('.dish-name').textContent.toLowerCase(); // Get the name from the card and convert to lowercase

        // Show or hide the card based on whether the dishName matches the search term
        if (dishName.includes(searchTerm)) {
            card.style.display = ''; // Show the card
        } else {
            card.style.display = 'none'; // Hide the card
        }
    });
}

// Add event listeners for both search button click and typing in search bar
searchBtn.addEventListener('click', filterCards);
searchBar.addEventListener('input', filterCards);

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

