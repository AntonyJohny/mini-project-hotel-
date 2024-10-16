$(document).ready(function () {
    // Initialize Datepicker
    $("#order-date").datepicker({
        showButtonPanel: true,
        dateFormat: "MM dd, yy",
    });

    function getCurrentDate() {
        const currentDate = new Date();
        
        // Get the individual components of the date
        const day = String(currentDate.getDate()).padStart(2, '0'); // Day (2 digits)
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month (0-11)
        const year = currentDate.getFullYear(); // Year (4 digits)
    
        // Format the date as "MM dd, yyyy"
        return `${month}-${day}-${year}`;
    }
    
    // Example usage:
     // Outputs current date, e.g., "10 08, 2024"
    

    let orderCount = 0;

    // Add a new card when the button is clicked
    $("#add-card-btn").click(function () {
        const transactionId = $("#transaction-id").val();
        const personName = $("#person-name").val();
        const tableNumber = $("#table-number").val();
        const orderDetails = $("#order-details").val();
        const totalCost = $("#total-cost").val();
        const orderDate = $("#order-date").val(); // Get selected date

        // Get current time
        const currentTime = new Date();
        const formattedTime = currentTime.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        });

        // Increment the order count
        orderCount++;

        // Create a new card with the provided information
        const cardHtml = `
            <div class="card">
                <h3>Order #${orderCount}</h3>
                <p><strong>Transaction ID:</strong> ${transactionId}</p>
                <p class="name"><strong>Name:</strong> ${personName}</p>
                <p><strong>Table Number:</strong> ${tableNumber}</p>
                <p><strong>Order Details:</strong> ${orderDetails}</p>
                <p><strong>Total Cost:</strong> $${totalCost}</p>
                <p><strong>Order Date:</strong> ${getCurrentDate()}</p>
                <p><strong>Order Time:</strong> ${formattedTime}</p>
                <button class="delete-btn">X</button>
            </div>
        `;

        // Add the new card above the form
        $("#card-container").prepend(cardHtml);

        // Clear the form fields
        $("#payment-form")[0].reset();

        // Attach delete functionality to the new card
        $("#card-container").on("click", ".delete-btn", function () {
            $(this).parent().remove();
        });
        
    });

    // Search functionality
    $("#search-btn").click(function () {
        const searchTerm = $("#search-bar").val().toLowerCase();

        // Hide all cards initially
        $(".card").hide();

        // Show only the cards that match the transaction ID
        $(".card").filter(function () {
            return $(this).find("p").eq(0).text().toLowerCase().includes(searchTerm);
        }).show();
    });
    $("#search-btn1").click(function () {
        const searchTerm = $("#search-bar1").val().toLowerCase();

        // Hide all cards initially
        $(".card").hide();

        // Show only the cards that match the transaction ID
        $(".card").filter(function () {
            return $(this).find("p").eq(1).text().toLowerCase().includes(searchTerm);
        }).show();
    });
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



