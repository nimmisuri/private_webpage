// Set your anniversary date here
const anniversaryDate = new Date('2024-01-08T20:00:00');

// Function to update the timer
function updateTimer() {
  const now = new Date();
  const difference = now - anniversaryDate;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  document.getElementById('timer').textContent = 
    `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
}

// Update the timer every second
setInterval(updateTimer, 1000);
updateTimer();
