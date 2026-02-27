let alunos = ['Marcio', 'Juliana', 'Alfredo', 'Barbara', 'Oscar']
let idades = [18, 25, 19, 30, 21]
let velhos = ""
for(let pos in idades){
    if(idades[pos] > 20){
        velhos += alunos[pos] + ", "
    }
}
console.log(velhos)
