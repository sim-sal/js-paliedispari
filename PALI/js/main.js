// Chiedo all'utente di inserire una parola
var userWord = prompt("Inserisci una parola e vediamo se è palindroma");
console.log(userWord);

// richiamo la funzione che permette di trasformare la stringa inserita dall'utente in un array e lo inverte
function revString(str) {
  return str.split("").reverse().join("");
}

// utilizzo una nuova variabile per utilizzare il risultato della funzione
var userWordReverse = revString(userWord);
console.log(userWordReverse);


// attraverso una condizione confronto le due stringhe e verifico se sono uguali per verificare se effettivamente la parola inserita è palindroma
if(userWord == userWordReverse){
    alert("La parola che hai inserito è palindroma!")
}else{
    alert("Mi dispiace! La parola che hai inserito non è palindroma")
}