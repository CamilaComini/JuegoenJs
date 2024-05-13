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