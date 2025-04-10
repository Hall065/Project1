// Laços Rep 

//For

for (let i = 0; i < 10; i++) {
    console.log(`Contando: ${i}`);
  }

    //Pode ser feito diminuindo o valor da variavel declarada

for (let j = 20; j >= 10; j--) {
    console.log(`Contando: ${j}`);
  }

    //de 10 em 10

for (let d = 0; d <= 10; d += 10) {
    console.log(`Contando: ${d}`);
  }

//-------------------------------------------------------------------------------------------------
//While

let num = 0;
while (num < 10) {
  console.log(`Número: ${num}`);
  num++;
}
    //Negativo

    let t = 10;
    while (t > 0) {
      console.log(`Número: ${t}`);
      t--;
    }

    //10 em 10

    let b = 10;
    while (b <= 100) {
      console.log(`Número: ${b}`);
      b += 10;
    }

    //a ausencia de num++/num-- torna o loop infinito

//-------------------------------------------------------------------------------------------------
//do...while

let contador = 9;
do {
  console.log(`Do...while número: ${contador}`);
  contador++;
} while (contador < 10);

//Ex pratico 

let senha;
do {
  senha = prompt("Digite a senha:");
} while (senha !== "12345");
console.log("Senha correta!");

//2 condições

let g = 15;
do while (g < 25) {
  console.log(g);
  g++;
} while (g < 15);

//10 em 10

let r = 0;
do {
  console.log(r);
  r += 10;
} while (r <= 100);

//-------------------------------------------------------------------------------------------------

//usar break para interromper o loop:

for (let h = 0; h < 10; h++) {
  if (i === 5) break;
  console.log(h);
}

//continue para pular a iteração atual:

for (let k = 0; k < 10; k++) {
  if (k % 2 === 0) continue;
  console.log(k);
}
