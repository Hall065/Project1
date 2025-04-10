"""
Entrar com a base e altura de um triangulo e impirimir respectivamente seu perimetro e area
"""

base = float(input("Digite a base do triângulo: "))
altura = float(input("Digite a altura do triângulo: "))

area = (base * altura) / 2
perimetro = base * 3  # assumindo que é um triângulo equilátero

print(f"Perímetro: {perimetro}")
print(f"Área: {area}")
