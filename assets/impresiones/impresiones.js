// Importa los datos de las impresiones
import impresiones from './impresiones_bd.js';
// Importa los datos de los terapeutas
import terapeutas from '../sis/masagistas/bd_terapeutas.js';

// Función para renderizar las impresiones
export const renderImpresiones = () => {
    const impresionesSection = document.getElementById('impresiones');
    console.log('Impresiones Section:', impresionesSection); // Verifica que se encuentre la sección Impresiones

    impresionesSection.innerHTML = '';

    // Iterar sobre los IDs de las impresiones
    impresiones.forEach(impresionId => {
        console.log('Impresión ID:', impresionId); // Verifica que se esté iterando sobre los IDs correctos

        // Convertir el ID a número entero
        const impresionIdInt = parseInt(impresionId, 10);

        // Buscar al terapeuta por su ID
        const terapeuta = terapeutas.find(terapeuta => terapeuta.ID === impresionIdInt);
        console.log('Terapeuta:', terapeuta); // Verifica que se haya encontrado la información del terapeuta

        if (terapeuta) {
            // Crear el elemento de la tarjeta para el terapeuta
            const cardElement = document.createElement('div');
            cardElement.classList.add('impresiones-card');
            cardElement.innerHTML = `
                <div class="impresiones-img">
                    <img src="${terapeuta.img0}" alt="${terapeuta.Nombre}">
                </div>
                <div class="impresiones-info">
                    <h4 class="terapeuta-nombre">${terapeuta.Nombre}</h4>
                    <p class="terapeuta-ubicacion">${terapeuta.Ubicacion}</p>
                    <p class="terapeuta-whatsapp">WhatsApp: ${terapeuta.whatsapp}</p>
                </div>
            `;

            // Agregar evento de clic a la tarjeta
            cardElement.addEventListener('click', () => {
                // Redirigir a la página de detalles del terapeuta
                window.location.href = `detail.html?id=${terapeuta.ID}`;
            });

            // Agregar la tarjeta al contenedor de impresiones
            impresionesSection.appendChild(cardElement);
        }
    });
};

// Llamar a la función para renderizar las impresiones cuando se cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded');
    renderImpresiones();
});
