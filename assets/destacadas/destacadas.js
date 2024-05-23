// Importa los datos de las terapeutas
import terapeutas from '../sis/masagistas/bd_terapeutas.js';

// Importa los IDs de las terapeutas destacadas
import destacadas from './destacadas_bd.js';

// Función para renderizar las terapeutas destacadas
export const renderDestacadas = () => {
    const destacadasSection = document.getElementById('Destacadas');
    destacadasSection.innerHTML = '';

    // Iterar sobre los IDs de las terapeutas destacadas
    destacadas.forEach(terapeutaId => {
        console.log('Destacada ID:', terapeutaId); // Verifica que se esté iterando sobre los IDs correctos

        // Convertir el ID a número entero
        const terapeutaIdInt = parseInt(terapeutaId, 10);
        if (isNaN(terapeutaIdInt)) {
            console.error(`Invalid terapeuta ID: ${terapeutaId}`);
            return;
        }

        // Buscar la terapeuta por su ID
        const terapeuta = terapeutas.find(terapeuta => terapeuta.ID === terapeutaIdInt);
        if (terapeuta) {
            // Crear el elemento de tarjeta para la terapeuta
            const cardElement = document.createElement('div');
            cardElement.classList.add('destacadas-card');
            cardElement.style.backgroundImage = `url(${terapeuta.img0})`;
            cardElement.style.backgroundSize = 'cover';
            cardElement.style.backgroundPosition = 'center';
            cardElement.innerHTML = `
                <div class="destacadas-info">
                    <h4 class="terapeuta-nombre">${terapeuta.Nombre}</h4>
                    <p class="terapeuta-ubicacion">${terapeuta.Ubicacion}</p>
                </div>
            `;
            // Agregar evento de clic a la tarjeta
            cardElement.addEventListener('click', () => {
                // Redirigir a la página de detalles del terapeuta
                window.location.href = `detail.html?id=${terapeuta.ID}`;
            });
            // Agregar la tarjeta al contenedor de terapeutas destacadas
            destacadasSection.appendChild(cardElement);
        } else {
            console.warn(`No terapeuta found with ID: ${terapeutaIdInt}`);
        }
    });
};

function init() {
    if (document.getElementById('Destacadas')) {
        renderDestacadas();
    }
}

// Llamar a la función para renderizar las terapeutas destacadas cuando se cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
    init();
});
