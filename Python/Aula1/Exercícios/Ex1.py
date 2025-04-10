# 1 - Receba 2 notas e calcule a média, mostrando se foi aprovado ou reprovado
nota1 = float(input("Digite a primeira nota: "))
nota2 = float(input("Digite a segunda nota: "))
media = (nota1 + nota2) / 2
print(f"Sua média é {media:.2f}!")
if media >= 6:
    print("Aprovado!")
else:
    print("Reprovado!")
