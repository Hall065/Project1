//Calcular média de notas com base em duas notas, sendo a primeira com peso 6
// e a segunda com peso 10 e mais um peso 4 para trabalhos.

let nota1 = parseFloat(prompt("Digite a sua primeira nota (peso 6):"));
let nota2 = parseFloat(prompt("Digite a sua segunda nota (peso 10):"));
let notaTrabalho = parseFloat(prompt("Digite a nota dos seus trabalhos (peso 4):"));

let media = (nota1 * 6 + nota2 * 10 + notaTrabalho * 4) / (6 + 10 + 4);

alert(`Sua média final é: ${media.toFixed(2)}`);
