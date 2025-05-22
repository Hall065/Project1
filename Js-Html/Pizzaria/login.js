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

document.getElementById("btn-entrar").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const usuarioValido = usuarios.find(user => user.email === email && user.senha === senha);

  if (usuarioValido) {
    if (usuarioValido.tipo === "admin") {
      exibirMensagem("Login realizado com sucesso!", "sucesso");
      setTimeout(() => {
        window.location.href = "adm.html";
      }, 1000);
    } else {
      exibirMensagem("Login realizado com sucesso!", "sucesso");
      setTimeout(() => {
        window.location.href = "inicial.html";
      }, 1000);
    }
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

