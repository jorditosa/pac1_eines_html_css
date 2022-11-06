// Menu hamburguesa
const navigationMenu = document.querySelector('.navbar');

export default navigationMenu.addEventListener('click', () => {
  navigationMenu.classList.toggle('activeNav');
});
