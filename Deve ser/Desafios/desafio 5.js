/*
Você atua como assistente de desenvolvimento em uma empresa do setor de e-commerce, 
que gerencia um grande centro de distribuição automatizado. A empresa precisa monitorar 
a performance de seus operadores de separação de pedidos (picking) para garantir que 
as metas diárias sejam cumpridas e identificar necessidades de treinamento. O setor 
de operações coleta dados sobre pedidos separados, tempo de execução e erros cometidos, 
mas a análise manual desses dados consome muito tempo e não permite ações corretivas 
rápidas. Durante períodos de alta demanda, como datas promocionais, é crítico 
identificar rapidamente gargalos operacionais. A gestão solicitou o desenvolvimento 
de uma solução automatizada que processe dados de produtividade, calcule métricas de 
desempenho e gere relatórios que auxiliem na gestão da equipe.

DESAFIO

Desenvolver, em JavaScript, um algoritmo que processe dados de produtividade de 
operadores de picking, calcule indicadores como taxa de acuracidade, produtividade 
(itens/hora), eficiência em relação à meta, identifique operadores destaque e aqueles 
que precisam de suporte, e exiba um relatório gerencial completo.

DADOS PARA PRÁTICA

Utilize os seguintes arrays paralelos com as informações dos operadores durante o turno:

let operadores = ["Pedro Costa", "Juliana Ferreira", "Roberto Lima", "Fernanda Souza", "Lucas Martins"];
let pedidosSeparados = [45, 52, 38, 48, 41];
let itensTotais = [180, 208, 152, 192, 164];
let tempoTrabalhado = [480, 480, 480, 460, 480]; // em minutos
let errosSeparacao = [3, 1, 5, 2, 4];
let metaDiaria = [40, 40, 40, 40, 40]; // pedidos por dia

INDICADORES A CALCULAR:
- Taxa de acuracidade: ((pedidos separados - erros) / pedidos separados) * 100
- Produtividade: (itens totais / tempo trabalhado) * 60 (itens por hora)
- Atingimento de meta: (pedidos separados / meta diária) * 100
- Classificação: Destaque (≥ 110% da meta e acuracidade ≥ 95%), Bom (≥ 95% da meta), 
  Regular (≥ 80% da meta), Necessita Suporte (< 80% da meta)
- Totais: soma de pedidos do turno, média de acuracidade, média de produtividade

EXEMPLO DE PROCESSAMENTO:
Para o operador no índice 0 (Pedro Costa):
- Taxa de acuracidade = ((45 - 3) / 45) * 100 = 93.33%
- Produtividade = (180 / 480) * 60 = 22.5 itens/hora
- Atingimento de meta = (45 / 40) * 100 = 112.5%
- Classificação = Bom (pois atingiu 112.5% mas acuracidade é menor que 95%)*/

let operadores = ["Pedro Costa", "Juliana Ferreira", "Roberto Lima", "Fernanda Souza", "Lucas Martins"];
let pedidosSeparados = [45, 52, 38, 48, 41];
let itensTotais = [180, 208, 152, 192, 164];
let tempoTrabalhado = [480, 480, 480, 460, 480]; // em minutos
let errosSeparacao = [3, 1, 5, 2, 4];
let metaDiaria = [40, 40, 40, 40, 40]; // pedidos por dia
let acuracidade
let produtividade
let atingeMeta
let somaMedia
let soma = 0

for (let i in operadores){
    acuracidade = ((pedidosSeparados[i] - errosSeparacao[i]) / pedidosSeparados[i]) * 100
    produtividade = (itensTotais[i] / tempoTrabalhado[i]) * 60
    atingeMeta = (pedidosSeparados[i] / metaDiaria[i]) * 100
    somaMedia = acuracidade + produtividade
    soma += somaMedia

    console.log ("Operador:", operadores[i])
    console.log ("Taxa de Acuracidade:", acuracidade.toFixed(1), "%")
    console.log ("Produtividade:", produtividade.toFixed(1), "itens/hora")
    console.log ("Atengimento de Meta:", atingeMeta.toFixed(1), "%")


    if (atingeMeta >= 110 && acuracidade >= 95){
        console.log ("Classificação: Destaque")
    } else if (atingeMeta >= 95){
        console.log ("Classificação: Bom")
    } else if (atingeMeta >= 80){
        console.log ("Classificação: Regular")
    } else if (atingeMeta < 80){
        console.log ("Precisa de Suporte!!")
    }
    
}
console.log ("A média total é", soma / operadores.length)