//9. Dado um array de números, conte quantos são negativos.
let numbers = [-5, 45, -50, 33, -22]
let negativos = 0

for(let i in numbers){
    if (numbers[i] < negativos){
         negativos++
    }
}
       console.log("O total de números negativos são: ", negativos)
