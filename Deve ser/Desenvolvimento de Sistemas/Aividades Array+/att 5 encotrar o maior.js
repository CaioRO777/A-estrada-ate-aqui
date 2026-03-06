/*Encontrar o Maior Número
   Crie um array com 5 números. Use um for para encontrar o maior número.
   Exemplo: [3, 9, 2, 15, 7] → Maior: 15*/

let number = [8, 67, 983, 345, 234]
let maior = number[0]

for(let i in number){
   if(number[i] > maior){
      maior = number[i]
   }

}
console.log("O maior número é: ", maior)