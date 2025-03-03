/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

// passaggi:
// - creo una funzione con arrowfunction che prende in input due parametri
// - all'interno creo due variabili locali un di cui un array di vocali e un array vuoto dove inserirò le vocali della parola
// - itero la parola e la parola ciclata la inserirò in una variabile d'appoggio
// - creo una codizione dove se dentro la nuova parola include una delle vocali che ho dentro l'array
//   la vocale verrà pushata all'interno della nuova lista che ho creata vuota
const vocaliList = parola =>{
    const vocali = ['a', 'e', 'i', 'o', 'u']
    const newList = [];
    for(let i = 0 ; i < parola.length; i ++){
        const newParola = parola[i];
        if(vocali.includes(newParola))
        newList.push(newParola);
    }
    return newList
}

// Invoca la funzione qui e stampa il risultato in console
vocaliList(word);
console.log(vocaliList(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)