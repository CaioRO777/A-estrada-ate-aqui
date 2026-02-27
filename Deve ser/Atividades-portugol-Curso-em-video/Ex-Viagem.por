programa {
  inteiro dinheiro
  funcao inicio() {
    escreva("Quanto de dinheiro você tem: ")
    leia(dinheiro)

    se(dinheiro >= 10000){
      escreva("Partiu Disney!!! ")
    }
    senao se (dinheiro >= 5000 e dinheiro < 10000){
      escreva("Visitar cidade natal ")

    }senao{
      escreva(" Ficar em casa... ")
    }
    escreva("Você tem R$ ", dinheiro)
  }
}
