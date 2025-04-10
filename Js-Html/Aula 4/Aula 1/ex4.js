//des 1
//criar um alg para separar valores pares e impares

numero = 7;

if (numero % 2 === 0) {
    mensagem = "O número é par.";
} else {
    mensagem = "O número é ímpar.";
}

if (true) {
    console.log(mensagem);
}


//des 2
// criar um alg para calcular valores com as expressões soma, subtrair, multiplicar e dividir

numero1 = 10;
numero2 = 20;
operacao = "multiplicar"; // Pode ser: "somar", "subtrair", "multiplicar" ou "dividir"

if (operacao === "somar") {
    resultado = numero1 + numero2;
} else {
    if (operacao === "subtrair") {
        resultado = numero1 - numero2;
    } else {
        if (operacao === "multiplicar") {
            resultado = numero1 * numero2;
        } else {
            if (operacao === "dividir") {
                if (numero2 !== 0) {
                    resultado = numero1 / numero2;
                } else {
                    resultado = "Erro: divisão por zero";
                }
            } else {
                resultado = "Erro: operação inválida";
            }
        }
    }
}

if (true) {
    console.log("Resultado:", resultado);
}

//positivos e negativos

numero = -5;

if (numero > 0) {
    resultado = "O número é positivo.";
} else {
    if (numero < 0) {
        resultado = "O número é negativo.";
    } else {
        resultado = "O número é zero.";
    }
}

if (true) {
    console.log(resultado);
}
