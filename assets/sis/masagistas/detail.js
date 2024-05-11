// Importa los datos de los terapeutas
import terapeutas from './bd_terapeutas.js';

// Obtener el ID del terapeuta de la URL
const urlParams = new URLSearchParams(window.location.search);
const terapeutaId = parseInt(urlParams.get('id')); // Convertir el ID a un número
console.log("ID del terapeuta buscado:", terapeutaId);

// Función para obtener los detalles del terapeuta por su ID
const obtenerDetallesTerapeuta = (id) => {
    // Suponiendo que terapeutas es una lista con todos los terapeutas
    const terapeuta = terapeutas.find(terapeuta => terapeuta.ID === id);
    if (terapeuta) {
        // Mostrar los detalles del terapeuta en la página
        const terapeutaDetailsContainer = document.getElementById('terapeuta-details');
        terapeutaDetailsContainer.innerHTML = `
        <div class="modelo">
            <div class="modelo-Title fx -r -w -a-c -j-c">
                <div class="w80 a768w30">
                    <h1>${terapeuta.Nombre}</h1>
                    <p>${terapeuta.Genero}</p>
                    <p>${terapeuta.Ubicacion}</p>
                    <a href="https://api.whatsapp.com/send?phone=${terapeuta.whatsapp}&text=Justmassage%20-%20Hola%20quiero%20reservar%20un%20turno">${terapeuta.whatsapp}</a>
                </div>
                <div class="modelo-masageType w80 a768w30">
                    <p>Tipo de masajes:</p>
                    <p class="p10">${terapeuta.masageType}</p>
                </div>
            </div>
            <div class="modelo-cont w100 h100 fx -c a768-r">
                <div class="modelo-img0 w100 a768w50">
                    <img src="${terapeuta.img0}" alt="(no se encontro la imagen)">
                </div>
                <div class="modelo-text w100 a768w50">
                    <p>${terapeuta.text1}</p>
                    <p>${terapeuta.text2}</p>
                    <p>${terapeuta.text3}</p>
                    <div>
                        <h4>${terapeuta.Nombre}</h4>
                        <a href="https://api.whatsapp.com/send?phone=${terapeuta.whatsapp}&text=Justmassage%20-%20Hola%20quiero%20reservar%20un%20turno">${terapeuta.whatsapp}</a>
                        <p>${terapeuta.horarios}</p>
                        <p>${terapeuta.dias}</p>
                    </div>
                </div>
            </div>
            <div class="modelo-img w100 fx -r -w -j-s-a p5">
                <img src="${terapeuta.img1}" alt="">
                <img src="${terapeuta.img2}" alt="">
                <img src="${terapeuta.img3}" alt="">
                <img src="${terapeuta.img4}" alt="">
                <img src="${terapeuta.img5}" alt="">
            </div>
        </div>
        `;
    } else {
        console.error('No se encontró el terapeuta con el ID proporcionado.');
        // Mostrar un mensaje de error en lugar de los detalles del terapeuta
        const terapeutaDetailsContainer = document.getElementById('terapeuta-details');
        terapeutaDetailsContainer.innerHTML = '<p>No se encontró el terapeuta con el ID proporcionado.</p>';
    }
};

// Llamar a la función para obtener los detalles del terapeuta al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    obtenerDetallesTerapeuta(terapeutaId);
});
