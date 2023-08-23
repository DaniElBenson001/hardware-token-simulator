var sessionTimeout;

function resetSessionTimeout() {
  // Clear existing timeout
  clearTimeout(sessionTimeout);

  // Set new timeout
  sessionTimeout = setTimeout(logout, 60000); // 60 seconds = 60000 milliseconds
}

function logout() {
  // Perform logout or session expiration tasks
  console.log("Session expired. Logging out...");
}

// Add click event listener to reset the session timeout
document.addEventListener("click", resetSessionTimeout);