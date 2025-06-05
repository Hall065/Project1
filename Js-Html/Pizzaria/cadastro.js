document.addEventListener("DOMContentLoaded", function () {
  const btnCadastrar = document.getElementById("btn-cadastrar");

  if (btnCadastrar) {
    btnCadastrar.addEventListener("click", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const senha = document.getElementById("senha").value;

      if (!email || !senha) {
        alert("Preencha todos os campos.");
        return;
      }

      if (localStorage.getItem(email)) {
        alert("Este e-mail já está cadastrado.");
        return;
      }

      // Salvar apenas como cliente
      const novoUsuario = {
        email: email,
        senha: senha,
        tipo: "cliente"
      };

      localStorage.setItem(email, JSON.stringify(novoUsuario));

      alert("Cadastro realizado com sucesso!");

      // Redirecionar para tela de login
      window.location.href = "login.html";
    });
  }
});

// Redirecionar para a tela de login ao clicar no link
document.addEventListener("DOMContentLoaded", function () {
  const linkLogin = document.getElementById("logar-conta");

  if (linkLogin) {
    linkLogin.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "login.html";
    });
  }
});
