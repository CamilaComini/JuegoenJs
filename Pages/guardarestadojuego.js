function guardarEstadoJuego() {
    const estadoJuego = {
        lucharEnemigo: lucharEnemigo,
        partidasJugadas: partidasJugadas,
        puntosVida: puntosVida,
        nivelActual: nivelActual,    
    };
    localStorage.setItem('estadoJuego', JSON.stringify(estadoJuego));
}

