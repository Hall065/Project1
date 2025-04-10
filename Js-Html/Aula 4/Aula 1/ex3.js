//condicionais com if else e else if

let nota = 85
if (nota >= 80) {
    console.log('parabens, voce foi aprovado(a)!');
} else if (nota < 80 && nota >= 60) {
    console.log('voce está na nossa lista de espera');
} else {
    console.log('voce foi reprovado(a)');
}

//notas
let notal = 95
if (notal >= 90) {
    console.log('excelente');
} else if (notal >= 80) {
    console.log('bom');
} else {
    console.log('voce precisa estudar');
}

//dia da semana 2
let dia = 'terca';
if (dia === 'domingo') {
    console.log('vou para praia');
} else if(dia === 'sabado') {
    console.log('piscininha');
} else if(dia === 'sexta') {
    console.log('sextou!');
} else if(dia === 'quinta') {
    console.log('quase la');
} else if(dia === 'quarta') {
    console.log('meinha');
} else if(dia === 'terça') {
    console.log('vamo q vamo');
} else {
    console.log('sofrimento');
}

//hora do dia2
let hora = 23;
if (hora <= 12) {
    console.log('bom dia');
} else if(hora > 12 && hora < 18) {
    console.log('boa tarde');
} else {
    console.log('boa noite');
}
