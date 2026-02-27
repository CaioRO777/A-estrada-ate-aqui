programa {
  inteiro c = 1 , q
  real r, d
  funcao inicio() {
    escreva("Quantas vezes você quer converter? ")
    leia(q)

    enquanto(c <= q){
      escreva("\nQual o valor em R$: ")
      leia(r)
      d = r /5.50
      escreva("O valor convertido é USD$ ", d)
      c++
    }
    
  }
}
