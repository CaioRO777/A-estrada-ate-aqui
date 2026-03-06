programa {
  inteiro salto, contador = 0, valor
  funcao inicio() {
    escreva("Quer que conte até quanto? ")
    leia(valor)
    escreva("Quer que salte até qaunto? ")
    leia(salto)

    enquanto(contador <= valor){
      escreva("\n", contador)
      contador = contador + salto
    }
    escreva("\nTerminei de contar ")
    
  }
}
