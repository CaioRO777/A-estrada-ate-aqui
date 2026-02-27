let display = document.getElementById('display');
let num1 = '';
let num2 = '';
let operacao = null;
let resultado = 0;

function adicionarNumero(numero) {
  if (operacao === null) {
    num1 += numero;
    display.value = num1;
  } else {
    num2 += numero;
    display.value = num2;
  }
}

function selecionarOperacao(op) {
  if (num1 === '') return;
  operacao = op;
  display.value = '';
}

function calcular() {
  if (num1 === '' || num2 === '' || operacao === null) return;
  
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);
  
  switch(operacao) {
    case '+':
      resultado = n1 + n2;
      break;
    case '-':
      resultado = n1 - n2;
      break;
    case '*':
      resultado = n1 * n2;
      break;
    case '/':
      resultado = n2 !== 0 ? n1 / n2 : 0;
      break;
  }
  
  display.value = resultado;
  num1 = resultado.toString();
  num2 = '';
  operacao = null;
}

function limpar() {
  num1 = '';
  num2 = '';
  operacao = null;
  display.value = '';
}