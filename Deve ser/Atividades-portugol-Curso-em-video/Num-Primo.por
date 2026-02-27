programa {
  inteiro cont, num, contDiv
  funcao inicio() {
    cont = 1
    contDiv = 0

    escreva("Digite um número: ")
    leia(num)
    
    faca {
      se(num % cont == 0) {  // Verifica se num é divisível por cont
        contDiv++
        escreva(cont, " ")  // Mostra os divisores
      }
      cont++
    } enquanto (cont <= num)  // Corrigido: enquanto
    
    escreva("\nAo todo existem ", contDiv, " valores divisíveis por ", num)
  }
}