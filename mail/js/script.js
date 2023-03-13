// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Recupero l'email chiesta all'utente
// Email dell'utente
let userEmail;
// Lista delle email di chi può accedere
const allowedEmails = ["rossimario@gmail.com", "lucianospalletti@live.it", "simmaco@yahoo.com", "sn@outlook.com"];
// Flag
let isFound = false;
// Quando clicco sul bottone "Invia", prendo l'email inserita nell'input e la salvo nella variabile userEmail
const submitButton = document.getElementById("submit-btn");
submitButton.addEventListener ("click", function () {
    const userEmailInput = document.getElementById("user-mail");
    console.log(userEmailInput);
    userEmail = userEmailInput.value;
    console.log(userEmail);

    // Controllo che la mail inserita sia nella lista di chi può accedere
    // SE l'input non è vuoto
    //  confronto
    // ALTRIMENTI
    //   bisogna inserire una mail nell'input
    if (userEmail !== "") {
        for (let i = 0; i < allowedEmails.length; i++) {
            console.log(allowedEmails[i]);
            if (allowedEmails[i] === userEmail) {
                isFound = true;
            }
            console.log(isFound);
        }
    } else {
        alert("Inserire una mail!");
    }

    // Stampo un messaggio sull'esito del controllo
    // SE isFound = true 
    // l'email è autorizzata
    // ALTRIMENTI
    // l'email non è autorizzata
})