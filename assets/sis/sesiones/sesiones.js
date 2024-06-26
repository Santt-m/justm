// Importa los datos de las sesiones
import sesiones from './sesiones_bd.js';
// Importa los datos de las terapeutas
import terapeutas from '../masagistas/bd_terapeutas.js';

// Función para renderizar las sesiones
export const renderSesiones = () => {
    const sesionesSection = document.getElementById('sesiones');

    sesionesSection.innerHTML = '';

    // Verifica que se esté iterando sobre los IDs correctos
    sesiones.forEach(sesionId => {
        console.log('Sesiones ID:', sesionId);

        // Convertir el ID a número entero
        const sesionIdInt = parseInt(sesionId, 10);

        // Buscar la terapeuta por su ID
        const terapeuta = terapeutas.find(terapeuta => terapeuta.ID === sesionIdInt);

        if (terapeuta) {
            // Crear el elemento de tarjeta para la terapeuta
            const cardElement = document.createElement('div');
            cardElement.classList.add('sesiones-card');
            cardElement.style.backgroundImage = `url(${terapeuta.img0})`;
            cardElement.style.backgroundSize = 'cover';
            cardElement.style.backgroundPosition = 'center';
            cardElement.innerHTML = `
                <div class="sesiones-info">
                    <h4 class="terapeuta-nombre">${terapeuta.Nombre}</h4>
                </div>
            `;

            // Agregar evento de clic a la tarjeta
            cardElement.addEventListener('click', () => {
                // Redirigir a la página de detalles del terapeuta
                window.location.href = `detail.html?id=${terapeuta.ID}`;
            });

            // Agregar la tarjeta al contenedor de sesiones
            sesionesSection.appendChild(cardElement);
        }
    });
};

// Llamar a la función para renderizar las sesiones cuando se cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('sesiones')) {
        renderSesiones();
    }
});
