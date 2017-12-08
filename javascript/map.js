"use strict";

function initMap() {
  let jogwad = {lat: 20.8830465, lng: 73.16667529999995};

  let mapDemo = document.getElementById("map");
  // this sets the default location for when the map is first loaded
  let map = new google.maps.Map(mapDemo, {
    zoom: 14,
    center: jogwad
  });

  // these set different markers you want to show on your map
  let markerJogwad = new google.maps.Marker({
    position: jogwad,
    map: map,
    title: 'The Good Guys'
  });
}
