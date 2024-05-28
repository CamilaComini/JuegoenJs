document.addEventListener('DOMContentLoaded', function () {
    const characterForm = document.getElementById('characterForm');
    const iniciarBtn = document.getElementById('iniciarBtn');
    const lucharBtn = document.getElementById('lucharBtn');
    const huirBtn = document.getElementById('huirBtn');
    const pruebaFinalBtn = document.getElementById('pruebaFinalBtn');

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
        Swal.fire('¡Personaje creado!', `Bienvenido, ${personaje.nombre}`, 'success')
            .then(() => {
                mostrarBotones();
                Swal.fire('Aventura iniciada', `Hola ${personaje.nombre}, eres un ${personaje.clase} armado con una ${personaje.arma} y un ${personaje.transporte} de vehículo. ¡Comienza tu viaje!`, 'info')
                    .then(() => {
                        avanzarAventura();
                    });
            });
    });

    lucharBtn.addEventListener('click', enfrentarEnemigo);
    huirBtn.addEventListener('click', function() {
        Swal.fire("Has decidido huir. ¡Hasta la próxima aventura!");
        ocultarBotones();
    });
    pruebaFinalBtn.addEventListener('click', enfrentarJefeFinal);

    function mostrarBotones() {
        iniciarBtn.style.display = 'none'; 
        lucharBtn.style.display = 'inline-block';
        huirBtn.style.display = 'inline-block';
        pruebaFinalBtn.style.display = 'inline-block';
    }

    function ocultarBotones() {
        iniciarBtn.style.display = 'none';
        lucharBtn.style.display = 'none';
        huirBtn.style.display = 'none';
        pruebaFinalBtn.style.display = 'none';
    }
    
    function avanzarAventura() {
        Swal.fire('Aventura','Bienvenido a la mazmorra sempiterna, la primera mazmorra sin fin donde te enfrentarás a los enemigos más temibles de la historia. Tu aventurero tiene lo necesario para entrar a estos pisos interminables y poder escapar derrotando a un temeroso jefe final donde todo será puesto en dudas. Si es así, ¡bienvenido a la mejor mazmorra! Toca el botón de iniciar aventura para adentrarte en las paredes del inframundo.','info')
        .then(() => {
            if (Math.random() < 0.3) {
                Swal.fire('Avanzando en la aventura', 'Caminando por la mazmorra, ves que se empieza a dividir en dos caminos, pero después de un fuerte estruendo, se bloquea el camino de la derecha, obligándote a ir por la izquierda.', 'info')
                    .then(() => {
                        enfrentarEnemigo(); 
                    });
            } else {
                Swal.fire('Avanzando en la aventura', 'Caminando por la mazmorra, ves que se empieza a dividir en dos caminos, pero después de un fuerte estruendo, se bloquea el camino de la izquierda, obligándote a ir por la derecha.', 'info')
                    .then(() => {
                        enfrentarEnemigo();
                    });
                }
        });
    }

    async function obtenerEnemigo() {
        const response = await fetch('/Json/enemigo.json');
        if (!response.ok) {
            throw new Error('Error al cargar los datos del enemigo');
        }
        const data = await response.json();
        const indiceEnemigo = Math.floor(Math.random() * data.length);
        const nombreEnemigo = data[indiceEnemigo].nombre;
        return nombreEnemigo;
    }

    async function enfrentarEnemigo() {
        try {
            const nombreEnemigo = await obtenerEnemigo();
            Swal.fire({
                title: 'Enfrentar Enemigo',
                text: `Te encuentras con ${nombreEnemigo}, ¿quieres luchar o huir?`,
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Luchar',
                cancelButtonText: 'Huir'
            }).then((result) => {
                if (result.isConfirmed) {
                    const resultadoBatalla = Math.random() < 0.5 ? 'victoria' : 'derrota'; // Random para decidir victoria o derrota
    
                    if (resultadoBatalla === 'victoria') {
                        Swal.fire('Victoria', `Has derrotado a ${nombreEnemigo} con éxito`, 'success');
                    } else {
                        Swal.fire('Derrota', `Lamentablemente, ${nombreEnemigo} te ha derrotado. ¡Mejor suerte la próxima vez!`, 'error');
                    }
                } else {
                    Swal.fire('Huir', 'Has decidido huir. ¡Hasta la próxima aventura!', 'info');
                    ocultarBotones();
                }
            });
        } catch (error) {
            Swal.fire('Error', 'No se pudo cargar el nombre del enemigo. Inténtalo de nuevo más tarde.', 'error');
        }
    }

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

    async function enfrentarJefeFinal() {
        try {
            const nombreJefe = await obtenerNombreJefeFinal();
            Swal.fire({
                title: 'Enfrentar Jefe Final',
                text: `Te encuentras con el jefe más temeroso de todos, su nombre es ${nombreJefe}. ¿Estás seguro de que tienes lo necesario para vencerlo?`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, estoy listo',
                cancelButtonText: 'No, mejor no'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('¡Felicidades!', 'Has logrado escapar de este principio sin fin. Aunque, ¿estás seguro de que escapaste?', 'success');
                } else {
                    Swal.fire('Valentía nula', 'Esa valentía es nula.', 'error');
                }
            });
        } catch (error) {
            Swal.fire('Error', 'No se pudo cargar el nombre del jefe final. Inténtalo de nuevo más tarde.', 'error');
        }
    }    
});