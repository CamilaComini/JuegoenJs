const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
if (req.url === '/archivoenemigo.json') {
    fs.readFile('/Json/enemigo.json', (err, data) => {
    if (err) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('404 Not Found');
        return res.end();
    }
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(data);
    return res.end();
    });
}

else if (req.url === '/archivojefe.json') {
    fs.readFile('/Json/jefefinal.json', (err, data) => {
    if (err) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('404 Not Found');
        return res.end();
    }
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(data);
    return res.end();
    });
}

else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('404 Not Found');
    return res.end();
}
});

server.listen(3000, () => {
console.log('Servidor en ejecución en el puerto 3000');
});
