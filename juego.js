document.addEventListener('DOMContentLoaded', function () {
    const personaje = JSON.parse(sessionStorage.getItem('personaje'));
    const mensajeDiv = document.getElementById('mensaje');
    const iniciarBtn = document.getElementById('iniciarBtn');
    const lucharBtn = document.getElementById('lucharBtn');
    const huirBtn = document.getElementById('huirBtn');
    const pruebaFinalBtn = document.getElementById('pruebaFinalBtn');

    let enemigoActual = null;
    let puntosVida = 100; 
    let nivelActual = 1; 
    let partidasJugadas = 0; 
    let lucharEnemigo = false; 

    iniciarBtn.addEventListener('click', function() {
        iniciarAventura();
    });

    function iniciarAventura() {
        mostrarMensaje('¡Bienvenido a la aventura!');
        mostrarMensaje(`Hola ${personaje.nombre}, eres un ${personaje.clase} armado con una ${personaje.arma} y un ${personaje.transporte} de vehículo. ¡Comienza tu viaje!`);
        enfrentarEnemigo();
    }

    function mostrarMensaje(mensaje) {
        mensajeDiv.textContent += mensaje + '\n';
    }

    function enfrentarEnemigo() {
        const nombreEnemigo = obtenerSiguienteNombre();
        enemigoActual = nombreEnemigo;
        mostrarMensaje(`Te encuentras con un ${nombreEnemigo}. ¿Quieres luchar o huir?`);

        lucharBtn.style.display = 'inline';
        huirBtn.style.display = 'inline';
        pruebaFinalBtn.style.display = 'none';

        lucharBtn.onclick = function () {
            mostrarMensaje('¡Has derrotado al enemigo!');
            lucharBtn.style.display = 'none';
            huirBtn.style.display = 'none';
            setTimeout(avanzarAventura, 1000);
        };

        huirBtn.onclick = function () {
            mostrarMensaje('Escapas del enemigo y sigues tu camino.');
            lucharBtn.style.display = 'none';
            huirBtn.style.display = 'none';
            setTimeout(avanzarAventura, 1000);
        };
    }

    function avanzarAventura() {
        if (Math.random() < 0.3) {
            mostrarMensaje('Encuentras una mejora en tu camino. ¡Tu velocidad aumenta!');
        } else {
            mostrarMensaje('Tropiezas y pierdes algo de tu economía.');
        }
        if (Math.random() < 0.2) {
            enfrentarJefeFinal();
            mostrarMensaje('¡Has completado esta aventura!');
        } else {
            enfrentarEnemigo();
        }
    }

    function enfrentarJefeFinal() {
        const jefeFinal = Math.random() < 0.5 ? 'Dragon' : 'Extraterrestre';
        const decision = confirm(`Te encuentras con un ${jefeFinal}. ¿Listo para tu prueba final?`);

        if (decision) {
            mostrarMensaje('¡Felicidades has derrotado al jefe final!');
        } else {
            mostrarMensaje('La próxima vez podrás');
        }
    }

    function obtenerSiguienteNombre() {
        const objetos = [
            {id:1, nombre:"Can cervero"},
            {id:2, nombre:"Quimeras"},
            {id:3, nombre:"Hidras"},
            {id:4, nombre:"Cíclopes"},
            {id:5, nombre:"Minotauro"},
            {id:6, nombre:"Baby Doll"},
            {id:7, nombre:"Deadshot"},
            {id:8, nombre:"Joker"},
        ];

        const indiceAleatorio = Math.floor(Math.random() * objetos.length);

        return objetos[indiceAleatorio].nombre;
    }

    // Función para guardar el estado del juego en el localStorage
    function guardarEstadoJuego() {
        const estadoJuego = {
            lucharEnemigo: lucharEnemigo,
            partidasJugadas: partidasJugadas,
            puntosVida: puntosVida,
            nivelActual: nivelActual,    
        };
        localStorage.setItem('estadoJuego', JSON.stringify(estadoJuego));
    }
});
