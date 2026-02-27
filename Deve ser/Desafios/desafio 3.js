/*
Você atua como assistente de desenvolvimento em uma empresa do setor de manufatura de 
componentes eletrônicos, que busca melhorar o controle de qualidade de seus produtos. 
A empresa realiza testes de qualidade em lotes de produção e precisa automatizar a 
análise dos resultados. O setor de qualidade registra manualmente os resultados de 
inspeção de cada lote, incluindo a quantidade de peças aprovadas, reprovadas e com 
defeitos menores. Esse processo manual gera atrasos na identificação de problemas na 
linha de produção e dificulta a rastreabilidade. A equipe solicitou o desenvolvimento 
de uma solução que processe automaticamente os dados de inspeção, calcule taxas de 
aprovação, identifique lotes críticos e gere alertas para ação imediata da equipe de 
produção.

DESAFIO

Desenvolver, em JavaScript, um algoritmo que processe dados de inspeção de qualidade 
de diferentes lotes de produção, calcule indicadores como taxa de aprovação, taxa de 
defeitos e valor de perda, identifique lotes que precisam de retrabalho ou descarte, 
e exiba um relatório completo com recomendações de ação.

DADOS PARA PRÁTICA

Utilize os seguintes arrays paralelos com as informações de inspeção de lotes:

let lotes = ["A-2501", "B-3302", "C-4103", "D-5504"];
let totalPecas = [1000, 1500, 800, 1200];
let pecasAprovadas = [920, 1350, 650, 1140];
let defeitoLeve = [50, 100, 80, 40];
let pecasReprovadas = [30, 50, 70, 20];
let valorUnitario = [12.50, 8.00, 15.00, 10.00]; // em reais

INDICADORES A CALCULAR:
- Taxa de aprovação: (peças aprovadas / total de peças) * 100
- Taxa de defeitos totais: ((defeito leve + reprovadas) / total de peças) * 100
- Valor de perda: peças reprovadas * valor unitário
- Status: Aprovado (≥ 95%), Atenção (≥ 85%), Crítico (< 85%)
- Total de perdas financeiras do dia (soma de todos os valores de perda)

EXEMPLO DE PROCESSAMENTO:
Para o lote no índice 0 (A-2501):
- Taxa de aprovação = (920 / 1000) * 100 = 92%
- Taxa de defeitos = ((50 + 30) / 1000) * 100 = 8%
- Valor de perda = 30 * 12.50 = R$ 375.00
- Status = Atenção (pois 92% está entre 85% e 95%)*/

let lotes = ["A-2501", "B-3302", "C-4103", "D-5504"];
let totalPecas = [1000, 1500, 800, 1200];
let pecasAprovadas = [920, 1350, 650, 1140];
let defeitoLeve = [50, 100, 80, 40];
let pecasReprovadas = [30, 50, 70, 20];
let valorUnitario = [12.50, 8.00, 15.00, 10.00]; // em reais
let taxadeAprovacao = 0
let taxaDefeito = 0
let valorPerda = 0
let soma = 0

for (let i in lotes){
    taxadeAprovacao = (pecasAprovadas[i] / totalPecas[i]) * 100
    taxaDefeito = ((defeitoLeve[i] + pecasReprovadas[i]) / totalPecas[i]) * 100
    valorPerda = pecasReprovadas[i] * valorUnitario[i]
    soma += valorPerda

    console.log ("Para o lote do Indice", lotes[i])
    console.log ("Taxa de Aprovação:", taxadeAprovacao, "%")
    console.log ("A taxa de Defeito está em:", taxaDefeito, "%")
    console.log ("Valor de perda:R$", valorPerda)


    if (taxadeAprovacao >= 95){
        console.log ("Status: Aprovado")
    } else if (taxadeAprovacao >= 85){
        console.log ("Status: Atenção!")
    } else if (taxadeAprovacao < 85){
        console.log ("Status: Crítico")
    }

}