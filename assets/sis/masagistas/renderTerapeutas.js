// Importa los datos de las terapeutas
import terapeutas from './bd_terapeutas.js';

// Función para renderizar una tarjeta de terapeuta
const renderTerapeutaCard = (terapeuta) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('terapeuta-card');

    // Contenido de la tarjeta de terapeuta
    cardElement.innerHTML = `
        <div class="terapeuta-img">
            <img src="${terapeuta.img0}" alt="${terapeuta.Nombre}">
        </div>
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

// Función para renderizar todas las terapeutas en la página
export const renderAllTerapeutas = () => {
    const ultimasEntradasSection = document.getElementById('ultimas-entradas');
    ultimasEntradasSection.innerHTML = '';
    terapeutas.forEach(terapeuta => {
        const cardElement = renderTerapeutaCard(terapeuta);
        ultimasEntradasSection.appendChild(cardElement);
    });
};

// Llamar a la función para renderizar todas las terapeutas cuando se cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
    renderAllTerapeutas();
});
