const btnMobile = document.querySelector('.btn-mobile');

btnMobile.addEventListener('click', toggleMenu)

function toggleMenu() {
  const nav = document.querySelector('#barnav');
  nav.classList.toggle('active');
}