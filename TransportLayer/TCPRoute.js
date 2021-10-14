// This file is required by app.js. It sets up event listeners
// for the two main URL endpoints of the application - /create and /chat/:id
// and listens for socket.io messages.

// Use the gravatar module, to turn email addresses into avatar images:

//var gravatar = require('gravatar');
var businessLayer = require('../BusinessComponents/BusinessLogic');


var messages='';
// Export a function, so that we can pass 
// the app and io instances from the app.js file:

module.exports = function (app, io) {
    io.sockets.on('connection', function (socket) {

        socket.on('setuserid', function (data) {
            businessLayer.SetUserID(data, socket, io);
        });

        socket.on('onlineusers', function (data) {
            businessLayer.Onlineusers(data, socket, io);
        });
       
        socket.on('leavechat', function (data) {
            //console.log("leave chat called=============");
            businessLayer.leavechat(data, socket, io);
        });
    });
}


