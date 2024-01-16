//rock paper scissors

 //generate random input
 function computerChoice() { 
    const hand = ["rock", "paper", "scissors"];
    const randomArr = Math.floor(Math.random()*hand.length);
    result = hand[randomArr];
    return result;
    }

//prompt user to input rock paper scissors
function playerChoice() {
    let string = prompt("Please choose between rock,paper, and scissors: ");
    let player = string.toLocaleLowerCase();
    return player;
}

let userSelection = playerChoice();
let computerSelection = computerChoice();

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

let roundResult = playRound(userSelection, computerSelection);

//record the score 
function scoreTab() {
    let user = 0,
    computer = 0;
    let roundResult = playRound(userSelection, computerSelection);
        if  ( roundResult == "user") {
            user++;
            }   else if (roundResult == "computer") {
                computer++;
                }
            } 
console.log(playRound(userSelection, computerSelection));
scoreTab();
console.log(scoreTab());

//reiterate the game in a best-of-5 series
function game() {
    let user = 0,
    computer = 0;

    do {
        let userSelection = playerChoice();
        let computerSelection = computerChoice();
        let roundResult = playRound(userSelection, computerSelection);

        if (roundResult === "user") {
        user++;
        } else if (roundResult === "computer") {
        computer++;
        }

        console.log("User Score:", user);
        console.log("Computer Score:", computer);
    } while (user < 3 && computer < 3);

    console.log("Final Scores:");
    console.log("User:", user);
    console.log("Computer:", computer);
}

// Call the game function to start the game
game();

