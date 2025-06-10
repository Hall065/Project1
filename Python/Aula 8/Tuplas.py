# CRIAÇÃO DE TUPLAS
tupla_vazia = ()
tupla_simples = (1, 2, 3)
tupla_com_strings = ('a', 'b', 'c')
tupla_mista = (1, 'abc', 3.14, True)

# TUPLA COM UM ÚNICO ELEMENTO (precisa da vírgula!)
tupla_unitaria = (42,)

# ACESSO AOS ELEMENTOS (igual a lista)
print(tupla_simples[0])  # 1
print(tupla_simples[-1]) # 3

# FATIAMENTO
print(tupla_simples[1:]) # (2, 3)

# ITERAÇÃO
for item in tupla_com_strings:
    print(item)

# IMUTABILIDADE (tupla não pode ser alterada)
# tupla_simples[0] = 10  # Isso vai dar erro

# CONVERSÃO DE LISTA PRA TUPLA E VICE-VERSA
lista = [1, 2, 3]
tupla_convertida = tuple(lista)
lista_convertida = list(tupla_convertida)

# DESEMPACOTAMENTO
ponto = (3, 4)
x, y = ponto
print(x, y)  # 3 4

# FUNÇÕES ÚTEIS
tupla = (1, 2, 2, 3)
print(len(tupla))        # 4
print(tupla.count(2))    # 2
print(tupla.index(3))    # 3

# ANINHAMENTO
tupla_aninhada = ((1, 2), (3, 4))
print(tupla_aninhada[1][0])  # 3

# USO EM RETORNOS DE FUNÇÕES
def dividir_e_resto(a, b):
    return a // b, a % b

quociente, resto = dividir_e_resto(10, 3)
print(quociente, resto)  # 3 1
