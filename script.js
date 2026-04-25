import Globe from 'globe.gl';

const myGlobe = Globe()
  (document.getElementById('globeViz'))
  .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')

function checkView() {
  const pov = myGlobe.pointOfView();
  const lat = pov.lat;
  const lng = pov.lng;

  const hemNS = lat < 0 ? "South" : "North";
  const hemEW = lng < 0 ? "West" : "East";

  if (lat == 0) {
    hemNS = "Equator";
    hemEW = "";
  }

  if (lng == 0) {
    hemNS = "Prime Meridian";
    hemEW = "";
  }

  document.getElementById('infoBox').innerText =
    `Lat: ${lat.toFixed(2)}\n` +
    `Lng: ${lng.toFixed(2)}\n` +
    `Hemisphere: ${hemNS} ${hemEW}`;
}
setInterval(checkView, 1000);
