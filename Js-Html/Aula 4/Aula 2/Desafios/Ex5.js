/*5. Loja de Discos
Escreva um programa para representar um disco com propriedades como
título, artista, ano de lançamento e preço.*/

let lojaDiscos = [];

function adicionarDisco() {
    let titulo = prompt("Digite o título do disco:");
    let artista = prompt("Digite o nome do artista/banda:");
    let ano = parseInt(prompt("Digite o ano de lançamento:"));
    let preço = parseFloat(prompt("Digite o preço do disco:"));
    
    lojaDiscos.push({ titulo, artista, ano, preço });
    alert("Disco adicionado com sucesso!");
}

function buscarDisco() {
    let tituloBusca = prompt("Digite o título do disco que deseja buscar:");
    let encontrado = lojaDiscos.find((disco) => disco.titulo.toLowerCase() === tituloBusca.toLowerCase());

    if (encontrado) {
        alert(`Disco encontrado!\nTítulo: ${encontrado.titulo}\nArtista: ${encontrado.artista}\nAno: ${encontrado.ano}\nPreço: ${encontrado.preço}`);
    } else {
        alert("Disco não encontrado.");
    }
}

function listarDiscos() {
    if (lojaDiscos.length > 0) {
        let mensagem = "Lista de discos na loja:\n";
        lojaDiscos.forEach((disco) => {
            mensagem += `Título: ${disco.titulo}, Artista: ${disco.artista}, Ano: ${disco.ano}, Preço: ${disco.preço}\n`;
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
            "Menu da Loja de Discos:\n" +
            "1. Adicionar Disco\n" +
            "2. Buscar Disco\n" +
            "3. Listar Discos\n" +
            "4. Sair\n" +
            "Escolha uma opção:"
        );

        if (opcao === "1") {
            adicionarDisco();
        } else if (opcao === "2") {
            buscarDisco();
        } else if (opcao === "3") {
            listarDiscos();
        } else if (opcao !== "4") {
            alert("Opção inválida! Tente novamente.");
        }

    } while (opcao !== "4");

    alert("Saindo da loja de discos...");
}

exibirMenu();

