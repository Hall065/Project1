//contador

let contador = 0;
let resultado = document.getElementById('resultado')
function contar() {
    contador++
    resultado.innerHTML = `<p>Agora o contador está em <mark>${contador}</mark>.</p>`
}

function zerar() {
    let resultado = document.getElementById('resultado2')
    if (contador > 0) 
        contador--
    resultado.innerHTML = `<p>Agora o contador está em <mark>${contador}</mark>.</p>`
} 