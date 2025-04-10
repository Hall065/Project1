/*3. Verificação de Votação
Escreva um programa que verifique se uma pessoa pode votar com base na
sua idade e nacionalidade.*/

function verificarVoto() {
    let idade = parseInt(prompt("Digite sua idade:"));
    let nacionalidade = prompt("Qual sua nacionalidade?").toLowerCase();

    if (idade >= 16 && nacionalidade === "brasileiro") {
        alert("Você pode Votar!");
    } else if (idade >= 16 && nacionalidade !== "brasileiro") {
        alert("Você não é Brasileiro, então nao pode votar nesse país");
    } else {
        alert("Você não pode votar, pois não tem a idade necessária.");
    }
}

verificarVoto();
