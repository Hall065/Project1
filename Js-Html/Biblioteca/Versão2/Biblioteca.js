let biblioteca = [];
let livroParaAlterar = null;

function mostrarSecao(secao) {
    document.getElementById("cadastro").classList.add("hidden");
    document.getElementById("consulta").classList.add("hidden");
    document.getElementById("alterar").classList.add("hidden");

    document.getElementById(secao).classList.remove("hidden");
}


function adicionarLivro() {
    const titulo = document.getElementById("titulo").value; 
    const autor = document.getElementById("autor").value;
    const ano = parseInt(document.getElementById("ano").value);

    if (titulo && autor && ano) {
        biblioteca.push({ titulo, autor, ano });
        document.getElementById("titulo").value = "";
        document.getElementById("autor").value = "";
        document.getElementById("ano").value = "";
        atualizarLista();
        alert("Livro adicionado com sucesso!");
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function atualizarLista() {
    let lista = document.getElementById("lista-livros");
    lista.innerHTML = "";

    biblioteca.forEach(livro => {
        let linha = `<tr>
                        <td>${livro.titulo}</td>
                        <td>${livro.autor}</td>
                        <td>${livro.ano}</td>
                    </tr>`;
        lista.innerHTML += linha;
    });
}

function buscarLivro() {
    const busca = document.getElementById("busca").value.toLowerCase();
    const resultados = biblioteca.filter((livro) => 
        livro.titulo.toLowerCase().includes(busca)
    );
    atualizarLista(resultados);
}
