// Função para o jogo de adivinhação

function jogoAdivinhacao() {
    let numeroSecreto = Math.floor(Math.random() * 10) + 1; // Número aleatório entre 1 e 10
    let tentativa = Number(prompt("Tente adivinhar o número entre 1 e 10:"));
  
    if (tentativa === numeroSecreto) {
      console.log("Parabéns! Você acertou. 🎉");
    } else {
      console.log(`Você errou! O número correto era ${numeroSecreto}. 😢`);
    }
  }
  
  // Chamando a função
  jogoAdivinhacao();

//Explicação:

//Math.random() gera um número decimal entre 0 e 1.
//Math.floor(Math.random() * 10) + 1 ajusta para um número inteiro entre 1 e 10.
//prompt() recebe o palpite do usuário.
//if / else verifica se acertou e exibe a mensagem correspondente.