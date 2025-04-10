        //Manipulação de Strings

    //toUpperCase() → Transforma tudo em maiúsculas

console.log("hello".toUpperCase()); // "HELLO"

    //toLowerCase() → Transforma tudo em minúsculas

console.log("HELLO".toLowerCase()); // "hello"

    //trim() → Remove espaços extras no início e no fim

console.log("  oi  ".trim()); // "oi"

    //replace() → Substitui uma parte da string

console.log("Eu amo Java".replace("Java", "JavaScript")); // "Eu amo JavaScript"

    //includes() → Verifica se a string contém um certo texto

console.log("Asuna é fofa".includes("fofa")); // true


        //Manipulação de Números (Math)

    //Math.ceil() → Arredonda para cima

console.log(Math.ceil(4.3)); // 5

    //Math.round() → Arredonda para o mais próximo

console.log(Math.round(4.6)); // 5

    //Math.max() → Retorna o maior número

console.log(Math.max(10, 50, 30)); // 50

    //Math.min() → Retorna o menor número

console.log(Math.min(10, 50, 30)); // 10

    //Math.sqrt() → Retorna a raiz quadrada

console.log(Math.sqrt(25)); // 5

    //Math.pow() → Potenciação

console.log(Math.pow(2, 3)); // 8 (2³)


        //Manipulação de Arrays

    //push() → Adiciona um item no final do array

let frutas = ["maçã", "banana"];
frutas.push("uva");
console.log(frutas); // ["maçã", "banana", "uva"]

    //pop() → Remove o último item do array

frutas.pop();
console.log(frutas); // ["maçã", "banana"]

    //shift() → Remove o primeiro item do array

frutas.shift();
console.log(frutas); // ["banana"]

    //unshift() → Adiciona um item no início do array

frutas.unshift("morango");
console.log(frutas); // ["morango", "banana"]

    //indexOf() → Retorna o índice do elemento no array

console.log(frutas.indexOf("banana")); // 1

    //slice() → Retorna uma parte do array sem modificar o original

let numeros = [1, 2, 3, 4, 5];
console.log(numeros.slice(1, 3)); // [2, 3]


        //Manipulação de Objetos

    //Object.keys() → Retorna as chaves do objeto

let pessoa = { nome: "Hall", idade: 25 };
console.log(Object.keys(pessoa)); // ["nome", "idade"]

    //Object.values() → Retorna os valores do objeto

console.log(Object.values(pessoa)); // ["Hall", 25]

    //Object.entries() → Retorna chave-valor como array

console.log(Object.entries(pessoa)); // [["nome", "Hall"], ["idade", 25]]


        //Temporizadores (Timers)

    //setTimeout() → Executa um código após um tempo

setTimeout(() => {
  console.log("Isso aparece depois de 2 segundos!");
}, 2000);

    //setInterval() → Executa um código repetidamente a cada intervalo de tempo

setInterval(() => {
  console.log("Isso aparece a cada 3 segundos!");
}, 3000);

//End
