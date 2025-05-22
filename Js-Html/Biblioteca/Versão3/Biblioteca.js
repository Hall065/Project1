let biblioteca = [];
let livroParaAlterar = null;

function mostrarSecao(secao) {
  // Esconde todas as seções
  document.getElementById("cadastro").classList.add("hidden");
  document.getElementById("consulta").classList.add("hidden");
  document.getElementById("alterar").classList.add("hidden");

  // Mostra a seção selecionada
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

function buscarLivro() {
  const busca = document.getElementById("busca").value.toLowerCase();
  const resultados = biblioteca.filter((livro) =>
    livro.titulo.toLowerCase().includes(busca)
  );
  atualizarLista(resultados);
}

function buscarLivroParaAlterar() {
  const busca = document.getElementById("busca-alterar").value.toLowerCase();
  livroParaAlterar = biblioteca.find((livro) =>
    livro.titulo.toLowerCase().includes(busca)
  );

  if (livroParaAlterar) {
    document.getElementById("form-alterar").classList.remove("hidden");
    document.getElementById("novo-titulo").value = livroParaAlterar.titulo;
    document.getElementById("novo-autor").value = livroParaAlterar.autor;
    document.getElementById("novo-ano").value = livroParaAlterar.ano;
  } else {
    alert("Livro não encontrado.");
  }
}

function alterarLivro() {
  if (livroParaAlterar) {
    const novoTitulo = document.getElementById("novo-titulo").value;
    const novoAutor = document.getElementById("novo-autor").value;
    const novoAno = parseInt(document.getElementById("novo-ano").value);

    if (novoTitulo && novoAutor && novoAno) {
      livroParaAlterar.titulo = novoTitulo;
      livroParaAlterar.autor = novoAutor;
      livroParaAlterar.ano = novoAno;

      atualizarLista();
      alert("Livro alterado com sucesso!");
      document.getElementById("form-alterar").classList.add("hidden");
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  }
}

function atualizarLista(lista = biblioteca) {
  const tabela = document.getElementById("lista-livros");
  tabela.innerHTML = "";

  lista.forEach((livro) => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
      <td>${livro.titulo}</td>
      <td>${livro.autor}</td>
      <td>${livro.ano}</td>
    `;
    tabela.appendChild(linha);
  });
}

let emprestimos = [];

function realizarEmprestimo() {
  const titulo = document.getElementById("emprestimo-titulo").value;
  const nomeUsuario = document.getElementById("emprestimo-nome").value;

  if (titulo && nomeUsuario) {
    const livro = biblioteca.find(
      (livro) => livro.titulo.toLowerCase() === titulo.toLowerCase()
    );

    if (livro) {
      emprestimos.push({ titulo: livro.titulo, usuario: nomeUsuario });
      atualizarListaEmprestimos();
      alert("Empréstimo realizado com sucesso!");
      document.getElementById("emprestimo-titulo").value = "";
      document.getElementById("emprestimo-nome").value = "";
    } else {
      alert("Livro não encontrado na biblioteca.");
    }
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}

function atualizarListaEmprestimos() {
  const listaEmprestimos = document.getElementById("lista-emprestimos");
  listaEmprestimos.innerHTML = "";

  emprestimos.forEach((emprestimo) => {
    const item = document.createElement("li");
    item.textContent = `Livro: ${emprestimo.titulo} - Usuário: ${emprestimo.usuario}`;
    listaEmprestimos.appendChild(item);
  });
}

// --- Registro de Vendas ---//
let vendas = [];// Array para armazenar as vendas

function registrarVenda() {
    const titulo = document.getElementById("venda-titulo").value;
    const preco = parseFloat(document.getElementById("venda-preco").value);
    const comprador = document.getElementById("venda-comprador").value;

    if(titulo && preco && comprador) {
        const listaVendas = document.getElementById("lista-vendas");
        const item = document.createElement("li");
        item.textContent = `Título: ${titulo} - Preço: R$${preco.toFixed(2)} - Comprador: ${comprador}`;
        listaVendas.appendChild(item);

        //Adiciona a venda ao array de vendas
        vendas.push({ titulo, preco, comprador });

        //Limpar os campos
        document.getElementById("venda-titulo").value = "";
        document.getElementById("venda-preco").value = "";
        document.getElementById("venda-comprador").value = "";
    }
    else {
        alert("Por favor, preencha todos os campos.");
    }
}

// Relatório de Vendas
function gerarRelatorioVendas() {
    const tabelaRelatorio = document.getElementById("tabela-relatorio-vendas");
    tabelaRelatorio.innerHTML = ""; // Limpa a tabela antes de gerar o relatório

    if (vendas.length === 0) {
        alert("Nenhuma venda registrada.");
        return;
    }
    
    let totalVendas = 0; // Variável para armazenar o total de vendas

    if (totalVendas.length === 0) {
        alert("Valor de Venda não registrado.!");
        return;
    }

    vendas.forEach((venda) => {
        const linha = document.createElement("tr");
        linha.innerHTML = `
            <td>${venda.titulo}</td>
            <td>R$${parseFloat(venda.preco).toFixed(2)}</td>
            <td>${venda.comprador}</td>
        `;
        tabelaRelatorio.appendChild(linha);

        //Somar o preço ao total de vendas
        totalVendas += parseFloat(venda.preco);
    });

    // Adiciona uma linha para o total de vendas
    const linhaTotal = document.createElement("tr");
    linhaTotal.innerHTML = `
        <td><strong>Total de Vendas:</strong></td>
        <td><strong>R$${totalVendas.toFixed(2)}</strong></td>
        <td></td>
    `;
    tabelaRelatorio.appendChild(linhaTotal);

    // Exibe a área de relatório
    document.getElementById("relatorio-vendas").classList.remove("hidden");
}

function exibirMensagem(texto, tipo) {
  const mensagem = document.getElementById("mensagem");
  mensagem.textContent = texto;
  mensagem.className = `mensagem ${tipo}`;
  mensagem.classList.remove("hidden");

  setTimeout(() => {
    mensagem.classList.add("hidden");
  }, 3000);
}

function validarLogin(){
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  const usuarioCorreto = "admin";
  const senhaCorreta = "1234";

  if (usuario === usuarioCorreto && senha === senhaCorreta) {
    exibirMensagem("Login realizado com sucesso!", "sucesso");
    setTimeout(() => {
      window.location.href = "Biblioteca.html";
    }, 1000);
  } else {
    exibirMensagem("Usuário ou senha inválidos.", "erro");
  }
}