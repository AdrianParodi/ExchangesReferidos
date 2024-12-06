function copyLink(linkId) {
    const linkElement = document.getElementById(linkId);
    const button = document.querySelector(`button[onclick="copyLink('${linkId}')"]`);

    if (linkElement && button) {
        const link = linkElement.href;
        navigator.clipboard.writeText(link)
            .then(() => {
                // Añade la clase visual de "presionado"
                button.classList.add('pressed');
                setTimeout(() => button.classList.remove('pressed'), 200); // Remueve después de 200ms

                // Cambia el texto del botón
                const originalText = button.textContent;
                button.textContent = "Enlace copiado!";
                button.disabled = true;

                setTimeout(() => {
                    button.textContent = originalText;
                    button.disabled = false;
                }, 3000);
            })
            .catch(err => console.error('Error al copiar el enlace: ', err));
    } else {
        console.error('El enlace o botón no fue encontrado.');
    }
}