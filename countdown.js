// Set the event date (YYYY, MM (zero-based), DD, HH, MM, SS)
const eventDate = new Date(2024, 1, 3, 9, 0, 0); // February 3, 2024, 09:00:00

function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById('countdown-text').innerHTML = "The event has started!";
    document.getElementById('countdown-clock').style.display = 'none';
  }
}

// Update the countdown every second
const countdown = setInterval(updateCountdown, 1000);

// Initial call to avoid delay
updateCountdown();
