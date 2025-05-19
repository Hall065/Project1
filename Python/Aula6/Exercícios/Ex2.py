# Valor máximo, mínimo e média de 10 números inteiros
count = 0
total = 0
maior = None
menor = None

while count < 10:
    valor = int(input(f"Digite o {count+1}º valor inteiro: "))
    if maior is None or valor > maior:
        maior = valor
    if menor is None or valor < menor:
        menor = valor
    total += valor
    count += 1

media = total / 10

print(f"Maior valor: {maior}")
print(f"Menor valor: {menor}")
print(f"Média dos valores: {media}")