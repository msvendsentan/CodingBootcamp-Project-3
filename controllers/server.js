const db = require("../models");

module.exports = {
    method: function(req, res) {
        
        console.log("stuff here");

        //db.Collection.dbmethod()
    }
}

//get all open server requests, get table order (by guestid or even as a whole?), update server requests (in progress/complete), get/update payment confirmation, write finished requests to archive