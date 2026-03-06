 const matriz = [
    [5, 8, 2, 9],
    [1, 7, 3, 4],
    [6, 0, 2, 2],
    [5, 1, 8, 7],
];
let vaiZero = false
let cont = 0
let total = 0
for (const i in matriz){
    for (const j in matriz[i]){
        if (matriz[i][j] == 8){
            console.log ("Linha:", parseInt(i) + 1, "Coluna:", parseInt(j) + 1);
            vaiZero = true
            cont ++
        }
    }
}
total = 8 * cont
console.log (cont)
console.log (total)