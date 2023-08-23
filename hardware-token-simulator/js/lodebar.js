/*let firstDigit;
let secondDigit;
let thirdDigit;
let fourthDigit;
let fifthDigit;
let sixthDigit;
let randomDigit1;

//Randomise a number within the range of 0 and 9
randomDigit1 = Math.random() * 9;
randomDigit2 = (Math.random() * Math.random()) * 9;
randomDigit3 = (Math.random() * Math.random()) * 9;
randomDigit4 = (Math.random() * Math.random()) * 9;
randomDigit5 = (Math.random() * Math.random()) * 9;
randomDigit6 = (Math.random() * Math.random()) * 9;

//Round up the Randomised Number to a whole Number
firstDigit = Math.round(randomDigit1);
secondDigit = Math.round(randomDigit2);
thirdDigit = Math.round(randomDigit3);
fourthDigit = Math.round(randomDigit4);
fifthDigit = Math.round(randomDigit5);
sixthDigit = Math.round(randomDigit6);

let randArray = new Array(firstDigit, secondDigit, thirdDigit, fourthDigit, fifthDigit, sixthDigit);

console.log(randArray);

let generateButton =  addEventListener("click",function generateButton(){
    document.getElementById("box1").innerHTML = randArray[0];
    document.getElementById("box2").innerHTML = randArray[1];
    document.getElementById("box3").innerHTML = randArray[2];
    document.getElementById("box4").innerHTML = randArray[3];
    document.getElementById("box5").innerHTML = randArray[4];
    document.getElementById("box6").innerHTML = randArray[5];
    generateButton();}); 
                   

document.getElementById("generate").innerHTML = generateButton;*/