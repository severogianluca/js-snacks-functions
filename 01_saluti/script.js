/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

// function saluto(){
//     return 'ciao' + ' ' +  `${userName}`;
// }

const saluto = () => 'ciao' + ' ' +  `${userName}`;


// Invoca la funzione qui e stampa il risultato in console
const saluta = saluto();
console.log(saluta);


//Risultato atteso se si passa 'Mario': // ciao Mario
