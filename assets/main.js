// NavBar
import { toggleNav } from './nav/nav.js';

document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.burger');
  burger.addEventListener('click', toggleNav);
});


// importa la funcion heroFrases de hero.js
import { initHero } from '../assets/hero/hero.js';
// Importa los datos de las terapeutas
import terapeutas from '../assets/sis/masagistas/bd_terapeutas.js';
// Importa la función para renderizar las terapeutas destacadas
import { renderDestacadas } from '../assets/destacadas/destacadas.js';
// Importa la función para renderizar las sesiones
import { renderSesiones } from '../assets/sesiones/sesiones.js';
// importo la funcion para renderizar las impresiones
import { renderImpresiones } from '../assets/impresiones/impresiones.js';



// Llamar a la función para renderizar todas las terapeutas cuando se cargue el DOM
document.addEventListener('DOMContentLoaded', () => {

});
