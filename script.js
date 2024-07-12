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
  console.log(randomNumber);
  console.log(result);
  return result;
}

getComputerChoice();