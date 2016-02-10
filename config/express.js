var config         = require('./config'),
    express        = require('express'),
    morgan         = require('morgan'),
    compress       = require('compression'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override');

 module.exports = function(){

     //---------------------------------------------------------
     // Inicialização do Express
     //---------------------------------------------------------
     var app = express();

     //---------------------------------------------------------
     // Decisões de Ambiente | Dev x Prox
     //---------------------------------------------------------
     if(process.env.NODE_ENV === 'development'){
         app.use(morgan('dev'));
     } else if (process.env.NODE_ENV === 'production'){
         app.use(compress());
     }

     //---------------------------------------------------------
     // Middlewares de Configuração do Express
     //---------------------------------------------------------
     app.use(bodyParser.urlencoded({ extended:true }));
     app.use(bodyParser.json());
     app.use(methodOverride());

     app.set('views','./app/views');
     app.set('view engine','ejs');

     //---------------------------------------------------------
     // Configurações de Roteamento
     //---------------------------------------------------------
     require('../app/routes/index.server.routes.js')(app);
     require('../app/routes/user.server.routes.js')(app);
     require('../app/routes/articles.server.routes.js')(app);

     return app;
 }
