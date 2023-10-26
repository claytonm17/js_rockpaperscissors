// Rock Paper Scissors
    
// User chooses rock
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
const user = 'rock';
// Run the game
playRound(user);
});

// User chooses paper
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
const user = 'paper';
// Run the game
playRound(user);
});

// User chooses scissors
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
const user = 'scissors';
// Run the game
playRound(user);
});

// Computer choice function using random number generator
function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
    //console.log(choice);
    if (choice === 0) {
        return "rock"
    } else if (choice === 1) {
        return "paper"
    } else {  // No other option
        return "scissors"
    }
    }

// Function to update the result message
const results = document.querySelector('#results');
function updateResults(message) {
    // Return new
    results.innerHTML = '';

    // Create and append new message
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = message;
    results.appendChild(content);
}

// Function for the scoreboard to be updated
function updateScoreboard(score) {
    const content = document.createElement('div');
    content.classList.add('score');
    content.textContent = score;
    results.appendChild(content);
}

function continueGame() {
    return userScore < 5 && computerScore < 5;
}

// Initialize empty scores
let userScore = 0;
let computerScore = 0;

// Run the round
function playRound(userChoice) {

    const computerChoice = getComputerChoice();

    //console.log(userChoice, computerChoice)

    // Condition if game is a tie
    if (userChoice == computerChoice) {
        updateResults("It's a tie!");
    }

    // Conditions if user chooses rock
    if (userChoice === "rock") {

        // DOM Manipulation to create div inside results div
        if (computerChoice === "paper") {
            updateResults('Computer chose paper. You lose!');
            computerScore++;

        } else if (computerChoice === "scissors") {
            updateResults('Computer chose scissors. You win!');
            userScore++;
        }
        
    // Conditions if user chooses paper
    } else if (userChoice === "paper") {

        if (computerChoice === "scissors") {
            updateResults("Computer chose scissors. You lose!");
            computerScore++;

        } else if (computerChoice === "rock") {
            updateResults("Computer chose rock. You win!");
            userScore++;
        }

    // Conditions if user chooses scissors
    } else if (userChoice === "scissors") {

        if (computerChoice === "rock") {
            updateResults("Computer chose rock. You lose!");
            computerScore++;

        } else if (computerChoice === "paper") {
            updateResults("Computer chose paper. You win!");
            userScore++;
        }
        }
    
    // Scorecard
    score = `User: ${userScore} - Computer: ${computerScore}`;
    updateScoreboard(score);

    if (userScore === 5 || computerScore === 5) {
        endGame();
    }
}
    
function endGame() {
    if (userScore === 5) {
        updateResults('You win the game!');
        updateScoreboard(score);

    } else if (computerScore === 5) {
        updateResults('The computer won the game!');
        updateScoreboard(score);
    }
}