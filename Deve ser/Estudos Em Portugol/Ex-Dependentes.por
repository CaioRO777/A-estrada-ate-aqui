programa {

  cadeia nome
  real sal, novoSal
  inteiro dep

  funcao inicio() {

    escreva(" Qual o nome do Funcionario? ")
    leia(nome)

    escreva("Qual o sálario do Funcionario? ")
    leia(sal)

    escreva("Quall a quantidade de dependentes? ")
    leia(dep)

    escolha(dep){
      caso 0:
        novoSal = sal + (sal * 5 / 100)
        pare

      caso 1:
        novoSal = sal + (sal * 10 / 100)
        pare

      caso 2:
        novoSal = sal + (sal * 15 / 100)
        pare

      caso contrario:
        novoSal = sal + (sal * 18 / 100)
        pare

    }
    escreva("O novo salário de ", nome , " será ", novoSal)
    
  }
}
