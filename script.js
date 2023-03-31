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
  }, 400);
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