#----------------------------------------------------------------------------------------------------

texto="2" # String | Variável que armazena um texto.
texto1= str(2); # Tipo String |  Tipo de dado que representa textos em Python.
numero=3 # Numerica Inteira ou Real.
numero1= int(3) # Numerica Inteira.
numero2= float(3) # Numerica Real.
print (texto)
print (texto1)
print (numero)
print (numero1)
print (numero2)

#----------------------------------------------------------------------------------------------------

nome = input("Digite seu nome: ")
print("Olá " + nome + "! Bem-vondo ao Python! \n")

#----------------------------------------------------------------------------------------------------

valor_uni = float(input("Informe p valor unitário: ")) # X.XX valor.
quantidade = int(input("Informe a quantidade de produtos: "))# X valor.
print("O total de compra é: ", valor_uni*quantidade)

#----------------------------------------------------------------------------------------------------

var1 = 123
var2 = 'World'
print("Hello to the", var2, var1)  # Usa vírgulas para separar os valores (automático, mas adiciona espaços extras)

var3 = 123
var4 = 'World'
print('Hello to the %s %d ' %(var4, var3))  # Usa formatação antiga (%), onde %s é string e %d é inteiro

var5 = 123
var6 = 'World'
print('Hello to the {} {}'.format(var6, str(var5)))  # Usa .format(), método mais moderno que substitui {} pelos valores

var7 = 123
var8 = 'World'
print("Hello to the {} {}".format(var8, var7))  # Mesmo método .format(), mas mais organizado

var9 = 123
var0 = 'World'
print(f'Hello to the {var0} {var9}')  # Usa f-strings (forma mais moderna e recomendada), direto dentro das chaves {}

#----------------------------------------------------------------------------------------------------

tempF = int(input("Temperatura em graus Farenheit: "))

# Fórmula para conversão de Fahrenheit para Celsius
tempC = (5 * (tempF - 32)) / 9  
print("Temperatura em graus Celsius:{} ".format(tempC))  # Usa .format(), insere o valor no {}.
print("Temperatura em graus Celsius: ", tempC)  # Usa vírgula (adiciona espaço extra automaticamente).
print("Temperatura em graus Celsius: %f" % (tempC))  # Usa formatação antiga (%) e mostra muitas casas decimais.
print(f"Temperatura em graus Celsius: {tempC}")  # Usa f-strings (forma mais moderna e recomendada).
print(tempC)  # Apenas exibe o valor puro.
print(f"Temperatura em Cº: {tempC:.2f}")  # Usa f-strings com 2 casas decimais (melhor visualmente).

#----------------------------------------------------------------------------------------------------

a = 10
b = 5

print(a**b)  # Potência
print(a + b)  # Adição
print(a - b)  # Subtração
print(a * b)  # Multiplicação
print(a / b)  # Divisão
print(a // b)  # Divisão inteira
print(a % b)  # Resto da divisão
print(pow(a, 1/2))  # Raiz quadrada
print(a % b)  # Resto da divisão (módulo)
print((a + a) * b)  # Soma de 'a' com 'a', depois multiplicação por 'b'

#----------------------------------------------------------------------------------------------------

a = True
b = False

print(a and b)  # AND (E) - Retorna True se ambos forem True
print(a or b)   # OR (OU) - Retorna True se pelo menos um for True
print(not a)    # NOT (NÃO) - Inverte o valor (True vira False e vice-versa)

#----------------------------------------------------------------------------------------------------

a = 10
b = 5

print(a > b)   # Maior que
print(a < b)   # Menor que
print(a >= b)  # Maior ou igual
print(a <= b)  # Menor ou igual
print(a == b)  # Igualdade
print(a != b)  # Diferente

#----------------------------------------------------------------------------------------------------
#----------------------------------------------------------------------------------------------------
#----------------------------------------------------------------------------------------------------