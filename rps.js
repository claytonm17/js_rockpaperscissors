// Rock Paper Scissors
    
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
      
    // User chooses rock
    const rock = document.querySelector('#rock');
    rock.addEventListener('click', () => {
    const user = 'rock';
    // Run the game
    game(user,computer);
    });

    // User chooses paper
    const paper = document.querySelector('#paper');
    paper.addEventListener('click', () => {
    const user = 'paper';
    // Run the game
    game(user,computer);
    });

    // User chooses scissors
    const scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', () => {
    const user = 'scissors';
    // Run the game
    game(user,computer);
    });


  
    // Running the match
    computer = getComputerChoice();
    function game(userChoice, computerChoice) {

        console.log(userChoice, computerChoice)

    // Condition if game is a tie
    if (userChoice == computerChoice) {
        console.log("It's a tie!")
    }
    // Conditions if user chooses rock
    if (userChoice === "rock") {
        if (computerChoice === "paper") {
        console.log("Computer chose paper. You lose!");
        } else if (computerChoice === "scissors") {
        console.log("Computer chose scissors. You win!");
        }
    // Conditions if user chooses paper
        } else if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            console.log("Computer chose scissors. You lose!");
        } else if (computerChoice === "rock") {
            console.log("Computer chose rock. You win!");
        }
    // Conditions if user chooses scissors
        } else if (userChoice === "scisssors") {
        if (computerChoice === "rock") {
            console.log("Computer chose rock. You lose!");
        } else if (computerChoice === "paper") {
            console.log("Computer chose paper. You win!")
        }
        }
    }
    
    