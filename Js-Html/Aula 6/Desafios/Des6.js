function comprarFilme() {
    let filme = prompt("Qual filme deseja comprar?");
    let preco = 29.99;
    let confirmacao = confirm(`O filme "${filme}" custa R$${preco.toFixed(2)}. Deseja confirmar a compra?`);

    if (confirmacao) {
        alert(`Compra confirmada! Você adquiriu "${filme}".`);
    } else {
        alert("Compra cancelada.");
    }
}

function alugarFilme() {
    let filme = prompt("Qual filme deseja alugar?");
    let preco = 9.99;
    let confirmacao = confirm(`O aluguel do filme "${filme}" custa R$${preco.toFixed(2)}. Confirmar aluguel?`);

    if (confirmacao) {
        alert(`Aluguel realizado! Você tem 48 horas para assistir "${filme}".`);
    } else {
        alert("Aluguel cancelado.");
    }
}

function assinarPlano() {
    let plano = prompt(
        "Escolha um plano de assinatura:\n" +
        "1. Básico - R$ 19,90/mês\n" +
        "2. Padrão - R$ 39,90/mês\n" +
        "3. Premium - R$ 59,90/mês"
    );

    let preco;
    let descricao;

    if (plano === "1") {
        preco = 19.90;
        descricao = "Básico";
    } else if (plano === "2") {
        preco = 39.90;
        descricao = "Padrão";
    } else if (plano === "3") {
        preco = 59.90;
        descricao = "Premium";
    } else {
        alert("Opção inválida!");
        return;
    }

    let confirmacao = confirm(`O plano "${descricao}" custa R$${preco.toFixed(2)} por mês. Deseja assinar?`);

    if (confirmacao) {
        alert(`Assinatura confirmada! Você agora é um usuário do plano "${descricao}".`);
    } else {
        alert("Assinatura cancelada.");
    }
}
