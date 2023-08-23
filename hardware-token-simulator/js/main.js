//Automatic Timer that counts for 10 secs and loops when it reaches zero
let seconds = 10;
function tenSecondsTimer() {
  generateRandomNumbers();
  setInterval(function() {
    if (seconds == 0) {
      seconds = 10;
      generateRandomNumbers()
    }
    document.getElementById("reset").innerHTML = `Token validity: ${seconds} second(s)`;
    seconds--;
  }, 1000);
}
tenSecondsTimer();



//Generate the Random Numbers and Copy them
  function generateRandomNumbers() {
    var numberList = document.getElementById("numberList");
    numberList.innerHTML = ""; // Clear previous numbers
    
    var min = 0; // Minimum number
    var max = 9; // Maximum number
    var count = 6; // Number of random numbers to generate
    var output = "";
    
    for (var i = 0; i < count; i++) {
      var randomNumber = Math.floor(Math.random() * (max - min + 1)) + (min);
      var listItem = document.createElement("li");
      listItem.appendChild(document.createTextNode(randomNumber));
      numberList.appendChild(listItem);
      output += randomNumber;
    }
    
  }
  copyFunction();
  function copyFunction(){
    for(var i = 0; i < count; i++){
      navigator.clipboard.writeText(output);
    }
  }
    if(output = randomNumber){
      console.log("Token Code Copied")
    }


//Copyright Year
// let yearDate = new Date().getFullYear();
// document.getElementById("year").innerHTML = yearDate;