/*7. Parque de Diversões
Escreva um programa que calcule os valores de entrada e de opções para
tipos de ingressos. Ao final representar os valores e tipo de ingressos.*/

function calcularValorIngresso() {
    let tipo = prompt(
        "Escolha o tipo de ingresso:\n" +
        "1. Criança - R$ 15,00\n" +
        "2. Adulto - R$ 30,00\n" +
        "3. Idoso - R$ 20,00\n" +
        "Digite o número da opção:"
    );

    let preco = 0;
    let descricao = "";

    if (tipo === "1") {
        preco = 15;
        descricao = "Criança";
    } else if (tipo === "2") {
        preco = 30;
        descricao = "Adulto";
    } else if (tipo === "3") {
        preco = 20;
        descricao = "Idoso";
    } else {
        alert("Opção inválida! Tente novamente.");
        return;
    }

    let quantidade = parseInt(prompt("Quantos ingressos deseja comprar?"));
    
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Quantidade inválida!");
        return;
    }

    let total = preco * quantidade;

    alert(
        `Resumo da compra:\n` +
        `Tipo de ingresso: ${descricao}\n` +
        `Quantidade: ${quantidade}\n` +
        `Valor unitário: R$ ${preco.toFixed(2)}\n` +
        `Total a pagar: R$ ${total.toFixed(2)}`
    );
}

calcularValorIngresso();

