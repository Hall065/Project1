# Exemplo de loop while
notas = 0
qnt_notas_info = 0
while True:
    nota = float(input("Informe a nota (-1 para sair): "))
    if nota == -1:
        break
    notas = notas + nota
    qnt_notas_info = qnt_notas_info + 1
if qnt_notas_info > 0:
    media = notas / qnt_notas_info
    print("Quantidade de notas informadas: {qnt_notas_info}")
    print("A média é: , {media:.2f}")
else:
    print("Nenhuma nota informada.")