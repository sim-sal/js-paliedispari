// Chiedo all'utente di scegliere tra pari e dispari
const userChoise = prompt("Scegli tra pari o dispari");
console.log(userChoise);

// chiedo all'utente di inserire un numero da 1 a 5
var userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(userNumber);

// generiamo un numero random da 1 a 5 per il computer
function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// usiamo una nuova costante per richiamare il risultato della funzione
const computerNumber = getRandomArbitrary(1 , 5);
console.log(computerNumber);

// sommiamo i due numeri 
function sommaNumeri (num1 , num2){

    var risultato = num1 + num2;

    // attraverso una condizione verifico se il risultato è pari o dispari

    if(risultato % 2 === 0){

        risultato = "pari";

    }else{

        risultato = "dispari";

    }

    return risultato;

}

// creo una nuova costante per ottenere il risultato della somma dei due numeri
const somma = sommaNumeri(userNumber , computerNumber);
console.log(somma);

// creo la condizione per verificare se la scelta iniziale dell'utente corrisponde col risuòltato della funzione 
if (userChoise == somma) {
        alert("Hai vinto!");
    }else if (userChoise != somma) {
        alert("Hai perso!")
    }
