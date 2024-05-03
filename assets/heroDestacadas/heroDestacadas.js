// Importa los datos de las terapeutas
import terapeutas from '../sis/masagistas/bd_terapeutas.js';

// Array de índices de terapeutas a mostrar
const indicesTerapeutasAMostrar = [0, 2, 4]; // Por ejemplo, mostrar los terapeutas 0, 2 y 4

// Función para generar el HTML de la tarjeta de un terapeuta
const generarTarjetaTerapeuta = (terapeuta) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('heroDestacadas-card');

    // Contenido de la tarjeta de terapeuta
    cardElement.innerHTML = `
    <div class="w100 fx -c -a-c -j-c a768-r">
        <div class="w100 h100 fx -c -a-c -j-c">
            <h4>¿Buscas un terapeuta?</h4>
            <h5> Te presentamos a ${terapeuta.Nombre}</h5>
            <img class="heroDestacadas-img" src="${terapeuta.img0}" alt="${terapeuta.Nombre}">
            <p> Realiza:</p>
            <p class="heroDestacadas-masagType">${terapeuta.masageType}</p>
            <h4>Atiende en:</h4>
            <p>${terapeuta.Ubicacion}</p>
            <p>${terapeuta.dias}</p>
            <p>${terapeuta.horarios}</p>
            <p>Contacta con ${terapeuta.Nombre} ahora !</p>
            <p>${terapeuta.whatsapp}</p>
        </div>
    </div>
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
        const tarjetaHTML = generarTarjetaTerapeuta(terapeutaAMostrar);
        heroDestacadas.appendChild(tarjetaHTML);
    } else {
        console.error("No se encontró el elemento con ID 'heroDestacadas'");
    }
};
