const numeros = require("readline");

const num = numeros.createInterface({
    input: process.stdin,
    output: process.stdout,
});

num.question("Digite o primeiro número: ", (num1) => {
    num.question("Digite o segundo número: ", (num2) => {
        num.question("Digite o terceiro número: ", (num3) => {
            num.question("Digite o quarto número: ", (num4) => {
                const soma = Number(num1) + Number(num2) + Number(num3) + Number(num4);
                console.log(`A soma de ${num1}, ${num2}, ${num3} e ${num4} é: ${soma}`);
                num.close();
            });
        });
    });
});
