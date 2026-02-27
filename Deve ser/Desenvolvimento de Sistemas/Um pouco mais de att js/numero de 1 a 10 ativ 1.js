//1. Imprima os números de 1 a 10 no console.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i in numeros){
    if (i <= numeros.length){
        i++
    }
}
console.log(numeros.join(" , "))