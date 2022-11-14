const toggles = document.querySelectorAll('.presentacio__list--item img');

toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});
