// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Recupero l'email chiesta all'utente
// Email dell'utente
let userEmail;
// Lista delle email di chi può accedere

// Quando clicco sul bottone "Invia", prendo l'email inserita nell'input e la salvo nella variabile userEmail
const submitButton = document.getElementById("submit-btn");
submitButton.addEventListener ("click", function () {
    const userEmailInput = document.getElementById("user-mail");
    console.log(userEmailInput);
    userEmail = userEmailInput.value;
    console.log(userEmail);
})
