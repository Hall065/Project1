function alterarCor() {
    let opcao = document.getElementById("opcao").value;
    let mensagem = document.getElementById("mensagem");
    
    if (opcao == 1) {
        mensagem.textContent = "Vermelho";
        mensagem.style.color = "white";
        mensagem.style.backgroundColor = "red";
    } else if (opcao == 2) {
        mensagem.textContent = "Laranja";
        mensagem.style.color = "black";
        mensagem.style.backgroundColor = "orange";
    } else if (opcao == 3) {
        mensagem.textContent = "Verde";
        mensagem.style.color = "white";
        mensagem.style.backgroundColor = "green";
    } else {
        mensagem.textContent = "Opção inválida! Digite 1, 2 ou 3.";
        mensagem.style.color = "black";
        mensagem.style.backgroundColor = "lightgray";
    }
}
