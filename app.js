/*Caching the DOM */
let userScore = 0;
let compScore = 0;

//DOM Variables
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
//end

const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") {
    return "Rock";
  } else if (letter === "p") {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function win(userChoice, compChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();

  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats
    ${convertToWord(compChoice)}${smallCompWord}. You win! 🔥 `;
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(
    () => document.getElementById(userChoice).classList.remove("green-glow"),
    200
  );
}
function lose(userChoice, compChoice) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();

  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to
	${convertToWord(compChoice)}${smallCompWord}. You lost...💩`;
  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(
    () => document.getElementById(userChoice).classList.remove("red-glow"),
    200
  );
}
function draw(userChoice, compChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();

  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals
    ${convertToWord(compChoice)}${smallCompWord}. It's a draw.`;
  document.getElementById(userChoice).classList.add("grey-glow");
  setTimeout(() => {
    document.getElementById(userChoice).classList.remove("grey-glow");
  }, 200);
}

function game(userChoice) {
  const compChoice = getCompChoice();
  const output = userChoice + compChoice;
  if (output === "rs" || output === "pr" || output === "sp") {
    console.log("User Wins!");
    win(userChoice, compChoice);
  } else if (output === "rp" || output === "ps" || output === "sr") {
    console.log("User Loses!");
    lose(userChoice, compChoice);
  } else {
    console.log("It's a draw");
    draw(userChoice, compChoice);
  }
}

function main() {
  rock_div.addEventListener("click", () => game("r"));
  paper_div.addEventListener("click", () => game("p"));
  scissors_div.addEventListener("click", () => game("s"));
}
main();
