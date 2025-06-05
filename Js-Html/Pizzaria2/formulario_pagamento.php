<?php
session_start();

if (!isset($_POST['pedido'])) {
    echo "Nenhum pedido recebido.";
    exit;
}

$_SESSION['pedido'] = $_POST['pedido'];
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <title>Pagamento</title>
  <link rel="stylesheet" href="pedir.css" />
  <link href="https://fonts.googleapis.com/css2?family=Sansita+Swashed&display=swap" rel="stylesheet" />
  <style>
    form {
      display: flex;
      flex-direction: column;
      gap: 15px; 
      margin-top: 20px;
    }

    form label {
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 5px;
    }

    form input[type="text"] {
      padding: 10px;
      font-size: 15px;
      border: 2px solid #9a031e;
      border-radius: 6px;
      background-color: #fff7f2;
      font-family: 'Sansita Swashed', cursive;
    }

    form button {
      margin-top: 20px;
      padding: 12px;
      font-size: 16px;
      border: none;
      border-radius: 6px;
      background-color: #9a031e;
      color: white;
      font-family: 'Sansita Swashed', cursive;
      cursor: pointer;
    }

    form button:hover {
      background-color: #7c0217;
    }
  </style>
</head>
<body>


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
    <div class="direita">Pagamento</div>
  </div>

  <main class="pedido-container">
    <section class="form-pedido-unificado pizza">
      <h1>Pagamento</h1>

      <form method="POST" action="pagamentos.php">
        <label for="nome">Nome no cartão:</label>
        <input type="text" id="nome" name="nome" required>

        <label for="numero">Número do cartão:</label>
        <input type="text" id="numero" name="numero" required>

        <label for="validade">Validade:</label>
        <input type="text" id="validade" name="validade" placeholder="MM/AA" required>

        <label for="cvv">CVV:</label>
        <input type="text" id="cvv" name="cvv" required>

        <button type="submit">Confirmar Pagamento</button>
      </form>
    </section>
  </main>

</body>
</html>