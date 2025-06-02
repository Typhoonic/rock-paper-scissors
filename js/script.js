function printMessage(msg) {
    var div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}

var computerMove;
var playerMove;
var randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1)

if (randomNumber == 1) {
    computerMove = 'kamień'
} else if (randomNumber == 2) {
    computerMove = 'papier'
} else if (randomNumber == 3) {
    computerMove = 'nożyce'
}

console.log('Wylosowana liczba to: ' + randomNumber)
printMessage('Zagrałem ' + computerMove + '! Jeśli twój ruch to ' + playerMove + ', to wygrywasz!')