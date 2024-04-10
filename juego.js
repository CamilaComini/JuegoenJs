function jugarAventura() {
    alert('¡Bienvenido a la aventura!');
    alert(`Hola ${personaje.nombre}, eres un ${personaje.clase} armado con una ${personaje.arma} y un ${personaje.transporte} de vehiculo. ¡Comienza tu viaje!`);
    
    while (true) {
    enfrentarEnemigo();
    if (Math.random() < 0.3) {
        alert('Encuentras una mejora en tu camino. ¡Tu velocidad aumenta!');
    } else {
        alert('Tropiezas y pierdes algo de tu economía.');
    }
    if (Math.random() < 0.2) {
        enfrentarJefeFinal();
        alert('¡Has completado esta aventura!');
        break;
    }
}
}

jugarAventura();

function enfrentarEnemigo() {
    const objetos = [
    {id:1, nombre:"Can cervero"},
    {id:2, nombre:"Quimeras"},
    {id:3, nombre:"Hidras"},
    {id:4, nombre:"Cíclopes"},
    {id:5, nombre:"Minotauro"},
    {id:6, nombre:"Baby Doll"},
    {id:7, nombre:"Deadshot"},
    {id:8, nombre:"Joker"},
    ]

let indiceNombreActual = 0;

function obtenerSiguienteNombre() {

const nombreActual = objetos[indiceNombreActual].nombre;
indiceNombreActual = (indiceNombreActual + 1) % objetos.length;
return nombreActual;
}


    const decision = prompt(`Te encuentras con un ${obtenerSiguienteNombre()}. ¿Quieres luchar o huir? (Luchar/Huir)`);
    
    if (decision === 'Luchar') {
    alert('¡Has derrotado al enemigo!');
    } else {
    alert('Escapas del enemigo y sigues tu camino.');
    }
}

function enfrentarJefeFinal() {
    const jefefinal = Math.random() < 0.5 ? 'Dragon' : 'Extraterrestre';
    const decision = prompt(`Te encuentras con un ${jefefinal}. ¿Listo para tu prueba final? (Si)`);

    if (decision === 'Si') {
        alert('¡Felicidades has derrotado al jefe final!');
        } else {
        alert('La proxima vez podras');
        }
}


