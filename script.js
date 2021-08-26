const btnMobile = document.querySelector('.btn-mobile');

btnMobile.addEventListener('click', toggleMenu)

function toggleMenu() {
  const nav = document.querySelector('#nav');
  nav.classList.toggle('active');
}