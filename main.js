//rock paper scissors

//algorithm
//1. ACCESS the values of the buttons and convert to array if possible
//2. CREATE a function that will return the value of the selected button then include in an event handler
//3. CALL the play round function everytime a button is clicked

 //generate random input
 function computerChoice() { 
    const hand = ["rock", "paper", "scissors"];
    const randomArr = Math.floor(Math.random()*hand.length);
    result = hand[randomArr];
    return result; 
    }

let computerSelection = computerChoice();
let userSelection;
let roundResult;

//compare the input from the user and computer, single round
function playRound(userSelection, computerSelection) {
    if (
        (userSelection === "rock" && computerSelection === "scissors") ||
        (userSelection === "paper" && computerSelection === "rock") ||
        (userSelection === "scissors" && computerSelection === "paper")
    ) {
        return "user";
    } else if (
        (userSelection === "scissors" && computerSelection === "rock") ||
        (userSelection === "rock" && computerSelection === "paper") ||
        (userSelection === "paper" && computerSelection === "scissors")
    ) {
        return "computer";
    } else {
        return "zero";
    }
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach( function(button) {
    //function 1 RETURN the value of the clicked button
    button.addEventListener('click', () => {
        userSelection = button.value;
        console.log(userSelection);
    
    //function 2 COMPARE the user's and computer's selection
    playRound(userSelection, computerSelection);
        roundResult = playRound(userSelection, computerSelection);
        console.log(roundResult);
    })
});

