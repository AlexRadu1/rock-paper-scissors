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

let scoreKeeping = (player, comp) => {
  player = playerWin;
  comp = compWin;
  if (player === 5 || comp === 5) {
    if (player === 5) {
      win.textContent = `Congratulation you won ${player} to ${comp}!`;
      playerWin = 0;
      compWin = 0;
      resetGame();
    } else {
      win.textContent = `Sorry you lost ${player} to ${comp} !`;
      playerWin = 0;
      compWin = 0;
      resetGame();
    }
  } else {
    win.textContent = `Score is ${player} to ${comp}`;
  }
};

function playRound(playersSelection, computerSelection) {
  removePlayerColor();
  removeComputerColor();
  playersSelection = this.dataset.name;
  computerSelection = getComputerChoice();
  if (
    (playersSelection == "scissors" && computerSelection == "paper") ||
    (playersSelection == "paper" && computerSelection == "rock") ||
    (playersSelection == "rock" && computerSelection == "scissors")
  ) {
    playerWin++;
    displayRound.textContent = `You win! ${playersSelection} beats ${computerSelection} !`;
    scoreKeeping();
  } else if (
    (playersSelection == "scissors" && computerSelection == "rock") ||
    (playersSelection == "paper" && computerSelection == "scissors") ||
    (playersSelection == "rock" && computerSelection == "paper")
  ) {
    compWin++;
    displayRound.textContent = `You Lose! ${computerSelection} beats ${playersSelection} !`;
    scoreKeeping();
  } else {
    displayRound.textContent = `It's a draw!You both choose ${playersSelection} !`;
    scoreKeeping();
  }
  computerButtonColor(computerSelection);
  playerButtonColor(playersSelection);
}

let computerButtonColor = (com) => {
  if (com == "rock") {
    computerRock.classList.add("clicking");
  } else if (com == "paper") {
    computerPaper.classList.add("clicking");
  } else {
    computerScissors.classList.add("clicking");
  }
};

let playerButtonColor = (com) => {
  if (com == "rock") {
    playerRock.classList.add("clicking");
  } else if (com == "paper") {
    playerPaper.classList.add("clicking");
  } else {
    playerScissors.classList.add("clicking");
  }
};

let resetGame = () => {
  playerRock.removeEventListener("click", playRound);
  playerPaper.removeEventListener("click", playRound);
  playerScissors.removeEventListener("click", playRound);
  topDiv.appendChild(resetButton);
  const reloadPage = document.querySelector(".reset-button");
  reloadPage.addEventListener("click", refreshPage);
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
