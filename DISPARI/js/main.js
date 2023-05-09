// Chiedo all'utente di scegliere tra pari e dispari
const pariDispari = prompt("Scegli tra pari o dispari");
console.log(pariDispari);

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

    const risultato = num1 + num2;

    // attraverso una condizione verifico se il risultato è pari o dispari
    var pari = "pari";
    var dispari = "dispari";

    if(risultato % 2 === 0){
        
        risultato = pari;
        console.log(risultato);

        
    }else{
        
        risultato = dispari;
        console.log(risultato);
    }

    // if (pariDispari == risultato) {
    //     alert("Hai perso!");
    // }else if (pariDispari != risultato) {
    //     alert("Hai perso!")
    // }
}

// creo una nuova costante per ottenere il risultato della somma dei due numeri
const somma = sommaNumeri(userNumber , computerNumber);
console.log(somma);
