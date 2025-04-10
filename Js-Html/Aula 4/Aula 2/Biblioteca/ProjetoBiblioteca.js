let biblioteca = [];

function adicionarLivro() {
    let titulo = prompt("Digite o título do livro:");
    let autor = prompt("Digite o autor do livro:");
    let ano = parseInt(prompt("Digite o ano de publicação do do livro:"));
    biblioteca.push({ titulo, autor, ano });
    alert("Livro adicionado com sucesso!");
}

function listarLivros() {
    if (biblioteca.length > 0) {
        let mensagem = "Lista de liros na biblioteca\n";
        biblioteca.forEach((Livro) => {
            mensagem += `Título: ${Livro.titulo}, Autor: ${Livro.autor}, Ano: ${Livro.ano}\n`;
        });
        alert(mensagem);
    }   else {
        alert("A biblioteca está vazia.")
    }
}

function exibirMenu() {
    return prompt(
        "Menu:\n" +
        "1. Adicionar Livro\n" +
        "2. Buscar Livro\n" +
        "3. Listar Livro\n" +
        "4. Sair\n" +
        "Escolha uma opção:"
    );
}

function exibirMenu() {
    let opcao;
    do {
        opcao = prompt(
            "Menu da Biblioteca:\n" +
            "1. Adicionar Livro\n" +
            "2. Buscar Livro\n" +
            "3. Listar Livros\n" +
            "4. Sair\n" +
            "Escolha uma opção:"
        );

        if (opcao === "1") {
            adicionarLivro();
        } else if (opcao === "2") {
            buscarLivro();
        } else if (opcao === "3") {
            listarLivros();
        } else if (opcao !== "4") {
            alert("Opção inválida! Tente novamente.");
        }

    } while (opcao !== "4");

    alert("Saindo da biblioteca...");
}

exibirMenu();