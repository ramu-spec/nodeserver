var userslist = {};
var chatrooms = {};
var connections = {};

var userDetails = require('../Models/UserDetails');

var implemActions = module.exports = {
    SetUserID: function (data, socket, io) {
        try {
            var isuserexist = userslist[data.userid];
            if (isuserexist == undefined) {
               // console.log(data.userid);
                socket.userid = data.userid;
                var newObj = new userDetails.user(data.userid, socket.id);
               // console.log("User Data " + newObj.displayname + "============" + newObj.socketid);
                userslist[data.userid] = newObj;
                connections[data.userid] = socket;
               
            } else {
                userslist[data.userid].socketid = socket.id;
            }
        } catch (err) {
            console.log('-----------' + err);
        }
    },
    Onlineusers: function (data, socket, io) {
        try {
            socket.emit('userslist', {
                onlineusers: userslist
            });
        } catch (err) {
            console.log('-----------' + err);
        }
    },
    
    SendNotificationMessage: function sendNotificationMessage(req, res)
    {
        try {

            console.log("to===" + req.to + "=========msg========" + req.message );
           
            target = connections[req.to];
            if (target) {
               
                target.emit('Notification', req);

                console.log("notification emitted to :" + req.to);
                res.send(200);
            } else {
                console.log("connection not found.");
                res.send(404);
            }
       }
        catch (err) {
            console.log(err.message);
        }
    },

    leavechat: function leavechatroom(data,socket,io) {
        try {
            console.log("============user leave chatroom======");
            if (chatrooms[data.roomid].usercount > 0) {
                delete chatrooms[data.roomid].users[data.userid];
                //delete connections[data.roomid].users[data.userid];
                chatrooms[data.roomid].usercount--;
                io.sockets.in(data.roomid).emit('userLeftChat', {
                       roomid: data.roomid
                    });
            }
        } catch (err) {
            console.log(err.message);
        }
    }
};



