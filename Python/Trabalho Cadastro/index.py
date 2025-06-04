# Importa módulos necessários
import getpass  # Para esconder a senha digitada
import json     # Para ler e gravar dados em formato JSON
import os       # Para verificar se o arquivo existe

# Nome do arquivo onde os dados dos usuários serão armazenados
USERS_FILE = "usuarios.json"

# Código fixo para validar cadastro de funcionários
EMPLOYEE_CODE = "1234"  # Código de 4 dígitos da empresa

# Função para carregar os usuários salvos no arquivo JSON
def carregar_usuarios():
    if os.path.exists(USERS_FILE):  # Verifica se o arquivo já existe
        with open(USERS_FILE, "r", encoding="utf-8") as f:
            return json.load(f)  # Carrega os dados do arquivo e converte para dicionário
    return {}  # Se o arquivo não existir, retorna um dicionário vazio

# Função para salvar os dados dos usuários no arquivo JSON
def salvar_usuarios(users):
    with open(USERS_FILE, "w", encoding="utf-8") as f:
        json.dump(users, f, ensure_ascii=False, indent=4)  # Salva o dicionário em formato legível

# Função para realizar o cadastro de um novo usuário
def cadastrar(users):
    print("\n--- Cadastro ---")
    nome = input("Nome: ")
    telefone = input("Número de telefone: ")
    email = input("Email: ")

    # Confirmação da senha digitada
    while True:
        senha = getpass.getpass("Senha: ")  # Esconde a senha enquanto digita
        senha_confirma = getpass.getpass("Confirme a senha: ")
        if senha == senha_confirma:
            break
        else:
            print("As senhas não coincidem. Tente novamente.")

    # Verifica se é uma conta de funcionário ou cliente
    tipo = input("Conta de funcionário? (s/n): ").strip().lower()
    if tipo == 's':
        codigo = input("Digite o código de 4 dígitos da empresa: ")
        if codigo != EMPLOYEE_CODE:  # Valida o código da empresa
            print("Código inválido. Cadastro como funcionário não permitido.")
            return  # Sai da função sem cadastrar
        tipo_conta = "funcionario"
    else:
        tipo_conta = "cliente"

    # Verifica se o email já está cadastrado
    if email in users:
        print("Email já cadastrado.")
        return

    # Adiciona o novo usuário ao dicionário
    users[email] = {
        "nome": nome,
        "telefone": telefone,
        "senha": senha,
        "tipo": tipo_conta
    }

    # Salva os usuários atualizados no arquivo
    salvar_usuarios(users)
    print("Cadastro realizado com sucesso!")

# Função de login de um usuário existente
def login(users):
    print("\n--- Login ---")
    email = input("Email: ")
    senha = getpass.getpass("Senha: ")

    # Tenta encontrar o usuário pelo email
    user = users.get(email)
    if user and user["senha"] == senha:  # Verifica se a senha está correta
        print(f"Bem-vindo, {user['nome']}! Tipo de conta: {user['tipo']}")
    else:
        print("Email ou senha incorretos.")

# Função principal que exibe o menu e gerencia o fluxo do programa
def main():
    users = carregar_usuarios()  # Carrega os dados dos usuários
    while True:
        # Menu de opções
        print("\n1 - Cadastrar\n2 - Login\n3 - Sair")
        opcao = input("Escolha uma opção: ")

        if opcao == '1':
            cadastrar(users)  # Chama função de cadastro
        elif opcao == '2':
            login(users)  # Chama função de login
        elif opcao == '3':
            print("Saindo...")
            break  # Encerra o loop e finaliza o programa
        else:
            print("Opção inválida.")  # Trata entrada inválida

# Ponto de entrada do programa
if __name__ == "__main__":
    main()
    