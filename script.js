const btnMobile = document.querySelector('.btn-mobile');

btnMobile.addEventListener('click', toggleMenu)

function toggleMenu() {
  const nav = document.querySelector('#navbar');
  nav.classList.toggle('active');
}