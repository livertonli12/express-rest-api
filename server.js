process.env.NODE_ENV = process.env.NODE_ENV || 'production';

var mongoose    = require('./config/mongoose'),
    express     = require('./config/express');

//----------------------------------------------
//    Inicialização do app
//----------------------------------------------

var db = mongoose();
var app = express();

app.listen(3000);

module.exports = app;

console.log('Servidor rodando');
