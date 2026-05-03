function getComputerChoice(){
    const availableChoices = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * availableChoices.length);
    return availableChoices[choice].toUpperCase();
}

const btnRock = document.getElementById("btn-rock");
const btnPaper = document.getElementById("btn-paper");
const btnScissors = document.getElementById("btn-scissors");
const result = document.getElementById("result");
const score = document.getElementById("score");
const winner = document.getElementById("winner");

function getHumanChoice(choice) {
    return choice;
}

btnRock.addEventListener("click", () => {
    upper = String(getHumanChoice("rock")).toUpperCase();
    playRound(getHumanChoice(upper), getComputerChoice());
})
btnPaper.addEventListener("click", () => {
    upper = String(getHumanChoice("paper")).toUpperCase();
    playRound(getHumanChoice(upper), getComputerChoice());
})
btnScissors.addEventListener("click", () => {
    upper = String(getHumanChoice("scissors")).toUpperCase();
    playRound(getHumanChoice(upper), getComputerChoice());
})

let humanScore = 0; 
let computerScore = 0;

function playRound(humanChoice , computerChoice) {
    if ((humanChoice === "ROCK" && computerChoice === "SCISSORS" )||
        (humanChoice === "PAPER" && computerChoice === "ROCK" )||
        (humanChoice === "SCISSORS" && computerChoice === "PAPER")) {
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else if (humanChoice === computerChoice) {
        result.textContent = `It's a tie! You both chose ${humanChoice}`;
    } else {
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }
    score.textContent = `Score: You ${humanScore} - Computer ${computerScore}`;

    if (humanScore === 5) {
    winner.textContent = "congratulations! You won the game!";
    }else if (computerScore === 5) {
        winner.textContent = "Sorry! The computer won the game."
    }

}
