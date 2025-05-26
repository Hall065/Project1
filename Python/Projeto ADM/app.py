from flask import Flask, render_template, request, redirect, url_for
import json
import os

app = Flask(__name__)

# Caminho do arquivo JSON
CAMINHO_JSON = 'funcionarios.json'

# Função para carregar funcionários
def carregar_funcionarios():
    if os.path.exists(CAMINHO_JSON):
        with open(CAMINHO_JSON, 'r') as f:
            return json.load(f)
    return []

# Caminho do arquivo JSON para clientes
CAMINHO_JSON_CLIENTES = 'clientes.json'

# Função para carregar clientes
def carregar_clientes():
    if os.path.exists('clientes.json'):
        with open('clientes.json', 'r') as f:
            return json.load(f)
    return []

# Função para salvar clientes
def salvar_clientes(clientes):
    with open('clientes.json', 'w') as f:
        json.dump(clientes, f, indent=4)

@app.route('/excluir_cliente/<usuario>')
def excluir_cliente(usuario):
    clientes = carregar_clientes()
    clientes = [c for c in clientes if c['usuario'] != usuario]
    salvar_clientes(clientes)
    return redirect(url_for('login_adm', usuario='Admin'))

@app.route('/editar_cliente/<usuario>', methods=['GET', 'POST'])
def editar_cliente(usuario):
    clientes = carregar_clientes()
    cliente = next((c for c in clientes if c['usuario'] == usuario), None)

    if not cliente:
        return "Cliente não encontrado", 404

    if request.method == 'POST':
        cliente['nome'] = request.form['nome']
        cliente['telefone'] = request.form['telefone']
        cliente['endereco'] = request.form['endereco']
        # Usuário e senha podem ser alterados, se quiser, mas pode manter fixo por enquanto.
        cliente['usuario'] = request.form['usuario']
        cliente['senha'] = request.form['senha']

        salvar_clientes(clientes)
        return redirect(url_for('login_adm', usuario='Admin'))

    return render_template('editar_cliente.html', cliente=cliente)

# Função para salvar funcionários
def salvar_funcionarios(funcionarios):
    with open(CAMINHO_JSON, 'w') as f:
        json.dump(funcionarios, f, indent=4)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/cadastrar_funcionario', methods=['GET', 'POST'])
def cadastrar_funcionario():
    if request.method == 'POST':
        novo_funcionario = {
            'nome': request.form['nome'],
            'cargo': request.form['cargo'],
            'telefone': request.form['telefone'],
            'cpf': request.form['cpf'],
            'email': request.form['email'],
            'nascimento': request.form['nascimento'],
            'salario': request.form['salario'],
            'contratacao': request.form['contratacao'],
            'usuario': request.form['usuario'],
            'senha': request.form['senha']
        }

        with open('funcionarios.json', 'r') as f:
            funcionarios = json.load(f)

        funcionarios.append(novo_funcionario)

        with open('funcionarios.json', 'w') as f:
            json.dump(funcionarios, f, indent=4)

        return redirect(url_for('home', usuario=novo_funcionario['usuario']))

    return render_template('cadastro_funcionario.html')

@app.route('/cadastrar_cliente', methods=['GET', 'POST'])
def cadastrar_cliente():
    if request.method == 'POST':
        novo_cliente = {
            'nome': request.form['nome'],
            'telefone': request.form['telefone'],
            'endereco': request.form['endereco'],
            'usuario': request.form['usuario'],
            'senha': request.form['senha']
        }

        with open('clientes.json', 'r') as f:
            clientes = json.load(f)

        clientes.append(novo_cliente)

        with open('clientes.json', 'w') as f:
            json.dump(clientes, f, indent=4)

        return redirect(url_for('home', usuario=novo_cliente['usuario']))

    return render_template('cadastro_cliente.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        usuario = request.form['usuario']
        tipo = request.form['tipo']

        if tipo == 'adm':
            return redirect(url_for('login_adm', usuario=usuario))
        else:
            return redirect(url_for('login_cliente', usuario=usuario))
    return render_template('login.html')

@app.route('/login_adm')
def login_adm():
    usuario = request.args.get('usuario')
    funcionarios = carregar_funcionarios()
    clientes = carregar_clientes()
    return render_template('login_adm.html', usuario=usuario, funcionarios=funcionarios, clientes=clientes)

@app.route('/login_cliente')
def login_cliente():
    usuario = request.args.get('usuario')
    return render_template('login_cliente.html', usuario=usuario)

@app.route('/excluir_funcionario/<cpf>')
def excluir_funcionario(cpf):
    funcionarios = carregar_funcionarios()
    funcionarios = [f for f in funcionarios if f['cpf'] != cpf]
    salvar_funcionarios(funcionarios)
    return redirect(url_for('login_adm', usuario='Admin'))

@app.route('/editar_funcionario/<cpf>', methods=['GET', 'POST'])
def editar_funcionario(cpf):
    funcionarios = carregar_funcionarios()
    funcionario = next((f for f in funcionarios if f['cpf'] == cpf), None)

    if not funcionario:
        return "Funcionário não encontrado", 404

    if request.method == 'POST':
        funcionario['nome'] = request.form['nome']
        funcionario['cargo'] = request.form['cargo']
        funcionario['telefone'] = request.form['telefone']
        funcionario['email'] = request.form['email']
        funcionario['nascimento'] = request.form['nascimento']
        funcionario['salario'] = request.form['salario']
        funcionario['contratacao'] = request.form['contratacao']
        # CPF não muda

        salvar_funcionarios(funcionarios)
        return redirect(url_for('login_adm', usuario='Admin'))

    return render_template('editar_funcionario.html', funcionario=funcionario)


if __name__ == '__main__':
    app.run(debug=True)
