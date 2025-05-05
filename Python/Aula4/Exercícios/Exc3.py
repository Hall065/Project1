# Programa para analisar temperaturas de pacientes

# Inicializando variáveis
total_temperaturas = 0
soma_temperaturas = 0

# Loop para receber temperaturas
while True:
    try:
        temperatura = float(input("Digite a temperatura do paciente (ou -1 para sair): "))
        if temperatura == -1:
            break

        # Classificação da temperatura
        if temperatura < 37.2:
            print("Temperatura normal.")
        elif 37.2 <= temperatura <= 38:
            print("Estado febril.")
        elif 38 < temperatura <= 39:
            print("Com febre.")
        else:
            print("Febre alta.")

        # Atualizando contadores
        total_temperaturas += 1
        soma_temperaturas += temperatura

    except ValueError:
        print("Por favor, insira um valor numérico válido.")

# Exibindo resultados finais
if total_temperaturas > 0:
    temperatura_media = soma_temperaturas / total_temperaturas
    print(f"\nQuantidade de pessoas analisadas: {total_temperaturas}")
    print(f"Temperatura média: {temperatura_media:.2f}°C")
else:
    print("\nNenhuma temperatura foi registrada.")
