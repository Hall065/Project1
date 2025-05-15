const usuarios = [
  { email: "teste@email.com", senha: "123456", tipo: "cliente" },
  { email: "admin@pizza.com", senha: "pizza123", tipo: "admin" }
];

document.getElementById("btn-entrar").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const usuarioValido = usuarios.find(user => user.email === email && user.senha === senha);

  if (usuarioValido) {
    if (usuarioValido.tipo === "admin") {
      window.location.href = "adm.html";
    } else {
      window.location.href = "inicial.html";
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
