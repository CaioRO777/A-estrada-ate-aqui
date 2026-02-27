/*
## Exercício 2: Carrinho de Compras
Crie um objeto chamado `produto` com as seguintes propriedades:
- nome
- preco
- quantidade
- categoria

Adicione um método chamado `calcularTotal()` que retorne o valor total (preço × quantidade).

---*/

let produto = {
    nome: "Leite",
    preco: 5.35,
    quantidade: 12,
    categoria: "Molhado",

    calcularTotal: function(){
        return this.preco * this.quantidade
    }
}
console.log (produto.calcularTotal())
