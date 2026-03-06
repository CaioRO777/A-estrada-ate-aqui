/*### Exercício 5: Lista de Tarefas

Crie um array `listaTarefas` com 6 objetos, onde cada tarefa tem:

- descricao
- prioridade (1-Baixa, 2-Média, 3-Alta)
- concluida (boolean)

**Tarefas:**

1. Percorra a lista e exiba apenas as tarefas que NÃO foram concluídas
2. Das tarefas não concluídas, conte quantas têm prioridade alta (3)
3. Exiba o total de tarefas pendentes com prioridade alta

---
*/

let listaTarefas = [
    { descricao: "Lavar a louça", prioridade: 1, concluida: false },
    { descricao: "Estudar JavaScript", prioridade: 3, concluida: false },
    { descricao: "Ir ao mercado", prioridade: 2, concluida: true },
    { descricao: "Limpar o quarto", prioridade: 2, concluida: false },
    { descricao: "Treinar academia", prioridade: 1, concluida: true },
    { descricao: "Finalizar trabalho da escola", prioridade: 3, concluida: false }
];

console.log ("Tarefas não concluídas:");
for (let i = 0; i < listaTarefas.length; i++){
    if (listaTarefas[i].concluida === false){
        console.log ("- " + listaTarefas[i].descricao);
    }
}

let contadorAlta = 0;

for (let i = 0; i< listaTarefas.length; i++){
    if (listaTarefas[i].concluida === false && listaTarefas[i].prioridade === 3){
        contadorAlta++
    }
}

console.log ("Total de tarefas pendentes com prioridade alta:", contadorAlta);