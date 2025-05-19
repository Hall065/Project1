while True:
    numero = int(input("Digite o número que deseja treinar a tabuada: "))
    acertos = 0
    erros = 0
    i = 1
    while i <= 10:
        resposta = int(input(f"{numero} x {i} = "))
        resultado_correto = numero * i
        if resposta == resultado_correto:
            print("CORRETO")
            acertos += 1
        else:
            print(f"QUE PENA, VOCÊ ERROU, O VALOR CORRETO É {resultado_correto}")
            erros += 1
        i += 1
    print(f"Total de acertos: {acertos}")
    print(f"Total de erros: {erros}")
    repetir = input("Deseja começar de novo? (s/n): ").strip().lower()
    if repetir != 's':
        break