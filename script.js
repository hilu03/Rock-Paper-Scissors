let humanScore = 0;
let computerScore = 0;
let round = 1;
let winner;


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
  return result;
}

function playGame(humanSelection) {

  function playRound(humanChoice, computerChoice) {
    let result;
    if (humanChoice == 'rock') {
      if (computerChoice == 'scissors') {
        result = 'You <span class="win">win</span>! Rock beats Scissors.';
        humanScore += 1;
      }
      else if (computerChoice == 'paper') {
        result = 'You <span class="lose">lose</span>! Paper beats Rock.';
        computerScore += 1;
      }
      else {
        result = 'Tie!';
      }
    }
    else if (humanChoice == 'paper') {
      if (computerChoice == 'scissors') {
        result = 'You <span class="lose">lose</span>! Scissors beats Paper.';
        computerScore += 1;
      }
      else if (computerChoice == 'rock') {
        result = 'You <span class="win">win</span>! Paper beats Rock.';
        humanScore += 1;
      }
      else {
        result = 'Tie!';
      }
    }
    else if (humanChoice == 'scissors') {
      if (computerChoice == 'rock') {
        result = 'You <span class="lose">lose</span>! Rock beats Scissors.';
        computerScore += 1;
      }
      else if (computerChoice == 'paper') {
        result = 'You <span class="win">win</span>! Scissors beats Paper.';
        humanScore += 1;
      }
      else {
        result = 'Tie!';
      }
    }
    const resultDiv = document.querySelector(".result");
    resultDiv.innerHTML = result;
    const score = document.querySelector(".score-container");
    score.innerHTML = `
      <div class="icon-container">
        <img src="images/human.png" class="icon">
      </div>
      <div class="score">${humanScore} - ${computerScore}</div>
      <div class="icon-container">
        <img src="images/robot.png" class="icon">
      </div>
    `;
  }
  
  if (winner) {
    return;
  }
  else {
    const computerSelection = getComputerChoice();
    const roundDiv = document.querySelector(".round");
    roundDiv.textContent = "ROUND " + round++;
    const choice = document.querySelector(".choice-container");
    choice.innerHTML = `
      <div class="icon-container">
        <img src="images/human.png" class="icon">
      </div>
      <div>
        <img src="images/${humanSelection}.png" class="choice">
      </div>
      vs
      <div>
        <img src="images/${computerSelection}.png" class="choice">
      </div>
      <div class="icon-container">
        <img src="images/robot.png" class="icon">
      </div>
    `;
    playRound(humanSelection, computerSelection);
    if (humanScore == 5) {
      winner = "human";
      const winnerDiv = document.querySelector(".title");
      winnerDiv.innerHTML = `<span class="win">Congratulation!</span> The winner is YOU!`;
    }
    else if (computerScore == 5) {
      winner = "computer";
      const winnerDiv = document.querySelector(".title");
      winnerDiv.textContent = `Oops! Computer beats you!`;
    }
    if (winner) {
      const replay = document.querySelector(".replay-button");
      replay.classList.add("view-replay-button");
    }
  }
}

const buttons = document.querySelectorAll(".human-choice");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const humanSelection = button.id;
    playGame(humanSelection);
  })
});

const replay = document.querySelector(".replay-button");
replay.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  round = 1;
  winner = "";
  replay.classList.remove("view-replay-button");
  document.querySelector(".title").textContent = "Make a choice! Can you beat the Computer?";
  document.querySelector(".round").textContent = "";
  document.querySelector(".choice-container").innerHTML = "";
  document.querySelector(".result").innerHTML = "";
  document.querySelector(".score-container").innerHTML = "";
});