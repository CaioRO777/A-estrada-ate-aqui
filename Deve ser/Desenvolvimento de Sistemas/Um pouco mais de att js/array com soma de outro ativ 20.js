/*20. Dado um array de números [3, 7, 2, 9, 1, 5, 8],
 crie um novo array onde cada elemento seja a soma de todos os números menores que ele no array original.*/
 let numeros = [3, 7, 2, 9, 1, 5, 8]
 let result = []

 for (let i in numeros){
    let soma = 0
    for (let j in numeros){
        if (numeros[j] < numeros[i]){
            soma += numeros[j]
        }
    }
    result.push(soma)
 }
 console.log("Ai meu cabeça: ", numeros)
 console.log("Esse é o resultado: ", result)