let personaje = [];

function pedirOpcion(mensaje, opciones) {
    let opcion;
    do {
        opcion = prompt(mensaje).trim().toLowerCase();
    } while (!opciones.includes(opcion));
    return opcion;
}

personaje.nombre = prompt("Ingrese el nombre del personaje:");

let genero = pedirOpcion("Elija el género del personaje:\n1-Hombre\n2-Mujer\n3-Indefinido", ["1", "2", "3"]);
let generos = ["Hombre", "Mujer", "Indefinido"];
personaje.genero= generos[parseInt(genero) - 1];

let clase = pedirOpcion("Elija la clase del personaje:\n1-Guerrero\n2-Mago\n3-Arquero\n4-Extraterrestre\n5-Humano\n6-Elfo\n7-Enano", ["1", "2", "3", "4", "5", "6", "7"]);
let clases = ["Guerrero", "Mago", "Arquero", "Extraterrestre", "Humano", "Elfo", "Enano"];
personaje.clase = clases[parseInt(clase) - 1];

let arma = pedirOpcion("Elija el arma del personaje:\n1-Francotirador\n2-Varita mágica\n3-Arco\n4-Arma Extraterrestre\n5-Martillo de Thor\n6-Ak-47\n7-Espada mágica", ["1", "2", "3", "4", "5", "6", "7"]);
let armas = ["Francotirador", "Varita mágica", "Arco", "Arma Extraterrestre", "Martillo de Thor", "Ak-47", "Espada mágica"];
personaje.arma = armas[parseInt(arma) - 1];

let transporte = pedirOpcion("Elija el transporte del personaje:\n1-Caballo\n2-Auto\n3-Helicóptero\n4-Moto\n5-Bicicleta\n6-Nave extraterrestre\n7-Nave espacial", ["1", "2", "3", "4", "5", "6", "7"]);
let transportes = ["Caballo", "Auto", "Helicóptero", "Moto", "Bicicleta", "Nave extraterrestre", "Nave espacial"];
personaje.transporte = transportes[parseInt(transporte) - 1];

alert("¡Personaje creado! Bienvenido" + [personaje.nombre]);





