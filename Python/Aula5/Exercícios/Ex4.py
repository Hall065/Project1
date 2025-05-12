# Ler do teclado a idade e o sexo de 10 pessoas, calcule e imprima:
# a) A idade média das mulheres
# b) A idade média dos homens
# c) idade média do grupo

idade_total_homens = 0
idade_total_mulheres = 0
quantidade_homens = 0
quantidade_mulheres = 0

for i in range(10):
    idade = int(input(f"Digite a idade da pessoa {i + 1}: "))
    genero = input(f"Digite o gênero da pessoa {i + 1} (M/F): ").strip().upper()
    
    if genero == 'M':
        idade_total_homens += idade
        quantidade_homens += 1
    elif genero == 'F':
        idade_total_mulheres += idade
        quantidade_mulheres += 1

# Calcular médias
media_idade_homens = idade_total_homens / quantidade_homens if quantidade_homens > 0 else 0
media_idade_mulheres = idade_total_mulheres / quantidade_mulheres if quantidade_mulheres > 0 else 0
media_idade_grupo = (idade_total_homens + idade_total_mulheres) / 10

# Imprimir resultados
print(f"Média de idade das mulheres: {media_idade_mulheres:.2f}")
print(f"Média de idade dos homens: {media_idade_homens:.2f}")
print(f"Média de idade do grupo: {media_idade_grupo:.2f}")