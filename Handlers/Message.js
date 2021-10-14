var businessLayer = require('../BusinessComponents/BusinessLogic');

module.exports = {

    get: function (req, res) {
        res.json("Success");
    },
    post: function (req, res) {
        //businessLayer.SendNotificationMessage(req.body.to, req.body.Message, res);
        //res.json("Success======" + req.body.to[0].userid + "======" + req.body.message + "====");
        //console.log(req);
        businessLayer.SendNotificationMessage(req, res);

    }
};