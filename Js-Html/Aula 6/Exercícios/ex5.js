function calcpreco() {

let preco = parseFloat(prompt("Digite o valor do produto:"));
let porc = parseFloat(prompt("Digite o percentual de desconto:"));

let valor = (preco * porc) / 100
let total = preco - valor

let res = document.getElementById('result')
res.innerHTML = `<p>O produto custa R$${preco.toFixed(2)}.</p>`
res.innerHTML += `<p>Um desconto de ${porc}% sobre ele será de R$${valor.toFixed(2)}.</p>`
res.innerHTML += `<p>O valor final a ser pago será de R$${preco.toFixed(2)}.</p>`
}