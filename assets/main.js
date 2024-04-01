// NavBar
import { toggleNav } from './nav/nav.js';

document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.burger');
  burger.addEventListener('click', toggleNav);
});

// // Hero carrousel de frases
// import { heroFrases } from './hero/hero.js';

// document.addEventListener('DOMContentLoaded', function() {
//   heroFrases();
// });

// Importa la función para renderizar las tarjetas de terapeutas
import { renderAllTerapeutas } from '../assets/sis/masagistas/renderTerapeutas.js';
// Importa los datos de las terapeutas
import terapeutas from '../assets/sis/masagistas/bd_terapeutas.js';
// Importa la función para renderizar las terapeutas destacadas
import { renderDestacadas } from '../assets/destacadas/destacadas.js';

// Llamar a la función para renderizar todas las terapeutas cuando se cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
    renderAllTerapeutas(terapeutas);
    renderDestacadas(); // Agrega esta línea para renderizar las terapeutas destacadas
});
