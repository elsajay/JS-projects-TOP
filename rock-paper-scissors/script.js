// console.log ("Hello World");
// User with enter Rock, Paper or Scissors
// When entering their choice, the computer will also make a choice 
// A result will be drawn from answers 

let computerSelection;

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

computerSelection = getComputerChoice();

let playerSelection = prompt("Do you choose rock, paper or scissors?")
playerSelection = playerSelection.toLowerCase();  // This converts choice to all lower case.

// This section prints what the player choice is. 

if (playerSelection != null) {
    console.log (`You chose ${playerSelection}.`)
}
// This section tells you what the player + computer choices are. 

if (playerSelection != null && computerSelection != null) { 
    console.log (`The computer chose ${computerSelection}.`)
}
let winnerIs; // variable for the winner 

// Function to determine the winner (uncomplete - additional conditionals to be added for game. Always returns "else" currently. 
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

winnerIs = playRound(playerSelection, computerSelection);

console.log (winnerIs);

// Loop to play game 4 more times, keep score + determine winner 



function game() {
    for (i = 0; i < 5; i++) { 
        console.log (`round ${i+1}`)
        playerSelection = prompt("Do you choose rock, paper or scissors?")
        getComputerChoice(); 
        playRound(playerSelection, computerSelection);
        console.log (winnerIs)

    }
}



// game (); 


// }
// console.log (winnerIs)
// 