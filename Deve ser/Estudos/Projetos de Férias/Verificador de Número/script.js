const botao = document.getElementById("verificar");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", function() {
    let numero = Number(document.getElementById("numero").value);

    if (numero === 0) {
        resultado.textContent = "O número é zero";

    } else {
        if (numero > 0) {
            resultado.textContent = "O número é positivo e ";

        } else {
            resultado.textContent = "O número é negativo e ";
        }

        if (numero % 2 === 0) {
            resultado.textContent += "par"

        } else {
            resultado.textContent += "impar"
        }
    }
});