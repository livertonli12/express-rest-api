process.env.NODE_ENV = process.env.NODE_ENV || 'production';
var port = process.env.PORT || 8000

var mongoose    = require('./config/mongoose'),
    express     = require('./config/express');

//----------------------------------------------
//    Inicialização do app
//----------------------------------------------

var db = mongoose();
var app = express();

app.listen(port, function(){
    console.log('Servidor rodando na porta: ' + port);
});

module.exports = app;
