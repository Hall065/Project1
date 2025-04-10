# 2 - Peça 2 números e mostre qual o maior e o menor
num1 = float(input("Digite o primeiro número: "))
num2 = float(input("Digite o segundo número: "))
if num1 > num2:
    print(f"O maior é {num1} e o menor é {num2}")
elif num2 > num1:
    print(f"O maior é {num2} e o menor é {num1}")
else:
    print("Os dois números são iguais!")
