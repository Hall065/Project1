function calcularEnergia() {
    const entrada = document.getElementById("veiculos").value;
    const veiculos = parseInt(entrada);

    if (isNaN(veiculos) || veiculos < 0) {
        document.getElementById("resultado").innerText = "Por favor, insira um número válido.";
        return;
    }

    const energiaPorVeiculo = 0.05; // kWh por veículo
    const energiaTotal = veiculos * energiaPorVeiculo;

    document.getElementById("resultado").innerText = 
        `Energia gerada estimada: ${energiaTotal.toFixed(2)} kWh por hora.`;
}
 