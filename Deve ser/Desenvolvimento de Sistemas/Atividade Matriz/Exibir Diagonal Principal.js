/*================================================================================
EXERCÍCIO 2 - EXIBIR DIAGONAL PRINCIPAL
================================================================================

DESCRIÇÃO:
Criar um algoritmo que identifique e exiba apenas os elementos da diagonal principal 
de uma matriz quadrada (onde linha == coluna).

DADOS:
let matriz = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

TAREFAS:
1. Identificar os elementos da diagonal principal (posições [0][0], [1][1], [2][2], [3][3])
2. Exibir esses elementos
3. Calcular e exibir a soma da diagonal principal

RESULTADO ESPERADO:
Elementos da diagonal principal: 1, 6, 11, 16
Soma da diagonal: 34*/

let matriz = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

let diagonal = []
let somaDiagonal = 0

for (let i = 0; i < matriz.length; i++){
    diagonal.push(matriz[i][i])  //não é necessario, mas fica bonitinho.
    somaDiagonal += matriz[i][i]
}

console.log ("Elementos da diagonal principal:", diagonal.join(", "))
console.log ("A soma de todos os elementos da diagonal:", somaDiagonal)

