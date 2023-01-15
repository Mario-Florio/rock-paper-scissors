
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

let computerChoice = getComputerChoice()

console.log(computerChoice)

//function playRound(playerSelection, CPU)