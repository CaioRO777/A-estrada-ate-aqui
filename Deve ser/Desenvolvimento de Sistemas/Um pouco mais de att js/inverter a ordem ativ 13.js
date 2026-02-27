//13. Dado um array de números, inverta a ordem dos elementos manualmente.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let invertido = []

for (let i = numbers.length - 1; i >= 0; i--){
    invertido.push(numbers[i])

}
console.log(numbers)
console.log(invertido)