export function selectOpt() {
  const linkList = document.querySelectorAll('.categories__nav--item');

  linkList.forEach(item => {
    item.addEventListener('click', () => {
      const activeLink = document.querySelector('.active-link');
      // Cambios de clase
      activeLink.classList.remove('active-link');
      item.classList.add('active-link');

      search(item);
    })
  })
}

function search(item) {
  console.log(item.textContent);
  const items = document.querySelectorAll('.categories__item');
  console.log(items);
  // Filtrado


}

selectOpt();

