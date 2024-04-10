// Lista de frases
const frases = [
  {
    frase: 'El masaje que buscas',
  },
  {
    frase: 'Ahora en tu ciudad',
  },
  {
    frase: 'Lisboa',
  },
  {
    frase: 'las mejores terapeutas',
  }
];

// Busca un objeto con id herofrases
const herofrases = document.getElementById('herofrases');

// Función para cambiar las frases
const cambiarFrase = () => {
  let index = 0;
  setInterval(() => {
    herofrases.textContent = frases[index].frase;
    index = (index + 1) % frases.length;
  }, 5000);
};

// funcion para ser llamada desde main.js
export const initHero = () => {
  // si existe herofrases, llamar a cambiarFrase
  if (herofrases) {
    cambiarFrase();
  }else
  {
    console.log('No existe herofrases');
  }
};

// Llamar a la función para renderizar las frases cuando se cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
  initHero();
});