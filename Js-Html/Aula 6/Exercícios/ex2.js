function media() {
    let nome = window.prompt('Qual é o nome do aluno?')
    let n1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`))
    let n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`))
    med = (n1 + n2)/2

    let msg //cria uma variavel e deixa ela vazia
    if (med >= 6) { // Se por acaso a média foi 6.0 ou mais...
        msg = 'Meus parabéns!'
    } else {// senão... 
        msg = 'Estude um pouco mais!'
    }


    let res = document.getElementById('situacao')
    res.innerHTML = `<p>Calculando a média final de <mark style='background-color:lightgrey'>${nome}</mark>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark style='background-color:lightgrey'>${n1} e ${n2}</mark>.</p>`
    res.innerHTML += `<p>A média final será <mark style='background-color:lightgrey'>${med}</mark>.</p>`
    res.innerHTML += `A mensagem que temos é: <strong style='color:green'>${msg}</strong>.</p>`// CSS foi usado para deixar a mensagem vermelha.
}
