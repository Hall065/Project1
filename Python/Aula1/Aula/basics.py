# KIT DE SOBREVIVÊNCIA PYTHON 🐍

# ----------------------------------------
# 1. PRINT - Exibir algo na tela
print("Olá, mundo!")

# ----------------------------------------
# 2. VARIÁVEIS - Armazenar valores
nome = "Hall"
idade = 25
pi = 3.14

# ----------------------------------------
# 3. TIPOS DE DADOS
texto = "isso é uma string"
numero_inteiro = 10
numero_float = 10.5
booleano = True  # ou False

# ----------------------------------------
# 4. ESTRUTURAS CONDICIONAIS
if idade >= 18:
    print("Maior de idade")
else:
    print("Menor de idade")

# ----------------------------------------
# 5. ESTRUTURA DE REPETIÇÃO (LOOPS)
# FOR
for i in range(5):
    print(f"Contando: {i}")

# WHILE
contador = 0
while contador < 3:
    print("Loop while")
    contador += 1

# ----------------------------------------
# 6. FUNÇÕES
def saudacao(nome):
    print(f"Olá, {nome}!")

saudacao("Hall")

# ----------------------------------------
# 7. LISTAS (ARRAYS)
frutas = ["maçã", "banana", "uva"]
print(frutas[0])  # maçã
frutas.append("laranja")  # adiciona laranja
print(frutas)

# ----------------------------------------
# 8. DICIONÁRIOS
pessoa = {"nome": "Hall", "idade": 25}
print(pessoa["nome"])

# ----------------------------------------
# 9. IMPORTAÇÃO DE MÓDULOS
import random
numero_aleatorio = random.randint(1, 10)
print(f"Número aleatório: {numero_aleatorio}")

# ----------------------------------------
# 10. INPUT DO USUÁRIO
nome_usuario = input("Digite seu nome: ")
print(f"Bem-vindo, {nome_usuario}!")

# ----------------------------------------
# 11. TRY / EXCEPT - Tratamento de erros
try:
    resultado = 10 / 0
except ZeroDivisionError:
    print("Não é possível dividir por zero!")

# ----------------------------------------
# 12. CRIANDO UM ARQUIVO E ESCREVENDO NELE
with open("arquivo_exemplo.txt", "w") as arquivo:
    arquivo.write("Esse é um texto dentro do arquivo.")

print("Kit de sobrevivência finalizado com sucesso!")
