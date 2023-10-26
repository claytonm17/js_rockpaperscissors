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


  
    // Running the match
    function game(userChoice) {

        computerChoice = getComputerChoice();

        console.log(userChoice, computerChoice)

    // Condition if game is a tie
    if (userChoice == computerChoice) {
        const results = document.querySelector('#results');
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = "It's a tie!";
        results.appendChild(content);
    }

    // Conditions if user chooses rock
    if (userChoice === "rock") {

        // DOM Manipulation to create div inside results div
        if (computerChoice === "paper") {
            const results = document.querySelector('#results');
            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = 'Computer chose paper. You lose!';
            results.appendChild(content);


        } else if (computerChoice === "scissors") {
            const results = document.querySelector('#results');
            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = 'Computer chose scissors. You win!';
            results.appendChild(content);
        }
        
    // Conditions if user chooses paper
    } else if (userChoice === "paper") {

        if (computerChoice === "scissors") {
            const results = document.querySelector('#results');
            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = "Computer chose scissors. You lose!";
            results.appendChild(content);


        } else if (computerChoice === "rock") {
            const results = document.querySelector('#results');
            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = "Computer chose rock. You win!";
            results.appendChild(content);
        }

    // Conditions if user chooses scissors
    } else if (userChoice === "scissors") {

        if (computerChoice === "rock") {
            const results = document.querySelector('#results');
            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = "Computer chose rock. You lose!";
            results.appendChild(content);

        } else if (computerChoice === "paper") {
            const results = document.querySelector('#results');
            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = "Computer chose paper. You win!";
            results.appendChild(content);

        }
        }
    }