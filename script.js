//Declaring variables which will be used to keep track of game
let playerScore = 0
let computerScore = 0
let roundNumber = 1

console.log(`Round ${roundNumber}`)

//Function below randomly selcts 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() {
    let CPU = Math.floor(Math.random() * 3)
    if (CPU === 0) {
        return 'Rock'
    } else if (CPU === 1) {
        return 'Paper'
    } else if (CPU === 2) {
        return 'Scissors'
    }
}

//Function below prompts user for choice of 'Rock', 'Paper', or 'Scissors' and returns results in lower case for case insensitivity
function getPlayerChoice() {
    let playerChoice = prompt(`Round ${roundNumber}\nRock, Paper, or Scissors?`)
    if (typeof playerChoice === 'string') {
        return playerChoice.toLowerCase()
    } else {
        return undefined
    }
}

//Result of 'getPlayerChoice' gets assigned to variable 'playerChoice'
//let playerChoice = getPlayerChoice()
function playRound(playerChoice, computerChoice) {
    if (playerChoice === 'rock' && computerChoice === 'Scissors') {
        alert(`Computer: Scissors \nYou: Rock \nRock beats scissors. You win!`)
        playerScore += 1
    } else if (playerChoice === 'rock' && computerChoice === 'Paper') {
        alert(`Computer: Paper \nYou: Rock \nPaper beats rock. You lose.`)
        computerScore += 1
    } else if (playerChoice === 'rock' && computerChoice === 'Rock') {
        alert(`Computer: Rock \nYou: Rock \nIts a draw.`)
    } else if (playerChoice === 'paper' && computerChoice === 'Rock') {
        alert(`Computer: Rock \nYou: Paper \nPaper beats rock. You Win!`)
        playerScore += 1
    } else if (playerChoice === 'paper' && computerChoice === 'Scissors') {
        alert(`Computer: Scissors \nYou: Paper \nScissors beats paper. You lose.`)
        computerScore += 1 
    } else if (playerChoice === 'paper' && computerChoice === 'Paper') {
        alert(`Computer: Paper \nYou: Paper \nIts a draw.`)
    } else if (playerChoice === 'scissors' && computerChoice === 'Paper') {
        alert(`Computer: Paper \nYou: Scissors \nScissors beats paper. You win!`)
        playerScore += 1
    } else if (playerChoice === 'scissors' && computerChoice === 'Rock') {
        alert(`Computer: Rock \nYou: Scissors \nRock beats scissors. You lose.`)
        computerScore += 1
    } else if (playerChoice === 'scissors' && computerChoice === 'Scissors') {
        alert(`Computer: Scissors \nYou: Scissors \nIts a draw.`)
    } else {
        alert(`Computer: ${computerChoice} \nYou: \nNo contest. You need to make choice.`)
    }
}

//For loop which executes the playRound function 5 times, recording the number of rounds (in variable "roundNumber")
for (let i = 1; i < 6; i++) {
    let computerChoice = getComputerChoice()
    console.log(`Computer: ${computerChoice}`)
    let playerChoice = getPlayerChoice()
    console.log(`You: ${playerChoice}`)
    playRound(playerChoice, computerChoice)
    roundNumber++
    if (roundNumber <= 5) {
    console.log(`Round ${roundNumber}`)
    }
}

//If conditionals alerting the user of the results based on values of variables playerScore and computerScore. Also logs results in console
if (playerScore > computerScore) {
    console.log("You won!")
    alert(`You: ${playerScore}\nComputer: ${computerScore}\nYou won!`)
}

if (playerScore < computerScore) {
    console.log("You lose.")
    alert(`You: ${playerScore}\nComputer: ${computerScore}\nYou lose.`)
}

if (playerScore === computerScore) {
    console.log("It's a draw.")
    alert(`You ${playerScore}\nComputer: ${computerScore}\nIts a draw.`)
}

console.log("You: " + playerScore)
console.log("Computer: " + computerScore)