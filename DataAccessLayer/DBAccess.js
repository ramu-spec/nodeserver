var dbOpers = module.exports = {
    SaveMessage: function (data, dao) {
        dao.addItem(data, function (err) {
            if (err) {
                throw (err);
            }
        });
    },
    DeleteMessage: function () {
    },
    GetMessage: function () {
    }
}