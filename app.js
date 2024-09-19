// Select DOM elements
const winningScoreInput = document.querySelector("#winningScore");
const playerOneScoreDisplay = document.querySelector("#playerOneScore");
const playerTwoScoreDisplay = document.querySelector("#playerTwoScore");
const playerOneButton = document.querySelector("#playerOneButton");
const playerTwoButton = document.querySelector("#playerTwoButton");
const resetButton = document.querySelector("#resetButton");

// Initialize game state variables
let playerOneScore = 0;
let playerTwoScore = 0;
let winningScore = 7; // Default playing to score
let isGameOver = false;

// Set default winning score in input field
winningScoreInput.value = winningScore;

// Function to check if the game is over
function checkGameOver() {
  const totalScore = playerOneScore + playerTwoScore;
  if (totalScore >= winningScore) {
    isGameOver = true;
    playerOneButton.disabled = true;
    playerTwoButton.disabled = true;

    // Determine winner
    if (playerOneScore > playerTwoScore) {
      playerOneScoreDisplay.style.color = "green";
      playerTwoScoreDisplay.style.color = "red";
    } else if (playerTwoScore > playerOneScore) {
      playerOneScoreDisplay.style.color = "red";
      playerTwoScoreDisplay.style.color = "green";
    } else {
      // It's a tie
      playerOneScoreDisplay.style.color = "orange";
      playerTwoScoreDisplay.style.color = "orange";
    }
  }
}

// Event listeners for player buttons
playerOneButton.addEventListener("click", () => {
  if (!isGameOver) {
    playerOneScore++;
    playerOneScoreDisplay.textContent = playerOneScore;
    checkGameOver();
  }
});

playerTwoButton.addEventListener("click", () => {
  if (!isGameOver) {
    playerTwoScore++;
    playerTwoScoreDisplay.textContent = playerTwoScore;
    checkGameOver();
  }
});

// Event listener for winning score input change
winningScoreInput.addEventListener("change", function () {
  const newWinningScore = parseInt(this.value);
  if (newWinningScore > 0) {
    winningScore = newWinningScore;
    resetGame();
  } else {
    alert("Please enter a positive number for the winning score.");
    this.value = winningScore;
  }
});

// Event listener for reset button
resetButton.addEventListener("click", resetGame);

// Function to reset the game to its initial state
function resetGame() {
  playerOneScore = 0;
  playerTwoScore = 0;
  isGameOver = false;
  playerOneScoreDisplay.textContent = 0;
  playerTwoScoreDisplay.textContent = 0;
  playerOneScoreDisplay.style.color = "black";
  playerTwoScoreDisplay.style.color = "black";
  playerOneButton.disabled = false;
  playerTwoButton.disabled = false;
}
