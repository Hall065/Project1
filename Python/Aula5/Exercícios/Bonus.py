# Faça um programa que solicite ao usuário um número que ele  queira treinar a tabuada. Você irá solicitar ao mesmo a resposta  do cálculo do número informado multiplicado por 1, 2 até 10.
# A cada resposta você deverá validar e imprimir :”CORRETO” ou  “QUE PENA, VOCÊ ERROU, O VALOR CORRETO É X “, no lugar
# de ”X“ coloque o valor correto Ao final imprima “Total de  acertos: y” e “Total de erros z”, onde “y“ deverá ser o total de  acertos e “z“ o total de erros.

# Solicita ao usuário o número para treinar a tabuada
numero = int(input("Digite o número que você quer treinar na tabuada: "))

# Inicializa contadores de acertos e erros
total_acertos = 0
total_erros = 0

# Loop para calcular a tabuada de 1 a 10
for i in range(1, 11):
    resposta = int(input(f"Quanto é {numero} x {i}? "))
    resultado_correto = numero * i

    if resposta == resultado_correto:
        print("Correto")
        total_acertos += 1
    else:
        print(f"Que pena, você errou, o valro correto é: {resultado_correto}")
        total_erros += 1

# Exibe o total de acertos e erros
print(f"Total de acertos: {total_acertos}")
print(f"Total de erros: {total_erros}")