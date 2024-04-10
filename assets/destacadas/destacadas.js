// Importa los datos de las terapeutas
import terapeutas from '../sis/masagistas/bd_terapeutas.js';

// Importa los IDs de las terapeutas destacadas
import destacadas from './destacadas_bd.js';

// Función para renderizar las terapeutas destacadas
export const renderDestacadas = () => {
    const destacadasSection = document.getElementById('Destacadas');
    console.log('Destacadas Section:', destacadasSection); // Verifica que se encuentre la sección Destacadas

    destacadasSection.innerHTML = '';

    // Iterar sobre los IDs de las terapeutas destacadas
    destacadas.forEach(terapeutaId => {
        console.log('Terapeuta ID:', terapeutaId); // Verifica que se esté iterando sobre los IDs correctos

        // Convertir el ID a número entero
        const terapeutaIdInt = parseInt(terapeutaId, 10);

        // Buscar la terapeuta por su ID
        const terapeuta = terapeutas.find(terapeuta => terapeuta.ID === terapeutaIdInt);
        console.log('Terapeuta:', terapeuta); // Verifica que se haya encontrado la información de la terapeuta

        if (terapeuta) {
            // Crear el elemento de tarjeta para la terapeuta
            const cardElement = document.createElement('div');
            cardElement.classList.add('descatadas-card');
            cardElement.innerHTML = `
                <div class="descatadas-img">
                    <img src="${terapeuta.img0}" alt="${terapeuta.Nombre}">
                </div>
                <div class="descatadas-info">
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
            // Agregar la tarjeta al contenedor de terapeutas destacadas
            destacadasSection.appendChild(cardElement);
        }
    });
};
function init() {
    if (document.getElementById('Destacadas')) {
        renderDestacadas();
    }else
    {
        console.log('No existe Destacadas');
    }
}
// Llamar a la función para renderizar las terapeutas destacadas cuando se cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
    init();
});
