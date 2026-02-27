programa {
  inteiro d
  real valor
  funcao inicio() {
    escreva("\n-----------------------")
    escreva("   \nCriança Esperança ")
    escreva("\n-----------------------")
    escreva(" \nMuito Obrigado por Ajudar ")
    escreva("\n[1] Para doar R$10 ")
    escreva("\n[2] Para doar R$25 ")
    escreva("\n[3] Para doar R$30 ")
    escreva("\n[4] Para doar qualquer valor ")
    escreva("\n[5] Para cancelar\n ")
    leia(d)

    escolha(d){
      caso 1:
        valor = 10
      pare
      caso 2:
        valor = 25
      pare
      caso 3:
        valor = 30
      pare
      caso 4:
        escreva(" Qual o valor desejado R$ ", valor)
        leia(valor)
      pare
      caso 5:
        valor = 0
      pare
    }
    escreva("\n---------------------")
    escreva("\nSua Doação foi de R$ ", valor)
    escreva("\nMuito Obrigado ")
    escreva("\n---------------------")
  }
}
