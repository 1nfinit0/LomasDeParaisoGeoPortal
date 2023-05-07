const header = document.getElementsByTagName('header')[0];
const main = document.getElementsByTagName('main')[0];
const footer = document.getElementsByTagName('footer')[0];
const logoContainer = document.querySelector('.logo-container');
const logo = document.getElementsByClassName('logo-container')[0];


header.style.display = 'none';
main.style.display = 'none';
footer.style.display = 'none';

function beat() {
  logoContainer.classList.add('beating');
  setTimeout(() => {
    logoContainer.classList.remove('beating');
  }, 300);
}
setInterval(beat, 1000);

setTimeout(() => {
  logo.style.transition = 'opacity 1s ease-in-out';
  logo.style.opacity = 0;
}, 4000);
setTimeout(() => {
  header.style.display = 'block';
  main.style.display = 'block';
  footer.style.display = 'block';
  logo.style.display = 'none';
}, 5000);


const toggleBtn = document.querySelector('.toggle-btn');
const svgIcon = document.querySelector('.icon');
const iconInitial = document.querySelector('.icon-initial');
const iconClose = document.querySelector('.icon-close');
const checkbox = toggleBtn.querySelector('input[type="checkbox"]');
const content = document.getElementsByClassName('menu-content')[0];
const menu = document.querySelector('.menu');
const relleno = document.querySelector('.relleno');

relleno.addEventListener('click', function() {
  iconInitial.style.display = 'block';
  iconClose.style.display = 'none';
  content.style.transform = 'translateX(-100%)';
  document.body.style.overflow = '';
  checkbox.checked = false;
});

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    iconInitial.style.display = 'none';
    iconClose.style.display = 'block';
    content.style.transform = 'translateX(0)';
    document.body.style.overflow = 'hidden'; // Desactivar el scroll vertical
  } else {
    iconInitial.style.display = 'block';
    iconClose.style.display = 'none';
    content.style.transform = 'translateX(-100%)';
    document.body.style.overflow = ''; // Activar el scroll vertical
  }
});

