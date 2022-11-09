const container = document.querySelector('.situacio__clima');

function spinner() {
  const divSpinner = document.createElement('DIV');
  divSpinner.classList.add('sk-circle');
  divSpinner.innerHTML = `
  <div class="sk-circle1 sk-child"></div>
  <div class="sk-circle2 sk-child"></div>
  <div class="sk-circle3 sk-child"></div>
  <div class="sk-circle4 sk-child"></div>
  <div class="sk-circle5 sk-child"></div>
  <div class="sk-circle6 sk-child"></div>
  <div class="sk-circle7 sk-child"></div>
  <div class="sk-circle8 sk-child"></div>
  <div class="sk-circle9 sk-child"></div>
  <div class="sk-circle10 sk-child"></div>
  <div class="sk-circle11 sk-child"></div>
  <div class="sk-circle12 sk-child"></div>
  `;

  container.appendChild(divSpinner);
}

function limpiarSpinner() {
  const spinnerDel = document.querySelector('.sk-circle');
  spinnerDel.remove();
}

function mostrarClima(datos) {
  // Eliminar spinner una vez hecha la conexión
  limpiarSpinner();
  // creando variables a mostrar
  const { main: { temp, humidity } } = datos;
  const gradosCentigrados = parseInt(temp - 273.15, 10);

  // Crear la temperatura
  const actualTemp = document.createElement('P');
  actualTemp.innerHTML = `
  <span> Temperatura </span>
  ${gradosCentigrados} &#8451
  `;
  actualTemp.classList.add('situacio__clima--temp');
  // Crear la humedad
  const actualHum = document.createElement('P');
  actualHum.innerHTML = `
  <span> Humitat </span>
  ${humidity} %
  `;
  actualHum.classList.add('situacio__clima--hum');
  // Añadiendo al html
  container.appendChild(actualTemp);
  container.appendChild(actualHum);
}

function consultaClima() {
  // Hacer consulta
  const lat = 42.13485610158371;
  const lon = 1.5912090609255012;
  const apiKey = '0edec620b2d050e580ca05a552394cb3';
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  // Mostrar el spinner de carga
  spinner();

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((datos) => mostrarClima(datos));
}

window.onload = () => {
  consultaClima();
};
