// Rock Paper Scissors
    
// User chooses rock
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
const user = 'rock';
// Run the game
game(user);
});

// User chooses paper
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
const user = 'paper';
// Run the game
game(user);
});

// User chooses scissors
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
const user = 'scissors';
// Run the game
game(user);
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
function updateResults(message) {
    const results = document.querySelector('#results');
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = message;
    results.appendChild(content);
}

// Running the match
function game(userChoice) {

    computerChoice = getComputerChoice();

    console.log(userChoice, computerChoice)

    // Condition if game is a tie
    if (userChoice == computerChoice) {
        updateResults("It's a tie!");
    }

    // Conditions if user chooses rock
    if (userChoice === "rock") {

        // DOM Manipulation to create div inside results div
        if (computerChoice === "paper") {
            updateResults('Computer chose paper. You lose!');

        } else if (computerChoice === "scissors") {
            updateResults('Computer chose scissors. You win!');
        }
        
    // Conditions if user chooses paper
    } else if (userChoice === "paper") {

        if (computerChoice === "scissors") {
            updateResults("Computer chose scissors. You lose!");

        } else if (computerChoice === "rock") {
            updateResults("Computer chose rock. You win!");
        }

    // Conditions if user chooses scissors
    } else if (userChoice === "scissors") {

        if (computerChoice === "rock") {
            updateResults("Computer chose rock. You lose!");

        } else if (computerChoice === "paper") {
            updateResults("Computer chose paper. You win!");
        }
        }
    }