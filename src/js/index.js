/* eslint-disable import/no-extraneous-dependencies */
// Importando dependencias
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import videojs from 'video.js';
import 'videojs-css/dist/videojs-css';

// Importacion archivos de efectos creados propiamente
import './assets/filtradoCat';
import './assets/collapseMenu';

// Api de clima
import './assets/climaAPI';

// Inicializaciones
AOS.init();
videojs('my-player');
