function verificarCarro() {
    let modelo = prompt("Digite o modelo do carro (ex: Gol, Civic, Corolla):").toLowerCase();
    let preco, ano, combustivel;

    switch (modelo) {
        case "gol":
            preco = 45000;
            ano = 2020;
            combustivel = "Flex";
            break;
        case "civic":
            preco = 95000;
            ano = 2022;
            combustivel = "Gasolina";
            break;
        case "corolla":
            preco = 105000;
            ano = 2023;
            combustivel = "Híbrido";
            break;
        default:
            alert("Modelo não encontrado!");
            return;
    }

    let servico1 = parseFloat(prompt("Valor da manutenção:"));
    let servico2 = parseFloat(prompt("Valor de modificações extras:"));
    let total = servico1 + servico2;

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `
        <h2>Relatório do Atendimento</h2>
        <p><strong>Modelo:</strong> ${modelo.toUpperCase()}</p>
        <p><strong>Preço Médio:</strong> R$ ${preco.toFixed(2)}</p>
        <p><strong>Ano de Fabricação:</strong> ${ano}</p>
        <p><strong>Combustível:</strong> ${combustivel}</p>
        <p><strong>Total dos Serviços:</strong> R$ ${total.toFixed(2)}</p>
    `;
}
