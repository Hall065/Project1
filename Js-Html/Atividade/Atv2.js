function finalizarServico() {
    const nome = document.getElementById("nomeCliente").value;
    const servico = document.getElementById("servico").value;
    const resumo = document.getElementById("resumo");
    const detalhes = document.getElementById("detalhes");

    if (!nome || !servico) {
        alert("Por favor, preencha seu nome e escolha um serviço.");
        return;
    }

    detalhes.innerHTML = `<strong>Cliente:</strong> ${nome} <br> <strong>Serviço:</strong> ${servico}`;
    resumo.classList.remove("hidden");
}