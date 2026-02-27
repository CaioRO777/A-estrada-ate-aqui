/*Somar Todos os Números
   Crie um array com 4 números. Use um for para somar todos e mostrar o resultado.
   Exemplo: [5, 10, 15, 20] → Soma = 50*/

let number = [6, 4, 567, 234, 7]
let somar = 0

for(let i in number){
    somar += number[i]
}
console.log("A soma de todos os números do array fica ", somar)