
 //   YOU CAN DO IT MY BOY!!! 

let computerChoice = "nothing";
let humanChoice = "";
let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
     randomValue = Math.floor(Math.random()*3);
    switch (randomValue) {
        case 0:
            computerChoice = "rock";
        break;
        case 1:
            computerChoice = "paper"
        break;
        case 2: 
            computerChoice = "scissors"
        break;
    }

    return computerChoice;
}

console.log("Here we go again");
console.log(getComputerChoice());


function getHumanChoice() {
    humanChoice = prompt("Hey, Welcome to the amazing game of Rock, Paper and the so powerful Scissors\nWrite your choice here! ");
    return humanChoice;
}

getHumanChoice();

function playRound(computer,human) {
    human = human.toLowerCase();
    console.log(`This it's the human choice ${human}`);
    
}
playRound(computerChoice,humanChoice);

