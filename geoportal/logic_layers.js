//Coordenadas de loc 4 puntos extremos del mapa (No es necesario)
var boundary = [-81.3899688720703, -18.4412956237793, -68.5886001586914, 0.0298568718135357];

// Establecemos la variable para ajustar el nivel de zoom según el dispositivo, el primero es para móviles y el segundo para el resto
var zoomLevel = L.Browser.mobile ? 5 : 6; 

//Establece el centro del mapa y tanbién aplicamos la variale zoom
var map = L.map('map', {
    center: [(boundary[1] + boundary[3]) / 2, (boundary[0] + boundary[2]) / 2],
    zoom: zoomLevel,
});

//Escogemos el mapabase que usaremos (añadir más)
L.tileLayer('http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',{ }).addTo(map);

// Botón de restablecer vista del mapa
var resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', function() {
    map.setView([(boundary[1] + boundary[3]) / 2, (boundary[0] + boundary[2]) / 2], zoomLevel);
});

/**
 * LÓGICA DEL MANEJO DE CAPAS EN EL MAPA
 */
//var anotherLayer = L.geoJSON(data).addTo(map);


const checkboxes = document.querySelectorAll('.subopcion-checkbox');

const geoJSONLayers = {
    'subopcion_distrital': limDistrital,
    // Asocia más checkboxes con sus respectivas capas GeoJSON
};

checkboxes.forEach(checkbox => {
    const layerId = checkbox.id;
    let activeLayer = null;
    
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            // Si el checkbox está activado, verifica si la capa ya está en el mapa antes de agregarla
            const existingLayer = geoJSONLayers[layerId];
            if (existingLayer && !map.hasLayer(existingLayer)) {
                if (activeLayer) {
                    map.removeLayer(activeLayer);
                }
                activeLayer = L.geoJSON(existingLayer).addTo(map);
            }
        } else {
            // Si el checkbox está desactivado, remueve la capa correspondiente del mapa
            if (activeLayer) {
                map.removeLayer(activeLayer);
                activeLayer = null;
            }
        }
    });
});


