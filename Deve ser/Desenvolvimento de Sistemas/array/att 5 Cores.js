/*EXERCÍCIO 5: Cores Favoritas
----------------------------
Crie um array com cores: ["azul", "verde", "vermelho"]
- Mostre a cor do meio (posição 1)
- Adicione "amarelo" no final
- Mude a primeira cor para "preto"
- Verifique se "azul" ainda está na lista
- Mostre todas as cores em uma frase separada por vírgulas*/

let cores = ["Azul", "Verde", "Vermelho"]
console.log("Cor do meio", cores[1])
cores.push["Amarelo"]
cores[0] = "Preto"

let temAzul = cores.includes("Azul")
console.log("A cor azul ainda está na lista?", temAzul)

console.log(cores.join(", "))
