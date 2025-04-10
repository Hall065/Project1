//Variáveis

//Armazenam valores. Em JS, usamos let, const e var (mas var é menos usada hoje em dia).

let nome1 = "Hall";  // Pode mudar depois
const idade1 = 25;   // Não pode ser reatribuída


//Tipos de Dados

//Os principais são:

//String → "texto"
//Number → 123, 3.14
//Boolean → true ou false
//Array → ["item1", "item2"]
//Objeto → { chave: valor }

let nome2 = "Asuna";  // String
let idade2 = 22;      // Number
let apaixonada = true;  // Boolean
let hobbies = ["programar", "jogar"];  // Array
let pessoa = { nome: "Hall", idade: 25 };  // Objeto


//Operadores

//Matemáticos: +, -, *, /, %
//Comparação: ==, ===, !=, !==, >, <
//Lógicos: && (E), || (OU), ! (NÃO)

console.log(5 + 3);  // 8
console.log(10 === "10");  // false (=== compara tipo também)
console.log(true && false);  // false


//Estruturas de Controle

//if / else

let idade3 = 18;
if (idade3 >= 18) {
  console.log("Maior de idade!");
} else {
  console.log("Menor de idade!");
}

//switch

let cor = "azul";
switch (cor) {
  case "vermelho":
    console.log("Cor quente!");
    break;
  case "azul":
    console.log("Cor fria!");
    break;
  default:
    console.log("Outra cor!");
}


//Loops (Laços de Repetição)

//for (para repetir um número fixo de vezes)

for (let i = 0; i < 5; i++) {
    console.log("Número: " + i);
  }

//while (repetição enquanto a condição for verdadeira)

let contador = 0;
while (contador < 3) {
  console.log("Contagem: " + contador);
  contador++;
}


//Funções

//Blocos de código reutilizáveis.

function saudacao(nome) {
    return "Oi, " + nome + "!";
  }
  console.log(saudacao("Hall"));


//