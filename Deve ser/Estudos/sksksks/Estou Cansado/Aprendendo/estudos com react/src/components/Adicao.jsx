import React from 'react'

function Adicao() {
    function resultado() {
        let num1 = Number(prompt("Digite o Primeiro Número"))
        let num2 = Number(prompt("Digite o Segundo Número"))
        let soma = 0

        soma = num1 + num2

        alert("A soma dos números é " + soma)

    }
  return (
    <div>
      <h2>Vai funcionar?</h2>
      <button onClick={resultado}>Resultado</button>
    </div>
  )
}

export default Adicao
