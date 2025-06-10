const paper = 'papier'
const rock = 'kamień'
const scissors = 'nożyce'

let playerInput;
let randomNumber;
let argButtonName, buttonRock, buttonPaper, buttonScissors;

function setMoveByNumber(number) {
    if (number == 1) {
        return rock
    } else if (number == 2) {
        return paper
    } else if (number == 3) {
        return scissors
    }
}

function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if ((argPlayerMove == paper && argComputerMove == rock) || (argPlayerMove == rock && argComputerMove == scissors) || (argPlayerMove == scissors && argComputerMove == paper)) {
        printMessage('Wygrywasz!');
    } else if (argPlayerMove == argComputerMove) {
        printMessage('Remis :)')
    } else {
        printMessage('Przegrywasz :(');
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

function buttonClicked(argButtonName) {
    clearMessages()
    randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = setMoveByNumber(randomNumber)
    const playerMove = argButtonName;

    displayResult(playerMove, computerMove);
    console.log(argButtonName + ' został kliknięty');
}

buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

buttonRock.addEventListener('click', function () { buttonClicked(rock); });
buttonPaper.addEventListener('click', function () { buttonClicked(paper); });
buttonScissors.addEventListener('click', function () { buttonClicked(scissors); });