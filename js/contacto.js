document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que se envíe el formulario automáticamente

        // Validar los campos antes de enviar
        let nombre = document.getElementById('nombre').value.trim();
        let email = document.getElementById('email').value.trim();
        let mensaje = document.getElementById('mensaje').value.trim();
        let errores = false;

        // Validar nombre
        if (nombre === '') {
            document.getElementById('error-nombre').innerText = 'Por favor, ingresa tu nombre.';
            errores = true;
        } else {
            document.getElementById('error-nombre').innerText = '';
        }

        // Validar email
        if (email === '') {
            document.getElementById('error-email').innerText = 'Por favor, ingresa tu email.';
            errores = true;
        } else {
            document.getElementById('error-email').innerText = '';
        }

        // Validar mensaje
        if (mensaje === '') {
            document.getElementById('error-mensaje').innerText = 'Por favor, ingresa tu mensaje.';
            errores = true;
        } else {
            document.getElementById('error-mensaje').innerText = '';
        }

        // Si no hay errores, enviar el formulario y mostrar la alerta
        if (!errores) {
            // Aquí podrías enviar los datos a tu servidor, realizar otras validaciones, etc.
            alert('¡Formulario enviado con éxito!');
            document.getElementById('alerta-envio').style.display = 'block'; // Mostrar alerta
            document.getElementById('formulario-contacto').reset(); // Reiniciar el formulario
        }
    });
});
