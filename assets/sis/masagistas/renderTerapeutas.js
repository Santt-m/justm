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

    return cardElement;
};

// Función para renderizar todas las terapeutas en la página
export const renderAllTerapeutas = (terapeutas) => {
    const ultimasEntradasSection = document.getElementById('ultimas-entradas');
    ultimasEntradasSection.innerHTML = '';
    terapeutas.forEach(terapeuta => {
        const cardElement = renderTerapeutaCard(terapeuta);
        ultimasEntradasSection.appendChild(cardElement);
    });
};

// Cargar las terapeutas desde el archivo bd_terapeutas.js
const loadTerapeutas = () => {
    // Llamamos a la función para renderizar todas las terapeutas
    renderAllTerapeutas(terapeutas);
};

// Llamar a la función para cargar las terapeutas cuando se cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
    loadTerapeutas();
});
