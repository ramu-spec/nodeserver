var businessLayer = require('../BusinessComponents/BusinessLogic');


module.exports = function (app, io) {

    app.post('/SendChatMessage', function (req, res) {
        console.log(req.body)
        businessLayer.SendNotificationMessage(req.body, res);
    });
};







