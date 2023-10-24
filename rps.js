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
      // console.log(getComputerChoice())
  
      // Input from the user and cleaning up with a check for the input
      let user = prompt("Type: Rock, Paper, or Scissors: ");
      user = user.toLowerCase();
      if (user !== "rock" && user !== "paper" && user !== "scissors") {
        console.log("Please enter a valid response: Rock, Paper, or Scissors");
      }
  
      // Running the match
      computer = getComputerChoice();
      function game(userChoice, computerChoice) {
  
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
        
        // Run the game within the console
        game(user,computer)