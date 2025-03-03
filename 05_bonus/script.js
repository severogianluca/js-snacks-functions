/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.


// - creazione della funzione per salutare
// - dichiaro due variabili una saluto con stringa vuota che andro a inizializzare 
//   e una variabile ora che andro a chiamare l'oggetto Date per poter prendere la propietà getHours
// - creo una condizione dove in base l'orario attuale dato da getHours mi stampi il saluto in base l'orario
// - faccio il ritorno della variabile saluto e del nome passato come parametro
function salutaNome(nome){
    let ora = new Date().getHours();
    let saluto = '';

    if(ora > 0 && ora <= 12){
        saluto= 'buongiorno';
    }else if( ora >= 13 && ora <= 17 ){
        saluto= 'buon pomeriggio';
    }else{
        saluto= 'buonasera';
    }
    return `${saluto}`+ " " + `${nome}`
}

// Invoca la funzione qui e stampa il risultato in console

const saluta = salutaNome();
console.log(salutaNome('Marco'))

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.