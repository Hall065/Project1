/*4. Verificação de Desconto
Escreva um programa que verifique se um cliente tem direito a um desconto
com base na quantidade de itens comprados e se é um cliente VIP.*/

function verificarDesconto() {
    let quantidade = parseInt(prompt("Quantos itens você comprou?"));
    let éVIP = prompt("Você é um cliente VIP? (sim/não)").toLowerCase() === "sim";

    let desconto = 0;

    if (quantidade >= 10 || éVIP) {
        desconto = 10;
    }
    if (quantidade >= 20 && éVIP) {
        desconto = 20;
    }

    alert(`Você recebeu um desconto de ${desconto}%.`);
}

verificarDesconto();
