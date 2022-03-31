//Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

//inserisco numero
const numeroUser = parseInt(prompt('inserisci numero'))

const addNumber = numeroUser + 1;

switch (numeroUser % 2 == 0) {
    case true:
        console.log(`Il tuo numero ${numeroUser} è pari`)
        break;
    default:
        console.log(`Il tuo numero non è pari, aggiungo +1. Quindi il tuo numero sarà ${addNumber}`)
}