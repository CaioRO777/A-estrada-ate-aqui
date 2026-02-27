/*
Você atua como assistente de desenvolvimento em uma empresa do setor de alimentos e 
bebidas, que opera múltiplas linhas de envase automático. A empresa precisa monitorar 
a eficiência de suas máquinas envasadoras para garantir que estejam operando dentro 
dos parâmetros esperados. O setor de produção enfrenta desafios para identificar 
rapidamente quando uma máquina está operando abaixo da capacidade, o que pode indicar 
necessidade de manutenção ou ajustes. Atualmente, os operadores anotam os dados de 
produção em fichas e apenas no final do turno conseguem avaliar o desempenho geral. 
A gestão solicitou o desenvolvimento de uma ferramenta que processe dados em tempo 
real, calcule indicadores de eficiência e disponibilidade, e alerte quando alguma 
máquina estiver com desempenho crítico.

DESAFIO

Desenvolver, em JavaScript, um algoritmo que processe dados de produção de máquinas 
envasadoras, calcule indicadores como taxa de disponibilidade, eficiência operacional 
e taxa de desperdício, identifique máquinas com problemas, calcule a produção total 
e média, e exiba um dashboard em formato de relatório com status de cada equipamento.

DADOS PARA PRÁTICA

Utilize os seguintes arrays paralelos com as informações das máquinas no turno de 8 horas (480 minutos):

let maquinas = ["ENV-01", "ENV-02", "ENV-03", "ENV-04"];
let capacidadeNominal = [3000, 3500, 2800, 3200]; // unidades por turno
let unidadesProduzidas = [2850, 2800, 2650, 3100];
let tempoOperacao = [450, 420, 470, 475]; // em minutos
let unidadesDefeito = [75, 120, 50, 80];

INDICADORES A CALCULAR:
- Eficiência: (unidades produzidas / capacidade nominal) * 100
- Taxa de disponibilidade: (tempo em operação / 480 minutos) * 100
- Taxa de desperdício: (unidades com defeito / unidades produzidas) * 100
- Status: Ótimo (≥ 90%), Normal (≥ 80%), Atenção (≥ 70%), Crítico (< 70%)
- Produção total (soma de todas as unidades produzidas)
- Média de eficiência de todas as máquinas

EXEMPLO DE PROCESSAMENTO:
Para a máquina no índice 0 (ENV-01):
- Eficiência = (2850 / 3000) * 100 = 95%
- Disponibilidade = (450 / 480) * 100 = 93.75%
- Desperdício = (75 / 2850) * 100 = 2.63%
- Status = Ótimo (pois 95% é maior que 90%)*/

let maquinas = ["ENV-01", "ENV-02", "ENV-03", "ENV-04"];
let capacidadeNominal = [3000, 3500, 2800, 3200]; // unidades por turno
let unidadesProduzidas = [2850, 2800, 2650, 3100];
let tempoOperacao = [450, 420, 470, 475]; // em minutos
let unidadesDefeito = [75, 120, 50, 80];
let eficiência
let disponibilidade
let disperdicio
let soma = 0

for (let i in maquinas){
    eficiência = (unidadesProduzidas[i] / capacidadeNominal[i]) * 100
    disponibilidade = (tempoOperacao[i] / 480) * 100
    disperdicio = (unidadesDefeito[i] / unidadesProduzidas[i]) * 100
    soma += unidadesProduzidas[i]

    console.log ("Para a máquina ", maquinas[i])
    console.log ("Eficiência:", eficiência.toFixed(1), "%")
    console.log ("Disponibilidade:", disponibilidade.toFixed(1), "%")
    console.log ("Disperdicio:", disperdicio.toFixed(1), "%")


    if (eficiência >= 90){
        console.log ("Status: Ótimo")
    } else if (eficiência >= 80){
        console.log ("Status: Normal")
    } else if (eficiência >= 70){
        console.log ("Status: Atenção!!")
    } else {
        console.log ("Status: Crítico")
    }

}
console.log ("A média Total fica em", soma / maquinas.length)