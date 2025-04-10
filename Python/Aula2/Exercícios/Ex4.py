"""
Criar um programa q declare PI(4 casas após a virgula).
Dados o raio e a altura. calcular o valor do volume de uma lata de óleo,
ultilizando a fórmula: Pi*raio²*altura.
"""
import math

PI = 3.1416

raio = float(input("Digite o raio da lata: "))
altura = float(input("Digite a altura da lata: "))

volume = PI * (raio ** 2) * altura

print(f"O volume da lata de óleo é: {volume:.2f} unidades cúbicas")
