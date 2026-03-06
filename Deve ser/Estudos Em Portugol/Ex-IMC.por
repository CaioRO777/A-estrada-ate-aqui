programa { 
  real altura, peso, imc
   
  funcao inicio() {
    escreva("Digite sua altura(m): ")
    leia(altura)

    escreva("Digite seu peso(Kg): ")
    leia(peso)

    imc = peso / (altura * 2)

    escreva("IMC: ", imc)

    se(imc <17){
      escreva("\nMuito abixo da média!! ")
    }
    senao se(imc >= 17 e imc <= 18.5){
      escreva("\nAbaixo da média! ")
    }
    senao se(imc >= 18.5 e imc < 25){
      escreva("\nPeso ideal!! ")
    }
    senao se(imc >= 25 e imc < 30){
      escreva("\nSobrepeso!!!! ")
    }
    senao se(imc >= 30 e imc < 35){
      escreva("\nObesidade!!!!! ")
    }
    senao se(imc >= 35 e imc < 40){
      escreva("\nObesidade Severa!!!!!! ")

    }senao{
      escreva("\nObesidade Morbida!!!!!!!!!!!! ")
    }
  }
}
