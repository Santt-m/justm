// Importa los datos de las impresiones
import impresiones from './impresiones_bd.js';
// Importa los datos de los terapeutas
import terapeutas from '../sis/masagistas/bd_terapeutas.js';

// Función para renderizar una tarjeta de impresión
export const renderImpresionCard = (terapeuta) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('impresiones-card');

    // Establecer la imagen de fondo de la tarjeta
    cardElement.style.backgroundImage = `url(${terapeuta.img0})`;
    cardElement.style.backgroundSize = 'cover';
    cardElement.style.backgroundPosition = 'center';

    // Contenido de la tarjeta de impresión
    cardElement.innerHTML = `
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

    return cardElement;
};

// Función para renderizar todas las impresiones
export const renderAllImpresiones = () => {
    const impresionesSection = document.getElementById('impresiones');
    impresionesSection.innerHTML = '';

    // Iterar sobre los IDs de las impresiones
    impresiones.forEach(impresionId => {
        console.log('Impresión ID:', impresionId); // Verifica que se esté iterando sobre los IDs correctos

        // Convertir el ID a número entero
        const impresionIdInt = parseInt(impresionId, 10);

        // Buscar al terapeuta por su ID
        const terapeuta = terapeutas.find(terapeuta => terapeuta.ID === impresionIdInt);

        if (terapeuta) {
            // Crear el elemento de la tarjeta para la impresión
            const cardElement = renderImpresionCard(terapeuta);

            // Agregar la tarjeta al contenedor de impresiones
            impresionesSection.appendChild(cardElement);
        }
    });
};

// Inicialización de la renderización de impresiones
export const initRenderAllImpresiones = () => {
    if (document.getElementById('impresiones')) {
        renderAllImpresiones();
    } else {
        console.log('No se encontró la sección Impresiones');
    }
};

// Llamar a la función para renderizar todas las impresiones cuando se cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
    initRenderAllImpresiones();
});
