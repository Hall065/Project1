function reservarProduto() {
    const nome = prompt("Digite seu nome:");
    const produto = prompt("Qual produto deseja reservar?");
    const quantidade = prompt("Quantidade desejada:");
    const data = prompt("Data para retirada (DD/MM/AAAA):");

    if (nome && produto && quantidade && data) {
        document.getElementById("resultado").innerHTML = `
            Reserva Confirmada!<br>
            Cliente: ${nome}<br>
            Produto: ${produto}<br>
            Quantidade: ${quantidade}<br>
            Data de Retirada: ${data}
        `;
    } else {
        document.getElementById("resultado").innerHTML = 
            "Por favor, preencha todas as informações.";
    }
}