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


var boundary = [-81.3899688720703, -18.4412956237793, -68.5886001586914, 0.0298568718135357];

var zoomLevel = L.Browser.mobile ? 5 : 6; // Ajusta el nivel de zoom según el dispositivo, el primero es para móviles y el segundo para el resto

var map = L.map('map', {
    center: [(boundary[1] + boundary[3]) / 2, (boundary[0] + boundary[2]) / 2],
    zoom: zoomLevel,
});


L.tileLayer('http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
    
}).addTo(map);


// Botón de restablecer vista del mapa
var resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', function() {
    map.setView([(boundary[1] + boundary[3]) / 2, (boundary[0] + boundary[2]) / 2], zoomLevel);
});