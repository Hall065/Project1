<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = trim($_POST['email']);
    $senha = $_POST['senha'];
    $encontrado = false;

    $usuarios = file("usuarios.txt");

    foreach ($usuarios as $usuario) {
        list($nomeSalvo, $emailSalvo, $senhaHash) = explode("|", trim($usuario));
        if ($email === $emailSalvo && password_verify($senha, $senhaHash)) {
            $encontrado = true;
            break;
        }
    }

    if ($encontrado) {
        header("Location: inicial.html");
        exit;
    } else {
        header("Location: login.html?erro=1");
        exit;
    }
}
?>