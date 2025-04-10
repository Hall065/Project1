/*2. Verificação de Acesso a um Sistema
Escreva um programa que verifique se um usuário tem acesso a um sistema
com base em seu nome de usuário e senha.*/

function verificarAcesso() {
    const usuarioCorreto = "admin";
    const senhaCorreta = "1234";

    let usuario = prompt("Digite seu nome de usuário:");
    let senha = prompt("Digite sua senha:");

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        alert("Acesso permitido! Bem-vindo ao sistema.");
    } else {
        alert("Acesso negado! Usuário ou senha incorretos.");
    }
}

verificarAcesso();
