
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

//getHumanChoice();

function playRound(computer,human) {
    human = human.toLowerCase();
    console.log(`This it's the human choice ${human}`);

    
}
//playRound(computerChoice,humanChoice);


//Cases where the computer wins
if (computerChoice == "rock" && humanChoice == "scissors") {  

    console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
    
}else if (computerChoice == "paper" && humanChoice == "rock") {

    console.log(`You lose, ${computerChoice} beats ${humanChoice}`);

}else if (computerChoice == "scissors" && humanChoice == "paper") {

    console.log(`You lose, ${computerChoice} beats ${humanChoice}`);

    //Cases where the human wins

}else if (computerChoice == "scissors" && humanChoice == "rock") {
    console.log(`You WIN, ${humanChoice} beats ${computerChoice}`);

}else if (computerChoice == "rock" && humanChoice == "paper") {
    console.log(`You WIN, ${humanChoice} beats ${computerChoice}`);
}
else if (computerChoice == "paper" && humanChoice == "scissors") {
    console.log(`You WIN, ${humanChoice} beats ${computerChoice}`);
}else
{
    //Draw Case
    console.log(`It's a DRAW!, ${humanChoice} it's never going to beat ${computerChoice}`);
}


