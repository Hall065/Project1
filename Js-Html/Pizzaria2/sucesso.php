<?php
session_start();

// Verifica se os dados estão disponíveis
if (!isset($_SESSION['nome'])) {
    echo "Nenhuma informação de pagamento foi recebida.";
    exit;
}

// Pega os dados da sessão
$nome = $_SESSION['nome'];
$numero = $_SESSION['numero'];
$validade = $_SESSION['validade'];
$cvv = $_SESSION['cvv'];

?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Pagamento Realizado</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>Pagamento Realizado com Sucesso!</h1>
    <p><strong>Nome no Cartão:</strong> <?php echo htmlspecialchars($nome); ?></p>
    <p><strong>Número do Cartão:</strong> <?php echo htmlspecialchars($numero); ?></p>
    <p><strong>Validade:</strong> <?php echo htmlspecialchars($validade); ?></p>
    <p><strong>CVV:</strong> <?php echo htmlspecialchars($cvv); ?></p>
  </div>
</body>
</html>