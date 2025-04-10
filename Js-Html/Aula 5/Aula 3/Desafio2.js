//Mercadinho

//Usando For:

let totalCompra = 0;
let itensCompra = '';

let quantidade = parseInt(prompt("Quantos produtos você deseja adicionar?"));

for (let i = 0; i < quantidade; i++) {
  let nomeProduto = prompt(`Digite o nome do produto ${i + 1}:`);
  let valorProduto = parseFloat(prompt(`Digite o valor do produto ${i + 1}:`));

  totalCompra += valorProduto;

  itensCompra += `Produto: ${nomeProduto} - R$ ${valorProduto.toFixed(2)}\n`;
}

let mensagemFinal = `*** NOTA FISCAL ***\n\n${itensCompra}\nTotal: R$ ${totalCompra.toFixed(2)}`;

alert(mensagemFinal);

//Usando While(Loop simples sem precisar de um valor de itens fixo, ou seja posso adicionar quantos itens eu quiser)

/*
let totalCompra = 0;
let itensCompra = '';  

let continuar = true;

while (continuar) {
  let nomeProduto = prompt("Digite o nome do produto:");
  let valorProduto = parseFloat(prompt("Digite o valor do produto:"));

  totalCompra += valorProduto;

  itensCompra += `Produto: ${nomeProduto} - R$ ${valorProduto.toFixed(2)}\n`;

  continuar = confirm("Você quer adicionar outro produto?");
}

let mensagemFinal = `*** NOTA FISCAL ***\n\n${itensCompra}\nTotal: R$ ${totalCompra.toFixed(2)}`;

alert(mensagemFinal);
*/
