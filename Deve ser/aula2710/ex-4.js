
let produtos = ["caneta", "lápis", "mochila", "caderno", "fichário"]
let precos = [15.50, 3.50, 160.00, 53.00, 155.00]
let inf50 = 0
let prod50a100 = ""
let somaPrecosMior100 = 0
let contPrecosMior100 = 0
for(let pos in precos){
    if(precos[pos] < 50){
        inf50++
    }
    if(precos[pos] >= 50 && precos[pos] <= 100){
        prod50a100 += produtos[pos]
    }
    if(precos[pos] > 100){
        somaPrecosMior100 += precos[pos]
        contPrecosMior100++
    }

}
console.log(inf50)
console.log(prod50a100)
console.log(somaPrecosMior100 / contPrecosMior100)