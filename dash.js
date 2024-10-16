// Get the form inputs and buttons
const addCardBtn = document.getElementById('add-card-btn');
const updateCardBtn = document.getElementById('update-card-btn');
const cardContainer = document.getElementById('card-container');
const tableNumberInput = document.getElementById('table-number');
const personNameInput = document.getElementById('person-name');
const dishCountInput = document.getElementById('dish-count');
const generateDishesBtn = document.getElementById('generate-dishes-btn');
const dishesContainer = document.getElementById('dishes-container');

// Auto-increment Order Number
let orderNumber = 1;

// Add event listener to the "+" button to add a new empty card
addCardBtn.addEventListener('click', () => {
    createCard(orderNumber++, '', '', [], 'Ordered'); // Empty fields, Order defaults to "Ordered"

    // Reset order number to 1 after it exceeds 999
    if (orderNumber > 999) {
        orderNumber = 1;
    }
});

// Function to get current time
function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString(); // Formats the time in HH:MM:SS AM/PM
}

// Function to dynamically generate input fields for dishes
// Function to dynamically generate input fields for dishes
generateDishesBtn.addEventListener('click', () => {
    dishesContainer.innerHTML = ''; // Clear previous dishes
    const dishCount = parseInt(dishCountInput.value);
    if (dishCount > 0) {
        for (let i = 0; i < dishCount; i++) {
            const dishEntry = document.createElement('div');
            dishEntry.classList.add('dish-entry');
            dishEntry.innerHTML = `
                <label>Dish ${i + 1}:</label>
                <input type="text" class="dish-name" placeholder="Enter Dish Name">
                <input type="number" class="dish-quantity" placeholder="Enter Quantity">
                <input type="number" class="dish-cost" placeholder="Enter Cost">
                <input type="text" class="dish-instruction" placeholder="Enter Order Instructions">
                <br><br>
            `;
            dishesContainer.appendChild(dishEntry);
        }
    }
});


// Function to create a new card
// Function to create a new card
function createCard(orderNo, tableNo, personName, foodOrderDetails, orderStatus) {
    const card = document.createElement('div');
    card.classList.add('card');
    
    // Construct the food order string including instructions
    let foodOrderString = '';
    foodOrderDetails.forEach(order => {
        foodOrderString += `${order.name} (${order.quantity}) - ₹${order.cost} ${order.instructions ? `(Instructions: ${order.instructions})` : ''}<br>`;
    });

    card.innerHTML = `
        <div class="header">
            <div class="table-number">Table: ${tableNo}</div>
            <div class="order-number">Order #: ${orderNo}</div>
        </div>
        <div class="person-name">${personName}</div>
        <div class="order-details">${foodOrderString}</div>
        <div class="order-status">${orderStatus}</div>
        <div class="ordered-time">${getCurrentTime()}</div> <!-- Displays the current time -->
        <button class="update-btn">Update</button>
        <button class="delete-btn">x</button>
    `;

    // Append the card to the container
    cardContainer.appendChild(card);

    // Add delete functionality
    const deleteBtn = card.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        card.remove();
    });

    // Add update functionality
    const updateBtn = card.querySelector('.update-btn');
    updateBtn.addEventListener('click', () => {
        // Populate form fields with card details
        tableNumberInput.value = tableNo;
        personNameInput.value = personName;

        // Handle dish entries in the form
        dishesContainer.innerHTML = ''; // Clear previous dishes
        foodOrderDetails.forEach((order, i) => {
            const dishEntry = document.createElement('div');
            dishEntry.classList.add('dish-entry');
            dishEntry.innerHTML = `
                <label>Dish ${i + 1}:</label>
                <input type="text" class="dish-name" value="${order.name}">
                <input type="number" class="dish-quantity" value="${order.quantity}">
                <input type="number" class="dish-cost" value="${order.cost}">
                <input type="text" class="dish-instruction" value="${order.instructions}">
                <br><br>
            `;
            dishesContainer.appendChild(dishEntry);
        });

        // Set a temporary data attribute on the update button for later use
        updateCardBtn.setAttribute('data-order-number', orderNo);
    });

    // Add status change functionality
    const statusElement = card.querySelector('.order-status');
    let status = 0; // 0: Ordered, 1: Preparing, 2: Served
    statusElement.addEventListener('click', function () {
        if (status === 0) {
            statusElement.textContent = 'Order: Preparing';
            status = 1;
        } else if (status === 1) {
            statusElement.textContent = 'Order: Served';
            status = 2;
        }
    });
}


// Update card details when the update button is clicked
// Update card details when the update button is clicked
updateCardBtn.addEventListener('click', () => {
    const orderNo = updateCardBtn.getAttribute('data-order-number');
    const tableNumber = tableNumberInput.value.trim();
    const personName = personNameInput.value.trim();

    // Collect all dishes
    const foodOrderDetails = [];
    const dishEntries = dishesContainer.querySelectorAll('.dish-entry');
    dishEntries.forEach(entry => {
        const name = entry.querySelector('.dish-name').value;
        const quantity = entry.querySelector('.dish-quantity').value;
        const cost = entry.querySelector('.dish-cost').value;
        const instructions = entry.querySelector('.dish-instruction').value; // Get instructions
        foodOrderDetails.push({ name, quantity, cost, instructions });
    });

    if (tableNumber && personName && foodOrderDetails.length > 0) {
        // Find the card with the matching order number and update it
        const card = Array.from(cardContainer.children).find(card => 
            card.querySelector('.order-number').textContent.includes(`Order #: ${orderNo}`)
        );

        if (card) {
            card.querySelector('.table-number').textContent = `Table: ${tableNumber}`;
            card.querySelector('.person-name').textContent = personName;

            // Update order details
            let foodOrderString = '';
            foodOrderDetails.forEach(order => {
                foodOrderString += `${order.name} (${order.quantity}) - ₹${order.cost} <br>${order.instructions ? `(Instructions: ${order.instructions})` : ''}<br>`;
            });
            card.querySelector('.order-details').innerHTML = foodOrderString;

            // Update the ordered time
            card.querySelector('.ordered-time').textContent = `${getCurrentTime()}`;

            // Clear the form fields after update
            tableNumberInput.value = '';
            personNameInput.value = '';
            dishCountInput.value = '';
            dishesContainer.innerHTML = '';
        }
    }
});

// Get the search input and button
const searchBar = document.getElementById('search-bar');
const searchBtn = document.getElementById('search-btn');

// Function to filter cards based on search input
function filterCards() {
    const searchTerm = searchBar.value.trim().toLowerCase(); // Get the search term in lowercase
    const cards = cardContainer.querySelectorAll('.card'); // Get all the cards

    cards.forEach(card => {
        const personName = card.querySelector('.person-name').textContent.toLowerCase(); // Get the name from the card and convert to lowercase

        // Show or hide the card based on whether the personName matches the search term
        if (personName.includes(searchTerm)) {
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


