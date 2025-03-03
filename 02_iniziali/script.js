/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

// function iniziali(){
//     const newList = [];
//     for(let i = 0 ; i < names.length; i++){
//         const list = names[i];
//         newList.push(list[0])
//     }
//     return newList;
// }

passaggi:
// - creo una funzione che prende in input dei nomi
// - creo un array vuoto chiamato newList
// - ciclo i nomi e i nomi ciclati la salvo in una variabile chiamata list
// - di quella list prendo tutte le lettere con indice 0 equivalente la prima lettera
//   e la pusho nella nuova lista
// - faccio il return della nuova lista
iniziali = nomi => {
    const newList = [];
    for(let i = 0 ; i < nomi.length; i++){
        const list = nomi[i];
        newList.push(list[0])
    }
    return newList;
}


// Invoca la funzione qui e stampa il risultato in console

iniziali(names);
console.log(iniziali(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]