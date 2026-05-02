function getComputerChoice(){
    const availableChoices = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * availableChoices.length);
    return availableChoices[choice];
}

function getHumanChoice() {
    let choice = prompt("Enter your choice: ");
    return choice;
}

human_choice = getHumanChoice();
console.log(human_choice);