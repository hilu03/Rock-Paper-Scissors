function getComputerChoice() {
  let randomNumber = Math.random();
  let result;
  if (randomNumber < 1/3) {
    result = 'rock';
  }
  else if (randomNumber < 2/3) {
    result = 'paper';
  }
  else {
    result = 'scissors';
  }
  console.log('Computer choice: ' + result);
  return result;
}

function getHumanChoice() {
  let result = prompt("Input your choice (rock, paper, scissors): ");
  console.log('Your choice: ' + result);
  return result.toLowerCase();
}


function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    let result;
    if (humanChoice == 'rock') {
      if (computerChoice == 'scissors') {
        result = 'You win! Rock beats Scissors.';
        humanScore += 1;
      }
      else if (computerChoice == 'paper') {
        result = 'You lose! Paper beats Rock.';
        computerScore += 1;
      }
      else {
        result = 'Tie!';
      }
    }
    else if (humanChoice == 'paper') {
      if (computerChoice == 'scissors') {
        result = 'You lose! Scissors beats Paper.';
        computerScore += 1;
      }
      else if (computerChoice == 'rock') {
        result = 'You win! Paper beats Rock.';
        humanScore += 1;
      }
      else {
        result = 'Tie!';
      }
    }
    else if (humanChoice == 'scissors') {
      if (computerChoice == 'rock') {
        result = 'You lose! Rock beats Scissors.';
        computerScore += 1;
      }
      else if (computerChoice == 'paper') {
        result = 'You win! Scissors beats Paper.';
        humanScore += 1;
      }
      else {
        result = 'Tie!';
      }
    }
    console.log(result);
    console.log(`Human: ${humanScore} - ${computerScore}: Computer`);
  }
  
  for (let i=0; i<5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
}

playGame();