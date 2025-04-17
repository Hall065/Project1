function calcularArea() {
    let figura = document.getElementById("figura").value.toLowerCase();
    let dim1 = parseFloat(document.getElementById("dim1").value);
    let dim2 = parseFloat(document.getElementById("dim2").value);
    let resultado = document.getElementById("resultadoArea");
    let area;
  
    switch (figura) {
      case "círculo":
      case "circulo":
        area = Math.PI * dim1 * dim1; // raio² * pi
        resultado.innerHTML = `<p>Área do círculo: ${area.toFixed(2)} unidades²</p>`;
        break;
        
      case "quadrado":
        area = dim1 * dim1; // lado²
        resultado.innerHTML = `<p>Área do quadrado: ${area.toFixed(2)} unidades²</p>`;
        break;
        
      case "triângulo":
      case "triangulo":
        area = (dim1 * dim2) / 2; // (base * altura) / 2
        resultado.innerHTML = `<p>Área do triângulo: ${area.toFixed(2)} unidades²</p>`;
        break;
        
      default:
        resultado.innerHTML = "<p>Figura inválida. Tente: círculo, quadrado ou triângulo.</p>";
    }
  }
  