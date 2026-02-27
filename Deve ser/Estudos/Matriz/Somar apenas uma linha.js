let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

let somaLinha = 0
for (let j = 0; j < matriz[1].length; j++){
    somaLinha += matriz[1][j]
}
console.log ("Soma da segunda linha:", somaLinha)