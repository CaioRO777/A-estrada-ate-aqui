/*================================================================================
EXERCÍCIO 4 - SOMAR LINHAS E COLUNAS
================================================================================

DESCRIÇÃO:
Criar um algoritmo que calcule a soma de cada linha e de cada coluna da matriz.

DADOS:
let matriz = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90],
    [100, 110, 120]
];

TAREFAS:
1. Calcular a soma de cada linha (criar um array com os totais)
2. Calcular a soma de cada coluna (criar um array com os totais)
3. Exibir os resultados organizadamente

RESULTADO ESPERADO:
Soma das linhas:
Linha 0: 60
Linha 1: 150
Linha 2: 240
Linha 3: 330

Soma das colunas:
Coluna 0: 220
Coluna 1: 260
Coluna 2: 300*/

let matriz = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90],
    [100, 110, 120]
];

let totalLinhas = []
let totalColunas = [0, 0, 0]

for (let i in matriz){
    let somaLinhas = 0
    for (let j in matriz[i]){
        somaLinhas += matriz[i][j]
        totalColunas[j] += matriz[i][j]
    }
    totalLinhas.push (somaLinhas)

}

console.log ("Soma das linhas:")
for (let i in totalLinhas){
    console.log (`Linha ${i}: ${totalLinhas[i]}`)
}

console.log ("\nSoma das Colunas:")
for (let j in totalColunas){
    console.log (`Coluna ${j}: ${totalColunas[j]}`)
}
