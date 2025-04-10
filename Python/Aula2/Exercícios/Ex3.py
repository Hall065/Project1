"""
Solicitar salário do usuário(numerico com decimais)
solicitar o percentual de aumento(numerico com decimais)
e imprimir o saláio atualizado.
"""

salario = float(input("Digite seu salário atual: "))
percentual = float(input("Digite o percentual de aumento (%): "))

novo_salario = salario + (salario * (percentual / 100))

print(f"Seu novo salário é: R$ {novo_salario:.2f}")
