function converter() {
    let real = parseFloat(prompt("Qual o valor que você deseja converter?"));
    let dolar = 5.81;

    if (isNaN(real)) {
        alert("Por favor, insira um valor válido.");
        return;
    }

    let valorConvertido = real * dolar;

    if (dolar <= 0) {
        alert("Por favor, insira um valor válido.");
    } else {
        alert(`Seu valor de R$${real.toFixed(2)}, convertido com a cotação do dolar em: R$${dolar.toFixed(2)} dá: R$${valorConvertido.toFixed(2)}`);
    }
}