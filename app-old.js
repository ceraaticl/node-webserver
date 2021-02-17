const http = require('http');

http.createServer((req, res) => {
    // res.write('Hola Mundo!');

    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.write('Todo correcto!');

    // res.writeHead(404, { 'Content-Type': 'text/plain' });
    // res.write('Todo mal!');

    // res.writeHead(200, { 'Content-Type': 'application/json' });
    // const persona = {
    //     id: 18472993,
    //     nombre: 'Jose Ignacio',
    // };
    // res.write(JSON.stringify(persona));

    // res.setHeader('Content-Disposition', 'attachment; filename=personas.csv');
    // res.writeHead(200, { 'Content-Type': 'application/csv' });
    // res.write('id, nombre\n');
    // res.write('1, Juan\n');
    // res.write('2, Vale\n');
    // res.write('3, Pato\n');

    res.write('Hola Mundo!');
    res.end();
}).listen(8080);

console.log('Escuchando en el puerto: ', 8080);
