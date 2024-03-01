import scrollTopBtn from "./dom/boton_scroll.js";
import slider from "./dom/carrusel.js";
import countdown from "./dom/cuenta_regresiva.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import searchFilters from "./dom/filtros_busqueda.js";
import getGeolocation from "./dom/geolocalizacion.js";
import hamburgerMenu from "./dom/menu_hamburguesa.js";
import responsiveMedia from "./dom/objeto_reponsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import scrollSpy from "./dom/scroll_espia.js";
import draw from "./dom/sorteo.js";
import { shortcuts, moveBall } from "./dom/teclado.js";
import darkTheme from "./dom/tema_oscuro.js";
import contactFormValidations from "./dom/validaciones-formulario.js";
import smartVideo from "./dom/video_inteligente.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("./assets/huawei-bongo-ringtones.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown("countdown", "Dec 30, 2024 00:00:00", "Feliz cumple!!!");
    scrollTopBtn(".scroll-top-btn");
    responsiveMedia(
        "youtube",
        "(min-width: 1024px)",
        '<a href="https://www.youtube.com/watch?v=vMDuyDcnhVo&list=PLrx8BnXgzlajHCIzrbBld56peyP2RX5p-" target="_blank" rel="noopener">Ver Video</a>',
        '<iframe width="640" height="360" src="https://www.youtube.com/embed/vMDuyDcnhVo?list=PLrx8BnXgzlajHCIzrbBld56peyP2RX5p-" title="Slam Dunk TV Series | Episode 01 - The Birth of a Genius Basketball Man!? | English Sub (HD)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
        );
    
    responsiveMedia(
        "gmaps",
        "(min-width: 1024px)",
        '<a href="https://maps.app.goo.gl/L83J5BeKVnFckY426" target="_blank" rel="noopener">Ver Mapa</a>',
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.7761814455766!2d-58.39518102465522!3d-34.60982077295206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac2cd859503%3A0x75cdafaaef2b946!2sCongreso%20de%20la%20Naci%C3%B3n%20Argentina!5e0!3m2!1ses!2sar!4v1707666784567!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>')
        ;
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    webCam("webcam");
    getGeolocation("geolocation");
    searchFilters(".card-filter", ".card");
    draw("#winner-btn", ".player");
    slider();
    scrollSpy();
    smartVideo();
    contactFormValidations();
});

d.addEventListener("keyup", e => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();