const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// Servir contenido estático
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', { titulo: 'Curso de node', nombre: 'José Santamaría' });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        titulo: 'Curso de node',
        nombre: 'José Santamaría',
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        titulo: 'Curso de node',
        nombre: 'José Santamaría',
    });
});

app.get('*', (req, res) => {
    res.render('404', { titulo: 'Curso de node', nombre: 'José Santamaría' });
});

app.listen(port, () => console.log(`Escuchando en el puerto: ${port}`));
