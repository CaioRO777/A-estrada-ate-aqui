/*================================================================================
EXERCÍCIO 5 - CONTAR ELEMENTOS POR CRITÉRIO
================================================================================

DESCRIÇÃO:
Criar um algoritmo que conte quantos elementos da matriz atendem a diferentes 
critérios numéricos.

DADOS:
let matriz = [
    [15, 22, 8, 31, 45],
    [12, 50, 18, 7, 33],
    [28, 9, 41, 16, 52],
    [6, 38, 24, 11, 47]
];

TAREFAS:
1. Contar quantos números são pares
2. Contar quantos números são ímpares
3. Contar quantos números são maiores que 30
4. Contar quantos números são menores que 15
5. Exibir todos os resultados

RESULTADO ESPERADO:
Total de elementos: 20
Números pares: 10
Números ímpares: 10
Números maiores que 30: 7
Números menores que 15: 5*/

let matriz = [
    [15, 22, 8, 31, 45],
    [12, 50, 18, 7, 33],
    [28, 9, 41, 16, 52],
    [6, 38, 24, 11, 47]
];

let numerosPares = 0
let numerosImpares = 0
let numerosMaiores = 0
let numerosMenores = 0
let totalElementos = 0

for (let i = 0; i < matriz.length; i++){
    for (let j = 0; j < matriz[i].length; j++){
        let num = matriz[i][j]
        totalElementos++

        if (num % 2 === 0){
            numerosPares++
        }else{
            numerosImpares++
        }

        if (num > 30){
            numerosMaiores++
        }

        if (num < 15){
            numerosMenores++
        }
    }
}

console.log ("Total de elementos:", totalElementos)
console.log ("Números pares:", numerosPares)
console.log ("Números impares:", numerosImpares)
console.log ("Números maior que 30:", numerosMaiores)
console.log ("Números menor que 15:", numerosMenores) 

