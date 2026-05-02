function getComputerChoice(){
    const availableChoices = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * availableChoices.length);
    return availableChoices[choice].toUpperCase();
}

function getHumanChoice() {
    let choice = prompt("Enter your choice: ");
    return choice;
}

let humanScore = 0; 
let computerScore = 0;

function playRound() {
    let humanChoice = String(getHumanChoice()).toUpperCase();
    let computerChoice = getComputerChoice();
    if (humanChoice === "ROCK" && computerChoice === "SCISSORS" || humanChoice === "PAPER" && computerChoice === "ROCK" || humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}`);
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
}
playRound();