/*10. Arrays
Escreva um programa para que lista 3 arrays separadas. A primeira lista
quero que seja de 100 em 100. A segunda lista quero um assunto sobre
gêneros de filmes. A terceira lista valores ímpares.*/ 

function listarArrays() {

    let listaNumeros = [];
    for (let i = 100; i <= 1000; i += 100) {
        listaNumeros.push(i);
    }

    let listaGeneros = ["Ação", "Comédia", "Drama", "Terror", "Ficção Científica", "Romance", "Aventura"];

    let listaImpares = [];
    for (let i = 1; i <= 20; i += 2) {
        listaImpares.push(i);
    }

    let mensagem = "Listas Geradas:\n\n";
    mensagem += "Números de 100 em 100: " + listaNumeros.join(", ") + "\n";
    mensagem += "Gêneros de Filmes: " + listaGeneros.join(", ") + "\n";
    mensagem += "Valores Ímpares: " + listaImpares.join(", ");

    alert(mensagem);
}

listarArrays();
