# Escreva um programa que encontre o fatorial de qualqer número.

def calcular_fatorial(numero):
    if numero < 0:
        return "Fatorial não é definido para números negativos."
    fatorial = 1
    for i in range(1, numero + 1):
        fatorial *= i
    return fatorial

numero = int(input("Digite um número para calcular o fatorial: "))
resultado = calcular_fatorial(numero)
print(f"O fatorial de {numero} é {resultado}.")