# Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário,
# monstrando uma mensagem de erro e voltando a pedir as informações.

while True:
    username = input("Digite o nome de usuário: ")
    password = input("Digite a senha: ")
    if username == password:
        print("Erro: A senha não pode ser igual ao nome de usuário. Tente novamente.")
    else:
        print("Usuário e senha cadastrados com sucesso!")
        break