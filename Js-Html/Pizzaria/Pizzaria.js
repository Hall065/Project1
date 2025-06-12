document.addEventListener("DOMContentLoaded", () => {
  // === LOGIN ===
  function exibirMensagem(texto, tipo) {
    const mensagem = document.getElementById("mensagem");
    if (!mensagem) return;
    mensagem.textContent = texto;
    mensagem.className = `mensagem ${tipo}`;
    mensagem.classList.remove("hidden");

    setTimeout(() => {
      mensagem.classList.add("hidden");
    }, 3000);
  }

  // Usuários fixos (admin + cliente de exemplo)
  const usuariosFixos = [
    { email: "admin@pizza.com", senha: "pizza1234", tipo: "admin" },
    { email: "teste@email.com", senha: "1234", tipo: "cliente" }
  ];

  // LOGIN
  const btnEntrar = document.getElementById("btn-entrar");
  if (btnEntrar) {
    btnEntrar.addEventListener("click", () => {
      const email = document.getElementById("email").value.trim();
      const senha = document.getElementById("senha").value;

      // Primeiro: procura nos usuários fixos
      const usuarioFixado = usuariosFixos.find(
        user => user.email === email && user.senha === senha
      );

      // Se não achou, tenta pegar do localStorage
      let usuarioLocal = null;
      const usuarioSalvo = localStorage.getItem(email);
      if (usuarioSalvo) {
        const usuarioObj = JSON.parse(usuarioSalvo);
        if (usuarioObj.senha === senha && usuarioObj.tipo === "cliente") {
          usuarioLocal = usuarioObj;
        }
      }

      const usuarioValido = usuarioFixado || usuarioLocal;

      if (usuarioValido) {
        exibirMensagem("Login realizado com sucesso!", "sucesso");
        setTimeout(() => {
          window.location.href = usuarioValido.tipo === "admin" ? "adm.html" : "inicial.html";
        }, 1000);
      } else {
        alert("Email ou senha inválidos!");
      }
    });
  }

  // Esqueci senha
  const linkEsqueciSenha = document.getElementById("esqueci-senha");
  if (linkEsqueciSenha) {
    linkEsqueciSenha.addEventListener("click", (e) => {
      e.preventDefault();
      const email = prompt("Digite o seu e-mail cadastrado:");

      if (!email) {
        alert("Você precisa digitar um e-mail!");
        return;
      }

      const usuario = localStorage.getItem(email);
      if (!usuario) {
        alert("E-mail não encontrado!");
        return;
      }

      const dados = JSON.parse(usuario);
      alert(`Sua senha é: ${dados.senha}`);
    });
  }

  // Criar conta
  const linkCriarConta = document.getElementById("criar-conta");
  if (linkCriarConta) {
    linkCriarConta.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "cadastro.html";
    });
  }

  // === INICIAL ===
  const btnSair = document.getElementById("btn-sair");
  if (btnSair) {
    btnSair.addEventListener("click", () => {
      window.location.href = "login.html";
    });
  }

  const btnVoltar = document.getElementById("btn-voltar");
  if (btnVoltar) {
    btnVoltar.addEventListener("click", () => {
      window.location.href = "inicial.html";
    });
  }

  // === ADMINISTRAÇÃO ===
  let pizzaria = JSON.parse(localStorage.getItem("pizzas")) || [];

  function mostrarSecao(secao) {
    const secoes = ["adicionar", "consultar", "alterar", "venda", "relatorio-vendas"];
    secoes.forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.classList.add("hidden");
    });
    const secaoAtiva = document.getElementById(secao);
    if (secaoAtiva) secaoAtiva.classList.remove("hidden");
  }

  function atualizarLista(lista = pizzaria) {
    const tabela = document.getElementById("lista-pizzas");
    if (!tabela) return;
    tabela.innerHTML = "";
    lista.forEach((pizza) => {
      const linha = document.createElement("tr");
      linha.innerHTML = `
        <td>${pizza.nome}</td>
        <td>${pizza.preco}</td>
        <td>${pizza.categoria}</td>
      `;
      tabela.appendChild(linha);
    });
  }

  function adicionarPizza() {
    const nome = document.getElementById("nome")?.value.trim();
    const preco = document.getElementById("preco")?.value.trim();

    const categoria = document.getElementById("categoria")?.value.trim();

    if (nome && preco && categoria) {
      const novaPizza = { nome, preco, categoria };
      pizzaria.push(novaPizza);
      localStorage.setItem("pizzas", JSON.stringify(pizzaria));

      // limpar campos
      document.getElementById("nome").value = "";
      document.getElementById("preco").value = "";
      document.getElementById("categoria").value = "";

      atualizarLista();
      alert("Pizza adicionada com sucesso!");
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  }

  // Buscar pizza para consultar
  function buscarPizza() {
    const busca = document.getElementById("busca")?.value.toLowerCase() || "";
    const resultados = pizzaria.filter((pizza) =>
      pizza.nome.toLowerCase().includes(busca)
    );
    atualizarLista(resultados);
  }

  // Alterar pizza
  let pizzaParaAlterar = null;

  function buscarPizzaParaAlterar() {
    const busca = document.getElementById("busca-alterar")?.value.toLowerCase() || "";
    if (!busca) {
      pizzaParaAlterar = null;
      document.getElementById("form-alterar")?.classList.add("hidden");
      return;
    }

    pizzaParaAlterar = pizzaria.find((pizza) =>
      pizza.nome.toLowerCase().includes(busca)
    );

    if (pizzaParaAlterar) {
      document.getElementById("form-alterar")?.classList.remove("hidden");
      document.getElementById("novo-nome").value = pizzaParaAlterar.nome;
      document.getElementById("novo-preco").value = pizzaParaAlterar.preco;
      document.getElementById("nova-categoria").value = pizzaParaAlterar.categoria;
    } else {
      pizzaParaAlterar = null;
      document.getElementById("form-alterar")?.classList.add("hidden");
    }
  }

  function alterarPizza() {
    if (!pizzaParaAlterar) {
      alert("Por favor, busque e selecione uma pizza para alterar.");
      return;
    }

    const novoNome = document.getElementById("novo-nome").value.trim();
    const novoPreco = document.getElementById("novo-preco").value.trim();
    const novaCategoria = document.getElementById("nova-categoria").value.trim();

    if (novoNome && novoPreco && novaCategoria) {
      pizzaParaAlterar.nome = novoNome;
      pizzaParaAlterar.preco = novoPreco;
      pizzaParaAlterar.categoria = novaCategoria;

      // Atualiza a lista e salva no localStorage
      localStorage.setItem("pizzas", JSON.stringify(pizzaria));
      atualizarLista();

      alert("Pizza alterada com sucesso!");
      document.getElementById("form-alterar").classList.add("hidden");
      document.getElementById("busca-alterar").value = "";
      pizzaParaAlterar = null;
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  }

  // Registro de vendas
  let vendas = [];

// Registrar venda feita pelo admin
function registrarVenda() {
  const nomePizza = document.getElementById("venda-nome")?.value.trim();
  const preco = parseFloat(document.getElementById("venda-preco")?.value);
  const comprador = document.getElementById("venda-comprador")?.value.trim();

  if (nomePizza && !isNaN(preco) && comprador) {
    const listaVendas = document.getElementById("lista-vendas");
    const item = document.createElement("li");
    item.textContent = `Pizza: ${nomePizza} - Preço: R$${preco.toFixed(2)} - Comprador: ${comprador}`;
    listaVendas.appendChild(item);

    // Criar o objeto da venda
    const novaVenda = {
      nomePizza,
      preco,
      comprador,
      data: new Date().toISOString()
    };

    // Pegar vendas existentes do localStorage
    const vendasAdmin = JSON.parse(localStorage.getItem("vendasAdmin") || "[]");
    vendasAdmin.push(novaVenda);
    localStorage.setItem("vendasAdmin", JSON.stringify(vendasAdmin));

    // Limpar campos
    document.getElementById("venda-nome").value = "";
    document.getElementById("venda-preco").value = "";
    document.getElementById("venda-comprador").value = "";
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}

// Gera relatório unificando vendas de admin e clientes
function gerarRelatorioVendas() {
  const tabelaRelatorio = document.getElementById("tabela-relatorio-vendas");
  tabelaRelatorio.innerHTML = "";

  const vendasAdmin = JSON.parse(localStorage.getItem("vendasAdmin") || "[]");
  const pedidosClientes = JSON.parse(localStorage.getItem("pedidos") || "[]");

  if (vendasAdmin.length === 0 && pedidosClientes.length === 0) {
    alert("Nenhuma venda registrada.");
    return;
  }

  let total = 0;

  // Vendas do admin
  vendasAdmin.forEach(venda => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
      <td>${venda.nomePizza}</td>
      <td>R$ ${parseFloat(venda.preco).toFixed(2)}</td>
      <td>${venda.comprador}</td>
      <td>${new Date(venda.data).toLocaleString()}</td>
    `;
    tabelaRelatorio.appendChild(linha);
    total += venda.preco;
  });

  // Vendas dos clientes
  pedidosClientes.forEach(pedido => {
    pedido.itens.forEach(item => {
      const precoTotal = item.precoUnitario * item.quantidade;
      const linha = document.createElement("tr");
      linha.innerHTML = `
        <td>${item.nomePizza}</td>
        <td>R$ ${precoTotal.toFixed(2)}</td>
        <td>Cliente</td>
        <td>${new Date(pedido.data).toLocaleString()}</td>
      `;
      tabelaRelatorio.appendChild(linha);
      total += precoTotal;
    });
  });

  // Linha do total
  const linhaTotal = document.createElement("tr");
  linhaTotal.innerHTML = `
    <td><strong>Total</strong></td>
    <td><strong>R$ ${total.toFixed(2)}</strong></td>
    <td colspan="2"></td>
  `;
  tabelaRelatorio.appendChild(linhaTotal);

  document.getElementById("relatorio-vendas").classList.remove("hidden");
}

document.addEventListener('DOMContentLoaded', () => {
  gerarRelatorioVendas();
});

  function voltarLogin() {
    window.location.href = "login.html";
  }

  // === PEDIDOS ===
  const listaCarrinho = document.querySelector(".lista-carrinho");
  const carrinhoVazio = document.querySelector(".carrinho-vazio");
  const btnFinalizar = document.getElementById("btn-finalizar-pedido");

  // Função para habilitar ou desabilitar o botão finalizar
  function atualizarBotaoFinalizar() {
    if (!btnFinalizar || !listaCarrinho) return;
    btnFinalizar.disabled = listaCarrinho.children.length === 0;
  }

  atualizarBotaoFinalizar();

  // Lógica para adicionar itens ao carrinho
  document.querySelectorAll(".form-pedido-unificado").forEach((form) => {
    const btnMais = form.querySelector('.btn-quantidade[data-op="mais"]');
    const btnMenos = form.querySelector('.btn-quantidade[data-op="menos"]');
    const inputQuantidade = form.querySelector(".quantidade");
    const selectProduto = form.querySelector(".select-produto");
    const textareaObs = form.querySelector(".obs-produto");
    const btnAdicionar = form.querySelector(".btn-adicionar-carrinho");

    btnMais?.addEventListener("click", () => {
      let qtd = parseInt(inputQuantidade.value);
      inputQuantidade.value = qtd + 1;
    });

    btnMenos?.addEventListener("click", () => {
      let qtd = parseInt(inputQuantidade.value);
      if (qtd > 1) inputQuantidade.value = qtd - 1;
    });

    btnAdicionar?.addEventListener("click", () => {
      const valorSelecionado = selectProduto.value;
      const textoSelecionado = selectProduto.options[selectProduto.selectedIndex]?.text || "";
      const quantidade = parseInt(inputQuantidade.value);
      const observacao = textareaObs.value.trim();

      if (!valorSelecionado) {
        alert("Por favor, selecione um item.");
        return;
      }

      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${textoSelecionado}</strong> x ${quantidade}
        ${observacao ? `<br><em>Obs: ${observacao}</em>` : ""}
      `;

      listaCarrinho.appendChild(li);
      carrinhoVazio.style.display = "none";

      // Limpar formulário
      selectProduto.selectedIndex = 0;
      inputQuantidade.value = 1;
      textareaObs.value = "";

      atualizarBotaoFinalizar();
    });
  });

  // Finalizar pedido
  btnFinalizar?.addEventListener("click", () => {
  if (!listaCarrinho || !carrinhoVazio) return;

  // Vamos criar uma lista estruturada dos pedidos
  const pedidos = [];

  listaCarrinho.querySelectorAll("li").forEach((li) => {
    const strong = li.querySelector("strong");
    if (!strong) return;

    const texto = strong.textContent;
    const nomePizza = texto.split(" - ")[0].trim();

    const matchQtd = li.textContent.match(/x (\d+)/);
    const quantidade = matchQtd ? parseInt(matchQtd[1]) : 1;

    const obsElem = li.querySelector("em");
    const observacao = obsElem ? obsElem.textContent.replace("Obs: ", "") : "";

    // Buscar no array pizzaria (que deve estar carregado no início do JS)
    const pizzaCadastrada = pizzaria.find(p => p.nome === nomePizza);
    const precoUnitario = pizzaCadastrada?.preco
      ? parseFloat(pizzaCadastrada.preco.toString().replace(",", "."))
      : 0;

    pedidos.push({
      nomePizza,
      precoUnitario,
      quantidade,
      observacao,
    });
  });

  // Se não houver pedidos, não faz nada
  if (pedidos.length === 0) return;
  
  // Calcular total
  const precoTotal = pedidos.reduce((acc, item) => acc + item.precoUnitario * item.quantidade, 0);

  // Agora salvar no localStorage
  const pedidosSalvos = JSON.parse(localStorage.getItem("pedidos") || "[]");
  pedidosSalvos.push({
    data: new Date().toISOString(),
    preco: precoTotal,
    itens: pedidos
  });
  localStorage.setItem("pedidos", JSON.stringify(pedidosSalvos));

  // Limpar carrinho
  listaCarrinho.innerHTML = "";
  carrinhoVazio.style.display = "block";
  atualizarBotaoFinalizar();

  // Mostrar sucesso
  const msgSucesso = document.getElementById("mensagem-sucesso");
  if (msgSucesso) {
    msgSucesso.textContent = "Pedido finalizado com sucesso!";
    msgSucesso.style.display = "block";
    setTimeout(() => {
      msgSucesso.style.display = "none";
    }, 3000);
  }
});

// Exibir pizzas cadastradas no select pizza do pedido
const selectPizza = document.getElementById("select-pizza-pizza");
if (selectPizza) {
  selectPizza.innerHTML = '<option value="">Selecione uma pizza</option>';
  pizzaria.forEach((pizza) => {
    const option = document.createElement("option");
    option.value = pizza.nome;

    const precoFormatado = pizza.preco?.toString().replace(".", ",") || "0,00";
    option.textContent = `${pizza.nome} - ${pizza.categoria} - R$ ${precoFormatado}`;

    selectPizza.appendChild(option);
  });
}

  // Expõe funções globais para serem usadas nos botões no HTML
  window.adicionarPizza = adicionarPizza;
  window.buscarPizza = buscarPizza;
  window.buscarPizzaParaAlterar = buscarPizzaParaAlterar;
  window.alterarPizza = alterarPizza;
  window.registrarVenda = registrarVenda;
  window.gerarRelatorioVendas = gerarRelatorioVendas;
  window.mostrarSecao = mostrarSecao;
  window.voltarLogin = voltarLogin;
});
