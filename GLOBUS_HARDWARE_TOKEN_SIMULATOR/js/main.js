function generateRandomNumbers() {
    var numberList = document.getElementById("numberList");
    numberList.innerHTML = ""; // Clear previous numbers

    var min = 0; // Minimum number
    var max = 9; // Maximum number
    var count = 6; // Number of random numbers to generate

    for (var i = 0; i < count; i++) {
      var randomNumber = Math.floor(Math.random() * (max - min + 1)) + (min);
      var listItem = document.createElement("li");
      listItem.appendChild(document.createTextNode(randomNumber));
      numberList.appendChild(listItem);
    }
  }

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
  button.addEventListener("click", resetSessionTimeout);