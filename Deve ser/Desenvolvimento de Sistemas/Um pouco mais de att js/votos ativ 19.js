/*19. Um sistema de votação registrou os votos [5, 3, 5, 2, 5, 3, 1, 5, 2, 5]. 
Conte quantos votos cada candidato (1, 2, 3, 4 e 5) recebeu e identifique qual teve mais votos.*/
let votos = [5, 3, 5, 2, 5, 3, 1, 5, 2, 5]
let contagem = [0, 0, 0, 0, 0]

for (let i in votos){
    let candidato = votos[i]
    contagem[candidato - 1]++

}

let maisVotos = contagem[0]
let vencedor = 1


for (let i = 0; i < contagem.length; i++){
    if (contagem[i] > maisVotos){
        maisVotos = contagem[i]
        vencedor = i + 1
    }
}

console.log("Votos por candidato:")
for (let i = 0; i < contagem.length; i++) {
    console.log("Candidato " + (i + 1) + ": " + contagem[i] + " votos")
}

console.log("Candidato vencedor: " + vencedor + " com " + maisVotos + " votos!")