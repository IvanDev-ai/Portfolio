<?php
$name = $_POST['nombre'];
$mail = $_POST['email'];
$asunto = $_POST['asunto'];
$message = $_POST['mensaje'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: " . $name . " \r\n";
$message .= "Su e-mail es: " . $mail . " \r\n";
$message .= "Asunto: " . $asunto . " \r\n";
$message .= "Mensaje: " . $_POST['mensaje'] . " \r\n";
$message .= "Enviado el: " . date('d/m/Y', time());

$para = 'i.martin.desarrollo@gmail.com';
$asunto2 = 'Mensaje de... (Escribe como quieres que se vea el remitente de tu correo)';

mail($para, $asunto2, utf8_decode($message), $header);

header("Location:index.html");
?>