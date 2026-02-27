/*EXERCÍCIO 4: Idades da Família
------------------------------
Crie um array com idades: [25, 30, 15, 45]
- Mostre a idade da primeira pessoa
- Adicione a idade 8 no final
- Verifique se tem alguém com 30 anos
- Calcule a soma de todas as idades
- Mostre quantas pessoas tem na família*/

let soma = 0
let idadedaFml = [25, 30, 15, 45]
console.log(idadedaFml[0])
idadedaFml.push[8]
console.log (idadedaFml.includes(30))

for(let i in idadedaFml){
    soma += idadedaFml[i]
}
console.log(soma)
console.log(idadedaFml.length)
