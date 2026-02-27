let notas = [7.5, 4.0, 8.5, 6.0, 9.0, 5.5, 7.0, 3.5]
let aprovados = []
let reprovados = []

for (let i in notas){
        if (notas[i] >= 6.0 ){
            aprovados.push(notas[i])
            
        }else{
            reprovados.push(notas[i])
        }
        
}
console.log(aprovados)
console.log(reprovados)
