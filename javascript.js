/* 
 Player      Comp
 --------------------
 Rock     <  Paper
 Rock     >  Scissors
 Paper    >  Rock
 Paper    <  Scissors
 Scissors <  Rock 
 Scissors >  Paper
*/

let playerWin = 0;
let compWin = 0;

//player buttons
const playerRock = document.querySelector(".player.rock");
const playerScissors = document.querySelector(".player.scissors");
const playerPaper = document.querySelector(".player.paper");
//computer buttons
const computerRock = document.querySelector(".comp.rock");
const computerScissors = document.querySelector(".comp.scissors");
const computerPaper = document.querySelector(".comp.paper");
//text selectors
const win = document.querySelector(".text-winner");
const displayRound = document.querySelector(".text");
const topDiv = document.querySelector(".content-wrapper");
const resetButton = document.createElement("button");
resetButton.classList.add("reset-button");
resetButton.textContent = "Play again!";

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

function playRound(playersSelection, computerSelection) {
  computerSelection = getComputerChoice();

  if (playersSelection == computerSelection) {
    return "It's a draw ! ";
  } else if (playersSelection == "rock" && computerSelection == "paper") {
    compWin++;

    return "You Lose! paper beats rock";
  } else if (playersSelection == "rock" && computerSelection == "scissors") {
    playerWin++;

    return "You Win! rock beats scissors";
  } else if (playersSelection == "paper" && computerSelection == "rock") {
    playerWin++;

    return "You Win! paper beats rock";
  } else if (playersSelection == "paper" && computerSelection == "scissors") {
    compWin++;

    return "You Lose! scissors beats paper";
  } else if (playersSelection == "scissors" && computerSelection == "rock") {
    compWin++;

    return "You Lose! rock beats scissors";
  } else if (playersSelection == "scissors" && computerSelection == "paper") {
    playerWin++;

    return "You Win! scissors beats paper";
  }
}

let scoreKeeping = (player, comp) => {
  player = playerWin;
  comp = compWin;
  if (player === 5 || comp === 5) {
    if (player === 5) {
      win.textContent = "Congratulation you won!";
      playerWin = 0;
      compWin = 0;
    } else {
      win.textContent = `Sorry you lost ${player} to ${comp} !`;
      playerWin = 0;
      compWin = 0;
    }
  } else win.textContent = `Score is ${player} to ${comp}`;
};

function removePlayerColor() {
  playerRock.classList.remove("clicking");
  playerPaper.classList.remove("clicking");
  playerScissors.classList.remove("clicking");
}

function removeComputerColor() {
  computerRock.classList.remove("clicking");
  computerPaper.classList.remove("clicking");
  computerScissors.classList.remove("clicking");
}

let refreshPage = () => window.location.reload();

playerRock.addEventListener("click", playRound);
playerPaper.addEventListener("click", playRound);
playerScissors.addEventListener("click", playRound);
