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

let user = 0, 
    computer = 0;

const buttons = document.querySelectorAll('.btn');
buttons.forEach( function(button) {
    //function 1 RETURN the value of the clicked button
    button.addEventListener('click', () => {
        let userSelection = button.value;
        console.log(userSelection);
    
    //function 2 COMPARE the user's and computer's selection
    let roundResult = playRound(userSelection, computerSelection);
    console.log(playRound(userSelection, computerSelection));

    if (roundResult === 'user') {
        user ++;
    } else if (roundResult === 'computer') {
        computer++;
    }

    console.log('User score ', user);
    console.log('Computer score ', computer);

    if (user == 3 ) {
        setTimeout("alert('You win')", 1000);
    } else if (computer == 3) {
        setTimeout("alert('Computer win!')", 5);
    }

    document.querySelector('.userScore').innerHTML = 'User: ' + user;
    document.querySelector('.computerScore').innerHTML = 'Computer: ' + computer;
    })  
});




//div for score
let body = document.querySelector('body');
let scores = document.createElement('div');
scores.classList.add('scores');
scores.style.display = 'flex';
scores.style.gap = '30px'
scores.style.marginTop = '30px';
body.appendChild(scores);

//div for user's score
let userScore = document.createElement('div');
userScore.classList.add('userScore');
userScore.style.height = '30px';
userScore.style.width = '80px';
userScore.style.boxSizing = 'border-box';
userScore.style.padding = '3px';
userScore.textContent = 'User: ' + user; 
userScore.style.border = '2px solid black';
scores.appendChild(userScore);

//div for computer's score
let computerScore = document.createElement('div');
computerScore.classList.add('computerScore');
computerScore.style.height = '30px';
computerScore.style.width = '110px';
computerScore.style.boxSizing = 'border-box';
computerScore.style.padding = '3px';
computerScore.textContent = 'Computer: ' + computer; 
computerScore.style.border = '2px solid black';
scores.appendChild(computerScore);











