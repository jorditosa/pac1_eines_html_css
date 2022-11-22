// Menu hamburguesa
const menuHamburguer = document.querySelector('.navbar');

export default menuHamburguer.addEventListener('click', () => {
  menuHamburguer.classList.toggle('clickHamburguer');
});
