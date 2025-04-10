// Imprimir num pares de 1 a 20

for(let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i) ;
    }
}

// Calcular a soma de números:

let soma = 0;
for (let i = 1; i <=100; i++) {
  soma += i;
}
console.log(soma);


//Calcular o fatorial de um número fornecido pelo usuário

let numero = 5; // Substitua pelo número que o usuário fornecer

numero = Number(numero);

let fatorial = 1;
for (let i = 1; i <= numero; i++) {
  fatorial *= i;
}
console.log(`O fatorial de ${numero} é ${fatorial}`);
