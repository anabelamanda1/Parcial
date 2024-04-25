const viajes = [
    {
        "id": "001",
        "nombre": "Rutas del Perú",
        "detalle": "Rutas ancestrales: Descubriendo la historia",
        "descripcion": [
            {
                "Duracion": "10 días",
                "Fecha": "12/10/2023",
                "Origen": "Lima",
                "Destino":"Cuzco",
                "Conductor":"Alberto Rojas"
            }
        ]
    },

    {
        "id": "002",
        "nombre": "Rutas del Perú",
        "detalle": "Aventura en la naturaleza salvaje",
        "descripcion": [
            {
                "Duracion": "5 días",
                "Fecha": "10/02/2023",
                "Origen": "Lima",
                "Destino":"Loreto",
                "Conductor":"Juan Quispe"
            }
        ]
    },

    {
        "id": "003",
        "nombre": "Rutas del Perú",
        "detalle": "Destinos exóticos: Explorando lo desconocido",
        "descripcion": [
            {
                "Duracion": "9 días",
                "Fecha": "25/09/2022",
                "Origen": "Lima",
                "Destino":"Ica",
                "Conductor":"Alberto Rojas"
            }
        ]
    },

    {
        "id": "004",
        "nombre": "Rutas del Perú",
        "detalle": "Viaje gastronómico: Sabores del mundo",
        "descripcion": [
            {
                "Duracion": "05 días",
                "Fecha": "01/05/2022",
                "Origen": "Lima",
                "Destino":"Arequipa",
                "Conductor":"Juan Quispe"
            }
        ]
    },

    {
        "id": "005",
        "nombre": "Rutas del Perú",
        "detalle": "Ciudades encantadas: Misterios urbanos",
        "descripcion": [
            {
                "Duracion": "25 días",
                "Fecha": "12/12/2021",
                "Origen": "Lima",
                "Destino":"Ancash",
                "Conductor":"Alberto Rojas"
            }
        ]
    },

    {
        "id": "006",
        "nombre": "Rutas del Perú",
        "detalle": "Relax y rejuvenecimiento: Escapada al paraíso",
        "descripcion": [
            {
                "Duracion": "03 días",
                "Fecha": "20/05/2021",
                "Origen": "Lima",
                "Destino":"Piura",
                "Conductor":"Juan Quispe"
            }
        ]
    },

    {
        "id": "007",
        "nombre": "Rutas del Perú",
        "detalle": "Experiencia cultural: Tradiciones locales",
        "descripcion": [
            {
                "Duracion": "06 días",
                "Fecha": "01/01/2021",
                "Origen": "Lima",
                "Destino":"Cajamarca",
                "Conductor":"Alberto Rojas"
            }
        ]
    },

    {
        "id": "008",
        "nombre": "Rutas del Perú",
        "detalle": "Aventura extrema: Desafíos en lo alto",
        "descripcion": [
            {
                "Duracion": "10 días",
                "Fecha": "03/10/2020",
                "Origen": "Lima",
                "Destino":"Cuzco",
                "Conductor":"Juan Quispe"
            }
        ]
    },

    {
        "id": "009",
        "nombre": "Rutas del Perú",
        "detalle": "Romance en el horizonte: Destinos para enamorados",
        "descripcion": [
            {
                "Duracion": "10 días",
                "Fecha": "12/01/2020",
                "Origen": "Lima",
                "Destino":"La Libertad",
                "Conductor":"Quipe Rojas"
            }
        ]
    },

    {
        "id": "010",
        "nombre": "Rutas del Perú",
        "detalle": "Viaje en el tiempo: Descubriendo el pasado y el futuro",
        "descripcion": [
            {
                "Duracion": "10 días",
                "Fecha": "12/10/2019",
                "Origen": "Lima",
                "Destino":"Puno",
                "Conductor":"Alberto Rojas"
            }
        ]
    }
];

const $misViajes = $("#misViajes");
viajes.forEach((viaje) => {
    const link = "Viajes.html?idViaje="+viaje.id;
    const template = `
        <li class="collection-item avatar" data-id="${viaje.id}">
            <i class="material-icons circle red">play_arrow</i>
            <span class="title">${viaje.nombre}</span>
            <p>
                ${viaje.detalle}        
            </p>
            <a href="${link}" class="waves-effect waves-light btn btnIcon">
                <i class="material-icons">grade</i>
                Ver descripción
            </a>
        </li>
    `;
    $misViajes.append(template);
});

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const idViaje = params.get("idViaje");
let descripcionV = [];
if (idViaje) {
    viajes.forEach((viaje) => {
        if (viaje.id == idViaje) {
            const mytitle = "Historial de viaje" + viaje.nombre;
            $("#myTitle").html(mytitle);
            descripcionV = viaje.descripcion;           
        }
    });
    if (descripcionV.length > 0) {
        descripcionV.forEach((desViaje)=> {
            const template = `
                <li class="collection-item">
                    <p class="duracion">Duracion: ${desViaje.Duracion}</p>
                    <p class="fecha">${desViaje.Fecha}</p>
                    <p class="origen">${desViaje.Origen}</p>
                    <p class="destino">${desViaje.Destino}</p>
                    <p class="conductor">${desViaje.Conductor}</p>
                </li>
            `;
            $("#miDesc").append(template);
        });
    }
}

// Redirigir a index.html si el usuario no ha iniciado sesión
document.addEventListener("DOMContentLoaded", function() {
    const sesion = localStorage.getItem("sesion");
    if (!sesion) {
        alert("Por favor, inicia sesión para acceder a esta página.");
        location.href = "Index.html";
    }

    document.getElementById('logout').addEventListener('click', function() {
        localStorage.removeItem('sesion');
        window.close();
    });
});

$(document).ready(function() {
    const $misViajes = $("#misViajes");
    const $verMasBtn = $("#verMasBtn");

    function mostrarViajes(viajes) {
        $misViajes.empty(); 

        viajes.forEach((viaje) => {
            const link = "Viajes.html?idViaje=" + viaje.id;
            const template = `
                <li class="collection-item avatar" data-id="${viaje.id}">
                    <i class="material-icons circle red">play_arrow</i>
                    <span class="title">${viaje.nombre}</span>
                    <p>${viaje.detalle}</p>
                    <a href="${link}" class="waves-effect waves-light btn btnIcon">
                        <i class="material-icons">grade</i>
                        Ver descripción
                    </a>
                </li>
            `;
            $misViajes.append(template);
        });
    }

    const ultimosViajes = viajes.slice(Math.max(viajes.length - 4, 0));
    mostrarViajes(ultimosViajes);
    $verMasBtn.on("click", function() {
        mostrarViajes(viajes); 
        $verMasBtn.hide(); 
    });
});