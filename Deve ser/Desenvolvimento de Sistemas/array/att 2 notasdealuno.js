/*EXERCÍCIO 2: Notas de Aluno
---------------------------
Crie um array com as notas: [7.5, 8.0, 6.5]
- Mostre a primeira nota
- Mostre a última nota
- Adicione uma nova nota 9.0 no final
- Calcule a média das notas (soma todas e divide por 3)
- Mostre quantas notas o aluno tem*/


let soma = 0
let notaAlunos = [7.5, 8.0, 6.5]
console.log(notaAlunos[0])
console.log(notaAlunos.pop(-1))
console.log(notaAlunos.push(9.0))

for(let i in notaAlunos){
    soma += notaAlunos[i]
}
notaAlunos = soma / notaAlunos.length

console.log(notaAlunos.toFixed(1))
console.log(notaAlunos.length)