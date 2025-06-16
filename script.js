//   YOU CAN DO IT MY BOY!!!

let computerChoice = "nothing";
let humanChoice = "";
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  randomValue = Math.floor(Math.random() * 3);
  switch (randomValue) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissors";
      break;
  }

  return computerChoice;
}




function getHumanChoice() {
  humanChoice = prompt(
    "Hey, Welcome to the amazing game of Rock, Paper and the so powerful Scissors\nWrite your choice here! "
  );
  return humanChoice;
}



function playRound(computer, human) {
  human = human.toLowerCase();
 
  //Cases where the computer wins
  if (computer == "rock" && human == "scissors") {
    console.log(`You lose, ${computer} beats ${human}`);
    computerScore += 1;
  } else if (computer == "paper" && human == "rock") {
    console.log(`You lose, ${computer} beats ${human}`);
    computerScore += 1;
  } else if (computer == "scissors" && human == "paper") {
    console.log(`You lose, ${computer} beats ${human}`);
    computerScore += 1;

    //Cases where the human wins
  } else if (computer == "scissors" && human == "rock") {
    console.log(`You WIN, ${human} beats ${computer}`);
    humanScore += 1;
  } else if (computer== "rock" && human == "paper") {
    console.log(`You WIN, ${human} beats ${computer}`);
    humanScore += 1;
  } else if (computer == "paper" && human == "scissors") {
    console.log(`You WIN, ${human} beats ${computer}`);
    humanScore += 1;
  } else {
    //Draw Case
    console.log(
      `It's a DRAW!, ${human} it's never going to beat ${computer}`
    );
  }
}


for (let index = 1; index < 6; index++) {
    console.log(`Round ${index}
    ----------------------------`)
    console.log("Computer Choice: "+ getComputerChoice());
    getHumanChoice();
    playRound(computerChoice,humanChoice);
    
}
console.log("Human Score:"+humanScore);
console.log("Computer Score:"+computerScore);
