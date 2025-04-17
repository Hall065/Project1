function mostrarEstacao() {
    let mes = parseInt(document.getElementById("mes").value);
    let estacao;

    switch (mes) {
        case 1:
        case 2:
        case 12:
            estacao = "Verão";
            break;
        case 3:
        case 4:
        case 5:
            estacao = "Outono";
            break;
        case 6:
        case 7:
        case 8:
            estacao = "Inverno";
            break;
        case 9:
        case 10:
        case 11:
            estacao = "Primavera";
            break;
        default:
            estacao = "Mês inválido! Por favor, digite um número de 1 a 12.";
            break;
    }

    document.getElementById("resultadoEstacao").innerHTML = `<p>A estação do mês ${mes} é: <strong>${estacao}</strong></p>`;
}
