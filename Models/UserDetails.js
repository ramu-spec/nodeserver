var userDet = module.exports = {
    user: function (displayname, socketid, email) {
        console.log('user function was called');
        this.username = '';
        this.displayname = displayname;
        this.socketid = socketid;
        this.email = email;
    }
}
