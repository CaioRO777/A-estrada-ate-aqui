/*
Você atua como assistente de desenvolvimento em uma empresa do setor de logística e 
distribuição, que busca modernizar seus processos de gestão de entregas através da 
criação de sistemas automatizados. Seu trabalho envolve desenvolver scripts e pequenos 
programas que auxiliam no controle de rotas, prazos e eficiência de entregas. O setor 
de operações identificou que a taxa de entregas no prazo está abaixo do esperado e 
precisa de uma ferramenta para analisar o desempenho dos motoristas. Atualmente, os 
dados são registrados em papel e consolidados manualmente ao final do dia, causando 
atrasos na tomada de decisões. A gestão solicitou o desenvolvimento de uma solução 
que permita processar automaticamente os dados de entregas, calcular indicadores de 
desempenho e identificar motoristas que precisam de suporte adicional.

DESAFIO

Desenvolver, em JavaScript, um algoritmo que processe dados de entregas realizadas por 
uma frota de veículos, calcule indicadores de desempenho (como taxa de pontualidade, 
média de entregas por motorista e tempo médio de entrega), identifique os motoristas 
com melhor e pior desempenho, e exiba um relatório organizado em tela.

DADOS PARA PRÁTICA

Utilize os seguintes arrays paralelos com as informações de entregas do dia:

let motoristas = ["Carlos Silva", "Ana Paula", "João Santos", "Maria Oliveira"];
let totalEntregas = [12, 15, 8, 11];
let entregasNoPrazo = [10, 14, 6, 11];
let tempoTotal = [480, 510, 400, 440]; // em minutos

INDICADORES A CALCULAR:
- Taxa de pontualidade: (entregas no prazo / total de entregas) * 100
- Tempo médio por entrega: tempo total / total de entregas
- Classificação: Excelente (≥ 90%), Bom (≥ 75%), Regular (≥ 60%), Insuficiente (< 60%)

EXEMPLO DE PROCESSAMENTO:
Para o motorista no índice 0 (Carlos Silva):
- Taxa de pontualidade = (10 / 12) * 100 = 83.33%
- Tempo médio = 480 / 12 = 40 minutos por entrega
- Classificação = Bom*/

let motoristas = ["Carlos Silva", "Ana Paula", "João Santos", "Maria Oliveira"];
let totalEntregas = [12, 15, 8, 11];
let entregasNoPrazo = [10, 14, 6, 11];
let tempoTotal = [480, 510, 400, 440]; // em minutos
let taxadePontualidade = []
let tempoMedio = []

for (let i = 0; i < motoristas.length; i++){
    taxadePontualidade[i] = (entregasNoPrazo[i] / totalEntregas[i]) * 100
    tempoMedio[i] = tempoTotal[i] / totalEntregas[i]
    console.log ("Motoristas:", motoristas[i])
    console.log ("Taxa Atual:", taxadePontualidade[i].toFixed(1))
    console.log ("Tempo médio:", tempoMedio[i])

    if (taxadePontualidade[i] >= 90){
        console.log ("Classificação Excelente!")
    } else if (taxadePontualidade[i] >= 75){
        console.log ("Classificação Bom")
    } else if (taxadePontualidade[i] >= 60){
        console.log ("Classificação Regular")
    } else {
        console.log ("Classificação Insuficiente")
    }
}


