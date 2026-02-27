/*### Exercício 2: Loja de Produtos

Crie um array chamado `estoque` com 5 objetos representando produtos, cada um com:

- nome
- preco
- quantidade
- categoria

**Tarefas:**

1. Crie uma função que receba uma categoria como parâmetro
2. A função deve percorrer o array e exibir apenas os produtos da categoria informada
3. Se não houver produtos daquela categoria, exiba uma mensagem apropriada

---*/

const estoque = [
    {nome:'Banana', preco: 5.99, quantidade: 3, categoria: 'HortiFruti'},
    {nome:'Leite', preco: 5.89, quantidade: 12, categoria: 'Molhado'},
    {nome:'Arroz', preco: 12.99, quantidade: 2, categoria: 'Mercearia'},
    {nome:'Coquinha', preco: 9.89, quantidade: 3, categoria: 'Bebidas'},
    {nome:'Sanduichera', preco: 400.00, quantidade: 1, categoria: 'Bazar'},



]

function mesmaCategoria(categoria){
    for (produto of estoque){
        if (produto.categoria == categoria){
            console.log (`${produto.nome} é da categoria ${produto.categoria}`)
        } else {
            console.log (`${produto.nome} não é da categoria ${categoria}`)
        }
        
    }
}
mesmaCategoria('HortiFruti')