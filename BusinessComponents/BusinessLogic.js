var socketOpers = require('./SocketOperations');
//var dbOpers = require('./DBOperations');
//var fileOpers = require('./FileOperations');
//var constants = require('../constants');

var businessLogic = module.exports = {
SetUserID: function (data, socket, io) {
    socketOpers.SetUserID(data, socket, io);
},
Onlineusers: function (data, socket, io) {
        socketOpers.Onlineusers(data, socket, io);
},
SendNotificationMessage: function (req, res)
    {
    socketOpers.SendNotificationMessage(req, res);
    },

leavechat: function (data, socket, io) {
        socketOpers.leavechat(data, socket, io);
    },
}