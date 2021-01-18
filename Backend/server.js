// Imports
var express = require('express');

// Instantiate server
var app = express();

// Config routes
app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1>Groupomania</h1>');
});

// Launch server
app.listen(8080, function () {
    console.log('Serveur en écoute')
})