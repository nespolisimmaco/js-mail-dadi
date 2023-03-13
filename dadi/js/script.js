// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Genero un numero random da 1 a 6 per il giocatore
const playerNumber = Math.floor(Math.random() *6) + 1;
console.log("Player number: ", playerNumber);
document.getElementById("player-result").innerHTML = `Il numero del giocatore è: ${playerNumber}`;
// Genero un numero random da 1 a 6 per il computer
const computerNumber = Math.floor(Math.random() *6) + 1;
console.log("Computer number: ", computerNumber);
document.getElementById("computer-result").innerHTML = `Il numero del computer è: ${computerNumber}`;
// Vince chi ha il punteggio più alto
// SE il giocatore ha il punteggio più alto
//  vince il giocatore
// ALTRIMENTI SE il computer ha il punteggio più alto
//  vince il computer
// ALTRIMENTI
//  pareggio
if (playerNumber > computerNumber) {
    console.log("Giocatore vince!");
    document.getElementById("result").innerHTML = "Giocatore vince!";
} else if (computerNumber > playerNumber) {
    console.log("Computer vince!");
    document.getElementById("result").innerHTML = "Computer vince!";
} else {
    console.log("Pareggio!");
    document.getElementById("result").innerHTML = "Pareggio!";
}