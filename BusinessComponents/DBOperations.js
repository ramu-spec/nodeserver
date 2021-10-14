var dbAccess = require('../DataAccessLayer/DBAccess');

var dbImplementation = module.exports = {
    SendChatMessage: function (data, dao) {
        return dbAccess.SaveMessage(data, dao);
    },
    DeleteChatMessage: function () {
    }
}