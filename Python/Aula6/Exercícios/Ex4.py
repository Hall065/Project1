n = int(input("Quantas pessoas deseja cadastrar? "))

total_idade = 0
total_homens = 0
total_mulheres = 0
idade_homens = 0
idade_mulheres = 0
contador = 0

while contador < n:
    sexo = input("Informe o sexo (M/F): ").strip().upper()
    idade = int(input("Informe a idade: "))
    total_idade += idade

    if sexo == 'M':
        total_homens += 1
        idade_homens += idade
    elif sexo == 'F':
        total_mulheres += 1
        idade_mulheres += idade
    else:
        print("Sexo inválido, tente novamente.")
        continue  # Não conta essa iteração
    contador += 1

media_mulheres = idade_mulheres / total_mulheres if total_mulheres > 0 else 0
media_homens = idade_homens / total_homens if total_homens > 0 else 0
media_grupo = total_idade / n if n > 0 else 0

print(f"Idade média das mulheres: {media_mulheres:.2f}")
print(f"Idade média dos homens: {media_homens:.2f}")
print(f"Idade média do grupo: {media_grupo:.2f}")