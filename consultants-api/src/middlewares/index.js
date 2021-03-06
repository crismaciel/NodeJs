const cors = require('cors');
    bodyParser = require('body-parser');
    errorHandler = require('./errorHandler');
    compress = require('compression');

    module.exports = (app) => {
        app.use(errorHandler);

        app.use(compress());

        app.use(cors({
            origin: '*',
            exposedHeaders: ['WWW-Authenticate','Server-Authorization'],
            maxAge: 5,
            credentials: true,
            allowMethods: ['GET', 'POST', 'UPDATE', 'PUT', 'PATCH', 'DELETE'],
            allowedHeaders: ['Content-Type', 'Authorization', 'Accept']
        }));
        app.use(bodyParser.json());
        app.use(bodyParser.json({type: 'appication/vnd.api+json'}));
        app.use(bodyParser.urlencoded({extended:true}));
    };
