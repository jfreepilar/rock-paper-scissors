    //rock paper scissors
    //global variables
    let player = 0;
    let computer = 0;
    let computerSelection;
    let playerSelection;
    let roundResult = playRound(playerSelection, computerSelection);
    const buttons = document.querySelectorAll('.btn');

    //list of functions
    //generate random input
    function computerChoice() { 
        const hand = ["rock", "paper", "scissors"];
        const randomArr = Math.floor(Math.random()*hand.length);
        result = hand[randomArr];
        return result; 
        }

        
    //compare the input from the user and computer, single round
    function playRound(playerSelection, computerSelection) {
        let result = '';
        if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
        ) {
            return "player";
        } else if (
            (playerSelection === "scissors" && computerSelection === "rock") ||
            (playerSelection === "rock" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "scissors")
        ) {
            return "computer";
        }
        return result;
    }
    //function t0 add 1 point to the winenr
    function addScore(roundResult) {
    if (roundResult === 'player') {
            player++;
        } else if (roundResult === 'computer') {
            computer++;
        }
    }

    //function to add event listener to each button
    function addClickListener() {
        buttons.forEach((button) => {
            button.addEventListener('click', clickHandler);
        });
    }

    //function to remove event listener from each button
    function removeClickListener() {
        buttons.forEach((button) => {
            button.removeEventListener('click', clickHandler);
        });
    }

    //function to display the winner and to remove the event listener when someone wins
    function displayWinner() {
        if (player === 3) {
            winner.innerText = 'Player wins! 😃';
            removeClickListener(); //remove event listener if the user wins
        } else if (computer === 3) {
            winner.innerText = 'Computer wins! 😝';
            removeClickListener(); //remove event listener if the computer wins
        }
    }
        
    //define the event listener function
    const clickHandler = (event) => {
        playerSelection = event.target.value; console.log('Player: ' + playerSelection)
        computerSelection = computerChoice(); console.log('Computer: ' + computerSelection)
        let roundResult = playRound(playerSelection, computerSelection); console.log('Result: ' + roundResult)
        addScore(roundResult);
        displayWinner();
        playerScore.innerText = 'Player: ' + player;
        computerScore.innerText = 'Computer: ' + computer;
    }

    addClickListener(); //invoke the function

    //element for reset button
    let resetBtn = document.createElement('button');
    resetBtn.textContent = 'Reset'; // Set the button text

    resetBtn.addEventListener('click', () => {
            document.location.reload();
    });

    //element for score
    let body = document.querySelector('body');
    let scores = document.createElement('div');
    scores.classList.add('scores');
    scores.style.display = 'flex';
    scores.style.gap = '30px'
    scores.style.marginTop = '30px';
    body.appendChild(scores);

    //element for user's score
    let playerScore = document.createElement('div');
    playerScore.classList.add('playerScore');
    playerScore.style.height = '30px';
    playerScore.style.width = '80px';
    playerScore.style.boxSizing = 'border-box';
    playerScore.style.padding = '3px';
    playerScore.textContent = 'Player: ' + player; 
    playerScore.style.border = '1px solid black';
    playerScore.style.marginTop = '-30px';
    scores.appendChild(playerScore);

    //element for computer's score
    let computerScore = document.createElement('div');
    computerScore.classList.add('computerScore');
    computerScore.style.height = '30px';
    computerScore.style.width = '110px';
    computerScore.style.boxSizing = 'border-box';
    computerScore.style.padding = '3px';
    computerScore.textContent = 'Computer: ' + computer; 
    computerScore.style.border = '1px solid black';
    computerScore.style.marginTop = '-30px';
    scores.appendChild(computerScore);

    //element for winner
    let winner = document.querySelector('.winner');
    winner.style.marginTop = '10px';
    winner.style.border = 'solid 1px white'
    winner.style.height = '30px'
    winner.style.fontSize = '20px'

    //style for reset buttons
    resetBtn.classList.add('.reset-btn');
    resetBtn.style.height = '30px';
    resetBtn.style.width = '110px';
    resetBtn.style.boxSizing = 'border-box';
    resetBtn.style.padding = '3px';
    resetBtn.style.marginTop = '-30px';
    resetBtn.textContent = 'Reset'; 
    scores.appendChild(resetBtn);

        