// === LOGIN ===
function exibirMensagem(texto, tipo) {
  const mensagem = document.getElementById("mensagem");
  mensagem.textContent = texto;
  mensagem.className = `mensagem ${tipo}`;
  mensagem.classList.remove("hidden");

  setTimeout(() => {
    mensagem.classList.add("hidden");
  }, 3000);
}

const usuarios = [
  { email: "teste@email.com", senha: "1234", tipo: "cliente" },
  { email: "admin@pizza.com", senha: "pizza1234", tipo: "admin" }
];

document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("btn-entrar")) {
    document.getElementById("btn-entrar").addEventListener("click", function () {
      const email = document.getElementById("email").value;
      const senha = document.getElementById("senha").value;

      const usuarioValido = usuarios.find(user => user.email === email && user.senha === senha);

      if (usuarioValido) {
        exibirMensagem("Login realizado com sucesso!", "sucesso");
        setTimeout(() => {
          window.location.href = usuarioValido.tipo === "admin" ? "adm.html" : "inicial.html";
        }, 1000);
      } else {
        alert("Email ou senha inválidos!");
      }
    });

    document.getElementById("esqueci-senha").addEventListener("click", function (e) {
      e.preventDefault();
      alert("Função de recuperação de senha ainda não implementada!");
    });

    document.getElementById("criar-conta").addEventListener("click", function (e) {
      e.preventDefault();
      alert("Redirecionamento para página de cadastro em breve!");
    });
  }
});

// === INICIAL ===

//Botão de Sair
document.addEventListener("DOMContentLoaded", function () {
  const btnSair = document.getElementById("btn-sair");
  if (btnSair) {
    btnSair.addEventListener("click", () => {
      window.location.href = "login.html";
    });
  }
});

//Botão de Voltar
document.addEventListener("DOMContentLoaded", function () {
  const btnVoltar = document.getElementById("btn-voltar");
  if (btnVoltar) {
    btnVoltar.addEventListener("click", () => {
      window.location.href = "inicial.html";
    });
  }
});

// === ADMINISTRAÇÃO ===
let pizzaria = [];

function mostrarSecao(secao) {
  const secoes = ['adicionar', 'consultar', 'alterar', 'venda', 'relatorio-vendas'];
  secoes.forEach(id => document.getElementById(id).classList.add("hidden"));
  document.getElementById(secao).classList.remove("hidden");
}

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

function buscarPizza() {
  const busca = document.getElementById("busca").value.toLowerCase();
  const resultados = pizzaria.filter((pizza) =>
    pizza.nome.toLowerCase().includes(busca)
  );
  atualizarLista(resultados);
}

let pizzaParaAlterar = null;

function buscarPizzaParaAlterar() {
  const busca = document.getElementById("busca-alterar").value.toLowerCase();

  if (!busca) {
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
  }
}

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

// Registro de Vendas
let vendas = [];

function registrarVenda() {
  const nomePizza = document.getElementById("venda-nome").value;
  const preco = parseFloat(document.getElementById("venda-preco").value);
  const comprador = document.getElementById("venda-comprador").value;

  if (nomePizza && !isNaN(preco) && comprador) {
    const listaVendas = document.getElementById("lista-vendas");
    const item = document.createElement("li");
    item.textContent = `Pizza: ${nomePizza} - Preço: R$${preco.toFixed(2)} - Comprador: ${comprador}`;
    listaVendas.appendChild(item);

    vendas.push({ nomePizza, preco, comprador });

    document.getElementById("venda-nome").value = "";
    document.getElementById("venda-preco").value = "";
    document.getElementById("venda-comprador").value = "";
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}

function gerarRelatorioVendas() {
  const tabelaRelatorio = document.getElementById("tabela-relatorio-vendas");
  tabelaRelatorio.innerHTML = "";

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

  const linhaTotal = document.createElement("tr");
  linhaTotal.innerHTML = `
    <td><strong>Total de Vendas:</strong></td>
    <td><strong>R$${totalVendas.toFixed(2)}</strong></td>
    <td></td>
  `;
  tabelaRelatorio.appendChild(linhaTotal);

  document.getElementById("relatorio-vendas").classList.remove("hidden");
}

function voltarLogin() {
  window.location.href = "login.html";
}

// === CARDÁPIO ===
// (em breve)

// === PEDIDOS ===
document.addEventListener('DOMContentLoaded', () => {
  const btnMais = document.querySelector('.btn-quantidade[data-op="mais"]');
  const btnMenos = document.querySelector('.btn-quantidade[data-op="menos"]');
  const inputQuantidade = document.getElementById('quantidade');
  const selectPizza = document.getElementById('select-pizza');
  const obsPizza = document.getElementById('obs-pizza');
  const btnAdicionar = document.getElementById('btn-adicionar-carrinho');
  const listaCarrinho = document.querySelector('.lista-carrinho');
  const carrinhoVazio = document.querySelector('.carrinho-vazio');

  btnMais.addEventListener('click', () => {
    let qtd = parseInt(inputQuantidade.value);
    inputQuantidade.value = qtd + 1;
  });

  btnMenos.addEventListener('click', () => {
    let qtd = parseInt(inputQuantidade.value);
    if (qtd > 1) inputQuantidade.value = qtd - 1;
  });

  btnAdicionar.addEventListener('click', () => {
    const pizzaSelecionada = selectPizza.value;
    const pizzaTexto = selectPizza.options[selectPizza.selectedIndex]?.text || '';
    const quantidade = parseInt(inputQuantidade.value);
    const observacao = obsPizza.value.trim();

    if (!pizzaSelecionada) {
      alert('Por favor, selecione um sabor de pizza.');
      return;
    }

    // Criar item do carrinho
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${pizzaTexto}</strong> x ${quantidade}
      ${observacao ? `<br><em>Obs: ${observacao}</em>` : ''}
    `;

    listaCarrinho.appendChild(li);

    // Limpar formulário
    selectPizza.selectedIndex = 0;
    inputQuantidade.value = 1;
    obsPizza.value = '';

    // Atualizar mensagem do carrinho vazio
    carrinhoVazio.style.display = 'none';
  });
});

// === SOBRE ===
// (em breve)
