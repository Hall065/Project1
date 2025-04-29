const usuarios = [
    { email: "teste@email.com", senha: "123456" },
    { email: "admin@pizza.com", senha: "pizza123" }
  ];
  
  document.getElementById("btn-entrar").addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
  
    const usuarioValido = usuarios.find(user => user.email === email && user.senha === senha);
  
    if (usuarioValido) {
      window.location.href = "pagina-inicial.html";
    } else {
      alert("Email ou senha inválidos!");
    }
  });
  