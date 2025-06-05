<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $senha = password_hash($_POST['senha'], PASSWORD_DEFAULT);

    $arquivo = fopen("usuarios.txt", "a");
    fwrite($arquivo, "$nome|$email|$senha\n");
    fclose($arquivo);

    echo "<h2>Cadastro realizado com sucesso!</h2>";
}
?>