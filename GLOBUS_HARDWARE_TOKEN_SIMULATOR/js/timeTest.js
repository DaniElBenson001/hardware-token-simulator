// Disable mouse clicks
document.addEventListener('click', disableMouseClicks);

// Enable mouse clicks after one minute
setTimeout(enableMouseClicks, 60000);

function disableMouseClicks(event) {
  event.preventDefault();
  event.stopPropagation();
}

function enableMouseClicks() {
  document.removeEventListener('click', disableMouseClicks);
  console.log('Mouse clicks enabled!');
}

var sessionTimeout;
var button = document.getElementById("myButton"); // Replace "myButton" with the ID of your button

function startSessionTimeout() {
  // Disable the button
  button.disabled = true;

  // Clear existing timeout
  clearTimeout(sessionTimeout);

  // Set new timeout
  sessionTimeout = setTimeout(enableButton, 60000); // 60 seconds = 60000 milliseconds
}

function enableButton() {
  // Enable the button
  button.disabled = false;
}

// Add click event listener to start the session timeout
button.addEventListener("click", startSessionTimeout);  