//1.Algoritimo que imprime "Olá, Mundo!" 11 vezes.

for (let i = 0; i < 11; i++) {
    console.log('Olá, Mundo!');
  }
  
//2.Algoritomo que faça uma Tabuada.

let numero = 5; // Tabuada que desejar
for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}

//3.Algoritimo para somar os numeros impáres de 1 a 100.

let soma = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) { //!== diferente de
    soma += i;
  }
}
console.log(soma);

//4.Algoritimo que cria uma contagem regressiva e no final apresenta a mensagem "Feliz Ano Novo!".

for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
  console.log("Feliz Ano Novo!");

//EX1.Escreva um programa que classifique a idade de uma pessoa em categorias
//(criança, adolescente, adulto, idoso) e imprima uma mensagem apropriada.

let idade = 25; // Idade da Pessoa

if (idade >= 0 && idade <= 12) {
  console.log("Criança");
} else if (idade >= 13 && idade <= 17) {
  console.log("Adolescente");
} else if (idade >= 18 && idade <= 59) {
  console.log("Adulto");
} else if (idade >= 60) {
  console.log("Idoso");
} else {
  console.log("Idade inválida");
}

//EX2.Escreva um programa que verifique a nota de um aluno e imprima uma mensagem
//personalizada com base na nota.

let nota = 85; // Nota do(a) Aluno(a)

if (nota >= 90) {
  console.log("Excelente! Você tirou um A.");
} else if (nota >= 70) {
  console.log("Bom trabalho! Você tirou um B.");
} else if (nota >= 50) {
  console.log("Você passou com um C.");
} else {
  console.log("Reprovado. Estude mais da próxima vez.");
}

//EX3.Escreva um programa que verifique o dia da semana e imprima uma mensagem.
//apropriada. (Deixar o mais curto possível).

let dia = 3; // 1 = Domingo, 2 = Segunda, ..., 7 = Sábado
let mensagem = ["Domingo preguiçoso!", "Segunda de trabalho!", "Terça comum.", "Quarta no meio da semana!", "Quinta quase lá!", "Sextou!", "Sábado de descanso!"];
console.log(mensagem[dia - 1]);//domingo representa 0 no indice, ent é necessario colocar -1 para quer o dia seja corrspondente com o numero digitado pelo usuario.

//EX4.Escreva um programa que verifique a hora do dia e imprima uma mensagem
//apropriada (manhã, tarde, noite).

let hora = 14; // Hora desejada (0 a 23)

if (hora >= 6 && hora < 12) {
  console.log("Bom dia!");
} else if (hora >= 12 && hora < 18) {
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}

//EX5.Escreva um programa que verifique se uma pessoa está abaixo, dentro ou acima
//do peso ideal com base no IMC (Índice de Massa Corporal).

let peso = 85; // peso em kg
let altura = 1.85; // altura em metros

let imc = peso / (altura * altura); //calculo do imc

if (imc < 18.5) {
  console.log("Abaixo do peso");//Abaixo do peso: IMC < 18.5
} else if (imc >= 18.5 && imc < 24.9) {
  console.log("Peso ideal");//Peso ideal: IMC entre 18.5 e 24.9
} else {
  console.log("Acima do peso");//Acima do peso: IMC >= 25
}

//EX6.Escreva um programa que verifique se um número é primo.

let num = 29; // Altere para o número desejado
let primo = true;

for (let i = 2; i <= Math.sqrt(num); i++) {
  if (num % i === 0) {
    primo = false;
    break;
  }
}

if (primo && num > 1) {
  console.log(`${num} é primo.`);
} else {
  console.log(`${num} não é primo.`);
}

//EX7.Escreva um programa que verifique se um ano é bissexto.

let ano = 2024; // Altere para o ano desejado

if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) { //O ano deve ser divisível por 4.//Se for divisível por 100, deve também ser divisível por 400 para ser bissexto.
  console.log(`${ano} é bissexto.`);
} else {
  console.log(`${ano} não é bissexto.`);
}

//EX8.Escreva um programa que verifique a nota de um aluno e imprima uma mensagem
//personalizada com base na nota.

let note = 75; // Altere para a nota desejada

if (note >= 90) {
  console.log("Excelente! Você tirou A.");
} else if (note >= 75) {
  console.log("Muito bom! Você tirou B.");
} else if (note >= 60) {
  console.log("Bom! Você tirou C.");
} else if (note >= 50) {
  console.log("Passou! Você tirou D.");
} else {
  console.log("Reprovado. Estude mais da próxima vez.");
}

//EX9.Escreva um programa que verifique a temperatura e imprima uma mensagem apropriada.

let temperatura = 25; // Temperatura desejada

if (temperatura <= 10) {
  console.log("Está muito frio! Use um casaco.");
} else if (temperatura > 10 && temperatura <= 20) {
  console.log("Está fresquinho, use algo casual.");
} else if (temperatura > 20 && temperatura <= 30) {
  console.log("Está quente, aproveite o clima!");
} else {
  console.log("Está muito quente! Beba água e use protetor solar");
}

//EX10.Escreva um programa que verifique o desempenho de vendas de um vendedor e
//imprima uma mensagem apropriada.

let vendas = 25000; // Valor das vendas realizadas

if (vendas >= 30000) {
  console.log("Excelente desempenho! Você superou as metas.");
} else if (vendas >= 20000) {
  console.log("Bom desempenho! Você atingiu a meta.");
} else if (vendas >= 10000) {
  console.log("Desempenho regular. Tente melhorar para alcançar a meta.");
} else {
  console.log("Desempenho abaixo da expectativa. Vamos focar para melhorar.");
}
