/*18. Você tem dois arrays: um com produtos disponíveis  ["arroz", "feijão", "macarrão", "açúcar"]
 e outro com produtos da lista de compras ["feijão", "café", "açúcar", "sal"].
 Crie um array com os produtos que estão disponíveis E estão na lista de compras.*/
 let disponíveis = ["arroz", "feijão", "macarrão", "açúcar"]
 let lista = ["feijão", "café", "açúcar", "sal"]
 let encontrados = []

 for (let i in lista){
    if (disponíveis.includes(lista[i])){
        encontrados.push(lista[i])
    }
 }
 console.log("Esse são os prudotos disponiveis para a lista: ", encontrados)