document.addEventListener('DOMContentLoaded', function () {
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

    function enfrentarEnemigo() {
        const nombreEnemigo = obtenerEnemigo();
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
});
