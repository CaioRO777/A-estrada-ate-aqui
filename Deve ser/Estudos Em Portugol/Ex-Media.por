programa {
  real n1, n2, media
  funcao inicio() {
    escreva("Diigte a Primeira Nota: ")
    leia(n1)

    escreva("Digite a Segunda Nota: ")
    leia(n2)

    media = (n1 + n2) / 2

    se(media >= 7.0){
      escreva("Aprovado!!! ")

    }
    senao se(media <= 6.9){
      escreva("Você está em recuperação. ")

    }senao{
      escreva("Você está REPROVADO!!! ")

    }
    escreva("Sua média é ", media)
  }
}
