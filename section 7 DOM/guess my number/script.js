"use strict";

//query selector selects the element class message then read its content
// console.log(document.querySelector(".message").textContent);

//DOM = Document Object Model
//DOM is not part of JS

//Changes the text to correct number
// document.querySelector(".message").textContent = "Correct Number!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// //get value from input field
// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

//Will use event listener for the check button to get value from input field
//first argument listens for a click the second is the handler function to get value
//input from UI is usually a string so we will convert the string into a number
//math.random goes from 0-1 so * 20 brings it to 20
//math.trunc makes everything a whole a number but wont go past 19.999
//We will add a 1 to make it go to twenty
//Store the score counter into the code instead of just the DOM
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //if there is no number then return no number
  if (!guess) {
    //No input
    // document.querySelector(".message").textContent = "No Number!";
    displayMessage("No Number!");

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage("Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too High!" : "Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You Lost!");
      document.querySelector(".score").textContent = 0;

      //Guess os too high
    }
  } // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too High!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You Lost!";
  //     document.querySelector(".score").textContent = 0;

  //     //Guess is too low
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too Low!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You Lost!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = " Start guessing ... ";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
