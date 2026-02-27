let contador = 0

const valor = document.getElementById("valor");
const mais = document.getElementById("mais");
const menos = document.getElementById("menos");
const reset = document.getElementById("reset");


mais.addEventListener("click", function() {
    contador++;
    valor.textContent = contador;
});


menos.addEventListener("click", function() {
    if (contador > 0) {
        contador--;
        valor.textContent = contador;
    }
});

reset.addEventListener("click", function() {
    contador = 0
    valor.textContent = contador
});

