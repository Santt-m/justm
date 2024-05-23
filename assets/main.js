// NavBar
import { toggleNav } from './nav/nav.js';

document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.burger');
  burger.addEventListener('click', toggleNav);
});


// importa la funcion heroFrases de hero.js
import { initHero } from '../assets/hero/hero.js';

// Importa los datos de las terapeutas
import {initRenderAllTerapeutas} from '../assets/sis/masagistas/renderTerapeutas.js'

// Importa la función para renderizar las terapeutas destacadas
import { renderDestacadas } from '../assets/destacadas/destacadas.js';

// Importa la función para renderizar las sesiones
import { renderSesiones } from '../assets/sis/sesiones/sesiones.js';

// Importa la función renderImpresiones desde impresiones.js
import { renderAllImpresiones } from '../assets/impresiones/impresiones.js';

// Importa la función renderizarTarjetaTerapeuta desde heroDestacadas.js
import { heroDestacadasInit } from './heroDestacadas/heroDestacadas.js';



// Llamar a la función para renderizar todas las terapeutas cuando se cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
});
