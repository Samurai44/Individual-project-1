function toggleMenu(visible) {
  document.querySelector('.logo').classList.toggle('show', visible)
}

document.querySelector('.hamburger').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu()
});
