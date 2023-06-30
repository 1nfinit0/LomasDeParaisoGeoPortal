const toggleBtn = document.querySelector('.toggle-btn');
const svgIcon = document.querySelector('.icon');
const iconInitial = document.querySelector('.icon-initial');
const iconClose = document.querySelector('.icon-close');
const checkbox = toggleBtn.querySelector('input[type="checkbox"]');
const content = document.getElementsByClassName('menu-content')[0];
const menu = document.querySelector('.menu');




checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    iconInitial.style.display = 'none';
    iconClose.style.display = 'block';
    content.style.transform = 'translateX(0)';
    
  } else {
    iconInitial.style.display = 'block';
    iconClose.style.display = 'none';
    content.style.transform = 'translateX(-100%)';
    
  }
});


const opcionLabels = document.querySelectorAll('.opcion_label');

opcionLabels.forEach(function(opcionLabel) {
  const subopcion = opcionLabel.nextElementSibling;
  subopcion.style.display = 'none';

  opcionLabel.addEventListener('click', function() {
    if (subopcion.style.display === 'none') {
      subopcion.style.display = 'block';
    } else {
      subopcion.style.display = 'none';
    }
  });
});

opcionLabels.forEach(function(opcionLabel) {
  const subopcion = opcionLabel.nextElementSibling;
  subopcion.style.maxHeight = '0';
  subopcion.style.overflow = 'hidden';

  opcionLabel.addEventListener('click', function() {
    if (subopcion.style.maxHeight === '0px') {
      subopcion.style.maxHeight = subopcion.scrollHeight + 'px';
    } else {
      subopcion.style.maxHeight = '0';
    }
  });
});

