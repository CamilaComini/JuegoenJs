document.addEventListener('DOMContentLoaded', function () {
    const characterForm = document.getElementById('characterForm');
    characterForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const personaje = {
            nombre: document.getElementById('nombre').value,
            genero: document.getElementById('genero').value,
            clase: document.getElementById('clase').value,
            arma: document.getElementById('arma').value,
            transporte: document.getElementById('transporte').value,
            objeto: document.getElementById('objeto').value
        };

        sessionStorage.setItem('personaje', JSON.stringify(personaje));
        mostrarMensaje("¡Personaje creado! Bienvenido, " + personaje.nombre);

        await iniciarAventura();
    });

    const iniciarBtn = document.getElementById('iniciarBtn');
    iniciarBtn.addEventListener('click', iniciarAventura);

    const lucharBtn = document.getElementById('lucharBtn');
    lucharBtn.addEventListener('click', enfrentarEnemigo);

    const huirBtn = document.getElementById('huirBtn');
    huirBtn.addEventListener('click', function() {
        mostrarMensaje("Has decidido huir. ¡Hasta la próxima aventura!");
    });

    const pruebaFinalBtn = document.getElementById('pruebaFinalBtn');
    pruebaFinalBtn.addEventListener('click', enfrentarJefeFinal);

    // Estilos CSS
    const style = document.createElement('style');
    style.textContent = `
        body {
            margin: 0;
            padding: 0;
            background: url('/fondomovimiento/telepoorte_fnl.mp4') center center fixed;
            background-size: cover;
            color: black;
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center; /* Centrar horizontalmente */
            align-items: center; /* Centrar verticalmente */
            height: 100vh; /* Altura total de la ventana */
            padding: 10vh; /* Espaciado vertical */
        }
        
        .buttons {
            display: flex;
            justify-content: center; /* Alinear los botones horizontalmente */
            margin-top: 20px; /* Espacio arriba */
        }
        
        .buttons button {
            margin: 0 10px; /* Espacio entre los botones */
            padding: 10px 20px;
            background-color: red;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);
});

// Llamar a iniciar la aventura
async function iniciarAventura() {
    const personaje = JSON.parse(sessionStorage.getItem('personaje'));
    if (personaje) {
        mostrarMensaje(`Hola ${personaje.nombre}, eres un ${personaje.clase} armado con una ${personaje.arma} y un ${personaje.transporte} de vehículo. ¡Comienza tu viaje!`);
        mostrarMensaje('Bienvenido a la mazmorra sempiterna, la primera mazmorra sin fin donde te enfrentarás a los enemigos más temibles de la historia. Tu aventurero tiene lo necesario para entrar a estos pisos interminables y poder escapar derrotando a un temeroso jefe final donde todo será puesto en dudas. Si es así, ¡bienvenido a la mejor mazmorra! Toca el botón de iniciar aventura para adentrarte en las paredes del inframundo.');
        await avanzarAventura();
    } else {
        mostrarMensaje('Error: No se ha encontrado un personaje. Por favor, crea un personaje primero.');
    }

}
// Implementación de avanzarAventura
async function avanzarAventura() {
    if (Math.random() < 0.3) {
        mostrarMensaje('Caminando por la mazmorra, ves que se empieza a dividir en dos caminos, pero después de un fuerte estruendo, se bloquea el camino de la derecha, obligándote a ir por la izquierda.');
    } else {
        mostrarMensaje('Caminando por la mazmorra, ves que se empieza a dividir en dos caminos, pero después de un fuerte estruendo, se bloquea el camino de la izquierda, obligándote a ir por la derecha.');
    }
    if (Math.random() < 0.2) {
        await enfrentarJefeFinal();
    } else {
        await enfrentarEnemigo();
    }
}
 // Implementación de obtenerEnemigo
async function obtenerEnemigo() {
    const response = await fetch('/json/enemigo.json');
    if (!response.ok) {
        throw new Error('Error al cargar los datos del enemigo');
    }
    const data = await response.json();
    const indiceEnemigo = Math.floor(Math.random() * data.length);
    const nombreEnemigo = data[indiceEnemigo].nombre;
    return nombreEnemigo;
}
// Implementación de enfrentarEnemigo
async function enfrentarEnemigo() {
    const nombreEnemigo = await obtenerEnemigo();
    mostrarMensaje(`Te encuentras con ${nombreEnemigo}, ¿quieres luchar o huir?`);
}
// Implementación de obtenerNombreJefeFinal
async function obtenerNombreJefeFinal() {
    const response = await fetch('/Json/jefefinal.json');
    if (!response.ok) {
        throw new Error('Error al cargar los datos del jefe final');
    }
    const data = await response.json();
    const indiceJefe = Math.floor(Math.random() * data.length);
    const nombreJefe = data[indiceJefe].nombre;
    return nombreJefe;
}
// Implementación de enfrentarJefeFinal
async function enfrentarJefeFinal() {
    const nombreJefe = await obtenerNombreJefeFinal();
    const decision = confirm(`Te encuentras con el jefe más temeroso de todos, su nombre es ${nombreJefe}. ¿Estás seguro de que tienes lo necesario para vencerlo?`);
    if (decision) {
        mostrarMensaje('¡Felicidades, has logrado escapar de este principio sin fin! Aunque, ¿estás seguro de que escapaste?');
    } else {
        mostrarMensaje('Esa valentía es nula');
    }
}

function mostrarMensaje(mensaje) {
    const mensajeElement = document.getElementById('mensaje');
    mensajeElement.innerHTML = mensaje;
}

function mostrarBoton(idBoton) {
    const boton = document.getElementById(idBoton);
    boton.style.display = 'inline-block';
}