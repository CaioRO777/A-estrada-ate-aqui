/*17. Um estacionamento cobra R$ 5,00 por hora.
 Dado um array com as horas que cada carro ficou estacionado ,
 calcule o valor total arrecadado e quantos carros pagaram mais de R$ 20,00.*/
 let horas = [2, 5, 1, 3, 4, 6]
 let total = 0
 let acimaDe20 = 0
 let precoHora = 5

 for (let i in horas){
    let valor = horas[i] * precoHora
    total += valor 

    if (valor > 20){
        acimaDe20++
    }
 }
 console.log("O total arrecado foi R$: ", total)
 console.log("Quantidade de carros que pagaram R$20: ", acimaDe20)