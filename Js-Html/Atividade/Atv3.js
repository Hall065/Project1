function calcularNota() {
    let nome = document.getElementById("nome").value;
    let nota1 = parseFloat(document.getElementById("nota1").value) || 0;
    let nota2 = parseFloat(document.getElementById("nota2").value) || 0;
    let nota3 = parseFloat(document.getElementById("nota3").value) || 0;
    let trabalho = parseFloat(document.getElementById("trabalho").value) || 0;
    
    let media = (nota1 + nota2 + nota3 + trabalho) / 4;
    let status = "";
    
    if (media >= 6) {
        status = "Aprovado";
    } else if (media >= 5) {
        status = "Recuperação";
    } else {
        status = "Reprovado";
    }
    
    document.getElementById("resultado").innerText = `${nome}, sua média foi ${media.toFixed(2)} - ${status}`;
}
