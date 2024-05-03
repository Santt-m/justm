// Importa los datos de las sesiones
import sesiones from './sesiones_bd.js';
// Importa los datos de las terapeutas
import terapeutas from '../masagistas/bd_terapeutas.js';

// Función para renderizar las sesiones
export const renderSesiones = () => {
    const sesionesSection = document.getElementById('sesiones');
    console.log('Sesiones Section:', sesionesSection); // Verifica que se encuentre la sección Sesiones

    sesionesSection.innerHTML = '';

    // // Verifica que se esté iterando sobre los IDs correctos
    sesiones.forEach(sesionId => {
        console.log('Sesión ID:', sesionId); 

        // Convertir el ID a número entero
        const sesionIdInt = parseInt(sesionId, 10);

        // Buscar la terapeuta por su ID
        const terapeuta = terapeutas.find(terapeuta => terapeuta.ID === sesionIdInt);
        console.log('Terapeuta:', terapeuta); // Verifica que se haya encontrado la información de la terapeuta

        if (terapeuta) {
            // Crear el elemento de tarjeta para la terapeuta
            const cardElement = document.createElement('div');
            cardElement.classList.add('sesiones-card');
            cardElement.innerHTML = `
                <div class="sesiones-img">
                    <img src="${terapeuta.img0}" alt="${terapeuta.Nombre}">
                </div>
                <div class="sesiones-info">
                    <h4 class="terapeuta-nombre">${terapeuta.Nombre}</h4>
                </div>(
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
    console.log('DOMContentLoaded');

    if(document.getElementById('sesiones')){
        renderSesiones();
    }
});
