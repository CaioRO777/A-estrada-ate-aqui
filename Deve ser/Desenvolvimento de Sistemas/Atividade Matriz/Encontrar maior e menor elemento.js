/*================================================================================
EXERCÍCIO 3 - ENCONTRAR MAIOR E MENOR ELEMENTO
================================================================================

DESCRIÇÃO:
Criar um algoritmo que percorra uma matriz e identifique o maior e o menor valor 
presente, informando também suas posições (linha e coluna).

DADOS:
let matriz = [
    [45, 12, 67, 23],
    [89, 34, 15, 78],
    [56, 91, 28, 42]
];

TAREFAS:
1. Percorrer toda a matriz
2. Encontrar o maior valor e sua posição
3. Encontrar o menor valor e sua posição
4. Exibir os resultados

RESULTADO ESPERADO:
Maior elemento: 91 na posição [2][1]
Menor elemento: 12 na posição [0][1]*/

let matriz = [
    [45, 12, 67, 23],
    [89, 34, 15, 78],
    [56, 91, 28, 42]
];

let maiorElemento = matriz[0][0]
let menorElemento = matriz[0][0]
let posicaoMaior = [0, 0]
let posicaoMenor = [0, 0]

for (let i in matriz){
    for (let j in matriz[i]){
        if (matriz[i][j] > maiorElemento){
            maiorElemento = matriz[i][j];
            posicaoMaior = [i, j];
        } 
        if (matriz[i][j] < menorElemento){
            menorElemento = matriz[i][j]
            posicaoMenor = [i, j]
        
        }
    }
}
console.log (`Maior elemento: ${maiorElemento} na posição [${posicaoMaior[0]}][${posicaoMaior[1]}]`);
console.log (`Menor elemento: ${menorElemento} na posição [${posicaoMenor[0]}][${posicaoMenor[1]}]`);
