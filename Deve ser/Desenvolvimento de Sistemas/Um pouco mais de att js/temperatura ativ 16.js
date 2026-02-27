/*16. Dado um array de temperaturas da semana [22, 25, 19, 30, 28, 18, 24],
 encontre a temperatura mais alta, a mais baixa e calcule a média semanal*/
 let temperatura = [22, 25, 19, 30, 28, 18, 24]
 let maisAlta = temperatura[0]
 let maisBaixa = temperatura[0]
 let soma = 0

 for (let i in temperatura){
    soma += temperatura[i]

    if (temperatura[i] > maisAlta){
        maisAlta = temperatura[i]
    }

    if (temperatura[i] < maisBaixa){
        maisBaixa = temperatura[i]
    }
 }
 let media = soma / temperatura.length

 console.log("A maior temperatura foi: ", maisAlta)
 console.log("A menor temperatura foi: ", maisBaixa)
 console.log("A média semanal é: ", media.toFixed(1))