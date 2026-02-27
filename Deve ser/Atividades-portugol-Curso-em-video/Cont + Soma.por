programa {
  inteiro n,  s
  cadeia resp
  funcao inicio() {
    s = 0
    resp = "S"

    faca{
      escreva("Digite o ",  "o. valor ==> ")
      leia(n)
      s = s + n
      escreva("Você quer continuar? [S/N] ")
      leia(resp)
      n++
}enquanto(resp == "S")
    escreva("A soma de todos os valores digitados é ", s)
  }
}
