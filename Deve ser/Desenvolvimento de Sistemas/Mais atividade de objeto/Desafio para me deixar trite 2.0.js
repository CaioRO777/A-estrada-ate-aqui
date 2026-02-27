/*### Desafio 2: Análise de Vendas

Crie um sistema de análise de vendas de uma loja online.

**Estrutura de Dados:**

- Um array `vendas` com objetos representando vendas:
  - produto
  - categoria
  - valor
  - mes (1 a 12)
  - vendedor
  - formaPagamento ('credito', 'debito', 'pix')

**Funcionalidades a implementar:**

1. `totalVendasPorMes(mes)` - percorre o array com `for...of`, soma os valores das vendas do mês especificado
2. `melhorVendedor()` - percorre todas as vendas, acumula o total por vendedor usando um objeto auxiliar, retorna o vendedor com maior total
3. `produtosMaisVendidos()` - percorre as vendas contando quantas vezes cada produto aparece, retorna um array com os 3 mais vendidos
4. `analisarFormaPagamento()` - percorre o array com loop, cria um objeto com contadores para cada forma de pagamento (credito, debito, pix) com quantidade e valor total
5. `metaBatida(meta, mes)` - percorre as vendas do mês usando loop, soma o total e compara com a meta

**Requisitos:**

- Crie pelo menos 15 vendas diferentes para testar
- **USE APENAS `for...of` ou `for...in` para percorrer arrays e objetos**
- Organize seu código em funções reutilizáveis
- Adicione validações para parâmetros inválidos
- Use objetos auxiliares como acumuladores quando necessário

**Dica:** Este desafio vai exigir que você combine várias técnicas: loops (às vezes aninhados), condicionais múltiplas, variáveis acumuladoras, e manipulação de objetos e arrays.

---

## 📌 Dicas para Todos os Exercícios

1. **Teste incrementalmente:** Não tente fazer tudo de uma vez. Resolva parte por parte.
2. **Use console.log:** Para debugar e entender o que está acontecendo no seu código.
3. **Nomes descritivos:** Use nomes que expliquem o propósito da variável ou função.
4. **Comentários:** Adicione comentários explicando a lógica em partes mais complexas.
5. **Use `for...of` para arrays:** É mais simples e legível que o `for` tradicional.
6. **Variáveis acumuladoras:** Nos desafios, você precisará criar variáveis auxiliares para acumular valores ou contar itens.

---*/

// ==========================
// BASE DE DADOS
// ==========================
let vendas = [
    { produto: "Mouse", categoria: "Periferico", valor: 85, mes: 1, vendedor: "Ana", formaPagamento: "pix" },
    { produto: "Teclado", categoria: "Periferico", valor: 120, mes: 1, vendedor: "Carlos", formaPagamento: "credito" },
    { produto: "Monitor", categoria: "Video", valor: 700, mes: 1, vendedor: "Ana", formaPagamento: "debito" },
    { produto: "Headset", categoria: "Audio", valor: 150, mes: 2, vendedor: "Bruno", formaPagamento: "pix" },
    { produto: "Mouse", categoria: "Periferico", valor: 90, mes: 2, vendedor: "Ana", formaPagamento: "credito" },
    { produto: "Cadeira Gamer", categoria: "Mobiliario", valor: 900, mes: 2, vendedor: "Carlos", formaPagamento: "credito" },
    { produto: "Mouse", categoria: "Periferico", valor: 95, mes: 3, vendedor: "Bruno", formaPagamento: "pix" },
    { produto: "Notebook", categoria: "Computador", valor: 3500, mes: 3, vendedor: "Ana", formaPagamento: "debito" },
    { produto: "Teclado", categoria: "Periferico", valor: 110, mes: 4, vendedor: "Carlos", formaPagamento: "pix" },
    { produto: "Headset", categoria: "Audio", valor: 130, mes: 4, vendedor: "Bruno", formaPagamento: "debito" },
    { produto: "Mouse", categoria: "Periferico", valor: 88, mes: 4, vendedor: "Ana", formaPagamento: "credito" },
    { produto: "Monitor", categoria: "Video", valor: 680, mes: 5, vendedor: "Carlos", formaPagamento: "pix" },
    { produto: "Mouse", categoria: "Periferico", valor: 100, mes: 5, vendedor: "Bruno", formaPagamento: "debito" },
    { produto: "Notebook", categoria: "Computador", valor: 3200, mes: 6, vendedor: "Ana", formaPagamento: "credito" },
    { produto: "Cadeira Gamer", categoria: "Mobiliario", valor: 950, mes: 6, vendedor: "Carlos", formaPagamento: "pix" }
];


function totalVendasPorMes(mes) {
    if (mes < 1 || mes > 12) {
        return "Mês inválido!";
    }

    let total = 0;

    for (let venda of vendas) {
        if (venda.mes === mes) {
            total += venda.valor;
        }
    }

    return total;
}

function melhorVendedor() {
    let totalPorVendedor = {};

    for (let venda of vendas) {
        if (!totalPorVendedor[venda.vendedor]) {
            totalPorVendedor[venda.vendedor] = 0;
        }
        totalPorVendedor[venda.vendedor] += venda.valor;
    }

    let melhor = null;
    let maiorValor = 0;

    for (let vendedor in totalPorVendedor) {
        if (totalPorVendedor[vendedor] > maiorValor) {
            maiorValor = totalPorVendedor[vendedor];
            melhor = vendedor;
        }
    }

    return { vendedor: melhor, total: maiorValor };
}

function produtosMaisVendidos() {
    let contador = {};

    for (let venda of vendas) {
        if (!contador[venda.produto]) {
            contador[venda.produto] = 0;
        }
        contador[venda.produto]++;
    }

    let arr = [];

    for (let produto in contador) {
        arr.push({ produto: produto, quantidade: contador[produto] });
    }

    arr.sort((a, b) => b.quantidade - a.quantidade);

    return arr.slice(0, 3);
}

function analisarFormaPagamento() {
    let formas = {
        credito: { quantidade: 0, valorTotal: 0 },
        debito: { quantidade: 0, valorTotal: 0 },
        pix: { quantidade: 0, valorTotal: 0 }
    };

    for (let venda of vendas) {
        formas[venda.formaPagamento].quantidade++;
        formas[venda.formaPagamento].valorTotal += venda.valor;
    }

    return formas;
}

function metaBatida(meta, mes) {
    let total = totalVendasPorMes(mes);

    if (typeof total === "string") return total;

    return total >= meta
        ? `Meta atingida! Total: ${total}`
        : `Meta NÃO atingida. Total: ${total}`;
}
