function mostrarAntesDepois() {
    let numero = parseInt(prompt("Digite um número:"));
    
    if (!isNaN(numero)) {
        let antes = numero - 1;
        let depois = numero + 1;
        alert(`O número ${numero} tem como antecessor ${antes} e sucessor ${depois}.`);
    } else {
        alert("Por favor, digite um número válido.");
    }
}
