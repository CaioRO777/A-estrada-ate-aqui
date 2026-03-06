/*16. Dado um array de temperaturas da semana [22, 25, 19, 30, 28, 18, 24],
encontre a temperatura mais alta, a mais baixa e calcule a média semanal.*/
let temperatura = [22, 25, 19, 30, 28, 18, 24]
let temperaturaAlta = []
let temperaturaBaixa = []

temperatura.sort
temperaturaBaixa.push(temperatura[0])
temperaturaAlta.push(temperatura[temperatura.length - 1])
 
let soma = 0
for (let i in temperatura){
    soma += temperatura[i] 

}

console.log(temperaturaAlta)
console.log(temperaturaBaixa)
console.log((soma / temperatura.length).toFixed(1))

