/*1. Verificação de Maioridade e Habilitação
Escreva um programa que verifique se uma pessoa é maior de idade e
possui habilitação para dirigir.*/

function verificarHabilitacao() {
    let idade = parseInt(prompt("Digite sua idade:"));
    let temHabilitacao = prompt("Você possui habilitação? (sim/não)").toLowerCase();

    if (idade >= 18 && temHabilitacao === "sim") {
        alert("Você pode dirigir!");
    } else if (idade >= 18) {
        alert("Você é maior de idade, mas não tem habilitação.");
    } else {
        alert("Você não pode dirigir, pois é menor de idade.");
    }
}

verificarHabilitacao();
