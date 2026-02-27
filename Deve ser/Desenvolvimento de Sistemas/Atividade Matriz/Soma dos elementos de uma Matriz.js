/*================================================================================
EXERCÍCIO 1 - SOMA DOS ELEMENTOS DE UMA MATRIZ
================================================================================

DESCRIÇÃO:
Criar um algoritmo que percorra uma matriz e calcule a soma de todos os seus elementos.

DADOS:
let matriz = [
    [5, 10, 15],
    [20, 25, 30],
    [35, 40, 45]
];

TAREFAS:
1. Percorrer todos os elementos da matriz
2. Somar todos os valores
3. Exibir o resultado total

RESULTADO ESPERADO:
Soma total dos elementos: 225*/

let matriz = [
    [5, 10, 15],
    [20, 25, 30],
    [35, 40, 45]
];

let somaTotal = 0

for (let i in matriz){
    for (let j in matriz[i]){
        somaTotal += matriz[i][j]
    }
}
console.log ("A soma total é: ", somaTotal)