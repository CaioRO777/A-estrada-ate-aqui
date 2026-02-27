/*14. Uma loja registrou as vendas diárias da semana em um array [120, 150, 200, 180, 90, 250, 300].
 Calcule o total de vendas e identifique quantos dias tiveram vendas acima de 150.*/
 let vendas = [120, 150, 200, 180, 90, 250, 300]
 let somas = 0
let acima = 0
 for (let i in vendas){
   somas += vendas[i]
   
    if (vendas[i] > 150){
      acima++
    }
 }
 console.log("A soma de todas as vendas fica: ", somas)
 console.log(acima, "dias foram que tiveram vendas acima de 150")
 