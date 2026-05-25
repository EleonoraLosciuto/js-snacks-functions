/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
const initials = (nameList) => {  //arrow function con parametro nameList 
    let arrInitials = []; // array vuoto che riempitó con le iniziali
    for (let i = 0; i < nameList.length; i++) {
    arrInitials.push(nameList[i][0]); //aggiungo con push l'iniziale di ogni elemento nel mio argomento array
    };
    return arrInitials;
};

// Invoca la funzione qui e stampa il risultato in console

console.log(initials(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]