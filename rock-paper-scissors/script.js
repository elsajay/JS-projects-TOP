console.log ("Hello World");
// User with enter Rock, Paper or Scissors
// When entering their choice, the computer will also make a choice 
// A result will be drawn from answers 

function getComputerChoice () {  
    
    if (Math.floor(Math.random()*3) === 1) { 
        console.log ("Rock");
    } else if (Math.floor(Math.random()*3) === 2) { 
        console.log ("Paper");
    } else  (Math.floor(Math.random()*3) === 3) {
        console.log ("Scissors");}
}; 
