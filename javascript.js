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

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

function playRound(playersSelection, computerSelection) {
  let result = "";
  playersSelection = window.prompt("what is it?").toLowerCase();
  computerSelection = getComputerChoice();

  if (playersSelection == computerSelection) {
    return "It's a draw ! ";
  } else if (playersSelection == "rock" && computerSelection == "paper") {
    compWin++;
    return (result = "You Lose! paper beats rock");
  } else if (playersSelection == "rock" && computerSelection == "scissors") {
    playerWin++;
    return (result = "You Win! rock beats scissors");
  } else if (playersSelection == "paper" && computerSelection == "rock") {
    playerWin++;
    return (result = "You Win! paper beats rock");
  } else if (playersSelection == "paper" && computerSelection == "scissors") {
    compWin++;
    return (result = "You Lose! scissors beats paper");
  } else if (playersSelection == "scissors" && computerSelection == "rock") {
    compWin++;
    return (result = "You Lose! rock beats scissors");
  } else if (playersSelection == "scissors" && computerSelection == "paper") {
    playerWin++;
    result = "You Win! scissors beats paper";
    return result;
  }
}

function game() {
  console.log(playRound(myChoice, compChoice));
  if (compWin == 3 || playerWin == 3) {
    if (compWin == 3) {
      console.log(`You lose 3 to ${playerWisn}`);
    } else {
      console.log(`You win 3 to ${compWin}`);
    }
  }
}

for (let i = 0; i < 100; i++) {
  game();
  if (playerWin == 3 || compWin == 3) break;
}
