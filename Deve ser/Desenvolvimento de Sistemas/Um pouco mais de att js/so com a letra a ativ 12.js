//12. Dado um array de strings, conte quantas começam com a letra "A".
let words = ["Aliança", "Banana", "Carro", "Nuvem", "Lápis"]
let caractere = "a"
let result = []

for (let i = 0; i < words.length; i++){
    if (words[i].includes(caractere)){
        result.push(words[i])
    }
}
console.log(result)