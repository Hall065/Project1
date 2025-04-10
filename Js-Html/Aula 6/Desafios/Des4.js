function calcularTroco() {
    let produto = prompt("Qual produto você deseja comprar?");
    let preco = parseFloat(prompt(`Qual o valor do ${produto}?`));
    let pagamento = parseFloat(prompt("Qual valor você entregou ao caixa?"));

    if (isNaN(preco) || isNaN(pagamento)) {
        alert("Por favor, insira valores numéricos válidos.");
        return;
    }

    let troco = pagamento - preco;

    if (troco < 0) {
        alert(`O valor pago é insuficiente! Falta R$${Math.abs(troco).toFixed(2)}.`);
    } else {
        alert(
            `Você comprou: ${produto}\n` +
            `Valor: R$${preco.toFixed(2)}\n` +
            `Valor pago: R$${pagamento.toFixed(2)}\n` +
            `Troco: R$${troco.toFixed(2)}`
        );
    }
}
