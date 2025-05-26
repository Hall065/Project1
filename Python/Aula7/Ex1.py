# Exemplo de lista em Python
bancos = ['Banco do Brasil', 'Caixa', 'Santander']
print(bancos)
# resultado: ['Banco do Brasil', 'Caixa', 'Santander']
bancos[1] = "Itaú"
print(bancos)
#resultado: ['Banco do Brasil', 'Itaú', 'Santander']
bancos[-1] = "C6"
print(bancos)
#resultado: ['Banco do Brasil', 'Itaú', 'C6']
bancos = bancos + ['Bradesco', 'Nubank']
print(bancos)
#resultado: ['Banco do Brasil', 'Itaú', 'C6', 'Bradesco', 'Nubank']
bancos += ['Inter']
print(bancos)
#resultado: ['Banco do Brasil', 'Itaú', 'C6', 'Bradesco', 'Nubank', 'Inter']

# Exemplo 2

lista = [4, 5, 3, 5]
print(lista)
lista.append(2)
print(lista)
lista.insert(2, -3)
print(lista)
lista.remove(4)
print(lista)
lista.sort()
print(lista)
lista.reverse()

# Exemplo 3

qnt = lista.count(5)
print(qnt)
exc = lista.pop()
print(lista)
print(exc)
del lista[2]
print(lista)
del lista[2:5]
print(lista)
lista.clear()
print(lista)

# Lista dentro de lista
compra = [10.2, 3.35, 16,3,['tomate', 'sabonete', 'arroz']]
print(compra)
produto = compra[3]
print(produto)
total = compra[0] + compra[1] + compra[2]
print(total)
letra = ['a', 'b', 'c']
num = [2, 4, 6]
tudo = [letra, num]
print(tudo)
print(f"letras: {tudo[0]}")
print(f"números: {tudo[1]}")

# Exemplo 4
letra1 = ['a', 'b', 'c']
print(f"tamanho da lista: {len(letra1)}")
print(f"endereço da letra b: {letra1.index('b')}")

# Exemplo 5
letra2 = ['a', 'b', 'c', 'd', 'e', 'f']
var = input("Digite uma letra: ")
if var.lower() in letra2:
    print(f"A letra '{var.lower()}' está na lista.")
else:
    print(f"A letra '{var.lower()}' não está na lista.")

# Exemplo 6
nova = []
while True:
    num = int(input("Digite um número inteiro (0 para sair): "))
    if num == 0:
        break
    nova.append(num)
print(nova)

# Exemplo 7
