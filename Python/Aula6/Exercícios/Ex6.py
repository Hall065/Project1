texto = input("Digite uma string: ")
invertida = ""
i = len(texto) - 1

while i >= 0:
    invertida += texto[i]
    i -= 1

print("String invertida:", invertida)