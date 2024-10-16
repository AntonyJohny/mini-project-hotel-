const dots = document.querySelectorAll('.dot');
let currentIndex = localStorage.getItem('currentIndex') ? parseInt(localStorage.getItem('currentIndex')) : 0;
let slideInterval;

// Update the active dot based on the current index
function updateActiveDot(index) {
    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === index);
    });
}

// Navigate to the slide based on index and store the index in localStorage
function navigateToSlide(index) {
    const pages = [
        'C:\Users\User\Downloads\programming\mini-project(hotel)\promo1.html', 
        'C:\Users\User\Downloads\programming\mini-project(hotel)\promo2.html', 
        'C:\Users\User\Downloads\programming\mini-project(hotel)\promo3.html'
    ];
    currentIndex = index;
    localStorage.setItem('currentIndex', currentIndex); // Store the current index
    window.location.href = pages[index];
}

// Event listeners for dot click navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clearInterval(slideInterval); // Stop the automatic transition
        currentIndex = index;
        updateActiveDot(currentIndex);
        navigateToSlide(currentIndex);
    });
});

// Initialize the active dot on page load
updateActiveDot(currentIndex);

// Function to automatically switch to the next slide every 5 seconds
function goToNextSlide() {
    currentIndex = (currentIndex + 1) % dots.length;
    updateActiveDot(currentIndex);
    navigateToSlide(currentIndex);
}

// Start the slideshow with a 5-second interval
function startSlideShow() {
    slideInterval = setInterval(goToNextSlide, 5000); // Switch every 5 seconds
}

// **ONLY** start the interval after the first slide is shown
startSlideShow(0);