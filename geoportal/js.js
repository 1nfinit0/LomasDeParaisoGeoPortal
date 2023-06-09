const logoContainer = document.querySelector('.logo-container');
const logo = document.getElementsByClassName('logo-container')[0];

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
  logo.style.display = 'none';
}, 5000);