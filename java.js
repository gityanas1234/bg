// Set the birthday date
const birthdayDate = new Date("June 24, 2025 00:00:00").getTime();

// Update the countdown every second
function updateCountdown() {
    const now = new Date().getTime();
    const distance = birthdayDate - now;

    // Calculate days, hours, minutes, seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the countdown elements
    document.getElementById("days").innerHTML = `<div>${days} <span>Days</span></div>`;
    document.getElementById("hours").innerHTML = `<div>${hours} <span>Hours</span></div>`;
    document.getElementById("minutes").innerHTML = `<div>${minutes} <span>Minutes</span></div>`;
    document.getElementById("seconds").innerHTML = `<div>${seconds} <span>Seconds</span></div>`;

    // If the countdown is finished
    if (distance < 0) {
        document.getElementById("message").innerHTML = "<p>Happy Birthday, My Love! Enjoy your special day!</p>";
        clearInterval(countdownInterval);
    }
}

// Function to change the message when clicked
function changeMessage() {
    const messages = [
        "You are my everything!",
        "I cherish every moment with you.",
        "The best part of my life is YOU.",
        "Wishing you all the love in the world!",
        "I love you more than words can say!",
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("message").innerHTML = `<p>${randomMessage}</p>`;
}

// Event listener for the title
document.getElementById("title").addEventListener("click", changeMessage);

// Run the countdown
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to display countdown immediately
