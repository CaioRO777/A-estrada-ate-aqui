//8. Dado um array de strings, imprima apenas as strings com mais de 5 caracteres.
let nomes = ["Alice", "Carlos", "Jorge", "Almeida", "Caio"]
let quantL = 5

for(let i = 0; i < nomes.length; i++){
    if (nomes[i].length === quantL){
        console.log(nomes[i])
    }
}