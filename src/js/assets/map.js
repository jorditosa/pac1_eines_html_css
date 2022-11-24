// eslint-disable-next-line import/no-extraneous-dependencies
import L from 'leaflet';

const latitud = 42.13;
const longitud = 1.59;

const coords = [latitud, longitud];

try {
  const map = L.map('mapa').setView(coords, 13);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
} catch (error) {
  console.log(error);
}
