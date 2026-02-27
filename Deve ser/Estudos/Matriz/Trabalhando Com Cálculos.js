let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

let somaMatriz = 0

for (let i in matriz){
    for (let j in matriz[i]){
        somaMatriz += matriz[i][j]
    }
}
console.log ("Soma Total: ", somaMatriz)