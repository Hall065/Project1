function converter() {
    let valor = parseFloat(document.getElementById("valor").value);
    let opcao = parseInt(document.getElementById("opcao").value);
    let resultado = document.getElementById("resultadoConversao");
  
    let taxaDolar = 5.81;
    let taxaEuro = 6.59;
  
    let convertido;
  
    switch (opcao) {
      case 1:
        convertido = valor / taxaDolar;
        resultado.innerHTML = `<p>R$${valor.toFixed(2)} convertido para Dólar é: <strong>US$${convertido.toFixed(2)}</strong></p>`;
        break;
      case 2:
        convertido = valor / taxaEuro;
        resultado.innerHTML = `<p>R$${valor.toFixed(2)} convertido para Euro é: <strong>€${convertido.toFixed(2)}</strong></p>`;
        break;
      default:
        resultado.innerHTML = `<p>Opção inválida.</p>`;
    }
  }
  