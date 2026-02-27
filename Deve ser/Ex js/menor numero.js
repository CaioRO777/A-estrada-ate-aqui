let number = [56, 354, 45645, 242, 23,6]
let menor = number[0]

for(let i in number){
    if(number[i] < menor){
        menor = number[i]
    }
}
console.log("O menor número é: ", menor)