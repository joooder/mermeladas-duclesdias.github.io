<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $direccion = $_POST['direccion'];
    $telefono = $_POST['teléfono'];
    $pago = $_POST['pago'];
    $detallesBancarios = isset($_POST['detalles-bancarios']) ? $_POST['detalles-bancarios'] : 'No aplica';

    $mensaje = "Detalles del pedido:\n";
    $mensaje .= "Nombre: " . $nombre . "\n";
    $mensaje .= "Correo Electrónico: " . $email . "\n";
    $mensaje .= "Dirección: " . $direccion . "\n";
    $mensaje .= "Teléfono: " . $telefono . "\n";
    $mensaje .= "Forma de Pago: " . $pago . "\n";
    $mensaje .= "Detalles Bancarios: " . $detallesBancarios . "\n";

    $to = "dulcesdias5@gmail.com"; // Cambia esto por el correo de tu página
    $subject = "Nuevo Pedido de Mermelada - Dulces Días";
    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $mensaje, $headers)) {
        echo "Pedido registrado y correo enviado exitosamente!";
    } else {
        echo "Error al enviar el correo.";
    }
}
?>

