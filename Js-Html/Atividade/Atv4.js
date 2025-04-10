function calcularIMC() {
let nome = document.getElementById("nome").value;
let peso = parseFloat(document.getElementById("peso").value);
let altura = parseFloat(document.getElementById("altura").value);
let resultado = document.getElementById("resultado");

if (!nome || isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    resultado.textContent = "Por favor, insira valores válidos.";
    resultado.style.color = "red";
    return;
}

let imc = peso / (altura * altura);
let classificacao = "";

if (imc < 18.5) {
    classificacao = "Abaixo do peso";
    resultado.style.color = "blue";
} else if (imc < 25) {
    classificacao = "Peso normal";
    resultado.style.color = "green";
} else if (imc < 30) {
    classificacao = "Sobrepeso";
    resultado.style.color = "orange";
} else {
    classificacao = "Obesidade";
    resultado.style.color = "red";
}

resultado.innerHTML = `${nome}, seu IMC é <strong>${imc.toFixed(2)}</strong> (${classificacao}).`;
}