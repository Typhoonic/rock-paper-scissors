const paper = 'papier'
const rock = 'kamień'
const scissors = 'nożyce'
let computerMove;
let playerMove, playerInput;
let randomNumber;
let argButtonName, buttonRock, buttonPaper, buttonScissors;

function printMessage(msg) {
    var div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}

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
    computerMove = setMoveByNumber(randomNumber)

    playerMove = argButtonName;

    displayResult(playerMove, computerMove);
    console.log(argButtonName + ' został kliknięty');
}

buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

buttonRock.addEventListener('click', function () { buttonClicked(rock, computerMove); });
buttonPaper.addEventListener('click', function () { buttonClicked(paper, computerMove); });
buttonScissors.addEventListener('click', function () { buttonClicked(scissors, computerMove); });