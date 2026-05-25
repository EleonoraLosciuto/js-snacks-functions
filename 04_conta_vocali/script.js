/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
const vowelNum = (string) => {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i].toLowerCase() === "a" || string[i].toLowerCase() === "e" || string[i].toLowerCase() === "i" || string[i].toLowerCase() === "o" || string[i].toLowerCase() === "u")
        count += 1;
    };
    return count;
};

// Invoca la funzione qui e stampa il risultato in console

console.log(vowelNum(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)