<?php
session_start();

if (
    !isset($_SESSION['nome'], $_SESSION['numero'], $_SESSION['validade'], $_SESSION['cvv'], $_SESSION['pedido'])
) {
    echo "Informações incompletas. Por favor, refaça o pedido.";
    exit;
}

$nome = $_SESSION['nome'];
$numero = $_SESSION['numero'];
$validade = $_SESSION['validade'];
$cvv = $_SESSION['cvv'];
$pedido = $_SESSION['pedido'];
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <title>Resumo do Pedido</title>
  <link rel="stylesheet" href="pedir.css" />
  <link href="https://fonts.googleapis.com/css2?family=Sansita+Swashed&display=swap" rel="stylesheet" />
  <style>
    .resumo-card {
      max-width: 600px;
      margin: 40px auto;
      background: #f0e5cc;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.08);
    }

    .resumo-card h2 {
      color: #9a031e;
      margin-bottom: 15px;
    }

    .resumo-card p {
      font-size: 16px;
      margin: 8px 0;
    }

    .resumo-card pre {
      background-color: #fff7f2;
      border-left: 4px solid #9a031e;
      padding: 10px;
      white-space: pre-wrap;
      font-size: 15px;
      margin-top: 10px;
      border-radius: 6px;
    }
  </style>
</head>
<body>

  <!-- Cabeçalho padrão -->
  <div class="faixa-vermelha">
    <div class="esquerda">
      <img src="Logos/LogoBege.png" alt="Logo" class="logo" />
      <div class="nome-pizzaria">Pizzaria Monaco</div>
    </div>
    <nav class="meio">
      <a href="inicial.html">Home</a>
      <a href="cardapio.html">Cardápio</a>
      <a href="sobre.html">Sobre</a>
      <a href="contato.html">Contato</a>
    </nav>
    <div class="direita">Resumo</div>
  </div>

  <!-- Conteúdo principal -->
  <main class="pedido-container">
    <section class="resumo-card">
      <h2>Pagamento Realizado com Sucesso!</h2>

      <h3>Dados do Comprador:</h3>
      <p><strong>Nome no Cartão:</strong> <?php echo htmlspecialchars($nome); ?></p>
      <p><strong>Número do Cartão:</strong> <?php echo htmlspecialchars($numero); ?></p>
      <p><strong>Validade:</strong> <?php echo htmlspecialchars($validade); ?></p>
      <p><strong>CVV:</strong> <?php echo htmlspecialchars($cvv); ?></p>

      <h3>Itens do Pedido:</h3>
      <pre><?php echo htmlspecialchars($pedido); ?></pre>
    </section>
  </main>

</body>
</html>