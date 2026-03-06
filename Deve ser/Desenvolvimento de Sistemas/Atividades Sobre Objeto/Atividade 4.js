/*### Exercício 4: Cadastro de Veículos

Crie um array vazio chamado `garagem` e um objeto com uma função para adicionar veículos.

**Tarefas:**

1. Crie pelo menos 3 objetos de veículos, cada um com: marca, modelo, ano, cor
2. Adicione esses veículos ao array `garagem`
3. Crie uma função que percorra a garagem e conte quantos veículos têm ano de fabricação acima de 2020
4. Exiba o resultado da contagem

---*/

let garagem = [];

function adicionarVeiculo(veiculo){
    garagem.push(veiculo);
}

let carro1 = {marca: "Toyota", modelo: "Corrola", ano: 2021, cor: "Preto"};
let carro2 = {marca: "Honda", modelo: "Civic", ano: 2018, cor: "Prata"};
let carro3 = {marca: "Fiat", modelo: "Pulse", ano: 2023, cor: "Vermelho"};

adicionarVeiculo(carro1);
adicionarVeiculo(carro2);
adicionarVeiculo(carro3);

function contarVeiculosNovos(){
    let contador = 0;

    for (let i = 0; i < garagem.length; i++){
        if (garagem[i].ano > 2020){
            contador++
        }
    }

    return contador;
}

console.log ("Veículos acima de 2020:", contarVeiculosNovos());
