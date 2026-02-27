let notas_atuais = [50, 20, 10, 5, 2, 1];
let troco = 68; // O valor que vamos quebrar

// 1. Crie o seu laço for aqui (lembre do .length!)
// for (...) {
for (let i = 0; i < notas_atuais.length; i++) {

  let guardarNotas = Math.floor (troco / notas_atuais[i]) 

  if (guardarNotas > 0) {
    console.log (guardarNotas + " notas de R$ " + notas_atuais[i])
  }

  troco = troco % notas_atuais[i]
}

    // 2. Crie uma variável para guardar a quantidade de notas. 
    // Lembre da fórmula: Math.floor(troco / a_gaveta_atual)
    
    
    // 3. Faça um if: se a quantidade de notas for maior que zero, dê um console.log
    
    
    // 4. O Pulo do Gato: atualize o valor do troco usando o Resto (%)
    // Fórmula: troco = troco % a_gaveta_atual

// }