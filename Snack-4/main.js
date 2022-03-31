//Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari.

//Arrey numeri interi
let numeriInteri = [7, 17, 33, 28, 31, 69, 64];
let numeri_singoli;
let somma = 0;

//posizione dispari significa elementi dentro l'arrey (0,2,4...n)
for (let contatore = 1; contatore <= numeriInteri.length; contatore++) {
    numeri_singoli = (numeriInteri[contatore])
        //come pesco i numeri pari?
    if (numeri_singoli % 2 == 1) {
        somma += numeri_singoli
    }
}
console.log(somma);