const d = document,
    n = navigator;

export default function getGeolocation(id){
    const $id = d.getElementById(id),
        options = {
            enableHighAccuracy: true,//Acelera el hardware para tomar la mejor lectura
            timeout: 5000,//Tiempo máximo en esperar la lectura
            maximumAge: 0//No se guarda en cache la lectura y no se tome la anterior como referencia
        },
        success = position => {
            let coords = position.coords;
            $id.innerHTML = `
            <p>Tu posición actual es:</p>
            <ul>
                <li>Latitud: <b>${coords.latitude}</b></li>
                <li>Longitud: <b>${coords.longitude}</b></li>
                <li>Precisión: <b>${coords.accuracy}</b> metros</li>
            </ul>
            <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},16z" target="_blank" rel="noopener">Ver en Google Maps</a>
            `;
        },
        error = err => {};

    n.geolocation.getCurrentPosition(success, error, options);
}