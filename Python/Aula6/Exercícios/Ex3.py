# Estado Febrir e média de temperatura de pacientes
total_clientes = 0
soma_temperaturas = 0.0

while True:
    temp_str = input("Digite a temperatura do cliente (ou 'sair' para finalizar): ")
    if temp_str.lower() == 'sair':
        break
    try:
        temp = float(temp_str)
    except ValueError:
        print("Valor inválido. Tente novamente.")
        continue

    total_clientes += 1
    soma_temperaturas += temp

    if temp < 37.2:
        print("Normal")
    elif 37.2 <= temp < 38:
        print("Estado febril")
    elif 38 <= temp < 39:
        print("Febre")
    else:
        print("Febre alta")

if total_clientes > 0:
    media = soma_temperaturas / total_clientes
    print(f"\nTotal de pessoas atendidas: {total_clientes}")
    print(f"Média das temperaturas: {media:.2f}°C")
else:
    print("Nenhum cliente atendido.")