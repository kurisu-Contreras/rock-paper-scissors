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

console.log("Here we go again");
console.log(getComputerChoice());

function getHumanChoice() {
  humanChoice = prompt(
    "Hey, Welcome to the amazing game of Rock, Paper and the so powerful Scissors\nWrite your choice here! "
  );
  return humanChoice;
}

//getHumanChoice();

function playRound(computer, human) {
  human = human.toLowerCase();
  console.log(`This it's the human choice ${human}`);
  //Cases where the computer wins
  if (computer == "rock" && human == "scissors") {
    console.log(`You lose, ${computer} beats ${human}`);
  } else if (computer == "paper" && human == "rock") {
    console.log(`You lose, ${computer} beats ${human}`);
  } else if (computer == "scissors" && human == "paper") {
    console.log(`You lose, ${computer} beats ${human}`);

    //Cases where the human wins
  } else if (computer == "scissors" && human == "rock") {
    console.log(`You WIN, ${human} beats ${computer}`);
  } else if (computer== "rock" && human == "paper") {
    console.log(`You WIN, ${human} beats ${computer}`);
  } else if (computer == "paper" && human == "scissors") {
    console.log(`You WIN, ${human} beats ${computer}`);
  } else {
    //Draw Case
    console.log(
      `It's a DRAW!, ${human} it's never going to beat ${computer}`
    );
  }
}
//playRound(computerChoice,humanChoice);
