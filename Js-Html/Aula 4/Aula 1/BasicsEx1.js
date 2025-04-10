// Função para cadastrar o usuário

function cadastrarUsuario() {
    let nome = prompt("Digite seu nome:");
    let idade = Number(prompt("Digite sua idade:"));
  
    let usuario = {
      nome: nome,
      idade: idade
    };
  
    if (idade >= 18) {
      console.log(`Olá, ${usuario.nome}! Você é maior de idade.`);
    } else {
      console.log(`Olá, ${usuario.nome}! Você é menor de idade.`);
    }
  }
  
  // Chamando a função
  cadastrarUsuario();

  
//Explicação:

//prompt() recebe o nome e a idade do usuário.
//Number(prompt()) converte a idade para número.
//Criamos um objeto usuario para armazenar os dados.
//if / else verifica se a pessoa é maior de idade e exibe a mensagem no console.log().
//A função cadastrarUsuario() é chamada no final para rodar o programa.
