const hamburgerMenu = document.querySelector('.hamburger-menu');
const navList = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navList.classList.toggle('show');
});