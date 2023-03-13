// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Genero un numero random da 1 a 6 per il giocatore
const playerNumber = Math.floor(Math.random() *6) + 1;
console.log("Player number: ", playerNumber);
// Genero un numero random da 1 a 6 per il computer
const computerNumber = Math.floor(Math.random() *6) + 1;
console.log("Computer number: ", computerNumber);
// Vince chi ha il punteggio più alto
// SE il giocatore ha il punteggio più alto
//  vince il giocatore
// ALTRIMENTI SE il computer ha il punteggio più alto
//  vince il computer
if (playerNumber > computerNumber) {
    console.log("Giocatore vince!");
} else if (computerNumber > playerNumber) {
    console.log("Computer vince!");
} else {
    console.log("Pareggio!");
}