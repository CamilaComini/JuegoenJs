document.addEventListener('DOMContentLoaded', function () {
    const personaje = JSON.parse(sessionStorage.getItem('personaje'));
    iniciarAventura(personaje);
});

function iniciarAventura(personaje) {
    mostrarMensaje('¡Bienvenido a la aventura!');
    mostrarMensaje(`Hola ${personaje.nombre}, eres un ${personaje.clase} armado con una ${personaje.arma} y un ${personaje.transporte} de vehículo. ¡Comienza tu viaje!`);
    avanzarAventura();
}
