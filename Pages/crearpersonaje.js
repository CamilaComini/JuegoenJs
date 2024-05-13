document.addEventListener('DOMContentLoaded', function () {
    const characterForm = document.getElementById('characterForm');

    characterForm.addEventListener('submit', function (event) {
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
        iniciarAventura();
    });
});
