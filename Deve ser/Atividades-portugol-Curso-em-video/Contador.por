programa {
  inteiro soma = 0, numero, contador = 1, maior = 0
  
  funcao inicio() {
    enquanto(contador <= 5) {
      escreva("\nDigite ", contador, " o. valor: ")
      leia(numero)

      // Verifica se é o primeiro número ou se é maior que o atual maior
      se (contador == 1 ou numero > maior) {
        maior = numero
      }
      
      soma = soma + numero
      contador++
    }
    
    escreva("\nA soma de todos os valores foi: ", soma)
    escreva("\nO maior número foi: ", maior)
  }
}