function botao1() {
    let nome = prompt("Qual é o seu nome?");
    alert(`Olá, ${nome}! Seja bem-vindo.`);
}

function botao2() {
    let numero = parseInt(prompt("Digite um número para calcular o dobro:"));
    if (!isNaN(numero)) {
        alert(`O dobro de ${numero} é ${numero * 2}.`);
    } else {
        alert("Por favor, digite um número válido.");
    }
}

function botao3() {
    let confirmar = confirm("Você deseja realmente sair da página?");
    if (confirmar) {
        alert("Ok, você será redirecionado.");
        window.location.href = "https://www.google.com";
    } else {
        alert("Você escolheu ficar na página.");
    }
}