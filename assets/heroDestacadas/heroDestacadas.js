// Importa los datos de las terapeutas
import terapeutas from '../sis/masagistas/bd_terapeutas.js';

// Array de índices de terapeutas a mostrar
const indicesTerapeutasAMostrar = [0, 2, 4];

// Función para generar el HTML de la tarjeta de un terapeuta
const renderHeroDestacadas = (terapeuta) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('heroDestacadas-card');
    // Contenido del div a renderizar
    cardElement.innerHTML = `
        <p>Contacta con ${terapeuta.Nombre} ahora !</p>
        <img class="heroDestacadas-img" src="${terapeuta.img0}" alt="${terapeuta.Nombre}">
    `;

    // Agregar evento de clic a la tarjeta
    cardElement.addEventListener('click', () => {
        // Redirigir a la página de detalles del terapeuta
        window.location.href = `detail.html?id=${terapeuta.ID}`;
    });

    return cardElement;
};

// Función para renderizar una tarjeta de terapeuta aleatoria del array de terapeutas a mostrar
export const renderizarTarjetaTerapeuta = () => {
    console.log("Rendering therapist card...");
    const heroDestacadas = document.getElementById('heroDestacadas');
    if (heroDestacadas) {
        // Limpiar el contenido previo del div
        heroDestacadas.innerHTML = '';
        // Seleccionar un índice aleatorio del array de terapeutas a mostrar
        const indexAleatorio = Math.floor(Math.random() * indicesTerapeutasAMostrar.length);
        const indexTerapeutaAMostrar = indicesTerapeutasAMostrar[indexAleatorio];
        // Obtener el terapeuta correspondiente al índice seleccionado aleatoriamente
        const terapeutaAMostrar = terapeutas[indexTerapeutaAMostrar];
        // Generar el HTML de la tarjeta del terapeuta y renderizarla en el div heroDestacadas
        const tarjetaHTML = renderHeroDestacadas(terapeutaAMostrar);
        heroDestacadas.appendChild(tarjetaHTML);
    }
};

export const heroDestacadasInit = () => {
    if (document.getElementById('heroDestacadas')) {
        renderizarTarjetaTerapeuta();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    heroDestacadasInit();
});