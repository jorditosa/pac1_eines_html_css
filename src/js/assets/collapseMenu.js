const toggles = document.querySelectorAll('.presentacio__list--item svg');

toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});