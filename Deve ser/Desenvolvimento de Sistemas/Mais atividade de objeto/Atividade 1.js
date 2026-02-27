/*### Exercício 1: Cadastro de Alunos

Crie um array chamado `turma` com 4 objetos, onde cada objeto representa um aluno com as propriedades:

- nome
- idade
- nota1
- nota2

**Tarefas:**

1. Percorra o array usando um loop
2. Para cada aluno, calcule a média das duas notas
3. Se a média for maior ou igual a 7, exiba: "**[nome]** foi aprovado(a) com média **[média]**"
4. Caso contrário, exiba: "**[nome]** foi reprovado(a) com média **[média]**"

---*/

const turma = [
    {nome: 'Caio', idade: 30, nota1: 8.5, nota2: 6.7},
    {nome: 'Jorge', idade: 24, nota1: 5.5, nota2: 7.7},
    {nome: 'Cremoso', idade: 20, nota1: 9.0, nota2: 7.8},
    {nome: 'Felipe', idade: 46, nota1: 5.7, nota2: 4.7},

]

for (const alunos of turma) {
    let media = (alunos.nota1 + alunos.nota2) / 2
    if (media >= 7) {
        console.log (`${alunos.nome} foi aprovado com a média ${media}`)
    } else {
        console.log (`${alunos.nome} foi reprovado com a média ${media}`)
    }
}