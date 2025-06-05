<?php
session_start();


if (
    isset($_POST['nome'], $_POST['numero'], $_POST['validade'], $_POST['cvv']) &&
    isset($_SESSION['pedido'])
) {
    $_SESSION['nome'] = $_POST['nome'];
    $_SESSION['numero'] = $_POST['numero'];
    $_SESSION['validade'] = $_POST['validade'];
    $_SESSION['cvv'] = $_POST['cvv'];

    header("Location: resumo_pedido.php");
    exit;
} else {
    echo "Dados incompletos. Verifique e tente novamente.";
}