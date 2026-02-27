let carrinho = [15, 8, 42, 5];

for (let i = 0; i < carrinho.length; i++) {
  let preco_atual = carrinho[i];

  if (preco_atual > 30) {
    let desconto = preco_atual * 0.2;
    let preco_final = preco_atual - desconto;

    console.log("Desconto aplicado! Vai pagar R$ " + preco_final);
  } else {
    console.log("Preço normal: R$ " + preco_atual);
  }
}
