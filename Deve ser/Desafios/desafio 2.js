/*
Você atua como assistente de desenvolvimento em uma empresa do setor de energia renovável, 
especializada em sistemas de geração solar fotovoltaica. A empresa monitora diversas 
usinas solares distribuídas pelo país e precisa de ferramentas automatizadas para 
processar dados de geração de energia. O setor de monitoramento enfrenta dificuldades 
para consolidar informações diárias de produção, identificar usinas com baixo 
desempenho e calcular a eficiência energética de cada instalação. Atualmente, os 
técnicos precisam manualmente revisar centenas de relatórios e realizar cálculos em 
planilhas, o que consome tempo valioso. A equipe técnica solicitou o desenvolvimento 
de uma solução automatizada que processe dados de geração, compare com a capacidade 
instalada e identifique situações que requerem manutenção preventiva.

DESAFIO

Desenvolver, em JavaScript, um algoritmo que processe dados de geração de energia de 
diferentes usinas solares, calcule a eficiência de cada usina em relação à sua capacidade 
instalada, identifique usinas com desempenho abaixo do esperado (eficiência < 70%), 
calcule a geração total e média do sistema, e exiba um relatório estruturado com 
recomendações.

DADOS PARA PRÁTICA

Utilize os seguintes arrays paralelos com as informações de geração de energia do dia:

let usinas = ["Solar Nordeste I", "Solar Sul III", "Solar Centro-Oeste II", "Solar Sudeste V", "Solar Norte IV"];
let capacidadeInstalada = [500, 750, 600, 800, 450]; // em kWh
let energiaGerada = [420, 600, 390, 720, 380]; // em kWh
let horasDeSol = [8.5, 9, 8, 9.5, 8.2]; // em horas

INDICADORES A CALCULAR:
- Eficiência: (energia gerada / capacidade instalada) * 100
- Status: Excelente (≥ 85%), Normal (≥ 70%), Atenção (< 70%)
- Geração total do sistema (soma de toda energia gerada)
- Média de eficiência do sistema

EXEMPLO DE PROCESSAMENTO:
Para a usina no índice 0 (Solar Nordeste I):
- Eficiência = (420 / 500) * 100 = 84%
- Status = Normal (pois 84% está entre 70% e 85%)*/

let usinas = ["Solar Nordeste I", "Solar Sul III", "Solar Centro-Oeste II", "Solar Sudeste V", "Solar Norte IV"];
let capacidadeInstalada = [500, 750, 600, 800, 450]; // em kWh
let energiaGerada = [420, 600, 390, 720, 380]; // em kWh
let horasDeSol = [8.5, 9, 8, 9.5, 8.2]; // em horas
let eficiência
let geracaoTotal
let soma = 0

for (let i in usinas){
eficiência = (energiaGerada[i] / capacidadeInstalada[i]) * 100
soma += eficiência
geracaoTotal += energiaGerada[i]

console.log ("Usina:", usinas[i])

if (eficiência >= 85){
    console.log ("Excelente")
} else if (eficiência >= 70){
    console.log ("Normal")
} else if (eficiência < 70){
    console.log ("Atenção!!")
}



}
console.log ("Média Total :", soma / usinas.length)
