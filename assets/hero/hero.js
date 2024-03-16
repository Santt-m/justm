// Lista de frases
const frases = [
    "¡Descubre el poder de la relajación!",
    "Renueva tu energía con nuestros masajes terapéuticos.",
    "Sumérgete en un oasis de tranquilidad con JustMassage.",
  ];
  
  // Función para cambiar la frase cada cierto tiempo
  export function heroFrases() {
    const fraseElemento = document.getElementById('heroFrases');
    let index = 0;
  
    setInterval(() => {
      fraseElemento.textContent = frases[index];
      index = (index + 1) % frases.length;
    }, 3000); // Cambia de frase cada 3 segundos
  }
  
  // Llamamos a la función para cambiar la frase
  heroFrases();