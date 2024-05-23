// Importa los datos de las terapeutas
import terapeutas from './bd_terapeutas.js';

// Función para renderizar una tarjeta de terapeuta
export const renderTerapeutaCard = (terapeuta) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('terapeuta-card');

    // Establecer la imagen de fondo de la tarjeta
    cardElement.style.backgroundImage = `url(${terapeuta.img0})`;
    cardElement.style.backgroundSize = 'cover';
    cardElement.style.backgroundPosition = 'center';

    // Contenido de la tarjeta de terapeuta
    cardElement.innerHTML = `
        <div class="terapeuta-info">
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

// Función para renderizar todas las terapeutas
export const renderAllTerapeutas = () => {
    const ultimasEntradasSection = document.getElementById('ultimas-entradas');
    ultimasEntradasSection.innerHTML = '';
    terapeutas.forEach(terapeuta => {
        const cardElement = renderTerapeutaCard(terapeuta);
        ultimasEntradasSection.appendChild(cardElement);
    });
};

export const initRenderAllTerapeutas = () => {
    if (document.getElementById('ultimas-entradas')) {
        renderAllTerapeutas();
    } else {
        console.log('No existe ultimas-entradas');
    }
};

// Llamar a la función para renderizar todas las terapeutas cuando se cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
    initRenderAllTerapeutas();
});
