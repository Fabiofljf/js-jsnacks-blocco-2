// //Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

let lista_A = [1, 2, 3, 4, 5]
let lista_B = [2, 3, 4, 5, 6, 7, 12]

let array_corto, array_lungo;

//chiedo qual'è l arrey che ha più elementi
if (lista_A.length < lista_B.length) {
    array_corto = lista_A
    array_lungo = lista_B
} else {
    array_corto = lista_B
    array_lungo = lista_A
}

console.log(array_corto);
console.log(array_lungo);

// devo pushare fino a che gli elementi di array_corto sarranno minori di quelli array_lungo
while (array_corto.length < array_lungo.length) {
    array_corto.push(Math.floor(Math.random() + 10))
}
console.log(array_corto)