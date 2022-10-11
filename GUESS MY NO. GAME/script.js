"use strict";

// RANDOM NUMBER BETWEEN 1 AND 20 CHOOSEN
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// NUMBER IS TRANSFERRED TO QUESTION MARK

// assigning input value to the console
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".input").value);
  console.log(guess);
  //  conditon of the game
  if (!guess) {
    document.querySelector(".start").textContent = "🚫 NO NUMBER ";
  } else if (guess === secretNumber) {
    document.querySelector(".start").textContent = "correct Number 🎉🎉";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b350";
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector(".highnum").textContent = highscore;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".start").textContent =
        guess > secretNumber ? "📈 Too high! " : " 📉too low ! ";
      score--;
      document.querySelector(".scorenum").textContent = score;
    } else {
      document.querySelector(".start").textContent = " You lost the Game ";
      document.querySelector(".scorenum").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#ff0000";
    }
  }
});
//  game reset
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".scorenum").textContent = score;
  document.querySelector(".start").textContent = " Start guessing .....";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#000";
  document.querySelector("input").value = null;
  document.querySelector("body").style.textColor = "#000";
});
