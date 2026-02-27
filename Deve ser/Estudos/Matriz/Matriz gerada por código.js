let matriz = []
let contador = 1

for (let i = 0; i < 3; i++){
    matriz[i] = []  // cria uma linha vazia
    for (let j = 0; j < 3; j++){
        matriz[i][j] = contador
        contador++
    }
}
console.log (matriz)