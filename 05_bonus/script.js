/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
const salutoni = (user) => {
    let d = new Date;
    let hour = d.getHours();
    let saluto;
    if (Math.floor(hour) < 13) {saluto = "buongiono"}
    else if (Math.floor(hour) < 17) {saluto = "buon pomeriggio"}
    else {saluto = "buonasera"};

    return `${saluto } ${user}`;
};

// Invoca la funzione qui e stampa il risultato in console
console.log(salutoni(name));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.