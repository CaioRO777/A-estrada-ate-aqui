/*1. Imprimir Elementos
   Crie um array com 5 números. Use um for para imprimir cada número.
   Exemplo: [10, 20, 30, 40, 50]*/

   let number = [5, 4, 232, 546, 67]

   for(let i in number){
        i += number
   }
   console.log(number.join(" , "))