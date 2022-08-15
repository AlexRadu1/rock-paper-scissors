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
let myChoice = "";
let compChoice = "";
const displayRound = document.querySelector(".text");
const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
const paper = document.querySelector(".paper");
const win = document.querySelector(".text-winner");

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let choice = choices[Math.floor(Math.random() * choices.length)];
  console.log(choice);
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

function game() {
  console.log(playRound(myChoice, compChoice));
  if (compWin == 3 || playerWin == 3) {
    if (compWin == 3) {
      console.log(`You lose 3 to ${playerWin}`);
    } else {
      win.textContent = "Sorry you lost !";
      playerWin = 0;
      compWin = 0;
    }
  } else win.textContent = `Score is ${player} to ${comp}`;
}

rock.addEventListener("click", () => {
  myChoice = "rock";
  displayRound.textContent = playRound(myChoice, getComputerChoice());
  scoreKeeping(playerWin, compWin);
});
paper.addEventListener("click", () => {
  myChoice = "paper";
  displayRound.textContent = playRound(myChoice, getComputerChoice());
  scoreKeeping(playerWin, compWin);
});

scissors.addEventListener("click", () => {
  myChoice = "scissors";
  displayRound.textContent = playRound(myChoice, getComputerChoice());
  scoreKeeping(playerWin, compWin);
});
