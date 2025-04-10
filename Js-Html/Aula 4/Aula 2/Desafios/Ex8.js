/*8. Streaming
Escreva um programa que apresente as opções de compra de serviços de
streaming e apresente os valores de compra com o plano incluso.*/

function calcularValorStreaming() {
    let tipo = prompt(
        "Escolha o plano de streaming:\n" +
        "1. Básico - R$ 29.99\n" +
        "2. Pro - R$ 49.99\n" +
        "3. Premium - R$ 69.99\n" +
        "Digite o número da opção:"
    );

    let planoMensal = 0;
    let descricao = "";

    if (tipo === "1") {
        planoMensal = 29.99;
        descricao = "Básico";
    } else if (tipo === "2") {
        planoMensal = 49.99;
        descricao = "Pro";
    } else if (tipo === "3") {
        planoMensal = 69.99;
        descricao = "Premium";
    } else {
        alert("Opção inválida! Tente novamente.");
        return;
    }

    let meses = parseInt(prompt("Quantos meses você deseja assinar?"));

    if (isNaN(meses) || meses <= 0) {
        alert("Quantidade inválida!");
        return;
    }

    let total = planoMensal * meses;

    alert(
        `Resumo da compra:\n` +
        `Plano escolhido: ${descricao}\n` +
        `Duração: ${meses} meses\n` +
        `Valor mensal: R$ ${planoMensal.toFixed(2)}\n` +
        `Total a pagar: R$ ${total.toFixed(2)}`
    );
}

calcularValorStreaming();
