// console.log ("Hello World");
// User with enter Rock, Paper or Scissors
// When entering their choice, the computer will also make a choice 
// A result will be drawn from answers 

// Selection Variables 
let computerSelection;
let playerSelection;
let winnerIs; // variable for the winner 

// Scoring Variables 
let playerScore = 0; 
let computerScore = 0;
let draw = 0;

console.log ("Game of paper scissors Rock. Enter your choice to start game.")

// Function getComputerChoice randomly selects input for Rock Paper Scissors 
function getComputerChoice () {  
    if (Math.floor(Math.random()*3) === 0) { 
        return (computerSelection = "rock");
    } else if (Math.floor(Math.random()*3) === 1) { 
        return (computerSelection = "paper");
    } else {
        return (computerSelection = "scissors");
    } 
};

// Call computerSelection function 
computerSelection = getComputerChoice();

// Function to determine the winner 
function playRound (playerSelection, computerSelection) { 

    if (playerSelection === "rock" && computerSelection === "paper") { 
        return (winnerIs =  "Computer wins")  
    } 
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return (winnerIs = "Player wins")
    } 
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return (winnerIs = "Player wins")
      } 
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return (winnerIs = "Computer wins")
    } 
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return (winnerIs = "Computer wins")
    } 
    else if (playerSelection === "scissors" && computerSelection === "paper") { 
        return (winnerIs = "Player wins")
    } 
    else { 
        return (winnerIs = "Draw. Try again to win!")
    }
}

// Function for 5 x round game 
function game() {
    for (i = 0; i < 5; i++) { 
        console.log (`round ${i+1}`)
        playerSelection = prompt("Do you choose rock, paper or scissors?")
        playerSelection = playerSelection.toLowerCase(); 
        getComputerChoice(); 
        playRound(playerSelection, computerSelection);
        
        if (winnerIs === "Player wins") {
            playerScore++
        } 
        else if (winnerIs === "Computer wins") { 
            computerScore++ 
        }
        else {
            draw++ 
        }
        console.log (winnerIs);
        console.log (`Player score ${playerScore} ----- Computer Score ${computerScore}`);
    }
}

// function to determine winner
function scoreDec () {
    if (playerScore > computerScore) {
        console.log ("You beat the computer at Rock, Paper, Scissors!");
    }

    else if (computerScore > playerScore ) {
        console.log ("You lose! The computer won the game of Rock Paper Scissors")  
    }

    else {
        console.log ("You drew too many times - try again to beat the computer.")
    }
}

// Calling functions 

game (); 
scoreDec ();


// Old code for 1 x game 

// playerSelection = playerSelection.toLowerCase();  // This converts choice to all lower case.

// This section prints what the player choice is. 

// if (playerSelection != null) {
//     console.log (`You chose ${playerSelection}.`)
// }
// This section tells you what the player + computer choices are. 

// if (playerSelection != null && computerSelection != null) { 
//     console.log (`The computer chose ${computerSelection}.`)
// }

