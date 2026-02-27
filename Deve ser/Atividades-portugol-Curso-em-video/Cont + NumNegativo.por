programa {
  inteiro n, cont, totN
  funcao inicio() {
    cont = 1
    totN = 0
     faca{
      escreva("Digite um Número: ")
      leia(n)

      se(n < 0 ){
        totN = totN + 1
      }

      cont++
    }enquanto(cont <= 5)
    escreva("Foram digitados ", totN , " valores negativos. ")
    
    
  }
}
