//10. Dado um array de números, encontre e imprima o maior valor.
let numbers = [3453, 2342, 2342, 212, 23423, 564564]
let maior = []

for (let i in numbers){
    if (numbers[i] > maior){
         maior = numbers[i]
    }
}
console.log("O maior número é: ", maior)