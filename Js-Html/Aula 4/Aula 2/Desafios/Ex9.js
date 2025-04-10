/*9. Validação de Placa de Veículo
Escreva um programa que valide se a placa do veículo digitada está
cadastrada no sistema.*/

function validarPlaca() {
    const placasCadastradas = ["ABC1234", "XYZ5678", "LMN9876"];

    let placa = prompt("Digite a placa do veículo (XXX0000):");

    if (placasCadastradas.includes(placa.toUpperCase())) {
        alert("A placa está cadastrada no sistema.");
    } else {
        alert("A placa não está cadastrada no sistema.");
    }
}

validarPlaca();
