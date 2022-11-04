// filter menu
const navItem = document.querySelectorAll('.categories__nav--item');
const galleryItem = document.querySelectorAll('.categories__item');

for (let i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener('click', filterItem);
}

// Seleccion del boton activo
function setActiveItem(e) {
  // Quitar la clase active del elemento antiguo
  navItem.forEach((item) => {
    item.classList.remove('active-link');

    // añadir la clase active al elemento seleccionado
    e.target.classList.add('active-link');
  });
}

function filterItem(e) {
  // Activar elemento navegación seleccionado
  setActiveItem(e);

  // Iterar sobre los articulos
  galleryItem.forEach((item) => {
    item.classList.remove('item-hidden');
    item.classList.add('item-visible');

    // Obtener valor atributo y clasificacion del articulo
    const itemType = item.dataset.img;
    // Obtener el valor del elemento del menu navegacion seleccionado
    const navType = e.target.dataset.btn;

    // Comenzar con el filtrado comparando valores
    if (itemType !== navType) {
      item.classList.remove('item-visible');
      item.classList.add('item-hidden');
    }
  });
}

// configurando el evento click al elemento de nevagcion de Totes
navItem[0].addEventListener('click', (e) => {
  setActiveItem(e);

  galleryItem.forEach((item) => {
    item.classList.remove('item-hidden');
    item.classList.add('item-visible');
  });
});
