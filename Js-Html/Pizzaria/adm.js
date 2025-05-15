let pizzaria = [];

function mostrarSecao(secao) {
  const secoes = ['adicionar', 'consultar', 'alterar', 'venda', 'relatorio-vendas'];

  //Esconde todas as seções
  secoes.forEach(id => document.getElementById(id).classList.add("hidden"));

  //Monstra a seção selecionada
  document.getElementById(secao).classList.remove("hidden");
}


// Função para adicionar uma nova pizza.
function adicionarPizza() {
  const nome = document.getElementById("nome").value;
  const conteudo = document.getElementById("conteudo").value;
  const categoria = document.getElementById("categoria").value;

  if (nome && conteudo && categoria) {
    pizzaria.push({ nome, conteudo, categoria });
    document.getElementById("nome").value = "";
    document.getElementById("conteudo").value = "";
    document.getElementById("categoria").value = "";
    atualizarLista();
    alert("Pizza adicionada com sucesso!");
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}

// Função para buscar uma pizza.
function buscarPizza() {
  const busca = document.getElementById("busca").value.toLowerCase();
  const resultados = pizzaria.filter((pizza) =>
    pizza.nome.toLowerCase().includes(busca)
  );
  atualizarLista(resultados);
}

// Função para alterar uma pizza.
let pizzaParaAlterar = null;

function buscarPizzaParaAlterar() {
  const busca = document.getElementById("busca-alterar").value.toLowerCase();

  if (!busca) {
    // Se o campo está vazio, esconde o form e limpa a variável
    pizzaParaAlterar = null;
    document.getElementById("form-alterar").classList.add("hidden");
    return;
  }

  pizzaParaAlterar = pizzaria.find((pizza) =>
    pizza.nome.toLowerCase().includes(busca)
  );

  if (pizzaParaAlterar) {
    document.getElementById("form-alterar").classList.remove("hidden");
    document.getElementById("novo-nome").value = pizzaParaAlterar.nome;
    document.getElementById("novo-conteudo").value = pizzaParaAlterar.conteudo;
    document.getElementById("nova-categoria").value = pizzaParaAlterar.categoria;
  } else {
    pizzaParaAlterar = null;
    document.getElementById("form-alterar").classList.add("hidden");
    // opcional: mostrar uma mensagem mais discreta (ex: um span com texto "Pizza não encontrada")
  }
}

// Função para alterar os dados da pizza.
function alterarPizza() {
  if (!pizzaParaAlterar) {
    alert("Por favor, busque e selecione uma pizza para alterar.");
    return;
  }

  const novoNome = document.getElementById("novo-nome").value.trim();
  const novoConteudo = document.getElementById("novo-conteudo").value.trim();
  const novaCategoria = document.getElementById("nova-categoria").value.trim();

  if (novoNome && novoConteudo && novaCategoria) {
    pizzaParaAlterar.nome = novoNome;
    pizzaParaAlterar.conteudo = novoConteudo;
    pizzaParaAlterar.categoria = novaCategoria;

    atualizarLista();
    alert("Pizza alterada com sucesso!");
    document.getElementById("form-alterar").classList.add("hidden");
    document.getElementById("busca-alterar").value = "";
    pizzaParaAlterar = null;
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}

// Função para atualizar a lista de pizzas.
function atualizarLista(lista = pizzaria) {
  const tabela = document.getElementById("lista-pizzas");
  tabela.innerHTML = "";

  lista.forEach((pizza) => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
      <td>${pizza.nome}</td>
      <td>${pizza.conteudo}</td>
      <td>${pizza.categoria}</td>
    `;
    tabela.appendChild(linha);
  });
}

// --- Registro de Vendas ---//
let vendas = []; // Array para armazenar as vendas

function registrarVenda() {
  const nomePizza = document.getElementById("venda-nome").value;
  const preco = parseFloat(document.getElementById("venda-preco").value);
  const comprador = document.getElementById("venda-comprador").value;

  if (nomePizza && !isNaN(preco) && comprador) {
    const listaVendas = document.getElementById("lista-vendas");
    const item = document.createElement("li");
    item.textContent = `Pizza: ${nomePizza} - Preço: R$${preco.toFixed(2)} - Comprador: ${comprador}`;
    listaVendas.appendChild(item);

    // Adiciona a venda ao array de vendas
    vendas.push({ nomePizza, preco, comprador });

    // Limpar os campos
    document.getElementById("venda-nome").value = "";
    document.getElementById("venda-preco").value = "";
    document.getElementById("venda-comprador").value = "";
  } else {
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

  let totalVendas = 0;

    vendas.forEach((venda) => {
      const linha = document.createElement("tr");
      linha.innerHTML = `
        <td>${venda.nomePizza}</td>
        <td>R$${parseFloat(venda.preco).toFixed(2)}</td>
        <td>${venda.comprador}</td>
      `;
      tabelaRelatorio.appendChild(linha);

      totalVendas += parseFloat(venda.preco);
    });

    // Linha de total
    const linhaTotal = document.createElement("tr");
    linhaTotal.innerHTML = `
      <td><strong>Total de Vendas:</strong></td>
      <td><strong>R$${totalVendas.toFixed(2)}</strong></td>
      <td></td>
    `;
    tabelaRelatorio.appendChild(linhaTotal);

    document.getElementById("relatorio-vendas").classList.remove("hidden");
  }

  // Função do botão "Voltar" para o Login
  function voltarLogin() {
  window.location.href = "login.html";
}
