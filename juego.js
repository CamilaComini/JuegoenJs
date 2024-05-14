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
        alert("¡Personaje creado! Bienvenido, " + personaje.nombre);

        await iniciarAventura();
    });

    const iniciarBtn = document.getElementById('iniciarBtn');
    iniciarBtn.addEventListener('click', iniciarAventura);
});

async function iniciarAventura() {
    const personaje = JSON.parse(sessionStorage.getItem('personaje'));
    if (personaje) {
        mostrarMensaje(`Hola ${personaje.nombre}, eres un ${personaje.clase} armado con una ${personaje.arma} y un ${personaje.transporte} de vehículo. ¡Comienza tu viaje!`);
        mostrarMensaje('Bienvenido a la mazmorra sempiterna, la primera mazmorra sin fin donde te enfrentaras a los enemigos más temibles de la historia. Tu aventurero tienes lo necesario para entrar a estos pisos interminables y poder escapar derrotando a un temeroso jefe final donde todo será puesto en dudas. Si es así! Bienvenido a la mejor mazmorra. Toca el botón de iniciar aventura para adentrarte a las paredes del inframundo.')
        await avanzarAventura();
    } else {
        mostrarMensaje('Error: No se ha encontrado un personaje. Por favor, crea un personaje primero.');
    }
    window.location.href = "iniciaraventura.html";
}

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

async function obtenerEnemigo() {
    const response = await fetch('/archivoenemigo.json');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const indiceEnemigo = Math.floor(Math.random() * data.length);
    const nombreEnemigo = data[indiceEnemigo].nombre;
    return nombreEnemigo;
}

async function enfrentarEnemigo() {
    const nombreEnemigo = await obtenerEnemigo();
    mostrarMensaje(`Te encuentras con ${nombreEnemigo}, ¿quieres luchar o huir?`);
}

async function obtenerNombreJefeFinal() {
    const response = await fetch('/archivojefe.json');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const indiceJefe = Math.floor(Math.random() * data.length);
    const nombreJefe = data[indiceJefe].nombre;
    return nombreJefe;
}

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
    alert(mensaje);
}
