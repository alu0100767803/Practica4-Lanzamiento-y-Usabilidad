//importar
var express = require('express');

//instanciar
var app = express();

app.get('/', function(req, res){
	res.sendfile(__dirname + '/public/index.html');
});

app.use(express.static('public'));

app.listen(8000);

console.log("Servidor Express esuchando en modo %s", app.settings.env);