//11. Dado um array de números, crie um novo array apenas com os números ímpares.
let numeros = [2, 5, 54, 6, 7, 9, 34]
// O .filter() passa por cada 'numero'
// A "arrow function" (=>) pergunta: "o resto da divisão por 2 é diferente de 0?"
// Se for true, o 'numero' entra no novo array.
let numerosImpares = numeros.filter(numeros => numeros % 2 !== 0)

console.log(numerosImpares)