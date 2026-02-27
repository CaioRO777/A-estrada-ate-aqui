let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

for (let i in matriz){
    for (let j in matriz[i]){
        if (matriz[i][j] % 2 === 0){
            console.log (`Par encontrado: ${matriz[i][j]}`)
        }
    }
}