function obtenerNombreJefeFinal() {
    fetch('http://localhost:3000/jefefinal.json')
        .then(response => response.json())
        .then(data => {
            const indiceJefe = Math.floor(Math.random() * data.length);
            const nombreJefe = data[indiceJefe].nombre;
            console.log(nombreJefe);
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
}
