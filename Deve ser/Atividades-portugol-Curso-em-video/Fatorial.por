programa {
  inteiro cont , num, fato
  cadeia resp
  funcao inicio() {

    faca{
    
    escreva("Digite um número: ")
    leia(num)
    cont = num
    fato = 1

    faca{
      fato = fato * cont
      cont--
    }enquanto(cont >= 1)
    escreva("\nO valor fatorial de ", num, " é igual a ", fato)
    escreva("\nQuer Continuar? [s/n] ")
    leia(resp)
    }enquanto(resp == "s")
  }
}
