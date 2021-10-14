// This is the main file of our chat app. It initializes a new 
// express.js instance, requires the config and routes files
// and listens on a port. Start the application by running
// 'node server.js' in your terminal

var bodyParser = require('body-parser');
var express = require('express'),
app = express();
var config = require('./config');
var swagger = require('swaggerize-express');
var swaggerUi = require('swaggerize-ui');
var constants = require('./constants');// second change
var path = require('path');

var port = process.env.PORT || 8083;
var io = require('socket.io').listen(app.listen(port));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

swagger.setHeaders = function setHeaders(res) {
    res.header("Content-Type", "application/json; charset=utf-8");
};

app.use(swagger({
    api: path.resolve('./apiswagger/api.json'),
    docspath: '/swagger',
    handlers: path.resolve('./Handlers')
}));

// change four
app.use('/docs', swaggerUi({
    docs: '/swagger'
}));

require('./TransportLayer/TCPRoute')(app, io);
require('./TransportLayer/HTTPRoute')(app, io);
console.log('Your application is running on http://localhost:' + port);