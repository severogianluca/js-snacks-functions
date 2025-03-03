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

passaggi:
// - creo una funzione che prende in come parametri dei nomi e un input
// - creo un array vuoto chiamato newList
// - ciclo i nomi e i nomi ciclati la salvo in una variabile chiamata list
// - creo una condizione dove gli passo l'iniziale di ogni elemento iterato
//   e lo metto a confronto con la lettera messa in input se la condizione è vera il nome sarà inserita nel nuovo array
// - faccio il return della nuova lista
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