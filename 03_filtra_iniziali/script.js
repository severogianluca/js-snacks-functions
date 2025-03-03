/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
// function iniziali(nomi, input){
//     const newList = [];
//     for(let i = 0 ; i < nomi.length; i++){
//         const list = nomi[i];
//         if(list[0].toLowerCase() === input.toLowerCase())
//         newList.push(list)
//     }
//     return newList;
// }

const iniziali = (nomi, input) => {
    const newList = [];
    for(let i = 0 ; i < nomi.length; i++){
        const list = nomi[i];
        if(list[0].toLowerCase() === input.toLowerCase())
        newList.push(list)
    }
    return newList;
}

// Invoca la funzione qui e stampa il risultato in console
const result = iniziali(names, 'a')
console.log(result)


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]