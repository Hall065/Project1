# Programa para encontrar o maior, menor e a
# média de 10 valores inteiros

valores = []

for i in range(10):
    while True:
        try:
            numero = int(input(f"Digite o {i + 1}º número inteiro: "))
            valores.append(numero)
            break
        except ValueError:
            print("Por favor, insira um número inteiro válido.")

maior = max(valores)
menor = min(valores)
media = sum(valores) / len(valores)
print(f"\nMaior valor: {maior}")
print(f"Menor valor: {menor}")
print(f"Média dos valores: {media:.2f}")
