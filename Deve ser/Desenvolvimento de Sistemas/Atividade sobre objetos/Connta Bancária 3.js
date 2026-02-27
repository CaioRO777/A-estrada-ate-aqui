/*## Exercício 3: Conta Bancária
Crie um objeto `contaBancaria` com:
- titular
- saldo
- tipo (corrente ou poupança)

Adicione dois métodos:
- `depositar(valor)` - adiciona o valor ao saldo
- `sacar(valor)` - subtrai o valor do saldo (apenas se houver saldo suficiente)

---*/

let contaBancaria = {
    titular: "Jorge",
    saldo: 500000,
    tipo: "poupança",

    valor: function(x){
        let depositar = 200000
        depositar += x
       return depositar
    },

    sacar: function(x){
        let sacarSaldo = 200000
        sacarSaldo -= x
        return sacarSaldo
    }
}
console.log (contaBancaria.valor(contaBancaria.saldo))
console.log (contaBancaria.sacar(contaBancaria.saldo))


