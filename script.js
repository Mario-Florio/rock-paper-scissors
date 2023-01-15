//Function below randomly selcts 'Rock', 'Paper', or 'Scissors'//
function getComputerChoice() {
    let rock = 'Rock'
    let paper = 'Paper'
    let scissors = 'Scissors'
    let CPU = Math.floor(Math.random() * 3)
    if (CPU === 0) {
        return rock
    } else if (CPU === 1) {
        return paper
    } else if (CPU === 2) {
        return scissors
    }
}

//Result of 'getComputerChoice' gets assigned to variable 'computerChoice'//
let computerChoice = getComputerChoice()

console.log(computerChoice)

//Function below prompts user for choice of 'Rock', 'Paper', or 'Scissors' and returns results in lower case for case insensitivity//
function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper, or Scissors?")
    if (typeof playerChoice === 'string') {
        return playerChoice.toLowerCase()
    } else {
        return undefined
    }
}

//Result of 'getPlayerChoice' gets assigned to variable 'playerChoice'//
let playerChoice = getPlayerChoice()

console.log(playerChoice)

//Function below plugs in 'playerChoice' and 'computerChoice' and alerts user of the choices and results//
function playRound(playerChoice, computerChoice) {
    if (playerChoice === 'rock' && computerChoice === 'Scissors') {
        alert('Computer: Scissors \nYou: Rock \nRock beats scissors. You win!')
    } else if (playerChoice === 'rock' && computerChoice === 'Paper') {
        alert('Computer: Paper \nYou: Rock \nPaper beats rock. You lose.')
    } else if (playerChoice === 'rock' && computerChoice === 'Rock') {
        alert('Computer: Rock \nYou: Rock \nIts a draw.')
    } else if (playerChoice === 'paper' && computerChoice === 'Rock') {
        alert('Computer: Rock \nYou: Paper \nPaper beats rock. You Win!')
    } else if (playerChoice === 'paper' && computerChoice === 'Scissors') {
        alert('Computer: Scissors \nYou: Paper \nScissors beats paper. You lose.')
    } else if (playerChoice === 'paper' && computerChoice === 'Paper') {
        alert('Computer: Paper \nYou: Paper \nIts a draw.')
    } else if (playerChoice === 'scissors' && computerChoice === 'Paper') {
        alert('Computer: Paper \nYou: Scissors \nScissors beats paper. You win!')
    } else if (playerChoice === 'scissors' && computerChoice === 'Rock') {
        alert('Computer: Rock \nYou: Scissors \nRock beats scissors. You lose.')
    } else if (playerChoice === 'scissors' && computerChoice === 'Scissors') {
        alert('Computer: Scissors \nYou: Scissors \nIts a draw.')
    } else {
        alert(`Computer: ${computerChoice} \nYou: \nNo contest. You need to make choice.`)
    } 
}

playRound(playerChoice, computerChoice)