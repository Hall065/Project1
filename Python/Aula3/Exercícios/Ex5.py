"""
Obter dados o valor, a taxa e o tempo, efetuar o cálculo do valor de uma prestação em atraso
ultilizando a formula:
prestação = valor + (valor *(taxa/100)* tempo)
"""

valor = float(input("Digite o valor da prestação: "))
taxa = float(input("Digite a taxa de juros (%): "))
tempo = int(input("Digite o tempo de atraso (em meses): "))

prestacao = valor + (valor * (taxa / 100) * tempo)

print(f"O valor da prestação em atraso é: R$ {prestacao:.2f}")
