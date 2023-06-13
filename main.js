let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

 // Generate the target value
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

  // Determine if the human or computer wins:
const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
  const humanDiff = Math.abs(humanGuess - secretTarget);
  const computerDiff = Math.abs(computerGuess - secretTarget);
  
  if (humanDiff === computerDiff || humanDiff < computerDiff) {
    return true;
  } else {
    return false;
  }
}

 // Update the correct score:
 const updateScore = (winner) => {
    if (winner === 'human') {
      humanScore++;
    } else if (winner === 'computer') {
      computerScore++;
    }
  }
  
   // Update the correct Round:
  const advanceRound = () => {
    currentRoundNumber++;
  }