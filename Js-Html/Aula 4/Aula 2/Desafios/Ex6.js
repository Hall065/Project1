/*6. Loja de Móveis
Escreva um programa para representar um móvel com propriedades como
tipo (cadeira, mesa, etc.), material, cor e preço. Em seguida, crie uma função
para adicionar novos móveis a uma lista.*/

let lojaMoveis = [];

function adicionarMovel() {
    let tipo = prompt("Digite o tipo do móvel (cadeira, mesa, etc.):");
    let material = prompt("Digite o material do móvel:");
    let cor = prompt("Digite a cor do móvel:");
    let preco = parseFloat(prompt("Digite o preço do móvel:"));

    lojaMoveis.push({ tipo, material, cor, preco });
    alert("Móvel adicionado com sucesso!");
}

function listarMoveis() {
    if (lojaMoveis.length > 0) {
        let mensagem = "Lista de móveis na loja:\n";
        lojaMoveis.forEach((movel) => {
            mensagem += `Tipo: ${movel.tipo}, Material: ${movel.material}, Cor: ${movel.cor}, Preço: R$ ${movel.preco.toFixed(2)}\n`;
        });
        alert(mensagem);
    } else {
        alert("A loja está vazia.");
    }
}

function exibirMenu() {
    let opcao;
    do {
        opcao = prompt(
            "Menu da Loja de Móveis:\n" +
            "1. Adicionar Móvel\n" +
            "2. Listar Móveis\n" +
            "3. Sair\n" +
            "Escolha uma opção:"
        );

        if (opcao === "1") {
            adicionarMovel();
        } else if (opcao === "2") {
            listarMoveis();
        } else if (opcao !== "3") {
            alert("Opção inválida! Tente novamente.");
        }

    } while (opcao !== "3");

    alert("Saindo da loja de móveis...");
}

exibirMenu();
