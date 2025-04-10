# 4 - Pergunte o ano de nascimento e diga se a pessoa é maior de idade
ano_nasc = int(input("Digite o ano de nascimento: "))
idade = 2025 - ano_nasc
if idade >= 18:
    print(f"Você tem {idade} anos - Maior de idade!")
else:
    print(f"Você tem {idade} anos - Menor de idade!")
