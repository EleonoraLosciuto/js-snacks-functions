/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

const nameStartWith = (names, letter) => { //funzione arrow function con due parametri lista nomi e lettera iniziale
    let finalArr = []; // array vuoto che riempiró solo con gli elementi che devo filtrare
    for (let i = 0; i < names.length; i++) { 
        if (names[i][0].toLowerCase() === letter.toLowerCase()) { // condizione if 
            finalArr.push(names[i]) }; // se rispettata la condizione if, aggiungo l'elemento al mio array
        };
    return finalArr;
};


// Invoca la funzione qui e stampa il risultato in console
console.log(nameStartWith(names, "a"));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]