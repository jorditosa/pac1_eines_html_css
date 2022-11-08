// filter menu
const navItem = document.querySelectorAll('.categories__nav--item');
const galleryItem = document.querySelectorAll('.categories__item');

// Seleccion del boton activo
function setActiveItem(e) {
  // Quitar la clase active del elemento antiguo
  navItem.forEach((item) => {
    item.classList.remove('active-link');

    // añadir la clase active al elemento seleccionado
    e.target.classList.add('active-link');
  });
}

function reseting() {
  // Resetando el filtro
  galleryItem.forEach((item) => {
    item.classList.add('item-visible');
    item.classList.remove('item-hidden');
  });
}

function filterItem(e) {
  // Activar elemento navegación seleccionado
  setActiveItem(e);

  // Reseteando el filtro
  reseting();

  // Iterar sobre los articulos
  galleryItem.forEach((item) => {
    // Obtener valor atributo y clasificacion del articulo
    const itemType = item.dataset.img;
    // Obtener el valor del elemento del menu navegacion seleccionado
    const navType = e.target.dataset.btn;

    // Comenzar con el filtrado comparando valores
    if (navType === 'all') {
      item.classList.add('item-visible');
      item.classList.remove('item-hidden');
    } else if (itemType !== navType) {
      item.classList.remove('item-visible');
      item.classList.add('item-hidden');
    }
  });
}

navItem.forEach((item) => {
  item.addEventListener('click', filterItem);
});
