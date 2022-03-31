//Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.

let somma, totSomma;
somma = 0;

for (let i = 0; i < 5; i++) {
    const numeroUser = parseInt(prompt('inserisci numero'))
    somma += numeroUser
}

console.log(somma)



index = 0;
totSomma = 0;

while (index < 5) {
    const numeroUser = parseInt(prompt('inserisci numero'))
    totSomma += numeroUser
    index++
}
console.log(somma)