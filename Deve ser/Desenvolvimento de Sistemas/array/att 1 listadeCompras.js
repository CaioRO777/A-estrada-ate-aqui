/*EXERCÍCIO 1: Lista de Compras
-----------------------------
Crie um array com 3 itens de compras: ["pão", "leite", "ovos"]
- Mostre o primeiro item da lista
- Adicione "queijo" no final da lista
- Verifique se "leite" está na lista
- Mostre quantos itens tem na lista agora*/



const listadeCompras = ["Pão", "Leite", "Ovos"]
listadeCompras.push ("Queijo")
console.log(listadeCompras[1])
console.log(listadeCompras.includes("Leite"))
console.log(listadeCompras.length)


