function obtenerEnemigo() {
    fetch('http://localhost:3000/archivojefe.json')
        .then(response => response.json())
        .then(data => {
            const indiceEnemigo = Math.floor(Math.random() * data.length);
            const nombreEnemigo = data[indiceEnemigo].nombre;
            console.log(nombreEnemigo);
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
}
