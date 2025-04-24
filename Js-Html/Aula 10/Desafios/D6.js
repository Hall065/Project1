function comprarRoupa() {
    let tipo = prompt("Digite o tipo de roupa (camisa, calça, vestido):").toLowerCase();
    let preco;

    switch (tipo) {
        case "camisa":
            preco = 50;
            break;
        case "calça":
            preco = 80;
            break;
        case "vestido":
            preco = 120;
            break;
        default:
            alert("Tipo de roupa inválido!");
            return;
    }

    let quantidade = parseInt(prompt("Quantas unidades deseja comprar?"));
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Quantidade inválida!");
        return;
    }

    let total = preco * quantidade;
    let desconto = total > 100 ? total * 0.10 : 0;
    let totalFinal = total - desconto;

    let resultado = document.getElementById("resumoCompra");
    resultado.innerHTML = `
        <h2>Resumo da Compra</h2>
        <p><strong>Tipo de roupa:</strong> ${tipo}</p>
        <p><strong>Preço unitário:</strong> R$ ${preco.toFixed(2)}</p>
        <p><strong>Quantidade:</strong> ${quantidade}</p>
        <p><strong>Total:</strong> R$ ${total.toFixed(2)}</p>
        <p><strong>Desconto:</strong> R$ ${desconto.toFixed(2)}</p>
        <p><strong>Total Final:</strong> R$ ${totalFinal.toFixed(2)}</p>
    `;
}
